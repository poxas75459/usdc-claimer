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
    "5pNGoLeWZ2A6JqTkdm5whF9Puer2qkN3iY9QkY3hRZVcjqcUwoRmdcR1Cpfg7p3nVF5iGCRNtHZ2bP8nbAE1Azvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wb5iCfx87uvzYeXAAQf5t5QDH9bMLJ9bTYo8L6pEA7R9AP2Sp9eUvM5UFF1Dzg23j5r2EwREzuCQgL6EruJYthn",
  "key1": "3zY93HsCnB7BVC6BF5VMaHyrp38ckQnwpxRQf84Qki1VgB28hhtx8Rzbn8mMqVzUCt7iaRvVWqV31mpqcBBMZQjc",
  "key2": "41xZMPoegj3nwyNpfxKbPTkniTGhnRLpxHjsErYtTR27eQJAR4LSeiLMyGvAYS1U9o78G87y9wJH3N2DRViZed6C",
  "key3": "3QEru4sPtgEt8k5HB4CwCv5dyAq338i58Ap9dqsjaKtBSGESteHzNGPWv4kg6yhnKYeB5VYDtbnAejboNMkpnrRQ",
  "key4": "ARysPHXyR5WmDbca5DmPDi5W9ZxirMEu6xiuBufUEjjeFQEXKvciEYRq9n7Ymoi2KxLkjv7ewWexdgqXVByAXBM",
  "key5": "5tNhKK8jWw7Wtpb9RDTTbGZdYskmzLq6PkwwkKBu998fgQBNRCEvm9NiZddmaQsrq1yeNnsMq6yM6hp1W8CjBNkV",
  "key6": "41mRpPUJBZjGYoJSD3k3F5vXZxcusptTXz5KbbByksHodTDgrtpVpAKK2AheC67jcoC6oNHgGiYxntasEjPGj4g1",
  "key7": "MZ5nbPHAUm9fvdjntwhKW8oHSzRoa4mYs3iv9t2hp4AWPKnHN2Qy9zCkz5p5QWtRpGQCujsjQyn1CzhPoUogyBb",
  "key8": "EqsJeNhNHU5VopJ6Q1haFno6X4b4npubLNxg2M1iyPbPxiBHAnGJ7D5hdacUtQ1LLwXGpaXZoojAydSBtUCunm9",
  "key9": "4N2FeVfr244ad8CHiMPZkKdUVRVvam8rLXSp53tEhcdAJu38uhcQNytZY96psT5rrUk4fraoF3AJkGdFg8u3Kzo2",
  "key10": "4Q6jsarTpCzAgE4hzwPiCfa9pnSCm2vihnbiavK6QegQgA56SpoY92ybKBPVj15g3JAhqEAR4wqrYEpaSQ6V591e",
  "key11": "KfogCKs2RUFmhKJeFh4Tj8pR7yDYR4wNyaanD6R77jivS7gwwUtp4L5zoof1PayBfRrWMLutMGmimxPciqcifGb",
  "key12": "3mpusmuy8CFUQaJzVqnQesooumow9YaivMtF6U8JBtc7SZoXDVg6wPKv3wynctwSju2JPVW4e9fEi9RJoxYobybw",
  "key13": "49wVJrSnSRqCprwLRwSvgxWpaWpMqRcBaqBg3WpDynjEu1kCQMTb1saGD22pGVxc9msPG8Z8fcEwMTe2ZUK3omzy",
  "key14": "2eV3UDmam7UZKguVg2JzTa3moBvttUEyxBX44voCfTqeD43xao66QYVktx3GsFgU3ZGjmFCBgFMvGVBG6n724TzA",
  "key15": "4n9yASQYUqgt1efH6FmtNbjb2exq6yDPxuLaFnSGeWDTBGQKNTpsBKATsqQrNDy2JTx6SrQ5Sbzfaf9DGa93UWxq",
  "key16": "n8bMC1QqxafUsFFVcZ5gjZX5akt5dBNCjCYvhHap7GZd6ksQUKfE6u2xviioEe8DZeHe4SRc7oYboGnVjaB3Ta5",
  "key17": "63hb3fV2bHTGxyuwF5ewkn91mXfygxig3RCUpNSsjLEH2hPTvG2apWuDPUskkFF2hKxZH4RcxtQ5KmkwsyoYDDkx",
  "key18": "3ZbP3QPytj6TwcHCYSY58drwAZGFDuoZXwar2ecxUEXN3337ynMJdZ7D5kCX2Ruw7E5XBqaAzC8NfhuVfKLyAL59",
  "key19": "4NVftQDWwUAvw9CUqx1DwXTvbistfExHG1g5UEwpBNiQAcT4WB5B7ozPxzQbUN6g1norjz87ZCYGAH9XunfJ9nvU",
  "key20": "5shTXZvB7eX7a1BPrJQ8iH9xFeRns4osPf57GrnSMgnR6noA4K1KnkZTib6wSAaXv629Dns9oUPc9pmnTbEQncJ2",
  "key21": "5AUPKwBuTBWmpJHZ4SSa2NepPJXXVDCvihuEAcXsvPhdYJn2Gh5NyHuJQe3pSGenWZDJemrcsbAVFvXCDvh5wJRV",
  "key22": "3ePAdUTG6du6rEr15k6VWsC8ySygyaDeZzGg7bwSLRqpzH9GsQCc5XUK9PbUeajipKzNLjAKoZk3sxdveWyVVbHq",
  "key23": "4PuQnVGEHxu48gzLfpinVkqH4JAUaitXFRyaq47mVsdEyiGNcAFCNvryRMVYJrKfxAkWiqhLVTWJwqzvTmPRv5VY",
  "key24": "2JEWgkdZGfa4dNRzNQ5AyjcA85btt96iyuScYCAQ2NyLTMT9mjxdXfqEmv2LPKgKQKHh2EvMwAa5um4uCqPZKNTc",
  "key25": "c9krKLWujFYMFUogEX47fsBxzb9oTRMS1yRj1ku39R3isCJuGHLvN21H9bY8yNb7yGfxaSYpLEFiBnp7yqyx9dm"
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
