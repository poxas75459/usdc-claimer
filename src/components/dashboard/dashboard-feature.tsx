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
    "344kZx7Xj4d1mMe7T7kJtQpbidcJ4LHXE2fgSfA5b3da2kihaDLDxHfxAYW4t2vUx67nyNkwaRNG6ctsuzQo8JrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mB5tHjxv7Wcg1KyKJgof32Y2XdnQUCrB3aBM68F48xFrBt6512LrgFesahakpZSfZybeXji3dqvTSZ5D2y7WSbv",
  "key1": "MnjTaBvLJZ881p4bEZSVtDad8wgMwTk3v66EuXZvGmVsXmFcCNqzsmbTVzZboTfre4hkzBoTQaUrWMoeYKwwazm",
  "key2": "5WYEwv9PmzixqjVsLHxiLei4cMFrMupuSxjPVYSAVe4k19LZvq4MFK6yik3f8VoxL7asjSoPL2XnWAqb2xPjq7Dj",
  "key3": "qvveMXfzTMmxoDmEhZGs2jaxHTMHb5X8q4apF2LF1H9pouK1GQsH3jwRKnMspBZcSLymmnwxicxkno9v6zQdRKA",
  "key4": "35Lb5xAekMt8L42aMkYMHdYNTcSc2eCSFuyVaNUrSw4q2uu1WnXWdEM5XKDKEB9dA9KCiDtXq3oEJKMzArsi7PvS",
  "key5": "4PHZhgjy29VTSLpR4u3kAyBkqS5A8qep43yhcUtJTpKTrHREjrEWRNqwrz6Pkn7AhyV8VvzV39u7vGia7DVUd3rv",
  "key6": "5cXhDAU8kufMXqE2TSrcDA5LPuhK2FeNjLyiDQDkXwQqMKVj7ZVRjsn7z7gRtYVw9xmsucj6TPDtE8PfdKtaSEbe",
  "key7": "4ji2nM9jxy4ZC1aDq2AB57AgCYqRvM8mdH1XpJVSgmZ2szEmSFDFPMaZBzov1oakUP3w2vSsMkfZxZyzvBUeh3kQ",
  "key8": "4Lu9VLEyS7KgS6NSjqREn1k1ySQeyePkxfionfRVA5QRfCytvsLu6KMdU6xKbFxuLVQMEVPutbppGKqt1hbAnPJB",
  "key9": "4KXKRQmxRnQMU92iKwzJcboYP7MggaCMGzA3JZJT9RXTPZ75F4jpKLtDBVMdeAfFyUpHfPwHQDDyNPCxxcqtHpoH",
  "key10": "3wC7No6tDkp6cRwCDomRP3TVaj4LYF9Axr985a1t6NYhXTNtLAkUCfhHfRLvVV5T2Wv2E9BF769yN7asLAdRsj8s",
  "key11": "4NoyBNfNqXneBbrK189dibhDWTfbhX6XVofdp7nM1qa4QDKuhRGhSskVvEENGm9kBeZEWzbDbxmXXowgPDjv3rHh",
  "key12": "GXiqrsJPe4iYHr9Dq2xXVeLNhbnLAwnj9MQAXbSBdKdSeZ4Ra2UWVptH1mQ6zVrxjf4Grjc1JD8rYVMjuhGUrxA",
  "key13": "4itNBreJmgmnP8EpD4mjXfQfrxPdxGbcCjo3MdivzGmGLPuZzvaQFmt3Wnpd3zWyPZ4fgbZbjo8Aa5CUomhKnF4a",
  "key14": "5LRZC9uyzJQTCzyXgA2j7j5yd5tiKp1UyxkXkGgTGywYCzkBE25LX4sb5eCAz862S6VGozUD4N7p2z96BReFgMNo",
  "key15": "5ybYj8pAGPLV3BeEqMVwtf9zBjrZCPsUoaNNkrAo8jUN4v6MGQ9uTSJtkSXVwtG5pHZNgAD2z9S7ZyECaWBntXdC",
  "key16": "4WY5esR9KRsmXPmewy74rFmdHfXAyZPnr9CAPqkMjddAv8EitkQpMm4V6JXvbmZ9pQ1apSmgEdKzKFrMvewxUzhU",
  "key17": "4Gf3QiTf4iUGMfApFbYtURoRDuGfNtBCR9ReN2xqypUTcj71N6KaUkxKmZ4BPpPeZAfW6BtSCfkNKzj212Hm3XQ3",
  "key18": "4ozuAeRdr6puB3oaRXwDcDzQiJAYWxK8pvHWTPdTYUHEUBmcFrAUtXUhdnpGdXvuAstuwH2TGgwC3JLzJsxjvZeM",
  "key19": "2VpjjkmcQ4RvifAKugguiu6mn1JJNujwCbjRAiVfs1A3mmjwTkuzkFZw1U7beKSGTF8NZwA5BXYVVPFhdbzhajp3",
  "key20": "4TiuN4B7Vj6xZd3ATMQAoYcvAcvUcTcHa3MP2YAzNvWdf522TiQHcNB871sK5mg1e3MCJzmA48gocFGmW7AXwXTz",
  "key21": "5uGRhuWqBuGCFwmMHB8TN3udiKDSP59Bhy6oFcxwMkaVxmaNwCpVJhMc5xwErPmPbG56tKfa1884aSRkj6MKLqyy",
  "key22": "CUcpGDCM7RvCijRRZ3pUgScZDQAM8ypNbtVkYeu6MwWutMX8ZXBvHoPipLChJsb3GZrnzYuoP1edKNJd4zbKAan",
  "key23": "cGzhCt8St2wcdUuRStufMAKETmwoDjPw7sf8tVE6i3S1b7SKGwyYqATLQhqkqSHCLJTCQxgnfDBA3ptmuixhUyg",
  "key24": "59BA7SUWYT4P21WUKEyi7cCkffkDUzX5xaK1pcqRhR68MhiNqQnKipzWCgkyKNyeH2eUjH5W7f7yXmzXtAhokqAF",
  "key25": "3Ybf7KaCcKFVyoiFrpYCQDeH8ygCqWcUxUEswXBpoN2v5GJtMk3WjUyMkABoMDw6JxYY66XUmM1Htu7tWbpwANov",
  "key26": "5SPcSs3GfGnszFZ4Sp2eBoa6qU9U94HfQTFrS69unU5kQ5jLRKDCA5KL36NPD83CEyVESA7jvC5g6muQDZSQwCge",
  "key27": "duJYQqBXrWbCpoVVBbdGYACYwxRytvTzzkSL8UTJFra2GXvMTkiWmM2UiPhzCb5Cqfc3Dsn24UPUp4VWhr6ch7D",
  "key28": "4cSdmLqbD7jtQx97R3z94eNtLxFQJ7Gtta6zHNt9gw8brkegY2GmBeGciXhj9jJ6X6nd8ocPCs2DpwB4SC5oUYTq",
  "key29": "42cN52omLPLRipFGhnWDqPLhWuijnAok3a2kYRBbrm5rrqsanDMyy5YmAuf8sn94iFRuRfk16xyAuQs4zLZ2RLkv",
  "key30": "u6JP9gq4py9fVYMqvGJ3UNevkutbZ9s12jpuoM8Bx2owKoeFN4v6fcdypZ37wEZzQaufN75zPFLxY5G5b8Z4jQX",
  "key31": "5EphPLnR6ALyxSCfe79eLAxi6FKBmZnKgtky2shQe7sKnPug1P7KPZeP6WVLJVxkXoAf3q1r2hn3k8bqsiy9HCh1",
  "key32": "3pvnn7mj5x7YWNhdYGSvt9UXbAoWz63aGbCenT29tWXvmFWuKcqvrV7NYNBKwyNHxa8mqkbEMCRz8CwReZskrTka",
  "key33": "4QLryddGAupbXFwgxtiFrvNi4napWv7wU8UfmXQoP7FjeT6sKTbDPBVG39A6qho6cjQ7y86SeEhsZDbUgqhibGdT",
  "key34": "3s7JhXKGoqsve1j8s9NeH1jHet7XocWLJJYck484aiV1Gn5Dinrum77fG8bPB89ZEbd8MvFp1BkRoNpmyg3fRUFP",
  "key35": "5CULg2Q8fiqXoHniJbfVHUqE9wzvEMs3kqdBD6kXxtwpYfNvapSBEBithd4aHNHchMz1kgfPgJcE68WayR8FmcSW",
  "key36": "3ZPkD9kRQqknGeexyobugLa8Kur7ebCMZTvDiFofwzniWLqDiTTKT3y8uLunY4g9XvR9pYrusy9RwkYaZmn8BNYo",
  "key37": "5KbaV24krMqxTuNX8tcCHbPPs1nCoLddMU5EpUZRdRtF5ntXFgLyPpB4o7oh7XZadRWmXPJYs2S1KsAZSNkTSFKH"
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
