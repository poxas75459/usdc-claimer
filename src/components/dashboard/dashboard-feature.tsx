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
    "2Eekvu6Wmxm9rTJ6XVA93d9M8r1zxZD9LWE1XpHTAHj1fXa5zJVT99iRKj6dakRwHpkDsXBYmdk5N2uYeHYEqXuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j46ecqmgT3apusfjTUzma9f8Rp4KFjPa73Ug22jDMALVPndFhZyEh3YNEP9vSLW1K7QoasfP1drxyABJzL3tUXN",
  "key1": "87ZDFbEPhJQKwkr2bUYGamYK13mZH3MSBrBKFoKJQjkkT7xJB7NURKABZDTi5PrnSjSEcfKYa7Yy1CyUE19XYA1",
  "key2": "3ECtAgcmvxtT6AhoLEDJNNFU7JNrNMYdC2zHCxFGoKt5e9V6brtiAZGpf3yZ7yBgLnxwwRGftCqTCuE75nK6VeZF",
  "key3": "5Aou1AAatrBt6efzaQW6efXPzJrUxTbrpud8mJDJaECnrRv9THtThRTuzBW9144hbJMAfwWPZ2wex1Hrc2uJEUwd",
  "key4": "2tVkUoBF2kne1oinbSiV87jTURa2L2kSLfmjtoa5Vj5gfoFoYuuUvoQsJUGx8scj1QdBaP837eAtdXkpqLT86DR",
  "key5": "3SZrdLbkxwjLAvwpFjbrtRnz1JbEJV55dEbpvQt8uEDuxs6Q569p7bwaGodCgWFC1TJwKizaDA4JwxgBWaxYe6Sv",
  "key6": "45KLJwLaf9yafqHp6BiV5PxqKVME35cLDSCDxkFLAuLQAbbTJgz7JHiTNTxVvfmpujP3fhnifxx9nrG9w68vAnCN",
  "key7": "4dSWFf7TE9iVCZ3rwEPz1UwbSZ8RZk5e7xHKrmMkM7fi17S3kFL2CADnwuU3sfte1RYpZPYpgG3qzbKLByQ7npxr",
  "key8": "2yn3sG6B4qCRjRNZUFk2SrbuziG4cKy8ius2ZJ5YkyRgVQSeKWLxH4qKQvTGGGLspG5ypHejbSoLkV6szeYV3nTF",
  "key9": "31p54oV1W5jnstSCfKA9MWZsccavAZXrdgnoZom7vMnuYQas1GBWwHFxsgrhyrEqehwubBhTYNtvwFm3YZBf4bx5",
  "key10": "3m9x76668fawzexfGmP4tM9gdYukdzQfihyVZa3rvUHWAtGXzFhkUr8LsKqbdDFacHiWGsG8xWmWKqQSF4HSjqGo",
  "key11": "MDiWJk4qqAJBZun4bAz2JtWNbt6iqXu1TtEEGd7uQ4C8g2WLwurQ44Y24uNUctUzPNNVvSoXckR4EiYRimwRiSC",
  "key12": "5rhFQLpGWm7AE38WBbXRwbaaWr3nG527jF8mJugdGmg4DDNYxuzLY59YekNfkHbtxaJwc2JWvpPPJ4eYMtXsXjPb",
  "key13": "5VYc6dygG7EEXEuPuBhykiyK8ERTrdkeAQwdeBh868CCBEYGCK7smmkavWaAuFrpS1ZMkDVtbDUXNhEYxmuAs1Bo",
  "key14": "32XnZ46aVcTgLtt8yE35s9vqFqctarjsDwxhk5uduj2zNqxERtZyEKcV1adA3NaPkT69nGkuro1DzLXX2eYsmiP",
  "key15": "4jdy2NtD4ee5Bk4msuRpsS9eZf5mNd7RcywLieKbxXm5dmDMpCthVJ76tS3ManYcyVjuach161F3c6W8RHaQegKu",
  "key16": "433yfEJ7pNSgp2c55mfvC1uuJ498SzYZ5VbRy7vScY9aD4gTD977KPPYKwk6juhNMAT8A1PpRi7kEWeL2zugnWjy",
  "key17": "4aAwTqk9g36NASd53xZczroesKuup8w4bJNEwvv81pGSfhtsGFVZx9SPwid5jX1XHCDTc4vTzbm1AvoTRiVKnkXi",
  "key18": "5RTLW9TfVJx48yJqm4d1xok7XcgVLeRgHiJMBkouDXX6xx8JzbrSfunMAPBY1awarjRL65g7QFF3oqhYDqZqGWdc",
  "key19": "3aAw36Y4WhoHsBAtzFhV99aAkUjfiWZ5NJwh6s8p7NyT4nGMbtGCJuMp8YxS1PWvAyFK8QcxKipwwGxTuwkWLbDc",
  "key20": "4HwgVJtUWLmDVhoVvFGhxe9R7aGJa6ZYLKPt6x27MiBtPGLBGvr7bcgRmmKAWaSRuR6x8uhjEF9fyXqgh1qYZhtJ",
  "key21": "4W9NFiKEtMLeXeNvHgcNLbqWDRhS78CUsAHwTrmAuDJDbTEurQroptvpMGUd5V2bkMs9Gdr7vFnXeQbpq8GBPbNd",
  "key22": "2iLCjDPWSqQbN9hHZeJJKvXvL6ijTGrRN7MST2Ce69h8wY4JqZdVoB3zX3KWHvvjdHeGhFas8agpXspuuubLREfe",
  "key23": "49U9icYztW4RpxYrZY5o8MV6Hs7ZPkCasDmiw9w6zRQmRNkSKTVo17Hfoab7H4CEVUHGkJCBbos7DEnYHrqcLXVy",
  "key24": "3JdBp9kS7baU1kDfhm1ZimsLRcMquHrAtj6Rr5R93jE6dTeghmdQAKzc4zd2gc9n4F4DZoaZYdkfz8rg9VN9SxKU",
  "key25": "atuH8Ex27B32n6povUhFTC1MGot3DnKou4NessZHFSLmV3E3zEfrNGTEXLcUMsHLfZtPwSAKyduStUXP3MMgm6W",
  "key26": "2CoF1tH7kpheDAXoJ8M28Tgiir1inechsDyTQLREx6H1ahQhgVVquGrmz9ZeyMR5FpX8VLWRq5E2hKEtnXF71bzN",
  "key27": "4duYJtPruTxhj8xjnCmoMp1973NohPfB48L58MPzvsCDJyUbcfaAnxpL2bQx5mgmyTjDfYrSKWGQyr1yc9DpXWx3",
  "key28": "Ko6iCmU3jGpqihcb2sKEKDumqv6dgeBZrVreuAGa59vcVM6w4CRY5rZDXtyL3MGHQRZPCv4VPRqsyEBw1g95REx",
  "key29": "47mqUXEsaDpBUoztmLWTYYvfYxeWRZRPghBkijrLN8EVEDokHRf4gSkK463VY7phpArHWPUE13wW2hkELv3BurZD",
  "key30": "3WGodrrrhJyPEH81X6KJk1X41LtLfYEDPBpGJwDpLKoKPapxHYwehVN8qD272porDK8icg1P2zw8fGniGK6qxLDF",
  "key31": "2NJfKWcgV42XDeVxVAjdiwC6ujsHMYLJu6z3gcW8y7FA5u1LfKXWPVabDNVEmFUWsJ35S63Rp6RKR7frzNAxigvM",
  "key32": "4specforrQCXQzFdeBQvKyDFR8AnL4S17h6UeAdHQUTzfqiyHnFD9E17xwCpdrBgQhnc4ZQjFtLDEEgxdTqTXLgH",
  "key33": "2CsxrkM9QPpAdPrZX9M9VFzKTPwjannq36xi4T1MGZpvUrYzGkyPj4nLY2dykWrCk2hknPhR1koP2gFd4ndcoqUz",
  "key34": "45iyYw8BLoXscfcAH3sZ165BGezsXcdaRv3BdZXxgNaoUmfWu2haKdbw7yheLUyqfwd5MjopudyjTT2VJvTNQYsf",
  "key35": "2usfg5vhNhReGKfEK77DkZRBjWSt8dcudeKShZf8n37yB6UvXep8VyYScu8bssfBC4CSUXN9xfrA8Jd74CYJhct3",
  "key36": "2pVxjhckiHzQ7apt4Jquu5uDAWN3Mnp74HAfnfHd1wDjGXzELRLKr4dt1uZiKzXRL1cmAqicSYRhHprZohS6GsPS",
  "key37": "5PKqqBUJUgmFWLi5p5XkCj1tKcKcBrjjJXTWV32zcxLnNuYJF5snCgrY9MvDjENdyCLehEerAj8cxrrJ1UUbbJaV",
  "key38": "Swrgy16Tj5WqMRWRpvnSi49i6Lh3FPmAm2dWk9r8kbjLe8DWysTXQUGzeN9nh5foVFYFbE63vS2KkQALiL3idye",
  "key39": "5aZuDrV1mjhnbkLnmymo8JurihHDCYGhRBEQVqqAqUUKnwKz9XsQ7oRxgRNdkcwobxGBNKoVEM3rmRzX3siyyjXr",
  "key40": "21mzFy1TZhipXpk7AfkBgvFnYVgyNykewnVkn9ChynizWj3Xsh7yt67BRnQJTwKsY1bgZo5ohyGBPgL7QRHgbooJ",
  "key41": "48bUUusczUfeis3udjcoQ651NFJAgkNKBTXcAXvovS7awH8iH4jdSwFzgnPVPjyNapt1ka6LYbtx2EARsYwhWL16",
  "key42": "3gDiCesxrDGhV8BhG8fQDbGf1tYstSyvj2ZjqJqfvh2wGhynGRia1gzWzCLehdGwGv7pdou187dxgg8z4S6wjKLe",
  "key43": "4mdyMWYx7ewhh6NAzgNKZqa3bMoZ76LcQu9wE2adDwN4SZiNXCbS7RszJJVnGk7UvRRxT4xowJZvPE98SjSw4bVg",
  "key44": "61EpLg1VYJ1xAkhXshvktoSKYEwpCofThso1KKMFWf8biLq8wWf7E4n8d6cJJWD7BerPzeBRKje1xTA1k6J4xawY",
  "key45": "4WDACjbATZaULDyBV4KpBsaEeBeQqaVs2GU428arJs382cGHreVCcymsPHXuoy8JHfzt9VXrv8DMdFm7viRX2128"
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
