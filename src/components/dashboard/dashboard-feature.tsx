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
    "4vSMhcaFASCiGgwew8m4kwd32gXzoYosVdEmpFuvDKrroUDm15AoCnv2tTFa7q7jNrYG2zPFJTW8GgX6RRq6y9V7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2upMZePeGpBciM9N14cWg7CWiTKwVoDVdiPo37XZErEJ7kNzvUovJ3qYR6dteLiG3sCtggcUFc8FrjomJFUgg87V",
  "key1": "4h3PAFiHk9mFW1WRkWwq52jjFEkr3HTVTF3Buf8baWrTaWLW7p3tfbvanVoh4ApdGcYmkTnFLiw2LRgirZcQJsN5",
  "key2": "sGk1qCgpbnDkCPRw4fWZxPgRwhJEZHBtL9PJsCVZAF7pCizXUfwmB5KbtAGaDPSwbQRZQtz2c3RgNuUdAzhVA5E",
  "key3": "WE864wWyNFim38Qu5uep7W7jBBHN3vZuc7M6GiTMT1vNDocfpGDWVvy8dS5ovXN9xqhoQUYgytVxdpjDxSvr5NU",
  "key4": "4ZdyKyg6Vcc9hdDDFMWow1dqBHF5z5xtQJhRmv44nNBm93ALziynoiaZRzCDMC5gBpp32QD7M6ijuDpARk4SbsxZ",
  "key5": "4jfWTqjvRKUmdR86cMEM54XQA1Q7D5Gf3FWhmFMfgrJjDSPGAXhgVVgZ37QZaHEgWhyYFMRKhu9HyVeXvy3YmRUi",
  "key6": "FQ6UVELU6opPTuyQyooudQgcNbWwofp4V3zJityTvFy12K6TN4fWwrx7sZeZNRTyGjLqBu5NR6ykrrsriA8DApi",
  "key7": "4RLsnA8Fsn8b2mSeLnF9t1bUR4MYak5nMUbxaAD9zAxdCESPPUB744XJBWpSvJkMLSi7tw5McG8kvcdjpxZ5Eupw",
  "key8": "2hv7cPvcMD2VT1JRvtUzC9w1MyPjDHhdwMffaS9MqyCu5BJhtPR291a3TWsoinXTKk2bmPoszfUJ7bsvtHuRtouM",
  "key9": "2wZDZFm812pbVHfzGoqPuG3wh9jv3MzMxWwdAejQtV66ezWbw6fgbxHUErzwobzfQZgJQZv4d5JHC5ADrfC31iqJ",
  "key10": "481NA7ssjFvQJNw1ucqbPpPvoxtcnwqVLAtC4NhdagiLzrYqi2p4H6kuNETd5FYB6RRHjxbivhaDzVUTL4zzGkgi",
  "key11": "4qvyjrQH2wfwP7TPS5gCNZUHJQeKg75rfgHxLNcKGLSdaDhmJkURLwZQhhHeSafVPEnWHrxAxtCBGQJMB6xA1WvA",
  "key12": "2WZBdUAfsze1pjmK23UH2vVDkAWfz467j2nfTgjbatyNgeEseemtQBm24W5uLX57TCCcYZAUDzVwA7jM35n182Ba",
  "key13": "5LRT8j63JNodqcHxEQviJVfPrAqTudJwb7kjhCBhRsYs7SgrzaDT911jJP3bjESdwsJinh4ktwAnFbDQs4NC3NaZ",
  "key14": "ortaS38KdiZsA3WAbhJiGacwaoeoDbcw2tiqU1zmAvQJTf6frPHqW2z8K8g4r49DwnwvwFmZbaAtsChJmsw4noL",
  "key15": "36HiYuNGrRfLWtM15tRzif9f2XU3Cwemzxu5Ygd7B5RFsfAfN3BfSyZ7wKKAtjCxGsYJQSkiSBcrFL43LY5p9nU3",
  "key16": "4x4xTGkztXakLEKjHyBtF4tau1fEz6y7jUDDDWktToZGLeiyh7Ni8rQuAcettyZeRBAFEbgcpWHjbEZgdX3kXcKw",
  "key17": "5z3gUsioRu6UKAkN6PRdYbeu5cPDxZ8fswYnbaeuGVGFxh3jRSYaQ7ABEazSKm55GuUyjBxiSeEKMvqCtcS73Qy",
  "key18": "2fneSZwxaKgr7zUvR4q9QdJAvBhzxPcBYfSR9FD2hiJoRjyiCSRp4EoYML9fUo8XYV2jcKaxR2ptwkgKw6MMupFV",
  "key19": "5SX9x8wm3UVx4dwuFnCb2Maxju7uwz5XH4wzCM3aV9S31THjxyXL4rjrvaUVayNWQEJr1aVGgdKbxz15DgjsbB1s",
  "key20": "3tZ9uDLstsijmrUbKRdEK5BTGWwE71JGpTAv8PjVuDGfQH99aeezz7KFS5pYGVPGoz6DEnCxyioDoFqs1p19hG89",
  "key21": "2oo5TkASDN8K7CacMn973NGYartc6nNUgNheToxQLafXK3vm4jZyveEufx8HjMxZx4jjSFt5wxfP8hjTU2TSWUmi",
  "key22": "3itqLXyYpEpaWvwjXfjgMnA2ZBbR9dsJ7VkdHT2AhZZYaVtn8SpLuHBS3z1qEaCFBt2EyqdR6EtBPBfvi6jJMtuj",
  "key23": "3BS44h4JurEVtpqik8gj8aVyixEZtL2AfRvibgCwGebyuvkubYcCwrJ7T7pqrGULdQtiJA55pee7CeqaWVyXZhRt",
  "key24": "2WeAsSTrC5WcmGjWhisnYmtgQZiinSpq1azF82Q3msyr6SqgBWMCmd5hRghZLhDJJ7Sv5eYQAF68rbvxwZky8wjf",
  "key25": "5n9s3nwSVuunQ7DLDk2h35WowJgQAGz7dWUe4ixvUVy6r3FgZiRLcBbaWpSduKKS7N27YfPWQ5667LgSMCSa4veC",
  "key26": "3zzWb7Pwgm3eiRpyuWcfMou3PiMQsPyBs8SPCXydkxMxkdBdR1EXjx1XdQNSvs3g8NgGaobGepx7BPRHBhS5iKzj",
  "key27": "4rdAV6csqf2Eq5h5uXqXd6rHsJz8mgVGn38zEoGzi5pLKjF3fYm9eW19XFATDgsNq4Kh7kLcvGXNucc7NgQf5xqS",
  "key28": "cYKr7ym4EvJGjaGnZ2v8FBbtyRCn9AnguQkgc6r6TGfVkdW3bBmWB1NDVHvVEJC3ydGQUHxJpgtqQwTXyfrGmZ2",
  "key29": "FfVkvAdQN7T6T6pFnKDogssh5eZqVSQG5ZDDH4uXWj6xzgaUFQuNFzP5nka6P6zAR8yn42Bvhh2TBe4fqKPY2Hj",
  "key30": "x5zLEimd9SLJRHe6RFGGbW6PGD5dPNqy4hHEcd4GbwUDpnL9Zw7A819heRvqSCLbwbCsYFxqrU4kCBXiLLc99cv",
  "key31": "3cVa8UTfvMBW1MW5GMSGdtU31SnXQm5cbzW9zqos3tRH1RcrZzTW5SDGd8To6tGA4sGfsbs7wwGm81ifHD1d8uHv",
  "key32": "46Hb9Gd3ueKScFNXS3zeu9Y8szcM1aZKwTofuz9pTp2R3XehnH87gKf7fZyH4VcmrNThbSMkkdUZ2MQRQfAydivu",
  "key33": "5kYTx3X2zJtKbv3BsBQ2F1aQturtGZPBFCmmbu9b7ywhsZb7arnhuptbiKHhw6Cv3rAsoKTnqPDnhRHCTD1Kzmrg",
  "key34": "4oMY7a6u85yynjgAeio8Gnn5BNFNRDkhSC2og7Jk3mXLUmCd9h9jFK9SUM6fRReNrVN45nmsy3EjPkLhiC6NqXjz",
  "key35": "4zVCv2Yf3e4BSmnTNg9vNyqTcd7Ku4MGMGKgERkWC8mvrJXY41DHTNBkiPpYdJvhFbZFbKDq6QnmnkqHe8CCjVBe",
  "key36": "SxMiZV4yJNPPdPjji5jSiid9UNX9miB1UZHdGQ2NXYA9VUkbuVEngWvCZgNiz9xhF3LGF6UFWMqpiUT6N75aX3P",
  "key37": "QFjy3ACSh1gv3xR8wHuwsTwgCTvaNBWfa2v4cSUzMGuqRR4XfmwjHth1pNSD1fpiqbbSaPjodvhF6RG7LP9fosT",
  "key38": "4BgmbCjbhkwzoCfh1ghXvCtN5D2Siy6zfbk4eGxPdaDb3aFTfBxgMQcR9uZme1NBrxpzKAfJV6ejgG49Q44Z79ns",
  "key39": "2nWQogVHkEPWBNmwboMWJrEJ9793L6LBU8Ce7DZEaHkSJ576gXRAmQV6KB38hybecSrNhnatixS5pvY7JDg2Xa5M",
  "key40": "5WJiHAgwRpK6FXY4K6gqiv1G1zaC3Fh8MxcNwJTEu5hdYzLCaQkUivK65Wy2NApZiCEWZFFGvp3Jc8DC5t6haXuj"
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
