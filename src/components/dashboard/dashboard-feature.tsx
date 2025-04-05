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
    "5EY8zEUSrGqBUvJbqmv4H5B7DZeowqZDGnfmSht72CuuCctTaoyNo5oHoU4YAsuqo5DdmmdbxMgte9qN6oafZ6o1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hd4cJvkajGcx1RxkMcVFz4DwUpEFrgJMBqCAeWgPtaAMNiUdmKUNAxdSz2cQiAqPPLWQhgH1KmQo3NzStKW1PuS",
  "key1": "4V1rQVGz4SpmxWAEecMPrPwhLaHB8CQoaixKTxAT7KvgUTArqPK5mQERbdcizP7eTgTDYkDPccS2EtAbyW86JUj2",
  "key2": "3U39TWRzzzeCuMpo7izfKGHfjCwdcbQCpnTLQa4YmodgqhDWrPvzi69pQ6uXGdWKUwZFm9LLN2jU8GATYfqpdQ5P",
  "key3": "4PANr7wUmw3pL4dMW7teZAZLXPoJoDyibsYzZsze6SQRrMEJPqAKY8x6YKAghZ7MpUWV3XiLMHAdX2AHgX18hZu5",
  "key4": "4SDzWCajRgPiGkUdkEc1fjenmEk1KSVjE5mdebwU8aFptSTiVKapet3knRy77V7BipzJvCXxPBosn5UJJq9wa9L8",
  "key5": "5Rt3aod4vCGpVwmJyqbYFZJKzztuEDmJLtF6w2cQ1PAn8Yj6YRttZWxKtd3JssPSbajsSBoZgSN9Q9pfuGAs415v",
  "key6": "5QXikS9kXxTSWhLX2XBdQLr97PuExZtAtg7MCDJB8Sx1oDS17fAn1zYsmoLFC3TChi4SAexxBL442xPoLoebP5DV",
  "key7": "3Fyapana2ospD8bSrEWSu1DEVLX1c3WidgKZezoWvpKT26j1y1o3b55RViJ9hqUags7GKUrGrq9iX9KJgNRvnwKz",
  "key8": "5mof9uxaZFUV1wapHvTK8V7LWDLMEbC3GHmbfWzJD2bSLa2F4pe5GbuVqH8V9ovjiWhYQka239k7GaNLvsQscfzp",
  "key9": "5crp9VamdVnyjJFTKhbz2QnxZyv4Hi6eBa518xs6w8sxnWTJBYU86642PN27PNqxJaZSmsUMu3J4E3nNcMw34g3s",
  "key10": "w6VjbqGuRAyVyzTH7yTbq5xcKL4E9CBvqD4U1gYeXQUd4uyUnSfWto3JT1ovPUgaYWoKCTVYwdv8kzt53c6qQTP",
  "key11": "4pVTXs7JfnPSwTTMUJeZPmcJK36fyWfqgmr2SJ3gKfTLn7CF2jfBx5TGNniTA2JboNsVMfJtYosK2mayS5W5XEF7",
  "key12": "4kT8LckdjPS3agZ541oTgSwtmoJ9R4gVP7hJG4QsjefuJZakfeH1g9xseB1tMCw6QuEh8ssbBbaGYNH9we1roAbs",
  "key13": "5jX4jhkwuHMVKg5KPJFypnEfWcYCF22f91FdyeuEzeofcbkS5LBDF97ouR58RP6ndfNamzcVAeJmvEcYLkBZpMDw",
  "key14": "2bWE1o34BCYb3FedGWmrr2Ez3urpnaVwyEY27wYsC7Uz5L8qjGnRRRB35N8qg2RwznPVyeY3vz6KjsbEJE9ff2ni",
  "key15": "2gGVcKGXATpEW1H9Dd1i3o5b55oYYNLZPQvhRoJuYRj5dNEfCx1agt1kEPFMuFPfa8a5VszjeeUNS7R9NjzQuBHU",
  "key16": "5CE5jKtKXaiCaLFkmdHnrp9z3ffEEmYaH7ufQ7knwaG31isCLZVoPd9VbNxDHdvk6gCff1UsGn22kJmAXNsi9vgQ",
  "key17": "5YDk9UzYWd7wyi3fyFnbYs5B8tBaBvdNJKsg89euDuHNMZrR8b97nKS1vF3ij95SPiu4c1VTZFCNdRdhBNWNdzHN",
  "key18": "3w5w3rR8Wij38DGqAWANqWqSjcf6aZMw2pfeuYFMNoCec9wmPA67iN2kMNnQ8gbEcHFn5aJDtiYdUac8u6PbQRx6",
  "key19": "KBHB7s2TWkzxDgUoJkoyKMdW9Zwr3uEHtv9kM6eoLB3JfdLF8pAGRhD5Z83uMRMVsm9x4ZzqNF2bVJc9SQHn2ZU",
  "key20": "5eQPA8N5gUnBvpnbGFdy5sB8KD9cZ9YpFkVvX3THtB2mDsPVMuki2XSb6VGeTy3zs7eYhvJ4SDkBAiXuQansZkyi",
  "key21": "3we2ubmYWPd37VEAW1V44aFJxGTj3YJ4YXKs91pCUHx8S1sa78H7umkL2X2snNVBHGbYHJ3954mN65VEX6p94Gjf",
  "key22": "4ssAZqYokdr2w1x8BnJtzhxg2kEhW7oqgTgC5JigSzEWVALkoHaXk13YbVR71gSn7LBm8E6pLeZP5wtqvUkLWGCX",
  "key23": "5GmaSZGuSUhgQrz1uK1Em63bHJbH9Lqk2jQ14fY3PoozkbxJ1azwXCC7qbEaTnwvsjvvwwsEFYQPaG3dCe7Y2u84",
  "key24": "3mjffrcyN124poGj2zdeiANCFzmofQH7xQhdAHDohVkNcsjkNKbUBStecbweHgXsnWdJtvRXCjF1o8j7cURH2eRC",
  "key25": "3S1V2Z1zixqTXKNGNBE8hzF9t97kEb1Qu35qsjwLxNid8JJzJ2TkcXmG3mwsPgzJUheRzPvPNmnQhL5vg5vFCram",
  "key26": "3aZRqbriT6yDQa4kKb4GkXQiFxdcXPBbtvKKurYQiyCAV6QkCXBScnozY3aZQKtuXQ3nsCwhnrGhnVhkfire4upA",
  "key27": "2f7vnTNqJVWAn31kdBM53fAYTTmpaBRPRmG7HYwPcrcDWdySkEHyx9snKkcNHv6WUbzmh2dUcHrEVvj7u7M4itEg",
  "key28": "2qRn5SDnVNQAG53TBSdbPbaNqCusLLnrDKVExcU6H1EyPNhniRnJE18p2bbpxZTcCww2GuGYrwpybgf7kx8cfvFK",
  "key29": "2gGdfmyT3KJZJ6P8qYwdhMAJXExJ1Ew7M9TBBQ7hW8f9cxpgWsfdXCZAkHkDTu5NUVcBagn1HzAsWMEG8XPyuif2",
  "key30": "3L4wvu1RtHWFEV2V3g9RpdiBrMJvPY1HCrY5rZJAhM7V5ZrvWVbZAsCfd1N8dq1vqThQksCgwmJSG7KVznc2JGJH",
  "key31": "3kwrZZqeXEksssNUA3YYRfDtvmV7ti844xzkvvh7mVreiPVNmrE9Lg48zgVhZ3GVjVe2BvpmyomY4E5sSNiX64yv",
  "key32": "4aaKZu8fFKWbJ7PJbpp7qB6UtFD1wZMRaS8YLe2noVtaAX4TLDwPTD1fKRDtjGG2Zv4QcrTSMFHJxeBfJPSZXUsn",
  "key33": "2HetC7kSeg44LyjKHp4oMSaMSyLsSuXGztL5FR162ELiQNXz5TYzBSjiZtMGB2TYJfHRN5Za5TZVJrM6nAECCbC",
  "key34": "2o1JezULN9dxQRnw1guYU4aNHXtEPJZf373i8rDsjUcxCsULnGn8qBuYmHKTAKn8Covuo95mxrifL4hji1Lm9CYU",
  "key35": "3YbHL6m8dgU4zBMXAS2NXnMnvPDxu9EKvHYwJJdQVwwtvqqcvMEPaMvX5h4SEHbXnr9mcXnm5rutkeGMgQ934gg5",
  "key36": "4XeuirA216iSu9DoS8WCnHoHKPiXzdRmMdhaCdJYTUxNKGmXqYrbLfHYSuqtBhZ7vtZMvNMhJzCxhuPGYZP4sRyG",
  "key37": "3PyLV5G3U3mhXGxcnEKMqAtMz2Gkrhfxd5Gk6Hrf89wpYYjczqAYNy1mrn7k8BHy6VFa4WfpzApxsXs4p2ouEXW",
  "key38": "5tVj2tmVNhHd1jhhkij15DVy1irX91JtTWd9ZLqA98cGWJGNskTKpTDgtnsr9SQedn46CZ123zEnFN558LzEvmLQ",
  "key39": "43FR3JtKWpemeoZdoK1ZjR5F1yYn1YGaecyn8zJarU1fmY2B9ZfEc6QTg4riw733N3E4DeZ9FiHsHt4WpKeSMfvc",
  "key40": "ybDmxNibNpCLsZbGna3isGeYi34bhH9bZrgTHAkykKjprqgkYrMtX9a7RweYNiW78w1GW2MhVWVWf55edRee7os",
  "key41": "3ZRtRzd775odv2gYDfAjrV7zJgReBT3fjNb9fQkf4xZtQ6Ysgn5ykvcMQNrHKtdGq6aVz1yVUP82ucVk7o1xM7iS",
  "key42": "5xbJ12q4Pihf7DUkE3iJ6KDRisLYNR1YMPhbDRDc2FEEDdkgsteG9sGQ5GvkGFBYRe4xLBuF8Wrs6qjaKUuLwSGr",
  "key43": "2Aq5769LtbQ3srbsh9s22x5YQWyushmVYLx8axkRPbqRYqmcKmxuzPMECXjAgiSjAiHSnPg1sjT3BFYv6shJvGfW",
  "key44": "2U1bCRcn9eYFr8m955A9QgKcswXDcY1pnJcYZ3L1cNrriMGRLofEE6gQ8vVsdg4FxsKHc5nniSL7x9donRZyzKvz"
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
