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
    "2L8kxbxRqnpzjgjVNd9T1fdXYjXUhLP3u88FjbaVNSPxDXHHBY2YfFAz6St1B85x2nYRkWCYqS5qoNjH7b3Ef6dB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WVQYFnfwbXF6Ja9nrMdFREXW7efkaMdC1EpxoLdCP9SEHVjTo1y91wNztAbPkwdS5v12LqYzJGuG4qRivWKMFTi",
  "key1": "44gmChz5pLKkX1Evgf4PSGUWXqSXVnN9NdeetXRjn5xHxrofX77o7UbEzZfCn8XKbpu7vZStVf4PnBTSSebesWSj",
  "key2": "3EjQvBFLKfa9S88YDhDdo5ysXe9SY5AoKGu6bzMQywx4jcaNbXd5eZvHwuAdYJ2XmVqzwJhoVufa6CmLKsiXDQm3",
  "key3": "3UKts4ucfoyQQJXsFUHmmMs6pvJFCkA6MEKrab9Qx6uUa2py1aPpKbaFx3MqBoGG5jSKNBg8vbVuMQHu61B8RFzQ",
  "key4": "5w9Zqb3j7MvLaGAG6dWjUZb9TVNK3YWDBz4PtfN4PMrqN82ijAxANRW3gkLVKUB8D4c4zAFx5uch7QUi3k1M9h9S",
  "key5": "3takJFSJoSpoPkxm9vsHyxS2mxngfpZAJJMLj8Roq9yRJdcAeDC253XYSvKQj2nVBwqdmyNecEgLifW3jhDcKECo",
  "key6": "3rsKFkD2woGRpEzkeGRmpftyct8biUkekFxtFBwYackojwKf8y7U8PN987QvVLs7mnKbXnGqj4nrq1yhU8eRjJwk",
  "key7": "2p5uwrszugkWZNX1jLuTagU2uiGBNAjSqaaPWcp2UftRP6aa6x3tPNdxD3jCCHYJ8SzB6c7C97JVFhu3eywUHiGr",
  "key8": "23QHYSPABti7Gib9QU4Bij3CwTnLgiy1Ebaofu8oghqv1sw7km9wmhWRQBiPwSUtVTUmbWEQZsL3w4jz93VTJXuo",
  "key9": "5YcUyNM4gyTL6z4daC2YyNBNMgmnPKTtQUDBETHr3DYBdx3ZhGnhhMfUShDZVHTd6gNqEapQD155337fYUbaDQLx",
  "key10": "5CETvAp19ChmHM78evKnYCqf1jq2RjPxScy9GWnghWHqStmpL4tP18G6keLW34AiXXp51M8NTWxsmZZyFFY8ihcq",
  "key11": "3oE8VH3mCCLrVxbZb9GpZtpWi2pdiJrCXKXBYeKaUJqPDmYQotTzWGs1kMwPAaAaqDL12mhb8saV3ogW6FznwoQn",
  "key12": "4Wrco5tQhbKFJX7YSPpJEQHtnn6SuYhGjDRMB8JbAcWMDNMnik625RpZMtrgQs9zrZ9BC5PZz83UYz2W27Bqf8m6",
  "key13": "284tNEqfBdxnjG7uwj4QzxHBQkgzNteViJcn3iTQjMEu1jd8751SmkredRfmMSsJQKm2mSj3mRWeZfidTu6VCFgU",
  "key14": "5PGFNxQeAHe2SBhJLAvrXbRDJGBuCGXrru2k9TPY36yoPf6t2u3CWk22k2X56pdHZ1mHf7KrTbvW3D9KuuLngx8W",
  "key15": "4B6u2WyNVrHp6EUSgvuQdu54iD5QeAgAxPJGWBhPxYuDS5RiwL7jEw3PHzXv2SbYjo3b2aCv6dnjxf5m3CR2EPi5",
  "key16": "v1oidNccV2XSLyD7UjocDpMCZsKNHZJqEjj61uKKrqEgGbLV4CLo9WUr4f1Lge9F3MiwT7t3pTaqJG7Z9q54LGm",
  "key17": "2NLRANdLsMS2nUMXRxAH65FSVUvKthWR6JfQy4KU4gTyADeAx1k5MXphub1RCc1QABq9trHBTcKN7wUPYuG2Zc4s",
  "key18": "29qzT7mRyMTvrZt9mDmCgV8r1bS5gUc3ShWJb5Lv6UfPkq9ZBirBBpuh6ik2nXpxmiVePkr3EfNvXvMsgUF9VDSd",
  "key19": "39Mocmf5nzNsdbKAKrKYGbcpUfy71aBbNgWQcVStPrhrDK2fQbVUbCkzrSa8DH56VRHWyBZHGKrBMQepKQmfCvgX",
  "key20": "48FAEbDDiPyfoGqjNrsyiA2J88N7Bizhrq28hgnc5zKLUjHEG5qfRM82jyTAy7Lap8cNFbnqK1fJ25xBQjrSTV7m",
  "key21": "5yTAg8DSRNsna1i7GdZeHaqWNf25DZzEmP75v16apSUbAygR1wvJVsfDYm5bo7KyH99MJMaRTmJxmksFPKUdXKx2",
  "key22": "23BECCsu7n3hcQXqS83Jbt1bbavHoZbukyZKUZtNBX9yZvfisAFYprWq4ZmPCkVXCDpMh14hNm3KYFU82FfbMP4G",
  "key23": "2hoJQihfjkFNguRqwThft3bwkAZFeD4BEjN5kNsJANhNymLCrVQGdr6qbcrfVr7uMY9h3zL9VetC3TziNBrEhHhM",
  "key24": "3jNt1NjiCA2vuK9gu7G6RL58SvhQNW55MUT6cSKuN1xvUfTXp7J6V5w7A5srFTaTmA4x5Xdj7ghWmoBommUka9YD",
  "key25": "3a3gzxV57Y4fMnsrW1xpkcVRgo7KHRcgaRb4tPAP8eNd4h4Zo6uRG6zkXZ3mUuDMN8crRsdp4vTZr5sS8JfQm3HY",
  "key26": "58mLUWoUVCzvZ8saYM3ES4tK1wkmhwXPJX3EsXAprxj7tXFCCuQ69eC1ZAnr6zKGh8NkomZVK1oEXv3vV8UvwtFn",
  "key27": "5GNx38o4brbHRr2L6LAV6fqhLdm7L2AqKswsjsP7b5TLNdgxnUEvDnpvbNYv8tJzBR9Vsy4KiaYjY4ZTwq4265Vk",
  "key28": "4UfywiCSMehpsuwYxvKMENiE6kouP9D4pbwgHc62vNFJoiDQYqzZzVRxTM9AsjNcfPwp6HnLpm2fXNu54fzr66Wr",
  "key29": "3yj2ems2Yjvv9twHzciJajuWwCBaPvdfe9WUnpGv61Y5mhHyGDEEkmiTNWKKbH6eA5ujKiJyBEhihqSPfYSECx6m",
  "key30": "2VYkamNoDZbfyFepdW81DiMzUFK99Q2pjejR8suyneJUoUXYvE7K8z2Xpofhuj8it9ZJvVkeBzt3LhBkfAYoGE3S",
  "key31": "2LwfDkZmXFCcD7TyLuaVLMsqHncYReh9saJA4RDnoTRTSthjQxNzSVcjDxzJPmswCWT2g746jkeCT9TqjALDQ6Jy",
  "key32": "4MfzWnRqUReYveuptNHgWSNqYEJTBDrL3mTyPWC4naaReBnGNnALEz2218GCXJDSWabskXUPWNCsTTPbBnUhtdob",
  "key33": "53eyyzQBVBQkKK2jWDSFHW9SCMc2998xWG6hju7TPbsyyVdBZj1LosA98nME6QaBa57HYRRtYLbS9N684PRykNAZ",
  "key34": "4KUB3VGYhkvXYshxHG8Cpzn5eNsfmXmbghqbHurUA5C6BADuKo5K3fdkWt8bAnRx79zsTmCzCCygFrzmQpPTCMUs",
  "key35": "24dUG6rSdKaX8GwBu8oDuLF3Wji4L4XrMFTijX6sP1nMZTKWwA8DiGc7cbzciJET6EaNiUm3W6Saf9qTzj6cRM3n",
  "key36": "5mSpzoBYtPx4XtQgAP7qUNT1QJAzHNaRY6qjAPHgZ2UsppgSCkuonvzbWhLn8YsCiYEkDXn3daq5wu7zBjKTZvZM",
  "key37": "2NFiagR6HxW47x9yKPfzBW7QFHiu4voHDLWucQkgGTHFKdW6GEjwBcWvZn2xEVEZfRkAb5TrFNuvs37mxncaWeWK",
  "key38": "5kzPmNUfFySuPBHyL6xssYoEU2Cs3MDitsiB2kgbf5rTqpXHL2mW3fgcqatAB48zYAKF3kG7XvbN6CTzcGrizwzo",
  "key39": "3RM5yQUMyPTS4e6CMZLPTpy8EY5DZrnXhQMJnQuv1YNc5WBWGfgstixaSi5b9VuwfnMtpvQB72tF44KNFUDoGvzg",
  "key40": "3sXs9kvJ7uy1YzKo3oLKChCo6wWJqkFpbdVhHeHewrwuQ6AzvVtnAPBv4qP7yDEGuUr1PWjsWv3dMXvaG6kcsFSb",
  "key41": "3td6swGwsAcNMFw7tJF9Cd3hivmvnqrjTMknng8SXoXLECZUtYd6KmVLuvmtN6oukFCJ5hWJtaa5LeCkHYZMypRf",
  "key42": "21hGD6X9ZPLsg3VmifCY6BnCujBdaeiRmaNGScMucQnhMaN94CR2U2wBqHyTQzkEE4wT5133UJk8wcMSfDeZhHhD",
  "key43": "4fQy94amYHnNVepbcG9tgccsHvumMsjupUD9a5DywgELXPdYG6wzwNybUuRsRsoGKmA9rh51DseqTaTkcrjCXRg5",
  "key44": "4YyGswhk6EYhL4LeqhekQiystrrLCaYtqSAbSLhYFB9i8NeouvEt5NVrmB9UU8bKGHYcrgvhUZTbG2fdQqQJE1yH",
  "key45": "2zoqG4cge1AuguwfpVfYJEzdrVytjc2cbcbf7fG3fu1r515pksRVWYBiAZNxVgVn3Crywx9WMeRK4Bk2gZvCcap4",
  "key46": "57wXuLsYB1BxtuANAh7mbe6VmFRLWZv7LzVR8QagEogaYSwZhoLJK6GVh2SvbJhfjCqtDSgq4QfJufDtp439o49"
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
