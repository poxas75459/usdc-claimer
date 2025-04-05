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
    "4uRTPmLLsNFwM1Nd6qisrrkW47hNWxXYjSaCRYKbCoHkJbG7pK9iLjoLWBvAueF78tdm3VE5Jh77bWTBmiQtRkZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nihNW131QyrFd1qDH8a6wTNjZLrwHfnFD4LS1kpJVhAN88egUA3Dh9MKzZ2jYLChUrLhZ3nKrPbPZSRk1B1YHrx",
  "key1": "QgzFkMbqEtzWUMzgaMydVHsViz8mGK2qCcW2fJypBjkBAYcpDPVTrL3AJafErJQpNzU5deP2Q5g7JfDq38fkprs",
  "key2": "1rVRR45vFTQxoXHABgGHA8y8oYAm164GHjSVbp6pd2y7wYybfTb4pQF3He55zmR8w6Md9CWGsixZVoHH5Jdqqgg",
  "key3": "4UkQ4iGNHsfNX3v6rT2aSenFfS85ypRQzk9qWWvFVL7xaRhpHz8cXdZeLUnCog8HyGiNv3LaFWPLKzTJb4cdMtzE",
  "key4": "2aWcH3vJcPe8y2oP6WnpNEU1AjHx8hEopVTEgA4gmgqffdyFTzzVkZcHedLT5VR84m96sR2q8zP4fxcKb8HY2nKg",
  "key5": "q4PQT6fnuiAUXefqCufEc47jpV8Ep4dTUhXtCjUdMTLsQhM8NdCyEiaGL7j8rExxKAXJ9m14XvZw6wBGQGSjSFW",
  "key6": "DpLhjz7bEWjLZWoDELGunF8YmBdarWyU2xivJMpXEgdqnmXruqb6Zx4SkyG1oeyJNkZc7xbN5GgQTN6xbDtyq6B",
  "key7": "64GnxdYZueiTr1HvbXpBbwdxVJafjgnTrM4CkMHuUSZzLDxT2ex12MS5qg32XoehzDDoFuL91m5XSUHYAkJZKyHp",
  "key8": "2sgWVM9rv2ULADGECZELnXdLBSHW73hj57HkBgyMhSYt7uJJ4ck46FqQdieKshmjFxo2DdujQwpdcJbDyfRZ3Sek",
  "key9": "4soczEGyPYe6wJaWbaqizw4LoZha5tLgBXTuaJWTK413W37QybAWUrkW8q1Nr6BCNwmUvAKjutJqNzBRZN76JXAT",
  "key10": "3UqYJtrPPh6hChW3Gj4b8dqG87yYEvP9xDJfVB83m5cQTd2Bhhjv2ctEWfA8f3YCKZuPz8EVMyqMg1XxEPfgBC1X",
  "key11": "2cD8DAiHXuEiyHKvnqAy7GRae2KxDEbS8ZhFjGnKTLrYG1X1zyM8rsYBiWWwoWiLdRBMnKwMHwvxBEehNWn6HKRh",
  "key12": "4ZAuDZB9uBhroaFKDbaiFYfi8UPotm6gUtyHWY6yMXkXZEnebm2nr89K22bnNXSoGTF1EEdrXQCNuivqqPHuuwaL",
  "key13": "5RpqdgMUuNmRQ5n23EsYSnjduJ5wcvJwnf4rCvsfTepgNxvSJqYeaQ5Z6B7mGDbgzTJB5xkQrH4wNs3E4UEjMVRP",
  "key14": "4M2ECew5kkcv473PgGLUJT5Lyb4Ykraj19tUuy4VV6HbE46KcYAaLQ69DewgxTjYxTEGtEHTBS178pnsdW7cbEJv",
  "key15": "3mbGB2mAKWcncvoPkEjct3MrDP1oj2fisXdixneeqJsCVncgE7mpbn3v8o4pfjXABvikxVor5U8AdM2AkjnjCXWN",
  "key16": "3MwoxAyYXKvnpv98Pov15jtqf9GaVFciCy83U1xjWQmFXZudcPfhKPQiGcZ6f5aHUdKuduXx2nUoYRHLSeJvwTu1",
  "key17": "4gvjfg8nw1ihktwicp5Xemm6m3y7M3pYdbTVmhxm27m2mTxVrKHm6F9FTveVY4uZ74Gkpo67SgHk41Ywo77caCYa",
  "key18": "4sQd9D5j5uPu9c2MdVYoqZSbHj3aPCKPEJAKw2X699ExFEDhYsxosJjXMgdNNH8YAn4jkHcDjCsRGLgEj7oZQaw9",
  "key19": "5MBrAXtBCVssJeZJKXFqEm6184RG4CdA2d6rwVWCCEgwTDdRWRTUdiLcrSzsSancwYcpP9imhit9vZpdFSYTckgB",
  "key20": "3FsronF1adu3MUZ1bfnm9Q4uUCEMjN4e3Hih3Ge2obSyoJhpdSth2d3G56J8L8kKrUCBK92PgFKuW8SgRbNBkvXu",
  "key21": "4bkjed6hDdMvevvYP17HogYmRYHPPCY3NPcbGrRx2trAv216XetCYYToS9FqnziLrkdwHFguwh6UNWGvefZqCvLu",
  "key22": "faegt5pVKhVHH9GywTteBW9ekucDhm1i9CaQh7tuMNT9W2cYcB47cW1VD24EvQ84WCkTvp2Axd6QQ2yAUj7L5KA",
  "key23": "vprtkZEAphv77N2QRNgC8YN4qVgcCQ94MB1XFno6dWXXGHaAjaTK34cn5VLG5ZnB19M1t9qtyxFJ63Gey9xakTX",
  "key24": "611Vwzrdp41EsryicFf4RD3Qmygav3zn9AHPt5H5BheEnKdsT7ovGq8A664UKxShgCjAhysWaCoFAcegoArRreAu",
  "key25": "5BFmVHC1SvWEt4ed78NAchzd7sWFWQcEtomajyjQmjpRXsCGns625ouRp4QSicb4jiWrsjxcCvZbk2iwUg6jRh3n",
  "key26": "4cYfHcVFnhsLWQy14Q9rcRHBYWjzTa86rmGWF4SDvaGePv6Zn7YbfSADmESsF9ZT2b8HGnop5APCnr7vYx1UUmNQ",
  "key27": "4MPpPLaWSRUzDqPBn9mYLxGAUDaoGE2XM3MrR3aPrCS7NXsWuRVG9NQX8fazEeCGqU1dSx1H8wLvFpMd7hHYjSk2",
  "key28": "31vw8xBHTXJsELH8pKqxgQQiJJsZ6HC39Uk4gjjf2X377QenkKp85ohhhLG8QoNC4xibxdBsrR11bp4ms3DVCVX8",
  "key29": "3L1skBUKXt3PohjNdhm5X1ad3Haz634dWrQi4RHzhgPcLdZxXieqDmMcPbfjmtjuMk8pwp2AsEpUpnfHBsQYz8td",
  "key30": "3oH4TCmE8VYQcfEtaCc9qoLxaZ6i2H4MmkFpqQFRv2m6j4RwiZEpLwQb2td54ikQpAVS5pprdwRrMN45z2TANeqb",
  "key31": "38C1zkRdC48BYrNhenuEybcLjwVUD5JGWwCeyxFvRtRZSngYKbBWk3eCKUbj7HsFXMgRyVpFdgjP43h4GntJWoJ1",
  "key32": "2nE7uWhRaugRZkYz3DCVnNqW1shffroF2KRwn8S1hyry7TG72Ut7rWMcqHRMe6UiWZTqhoyrWFDsgLtzBBh2Pacb",
  "key33": "4eCRTH4U7i98aMvB1JNhqscSzrFrMy97itnBzDFiCtvLB8vKw6NRVRaFa2GFdZF1vSmMj3r557t9a3nVa9v7diB9",
  "key34": "jNZz6ZTueN1aFL7BF6mAsWWY5QSuj26m2ik1CwDwnGcUtA9bcUF7hZQFR7QytGP9UBTgHxh7ckJije98A8CgrJ8"
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
