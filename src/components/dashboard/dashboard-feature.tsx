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
    "2Yhq21f7q49DNBs4BF9xHSdxNGoj6Zt8dF4tCfNwQkS1Yw7avnfPq9kQWXiqJk9rR2Rd56KaUw9WAM1GQDcL6iM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BqZxXQDysjCFmyyhVbX5tYDqBrBCjdLc9AbiCwpNGDekb8sQZLEEfmBfuu7m8TuZmSMvrEzT97DUcqf6aAyzY7k",
  "key1": "46NoYdXLnBavMftA1657Ama9RTSTdWzeTsUfy3MeSXcEwhKYdWKfqhbN6TrTEz4fpSScLPsdefcTNZpf2nuttNrT",
  "key2": "3LYNNsGjNkFRVRkebTAeDtRUExcjnt3NwtsCBy1h7RLL3g8JMF6nGEibAW8TbedkNT7zzUhpFjNsQyZ3Sk4MW6uu",
  "key3": "kHieY8kyLUvYimUeFQduxSuJ6fa3Qyke4jFngQ4MEH1mBP2h7Y7f67hgcki94tSzioAZvhrqbJ9eTQ3z2shWd8W",
  "key4": "dqnpw1u32ZQJBfdTSuXYkDDgMr6tJkAWJ7mXR8FS9yFX7ttGMf962xdMB579MmVezFZwfsegeqwHsidzjEq9ZEm",
  "key5": "489BH2WYXsPn7nwt9dQn7tTis98vtp54yCaWMYBAuZVyBqNQqwQwuwkvo6FyUREQ1CbJHrTZztb44hQwhK69JL2n",
  "key6": "fHBARDbHQVKudVmpJzdRYBqUNWJuEd8LaR94e5Mv5N22xDbGiCmURJ3ii4V9RhPmh8y8LHkQ8NvzQPDTX8ZyLz7",
  "key7": "38fvRP7gdn59AS2bVe6a7S64C542fQ9JxGJqwRKxoCNYjAfgJhtY9FPALdwSwvNwwYKW5923oPKWCtMyVWQP7yZc",
  "key8": "uphKsApV5U3EHyJQu2jiy3AxESmyzKSWdnu9P6b1F37kbyqoj7Juv2sPFbYUF4ZhwWD5rW3eQWKuCJ8jKWxQ2Ux",
  "key9": "imX8b5s7avnn5V99S5VRPeRadKHBB8o42rKdqfgeLWHiqWHVzireQf6TyrTWYRdwf5tU81XBxi3dPXky4F4Hs8Z",
  "key10": "3MhceF8j15kegBgDusLFYgGWW2ExvkLA3fpapbxn4ibJLje87tc8bdzE4j7gwRz4SfnxvnLRs4jyF2FE6hJwp2KE",
  "key11": "4CRFfhY8CjofrK2rnpRwwP7Rb449oWSEoWNJea6hGfniJvvYGgf57iJkRqP6vJxKN1EgxEEuaVEnU5mSBPX7NXaC",
  "key12": "3txQGmasiiAfeHncsBaxVZ6F9vbFsmsThFBiCcuY2Ku8FY5vhnuTcXbujsEh1U1yQPAYrbDCYbnXGpj4ZsiDeDQL",
  "key13": "33WUfSXoueyNVoTKMZyf9sG7FVXtZR8rBNZNj6nzB3fuU9h724CvERuUzY9LiC2Sj1fYzny47XBNoiUuNXzpZrzv",
  "key14": "3diDYih3v7DgxvuXfFNjV1pr9HcjeHaAPmrLXRMAfQo5MMVoeGxAmPvvcdDa4doFF49M2fUGuUeKuBwW73CCdMX3",
  "key15": "5pHYhmdxSYetaNHQzCsGhzb8cv7cxyLAZtdygaM7T5Hib2PMPYxqWbTw1ZZDSv8Kt2GcKbQ7r2RFPYZ6fEbSuNg",
  "key16": "2Ur8aR9u8W41JMcGhQRHk7SYKmxmFCxQ4ThkKPP3Uf9FKnzeEx7zgZEWcAgWSDYkdS9RVaSyAMtn4myCxeX6Ubg",
  "key17": "2uMbkBENHQGVarefEQLirFMYDdhEqQ9h1QDdCD25dJ84gRWaitWKi6yGzVc2AFg1Dww7wYuiQUTNoZmpPjDfm6P8",
  "key18": "3mjNGYH4wKkdA7JBjRTnvG3LSEAjDbfVRhz1yER979V63gqdzYqzuKhctkWfXNxYuLCf7JQWSst3HqqABvLv45bt",
  "key19": "5HQ6112AFCpTbVJKdSgMNDSksSSScXypupq5TLs7Fs9TN1Vb1LikY1R55ekPxD2u543roHN9UV87gcfHPdGxzr1t",
  "key20": "3Z5TUK64GXs273r2G9djkYfnQZDQAzgiMoi7HZbEBwYWLc2t74wcKSD7CjTQxvUBzRWc2hHPFBKY3DMNbeorVzoW",
  "key21": "4PJapPYvDBM9PXkvNdGRouj7BJW4MdVYgzR6eQFid12TN9Zk92dvanhVF5aDaaGpW2E9cen2AshSvmQRz85QB4qP",
  "key22": "4CD43ZZXTuTYFJsH1Swr1caqdNVJCd5smSHsgPgd7XDg9xjzdX8pvKy13THYP1MvndwFhXrKYfwnKw2c4gqHnMqR",
  "key23": "4dKZsXVL9diMALW7qBCAnQx7xHFtNfvTapxxTBvnopNNsDrUvPdEN1dgGPsg2Utabaec6r1CTwAp8jTSoyLcUXK1",
  "key24": "4En83W43sMQ4K8yt5j1wsDLwYyyvWPxrZBsjJR88A5Z2it6iJacnKATJJg446DxKxAw7Sc4HfEP9saMmHLx5ShFw",
  "key25": "5iewkmeWXACsVEN9Y1khfj4K6Z47xLx3BY74NJnbFFy7WUaZFZDGzobkRE9aeh2CnTAHd8TA68vuMyro7wkZFC6Q",
  "key26": "5kpdHy9pABBVtoZ3qKsdD58nkUwtfP9CZMJNXhdAbjxc9x73uJmA4r5ZyKbRbLqWzDctFd62ZvpzzwRMePQoJvyS",
  "key27": "2LRvtroKGonBCtMr4s7VSbRE2BW4FMTDxgASVfgjudV8uR9vimX37v1XC3Sm5taEuhyidRayjGt6EHUj4CTnNQSF",
  "key28": "4rN2Vwd9uzYvSvNu9aLr7xskdP6KjQhGveN8wKpwTVQuXa5JmmSQU8qq5KndxwcPprxFPoY85ojBdHWsqk28zHBZ",
  "key29": "4zeMbiQxmTutq4MvhtMwmf6sjtJbKrmxPWZhoXvGaj7tdhVNGxCmS3AH4jFa1KWjuRqT3s3dsaxEEvgX4BY53NGZ",
  "key30": "2d7LRmcbzUvrWLgqXFCF3rBdzApQu9v7Y411maZY4XoFYZLdvi4QLy42QN5bd7GW7pDc42CDx68juKnth8o7QtL8",
  "key31": "64eRjytdvBuQmD3SgH5FmdSTJEpWP5YCRSMQwUcivQrdAUF9xSjW6RAkNEevVEb9RCGdxqefCfeN8RKLNKsj8Bm1",
  "key32": "3tGBigCUfy57kjfBKhffDUXR5vigW47hAbqT8bwG4sTh8ZfeFk71r3PTBpBDpqAM7siUc4wSAz3wHfgPyEZVyfuW",
  "key33": "EbDgfjuVXFfAftQDLXcfw9hdMMBLSyp7wpAkhZtzoZ5qY54RDAVWjo2dFvqBV9eaQ6ztVk6pjKqSEmBLPdD9P32",
  "key34": "4iyuL7EittH3ewWpMH79Dbbob66y7sPLHLULeKC2jbjTedw3BSWDBU1Zk1D2i7a6KLivKuLKDFMUs4vU17u7mCtE",
  "key35": "5XQo94kKU5t9jDUgedHuxHc5tTvRVNxx8AGQGPNiRgvGSJG4dNMXeCQqdu8QtNfeKx28DLG3ifRaAVziUzfHZ8k1",
  "key36": "4ZzDoF37fbkkK3GqLVn1Zttpsbvhcb3GXNtLJ5oHL2Pd8vsQ8LerZKJ9pFNj7TFkGuh9YSXqgjUyjDYgC44MWvnM"
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
