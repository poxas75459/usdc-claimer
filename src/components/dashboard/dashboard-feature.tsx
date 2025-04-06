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
    "5J75B1F4KsVXmnFkK4PVLLA3H7F4hYsZpSfZ8viBDKQKxPbJpjTVqFpmZMEpa1rhrfJ2jWsZYrNovHvRJGsr9CDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bDoAmvjKkz8xtk1iKY3XuLYqNcu9zVcC1dneNVKLbHFWn7WuhSYXoCTG4ERyxWBteJiGsjhDeH6hJ7zeVrCKjsH",
  "key1": "4uDK2GpW5yXVBVsW8wz3hVBGYYGTHQaLwjjhGBQbcHqRNfHSeGtH89oQbqHK97keceZhXUF3AaWtX4VbbV2DEKhm",
  "key2": "f181Pym2EetexrGazGW8xnuH8f3YutD1cQqFce2VX8NohPBaqMC2miz1fXpBDN6kB87R6ornWRFnvrDxGK8Jv77",
  "key3": "5EB8e7so65jNNHLjBNp2Ckry2yZTE8WW96x2ocP1RVFMtXKgzfZ1kWonL597H4Ves4iTZVz6j1LMvyuyg9Yckhw1",
  "key4": "2b6HQayiF88BvDwL12DGD7pJUgYCDL8Y5UMhc9aT8KXLvgbGH21Vmowskkq3FTY4PVhgDtaK6Ceq4KTRAzXyxFdj",
  "key5": "4J1sUgThzeZyhre37J3jusKrvVoD99T4ZTdeEhk8f6pgxCpQJDk895k3tgbGY6eToDNeHQHBZ1HCKJpQ4bmPjLQJ",
  "key6": "2dXDja2m1EQmFzZuFo94VuoioNx4ET5nxF6UoAZtssXajHBYqCExaUsJRVRPPbcAdSaPQGGZenVQJZ4a8H2kC66z",
  "key7": "3CPqC6Pb1UPYyvfguJcMDSh7kP3KVzp3GBynBfqvWMd9bR39z2FaUEDm4VxxXgtyUdLARAau36NzhzH4bivKJvhZ",
  "key8": "4VrpxFpGgiEhqjJHmdB1nXihrBNdAjeDznC4HhXWGEo4SPPjGhzKPB99zrXHKCCeRMEWkZEiFzBi1sJWAkqcZQGb",
  "key9": "uB3yJP7jt48u8PjR9vpEYFrX8Ea2kj9PPjXLnp1geSTdw3QFpeKC6GqSq5BtZ9CiVywLTP1oP4HFV5TAnc3vzkh",
  "key10": "TXPuvMEiCLc6sHLoiv6duj6ZA8s9ZjDVD2nzSChe8D1h3WUFu6q2e7hVFYKZu6ydHzLS12Kk5fCrnGuJZAcbdjk",
  "key11": "3pm1zJkrdQgVBCZyd34iqPC4npvJxYL2iBXTKTgtmsuNw4ixiyZfhVAkSsgp8nw9mXa9Sgq9h1qeNkrRnEBu3fk4",
  "key12": "cM8GgXeoAvm5vFQTnEqmG2vmKbmDxMncLNyG3cGhSRbgMs9optpaptCcvAK8Sk5WyRXJwHjHFi1HZrbczV3YvBT",
  "key13": "5CeVkgQeZ6XnPbXtcSNUuZhQ3a9hVDyUxMW79eemEn6WLrzvJwrGZNBiDmN6kJK89Auht5MkzZNhasKRVPLvwZ58",
  "key14": "5eSNjr8TKqh3SCvNnbNwiR3PnbUAFnGBZX8Z6xjdpe1LNC3sKww9YdLLJhH7ipdjUdKSQyN1Gc2gdckG8vHCDV85",
  "key15": "3jiAwGEPQrbfnJeZHHwDy23CT1PCbbwtmG2nnpYhZsB1hBvppQTqp4JVuJGMsQakb1KM6faNEV9rxcq3PSbMmsHc",
  "key16": "hKDjqjBMGziWmZuSFSsjmDJKnwSL1aEtHwmj5yWNrjDBpPsCX9B2oSm9QG3H4fG5X37ir1Y9wpyHJ7rHdFAxh9t",
  "key17": "3hLStgiCFvtuQxaZemNMpCDzEXGad4xbb9VGpxYZdZSu3GGrYtkZp8CjWG4y4bPCANvkzUyfNVQbhbngXGwJXqCn",
  "key18": "43Zd6pNTs5qXdgripdtrVEJt2qaSANqjSHEJTa7hZ6hLHYbnHhbUG9tK2zTxXuMyKbmUDt53wgDXzLAf5SxRn4GY",
  "key19": "4dBi9JKsBCnHiNMANytBh6rjmv9bScHpxx2nKo9RAJgiELy9gfitCDefYFWrjBfgSwkZpxvPJLei4QZGfAvAi2FM",
  "key20": "R4evf7sfdFtaP4ABNc3NYETssYVqAt9opnqq1vVeCD8Ed2gVQwX6m9ezevAb4j5VnUNonXTi7UkPDAtcMYkKMyZ",
  "key21": "DMvNKNBuQsbt2vx9Qi8fJgVpwGUxLRNS8LxWTTedLxmDTT1if3nVX7ebZNFhQMVDUNww64bzjGXePipRah1gi3i",
  "key22": "4T28k5eXBjHhgx3wS1MY3mfN12FVDaKKSoiZzKCVMKwm9wwjSUvtTBFP8MixLYN3wftimbozWLkc3wfXH3EEHW3m",
  "key23": "2s982fTB6wrRoYjZyQCwMe9a6qRpjwNv8m8F9eR9JxkrQXyDEn2eRfL7EQpPZgwQmiZ1E1awRaz31rqqFPx4xMY1",
  "key24": "21AD7X952SmDwSHAJdqSZy15dAeWauhyZroyECYixRJFwS9nso8V6ssEJXy3PqdNTR9eHBbAeRCq4Zx8s2p4q5Bd"
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
