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
    "2YaWNMNrtQxkqPKRBMbJxtUhMSCFPktNYPzShgrR7QWFhGA5KhuDtdhnVqyKHXdfq7XDXSaK3DiFNYdmRsFqFC59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25qxiTDX6XdHrc4aFp4TJW39BdBFofkKZvGVSDxLdGRydrDMTKrWT3KiM3cA7U6onES4bs7kvXnnztKaGfNH1YNB",
  "key1": "58KVYksSW43zCoKWZphiW8xjiPCHYH7VFLXCMjRYBRCqxStzpAgyiFWQweL825rZ6P6wLzVHVCCNUyupiTtfh2ru",
  "key2": "2mHxr913fepUXX5oMzWQNSUj2w7Ja6QjWdqsg3omXCh4u1M51DpDcXLvhT7QeGY86z8GCpaELAMkqLyZRzeYe2tr",
  "key3": "3ezYKDg1H3qoLpNpnoZU7UqukmbMm2aiYH9Jpyapd6iTzQnaSJrMQyWLF7u7peizZ6xU6NL6oZAEgRtcZRpxoarF",
  "key4": "2uhCwYkT88SFmtcvLEmzRXwwVjQxsP85pdwTUcUNicGM1ob1CWZxEEUwxJ461q6MQ8Trms8EBQJ58YpGohBYqaVw",
  "key5": "3N2jN8wJn8Nu5Mi6vTkf6A7i6im1cNjHUH8xvZpuKNg6t67ULbDDW2ogUpWFTC46g5hvsVzkfas9Mq2XeVF3P3JJ",
  "key6": "3LHsuVtbA9GZTDWDv7fFcniXrzFsKJHD46JiaB9Q5cYBt28RG33waGRqE8mvCU2sYtjZ23vgRhzsnZi2gnknR46P",
  "key7": "2GBMiKo5MvuLxkuq3dh258prgFgPJ4XfqvDicbRa7upxNuibAfeX75Sx78D7ZSQQzXEaxKuYdgDEQm8Jv9kF1KVM",
  "key8": "3GTqVQGm6WGq7Jkts3ePFMAofNhRYdivuy8KGQCrgDkgKtjqKZKPNsAKAgEGQ4ZfRLWEBmXEuwvePEoeaLdov2Eg",
  "key9": "jXhXKAy92hky2h35o5tGhPFJn3ejnpNC2PnjNaEfskKiedq65AgpALB7pneubkWsYviZDNLz119FvsNMgvE9UbB",
  "key10": "5V9tuxdX9bx2evkwxghfKfsry6zFXvjE1iJZ1cChcnRfui9wzqZLNeHScRp9PPPYku2oivuPeG4W9GVoba59WkXb",
  "key11": "3ZbPEEZGBFWV4e8Nkzs4obGUaGwjkkv48E9UJa9PP16DTRTbUJcvV6wz3wi1j59U8cFmx8EdshNwDfGfP8rf6G5z",
  "key12": "323qAiUsqpTQcLR64eFUizBAhm6VEeyEenD5XzMzeceLETkNSGsgBeZ5qsthAPm9g2bFY9khc5cxq9TqawHxAENS",
  "key13": "4WoLrhBusFbGJcw1m7gBPo8dQsh9nEkLkLeiR9cJZVJdv33wJTJmJAaidxPnLjofcE3hNqCa7DD5Jq5MAFsNp9SQ",
  "key14": "2Bhvayirm52ZiLJRk2JToj5ComsEAuy7nVQbJt8HcSKdTAmmqWJi2xXFUWwpJmExDhPZpEENgpvXZuXs4M9JUjDW",
  "key15": "4sf3UFXUWNWEQZ7Gtd1TdoEBNE2vupJ68ZARwvWjEELi37M8v7FrPRjVrvwtT8nJH7ykjmCj2hUDnL5pfGcnvkxn",
  "key16": "4vmzYpSkfdkGhW6V8YjLEQVtSAxNR3a4JBn2EJhqgcKuPsL4G4u3e8KoURfxqzkiTky4ntD5PVhu11cMQz12p3jU",
  "key17": "B2Zbie6WxdUegYKndczVjA4gXPywK3oqQhQih4JfSTt6cDcbqE3MgN3YrFu9HSbDEp2VGJJ1MAmCHiG8g7zDP5z",
  "key18": "4i3p4KjuRQjkVXYaEojc5SL7Q8tapQjfvLyGUWhoYGs36JdXHg7ud1S1tLrhUT1Qk4UQkaScGk21xUucyVg58Vxx",
  "key19": "2qFAUTVzSTzfnWvtiK1g2T3QVdq1UP4sxcGQp9RJHCuGXdvDYfoDf1VpbmtTJ2Bbppnrk3SgLxQz4bPSG2Tioyi6",
  "key20": "4B1bRZEszUNWByUqjVJzye3tQUtByRzpq2C4gsGbr9AU8hV8CKP2tYP5PQYedTAyQGg9mkrRktz5GMe9iWKwXme8",
  "key21": "4Mfr66H6ePBcHwfdTV1pA5qDxQQyq7pTkq3bwt7QnnxMW8mMkn3WtVhjgunWj4qzMxgCaVENncJpXtKNGEdQQcxP",
  "key22": "2CVBGNmS1fhK37bmNf49qLjoThmkZuJnoPwAZYqkvsZFsUQD6whkWurHDQ31whqgeCEKGTnc567w8Zro4vTRAKDX",
  "key23": "3FBRgdvDGsurRfQt9YWNxQsXidQnNefqv75YkRSmcbpRmQ2g62DzAwLJkdHBnBnRZV16b75fwvbXURB8JuAeRewE",
  "key24": "dkEiJpPTHZsdFcDC5Lc73q2WUWEQhJd3sfxvzfMtLv8jn87zYWHMJwYJTU2nJmodZ14PWfKS7Mmd17DjeDKg598",
  "key25": "JhP7nvoRfFe2bJuj7hM4X7CWfbFu9MCnuWGYgQ95WadSaXCjD8QFMUxh8rhaVf7EgYkPzbJL3NqvwCzt7Aa7qpN",
  "key26": "65FR1cFrC7HuGwFrrtLBcCgEwxragrAf7qdt1fv7XtCoh4sEMAGr6i9tFnRyxfaAV8xsqAM95p4j3DhBBmM3NtAg",
  "key27": "4RY1NThYHv2goULGrEaWZkeqAiRC5izWzfWR9xx84AxFUrAzBEm3wshvquY5UiAXaV8ABSkkA8j3Shx1vWFLu5iV",
  "key28": "5XcJ8i3AyvwZRd7Y9Ef17qLCG43dnPWzXHxsCSN5H7t2F5ud5zmbo6SXeFFsCfGgQgzQQUmnd49UaCx2v1X75849",
  "key29": "5yW7WnS8hM9sTar4cJ8pYFbyMc89z7G8oyv1uwsDJg8wim9DBbrWqQxji9wDn2bxvNVyBuPf4Czt9JBJ7KGRd2Hk",
  "key30": "33zkLCdnPZRbKrfpwggvpQdcvLtorTHbMKoMVDJ4UmMLTbcLMBUQNs5W6SgE4GhTyyU2kecvnXBFwBS52y8wy3ui"
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
