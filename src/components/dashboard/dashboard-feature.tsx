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
    "3kzjiniWMXyKjz5EnR8fHbY9g3vPVKGGU7T7T8vAytMRuGKLpfgoG5rXqMVCzYWBarapzWtYzZzvrmiYU5khTpFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64q6mJozJY6x1aSjT5zU4p5HutsNrUbRB5GCNM86BvZKzRm24ws5B5XaLFc8s3jc9rq9jNmeXC1jov5FUao3ippQ",
  "key1": "jsXfkzGBaYGbLPmooJfAv7qhNoUffPa2vZ619WATeM2srQ9qgC12KitPkFaaogkZTU85ybjeFLpFEcs6sGmvMCc",
  "key2": "2NHqoCQ8Yq6e86WiojUhQMEiqvNh8feMRLhfRKrLHqZGrqfMn2FYXsyQHHttrocbLjMVbLvzLxXNuA99F9TC1TmL",
  "key3": "5V8ECtDbPeqXkZpkRDMzKEduWNi1BxdmVfSaL2MPbTykR251k4VtDRMFyfTAY1Tnf1UY9VjPASJbCcPwQEUA7bGn",
  "key4": "4cejUe1dkDsyhnjpe74gMrAs379mupyoZhKmauxwJHX24VQ1oFYf4PXEkHEiizHr9CyT75u6tPzVg7HZbt1b5qRt",
  "key5": "5rnVtaSNPkfoADgeqfbvR7iwkjw3kXaGHMMy77gMRqmu4KDSfvU23KnKi7Bt5FJoFVMsPTXPueEsvWBDEMyy4LBD",
  "key6": "5Pez72KJvrudCDNQfV22kWMj5cG1GoofB4YzYL4DGu7tY9qgaCU4LtTLeGMAE4XXxYWbdGgJNJUKaWDrS6i6ghWu",
  "key7": "4Dkqw4v84jQZf2fsip6v4UxuXbR3q2orFLFr7NT7FZiLYQhdhcY2FPRVXEfJRCW7vurpbh5pbChTnHpk3eqLREHe",
  "key8": "63vsE1Y8cf9M14Bi1ZJx6tvNuzJAjBJdinZfWcMRb3Pn6wXgDJJgrYQtkDUF4bb98JAJ2nK7jdaQP7ufunDjUaDq",
  "key9": "3pQGN1oqeJ2hsJm6SBn7eKNdy8TyEYMqZDr85cB5xB4zWKgp8SQJ5rnkVzT9H7AaAvCcEDPHdKdx8kuALhTtUrLU",
  "key10": "bdoNtcPsJRKb3AjQrr8EDvzAwMGskim1wQCZqgmffTUCfa8cuFTXKZUUgQwr7ev5qQvVp8bSZBjJDVsvXVG79GM",
  "key11": "YJfuivA5PyU2yCFXGdzxhzdwRq7nhh4eCcEnPXNxruzJZ7JRZq3HmMiyDneKDrdFXWz93fZKS5AgGpdEnVs9SnT",
  "key12": "537qhqWYFcDGUznMPVPsvxz74TbyDnLGnVni1fHyYq3YEjF6gX5X9tmsP5FMLXPTwDwBbNc1xEAAdkPQTApAMp8g",
  "key13": "3Tei3dCYGxw4U4sDshsgzsK8LPMzkcEQ4rfVyoEAFMhfBVeDBQh7whX5fX6k9MHbPFAoo9izGkHCxNzV2YUALwY8",
  "key14": "4NbrEVYAZ7iVJJTRkW4f7D7VdZ1fY9H9bp5KmovTMSyj47t8VMgU6TS3iQeutVvMzLXuzsSMY45o22yTH1ZsLJr2",
  "key15": "4hmo3idDfFYM57cP75CQHQPTsgUSyqta9tFCio7aq3nyCMteAnD81NumgvxeLpCWcPkhGAHuAMHVNPU1Bcb2VusM",
  "key16": "3PXsggGL1K3f6mxwqErdbVppPN4TJ3rS6yxEivFA5QqoGBNru7xskstxBjT9Gp68VkQDXR4JXxMvrXaDFsbzxkXc",
  "key17": "5BFf9rkJnWVr1gDMZCKvGEBS6FEBk47id8mHmdgjGjsCE7KXYc5gLR1BzsHoPyZ4tbiSLssM8cAf4k4iBVU7ZR3a",
  "key18": "2EK3KZyU3pehYe17jzxfAZaSSHhwMkPri1KTkH9U8YXEmSwmgQDiU1ZeDgBzV6VFtdxkUqVmpg8dYa4xsPKpDpLC",
  "key19": "3KCpfpRbUw4MRujp4LPmfrNwz9owZyyS7QiYmLwqKDymrvnGUCCA6JD1GqtjyfLnuA4bih4fMestGjVTHeeAgkPR",
  "key20": "4gejkHaWo18VcSqn7jThSaWAMYp8PYsQVt45A67w2aqSAtcMpgjzkZ9PYeYs9VH54Qh2acSHbarpZVWUbugPDca9",
  "key21": "5b64WqKPcqt6tovpAZe4cjodN6rqUyNWvEwTQDV3nct5eepZFKp3DouHyZhS9PyZjUvjAZZJUr4ckxv2yRPMwuAv",
  "key22": "5V12MfqvF3rj2md8gwnCx1MK9oZHsH4eVbFoE7hvE9agJsk8TNZvfdouBwTe5LkL3odhrth5USv842AukHcYTn9c",
  "key23": "4abiE9v3mS7xk4xJjcDRfSJg5HeLmLRXo2NVVnNuAWS6fdFw255vxdryoJjNK5vTsJ8KfN7rNV4MNr2cREgpVkb6",
  "key24": "jPgJQZFbPiuvqou1MfZuYAG2pBJpokq4WDtjPoVYadXdgxPw5hamhZzZ1N3YCLnxswc2xo2n8LEBTtgXoDbh45X",
  "key25": "2hLGRh78znFxFJzJ3YLjJ2aHAwcrD5Cw9J9xNxRVptXRuNkPgGAfQaYdyB8oMvkbCmrB4DuLxH2QwY4NGQv5ghAo",
  "key26": "4yeXABE7vw1worYV5gyt7zEDSNa9NGLG8PspywuR5GWhBt3r4NcTmSwdxoRFt1FJZQbsA2mT2Wkj2TAeK7cino6p",
  "key27": "4KysEK6vZTw1sTTrdxx2vhGtwe2pkiChSTDS5pWvYJ1j7efazuMhnFB67EGUuoNfi1cZLqtX9SqDXtw5bQmBDJA4",
  "key28": "2KSxyFu99cJErLkS79ub2ogBw85tLuuj5E36EwHXM41aSztzW9Db54mgrqC16U2PWj7k3ipd5JazTr5v5qX2NZ5T"
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
