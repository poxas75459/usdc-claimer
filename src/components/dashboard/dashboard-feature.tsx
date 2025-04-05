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
    "3Cru9d647W8Tv8dSwotzjgAmvSfHTTfGy1DP84j9tsRxqp7oj7pLK2hA2sck9PZtUy1qVTmUhyj9u9Anpeppx91R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EMLYrjcXLBvdFSRvPpjJjHye2KUG7QQkBw9pv64Wx1DsQQ1zoc1qK9H8jdmM5QTDzh9cN8dCgiVAFSgfGK9GmbU",
  "key1": "2m3dNhepRGFzGUhvfK9K1wD2w4MY6YJUCh1rXssZwPKhuPZT3tcsLTnbWCxecvX5aNPcGQyuYMteuT9hUQmdymBF",
  "key2": "cMf1Yo9uvsP7RyXMBSkxQKgR1VCuYwtxPguNfmobXHtWBEL78GJBVvhL585ohzsqDR5d1irnmRMggzr5zM7mpXV",
  "key3": "2c7Mijz6qavNURXVzf1FRUd8uv7aB1GAiACoth6To8QDoDQUPoEi21SQSsp8o8oRVpgJA9LiZt5Rn9GCML18q84q",
  "key4": "zMwK4jGdF8boxod1xbJ4f6oEGa4G5JH3dJ9MawpF7nAfCRobjSXgbYGZ9pxz8n8sceYRwfjNUpgzVxQzsU9JSt5",
  "key5": "2VU9fczvfzsyiEpbYbcuwgiaTD8EzcGrNB6CDVSucSmTLUwfDLy4N6DZyqGExzEeXochSAXVPC6MxqTDKkDdijze",
  "key6": "4pXYk6p2JvorBHBs5sAjXLdjynyhTKBVD9yTAVew7gHfswD6uHBSUMtTLrTTrTD8CHbUzWVKgyjok3nm32qg16wU",
  "key7": "5VzxYrHbEjycBYQ3o9BEzbcrWTPwrpxdA8GXhZEiYJmMnXUVfx8waWnDPw3EtxerJuL1PVNKyzCNrH2VBooJPSKi",
  "key8": "3aT9bVjmv9Em2Sb8MNaUxgdiQeZ4tsSQsG9Aj5VEFQLZfAx7bJWfnzppa3skmsifi4eiBKQEsB4qNeLnKSfEUTR1",
  "key9": "2dmSw9stibfDop4CxZX4ZYK65UScEvKJ33oYbqQhmYCzSpRYq5PsxSiK4UCsGdDcsmR7MLpqLWpLYP62P1k8K7n4",
  "key10": "2fKTX8HDA4nc3kmPduPaF38Xetde8TYytVNK4JKTbL42xsSuc4u3UqFsA5jMFGRJ6mpetC8rMLiS2H9fDLinHRYg",
  "key11": "2YkW9yXrZXRun8bT7esKJTQp1rGRbyJUvLb4hKvhhYP5PVEx1BU8PXcM6WQqdpktNKJpGdF5svPZKerbdtSkdvbj",
  "key12": "4Km2R8xgMMfbzLjXnVCRvnFxVsTBEWVhHTd52diwHgg4RHVUe5Aq8SvryV8qBm8GMFiBDcfKMz9Rcrw4VduMVjfZ",
  "key13": "4BE2K6vgGmBPtGAxz269BkiguF4BkqhYuzHNorb575opzkab9yEvG3W3WAo4sFBeTdqchdihF47xUhYePGLjCPuz",
  "key14": "3214N8VdB4zrFFmDniJQp4M4f4g7ei578U7zqS3n39G1PJctKKLUGgjEWi8MKzK3TwFMCoodFYJUP2oEeSHgp8LR",
  "key15": "3zmwNaALWY5BpaBCf4svzFnoELTPVKeDHA5v4XSM1yAcBVwLNGuLqQdZ7vr19rDkBG3ujzKQVKSuToiZzKvpuorx",
  "key16": "3X9K6N8e1o2JLd6zVnPSncKNZUro6LhvffAAYhYEVqYXv9nYT9a9E3qv75ULecxdsc6EkXPDq2nMGZ7ReCZAWavy",
  "key17": "2MfRREX6fv8SDgw4esTLoi7vbVTp9gXTw6JrXpCYHtophUvdMaQ1D5eXQzbMp3BCW7FQYYqE4xktNo8R7LarRBAc",
  "key18": "ibxKyGYjNkYwboGNYz9vYppnHU7Ax5QibUnhaZdPBUzvViPfFF7JRsvDZxusW8kiF3aPDbohzjoCRmxjFeymXqA",
  "key19": "3BZ3M235DkW1pHG8QGVWXXRoV6KNJPo6PFbNWMgzPD2XkzmiUv3HpjxTvpLLNa6zERWrtVWQR1nigptZp32zFkF9",
  "key20": "4RWWC8k3DtZ3Bibq6EhkAJbyqJGcWvthcAPPG7ZE8KNRkHJJWJRcvMuLyDfyGudVDyMjaW66PWF9PezBdE49iFa8",
  "key21": "3ZkdJKE7iZhBg188TxnLZVchkbGuRJkfFhAi11DYsx81y5Vim4JHSt7xwcCPMBBhFojw7m886fwFuYEzBJsWqXKe",
  "key22": "2cikG7YrVkGA7mqeW4WBbuD756qyxy9yztwDAdvE4uDUNvG85eCMbFLxGabQt5wwP6gAJGH5BBdaa35QV5L6be8Q",
  "key23": "3K6CH8ehaQfAZgDR8JfSQSxQfMKcK8uYRY5beWgd3u5RJYkQfmrHBf4veykXfKxr8jfPiuy5JhqDXNBWz4LBXtgK",
  "key24": "3u28GryUsjkgmQj8BzFYDkNax64HUU1jxkubFTWdnuYjMvYhikR87KNBi6VRbqKogb71dU3rR3HBW469ua3aeYoE",
  "key25": "3cSuFcWksvJiqgMUtsCDsMTtjnwMvnRDd7kV3iVEvHAN26HpTLTMMjKABr932Cysq2B7FHuXsfcyjyXupE2wNxsY",
  "key26": "qzd6warTj9Vv3hPjS2sum97Ne2FvTHCvZwZPejgV6JPA98RxbogYqPLfJJDbeJf6SPJnw2mgBFYJZYLhmTKnzhh",
  "key27": "5nAGZCn1yVkn9BZB3oFMsG2ts4HMK3CzJ2pHudpKmdngP1zreqBSvhxpDnhPBtkkWfdv9rzxJW53MdvxdsRef867",
  "key28": "392fSDHjtuDQz43QyFEd7m54tZvrv2R2MsbWU1vXcrQzYP7tNq2iw9KZr8JRVpS1Dho3DfXHdHoE8Gy96RwisUDr",
  "key29": "3tErcmDnobTpYmm95iUcF48YA9pKGDX9AsuaKpZ1s1iwxmUEAHdUfW7gxhoUcqopi5EEBRRbfFWVEjqMVqat6xut",
  "key30": "57SNfciDDw9eJ4y8QD3UQ5QAFFNK4yUQRNcZjK8fjQadivWhQbKchs3g2yUUrJ8uBCUxPj5hvZbpPJkoTApdr4is",
  "key31": "5GZAXtViLC5tgo4u8ETXQNEhpz9woAG93UHNy9PSCkfsdDQqzdzceTUEykkfbWsLTzq6sfHEqkXB4NzmENcUNHPf",
  "key32": "QdfrYqhB8Wd9b4eTpsw7TuMC9kmbzKS9kKrAqdyUAjaSbQoxrtQy2pDYDmVHpFp6KmtmXwPyi1h7WxFbLVdTguA",
  "key33": "3yVbVcm9woxYBNG1YMnK3odXZxxbqhbUo2V6Jhno1NCQQGhLovBLYueuTwQVDsUDco8v14AZG9E7f8dXFyWd4ttm",
  "key34": "4UNhTF7RaTwo5wYiWtnk3hHk4eSLuYUPBz8FUSwc6KzsqEVLV1vsr67iP42U31fwypydMgRupAoyGm35y7YLg85z",
  "key35": "61yCWYcQVB6R4b7EL3ZcsxzPsRVhX8vwo6MMMGeNWCFkMEreF2o34sNJzuGNN3RQ655wZwranTm2v3mRwvoqSqtE",
  "key36": "48TSo9XqPbtQi9ZGs4aZkNbvtQrYyLcEjFJcwMCS5oGDFPJmpMhWWhpvrWGRedTsVyw952wARCSvwsANPaBFsCrS",
  "key37": "2wfJfZRiUhhhMtCRUyR6CL5h5QY4k1n4vzZZ49V2eJm61cKSsn2P7sNqkcfXV9eaEXaSvpZkZJnmGbeu1WsjK7bf",
  "key38": "5oT83WixzQUywEYZKkwSdgHUdr6VcFXzDyqYFpCpNS7N5YseFaWs5uNN5NSfQJXKCXiKseLoEMxbE9P3ijHASj4u",
  "key39": "3uGLXmyLkRDhGhKqdMmotUGowCTjBbBfeAgsZ78cA8HCUFYkCSKsCmWqFfWT6ocf9U4aJZfQfS5PeTdaRchTetSK",
  "key40": "4FT266Fz542kL9LQhf1aP7TiyMQxaigmEdGVrph7mdTZGie3xvjcwa4qLwtTgGD4k6U9dSwm2CLRTBbzq7MWxrcF",
  "key41": "61DGAJMh9YX7BowMUhP2wcAAHxoDUjpLfYnspyeDxphwQD5ByesyQQtMdUtwPhLJnyXsHFBxYkpZiw3FEWADZKyg"
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
