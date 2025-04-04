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
    "24aitxQvigNXzqBMLmZcqSg16NF8puwVWGVszau9uktxYo3jnTjVsgTQrA7LfHYzMTDGSVfq6EDQpRkL1k9uwW2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DaufHFBUdacZBAA226qMKxBVkFGhi4dfrDm5ipna6ms69CW6XSrmy5sFPH9W2LoRCQCabKwYskLcdY4jb7AuSmf",
  "key1": "vsKB4uuBy2eHF4B3pEURLu4QCrVoq6ddLxtC7BPChAE1LRn5nftCUqiGzaqfdJpzLdxjcttaAneBVVM7okTignX",
  "key2": "hGXTr9gyq7864oeWoofz83mx6TqSk6z3Xpc9ef713UeG6fLBvnEf8SHuwVYWybH8cCuNd1rMN6quWuRvEbKwsqC",
  "key3": "vpWDLE7zYQxtU8JG3puYGeRDTesWf4JYM5rWR4LTPQVYCgg6DqxxB89DHPhjhYjF6UUsSi1PMi6kkCPyNTx55Sm",
  "key4": "QYbTnixd5q6PkCNv3YmeA1ndSs5ik5RX36CMFgHjB1N8MRdLeX9smEz9xJbt39Ug72QCvPW7tWrdR3bmraJ54iy",
  "key5": "2XVZnhMYNBpUHXyqwC297PDoXh5GKiV4UazTXkTixy9yzcYQ8GhGTciy9RhEHHdnQiJDiYnjNirxuvVHdaLeNey2",
  "key6": "4hvHz56u2rBaiUuKJZ2UYKD6bjLPRs9KkjPbXiDXuikjPcyNDiQqwyEKPyhoVQvRi4BmDHEnrESvSR565roaxg33",
  "key7": "2bdNT5LgUpxJQZEYmPzhtGSg5WKoJonhA5PJ97UWqvZHUQgPnbvmQoXGFXV2AqMNLTs18eEFcD6eNz4Qt9f4EuBC",
  "key8": "QssMDMVDV1newehBBrgDGV9546JtXJdxXDkfDgZkVcUdaXsKMrt5GU73rtjoymLgMrVcvdpqdYoBp2aSG7MLg3a",
  "key9": "AhYsxVQkBKdGh3aLNY2vQwyUYcssvnKS9DYdrcYEQX3D45rLcoScjV6KDYCMtm9nrjwXYyRGNd1vQWt257Lk1Hw",
  "key10": "4KiHxZp2HK4dhKGdciFkuYDngnQCYeocq1wQB3bymXouXyRcrf3hfmdVQE2kyYGq3zqmRqkNHEiR6qd5TjCwcS2n",
  "key11": "2EVrcTa86KQeyPS9JR5d6mFtwXD1Mi2E2wnsd1edSh3NEPTsNZzfsKbtyyqbTsdYecvrqtw6gnFyu53u1WenhjH7",
  "key12": "2XCEBMSySAU6Ttsa7sYNqT75qtnNk73zUosUqN29de8HbrZTAite6pyTBor8yyiKhwQhAWyUtxJBQ9YFURppakZw",
  "key13": "3fbcNBgq5D2W3Sg52RVZKnEjcPmxXFK4brzBSZUGswjzAeHUtczQapu2Lp3vCQ38okonKPVjgnase3KZ7tJCcuW6",
  "key14": "2YdYYBAtBEKLqUDHhj8Dv13DyHuuMKwGSdff7WMCSwiLgX9WPXxkER5Pen4wAZrtB23vESJJZNtTDn6YJGKwo26H",
  "key15": "4cDA8VLs8npVZB3BVwZDnJX7Yik9ZoWV6pFFoR1o5YEEYu2iwC5k8DiYmPa8ceZdZ5joaBx8mLygbuGdbNjeQTmf",
  "key16": "5zj7djprgVHvT1fk8gek3TV7giZFyzUrnBYh1qSJeaiNmaDZD5UCmd1yhPfyxPMXN18YCS5tpZpGRGrjjgEiyFSt",
  "key17": "25S9SC77ftx1Ki8YNWYUznnPuKdir8L3GUuqu9GUbg9VFoNLPsFztfU6xJjuBbdz4XTyUhmwYG79LVQwJJMKY1ve",
  "key18": "316B99HRp3ahFiQgJghKATSrARwjccoWStHbfSST4ogrNe1KzcBUPdN6q5GZcztssyRhk545VAnDPVbRQt8qEjHG",
  "key19": "3TXDMP3vm2APhDmwkm9KvkcqqQQNhJpnMNBhAiYTHdpM7AX1tkPrg3pTC6VqPuP5Fhsaf9TrMdnuXSXSaTzAMPUH",
  "key20": "4brkB143DEyG8pMCDM5KFVQSTEi9ffPbnwhkmPAZbZYaqp1eKQmHFib9PgrJwu1j7VMiYk15jXrUyUySLFeY5fpU",
  "key21": "5TmaZxVKi8pZWAkuJ1Td5FY5m2oBPKotad5Ezm5J33y7rzgkgecWV6vaJZrtUtAG26mGcsS3rtMkMLoo1vN3Gpiv",
  "key22": "9bTP9Rs5zupswUcJS3BxYX2wCQvqpyAgFiPZSeaTUG5rN2xJ3XcnAzEDfGwS1wvbM85PoMiCwyF8TsauCtYktKA",
  "key23": "4th3ce18wooe71TJHPF8SFaroVvzeK9cwxAceBwBdn2U24KfgNegfJF5LSqSUv8fcW9qPaHGgaiiSdV6SLNZWBXW",
  "key24": "2THuaWqYfXt7b8GSwx2gaok8hiVjwLNYt7zZV2ctUq58d9LquQEqiG7NuWQCLZjRQcaappm1fPMEQuyNVrgYgEQ6",
  "key25": "2aUiUSHkAD77EYAYtcGFQSjkWuRSMgUpZghrrah33rTRsHUrKXbCYJn7qSKb8u9dvUkM4M74YxzmoMQc2rQZzLKf",
  "key26": "5nfnfth42ZrDPyEJmSZxKqxv23ZL1S2zQTfxSHsc9jCHF82medqgUmERyZm2QCo85n6pao671CrhP6WiXVXZY4aM",
  "key27": "5RuBFz9n7K2QSHYWzUmbD7bxbDC6VxHma23rhJrJqX7kUMGzpdXVwUPdfkSLnYwRWC7RJTALmqFM7Pw858K5T3py",
  "key28": "2J5KJpA1CqCocQHkq16QGciMyCgVDHvGzLuBdSrjf72PPxUYw2g4DNEGbQyRsvw6fEmoS4uQDmjSecsB9SDygreX",
  "key29": "ypZYD54eWEEWc8ukFmEo9govkLYqUicQTq749Rmm5xGaERBdPzMcgJeYPga6mD89mmJGxgbz5kXPAdZZo14q5Uj",
  "key30": "58vPTXzL4SFnhqB44u12bxreYqs6kLfrXHSUT4ycmSXEZbe66EHWQAKC73sPDaHv9KTG94o4HXqF66LVY3jS5XCK",
  "key31": "3XPbnN15N7ZGeoAFg4qMqTqmYZgX4AeSKtaUbiMLh4eKwAc3Q9Uihvf9eNKeM1wCmBdpqdXSk8m9JVJDwdW5xDQX",
  "key32": "65YnSFJvvqN6i994fBS82CVLk818DhxPWvVdBsCheDoWbcbfASQDHAVTGi28aPXjRSEDzhLdVwwfvgZ1ZcDnLaXd",
  "key33": "2QP5f4EP4tRwHxzjAdbojVdEozqwRomyjUyUsmg5qj7YLYW6M4K9FWxif6JwWh1JYNUEyS96SHGiiuL8ZqqVfsDR",
  "key34": "4H5X8HRkDvZi8E1NTKi6rYPsk9FBEbU1JcZBLdpP3VfQFCZ8ZgLAk9qRYG4K2kZFXJXhfwztLZWY3mHkXwF5TZtz",
  "key35": "2c4RYFYZ7rf2XSADr8Yimza2cNdHgkgtNJq4KBqvvHiCzw98vTBhrpX4db8SP8VQUMpoJ2xEdjnjBiCvTXPhFUpT",
  "key36": "JkEiqVb9zfaBxLyy6oiTekvYfKmBTKowrGysdCtYNSH3PeCTzJ85PgkpCXMSDNGuUnoS2DRynshSHvyFAdcfvW2"
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
