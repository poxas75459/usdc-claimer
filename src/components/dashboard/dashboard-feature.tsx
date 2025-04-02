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
    "5Rgra5bpYxADLMawbmYxupog2qaH7632LeRrXCKpoW3jqxmqC5X4VPi1fHwGd2J7jUZo27GPyYnD6PB9eLmSYmt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GMyFWLCeeb8fAog1BpKL3Hhw6zm7U2G2LG76yDf5GXMFaVHM6CpVDDz7GgNuGvYjVDH6jXRjZ3fEfchPiqx8PaC",
  "key1": "4rWNgovfgrwFY98Nnq5R4fw3LgT6XLtEfwguXnam13MkfLyVSbaPz1fiwazvWXpvYagkvoTEPabXqHskQimWdqm1",
  "key2": "3mMpmif3Jm8ByEbae5bTRjXgLTdwnugjipkJCFsZVRYjDoLFKyVMu8XkMboyFfrPotJg68L2k7kGV9cV9P9ECyGN",
  "key3": "CtcT9CC3hZHYLAznJcaJx4ZickAZTWxdxjYhNTDRL11VqCabgMWsM2eqUChY3oSRpGBQR27p2P5hDmFaao2jhz7",
  "key4": "ADAos8s22TL55fsdqsmE6wfBQBMQk7dPovgRbToNKKFMc4fJ3yf9yUD4tCY7GWD4jM1SPhahVizLjAHVQjYtfEn",
  "key5": "4injftPu8n85MLKxYcPeURVz9dLRmEhRKW7UU6MjzdmqfYAmc3vxQK5Ry18FiRmPivXKdJtYw3T4vUBkgTmwTBFT",
  "key6": "24g9qLGDrhoecYoeP9Rv96fWaVm98bz1huvpqYzmVM5QSfsjzGvhEYZQ6VrqPEZ4yYazfsQaj3wK65pi81SumQf3",
  "key7": "5eS6ciuXerV2fXoBDs17TVZ3y96DScNxxfmGXe66CPC7MbAwhKgNF3w6ZFpsdw5a494cxRbG5GLnCvfTRNZsvt6t",
  "key8": "2RjTfdm38YJDN47MxL4xR3DpFCVsQcNLBFnC1TaMKHTL4aWNRpLPrmdmcWEwa2YFAKfkZMcW23XaEuHvSykMQH4j",
  "key9": "5zYcUKdFxBDvRpQVyM11uTDhjCu7EZT7DSvbBXy5LvhWovGNGa7JxPcetUBnn8AQPRnVKg93aTTDQGwi7Y9aRfDR",
  "key10": "4LsBmfyuJFARJPPn3tAykjUt8a2jCdMRFg1Cz6QWF9kPAbwaoD9Vm9P66FRxSfKshYdagKG74W5JQuQ5gbYC9kuV",
  "key11": "5cvsZPmMhuW39ZBEQux1mSMvYrUhu8Qsvg8DQaFfgCqm3o3nUHLdvJmFLvkwYYJrCN3ysY8fXh25vwyikCVLXrdj",
  "key12": "jEZPVSXtm8YHx2NpvwpJ9MiioWM4HHZoJQFS37qMdfwcXn7sZf8Ls33PtoH31rnDb2wmch3Qfpg6xtqtYW9vtbb",
  "key13": "2kqreshZM1X3JCv7nBjiaPX6nxdn3vL9C8bU3ueN2oR52GcYKdVp2LuVxnN3k6X4e75d5x4y8HrAvEktt5viL5om",
  "key14": "4FmSnDFXu6dBvsQbHfXzQiAMU3XURgdmzRDtWqBKtPUGk2zDBGtR1GbSviY6MmXWCYfRp4Gphx4MyWDEVSRfdFMi",
  "key15": "3soTXxrWHwXbyn7SGdEQAucpw2GgbGn7tNH7Fmmw1DfoTyxQtZd7cyDWqo9vfE1oonLhkF4oxtxi9UAKvpa61V4t",
  "key16": "4Xf9Pfw6dRyGApRDZ8w8WD4iWDdpWoiiVt9xWBcStWgLGaQa21aNhgyyWQuWzT4zXBUcWMLhCXnkrddoeGMvY6Kp",
  "key17": "Qw3EdFCSZRuTQdZAWWnyPBvj9nDSbmQax9iR2UYih4kBdUiCBwUCYhPMsBAnbXtaYjtaoW1AcpwS3VP2FhnXRbe",
  "key18": "5kbQtp35osRPYkjRQZAufNVwc2ADqcDoAt1pjtVtXcdq6pf9tsHnag1DpswZDzTamXZhhFWy5Xn2qTUv7nMbBsJr",
  "key19": "4io7DufQXorNoSGcSj3Bn84uv8czT251UxjBrK4bRrCLKpndaD6KG7pQRmmE96HVhDnPgCLhPsMsCyvxyNDN7Aey",
  "key20": "aV1sv7Rt4JoVt57Ce9fo71eK8aHT2iexBGWPDwhZHhLwuTMByqx5Wyo98CWnzSoJ5zetfCgsCgpsKpy2vGi3B9p",
  "key21": "4Ri72Nft8YVzTaawFPxV1mynueQk5jpbLgKQ4MdqwHf6p6kkNGkvNsDZ8FdCoxQKNGqstdXaWmz48qXXgL2iCqxC",
  "key22": "4ChGxY2nLVKze6f8b7443uawA9pedJXWCV1yudRQiuv2KjX4Avwbjh1a5T1vS4uRQWQaiVR3qPnav3KgR5Ncs6py",
  "key23": "q6DLqxL11CKf728UUqBEieirSonyf2Nifr3TNhaqRXK91iuVuZqiCJDu6y37Y6Ki7M83uFqUHZiYEaLoWDNfnw8",
  "key24": "2hsfB64Qr7qr7SzwVDwcaTN8Ck6Gdo9smybyPQ949h3Fw4yVEvFNEcbB1m74zbKCGwi14vyPaUnEnkUkkLv35eFZ",
  "key25": "5s1TTbfsLUKocxTaRLdw6hzbJRdKrxQLPFt9d65VMiirx3EVhUJtvWFqhE2QvypvRwXEdefmmzuHA6Zb1uSffKp7"
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
