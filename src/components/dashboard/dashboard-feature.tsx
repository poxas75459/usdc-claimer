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
    "61fr3mwwAW3qJdC7RLrpMLYVmWscRw291ybUQCoMAZ82bXeLDTxWQbYA3cRGK6R1j4BG8ES6CKjSqnkYKtvLYdB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63P3j5YUdw8E4mTc95ms7WqwX76E1fhQ1cnNbxuj2ca4yP5ZEoemud1PPGVn6LTX14Kj8MWsK69avhWincQ92so8",
  "key1": "5zC75QszkqFPiSymySYFEZqFALrpU6zN9HqBVMVJyHem1MhgRDu92mw4524UGf7KwkPTZfLZJ7DuQ7L5CBkadHuM",
  "key2": "fFNTaDaB1J1qhKzTm4khtGVqjnjpcrSitnrkZQxZLQKfvqSLoqgy7JqSDDmPrsuKShuDERT6o6X6HHnH84UUh3i",
  "key3": "QvR5w6E7HXaMNQsGQqFceA3qGsfJHv3xLd8newNxYwrXnAKEAMybkCgdgh3mjGx1G4HKPt1TjjJiHi8ifw4DdvL",
  "key4": "5J7EcngsdTGPGEz8ZV6aAvCLb2fDKNoFgFa4cD64x69x1hDHv22vcJKZgaKWfQH9XinKCTCrmYkjpjA4jhA5cJVu",
  "key5": "4Fpww7etDbuHNX35DfquR34fTwmoDuj4JWS8USbtKcQbDfayfiHKFryKENojJJiEiAscqBowwQ7dvqC9TvUUqk6",
  "key6": "48EV1jqK899bduz7cdy9k93UhXAA8ZepSogWvGYKeyr1799NkqjktxvawSfQjnxn5Ha4v4iaCuzNX5dd6oaxKQU5",
  "key7": "5uhdiQ6bxNXu91WKLV8mDG6GSJg3sUFQUaFgSpsWHVmXxLo8wvXtiYytz7goBQv6jECBXtxA2sVZEcGLLvev6A2C",
  "key8": "2JKAqQAar34rNNmcHVMhWBt5pvVHzjvzyXXWCfhfqQMR9QxtvZG8TE1i2RjThQQ4zfyczeFS7KmLY28o2XmkrMHe",
  "key9": "21un6Jytptt7Fsmtz5UbjN7mzi3izNc1rUn6qtLHsrx1DvPz73hY87kBY1CWmPzummBpJLoJwe9xmEHbfJ9JyMfc",
  "key10": "47thwgkajqi4hPtomTwPsf69iCKVs9x96NCPHjGeAgGkXyopJ3hgVWHG71uE951Pux6DMkVwFUccmG2MEXRzvs4h",
  "key11": "8EZQLJ5KAe5L723Kdb9Huk4PMerqZ3ZmgWK8HcurMG29DfTh3HwjPbi2Fi5tKgEcR4A28zAKQCGnShAreM9t5ob",
  "key12": "2pU4xRJP2fGEHsPB3TTDvYUhbHySrG6LLmQ8bB4vMgsRhN7t3f3RiQqi2KBdfBkNigW6A92BEJg4cqCzV1cqQpt3",
  "key13": "2LrX6ab6xudTdyf29Cc44jPzUnZrcs34HjCTRv5zJM2HR3nb2uPkLCSZwoota8onLnQDwxgdGnNLdFsmZbSD2tkk",
  "key14": "4SMJQJ241P1V15tSzCFqq74kBvTBwhzfuWkkgwyA1psdr8VSLVzHZwLLcMz82PTBEz1Rb11HgZov4oXw27bj5cg5",
  "key15": "ZkU3Ra5tXwYwLcridFGNAj8zsjDe89NUfT4VEF1mAserVX6vNat5n7Kcdy2zyY3P3fCTGfH4XHW5sGvv9yXoYLE",
  "key16": "4Emj8pnx4Ct9ppCmG4Hs8PpyLtnQujcdCKtUNL8xcwdQixjDHnq6WtKSQyC1HrcmynK7ZjeXkr1YNgLxVwF5cm9Z",
  "key17": "5g5acm6n8LovfbiijDXuQqfKxebQuwtfZFX479yibxKmYVStmHS15dAoJTgjtmsabDKYgTQpQVX9YE9bCmnmMmP7",
  "key18": "W7o7NX3XYQd8STM5e67SPN3E3go52Y9H7jVpAUrJtpvvKv8hTEVZXLVNVgmnDmbZ5eUydx5LXRtasFNL5z32JJk",
  "key19": "2RT22Srk8K2V4yYqK8Po1r2WDiYbkpZgu2J8qB8MaH86uNEC7A54gcWu587vYPaxXDZmxjqzvrqkyMcqXSzhvypY",
  "key20": "2N6DoCdqzCoBP9DpCYCchvrFZd4f7AURYwfDkTEhkcEChSPFrWbwobmT4LQ9vBRqk2hr5hpo5qDogPxU6Nq9YJa7",
  "key21": "2K7C7FUbw6gGTL4Gwudnnce6aAvmD4MCgZPyRBPB2XWsx8VTPgQcXqtccmAvvHi4tqTvpWRLLfXtyfwqgHmaLKB4",
  "key22": "3s9k4oANEsNKwibb3e5t9R4L3mF52Y318NamxJFYygvKKTqsn1ba6nNARMpuagq5z4DZWpffJ1iwKXpvkwD386wo",
  "key23": "3dZf6viaujXwe9PLZGbtzcA9XFGhWm7TY6ZNRrmW87DsAsXd5BscRxHqzADiTeiCsvC2roHznFEpxvD7zDH4Y6zk",
  "key24": "4hmZM499rvkry6kmNTP6nedS3rFmxp6qhtftc6vd5iRxx9SFDPs911fzPFjxxcyDxo1YoJebcPSkC3PQT1PaXwoR",
  "key25": "4GU7TKcJsjhGe8Mh69emjchy9GNtR6ZbgzsXYvwngvPtAazxPa6aQ6frJ95dmVHnZUicPRhKC78fRYLqXAPTqBDw",
  "key26": "3aCUzuMCzm56EPYgwpbXJbVnuJrpEtuz3XKDTNTEmVc2CKQFxGYEWbUR4tsLVYdCDtg2kb7e7FBtPnBn2nashx6X",
  "key27": "28tEZWdhR4w6qT66MTngspZrxAU2LbWRRpxBMcqvXaYZPDyZ9fb15vq5w1SrqzJjsBV9EPZGB99nFKKjtjs6He7o",
  "key28": "m2yUpRqLVCk1kxCCDKS95HUFqTzmr71sJrQuDmXADkrUiAPCWD6yRsqPU1PdHkqqo6rwYnsAmxPAaDBWD3KHTLQ",
  "key29": "4GHAV4bKAEMKjHZmTGpf5PUzrHTWdydDPC11qF3KjKnvVfpUbALT1JWA2kJtJfSDQgZFJTTrenaGw3RfMDNVVoJx",
  "key30": "nG4zW9qWeRUFir9aCRVuYD7ucxqYy3Au33nkqi17DAv22yXSvrnMq5sfcJ2sWqFDcvcSTEcBenFuDNJhcvvdnDd",
  "key31": "4u38tNUwqS2PKVLDgKet4QFbcMMrGzZp77vY6xWvpuHpAnkRP8nT3a6EKtCE4kn8vLydanRsySuqxy2b9i5boyeV"
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
