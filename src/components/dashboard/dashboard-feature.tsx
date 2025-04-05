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
    "5LNGzjQum6xc5nCBX3trvK2qmSfxPxWG4n14UAcSPb4yUNUq6pvpbojkKGMv5UmhB1uo7wdwxRo1ny3ujyvFwz7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EUDeM8Dix4LHSkA1cEXUh5CUKNCqHjCnYq1XTBKpVXmRWH9uqumShML4nED5VK7AzeS3tTS8h4cBds8m79LfRxe",
  "key1": "5KvDd3pD95KK2uuXkyGk3WiHdD8iPEBGve4idyZ9uuop3FaVodYwdDhtdurxgP1mbs8RPGJbxZuwX83vDMj1fdVF",
  "key2": "37xJDAdBTtTNP4gPXnFLQe6t9RmHuKYSreXGndvy87FekifGwgsKxuaSBu7EfqUN3Neoet5wuxDEioSSNqvE4VZ5",
  "key3": "465nochwh8HN9KtXjjPi2LkuPyysoA3qwApCwBMrNhu9oz2y3EWWYiEUqes6uSpCnYC4p6Av3X4C6c1iSmFxERze",
  "key4": "4hi3oByHReeVWv6oTdFwBZAhxPiNZeaYAK2s93KK9poxuMWs9D4wHk943addkCz6YvSNbAhkFymm2a2ybAyELWaa",
  "key5": "3x2cGLh3xXcH3bGryi6SwUg7yXT7p8GGt9Ya5ArD9o72wEc9Suj2MdWMm9SaqDaf44wSTdahFX4kRSWkAWXpppHp",
  "key6": "35QvYTNBJVmJxuCHdSUYeAUBf8toBUmoApQv1jkQyAYTV33tMz69dyhnVEVX14bijEzMeF4q3AARkygXnPNvPSWr",
  "key7": "ZWyLmCQpquP3BFow9RFeUc8apJ854oVaYcADg9GZT9acNspwzhymNYRmK7LfYw2N2Jviaqh7EJQQYHb6YfwT9Dv",
  "key8": "4rcLkR79e3wnvF2njssRrFXx2S3mWSRALRqwWACZ7QYevmyh2iGmmra79L38PEmJJit9LFbDMwGpDPXf4ZJmRrHH",
  "key9": "JPh6zMfaUV35ZVcAs3knhyXddDNf92BzCUcoc35zUUdcj7sMKyW4gTt3fyXJuKHvVQwVJ9cxxgWFmPHDTCEq6Lc",
  "key10": "473ri9Z7vR2oiSTCdhLREo2n1dQdzbJaCqZ758LU3w8vUe9bq8C8nXVpncBfTaUssP48eqzwtf7amZVCLmqUD2j",
  "key11": "2qkaCL69H36Tymnm3f1muqtRo7oVgDYPsYHKvKHj8ixqpwhqkuKx7PqknmK9y9pXyTGxtm3SSXpV57JhsjfatFFF",
  "key12": "2Q6S9ztF6eiNq5H4kZ44JGpz1DBHkLrtdbhXijErgBVsvr8x3jFPZgiT4oTThTMBGfkz8gy3esfEfp92BDWGjpse",
  "key13": "5Fv997vzdsLrC8vFdFYyFXJKyfEwMdokdrdMjW5RJEJigRsstVNdffDhCWZAVem9y3Arp6JGC9BNGnGD7ntJWpUU",
  "key14": "3YLm66Fu68jrRrPf3kp7p54oq5UwbrpZyTeqNWuH1jrVdwmuTjZwKgsqVErhnra56u2ZtqDCyucVtNcMs6EetpKz",
  "key15": "591p5jnP2Tpf4yEvf7F5PvTzLeBWSKZ9i32aJuD58UWeTv5qJWN63a69Kb1Fu2UsY7wKaM3xxpySSic77UVmAkWW",
  "key16": "5wYMxFASotpnCot4kKzg2nAUS4TTyVQaJjwHsfVWo5FcM1WevyQSpNU5VU3HkdPhWHN2xzoWkpP1MUYjiXFVg4Vs",
  "key17": "i3AB7ue6newjiU4Yy1tAddpaK3q3yjgY1DkRL4tqHoWu6v4edEz1r94V5c1JdV1BbPthgn7HvQTfzkkycP8ba8T",
  "key18": "3xDwPHAyUmZegNen628tvSwR2xgBunPZSMAatNqJivvjUsvLw7wNK5ZoLGurBV5HNE6z8SjbE4DbuWwbEw5H35gR",
  "key19": "3DydGLxByTZgrpomXqQcbtDtAZmqW2t9yzQHXLMjKtXo7W67h7Wd5FvjAWGtR3qQnz8TF1qnAZuzemRDiYWANkh1",
  "key20": "VSpzQ7L769zULqseB16eaZHrDPWPcpUCAumSGQ2aqZbTQj8JMe8ehAzbFdRNNBeym3VJcYjW9o2JWH1WMJDEREM",
  "key21": "SvhMcd7SP7Sqe8BzGLj9p2RXt4VCwvEQhuMmQcmfezF43AV9dtdWdsgYSzctM9i2k8p6e9fiYedZBrvsrTtJYJn",
  "key22": "3enUAsKkWfvVwbGjhXqjeVAgFgFHSuY5F6A86HyQVoZU3ox3HSKke2RRRe5DKY7ejscNyNzHUEkyrcVEvR25Ejfa",
  "key23": "SbTuJtAdcsvHfF1MPEhAEcbogKaYuSMK4bYDHXJ1hKufZHa18HV3JwNP9KFDMwET6gJfE15QzL2LCctAJ4Bbjyf",
  "key24": "3rsuLonHadTxxmH1ExPqFWTNtoHPGSFYCNXjiNbSPixi5tkVULeRVGjb4u7g1BDvw8DQUsxLSJkjWz2swhCyyMwz",
  "key25": "jjLYqFSHQX8TqLPbetXe81ZucmLLRXg4kQwaeq5QSBqWj2goi4kg5ZioxJTcBM2rxXz5CpXc915zKWGDdRKH5bR",
  "key26": "5V1paCRbdLTJSAM5akoNK6ZtixRwtPfpLqCZTtvmvdsVhcm9nHyt5bS4C8khivv7r8cj9n6EbkohLSV5CGq4yPPu",
  "key27": "5x7GPF5Tw9BVvSPeu4oc5GXzARmUFMmLUsV4D1jQcr2H36zvnThht2QcpQKSWUgXNbxshtVtNfTaWEXWvSJs5sdn",
  "key28": "3goZR5PcurhoQ8KE2nWuSMrRYBs1JQBjHrTNSq9ZgJh88UT8hp6VnutB1gEws6hGEGYWMUESwVk5wr4igZ9hoHV9",
  "key29": "4VujEUSLXAha7KD2xyaFBw3z6HZDSzWNHRN7jsfTiYCZnva6sn2wzW8uaSFj2vnjJaBnHTouEuAMiFUPQ1b4o8fX",
  "key30": "4NdFpuiyUh3WUcJ6EU5ZpSavZVZqKvHJu6qVQEi4TJDrR1N9EjnyBQa13NUrDcVRoTs6mdpsjG57KpnksU2oSy8k",
  "key31": "5ZcpVcPCgzMrLbtgfc7KtbV1QbbNk6QP5h8oHxvXfTLXUu59G9STwCJNcYSwTi4dhbZ2nEfXg8ZMD3wXoAzuw9zJ"
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
