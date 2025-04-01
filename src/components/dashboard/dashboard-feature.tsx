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
    "2NoN7j5pu3KEaaopGipH5rgo8WNyiAn2TgTrtNK3uZB9zwHQLQVwKSopcTHb9tnftjjAvgzi4QLSjYnce8yu11Am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49uECPNzjaF4KpGMX7xkYUM9Uztsx1towahzdaJqPLyjcG6mS3MYgA9V1wkyWFhHBHubKLG4WinUuGJ7DNF6T9zt",
  "key1": "2jf5cg9aHZooB7Q4En9ZVrqp5w4Gtw7uCAGcwcTQ9rPyh4XnbNjaBCsqMXzkmhg5H3ijsTh8kjH7Tspi8huMgMwE",
  "key2": "4dL5kPEAnsL4M8BZdS1i4qHETrxcxbHVhANVeySYTHKB6DQ9diHXvPEY2rqC8J6RDDesgDq8GUhWwuT5JhpuhTF",
  "key3": "4UBVKKQsLhv517Nji8kNWpiLbWCoyVKYGPMmjEibZRaKoMGB5DCL98j6kgvqkhMx2aoEcaBgTZiwup4RpGBZjtth",
  "key4": "3VY5ahJveg5YJz3RthdGPBF54VzyzoWUdNSeQYNiq3i75AqK3TspZPKJVWJpf6ARDvY55U4946YsN56u1oaE55ZD",
  "key5": "26N1KeCHDYg9t92JCx1HmMHdA3Wi6XT4xM1ZG2GMggJWCHRjuwFciafqLQDm8N56DmMwuuJ1HQs1zFeWhzHK4gsL",
  "key6": "4f12w8YQbavnemjDobTGbMsh2kTikRkvmvdcKJTUPMhWzwH96W73VenA2iVyjQnc8rGaj9vRSUEgMcLkctesoV2V",
  "key7": "5qa4rxL8oHSSaj96ifPaYC9yPdiBbkQAwUB77RTTKMUQsGgL7m1idz8Q1tUx46bd2UpEjoJ8zXPcvgbJv7sSjBN8",
  "key8": "eJPCSUM2XoxQat8ceSWCCcAeTPQ78RMsKbbCFegFHYrnjWZycdgnVufned6ukJhL53BCqckwkeNv846kLmwi1Dz",
  "key9": "32Rzo8uc2RWDwFmq8YwS1W7gMV68AeZZo3PzAALtN9e7ARBDnV3HU91jgcqj2YcKLRTJnKzu34x3twzP5no3YYrY",
  "key10": "QzzkwP9HJSsWqtLWoPKTr8fmamtM3AmvjGNeTRGUBLa8b6D1PBZ6rrhUv7ssMhK8QxyixGmCs393MRdwRY5t7ZP",
  "key11": "5D4TawpBfkVozQrnek4d2w1uWtWJZGh6dLa7ZgVE6cpy98cjFP7mcZeW7emcghdTz1McKzrGiw21eTn281NsWYAL",
  "key12": "57HLNUYFBZimVJtsez7oEDbvnRXGXxNF3NcZZZUKa6VvWLtKGGTmLsaG9RH49cyE3MDYdstPxWgqWqnZMgAnbmVj",
  "key13": "55UNf6vd2KwH7nhg18tgzYa5yh2hudLsustfstqwx48PTbFbzfjiwK2DyYwjMdS7YQhRETB1R9whUoSin6hSs4k9",
  "key14": "5hSG3EPqhRXeEBYHaAnwwJPtbawRb9UA8V9FB9UHuFvSJYqypVyNd2KwzNjMzvGLapst1kGPyTNcH7845oChD9n1",
  "key15": "5qMPDYq2su9otVFMy2vgABKkh3WLqV49vjvWjwRrD7t8qiKiRFpo1hqLnZqKoVgDhoQUozcTNdaMDmENzNq9nBu7",
  "key16": "HgpKy7Z7NFH6VN8TgmnmXpBKj6fj424rbgsErsBp4seRnX3XwEigdBVvZoKsuhULot5aSpV3JCEnkFvdQofHZXh",
  "key17": "gBqkW8Rc6CuHgMt8D5xoJU2iTWtznmrGuaqTEDxeVK8cN5hxd5a8VM1aEsGruDXqyja4SRAy76ZcLgSZwxmz1j2",
  "key18": "2o6RujfVuPrxXzDTAS6E9WRXYkQX2p16hrATz64DnJyPF7UT8adJEhwGCmeuNqDiaJLt8oZAYLp6gYRP56xFLMeh",
  "key19": "5o3rqh3sEwPPQp55CgirWU2iKHCUeGngp5g2jDsCPaoXGgPYCoe4ACcZ7RPAdbPRnATemkec85dyDnUZYrvzuNP6",
  "key20": "dTKUzwQq1KummVJ16mbo9JtLQv1siLB1riJsXvkz3SoSNa4joZGMQEpt5gdEyfSWXoY9mUsHo6ixbNjtv8E7672",
  "key21": "2Z4tvazvsXkyfhQCpZD9EPtvPSqkdE7qSQNskUoZ911h2jbq9hXg7uZa1tZjJMj24hG9HUagvPFzL9wrbuTxvPgT",
  "key22": "3vbCSiLYECsGm9J2NyKBhxmXGAcq5XCvKhAQXKELWukZZ86r8SidnNyHjV5AcsNPYzHTRzNZXDE6sZGvbpUsTUFj",
  "key23": "2Zf78BGiqYVCcqYXW7av7nGrTXxtDg16Q5QcPdNdwJ7q3rGXwqY5N5TbjmUvGrKTEYuEMWqBBB32bDGEErQQkUnz",
  "key24": "YTNDEeAXu3MhpbeG16vGehP53FkRLv7PfemEegY1d2hEptWmpZPE19XtVuqiAszk641WD6TQ1xUhfWufQ4Hmedz",
  "key25": "5ZALD65vVWnAKZ6fk16gC3n3TTYx2Et1oNCDpKvXhcsmZbpqutVnR4geoRoDwDJ9iPVC8MkZcaesogL6MXiGNWy7",
  "key26": "4JYswwJqhiHtXA6eGNyiaCQhK31Q4zxjRg1uryvYxyZZzyn9ip57AUcqXcxnX2CV46VT3JU5P5gKsQyTo2YsuST9",
  "key27": "ecgjTEqo45mSJYLTPPfJsoBYTsDTg2aRymB3hJ3VgV5PdVfuh8GTghKLKQBxrrston4LxP5agAg5HrtESyQs4FA",
  "key28": "2M5B4Wosy7CmCZmKjqZNXCta2ffh4ybfbi7BkZGSPznWNvpvmMpMAvY7pX9YLUePPfQfYYDg8sNdSCnEGjRffUsc",
  "key29": "4AGBjCXUxEc5huqZDbfNQdX89XJiwtup1RPELaH5HBQkFvUMv2ynpT3WzFAQipENYgHvXEueKTvMC4iQZrrNhfs8",
  "key30": "2y9hpWupZynWYAzEtUcrh6PwgV7rXg5xXMfLXhiQV2pyRUgUCYvDPBe7o6NHbkkYzXv8dT76xHfRw4ZAMVnE1EPV",
  "key31": "2XUVnrp9X1QmWWQG69jAVgPzp4WhWw6GX2aLoyParAEDC6Wx9bUsdCqDXsjrBMM4rQtcWMNqQKvkQVo6BCcPftQC",
  "key32": "4NZ9zsnz8YzhhnhgvY9wMetui2noNxnPgCv3R2vYfxBTZ74pPNm91gBN5CrTZno2HcSJoYd6Kc4m8mr69DLHusSy",
  "key33": "78Ezbhigyvjw8feGJDagfGNBinnLWitwU884wMdVC996DK1zzKTUgZuCARGN7UX94X2BVUs36T9u1DAKdAQWfDw",
  "key34": "5bgovVqd5DZAboRR1HLsukyNFiwALJawxVd49Z47Tj5KDxxBF5HdjpgPbBxvXPDANTJ6vyvovB6z8M963Wdbrsso",
  "key35": "51MsWkJybRjd3jeWS8ja6UrknjUVjzLtNBVvNAoNzYkq7B9sNtRBjxTJ5MBFnDefXJ5QhKwM1XYKpNVBRi9sQumL",
  "key36": "27LH9mozzhjKEW3WgQwFmfKAaDpJEC96Td8o1CconaZXZCzB1ZNjjgz8cj8YtHiMoJHXbgHZBFSUhohjEF2hff8H",
  "key37": "3gVGqYSQrRPnPjTGj5HpdnzYJhqJSpGxehKEeCbnt6PstXiAK3ECcSrMatMeEtHGpTA3WAV7PWZE6TmebvoNvMaT",
  "key38": "JsTpDVCNmSC2umryu71VJU7EVH8mSJzTRrn1Luc48syXdgnSnorkDxez1PUTPCgz3AuQUbJUijNytZXgGxDqvpp",
  "key39": "21awcK1qYDkFHETFtDd2U6i7HMPL9dgXNFW2sTtAqc9HccaL6ZCt4LSdugTmBAvSqJcanNuFG3Dbxircff8QKXjX",
  "key40": "53JwC55CLTYr5p2SoZDHoS9rgcQFAXEk9eF3PUsu8ePAtCF9GQXLzyUtvAenB7gQvCmv69Emi9PWLoHw1CWLH6s6",
  "key41": "uVwxnKxS7UaZ2srYYoVvhsqYZTyyRQv8p5WbeoWpP5LEi3pC2KSfBNaKsFGxNTJKjtdwGNSmmkPxnUkjSsSrF7i",
  "key42": "5hsYsYwqh2GkBjGVRUi494F63kmj3HEEjGyLAhZ97PAWJQebKnR7AUFtrAiaH8Uxx4cJkg8hxC5EHwecA1vzUrGV",
  "key43": "AtSJ1ZnnWASVd7ERXGnUMecsyaRTzx4N1eDDAMh7izBmaGWhmFWQ7bFGgJZw1yd5fTMbfTuztSyzaKJwoBYp4fb",
  "key44": "7MHgYy6cjW4QvsXMr9JL7txTv3ZDfKLfqAjnoost9n1zriSi2nSBqBNcnpTp2pE3bHHQuwo1xpSucpqED92jZ5h",
  "key45": "4AB2QaekNuCGfq5M7P157uoJDzZkDgpjVXq8qStzNxcZWAYFGJK8UjF6Z2aS9feKrZxQw1NbUCSyWPmhTihNwGfd",
  "key46": "2Mw6kKbBpcrHu2Ww5ZfXaTSXT6SFrMFgdfSu4dQ6kyCmuVTpMo5vActvqt7kreiPHmmHieyT96UQ8hYTcb3wn7HH"
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
