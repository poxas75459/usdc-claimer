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
    "AwJRV333vvz5RrZFsTBsaD4eZo3y1PqdhfBCcg2wCbiUjhv4U9sHE11wffEFsQUQjiscp3SkFpmVAZBDnqdXst2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N1Qyn6mEMHeV3QDNw7RDkoun8MKM4h4k4tzhGRhFA7LT9ejx561TfAdxEL3raPxCGWPLHVoyRQ4LiNEtkKZa8YA",
  "key1": "3V6dPCsjGLPwYAPdTwY4rSUaYNJ8WjAwDTRjXMAuea7ugLBZGuFze4GJ1LtubcbJfhzdSq7D34viqx9N14BPmx9R",
  "key2": "4K6heGyQu7nRrUEEggjpTif8F3QdqSC1o9SnnyVPJRGKGNzXWTH3xTpTHLcXC7Pw2f3wFq5vfcRnW8Kxgt7K5tbm",
  "key3": "4k7fCn7W31BUeoS6a3aSFh4enWNd3EfD9ZoZQiipcbE6MrUubpkDWNvDD5m1PanA6YN7PWYdjwAbqV7gA1ReP5kV",
  "key4": "4a3rTnf7yNLAK6oL1eMDdwkFBeiJWqJEGFTAqmzx5MpS879juxURkyHpMTJ6aPzr14fdGcu78pmtGYWTXZrsVVkN",
  "key5": "3gM9CCcRNDYrg38TsEzE3sQRKw2FMwey13GacJvHK2Ypbnx7o7g2kFqKKiUsHQvok6crHCz7JVZ32HmFPVvDr2Hj",
  "key6": "38f46N2PABWKgziMLhhD5mvCFxCkhaGanz3QJeaL4AcFXz4oBA9Wy9zpaWr4hCb3muQZmVKjXC1KvoPcLCV88oM1",
  "key7": "4TxfwfEpCJJrZPwTX96ae7UubDLqUXEZvTX197Dsx7tyXDzh7YPk8UsT2iFSZjS5yTzJkTzdDkMeiL7GPXbxf5jQ",
  "key8": "4vH6awAs8G6aQ5pKYn9PYahRT4SUhXTgZLYSDhafULbagmsGmaUcPxNtCSxqdYFBqpHeNYGMhzyfLM1SjAkNMyUr",
  "key9": "2NK5PHurkSM5AdYUHJKNJBA9jHJqs2Lhr6nGRaca24ybuEYe9uKoFFkokJs81mwLzG31vatpbWibPFsj6iwCXPWs",
  "key10": "2a3GSsx89yAz2zTRJDswrrocXm4woevuRiqmLbePLoRppZspvDBVZQd1TGzamFxzRSp8XVjyhHy1zQrier9gfoS8",
  "key11": "5oV3EbMsYx8ayryf1X8JJEP9vRV5TheyY6Qx2Yui25KPRi1Mijb2aLpdhts6hWg2JBCxpMFxvxTnCWVk8sZFBkGT",
  "key12": "4mSvUW5A6eTU3MW6Xp7yqoVzDM7VzFfaj46Ak5RfaeKEB9PRP1LYMTuvjxvrW3b9EKo1zqS5AofXZYXozCCrndLJ",
  "key13": "3w8KBGygtsjx6HoaiZZwypSqmwKcj1ZLB3Qu3vweQjQPFzdCdyT9BtrEgcNgmfuEd73yHRUuAyo3wDYYtcJcmHec",
  "key14": "3nM85sxmFYxT9JnvH3tp2yVeUV98xrhHDtQY6JVB5N3QeASsRnj5ESEBpsAuo6BoV6GGeH7TYi88CZgZcNLrRKLh",
  "key15": "2DhfiergjaueVNFow1t9GZJPyhwepVQsgZYovvJRjcCi6Hc3zb1U8gCP3FVyGSchLiDenGnFs96Uv3xBYNqtUcvY",
  "key16": "4vruLfzPUd1CB6Zw2r8x5VwtFidCpBhK73eSpNsmrG98EaECEEHp8wjRcTceEjD65uxgCs6vEUahVHCkPV9QbVqJ",
  "key17": "3oxhJ8X5MPkuLGb7prMKb4cVxCpvJi8xF2DqwSgSRnoVR1YsTt7E3yLBx8JjEMF5TMaN6oN1H7AkJmBb2b4VMYUP",
  "key18": "fm73QUZ12v4pjqUS3rYMejU8gdtcT9APsd3USfGediVFWJWfDmjyCyxtBHmL2U2ygAFs5fKzgermBeGtLaFwAQF",
  "key19": "5hxBvHwkL4DhnrF12PT9N8JLyJiAa5NMSenq5dbPgYjrDARjqo15aNXZHBaQq7p3YQqfnv1ZPMgnxsf2wQeMaj2n",
  "key20": "39CEynz7ouiwHSQGUEAJ4GE3oyL6oCmSYt4NpnLGiUrMyoJ5AHGRrw5zcrWAj9BcWR4Fqivbyyf9VyjmZ3Sdikmw",
  "key21": "3Nz5MjpcXPdbwtSqKk526eJziroAVuMmJ6PZ4L5zA9Zcp34qwfdnihpxnHtWxEDvCi6mDdLERwdeQNE4oMP9iSDb",
  "key22": "24YBDQNPgvuut97ocXqgyaThk3DfDySC3CjhD6xFT6cMcWvJQKEZcjR3H6K1w5VKrevB9fNWpFjagQ6pf8Z2ZLCa",
  "key23": "m1ZT6E489LxRQybthwehN9YC252psrSyxovSjZMoP4wQWUEaRidgzpfZa2M1SQ5gQjAb17xTyFXe3injNhtVTTG",
  "key24": "4zTmCZFeZDeMhTMFZ3SbCTv4RGA1zsSenGv4tZXy64qRHWECrJRaC2JwdsfQ9awc76VJKL2vCN73SWLrfeLperYg",
  "key25": "cVhQaarpLgih7QSy1nwkh1Tpp3Ca7pKfHi6kBbxLRP72VaduaqCE9tuUzNJFTagvfCYKFFXSEafjiH4ruhAaggx",
  "key26": "5BhX8MpPpaBgLpaXFfJRLGAZt7fCfWiCnhcELCtvN7EhWzbuwk5ECC7WB5YsQ1LQ4crKrrmkEFub8X9WxspXmTZ3",
  "key27": "3SGfbJDVBjZn3Qpi5uf5eLyBfzvxY7cKoHXJJbNbbeorxK14yfT3QPcSF8prV1mLKADciBTStyw1TNoMVqgP4FWk",
  "key28": "3anJLrqxAaHQVWJW6DMQew8krQSxZRPFjzQiPafX9Q1yMCyxMXp3ZLfCbbJar551xd3JzDKtLtS7SZ6KrEXPCjfS",
  "key29": "2q4qakZUDUStnx7aHNUBtm5w3TxvUMNaVyZPxhwvugEA9gV9ffyeoT3Q1ZXmXY18WZvcBqgBF1ZHkGjeU7BFXKzp",
  "key30": "4jeSshzW1rzP9gTsDgPyvfutGepr3sbxiBwpBVLjhjnmn2Gienqgjsk2Gy1HoUjbNs1zKrPuzpUCdFqZLx1M4y11",
  "key31": "5w3qMAy34iE8YXdaavuZtYSXNasjqvGivgwSbv4v9jSr2UQdjwiAXKd9sgsYsr64dPsS4MLu9BWTjrDYzJGRMiiD",
  "key32": "USF8qn4LbHAZVCAWyNUHe1dEWWSmyBWMwo6tYsVCYHzNqJ6CW63izRCcmNrT5MujFtoCkDwaqRndn6gWAxzcPpo",
  "key33": "5SjGKkD4gVyYgqMkwPRbd8mJ3txkFAwMmuk16ZCN3RsEsiRPJJ1S3AFouXsk1Eidfy7Zap9AD3TccR4jqeqaogGj",
  "key34": "5Uo43zRtZQjSBy6JsAUhVG7qg1u1tirGZpwPG22AaHRtSCHsCT1rhLCjFx1orPpZaaEBY5s2uKDymJ4b88p8dDQ",
  "key35": "4if77GY6SRGzZfuoCL8iR87AcHS1wybZvLGbBJ3KDLxBFCW3frwLg8vbgZKtXnJQBT27oup7AutfhwzRnDU8CnFg",
  "key36": "63d2CHM1y1rfnfjbFS1WQ8BPtL4ityM8HK6NcSAgC95hAgkZ98wMkYLXBhuCtQJkVnkBxMAXBM5EbAA3794XDpbH"
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
