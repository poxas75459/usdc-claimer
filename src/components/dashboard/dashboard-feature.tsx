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
    "WkvvnLQWT2gwsLmTikJZr4qefktF6852Gp5HU4RE6JT2wgYkUiZVtKTmnVicbK8PdENNpyyroUXmYTCnXhmYT31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n8iErVo4nBBUr5AjyeBrGgkBwQQD8CvdNnPNjtGBUFZxsR8BG8LuDE9YwAPHVHTDhJEYV1N1MUna7cTahSUCyYN",
  "key1": "3bmWceir6dZfNdiSQMNiBG46mWiY82PvrQvB3vyeKCmYT8tDjJxtxNPYJYN4sp2Afxf8CHKxqnZkfD1uvdVHh6eE",
  "key2": "456CXBT8dG2zKf8xBPArQsg2UHM4cs3JS87zdKcFFx2315NUtvJLm94Q3tKBCH94LpUTzWwhJnknSvGkTLmGFYRT",
  "key3": "hGbjHS715UqLbgSKSNqipbPCkdm8RVie7b2j62eFBYgY4sv5RpyQYKbex3WXL2HNaiGAkh31v6RT6mqK8rVXGGx",
  "key4": "2Mob8MfUeqW9Kr7LN1PdsRQ6ex2pLaPNLm3jA1WGTTHzD8RoC7KB1obLQBS6z5ybCbgN1pzKy3X6bkGBxhVvqRcS",
  "key5": "2sqhPLHdbqtwMPLtJSrxCkvY9KT914g1cgN9pekLcoAjY24AxxErbWzm9AP6kVfdotH1B8m9GnwTkyLMJQootUKC",
  "key6": "4vnhdwKboG75XkeoMrDPpybFZfD54UMpKuUyijRLMYUWWX8boKKpiy7jZJRGH34gUNCErLqKhesgsQgj41mc2boi",
  "key7": "59Kx6jPq2hPyRuHMjyMtZUGjWbXriCkN3M2sr6CBofKwLH5EdUKjb7s8tMumvkCjJVJPKPVmzrS6YyVGy17xmM7A",
  "key8": "5Lsf1neaSKxqZmBZhs9DVg5Vhq3LgSQuFSyW1n963Dupnb4p34Ndfvi3WY4AJhbtxAt3LqCCNqBLmPJcreGrrsqr",
  "key9": "3qeqZ61LDxhJctGyoXQQokP49HLkiyaKXNGeD87T26eNXaspcM4gDHSxT7wdrgPv7YAgDk2Px7FJPT3zcGPvZmjF",
  "key10": "3eiJdqNfQrsSgbzCEQijp9uivjZotxQ1kTgUknsF68Qvkk1hnCSEJCJJQXD9UTS1gN8ZCdLP5nEAHH989FKEVamd",
  "key11": "5T3zAbahkUWhEFiUUuQj795QqoTw3zN67frxVbwahsRitkh9PqYaxWW3tFipLUddFzv7PMw7Z27XEkNDodcwuD27",
  "key12": "3oVCc6DQ7x9yN99ky7YzMitsFXqfPHYEpLMNotQB6Bp5QtfM47HdKNfQJhPDWErnSXXbDSbWaGXyGXVmDMsM7umu",
  "key13": "RBU5hLRXnGMiEsg8YPgTm5K8S9Sp6K8sQZR7xVT91UHpyn4fLYdXx2kAeBU8D1ZWBMJ9Z6nAg673mYMG1RjQmTH",
  "key14": "5igx8gFWNuagfLo4fCHiVePvRvHFBYhB9WBxCTnwuvni3v5ZfFevot64jW24dZy5V85eY5ResyTxUBc7kPDZzb3",
  "key15": "odQhFSnsLa1WE3RjJ5DqMzsqNeVeXMNitdng5MHpNdaN7EaPTn23uzKhRzZtk4SKDKe1SNecfo3QjqjbJG1HGXR",
  "key16": "36cL2t3xuatqfhd59kFQTA1iDUirAaeUqU4C6LpLdxmxWJbinNZdi5YbhVSYEWRFWSkjRi5vCZuhiKS9yZ5hMX9j",
  "key17": "2BxHUE56PmpfFvw9PoN2igmjAvhpyyWBSvcSrAPYjYdkiSrT85Cv2PjhPVXjySeP28NQioJ9GkzWeEu2LrTuWtYh",
  "key18": "sJR52FpoyEMzSSSd7Zo2DzZmzTLBV7ui4Df4bw8ZvM38bz2HM3dJEURSKTq1cb6p3Fq14h4LnZoPaobHAYCvhU1",
  "key19": "3XfDsrsB4YgFb3fMPeR5Z7ymdmSF6HjGNp6Vtu3xdNn2seGpLSfUw8aLfTymQTjYLHPyEAXMShm6LgVJimzyuRdD",
  "key20": "3Sqbhd1x6jqweHfc8zFwQEz2CbDRXq3B3AuShDAB5nonfapzv9ppmvexKUXudWBuCmiBBiFgJux2RR9F7qdBRTEd",
  "key21": "4NnbbaBej5Y4AkMqRM2TN9jQZTgELvzwKNpedM4cdgWGG6aSQh3tK1dHnMDzTdktGN41JN1jEkydLTKM7nrdB2ht",
  "key22": "3d76CndwXwkN41Fw85sKD6U8DoMAJnRvjBUg81ggAV1MbkJMw1gEBS6HSZ48P2zswSNWnQeqzHeNDKm4bCmRoWa3",
  "key23": "5xFTtLZ74nGo7rJQ9g8UCihhTxUGDmwhuuKa7K8DwpoRwhn1vTJvn1i7YVJhn1sSM6NpSc3qRvof4SzHB6kG2Lp8",
  "key24": "5gjK5N5JfbVkrT77qDe1QNj1N68CzJrYtgcpowmoaCSLzrFfi4RaWRtLFEjyc35QpchzZxYF5LMpPhjsGw8EVUoB",
  "key25": "x97TRs4tX34Kf1yNxtypsA4rbS9voX3KbidE8FmMSV5yWx674vQpmV8j4hLewpNuBZ7VbZajJhYrEieMEFwZWat",
  "key26": "7ePy9x8WNKJApFPAmPgqgngUemC8yFE1v3K5kxzpeGAJFdpnhH5v85kniMbwViQJGXc8MKHhT8YR5MvkMs71RD4",
  "key27": "24EDeQ4UTB4AKxKg9Gap76JMvq25ELEJPih4v67cKPMQVwzEas44iWjPtbCkFSL7PkB7uZSc8FUYVf1JYbMjcNa3",
  "key28": "5MxJFjE4C5kWsMTna9GcwsnCz5aNzjeXQopZkMh4FPkYf482zWuU4RaDcWhBfugjTP6T7peaEUbq5Zoa67MJcSSm",
  "key29": "2AYo6Lb7SeaGprvr9qcuzAwCpnpicXWCjBWmaTt7beq8JtsKdkVa51ogkTVFTC2XLoi6zmEoZkVjR83u1GiL6bcD",
  "key30": "2kkd5VZaismeTi2rhDiZxfqoBtztb9wGebaNDkhMt9jUKy8S3k5FLTToyWikjR3HCA3ccS69fEDA4CMXMGd8ySeR",
  "key31": "CVcyKQtShAUivVMowDaC8UEc2QDDHtfGfuMbJFYreGe3bfZVisznJuzrUUeuxpTi6wrvL3UpRjtJud3MFwKy5mk",
  "key32": "2mjiKPdZYkqTH6QFb6L4KS2chfHVbcULvKgvyeoEQpF7vtGjCDNeBvnQHVDV4SczAR1XuBQqaQVztKQdF7tQEtNs",
  "key33": "4cEJVBA4JHLkXFUQWoUU3QJv9WuLmouNpAxEj6ATMLM3uc6YvPdNVNHFQX1JbtcirDhA8SatDmFpqzmSr6xUXqyX",
  "key34": "5zbpZKQNoaAGF75XozxPZwPhzKYG9uoW34YZus5BEbwYAcnYWzWLXr3RQNJzqFpYrNwCS97oeVdexW4cPipReTHL",
  "key35": "46d4TCg8zU3Jk6SMLp8uJUAJMJuVDeF62nxexb741RU95ZcwSKHmZNY8i9H1bNc48VLoLG8bYeq7gfDWakwk3WBC"
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
