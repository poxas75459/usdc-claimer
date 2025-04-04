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
    "2iCqhkHzhqgan1nPirq8uCxkafdmLacHE28c3nX81viM2MuLrZNxciTh3kGUq6sunXd2SfCi2e9YfDqbdwfkgxr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Pa1UYjLQcE1outSogGjkmoJ11wZuocFtY3frDGQvi8ZKHbdftrYEiZS38Q4PKpPT86mK7fJsnmAFx5aKhaobor",
  "key1": "5mPucB8xgfUYVUx6zi1rv9yuvXRFhREQswkoTKrMSzi1kMEwCvncqHrbxdons4rYuD4dpcVvoDfc5BCfVDG6KGLr",
  "key2": "2E8WQh773txqdH5uLNirJrdbvfS1sAHkR9kHun6S7dAGDGBL6m9xhZZwSFcULjUXJ5V8SNopH8XLepkjyAyCBZCr",
  "key3": "AxfZ8Db6s9RUbCeThNiHJzFST2TYXbrCpJz3swqquXVv4fpMNQKcWTDg7mJFW2gGiPhgcJbkvJFJ4Wof88YeXca",
  "key4": "3CPQTqYjEQfWSGDEHQxqekPY9roaF3wpi5fcKfzjeNY2x6LAsXdgnTzieAfLsxPWLJAkW2Ltmtnse73xXQKxYheg",
  "key5": "4PJXqJnmzFykaGJwLNSRNqutswoo22ZNgrmUvKNsUDGiGGCUYXadZNcjnUPwpsGzs82BGU5UTRmNHZgyvV55NFVB",
  "key6": "3pUJS83oPBdyC1pC6vNDDvazhtYc2nNDaypYAZJarS5betinjHvTZZ6SgsLRsNojHUAhdTmqDQ3eo5TyGPGUHyBM",
  "key7": "k526kNaib9aoX2y3oNq8VZTztknJBB2KPJqrMbf1Ufcm65ymggDEojadzeixacofTWUYK18f2boJMNeeRyrpASh",
  "key8": "5hF5EVH8LpsQQ59A9P8VLz57JFRbL4Gv6fdUonUPCwjD18Yy1n4PCjeAzTE46iWoVS4bMNUTJpsEa5bm9CCYpUCT",
  "key9": "4gfTXBCbcewoC8n5cvvSvMuXxdEiEjZoyciRrf4U4Ep7Pfq4CSVXrTUhjLdwkRcY2caZ4Cj66jpAS7G239NUwdfQ",
  "key10": "5iKrKZdAdhnyfLjYeS3nstVTckFwNhAhhBggCU9rSbY8JZxd8uqVX2HsvQaVUdvELVED1T4CH1SaJVBvXsVERzy5",
  "key11": "3Aa5Nss7qhjqJYaxYTzY42ysmkyB6QCqB5ucHFKWq3XXCk4oZkDgwnQBSENXyVjR1K957Nvmj4zRWWgVdvDN76B",
  "key12": "2yMgVoepbwfEG93T5ibjdxtE7SbtS1cuuTEw7aGgxGHaZoinVbshokXxkKywpcMyzV2Bej5MFk6tgyxUSqAGZ7Kr",
  "key13": "5e4J4gDSd4q1HRXKXQviTZQc25mt22F6TP2rhRq5PLohxJdDWvdRCQtNXzSLhUNqcKu7Fo1iscVH1st8jFeURE1W",
  "key14": "3TpaS1vUxqm2YHVbC8BMX7kSwoJVrZVaWd9ZGhpQrAtqpNXiJ1uN2RiLEdNQsAH5HPJkqpztHt5PKenCCWYGjBnm",
  "key15": "j4myPTaE8Wrd9F4V1fTeSTmEH7v71f3EHRSyfAeq491R8jz1CxFkk97WQMscFA96dmJJ2LCSj21NHGBCRV7GAwh",
  "key16": "5mtKenYAkiCUrLHLpqj4KmqanazPNXb46SCdjUj3FvU5DZCWPwaXBQgPH9sGiAJNDe37h3vGj33GGC1airqdAwBj",
  "key17": "8x2jLm7W6foxSkWqhtBZLnxyv9sVXyhea69XTvBqw3Ba7J274D9qMiozY7pHsSH4CEqZ6Tv1mHgFxZw25whDenb",
  "key18": "5kTncmGfouee1yT1jAQQoEUrqLDgRsfWac8hWewvonoxZSXhCG5tnrwY1MP8KpDyHGWw5kZjRqRxW7xgibTjvk8n",
  "key19": "2FMQabxJUgLQFRuw6WWqCGnLH7cb5eCRp3HGxtzHp1pAUG2mVexuF9eQfLGioXNiPszYQ6xX8CPdcLWujw2vX4Pu",
  "key20": "2gEVt5fnifnjGg26mxNrXvUMfuNKMV2sqw3fFTPywPS7bvu36nqcMtpP9Ft13U5Da3XjdgA4k1fz7jq2MmeyNBR1",
  "key21": "4Z5GvzK95K2LEWMeTikD2udgR2eY3Q8yFWgQrjMJfENLCZ7Szzw3gnYVKhHFytVghqSJSW4zyC1X8VRsLYs7tb3m",
  "key22": "4d8G68iatWfjSYoSmKmsvvBGYSkQttusUrLYeTUoxA1vHWvLgrSPQQSPSacoCQff9hiUU74HvyD1M16muAvLuuh8",
  "key23": "2f4Bnu8kzWrxvUMCCzZmsHj4Zs434r2NDBDGis93uai58JW6xTyJf9zX3crnsM8nhExwi6ziLWpAaisoTTwEqyAS",
  "key24": "3AzihmpCp9XSpgwjd5KH2kTM4oGxZfT158JG5Lyp7c87YhLRK9iZ1X5vzGPmq4kFUfW7ZaG45JM5hLZmdWU5VcnZ",
  "key25": "2T4LLStnTR6adcT3zGmuvxATxvRjzHeKLEk2KzosPn82mvtwyne7EQnqs3J4Sk4o1916rLdENYZ9xkB8At9rf93V",
  "key26": "nzPnp9AcN8P7qDQ79ZSzEdtrt2nFRAAgK3GofxiWhPdjGEMiSBUEqzvXH9MLq5SMKbS1AdKMUVpbTcf9UjbmTCv",
  "key27": "3RWUkcLTguHjz4LfbQXcXkVAfsKvg8heNZ62DiUM7wVymcUvFySgsjxtXNAfCT3hRuoMaGevny4dgJ34tjk5nNc7",
  "key28": "2jx2BJwJWH2v3rgEm8eV9dCnjeEHjXaQcAHgHtsqVUGn8gypwdrpUdik7VcdroW4nhxbDrpYKvv5N9zCBg8tDFas",
  "key29": "2fwitCQFRpQRoP2kycucB6JVtp9Tvu83FmCtaQjiBhFXsrhCMzA2ZTrXyyd5gKSLJvMSaoypycAC1S3BW2eWFdo6",
  "key30": "2ZxZEkCYF47FWSJRQqcrpr2eJX8mrymBvd7qDPvCHtxDmToch32x4VDMJ2SQ9RqLUqHUPUWtk97aeAHoLotLY6Wc",
  "key31": "Hw6UFVvzQpNEjHFQ3Rfysu3y4ALX2tEfELs5Kwkj8iuP2UkSYDwb6Jzq4Zg2GwBcrvaVPMLFYeMLqBdXuPCkSYd",
  "key32": "4oUuXQVMqYzUu66iDK5eSzjqMNw6hPsFusLPfURR9pTQBBSMdnxtXhfxgEuk9qBQhg8qMFxuwUKMaeEx3Bw6tcdV",
  "key33": "4YFNUK3Aksr144DRWvdC3VmVS4heWR5T1FVEzC5wfiXobbY4h1pEw5Lg47av5qCZHn5QTsBoYYxxM3RoNg27Yiwn",
  "key34": "5eyV2ZemgDG474bD6rY44PJ5BQh7gLDeVXYf8GhDQw3pT1zExPYP9Hdp6FzSvsMuex5CAWdmXXzXyyhxGZfvd3E6",
  "key35": "5KT9dFmPzZha1fa35DCTpzfwYHM8KtsvAQKcrsUM3UqPUmLi79B14NN1ctwrAoFDbrkgVEN23C7rB1p2czKEk63i",
  "key36": "58YJj5B1BCLMv74YxkC3zgmUMpfFYqGyUmAxAuRUQhUPKroyeCmvt94tXBfuA1wWsdaxbi36bLugL6yi2A66ddJK",
  "key37": "5r232QCGHYCVVt2p5fUkc7vx2sp9vm3Noz9cDi3KNWjF6udLyvgjtMNwCu1WUm4gP3piGyPTy5x9e9z9N91QdNWD",
  "key38": "3qkKByeR2jJxf2QxwVYuURdb4fRpTPYaV6TBxpMPADWgK1nkNFzkqDQPJHbxL5eVocsyVmPZLQBN1nnELVQqdrZ",
  "key39": "5RdFjh6P4sPPzcy4NSPxUbqhAK9PegY93cdDLKwQK4UbwHWH4zazwxndkm7e91Z2JzbVguLYLesweTm9dX1rBBkd"
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
