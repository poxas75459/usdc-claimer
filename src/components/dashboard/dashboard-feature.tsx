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
    "5spJSKQdesqLjgfRfwsXG5JaqYiVLMzoFdqLqJmxk5Avo6wVzbDzS1byCsFRoPQiKBsWqXm2C5JcYpMffyBbMP6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UkUv8w4hVJwFiWEdFMUQCoWDQaxmpboZwb7TMA7qZ5ifDe1mGjpZxpwBcaycCgdqCATZbE9juCPZxk4sNu9i3DD",
  "key1": "t3KHtKp7aCgd1aHT6CwJFNeMjnptXmioGJZRA9Z28mtmdqro1DmoNrijpqJ2YGHX2x39wZWQF17nCzWwVceG2eq",
  "key2": "ECSsn4nrsEiraBbCFQqWoDFNvhUFtL2kDvDL8Kc5Uk9xUEnugxBY8QMNDTac2ktSTKhBLFw6pBXLzAd9obwvifV",
  "key3": "yPF52Wv7nR9Yt55wtTCdDKdAbkXWJTxaacwAJ9C4X6nAhEqenJaRWmUruDa7TdkwQHZ4PZi1F2WgAba2CmzhGzk",
  "key4": "EhpdjVaVLVg5Bp5J2BRDDDLEyr7K2XQqUsLb3yGA2eFhjGGrdcRSGF5Mqv7CjvFMWkf63Si4Uqm5p1FVP8Ny9mW",
  "key5": "2p4Q3ESUET2LHxU9zYLGB8oZain8WEhzBijk4LKkgMicSnyUXL92eygkfUg7XMdZorzrbxGceRLhjzH1iXBbsoqT",
  "key6": "5YgkjZhqaBHU3GAjQJs65Qksf3bXALEuuR1smBmVDLi99NP9RX87vnyYPSp8mp42sttE8hSst3ryPkRXQeA7aXy6",
  "key7": "2dEYUWiG9MyZxsaJsCoVEX6PrgjcuVNzfgtpd2KT83xcgfy6Ss6hWEKBPHcbYGLjqNpN9rVMdMEtjW22xoQG11Lp",
  "key8": "ehko6Kx5wb9of2mouaH6UquhxDxuaeDSNgTkxT8Ss3XWhS48uC6yUzeAVRAkdusMB1EVM1YXC6hg1fBDzEC8gGT",
  "key9": "5tyQKHsWt2cTkKKRqDQFjrA7FLpXTwwALzEYkmNZK77QHAyLno7LkcWTT9taZTef37FvUJ97wrkBHi4i8y4gP1Yz",
  "key10": "3t1FqvxETjYaDD8gWPkYCPnh1XwMopewbBaaieH33W1PvM1CD313px9twY9A8WCNnuaUC9Us8f8VPf96iu1pHNmJ",
  "key11": "xvgogPTTkYtvTyTuDF4UEJQCztmgPhyLA6c95VwqWyESzNCgSQzdMxEixCMk16JjhLFwkHNr8BsjY3sx6wNEE9D",
  "key12": "4RXmsysyjiqtEvZHf4cfb5bd1ZGNnpizkZzaYyGSRognsZqD5pvNsUp5vXWCV9Egsi5SVtmmsHXiNrXrE834D4x2",
  "key13": "3mjVEQfuyzQdhJczpVRvK41opVufCP7Vg4Lf8oooLZQugBhmLogEfa3KKaoC5bEJrY1qcADiDcAnMsERq9M63nzm",
  "key14": "5TqdYrBmCdSugFUtLEnm34oRmQhx3EBykZwE3xUCg5pY44Kt5B7eyLB1PJJ3XNBbR6vZPJgVfrmJSk3eVLbvP6AT",
  "key15": "2oimiDiBaQYKJ5hQUeWwq6r4agofkzBsMBfonYQxe8XyJXcDBqwMZGpfZY1CnUE3ZJuxe2fZwr3xJ6bAxzNJB8Hj",
  "key16": "492rbdDyyfA7Fh6ysD1qEfyCXkxLE9rjAsiSoEB7LEWthqLaMFpGjCJFJ9Pr67iPNGGk8ztnCtRbitAGAH695a98",
  "key17": "4nnYrNSFtQRc93v1fjh28TiZ8foYUwbw3Cv6xgkzMgsoxq8gwPzqAYs1qjfsCLLNwb6vDGRHosWYTPF8mVioQb1X",
  "key18": "4wkhVkwte4HDGysgKzGBcjnuPqnwmRaDz98pj2VmdHicTWb9oEwqGSj1ApVBurh6Y3sYr5a2R2PrstYfeRBEQWmp",
  "key19": "39rzArTtnfVMKSX5XxQAjiRAzRCSjgrExJe8UhDzgQVu5HfkxxzdBj9pKwuu1XtD2hjwXKqP3gWu7MReWypxSVT6",
  "key20": "5Pc5m2Q8MPMZgd8Ess53sDxkraBcCTK33ocAfpotzWiHkFwkMeh2KbCeYvDwxqCvLXA7tinJMRteNuE1FegtsW3K",
  "key21": "55ny6BMNkYR6cy8tvHpXXvEHc76fR8j2simi2nFMNramnC5ymKUs2xNwWgdzeAceLR2YMAGdEX6Ze8UqYZDYU1U4",
  "key22": "4RdSiMJxa3w2zi7GRbLPo1U876oNyKvPN9KSgH5ntfNLsZ2JP8xX4V2XMiVqZZeG1Hw9A2TTCJgSB8QCoQi3BYtC",
  "key23": "CQSFk2eZwZmMDhHdmsnRfbku58BRUF5JJDcArhhSC6Wvc4reHd5ZZQLGaB7KKCW8m8v2Y95PBRaWRSqHEJXwqRY",
  "key24": "AoNfRA5xDDUuwd6y47di34CQa4MYgrMzYXyx5kw1pdttAHX3hN28Qq7qMvpMwcxQ66iCX9QYxzyhEwSTspKfQng"
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
