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
    "39baakTpyj46eu9wV3TgLZsWkwYnsFrEb9GoogMjRoaFgeCUJnMr7NPFmjzEeKv4Wpyn3P5wuS9TZh9rHB7KMCwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EY8EVcW1qBuyHwv49beEHDnDSxJ7aj86JdScXdyLDvQ9mrxXsMyrASU3mbiCQyXY1ktbwQr9CaFr3Hq6pnXC6Kx",
  "key1": "2CqLY4v2yXeraByzw4ZZzHqHM7e6MLvQp9DpSzaDxKcXn2t5geGsD8dnxXVa9x64ye2umiovj1Yffj8SN4LfxADN",
  "key2": "3Rf37R8BAeQFPoLkUVZ1wpfBVX4tvNsVzR8Rb91aDAXtGzfj7z8qStCfiduzG5hEbUy7CyQrZQuAesxDPCr7RGmG",
  "key3": "5b4NgE8c4BjdZNfYF2zGa1SDwrzHFFHYis1MV8EaCrP7NzGSaTZag1Yu8GDGFZ4hYigRpJDL86WxG3nZLCkaVtbU",
  "key4": "5fE4NLris4CAZUEF98mzR9QtDUwGDgxUafta2niCJYswz7gyQtkyQrvWqcVHemHu1m7CAovHso2t9tWELGhQTxz1",
  "key5": "4o6PH2LJjPMNNsr5DC8TyLDezPrqX8xvMFAaZ5dW8wxXpmUtxkdrKsz5jQdmXWLCStrGRSGh25DMRKVRKJJjgsjN",
  "key6": "3WiFSyXse2JCmMUQnkgXBJgrgBce6nRxTji1DJQdFV16ePXknamgbgDdc8mc9roV29TJoP9xQrRFr87rPi2b5J95",
  "key7": "239EnkEPPwF7EgBiAkw73pVSiuqshptiNRnXTWQfaDGCw1eUnGaDhdYyA5zjkPGsPK54X4zueG2w7zvTaN3Gzanj",
  "key8": "5GmFMMCZRnjTWmBhcfNiFwZPLLrqmxAELShKBTv5L1iAEitZYjdTjSiZEjvoHMvHpwjrx25bqizAYmcG2sjatysH",
  "key9": "3pbFe1sK3hhH9ngcdYVpe2FxYYevA3WCvdPFfUE7gv1xdJgXEpkkafVsQfvnhWr528xedu1wSsqaW4SXRTMdgduN",
  "key10": "4W7rxQfJYHCLPv6EDfBqqoJ5MtN3mezFRwzYpmTD9XjpFy9NG1qpGwGgoTC6DrQrTfHCtCQW3M8ssJEG8NWUYhqr",
  "key11": "Sc2P7Zy6dahos5VfgHXFa3pDz5jY7ETdeBRWgRDLLhPmQXBK1fqWDogTuWHrwdFsb3k7cmR2xAbQaND6xBH7EAj",
  "key12": "3kcPHbZuARLSnYLfYnESZBE3su8cE4cX21oJnCricPgsHx4xdaTS63bCosmef98rpEpQP9Ff8vE4RrFcaeeQnwrw",
  "key13": "549qSMML842ocKrim9DzgmDqaTKkPazuJBizbmW5YsejB32oSoEmNv7DsMHkUYgfhzrgaPULe5TvdBQ44PnENcn5",
  "key14": "4W7BJabaAwLH6Nc8nAa8EJJ6wZatFiMyS84ygTmaiYcXV9aECDZUJq2K9Pfd445iY9CwfxG5Y2Lozp3VkFvQaqy5",
  "key15": "2ANKTmeyVPTKZ7anf1RXKiAfVUoyd8mexLVVNpUULJZ8rFTXwou8AFQmKdpunt8wCEU3Rx1cAbQ1HkNpVtz16Sfd",
  "key16": "3FbAV7GrKkCTYRQoH5KPUKMzzNDsK137vDcrqL96HHiFPKWWBy27A7RFDM75fhmK26Tf3k2UwEz5EiECoMVbjPpm",
  "key17": "3ALo1Yy8ggFFWj3iGDeEwB2aLnExBDGTvTj5kE5BgxESyTbVi1eoSaxHPUvqnkwunwaZdSftFNrKVvDQqQBi3kHa",
  "key18": "pSzTJqDycMtUue4b38nCoheGa3wUyUifbCZyGe3cLPL3gAy8dE9DSZ57DHnkjTPRPSxfKN3tohmcYyLqqwRbvM6",
  "key19": "2JXyxhiBDFhP5eqtx1Y8zmEQmCSyDWYfsexeDBmrtJBax1kBW9SXwZwf9HP1fJ3JurnT7bz6b9e1c1RXBRREBAGE",
  "key20": "5RkKf4k8JP6ZP37kjGBRGFNsSJzs4zLUwg3YwmASyrJ8T55uvLEydM36LuThizBqL4LoKZnunc7n7inV815EYvMy",
  "key21": "2KwXitJAxtGf7kbxRwxxYb22ERafedRXD66e91YxCB72NCDthkfYfCLedEg91WE1ByUtK1juVVzimkdbpCm7Vwa1",
  "key22": "5t9jcAjUKD5m4kNkcLgpHERjFFZu8HByzHGBcRaUgfybMBkKVVUnRnDFkC4j3YakYLdjBw5Cyk1XAdddGc3pru5a",
  "key23": "4hkxJUpm6wYtoXuQwq8mbq9DWXC3dJMSqcaX7jugByrb9gVGuuuwDofNmzxVkUJTYFUstiRWWCsJYHuS1hhTwuEH",
  "key24": "XtwQo9zZ4wBTYZQioZytGivjRXabxLUvRZFfQTU5xPHXKkDZCc7Tq7wf5gU3eEt1pe49iWHnqajBrEQxxmUWjkT",
  "key25": "C1hpf1zB2NHA17yHXHXJkbaPYNFB7NqoqCEfrZqL9MutE2A3KZD8Qtow1Ptv9f1FgtDjpgrnrg84MpfuvNjMZCt",
  "key26": "2fVrjeLyRxbpn4JXy8fLPfVdq9UHYrQgrnCu8yKgT3P4Eii27wAL7cHkbwfNScu5evmU59U2bV784cpFaAGKGsY9",
  "key27": "5fPBxwyUutcAzcoUMCCgje4qSLX3PiRH6DZvej2Fj32oh5fdg6wLt9x3Aew9LTQNKgGKYoG2Cj3aGXFzixMKixft",
  "key28": "2Uk5Ji59s8UKT6LHGjpQEPvMUcr9huHXeAKQCAz9vPUpfbNPSUkfTUhH6BWcorAoNEychKjszF5rSy6GiC4Xcijd",
  "key29": "3THKzcKqhoG9HNCugEcVvhJpCxdQZhCnhzj87XyRRP9RZVEgv7zDNL4G8tTEcHKL1jg5avXVJWRBPu1fwpQkGnz5",
  "key30": "26sWeBv4SPsgE9W4ZMhTe8PCJyx56MGUVGpi8GhKaEYfDnNWfudKS7iypv48f3TzjCjjXcjV42e9EPUQbp6rXux4",
  "key31": "2cLUmvVRBtXUWwSwPUtEH628rpmZGjvoQWebJFJTpNNSdDPy8pFRWSHmgEtiQ7cTQrXG9BAWLmPmrvBcp9vyh6Rr",
  "key32": "4xT4zvmiu7cZnaGFZvoCSACCks4VRJ66N9smoLa8YNBsq2jmWrRyYSMG2yGR4i5CaQ1UwukxyRbV11GVknSrGifD"
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
