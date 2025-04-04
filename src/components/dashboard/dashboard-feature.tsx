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
    "XAeqN87d8FbgtFPzAaY2V3evJPfWdzUErGg96pAvqV4t2v8WSDkLKVpFCT9RGaMvHNRbYzKgwWdjHE7gzj8Fyed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tpDH3KYGLGCFZfEv5usmJ55zxArThAcybaBfHFs4JVgeXqg4gWxQCjvjce16vk1Sqi5YJUUYD4BxztdhP4EJ7yv",
  "key1": "4cABga1XWMhtjFMZrY8GV4p1nm8stFtUffGS4Q167jp6Ta42SegRTCZLqbJq6vo67J7w1JvbzUXFcs9hq2uegcsg",
  "key2": "f1kvSMtBMrd6qA2vXYVhy4SxbAvaP6Z3pSpEwHc9y3ntLcMdtJid8UZMijA1Bo46msFGx2ngZqQGfid7KK4NxFV",
  "key3": "3rMGw4FLsY4JfaqMhjwgb2gw5qgqjucxKdprjwHbQP9rvqXwCtJMFj9psB3sKMKvDtQejd9zz6KM5RdjoUPacyZY",
  "key4": "pkX4jBwr6vUtDLtALUNuHuiAMNrFHaYzHhiAf29WofvaaFCrhjyLS4rTR5PbKMJrMePU7FrcgrgyEymFBNM6H7z",
  "key5": "RMzQiND4PTLYnLyBkso2XuYnWybVh3MAe4qseuvN31vgk6ju1M1L3vmwjFE6VQcvr3qiVJzUzZ2chyjzqWKLy1b",
  "key6": "bcFQofRgu7syZ22eXEQKLk9zogzrRGWJQSUEMXF4yx2D8BTBHAUfW5Qyd5vUk6kuyJhef3piVXY5ezva6LuZLsa",
  "key7": "36g42CQBjVkyEAWipunchJ2drddJz3Fi4UijFaD4QzGwsesesgs1pFhXWG5QZGAvcTpKz9jahaX6kL6uVZPbuBBk",
  "key8": "3aXRUauMtGVsqprNvixSFs8XnhAkSHVVTJGNqeNVinUbX95r6CzjRtReUdZpvK3Ty5jrri9RzNpwivpWMWXLCqRZ",
  "key9": "R4FinajF9riT4hthARcvhWmrAEEuW1FHYsH4idDtgxVamhs3eKcgtBg1uM1deJk3wHdTJQJQGGTkJvwu4jeEQrV",
  "key10": "4qdkwNCWqin6PnGvcAmsNLvZQLgRqGVYZTcFt9izAhbPKko4iTsoiFYxH5dNRhH4xNM16RxoUe9r1nsPwH92J98W",
  "key11": "5rLsiZJpXR9TKNB4ZR5tYdWvohBFdui3ANPpF3Y6ifAd8hz2bxi8pm8vHU3w5RxUtQb9DnU5iLJoEqwKQUuCXK2u",
  "key12": "3vACZB6GywttA4bPVq8kqMYSi6fhbyyrtzKjk91jDdFMjUy5o4nj9LgoDa69RsxCTZDdTN5EoUFAajca51qo6TSx",
  "key13": "5KtxrhX5nMqoA3bC4eUR2x2NLJ1aLjLZdAZTgzmYVSBmCTvVSHdb6Lr3cDwcRCrfvy1C9SYoMiyT2pSCnouynnCv",
  "key14": "4ehRQKqsGvQ6uAsFQQR3Zdw1T66kRg5Y7S9LXUKF4BFLfXuW8bcGujBtCf7uKiWHJS7CaXMmRkkvx4R6WkKDtxtd",
  "key15": "3GQ9emKLwRwXaGYDzTh2JA6ey6ZLRzAvAxxURCBfLE4DumM1xZwG1DWSGXUB39oRCKAvrx4Ei2r3zBDNGBWECBvX",
  "key16": "3a96iSzUySqh9hbuB8Qj7zRB64PDxvMLvv8hZBDdPrVMFz1NQeoNDbjRvqkLLaUASnmrHh2STNELMwLgCeXgBLUf",
  "key17": "2psyVM5UevGZRktjLt6BdvZHXKUrVwSxEhyUVBmVGCdxfq5BpyhosRLDpCTs6YmUjzcMPPZ7q99XMddzKrcQLZWJ",
  "key18": "o3GroMsxkvqJ3CQvttsnaRysu2inSjzVPL9FKSaX7ZdCYZn8fjv7Z9FefNpN5T9BiH3HLDiyMDW3h5n35DL9K3Z",
  "key19": "29HJ3DadbTJafyr7sM1fYLXHdRHv1UGdNcKTjRtWSG3KPK1GMvyat1PELSVqSWQsMCMWvnmv2P9tYyv51oTRSLFF",
  "key20": "4ckJF563UeoxhbNz5TYzars9Qkgji8WbJ4JzCiV4NBRgsYM2wdPXwSiyrM2SjaiTUrZozAjhkL7KPphFdyYsnE2K",
  "key21": "2sVi6PdzwZ2MYcJwfS8P8pCdFiM5oRGLKwXNmEYiFs3KSyhhrwKvbjdP6WZjmbDrAcRqY1CzPkW7G7xD74fyotee",
  "key22": "4zpvWCZ5iDzamNPxTtnBHFNRHHYNR52BC5JEpTBMFgHp9GULhkSCVdnMuGhBaZFpVwCyKown6aLtL7zrZXZba7mz",
  "key23": "2BbZGRZLKsqUMoFEahiexsvXdbNNt2kQDLJdDpCum9Aa656uAZKs3BMQrCvBeE5KExUPvJhgi4Lu2EPaqQ2TASGE",
  "key24": "4AUXhBYM1tMpq2DB8Mp7JBmeevBb6Jy4EmTq9g8vp3qEbu6ppAPw8PtzYpXH1yzeX2xQnsb6kDTsCUYKqT8jU3Jz",
  "key25": "2s7cp1PakcnEH5Tn5FEHmxReJ5ezi7KhagPExX3aMXJSPreATSGsMRPr1mGPoc9Zg7AQAVhRbuXdH7PBwbnbYhn6",
  "key26": "SXiRjJKKv2tpWH8Ujj517gWDmqVGCkYyoH3sj4gFVgUWbraLGAwj3f2Unv215vz9sbyN15Wx8sSLBruKJ1NT6HB",
  "key27": "2rM39xuAgfNszaaUr3QHUPShWFazSaK1ExJGYtGAMycyd8afGTjAERoQTYqaRWJme4Ev1wrzUQeohKcz2S8WotM5",
  "key28": "4PmvnrZX24Rmx2ZFeELmDeMeXZ3vnX8KAT2PjM8Yzdke2DPXavScNvGD3cJg8GnCGgxWywQiKwUwtnF4dzuZLLJJ",
  "key29": "EKtWzcq8aEaSXwDWFTGdBSA78yqpuHQyq6wL2tSsuQe4582yVsybaW4yT1XCTy3YeeDKdtmd1k4Ktr4yMDGHDDu",
  "key30": "2esrYvxTcDpiXGNpdnb4pozDkwSgByCWZg51jUYxUk4DLE6oKpTJ8Mc6QZ7MF8c1i6Ynpt2tgGdSjuALLpwZbSx4",
  "key31": "2t61mNQqYdXitAEerYrGEkzLjoMiiZzkRU6HAeqTa8YJia7H1gB84Px4sE4tQZJ9xiiR3jkvWejCYPzJJ7HJAYgx",
  "key32": "4N7KyC4tPhkL1876hoCGhHH36tETjJ1A7KYBj43EQ7PSqqwcju4GaXGLRTKrPuWJPdooShbkP3mwaMkTCrRfybS5",
  "key33": "2TSF2QidZUp9csbncCXAE8pfBbVedgS9RnCDTLnLo4wBLeKogeEwnZ1MYGJRpgm5f1bLsj34mEiucSfnCti2gDmH",
  "key34": "4RpUM4Vzmmvtw2tHxbgxwbH3TzXi9DVidXa9WyRwkimnQbF9CZ2He9iqGRjn63wyStKspZhVUqAdNoDMmHs53Nwn"
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
