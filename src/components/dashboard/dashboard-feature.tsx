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
    "BuyHq43FrME8cPRiwbZgwhMiSh1eyNnBiBEccezaieYSgQGuTgKTv62GZVo24vXhxepezPWWAKRdxcJUoGoFWbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24NHWkDeu5bLAFwzqFo8i4JWdNhmUf4EpbZNqrLbW8USMHWqL6xCmnjiBe3js2o5xobhFZzk6Rf91tXk1BqRqPY2",
  "key1": "oTjQByPUWJ3WvQHpmEfgnmR2qo9s5dVvCeLsK2XnfQvX9n3uKs98p2yb1TSWYiRZFRi3ZjW8XdWP1W5XGuFDb63",
  "key2": "NGHSEMzMsuhUKXf87azm57MNjF7b34bwVotF9EkkoQLAjiKp31Nd8vqpC1RfEBf8niJFxJSzAMkcjKzXYVdj93W",
  "key3": "3eyNYfyykbRnxUpQJX6e82FdJZmyk2eYWCVdXPvCTcDeUdKFGQXNJmtqpCm2CxqpHEJwuDskMmGtdVrbsbc8retb",
  "key4": "45suUEykGCt2qut4Ar3NxakQZDNcrYt1u5zPeaX8erSMR13Gd8oyNEH41Hh6gsybsgifHAw2s7rznwUZEvdpcX4C",
  "key5": "KXojQgiLxt6EoNzBC4FoxVq19geeHgtW2Wo1BpAb1McvcisKHAPb68KGNZRPxLeSqp3WGZHL7cZ2nRDUXJp8UjQ",
  "key6": "64bXxRyE1fN9dQ9Hw7UYcSSXLxE2tJbntLNB6w3mauULuYRQEGVwCvL5G7ifQG3NxWxWJjMJStr4TR9Mrs8VPLC2",
  "key7": "5R2sTTgPDT6a53ZwCa4DWNBwtkRpTErKNRecXdJTxNiE6oq89diNxbH7hZXta4KfimggqsUgzebdrCRwhH4Whu5E",
  "key8": "2hxJYEhHk7Pm5R9CBjnbKteUU7HyUvnDcuqvjfT7iUJz8iJKV2M7tHRwDtCnzcbJdHUP4ezGVtTCVgrvgPehiGCg",
  "key9": "67FED1DKqk9wFTXh3wNFhc3SQiTLHQnSKgvVnhiKQigYbFhB7DeQbr688zZ16Kcz9CBFMvnYovZL4NUuVcM2RL3Q",
  "key10": "ebCyeEzGSuMJDt2FN8KNmQCMfQJeBFby48htBadwU6zveVF1ASgzB9VRRwzP4EdioN1dfQpWsPSBJZybLcHXr9N",
  "key11": "dmF4CCYVRVoHnj1VNpLBqZUGxf24ZSNUp3pKYZnQ8CQzwxDL3b2EihatpTeSf2yiYkLjXQeWm64qqP3yPL9QHQD",
  "key12": "5cfYcswGTbSEGLf2BgxtM6hvMCvzhEVZbYdhtEqi5oRHAoyKhGa9nAeN8R7zr65ioP98nAD2uAML4EW5nSe8yoAV",
  "key13": "5owPtLWBQrKbhFr3Py2GspW78cfZ3F7mskEj1GgactYq2c3d8sXvgRRUqz6AUv36kENAHeYreRHB9BNfiuC9JNe7",
  "key14": "5zN3v5ecCAUPxNm1NAZZrnaSd1iuuPeeTHpHxNksLocJb4y6wNjygittCYZw9gg983ae9mqxpcjDxTpegG7H6GUW",
  "key15": "nXtt2ULTNaw7t76iLKvsjQ99nf3U5KiERr5k1J8qZjuNybjRMBBrueYKwzs61rQo1Vz7KfGCzcuCA8k7UT9fSRs",
  "key16": "5VHkMsXcBEQYM8vdk9w7ZpiXPBKbH4LxrB5pgdheUKgR4yoAwdx9vLxzXJtHT4YfoCscnKk3VNudUPtS4i6Khzw4",
  "key17": "5h5SAyV1G4LyiDB75bsezynEdE5fwRYdhHSd8sRavrTBiHcTt9rrmzbh8bEwfYfpCKf4W1jJd7PRimhgQNBSQAt3",
  "key18": "428Vm9XnzMaBj7zSPBCn27NeUZjJdESsCBntkYbdsRES36qPqRH8GoKb6DLiYCcFFW5UV7Vvytw4Wnm7Y3Y2HAyX",
  "key19": "5dQSqbTcpskBjTMmzhanKFtqjpsU69H2D2nBVkLHiuzwmCXV4jD44tr5fEDHCr74pLC5CVRV1gDAwjGX5qMz798Y",
  "key20": "1U4uNyrFPb5SjDWTSRH49JBRoKjQ7wwhLMeruZTGQZ9t9VECE4Nox4BFwNoj3mpbJ3UKWxx5bGbZT88A5HPGjmz",
  "key21": "4wUHqrojihMG1qQheXTAXJZtJJeh6MZibK88XoxTt2rDkfCFe65NEvzNxEQamb2uZ886sVQzY9MnTFeEe8UwU4gY",
  "key22": "2uCSy27j85cZKv9HzMWRqyhMU9xVbUxQCv6opxKhh3rKYCNTr1ssTxagp8bp9dEPMTaKv5DEw4pKtYoevDzb5ySs",
  "key23": "47w182nqg7CkxTKvHzAa9vv35fYNy3d8D7w5KoKwVsgytCxHwE7L23fA1xoJ2Ye5NRA5JJk4ENZkJuHLG4zwLA48",
  "key24": "4Rmp1LiypKauTX8x9RXRUrgUp6JWZoeCdanMnyMiSKwHER11xqKZBUMffPU4j2Mxf1Cjt49qgCE8ESy7eGF1UXDN",
  "key25": "6LesMRV1rUK1L7n5s1AmkiChFhRhd4U9Kd7ajtRXmYSVAfutcxmGQRagwBqFkynFrv6DQ1x23Gjjeepuj75jx7r",
  "key26": "4CtCye7nRft2ERU8Bfr6dWBdgGvhNfAqbKkpDPLg2k2vZX7TEwry565ToPuHnScLt2UvnzF1QMj1BEvjoAGmXC4m"
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
