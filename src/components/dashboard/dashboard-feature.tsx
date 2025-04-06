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
    "2cqm7dFnWri4V26aABHt7EHMxtzPujx5WAZ4xFCrU6iW41hEHWmoERx1MMVm7zwXvz6Uu75mXscWgKhgh4ZqxmPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HdyZPjXdyZjNzBpmgoeG1b8MMtqs4TfGxBxP3rsdLJNUgtotRGZmXoUVrowjGHezPz4j2UGknWUh7YyrxY6R8UW",
  "key1": "4cQ8qsVWj67jd3h6gUwKZtJNBNRuHWqWsers1BmvjpDYCY1eGXXCEpUmnpJKtt2nggjLQYS8LVDrKGuRqGxdEZ49",
  "key2": "22KMbz42YfXSmAGU2GWZdaNfAhaRs2uyiuWireSkuoB4vutNo2o8f1uBt1ZahfUajiGrL2XtHxVZ6GqmxHJ6vFEU",
  "key3": "3xxjHcoptKb5T5xJRPiGH6HN1BUTNXR4V1Nk89XEpwL5TbEesazb9eBFdegoRRMXcC3cbFNfPV5UcFE1Zpg1GS6N",
  "key4": "FmE4XAKT3ibUWHCqi6Q5Ro4cMk7DRgQFnwweAkvERtSyrfZtQ9maXM1NiL7yPXxQL7277hLXCm4C1wUZeoEsLM6",
  "key5": "3Z3eX5iGbTFQoA7bDkCChuy1bozkVAeKNKetYvC53w53HA8GN59bHU66AGkzsntnXbkGdbnQ6ePRoyhgdNfRNSut",
  "key6": "4VM2Nk4Bi4ARNGsg3Q2TdsK8WTvs5BuKM8FjDXtWEzHGFfb2x9d8J3JypQzNQvy4Amg5eD3xz6CPWwoWnp9pGday",
  "key7": "4N7HVmJrT2EkoTKM9j865T4cVRsrfDZ9MqR9vUyTswL2SWN9kBFEMoDeQpLcLf7oZLLoaTVd8saGHQhfqY4RUbYN",
  "key8": "4R6XnPAz7xgjxT8hvJAGNbV3RE7zUXNaMu1byu5fcPJtspFhMKhWnXkNKEamB1AMkhQYwmGZeBMCXDEreLy2cv3B",
  "key9": "3MEvx3Gg17mMBohuaTU9xU6v6omJbsiu3RNwtgnEmBVMpff4gpBJW5KkEGmwR7mVokjDKH5eMmUVVJkhWtY47XtE",
  "key10": "2PjZRfXTiq62kqzQ1MVENXAShktmzd8PWHv5o8K3GhaEVShMFmG344zeJfhs2ft9vqFHq6Dhb5fwZa1H1PMhfGxz",
  "key11": "4QiChMV2jQkN566jLE9qeLZbi27dNvZsbDctXG8k9T7RoqS6sh9HxPEHETU7Nr2FpkvYx3ZabnkwXrYn5za4DgSv",
  "key12": "4JM3y6oaSTsPUR3nzXu4hY8YtDvEQCEAR4T2hKkCgzsTtdvWiNdDHd5ivGza1PZ7N1RDW1Nk9Lz8pSioopTobQTr",
  "key13": "iHhprKKw58o7Hzwx1iHkFDCjqVLkN2nAfTHFsMJ2oDx8L47YadCzLBrt7XeuV8CpGHzi1x5XZgr7P49qG85B192",
  "key14": "tn7HBr9K7Ad1PvEHhR5V7oUChMRVRkeYy3gRXfmKzhdvGpMm7tSeNChXAjXdXYRWqLLDX7fRpnLmwVwgzkm4ULX",
  "key15": "5Xf5eaWZrgBBr9kibrdgzpnKGhpSkY25Wvc9mKfSDJxzbVtzSKByTwsZM2dDWBhgEqjg9RwCvvJdjKVF8ABpNNps",
  "key16": "4PcgyTWAj6UY286oqaRafeoAWwbHqnFx4ixDL4PxxxytKPW5S4S6iyPaeHyz7YxuHefwq9rWU8spRiCsazrNXs5i",
  "key17": "3itq9kGDsy2jE3jVkguJLRZowJADaYzg4PPxUm9pYszKDs7wtXXfaXxS4Xksznidj3MXLL7msSR7KPpeRSLHTA2R",
  "key18": "3B6bqiz3e5bsfE6uXCXaEsz2QVkHLdhKigwbcZE1n5hxSeNsmnVwJn6MhCs66DZf3BwSedNMvUeSn1BFGr9Lcnby",
  "key19": "2fyFPBWUM8D9jLkmzsc4QUyZ9Tw6WaAcZS6LpUq7B1neaXoDUSBvcn3Vf7YyzShTgyAU5Lxnf4Z6f8tgQgiismSL",
  "key20": "VLpiELVC3xeTcLqmAkCWDaoDC1qcCGyiMAtxQfD2qVsaYDUwSXWWmbC8CPEaiK8CjMRqe4GaAob5tqdLU5kG17k",
  "key21": "4tzcF7aQF2DVDgv9NB9PGkfrZuvLJZBcyvSZsruuSANcxiLcjGH6VhmiRdPMsQ3nmzuUddvs2KVpKDbqPynAk6QG",
  "key22": "kwuUq7ZXgKBxFgbZLAHJM2xELcNpAqFU78gnrccbPi3ZVDApvyzVsyEndG7mqycGtvp2Kx51EeZWDntoSxdeTPx",
  "key23": "61jDdHLnLSXzSpFdJtdow6Hii3DP2kD7UKHYtJRZkHRstKrL97xQNJqMgUvgd9xmJyrWMmEMRmFJ9WPvPKjYGEcH",
  "key24": "2siWwpSYpvvN7BX3vzPhK55oAZgcUjgsWXpysmSrnirEQq1hxWBgaY4gwYR95FyipMpYVJsDZW8iMGhizJM68sCg",
  "key25": "BA7x1QSjU2yikdzkx9Kt3sMWUYN39phpruydXYnjGNNgDyuGwLEBgwLgS5c8FXNWC5UxEstXT6YukipbmxVK96c",
  "key26": "28AbTpokfVYaUtN7eZSKUfepTNA3mPP5FAGApDA9R15nghmFuoEhhE5GBmMttAZWrHqE1At4yZk4rySahj9W9vRR"
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
