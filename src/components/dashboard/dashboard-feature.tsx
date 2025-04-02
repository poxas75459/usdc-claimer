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
    "36JxjH2REcYjhEyJe3FWiKbdVnXtvfWe6wetQrxGwDh9w24L1GjbuTr72Lji9BrqwzHPUj6HMNsNG4LRtqaFrPhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fDzXksvRgC1uZa1fwGVymW7wEXgw3dLnFq62LijZXsjEweYPgjfyy7gagw1oDmznfHrRirF7CbEYJXxC5PMNXRS",
  "key1": "4Pqmnzc7BM3Yg5ee4eiYMFHccNce4nyvPrm4DEyvAsvEQggGosKVpyX7hvaTLzXhgo6JTL35YWRJgkg5vvyPwMV2",
  "key2": "B9hwPNMFBgRJXgw26UcUe24bX6ZB9hdkDEi7t1yaM6nhjyuG7UQSHxVQAVkwoYcgusSw8jNeTo1xWYUqwTB2Dcb",
  "key3": "5pe6cXa4sK2hnbcaBBrmhnuVrGBKVDtheTLT2bCj4Hn7BCTeA66sNDNQy8P3vPtn1sxe9ciJkpDGAsDPbQyv9t4G",
  "key4": "4nA3X8xALDU58KB9QGdGLh6CMrxqzjkcYuTfzcvB1vQU4DuDTBZ22jUqE59H4c35QqtkcJ2da6AVBS6g4FqWpYXU",
  "key5": "2P9HvuWLC31LkYe8qZDDZupPkbk4abufsHogWrw31DjeTRefyfeTp2mb8B5BiWvHMPmzCn9hMUgqMkpsDVt8wLh4",
  "key6": "4CGayEsd12PhzcTwfKyzXCD3M7W56vVNiEW3PZjE1gMFiA26nCHn1zMbmYeUy4V42MbuV9oWfN5GQs9LU489gJsE",
  "key7": "3MMy5DS35QvFtWk6STYQD8ViSfzb8eRQuRD8Y7Noocv4YtKUm5m9tmwrB8RhkDVHu6LW4uq4Ua4uhtEy4FZSvamT",
  "key8": "3Y6XRPLMmqUuVGPWWbKz3A7L9YRvGXB1AwSKn9YPK35o7EQ36Pv2Gh8aiZnN4Fdb7Wn6eFmUNV1JkCXXjxYnHTP5",
  "key9": "5ATXW4nV6kjyiUy8nLn7P8SEofiNzUm46hsRW6DhTMPTygYoRv9dpNTA9948CaoKLhaZFoBTpVs3zQVmwwGZVBwV",
  "key10": "h654mjXmBfoGYg7FJDVBhYE8Uc38XpGfgd8VuweWPruBtocnKNwTpMDVx9xGgHJoXW4fKDsVPWx5gRZwxxvyShN",
  "key11": "4LP4FP3nYQVdbveJwnmfhwQPzFBAszrhsfds997Y6hnmBGfHutCZR58SSLWPzca9hxT2Tt5kP1CkRkCfGCBx6G7p",
  "key12": "2jsdYeZCenPqtETu5gLPQjhfBXyA8Weotw8THHyVpKU8r7gNQZTWDkp3vFhc2aHc6UZSepRePvufW23UrcHp5LWM",
  "key13": "4dcxayx2zqdCDunNaVhhoAyXtBXB1DjTCLPRRZh4oRRXSdrg4DwGgbCV2NCJpApzQeT3VqubKoqMJDCxx9g36D9V",
  "key14": "3CiuAt2T9ntdyJLUj5jp9oB4LAjvrssPX5YEdQ7AvD9hf8XMVsaN8fbZvZYCJ3tgy7CxUhGGtfqagAEmoGXiyofV",
  "key15": "3Q3LDThhBMRZ7EpCjZ97GYo7casPFxxne4oeBywQTdmsFBHqQ1nYK4YQbDoKK4GJL6gi1EY9fL86zoTuDkf2uiLw",
  "key16": "2wxGQ4ASgjjZuRxMBdCyXXsNLCTVmyLL6HrnWymFaB4JjLvAiHgVtRKVXn9WNMN52knuf8kTZBBSwckC1eq8saxE",
  "key17": "26ePUBpuCoMRcdpFytWcfPb8XKri4DJsTTYRhPJa5qnhcbFzVPAKUbZ3WQCYcfJu6DPteN7sYvf55viAJDbsNZUL",
  "key18": "4Z72tCM4JFLWdDVZvAMKqr5DLwLfHib6ikft38Mv7BaufYYMTZwtyR5QrfSwxhLSK9WXD6i4sGxJ1DqPrSqbtUf4",
  "key19": "3sqgzVa9mc4v46ZR33SbqDL5bWLVKfj4We77SKNUXUuMpLtvRmyTHy2TmFqkNJZtzKoHAjQE9Qo8HoCEcR1pA2xM",
  "key20": "4zeBZwpvW8kNgma9MqZz3NzE9SN8RyWobewdRr4oDRjuhSoP4ZhdFFuWa3p3QyX7xtTbHrzh4rLLg6ABxytcAxiR",
  "key21": "rKrmZwpktHiy3jds29oGUU2KGAYGDLhH8AhD2vru4urkQjB3KU4Ji3UNDvjeeTfB7vkFNrckUungq65yayRJsJr",
  "key22": "5Y6i7hog514qBZAe7PEiYaaxpjaWd5yZSbMgy5Vc8DbG1ni6tXmsdUivMtvP5QFRWnHHcRdr6rAgpPytAnHrAbBA",
  "key23": "4Cranmyv7di1WshksNjQgUP1VEADYSiYikRyTRyre42h73AxgRSZTNQhLdx4m9zDh5K3xrR7jz2WzTeSGxkC9kcE",
  "key24": "3e4oxkfnKFZZ8soZYGqtarN4NQiWgWYD2x7BMXiHyxvvJcAJUg4CBHcmc3jNUdJg7NB3rievgQ5uKrwFu47bL5iz",
  "key25": "4TjqgcRuvTqgcdUTmxbGPMrj2nJFQ5gJGLt5TFiwxbST73qmP7YDp8KfZGZs5qwtoYpyekmbVHDXHPWRT1obU6bR",
  "key26": "2pvXoBLTyVKbsC6Q4ct8TkZGA4oX1LHsQNAE94rWJQZZPP32gnahTU2GE5hr3X1cffgkhedXgSnURf7w9Q7ba5cG",
  "key27": "5bve16QVKJyvWvJLSr2CubRKn3W9wkMptb36zazeJBYkrwX8pWCh3xjXuMRMPQ88eECLRY9S9bsHhBChnzSff4tE",
  "key28": "4sJAs2uRz6g8UTZyPpyyfewK4wDWqV4tzGP8t9BRYAhrG8odP6dtSX1FarMraEcFJtnDmPiFo9RW9q4VnhGbkaoV",
  "key29": "589jabEPkuLxjRLnk7YRX546QVAxx9B4X3d1gaMCtRRU2DvRLsBL8pphwSfMACdtYbix2Ki9Safw1Y7Krc7DJZi7",
  "key30": "46ZBxhrdQyLsh3zmmiryRRVMBXfgXmQoorLvdcxoZWgEEKdvURc7tRoGwymaCaFVzDTpZ8tfQQASYWhqcYJZA3To",
  "key31": "LRnGbAxqbiV84kKodz9vajCLp5gtTCZ4CyUeEBAUeXMFkE7jDECJ6ZAgniQX4ASfAVME5uz7oRvgkKhd9pEuxAx"
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
