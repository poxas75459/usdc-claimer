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
    "o6Pgm9q6CBBSkm8RYSApzqqRgqiS8EZoKKSWF6GHd62goc8nvJ2w3YbnggzqCLH7L9tNqv5Z1qsWfxZsXUAM5Bn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GdKCqmV4uESiA1NEP9hgL897haKubVoeoRq32hFei7zRtS1mSkBvPvni69FPohrjwqZKahFdLiCqxaXG5uX3G8o",
  "key1": "5gQMkxHrfnQf9KtBrzLodtVf7oKngjr3U2tVMgacCeCP6G9i3oe4qGhMnj2m78c8PdAVUpjXqYkYW659pP8vxMgo",
  "key2": "3G7ty7FqkuJ9AByr1fJQjRkgSoemtCknfsQKqDVfv4q9PRxPbo8ukvHnRZQ3ypLYxSJV2VXoQ8krEUdgr1Trhhr",
  "key3": "RMm6cZ1TyP6rVRFdJWrwcvZxVjkUpvtg25DVoF47q8nbL2Tjf7L229xTQmAcanXUc7JsqFcCFZxhWWZMj41qQsa",
  "key4": "4jxJGymF2rrwogPQT9bciekwUdshS7byhDhiGkdc17QFHCsczMc6nsipJY5ZUqGpxTSyRFME7yhK9wuZUk7TUDUF",
  "key5": "3YH68kKPFxfXQo6vMgrpGQaCcJjwMXK1CXLxvfbg4z38E6h7QowkCQ8h1Fb2MqirUkZUAHqDc9pZGfgwYY6tQNgj",
  "key6": "3ZX6ePexo6RJwbHUQYeH39DfvFZpYBfsLz7z4uz1bo6wjnRVpu3W6paCEK4DErgg42kTA4Cj5eediMj6Fuw99xVA",
  "key7": "658AZXhbMvUjRF5CdoTwY6UZ4wu2Ln5Nmj3QwvmDxb6bytg1bBDbaTBrqJMCWheteM5iTWv8ehT4mU4eNEBn4SKp",
  "key8": "43r2U4DYteLnzcQrTs9NsxwhT82Z53qr9g3qiSqqDWXe2ntne9u1x2nitv4HEJLj2zCqtaHvcKRVM3cdE2swHnZz",
  "key9": "4JvDAQCf1kie6erR2djXbC8YGPQSEQj96BQB9SrEnQC7mUZGYLTRcBQXm3yxgLHHrTR6HxkPGWyKxP3TXtMtWuEG",
  "key10": "41Srii2z7YR67DS8NruLBF7Ske24CJqd9URqw9DkXDjAG3YXqdPAi6ffa7Nu8CwKZfvzyo4NGBuq8rALsHyiPYAL",
  "key11": "3zsHi9stxBJUuSTXTTyGTxcrkCKadYoXKfzQPrZFxwoZSDJKsh9qhTcPXMYTwxGi3yyuEaJe74iozhyo1SPN9Whs",
  "key12": "QU1b38BdQxUEAcGtLDNfs3QguUcMBuerB49U3xsXSxV4zXgY1dZsRvcWrTLz1TNBXcmPjG6fxsanQk1iaGirRBR",
  "key13": "4Gtf8NzQEGrDSZ3JKk9jYm16kzEzNZC9Kmp65vUghhgV3VLgHZwPSNzgpRcdSQSNarL25deRRTHd8kUGR85duRJ9",
  "key14": "5cHVMbznVA8WMBfzqCtAG5G4Tkws67aDBaRPQP9SLGuNAQ12VC7GiTVcffjN7CMTYyU5C1Afppd7aoUFM5t1NnX",
  "key15": "hNge1kdtGZxRBZu3NWVvnPUkJaoijTwZ1ctwb9qBRf9VqS9VZkMaJZQtjk3fjqogXb3u55ntG7dGCj8YA3WabJn",
  "key16": "tSNcSNapdPKeXj1Uty6nyUdgTn27dc7GpFEPbjfHmMzMBATejs1MGK75TsTAEnM1rKSVbNYyzHcwPwEPiGY2KkA",
  "key17": "2Tc1fnhYa2EELWymPyr9bL7iNcbaENCGN9DnWJZHmhS8y8XXy3eSZWGoe1hSeaJy1RqxHpM1rDb1e8pFdaM7CkWZ",
  "key18": "3w5HJ1BxSQqFD5xzJjPH2J2dm42D8zCnq5jmNZPPyqdDC43MAWZzQhwjjRbeU1y716hHAebWKeUrxTvc8Y3yHkd2",
  "key19": "5JsLijnxzwMVBTkfmtCfUwZnbZ4xt2wwgFWjVaBNvWBkC1Ma5bw6sY4uB3YPzMQzgZAusBwT3b93aP6eX67PVZ3j",
  "key20": "4VhiPPNwJxZjP7kS37BSRSS6BfzkJTs8zcqYZg3qZsgjo7PMRHrSG19gBhtFWuHUUwQSXYgRmcyVf81RJK7aNxpa",
  "key21": "pNg8dsZsZnQXreWLQtXYFoz4GwCMiqijYUoQ2GAaBz6ZzR4162KAzXWzKS5jjsidqRbTsQCK58vVwkEoKaGtx97",
  "key22": "2wHErmhguaHp5jiUnHDjXLwDiLjnYM4Frcf6fbXKR3sHizWacUzKzWxqiW5aXxwrjR3WbUyRWVnJbmQXrriYyE9H",
  "key23": "4w6fvCzaxkix87kL4AQMhSkGXxVfPCrqx3R2kiwEwK8antnkSwSZZsRMTzshvYeW7AyuBWzAo2UvgPbj9T9GjUFp",
  "key24": "4zB9NQJQnCSAqKAA6YyPjRGTTmrBQCpaPZmcyCNvSQWDRmbj4R3Djm388rpiqaNvimpdTBEEGMwx56HyhMffeUjB",
  "key25": "oeGV3AuJNka8HCi2rW9AYmL68DKpCNv7sEvP6tC4chFUR7Kzwn1S7kFBipouQPYvWiPjgivxzCZswiRaomDUFhS",
  "key26": "2ApAwLzwekKPtJA84F4549cta6SVQBpZv9HYVpbwU6RQKTBVyTHhFBjK5Fqt3PkkVsFWfgkGNt4DvpnWbdU3V3D1",
  "key27": "32NEmbx1o9HmmAvnRQ5Q8uFyHW7ftLcrYjdQRrUqzDnWCXg3XLd5wQiKxmZ6wyHFbsGBMrjUtsJK9aAohyrcEgDx",
  "key28": "5wh3UULv2nz7DyPisuVPQ3vQU7oqAzTM9WNpsHWnbpW4LwGugS8gHwMn2nHAvJjrDDETUtDqeam3dTeEtJH63i6Y"
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
