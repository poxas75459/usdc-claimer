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
    "22atcYMp531HhBdrry9H5ZjgokA2TGya68n2aMTdxsei3My7z2fkkUze8F8VrdHdNSLQC9gzXDQDi7Ce5pWZPeis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z3bMxGNdWTAjELLr5NFmpzJcKA4DwtwRAacEXCK1Ubx8TxgYttP3QTM4Q98azr68cDw2cgJHznyuAtz9UkXHYW6",
  "key1": "35uSN3288w9taBwfXZjhZJDBYrZ1FmXijLKUR7vSsvCWMmtVwLo4hvxYQ3CyuX9Kqoufr2CFGk4HQpFEWh3T3Sjb",
  "key2": "ip5YYPBZD7ocmPdfU8ycrQLNFkV4q4hhFFdMH92nCMmfpcFqxnC3DSeKeqxiWNaaFkhpbZxA9SVm9iEJyQMBkm4",
  "key3": "5mZJ7sBPYeGmRtyEB3hmBMvPNEazNXfWb7vNTzTJWEQo58gVbaqyskGgDaEtbu2vCAPmbVES9K7iYSv6iQ2ANbp3",
  "key4": "5o1VQQ5Ri5vfDm3fJkUiDPcZDNScDvPTbQkqqDopNu97AXd6L8GPHBswxphGNggda8JPVvmHBhYf6yd8T62Hk71u",
  "key5": "2fAK2VW6fRmgmNoxBoH299LQapESizp9gaJraxdJ6RjWiKhKi9Ki2VLmzZidpz8Fh165yrFsLH4ycFLzBYgziqS2",
  "key6": "4wq7S8WEW9gAi4Z3wzsnPQKpPyxTmUR1D6Zru5M6Mgr3zczvVHsFx8qMBvQVPbseRkypGom4yBL89QG4jyLkRxNx",
  "key7": "4S6Kj4ZpBxT71vweQh2C5zcVeCNUroj48QufGcFgX5c1vWKLrR76J3h4b2NUjFzJ53zrCPSBpDhpk4cJYJy9AKqQ",
  "key8": "5j6yUp6JvRfH4UbXzuJtyT6mFn4yFxMZNwkspf9keUXGxc35VaS1JFL5TK3KdQz2DjmR52BWZGozcopqPNZJnCyz",
  "key9": "31JK7QxHufcRwRPx6YASBGvUo8Q2BhNrQUJ86ozptwMkBaZ5z3crhnnTqvuevV1QcRhbstqfD4Tyc2dBpVdNojUs",
  "key10": "JtYij5Wtki3kbLuwyEf7mTVm546isDCAu3EiDsYhiirEQBsUJuRpVoSLnrbBDnpfaxABepvNUNCKeWDt4gKfYFy",
  "key11": "A4qLYkCk9YRkw77G61JZ2jhGsGkmyRXYr8hEBVq4gDqf7w8nJxMiFsKusi44cvzWFp3NE11iHCEiZh479NDcJxG",
  "key12": "ARmGEwnd2dcqRw5LmfDe6jQvpVHGbvcja3MGTZmd8hRvPZuhJ1tau9uRxea2khRadahgpThYD5cauwuNdN8v968",
  "key13": "5egZ9p5uWiRhjMC7X6jjrpZUSRNCFPdjQFhzS5BuQKgWk5AHFw7svi4eSFzmEDsfQTU7cPhVqF27D3mMt4s3vfMt",
  "key14": "2NGLrezP3U1RWFh9WCLNtNYPdP7c4p1z6iNq6Cg8NfXw9aAyutRJhgkWZZ3TtUcSJsTA3BirjBV6n2E2sue2CPTX",
  "key15": "3otJRWjJYJrjmYRTG72zL3Hfd7bkiFPmfBDaGv5EQ4MvSbguAPhYRE64WAt1U2gC3KxzZD8wgSyYXEpw1kDf6HT2",
  "key16": "49CWpJ9iC29cmsKuEtU2QbxecnBbvDibqpaj3JEsfpSaxkJB5sa1fYYm9rURpMVNqkfzvDvrAQt1joqQBvZw8wC2",
  "key17": "3jE4Mr6jMNE8cdViB4a58oLx6xWsXKZm4jCJjMs8ptJUTXvoLzxqmWNq11XrGKpbVNGK7UzCaayxoRomk55ZrUe",
  "key18": "HKZUJPVzDzGzt3QzUGYdS5A8VRNZVZJLQPjmDgLYLWQZJ5cfQf1waGKiFwHXfs1qJqBQ1wTToWkoVpCgZrBuJ56",
  "key19": "4RrbQL5ivFt1sHPeNcdxirDErcmuFyjPyD1MqQDqzEcrQ6ocDqZp4euiRDsFnzcjCXteXasuritahq73QYDWhzwY",
  "key20": "122cHEAycsCj5HnR2RmhAbC9kh9bhmPyeYVcpmb9WjA9EDJ3bn8p3nBrqY527LH1gttBppUrnZ25WrhQjRNpmywi",
  "key21": "3w119csiSMSFXKRhdpefqqDeudJMheicWri1d24VaAk6k7zPKFyKerLvCL5dSaa6rexw2NaE2rCDRpqDkCV8WZyD",
  "key22": "4n4aTs3GBSFGWmjoJeGBLHrW8Ux7VtWoaKUMQLfb8q9FTSNHaZmVD6Cn5rPiXVXRfyxkXfetRinUC5NW3JKhT1Yy",
  "key23": "657EeLhZvL6onrLcbS5JLp5bbmWNspgz91Hfr4ZLL4rJakQ46Jw7Nkodhew4GWRa2DPorAktXNEJuBHbQVCCAt5m",
  "key24": "2kSvYsuzD7AgGVtemxjW4nwHmbDxVoi5yMuAhq7rd5nHnAPVWJZt2As2j6pYAFns5BQdVsZQkr4CJqMuZfAxtYzf",
  "key25": "4WrzWc1RJVKpGV5DZ2EBTbX6wmm8PT5wWfJys4sDDrPQyLEzKsGEfbBbEgFy4ahPYxpdZkWvoAWBoZg8z8pcTYYv",
  "key26": "5j7jinMbCBPHsWS2ymD8AUxnXpr8WArwtvS123RDafm35yCoVjsQmrGyzWbSTSLoJnziKk5JvdwQQ4bLK2YP4Mtz",
  "key27": "2VBpn5QRgfKkaUAPycjJHXYmMMbemhTNRyDRJN7UJaTLzV3yYcnizsXibrkc3R3abx1Z6j3Hf8LeWqg2hi7c5PSS",
  "key28": "4MdcD4krCaZjM35ZpMAJ2SM6SB8GDnCKJyD7E1fM3z6vAzgHAigLTeubXyZbeDurDomwKew6Wycd9K11ryTM82i6",
  "key29": "4jpfGMyHYq2iEJp453PASjDLjvpPGWWS6uXx3kSpwUNCj2YZHUSepxyuz8eViEsyhgW8B3pnB2pPuk52GQBjAJtW",
  "key30": "3bGQgKpP2fMSD1PaYPWd6VCX2G8BT65KR4E3szFg74AnAtxd61BjZeGDfxEUcZMceHF6GfVmdbFgNkBnihQB7TSB",
  "key31": "5W2kLJ1JRmN7WbKyahL19k6eEQjpZh5Qsn3MG4cFnsjdB5CADoKhBKusJJbBdvGfa3WFaqYhXh2brRvYVhSnDjMb",
  "key32": "zkjC6pXr2LWPg54rmSWzNXGSfx7eSbWVbrpw7YsSfXqHBcDFSoYUPEMFt6FAcbaXBMJsVHwcUJqbWeBwD8c4ohM",
  "key33": "48TyBEgmjdg4Fg4DZjqDTf1eSpZ4Ee3qkxuoEHvCGRVEsqTwRsgFjEJaMuhh9TCoiuLVocQ6fi1P9QBk6iNYyGQg",
  "key34": "4KDKSaz1Ry4zDNcN1GMLoMBoAGdQW2SmQXaWKWvwmNCziXw4HBWiqTYZaVtf1Q16TpnSQYyEx36AF8oaUUcHLfEu",
  "key35": "3Jrwsqtvn42ewH45bUFovpAZiuL28AeBBE8xGVQeUu83Y3RBXTGsHyUQq1ZxXpAykiqnDA6boXmF6pPYisD6Rjgd"
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
