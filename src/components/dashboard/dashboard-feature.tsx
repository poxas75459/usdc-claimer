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
    "3AiNpbucTULVAUgohhAGKTL2kvDJ8h1FFHiJHUD5Zzaf48tqkVFRGQ2ULGWDNmkmZ1kAZQqXdwaxWVcDbJteUvYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PYYuYboqXwg2MTN56PaXxfDJSiXdJNMw7Ur7Ly2srpKEjRwhZeHTnBYowGbN1cHTYNNgu2tJAcMH8oiWojC9xJd",
  "key1": "4PPC38exuE1HfHcYvKAio1nTH2qPBgtotWh4C3mS7F8UZH7mLRDBpSypNuUwVLYUTrKjYX4yVRKYwfbKH8NrHzva",
  "key2": "3giZmyzxrLUs1EBjWkTMZU99HcggfMq5HUocgpkcV3HhaqUEN5PgfTiHA51ubrWMSTHDp6gjhJR4jThkkerwVra7",
  "key3": "5B5zjNvg3Wgm8biM4nDhtfYAzhtLwzs5v1FQk27bwqDwGyggHEKNFpG69ft79TqpFELhgu7YBHVhXCAMUwQq6yhy",
  "key4": "4TswUxpvuUxwDRs6TQJirQG6DbPHkTUBqon3r6qWLCyJfGAvA9MyscQ6WqtJKnbiFNbmZ5kQQ1AmaV3yKx2J15T4",
  "key5": "3wsqJvaXMv3kMXW9FCKkh2SPwK9TGVsWU93s9YqdcMGppEXwEaLFt3jkCZC2jPdA7edmYMM6fsL2SEypzYuZTJ8w",
  "key6": "4czuztCR5JZiyyX7s4XGYfTHKnFYr2pksvD4CYT68HHzKgz2BJdaFWdfYz8qHZkcBaSqxRi6CkoiAQCRuXEFgk6f",
  "key7": "65VTFYnk8vd72LP4Ea7yE1tdAVxhq2JtDcXnA9XJLaBJpSJ9Hrf53FqNaPafmtLKbbJWVRjgadTeC8tAyJbkXpZB",
  "key8": "UKKrCMYhkZdAGqdSDrmutpb6xekkFT6YRcEvRQTeMytVoz6KWytqKvgfurTorETtWMKKGCwSxHBUu71HvV7Sdj9",
  "key9": "2dXWDCqUL6JX5dc7N9PK8F3McuFKSKQvghP72R4b2k2RajPecxuBusq7qQud54CCGqaDBgZGcJwxexFy8SnTjj2t",
  "key10": "4q2JNsECuH9JQQqeEhnMWyAW1b4VyAktx6zzu1K21diLaFtFitWSqn1R8pZpAV9hs6e7ZY7ZyKSMtK3CZwyqWs96",
  "key11": "sveq7QmRAddXFaegEkjf6atBTz8Ezd7f2CYU3DBzHs7JWz1mh8X6CM1qiDJwquKfGer3oY14KFLBFqzzjXXw43p",
  "key12": "ws3E1nwoRuj6xiLRCWx7GsDA5ebNT6o1nfCQ9yU3izYRqvZiUFt5Bk6PGNTeNfaFJMX5M23CjunBSwX5Zuja8Uv",
  "key13": "3cnUTkFpBcD8gGmrxvhfMBaymbaUivvUydpVeyy2rWZqbqeGjynDLkH6LcZdEtJrfrR2tJbZwCK5yJXu4Q1D3fS8",
  "key14": "4BNYGauwg4w8zTsgAhrQ8r9vuTHCbMXebV3RiuEmADymmJoJpZkWthHgeCAtoRyi5eqEo3Dej7sVoeC2prAdnSh4",
  "key15": "36mMCxBpq3inSiMCur5SFQo3AmiKxGadjyMU7SWwfMNCsGa7hzJQrurmYQA46TTzrFCmpNCRtiTWfdyCgFkqcEKd",
  "key16": "41qpvooXpLSDf3ptRXwChAs1KR9DsBzpbYwBgiogySQJVZGrpouKcv9wRcUGXZAGFLcNrYdbfeoMzJaJENhrykkb",
  "key17": "4uKcd7TraAteHvGxgAKry33C88N2tG66ATCG4sdpXLhY8JrFKqTv3TJhZAjt32CBB4Lcxk33SxYhLWnZfTssK5J1",
  "key18": "2owEyeMhvfg4nBP69uu7ZYdoPQbfPfgXiKQhcfWaRHC8JKWKyET5BaHKwWqRoMY6ffMzfqGFdYcJasC2an4An9Yr",
  "key19": "31NEXhe2LCQpJqkUMn4Dd3iY9xRfvKPepqS8PAF5Yk5UNAsyEc8DRdzdmZUVRcHvhamdCkA61CU8vUsy2GnULcGG",
  "key20": "5B5C4t9ZSVQhhLYiF3SihxvtQNy2cJuMCAhc6n9HN3Yq7K8n6aTcn1i6ShTJwonjPpgB7atR8ZbbXoG37AYina9j",
  "key21": "296YDin47WNnLVMzqcZ7DtW7BZCk7oPGdrX5WZeFGjca7dvrHzkvxsYwnanUZ4LYdnYaWAcKn5nui8xJBXx22R5A",
  "key22": "4ht8TtWf9Y74tXwSiWi3LRt7Ts9b1rpYwHQNLscrXuEuufT3zpLWGzbgfVoJWtb9q1JNyioFzadQcmg7AZF7oe1n",
  "key23": "FVA7KfN18BJXgq9Ht5qdQgBXjQZ1hCoUSP3nS9RN6huC67YYoXRDWXtBYC1k4DRPuF6P3YZahuSMJwgEt7LrPVy",
  "key24": "buUb4wYTR2hT2Bx8C87UJvyxwVqfAQJ8eCkqY73Tq7bUF9mDkbkGsR1NvRW7iThHLWETsnAeDKQwmWE3t5x5w2A",
  "key25": "2Y1zi8RyvZzUnp3aDnVKK2MGnjfKRDAQrXhcezHqs9eNiYBoWGDv3NkpAKb2p22J2B8zAsKjWFAxTCVLV8SSatxi",
  "key26": "5MruyRwi4t2APqGhTFqGaMNMBKicm9oPjngPPWwt91KjScNqUd35wi5CtRwDNdHWZTNsMYTCZVk9zZZQatuWPeDK",
  "key27": "3nyyC9ESKfdNC1QgLxtgx4nw5cxgFBhwfZSV83tfFuyoGpJ8aFgUSB6zLcBwHZBWopA7d7uYD337GqNGGQcLKTaL",
  "key28": "vLnmAwtNFnnHUUzD5qgeR5Uko9mRgmQjQJK6XuwctzxAYtLCpJJTJNLR3zLV6edpinfoPkxC9KhE7shcLzU87mC",
  "key29": "3EVYUV56NhDY59Eq7GDoe9Bf1uaZ2SDNsMKufXtauV27kyDjiGpcyJvknPWoBZPTwXLYk7wqrmD5zGcnRHoEvwiW",
  "key30": "2usMDhxeBQh4GjGo6B9UenNV5RXkQFwZiuaJAHt4CVgXcaxZYnHXg4Wm76R8KmXSvpEFxwzCzs9Qtvb2UDwRgESH",
  "key31": "37xVyw6F3qCaZLUByM7TpqH6tzNLsZVxLAfMnwiGfNAbQh1zwA6dbP8YoDCz444uPhKwkthvkbjZtvDsP9s2nTi1",
  "key32": "BDmhSe9Bg8YpHvHMzc2MvWwCcTcnG5eC7FLQ5kHEhmgucNvGS44EdpQgDaX6bfVg3eayyvDrEvWUfoo6hUL1cHb",
  "key33": "4n4WCQjKQthDkiyUnUSwudDRDYNCFRh7gGQmpEzkUY8KVRuWYbSqBsP553kkWmphfBJrB2xh4rXCvVVwumSUv9UM",
  "key34": "f8MZtKNvHfJbnnZ9dErzRD2n85V1Eo7rLegpT9NTCE4g5a8c8ihK45dhro9c8cUMmubUEHsoCmzVLrehzC38yuP",
  "key35": "HHGfHaQ1NAkuqZvU3CCPTRE5m26RcXcsMe67AduUu3TYRBCYaGLpkjvtsdSN4nzeBppYFUZo6cBsaBynjEDcGKT",
  "key36": "7voPeQwN1pUc8RYGsQQUS5F2xZV2yDiL5b2P5n8JZbfKXPvhdB43hAv8Qo5hruKxaJtqxY6NWNQpNSLyGpkfjJH",
  "key37": "5Gov2V7WRm6812RxupJFU4o66NFDmB68BWBDodt8mpDTNogCyBJUun6VzmK98n38GoeAZkt3LgtvXLoX1cMquWfT",
  "key38": "4bD6jdZ9dMaGzGRS1XDESabwsMgHEeNENtEGFovHwajryiSHHHpzkyj6JiiNr3UQDKXLiZBvaZZHz3QmNs2roaCj",
  "key39": "4XKi2QGSy5xt6qFUwJQzErKpmAhrmQAnaqXanESHgxDnn2Qmr7uwQCrf4u8f5TFr5VhFqDLQY9xbGVM55QcQDpV4",
  "key40": "SEu2Uoah5ECvYqdfe2cyqRbiMaRc4tPdt3ZKptTU5Y3enkoBjo1Layrz6Bjew7CmV3XN9weNyLbApAQomtryaBP",
  "key41": "2pyVhBZhVTHFk8H82bDHQRWYv683t8gGRrzg3ZFerFpiiHiHZU8yUuUcpGPmD38Yxqk7cWjdkF9GvauvP2YJGbPb",
  "key42": "2BvEhTrcQyryqK4kfBJXJvjSc1pTcsrjd8S948WqyZJViQZy46xCyvcNWhszkF2tmutSmZZTDoJ7eP4dppkkJw71",
  "key43": "4MCnUoWggRMk7Kr7UWxkvCJrCVdUPCVmC6xvN5QHWUt1Gt561z1yV9Xe7udRd8KLJiVDUP9NU51kdm1ZTEVnF4UA",
  "key44": "3JcCiiQTycUeSsh2XGnZsAEuHhhTZCPjzCAoweuYZGSxvHEVWmobGMUs5K2Dt3SEYoZJMZxVzCScxhQAHMkJiFhs"
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
