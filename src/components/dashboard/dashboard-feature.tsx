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
    "yQR6sTqXgjM3eCuti2kNgJ6qw2iLBQ1HUFX74AYFHQPrnr7Va9MWsQzz8hhpwn4pkFER2Kf6zk8Z3M3dvFyxVwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fMcxB2sCvJi3sLSfXDQTjQYGhY9Qdjd4JtrVxAzePcfuRYDbuporm9UsumkVdUY87LGyE6E3hxJoH97n3HHUE2t",
  "key1": "2z7WdwXh3nPhA7GMnkS92RWB9DsuopCLPfgU2XCcgN15gjxaosFiS1kf8aBsAjtWbJd5m1rGotNaWnbELyMd1La1",
  "key2": "2z1kSMdPa1StLZUehNxTG1L5nA7gwKGMCWJq7jWmrwsKW2Ra3hCHzqkn45TZa3yBeJKU3wAbcgGrdA2LQSDguucb",
  "key3": "4cXQLMpYGENRAjccJRZFco8XVEhcc5dGASJkB9rkDEKi78MzRLYPbUSjisnSEq44U6GnHPN9FxmkPVNGLjBCfbte",
  "key4": "657BaxGhdCWn8PURq7Trbe1BsanBKGsaGgUSjLh5EVtk1ocMDvQJEGfbVDZDSjJwhoXvQ8V9MQkqtCGcpz2Pa7Xe",
  "key5": "3A35JYFR7GBrNBquTSnjWVQf347eS5aKikicnSLdsVbNNG1gQCBotnbdw8q5XjN7LQaWEnQ9xXVJzeBSGecHfJiA",
  "key6": "uQgeSRaMXv6kwbQtHjZ1J3rRxUqHzuFHnv6QvhsD9r61a6xpn6vwT1BVg6HkgpCdEE2d7s8HWsxQWDWEAM9cCsj",
  "key7": "3zWgbnULFQfvq2e6sc6o6Y8Q74FUKajoxEVEnDWp9avsKXCNyXebavuLJUABn4jptjpNjavg2ZGjaSBYvVtsTviv",
  "key8": "2d4M2GWRyPE95YEPUNgrkgF6B1bADfQYGTRdfaCx6wtLWY4BhSSf87KiVLg6FGL98ZmoWhTzgCqPTX7YrWcwgr6P",
  "key9": "36PYod8y4Rb47H76YNDHGHRk5cudhFHyH1MAEWpdDKSAA8pFejCYL8y8Y4bhb29HrYdaXgMaPtw5KiW661MHfgY9",
  "key10": "2oNa5yhUZ34tjYniCFcs1C9B6hzrXrNrzyRtrH16DrYfKi4XLHvpQfMDNn2WtaEQCmaHsKFgpBbn5L3ybW7iJFXk",
  "key11": "2X92EpqWyBmeNdk2xjWsnWfTAahm5epqm77HEug81z6tkX5ReFHMc4VcmnT8hKsW2VyjUDXNBQCR1x7jYFnH3MSa",
  "key12": "5sUARceLkrARARGzezFVfGZkmkSruobDAHg3LnjuzWLTXA8Y1R9R7QC9hDo7gap4cuzvHYpS6gDUTAnjvWe6tM5R",
  "key13": "mS8s2hSQnL7g3MZwYvf5omeq5bhbDnAdWQXBn7CgkfPEUeWCrPczDZ9FHBV4Hq53CakgSXTsw2Uyv2sdusLiaHL",
  "key14": "kXK6v3nPb4sXhSzeAPENj7i3qBnbsie55M4bwwPJAAQGHABDXUhAKss2jeiTZdLub1vW5Mo24FLQbZapeJrHBGc",
  "key15": "2mYDTXgzZiETVpfSeDhttLfJuzX66P9XFQXiRYVeCGvRRH2KTWSqN9z3FmnxGrBefTcFL4uKnwZ9gbkPQgxEQgxA",
  "key16": "3gJyJ3JWxoNFWKnHLFqo71rbZpdm89yMtqF1Sctk17QyPMSPk2CLTfGHWtnEjeRHQ4Q8vDHD7N5mUX5MJFj3HenA",
  "key17": "2WZG1q3P45CVTwhULHdVZ9s1yeVdy8wfMsLw2sNX3ViuF6s6AVNjSTDnYYrQp3XFY155Lp4Q5Nqmsqyc7RjGvW24",
  "key18": "3Xk7UHsTcokaCjz4kWCKvFzGQbkvnawK1Hzt5ozFydpmqD3dfN2dFrrjSQY596gh2jwSoxrwfT4zfVbScviqUHov",
  "key19": "2o9iTX2ijTfWTnMDqWbA6VTEDHexU83NtEMpsn6DthgPVvEgK6QSrdM3WafDL5qEd59quvsBvGYJ1vxne8TNkuTF",
  "key20": "2ANuN3SfJPtMemi8HsXWStn5e2t4vKNhH2eXyr2RG3o2htCwrnfYd3eDb7eXgPzpuXCKm8qMxtQKFhW1v1D9S6Dt",
  "key21": "2KYFBasZucioK6TBNFhcLadUpz3TYs25XzLemV5p4CFLoPEWM2r7QXJ18MYo3UhpAdE6xEmisxXj1cUt6MWksqSd",
  "key22": "qxTgbusNWjo7Tezr8fMTQvmfByNc58XTvNvBGDYk7pjtnCkDiukDyhymsLiJRJfqwWXPrWVUyZCPfi4xzvVAiG4",
  "key23": "5QXntZGDwezM5Mojojv24ue1erj3YcrRhfeLdE6hBYVu7eJUbs3ZSLhexStsVC5uK7b1VwAYM5F5qKwmrfdLALmj",
  "key24": "2fpAhJCbtg4CECESrJj9dhNyoCRLBaYTYb8WMNCQQ92NAFBsjnW9bWF9SThebLpcrb8cn4y6zFFfYm8JLh1jXgY1"
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
