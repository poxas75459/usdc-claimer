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
    "5AW6KrZYmQEvEEBxFsoVcMrmp4aRBKibVdBhgsq7NnnLVtWriBLP9EfE9AWJEsrkBfJmFBfXVNXh5Bqy4mZNBukQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xu5vbZExw3BuQPvYiw3LgUnpuvd384qZk27WjW2Zg4yzaSqKEwWPxL5pb2NNVe47uvrtWvfqm9xi2n9aKgGX1hw",
  "key1": "4mWbXoM39LiWRgAooJbMevXgEF1NbRggQhvraH8ksL87wozFMHt2HDKbELfjaRP7izDuTdjr2q2GKpAsmUd2jpVo",
  "key2": "5nc7cwNLVL8RrmnjdShdF5Tnzy46SRqDtDVS7tve9XVBsTvjgrFvcq2StbKQvfWNRFzQvCoPNJ39h8N1ue6ZunsW",
  "key3": "2BTcqtjdcjWwK1Ro6EkW5ZaMGLgCP2eh3tZUKgdyzuZ7E6htguPsm6sTtW4KQBG13dui843Mc3LdjvX6h1rP5R5J",
  "key4": "652cSETzZ6Bt8cD2QKbBCQhamehFfWqUP3LbhZsS8MAi2JbfvvFe4avPE3DGMNXcPTaZbGgkd3rVxJAPWXjUKfEu",
  "key5": "25Ka7NgBpD5qfYD6gjr5kaDuMnEpRs4wEJFfhMnPb9fEP2UJkDpeUcTsyirf8GdR5JxvGsCeNw3n3N13Q7D3hJXx",
  "key6": "66HD5yDwZ1eu8TdgGtT9UhVqMQrDCngY43UnyV7GBxMcvAfBEQTxSJN9MEW9ZUPgy3oDvqgjTNqMKYQ4fcqt3bKW",
  "key7": "NwjmMe8ezYXmnEXDHthFBvLRY1NXmqD2q5Ev8AwdYPUptxdGe3vPEqC8ehYp3jkpm6LMysLf8rM2h8XdEs3v7Qj",
  "key8": "vybyxUcpMzVvQV1wyEHAU3BnVE2ZAfA7M3osb6yVemnCNfRQUAEtCgxpEh382guTeUPV5t8uAfjcisBKC5zjZJ5",
  "key9": "3mUyXxcXD45WKxaKaxCvThnAzGRU62MyL8exoMfyrT7WJ2zjY193eTrNAWy78irdWdiDPfzAcyQk2LiBHY3u5UfU",
  "key10": "2FxZg6Crv4gC9mJKn8bCuVnBPacvu4FTx3J1yeZDPNGo4eKWTTGcUnCbCNQrUcckjN61xhaqoS9LqWunAtGvJimo",
  "key11": "32gQHyS2BBiTjpM6NnzkuWAuwBHyJETNMkvzyM4ZZxFMkRei5iz4WfuXrkBfPVYodFbFnSiVbSGezpFTJpdqU6AH",
  "key12": "DLMmTvXttXggo2N9BY41NEjczqS78DvhnDX71D3xTj9d5AkY4kM1rvBnMVgjkPVun7q2hLbmnTnjUjtV4aNNG7e",
  "key13": "5KzvqfUT8PjsqTwpie8h5gQBh89XxdtmWYA86hZ8PLo53Z1hjU8nGK1CcUbnAVjwgGcAxFnmMBJRn8jLyZawFx48",
  "key14": "2xVMBumJqrGSNCK4Jkg3oBKp5a3ZX7trW1eABmA7hdH3xjt3YhsWGBukVpb8SZb8TaoC5469CxjECdVuMyTz51Q3",
  "key15": "2EVux4geuXpCCT9xpJfFtacWLGCZ2qS1PXux4u7Z4GVuHvvQHQq8bbvPYfxpgaXdQ6na55xkuD164vbddj9iQnKm",
  "key16": "2HprzvkWihuuSL5o3Jc4KTX6wW8skX7WVgNnyyr6o2dqaTtkHgTjKnN8EpDCm242CSAoJqxbp6tRq7TaqQKncqm5",
  "key17": "5aKBJPM2spHdvrbF2D47g2pHBdGN9Kwqm2ZEqPMQYaQM8YfM9QuiifWESSssd3egRsyvU24Raq7Y6usBsgS8tGw3",
  "key18": "MUygwYFMv8B2PVqYqPMGfSeFnZsUgGdxkmbyyRbMh1Y4cZkigUE6ZY1qCshpyRmQfd8ygmLbLT8yGUkM54ct2id",
  "key19": "3mbco8aFDRDCjDvPrN9bSidBAAbBA13wS55yWRDktKWG7VPZKHmhtTB7VWSVP2d5FpCL2zUA4SzuxRbuhRMNytCM",
  "key20": "2Qmkcfd5K7xfv9GSk1rmpMQQGMQwfQkRptasyiDhiVir5ZApDY9Fd7KJbYgyhSJyi9GV3TngoY5gaFfFzJZwMwsG",
  "key21": "NRQjSJ8jv8PKHL3Mj7dMviTVY7wvtt2iXCKgSB1o2aQq6izfRkBoxwUMW4rDffTCGpdvFnJxwMJSNvAB5e9FMc2",
  "key22": "5o2x1ucGS87GxHp2c5Dx9gbXkiQWSMuvhdPXDfc9fqkNXzynRp9EUwFK6sJYAkLUVTs3eYrt9GT2KFPp5UnC8BDb",
  "key23": "3xxYrfYAJnR62kdgDnzNTFABtoZGwcAY1gVi4AfrN2K2APQMiuUAQdiLe8ihQqwp8ai1fEVWv8uRNhdV4moeQqLF",
  "key24": "4qZSgJf7rFdi8V7EGHPXE8PSEj9RSszaB2AMfApf3a837LEWKaoWBn2DNQAZEuHf7bJwcQKhR4KoWpcESS3K9fR",
  "key25": "3YzfrBPd3TfZAt7uw7XsKsAtnfdv1fkyDFG7mD79QHoj78t6ZAeo4HqgGpkLBH92agbxC9LrA96fjVDw69QPCQ8T",
  "key26": "Tjjez1jS9UuXK8wbJiJggXDQCqRQGze8xZu79zezh7Dt8RD3BhFJAHNw9XN9dLgPTjfe54JHoSN71bsMQsmCfFi",
  "key27": "CgpqL6xBbU7taKkNfJyVgsdq7fde3Ze8iSak1hSUgtaTgVMnPrqTrjG7XsWe9stS6YmU5xLn4HvzfNJVjdGM2a1",
  "key28": "46u2U9cTfUbGiRkVyKk1DoUq9T2aDqcbAHevXq6d7mfqNrLtRA1eKiRnkjJY4wQaMu8BacngjmEDnqmReEDafnSP",
  "key29": "3bcnBbNgKEvmSRNUWahHS7MeB1pV85WxsVBVuA9Noq9vFdHxejE4iz9bEVRAMr9mmTUJEwHEnskVH3GHLmE6QqCp",
  "key30": "3g7XWiBw9DZUjor6EswXjSGChqabY61kXthsMq5JYVJRSL7p8GM9Gos7o4wHhfYn4rP6Ar1gAvdX7Rm8RG6Nxt6k",
  "key31": "5PTQKAbWK4jcfFgx4HMaMCov7DXCwEC8FcFzR8mfpdksXUq38gvLWk2M46PeWv2ANF3oCTpxnYTe4gkNmyqpyH8W",
  "key32": "GwCq3CYtNGFSebiz2BZmDEM5mpTx7Pqn4DPbQDHfSjjb78eevkNeGJzo31WVxSpduocKkBpzJzQjaVBAEw4K5p3",
  "key33": "3UQzVD8bzkdsT5qbq9T4NYwT2xH5bWQhhi9ghMkSddkaFV6XHEUYoj32NEYBnKEoBsit4NmqF6ovHEDCW12F1c5Z",
  "key34": "5A3RSvdJAppKENPufnt8aRuiixPKnZZtq1gRqJ28u4v8sE3oGTLiTYuAsRtKtdSDrYUPma1jXmgc78ZgDQYBMBfo",
  "key35": "1Vs8TBxi78pFDUu3ur9rtE6BmcBFwdn2x9j8RfJfPkFJgWyM8FjbqRTZ4HjsySraM4gpyHcAno2FdL5pzF3DinS",
  "key36": "263ERs11d8pdbbzvL2YuPBFjbDge5KqhipSDDgDACfDVMrz5DHb8HpfHuwhqnfUU9BTzpqNdL22visCSGRhMXmHG"
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
