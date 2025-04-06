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
    "2Dq979xzW2QPpxyZtJtbSQZUUdGhRhpVDFQq6ziXnz3zTit2g8oowTLnuurRrc2qRrgxGEpjYJ2AhWg31QziU1uV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6rxZPg8qktcTvdQ9Mh6Ywq9ZyiAccFtnhM4f22eEe3b2JKcjBwhvRCVRWLq4yKqxPrAu5S8AQ77BCkuUBeFWPBm",
  "key1": "5FwBmUYYdLazL5WYWzTyNz6MbDmS3ffKuwKZvGLBmquXFSjQMTw5FNUAC65qV1kEUG1WMJGKmcJ4MjpTKUX6fJVE",
  "key2": "4JV5u499JyKKLByq5VTQNRBRtkY2KRk2NggvPVkH1hNV837KFuWKU2sRjeusdGgpv2BHKGPLNqrH3SC7xdbWgWhE",
  "key3": "5HkevW8ZQhmKair7nHDzM9JH1uYsyjVPgcxzUPk7QU9qBFMajDw2dVYbUUALeDKyFpvSvfYGYLYLGiBmXJdMqXzG",
  "key4": "qBdQUFo7xFXKTpRUMw3aogjaUV8KeQpvadXoUPWbhv8CJjgLDX2TgMzcpA8kurbbiahY11zLkCWPBSp7fRBLMv5",
  "key5": "32eaQ6qyzsjAVajdRgCDBYRC4jze6YXkodYrRY6GZPxEjgyHr6ryus8b9wRXB38SBa1ptKaaDc8qHeV9UiGaeAZ1",
  "key6": "5hz66DFGUHc9cbwzGFgY8JRyx29bCtqHvZSV5ovkUy5ennxQzKiqE5ggMqRohtj1mmW5frFqA6ZkqBSNpfmTPSAA",
  "key7": "bjNV3ujcuzgNyTocHJ7iuvC5Ne8TaKdpmxP8S1PbuhZPgfo5MbvxnpSjYrcZjnVDeWjtDpD6S2uhTN4d61zXAFG",
  "key8": "2GLMhSbWUPycLBMKX2zkpbii4vBm9Kf4VXwD1SN139Qp81xWT4u8zz7scSEURgrPEojdXnwNgTCQmagStFMUJoKP",
  "key9": "2k5VUAnhrndrjcQQvADsXFp7eGkXjU7TtuJpmrZwXsxEvANdCHfEwn8Jj5Eb9xNdi4xCse2rwhVnMnmEiv8hmEUn",
  "key10": "obP4yXaG3eTgGC8RfD29WEqQS5K9nPyybuog7thj8Vo55wviJtLC1hFx36id4gv932TqGvvyKcF35yHhF2HM5LF",
  "key11": "4pHcd929FcYoFkrLaJ3jZivVLomLD1Z5GGss7821vxhiixWhJEkxW6pu4KhPXoPML6xp5pkNZGQTNVYfziDGHnzz",
  "key12": "64zxuNXBSv84viPvgHheT8qWyzKdxaggoQgaumRPbr6YjNbZHQCdYgQMPXsswNpiY61Hx1VjvQjEtgNCAuJQ8Gbr",
  "key13": "2zFuPobJv4AQxp9T6qh9uvbxeAxW1DoySUENa9A2yjNE57Qfe6LGz2FmhDD5NVfsstpKK2KMviJ6v33Gs5cUF24Q",
  "key14": "3B4EEFj184KmTVwjYiF65yKEBQBRNumndAQsNd9GqPpetgaP7FuKsQwhGQMHkCip9rvoTCXu3RtqcS1wV4m7PxkR",
  "key15": "3cqr9Tp4Kb2dVh7cmWfiCZGGAC5ZTHpUsGDZCuoUptsxXYVhFagN4ijVQkwD619TV1iQL9ci2LezMBTMFqUxuFGv",
  "key16": "3kXMMXwU1uHL1i9AZ3JSUYNZ16YPvfAc5p8wzwqPfFngKXNJhVXq3xKd6f6WaMWdMeEi9W1mWJz7tZdsygUVUsPe",
  "key17": "2SYSCc8dyPAHd3VacA9fkSfHSUggPTaanMsWULAnEdvdMdNKtbHocfqCXAj8LkpfNsoip9SG9xVAjJ4KC4zTvXnX",
  "key18": "2VUcWbPyAfMHbaBJtPhK7yyKEunc7PpW9GhrWs86jEANtNT5VjkqJHKNNuHBVuRqc34ekPgfoPiPpxSuTzBrvP8v",
  "key19": "4vAxxukjVshmkjbGRNt6zeG214Xh2ybHhwufu1e31g8soivf6pgbsM1h1BMhWB9foViGmcCqtqhbHnE26aB6uqZi",
  "key20": "4QSRRoM43W9z7fXJbmFJRntSejK4cbZRSuf8PEWnigx4PVnhF1TxEajWSDhxSVSch38gVrSBBdMyWBoHsPTwpz3Q",
  "key21": "4GgfBuCy8mBhFpNU98qhSRzMy2cWCtnNNdZiNRN1db25rbf5wspKZYhzPJF7a5P5ss4JNEUbmMHFn2FF2By7YaDA",
  "key22": "3aCTwE2aHWGjfFnaAhnWDYavpWYJbUiNpmWKZXD2wGHF2QfUfbwwpBB6zxqqowvogSbq9i2aqNxvNBKcYzK8kSyQ",
  "key23": "FyfXtjpF5sjYNJMNdXqzyo3VPKw29A7Lrom8KBZRxwAWZ1tGqYxs2CiS6RSn47Riy61BBry9CHwJH3riW8eYe4i",
  "key24": "4gGabL1CdjmCtNCca7n9t82XRSnge4Ey6eZcidGbdf42ZF7bMQQmvAMc3GHRvdbbmmq2uN62pqLBkY6kjVYiVkkp",
  "key25": "4XVepz6fnE2nf3x551n5dkvjom4CoiJS4dGYiSBSrfjajEypswynWxngKyGQkVSLgXKvF62nbbxdoVruBv8T8zDM"
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
