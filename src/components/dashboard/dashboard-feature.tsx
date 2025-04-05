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
    "2ZrXfAR75FqgJha9CGK2bV2QNv97dFAv1c5mqw9hLYCq7R1W2dpJdgDsq3ZfSzaMS9KcpKXfBDyso3rV99wfrYre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wq7kz8BHN2RGYzcjjxAbHXqdgDU7gCAaU7Uq9DYu7FQwfRtGacewpEEgvFYSPL9ZS4dAV1bx3fEA4tuyBcEpKr7",
  "key1": "4qToWHJL5VJJqudhd1G6PVwQragXrHNg3MWHzmyW83RR36dkzDHt18mY6MUKeAPYyEmoMYKwHxauaNbzFprD9B4C",
  "key2": "YTZSEmMwsLdYjiEJctEen6h6Gv4mRhLWB3x3mNpB23N5u6d3otoUYD41b7aBR2hvaFoTo6PK2At5ynkpvHvTAXZ",
  "key3": "2d9mUiywCEqsvbCbK1aCxGvhrJenj9Gw8FRvnRV1dxtZ1bsxhj4by7KKLQWeYFuLUZXLCbyvi1d2RkmhUFto1qXL",
  "key4": "2KMwsZBSqnXkJmBJwmDBzwpHUHjVovfCgfFJQ5zb7rhpF574767r95YTqc44S6M4QQsGrc2rwW6fcF8CGb5B8tcz",
  "key5": "4cza3hsvG2Y3KtY8pumdzXwJuA3Qvi2SnDHRNEvpXHX6mk2U5Pu7CKJjdDqwQuXHLMLKTE3wxL71G8B1rNY7RryP",
  "key6": "2UGu1HyHqF666c5hhcDDGiFtL1qvTLBBLF44c8XPLnD5n8sJoYux42uDHuekgNUjA1Jhe5jFjrGRcwuNHD7g6pvR",
  "key7": "D1jhT4DRmipSoYgcdaErRWhWL9z7Jp4oiSWsTY4CEzSaRZiV8NoqeyLednHyFBBmBsUrgZ8i4TKYYtbAv87PPen",
  "key8": "5mp7T9iZUtcUdZpAiSTP7tcHf3xo64H852z7sdCzvPHJ5rLNVujapSodz3ktUcKPupLGKnGVxgrYmWrCrEnHBspM",
  "key9": "5J9LxPjs1bL6D1r62YejkNpd2x6F8hJ6rrbc4ZMrQTtbVjXUd4mvepwM5MioJbhRhNLVrpu4ht35Hyfj9n8CdZqt",
  "key10": "4vYiXRaZzHWfdAe5rCCow91nGTjzfRvHnXnDWHYew275nXtEWWABzjgC6AUmASAj7N3yNYxh8nzEr7jVihxg4xgj",
  "key11": "iVuFuTLLTjHmFCyfc8bqfswsLfr82e4emYYPMHJdPcGmGJxNCnrhXcD6Q7AzJTS5WQMeBfTNH5MfUeeDmXvHpbT",
  "key12": "GVjqQCK8ouLEy9vcZ1xrqYye5gFrJAChchGmonSjYyQzDneF4H1vrBhvbDS3MRR4VcgeaBWoByzj2raqjm5NKAX",
  "key13": "RUxFeaDdb8S5PaR5aY6FChPM2gEJza5YtCqmpdQXVc1QzGsZkmobMYfsuZ84bJfx4CfPFYqGHeBGjpsUSy7y5pQ",
  "key14": "EdmPnttTD9CJMTYg68oHouNgcg6UPDERZ3NboZFv4UkxWnsEtFk12j3orND94CJyMXZh23RFUv2FhdqLDBQX5id",
  "key15": "3UkC1Eo4p2o5CbcJ8chhU7uLi9UNHNdAbZRn1SpcF2Jw2AFTQGrCg9XjvPd2W578vJmUjEV4m4vPpK6wYnKKBgk3",
  "key16": "5dUkPvCPN6GYEtTULsJCdyHUPQduetzkdaXHojxf3jQSk3HPm9JdD2FRUdX3dTdp9raLz8MaE8xLy5drtKwMf2wb",
  "key17": "PKgSwRivwxab9VxU5s37q4yRjbKEV5gS35D3mdLQiLS1Eb6EKyNXNmmLB9sBCBM1pGa7w3w8rNaPWGinuPUcEuW",
  "key18": "5wp9WRKwK42j2PAoaMVNdZLii5jiz12sR34YzJj22499tYpnqFxpvpaS4q2dDsgBCzea4Tkz9rF3ozD8PHL4usBc",
  "key19": "HBSyA3KtpdpfXdZQYozpKL2QtiXmwbhLbgKdK4CSojJtmor3KE9v1wcApquxriLPQfyE3M1rcuJRkM9tb3wphyX",
  "key20": "3FmS29rnSCrUt53b7eLbBeAGrnH3FMzvcYRB1ZFGcoW3u8AEEpUmLoMK93EtEKSrKvMDZiigrEZgeaD8ay7rTsYV",
  "key21": "3NY6D9YubpuHN1BnpSKsWTFXKfHqoWqwz9Yp5idShsyCJBdcdt2Rmewf5ADDDkzbvrMK9oKYhVERHSAeVx8ZCdsK",
  "key22": "59Pq9jDfNgBRqouG1L3xQ8muDHkreHhVKssENFCQD9ZYpSPxNcZHrtzvhPzbqQ8ieQ2MmnA13AKgRAMED53kM7Gd",
  "key23": "4qFHBubvRfUUYJfNAvtncPVQKqcFUgWxhowHLz7iYSygetMj4WeYnYoEoquJjXTpBz9rxggx9qmqjXuvYy1sN1Vq",
  "key24": "5eaEJFZrntkxrHohqNpVosVb8zgrdsozPdmtvCZED7VE6bxtshjJUjGK3RoC2tCiHf9LsjzERwn32RcMdA7oWrVc",
  "key25": "4QxNkaqbDiKamwpPUA5TYu7WsA9vE2YvE5TifRvT9m32mHyJ6z4aREfUo1dJcji9oJJp7sACiRCw2PhoyaqgXmj5",
  "key26": "2NMoq844c3wLVEWjd4UixHfkSFTvsqUb52AdAg51LQTf97nYNv3t6vzmnRaS8FpZqSgfq5Nz6rTQktJALxZ6qMk8",
  "key27": "459GkpqGYXczw68g6VRibZpHRoES3PPzR5CjJ6t1j8j7spV1EqidkeTyiWKWgn9oJZa34n1EqNhJWZ6EzbC2kNmv",
  "key28": "5emQsSv4RhGH3DLzSo46WeBJEZoSAiHW4bjAwX8QQEJrEAs95YVpbvUe13iXMEPHFucHfhAYTMSM4463YDYuQkww",
  "key29": "4G8hQin7dGHfAM4rFdD5nN24tso8pW71FMfENp15DWCRPSSzpY1ZmHG1nVGsqo1BT4QipLqE1vqpKb5v1kpjFPvE",
  "key30": "3P6pdjhyaqYf7uPfSZSUXVTAHxGEn2QsjnDBe8h1JyQhM2PypwwrJEUctgGZy83GDmQmnecN2QmgETDVU1uRvcjJ",
  "key31": "5RtRuUGuwuebohzkbL8vFPVvnkzA1BgGeeL8ovQC3WeexYptvFuB7ZncShstV6yLTxhwL2GB8RJKyhKW4j2zQxUT",
  "key32": "5c3kpME8N3n3nNCBSPZ2pLEkEkKFx6pvPR6KEgANSTrUwZoja4aAztsPMX7tavUs7dV6UYyJpACxXH6nrjGvuxXs",
  "key33": "Pxi4xj1M8VCFQL3QZU39HpccHy1fjETZyuUqfVWttB32UXTg5rnw2aghWqDp3yZtRdbWuMsHKAfG1VygDDEpBEP",
  "key34": "4kWs7CvMLFKukBTkmk9mKnghR3ResEYJydJYH98GN7JeGzvvMDJpKwpWSYN5FYPHGQNVxZZyeUrELa44e4pPouCr",
  "key35": "67oxzpZQKtJfU9jkDSM3bpVLPaLSy5UBfNaB6ayPQjskroZa6Cc471uZmik8dsDjxYM8GXAYx3rJFGggwdzbWojM"
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
