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
    "594yqT7RMV2qmhM748y7jc386VPVnwDmLLi2fFfGdWmZaQFdPBjHRiVqb87fyBNVFRnMZFm8eKCTg1VkYe1deHfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jL7cFtdcWMqRn32vKV3f74x5Fx5jJhyp5MBgGUFHtZ31owAtUTp8V23NnsrLMFSj47NB3gu2t8LjLG3ivfWVL3v",
  "key1": "5o5qMnKtuQ22AZQcU7kKY96uFtUFJ7dEGAS82aTzCo6Qizr22PxA36qMowss3ok7rKHcBHpxqdYL4JzyepW5C6XQ",
  "key2": "2y23V2SVk2VUay5WEQLgqFNRcS9CikkVZwAo7HdYd2JKdhKNwk9XaT7Up2u3Ew5mwAXdxZ8Nj58akPqSkAxhLE4i",
  "key3": "58Daz3NUEL5tdcmRwpR1ZZNd9ZWKeD8uZ6nsUT7gcozHk4gzjk9uqvR67FmHtYtgs5pec71auxZGfQLd4tzPHMPc",
  "key4": "2zV4wjjqLr3QzXsEeDvZDLms595L8CpapAbWc2Kqbdc7Bsmby6Dnx2KAZK6pemVVGFRhdCtFLjuVj6rSNf4mN3hM",
  "key5": "3DuRv861ybQwAVTUQGxy1k7LY7dK5ptzKq4iP94vHSburDEJc9uQbXhHNKPJGB8Dg8bsED71BB8AC9mx2VwesFVU",
  "key6": "AzYndDrXFm1gQXxXZXACpMVrfEyxTvvBUjvwqSxiESgbVMc2CEMsaGSPJhY7GR5ANBHPBisQzS64U2C8ZLp1mJm",
  "key7": "3hC6bCEtiPSJstLk8wZzyEs8FJkkraTTnFeBALKbVmqyF9bEngj8yRDqtDijNn94vxt4PtUq68vSTh9t3tsVM9Gp",
  "key8": "5oUL2PupRsHzwhhoY5V4C9AUq5dnxc2mz9yZ7Smnw8LU62666SGKEpeh32w5W18zux9jKQbZBPnFwdpMrMGhk9Sg",
  "key9": "3MQt1qmWP2jhPtr2egkvv5ViTzZWbc7XjcehWNvxpfaKNndZf4xkRxSpbhzevCj9741Z7NzxbSmZpTEmQrkXaj13",
  "key10": "4pqi2uqxrXYaq7moCuN1tWXNgBSbM2ertWyTa2X8TgYRmP4CxxueCmmgxukEViEtrU4fJwEtLJTYhptGEpa3A72m",
  "key11": "124MTVNxi3qJ9NsowtwxudAqtB8X1szDQZ6e431Kjuc5XfTrKyynhQd1m1pbYSBnWC5n6y91GPT2PnRppeGV1c9m",
  "key12": "3Hz5DPL8PxAAHWEs6dniqqaizmpAyMgoyDevHED9fYrMaN9LWEKBmt75xvss9qBKCWmTgs4gBkRPZD9ZvQef7ppJ",
  "key13": "5ufh42y4RE5V2A4qrFvjYnmYQ9UcKG6vLD8naPPSnSv8CMLBdcuaTD7ScxD7dD4pyLXq7Rznv8JqbDdbq7dQo66b",
  "key14": "joKvmDZMmrmKVCCotPEfqSX5ry6hcW2JqdgrqMTXQQMbo6xUXnmDZY7itFSuju53WXLcJ4a3WwebMapfSAbE2Uo",
  "key15": "3EQ3xLQfDEizXrZ9uZbA928saeUrXVMvQZvVigecMqAbd3xfN3kNrzJ7xPGaTPz3p8GhprQrkJWqpZaT2ahVK1ed",
  "key16": "z6ZP2ZQaZfDmi74npvJsfRgsDmETJSZZfPdUMq6ik42ujJ9j3o1Nvv9BbxXw1h4ZjMNQaTQFGVxomxSfwswCAep",
  "key17": "2hwnDE7J9Rj8xQCGX9iRvEeMu1Rt4VtAFKBqKnsVyTbDmHfdhjruu69yzVPF4EMHZ8MhhC1ZiuQ6HVXdXDY3th97",
  "key18": "cmDsydhqUHDYqeedxwRARCXfN7ytMXKFQ78YdgH4LG79LU7upQnh38myr1fNxTsFNnLdHhoFmLneXYnDNKeMwKw",
  "key19": "2TYhduE2yhmuSujAA1rtNbvvzk8q6bvExpewdaYXBTiTFHzMBM4XaeMVMYfDTQkfjKZyhT3XiH5S1WsmVnNbC99n",
  "key20": "2AUzQitDd39KePPPYMEomquEQJJbTJNGCHUJZMYykT335TWKZdkCCvpgYjceLT2wEfizriLf9YVyTDsSmiZ24Z5h",
  "key21": "2QKdyYmcoFpNTY2P4JwL1EY945A1U5PVWtHbC3rYCGvs9HxpY9DY9qB9c8ccm954bbZjFKzbUXcmev8Gf1nAAmMb",
  "key22": "5hZPdUP3BRkUcbEr36egfK5ampxBKHDXzLk9EBGnX1x87bXGZ5rs3nx9tyTAHyXdJW4UmtVYBdCfDLNTybxLovb",
  "key23": "5Mj87kQXycsJj69rgvhgaArXQDEXXYHhcwMN99Bq3X8Kd8J7qCyDVLTQhLUtesWfXaVCa3KsvaqabzFM1whtxU2g",
  "key24": "cDMkSnui2GygFqSv3S2A3iD2wPebeNN8aFhtPS5i6TjfwxU3hwRTbNYorJemLW4jkEdzzGEeqHrSxbJZtwoapio",
  "key25": "3JSTy5EfQRXTorGCuXvQjr4JyyCQM613tVZy4uAT21fqfqd1ZUrr4iUz1LaYrptnmwRrYE4VkEWa68G3jVvNDQax",
  "key26": "357jEsy4JdTLW5gMbooTNqzKHTEjBqFdqdiPzxdCCBFtNtUxxD5Rppff4fvMvBqvCyiXoB7xCDFBQqa6E8CgxQmN",
  "key27": "4yvihASspgEqJymp7azUUNYVa6Dtj8xsi6fkMcKvPsjdthmz9iCpXpDPrV45JWLYdc3VL5WKFZoeg8cUXufhwjmy",
  "key28": "2vrABrWjN7GhaJ8aYcxFSozfA98Y59W1wabL7raHjn8gvrbE1CNHJSaYQSMrJ1nx7d49C3oFWaa6vAQPtx9b6vcq",
  "key29": "3eX1DBv5Md94X7Qbxd5vBMJ85qoVaK1GUkpK7Em3r95ifvRKsFduzoKfhD7CkwvTiUzwe6QbogRPoS3BrjHN8q7S",
  "key30": "2MN2exRAwsshbw8B1SuTxAuJgzsJvckh1FBy6CutAdkWmqSQN1pE58YHDxmTZ7zP8jx6ScDTHbLQjZyj4c3vr2SB",
  "key31": "5DM5TgTKMDEEZnhB97YeAYMLUK8zVoSVZfPD2pTjA4zrrb2Qr4zdXEvVmtT8K94Meb9FAJwFzhsEjWFTnNQVGLu1",
  "key32": "4wS2KhSB9Na3LzC2ikrNCbohZoB5CrzJHGJZefrhZaR1RyU76mQiN1F4uUwt7Y2nscrBqKSRhCgtB3Fc9hYex3zi",
  "key33": "4X4GiQ6zUAfMFFpYdzebooDMo62gj8gKB4tzYRgAqBvRtD18UWcn5gHeamZ6mrxePzUDjbnXNcvBe1ykBVzyiygD",
  "key34": "3Adt36KuVLAQHbednjpzSZQKuqEDwZG7GGNGGrmpuVox2f29mG2YjQeAcPDHarrqmHs8h2dSUf64dA8kS5AxFErT",
  "key35": "67U118rmC4uV7k5Rgo76jD3h63KZHnSWo4Sih35HgJS1FhRKTo6mhVYsWUxUkbjxNvxrCgYfG3yY7WXYNn2Emqym",
  "key36": "4BHeqsLUfEGWy5WGoxLQnbGhJ1WBkYDfjtpJRUX7h2bB84zGoNKiL9FXWCfE83X6EBDCgxMbJC8qJf4JvyaFwrDW",
  "key37": "48kPwuPS7Z8F3LQsPQPSXWLBCZiy4ZbbS19rSf9eHdNoV2GPZqtzQpcLiMAnvxkekKoLssKLUnvHuj79oktKXJtj",
  "key38": "DJahZ96XaemroqgrS3tkiy9i7HSJzr3bHFsvUioB844LCqEb4GrDoKBG3ebEnr2LrV6jfncNXVaWmxcJNga6twG",
  "key39": "4mFAV62L26E3Y4EJrXKd7iXDn2KJ9LQbwKTDEWS15sgnf6V5x6fC8Qr5SyoozBMExTWh2NoLP45ye9Fxdz3nX92p"
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
