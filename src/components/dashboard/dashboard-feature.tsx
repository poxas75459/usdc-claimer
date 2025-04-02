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
    "4qhea8hzCs9fST1rRwps6CTQhFYZMwmpk5ULGHoNst9QceYsGsVpxbPtXbqbfTMM7QSQ6wHW4FQARNB35VpBJ7Gf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dJpjka9ufMDeypw79UGpe4WXQT8KbxP6oANJmi8SaUxvR9LsEHVF926Zsqygj2aeZDdbnBSTg6KNP9dWnDfAgcH",
  "key1": "2HdRS59aYpAMg8G1xyiE9CFNcKMNCF631Kr4HQucUjFXdMFaH3CnzsYg2KjoBDPUbPd4qQr4ocueRiEGUy8YQew",
  "key2": "66pS3fKrSDMHcTcKnuRaoUPjaHw2Qj8wvDq8o7Qku1RRDHSnhEh6Q1yGTnRqHxh9VZdGMuJzYwcGCok5vqTNnJt3",
  "key3": "UF83hKotcS6wLoPqmZgJLGuEttKrpZbqaEBH2wcoHEyZiMVMJ7JGkZNPahb1J8jGJmTcGe9MvUDsQaSgFs1TBC2",
  "key4": "5WxFcNHJZif7nVW7MWNRhXM9cZBPhzMhGJrV5CLNsMR9bsUAg2cWgfnk8ZkxoNRZhKSbPv5sBYtf4K2VJbQzevBz",
  "key5": "47Zy8KaR5SBxZaTzW2kHKRqEFf9Xj18sgDHQsjknjahcbeFv95vgTdgTWpw3bbzve5fivu9qaHDS3KgsSRsEFhrY",
  "key6": "wJXnEKGudLQWUGTC6Cz1Ah7MboQsdPLDPqbGSG4TdWt2evEjKGWxsYSoZB4VJkqh66xrgx1ogrjQtYX8w82BRAU",
  "key7": "4i6PUHq5w7aGYPGGTLd82DwztGUmuTnex8HkZFUu2y4XzdahviwPhgtP43YDSuz6g6fFtBe1REsUVs4EYxbEAq6c",
  "key8": "3vnR2XPFDwGAuqCx65PwcXJBUF6UYERH9WwunRzTBTvoXezbJKUmsaXtLuUc6Ss9DZQwDWbMXipvK7vgFGMHhysL",
  "key9": "5NP3Nj1Gd9NcBDbqK17LXoMKzdykBNXQMUaKzTytDA6sG8mapxnYa6rGYKhgzyXyW233f86H1f9WVivW4Y6aJ3o8",
  "key10": "2RLQDhAwJzeEBnNmWSTxw3XMWvAQe19eZ7TLWTP3uM1hBpiouxCCbAu7VZQPgJHkxxrV9npVbc9UVSQfTr12fZd9",
  "key11": "33VGAC2uTCVsBDCf1s1eJ7MKW33nMFphrhos9XryXHqMQQQAksyKasy8K4t1tDGVZwcwCiK8E3XosndYFnoxnAig",
  "key12": "4MLgKLo5J3wVtC2BwLg5pdMBWyB7QH72Whqusuue2tcBVAihpNoPfGLuvoUzmCFssfhxWBc2chU9SAjgwK55nw3D",
  "key13": "2JDuK2hwwNTSQwfpJpEU54F1WvpNm9SA4r55MmsNRhfsgegFs8B7G5CNjQ5hr8Aez4DGsz8e14F5gkcgUV71EvZW",
  "key14": "56kvXw76gfR89tE7ftDV1suP9DwiuVGQP6bvDVsWja5qkwrCt9jxP6rcQDv1goS16niV89xwgx6QbUjLZ9QF91GU",
  "key15": "3ZiMDY4bYD1RDWG5R2BAZSgUd6HjcSg1fXsVJ1Roz3LgB6UgFMAG5WiX7kN53rMgHzun4GanTQFgjqxKzMXDFgTf",
  "key16": "MvywZX8FgDezX6WhFRfSg2VqDEMCGG2N4wkSooaabBsukB1nhsNwpB7xgALtP1AVrTGjaUiDUWMeaAR3nMraNEi",
  "key17": "4gXsPRLYXHiXpSzas6nUCy3XjXjefcisosnNAXEJC7ar2tFzTvydLMo8gzsgrWjsTEFvX66pww9sXBfN1z84TYYF",
  "key18": "2X5vuPhpNBMbVr8m7aRwWoDFez7YzVAeRw1ZAxJLE8n1Xgu9ZUcT5b7giKKvrhGEK4WQs9SdXSXWcktthhkCHCYc",
  "key19": "5Bn6rgmFmTkq8erJbA8ELqwQsj6TixfK1uAJ3CuyvyCdDMAvn3FzYHe8tV8oZxFGD1BUSz1VwGGU83HDMfhHF58g",
  "key20": "2m28CqpPeA6TyeDDqULDErYfZYXm4LPF9Q5Nyj18EfWrXmYNpHw8ojouGgcQb9jhzTkNoZMv1GcjSCoiwcaPfhVK",
  "key21": "RHEwwYVYJSnzcUNifyWT3fpBkiTDpvAkCJ9LaQuNMMZLnxWGvsRSvR3NqfA8ZSsfRx5mjki8KC81JLxv5x6uAFo",
  "key22": "5JozjoMZqvx2SVTojAXLVSq5G546xkwQCfojDosX5qTs9TKCdDR4jecaVoAtkA4Y8TuQUp27hhyjVPMu7iCU1CaK",
  "key23": "5gm5CeMF59kSPEfboHKPngoPiMqe5Uo6nFnavvKyC3cSxb4dF4DTjDZvmavaocxW8WkZChz4PAc8kUwHV6JXSB41",
  "key24": "3NMNRiQYx64KExxCJotWVs4SmsGCrWdxkhsZ7t3Aq8oMXcW2mcxPEdVKQVDLXMmJiy8fnK2vVE2fiFFAxvd68MpK",
  "key25": "3TLwcd9iWAKnmK8ndRU35qseLiA4vVsK7S5xhijcqyKqc74tvVqgcnzeWqSBHJe6m1AUySsqmSqHnFiwiT5v51vX",
  "key26": "zi1nWKscyqBCZN36H9AxWDMuDghJ1xiFMK5PT5jTWhRwCe6KdTAduSKcLxsoWatbZa8srD4WsoM7ywSJAb69NSo",
  "key27": "2EbisXfp4KSm82eSJdK6rUd4Twq4cwoUK1kQj7AZPzDwdqjchND242jYquKKhUnw46BeRoofBkFzUPVx7YKyeSaF",
  "key28": "3NV5aHVeHnUeG16xk93W6UqnEifgLZDN1e1HDMCXqXrM42qK9WQcV2m6a1Enpe6NGR486M3Yk4VpGRXoE5Vi81Ri"
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
