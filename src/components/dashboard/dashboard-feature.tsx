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
    "2hm1CsKG64Y1f71zPgx5vDDf9kzbe2sZdRDQmToVgHWBqwYMEiqDdCKjxXxGPNAwLJzdjXiR9XcUEoAAGfxcqBGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tkd3jzFnZbiGfb3RMV8gZAe8xSJM1fJbc8Lqiamtgq7nCBsbjjuToyKSAnQ4PeUCv1QPdeRfye9tS3i8mJDXgHF",
  "key1": "57xCZqFBMcsLH27UPCvkRS5WDqjHYWykMQyKtq1Dxo3rqU74w6NUJJJGcdUKYasAomyVCnpGXePCQ2BGuLEaP6B6",
  "key2": "rExizw8YHxCbvnqKHokmoc2SGRyj43H72cuKXn4CiVkUmTAgTpj39AJRKXjFZynKQrGtS3ojTKw5rFTF1LeeqqK",
  "key3": "2W6S4h2YLPkseHpmH4JDZDbhLUYi7etNZ7Z8VCzfSwoBPxZgtnZrRMNDCfiN4Zz9rqkaZdnzCnKzwrxc4QvCynMU",
  "key4": "5cu1w5SYBiwxnWgP26fPPG7Qt2gPkc6YMh44wNbqc6FgYxtZWbsdzgov4tMjzRP7QFH7bsvJBongrFAEGwi6tWyr",
  "key5": "4cs28w35AmnL9ViW3eLVA4gcpLEB735nxwKSeacRSpUMz8nBCWEiS8YFPabJQzYUovkGisG28dnjTfMWTGmnD9cE",
  "key6": "4c4eVjQp2cJc2cyLtHnaDLGQdViq9EK84YCg98UscUFN7FXeDWWZ65Bajh9LNQBQUVLCRcXrx7prMJdhErjvDVka",
  "key7": "L79txf4bbcn8TgLLsz5cYbFjazsXAaEWedpw9wBTJSJnhFdfcSrRJwna5woFRCGdgxry3A66mhVqnsd7SfuTNe1",
  "key8": "z1Q7j88oNcXvHt9knvaTxPHhoHbteu4FW1zu3b6m5ufBvf2eDAWUUjfdYWh1uYcoAPks5pKjTCV2yk9X1Pq1BC8",
  "key9": "2GZM1yp2o8imJcFzK2v5aPLifsFLt6xzPXG54mgPmZcPkWLLvCjPSYcZVnRnroNJcSpyGzzsjiHmHU67DqvQzEZ7",
  "key10": "5JfkNQHBawNNEpRPYuYoTURnLVNhvuvW7ZYa59E6UhEjxAwMGp22X11YSF7bQaRs2U3Leq2cihPDnq6kCzJTg69d",
  "key11": "oLmeNMb1Bjp7zVykqLRXY53YbSB5oNWwMCDJNcqMeExn6krbYenzvkBJJPCwAVfron18roX9bqaetr1H2BsBg3y",
  "key12": "3ZCJm4QR9rhYoer7na47RxeiLxcpRer8QWDDsfZWRaqEJyzesmmMdXgSDZmv9jTeV5XyaWGXkohw32y7BoxGrZiB",
  "key13": "i8H7THCC1wck9JemxwsEZD3MsenRhFGxJ5h3vkwhAVqYquvuyA5QMERsNncTa6NabtrWF6CEikGhESLP7V5Ca5y",
  "key14": "Hr2UENbamZmpUBiX54VPpmCyhoUNEvd7zXDmiUgbQ8FFWnpYhbhZVDrpZEGHcrZ9LoGgnMRkGVrFwVVQNPKxZ56",
  "key15": "38nLvPpDXdcrD2rsGFfpy542HpF97QB8BaomLU423vCsT25pNnthrYsNeF6PYXea2p148KMM24V2bQ71oRpZ2azC",
  "key16": "4kfTHG1epKuv7jhmEyJjvRw1dyAjnqVGdDYCWoC9rhyFZLxU65xNR2xxZRzeerP2u9wXrqYLJ7H9daEgEFFNTtct",
  "key17": "5sETAj28GPNcb7wnHaf1kouQEtgfvjhUoHaELMWPdiKp4XjHvDktXCvhW9vXuz5eUkvhBKCNaf86A5j2ZyFBf3yS",
  "key18": "22mLtzkH18hXsf4EFBbGh2R35kBs8XiCseyYTqAPLGKZT1jiWGMMN489FyarV91DxSnqBGMvEresk9TK1ziQYgw2",
  "key19": "Nfkg63EqBZpmfztcAUJ3RjJoijq1pmTW8HJ55DfNx3VpJdnF7cYqQqtZRNJGdsfiug9u89Fz4qNWk9bg6dxFgUt",
  "key20": "3zifDZw2n9GxW7hpLBnyaN5QUhP2NuENKVpnm39QD2JJbeytPAwZAgzCYcLEnAMUNj3A6NMEnBGsCZ91kc9US641",
  "key21": "394cTaLzFXxj3pD6tGNXHQDvEwHbEVVPfDjp9qoNiYsnSkbDNet4wp2TpEjYcgkLm79aQat4fN5zV8vKEnJLDH87",
  "key22": "3rKCvK6cuWwBiMGerr4mRW5BNpaAZqGKy5sfcf4K1Q5otZezsNLF4mWESdmebFHW5cvLV5WfHpn7FqCMUwtizFLw",
  "key23": "2ZDMEk8PFivMPxAn3Nqeu1d8zdHDb1QND8EdTARaWgAgkiropxKHzdxWBuJBUqbVAAoj8kdyiG3nEzXU5Ljy9NRF",
  "key24": "3ykJwDBeyxbzbiJsxKwT7Pzzruk4PcjBdnGhVFVuBBjPfce1ocLcxutxKRJtA3EEXK54NAq9AKgo6YSk4kjZcnkg",
  "key25": "3yLhNmFRUqVXKbyrqe4ovJmx6BeKVAgQr5e9BKCPFJVaBmLL9xfjTyH6Hu4anLiD3KAM7HXgf16bj9WXHwUCarp9",
  "key26": "3L5Kkw3Sz9dSinUK9EMf8mjqvmGNBJtpADfSCkwmCvkR3cRTdB3PmcRY5HRWJcpeXssrDBg3pCKFX9AEfqyn55Me",
  "key27": "4DfGb4WfmqUVJTiAVBQ4y1LMTbS1suaoGhzhyoYFJ7PpkLXSfDAbjZHQskkGZ3cqshuZUDWNrgzysPKCFrx4wvw5",
  "key28": "2UvbGs8XLA2AhSAKj5VUyjGa12nevdVS8EbGfo5GCrtLMYogxYsHJ5WPnnAnNZ9SdNJKFEf9Cs2iHinA4JHAfSgn",
  "key29": "5tQUb8YdjsomPRkpDWBuQfkJubskP4W2gx2EPckddQ1qaCMKSDbPq7Lb7brs2VQXH73a4U98sjR81a3uBArCojGN",
  "key30": "3CBcjcdr2KdedZAp9L6hfgL2L76U7hBnWJjgoHJ1xdZ7u7H7KpCXehJyscRXwAs1WeUsBeeEd9CUMPQWgaHW8cWD",
  "key31": "579SRqxc5sympG1nAwUGJ8WCrfraJAZnxzy8Lb342mKuVgJuYKnQa4oaEPo5ep5ckbdQRhZctMVMNf7wTDWZzmzB",
  "key32": "5NwtQX9Jt3qBm7FWBFXAW9ip3uT9SwRYyXjrgquYyrF9LyxG4RNSsSyCRy7eYzkVZZyjWEFjHV2AdZmciNdjrCky",
  "key33": "ZziRWRJujWa9R6p3kB7QMJckfTyR3835cX213GtGw5VivL7dM4jp5VrVYDtzLCEgzvP5D2Eoiuv85xA5FaMBXrK",
  "key34": "53nq1J11sVae7wjpoZzTyKupgpfcwM3MeXsCvJUqBnf1MWZ7LA2czzDGkkWMBsVhN8wVnYS9nSn7zUatAwm7xDB9",
  "key35": "peUE3bCxHYTAwUnAPsa8DCYv7j3CALT7hGjLKwLpyG9MDNu9Qm6wSB4QQ1SVby5oP8N7qYoSniTvgcq1XeuB9Sm",
  "key36": "2yBBmzFZRy9145nYHtox74cxhGiwYBhGiZGFMZu1RZCzUkSXGqCRqK4s6ZVQqxp4G7aMbDuJBLxfrpWLQJDf426d",
  "key37": "3Jqt1nMSNY9QrwoQCZqxEAZ8f6KYeQzVvinT5ufjYsvZf5svLyXhzsZ6r6w75EGi9Uf8VvQTT6HpS2Z24uLBZAdQ",
  "key38": "WaGq1noSSUb5ff6yzw4wfegMTwwhFhHefNBcqrQr5Jz76UVf2sA6VLMmuRRmkujDrYDfh5XkCnHE3y7TsUmtKt8",
  "key39": "2j7QjGqVnqBDmvFpxA9TQ3Q947wsoRrz7h66Y4HWfYokSsxoe6UCTMBoa9g7dYxeaBpHBn5UKAuGujYqqcDp5e3s",
  "key40": "4QUUADm4e13LX3vvwi8oC9fPPTLwH3nSxDwGRVPJnFxuJhsFfanctDQ92MsUtK6wScuziNHhjX2KYu9oNXsCuAJN",
  "key41": "67iLtQNjyfyeWzTuEjxWi8vcWoeDvQr6r1aymnz33FwNgDGCZ49ZwsGytrDKJdwUNbmetydiNXDC3gchvXAxPdwL",
  "key42": "4yAjg95qJu4jd6H7Yj8tZidMR3A7PSjBrqAccSChAEhothdscdkucHNxiUn7mZfhrw5fJht9WgzwTsGvYY9UWY5H"
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
