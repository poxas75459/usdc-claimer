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
    "3b23pkA2jAcZgtarRKGGF9Q2EEK8DXD1gTRAk411URqSuBW11ErWkTM4jkPgnB5y6tiRci5HjeLQzPop8PXkd1Fi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X63AFZ15MeoscJ22Cfz1UUBCBGPbvwa4YWSKY45xikG9fcWD9ai5wgJxA1b61meZThhfoNA9RvWQdPJjdm2Fd7Y",
  "key1": "51gQTpqCsXbNWyATemp6nFEMN4acFhnA2eTASuEXBxVRAwejG5KMWB2kUk9KNQvgW38yag4ptg4FuMGJqNrDp5Aq",
  "key2": "DMs2RoYXpR8TJ7WqUmh3rSvKhcS41uo8p6jYyskhY1xwdyHgCcghDwm1A6vVgAAZigSLdNsu2qZKCmCQXLhihAq",
  "key3": "2z36Qu1QhKaMyWNsrc2hYBSyskgzQgsdzApNbxSHfo1bjDzN1WkTwQ9xHLEAFkK1gctAAbwkXj6HdGTTnNbUJzWy",
  "key4": "5bT8QR5yPoGPsRX9TXDCuHLEkbeU26p5KMAPxN39Bp8GiJ9bi99D8Fw9Apsjqkdk8ZjoKBH33efTu8aNcDQkdaWV",
  "key5": "xrG4LAVcP1LwvzMGxLips7ujocis3FCn6qb2TJx5ggHGwPmGWLAawW9HuUWQW8FgwAWo8C12HJbak6FFmCj3McJ",
  "key6": "3h4QZFsu9V669KPo5QJpmfvzQzWdauyS6xBihNXFJ9NaAPC84Hk4Rxy9JrUKdasxEd7WaS3FaJgWCFPbAKir9qR",
  "key7": "Vh96xu7RXb5SuUyx6nKKWSkqDkFsTKeux4QjoRD8pAH3uKxTB6PqFViUDF22fHjNWjg6haYKJLgzq5vZBsaQoLm",
  "key8": "2pRxFopqm9sAW1T15QingQ8hjXuAbmHskTiNhcCYBhRAN83ngVgKaiRnH4ZS9RWhREQUitUyNNPdaLxwUGSCrZ2G",
  "key9": "49Wp1gTkzBZBj7uFt9G51HssLFqL711mBgeKsdA624tdG4X997Bf7RraWEcXrEMa86Pjm7EhdPGxTQJH2g3YhoSn",
  "key10": "5r9FmbbHMkPT6Bo8mnZpHksfrfCkaGCsSf9GoB8bYfqfnomfDhSXXGHHTiKcc9Hc6yrQxMQ7KoCtdmK97FNF9HAP",
  "key11": "nbrNQPHjMYUaj2F6CyA4VNaGN76kGWWx5VbshdaPXGLUqTWnPtXa84rcpzYaikVb86mL6Njvk1P3tzbiGGyoJAZ",
  "key12": "58t4GkA5aX6C3Ka73QqhkGbvPvrueTPZ3UzG88KxoVWFiHCyQSxCLs7ko5JMJEVF2Axtuz56J2eMZ8cQDRqF8x1s",
  "key13": "5NnK9qGk6WSQp5dkPqZFn9r5MCXcCjHPvq5sZWrxwoAj99aAmUtZpus4Ac6BzKB9H9w7SjX9fKM7kZEW9NWyai5N",
  "key14": "jxBEnQe2avaE2fTu3DgXJ7ufb7wCqdHKXvBh8KhpR9uicd5Uskyh9aVkWeANFbjab3AvinNEDGGipzcUTUxDFia",
  "key15": "3KDigR1AhNaTH55WmYpCrzwAbJbn4YZBdbKcv2kSApmhhESeaVZywRtFeQ2a3479vhTLFjsjV1Srynu3WRrMndtH",
  "key16": "2waN4PayGM7rCwCNingZbyWJZd2J9H7resmnuv8SFkbiP832B8sXzNnNaPYnBSqukXUuUZf5e5P6LSojANjQfHMk",
  "key17": "3yTaGoQ7zmAvGPpUxtv8FcRXrhZM6HwoZyBq3ZBQHkzCuP4SijnmsntVY4CbuQTSMfEcDF8jpCxNRUYPae8rqrbb",
  "key18": "5MneuTAYFRou4SQooKSLL1DKiGWpRhuE1ETkNMb1cidMunsSnus3dC14ZtB38snJh1mW88qWxFWUHXqaYkSLCUkS",
  "key19": "5Z83fmDddxPjzEMGCPft5K84rZ5Z49hWU1fF4oxcc2doTPPuaZukD9XKgdXEPEg2ztDeXsipAUJtvMWf8c9uabeo",
  "key20": "5JVvFgwfrPQi7WCptiXzLyUENkD4JzWChyCYFMsEiVF7dR7T1LCSmoD9DSVrtv95o4NtrCz1xHEyXcEo6ZYGYbew",
  "key21": "4zCjpuMe4YForLqYAyHt6YFw3SwTWhC6tYLZHZbeDm5hPAiuATKvq29LGRm8V8DggiNNp2ryKVe8WiU4Qc2VjBXN",
  "key22": "5ULM1BgvrrsiaXp4gq8YxM5wfaMXhKs3SMTEyWcij57xSpPS3jaHh4cdxqzCshvyTQtcLU1ZHLMWe9xWzdxN3y5W",
  "key23": "2nJmHRhrxMuGUtVoBpM4c1ZU6wHXzYuxjZimKhQ2kwuWeLbnsrPrXZ4NQKVfZCi7Qc6cEw2HcrMTu91kzSVttkMc",
  "key24": "29v61pJYhaXGdUgLxdngJYxuuBwyLCHA4Jh9aMmMMgUmhZkiCfcpxzVvfeBg9ccg3bogFwWamsPX2iCUsAoybhRT",
  "key25": "4vXPArMHfranzzXHaEXsSKBaNfYHDv4i59ErsTwJCZrFug5dTEWAUqEtUje18yjhDDcX4va22rcuESiLYivQC4v8",
  "key26": "4Wkuk5Gso6wa4QDJxRT5CwDmA6d369zVUcU4GLjGB9bFf5wgwWSj7DCWwwwKuyLrBCF1CxfgoaLpmGFCEX6Krt6x",
  "key27": "kewL4MhxrX3z1d1Tm5KM6TGw2N76hDw6hkzu2TGi62Wc5JeTh8qD9TotU14QdRNjRaPANZ1rzocgrvAzcSy47Ub",
  "key28": "4idHujEqXDLFgY9fvWyRoyoxcDmaLh1h59aofVYr8V32T3EEbsSsA6TVpJud2oN4g4MaiRVxyCgzBDH6xELX4gEq",
  "key29": "udYGp7SQX2b5zPiXLtAMSaAehgG1jM3Z3RkkKcWnrhCbF9z2anKFWSjvVehRiNo4jjtocY1ySPE2R7rcWU2H1xG",
  "key30": "Sj9fRetsKWeUVyXVBi8Wkpn1n1GU8zEdr6nA1dDregffp8DZUaN8sfFXiHuLN4Y8gxJ5s7MxaduYPcVoCWRJAET",
  "key31": "5PdVTG3unVqsqHXeC98vC6CBgPxGXnQKYsoyQVeYUCyHPTs8otRRQUKevXGyhkD3VGY3rE8Dkx9v69LAeW5UhFLq",
  "key32": "4895NdSaQLDcpgZFCdEcKaT6556Xt7qWnotrGYhPJTVFZBEsjxvKT2URzZYDdQWBxZC8d3Dt8Bj9vh46ZmgiokDs"
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
