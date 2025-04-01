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
    "2LqzMgZKZmkhXDTuY3BppCfxv2eYGrrQY4UmhreKBNAyQCMv1yAT9LJrmtvmvqq7trFAhKzr4hPQ8DA7rp65MHyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51J2iRiGNNhhnwNjSaGiM9PbqFP15o7CnarV5joSUWZ2XLeL1cgVpmkxyJHJr8eXWZmTzFpxLY29HWu1LiWeTjfL",
  "key1": "3CJx9hgCXhKK5XykcrKiqgTNr7H9b7yJ7LJXmLgWwpdWd1KnhP91kvKM8L419x6r1Hh3HnrUhhuzCYFB71hD6eE5",
  "key2": "2NpPuDfaXnEcBVNfGZVjKE1Vfpqx81bQijBWZcB4cF1PcCEKFafLhqSUiCSSCfo6CVsSCcKXtxq3mTda6KwKH2RF",
  "key3": "5gMc4dc2HZFqnT2BZQRXe9rD3SkNy83Xrz3jX1VKohZpdD84F7T5i1xZZRyiCzgcRro2bC4zks5VH4F586DFxVys",
  "key4": "2wcEvFchyA839Kpu2HVfPAX9KtUfgvSmcFHpyzsC9BTto13P4m1odSWAnrCiXCyFHNcrNCbqZZGGz2R1KZxAkxR4",
  "key5": "3tQRUeh39X6tBcYHSEvyYXspJdkd3jrXunz8c3WeRsXwVtnkmqFhyQT2nJYDTgtq3kzUevzxtWuh38qRTjJmQkP8",
  "key6": "5qvRqsKxQCnhXDMVzq5bhbiw4EwbwfbYyXjLF4mYJjRh69HNc9vpo97N1CbwA6e6pB3KJMPJDgyWjfxkGzQKUriE",
  "key7": "2Ps9Ubxwt4doiyT8DAoopZaowTmsdN6JurBTxUYqNXeos47uHYGypc87RNeRMziujMc2pvMBX2gqk7E8UQh13b88",
  "key8": "GNpjr4pPJmRN2H7smWNdJyqnHNmM8TnV4YQojMMqy4Kp5Fyh9zv9toDiPRGmMXJxS66RaGPM7ULaJ16rAFeFqCv",
  "key9": "41djTcik76G23UP9Ls8kVJ2hp8zSTtTWQqrina9ZejPpAcwWt7kvVbWL5mfF2uYHvBcYS9sM46bWiFc4J1syfRS7",
  "key10": "2DjVRG4mqCzuy45Qu9FtMbwMQ8grxqQoRgkCe5fd32yCGQ2F1PEbp4sP5oAfBg7nJwHZQsNVwYZhY9GzfHMhZ578",
  "key11": "4h5csCraqe72txqDSrBMkp5iEyZsk6MwyncUJ9bRkvV6dUCvYvrandLGbBDQ86qXocEHiMiMpCseUbCQFKCeTvQw",
  "key12": "2huqNTQcUuvt63KsFuNTp8jP5EgEbNkFQoBRX1tsycHfXJpKQi3VhMjngooEkWxKQG5da95iJKamkBCSfMjeaHDd",
  "key13": "2uqddJmGB5N1M1uZJMyicp7ziUnnhRTrgzwnhU7VVygKktM3RNLPL3nx2HKSfot5C1xaouwFznzRavfhpXsCoWWS",
  "key14": "pYGQ7jniZAcuUJeGo2FfnQaKRvAX6mLPqfCBXUxekN53Z33dimhDy9u9Cy4DSgzsrMw5rVrjRcPfprcF4gCXo7y",
  "key15": "52vMbCsE7mWyPMMCQtd4kUqzDHfFw7t1Lx9vJYwDDUg8ThyCDUcMGKc4YNDMzcf4NBspY6x2dkwQH9stouEFGcAd",
  "key16": "5p5Eoj8eGHS8Rrk9U3B1FfPaPbfjYY3jFhfivCdqqbdkbnLwpnwfaLpjjtfRFd97oKuhRc788AoTRHjApULvRwiH",
  "key17": "25e91WHUg9RywyHim7pb9rA2E7TBrjeuPs6msipSrQBmnhWzvNWjL9aB2zYEGLmJwdDiH18WuWiebDun8wasAbfz",
  "key18": "3ociLWiC7LjxUreska6saUzQkXBAvFyqjLriS3SncUWpJ5tTtxT7muGVEBGaryb6EcTVdMo4yA8n8Ut6gqAePkrE",
  "key19": "4ovse3drrGNy5VjMG52VWnKKxwEa698oDJPGviEJzafuKTC8Qo6FDeKmbPXqkY9aBFSWvSrG53ks8wZx7sn5yWmd",
  "key20": "2AiCMzhHbC4VdFHbDGRBceKZHo2aNCv6yjkyKdQbShnyqAH1jxJGgLs8ckLtgJ7jRbRcjeYNSkbhXLijbcEoWpJF",
  "key21": "2eDjRHjhGQ9RbUN92L7eyEQjW7sZEX56ZEaFv7xHC8AVqRMWuK9dyFPRBFQsenbXtrJqLxKpxB2uQ1sh2ZPVjELf",
  "key22": "eQHcmdLsU5TjNSrmGXh5TRJV2SZF5vhNQDsD7rF753GqrcGy4su2e4xPgi9ENxbnZm14P7YHWczhHzoQBBg8CFp",
  "key23": "2hezedUUMp36uzrivRzD8V482eELNX6eDt29bPGkPBjWa2kwAdmFgrqeBGm82nFxa2Trx8aad2CmoSERXc5c3Frv",
  "key24": "4XuXTxhcKN2VhVQdZVZPn25LQRRKCWC6fJJUE7KGpVzEhGvKUhjbWtKeaSbyM4johaGorvQ6QeCSbXmgGBimZ78"
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
