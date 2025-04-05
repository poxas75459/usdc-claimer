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
    "Z3GSnecoJZTEkDMmcaAgXb1RWHhg2aEFxGmGtdLcDZPf8ZxXcf7awYysA3ihEvwV81HJnJ33aDvTu9EL4LzRvWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v4P88dGkSUsPZLDdvFhR28Hx93C4NgdxtYvtMCChw9wdMWWbcCaQvNYVsTtbYZ3eYiLgsQKPKfamKtMuD5cKaoW",
  "key1": "423oygSEDU5CbdW5qhxXG6TE6bS8JAXYaYN14k6SvB98MNAVsAhhyosbYcT8GtxYSdok7WVaPGoaaEjpcVMMPocJ",
  "key2": "HbW5GUruwVLKfJLHR2rtHdRCxpcsXkUicH1LuZBpW8sHp2JrJukPB94EQGELQAUVn6GzMy3kAzLVj858sFJk18x",
  "key3": "5sk3oqq1PgnnPFKgBMJeDQrZcBkbgZzWpL26GU6qRcNRFrck4skHZ6PRsRpyfWPurb3SJpzJK8quijs4yk7iSZst",
  "key4": "61KBQ5VAHeC3iEDGS7MAsJfU8pnEfuPCMTgmME7ccsTyod2VVjn8AUcBysHGkHkSmQAWnfC238o9WttG3ucnb9gi",
  "key5": "4RbD4jHJcVGjNYY4xRwMP7qzKLm9A2hYxrNFND1nxyCimHQm6BjXPDqyCPvML5djn1T9yUkHquVcTKAZUNKwH6qi",
  "key6": "44dCRESxX7QeQpj8zdT2gBwi15gdPJsfhZU4xsLsCJFxaqV6Y99SE1XRzVTXdkVaAhQvCZcUedpQMR188BDisFEx",
  "key7": "k2tQj3RX9V2fNdWvcb4m75DVChQk1nM6qHz2vXv4b9rSYXi2e4CHW5ML6enbiifar2DQpQay39wVo68xcy4JDET",
  "key8": "2NkAH1wyUXqPaJFjzynNWCF1S6gTeWtDDfkyE1pU1XSJtHzNVZRuYu2RSmjrUFoicvE4gyLchwCyihZmE82BW6vB",
  "key9": "4bMWTtR9WTUfRpWBCCLeP7YsdBFv1XSJiXW8ckP2EJ1ZN8j8ttL8n3Gwe4VueuvHM3qBe82uw5cyjTLjQezjSpuJ",
  "key10": "491RaS9YxD3SfbxTQj4iEsAuvkh55fuZyTEn4kknWJQAbeM8JTBTEjfDFfS8zrEuGsVhjRsV1cyzmgk8zL7N7B18",
  "key11": "TxdxUFfhZv6d5JEv1oPMyETXgQAHpE1uiZxWvR6SU5eJRjqEJKngsp25rQDogjhnc42tb6X5SWouf5RA424ebrg",
  "key12": "4TJfPfuaJoucCqBh4puegktx3Gi6W7CkNzSwBuYbVtkuvJmjEs9TXNwF9XoXew75Jp3z8riQbAwrYaEaMLEsWr4B",
  "key13": "2LXgzUA1PPhaBRaqgXh4w9mbmwpKH6KFMmb36QP9FrCTrQG5tyQZXwjCQbem5sBUBvaTvTgTQXwtrAYZNycEj1tY",
  "key14": "49FerDgKzK5cG6MTb58oDhiRMenA2pAcFGusgu747GqNyjDeonVbrRu7G4qiJhsEWYCVb6bhkBxpELTrfwQd8HDb",
  "key15": "2mZTbQSoBrZYUEAyNW7xpSumVegM1s7gF7mVudxTci7dkvTHChQ4teQKKj6LBDpAi4CHYh8uJvzMbHp1GhdYoTaV",
  "key16": "4CoRBXp8XYw3q4JP1tbqbab7BhPtsBwmyARogN9gkjsyAWCr7pbGxKxQKvmJsFm715jmb7ikFPdQb7Vbo2oTJEJC",
  "key17": "4QkJXzKRbZmhp9FPfYE2AZvgFuVrQbWyjbZwm5qefqQ78CFV4kSGnmkh1qotN9FWafXadZQqtQNm5jiRyve1Fxww",
  "key18": "2KZpiUehd2qZjH7PvexoUix2Lg5ouhUkEK5wXxZH81Z9PmQYVLTjs6nonfFHXPhWzA2GfD868KNcUS1by6rUUD1i",
  "key19": "5sQ3RmLgUMQUZVSTQsjnKvijCKALXqpo9FgBeqACR6GAVb9YGWtDS4rrPuf42RhiVJNq4gq5GwaT9NNeX9wn6U1M",
  "key20": "1ALSiWHoGoQ477uup943kZ1rquWkEs9oDPHvaWxaVWCi1Z6LhMnex28caZevRd4Vq63Xu7EDoCVfoE5gq4Wn6Bn",
  "key21": "3AjK6widN6rEzuTQBoDNwfRu7TNQpuTZdVMzYavXEiyBokKmsKxghivi9FNFQDFNLP3qDwdLbMfTGDXPZ6ZqkHhJ",
  "key22": "3ZfwudnbcExPfUUwqScHPiDbZUr1f1LzLHuLR894s7iPfELaxQfwu3FpBbzLp7ZNnUKVkZ6zSXNUUhf1NK7WPvPC",
  "key23": "2Y97576rc5Ww3wczYTdaH4FvQfQBmFhUtxLCNbZTA9axGrdSsD8sdGb7rjQPbkHGNG911Q3wTdRhTdt72GjxCKPJ",
  "key24": "5QqERHjaTfU7aQGi5uzDMtMTUn2r3yu8EcwkvnM2HcPXhmHcQQSM7wZ7LHpo3Ca8fC3dv8MfD1zBtGgbZyCuux2p",
  "key25": "3ofcj9pwQqY7HTqRnRA7AEpZZ9uu2jD1DZokBUmkwEcPjRoyr1ZLExL8wNbgkYe48dx68CriM4dt2jNgxEtEpZKy",
  "key26": "5xdPWavDVcaujX26cgBuwaKLJY61kjiDbCjePrtkVVssrJiNv6PHB4pYitXXFRXJJUciMycenwEKSLQbLF6kBbDT",
  "key27": "4H2Uvu6ohEKaJFXP94wUkQx7HBgmkpRh9AJKr6q7MNKP2JT8Lsue7EFFEKnfr11W7q63nJkTQmoyv5ErtvNQZHVQ"
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
