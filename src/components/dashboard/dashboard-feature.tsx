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
    "5yhBg4eQ3WqbrDRWqm2LFdH5zUkc23kqvER22K5DKCsRkufsu2H1APP5HcPmR1n2oHmfoL8m4pHMFwm4ttZBRVHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jn6qvo4XDSMYyH9KGbRmJKD2X3hTSmoBCYGibtPZ4KoCqzejZajKEZu5dWm4UNQMeEGHsTJgGiDPtoYpGuKjJx5",
  "key1": "5NthCur6AzKUSdm4Av6gDhofeyMbdUNHpXecQkoi4Ehk5xCCTQBg1GUZGeeR6yg4wrFAUDERvrcKHGZXYoHGx5v",
  "key2": "3UZadaGbL6wunMkMu2UJdH9v9q213DWkhxmr9AV3ik4LTvq3CrQFyzr2qBJj9TzBNTyKFC4wLtqRUhDwcwJnkxdR",
  "key3": "2jo2HYpvwzatM7fSEvccXJ5RGcgPNdhAL7g2bZnQPVbLWwRhSTFxbx9cf4uUVriGqGHXGdrDt9h1ByPg8esA6ScK",
  "key4": "Q9QxCK4ytXjP1ciZrcx4W8xN94mD1vjwmmDrDJ9pjwdXqNFVogPz8V2L4SFvzUQCETtQk1iqBy8Xv8Gsk8ymc4z",
  "key5": "5L2Qo1rcNtRVZuZcZkzBCagFQeySpUtPDhQ73es36XX6F7SQmcECRXCdDoAxzWLzWPvqvNj9tAdFA99Y98phxc78",
  "key6": "5mxxUz8A5tVTXKRtyCHwNDz4s3my3VaVhozbkH2R5Qw5zSZJ6Sos4uw27BUMKMV5gBnPZPidpdxsmZ56iijLxwv8",
  "key7": "3Q1R1wzhKQjtaNxbSDHm9k2WjDY1wbgkLLFJLUvg1JjwMYZghDXJ9WcUD5beDHcGbtADWrkzyWsbQtCYRVmXWjvn",
  "key8": "36k8L3m9JU2vmmnv6A23hPCXWzZdRBpEsfpvNv4YcGyHvx7LmLBGjMsEBeRtgsw5iwubNNqQjrNqHhC9frD2MEUb",
  "key9": "67f94dkka44wwK7Ubo3csRjFbDMcTwnwoXBrMJFfgPJ89TNDgXQkDjQEQqRbQ7qoqZbqbeyo5sYLzCsBbYQvn8cA",
  "key10": "3wAmRXeoKJFMpSvrpojPuFDegkEcho9iJTK4x8GQiZx49EoyfQSoMjdtm451KZJJmkyvPJauAXPawqiDMnq1VPUY",
  "key11": "67o2HyrnsnPPAVHytop3heXAdZ2J1fFqKxtsh8QauEZEa9XjF3um6QVWitdgZbmA7553xtDmeAByY5MWrAx72Go3",
  "key12": "4LkUv7W9K7ondRToDkYviyUywi4iWjsCF3pv3H65Vt8o3hnwjHmvvvYzW5c2oYM3ePMMhDqUYRDX6sBicEwMfiYM",
  "key13": "5ZwJrD8fEaFXY3o3336HjfRoFToy6yxxJ4Y3d6FvZmcjR8iUMxCh8bzoHAffqjUYEGxSsB7pJDaQbAjvbWq813nr",
  "key14": "2e51TEwixPhk48BvtsbVN5XvAWQaUKkF8kWSuDs5NFAxxZ7QCxjQopWGECjY1Y1oMPWKGj1PFLTdkLx6TqXjqnES",
  "key15": "4ar7vrwmHVziLQzpEcXEW7muN7FiooJMNhsZsda23jkh6vjyYJbU6z75bxtLnJn7iKhvAbFHBVLafYnd2ogSdTUX",
  "key16": "35paNDw9F9EuDb5teP3gtJw5VVNUPvQSo7Z7ZgNHhgiR5wS1sUQbuUzz8FbFZ6DzcPP9Ty84wHgwcEQywncWpm5f",
  "key17": "T91bpgbjj732sx4f4HP73BLbJcZuVXjazAAxPHLFu9FrAbiG3X1H2TQzJCVasMGQZ2D61xbyMpABGTFVM9AkFLo",
  "key18": "27P2AFLX4aaPXEfQKqaA6VWbqq7kt7GcnT2ucJ23o2EguCjWN2GEp14G2mnhDagHqwQTDW7mbsbtNrFQjpcPnS3N",
  "key19": "3b5HzyqVykGHBzaE8zKSLYd46UiwykydujgJWDgGx9vndF318tH3gdeubh5K57QYcNsj11kG8wb3HGSuqNh4aAYn",
  "key20": "2XtGsL7HSVrwbmkx9RSenCn277tLzg1WjnNrTtpFMwiYmQ4QpPXzbCJ4ER6bTUB8mSdjXLhtFcPGFDy5hk1Mp3Tg",
  "key21": "5JTLNy58oJ32vTd2yFdZYqzj7d85faFR6quwrTeycV7K68vGf9Ha4qVaRb9JrdFnKas1v84qETm9XnUwA4fwgEqg",
  "key22": "bjq1hDmT5XQnx7A11g17Y1tttN8jHBM5EVXxHjzZ7qvKPbhdVR6V45aB7Y15VnUwBvjxCtUMEf4r8so3tnR6oWS",
  "key23": "4LLF7wTPdQuhw5fmsdUpm66VrsvVGN9V1dkM6PrVEgKZUZinfWQVDmRKN5dmb5dkhf4YKYv9PSWzEr1q9jgGgvN8",
  "key24": "5DRoqLB8CaMMDHJdFAYSKJEzithZ3y5yKx4Bc7rgeD4YWjbYuqt6CEaoMW8GyAecVku6fWcoVQVoviLTMK2UqCbm",
  "key25": "5xzdc4zvqYDhGzoZFNrgWnxTWGubAGU381Zy1Uh1hTuBPDK9MtzNZF929TRF59xawrGxkhgiCjAFGns4QAwPfswg",
  "key26": "Hq4UBZs4gxRdoLckfy1UsWseWEzcHjgnzgDN97Q9LNe7yFz41Q7eud9hpNzcX53zM6VNctHwHyt7LearzXRxMJx",
  "key27": "2cmv3UK6DwvfheRsjtxV2DSzg3p6WuzmnHjAVhPr94N766CxdHkx2ohARtomU6GvxCHAZFxTs87bNteZhYc6QwhQ",
  "key28": "4LqdK1ecTNStoAnHTuQYMCLL4auw8cqxRxLLWvhGd8drcFT7qvwvGwbsinpRKWvfdytUN7xrFGvLhaHJ5vNSGaMd",
  "key29": "6496Y38GijDiag1Lqq8APyxgcrAWriaXYhzah3nYTqomaerTnKBTDCYieybuhqd8SkjMh1s8FKsMzLFmfjF7DZXw",
  "key30": "3xWvfVbYQ1fqLUekXg3mUds3cHAMr8bvYTSGMXngHvniUgaxQyXa3WGA448S2DFWiJTevSpQJ32KEXRe478a7LTn",
  "key31": "4arK6aWTZFRu9hDKvze29vTiSfejzcmJC69GYmWaKkJstNkQMdXryWw77YENhxchHhEbdXhqg4btGUAYUM3hFb9f",
  "key32": "21qHY6sUBK6E2jHL8gMm42d2ChAt87UPsYbKvVn6fkvpx9XLeNVRRzjTnBorwWY67AF9D8vNQFWKoxKGEhCj2xrK",
  "key33": "55J8wAe79CvpAap7cg2rV3DqZFeFffpvmtcGyfr3DUtF3wAcbSt638cCDWvivt944Y2XzR4zfLta9WWdKrr3Vkvt"
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
