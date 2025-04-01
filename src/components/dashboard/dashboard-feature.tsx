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
    "8gJPaaATLUwvg9hzh69CwqoNsGdovgUbLMmcHRf953EaArJU8FWcpVe8wE8qhtjqdFrRZUXbf4PNVvvTBqL55gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Xskyaipeq2Rg3jhCyaatDEWAFYtJFXC9ZX6NfnbqiQWK9rapU2mAF7meD2Gpsg9XZZSUeqs2jRWP6DzrSMzDBq",
  "key1": "CHtrnNHWpV4NnjTSVqYcgfYwcUtYwzH5AtEMXjfm7RiLt4QajGz5b4L22M3wZwSJ9wgUxRBKzxPntTyrgZgN2fM",
  "key2": "4EJsU7Qc5uemNhXAPEnFr6Y8q25cqKc9E2ELKWCyenHuiNQ579XtASnTPKYwiPFdkjTEPhWZ9iYrbi9v8it5Z4Uj",
  "key3": "2hTHrXhCbsmNxUfWaHfKVNyMZtaSsveZhu6yatajEs25dEb5ar71pph5hPmLqCxRJhJrbcca9ARfcvTXiP7sXQMq",
  "key4": "3SanR8oCkDURuaK7ZKg1WWqNUps65ZCpjVDR5ywDLwtddBd45Ca8QfZduvoHVhq3Y7KeVcANedoMrWgw3r6HajU7",
  "key5": "4EPSLRpdfEyiQv9AB7RTRW7sUgTuNCrzL7CfztQUR3eSDsVYAM8zVAt9SZocjLQjrdHV5sPB1kfsLrxcJAJgWMnX",
  "key6": "1oeB1JoMwYwY7sBhhh6afWJsoJjcVzSHzAbTS6dMScS4LqfxmATheGPUok9DCfJV4RhCbA6hsH5MM5gZz59NuBF",
  "key7": "4YkCQTcowawRCoYtJG2BenwkiLteT4g3HEoz7TMPovCPU4aTyuWqpWDUQ7fQrcC2KoEBaVChWMp1DZrUrTDh8UJD",
  "key8": "4p8Qhzkke6FppGM7qUyr3jL1JXXgEpqt5c4pBTPfQxv2m6uj78nCSMDL1h5dTpAwzoiYn9En1P7EXXcmgQTZScWR",
  "key9": "ew1CJn1JdjrKunkpRQR5R8WDqZS94sX9urt5heohsBMQ1aqRkUajxpujiFo2YCWs3jz97JJpuDvKiujbMqQtt8N",
  "key10": "25iNQcfUK82aH8CjsszjHsNyJthiWfEPdfcgbS51hwDpxu9Bd3jFCcSeB3jf5ErktcrvEcy2JdrmYrmVbgksNafX",
  "key11": "2PLdSAahksGZjzh1ai7oYk9bAUerSuZAcx3suBLFbCiCYvSPQfMXy7yWqi2KwyqDC1MftLNDt8WJSWp9Pr8cSq1p",
  "key12": "5fNyQWge4Xp8ukMGMfshBExcUaJmUR6v8PZqDWJvdZLWkfppw9HLRFLqcFdunPd22xewqFq937BLy3fYQ1w6LAdZ",
  "key13": "5SVWzhDrVMaDHZxQ8GVepQGyTef1LC4oKhtC9WD9cgi2GnqMGF2RAHrDZjRGNCyAjav3YCoztTGCBvtM2EEvnW8X",
  "key14": "3Nq9ZCnYXbN1BugHsPi25W73ji6Lut1i75Utn2aXiXkcu6zjf5mqLuoJnqmPCn3Zbqj49PWoSjrceaLN92pVK5Y1",
  "key15": "35dv9Dqs463m1krLsuhPdXrXvkYmnnTEwSiwGGn4kmX3jhFxUxoqw4LN9CDDem6AshS97rdNkDtEsiLFvvg9k84d",
  "key16": "394yoh9BorLKyRXv2RtgySoYTAc8FB6BuaosSQxLCLeXykwiCuTYLFSMB5s57AZyYm1gtEh49rbWnqpMfzTWaLUY",
  "key17": "4FknAF5fvm7n7ohpgyxpKpGZZv1Pof2jKfM7gZzc36hgpXc5Xxv82adeCAgXhr92vojAk7NWdDeVVvJwwD8qBpVt",
  "key18": "QYFtbHhBx42NQreZMRx8G6vqyqBa7CVVSZCgCDrwMzXTFo13ywSauHC56zvSbyqh45pr1VMCoq9bCvfZx8SVZDG",
  "key19": "3DLLBZJLdTxUWt5efi8ei3XRs7tLgZkQPxVAYXVUndeZa6L5JVoTsezVUgX6PaV1UKkKevc4uFa8WA2ZSExHHf1j",
  "key20": "67ePVEAXBx4Tb9wf34Tmu8qFG9VEfFSqxnEEjKtLJjxJxeN8kt7wpwSyGUdmfsNLghPKx8WZYN2KU45Nk1B9yhNt",
  "key21": "Cot9scQHFFC9HHr2P6rJwCCftYhveNT64KFZpkm1ARX4zuhGRM52G4LwEecK5M7yMYf591oiwXLiEF2SoYrgWrY",
  "key22": "4NPuAJMpEkiZDNfQDJaSKXKebCWNG7iXyg9fEhjZ6xhfRKoavtQC3ywJNciKWqt4yHzXNt1Fe9gLv7mubyTVNG4Z",
  "key23": "2eT7VKz9Dwm2ne3NxTjRzLTxvtra6th8Q5WyG41oXVKxfWkaUhxCemjh17XaSBBsMpj3shELJFp4ZkEb6hDgUCjC",
  "key24": "5eAfSbYzh6TqgsiG1SjDdMNBtySuJBSu83qQvNcBMzJGHScBdzFwjs5ER8ZNDHy7Q6Ay8LgE2AEkNH5PQWbDNLZY",
  "key25": "2mg7qBQfWM1xG3R3di6k6LZEa5Vf4fCRdfwmsLNkQk7UbuF99vqsX3G5upFR4EfVzqxX4djs56ffRvs4ucwyezWm",
  "key26": "3DuMUUz6kS6vifiCjeB1QoBdVSAMUx9B3djUwWymamT5jtmMzTUMnVA755Qn1H1RFBbcDuxJi5XnaYctmf6dNZm3",
  "key27": "2KrQ8bEsUjQHD5KYi1UEZnKCEseGcMT9VSrheNnEVf5ds5aPRqngQXSDYbammJCp2dmRwNEaERr3w9UK2rm87CM8",
  "key28": "oMmzZ5p2JpwedjmiasSXZuXNijYMmo37sbqUcvMMKnNQbQ9BQKgQAsRxKAZRCcatj1BRi8J3cxTtbMLLx7UEAED",
  "key29": "2zkNiUfrY3h52wwF8o2DtQeiiyph11F5HGE3sWpYrJe2MzENob5sXCDrRjFpYRk12oYnW5NnkYBaa633hHjwXznM",
  "key30": "2bp44DvE7i9mFc4B11ZeLJFas9Pzxj7PoDHqwZxnwc8SD4QJBykqLB2eR9BZytrpJsFYqxE2KLkzYSM9sPnzjQPS",
  "key31": "2Drm7PMfgpT1ppLkU7WRfafGDu1mqhRw4Lrf1m8zEXwHzo1yFkMVPp7R5XreHp7kN6WZJvSKTvictu3nMbT1HTAs",
  "key32": "2FqWPRjcVfWWG6ApKqJMBhL9kYQGBFXddvX6XTNvgE3QfTjMConphKYoT9zPDDLT8nx1hXbcVPM4xeT3iz5BKKaK"
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
