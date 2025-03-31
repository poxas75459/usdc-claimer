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
    "5ynZE9jjfUQMhKANCXhMV6yNBFC6RJapV3nn4d3L1SEn9i1G5p17qcRLUSVBEciUeBgCoAUR5oJjjG4xY2j1PUmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MUnsQavHR1QxMy4pPUtYX5aet7KR3AmWByuMe4dm2pRLcgoYJxBB56i1j3yuacg3KRa4GuBYKjGArubLwzysa1H",
  "key1": "3qdtyywyaWwxieyfvGjz1jyRGyU9FvaAsbmkJ1uDnPMSkSyxd2LgsBJF3TVyzFLT9BN1NsUyRUuBcs6wWpxFDYVL",
  "key2": "3BuCoMpP3ueegabiumSaMQ6Qk89ue8Edd98UFq8AvcBCRcpMLw7G9mxBSGKiWjGa1jJ665KSzHbE9MA7icBTK6s",
  "key3": "3GrWZ8itNMVkEqDAkc2QHgvbiNj6vF9MxZhHht6zKvtBJvh6WX3aMjEB3Lx2UQxeMJDjsiXq6Rz2EAYZfdXoPSPw",
  "key4": "4tTjnv6NjwfvU1xd37iCKt6pzbadAY6GJAjZwQXjLN7Lj9YF1P9rTEMHxWf1MFjv5fWJZPD9ZLPePgRh4DEHkEQL",
  "key5": "5jvH5pCNKbkYLUnSetKLm3Ntj5bKF8cLBcq7NR3f1gHyKe3k2q6FNA3V3HXAigt2s7LFqtZvjpRYagfz6fhuPB6N",
  "key6": "2D66me5miGsyg7FEY3oN2iwM8vReraAWptmWCt4PNzMmk4sgp9eMRAGFWKefoXtmm5sCcDicNtW392Lp4JLzGvGs",
  "key7": "356vZVmY9HserVo3fZLoYXNtvSxqEjjtfnXmcVe9og1N38aymYoA2qQfgw9raj32cpD3R2NfbP6mysZ4wnjZiGsM",
  "key8": "35HcXLH2Dt5Jd3RKKKRasKMZTaVPr7vwHDfuG9hS2dVyXQ4GmZos7uoUkKtkb6cyDqMtXBgETytm3eGr3dwoJae4",
  "key9": "4SwALtWpinDthFEuPDkdAtdz5NFYExCQ59dTjsDe2wrWdwZid7sX3HVNvYAvYzLQiNWzjN7SY4fX8GL2mFf2BBQv",
  "key10": "2eJtWLpy2FpBAbPWJ3NSuFBtgHjCGhxR3tpU14HJzuAhiKXbESfGR2Vhigo5hhNiZZGv71VnSgrrWw4SkGdfhJHq",
  "key11": "yikzWT2drVGWhSi1zTJyx5AP5ZbmA6gkpUhP54EgkJkkQVUbNWhtShb4JQeYKg5QZtgqJqXgFsTHYhknEx2QbtU",
  "key12": "oacBrnGLrVJGasoTknYynYB59qK26SKTTVpZQgdLcFJSVFqR1dm83rdAtKxnfSgwWLJqWd3GDY8GWusYezK83zA",
  "key13": "36jrXVoiYtEVp3Tr6WRHHmhsB9JCohUjmxm6nKqakLrVQmMHxNBLvujN3SvUTzsHS6NNAmcMMiDnbCW7rnZmSjLu",
  "key14": "3iyt552HD3hwDAw47Y6bJrwLwLNWAAMYoG3QxvgeZf8c8hgGPfNQFgWDiCAo1WkerbUk8YMXAW3jTYR182fLKeVy",
  "key15": "317vWAocJqmZCdackakPn885WDAiHVkNftr8wrjMSygvyQKLXQGiPSTmNC25J2ezXtHTCDdfoQFrSZWQNJ32tZn4",
  "key16": "3eJLwiV8b3gWctT3sbU9yd6TQZfw56MmmBVa3GKwkPUEh3i6yNFNmJNrasdHE2bn1jZQHebPg57NFVcpa16bfBtX",
  "key17": "4jPLDVK951SHBA2MTT66PfU649RU4XnFGEuoVARAEkPzoojMRAY2kcFWGxfRhA7qj6hvN3H7q7vdsXiXuDsjwQvy",
  "key18": "627gAuEpchYHFdive6tmRxFxQEcpdTkzosPekBBkaCzdZ3cFdB1pAyoPJLpJFrUcBAu9LMf4NqxfRVTr4rQzvkrg",
  "key19": "59ZBrhcP7mRvUhy2rRGz7QHiSemXFKfRxacgZeVmYJS3FeSkGZP49viaKbqLvahWAiUD3o7M4ixrpfoqdAXkCMYK",
  "key20": "4mt9ZzEhoCpM6ciUv2SGSNEHNADFNNWZAsiwMytDaskaEE3ADt7CeF9yuyQkqMisqorcfS1JdTUXQBnwqPwSp8NM",
  "key21": "67oFjA6Rz9ubadf739sX12h1Se3Jm8deYvBGB1c5H2Qc66Qj8TPqj12a9Y1mWNgWWeaBrF3DSHtMhfCeWhb7smNh",
  "key22": "5EQZhnojBUWL3xk5UETSeWK6gQuxKRvsRXLjTzBLY7VY8AveBeUNoW1aVRQEjHRQgwibP3dLNgFas4TDu3a1L8cY",
  "key23": "41DDSFNNmq5a9fYmYpcCgCbuzMRqaiwcEi2PqDf1PfkASHxcRVNXG6YSNsZ4QWoQ1H3tec7jPVMwh1mqFTBJKvSS",
  "key24": "XH9K54dfbN9DACDSSXbqoR6etKSZPVjrBBgmFv32Y9oTr8Vg9qpS4zpCzeWtNbW5DWYCSGWoxq8RsDaezX7XCyo",
  "key25": "3YJF8Zc5nVXLRNVvgiFJM85LCDResaJxmtL48mybq37G2KK3wzN5UbC2jUt8YaduRrwaLb6HjdEXotVerHf2Rnpk",
  "key26": "X2QULQHy4kS1xycAqjKHtDonTSwn651aVmfEM5sArSbothVyhPPSq3d4Gdh2XaCihqwbPVnn1L7KdvvEjwg3uB8",
  "key27": "2WX4gTSYBytiQhzLvwsvCxnQTpGW34N5nMwVMqeKn75znRwbB56JeUPtap3GuvbD2GcmbXZqx7DyUAahUHFG3Mrp"
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
