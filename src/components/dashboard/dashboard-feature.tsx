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
    "Uvm1bFv2N55NvnEKN4u2P92VYt8SoosYS2WMzK4yaf3zJXNqtAAHm5ZV8unfxbPQj71dSqgk9aWaamWq6Y4KRJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rxkvJDd6FRzQuNvZP3dHnfcaZjfjaLNqKzoz8P3Z9gR9wQtjMWv767kww8oux6ZRHn7Nxp66QKAtxA3HzsrXahb",
  "key1": "3mcEiWbcDUZvo7Fv3BnujQduqBsDTyvX1CSLX1Q3VPLDTGxXme2CopGvnxekMZ38LRdLyq2yaxE3s6ogF8z2sGTd",
  "key2": "5QE4fg8Qtsf5vDfGy5sm3mhB8uZf41KSmmJdeMCxH5A2jkPsmqbZP122JkSfxATuhYu4AXx6N5LW9sx4GBXnUdYE",
  "key3": "oq2Tr2uLYocGexNcEGPEQdY9CSsiZRmD3ySu6J1yJURH1FcpRCYQnervXsegnqYNWLX2iNyH72ChLZ2EVjDGUvH",
  "key4": "oHec1hgjbZT9MhZGiDpH8pReQYHHyLKWJtGhrNz5jCJdgkZeyo6hsqdtsDxuc1f9YBuyoyRRyLoUcXDHzKgu6Cm",
  "key5": "wX5xfSsPcTKMrMiedQ5dWc4VjHQ2oppQPjDmMZ7jTc6RP5oSUmsAAJRRpiY21dg5MKJcMT3KbGnEeAY9tbtWxqb",
  "key6": "63LAtXz3Z15r3XAhccNpy1iJncT1PB47fz6PbuJ5tFsL3Q8z9BTkCo4YjTw2winvLCKUiJSSzZwH7sBqU99EZCUz",
  "key7": "PkDQiT3WauDQnAig5JyjtQx4g2An94TdDUzawnWSz53xXcj4rFYW2QBG6pEiq6RJt7beScidDr5dvoEZ9PVuq42",
  "key8": "5yLhTexk8R7aJLQonLsfkwHNurx6ePWkZd18NwTHjThyaykADCZS8wvBcB5az14fzow3dYrfgFPQ24ut779A9hZW",
  "key9": "4DZBJGZCy4EGzJbWWznCo2tXSTNExPQELhUU1d5oorJ7bMHCy2dPinKZkJQ9sjaQDSMvx6qe11ZJWsdEGyKqW8tY",
  "key10": "5zbeb5xj8WDJGYNV3m6wx131Jsw1VAK66Ed2LwDSNWqmrQEC98zttC2iHvcQKiDzdHg8CfeQbLiogQPUvvbYaGCV",
  "key11": "3uJHDVae78ZwXZBepGm26z86kaBUYwEAgEmKfkZQCAoTJibi7s2o1nQBeEJiNsHydnjHGXymzR3p4eLeQrd6j1jS",
  "key12": "3EjHVc9UEquqXV3AwVCBNkw5AJsGwq4SA6pjuVCGMrmxJuv6jmVuxYPV7nQZ2EFfYAQHodDHaoEQNq7szx6fnjv3",
  "key13": "QErkGWQDB3ABK4WXpgvhMUc9EjkQnNAhmTjucd6SUrgESDntur11EMxkSE3qdw3BSj4T9SA1vqki8etSt457UrS",
  "key14": "2oA1LRRKe8dBMVWRTTwNJcjaiGum6mgyA9j72H1f58rCMVXGAXFieF3o4Q77Z7Ybjz6uNPwjQF5qeJdiaiKfXpHZ",
  "key15": "sTEhP5GZf94QERK5ELuuiEe17MPvfD3Eaz2a17XY87o6wCvqScJ9kWHXcroehpLcrA3SUcw2VXTt1iMmZanKaEo",
  "key16": "vYJbKC7qsS3dHES2WFC1GMHYTcZK659SxabU7jyfgzBWn5yTtewBMS7F6m93kcs6rmJGrrRo8ku2ZyQFEbi4e6z",
  "key17": "1QFWb46P3a5Emm2c1QxmBuXp6YwtSQ71P691WjyNyby8CYc6Fh8St7MEGaQnVfJ4D53qarhhsNoNqj8qikCYVmf",
  "key18": "3JnCcQSU6oxdT7snDTXACwPNUTZdCHXQWKHvdQFQatvGsivNfdzcYchzaYrDeo91DJ3uNLGSXUnkfV1WewQGDS3c",
  "key19": "2sTkQKzLr73WMQQx5vSDjcQrkA2DjTkdkrSUs5FQrfeq1aWXgLkBp45kwsk3MVjRZot7S3NfE2mczBf6r8qEuWNF",
  "key20": "acGsBVkUMEMm8ZwneHjzaK2Zxnn75sZ9FzerQHVzfQW6rSrYhGaa81j98JxxBffsFQq9T5Xa4vfZm8CMm33hSuQ",
  "key21": "2Dwt1Zwt4zk7EF514XpuEHupMK8ydaJLF9sqBHKL4yQ7jbWBYqXLUofPfv747P3Gm418N7jKTvnAth79yPjLu6Mm",
  "key22": "4WEw4uZsS8646NSKsqb1KMvz52hFXvDLnqTcYJPqqgb2kgSFDgvVDL2esuSCvEhjckypSNXbzYayTwFUtwMAtNHM",
  "key23": "5EkQAPuigqaD2fU4gwjXd4MoDqVAfp3y4rdHs95A4C1ykDDmpUdVkNjaxZnm4Pnrxi8Eyvt6yBqyvyrGPyXWuFS9",
  "key24": "5EpPDPrRLhKTtwn8zqjmHAxkVdaTGfpARUmp7mXj3PL1pdAZjW3bZQEydZXVt9Wm8BCnVZEnG64gi3Ux5raT6tFi",
  "key25": "3jWGm8DCDPeZBGijUAyLPCHjntiXniNGcR2qCPc8dYbkYFKdytHfd2tCFC4D6hYuXejG3QgrRmBnbWAXPw4NpDki",
  "key26": "3B2yqX2sGLiBjWNPiMSYYkcZ3enraw28TNzR4BCPcYv5HkvKfePZedzW6hpfC3RCK2uW35QKv9qgqHx2p2c53456",
  "key27": "4noDqoCwPeKMpJSkb36Z2m2DZNHKYDyUkoDseKGrVbeoY3a2Zsdf6fknri2AsXSRcLbaSWhBwRMxE29qyDkXMmxC",
  "key28": "4GSqjRuNfKLhU3Ga1K8duf3LYhx2UKfSnVE4AZCySrVbVcqkcXzQhsRRXGFTH8XiM4UAprhtFa7ytRcsL9hd9AZK",
  "key29": "3xd263oSHK5JZKA5cA9HzrQV4a5xXJLEGHcxNBKcSqCLBYAtbU9YxJjb5XuX652UJEPaLmY8VjxknUZUpuzoKnSA"
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
