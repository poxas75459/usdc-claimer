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
    "2vUu1qEzVwMoZ5KBwsSxTx86ssumMvF9L9qkDSxBaGGbDJgDYthy3FsJ5iphhKkqz6HjaBwuLAmQi4ZopWcRSRhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ean29q8ahweK1CSw97apCLgKQNMBAdWr2cBrNxPt5sQKpcrztMcyBSHngmk4XKgB14Np5LWvEdPYmeYm1XvG2KC",
  "key1": "3vZ13WPvA5DrHiRAQ7e1e4EHVzgqGND6zcVharXBf9GbUFEA5y6aUUAHpcuT4bvw5FkNcCKf2TSxNuAjBMQwqCyD",
  "key2": "2L2rxqmNkSsxdhvNXz4BdczF4ziHiiDuFUjaBXPPhwjEBXGHh6nkYZZuqg4MkHbR9xmezznqRykS17aEekJDrDhb",
  "key3": "354hf7yt5DGrM2YAuXYioigjaN7Jrwv6pAA2TFZzRapEAzeiPLRvhDbx9XmvYgz3sBbgVYMLzMGURiLMPo45tywV",
  "key4": "5bgHogZFQTsd3LB2JCEkRh8k9YmQ38bduBgEU9ddyV8pJSBxq5uHX9EG7VhK5Zq55E2gdrUkRGpUXshTB5apqR8d",
  "key5": "2jnTdCfTsTqDH29XXpov1vUaT88wKNYGG3yRy7VA4kaGGagouq2wzATyFQgSXmqf6skt6PYcGP8nMLV7Sd6Z4sSf",
  "key6": "2Cd4bfbE5h51hCdnwJ7gzkFSL7LMYq2dTDvzxGK45SNPtfCSx7HaBv73tJv8kZmmgQVRpqTmbefys8yU7ujK1zkP",
  "key7": "2P5vrtdvpbGhEj937LzT2BcExqWUS1A3WS9xCwN4U8AyhaMgzaKt5f66YSn6brmX3EJaQPETEx7u9WCFGCrHb2RG",
  "key8": "5gWXHYh2r6E2C9fjCpHzvoEEqoLVyrK1QmNm6bd5GojrbhVH1p6bBR3oFwE7ytpyaBX11E5uPM2uVvjuW7AS7Rv5",
  "key9": "4d6Ge8Py5VZCGR2jKDvPrMA1fgJZP3sRDwUjCqR3eeYoREF2AxVyq3gTKEoD2TTgpsfCwVxgiYrvJr98LVYSJkhc",
  "key10": "3xX9A5irkkChJexmbxAhBRNMvenSysHriNrYCW3hjKw2NDvmp79KxMMJKZtnt4iHtG14JETHKRE6E5bAG7GDpwGj",
  "key11": "2EEZBPQ3NBtsgphKSrzLXJqeBTXPTSHT79pdxdKgm7FNHqUkAz4B6FprmmPvubYnukodrQZWqgQZohV6mutiKBB6",
  "key12": "4e54fCVF3Vp4XbxVTU8H3uPTEivXcJMLYVNMxAWqz1gw7j4FNHrefBaqEiwaEPyQ49qcTmtcYf5xBMbeP7Ev4h1K",
  "key13": "kgCNaM1a1ANd5rUj948Q6muTvsdB72WNyu7y6ghA6gWoUzLSQ1PCUT6fwpsQ1AogLeghcSW617yy2vUfyo4xxnq",
  "key14": "3kSgLYyNJgY9rVDFsezXhp3BJMKpVceittaAgvi76nuZYXA3USzBhuY3sCeDLQPSM7x2AWwkDcj4jaKrt7k7cLSZ",
  "key15": "4oufY9A2BbUhH3GDR8hC6ZasPG2osPpDTKAYMd1M6iqAobVCjzjvGNHg9uMRf58y7k51U7yi6PZD2wxmFRWBthDJ",
  "key16": "WXn8W5C6g2DBSsRUbPQEoJP99ucyEFzkAqE5nQi5RnfBwL9o2vF3z6hAQt5LWDgS4RzRRtNhNcREGEAQmrnTdmD",
  "key17": "6feqv36si87XY6vQFd8vGruMo9acTgH1bNggUkKbxSSyXQFsbeLNEvJvHK85Jsj7thwcEfriErsjwa2VDm1mH4W",
  "key18": "4DLKAkNxmABpQtDirc1EjMzbUfcLqWPs9wpv2AyT1dj2Q22NaSDFyN9hJiQXtUw6TfrAzRkRnBst9HTFxatF7kQ4",
  "key19": "3ywpRrNBhkyKKexubwm4uT6wGu1NbTJARkE7H4fG6yCt9p8uN3u6Vi8ZwS9X2UnUX2v2QPdwqxTJHpvFSYSuaVnG",
  "key20": "nS754gYEQL8LFPyaqr3Tiw9X67y3VK8zkmCr96pND4wupb49mkrZ3AxyFd3faqweVtQr5MMURuV1eP3pMjrNvAn",
  "key21": "3pZmA52SozgKB1qiEfpkzpaxajXWgjq14eLcQB5PELaHcxwtUVyi2JFCD2RBE3FyDDncAB4Xtk3hDrNMZPNbhPH",
  "key22": "2gtVQLig7fWNWBTGosFLDSWvpAXh7eRRNiXK5iqo4rbseSLR7CmW7i4Gsv6Xq5uEt3E7CyKm947kZWn2RCdE9NJQ",
  "key23": "sFt46BCvj4bwtDWxw9pbn6xayRwf9KcjDHkNP7gcSeJdFsriRTvr6Shvd4o4vVr2fDV2LgSS8BWWzTkPaDERH2o",
  "key24": "5ySUidccTq3ZiM7ab4jCwjWz5cgssY96NJTXtv3XqJhu9REBuvF34tDPGRZrVbr5VRuyrYdBz7htXjZSa6f4J2jX",
  "key25": "2sNFxGCcYzMoRb9RypK42xdBxPeubMxK3yUiVZjYx6Dy8xWm2NiZfvnBV6CMR4rnhvHJApHZKsFkrP36hbMVbiVw",
  "key26": "2w9UAqSp2jyYqASFDXbx58Kyi7Qt5Lqp53Uh32XTqSHwBCwBgxPrpHyJBdce4LmwTVZsi8HZrP5sdgCXTi4pQPab",
  "key27": "4GvYP5aUxa87Gtviv2Sgi9aSpuFAbEF8u9e6Pp8136KrE1hGBUwF2AsjYk3DHqtt9dKmQG7hJT9XL7Mh4fjY1ov8",
  "key28": "5bcEztKLze4mH6UgzxLw8vwtiUg4DRkKS6ih3P6gMRhcKJ6fK8zDEaXQs2CVnsFJUGPR3Dz4naQ9yKdSY9FsXwAM",
  "key29": "2zU3pRqLYQXm6NTh1XakDLh4MTvuAEdW9DZBDgkg12TmiozpPPxCVub6z2RsefLjqqemHzM6gMBqYM84HbNSkhkf",
  "key30": "5JpCBtdr5qD2QrrUUdz5tQqGEdPtH7uyXTAKsLhUzqsrpSyMRhp2yuo2phfSpTh72nt435kyVDSaBH9sPy482A8E",
  "key31": "2MkTtjs1MULoCbgVpxLgfPU9XNCudCHQYy85iQLcfs34ugUyV4a2QBRRX4pSnh416MBVxLwtrYDSJTKW93YV9L2P",
  "key32": "121NT6an5vcd69Abw3EE4pJ2uYif41gteGJWJxnhynNmE2rQ4VYRmzy87dd9KJJhp2G5KjbVBuEBgDmprexVqKMg",
  "key33": "4PSV4EgZdRPmwzDtS9DgaRifKHLEk6v7xomiq1VBR2Ln8bVRGcRBYdpTibWo3uXW9EnB8yh4PUztDCZTTcNp6LdQ",
  "key34": "64jJFsF8vPGTMmQhX2hVSt9wMoxyxp2qPoShpLk64gcakpsEHBmYLTByUnuyDeMxiDTeRaGvRdcybo4od2ekDCRg",
  "key35": "59njRFhSAsAY1MjGdbayGafYFnwspE8Xxp2GKjay4Nvc361rfyWPTxcXNA6Win9GLxByr1rYGjGYFfpMwHZ73BX4",
  "key36": "5fK2zMQ39ow5F9bB9D4u52C72tiqvCW18bLsGHDYonR2eCFEdizbGmtMY5boKnBcZURh8zEhiwi1dtu1erKonvQp",
  "key37": "2BnRFrGFQh7rBXTYy8DH4ofovAAd7jCHGSacRtAfm8EU5NDYijRprqtc4geYyj1mApXcobzjFkZst6CmkNohe3Uz",
  "key38": "2PcrigzFVRMKgYfSG2yYzuBQ5byH8Rvc7NpFYoLfm5oUrxiVcLvZ48mVwxoQRkGaRggDiautekCQSZN5W8c3YnFK",
  "key39": "2cBiDqCNGHRLUXiHJLqD1GTf9doMD8zTkGfixq5bNzgNEND7JugR1hs3UHpEF6Bhz4S9s2rnSfqt75F1K9CCbg7T",
  "key40": "5L3DNfrKhPVibrPobVhcKgFgeMWf8MVh1ZbcGPXUarnszzushCGkWNf92Nrzb1eGhyvth6ynUuoewWE1yapfn25W",
  "key41": "5GtrbwdxiVLGANAsiWrYnzzLaara7UuQpeDQ9oi8mBKgqWmRzkA2kBfEKs1D4Jm2BertSDgQFgRKosPauvRgfDkU",
  "key42": "492PRsjAMUoh5GUhKADjjDeZFB3fDesytMU1NiBk5mpvBcvHUhit5Kbr3g43VkTvBNkYuceKZwmSy9YMsCN3X91i",
  "key43": "1RhGhuVrWeLyFRn24tsPuG7mfoiG1mZLuKJVAq332PwEe5Z5kJeZqUnusoqhgHVV5ogTf2sz7gCpzKRPdN5Z7Hf",
  "key44": "2ZJQfMiTfmworRRcYxyxkyY2JkwZTq1Upc5czLzm1i9tKrAs4SeihNq8CBJhUqMiDqmf14RrQ5uSqRBLNu7GVRxQ",
  "key45": "59p5GTna1uQTXShn8J2dF2RtuZiX6AY8hYYrQxpLrEGfgLVxCpzAKePCdv7FaBkiNZDVyJsjtCvdBHmxkCy3yjtr"
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
