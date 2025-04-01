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
    "vp7J7gQXjiEXv1ZQjDSTjboBtH5H5kzbTjM9GcMMeD2rhuzVVn1vh4pJGscRpWK1eRUxg3V89x2TskPYE5heHb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pB5xna6S6VcJrXm5JQiYe93J2dqSSWgEnrcubuVCi7L9sxhHVx1Q4Z1vc5h5Ps2VmKYjnk1hiz3jepRFqN2AvQX",
  "key1": "4fA6oZef4dubrRCZfoyHaNXeudt6vNwmMC4TwqmHSXDqozzsodmVLLVkBixZJkDjFgYKdjYWTE71tQEJbfnw4b9b",
  "key2": "5kBY7VcFRzs5b2SsKQK1q1HzjrF5FVq4VkqGUFsonXvWVvx9ys2tTiQWakaABSaBsQcSsa7A89rQ3fQxATBbgoRD",
  "key3": "DipQuudzNbwvUVqxJy5Bhe4v4Emmdf4pCFhKC7puoJ9PotEAqof262XibU2GZwU8DyDzRJdyG6deFiQqAhuPH81",
  "key4": "5CrtLodHkNrr5ztgszMc8iqw9mrXe5zhjsw5oJHJH568VTf8kUNVKt8ovjGVjbsVvG6e8ZKTg4XuBqzKZTqSEoc4",
  "key5": "3tTfXD2qsewznzbb6VqWhz9mgERx8bcWTzSLA6zaK2rKio4MF1XMVDW3cQ867dwUBmKG56wcjwg6yPf1HXeWmkVr",
  "key6": "kWTCTRs9z5Kb6iqD6Hq6ueHssRzP96xWveYvvBsbRTHsgirE4uYcpR8AeKGuQNHFYTxesAF2tUyLp5js8zs8gES",
  "key7": "5GXNdeHxU5iEvXeetXEcnbV7Bq8Zx588y2bg5YcXMVsRAEbb6YmvXBrhQus9ejQuCpw1ACem4sYcxpHberDHpMJw",
  "key8": "4EpjGif92mEx2SMQTRtwxfYH1VGTBPbxKT7TMDeFphboALDGvPUWmYYeNuJDMDeUReCJ8RVURtRHJjXQDWu7aw4s",
  "key9": "5gYouz3qr7ShJ2p7d9NYNGadvqwHPbExbCDbHNVPLEmJcxBUavEiwR2DmZuPS5LazNCRBY51ApMViuXQoBqSfe2W",
  "key10": "2JpTNpib9Bem9v6GCdxY4iZYSCRXaYnb4UcSZDh5YVQwMhzaywxujyYZsK1M3YhRzNtZYpH4PUtpuELJ5zvhTsA2",
  "key11": "2eJpSko9SnujsWmRbYvcEDXiXuiozu2Kptbgmra3wKiSHQxbpBW416SHim3TJtrCninW6RoXGk9BGFBqJ7QwfknW",
  "key12": "3WAVAXdgoVRfMrKwdfmHbUBAx5tUm97MafyLvDocpgo4JBvVbMevMbJ6D5xoVctD2fanU7iw6TzMNSScYFhVhuVy",
  "key13": "5JtR2Y77FxF7Sq4Nv1xkV1HXVXQM747cEvW2NLX8EPxQK1uNqFd8CCCiUeJhTtZtdPmJawfcRimhUgUWAkjYB27W",
  "key14": "2zKw9tLAjtkeeMwEDURo3etktvfx6H9vmR4BMdhWqex9w3HA2XZ2GovkS9CK2xwHhmiWxSqDjQPLBMvUvZv8Xqbi",
  "key15": "4qYpmoU9Qk2viB7qWkzJabVKX3uiaHDEc7vWL5vXPSd9h1KVDRwYEKRX6Ff2FoAJ2RhabhV2R4iCvPAHKuSNGTYK",
  "key16": "56V1oFpVPhpnso58mcvqB8T9bJ2UV8d5wTCp5Srgm63DSQ843sPeBiKWxvRa8FCqrHbiBL6F4F6j6myR6VjyCYSs",
  "key17": "2EfFidKBjxnf53Rj4tianYBXpQVuGwjVB4s2i4MZxwBw6gJzpwn3R7Et7fbL6dKGencauygGZ15cx5CSfaqkg9x9",
  "key18": "3fz9WLHQcrY3i7nWKiLsiy1xdQQHpqsH2eUZpXqhzWvLT4WC6r7QqzH7AtALrU4pf8frmQBTztyU7hZjhZfztbNq",
  "key19": "3nzNiBgCJkZ1PBUYhbbmAeeyeQqXSGRaMWzVciya8GWyddrjPPcAPMAX9HTPXoczhk4kroLkuqpFEDiDKo5ZmhPE",
  "key20": "5viWW6iP8vBFdeFLWjyUGV8Xyxk2h19S7pzdHEfDMxPnfQm5aJDoGXh2WFiQa4yeUQDWBnZFbv4i3Aj2BPfC4kPF",
  "key21": "4DVgxuitwX8rEEGjpBbfWhwzRMoqP8HAvqRocVKnaTNTPJWFgHUTWa4BwCKwbh6Chq3xB5Vfq3Vo3KcE6nzE9q3k",
  "key22": "3ck4DVziSEEex621WwufHwivooaXjC9upxkftbH5apoYYzw95DzG4nv7SVHz26D5turbnhghgJexnKy4Dx4dRRQv",
  "key23": "2f6ej4ie8ytdi6mSRoXo9TckifaQAGfk5RJjLrnQXsStMGYswEL3nvgZgX7Y5epPQZfGujca8ZFWYvjQNzTduUwf",
  "key24": "2h2EyfD5azR58opbpj7a2Shd936StvP5N22oCwnZDHN1nTqD6ZXXFgrZVVZyyky3GDdiK27CNzgHovZc6BpTkqkX",
  "key25": "4V1MoGAC9niLPjQgMN9asD14wE13J6Knvkye77QyyUxtjjZKvuWKpfhGsGTtdEqHAp6j3cAnjmNofYeMJjke7fUj",
  "key26": "ocz7bMvgamdtD8mLN4f9hyJNhSr1sqxz57jZVUBaDJEyzWYKgrk5Xdun8HLkCtS8Hxy97bAZeESNuW7YX76qK58",
  "key27": "5tJBTxvAftBu2q2GweYsDw9j1USooCQMrGUioQMHvmDdSKSD5QBwGxxi6EiptQ9Ca69pFr8TLdYLoeYGSc9ZEpQB",
  "key28": "2jxD6yYqD1Kg6jAr2fw9kM2ur3S8F6Ut3ujU6kny97nP854nnfkq5VSs5K6GjMgTbWz4j5jajrzMJMRkUfwViE4U",
  "key29": "4u7foRPenXSTd6Es95EEf7ZVqW8m9VDbnM1cqQ82wp3PBirGhvxuCxmP8AtiQ9aYWbE9bgXEt8vFzfKSVDtBypqf",
  "key30": "4dD3fEVj5a9RFNPTNRLEjJJZUCs8csR67S4TKYw7hmy4YcGyTG1kf7TmbiBanPhxnfuyRLBYVoDTGpyM3GoBtQEk",
  "key31": "4P8L54WSKh1Qgx3nypYi4wEWmrTjiWNsvKTFBuN2hyvxjRoKdoYUEwZS9HUAkXSL6NDfktirhg428coRZcDB9ack",
  "key32": "3PbpcTybqZWK4S5pW576fqin1qFtYvGzfunj2txh3AvWY4VENmqWgrL1QNGWZFFGuzzQz8P7VBACntexvmvrRVmY",
  "key33": "4DknoLFbUdApaGWkqZ5Lpt1p2NjvNFa1cFnYnqaewUmLA68TJrTxHLFWHWBn7CKFw35xQEXkTKJ9ZWRXvZFTZcCn",
  "key34": "24UtJBjdDurWRGuArwcoEFit3UNgFDqdqdNeTQwtJGavGLVpZFmV3vWBC2EXDQykNUcvn5uxwbrgsP85SmTyxCY3",
  "key35": "2WP1cp9r8uYHSiQiD8BKkUHtZ16xatfAtEQgNBB8mMFuMBriUkG9hVxLT8toy39xuKyAneiP1NNvjh92tAbERXo6",
  "key36": "52oP49sRqX6PiriWwtybzTEPhtdXhpNuY1dWtEkACKvCxv9efiMGN71PEWWtM42yDVsMvaDhbNh46RBjEWEnzhDo",
  "key37": "pKxRRY4fPMmCieqJh5nVNZBNunNWsJjUunpuY3MPYBYh3CH8mhhyfZTm1JNU37fSkpb6EckZc28W11yYeGDD4YL",
  "key38": "2DBWQNrwb2rnR5oEN5usgMZct8juapnGbJy4S26EsLKUNziBmzWJ63u3p2hqNQwwdb9YT2DJSBZE8wzRHXmgWdaa",
  "key39": "JnsfaYSYBE7e4tBkNUPVC1YLecg1VjHFuxJs1kzDodxq7PGNgMej2DiS1C6jF3uJUFBmFnuappVEJLRy1A54q8N",
  "key40": "5haS7zEqKw5khL8os9yss9QAXubJuwi82khzdhRVZZbJEHcj5HAkZD18kFkJEuhMkwNtce4bZXMHiFJrbXdBVNQ9",
  "key41": "5WedqLokr67jXpTEvjTRbRtxG6e2AWnzLY7kpAc8NHbC1rg8fmKxLRpLV3ksUqwgsxgevFZ56LWKsFc5HLvkDHW2",
  "key42": "3o3WCAmYK4GqJ3va22bA5Wqmyn8bQu5eEjCTNiGgRm5ZwhW6XDnLjcecwNP1MTuxx83uxW4WSmWhfNoA8EKSpVU9",
  "key43": "b3s24stU7HW1dQkQjwpd9whM9aD8SqqgwzQCAkgR9TGmhEdECkcUpwFueQp8N4jz7yphB6fwAZPiaYtQheNxSg9",
  "key44": "6198Ym8GtnoZjSXG1qywyPvuSRUMDUvk94pSRnQognQQH2cLvwNwCcezMPHE8ZLDgouidZesppk8n7ssP5mE7PA2",
  "key45": "2U7ZB8kpHwAxc83m8x6DzbTubdUoYncdezz1RZpCfs27BGQzV6wZ3srn9RAUqev2CccoLZXXnp7gX7BJwL3mjiwZ"
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
