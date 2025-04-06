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
    "3JXmd6YK3Q9h1X1wrAHSq8Y5GaSk1tjFwxC5NWRCUPd55tpyNtj6V7rCN2wYSCwATMiRhbiRMcQDERTHBN277Kpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pFKW4ifw2g5GN35bp4h9yLRzgVduVMX2cguTRimhfsWMrqhAw7s6HWHeLZE187CkwkTp7Su91onKonQQsvQqETR",
  "key1": "5TGD89TduUo4juKvkvLCPJY31o9N6Pd5YFuxoHjS8eFXCVQt49x9WHAdKrUVkpsCkh4BPrhnFnb4G6b4bJngxKMg",
  "key2": "3R2VTqZwPpWWZZWTVPpjh9mhJoCixJ7wLAfCauNxSV9Ybs2Gyg8zHYgv67D1DNS2955SxvaWvjChXyePRkxXwezk",
  "key3": "2BrXh82RKZnn3W8Z3gKUsDvTbS8aAvAPsh1ZcNGbdsuXNdjErfA4ffDtMmPNmYAZDQgP8eJHVC4fKfW62xK4P37z",
  "key4": "2RgcBbQgNaGVoDQ9BAvTuruCPMzmc1Muh3CaKj2smK5e31c76v6XzATjxvXS28QociUvNhpsFSj4e7hV2KAcVYLn",
  "key5": "2U2W1sfQb2geeSgePXQZJZWicpeRGKvbUZZqeskg8H1qqYiXVnAA1VsZiwzb4P4nAYeuH28zqkV5mRJgNsPDsJuY",
  "key6": "2c6QcCUBddPwjhpkJt4kzL8BXSXe7QhhUctFV3vizcAUVGkE3ESQWKj6E2MrB4JSYFYBBzSL3cxXKcbjd717ctq5",
  "key7": "25hc8PT5rAEUot7VFXPtppbct8grY2U8Q5pjcyWrRcmAaqsyFszh1kZgt1iZtK6Qibt1mnWX99wwtPGKLKtyB9hf",
  "key8": "55J8CzhmXVBor8xSUWJ1UShcj7jFXheGDfm5rLB4BS6gKsFAtxsyQ8cpsHyXhHYS1tpBJwtzkTaWMXWPsm3ZdA3o",
  "key9": "3cqRH3j5nCDwVy1r9poXbSqNSEb2HAVhPMBXz1VxJhgRnSCdYKpmrQkjMgvNs6ixy7JuMqnJavMo4s4MmpXypHpv",
  "key10": "2B7NEYSJTggqMYFnrMBsVjCdv82iJ6f6XD1R6yYjMmvKaK69nGw99u7YAwdqFmSH3sbjvEJGSAReRDWz2dKYD8Bz",
  "key11": "5cWnpxFxzPY6pBiukxL3WeVwLaqJfYWHz6d8PxefrbkWUqWFWfgGnFHFvWDT1LdLqJsPX2VrAPK3xzsUhW3AXoHo",
  "key12": "3vHgCdLE3hYE1Ma3K8JDYzxgL5ntUeyjvwDALLZpGhu58uVif2NrofLpQYkM8nseDkVeVSPWEBMWnzCb8jB9Cf1P",
  "key13": "3H5ZcSG2Ja2sdrpT3HciFeNC27wHHez9ZTHTbnf1X56n9giVCt8N2DAb7os5275TTZxkSXaLUTnY4rxjdrCUVvii",
  "key14": "66MvaxwVKfWr8KPpYAe2ATmpwnfigiASddEHQVSwvAdCtJqbMS3tCrpQnNoeUX2xkbLRQnoPVxXMhZA4nQWzJcXu",
  "key15": "5dP6cCDmxQapXx5WxsyP113BhfnZnyHDSxCqyLdGxZtWd7KJ3rKiM7JwtQQTXptXJRD2xuoE4UwKrBkWc2jhJYTC",
  "key16": "2eMUq9sqwYtAB6cUYaHHqszKL8ZTzSYpCHD5uTSzNohNb8J4FR74NL1ymDiv7mSZeufVYBCf8AxGeVxaMFVmEvtW",
  "key17": "3gUVfYHjMz12QgiGk772PyjYyZdegWwjV8wBSgyByWhSXLJ8YmsdwA3vdKeWoSra5uMKfX9oGM8kZN7dLQboVj4y",
  "key18": "617kiKJAf2i1KvaFPxprAMQBW7RoGFUTnZKvkJAPd1ARZvi28gNDpcnAkHx7SbomyWstsvJgt1BJH5up61y7h2iw",
  "key19": "3FZXhZK7EzkbFqPRyV33r1j6QEmyuUeTXvBaBLaocBPbcGyxqT1KQZSwYzKyCfVANXJnnZZHHFXMJxijUriAFoSe",
  "key20": "4RXDjQzqSq5D4riuRsmcdRi8QCdVV4Za1UBEbVYrjatJb2F1rNJogeP5iAsF2pGSUd9YV4KLmrcGUXEhtHN1upUw",
  "key21": "225V6gu42Qp3KsgeYTPKo3g2GP1schBt6VBNJBGZG5Ap9V4LP6bokiR8pZDzKrgLiaJ6yjgV3n25SF8m1GP26Bkr",
  "key22": "539f5wGBFEGGE4n4KNEVbbn5gjXhxE8UaSup2eueYx3qPyXgQbhoTkKSVmamdoZhb1EivVtSDEr3NQD2UMDwRprr",
  "key23": "36H6A6vCzR6JPihi8bMA1AJuWSchEYei6mnkwTtGJ7rYCAbfyShiXfNBaBEojkxChVEX8UKPhM1N3sSPZX4r8wFC",
  "key24": "49xMJLun9GqzFayZd6H22WnyH5reSyDwYzvzHGoYJpA6SvQhtTL6KoymPho2fr9N9NLoQVYBfEv9yqMqS96pd4xJ",
  "key25": "3VKScxFizg1GjKfErmqVBRsZEEpGD9RZJ8K2RLukJzNLrCn8swc8oQeXAXRACGoq5RUtN1ajUj2i6AH27GbAcnby",
  "key26": "2mWNb51a6w988wYUvYdEScfoPsSWSUy96sVw8Qk9BdrY4i9LqWDeFoqDJEvXXFqvkXvwZ1K6ueKZWsagftzbXjL4",
  "key27": "3RQ9sbkUCEpraDAGzDT2tVVEEc9FD5ioCicf93QJT8NoQ1xZg7S8psFeVRRZ2kgYwPyGJCYQqjqEsBXTZPrFGtA3",
  "key28": "4DMewgg5jx4H1Xyc8tA4Pyqvm5K5qJTo7RW9rVc217Zue7iWcRgQR7RKtMufTiXjucJTcBjNntvZBXP8MXSrwfHw",
  "key29": "4z5qAWnUmRHz9z7BDgjQQUeQB2gyzpnd8Vqii2ED2nfBDvwu6QMbtJMpAhCHEk9QCqvecqwBkLGkGXnJCoXVtyGw",
  "key30": "3ADuDH68njV7LQUo9cYeV3BY7s3yj3FaSHYjQUP3SYE5ij6aYCMrGGEkArgbUCAsxotwixG7H6JQLQ7xppwzYarw",
  "key31": "5Mjg83d9DeSoifKgv5QLt9Dq1ZDt9h7QhYLcF7T5DpCJe1qer31b6xDyicAaiHCwbtkoUp14TWDvUAFbGTN11FVS",
  "key32": "DQaUvWrkyA414HhRjPJuA43jCLjciwoG6pV5C5fMeyUyJCT2BVBE3VVgsWxWrtnQQhxbYPqEvzWkKp4kHUfK8ui",
  "key33": "LuGsTCS7889bf9Rb6eYr6YpN2J8HDjxR8brgonxBq4YpMHojfJhpcGn6rPjDv7kJomydNdauhxN5nL88cXQWqRF",
  "key34": "5jTFPEwyScaqw62TEmAHHjg4So7e5UMnN9UQjRUbuAE5EMSsFD2rXqggJUa9PviW4LkZX33L8exfYVoJX5K4NP6e",
  "key35": "C64GK2NMBBMN5xvKQ7LcNt22tCnNPHDgbrwPFXk527sH2fCLuNin5osjzSyZSeE1sMHdw2GSMNA7NXVXNJkLUmE",
  "key36": "478es6ZBRj4QoFCS2Vfj5MTx1vgfrtjzJGVMndFwXtzPgGHKssiPTHBxJUMgrTY7d2tCddGRQ8BCTrMpGqEAW56R",
  "key37": "4TwiVqXk22Vv4jdaRYwFXUN1ELZv4sPUvTJmiwaS3GvM9nesoq7tomCruZK9iuVjw3ceTKv89t1caiXgb1kX4pxF",
  "key38": "4yGne2uXgbMjuEviCmKQvP6bCQ2SryrLvbzrkebC5cDdi7fLXKkYLygwxpxkmMkFLKnbmFxeeLmtpVFAua2B5jtM",
  "key39": "3PdbrF1ogZtofuNrSHexrDThAUuSziAcVRP8DQEB691iTWFwLNVE5fnGkXqHAUHh4fQizd4TFykXKkzj3Q1va9gW",
  "key40": "scwEWHsmB7Q2bwW44BbFuSi1jAQHxYuBxewCAqhacBgiMkt9essDvv3nfDmpWBsTsdknkmPhUbCXy5GAyqXMzZa",
  "key41": "4rG2CAVDDYoDYacQPWyJ2SLY5SyPCKZ6ZV3AdroU5vXvVqpqBxfTRYCGss6xpWustry286bRe5BvptQh12KonuPa",
  "key42": "5DTdwfQpSbVGBTWoEgtWK6mEkLHEPTw7CmvCdREfwJf1bwNUGvdUX2ebJmQB9ZdQMW9SSt86xS9NioYfoLmmj2Vi",
  "key43": "3cZX35vxZPwWjWqSPCdBtF4sAqcFnSVynFD9PBhEqiTVx53tencU6kCzv968hFrF7bLHAAAgHXP9ZrchaeFeAu99"
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
