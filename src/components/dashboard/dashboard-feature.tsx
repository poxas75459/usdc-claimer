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
    "5MKbxa15suKkZ2oxC73Wja2uH5C14bYaiZbZkzdKPHcfRidzbtSERnZhScmuq1cEBRMCUnBqreQrW7bvtuqjRD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rXYmHRHmxXbz2QLSar9779WTQExrmuDPgBiyWFyhXg1MBS2wWgrQdqEmjkYQ1rMdpEdca8Vz7N8yLRbgoAHW7ar",
  "key1": "2NnpasErHFQiB7qNQxWJkkRLRNVwZR39P6nHumUqVNPgUZEg89TYFD1jGqZ75YHhoudL3J5Wgw33Q8qbsGYfuTs6",
  "key2": "31Z1eCMAhumk2QUrZSTr2Yry8ohXt9W8CW6Tpyg1bsY9ZPsfQBanNiL8EnxR6NPaGnHw1SG37qWGoQEByU5zKnrJ",
  "key3": "2a3JmTwjVNrBLuyR4hs3PSxu613drmtLcAVryWAPKhfEvC6EUr6VPGjU5k6kZvgmEMLxUgVwqyXJwyY53rpzcARF",
  "key4": "4epthz99hfAaNStCq1iDj8xAH61b2AcDHUcPQ5UjvKvG3HgSxUDLFWqvPs6Jcsrp1yua4wzi2EQozhxVP6ctvxHg",
  "key5": "5gqgoYd8XGpfBbR89YDewzJAnLQCjSfwwAEKG13Eh9Z9iXWvTxjueuJYUCw9mP3q9nd19c48uxVAWusoeSLK13SB",
  "key6": "2sTWNkMWe8bs8eoHWea3gCveTC6RwQyf7R6NBQSVxg9SZnJ5BuxJuaHrk5CxNz87gbXGNa8MAeUUnucNpQTtVpFq",
  "key7": "56yjuDEFVxKLDT7nPnA3PpqTHGfFMyjpZa89YBC39vPkKARZwudNZSfJkDi5GTJwrF3cZBvYY2Lfa2roCXrwM9pq",
  "key8": "5NiZ3XbHiEzdHJUoGPmVVYeRcV8dq2UQMd53gKjHFNcFSZTCuVGKdMkcBAnbx6SSyFsLMqgDqWBHYyd9GRZZe57m",
  "key9": "2odW5ieUw6DkuAa68CNP9MrLrJtd4GPtGB6sDLpdirAnA7DCq6QuvTYyJv7qte4yZBWwpV6wErCQCEwg9EfftApY",
  "key10": "3snZ5XUwAmQP4THUGv8P7uYgjwzoCJ6Hu1MdVbpYFU9SkxNUVs3RKNxK6ojqQQyzBgzNoSQCfzQJM2acLq4Kmu2S",
  "key11": "3taDoR4WidXTtLEUjRH4oAvMMS41kfZhTfBPTHw9psqyE1gVF2Yhm5VyNtWgqYHBwkyzYbbjKaevvW1JDPKv3paH",
  "key12": "5v1QRxJXP7XAuxnxgcczekosf22uGYEEQ5YQAnsbYPK69yFGbpAW9bGfh1Cimfaj3g95UcPZuYK6bL5UymrNytoN",
  "key13": "3KfPsKihCUxitDYKMHs6uPtSgrGvadMDC47zLV43KtUTvTk4ERbQnrmUr43MYkZtcgvqnNNaPFyk59WibqXCVmfU",
  "key14": "4fRRRncNDeTphvS19WfvmPjgXZHib39nPFMjakZw6Eb79Kr65WBgEAJzauY9vUxvxB8wUAXk5DZB2v9mAooe7puB",
  "key15": "mxCBPwVq25dQk3Dn2w7PZtDHqA8rs9X3u6oEqM3y4JqEPyfYhmwV7jYUKAWz6hGJ4gj9Q9R65byQ8Six1ngb2Qj",
  "key16": "52FxdystJ6Ctyty4epLRH5j6yADjiRscE1RQK6teaaXefZpsa2VhQrxVdtjrD7pGGxathzip4ttSnWE9UbM87QDk",
  "key17": "2ps4FcJb3PPkwF6W4pJ7m1sXMFQ8Y8k8CkcAkzTUgKVNHyKSEU9MNz7qdmjQAmCWc6XM22iZZvFRJM21JMnSwvoY",
  "key18": "2gCTgFMTerpSfCUzHZzCRb997H3PrMatvktKQZ8ccpL21jqVS4ywtb66PJ4rggGUytDU4fzgqKPcTTH6usqXaqwg",
  "key19": "4HNH3NwXgmnr8nLwhWNCo7T2z2a8xUJb8AYruSdGJekXeogo66rTt3PaiKmdo3x5Eta2Lxj3afmFQhgNqv7S1NXK",
  "key20": "2SownTT3rv5FdoLanCeoEWJQ2STLy89uHqhZ7bJHVtdTbt76x6DdyhAYrjbGAeNnwG75nTt1MpLwZaepZepwkFkS",
  "key21": "5cEi6BoMrrbvgCh9Ey4z3MYKez92yWZkXDq6H6PJUA43fHhpZ76J4aqKRRC2onYm2cG2VmRLrqogA1axKJQ5NRe3",
  "key22": "5nwFvNHAuTgyDVTuwjdcpWBucjgZav8mAtbqp1LFANK9DHf14N2fzR5EVv1Yer23kPAce12yCgywb2gg242xn77P",
  "key23": "4KPUptf4dMgsFA1c3BsKwju4rVnz3M4teLtkPrV6sdgkaMueQtXR5dMEQ9JYj8aM7PnBSPXfpZJRW2Yg1QMucMej",
  "key24": "5yZ9JgNiXJ5gVxGimcYscToNUp78g1FtpPRc9iSHzkgxwxRcv8Zf3Yd1BS9wMv2ivFtRBFJVTfDARGi8bt9T4ge3",
  "key25": "ckNosuDXtgPdngGknfFwbvN1YSGfEXwGKDfXdFeiY2tzj2VbAfhLGqokJsZpHfRYUh4aPsh2eFDcJV8deKMvm5S",
  "key26": "or9KL1qjSuircahRz3aRDM5jTjHg4LiSx1jXwtKV33PSBFcaY3YvuXpaMyvYvkEoC45kv13Ei44mfwmoq372qkW",
  "key27": "5B6ZS4psV1V5dkftj9bSnSGyyDxQzSUeJ5HvNT6iLUBaTzmN8RCJ6CquQum2SX11EVGKzi4D9WrbG2WjS8zajwZF",
  "key28": "2JgDhNqDgvVqA8RwruwiHTmTovdbSRL9fL8vnWF3G9n7vqSv9nx2Maco9Nj8aW65EC9foB3jtU59h5AtpUUtUWQR",
  "key29": "5W7BQ4y3k2oMYsdCcMM1Eu8ZfUXXxJZ8csuXuMsNuvVpB9TtaMt6pFnKDsktSRSyYCLgLoXsAMpiCJ7Kio8tL1Pu",
  "key30": "9cjnaQ6gAUkDhSUYJCr29PWxJPvaeT66pdQpTfNfiqWGodb8ctCsybfFV67KJf8Ejf1TCiRTG3serpvh4bwjfmG",
  "key31": "etTzhHwQqAqK1rK5nnTWqftqpUoWiq4Y6RoLG9oP8MKxgWcEro3Y6hfwwvazrXf8bTkBYqtyWt9nSNeng3ZSSD9",
  "key32": "64RS2diVXVoh6pLQ2BC5CfQ2ktLY73JamCfZ8QKvVpHfxDJ1uXNw61eocpKsT1W6LNFghE9PSWDP26pRfwQ8dqTT",
  "key33": "9CJtdcRXDh1qKS2dddG7aGqKkXXfNGk5mgoMyJVtinA4V18YfZp7f24ecmY4R84gBp4JSAufbNshs5yA4LQ2RKp"
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
