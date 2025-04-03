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
    "2mfnmj7B114VwHoTeWvLE1zE3SDdWWneiXFx1LfSuipY4sG9LBpxt5GV96FQvQFtKDm4uLQqHKwpULCzsaLy4rvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gMzpE6qT7hWswqvCvUzmy3MtjD9gQ1Enk3bC745NPfjQVqMwbidMnQmetssvy5yyJgULoVqrDdi29rfTzYrFuSZ",
  "key1": "5FFPn11o1Msoha3Y7f1NVQY8weyNbKwkSyprY7BU7ifut2cunBNYNZDKaSnB56V5UHC9sVoSRD5pWWW2gServRR7",
  "key2": "31a91w5abH1erirPcnm3LLxEgP1VBWzaV4aXZ9F4kUDR9XQS73qM2B1v8FJ56y1TsDVnXwTHS3ZtRxMbgoaXZUCA",
  "key3": "3z4o1D3hi7yDcPJA8t1aMUaWjZMDH7JJWoLEErqcEjRDt2QNVsPMu1reEJ7oafJzpEBNLm2KV7B8F9rMc58ML9N7",
  "key4": "2h4h3Aroqg8C9z9RJmWatqQPXtAoeAU8V7bgj5QW73Hrkp6wLEPm5mEH7RMJEJpLsFvVs7BjRx7FU8q1yLB15uAq",
  "key5": "3x86Cf8bXXxo4scqZRZ6GcMtWFKDfnRBuZSWEVk3WSmAFNkR3fienN5ttJWqNtbbCuHD6TUwNZjcAYMyTZTbjvFy",
  "key6": "2CTS96gCeTnwCUU6YdY1dza5NXaMv4QNpnoU6x7iNXEXreGnrDEghmeumtTFPUZFCsYaT4T6dfYh5ogPDPogNEwP",
  "key7": "ibcadiBxwQCkRa4yyR4seYttrtAnLSNR1Ru63bVZkZDdfE3YVThrU4iyza2Ub3QNxLXVdzUcGToB6Dipw7asgpT",
  "key8": "4ujCZdrYnYGaMd72irfch2Nx4HbZHCPwpXrxn4BbCSXoUYmfqyGuLuYGYyLirkqfVJESScwC9fLtcbGHXwcCeM21",
  "key9": "2H7zWgtugsLNV81RJH2ni3PyptmghvaTP98G6g4qkoGoJt489UvMQZtDzszcUohGndvzob5bCR3ZvUHRTadQvt8D",
  "key10": "3DhsicVtcppihEg1u4fTVmfMPphPfQcRCHriLuxawbpkMEtEuwn7SK6KwcFynRJA7i22EUDAGyerukdY8HFv9Zn6",
  "key11": "zQKJZyJwFTQS6p6jCohrYZtUE7xTThWDwgdeGjoiZsCauKWf9jyQVHfHkB2ie3JLiSt7UsGQ5vUkaYVjvfLUN1a",
  "key12": "2AuDxLohiLnY9NfxfHZCYWagjYVG7TVPkpn1tM2JGWVEph44ZTdiDaERuBoRSKiMDVhwEkCfTxWKxiny94rpY8aU",
  "key13": "64F6TfNquvgpv49Zqpx75eozeeB7RdULK1iC1eqstTwvCDTyTBZpxVqLQPNvwdVcVwVu6ZBfn4964NPBdKMvGJ9n",
  "key14": "2jCvHxhHRPWpYV5cgwDV17Z5CK5teGV86nrD2M9B6TAag7cHfYVNhRat8K1nSkz7bJDCPa5XFDy1VQ8CsPbmR8w8",
  "key15": "3HvNWvHv5vYtBZ7Ft21w8BZBidwJ4KG4gcuNmPA97njwqrGmhvmYazxnrWTZMReQjXrvAz4ihhEZpkAbYQRmyvRw",
  "key16": "5pWvhpo6SpXDMgNMWFpQ47HnEo3QFNvaGeCHuMRghMvLbothmEJabtjobmm62WGP74UGtH2o8sSxqiNLva3gcreM",
  "key17": "3riTYerp3yu7N4WTh4iPmC3fbBcArqEvW2h5q9AkdYdnHBnk6Gq9RUgsn6v1vgkhXoNYJrSixbBtRkPsdprqQMgZ",
  "key18": "2cKi2iCvsW3Qx3x3cjf4NBqBy9qpnvv6JA2raotSr2NN1AzFi5wxnKhzyYDqkCFGuyVNPuVkbjf4do6DZCaua2KS",
  "key19": "462vXy8ZqsLiuYXaqf2NHoHE4S8cY74mNzjdxoNZPdjCtwQmwZbs4KJSCPBMqr7w9xGt6f2bUSVrsAuqQRvWC1gZ",
  "key20": "584cbme4KLZnPjFYmvTjN4XF1AQ9MCEJh4KqhT9zrTTAx9EKYvuCzi5saT6EFVAUMN8ucPEw3a42uwAZELjXT4GU",
  "key21": "3HT44tDQQrLzkk3vKMpvCNGrfPh52s3yqLGnsWoX8TZsegJjwe8KUXjL6RdS5GNjNVHRgpyFtMHc3viHpSmVTgVr",
  "key22": "XF5CCoa4T1tbdGKna1Tgacg57MHBNWkEyrCYewjknTL8MUBWiA6BSvpvdDm9Y9H9r1Vokm6jb562E1vXhpicv32",
  "key23": "tZ923Rs8BEGx88iSqnJ5ReXZLHAXoKaqtP5vp9e6yq5nKt9FtNmb5v6dCHXGwQGrfcbNvPwraLMxkj34sCKNMoL",
  "key24": "iLdhrEmDM5cKfNy5SooUFkpnfsxjtAuHHayj24iiaY5SqHi7abiDQiJQDsF6p7LsnBC5kMMMxzgH976dYTwkdro",
  "key25": "5WpKjPQLnHfCxGwXJ2js6Ru6wQ2Guw6fFZm26d8SHhnqKQbp3G7sgGnfwEWpwb36P71euntJWrE52JNRPhf3RoV5",
  "key26": "4ZTamirX4Jr2pGLaJDcJ49UwiBz7VFtDMWozCjgGFKaKnHL5NVXLfoHkHn5BobvnSAy9JEeiMcYRXDR3i3STRfNc",
  "key27": "TmNsz9rRSGZKqNPqLPKD2UckL86mva1EphG23NTC9qqgGwkuAvWyJeqAgBWTE38w6Z7vKzcqRZ34UDkB2qPxaF2",
  "key28": "5VK125wNBnybAUmgHzso953mk55p2UZVBwcVseMsDnx6hvry3WhUsPLCxzYxdgFBii9QA5ErqCRYBxvV24U4ahTY",
  "key29": "gFJoXpactU6YKuDWCxWimnxsG9rBYxSY2JZ8yZXpJYTM91wL6esNbWNSc3jaoDXC4vj7UMvo62do7bwepRK3gor",
  "key30": "5GWDKSyMdECAHRHDmUxhMPNHp7kyQtCryjQ6wRjVpXbwkWXHJvFSvaVsLsTzs5J1g3nXdvMLxPT8nQ6hnBNd7R9P",
  "key31": "7V8GNMWh5BpAmqfBTtoyn9Z3AGXWK8aPrzf9XW3hotQ9rsW6CoJod8t1riuXDHwxkr9RsVKsWMMhgUqbm69nULn",
  "key32": "2THcueDNfV76yEq8qw5gfbfQf9mPSjAnZiUNBtyEQeHuaJsfggxgVsWA61APeEWPCPEv8JY7UqAfUSSiGP6UPPes",
  "key33": "4RiRZekbPVZGLphf2j79yYaq7eyzd5vvPjgqSg6j71CZmA6kjQH2ZhXat9kuSKJkVQTWAzeMAi8psTJoYMmRpSS9",
  "key34": "4gUxHd5ScBSD3dNHSo5riUNaqoNmCoSceahCAErTBZkkSCpzeLnh9zWAZEWu3d48TM6sbfsrFdBKi5FYvv9raXH",
  "key35": "5X8rWshKz9E6h3KwBgyxcu6rUZfuXyw2sqswka2tXnJSWFc9DBZmeSVJQB1VLGdywDZLEUcvATxW5PgRav3U37Pu",
  "key36": "4XHj4rLy3iQRJiCnvihwKFW85r4N93uxoK7jNZyzmxCSX3qCDccTr9Zt8sFztKomzACizB3bKVxpFPC3XHSF8Nyf",
  "key37": "29jkbi5PZ4m1m3Qd467gWZbYN6WbsCkNpCZWs4NxBRGhPKqn11kSUZWtFsbTbBDjcuNrn12kaJm2WxP4yyRwncwq",
  "key38": "5wJcRyUMJMZowUvmqoAAkCWQRC2T433cmXXq6kgUVjoUB6qKFWdbMhqeHchn6ixut9fey2H9S7ouiTvTjjiWVuDk",
  "key39": "2Gyt3RwrBiySg1RdCpG5QoNnuqcWN1Q9cqjayzNveKbYcCi5a5NajCWS6r7uyLocmmoPaiSinym7aZELyxbXSgN7",
  "key40": "2A796fhpUjqPywd5bSnSG1JiNTq1hFzfHhWmjCM3uFKy7EFftE4vsi61HzQqQzVD2xL1E7N9tu4np3iTKkeUbkcn",
  "key41": "QrMHsqYgDyaNFR3dVLKtcM2ufa8ymLADqG6actfSQbTCgA7nf1c8vLeXAY7EJFm3LFmEGW7VcQkkRvBUyh1LhVw",
  "key42": "2kYpeBpJKWhpeNXesg5rq2abufST6AYCeBTGG2EtMzxDWwnQiSrotWbsNMQY5uoydDeUBaVdLJZNv2heKDnRFtG7",
  "key43": "2ZF73No2bH3yiqxN6NckVpE8UjBGXiXDisTZZGJ8CCqdV4wq4Fa6u8WvoXdrpgqfhwCsKfRoGcXML41staJWCQcs",
  "key44": "y4kEAPpL3ixPeNgMkpN9idmch2deWWk2eyuQcgWqjBRKxPjC1gRAmRsdkbdx2YCT6UmFzL366XgTT67SCnTf8b6",
  "key45": "Zn3vV1oXZPzLSWa8Yt2tuvLFrebZqbkWW7t4Nk5v3WYVyQjvKeehRAUgPQKnJ4VXxTbm4CW3veuRF64VieZtP5y",
  "key46": "224bNC2eKk4TKi7194jNknyPMVhAVjVGtXTKyJunYki4BiUg29dMC7QnpKF54xvcum6KJ5pQ9MEMFtgN71GqLTWF"
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
