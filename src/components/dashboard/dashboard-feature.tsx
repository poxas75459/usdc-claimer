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
    "2ALSGMbfwtTKBVNJeT2886b4zfvAkDGYH988nf7Vuqwy9Pi8qvASQuWE3UmpZixLRKoktYhNUL7SLzi7k1NrJrPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53piPiLZgoG5T8GDKzDJza9pHzfTFv2eQDztVVHTGhFMvhxdLqyBt8GLo66GB2JERphaoNgXqLss3x9igBDK4M1c",
  "key1": "41JpYi2Je1HwugKzfxd2TvSwDHb72bSSSqC8Tp16FswyW1cWQ1FvriMHoK2Gp9p8WLN5LC61ExtN2kmFS9JD66n5",
  "key2": "ihfmJuxL1xd6Qfe7nok297kMZgeY4z3jw5T1Uvrx1ZV3dcKdjA5LDSCwNFf7pWwqM11EHcFv4pobGH59GUJnAxX",
  "key3": "2QsdKuku6WgCmpZnYfwUpMmUaRoCSDututwXJPhKHBqm9puYe1UbYk25fcRtw366FFkVZ8ovnfwEBosFWvvw3tqo",
  "key4": "36546HaAdFuicspcHCfhDXe9jsFFR72cG3kP6MgdqcxozMSwQ9TarAwM5Uecv6o2mbCJvELrhvuFwTsFCzVD4Ghp",
  "key5": "4AVCUCNNBDsoTbiSqbhu4mrdLKFyQJvKE4NwW6UmSYkVSbJZWuikd67HK6UTQxk8Tg4PmspFfSc8UKMW2efBDvYs",
  "key6": "bxxAEnTbE6BUwxGyUbwpERSUNtahJmjURHXLUyudfoNykPwHw6vNhJWcrvbao2GXce8LgHdhaqouTkAaC68eNTs",
  "key7": "57gzv9XzsNSXqnLWSzEBpv7YQhiYHKj1ZDABiihYEn6jshdH6XnExPdfyMz4GerEcBFfTvE2ppkVANJ13Kb3qmcw",
  "key8": "4FTh8Sr96KYXLyGdvvfDR7e1edCFvo4w26ACxtKhdchH1EfrfwHWtSQV4ExudDMNzB54VnNeLZFmUa41kxMtCJ3p",
  "key9": "2PVsRrsUPrYMbp2fHZfTuFikoSMP4VDuotGnvN9NHfmsMwMmyncfbexD5nmVoG8GsRPRTBJMxsdo4rKgwCpUbeAU",
  "key10": "3Tq78XBHuQ7BvTjDbPNLThx8p7Eq6aUdgMVc6RyQfF7yus4bCdkY72NbcszfAz7TNrQKChMq6SjxF96epNLsGAbZ",
  "key11": "2Xk2ZxwEdDbwTGycsVHr2hxfhM3mgUaZb7TknmsACnzETGDACL6UbaD7vW4p6hbkWTZsKjPQb6rDVkhgZJwe5KBd",
  "key12": "3qUqeH1gkHERvofeiKCF8EristEsQziRPMZvWjFtN4rCt1DUM9zu7kbJLbqyz6sWdodSXdubEjpNzxJSBqa5w2oj",
  "key13": "fMTvZ55daRYjJJDBrBTTasgAydejVh9H55Wo5TgiYoQz1CGMzoVtJmvJKUBqdCdv4VE4UUbYiZpUHxiFmrHEQTj",
  "key14": "4ZC4zeJZY4jNRCjepd9u6cAesAkrPvLAjDvahzqm3YLXxgFQEbcf9ft7TyKsaCSyCysEAx3VUwNuo3mnYVvTf9Cu",
  "key15": "4k5uV93QbXeaFGYim8HEAAV3zAS8Vt8SZ3LDPfJ1ppqDFXQXLARg6NLtdaFN4vpsEkzrqTyqcPFvsvdo9u3ogNMn",
  "key16": "3gyYXpWstBJmoZEL6T93nsH71qtZC5TZNzQLcn2tqWH4zfNKYQwSbodoFfj9HM5tuV6Gxa7Yij56HmF9GqE5C8Xa",
  "key17": "bTyCN2gC3AR3gQtWWqdW8tsNHrNEPycwzFuJ3L1wnHACcNuPvjtsa9krSppStnzYtHNmYxyBh3tpAY2engAq8wR",
  "key18": "3qgZr4J3JuPCNCEqmFBmDzVUdyZx4aPdHY4wEnmG9h5c7Y4d3bdtV9DMjX4cjAcgckr6UgjKrCsEKvqssoJ4omae",
  "key19": "PfuP3k8huiEaSJvm2bkG2sTiMMwzQHRuB5MNWERuH5jJNLm7Kc2e5RNrU885TouBrWZ4LdKKN4eCj6qBBhDLj8Q",
  "key20": "Y4CWX2pQWCecpSHPumEEpJnmMAXjDkA1dZYX65kzdP7yK9oBVPoWGuJWT2ADiL1hd7GeVXcgzddF1SqPqXevZrf",
  "key21": "5gDDE43Q4WkyDJFoGHEnQE4qo9vbd2qwPakcgk7hVHQcpfmkoHFHU7H3L1d4b5fkeXuDmmgZVK41jxByRFWFo5H4",
  "key22": "4XYQBQ8afmxBRnwZqS9BP4Sk2Qq2DATRrXzuAPsMFT4EXJ9rqA1cbudMNDanPRGBvztE3XvyARQ7Nta5rAGrE8Tw",
  "key23": "4AcoPphVGpnEQbPdqn3AWmqKp4tLiDq8bXGUVp5ecnyF745qRuJbYz7aNeD8sjeW38p2Pe6MuGztBir4qa7bEes3",
  "key24": "4SUTJtvfUSe3pxxfnRevEkoA9MuYL441koe6Ae3DewnPx1sZxkfsaRHHrku5m13wdk33vG86Q9BigtPohac9d8F1",
  "key25": "2SahbUK6q3PwCU3KxTUuc29WcNME2F4LyouTodEqs8p3sdvwWW28KvMkFg16wf7rxBPhjuC1k6yeGZPS9onDvu1D",
  "key26": "GafHkX7E2pWNnDmx5spKF6SYJqeaWx1b71VWx6nAm7kGCcM87KWQmXPa3dbXyJv9djacnVqb2WGjqCzXR5R6LsD",
  "key27": "55Y1HGXrZRrLDTJXxzwkj33Y36urfS4JiRRk54U7UxpUyfxYutzLmyKpeS9zFVM3YZwwp4zjpyyfnKYqM1K8ruU7",
  "key28": "39VEUpt6VZj522NoSm96KUDvDvZDjVZkj89qpoofgeKLkwN9qgKH5Mu5Jzs1rnbDcN6XUVBf8kGQJvNGbHYyikBo",
  "key29": "6dsFoFwMS7HZkBZGytset1o6uMid4fBMsX4yRARqK6q3KHUwYohiLWf1QvUzRr2diwhMj7gfeH5Le4TAL2MCgdq",
  "key30": "64hF1mtdJthMey4QvAefV6vqrtR9uBUHWXpEAVNg9p7AbqRJPVVp9rbJQF44P52nge7cYrHguXsJLMnd89tdtBhd",
  "key31": "5hpVHNtV4SKngrTU4eJjeHcBRkCvGBrs1yszJ8m2i9cqAffBLLg4Pm2T9ain9USjnhSoRdfc21oFq1StdEE37CmA",
  "key32": "R1xi7FSwpKsuXo978KYo81Aeg1GHnnQMHp47hpm3pytEVWAcp5Gn7JhYVcJJKV21xDkAEJedHyQNQCWSwGGd1JS",
  "key33": "2PP4cguDcMavbyxfbRpwH3pot5prRuXPhiNmMV2XrzKsGaAfVDkDc82zGAyRJgRBV7Czgu4g1qDhgoMju29v9JNf",
  "key34": "55GeK18WiMNz5D7TgSSjrzRSDUcK7XdaSTDmFjdx3RTAi1Nw6aXNisRc1cpoEqz7pxQ1oFEuTZaHdhqowR2AP3xb",
  "key35": "5oiTSFmF3vGXRDinnb6bHd7CK4WC8Ae5KX3dd6r1Nf2pMjVo6ifnAsxWtQvEH59PeGGqWW5H8hCWMeYwReXxEfgc",
  "key36": "YUvJtBQLT1mg7THFbpr8a82xbnSLeg959VkjjjrtLZisB7V4ctgde75ZdLcG54BFKdSZVLuj54Fgxe9cTeYgYQe",
  "key37": "4cmhqCNdLeVcr1uenM2Ah6SKAzsgCU5fM3fucjQqaKTyQdmK9QjkBuBppKwivfAhudhDyr4Db8X6az37zwYy164j",
  "key38": "5Un2heDFiaJwTEAkwJiyph7y4fFMZ4hw52sx6aQ6jGL37MBRHiN5ezyNUuwpZsq5bC9Mwu3jZwGNEkNYxt4zd7hp",
  "key39": "2ajwMqwPuGya1hK2zLBh4oiykmwu9Dq6kXcnMZuHgBNHtRAfds85jJgfLBGJeSFChP1P4Z719yTXpqHdtdbV5TB1",
  "key40": "22nTBmgPX5jnaHY7otCEkLWLZGqJVS1Tp33rZfuSWu8L4YPRwaYtw2S1a8mS1uwgjMBzFGMCXMWReHCQ2wKskWor",
  "key41": "5CGZ78HtivCjoXcrnXsxY76GMhMAgXAtkLV1BNU2GPgMcLT7jhRCCGsNj5XDv5GewjWUES9xAA6wYod7nTrMn6jC",
  "key42": "5k8BdcGp5eLK9ugYDcU7kcs8C7ErGfguDw7hu3QR2WcLLBRCFYQfZhgAwxgd7Lmpx5mwa4rBjsqTKwPkbfKb5D3U",
  "key43": "2CaNQj9oH3wp6jMPq57eK8c55v3Gf7kJvqs6utUPU6piPEkY4AVPLYY3MGbPnmXZbZ1PWoVe7nezDYxe4MnbXbt",
  "key44": "Ase6JZyH8qQybMJstvKzE4rWFkP88aWGr7Nz72ZqkgDeXfsjsBFqvgRFW8tnXcw34DmQqDV8JPzsbYSJF6WEN43",
  "key45": "29SdjCxvktv9uvTaVA82YAH4vn5p7mGhNhj1UtKnw8s2RfRGgVzn8nw8uLKby1poZEMBp4yZsGvxXjKq8Jjorytu",
  "key46": "4mnAF1M2ESE5cRMYkzGx99T2v6H2UCLZNbHsguDV6cEDTwJQaREP4g4FmP1BFTXw1XAKaVeYfAdZkGZLKDKXW3fB",
  "key47": "67SDDXexxWz6oo6LHnHJLSXoH7hqvSBRZdZzobqFfVP5ZnVzbtNxkyQW3nABhdUgMusWTB6j9pqs5KFKa8mF9nPp",
  "key48": "3LH8F74R4xGF8dKuTq7CcYcgj7tgSq8GsNjzQsBw6DkYkfenxkHLCoV9TPTctG9NpCw2i1mhjvRPVAVLFejnYinX"
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
