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
    "2Aqz4GPT7FBv4ef34mQcyvC66Uf5uri1m3XdBoxMcP1zJTpqDFzdhwoXwHqoH9wh2SqxrYVEFHZxPT3d5iekVtud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u65yMQvGbLznj75qL6vz1wWiUenCLUktpSgd8XdSWuT3GajDh415yqPi3eE28SuFqDrqejkHP9Ct6nVztEmcy5k",
  "key1": "525ahGjKcgyNZ5eiPBJuZhMneDHrVZo7GoTv1V7FYA2szmgGDCC9JJ7mWM8ZRW9Y5KNnojxAgLHGLLprhSziW7ZY",
  "key2": "3o2oinTX1GHBvDjtNXgkpYX3toSxDEUCe8Ld4KD6tEQFppTx8UTX544HtSssKiPg84pG8F5jXJeVCE4fx2c5ntdt",
  "key3": "SzJ13iWcoe2cym5QRPzoETsjgRbkz4DgG36Fo24NBsvBSx7Ca4DjnFSiqbyg7LQtvRC3BNod6iaeJLhxNsCAHrn",
  "key4": "5W872TfW6KEMbgYsnkdAZu7jyRLpAebSagLin1XXCyGsXDcMYGHfKPzfVvU2LXbfcuCjhquDipDisDmEzW7TxwU5",
  "key5": "3qwv2qXm4shSo5ZHDZNreYV6sVEdcqx7bGA29ZsgksWA9bHekaHE7XSTiTbn5WsRynbPvGx4eDb7TGyXKU7dRYSV",
  "key6": "4hwPnYKeDk8bUc7TEVFYk1aPJuuP8Y8R9KUmwDd2B7YooJ8er7DPwrBkPjsgsmsPvoKTEyJJReQg6QDPNoRHYoWB",
  "key7": "4CiCGEheAbxJZAdqGk6n7py3uhvuFbqsdtS4sGV5it8QqB4MZ1azsUEZ3tPriQASspkQkhcAAuewEGmCej28YNWg",
  "key8": "3dd53cD7in5Q5PwBhV9iDKGi9vZ5aELUDHB4a8f96jspUPdxkR5awjF8Uc5aCAXMAcV6YwFgmppEhwou3nSY9Vdv",
  "key9": "ZG24Y9pTCMj5jL7gm9opCT8hX59RRBhhJdGXQ8jG2GmVFXUFquwyH7GLXv1svT4gbmBuakFaM4DmFG9Gf26aiWk",
  "key10": "42ebCcxu7wt6JCWABLXDJSs5bVSjPBMoVfC446TfpTTcNdUgq4CLPrr4QGxKvwoPAbbeyE35uSm48uQxS6uY2GX9",
  "key11": "3warjdFeqY3mw1MXVAe2C2isgEzLTbWtrVCjJGSRnFd92oYKfpSbQLkTz7P4jD3zX9YMyv6ufxWDXAmFihqM9LYK",
  "key12": "2BNK4aeZ58gU1TvSzoCb1NJTmt5V9qwyAXmsENypFYWB2VRGVHX8UZuaiPYERTSz8zNQPjzxLs3a56RTjdzkwawE",
  "key13": "3GEqAdAuydwepT9xnL8EC7iphtjaFS6rMVoMi92ndGJVbmyfcvRCyMWNhjYcVq3NYrMbvgrUsvuxRrQ9rqhA4Nqp",
  "key14": "78Jw7Keh1uJTWgLGzLEmFsBJ2fbzyUv7uMHB4Pps9WbGTnUQyDeNEvCYYvJ9UeVRPQiFjUyBLb8H16hDyKtLsXf",
  "key15": "sZJvMJbmDXQLoJ7LAFyixU4Uocg1H9WnvZqKKpdWzMBv4rTjgwkzhtUVWmvcdSBWm9Ug2DVh2Yxy75mR9d6N3BP",
  "key16": "31Jxm74j7FEktfWxmgSB6CX6xp5Fvcej5i2ao21yMRwHozfLV75ESkEV1D1zpy736gmw789msh8jUcReyjhis3Mc",
  "key17": "3xMcvFVqSHS6UgtWUBjSxdY2fqf5Gqbon45Fd9e9gvfb5r1Xy8RK93M1FtXjYGeFEf3kDhQH57CUAcKCsH84P9Gm",
  "key18": "2De33X8FVeA4BJqA34sit6y2vrWtzTyaKKU2jt723iKf9TMkW3QrbP1MU8r61THq4e3qVAR6KPas3zWobKNqApPM",
  "key19": "4Uc1gYS3j6zkDCbbyXWowVf2jNr3K2hi5AqruhJgKnzFqJYhbBrUhBaEnA7N6wWcJe5oWf8zzfaEEY6sddQvpq3j",
  "key20": "2AsPt8hs7YNB5wZ9orZJoqJm9e1mxXTrnf6P9Fopgd744MReSMper6gtyVcGQTsxPvQQf1MHY5x974AJNJmyZ57J",
  "key21": "2f76SyqLnqHv4fGqt7tVqFJXn7Ghqk4Nc4hjvF1r8G13cP5RVhqAiEoJL1QBf6tCbKhsNHKm5keqB5RxLL3Mg1AQ",
  "key22": "3fPpsUXTC2fZwexcPqaHEAU9T3A1zJjTnAbmKQtTGdnkGLBVJX28PCFuEcS9XEzhgQQkaFkxa7twvp87AQH315Fc",
  "key23": "5u1RQdEdUajQM9eLB6k6LVScbkJD3DHxaQexgXY8LzTRNFXXMzmSDHQhZEPbG1jFY5WyTirog7fWcogHc8prBLMy",
  "key24": "5UqrzmJqZvhda4FVrEapqhsAApoMmvLDHq82DFZ5W34t392iq9WFUVgw1T3YcM4AqqeoYrrA4KYA1nni8w6FthLb",
  "key25": "22mmS8pTa2zMxAvpWzW8mqKvixsE3vV2ztafQZnzJxsPWek3M9eYKSnCAXVVTUMJnXGeuk9tVZDxtRmKbDuvh976",
  "key26": "3HrBWobhFjXRWSb7WWqeH7aDepBVEfBhs3j9Bj23rZJmNFyAGL1MEGZk1sFwzLqdr2YnNeCxNGNpEEnoZMHTg14k",
  "key27": "5FNc4S74vcQZspJwXPRUTxKmAC4ExjUq59YwZ7L92L31w9xQXoR9pCCGXg2N3QH2Jotou2mxyCuqxg4WQXsfEkr",
  "key28": "27BryZ21uKVXahQGvA2wMxxdy2YU18nowFcYEYJV85qgRoZ8bYaxyh1Nbtrc5i6PBzxtHSCLgc9cJU69QyrQkVvZ",
  "key29": "5E4nDzKPff4QvC3DRLbGGi8ebf6JysaC9764RWpAZgCrhE2px2FG6xCpTukPLEKCo9deg6d18oo1NDLqB4XXMeyC",
  "key30": "4WeJ9WCb8tbzqD4ztNYpR1VgktHuNFmFnqob6WwyaR8uJLKQa9XBbCJ6uVWAha7rJLbU8qB4dkciLhoMm5ygM9y4",
  "key31": "3REU6D1jcmsrYkgaFRCiwq32oGLAvkFfHk4NKhPNi8wMJUb2kBypRLLfLFnKnCR5h9kttfgAqHf4d3YDYN3C8FRy",
  "key32": "5cNZX2pQvWUPhzvrRK2gmePhLhuFWcG46vb3NZJ7rjG8N4ZLvGdANryBZsyfLsiymqmdNqidE8gRaUaAVFDP34C1",
  "key33": "3eoAqat7heenAJsEcv6BKEuzkvXnx6uaPaMa6Ran4mvtxF7iiL3sKxLRFHPTKZY36SNDn4Y2gFs223gk16eTKTLD",
  "key34": "2X1KDWigcz254VoqZ9xnPMxoJWNqA9FecNEmADSrkv3hCks4FnesjSHqREdoPosuzfbHeedX2rmddiPX6HqMdyXZ",
  "key35": "5KwiKfcsaZjgTuGtMyrrLmMbkmmasG9dCq2Y3WBK924K7BBHhxhPSrdEqEja1VCjVA4jD6uG5e8AsnF9LE5Hj2QM",
  "key36": "3NHcvVBthGWQssL4cq2u9VHQg8csHG7RXxAtWRDE3eJnYXvUCaPUZ3MPWMP4YW6raaJtsuD1AWUfeHgBpiW6yfzz",
  "key37": "YHfRgMjMKAUcEGfSJkbXtLmwZ1Sc1bJuekPvQqbVc2hnykTPxo8Pqoehb4VxoNgU7R8sXgoazEhqrWFLcJDTJK4",
  "key38": "57CaU14xWaRAUXMtfJ6ihnwvfx8xK17V5TrD39eh9z8287tyehdmpTqD9VjSfWCQq72umMZDG7JJ9zd99PfXcE6v",
  "key39": "5YjqMZY3taRQtBRj8A8eDK1qhdng7DbpPProReAWbSJ955j7tH9LHD5VQDJrkX7oKDxMnbzmW4NVPPp7sUMsNiT7",
  "key40": "k67ef5oF7rES1vGkejuerfehnHCBHjnKh6o9gQ5acC5PkNCZ5VUvApZmDhX2dK6QD4TGMBTBL8HqLZ3rnJpCp6n",
  "key41": "JaQREEFQv2fZc39dhzKcYQaQdT845f867MgFdj2augnRu2TomZSukRm4uW316VzfEs2S9NxCP7tXPsXnHvCA6Bi",
  "key42": "2iZ5sXNvnM9x6mYignHctZUMBJavTkMRKVD37Xc8hrjmCcMDa1axYt1PSeTTZWET8nfhi1CJYDLC1BWf32jBYKnf",
  "key43": "4LyToaGetojRhZW6ru7NzVzSU82pUqoe3vDTxL6V5S1UiUJzknFdXfZQKQFL58ojsnjZEN4dc7DquX2qX3ABxxJ6",
  "key44": "ZgykQ6cekStQ1AVDHDyFhSGuvMQLE8TZQBumCQM361Eb9Nx9AneNnWezxin3WvP1ppy94XwRi1Bk3cSArCCSk7s",
  "key45": "CpQUhG8bNQVw41TUog7nR7Q935RtuKcWp7ZjbbsHUAxmmeRtNgLH1ztkxWuTXxDrd4YFaVhecBdHmVnYKDUf3sD",
  "key46": "wyyYsqZyqZ3SPsNXRn8PxQbW4N4JjA9TVTVZ28TiFpV5mPFroPFADwNc2adZ9pGUyBSfGDG5G54c5YFZT5urjUW",
  "key47": "4L91TKUh6BAuKmrUUBAoeTXGvfqjJ2rnEqDmLMhPM1rnndt9ScptUJcK7pEcyTa8RRSFixJTTsGQbNEfHkBUtWz"
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
