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
    "5dJRXQyCkRmFX7xFRwoM6EZryJuu1Zy9f5UuBKCK4Jb4XBJoeCBDo6vhucEV7V1JMPTW1YSUdM67Gf9WB7KpgWmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mL11Qdppn6BXisn8fkYHC1H9bN6aG887tEJU5wUdbsGYQPWBGdFn5TDpT7pF4GBn8nAcELiafX2unch7Fvcc5v1",
  "key1": "5YhHQLDkNGtAHP9gQDhnxPQ8d8vDGKGMABxX22NBxcYToaGwYQ8fxDH9YKiBnQ2HGNpjSp7edyqeoFXwFN9Cp5h9",
  "key2": "3b28nyh4VSUWfHwb3cV5qt3MHjvZJ6S3jxBq1EaHoZSY6x8F8CVueZj6K8a9HEKjcBh7HGKXqyM9skupi4a8Myn6",
  "key3": "5rbZ3ukdJPPmAXD1gUceTDfZeQt92GKssCs7GCipWoh9zzUJqega681tWmy1xBakc56zBQq7J9TcKvX2R3Vcj4ZD",
  "key4": "3dSKA8YMiUgXJHYRg14hwn3DzLyZm5rLMYpiM9pEa57n1mx1LVfLjAL53qY5XMvVCoDaeLi71Kr5FS4tskVBBks4",
  "key5": "2DKWepWfCr5x9JHUUXtRm29eF7x38Aap1RwdrcWZ1wJUHs5ND1F95resYwQooaR4Tqu3X52JdfQr12Ua3XWMknsF",
  "key6": "2umKzmA1zbjFjXx7aBJdaVgo5Mx6r3reQNgyscs2XLySDAYWuNjpSJYVEZub5dpsnpWRKM61D7BeAcid2FYsxNtF",
  "key7": "41uchu6S32mmhSXLB3ELgSoLh3DdVz2yzpjeEVrqULSBxfvUDyDV6J1VNwe3ytg6wDmS5Ra8aMnu6TnNxbizf3Eq",
  "key8": "4BjhBeKpdtov9kwEjQWwBR6ekcmXzXCrE9dpCXiZ9DsfYA6dmezVHRz6f7h5jnzio9ShwvkX3TShG9GuMNvdsPhq",
  "key9": "4VscP16zC1sbgbEB8qFAo8V5jb7oyJQyAHEQLV4u6Tf2gkKhzcoYn1ZoJxSsPrjetVPUwmhoETtf7Z5aeCrf1UMs",
  "key10": "EWTQgiU5AXdLj7oQauCj5RVcXpifFAPLfzxNYikJWhLj9WTJ6W4bHmU8XMdoWFvE9ZPnpDPn9mSvh8wFbZr4PxZ",
  "key11": "4Zx3V291j38WWZ7Xr3RrUhKxB5TwjSyMr3yjzUCS4QL1aaC6xSwLaYj7hJVHMJGWPGxiKgwh92JBe4kJ9wNcR9u3",
  "key12": "BczMFiZjfNo9FaXPjAMmgeJtaE2SUBQCZomv4UCGLhoTFPG6x5VTG4bdwbWXtPdQnmo64pSpVV7nMRzdfVWQDAu",
  "key13": "Xspr4TpJvcReLGs74eRRgJ6PUQkpvHny8qaJ1eNBEujSkhxWipmXFDqphUV1KDTLn5rm9jHYnYTX5p17WJrnKvP",
  "key14": "xCYRdVKbYoP7XMHuc9dShSuGRQteX9rNZqjTJNxwgaqXqPYM8bFa4Ghwitgg1X1PbpcbzkoytZtEFT3TBYjPYAz",
  "key15": "2QRvWLZ1WNfAbe7XmxcaYb3wV4j792yovLeJaHXkCPfs4PW3XG2fwsaxKU2p28pSxtKw6Rg3pcPw5w7y3L9ZVkko",
  "key16": "4xTXc83DWhwY2Rmn5M3wau6wk5Hatq6A6ub2g2KvJF91f3TRFosqrVFJeFw9H4hS3zLBeFcnPbUnp5krg2do8VaH",
  "key17": "PC2z9uiKqXycTKtg8v7H6ZQB6LedroK55Y8hFaqrRaJhS1VHBSwcHWQ9zyzCJsbn3zj5zFW7BjgD8T2HNPvEMv1",
  "key18": "erBYpKJ3PK9BgLAKx5U5c74tKVeVgQ6uLZmN4frGb69w1ixyvSBwZexuYMciHAWwDj7T6yh5PhoTY38mi9DJKNY",
  "key19": "61au6o8gh1wB2mARM68BVsGPFj6GJymwgfg84nxjx691rUGtcusUn6ZUSokkbc4pD3ArvVwX8rn9QEoVAoh6neK7",
  "key20": "4WooHKnDbnh154A2hhNpdYUkiYcAFh4Pt6Z3kpMeo2Bkoo3MGF6UMUE16fwxcmMaSQyV8WynkYEVQFRGbtXtvj2B",
  "key21": "3x9jopSTCxmBN6PScVNrner9iB7habf9FwoCsKog7QX3toSxMUmKnBJwsnHJxUMxzWQ5TFn5mfEWv982JAELjapR",
  "key22": "5aewr5YvKnfMcUNjar2NUePWmxWQeAQqH6BjNi4npByAGp8CHJTWUskghGoZhdsypdETodmmTq599GQnTwMKc8Gd",
  "key23": "YhE8QPrk8nqUk2xkwHW84dDspxYKi61LCRyBc66N1hrgvEvPfSxs5Bzqcr75c1roHLk4xB8jAwggoZLjfng2uvL",
  "key24": "5MbHaz2jtMaHjzFipyUbUiYkPWyDxtFEJzUyekb7vH3v7UxQqCths1th5S7dQ1WMArvKqCfzgoxDon7wjjk7ki4x",
  "key25": "3nXtNxZaTSAQWQtBPArEV3i6jpVfHaL7adzDAnwFeXHBuiJ54pAnRdYhPCnA2rviuey2XCWPEauk59g5QXz4pDiV",
  "key26": "2qSWahchyHLJ1LQmW2VfTnpTAWoMiizyZcppqSkgLHVNv2nBQ3NbF77JEX5GKLEGP9LzUQj17A7oMwgASkT1NtFP",
  "key27": "3Ext5hr3ZLgnRsdZt2tusbGVsGqUuWSjBFo18BbwXkE711N49HRF6EsP9ij8DBcY8VhjF1tbNaeam43LWhrPJ5f8",
  "key28": "669A6tfEXJ26ZFPCa2uFdt5zdofTkksvextJ3NWKJQA1ZJxJwdnjmtbh9DtcL2rhrmohmjaEyh6uYoXj9qyRe41N",
  "key29": "39arQGLNbyDFqFBxoFeJGz3t41csg6ojbmZSizm3n4CkZrkbPhEuASR7F8mQe4wV84q8y1CwJSV6u3dfF9jCzgHw",
  "key30": "5w7nbxFCYFXnNwvdwvorQotkLihj7NTyb9wkDRRCN1y4BMdZo548iYVMmuTRq836MPtyL7VSnw7sYHapo5GEdiCg",
  "key31": "3EZb15ouJvpVCu6y7RH1B6aEyq45ULR7qKrJsnDdCB7DpCJYuuFgxZhshL3j1BfodsF8m5ZvWjEJJnVuoMdArjwf",
  "key32": "4qT9C7qBtqrr8zJFtxiXdzWhz6EnZbbiCC5vpdu9q3rxGyzHKqW6Q6xDVDeA21DfQ5FuNNGvSfEE8sPvWHZNsMuH",
  "key33": "4ykQxn25agDZqiPhbnh2THdzipM9FLPNP7V3ky3QLd8kT7MZ5jQWhZoDc8v3pm7tK8fQvDG5THx5Ke7e13Zk32Pm",
  "key34": "3WPBLDtApsNVsWjV6DLwhxGxpfMvrANsXqp1AvFVDkYGyKZah8Pyuq8tpACRHroFayR3oDRj3C4V7nHSGsj8itEj",
  "key35": "4e2pwgS6Fg7uxsUPQWX67638fio3xyKwsyqrQooYniG3Se2sDV5wx8ho8uXzZGDGWSkBQRxBjLnaSXaqqyM3yLPb",
  "key36": "2jg4eTdMfx9ZY58uJbqdfgPSK2mHa1pSL34DMR2VtJnMRzVZCiN7EmA8qLtefxZPExQsGajxKPcxnhYYmZGrT6Uo",
  "key37": "L4eGT6fh6usMYAmc726TDRbKwxjfsdpg28Q9cLn4A2xtkxiEnbCBbuZcURUbV8fkvYiPNzFmgGFZMNMmrTSEnvb",
  "key38": "mDHKrMh52W1wygKCPFrfqyvJqq7MhhdY2v88p8ZwZ8j2fPtcUPffdgincfuwHKx9RCZzgyuyxPUQfwXPiGVtF4x",
  "key39": "3cczgDMYWYRvG4uJeoZJ8SnBP6KsEM8CmshaFQg6SDVVp1GrEAya13fznC4MHZQDjT64ijQfqA58ffL81j9cU6qD",
  "key40": "UhUf35vHqt3qFqzCecGHGJFKe4Busi6aS7YTrwrjYQN4qrdD1QGShrqAd4huZD9e4GYmXhq8oE9vgkw4fHxUcCx",
  "key41": "4gT7mDCdHPYUcyfqjQRdrd9ZQLQ2uygBsJH9QEgFRp1aQGtUiPB3csuhxsFvwZ3vMt2Drb1p19QAoxsCXaV5axv",
  "key42": "4sbLzSSVd4uXe9vxqDh6d9YEHMAJkqDtvacuffRxGyrShKyFb3oauBYYVRZ6Z4R7ZfY2nr9Jo57UomrhgvDj2Ube",
  "key43": "3Wj3VwuLdnGUnnjbzyfsnjR1FBCGavjxtXfaKrt8BmoYLNQVpQ7ysvrtvMxQzsirZNEL4Vzh9eimLgdccvzDB6wJ",
  "key44": "p7cQD2nFuJprN9swa1botwFCSXcCRHLCjKzQVsJjtNFqvEUQtfTK1zSL49tY3G4QGpYmcH9eWYVNMNP4bG6rBkm",
  "key45": "65rcVVNvac3fvLLJqrSovN6myvKKDA6WYNFKUeYvyK7mJMuGyLPZt7ggCvMHdiUf7EogV2fwVJgc2myNZnoEK7Bx"
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
