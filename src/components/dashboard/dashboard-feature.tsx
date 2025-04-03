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
    "43gaqFvszuzhUbTykzZsdxiV5k5mnakBQbMVhNaCknVuAphZsHqvzuMnb3dQjvrNTSh6R5h1pKPRF8AZxKCYhKaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pUwcBt8oKBQJeLG77vi5odpAoiycLos1m7eFHWMJRL8QXRMSA8LYYGBGghTN59CPrAqcE4hB2BzdhCV8zk1FJUA",
  "key1": "3xek1riN4E8azMExQS8Hj44gXmoSjRoYLYzZHaF5XGn6NUBhg1LsjevShE4QY1ik5cbFrSiZekfU14XLR3amb1ai",
  "key2": "4i3PNqe2nmR8phNYtQZw2Ny3Qznn8QEwniyJj2FcU4a9cuYbcHkma7GanGBYr9yEhKFnrhyDEAJpKzyVCAY5q5vx",
  "key3": "3aUuZmFmYhgish6Tv5ebykCB9KitUcGvX8AFGgnx46xUiPBznBFRKS48ia4o4vq57fyjbwT14LoyQGDtAPxxy5M1",
  "key4": "51uFrj1P1u3zcPrLXHu3CcBPpB41u3j5FH6mz9asQqT8ycgZHfBur7mcLHPXMWfD2Jz3zawrTQ4zpSUVMqmGUmDT",
  "key5": "4ULwr4QE8SRPhFu9EqjM76DZW7BbPTvsCvZPGwv42ASsxSr48gunYzwhQfoWWDqe48aTF4RgyRXAz5hQyV8wv69F",
  "key6": "4KGFiir7mHu1GifSEZXGnLEpp6Ao7dnQGgC9fGqTyropxrixFL9YKB8L9jPARiD3sBfwQrHkvpF1Gd2d1jXZ1rtP",
  "key7": "5p28aH1rDS7b9778GtFhMJQZKLmaKGuaVLYZr388XV5WA8Da6iAWxgZ5L3DHrjcdB1QXWEz8zUbZ2qQLWxCAvtj8",
  "key8": "2qEx3iV5d4QWLNNLvT7ZFS4AofPAHm3KxhQfaAhTzZpr7rUFDf3YKkbPhRC4Lk1xumtmQkwqyH9eyrA1uiGAXjr3",
  "key9": "smtxyA6hPCNt5e2LWfah9QXsLsxnaiLvcuB9x5UhE8ungCbtUTjW3ig9KGDAoA7Pd9LdTrH1bThesApChff82oR",
  "key10": "3Q4NGwJ5vWe6EetcEanNWJ8EnZoTVAk2aj7CC6q1jYM3UZJJTJYP82gv1JzjcciZGExGttrxNXkf1oWNSwjnZAoA",
  "key11": "3dgcUaLnZXjuzWbq9M7bSceyhY9CyGDd9ZkZ899qnH2D3U4Mohrq115nFp8KJHNVc49PmDjgh3pSPAPQC2KExYNR",
  "key12": "5FS8gmphyZVFvECZvMuorbaCajAJ1q2W6TTzRpQ5m7hP6eC36covkkaj8jNFbiu5bztCF2kyEe1wjEkSGeVsXCeX",
  "key13": "5QxYLfoKZWnnnxXNBSeMacz9ihwB5cfh7nbFTX4iqBcsCVZqbCinX8hkxiHtnFM7tP7Ej6m7bmm68CWo3bMoGa71",
  "key14": "5i5vquJX6YbmYu3M9Bdv92HBSrDuxz9NHgsqxcmaCaLJcEMeTu5zbskusBsopV2YErJm5GzoJRaxPo87zY1mhoSa",
  "key15": "4NSp6DQQk8E3bgriT5BKgW1bJPpC3jmtuyJZhWxHMB2iRiikeXxS3ZsVXTBVQndStj8B56yptqDsG4EKnKnqq8ob",
  "key16": "5RMG5ehNavYX3CJRZY8boaatNXWTA9P9DRoji5BxQsZspBjaiFbv7YthakvVBnZsgJj4rAyxy3Xi98cRwgDokbvf",
  "key17": "5AVN4ruC1e1FEaUXVtiMUWEQkaUrbYAZXcT5iRy6jdgnp6nLCBJE2o2EaCoXGiAoT3KGdGYtrFZp9BcyYXLEcHDa",
  "key18": "SLGjspTtn2Hdcvr2TcfFrceCTXoXVQjexvebQAeCJzn5NUQKQagSdhwruUYdtJx98iHH3aLkmJSyGuUqhfSjNGD",
  "key19": "26rGZxMcjR4LvsWDUihB6XoggPkTgATQmUugTVWtUNuRn4eM2v1938EHFiRv1yeDbEu5RwbMwrTL1BuNNmYxsNaG",
  "key20": "2mnj55UsjBvH8Pfpkztu8gSieGpSdoFbtEjZEeRHkKTudERtmoQhsQxabtKdkdaFJCGGERkwRNeW4s2Gq34KPvad",
  "key21": "4iqZGVThgxvfkN7e8tNWkgFAz862JUcUJ9PtT5XZQko2E6iKNB5NJDo79oyyTcoqDDyVKJiU1LsiUXD7JQJin1Ww",
  "key22": "bW5sXgBynyPGNxBjsPgeKy3FWMbbhG247EK8G6aDiNAN9U3E6LdD5fFvkjrKLNdmUWtzSoGcj1NhPunwgnojL9t",
  "key23": "Gno78PTDsD2B7VD5azAsJtGKVPYRG1JE27S8EEjx3tDub4qtFJMkDtZwRm3gcX2V4MhnGyCJTmXnHN6ZLoAWNjk",
  "key24": "3cCjyvawQCrpMvNTBSFZ8fTaukv1d4nEV15Dj5PjW1xfF3pJHNte6xz4UnXyQKjawE15HEf5JwdmCdmES6maFWfu",
  "key25": "48UtcpGLbrQ7U5Go2iT5gKHNpaMHVE9fPqtVgp4thvnzSYqqcUT9xvncKWV4oKrGk33xguH8mAj3MkTqw1Vj8Crw",
  "key26": "4qX1Pr3MWdA9MmSXK21EkfnBPTtx9ref1QYDA13LBxNaUtpuyd3GJQ6c1r98NHhx4kcog4aqAAcmYcA584VuMGXc",
  "key27": "3DwmhY7HDg8116HKUegxFF9pzZrAwGjRzACfsws4f2ct6yVW4RahwB7kWv8WHL9TDK5yBoXTwkXbrFG84R1XL5Ds",
  "key28": "3vA2DhWiWnQR2XAmQuZUDT9REc61Ckr25MvqV1XNgwuNuc8VsvS1vMXjrCyy5PXHTXmVfzh99QKU8EQigLQUGhsc",
  "key29": "4fm38JzH1gzpjw3HTQGeBdWTTqWUmavmfivdTgiCQN7DFDLGscwdTMbB7e6dbaEB8w57aywC5xQq4LAPptywRBad"
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
