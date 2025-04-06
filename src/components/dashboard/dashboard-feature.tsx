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
    "45fmj5MfMRrCaPozd9zLcytyfnGRFCjDAGYpYYWB6DAR1LkqmNFrvwKyDP7UqfPFPw37iogZ4u5RfwELDw6VmGzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62mjKrx7VVVvSXpLc461byderjFy4Yd5Lw9LtawnkqGwh5VnKSuff7iXxy8a2yLPCHimhFoD6uGP1yTBkD64xheK",
  "key1": "4u4xdJAQy3iYCrgFnmbJNJSXvfWg52pwzHJLCKX5j3BdEWyfQAgEaGXobAsDFHmetc6iA4ubp2oPcbS29kLr9HN6",
  "key2": "2TQ8ongBrnaWBv6Vvg86tTJDU2ou4pMnQ3TubuVVjyzM34LN45kYcyroYr7ZTPA7HgQMjkBvPfFXfhVoyu5uPdG4",
  "key3": "hcubG24TC1Z8rzute7BzW6Gyr7uDzrm3argqQnau3wurNAShSgHsWqMuqJH4Nkt6PNyogjq5LPFEMWbWqzd4zbo",
  "key4": "6fNft7ffjz8GdQQ79R2PnLZgKVcsdbjrExAdUuwHhptqge6gxwVyDjoAiw4awWUUYrAgoosmbvPjMHAPQbVe9oY",
  "key5": "4CMfnTJG5gWWnyoJiNNLrFdJBuHnXJ1ZxjnW9A1mdhyeg9ecgeFWXP6LSiXFViyjjgaPSxoRRVUnMkJPoT7cnoRz",
  "key6": "4to15vpHtBpeXxCGrb7S7tKmERYxg7fuytqgpPYotUtnLrrnBVxx92LLXra8BMcuGvHfRFc6KNyXUptdzEL5yr74",
  "key7": "3rd9wrvnz71jUBSKiN73dfUo1u4yu64Fmm2eAHfsL5v9divJcVyp5dQcWuX4akAnGoq12NMwaQzXE17Af9YMUEoS",
  "key8": "3u4RFWL67sxWeYdq6ms7vkcycH6ky8ouGtcuKSqtisVjzpp7FHRm14MERMYTQ6KDVwc44uKuNGXkqp5hC5S4zRjU",
  "key9": "2sbw8DCg4hf5dSpXgAFHoUztw8NAnXjvh3Lp7fnt8t1tLNbcGybGNDt4cDzXLqFYYweuXAtYbjT1hdCt5UQrz6j9",
  "key10": "4uPMuWSosEftDygQVXXMphVx8chvoqseEjK31AKDfzNhSbmPxWBn8X7uo2iVvutHUWqLi8iCGqWv7CPk6D2isnnA",
  "key11": "5138KqmMM8iyFbrkqHgFNTHLyzct2KeqL6VTeR5DSYhdbjr6ayvcvMdGy8TDeUNGfNE6Gd1bG4QepQkvptjsD7fW",
  "key12": "5R6XG9V74jRw5ZaXt2faANTpM6hpYR5nNFzKt4PmNSqBpoe2XT2mftLvHnS3RHfjE226ehQg1kWzVjjQKqczhiAd",
  "key13": "5L5wsLYnAzLoZP53f6YUwwmG18nx5qaRrG5fpCPYZSpU9NDoZj7pELZuQn2RC83NGtSdsNtktj5y3CUVWtG3fJP9",
  "key14": "52cpurThtHUPMA9w1eKyfYhYU7rp4oL3c731j4hrmXnUBQxKm1L94AFhTeNc5rRx1uHaQQH4LkXTViXJhrajm2dX",
  "key15": "4e4Dbs4XuxJBewHPYuB7rcfYbFEntVgewHbW9QR9GokYSW3zwAAyNU5VLKCwKKKmmAkWM7ioCpe6EHY25KjZKwW4",
  "key16": "5Tuf15ezg7brm1L8y19yAJZaPzPCrM6J2KUxEbbMLzM3sRR9B91cYKX7J22hPhEs9SEfhPaWyKv7k8en5MBu1zdd",
  "key17": "2GxZbiV8sg5S7d8VNvx1uW6VSrNfLzzdva3C8Sh7fVhhyRhHYLqXnJ8DZ5gBjpzeikKHVYhG6xBEzx6Q2KvyngP3",
  "key18": "2v8fgzEdSjEsr3yhmSfQzUfwcACMhA1cDJftvx8ZsdK6x2bV7xVSpnKc2nMnk8yunCZkU4KhageXcg4Ew5Gy59B8",
  "key19": "2ED6xo97KHLe8Uroo14RevW7kBFfKL4nWfH2JUFXdHqaUYMoXfR2cE85WmxA4y8QfZXFcw12ssM752aHrJL9qs5n",
  "key20": "5oFzsZt72y9VWAa8iR4wxp1zm9GUQ5qEBCnNuJZAUgvoVPSUManc9RFshvGgUNmwBfPVN68LxPuemgUmA4np3DYv",
  "key21": "4J4Wfseo8KVzpuYa5qm6F3FrzmNWiougeX3CUfUvWpN2ucAv2vQkUnCfjEEBgjthC8R5HoC1tu46HiFXqP537gz5",
  "key22": "2bPWawCsrgd841KdcFtEsDnR7ryhuuSRYJLd3QGsgMzLwjugLRcxUVMBECi6e9aseqa4SZTseWSsZaJAxPbb1Lgt",
  "key23": "4pudMmQbgaH6Bi2FKF51GY9oo1JeDujqt8x5udzCWMfoFdfe3uzvptjAupbk4QWhFFabgoxRcYMmW3AzFW6ZnAUa",
  "key24": "5ARxxbS4s4nbdbmbJaEyeFoEBvjqs8XFrFDg1HUA4CZPw2idiKUDfMiVFyDfcptMDCSzM1HKr2tnEEG76mBAovu3",
  "key25": "2qdTs5RwBeV6gmYZFQYSN6ooSCN3Pi4yszATUUQqFaqVKsdjUSZH68S4AAMFu1epds8fBShdvyg9EKfbowhNGgJg",
  "key26": "4oHdqfe46TtmBfy9yBCuz9cY55AeLsXYL3NNnHs7c5Z3UbzJ2BfdjrzjdUVe6kw9vmqW57ZrHE1PBNr5g7pGqVm5",
  "key27": "4iESn6sCKTAZDDjC6DevnUafPL5cnb4dcNF5oDb518gzwAKQvTuTZsYtQaw5suvwgnTDQRhWU8Kpwcrjw1b7WyXp",
  "key28": "67pHUWj98CJ87kunCLQRdG16wRXXMSu3V2wXEurAmdzK6xSAdhuyRbhHR1xwZVQNhXkgivJLfrkWCJmqzW8FVh1u",
  "key29": "67ZpbNTGsuBuiav1pGrtnS5EM6RD2VLaPv4SgoPmFFRJbGCAM5kgLVoj2sbQjKpHVyA4oHPxxXPeedX7hAUJW4no",
  "key30": "4nrj7ZdPHwpq1uuvp3mCvxNTifuptZsbVi4Evzrh6DGHyVVtXa6Q724peVDeFFJQjTUs859vgkjdjnQBYfErALjL",
  "key31": "3Fo7vfteKMsqwxnMSV1mL6TvoSAzn5XxN4tKEuM7CsWWih7fr8M9ikKULhSpDB9ysXP3JExYiWy6t1JyuWmPASfc",
  "key32": "5WUspjaEGJ26zP6csMnpiy8eRwfxatLYM9Y2ye5jwNJFfggVLbeF89DvDsnowm23E25w29TxZSrm5BKoJ4JXQv5p",
  "key33": "2JMPPcJfmz7unimTbxsEr9Sa1EaszzsGK3bbUvA39hd9XMtMCmXXFFm2zEZVMoRLj685zQzcV5quqB9aRvrB6HMu",
  "key34": "3esXN9mvm7Cy6CFz3HYzs7c4KB6qQMbJvNNJZjTzzR5fxrQwJCFFyptKNRm248o7Yc3ZfBAVBqNyPivJrAqeEN36",
  "key35": "EPX3oNRXhhY53XL4km7NzzdwU2zfBah16AQutBvy6nd8Knao8WDu5fbmMqaBUqg4R8J2QXqAHQBiaf1U9SbXkbT",
  "key36": "4kbgh7t9dpWdyhDx9GDaBqXeaGXRj4hk4siCraStXvKFJfsjxFd6bYBpcet3QkHEwJf24krBi5u7au2MgAahZuEw",
  "key37": "ogmxCXBdEj1VYd34GaTAWUViXuasBWBCij5w53bWsS7KAgmq9mWA1pb6dpNF16WZZvegNGG1FLF8X4KB6kKx4tr",
  "key38": "2G3dXnAkHdtzyhZuz8k4oeSgzDLnufAeVnMzU5FSqkSCoM1Ns43kxzi4y6BALgwhFML85F4mXvdKFxfycbwE3yrU",
  "key39": "5B1N1nP3PYsiw9TwEjhrP1BtLQna51EoXo9stLsZcLXxGpVhkWDMhh7h8hhXfWZriYX8JGWarThCPFKH3uTfkj8N",
  "key40": "57D6qeKFwbmPw4h68skfWJcqMJDJEuJHvxZAQFpf5ojU2gMoWxqCaM5Y5GVqKzY4x7pSjmxeqmtHPpeYPcYdV4mK",
  "key41": "s2oH17oCat71LekQCruzTcFegvmwDENHuVXSoY2BNE9Si56bzwg5aNty1sc1dRXQoZ7eGuCntXTQqvHy5sac2Cg"
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
