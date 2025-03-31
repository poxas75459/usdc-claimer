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
    "2MRYfVNZ3z6MDxQ64uKnVGdrJZavScA9ph8Dy3CBpMDBdqGoCR4nYfjsRbjXFfxS9sSCH2yCHUZHM8MXDpV9i6dW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nyhpwLZe2NJxhR724XwHkALYJdH1a9ozmFBB5kyCMxhFC97ryCfnhFxVmmRSoS8Wk8gTvM3EGX8hSBuJ8VKfXF1",
  "key1": "Z5D33ab678fo6pk7q2ruMt74Ch4wMyiCAT52916vHqix1fu3cVm5FMTH2fjtKRK3B4JFwM3AFnQUK9KdPtvoY83",
  "key2": "5MPMsKSUS8nPqfwQ5iZanKX3poStWdQberBNLQLHaGmke3QEgNkkhGQWBbKek5NzYQhdAAZwWom1aB1DL5SqjV2u",
  "key3": "43jP41dKag3xvBEgt41EtKo1RzY7Y6to2uYKiaUEXtqYH2Srq2xTvuroDgHpUDk28s8L6KGf7LdnKk27zvzAYuor",
  "key4": "3pxp1ptMK2sQxxCA7nA76ZoMsq1N1hs3C3wt1RhDqDs9gMQCKixmPSbGYNBhMVw6xZ8FXk1m9W9r2RwGrrYpuMjK",
  "key5": "211asqRvxhxaWymy4ZZMBaGbZUdDSa6DZ4GLTxyvRb4DbB1DSzYEBGUwKS2E6BFSXbPzC3QKYj41atXw2V9LxXtf",
  "key6": "3u9E2Dx7wb5Rd3Jswksebkq6m2KoLP2utMt9L5rL8eu5x6hxKcK3kc9DDrcKdNJpKBrJymXF1fBxFoD43b2jnT5u",
  "key7": "3cuuHEFtyEKsuY8zFT15bJKV2a7B7oAdhCxnT6dRvihW3JbQt9KwxaLh7TU7zsyN1WHcmp1Yphk3xSox9pyyW3Zx",
  "key8": "3inpaiAUdcRGwvrg4mmWJyuyEZ7Uop6yuMpNGKtpKuPxnX4otGwXEYrXjFRKDVnCHeXxUA2f48eQeq8HsedeECCs",
  "key9": "3v8Z1xEqb8tWwpGGU7mCcooshRr4izAcAQTN2gKEUJqAh2DtXUqw8MTjrzxUuc2XJcoaZwgaZpE5gatNkA74vwSJ",
  "key10": "2LZww9APtSXMvrX2CgAMqpzwvbYtaX8vNfwvN3LXHVRZkpqiRYS9RGAJkbES5vaomTvrHttdPbBzVV7jsUdhYmfg",
  "key11": "a2LJPV89PvbDWJ7VKydUG14BmCT8Fve7rFjfkM5rLCU2kcV7FE95jovFnWRJ3Ge9XsGg4dMBN8My6J3KtR1rXfF",
  "key12": "5xRmQwsToL26cJRQMXu2seE7WPBzPScrWL549FXXprdyJMR7vEmkLT3oi3yn8Jw5RUXDwBABw2xFXCiPtYqbxnpK",
  "key13": "4mqxNRmPhJ3nzpNVXK5HmjGUP6GfxpbjLyJhf4hxKBFKtM7ATYiqsVoBx2WtGpnh9TLWQfYtT2X5J5m74WcZSLAe",
  "key14": "51bcowos2JpguBkra4yX3pgzvpFd3aghWnYm6SG3QuKd6WcLEU8D5997oGiYVq9WMDj9KGikPvJgjxe6WavnSMqj",
  "key15": "mYTca26PCfLXKnWyVbEfX42tHfg5zqojnWDtH393Z2y2gschDHX7rccdsqfNr1Dzf8HoSRAxqMXFKp9xToToJqW",
  "key16": "5cNDFnPkswMcxuF3GwhX8h7An5Hd1PZd27Segp4jSwCfa1QcLLDowkoQjXd5GZGAVFtX39xUrd48WotLabRL5TWd",
  "key17": "5Ubo8Gq5L7FYfuqR1oMZhMyhZ5wgMtfXi9FELDXykqmJYj1grrLv6VVTk6aoENGkHCrGqbgSPSRpwU3VgM5crCaV",
  "key18": "5W575Uc9jPS8taSJUaFSmTSRosBkczY6YzVwDWYf2vERBFPbR9vfumaNutL2oJ9WsGzMkMkTRmNRiU41feWKvD2j",
  "key19": "4HB8SmtzRM6U9xgyapuWKh7N8auqMN79wqomhDZVtwAkcuMWNeZTDq7EBteFCyEkP1dD4BXwNvri54vhMocqctmd",
  "key20": "MsCmR5shhEK5FKR1ZmFZGZAaFMnZntUJ1VXEpM3xRXTZVMuiDr2qwxLEvBMJuEBZkhgmNU3JKXsaQyZv34cteT8",
  "key21": "53AHDKYAGS6KENj61qL8QV7R5kUKJRXrMghqbrB6R3RSRppDUPS9vB5zv7yxsY8K6BbWjYzh15fyBsJuKVyYFNEr",
  "key22": "35s4GEyeeNBW5fMszKy9ruRPfGhGsyqH7LRPe1Hc5c9SjjtjPfxihMrxACa66jw1gM1UgQ5pp9je6MwM2E7xNCGT",
  "key23": "656c8NoswcrqeqA7cQKSEK2SSTgjTuoJs8Ni1oJSkD6g9eSjW3Nz32kHdUT4sYPio2Q73bF6FRqU9DRR2bqM3Rj7",
  "key24": "2iFXZ7d4jsWdf3vS1fvfi7mh39gZ2qoAuBjspFXmBkkYyZodVVvnPVFK9GMEaTWH1fG7FCoRDvEF7MT1PL5jQb5B",
  "key25": "TApZh6J8Na2AUznZ2vtqap7bnRYzqoiC55gZt7K7h91wh9tN1eg9wo6CFFeGP7rA9ULpVvb5mniFRjnAaXbTdZP",
  "key26": "2s2LGeqvgf9C8LgF3Boobk95avMchW7qFbSJpKeXcy6RuYcZWtCfSU41vBpUy2aTEAHoiUQT62pr6EXhLMDcg424"
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
