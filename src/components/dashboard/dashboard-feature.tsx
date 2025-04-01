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
    "2aNfnuc1YRkQLiKZSTGbWTxsvSoaYzEh7xyrL9PVqKqP3suXe4cGqZQVJ7qHmmraaF3nCBXvgjtz3d4hT56ZNKwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fM1BRX4zZTK37y2V1j9wcBofSxjuBkTSwfSkqKbrHg4tinNzwUQ37y6uKbFWoV3FxLiwg4zmaUP9TCbqifnL4Np",
  "key1": "4a2afpv2vbPqcPgtW74cajhwzsPnh6FGf7omCf3TpV9Y1TK7WuDgZkZ47n588hHoSUUiXSJxsBEagpkMxWtjVy5J",
  "key2": "3B2aahoUFXkEDg9yp7K8qEc6oKSjM1fJjDGGus32F947XdRWq5P6zvPgj91Yr2bgCZdyzNA8oLrg6YKQPaXn4nCM",
  "key3": "49A8apKP3jHvDeV23uxQiDyCpPf4qaKqMcVSHJchBy8rkyN3FNWvx9jYsM5qHkwzhs9BSZd8XZoSiHBBHbfxYsHd",
  "key4": "24J8UtrTmyxVd3wNjNwqBPP8mjF3QrV4dbZhEfteaKK8UnXQ6gFVRFbEb6MviWzh8SNokHYJGC6gXrgGg5aXfx7z",
  "key5": "DSVBteAUvTjmrUJjfcTnLRkaDZn4ADuHNK5neo6LfiU311ijXnrgHWH54PtjdARGppboZ8LDjbPriX1ChJD4Sym",
  "key6": "51pELMYSsRgL4hMhNQWY42TT494SJyvkgJ9bKuhGA1ntiCjJkUjQPxWiqvJzPJtvPXJiwmvgvpzJbDQwAFHXpo3X",
  "key7": "4ekXMF87cuxyXwDneeoxzB1QnR8VPERsq16h6GPkuh2RYGBt15Z2rLGYnXZUyx6TKh4Lny4b7n6yBcsp83U1CQG3",
  "key8": "24A4oxS4wyZFcviY8Agin6pbLztGHDtwy33ZjhKricyd1thLynw71SWSiwVq8XtHd9vvdQgvJuFa7eqVCgDJ5bsz",
  "key9": "3XujGPrKxo2VRSS8vgEAc1UN6Q6amFZYsyoGWEJZVAv4isvU1fCEFcabY3LRPUR3mMiEJDWytKsjYRDFySZqfMTY",
  "key10": "5httF9UomfcArnghhCHKoRiwwjQ4uCwMcZuuWgYuZtwV5PHQboxPt7PtfXWf5tsctVrUyJikR8gpGNcGMaytxyYN",
  "key11": "LzfwpU3iU2dp2ttcWWn5W2uybRKVc9o1XQg9Fg24rhxsuPQeic2Dr22H6e2FEQn6LKvKWfyhvB29g2a2rsUN2rv",
  "key12": "ZH2opWaDZiTjM3xK3iAaLPyNaGANDxn8tCZcCBd1yZyoc6TUoQxFKGWGuu4bXm12zz1Fn6CcEZVmuo8BQ1jWvHG",
  "key13": "2ezgJWB2Nuxx57U3P3qSLP7YQcHtQdoe1WAGVWYnH1Vk6Uid7487BwaiXahm19xGarjE5u1cuKV7ugS1M8rS1K9h",
  "key14": "2Vpy7h2RL8vY1uFVzCtDZy1UCG4T67aowoyUFag13GFYfKew7vM85qKzEnyypKdoVmvEqUbBAgc5gYQg8dAeUZwX",
  "key15": "5BCXiHfQ6Sd4qVJAKRvh8SWbpeNk2MnCy2ks4KPyQToiRKyWCsen5hD9gVawnSXzv3eSZ1qahTuNoZ4TT1iYRPJB",
  "key16": "31bUkTdEjoBaATLGZxwZUFd14HWgReDb5Skri3VxyQVKE1Uotkme5qXkEzFyW5wa3NUe9K5dmqF1Lfdg3fg9w31P",
  "key17": "h5SwwvriBLS2doTpTLMD3xA2b2R9V9qe1hGPMDaNaPoW3RdTNqD36ikUZyYqHZFV78qzqT93A2QAkXtwuDhkLrw",
  "key18": "4wa8mfeXWLdZ6RaBVN4JvE4Vd5MAGSexkAcedEmjzKqdqy7yJaR6pJs1UD27pmxtPXkafBhiyomhu3noTQYNUaZm",
  "key19": "KzRbC919afCcb9nyL4W77TPR95C7NGJGNijbtDJvGD9kYTnq1ZWWSfPpbkoWvdjU5CPXvHSSMxWneced3i3Me1R",
  "key20": "3UifWyN1A8xMNPh2Utxtx2nYdxUJDYKpxjtvmHU4177FUaTXFae6DUvhcMTjTaYHVwB9mi7xQ2h8QK5A14Sxwd5z",
  "key21": "26vaYgjYBVYdDC7QkPmG4byFnBPSXKBXFZZzcCWWmZmaTvHpiEWJwErRwyDTvu17ixxLtpCjgLxynD8vzWmgbU7J",
  "key22": "hB81tTYVZzvBoRTMYHRsAwjem59teaBeNR8euFWg278h9ktp2ePEgSoU218Mk9YpuakvzcRXPLKRUi8aDe6sHWp",
  "key23": "5fF2Raooa3WUQYjmm19VCvdzVBy7cri3Rah7Y58MYjSViBavuEqCcfCr5xC5o53NAcB47JsMHJyaMacdvSHww8QA",
  "key24": "2eD5gZRUViox5wT3ziG79XMgSvPeEj8jwE1F15Xsiy46ovZA8aoU1QewqazEwZeeXehNFiwVbA6gRcWiFCXvE8Sg",
  "key25": "QTc4MXHrHpCXF7HqVvpTeJ6CaNCVTKo1bTmMJs3nCVs95tSnutpudpYrsv9WcU1mLxzffrQhMakRUaD8rA8MU3B",
  "key26": "2aHbcgNH3jdngWFhp4HxEpoor7JC7YKLE7tAWm5yHZ3mtPVDh3vNcsEGgtoNKV8LzARDbHdpew2ssKv8wK1KUdX8",
  "key27": "3T2DJw513rJ1f2aPB9dETGokXK3dXamTH1FTk1uzTePbgi1Yg5YPnecx9My8cbetCESmt23ZUDKEqABRePBPtomG",
  "key28": "2cHZ4MogSip3ti5PupDzFeZEtHgmfqZfYvqKF8GR9EZGyC5m4vxthugsrMXmP98f3h4JPgHZKfHbk3XKrvCYksn9",
  "key29": "2hrhxhL3Zx3SYJ2oe19YfMgaxXryuCWVmfnVUZXc1Hxyg3KVdWLTjeNbmf25dLuVRynMoFzfP11TUyuvh7DiozDg",
  "key30": "3vxmQfVfQqS91Lxb8C7d7d8ZYH7WPn3EdYgUZ8YHaXcQEwzYzw3qnJ1fZ5ioX6ccZNeFDZLkuBRkjwmWNTSe7G3c",
  "key31": "39RTpycS18YPGBFa7XZdAvNe637dENivU7tYUyi9mAGhraSeeaHx3YhTJMhwGHdURMFg29eLauuJAphDxbaz4hFD",
  "key32": "pQFqbU1u1oWfMjaJmkEj115MAkUeYhAdfbWTqCxLQLjB4WqmSiTzNmMrU1KJ3wQ15x6e13QMeUkxiSCtqvBrk2A",
  "key33": "DxYSoMwEEpJeq6yD6hRhC3qLZPpqh8u2tzz1sSeLWi4n31tmZcoQynUNXRkkvfxJ3DGopXT2WqqW9tqPSekckhC",
  "key34": "5b1H9QmTjGDtauVVDzDBQk4n4bkKupuTpYxti4sJDRbJYUvCGrEBQ2KZ4FtPPXf5X1bMvsSab17GMT4WW7pLff6i",
  "key35": "39vAWLmavukA3N15qpb7GzYU6XAaMJF7P7XCkvLUTxJZYDuoQdGm7jUaAtYxQkPZ2acu7bDEw27zgstiuHRefJq2",
  "key36": "oDwV9ShCjop8AUEQYQii1rUYxbuyTmdDnuRY1dke8pMjmHppzECJP2CvBU52Hj2azCGhvVWLoXnGvZsgkFnD1D7",
  "key37": "3cAiMXoPeNv4HQCyZRfXy9NTXsXUAqDyu7xcnA49y9mvfkNk4oYXpYkZ9WobKudBWWXNQmngh7kptoFQUaSh7YjM",
  "key38": "43L6f4uoXyxHTZ6WkipPPdubrR8LM9kezRUGVJtYuRTybnAtN85HcoGd3L2hhCsy6o9BNY9VFuT2Z3sTYbdv7gzg",
  "key39": "2MRKp4r5g3N9CQe9wPxF1Kk46bv7iRV4Jjq5PdthgfLbqGBXNPqrapHAeE1kFg98gmQS9dSz5o9Z3NxrRh4LYmnj",
  "key40": "47qNNfGWs55WPJYTYfLFwamc72yFtsBob172jyVS55wChGFL4VbC7SiNQFtdJTEELHDAUZ7qXqQpPRaVCRRmrpkX",
  "key41": "3MCUWoJTnu6bTXUUp9GJNMYXdgtsw7dv5ToXSxy2AGH5hAfaBjXfJZ9i5D3ik4fAcBvNMRNjHRELqnTEkLRPtoa1",
  "key42": "5VCwodCeGfAJAfxTaYmpHfDJuJ8J44CCnnEYuRKFbpxT4eKjLeTD7EJ8WoD7EiUkPzvJNJQNUfVcdmtN9v3wWujk",
  "key43": "4MQ7nSsB7pSV9tVUeWb39acsCPhhMYCpsJhBtuC5Fsfgq2aVWDYRfYJUiLWeqcHXz2uq4r7UdATVN4MsHZakmxFr",
  "key44": "3QDWX5Sp6bo2t8RTBWDrZaCN5WTYS6AFF2awGuzEUq2AyFPE9dvQGfftHa5tiKCs3LDgFrAU2FRXz29HWfKiFZ38",
  "key45": "5Rxvg58YKmVm7xxyaAV2189G9kKdspfgsGcij1ECEvdneRXi2s9ygj6qZnzXYBR8ESpUd8hg6u75YyzfQdjNSCJo",
  "key46": "uweJJ2nUFLc6xFYAhaZKwgheq2d78kaJoYFbpMi7UkJoaZHwHyBwsHbjP5E1Qx1YDpgsQRFHa9WKJZmxbTv1MrU"
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
