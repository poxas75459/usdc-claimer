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
    "3eJaaCJ72jDrfUgJjASthfKGq85Lsc6YWc6hA525RgeYEouWsYTYg9ycDDSaMhwLZG9GXc4pNW5BoRhA3Pkiyyfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54gXhw4PhA4z4iP241C58GGBqig2esFkiCXGAT9zK5P9dTMr829PsBb11MpSYeVun4BoQofQSeq3WkRzjdbntvNQ",
  "key1": "5uhSZmxLSXvNS92T8EJACycXmSG3AmXMeRGpDRuxrg8TsBjBfeXr1Wah3w5BrQNk7syxdZMYiZsA51iF1x9fv8jX",
  "key2": "4P6p1wz2dPKDjQXSMA7dJe9aj7y2zYZDaV98L66QEPJnRCo7w2WcUQt5qqej6tM8BjseGQspNZ1yCELDf6UgUpns",
  "key3": "1XwAN4NXpmD7Rur1AWSms8qYwKvdUR95ZFGANgJhRYsLtRqnrPY3KLRVbRNVHojrt2zEPJAenSoHNCfSNngKrAY",
  "key4": "2tKKoY8eEuX5NPPQsWpQ6HTvmDNWqwB6ALWdhFowkzxr2cgSdXcXqiTD1mBab6a3sPqCseKHWZfQxp4mtFKE3L91",
  "key5": "3EyKzEQVefxojBqkHdTSWHMLmgcPdKqqnWNVP8FSdDcdLBVg6KqyW1oVQdXmvw2uFVBhKBUYhDVoRntZ5MmewkHe",
  "key6": "3tD9ryMyZoQ2bPSwCQVcer8FnAGtSia3iGCuYC9yis7pYFQB7Qwt35VBDdb1FPHobiV19LWGuptaAaJNeuL2rhpi",
  "key7": "5moTwteQdHirnXBvnBM49zJwJxD6sWwjo2vDySR2tRVHgkXHnGf6tMtYgVvXENYAAoz8QYLkb3c5jAjPYLJf3KmG",
  "key8": "4ryydua84TxF8u2UPrHsi1m1qSCf6nt7ZyMUQDoMwDJDk18YdQKg8xt9y8iATFm4gx7mv4zz23Nkm5GvbwYd8Wys",
  "key9": "5N2qfzsbr5QGUchGWWvCV8HFhMyBkaNr4CZdpgdZLMYZvNEZ3sbDZDHKf8KSniwxVZSnjk6Ju3N3RF64zFarhK9p",
  "key10": "4KdfB69JAEP8G8Ju3SmvDe9ssC2YVsYWeoihWGft1iQQhj15zgVCtKJVPFzAcHyRhEmEjR8j1kwNAXL8JKVTkubx",
  "key11": "2kT8TnhwEqREQbyArQc6BdDW9SFnbs5R2HH2rULuvea64G1dhfRDdULTahuBEbftQWZ63SH7pg1NVvFWNpJSvS47",
  "key12": "CfNAoYaxdVGRq9Rs5gra2v4bmD7nTsVkrSAQ4C52T6Q2kDKujVFDi8xLGe63X6sowALHmeBhjsD58aPGVBqge5h",
  "key13": "6674Ttt1AbxZJbB8qUzgj6GcAxfGhHR8RGb5j1xyx8deWevcwee5RLt8bUAmn61hy5mkcwwszQnsp7DZpeQAuJPp",
  "key14": "4Pjcp8D1TXuePeY99nhY3fTuwvw764WjgQqEpV1pGqoxHemkvCx6ZJQzkDDLrNxKd4feZ1bB5c6enQuzzmMV2A7w",
  "key15": "3e2JBPi1MYZh7N2iuZ2ueyGsss7gRTRuE884uF1SKYDAzHfQtnwQLFbXfpmdHigpu5Qq7HfD125tYcaiUn4y1Feq",
  "key16": "2kC5eLvwRvrtrtAuaKWqrb2wyYurjo5CGavYyi8EWw66FzaCBEWuy7XnoRZK8zEjL712bfKYStXfTgyEeaFDuSfy",
  "key17": "5ZAwo77vSkFZSsxYE8o5qJmrbbFtfXXcjC8enc2dLe2gQtRvrKs1GfST3j5WDGPCkHur1CzCQnmpZ1kYYZuU6oox",
  "key18": "2EiiB1cSk8q1bwacTjU3cyNtfu4o4GCL6fBidK4xK3veVP2unxtmKCNLzG19fvFgf4gLUpYt7a2mmgCf97kEacXH",
  "key19": "5BiyqttqSHDic3YKPZZLShCqPsBWzT1i6xtNoSVRZdDjRcS1GNTxgADLkgtqxpC7LrGAUc5PtAhdo8ieG51tLdYb",
  "key20": "5DbWcze1fWhXnB1z8ejuYc7LYRmva4rUtYJ51nrP3xCLrw8AetwMVtQErBkQ5emnKZSqUMNB84T4crvGuTCmnsNo",
  "key21": "j6G4XCT3CjUhyM9TphQ5i4yJW7AiiApheCfdtUfRkqn31oTLFJi7sUg6Xy8Qi25NV4xL13jZ7J4Yn4rUXedUAgt",
  "key22": "5vrHUqYfHUYxWYA8dDedrARJpnf99UqdpoRRqq7HJarhYViBkLje1woLQd8HgUC9HTGRz1mH5FTqM8bZejh4feq",
  "key23": "2Mzeda4LBhKZ6gcDAuNcEH3o5WShsuUfwuufMbWA2Ts7g3xjodyTJ7trmMkXQM2CkvxGkKUMpQGPbbivx1aQsXeN",
  "key24": "442q9UmX7e5XW2idc4dSszHvUkHG7rmhJkytawwGj1okogThygUt1nQ5UpoJ1vcmKHsHKwaJKYh4kjYidYNcNrJF",
  "key25": "2eGo5M4WnL5WdTfrvr1t8YJvSCaoQV5ajBfKJVuFk1xTcVvARP9gsGyHZMC8LzYjxJ8hZokwkmfVGx69CcDzVfmH",
  "key26": "25MZBEpCqBE6ENF3eD4H1d6CLyDYjTY6Z791MFypCCTRuGbinXCuuCSdgASFVBy2fZ6vhJKHsfroYQvRZPprcckC",
  "key27": "NafTyypCk6oMaR51M8XxFKshn7sZFPzSPdtjysM8fscvDuT6Y7utTmzVpPTPAfmHAWX3apqDGQRXMgkLhiHcykA",
  "key28": "57AotZAm9YH1bGgatN16Ujs7Fmuw5rwjUkfMFVHBtGbgHUUm7ZEK452B8cx4Ufsw6TxbGsMAkvu8Mfgz19WgmYCq",
  "key29": "brAa6Yku97mnkkpdC3zsfmHrFsjedfhit21HDpEzktc7JTgbRvEQv7ccFEc4cB2fgmZvmVEoce5xuXj9MVt2HBS",
  "key30": "52LPg4rpeffeDtbSHbnMjqUm8tJpGHCvQMeg7Q18AT9WzrNSsJ7nHG3qeW5ZCQTv9ZZMvmxkbkaWKG6r8j3NqTAQ",
  "key31": "223cgz5c2Hicf1bU4syFXtjYw53cf7kArqpuEvzB9ajdEk28ux7Ukija82fRWu128S5Cm3hxKKvwVTPq9jGFz4mH",
  "key32": "3YrjofeZwqCshmZ9nrWoThaio7ZCaDJikqRzR8Mr8rTpRAgpFFVBm82UF7RU1qWPJbxxZw89HL7XWtwHkAwq3znq",
  "key33": "uuv2Rdgr63Nwso1pwTZ4svf1qG3EZg4Akt8cmHpVYriT2Va2M7PpbV5oDxXndFmTJPzJkKWGKvXoChHpYc3wE9u",
  "key34": "5cUZbJpmwa9D18R7ZWqST7zeedPJSebnAb4qRDFc2BxSGyAbmJ89PLJm1SepaCk7ATG5erhQLRw9scVAQceZbiiF"
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
