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
    "3f9YWBSANzeqxC7pC4FcQmr6vtPa11TLCfAR3m59KkxDAFzX8que3K4NS73ejx7GRgVBqWauepcUtZ9xDzPGCLbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jWJvQCV1XuMQiUXD7naGTeGzBMC78PQ5uCVmDjyaiz9qGMyrCpVU1GQzqRduihENi6aBYFuwYHA9c5kx38j7AXJ",
  "key1": "3oAYzRfNi6eDfUCw3nwUikWmdwStWWK6kCR9AGPHxmbnX9bSd8QtzPaPYVwZmMzcVn7SWE1R4BoBy8hPm4dCYZhK",
  "key2": "2w1HDvXSku3K2RzXg7SoA17mG3FMnEw2CcLCsEB5fE8J7jw8s5GzVq6t3CGBDwnN693ck3K9UmakQd3KeWvZCTcM",
  "key3": "ELnnSzVaZ9JmhwsiPsgRf2LJNY7tPeU2jF1MiBARx5SofpfUzDfJYQMxQDwr6yL7teNVkitMLQ4UCrG1zBRXrie",
  "key4": "4XBaYk6L2UDHcRrwHWimbgJWXvkJiksTGmNTZWpa7drLPHdis9km2i2NCkmDXy7aC4UFkk8RnXvo4nzGX7hEdN4f",
  "key5": "BBpczm8A8xNhu3VrTq3aCcaNFxovrjUZEZ8YuQyzr5GA4DdSkH9EAsmYpxYAbDFcQjqTnPQtrPQdR7MAtg7gDfU",
  "key6": "vmi7pVgzws2aZa8E3jDGqtmSHmKdRBku4ngxwtVQYVwCcKvFiUrrkGfmGvx35a8wHhBQcqD9xbsoyrWJobA4gd1",
  "key7": "2DQUFmPinnYkV3kJWDStUSBrij8ZdcpJtGskMS7zb8H6KZjmTPMCa38FvcnpjvhQCZwV8ess6tJsWrWrj1XN6q2c",
  "key8": "2LqxHHDGWob3yVxYHAXWJqcohe4hoy78ctxG8mQ3G2VK8FQydH8DKoSHFMWJKehayNBAuV3JzfMsQGJXZ6BZ4t1b",
  "key9": "21eC9ESppkb3thp5fX61o2UMBk6iPYNXzeYZUuNjVv53g1PYSGPe86irNtwMYktN8Aa7WZY8tj2yAZze3PJV9iGS",
  "key10": "34ttPJGPA7dF3quCfVQ9n8SEwBy6z5HKXQmkZcrUqg5yTmpSp9PzSeipWk7U1JxS2qnZ4SZSC3dateaWpy4dGCAp",
  "key11": "3KsshXWM6icph6DPvCcXTCGBsaore8f5PBXk2cKTR6bjWKDD49y8Ljd1CV2mBx6MwbrNG4zTazKATbot4CVhymrx",
  "key12": "4th8qfGNxuupyJBoEbEuF215FWEKvnCeNUrq76VqrJBdpiUqcg6qBBYstqtE3vFbBFK56BAbhHQrzRU2Q7eFD1nP",
  "key13": "UPwHPBm8xZbdsSJaUAB6cBzG1GPLCk7QF5Gn63qfNEVFx98Z9YAkDZeLDkQkkFiESJnRrMi6VdNCdwdMxN5K9Hk",
  "key14": "5xw8dGDiE2Xvm9UKEaHykmk72Szyr9Yb7vtdktM914ezoRVkccrUB2mYz9BSouFDJvHkN8BEAkRfhaW3xNYTMFmt",
  "key15": "4sv3giVoZaAycSPLj9jv3zY9mJyfK6bcXr7KqM24bc99D5qkNRPmZ7zKkcaBw9FGorfqrqwwsyym9TzCmQ448tJZ",
  "key16": "3WaRbr9Faq9QLLf1znzp4aeV8r7mVkLCwGybmkHT5anWxAR4uQLL4JxGfaQWjx18ihhVcrSJrsrU62Uaoq5v5Z7T",
  "key17": "4tsGtwR6Azn5buQKX5Fgq7Sy4ubHCnVNtaLtFt5BphwagHrJoFp8P2Lyi1XkQpQYQRaWksRuAWv5ocyPqrcfN5YH",
  "key18": "2ezNwgjjAP8pF1QN6B6rLrqRPyqXihRESmhcPkhuErPW3wGJ3WqZekbfcdJX5XcWShG85YJqsWwAKcam6Zjt1Zoo",
  "key19": "5VaC8qVjGmSuJRVKyvTL2f6q2yoxA2ye3yFRfj2xmbX9EmoE3cvFbEmcU5XiukeGPr56NoixFm8kT1FJkwiKpZHY",
  "key20": "2FsdfBGEJN5MRa5kxcVA1LWQzYsScaPT8uAgeFC9cxRz3n29vVxS5a4T5qQeoNEArkjCwheHdXzPEwzS644b5WbT",
  "key21": "2ReD4EWCHjpZgq1qVqSjJSErfAqqG6BxAP6yJfEt5KPxxZCxfVBTEVnavZ8ujSVb1z7XKita1FnpfjKNJTd5ARj2",
  "key22": "wcGVDkaoiEehxmM28E5dybMgsUXJj8mVSuvma3dgiQnLA9KFYbWrDqieVjyw65CpySvET3ZHdPNXWdZK78bFBBP",
  "key23": "4LLwCRm3Sq5grgahxy6hgzvB65114zb1cCxbjTkYpYK3us2dTenhP3SSJqp8HK6SfE5hmpaKptmiU5C2TYLv4Ks3",
  "key24": "5hrXympHuY3RQ6KCwkejtjGPWwrnpvMPUHJZmgb2k4WTpG5EMjAHrr2sq28myKzTA2BcS4319kJLdTk4z8cb6i7T",
  "key25": "4xTe1PKsNUNnEi5sDxB9gGPihrGdBhjK5TdauZqMxUEVaZNivWiDokGecjkrz5W4QZ6F6bphAPjs9PdmcbXZ2CGA",
  "key26": "4xW3k3g2tEkbtujVpyHGJSsNCtEsHmtHz8v72SSfs8qLtGBAQC66Nfg5EvMNXP6Gsz9GPGJCArRjVpWu4ha4E57j",
  "key27": "3vhQjojXNgGicfp4H7Zqr9YvEvFVRWZJY5TmTESVju4MNzY2sUvhuYmv3a1d7C1TDajH1xMswT3nHe6cPNSzrvrB",
  "key28": "5fwMeN3STLS4iSqsfmYMbc51XrBqA3S94VKUoTu77yASWJzdsQwQ1cCiCShBZPV3tAou9J9asMrftyzJkdg1B9iq",
  "key29": "2Ps8BqVwf8fLKXDTJuoegDkXkhLngTudESMFyossVPKzBAM4fdwgNxUh9RfkZpVEhQue4Dxww39SXuVBgPw3AV4J",
  "key30": "BSWPpdXRxUis5rtnUsAUijhGHbs7AHuZkbcJPMKBXc8Cr1Srv3q7v9g7u2zNX6943UqFPFc1K8WikaupzZemUaZ",
  "key31": "YzhNrd99Sn6qUQW2v4WT2VuhtGAem94Yduc92DB7CSMLkr8yNjRu67RFRhyuKcgJmyVUeCdfqhLw2ZGynHkj2ok",
  "key32": "4uKsV8Votkie36ZUuTp27nUqwCBN1y2LZGjeyFA7RDKNxHRKwM6KPdqJDQZTnqeK7RZ6SxD99UpdKLXJbe49aNpd",
  "key33": "62VyhcbWJfaVnNWUNniYUd16Q9QGr4KovpDF6oyhRuqBK2B5GKkmSCuAVkCzSbRBAXWAB1LqixNVJ8uKJBEUa35v",
  "key34": "48uS7WSQrdByw73BnLSZUFQFi46C373thLKyvzMxwh6Ka2uaxLUs5R4A4VgZRZ963YrX3PE6UNqLhCuftJqvNxpE",
  "key35": "E5LYh9S4BYuHpzFgykxpg1gzf8QYKWfD5ZRsFdi7Ch6e9Avm7jLWhysUA7yS6bt9fkH4YM6MXjN9ijmjUrhrD62",
  "key36": "dMo5UP3VZbGbCWMLXCge979M13VPv5aHhk8AFz5zRfyW6G1WmdazVyZ4naK32tcw3XvkMAZeBDUWHFV6p8HttUh",
  "key37": "4RDfQMuGwjM6zaPpUkjtSzXVKbekhgYyy7PbtxhnEg1ZN9mddwbg6UkwuDf9ASVMtkmkP9JWXUxTZRda32i7Dbpv",
  "key38": "4EpbViUPjWftPy4PxYZvBa86xknuaPcfdeYAD6dbwqkrwdr1vgDvYWZCXqgzBuNHe94pJQs2E85DeieNCWRoQDSJ",
  "key39": "5qRnyk9Ym76BqTMGLaXkS4JzXTCyiNQnMS7P6MgofD2TJF98zoX4bRQXweM8izVcKFSoFN8vqmGG7tTLKZULgsq7",
  "key40": "66zP6zeaNekEM8GW6CdVeETm5zid99Um2nSy4rgVQz31bn3gadUGzWgoSknHwoGx2UkeLPkTWTze5uts5MjqRFEp",
  "key41": "3EKhxpq2E8eXdUXQ9TxdZrqUKFkiujFMGnuPcr8kZ9uCCBmmmgwL5J2u4Us8T8k9haYYwL3NVUuYttjWhENHdQtm",
  "key42": "3HPHpFipPU9YsYoQcxizNNJjeyNr5fS7BHYKMSL7HVz4fTaxa72kgJFuj7BggwyXLVbQxcg9iBvxmyNovRc5Yru7",
  "key43": "2PaYhLXwJWURZEHe4mU1NZrRwxHnMhRGhXGefMMiSwuBL7P921PpqgpQ66vbXBjJn39q7KntazMBRAx7rzzfAXhT"
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
