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
    "4yTx7DMDbxH4p3Hju1P6BxhTPyKFdESBkqe3DkcuwMFhztScNfHK4sFVebT4SXSte8y9jsKNHPsN3A7zyppvgJQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YfLjgHaaDi6a5fMw5tGksjPZj39ZZ1L8e26gZtidcdjAxi5sfCp7pKMg4kZ2aCjYh2r15yhUKBMfvDr8bTLHfU5",
  "key1": "3EhZWKiHNVW1zsAGi6NsqykoKsBwqsLdpX678Zu7nmDpqMWm4nnsa452UNV6CmFMAUKc9gTKvT3K9ANAXVmM8Ym7",
  "key2": "2rfUMVsqWakdDVv9K3mhNYRqboJyQePrjeQCjBdYqJ77FFtJdfGmx1MHnXn9KokiujMXVqeQaZsW1HbXd6JMgThS",
  "key3": "k4ch4uJ7ShE9N85xf2jBwfaBkWtssZ71wLCu8Wkkc26aKdsb6qKzdvzoyEwJNbFznN5nYtBCLFjt9GRtor5qz6e",
  "key4": "31rtcsP2vCevB74gUqWGwdJSbcL3qARtt1mU9FvCbSXoPFA8EqvodtyzPW2PvSbGH7EYwdRXDLrhtqJRQ4hwWyw4",
  "key5": "2jyHVVqJXBmcvyfdj4Ns6PS2w8D9Ygx7ci5FJiPQUZzWQmkCAtMKmTSHuLw66h21SwHrjbNeBGnxXEWWU1S3677M",
  "key6": "56xpeqvPB145N15kZwa211MzukX8qjqfw8NV59Ba9J7bHxHPuYH9jieRnFfE9cnNmMUq8Fi22aDoNemFwJfK3YVn",
  "key7": "5YKBDkNMxGhNwVaQwkK11wwwPb4kN4FcoRzcsTzyNTaM1NERaVfanoytAjoRHT2Y7FyipcLz1dqkrWeQBzy1ZgjF",
  "key8": "5E46urk3kSU6krPCwfkQUK6d19NRSDMBRm8xaGKF4Td3cNQrqBhdr8ikbrJD3a17Zfgi8dXfGiMqzui1iFiKKTPn",
  "key9": "xxrrKh4waidPca6gABD2HUhBRFtMiJeAMu3GuqdieXbfapG8TjfVYVs3R5VSzPoSZ7va1TrLRXRMicjsZNhznHp",
  "key10": "4ENM8n6FNw9Xh6zY35P89hthejqFM4DhKS1HKZsKiJZBbWZsWfNRsVmo3ohU6BL4b84una5gwg19v29RLhP4mHsN",
  "key11": "4BRajx6CGn1W1huRStW1ResHanrbc9s9H4Ja4DS1o4sqy6SbASAEZqfcoJ46A8rAztYywe3ypXCMNFw4XMDUWg76",
  "key12": "XXpDXjZ983NavN18facfCSesZBLaGmuC8mT3GQ5d9edoYbuHps5kdy5f46b67AF7QZqytqg5L6SUPzmzfJRm7HE",
  "key13": "1r3dT8kgSYYhYMaw53Tw2fUUBYqz6TuiVDPES5iUtWPpL2vM57Wf8SRX1UdYEb7NbscN4QcjGdEXmgk7tAjQRdh",
  "key14": "59FhhxVo7XLRtXHuthT8eWZ99tj6F6HF5CT8GhbrkQmZioqRy9fLAVLy8qPPXxUi9Aj5pHedbqp3K64j6nq9iyQp",
  "key15": "HCCRhVs2AkGQ6aVvVi6yLcLXBjJqb3UxXdS97rFioRL7mdfkL8KMaY4fgHVYg7DcMR5DKEtcEUmGHx8TbmzHfVV",
  "key16": "3UqATp6s81f5UcFa4j9WYJXscg7xHauoShh54B8QRrztttDb68Uye3xihthCq2DG1f5is2u12XTNzrM5ycT6koEH",
  "key17": "4reiLS7aBcbkitJ448f6A8mBy2vCms2hfd2wzWxLeNRBR2XNrPVXyV6BmFKZGGsUy7GF6ApYwVH8CKxiJB8QEa1T",
  "key18": "415SZtCWocipRhU7sYNTHEf5U24cGpSuGYPfnrD6kPp4JRPCr2gLD2zSWxM3zRsG9Lw6PmZxRRSb9M3ZhM5Zpywr",
  "key19": "3j3v5Rbe2JZ8movTwa8n8Km2o1XmDifdujY2oVdcaNiKedrBbNbgFnmkRVBdZHSnoffDbiPhs9HJFKnwbFyTA3wN",
  "key20": "4rdjmwLXjYT7tJk8GUfZrP34CqEvs1YfQ7Q7Yit697cu8ex39pFWRr8atUUg3fftuSTYfiavDZK22NZPbzM5zJK6",
  "key21": "WCVTxZLGVwDfgKYPdsnaXqqZzRTWfnkPfEfp8bH9fAdq3cRqMQ2pYVe8phf3YQrY5eNc1pvptpqXMz5vVCBBpbC",
  "key22": "2fkjQ2dEYjpzF4g7JJmbQqM1k4BSrURB81tsbzV7GUJHAQUEBKYeyggEby2F3FVy8QPSdRnDkemK2nARRnHH8XiG",
  "key23": "5CQqbS2v8Aco7qkcciJwsLqVZmCDjqTxpEhT8wbcAG218zQ4DFLQqjbzi6SAqLiWciJJTjPwyuwztFnhZVvGh6Lp",
  "key24": "3887PTA7pciCkhbRJNH6rXvPb3grmhXgPu9B2X5GpyqYQ4akckJBpN6yywV2oj2NZLiQr6SjzNwWpyhogNXMYqfp",
  "key25": "4Dcop57RQFQg2hiuxBpuYeR6RZiYDd8cJjoDRQcfWSAGdzugFgucXddoXTENw6DctzBDtt9RrrC6Cfd6oPNNREWA",
  "key26": "moYYz5HQEznZwzTxViJqtFVWBKYazgkikXKLSHy4tRFNrLRk63C4oxPNb2CRCsUPs4Bkp4Ffqd3ccr5Rz44sH8Y",
  "key27": "jL93zzFzKRUnwRNQJ3bcMhRVvLA4sMPEm2dK3MbXEKekTiwchYkBsacctt9uhM3EntEy5HrftTbBaDhcpGMxME3",
  "key28": "3JR89mypXDC3wJe8AyPq8rzCKQHPDHCxQzgVj7Mhw2f6JbqUjSSebw2tmCHDxNnhiNPZ281t4NXzJLCP4omj9NbX",
  "key29": "4qgBnZ4cFhYJ9egJhaFg4XgTtDUDnK5tyS6krdsW6oLB5WZ22k4BLFxhNaEy9bCZh5bWk7kQnf3NyPCGEfifHg1p",
  "key30": "4wXoMk3KQf6zCdrmTu2zdQZw54wSdhy2PXE1XNrxERPhd8TNFgSZj1aWaPB1HrXBvfepMTUA45KDMxgHgizjfr7F",
  "key31": "mZ4KPYoic7sv3rWpziNLxh3QUqci5tGAjA6mCcBHXnRM9fgDECrT3Ngz66oe8EtwwbjpyXkANSoiFaF6THXiFCU",
  "key32": "iZXu6vULrVnSo4qRErfJ4Fibgcnu53dWGSgRVShLz6bNuU1dUqrNTeeyhs6GMQZ9hwZXoEELtoUBr4juzvfiHRb",
  "key33": "4SR52ifpLKEr2Fty8xRyCjyiBZJX5cGj7LTH4cbACot2GGtyRs82k3SQNTWEN4u6TvkV6vKs1RwZi4xbJYp6MUP1",
  "key34": "44uB17Pdg4ovHQEcUN2cX5ZLN4cLwFA2sKhjfSZdfLkuhfV3qSYK3zU3DFvr9TKM4mTNFJZPxAPbb7ugeQHWQCwQ"
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
