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
    "4FuCL5frEdJb91VMBmKHU4XM2v55Nodotzh1qVJwuEhopRq1wTpJCtohHSfn5iVL6xViZTHxFuoh3JZA6bxF6v8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BJ2hpKcyNxQmPbo8N9At6pmC5PRHoAdg74LLRkPNxvpJ1TNG6KF4ACriwqRzvF2K3H2vibo3YwWNnWBFW51juFv",
  "key1": "2oy8gs9gAP4V9UYbDvm3H4mTq4PGsfZr9oXmVfY31YauMBmMLenKz4VquPCUgn5rdZsmpPV5Cxop7DgvTrGjbVRP",
  "key2": "2eeyqzHbx6vPZnEcwX21SsVqp2jfhEJxDnQ7SJUmmDVwkwunKgJHzq3DWYjwSAkuZ3NXvHK6KNkj9Q9VzHd1DW8y",
  "key3": "4yWVGx9JdXyzhz38pMEPS7aB6PUyT9JirLqbFLPwo6rsNxFFYgDaod3APF2P7JPPV7AesXpDyzK1NZKoArG766Lx",
  "key4": "2wodThGVa94LDpyRHTqWGDpiwUzkYHAGydY4zdMER6QZpiGbrQCU5DF3xcCTw7X6JFEgCJCBdzPPHEw3pNppSSRL",
  "key5": "5eSmXnDNznPwPNUMgDJAFe8FEPGEBK9SSviWzMUSxyMRgy3LPx8pfLRkE6ULWfmpGjrmip2dLPoyExweYgmZsjd8",
  "key6": "4QpVoGR3TokJ8r5k7q8TqE2YXZr5UpCJZzJcSi5p5RjfUfBaeZ1Q3WVQ8L169HCkpZmdLitc2eVZdzSHG18cwxdG",
  "key7": "2cggC9GxkfTinTCns6X1yW6638YUtJ8qtQcaVuzhUJZAjJADY4zyZtT2ShP2cxMKzqr3pUnT255k8TdYVfg8M7YE",
  "key8": "H7qRhJV7QbabhDkDLHViwJz4hcmBHDHWeXtnSbHJ52oY6JrN1jkjLR8yLDYii7dRVR3Ay1YeSPzYaKeX1212QS1",
  "key9": "32ZS7yV92icRWheRMVxjr98ZPnDWuGAxbKbdhR6G7XpRaHj6PHTZBg8bw1jSrTTWHCVr8Q3AusA6xp1iccd5wPdg",
  "key10": "4poQjJCVsyJrvaNqWiK4t9grg3mLv72Y9iekw3RquMYiWGALUotw4jT9SpxoGh2sYP3kzvbWBD2cFTQrm7sjPpXY",
  "key11": "4kmGG4LRScAd2GZ8R5cqxi2iGKbgBpJc8QzjLAgR4GYXpU5DwiKJCV4Wbroaycq9EZSzCR4Acbv5JJ9VMUwkoDqv",
  "key12": "2TsbYeiA3MxeTtj5pXrnZX1KPJsZsQL4LgsdFPvXznCkMfcqXU2W42enbeVoejY3yEih6zGcyD7VDk4Ndogbwpja",
  "key13": "4EPCTeAMJR3Vu144ESABS1NYSjPkXP9FfB8MdDTRubxbmfDMYfrjRrTo2yPFK8ej36R4YS1eizpmT1VK28DgcPMn",
  "key14": "5UGjnBbjVMNwzpfdiwezB4b68gfi1vnsKH8VCgwCNRMhvD5FJBawn5UTt4VnCW1agJJFfzqzd7RdTUZrv7U4awcW",
  "key15": "6iSAywdxjFSsVWEi9vKvhs2e6WcQVn3bzKMKTm8J4FcSXK6KjSr5wiVWG2yrKNJUAcDnPAdjqupzr4TKDL3MkWQ",
  "key16": "4Z363RWGYBHAj6R9rcGDs4f52cV7uhhNXMhcD8kfgaCmqVxJPLGw2ivdtgnjk8CeLMiZ7TYPhDxAarfFEjzhCpkW",
  "key17": "2tNN6pN6ba91sh754wx22FsTb69f2Hcu6yPba1pSA2XsSmPKfh2vNXtT1GiEZFsN2nRu4nu8ioPWDr3wYXu4AgPj",
  "key18": "2MDPfYDHjBZ5ohBn5fXP4vmdL8fYKgAGKY9VnzLoL5FsZn7Jg7SSAHWbS4ut7EfWxPzqHuyagTSBodmkMsFSi4jV",
  "key19": "3ZYbzzWHac1A56tTa92UN8g8o6sXP4DivrLbvtcm8PcoFE5Rt8zz2fs3ECY8ufZQGojHxgiT675b8njGnPwuHoTC",
  "key20": "V1YJYWPjprhyK5Q3ecf53dGBRSNVTBoXou7sD8onqSEb2k5x1auJccjkkGaDHxyKyat1DRVqokPi3vqN9d4wUrG",
  "key21": "37No53gTAEfr14TtWXnLSApvFMpqTgKjzdRLruo2duAdXfsA2yGeQ1fdTXAUMtnBJVDATGNNybpnwnaN9R77SABx",
  "key22": "55sELr6dJbDixHrj7aR7gUyrRBsb7PwqxxUcW29bmQmqvQfH9MQhFS3ni7qhjcgWi3mX2UpUVEqrzRyy3vuJPbRG",
  "key23": "5XBhtBkbWaGSCdZuTHjAWF6HNbVoRSfNVUAVS2gww6g6PJrZAeHcxUU1fYqjaDNaxqUvrKnkKb2YtnYAeR6a6Kc",
  "key24": "2UtyJ4AC6QKBuwWghVDfaYYP6ufp47kswM2M3UKekdHZH7kqzedfPMxYGZBvNxg7M5ZZW97oGtiTGovmEwZELDQq",
  "key25": "t7mnbwpSr1JKPpK1Yk6JsVodz3Hb5bufd4KtgLngXWxRSGqwsdvPDuiiMgSVkNHoAVm9cMyx779Sg6EWUvjK2oq",
  "key26": "25Bp4LmojYJbgtbt2HYicszBqmqJQKCGDhSbZiyraGVYMmYyoMgWBitJfRmDi2wUJTH5FZSn6aV1g177SHTMKGGL",
  "key27": "4MmevX7LRj1tTTfRMNx43jEN8dFYvQ1rGpxCpM99TGyg5qLA2mseSRRPPCZh3pJ4kwLcYKDYD3SxE8z3yGh9dKjA",
  "key28": "45UvYy3YpQFzeYZHL4TbsnqEj3iz3zNjjerg1hZ4cbZK6xyVcZzaTwtwFdZ5Y57r1tjMdi9Mp3GS7vKRhoTVsdQN",
  "key29": "2EavnkCYtd6J1be17ER6DByMduAvqdQGYqouM2EVCp9YjhWRSqvwg5FJS3fRvtS6WGCa5eY3NeQuqH5BKEESmMQK",
  "key30": "5BZW28m61BHLmZUPBrnG3ni7z7WezUuCAeyer6tFkMBiGHaXqUjnxCMsZNqkKSGWoqtGjjhqZw4PPWEJGSPzs18a",
  "key31": "5ZzKCpievAudf9cDbqW7871iTXyMAi2PWM3XEBoawpjvfnTZq5ecUqqouEqu29Cs5GspSiBpwoBRHoWr8x8XdyUz",
  "key32": "5CtddwGjGXJKCM4fA5qXu6svTPqc732WuAaCGbUWemUxrzARbRcSm8MGAoS31H626huAMrMd2rgrujFJyExjpfgT",
  "key33": "4UTUE5rKp2TMM4qJkiWcU3qwyvoTARr94KE6zo9VjuGaBW79zVc2FxMQaSnrjZ9uGwmLvSnwornhvmPkUZLxV2hJ",
  "key34": "5MNMi17FSWBtYfvSZP2Loqu7druQ9dAuC6twA7Wi69QzsqS3D3Fid1T5s3D4yDmUMiRHwETF2kEZSYNx7xdSBzbn",
  "key35": "4dNrC8x4QbndFeiEKD1Y3mtdi9x1PQCPDTzpF4ASrnkjL2Tb456pGdDECCx4AuAPPdXCJK8rH5X8VF4QqdjvWykW",
  "key36": "36rtkDDcVwdZuCzt1kifxPm7Pd3QfaULdL92yiEtZMksCMTpENKy36ToASBEFXH6FgXPJy479zQd1a5zc7U6gQTd",
  "key37": "4MkRxxbhQmLUQydM9qXPMrBPQDTiXSRRp3qLTTFEhVUQMDmgcPutCWtKgsWKghK6mXeBwPSqnyxPZXphUq7JHS99",
  "key38": "62R4a9ckf38PX1FvqPRS6T3GfGcN1DVL2nNGjTKGSHcA6zkuc6PXQtZ6s2LNMwg5i7CGcJdmrpSBYYTke4e4DP92",
  "key39": "4T5fi9xpvsUPWYp1nwJNEo2iALVPZsYyNtEmtE4YBLHfvLa2wLJpxGD8JELgwt8GbP3XPkagk1qo3741L4Jk9mkD"
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
