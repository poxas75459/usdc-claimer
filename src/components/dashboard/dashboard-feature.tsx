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
    "51zx65zsQdjthkE57JbDEF9VNKQfDcRU9UfeuuvMdLTZc1szG6ke9YtQmo38dZGcRZ9LpVzzBAYos7FCvksuTQKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31vGEnEPsVV6MyvpzRHvZf8fo7he6MoGBekFcbxSPb93bGpPD7122VmujXnQ87GUWBuof7Cpq2K5rT6YupfbC85f",
  "key1": "3hNccYh1PgTngjnMXLcqTtCh3rwgUFxBiN3dKhddKNu8HDTWMtYXFY86QvXhQ3zYvQy8kk6GVWsfDxmg4ZE3WGFA",
  "key2": "2wBoEQY1egLK4ytdcWwBCqgqCruXPN8WSh5FqHmtJTMbE8SDRPwyUThUQ2N6ytz5cxvtzD3UWjT82ptg4iKxRWa3",
  "key3": "469681a1tVi97uRWG3RmbPGmnCmvCvggcszdKyV5YE9Xq2BXRFcoo4CZNQ8Xx5hFqGvorsegUKs9c6RoaS93AWUC",
  "key4": "5rpk1TfTkDMEDJ1Hmqq1w2GqNzscRQ7judfnBJM8LCf55hwWavXVHHSpv5PWsexrtkK765tX2CFBo5uj9Zq34swm",
  "key5": "PBgAzMb6yFeCqvEmzzMQSUWKkV477RHCDFc4dqpMGGUYygFnrU19rrnY3E1cXvHiifLiQGWfPqRzvVPNK9RVHKh",
  "key6": "2EnrVbEzRs19UkrLpQuwktW1oFLP2w4j5fk5xND1Nnb6Y4UrqmyZbgoH2cRBQ5ZU2uy6qk7UXTBayWgAWSWihBdx",
  "key7": "4WsPGrJ2eN3ENMpbmVn3yFDBFCDLBAcDjomYPStyAYmBRptmKnf22LjDgVjyKh6VLnGm87phoj6LwSGNKvquFTv",
  "key8": "558jcrgbqsPcZ4eA1QGmfUxodyXwFzUYrY18dcRMyHGWe4FqqGPxymhFj5vmrdmcHu4vE12fwfgNqvNZG75zN5me",
  "key9": "5PDWbYCJybkw117koSv2V9C8KePxLEshVoBqdtaURwZwpb6zr9Qjma6LqPnty2aZ9zc6aTBiHRVSZsi7sq1cURnn",
  "key10": "5jWwnjorKtZ9destjaj9DUWyUie2cFjP16Htjk7zVrUDT56k75EaCmwFHe4s64tRXm7UFGXeTgoHtG4y1kgbjEKU",
  "key11": "633WWsLSxjB2EKWxZxKrsTd7z4P6LppdWRWj5QZzXbmmRbyTwFHScYZfPo2pigSH9x1cRW1DSVuEMSPQjrCe2g1R",
  "key12": "RKTLFnSRwk3VhHZ7QyuEUceDL14sNrPoByLKCYLuSAE14jnY6UmioBn2pWUppwzoecSi8C9YCNPDABmb5cYPwJV",
  "key13": "2oEoCoRdy559DhLQFpL1cerM2mcQDhpof1mGgsFtLeYxEExj1Ms51jGyPJxpMDkGFpWyYVRCH2WZkB1HoWJeLRFd",
  "key14": "qqyH15JBZwn6pratxDciMkgPBRLVJeGXTTDff9MEQ6qU3Z3ufc5BHwDCJbB3bXdwb61Z5sXzcetBxaz85mFCW7S",
  "key15": "2yvZwbbXDNcxAbx9c1xSqTGGXq7CyNwNueSdqJaEhKB4USvskV7RUubZk7R1utcg9X2SEiae4zKEgkjcE7hNDg8n",
  "key16": "4HutDfQ5Y6xY3AMoo3etSKt6RdENaVuF7tPLhMhw2qhV9sxzyCzowMDbDXBYUjF8KxZs6m58yUZPh94KMrrjcvdL",
  "key17": "5ZXbHNnwZb2JE1rD6K63kZUqm177HKrWq79LWyWgEgcVrWztWGyFcadatVuCUad1N7pPBEeQ6ihVCc7iL2t7jYRu",
  "key18": "3bcz47HVLs4F9wuH1zuD1kVJd3BJykfYEHJen4Cc7MLtMrjHPxqQm2zErpS6fjxf1UUCYaLwPKnjdSztNfoPgzek",
  "key19": "37Ds6dbCnCgDrbHmTgd51f47rPUDbv7WsFwFJ7a8EP5FNXfV36azvrsANEav3Ux4nqRguURH52RJG6uHJqY71QF9",
  "key20": "2nwQiCNb6vqCSTHbdGedkZ9wfv5pmohwEQ678npQZCKUrModU9ikJi2DQqA4tBhgS7Mmkb2piDbmsBskx15H64Js",
  "key21": "4ZxjH8EYZqnMueCgzx4zXa7Q9CJfcobeT5o5ynLkfkBXwMkZzJwAWDCi83iW3mpy5vV2yWLYUf67PiNnHiVf8yUC",
  "key22": "BD1A1z7eHtJnEhPoRCyaWF3p6aNRhJ9hRKB33zsWL3DRpACCgeqwwhc82oJNa3sgS8QXBJftaVZcYHP6YjYdFn6",
  "key23": "23AcB3SPjh5BEm91qLHV2qPdkZm7awoTDpDsd1YUQwcrKpmuzuqGq9mmeCj4Rg6vUU3zD68Chc24YQ75cRn14C3S",
  "key24": "vVbK6p2QMXMDg8R6JRHPvkzck7Tbe9UK5yFrpNEchchVGomm2YeVMBKB1KLrdG9bVV2JQA9bC7bN7DNpHK5F5rf",
  "key25": "4kcGbdcgQ6Cvd6RQC4aui2pNz63j3y7jqYnjhJH7k8NTukyzt72qeZB3Vutn3P5AoRcymgLqoduhbPN6QkuQ6Pc2"
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
