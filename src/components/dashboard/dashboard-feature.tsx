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
    "4A86zvtWKdeNUt9ZMSuNJfPAUKNEwJPnnz7eXpukE8xpjULmoSvwroZuzK3Pr8uuw2FXro9JzcDHmsPpcywasw6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NvNa7A2d2NXgyg66ha8YHzbWotjp8y8i895NKAYb6VxUmGneqx6gtY1Ajvo6jaPA8YqGs1wXKJcR68rCLQaDBny",
  "key1": "45jiaA43tYejgCTvEpBVF2psudTyDoSSu9ex3aD9eGxQ81aQydWprnBWtEcUcr856nW7M8A8qhMrhuqu5eJKac5Q",
  "key2": "4JqtV6aBFCURjuys2gQMxgPr3ZmL2XEXTM35fsd4gT7cC5pynaBq7R6eNwkTVPwjVFfTjhzyFXecVdtB1R3UF3tz",
  "key3": "Rb5y9L18AkNaZAXs4vTeY9QFJwmcd6WgxcaW7eyfh2ZxSE1zvtJzz23x6Ur2vx4NeAvu4sqWdui6PpARJBbT5Xi",
  "key4": "58mBeFdGv3TF8DWJrQLDU8egHiGNUGa6Kbv4i4DUe7bh319QU9X8YE7nc6F74Fs1mMRDmgSufNMHzLLox6dWk5Dm",
  "key5": "2CFQRNWiE5Jvq6GWbXUKYjij33v5yXLCVqWMdfH9vS7JLo5P9K4kRFh4jnxMMJYKY4H8FrGD6HE4dGCPWVuYKQY8",
  "key6": "2uURKtvwNtNFwewfqhtoVuHQQNVMXgdEUBuh5DtrnkrG8eUy8MbDdLnDuDJ2tnkBioUz6cRR4Hi6hTo3sXVMzqj2",
  "key7": "1wPnoj9sscfJyWywxdzY13j25PkzJv7kuMqx3QVhiCfssHH7Tw9iHFyF5iCpv1C6kwj557aViB7ZmXrqLC1V1ED",
  "key8": "5UD3sKrhXDv6i8Z6PRFxN9ACb47qeJDyEdKLJvYtTM1ueFWpPu274LN74PXFiYciXHH4XHXbJ4UzPr72pvou7BG1",
  "key9": "FMg7wdE3YeG6AkjMbgegYetcFY897QRGJEXgWKo5NomShjarZnh52hYy48hu4EME3jiDUByfXZTC9BGg9skKqSj",
  "key10": "3zJZg8juNfD6uUYtrcEBCo7fEM2osjPpm9NHHA9adJRredFqxJzxm84rXsDgxuvKDXXD19SEdeopRsNh9PZcWfMg",
  "key11": "2WChjvCcS2YqbDnGj7j8nHWxm3APL8dEbAbCqEiQhhFaBuJbk1TRsMCCfs3hLsX3oJCRSPuyLHxhXsz3wFNFYpvD",
  "key12": "RVqQnDdSLyQjgWea1njfgvDNT7QUfzjWqaY1CgVFDFyaafKdZ5uZ9kohdjpQ2DtQYy1TaDZokSg5JiY4tuwMALk",
  "key13": "3khf8byzjCz3agVZmo7oHGyNWST6sLf2G5PHxjtUcHDHNmwr1YDULJWw8sjt1pv4bdfaGTRozQHWF89NBFKGEPyA",
  "key14": "AD9yzZG98a6qAsvJQxjCJXGRfCvydjb2cJQfK7f498Mf6GaY7hXxxMEqunQ4cvMNmnkNka2jQxJJgnMcjNoh8HD",
  "key15": "5PqANyt8AMXuizFUuZqtLKePXtpKMn4B5V1SYJPqguyCGkcgCrucpYSuzo4ZSJWyeiSsfgQc8V8VZ5jZf8zL3r1K",
  "key16": "31sEzi4XwUf3kWFPpZU8Jptg22LvXHKbc81LXMUGaVyDaZbzahxhXGdK6CRqFDDZfABMWgKGoGG891rqaQNcanM5",
  "key17": "3KzJVuRfuG7nnKC4nA6xt3r27XfieCSsX6v7Xixf2qASACMziMcU8oPqcj89usu5YGye5bu7KCqMKfzp8Uem8xRo",
  "key18": "37gPpr2HRdSjR9t1infDg1BmKLpEemfp5iBVxSCdK5JJJZxYBTukM6puYg5Waj6qCiD6Wn1WwysnLW7fixffbmhL",
  "key19": "2DCp3mdRptZcf8vUDz1dEnNdSsq9xnrqMsJz2znNuqW5sJVNki6Be29Tj9toC9tAnDZrHXYK46RcZLaRgtctYGru",
  "key20": "zCr1EY5vhhiMD5b2spZnnV5b7eHrXTR1kEBhxzR9UdFVuvgqsyWMQNB6EU2DNG8BdDV421WmnEbHqw1Ren5eSGK",
  "key21": "5Y2AQt6MS39HyR21beHZgMthWjrocnbvRP8b8agUnrnLfEAYFkY9tpRrAAgYzwhedfoR5Y5CgAoco7qvs1tf66EH",
  "key22": "33T7QThBHA1PLp7LJ1ftQvBJ1FgPkau3ziTjzbGeagp4evwATmDbdiXmjDYW8zghTC9MpBy2PJnkMx9UYBbvYCef",
  "key23": "3PSRazs5GUe6kePk3SU5DD8T5ABDGksTpdTJ5ZMvnE2bJv6Qsjg3yZ2GPvFsQaSyon4cy4J8azjTySpuR83x2Z9C",
  "key24": "2Snt4qqgcnZ1N6QxBXzSFHZezoi241pyeFpn2jW5PypN5PLipMAnhnB1uTB5CRbmbBnPxB4xgnMASpsBvu7TEDUM",
  "key25": "5vpt8BggLkdBehrYhvZjpKGw2aQdWj7J4fH4hzqz2Mwz9MbBXX9rgWCTXNbQcPSzxziZujt5mCyv1mJVudwBM7ky",
  "key26": "2kSAamxYpda41aXZdJq4EFndkfy23TwaU7UAxz3kX73yettaBPhfWeg2EKdWBYXC5GTpqD3Y65wZgnPUM6B2Cwdt",
  "key27": "3qwS5czqp5XJL6DULygqp54vjcLpSRVTJSPXvULWeWEVFKYCs4Dg8aS4ekYsNFmLFdgEdeWmsfJQxi85pSUnb6RC",
  "key28": "brjo7iF5fbSHKC8wLqKccLMJMUhzUa9qaAhgaBanTsJXF4qxcJagXrytxzDxpqxibEJGRpYvd4quuewtyu4K1z8",
  "key29": "4FtpupU7hou3nC6ojMmKMH9vX5kVHGEAWAEDXUCcFjRa2rptGw1pmGKRXWxFqo8oRC3Nx5WD8ZCBdML6zjQWBMhM",
  "key30": "3w5MhAggTMEnapzadSkJ5Z36W6978eZaXG1zoqatemo3JpkwNuViU2eXwsJiNHvn6cRniU8u3fNZVtLXWhmbCjKY",
  "key31": "aDvgz1bFrZZoJQSXhoAGu3Prk6tnmhQ5NnYqipyyQ4gWizrMWatEajvtgRRWYDKfQy7Lfsip8aeoCGq9CXCjfwy",
  "key32": "5ymefrwmSjUu8jFHfJ6qAuRxixVQikmP7xkr7bn7TTdu5P13vHYx6UtbnsYEp1MvncXXzLxFdrGNyApfbf1BnSSa",
  "key33": "3f6MgF3rdJ3h4mPeSB3UDDcizHc88tieAeZfWszH6kdZ7eQYq8iSEndbrj8pG8KeTMz2vnLFQVYn2ddPf4Ppo6pD",
  "key34": "4rLKDpyrP6bz3nrp3YreTFxe3zSSB2BvchoVdhH8KrMgEDTmBCrkhywVrudJaRYN2xZhur2Q2QDXGxVgbBWC6doQ",
  "key35": "5BiudkNSiKm7Tt3GrVhYPAH7tbJdc83j6CJGXLAjPLYQqS5M479TH3HEYz9k3cWXqRbXBw2i25wrXz6tmwn4qexy",
  "key36": "2HxegrX58nh5inyBWJCjC692AkQsL4Z7wvBUcjGEvJRd95ivp5S6XpDaPkXhMKsnLk4gTpB1e6dR3BTaMTBV4wwg",
  "key37": "3yQBnsHvLV2ymb7Te1G39KbPdD589DQGm5hEtrHrjwHHqj99B9GQkeY1SJrSKTgGhytJiommLVQwvxgbacGyvsSe",
  "key38": "4ccemYrxtK4E7GpUo275jAPm3cdFLk3JhWXAw33TCGW7D4iDKQuFQV8Qxy8fYKuLCyTqkabE2giQsHk5uv4CGso2",
  "key39": "3Vh17QUB7rifrPyCG7CihxvRSr7c5GRZ41GQdS83g4iFePtYuQ2LskUXyUAzhwV8NN8AGueh2vZUppcgbGRqzMAG",
  "key40": "5hdXPsiiAa8i96e9nXERxk6bQHxsmuTNL6RMppZFeXzHSqkvYycLGK7D4wynvreHjq5adZgNo5kuTuruANJJh5qV"
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
