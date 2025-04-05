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
    "BuJoDJfim2ft8HJKbeyWeAsBLgUHDw2S19zjSuNPXDt631RLwQEAaMg6CQnFYTkoFJgjQEHZXpHB8suvq69UaQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WzudAPCrUyBdXx9Gdj3NCdYzPg6fhak4cMFq43eFauPvc46gf3fwUoW1sku4KJb2jmVvQouUShPFdsLUep1vGSX",
  "key1": "22sU8CoHyGvnqcaRWxoYhAJbcWdFS4bZTCLSSXc8k8J1mty4gQxhXkk1QLfgpWx25zeVcpwuP96UpJaeT3ViXtGU",
  "key2": "67iHYNSZqfimFXC23a5xpASFzvvurxcZDcxRCnS5R2472BAb8DMnQ8wpz7qM19tcBe54TP6xs1pQWZXhTVFieiap",
  "key3": "3wqYPJP9ASDsf3bBWfXuDKL7Yp9H9NTS4HiPtoANicXytWLXkJAzFaz5zxLeNy5CVRDzYvWG7UiKmMSkxzrozAoB",
  "key4": "3hgrej1TSKCTxNFsm3WHTgxWrq8st3zZMs7M8wkuDXFSVL3s93LrVUL3jjNUYW3xbqR6jiUGVAciWG14vRkeBbtU",
  "key5": "5R8atLuA9AoRQyJAoDqyfnUvsAPdyPRUrCxr9PWCzTeJyJM49EDTrRyjAmqCk6bLcwo11YUAYNzQuqe9SMXLh7Gi",
  "key6": "4LgPProGmzxDndpBcG3sjBXnoZuDQSS1g3gdfvj88CF9pzbt3gZe7jXRmEGhPUoHYoVXhQpYiLnR48H9pYmo1T37",
  "key7": "4ykHxsCYJHSDM18faW1fs2c5hNY2eZyhzhhWUKcLHAoYbsmk1WXbeKTFV51ivh4wDMbmLxY3WScA17YdezfdMidn",
  "key8": "W3grjpRQgfV9CVKpzMxsSd2FyJDvwAZ9ytWCR3DyBuXBXKMRMMvwHPEj1zYmhKTD1423v8QywqZfh9yDhMxkVtf",
  "key9": "46JsghwWHanEFnkH1MXYYBFd91238G97wZW2q6rpWHSADS2BweJjc4cNLEQekFMEgUPLQgBR8KJibBR2iYYhkUfP",
  "key10": "59cixCwZZVbtT1p5NcGFoWjbXNUpdWPkmB2SAosigcW1au1cE95yVrT6SF3a5q4YF98TWRZjr8rXiB42S5Men6RT",
  "key11": "2mgeRrarPZS7gZRu6YG9AqvSBA1ALkdEZ7gF9SJ1oSXKrKtHX2swV1Uon772yGkJ52PVswyrwNtrVp1yynb7cf4i",
  "key12": "2wivRY5xEtErq77T91kTTmSR63bQdwhsAmRJdHgHpHtKtaqgpPy9wZZfa9wNnhhuyBFrqL9V4ijQgPfh6bgcsg3A",
  "key13": "tQAkmo54veyB4pmA56M6E3wvmfY9NpW3Kd7v3J4wsdJifVnysPrPmMfgUFmr2yzd25EDSs475TN7iSvBHqF82AG",
  "key14": "34NbMyhNK7Dkz99kVexrG7m4Y38L9LF3vnLxzJ6SwvJqJUmbzEMfZE2zo1WmCghHoMm1cSZchi5y1ZZZRPmGuaJm",
  "key15": "55HfykRZdWzahDJYk8CuNfDUMgDvZWT65mzq9rXCNzRXppTeRs6EHTorzasV24QLg7gfpLu9gtVthreXtrDqNu7T",
  "key16": "trkPLdDUjj8Npt1tLsQ4FJCvvie4QTNvxrgNmDN8J4WKhN1jPshajnuX6Ttd6gjWs6iX9hzyKttRKGDij2FV38V",
  "key17": "29PriNh1JT6nRVGvhaXmZ4EQPzSKCFEB3bETikeCLuCKsZF3Bq7s8k3yRCJusjbadCpWCgikNnhoTzbaWTHyCyQc",
  "key18": "3JGEFYUXUH2Sj7CvivcH4LzQuzdk7pTvzMfLkFGpBvvj5H5uwaQp9gBomMA71d7VJP5TNv3pHwrfGAq2n1Hw4MHF",
  "key19": "4abKWw5Vt7hu2sAguMY3XbBgW6s7v27H7CeLkkRP4zaPMonUdgsfBpuP4d6iuS24BhwtyJn63x6SgDNoFBWRzu2u",
  "key20": "4cukmVDUJS8dVHMpDLziniYR93qFdDic2wNcAtSowUxN3gWGSEjneyefmJapqqKoFwMC7reW85zZHu4uXh92SbUZ",
  "key21": "3F9doRtXsLbvmxHVvCsPYv5jNH54wS3Ee945ywwQipNpQEgr7Webbz9DLZiCrNLCpeFzaw6hx39Ynm1jKXrAbeT5",
  "key22": "3uXXywA79druhkweRuTb9vixoPo7KDiHgocrj6uZerUbqeiZeoFXiTvapxyxBEQJc5RGPsLexvscgq6qygMcViQz",
  "key23": "4HrK9HJnFc5eHocsR7F9gmyvhXrG51CM7rKRKWouSfF63DLy4PiiLkUXgqYQtX8oZVQsaTuHsABEJvvufJMtNMy8",
  "key24": "265ccGaBaNXodAn6j3tuN9jip1uUpsd5G3m1MAnPF6R4jcm4UUFftboZKKq8P14emhk2J2kjQve7m18ac6BhMYvm",
  "key25": "3PwPs6ZyJHe27VwHBMPTuVQEJD5ncKpUHhGQEetuGMM3DxNnHvp8QcVUXLfKDfJUXQCcqnFwmuN8rVEdVuhjB3jG",
  "key26": "23Mcrj2Kv7LcnUPeyiGRxM9zAptPsUMGCYvb3ZmCqJZyNYjPsvLKx3QgCsQrDrM88AbMYpnehiQ5aoUnuX5Ysfdt",
  "key27": "22som4NKReYJu2X6szPA3cz6ffoa2fVkUWEYDZyzJxK4jP3Dwi3jGp48soJqaXwzfGEqRiiXXphefSzebuwMtQz7",
  "key28": "5dUXYKtx65ypwPJKgAkVCnrPbqgH8u8WZN14C1rm38Gg1tHBwGJyZ7bdAecBXKqruto2FR3fe3kqbkRbRYRJcnPY",
  "key29": "4wszGNfE1NUnLFDE9xsVPhLXcTzkxPuwntTJ4yg5iThXLkWtugJM6zo6Gqs4QLokSVyoDYgo1UZ1wqreqycvgB43"
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
