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
    "QJmNgCBCGc3vikhypELxGU39j5U1Bmiz1hgBZpbTg4ryhiu5QLbZXbY3DzF45vwvgFLKwfvJDkhoYj7DHgRthoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QtetCAkJ5UKZQ7KffMXqi9uVnKhn2w1c5yikAuJUtQAfqExHwJk6GVd6RNQy2s1DUTNJV5trGSrfeCP66jEDkDd",
  "key1": "2gBT2hdFLuJB5mGBX82xexmT7vEh8U2pS16HtrufjEijW5LEDMEVyCzfuPJfhGsbSZaXMjDwFSpT4SC2fkViT7T2",
  "key2": "4NeC2ZVkJD3wwoRg4KKwgrsiKJn2SSDV5DUvpPxKgtcypBLdRxT1Vvf6kcGonPDuHDG9SJKHA7w5qytjYHMg7XHN",
  "key3": "62WRkewoCrow9KERurwFsR4Fvbn32yAufssipmbHF4eeB9nLwYFGR4utkh4qxfahpyAXqtKNNf18BrW8APMpemDD",
  "key4": "3KCiUhtgGMKEGKPbdk8DJ2x9YkjUXjv8jytzSz5hnkJjcw8tmVwYSZ42f2WFA5DMMCuVbnRz53fYQmiCKf3zxtnk",
  "key5": "Y28ZPwFfq95i9k2eHZSrHdL3dqyBehKwJqYoqeKQE7jXrogdyq5BbF3DsA7SaGUkBBvpWQAFZvnhTKraJL9vyu7",
  "key6": "5uUnhQsAisS37MLDNwDGZfMnsiHt9QXAdfEyACNL8WYN49awikwsNa1gBy3RHhLmX8QqqQQvizq3iQJLaJfGcZnb",
  "key7": "3S7yXa6NakTnkdarQGHMFSnGHFZsNfsN4UoVp1YoEMP3tP3CbsWmLK6iXvJ8Q3bCgJUeKepjEHednNj25jFRGWS2",
  "key8": "2FtAsvJPmqPom8SDcUq3mspjbUytXRYsgcHeDeJzr8dxnTcFdRfTQE9UA7tzzvv8ryn8pA721pwY2HwdLHX63Ewh",
  "key9": "4QCTSkXHGDAB8Q8NFNzjGzMT8VV8nJSJiEL1vo84YjzvSHyhZFtrsZPox9PEtjQEd8BYuzBPFt56rohRe3FfSHmW",
  "key10": "33Nt4tpZTcTW84nKUAnq2dBf3EAoLfrhRmgXmKrqbYFP4YKbUoM79byUJ2rvEFetRonP81sQm2mg9GbyYua37P1d",
  "key11": "4dA1bPCqu8VBmjYBKCgKYuuaMKndUq4uN8ZGU88BpQPYHcf2saQoHTWDEK8p7jzayf5bNFZUwjP55Nu54mmxsJyW",
  "key12": "3VKTmbGvp8JdJsgKefHr54vu2RkdoCk5kgPFoVAufRhTdozsSzmn8cKYfKMeWsXeMKTEjeC2TtiqEZ7uvMmdfstk",
  "key13": "2j9jDksqd5uiCRTDfPTUCrDHmj74jggtzQeaUfeaNqar7R5psiL1So7t5d38ztX96K1Xqmcygne8cVibVWiZrKf5",
  "key14": "5KV61kpNKxuPg3HKWUrqkGXUh5YuDz5B52F9GWYmqAYa2XBPehjJxYXVoDmXU6h3YkBmbyBRoY7fNakgJtNKJYXL",
  "key15": "4twZCptifinhQZi9rxMMbhEsh8PZgr4rhfyjqymXxHMajaRV5czFDdqrKUnzj1XsMzAGB418Rz8U3P4Q6Ud4KPrY",
  "key16": "9r4hN9ySQZyYKsUiHxUDhBXp6nvNterfuTsW17bf6atqsecqptqryGe9ra3N9idkcQfKhWnJW2JN6JRBWRERhZX",
  "key17": "2BoEvsuJH1hw8Z9w42BycXFfqt5va4CpyFmR1f5RyS1RZDdHb6cfsQboY9fWR9Z9wvrQhS9LfyqBGDBZmMycSHrL",
  "key18": "4SeyTBQ7BuSqYjMc6qCFMsDoUkGkLnJ1UgNR5RghEdSYSQhikvc8AjgchU1HTJNRWh7tdZ91Ey3tWKYabyRLRDLi",
  "key19": "5dJK6KqXcSLX6xDp5iQRii4U3nyQZnm9D5bMkFRPCqEjQKBM4AShvT3Hrc1CQhuKkCptVbhCEBH9hi2M7uoZ9uDH",
  "key20": "4SVnwWbfJcSUPKrqrR3SxCGCPpBojWeMtFKESawmtCopb9yFNRfqB59uwWdvJ1vtcC465tpZX3ottYaKUYdECYTi",
  "key21": "2fkXs89kmApYC2GzbrPaNU7yywTXHi4bQL3REUMr1fC9XE719ZdcaFu2PWNro3941hF7p3jZhnrrWwLivqEr8H84",
  "key22": "5WYABYNNochR9mA7QrCrZbYULFv8PK19FfDresSsjMNJGnfniQmAPZuS9k3pTSNqLc4QTyqtxD4bunLqQMt4ks7D",
  "key23": "4oKN335fNDmk9nNb8AWk4KV2izYAjhhz4U8jc8Ae3webCLyCjk8oWSpEdFyCoQnGQGFndapT2r9o3fSGkH9oGQpi",
  "key24": "342zw4iZXHaSyZGuqrvVvFQSvAeLxzj8pS7BVqwUEhEqwzWJLD6S85JRuDJ1Ncjd4ox6vEnPVnxUC88wb3hYudRb",
  "key25": "3gC1QNDN8qGoXYeg1964oiaUzK1XYv2cxxs3FjZb7k7mtMyvRnLsRNXRLYreFXHL4xK5Mjz234W6mQf4Ky9ce5dG",
  "key26": "3n2A2TznMmHPeCd8sPa8AFgiRzjVr192akF4EG6TEpqQWyAXSqt8DqVBA3togNDcHgwVbg7eQdkSZ9QSpx1vvFF3",
  "key27": "2yhkSawHV9NR1atSnUhBcYVCXsWnLg3tSXedJ7tcKFuHkd2uampztCLmD9yQ43MJqzRUhLTKpVVmVwktuK8qT3jd",
  "key28": "4X9PTiZQKzevdAVUe3TiEfHAZ5MusefxBg2TbD6Z7FASH1PmeXfejmbsyU8p7GiJBRggGkGBvMbsbZuNYKR5ZUDR",
  "key29": "nwUyCQWCG8MvDDxYXaL7yEt71pNjqv2zJopGPX3qn5B5TnvNxtbE1qURw7P17oKtqo4wWFakNP4wNQdichPdN48",
  "key30": "2eFFJUSWt4cwuzXGxDgqJdLNrwymgKbfFWWBK8ZLAnUctGAPfhkWG5XUEcTS2hG1xZqvfnmqygSCxnrJfPUium3J",
  "key31": "2dwkEACp2vQkjzCpwLt6WA2dAqyiNorWXJbrRgeA4VucrmNixRky2TzYiaQXJvFzN9qG9nux4rPAcZNDaZm7MtSS",
  "key32": "3RhWCboJfLxoe5SDx9YpWEP8PVi1wG1LX2FUeu2RR3S9i1YKz9VsLMHspjgvw66t23cKbMMahrRJyGnsTBEYuJSh"
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
