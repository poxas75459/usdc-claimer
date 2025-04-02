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
    "4u6FtiKp52m3sKKXEjruN4BFRJQSW2GDn6jH8Mnb7qc1KNHiGxVtaFZVsfaknwHYMr69ed9r8BhNcrWSaefJEVDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bqSfdNCn2qpR7Q2TSjDnSrhM9uUqpbz3HPh2nTm4y2Vs9UtPyV4rdLkFZeZfWb9AVEoMedyk7W8CRTB5DoyiM5Q",
  "key1": "5Yua4aph7pit1YbK3GrqZLENrx1RKrTRkWEKB8zqZdsaET3ouXQ7GwfGNAio61ho8iJyqA5prLcPwPDxTHHAmszP",
  "key2": "eLWhLLDUeArGp74g9kszM9mZNXkYAic81uoHwSKkzpPYDqwa4wnjBc526cRajGPagRdvvtPqYZTEnACtorL9DFH",
  "key3": "4pfKToA7jqS2i6VjencFoTpPLbJovKUVuGkrMvEWg91q7dcXTpirnn1HfZza2Z1cAbATLCANM6GdeaoYfFtQNM6o",
  "key4": "yJYJJbxdvwngKkbthKfm6qjdKyWQhx9rM65AMYGnMEwhepFbJbYzwY7pv8uHA8BBXbc15pLU7jeYfMS2VptVJmt",
  "key5": "4YpMD3UvYZEPuE389d2vY1RCMwusGvFK525A7DbN71JSwSMYUT1S2zBZREt8pXh3BNUdweDryDW4DfssTcTqTGc",
  "key6": "3ds8J6JZ1dz8pRnDaGcfBXbcQPTbjA2GUmqzvi2dQDoa3jXsRrqhUNZwgYjbr8r3wfRozRs9Nv4LTnyMPFLBDB1d",
  "key7": "3nMiyVqw4qAdDy8KNPtx8JUfQ6mfNmxUPghpS6xSsHrqPgssL1fK3YpHfy8GCMQUveyq88ytyXnFb5R767AhAt61",
  "key8": "3YcNQU5fp3d95dKGNRadrvMtPaoZ16AZrv8TL5wnLXxHvH4aatrof1HXr6EovBubmvPzDATSCjRpdXCk98Wfxnh1",
  "key9": "8QfsxGTUZuxJRy12w2RBHZTK8gqmxvCPMAyvoqFT2a7Ac9cqvRpHqV5gadigmdncQx7GXjhMmDxCT2UDteF9hbT",
  "key10": "2JCDuGJBDAzsxCWbfYYEJRojyBNhHWzSmtNPQxNQuN1KXcrUizGDoQV631eK1SySmiyzw7YGew8Son7WMwG8Jj8Y",
  "key11": "5iAaD7ocsNTs6YFE1ZhJqu6srPjX4MhJJvbA78HM45et8ehqeXstyMaSNirzMianCPgRARy7YJPKS8JvgQF7VWms",
  "key12": "2LaRZmDS5S5RTRjqWK22fqpeQNH1GSa3WdZxyTnVZ1Dp4F7TKJpRDHmY5RdrxpRW1JGDNwcY6hpMBfxTR9p9i6A2",
  "key13": "4Qpix2GruZoQqg7qt5PZ2xG8dnfn1Z8zL9y4aUiZXCJYkmJxVFhthQTJTCrKFuNehMUKYv9rtVM3YV6p6CciRSS6",
  "key14": "44ziEFZxoMKaBVZp5Yi8HiXLgnQphAvd9MrQkhykgoaNfa8DeTh3Wy2FPGD2LcDow9Uec12i4GNkvosygy4WkHhf",
  "key15": "T7sXCthAJrnLqhgz9672NvS5u7i14AVz3vaWSeh9fyCDnjP6cqBF6f35CDUwh3iYd49BT16aTve6kNSEHR5cVxw",
  "key16": "3nBoe4ws55KFkA2EXSDA6DHbyvQCU3XrnJmvvBf1jP8whcdLpi8ihFV2d91dF4or2bd3tzN5WVQFJJLFE9NTx6au",
  "key17": "65ZzsmzfmnGvPT47E6CTjRLEtMWHFDKMc7ckafY2Hz9RVV37SgsFoRn64SbdB6TMag5zaYtbubPnW8VDUDF1oXcE",
  "key18": "dtEkqZ23zihVvmcmUiedRwZWxTQ6orRm2CazSJej9DDW4Cojqk8BUmaVyv2LUTzEN9tsLcwjLjLUdrkC8XzXR5L",
  "key19": "5pQ7LqLQQ5AutG9egjgGTXi4hRgRw791fWWYBkYmwzSqW5vCPbwqkb5SyeRGgeaiziotMhiMkHHHJoDZjcih6BEE",
  "key20": "4mxTiqWuQxbeYW4wjTdmb4JG5QNSRXrP2oCJgEZiXETUR98pxHPAibWe5GTSQ7ce4HcvgxAv4BLNfrD2ywZQtWQ7",
  "key21": "5KVmtXhTVn9bakLLXU39Kb3Ba7x5nFTRBhtCnjYthF3YkNu6DVVgqr4Atuu6b7WfgTWWfY42Fzovocaz3e18re7r",
  "key22": "sQskwxmkQonH3ake3jFoiV9Z3mKVjHdh8JKfweTU82DWW7bX2tx4sxYLPjeB8FC4RjQEd2MmUaujziqsrEM9sak",
  "key23": "4rk8fykAMPpJ959p1YRd1zPqxUjL2i4dxhAF7FsMXX6czo441gFc1M8LzzhKhAbq699yhahMimU5nzrAuDa2h6dx",
  "key24": "4nXUDThQvXbT2BRUPSux5aEE9Dcg1rmK8p8usnJ3VbYqnUtjqupaoxdnPGRJioSanvDPCNsVRR41RhPT8oUHbtC5",
  "key25": "h2gSvzdadnFjLdeQ8xmzABxXLEzqtHL1LR62iMAtoG32c777hwPrEZo2ZkZvnsyTsCem5rrU6HB9yT8388xsn5m",
  "key26": "2ZJqvq9rLmGP7KjgJpV7h8kLAk4kX3N42jAzDpm5WFcaDNsitvMJcDWZqWenwiMT87745YKJiTGP3pkdXJpA417m",
  "key27": "3vJQrKaGnXcEPrTFtR6uwHmCsBbGFzuhD3xXKajFNGuphFYYig7KmxuDZyHYJg3v8te2VFajSiuFj6h89bLcyGyW",
  "key28": "3Br1izzT8vnv72SbGuxp4xrAeBV64e9DqkKnHkxRZDbk3TBVxkfX62mkfELYHBtm6qnmjbd2VKjXBivY2P24CSA7",
  "key29": "2xsZfjKXGGKLop6sNpkKafhdxAeAKtGsZ3cE4BT13SJ5njwPjCwPvwnVPWmZfjSP647S5He8sMRmQVdnCJXehi5D",
  "key30": "2RewyRVhjXHo48UjcSMKWs6h5ob4NGVd9gXRubKsLbSz9VDVi7BAJrA8QSb1gSQHoTJvDHRnax7hAhEizBM1gadR",
  "key31": "46KmXA3yKDbpvfW2Fi6ZqdM7ArnBopwCpo7qhH7KAh2xKPhJjyrmZ8WbvTWBDLVLSr8fEEicxNZJefQS2QXiGW6y",
  "key32": "3P4CShemJsskNhuVxRtvVjnx6b7CJuLrfuGx6ZcFfQgvDU1oW46QbcNvoKoXPWqcuNKFyrTXRJhGFP9spveDmPSc",
  "key33": "3rLNR52piQRVb7krLTGE8ts3FKLxUmgqrR6qmVjzvv7G2XT9XB9uhJweSnJGLrYacse1v1XQEDckL3qjWG1YkQft"
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
