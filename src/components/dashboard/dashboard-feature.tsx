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
    "2hg5ULn6UMtjLDtjeEqURtYV1oJ41pZaGobWDWDW1HdihhcjsVhEAzc2hKuqKpAYGG1gjh4niyTw961ukwQwDBWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W1vcAedujDawrxS8iEHtLZboi14V2er3vELkJASch4RHDFSaoCXvCepsZhMWH89WUea38Y8LqVZjnFT1eau9h5Z",
  "key1": "2V6MNAVkcfj8TavZm1SUZBzDr2b7vZ89borEcX7UsCAoVAh4bLcgk3pFA22TtDuE5kjLsrUsBQudDAyENMD3LPi3",
  "key2": "yN5G1snoGb3cqFq34VxMUE3bVMr17RHG5csoTKKpadvjYjGVhw17n23hN1C9wotxAWoaz4LuLRHozYon27P5Swy",
  "key3": "5it49HHQbsZnKckppY1273YiBMu7aG748o5tspSRLebjQE613Yz9mRcUcYYG5rJUHKubeyCvA8KtpPaKoWWQf4VN",
  "key4": "21SNibGDvW7fJLx7qRWYHDMq9nmfLgDz4b9fvD18MgaUeH1eG7gmTgd2zivyZ3jJe76fnGAqBuxRzmJRDW2uiAEr",
  "key5": "5uU1nyraR5TD4rwPJBrFte61UgwZZuF6SCHSJjs5Kvfj9S3HvvGxeBwvAbSkuqAVe35XhQaUTE3pgFnWC5MdLTkY",
  "key6": "2QeeEzu2dYGmp3pDF89Ctsu9FeryevCSNTdHMQcxUp9vWkpuvGEwAE1rekqvdsq8cLAHL6ABfzunp5XHKDx6qJdn",
  "key7": "4ogiv21cCCSTwaznARYW2kGSbYSjgUqR89G8VaNN3CFNScu2QNvGbPQ6q78cMUPrrYdvhRx45FsGg9HoL1J6VuCF",
  "key8": "39kAj1ahHrurpS6Q5P7AQDVUsi383MQ2SQjHB1ZifM8GRC142dNUWLygrypdFuqHFWZZaMeVYFoFbv2hDgtgQZr3",
  "key9": "4J51os1Yho24joAzEnsHMMV7L3vGgWVBh7LTNRw4CXPmivxBDLNdzaEe2458jHt4UojyfSmXhVwYfCGhk9bmhPGv",
  "key10": "4BsWmvKgNrrCxgU17n3GrvqjsPjrbUqZugrAW2bcdebcc9CxDBSac9JhwQ5cFMKzKCnSpkKcx2RgiAPWHqKNrRTd",
  "key11": "517NfZabqXTPJwvAZtQgnRwhm5LqCu943a3VdWap6RyV3UnL225QpumNHvqdKMFfRgbmjrKdpJEazJCKV3GctUGH",
  "key12": "43rMhbwMRQfkeY76yLUqRGKdPw3MrESGaNJeHLo4iAocPrqtYfbL1KaA1hqoPxvN8ro2Ju5SGrxvVjBumQNFLPJn",
  "key13": "3HTMMGf9TGxHPzi6Fcm7TVMsmxQ3o13pvbUVbvBQoJmJgckQrppbrS9MmcQ34e9atYFVJz71Uxu68q5VqpU4vi8",
  "key14": "4RXkNab3WdYvqVWtDwmiEAu5GuSsv9C5PwmnqVgfP3TBj81vsBsZHFTdUMUdkRwKyN3ahSBt9ouTfKs5EPBVxbM6",
  "key15": "2ggomNx33gt9g9bH6o2hisFqybTq8zVgJAzz8nNk82aJJztkqYm5ZaeQsifsXHABGfVgD2ZHKATqTGUrm7wZzpWN",
  "key16": "2pTE3rV2pWRGwc4Xr2sGUabfWGnG91Lq6nS4DxCJayjvhahHZKzq2jKfdK6xLDLmqzPoUs5abzFHBKA86urR1Wm3",
  "key17": "5uuEmr9GuZiuogT5AryJMXsYWi6hCkWnwFAG1NHooi4qnd8KTKPGC1LEH4s4PLVHFbBovzUFbQm2oVx3pfMcLZd2",
  "key18": "4Vw1EjMVqS1YytGzrmP8oBiSZNEJ7xXe1N7nNQd6BPWvdR67Vo1DqEeuXqFoxEx1zjCqkjKbz1tLQvpFYNSBYFJU",
  "key19": "5NDUPhLJwu9wbb5B6NkLTCRnJV6hvsz4QQxWutQmVZ1rSKiPTM2bkkd5xGWLfQPE499JnJW1fKf9bN1WxEXkZ1CV",
  "key20": "m22JhEZ2YhU2DGoX5HdEMBMFrYTyxqA75Uwi6Yxhg8LSTkeV77XvdZLRzSUijDhYRDaaQJG3kHShohLbTQGR6jp",
  "key21": "3C25mBJpGSjeDbMwHLhpyiWnqhpfZpywTKN97iVcXEswaNJEXAvZDgM81LRm6wvQHf6yz57EeeYfXYRgrQDxAFHp",
  "key22": "41ZTZCG5RT3b2J9RwCw5mq5jbnvNScWAzYM18N4vy7oAX5xzGbAp69E1f7AMZfHsCP1swAnLMZCLykD4v3NpYoGp",
  "key23": "2sara1vQV7sEuM19QZfqMg6Bn1AfgLrrQy2L4sy2UPQ1yQRsHhE9Teu94GqWFy8UdNci8LgnX4h9txRhp6Q7qv9c",
  "key24": "4hX3QuJefYf5zMgw2geBxKESzVTTLZYLqbRUNGdD7c6Znd4CQuQFz6mWqv7kYgqbw1vamDhYHkGHhhArYwrc5Pi5",
  "key25": "5PNUFARvci6oqCbKncLF7HVfrq2diF5nNYSzbiy3hC9Cxn1WNUcLzmNPbntDuxvCDJ51YVqWnWWuV6BRadMoCYET",
  "key26": "5r1stJB2ocHXwqaVVtLSdj1CYKggnTJ4RdZGjCLLyuefryfwn6hWKPiYWoPCNc1bMvQZmKdfuekPtg9i7tJm2uDX",
  "key27": "ENbCRmsYtxUF6TEpXwxEfM8y5GDQCgvvMc5ei2DGYttcsaNkKFNU3faqchjDCjx11VUebmmtvyhKBPecNpbq6e3",
  "key28": "4HvUTLJUkNhGtB6RPRZakfnvWMGLdwssC4sERKBpT2Ner5mEb4CW53yVNmUyPqmEoGEpPr4jNue3XsHZSqdSPNE3",
  "key29": "5TQmdDAfpPbgF1G7jMq1FxS3NSyZWZgDbtsXLwsQyffgxuAWPYfei4qfrcobfgNUymDMKSse1VqpLr1NFepo1ADs",
  "key30": "2rfptG2N52bi3cB4YUADgAQHHyM5fShJXKuiiCWijVhbeNuvuvyWij3xNYGky5bpMTcobN5F6ydSjVP4NusRyKCs",
  "key31": "4b1D1EZFt4iR3dA834oMgQZJuy4KB2UjUfa9zg16im9mkoN38LZZVQuAso8ygBKtsAuNwy3CisYwRLEpiA4ecDVp",
  "key32": "4QdK4fbqLRhPvPNoeU9Jp9X6iYv6YKn7Th2oS85duB4pnDS9J66ofk9MGm9QqdCii3HuiyLAC1YCviogVk9v8hp1",
  "key33": "wrD3fJMF1d5SRfbAjvFujjvFgzJhG15xV5BaKGfrDLkauzB9XGJgsPBZc4n1KunTLSDaaEzpk3V7kkP8Mgdpv9r",
  "key34": "29FGkf8d1AZL3bbYG8c5dN4AtUgPY2yVgKNiTMLp4Ah2SNhQTtqDe9HPF99HFnoEKfdfQGKaHBr4zfAuUwpG8NzT"
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
