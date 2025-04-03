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
    "3bQ2PqkzNJftoSDonkdZmaWLZBjcgdcGcXcwAGHYdNGdKjX1yFTVfi5NumHHh9Xz1QUY1kxXkXaUeYfqUNLvzXN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uNSCSYATdyMX4kFjSu5wFso77mmyg3r9e8b4C3o2PY7XopZRwZmTp3D2ZnrTRckZXCe1KQm8gEgJkcHohazPJkz",
  "key1": "3TGfZkGtrWw7VXJtSxnoNNTAhxvVNuMZCq751kzR3sAEj8ygQguwShKaWvmVRFzyFfyCfdcQW5vcg1zgJMK7gxR",
  "key2": "5nj4di3knf5tScJWt112UBPE3U5TBuxZc9dkHrH3evcVupk2C1FMH6X1B3dn9QU5CxKtFGz2WJsZTuQnBQC25Yvp",
  "key3": "3fPSJvVvaqH9HLFoakgh6TivxrzDfLHwyQ6M5TQmXPUSZZp7Vi6sUX9uk84BNjNVnGS8NBmQ9q45aaqbABhw71eM",
  "key4": "4TxXnxZgErXbqvTFyrQ7SCkuARCMJ3keMfCFo6EW5NXqS8jwM4mxMMCgFWiNTNWYm539qcr7B7VCkkYD5fSuT77V",
  "key5": "4yUp6LtpBNckrv7rM4FHJYhqrHrAJAB27HcQxz7dyofAVbMundcyn6oAjy5ubonJeip15ScFfQdYxyFAw83CTqFQ",
  "key6": "2AzqLVQ836yzYPbDUZvKGoarSg3UVuzFwS4Rb9i8mWTgYSufLeKjSe9YT2JMrPGb9UM6BhaxaZLMDoLVeG3P5HWQ",
  "key7": "58A1qJaMYL81oUvnkpvDmtLsbNYArP4TkowRpvEbxm7hS1kpBFeHFXbotu92QxieZx5vXJueUn6Cc86q7fWdh5VC",
  "key8": "KHXXFExiuRTvhPgW54oSzGjtu1b9pbGaTJX3idzb1AZbDhx5xmdiFB7S1fgnXQxmz3aG2uCDFoNjQtvF9HUhYQs",
  "key9": "2gs1cXUVMX1yoavTcVH8iyQQmajR9hKUbgiLm4owVpYHnr5tCYpLRcjL9fwuMR4i1VZBcjS3djUEF46UZTdLUQMC",
  "key10": "4WahuaMfRyqq8qkckHpKEUe7C4SEJR6TGH2HC2xZ6AXWBUbXRwmQSVzjLL9wLQDVnTbnWx7RThh2QF9G5YyobYPZ",
  "key11": "ZaaYRQRPKEvRnHbqf6qPuyTBv9WePKvyYKKKKPjMhBxEwVZsgjrtHMVUDZVaaVbDM1gRbLChLtm9sTJ3QyGvpJt",
  "key12": "3QzQ8opXNySLu7EEJU8CJqLgWqqQdSvLA585iGmp1ndT8yKmL4sJRQ7PZurkxZxuDotFwF88M9G98cAahpDAgNue",
  "key13": "AT9qU69C3Zf8JDu5f5pEGCkkZTJSb1fHRdwVJ8YAPLKfsfkmsiE9qZctgS41yeHfxtLTZHdb2bdMvS6hHkc2uxM",
  "key14": "2vuwUzJVZKvUYKWic4eDt86B8pgZQsnPP8FKbK9xaxAXq1KZvDYy5KZBVansHDHaUis8geNwWdskUdS3ChctUsQB",
  "key15": "2DEhyLfXsRgDZtmwPPChnBfBpE3ciUFTvguUfZYQdymwBGG7p5qYtrQ2arrBTgB1Z7bps58fQFJvR8VboFd9FogK",
  "key16": "2GBRtqj9zt5TqpTb9CgQFzKJ9GLo1MBy6TkBRU3nAdRqbBiMRdchEQyySUCBQ6pToyZzCiv8DbErFcdC7MaLgDQQ",
  "key17": "NhLaCKLXGxeL9SJwWBLTAjXt2rdY6kjL1Z3S4YduamMADRFkN7oJWKrcGxW7ofo8rLapNS49UVykTJ5jbsbvBuu",
  "key18": "5rRb1zDTYEP6PyhwwbdDdzaMRpzLj8pRghRc7bCgrN6f3kppXMLVE7DRFKXK3penDe6H4eWu2GAiXioA1VM8dEv4",
  "key19": "WCfVR1dEmWLffKcYxpkg19idXMKYcdwNGpJYgKeMws6CUzg5MGftFaef8DjViYxcQfYZzXSXiL1DYnjK8MGumbt",
  "key20": "2QvWsVxkykuPsUMGvk6UnepR8NeVPFH8byS2rvn91uxBCxuyrc1LCThshhrYByHBPf4e8h4vBVTBEBhVBA9jRMjZ",
  "key21": "4f3KG6bN5vBovgwSPuLf5kGArjmfrk9EZirNK713Q6cCZ9fxKUC2zTthDg1uRDT652NnmiPUzorWxfQHTsCuvUcz",
  "key22": "2noLEaUgimYDZZcm3MNzvS1o3YbuPAZjssXpn1Ayt2F9XmpVwZ8nw98jFq4Qs4KKvuNzoBm7q8wryTUE6CmcPYvP",
  "key23": "4qefDYN5GzrargdHLvFsVKQKFB9rEbXYF55hLUgWAsbsP1ukcQd4NWKLNzBzvxKYo46hARvRGZ4NzHwX1MFWAKfz",
  "key24": "2SFhxyxnSuj1s472M61gUCAgntDHnBwLZQB1esWp9kmJk6aCex34znmUPa8cySMPpvHkpH2Tmd7AwB6GNkDSgGE",
  "key25": "X2HRSLacsjr4HYpYbTPbnkCqSWC2WG7TjdqnbiykGG7XvYLFrtPrMmhUPxqnzKBLzaru6FYkokHHuUNB6XRtu1a",
  "key26": "Fjd5NL9mNLkTfWxmLkYnsFSHXqDeEQ8NQZg5hyQiSCfU2FTLEXpPgH4SCNtNgQNpqaM2nUqVRXbNxEMeKC885rK",
  "key27": "2CoGDbm3B2ifu8mq3NYK94sWAXSswdoY58DQ5EvUQzRLX2J3bCn4wuaAC6HXQy4wzs3QYMwbiDyaCAvvMg5BCgY8",
  "key28": "64BVLHp6zSmcKcHbzUnRCiPfh55FSMWznrqENWyDj3tTZZaHG41ic4cYFLfm4dRZbpoJ3UpipV5Zah8Wu34cvCgZ",
  "key29": "5yF7zA3g4fhcCs3FSZvLHbqspFiG4B9ry8we5CKhnfrpqBFfPsvdP4YgykAmav2p2NwdoDwiSXxNGF6kJVDxoERY",
  "key30": "3f1p7sKXwjh9avBXS99R3z273GkfTDxf1RJe348FPDQFbViqVcNzQZnjHJfa6KeRFpv9sPqQiSYSwiCYErFcKRYv"
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
