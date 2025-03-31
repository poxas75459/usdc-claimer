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
    "3JpaXvwh4pTyenJ5LtnTLtkHHsK2kEDKDHFR4vikjMNCyATfMkRnerxMimg1ZAXzKRd62qTweJoi1PnYeps72rzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K2kAUvqZUgJLmueHgaVBMssTZAi9fDrbPQnvnSQ8wivfD8HSZw9iYebWXJnbtDsaCeY8JPpo7YAfdbmFDYNkR9k",
  "key1": "4Ru129Ygs5Z8AYfkcpmjbAPXJ8mZBkmLS1ab8erSEE2rBEKXUqNEao5hcPD9qXBo2bpEUX681hwDVM5SWXjE5S8m",
  "key2": "3Se6K3A5LWhSeSvuEHepMA6VWjpVt4bbgMzpXEVHAfdSxBjb5KKxAQfYiWKiUL2EPgWdNjBEfwqLtf8jvr1fN5FV",
  "key3": "VdM3QfbSfGUyRkBjMKXZrevQsR3ggFuY2daQxVeSWdWUiPUczZyV4Jg2FQyq3emwAFEVeuAehRQQrMnK2qLR3io",
  "key4": "614nMa13ds9Coh5DrdSWbyQZkr4wttAyvL8jRAfB8eZukqbra7DZNCngAwFyMdtemXFrNHobr4L8sqAbMCWt69ap",
  "key5": "5QqdjjEV1oPpa9Ra8q53NMQfNKpGgbeZZnLPK9KBv3px9Pm2Z7frYSat5ELx8JNLGBsaY8YAs4YfLqrpur4okCdp",
  "key6": "qG7qtQHnMgThCfotqgiiYpPzWeE7hbeoz3LT61vkijMWvyH3VfVvdMk1Ar181wYnnLMHrcEL8FfXQoif9FEXFXh",
  "key7": "4PwvkYYawhk4RQwdHuzJMzNrSHpxBWkhMmfuVvLgDendwU2tU8Au7A1yNCthcNrdY9XGQ518cwJDY8Rbny3eURtD",
  "key8": "3dnvx66WNRJTwp8szt8pTQN3fFRs21MG82ogg9iDsxDmYrFhBgiYMP7V8MfLo147ZnyhGLfAQ7s31LMnnvVkPBzb",
  "key9": "5Pa39KKmi59K1LiV8dGfuWLYWw5ou4kunDf6cKYRMLDiWA9Q41K5Lyjprom1snLYQB44x6eRHc6zaT4euj8MG4ao",
  "key10": "55riiuUEato5npwJocQjxiJBioKZm4uKD5Pydk6tMatGhgFH1Vh2uwbUQQsscmRbNBBWMv4p3EBPfj2CaYvhpVcj",
  "key11": "81FArC1VFwtZbL6huNZ4fnivp1WrHdwMzFC1KnzufdgKyFKeb2mRDEBPUDRdDBAiuNKHf4HBwyc6v7kddyTHxwx",
  "key12": "4nmnN51qS4fLr64UDDiSHFgZ8A43PP6vR4RdJ2H39X1Nqdx6WthUPFG2FCvkSnoGpefv8UXAMXjWi9Et26mec69U",
  "key13": "4B62tXWwtpwoq4eaPyFgkcwyqK1Yevfe88LmcpytzoLJSRbbUSf1ovrakdfgHh5MNTJTCpoDU1paE5hpjMsNyFB5",
  "key14": "3Jwaw52opbGkCU5iZhMJJneBFdVcHPPJR7bPbfhD1Kf4T2FyqqPdwb8E5CK6DEBmoJLySnxjWrfv2riEXjPuFt98",
  "key15": "n6PK5gULEXX1RahpHKaqUPdpU8ttKnJrSsMmPTJvhbrLtrXh5YXTFS3t21tJR1KQJYV7kZpnGHGjbfkrzBsK96M",
  "key16": "osz63U2TXX5PREiYA5VrYcR3jcrUoGux7qdju7ADqBXHjboawsaPkXKw6KnZUTsPs5U5GZa8PPVfyErypf9PxeK",
  "key17": "3ipeT5pQqixwUdEVFMGmf9v9s12m32JQdsThA7ztDnENDPAyxb8nHn2wEGPc5B65AWiQ5skfFwZ7vXhSjwRNrT6R",
  "key18": "3ffuDQXQcwrvytQ7XXk2oi2TEEShyjtCewr9yANJQRt421b5NE82r7cU82L8JUkTN33tfTeXjdMcAh8pvToFDEiw",
  "key19": "5SVgpWdSMhyMVtkJhK2UcGgp5pc1PeHUGcYfamTD7WRKjPXwWVkvaccbnN9gUzXas2depoQ4aFh91dMBiNwUwcas",
  "key20": "2BwdDQZEzVuKQzJ1VhCmBYhZyxX8XXV5oVLvdPrvgCCTG4NyufGSshxsGKZGZqBoGT6LPEXTjNYK5WtgezScszst",
  "key21": "4cekeJ6g1BynkbM8ekYfqwemYT8JHy8v5n23fbbiRqEVnW9gXFWCJ3f8kAvSTgjepbnPKu5oHgSftydEAGSGpezT",
  "key22": "5TBBnSaEwg1uq4HBp33b29tRfesY5FSvM4ycHArWTXcDV1iPPEUPJQ8189J2v6scLxqeZUbVSFBjJJumTQpnbzzX",
  "key23": "3iaaZ7f5Gadg1gn6wnSoCYU9wwcn55s1XbFQ5KJ6AuNt4QFGtaMd4jThNfqNqYiWSBD7q59D1qLmnt9Dq9X1QfFr",
  "key24": "3b7NrWFvbUw4QA7DBtivqFwGSezGxSyD2bWFZirjeLsEKrbKgBiByACuUWynxchV3oKiFA2WHZpL4fbaFPrcD8XV",
  "key25": "62sejdfKw1hD4be3Vb1k1U8Fa653Z6q13yWucUAi3T6jxiubo14efBK82XWmYHvS7RwYRwxYhTix67eGrZznviQ",
  "key26": "5PH4nuxJNagWqLZQnCvkUiNaxf8Wk54E3t4KyELdPeXAqeXuYy4iFA9Lfze32TV6GqHBvtgRvzaJLMu6DhA2qDm8",
  "key27": "5tKDf5NmEUeV5QFeuH1GMrWcB4mLxW6TyepY8rDieFgUgYW7mZZ54FRqEqLkoA1ZWWguJzD3hgwDMq9GEuKLDkdT",
  "key28": "Nj9ZjHoGvv49N6ShfGc933TLEyb3pA9BP7hgUSL3TMMFC7HiDBuPRA2QK2nrVR5X8woq9rZ6pQfU8pA61LXY2xg",
  "key29": "2cJkDJGNHLx4DFb5xPLKNx5eDmgAbjNdT5Khx6c6N3dv4oVcRjibWW88bkaftSEHh3RtW5KpfiVKYjBm7f9sfppv",
  "key30": "Q4LGesLkamQU1ovXTyfZwcUiMy83KMAQ1dX6HLdbJ7EAeJxxfx3CU64osmrjpmCsC8krDpfCY1Rxb5J86xYewES",
  "key31": "4AZV9PXRE6YVSYq6XhzL3CVN83utzJYqjyNde8ZTaLGy2XR1BYhtWg9yHRAErrXxi7nWxdabTyba3Ypu66TyE9vG",
  "key32": "43VeXEjdUo2XPAQMQMeJFw2fghmNs5awTqn78H6Ez2Hzu8zq7RGYhNVnuc7oV7QRHZMCiA3zfYFQDU6DRPWEaHGi",
  "key33": "nf7eGRESswgCmWW3PrLDhtDkJw22jHovgXTcjC5WWwANunxL3JHbvKcBvywSepKW89eDLhtSikRXkzeH7wufq4C",
  "key34": "53XdHTo94FFkrmsAy1GSVMJVGEADNnhvVCpWLqT6y83JKFSmji8maE8gKFfpgsY55ABeWqTSzU8zCKDcgGHFjTER",
  "key35": "2z9jkPCQpNkQg2yPxUEYyvKkzFwsTzQd6rcAjNDeECoax1WAnuDo7dWxqK67PpdLWGsbg4JVrthuo8vn5ycoUkBb",
  "key36": "3M5dDfXSD832B4mfkboqQx2TNqCq6y262JnXYc8p4FFWQSMa9PZcw2WT9ZJ5Y516qxagN8o99z24mfB5HTR6WTwJ",
  "key37": "3TcsptsArnbaDZ1t2yB7HEp76dEdTiyEwJDbStSvdveUEzz6Kj186khnELGRmhFsEuRNMw66dYzRj1WX5opzHV7R",
  "key38": "3HfQgZTEfR2nBMswqHu9XwQCFwcZQXjxtmNPADhv3j7FcSREN8FamVCrWC38BJGeu2ExW3JwoPufso7zQ13km86i",
  "key39": "47Qwe5ZsP9kwhVsCExRgBDK9U8Z4gEUxq77Z6zmfxj9jBwhe2JcDFsJA15A5t1aSG431H1axN8LEUdoGoCNbG14f",
  "key40": "5BnfK8Y2zrUVqGeVh2D9QPwooNQ96ShRuPpzKaUym5eF7VUdhr1RWmhHjdDXh1XbnHauRJfwYU1h9LUobLE3o9X3",
  "key41": "54DUBKCxwy7mWUniy6JKrgB8tZSMQZNfVyDbyvQubyvQNTaRY1X8mCz4rbb2HSNZkRDzjQye8oQrBzedfMuM2DB5"
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
