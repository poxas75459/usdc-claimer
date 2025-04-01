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
    "4zh6f21ns8WgWrmAbzxigkGfdR6ciLNUx6ZV4JEwjj6E6zwvRYqfT3aku67Cecr3ab5GbQ4g37zExwSQDJx4NWNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GdC4R9F7zJipnvEwTVt3T2Bf1FzUUH8nh4unQVE6kpeuw13tpGDgDA7erYuAExEcXsu3AM6jvWVEuwfLnUrXcvY",
  "key1": "5FP1GWUhLDM45gXbQ7SL9zk8obfMZ3BBwAiL8iRm2xVRk9XH9KDsdTvxoxisjZ1dVvJjm76e6LqsStK6X25dZnUu",
  "key2": "3rX212XTa2sCxGHqThPn7wLP8dL1yUNFVWeJxUZ3bisUcagSk3DJHKPcrXgDLA8xPVb3i3Rv8Xepb73k9sdh3TgV",
  "key3": "56pdtU9Ur5tRdWvP94r8UyFJ5N9C7mnsyjHt9KK3jYzD4ok1JNY3WNcjTcuF1wFdFApd1stvMWMmD9bSNvsxgWkU",
  "key4": "477kqLAfswj7EsXng6vA7PUXTmRAVbGtjBXo4XJLYo1g3jATT19ZjDQDvXeVX8pmmEz9SbjFvhZYkmFvBAtNyABb",
  "key5": "5Wj2MAXxLftP5216JXkURfopajBPmUPX7nwbWLXXACszmPcG9ES2ikJGKVfV1sLRNu6aQ6s5cDqEJbUvKGddb9q4",
  "key6": "2rSzs9UhBXx1nNoJ9YFSsKbZoyqFcdFFx5ZobSdWzXSnxdigGttEbe3BXjzVvhw1LSnDuiyBnRbBqmvqxDgwEfhE",
  "key7": "64YqTdv59nAfnHKHG6L14N5r2asgad2UCuHEimh7p684KowfS46ygoWhW8B8jGtR11d3yYE5BPSphQEMeN4Ro3Lz",
  "key8": "4uKmo6DNZoVKafVm6jKjyGk2x93st2dTk9knUtLjNuuqm4gq5kEtvuc63mfM2iky8oW1CEP1c61h2spEHAJyZ27o",
  "key9": "5jgFwQe3HBBGPCDJqcurZP9t1LMuofJZy5hiRg6bXWCxsKsYyDPzYmB4j4VFzQM4jBAzBCMEdLaoKFexKc155iVY",
  "key10": "2pyms8sivVhGxnyh2ECJH11HHA8K6A5KaaUv47xwyCPnxgvzrXikEytLJYtZhNKdHHTJ8WS21sFYNReXRPoxswb8",
  "key11": "2Uco3EfQ8Y5fffFmRy7WXnsZkY475oFHGhSnAH2dmSuHSqsJ3mseb2JFCT5QCoBcBhxuwVoKt979kXg7DRHGXW7t",
  "key12": "jrzjTwUnivEnDL6ff3B9ugZQnqZCK4wdTK9DxCPaTtQtXJBSswomXVYod2RajBMdc8LvYH1ZfW7xXAQ7A4UtiFv",
  "key13": "447FxicDyas1XYif9XCUwPQQPTmgQ4Vq41m6RxKkawavRfszSs5mrihqKHKMhdQSKTn2SbffKPKXmcNispsrjzkt",
  "key14": "vTbSUd8M1rtVqWvGCRkwBEfnVggAVki6KfCwtTgfJgz9bv7Fdj3m9nMtVHcPqiywhGNEoV7ivdEx49e1B1E2iuF",
  "key15": "3NrWFto5ShC5eAuPMDDyDwHZwAukjFxhVw8hkBM3xmHW678MudzgFPw8PM4jipA5nC4nBzWcosaHTGrrWsgnbtjd",
  "key16": "63upomvhLzyCE6xsaBs6hFqhooH2ReFnoWpGYC5qBtPqPQgMoL2ZWNBrpKg2od7APooZJjbZVvn1FwMgZVPXgWX5",
  "key17": "4wCrXiwK9ieAPXWXebUAdC8bGtTgRbpzTkjJmTTcf6twrpXMmNdpa3mRRoerDmRLvucZydWiBQZmaUGB6mKjhJdm",
  "key18": "3c3me6U655MDM7SHkbpzr2kyXM1Viu7mdrZQKK8gT7vB6ULtpdv4M6ND8hLV8kp9knyyLT9u6SAc1FvnTqKmYgUE",
  "key19": "4i9qorLg72vGwgMoVk964vYh4oQ5wAFAzVw1op4aDVNENXtyaRzz3vockwac3BnNxrrwn2BY8ozqmdm9dr4kim4J",
  "key20": "LPrALhfw481R4jpKchV283swA6coawosDJwinGxyvwahMwygJ6NVFn5oFAT1LT6JdqrY9q7sQGPJqt5NpbAxapJ",
  "key21": "21dWHzoKwGTAyqxY1X897CnKG4omjygnn9jHhuM2wmbYLHWuHYEhh28qAgrsQc8z3PLscjRWAheskUpisNQJycve",
  "key22": "wrLRtbVCkVkjFBtfaZAR5mZqYoqHth73tjUVGMmaJq753D9gBkvUr1aL1h7BM76buBfSt4ingqhCLCYETm5xwnx",
  "key23": "5FWw8X3h9PWU7WhMyHJvpebSjmW4T1uUYNngr5y1BmnkVZzPZ8aKGkkF2rVcLRw11v8iz65W937BSnDT2z3fgwyc",
  "key24": "3BGjQnyo7eCGCAyuCN7SxaPAEuwNkZ5wGZ6GyAbREiU7iawMskHoMwPq6bE5hiP8kYBHTmbqHiQHLXcuHnvRwPyE",
  "key25": "4Zkrhot7xCCqBTq6mqyjxnmwLt6HsSFvag6WG8cN7u3yncDCgjCp6ei9qAB9ZAySoXivpbZA2MW84vGVyxcvkPz1",
  "key26": "3fvPbvxSok2Fj6eCLfXdo94LFTCgotGAkPrHh4xxsRPrzTGddE4aPH8tw1RfyiYesHQwie63eoZC2LtP3fGUggY9",
  "key27": "59urCKUsYKFd3MhkV7LXRXichM3CkWt9smNsZT8baQfyfQm7aix6gL2g4J7EtUzTUsSAPUPCxo9xrGwfwzc9FMBA"
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
