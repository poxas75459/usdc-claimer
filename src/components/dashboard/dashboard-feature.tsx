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
    "2NBrUuzbHGTo6TaZkwTmCoGfHMHu37TUnXZY6pCzCNXYpxdqEqe3DUnKjZRvANo7yj5VBdqFixFwi2i88L6rUiHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yYoZMya1pCe2Fef1XzsGeVokxiDLcipvaNNU7zGtKyWCpTKwSxGzjZS6g8U3DQeL9kgob8qR8fGP12VgkVfnJUj",
  "key1": "24nsXJSRkXAQMsDosh3E749Dpo7zxbxZdQAB9ZxxPBKgmaH69HGDFzn3MY217Rh1j6ysupH9vT9p1SbCK4gFcHia",
  "key2": "3n5QQwbMreJYhiqiu8pqvTmgqhuUvKP5ELqch3fdzVyYN6VKy5HWnfLX26hPTyoPbrRorug4WRxZqxD5MSer4dsy",
  "key3": "5kREKVg35mSarNepmmRC2k5qR58jLTvtj5B5w7TyqXqTMmixmaKXh2DpCecvbU3RemcUdccMVXoJEFA2DBeEPVeh",
  "key4": "5Rk94KLwMknEqY1wD9bRMUrtXh36VTzMDVfL3Yqpa33T45HADD3tuRZ4xnKYNUo2SGXx8WTVjZL2bgVM9VXqdPsk",
  "key5": "25WrggQffRLFfehRuAo2gBNQzNdpsxgMp4rw69xfuLe3Mcyaj3ZTRdw9x2QtBBQMhmCGaAXqSeGPqUaMPqUVaxfA",
  "key6": "5yT3u3WFQF37imBZaV2DwBDMwQoaNbwYc8FBidTVcQ7Qq8KvSKxoRbMZKLkxvp8yjikJhwheqCpMh2S8aimdMBaA",
  "key7": "2cuvZSfHy9uw3CCgkAHkjudvovCNajkQJ4mocXHRX4La3TsAwoH5VfaScYPviYptbAHgdfKS1A3C48Z3G6gyZs73",
  "key8": "2kXtjTjkixyDdujA2QhqvGikJAFef9YeF4gFPDGgj6bbKaVcz4ZV7vSe9vQ3gM6k8CCeq7aEfXNRLFitAwrVURmP",
  "key9": "4oDoUmNE7GeLeR1omVUR6LtDB9dgNhJHfWygTE9257mA1oxKGGZtnJ1j58bt88FdpaaATB47c1DUmmFKP8kwuqTa",
  "key10": "4y1EYbnuwjPNB4Ro5KDRDRSZmkRS1hMqfMCL2GEQetbyMNWQiycwvDXmTUpaMa7kYdA9miBfjxroWSSHcpQwvFW",
  "key11": "32sCH5d3aewBu11YciLKWo1vypE4XEe8pH2JoSCrxXP2ebbrGJdeMDdJCzvBWK8E2StTQyJhbLT1XHXiWZY9PoAH",
  "key12": "2AbHVuRothVRWRjp9SzEeaTozVq5JMJvdgZ19cg6eMRRfEtAjeyGTZZqnb6LjBv5HrwpFCS6yePe6LGLLLPd3ZP3",
  "key13": "42e9dehZV5CmBv3kRY4nFFeNGPRUttz6CoGcX3xFkbJhS2jyMSWWPiqfRSWkg28YDszALoxkseb7YV6dJbiutLwj",
  "key14": "iKZHb54cVaufJFzhiT1bsQwqcDNTyMuTUVB2iztgWsmxQRJ8fSemLhXvgKovd8gbEesE8MaRWKHinr9HLKSmkve",
  "key15": "k5oGBiC7FgzJeevGJ3ubEVzw9NYUuKZixwumg2bR6BBvb3Wni9tgbKXAursEfzQpLVjwhUckQzMPFFBvbX2QoNT",
  "key16": "2JRWfpWMibq3JHmmbdXAAYxnQ1GQauqHKHuo9TH3gR8mqJ3Zgno31mxBEmmyjv8dPXG6JAU3RSBPqYiH5VsBMoa1",
  "key17": "3eZpceBugqZfZ3wGeYQUJ2cY7YSqmLo64hq2Y3m2oZ4QMKa2LgM7kDH85GhFeHfv2GjDDJ5m8bDKozWmmdYbKJ41",
  "key18": "3wYwJZvJCgPcD5kmsCzHNwvh8g57taf2s2zrgKkAGd99c735c5K39KHn1ET45xVXnCAUXk7rGi64w2ASqrE9dXV8",
  "key19": "4Cm5o8EwAQG8pk74L5m4K8uarkUBjAV9kGXL8eqUXe1dUvoE79MHgCXEGK1P3uuiJtXY75eej4e8vQ8KCVyB5pNb",
  "key20": "41Jnq8oujwWwNGTTJnVP1gD9BNwjasg6AKvQpfxVbZ9K7343Wjd2YK8PeLUeX9SLMkUbe4YidvfSJnTP73vT4ekE",
  "key21": "2FznQRgqm4BEjKQ8qDx6DEdUuen2vt48kj7Dk7wfTPpovihCxzfYThzttEoGcTJh8bPKZ97fsdmKfHFwQeDQAGfu",
  "key22": "4QURijyLpDRVbW7smDcLhYGHmaD8rLmSUs23pTLgKNZn5qJf7m8ZrEdgx5vQiV7vhXdiXFQmf7WE6fiUqyX8kyZV",
  "key23": "6719Z7Ct5GEdT9nMjPyAy4Br5zbQVzd4v1g2AKCsuDRRu4CQJgs8P3uundveFag6169yjcG6fTZH4omE2LxcSPRY",
  "key24": "5Z1CkrgqBPdvvVAbw9zyZ5n4exRB5GZc6f9sCfqXiTz3Y6YfhbpPyBm7AXC3eEW3jf9tJCTzDEanki7SjL2PwHTa",
  "key25": "48kqb5isZmENqNQxGoKA6dRHqWB9DNNVrPEv9W8rTcwyWLha3r5eTVCQkvEtekt3yqfbn3VTJW4mNSNzLpAkpVLj",
  "key26": "5RBf9SuEVh1d39ZoESPKzAWnH7KqG7CJMrv3Ltnr35jH4MnhVgk7Hw38ycyf2PaM7MquFddFPsZ13ENT2PahYs18",
  "key27": "3scMGKetBn4Tn5DWXGwJhJFGTibVZ6G7ctnfWgEsvCKhuFL27j6MhqYFmHUoePwHy3n258ZDSkH7fnNsioBWRASk",
  "key28": "3F47XKgfxkeLgjyfPGEEvT2S65Bi4DcY3P3mbciGYBzKGJqoPd8KVcTLpGBWJqPpAayz5Mpx1EQKnYDKCkSSxRbm",
  "key29": "4SvPKPpjeewZwtMZhYnfSGCfDizAs9PNY79W8kQtujLmSpNBLSdUrsv3SBMJ3w2vqDf9Dd9ryJoLm2kC5NTQMdQy",
  "key30": "2iLXvFZCBKxGrZWHAo4qvMjs47bQYUnsYBTMtuHyBsKYZNfMTra1giFjHNkmPeyUCuYmBAyZSnVYonv9LjH412N5",
  "key31": "nNb7YgRKntPwN2h8CwTejtLKD8RBYBGtTLcLmK3Dkrg8ajLgxBGG5Rnzgb18zVqZxCPJms8yXgz2PyfQgvscrXu",
  "key32": "4yfCRyeCuqiBusqrNDp6XdhkXJdEFGYC4Bi1YwAsRQND8akcCnJujR3azNznhtRwYqdmwKSNuiC4Tpg8drkurku4",
  "key33": "5weeaKPN3V5gUA3khUN1WVp1BMJfx6DhNLkLKB4GyZw8eeYHYfLiWjb6gtb56B9wB45huTzWJKVj1SPXpTN8GQ7K",
  "key34": "2eHL1ohtpazYjqtUVKLmX8hq7Qd2hKvDRCGKd3nyjE59L5twDtwpJrZPmmE91Nvn32PuJAaxXZC1zsUVibU47MaE",
  "key35": "4N77tEHhLq3dNdEtcRBhx6rATnfa6caKE34W7LJGUMfpQQUUjrs9mLh3RaX9BcsSkmBdjSUcdxtZNdoowvRnXKir",
  "key36": "5VNHRFwBtoYnEpUNQ1C864iuKiGr3mmMADtLNkFMEUgjXwYTGoMMMNBMLSzKDCmwYX1yPUNnTqgDuLwDbvPr4am8",
  "key37": "2ykWF1o4ntqmVoKhriJMuBfTjuv7zMyGS8FttUs7DKRD8rBSsYkKbFNhbAdjYFNDasA76GCGve1BpRoMR8CLmFNX",
  "key38": "4Uj944Z9e1ShjvwtXYtmQUWu3AEriWxDcfxakuJbnei9vrDWTJwPDFpuvfYVjY7VRdY7Qh7asJntEJe2pfqsFxL6",
  "key39": "TahGTVMJmE1hVUiouCR4NsnvbYqvAEtYZ7EF7hLqW3PhHnQqcgQYzH6zGjCTpP6MvQuobzDcxadXDreMusMam48",
  "key40": "5N4J7TD5qwGx34hTUJieGZcXpYpFxAF8oEzigfVGfxMF5UdPyKByFQJos4gAXnwWeFirTHd4rwNs3X674o4ebHfR",
  "key41": "2L13NoUZ24gz42UbQ5J9UrjCLBgmWH4wofM8ae8ZKssiXnW8iq1oG1WTX7gM3JucJvJxTaTMw2CmdAzuHjLrKk2n",
  "key42": "4uvLHtLPXGbtsD1bVhabngnPV95huteZJbEbWkc4zeSDD8TVRtUQ2NQnauQbE46QLVMhVe4m5iXhDjxRPosX4c36",
  "key43": "4JGTupi45adK3xHEBaubDiztnKhdzBkNvRcqzJDNYHDfmt3eXDhnqZQjf7kjWztv7NnnYDWQ2NAXcEfNYnGgybKL",
  "key44": "JbcMS7KzxfyC5cNPYmvQuxqjnkUfy5e2ECkkXyBJfX1jbU4ejrEmceP5nKBFhPvH17j1srhGb1r1caxLNLKUxFp",
  "key45": "2CjjtzZvfiRGRDRdRyW1xwTyc8EHv2yK5T1X2EHLFHdNzVXdvMSg3zwbSnJsEUEmxtoWDzxa32SsYAY2Jz6PQadS",
  "key46": "5ZjXj6qtSjd3NcN2cLm7fGMkQGBy9Zmc228DPdv62yTikX5iFmy2PpX71WtgKNxB6mgPmoEPpg1Z7DSv9icxWzA",
  "key47": "2rvzBjZ74xK9Yust8vjGYaAjtr9q8oEQ2rriCpFvcDwTHW3DnMkATeT957WvX6UeV55rxRJ2Z19PurvL3ZF4zQa7",
  "key48": "4bw921Zy2WnXfoMMnPiGZyg9mv1oP4BLfe8ranfbSj3CN46zmUe9RVkVq7cb8pV8rGSYvhaZNf1QLBkYQHeouszd",
  "key49": "4srTAWThZJe96bGuRNgGEzzoCpbwmkvyH22wMJog1kmP7DsSYtoqWNTPt9WssTCuwANebmAwkeV5cTtk9KrqGJGS"
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
