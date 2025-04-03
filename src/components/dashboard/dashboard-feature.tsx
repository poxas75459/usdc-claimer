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
    "66Z853z24dr4uiSxv6WgZ4B5XqbfwyM3xg39WpibgTJ6i48kdHSbPescJRRhWAcHBb4UTjtheapKGoBHpTMncvoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z981PXGnh6CMvW72hFTxLr2ucenZ6FDkY47mxgKk3PXLLvhgxopskcSVjPvn1WiKmfDBfLxCvFc4f9DtF8mj6Mb",
  "key1": "4LWSXmyfSMqywU6R3QaDNGJ8V3QkSusNYeDZ4L5TcZArcXXaYQP4SUuZvYmEMV1NiAT4SHugEbiQZYX3hsTAfjUo",
  "key2": "9TB2K3bzxzRRMZhdfCUYbY2afUaMGrtD82XuogcbikpSU4vAkPjnSnuwjg1iBMaA6YsAuFdzTrzbAw7uSRWPmLb",
  "key3": "zTKqibydC2AqPg4DNDQbSy4KAtFLouVTUVjc8ctDXdFCiayNw1HReUTGmoFfVTRoTCk5rj5c9o4HRyKq3oJ84VG",
  "key4": "3oDWvdwfZncF2rMJwLBswUWqh7rbKuShsV7nMfVLbD8wqfcaWbtEL22wmo428M6MLv4EhfbZ6yrih9BNPKrGXCHR",
  "key5": "7yW4CWLawBZYSfit5WJfjVcW3zsPwtE6JgdSoRkYggVYCMDvF6wvfE6jaMnDb43b8RYE6qEaRGF86MppYCyBmgV",
  "key6": "5DKmmU9EyNKBANLjne37LMdkUv3w9ihP6XwDP7GLUvmF8yR97yCWpwJFZTtVhPmZrnwKpmyVJ4E3jxpDxJuUsGrN",
  "key7": "QPFue8VimDzdZSuYJWZMcMMWw9P6RuaGNMbCTzGigPfADrTkmaoRoR3d3vrbXZMrzAyifDyeaEoXaQ7dDUmcasx",
  "key8": "3eRX5YjieguNLfLHUdgw5Tr1X1b5qwazL5sarGqXepbBgbCQbxLdEoWo6tY7NobSYNLHrUSeQPpCoJAzfJgFLZN2",
  "key9": "3QSuhyqCvwDroi4m3Q8SuTSnUu75msZM38TWSLPRzxLu6vEAjRoh3GtJ5bxYHFCzZGGPgv63qFT2RhMzNQdiiTJ2",
  "key10": "2Gb11TMAQWgZaqSdEuv1zMwiVLMpVdM3vQFa9oAP6uqzT8kVYsLMUBickJxsN6BaUqttJCfeYR3M3pRNs6GYujU5",
  "key11": "2ThKS1eXbjeu77kAEHUbyAJPoFHLEsayRp3CM6uDwASm6BnipEcP7t72vjPzQULQymwJHLcTyzFpyQ44Cfp3hSqo",
  "key12": "5u7emvTw6EeX2smzoGqumd8xwCpAF3KNwMzEpG9APiHkvWCUXsjywiSqaVpMK7xuvHNMzTt7Bzih6R9ZTXkRNTCq",
  "key13": "VqxTTGmJnq3BHSDwYmn5wrYXiZGGr1taLT1DgWRuMxW2wWk4oQmWwY71UdQcdMKQqxxFnMih5No8rN4W8ztBvVE",
  "key14": "4NztK38rpnZbhZxU8B23qBJ54WaGxMYvQnqCjU8no6MKb41igCnpKkMKRSQZn9aaAaVVWQnD8KLT7Knh1eoW3CMh",
  "key15": "2cnoqAtBf6xMmCfumdY3wn8oypGYtqoCr7ZbJnpc4PcpTfcXtNho1jPYXcP2BgqTJLuYcp7YkibKjDPfa6W1xJGR",
  "key16": "3k47XK8J99qVVJBET1FvQdFAEzmViQ7K8WbYUpbrhqLYJ5ejvaw8nM3PZ2r4jEiLcmZGut6W8vGDduJf4pr7DB4w",
  "key17": "5isCZGTCW5ncuVYniqocj4JL7AkvgLF86cX2wztPQbGhFQS69Gy6XEtn5LRPX9rucvRr4jBBHa3N4hP3jCTMPyAb",
  "key18": "5KzfsZhnzNGAvhDWzJPyrTWfors1dwvm4TV3zEBbQGbm3pVrB2DdSprKW65xWFtiCv1BAU6L1AZvTAgc5GyQWjUS",
  "key19": "5Uw72dbZBSUgWpsE72aQPDfRBmR3tEgZCi6dzP3AFb4EsZdTNQRo8viepqjD6S4BRw3PyiByJZbsuZn18ow3FMQb",
  "key20": "2DDKQgmgRJerykMQtH2XaKmjHDybN8JtmGieoRvLcvg1DE1VtcAiL4twjWZafTvsHse3dkhcz2txJwjQgDJsSDhA",
  "key21": "vnUK35so32KNXjipB6mKbfHMNv16swyMfn8dXUkhFHmar3ppPycYoBZ9VHgqa4UQUVJUkPnDndR89eFrZxNRDyF",
  "key22": "NbaYo5wFWBDvcBPAVE53eH89tD68QiHXi7mEf3eJ1fGLuu5fdsg9ei2wtfpCZUPnRVCWQgQbyrfTASLor5p51GQ",
  "key23": "5uCDy48LZDe7pCJW1QpWz9bUXRZNBjQ7DJCm4AE8jBi6sgjHg1RngcvhZAA8Ef2J3nJwbJ2GjXV3xsUHrYeF8rvv",
  "key24": "ixpzEYyJyrKKtuFYKCfC7HP9KuP4QygbujowgFprCWHqRcV1n5d7Mw3CkY5v6S3BS5yX1dmvemqg3tB8qYs6uJv",
  "key25": "5vUmwqwndPjRU9wH5BbtnkL16ZgwiFseYBkRMpHhT68NL9UntSqLBKkuNaRpEU491r5tGYyrXQ1vgdzz9iUaJZ8V",
  "key26": "2mximR8B9p2oLU3iM8sKu1ATXFnr1orDJH5zXDxkNe2UDxCCTDAFJCqe5JHfcgiaro1rmdHY1fH1FjRm4QRdSREs",
  "key27": "3YeGmR2pM4EiJ8mJunpyvTrbsgKmQvzsZQkJB6VYXEX9HHb4WbV1eeQgt1ajiw7dkWcNfoH5PTEZ4bRjuvaAhsvD",
  "key28": "BjeyNhQGa5hsUaHpT2e9W3ZBDrA9dyAti7A1R47uhrNmiZkJ8hSYeXpHTJo8ium3ST1bqva1D6Qhhm8XTQyrUbR",
  "key29": "2toEp91tPWnN9nnLcnXnu9QeDdXQCyxHjpL8kDgByASb7jUGJ1Z4KDBUaSozdjEYLvaKExsqxq54fJbTnzgsA5hy",
  "key30": "To29dzFTFsMZu5s8V1SXdvqJgsL1Ug7JTqGMMu3UFSpwAKGfrZWjRNgFmJqPL21bC6yoEWo5DQ8pcVRJLA3QV2S",
  "key31": "57PXWjz8SXMitj9NN5qKm5RoxC9MUmkBseMxsaZXg78572er5yCQuGAcA9GThsqSDhQhJ1eeEUAgcow48oKQvYAk",
  "key32": "4V7ooRpxfZj1Airc2PKYSjv9vJmMD3GkcnQrU8gm8sH18qY8ou4KRoGXitu6YbxCgRHye69qu63ry7HhragAiaUc",
  "key33": "3BCA9k1BhhNMw9gyprWkpeyzi5hmX3YrU6ofZNDq9mcxpZAgRRgprrYNH5CKgpmZvGxHQyPFhMP4t95dH5uVaYRQ",
  "key34": "3oDnVKRmYzpXY7u5Jg3GZLdAu6ZbFbAyn1yQZhMiAAMmZmgkoVbB2SVE87eSD3rD8ZThRL4qEFds2iXueupfViMB",
  "key35": "xoPSsrgYAkMHqofxdwVLN8bRVPVCqMmxQuMeahoi3hmRBtLVTa2dnPd2Eto5K6BPCXzAMdUbSzQjuEkKtmmuh9W",
  "key36": "2Wx2X3UFZsVFLX1qejUMTm9VCjm8U2g2NwUXcFrRmWyDLzFw5oGortoUiU9JA1LDzpw9VSRk52QBvCgTGdfg9AkU",
  "key37": "jpT9qe6mLDYaMxCj7cFV6YBkbjEhRQukroHqPkcqi1qNsevZyaiwVH6XPBCzb5UxoqJqSNsxsgY3C2Ab6QGTqin"
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
