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
    "4DpDF2V81PFwPfvr3EpDssWG58KiB3VkDYYLQ679Dcp2CqrYqdrrua1TCoAncsLTUzCj5MwBkFxYnsXK5B4d7Ezt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gzzTVZUbVQERS7tcwN4sEENf3Xde2DEULB1iD7nR1DKWoSC7WEfdGnsBKdHkL74RkKwQPoidhYVrW1bmNSDhLWU",
  "key1": "3Ad6aq8wgpF5sRD2JZJEz3T4Bvo27JorSTRh8mS8kppeBZUuFhJ3Y5XFdHHHHF6sMmF12Swi2gUT5EURFNUyeKKt",
  "key2": "66MsrRifGBYnSLZmrWmYA4g4WFMwSdJuwidXY93RUTeD3bELAuM4PWDx7UU4qGBWSWeHZ45yvx5ykFqqSLcD2P6b",
  "key3": "3g3hcMUBEEQqzVD5X4DpVjH9jpQ6xRMBnhhwvhQvkqF1BHpVGE8YRjrZhUFxkYiMX1RoH5zxeQKSrwPCgmsKoWb2",
  "key4": "5jrmo1R6wFYkY1PHFDkixstiiJXtf1XRrvYWJbvKjBJuiTBEHxQ4ppVfvBumkzfhMMthxxZiU7RqMKnbTjm1HMuv",
  "key5": "5iy24kTskUPDF79QjKCtPdNE7KpC58mGQgQw83Tv7etJYkTuFvM9MHqYvuRpTtFCArFCn1BpzmPSbxSR6ByeB9s1",
  "key6": "4StCkJ1Udgf7qtr8R2ZUCanJYi3UsqonJDcBw2NejokbkdZzyiPWaLoPMjFvMpS53UEfxMtaPvXHKuZ85eLZrfBz",
  "key7": "4BjavcHjTpNfD6KtaiRFyAfKfTrCxS9MmdN5DnKfFNdfj4cAxwNiJcFEW4tQWwgX54Zj7YLU9JsNJTCy3Y2KnCyc",
  "key8": "2NvuZjfPdxTtPQhhkUJkZMdmeqKss6FW2KQdMmhVRwz2GYTbLRRZftLftzjkuxz7tjNAABjZEHYybKcSf3QLf1wv",
  "key9": "3syvwofHEpAwijrNeJAZE1UG51X59Lbf85V1tXnyELe1fdbYjUdXD3HrGmJhQ6EotJbt6R6Fa3UPkTuBB5ogSyyv",
  "key10": "3HZw2rostaPik83pp91vYWn5aFPPA3bB7GqPBE2iTypuJzMWu5wQT3oskTZKnqupBkMoU5bHCjCH4RFYf3V1j29h",
  "key11": "3Y6kxfMXpWXkwWGzkFWZihwzSxb8qAw7S62pDs26F5fb1EU4Mdj6yjdAEgZpWAhxedmGRi8u33JmUXgM28evHQGt",
  "key12": "4jkMjDTP1JB8tk3F9hcKjT7GAfsTqVCYqjvYCzQPo9dz4GELJ4Dz9F72T35VF22SberKiR6Kju9r1MrJNV2nmBFc",
  "key13": "3L2LWV2pVvYAyEK4U5bB8Gojq37o6ZHL7BYLM875TyTXmHAe1YH9bbxDnR4feFtbLjynTQDNfgxiKkZWjY3CNifz",
  "key14": "3UWvmM3DScnxBPPwPr7xuXZ7Mf8jSQ5bf9hs2e3vdGNfTRbPDDsZBZ5TbG2gJfXLzk323N1QoqBJ24nm8KZAp5Zh",
  "key15": "3w9Qx5Sggn8kyQmj1mNQjR9HwhtrbupFFsvhG6GhRuEGFEH66HbN5kNGGCSrdGFP8no4e7rQgZXweAx94G75uH36",
  "key16": "3g7pYeAcjmK8dG9TrhdfHsimKJu8uwJ37Lo7rJHTdQMcmgBJe5YE9s71DzdrrhKYyVrYt5Ymg7bGzwj7EZuA3zNB",
  "key17": "5HzVt7WKEi1E5SLVekoA9gs8NpSLdp33VygNRD8HSVJqx4mGTzn3tpWfQZWkJWpwC1Axo8WsGDg5spaLAzHfTa9i",
  "key18": "5jWGRq1u6c7qQjJsbDHjhYDAEgE88ghDMnhAFpbAf1hugKd2gx5J5AZoSM77ym2DYTkmLoNJJ9Ni43zKFJQSytn7",
  "key19": "35Wg2FkzANaEDgqQcUYvHYSkPZA45VWQVfa3CXRGdagddfcodgG3HpNQoQNEiGQB4b8niweq3nGzqeo27hfKv345",
  "key20": "4LhYXZa9nwY5njD5Rt7vbNKzgsmkoGCrg1n6wKJbFL9TmstYcrH7zNXrxkuwwbmYG6ewUE3G4YxwSQJAveJYpprR",
  "key21": "5ZABWAR9Pn6KEkP2vM2TxbXGdeW7gfBTJiUTcwU5ZcEoqEuEzReMtw5twtcvfJ1kMPmzX9ZPhMvGLni1vXBhRcdi",
  "key22": "5nKBdHhbUE8RLk4zNkfZtSRoZS261Y3Sae6QdBW2MEZFG23nBf9rhCxYvpbQy78nDQ1KbZVYGrkaSLyMv1hhScLe",
  "key23": "3RMoKPaqBw9pdtVn4mUBmsM9chcomjScZaiAFLFsoVmGPb4Q2enzNjLEm8kNc88PwYPJZykedfE27yN1bSqtNxqY",
  "key24": "61uAzWjAwAZcyDetPCQqPEFhejaqCYGSGg3npHUBjdYan78AKbudTn6JohQyshsfMUQdScFvEZLeLNGXszDPJcEx",
  "key25": "491aTUbSxNYWVTxc15DzWEdXbd5L68zMZ9YpXwUdLaTauoExYEoeBpbKRVdhm8jni16rQX4TdENUHnHsaNEPZEK5",
  "key26": "D1tJ8wWwFPFyy4iYRNTEjAuuQGbfeEKhQ6ThxQxEmeM5fAPLjjdtHCfPVvXSkGQFUW4dvx3FC8etjiqhURADxXA",
  "key27": "NgT2gYQwGTSGZvX1o4htciWY5WDhWvBkiDgBAke3wsfab3zpfsw5zfwJ1WGWPK5Yw68HUyDv5NYsNcDEKL4FvXf",
  "key28": "5suiteQrSJF8FB7S8P2Hp3Vh5JuirPP2s25ksco35XJXVE46hK51qHR4gdzLFZfG5wZJbmcmFV2TiP3yy9G6g5kj",
  "key29": "1AAQu6hfF6fNzgK16H51xrAuJJDziT5SYHq7fiP4AZVcKMjJwkbv2jdb4KWKRArQ1Rz8jA69FKa6SAoQC8ELgQJ",
  "key30": "53PDhJWsX7omf1xmE5T6mnS9YRt1awWLPDHMMf3sEbtY6y5zirGrWfEVxXHmDVg5xPEufeiGNjZYfXsUgMAepVea",
  "key31": "8grG9WNqbF5xurGxuaCVzgRsMCfALGTVzF2ys6d9MCA1f8uNm1oKUaNZD6DUToEXrD2gFxvporpfumbVFJozhUZ",
  "key32": "3NLDEmph69bnd3ZyupDUsbLp6GnATNbzQNMej1S7qai17cWsGq1Uv8VHdyzWS2AednyF1PkpkZxFS4McR43piPDt",
  "key33": "3iJZaJNSRaBF1uhK3XtG6wEWjMZZGeeyvta3xXVL4DckSj9bwnQhMQ7iL22MmRmFsty67ZTdgCePLNPYP4fwYbER",
  "key34": "5Rex4RP7gCmxRDYxKcyydjwSMmhcu2Ggk7NwgQFKDa84g4bSpyYGsNSHncrtWPdqUpkC27w7ZerZMZkQcRtbpYHH",
  "key35": "tVbpoXeZKCdLQBgoB3KFA746cjksazFYzHCZa3pufC7q6Znm5euvwsw23AWimPP3vY1sDhGU9i19Ec3MHk8J6rX",
  "key36": "4buDFoe3Hz6ftm3cEs5NxFG4xZKZyShwoAmUa4GNfDLGocvqXMnycFkddJ7KoiavfV7iRr6Gg8z76nv726mcRkyn",
  "key37": "5xvRw12aHCFarcopAqtE1avRknn9PqeYZttTHAqMhNA1apmYUvryqYoxAQhxaovYw2afbAo7cyw1EWhN8hDNCb3m",
  "key38": "5zMx7WzXPmXP85LXVJdGuoVFDWfXKbpdoa6zA5naMEyrvH4nvmoK4AaBqiXnwSos3Xn8tbxEY4KFCVnXA8atGUiW",
  "key39": "5u6PovfEotSTBUKTGs5jDYL8TMmDXnKoH2K9w7AiVdKpwHaYXyMduaUSGJvtVNiyFSbULyw5cSpCSmjaeeoAETdg",
  "key40": "4PQz7pENXuSm47bLa4wnY3aV5Tksh7GfkSSvqK9AqBTPjawqGSph3wCxPE8Bhp5vihQKjoWzAsxyTDpP4DoyFuf6",
  "key41": "QYXQT7KJXygYzYvzMyzJXeDzWbLAi9sebpoivhZDaBssbcrjsXkC96S3CeuFdkVPHzyPKJGnHPRxpYymWUjWRfV",
  "key42": "5ExNXpcakjpqFZBtzTcsBuXozDCJyRGBNSvaoWQN3aoERsgGrtJHRpfsfyrSfvKEvNQdUFrdFq2BM5oR724Dfi8a",
  "key43": "3ef3kJoTXiCpGE2vBxNKkTKtPjmiLZ7ACmJVCBEMabTRGi9Jksr65SuTHDLiiqXRfQcnxJjkP5EAzgApbcjNRBB4",
  "key44": "2FLCQUjhcTWaKAqihKZoFa4XoF5eWRbj6vJuxUDLCgv9eHCXWK3sE9ry9xJVSAYDo58Nv3EV7RFCpti6usu56Xyc",
  "key45": "5bBwad9zdQe1a9hVEXeM88xUbJPB8dYazrs1XgaR6bN81y5fvx4dTPLfyfa2ExTKZahEtMLFWH2X2Qf9U4cvLMsb",
  "key46": "4Fc4wxUYJBpwD9NJud3SKHvfzYfX2Gsa9YRmA6XGqmZbqkmd9wMgVswo5ePH8B3YyWUFuDBZKAy9UEUPVH7p82SX",
  "key47": "2QpStkdydbFxJMwgDY5akZqNSx73QdWv1Faa3D1v6PN57PWxhJ8XFdo7xN13Sjwht8gvEn4JVQVJ5fFNz1pvFWxs",
  "key48": "4Rb5gfo4ob91hqJfwehoC8qqkX3ejtzJEgUtMri1f1BH3PQ1xUWKL3Av9MrKnsobbr8E6xQmoa5DtfCdELhSbrLS",
  "key49": "5mXrfVLPUsba2QjqPjHLKADXRomQVvefcXajACUsVwq66R1gPyvBWnca2EYgjkMjg6iCBzRPxmtvuMedWMeFQGyo"
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
