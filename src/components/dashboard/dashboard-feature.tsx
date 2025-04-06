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
    "2ivMMvofJCAFqnY2WTXFER6SHS7hyYrozYWSa6nTtFRmQRMgpcTz7kjLi3468kHNHfouGw4GRuBqgc5qFzacfyYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sdKQv6peNNMd8Waizqy5DZwfE4tPcz6EtPHvr9F9sx7ssH7wjftkdoEEJrySjmRQ3nbWk2SwkqKwME2kqqnVJyU",
  "key1": "24veimbZBqbaJJsbnascFv6ejYRshsf6NAqThqTjxGBKP4ev5E5JJ7RbuhFePg81o9CCHva2K7PTg4UG9PBSenpb",
  "key2": "vaEBF8i24nubCFUt97ihVs5Lu3YtKHoxGb6GuGxnuoYo8J4sNCB7o765pYcunEAw2Eu8PsnxgJZbVXCCCP2nXcK",
  "key3": "3JNcn1FVUPyZV4kgULG92DeQkijJEBVFujMd6QadZNLLqVwR5fTzDu3fchYhh9a61gto6dQyfuAS2VmfJSj6vn5d",
  "key4": "4SbZTe9jQaa7DCTNYcGsW4nAjmXTPpKeyLMYehirDhBbPQdBXXZr4YFSwGbHgerY3WKDH9s1CtxwJB7UjokmZPQj",
  "key5": "BKkzUciWJmV7d2kS4J36hsQ5JuBLBV4feu8pDyYqWnSA6Tq7Pd1fmXNRo6XrvhJmuGbrfWVz5uK6tNFUJzXvPN1",
  "key6": "3ao1aajkeUwD2GucDMcL8odk2dtpV5een9i3PqkKa8LQztYSh6S4W6DebAjpVn1vMchRX4BSfbJWTwymMVEC8Mes",
  "key7": "2ZxJMbf1gAsqzDc3z28VfK11v4mHvfvQWF1FrxtLwZnTQqj4fuaaCErQ5Vv1exPMvWVqCDFttqKThXizKFKYEJU3",
  "key8": "4jqZBFWrRkcK3abpV7W4xfFcQF2GqgjPcKpw4Sx57cjGQ6QSfizDJRzARxa8qagDrDJfTCxKRvJDsPrsuBgaEV8y",
  "key9": "3SUsmHb127AUBF2gQahXRqNCx4Vsc8diUMY3NqYTonibE5FzH3jtc7mfD7hw3feptB2rrrpNM34wZ6n3fjPR9T75",
  "key10": "ZBtmPGWvXhHnwXwVPKenG4QsxGjhrMdYbhxEiy9AsSnb85xtzWVSewAABnfMxBwPP9FMLpMj2BxaLPUbgaSNcfj",
  "key11": "ghzxVNThdztghiftm3gnX9PQ6BJqA2hdX4BRt9TduAovUEqAqSmTitWEYYTZf5kSrBoa9LUu3Hchwu1CHdtJ9qw",
  "key12": "M1X1PHn3p3kLwY8NJjz34gmdaj8xUUdYPVQmNJV7hsJWsT2zST6birRAKKsrX4XYnT2x1w1XAwyMgK6cVprEVNg",
  "key13": "Xu6NjUUhPS2Pm511NPVKxPtqSUjH2rhDv8Uag6Sap9dhmv2aAqt7KZ79h3sF1wSQSzdYwPf1WKW6C1zVpfuUGVX",
  "key14": "RCvTGiTDk8jjeBAqhFfMoTWQS4zFXXd562YJ7WnbgrqEkzu8FcLD3JorSC4RepypWLzNByNR3JWMMnZEpFSWif2",
  "key15": "21tfUURy1MLBZubfoS4ofo66Dv1wQrPUyQbAWGyBH7qJ7RVht8YNw74ayW7DWhwvoXyGaekt4NYyvXyywvMshTvv",
  "key16": "2xBHfZXoxDaS6JKtRrjWUqVqjqhQ7pXwN5y3haGBVmSvsdA4XT5op15XVpxAjazCaeqPTv8ax8RBfqRYyshn7scx",
  "key17": "5mpuozUXg5kr85yzqf5Pdq9G2ur4Uz71CpTBLBL26CFWZHeuCWDFunsr5YGpdbPowaL4s1nnYk3JVKXm1DngVTJC",
  "key18": "5vGgY2dgAZcGD6bSHKJmAbniYwXSSvbDdMZQJ4qC8qN2HMGpvTVyH2DwWPc2qShkDZ7xXNxTacGnsatR4Dn7yckd",
  "key19": "go5k6m7VN4tUx7HES7pN7jv5yXRoq7iMhat9y453uhR3ammoPHGynX1VREvXdF8wfT3hiHpv8Gj1iopJsSjXxVC",
  "key20": "3sBii1QLy9C1fyHctBr69FrdBF2Bo1K7CdRSfVTzdxuT1b4cPbyA3bckAD3mJo64av69tjF7A3vzKzAd1iuYMueM",
  "key21": "sYqqKMTz4swMzrNwHoe75kZcLLcF2qPvdSxRcJFktBFxnniyG7VEqxhWSvWtfXz4dxpccz7hKi7sL2njmMtdAj6",
  "key22": "tLDkGSuPABFC6LigZKLD4VtpEbCkLhB3NMpfhCusoLTTGs1Liz9ketASUnap8R8FEjfYTjyGM9yyr1FvKhLQ4UR",
  "key23": "5Z3ZqZToer3CNJ2g9x8qBXQhMATry5Wx75doijKdwsZH9DNQ6Hd5nUWmiwG1rS5X6DZgrWpTt1USdzYrgccmJBGh",
  "key24": "5EfXiScBZqEANn62Fc2Kyk2iVkNLD3n8LvcmncKb8vY46buxSUdVcMNf8xfExCUkP4Ts1tcc2MiG2zQ6XJkSUt7C",
  "key25": "4cRFhQnGP6gdrUHiShXFDhPtvcznCxr9y2NNiseATA4RYQEn838qQyX7jzxnTS9yK7TpWjZV3jWgzatP9YdaCRCf",
  "key26": "5Mcsz2cjg5BTUGNGgmuNnMLXksHJVnT2L95h9Y7sE8vA8FCr4qQW4BJiVTAdXPnxQ9g53isDFRNMVWS5jNqkwWmA",
  "key27": "2Rfkk8GiKHrAtUbTwGuQeYQkSpMLRZ5pw1ncjBzWC85LYzbhuStWmxFpSi1WQxKPUD4x3992em7QHgqitQkhEhs4",
  "key28": "3vigeYb3e5t57csutD5Vcf6Kbwpg8no2qVWnCuoX7g83ii8F4N5MJuaBE1hnZCFUyxYCQ4C976N5G5sTFDZiJUe1",
  "key29": "3tMgRAW7dcFe3fuu9VKabKv5RyzihiYaiBXECSErJ97q98zkkAp87h1Wz7ApnArFJ3zoUhprpzgPgabADjbipsBe",
  "key30": "66ASdDzxBXh4ym3QbsLJ4UeZaGxXh9wgKjaMA93D4Ubb7U8iXvAH15izE4daymF1jRkZBtMSvo5XnLZhrV9gRtQv",
  "key31": "41jbVpvs29NGXUCRqsAwNemYEbtUXGtGKnfmceFxn4CrzqPdnTAcKrpSRt9fi7Sp8wyWMbPfGTX7vhmwXWPY5Vbj",
  "key32": "4ucsvbPfG4WDQVKEdHq7Mct77YAiuzFokRHCBfhc3ENxeB5VCy2Ps6VqPPNzBrSNb3XvoD5xnSQ5cc7ZaWJCVncB",
  "key33": "3KVijJQvfkfUV44akov5EDZ6szQitJLEMHe9SVxoEqTs1LRqFNjgPPzCfD1pUWNZQgmCtEumDiToRUMSc4yuBcXA",
  "key34": "3bxFyKPgqeCefm8gJQYy5UouJ9EvnR2wFRatJouMQVjYWJAmu9mS4gCYXUykcaMHKQETQTywt4WpaLV7mUtfTLn"
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
