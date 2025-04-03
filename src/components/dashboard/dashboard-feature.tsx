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
    "2U4x1UQFcTnw9svpDFSKePEr3YEruEvbe3SvCRn2wpv59AVGrYP36r9ee3eFEFHALgMjtcyJNSNwLjSFUXz3BtQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3etzRixy2iFYKotKWJqeBzgxyTFMZvgaSZRMKSC7Yo1LnfwBFKbud3PNcRrscP6bztN9Vu3RZph4QFMzmztaKBSM",
  "key1": "4i8ELNeVKYrKZxZK4P7gbxs55VWUG2zdfWD746PTWAYjCqMYtaKcNkzfwsAbMcoe6hGSwmAXq262hNxVmts2EPfD",
  "key2": "4rgx9P6Etdk28hwah3FYFxp3qcoF6BUnkrpJyVHG8aajAutZBFZG7hWnKuffPSTarVM4McB5i2gy4eUak4eyLmWQ",
  "key3": "5yeJwSxg3gaMSq8xzVPcLccK1jPxNcfepoY5Y6ZcNkeo91jSPpDxMRTWuBZYFYfqEn2b732C6dMXYHqjQcP64Q5D",
  "key4": "iXJAbgBYKZ4UtwZD6xZVajAyiytisnD5AziSe8Xta7dgiLKEnCDqgVN9VziusqiUDREvtimXPL5Jn7XQ1vxqz7r",
  "key5": "4JrVDiU3D1aQdvGUFVsCXf4cGKGS6qVgeGJkZyFdBB5PprsvuXoAWH3nwdkrU6Njpm56bhk8Xt8DXpLzDm29RnBG",
  "key6": "5L1XvUNKdn7Pbj8CN4jQ4d5z3pVGEkgoW7txDSY47AWnJL6V5M4CCBpWpupDeNPt3vAZMoefqRzDAiwuPtP63zDF",
  "key7": "5CD4TXX9XXjpBvCAMBdEZRJHPHiBMRyvMTHaXLz4LTt31y7QbsnPr6pDDYFBRzsKnsxmdmKvvJdfgLHsdVvN5pFg",
  "key8": "MYAowWiV7V5ax6jwrtGkJA156289eqfd6X774HFapQU1QaR1kYjrrxf43u83UFEnimDUtx1hMW4ETLRuQw6kv5G",
  "key9": "3j5nACkKCyTTWqr5mu9vNd9W9eVGaPV4XvGTu6gs5jkfr6YFKkY7y519Tge1r8WBLYYgngun8bqMb6REP2eLcCbv",
  "key10": "2gPJDunTsexg6g7cJCZxw5D8ozGmKE7EDYmfv73y7bzKMvpw4KQnswVV3BysVYcrzAZ5WTkprR1ht1BkXjAohVHx",
  "key11": "67M7my1NzUFdLSr2eGoDnznmCzKT1Ky29THkt5VMXDeXWMqL5CjhuvQ9FcmrKkfF329g4YCYESiP7nZwStL5MGiv",
  "key12": "2BQV5J6Adyk4tg6Wbz8WgLGYUz8vhRDjmLmDgiGgKaBGxM2pg2QUX9QCmmVtKTvZPvoiu3VzWhAADzo2oVctyZuJ",
  "key13": "5t2yZM7xxq2pLWk8F5no1oVumyiLJkBShgSzF5TVdkTiqbkdLRTXEC1bnYAiY3gvZpQQWTgDN8fo9bcyj42eJwGe",
  "key14": "2hFt8rS6WJakoW1h3VjCVMgjTxyJhutihL3so4WUUmWhTM38qU9t9uRadbomfR3Ab8QVSQovF5ZqUzXk6qmtGf2z",
  "key15": "4SLiwakjiPBsNznTakqzx6tjtvLqaHSZnhiY7pHBmNFuzv5zyLsWg4TaVefXFzuu88HeWk4XXoVNSEfPYKtG5vWT",
  "key16": "51UzNXox9VjrjDRhtTDhVQUv5qQTqo4HCAvWaSuRb6CpgG4QsdvqR4yPiquD4TP3htPnoz6DBNa15zVJVH4gSGVi",
  "key17": "5TwfXWdh3r7XHbqaEfVEJrYwqTM5xGSeQvAegyMFkR52CkjuXWqyGzjmAgRnCxgZDKhiXif2hDXd8JXQcfcmtz5B",
  "key18": "2LgGwZQod6JNnBqfyq21ir9hx8tMn7N23cYdhF2Fs3ooR4tVBR2kaxJxAdLs5ssRWFuUYyg9eZRtXFagmEEQPpWL",
  "key19": "2Mfe9nE73gjN4b8kicSmCeNiXvKr8KKmcbzav6vnejbEiN1QXY5TVapTqXd7t1jZMpzinYzji7yfNxCYmLm9uN3m",
  "key20": "tUvnjg5ufhr1Q4zVQVMFT49z4nzMUaSjqt9DM3TuEsGax3WArNnGvwoNws3juL3GXvRqKAVSvxX6ZpUmrw8xkhk",
  "key21": "4W8TtPRi8FtXaaEinPHRXopX1JTKvBkpTDwAQybunFcKY6DjoRpuKWbuTSvZwRYDzwap7jE3kJvhgVaLqYQtdTAX",
  "key22": "bgqK2MDyD7MLTkyXAWpbbVkR8brkiosTNh51rCmw7Lc6okCFs7to3jjMBwoHvRde3sBSG3Hu7ae1MzQ82ezXrj1",
  "key23": "7PmoP3JaPFr7c17PXLQe6JfJZa8wBu7d8YLZ5VKGMDotdC2q3egGCCM84yTftGEN2zN7QGUsPLkmxj1rDPMmhkh",
  "key24": "281Sd3Bj9B1EA1WxLn1ytuxTDN7Jfe4XsRX7rRnSrxR9bN3jxtuDgDGJbyBCRdtW1jg5QyyGenNgnZHEy6ds66Ek",
  "key25": "5MmP5JKJyecfQNvoD54TbWbJjHX27xq82ZWZ46JKpJy2rwfutJQiEbZSsn6shTc2FaMxDiE7e91A8nZgdh1pqRt2",
  "key26": "5RwmbebRJtUTkrmord2RfpziCd6iJrtatGCeVtKzDb1fLDkwzUiNmphFpGNnf6iHBRj838omTnXBcY4M4DGhDLSN",
  "key27": "4E9h4aCcRYrtPipgZk5Ss1yNPtxobHSsyY4WVSehmmh9WjRzbdZMHkfmwA3TqAo4Q3dsqC5Jj1jcBUUvmcLR7Kib",
  "key28": "SSY7gdfKrHQkTTAy8iXupGTbS36zxHGRMedM2gSMkMMxEbXdpyxkZixZS5JBoGZKu4jP9gzadDU9urhRjKKqzPH",
  "key29": "2yh3uJi5f75Sb3S32iVYoSGP7MftpFR1ceDDzNWry6oQtNgiGgVu1owomYbKwBkP3mVnqqL3wYrHpRabc9UhXx5b",
  "key30": "6aC55hfUtydiST33akEDSLUpz7ZGWwQbpM1UYWNWiB2pZCzhmGUHXn5U2mA3PLXo81vy72qV3Zw1MGdydNaC4wF",
  "key31": "5yhfEStxCK81hvQnbE9xYRnemmNVadyDCvjSxR1QtKaeACYDn8ogxkqP2gYPxGPLVN1BQxYpeYZhwfAnPHwZx9nR",
  "key32": "4LAjHpocWyw4AhQL7MnEwds4jGcant62xGMy41NL4CjC2Hc3RJEvQezUDvXtF73cfPkh3s63gforMBDdKtbZLw9z",
  "key33": "JL4DtibJEZep7HAxNNEh2AfN68bh4S3nGgaXQ32ycP5Xmr477dWdiQqSvRmFrbxBh3FGkNXU3bKCXrBkK4PvUfM"
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
