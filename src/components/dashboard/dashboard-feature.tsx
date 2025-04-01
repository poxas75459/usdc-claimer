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
    "27ojN2cA6YSWDMevUkEw6seW6CLuunZNtdvbr8sLijQRE79PbwxrYRxBubRAnYfdRh1BpsJk14cFkJRLEWQyZftS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wb2QR24X5dp1y9VZv97rYpVkn2Yjfoqox9QkzmhQAvy7kv2GB9Mv2UaY4WcqZg5TzF65UTjxccg6zSMifh9gEjp",
  "key1": "62ATeWmrPhKuuzm6we6VwQ5cLCeTHmvEj1uVcaurMLeyZasTyJgHXrB4VyPEBMnJAQhtySu4oun2AtDFnFHRRBLT",
  "key2": "3zgNmuKGnuA1d6TduteyBf3p64YCNdgw8DuaQ6MtemsMohmeUBjLQL9RVR4ywoCbs9LYSYKxqj44Sfs9MkSMXgUF",
  "key3": "kGpcthbYc3bb888vWe7h2uGAzdRXre36QYP2sedi9Ut7syJmf33awZrDCbqajqeugx6KFEay5KxcuKF2HYoTs2F",
  "key4": "5qh6tocK4peHHR8v8Pr3wRBpdmi7CQEFCRqfTFjwJcPoJuuhQVi9ngP5ckEYMnNNMa4AQEqRmXmpeR8mX21Nnne1",
  "key5": "331BkedxTRAgeLf7e6csF1iaM3ra3qpmeUTLtUPUs7GsQgpw139DT6ZdpViBaRiizVFyo7CNdLYdW4mZYKTafq4r",
  "key6": "29Fd4yk1fzrJT7zJrnuW6z9DCoCkeiLZ7PTsHckLViiieFwCCDUgZSbW4uxfjisYP77EHtKT7Hbzya4z3FjvrG5K",
  "key7": "4rM2tccpx9pmajxxqKAjMtN2sMDBRJwf4GcdbPznNq2d7CbGP48DGLW7pfE4kkFop3VB4DLhsBRB1nFs89wbepJ9",
  "key8": "3cavpyzm3HGoni79cgKU4j83LA2YWjnH7hy8Eccp9MTvhAmNffLLcbXJS4aQTVMrXM6eFtty6wRNeCJWcW1VP7Ug",
  "key9": "23nu8zRSVvNwtA3Zv9kPej7F9gzoMa7VNTduCWJuer2L1SW1rr9LpGnkAxtYSdNjmcWi1P3sbde7j8qGcnUBL1HS",
  "key10": "4uZq6E8jbAUfWqUTDbn3fphS9Jy1s29whyQiDP9eTcpz6fzuaTBCeEToDZwgaXyRZ7FdqYejR2nym7uyd2Lqbazx",
  "key11": "GgYukAe28f4HHVJbkTk96ooKfmZ5T5egTWeNn1T7Hit8Zdc8hxNL4us3eX4iV6vBtp8pNAAfksQFjfFBBoGmb8n",
  "key12": "3RAcXdCn7XK9oary9mvGJY9y2rcRcYL4msP1sgdQH28p4KqpmDRF2ACYXnVLqWJCQwu7Wd3zFToLeFBbfTjJzZhS",
  "key13": "3WguYxfyjvrNXDpsNAKt3Gmex7NnkWzdVM6Saqd1ppWPBgsNsrGvJzG35SFrD1C9dgdF1DtMMqSGvHg68HjcRamF",
  "key14": "3RK2NTaKdN3mxisXPFVPUrq8bttMwoRV5639kxrmypXVsL1hT2rrcA5VPPGtN9fsUFX445XC5x4CoAYH4Ffqsc7w",
  "key15": "2XsWWuNA2L3JPtZVS36MKwGuv17ccn5bd6x9NQK98CorFRTxohZFpXwd2CsuEvmfprrhh2YymquJUBK9ZyPSLrBY",
  "key16": "58rz2GdR2Af9U6GDBgTZG2RtgQehWQ1VT6DtMKoAgbzS8e2LixNkfTNv6tJgMnLj9L39SuC6ES6U11mMQesCvRi2",
  "key17": "2yuLRCBsHZ8EF9ExKEh4s3gvQzsEjCb5jXoCFsp1bxr1NGEUqcSWcnZXVv89sSnZiRES6YASXBQKQSnpLMP1G15k",
  "key18": "t4p5HAWJcdnFPZxxstEeWeyk41zUK6DhPejqT6G1m6sRtbZrW3cZip7MXkvf4eQNeKaHbCjRiBRHSKdmM8cLHxf",
  "key19": "ukYR6kLFjYF8vDGUbiTPXYpaCv8BFXku84aynQ8QKsqYNBrgTgx22b8nu7TRVrDipARPH4gvh1DNw8HDr35xKxK",
  "key20": "517kKX7Yy8PR29oKHAC2hmpfZrVLvcqNVqAZkDGZ7YmBsxLVDMEoy3QHspA9r36xuTQMGJkbPeorNibF3duTyeSn",
  "key21": "3tp3QYLuETMU2vJvaHayptsAVXD1Y4oXvtQNYNmeeu2Wu2SuUL3B3Hu8vzpCttkKSvLrr1DuFWYbMsikW6BhKpS7",
  "key22": "3RB2QgE2H29d9tRooGBYaGAU6j48ai3STwsSQpP7sVFVNJtqqQFcDzfKqYTmV83KHbSLqbcQR8bx16JMQqVtgFAp",
  "key23": "3i4Pc8vRKVhZhUuMTcs2YBBifMBMvJeFhw742RnsaNz51qjaaGuY3kojrDVgyUVvxjLUatGhYWnDhXJiA34QpnVD",
  "key24": "2XPXUYLVj9m3R3KRBa5bery1Y9RFGs5ChmrHQCFBEi5HgSuV4qV1fMGifX7tfDcNJtSZZXCQWtkBRhok9aK5SuHY",
  "key25": "2faSme5z4sEbL2dXSV71m1PazXiCj3HkRhGrxfhhWFox8emJaiCfXaatMyXdV7iYAyy2wrosqE9G3AdX2wGq9mDi",
  "key26": "3P5wf2iCN5J9cqK1s5RM1Mhz9aWSP714GWEchYGstT5YYar6rZJMEHzrzn3H1eoEEqaJb7fkiWwhQRf99dnPVW96",
  "key27": "2E6Wac9i1wRiS9VQcBp8BSnFD3L17CT82c39uhxXJ32khAjoz44VBtrU14eoxrNRDcvDS63eW75mJyrfjfLEnwpC",
  "key28": "4FDxePMAVwgft8bctiCKNNDKqyjjgxS6AwfHpcQkwrnpWuVFqZR5cvPpT1XVjtzeiM88MokqRZp8ommb8Zo8YWks",
  "key29": "3JCcLsEWdGJhBdJmLeL4VTKX6oJ1Ff4Bjgo4b9KBZejdoz9YFb8DS9MX748ndbpnpLctkDm8wMP5vnRxCkVjPzYn",
  "key30": "2HEcMNkqSbZQrHyEGXGckDmkE6UHRPHVYGwGo4VnESVc1SUUtpL2BnzwRT8kKqBcvEZxzmZZ6T1b42pbzotAZLdq",
  "key31": "3QBrBkz7n7tYLsbpcGYsUDu3uqnwuaHQ1uP6DmPqY9Pzo3Mun4zAJNEhhkR847DNFF2hss87BnQ5uds5W48JpRuj",
  "key32": "HtYLxzXTeQ1UT76YACN1qJW6o8s5pm1Pk9DonscMicPhSQc2KDbzisGe7M9f6CZYiqp5YahMQHRnfr3ixqzEHkS"
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
