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
    "5TDX77qDFbfZVZ6K2BtmuwCksycHVb9CHVzjQm9aEJs7RwSZojFTMN1XuW28gjenV8pEoR1scRZgcuuXS2Mm6smC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "taon9YdcN6rEY92m82bRSwFAD3UfzWjuFzMuQrytj87hG298ZgcthqRY8E6Qpp44cf9gSSzhPuck4ryrZi9rKQN",
  "key1": "2pkVGHxUkKgT4GfhguFs8ZE9nxyYCABD3y5egPssPseSjTRvTN7X9YwDLJzQJP1dABNF5C3SqivNPPWU95X82rPN",
  "key2": "4SWU2Rmg3g7ZrvGKcHjpW5Uyn2hfi7Zkaa8haMuqodkYXqGTw29yz5saG4pAgXbeKaaUSw5MrHDMXGA1sATMpvsj",
  "key3": "C89esWyNxdsjuPSu5pL155XGj5sH2uP15wRBijA2KN2wKQ1KMPUoWcHELUzh9TBHHzbY29wonZL6WcMBTGrehuX",
  "key4": "YYkukxR7xY3yrg7KE6LZ2bM7aVo6by9Zt6F76nDLtVige3JFGhBNsh3jZLFknd85pigRvVdRiSd43GvUJX8cBi2",
  "key5": "aa6thYs6BcRjvYqK1muRzgGhERrdaiZXVK7pM6e5gV3BJN1fYo4ArrXu8HYWhpNfmth6VkPeZH9aUr7PB7c4Yps",
  "key6": "3htAdw1Pt1vPXoSjGKKvNQWLYdeSEMqtvKEqRGRQcwUquzQcNFdBKjw4ATq42fb1KcsCYcZJNxpSMkVAh1Akx1YX",
  "key7": "2BNyCJwWpybx9UY4tqf3GRAuWkQn9rYm6p9CLvZ4ysPtCy52h3Xy5yCzb5rB18FhS6ixr7cg7kXj9rJxLoXwGu64",
  "key8": "593U6dsyjUALdRXviUAnwvJkVbHCLeg61fhPdeBnQtsH2kuknVnLBqdS2R8Zp9K5xYEoKqRtJGEwdYrGiLELpdS9",
  "key9": "4L2iqpLhnjES27fk5K5qvB79BNx2kZz6pEMKroX6bLMZnSddhprbzZ62Fq3Gbfo23acyGdjfz6274K5DY26QTQpa",
  "key10": "3KC2EsptwL34ae2tTgNhHaYbg8iNmkyG5XRC5uLTq81ZJTbq2PbfiUAunnh7y2AbEY3ZzfzcYLnBPQqzktMLxz1m",
  "key11": "4F8v2VzDoKmY8eNxB4JyTqEwwCa42jix9bnpUgqkWxJ5W6uNBZrVfPt8pxahpkg5HEPAvP1ycaxxQy1Wf3PgDsZC",
  "key12": "4RTqbJ87mHXXpWCGZkjjHCEK1EYnVxHn9rC6SDFmDSbpD5fe5FCCULmUqPbafSpFU28AiuEhsV2zQbBxaLBTPQcg",
  "key13": "2b6aTyAUH3kV8qNGKApam3aDJqeLimg3ZhiiQy8HFeDyKAsocrpRWmiXMjDUuxvk6mMWFhuLfwXDn5abBKkioNF",
  "key14": "48E6q7evukCVJFtpgTVfAL7xpGMusUQ1jJARTrHiqRbVDVkWHzpaPU8Shdn52BGu65RgngoCA4m7GBrQKJFoL5Zv",
  "key15": "5M1k4SPwDn5TLZczqZFd9rHNf9gEnB2TphGziqFP17WPkJndHS1stvYZ95v22eWTTBTeefPy5gCtkpyHv86CyUi3",
  "key16": "4WxQwxYS3YciZToWdtqxaV1uJEBWr7aqRKKWaVaDWYa9rjJoiWTyEazogkUdGNENxFsSSVoPGMuDn2fYg5MVsNKN",
  "key17": "5NHB8w7x4o1SN8eTp9EWEQ35dooHc91h6MbeE4wNSRJv9zdc3iwty2fXYdqxns1zZxNSGKd6EYkuy6KT3VjJ53Ti",
  "key18": "2NVi7ZSAFyVL4C8t7tB2Xvye6HQokC19df8x1KTGcCHMFnWBZ6EvetTx99fuB2AU1XMPCiRwy6eKtN8H9ne71NNm",
  "key19": "42UNnD5qMmdcSva2HCjDskJvAubYEzL1eut6EUKYeshpsRLHVnNDzg7eaAakHgPQiQnWoT9X64ktdvcggmD9j3gh",
  "key20": "615YNsrBnUWmnqPEtKUm7qaB3C94WfofWbXZ4p8nNV5dzQH6U3cawnWu6FiVudXYHhj2iLCo8MXhTmZaaqfuVuBj",
  "key21": "4nU1ywPYAogSA79iTsmhWbQFc5n9hKAKQ6N9rzJ7Mep1BCiivPi1Utf3ULeBKkgG9yAA7Vb92vGkLB99QWDt6ASU",
  "key22": "5fRMFkUDADG4F3JtDXfTPoJmvNYw8Q8679j4JFmqx2LEoV7SrsnpxZXC7DEAbsz786Hfyze9UyoAXvnrZ1BDUmxZ",
  "key23": "37ZV6N4aA7ufVLckcBs4DUU991c3V2533jHKVvmHc6KS1rSGEDnNFsA9MuVa8NWVErskeT7KdCfVLpgrnjG4JdzC",
  "key24": "51KbF2TrMCUH1ksjcshwobFv1g4EWT7pzz7muPDHHBXPq8KzskkguE5Rbu4Zonn8PrrBnevUgh2sqd1UDkR59aem"
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
