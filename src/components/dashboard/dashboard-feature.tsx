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
    "4wsfCyoPKpqGrittuUMuX5U5s7jEnYKrHs2PyYaWrBo2ZvHTtZMV96ScbuLxbHSCMkbXxMptqEZUNQpWBp9td2Rn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LqEDPTc6EwXEnMqSemMrUV4DPVA4Q21ZuuX4EBDGwC3gjwYB6Ah2pzFyPYuU4vGvDnZobzA19hwKkFP6gqXQgVv",
  "key1": "2d9ntaYExscKr8gr6GKsnWzyV9PWikSA7PEagTkkyAFXajXJtDfMgeV2MyP2GCoETxiJ7BY5XBCR7PhZh2QH8FCr",
  "key2": "41mrE46GAGYsjhJPRUgLVxjf9sw1tRTyT2Vr4j2xrrUhVDdqJbygC9464CgJkiTf2qj2BDDhrc5DzqcgW4Vc8mEf",
  "key3": "5zcMySPFJzCQvBiqNF5qNcu3Gaa7D1hMDKtkyQXmxexv1E9TKunVHUovvimojQSrTf889r7x2xUnUfb7e6iwvPk9",
  "key4": "3rskBVCR74UwtyonAi1kRT6rfZEq2LKf7qN3bxZ3NLodef9gRPJZn7BdAcEfUmaNgstdyqUSN8njGUAMfTUtey9f",
  "key5": "4vhKBM9e1N36eyuKfX5cB68hFb4sdSHCxSdnzqtcayvAYxax82hBKWR9eU5HtgCjobtzUxYFMcKWLEQuv7PpWTc9",
  "key6": "4jGn6J111h3nus3JwZDL8f4TvTryQiqUdVAS1SkBTwoLRuhznfXvM4ZTyNAARfZGoCWjArhsEgbQPhuWTPaYLFWK",
  "key7": "232HfcTNKyWGvJNBpisLxHqSiuroebJMknhxyVh8hvAHKguMyZkcbgkjjxN1CwA6eMxSQ7WXgEGuyXfBe3hP9GBq",
  "key8": "UaYqqWLQQhsi9DzCnXHaZiacVLhsSq8NSGf8KZ8cjYkHXqRT8BMQUx2jtipz3W7JoJV5BpxwC8N7sGMuJXEiJy6",
  "key9": "3gUNHZVumYY5pi2VXym69YAMxhoz5aRhFZkgg2RxZSH5GNSkqCXCNc95JE4CwguygK9aRR8unTWEeNATKJFtJ1FS",
  "key10": "g3WCMLcaMMo4fKmUNb6Ur2XnZ82f4p1qTdyLAhLvCNU5AJEKJonoGkwPopRE3264jb2w47VNN5jQeWPxEogncnV",
  "key11": "2mNVaVdW7U58FG3uzhkdQzLLNF8kkkgcx5k2ZNdTsyoPEaEpp2meFB7XqGSVieB6KvL7QaFyPdAgtpHPy2KmnYCA",
  "key12": "9FrZEhpH12u1tGaX6B4ZTWBCbPfb7vCLjVcgBRELgbMv6jwvUbbzaStFHikMPMF8VcUBxh4Zkcjt63Cfp99it9N",
  "key13": "5hcMa19ZSFZD3ojSD5eHpDQwhHE7vMsaqAZ3SkuXpWx1ja3NwXpCY9L2D1DeKPZriTQ34nMtP4vRdkhRo4utQJYN",
  "key14": "V4WX5uo7wPoeqvzNwAHb7vc2yWamxXqdHpBGoZQvxKvAuBhANPsGkzxve6YPNFiDc2BgZEwB6Ti9RESSWGbeM5G",
  "key15": "5BVEC5QugRNoUdSmxzRvWPie2SuwgC4oDJCueLBXCBLvHGoi2cevUVxyhiRhNzCFRxhToAX4dsCsyF8sKDjkrRke",
  "key16": "4ho4KYrurkT3weCuAUcUEzVTwKhgMR4tMF3yjFmdZy3RCLPsnMYbjkjUZ1U11ZjmUJjZRG1ae6uNo57wBvKsoGsn",
  "key17": "4ATQf82JiXq6qoLxW9KB9C3LvwZ6Yqc9bQht7khZt6wgLf7AkGSiJ9KkyUsNokFHmtEu1hC4Ue7rByitRQBLqVob",
  "key18": "2CDhSySccYv9pDjXwPf6fhajr26fg2ekkTzpsieSM7dpYEYsF96D3P9wXWyfwyQcpfsFhAiUm8Htx4vc3UXGeyRH",
  "key19": "pdU4Wtmy2ZdLNDYb3SETZiyEuKBtH1myJbEvXLhnerDFvS8ELa4XSFjtrviWggjNvb8bbV1bdXFMowGUVE7DS1N",
  "key20": "5U54BEF1pvSNdLcYzB8P2cySXps69ZAZeXRBES1vviJBy921uL9FgZ8XxV3ci6QLLrCAsHm6ZyGvxArJcy72invc",
  "key21": "5qV2RpaqcPAp2hGdj3XZCsAGfqCx4Tdfedq7R36GivfptYVU87bFDyyGAWL3bZXzXUrUib92SEvwWaWkAo5HXDQm",
  "key22": "4Q4dT7hyxR5fDhtzJzFqrspG2TDxJEUu4W1Lwfx8By57Mazu7eykoHQduZTGwXqZSswnvjWotDdQhY8BeFGNUcqr",
  "key23": "2KP7cvtoi6P5mUKLsGejbkb8ctCsAqtX2PrMKBW61Nmyuk9yqk27pcqmhni9bJwgHDvjDYnvUevDJrBh43gScX3P",
  "key24": "43cak8tJFz6SnL9ztxLhphoPc1SPsuF3DrkwG2TB3jWmmuDZ2s6LRXYRjSxTAN8MhZLZnm8NWLY72vY9ip2KoZe6",
  "key25": "5Uw2uP7xeUYLCyb5J8PLTsH9Z3dcHi4qiKC8Sq5yHKU4fDqpCd9GzxUaznRTtF5Up2EBfFUaEjakxn2L2d2nFGbg",
  "key26": "y7ktqADMSsDxLpnFqMkM9n8h7sciKuK6g7QYPnoQwiJu68Nk9YvBr3pEBRE6tjEV5UAV5NbmmpzdVXwoZfpvU6y",
  "key27": "2T1xfPbT5HDHPrBjhjLaJoy7yJHTJaM7ZQB9QaJ7hrV7LHRrxtT2fteHmTTpjujV5eAZ8DdhTa82wLWugkiLpiDq",
  "key28": "2dV28DtmYs5CLahh4bU35kbewV5827u5SEVa5kHY1ogJGAnH7pmJbPsN69WUnKRfMziji4iyG2g134QXSfKRkEMP",
  "key29": "EUzvWn8qSmTre6GruLnqE9Rtby234sqaghZqvaeCy45W56Nzqmg7fcUWeYSTgfkUeGprRmMMeYWkCNnYbqJ2Sju",
  "key30": "4FZkRmWkqNjsB3ySb2xbhr5jqTLUDH2MdYxnpGZWXACkarLdNf1bimaUpWXjuUPm8zUAuzMw4GBhDgPEXLRodmBJ",
  "key31": "42WxNJVYBwbNvX3ritSkcQcHiX5aNjVJRYmMsQ55APQo49TwZ6cfxkaQ4ju1PWzXW6kptHmHToSs5WQbg9iLu1HJ",
  "key32": "41DNEH4i3ixUNPXEwFS1sds2aApqhBYT1ZUjgGNL25J4ENmqgDCYuc8aW9HBu2CQFD5RQop4KUTPYtuwi1RDUgFv",
  "key33": "4AZrD49U91SkEj2gxVsbwo1vM7GfHH3jTUieg9igK1xhWWs9dXkn1yNnGjQC4ZKL89ccHpX3NFQTTNM7Ny5ZJ8mt",
  "key34": "265fVAcQYQsV66wBV1CbEh6fTCSHcqiW34vF4QPx5KCxUazyUo5wAiGXcGyXAVmfxW2yJ6fryf7479B7HnPwwc3B",
  "key35": "3mvDn9EDqNKBYp4yPiqZebh3E97mLXeLb6S34HUTpDYuPR9tLq48hxNNM1Md3w55ix2ZG1Qj6XC4yijtCdL9EeGJ",
  "key36": "3d82XPaZXBULrZkSEzd7ap946FpWPk12dFS4dB2ft285g3fQwALYu3ntLKnfQR3RozSFBQ8UV8PrPhg4movktRse",
  "key37": "5QxfJYiCvNefePcxEv6C4yypAg1xaKyu4grK2ysKeLvopiJ7sgk1NABVeTFdQWNScuEdTFvaczfcssUXG85dDQLn",
  "key38": "3nTZyTytxSgksAwExQWHk2h2FBhwE3vU8QRiALKpirbFAiWpz7VCPjWeFwLYuWPnXDrg3BieZ78rM6NxWbH1AMAw",
  "key39": "aCbfeThhQqKF6iPvoQmMdXSBCxwzTmSceGzstouSjB4ztxfUdB9se8ur9CxYoheCSGAiGyXvhcWfoFCHS76jogG",
  "key40": "2SNKb6PNdAuvguRiPiQxAPjgsrCVFVZpti2AAt4Q2NQvbacG884BKAWJGpac4879VpX53rs1GGkd4KH9v8aSnPBm",
  "key41": "54GvWeARYsdQE8b1jWRpL6SG51oS1tWFQ2nVaMYJGGoXLdHatFj3UwvMQnRcBpPWXDBqDkEa4W1wLWNV8gLisJDH",
  "key42": "ypvuAdmd59Ht6UDp1mtEP7ik2QVMpWTXaLH5YaYpmCqao2JxTYxNdAE9ZpxU5JBW9Ce3kN7MPXArQ4aEAQLZYHD",
  "key43": "2kk3ivdKA2tv9aoCpszso3BawNmo7BasncusBFkQ57RPnLch3K8zRorQae4dT9mBMGF8nXLtWymnPqVy8t3RBU67",
  "key44": "57rQpEDJwdnfWUAYSQDZFgwB45zwEUJCBxYHFiVboo7khZyofQXmfaCbBiCKAkKow2hxC6PqJnvFesLT8BmGkMXM"
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
