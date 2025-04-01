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
    "2gBudf29V4d5Tb9HTPrBVccqMNFcEv1dp7YwsmLx9YHDeKmm9bNEpiKqG3JCbGtwJnZEosUx1ngrwE4WFTyMxRjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gKBic2ftzFjUDw12xM7da1K5X26JkZjcZF821X8oDMYmNzXD3WC1nN5WcQvvqvMi81YjJmtimbBZL1rtmcngzSu",
  "key1": "5VwfSA11ZwGPDGNsiQYqfgAeRNFXoZTMC1MpyWpuEVC68fFKYobkQmPRRixGyZKJgoMyU3v5nE9EPcDgQd2XDhgx",
  "key2": "oE7dd8PaY4h7mKdGh56yQFsru1n5m8W7PNFtLRrrjwq6jsLxKH1PeQ2Lt4Q84wDZ1e1JjESwEQsXmyLwV2mRAkH",
  "key3": "49an85JUKhaNUuAHUuKygxpRJ6UfGbvPohiuh7VUcZCTxvhtsPdb9iRC62Mw9Qm8SvWzYYnKeGiNtpn1LouMoX12",
  "key4": "5ZWTdxpm5SzPfG4taetzTU1rS1SS2shA4qxBweNYbWpo88ri3Q8RWd4CVe6YnPSfaEE2HTV9qWif2M247uFtq9tR",
  "key5": "35RUiVDZsBKXE9PMgSb8hFSpGtrGc5nxxsZ4beWRjyWcAq1i4nWpnTtSHxGfhMX6DJYQJosWHX8Muj1bra7JFmPK",
  "key6": "3rWUpssr4tKRvfhBUDkAyorzQgQtNgN6QtM7wzonL8KGmxeJahVwu8aATSdbd8wh125BZyZSDBLoWRg1vEbbQ6Sc",
  "key7": "2pzLVaDhqj4Lm7mmXZqbB3kGnG7yeAPLRRJfa8otqBj7vUsEmUWNhwWbGWRXBFntRHh6exiSVY9Qxmnwy1m5RxzG",
  "key8": "4MNaX41VUhgXXT5eRjntSbnXGtNY97cx9nkeECQ99ogwfrR7gB3mesdyAD2MRLtLPKAqCq9GqfEGTsu78NMmBdzt",
  "key9": "5Bskg2TL7btVRCoY8AXpKuqNw22NQsiBkaZZezg5Bb7soHkrtHrJQk1fVCCjAxgpydRdaQTcHuwFaQCuhGPH1NPu",
  "key10": "26yShjmu1BDGCosyZe6vWyrgzMwTB2KKCGJtttGprks36VuSrdSqNMzt799RoPn69BWrDLUjTZbPPqkzxrHCbwty",
  "key11": "WpgRXcZDxHq4RejrYyGwfR3wQzULpVfhUGHnYbvtswhpT5VpXzKNfwWbA3zPKxEUXnYXK8684QZZpWkAgFEua1q",
  "key12": "4Cwez3ciySF17pXe5PPN6g9AgXAJUG7S3YUXQpSB7P1RaMJyhWenG5EiyGtZxiGMecsiiJPc2a93Zv4uoajEsmFU",
  "key13": "qmJjtNZX1sYeKiYM4BVfv3AGizhYZUnVmcLhq37Bs6d3M6WC676PiZLbeg74jqKRtj57LSd1uqjQjBdodjESfxW",
  "key14": "4ZJJVmuBH9sihCv5KnbcPiKVSfV4wX8Sf65RHEuX51BuHkt6YaN8jekSfswmX6949QSAyE9zacXkGCohvT5CMhPy",
  "key15": "5PGbfcQhF7hfWSFHQqHsraxUs9mWZHp6fwwJ3ra3c1zyGnrjPkNYKWRyB32xTA3vo82ZBQS5Rsi8MQBmtp9M65ri",
  "key16": "4mdUjPeAFc47o5tNGSpXFyt4C5F5veYytH75wwDmj7mbxSsAz7yeZ5fpwPqwpKHPg19PGZkmuB5qPb5MUGNGgQKE",
  "key17": "3Nvvoy5MkwGHEuqeHqEVixxdj3atVTLnR5GAKrqp3LY313Q1DfYmDuwtdeUGkRx1FVFZg3gAkP79tgfcJNoL8UT6",
  "key18": "2DZAKyUhr5Anm27dbAMYqN8LgFR8JX2f3oV21PZ48So8SmrdyBsxaAMtDEAD6gVQPMQPCcnhp7jWK8GS8CN46aLf",
  "key19": "3p7DznsYpntSSWwD18wBSoYKGf2obvpqKVhc9gmkgaaWM5k9VXw3nEF63qt2u7iXiFg5hz2Rg7sNuc7TQsMUCHAD",
  "key20": "2kpm6zoK8fGzjAMECdfYnT9GV6vo26nbKJPWp7hSdChVXdif9DbYJdzFJCw3Xu9mj84K7NVjFvP76SuNfMcaf7Gu",
  "key21": "5GSx2nEafGSPEq4W3tXFcCDfAH6Y9tAhDjWkmPnKeBbnkHqKHHf9oxFZY6o5WjrCxD2ZM8fCLayxHZHnHdxPRNeJ",
  "key22": "3KtqMq5UTDxRHGx7b2wUeeBBhorvgqnG9oEnDFqcR8v29CW9fg4ArRfVUnrQ8V5D8e8vZsjrpwsCGZCW6roGFagn",
  "key23": "46DYuCewEfyDP8mF8TZuPi4dCNycVY6PAbjzqoa2mEK5cDwW5bVuHwvDoK19ArKfnRNT8DCRqnkDBUgPzTK9b32h",
  "key24": "39dhirMwyQGXaxXVo3WJrsZMdDH3FCTdecqDeebPXZupeHLqSx5wTwb3sLJZkk1xwXnexR7QQsVZbktwpZYTAaL1"
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
