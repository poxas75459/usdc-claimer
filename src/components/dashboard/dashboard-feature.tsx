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
    "5KGqQ9hqgbDvcgfmMDNd7RQ1fRDPh9degEVWYZAEvF7Gv5Vbm2wgCQNejGcippsoYptrUjeU3Fn4Sdzy1zsCdMeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UM434LzwXV68WMPr71znYK36tno24H1i1Rra6Cpt7PkpY4xYLxRKsCDPLwjQQpg46nFrbQ7WuhCinCeReGD3TEw",
  "key1": "3MdmhuUe9ErLDn1GaV8kDVTYzYbuurDjpSQUBWDoBYmhyqF6SfJnefidk9LdpwYBaW87yd98EZn9nVAVzXfHtZRN",
  "key2": "5WX1DFUochiveVehM79ZKxseQsvjayHeoLuAvBSMtb4PTYHVMmJfPkgSoMatZTeAtU6MJhFAtYcjX9RckcG88EJz",
  "key3": "4qPWK24qvd9dz95avdikxqjD59eCv7ioJBNNL4AZKDHzwkHrFsbQcvA5otKyEffB3eTBvxjMaiMo8bxayFRDczVG",
  "key4": "2qHLiJrLcPsZGq5Y1URHfPqyaL9zQJsELmsZrWxJFsTpsM79tR1eLU9ts5fWhY3yLUWAUAz3ptXtYdEbK137WJEv",
  "key5": "3LHJZpktoBJsZny4DHNLaD4VHiFas7BbavPaccfwMSUdCQ1CeyiFYKCtrHsbcnm9SLTT1qA3nWGYQXByi5hLN6ok",
  "key6": "5weiGWfhSqoaJ3KXntv5ikkk3KdTjKZPLKkCcnSB8BsvaCsSZGf7xo8oNxB8LJhoy73b4FrNKYL2Mnj3DQCVFrdr",
  "key7": "3CeS4b2GP7D6CXd39E5P1Ld1oTQypJP6XcoNKWRr2tB5T8GpJMyeJw3U3AgpbQiiuvk8etTXTtkZVN24iBHz2NUR",
  "key8": "YjGDyUVGgf8YzKSgj15avgpqSog3Lfika5v9goFryPoEk2mc2UdEJCrHympieHyxjHTUicaXPvnoMzDzHmPUFhP",
  "key9": "4XWy3SZovzmTRUPh5BRfvzS4bV7psCZ13SJJTg115aovv7VF1RXhNNnSEPU4u9NJqLG7mdZ1iMy62XhGFMJCrq3K",
  "key10": "DNYG68CHj4UMrmDiL6GL3apScXuDqzZShrZnviJuc4s2HYuWrmtp3wF9HysT4Fj9djr8tsk4LKCNYgawCyifLfB",
  "key11": "2oYBm2wAntPYrCGEAcj4zJFoKVTzygVh5R58G8VkbGadjs3yGtGPUHV15XqZmaPk2cKox66HmVsGFzgPLVoRRUuj",
  "key12": "3Rk4Kf5RtP4z8A5hbeQpA47z8sNJoznoXKqmsZXi8MPqtmUq4fWnMfGVN5Cgp9Z77MAFFwe3xKkrBJe2ZcT9bSGv",
  "key13": "4NxadtcFgi9ja6LmjhQoedFfFZx4q7U7VdL9o5WhVTsPVcADQ2ZmD7HLt6UtxXgJcggfAC3poGDpaZVidaTc7Lyg",
  "key14": "21mR2FT2KckLqNU34HkhazKWnwpqArkvTmBPMq9BcqUfCEBSvBwpgDd2ZjrpjMAEsEjPLJhscjp95CtXSq5wVG9z",
  "key15": "KZZuCeEGg18qmNvp65X8Gqx7agXfkaRU3BkRxh5H1hYcwc5Phks2mK2NHacnTHFuofNkpxbAxaSRRDihYnGdjZ2",
  "key16": "3XYyTWtQsx2kWGrRpg9GvFbpg93YRxRDiCAwhEEZQu7FTnMUtLa2VAoMFqWG9rF1HcYNMU6niv6vc6JEdZzL4iL2",
  "key17": "4UXZYsyumjXFECuYjBX6XxvadXLKJt4t4rVKuwHfXs7L1aTT11nZx2hzJPXPq5GWH6YZ7J3NBUyce8byxETU4He3",
  "key18": "z3ZtqszJUnQADBUMFoFKW6gPVDZnUfmLAkbKAtfxttptf3PHAkcTDbLZbPoaZUYQCjeAoyV9Rp1kniB6p7vsE56",
  "key19": "3csAkXKNXHc5JyeLWk6d7xnpLnDKUEK5w15Kdbvi47GNkndupj5epJH9Yzaw3yEJ1VcKiXPBqzXqYgLA2Hcz9kkW",
  "key20": "FJkDw4kVBLWVhDgtu3rHhwTzuVyBzrPn9WJFdwwmd7BqAe2qQPz3sTw3H2M6xU6wgCRYZqEmFhJ4orzEy72j6hw",
  "key21": "5zBBzJ7cARok5gjbwz6fNm32EwusXj96ugtVZMTYjAWhrzQhECd39pkJbTviFWJLx2c2dUX2m6X1y3ueXPCUQhDR",
  "key22": "5cEYGpJNqpvfyZNet8RaEShCEagm71HHDaDx1UGvKxDyyMxXfscGRxJUwHX3SnsiZgp6eWQqkQLVMS92ZxsVdTSD",
  "key23": "2Vv9qLQgF2Q1S7HNB7u9Rw216NcdE7SPWCGQvUzKcVf4yrTZ5YoiDQw6SWNNBw5HLZ1J2eRJkA3AQ4UCavZcroR5",
  "key24": "3sNmLUNPhN4QHLwY4HFsYTm3QtBwfEWdFDBuDoicpWG3wYSUnNtxjWQY54tUWLmBNgiDUzF6Dg1ZbDpF9VGxJ6u8",
  "key25": "4G43ThN7dcpkN8f4E7ThTvbxVQ248wECz7zweDRi9jdq3KomyTQ5qJFCYeLCHmJYiSF1PRwFmg3Y3HBoPJsBzC6y",
  "key26": "5pUPJhr3PfxhRNV7rMCQsCZi2w5mx46cWupPA75f8QZA2JiopBz7DpQEToUDeoUmbs7pQiTzEVUDfvj7WRjZouAV",
  "key27": "29UTCCDvqpPtfwLMaiTnVNky8dZasmu8DU37Z7KgDprysFDX1wEuQDsMQvSABUsrdPyqv4YvcAneDENvJxN8JqGD",
  "key28": "2VB4bqkFdXy34ubC9PUT5afZCTFLEvB7YQu3ojsp2wx7eBS6QpEsoC192j8rEiSaVs7V7Ft1MEEgg9tX44SS4CqF",
  "key29": "49GXtbDpzKXG2xkN5yeVJh6Gdcfqq9zRb4UFetiSqAGA82vmSMHFDWYTAWwazUindd1xUifv6bxxSzYWc54USLUr",
  "key30": "4VP3dJsR7mLEKtbF4EkvREbAyWav6x2YDdbiUyB2GhYzxL9o91Wiwb3DhL39hM2by4oJBceD5GZPmK7pkrtEVuLg",
  "key31": "32i1Cs84wqX9mAdKVPRgSZaboKJv67wxWE3rediKB2dnHHMEEB6gqeHTphQFRfXcLsE9FnZtLJpce4AhWuU2KezL",
  "key32": "d71fjDVtf8u3ub5AiGgA7rwXMNazXjgu3ia54ew1gfExWEdQHbStSirRaRE5xoYGv5HUn88MdzqBESbNyKbafJV",
  "key33": "24CimaoFRU3qgBQbg1urdub3q9iG7dkYSi4FfXiqoQvXrb9zYDcoPRW3budPvUoodH7ayGtA5HaaPgGVADEmdfJ1",
  "key34": "48yQ46DD7asamurwVJcEn5xNM5Fd5D2NzrmudDoDoM9wRzy3NQHjHSCb4PxUWWjvNCW1EUjY51Rz7YiXoWkch5kp",
  "key35": "3dBYYKLqRw2XTrSFEHW5ENJLy6DK9dbJq9VayLFqvXp1UyJEr5KaeNcpkc1ao2E4HhrL7s4CqagUVHNbrPN67wFW",
  "key36": "33kM1ypuURsDvHv7taGwswS9muVJBuuPrYSRqMDtKWyAWQ2r5aErFVkwV7mkp1nBUsMPeRYHPyUiwiDp1oe4Qkrv",
  "key37": "5Ni4KjpNHjnnb3LyzBPJ6mguN1BHhMBVQDc6LVjtC2BNGMH6SUxiUFdJFfF21bmPDmYaLEoFHhSXmXqWQ3JD8cdU",
  "key38": "5riXcuimfz2DKGmymNKaeFdWU5xNDFduKrzuQKd6RivesQby2fdv6UUkYYkVXGczgifQQ7aSwDU4x5uXPyWE6oLA",
  "key39": "Yg2LLi48AFaHbEjyobMmEWPyJBT4767y5DxKGJ6HyCzeZcxFFCP6pmW246EaC2ifRbUpYqVtdRuEpFDKCGYC6jJ",
  "key40": "3ej4gF9J856ubRtRe1QsJQAkHxz5joRbZrcdBh5cKZbEcb8xfr9qBsAbwj6rkxZ5ydrBtHLL5268B9mS6xwMJFp1"
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
