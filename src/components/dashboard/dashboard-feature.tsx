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
    "3S2ZmY5U7aaN9iAQmFHCosZBKUM6YKY5vTDzsbhyHQ7CT4UZqBa8JcJFyXJHEqtEERT5NkHp4wNCTYWGX2XLUnDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "468Bgi2YEuv8hWJkZnkSRoRb2P4PxmoouMwxpdapB8CW6ZcY8WaUYJdMzdVsVhj5xcvoiSBXZACPVxUG3fhWCfEM",
  "key1": "35mCsfbMDkLZtTuQodRWWM6fYZ4ezX1ieEBuhV7hugXkNF21Ege6mTCcUorx5PhGyatxKX7FPYeoAG35QVsDZg2u",
  "key2": "3JFoW67zUb6swRuSMcBpRvq4dkTz45znY6BwnWYj3JRigzMLWHtTKDTEbPiSRnMe5ie72BU5yPuCQJkH62DdTiQf",
  "key3": "3b82LKgbbgwg15dAaqbBjqdmUNrHZFWMMfVoPbbxYRwusuJbx8vr2ucFNRxM3aiftpwSfGjnqri3MCfEbKDbcxd5",
  "key4": "3v2v9vdKGjQxTd5ENF1RxX7AiJVT3uFhwq152M3rrRCGMAHQzCQ6hk43tuavWYjhB4E5grALKSKs9t9QGyMK7m15",
  "key5": "4PK3BNSyGNz6oMqkmXkEfr4XH8i1EqWMrTBMxNPKzMCnG7obxHNNFQ9Xxg9Sx4avnyB8f25K4PtS3SijzqNbSapb",
  "key6": "3tSU96GoXAhkKjL6GzUeetgQhnVaKPjVJvVBfMtxb6JUAAhHavqCJJeHob9zMYQWkhRKkjqtLvKHHYzTMtPB7tg5",
  "key7": "5unox8ikRJ3SaLSa1BaS7nCdmSedS8ffUvJwhQHxnQuRrkniuLoMeAUtDGSm1hSJhRZgxp43rH2bQju3x6tud47j",
  "key8": "s5k3nFXvKM4nqapF2PqpBgUJL1Rmv7Xxha2o4hggnxwxQeYKw47Fm2QTwAVXrPyjYJQj4cdcW369StpdvWz7oHL",
  "key9": "47dwf4GwKQNexk5FB9BbZuyWJ2b8iWgcR23VkreJ2qyudmbkZmmG6Wz2jgLpPZ7sWMcEKBQmYnF8eFLq9wXCCQ2t",
  "key10": "2ieq4ZVnxuimKnscFoPHwewrew885vXZZKJ9ap7a85JAmKrWakuqF7qhrt7YzqwjRZYUYD354wP4EK7VhvWTJgYY",
  "key11": "ELtmFdeVC4aJtnY9EBRYFLrNn3XUr9d9potGeS8tURYGFhn1nECaLeCG6qafvrCvBaGAs5np8W9rZooKJ9Ate8e",
  "key12": "2Syj9qkxBwCLnqy6D4DMGk3yJ7yr3hJSVGgGcdfcDYvXykJrkTt9ruGDccFcPwZT1ZLUYih9QaiV8Z49pcVmBEGP",
  "key13": "54X2j4A3uYtcDVXsV87r9e5ZpPGQfTFhDCMSJTGEuNLxqwoK2Jyuo7ThYwMJAF3pvvGY6XxSR2HSDnt48Km8swzC",
  "key14": "4Z2x5x1NpoAghnXhsL1sDvtMdo6g13FvxvnVEbYQ592Pt1YjkpC9z2AbqGroo9im6ucERrjNrRTJWGjp86YyZ16L",
  "key15": "gWTab1sT8p7HuF11kakRg1upBR5iuZ3t2NZBX6mfpGkLtd3uWbhPgGEMT6c9cV5CcVo1rouBTVYCkFb3Ur4cLG5",
  "key16": "5UaEiZd9EJhraSuxe3PdU6BempK5CgHwXxcXmdaBTBcf3EdQtwWAr7vEai5HAhhi3en7GersV2a579n6GTsyP86Y",
  "key17": "4uqcAi77buovoY9UUbbYPVrTpdsWqBrnWfhw8KMNBgEGcEHoqwnnWaVNpeBxmtpthyQuzAYUrZz9aWwNJd95DNqS",
  "key18": "GakLmwuT1V1NR4PANV76HBJRpjFBQyguY6Uhw1jJZJNH4Hahi7YtHVLHMHLnDTBnohRF33wGvdyG86efjxF6x3y",
  "key19": "4e3Z2JBxAixa6qY2tjv85mVDbsgRUZZ2971vCB2qYGEBMbkvfDK5AQJHN575wx35eghhvZy4SS42NwZsYcEA8KZy",
  "key20": "2J5HXC364XPmRotNhvKM4Spvr34x83sDaR23SeC9CLcgmocfWxm9om1sqxExouFPeYkA8mx1HUxhk7w5dF9X6XB4",
  "key21": "5FowzMe5Y4mBfChHgPay3GpdYZfrxCBgvYSxX5Q5MQxk4Jj4GJYSWDKUzZvNvJb5Tk7CUvoHWMDKxnbjjBmUdqPJ",
  "key22": "31sAv8yuaMZjJqxZkGM5ndGnfz8pKfrJpkqbMjaSHDoTXULd2t1TNJEX4iK8YxkUNVsZvC28216qLehU4btt5iGA",
  "key23": "BRsTdYRoVtBEkXiTsz28Be4tiCe3JvmnGER1qAucJoovew53mnyGk5Axh6x1kDNvh1wqeoSMU3ecjSpETpHRZyC",
  "key24": "3Qc1xYFYYE3RAb557QjedFhWhvjuHahGjHctfchzz2AdWudBTQcNNUaG15u56jTWe58RzuXGpPiaFz9tJyViUvB2",
  "key25": "2TjrXGPFwwJM5S7n3XKnoEjWb4kDbzMcYZVpfpVgQJSy5q6Vgn3hscgBJJUh7MRztDKB7HiTaa65FHngyp8XBBk9",
  "key26": "4x8sr1oR4eZeXoLPJhUN74JKSK9MFtEa8PNvj11cf7QpqeZuEGL3ihQw3Nf83B6x4TEoBCpvJK8UwnWaLbawbYfp",
  "key27": "444vAuviqMH2878BMjGpFmBsRzBodkoRWPaD9VRzPfLNtt2j9xmiL16uZYUoZiysFXerJLVgNR6k1SL7Qqm8jWDN",
  "key28": "2XVNYqMq31bHFRYU9rQvxwMgnZNkwEMUEmopk9GhwVCkoM49yg8z6k9FTo6yQkkXLaKiZEj7aAyJ3GHVALrsvMCN",
  "key29": "2dguRq6JNge9LH1iy1C6CfDygpjkyzj89FC1RYFsguHcxcFoQ85Y3Sjc874bRyk1RKhUbDRUutusZyo3aYhnRxuW",
  "key30": "4PViGoaX2BgBVE3bs1XJzptdHBFehVXguVZQs1tcUidc8rdvJJ9LyT2L3Vma39Kwbf1NriyPuEPCjBe7bAyeoMnv",
  "key31": "VMH1pfT7yNyKzfYXUvojW8FrdwjDGeHTQvWtVXRxmRTZX3eP7RPLfUirSCWE48KT8tCDRZChdoFZhnezf531aEb",
  "key32": "iwhNCZYfHYVoFe5yiwMhW6xdDafEyizc7y5Di5c3TLJ9tzybLXbaUz1wRsuwigjVKp3wX84xFbgA7QzgectwG5a",
  "key33": "cz5PbEav5uod461QqMFqUS7aJkZBxVTgsYgmhPXbt46KCtggiV2yxkwM92Met1mbZwhN75eG1hc3fYeQms8oXBS",
  "key34": "2WP4BbNFGauCszRKTNQFfLszodBNyyhG1aQiCgsyZ6jgZB2CHvEY96MQ8fSs3bYtV6xC1NGELuevoPkC2fiZHv5U",
  "key35": "HGTCkSqjE79fRcLkwGcbGxzomGXdqp8NCd1FCMonm5pekZ2BETYSDMhigGNM2SHmuptndmhpq98bFdcb7f1j2uF",
  "key36": "3SPMYxEsHr6dp13wbgoa2K4pzN1pHWgwcDFF2RmPEp1vLuRK3zA2QkD9knGa3irDfJHVruGPQTctNDhkyRFtLgBC",
  "key37": "HWR5j4m3cEg5chQufE8TXTeHiDzzsVNDEi1V9ZF4TBzXLjWFstfmmExHivaM5BSYRcbxg9bidxaJ7V1AhHDpNX1",
  "key38": "1gmg8U3yzipEZs2ZNLPDQLq1S3oqbh32nxwfQfwb8SKmt4XKjTexaYTo33oVohAoUpZLZVPeZrDh8fPwwEXsDRs",
  "key39": "2tSH2HCKhTepRWkpBGFZ1RjoKRCX5HxLjZ4yRia9uXRwVZXKThqnfrQeV7zEFmwToRL4EsFb8njXyoD1PL7Fb7Mi",
  "key40": "3LQvGZtSexzcfef8SHbsMfi87AHgKQw4qv2SpHb9tGH9xKe8SydzVCwxiu9mJ4RfD2NkmEtf6gMhg23weiyvsNLh",
  "key41": "2Htx4AafMz4jJa47sMdXQ99aEjt4xjVcVqtP2q9Z6QdXRPehPNvg1aFn8iDjS8xNtZN6mWYdgTRGTkHPY8YFk3Rg",
  "key42": "X3v3AWYsfT6L9RuqBrEVKThrAcKsdcMJQ12UYGvHDADCXPruNYr8FBR6Vx9BFKQjhrg17ciUokeFGfkXpmpYW5R",
  "key43": "21Mk3o4v9fP31VRkoWfzPwANNKJfdULzfpwwy1zcX2Dth2LotpHxEZKqMHtKnpwL7676vqugNX7cFzu1NW9NnCt9",
  "key44": "4kETDf21L6JTPKfF81g5kXgMk3tbt6L5JazZmzDHy83HJgCEUcGQLkshzuKkQcEDQpoAZvbHxVXbJw2dUYbexbBY",
  "key45": "Jvx99utQnpsU5is3NPKPXpLSFcW91wG2rK8yktcBdxw9JCuBkay1tXLHCjdb6QscXSGz4JCG1Py9gogdk8ZFBmq",
  "key46": "34kuUTybdXYZpKgxdXBruJYmrpnySLoir8LseeeEK4LJCFtLbn6ShThqTtFZrV7L17LKUwzJEPPWVbRF5erWCAuP"
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
