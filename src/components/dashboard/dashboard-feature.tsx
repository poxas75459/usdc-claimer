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
    "bVG1TfcK5xFKxiTy17vi6EmNMThSQuJTzJ3XBiew9CUzYg4Q2sqS3h4AqtEp4nNXZFVv7eeYdRzEPe6TqhLKR3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3unCN6AC9sMw1WBX2kYHjurHgkAC42So2Sg7sWGDSVdAYbiLyi6a7ux7CttL7PTpymutvGJwepuCG1aF8Me8eNAv",
  "key1": "x1WRC7YYad6VFjiRAX5ikxVwHR4aRegK18YZRFw1kkEq2aMnZUUJ1zmaW85CqX18DXMMoLxj8MzYhNxeEAJWtGD",
  "key2": "2bEFghTYmzpVLZomWoLDmN3G1v2eeDWcyTFUuSGgSdV6s8kqnVxsAa2BnmdMFMeyjpScZLgabATMDSVARq5R3kEW",
  "key3": "5VcShHTRkQUf1XGJotjMdbRuAmcN7SRwcRL2w5tbb9AQ8qr5F34XqqzYdVrZk2hhueLGmrGGjNrsFhHVAsXCfLoU",
  "key4": "3vBse1SrAiRSN58vKZ4ddg5KMwY3H6BecBjE48fWykpC2Ugchr7P8rZL68Lnk5f7R5LgbbHHabu3eEbmva166y4D",
  "key5": "VJq7er35SNAJHLXqDfgWn5PcKsM7FuMQZKKvYghWx1aFZBoTB9cB3QcSN8YiYt2mqbRjvQ1GBiTudR3sTAquJ2f",
  "key6": "6fwegovwtdcS3N9mkZigLzpz23XgFzqxhvfNKovrTCjUHKTP5HcLrFwi9ULH49qdjw286nVFEFRPeZRPJhLkw3v",
  "key7": "3Sn12bNEKFm67J1yCArDv3wt1wajegjMMUujfyhnpx5QdfTZ7MXLocV2upy4dYnMXddLxsoSAvRVfDsAxCQ1W3jT",
  "key8": "5CafBYbuw3fjHtoD7PbtZ2pV7dXVMPrzfXL8SqHRKUgR6fFA6WrasCwYeNxbmL54ZoXxRLFa4TwREnhYtqreB3Jq",
  "key9": "7MNAxBLi5uMCujYBp7qSDc1HtY5mNb82usUChNYKai5fFWTco7EtF6QwETRsGKkmNEM6U9H9U5e36b1HyRMcPRg",
  "key10": "3ekCa34c5Y6EnDXHHEix7htjoSRRu6hPVGe61avZhUYbuLWdwXLEFT4dG1SAxHTmyPVzJF9VCyCES2fUFPbKCRRU",
  "key11": "5K1jMhEsaUgyQcR3YtXunk82ranvSbi95p4zUGPuUrGj4W9afx5mmWqRkUW4G6FWgZnjRhFYcPTaGaeNovferxUq",
  "key12": "2tfSb4H5fHTcEwRDrLmCvKRxw8zPAGuwyYdZ5A26Fchnjz3YR5Z8yrLj9LCv5NFMmFG5jnGLmuRxvMHLwTLasoQb",
  "key13": "4AUgE4akBvNdojHSLpTSS6gVC6tAx6HfQx9w5pte8App8BCe96BA5imPxD2PCdNC2FkoZ4xtQzREipF2PE1Vytut",
  "key14": "5YUfe4To4yXRw7Mp585e42odueto4X9QPrJf9Ayot4TWnrnVLLy8ixdZrcPsW6EU6aP2znLaouvzx9gr8R1TvnHW",
  "key15": "yqam1Eq171SVdhnFqzXoQqNXk2LduhCVEuFWBWNzEvowHFXt5yUMvhWruGoDxF8WCWwRJjxeY37xPVoqrfVUTiN",
  "key16": "4gFiKU7PZueXxN5MeateQSJ6s8EbEZ5osfgmzhwndm3ANkpuT1kBYHrjHXEhmo4xN6WDDx8foSzrGbgxCCr224Z6",
  "key17": "2zVkvCVY66KMxCEPMWdoDZUqQdz1yuy7uqGQKiSWjWZ4XNovygU1L3t2Vet8kiFN55fJQswD7Sk5pXQXv7fP9dtH",
  "key18": "3zpNBQGr7z4yHqeLTpvyRQEt8ZdeKLUviUMxCDo8damuo4Ts4d69aL3dqxGsePVk7gpqXxjWApYveQuS4cnu8J55",
  "key19": "5wM85NRJthLnR52fYEY1oMh5dUtJ8YafAydjh21JZgkXe44zFz54YCxU1eXX4k1USjbV8LKMuXHUy9owAN9MF1b",
  "key20": "2fGNDZzchECMxNgP7f4CBa11tqh7m8Xc6H8XFykDa2sxBNRnZ9ZKsuDgEKD5CYy7RwEWh5TmCqJfdXnUSMoRcCuK",
  "key21": "8nP6XbvhAWSjyto6naR7dvVXSsad28WSC7m1t8JXoqLGg4Lq34MmFbubqqW9nxLFvAK6FDGQ3LVD4Zad8Qz4D8k",
  "key22": "5f7KiRyA7YuNNprYyPqV8nmZyz56EqCdfTk7J5DbVGDvKHPkjokLLT6khLvTc38HanPnp6fJ5wmKsbnhSLqEc7cr",
  "key23": "f58965aNytgEiEdqgh7MxwveHdp4PQjuj1nzuGWtYtxYzPNPfy4xBMTskwTsuPN3P2YTcKf5QjomYBPJLnzRykE",
  "key24": "KMhVvFoFuPxNLnULtBMhYm4Mghq1rNaeo6447XAXTqMzyswFSdzozRfuaivHvY9MCQFyTpw7ZChZXT6v7kcHiqi",
  "key25": "2439CyqU1FpxUy3M1baszjTf5ZmMFctDDN67fy9hUEVvarZ5Fs8yPDcFMD483FYMDZtrLg9FSrFtqMViaAGAJtJ8",
  "key26": "4nuCbTQohKq14LhhynZzVYE5Zf1gyZEe3FTtJovPB36ea2txX3wcwQ8EdizuVo53wLgYPTGs1Nt1NRejG1Y1od51",
  "key27": "4gBhkPHBYC7bdu1A4MQrPcXxaYHfLgq3cjJQFVgULFRwnrNWZCMBLc3BHTX82p9vYX6ApxqC2PBW1HqKA6B6E8JW",
  "key28": "5phhyJbBhM1Gf8NPaMjwqwd3BBRjG6hqY8Crm89yeJK9YoKWXMyhHXCcMHbjj3vuuDTuLRSvbeJk9TYBdFeuQ6fB",
  "key29": "2rcgcFZeCAtaRynnetHtN1s2fa1MCnANg2nZ2v3FGYrgNWrdxurG3TubhWEXEwRNyqDziqCDiuHf65bP91eC31Xi",
  "key30": "3aHv3ry1sjLvxaDZ3Yg58G9ZPUbFXeegQ9tfvd9jfEMrep7yWr6fxKMhJi9pSGDWXCGbJ4oj3xomVkeypLLigrGD",
  "key31": "59cm7a2Urhk6mzKCq54xUQq4p523r8LE9gdchdB1vp3xN6uSqXBVjSEqGi7obGFvbekZnMxFfv5zwZeVGw8v76Ni",
  "key32": "3V4Li1GHVzqUUrxwN3i7mhXErqK49MyVdgxdCoFcYFtjZqAfUz1GdMthwHj1WUm222EYMzY89UaWjtS2oxxVYxq7",
  "key33": "631UE86AscvqFGuAewfpk3oGpBuKWsU1asAmXDJkjcdNWAD6qYkjWmsWBoRGaVd8YL8hwgCQXNiPHjd5Eb7VDpcM",
  "key34": "44Vbu2rfNMAaZx8DZzk2apmsJ5gZYJCpnEazA6bzYJMLFuX8uZxNWvwPiBRqLyf9XbrDa5Jp2UG3pSsVVLPGSDda",
  "key35": "53vRMSQVE5gSSFZ6o5BBwNMnNUQNx4Wzu24bYkR6PBUBo5SLMy5kAX7k4WieUyKDbzvXGYGAq1gbEfBektqGjR7d",
  "key36": "5HnBUgZ54cyqMm9ku8Qu3QawTdHdTpgvgRDQCgunfHw6JA8k2N56aZvE48zGYqdvGVse9BWKK3mDGy4r9wbTqfLS",
  "key37": "4MAnHdMtGAcL8KtEmGShcEhEFPGgLwbkEm8NypBFcKt3ZhB8nZByFGLuR5E8zF9ZG2FxE1Cn8Jkf9fDCBWbudTzj",
  "key38": "2w7KEZ3Qw1byF4VJinDoEeacGv1Psu4uEHRg8yiHDYV35U1QsjauhP8qL2rwDdyNVVDPQEATWfoBurhokfL2cZeS",
  "key39": "5z9fSTQhi3VCarJHvhhTrjqKuw6iLQH2iizn5UiqKJdmG4nV18cXau1wAAZkrb7N1Sg7NPK7NkWLK6s5snJA1NKq",
  "key40": "3Ez571P9Cg7kviYD9ZQ9nEruZaxEhbSSQsKriUgFd9Pewv9LnujX8hiRcfc4mrC2fob5B8WShPkCnQi8jRQGaZGX",
  "key41": "36iXHV8qTxAs35jGVVM8E5ikHJweW8LuBHvcdE3f8fnpfykFeaASSgagdD5QDpDes3Dt4sTMtGNHzzZTLBa1ojsy"
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
