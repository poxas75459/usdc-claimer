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
    "37mqQsrmH9KHuEbBxu4bnUjsRpwhiC2DCWyUUVkekkT87ZFQ6jM7zqdVcYG4X5JokB3M1deaVuSbKcRVkKqbiMdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YkfEVPuNVzAqcnbQPirPngfC7EjUcsKq5Hj4gwXAADEyvstGTAdDDCw1z1hz8exiyRtGqv9vDj7FAX7AK4T2v7C",
  "key1": "3o7WYTrV7DytVFCXoCLzXoRHseRwtsc5cW6YQXsekttbUFHhXkdToi6MBcTNyQsdGL5zAjCwLLRFgARKT5gY8Yyp",
  "key2": "4WDFNWAjQNfCjBmodoQwBSXtfht5JP6GCRDS76LX4sYRch9zXc4zDDrBH9VE9VbiVEjYJobWfVrMZ2oEBNB6EGtR",
  "key3": "4ZbofUmracCwC7ctnZPdKQNQQ6SK1mszW4UcPtM3QYwfMGKjUMCpgVnDdhTfAr6N3AKN79J2XJy7cyY4aUfZYDQq",
  "key4": "599ZMuQQk9QbFoGcL4GksSf4CEBBUVvmiVpkXTCtiGJ4n37JoHdjU27te3NL3R4HhSTC3q2fCPwqZpL56S8fo5mb",
  "key5": "23inqRfLLrV2f4UbVeL4ntQyLehi1X2DKACLLtbVv9sA24nGRFmxKyCQEZksjaR4Lgrqww1xBEziPu3yyqbG98Rj",
  "key6": "289CADq4HNRtpySvS5cz6QoV1sELYqfGm7LMCPvhziBRiEeVJbEWSFtjVNVkqAPB7ui5vGthqWuGeKQ3ojZTgDw4",
  "key7": "3XNwhF49PhfQu3NqLJxC3vk4vohgX1CWCiJvDfod4pHgTqAeK6hCSJHdTVLdeKZQ4fpvznWTiVhrqAdzVd7PYezi",
  "key8": "3fhBHr7ccw1FQeGdMR1oBw23hU1VCghXYa2UAfG53yUTZkXf3FS1DXNWzpt6Hd4wSipgXFtxLVebob5sSpKvidSe",
  "key9": "5fGAmcdY7g6nNtDuWAyQcs2oL4HiqaFA9z8zArBFZ6NQupjCVP7ZxfT9ohwKmemoB8LRqFVxWJFCCtL7iWCMzYjB",
  "key10": "5AvvwuhJqQ2L8YXNYf582Z8fMuBkkJKJHSo2nbaQk7cvK1C6NiYoNimmKBnZes4nr1TM5szPY964JoEzths8hNam",
  "key11": "3scBjM9wh5th5K5tLHxfrj4r1X6U54gEBSU28zEaEnqwtzZrWynR5HHNnudUjEUraPbmzNNFfYgNhFYVUs6tJRSV",
  "key12": "42A9189wJtzzMQU74DLi5fc395qStFvNNrokH5vxrgJDGtNfk8fhPZYpJHgZS81Db8Y1PasFVkxhj2HD3gdHbrsC",
  "key13": "3VqYcHQLUk24Rh4aAPaQJzrk3K3Cb9xAcvgHRMfT8Ca4XCEQArmzoLhjFKcUvMoyaitPW4KQWCsVQRvBTQXRWa3L",
  "key14": "4GXuN9A9XXxJ5qK3PjjpafDr3XJwMBw9aYtz4TmSLhESARYvx6R7XEo6ZgHikw7kknYpP4JH295fTkypA2wy6YV4",
  "key15": "2ZZFUeNTyBGjkS6gVZTMWnmtWwoKVue4X4kheYuf4axZhavz1kdLXD7tUa7Jqt8KrDt7jP5xgUhy6yPb6HAoV5hP",
  "key16": "5vedDbwKjATJRKRUMaoQi8FR1fg2jtTmycAaHxYR3BKmDaPWizLc5aMwaDjoz8h3yDGAVNvAApwx4QriMm3fCgSU",
  "key17": "2k2E7SF1HL8hhAhRscL1xv3qe8BbjHXKWGJhp2LseGYkaYPQzYPYctTgQfm3icdhvmYz6v8tWgSWY1fdGKBioizb",
  "key18": "H1P66ZqBAVRoJEB5trQaqJ1cmcUd2JTumpmgubE2G7vpFzPfaQWa8Ra18p6G1NDXmXvmGXAsFHWbReNsguE3GCP",
  "key19": "4fdawQtDWb6yCfVQTnsbusXsLCDQdiyjfVWhL8GEV2L8khF9WwQAX6RQuKZayTeHUy3CH1LsLLeZms3k6sJ2guaH",
  "key20": "43uZA4pnxy4PABdDVK6SUyiQ7msmdxXWT1YXuGha9EGDDJn49H9ohTCwtHb7vJ2XAuQEjg5z1ZKHAweEVUX2trzz",
  "key21": "2E7Y1bf7eMZ3Lp9dHkZdsu5NgGkhHgKAmpqJQEbhhoyRezHiAtc88UKcgzUVga3rKyD2vdQ9hHXkANyHvHBg3NPH",
  "key22": "4bPu4brV4rLGMQdgrbDgnjR7zbgcCih5awA14eq3HfmcrFdF7vnb38x4zyTaZvPcLg8bucyzPFVikVQh3XLuMmP2",
  "key23": "ZDb5nRVtPFaqeoGwrAdu8bC7LXCvY3sRTbDx5W8tJACq1SJMPTagBZwmEX3bjAhojk8dmoNAeJbhZkfnbx1eYqH",
  "key24": "k1xveB8Jr9bXcYevmuoPBqxJn37W3V3fkQMwXnsgJrjsGsydagc45EaZUty4qEaQgYc2S6mKP4UFBBUYU9AZn8i",
  "key25": "3VrpqAS5MD8sAcsUpotpkfLN1s2CKVwch4R6upHYDnKQNZxwJexVUmHSNoEUDwExMrRDocF46ZPtVzKJDhny5uwJ",
  "key26": "5sEYjhaDvmzLkAFU3VExxVkmTeNP19f4bvXToSCDJqJEwGawf97bethTtKfQoyacHjiX17oAR95syPdu4bMsifLG",
  "key27": "2FL3tXVrbPAvo3uXhVMSFGkNVqfD7QNyHu1bAYzgA88zKSirVruDsZwNidPMHcUp1z7FKxpfz3f9CASVYnAf5Q5g",
  "key28": "3Yk3wA8nskcmu4FC4Vg5Cwq3Z9cCtFiZpgDF2dCMxeVP7yPb2k7mu48QMYRcbZN3RPiEMrykpegRMha41MhnJKVn"
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
