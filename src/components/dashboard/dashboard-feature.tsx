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
    "35kk136BqNSHpdLPutmgyKGuk2f6EsEnvoGATbFLAus9QfeBJ23EBfBjjpiqYbHcv3E41ZSat6RdGkz79Ym4nUbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r4x3DWuhai5qU4N9ApDBzkWEju1ag5v3JHccRazFFBb6kCtWnPpr8auhpa7huBWwStw7dSbyZua8BcJWXJwy2pc",
  "key1": "3r3GEZK2mHHdHHAzHFjyUMNkmdwTNiLgTvKMMdq2QiJTotRgQk5PgExNKveDAinJS4nDV3kfb7AkYh6N5j1uSGTh",
  "key2": "2VnkWKmXkrLdzqnjihfWmt1UL7zLYsqSSra9sAoPmdtYU2hpro5i9mLT9J8FYggPoJJ3Y2v7MW66i4HP9dREqnNG",
  "key3": "5WUvdYgjLGP3MchV6vRHRQmYDEgpokpaj94NT2ecargU4kucpa9uvp2Vet5V4DNSq5XS4iGH2uwDCBezACsY9KWx",
  "key4": "3JS9KSdetzHhhg2DfUqZgdMUKr6rpcQdqMN7bi58qeLesssG3QzFN1Zd5U9fiq1KT5QrrXRv449siZCsN8rbXPr4",
  "key5": "3BGF7T8prc8RpJ6TB66j64k7brtbauKadkZLNQiXnJmco5fDdfink6x4o7wbrjDBgyAh6D6fPyAkgzALtndwiZiT",
  "key6": "3nPHnfyFxTwaa7zgarXdcu9hUx5w2udhcYrndE5YHpLTt4PWzCviNCoRJSQ4z3qGaydvBKLWbf4J6nts578TpsSx",
  "key7": "2yQd8p7xaccE9aEr4vZ2abNoocButAAZiLdnEAX8p2VmtFRDNt92ZVhoQiSf6RoEem6ZQWt9iybTr2rfs6SfBkkB",
  "key8": "49sHnxKVwubzoTEH8oLH94HHSqyVr5y8U7JbU6vj2apYsGb1PdCjtd6U3sMXwrQEi8fJ62gG822Z5XxDDghRjTP5",
  "key9": "5hBd3uAcZcepHgG8WXEyiuYrnKcu1voYhYQxKRM3eLFDMUHN9SicDwbSMNW2Gn45iKnbe5hEETxGt4JM2ns9mxo1",
  "key10": "3LcUnfa11jncW5jQpv13A8Bf12YxQ2cUuNcc5kkRufWftpo4p8CC2jfxBg31pmRrgtwuAHJXS1mS5etNXSvLL9Qw",
  "key11": "xF6M7X1tixFquBQD7eed3qWMim5HP6GXtZ5PnnvTcQRygbMx7SAHdZUYxhW4eqeEXM8YGf3gS3eTEyYBgaN1xS9",
  "key12": "YWPzPPxW3HU2TZXnfaGxGTEY6F8ZeLvstd48CiAhXumv6aBQ5WvZTjFd9fr6mJorQWF1E8dLUfDkVs9m7S8EpiC",
  "key13": "HaneCr53SkHHUzJYtmachseu6yM4pqQ6ffcHvffJUSacGguZ1Lha73AcrxJkzsfhiCG4ioqpuqTwBekwEUsCGtr",
  "key14": "4EQk1apsqCf1vBNbE5bdLpE2tTsHeycKBHhR9UiCkQcVhPgDTyCc4X1Hui4d16igaov2CxPQiLK2yR6mKeFRZTEB",
  "key15": "jpRVnoWfYThV4ivXutioDK5sLesuh1z25PpgbRMp1iHKZRFkLD1ExhodSj4t9dPphuHaLX7acpVmrhqZdziGyiG",
  "key16": "pb7RGGh2ATDYVogMQsfr5fs3DSkdBZoLDdYMv8EZU2m1F7G1JjUqTAeWhKaFPTcnoe5J3QSzpnk35GBp4k5WUim",
  "key17": "5HAbTRAT7e87N37oMnVYdHWAVqEUTJ4zERdMiA7junahdbHUJjyEYvNZsXhj5eXA4kyA2DeS6dM3tqy2tHf2g7LS",
  "key18": "5Nq7UuL9MUhULLe1dhWfANxwdJvQyekVWzkk6KeNXW2Ra5xAdRsbsU3P1ci6i4hC6ctUcGHJs6myqcVV4JtddHPU",
  "key19": "3wyQHCgDpMtQbgEmnCkPgxKfVVJ8o7RqFswHRQZFs5sBuacgz8RCHTyGGpu1N6azm9J8Kx2EZsDVrkPYQj5qxRoL",
  "key20": "3XGR55iCxv45SNUocS372jAkfXYwdSA4776XmdJjpY2gqQtUfUzctzCLPEMRMH1msfvx3AekHdpJty4cbxcyFdD9",
  "key21": "3qbGDxG4wuRBy64NXG42fF9NzmN7bPDLo9ao9cYUYtM6RYj4D8ycQWKMQGMUxQSy5p54n165ztsMDyq6GEBSNCvg",
  "key22": "589SR83KgxEEkwFLpDLmozJTQ1NuQ7LQ3dEGvqhsFfeuetru2VpfAJnXSpQgFMF5BV2zpMwaRtmnCcyYJyQHN5dR",
  "key23": "5ftxxZ3YN1oBXFrXUsYNuy6JxVws3zE1S9kkMutyEhUtTSjLtuVbkLJb7GdGHDVF7uUb6D4w6MCVZ6e8gfdZPDN8",
  "key24": "4y3AyCtTqc4cVohxBhoC1Q9ovbDdaHiMhKf7Z5ZAeeBbqznBnaNjePGMSLs5NB5jH424ZUKaGp5jgFp183GHLCKC",
  "key25": "27WhgB9r7ocmwzB1e1tCVzNeawtS9NVjA72aoWYcTwsNdU3h8LHefU3M4FLxjtBx3ACvabewckvscVH25GW3NJzQ",
  "key26": "4tjbfciK699uhwnZyFTdCyfHxnFbqZNwkiEUgNHe8mASZKhbBD8kD1rNAHCZGtUJN7FGrH5g3PharHpSLsiaX28w",
  "key27": "45rt1o81ip6aUMkQRU98Q4iwaWuqjLHrkdeLta17oeVSJtmovk6Fiv4rcPr9sKx1ZG4EWTLxhQpSzFrsnjnGbdAY"
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
