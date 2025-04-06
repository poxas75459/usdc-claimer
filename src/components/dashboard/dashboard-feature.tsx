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
    "5ZzGDtzgjoYSntgoeV1EKJGLev4wq8RP8y8dgHsuSNfSfha7DKoUmfXLL9QnhKaCvfdtTpzivFMQL3FM8VqJLJbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vxn6nMKWFJU3mTb8YPFXDgD3YGZm7ZxArPuUcG1BPPhMFbfo4qHULX8sVKY3hz5zVfQ6yzG2xtVN43xUa5Vx24B",
  "key1": "2ZZgSjGFMa8ddutoVeChbadNUZSiAQYhyc79xghRndtr2S2PTneMEtQ29VtwvDy5QwZHbEqEUXxi6wgyt6YNu9uF",
  "key2": "dzxodw3gsB5Cpr4DypVyBAyAbVnnhA9Ei5ryJNcBjVQQYaiwDdg2xNCdPN1Wwaktb5AdBESYq8PXKpe3rjcw7YS",
  "key3": "586F61w4K1MLZDNrMgudneVtwMRLkD6kfa95rDgMer1uqPREuLSxeFG3iTRzRstkgxvVJQB6WmYpjDoqqvuay2sY",
  "key4": "rxANyJEZLrDSAnG9Pn9Yjv16vYwPyBwmk3ToszKPKWanEuE54e1pCxfATLG73KiDtJ1awharQ1RsAciduFfKoM9",
  "key5": "2DLQYvuNf7PngPbHNhcXpsNsnugLk67ks2WRsf5j9CFKUthEHrfJHpaA7WFg74wN8DtmbVGGyBqBDHh3wbgYLeWQ",
  "key6": "2knzUM9nJy94Qz5tJ9nEQvVL258CB6mwTtqHowfhVEcT8nNq6N3idgRetebN4BFXDPr1K2QAa8x1Q3WFjKtdBLxq",
  "key7": "2qP96hcsxDpRiC3B66WACh9jYFU5pBYiEqsvktCxAwvo4f2xS5vzhhDExEZ75JYUQ21T7xZvhPkAVE4oJWJWb2Zm",
  "key8": "59g3KX1PdftDw8nezWd7H2RKCznwBP35VeDwYtM62n62zUmBrkEuBBP4NroCsEZxVmTPwcQPeJgAoXrcTHLzBktk",
  "key9": "4yc7GL4Sq26oUzRPxLM8Q16R7QykTmeNEpxipr59QENPscq8GvFd9WHFSTUsqwtPiJbcuYCNJhKXaGG9N4tk57EK",
  "key10": "g8Cnx1GyVCoCRFNYRXM3hET37f3ShXKAgpPFprBnvWwpv2vyAcwHw9Ffpfbc8hVGbXipgT8jJ2uTSNbJTiGnPDS",
  "key11": "41t6eqVU99L73QWxRjFMf7L94s2HRtqJEmSBwYFB2AEqxiNu42TRiiYeyV9EQjEH5G2RDa16kX8zYzTouDDt4MUf",
  "key12": "GhxEoE3nSCksct8TLvmLr2ESNtn6E1f3HKi5dsJuw9MepCkEAnDfqCDwDgeEeMs4ZghEmZU3F5M7qDK4aeDQPKd",
  "key13": "3Us7eehEMUZ1HLgwVaXkDw5Xf5moj2sLkc3mx6nirknQSFLAwpBcCcKL5TxX29JY1zAFXCwo55GuhHpP7rSwAfVj",
  "key14": "4h8aSGkCfghY8o7kN6tmD5KLkzdC5ouTXHNZqf16MREkHVNNWjXoK5fXCEihwMenA4gH1gWcav8MX2fsPEUnvYX8",
  "key15": "gDkeySFd1M6kRxVVbKH7kfd2viuEatDEQYtELCooUdhfUDRTnoDQLLE9qy4txnaPrnVxZvGLoH27EfrPFmKwPpo",
  "key16": "5pqkSUtCHYJFnp35RNQ3YdffHDDEExsnx1dx28KQYzHFcwnKDeT8BHYxDqNnEBsnsG38DoXrB17iB6CuuCYVEoFC",
  "key17": "4SBRe51ByRtkgALapZYG8T4Lu92pL3JdcfaFbARGRwNg2cdKCWSC9YrxbA2XfoHhfPyKHVXpuJkdV5sPKMVnPSYt",
  "key18": "2f9Y9abC421Kw6XqjK6LjJZrj9wfg9hWigM8xn5gL6izJqF7Mjawm5AXfsgCpkX7iQGW1oRdcqLByh1rNhxqob7R",
  "key19": "2yqJXE5hTLoNNE2U9dLnaDRcNKvLEdBp2BL4mHHeuCSWfxcosTg7K64JfFBvJtTG26JVybSznJTzDLVL3p3qU7uD",
  "key20": "Kf6zXaAVmuUtDNGne92zkBb4TzY8Go6uHvYDvubc9jfteGTd4VUqNieRJQG9eL68u5iqna5e6THNCEmL2kLoFrE",
  "key21": "3BXqbXZPYqmxoNqaXy8B3QNyovr1ZLVVMroLknpp5ZgwetrmzknMk2d8M5oM2CTAvTXsuGRZkkAAmBfSQ4u8muk8",
  "key22": "2kRtFG2aqF5DWHq1QF9dCAu3EYCtx6z92kpYyHK9PEc65mqzSf3Yv879UHg1Kk9VjyARcH7Q1LQWK4AVgR1xEUqk",
  "key23": "3aepeoUD1YemEjxfd6woSy3hPcxyd3C5pXbAVgLTUgCZuHZo734FuUmf4gesyccdBC7hDkhty6Q26SbxtErUSzzV",
  "key24": "2cQtbeDDMcixn913kaPpDeuBs2CFRApisWv5gGMo8aPa6YfMpQWAXBVZBzeRFjMwMHRp23NE7bWg3vpSHQSLETm6"
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
