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
    "4eAVvkaJzch2n1CtptJ7ZLDZXXphZYQk57D2pTrkD51yRp6uT7W33USou8j8ZEzaXoNoMwALX79w39ZFHGSWLgFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43FwvYmk5i6aFb2zP3oHwwRxQ9CgM9w5j85dXUTYxYZ5ZMaCEuXf4WmgmiuVq8fTorHBAy2i7zrtSZoaBQhvHFpJ",
  "key1": "2FWjX8UuPQXCZ7zzEndMAwhJASxfsGaABKyGuxoQHUfw2ubwqZBC3HpHAq8F9Loy6s2svYuV6qL6pME3PfJLNJEE",
  "key2": "3oPTjHSCmZG78m17hWC4PU9p6KaJeUTszR2qak8gwezpZH5YDEQkmboMsL9sfNZHeHE38k89mFhAuauPet1cNEVp",
  "key3": "52xBdbmQjmPX8cAA8FktuD5TyxKp6GcNHUmWUz9qtk4qZ2iir18C5bh49uLgWUnEkcjpuYJ8wacfEZU8q6LSJHxG",
  "key4": "54pDWGzXxcH7SmWsPE3Xatc11eXYubEh66g55H1v8EmZ1tTrrSzMNicZJSCVRFiuXNtD74n9VhvSQd9dEaxnzkxV",
  "key5": "3pHC6tRDWX2WoYaFDQVjfKDwm6H71PLGT6Zu8zKe6frYhRp29CVSohtfK1m9hsigdRboXXo1Ar5Upb8yakn1azvY",
  "key6": "4a2ReFA2QesdYEdxvYEdnynz5XEQfLNDJYtmqRmes4fFFP7qR5fa3qsrJ9sQfp3o5GaYgR2YavfxpSWk1iHNsS9x",
  "key7": "2jgJrXF7coz8f4Y7ofrr3oNoD39aJv3vJWQccBpC7k7ENA268koaRpc66GSe9a6BHsXhbv11skWRhcjo1mkNhrDG",
  "key8": "gd8wh7NfveRSUbfnoiT9PeZXZZDEvobRdDV9onPS4kzx6fJyaVC2UnVmBJYaxT9ZMtHvvF7oUcbpfTqNbtwYadU",
  "key9": "Hk3A9bq6vwyHZsn4J7iYgqLKMszKbTyEyegDwV1e9SLySVpNP7t16MM9ohes8CQDkjBgDLjSeAe2kGaexQWu18h",
  "key10": "3o8ShxTeH69bzyiUEk4imMaGcgdkvodvEyHaeWv1DHMU1pjNXBAXfgr4YsT98Euk5kVECkKKmTz1UDLetkvNp9dM",
  "key11": "46RPTy3RNb2VBLNxyhAc2SFnzYTXUUBMBFPFW67Pm9RpAmyxddixyLGV1PbFiFjDfD9uvHCfBA8pnLMun5t7HjjM",
  "key12": "4oubqvPr7v4aGwfmHtA1gFik5g6keSkcAtey3reQpfGU5wqzGvCst2ThxvT8xiQPTwqb55GDn9Tvw8sM1GkqwiBe",
  "key13": "4DQryJu89xg6T892SpzCpyW4q4DypdS7E4sVEVBjUZmNafAK8H2Ww52zPZoHUGY2o1P5F4MGiKoyjyPRoB9kh6Yn",
  "key14": "4D1Fv6igEW9ViLUYCKYL3c5jhm895Y9YFgkDcU5iNBB4o5J1sMdJBxRz34gW1WGWCrs4XFKAyVPw4uC9LV6HXKbp",
  "key15": "2ZzcNgc6UzuGtJgQ1qqdKHLFEvSziWtHx1HfbRVeCvoY8AWPduSReKkJDp9hBiKkM46E9LV4BdPSq1G61J9zt47z",
  "key16": "5FpxJs3FZjHXGSqzvaeTi8uzKeLKCKoxwBFzFJ3UjNkHipzUSDfL2QN3Es47ML2BYPCgwwJT5d5eYxo8FumvnUP8",
  "key17": "3B8hrM9m7ziMrPv2PSMynP8Sgd5DTCvsChU3jahUZumh3nhcmXsyHq27BHe8nXNoSwumvHfiG3bMvBKp6NnPHveE",
  "key18": "4CsqisXVjD2iuTtXNiHCh47XXhHUjzxrsxqb1ynozHM72ec2HdTguoVCYxtDSefimCfXFGyJLRLcvyysnk5Ypn8R",
  "key19": "xuMZSCfHhE4zb8AowJTNJZH2zFBF4f1j4oamdkzxTCWaguvRswC5oaAHntR2AD1ydfsgeWUgeDEquUrnxyveZk4",
  "key20": "26xcSrjvKMD4E9mbznvRa52xCUA6SboL3vbBnTKQgnHZHNSb4rXFjrkNkqKoK2rxXaBj8DTToQZJcY7Q1FxgDEC9",
  "key21": "5fmVaV7dm2y5DczECd7zSsDPC5vLogEpNJecuLJ3rmnBFPjHZx7HmNL5j3vNZvJokJNgwBZUTeCKz98L44jAURKz",
  "key22": "5zhfpsvosR2FohKPZMfkypXFCJ2AvwXvZ6VnCwt7j2bFgG8Mdn6Qjyv1o77Yby7toQJh63a7R8ZAFFfriwoCHAYT",
  "key23": "2V6EMZsf3gTxtS2ZzyDFdDNMpDSw5ytarG8CWrwtvcLaVaUJEGAPLqEfG1t2uTJAPodbWCtTm1fwXP8XJFNZjPg5",
  "key24": "2rA4NcM22jS1WA2perPmmQDfdT8rkZCCH6Uh4xgrst1WFfWKP4qYeSuW3Kh4dZgXtjF15D1iXiFg7mbf5QBWBPVz",
  "key25": "Yy13Lgy1hEVVaCbMK9BGhpULUzh1hqMhwjDQ72RvQ7Dhscmw2HGhtpeKNHyazRGphQibcLrn5Fe8KUPxYQn6SrJ",
  "key26": "5ChyYQugsxxAC3ABzzBrXKXrKM5chB3WnQ1XkXmb59MiNZA7a5oEJKHp6siPsUKLwnYn61smXV8JvQg3CKXwyEqX",
  "key27": "Bik5gYmGzwtbKPnh6tiqKMiGDZwR8QrQXJVfekoffc9aPjkpyyJuUJ2GdJX92jBhf9reyvGnMFjHDxSQL4h4LwA"
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
