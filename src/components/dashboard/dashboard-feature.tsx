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
    "HvnBdjBGzatSdnQGABYQVHg1HbY3qMu6nKTr8v6BwX7cAduok2ERa3zuF1RawUmjCPidRMsjKWcZVEsKgM6vfnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5myCMcnKxgkRAN8UkSzugk6S5tTrfmzzZeJ3qHBsosezCp7SyxSmAg8ZDif7SENtQjoJnpUsjDKiXwG6XLDYBNPB",
  "key1": "3XkBPWDQWoqyx45egVKPZ2o6ZZgAHRhQNBpbkj4X72Meec53SbzkmRm5po13BxaVaET9fkryucw282Xj332B61su",
  "key2": "LzsaCd7uCJJC66m38Jg6uoeE4E57yrwEWmni9w3isE2VpXa8GAXTyhsWJpUXzM3782cnDJ4xJYbdL38m5NQ2QtS",
  "key3": "2JbrL1A3EUey2T7Y2igop787UTzFSKKoZwdeUF5C7J6LQEaCDif5kpkPtxkTMCoSJPBryk2R7YSVo61yCdb519kQ",
  "key4": "fSpcPt3gxEzPQMhMH2XvmFsobCgzgThcRJJV5AWLhSMeL5hLpGAFgQiHxADdrHL2vcwU2DsisqvwcFYcA1pE35g",
  "key5": "54PSheLg3HjBiB2M8aujT6RFjco77RrqXRLV8tx9KqKuK4Kv6SFgmqsH4iGXcch1YZWmQ7T8NyomghWAToz89DuN",
  "key6": "3v9BRS1NCB5HQpbqZxSb3Pn2ZRBggQos6hwuSpK7zW2UDiP1GAiU7ZTSoH5X6emPoMpqfW8ECfGe4g45ZCt2AUH9",
  "key7": "5HYuWmUX1Xvj4vq1T9pyQLtTG4SHKDpoJw9tgtXM7WEGxKF6nPmFgW7bRY6Yq16vVrckPCiraDTXMK6xqBfvG3H",
  "key8": "24ULJiUd8nPtd9HFsjxLKaCRRSSttP2B6zfL73MCBgTydbnQfyikHdvLYCgpPvmi4P3er5xzeR2tBE5WFh4GAiHY",
  "key9": "Pad8Z2JjVN3yexQD6Z5rs4WKoxgieVjoDnxUbakxwUpTG4ACm72RikgdZ6PaQqZ3ghJZvfQenLT29jMELWnGgqU",
  "key10": "2Dfx8Xgfpo3EjDDdfFnsN4zHrUsZhZMh3BmDLXM8VTKbxBxN22UL9yKufQWR44zXyYXKi8BkjwzVkXi93YCJpu8a",
  "key11": "3dkpxFATHN3DUwyPWpDRJaCZ8p41E8yLTSg7TfCeVidEVyq2d8wa16DdHzhz6FYAmWKf99UBGoTN79c4edptmsEh",
  "key12": "yq7GYmvZzvptbxvT1jTF8V6GLCUA9tc2GyBgsFQAyCy36YMex1VKibwVSbpY86qaPLMMm7U4N9zJK1oBCGkUGfp",
  "key13": "33hRfoFhCznHWktyFn4kaLE7dmM4yxBZm9JisBFh78snk3AzXnLDZR7q7eeUzJX929mZEt6nawQRWk21k6ScyDv9",
  "key14": "5vtQKZ3APRvEGsbdADiWYa8uvVS45afD4rfpXf6xx61VvWuL1TyFj2CFGGSu6kg1FipeymkcjX3yGaMt9t9vm7DL",
  "key15": "5M9GWrcezMHgMWDfjnU2TARzUYqSHtwRyc19Vn4su9DB2TZR8CcPCVAgMFp4ZajNStWcQycsgjctZ2B9ZAHHAkMp",
  "key16": "29MN1RJtpKHa7njDEh1bucbf4nenG1RY3if67cfJU9tvBewEEbE89w9wQ3DbVnfvYJtbeorX93kNnZ3oogLeqkLg",
  "key17": "rKR3eh2Qw2MqZY4TAn6nBU8yYKVPX888V1hdiNMXGpissF8dfhTqjioVqYpDFDChsoH4id8o1LovsLAKhn3TMCH",
  "key18": "5gZge5ZbWNVfCY8e8U1guXwFRLpUjTshtYtsLbvpDLvE9UbbCgJVcvgY2TRqs8g7Fe3naUfvVVwFYNDMDfDNV2Mv",
  "key19": "seNxXjR3PnHrVfRHHoMJLtTVaGLMHxt11qvPevBBnXJXEasDh2mgmTnZgnU8CGJj9g9gxabZCzte2Lj9np4PDfH",
  "key20": "2DcWcyCUiGCF4LERLYVMjcAzEbNjbNup4WsqY2TCBva8zsSjPpCSPYQBhMo7DpVfNeKq6wHCAExNpF2U5Qni68P3",
  "key21": "4TEnf9Xx97Siv1RjrYFQqszAcfLt67jC53Nh9gp9KKDRBb36ttm9pCM4VLiB9DEqCA6t8ptiCQZW1wb76khUGDPx",
  "key22": "ueQmpSGWerpy1pfC2D5Ys8PbjbeuXgLk4wJorA81LqnrnuzTWctCUaZwHE9niY3G6p1qNcUYDLvCF4J6A59QRMa",
  "key23": "WVrdbzS1fMJxWDPtWBA7ejiFGbWa75185EKxJGoSeyHE34t3DxvwA8amtuGk7oJrBPZmpoECX3d9LFtVidFqaf1",
  "key24": "5j6yV3TUmz7sUVtx6q8oB3r6hZ29Ya2Abea5iCGSRJG3h4w2WHUL5ZX4wmCSBZjZ3zotF7ceCgJKeq2nu546vSd1",
  "key25": "9Wbkwf4HtWhsAw7PBqrN9Hzv4SJm1bv7cSH3rGNYPFWNE5NjEVy3kMd4FhU46sHaY6U6umksHPVbG9BEL9XXA6s",
  "key26": "4QjmKSrqZMKFd9TwN5tbW6AAoXAykr9hUBnGWqHdeueqwLUYszxFqKw8r7kmugrqxbQFnUJfQ4fJJXByPnnHp9EP",
  "key27": "5kqhGwkMpxtKu157hoSffQxoPMccuTrP35xERKNPUVb4sBNZhr3iYJhUdxnqBbzP7zHXsnPBu5dRLcW9yNyc7y4j",
  "key28": "2VzvVtDPg7vTHMZxtsdtVH6nwRGx2dHCEqKXQpeNK7AyjjPnczoHSqiR2YDt3eYnSuhwz6zmsvLkUo2N1MGNhK7a",
  "key29": "23qoKUVXjtP3d3pTupdPka627G4GE34ZHoX7xSnF2hq2WTVPbjDs8H75HkMwbQnabuQq1AypXj864dXz86reaKPh",
  "key30": "3xKMWD1F2VSnsHzTTAFKFhNffXEYz99e6pdCXCuSzbGCLNf1zv5wuQBHE3GKEznNqNK1XHJ5kfffJwoNAwnoZosA",
  "key31": "gdee2yFXqbQ47RfrkVPbFxG3mG55dQ5inHCUyvceddL7czCj3WYdKvpkA5P41ppxosH9nuiq6KmXZHQtJGk2Rsx"
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
