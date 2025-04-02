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
    "35eDnPoeYuiDxGRibdYmrLiYUVu8gPTYYubNujJ2ywtkLtpCEZV2KmJf6XkC7yTeDxTiqTzqQhGBqKZ7JyhakvDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tfEP43TE53onFv1pqbMHM9LSajZiZeyPFcVv6JSERa38kzCAQ89xYYFWiwzHMktK8qriqNuY8RiqC2KXNCGAezB",
  "key1": "4xK2NFA22Yw7sjdDjfySPD7rTFbfaWRzWY6gG4q7rAfhUk3pMkaEjPDNiEampwRpe8gAvDUtkvhps7pemuyp3w3Y",
  "key2": "5VDzqb42fy1izktp6DM24nsjdUGti3i7Y46cYHSSo35uGAwNuwoewzc2A5brgKvkhjgrC8yLpZWSbhnWUY9t5LVr",
  "key3": "5kcDFVjFZJKSYKjHqyokq9aPFtABjLaC8hF54dSHUqfTJrHMMzDG6NCKjqkyFpuAxzKj3XmEAQzEgEQRtrtJA8o7",
  "key4": "PsXoNkGPs3VtAQgrDYJ3mN2sEM7pqZ3hmVEUt8QQBRcGWxDCjywNA5VowZe8mwAEeuu5w5mwKYrMGkXWCGAGakF",
  "key5": "4is6bjJQSNC3TM5XqvR6V4eB2XXXVubkfdHgfx9Fz9muhfZ3ztGPrjEBrtE2p1Xk9S6e2aoYNAtdstciPfTn4n9v",
  "key6": "DuFa74XoU2RDriR1fS5geNZdowCo7HHQ7PmsjpLNGK4LzwV5Krgxa8UNqDNp5uFfT6rL4pb4WW5kidEuBqRx5e3",
  "key7": "4LkZkQaGCGEjzZPcK6QEdCgUwuyt1Kc3VBCicmD81oHx6c1yvvb3akxLNMUSHc2g4F7c2gwU1fw5bMhb6Kie342W",
  "key8": "5zyNu3wH8c5ybvY3EM79VCnqFcmhx6vAkJp9FhqM2LfGjRCQMqtiNNduwhD66rC64AA2uWnHUbxPgCbxoXSSFRY7",
  "key9": "3tQT19TpCmSSDG16iKArY1AV318tKii66Ji5U5kz9DZqCZHGN6UPhjwjLcp31gwxXfQUR2VvBohWdYvwNg1CHDvn",
  "key10": "nJp2PeEae442mRiexD8zzWnh7PJb25muKQAXF2cBwYZ1wDTnrnsqmpBv9DAYCm5jL3AM6cGNGnZKHE2r9xF6FoH",
  "key11": "4SY4Lqowm1ScPZ6Eq2vZERberiRw5ZSEb1EQ2sdvrdzENwDZG87pwTHJBzgG8ALjbKtWQXby1VmEHiW8S7Gc2GwE",
  "key12": "5myCHHi2LXAbNPECKvrQFnDV8g4rXxxkvZjth5ywTHyFBHPBhqdTZZRxKncWxsnaCJfmiskWDFbfaFSNZKEqYwJ3",
  "key13": "4Ck9NTvRjjdq1RUaFxuuExsuPxE1E7WyY6sVjv6tRd1jfFstsYLnDq2WSW9SV4iBQL6VRxXj7QkLp14prhGGHLvK",
  "key14": "2YWG76iGi796FchvPsE96jQ9e8VtP1Gs74mav72YVzknYAxx226jZXeCKW5smPbabRHr6ajH39PjArwX9HMywaaB",
  "key15": "2sCVNosiPLEfVtjNiL1JDs4aeqG5T2WgRK7BB1R3g4gMZdBKS4G35TJBiBL1km1Gmz5TVhiP9qbcqa9fuMinpcSQ",
  "key16": "2CzBoR6YAnBZR5bczWXBHdaiwksShsoz43isnfazswpFtrHMzgonWXMYGPer9FsfrjFunU6nVP2ph6ihf47VKuoX",
  "key17": "3F7tbKJGCQ8J7wRZzTUqgVfzNAARSLNbwDTHTck3ok3c2HrECtjHCLtGTocEU2KMcKKZ7WnuNnXCDo8KxnmYeo9y",
  "key18": "4THVhzvxQJAoRpn9aQn8DpWoFKeyLvWohT4ZbW6hfnAux2g8zwn9JvkJvVuP3WuBAHBkcumy8Zp4vzCi1DdBUeCk",
  "key19": "2ZQ48RkZmgmMXsNk5VB61RZomMYXMnaG1gCxMWG5GK8Wo8MHCfBWU7uyN83dn8jXG6iWf8TnkceGaRpop7FY1Qnu",
  "key20": "5upi8JM7VM5F4rZB6tkiZYpuAojeFQRbPqMS8so5T1Q2BH6rVsZt6tsyAtymdbP4c2K6JYfmXnkenaxLsQd8r4XB",
  "key21": "5zUqgbhaXBon2Nf7bG3pXZmyQspGwinDYSnFAWPhX5JGscM9vZ7FueAXfu8av62GTUNgxi1W1DDXa9Rv8Zy2nUpB",
  "key22": "4thHA5BkpKytx3xdDjEFjtswZ7xx7VmBjg6f4RRQBgGMzEZVhYmX4FxunabNkUfJQZKzXe7XqQYZMtDBfwYFgv8b",
  "key23": "4rg1JTV5Er6DLZHEguYiisEemHoSPgyE9n8Zxz1Kkm7nmg3qB79fMgo9yr94MQNBAiGJZebTCgbMeZ53JxXvxDik",
  "key24": "56Cwg5NwteLZKQvThkWgkvKefohtwA918rauWkca4xavkUx1svBaugpd3hpgrao3vJX7VgLBy3xjuqBtJhLBvwxi",
  "key25": "22PN9qpEw8Fjj6LgMfD4siobPYYqiyscgNCSvunSC3guFaENPPU6sWhhtwueiSigmtcqGh2HxV3Z12n9kbXzVMNN",
  "key26": "2h8NfQFnFQvV86useH2Bx1Cry7iiMyGBiYh664sUsBgeNpJ5H4C94ZwfozCVGXogKjzuSbC2RygVGKUQqdhNhaWA",
  "key27": "391EzHgoGAYB6eSz55h2F8uJb9WNXewNhmFc7s69gUFSR7Td6dMDufwpWo69rjFrGusjTVw7tFKSSUo3jnne3WSD",
  "key28": "3pt88wuoU4P98j4c5KqFbnmnYHWtFiCdjA33BZV1cJeWmqwrbqGtwmZjpSHu45pmSUP4xJCJdrzhMcPxGug6dwxo",
  "key29": "63yqffoqe5Acq3wtDMncraVTP41peupKiPMu7jKwm6n7HeDmgwdxUiDsvfMKnQC1PgpqMBFd4cov9vn6kvngskBr",
  "key30": "3ZYUmdoFbhrrJ5Zrn3kLq3SwjKKRvuQAdnzjLLMM1mApWMyCCTTbpVMPmdw7xNKVErnoKjX1kaRBY3mt4uAzLwwf",
  "key31": "24cxNQdbj58KcLD2motF9Dyf2LhNncy1ckp7niK47cvGTdFB3rBJY7YVwcg7LqcWL8m6qraYd69HsbdymipoQcgh",
  "key32": "jVuBHHn7wsYE7bf8hfrWhnbrCFnT5iPbZrNQGADNz2YS2YrEkAbwGjmKPfCNLqaF2so2N5oVGroJA6T8KR8iaos",
  "key33": "2HCP65T5S4FfqVp8bS96zyfZxSXJCphgnXHTQzZeJZXUv5j7wEWDwzYmosh5vc6kwardwUjm6mXu1TnCdY6eHL7G",
  "key34": "4tZLchGgUkbSQ3mY71K8vZMqy1De6B8UTRB2AgqsJRRnG7M8ouhCkEm8EsEpn8cEaPBkkTrdkDBRRy2qmj79eCU9",
  "key35": "3r9u3cLw9cRytEJ6pGUEnK3Pc2TwAsGEGsFrdBKVF5z2UzsZ6nTeGuDnvyhxVjUkK7HEHRKKcATLsoh5S8iMFNES",
  "key36": "347DT5NFwLDzAPcMvsra2s3q8btYfbsoTR1Mjod2QZvd4hsMzqAWD2sZWUWSsrB8Bws2upDEJnSFh5JuGKZv8Xyn",
  "key37": "5iJ9z9j5VpRD8McjNRGFBgSfBF2zsEUt8zht7JZUvLhposwJ9Tou5gqorzE5Us8kpMSrJV5BYfEbq44TdtfBwjZm",
  "key38": "S9WwefkGbbKN7RhogoGSTApv4vBfYnsAdwzLanthJhvQzvreh6AYj9uD1FGwnP6cJtBH25R4zmSkagXRcdyfj52",
  "key39": "4bik6Qs23EJMtDhQpYUhCdW5Lm1CZjnQqyKdxHsYoyPWn1aWfpXuTurNNeECsANDjZ37vLB9vKZgRqTGFNb2NW38",
  "key40": "3LWaedqoa4DbdUjxWt4TrB51YniTdPEixVr6BaKgQkDUVJr8TFc8vndVXhbqrdnYwCgxVx95Vpjr5ftURqzCEa1C"
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
