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
    "2JiNEdsnBZELXWVGJWaF6FMMwYRA1HMbByjYTUCvzB8CtoJJBYxuv81GfQzATLTQ5cDqoH4LHAH55YDcjzJ4Y4nq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vtLDb7XgFurEr1pH5NXPPprgKMKcTgtvHUjFHmGFxoaNCH7JtmTsJNYvQgVCkLystwbg3dT8NQbE7ooYyiydMbo",
  "key1": "3etzNxQztbL2y6HhDKZ7Bw9Judo7d31iVVPQoizWcSgrpYLREpFDab2mM1jYZxdi9a48R8rRfKUgn6NRY7FKC6CM",
  "key2": "4YnXEDnmAC71sjSveYzGMAMvXFGsFPPKWiPVPFbdukFbya5WV2J5ovaitFvbsSBvfW9FFo7orQFn5p3gNCdMQnLb",
  "key3": "2LNaQVdbr9riaAbox4kBiDJBPrx4y54QM7oo3e7wbzAvijiYrwv3Dc8Ajh5SzQmcuizaZ5PELdNYC5Xr4YoehTCa",
  "key4": "4f511J2VRQqLZb6qC9fyeCzwHYXLwhSibFGCjqdTmdXr7AbR8G8EEEpHwU99y4oKYpgLQ9VLeVYFZsDmXLAjjWA7",
  "key5": "45CyJvMQdowL8ZzeBLaiRUMVBzx1cwc915EYowHBdFRKDokV2tV3j7GWLL26xsXUTarYBnEN6nCqDXDVw1VFQtJV",
  "key6": "3wV3UduxR5RNRsfnyFvJd2LAz1V1X72Kso3bZ6qwxcKKTNSFUBupUUjpUV4uE7EFYdiYcra4H1MfybYWJsVaLPTp",
  "key7": "NSFfgSBUrsZdnvSzCXyvU9pw5MMJzJgfCuazNgMG7iVEUHwyy4uEy8KTHoB3H6VsBnpkbZtGCjDbYxdVynYGUES",
  "key8": "4q6pNUnBK7BJRPT72cWYgjn5uWgm28NnmHZegMMo9H9XmfvreBCwSS7gosQM7jEiTk393WD2hYDGBMnJX1hXnEPi",
  "key9": "2g3WLB8m4f9mdpzbQYUqfrQuM4HFrbo5dq4WUw45FU3zcVRLTWVYYs5Ck4a3561d2uY6PWkBLArrgy1oNJwAAKzw",
  "key10": "3VJDgiKXaxGbuaQ6vaHxDQjCSDqYJcp8egZ27k5CGaDWp5yzvgkCdEiA36KHXEDjZrW5Ca7JRFBS6X2VHYbLcGJK",
  "key11": "2d8rZ6yXNoBCCby2DQ1rUZp9eeVoknDqXrdLzqvdvDTQ9h32n5krXy4QqHgjvD9JXp9ECQ5UUTPYAk9utLnmMYrb",
  "key12": "ZmUhEVKa4gfShGmUChkhZgmAn6gNB3nBdBaTmBbmRw4pxCbEnWxDdE1CNU1RaVtdMbhR36Z9syMiGoJukGiGBvf",
  "key13": "3FTzMGueB7VT47pmSMo2ZWCZgduYZVnLeFfz2x7TpqZ82mfc3Tu252M32CN7V973b6mwmGC8R6x3cwDCZA81hhzh",
  "key14": "5QPZDS758Np6ZFLHHehNwVYJ9hR5EirGwJUGSKhCDi5q8e9b7if8NjWt1fKMrX3GqoHNUTHdmwCstXVKCfHS4Uxs",
  "key15": "aswCkgz7owVWcZZ4qjAzxwfNNriD3p8TZdtMeuzHyYrXrMYrHKLPr2s7awNCBSSpft79cEqDZy1jwttxzAE7F3U",
  "key16": "2Jo9kijhFKGBKXrSEszr6Qfg2KaA3RBd8sS68x4AZgXYD7F5TKrCNJvWNCrpwrqd8jVVZpg3T4fUR3uXGN3PVtsq",
  "key17": "RTh8nHF7tefBACWsxHnYXiWX4SCE9KdkY5B3tK6xdjwtSiSZHDtTT7AkH6BprdETiY3SSVySwkMkKVHYJHctajA",
  "key18": "26J1te5XheLJBVBXhsuc5bMU2tGt2DUTsMk3wXjg6zNVWuQtEHS1E3Kz5j4mpuJ5WWfMRPeGniL6UjSefv3fLsDM",
  "key19": "2mhyAAmxtDkNbEXY8FUdEFRCb6vrub9m7BgLzBAuyUoQGdhpE25FwSs3bmGLk5jpe3oqmNmEHiHwztpmAphMy2F8",
  "key20": "62P7y1gLaXQi78yL9yohJi2nYKv2hfsdFeZ4xTzGCcmPvw9WB5ZrVtkoX5ds8j84kZS5zKJEhMqABsnesNwZPgRh",
  "key21": "3t8WGu6ydyN1zFGD3i7ZCA1sH28KkFQBkHHvYf5ggsiykdEytwuGumFWHjWBJGcGbnS34yXjNctAjucKCzm8mSRz",
  "key22": "RJXFUh3LdPwyGXgAZnaxuNgv1jQw8rDPJEgPHdRee1YKo1u1B5hXgctW49GnixczrXJYdwCZtCtBwAYMJWXn3ed",
  "key23": "3nYaksW1es1MQDti2n85tfU2ugMcmS7KPsCDj9ng6SjXPXcFhe4p2BNGmY8mxJL1idk2QvUUC8ZKzGEV41YoKrvz",
  "key24": "2AfAM4pVnNGX6AkZ41WwEWVpPXY712mJgrB9XgBLJ6frFtTm4WsRL792D3S9UhkoY4nZHCQWJP247FsB2tYSmzz5"
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
