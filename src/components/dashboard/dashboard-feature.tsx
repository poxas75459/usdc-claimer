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
    "46FqfqppCx8tLY2xdEPFpGWgfpfjdrEUkBsiBN6wtH1pm9MydE9647zgxEJzPLDR5ZpUyb1aEMeVmrLTqy86ivNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DhXG2Ub2dsfjYSCZuEPtYrVHjjH5DP6zMUU9pBVhqezsxHFDEmWLHfCoycagCDpkSMtTin4TyS3gmsvWunfoaTF",
  "key1": "5KViE6DV5qPvtkEXJmXRfeGCCd3B6orUeVpJzgJhFJV6S1fXJ3hg5RPKcKrdxP3bMbWtFUJc3ByvTYL59KYwNR8R",
  "key2": "5JbYRhuFiat2YXMZT8hYtYXZGb49WVvCX5Mzf3zAzffp5TbErwpEHPJLnurZV9UnNnjQGxgtxZSiciBEC8ZBxcL6",
  "key3": "4dFT8iTvF5JztQsYaxWaGZ94h216GPHpRfRKMb8tV23sUi5XMANEAGJMBX7wtFgaZLDoFkjwd5zpVxDdGRSrRcT2",
  "key4": "4HkFEY7zbU2vB5dq38Vp5fjQHo7gXDj7TyoXv5rMcD9yA89LVDPPdWhWhNAu1kRULXhRjShzTYrg5NCwqPU393Lg",
  "key5": "5RRN7K7gfQVD9yWiEDi3nwRmJVQ5gKs12r1evEBfizGqkSHvc4gsSH2inQe95f3FGVAjUBgW65e4yccLqzHx14Ke",
  "key6": "2qS2XAJagrDdVHERhSvPH7QHjYDdYZ6iFRndhbbJTWgy6DepcsLG9yrTAa24zFyLx7iFpYaixpvdUjxNhAzyk2E4",
  "key7": "3YjQ1aXnzMNv973Kc4u3RmpJzvrMUsNSXi7SAdqmapSF6jRz2AVvWLFjFLZFtqKkWgsVuZvrfAUPVNUATxbgaaGT",
  "key8": "22RuxoKvjKt4DrMG9XQdr3mL7AuoXzNuBpt5ku6ohfZ2iXeEQyoUehoXEc2N6tCwEaXeaJqPtB7DfzhMXSMEXjvJ",
  "key9": "2pYNCyzoQYTRaqKcMCJsrkFSoWauaib6RtTnQeN6LDddnmgBeRoMn19vdxHNuMpEAETeChqWNHyJZx7a3U1exXam",
  "key10": "5X5u7mbgxs6zJ4GFFyqwFG6Xr9HSPRrDxBgJn1XF6TXwCrSKNAxFHbxGxxMCo3kUZQ9RKFskdmscJHzsXzCcN83Q",
  "key11": "5D8MmwpCp5oFMrdVNwtRMcMAawMQQMYPYAGdgNJyiuwWEzHbBUzT86QDa1temuvAfRSdjhmFfcwiQzZK8Nuctpsc",
  "key12": "3mwK6BbWQznwspzpLME6MGEDsMUwJiN7ws7s4kwNsDFo5rCfKazEpDh7Dm6dxRUakPHrv23DivgkDgLX8jWAdL3D",
  "key13": "3BbNx56czz13CLhiRZBAjyMYrUssvEuY4KRbXDvpGj6SzNWwSdF1uneHufrxGJHLr3gKJ5zchTPKq4bCx1cGfo3X",
  "key14": "ZzP5dVDseyJytSqPRfxXrUhTQ3Xdu2F6rdF9rD69iUbpT4q9DGDAccUCUcr2Aberp2m5pTefX2LZDcAZwZoiMUb",
  "key15": "4StxKTtzRFiP4ppYbgH9BLs3tF3k3dQSpMuU3WVt9vtjjGUTxHBsWwnef2kVfBacDsNRPbmvR1msX9sNdri4135q",
  "key16": "5EcGs8ZsHLTGo7ejYRDSsei3aDEBmi6auVUddfAdxiUewM88c5fWktWoxpv6kefhLrekztfqzv6arsERcfzdCT3C",
  "key17": "5X7NpbKrJcbyziXdoLM3gKTgFz1z6E2dmK5QqbXT5qy3vzL9erbwPj92qAXgWE1XKmriC9anEdHbhoic77NBSqr3",
  "key18": "3pZE9gKqyup2dUkbTBRXekTjwhWk3zfi2mAHAoyQuvhSGEZeaZSGf9G9DMdLWz85QWeVHM5Q54G4Uqyr4zhkctZe",
  "key19": "2SSsnHV2BVxPXdG4rydwG2BJPZTLMpD25bqUTEobgHroeSoEYwyufvCH4Djj15ugSHduM2cVTb8ukmwQFvjWDja7",
  "key20": "4zKjzEDmurxNishGSXMikn9q8ncPStZ4ifaSeee17kvDvWuEnNCf2kSUWtBMYrKxbzJbfC9QWQcboS5wGFoRzMzV",
  "key21": "5k9uzKNqpNbGxzvrBt8yRxc7uApCcFnqh4XNRCUT2WpoF4zRjXkQxdYjHv7ptSBpwUqiQzJJndkZRMrPj6vjonb5",
  "key22": "5sdArhjmCPL8iDoMdqQzPTigyArFgWWvm2SAEw2jBnqKdGrYtJTjpwKrVpmFH9T3KHME28VdMa1GyFkiW5q9M3Wd",
  "key23": "gkSCprdjA7JzSMtdKUGxLUhMtVeXBndnXsDXUgVNGFNAtt5Hr8T3DXZhxRDxzusTwXkinPSCW3F15PDkvfLaEaa",
  "key24": "GEkRMGruk426dpBPQ4MARaUdrvCDzqS4DTeUGspnojLRfnRnHQhWSd5P9HRqXHwAVUPDTXe9NDdpRwMSkGpHg53",
  "key25": "M62jqTrfmkgewTKaCoADpfnzCGo6cDkZpkixwk9xsdrxMZbjKfUu2F9CP9eeXUqvh542sT9JtipLxfotQax1EbF",
  "key26": "4sbQUkGYNSgjXA8MaBELoGsijyZypTiRSHhaektcELT96uKf21apYhYDyCeWpHBTYaatsf82dhKLE1qp6n7oWpGJ",
  "key27": "5RnzyuarPnij7V7rBEseiM4LXZLuf4btcVPSYU7M875PiYPTiJvzCBpWTNP2LXTdZwXGdXhtL4htQNAWGtMQvp8W",
  "key28": "4TtohWdLkhFr2tx6VPoQAZZuSsRHMkbzUgynS5FcYvkVBeE9o415oGSyDyrjnLbMuSJRTjgrgNy5pofZsstACxdd",
  "key29": "4Disx8f8cMz7hybaNQbmqKHcmAM4S7as7f52KyZ5DkzdLbykj9mriDkpZiuggJ3fHRwiYF4oi2NeEkJJ2DRKQ8Nc",
  "key30": "4vHkaEVtAjCGFtrCJ8uokjTP7nYRybdsgFiernqD9CJmNLcD2QwNYXKDx8Xh3PXnPwEDXNKe9xNQntxcqUugSJ7g",
  "key31": "3sfi1Mye8NuxDKo778xPnq6ofFxd2eo7uJ69jgtue1svuTjiS8bJNtTDvjH5ayvjFYhG4ZbLvLdRWdYcBLBsNyNH",
  "key32": "5Gw9xSPopzKbmRJoVzAsEEmv7Sj6LghHc6xLYMjWLa1G1o2wyWnuCqKM7yzo3rwrN5FGYUfNRGkvy6RJ6NFQgapf",
  "key33": "vnhgLFAJAttQi9SRGhvWhTaFgi3tLFGw8GQCej3PTsnAUrk5Pa5Crz7s262a58YNmhHuRBatoCCdN6JcbKG9654",
  "key34": "2Z8co5PuFPCRXE38GrTGDUpR2CcF3Nzs6coSdQRCpyanqP936K8ULqcee43HhmRRkFYKXRuwmrjMWgzW68p2L2MH",
  "key35": "4L19mfTKqZrnh4C5A4DfKbEqmpn6Sjp99K451yyspJ2ocuWVoiFRiqWgASAsGAVXJ1j9Cm9uT5V7EZtrkKHBR51o",
  "key36": "3UnX45vnAQmfcMCUVHVW1ubvqsEwxV6va2FQBMRAmPxLcttb3XsdsK7CuemVryFTzGhSQiXCJ3K7NYeBjXZS2Qbx",
  "key37": "3XGS9znpkrEAkmkT5RtqBWoNoaTnDEwF7mJ82yxqGdksdCEyMtAUXEpvX7G91yciPb3xSnDfUTw9ZUJZrTggZ9wH",
  "key38": "4L42ZVEkufmAB9NawgUU1RcWbMKVTUqBF2ftooEte7PE5PRdYfT6gYpXD2K4vrLAKhEyNgyhdvytTu4KXCtaRje4"
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
