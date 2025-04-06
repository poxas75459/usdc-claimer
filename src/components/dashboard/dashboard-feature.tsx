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
    "5WLX82mdNKC1p5VfrVcEwJhYd6CtUdFNbteCs4QBfpVY8VVBBfbEfyPNrfG7DxPe1kstMaejGrkAYWiTCz2Ee97n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZaNPFtLRneaiSAK9vHm2qdE28etNt4TpJXLHVPtg4nsoNUSqm2oVA4GY8tRYeVP3zAHdv7wBt6yy1HtRutmt7uF",
  "key1": "4JVmQv2NioAHTjVPWQw3J44SJYqkvnXBcF6yFU9RvQWAVMu6fkbJPHZrDQFFuEA7gzeujwrvDFgDWXpdVusKATzy",
  "key2": "5P3eJ4wx5EQ3WQNVoiqemVs1ivqpzUCTATXupccDkV7PWo6qQjLQrQqej4p1tRp2pgFtx3U9gorDQGWwzRWLNrYW",
  "key3": "mZLGtYAPNNoMZKvxCi2nYdCqbqAokvAZ7f97dNswhy5qAwKAVhS7TfEwwFo7dxsQ3wGjLurg3hFAwMk2epPWy52",
  "key4": "2ityh3Ydqt5g5mejohSNZir2SvxzmYxEYk9m2E4XAewtvnPVLq75PtNs7DHCtf3YRXbwe7g9CL35cwzthb2hg1yr",
  "key5": "3MzWdRagbhCkL6xfHz1Wkaph76DRBQ4pA8oyj7m4j74ibvz6Re3taU6U5KxoHrfYnRhEvPqqFPSbeb1jpEh21Mip",
  "key6": "4HYwcYrS7X4mTGa3qB1Dh4bsBpRyVhKUuFnqCse7aLA8tqABLQUuA6LXKhLEeXfG1NAT2fP1ygeGjteZ7H6XCBUh",
  "key7": "2XxyGCHrgU9KxM9JqmRxmuuomnFvjAfXFWWDeqtaW71CMaCgXsXu8zdB6L7V9B7DAjowoxSLp3op3myw6k3ork1o",
  "key8": "PRnyqNN4v7Thi9AQYxF4Yx4dtxkJRd8EgwqNL2AdQ7fNQwyRi7v9xsXrQxK1GtRu8sXuQi4zirMwrM5AcViqb9D",
  "key9": "4CTFbNoX7sA6qox2croJyDLuyWLTcfVDcLDR15PLgamzdDxekB9YGsqJLtEuUCFqsfEnNfJmfkhWqCCHy4KvgK7r",
  "key10": "QWGp27ooHH7C6XknWMPigcgfveVtZ7hkVVptrT5yFRPdKB1353fhhpDjgtamPBzUwSzs4ndMVkfykWEk6qC7zRv",
  "key11": "2Gij7cYmxEUWdLvLr8rnjfmpxdjBwwJQztimJSUqkjhtCzDH18ezTpxXMwBoFfXwdSRUqWJgj7m2JLLYdZhRUFzp",
  "key12": "YHbYDWUMuPTfk8k98izj4pwRnoR4M9Mu67UFMXoyrXCifjw4PmYPw6vxvoF7yWewXNHdix5CuXsJNu8BW7batHZ",
  "key13": "3jum5tUQxM3HcNMrX9zWWVJKhRYWyUXU85jgcvEgiKizMXDZVBtVVMu8zMjYH8375fu6Fy1HDj6SgHVaPdEbS436",
  "key14": "WijZZmckn5CvjpnE1g9gLrA6gR1pt39BTRcz1WtBBShVnnbbPVe4BJ8CYQqA3cuCHzTtaRLUfq41qkpn2VXgJat",
  "key15": "UievbfkDSSRWg1EUH8pK7h7upSfDHiLxp9cfQ8KscBe5b6fdQnSSzmhpHsg5gpRmZsXASEHGBz3QUKk8h4CuNbe",
  "key16": "56thYVazJySxvSekJMreaarDWjeQLQARvxVLu29P3RoTLkSzpVpkVKcV1GL4bwAgewApVQztDsXJWMX9BSZEqNeK",
  "key17": "3NSufyavHhmbtMMZSqry31qWZFLM4SxDJQR8iQNd9ykPMvGfYHxwmfkZRMqjo8KgvBumyNCV6gqfDWFjVb5BjZ4r",
  "key18": "5QLg6EpeCosdWwjs18FrDkZRkux1Xb6McvaW2cjEhTsGZAXxbRxMa32XGGDsSxzu7i83Qh3kcJhLjU7ff9F9tiTG",
  "key19": "Wz7QdkNXbhHKrKgQV1ZBeRLMHsRY3HnBvV5SrrpRBDD1zah7nvYRRBZbsT71NGUMpUNAoArhoMbNytVk3jiKi2a",
  "key20": "2GG1rxu5Wuit29ba92jcYVQhTK8Efny9wQsSzn9X2pW2F2Y5Uzvvo99s53AhRDYwy3BD1hmUbjMvkCD7rtAkdgfz",
  "key21": "5d2pBL5uhMJxc47M8TPT53aWkGQWPXkbkvA3dL6iP2XiCvEv4cY7UichqaCm1WTCMQZWeCLyqQPL4C8RgnykRiso",
  "key22": "4LRehFkiVTANpxvy76NsQeufwmuAwwUcvEXTVSyXsxW1c8B8pekGwTkQbDtoZb1XmTTNfSVqWn1mmT2Z4CL9WQR8",
  "key23": "2b9TXQMi6H49ksLiHt6bs67VzzkNrd7BHxywrkgEMRFNoVfVU1oEMuoSXwbSbLkb9oXQULwXptG8qdLHYQiZGkoy",
  "key24": "tFf4CH59wDkgGpfZi7F4wEjuZHGU6ooKzLBbBEBkae9FFKaSejXCa24Xu9sha1YekHLjrv297MzrdGn5DRYMeGF",
  "key25": "4kzKkXp2sVDXpzdcM2jpxojXvtWXJ8XhD6ArqaVktcsoAh7gkZDApSw6r4mX8F9ZSu3iXT7S6QNefA3jdfbvdhEr",
  "key26": "2amKaHp7exzW4UYHvrhrASGkDu6vnc9V3EFqPJXUhtjfujoy6MPcdVV7mmjz6hTSouQ3G43UyLMHQzNyLvFhUFU9",
  "key27": "4xMLoqWuw1ztTQKVrnAbZtEsVyuH8UvyBerSaXdrySpLi3b5G1X4FoHqNMKhv5gCLQgh44v7e39qUnVjpKHQDHfj",
  "key28": "Ym7ihp3WwmHFezWiz6DCcjuhUaw2xWaTPQHpcyJPhDtjYDeQRKWWcizdjcRaPRFfC8Rq6agugTFhwUq7tfzExzv",
  "key29": "E8C9di4CJRUzunNjtxoMbbnkspDx5PSagekwyZhbnhxN9n5eAJdzDFEMQtf7rWWA5Bk7xpbMdvYqnsgT5CtxuQo",
  "key30": "2JJLivUZDxMfFQvd8YfxkANQYN31SDz9FLeofKF1igs3mefUaY1up26F4L9Rjr3eHa2suJ1YXrPiiWjvxmcSkpp7",
  "key31": "3zcMi7VkWgAAErxQTV9nFLCzHnf6GcrmPBbQmqWS2xnHcwBTMiQX5HvVTrqyMqb6CDKMvSPArg9FUabGf75xDUDZ",
  "key32": "5Li5yoQGCX6CDuRxbm21FSdUoueDWLYorC6Rb9bcYskPRs8DbzbsUmUcUUjFmd4NJ9EzKFwaTFwHqtaC1twH6tbJ",
  "key33": "5NQFxqPJ5KJLSWCnxc7f4oCrCeauGBTMaRUJ6DPAmKDbYQVeMrFPwKKLy4ebGjvNy8ueKKTe19snu14YDQMwfRET"
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
