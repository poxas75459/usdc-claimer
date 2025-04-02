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
    "5xw7JacA2VbWmaB6aUGMUDDHDvnZBLaCA8nfAK8rKXSusRzGgttCk2apJ91VuySub9Gq2Jehfhr6Zh8qM9kjWHTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "396N5y2VDf5Y9TMXWYQmkGTAJHUMWXVn3YamBFbXr3JUwfAYMBtYP9wcPUiGSHNcRe6LoxEhuqMmnYnJ81wco5GD",
  "key1": "3Bem6uPhMcW58KC3P6kjFxtB6UXGCBdiq71MkXs9mSSvbK7UqDBcHoCK5RheDGEZks4BpsmCtX7Ln8gHEvMzYJ2x",
  "key2": "5GLUKLkNBfhtzZh5VUhXiRmndHfKCLThjFjeedEjvL64wvSu3oyiCAvuVWYjqXVm5CXfWVDg3sLJdLpWsMgtFjsU",
  "key3": "25pW34afwkBnZs2GeW74Rp3BXWRhQ68dL4ao6wme9WYRuGtMXDQw29ZfapV2ssN5AQNqfKCzMnNH1uQGiadxMCT4",
  "key4": "2qcR2Bg2j1EDftpLoNwDFyNdhSN14nEQUB3KDMoBJ3iKbB5rqQfDMa7Vqsw1r33J4sq42ndp9xVUgJoNi2BoM569",
  "key5": "HNNzhHyk6v67XMgZAsQ45z5u4zbK7o95FUa1grtwiCpGVZszNyFTLssggsMTS8Swep4oLbmNRmWU5WLiChZviL5",
  "key6": "uG8fQYyiFAENPSiwGx833cuTJXh6BPe4HE1rKToiqUcY9m1dfiRWX9nAqytSnj6wfo9ToLayBJJNDsVnyMVFGz2",
  "key7": "3DFx2kxgWErgTXVw6Zf9SUPHHGeBqJ7v13EWCxwfqJV2m9kijZGVwyDamLZ3cX5RxRaL5zJmb8iCm1LWYoZKp3B2",
  "key8": "3yw8qgXNiQHWPUfCxy6qZAbgqJiRmnJDe4m3V7X5qfpYKoRwHLsg1TyJk1PdYo3hi1XCGwZeKWepG3R8Yqr8z7om",
  "key9": "5BeBtqoJMxVmw3FUdyLdVy4mtYiQg2i8f3JTbFQ2zj6xcNP6kswadGEf9HbUxacPpiGcM9Ts5Az78FCvtjjmCPZ6",
  "key10": "XzKo7noAawtBvKVMco6xyCYhnvV911sZD2n8ajLV1kmgGuJf2izwwnTyx6bKbFztVsKbPJ1RZXgezdyhrB6PvTa",
  "key11": "3dDHtC9nz51UkidW2hdNYy73gqcgru6FCLygR1yVeMrapfducBX2Ei2YgssRHm4nNfHRmfkgAq5QTPqXfUpPHoy7",
  "key12": "4LfwmWBrqwFn47W8P3H54LqrnNM8rLmNcPWSukTnV3FdP4ugytgAAVpAdsEiBjfnCjt2XC1whHpFtHpgzFee6Rod",
  "key13": "2FbZAAhMc9vCDJJGMGjrqTcurd9a6W4oSdCAnx9B7cuaGN4ToJvRL3A4BBCnC4N1GHCEJ1Z2z4t8tUdAUMyeAFw3",
  "key14": "3tULphoU9qr9fRyHqaLLf7AikbsxY3BEJbE4kazcxdqGkzgyWfNJQtk9E2CvQ7E44ncnKUX75WYa4bVLCh8M9Pmv",
  "key15": "5kKsffmfxWzc58SWUb7pPXniefxdvvJnQSstBK5RuGuQyRyRHp7gumPm2mSZEfXrdreNjuHsP3GWaucNoYZBbZWX",
  "key16": "4pEomttsQbFJbgYP5tBtrrbv2BdjHBfLAp9AnWrcio1hYzFiDY5jMwQAktmsjdJd6pBs2RqQesyrSvFrp5ZK7Zc6",
  "key17": "23R8V44EaiicGEDLq2N4DjkvuAfszx3Ekdvdez1JsCSTmDWFmSA5CUF9E6jLstMmsrtdQbGaQA9wgmT8edZszVD9",
  "key18": "2V6LkFU63NiJYaDS41e8GHtHFKZULpDhQXaZaD8RRePyzVPuCPDTY8dp7rXUiBhr6cHUExZT5vZeMSA6qvS66mMu",
  "key19": "3RVbUiQVUbJbq4o4aUGTFwdo9Xb38fNKTBKw4NxdZPgBpFdYCrfYSELBZN6fbewfXpYje59xx3rhrF1DF8CgAcNi",
  "key20": "495XgnUQ8iK5cVdBqcpuG5B991asuVc9dH1FNQiLq86SRfZVc3fwiBHH6WHwPJfobLEufqMD5wSrLcLDLNiAxNGj",
  "key21": "yeLHwSYdrrBwrX8ZmacHixqNRiP36gjbaNekhJgu39Mc8FCzkLfTDyMzT4TPo3wsjHEf182TVvQ4P8BXLxAYwG2",
  "key22": "dcMiP3wmhH421mrukELE7aD498ZxcgueTigzWs4GfD9sJJzJYiWgxqLuqrRBM8Zf6CHedAZHU4WY642okocutXL",
  "key23": "3SywgBwLtv5MBrdm5B7pvtPoJnE7GVLJgsXaG2Dutustn22E8xvFp9w6GcioBom64cbGeBqM6Rohxyv7gV98yb5p",
  "key24": "24y8WQ9MdDFHN7q1ByrM6xyRK5hSwk6pRBD2AnvGD5SMXqA7x3w2G7hrNqujQqLbYwc2agkedJndQGnAsRPrTP2c",
  "key25": "5XrNqEkejSfTbVD4YCF1NgbBGJYMtu3rrN7LNtVvng9Rj5os8SJZRNeAkGoAd94AWRzfsApe8Gx8QzwR6dhVSmvY",
  "key26": "z77DjmHKPhHhnnsKUN7KQPsqhXYPoR7BJbrVS2ULAakXLERzxDDYj2TtwmYVLfgjHXZHLUvz6DyxiHPQ8CGTYr1"
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
