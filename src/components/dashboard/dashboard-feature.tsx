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
    "3WTMvGaawp6snfPypB5uTYagcehmpk296C6vp9U6XzqVRCFS3SetZu53M553UkPPUdcmAEAYVtfeigw9mF8nuLvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kdUm9Kd2cWAtTMkym1ycFKaaLizPAJtv9bpxkc2jiYdMwCXWDAU9r3u5savw6GTtsGRFLUJQNeYXXNqYiKWyASM",
  "key1": "3sHm6v4zPJcUWA6w92QUMsFXQi5McobD4LmDG5pLsABA5hA9r9prAy1taeFK6kPsc3nqs1FuhG9Dy5dGVynNFo32",
  "key2": "4zRvd2d6u1mV3gwHK2qwE8B9zZdPgmGoTsdgPKBXBFnd6H2qNhtmWKiDWBMajZzquHAmsEdYFvibLS2FavowPeSd",
  "key3": "5GPEqqV7UXRwj8DyxjNJwp8CctHJA6bFfcrJjfbD3CJmvq5SfsPRiXNPvNXBcH6q427d4XYaTGVNqBh4xjqiKMiU",
  "key4": "5CjWcTPYSEyQCcy5mw54LPvgqAxpen9kEjsL2L1xxUXdcojR68SLX1dTMTarExJJYL1b9pZbHdnvPa6JpVkXGmSH",
  "key5": "2b2BqGa2hMCZyk28TkxbSaz6Cnqi4EuNmK53h3BhGVVWeJQxQLMyWiSQdTB7MeQZj2b7tn6jZ7x9badauNYPAjEZ",
  "key6": "Y55CpPAwjKUn7BZKkLjASZsAvTb8ZLKBTDFooy3wKbqybXJBwueMTR1GRt6VxTHCp2Ewtd2qoA9LCboB1ugt8Ke",
  "key7": "Gvc4EediLPFT3QKhQ8WmWigFCTTmGYo8igWCTK3tdJWkXxzFALkaqZnqYJBwan6reznE2mKNbWmea9VVJjMF158",
  "key8": "33PCfgeoP1qzdqaUnuTFNunLPrxvkNYBr2VhSJoexsvi3sqHXCkfJB17UDMGqDdzyiEuwyoNVgg58Rpco1yHUSXt",
  "key9": "4pjAFEQCkLT7nr279opgYhdq6mtLtFn2PE8tnEnP2XXukUvz69gzvX7SPfFyfB6d9wEwGxpTY7A62ssD9tCfodPr",
  "key10": "2H5va3zgsw6ERTpRJfTN5U82YQhQY4STM7prwiTbXFTPm5DbwSyCLdHptSrNHWBkfjETRQPqdxkDwK16KUArAgXr",
  "key11": "534AYmJNTG5XUsUsvTXKx4mtZEx9Uw4mSDbvPme9F9nigyafUQHLRiCef2KVipVJrmymFe1dbNUPaX45JQT751nE",
  "key12": "3wji2ZF4GXV6wQUkXMRku9Bo2uRmtDkNUrLgLSDrEXPQA66YsYnofPKzv8AiYe3UoXLpsViSJr2ZRdYfwRga8NKA",
  "key13": "42md6a77MmZj2AqEwA8q67PBG7n9NJvNGPTxxhfa5m5YkxcDQRD6ko7uZWdaiFo9AHjWAGi3cxXKUJXk6gCjUvse",
  "key14": "38CnhGKhp6bt7numZHBEHKToP3GdwSJehyiNrbZjRxCNhQRBhcoJHkB56yWBg3w5ZGkgmsvz7ue87naHm99ty6pt",
  "key15": "5cYnorZTFNyNBaxRVJN3ezbZesiCZJeuZrjmcjENpeK1q4EHCxd7K9YdXYPev5XeBCAL27Xn4j6qssjR2Jhvsj29",
  "key16": "38JFSjSgqCEAswFxkRzCnQxuFJ9UsoLirkBs1hqUDDHP46YSnwaYMwBNXnhDuoiUo52NQjDpdXTscm8vzT1Mmf4j",
  "key17": "4USHmfoJiEkFkaRiQsckC1djocVhQExoNt6Sdfu1UmueGLt7SH3eQ94fxaskD1oLf6yHg1MGrZWJYptiGEHioQZw",
  "key18": "zUGHzHxiF1PG4SMzX3Ns5PiCWTeThmfeRsHZ2sMXanhD3enPohWqcj8eTN4wwx4sgqFBjEV6jMxtX44a8BM77Ce",
  "key19": "2gcwNpAcMTNv9uhKjyCqNiWbBsUSyMqePiBcaLrGrToAaW5CerK1YtY5rj65PzAVH6UKoUz6pbGnEooWgJkh5ifL",
  "key20": "5BoTUUK7VDzSFGr6sQkDwK5YUHeEFnbWRtptujZ8MGqFFeR9mCLGETv35MzqGAJCn5NWVgPRXL3YUe1fo8U2YG5m",
  "key21": "4S2cMNpJvhRGX2Rk5GdGrZzpHGRgshsX931tYTMs8JwBNDrn11LqfWv7dbn4a9NnESVVKN7JgsDa6jdqtgTi6nbi",
  "key22": "7ZhqgADR6pjai5Le6NCh6SnyttzcPTU6R8gePeotNp2p8meFGFP5VbsZpmSqmTjMV5pcT6HqjZVQDTLpXg9dxR2",
  "key23": "4Rm1DGTM8QzNtS5gG742PKDeykEwbVAHFHHLNYR1erYVLep8BTZxMVsGjuQGGS6LoZPb24oXM7ixWDNR1WJgkBxo",
  "key24": "51AywTLB6Y9aEeVhv7GoQyBYEkb4T9uF3fFq16iYr6eF5EYYTshY2Jb9JMDroQxvZMFFBkLj8FiPJ8DAoRf9SWpB",
  "key25": "65KmEVUto73CMeTigTy1AeJ7H7iEgFfxp5YEAYMFZ79xerMBn7FowwTHLYrfiMFQCaLA7t89EpgcW8JFRFChr2DN",
  "key26": "3pzGTeXnKV4n9U8v39MDAvVhfhoKX4mspjQbDBpxerBroCS5rK1u1x5ksrQpZMEJPWesPWhTyVNHcnsokLocd6Vb",
  "key27": "5iyxzHNWBtnEZJKhzUyJNTgEUPLoVLB8fYUXdxzEK4oRTrN9HUb5QdQbigeebrau2cfUVLQL3XCUYP7TRqkESnSo"
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
