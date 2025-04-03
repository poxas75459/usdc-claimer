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
    "GHgKqSWhqEMhTuqLXSgiCkxKDE3qxgpHcPcfHJgbAt2dHaBMM9DDKo4XkBDbsvR75BG4TbHPQdnTTyomDiokd6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "321mHNsrtAGQDSEh7Njfjka8vEAs5fBZj5JzFoY9K3jDLkjCJZkCUr95y7G198DF4LzTLbkbTaAmmYzQGceD9HN2",
  "key1": "4wTe3u53Q11yfSGUeWRRS6YXvTbrUj3gZQp95Diz2D8HgqXtUyeqEHikNt7JpC3DWbqgjjHkVXtFP1C7CGZh52zH",
  "key2": "2CZU1zuw53pVe3Fbg1orKSH1Lo7xCD2w186pWT8R1Jbtz3iBwAptzxk8N6qNhapPXdcV25zqiKHUVDcHopf6vdVS",
  "key3": "3rpwVULARAFMjFhADtpi9gShUv6tKXBHxx3yz4RiAnFPfCqZfZmdvjnB8fe56Knwtewp9VyNKLB4qcJKseSkDGnP",
  "key4": "2SNcAFNqRGxuMfc7XTtqgzvMk31P1nnyEMzkyyPkarFP2QXJCp1MxvC93zXpKfdFJuFR6jVXmQRas5jcm9X9akRY",
  "key5": "593V9eiMboKRg4sonN6yiaop8nmsr2y9zk8WUhqAsLsBouv3BRM3JwbgYQ33ysDKvFmMoFLoTiiJDNhp21wazWsJ",
  "key6": "5ErKUh1hjZEj2Pew9vQnL3ZnQ7vXzNQgnHnBCuUAyh7C5qahQTjT1kyGKNjDUTFBqaKNkm9PcWo89bJXru8zrQaG",
  "key7": "5bXToMu3jg4jdnVeqEsCV9d4xCzhTz9i51NEUcVWzAtGwaGHjZRHDAy4PPPXEQTjH2pv5BuvGBSo8QNyvUb6w97y",
  "key8": "2cZo6VhVzXBTExmRBTWjWq5UWvd2p24zPfr7gXqPtgpkkPhM3dqSiAKeQRVFG89pwxB4bjEhAGyHLwFZazuEeVx8",
  "key9": "zRRZsbypL9YCUVr1ZGenjjL3SPRV17LaodDe7w9V8n1UHPTVpEXeb7iRgeV2Bs1e8d58hxUJwCpyUjZ9rnSVamU",
  "key10": "4wjeQDRx676QcLk9GoV4MYvbJwF4G7eNEDUKN27Wu8PWFQcdvRmNHCMhFTsWdSGBNLAZUsvx6eq4nL2otpmaL1BX",
  "key11": "g49pGzJtHEQyFpjR2g71dBoRFKBLwG7gtFYppci7xFPG8NbkNcXWQtQmwdC7WamKFgaSxAnZQCrRS29aUhPQ1RT",
  "key12": "63dCjG4Qc7yfvSp3xwtM6xdE6Ds13EY4vdgekV5KmtD9RfxadZWzjq2877YV1jJ83u49nfcW9XUiGT6bst7UyNBw",
  "key13": "uPMFH53qQZMJXLjbpZWKve7P8dpVYZDiqzuhEwERR8Pz7M4y35it47xRrhB63ALuvNAC245xmebeD7n33uqGt91",
  "key14": "3XtgZVHL6kFvT5bWxnSJeUWfwoEHXrFHMFZWkNx91FPV7AnU7ez35go7zZoP3DcCxqFsne2tVosZr1ivF8U6gVQ8",
  "key15": "2qyCboz6YW9w4BnZHXeRdNFEwbB7fnekzhassfsxWAYKMAWcKyAHMHJAeTydtXACqDWJNZwtnUeaLJe4MKFAgT4J",
  "key16": "2xKDkQuhWp9vZfrPxdXPkmG16VtGb4djTJS7SPDadzB9XQyNERDPhL7Jm3tbWUhADz3zsK2pxfogJ9UZWWR4NA7L",
  "key17": "5rz5Xk5gTmUas2BMrUwsZV6YHnHuZkZ413BuZd5KrjB6Ua3EDYpNXgfYNWKBwqVbsceSZHeCa3gkw49A4HJPdAcp",
  "key18": "51ZzT8bwegAVHxWeKF2G4VZDJ5HszycQBVzpoWyXzKiVtpNswXr8LfD1eBk3pFvDwZhwz8m5JJcxyHarwX5wyrsN",
  "key19": "45yawv5NyRuHbMFwzPcQ5M4iVkghbH8GgawdrgSGxohwhHgUjE8vWt9vuLbDbGpjWxEQn7y3MC8NudZ2P8aiVMF3",
  "key20": "K4DLauYbJBj2txKcAuWgzaev99stzxLaqX7owAHRcx1MaJEishuKha12PHobhYrS6jYdPeCpcodpd7AurWcNBSf",
  "key21": "3PQfLT25K3xKy9CyZnSDAVfZgdsUVy4Jcb1jC28NrAmz67aTbvttb3CVhj3cq2z5UjeMS2irC31FdP7P4yS12gt9",
  "key22": "3fCwVAnSkzumDogAWeprpEvJPRmA7pWdAVhUEoDVobvXAjC9qZ5z9arrV7YUfuzEK4oCDepvRkHTXihLeo4AUABF",
  "key23": "V4s1W81araxdWJeqwzuf1moFNrEhbZE24DYAzRVw6Qxb1rwABSZuMcXnmU2eMPvmcnKFS2F97G3fPJYYyWVkJV7",
  "key24": "2EbW4uBr8tMjmjjmzQdybnUHaMmqJTNkCsWfxabQhdppKddFX7u7RiuxehB69TQVkokSQRvSYsBUSGvcsweRCj1y",
  "key25": "5hQXwsNW2WiDdQjP8QLAw4doqkTdzqTLgd6JAGbPn2eLz7ZDf5sQ4xLJvEgWpoJzw7ypW8iMUuJcZUwDmFDMrZTE",
  "key26": "534zU4AxjJm8g9q6YpxTn72RJYLS5cju4VRiQ9SjHRUXK64DJgcxz1hYP9otPEQyg2QxNi9zVGFMoST1iX7HZZzz",
  "key27": "4Bz5iU7tT6a3bJzz1htH59XNWX4YEYJruLt7TjnsgeUWNbNM2ypQe7o2zB9sCMYw8YEQjcxS8aEA4dSVE8SbGHbt",
  "key28": "5Tq7aGdq1cz4fk3qNu5FU1zcKLQVWazzWavZNBA2fsiop3T81zQJA2KEYXHgmwt1DimPoBWfvUTVV9Thjst6ayf2",
  "key29": "5uFktH1YecvJpi2cMRskCV6iJVavwGdbyr3BQ7C2TfkjPbkYaEbumCkQTGtdzyTbChdfJD44Qbpuh8ev95BiHvUZ",
  "key30": "6334qk2V9TS7LNj3DAsMEcKQZ2a65scVFVAeogDwFFw4pNREu9pV9XzLqNodGxFYHodpYbMnKDiKqF6cNEhQgCsk",
  "key31": "2zVqSJdYkqPtguK2ajN7ggzQy4WVnq5NDcFhnfEeRSTU4Dc6MzFvyDKGfYwqjMrnmpNMSGUmTiYmAyy91RU2cKTJ",
  "key32": "3UtGstzdDaxvopdKWL51ZjP1b5YWhg11RfmitfGQjwsD9X6adUE1Ehp22yitWwVxqyUin5iK37xRf3VEg6BLLfPj",
  "key33": "4ktALjc8NhfKzuisAP4k9mJ8R37iSSaAc6LEVoZmMLtpyrMezmpquosKKGCknbcFSBxCz6Zt2RjHGyrzmwbtdHyd",
  "key34": "66BMJH1hTKzDmNCu3cKAUNkE6yEEmPmoGokdP8jZ7gdDFfdZoHUeWdDTyM39x8S3KPQsezyd35JcgXDrQ6T5C7sy",
  "key35": "3HEjQPpk53Ksq2kGkpKKG6qKTBPuqKtLL2Vu7nVDAKpUtDW8vQUBTzbRiCcHN6wJMc1LFqAQxhBNuZ7FPecSJpGC",
  "key36": "4fBTPPz1QGCyGbk5BuvjuJ66xMBN9wJz1ABjm7Yk2xCfcsLejovZhbbxGCmzXnY8NuFkXi1aK1D8w7ExiM1Vg1bF"
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
