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
    "3QJUw4Yv4C6dD9zGXJzbgy8cjMfpDqJBzhg6ai2RKGugu3sr4UGTVbK3BqzT2HyVwWdvRLx9GX75HvuMcJtu1waC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N6wRru3eehTp6rPyQ1CeaTe2Jw6pxNT4xM1m47eWGUFyieUyfPSqTq6ukFoWsm1Zs5LGGyF4t97vhnJMFcPedCa",
  "key1": "3gR1evwsZJAKeCgLYGjtNDz2YVTi9Fb2ozL5eYAGCVtoQJmkFRzVXn767XAEmMsYfphEPZv478XAAxVVJchLT4GX",
  "key2": "9WwSzVSSEDBNjut536MmWNXrmrFwBtNwifVXXxiSmZdDG8vHzX64QbQSVeK7PCTCEEntVd9WECL5R59oJ1SLNGE",
  "key3": "NhyJcLa7LjpvzywBRQ12uTNDUs6RW4KefMPDkSGju7G2evTqXNor6CU1vpwqsBCytNEzogrusKmS4sAV9qjU7NP",
  "key4": "5vCM16gWHWcmZ3xoAcTT35n2HsB2jGRTiXcQzfpSRSipRg5LwwxxutCvZEydbeCnkjSe36oUXbeLN2cMQh5HonDF",
  "key5": "4qDogzxqTadFgBucpJkQZewjvgsfMRFsfVLQQMDynbM1Mi2jVJNgjcTrn4nJbqTLNtU37bx2usyGtPicsfiSdceQ",
  "key6": "LBvFrGRcberJUY5TN13QrokZdrKD6UqSNJWRRR9Cn2eBFHbiyUyxUsUzHdeSSbSvc9VxiFhhGqma6Raj9PK8j9A",
  "key7": "3XoL9iXTLwvpWYafoa4EqLJZb8MZz8L5DQDp2LBTmN332teVpvUbHaWt6kKia6Eoa5hUasw2n6pzXgLegnfdKAFj",
  "key8": "2DjhpX9ifRYFfvRctccALVZURPbC7f2b92LPy9JX98rx4qMQfHfUmbVj1vbpb2BpJqUVnUir2L12pcTWAMokhRNi",
  "key9": "25FnQxyvW1F7eYibPjf8MV8ST7ChpMNvDBNLmwcyEChtKKtbMQCAGaL6pgpY8965zavgNokUQE7YREBUaePmdwXB",
  "key10": "2EdZaFf8tZma9YRJzZK2YeVjCAaBbw8nqF3GxtJsVeorR9RCaEVWKzvgRqwtftS2JYoWBNPBuktvxB4fqppz3H37",
  "key11": "2PZY6nCmuBWTydziB6ymZ7WqqnndcfihKfkdiNYAc7d2QUM4yVd7q8jCmpBP8gYGwiqXXR9hXhctP1AU3yc7Givf",
  "key12": "5zq4R2FGUSNUEub2QFmpuUPziDsFm9GbJDtDvyEjauWTwSGbouWbW9kPtUP3hadqQM7j4BzYNfa1iwVUtkj56Wqk",
  "key13": "53iNj31usntbkuaWN99kz8YhACui1wfxBJANtDum9ZSqBz8hax3jDUSvh5oS67cfQKKsvD3uynwRUHxNTciF4wyk",
  "key14": "aEKj84yc3bzk93bjhDCEAVBbs7vZNxFgmcwq7cjua2FRkoMNwHDKL9NiaHn8o9f3zYHGtgpR47EPuQeCL2CVpfa",
  "key15": "LGZZxxqmJMcQvPsg3oWgq8hfDkCKcQcdNrWsLeYGCdDVPxbaC3neDBRXT2wmtMBedMivvKGr3wHZkSwPwmYaSou",
  "key16": "55jGaxB3DVauyUkDk5Goro5VnN77U4HmXFsMgqSkdEFmcf2cr9x71cHUxH5NAMiqhBTBZKFFANLwTtwdHyCee5wk",
  "key17": "3s7Uy5ZQn78Fj8J8fRqHYjJujPnxd73EU6LN6LpjyAUCPN9y9R1GQTt5CyUtB8SPdAraS6KeujqfAPEJhzqYiC12",
  "key18": "5K4JRr8KhPmCDe78mBvphYMTYeXG95vtjqRnsmWyEEp3g2VTpn9Proa92YeUWGvVrbs87yW4CK7hFw9pizCR2mVM",
  "key19": "3G4dgyQTvVUdPqGZgCBoZfYogJCZX7uFURh66m9JNG3iuS2hWNcj6E1BgGcAzNjpC5h6G9q72Zptw2L4VJUircMf",
  "key20": "42mbdjtyiqc4DYG4aE7XZZpiUVsqcYhNLgzDJW1A6orNvYvngwcnx7sbNiKzbrWjffSMkRgqBgvrikGUK95ey4Ce",
  "key21": "3pGxFVP7CmiinAiSNYWnySHeJdzMYJafFNAr3ZbpxsCayQFScJTBvRcd9PE5KYo6ifP7ikokCgP6GfmriXV49cps",
  "key22": "5aGe8yWVwq6xz6XaiqSTFqbeAaTzvRjbRtk7Wkfpu73guUqJPuEyFqEF4DKNybHYy9nHxM9t6TN5jo5jJPiGH3iF",
  "key23": "AAzyW2cev8aATzhNxT51av8aCTK3ABKaUm3uoKJcxT8R7gp57A9ZtjkKSPRDSaHT1p8CHfuHM2qnyje9L1hDf89",
  "key24": "ZTgEFpGDt8pCmWdPdKQ7zDJkYhA5kPf58qCypC4Xh6wras9MEzdc1f8hwuhxVs8feQQKtr6eUSdwVmw8hmyBZ1y",
  "key25": "5vYhgLNHdw34ksym9hyTFaH417aKsvGmhfk7sZsUU5ydRnLgN2UYN3YEZG4o4vP3PaHT5eySyEPWHUsTNwJ5gmSy",
  "key26": "24jD1J35G2ChpYM9AY3xExdvefVnbiC9xu5hXuNveNtAu87kwSBwN5xBV92MWzcMVtvzSub8wKAdemwmvf45Bxyx",
  "key27": "3aBgHPCA7gqDgDi56WjhoQRvzow8xK6LFnWBTLwWvtfNDykUEmkUQvMS8fPpvpPdCD5CGHpj6qie1WZgqBsgYYd5"
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
