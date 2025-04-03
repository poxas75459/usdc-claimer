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
    "5HhSm6dh9foZ77yWmmN4UVziCXRmJrhVqiaMpxhHbuNyVV4roajSLi326ppMxeiWu7WiEWfLB2nBpyP55X3P6XxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YXR86JTLw7YJU872dVdW8Fa8xwYghZhSMTYzJ3NbwEz9mNnKChgZoj6KWqLgDGqJMwxbNKoJhP8ewg63N43hYCZ",
  "key1": "wwo45VCNJyCYavYYAxEseAGr7duUBwC9ENQzu9k1YTGJCWa6tmEqepeaDYoxxcEPQADgBhFgQNZitTZ9sfMHzVw",
  "key2": "21N9hcnb3DoTWPQqk1mJ4FP8XDBpEt1b4QxqbiybZzLSzKLPCDAeqbq2vBeow1xJkUteePpwbvZftfyrfZGi3HTf",
  "key3": "2tbEzepUkdyJzLrNEAAPM5VnWbJfkr5epvpYrGFVP8vcm7dsfsZq4Q25oWQB2RASwJnY22RxgyFcWm2qdsqK6G7o",
  "key4": "5JvuTyzA2fBrRucDc6U7DvYdoVQz4ZceD6hQPsW8m3ZYqWYB3GsHBMJwVF4xSaavEcT8hcFqGXxw7HVyW4kpkm5L",
  "key5": "5ceN4AZejpFXxHgQzBJHThGFZm6mSt8jRcibMqCxwc8Sm6E2fSHoHya5F3rcgcpu6cguzMuBPy56An4yBBVRxAvo",
  "key6": "5GnEnESzhabZwBPB2GZTXakntZeBuG7x3Yr4TotkVuEgSye8GtwpD1QqTAcDK2TJRgtRxdJGkyMLVM4iaXBbLvNs",
  "key7": "67CbZc7Tzcao1XrNooAMgirKAii2zEnU67XUfZKDa4SEy8TGN8qnUAqQ8Uio62gGfCzqmEtAfRE9ADrXuScdbUad",
  "key8": "51VrC43YhV1b4UNeLkjxRGvaWdyeWyYX4LphzoiKbk2Kkcek4N2ujPezEHKpHid97HA7aVkyfsk2anE7FXzhYfQ9",
  "key9": "HJvtMBWebjjWwsaKHa8TVoZ26ZPBC5N3FjP94tNyXuerZVbh2NW99fFdKhLNq3aNbpCXrPSddLezgfvmwFaXjkJ",
  "key10": "4ESPCaTMtck62xwKtV8U9nwghtPJffJbbscRX5H9KTzJGXNKtTZwDwi8Rmka27asCDeiDydA5raZxvT4j4v1WwAv",
  "key11": "51Z6QAF3hdYpmkQUyjQtBo1sq7s5nXMkTywQYqQvZ36MC7m9H4rHdRy53SnBvLRQaNgsmcEhcZs73aQRuLG9MKoe",
  "key12": "3vkMDRZtYokunfaDZxN6ptGXrY9wsRUGE3rgHPx3NQQz2EkmebSzgHMXGpPSJB7HFoJL3J24fYeA6qadepo4F11m",
  "key13": "49Qt9L3Pf4b3fHASVGRLM3JgDF3YESEC3v88ukqF5bGgdTXPAcyh6Fcjd3RQu6zjT8fuxCTefwVqx2FfWhLojRzT",
  "key14": "3T71us6Q6D9FK79h73UHwZeRktCeLJ8DScVU4YcJeCmYkDADJvrCJcoYyXAmuKEr5tbUn2ba152fr2rdq5gcFu71",
  "key15": "4qcjvR1Q9RUpMLskWdgrYxDFLXpHfuiSRmdc7RBMbQWWhVeqz4ne3H1o2PVdpq7YatBzxRU8czTLFLVEgTnvJEw2",
  "key16": "36KhQpk8UVuBUT3BYp5EkuxZZejshk7qGNMWzsscs3jMbso1kSmUcy3Lncb5YTWx7aCST3UBQkegsWpkuRqgLRwX",
  "key17": "4voF3EfAwgw8SyGpLoQ5Fi6Me5t1Wq5Z92m7VEj8vvmdU7mg1uuH3iDHTEwm4YoFemTqPNp71zQ3RqbXhpYc7bXD",
  "key18": "2XQ4enKsPctsKy6zM77uDP2sSGc1iUtqPzkangH2SsaQKL4GsknT9JoordRaXfxmdrmmukEXF8U8GjSYFrzQpWwd",
  "key19": "2rejN9F7BmJBfaKZyFAf7SUBEdnMXhnCjLiiNVDsxzAETsjAvVUWfx5c9f5kL2gS6EYoDwuvaHx264ih6RgzWhd1",
  "key20": "4uSn8kyVGcBKhGuDNYuqxMPa3gnoGLdzk8Nsp9xz9nSqcM4unWy9eabBXzgciaFwA4FNbeSYtiKHmMzBAdWzjTgh",
  "key21": "3daT58pWEBkN8m4Xb96McH4kLfVVHj1ctYkdARwQkzoYHgFLVkTHWch54eYfMx9NDWgeVsFmrmM5S282XGMzEeYg",
  "key22": "3bHwJNEi1SYLE5tik89fqAaW3vvf9sCKpewUMvDzRojdijHpU5GK3j6B3gQGAyDobByAe5CicXXHTwWFGEAhPY9Y",
  "key23": "tjP7iCVAyspKkKJ9BZV44gbphavTBh9DrXeLHqwBSnt3hJV8KBS7YemhKDc7hLsM6P73TesvxQHzL4TmyoZC64M",
  "key24": "3BpMXeg9JR5TvhNCjZuAn1uo3LCFtToHrq9RAANFVQCs48BHhUReieCVAQCzXg4R4nKXtgSMseqxvig9bAZZBQ2A",
  "key25": "3n4yrqq3fYztRUbqPoufRgSUSeCTxXWCRAeGRCFuJVdqmmYhAq58HDqMUVyZudTa3xrknytwr6SFoc1AdbN2MkFr",
  "key26": "3JAZ3NhT86fGEM8V9tbZanoSWZjQnbCAakd54gshKva1aaPtq2PfEWEtcZHGBQqXB56uVXSSbfpYE6eBp9Vi5795",
  "key27": "4tdm9xqicXbCLTcZJDBYMPuL866Cwq32GEBRYvC8RXpbzsTWQpNR5ndhi6LeE9vzpMnBu4iLSiK15qkzzUydHBv4",
  "key28": "3fkfrAt1UpN84MYoEVXh99CkpvhTEqswhqn8atLBxvaWR1z36Ra6hbFpNY5DDqNmtZQMBQruchWY5gCYMM7KQbjJ",
  "key29": "Re7N4oFxBaKnUaPFfRknW1K5om7cWFkiwotyKZBc4uPuP3gUSt5eBTb6Saj5qPAgvGqpxr9CMafdYK4ksAcxcfN",
  "key30": "44YmkdSiymnN19PRUbWThU8F8Rr5YPXF9ZY8vCGGowCkqEtFv433T3j46y6vewM7KwqoP3DMu7BuhFv2QDL3UFy8",
  "key31": "2HoLKN3wWULgVMjUZh1gyYvGv1DDyQqYJBbNdV2kZ46YJy8EoSjoSBdr9EKRmySjECzWFdTmpsrVEJwg7eSXhD4E",
  "key32": "B4Lba2DCwwNRHmBdwCz3qfQg9eZmLyTZvDrJgRGRZxWFBvoxjKHK2ZVAEDccVRif7NJ52tBwmp4nSRuGDMPCGLZ",
  "key33": "5tEGBxEt66jksLq9rkQjUwVQ8FdfCw29d2YQrddvLQyQjWq5gSuWqUKXvHQcKEQYbosLxjPrbojUEWCECJpkUQc8",
  "key34": "2kxATzMjLo2v5md2iBB5fs7tm45PCkj87xB6MmPGj5etz1disFaiS3Bs9JLpDBKX3zj3mi4GNXy8HMe5uj9x7rP3",
  "key35": "422uHwpbEmkzcFSzQzH3knufePJGuBwBxSiwU5iMMpSRCPTw4ocSNEzAgxyPgRApx7zrHBUBq96PknzUm9j1aW8w",
  "key36": "z8B9ATASi1aoN4crCB41mrV2iKtFKfXugmFbs3zBeL477KNqb9Am8WqDXcBuFAyZvQPvCsfLTRsEsTUxcHKVFWV",
  "key37": "2LWYLL1bdMhnuDjXaARAmNpXLxGTgjYqz9RrLm8zSXkyVprRfz6Vx99uh4TYq3H1XJiEBn9DRnFkX6pq4pUDyfCK",
  "key38": "k8XG8oS1LiEKN3QiydPehVXGRQGu7wuwqTNNC7YFoikSjmEhpvgsMJnmGNd8ek2PMQrpsXcbKKGT65T2qTPiUXM",
  "key39": "63fbexBdd5WwmdSgihG9MGrzowEW6UXvXGemvCPvxwM9HX9h3qvR4yeW23EdUpwABLMLbdAMaVcK9a2xhPYWw7Q1",
  "key40": "3r8oT9i9qgdJHKxSWuGjf4QwPavgQ691m2Ko784w2dXYix8xC5HfesYfVxYRMUYVitZA5MSDSFFwggTLAbQy2i4J",
  "key41": "2m7YTWkmNxcoyBzvYSyyu3MPsbdbMmRLmUMwQUGpA8EJpgyvvMSXwKf8TNAqH5w3fuFAZN3hYBC7zzixJJVifjR2",
  "key42": "4QQM5xsu16tnjLCgf5MFwn3kfpvceEWnym9mpayuKuGWd9eXNRUNc4gBEyUyBrs5xqkXPb84FP2Lxp13egg7yDmE",
  "key43": "FnGwSB6MdwQrQUn9MiTxJPU9j4EWucWnKtKgx1W49Xrzt113YDoVHzm5fHFojbhPSn8cqky9c8HuMyMbYS6T8Bj",
  "key44": "35bePSc2JoxX1USNfEMEyhpcVBfStfjZZ9tnNZgarcGqVrwFj9ajfAWXi7XSWfcrms3nk4jWM4oJ8Z7gixxiLgDD",
  "key45": "3S5K8F59wuNQZhodq32YSXKAUjoPPCB5uXNYHxt1xvYQRChodqFMHJQZxpk7XbrJjLDKPN4N8mw6eaBWqssw4LrW"
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
