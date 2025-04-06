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
    "5ThFjEbmk1j5Wu94LdcSLV156sY4j342tqkKbzAgrAdKHSUP8xp7bfnJGQe2eifFnun1hU5kUiSXYdQ2AsRiWC6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zfcbeWUumro5cBQXdupft8ERGiC5XKr921uGr2fXsFsxEBEEwgPFH1mVdrwxfvD3uGpgorb6azc8E2GhYRaikpM",
  "key1": "64Lj42AHGz78LKUQfha79j4oYDKPxsXYmVKAssULqhADW7oL2XQC2cCMFN33sNdbECkGjiVJZbFzbiEp8m14GjuB",
  "key2": "pBaNCqxHxz9iPJkpRaRFXxkB5Au2EdMGdwfbT63Z69h38eeaSE6VQ6kpEgJ37h9hMS3eZ2ydUxBDUwGzmEXyUtN",
  "key3": "2ZhAj1tnYVhKEXzKrVuhHuiKwRAtkrsoXkEFNMEKS3ddf2Y1r8ZViaM1QpnkN5FSV4boST6XcHNqSoWJhAwCU2fu",
  "key4": "55YHQqjzKeqFDiyPHhbjPPr8Eks2sLiWZskpcrrP9Qe5BXt2G1YJdYzARgNgFe9izvXsvsBW7XuhLaHCdoPMiSn4",
  "key5": "p2Rj1kAroPpmFDcRCb46igmApdwqm3gdiwo4TYE4bsrauAAWfiyUU9Wo4BZJtqSvdJfq5v2ddHpUTpq3zmFhmH6",
  "key6": "5AJAd8RTBeJw6RAtJUMvSQizwujBSzfkqCEr49D42R1sZTHA1h5LzZeZPGN8rtWJYakibD6XU99nHmJqh1abd7z7",
  "key7": "5Yuwm8BUBd9hvhkqdy5QNtnnajQkfLSAyFYczZ4wwNTRCt2dTq8oLRUUxu9JTRgZcU2GAsTnJ3FcG9mQJyDGzmCL",
  "key8": "5zJJgS953frPXGyo4wbhNw33cV4tNryBmADxE8tNfGk42bAALBkUqPQsq9CVo3K8MeaRQTP6VJ6LRE6S4boVBWHD",
  "key9": "3nZvssnqBeBetGa8mR1zaTLh8BSfXifwUykRFn1nWWzoPp2kcJ3RgiGsTNxVNSEgDELWkzobZrhHHuLsqzbpes6A",
  "key10": "5VMF4ZkZyUp2ZcvCKhnfbvqggEnVzyfMEPnPQFhnZPCMarcdqGAbzGafrSWT46KG8iEtap4wUnJfctSPCjmGBd5N",
  "key11": "5sNbDQrVtHeMqSPFbqMX9D41K52xGeTyrTbdKeVWiPNC1Szunq4Q5jeDCeUa73A8YzYKs5w6s6188hCXUR2g7jki",
  "key12": "3pHqekRXG4A9nkA1YPhSte5PZBuW7BCdkyuuu1pRP6GQGwnxK5Ggpim5gPoPBrugqhRHunksaibrgEq9xcyLdnxy",
  "key13": "5AXW45SoaPnP8B3PFyGgA9xkt9YypLJoHqWRTWPceaKXj6osajDtuzHtDC1EoXSGUkfhpajifMBo69wjsauixfov",
  "key14": "4GPqRST5bxDRBTpha6zyvoEhP39JhNWHX9F6kgrRwr5d4212zmLqAFumPULVU5gQDHuBvjHWCh7qiQtcAXjANSii",
  "key15": "3vVPPrpS3kPh8LSsBL3327FLSDcHTwgHjAS2ZUsas7WwEgdxfLLdvf68gzGV5Coq5BtTmNpUkTHiUDS9vx3GU6qf",
  "key16": "WcXLhTCbnNUuZcXErUEsQKtBKiSxTCEUg3PyGLpNovm9dvHSwCx3KDz8DxJbxSB1TZZxfxGdcovdZnL3q1vjGFq",
  "key17": "61Lkv61MXUxzvMrv9AguxrLW11Em3eJmn5B7iz85XZgd2KRjAZYB4CDH1jhVV1yEM8crNrNMCzCMMZygP6jdPdUU",
  "key18": "idgPRc8mfxRhPRDh5YsNSjg5GK4vRJ95CWDXHFxhRM4p9iM35hzxJyo6PQZDJRRKRLJrqSTaKka4szwghqAyACY",
  "key19": "4bTv5YX7LmFKbnDw6fqjB421QZ7ksbGP22HsjrmCfWFfuwyK1EVwnVpEyER1rXjsu3XW4tqZsaPZ2cwiivmBLktV",
  "key20": "46M8mm29HfVCFgBb6Bd8Y1E9PSfHXqHbb9FQzp1KsyvXorUic38Q6J3tFpPmCZURjgsPHx1YrfUnyeEDkcBnMbhd",
  "key21": "2LBkgvFFXtSM4nYa9ZXgSVvGyuYXaqSKP4gwUwpx6E5pXLfrH3jL3NtqKohwM9HACXov8b2Y5d7oK7E9WyajEgFH",
  "key22": "4H87E6hNU9tpRgC6TSWzxzUPposAsk8es7M119tR4wtxiMMSmraX42rQAzyyiF4Xno4phFhSNHtqHfnZNmysrC7Y",
  "key23": "4nCkCAkK6d52U9QkEb551AeYdSthWAwDqoqVDfGBLWMLSas4k1SAoKaG3Q1tXEJKeiDMub1uFK2j5fZrkJwNV2m6",
  "key24": "4mSmCyjfBHwXhjgoaUfByo5pSNKQvoxyWXxfEBBMumT2hHd5k3mfjZk6t9N8HBrtcyRCEzZScjg3H2L7omTuCYjR",
  "key25": "3yXibQC1VLbcmZY8jmReJtLJRudsHJqkAyZVKrumZS1SWHrx3kkQETE7Xnwq7tnqBP1TGSsurX8MeAHesaifiGyy",
  "key26": "ZmnmnbtCYQ3KN2cjmNVjNPBh3uqhysXBQiKLrNjj8463W69VLhAuJmAPRJf19paw6y44cCqf9kcA7DdDAwJJLrL",
  "key27": "hSDtE1mDXpdAEHLcTXnV2r9vH6EUYXb8cSjewbr9hWbwx4H8zbhde5LTshPE9AsggWNLDPWRGuWTNx27YuRLpm9",
  "key28": "5fZq4x5hChbRboGUSj6nBwqynXwtaVT6g1CUeYwwUc9eyctz9L7S4f1JorBV5DnSKuHQLBgtZuG7pZczdfiVKT8G",
  "key29": "5BUj7WAyFECi77Q63vHAgiLyEanA7eKu2sNME5eyQASuA4uZeEkRrASwgwoaVRRTbSNtV5V5pwkd9J4EuY4ytxjm",
  "key30": "4A44E7JMbAF3XC7d8wayRkBsExHgLLHPorxSRjc6EY4w7kzu8PqFiWeeiwsbnEKZA4Dxa2fSt5XodGu5RYfiW8nE",
  "key31": "4GoUcro4gaeXNFHK3yz77zn4uK1QgidJRDYaK6rzk4TiHnugiUDM7hmM7vsNFX8e2UXEKKc5LUxcrtESMrzPv7fi",
  "key32": "4XKdbEBEBwJV7BvcKvdh5rzVCvg2LkPVHAPTnVXtYC6JtaFgFJebiFBbM4YNDzxwxAxzYWcWQ1EstzZJDFtmmmn3",
  "key33": "sZmLqryrjK2ST71TyrHVtQEsqgahHxBbxL33wTgnnjzevav7DdbwViLSxzjNJ6dFdQ1HeYapRZkCGFiWGrT4jjk",
  "key34": "4awsuJyMuLFwuvFpgh3vNkUncpWcP8uC5jt6r7hfdeujyrh2HyryxjBd1oabgez6rhgpkpNfJePgm76MJKTCwUV8",
  "key35": "3TdRYcVdxAwQr51EXSF8BH5KnvAU1ynQz4Bj6ovuG3ht4kYbCkCxG28QpjE7KyvmeUUqQtvvNi72bP7m88g4erLq",
  "key36": "2qc5ba7FuMUZ9iH5L1FRbJBCqAGCWdX7g89yHzy6EicB2TPWaucY2JUHM6tSWwaYxBrf36K4N6pLwaJR6bkXdJyd",
  "key37": "55bJsNpWavV7D7YZrFGMqBTrMBcfcGVodVCa7mXQwkNjL86sgSb8ExSmNmqdZNzhfXb7afqhX7bkE8dhZWnfQKrS",
  "key38": "4cFngkE5VMYvkaQv5KeTMf6ssMbKffWGcwcRHxpVGK2XYTh4nXWNFmnUYFmjDHALLoZ6EiEAfDAJQJvUEpXaP3v7",
  "key39": "7mkka68h1GP9AVwjWcf6KRbBoJMEgEufcG2mrhurbmaow53VvH5CZHyoKGVZS8AN1cjeUSbLsY7pK4dX63fbSqv"
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
