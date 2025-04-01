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
    "3s92ksB8AYtsk4ZZJj11igucujzsM2CqCfeHfKUrBBe9mfPBxzoTDxxFLDQB9YvgwNuAfhmaKJSnsupap2mxuyqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "399PHiuZGxmMWMKzSDmQZaSZT7Sjq5Sb56oXznMRTBE6mA2iAzPBuzkPPqhXfo7WfQXNoNbZXaCwUdxBgNQFSfC",
  "key1": "5Qc5FnNnzGjc7As47bGRaNBUHcoDLbFZf5AqEdJYsp6wEpSP4Ghic2LamkxsvHwaAecyfTwLceDHBdrqcq8AAxmo",
  "key2": "4yDUt8FNAdgvyJaN2GA4K4Nut6uRHSygwTHG6tTF4QQrcnPcpUpioUfwE2mxpx3vQN42VHNt8r18SeJ7pnDEVzTa",
  "key3": "2pFDmZ2GbbBBmmXrNU5GSx4YUCLM1Yd1gx8AMfroMBFesL6ARTPatd9QeKp6itwE8CA9sjE1PUvXcFc8iK85vtC1",
  "key4": "271KQjAQQhXoRVM1bC5YBff7YyoMcGssW18HqfLqGdkJPy8bDXzy7erBjjefjwLPj9p6GTePhBdbTauzDyYj3hVz",
  "key5": "67CGuRNNhTyrt3Q6RGnz4RfSLqJCrYDX5UHPYM7QafjpBLeUn1mjGWVq5usm3zvRM75vb5T483p4bLNjEwmTgUJG",
  "key6": "z2JZcnd4XumtrBXZ3uABie8wXofTzdHk27i7EGj9hXQKLssfrz5sNStRgiVBLvA65iXZNc8tHkEXT2avcGqguxf",
  "key7": "3SBAR7nL442VbUJvuMXHiHbZHrD99zU1CUJGi1rrheZKTN4qNTWnET3ff98ccZwZcUgsTDeei8s22Dw9SM9JPJ44",
  "key8": "3riWZZVE7iRAzVdCM7zcWrVqbF1JruAdwH5FjkWm1g1cYDSXfNvZVojPqvdXqgg8ZUjn9nUD1HcMxxeNcJLdGEdd",
  "key9": "CwXDJd9FuPa44iGvSUSTJzMJTCquoaiTYpvbAnx4GNK2LdUydUcCqcvQLSEKtzdsVPNNZKKvqvodF7ytQyaprQz",
  "key10": "gmFo1fFeUboZk3HqfqqQqzfy6nDCj6rWUASgtjzz6rb1CVwxsAt8vj3t8McSuynCfHxLSiVau3BMnE7EMXt4JCt",
  "key11": "54Mwomn6PtQDPc4enCWovidTDkcWumdR4LTczpBYHhJnMJuXMFooRDU4NALDYv4MTBv8nxCFwtdV36qi1mpnPbMC",
  "key12": "31BQ8ePD5r5HrrZBvuiUZifCcjHvFw9XLx4XvJ4rfZKFFLhBz3NtzErFq5ZuC55a6BY5MqBEt7iZY3HvppFrKSQc",
  "key13": "2tpoTSkCk38kRDK9z6Sxapy3vsLYKuB5ZwbtGR6wby3x9cDrn6LJCNFj3fGj6PoK3iAqG8vWoZoLAXFugJAXjcMx",
  "key14": "YTxHBujCKRpTKVhjeCEm7VWSUzYRd96aJTMTaEhHzAGGx6gUVoAUUmtPR4ZYxy5iFwM1Nf2HZRKMLkTyGqaHUgg",
  "key15": "38KJqSoic2yceaojB9Ccezj6gGXVkbumKQvtaLnnhquDE2ktf5kX6Pe4jfxrNXdQqep5894HKjfQnDVFhtywz5QV",
  "key16": "QY3FjxhpjDQZdyUMCwpMmnG2aeKgKvPNV5RAVx1WtXYiHR23epNubKj7v5gaRA3tL3erSqHb3XReyrGhxjy8Efh",
  "key17": "3DpBtWsahpRZPfZJHMgEdCebywdWugnyAh7RuUrTNeBApjqvuFUooRXPVsopmYD9WTgZeQsSxEDDfebH55TN62L3",
  "key18": "uMBhoahJDed1of2q5CEPzbKohZ955pS3HuzSUgN8QhWKoB8jAaUZZXrxjdEnwc9Wz4Y8aUSJ1sBbEPMsR5WzpyY",
  "key19": "2FoQeemsqLbpHSrRhiLD9mFqgV6tnHqbPWxwv4iPRkmPhCtmQjRXGrVTqsy6WYizAk24ceRmyjpddbqazzjTVX8a",
  "key20": "4kHFkgqfHJs1ciSskNcWTwuGHgLrNh7E1XidXeARBVmN899Vq5x8cdrPSgYxsz91QCuVPFAKxVPnzig9MLx74a8J",
  "key21": "3i55A273wJDihW2f7RCmhsUeRBMpQN2PTGoa2vDTzj9mDwjVGMyNnpwDpCbDvieU5DWoFpnGx3y7uYEsaZAPfjJz",
  "key22": "37c8mNVB89ixdTDFVFDGyi9EyTKeK3K6TBzpRXHb3KmrJVuo4HiMoV16ThsdHWxjNTM6gZFVPNP3hD9wRcdYaG86",
  "key23": "4m4kbwgbhDC5EpBwVn9LV5Hrnzj4QGJfHSQj49uyJCuCyrFj24Xh9ftvfLfGGmhV1Vf8qLm68jsmAv6GZayYSBzW",
  "key24": "3uaaSjYcSLV9J2SxEWbuCK2r4VRsSWVTXLpU3SHiWdGk2omqSdxDbvn7KAqJgpHKtPW5tf5dGjCEEMzrq63zmNy",
  "key25": "tiH9Nu3pAuViDQsk6pbKJowmeHZfUvdzqDRqbwwPtczVjmQtZ15i6HtHZfftNpp489NbTQjM5vz835vkX3PuoQF",
  "key26": "CqvR5G6HGjHRAwtowk7USDnGMpXxaQimYZQNCHH28BDa8wGEBugcvEaDGqetnwSk3NLnYC1iSVM2VQ3PUWS78ay",
  "key27": "3uwYKBKAK67aa3ikJNCGedM63jmTC6nLcBmeurv39WZfBY3zrGpiJRAxzdwSovNWpXEgufscLt9343ebmKuW8YcM",
  "key28": "5mURxaM3X8y3zhFw276LrPkFAfQaVCtGSs8NWeZ3HA69eK9DYSmYKR8t7cLhBYh7VMHMhXykZJfgvEbBFE5schd9",
  "key29": "22Y6PMV5rNxP43t6CiXCu88X91S5ZYnrV4yPTznzVyRujHWNjDmphArbPiv4YS6oAJ2GgzVb1wiuLeBYJ7o9T8Ax",
  "key30": "pJ3p63YEYc5yzQCWWJqzRtYCbq1kn8tbRbpQ8N9sGtV3kEF9NXr3fPCSzBHoQebFuQsWsxEZHVoakV5tBJWp8UH",
  "key31": "55ny9vWYZQzDqSrPwj96so9cfHYpwhnu7wMxitosCQAvUDtn3NAepAT8GGWBLQ3nfJBxtMER2bm3s42fNZjMsUPZ",
  "key32": "3tgiFdDsJXB9VVx3HwfMt3FjAdNKToBKStpJF41zfghvdcFLpn6RGg8jLrKEBEH5EZpFutTfHx6XMJjyAZGp67S",
  "key33": "333oooEEy9J8BSTyTpHHFKsXXbPRaxe9pfxPFNXWgKZjP7YbgoSvAgkYDERe46aB7nUXn8QtrZcy8RVjQD1SWc6R",
  "key34": "2uYQ8XGN6ttMw7nZ7FnYKoRY1ZRnQ2wgDQUZb4fxd3b46zc8jcmzZP3qyfDpdQpGHJBE3NCBejNEh9cGrBm6Yg3y",
  "key35": "576gE1paJ7LYVZ1yGgGz6HnTtgQ9G8M6x2YNSJyRvbfmnkv5L9W94ZxnnCaLbc4mywoqotjGShdhvD68jMU6SVn1",
  "key36": "F6u6jJYqFWDE5tGH1KofFD6z1c94pFBz8HB35gqU6TUuUX8MpexWbcJrkfuE8Cx6ZkMFi3qv9k6sxHvnnHhNdpb",
  "key37": "sNcxYzVgk4ZGEmkjTUjbGhhDKubmm7Nc4Wc2Jupf4rBw6Pba3uvQjRmVeJHLkRWKkRmJSw6qpNh5T8Ze2S1m6ed",
  "key38": "2D6zDSQXuULYLrkE7a4tkE8LFsPgBR3m1GLTmU2HbYQxBKTCfjwrWgunk3Ajm6HFAUX5LMz7diyVUdyLE3UhBBRQ",
  "key39": "36vi4XoWgWmNi9bMc8Exj9NCWGwLM21CmNVjnG3dWD7Qccs2YTPA94auFuHd3vaAR9aATqmzrW9BWxGmX6z7dF47",
  "key40": "4xx2942NyMW4tc5PSERkK9SNpyVjsJk8USxkEm3VCG9Ce3Hk7xxZR2PeQ3r4W2eA1ZQegJVQ7Q8RZwpoLShB9pa",
  "key41": "56FZ4zrTawESPVwsqbWYKuPgo94j9BEqihJF8ic5hZiQhgyUuT154wWE7ApDTaVDTuZ24g939ibRXQKv7ye88w8w",
  "key42": "3At1VUBTcUyqbCvZJg2N2tAuhZCwSj89T2jDhY7g1dL8XPTF3bCewRiPtjCfpCYnLJuCHUVLBoTKNeZWLpjNbjYa",
  "key43": "4ad3b4JiXk7JCaYXFwN62x28oUGv2sNFwfopvbi68xtwT3qgGWfamYp1cVDQwKFYdHLQm6ohEWh5HsX2EFv4CeDp",
  "key44": "4EbKcMXG4yNuFbNiWvEJx4Wg3khy6XM7ZhZwmdoU74WiXu91BGw8mgWTfgvhjkp53HhjZdrKsFNAV5T3NMEiPimn",
  "key45": "SjXvWMiE6o1vN38XPMyjBR2mRCFDrfbLAix6yLutu1Y8ZuGPt6HtWNExQN5wQ1iQVgcQZDmBHs54JGQHjFaVXN9",
  "key46": "2XtefXEXskqvG48sTmo8EH6s4TJ4QBicZEpBF4TQXParJg4S5ooXrDmFcWz7UFRS2cqowGFaMdV8qoo5kd8Z3AHV",
  "key47": "3ppmDENR5m8H9mxaitHeeEdsDQUW1iNTfrGdpaBxe4XbBNq9qdV38gMDQaJttpfdX6FnKS1ZLiLbqRzwFgUfuNWQ"
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
