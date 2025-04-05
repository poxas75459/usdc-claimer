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
    "5WGcQTMjWDcYkv95KH1NNLZqj8pQ1jGYFAGsmpaKhXbPwFU5snEaBQdUcHP71znxCggWuM1GzUJF7aHUPsySyYCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "376n5JLS6Ky9itBLXb7p9vp6vjrRLRTjD9sjuQg8U8aWLwQ8E3UHkqGKpMSBEhZ3zonPNfBDNY8qUn46s9ivekYt",
  "key1": "4auqE3XC9zzrk8DCNbKPCVNqzBvrvHdCDPP1seJff6zPxLqNbc15EZywqA3JwfoyEVb9EPGb1cuVSLFTbJ3raN9m",
  "key2": "4UhwPShsBx9wdpW2yiF72yJgLQ4vvZ4jbZVKDRcaW2833P2473ySX2pASzbabM4MxXftx5GQVf3SLpZzfAuaL1iD",
  "key3": "3YLZzVNNTUzSUMfvHhwE9EiC29tUZrfA4rCUpN2Jbj4n2qYbozXJAXXNCkqbwAcAFvXcpotQMEUgEEwwWBNmisGK",
  "key4": "5zHXwu6wPFy94syrfxEhY2yDKBgm5LUgXqAL2qqr1ncpuc2zHusNePij6Qjf5upB1H2yqVi73ubLKZT1SUrkJFPF",
  "key5": "4eDFHgp9D9UCa6cRhyzQA7MVmmzJ66YdMkDzKEqj1q48eeJrr5xPRYww9PeH6RPA6CvHFqnS9t49VFnQ1x7ACqY1",
  "key6": "4zB4PS282LvLTm3E4yyNHHKoukpLtL9GvLYC8u8haiayA7ze5NpZVzY7N8qN857FUSMVjkzu4tDMNbLZFXri1ZX3",
  "key7": "3sfBh58eyPsDxHAEUzYiCff9Uy9ZgFdTBThzreCz6wvoHVYrJagRKZupNawmyt9LSnCpcjPui6wyf4MCVjVdy7X7",
  "key8": "43SuFQi2xjAyDGvMtP2mHNNygwsjNRvUygqWfFVa1eUZahZQwJoawT6BpNFNRcB34gwX6FGeZTKehScvPuExa1XP",
  "key9": "64kfEL4hyHR6WB4aeN2buLQpuRvBu3TnY769RYhLSTSrCrV63V2G1GmxpVbURo2gyYn7pFhyYxtSV1iqZhAkptsn",
  "key10": "5yaybPxVyfYVhWkCY7BDwFPhnC5wUzE2beoNbTeXLwoWiixA9AQJXjNY8H5ELYk1ZQcU1z1MiMZhsAQZoiEpqdfc",
  "key11": "5kbFnPF36LUurCd9KoCZfm2GsmGFYNKiUkMc5NjtakT8ZxMfu4TuTGyRRReQGdrSu5v9Aef5s2T9GwoF4JQWLPaT",
  "key12": "2y6jmv5A5Zzqf6taunQKqCjG99ehh4jWYaxSTUS8xsqPncyigZa1inq6vYsBQSW1myVaZ2QWkVJm1ayueu2WbvrL",
  "key13": "Eo8iUa7d8wMKVTtMq4GxjKa5XN45QzQtQ9qKSvfpD2afAR2DPnTXJMcom3MA6inQooyt2tpkYUdSVeP6CJZmeG9",
  "key14": "2vnoD2YfH3HxUDyPKJLfhGZc4HP6zcvz5aj3jFWmn2xGrxFZ71tM9f1RN6ES8k97gxLgSw2eUwftzcFkvPvuYiyv",
  "key15": "3oqBvV59TYHeA5VzQjmA28SvqcHFNW1d88fJ1rEAdyuKbDG2BG4CeXkhxu7qm6kUbgSf6GEtmr6kKpVaaypr37ba",
  "key16": "4hyeUW8FQRGJ6yoPZn7fwUqEj1Q8i27oLwf1GUGi6ywCAvQ5vE2RtE4eabaMGEmbTM5e3BvciNE7ZhP45eJPiZdG",
  "key17": "458zzyLyCJXhU5inyKuizjenK2SJAXXBeZbHSE9g79cDdjj9iF3TLNihGU17pHM6MrR7RdNPE86EJQ1ZzfZjP9B8",
  "key18": "5SXUzoAnqpFYkTuRshuSxbd7pzsncQZD64id9HMNDV9a3hAkPyH4RrNVRCJPZkJJ5UAfgQEy9HBN2EkffFasWoZ4",
  "key19": "3CoUXcPqWR9Poa2fWdPNGpPuuGif2gp46gJfUWgjo8LkRCWpnGuaii1h4ByMwvCfqLifDkD6DpjgHhAfL4QVbrpK",
  "key20": "3G1AdDANRxVcs67jmmX32uRTZKcLToH3z9kuaA7hJbSAQxWcQay2XAs3iAwVFjijcZWrxhMWVkLyweP56fabnqsB",
  "key21": "HxCzBHVPPuNehMNCX6p1cJcKLPLjbTusHM4VEU8MVw56Zvvz9r7tEuTvKpDsmfKM34X6LoHKU3d7Rhm1XPUU9NB",
  "key22": "2yJDox3EwZszrDPiva8qtbP4K3tMfHMzZ5BiycJUtMMy6KFPXbWEe6rt4c5PUVRLsN65eDh7vjeRvL1M9Fi9y1Ag",
  "key23": "CEBgm6Pyr97YUawg71b4onPRkuEeKHiEAoBomFUxgB4zR4m6kB8SmVt1TTwXchHKJBbGjYNQzZBoMoYaDKiJLmM",
  "key24": "3DPHkYnLiQbib3zkd7XxuKVgRmVV7oh3NL4Vgknuk6cV6i548aisZXqL4fhDVP22Ypm3YNkUWRdU4fCkFtwdCfHD"
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
