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
    "5uFCQjWk5KzsYhFfKE3wsNdq4A14xWs9Fn7Kntsr5zR63sdrbe44VWjHMQkwjAcyWim7bvqF5KPAMiVKNX4TRvRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q9NgFg3S6WcU7EC2cL1TWdYuCxjPcQ5utoVfkHboTfeASJxQ9ENrZSDGHKWM4YCHsK5cJXYgzT1QBT1UyWDXDMp",
  "key1": "2kqTnwP9smtXTQz4323sg9Vyk91nJ18my2FdsHxVrQWoeTco7nt4DnrZf46v26zahkrooZcdsxG32G4oWL88W7mz",
  "key2": "3VpFCU8f1oFFvGavxif2K677EL7XsZ48NKu9X4bcvtfHVDLeMnmqUqx8akTA76AQXqvV8hAitHR9SWVSaUFuDEK1",
  "key3": "2PjDHHjrX7UgNd4ntrujSNf1uPgLt1AvJ4DdNHYnbu9jb4YjkCjPtn18t1QgPvmee4SSa8YFdc2U3Vqg6GpzB4Zz",
  "key4": "3nkPtdrk5yGT9ohsHoqsdnkR1mqKfm8e2gAsBTg2tidbE6tWXwLF5XkCjKLmzZtT7wArpgDuSagbWrpJnE5oEtVm",
  "key5": "s2ZygQAYtGhug3nLUYGHwop2S5PoQpqXS5k9UErLDxtxbew5dFWooz5hDW3QZkpBsEB75rgagjgpDw964MoWWsR",
  "key6": "uYuiZAtYNN4uCJXZg4xShf9qrbGvZyJSpGbB5kHe87FcZ1NKPL54JYw9ZNo7HbZqjwN5UoJciJPnPRC2RoBAgNq",
  "key7": "3UfLR88dkAm4D31kSBDhqS9GHVZRqYwS72M25BP138feZ6Lz1pTTbYJrc9hJmG4ojzzZjdedEQPak2Zk6399fcwN",
  "key8": "4tPPJ7Fr4QGwCNhqxpeWZjGQ2XCwMpnjQuz97yBAVHR96VukMYBqqDh27ruDe7F1GVLjmig4yZfy7EKogf7q5SZy",
  "key9": "5uPtPdPB7qUw1sFgzJq8t8PQwZZJEZeWgUqmU2UUbxQwwocfEEYKHe7ca57aCUqHBmseDZSYcW4NxoSpNnWgdrpt",
  "key10": "9s9nk3fjk9URexZJYxzqS2a2rjANCehTh6oJ76m67nytiRC69jTTteZMaDsGMyEAFn7GjrJQaCZ4K8oGdecQHso",
  "key11": "2KPM711JidvWGKwpPnC69FTxCAxpQUh2EfMVYamM6LYoKoJRqNuLDcNMVsDFKUK4HmQMu19UyPHHP68rfJJnhTmH",
  "key12": "kZoQuN6tnjqUoYuiWhyEij59uLjxhb26RVWB5fcni8uC37xXxbchjxViPLcsxS7DHbNuSkeB4NGHMUdnWf2QyTw",
  "key13": "3ZgYEKdLipxK7yuaGuDsCcEhiXoizGYTsVUYHkSwTzkWoceMEf5M8LjRBZXaAVK99Nj98JZx4N7peUpY6cpp2wB1",
  "key14": "3A64Gzb9kXu5CvvW3aXBGMEAWZKcQezT4u1vyRRrCzKL3pnc4gifmMLhm6mz7BfDiHx35N2tCxmGNga9UmG7D5Hc",
  "key15": "5iZXtAh67pFq3frbnEMMTMj7FoLsDDQyukhbho1gPEgm649X8Q9buhmtrw2pN9NoLemwspB8pTjcPVyHqMf4TriD",
  "key16": "YDBFMeyzA5hHfVaskXRNfyu4HvivHsNFwicJU74TdBLGPhQYW3tqgHTqzEob6GQ8eZ9qLcSkfdUw5LrcoP3kh4x",
  "key17": "5CrhUERSNkCUq1DoYmrwwFjDy9zPFNCDE3G2ZK4QcTb2cvTstFZq9T65sRqtcq8Co3XjHZ7DLmKCHBAkHXNPvd1X",
  "key18": "3ZLk4w1Y2JnPczLPBPJYeGdCX7JjGsuaSMSUHwtiM9MQKonw4vuhiHHa346cdgZrPUMH9UrUrbb4iAYERJ9UKnHv",
  "key19": "4uVevdmLhHnNFABFpo5JuMczx3jW61au8AfbgVnA7aEYX17MmHBuJBVgMVe6f92AHBqZrCAQJQ8F3FdZGkYxiFNM",
  "key20": "4tYMT5P5tSpKBTSVjQidrnEYuXzpFGQMd1CKdtFEDTSdHLoLeWKmcjaVhbhe5P5zbZBnkwhzPgagsTr3aVk8G5Tj",
  "key21": "3WumVPxYh5qDR4tuhVMr6jGxBz5S71EWPN7gtLpdWuEHojXk2CtmkfTWuxWpUECEi55n6VBPZGW29QUMBJspxZa7",
  "key22": "jnnFBTSXvWeKBZpzkZnpvJGHo3ApBvT2p8qFsP6scgxR8mD5t73RBChkR2yBmz74idFWHGdhmpK3gwMomfszs6u",
  "key23": "23tfR8vToE54RBuyh1PJecG6wmRYMHASapSfGMex9ASrR8Em6vuopz78tbUoJiaRRV76zMm7uFhpshMo2iu91eZP",
  "key24": "5zFj3MGfKLfkJaTVyodxrYKf4WqKvd6CYdw8Vn2V9KP22jtnAUbcikz8qzWahesTJGgBN3hFWBUyq8FoAYVyD7f2",
  "key25": "5MumDRi9NugCo64FWtow5NRyW6Xa8va6TdJY5t9x8gauUtj6Z7SAnLsrbd2qzAC7eKjy36HkKd12Q9d9awm2pQUc",
  "key26": "44D543vSR44XEw3EXo2hf6jcUJkXTd8ba95sSEkJB1cBiH6fyz4b1YijRvvHcin6nJBhDHqmSTgFVq3jgtBsniVU",
  "key27": "KP6zEBWk9zSYvBndoamDrpNrBvvmxDUMdHCiMWxpnuTRqmgvFq7S8TUJhTHNGmYUNP4vtfZDGgP22vPXqcYsh1J",
  "key28": "E99PbhGyNaX2XMPUBqojgC3YPyWPwNEJ9NyBbALdoUf4jq8i82JNViwUvCxxLT2uTLGUP3yhPbdhFsYqeZRABiR",
  "key29": "5DKgkPoe9SYrJxyNQWCwHgNErKiGEEx1iYi6J3bexg6buje1qFfQ9c17sUHLaSUR9k9kCiUtvzshvttXyTfe4CVh",
  "key30": "3yc7f4eYDCMEVVwdLzDCZ85bNgGYuEij2FVfKRSVCp6AfY7Zro1UP21vt1xNu1vkzgPsbA4YUL4Zp9SWXL5WrPp5"
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
