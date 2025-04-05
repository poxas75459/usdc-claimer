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
    "2xgiyVa4b6ZQM5jEhnDK4nfjko9BMTvGQYc3u6XCFG52aYVHzm2FiCKGAKhGKM7eX5FTFDSHtiyQqYAfPwLdTKLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HCcBrkzRdn8vSnBwcjgFQCc3M3vo1HAEjhaBdmLaGyW7SdgUaRniVgkvEi8dvaTJTkQBQNTFkdL2x5esMrGUjz",
  "key1": "39JLwwdujorbbqaTwL6TFxf54wipg28vj1d6oLwgdrmwBmEiP4jTjA7vcS5WDvEuAoPXfeinw1pEVxmLk1BwphZn",
  "key2": "EKn4HZfY3J5eeibxUGGucgeYhDCTtDdP9nBGVjQGwNpL7Kc9DW6u9J7TCf2bp7aHiwk336Yy62zXWWPcDCc33jt",
  "key3": "5kmN1QCfPG5WFjGEmKuo972uxHrM8XXcHuiYfZnQ6bd9cMb6uJdtVstMPdY1maTobJFV4xZMsicAugCrJYm63T9h",
  "key4": "y6QNMdMu5fxNsS5TmKgS9Yih2VfgFm8fLiqq2BqnpBt7N3ocbN1h4qpEgHfyWJMR3stiWVMd3bB2bPSi59nZPy5",
  "key5": "4m85eqM8fEv5g2AaqQgeZqy3bcbsfaGLsimKxRSFhEU1Zy7wsCYAQFZV5Q3NbEtjTMw2zUQk2bADFpbb5hcRAdDL",
  "key6": "3PguiDtbyRjcsTdkpaMMn1kBcLArTxavakdKQkfanNGTmdD215LreqTxXYUJWz179GrSC2R7fLQ1vC2MBuEUaoqX",
  "key7": "Q2cqUGMDtgNrYw4pLqPxQKmi7DM6ufM32CN4yYsq4KT7r2NkCqNtKpEHkkWbqsRFFciEsMrQV7eSvUTMsJZ6z2x",
  "key8": "2ynoQpAhetCT3ynULjPp1TetDpRRTbRG9rCM2yxgGUM1vk5N1jX98RL3M7YfvrTM5tngG3dYuhqUVVyek1LZHqnT",
  "key9": "2ZeqCB1xWdXJpTTQM2JppWDLqqcS8DQBK2Ka6o43rBqcTLeCdZb3Ne5bjyVkdb2DrboyqzujHAAhJBKc1g71wiNa",
  "key10": "4ex7F5ohyzmeqygd9c9cfMdp6pSxpPyZjngf1je6seL5ogpqr1XuWtethfvqRyifjxj8wKancnhh5Fyre4i6Bb1u",
  "key11": "VUZTHUHcRs6fKkJaCZt8R2xiT41uV2NtvuEbzmxCgmu7dkb35oiQfD8qW7RGCuq4tizrssPTaRs7JU7FmFc9fbH",
  "key12": "3DitzzNvhNFAKQhW4N8Losj1oeJaLHewnkSH9QVVzboxLARaXJyh7FNJwbPxiTTh1e5ayJTBNLoAXVBwr9imsoPy",
  "key13": "38MhjKjD5YLvLrFgrT7pfPLHAGFPHVvUvfVMDHbrFDGUdGfeK83yqasn6XKauC38ooigoJZYdaHAfm4Wfr3FUDss",
  "key14": "5dqJMs7tGKaBeUcsrK8E14peNxrxbxeZ26QMcsdWHd92aaVusW3U7ZC5iRBAPYqUpTXTnGYPN2DVT8MzJQL2JUUZ",
  "key15": "3juotZNzoJWNmazxrLGXbR4m3A7v2dzYujsZ9HizCtSboaW8RAr1oEXxLrE8cwq4d7NFxvNXrzN2iN6aGFrrhcm2",
  "key16": "rRP4b5zG4yuffkmWgCMGH3YTHW33MkBJA3T4V9dBguRATTPX3hYJKxxiyPrLNK6Eryy1oJ4TbKACMKT8PirbhyM",
  "key17": "5rtsKNxhMtNorCH1reYj2YACiEBC8UN28o7EGxWPVpV38SFsVEjDtdSoPa6f45U4SobrjHq9hCnhjTUbHcD1woiL",
  "key18": "5wLAZDnt5jcV2bu5Drm9D1QczxymhTqr6ZK5cybBcc2LRWpiY72Dx9NDJVwQkH5CVbGUp6oNYL8JYPhiz2VMjf6o",
  "key19": "MEgZdaBNjSWoYujGZTiDbW2x5W56adgvuDmaWraZbya344XXTAXJhv8A1mABo7beHkLvCMPsx5C4oEmQnvgykkn",
  "key20": "53cHqAQbsZQUViQznxZEbrAsh3J43isSLguG37GQ1GJfTHKx1VyhKsyr5MCkRTq4vmMfDWYnjd8ZcFWkBK3128wx",
  "key21": "2u1Tp8F7Zq6cGxd3xQWnJoBFn3ZksEUUPnzD2ZsjoKL9puyWP9zbsR8qhDk16oDgw7PU3ZchYSfupo2SBAcEBET4",
  "key22": "3gfSUXG4hNbAx8tjCwAMiEFizF6kcC13GY2UcUaL7wrdAQTFuRbwFmB7d7Utjz9yQXj9aa12cmxyZJe9p9CdNZUD",
  "key23": "3qRR3ahRXJAsu9H4cHNF7q8t9Z47dKxuZYm7bq6S6F24xavsqgUcUUmWmKRN2GbkDBRHo3tJcPwFQGSDeU7jve3H",
  "key24": "3RrXyPqGdDLjetWtNsQK2xsJNqeongNDKQMgQjAgKXAQHYxsktvojSyaHyrp146n1yMoP31mWsvKQ5swNFztXxNK",
  "key25": "59cqD9whmaB1kfT4KcSTJxwHamzy11fuvrdQdoWo9rAt5kBRk9WVTWXEMPW6JyZy2RF8vM7Y8Q5327t5xG6TxPfL",
  "key26": "1ejqXJWJcda9nrfez3HXNxdABBNxKnPfVnLSzGXWRD2aUT3NqUqCUspyaAMJAUe5SjCRwVw38HLGywuUc7PBGh",
  "key27": "3SUsqo4q58WBp7YzUxNitir9yd9vUG6Zw1nFs65UJ2EsXGGLirYT6dgt5BLjbrwtM4NzH7CoiCw5nSiPmXgXnCGC",
  "key28": "5AAZufS7XEBAknHTA9TkCJejXDzgYpxE5cAmjUJoim8as8Gdmm14VXFH3RJwes97M2q4Zvxb4oCJUc9i3SarQZrH",
  "key29": "593fD6kXv31GFCFTYNev3zsYYwV4VTS8XENKoChRQqLdL3u2NpV4RzjzDGHW6K7KEaCsWxMVQeJnhDus7oXFvAMY",
  "key30": "2cbP7vwfZfWLwejNNAQ3vwx9rdpWHbnZZQyN4VvYrTGJXNNWpqskG1qCSbVS21v3dumecidDgbMqwUQUYUby7pDh",
  "key31": "5gyvTfedYVdD7ux5yn9UWFk7RU6GLWEL1BgJYXW3tNtJ3hdiX37Z2yfsFSmVDqvZuJtEhgVVFz9HnF1fSXvqELdk"
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
