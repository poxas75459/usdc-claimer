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
    "2pCvhiC8x22sd9x4Ga4kHHWDDM6suu15Am9RJHE8z3XeuuxWubpSWkPAZ4jk2eoEAZQ145gWvVnHT5WtbkJirJ7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44R9npdsptBPn7HkUxqmrCtpRVUf4TTBsDVKb3HASiNQWd86LtiPd1eFsnxha5vmBTzxTgtYwbXzma1AtTrNrQXM",
  "key1": "2jzECA61HbNRdvCVJLVrX4z7p7cW7c1dR3xu4WXq7VX5HbfueHCrGCJLdfXboKRrRrb4f8UrC3sYDgS3CwX4psFi",
  "key2": "3iqExQgwxQx5xFLeJ9yNGuTnbZof2WFv6DDUf6bLNrdUjAFSW7ruZHhRKLmaT8xsSmq7yBvLn8U8M5aHThKzfx87",
  "key3": "5hDDhtZ5BSp2bXfzwPRUC89R5Nx2sTANeSsFB3cgKqAoZyzxzhrHJzbv5LuuUtAtJGg9nRCspBcJgaCVaiuLcrSd",
  "key4": "21Hv3URFFEGXho3DPPET5sHkN17jYjFuAMTsrzXo72gWVp2ojmNMwoLn1GjNncQj9eNJfSUJGhATiLMPGoomMhZC",
  "key5": "2SSwTgjdsbWmdGNXd2aTELDExQb1jSa5JExMwEr6HbyAh8nx3ZGAckbejCP2nQDpEaCySsnDNR1EwRnNx5bKhVVx",
  "key6": "3fbyLZSpXhtBz1vMjr8ktfDtZsTwS9WD9tUGdsipfcVBnB2h8Jy6NTRTTSp6H4yHCa3VGwb5wTwvvm1VFbeufXKn",
  "key7": "37MAZn5pqgdFkUn6P96oni1QbY6GQs1mFP1HmzgcY79ZSBqsQGzUdovvLYS5bWuNSNirz3R8hQCvV3VTJ3jnZMwL",
  "key8": "4hCTGAjheYowq66gXVMUzu57aULjUxg5LVdtJ4SJ6PFgFENZgkzmp2tmshcYTtTwY4xd2jAoNFghSmMUuYXzE3g9",
  "key9": "3AkpVEH9N3uWzJXxRXVYbTS95M88dbh24M6A7RSzWXAqyvNu1hMv9eqvfZcAnLDEnh99h8jxmzBHDQgTUE9WgDXG",
  "key10": "CSxxwwbb5K2WbVoDMs5a5RLkF1QoZatz1zVgC6xhB7kfRE5Jf771hoCegNHSBD6zvp6Defu5Uhuraex7fs4U8eD",
  "key11": "3XTzUZ34fanh2PM9UkwbsKZYxA6sZ1VrjdmdfkNnfBKrniKm8TUSfY6NyoVTuEbu6fnSt9XTWoqEQALDyAVMxV5D",
  "key12": "Ytqd6Bjm7kDj6N1NTAwuERHDnnswReuXZwHspDpTXtNewAXxqhpjXRPPhcKV8jB8PVtsy2SryNjGpCXnn9B42Ej",
  "key13": "zkJuv44gHg3ron35mtuuN4CejV7YXg6d8QYXwjmsJDp5FKnpgEZxaZZ5uAYJK9atkvTAXrQCJStoktofJ6QAEKD",
  "key14": "4THPobEgSutp1A3NfzNi76KHsMdXN8Pi4T4kvaBJH5d1PV6cdiNtaNYZDiv64WBbdBmZoNKWNNKDDxK3vbdCkkyz",
  "key15": "3mMigqTy6EpozK8UszFGaw9CTnyb52bafKMyLuUjHmRs5vo4P6YvKw7WLWpZ25q9sWPcmjojih6HdvJFuiRQuFFa",
  "key16": "2QzwrS5jrYgbXzQkwQGXo7dLm665uQa92yCmEHhKAQ9YJ7LPH6zxKBMLSEu6i13sGK1525VPGfnRpwz1P8d3uQWT",
  "key17": "3MhEzNArE7EyN3yAbiwYWDGtd91kJkkgxpxw5MBE4xzWGMSoSdcsci51x4bd1DqM8sJeeUjrqihEoXQuCbK49U1E",
  "key18": "3YAM6HQ1xi41NUDztFuanz5yq1fBiK8mBUjfQwqCzrGQfbhZePiiCfXTtCvoQFgxVdmB73swWWn48EmgBhTVbJuH",
  "key19": "4W8aZWiyvnExoLFG3JZoRoBU5FV9fMfAngLBcu6sRKYXv2qBMNR9MrUwTvGEmCCaN5S7byM3wWnfprkGAEegMtKk",
  "key20": "28u9bTgSyCFQVnzRsftkWiSAFA471qsyPTc2r4WBPRVnCSiFpKRCQQZf8ecau9ZStGHZCDypmY3QbB9cnyCDAci6",
  "key21": "2NiMckYZfbGDqwEvZkb9MLmv8MsBVBfu72DJptaPwaJA8pphXsTAn3JAdy5X6BBpeG9JoYvDJxCdrjxEFYU6PtxZ",
  "key22": "2KrqLwkXvu9LmHrYiGctQkdvSTaxq7y4Vbb34ZKbAEB6xd6L1ARR1AnMd5xtt1qCm3122VvDm8vLFzcuBDXjee99",
  "key23": "3bC8yAnq5YpQvAHw457WVAkDMSfUoH5hdTAiGLiUgZvu6fwvK8jWmjVPFGQTbzmEHP4yndEUtbDbxcse7iYhsX8h",
  "key24": "uEWV14U1uWUrPizrmoKLHMFzWoAagNxLhEqFGn8deLN3kWopcbg6byxJp5PB5d9FfNQiu97EWjQgsCbCUJpx17A",
  "key25": "5wdmxSQDFPuvtjUd9d8YBjz5BPamf13bdMyiGKt5t3UYKvf5iZDHSRQbWtRq5UCdj4QKDvBFipFZkT1LZ8MnPvtF",
  "key26": "JyBuMv7vj8YWtJpk7s8sofw4fQcv1wkeufQ42Ey28Riarwshhvguu6CfmgW3WwaBLKgZHQwt9Lzs98WRzxtz4zB",
  "key27": "3qN24KbtG3MTHbsPbox9v3P4wR6XaQ3Frg58DTJvavqBSm1yNKuiHHYwKT2AYuwFs4ybS3ThvCKY7tAGF9bJQwhr",
  "key28": "nxMB3o1VKMWTKEDo6s5nWBihgBfTbu1EF1Dz7v1pRrHytTyuJft2Y6EEgA4kujL64BUwsHsb4ahTV3qaPMPjvHp",
  "key29": "3Gc2kk4Uq5f4HE7rwny1XAeGS4VyQfzJdbijd3N9rNuTrNhzzq56RgaT9bwSSfa3rtyUfVkp5RpLckx8RTkpijGt",
  "key30": "ZWdpxZgE5qGWjeFtNNUYwWKY8gmoFW7tL5Di4YaDVVpCDGBDsyb73Bv7VrRRrMQJVJuDRpEeFgHtSnEvrCyeZC9",
  "key31": "4CCd93p22RQig8vJc1rYx6AZa5hVR3u7K8tKCDTWGdKhbdqNdvALmwdcujJvRJgjVFKXRYLr9VPV8nDcMA3SfW9a",
  "key32": "3CaneHgKtPg5fiXfLhWrWZ2p3GTRXNcbCwUY1YyYvsgRHwt8KeHjhW3eamcYW6sXx1YAAFeScP9f6acAvbdReRLu",
  "key33": "SqJvvxXkM1VRQXkz1DVVVbzmxNw3NrqKSApB6ZzPtsU4CbznW2bKt3ZRe7TtXpBkFMVb6B6TW2Q3GkCDXNrwbWq",
  "key34": "5ZGVym9C3QEK9nZCDw47uu6wodPaWpsj1q6xTo6a3kCugrMASzRwtGC4Kp3YdHvZfaK4NEESPZo8jENNT2sHBwB4",
  "key35": "5JdkGEBX5qbLXxtPSX6iCehnVLt1vack7XvjNM6C7v23SirG1zTWLp4GSduA793qmi2crF87dJujRNYdGpcM4AGc",
  "key36": "5Qdt3fq1BjvPtAssE9pF3JfpE5Xmrg8Tvgy2y3sHFdN3oCDKtqsCrmdmpp47nEB7HJM27yujn6oLtbwdsvXepvWC",
  "key37": "4BdeVjUeupZBZbvxLTKg9ZJsmcfZtRdobnr7xRZMsCcuui49wZuJRfezmabxkzfa4Jg2i9zsDM1b7FmrCp2h6VNs",
  "key38": "4uoqpKTWsK2NiBzVw6ZpBy21vUxXnjXcYnuCCUxLPy2ipBB8D4TzSNVNVoHiP7uG3C5XTattqM3GAoynoQn3e2Ct",
  "key39": "2qvHw9XzGAZ75wuHJzGDqWKEd6gih3j6FM8HwuLpPtQMJsyAZawNgMRR8MMGmKhZbc7wW6gitwCAFpEPNncTUAQ8",
  "key40": "aocFbLwBbKNyyG4AEVafCWRsQzjHUVSxzQACFaDZXexmZcNseeYLwpmr9hUUYtMxY43LdFvesLW6wWpFkETTY3W",
  "key41": "53csFBP24Uff5WNZ9JGHHmBDPNgGHeuoAaZGu9oa73ghZGWPabeUj4PVfPMvjWmSK9q5derbjJRu2AEdJSLF5X2d",
  "key42": "9aqUYLnGYEyjeN9BskKsJzdf5yAJ6mgc7PEth7xPNMh736PNnAcjY84spu4zpVoXax7fiSpG1H9ECvMCmHN71SC"
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
