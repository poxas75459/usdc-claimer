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
    "2DcfwjU3qHXmrpaQSeVQJYs8qf2rGwusGX1qSMmfHvb6aXdWkXmERGgBRWyWmefTE3p5ade4gGKrbJ2gP94ypi6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "422oBSy77Q5RQzfqT8N5QJ7Ux154nFXbYTHhH9F7wJhoLf5AsqEwaB35QC3cGZDSLjggNhyw9VqHEGwbdexgmQVW",
  "key1": "5qi9KhprzwsDSPxi23iJgdVDXoNArX5NLy89JCcJphyTJDTEDDeFhovQHqA1S2wTwPpZiJ8yofM1ELLr1xGv53nT",
  "key2": "3pqYBQZLV2geeKSABSi1R1kKJRhrxZ2EHS1DUeCRtDUUJ5vktfzE6sgD1FjBQ3s6kgjhspcKmAvUNoKQ7PaaGniP",
  "key3": "561AhNHkgMfKXAsRb9CKwFdCABsLxYnn9xqDPoX1FiGqVBTh7aJBqSwCy2dQe7ZRL1PMLNqbCt3KUd4b8fLw5yAS",
  "key4": "2ZMm3uopEWNyDdCU2EWH6wavdqwQURf73tCqQkxeJSMRtRppPig1iLfYD6TPG3UGrgsrC1ePDKGDFsHcJKmS5m8v",
  "key5": "7necUXG4xyJ7SCnjSMDJwtFUhwxr7MUs9Y77NFHckNhNnfedbUvLjQQeDNFKZtczsZXsCS3rWAdXp2aSq38USTZ",
  "key6": "2NPfadfTq18sRtMKGyngPZxmg7VjJA8och8gXbZyHjPvfpkHvqngjFzWqcc6D8BGNLE47Ktv4CveajGXHVAdu23L",
  "key7": "2PyGKfydXBpsu1YMFZ41L6KNK5WUmYHzYQBncrvgom7Mxc2AszzQRmWootFjhQqYCUt6NLLVQiRDXdfKRpWt4BiU",
  "key8": "5RJC8YcoMCT1L3f71X3yMptDgJcy2JNMMSSWgVativgajGJhKN4ufRPwewG9wCUyNdXnN45qbzCEEzNt9nxbqTM",
  "key9": "5cJUqmpDqFp2v8z3ehQZc23Av5zdmPAZU1nCricKAB8iLqumCdGi9VCJKcQzw5qB9YMqAy4L9eSkr5skCakwdjY8",
  "key10": "aLoNYZdhzcwzxqwPFCWfgMHpHUcMchjFXVn7yFXtLTy63tJyYTwcyvYRZ4HL2VovQVzumZ26t5k24MeEPRn4H2G",
  "key11": "3jKGq2iW2to2VQEznGG6Y9iZgcdUbtRoUZHmsqJRmt6WMPrH5SqFGQHPFE2mMkCs8HWdfwXghqAKE7g4THx7eHUi",
  "key12": "4vF8uT5YmkuoEfNffFFbRsUVWvRViXswN4gLTmz1xCTpP6NNUAHiFdYW7ZXBqskWSXKJ1S6oDt5SpE4tedBFo8hB",
  "key13": "3KctQnw8W4atUnNQEzPi3UE5u9LVD6djUkHipuyVeaMJir9Wpn4QEnFcFPLw1pssC8EFvUEYZrC4J2KzgmpoUAb8",
  "key14": "3WM9Lkn2Du3TMNVDqCQVN58QzkuX6Do7TuJ3rxGaRhbfSy9Q2Qao1mmxLenu9GRMk1mxpDtAhqVmLkyNhruyyuLD",
  "key15": "t6NS1wXtewGBpngsa4sQBEfPo1LL8XG3EKSf76e8RFm5BHHjQgA7DsGganiuh6SjD9i6z8suLa6AW6PcET7Wu8B",
  "key16": "3MDyDVoedWJGZLEaVmnmLZdBoqZxVWzdwbd9ryh6w5HiwZL5tTWVxrggaEDQj4t8DpTbGw8bchscCY7XtW8fkK8r",
  "key17": "3jZYjAAXNobYyupNKZz7YARr4KiMnmiEpQJkoVXva82JN1HvkRGdiWbBGACtmKM53DKBigMAeLWCuMfVW8iLKmWm",
  "key18": "41BVynzUySqGPoiEGLMREiDL94P8WGfodXcHtcxkjdFsZ3Q24MjWsVM7mpLGoT2TdnfhdDKVaCGSVzTGmzGe8QAJ",
  "key19": "8rGAVKtqnqDDeruS6LoYjsSULJ7zg96BQPbuZtURtjcjAUYnyUM6TzGijKdBc3LYzKkQRLzvmVLeatuUdytQY4b",
  "key20": "2Mw8GkEfpmDx77EiB1WDDPxpuzmhzkkzJes5pddQqYsWXhKiN6xmng5cRFgckmCHNsmbTBrW4wRASoWsdMja4jGs",
  "key21": "8885DrnCJ67fvj4re4k8rGusGnZKYgV1KdSrxPoSm9XFboqBBXADSaBP1yfHV6cUQhx4t2spBDjAnfCAoxAabfb",
  "key22": "5H6KRxmnX79KQRRay5iQPgkzGXNMxX2dat44ptVzWCvkkmMRYMG1jpNzps74etNeRKaZSmHaJMPSvK8kTpKsuhEr",
  "key23": "2oHH6ZCxzNVKYJ1s4wLG98c2epN3N3y9av6ULck68KLB3fhSPKgE7exFaGwkEBawNV3qTfY8eyPhDUbS8SrNADBp",
  "key24": "47yYxCEeuwMUS3xeyn1DQSJQRmaBvJyKtkBViizeC4kwwJY49EtD2GpZertVwhcUYs3GhLSwqegpi3iCZC4d5BC4",
  "key25": "tQU1dQ4M497JxJGArTEe9SUA3oNx2Hj9AKG8jaKJYLTR6JGEkrDJ71FK53N57FhxqNAzh4dZUYwZQLD7pcKe5rs",
  "key26": "5PfHFyLvyTkkPpigxyoMFGyN3ye82TkA6s88EpiQEBuvFPMs7tygJdhMm7KuU65aW1NTNw3ikuhdaef3idBGgLJg",
  "key27": "3xZq95iFYZXdQUF9bmAorNHFKwuAE1shQFuqSJEDTjgSZte8gHxRjqQ3nwVjUHK8m5Ac5NRrbknd4uWwzwKTftXB",
  "key28": "3qG6Ecc6kZFNBzcHj2fyhVk3NC259fWubN8bJbU78DTPWraCw1c2pukLE8RnBi6cRHQ8AKFdMQC84ktr2s4jMNRh",
  "key29": "2gu7WRPJrsRHnKXiaFAhCEeo8sBBrBHSxbW7pVipdnP8BaYGstZEKXf8sKsu8uxUoe3bNwqBQM7aGP66Gc6aF6B2",
  "key30": "3oHwe7z9aW53raUk3UHtcsvhCYg4RXGU7gF8Z94eG4tvgiaeEz5otfUnpzjJXhn1oFegacMHW5fU9xdbgHHMzd21",
  "key31": "5omoSinuV8jCoAsUhv5YsRAsa3X4HnoPyMNZM33pnVHuhWCQzJJwLMjCAAPrbymPkU43nrCMVVacs57Hkg9QGQXx",
  "key32": "3L55VB6UmSwrT5P9B4yySMWJuiXFLYpudiFXp7aS1Jheuh2XuApfDR1oY216T27qeZDLsgC2yLGC1K6RkKivUbEd",
  "key33": "4YCaqLXXGTy8CxRtz3CdnjmaN2qj1GVw34atyoQScSSXp9Amjvsq4miAmbNieM8NhAUCE6zATQiQM8CsRJU5Lq7s",
  "key34": "4PzLN8NBiKBWXRaEmWMrnNzB73RYZBnqu1pDpfuMnoFYU4Zcx696iprdhZ9i9F49h566GEAYSYPGKAJLmo5hMxw",
  "key35": "tSzKQAJWTQXSQ6fcEwG1cxCczdoJqZHo51Rero4zQHdFxJNRcfcvg7Q1pSiXHaQxyjXo56aKHoEb8Rp27aKS2vk",
  "key36": "4e6agbFWrCVmeQdNdWf6wGv7f1qTcVoztPDW2D3AHY8id4VQ1fwLHovicMxEsWjyQEJxZqkYxeE8R9c2gcMvDHV1",
  "key37": "5GGiTpDLfXmgE6ymFRc9nKQMFLtAbiRxK2pYZbQLHKMxvZ69EDriWjKruLjkyZymgFNGwgV3eJ26VzgQci6vjUNi",
  "key38": "4p8aeASHKkwa5vddw99ZxLuNyitJPGEcv8U94QebELshuEpGtHGDVoTj4KSJoKJhbAR1wvXVRTFbWBfmYMsbWRfx",
  "key39": "5BqMMwVULft6ogeFssMs7HgBCCTfxRgmXxD1uqEv2bzN7kgHZpscWCTJ961s9MrP6JRk2bA1WDAMGdDLNGzrU6Bk",
  "key40": "3Uaubq4DQhsam8GxBn7YLb7PSksagCvA4JWdVSdHhDj426b1ytqXTuB5APT6vSPuZf1DuAMqPJKuUuCcyCgPBZND",
  "key41": "ZDqmRTB2ZM2iwJeZy4E4VgMKHDa7GULYmW9FGifEH3SNVG1kDGDqG6kNkpVJxv9SBWhymAouD4YecBJmzGexZEg",
  "key42": "AzUSHLiZb9ghmyacRdTR7nfpuSCfozreiqXiTtJ8Lv4kUtsKP1sFB2WZrKECHF2P37zckn8Zc7wXd6pc95wrfvN",
  "key43": "3Je6A6XP64rXB9vsZDj5qLYaCkbWMsNbo1EiC8bzQ8V4ptuE6g4jvcHsazvfrRg1FbAtC95VqXm39cYNAvCtRd27",
  "key44": "3tfBPd3gkE9qgsUJGXBCj7mPm7uMJ4cxqHAGgnqPHrZTZtDbaxDKJenU9o6j2ELtKPZSK137RaFmckfCWLWnZdWA",
  "key45": "25S5qEWcc4CEnqA7nG39XXFLkZLXs6CQ8Ek2SxCvMDusfHpb2ZJEj6bbAfQWeDFZ7R9QaNqEnN5iN9baTrcbvoCw",
  "key46": "4z36mBChtwT3Vm9Yf57doMfgw1nrxWuakJv8zPrzAMxzSesMCBPKVamc73nnH6oW8PyQdpqLD8HtmjnN4GMSXUF3",
  "key47": "2CARicEQQZAoeKd8WEcuegSc7TdB5GN7QAvno5Y7qR2tnTNmiQN69racWtXAQTwNYEwqLAZk1d5aNmgrmfSCFRhJ"
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
