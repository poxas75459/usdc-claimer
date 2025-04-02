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
    "vSmgVHWwg18BqxfpLja7a56qj8dQESfG9uo5PjsnqmnWKjX7MtYodWkk9wtzijuDXDUkkTCyUnC66sAf5AfGSoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vL3xGQjuukPTZU8wgmmEchkHV4LBfEiWBqLjowoGUYDqQGXVtamwVbovQs6gftQgFyKsBHmT4rKdgsKxwxo4GUi",
  "key1": "53i6CHndSR9DXpxvPMjiU3fkRgay7dK3TGF5Pi7F1iiTWL19sEepBxYud73GL5umWdriE8Dq8DAB792ScaURNbsS",
  "key2": "26JqewXQJZV9hadRVVe9CyYXjoyv75BrJdp1QyK5chQWw4pGtNEiJXHQZfxJSa4nQFcKrfqVB52MURESjz4Jvt5A",
  "key3": "3WyRFZPyqvvrQfKRtKqoxf4NRM2KNN9RNJ3RPvT1CC3YznQH1ukmtG6jd6GwjrgBp9iBMyM3i5E1FtwvT3Rtk2o9",
  "key4": "66XuYfWTxJngQMUpewZCuGBsHv4143dhG2Di3Ycwj5suSfdHq5B9f1aJjYJusfTHy3wheZLptwWsS98i3qE6R7wh",
  "key5": "5rUqQ8gRZSKS5AD32WoEQwbb2gv1YPJagqxdnb2CH7Lz4HpRELL6MbQMBuDZijCDYn23THcoS2ojNe5Mx3teK9ok",
  "key6": "22uLPS1pxmoxEzfBSt1qomiPL2daBnqLYyUFpAJ94tiDjBXhso2JokuE7VfKqTBwJJtFDPc3AAYm5TpbaR6sK6Rf",
  "key7": "5sgLh1e84DajVPjoA8qjMBBL2CSsunKwyrZ77NVfRFd9t9qT4oinaMuxhSrJxTJqjDm4pHDrcp3qAYTCPF7AZJzh",
  "key8": "3jbKJeoNCppCry7Sm6G63gzv7mwJyJcXobYyHHUkCLFqAPwY77j78FqimqX4csjpda4YE1YtEBvKqHCr2mTL6cqR",
  "key9": "5t7NczaAkDH437hc9Zq3YAPnxSS5dWLTsQppxLAjfnD3xyor5AmdiTgWnyLb6AxpR7pdBGtfcabUbyreHqBmE2W6",
  "key10": "3keJ6y5WxzLdaz8UNdQUGvRu8GkM2Ww8HxfAHKgvRESjWGidHjJ7Rmf9Whzbp8HwiGq2HJpPgjFPGxvdsj7CJrQe",
  "key11": "wW2hLgQwLGvPssNgFURm6ZVFLbw8taW9Ft4niRxUeNg7bqKDphDUqxcMLYtnZtR8H9qA64vgv6m6KgfPaYbREvf",
  "key12": "3SfS7L6Be1XaV9gSx7MnZ4egYQ2uJdqjCbUYHVberogK2tv41WNDqfbkruNQpqPg8pZyjcZEh9NeRRwWx4ADhvAC",
  "key13": "4Hczpu7tt3gzhp2qKfN3DVUMHdogb6WATuahG6bMgTWHJwQiULoh4uHpx6RYbmabJR1kLdxFEXjQ66KZLQLA89qC",
  "key14": "3VtZAwe4iTwfvsy3DAHM4wwwYt9jcLRdyTkah5J6oUo3Gv17JX5Eje842qei8FLb2wwWYsk8XwL7ZENEtJhcAU2g",
  "key15": "37im981yyQJBKm9sVWxXTKF8JdQR7gNzKbYrJeKnB6WCQ9MW5EMdfnmHstgWZ5VXJGx9Q1L7TXvR26313R7TcstT",
  "key16": "3g2NVyDCf8sqVdyFvodhETJVkyNpf8igmBcJZSUWtEsWNoUTh774HMuStciGdnP3HRAQ4Pz1aj8NbEyk5kmnj9tR",
  "key17": "4jDq25GrrvoUuoL51EsnRcfBU1pMiRdjEJSbGd1REoHm37d9uo9QntsGSaFoDptpoLb224hgpHUCZSwgdtM3sCTZ",
  "key18": "3P4MM94CGQBJDbdXzNewAScNMmzg1VxFbtHqPW4yFNm24gkzT2rWXrthK7syiebrvSRw8tHJGLmBBT7Afv1qSE6b",
  "key19": "2u9RLEGhkvyRtLcWtjDbuNgUmUSks2ehz8GhyFTxTnAYSXrqPPahPbzFR3af5s72y1iaEcvbGmR3Tgnxf8cAg5dk",
  "key20": "yiyvvuFwpbAzBYpvihL5PrdYAB32X4kD7bXf6v9FnRj5zkby6und7rzRhMEyzy3jx3myNwfVdGbqBJwWNiXUMvb",
  "key21": "5gknqBXVeKCVmdZPVknnezEufTPAdeKyLmBKSDvnrFEAvYntVEkFfUGNzQ4LSUomejowtqqJMqX5koSuo4v5DZ1x",
  "key22": "4KwfGKhK3TopDS5dRoMvbJAp4HyXzPAJzZYNXc33DeB1vBgFDP9RMi9Mi78oM64gZg157hJyEVi3RSV9k7vwXSQ9",
  "key23": "5qXkp1SLn3NTPBp41sn6YWGVtHB9gfTa35V3d4jhpRV9ZX3vCiqcbv9iWNdGMruD42peePo2JohFTkL74n7w3NWq",
  "key24": "4g9rihMuTERsNCiB196zj6BL63mEGH1K35pSRe8GeFLT7e3phEzyZme4M3Hu9uBii8UpSo3wTJNhTXMQvf4fkGkU",
  "key25": "4bBH2is2NfcgTcifeChcmqZXXLq6GHsQy264ABtq9Jjx8FMMhxKRcahcqY26e7TYKj24xovrCMpBRnSyj4BDUS2d"
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
