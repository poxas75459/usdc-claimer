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
    "2vPxid7Pkxzz36G1WQG2rD12FbMtsx8UQm1jMuxcdn93p93Pk9q2sMGtvjbtq26UsoxEMqcmg6xocopffNsxk7U7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yw5v9Jw28xCNLLgUTRm6HsvkUUemrT22i1nMQyRxHDCYfopew6ydgR4HdtSQRP5FDtp2VZf8Y2jZeRjuQBeMaop",
  "key1": "3r2TjBTcN1MmsdoSbZd8suJbrjUZSeHf97CP9L8BgSwaVuUsoPJwmHjdBNSLkMej9YXGihwEcuhsrVU4XP8xshmY",
  "key2": "2Gn7temWFsZ3RrVV79hEgWRYg4KxrniRd1Z2MtL6YyRfTZS9LwBdpW2QVSVEAQxwFuCVYZDgwHQoEKgfuTZsXo1f",
  "key3": "45y29JN8JKH993SWx7SwDvmyvuHwrEL3ZuH8Q3xq4wduk8b3woiFpnWVXgTsndJFhpo6UNn8HF4TRPPHPREAQtGP",
  "key4": "bGMFEUESFmojefzsCLKoSiZUpyc1zP6v1omjyoxWTf6rxLMZU8b4tx3K72gYPZMovqatwLwBptjWYX5XhoWK8Qc",
  "key5": "62ewo48h3No36f77USuTjyx1B496UapGi5QiBF6FndfxaQwpxcF5iw1PHtEoSjLputYGmCLNzvzhbjYU25PfxvAQ",
  "key6": "3qxDogpYV2WzCZaaJzoN11ja3By1QLksjRzJbBdtbkgc8XD4VuZcxeJarVWCfMhxrBVUDHUUmhumNzVUsAnLra9r",
  "key7": "247j8KXgTXnzif4Vczq3vtdGnJKwBFGC4FH8tr7G2ikGkaJaaC9cLxUa9X1CicnmnKcxGjCQrX5rKjbrZpEtcULE",
  "key8": "2mcsf5jqxNz7BuSYrPdRJK39B74MKzFFfYYyiY5i9rdo3N5gzKu3mp6Kvxxvin3bbtSNtZkJuPUy646fN2BBnyje",
  "key9": "3EuvpEN2g1FZHw2Mdcdqtv5VVNSdcYvnCjtvjwsWtJvaAjQ6dZsWZ7mgem7RbPN8huRhMbPQ6BiHLP1oA6abCH4t",
  "key10": "3ZCxrCxhkeYh6yAxzZg16QuSoNhw9QLek9F5pvPvfyzPRycBWJGi8t5cbc4wqofzkedZZCL21DYjFrPNxw3pJtU1",
  "key11": "5LFruToeMay75vtxaqgrohohGGechT4XYs3NJj48WhGKus5vHD3mVtseyKMAJvsqdbQL52v5uD9578Ja98vuLy9p",
  "key12": "3EyPZn5a29S99z5VSBySVfTLrKZ9AJMuNE8Lm4DRi2wmvbJ24y36SnQoRe2GGXp6TYnYiC78WZzJa4QdVgHdrhTq",
  "key13": "2Y7cHE7ABKD3p9yjr527S23wCWHavre2ihu83EtYtqa4RYdfQsJ7SiRNDKSuDs3ryG269VdkuXQhnr2G4haZLrPc",
  "key14": "Z1koY89pGdy7HkL5RjPv541f4DFtH5TgB3LQZ3BUbmjDTsJVUHZLRYNnTpJ2kj7EB3aEkyTfNoeZsHJUqQX2MRt",
  "key15": "MBFePQA6cAPFkdN1fWvEhHzJibhrZjBBHmQe5PiemmXVAVT1egFrZYjR7YenZ7GQ4cK8sd9mtxkjnVvy14E7ivk",
  "key16": "5n58cuuMUU2WGTEDE34kRKwRwDJqC5WGdtn6AAvFNJwN38PA41SVr76i2fo14GKG4Mn3Py8uYKCE2Bqxih869GV9",
  "key17": "3fYpPTDz8JEn4oDzsPiTjfzRX2GPF7ExtRJJgDoVEMQn6NKGVbkKsFLAkDg7cJcMndbVhgqUwnUzG12UJ7Tu1wY9",
  "key18": "3KrJx6vxeHUaY8wbwG1k9mQsxb8tX6pKw3FxvdMEHvPULMJT8UZKHQMqRhPeUS3i7e3YinJu3DQyfo2nn2sG9UFx",
  "key19": "3ZojS9G79W6zCn3ZAeZD6MVprEgQE2JcrGoPDL381969gNmY7kXK9pV382VEYSh8kRcCxyWVDBq74GJCMQ5SULvZ",
  "key20": "2LZoY6JKvWMVpvDXakGgTVJwyC6CWSgsKMa7UHcom54SAZmU57ntUrvHRk5yGGeyoEGUXqogc6u4p9rLeTtgjjEH",
  "key21": "49NREEM17c4DJiAE5JqnMWf2HAmm6PDsuHo8rirgkYAeTbR8YJTcwcRzrsd2WW9mVoCnw9AvNKqqhs7HxZW9pzgk",
  "key22": "V29SwKpKRLYVRRNePmTrkUHQwzp16ADtTQYwdouQhFUjr1wRJk7QyAgUQUvTxA1zqZFJ4mTEnNJTyd3mehR8hdo",
  "key23": "3oAWQfvdgUaZJjAsJqGCE2hJdmGYwa38FBxaVE4Uf3n6NNgCXTmefu5LP53BKpK5ihSbnbkjsyQfkuSmeUxyPQjm",
  "key24": "8e3HpDajXvQiKwDHFgRqksWRmEdAtXW49HwXeycCyW8WGn3TpxS76YGj3xgJS7XmigE1kRCiVJaeYyffVoh5m4K",
  "key25": "34X9gZnpaLRwjqbaT76dEuARt3fVhqQb1oWQxyQnt6rfoRN65gTjNGMorfqJSZEiornhhy3qsxkNMunEWbjrnt8X",
  "key26": "3RrcwAnZuSd4bhFR4BjAGRme6B2h9E5RwDvGfr2S6DBJEXDmrF3E4FR7zqkTYWp2XYYnDPPszA1D61pdmDXBpdv5",
  "key27": "huvFqgM3umgrYFAkvHv9p37cRSC9YkDRSQQ9Pcq34e1TGynL5FkPgZYHCXx62Reib357RQbVKdrGV5NajZt94jM",
  "key28": "2pgJz6D1t9XeBhUquAPsZ1NMWkMTcQx3j7hsUvxBsqMHfMZWs76GHN1UMZpX8SHSnaAgY7i1mCARzxCFNsHibnSE",
  "key29": "d1oWGBYx8MY9nJWxoLbLnqrigckgp9a79EaPKGAgFKGKFc9gAarJ9jmd96LepbUV2w7e8kNa1avfAvuZVbf4UXC",
  "key30": "4AETt5QmA6SYDgNPpojDGcrG11itADpqKYrPGboEgaqJN33gE1vrH3FjKjv1hHT2vTdZ9ADRUv8wAsfWfTZ1456R",
  "key31": "5TAajyH2nTte7APdBd6dV97gGkp6krdhuQiz1aoMVpM2NBanpkSMGXhKxXTUqSrazXs9CRWfefJyjGyHMt1zZ9xD",
  "key32": "ewM9ocjhdbgdZf4a9mAmYkurHXbTjjiLz82Pjpt3bkb33w9mTXawqiwDPTQtvMZyYrSVCRyry3oiYt1i8K3T179",
  "key33": "57FTAATQ8kWnCXtXLP5MW8gadAHdt6szGrMM1Lu78Aa872oZpNXUeqgaHxUdBNJsyAXbCU5QHUJhwugioqzuTJMp"
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
