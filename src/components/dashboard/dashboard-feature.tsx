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
    "ehDVPVapbyQsBTXNYiuTQayGgMVE1oTV7aGsnAZaUhBvx4LfkmJeHt5WeRABjvQdMZWfK4JTtKfUKtbvd3nJRdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NCTp8jYup4Db7CJnmQABYsy5e1gG57Re3kXdFNUiQ9MprG4eQFqozsbE67YeLWnjSbTFhs1CNA8qxHrga8o6Lvo",
  "key1": "PfbNxrtGjbB79HALrbfGbsvXujKhXTq2TjKvr8ZoobFjLkLAmWDRJFiMY7vEtvM6TSsF2oXv1omP4BbU3A2grvR",
  "key2": "3Qn2CRDbvTWhmC1uZaDxc1yCnmMQGXQa5is3gkNxN67szy1fD3azFpjKfirUW8yJR6pgq8VFU2QzVbFFEjYs6U6Y",
  "key3": "3WkPvNq2U9mw3jZx9RtQMc9ffnPir5yfbFQRA4dPkbVZpxj18euXQsw9SfvFSAwy7vfczmoUW1qmnzY8N4Y4Dkcv",
  "key4": "3JS4zkaUwaP92vczpCpxzXaqoUQFPRgaNXkxQ8aLdtzGLu4HeFXyvu7fVxd8KTivJQVSz2B2VKZFwyZYhyZC6dBh",
  "key5": "24iDwvyEnsLNQVnFX565qwCVQx1GLo4dRsMzfWSCH6eMUmbaxz6r1YL83jYN4F3KfKXNwxshY7SD6suhhx6LMHLp",
  "key6": "3FYUeHu1unKZM4vMmj8fPMbayV18RVnrQss65rnNUSE8Mdk78PYXu5ryia1NRt5yttda4MKBGJ6vEHZcNRXu65vW",
  "key7": "4wHQoofkAejskuh8ShsNVyffat9w4L4f1yDjoH7LudAY8Noo1UePg5oR83fEisjF25e4YTejaNogAoqK93qf8CnE",
  "key8": "J6ap8subv8nbf9T2qkv6FjJ5BbKjBnbCysesV9ZZisSYYdLY7EJz9DWDgKA43M2kMLDwf8WYey5nGx5iJJa5ZEt",
  "key9": "4nPePybjpssmoCehtBHD12KrLZYHAetWKXHrTz6BKxAdVbswDFbu6SkvTrhakiKdgokeQ7iKFqdGzpxo57Xp7bCH",
  "key10": "24t32zafkm72v2PbiXuC95KNjiMinzXSh1Sg9WRo2oJa7xUELB5PFfv7JM9Dnu8azg8fV5GPPNj29UpZvEQVHN96",
  "key11": "2Zxg1LS2oo9miRo5gvYxTp5pjL96txnkh7ATsTwAvcQEEHKxSKfA1h4LWD3ZG5WnBM1UWksU16p2Sy5LhAGrERWT",
  "key12": "SCmdh2Zq4q5ruZS7kz6YUK71Yfr9RgSwSjrUZaGYQRAbsQvnGwsPepYZqksmU5fTmqtSpJMK9zdbUs6ZBDdnBSH",
  "key13": "229n4cJShg5Y5KHa4eXFL2onT7EzsQTB1QmzPLAhjrj1SEeojRujzTXufgVzBz7jtBPsfcXFpb1fBY4fyqWS9Wtk",
  "key14": "NSE9zxST4oVscoSqciktSdSaYFuZxX6J1GdKDMxoNDtcmpbbrfSxTbQGeTRs6pEB24EXgPBPcH6KPukxoZfTTqZ",
  "key15": "2pu8PSGtsqzQ8V2pap8Ajh6WcoFqPYcBjfUFNDwGNfZyBbahoQYVezHVYiJ5GVLZHAFru3ryTw2mzjvwkikXi3Ct",
  "key16": "3kcxFhUAWnP6MnPhRUPCr2Ug9k66fsiX1cM1G57FmrW3CBAgYBVoGMwdnrBUGMNNEfq7i6PqBeezq9DFADbyj674",
  "key17": "6obT3gqYJpqQkxYviwdUq5LKYkE4WGyJJnz2j9LMjqQZzTdKwqMJPU8ssYAHZ4ZkjUAgNGjvWtarrapmDdktEnt",
  "key18": "2nx8CkVvXwfQD13B8nqFkSDq6uqeLsToBx2nnPQgHGKWGccbb6AGGDpjyqv5GQ66emfEBWBvST3CtsB87mHZs71u",
  "key19": "UHYZ42SnJQobGjdp9USCca3PySVisB2wVzZ7dt57iPNTctVuyyKocYwAYagYcw8PUMHibuJGBtsk5Yuhk4HRtv3",
  "key20": "D9hFmHBaegRfqwQ1kwyskaBV97Cgs2ZNvSfcj8xC14tpaRvpUSGN2QuJUddRt9BBtL9FWPfJwVhxfQQ6kZb8odi",
  "key21": "4sfsqS2pTN7ryG1Xjj3jCNr6wdbVcJf3yPfZsYRJBMf4DwV7CtWBW4LAdgXwqXu2KY1EUaQXomjazt1vaoYJ9VqP",
  "key22": "4LdLF6u1qKSBTE3nGwLWw6T9q3zx2aUPCBBVcN66Pr6F7YQ7KRyjmeyvvCTjSW3XnhXxR2UZuVrAMhAFb12PYEmM",
  "key23": "4nP5NThBDW1YDeYDFM5HbnuHUA2W7VnmBrHKNL4BFiLgjPAK7DYgzVzS9x8DbBDuiXqGEBh9HmFRY6c1pQ9tCZTB",
  "key24": "MMsXuq7hJvewVRuKs2T19z18aKAkureyQEg7p9kfLzUsHX1ZmaXMKkwCqyqcz2eQ9LFr1AaRtbBZXGUr8FW4DGN",
  "key25": "628znK7wT4hgX98uPF1DQMDmzHjFhu2neviwrj6noF5GBQFe3k5YP8wzGZNDz43h8y5U4uNWTLH99J3ftW6BYPgV",
  "key26": "5idoPVJZNgDb9yN2iZxskCkTA48x8JGFnUpv5CKsmp9NGBPgDigSd9YQqgE9cvddcbym4VZM49LoiUREvPWFXFFQ",
  "key27": "27tQuhBZaUKfPo3155DggdEvjQCCMUJyFpMieH4Qt6PGnopnqnFB7pqkCKCnugMdjzsYoMqp2LGUdFMdXhQQJsxd",
  "key28": "2ZaC3VUm7UBwAE7iRGanvVjAEWsDeH3o1bGy8npGHtq8WXumME7kXqjiG2tFEgGT46t3nGbJuNYntJqkJAjaAYK8",
  "key29": "2T4TSzz7Go7WwdnrijMh9FD2AVkTDehM3tooLUhyBpXEBxK3qkNyEEcSwUpV8Nx5nnZ9q334UT2mqv83Y5wVeFgD",
  "key30": "2PUy3eEz2rTnnydqQN2eanHf7WvD92EGLfM2P57UDNuzygAZDW17bdZSt8UpBatRkPBCsWFk8zuQhkgvKuLYxWpz",
  "key31": "2zUzDJJ9rinqsv6X9RK39pWCHiGv2j4hFZe7KjzWaSN2Kw88Tjv2demuKSzwgXZde6MxKuQeYoZfzVsNmME1gyVS",
  "key32": "2ME6YfbUhHstSTgUQsqjFVmQpSgARsBozoLK7ipgfCk1y1hH5T1U2a1DU4gkY3t4zCVr1DYtcv6oxR4wWVe3wSp2",
  "key33": "1kYdYKpo39DAXG7NkoSAqB1BhHhacmCK9RrKKVoNHM2tGRESRHYUvovWm3Pn8vTEL8KEWvaadnXfiJ5LVeXU2Xi",
  "key34": "2sXo11o2sySBDqqXZLyu9JBtn4GqYugnBzLwj3E4J5wh5GoLXWAS2KzCeMSoVMcy7w9xpFrGc4GsDbsfhHwuv5Tx",
  "key35": "4bdf7jHGpbSYNkJmvmQaKD6ZgcDCLMnVVwJVG8TdbsQUztqZreHLivtWhymEHMbqoY39Enfxw45pnxekwc3jvmN7",
  "key36": "XFWTjdGofcK9W8K37LtPRmy9KS999XphyNamjBfTefmgMtGMApGHxLsBQLNNGnbcf8VQEkZMo7YvijsCJdwFR3J",
  "key37": "59J8H2YA33Dvop4DYXZKQpqRyugPeYw3t3FCkJp6sUbeMmanrdfzpcbm7VyWzJBLPTMb7e2VsKYJVp7pHMm88bYo",
  "key38": "5yZSro9irYfGbhjos1H1FzDUCyqS2XdgBGCxLR4oZNPqLcQDBKAs3TRrX4QTeFk6fXpCMZxU7Dego2hh5Y8Hvs7U",
  "key39": "64meCNSdK4y9SQmpe3dQdoBKHW4UhjmMHBawAfenL5nKLuUiRNGByzzxjMnjMPVLG5ThPimoA6NrAv53GGAu7KzL",
  "key40": "4RCKAUQJLNyXGWNS1jvKgMeZtXg3b3AxsaQ8gAjTTzF5SDvvbXbDd5iwNjhU6hPiHEvNsfLV8LVQHrt6Bpj9Gr58",
  "key41": "3M2tv7MW6JVrQY9wXW3P1uTaLvmhQTnaJRMhm7EX6pbsyDP24LaSVXPtvietqo47zDdooKpsfnJ48Rp8viXJUAb",
  "key42": "5jgXRvtyDyGhhviThR7dTv8ans8eHhcmQNcurd34ZW4BWt7NuzKXh7mMkZsX8jgHTzEEWpYXinVUjp96wAwFyCWP"
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
