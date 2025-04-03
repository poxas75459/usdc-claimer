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
    "5jKHUSFhZNuZHutbcpHzHGdytoQJ9XokVm7PnV3WjHfFD7FXojcrenByk2VtyqawuEdUMA3vyMM7HHgcMzwfTyaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43wdzQuYRruTnfwMf2EgR3jHppowSHfg5tzcPSrcb7eHXKud9ztgvMtufNHHTHCPD4MDf91DZPENc2SRNJYYKp2N",
  "key1": "2NGmrQNogrVaAKNGbn25G8t4SAw2TxH2ZKdA5mvBbViozcKpiGBHo7GBCuaprzFAnbPxH5pbWzxLKSVYr3k2C2or",
  "key2": "5nKNJpRE1L1EaGA5gJa1qvCeUsw1cfB4WSvNLBdnL4dQLRsXbqkFrTJnuQAAsXB74BEFEzxYjCc8jcgvTKx7yqZ2",
  "key3": "yyTDSkPKmJaEgpQoUbzdRUbSb99F6NMhjY2MWGFNdGFxV3VVfUYr3sVLbEHRDuBgEY3saDUcLWT6VMCDj1c79sR",
  "key4": "2ZybByX5HkwBR5y4637N5Xydo9W8i1arMBywnKm6QkbkV5JEqzP4tEGttS769qoTz3h5npJ4CRPmPkqVYfUq6z2x",
  "key5": "411uZEPufWifmgBSx3wFshcAY3jM4zPoBYvZRwQhpN56pZFrwpUGrKHEUAR7HpNpp1iR7HPAMxFvQxXCjbDUFnzK",
  "key6": "43EmEQiyEXHTtF1YeaiWThuHj1mCtkCLhbBvmqMyB9JM2H8ABjmkn25R18icVEZGteN9BGbnrDh5RcGdmC8RMbPe",
  "key7": "4LJRSrCZG84jU4fQk6LhXLH7ahgDa64egfesMy5yN7KvvQWWLAdhYiUibBUrympTkSD3K5rseZWQkG1hkceSk4q5",
  "key8": "4pqzHXYhbZssZxhGX4QiXcXrqQaSfYoxYdBj6G2sijfzAUkX2bWkjYSyze3GXYMAnePA1acMRzSy6wdxgcVWg97B",
  "key9": "4t8b3j9zaogz7U3E3Htc1DKQMV8tJr6nxHG12yH2NGTdhqSpBGWS48pyBjU4W5zQDHjy21tmwLqMJ34DTTpiLv2F",
  "key10": "5h9sRSjQjqs5RsUjbNrnVZQW7FbjQW3VM6MpgBQgEjyp8H3bESomhVC8iCkPZbtz5jqmx3SZtD3CczV8QpC1T4LD",
  "key11": "3YsCoKJKz86pDKeiUwE82x953zKn8TdrJiiaYfQteA4a94Pbk6uWrfVHm2QyhtC6AbNLrSJoxYozJAHA3cA9t1vW",
  "key12": "38QpMQgN42ni9GDi8rXj1Q58ngTzJTaHrgftYbeVoAzGf9XmwGGKWY74mBK6k64oxtmUQmYxjL8MFH8xS6VMFNWC",
  "key13": "RkRiPoWjZqQJFsPNwhnQPgnWSe2oKJHwZjHbqwvpNpozz1ncmGa8z3z9JmUDd4vRmf5JsvMb8QmRPsb94WJhEQt",
  "key14": "4GFZgXKtyuFypRhXwJuxYzNArYcc52WsPKPK6e1MbwmZ5QujGtJg5KCgcZ9u6ucpRioL2BV3JRNK9MSNQayJJ1LC",
  "key15": "4Yg4gvPao61bVoVmUBeLYWahVL37wNndzg96mt5QsAVp9q5yLanFPEDiMfLbPRNyLjKjaVpoFq9N6EEztdsPmNS",
  "key16": "2fLYz9An7EkgUPencqhKsFrN5D2EmP9bhatX3e3SNKqtwixYrytYbiJ58iz4vP4ZkoN567VDyaBU2N7ZCJ94ZEGi",
  "key17": "hFbeQ762wWwXdgccbyLfC5sBFx89Vy1xvsvCkbN51U68AfwAyrjyW7KwCQ9sLVaAji2ahGx4YEhp7onU5tDcDCN",
  "key18": "39DiCCa9G5APVFTuNL6qfrv4qNfpmGgeCxhMHM17EnctUczFHjNLKrtv3LDzHxF4P46DkMwytJX3tjJviX7esSig",
  "key19": "3vreAE9j57nyU7ByCoM3v54HtRwCcoJbwxuPoHHvWrpWB7WB3eoV9Usy4GpPEcuCm1PTYJhdXZAdqZouncHtSM4f",
  "key20": "5UqHkiJNqg9jjpWUtn6mmqiQGjF3MSaBrnhb31TnpZmMAV6UdP9KVV8Gtat9nDCRPXSNEJcUYFH84mLK3CMNR3Re",
  "key21": "5LRViit7JdXk8qs3VX16uLd1j9ZP12gQg3RVWJvLbfVbnm4MF33JwLHcR7KUrt6VoWQGuu5HMYEVrsbQASQMt6FS",
  "key22": "hCC1kTU8trxAwk5m2tZLktqD5ipygjNGQ9mdPNr6f8wL7uGh4mM3zh7KW3HqKSsVSyhmwEq6gUCS2yPw3Dpfo7B",
  "key23": "5ZXG2FUDngcyu1pFSVkwjSWPjZD4UgDs2TovED8s2njbkQFeAjasJYPdKSVopRJDAkMYcWsaJ6khuf29HVg9zSQc",
  "key24": "3fH59umqw1MSaouB6huyq8ZrccQx8k7veA2NuU9B3x6t1WXffeWhiCgSSLG2tVMcZyxg46aj1kee6WrT5CYedKBU",
  "key25": "3fRdDbo929nTDsJvFYZkXoHLYocRNRUpQbHVs9v4mzSXVkhw61X7SwEUTHh6DPfLpEcBHaWxrEgL55RT3JpHmaq",
  "key26": "3XjLkfHuE4EAWsZ6K3ksLAcBoMMDTXv5n8YxHBSRuGiyP3hEvZ6489EMqUpHhsJvYe1Z1VbRJGUosmko4cFRbY6H",
  "key27": "2i2oUPxpuHjG5SYexfU39vg7EH7pYJ41tyAa4BerYfN6n9G5eBLfGB8ETdgoVPsR8UJbhCED8uPu7QXNsDsQZ2DG",
  "key28": "4PKNHM4rfiTNxEXcukqDRBBX3WCezo3yP2zFTTC7vZp71ktaSoLk1wW7FkrrEreun3X2uXCGkAdTbbBonVv43VBE",
  "key29": "32tmgxneu1tMvxGCcKY729HA6w5zsfYgP7TULzW6pL22sp9TKqFmLpzCH8UEbBYSo4kNTZxjwXxJtsJEacc2bXPF",
  "key30": "4FXmsJVFVqC6RCH81M4QPs4Famj4go427GULqFn62w4jZeASDwYixkCaag4ZSVCToDtPRqaXTqAjQ4BZvXS47H8d",
  "key31": "5hNpyGYFJcYZWwucTkMa2NTpmCY9PM6rDaKnDJ72bfxLffyEYWaFPUMQbJWEUbpWUcYmCa5KqoUncebhkmBX1Rex",
  "key32": "3iYyrXTM67xGTxL54FHFxiu8VkgPcX5S9bYKRUu2NK3KQq3rTjdxAYkzEw9d5ja5Euuc7bdKhR4tJZFgRZJxygBz",
  "key33": "4s25zCoTzAkt7ADMDbn6Y87Eows8ZAU4qYyXE8JE6fRxyRJ6VYueFSgD14A8PhrJoYHSyNEY4GEqNHSfHv8wWhr4",
  "key34": "2kufbk5SphJ1cwt6DdB7ciFpnCJa3xuXGvnMUMLcTUU55RJzSwRjZyEy116JAak1bDvTteHgc8uW6zFErwGU7Jhg",
  "key35": "31HRSCxwzxU5PK4jJvGEk3JYcJWKPRgE6rYfxnh5cFq8Dqd21eHRMjh9HHpnzmanbsLq6w7ShWwNdM7K3tjuwPpz",
  "key36": "3nCszfzQCA18YRVxeVPg3j3fpFxQxnNE2BKLyqtZhgP8Dh3htvbqAiM2Symg6HC8eAUMzZQKdYThnSEtB2eAwHB2",
  "key37": "3HhorLWXbYzirmrgkuAhrfcXGZ967cxFeAnBBngXA6g3A8PLvDuDtSEQ9gA8vmofERk4PB2kbyDrWaXZahRr6NnF",
  "key38": "36FaChT9gnpMPaw8sfAnzpWo9a2mzCSwRAUfkmcCMVpz69PfKffMMrxvWKRVFG5ghbR4XiFk8s6MxZiXiirBMKZW",
  "key39": "4AHfdxNW1bBwhPZJTAcwNpmsPoYbeuYvezaBLYCckhgXFAqvgW8MAH1oqbtXZYpNdnmHeDgQsU89RvrqkJYe3Rt1",
  "key40": "2sd6D4bmTjQFwR1WNNPqj9F9TWkjAh947Yk8rPyDTek2srNBs3McMeR4uGeveiWhYR1HzE4ej2bFQUBvMQfNfkMt",
  "key41": "3po2bWFqV4Ek1Cwq8LGH9RB3KtYDBi8dgEzwKRMmin9dTSzdww8Jffcj26iEFt5Khkvq5hgQh3K1ZaC6v8mrskaQ",
  "key42": "ELyn5Cg4z6NYH1uhQgDMZzTADhdbYxwzzMGBYVfF7BhBavRd33j1mzd57Ng15mhmxAqnxc2okCzYTRSi1sQ2qfe",
  "key43": "3UPUCz2X4hkfqbXDyDRXJiDKCWmnmbmvTP7aVhB4B2b5yyGBKsJxP5nYNc75zQeXFbT9njPNGNMRYpWBpWwirr7T",
  "key44": "YytiWPtDrt1TVZq4tonnvXVgmqnc5G2e7tXy6zBxKr1LJbQ7DwyBeaEHCAJ6wNiENyVwTqHXb8BLCBmW5eQmGg7",
  "key45": "4ekGpi7QzLUGLQCngFrHtqjHCRssixZ44kjyZhEnWdi9zjfBHC4QqZhGwQLNpMg9fuAi49XSGg1tqRUr8eE1wku9",
  "key46": "4aqdGVCZ7jtreV81EeMVxyJcdBcQhuaYybVZpbwPxUQQdkChgGnYRxUo3AftGAdC5sKsC94RrreN7DvgDvbnwurT",
  "key47": "46EJkpBGrJtdNwskgHwZpUA5VNSAa7TrLvkPspSD34mf4VeYkDGEKb6Yw4NXJNszhFai1AkhPinAQ61rP2jd7KCP",
  "key48": "5UYj2aEUjtNznN35zSiWnL8aLp9ZTHFo9KHnvWPSUosSA6AgUxWCAkQwkPnpkQGGHXhTHRwVESnDB7jJuyce56fk",
  "key49": "4EBn97xjwEpGN1BaaxqjvqwP4FiZCQoKxBYkTYWGnbVStYR1RS9qTWgPAXZomLj4VM9h5in2GX621YjDW7hVEM8x"
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
