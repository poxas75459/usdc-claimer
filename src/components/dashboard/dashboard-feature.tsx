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
    "5wDLbpBBzM5mdzyn473Vdj3etCXYWmXub7bpBidXZK3kLKCUq128uEQfTKArg7nq6TS76GgF3GpGy11L6tJVEVfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ddnUrfEvWRxJh3FdR5b7vNtirGuCfhZnQ3Pitc4TC2tebirZvMgP6eJqZhm4aDMHrh3mu4Zgku9SmnHo9CyVPgd",
  "key1": "2UYMTbtETSA8pv88fqVmUcSfLyXrNcSpCBaMbypsPohFpsDpf5Jcz8a3PGMv4QqDb9wLNYrRWn3VkidrDp69bu8",
  "key2": "fWGD6N5aowqx6ZDcgPYt4o37DAnRtZP9wuXe2dQUkEpPUqqFpqWMmkqjGsKUaCWBgJHYpzsDi6qfWEK4M76sYr7",
  "key3": "4NuP49QobKeRQaHGnZMGwijncMfNhsZSQAeCsY8pwwVmB2nt4kYEfhXgpmahbZ6FfQZBBPDP4BaZmLuZsdRK73dX",
  "key4": "ngZUhBNr4xPEjMnrLMazipuUDNHgdHqi9gPS8wMd38yZFxgKLS5pQ46BCfizYKiwXRadhkAXEy37EiunAw3NYjR",
  "key5": "4Y5TdkBuB12d3bguyGBkaKga1g6nLbjLa7BsLqa1e1MVNKcwRN9dNr7tJU2JvY1712aCYYFf3SvMuaXDvh3hg1Zy",
  "key6": "3oJ39D6wDyRDjou1xYszYb9zsrewPJLLDA8974kgKQtjGSryYoLCD7JYW8n7YCAMKZmVaP76PuH9Wr5oZqs6mvUo",
  "key7": "2jsDVWDJEa7KNRLApW2v89BpmQpZaEHgmUtfv8BLKGiyRhdRW14KBtXBbTayggbUnJSkqMAitocNNEk3MWjdLFdD",
  "key8": "4GenSD9B59oRwMS7CJ7TW3eUivHCKxSYEAWNXJ6etxFXD4W8nRENVDm4PrqUQ2J83vCocBz9MxNCEcTgqnesZheS",
  "key9": "3pbf6MPQDB4AUyqXxczwTFDjXG1qhaFwewA9QJWNwpi6t19zTgbhP2TAGy5J7aLau3CzXCrnxDdTjzAJWmHB9qWb",
  "key10": "Z2NyzEDcWnMQPxXoy78UepjkQDH5ABEefQL2jP7Q6KiUBAeXmXCEDpD1eG9urDSipQzN2VCgAYja1Cyu9y15A88",
  "key11": "48wpVghMuCyrKkipECV1eZEbEnBYzYL1B7Fmp727jk5XpJsBGdTEW9iQFncD6GgavTNELNCRgbdoCEpNEoeJFddz",
  "key12": "3bT9UUZ4y4sTkh3VcNxhmD147vxyannFVfn22ymSeejaQ4nqXoTtioTDRpMGiUyFakhTufBGVe9ks38EpYhgjQP3",
  "key13": "5axUERt4QzYH5pDPN8DeCBXdWEyrBk2Cr5Vv6Do1V8eco84BqaFhdRFzU1iHUWDLiL7krDW9ZqhZZ41RPu5Q4uHz",
  "key14": "3CZ5hJUoAabk9z3CNPiprKef2yjJyWqtCtp5dKbjxkGyGrgKyge3AbE7pZF394waBgCJkX13Zxina34Ryyopv6rE",
  "key15": "4garFK1naFdCf41dHQ3LBPrfB8mRWtMiDgphi6YVmKs8X8RbEx56ALZZJs3Up5vRsC2Jmzb7teGQAnR7Lss6hgZx",
  "key16": "42YCf6fN2WBzsTinAp8LGdVQX2aXRbmwxeqPazMkUMw1v4M5XkkjfB3eqjrN1NCNKgBs4hutojFn7EdMvfzZCLPC",
  "key17": "2EgCWUQnLVQyjXx4rW5zVyVgzE9ez2kPEcyTebXgow2szvay35iDyvGseaBCrZr5qz4sfmoAqASLGQ9hwdE5Fhh3",
  "key18": "3widdsagDEtZT1G9MFTdvauwnXZu7HF6DN3K1vSykZn1DXnezopKNpsvzHwXCQia1xa6ueJdvr8UwKbULnzoHvdz",
  "key19": "3usEhCGXyS8Vy5eCDVe48cWUZehdfDYsHHAAgQMG2UYoQzC7q95pdZzxBsimnMnxywB83yvPBw8oCbq6PRc5vUex",
  "key20": "y5upDDNeYUwhRkN9tfyFoHwR5zvyo6tsL9fM6yUAeXAvJuig2xVoAGxVKe5iNNwqCSDya3aakjizTVHYjgpLmfz",
  "key21": "3X97ZGDmwcyUKrYQsBBEj9gYpqkgiEgHGmXgo6PGxDgTN5hrRZ7CoG6KeDzupN417eQtK4CgXywNhriG8UHEWgRr",
  "key22": "5e1WMsE4DwLXF7TnkQRDmqDH9Z9o38HPJ3K2UBLBmXP9V3Nsjedu76USmpgKStrP74ctm1EAnLWnN3FZpf2xVHBg",
  "key23": "2CfiYqVtASmixdpDFRZM6fmdQdJHpLPpmmbg9Q9e8zQndX4v678G6714Ti5i6NkgZZe9ByEc1ip4yw9ohfc4ebqq",
  "key24": "26HhESGKxE6VWjCMoHfc4bwjAdacziNuTftzkcMntFunMPxA6fnFgpFYwBJmuBEjaBQsvQRQKdbGzLY3B4dTmWbD",
  "key25": "4hnSRSFF9iH6FfJL6MMjkSuA32GLkiYv3tPTvDx3NJ9Bca8SJMjDrUN89x6G7MGexSFFD4R4qXJSDucjWEBBj8nb",
  "key26": "3J98jbeAJa6Fuk2b9EY28Y9eBd9KEGARrDPwyhMUvXBddoPameK8WHEfZTJgmUfzo5fozzE5iJwWueAHgikDz3Ju",
  "key27": "487mRkMiQVTyvrWRquFsqWB9gjVzHexd28aaUwrjB7H5Fgjv7Yb5hQKHDKJMDK4vKS37jweQhsSgsSAUF3Ecag77",
  "key28": "3FTx1zcYBJWdLNZyCjUyzeSKGtEY3FZxQZc6sXsesN5MXPc7ha6F3pC6Cbm5VffCcne7irXjEqwgrkUBFRvPJ5Lv",
  "key29": "u8NeQSVHguSW4q9UTtaW8T4rAoNMg1bEePUmmHHKVUSDBX3mtsnY9BCfyN5CYfLkbXs8VSNM5CdyF3GPNi3uXrT",
  "key30": "3C6AfdRkgjZh8Z7NPS5Jezw9HTHs2urwxVxcXWWrxUuzM5Ffi5MqftnQxNHdjxhefvYLiPCrnunUMPZQcWpUrdno",
  "key31": "UiBFGotGfry1XwwxR8XemXyHzFinVEfsaDWxo72Zf1RT4N3EVz787bUHZb55vPRcAEhYdd8T3EmneC1Hug7xAb2",
  "key32": "5TuoWW2EzWsruWmVksXHmtYMpHswKyL9u9W1hwBCUCKEorZPgJsuTAwBcCEvMU6x6xNViFJ7VLCS2GUqBS5NSB7u",
  "key33": "3ALzHNt63ex5ynBnTmf9v1JEKAuH4AcwyWUUUCMvPviduLhF24guihVHGxHTTNGCzWU8ssWcQ9CmixgDoGYJWdyA",
  "key34": "oPBCVKyNgwnJcGjDESWknpS5T3fRQXpHxgKbvZU8tFwN6xWvBUzdVyvK7eNhEapKU6DWDchuUaQXty6mvyEQ9Gt",
  "key35": "3Gwf3HTzbZRsfzMghmDokkyCNaJepytXvvqGwCyhp8Eh7mzzR8QG1RHj88dH2LKA1wy4Z91TTKgMfs5gJNpFBgDt",
  "key36": "3tj8B6i7Np4VaZ46bR5dfAxqtdLnWdPu5M3gzwc4vyt7v9ChJzaw4zzjTW6dSTNPEXcX66dn9tqdtZ9sMJb9yeH9",
  "key37": "4ftnZp5VpGAY67g1q1GWdasZU6kntWPCfSaXsDetXHXzJPtt7t3mFZtX71BSWqhPkfgRJPnWdRSpH7tzXhA2N128"
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
