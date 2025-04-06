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
    "5xT2YCsNj6kQvfyMZe14rYg4jhs6X8ErpyZSX2bzasi8Nxuui1EQZA28nMSqCbpGQsnfsMQp1qiR4b3vDH5FEQ8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TVxMvM2it24pD3YN8NQcp1z3N8sBQ7y6RdpiaLCk5sTREjr5AHMSqpHtb8dAGu5qSp7GY6Fvq5jdwB2YaJwKYRn",
  "key1": "3AvsQX9yucgRpdbYknnXLujG1GRL3g8cSkCBpt2EWeAPGgX4izgnHQWMeMUzVQeTHFwsw8Wddp8FyETxi4FwdNFK",
  "key2": "31upenqqUTxCia7KfgJLsbH92NwzziLLKuwo149E8JsvvTd5kxZ1NAXBnysxsw8391FKf9s15KiYXGb7weAAWFez",
  "key3": "3mEaraNUpgTLYCxv1UK7NqTE3gtaMHJFnxKwTnMfZf5TUHTgdwhN2e2niNyx6fUDEQHh2Dczr8XxRPfsxagqtSW",
  "key4": "5G653BuprcdyDJE1dzJRQVn1BnU5YMiYTFts6TTLRFDsSGDJDQP3ucfeenYUHRxhg7SEDcctt8EnQzZgbcH1KkWi",
  "key5": "4qsprVcJNUeFCB4CkZfvzB7TGCsG59KVnwoxuEhfKmbTKEP7uRznsY1WJq9htZBNJfm8obS6xT21oSjegcLusVQo",
  "key6": "4RGPw493A7YZmAvjdkQEFRwPrSbtW5eZVbuerBmqU9i7YL4G5TxyY91QdBS5giUUpRUJ8tMEGSbpvP1P12rFMuHx",
  "key7": "B8V3iMJsg1mhbBJH32EzYcaojpbrdJeN15pE2QzetQ5gjs3yJ2nxzvBjFdBJTsSSgPeMd4SyXiW6fJ8wCaiHw4f",
  "key8": "5akWtJDzAuUrrtPzDJ36AYBdi4XUNCvEk1qQ2LHBk2xC167JgdsRebTK4rHzBvGeckiTwcLkBvVXYFcDeuX6JmZ",
  "key9": "4iwRsnM7dpweu8geegmdna9UQ9S9jUHu15jdBXnfKY6TXM1CKEHvmZTxe9ub2FBGxt1q1npYVEfwmMN4ENgrHmes",
  "key10": "5FMa7Be7mKAsyXQ2cUvtobEvXagS6cc5PEnZDtZHjzXyGDH4VgxCtienaNio4HBb6dM1aoPPRsBMDQJFPeD3MmYY",
  "key11": "3XSEiVxPKCsTGTEpX87iCktLQfavRtmtDJH7NUJ4AWbFanPoNBb8TzN4gEnEjjFi5tSBoiy59RGqgZUyiZYsiBAK",
  "key12": "3tEfcj2eNbAZ45T3vErcpknct1rGwh94yn92iinZz7vifMebEyqz3biFncHV4KFMyuP3c1fCH3UqMGdxTeLrggmV",
  "key13": "5TJTxtBgH1am85FXHUPW8KuCNc1itQMV7514NzZFWvRtmW3z9WbTHTnHwJxNDJCM4xQ2bTR6BUBZu1jdrNezPEL6",
  "key14": "542WwAa4mV1jzbbzkARCyLZCTiX3XRtyFi4mLcex2oNaYpnY6AefQnLEp1D3TxLQDpDJU5Td7STS6mzTgTdCRL2z",
  "key15": "2mCCD9yeZMx1Bm4Y2cKKHhM6XDKdfCkBmqfVCHGxwy8f3hcvjcCFN7Pj5V1EwZGwurde2UQTp9ieSnupHNZinzSn",
  "key16": "2zUZrdcWcMTXVgz1Ggkc9vnEshnDd6R38gSvPJkwF2Gbqwbr7gbfzLHq61YiaGxe83fZeEt6bfqz2CKvuqcnvDjo",
  "key17": "5rq5dMH7XwWKSFd3ozUBfq19brkFdDXVAenaHFjZWgho1vGo4NWAjHYQF8vfRSLaF6qmf1EMKbaFsLCeWqjxXppn",
  "key18": "4VHtpLosk9ZjxCaFNpDKy3RSUhfQ3U1fgyEmxJTsBtwipzq4k5MygevUH9HLpoZyaXZmHX14diGUjyEbMtMUAaLg",
  "key19": "44aP36zueQyabkjtUvEedrUefT2Z5KcmQCkbcES2dXDJ9qSoWwvjJkdx3UU6hgdKZUaEqVu45uFZJzL9oxpMKQFn",
  "key20": "3o9fDPVgRnmMY4EfYGTiTKwNewPQ3xwQYGUGuZ27GbMz6LXQCcbYzVxSDgw1TMYafCPYtzpKS5VMwr19VVKi5Cv3",
  "key21": "2wCxUs5UhKCv5iXn9NtwWW3E36PMzNH2T71HCPzW6Vzuy5kvhHihPBChB1EEahdBuiSem2oCaJ9L9L7btCcBBWRa",
  "key22": "4z2GiNez9ZuyUvKxmn8zpZ5Vtr4jV5e5ePnWoh3QivrxhrUA6Li7F54f7WGJodytmy9qGkThritrhQnTQzF4MTmB",
  "key23": "4TCLjgHwaBsDLYbzsCkzGzuFositKgqT4e4PfgSTpkXgJaNMykRPJ471xjS5mwayRydRs1ZrhUwDGqUpHRpLTe1Q",
  "key24": "4WJRBKxKpuSPT3jwDJypT32XFzRPw6J928gZrAwU92pSwGnnm31fbi5bkWsrDWm8Rk414LtUEWjhyXGQcfyBNkdE",
  "key25": "rWpgjFnXERRNgmFzvPJnp43ahH2W8x4xUyoSdGngriWzsrskER1wdMmr5RTii9HpXKHH2tcM3AE7TJYdomYACdd",
  "key26": "5Vd6VTXJBsnyVtawCtDkmpec73dr7RscDePDzQ71xxQthc74jJX7W2WvXA7b3TBebQe7NJUcB14N4zP8heZZ65C1",
  "key27": "22dpEix5r2wWDifyVNyJQSXNejXfLzx3YASfjpBANnPdX7cyofj9Wh864L5LC6xEdw3sWJ9HeFdL3ohUXg5TevQE",
  "key28": "4pbmMSopPpAxC4f1Y8VCAMNZstjUxq7EB5gRkMWoWeCABPg7cDNiUVm7vpA2uYnStNFgKJ11x8RqFvLJhP1sc85k",
  "key29": "4bkMA2RGQn4qeYZNM7HgFnoUaD8xzLKoXts5rYKvbxstU3nazRTReEij3sQFdBArEnsXBY4tvEbbkJF6pp8pfpqE",
  "key30": "5L9ryeDyxXuWWM18F8ynB7QnHxF7411Zt4uo9jsrDXKpqh3Gwc1ehK9KNuUMYT8QZwA259KYSf9Z6BMbo9gP3iDe",
  "key31": "VYqNZauVkf9zK3VSH7gzUTZKRKRgjKBTtK4xmXHJKoitRNr1DmjUFa9jWnaF55gBckY8e5CNnzfRWyrn95DXAof",
  "key32": "XKpRR2P7PN7BTDbK1EXiB7JJLpnwKtk62UAJpveLywFkCtdgY6at4Pf45QckX9wfTyQC8cJFdbk7kwqyjSEiyvd",
  "key33": "4WHpyTWMjXUbZfX3HvbZB9b5Rbk4a1awVrnE3KQfnxjTsrtAuZUDDToUfVxRSGgnXJHjqnERcH8Xstayt41yeGEq",
  "key34": "2j9gEwJbD446M5KbgXS8o65gyWSSuh29xBkudq65yd19DENZyUKAZTR2NErCUhsriEHc9onwz5a182XimV5hejWX",
  "key35": "49Ta4ndDQ8hdJkuoDDMEewoo14gm4qt71WHHpmTAnKzoxreFpmmWDcsJeBx3v44M4smKyqSrsDMP5RDRJAsvrRAw"
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
