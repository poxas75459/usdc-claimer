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
    "TdjtuaUnHrRPna5gfVWTnyHBCikCFdmm1mNfVcdpoKsqcWkqrsv6MSKaMs8umCVesecxKCgFbqQPPET8LQV95Ni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y39ygxCoQLFRBp7PUXoU4avX2ArSyNZY5LETDqLBeqad3Xtk8Nc2UM5USAT1m7EsPMF9ZRLy3CaLALSW8RE9fCQ",
  "key1": "45gu3VEuQJWnRRDERBNFsrVx6b21rLtenh2Hpoypt6cEsuuaUWPN7H9Wr5YvCY1uxmVxbxkyWysgkv1wjeusV82i",
  "key2": "4UYc4UZy3XBiKtnFTFqEY6U2o17cZkds7NqurSj4iUkTi22cKD5VoWYvd9vjjEkW4YEvc6hrs1Frt27arEHFfMqF",
  "key3": "2fZHnQXb2qyrhhWjmrjCPAbFMZEpvv9QP6wZbNDjTEMKpreGcZXiaK8SKNWuPUakMuejCfcwNee4Yf6yvZnVVU7a",
  "key4": "WEuC7KyfdCeu5eLYxm6LgLadjo3DRhTFahM9ateGnQph2QKpT5c1EPtpzNWhxjiJrkeWhZyUwLDBmZj25m5cg85",
  "key5": "3YPbtE2UCJjMajPeUfm3yzn6FUSbV5rhKcDAYid87Hz6NrNArSv8bh4uNYPzDF8AoLEYVAfTkUmwFQtt2yFrdf6C",
  "key6": "FSuKaD3eRqHnEmFf2w9VyrTmfM1TdYh7e83FrHweUiCESig6FnKEqEsfPJU7SYZTRwevR7vdAmTD5BMskF9ZMTJ",
  "key7": "2fbmYazZbh95MwHH3gBZcFNZ774Qdhgo5ieAWGTMEvkCekcbnhCLFDrNUdF1BtSsp4d8Z1baHuJRMSM2t7rHgys1",
  "key8": "6sPw31nVSquxyJrJLt8yCjKJVkxhRMfzjMUmc2XRyazeKgLisydGDjS4Nbto6WEchxx39qxeEwGLeWRUA7zZTRs",
  "key9": "UuKWwjyUDtP9fgVuMzDf6EmzdvDvarcm3yfCHXJFMM7ir8SQN6UH5wstoEPeCcR918FbRjVytZ3zc19VVm1xsQg",
  "key10": "2cg7A7ChjeNEUQiKug8uy7qPw91yE6h8S5uND8cTVEn8QSNNjb9RQCNzpcn9eqQhCRoECGSf4q9GJZZFvz7k6LE8",
  "key11": "2mSh86fUj75aTbY73kTyvP4Bqwxs15H5xCnv61kM1mmfkzBQACfoHkmjUDoWWjHEwNimUdersx8aSANv8obgap5Q",
  "key12": "5LLJqFeFfEQHuvwEQicgFUTh3TLpBfWxz7mYsUx9bM6ibJFmhgs9g7vLMXNpBowwiWsEpbuYkZSawscGEDKTMwmM",
  "key13": "AURTe81Erf4tTGYuogRgRm3VrVu5GVX8jCPUGT5LtyUmQdetgwwyY1DU1prGApC5USDJXFgoLKV69kPRBtPfSfD",
  "key14": "2JBmq5zsvDcViHWbiwK42ZDonpzHy2gK4RTpoXFCB35VbA2UH1LjKFrU3v6yxZX19F8nuvXLcififa8fCEiwaiBM",
  "key15": "wi2452hcTK5ynfnpPDRkxBYSycKHDabGjhfT1hcsH4qdS5xQGjMDgEqxdyBCBztFBAgDEh51CpZ1MUWsgqCziWJ",
  "key16": "3YRL5eMQ3imSdm6J99uHEtfGKa2bUAWwifBYFTfLpsSmbnfZEvnGGoJsi45pwLJSKK5bF5aQ9SGujkU3WEDCNSmn",
  "key17": "3BQGt6JEohUuVTXbzMq9MmhPQyzxdcLiMyrGbFWWWxqty7QkQ2e9Q9bQarq1VqmoccHs8GeveLRxXsod6VhAFfeu",
  "key18": "4nwD6CZrSBfXMerythdxi6Y7sXqrkE3Bu94mjz3PdVHcdZ1QjoMXrbwq8ySZT8FRmywyvJv2rco2hhyFfP2RedCW",
  "key19": "2qUtik74fKGztvShy8NMRsduGABcNFsSAUtT2P5z7P5UhZEh8aABgu8ZTs7NhZVQTVmJiaNKtRrTEiAFruepGUiF",
  "key20": "2rJeVq8RBR596E2FCZkts19N1s7dXjz423AA3gNohdjAWJv7gPBaTBTfKGT3Nw8epioeudxdcBx7awc7jt697rnY",
  "key21": "31ubHBrywf7PKbToEYWCzcECY2tWDvASGhmyqkLzb3hDKR4JfpWfxjzFvu1ZhJvMVWFPgyVDM2b9Mry7HfvkPCz",
  "key22": "4n5ApF2Lpk7NLpeTymukYFG4GTf2kmr24ByeCd8iFA9jdDbnPrmSX1ETcALtutRfPGZ3FU81zwqmQDcKgrsfouoK",
  "key23": "2cySoo9UUNDU5Ge9yuRmUZHNxxmqzWBa7MpN8bDmYo8F6Fw3e3XQedhN9RHoLEMkSGGfuQTx3qMBnNKa7QXHhWDo",
  "key24": "47brg7GkvSPVTBGau3rGAK2nmTvbk64GN2HYAAVi1md5oi4KzhNfcpC8DU4A63NWdZybX5gth5C86SpwNQWomzws",
  "key25": "2JPqLBdHQwz3nTLQqQ4fEuHrXWr23FBy1vVcZj5238fzVkMUGftS3mNDifYnwnH1ASG7v5ZoDJ91YEL4D3VYoq6L",
  "key26": "29dPxNoJcoTWvU1REMdLRPRXM5mFm3nTgUVcygPy5fndFSFD6bciMypmyRYgEd5WHUYa93MjvtCFy3KgfAu7meL5",
  "key27": "YXEKrbUH6L1HAZLwpLMzjcKMJNoSEXh2Nb8kXz34e1ReARqtbAixLG79VmNqvsTZwh9KLBsTzC9a5yHcaptYeeH",
  "key28": "3uWHHpL45RkYHvDn3yV9kjPTxRb2XktHgUs2RKR3Jb2wqZqbgz5HBYmZNUSWtbSSpfLhWeDXtzfMq1bp8yA6R1ym",
  "key29": "4DmgiEjPJkKByKZTTLnVAXAKbmeYM3d468G7ZsKHAQ5sKFgmdpMor99ktkpbQq1htafY8b7wqBNksJHQLXAzw4sv",
  "key30": "5xMQM3472yataDtwyCeLNA3SZYhUUERcbia49z19v42UfrN2WvsjAtoY89P6FghBFuNKWUGuAqhea7DCMaWJVaZG"
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
