/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "1QfgJX6M7zo1iMNcR62FACq4YgM2VFmr36UWt8sxjdmE5QwpaCh6qu1eRwRTy3ZqjkfrF2x8RV6BboQAwd8shDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZC5vUx7naVRaFkdSJ5oBgvN8ggvdF9MSA8ASN9oFk1nU2FiDkVyxaSYxRpNf8pvyWGom6mrGadRhuhzLjWhUC2G",
  "key1": "3izZfbNtP5QRuNN7j46nKcZmY5vWbZ31E451eDZWwn8dvmyBCn3JoTc1eNLbe6JTFZcdyZQzu4ovGj4ZaeDi6BxV",
  "key2": "2oLxe3VTYuNhR9qxAhV2mca1CnzWcEDyBoMqvDKkGpRwQU4Q3ghoAqa2bn2qCh8ATYfPLLyocnsxjsYofRNFdipz",
  "key3": "G4HXg46HbVdy6i8U1mJ3MFC2WTL52Y2MXRZ8GYihWnvv9wCCTXmt6nb63fga9X6FnrFfFfxNvnHJCFxa2BKvkt8",
  "key4": "2eM4bjVgGsuREGR7Y3ZxJ7BGTQY3ad5uKCWEKfDbrmggDXvBikc3gZMqvNshu2iVNi8neYM9p9tgAvJheeCSF4Vf",
  "key5": "5arx12BeJbPq9Uu92LmD9JucfnvgkhiseBUZBhW7j4qMqkdJHfDzE6JeMD3BCkm1Am6ooPg8YoZRVDGHX2CaCLS8",
  "key6": "2uaZEHn9APs7WS5WW636FCVvcnQHiC13xE7Tx1fnRKC252g7YfLLuqYsLXpLpSSVcDcq32L6kzb9t7KEe8q9ED1U",
  "key7": "3k75Vdf9S5gK9xsNQ16hgiB26zH7fN1cP8aERDZobC23JhrQnbtVSVWssR9e4UTdaEhaUiwS9fyTs15e98ewyTVx",
  "key8": "5hXwNmiTdNvSrRBRpnrLyN5Yo6wYcZVaQJdgSZmT5jYAN9cWspbGVudUpPaKhuyJrXWRSPc5bwv3BN6VgTYNTmRs",
  "key9": "4zUsqP4Xu9S8ZbcqhuZuFQTFqpDnSLGbjMatVuTankosHRNMKMMTtsT115NAWjLk97dCJXpVJTknxrEAJd9DLFNo",
  "key10": "SbMjrUffUDLoueqY5w4oMGmJJcb7gF9CV8HQzzy1KuNPHAcdZ5JF1gkmrn9ryosLcWdj84Tf8kCcX4V31CEWETj",
  "key11": "524ntMzGqCaFzfTzjxV8ec1PJWPd294DGfLPKZ94jx78pRj1PRAKa8t27Me2Q4Ptv6aNc5v7a1DVEdh3XHXij1rW",
  "key12": "41FLrAGvyyhNfxSsRH29vECdm9kVEDdSpmAmZznyFGfF5Sspaarnd1vpWiHZNsJeGMpvzfdsPV937ewktnbgePJB",
  "key13": "3RRFNzKCAZKDz97GAFaDgdHT7euiLfCdwefHjAm5vf8mLN1pycbmAWpDeMeSgq3ycr8bBehr3q9TrDZCRm9wtNNQ",
  "key14": "s9kY5DBthpugS1kxZgRfbhufbzna2D3qRnjvU1Vs8SnRdapNUBaBFxJ1yYdDm6JXtxPKcZcDiQiMDBpKbwEpjrS",
  "key15": "rb98oE8utEXW5TyCdWdYFtARcgXTd94DhNAWeEzh3mHAR4EGPprkWWxP8y394RrxD3jbpdFb7yYBuFFSajGCbP4",
  "key16": "4dbBXXFs3rBNEHeNzmchxCqYK5dwxtp5CC8LexRYpJXrvcH8u9j2EcTkvWPXzseaXRCvkYFAksHqDbKTDNK1Hvf3",
  "key17": "2V3EqXBnrcZS6YdpkZqQmimYw6RfD663shWaanAmfTEYfEqXkERtDnyN2H2nsJHSV7CyRSTEtfLybuTQncT7UG8v",
  "key18": "2iSNt8RwCajx4KHozakv9yZ1QwouMY37qwu4Mxv9bxS8H8QcJXNbEBcSrxkFCsV8BJNFxzh1EmYPGisFh5jyDH9C",
  "key19": "4His2Z7DxC4dPscurAdWTsm4gQa92yJxAqQZKUk12Jg2HJ1LmMmADehfGkTrWU3CZFU4W6irVL4Eknmx9gQ4qPPJ",
  "key20": "4gk8fFfSax4WyZ2PFiqPe6WLJKV8HCLynNEsv7SkjM5DZ3qZyAKB4RwgnH4L6iVZ8cwDxjHdiMzwUs3NMVGdA2H3",
  "key21": "5vqpx6P3B3mw8LHWynsYez2m9ZHu7cBYwm4VcesJ2UwgAJ5p9c3r7DXzEc99mXD2HMwynkvv6cAYC4xpiQf5XY8V",
  "key22": "5ZEQ4mb6NNnxhG9sEPbkKCA2vcLFy1vc8uULtpFtQWYoktaS1p7nW2btWkRmmDJyU8nCEAUvUfCxpJXD9Vg1UVoa",
  "key23": "5Um53smxrkiV39YA6bZ1xqwwzpQKhb37nfENgNxvLbCYNJgGi2CAnUpajNeQNsGAADrzpSoWWkA27YHYai6NzhU1",
  "key24": "4MbbdP34MBGkDJ8cEkdjvRktjwKnT34pUjcE3bf4WQhTgM4UWgFDxR639HRefLAyMAXF6Ck2zVqmZVh3cD1E3iMo",
  "key25": "5sMifYzkstB4j55uchYxHT3kbW6gxpEytLgNYkbdzBvNMJYdhUmN98wQu7CPMG5iaUyc4Q82Wwee89syaqCBzcEs",
  "key26": "2e77huFqvc33tXkuGZTEg97zQN7MVwenSKan3k241uY8wqk75cLgUt7wXPWPHtJTyX4Ph5S3yGkDXyxw7rYu5LwU",
  "key27": "XFmZfxBXCXjZzUrD88zReu3q6pcTfYURDGNLn3MBkLaLPzow3z99Arr1Y5cnddgcCTZurNftag6c1gWsANn8nz4",
  "key28": "2UzZ8VWaE8umMk7dYfz9E7tFmHV1fAeAcgta7JCuwd5bs7J7e7KqRS9euPPxNtAFG6DVmJt47q45nDg3HuzQ6r4s",
  "key29": "4s6wjDGZ6He7q81R1Ega5E8BYwfy8h3EkmKgctocLaDf8stXEWneBBzky25RkQb9bGbWRnJ1hffJigLERPTEn2Rv",
  "key30": "2mjX23Ek8qeATgEVF1buYLovAbpVWNNzFDTGbfa15WiHeKYygQnzfsZXpYk7rrodYsSvWpDnuGp9TPq9vahdMvKZ",
  "key31": "2pTGoQ6BpW6FT2iPANjJGkTCiwEUMuDvHQ7Ck3MEuvDSMqLxsj9fxGagCTp9gu7Fn9sFszdCHsfXi7F4WwX1vwpf",
  "key32": "QaRvRsJRL4PPJZ3b6MnFBaspLHbHrfsfwWCQnfzPG5fErNVJbn1motor1pcaHJYbNh5Dh1PA33uu1S9mRGRfao3",
  "key33": "3GZashsD1DfJX8WfQbLbL1pZkZYkfxUNDUxQkPfCBkDtxkoZsPqUR9j4dQn66Jx6sEx4C4aDfmTSj5crZYGe5rSr"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
