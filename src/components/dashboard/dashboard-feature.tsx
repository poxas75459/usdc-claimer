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
    "4JjnvNk5ZL8u6wA1CbHw4L4ZZ8aKVT7Z7jxm7Z8YekUmZKkSMdws7bgJJvkFV9QqWZd7qhTpwRbHeDqXVbTfWK9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oQTEBBJPMAcPqgQxSt3qMvP9J8gCJnjEVzLTLJfs2kx3JSnSoeaVupUjDmqcX2MP1HW6m5wFPirYbnTeaEwoNxo",
  "key1": "671tQPxP56zNnsVQvXVx8zqge7bFxbNWYKsf51D6Dgyd3gXiViQE1yfTvaBkLLkMdm1qHrCvz7qfAE1quPHE4dph",
  "key2": "YCWXFT8LAD4SxeYCk3ZTq8DqmUuWG7Z7yHgvXkwDVZ6g3XVKUMtDc8GWTEfnNEZSpNsGT1vmvGHMWnZ578UxmvY",
  "key3": "23e6EwYkRwrs8ABBT3r5HpaE6d854KcmwXYbNWqxNNFmxwkFjBdkpKW6JQQd5W9URckbfb7KwMH3eFAMSTuTmB1s",
  "key4": "4UnTXJLERh3mdoeKkjwa9z2pU4AHAYPP7UuF4wHkBRmokQJH7W8HP1T6nvmDLvHinySMw8ohmGED6bWrMAu8QNku",
  "key5": "2tu3J1i94ECDFNFb37K6hLLUps1bBqkvmqW4yEbYMdHKqtKyx9Rd6VChVXtCLQDndK6iG7iMiXACVCZqqNExPECF",
  "key6": "H53svQQxB1XStSUjortRtrKwr3zzSm1JxYVhXbDZ8dS1tco6uPe14owZsJUCJ9iAz7R6fDWWoJW2ncNUfHDT3q8",
  "key7": "37YxE7HNJpPHQ5dD1Gf1D6GwsTT7tniqTRST42foQujA9wkgsFGiRLiH95WevGshtQR38PvKW2vYoP9bgjkE5h89",
  "key8": "NEDiGKkD6n8nBog7sSxzkwwFyzhSojkHyT1XJHW9VNPW6hsUg5BFzrGDSJMTLfppqECyQcFzeYtwCE8e1N2G31n",
  "key9": "2R3i2B82fivWA2gU63S9mrnNhAd6GLHXBbiJQEP9ophUmddXRHYgxxwqj2JwKk6F5855jdGttCCajKzhZAVVaQRB",
  "key10": "RLguwV2E56tLkwchY43hHmizs31LetmfkT1DxBNcMciWbUsvVKNxSoQ9KJQ6dpwZz8V9DBfsnbnvmKweDnu16BZ",
  "key11": "2uT4H2XocP7YedFNxYsssoAvY3RhPWZHChxUqYfcXzKimrborwVR1TxpBJoMsoJW2AoBeLzhnekGGyhU1aLUdu13",
  "key12": "4bseJmUfwMGv1egLHhscr8dRXTPNXqXWrmcWphFs67jcyx8YXGdt1brbZvQHBudkyxiquMcuyVuVBMDy6jJnvoXe",
  "key13": "3rsWLJQnvRyM4ernSPP7LcZNTam8ef2pdpqfU3f2VvXPACprMCmvWGheiLvBHHwruN7ByE48qcpVRSX17bQ2dQWf",
  "key14": "38rN5pMb6Mod4o3VxmykkQ6fZm6NrLhGyDLFzcyEykWtWEsz56mPp6a4Y1zfsv38xpHaE9ojAmUyD8QUPSmnbMVY",
  "key15": "3pAa4tz1JgRgYJzvjGStXZQTbjkUYsacYFwcDL3W7TaQ1qKVdU4mzJdauZLRXD4NxV4D2YgPxUkQDwJpZ8ioSCEs",
  "key16": "3irDcDT1QSj46iAjkj53PtkbztXZqbCQw6p5BuVYx8s475bCDL9jCLUJigHetavaus467HQdGbg32XX9NdLSJxwL",
  "key17": "2222JYv2BcnrSzGyHLG9H6Vbh6PxfSX3HLp9JbJF97ZXiEAVqCySmbuP9DdPdnpUYfMW5KTTdqhjuqGvte866Pwb",
  "key18": "JVqdSbTTvZ7YNhqucEd1kEWpgmG3cwc9NaN2nGi1HBrQdCsQQgoCyLanNECvyvJWHeAKDm8gRBZqZ2BJYPDvqoU",
  "key19": "4jfZGtnX8CardMv5c5q6jinGZnpuBCN9gazoamYf3rtk5DpY5yG98gneEsHK7wDXTxFSqm7bHADmNTMbPUWjAZSY",
  "key20": "2igjiyjqJyXntE7WRFSpEoroSvFKCTZAkSF8QhfrsBuS8p2AAnLDpgbyTUzNfYSuAz8c83zjaqGUJ1Bu2CCRz8hn",
  "key21": "BhtwhJ4XqSBnu8y2mjGrjREBkw1hD9Fd4TBwwnApGiywncciZxsVThQnJpmafrLE8jQ66tZPkhucTLGZebu5UFA",
  "key22": "2D3t9ZfYf6oQTEvHA7XksXpZRnwz7Qj4NrA3jREFYy52due3Ry5Wr24d87rCpTdskqEqcobZ2Z3vmyvVvcBdeQse",
  "key23": "5Xh4H9sLjzmxfkTBWgkMJoGdrfNahArH7FNVHRgDUMSf5DnaJ9fpLh8BuyEnBmDGtU4qbJj3snP9AWyt7LwH5cnu",
  "key24": "3sG4V97LffRXxiWy8VCLoMJZf48skKfsyJSEywGj4JpXj7f12Y8Y1WV4eZqNTcA3k4f4qbWCbVi5AgBFGCrtAoAu",
  "key25": "TNMuQWXMHsaTCa645oPks9MjcVXS51pnM51F2VE7MSX9MJBfe5Fy91L7md2Ah4qri1hNW9etmbxeYN2PTVCDc1d",
  "key26": "3ZtxqAkRgqEtPyC5G4nH3ru85bUcEJrbXsDQMxsyvnncfLBrLnM66rSirGCrmdZfsB7T4u11mU9KcQABD8HBfDz7",
  "key27": "5Cv3fo5h79CdDhXEhr563nPKczgPf66pNBSGPnjb6XEYdeSdatfH744PqHTmFSgd5hy4UAUrCebwMCi8hR4fRBiY",
  "key28": "33YP2MoMMhMyCdvk3Nzqmhhyi3FbsLKCbQEaSPMLzHnhCusBNCg1kHvtBdfyGT5XR5HBNKdXCZtSZz4PwFKWTmn6",
  "key29": "2dihwvz8pSR4ykTTZUVQcKXAd5yAuXDYgG8drnHbgYJNDtiXvp4EBwGrbi2SwhYXCfR2Dd8zqehywMLZBgyVxHdU"
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
