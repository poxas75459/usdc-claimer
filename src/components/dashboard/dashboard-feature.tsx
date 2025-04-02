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
    "3oxz1KYrvDD1oTGTXCdJ1wLu958FoZcoE3EiPDLxGC47pZZiiXSyVFjbHLnaJM1iDpPaofXWuXsdeu3xqqFmBVbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ReCmze2tMaCDvtaMAwGEk1mbpXyB6bYfMdePZBMk91njE1Kz5Y7mQvrXP4xYSkFZkPK5ozD5Q6kBfiBmN6t5gcR",
  "key1": "65tu2R7sasxNkQhip2Po2XGTkXvVcbHpPaccBbxKbL4D4GaWGZmKdXffbd2sZFonHKwgEfkRXBjUXVBE7u3TaRiT",
  "key2": "3KtZi9gDeeKH3S2SJjuHhESGLVNCxjGWseeCmLg4q9Awak8gg4ECnBySWPSboydo3XQirC6YVFZvK8UPr6yiuaUB",
  "key3": "8ZBn7uuLWXubjissKXiENFAq9HpX2NisAQd6p71493M3vXwfr4o6TXQHdkGFBYRmMJ2DqCfsWAapuBwDww6jwbi",
  "key4": "2K2ZqKjByKP6MtfKT8haqUYDXXwJowPAimGPAoXtKNVyVyZ56VGsqvjSNTh3tEFruYrMjdeMMSLzJNYCzwBnwdeY",
  "key5": "5sHudDeL7eTagc3iteWK3ZsTaiNjkypLkJGg1DXiURUXqwPD7U57SKxseAynBve3abscFy8mGQf5cs3inLjDdXby",
  "key6": "2EHiPssk6sJfdzMPPS6C8wChhMjMW766DcZngPUthywk8qRxHbonCuK9sQNBM8PVrAHn7EPxETiHGtnJqPgZgLYQ",
  "key7": "3Ce3rJVfGT3GRdCpmZV1f2wYnLbJiav1pWmthS4siZBRP5DJ2cGgC7upeo4rjHZqJUK59BCoHbR29qjTyVJ9eMwK",
  "key8": "2tqtWH97wgkpnqVJRiF7nN5rGK81WYhiNiji6a223VpLAFo6Ki2hwfhbYA1HdfTZhd8JCL4AymoNAKHqsGFEfX8i",
  "key9": "29ywxdxKB23dgdFVpfUL7DKRigTcPyhuCAgrgTc4Ct2yYhudjd3NkXHZJytPjkJ87fdJYnSLc47FapHyory1UhHp",
  "key10": "5VaS7phGxcSFSuCksAezWj4AxgFv1872GVbPjLDtgvZuSm1vME5msBchVSEXhVSPoZAc88nQZ57boC5jYrs2rsuJ",
  "key11": "482qg15ZQ86GrBB3ksuZz4XDTMsBY2Vd4DcGdDaCwwZLxVYd9X4t3aX49bfiomZKLrbjpfPZCvCQCoE8bhg7pTP4",
  "key12": "2ASkchNhcHhNiqAmw9NhLdjjxE1kopau1UGaCxnnHBxZGSiyedj2XbrJMuTVaTu6xejqWELevyzc7fms88LnEj4Y",
  "key13": "4Gp83DSNmVuZaMeqECnFDqK1YheZKxDfpU46mumtpxWFQrJ9xdfFtARXQ9pmrCL8AJq6pqPR9EgQMScGKfcGjBFr",
  "key14": "2GS2Si6cht8S4qxUNEwurTNW2irTYRyEgvSFPiFxmMgqt1h56xfq1WX41bjdguqhv1nym1ZuTreGTu1LWrCrMKVF",
  "key15": "6K3DquZFG7VM2LyLKw5SPr1myjLTo7sDsKbonCmcP8b9qn2uzrBCv8eMNni1KZnuEiM2DACu66hdARshGjsFjWG",
  "key16": "2MZcoUtUxWBcM93AwzRbNimwY1PpRgLS9jvpyoJkfSQeiAsubkbB9yiEAMYV78rnWJ1MrhLGKNTyWecnKpMLuKhX",
  "key17": "4prLMyK3dzeU6q1E1LgDb7s6eWsAXfpqYsJLUNNW7gUYH3MZfDLDDvFuTH6ZoJYXydx1ozHYWWCQ2S8YqDWfX6dM",
  "key18": "4RiYUQjATmtkZRp25XA6hFbL3zUrCy3z7vph6kzDBnf15eQYgERmjgnDAKXHEhiA7wKKYY38aS3Fw51kGY4DjLTX",
  "key19": "4kBQC689P1HLFdxZAsCBRhiuKSTCzUw6RNjHkGUqjgJUDxzQARcFyKbKEbyMeKvNJvMqCRpz9b7rsmDhJiXNHUpZ",
  "key20": "3fYkNP1QbJB4bLqpciS9qzzgx149TWywhDrMRK6kMAXJgFqwLTJeArKJNSkzzf8zvASC8ujFVnUuXJxBUgSNdBzB",
  "key21": "BnG9CDwEazJ5hmDJGNh1HgcDgnw67QAufggoKpzmrJwhgGTWvYKtWrHJxRyMLyaS5cdkNrB9iLWoShqFxfGogVy",
  "key22": "QeR7ETsnGybJMGfzco22RJcCX8UhHsnzLGHFHQHH85hZ4UEs5DmG1yU6bfkCqS4yJMrhVf2RMZoWMhEJgKxXJug",
  "key23": "54xyzrcG3rWGi3DeB3N5Wp94JSJc4eJ6wBAKLFza4HeK1uiW1Bf2LQwjeXSAfMj1jjD5Yx4egHsYGHbaZX7JAX8f",
  "key24": "ezxWMQcg6B6qn4pyUamAvU6kHeiWjtyReLMaitbno1iRhEpCr6SokJgALn7nrM8qrofSbT6Zg74HejD9QREqt2u",
  "key25": "4a3HdZu9Q5HM7wd4KJpBh5XwTH8ckKrhAZ6M6FBa8LXV1p2kz5dD5pVarYk8PUwVKLfsY444Y4pew7K38RNMzm6t",
  "key26": "48NYSz7fDTsi3ChgvcMbeL7V1cyuakp1PTpLKUS79HSwHZ568Q2YJHrCAMw1dpB6HL9fXF3cu3v9wQUEhMWJ1KxA"
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
