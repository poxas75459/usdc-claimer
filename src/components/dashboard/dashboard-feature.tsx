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
    "2GEgTb85TS6ebDDb59tuJzXEu6LDoAfG4fUKRN9P1gAN6RQJH3PuTRVvVnxRzsYJTmYtR2c6bVVPtkXmBMBszHbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fktCvfg3PjsNZdmMM9F4e3TgFpRmGpaFVptqpcXk8EeFNy3CkBp6pr4g8ZviQuWnroqG3CkXeoNZXA3N4WSakMa",
  "key1": "LVSMzzsiuLZsPgB3nJ7s2mxq2yaA8XzerK3i9TS3ygJevuzbBWbpbB53CpP2hxMefvR4CDVfkSsDE5p38HiDL5s",
  "key2": "47Djnhd9uzka5oxXuFoZ3U2wzMaVTsoB6ytreZNf6yN86dZMaXntD2LD4Lwh19dXCjjZEkZx3CDqoBFzPQL89Lis",
  "key3": "T8TfvVC7YmZ9yktSSbdFNVjK4rfpyA3M3QZeXQHBVDNNAh7romKT1k6nPCaqVg49piiNhTMx5LFDiLUpmn4zn2z",
  "key4": "2AtkPe4kgjsWbtqfX3KJicx4MxHD4ue6uMRLr6trPdfVt6WPwJomeYoBvpMCBeYNUd9RMQRe5ZtVoY6dxZGgJoyU",
  "key5": "4LoRJVX2ouhrxn99DwpwCKAUAYyVuby9V19WMW1hYmu4QamkBBf4VQTijMFdeMYiN9NCkvDz47kSKUzXg9wtLJ17",
  "key6": "2Cvhpp4H4nhaRLY6UydAxZEJMcwSxmTWxVk7kZrQj9K71Z5feLZ5qtpuhi8m2y83VnzdQwwZLDkZgcUx63DHCKUs",
  "key7": "4KPDgzAq93aVZfFMpuczVf2jYcFTmYJyCNbT9e95J2dCrVdWzTXrtXf6yf8fVtuzUfEN9wVoRfTAGzzsPJyKBn1c",
  "key8": "2x1QAp9f7cHZQcANWtyfYVJ1MQnDHUkzfc6GbwGn9kAkseUMj2uSud4edvtQnHaBmRWqE8okZywjGz4yS4PHasm5",
  "key9": "35YLuPKjD8BtK1UqVBbG6UEfEemSDfdkjV37uNeqfst3YYxdRCBNLNdKUDtHcmaMbGzjV5Zi3Wo5hsCuRabk8wM",
  "key10": "UmVMUenbJX5jQ44Z6C2xHDizPgZG8ZRBBWdRXB6G6sLUdpNL4SbyDxYScPwFqw3tJtHJ33XU4Z9BhaJuGZjA25w",
  "key11": "2wGrA5qz698vQepHBy979EmdMaor8qwJjDCGEvTd1B8LFqcaJLWuFwTxSiF1A8e9vmMwD33D2nF6KtFkkdMRC1cZ",
  "key12": "38ZXKzcbYiguRkt3XzqwPsibLNDJmHucdoazmniv1M8BNQ8pzWLBYhRu5xvbHS7htYR49WrfV1oTKkAYYVPbrWDK",
  "key13": "3Li62GHVYBhgTYSRWa8z9wZ8jz532yaiamWbN589wavf2sVYjSTFdK29eh5Uaxcufi6ioKX83h5JFiRYLbuHXAmf",
  "key14": "4Yyu7afRVcbgC1GNqfEiPEC7Zweck3TPVnLnbwwiwEu28RwKf4ZZpzR12Fhmgp7F29AkzE9FA5hG6xfEsTWfd4NN",
  "key15": "5SLwDhfnvEDjEK2zxkCeieAiBpQu5TcWBvnE6KACKHChLjssy4UknmTrMbnkP9Up5ezVQfCKW7a9o5qU2Bwi4yYu",
  "key16": "3uUP466jtqKsiWq1Ft9QMD1k9CvYnPTB957gNNSVpeUDvb66WZxPmo2qyaReTaaZN6sfTG9SFRrPP6hukpUysi7m",
  "key17": "5EWBhW4FLPosBovSsoL44tFUGtv4qJ1Vd93tQarTQvDzfC2ZLLFDvcDSXy7eDcinqoc9ovhjbi7RZw9qncJzGgYg",
  "key18": "2MHZWWyDhGxKF1HJjavAFL2VgBBt9YE7N2ahRPgB7ibsVG1kUkWqE89m5XCBJDawKfH8MnQRu7b5AvhhMFYWZYmY",
  "key19": "4Tp1CUYaixqS5T1qYezJC2e5m6MimZiUB5yakHcNmJoTv9Drwd1ugNwtWk8ZL7pd7v4SkpH4uUV9YNUCyoXkscxh",
  "key20": "3wShd7Xjf7zqiEZVLUBkBDH9GMqPmNN2Z2RgbSDCLRt7aWUB3UPfSBcJPkFqSoDysEFk5jQ9PuweSVcZDiNSjADg",
  "key21": "UfwfdWcVJyRRyMNUjutN53NrpGPAuU4ZtHE9vQD8pFAheW4y3cdWEpfkXaQKpw33R1NmiC9LXPp6cwRmH6KcyEv",
  "key22": "5dMtfj6qLW51FdAsaWvzMeQCGf5RrYAphte5DwJQzq8VYJi9JudEPuTZGMZxF7rg5zTr9PetdfUzXYRUqyWEqSX9",
  "key23": "2VCaQx6DpdZFResdLBZ3PXTD9E3wEV12XFnvAew7dYyDY6vcXTBN2e2MW8FX5L8RavFY1Yo2kgQr7PpBRZ7RS9pa",
  "key24": "5r8CnpQuRb9x1EQptSkDa93NpP6bZALvewfYnszUTSrR6Z5j9Fd96bip7eTJxSggw57LQP7SHGDP6nCySGwjAa3X",
  "key25": "3uMuthmUou4J3R4qdUj3jYpQMTRyzmeVqubeNGAHutyty1U1RgaD9mZ2Vqy2ajgnsnxCs3EnG1QFsWMhxZeDiuJe",
  "key26": "3MX6PdfjtjS2Dga3ChFrFUeHEeiMHTyV8wtpojVkuSqkHTjfPNuq7okBzRDk9tZ2E9vFCTmbkdr7r1z1CLEbwCwe",
  "key27": "3AxH5DWZkrRN4ZKEz5yFwTypFBsFfVdJasE878taHdtqbrF8HBQE6irTydScSGxdAtVh9uW9KEzwx8TSZ7aCgbQ9",
  "key28": "32vLfsy7Gj3pC6FAabjMD8mgjnx6vnCy48MQwnwPK4ksijspMa2qFPEcGiRovzq1A12gE4CXiYotGo52s3FNgdRa",
  "key29": "5LqdjcF5ezm2R3Yc3RrPCrqHF818hEiBe2shuwChUUvzcy7imsQPMozFhpauhLA35WCZy7p1MDmynqnJCoiY3Wjk",
  "key30": "5R28gmyZWzJZ1BE3bpxdghQEEknQgfaQA15x1oL4L4VQDb4UcfpfS7sca7zH6iJVo8tDnHK5kExu1Xf2A7geMvJY",
  "key31": "58kt3H9df5egRbQD3NGC3Lehe518te6QfmyQykawqyUC4ewWnq1vrJFvn3RbfVFjXYqUt7MXKM8mDgQczanA8Wt5",
  "key32": "3NRxk8HkedzfsUdiZ4G66TZYQ8bCvjP57tWFCYfRLTqyzSiKwtWSR5HJjsHf6YixXHRQ5Pgxxx4LasgbXWPCjqTc",
  "key33": "65qBYivDkStQJ4gnNfHTR2NG13sX6Gk7secJmTjFCkbRM7WDHUetSLhjAxmaTw6X9CPGLEvFRJNCzsAzHaiUPLFe",
  "key34": "5EtYQo32q94p93WreUwcsTPdfxD1BpTB3zxmQn1pEKrVYnQ7TCQR41dKz2LfC75iRUuL8eTN6SkoJE6FoA9rx3Hr",
  "key35": "nTBeHSLaFQUxPPzryroszHacxxkmjR9BWUUP7zRbRaWH3EibZExGzCFnJ9wcQetiXiWYSrasov3nq8JEyCKZtu6",
  "key36": "4Xix1oqZHcR3M6oQ7DSn7dLV2jYDQVfj7zKCZciv9Dir7BEhLoUyWkLFrefcNBw4PLp9ozvcsHU6ipAqVWM9LrV9",
  "key37": "3iVMUvmRvxFY8QnwFJeu8VnFEhmGfzEehoB8h7HxU6rQk63Wv358fnvLsiceptaApBuxS6U4wz5hUnpCDgUDDMZ4"
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
