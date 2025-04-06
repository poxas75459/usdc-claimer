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
    "2x1QrMdLHbXcpYDFGKB9DKPVrNRUT69HqCi8wwfub4Xs5RmXLLTx3MGexnMXUSm3QgxCkFoRnYpJqC2h8V46LPof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X4BqLyf8wTNEvKm8bJxTHryURNimsnZ2CfVHE6onrFJuhuMNoYxu6Ptyd2dQbpDBSQcShsxwzXfkPTkR2WE7Csc",
  "key1": "5Re3vVyPEnohiGJXLhd7nMBh6Y76B36KoxwUzwgfpM7NL9HEttKHx3yw4pnDdsEGwjEKPyTKYrRkxU5EiDDNrgh1",
  "key2": "3uQfVL35oJpZwzuibraUNi4aqpuVBvSEBbHrRJWmzPtttbcAeuhxakjfBi8FiGBEetJSWP7r2X3Ab9fDK3RoJ7SY",
  "key3": "4eEZ5gHvQDQPJH7p21kUQib1VYVQqfzAbte3ZPhzuRiityesEqx82xk2mZbtVQfCw9KTNwJiTj2aGKDWTBnuN4m4",
  "key4": "29uves2URGrFDrLoZBFvYfURPa78NvCfScdta9qAqCRuAWv4hJeNjRTBc196wfz3Jt2JxxTVA4TDfGLVtTKSR4R5",
  "key5": "5f1hj9Vo4y6KdERmf7564RK4FYauu8iEGWnjsDuSQXidCeRRWBguWYYFY2vyxHBUz9VVFwkcQWM6xGRg9nQzBQ81",
  "key6": "cxTV7ND4288vZiBFCMHQUCcv34tkDZoNgVq3vPYJn6uCoduEUdAMF1y7CTuGtktHaUwuaLdx64DasUxYBmNBfQW",
  "key7": "5A2bGoM7cQGVPdwZS4gHcEhwfzt8DUCC9cRs8hwYgcWPh3RWRwnyFr5jpptP4H6gjBuZV745ma3f6K6nda5nyqck",
  "key8": "4UgrSfSHwpLvUJmVJ7ncB8DSb71WfRBcB2yNv9C6ZhXCUv1tTw7X8VhGNmLhuv12vPD7bUYBjXczBWdCLqYTUjWt",
  "key9": "3tEmSK3qfue9ixnT42RtAxBDyok2ApGuZwS2xaGiMuYQsNwypKw4anhaxGJVepVbEqj2vSZnkyAPpsbxuLSU7PbM",
  "key10": "3XyF5vyDEDuMDxWQUtdLDor1iTXa5ZqP78WN2A2V5UgkDw6jqrbzbSfT3XU4e8Voickwbc8Rjz2pBnjL5oieHLLA",
  "key11": "2Dhj3dBhSPgqH85x9rkNxG6P9YvU9ntjFhsFda5nP536HyR28KtjNCtzr3wVbxTcFzXNCA4JV1io87stgvtmBrFg",
  "key12": "2wXevnHXhCod98iHMSgqqBN7FpHucFksqsTB7QjJUwS383Ww2GLNW37UcdS4arAsHa5rLM64sNZNHotDXhgzZewU",
  "key13": "4YTvhtSUGVYxDRMsNNqD9sVZ2aWPPKAbXJBPR2EsvhLkuEYqPraZ5AMB2EahueAkJk6qqKSFhuXA865mhUNygJKH",
  "key14": "5dnyTbLBfTc7E7mMnVfjV4vGFmzZw6fKGETJUyD5uvQLLKURPmNXa7r31uaR7zF3jqXDeLZ6mexTwFYwLXhLnFCU",
  "key15": "5tyXjfDvPYU2gJdhZp8xqgFm45QwT39mJEg3V5cp6C18quto2e4SDhuG624FHfKsmjKdQfmiqSguoTemEUJZquWD",
  "key16": "5Gc4BNyueatvgREpbBHjxtZgiEg9qGeyfiLyoL6gu36dWPTuNn3eCzQDRpMYrm7DTaFdXWjpDq36b75dFyHj1SFF",
  "key17": "3LyaDAELBCSJxVnyoR9WkWq8gnPmBwwTkWcZEXQc29a5re7fwqkToaG8vkzu3ddd6MLX8BJe65EMv2tNms5MyrCL",
  "key18": "3TEjCC6hSEj8wEgUqBeG5ywYdTPzx4HCd77DjchJvUmPZEA1B5cdFs1DmJDuiN8pPudNVFDpfXcPEQgtV5T31WrS",
  "key19": "5FCvTHkt5JCjUJiVMUZjEBxXpXrmKPYfhvFq4LqLZS6VL7osfDfXcvVgMRU5ZHHSgir75MgpA7QaC4CNUuszFesc",
  "key20": "5cyHxmHgWfih38Sj9DV4V7MekeEZdQuqxwt7XT3XKe5eozZiVRbTpb4LQhzNnvmLCKEev2kuMVWAWx1vWsgPm3dK",
  "key21": "46Xx2DPoeBD7QXnHzukPWXCog9vbtAM4jDi8VbBobZrodk6tRz5qVUFgkgMVvPq2ic63DGxAzDLawzquZ3FVqhy4",
  "key22": "LgDWEzauDahfdDMW3jZN42qQzorQ9dxccs6L368WGK3XAn1yoKYBWb6CW24fMVZq7jucV3rGfnXc5DXG8TB38bq",
  "key23": "3NkBNJsJVJgYqMPjSj6MnSda95cZ32E79SKy5tyY1qV7x4RdSFhQxRdttmLpzNeYR3VEAv91ELVUui4R1gzwqFZZ",
  "key24": "5jW1j6oyesVyhDBBZ47LD9psv3x3gP61QnANTNnRAhK5JciZoe9WZjZbdPvFhgmA5TzHBk5DcYUVD9AS3hz9kmKu",
  "key25": "4E8TMSueGbniZgDCQNsjC9aNsUMYuEqZJPUy2XWWH4QrPDFArTwAigpcYNiRGjmcgYo5vLNnnA51S8ieYjahihGr",
  "key26": "58ttDkecsWx8CSa6T5S2yDWmoY9kuqYnC44pCqThbXxPTzaZ8v87SLkrFxPaXj26WHmDhfY2nD9j7orNFLWCdmpS",
  "key27": "okE6EQ4EotyeM5g2YUikVeKWti2vNFTozzTra6fKoNAGWGyqTaQpEpH3oAg8r2SCWRNdWAsNmFL47DrMneNnhn2",
  "key28": "2PmBK59ekcxyHk1Xs5V1RK5z6SCt5PYmeazp4r5bZbQMfdLoye6psuXWjaS54GeDkeDQaxi8jRmD4KyL6JQk2ZRK",
  "key29": "4FcdnvfeGpqXVD1osUSwDy3urw4vdTwWbeLApvxd7gak23rEa6WfuLEa3yNVnE5UZr3VFQywxB6PfXtHyXA9PGnh",
  "key30": "nKkbBNAPh7usZx4AtLMYcyKxqF1zmn6iQhYdvLoAmTWeXobSfAWkfaoet9YnVQRMKmUFovWMpWh7RDMAPwPSnnc",
  "key31": "4LTb8b1m7W9aGVmLH9DM7pLqhyNUx61Cs4u1dKEtTETkzQQbSPcMQwSKtN6JnMkkdqGsGQ6rLUfYnQiW2bYHBEn9",
  "key32": "2Z2wbrgsedA9yBodiyAeWrXKzKvB1ENMqVusrkKncb3AzuKZdrwrFyfvsM3hp5EezEUy3th6Mq1bUwcRqdFQsP4K",
  "key33": "VN2jL9tE4uHZVxgCYdYsVATpj6ekJCKzbdmdaNonofGHztqrGTkKzsdgFP4sHsBSEwWgRgfnH8AESCMBHyc69mg",
  "key34": "3YKpHwG6j6z8a84c7KAnYRE9xGhJPQH5ZjhNtk192GHNBBC2ZRdaVjznQgo3MGN2CuZ4EFsXgUANx9SRmx41UMaa",
  "key35": "4Sb21jLUJAsmmQHWQYYhRcBFwM2dLmtaXc1cvxTX5wvfvQ9pP8FLYAaCKZJU3JrqHmV5f24527betC44RSXzFuyW"
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
