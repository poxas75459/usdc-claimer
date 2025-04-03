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
    "UMvZWPM4QvMXDZ29BSE1xnFswP2VsZU9tRuEb9o2rySisUmRJE2CJxE25x5ez18rpeJJSrJRyP2X2aNFYY7oba3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kgFfRutuLtdYTUmGKX8asRG315FLSFrQ9753GisPyxSWj4JuCPJo7efXi4u6toTEpXfCvXyn3WJCUnjecYLwJP8",
  "key1": "22qyApm5QfPCxbqhCT4VThv3fAxm9CQQLLcn3K7ZLLmJ2Q6kqqXK3jJsmUh1cAjTSNd6rxm5zwzHeFsVzxLXqaFB",
  "key2": "2mhwTpuXyD62qMC36qrLJjZeK67UTg2R6K8AA4Z2BUfVMNJVGXuTYXPfoW8wcekdrreN3NQw4mNM7iPvbLeJoUGX",
  "key3": "4VixXo2Eaf2GATZ4mJgjZ524G8EHVJFZJHFocazsAvsJ7X1DoLeDhkJzFqVXCLFaitX37k4uZWmU7uNX518FurqU",
  "key4": "4K9o6DMVFW2XnuUkx3ZaTrATU85rwBw7wco1FZt9His5Ua8715sm2rwtnWXxoanJjo8jG8Lxnhghm6C61FaBmfY3",
  "key5": "4Fk6Q6G42VUPaBvoRgyexpGtHgD44Eg9XPvNG2edtDiGgV49QdziXGFLZGLomo1PkgjvzfvzNyruL9B3hFZeTjLY",
  "key6": "88tx98hpfejdCzSdfDRkg4SCZM8rsw6Dorwp2M8mYKjcowgzMKrVpzXAuBhT2rPnXeNz1mREerdLrrTGfyHSGdk",
  "key7": "2LTSks7fenqh16NDtBco5vE9V1xYAKSFXdKpbegbqXQUgq3ebqNyhLJxSxg5K9iwAK1crYUw6CqiYZp9UKtesdnU",
  "key8": "2T2JpuvTVFKSVECZRB7vqwQ7q2jTc8gUgcYuo93mSdmP2rGxJcEzuUhx8pmJSsbM43dbUwmCWh61PRXrs9S3BjbL",
  "key9": "4DaJ1PHtZxBFDHMR3AouqSC7vFsbWqTPiKyY9Qy2U1GeeSuSWkMfbtLHLhskLZAX4DXhAAL9tNSVy88TUDkmmnhi",
  "key10": "9P2yyAhDtaiUfzQWycmXqD7DSLbEpn6iyB9D89Jv1aJJdNiocUvm6QNZvB8WxVL2JtbcrtJ7dLD5ztBkKFhzwXN",
  "key11": "28uuZuA6VVeeZdbDrHYMgams43ytHcRTZCdgYbcoYmmFRGein3EofA2thvpPmQnYyiNgFPz74csFLJav1jcMZ8BU",
  "key12": "2Gk2LVj5j636qJy1oYv7TxpyBogEmNoxBfds6D9GojbAGPPezdjZsi522JmLB6KWxUsn6saiyKCqyBYME2oyZTSn",
  "key13": "4o2NDqn6AbPzVz7vKEu2BGgGhjZHXkjDZ1huQTsuW3vcLxweQRSeYFM8S81PxZdeVwEtj1nWdS7KHbdn3kcVEwmX",
  "key14": "2y1fXJKeSFDGxjMWuqsoDSfhoTchX9MEvfeR8qrsCUVsUjeHa2AR1caem9iMFpgzs6nwuSMFUrU5dJxJUMDuVSu9",
  "key15": "41aAqh2gnehdsdk4i3pdPWBo3FUNiL9qz8kU5w6dAVzbj865fdpVfvuNwTX5ZwG5JzFmN1gvWStMjeGD1CkWq6hU",
  "key16": "2EgzvKf45Ebkjb2pnPw9e1QXdD2GF15hVNG4kzCYX9jy9jsM7Hyw2BHp17VRZeKqt9ukD8fuMCh163Sac1Vy881i",
  "key17": "5YTEndbzdWgXCSc1nEQBrrmbRb6FzBKtvJg8rQqo4v7vZVnCZSeAjvVtZ4mZURA4W6gfyrjGukLagghessZgozMX",
  "key18": "4E24nDRUykyezUmacyfSDgs5ZMgunhSnen1AGYRKPtSrjKLgfx77CWJ27gfeDXL6epNandx53paF2QC8CzUukmsT",
  "key19": "3X7WJd19KCbRhYswStyuEVDHZ9ZLLGdAwXjEXpMf8EyM5mqdTEvqtj73sb2T8BUv5mUXADWKfSZ2rz6SsJphwKM7",
  "key20": "3rodCh9hx3A9Sf8YMAzmNYU7p2FRRV6naN5GKewjxTZqgeyigJQunxiCmd5KhSc922BHaNMLh8uV7tuMnEseeVsG",
  "key21": "2B7QukLJT4rJXpcjwHWRmQBHLksy2rJT1mLaJLcWJxLqqq4U4HXSuJRqkfjHyVQQPfjchuQgRroh26m6sVntiYyg",
  "key22": "3L7TGR4AaLs8hGr57gE5MV2ZyjvFK9TxUHRvwrynqzoE9voEmAsDWobVnN5TypaMm3vXvG5e2uPkGvmotTsUPcQw",
  "key23": "3dCZfVFZ5pWEg44qGSSae9sF9ThFgvJ1g8KKoM7tucTDpqTJRPCAHWAZbGxpt9vZfby7ES6qcgV5CYhoEpkEdSmk",
  "key24": "zyndKnFxjCf5bGgTSJ4ABdEG3F3BLF6V7EMGTBSW7LUfHbqzoARkPpvnbiuRuWvV8Uyg5iCwDEd4NZBe4S2NJE2",
  "key25": "3AJtFFCEqaBxqMruRE7vXnNL3bPuAL8Z4a9e7gAwkxKPu4xKWeQdHGB2BKu3FUycmAnvkdSU3pS2b3iUbNH2jc22",
  "key26": "4ftqGgLSqCxvdyEoUmofcwaSFJ9qFu71TV3Wsy8iTRpAoLSjeJUSiazK2XtKvcRaThzU2BSh1CfcL1niiywe6c5z",
  "key27": "5Yadug2xx5K4YcksByYwX6jRTv5AS3xUwAHrAMjNUCPgn4zmZJz64THMoTtRKV7nM9PsdKwZ1Gtqny45Z6nGegM1",
  "key28": "32pCwmQwg6Nxxtgg6fZqrTM8cF3JLyMWQsBeauBh1KF1sU1KdVvaUXAmMdvmUcueJrni9ymAbjx5S6VTa7ppa5i4",
  "key29": "4go2ADucG2UkeLfnVsrigVgJPgRbF2aNEPaPJD6BzsJkvVmvsL88b3rSAjUCX59NCYgweYurG45xzk4nRT1X8WpS",
  "key30": "41bp9RwspLqgZqrDwmG9po7aFHNF3Z1ZqVd7bXd2PvY5kHixSTXuQufEKrzSGfoYwnqV3X3hLUSmrkABJqyFaoTe",
  "key31": "2oTrzWYPSnqEKXhJT9D68rm52pqYs7gemfTaUKN7ACvEGsUAeRRaLxdjHKv1tp8jFvrecR8NPAT7W3Z5bhrLK7GA",
  "key32": "rnqcbJA54XT18U79bbSQNoUbyFXVYa83zzCaZv1T93YQhhFe2tUD9aK2B4iz1kq4U4zs4G8WwxJ8zHhHLcVpDBu",
  "key33": "CeLE4QzP7CdZXb1xRABHG98xcadzHdXFkFxR8275egDxVL16tFs4Cfz1tZKgcJVKvYSxTZ76zaeepYqpq7hLGjD",
  "key34": "4HCC1N2Qc4CCMdXkHXYWB92T949Sv669oEQy6uBZisFW4tQYRCRSDfAAe9TBZKpFTUigGB9Tn9Ax1tRtHb6MC8z",
  "key35": "3ot6hBQrpmLcYgLz5f8R17V6RH5JEQf4461LaxQe5fxpYWKFH8jQyn3wDtE3kCeReiZr6GLmk5aQPSBeeNwnyf5y",
  "key36": "4vtKvTTLQ75ES4QxgsXCV3nQWvMg1cm9mGxk1PbfjxatHNkTRYvF6DapmefiQQaXGx6Vom9i395awS8NHccqnmWY",
  "key37": "3riQgVo32dASdJ1wgWhFw5Ch7uC6W6raSg8VGPevXjEtEqZdrR8QmYaP9dzqLfcwAz4mS8gjjKqioPLHRgpv2JJ5",
  "key38": "2tChHE7Uz7UBeVMB5n6ndE96CYrjWB2nKnFkgtUcyB5DgZuKPJ9h4MgD3ZDFgMMkwDHeB5LUtfUn13Bncy1N2jiT",
  "key39": "4YJfisrtWVBaReXasMQkhN5AQc1UZAeLVywi9jT3cK6uQbzKW59QneEG4qyCd6JvwuphBiidscg6FWocviyn4oDg",
  "key40": "zGZPHYTFGXDwQwsD8sP18NyUCnP5kqoUgJ2Kaidn39tFw3nFX8TaaNMJbqrKQ1VJmXkYLwDt4MDZayCfF5taPsj",
  "key41": "2yDBBiYhoY7rLCdcRshyWviyLvDoBba5X1ECjgD2GsUjm8487c17rehSUsuTEaJNuL4zdqzVm2wRqX17ZL5iw6g5",
  "key42": "3n37nAwzrfaJZiAY3pYG6fP87ayXBpKNJobVJ6fsYEmD1KBDcpMYqZXtnxk2J8UKVkjkaVGVsurGsXj3oyqfpBaN"
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
