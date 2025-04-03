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
    "5Zx5Tgsn3XicgoRSExZ296yKyyiFyWEDu4moAk3ekJwG2KB8BTK39UTm8sVBb5sr7A3Fct5rYneFMmh6EAtGFsy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z8B9PCSi1ytcJ2phdymDy8NdFPu7WphcNV3PEKbqCk7NNrEW8HYX8AjNPGnyp9ZJe365W2Gyud5QZMSTf7aNXnr",
  "key1": "5qKDtvCMyYfA4K5Wj61XTxPi5xQmEZZs2SiATknnZidbW75dCP8gbiJ3h5Xyo951jTRbi6ag5MeMAirsY61R6vzC",
  "key2": "31B469EsaGUXQGMkMVXW8Udr4EPz2qTN72H2wgDHK1pXyi7UzYikECdjDBhAEtLWZ1YR93nZya5mRMMm5pbDMpdk",
  "key3": "2sxMQRXFaGv5hRKePoSLJu8Pkurm4wWhoPBvuEsvtaxmqxKAUz1VuLv7M5T5nMZLttX5wzSHeSsLpSYbYApZhEyM",
  "key4": "zRhmBMDBKZxeY9JJxgiMjvMS7NmMMv8yY4uHCEggYX53i13ELs9wTrgNH3zWDkozEwZA75WWSqgEiyKKQWUEFuW",
  "key5": "5PWctKok54MR3154PQV2zdnryMYBNGgbEzT2LdVJLFtrq1sAYgUNkj32UKuCnPxBkF9NZ3BECYwtcHmHgHHaNZHK",
  "key6": "39BK9JtQmPuC2cCtNDC5Zu3UkrCEoJzgsEHc5iiD2AqvuExg8n2wawGYU77GhYd3fwDbsXLG9csBkR8sGm2UgiQ6",
  "key7": "5dXKB1PwZ7WcL6cUDzpZXa9fUxaoAsFWGShW7mXLPXuQJuoruqdVYeiRkoKLLdcL7rfaMAHeeh3aV2x2TABjpbG4",
  "key8": "443tU7WpecC7PcLqNAGM7J9MPeVYcrgVz9pyzsY3Ho1ESbqe9BFYbu78f9kQ4K9bL5pVjvNF2xPkPVZXXgjdht2u",
  "key9": "3Qn7ZRHNzN29EZYVMxmqcQamczEiRPyQRVTWwXF2ueuAL9Saxx19Z1QJfroiyZtFCXabEzmkxQSbQi2YXsHAApmA",
  "key10": "vUfqXxiWcq1xx2Aq4u4AHA8xPyMRS8SHZ5YD3qi4dSJag44JSZX8rzFfB56VTJx64r3TpxTRyGvX4wtggALSEMT",
  "key11": "2CCzvELeTuWqjHSauxfAjsqEkDocUwawCSHgU2VSxsZZEZbPBBdSkxtcVhXAzXznTLsTNo7HwwtbXpQb5eZAyfDj",
  "key12": "5NseQax13yFsrQrhvxv82Kwp2xwR8mmwd3hCQtHqKybCAeQEhJeYJYXzF2LNsmm3owiKiQ4Dz9J2yXeemNU3YTJK",
  "key13": "GVo7Sfm3MEQ2Za1uo8Mc9cYRHhXvyagQ54XswEmLVK6nereHn1HQdoVFyW11VES6gnKJa3sDiCgM3Kj84cgACEP",
  "key14": "5YtK7wGTkT2qqeq1PWF7bfPUmfpYikMrUcyVA5e9A1KQkuoK9gUjny22QMjt4fVgNwmxmwYd9PUSh93Wo3D7wpaL",
  "key15": "2wdNm6sZg727ncJ7yR61xJRrdMLgXZfXpKFyybTG9YCdDagjQNgWWWdNmnLp29KHL2ptVxd1btecdvASu7x5ZyXg",
  "key16": "4hhtpcAjF4ov8tHYK54CpbSCaJXjXavjQCuXo6vfQp4nR4NZRyeDsmstL6gpVKz96cipEiPgYBU796VgWbaAJMPK",
  "key17": "4gNUyXUTm1r4CpYByy4WVnHKLciGnkk3d7s1qJL5yP2AqG1JcWy5NJGrJzrdZGHcEeeJJ88RfsfKk3AfnjXBpuZD",
  "key18": "L1D7zetHXMpDK5zyuzGh6ixUrc333dt4XMfcmrchJoEj3qFbR2d3eGWdW1aeXBNXfDzZPYaov4UVpTaUoSdF8ge",
  "key19": "5j9rAtRxrApKM8EcvbDJKYjScZdhefBUcdspk1ErBW4ocQFc8bfKQnb21WT5bjr5D5D3hTiMVjPSYDDXT9BVqtci",
  "key20": "37GSndSnyLS9nZxkVWzT4cJD71CxAByWaQX4zehN5ggBmPjtzhp2RLosofbcq1A16YouLdb54x5BHt55ucnktWA4",
  "key21": "yCrbYyUn4fAxzQN7iaSyhqBWXHM5bJcf8RKTe4YTeitjG7tykJcmkp3bZ2xcEs6jov5rYygiwJYsuj6p86zwoiA",
  "key22": "JqVJfUQQKHrAqwnLVRSQdxQRa7GvN29KesAUtj6JR5WFh2SJrtGBR7n3JvevfsgpjxraPz42ZquJtScn5EeURGC",
  "key23": "5u9Z5SHStB8SRqdY9QTATUNVLUP67SKnybKeUurWr85RkbRTbgP4opEMku18zFpM3cqSQutzjzHbapoAF2SkNegp",
  "key24": "JptAuQhFYmxcz84pGQRcr97k3okWx2t16HawWHxfY34XK8B7HQzkoF2DdFAgnGt2AqvGgjSHnuK8rqDNTwhkHsy",
  "key25": "2B4gaMa57ohZ5UuVKSyRebg98qHbMjNUMoaNMuNQeEcxmY2CNoPseqR3zLh85b6cd7cSvMJxNznh6KqJemDi61oz",
  "key26": "2CcoV3CuFfX5Xr9AAwcAtE3JfkA57Nz5ywMQj55U38BRByowbmdB4QPZie9CkHfzZdjrrWydLDwMXc7h5s9VVFM1",
  "key27": "3qyKUNfkC4d6JC296Cfnj9ug2mxXbyXet7WCQt3Rd4Hb68FFGKTKALufdG3Hp8XXWy9WBe3nC8tZ9GbyPCRT2SQR",
  "key28": "5qmv1quwqHq7Bqeva3S2cnFvVYGiL1DjZ2W2mJfujrV23JmEZ5mvxssrxTeoVoHEqbPrmys5dkBAckHSktNjxqS",
  "key29": "5dsws44FA5EWxvrfwVXcsCjyeyM8ohYwgSpbbGvEZ7pu3eYXee9qcR7fiB3pbTFr4NUAUQeYE8xnKFA78XGSKkcj",
  "key30": "HEGQx4BBXbSadfoRfLtasfxinPM7tRP8gJAArZowteRqgRK8bNhD6HFSgbouqxUC7mGThYcxggfQex7eNgddc2G",
  "key31": "dDzLxdkKap8EEyixVKUNK6exYkiADGqVjrGRmCfruEvHB5mTZbQyQcLVWC7qAM7mDecqTVArFQGBTMXzeyPCTsi",
  "key32": "6QKAV4E5sWJVUihsJ7SJpSPR25iHuahdzGtCptpgv9YbX1weCksRvtPbmgrRhKRDDMMjRtdQEqBN2zRWLz75Ehf",
  "key33": "2yW3C78xqZy9RpM2a4jL7e2M75Wyf98bJSkMpuYcwvbyusA83C8X4mWKt1V8gdyCyswtRzxGyrmg6NxavecQRvmA",
  "key34": "5KSRkSQqTvt3PCJKBkRc34WthhRM963kiPRQwo83iUrFcWscQr6noz4imqVZoTYXSePLmaU62UwvVCuJsxb6nq6S",
  "key35": "3pcrRNR8DVjFKwKPfA44WGN1dwmWpgE5tADZzu3LVy7eCvMEUxpicTxMuLT9qhfPu3myEyHb9KPZbZSZve4EmY4V",
  "key36": "5a5VWXzdWuwQME5ozMxMUrZpWG5UELqfcxSXaxS46qgaATLTKCKGJQH7K8Xn921t1WbvbZ1Su6HDvkYTVRGRXmGW",
  "key37": "5Evsb6N8wxvgTqh4oLEMhu8hHJT4ZmbCjmY5RQ79vGAKSnH93GS1vSPbJWjn9XSKPAdn7dhwWSxkiQrEPNCeLcFE",
  "key38": "MvUrkQMgKf6irTDVTLv2VzVbb8GPjxJ1rdh2WYGZD1RpqfoEEx5LL1gUxT3iYwPj2xFgVd8ax83iUcu5pSB8Wi9",
  "key39": "4C4usQ1ajV9FT64ekz53piWzL8pzJ7rJDvwkW4dCJEmxCzQTMts4HQ41qJk2dYDubyr2xZVQSVHKnRC8nRyYqd2t",
  "key40": "uoAgd1JWA2Ym2aTbGKr937nPorz52xhm1rrGGi1ackveBX13yZpjH5h7a2u1NfYcPc3WGHdKny4kw4DPijYTUT8",
  "key41": "3BGEtUScRVCH7DdJ447ngxH49BsWYp1TsQEB7EPJJeGVTpSEHc3nvTketEHhYXEwJTj5SccgyLw7BAnVjSGvhGUP",
  "key42": "2sVEJyJLTkkcRJy3LW1zQfhJt4EDDmTrUUPZeJypyMCLV1gVVu2boE53WEQmSp8BEAcjMkAj3qjtn52jQdZEZcyZ",
  "key43": "2GUq37FtREb3jKq3rqp4GLEKKUKiLsyRkMJpnCgA7Dr6knCMw8g1rKPAW8jVqweCUQBthz9E8YaQFKgyLkb91xLh",
  "key44": "2V4aL4UcWKhWETWzisHZFbD71nU7LsgpajyiAJLwJNhQVT38VTdZZRwGnHMFG7ZyUJjMetJm7PEXPYucd9UjQSXu",
  "key45": "Ut5v9BZR7yczZ7piRmjNSskUSD6sNDHUaPrKmvDtTCmJr9SAxyeEuHufvYUY7DCcKFXqLtqQDzh66pq3LKT1Yqv",
  "key46": "4T5egmbZpaCeTbZJ6SDgEe7k7MuQeUGUg4yJT5tZs1FFwX8TS8cQsgA7hHnof5DJAHYo7PMvSKLDmR6uW2grHUqu",
  "key47": "5tpcwd5dDMgs1ZHCK9C1NEjoJB55HmMNCv6sYH7BtM4RtEB1AiQg2txG5L5HxxZV5sL4FWbH54dwMJ4mWr3uNxmU",
  "key48": "3HCX5VUebn2iDNE5q1e1aQQkHMZx4sYSM74MKGVsNT9qUz8aeqcnMYYcZNB7JkrRqTdUMGNR2P4ZkWAL7widgjmF",
  "key49": "4MfYy2kDikkMguQcRS7ytMdddHiGQsZF2UMAR4Hox2agF7Ec5PuDYY64vtnMCdYz7eHZHTEkF1zqkk9qcTisSVbY"
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
