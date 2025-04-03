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
    "UuSBzmJYSFhPX3iNd8yynnPSz81Cq7twoSsCu5bo9J5GkqfnMDvn7DqnzZLyc79zueBZSrovxJ3Uj9ufAiXv96u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K1WM63WZpbFTGn7QW6QCL259AaGtCpYdeNMcRDYcF9vbhsT2FAF2P3fjTEQc9L7nTG7g8QR3NX7eLr7qPCszoCZ",
  "key1": "3kwyafFpXEWCsRbatNQ1DgQ46dwoERhW2YyAbZfpqd4mdm3ufiSMzc9WQE7d3rnorfCS8u9HirjdoFx8v4S4Cc2B",
  "key2": "ddytUHX2MbXg7kxgn2pFnDkEHo2ooVpX5UtPoWqwUWC8c5VvDXkidjnf4ntxKYt2fRrXTD9TVADVRZxwMmqktZh",
  "key3": "3v44JBAz9EqseTYJVNBiiC5G5eeKNE3cPmcXbGmKztwuAw1bVdroGxMLA6J6GFvwL9g9q45FnjCxgK5L3EDx2r2z",
  "key4": "4dBGcKewGnCEgWuanXFbN3qBvW95if4Wk5wQSpEREVQ3gXYAHxTJkgDE4caELc4eq7fygN3kfpkv1wrxT78zML7u",
  "key5": "YNMPLpLfivBq3jr4SgowhtvN8Xog3owrZXevd7bBmE63WVH2bddZmHq52AAS2zrnBXS6Fg2C3wKzjHAhVaPSHrh",
  "key6": "QcDnydkVfNW4d7RGZw7qeR8jkxxcspK5Ct8NFH4G6EBpsaNbuGGvoCS9UUARw2R8u9RGLwMSmKKg4pCCgF74J6j",
  "key7": "4TcQw4w9oEtYdyv7zcmSbCKAsp3vcsG5BggeiFJUwdEnRPs2NDrqUD7a2BhyeTrfqotKs1eoyhBcBY9nNH13RFXG",
  "key8": "3THnz2sJ4BbfwsgTFepjLbV6KSx6TCqK8ddMbuezSuSSepP9V9rDgL66fYXqB5qnPpgX6cYnF4G3SFWBF7wryYkU",
  "key9": "2DHVZJMa1Kf8kwtTCceBqRegAjJmNGG6GGm9rUw9suHbobNWX89po3pxRScrXCe2TwmnPzixUwj2ZGuhdVSKHNfj",
  "key10": "2pCGUrwJDqgDsveNMstdfE6HV1zrRMZvFChtkxscCs97RCBJkh3zLQduxKTAeBfetzY5StPkXQWUYJoAwCVFo6JF",
  "key11": "2bH2QbW56s9Motgr3iLjShjP6L7XEfzXDkh2ajEer4nHoamYyosupktGpMpu9mXQqeEpGp3w8L5QiDA2SbxT7stc",
  "key12": "2gUmMHff7wQhsmRCT5iGNRTS4DwhKFJMkEvQHyxG4haN3qcnxxSW5pevymdXsh6DnZpB2i5Rit9qCsn3XAHTgtqe",
  "key13": "omKaMCp9Bh7k7kUFftoB722GEBcvHFwL67GNC5Z4qZ2sR4BQSdx8CEH9BC8LK3bXYFwazthHA6p23FdHP7hkf1F",
  "key14": "pNYNTxQ7tbbX9xjm65txYZjf7HyX8wEfbEVSSvwaUK9oYkuJCqzhpZb5WbjaSi8c9SkJtsJ9NuqQ6DcVoZ3wRY2",
  "key15": "2toRJBoEY2XC4GRjhmbeHhY5qRXS35LWJv26484F862AVn3ikneXY4HSa7gGtYKRM6mrrGNndwSRSEkuvsPwCAvm",
  "key16": "k6xGk4PmGWVEcttfNPsPoE43ygEzFgt7ifnMs5hyhiN9KWernTd9V16NWVNoUTtUDxWvDR882fSMNZMbtqZRvgs",
  "key17": "4aGANCQXTn3CRLnhcy1X5jZZqohskoP5YDw1Ro6osvutsh8TS1sRg6qyX5e9yePLcjZ8jiSrJyhotEACMvzYknoj",
  "key18": "3hHxk4GaSe6XStH9mWgXSMWgqcxa59MCF2ibpzBVC5qnHMhkHRp6T72NP5kSwF47Dnn9P2XkYmvFgN7fdRwjywo8",
  "key19": "2uZcv5Pjn9p75JArJ4KcDeJf5SukNRKZBCF2gqNh8qMF9co3vxZDucvnPozJbup6MxdsCnDEhRH4au8Xhw2nrrdi",
  "key20": "224CFuz4GYVLEu8vmXcunjLfzgPATyynADAjDHvNRBEkivrzw6a3qCXaoMAxsJJQkxM1aotzxKBXMAYisfpQLPDi",
  "key21": "2q7WNKrVuAjbuHahiQwUh6mmQsrYJFtPua8jdPqShsEc4bXHTmZ2i1P7dA8QTxvqDGDhghJWM5VLZBXQec6LK2LW",
  "key22": "hwee2rEXTMGwBaDkauF6u2p9znKG9QSYNkNRGu6VNWG2cqYTjQw9Rc1mqNMQoyvFRaBhzZYzH7YME3ghTFJh2GT",
  "key23": "HmnFMYxHVEKvFwzowk7g4tC1FaBaZjeTzo6Y8P8tK9SX41dXTistBdSUwBtQKbJ6yBhZsbyhodD2qtS2zqyLAB7",
  "key24": "k3Gc733mY5TSXEY4GruyYeNXaTkTpBMzPddoeaBH3s7ixXDaxbTVypNMF6np7KS3gTcz1zu6aPWxYmBuTeKSS9W",
  "key25": "5ChtGrvCpE9HRASso1BtaySzrN4xR6SH4ahbJJMZk6b2X1gQLra5cwEPYLZYjrL1iPjPzK2jbTnDc3odk47QvmEt",
  "key26": "2MxBoEVqxzqoiMuVCkSXMjkmKoUCKoqg3q8dTgWK8oQ8etv1QkQ3vD28xuc3gevmqsE3TfbguJXdaPZZ81iHiRC8",
  "key27": "3T5CP1HnhGSgUo9AJ6dC8LsH9i1rg7cG7jXHmH1YYcDJh35BKBhu5pFYjWXz96mgNHbfD69uc5oQR4mUSdC5NBbQ"
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
