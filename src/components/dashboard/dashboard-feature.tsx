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
    "2kHTfmGS6JNT3s1XaFYBfgSX3yGzTnsXfVHDCKndxaHNDjmByU7UWKsMUhEb1VMYwoRaKpewgTRTvziLp6sEa3kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gC8njeiPMXqShwyMBTHt9Y4KagurzEq2UXpgi4Wv5VzVDhrHK4ZHFbG4myqyaPPL5eh6zGKpwVUTnZSnp5jnNve",
  "key1": "5u94JA1JmRWGHuydo7SugmcEHyre4e8FSFJvwuwjJG62ukse5ujwyo6vzfj37uQWcodY3AvYGZ9KTSvgs2yAbeYh",
  "key2": "3ZiXeTpE1wZPSeFaYtr53YKT4PLG3faPLLmtFWaRHbLoR1obZMvPre5Rb3dwKUgHSnLxHip2AGfZU4zntogLskjx",
  "key3": "5To7JMpaKxCm3GC3s4BtdGikhk9F1TccZscPdazJn2AX6scuK2cvKWFUNXg3svJJuGHuznzPPwm4RhPa22jVHVUy",
  "key4": "2KBGovYAfp13nv7U8tZc4HwhC8MW6bB1APAAiuigSJzRntggtvhNi9zJFZZCyT885GfZAJM3pJjp2TrEGHGzAstj",
  "key5": "WewUPBxSHqotb8fkQdZhKFjz6ebGGSxRvVmvFkMh3T2dybeidRJ4rrdpQPvW4a8zsJ39QPjUDj8hcgmvd1jpPvj",
  "key6": "3DhNaX2M1KXH4go6K77wef5M81XXvMCwbT4KJ6wRuVugyggtrgCjN6gu8yQFXiQ8qQxNMTP55czkq4t2cX2KVPtF",
  "key7": "ystpZCmEBggD6U2h9pTubcVFmADTcRxtHfiALwebjCNQHSgaR3JSkjFfBKDd2m5F6kY9m7QNu1EuRryqe997De2",
  "key8": "5CEhZexc2BNPriLSmVFzAAs2pXXYEsUARimBQMpxdSSSyJBt9eQtdmTQoeUDaY2TEkY6WDT6UEe5UViTKSMuHc5P",
  "key9": "4ej5VrvrHwkrVu6CLGxCvVs9yPM3Qugt8rcgB1BvcwsYeTbe2b48QVDQEySUQx9c9bjWor7jM4vuY3yd7QidcnRz",
  "key10": "ZaNCC9MpKSBDTvqPzcH6VzcADxwCsuyqzsPHt3g31HQU1SG6FVs67fAYYukWUHhAhb5sPSwUHmHzFxMngE9LXLw",
  "key11": "5qPBQCzmkJKXDKJEh1Zsb4vHfpw7bPQd7qZGHLv63TRciiitFfWiStmyhiHAprKuFSpPgEVEZFRCSKhvRyjcxU6a",
  "key12": "3AZ5ksM754W8Q7PAQEKg7SRxCdd17HbVc3ux4wEAU9Dk8C4XJVz9JjyXScxrLjLrHogFKTKF3ezww3tGJDDPZC6Y",
  "key13": "aB8SqxxD2akJCaHLmajEvsyFDgpgadL3wqg8Hgo69D4raK6kN69Fp5xq1cioVQgapbrYYSSJC3ZNFhUWwPLapUA",
  "key14": "21b6XoAezmkph2R7njctFjKKLsiM2quLCbdp5tnkDZDnfv5dChzC7SBoFrnnEihoSHytfe1YeaUFv3ucWwbNXRVz",
  "key15": "2g4Da4o3P6H5QivVauja7oVXtNKEzLRrBypPbmjcPs1kt3u8aQR8m3ss9pUbunChsbLEcXuHdHeyKTD5LjoZmqqo",
  "key16": "5cf2aw1RfTM3aP2Loaef2LZ7iSCdCLU2ut9EZ9uMNsMeeSoDt8bp84kUWyFugncoGhzQK5dzmWY1KLGDGx6WL4RN",
  "key17": "35xAjVV5YZqU5HsBsddA9vN9gjRAos1zAPy54pKeCQgbvGzSTgxYZd9XSon5rzrNLK1mXrjDvG52eDYqXkMjR9dS",
  "key18": "2dH2qLtutU8xc7iiqE6yLTxwtjZ2youPYXcjL5NZePCbKP8MxZQN1vHUmswU7JrMMsxhDfimC3DZxGvfn1odLiv3",
  "key19": "48TrWELmDycitRZgMTYdXv4yzm7CU9jad8GsURSi6P7a8uknVjFCJns5miAzLjaxykqhc413wrS9yHeuBabpg8dc",
  "key20": "5GaFUZ8b6eWR8GRCtXNRmxfFECjNMgYGST9nT3XLCR2xEVd54pBkUoL7P2uL8N34nb2uzzgaocAyZRMMwg7tE4pF",
  "key21": "ch1zprdMtzekFuGFTpKQfWDJgwtpDUshCsZ6s495grMBPg31aEDqwmgaSdh1u31BDx11UxYQZAc7EnpqtrpjnNE",
  "key22": "3YTGaGBEZPtFetCZkZG8u6mjnx691KoHDYMhvGUQFwKveUqptGSjPkdLrR6cxhUwohEXWgnAhBSvxSBphBfWqjJw",
  "key23": "3NVmE7FvTqrTm3PtnQ644VtFWGqHPQyRuTYLrKSReiPVSYRzoaN9SwqfGPvmBGJsgv8VA9j4FzYgr2m1XC9vPrze",
  "key24": "58f5CWwgMfW63kiJnvG2CpqwaCzaVD3uZ4JbRuFrtsPC3xSYKQtZd7amtx2a9r3jfxfGer5BDTEaXLS6kfEtsrWY",
  "key25": "4SRGFg7Cj5DdphouKPQFh7KLcNJFDyZJhgeBft2rkvdHhb7bKFbJ3rXU9PAay24NhLuu18g78mxyoTh1R8t2eF31",
  "key26": "4KeQxHVFuykHt9s33oRnw3oa5bTswaFiDe4BQmK5tZTMhGcoFBTqwYSqpsTJLtNRVBKXPFCjVe1Hq5P2XWXDNCuA",
  "key27": "JvfNWM1rAHgjkRodXZbnLa7nQeXUYZ5cGNM9Gubth9zKe6xP5UYwMCuVo9ieXTPTW1pGBvwMQLazXoLnnbMNxTQ",
  "key28": "5furaMfhxAq72LafYCoh9WPmHTCtMhy6biX8gVjjJHuJq1ewQ3cxLDYN7oxk6hqWum6ffXvxMaDY2yraAhFLkRKS",
  "key29": "42pgzuVWTqotBkZFpE36vcSYfDzsGsdSAYNXtWUQqwyhP138V9WJesH9u5aWC6fu24TN6EVYKZt68TW5CAK1KVAs",
  "key30": "3zBKaAUqm4Gja6KdzBCaJTXv2pyT2VM9wZS4QeMGsBeCTiSLBc2EE5zq1Q1Wf639bay89AGdxYn5DUHiM4QBYvd4",
  "key31": "4tYuDGoEaE2NcpYXimm83z1vqWwrqsJ59chcDf9jLGDM4ryzLozZ389rbjwZf4cnThPm7pQ14SfW2osNHZo3pjdK",
  "key32": "5Lntpec2rEAfRQFKzMh7REosqnBEZd9ytcyt2rbxd5NzLKFUsnPFZoUHvDCsGhLMpjbXgmPEpkzbr2fSKzkyobPD",
  "key33": "4in63eU3jkMz7RcaDEuShDRL9rktwKDqYqiba1L9PC6KNSkJsqKjNigQ6NfkGaVe9MA91VkyavZwXGAGMCwyjhYw",
  "key34": "4at4JLjxpCLjPyjt1rKXRYHYwC3ffS7CEvX41CN7i11eA4Lo1M2Cf5tHB1S5yVgJqBzYjNXZp2NUs6QrRgZGSW8e",
  "key35": "2BC8e1dQ6XJbAWN7KeyX442b7CXzTkxXpoH5UbWuQ9osRuG5jgAMwJS6GoyaD5mFEdyrg9xZQ7cKCrmCorNATFk9",
  "key36": "3n7nM22ZQmm3nztEoMFuqnjWtpHHvrjjn9Lk8Vi5KMZnH6KWQHnMW9tUDcy8KFZ5N5gCMTkg67jbe7xVE85kHcjA",
  "key37": "f2vf8MGRDrgRwPQtnz47ExamFQvVE6CR9CZxypzT5Ytowh9q5ypz9ovqBWj6dX8Ha44o34wRk9ps5Pkogas8e7r",
  "key38": "cHW2YVR9swp17KmMd2VzkRMgAbzEXyG2RgFg8q4LJUs3jiiD54g67YCiRsFszGMciCoSYcdyH7tmwQtrBZbSAzv"
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
