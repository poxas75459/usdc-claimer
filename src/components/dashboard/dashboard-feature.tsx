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
    "Fa4C3EXhiYzdf3zUUKRn2yVuehjxVWqyWL9FZP5NK7ZCvmv1zkaoqaGkxnZn8Jo7ubhGZMTduRxjnSjYgBEAGfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UzuFcqto61g7RAHWPynd5aZt5kWV28VrweWiQPm55yZmmj6K5RYDSg4hGDYQFz8KNztdJAuN5Z2yxuDAjZdcQMS",
  "key1": "3u2xwPBMARFDJZYx5YrFZfw6JLLM5GLMz228r7tneaB9qMUuwXP9zrs7cZGhBB3MDFKD9zy7y4AoBydzHtjK9H1x",
  "key2": "CKSdYG4PL1o1UVkKFdqhuSC8mq3rTy1RDgj6UxqUaZTnpiwJq9BTozS495jfYu27j6r2GtSBzWjqwvGeQ4je76q",
  "key3": "2DgTddJqbwHEe7dT5KZtV37PjLq3LvEMi1ALLoVRyfdM5eKapdk8izpcj92j9689c9xM29UB7uueTR5srZyYHFY2",
  "key4": "4VjNvbW9PFBQkSqg6LozFXPqytosmKdY65VuHKZcE5miXC1H41haHAfcWkVRLWsaNyvXJpCm6CzcMWijPWdEe5B",
  "key5": "2J2KaiTrxNAphGhsjea6o9pfabZ2xL4eFQ7jE4w3fN8DbcQfQfNbKcVf4ESWT1AKQTdSXD17VyXm6WMjdcdihZgz",
  "key6": "2UjhYh6Z1rrqEmdHwmKJ2AqntfAf4WDkosA2BLNMJV4oz73w2TWBrBy9D1YkWmLAaQyAgV5GZPMffinnPRJU5t3h",
  "key7": "5s1t9ixUHGf1GVXERgzhUAP539PDz2YuEEQtaPzi3JQLaToXwaC214fv1PucbYM6iEk97Qw7KP2ULyn7jSpSyo88",
  "key8": "3jkZ1iVcakggpELxLqfJEikhuxa3hawTgM9KJ5ACUTDACFTUpG5G2m6zxzQfCeEtjKUUDy3toaGzDPF96SuNYYxo",
  "key9": "5MvsCt88ucmmNTxRujRvBijiKqLzAn38YrTXpNKw1yr3EqmT2XXvzyuNP6qUN8gVo7gzrMxPjESj76xzGCu47aVh",
  "key10": "21cG92juoeWaGaBRJak73drEo5Hkh4EG86BtooG32paET7Seg95MZUKL6c15TUvGforTKdNenEhStySaUWZryP2e",
  "key11": "2G4mxcFJehuHr7HUBatkpAdqYou22vtyMjfKHrMGrWmJN27rRMsbT1wbzAghBDz4P7TLZ3Pw5jSC1PJfzxj45KjM",
  "key12": "3EkLXAuey6hngmEhRknxcuiFQMNtUtQrGe5zZMV7vMBnmLnMyJ7aEyvZKJ9r9cn9fzfpkAhKudDHWfizjPnBFZtW",
  "key13": "4FwxCJKWiJ8WxsPHFMVCKAdUAUugJduHDCVn8ECnC8TAZoVw9B22dj7aAZz8VbneBoNZrKaaRUnNjCqwEwrsPrup",
  "key14": "4unVVzGog1kUfAU8dsnyxmRFBsPW6RLytSGiiUaAFLbAjhEbgNX79Dhbp6yRBoLywwb3g7EskcRUxCEwEYH8GhRu",
  "key15": "5tpS9GDqQ9p3M32g3EoEj7XiQ334h1gAR14YrtaKfQRJMPnxut9Nvja1Ajt6sxPgDH8Le6XhEvG65FWtSmUot1cx",
  "key16": "4He67o2APSB2GSEGcXAtox6oVRqzHyH78gzgjCKSwso4AzRT5V7BYkapJFyLET9m8QemZUdean3A5bFZUorB3Ea5",
  "key17": "4T2vhdupppS9s3B9cKoT3wxp6MKucGS4nwxfY8mhGgYqqumSmTZjCKEVL5vKRwf8dVc4sSJWaFJ5DqB5deak4xcq",
  "key18": "3yfKf6j7d4DmoARhxfNPpqdTkCcvNAaHdtpEGp5cF2WXEsVQrhjrJ46izP2SRPnKr98NCnvx2UqkXbqELVsCN77v",
  "key19": "VUe7u5qXwLeFHtQqGPKWvDVNN2zMJRYrSBArHbrNNP1smHEXQGjRcLQPDyxv7V9poUdKQ7Z78jCdjhqVpnSvNcj",
  "key20": "2Tsa4eTKjHKfdjkMsiYFpBxHn6DpJgt3DPny7kXdWGWQSFwS3EnpBYVcMeDGF14uPgnrHcLLY2ydmvqYjuBnLMrG",
  "key21": "5ctZhEVJRN6zbfkgUhk7httLhjcy5EV73iQTGuZfVsUAnMmJmcdWedWzZ7yr5hC1Fw3Ke37KeLbCuH9Kmy8azciN",
  "key22": "3xecRSUybfnyRCfisuHbsFFyGBvySYBzpkBVXoNvMqrwYFuwQT6SciWZ631dAFf5ey3n3w35h8bwmc8hNUmmEzrt",
  "key23": "41TKPNnhG58LF74cMQU5J3h8s4dgapQbncuqWxiYKp5eaKxq6Zk4eKYqHFQ2NF2ARngaTqLt832bgcrGQVXob3Jc",
  "key24": "c6o1tZzHDFuZ4qdcF5PaKgJn9AySABk7XgNyPGGUWyyZ3wZC1Sb2rbxY8b7X5yEBhcPQudfZdkwuXXk85ZV3ruU",
  "key25": "pwP2APJPYEQJuZYnqNFcBmtanvo932eNYv1VnaKMzQb6dJE2jPLFLvjyxLWGazPove7YYzvB1cUJ8LUaG8AENhy",
  "key26": "4M32JbumhByF9ZLzHRmd4xLbreqTxcAqF2repJ44rK3FqfiL3WsWW18GEpQ1sYpjp88iAmWjw1NgbDNXToYuJp2",
  "key27": "5S6WRLe8cc693qaC8P4TrcAKtcQC2QaaanA9RZrzeB91Fv8ccMW7gtDUewE8EKrfB7Spctn4u3H6DaJ8PhhtMTvZ",
  "key28": "3KzetcYujDHrVn8fTKh79kCDVsqYeNupascTTzfoMaE1FX5hF3CqHMdLCE1bSs4c7XPpBvvLZGy2VdJH8kDT2t5o",
  "key29": "2mqCXYLQ3ven5PuVZdjF3X9WuNscXLHmoHciq4v1jeGd5NBeeBLuD1ZsvYhZzdnZqS4d3pztn3iLh4DXe5ccJmcZ",
  "key30": "4zBPcKLzrSREqHDT9cBw5k8wVgpA7dsYvM7AUGRh87w43sHocZigPvNoVFwBEPVSbF8PMTm4toH1bj8Ggw4c1WfB",
  "key31": "hVW87CjfhLCVw4nqUdjAFgjQLE8QnEbEM9ZZhMgUZKs3z3EwvyrCg9dRzvZSag5HarHcmdcWkQeckVfzP35v4ct",
  "key32": "4u17XAvj9SAcWueX4mkmy95eXkwCYuqhYqAj2RDiFowNrC6WG28JprSB9dqCVU3fpFWiqNN3bvnLKsoErkDts7mj",
  "key33": "2idPH21YEQFfbYCwYWJ3KYBJ5wpDe1W4iGSaxsfbJrrndvd1iHHtGxnVaDaHAUMYhi6LxTPRGeeQqPnVcawFyq3W",
  "key34": "4BY5kAKBPQ2wkPt5tQUCBXciSxut9revVL5QY5HpM1hzCAtuDHe64s2LDYKhCyzA9wAWMKEPC25ce1bz8tXQYRDC",
  "key35": "2nN2hip7C8cGtpMWsqqxuGx3RTXz2BPe5fiskdGxKPg1vg9pNPSBEgNYAM7W5KSwrz4iirumTioKjv5v3EqSVLdZ"
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
