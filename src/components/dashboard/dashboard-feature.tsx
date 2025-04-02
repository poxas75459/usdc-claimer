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
    "23X9hzwjbqcqn6K5kV4ZdtLt7QNCkBSg3tHWq8mpJgPjgStmkk2jhRgmsuypbhAN1ogG8k978M9H4ZJbBWn6hXvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TDcLMUCTEoyB5QVdnvpJhRseXKSdvzi9MeCoyzVVrCtamuboBLRQRnZeePFhhy4josnETxoVQwN2e8mrtRRKjSR",
  "key1": "5i5nmXqXDpSASKyGjEXUYXA9vsmz3phbspf4BDj5R96Fe9UgjAyJLGvRRBSXh16F9KRPN2HekbZLcz6TeeAa1N8t",
  "key2": "5Vq4RbdBHJcBkHCFbA8qzYrJEdYVAb9zKQ8NW9RQAp5BKx3WiBiTz5ASgucivknLgRWKib8vSEXYwyjh5pAkP4bU",
  "key3": "n28TYcpSzXpxFZFSLb2DqksUEuDCpJFYBfcJxLQqCzFgzpoSvXEL9dibZPoroZe6Yxey9mGSyHspWcRXfkw6Jg2",
  "key4": "PV9jmdue9mFYLZmRoRhC7bhHSy6VyPGedTKys6RNDDG4RUKfnMDdWfZfTETdV1Szs6XjwnRcoXuRoiGwP7dPztM",
  "key5": "fAp6E4BC7wM1gS5mMJntB6CnAX5FkPsfEBUG1Jz5YB3GA878Q1vH9YfCYiGvDkNCcCLDNTKjaShCeZAyJ9tHnKs",
  "key6": "4SbgxahrZBr2ATJa3HrgYSUFaaNjPkJZKkWNe921kETu5h6KXVLkJJR7VCRj4mB7yPxM1PuE6cycWoNiVs3sWKN5",
  "key7": "2RRoHyt8wAYMtqF6xmyGMw43hSanDpnXBRpCQCuGZ9aBQbRdutPeEPsdgaCnbnLSm8W2mZ6hjQet2HYw62HGURWs",
  "key8": "3sJQJ9Gh4xy7cEER5R169m2QMUtgh69Lwq1Gvyib2rmszsAofdDyQuwDpgnEUDwyTHRAkuDGD6fNiVdvXTF88kX8",
  "key9": "P5tddvV6x9PVeeaQveJZsoAv49w4HRJH1Gf3CecHu46wmfZUvUsWyGvshKbBFMMKC7WGgLVsBo8LQA2xzu9ZkLj",
  "key10": "4PrqzN6iuH57qQJNNcyZBWeiDwB1NRBT8rXDNiJgJ9RAAVWsjtpD8c9aE6rtJ3sCRcBmrbZYTScHPmGbVndmQC2",
  "key11": "65WLy464vMbqNntCbQdmijNpmPFqNADnHNLuS5xQXL3VyHmLsfQ5ZHD854RteyoVwCRiZQ614vEwePx8Q2iCsALL",
  "key12": "2pxs1EsrycSPGWzZYKbKeUrhyv5kjJF7XkE9h9QmMHKE2BEMa5ngp6PDnNajzdeCVVJssJeiQ9yW9PAzwoeqs62e",
  "key13": "2EAdo6hSYGWr1EmBnAuYsmBapip3kTDD5ihc1k1ueMi3SLgR8LHK3sHiapWkXct2F4Ee6WNtodQopJysdy7fy3C",
  "key14": "4NdSqSLkshKwPDdHn4oQ5zXyyhb2qATE1T6KEDeuco8VEDcGs1WgNw8Roysq7fzxWknMycTjo6wKgMcszZLm8taY",
  "key15": "36qMh5HbbQKEbSo2SgUtCPyYEbA7knrkkqJZbFrwYLCuzwd3d6VVbUk6gAVSXSf5UBtyACBoUTfMAPgfTqQ3VfB8",
  "key16": "4FC5MRQEK5d381uCJJgom77LypZXiNddpYCwqZKpZFxZ24BFHwX4vDh7dYmDVkWrvYFFWGp9i391FPnmm8zLsfEw",
  "key17": "4F3zz71jWgQXApx1NbMJ1ueeHciYb67g1BgvNxtBccBJhJ6vDASmH81pDjKFLrpPGSvAjY9GcGpu7nFyg2DrTQMS",
  "key18": "5x1cdv26y22f4TMLVhki1FMBkEnBE52fDCcyyvAs27xTc7bVSPPdnBzzQcTYEVLW7uVqovzqhAgB1KdXGwHFTQi4",
  "key19": "91BgTfBAnLWFUmvA3hNjGqcC2szEmu5u3uNrGnEBuaWqys1LvmcbfmPpA3b2uaLyq7iTgP4WidvBbgZuiZctNzm",
  "key20": "2FfFXP5yM4G1HHmZoyw9NS2cX1Yfp9WExmHHzZyRC3Nc1FRz9JcgrrT6TnRiNYuRGiS9MFQPzYtNcTjA73a1Kx9h",
  "key21": "26GisiYbMsAEv1Md77sjPEQ3NXWPuk88DNpG8A6a9dGtzn9GMLDtKHev4FzctbEGWk77umiBbFjrv9Uyf719oZNr",
  "key22": "PAwWPbFPkC4hSkrVmdcYUhAEzuDNostvcRKPYzRiCNbcfe22dkFGLvruSoVAL7uH5At5PFuNR71jFsVNETs9Wxq",
  "key23": "4fgscCLCk5ET5ByqxS6odB3iw8mAsMeCdBnUSYtFGeMryot4DuRggKPdvQc7CThfEL6wtVfATbrkzmDUbkBhp9Rw",
  "key24": "6qRp3FDwor7iAg7mcLp3j3FmiLxjNAy91j67gKExYmkfQXi97TYu5mRkEwaLDxZPQq8KboEx7pttKP5g1Ajamd1",
  "key25": "hQFGtAAYrrGpxDdpay1haysNsV2ovL2F8gxREUDJrRGG519u9xDbYEKBv2k9StwUYuMXf3Z2NUv4rcsTJ5zsVHv",
  "key26": "3MsKYqE9GcsoFDgifk8x5UXciqbtqTy2XJCF7up7WKVNpHeWATohWuVvgEMVmpjveYeXaLZmJmZyhjjPwhWcyeNH",
  "key27": "2KcQ9jgi9PeqzNGmLWaqyioEWWP5v7LtmDAnjd5TntVja7TwkkLMTjDtaiG1L9EL6c2cmnotELVBZAEenZserMV1",
  "key28": "3i4KrdtTf2g44Hc7RfMTWAEMmbzgaja64aiu1yPEFD2Ssxz1RtgG8KisSq7ModdR7py8Wd59rjdHaV9ZiUGAQVGS",
  "key29": "5YnaGYihn55B7JXJewCgm6NQG7gumX9fSDH66Yk7Nh6XC8GyTeXkAn4n3SamNLihQ1YRQKxy6ZkdA7miSa1KzthA"
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
