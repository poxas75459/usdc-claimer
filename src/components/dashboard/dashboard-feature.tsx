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
    "52KhvhHRPAhcft8sS1wouFz3vdrDWRwbEQSXhwuen5bPuJbyw4KGhtSTY2RaPetmwjy2jb7QUH2qM72LK5YR2JCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vetn1ePJUmCgsWBoczjdE7voBDxbDZqscRAjxYBfvEe5qTGvPJ7mgkts19tdwcpqkoUvbhLd9ScnjmpTV2uaXb6",
  "key1": "3gAcB7iXoVv955qpN367XY9jrWYA1Er4WJmufMFThcYtCGZ5cZwujbPjWd7NXXkMGtt8kRogYoWmBdcuPwfe6QCJ",
  "key2": "5aNbSe5FD52NfVp8Xi57fQGKAShPoZw4SJa32cZzBH6pfUxwwYtupVs4SXisrC3mtk1kWe83zdGsSYF2isj2pQpF",
  "key3": "61F2iCgVVaKvf1u7WxUzRcu7QH9y3WQyKA4EJJL6k9kxN4bbBAHNKfEBfy9hZ8WpCtbGfG58UzrFG1cxHzRBtmzP",
  "key4": "4GcLy3dcUwK1HePuYt6DA4FnoxC2Wp65sfvvHxvdvLa5QPvPvvr9BP54J1DQBDPe7wwLTenXJHw3xDtMALKUKhga",
  "key5": "28mXHXvW9iotuCFYvahLwSZoCH31CwecAv7WpTeKLA72PfHCQLadEJJPxoMj6Z6jkKr6S25Wm74RViiCP77DbG8p",
  "key6": "4zj1kyjfcAV1SW597h2Yk9EuFBuc1WcSoKuvNGTrFBL9v7VPWdEHXmTzsdfLt6GLJdrkwUVQwKxSWK9fK3vxgcyw",
  "key7": "3n9HZkwQJx2M3kRVJxs282d5h6ujSmVCQDPSzrm2Wshe4fH5Ps4rtnjsTQgcC5x8N1odZeb81xcDUDER7HLce6ah",
  "key8": "aFoKuDAAQbR8N22GJ51BuyvNgxgBiVpKAZ31dDbZn2J1TdaCCp6h2YHrDYK5tNgLkpic8ayhEwzwnQR9uk1MVyo",
  "key9": "5xqC1YciHrdS8aPpiYPT8vi3Er1N66GNkdkwtfXcyBEGkmRgbgms6trC7LYQQNHGxDw5vMh6yBmZy5Ai2TAng6Vp",
  "key10": "4Te6MeYCxp4CqL3mcweyrcB5TBrQc8tgqwoeMHKX3m9sHXBtqDsnQegpkkPuoSD9rc964BDth2LpR26i7bYhANjd",
  "key11": "5Q1DHJ5VFcGJwBhCg4FbQYHy931XV37gxrSLzEsKoVg6a8YcZ9szSwNTTFzC3fkqxT9itr7zdqbkVoxhDNBV2pBM",
  "key12": "2ug1AYapJDiXcgMzD7R7vxS3f5WJUJcZjj26Tkjn2X2zQ8ZMZ64pJ24H2WG46gPNahJ1cksnpDSazQVqMfc6HsTk",
  "key13": "F6R2k2NhKEwcRbuGNTkhW1xJ73jf7B5XqzyUA27G4ogMgMaiRa8UAAWh4W7k2o9Rkes19VrfpssXYjsTHzC4j2J",
  "key14": "2FWc2NdnSiLAjmCR8S7MYXPkn9h6QCMJfPGoVuapHmPK2CRwJo1yX4ro5Ztm2Zcy4QePQLHaYvz7q2RP775nBjgJ",
  "key15": "62whjhxrajj9Q7Ect4sJkgoeWrmwofHhBWkhda7QCdjxEfi441uAiJNAGkcgJXTVcztqSgeASbcVy6MPmHPH3Kgv",
  "key16": "5h7eRFLJxszEw3kjuerAR5SJchz2N2QRn31d4e62VCTBZa2gXKDkhUixN1fTX9wC472cxieKfbERX2pBS4BZuJ7X",
  "key17": "4kWhRmdhFYYtPRGChkgTFWrn64sy7f1kwSkL9btGfFzMtNFiZ79uBTG8UnqhcVe28D8Rv5wJDvzKLWjm4myGGyW8",
  "key18": "5zjcqf1bpyt3sS8LisTcoDDehLVMJNNZV1Q2KvhhMRnydAv3AFdZ2tks8NA2NxG2x6m7HHvPgv2FbW3HZczbQmb7",
  "key19": "3rsbvwVb1CPgsAsqL1TGidvQC8cpaH4jkhSJQovoNqSGqfafGK63sox7TWN7d6RkzjENuLXgFj2uDpk2paoK5u52",
  "key20": "L2VPaW6jbytECZ7Dn5YbsuVpVvC46eGRfsnpd4E5LC6tj1A9pakGdhzkPJwjGySaLM7ZLVevERvMgmeiLx7sfHM",
  "key21": "5WHNDpNJuCe4QmVW3QzcnR3VuYexMBBwzSMaBTGa4aMxTkjdtrtKpaXehV2fqfAyKjzMBqtr84FAENmASfdeBLA4",
  "key22": "5dMAVC846DryX5fUHVExjNmgweCg4U74ZeRSyM7f8u7koS58D52AJ2mWwaAbEU4Z9LBZVG42NWd5Pi7zq5pocjiW",
  "key23": "5cABx5L1WHe3cNEENFryBsiVcP36e9S6myjC3d8YTxJPPuJxE3myHc58QW5SFu237fs8BSWCn1VHZkkYA9piZtjN",
  "key24": "2fLQHgsfMs9LHTpYsmKKG7HZRzRbAQfEo5kG1cCZ1iiohKPa2cvRmQdf7Q9uJyes83r2NG58wWvhh41biLwwbvMW"
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
