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
    "4fabwtXAmQjjbfH5mGXWMAmKj1fCSpDpjhfF5AShqXy5mu7rYQf32R9RirvDyU9nscfxovJGjyRNRUyCcCh3LAFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yoyWb5Gpfk5vgxACZJMJjRUB5PAMxkUjxkAQep7fuUqkZtTCBEgHg19xEdE3jEdyU9GMmKG3xPWV9BNsDtoYRWB",
  "key1": "2YCJM73GVKr5z3cHeNj47WxHLPNuDEvQsqtNAXaAWU1v1KX2HWveTPVPHaRve4DRcnAdjtG22Q7PtRSJcec7hD7b",
  "key2": "2mUiZ5khFzw7V4kbFCdqUMa2UhyLZgYd3FnfcYPkLaV8FUBErWEME4F7StC681Q9S5jG4JPoqhAo2ZWC41PvmUg2",
  "key3": "vYWozABKB4rtUJDpkhmQ7Kvpi4CMr6wjX6SAjB6jsRgp1uS9CKVaattGxZ7DrYX16GxMkWjkJtEa92uuWi52JM2",
  "key4": "T11DhADDZsa16n158zQm4p5kVmzJL1BcGNHScAfaqGRMYyw8BxQu8CL5xaxqb9v7oDcoqRFLd2Ntr77mfLRUgvt",
  "key5": "3f1sXK3o1UDFcNMYBJunLbW29XnrZgNjcsLWoTNbvfz9BCDCXfw44Y48qLazEnXnRV1qYQ3SzTEPzDTSsJ4u7ZsG",
  "key6": "Syd4qrwNRbKQXtTt6NdpaTpyQho9NNWLsJiGDA9fk1Az2Rx6XzRVTMpKjuLCXvf6rucwMznGDnm5MZALuFLGHWq",
  "key7": "282FMpL9SNt64zqGHApQ6UAnbzuY7CVvWjVh9CjWHfb96wYtwcFhBnx3ZD3TgLmwueMM5ZjRKC2XMEzDuyRhe9MN",
  "key8": "3vTthUVSvDCeVmmpgn9wbs6udE1qtNuq28C9gQ5DqHjbrw1D8egUibbgzZZS1d7oWPddJTSeU6nL22wQ89j5EvqT",
  "key9": "4s87jvNqdacVnqgFZKPdvJPZufPcQ9zZPBTwV49bccofDhWK7bFgmNFA3ebZZ9GjUa6jPzPhAgkN81JNyG5xHQQp",
  "key10": "5qV9iszr1qx3SXA6CfcC3t9apS8UUwmQA6soyDkfDFVXCisPzUtfMhfEePoLKw1kXbZ7zXjUQW6XJcjwL86EuezC",
  "key11": "pLsY3JTc8rbpehMNm74yzEv8GBQ1m9uwNjAvxjecGugntKec8Z21R9tQLtnS2tesmGn6DKQ2BmvNiFgnTaTfCBb",
  "key12": "mDDyYSbZjDpmeg1jQts8ZGB8fg3Fi7mmwo1d3C7SGBkDfBjPBeHx3eGHttiBGAyLqNrWFXBo6v5xzABviSJsbbc",
  "key13": "4L8Md67rBT5gJgczYWBHATVZvWxJqiXK48AuBuWaCTNJjQPiV2exHixgrzvCtBgQSzuemsDBQwEm5fGYkgeA8vy7",
  "key14": "2WC998L4EvjqD1VFW7q4awHYpyH6SyHYg7JFtpf7wneHXjBFMUDn8mmEujDV66figkiA2HFTQDt5DQ1zz6Gbc2n8",
  "key15": "5UdVgvWVU3yewGHFGqbLgdkzCmrUkvCi4pDLvivLeZFBf23TMsttrFwFy1C5fcCASmrZmuCi14KHDPcpYzbGPDKb",
  "key16": "4rVEvzE7bG6PoNtCkmeB7tT1UNxksC1HYCavRLMCxjc2rKDrVZHzXcnUcEMDVX3woXgviRHnXc1Nby7Q7d3R2dd2",
  "key17": "4hD2afdd7UXStFhgxRMDqqQo3behKXTzhfxfxbxaUR5B15rquu7qXizNNDBEtYXGULnCQiZ64avdZutXB2kGJgxk",
  "key18": "4YWxyse1dxWqASSytnyziFo8PBn7mU2sFDKpL3EnKgwEeWvNQ3gJs8LpKBXfSsf7SgsPvEuMv2gSairFrH8tM6zN",
  "key19": "3rCFJXArbov1kqjesCmf79yvtDtxhCWTME8ojhrT9YgpQBjKVYLxAGBp6CucC4y22Qm8SLuo7sH77my2JnqqFrXt",
  "key20": "VseShmtdKtB7chkvB6J3Zm3JZo9mD4tbhSQyAPTJDhcyaLbaBERvcQLXftKdkS6cbWZF1GxqsPnbrv27jHHFttb",
  "key21": "4vX6chsi7vpb5ezr1ZNRThfNU3J6Z82FVen7q2Zk7ftsHijFcFqZyxcNAfj7rqP1Ewk9kmCgdN3V1fLDtWamWb6H",
  "key22": "5GB1sj9jnYHJyWhCc2kdmysKJ2zj2WwDF7VSCj1hFfxBUZkMpggP2XPQdSCYwfghgSgN8w9iutCMimWEqNFsktQL",
  "key23": "3NenDSAh1hLK5q9kHqujuVnPt42CxAb1srzaAzxSXyQp3EPbCYVBuYPGGL9EqDXh6J7hg8uU5ygJen6FKxX8yHZY",
  "key24": "2uW6Q2eqxbU66W2Sphgf4D6THZXMHEMtWLftEXbqmLCcUAo5gtM8RFb1rTLKpcrYHcXZjiAmS2FKo88db9myk4B9",
  "key25": "5rGZkQsdkR59Ys3mrqh8coUNHZSTtMGY184eBTXQE1BVPvcj6BUUsXqNZsbcBvxxq8De7t5DMJJF5m4q9LpjLDMS",
  "key26": "3i8n5SpFo5mygbG6NYzBJHBz891AziULrswjA8hPeh1YxL6NACfTFFyZUaKkx82xvbQz4ykNBYUwWos8AQSQM7Aw",
  "key27": "4Z8XSNdX7DXbEvS3mYaHmA8gmcDSPXhDxNpvaZtr4LqG6dBCS8iQ2EpfRoC68LvcmYZPGbmWCSFUn6JJig2Rkkov",
  "key28": "3NmGmxueLuapxVEshCaD3coLK3DTqEwsBU3KVQm5HZnMpQkabxHnxEvDhrS5Q74aK5QqdeBMFe8dTVaRj6pRuc5c"
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
