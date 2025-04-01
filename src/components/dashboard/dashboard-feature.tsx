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
    "2VE2syyWsgw7JquCoVBUg5GDhPxCPDVdhC4F31CmifC8h4LnHsVxNreJ9DCxqMn8PChshDjUcSWkE1JgCGaz7zGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TGvZNKWHFwXwJeqxEudoh5uG1FU4ehwrAuRDMiDdYbepPGDPZ5JCNpk4MpM8n2A5xvUX4Ei6SWxP6esDVwfPkt6",
  "key1": "4hhvrY294BUtQ7t23bQGcKxYgy4aLUYqirCdBAHFjzkYYVb4L3RZGeq7xxTmLYLCgxssdxpJLp7AA9nKuVFhB5Pr",
  "key2": "4NsNXSwR6sgXA1FgboALjnqcCexwMYyGu3dnpAqL9zU39fmZXX9daFecYAJfq6iTNt1fURVL7QqHBthSy3nWfA1E",
  "key3": "ERWzrz5wUXdH2b2NsEV9ar6NkFJcJ1nVuC7LCSGMeYpDXFXJxqMD5wsCpj5BH2QiNpiUjiewU8RGr2VmYTELpyh",
  "key4": "3AjguQZvBborg53yf1fLBba2uVJB8diUNKzDCejE1dzp8kQV1UzPSzHfPghD4euACGBvUYEvUgfbiYKCs2bUB3Nd",
  "key5": "2AigmtEeZALuEADUULojKp2Q4V1uHUQuso51Fth5iEpYHWosRgHLHn2NRk2wNssSB8NhMgabqykYmA6rXtpKgP62",
  "key6": "5kbhhwFbQhSja34XDDvfUC99Zkg6tMtcS2KQSrbNutMKFiQUMebjXDHSqU1SYatFZiZj2zjxkFyCrp2biHAR89d2",
  "key7": "2xBVkh3VrC5dXAvi8CATt5yfwQE88LJDU2Nf4cRhTX5XcEmwGM2xB2XLxyAARJP9QTHhFREX1r5d2CJu5pR4Uy8f",
  "key8": "255AhN4HgH5oowBmTPaPDo7fYTv4Fekg1ibDFNdchy91BoEmc7fGt7uvuWNyhKQzZzwG6woGU8QqUrnsMkqQt8SV",
  "key9": "4DMZeT15PwQMtFJoHURS5vnkT4iXL1PTnLUkGduN3eEDHiSAE5pxjYaUkQoCv4eB7NAfrDyrJVw7mJzYMtFWZBVM",
  "key10": "5tDnnC1XBU5SyPm1t5nbygYNQGt8ezjpU19C1W4Qoy77CwwxPKGZQm2eTPjkzhNoWAjNc1bwMkTxmhwv3JpbVvSr",
  "key11": "5AzN6H2gmeqAGHvxqzcCnDstSrsC5ACKnpsqSDyMTw2JdpzjgaeUAstghEhiviyc5gfTNX974F6XR5GJJnKRcQdd",
  "key12": "3g6tiFCNZZif5KfeiC88ZFdNZK6nuX53P7uqMrQPCLwJpNddUu9P41dgB4XgPLDSZUqNBHiE6NUrUASDWFra7DDk",
  "key13": "F4TfcaVeKNHeDga4fFnu6GmkzXujoxYvdbe3Shqgz7R74PE91BVgCYJipmwbHveyXPYxgNxnGCTmnEeHjtWwqjz",
  "key14": "4A5qyVraC8Bg6n345vZcn3yhpKXEz5XsxEyLLPd8P3BWVfDU3dtsaHdv25nh6CSgZ2vyCc7xJrZdQUQKL1htP8hz",
  "key15": "5YynTqY56jE9DrrWoHdBgH7VEcy9wVU5NEmWTupeQ3N4TgGuCsHtthAv4yyGPC7K5MMhJncNqiDYDTAJDszmEyrF",
  "key16": "5sdFmHxLrpstCWs6Zmf89xPotwCoiQEWAFD7KawooPgqbGJkVCUC38M4GYqkm56RAiHho3Vw7vfYLyNJc63ny2mv",
  "key17": "C813GwRMVdYAupE5tFLCFHeY2VmxAp9AAxrGw1rceWxeNgqZuRJbggZ2XJJkVEsyBtyXQJFP2DtDcrXzGJaowUa",
  "key18": "4sNUgZunCchMHQuPh4xEqDPMspLAPF6hEUdQdfZ2aKFUx3pNBzHdb75gdg1pCNVLSohCfb4tu5LRMnwzQEB33Y2q",
  "key19": "5hmmyMs7QrVZCM799DJw4STe65Ex7TfoM5Qa1hV7M8uiEEVcrwrK83zxMshjC3Jz2S3xv6qNoGwM2JH3P7BRoyb",
  "key20": "4qCFiEBCc2VR2WgTgwfV6hyf4J7u7Bdvk3Z7GmuKscYLJQm1NBXZo3rgKTcvT8BPthpWL5HPCRNYC499BxQfUwmj",
  "key21": "7HRJkH3E6sCCyBcE3xc1XSQkusWDW5kMzwWhaadA1SQpiP7NhUV4KUvdG4xXUVWyqGWT6ceTWt7pv5gk2DzDVHE",
  "key22": "ckScxHeVoaV4DzTcNjXteysm1wcqgrvEcHqtxam2DnduSwX2YnTBnQKXUEz6BcN4eXYnaMsdSQgMGCitanVdxhU",
  "key23": "3qhhdLpStXVMcRuwdod4Y66Q2U3Ly2GTfKBCBjWXj1V4ag4jqCcnX6vBmTLNYuKi4jp2RGXx5nk4ixcp3WMXBYH6",
  "key24": "2ks51wYrixUVbqKDEwUzar1PVJqbqaBjsUUCRkF4Vc63843aGd2x1MvW4XCwmvNyvkS4c4BZR9PoTVXzhWaUVpZq",
  "key25": "3bbp3L6G99i5UXq66HBndgqLqc1xeDxiSztVnZpnPPo9B1PLQv1cVsPdTxNCkMyYfd9zkz2kUAzqPkhu1kxBMTEP",
  "key26": "m7gGypN5MgffQNLgF6szwpPhMEDwpWSo81eWH5iBqbrJpQfVyVw9RLDiotQ4Xhbxk3ci1ugK8uhTnR3DRbNaqtC",
  "key27": "2tSNH1maozCGvQtbYMKAN4k1HvEDxJQ1sNDCnebPUfy9QME8bUrPnsq7oTdCj9rnCac3uhf5Tc9JNCWLmGpPk61J",
  "key28": "kkrmy2ASBj9SEM6wxuUokGzuTe39CcmgevU96f1KyvCrtDGXgrnk7VoidVwUNBQpM7fmonYQC8a7fkDWimwsK18",
  "key29": "55k7kp2QJxfCmTf9hMr9gTcdHhpHyqqji8MKoL2jJshRCWU7tXXYY9so3Zyz2Xxfw1PiDeYAsQ1Wsa9Kag8z7geQ",
  "key30": "44X7B2dX8tQUeSr4vBMCWS6SRHJpxmkPuKeZjeWrufKeqGiEC9yZK56WaqgSJkBH1ahxtMv5R527zSczfMYThTUk",
  "key31": "35HFhzr7tXgxAbRz7KGqxuJMdhJNrL8AfrLQySyj8F6runXzh1m9zTvV3Z3jXT9Uu5sLdjKUaBqQoyFWSCsXPbrZ",
  "key32": "B2ALWZjRpqQghFrhN6sHNsVTFWxGJP3ks1YCG7LD8FtaekuhVJM67MH5gPA51W7PX4H4SR61cLVZynK457uoZRZ",
  "key33": "2SQNwLCsyRwMigt1BRyRmeUtpyeu5jnSJeR5rYrHoTKRjf8pjZQ3niGEEvotEtcw9JDsP8ydkLJHXHApwvvtmRUi",
  "key34": "2ba4AArfar5fbmz6HNWeyAVZegQgYoTvRE4uYYVoAsox2RXQFpDvRutGfEMTc6LSr9YCGU4iZjF3dzGmBh3Gr7qE",
  "key35": "2kBN2p25uoDAC2v5B5KnGaiaFczR3eL98i5atg9SYZNB3CbyWgR8w83FdaadaPFFVPW5VBEMRzxN8kD8hKHgyLR2",
  "key36": "4S9BXWvjD2PFt4QZHUMtNg87goDZrPNJHVMAw5QL6HHt3uUfztMxBXsFoP814mwPB2StWxxw6rtjkaa1e6MowcQr",
  "key37": "3vRPMVEtBghudNeNjDHyzWbE1DnEviA9AgJ2Kq3K3fiKB9tjZjbceZrH99WHkHiCH82thg6km44xj8SjXtoHhYm1",
  "key38": "ncQ3NssQPragPeCH9bE1iyjdVwDVar63ETeRE4aaykvhJ3WPTBVmb2335UY4UpxDEwnCMiYT3Yak2Kas3tbb3ms",
  "key39": "2LfH94fXpbVxYGSLu425DTzptJNg8veJNkZXf1GbzV36JZMQD2zKFBk6V7GFhtwrCK4t2yrv1WRbvv3VyhibVaiQ",
  "key40": "286e5XXL8N87Av17vLu5TCdyRT4zFqqJr4K8c7NVN8K573patUg69j1po6sV1bdZDaxAghLqQw1rK6YRrCV3sgCR",
  "key41": "3SRPUtZeUHoyDWrPpMEaZUTWNuaxnHUpTDV2mtfu2pCmh87rDgoLAi9tB8ecUPkuEzcEziZPBqxJSE959aBSXK4i",
  "key42": "VDzU2qYiYqn9cDigiCErbsrNb95qEay3mSv7Jqic5HFV2uAXd86eBoJTyADzW8uKGFvKMJSANDwUhkLCjYe5yij",
  "key43": "5zuke4o1cxCKTikCGMkx7f8giwDFbfuduYRNhAWVmGnJMUHaxxr5mfBfsk1djrHgQJgL1N5CfPX8mLyKaZNue6wk",
  "key44": "2pfQCWtTVrdp3tfTF5JYZYM7SbLa38WJ1scD39o75dRavD6tzCh6p9tff5xYgqYF9VEhmzuZxyoP913EEFLKxA71",
  "key45": "73tekRAapC3ofgnyBJiBq9HXNZkJmtbrrMRyznT2dUTJCrzRtaY8oSPnGqurjrzkhLd1tVDJmMQTkpVogoqGVFq",
  "key46": "5456vTccwuSAtmjefTYMHqWswUd83bf98mp7vNXt3qevs1tJ9pWZEf6GiM1p8696yMV26RD5mEFA5mke589SHMSp",
  "key47": "4wfxxbmBYSphRbdfr9mpmHPtijNkkY39onE7URthbp6z8Z4BbQ4HyWG48uGQUJNfrTqzEdNBrRecfj1CvoMB2hX7"
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
