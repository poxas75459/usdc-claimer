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
    "4FraB21Q1jQchoHs8yPXuHEwK9M9BVZK7BSkNuhJ3t5cCfZEcNQ8NJEA3hrcSnBozDk6TAVGikpW8crcq9spxvzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uY6wmiqGhSeBq6bNKKJn5nqX1KQDXFdo5R5u3gTKUeiav3Q8mQgHNPEggJFrLeCFoCd3TcbxVvU9io3WsM1EnYx",
  "key1": "qvgd6o99g1hA4L7KhXUWP7bQnthvyKSLsqHydL68QtE5YTp32q5SyPb4a3u5qdTSuTZmLr5yVnKBm2RRQeVz2Zb",
  "key2": "34wN1iNzwiCdGWJuAQRDkhuqyvQnNv1wQLhzTvVkyWukA7Cj36DWjQPV5GeER5DjqbTZkX6wzjmfWp8Yc9TnjJQy",
  "key3": "4Gai4sRmWSHHX728g6ifXPhsQ9igry4AUj3v5vAsuVSWrsmWFDFPYe7DZsVBaJayzAUzS4PEkpugAawajYmNfd6M",
  "key4": "2Evjb5R17prizFEmexiChXxMu1amvfLydc27di7Z2WyzfApijGCSFUpsvm4ibHZVgqwAAyrkScPgpRZFD5MdycJL",
  "key5": "2oaiM2bDbVAmJbxJa81ioACU6ioxmnQNKRimRJFshYKTKfph16WX2VkJKVfBDNrFXJArSBM3H9p2q37VezrqMkdE",
  "key6": "2pegES23AKjLXft4K6dH249tBqNDh4V6CxU8heo6TkE3iDZEHtQjWK9ZQTCEnh4GhbwpuZDxyd3qJrFEbqr7niW",
  "key7": "21i7zXzfQEXFjJZXDQSmoPxXpWQDaT54S1L1k4acpXS2uu3gfeHR1uAkYYyiUEgGkzSfdvGjXD9KJxAWmJggU6Ja",
  "key8": "J8u4Gk2yuGTQRjXcgQXjQbp58cic6V1EWxUzSNeSwKK4s4skozZpPGBxWaLLMRbKrkE75KNtCwTM9jqi5HeUGV8",
  "key9": "43Vepk4kayRKXGRnyfquDTno3ryi1oQxwETXYY4oKZn6ws24uxQ636VDzVF4ka4sfqim8Q1WxXE4QE14S9EVPwWW",
  "key10": "44M63B3ayc1mGDezFbZYeMZYdhsPpeMw2c1g8YMSxYpF8xjtUC5PKAELYdGKa82265RHrdGJMVwGHyaXgV9vNFiT",
  "key11": "Lgnxsk9thLBR2YAR8tgqSjvs26ENjymCyc1ZxKmtoVNZjgqgnXFdvKfUyiaWfykpDVh5Ge4ji1GRnazg4f8QhEv",
  "key12": "4ruaKU4rurRfKa4e5UkWQbF6NYTDqALF9J2hLnQTDfxNx75scWTTxjzhpEDzbZk5HekodFTcQW8h6jrbSexRn7s1",
  "key13": "b2mSueBWp451ktgjkTiQTayXVMtsfWf4Xf8c4XpuwYDn7AurbcuEYvs7bWMbKiQSWCAJ5yQRk8ijmwdrU6bT96i",
  "key14": "3wkMTZvwzbedK9PLtX3ohR6R6Gqk3vHxJ7dQgcjZcxJPT7eMbS2ib7hnDT9ta7SBAL984KGTi7cpuRUBpPK1T1xQ",
  "key15": "4LuiRNGJzowvrPVRmvaFvKdiSSwiMGJKUFDEBox1pwon8gLd6rLDhTXKeJYc8fUhHDD58TexcTigpsNXHxXu9LgG",
  "key16": "5i9bsat8HAri3Q11mrX9iph1snotxwD7197tUJMKezn4tFxy9Me7B9AuuRQMyaCu1LMhKwf7zSiMEU7BHjG9SS1A",
  "key17": "BNMThh5MT24DjQuVE6bjHHBEJbRB8upKAfCftQ51vqtSAZCMsHeeq8w5wT89Fw4javhhWhX53chSAxpw6hn1U3P",
  "key18": "4EUzRbPua4FrNCgUNB6a8y6DoNjKdzso2wCKKBCxCJcNjcquTjtPE1BsMUKFCF788eHhrSyuaUYfVg17TUJyLAnM",
  "key19": "2CxuEvJbmDqhmqKnWBr8D9pjjvUbcZ63XdD4EjnxfeBbA2JbUyagsCYxRAjiNfuCBJbczUdzLcHhSQvkCnGE8tJc",
  "key20": "TX6ruG13kprePUuo7E5HRJNgLSS8dpMYE8EYJZheujK4Z4zRZb2kattgA3fBReaWjQPPsHG6NjvqRdtM9ppdDLx",
  "key21": "4Cx5kAC5fA5EYhwd72Rb1ju751RM1yZARzms3BnD6St2Kgc17yHFJbsderfHhQZ58E4BoNJQfQJUzTxABQfmydtR",
  "key22": "58634YV2YbV4DrAjcdWoGzvEf5p9D2sop8YF9XUBS9WUi3kPy1Tq9F31LnxhpoNJ8nrLWykAK1NnvwoqJXmkmVtq",
  "key23": "AoWD4LxCPerVXXCxbaijskS1LpfZsFygVcJgRXpnSNnCwgjv1havCSp1eUMy48dQ7Ys2ceWeqyCQBiTJ2FGMjQk",
  "key24": "3dvmRqrPZK59UdPwxUMJgG29LAaXSMN6z1WZUrYpBqoH5hNFHXSbDL98ErbzQWCB7PCKKmaT59DX1dMX8keKv7hg",
  "key25": "2fGvCEB58QXTSdGmCW9uZguWRowKCXNNQYiYGcAQGWTaH28ApAHrLzBfKRZ3TqdPyGhyUzVQ77NoMhsWbBMvAwvn",
  "key26": "3BNmCT1wzTAjSuYAcjJvoo1dCq9edpJJS3XiY4WnmU9vaSxRBfhwaN63AKR27mHY2MPJe8X7s6DrwA9ikC39bU3Z",
  "key27": "4fFdtwQtRcLNvRiir8tUQtAJT6jicjuwtgqbytsBZy1XTv4QAFKoSiJVUZzDQDsEqS2VmkDexfvLD73XkajGrmme",
  "key28": "44BuexXBpErX5jHopBNPze8VZZauBghUYNULs5PoyBWCrzTiN5CmZGLvgUeJjVn8DoUPkqv1e1dyvXYh5i4yi9ZE",
  "key29": "H5jKnVwj6AU2Lzd25JeAffGnL2JwJyuK4f3cQPY1eqickFmxDH8KfRqixEc8yRbNMmcMBPAsjHnFp4rrMkrYNAC",
  "key30": "2riS6pqVkXCwkyFyiAqsEHYpYCE53rrhADt66uzMuRPReF45EPtQ8u2aidRW69axFYJRgkRu4j797JiQjupswRWg",
  "key31": "59m439aAEkM88FJ4e3ysQUSmFvPZ1t1xsuj6VwFGJRtNyMueiW8MRzJ1RZDtrGcH1e5fCXgV2N8w5Trshc7MDbUT",
  "key32": "HqZfjVmoxJTZFtEoCxBsS6YomtetUPwTpTsA7WEnDsZDAAgTJ893cYpPii3kmVhiKkaA44jjoer4ig3kJmSXpMw",
  "key33": "4zx7RkpNZvoWeCCLXfy341oXR9eGGFP1Cv4UDSTMi1pbgrCQp7E6HFaLnb3tBbXA7KUuHeDs2AKNJTafN9e6QUGY",
  "key34": "3x6CAgPWbAwJPzKEmRGr6KWj4krj9Z5prPcx6tLstDFxramo6PFbiPbHTpcDwu6Eimw59tb1EW5Nivye5vuaKfJJ",
  "key35": "2yDzByyW6n1x4DVsEjiKPy686ziGGdYfFj6TpJt8GuTM5GULjMxAS7u5PKspzHrjqE4YXTjmt2mk847vEaV1GQwp",
  "key36": "5NFP66DyNshyY4YTA2vCrT7RfUNXXnvGCcYAEFbP8ARXGZ33guyyEHfJHMMYsomcD8s1P5sEqTGQjZafQS3eW5oN",
  "key37": "iJ2irkVqBZW6GT3b4GC4Tmp9AQnbR6zAZse8hhTfTf2JYSeMSnrixnXKHohchvnbhi1TbbFnRNbXZNJxMn5uq2X",
  "key38": "5ENn78gAjpZPi9xQFDHW882UqKNr51FhUcqPUKejJ1PnUvRicgyadBCSNu5JDXr5m2QCZKcRMKRFGHdURn9yFS4r",
  "key39": "2aUKMAzGGtVVGnmuMRFbNeSpJtDxrJ9jtevPjJHMqiKcq4P8Xmt9yGK1e5xRkiaf2hD6YZypQZL1d5xGrd9KjJUo",
  "key40": "4DHphsYKAjBrrb9JsZCKjDi3hSXdrxfLcTzcbqf9RNkjWQ9jzi9RHomxbwEPcApNFyhx3aUenj28WrqNo1XK7hSm",
  "key41": "61atxjvc42NzkmGG3astu8Mq1LU5WAxRhRU6WYVY93KG9kdT3kBCH8HA9KvJ6VfcSURfauiEHhk47i7mpYwRrkwb",
  "key42": "4N7MwQ6Qf4Ejb3Jhg31wXHxQFaHSoQ6ooTJffxqWhuYJ4zQKmNvb5EPn8m5HjMz8AyAeoGxAB3ivzDrab46eNJ9T",
  "key43": "4uNof7WkeECuufHa18mDGyhXfwXJRs11yvVXHdSJd87aAHQ56douLBDWsU5Gaib1SCkjzvZQKotb6oGVBH8zkrEt",
  "key44": "4C1qvGzyrrUn74rjFXxtaXLYKeZtd8thNgrQ54x4oogbZG6KdgjhFpZEQ6JmxgNpBg13kF7vVKPXFnZAaKQnUkrR",
  "key45": "39ybQyxJijpKVTXn6hSMCPRWQeZvuYoyvQojaB3E2Nz1sZBeFpv36tpLi366cEMsD3xAY6TA2qSpj4fMsj7ooTzo",
  "key46": "4AkPtqyoAZAkd4muK3MFb5frJ5AuYqsQ1gEE1Ktkvm266ghrZ7FQAy3DFanBi9sFjrVuajTneeDsaAo65XbqQcSn",
  "key47": "5TVxq9U1DN3Cfy96qBJK2o63SvkgB4Vy1BrziYZo5dZGjYWHgq6GRBa9joQb1FNs2aaCJQnHAseMtqeqBAC1W6o2"
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
