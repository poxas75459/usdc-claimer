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
    "2BWhMTfVYkpWhoBjcnuTHvDtFEkrVEL5Ws1ChRfTPSifr7yFMPHvKnNEHZefkPSmsyzN6RJDmVjxWZL8nDZFTimN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DZaEZ4ptdXmwxC29wzqJefH46Qhk1hguuNmVTGVZV1NRZRgRpnQQXK3vWTY6B89q5ftGKmDP7JusSmzNHKBcHeJ",
  "key1": "2tZqhVBDTycuaqgMVkr48ZkrNq4dvK7ijDQBqxYHsypyFCGkUi5ptuY5GKD2o4TSArTXy9qcUERYGWG5i1JE3Bh9",
  "key2": "33EDVm6i9TCchSgzNNzqHgjvX1gCQ55j5dgjtYHGXxHHtA6C4HMvrqBU3pR4srJ1RXa5tS8tQ2v33vYDPHt5nwk2",
  "key3": "qZZyuV84kFU61UzPAraSDRaaBLreoBdaunpMkUND63DyDw8Z565nnT1urzfeGsBogJMRA45Vwg1qLUU5ySvZUyQ",
  "key4": "342TGUrmSyAR45uxEyzYraxe4PcumyyLNF9jCuL5nx2FSgYncWsAyL8fLhzNHbwc4cHDJ1hZo39JoLqcJbjAr73r",
  "key5": "6XhmYXj2ypxqmfaQro3FooudadcTYCjzvygGU3trCvr8FcRQXNXJytWr2Spmqbma4NSysqDcRKcTPBBXC6RFKtv",
  "key6": "4iyX3kCMs2eX3yA3xcbr3RjxAhbhaFmrWDi51aVVWSPCFekN2vG4zKGWmCGNuuP9CF1En8TrmaynQochqyPTg9wd",
  "key7": "V7xh7oaMddC85DnNuognFPkFCjGifg25gUrkNCgLfM7cVAPifgCn9rDVpUueu9VxLatA37L6iti2fvy1JYWwovc",
  "key8": "3qjnDJ7FCnoUcgnRnp8pzsYwtingdXh5chvjrkUuB4MpY3cj1jRM4FQqXACaWndVigBw4sj9rDxeftekrpz3pZ1c",
  "key9": "3VjB2C72LBf7yeHkKgZrAwCgPFjENHPGfWh4gx86PGuxrrmDF94cuPX51HoakNSVms23dMDyxnSw6Y2ykUg5so2S",
  "key10": "wPAVH2JnHprg1Kio7cGxRGdjiViVJ2QrB1iRyHfgSGW8opti3zESUAWm39zpgiyX3TzEviFJ5A6TPJ6mDvG71u3",
  "key11": "3c7DTxhf3MKsoTD5HGqK55noHeeTPykpP1ezbJmQi7gExTWbBG4pGb9vucsXvgZVWhcBtviSuEBoXt7kT9vWKViC",
  "key12": "3CsCT6vgR2NygYRS8ja2eNsaPnxgpACzJKXDktY9Uk7uA3rJ2cfacv74MXDtYySXrQiefKTamNSqaLaRDjjaaTjv",
  "key13": "519ziiacw6j2Rz1ntrdSkgKGEKnkmYoWe17A1SsR9uLDgrotv7gs9w3k8qWh6YwAsc5yicZBE2uWad85jMmd1hym",
  "key14": "3u4AjaSUUL4885WidochzBXCzg7kEYoW7WyfSAjANuM6mTRKU5yAUk5XHW6qmoL8eTHb7dJLLjnNw1E7xJvoTgMa",
  "key15": "3wjTD5913kQWW2vy6WK7XCrUQqSUF8JhvZ6Q8LkoE8Qa7YYNTsQaJ7YTSqByHTg4XMiq1HfTbyN5SbUFk3Fgt3t2",
  "key16": "1kFpJCWeQc85dDw3GoU7acG8enoJu9TdEdrTinte9SDBJoxadDrRupjZ43JyJ4aDX1mwNpUn8wSH2kM1Ms7YUsH",
  "key17": "4rPPXuPLa6ukL9puzJ79G19zcVfNFxhaJ1KsibMoDcRqdYwSN1PFgEUcwD8p931S7GnNC1xHbGPYLCo1DSxXqLVF",
  "key18": "3exTGQd8XSRExsxerX9C9J3cN3zavQYUhW4L99v5Z92YJASbb75DNzjw9DuZ8GmNhEojYugmGKtKuVKEAuHrqWaP",
  "key19": "41VufUUz5eriDpHEsHHaSdkU8SrmeNcBEbdU9jNvEDmmzNd8HPJmMSt7AfvHxfFt7Zw9GuEY8cPkfGr42jFNhbJJ",
  "key20": "8bfuhLamPo5tersmqG6X7k3H4GmoLz1VtTSxAUNT2AqPxurC6gwdgJ5fGzZSEosvPEt14fJhF8zK6fjQ99mJb6H",
  "key21": "51HsxwJbPUrLb9Mw1879w4bBSYQTpW11qhDGNydKVpywkLv9HCL98EVFE6qn3syq8aAModt5HrBF8Z5xTWR7cABT",
  "key22": "2TsaDxH2ajwGHc8tAnswZKhVkQiJ9XzrCXRPuAQqo6nkMg62BAajqfc1SGP8qqyCtt7wBj6eQLoQhi7hQezrw3Mm",
  "key23": "3LKDy41RNLWaN5G535Yyuyq2iMPkCsDjnzF1oevEJAjm5ijwSnyUpb8X8HShuCrSeFhJk6XcyMyTLmUHBCnYM1zo",
  "key24": "3Epb2jGPsuZeRbzPjsi9XEd1pWgsgPpZ9XBVMjZiMTPk1nemtacMYdmJUkvRcmJaLC3hEjosw6nJ4hzb4NmraXGg",
  "key25": "3DNc33Y9ZLsK9uvytXSAdZrraRpmjX2jq8qM7oUczZd1GbRhB8oNoTk8vutEMHkQrke2aM3pBn73Zdu37UUarX26",
  "key26": "4qYcaWjQta1rV8B1vUrjhaV7tQgwU3iV9CoYfLPiW7McnL6CQXguM2yJPjscH52jAMKSpPo4wSKLYafbTxfr6Zk6",
  "key27": "HYLkG6QNVZ5EFY5LjF4wvDYcVMU7Wa8xNq6PvB1mEnnhduzMeVNWHhUhK997kWYoE2zbrkuosnfbz8C6giUq1kJ",
  "key28": "2tbZ4UCzj9CoqqTUNZnn2L4rT2MXBke6hqUYQSSwo4eUkAKADuvrHTXrtTSHkiPM6JJG8s1iyMk9GRghUkm1npLv",
  "key29": "5uJixxTqi6p3wiEvz49wvuSJyHw4kJUeEsbkFLibutG2eWzeapH1XAGDt8tnW2cCtq75HqAsCuyaa2VSQx5GrxBX",
  "key30": "cCYvpeAZAgYpHj26e8XXNbCWWPfnkQpud2jAiC6pyocy6uyFTMC1R2DnbF2XiYo4bf1qiD93gC7zDvKExbLSs4H",
  "key31": "4LRfu2axjn4iEjG5RocGCnpyZ8en1nWeziWb1s2sDb7BJngLHQx5bF1aQe4ASfJdfUQCD6B19WLzAktVxgbkkhA6",
  "key32": "4Miti9UwchggjCE4b8La3CQECzygVHYvvNy2Mu2GWpyJzgRcJKeTZeowvAxK43sGdyLpbTi9tvfv1tL7J55DpoxY",
  "key33": "47wxkD7F2gtEqVah8TL2i85HhGRBzPPQ3h9ctkLrNFHmMZVuAcKu4N4aoowUgCBrgu5gxixTBe5tDHM5RjTMGgUK",
  "key34": "7gVfkAdzTHT1d89NX6nihHhq5gNypBqTaexwHG5MazY18Vqnn1Y6e1YRg1hVXu5vQyMSP5vjp5vh59wnZzpuUM2",
  "key35": "62twGckvoptJLjz2ShfwDKYrnM9BrfvWG4tJ4hb5xfAXEqHLuEp88rNwzN7XuXGF6b2DsZErYrmjbu219hDpktpa",
  "key36": "v1RwkUvDbY7t6uRG3bffy7PikC1UYkVkKcFGxx7J4otrYNWAmDrV8MzzjA21WwD3U55VYn2CdB6wHKPV4sTVXZE",
  "key37": "3ykHp7tisRgzdWgJtERHnZHt7QnJZhkZuU2fvGefn2v4cDXUTs72ZeaPpo6zY7QWDYKg1jTocegWJzB6ydogUgJf",
  "key38": "2wRnt99qBPi9zbR8QVqZgcamuyLDK6dM9yxTt97e4FcCUKan28guhGuPzkg21NL6V14Uwi3fFU8pVULBQAmN4CbC",
  "key39": "5LRTMcm424kdUjJnmshwT15aZiJ9J1jTqqhmhk7LL64q26uAZ8s6rXRdz7PLMw6Sdx3sG1sNXPqPuSkom3qwPhbe",
  "key40": "334cTV2gxeF1kGUvW9MTa1PDQrFKwd1cwLDHpAjqYdMc9ixJgqNkMZkpu9sHRzDAd5KMGmiNc9oSzWsyYnkSN7LN",
  "key41": "4jk484ijvc8PJrRVyxqDsGaBxdeX1kVDFjTcu944AYKNQwLVCGkmrWVb5uuxHmqfzQigoedWFHRoeWsEkVzHdf4M",
  "key42": "3pqxsyioAU47yyHdeHWEQ4dTQYuhnhN34A6LzgoQ3ZpyQMSXuNez8uRSPxYRTJLqt1C2hwfY4GLWm3yn3DJrZoXE"
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
