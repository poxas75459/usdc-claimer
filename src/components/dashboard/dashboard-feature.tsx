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
    "3pw5Xe57erboBYHumgB3hWUWWx5FU6YyN2Y7nipQQdD68fJUoajpYL2WRRycKgRe9hNyiCft5vtqLiYGrxUgiU2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24i4dJToQ9jaDg1EVAjNj7pVbF837SZ3cCVK6spfRFraEufAVMRSyiRgbhGa7jEH4bGZjb1w75BZTU8d2LocVe6C",
  "key1": "3dc5asb2kkDaQcE69rKPu1c1cz7bZAn9qidcNW461ws1wjFDtjqeuAgrUsMwivZP7wg7RH4zJ3xmXRgSeAc1oqjA",
  "key2": "2HqsQC2En6aKoJ7seVrdXxnBf64XoRVBeekSu94hfhzyGnXuSeEdXtCqZB11hz7mTTMGF7cUxa5u38EM4gQGyC3B",
  "key3": "3eTTCQMXxtRv9FyYf4SKWKX6zNdZDNoyKKP78CYa3JWrBxfpxVnMpFqQc3o7goRoNJh513cMRwcGyDP8fV7sN2KH",
  "key4": "2EeQux1qMECoQcQYwVf2zRfEuAqp2nNDTTSZFq5bEiLBNywMgZdrJsFpyw5gchmtkgNXivEzTEFhCKtHVvwvSSiG",
  "key5": "5VwLhxeCgMML6LCqt5rAzykY6jZy4WxtwiniGAaWxmU3WY9nc8tWd33zw4miMQqYkZTtNF2ufyusxpv6E2KR28tq",
  "key6": "5Kmi1f9ZPrdaab8BoNP2TeqyjofMog7FJZ6RU78CnsP17ZqPQrHAnympvdfEYeg5GZMYFUySE8QYr9rH1Lgp3Lai",
  "key7": "25p5a39AD2bC1VgUoumtSSYLpT3kxhYRzEFugVzUE4Qyqbst2utAtEjPFUHksJNTBwDoz47XKamdiZ4dMiB7xdVd",
  "key8": "34TAqEboq6DfSkswM18jRejyo6F6jxq3567gCepQrV5T9ovveiBYaHb2sh6eUoqA9iFktyJNwP2X3UYgfzggA1F7",
  "key9": "26yT9qdjRcxvvpKjLZhcFQLvizJDm3S77tEim2pgJq2P7cDdZjWDQG95JsQsFYaqLheEeExht6HMrmhneWzz63rC",
  "key10": "5zVcyfadsj5ngNcpn1kdoFMHsamgphae1RmbQQYVrDHiz6bqzTPDiVcvoK5ZEqbYKVb7z43Sx18VUk1AUnCYu9uB",
  "key11": "23dJqEq4JRGbYpepY3xMUkdJoUeSArBVFDyc6L3hSDnmeHEjp9MQ6jbAVGu3GX3ysA5tBMQsV9UjEUyiKQNXXj9z",
  "key12": "2xgekjRYiWHfxwnygvDHLDYdVcxUWsJZEKrR3DKuN9WrU5wjDMrepoqbCt9W8njyxG5ZRATmjj1oKisNMnDWm2KY",
  "key13": "4tkUcHHAT3qryqpbEvyjuu5bfBTF4zrbMwK2M16qiWGBJjqk92hjDMyts38DiyWGB1uUSAXYN578kr7vsSJhiAJf",
  "key14": "VbBXfZtt7CbQKtonbJpwYimFVVJEwMFQyrzT8kXF3GrmwKtsNq7GfXDaSxbbH8TwLM1JpMfJ7dKyVGSNg9A6BsJ",
  "key15": "ErK3au38GKVzH29k8SxfvSXgsqVqj3je4FjRofGaSzr72UUrVMezPxpk14LR9b2d7WVaJYYk5wD1B1dn12RRpaE",
  "key16": "43YW1wEeMZVsdePsJmc1QbsiNbQgJojtQjkyqooa5FrNZjxr8YLNXCYBUER1NqK3UjTwxXBLcLcPUAwsEjoKYYD2",
  "key17": "2LjdmkBCzBWFk7Ko4BiX3cdSXGvASCzQ6tXbrfEFM2vKTUb3rq6xvNYyxSjH9HRgJUEsezTwxw22V9B2b5Y1VmNa",
  "key18": "4caEazh4fLBrM6ygD7bQhbCWyLZWZGXAqwad7fMP5oLPCYAwrkBEgb4hWNA9vbScz5Bktx8rY3jDnuctj6ZEK7VC",
  "key19": "5bBbWGccBdBoYnsd3cWaA2HYEwZGSy9KzPgA8GCoQPa5rGvhW4qzgdb2Q19UHAGAHtPqPvfhepd8GMsmh7PYJWVL",
  "key20": "61L9YbM7t5RW2KihMuoHziiev5rieMu9m9q5CbyxeEvQFSyTU3oyVa5dHr4pS8KrNJ6hUDbEitAZbR77pCa47fKf",
  "key21": "4UDAX3M2Vq2LEQ7pUnydYoYAM6Gpc1jphrUv4YwPFxNxHn1qViasq2w9YH1rU9AhnGghQUVoHBkgDahoK6rSUwbQ",
  "key22": "4Ky8ntyfkHaxiXpA3tErVGnS72fDakmFBzKNpjB1VBfcticbdWoPm7iB2da26xxwcdBmjmoK7Wwv6BNEnYiQAWuZ",
  "key23": "4tP1mfrJbLv8oZqi1SUf6jdQpUjwmLCmu3cCJBbsJaPHJW1JYkN37s931CNHedhbtmyz5eGcbWXRLm2VXg4xQkt4",
  "key24": "RiKtayCMfM1SHZm8UFCmmECTnj34zTRbUZXQFCSMD19ys4g2wAz1e6GupneTDZbizPH2GbmNDZRWQq8w8M1TdHV",
  "key25": "2AcCxfoAyAbE826qgxmSRXPZwrzt3aGgHTGFZeSpc7mGkHgdRWDWCCVztheWfkHg8cE9kmdiWGN5KDzs6bwmUL1L",
  "key26": "2gRmbHGfSHYDyjB1DGQNHnuUWPvSidkdbvNfq5PCpdHCspSjRApQQ4PkY3rBKKN9ZjvAPgjKrbsbka96LcrmbbqS",
  "key27": "5gcwE6TpSsaDwXfhnMU3SCzgPmzaRenxWhu72uQVYJdrhsoKg7iQe81BqLmopceZ4KpwHmWDTwTuSBabqGQFWXUh",
  "key28": "5ACoHqKJDLdvzUX4iSBCXDAG1TJyRQ2LNTiQnTTxBReGTLs1X4RsedrqEr2rFyAf2Fjit7Kw78Me5EERY36PT5Pg",
  "key29": "5N4P3zBVE32f7UHFcSp1ckKRr15AJjv79zGMP14Qs8MtQbP4fgWgWGPa3CAg2PkamHXztUYPURKFoEV8qo13vay7",
  "key30": "4ZcD4E1wkMwutoJGoG5LzKYj2fPj3Xk5aZaa9o5SXyceZFR5twc85deTyL1maMHssHb28xweTndV7JyFTwL73dW9",
  "key31": "2hkxJXoEQJSjCfWtouD15Jw3hJcbiaSbSbuFMNMUu5hePbWBwGHGxUo3ANKSZ3bMbsYTKYJKoarB7nMiM4rruyYB",
  "key32": "DiStZDMDNM9Ex4fVWkSv713JieAuHoVZs6sy8fenMW1zzH8B24yEbwU1VqmC5f6NQcdhjByTzRsx8JMcwWL5BF6",
  "key33": "2aigXMxv2nxURgCo4Xtj8y4BBLcZXBBNVh78uPGQmXcr7gp3abvdS9GokB21eDJ9TVKwqJGyrevY2TmBRABRQpbz",
  "key34": "5REbwdPeQsxCzQ5RMFczZ9HjnCqb58NzoiUiV6zpgvnEhUyinvaNa1wabST7Fzjt4nfTF9Ji4PfCvzJFDdScwxXK",
  "key35": "4ZKFgrcRmJWBrijZSDLB1UBCsLJyG8sFhFZ5zJpg6f3FEHevDGQT3rvdRB6dSVmoDGg3TSABKy8bBCEvr3Pp6wN9",
  "key36": "44wqvvvBPXQRoQyyfhE9Ea22syuQesmdL4D1NBDYWR9vdNyxSxvPPNUy9cYJdUbAD12L5aPvLhZVysMpTdtzV1Gq",
  "key37": "5fYrDtmzXTwcihitw1wZr2f7YhP3sjmaL6z5WJpNyb41m5GyX5h3gdFykHn7P4CToiKev5g4aJS2XoCxiZx2vLJj",
  "key38": "2aX161nM2dXgyk8bwSTmUw8UnS8grop2yxYqzKbF133959aoojr1wxd5R39FwxCFHuymw43WYxncvJLV3w2zArkS"
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
