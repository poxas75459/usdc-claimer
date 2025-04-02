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
    "2foNGZdisxZfABMfmLYAo67wZpqgFCNWXqWkbeEjFkq45S354dAng6UQvDSTfworjuH54Ebo9W4LLHcyRpjrWr8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mzkevuUYKj6xFGnWzBJo146Q4dhr1GpBVaAViM7k9QXZMuj16kmgcdriZvWFpNhbsSJNugGEJ7N1CJhrCcyPkYL",
  "key1": "5MzF5JrjpeVSpS2d7N1CZgQZRkCitZuSg2smhCVb5LxRut6XfDQwUomMxpaZaif9dZ2V17BDj1TeD4CcPkYwdoUv",
  "key2": "4wBrWoJ5vQx3FbgnkzuRqNic7RgRbE2kmcaYzaUHewuGhSJD7TtF4vDMCgWBdt3z4y7mVkBDnt5hB4jocvAws22A",
  "key3": "zmTZEd6aXeehUE457f6AAKXGUd3G9roKNxUU2pUjrpteVF3pJuTKVEhtA6zYf9RH4SDwjMFZbM1RCL9vzYxWVBv",
  "key4": "fTPAXtsJyJM2hNb6ftsE9XdohdUPnwptgrXF5xE4Sx1xwj81EoA37huzRm4Y4fSvJnRJ1cmWjPFc4P7g8QFgH53",
  "key5": "5kJJDz7JQsBygERm9JDg8ajYnFdqw3SwvKtSg6FXf5QbJYy9hX6SG4PDmiyJy7PNrERw73DFXUBZTaECx3yjQeJz",
  "key6": "2hM74Lu5Yy5J2LrVszhuSRZejdttvpbuM9QS3LT4v4pwdeznGoPdbpqnJR91aDsZ8r9Q21f9cCZSkffhe46kkJJv",
  "key7": "5wbEQMdbzHPDqte6WTrEt3YV3149FGta3VLE4WuFEub25D88KmPwwa26ScuQ3CR5rqjCUcky4chcRMYDvpioKh4t",
  "key8": "25vWsZTtHxyC4ch8WtgT4PXBuGAFxGVBK5i9VeyAEE11ZTGsKewAw6Dfuv2z42oNYzpjGiNHq2DTow7Ti3g71415",
  "key9": "4TtQNiHcTZJCXFYE3WgsPdkz2uJKtqMSEDbLGxqpxGkJdRedx3GgfTj93zMCMRCmtWaNcjikHgVCpDLaFTpLEX3w",
  "key10": "DZs8Jvi8nZYpNywAc6HFAAHL1rGSHS7tmzkEEJG6UeV9ZjBh298Q8cgiKNWEeucHyZFiXw1AzwB1T6Pc5u1c1qP",
  "key11": "3x1SBDpaGrchFnjHzKGNyZtHSJLfntfnA6LygCxE5S48kAdDZExjNdSupPZZTpwoeoqx4wrrrao7uU6SyVPL7n6w",
  "key12": "5V2Yd3jePL9YCmpYAWxAqWJiFiWVm38Xin1oyxy2Lpc37XZDYqrTtGc1FBRrnWsk6bMxCWcHHQfrJqZ5XGn7JxRz",
  "key13": "5HdHQpM9v6UZ9syDf8ek8brHpD6puPVxwxFicWKxEVpcDAHyHAxe2NGCvN7YaTbrC8XVyrLDivZVjihRz9DYPwc3",
  "key14": "4sbUnEwvm41iqy3o8b3NB9NBuAB1ByWaZ392tqbUv8ZUfU7QYuPBuKFcFfRVyQJ8A65LDAQjzfgnf9Xxb9cWpwKF",
  "key15": "4Y3LL6i4pFbhhKv1aLapTrE3A5636Ytp6gDhKuhjhVQeWYnKxvMCLfDYx82mDXaKnSr6nY2o9H2kmCQzGaUo69KX",
  "key16": "37oB9KXvCJvA64t98b6vPKisnyqzJqkV2dRzFobgU7cJEkAVMC6x8f4MVfncTSYbW6yRuwWtfUZhH596efueUABB",
  "key17": "3HebV413eaZBg1u2giKmceB9WJxTHfYqiFamg59ty4TC9AkfHmrfPLNXeP8qfLFdAxY51JuEvTiBxz6kvcCusepa",
  "key18": "4FMgMrFcMsE2qMZ1yXKSK85FPeUmy22hh2v2FsoxenGsmp5F9tx1JFXYH4Pk4TrfivW1fT5CcSvxmnHExWFCRZSB",
  "key19": "4cvWAAUSNDCikqTsKumJivFVY8L8hRBpnvfwFP2P1iL5DpawXXUD2fKeNfvePPi9z1o4pEoftzQdE32FC5qnmju7",
  "key20": "Ct3cS1tosA3CRpCmqEFuWjzc1JYUuf6KEr7L5Aup5JxgrsuaKVd13gi8rsTuegKRgRnZ5BWwdRnnFkaBTSsXaUS",
  "key21": "f6gCwY2urSX5y7WXufKU95NtJvtkUwvBpqNdDoqGJTxMCns1ot5om1weZzp8CmaZo5eKQkb3RtT6s748C9QvSFT",
  "key22": "2uXWtNaknUMFstAzTpqJcAh37FrB5gFCuGbXvkwygx766r6FNfGmSXFw1e7DwEFtDsmWLVKWyN6PZNzyaniDNfkF",
  "key23": "3r5vvB7jw6t8fo2SpPY2MNj9uN9LY8vSMThzhrwB6cyXKfKUMdCxUBBUprfZAp2PTE2HQPVN2c8gywmv5LEBrWaF",
  "key24": "oqikzAzgR7LrzQ84iuHAJyRV5yfGftndZYzFjTDkuA2zG6m5m7jWpmws4NJfZEj1A7SLirkCusUgjT25hYv7cpj",
  "key25": "Q3sAjFNjhqy8sQoDJjAedaexcsZmW1YuqnQhZozERpJxZ4DHXDgmy9PnZnoc3DsHvsfB8dE2ZHQevJNNkPQNbsF",
  "key26": "4PAK6Y2xvZjV9EqQtPxwkfQ95YJf1CEw6LpXhyWwP3ArXg6K3dVTM36aS7kWkX1ccXUJA6d1KxErs9VQNyPkoPfB",
  "key27": "inNbUcZhVgzcZaxXuqkv89ayugoryg7G6Q9nJTVJc7HxHyxm1UJYtnbDdTPmjgNx8jEn35VUTQMamf6EDK8pM16",
  "key28": "3LcFUcfxA333FjioNmLFnBbebnNEGeqAiTGzCP5iMZL4mXc2f1ABE21xd2uQV9k2N54S2DFYHiMSYN5LTtK75p9a",
  "key29": "sWB5vHZ6oTjwWaPLiPsQ7mcncKdnQrbBFcuuEgZnqDppXQuPeWcCG7pRs2EL96niJrPQ7jn9BezCpT6RPm1WDG8",
  "key30": "36BJn1udM6GWkiQz7mtTeD2dnFmKrgAkoNJT4UockdJiivopQU3fHC3E3b4SnRGz5ua4FRmYwRPZkbVsJ7ZPf6ZV",
  "key31": "5Krj5RE9s2ktZeKp2sFs3SC2f9aYKc84hvHwkxGtJTr86FuyN1LkYKwizgLz5i3esw4ZUz2GtGavk2u4WJgCT5dS",
  "key32": "4nF5u3RTyoYR1FMLHybQ4yktZRR37FhkE265DHEhhiyQmXH8Hfb7kAkckG9cHef71e1bjFauyWa3xPyV6iQwxPhQ"
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
