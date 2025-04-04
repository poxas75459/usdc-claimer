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
    "54QvW9pomjowxhYVZeXENuWPYD81WQyFhZVmU6PFLEgbgQd8D13qctQv1PZymdP9pCrCdCXeLmchMDgRbm6wVKej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G2Eysk4VB6spwgeF2cuBEki6pVST82ez5wt36ecBVcCJbt2n3N2a19mi5iYKAwHJv5sJUTKyktJNwUFuoAGbg3R",
  "key1": "58SYQp3Rz5QES5Ym8cdN57f9CwL7dgepTfGrAn4ScF5ewR8kKb69WMjjkzGMm1Z4y933d68jgXTxgs2FdJSjnyjF",
  "key2": "5jrPJD7KJTP8NWmtG3599Nb2fiaC9fNdzJytfHdyKiN9tQnXuDiYLNSrgScX6Vux6FjyNE5VvG4cuwiyHsB9oNQa",
  "key3": "3scXoBPb1Vyde2E1T4jnMumJRTkWBoo9ggF5DdTqBshXtDdfoWK1uSme6riw1tYbktWPyuBakX79w7RgjxGfasx3",
  "key4": "28x6QfycqpwCeqkWpvvBcfvXHtCe4r9En1cheBYUKsVyaPHCq86vPFt7KQXsGYSMoMnkHUYuPPF1bW8qT2SnTsRh",
  "key5": "2e6hh2NFx5kQttcBg2ah8BVHh6A8aNdx5pH1ax1BVapXTjqVEhNoRD5R5aaCjVSEg58Jg3cKMqAp4cg3m3xMiHVp",
  "key6": "2GQoYCoUrzpfT9RzYV29oK9yxr9DzkFnWd9vep7jufJbVJH54nKJsV2hHoeDxw6EoUBbr6Xo7jtxVw3cxegrksNz",
  "key7": "3nw3HyRdm5dmCmWf3HmtusPrZeDXTaRUfBK9WY9ufozphChnQhvTZiD5mZsxF4hbaoV3vYHZPuxN3xVwQLw4Rj8D",
  "key8": "4Y4dfHrN4uEKdauD1348mMZJXe529GaFxoLef4ggwnAdsSJ5HD3rX64WSAoVZQpNvkw9yokRWk3w2bgUBmzMNXPa",
  "key9": "4koAskxCWzfXSP85DRTV3UcrvmGLJCKcddgzamo2oNq2yxMK7FBBnXFP6KNRc4tMvRxGTe2V6hiTf3EC4CuznfzE",
  "key10": "5kiERJ498NVpWdSCJ4wVHKLX5qFc4yfzBt4tCv5Ed295LghMi69U1wqZhB62DgZuaYnGMjWmJbtfXCJY3cKvLsGa",
  "key11": "2dLpzfmWr2yLp6uQJVbfncMRFTq9HUUipkwSmKX8GqiicJfFZZn4pgX8AVxKCdGGVDqRMyaXQJJ6YXi7oTzhZ5WM",
  "key12": "43oR6A6yGRWCZsejy7n7fJ545cp7iGTLuZnZq254JVBmtLshUtyrRzmQBzzU5EkoJb6jmASTuFUDUKBpSMkYSZFn",
  "key13": "4KemdFKiycNEDBB1PHqfs7AfMDBGjxVj5vCPBMpQHZgPBu7hkKQDfJmErB6ARQgDaN3vLcbrhr56R3m7QkhDd2gx",
  "key14": "3oQxQXqqJLTxH48y3HgDJNfPDSqXoJD2JqaiSydZvZ7RtCaHQYEq85kxicpMpm5TD1qDnD3TFd3M2AQsoequRVG9",
  "key15": "3YE1R1ntNzMtCZ4EXy2JznjmNz96jL8EdEZ3Mov6R2XPnvKr8eKofCwYyDBbrz6kPMThDdxaDPuzkEMTSDpeHVjr",
  "key16": "5KRZgizrEPkbNaPLCyJ3KdmY63zLbM3SWu7PYsJKGD2MhymZmWue7Zz76E96Wp3vsW7UMw8KkjxzUuEeXEzSNEij",
  "key17": "zFsuuxhadmCGCaz9ETQKjrNvwtQzpyDPiQGpd2MkhzcGsMTMBAgEAPQd6poDJYJs1imRfGGqFxXPtfS2d7LGKmh",
  "key18": "27TpvBi1pouBrtCS5ozg9T8cEbHR5axrmgUwFwoM5LC1R1XBf2V5TWzgSpb3ox2kfqunyyvwLEzZDUynrKGMTPHK",
  "key19": "4mTGVja5PEAZPbnpAJDNQBc2bkGD3Usvs53FuH2mX5sgM3fTZhYZBaYrMWKiqxUYQgt5f5e1CDKLRe3DAgXoBYov",
  "key20": "2qu1RSqpd9x6UAkv3SPod7Nfh3ngaihBGmAx5cFKhbRYckJWV2CFBNoKEPZsfVCENSQgf9fTYX9LJanLD4UPnNi9",
  "key21": "47VVvhi6qj3fk26Kp5kJ7tNUaySKgKFWySpm9uRsY7FCQAE6w8xS82TCiuujptNr7ZNKaHLbon6HvEumCxsoJPo4",
  "key22": "37XKKpXyqLF481EWRpj2ckKgN6ajhg5t1yRkFrGUvoBF9DgX8wEKbBu9riTDAfFrWhuHengohZHUoVoqxDajN7Lw",
  "key23": "32tq7vjAXiAGG9X6GXc9rdU4MZoP2RqpzANx4V2UMFqLTwAA3SEzKCFaBBy4UFDkKaNCLtpCrcTmnU8MyzTg59B1",
  "key24": "21jxW8EtRbsrNWsbqXQx7AJ3BVJ3SA8fzyBVcEYYMKPLL5AnQPTamVJW7X3hmbTewoVnFBU5gC5m2nVX89c9AWTn",
  "key25": "spqUrfrhXFbN5uy9BgC5F776K7Ws9oruWL2ypBLhmhG4XAvBV1iu6uxM4y759w26hwUKbujRgC3qUcCgUZBYKHA",
  "key26": "52GXQ4pSYwRhY7xoXeG64X8ND7tvpqTN4U58CX6nP5SHRxKmSPN2qpPrkGeazZiUwFataLJ3fUPL7SV7pyMn1cgf",
  "key27": "43FJYtcxX1bygBjwASr9Fb9JaniHi8wVv8dRDQ5fANu3R17CCvgNjwx3mNaVdyW5QwApCT8R4iyr5ieS5GgSgTTd",
  "key28": "38BRHVfWrYQwUgM4V4jLu1pauizFDoPMHsjkC1TZWKB7GfgNp1gdsXuftEzDeNzJyoB6FCNLpDmufBezfYgvzcew",
  "key29": "4H3mgx51JZdyPq9cxrqdKKSHC5cmfHz19PuNiGsfoaD3Zm6WzkJxB4KPMd9FF8kpUeJrJZn1LDALDYbc8ivRgiXD",
  "key30": "2KXtJr86FFjq7zoN8VGtuPc8EEQRmc1EY2Tvi8dkrDynYTFmPqVShqiHfG2MyhPdUpRaCazqXRB5TXKuuvT9VgMf",
  "key31": "3ZoWFMoRJFDTfLJuwLMaskde8QyZFB4XWBWWsvY2y6j8nALDv1WtipQbsekeBKBnvQNgh1Ej53VTQJXi9Vu2oPuY"
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
