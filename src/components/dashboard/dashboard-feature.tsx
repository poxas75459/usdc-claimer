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
    "5vDpVDSyJz8yHB6VPPjPJh1CN9cUaf4EXZUJmvVEngUs1fMSt2rt8d4uMXZCAoWSbwPBYP5vVnDbTZM74UN2qgSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57H1etFz2VTRTj715wzqydGd2LWuVbggwMcGdZJ2yoeS4vdHAgPEMUndHcpazPCQJRJ7SdkdTKZ3exunvrdw6fQj",
  "key1": "Cq1LfRsysY9y1LbBw5udPLmtisKqPLkSRJ9kfuapuAWi8niK6owpbCWaQngobMegHTvC46PeXDFvBB4aabqYJBK",
  "key2": "5kE3HYLFVmddsPAHzFz9xpkVYjdWwKPW2F4AXkiE58APqBdRQDw5jQiS7zWP1KXmWdMhHWtK4mJ65mXYRX83peop",
  "key3": "ybSketgXTMNnD5mG9p6Yo4ikYukDx8ejYXPhB94badA6bomLb76XUoazpHywVK89ohT65t4MMS826tn31rcbyBQ",
  "key4": "3AFEtRXxUiWYwhUprshkuP7kRuZswFuZhht97fj73KJXf76uwzHsgHzi726xP1zGPhJ2BunWiAVScTKpN7qTY2Zi",
  "key5": "3wP8isJVdKMcmwGu3QinSYkHUJb3PUAmu3wQYB9BTRyrR1RBLv7BHptkYjRAhLr9UxtgaT4pgTyS17RkiFcbSL4y",
  "key6": "3D9v4wDy7637k7Tv12BkHVf1wJiaV53B2uxAtWBJS511nPZqNdn8Hne9X6zR2fFsXJwT5zfq2wKpCmCNS6kQfZxz",
  "key7": "v9GMMwwzFTCdbEXBPxMbLvNYfmxYP33XB9vLMrHCgGeh4K8QKnjDFJMEbJQ4TAwrssyKVnd31psYJrTMDf1HEFJ",
  "key8": "2ZrQPG2jPqKK7TRkhe6MnpdMqwZZjSkVBg2L2UQ3cAgesBhM6GYuX9B2USvpGsQxRDGWxHXWeFKUgKUZXaXpyGqc",
  "key9": "64Tmvp6BkNWxW9xpssLftHTxE6L8eU5JaNxmx8Xxo3jfX9jQcstGP4banKJVDNugstMgeiuMokZ4aw3KTeCLUse9",
  "key10": "2uXsV2bD8NjkcSDBoi3jHyRXvfQxR1cNFSuXTQ2Co3fzFpmQJJTnNBvLKqYGtDbtvEG3fejKpg4CrvWnSgaSCjub",
  "key11": "3hB1tBJzARGUgDYzLpjroJiu7w1jd91uktShzPy9Jhr27WchroYnjLmsr1fRjf8Vy6BUxQKLyU1NeNHZ525EG8JA",
  "key12": "4b6tfw6Evvdrc4rX7uH61ohaUKST6he5FE4rSwP52JPMpD3QMpP5uQW8wLtoXUBgrTpz8u4yvNA3pDRrMtA8eJRX",
  "key13": "bRGEBCa4ai6MnbwL6RmPGgNZuwna1UX6J7JwsWeZRhn3hE9TgPVEHUS3ofMvgXQPgKmiRwAX7FAE6cdCYUGmJu3",
  "key14": "2RAasR7J2P2no23r7TB44vFDX5NZvnSgNRRkniu6anRZtTPhLnv4UJJXkQRX7Y34bHkN89zGrUm42j7xpyNo7xMD",
  "key15": "5EbcJu6bHsa83ZwLinZTnfA8MHsEAis2HAzEGaLoP7WtHVyAW2Yi9vvscciGMjt5vghY4SPGQeQHQNSMUJJSh9Ks",
  "key16": "5e5bBLk1E3jQBqz6FqSRPVhJ7znpdKrZgkMBoJXawy923NCQU97BYhNwpsesv4ajeVQxmsJ5LQJ4yJCs42zsMU4J",
  "key17": "3wnxp19z8wS19NzZwJfmYJEz1qZgB5Y2GQBH5eBxCQzWiewuphKagcEhKrPiX5J35JYqK8R4BKfG7QLH1iYkATjL",
  "key18": "9Pmefv8fYj6rUfu9jhrFRHK6UkFQfevpeY7wWhK4pNu1TPWF6QD4wZX2ThJpfy5EXqoubf9on9C7rZd6es3Uvuo",
  "key19": "3eBfrshbbeQ6KVbsCv563DQGGyM19gqUmzqFaVeFDmrRB76Pqe5ioD1wzbj5FjUgCmzs5X7nHCFK3qxunJcr1VDe",
  "key20": "2bfcPLfb66bTUJnGMdUAxXFE7d9iWhVBPZa9E1XCYzi4ZeAktKYfezJ8iAaPJg8q3bUHEfW3nzAdh6NjBoJsPMM",
  "key21": "3GLoDR9C27jvjph82KJTHFemmzD5B3qFtG6Nas76tpHqDbLVkx5jUPWdnm7WBnWDLdbHnLFD9yinotQTSbaEb8ym",
  "key22": "44cWxeufdnekVBZQzUVaLLUxN1QDo1D12T2f9wsC2MgLmiKWJpRZNvWxokEzUDLSUNs1NEUgPGUJHxGzPJYYLfJv",
  "key23": "4McK6vffFFwQnMQarcnZoMiVCM5jQomi9HHYS1EsXSdjuSdqmx12Q3BrQrfKnoT63FxEBSfxVXaDYxX3vYdKXPJL",
  "key24": "2wsDD7faWEVz1BFBSAMDbSvP6u6xTHefTPbB1PjJhNvJxjhAFrrmFKS4XyuESWLCQVz6WkxmH7SwtxATvoqqnTtf",
  "key25": "YHZkR8Fszd4sBwDasjyBuscLbAAgHRK1hxWWTrS3de8GXRTFrKcZZX9aQHkFCbvJBzDG6tXNnb8MG4SWPp2dtcc",
  "key26": "4bJBnuPfVDgQ8SjNo3A3c6JKdCe2pBgV4CiyMP17DMd5Lg3woAVXQH5iDqvxwQBbpQTpZywDxLkzY3Vqu827KKih"
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
