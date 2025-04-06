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
    "4fPdcx9oh7XQThmKe5yxGdWx3vuZtfyfVjjpztLDtttbvxrckiMkB4ZrF7Ttg4Ju8qCERYZJYNgxwdsJdZJdWirr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jD8QZLAmzi1dveX77LwMJKC9q3yvQKcdmG2dvM7HbBaPM7QJ2JUKhQ3K3uViXNKKo7TwTq2LvsiAKqbrAuSyZr3",
  "key1": "467tvcxieiYhBn6Gq8DugoDBMtYoCdgW2wUF13JQ22ByLymSjdRALVu5cCT4ZgBoiaoLzP3XXVaYZYv9Hob8BCW3",
  "key2": "2nUifA1UVcF6VkExvjBL9iMge5juMMWEgPbm8EdKmwdzNZHpMsgGSnEjwEmwWqoRsD9CqLsFz6VDLA4ZAMPsMekV",
  "key3": "2fK36qTgrSsMy9FfihZiuRCFUKgcPh4AStCZPEqK7SWG3GAjQnWxNNKEw6vphU6tC8JUU3ukNEbH1e6bbnhmGwo1",
  "key4": "sn7chdnbVYuVJTNEYm5TqVMadqHVdfXD8axuvHWpfHhCgBtDiGuB6rg7jEZgv5Vi7ReH4U6HNZKEWRk75hKTqxa",
  "key5": "56CYUFZo6kduMqv8JHUp41yvAST4aDuz4149MU9GbbNDiLdaiEPMz6KJs79i4M87dfFqP68CAFhFqf7jA49KPEpy",
  "key6": "4yQFaGi1p7XNh7GdsA3ZV8qks4NZyrKEFGkrpRHnZseqfE2upTqhXM3c3h6xbMGBxGYvunwqGSzuHKZHp8EDSdkC",
  "key7": "4sAdEwGkzPZrM4CYS9MuwUbL9ZyxjhCB5ja63d3rU3N3Cc3h7CDYRfmfmXeSVnsUm28uNyhFuH4TcPcnZke9TeHX",
  "key8": "3kbBaKRyg6qWef61NEtJQ3Y21j7jWhqxzpJPoTPxtQi6dRNQrvri2ct7ym6Fq6GjzeeQREJhXhn8gT5U4W21xSaY",
  "key9": "ePEVrJKk4g3FLVh78h5gDnNCNnZgyaGVB4MDZuDbS6pXTRpeY9NX36XASvymbH7k3cUsCi8xDwdLYTEYvwiAU9b",
  "key10": "2noeLqVg4NaGqX43xE1oxRaa5BNjrz2og8dN1jkujwLRj6Le74xGxXe8kq5Y882vUnCwZ4Usn2pdfSwgNuh6ruSZ",
  "key11": "43483di9KYSxjRhSK9T3etUejAEHYN9cUByeGY2FfVo9z7HHn3MvDctkQMC9nKxbAoceZyHdERjfr86AkYWgNvux",
  "key12": "3J4zmukjRvvm6XNi7QRJrtghGr7Fi2u59jZkHXMXybb1an8M3CDBt98YdxdWhiqXyJZ3vD3yz7RERDaL4AFf3ykx",
  "key13": "4hpAt9eaKoK5zoRLnA4dbgyFQbbgqpvRn42nmUxAarKhvmBNozJj35YodoSyPgoPbdzhcHLycX6EQDrKD8fLVc1A",
  "key14": "4tvwieEUHkLBtnniBE1c9FdETegm7HHb72nKvPLdwtJU43E6uiR77N8nr8RNstinNv5wW3kw5US5ZCSYp2funrDB",
  "key15": "5szLNfSK641bdkXN6NT8tJfwRt1kZHDRNhoDireJJmoNTCh1RmvarzcaecHULjgfYxWjhjiXPZ33uTkcbCAJ5SVr",
  "key16": "3FDg8uedgouiNCwqwooPocDz3Kfc3cqSrWj9zFkW3ygwBJ9s6KQMbW8WDLCd3eg3tJmSempVEQp5CDF71MAqhetA",
  "key17": "yD2qctt9NZBgy8seZ6o6pYVX6gM8efqmt8ygwEe1acJdM5yMYy6imYry87Mz3ozt4rcnopvaVYeUEH3RQ9pzazG",
  "key18": "3kVBH8HkAaMz6zaevYdpTNwiGyDoBsL4Le1LmTaQrGWLiZ3jmSAz2F7hnhwJUqTdZ9t2B3Ueyvh254s4htm1KZn9",
  "key19": "2qvxuk6SgCVcNU4VmCSspAu17ki76VCjtAdmYR8Fvf8DvrQvRnNESHnTBC93wrw7zTKmw5o8WT1PjHSSLTfP1vfy",
  "key20": "2QrzEVHBbszF1Amxt8LA4aMdanRT9QTNAsTXxNSzMoWzPD5HjTFAhRNfcMKF511ChrbZKzDPKFdZ5M8mBFsRRhGV",
  "key21": "3j9M6dwxEuKxVYXQvU9kkzdYsXvqGKgrQANzJ4HQ6xsmdR1BzpjRwYFMQXqzHertZKkvWGwv3erDrUfEZJT4pokW",
  "key22": "4uThKqVWQJUEkDMfXZ7BbReuWS1mYAk11mZbwHCdykKeMjjCmTpHEkjeU5AqU5hvqCP6Hp34JAKjxNgDnbxNRkQr",
  "key23": "QfjLkfnbekxZG79q5oHjxVaPQxf6z6SiahELRghiatMEqnJqVQHQsPwnBNgCBzkgYkZuCGeK2zPgrxw9q9N4i6F",
  "key24": "3kypyzdfKtN2tWibPRXkmv435pUbkWHjkZw1a4AAezrHN1kwkVfZoEwYMs6Z8iSsbboUELmtkYpCMNHRPUXGnWuT"
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
