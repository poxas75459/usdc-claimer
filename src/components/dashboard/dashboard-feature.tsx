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
    "2o3eXpD4NTcNQyNj4ASeTYFYE41LxZqgjMRfVVfbAdF4py39vGo4311rWsebJdMFSiuD7K1JmXiLwSmsd4PHpGLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CjpQx84CDV72wEt3kfadVPANAGT5AadgcxVSfYCxAdGG62xQzx132bssaeDRXsjovoFTfnF8MxBo8h8QtXpsow",
  "key1": "2314dqsrsoWut1NtzNxfKBreBfzBTTXyWcfpSqVmiBtuqmgz5krYwGy7UFCJv7ZvyhvqGvgTbmRJK2VmycTzBnTB",
  "key2": "2JB625QYaKTtiHrJTg3Whj4fKJ4erwP5J2mT5kNJAWQSQS4jYY4khuWR5kS2MJoscpCg385SkEA3C53p7ZWgPpBp",
  "key3": "A1S8q6YZ2igF87beqezeuBkfMc1pEivpVYkeHyEvP5F6zPbbq3nAhfuZ7VMzELJLz286uPimmZCYH1B5Fc5cDGm",
  "key4": "5o3pPsKCBv5veedqHjxgknbgHa2Nqg6ySshVr3StMUcdydguWLcuQvvfoVuxoHK7jCVS7pWvTD9nTKJ1PKPSjrB4",
  "key5": "4viKXQMUZe24QhbxNM5UxJVBmkLVJGBQS45tpAdpX28Q3HZh9ChqYrcJ7JUQakWQJGi9hxtgh95wgDCqQbAT5Rve",
  "key6": "2GWqM9jsiigwU4w24bMgCKCpa88zdbeJkL4Abgwfd4NsTHbdrAXYWmYWdLA13EG84ywWtNhUY9nEApE8Wb1vq7JR",
  "key7": "56KD8GWpC8gzC6NpxEZNUyJJYw4gYm9GBPYETu7c35kv6R4hn9n1rhBsMKjjHF5LVbwrMGinnRjrpqjQbw1SCiqi",
  "key8": "5AoCXFYMdbXQky2ezkxNFbMraZ47Ma6MvL7k3uN3Pctoofg2gBMVNGgGPrQfrdcTLLWekNULgpH33soebbDWqwVe",
  "key9": "5kLqzXPMpD9Awc6ebyrpsrsesnzxuZeurfWTZPmmht2rWSKugFbtdMExQ6qE6KKqEqF51VfpxytHswo3TGrVrAtM",
  "key10": "63dYeJQiut9qRwmoL8iVEwPWJbmGaULZVcuYuwiDVoyeXqeaysiGSo2V2kpEPaHEk3S61QeQK4UhkAm8gbQLaVap",
  "key11": "6YVurMLk3sr81zhZHFvK6nwzyxydUc3LezQYuqXKNZk7HWs1EEhxfMBcMj3wUnofPpKSJhhuYp86rEPE3WrJCDh",
  "key12": "zGNLRyiTrzKPscongd9zpmnWymjDWwtL4oaQ1mT194i1oZZwpCbA59LYCDLrJbSvUHB9Zb1NaSrskcjMmTxarMR",
  "key13": "5oYkAWjW3prH8RpbN1s5J1X19wYhHBbF67ZiywcoKyfRtc5nNJm2geKETBHZPhzH7yGtcKTNm5iq4q93UBk7Zmhn",
  "key14": "2xuLKs9S7ZmxNGusfHbBdbiqEa8fLkzGrNfUNzRcZ6VNWUw1pTEQ2HNFby8kwXMxoxvU8qSMmQPKBtCva6BnYhb7",
  "key15": "4aWLf7FByjUvQEaMa72BinfjdAj6rRw2es9UbraBCKrSMKHsxXJfzeYCnCnZ5DVo3sUTGLDLk9LAzjgQk8umEChX",
  "key16": "3D3EN9Zs3aRU12SCYg9Z5FyHRm38ArVJ5jw79EQm8tfU1Kj6od9ADrFqhek8J2YcMXTDyQhyYxtb41f1hsvNcA1t",
  "key17": "2TPc3Smjq5y3z7mqHmexRBWyiZZw1YJ6jycLYdLNz7NRepJcUKHWzpGANMsP1GngNmEkG2jFXWgYdnrJFgV85sK5",
  "key18": "2L7ACmCG7fNdb4pMrAHYEdTxJeThEX1T6sjRMbV43hBLYEqJXEr8ygBwGdeC8w1h2x9uHgHXGkL4fKxYiqsPvmAG",
  "key19": "47iCa8Es1D4tsci7WHLPECgzYPe4n6cXJsHWRxWApnaW4b5cju81pc638NTbjMUE5s6MvQ54bpqtEaLaAkrNzzmG",
  "key20": "2ynjvJTeHWf8uTftKVrwdJGv4nTswhKcvAifFaEDxUx9fzRXxNYMNw4UfBXw5rPB9T2j73BnhX7jPveWKpPvV4gh",
  "key21": "5DCYf3yPDVtUES3DSiXvf3bo5K5q9BVB5oAX6d47oMRiU77zkzbXnWWuUDVsgu69UuzWoUGjJxnBos2SXtHpJkTR",
  "key22": "3BEBbaueF9H442XbEAuYpetmCiHMf1J5xysqXq29eYqBzH71rdLEEoHQpKbFxGcPwFQ12cK5yJMEGg46oGcPCxFo",
  "key23": "4kyvxJJzoxQDexXuj8zN3R5pvdFXU33qtdhAuFv9qSH4bGVu6iNJ4KjkAB1p47nD4kfY3Q8ts3HZB6dMRRJWF3wR",
  "key24": "51bta5TdjXpF7HwbLzu5eFDo7EEJD3fR3mw6kLDQctanDZpuW7XmBW2uf1EW9rxBJxoKjuw3FdCjd1nZej3HAxQm",
  "key25": "2igfgj2SR9TAEW6byXQd9g8TrWU78hDYxzjEoYrPEkXbgj5BArt3G6wzHwFDC8LAErNLjBiUbNN4YCrPMK99htsK",
  "key26": "2rwq7dvKV3XLp29umc1JZrv3EzT8WLLMoBAFK3iGajhGwhKPUweM5eJDcAcJDoP66Ywt9AX7w6eeLVoNLVbke8oj",
  "key27": "5F8sGXJ4s2U9vLRBUptScBbddZ8s6XESyxSCnMuAdue5LurBFp33tiNYeawsBgTTCEnLautDuby9Nk8k3iqdxbuG",
  "key28": "2fPTxFu82v88LbQy3vJFSS4X8iCX6DGjZh37Yfeeiu2j4vuim6BH6f37NzzFXAdW5eTusdokUjtMobsYhoxPYq2c",
  "key29": "212gr3C9bJQKFTS5gHbu3qwm2vc5QW9H6Arhd4RgWc8fdJJ2cgPTUzaurvLEybVSkcMQ1YYLtKmLg6aiSY3aLT6Y",
  "key30": "4WLwRk8eCd3DR13xPVyvvppZHGwt3bFcgL3qyZ1EYNs1n9wMAMby1eeACdGW78uwb71AgnCap5KZ8dydStudMf8F",
  "key31": "2EDYw7QcpHLsoy7n1L9JDijg7PTzxe9TcwwgKMYkS2d2KVuJkusXyg9UCBRKjwt8FjCH4euterUNbyNYXFXxeAa9",
  "key32": "4H1uRUTamkokAHFYcYNUS6sCjuhi2xYDniTqWK5MEMbdkPj4DuqPQGz7CT7r2Gun5o25PoViGWrJ6co6AXFrcqRc",
  "key33": "2yp5RCdiUCKpYuWFX2CTU2A2JS7grzgPMdrfytJMsF4XBxQ8TqPks8nRuLEXc4ybd97J5YkbZnYF6vjzztUggCpi",
  "key34": "5rZSxSsg3YYpDnu5p4jt7Uu63tZ6ovdUeDxkPiGj3Ya5AmPV1JtcA7Hh76HiZoSva6NRPgZSCYn2nvGgfdtZsk14",
  "key35": "5xRqobqrTqgfMqjL2RUtJuqaLQkCjk4UatpMHaWA7wfTdwPm93DmmDGDvPs4mY3C59HrDrtHSuoNsVCB4iAqchR9",
  "key36": "5kUyrR6Pc45B8ek5fhdRKYntSk2kw4D89UoBV9qFxRiFNHBsdRp7HxuEx7C7p8FRvPpudN4yA5rnfKZBRyEgY3Va",
  "key37": "5HYjh6E44nVw3TPp8bUAjAUqNf6bgNwVgWrNrXPxygLxECjeJxw3Acgxmj5Tr2bBS2LvAfa9qdQg6B7ia7Qujfg4",
  "key38": "3eC6pLwwgEts3kZiBCheuCBeTNNMP6xSpbHT8MsEZstUT8zccuwdcmL4KzE7wwFqpwqwQQM3F8Xz8C33yhRX4my6",
  "key39": "4fZT93Vi93NyT563Xfa6RUrX8i3GCss2vWSDQ53BEH75LPWiurArVxiUR51UHNN7Gd2UeiBz9mL99SRwmFHy9CAa",
  "key40": "3JqC5AtXY3CUdawT2zx3dyKMdeq2B6QKcirRoWXbgjq51qtV2su2ymPSXZuZhPWhjEBsspnRMwHnnUuimv1jUQns",
  "key41": "5Qmo9XTMXWzfgd2NcVfeVedmWMLpGFTeirwvi3c5yknhyWhpDnZK3nmTTZuxJXSFaA8QxosQwbxjA1mxeDw67Wa1",
  "key42": "5TAZUb9SDQRTR1UQZzNoXDLGmUKUdBqJgWbHZCummoRc3oqqFZYoXK4azRcY2NZ3yEU9yG2qwQdc3tB4o9ypFqSj",
  "key43": "2S6iQ8rvZxbZFMQf52HJrro2ednb77TMnTPoFPLCpzdTipb8GkiGhsiGzXGkVZzi3oF9V9eb3ibyXpeN4PxpHWze",
  "key44": "5kbACHNvPumpP4tzynNHrLua9hEpQm59uXGqE2VFGqCUUKzd6V1ojq9BZzVVTdj58RKRFcsJrrr84LjER4jnX6eN",
  "key45": "2xBbCC1wwMUAse488TuY3AkvzA9aBwxTL8etaysZG5PG8k5LSBYzieqhesXBeyNjtzQ5xRotdWsgaMSFgpUhdDpU",
  "key46": "5U8siaDPXEQnNxYKKSPCi5sESL5qYcbqdsDi7KT1Fhs77gfNFjCNcGXZGXdGCE8XfQ6ExErGqknX6hYYq5JikyoW",
  "key47": "5ntdXAkgxx3LhbgTqcK6mxjEbCDT7sYZgyJofAn15eTD5o7rviueKZAAMVxBeyFC66cLLfWHJ1Lwxp1jb5XhUJ44",
  "key48": "3GRaNuqY9ACo8pvUVcDULcKVckDv4UbPwrH1CS8QreQipobB41eonXtKbPhgj1vLsUf7dDfRMQnCKT1cYRWBE5wr",
  "key49": "gDGnXZH7VUG2jsmz4aMYZfGT5UdH1XLi2AkaPXbQa3w2HHFgBeWeZfTJDfR7j6n5xEkW4e1bz4bRET4eNp3s8c2"
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
