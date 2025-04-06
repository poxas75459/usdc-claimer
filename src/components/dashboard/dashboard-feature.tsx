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
    "249FifPbxSVzP7cQroaUncYzL1gr78rYUEWLBKjAfgbfL1CCseVKbe9BV8x4JJGDg79fbMhk8ceBizo2K29QnGYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WET2djhMvtFiSCvPSV6Vhr74RcEK5wVPqGe7NYZepf8tWwX3VezZGJhe2BxPz3GQpmxnVABhVkKBqXSjfmeRrFs",
  "key1": "2sfQQPEQPKUsUKgp2Hsv8LkjaikeEiiMAYvdnXcZhT1VHUtV9tqUhxs6VywLixwkCzAFhWiiaYbinLcpRCvwPuK3",
  "key2": "2cuNTC5idCYaCzhsNGmxX74oa8tLcjQZWfx9trwCuALpHgwpuo5R7rpnX5YBYLhpciuG15BkBdCZLCkjoRUzWbVu",
  "key3": "4FV81U8R6oV8gwb8Vye7AcGKPRikmvFLrLa457NdizT5VjyCLnGLYZ4iFHBu4W6mvWKnLQWd6TZjwhBvEV3VzfG",
  "key4": "22gZp8LyMG4VsSaxvtUmUwEE9PTiZLpJj53AASkSUaWSSkNJzqGorjK17AfsnGgQxizF2b9SeVdfm6gYGj2SgFTx",
  "key5": "5MZsRTfAcFV58SHtGKYQGZR26ECKMzoVXbDv6DWiCyNipKrHsdpupNWBxwQNZcCBZmp8aW1KCwcSWAjqtU36wqCH",
  "key6": "3k43fSAvu1vTjVYkG4uJEubsLrsxVgDpXXxTKhWV6r88H6xo9T6KjmuxXHSAiRP8G73bwra3GET3Dp7MaHnFgDQX",
  "key7": "2NWNZrdASaXCB2ZVNLx7DfVQDfELgAef3NojKYr247NZA2MbQCZvZS8tvfUZ6aqRteCzU4ACPKquLMQUGpycv768",
  "key8": "3D2s3PoVK62YWAfFnepLWeZpoLnW6mVcjY6d21W9XYnhazBpKi5F8QiWoMeVyrCqhXugvZxRE7rDKVwUBTh7WqYa",
  "key9": "2niZakXT4Ya98zS4BzRrvrNV7KvTdngmbATTZUpCd6yrFK3jUzmtGa1ZfVg8NpLdvKgyyjSpJPVXyNrHba6KfG5U",
  "key10": "5REYiHCbd8GpsKVwNntmNVS98Y9w76avSPiDVbcFv3a7Bi3wcWShVoHrVJ3zsUrhmnVhAGcn43Tsp8KM4HxydxDH",
  "key11": "evAadVucGjCEX6XUSTUuSEkf23kdWk5X1yHrsaZoJFuFKbBJeXUNTaZhniqjmH6SxMEX2BKenPZ3jgG31NYi3LR",
  "key12": "5Mm8CqrWxh3QDSpCdyCXVqy6h5y8NSMKujVeNQreaUu47NpT32meACTKSqd7UsQmB6ZB6XG3dExU7r3TLV49XQB1",
  "key13": "rdMoqnCTpj56smFvqQ9w1hPkDnPNsjEHsz9YhqCVVG2ctRRNRpjWxnCe4fQnsjSTGWRpnkK78urDAepFuvveonp",
  "key14": "2hg3JYWyVsTsigNRV3UNgyEbjhNYaGqqFaVrUonG7qEyGrSddhgMsxgVrzk66xAJCZgF17n7WuDAzY7G9x1WaCmD",
  "key15": "2JN9UC7oeaNb3Y6yFQAGvFpahtbAcRiQTYkpGuR79igE8ji8BFkzhHk8d9JAnxRCFNPNcWLZE2jPnCRfYuPFy6TT",
  "key16": "4FydMjUNEnM2AaYDiWDhuHumjBa8DJo8pfZuuU2axwBxUbVDe3gbtY4hCZ1KYEeBNRAoxQcF8pkSbWgFsP2krNVi",
  "key17": "62iPre1WkZsUHJJSPBus9jqgpGGW7dJAPKSNjY1y5wvp7AGmpVNp5QJBWbfPEbbgUXSnkcAdcAE6fREG61hv3nH1",
  "key18": "3J3A6Zi9E75q1TBTyMi7CnWgcNSxsnzjhf5KtChd9UKbwcMkgzAAE5AyJPwCuTh7YS49yiUSyxUF873iWj6rS2tj",
  "key19": "2mk5AsQcBMAHjxaYkTNLBYp9CynzzXQZioVMne38A1MiL4zhcRzqfDDt3JLYRdVMsQe4jWLFXeP5WETNovfJ37yL",
  "key20": "5wjb5hJphpEqNwKqNm3HPKUwADY2fM6KH6G3J5GdekcSKcnWFjomo92MjCERDzRtMTNxUTb7LkETRn31KiyNddyq",
  "key21": "4uiQX8iv6htzX2FoXmHtJpzZfFXLxd5syVhs5EFtbRTMvgGUMuRqbpCXjryA2g75ytSgXf466FWkBRM9WLXhbwmj",
  "key22": "4nfj3Y6uTokR8DmpTswgyAEPfrypXFNKfa5QvHbD4ugfQs71DyuSWgnm6PkSWr9nkcAY8sPGXry3iDGQLviWpFMe",
  "key23": "5BnVxBpnSFF1ykWu54EK7NjWDfkPdMqYv1gr3wegdPHVCx16tYDzKWkP6MAwyyhTAJmxUeqTRGnM3NjDMCRZaahd",
  "key24": "41DCFZVhehToT5qQdEjX6SxfiSJyaS8Z1ECJYHGFZduoozXRPNX1gNVuYKuZx2XwLYdgWF67n8QZi7NZDo9DSycg",
  "key25": "2uEuphUKPdsjXHWVFibvf6TjE7Bvh1gQTukQL96KXC8fgtEbgZsScfFG9mGUN9jhUtrJR7nKbLUBPkNFKSi2aE1Q",
  "key26": "3c8CJYhCC9avBhMj2gFZF6VnxS3xttJ2oj1MNKYfG7WBb78qPun8PaqkvKi9qGn2Lc2u3HNsZPASKYMvhWvo85g5",
  "key27": "2eEGCUGXjSRoDwGBA4zboDpca4okau69AW1tGsfJMao8a3XpSiqqjfLQaN75vqivjZXXeuQsaFBoysnyN5v9z9YM"
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
