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
    "3j3tVyAjxdYvv1Uso3XchVmVVKmHQ9ah9PooS2C343K972cNTq3mj6W1sRnPuk7cXvv2zR8zmRMQDyain4VxJMJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ws8gKKpp25kHCcwD9MVm84RcCTPVzJ3sCMkgFxS2mAi4ptEPDQ5UwiSgh1JjqzKUP2aWbePnx4XNBQAUGrVqUSW",
  "key1": "5MUAViYG5TFvZEBoESx16LGgbQNYbNw4n1mtaLAyJNfrU1Enf3xhDv9KERgHfr44YLBBD3tx4vDqJipjxhCqSt4v",
  "key2": "48MM67hnezLyyXKQNqyTAwXRjUxnz3Cy6Zn7i4R9mWCgDVxGS3hp3fnWpLisQBWLBiTcVZuDXaMB5Mw8rYNrjPzX",
  "key3": "3hCKTyvVAgw4RzYVXzSDwwBLL5k9rVZhd5WiJLFnvAvKcjUa5Kw2bkzFvyqWur7pSFbd1J8LD3pzpcYoEyiwgb3w",
  "key4": "5surXkLcjCjyMf6kRW4jjc3buyxzcgqxqdBnSvyVJJT1KAXMSLvAQHHTvV75Y4WxKmw8Tqqr9VQUB3iM8c6Cvegk",
  "key5": "21P6JzWGWgkf59svCB7YsuQRXVc6xH5dDt42n8VvKvQaSdJpYSznNPujC2FF59CtCHDQ7AcTjNyxnb2nYV2LdPMJ",
  "key6": "3qQe1fDJAKViGrSSvP6TP1svWjjEpghgFTESXQB8afHEANgu6F6maYrWcBsfDMNVx2My7pgjng7fB3tjMzzTt2Ba",
  "key7": "3biRs9kfAckuuXyr7LXxPQQYEj1VWYMw8GK7BsuUg7VruWyPW8fDxgNJSaR7HXpQDhVrFKWgyV5A9GmKZ1yDjXAB",
  "key8": "35RcMhaSmmozv61spKo6EKaPhJCt7LHE364ycPryn84AqhwxeEEmH4Ap3Kod4rVGeBKhf9bVB8HPjY3tQQyjcZSY",
  "key9": "553CteEvGzEa8FdbVExUAQkJGSdkTSDJ5GssYTaSccbrzfGsGgBeJMdar51Yb4ok5vG47j3J2QS6Qb2E3drvdNFc",
  "key10": "5TAFvXUhYu2mcy5B23uNjH5j3iChTwnJFMDbvQfatueMuJrzixHVPiHXDCTczdC55BrAnHeStQcmZmSAiD1WoqDc",
  "key11": "5pBo4sMHf7cqN1s5ReZXmjeTDTW3v1LEGjtmQfitVKuFy7v4WZgjQHDQXVbYw8AoaQ4uVp81wiDuj5jV4TnhLEES",
  "key12": "4jnBs9K2gJ3uhsaG2os8PHJhoCh2bio7vdaAz24b6BBn8ZXaeVbDP9K82e49C5f8j3gW1YWjP8dF5TLcA5c4cHEw",
  "key13": "4d7ATB9PRw7up7JPrEa2EzXoUfq7s4zK14HQ9FJqtNCqGRTdexuPfRkdPDyagTGHhya9iJqtji8ErirUz3s1W6Tn",
  "key14": "5t9NnuancMJCeVWGd84pKgNTArA1zvuqSBQ1LeLYwjERxFhjV3KtjdfvoBZWHHp9mKqe6cGU3uGFmCqjYL9X4HsJ",
  "key15": "3rCMjkYdH1S4mvHVLu8uptAZvNu2PEWmeAUBbCynbvGqQnVAiuN6FQu6iSCt5ZSnndntQ4hYUT4MiCr4j9fu5UPK",
  "key16": "4TZv7mqNwGMZrCz5uzQ1ehVRSuSxSVLZzQAPMyMQsUrFmoi17gzB5vScCJfKLdCPubjqdimEvMs7Gt8R8BN9MPG",
  "key17": "52AuQtA2J1jopAz5kbio5asHGGANEiN5SvhP7x8vVmoy2pkaLCqEBqRmo3FkGftPgmHFiyDuAo866FeQtgidpxhN",
  "key18": "2dW5brkvs9fAXx1Jvej8fw7K7ULRFyVtnsUTkjSeFYA5JiSQ63XdL7CZosPFuPaE7GZd2UVAq6UB3QvLnhhtTYjN",
  "key19": "4Y26gy6p3muLvbThhq6BxFchFiBn5wAn26ihyjqh22gyYDmMZVrmc9XBYLgbT5NfTFpv7NbZqDcWNHxqbEq8u6P3",
  "key20": "4xKAV5Vzr32rB5ezCjuHFsFfVPHj5GKfFCHikcGSprWYbTGxnXB2znQ3NaNCuEDkYKCu8nooZQEEcF6jwpgNYDN7",
  "key21": "PA2ij4PTVx9m7oXU6Qpk8211AYVhxXuNxKzUhq1Yoob3CxMFqgexW2pL1TwQ4p9mjTWJQgFf6dVtRLKEmfZ51w7",
  "key22": "3FU23xDaGLaL9U4XqjumFZc6YiDz9Y8iHhigA3a9UD7kiBxFWzQyjwC1VmT3ePFdfZSec3H4JkQqRMU67DC3Hevn",
  "key23": "4CgY4C5Nywzsc4SMHUxJqkaptuQDYQSp2DKVRGZ8oX36Tn6V9yaX5Fm3E3vtDWhzgqotwWDTxhJ8q85azdqsGDUM",
  "key24": "55jR3mfNtDv3a8aT7kzyGja43AuXkNgESYKYz2W5ioRrH7wBN9mVVBDpUiADCpaPR9xUiTz244h437SB5bjwocp6",
  "key25": "3EngXWe1wGQR2jbDnJiwirQg2oqMkNCXZqZM1CfgMzB1NKMfb4W2qUgwkfHRKJ9PSHM2h4yids8ao2MiCW9mGc4e",
  "key26": "4n9ThbVreJYh8qC89tWAsegbZ7TZjbjw7oymTUyUsHsDh8DkN2xkyYebUXRWUswhfBnREaRrRZWAJcKMkPNeP9se",
  "key27": "4YZbiV9B4jNKxGipcrPGWCYNLSWzoSf7WKf7anvjcDXVJRrPEEZoCx6JUqPUjbt7R18JgLKRZTWGZvkEZH8ui8NK",
  "key28": "2e5iqrHh1xVCYf863SkoK9unzybjcioLxWpaUYD79E8uHV8fzuPBuazcxTK1PPxGrHMZw9ii1tGuHqtJQHzLbpAv",
  "key29": "1pxmuiXoRx8Nr9iWVztskNwUrq9hZnYq74NASVoyrjq1sXZpbXbR7o3v4gbR8s9SA9LXR5tvcUCoZp2gmgEzSAU",
  "key30": "juUpqW1Vn6ckb2S8zHZrCUdfrGYcv5xtFSvgPFi9cDDpGepkThMZmpty74HLpF486EdnSDS9j7veicvvQA6Apw2",
  "key31": "4zdsu5d7pmdgQ4v1KMSjNZ5m2Q14phr8Uti4KiHoD61uy2NtwQVu9JStvCPt1AmCTyhwzwPm3UGFQnzYsG6Qgv3t",
  "key32": "q6F1soTS6F3g2LzbaqpSjeG4MAJhDXWdB43iqitDbSEVBuWhsMGf38KbdQyCf5scjQpVSSJYTh1fG65xuyj2Nvh",
  "key33": "5WDaqBqMJrPWka4thLPyZBXAUu23mhr5yni6C9tR9YG6RPXDjnxGVRkniLSsAMq7sYokvTpe4H4Hb7aofyF3moU1",
  "key34": "3wikphZE9t6UhMyJBTAYPdUVHL19fC2JNLAPkRto8pgbemDpoAFKCcuS9i1nk7tGmNZDtobP9JhhnhhUhq2EvG4n",
  "key35": "3LN1ETn1B57DfqP1UvHuFQ5SWjJ6xAqUNHpPx9GDp9rYgrtkhojeMYqqMTwWzknsf9HQMHVH2RqgTXpkBXJphUtf",
  "key36": "YKZkP2EfmXWsK5HvuL473MLh16rWYx8tHQBn8f4gLNFFy84U96xr8N44CfvntJxZwnUpJz822pyzj63oQJyCdms",
  "key37": "3PvnVpKVACM7yN8BxmmRuUWLK8q28UYGrPLDspiPtDNasuSphn985kekVqF7353XStgmGPvTsZ43dmKhzhbrXUxQ",
  "key38": "4dDDLHvpR9oWqZH6WEALwe8qSSZmqPMNHGoSuqnTH5u6JwhZsEbTo2mXNvjgYggujqbYUWPk555dbzPpvRWUGhE4"
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
