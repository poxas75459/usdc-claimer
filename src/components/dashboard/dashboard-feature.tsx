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
    "3VfFSky1FhxatzXdmFsgkeTg6N5rC67BPsSDgQJxJ8LmCzd1bNgc2pzvVESzJkkKcPScW1j7VtBGMJQBewmhg1Cg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wKLv9D7cnNmXnavkEEkS5pn5WVoug25Djb9QkQut1y2fQAy6HbWZV2HEqcQUXUtvZfZ6E1fdXTfLD3MxWJPGP2v",
  "key1": "2Vp2hkVvAVF53cEg26aFxHHh4qF289RsJ1upwQXdSfAeKTade1dRcyunWYHLdkm38HU58JNEqQvap8stbqjMVnWP",
  "key2": "3bGXp7ZhKQdWS8qWab2eza9K2WkmkRSKKtuC5m4dEH1JRMoF5wXfbXs49yJTmy66xuJFK3Zr6Y6HR1bwenSdhK9s",
  "key3": "fmAks3YVtk6N84RpfazbtT29ApUUcEhbN6aenGr7xfGWafuE2xkaRJcWRCstdmE6FZMmJsxvzxeUtwBbTUAYYLp",
  "key4": "217X1JJrWmWdEph9V9GyRQNRXsM5SVVHpfvKg852K9tD5Hq9e9nT28gy9KaTuwi7mxEKM8RZMfRsqvynUk6aStiw",
  "key5": "4mS2kzTjHm1vS7CCX1sVrPjcMme8P1euRyw9ygvqFZXjxJfu9JpVqPpW5rs4wBYAThYXUMvGfZpktMkfdPFrrVoT",
  "key6": "49vnpoBJBZdt1kEaTdp3GA7vbAHLDS2Ep2neeUjveUVhGHmPy5UxNao5oQXAf6jfo8PfJVUerPyvCjN8tonykBkQ",
  "key7": "3Sn5UkwvuSMZ9TD3fuWphY11c2jLLFz9QggVP6BmB6nRNsLL68S7nV5rrPv38j33SNCeLxjCdDKcFFSVX5WJ8pG7",
  "key8": "5ESQfbra3qQnA4EWW4v9jeaQ2BRgwT1eTs4FD9Qehu4gMSGhZnLJ8umZHVwyRzVeTSwTbF53F19KwNR6m3mXvXTK",
  "key9": "5ZBVwRTaGYZ1wPRYKu376An9XJVwrtqcrGAPDdGWzDghBQeK1jxxoP9YmBhYJCyC84rhPvQ5MZqLtinRP2R83Z8e",
  "key10": "3852x2BtUtgLR1hXgoX87357kPwpkkt8jC6rVkqZP6XEoVfme2ZAWkQTCnSP1xh44kCrTXvXMUGq8hvrz6Dx7UYd",
  "key11": "4X6vRiMhuDBsDUuB4G8Knr75ouvY69RRG4kMRwWnqCqXgh1UEWFcuMk4dcERsBMjAyw4c2ivH4zzbr1aVWxYj6Bh",
  "key12": "4b6C2mffFr7RTpN2hCnviGpXxGzv1y8CEHpzdfqLGsUMp6yaQmM8CpieVBwXNfZCbiiGf4Xnyiqxa5xhcNdLP125",
  "key13": "2HA7mezDj26XQmDLrdpZrBvcYTn7Qsb3grwevSwS2cATLcNAtUUgKiQQsQS3JFP1pNfHchVFM742hmdE36Dnityx",
  "key14": "2jQJNWFxGtKWwFSAH2BFXcUuxrSuArwREsegKwSMo26RzHbKpRT2Vhx1pkkShYg4eZxBr2zoQvYtueKqoktjwbSc",
  "key15": "3KjEPq6LfJyVmmTAsJ1p7pnqZvhQCXwmzm7UKrB1Ydt1bz7RHeEw4qyaMnxzZYgAkmiUWkU2ttTYpZs3K1p5g46P",
  "key16": "3XkP5ZNFeBoRTLbbfBTi7Kxvzv7LsterEWGzkNhH5yDjAoMB36x9kXequJNXgiuhQSCpzD66U8T6hT2Gnx7MbZcS",
  "key17": "2mjvYHjZDsaFN3xgrhMhYd2zGE3uvt95nH4pVJQLigg2CBR2xHZy9ytDrC6owMEoFbPuWFQMJnpKWw6VynBFhxAy",
  "key18": "2ztAU6c4dq4u9ES8Ec9Veb26EANTndMYuYDzfLe9eYubmrAPyWzxeHHdqtVv68HP1apybWvsFi23zdBNL54K49bM",
  "key19": "5CXvEG7kPisise4U4MEViWocU4dZeVuQSPzf6p1qwGr2jax9FbbPRtoQMM2fdC7rh9GJYNh3RQQkRieSfxXXYJTT",
  "key20": "5rZmapihcS4VULTQdmXwybxJJDWnr44pSgRxBCSAS9SddvS9i24odKmwaRopK249mDdN7woAmLowL9hdzfEzYQDu",
  "key21": "2VcpaL7JWcgEHfstkcGbgKbQAxepGzE6i9kcbjkgy1Bm27phuPwBeuMt2WHKHnqU4ifrhaLoehY3Yu4QDTwkuPot",
  "key22": "2LQPWaHF8dLgfcybxtJD6r2PgK33PhWZz2ei9PTEidULTT7nBAehrFiW7GM2kGSE9npbMbMaBdmKXuRUqK324rfd",
  "key23": "38RNdu9m1Ge9dwC66FWEA2Yh7NBkWfsuwtnBBm56qfs55AiyaCfPybrZiPjh41WaXYp6jTsfGuZgWxpjNrYJ3y6Z",
  "key24": "4gLNo8Lhb6MajhUbVfobprPTJv9VmpERnDu8dD8kagF6DwT29xXzaN8Kc9uravY9kkyDmwZqZaYpucZwRMkGCU9U",
  "key25": "4TophS7osc2sp8gvfDkJ3C5Y3HZTSHu2uGFZ4vtqLYsPfm9Fov4e4MdJzJTta3mt1heU7Rowmsa9vBjRLwUxnov7",
  "key26": "2dFYuiiqJQjyX5JynJAxyUpftAgteGxTJEB7uos4ZRN9Tq1aHi2tHCs6oFQvG7msH9VasUn4o6VEDUSs7NswVU4w",
  "key27": "5YhyWyGT6Fu2kQUynDfXe3z1Asa8j1fHgPjdXVZUcCMrbGkvcKkmkYBZzzaoT4zkwEvXVww496xv2A4d2X2UF8br",
  "key28": "eVjC1ckK5bmYS2KQbp8ANPnhUFikqViazRkvwFYCDUpTNPiwWzZnwnnLTXhitX9qNafiJm9Qu3Jw9MXomqN3V1f",
  "key29": "7NumTcS6EduxgZkwqYvoUaxdpWuABDGgmLQoAnGjSafi3WqpK5fA9KvCR9bTC8f6VnaRqGTkhEu1J4UU31jUvJQ",
  "key30": "5J6zhttqEmfNC8rwJVeWxLUADQu7brTYKU1vvP6dx1MV47g3cp9cHBpLPTwwuAEKCuLuvD9Bz5koMP3LkGDDehdK",
  "key31": "4rwvW2bA63pZYZTZDcD1DVAXYfPE912VL6nNwkdnusN9zr1JMJQNEcEXst4qrA3ZHGne6jcdyhuEQ6kRecisNQJH",
  "key32": "5VvxftiM1FDj1y3DAc2keoeX7SkVdy7SjBk4Ci1woYqcoDuV2fDNr1tcXUQoyJ6oX4mcQarQ11MPrVfi5QDYzDLT",
  "key33": "647eLChpPNe1Gf6BTiVV6KrNnyUnJ2eysT3WaQa5SavdswKPZFCkrNX3Hs8vKoH8SEbLgdVYVjxLUHntLEPmDDYA",
  "key34": "5jFjuLpBS4crJE7iZLYSmUC1wtKuwD7hdaUnF5PNtqacNrfVmgzH3BysHNBDWxmt9ZD3y5CAhxiNTtAsugWFYUFz",
  "key35": "47hqVsiUjKLz3xthYfj67XpQxfkjDkTBXaDsd8HRm42kZR8ciPebk2kzhmHSQrCGqFUpnqxHBkQgxjKaYq4XxZB3",
  "key36": "4jufzXkNiXaN3LeEqt55N2jo36ey1awREnxMbbUV5R8ghr9krbb4Ky8adAcHDx3vfPV4iYzhbwPHL5zLPm23yADw",
  "key37": "2V1XZDXeUZrDaDtytN1w2Bbb7Qwq6BHEceAJqhZwzHeXSELprUYDCxr7u2Fk2gqgJN7rCNEWACfqPMMmiaeGHoWq",
  "key38": "2eMnrPvQfDTRQnzV2pJPD9f9xdiXuM4LABJqGjKGJxSAc6NRwxG9xFcsaWAeVVtqpQKRDNXgN3U87AgoUuJ8yW44",
  "key39": "39xbKbVEuFP9H7GdGgbtKnmpUWahvRMCJSZFQyMc99EuJX92VUmNafKZdcHPEESKuSAByaJQBuSYrMDLzShUXgZU",
  "key40": "5ppDFJ7eWtNo9znaWYR9sEzzo2F3whMevtUyWUNLGFCdCLh6SkMYabdHvFmiMgJsV6ARtmikmu9o3uxjKBKQg9me",
  "key41": "AQLu1miCXALsmtw8NQm7BitTK93TbFaxwxLRXgu7e1sekymWT5rgeSGDX9yrhg4PDtxZ6k6tnJGGrSkZZg4hsxN",
  "key42": "3DyxgfZYhwk9RnHSSZeniiE6qVA8iK7CKpHwoBtEVmT6TtjEfDBcM7TV4dV7fXdbzhVz7WwAbt4shqc9u1fkQA33",
  "key43": "66YcudCyST5ieZ5FjGPh6p99DbojP1hAAM5nwPVP4JZZ9gUM8qAbErqkmgLBiXxxWfXd8q4f3t6xTxe7LtpPHATS",
  "key44": "3ZsemvmB3YnUYxU136BTDBvxGAG99xbkxUKbKktfbtUNQ3vLz6oZ9sXgiJq7F2VtRRA6S92yq1ECFyFF9HxSnixq",
  "key45": "5xBeFuyixQArCcUnuipzVFc3fZfSLRQHuPGfcMmBS1Kj2yPJjwgeVPBjAJq7VV95n7J3KGjtuQbW1zFwAKAaa1Fe"
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
