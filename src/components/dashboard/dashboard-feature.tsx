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
    "2o4x5ajTYjBYT1bX24PL6S7gz7bKYpwrZ7kaRqg4JUcidXEbNV5pS29RPVFY4CCefbQJvywf7VKrbXcxWSGXLdwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WV71Q9R2G7SnwFyWGtJZQhgN8Wa28cCmja1hrPUp1nzkpuZhZUqcBobNRZqgbho8k9dZNuchE5sRHKoejjRzcpw",
  "key1": "pxpWzuMMwLFTHJaDqh77JaS8G887AGBoqh9qSxqgLSzTa6AC78kuFwU3ApvjyGdPZM49j5nRA9qCQHUKGy2M6a8",
  "key2": "j9VLAxgs7o4F7epom578uDyX3eGoRTPwYQGZZMfnTqEs1N3VR1fMDGNJDiQH69oE7oMqjc6a89ZhcrZtLyvKb8h",
  "key3": "52XHC1SgdcAF5nPjixyGdp9JknQnYBRYFgL9BNMw8eB85Trxpzv5FKUS9XMRgjszv4588dcaShiioy2MgWxoxibo",
  "key4": "5yaJ1UXaN1Y1ZZSioukP1wxZpoZt2iB5yWBjt7jSKvUT4pdHRgjVBiddyqixaFpRy8pZHJkgTj3qRjy5MLPmxdiL",
  "key5": "5ouhCAVUU4r9jg9dxMRg2cn2bTHZYiRcD7363j2xeDP3DgcM7kpPETXsKYjEsMWxDWaZuQqGAkoWP8SwFzBaJqUL",
  "key6": "5zmSwE6fegedFebbsgsVB1pD9B11Xniy11TVWDWBj78GGrq6YbVr8HYFaMb3L2qJt2RK8ZyrZazFsDEfdE9me5oX",
  "key7": "4n8ksnsgkhnR9wj3ub4cULi7EvsKpbCrZLSEnNG36tKdvZkihNLQbyjVNdLG1v8EcgTNJ2Z2b4rkzPHVPYAYhArp",
  "key8": "2eRknqiTgCqAUSfiFiqc6Zv4iQjo4uPPW6pQDRGyWapGUre9tkVH5qoopZgyZPBLkvtztmPXYba9y8tvk1Lxmu2L",
  "key9": "32VTLSoT4VD1HBf3VGmNdosRi8KZZCGpFdYyrD9q9CS3GwRLPS1s7hixYe3L6HWCkQHY2FBWQLrrrCEtpxGeAzi5",
  "key10": "67VtwhLrT3U7UL6tdp2cQrHiEwWAMmXwjv4ih5veQKUXQtz4cYaWRoJidEGSB36z7jZnC556TxdcVBpPLevYTtcM",
  "key11": "4v15QF4Dfb2xg6TSBWYiNrwvykAQYpoCH7D7t1Xxr3cABFbcAfZNWzX2gfBA5pP9bthZzkTPyKWHTChUjNu3qqP5",
  "key12": "2WPWCZKLgmLaCH4CaopFrDBRcLJjy7empqrbDSr5UyeNU7hMhT4VTBVZ4zuXuPbE86c9FVPt2TE4FcWaS4i7wDRo",
  "key13": "4afkz3nDA1rqYzSMRVoNBZigUJRy2L6zBzDKdai72psJkorfPdGFtTk7U97baawdWnZvcLtp8Doqds4o8AVEMpud",
  "key14": "65pRLxpBNad5HJqZ8WwUQQMUbF2VFZM7byYpgCUESC3GdRuaEdcF6aBuBLjAPJbdoAZnVT3EACqR6NaSGd7nXKk7",
  "key15": "3HgLSgQhGjezPVcXJx4MczjL2TAbc77TNMh57nAaN6jmqwirjqo7z8pofXWK4HvgPfMwLHVmzPL2JyA8itjVjTT4",
  "key16": "4AXhWZAGBTdzWvWEGT2v8AopRpGuqZXJV2dyFhVNzc38cA2RYNuWEP9NJnxz6fdg2jagvzkYwbbqLqyzhMiVBhrx",
  "key17": "5pt2EskWVAoqSzLJTkhVvwaeAegA8bWZ4MoShLb66vPMRB2HjdZnsEZHzvbXrWSmj8Qv6m1MoB2gbf2RA1jcc4Sm",
  "key18": "25SCEyZ2FvH59DrwNwp8L1x8wHakMph8uHrgoJm8zB4rbsmWJNW6UxiuyCPhhxdGeS2rfqa6HNkTS6PXU72GrLoQ",
  "key19": "5ABoLFXqQvmavLTQKZ5YongmoBD9drdHfkaTJM8vLtvKY6Nwz9CuE5dKSJt9EYcacWYvMoVjHT6PsiAV2vDK4CAm",
  "key20": "PtSF8iJyHYvHhR4SyZQawUkuRUSsH6CT6rm1aZk332DEhMBLCEgWd3VCKm9FxU6wD9eZH49udeFaTY6DvNvL8Zf",
  "key21": "5XzPj5DnNz2LvEk8jmDtz6XT8QRqchEXQBniy5nCXYj3HiW27qVsNPF1J96EvQma5o1h9Afmjc1AedhW33KwynBS",
  "key22": "2S1F13FidnRP5tfBAqVW73dDKkK5zcfnMyAduFvRjZuUH4y3WBCKVU4P4us2yopX7PSWMrsN1ZCpbFRNDf15fy16",
  "key23": "2qJ8gMkFvCPcHwGfeqp6AfiAdB6LNo3doqd7gk9K2F5k4mp3FrzrP3VZhpEe6VAR2my3YFEjEKTpdM2uAdhmkSAy",
  "key24": "3ccmwduXiLzRn3o46Q1cKwUm8WuqZVeYudgXBvaiyeBqPFFZgX3iDthGHGbh61wmboNjXyf4n2UqXfEbbbP1iYY6",
  "key25": "4UTTVbhnaChXSQ8hoENUmC5C48cQ92SHYdEupkeHukJ2ydyaLr44FQ7wgCdsLBoPzfpsknbRVVKjFUuZZV1EckyR",
  "key26": "3gGLxxkJWUANu262DCmYJrRVAWZVGnssScfeUmkoNDixasFA148TQ2RAS2rVDXBkxipDVw4tzMfefr8ip4haGonN",
  "key27": "1G7C452AHVP1JNr96CwNyTg1NetUSGdNYeVPwYGekswou1B5VRjUuh6TdmNpzNCoj8n57S2YnePWh9MDEvKoJtp",
  "key28": "4xwLBdjTbSPhiCY5wvLieuNH7bjWCpX3sW7U1iFCwkQXoN5Jd4Vw7rMtpgnAqaWQpkHTT5FTCfhtmktKVKgAW9yY",
  "key29": "21ygJqtTJM5U7cSTfwQbarJX26QiEBGL22Ci6u4LeiMLfKmT9iqq27d1vZRw8bNR9LkAnwfKePwzgEq5sqfgoV4u",
  "key30": "5wphBD8vsSB15bdMxPeizFNeqj3XhzNPMkUhCbfQuSq1ks2cT4qNhYGtLZMWM5xERtEyUrgW88uD84h14eaBiwio",
  "key31": "43ds9oHcFk7K32c6miz8XNtpok7A6xB2Rx8tZCzAsMzDwH5DiBZUEwMnhKDoqRr5zoNUSYyLQ74CPVjVYgq4MnVF",
  "key32": "3LGFrRf87TiQLchYjPViJSxTJNnydMb7C8hHZPVRkJqGByZJD4CAaSKSXQY6rUqUAbnmPgcg9uq8aBEVgpMNr2r7",
  "key33": "dm131gPZiwxJgD1Nu2KF5FRykJ8raoSykeDn7pW9no57QqY2myN4vQf6E2Vw8nJ2N7xxakLm6xv4dvJLQjDmyiE",
  "key34": "sN3xqNhU2561kbvmz4e53kLJqi1idUhdEX3oTtxquq6eXcjdLr2ikfCBrAT3HkpEF6aJ1peqwV5DMa3ESbUkhvw",
  "key35": "9juoTTTf2Meop5JYEQsxkybaQ3QgSyjhpeN1X2z6QMQP2MfSTqyj2M93Cks3umU2Ld9W2aAk9pw5MvPgv4ZWHLe",
  "key36": "RFTmhENPkWii3Ht5UsNGgfqLbAjeQa71gyZqbd1AXz9cxYwQDTMCiwetKEk6eZ6NvL6RcYezXsmEv71TNQxnmwT",
  "key37": "3mAb7yuZ3XJg31Fo4zTcV1bZ8GyT88i5gquGrtYGPM7M4GhcTgjf8iaMq8cgVxabRyNWYQC7DgQsspPTBE5TnLzN",
  "key38": "5B9zmnSVLYXZMPk7hebHweYzRSSJbysSM5ETYSy29HUPXtjN8nB9PURs2wFqCg2P9CRUbWjZiJVyqdfBfaavrcRh",
  "key39": "5KfewSkLLVwJpfbHaxpeUbaprd7Q9b5otEtvcHNKjSZiCqQrCHx8fi1W3p3yxsEPHsuUmUXonJLWhcMf6mqNjWiA",
  "key40": "5q5LaA4R97U7qLg1XPNTibnXE4RwmxD5gxcHKycw5suZMwSLg1DBEt1616oUaiTGJFsGJtbnF7FWSTQP2xPMwu2h",
  "key41": "5AH8zou6kBCQ3mdhhXz7Ags6U6UV1zTTnCZj3RiWrShAveR1iJf3J53dLpA3QgA433AH8m3ecngfCEXD7rT8HtzV",
  "key42": "33dHF51s6SikYgP7J3xxYZFGHAPwPAxz5rqF1hwoQmNNRTjWyMJXRoS11qqPx8froYMmDWAWDJdP9EzohL9PDQAP",
  "key43": "E8g5sKYxoNVWv2jcJZTes7Nw6iZDCyfJJDLokT1Y28gkcUTjHxR3atMReoA52A4nkwKhZ15xeyddxknVvgrRwe7",
  "key44": "4vZ2Sw6t6tNvoNJjUzrSc68HZTwCGcMg5dbAGMPNCwwG8tngNRfXQDBRmG1w5XCVBVmWB5Z8SkWaXMAQEtJLUM5q",
  "key45": "4VLTgEcuDo6p81YHjcBiAjG7L5VRfW3x4SHi7PLwaB4MWXPyuTKws6xVVBMA1d686h7nNpMMFNfHfGUA8kKrV86g"
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
