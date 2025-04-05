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
    "5rQEx3rAateTB6V7FRukrR4qCh1VTufK3mZfb8py7tnwC4iVNh5kjRcxQUnVo6ENcMXF3ihao4QTWGj9D8FhhJiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wJbXfkdX23e1v5cWQ5ufnoCuyy8ocbvMbn6Bv1SyYrFG6sGCNiYoGiyCTomVuiXTouTkGAe6vxsXcnXVaV5rgVW",
  "key1": "2xJvw9eyKuSHDn8wtxSFTB9QstTWEk4qxyDM38zWSchLutiBQv6LvZ1wPWnhYY7LuYhCmycdN2DXZqLTjpoKqe9A",
  "key2": "3USvMkaGps2XffE6zLWoCezC51LxS59eqb6ANsexXwRU5fUhrFaPZhWUyPiRudwncPwxNk4NyKt4URDiqPQj8Lh9",
  "key3": "5hZDjcEFNHvycHjEs2GbWTZ5HD9scVt9WzXwBMdBhAcaBrTos6YpDxYhQhEp2spWb1HAgXLAPtYPeCovrp8ejWvQ",
  "key4": "4EsE66qZChfrfXmfccq2c3SLCfKkZ7nPLufim4d2KT1CNA9PewVGaWrYbcVv2dKs8wP675GvNJa4ZbbA3WJxjJ39",
  "key5": "2s6BTkNrbUBCtEdr9eYjpaUdJRX91cWtgwVfBiUU3wSHU92ZQAU2hxXGijduPYUHj4xiLqgQFjc51nc4kS3KN4Fs",
  "key6": "wGMsbvqedWHcHGErtZMzMUwA3HAydvsxv6McYPFeaGroeMTEE42h67BVvLVqaZhMeowCSGgcLMhbRheC26guh1J",
  "key7": "2qsms6VN92YY8hPyEyMcefs9v9CxJxtYMLYKxWKY1cWDTaaMESCi3zLKgJPNE5dkh3rPMm9qNaz87qyiCfhubxqn",
  "key8": "4K59ndfBe51FWPmcwy2kJNxEkhLbDfB6YYsEE7uvJV76R8WqdW6bXzfwEXrByr1Y7Q3ihFExaosCnnj7Ua1HgMTH",
  "key9": "3MwBFW5QtvBy6SEb53Q1A8zNyTmLr24Chn7ADNehkaTaQwKsX2idfBoMGX8Bd4nwbmmBG24EVHDpZDmKvsnMPjpo",
  "key10": "Ry2DNQMxaKuQ1qM4S4Gh9AcGiCH7tm769vK5gmU5oJYYJei84febdKJfhDTQYHsaxjSEdmeNjLpswSHNddRPS3o",
  "key11": "5b179eYbDwif1xJdEMZcT15vKVxHk8gXLdEvpgeKK2JxqcKYyrtf8okUGpQi2WXZEUrTpdyKydCarqPPR42bLQyc",
  "key12": "2GDd7XCnTP3B6u2D9ZUdc9UjUwhayZa3Ct7adPWAMR77yqJYREGGnemrk6jE6zh4gdbNBdtbzCwtdS7ioaBXd4mc",
  "key13": "5TcMWz1PqWfA5g1SqEYYe7TwxiX1dFfCd9REbmjtdAmMGViBqGrgs9QNrDEngnMiqztJLoEh7RHJJDhanu1jCAYv",
  "key14": "37bg73dKEjCS9crVfPqAvwWLxe1KfMVftZJpEZu83BWY8wNYzNVL7H3wqZcQHNJtqfwhzdQCyQ4cQYyyZADVb33b",
  "key15": "34KBpfTQPf92wEoBP9WLWZs2VqhE5Tya182iTcUPSbTgW6rwgj4XtJMsDnzJbWjxGpko71E5MZnzJGqaeEgh7rm2",
  "key16": "65DVL4w8QHMUgXSj2Wj1j6LjR9UJcj2a2Q3ctS586u1odYday4GJaZsrz8vLvezHLZRmdJCdWeL2cjwJhb1224aG",
  "key17": "3TAENyMFEcmPghsfPA2F9rB2Y1oT6dj88iPRw27kQYMEhnbeHXSYuYVMG9suJw9tLXJVwAAA8VdFSRFh1hCaMkv1",
  "key18": "2QHCtDuMQCVCA8d2HGn2SWvcRnAMQurY3hquYawdA7X79ErVwfu18SoZ1vQmjjQ3GAnAVeCfE1FksQeJrjBhKdPo",
  "key19": "5KXdJWDkuWiZwFuCoSxE9LBd9gYHE4Zr2PSq2aXAcTzN7Lzxqx9jw9fV1SwTrXW7jLTaCLsrfzzJxrAuFUsoos9N",
  "key20": "4WkXp6kwUPcr3tmv9xXPk1PkAVD8z5zbnAV9omHw7FDaPpeFPkCzCQZg8c9LJ1wWKT6qBnB5ud7wwa64UAoGqSao",
  "key21": "5ouDpkz4X3SpGEdxp7b5pic87CkCV2SiXArWE9PpRYmwG4r68CYjcDuzpcqfDv2TspAB3RkksqBPBvMkUPmGrY4v",
  "key22": "3HHMv3AwurLbDuZhCsZuy3d24R9Af5WtLRmJfmfPfGKvXEEyWh34DD1YFnRRjpRQTfXPRz56tiGU87GHJfLMa3Qv",
  "key23": "5bnNaZFwsbE5buVxigz9G8tiwjvm76Pm6yUrgbrkzCXgCdc9Pe9W2WYTE1W9c6aYfLajbhuFzh4wXJhri7zUs2CM",
  "key24": "3jqs3k74FoDfwJMW5jXEJvGcaBNfKdgLvMZybFs1q7PbQyVYMRMGVTNs1n25WmVRgA3mNhZ4o6aDPGHJH9JaF8hh",
  "key25": "K7BbzPZYe6m17N32VRre1JkCAmLrke1hHQkuVr7nrsVHGcUkS2r6qEDqgNFx8xGUiE8niE9VqkEn8rY9tuYUP4k",
  "key26": "5BeN3aJCPtAU8C8SKSdar1i5JeGJFDr6VgyEiybaQFmk4hDiFy9x9M1y2kcBfuP8c69xFrbbbvPNAm4AEx8CMAb4",
  "key27": "2jUHgJyo7GsQX1nHhZ6oj2SwZ9zp2of4AVcLsrLVRh3KxB9RC2D13oiCsBfjf2Y9qWHFPYudt7XyTuHjKy3WXKKm",
  "key28": "2B1S5oMwpAVrQbhgP2B5JPLtVdBZzBTjbxXhiHo4NYst9nseE1XCFub6eYkVJyhc8cg2Zg5GhzhXsLjJQG3UEKme"
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
