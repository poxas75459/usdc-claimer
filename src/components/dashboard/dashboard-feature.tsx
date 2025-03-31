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
    "3oVebzXYwwiQugFXixvQDftF8MFeC9iKgM2hvra3nmHXjUEY8Pp8eT5cfQzmgUhJ6FYShFHDpQuBsSGtgKY2TD2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2znmQ2Fod781cD85xsjoYK6jQD9nvZNn5pSGsWhhw8VxngC7heyiUVSYiJgmPwLvENGmGDc8TmrRKGtZx1um3cNy",
  "key1": "nnUSeSnShgJg9L7d5hbFWqSuYMECwRroL1wcmuQvdGzVNqUX5jk8mWMKuGc4MuzWM4Qc5K8pc2wU8B3xnF8XzhW",
  "key2": "4jTFcxA26RfYx4FFkEuN7wnSJdpuedCK4tZKrGhG5y797mBtmSiD4YBdgpNM4NDMMqCS7XRPvWqiD7J99Aae8HNt",
  "key3": "2M2tUHVnrzbS4mxuSa9giwntV8Y2QWDiuJLTYbjcAauWqyEc1ok1GBBdB2sjQfGiabxbZ8bVuiBJ2Fw6ud7Bp69w",
  "key4": "5VKy5hjiVgGnZb4yqMXSEb7Ydby4GF3meVXd1DQjEq8EkfLGcReeevawqGpjPXXW5WuE75wX5ZSrg57P8PPHXFPZ",
  "key5": "4YoVQYw4fZ1j2uE5whCq7VRQjMo6Fe8BVkCKUn5MmcysXMwDqAaZdyggQrmnLVXx37QQmCGvCAXj7vnbCmMAKTqx",
  "key6": "32CgPSgSUnLQfN5RkSP94xYGXWCYcmrSoF6MoAj7UepKyvkwqtfZ68o8SbVz98bSLFLAPfKZveZjcM9a1ix57NSC",
  "key7": "5gRhZXzxfMDDYv9kNE7LfjDhF41b4aBrzttJCXFdLoyW95vX9Pq4SmSR8GBSjFBR7cPnCZBW9HcSBkCYuTyEENo7",
  "key8": "4NGV7F63emJ9JTB4JdTTi349qBrZEB18KQd56cBCCD8ZbtSd4N7FxzLm3nQ9gj6wHY8DJfteRim91wwXjUVi7jW3",
  "key9": "3YaeBDieWfKLzta1Cw7c6CPdNmtAKkKTwf5dj9q7c5KdCEQrEtaC77eYi3WRdvcLxYWgfzm3sDe8NoNbMKfT82EE",
  "key10": "4tcW7HqjYcTukqAPkCc32comzzk7h3gKo7HCJxmVzYK8Swuoj13pDrM7waDLGJhDJK11Bg8amx3rDEBZBCLBiu8B",
  "key11": "2bXBypkhaf3AzqmDVcWQYKQ6R8iVhNENbAZUbDDY1nmYUc6KvurcxQDy87YK3yi4zQuU8kK5s1xKyhXD3m7ezXYw",
  "key12": "9mrr7u4uXkTQtEfFURaHv69NNS5ZaB4HhDph98P275tCbFV6AYiqDsqRFbhskvZdrAdyZ9TdhcRvGyZ2zk4QYPJ",
  "key13": "3UgLp4ieJPpE5cMmMWxKJV79yEQo392FdayLD3NvJkyzLSbBousnCEozCiacKh2ckN44N1WhbUYE93RuC9NDkQQS",
  "key14": "5NbjBt5A2UURsH6GKfB6kncGpJ63S7p4kgqdjcdMsK9xpQJ233RrBvTXQj7Qx3Nd8BmEr5Wm9Av2jA6qdB1JjaUf",
  "key15": "2Ve2HGNB9crJeMmK72sR6PauedMEZwH9BzZvioVRW1gUzHfhmoH7PomkvbDxhx9rjjMV8qyu7j9yLFD2R4pHvxTu",
  "key16": "3ADQPw5LGJDY5iyLzwN9rWPX2ED2EnGYE95iRUKjo3ehuSaSY1Lz6GLJW3hKeaKvktVjdzg5LyuJ5bViULLqqRxT",
  "key17": "4PbwWTb75buBXaRGnsLLeFFTd65QCZ6a55qo34i1e9v3nZUmkBTcYSjWqV3ZRnWUTRfZa4dgm2ocxcZhXD97nvXa",
  "key18": "24PxphSRWSjvwvZzMB5o3ZMPw6M2Z7SxuYdtuHCLB3Bivzb5ukW78rc3UZXm5C5cKQAk9oSUKocAchFuL7QGXXcq",
  "key19": "r1TVjTjQF9LyqygtGMP77fMeXtYHzP8RvPZ1NMvQan63EqQ7U3uyvQaJHpwPqsQS25M4A7NbcViHqj6jdMiqfoi",
  "key20": "4CWoNox1R1x24GWNditBC64LEJdQ5SqbdsfzJUojvN7apNd8YcnGYMju7tYgg3HBPGhfM77ufNV5i3uW12K3Ki75",
  "key21": "5qrXyipTsM4YBCtA6wwvmCCVxFnTy9gEUJpwrg7y6po8xFbLj1uv432dEz16FQWMqtY6qhEgNEKEubhBjcUbn4HQ",
  "key22": "3bARsDmtUJwgEUqh7ocwHUmNfs1sB4Z6F7bGVDTSJDgN4AGGcpDUHxE6NAUjacjNy3HVxQrmzi3HL4vFK9c5bwSR",
  "key23": "5QkmH9bcJuREiAYpfw6kcwgpw2wYZHbdnNT2zQcZRAa9t61pDuwNygEYvzJxrbFxB4cPcP8NLb41gZ11PVTHJPNp",
  "key24": "32HQsn4tvWuC1XfG9YDbd4PfBh3jaBjCTYdhg2w2p5WCbMZ5xxXjZmVyc58i2GvGfMBeKWih8mFJk1afsCyWQ7h1",
  "key25": "3UU5f35Hc2V7sHz3LggSzuKXv7w4FVKXCzF9HvegzYUebKExggVVR1aAJoF7GXTS6VV56u1zcUZZ5JF7TkqaGYup",
  "key26": "3K8WNeML4g6XP6NXU7qGT8qUbmzfBYuZRg9FonugRe18KWNTgqEsXtwvsvmSJtUcZZ6GTLrj99xx2VHTFiAmP84y",
  "key27": "3AjuN4CwiXYUZW1XWKBSnU5vCmPJGuoDXaGHFVKw6vhuJYk2W5SKEbaR97Ln6Pp1bF7ZhuB4zq9YDNRHwoabA6q3",
  "key28": "Tt28S3ZDD9eKwqUVFrUKifyTYCe7RWmA5oTMbk6LRzt7CLNHkB7eawvDPmUfYUYwZ6P2wxgbytHUdUsUfmHnQtJ",
  "key29": "uGhxE3bx6LpF1Cfo5BT7CJBgmNnp7FdMoMH7UceALCMueqowpomSieR4yLtyPCrUHn7XFRX2pJREghQHfCjm2aZ",
  "key30": "4eRQWSN5AfMiWFUZ94jWnhWkJq4nGyfh76821agHbct3Ydqv3yer6VdgH2m83K1qNw1tjHyNf6KNFzcASE4f6zhW",
  "key31": "2H3GtWNHxXx3CovVk9AF77GuX39JR1yiMR2ub5YG2VMv67RMMqkcaAhRaD7DVLiW7KwkAsHKzseZQbWQRHGFCnYK",
  "key32": "4cKHkyTgh2uS99gAP132V8ARprsyPWT1AfUPi3tMdwZR292eZAukYfBzgSahNvNwTcjzs9xeRRfaC5ARM96oP1tS",
  "key33": "57SvK4cUfgbRkenRoa9c3e6CGc6sC4eLzi4tGaCtuTvb4jWyquhuHYz1MRtokTvbVqPtRHft8mJ2sdp3xa52ArAn",
  "key34": "38oVUBUA9RtCsJmAbEPSgPDKb2pikBbkA3bwJ7yKab89uMEf9AtXy3AvCEqauTBqdHasxqZHr2pqCG3U8jaibqut",
  "key35": "2TLvffCdFX4U6nhuJF3svgGszx1tfazYfkvHpMzMMxjUfGz4fduwoYifU1Dxg17BBXAzf7bFQhv9CQxP6yxh27bC",
  "key36": "5TdVKMVo1aKjgpAo5E6EwtBAZ8g8e6XvXzpDmWLXbFLnLph8Ju5MjLhEnEoUHwsjYyyYyDV2Y4Jc39shr1zubH8Q",
  "key37": "41i7FNAjNGcGSM4tMqikWLi8B3bcbwewKh7gWwgGEJBb3JZyBLn8xVoMD4PaQabg39KhGxzj97tLVYLpSrrwjNzo",
  "key38": "4WqJHrFkGdbVv6gh1S7v9tAwzqpjkWvev2t99HBCff1bv8tTTyTWfzvf3vD3jApjpCs9uMyU7Um385YiuyrmVgeK",
  "key39": "4TrJv4pdD7zFWbSvJCqz1d3MwsuyidTCzqir9eM2VttUrDaYaighjnkofuC7sGKumDoauXZeLbP4WiZije1wWCEh",
  "key40": "4vKxWD3dmfCFcW8VsuUHtqZ1XFH1EEgKxPGc4XgyJpwgPENSWTiZRUhnQMtk8aukbcGSHaFNAmxk98DzbsZShsr4",
  "key41": "4viVM84sujD9RBK4ux9TqwX1WkoxtPZPzdzxNaLs4n8qoK2yooBLjQzbYWfEAfuMsYxFTbF7kxHYhj3WBgNf2Gy4",
  "key42": "3azAtbLjTEp7GK6Y3Sm9vnbXKGTBn6jBxKbANmCNMcbgd2ZYLaeQzTigZfWFNT4oFTr7GcvDFch9qiNYoWhNAoo6",
  "key43": "W3vqCCTQsMAFEXkhFYYDafabX6kdBcHiRZFN1N21vmkQaTLmZ64245f8XqhEumRAa3kNa2Hd6taDcc3M1uc94Ss",
  "key44": "2cnskvd1gAkUqhJ1fSUfAVnk3tz6nA8vqVfN5ivxkpeC2q2WusWs826JxHyHvVeJ9QyujuxwLW8aqJPxC7jWuzNm",
  "key45": "4tybt77uqHQDSmtEHeUqNNCAqysRxqEAa4GFM8URs4wDn9BswE84JNt3a9Nqqr2Ye2gKrkX71PwFEzzXEWruasX2"
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
