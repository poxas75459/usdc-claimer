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
    "2mhoeipTEnxFR5MeaA1NkF3T5iRqtRFoJy12FYbtbY1Wqn3Q1zjMB1vq5ccWNwsdM8ABcLSftCin2Zi1SfjZs1Q3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aqcn9K6wg2Q4kPZLWaXevCh9maNk3fAiqZsDYUQy9taryxGdy9XD2Q14e8ACrtXfaNoMzKAs3AdSyQVvMmyLsx1",
  "key1": "3biwH3pw3k3oyarpAU4cWpNz9bx3ZZojSEtSwtjiF7Jue3zbwYDQUByh7nWToevHSAfRemByW152vPKLwwQYY2s1",
  "key2": "4zb6tuMYAiejMXX7BNazMdi9XQRo9N5GqTpABbdt6fhRfYd6PNhzy8LSXDLkGyGJNFQqovMcqE8GrYRmqE26L9s6",
  "key3": "4rjCYb18Fh63j2bTEMC7FsrqmTFo9ifLWUpEEJ2nf9BD6i7HSEBsrdJU8ctoYJLv4QfvWjnUgcEJq1wSmLnTNCZk",
  "key4": "uGP9EE5EMHjCJy2HZqRCRMAChTPSALUyvMBFFKyWz3vMNnoWHJNeqPuZWjQeRQXQqnqandRYgjiSByCpZBeFznc",
  "key5": "2EAKhKQaKjK92wmHGazNqQjNhinTCmNZzwiCePUEs9XV4tZjJh8aUmvWuwK6dQcZWesg8UNrx3KxuK43UVjSgCV3",
  "key6": "3tDf7veiNwqKQWUHbw6wJewvjDNTHek2qrgHvWBrMN3Fj5zwbDurhoS482ExG68TBravh7k475cdoia4mybPP5K",
  "key7": "5cJnaVKx7dzxTxvbVzYBL8yM3vz2vsw3xgzzVvpN89qWf3jKDGMsw17o9kARAPb8bqGa8xtruoi5Ljv2kNSJRoE4",
  "key8": "5BA5Fiv7eHECTC6p3SPZAfx3oSqq31GS8Mv39P3pzCF7ioDTMkwqcEx7eonPPkFHmszPQLifZi1Q9ti6TxSs7tPx",
  "key9": "4sfjXjU7edDiMTz9Nvyvbqz3BN2NNWY5zNB5iNnsTi3YgZJ53cMBrUAyHmh43KYaNwDa1Do5ahq6b51dKfFoGqec",
  "key10": "3FvBKQa4itcTJHXUB5LDNrfq6vBk9wpTzKzetQpqaAzi4oTaKVL2eBsZHykPscUWyv1wcQVAMfduQmsos5jNgHuL",
  "key11": "27a2qsJyzYjXyZSZWaDkscHuaovxmwZ9YMHRKDZQjcjHaLcZEoBYQMC4rTVzMw1Dtg5SW4HRhDjfpXiaHp9exSiB",
  "key12": "5bPXKEP7zZkD9JD5XnsDK9uSBVoTRmbTqidwJoyzpMeszDJUfXWfVpPfUhdgx8CBN2SGeoK4tTDsNRRtBmBtJyas",
  "key13": "2yCxXuNoJaNZH7e4HZHZXcvud2k7ydamMFFQXWiCeb1dDZrdX7a8GKiwMYc13kFJz8SijL7CYxmnEEGmBJGx1Euf",
  "key14": "3oVtYbe4fxwhDQpVK6xjKToMWgmoaMg32H6MCzArh1sv1sJDiWQzz95unrwoLrpUYhPN4B31ZsnxdDJWREDgw91c",
  "key15": "2KLn2pcbwk6kUBh3quxUJKYm2jcXTYVbBzP7Wn3fFeLJxhAmWYKrVnMnQWc5Bj7k5qnmWmmYnzht4tx5LuxrZfeL",
  "key16": "4XDkh3At3mVdGWGZercu2PQV3dp4d65pscKcAPy3YpPimLw3cdnc42Bztims9ucdTndRcx7xa9ox1bK3TMiCMUno",
  "key17": "2uPvzr1vs2rbtESydEazHe135XYFvCbCZknSnbPV9ZuM81TTZ8sZ1qqnzDPC5GopoxA2uQ4mhEMfMuL7ymaY8Ygj",
  "key18": "2VJiYmYgZHFpWu73SbXMZGaKqiv54Dtyp4oFDupqDc6sAFsmPqWHqmd8AjgD8v6u5YrYxo5ovEFLFU9kpKkR53Cw",
  "key19": "4MyPxLpEWNFasphHfWLADwLQZMVdNv1RxYe4uCzr1abkEmjrvGptkCfi3KgSaudR8QBJcdjaGYNjsCXTzF8pLQAE",
  "key20": "UXezUC8dy7dcXda8YuoWjty2j7Hu9BiidVKDkWSNFwjYwCT9akdypgrvadYPNcQ3tFY9NHnNeUa8Ewfsb82v5Vt",
  "key21": "4W5KHyyb1v7ieQiDUHLWnQ92smqfxd32j1SwKD3bppMbsFNSQLZAdpZcEvZN23C9t92Zg45Q2SBozE4sYyRUMQMN",
  "key22": "59yvmc83Fs9YbqWUQnctVjCDedrM175wXhcJnuGnYCo1z8gL7mFSgMmDnQCCZWNPLBpzcAcXtSqHykiHLXHXMuA4",
  "key23": "5mmHwRvtsp7FJ3jzUJkoJXbS5FxXDfcEfb4YZryPCSyqBN2SWNV88kzyZCjRYYsRti5forRdp4n9gEFuftAA2Bfc",
  "key24": "41hPTQpZwLaokPL9qNjm7ArX6TyZYEFTCh2GYrtxGVmG2nBKcx4P2kLvMZPw3ayKsipXEB8ZHJzEAVkxwcuyiJ6"
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
