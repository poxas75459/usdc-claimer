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
    "T9ya2bLeUeixafmHoptPTwgw6zWt15KeqnLyxqVbLED1tX4QAFB17JE9Kw7LEzxXWwJB5BVydVeYgq3XQst5Np8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jg9DKyhES3zVxLMviTFz9UkgYi9dPeKGFsFpVxeF1gcMhUhz7Bidwx5Gp86LvL4yfGKNWDYQTsmhz6qFdkckQFp",
  "key1": "286gTDGg2WEpihWLkSxSRNwEEuqAYB65LCEb6eZ2DCrKQ4LHpLLZ1dsxyctxxkQLMHj5ozhodsVuUqcNZxjSxTjE",
  "key2": "p5SAbwKd2ttH3e9oazr7M2PEJ4o4eanNNsvTXGfGjh9oZrpzXoyVE5zo1kAi27Kj6rdCvFWNpiJ8k3tGZtGcHbG",
  "key3": "5Hb5d9ck4PGEAGGKMXt4Hd5feDPEPNLWTA64YMwEpuDiNtD2D4GE9vnaQ97iA2H1gVr4TVQczS1s2GcLC7D4RfyG",
  "key4": "2UZ1idQASeQ4AU2Kvvt2xsrDuamVcNAZLifRHvgZJbFkF4Sq1U9MyfPwYwCkodfRdC4rVA9azvhLtDgxANgvSMVs",
  "key5": "54FD3qmj9mey5AzTt7iRTvLS44Haquor4FN7Evov7qFZaDXefdydWH1WiFPy8rMhK5imt8S1o3Bo6YgrSFqNb5RU",
  "key6": "5Nc24G8dLnKQ3s1BkJvdegKksHew1kyub8AtGFbpVeWZULZpKFBLE25tYvqntFzyD5GLq9d7bsrTsbbdB9KMdz6M",
  "key7": "3u96R9QXiZffXs7NgnzaFVHxd1tKvNm2nJEbebA3L6q4kM51rv4uYW3H7mj3drsrrBVBnFifPmD2nc7JV6iQbABn",
  "key8": "L9cUAM66dYF4iS1pWu2BuHhqeMnbDF9Et8Lqb1qDXTfHUC9nxzVvZT1af2wTdM6wGUsrDiE39NDMCTX74DkAekz",
  "key9": "2A8dfe2sQ9mRb5A6B7GXtPqwB5QV47CkSq4NjC8dy7wZD2SQ6bYR3KTR4QnntkjjBzyJrk6jdtS2pzSnWymcPqt4",
  "key10": "54LC2YRogRDnvrfCP4xevDRamuv94kHRxS6qRagcAFdSHtxvTCNWBfCmWb3yMiN8ZXe6h6HCd8LGKdCWHBqrjUK",
  "key11": "5nLPr9odfgKKB64SyCvaeeDJ2JnPPbgBqE79qnYbWPfDyV5b14BC6YEdNKFKJb6b7TxWd9sMuexY4u7BfDfUCENa",
  "key12": "Mu5mnoAehZuM8S7XTd4nPgTRPgLywdHdBt8x8y6cafeLXYBZW5c6RBjiZPvTjy87Dd3kTgQqxR8bo8as4QBMCjX",
  "key13": "5ujCu6uEtEBXtdfM4Pk4hKyM2NCMDuUpPTr4nMovwetcWkV9qV8K34z8S5k9VZH7vsdZNaHdBEUQ8zuKM1ZS8pQR",
  "key14": "CQ9owYPVvRLUTkhHKjNTjYpZMmZA2QaoJ5A8D8WfibwcK1AKBws95hyhMArhGTeC96kzJcS88zqMtjn1gohtPBb",
  "key15": "3ypkw7JMVG9soCTZ1kGq9bEkTvy3E9WYsaMpHfQVPzNrWZxAXzGAfT68reGdGL1Ho6EkFJmZEchNPqcaLWHWbHSb",
  "key16": "PgRDhwqzxUxB6r1j9nKuASQkLc518Vg8gCZHksgymqU2wFiFSR1MgHpe3VafepuXdr4gMkxUjri3rUuvk9dxnv3",
  "key17": "5hPFqngSuoe7VXDQX6CJoRS7A3i5UFcGjY9w6T69s5RjwxpyDcVqfAaUjG2KJVQj1DfneVhN89dLpepEGicU5YX7",
  "key18": "5qC3wiKAKbMPARjCFetbGYSengB1YGioFGEJp7hM9zAAfe8RPdeF4ZJ3BGsm9J2HxNEQrPUCv4PxuPAsWJPfFCTM",
  "key19": "3jEEerUxSQBowdAUYKcayCviz2JW6mpc6A843C4Sus5uAhsbpbzHCx1GUAK3N2fe3znzGB87UWbKiD8HwrVD3QiP",
  "key20": "38JyH2jeyJXLv2padK83FTFKcHULUhx8FVLTDcAwFiQTgrDfiyWKG87JLY38sMgFWVSEQyoa1583QcKdqPsHmpxM",
  "key21": "3zXnM8TpQU9amCXwEnMWLMPpJiZF5nkCsy2zwasdr7ZGeem9WMykdQPj7wCkjGQuqgtS3FjBMtN12VKwrbeRVGVR",
  "key22": "LJfjPthJZWEhWYnR3bQctxVs7ULoWjxR3XM8ZLbSTdDsqLiJega4GzEM2q8ALyWuCgVVZ6uYFFkFaMJCwLgdUDh",
  "key23": "54dmpeaaRWDWE82BMNLzyhgh7MPHhbspYncwWunGt8eTmrkdYvDCNupsSBfEkiULNAP8wa6rrsvh4voD7bZCfU37",
  "key24": "wFGEuWNkFmrUMDsvXhwEid7ukuwoijckz3HW6T2rvefAKdAbgX6NWc761TG1zgQFvd3Dg8tRnmV9agnkVhNyaCP",
  "key25": "4nobrMALa9MbticBens6cgwKb6kvGfyGfiYY18DTnFZpVauhcBAJTmXYXUWveP3ZvPPeKiqKcPN67QB6o78ngvwE",
  "key26": "4i1nzKAYvJmQnT6Hgzf5YYx8bneVWdwnMuoEGU6vTH9PNFn1idqwYNW4X8EP2vPFkWWAHhGtQ4mEJcAPPwFuyjpP",
  "key27": "2XqfNDoWGnG8tVTbNrfejv4Gj4EvrSFDzokBWwmNCWMwZZyJDmvkCUDcTS8CDBfA3RsMj9XFkxv9tZVMoixVowrF",
  "key28": "3hvf3eLRzEVRRG5cZYdL3Lp3VdjtF4ty3igqXSLswMNiXXkC9CS4EwmyCxQsZoDrBaHUauyDZLhhJMga8ZkeWW3e",
  "key29": "3kT6gESygGN7c3e4FDMq7TkFPPW9JfEpE3HZ3r52bpJth8stubcX39cmoKUdrs21bw2KNDrSwCN4L9FV5RRDCFkK",
  "key30": "cUXKaZNkaKBPLHquyPUVZ8sUaQiehGt73K7Mo64WYU4W7bSN9WEPvdUG4ky8Ao4uVpEHN1pwCeTUvMDbZYUEiSK",
  "key31": "5F8LzZJrf9iz7nyynu2tdm9BQwzFDRMdp8mSDEJDpe3qFwpsT7HG3j9KoNj5rC6gDmcwbXoFQc219fJrMTV5g4Wt",
  "key32": "2bcbtxpNqSQz6qyqJboveWKiZWSqHj563qE7QdhLJYSk2bDdawMJzfoaGmSFD4N2Jxkj9VSdCA2JvTsABG4d71fD",
  "key33": "Xy52DrmTRmPiQ5HinTacbQ1s7NJuvvBJZPkR4DKh4vNkWYwDYuJD5yjuER1dnrjJE7vCduiAeBedYgd3wAYecVJ",
  "key34": "5qNmopqySdvNdBjNsceqcmuZJQMexpYkYqoQKhzRNhhAoAjMVvFz4txQ3StQq5P7dBcn8Fq5XzYHJFucCMkkhWJ3",
  "key35": "5bknroRqm6MKCNgsSsk6Xi72KaiDvNoN5Y76hjKJLRDxG2Ucar7gUeJeQrWhn9KNRYmEGv9sM4q46zqPMULCrQtr",
  "key36": "2wRaHnqK4GyiZn4vGc4cZ9YS8BNX4crSmHpGed3U6pAcUFr8fCSZFRFcJhYwRHUfWm8SrHFs646ru4SenvBxh5di",
  "key37": "38pUkUtCS5bd6szQBiuK39ikrMh9kCmXX7ecA9btbf9q3hbvBNTomfdUFzX8UGomu7A7ivZnooxVrDmCb4iK7Q3r",
  "key38": "3xSk9ientNHQ1porkdYf83edgssvUruTcQeXaz2GJivziAngbnhhgkZJyittegzBAf9Nc99U1yzbGJRZnv7bcQ38",
  "key39": "WuMYzeVa4v1au5uNwBy7ee9Hs5m2KKnurzqenmiwy1UvrEe5hpEToLQBLEP1YZHu4ecetH9DnVXQTq6x4F8pUyt"
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
