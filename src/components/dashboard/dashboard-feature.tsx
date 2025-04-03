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
    "5W3Xc63AbzNs2qXTk4vU289hGfsPTGHnyNw5DCLpwzyKyChtCZYPsRiXwW4khB9dJQo9m5kTuUw344gDrMew8aNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rK465wvUGWPEL2C1fEHoAKeHRQ3pj8rFcuu6TbwjSHb8B3pBBEVF1Gn9qzQ5tXoSrKeNCyTbhDPptphZrHjdb8h",
  "key1": "i3e8j76F979Un9cRds5yT2iXqwmYQS4fmoTa5zmfVDAkvai4oUAAQPKDoaPLgeMqhBA38sZAQuVaPyzhKAHvqgY",
  "key2": "5pmiLk75RAuZEcMz1d1sSsUgxBZWQ2z7ScqeCzjTp4fFw7KAaPEaKJTk1heLSZnmfTmXn2WaftxfvwERamqiETiL",
  "key3": "22WzkbSFuW4FKcXk6sztUkoGDzBx6HZ28MGKFEY8UqA3sYK4nrJkRSLgnZbfyFydJHSXmmKDDs4m6ucz3v9g5cJZ",
  "key4": "jvbEG6t2okRXC6tN1sN7yDYEPtapcscoF4FFBLgnqfD9GB8phLVpW5k7mrhcqdVcaf4XCyjW4voafmTFEe1NTLB",
  "key5": "5hxtta1KdoNLTWCZQn6mk2KdLQCGJ3NsqfQT5tke1EnFuSzwGoQU1qRgNPMhRZLFketsW1kBsVPWeHKijSo3UCR9",
  "key6": "2bEvCNsEaeEfED7cA5sR8896rPHWkrVyLziG9WtCv7EuPFmLFxj5X8i5J7BjsiYwCtErUKb4gbnKHYosjzc5NX7u",
  "key7": "2fLyvXQgHVA8PojH6wdtjDqQwQ4pkmUi2LXzAFeTTDt9hjWEDSFM7w7ZntdbMTCkA88drvvJuZpfGn3HxeGorhQS",
  "key8": "4WwvJZfLAETyqYiEUMFWLK1BRMiBjnPyStbrbgVtjRiP2EFFJCGtZqvTcQ31n8rpahy7oK7sfTjDZP3uPA4kJ6mC",
  "key9": "2KMh7dxXeczSy1MG1zXpb4GC21e86jXoJLFs28366CESqpFVq661GPTikC26vmdpRfU4cg8gKXexPfyyg1SRGT2o",
  "key10": "3mimhTN5iqF4CpG6i2pWGKAaV7oDmqKsx2pFCJqydLC3oYz56pNmsFgjJFQ363a9CXM2CQPMdYeQorpjgZZeKeTr",
  "key11": "RRmYzqC64YjtdZJ25mqnTzHpYcTZfBtB9rh5vxVegrxk3cndYYzUXfLfnK1MhzM99rLaKPxqfEsWZPq73FqqZHc",
  "key12": "2fqt3cxTQByjsZqPoepcGVhjkm87RRnS4FfGJunL8DLXquyyRHL7fsShjbyeF1v3ZQMTpXqfdMhUKtEs5XrHnTbf",
  "key13": "21P7sBZvDAcS688Nfd17r9yNSCD3FYYPLpHKyzhCMwsxmZut6NUc3M94nXVKoAD3FJSnQxfp1jnKc47rdWWP9mj4",
  "key14": "4hVYvtGUAQ4wMMmmQhhWvEx4hG21mwxmB44ZcS9mDXYS5pM5nw8VoMRAVu1Lt25tLSb4Qi2uX8E7DFes4WWSChZn",
  "key15": "2Voc5f7CYiewzhg5XHBqRF7DvvNZfhyhDrZTgRwYpau3RJtd94egrNT7TMKZY2Ld9CQcqRYMkUiN41sk45nuRm1",
  "key16": "1nusjV3UUvhf6uHr1U7yE5DVT48aboHW1GJKMoNtfHwS68msJxsURFKByJ1qcCtFk7FLQV4dmgGECsFcP5hZ7E9",
  "key17": "pnNxyS8qo8cmJFLDuKVtP8GXkaiYuKZWeVXPwYVDkSqptNZBZCwr1MakT6gMnyixSZEopQCbCxHz2or9c2qfQrw",
  "key18": "5kviqAeXyZAytpXxYrk8aCz4aEPJ2u6qDu51zZgUbZfjTHXx4GYkqsbHRPReW9fBBwhPsuDgrxo13VSraL8YJMHY",
  "key19": "43f8Y71bunLvkAxi2QNQQ94Bf7zTtFikuzDZdi8nsRCowm2fJeNhDJy7DtXynEBNZgbqZhny3PVFxWaBV8ramn2K",
  "key20": "VNEfT2zdvZ2GABhoNksupH3zxHbGXMcUVtNSrhxP9qLKYpWWnmUrfdBQUaCeWHj6ozaPxM8JDpNtw5uFPoCa8YD",
  "key21": "2aXaZ3ncnkYpydpjmvEUhMXYTkBrWPfdNQ8UjAcTwbmVQs5CTF4StJ5Sx26jWyeV4TWuXNUu841LA72qU9FMAFJQ",
  "key22": "4uWxSkPYrdcki8oW7MhJPtX6RFDrmsApcVSR3px4rCMTsUfFYyRNSiTJTc97nAwgA2TKi1d21vysEtc3sSKMXnPg",
  "key23": "56btj2M6Sb352xbpF7RLofxoRuJHntjeFi1EJYEnbdcMyPCP9yCQj3f1Q6gj7vaWxromtJEoZBRR1oFWnxhwJsE6",
  "key24": "5oFKYFjGQ5uGEw4aw34RtorkefWdPQAvZQZeR3PHawbLc8wRCdHZ7jqbiKSVrNF3jTm9EYRWMTNGzFe2pc2uirYL",
  "key25": "62Z1ex4Eo6GGbVFTkVPRJjdr9odKNWcjNx8PndujTxuAdBC95paj366Y4xC2e75k1FbxJLqhiFfTdmT25VoR9gSr",
  "key26": "466nJNQq8kowW2WZxn25TTfSyGj3fzBtEsmHsdXaXvwN8VcCydNYTK1dCRT3fFFuKCS8HoYZt7RPXRFzM3N8RWJX",
  "key27": "5aCsEz2pE73xchtjtH2GcdnYxbdFbadRHpUawZSQKYiYKKa2pGi7pZbeBunyYzCQgQguyAwPUZc2bRzg4AnLJvhh",
  "key28": "4GVThuEhpRnLeqXpxdntohFuNveAr2fn4zFLMxYK7G6qaCEHeoeA5gzsHuRWxPMCHjmb7PxugrnwV6tUuqEkrHBm",
  "key29": "5FB8VQk4NsR9KrrYQHfY4aCxQfNRW7uza5oM5u28q72Rq2iean4eE7kRzenHwGD1ZFRAWbpbd1rU127uJoDyKThR",
  "key30": "3BgXPHeiCunEQdNE4bohd54ruvsNardcY77R1CvyyUAhXXMYfZYGeTrRRLHbEQ5xMHe8VDaLVdJg8kL69rYWovup"
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
