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
    "5moSgCFFHRHdpEXxdkLcvxJLQSnkPy5wSnaovtKTeuSMbi3R79qLYtYep5GBDjBuqbW7VoWu3d7ZShp6A1eWQJjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25nqVPSfTzfSU4RsrsK96zznRSW4DQXCuJCJR5mH69PYwgzseyCJHnXe12iYbbGQQaGwg6QJtRSBkZPdS3uscTDi",
  "key1": "2FzSbSi1PrfWUq7W6DxBxqgMqkvVMZrKhjcJGANLXkSmc5qvatfH2P1KbeXkZRUsfcetb2e8imF7XT5xfcJEGqAH",
  "key2": "31haDA8bJwAFisyhpCPvAgLrQPNTF3m4kdYJY8YeCwhCeKK3VXratW26cqRX9hUxeXD2uGjw9wzuCL1ccxZgxtJV",
  "key3": "5HwR7BaXxuB6LotyCEvNuhyQDw5cU4UPi8j2U5iFWG7KJSUw9KfThod7STSqwmPJU6uHD28cHG6aVopyTqDkSXqE",
  "key4": "2t3N621jz95pVjiLrynjWBujbaegCM2mXcmVTei7AGF7cZixzcsGJwP5q3oaRjqvSqjN1spWHS5f2LgaXEcevnMx",
  "key5": "fMVDYn7NVo6eAdvTeixtowHPYxTvsrVKLqSfhXoL5J3xDNMLLH8rbK9hxfaqkmLwK8awe5s7kLGsB2BuphSwJMB",
  "key6": "3Z86uKXHABWQWwEvM7AiVGk9TSKV5bXJsgCsrthGoR5hpYWiXMvnSVsYR31wTPPk2Byzh1T3a4U3mbcsujzbor37",
  "key7": "3fujR3mibxjfFP63kgeBgoqfRa7mVEQA4m6rNaFsz15b7DGWYnF8hd5Ucuq1DRBEivwyQnVSgnsx3fXRJ8jvjtYZ",
  "key8": "5fVKdCgAM87xnn6Pj7nVGGBKb8CyaPV6YBToy5RahyNVeUhpiPAPuPKkQpmTL66Wmd9ZRfYckftBxp8HQCht9YD4",
  "key9": "3pFDPsoAeywJJCD8W4bTcVPh8ZeFmc32d5da5XdjmQMgtBVsoE3y3qRYV8AaZAjn4wo6FKZEZXCMNgSzYE2Kpe7S",
  "key10": "5b2b5o78LQCgAcuKVeAQLksqH9Ur5aPtL1kiAk3UVnMLcgdZwJL46nSemGAMCR7uHTCzbF4x4yoZ2SiPNUcbTrM8",
  "key11": "39xA3vCF6q1Y8c7BezrGLvSbYzKMsxygJyEYvf8oZvd8PDJxcSDf9H3wFbVFdY8HZzEcX5nbqYnKSBE2yHMskfCJ",
  "key12": "3XTw8GVPZevN8haTAAdMWdPSfeMbhUVcpqTGNw7CzeP9oifhPtFQa7KZNbDa2M5WHmChevDr1MBqby8X2nAzCQtW",
  "key13": "3A3orqpKiafUhxWweXXAtmkUWxYM1SVaeLP2CCa73uC94r5NV9yPzbgPAmvV4aWX6WsrryDZ3udAH5vrjppuoE1z",
  "key14": "2Hi6r95LEEKmKH9gW4NDDDSh2TWS72zRZY1k5cUGvGAhofCXEyhstznDqS3LaQfH8ExFNcMNGj6Aquy2PqbL2x8m",
  "key15": "2vVwAU8eiPp2ciubHiL3WSqUpe3W6698dfsjvjSHiant8Nv3Y4ftdNHi23qBGCdhKdt4EFFdAhc5Dn4B7sc7MzQW",
  "key16": "4eZEneQTcZr1VsqsEfBViXrBVfsuPaTd8RiCAiWz6f4ZUYdgWURTmpATNetkZHn81MpwQrseSfvRCigZv4jfSW9P",
  "key17": "3fJPf6fWs9nVQRy2vTi7XoKJ7247zK2ymw23wTThhETyw34iCLgk1uzR1cJhxELcFRruKVs7ryQSd6UsULiQNa34",
  "key18": "4by7ALAsgJw6kLVTrXxda9fApm9GoRzrafH9RQeVqurrdZ8skG8EaPvSXNxQE1UgK9UjRaXqkAttKpktSmhiLSDC",
  "key19": "5dALvprPTVBzgzU72ov8piZoVLBZJ7Tsx8LZfi2mTN1GbR25BupsyTQjgu3umgXoahcLNL4bLNM2YWcoF3Vp6P9R",
  "key20": "4RpdqQmuwa5rASXeqdpQiQuxJgUGPC1N49u7bRUcLbbcXrzNABDNajFQEijFPrZ3ap2PGszLotj64XSxBAzCfTWY",
  "key21": "3Kbn1gSaHnBpSWkjKD4j15eEdf2xsJ3yjwRP9WzbhaC8DyLk4QjQVSbBbYr4rbgq5YbL9Ada1GpvXNxqDxHLRPbU",
  "key22": "xJttuZD46NevaYNYybUeYmaoEF8oAFr1CZGFGkQTmEtmbPG6k7Nf8hi8rFXvVJCJzP8kx83MkeEmg68wmS6v6Wt",
  "key23": "3Yuaf9R6k978DRFFafGxffExAZ2oxzbgXbmipbrj8s5Ga4YnjSEs1V1rF39jb25dRDzWd8jde71mTg9qfwTSjoDR",
  "key24": "ekY1DFDaFpb5jhEtNQLL8cw6xtPBHHJ2uCwbMYAzpwKX3L3YYuJrTZf2QSbvCeL7dRZeoixokQPMiTWrWAfhDFt",
  "key25": "5cMCzSHUUqZRHb5AaNxVnnN37k231nd77oFNUuTVbE7Aqp6ZXweuKwcVcg4h4UZyEKkr9e2BxXivMPkp1h2UviMY",
  "key26": "4ehRYxQBDy9E7A7eL5kXbu8gS2xDPqKg5oiPV3gioy33dYceXHV4AnPPy2P81MFmGhQWj23eoSvvtxqihkLmvy34",
  "key27": "58bR7NhteNEuzBcVRQyt6qtBJTYa1Qmo3ey6RnYJ6s91xbJWrEeqUXNi9FWPm5wqpkBDak1Bob4X4GkUCXzMu6dw",
  "key28": "fix7GGm1FveYBE7q94kRkYku3TqHTiBRE1Bn2xd47P1amhuq3Rruuef9gTBnUbvYkKqwJ1nHDfVt8aVuQB7b1L5",
  "key29": "5FCjbhjViffSZR1AqsNidfKmkUJH3rNJ14Srk6xYjFwzt9b27pCS3wcVSs6YL1oG9BuakhJeGUnYk49rQYdHzFND",
  "key30": "3B7Arq2uNFioadYbRjPxua6k17xFjCzSVELh3dZekWSwaeMJLc9hQwVXNmib8MNbEs9AXZG3SHJtK68WexqJuA5q",
  "key31": "2NuescAhdjdaFpDc2v4AkErWFpsvLUrCLUvEwu4hDuLZ3j4wiia5FWwyzQsXLPbbDZn3q9bDvUp3DiBQsPq6BMYr",
  "key32": "58q5sgNaa6kt9fi6bWnm4fuPBTu3LG9qEVhNgVwKmRPWSS9u59rAFstBv8QgMZcY5YWCpV8D123TAAo6au2KVCEX",
  "key33": "3KRH2tAsH3BbXXNAQhVSvNcBt8VTs1sZ6vLiSqgfVEcZSHajRCcWLrxefZ3xaEiteDr9UGuwk1ouN6J6d4SsR2Xs",
  "key34": "3piXTuDKjBWE77KbFndNFskXNwUJYRYQ3BLZY2ksp1DwNey6unKV8mbhi8w3jmu6hDnJE3GY8hze46kb7AUSF9j2",
  "key35": "5uN6HnEJoWuWXu2fKqN7DRyusPGYCvb2bLnPUvcuZdqBSYdw4xp1sbjLepCDAHT7KZtwxJM49bpPFgPATqXkuRFF",
  "key36": "oXwmpqu2p4XF26jHzes9PaowMYiGKW7iw71xnzxdGngaDZB79qbAkRNVaouuy1ZxKKoWg6QccD7CqdDPvWMekjz",
  "key37": "4QcKxaz1JhwPj4fqMKUtiwxbbVBtWRCpoQ2yYrXVMuT845MmrabrQsZbgfCz4igfSo5MpDyhnLJtRKJ7dmYozNMZ",
  "key38": "4h3xbXt6H4gSvWMCc92Ch8sdKH7qQsFkTG57ZicJN2uBmTDq6Dkm3yE4GR4EUi6NSCNjQDNoZomvYYF8YAC6hBQz",
  "key39": "yQyVPEQbpxhU7nYtF99a2diF77Y52xVit9oHEw5gJA5D6mUSK75DZs1Agvvv4sXN21CMbowXxaexEW9yS8FdmY5",
  "key40": "3a461brF5mAW98KAYbeES4AFZvLiNTdRjMyNbtBSzrNPFh5VARtddeAseLtUTurqzHKii6AsjgcUNx4KrRiSQAVf",
  "key41": "43K1ekzznvV7KcpurofMBrwZf4UFDEJsmFYVP9dePCsJ1ZhyqkDHFs5QjZZYoKkFuFYo6mXuZGeLz9oSkuidHGHH",
  "key42": "3sZL1d81tfrRKn4TCXwGesJsxk8wRnKe4WSktuG2R1Q7prUZMbzVAYxFNC9ucA6MVDGBy4EKuHtUMyK7MdiJydAk",
  "key43": "5yoWnvznZijgEVxxsRozELwCHoiKvDy7qpJdQ8J5ttn5NxjLhtLDWXrWRGeYehabzguersoRtLr1qie3NASSPMHA",
  "key44": "ZEBZVo8Z3hRWgvYFFdCKwzhYJsJqkFutm2C4fFoZzYBryumGrsNbVdgHZMwXbuYemWzYE5j4N4SwzJHzGuc9Cq9",
  "key45": "2vpusjEEE5befJAgiV7r7T7oi79bTcciYbd3P83U78URnJVoa3LZ7x8eqnAZDGfVMzpB7qsxpNX3u2p4HUH7KcC2"
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
