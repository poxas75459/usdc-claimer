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
    "39JAkFqAPN9dYJ57ecCdo7btnvqEospR9GypDVL6CdQvCjSJGxBhugPvzQy36NPs7CrwMaGyKPAy3wYJkf3firTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dqg8yeHjR1C3KAthbDuiao8j6VFewQ96d1jeZfGPdKRC9CQh7qHQAmW8LtWZPnCmMxcWgDijuVDZfyiqNMUgTqb",
  "key1": "5joRpHY3ed9Wh7153AzaqG1WuwLry8BRvN1sdC4G1hL1MsKvF6bPfMcRKQcYP5uPre4QNCskDhE6t5B4VcaeT3fy",
  "key2": "3GSVYiqnFy4fUWkZRQadiu4Kvte3fv6cGr5coxoYofcBWwHdWmE2HNm5rz5HwXS4Lk1rNXHKbpCkxLuQQRmujEFn",
  "key3": "5sSHWkc3kwpEayoFMszG16XfQ5zgZ2UotPaJRLTapMHQNHwBYUScj2zB1jYzRWr93WHJBBHxjD7kYratmvCW5wHF",
  "key4": "5eUuJW44JyffhftYy5kjPU3nZpCWq4hRcSiqaPsqspN6CAfJv8qCR78XEwDJkgsyDGjsv5NugGg2d7RsGrLFvHRg",
  "key5": "5kP7gnCRBNQohT2zZgDYT9C4Z9gfYzp5nL2Ai1FyuaEmwUYKmFo67ddai2EHpUhtxpz2CBjwcy3HLuHT7WKC2Xed",
  "key6": "ezYzof4hd5TFRk4ZPwMFoPA9VNbfSugekFGzS48SNmR1giaj9rHjuGLDrd1arQXBNQAFaWVbitPFjGPovMJYPm1",
  "key7": "4wZut5cU4yjznizHH6wNAUTu5nWTmGjdqgpRp7MyY66sg95mn4MjZre4KA19zzGj4aSUdm4yT5YHCeDQ1eyv1Ej2",
  "key8": "4C2pX8Av1FEg4mzf9L4f2eg2vQhVaMpghPqhCLXq8mLF8HBqMdA4zjtQaPpcLZFZ4Yi1M3ccC7EHRaKmzP334AsB",
  "key9": "4u4oCBJZc8f8eLmaQvNfXHxYZEN9vetKgATHZvEpSjpCvK2kVNR1LbDkVSE4nTcx752QrgU3oZ2QBHMeAPrkzy74",
  "key10": "3S4SwA9FZMsPw8qtEqy5vsXa68bmR8vB2xJJdyQk6s2ua1439SGwJEunCFHevoP8Bbkbrn8utjySLAuusgkEoA3B",
  "key11": "4Y5nGDRrrb8Rkvi8Hhb6TzPmH5DqeEXwQHBHoMBapNGZwibBRaY2zQZuQrTCA9YitN6Wh7655oer2HE2mfNdfJcc",
  "key12": "bC5266tf5Gx1afwfuMQohUpWELhXAg68qCQESvZ1iqH5XB6k3jNs5wu25wiXN6PVT6X83yAWCHpS6EhsrqPcPnB",
  "key13": "LMYDPeUdmiKtGREqVbGkneu4E7dL4gfSe2GB3aY6YHjYidEBVJKGaANVz95FLukmNyRu8UZv1XkBAVKVmSgzrZe",
  "key14": "2NbTVkuRf1WHj6FnnNoGUU3je9WaMjATwTYiMHkMCTvxykBBMCCrAvDftPhhayZY2Bww6WhjCueg4J1M4E3TgiLF",
  "key15": "3TCfzc2dSP6b5kuVqgrHzURkXPH3UxNwZBZRkZikZYJTCmoaSJo1zQbvyJFHHfUsfzZiL3ostPMRXRNpiuAcjepL",
  "key16": "4q2wHFVt9kEN1di2WmiuMYTE6Hm6HEqjwoGx3nmonxjYn7DpocYY98ijjaoifNBtDoUtyYmbLXksX5BL9y1L1hJV",
  "key17": "4ktiWWUGkn6pxBBYHkmncBcPo1MxfKvtVxcsH3CrQk59H1cPcABBs2HSujtdEuzVLuY1d3TuPdP6KvLbmh84RRGb",
  "key18": "2zEe6dwPJoXUcrinm8H6iY3H6BCtE3SoG9fqdnX3ARE6gYojFxPPMCpcG2fQwW6xn3wsq4cYLY6ZwqwgpDAgCJZS",
  "key19": "4yWBeqVBr5TWE4KFt8Q3gRNDL77nmjvX6zWn3wZHA3qmqAKRFadit5eBByAi5YGw7Skqbw3tSJot6rzTLqJef7KN",
  "key20": "5exXWHFJ3tZvpL3Xn9KFPt9CJgnE82dfx7XAFSEKPqk93aY11tJ7AXig2kTx33Bo8BX94vKgWP3Gz6quuUoQu7hT",
  "key21": "2h77LcMXTtHHgNtGJkWhKXk3cD2hsov4zGu9taMfR9WNGqZvXeegMayPptw7CUAxT1rafp8T1Jp1gMU4gBon3Crs",
  "key22": "45zeZoASSE6dPb6gbVGGPxzEYGrPbjvjhHwEsfj4TVudXrmBWKEvC3H2VcwEQ4kT7vcyrfs7wGFLz6Gc5dYSvxJ2",
  "key23": "5p5yBKeQLPVVKgJp5jtxwyjbAEiFP5ZjA9mm6vr6faNo1tzDECgFXePbdYQ5s5pmHgAQ2jhNJ6ZVUfghfJjKNMg6",
  "key24": "65Ujij3FuPfxSYvgbxqmp7MqWEBi5ryZiWx6rgvKEZRsCZSiStq5TiWCnXcMMR1X4mq8danyAxJRFKJ7hmw47vkP",
  "key25": "c98evSjn5XEfNNCAWdzhe3UfjfuvzQywhEbdGDwa2zS5tcbU7t75qKLZmZfVg9beCo5zE3kfPWbmbvHbuZMdEki",
  "key26": "5ZtHiCXskq1vMWTgrws72uUm59vDwyrdoUaveJDBNPcuoWGGcgaY42PJnM7jDJdbX1U2612FbyJQ8Qnq7kG1DSX8",
  "key27": "2JbU9TLvxbRjmEc13ZVpDTRPBfVKqRj1SFpJaayBhZEAeKunVUU8aNKqA2jtyZWEGkdkaSkSUzpWGLJBELT7pkgA",
  "key28": "125o6RWTx4Mn15GDJvLYhqW1RVoKrwXxhk3qWLFYTyBsPUbAuG7yhmYvbr9jgc3FoNsr71gLm8yvPCtkwwHE2XX3",
  "key29": "3vBthF6skK2CsTJysrgygepswFkfaVTdmmR1asUs8N1AVrXtFXNtR5iBG6uhFoyEnF2DkeA2oucAbhgQhbGVWFg1",
  "key30": "3VxvdUda8mHzBDbc8s2G85K6mcr5KjtAvzdC5orpusSYWCB2JoYL79K3ctLUAEt9jxBSvGyZks5cLi5Jnuk514QQ",
  "key31": "FNDj7RX1Zt2HvoEn1KumVSLMktmiiHENoh95YWP8YhSZAuqCyWCehwgJ1XYqz4BjnzdSd9JA3kFakxkgkkHYmGj",
  "key32": "2hAypHYH1X32YkVboBZsB6hghJ7Adurr1eGNysiRLvcUA2CyP1P96Pi4VhdQ9arzrBsmCycTPUDcLJp6AZRzr5rZ",
  "key33": "HPDXEySPUBv7JY8dGKE4Z32N8rR1RYFzbHbMvXVeAaNPLi2Ls5tCnjYo8GbnTF8KcNvvqrMN7vuEdxC2mfqZa4L",
  "key34": "54MGTyGkFB7YEazmJo41TSvhZz6D1a8aWNd3FTzXYinCLDGRbQJar1fiHTz5ZkXbSNCS1S4inESdsDHFfNzcHnL",
  "key35": "4pMTvMZyub7jJMUYvLBU51qjrsoeWXMjuuwrKS1vLdZ8TrZdVshQGi3YZ5SYBZoToxCdVHoYFuqhhpVipyhP4nqw",
  "key36": "2k5c1GFoXGzL7z1oDdiLnBuo9fn9kRddajDRJxiypZE5Rv1nbqN15iaTfMEd8pauqyWPXzaC8DZfh8yp1fLig19E",
  "key37": "5KZDkXRWPAL6QsRTwKicTPWgD8K6vVLvdgkBeu4RxBwnJ7amcotguboC3qVFkYLmP5T4wLiGP3X59HuFvcts646D",
  "key38": "VvxtAEm3AzcYmExPq7maD423tTcGaMA9e2osWiFsXPc1YXndodoQTp5G8EZReo9aLtWJDFPUBLkrDhKLhFs59cF",
  "key39": "3aAAouurefy96ty68gf7mBBDHTZKYvSuRTpJKoXFysJgZ5tutVyHDfYQiwmUAwPAgMap9QC21PbMmBFaCsrdUgRo",
  "key40": "2BdZ4hfhpYCb8xEXA7hLnXB46vNgxQaTE9FV6mqqW9DUkidG4YEQVGpadC9BzAgrT6FkJjyww2NVDYAz41iWSQNm",
  "key41": "4YjEekcXLUrx61ZDU2N4VELx3eM79wsL2ztoHLe9EbY7gwWhLXPwnECyXbZc4vruFm6mtZvvt86kpAWRLYxnnci5",
  "key42": "xZmfcp1bfUvYa5MeywAXLYQWuLtQVYHmERZhVxuu3fYEcQkk49uGqZjCUuuuQW3AtcHPGosBstXhJAfyrLnwjtV",
  "key43": "ywjRMFnPbCL5N1cCaPAotMV4pxb61dAsWzV6FqtCR16gak2LCeQ91G4m78F9oGsYttofcecAcE2JKX8tfncjTF2",
  "key44": "3TLWzZgKCMrX6pevEWTyQ8mav1GkD7xPQFFuUHs379ZkTnhxU7tpxwkvBXUvqsuDChe1AFTmUdk12vt7nCDRRmVq",
  "key45": "5voiprSyvuRnNpcqVxbPo4Vvp8WW45qW5j7wNLPpPHeiPM793VDtGiL5uPWohGVtrYqpBxgPUNw8v3TV4K4uhLZq",
  "key46": "HE7A9HFsxuvQMYJqRpuL8nWpQ5YLeFuLQaeJ158x9BLsci5KkckMvg6wARGfZ46GbLQnDfCwM1VpZwU1sdzLsJ6"
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
