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
    "2ZZPxjhKdy3jMp2gXtrCZ6pBq1qhSwwVoSzDQErXsaLWzBXVwM8qzA7WC82KwG3LGmXGBAgd78YMDc1Q2DYQPhqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aEjNqC128BF5fV8AoYJGUwwucap7bvJS1qoYLPA1n3m5U1qc377GAtkNWKYfLhET7LWhnkc79v6qrkWzhngmJyn",
  "key1": "4F6BJergFUMRjUw3qBUAqAo2TRynNp8v7VXq87gVpT7BqFHizoWNWXXDqfet4Dea8cmDx6gd1PnpXMKs4W6VHUwu",
  "key2": "UT9PdwF4JbWz2vgpNNX8oAozS4v2u6KnBwH54RKSboYeSyaSzNW9YKFBzvFEip8QhnqGpQzTYAByATx4MpKPCfL",
  "key3": "4s1aixZeooJAcJCPC6wXnkC9rioz6ebauY2seTUjAF1m8VnBp9eU3g5aXsrF6nBjbUC8atPPymcRSiEXBXYTehrm",
  "key4": "3Ey76dKxQGmcKUtJvPt8yuhrz6qQAEkSowTZGs4WaJhbzPCwVMLyfyoFCD2FYpsUXmyuiSeiw278JJXmxFrBpVF2",
  "key5": "52nE8AacuaLhRjGuFTq1bn4n8my7A9GBRhM4g3aC1QABG7SpYTRonD7FLN7BBCSLWSryaDAZAdsFDPq65Vu9xwtJ",
  "key6": "5wmVKFyahLb3ivTcoX6e8rPUawdsPF8sYf5LpfJxuUqesyMyr7rCuQs1Ezh5etwf2RitFWtDkoo2BCXMMFznmmfy",
  "key7": "4FgMeXYUKNQMSAtJL6WZ2nNRCE6p3PwfMZZUr76NYhJT7FXa8s5iwcaovinvVNkXtyEJsNSnchTy6MLPQ9KDUrAy",
  "key8": "4NuSiE2viZeAYbt7gtdKqCJyULHTJu5M9ZTMHh8fvmZpUYnmT7Jm2UcQkHtiUEF7dMefiRz8ZypEmebv5ecwRHCT",
  "key9": "5ohWpaBNupjCwyEQfM2diPcpfvFW4vXBW1DQWk9ZPaVW4xxzbqeAnm9uggjEndX4THUqkYoisKCZwRCPJXHgXQoB",
  "key10": "3D6eksTeuPbL6yXkkAPhsrXm9mbvrhdLUQkHs5p5tk2kL4MeNbejUitBVLJySbdCzodNnbzn9awYFdAevSUHNCPH",
  "key11": "3jd2jQZ8REWY9NhZGvB96tV1c9n8WNjaHe1Nw9AuYLqybk5YLR5BjGw3owNt7wBy7EA3f99cRxQ3b5ACmchQPFTL",
  "key12": "RpLFFTSpy4VPE3k19RET8emgc2bLKkp1Kr28UoEYkFjaDmJ9dc1DmAa8ZPVQ1jAy3sJmKJJiMrEBdyNvKAARNmH",
  "key13": "5VdCS7kwBTEVNDYgX7mMVLntEZuFt1VzS48k89zErfSmJvUD9kDfnFihwhr1N1zDrfnyx2wuxKk2E9rr9HJcaKby",
  "key14": "3GcmEiizU2g577t9nrx9QgP44kgGUupJRVYVwBA91JuYYTTF1ZpZP19i9xP1JUcJR6xGvs7uwmefUY7h1hWtxhFa",
  "key15": "4fGJiT2QuzPTQmbuhqXzpPi1gXvZP69sju3HM86QCNfiiTVxbKLvDtjrxXLLjDEUuSQLC57bBYSAh775tp6Tj4rL",
  "key16": "2trwxF9fCXxeAhoAuz7AXmPiik8nH3ZgBWGA26FKtnupY2NGhbUrUUMkK8Nq49FecHgqRmAXaCDJykurM7HwSFoW",
  "key17": "5Jpk79nxbR3H6kMi9hTSQkNdhdAt9HcAVxSiLL1FpYpsPG8UF18JN8JxFyWJHZUVEp9oa2X6T6PMcjqqe4QsP4Vt",
  "key18": "2qyQJnP3pTuM58SQioGHuRTb9XHYZ7N9UzkBqz1W8eMZVY5UGREjLQ93sHD9d64QFEoTEZKrpRKfgucLh7b9gQVX",
  "key19": "2DeRcgMTMUCUj4PEwomz3XQErfxRsnYLxGtRoRirBRKEgNgFpYJfgeN7DXUVxRPBfmgNU7yxM1qMb8ucKAxW5WyQ",
  "key20": "4m62xCry5C4M14erTfRq1FuH1GNyXpZYfggFdrB9jYZCvNQSA2J7Ba5qDUFGg3pHQLJDanhz3JFj81PkmHv9tGbR",
  "key21": "4tEJ3zsmokQxXZrmaWDjZpxSwrEjiCzjU77zBHjaA7T11k2bhhVcQDWZTbbtMoU1QgjGH225THZZUUqT9BBWqrkp",
  "key22": "4cZLLoFXf1mGTNbU3dt9y4fG3vnXCkVebXJF7k6gN95FWT4DRD5QHAHNNdXP61AxNQkawFzBsyqRNpaaYe5fyMdc",
  "key23": "45W6nQ2275u84utpwQVs3FcCJgnLtpEmfL2ZRKEniCX1JR3WkcSLUkTEqeNEai1PkUAWKiqQyo9mPC3KyAcPLXCY",
  "key24": "2EJi7ev4CfXnecQwSsA647vXnghVTbMbViHQ8sRimbyBCE4zAXn13t7s5Wq567siSqBwrd2uSS3614Se8okcCYcW",
  "key25": "2VyQFaDRUAEyi2JCZ1qrRQA3rD5AofqpvyKhKPNiZpLrFbABdom6e6iaWehi1iNXRfX16yuKfybjJTdQ1YiGh8a",
  "key26": "5GAU8KVdEsYjRk3rNquJnfiozL8V1Z2888R5GHjQoL1g6BvhcKhumMmSf3P9Hzkyo5y5pTirtpi4pWNSsyS73cad",
  "key27": "5ha9PkpkKaTNRmDuW5AzTTCW6GxyPrdcGxYBxp2zGL8crq5Bj6ZJaLAjk94vrzrhdR59JqmZ72P9CPykYmaRem2a",
  "key28": "3iRG2vfm5M8Aq1q8qv2rJk7iK8hbqTkMgcKSM5Nbc6jpC3kWuLSx3y7YgTrNxGHkQvTNYdYHqcLjPA7SRCFMfeVn",
  "key29": "5mfEUcUdeubkWiwcY1L6AmWtC9JtnW28EJ6rEu26dx75MU8QFUoBxrZgfwRMZhjxXd3F9nwyVEjn6L3MfnF7aLcw",
  "key30": "VmSk2kMGKy2pgsGmhSPfMi8oxiCr2sAnwW5cpAu1ctd1DP1FuRX63WT3jXwPzwhZAX3FRNYJfugGvvqaauYaPmj",
  "key31": "4xmpcsznorix5TEn51MQqo1YmesRDWBb3sPuEpvjW46Vy1ZjgANCVMS168V3PSTAJveC1m2BXtKchQUoDr6QmEyS",
  "key32": "5k52rwqvFJeXLBHxbXsbca3RCVDwShkruwvwoKJxbba8C79cdYEhLPdSLAnfji3PkZrk5inFTxh6iia5ptXFbTg2",
  "key33": "4TamTEh9YtPYdex2bymqj3MAN18tubY7c6Cc9cKk7tCRQiS9hnhD33Pe2NiWhU6avLCS7Gg4DdgbLxt5vFJZpfds",
  "key34": "2QjS8whaJ9xyKTFQbgoz9hZqEjGxFpVJpAnQQyPNRsVKurQD8HL9AJzNY5e6oByTK7TySFjaEChCZZZYJzw4porX",
  "key35": "5HfZ4oW96XTC1rdwa6iYK1hGEUF1b4y4JKEAqyMZx71FqAxC8AQvoisePENG4kEKSZNFhuk99YBCyuhMnLYqUGVQ",
  "key36": "GGipGeC7quEJb6U9oPMTcLvpyv5cr7xmQPvAu6kmbDuoJ7epjgq68yw8TYdQydPauY7gzgXf15xq7b5y4ReMMn7",
  "key37": "VCEKADNwLHALAvgP4cZsf7MakG2WDF9iT8KZWBoi3uoM3nJdeH73um1S4cBe9Pv95GNjczX7uL44Czs4idDdDVh",
  "key38": "5UwGf2x8x8utpBRota8SPVsvMVeUy5yAFPvz4MZGSLFFafkenyFWGKoMpdo3e6nsckDa11u6yrZGJMsi2tkXG6Ee",
  "key39": "4uP6fCGR1ZnaWqdyCQrZ84FSqamVrJU61D3KbyDt1xdprYFkiu3ZqKbDQhz1jrHZwdpHGy3TftMuPdY3Hze7hPZ",
  "key40": "w4ZoPxdDCbDeaEc1ek3ain9Law5T6mY7KArJqbDRL1d4RZ4aqo26ZAMbpv1MbQfJJyfjVp6h3DfTL8uQRus2yZp",
  "key41": "4jCrH7sy7XRUnr29UVMsVS7u3yAhPJLzp3Q9YBKW5JDY6vhyfFuHHnRzbEQBv44renEBVmW2HKPf6NimpJd2cT6",
  "key42": "35vaJ8DShLRchatQgP9ySRWVP9NVGzPPw7oc96ob6TWwPxd7EVdY1NE3idmh6WA5Ev44a5CJPVjqMiULtXRieBC7",
  "key43": "3EhDAcU26VYtA7vgjRfQPjKhumRYAWWvou6rWc5sGLF27gMMWkNJqUunY3qDR3K5rdeLPWLAeZqyoB1Mv3GMAMBJ",
  "key44": "4rY4x92HjnE23c6jN9NzKK9rfNw5MteWw1zSn6jQE48Pi6VyeuqVtdtoQ5GhG8dE8jTK8G8Z6QV3XYpDepUWH7sY",
  "key45": "21uvQ2WuCETC6SMNqxdLAA3wtmH5usMp6CkNFgowhG7xdHtnTEfYd4T8qvS2g3Q3AWvJ9c2X9j5UbfK5LFDBZstP",
  "key46": "4W9sUPrXs7h5EaMjpLaCsX8xnQ8Rhr91PW6LQ9aktUV9JMdC2txgcMAaJVxrwHxztTrJzhXux8UBrgBKp14UcxwN"
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
