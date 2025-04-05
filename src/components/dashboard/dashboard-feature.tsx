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
    "41aABa43m275Dv994am1gp8i1vWcMsMUYzUxMW1ofraTp7qjGL9wNzf9qG6tRmKGUPm2JVb4euQpx5gLBpswFPww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cco6dULoPNKSo4T832pMcMPKDotautX6N9Ds9S7NmKm5cVo7xjuzNy3FoUw2CDLoPSCfRttW4GpgreVtpxHofWY",
  "key1": "4GZWxfcppeJ4CGtzt6V7dFuXYmG8hBra2xRRriGinb3FByffAB4qrCDpryWhPAAocmxTwfGgSaNCtqUJsZ1ix43C",
  "key2": "sVWrVpGkFJVHy8P9L7eEU5gMNC2zrSMxuTEJ4zfQGMjKXxhxzgm8GJUNfrfLNuK9pZ9C7jghjt9oi15shdNHMTY",
  "key3": "5Bhwppn2DAACB8jfSxr5LuH85ni9weEJeb4UtkTgfhwdKLMVi4r7rtF2qTUm918UBoak6VU5Va293JLz1FbeVGzC",
  "key4": "4WJfCgTkod5mGHEZZAuwVMcj3xFPt5fKqH1sBMjPGLyz9UEbVwPUFNwqgMqTuKVXuJqtoqSx6BMNkxrusZekvghQ",
  "key5": "P5Esjghr2gR996DVJ2qK3uaWBBL1yciKtLEPcc4qGTG2xPvFP9VFjMHcrPgD62zGFg6z6wxNYhtmLVYgif47RZo",
  "key6": "53QuPjW6FoW3NADAoYMKixFoskgKXEQKAHz8STySKGC3zwmTvva44ixKn4ZAemznRe2Pu7cmWw8DT2vLqbVD6qpB",
  "key7": "3eeuWkcy1zqR8TpqK9Am4skUTr3iAvU7fjNyUJhN9m4wR4N3GKsZAXy5bJBcF63wwLDp6NSyixfRLM6ZjjzmW92b",
  "key8": "DEVg389o7fy8RfxBPchLCNHXKEEqRwFjgmj85NuwACihWDM4EJz5fLEoYuEVgXWFgk5HxoQxrP3nWvndtDDJGAE",
  "key9": "4wvCupKTAxdbma7nhkUrEt68z52j6SvRu3fffYsargX8bk2jn9moNz7yB3hgSi2w1wmaFCgsfRs3NfXRBptKWZpP",
  "key10": "n3N4EUETMQHmJYGmZT49GcX24BG86XeVTnpfQnSRW8Qfch3MdA9SdQcr8x22H4MgEmntecyRz4YjdR78pCAQKYd",
  "key11": "54DgT3vhLnSGBvwz1TdfFZZpLJAynXb62jWeAH7Mdnj5LiGQBhsUQUzp9xUG3iYxwSFgo1As5QDd5qbyATQztSjh",
  "key12": "4PjmbrGmuparEebq3K4xLEPjRBmUM9nBr2C6RR8g3c3yWDZ52s7fQVDfkin1ZmCFMjXTMAdenXCxSzcTVmcBft4D",
  "key13": "5qG7d6twULM88itssRXkaaQxeiqdShW3aV3UresV9pJqGoEqkgqiyg3zgnG87GNT1xftTM8cMrqYGFtR19gBtZeM",
  "key14": "4yF9g5wRSzw1QMxHF4XY9CqEdrmN66UUXPkSwQTyX4bYpHU2HptTE1hE55m9AucXbW33hHvZLUVeuv3ZVAVFxxHm",
  "key15": "NVXn114tHCf4Xu1UfuiGu5X8J1jn3DHsYN1Lm3jk3jZtV1Si5pvQbpAvUsHoUk8aqPY1WQmENe7MNznUCe4kTxt",
  "key16": "2276XkEN2LCw7LrUHgCcruspRK4pLzRiM7UfrK72vJtXZeukhiv6W6idME6CjxUr1eFZdV4wrgMHwjoFtyJ4Bt1T",
  "key17": "4VNzYrcQok6GsQULcMg9CXuwio3z3Eryhnyr8wYpY3ZWLQjGTMxtfUq6sZqsz9SabH1GbUCdQcedWZMTyU2r4P8N",
  "key18": "D4ovdfT8mwn6TjgPjQTaZ9WFAEFU414JtDGzoTpPmNspjwuuJAKsDZKck7H9eyuNhYmUuZnXBTAsrmb8FLae9CA",
  "key19": "25MBboy81CT28cE1Wov54m4a238bsRGqa8mR9sjNukZHdRdXkAnC1n7QWRtorx6Tp7fwwBXFHjo2LnPVHYRpLBeF",
  "key20": "4URUFCoLzruLDMda6mV4Pq6MHRFdwym22NF7vPhJC52aMxrdgSD94CdE46e9Q7An1Uq2KrLRTHtdgRdXF3KZyYY",
  "key21": "4sPMkD9u2RZhoJRHnrpwUdnjJ9AdZCDGiiTpmFym8KkFKYmQyTkx7eezh6j4pgtuDqpbixCwbX5dxvudSc6wPeSR",
  "key22": "4yqJMart58QN3HjSxndd2PMnRx5w5yqBp4dBizLUMDMy7kazXXPFpghkG9wauJoBJzuAEfWYFKiVLyZYkgyUJehk",
  "key23": "4GGsp1Uf2Urmi7PiYvdDidqLCUgnZzogRaVU82jy7uGc2HqVTsRMpVhWd4mrXxQ9PkixtCCEKxiazhZwZZqseETh",
  "key24": "3uS1ssutfqFUpoVVEUXkmPsHZs7YMDEYN8VRGm7VhbT3QDhwEwiMeEeZaHmv9ofA4ZtyDdTibfHQ9E8DeAPz3kkW",
  "key25": "2Y2iBGVPgyphB1BGX2zwjHuMpJHtBtLGeNQ6XfGMfDWkokZHkeLLvmuZVYN1rkGnUjntU8kM1K7WUucaeRHjzVFc",
  "key26": "5GrtYHfPVsyzmd3P3JQHuqv7znFDJiSm2e2tz4umoJN9QKYhQwxTyh3HKFNso6VfRqXNP14j2ZULx2b7YxEDqwfb",
  "key27": "2NtZMb2s2eUtsftpEGGNbXst6AWnGrChkiyDMAREhLaRMdqgHJJEcnWGfuxBP9ZbUKTLP1onrWjkXjEhVg3dRy6y",
  "key28": "4EtTJRfUsFvpYcfDwxWU7omW3DfmvxNNezyA9VLPW9Wz8NVYgYzPhJepenLUiXEAiDwEfxXJNiwbJBFFQS6Zid7v",
  "key29": "2HWV3ugRTCku4jQnzhYbj4jm4BRKHx9X24fHqA9svbqM2J4SQG8pPKVNZyQHQBjgJB4D3LMtoQpGMMk97ZjEwCRa",
  "key30": "2u69sBqWaj3LzcPjFUCdMSmCwx4z4ve4yhiX2vBWXoqkdJ2ZM8w4UAnAN5MoGB54kV8CQhZdNKxobFdjKaKxm4HZ"
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
