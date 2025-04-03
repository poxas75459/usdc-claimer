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
    "QZHsgcyMiDSiQs4Bmhj9kUH5rX6GGJN3VV6ZFrNrwZfBiM4XkjGaWZxs4WZNb36ohC1jmTMSRzL4RxBFnHdFPSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AtLep5KT37PCDv3MHfspYefjN8f7QJEMkMrrHopqo4oD1oWjHSmbPVsBaGScxSNgzpH3c1pxySohYzF68o9XgyL",
  "key1": "5BMdn6Do9HveeAbKfgQvuBkVyS9zrb92wcdxeohq6BJ7F6XrphJDZgv9UAiEf1oZBVxGYMxBbbYYdRMSFpYPRPPY",
  "key2": "3HFLsB9xw1UzMyAkVd3D1cKdq1YYZPx5rFmVmSUJ1rMZUyxrQmfqMQUbhCN4KkRSbUob3DCJymwSPdWThKXgBvaU",
  "key3": "PXS9zqBituyDAMxKHWYZEJNUEwf71S8pp37r9XKHy3VKSafgpptHD3xgXCtYCaHKzwzVZ4XESBYHk6hDs3DrqoD",
  "key4": "5VNpiBDfbPqmmz96Yre3kH19QyZBvT5gTR7yQDZhTB9ngFMoGFbcDwbXo924K5AZUm5sChxfDo46VDs71NJkrVDo",
  "key5": "35ruVFsMdiJ4NqUinzMySoM1KuxaLck5YaoJ8Zq52CNcGbatbBWcF5Kxb7fehDXFwkSUPyBhiMhYTuo6UHWFutyX",
  "key6": "5fq7GtLKqiAcHJVMo8gwotyFbFqQAbrfDaFAxUoLGgJ634r6p3YVKvcfJRMEqjBfys6pjZsfB8vvHMUPfhCHUztV",
  "key7": "4oCHr81xcY31UXhypV2X518S23PUFAycU4oAiJTPhKogyCE65KQyMsBwhk5J3cd69ikMqvby8WVv4gnmYFq4T6xt",
  "key8": "q116H2oakAhcRpVjVuR4JEiJSySAe37rQEXtPCPnhZZ8Aubj3mboshnhn6ggMa1RDjD5V4PmdB818Gb8vdFgDYR",
  "key9": "2DNSWi2WixPVTVWjMKKdSYdfwYuorqLTAPmC5XwY16uzku499atS3PHNBpKSpjV7wRbL8DcLaQiELUe6Bqq9bXEx",
  "key10": "4fcjbsqJpCgvJgxJHUuLvNNU33SYYkaXCFQ15z2VxPaChos2BjDBDdQEwGrskjQYymz2ZXyduaV8gX5ySunkXX48",
  "key11": "grzB21urS16rxfvB37P4pN6XYZGxWvGpDzPEyvQCXaNBNJqCT5VKtGhQgF9fZ3pgQzXEdsg33djXWBZFxdp4jDF",
  "key12": "44HLwMqQmPAh4c1ThrP4tBUqG2NQPvwgPyfnob7TXWhC3rcGcDYR4uL2CHSpt5mf4z4Kq74zBeyeUqRLrUTdBhnw",
  "key13": "5f7hcHrW2mKMLDc9GS7wrtk1Wk5nN8Qrp58xkMTR9ADqyTMRNWeTPCxqs4njM7te5AYUTsSkZ6WYLtJv3MQt2jHf",
  "key14": "1Qu8s1SBmM3CaKC8GQmkQbneZa3xV6vAJxeguDNJhtffHorFEdfWabae1wfB7KiY53ZoZPgSR4NMR7o4mAknDTb",
  "key15": "432mL4MTJdLgveq52uGh7zHFxvDEq3HNRRa4hNbS8bumvhkLrPGGzm3NMWGhmqbpQSX8VddVhE4T1yGggqVtZ6sY",
  "key16": "4cLpyJZXwNEV3BTHutpAhyJpaeY5RZzTsNUX6m812P6NrKuo3SCH1HjvZTmriCWgfH2v585mc6semeo8Nob58SGz",
  "key17": "3xaqXJTsTVFawCpr2Cu5mhtSoZh7bZkw3rSEGRqV5CzRYL7gwFyK5fF9THe7iSeDVWVa7xwKTX4WrB9r92sFiZFM",
  "key18": "2X4ff4LZqc5V3JZbTUeiCbBUYvRRq4vSJVLWU5cEHnxjtThenwkgnwZpYBURBazUmCQMRPbr8f6tMR4xiqMZrSBP",
  "key19": "zEuv57KcWwNN5hJmjiRbynn6ZsiGbbiGni7PajmEJAC3DrJ8HNTuenMXkrTwfGvspeyZMyQtP2k5MTT1GMxMWaU",
  "key20": "NfSpDwiTBFSw1QFfJJLUMxUf5985K5KDVtpcdWxyYwNtHFQTKcqGdbWZ5f5yDot4RK6TWPtCMPkcbA2JKARvXDD",
  "key21": "2YkrVpWE1vCvZcBJZjxpwQnyXRP2ChEfrHu1FHHL6rfTs9DEEs3ZaL7BektXKgRnuhWxCm4gbPbBgP6WjxsuwpsG",
  "key22": "26oAY9Pi9u2JmPuksakxu49W6X8qWkxVip7h2EVpJXZcdvZ49gHr9YQkuDq7Y1APqbS2Fo97ZtZ73oFoxQxYxtck",
  "key23": "2hNxQUdmY8G6C4QnPXThDFuLEz1auXnPgAPnDmm5vaSFiQep3cbKmqMvwvTJpHUAjzQ5DAoZdLZgW568LZZHjiq5",
  "key24": "4u8ZUEN8rR9myp1YtGfvMb5vMxod4jY4fkrVTr7GexBDWoVmbg8d6wgnvpAiUwf84qEa1YC8atAT25zp33HGvsnm",
  "key25": "2KNkzNKq632jyFWaHTSeqPDDjfumPKyLoLy74G9ueaMJmPGqdcx4Yq9KyWLBhePXEBpWPmFcM33MfLmoNe6vdCnm"
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
