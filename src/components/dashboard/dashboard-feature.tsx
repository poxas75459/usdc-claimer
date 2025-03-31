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
    "3LtHzyEMjgaQyCYfVvzZFeFSznKuWNCGLiPNBrZ6sfpCsHfNjqSoi7sQAfEDhp1jfvyQpsRHbBNYCBcErud2r75E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a5RhftjCHkrSNmaB7mmuy8MwXE3SFimVGc8HFUCmtyorNgqp44jwCi1dHEYrPEN59tkM7vK96Y47hZ3Fe3fnNot",
  "key1": "5QZinNKUsarSmAcHaaBey2miobqM3jEv7H16KwGJMEpatU5dZ6wXmSMYMCkvXGKcftHnZ19EFb5fiVKwPjJQfeKN",
  "key2": "3dYkyXiEkRgHn9W5PocZvfzAdgnypNexbUvWJYRdc9TDtWsf5i2Y69WL7bzNFifzbSHFa1PS56GkTg6PgLu8Ptcw",
  "key3": "4p5XHQYygaRPe2BuBAodzhvPxY3Lo6sAbNeY74m6REBFm9QGTmVhhkKAVagEKgfTeswmadFN34E6B6c5d8gACJtq",
  "key4": "5dNYisoiHthVzvMuFXWFnNSvsUfYvGAbizdAR21DNepU1r2ZrT7nYrMoU13Rg66Y7nwufogRfxbF8u4ptHgMb5JL",
  "key5": "4Bc65pmqVidAkuaFeFgx2qJYyWRubS3pciivHYXJg7R55FhPynEhaNU7c28nBQtkA3B3WBi95avvQS2fghANoCqa",
  "key6": "3xuE4AZyrpC2Hg7vi7TcZDwn5GHEYTUQnwrFmpmEwKndcMFJsPxsgsUwqC3jw4hGmWefnbaVs5ZB8LXYckhfTiuB",
  "key7": "3gTgveBja5EYKaM3utov7yMdMexZX9B5yoJR8NN3P6ihXPbxSqcWUpVLbzqkmcDymQYY7mak9kTz4tG3GFegh8Rf",
  "key8": "3jySLi4LAv19hRAPhNW79KdWNXBSfFdErnPM4bcGrhYL1u4zUG1uXrha8QMbKcC2sbvB27WYN7F1XguvkZYJeRpk",
  "key9": "4k5DESxBBtxR6cneJsGqr4vukLwUgJ5BH26SYRYCUxNLz5eDH8D4WN7DmHkZV8yEtPEsKyYtAN2iCzocTQ3YMnHC",
  "key10": "4965ojWsL8XBWxPQ53omBtY7xVP4DaFnHGHJ49NaepTfD2JtRTemwaob4sj9W27aGjvWtNoznk1QD57XZuwGriyq",
  "key11": "f7VYatTo8JiYBTij5S2kZsF74fonBJM5dh8nbLWdbEiesPP5aiY5D4B7FjCpd9q5vqqcyH7xpjCV5ydFJtgU4da",
  "key12": "2WwMkZ14udEDZxaWG4KPHbqX3Yv5p3h5r1BWbsPpr2ojB4wfMwumW1nS24LK4jcfCqmYWF7f7HM954rVithDVYc9",
  "key13": "3pvaMDK4NeAVpwvLEvE9a6nwvijXDaYkqUqVMxoYefi4WNqkCfdXg3GDVQM2GbMhA7oRXazpc8TERaGKsqsP3xPi",
  "key14": "3RuMGgcpCfwigyBjXDTbgLYA8dU7sY7MMicQyZEdYgHbDAyKSQg5MPNMqFwzLt6UnKJK3xXkSeNbFJ3mrTp8cixy",
  "key15": "2hJ6YqQKVbrX8xhLMZ5e3N5vEJFZX7Y9HcHu9KkuB8AK5cJWZgqcVNg2RwMWA7KvQ5jjBzcoxhUKF2jBiUkGuusD",
  "key16": "3ndsv8HgqFBRx5KFS7VYmgBgtYsULPMtRzX9FvYQftUVobpw2bQaXuAN1iAzFMxkcMJt8re4LyBef3X3eS4TUPos",
  "key17": "2RYq9GRMGqHjFeAnJMaxpt1HawmHb4aio9nDmtBQYX4QLqemCE5ksjpqTwEo7qHRFZ8h3Cd1SBadv31xsJWiozBg",
  "key18": "2FZnRUbGq8FDnuVrztzNDMZoGnVaxGyTGxmaiR3mcTfUHCzLnDdGEHZ8TTr9ZE1KBJfrkE3zXecyNJkQCgfQUqGh",
  "key19": "4uKvWFTKkEzzPushmYiBz6ZPWB8STVDJzpfDur364sgGzjiCAKkjLyc1YCuGxCmGzSjntVRr3M88NaQ3hZdpBbNe",
  "key20": "2hoxuxrtn3Xbc47puGFYeK2iRmXtr4sFSrNi58ayuzJ1zjSMmqbEwQD94WVfvh6vsu6wVbW7FagV1BByPmDTGgFc",
  "key21": "4CDDRTkkEakZxFR1stCBqcx146Ut2K65ijpCqpU64gjw9z1Nj6JSD4M5smho473HtGA51Lv65QsJ8h9BA2jEWMMS",
  "key22": "3HFsMjtjCwLTpLUYH8Zaczc61hGiFGHM8MaNYQkcqJ94ApdJdDkG73KrZE3ivJ4DVdbduSmnmzJ3wvsk5fbq7Wdv",
  "key23": "2ZSLwcWeT1Kv69Fx7F4s2tALEVaBog7Sn271fokRVAa9BzmYcLic3pdDkBGs5JCsCdjV5SWa42tF3B7L8cviavM3",
  "key24": "5gP6fuD4mWsZLFsU3ypYBtxmzRp16NRcZcxRTvRYaj2BtqgWjB1cxJhHWqU4cTvHavPB4EE17MTFWgMUpsQnDuUx",
  "key25": "4WuA8yDpzVfvpaMBdYPjM1tkF2ToSLGFh1jsBPHVUxPgjnnyEtMt2PybQyLFBN2How3u1bdEsqvybCoTNABxa4Zh",
  "key26": "3GgeoT9VFT3Tjr5PCKfA2jUxpYjrs9NQyY5Ec8HTRt4eewYQugfBnpj4Kuvv19JB38vn5ES8pWgt2Gw54Krj72ZA",
  "key27": "4S5H9ZrQdDLFd4HtkNe6ULEnNjyLEgSaoDewMKXh6WszJ51YPyqDvwtcMeKD4kMYrw26vxsiAL6WhtxVVjvw7Bjb",
  "key28": "3ug3cdstRQxeVS3U1rRqkPsXYvDJq6WM2vHUKc3moWWLkKui6cg8tUXbgFTVyNFWH1GS83L8KZ6L7HdzWEYynyRH",
  "key29": "21aV4osdm2ypny7hADLVCyoUya6CutQj2f8jwj84ccSGPgwsgMMg1upu4W8RySKrUKYE6EmoSE6si39MTqNTqRgu",
  "key30": "27fqnHnfZdxqZ37xGXgAFYM6kCV5b16fjf5u9LKF2536rn84EotjxM123XWbgftrBU7zvVsvfiq8pDw2pvRsoN7J",
  "key31": "4TPA3Ew18Gf2g7A8tM5Ddrns5VSj34kKfrA9EJ78hrkzVF3FgMvp4S1GX2s9PaaCErwNBVvtwxUYhmBDcxmZFz3Q",
  "key32": "AWhYMeZJTytuJwy5avZJZQgpCG7g49rUQDQfvTpq3h8tboDmVMrctgWLr15YQkwiLiCA4uvdbYP2S9xR8kH4eqi",
  "key33": "FfQrsFGw84n6swj4EGBvEKw7pvKo5yhPK9ZwN1iiARW2KR887RpeVKSs46zYLobfFnzCpVYYedmaUkxLtQ6yUoP",
  "key34": "2K9gX3kfEhZKfCmJZNCekwvghaFUwnaWT2BfpohAnt5WZPrMHyT6iPDrrEV4XMNwxZLAWJAdsxeV8cwJyAkjwZSt",
  "key35": "4ZHhQ4oyEF1DPvhLqhVd6553xtTNBjHZDDu3pmhmYus6Y372ooBhepzXcMGUgAnJ5Z2eKbB858itGyLSinpEg7Cw",
  "key36": "3gQDzu3CAH1ybeVTABF6XrXBYw6D6ZUZ6pueBnqnDDgC8zvZzWEAfLcKf9HW4orRhLSHbmSPNBmVL1xcvSnYWHnd",
  "key37": "iXPxGYYVxciA5zGRyZQ14etJg7kut3ZaLRL4YjpvbAadfAzKnxUpuperheYWvpsxYnokJUJDjz4xZ5bUCm14fwF",
  "key38": "4cQf6vrLVH6FHGpQp6EBdeBuBR65MHhaS6jAzCiWavYdXYJGW7MCgfo3qaqc37qZFXpTtYZYDAdEtS6RLUmZkZhC",
  "key39": "3bmVue3r1ij9jXhDxC5GJL31gvPqgGZoPQXJ5pVZiTWnKNnP3PTG9emKRvE6zPdvoJYExTsSKxT8N73wMGBYYEGo",
  "key40": "28SiYMW7reqpn7bsubs99xQkHJrBnGwGuyaZfM8K85fuAGEKCkAfYHi3V4n5rZh3emBXgnPmWSQLAqaJyeujAbzd",
  "key41": "66uAjdrU19rhbsywzF6cDRj6sqw8fDBXVXnzew9G4HG2b411RYbP5dkBGmz1a4CPNN7ZBmCc61xecPCuAdbw9CgB",
  "key42": "3W4QhijCZuvCEiHxQuzoHc25GRkyWmbjcBTefYGm1rA8yNb9Yqa6HeEMRU5LJnwZK4dzhcSyvEXerLFSR77ng1Jx",
  "key43": "2uHYEoAFZ7Dj9jvPqe3WjbiETQeLM4bG4KmpTN3dbeeXwp3xravg9H7oTNtqoBEK5mr91b7RiP3D6piQtW2GaJyY",
  "key44": "5uELXPC2Ljz81RDxnkdhUZQGXfEvxvLCAJcWk9G3LnRHY9dEqbpWED2eJsBwz5qbVUj5voo57FDew1sH1gNDgBrj",
  "key45": "46QHRURbykqVxQDvyhja8FBkGhNbZDn99GoBrvRm3EAzgp1uRhcjdSZZRgwdJsfNaohdvxsoazkXFNQKp5QsL4L8"
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
