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
    "2f5RYhcvPL4MwgkoH9CaG3AAHk1TSNbWBADhjcAeLPcMkHPHeP1XbCfajxGWbCuhXfocm5qpnNWeG8YEMtAQwg2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hsjok1V2ugevHbcy92YFqHXyq9AX8GQKW9f8gwsRr2VnNkXnFHyVsbGjMACoaUTEWMcxKi2ZEXae4hAePmspfxo",
  "key1": "39ssCH8JWiWXQbw9MFKeabPCUVDgZJbz7AgTbDA9rEQryxUDE8t1fqKjCUqED5mL3HnHj3gVfeuUtmNdnXmPsoVE",
  "key2": "3GynSWxLQViBktYiAFYh9n319ymoUSu4cAjvpiRnfZn1tRHztuyia3D6QGmQNKUQedQCgUWKZBunecwM1KrKKuxN",
  "key3": "2qRDZQTBTCkaaFtfaB5DvDSs9svVJLjmJtYNUaB8j3e78hzFRzZ18uaFc2taAsVZRBkXHi8Kf3xCX4EEAFAiiRqT",
  "key4": "3WnCvBh1MRenkytvgr88o9L84H8wgwPU4G5vymdB83kBehg6HReypz7fEHdt3tsTCCqX5V1BcztV8VEXYXGkkXbg",
  "key5": "4mwdrVgCurSJxXrzL3JJqXbsqvprGVP9vYDXdGPiTMNxbrLcTD6hrgQjaUsopNyeaH6hFW2oPuyxUdMycKfDcfgB",
  "key6": "4AX8CUzmUrJ4SdVraMScGVpKENpJDYYJd4na1fMKH3yaTMzeu3Dmiah2v8fyy5Ckg5ViUU5eEAaexnqdSnVvovvp",
  "key7": "5Rcw4eNF9xN5PC9RV9Xndouo8WUWJ6Z5nyE7Fzfqg5stHZqnU9oeghbbdXzWchBZBTd9goF62eAmf3uvLQqkV3Bb",
  "key8": "653xcB7G5dpzY3BBQnCgo6tyUmevoHeoFfc56F96PLVxzPWht8NxJ8tkot4zqRvmGtLaZfa3juxFqsGH9Yd4Qdmi",
  "key9": "5J8FBe3jDTuM3zMbnhP4U44x9HCckKaLhdz2FyvwLerEKyN47Ppe6iwVrDwyxx5ZzAFhQVfwTL2w4oPAKxFkXtc6",
  "key10": "3kkPmKGDhswWjBneApeHPEzNZxXhgoRZCmLWYTdCichebNAckuZafmEW3Z6rgpFYneWh6S2VkXFbPSMzJdS6Qt1Q",
  "key11": "mp61d2BfpiMX9sXtwcpingbNJvm2wUF4qG8b5jQCqX74BWSzvGYupVXhgCruhXm5LxcwpgpWXv5puAWPMiQDUqe",
  "key12": "4yuufz6Wm6Kjq4huXP4Jv2oLFkpLzy32PXTpN1xAcPQd9jWa84YsuSfuHnwDk25Uw1PVjHnC6uYK2xDy5gmxvFzL",
  "key13": "3Gps9E1dHUXoDVhCCN3zhApsidrfsDemvCfeieN2nf8WYGDJS9ZHmbp6Gkid99z7kK5gXGi5JoPv2jSL5JEXjcvE",
  "key14": "3GiKa1AtBLmzxVUKtnrhWrn5V3of8tDA118potPe3LFdWKyTs9tFizSJPTJ71S1MvQKMFQkHtAYy1E2XwaWEKg83",
  "key15": "4BjYjvjXzrSEsU77txfpTz1v97rPXhaoWPGqaQtoBmLSwzGHm3KsEP4HhTMF7XgvVPefpNTJcZeZK7acPCMP5xPC",
  "key16": "646zXYFtZ5uiTK4tFh2VZWPYyKTdQa4Fs1cnYd763EHK3tS4jgobv1tz5UYoqL8DXjbPKMq4mF4SBqTRgV8fSEc1",
  "key17": "V7YJ7DrMSsRg6uddLX8RvAwwPewfUdDAXJTFTgakevpYPXs6fzwKjKVsETQtikBSS9YUi4rdiEiKD9rGmEPMSTY",
  "key18": "4TfYYpLFHf5B3kZV4gnxxD23K3oLyURDJfgWPwoCVq2knp3UutoSidsgKV9Jk9vX7wvm72Cw78MuBrr2ViowCM96",
  "key19": "611u69dZkXxE5yEzihBwY2g7dwJMD65sKu9gytMUdA8WTfvERFdEsDAxR3kTFHQKMTCWHT94brDpzknub35KesXP",
  "key20": "2CPWRtbaUvdbTPHs2AX4HoqbyzxYsL1yf4hZwUos8n9sCmEYYjNnciy8HWbPUMeivaesvxjv3i78CfAQUCY4tdKw",
  "key21": "967yhJCXaF1K7tgvNaPFHbTbnXg7qe98cs8euAoFYEXqZJSAsEEQ9aDFZj6zcePiVoGhbCRuXLQDnnDEe3WmTvC",
  "key22": "qQTMAi4QfHS1jggYKsiTD5Q7epKhDQEvmoz4omhkDQu3NFhLK9fHJzgn3AqhTkWVb7VzFGwDuCPw2E8uuSuwu4C",
  "key23": "2MmfyaS18GQV2zqhMoACCgEZFTJ6Yn7ukAunainZ5NtmoU1gAPxeQ4n6MxGDcWfqb3ym6eXLuCF5NqxjjWoFEj7o",
  "key24": "546J1aw7dKFcytzFzQhJXdCkHJEJLDSJhxeatqRD2SMSmLM4CYjpxVs5K1gxyoHTnHGdTVi5f3JLumkQcUhbZEPc",
  "key25": "2wzGmJNosNjhgisKCsBu3LZT22PjySF53eYiDPZQdQAYfB7mQLv3PxkPtzogTgQoMBw8yvRCeV25WUsvoJJu1a2M",
  "key26": "5dvy6HpZyxBdWEj6SKojmzeQcCKJ5ofbgR7EE4myj5yJSwms8MKAePs7FEHgob7aHgX6osbSgM53ZVAuQ3pNJisa",
  "key27": "5YRGuhQKW27qCJaVfzLRV14FvQ3xGEjbetEgFHoFrcpDXwy6v5EVc7mkthHfKDEaga8Eu4yv68jJVXg6DSrT9AfZ",
  "key28": "xLfbo4cv3ty18GijJv9aRW28xyvVco5wj7S8XRQc4diqrhhJts5XU61cwsnVz69cUVpkbufPXicjSCGCX96VDbA",
  "key29": "2dh9UDSopAj7C2axpmRGXf1fs4weK16sxF5feWBkEJoEtBAGbhptA1nHCm7ByihdTvKLPZjBiYfV9NZUrhxonRBo",
  "key30": "2eerL5S6pD8qCQqHRM3HXyDLuemysjce6mGvqKqNsdYQk2W2sEJLcx18PUwr5K12P6tMUYvEdLgKZvxj535RBfp4",
  "key31": "6P9XaKSjBWXs4kE9ogyYq7Lx7sG9vt2mCMnCStxCBik6S8aktCjFEoNr65kAR78ostMaKxUgK1mj7duUp57sAyU",
  "key32": "3EKbPDoURtXnQumaMqCSQnchmhEp5hJq9fUjQVkCMS6fKBBTzzC2WukCYb5ev92i1k8mYJK4eWp8bnbX8zdRKbeS",
  "key33": "49khFMzTbL91zAZFhopxg9hpf64aq1sNERZKiB7xhncfxQpexsq4KnRedzAjV1UuqxfiWd1CthFQGYfWp34Geb7a",
  "key34": "36UDQehaxGBBfAZMhtYmtjZK8NoLizecH4UGMycZu9zEtENMxiSJRzLSwxxxCak47mrVvmKoBhwb3Q7GRLZdioAy",
  "key35": "5VUMgUHRrx8mrJKCQpXDDRZGy5j6P9jQqJZgMYQzHo8YssNYc67buXzc5JbPixFWiXJmKwx17Y3qoynfcWZUzdHx",
  "key36": "3NUsCvNeZ3W69oVMbBCq8XdTtTYJ2myWm85Mq9uRk3hqJm4BTPKnVzF5PajGYqNprDx7mrC7nyffUaWU9X8VhWVa",
  "key37": "Q3DLzcchdQVNQtETrg1DBwzSCE8FMFUYdEtvxpSoARetAPr8Gje9VvdQJ4YX3hrjKWATgf6uc7N8iir96YFptzp",
  "key38": "3qcsCpVrhprpF2YdsKAfBQ7Y4Gky8X8N2xzF8HVYDaR5HiXUNWoWLQFq4cXz5mFXTfbW4ghPNFdMMwMtcYt6Honr"
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
