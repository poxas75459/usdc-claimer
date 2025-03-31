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
    "27N4HTBteNyyKUMvkL5AnyF4UfxLS6Tnb533G4Qp1qMPL3iKWwp1ho6u1CMANGSno3H45YdmymjoR7kQ9Kp4EyMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ik4yJf1zMvi6gNxX2uxfxDdcwAX5FcLhiLwonEE1pMwxDTByfYXmAzWcjWdYVsL9Sh1mZ73if9vLcCPWiV5iMpL",
  "key1": "5MpJL7WVfCtKcnWAiNVwiyi6JNorjnoWqx241zTcMqqTkbn86pZD3LssZv3acUeZBmmDfUKbMbTMpkYEMQQ2dGdC",
  "key2": "5YUDuHf1Agj4AcYG3JS8s2bpHo9uKrYdz44tr8q5RSRi77HVu59mAqw86DXSmNNoAA2oTeemqMw9aKTuRsej7Hpy",
  "key3": "5MgtCK4H1h9yhvsfY7tCp3QpTUVTgqkDrgPncrtkrtAmSdyu688GeKvENR9oNUp91pqx4stPNDK7goiVDREsciE5",
  "key4": "4o2SF5wXXvXYFrparpjwRKKQuRwwxxvYtB9JKLDPixpPbC326YWUoR2voF3MNp3Rk39d24q6ZKbonkVhCv11vuan",
  "key5": "5LT68eRxaUAJ44zsPMxREma7JW8x7sqUaQoz63yYdhAS3V67tjkv4sEbetcN9kYpVXJxhpPMSoUMrJCz5Z1i58rs",
  "key6": "66fKC6vAQjy6MA3kL4Y5TcMzXPUQfMzsr9oS6nb4VzsV9rzzR6ohbzHAFWd51BorvwXzDJQ2nAAuykEUpqZm92kx",
  "key7": "bZUCm4PdAE4KgsMxCSQDyUpbf4HLTm2dUkSagDd4soYPhM7AHXAepmr8bmjY2DVka1FWE8UEQHuAobQQt9JSvN6",
  "key8": "wt4V8y9ioNMq2BnUF4APmCu4npEDeChuRBAN2f3ST8VPBWGKenxg55jnpKaRhEBm1FnqF7nWV52UKAg8hGzMgnx",
  "key9": "5uqYafW1j4t8MnqwL4UBzod7GJY79qMc9MrQkejPZAk748UGN32uMn81B89eQE3mn4EoK8geZPrRmk2k83MaRUGA",
  "key10": "4r1HHH5beVhYBrZk413zGtmLxL4ytTdGgmHSw3PgofbxchgzkHDepkLoEvBks4ytGXJVqBGDrCg99JwhN3kRwpCR",
  "key11": "2xDis7MftNaqgvG3Y1vpGDpS8V5Y8XWjcif32yBFqcKeKrXvWSWmDhNkaYTE4p3hJ3DX855y61VeezZGCx7TUxjt",
  "key12": "4ttxjoWN6A2NddTwfrwezF7cwc4QT3f4BC1gbJxKcSEMnmh1hasm5dYpdVPSaS5RugjfVvBobFexNu2xWVd2ZXJY",
  "key13": "4e5cLhrzJ8MnCRJocCk9YzsY38Cfx8vbMaWok65ASsXtEruaYsdZK83pFSmzrzVP5wDPgvrWRcJRhkiawVT7Ts8X",
  "key14": "UKNSKaZjw5gj3vkJX67gY134wdAP93a7LFAjRCvYc3c9cdUCjEBRvxP4X4priK6XJusNxjzHk5UJJJ96hha79LG",
  "key15": "wFKgnT7yuvKvGMWrMC5296K6NpN4MRJdA1jYvbhiZ9juavA5KranRp85hrBE31cn7ccviTwVTQsY74oBa996SNE",
  "key16": "isPZwJHzNmNy2xFtEwrDFZJz3XMaKR1c6c16o1aJDJNRxsHoUDVfJLUE2zYyUfun3DuUWGKCysAs6PHM4LiEDma",
  "key17": "QK4eyGwpEibbxobRi4t92h8PMp8ybHy7FjQvsJPx7ywmheaEn2XnbnC7b8iJV8FXMqTPrYUjQqr7djrqKKp58hh",
  "key18": "2fAHhmSFw824eVHxPxFNiRu7FdZuL4HayrHa9XxSJvKzxa8K8gXiCzaq3p5cLSxTk2qAKHigahFsLq4LLRu3b2xu",
  "key19": "EBudZsb7SZv6GUg8icJP2kxUdadHnimeA91wvvjBPVz9RsptRaaCVzxJVyqoWuQeVnmWJQPevjTpbHfGAXqjqUw",
  "key20": "5LQWDEPiNhhTDHAgstma71F4NGEUgW67gAbJQAACzzdVxEKzheqKmXkXH2gWhWB3E2SAvDdE77u3yy5WFKSyfHdZ",
  "key21": "5frodVyhcjke56JM3E36dn3Ggbom4b7m9zaZA58FLFufBJfsAmAQRdRncZxt6ZNoBH31Q5TAUY9UW6g5tVXDCohL",
  "key22": "57UeuZzih7i7LBWwEysPQ1NcL8Xc7CEq1fZbVnysAcf5fTRMVx6rxzCB1YTBaL6LdTU5fLXC72ZsSfu2TQdfSDST",
  "key23": "5QZp6ZMxaB1MmapFGhYKn9i813fdnwCQqmcP8jNizyutJiWUC6rU5UHzrii5V1nLtPw3tg5WTT6dYYJj9Sh6Tfhb",
  "key24": "3UG9DYAvuWKnbK4WiJjaqJdtQWK22MASeLSo6NES2KxZaKiaKknwf9xh7ESco7ABMXqHVGYC7QeksRXptihaH9ng",
  "key25": "3aRZmwLaAWribA8965C9L5kouNxX97qFECmnEbP6K1MDSDP5qmRoDUCgtSxFYn1az23bBTWDa48BJ5qGQqXuUSku",
  "key26": "4PJNMhRB2dSxymg1BeEJjEf8KPyBZjaRv53wnUgo1AEQFbtKyMK3bcGJRRb8HwWEhQXw7BvQhK5qirDwjzi2KpY1",
  "key27": "2R7rpeCMmgHgBcd6393nhVY5RYWaJSZYipniyssnjDNuf4AKTwQDMaFXgoiKCtgWNv1TdHaYWf9K35qcpF34mXuC",
  "key28": "5G4xnDd4eD7rBjWU5ZgPuc8eM6a5zYmiUn2H1qSXcQSuk5DQDYbdLuG5Xk1ASFTpH6vgUstGr4qymwX9WfW83DTq",
  "key29": "5EhqdRbBFw7DvvHD6tyL42uTzeDJpw7TtTQskLs5iV9Z2w691xpjwH3223nUFHCA8YcZxZBLHf5tR7jt3zK6Xzxm",
  "key30": "DEte5YnBh8wGUryaTsS7uqrdzV6ie7xGoCgd1M8oB11wqZgGrFRYh58cdcf8ZiVF3ig4dioq9qwsztcDsJUkYn4",
  "key31": "49u8oPpwLRHoFTXMEdcPrKmtB2bPf2naEwrez31VTQKr2NuPzAQGG116X9PtiuZEBbQaFMy6AVTDHptm378vjfqy",
  "key32": "DGxNHdRMe54V18dZWP2psSggRbMJXFh4tioJvWoVCCWEEdPrdZHSskRYrKmEgv48rTeJHUwbqe47z6qta8HQcUx",
  "key33": "4tfADsBwx6rt9LWP6N6UgybD7zDgAqB1Pp93axgvzycECLqiotnB6oVkEG2zeevmb1aBTc2MPGkpofhZTnVmmCZu",
  "key34": "3944tShhsmnFZYZWFP4qmnkZ3QKGjgLLgVHaYz6cH7BR3WGSK8tCjhUmVRkzCtwYmvSB3ZCMi8LRJcMf792nupN2",
  "key35": "4Gm8Z1WNJ3EfN6uFvPXu9bGENVMg2TUXHFm3tFefLpYG6AezewCKXc6DtD319MztiGj3CjrKK1VBpAmFCiJrvjaD",
  "key36": "3ibv2SW9B1TczsioyUFufbQmJU616hLRkn9oEvFZmCauzMeaoMmRGDVF6kRsHuqFqifUG6jVi1yrajQZkfnthJNz",
  "key37": "3LSHEr4uKm9tFinXQDBQCniocmoQAtnvjVfuCj2Tk6idVvpTewKmbrDQxFibDbCqEFJYMPgx9RfD6sbA5qpSho1H"
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
