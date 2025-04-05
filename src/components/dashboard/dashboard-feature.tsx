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
    "3yQScLNA8q4YDSVXQ8EES2t14WxarbDzt2xuarnUuSQbNV7vHtHDH2Dy6oJ4ZLiAP1Fdk6YkSSzajs3KYnkTSF8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JJg7cuC9bL4hW51TRzL5zsWFcVJNR8MfqAx7p76h2y6itUnpFMBPpjMqeFGu4SHx5rrCAsavSsuhoQBjb7ZDo1d",
  "key1": "4fe7Q3GRQXnLNYBU1pZ8rtJLhwym3z8F7iRMJhqL19QiB9C4ukNRrWiox4afzhVWYqUFu5h8tPu5FkmD1RZnN9cp",
  "key2": "3wHAzHwFsMABxwDsyHEZPJycSurAJKnhhorN3GU2guFph1dVaDm9uB7KqSSGrkcN4bJ9vTqRGi1B4BQ6STnAE3Bs",
  "key3": "4AtbX14EPKHey8iT25KCTz7KvGVQceJkxQxTTFhnM7PcJ2KYnHMaAwJYdcTSGzK99gYYuL9Skjoexfq15ddcGasn",
  "key4": "22SRKR21fJnArt4iDhvx7nihYfoMdTFAZ5nB4LDDkvFtLEZraAU7HesqapZayBzzJEcUM2PHcL8cn25TjMEVwKQr",
  "key5": "4qwPqVZ7A1N7JzJcL7DgYCgLASYm6tYD5tN3znV2Y3KUemm1FRtgkmEUsC4UYtmAqW6nz139LGpWXJrnGC69Qt2N",
  "key6": "5U4Y1xW39rDKknjKshb8v6UyTci52gTcqGuzULJ7ZpjyQzJqC2Nz3jWWtak3iRiobaY1j3cAvaFdM8YJvCGFHHva",
  "key7": "5juh987AeahwUPSSJhoSAwvXVtQcmTrTixrtgpud5CsEPpoxL8sSN9KWsrBbefgbwe1DNTXg5jGjBrv3hL2sYDeG",
  "key8": "387ti3DpiuWe83QaUqwALnfdpQYW8JpfeUiPFofx89nGtFd67RaG1LuomDAMgDvGC4TEr48vkExFBADt3p3vpJgf",
  "key9": "4phz8asLxs9RMfzkthQhM5RsEwfuhgbQNCRMkv8UFN1rWjZBYaFfdu6vQjvWR9YKjC1zAiqxC8kc52NEZtsjaopY",
  "key10": "Xy3XfVLsxVT3ZmrBgKRKgxNptqsNRMHg3GX7pCQMdYnaKtmDNremWNHE1T5TsJRuy2TfXP7WsZxixr7acWC5cpM",
  "key11": "3FoKtNpN86z4XLWJNKWrqxQ1o4A1qTsAwn9C4q7vKgMxbUH38NoGdwxzNjkw7YsnbpH585jAqQMAwGtQNbAJ2HmG",
  "key12": "arSx3LadDwyMq57W1LA5d4fJ9Z5xuAKkyBzHajf2nEYXt12wW5hjqDWgUomuiHyjpFubKJGRcn7jMEizBGwHoNQ",
  "key13": "WQY6WhSCC3WtMPHVvQKWMYitz8M1VSavQ21isnh6cZbioV3t9xj2Q3E3QtCp63WCzpjBdRk6ZxtBykT1ZcNDwJg",
  "key14": "HxVaQUVmDemoacnYLBjnK3jq7kY9Ao9R8qRuJugBNKqfxLF8SEXH6FWostUu39kxBoaUDx5GHAKowowka68Wbkr",
  "key15": "4t2YFb35sG6fESmP9LRSm4VBTAMVBPxifpR95wVcUBc7Hqo2fvFGZhW52PEYrMthTxWYKeDncqMiAMfHvNkihVvL",
  "key16": "4RLXaTmHYpzDM4ymDduHPU4BGMuJTD8HNhqs9p6phtA4JuTpX895GauVUUr4MAkFkuMU2XwKVioCpgAc1KjP5nsE",
  "key17": "58d84Gz9JPzT14TzCUEN2o7W6wW1fgFvzYvwkYHwEgtkzNHGzbCSPuryDimmkz1Stttn4BZys4ntukRMNK637nMM",
  "key18": "2wrC38WMd1jXY9gBk3W5i4Ge4nmMqEJDnc8WPf2TbpQ9SRXunyPZEqm6MLLFMc5M8YFsGepXaHc8bkiG3wUw4q8X",
  "key19": "2XcsiZfCFKjMwRZfiimedtNZVGd1hiC6d4Gi9TwyiFqbaYnx34bo8kcX7S7fMgAUuz9zkXk2URt32P2e9Y2VxYxV",
  "key20": "5HyUnexU9wfXTvsbYWa9ey6F8nrPAFpVTY4VZxJphnAhPBAfLi8msMeSH8endhxUbE557oipHojm8h1i542KEoLm",
  "key21": "2Qduo5PZqbFVmpKZvP9WayoQLzgmvZSk7Du4S15gPFzUcD8U4Z8Xav2XfpHUoBQqkiaby3WR6zsGnAnP2TwX5TdK",
  "key22": "5YqLkcuHYoLFAi3FSqgKUc4JGiiAFeLFwYGDZgt2kvtUGTtKsPxsCSaNdXX1V3ZJvqC6ZLag24qivoHnDnjYL4KT",
  "key23": "4Jr7f5fnXTjbo5qNME2isJhdo9vUWtDjFtkJjTeXFZo21cnkrvcPLUp6JEKVcTWgE16sLMo8C7DCnQe4CpV7Wx24",
  "key24": "3naMdd92XSKFqgw2cDbv9BV6JtjKXXqujB9T7hJXBfCiCxgfZbfu1zPxxRPtBhBocrQQq4uQFCT5BrTLnSnQRqEe",
  "key25": "jgMwDCKK7E3a9RB3VJETJxbMhBfpJKr7fsZpp8LHZdnPVBFLWDV3prrkLXrQ5AZDG335jfPLpGPmBPiEfyABQ9u",
  "key26": "33Vc678n4d7Pj2fn9QFEiZjTRbqjoG53JDt5RBxAjB8jRWW9riyfFDhNAqEj8Zt9RLagTG1nLGxkEojhgw4ZzWr1",
  "key27": "39KDwc9YfXJ9XyELFjBoQMd7mByBWhmqoYW9L6DvrJe4P7yQmuWCG4ciKX6AtS9ok35wJmUAjpxQiKXRgHABUGeG",
  "key28": "4AJDZ7pUWtiCGAWvCbTLhzMBvXWUVdtG28DCi4ydL246Uje7xFi3jZ5ZptzQxM4UbWLZdftant43UrjLHcbKD95o",
  "key29": "57VbFJRGDJNvLu8J5dWPxgx94q4P6SZfob6qWoV2SBXDCgPb7cPWiDfELE5EFCZ5FGUyjQFWsMEZx2QofkNHYHLw",
  "key30": "2btMnBQPdFhj7gw9VRBjNMSREytFvtRvw65NmFqN4QicYzMpgbK9fneFt52e5kRybU59Dn9xYxBF7buJfhqZwwhn",
  "key31": "21vgkPurqWKxrazeFojmqv1L3DTpxnHnBX9bmf2yZjNpmMjfHosoRPwVLjZLN4Ktx3w8Mib7qaVFg3T4RxGSvCoq",
  "key32": "4xYNVoi3yexFicceb62wy2vc6CN4fvZHRKabmLJArVRQmvEUdE4fFSLBfbzppUH2py68iHnYCmKS8EebpCVcasSc",
  "key33": "5ZgSxxX4e2ifXN1EAh3nxzmmAML2aM171muEAVnLiiAvMW5RRqPzjP5CZUQjR7VuXZkqkGRHAWRdDAuyTZVcSJ8a",
  "key34": "4V2gmeSp3GXwHKzRVDvwutDMehmwKuKC626zQbFW192FbiDVWZjmhaMeCkkXHDkxwNvBPDeRF5JkPS5f5ysTen1J",
  "key35": "qZRKkunyVJucs3KCozF8612q2MmnNtcWauYrafBAWqa5CPuq1oDeUa5sNpFcZusEPphBntUWNkXVBXB1qqdZNLG",
  "key36": "32Rn7HTp8fN7BSJi2Vixf1CFVWNByfB1ioEpNAVoCsNanaNvEhHQkA5gx18VLDpefnPh6U2vs8oRJCQXuazw4Mks",
  "key37": "3Ze86YYEB97ifbLbks5DEbXnUtMwrCdb6p3akyGVMhWEf1zSBExkKwwz19Wi6AjeTsmYkSj5EDTNiZk8wzvJzGyM",
  "key38": "4NfLFHMqhjaX333uueh8VNNypa7pea3VKGEQHfAJDHPMfDsBmdLQY5QNN5VgmuiygDqJcRKJU826v1yS3WG15GxE",
  "key39": "3Zcs2MsBQMnAk1W6HrR466GNZzu2ccgTEE7g8P9hGpVQTiAnRgaXeBAXbriECjSJ24tMY4u7jgipzqkEKz1o6uqa",
  "key40": "5ACJiwyy8AV1iDMcci4tdDt4WGuBsAVz5F2DR3JKfYspnotXjkj6XpjhjigTGwrHoob6RtHMpXUSdvBx9eiPBtAY"
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
