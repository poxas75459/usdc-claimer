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
    "3TVW66VArx8UzCbcNiEZDjh56W8aaK4FSWBi1sMy1LsShy4SGhpCzcn3biiZjycQiVJ7E4cbbFC8uPPXYkTdLjdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PD7GU3g8dPiZWRs7giufZhhDTpRLVd8kmRGRojPzNaGk8doDRkvQMPFCZENUa7ehuRQ5juvQPn4fWAstoaMfdHS",
  "key1": "359mG9yE1CXRw2dhzrbYoGvuSnM4rf44M5BW7gGWvx5cNpy9FZztUpYMbqzk6zBUMM1vcViDDa8A2WakZBM5A4wR",
  "key2": "2LV4B8TvSLLwRp2X11WjzBobHtKzsXf1yNZMb6ZpXPpug2TGsjayDrVxobzAFSrszYGf7ziX7HsmwV8dnVXEpkjk",
  "key3": "4iQLNock865EF2gKGbgg4eHZA1oSqqwbbdcd6GVDbVKfYZK37bGwrAfCqCNNERdoF98y7GPxKpLUQTkNrSx2U3Nn",
  "key4": "5LLWVeFTtR2w9vc2BpqsQWBTnXd4aqY1YT5Qnzokc1psLnxJrjVTfU3Ec9ugpYndPjjDZc7XAFGiY2PZScLXZPxG",
  "key5": "Z3BHvQcnyPLYdHpok1NQQEGuurfDAJj9bFiTkgGbcT7TWtZLqVwkBsZmytxRJtUrqatRYCZAVWHuSDSod5Jt6ud",
  "key6": "3aM6pKSLAXQWwQZAjubiBxBaG3i5DyJHDb7iaYiecyXpvKBNtzidrh7ZJQq7MGNNCXErBraKtreV7N5GTWNCDcmD",
  "key7": "2eB8gxTZEZNYL7xDEbRaU6SXKdJaov9XgGgSpzn6Rp5veBe5Ke1fGr5tu4kTi6rZbRKrYmjJqdmRM21aiioE9eE5",
  "key8": "4Tj12X3QNjZxSt1mFptvYCpC2k5ufRjvJTG1o1brqEA6QVDNc9NQkDVTxLoMaFZCit9vG4rVyYnLNNxym7qiA3x6",
  "key9": "4HDubcHZcerVNDbAZPAAyF622H3k8bAQKndYNZckryEmYL6atGYAgasNsEtD3QCPyqi9AyvDyJsdtTF34epkXHgh",
  "key10": "55N2vTFoLnJN4FU9XR6M1aCrwPdFK2KuxfmDzanKZpNePEzTh7qig2StXjk73ruKaoQsQZ73JXFgAvuUkYHU6Jxx",
  "key11": "2fcXqNLQCi1hu2sUz8JV6mPFN97BiFvB5ibNWUWJQGRZ4oZxVgNHkESpKQBmima9AGpKw78LRaEKNwpjR3afr8Ud",
  "key12": "3HsSoHqze6DacUDVUboTPsb2aZfoV9EM6yfSR5RNLuXcHSC9fpK1Vzfw9GU2So5UmLgFoKv7zs96FvZ6aM44okWU",
  "key13": "5KEt11U4taiEs7dJo2m1jnqpHLzzAZMW6r3sjTjxhBfuZK1bDKTiNPL8xY6bPqoH2NxSnzMu8Fpoh6zAncGoMAXf",
  "key14": "2a5d2kqXHUya2TaaPcrBzmCQq9gDLrU2LdAVoygyiDzzdtUa3VXdRtFn6c6fMvaticyXAVCkXDqAJQ4ipQjJWWpy",
  "key15": "3XvRFZnm1ecKfybt3nsbjAYiUdjJKbWN3yAvMUmwsxD6rSx5sDzdyT7bHCipwfUsrZghe6UXBgr6H2Ah2PZqk4tx",
  "key16": "6d9NB8adPEm5QE6vULwbFbGHCnYo4sgXD72MY5YkPDr5nf1A1A9fLzLXXBpjdPM9QsmDxjZGjnUC3uV7TmGEcbF",
  "key17": "GcoUqXfFarsVWfBE7UWDpevWjA142FTzVEBkmWF8ZYZ5cJFTAGnBRwSWrUcLHoPUiXMrK3hZLfPNzCd2rB4UUbM",
  "key18": "39B4JgCPKzhPM4zhenZjSFBrYYSTA8dU3piLG9uPVnDcpm1nszce6vYNYk9GVhpBXxFqin2fGLnnaJFmy1M9M8dN",
  "key19": "438MAwnTpKdhkA5gWxSJzKUMsD7oPaLrzR1yFV7B5XdYk3nmtod8h24Sjgg7p4HkYRAG8ttP1HWJLHmh3KxAE7Q2",
  "key20": "3qfCVwKTb3Uo4i3CM67kAxN4rZxaZVBWW2bnvooa6U3jU5LZqP87ER7Rb4acUGLrapLvxzUVK8ye8KjMKSXEWpoB",
  "key21": "3PskqXNQDKMDcNPrpmbgWKJtEQyhmV1wfwe3mNtQkfapXs73SieJ4ay2AHgw3iyLf1RhsJXYJ3LTfSE5ejEKomYd",
  "key22": "EV2mugTjQXNNioCzYuTtvJxuAzk2KhfkPasEDdULpWhZNYbXZJX9RDBw8sHyMhDpdWa4gxqZmwDjj7rXHEK7mW8",
  "key23": "65E9HEdix4Ge5okdyAf5VRBEV83MTds7EN7QYrpeoVAMc3hzwrTcJuuQGV4Mko3Zjc1e7zsxhoXUnRpGYLThThwX",
  "key24": "LmroHPsYeWwvGW1go1BdX9zr1XxJ6oucBCKEj1Qj37Lh11dk2AwgWhBTwKhaHf92pkSpZTBe6RDaZ2fiUXdLojf",
  "key25": "4tutfuyff8k1mpGnXSSNqbnSganEJPo5dauKGPkcCm4ywCk3JUwJcQEs7rkY97BWm5p9hnuaSmNUAXruwod5LSF2",
  "key26": "wvkGoVS2WFnVpzU5C8FnKqTLcwcqq2DbuiQPc2xMVw7TzSYwztU6REnnA7VHG7Wow5XBbLWDM3oUAcQcHPuzK3H",
  "key27": "2sfbcpBdvg8obVTQKKVt2kE8bAQSZQC8NkEdfNAmU2mmaiJgXDokRwst3SZwWeatF75zJPyMF6Y9k1175KioeGGV",
  "key28": "2zKqfuZhk8w52C1FruUHqWAnazsiGZTvuFz2qTftiHZo15kdF3phVNGG41fo2jtDK8CCDZH8zuKZcYy6pRQWWWLo",
  "key29": "5Jpjk6Rjx3gumnwhLia28TAMKBrRP65ViMmJ5fMvx82xznTJbe7ddsyqnZbaimYbvfXNXsvf7z82CLzmAosqPehy",
  "key30": "41rxeeuex3htGDmi7GRngwuVAw98zLVazxYtN1GwTrD9W1ZKgzdZn7NzWPitt9syE1ANgahbnyao3YEfSZc7ipZz",
  "key31": "5kG7yFtbTLirN7e32nVy1q9p67ZbiHsbX4jyLa6B7BeGuo5R7uXjwrAgZUCiGqRKBRzzr2BEZKC7Dt17Q63bkmAC"
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
