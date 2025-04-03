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
    "3jtsBy9EF8qSC11JnJjUWDFjkH5RPrdb6mkj82WwRvxGpJ6yqjPfSP1pKZK7BhR2hdrvHYk9fPFQNkWw8cKxCPJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nnSphx3MHdwWdnVB6kdweBeCFtdiBfB5wtWNAZDaVtDrsDpDSUPaUfjftBHK5yPYGadSmpRHcip4BGKPCDCdU3v",
  "key1": "3gM1i2Krntny7u7nNwQZqeadtAf9z3iqE2uujXTyT7h5hXzRVyu5tjWnNTaZXdKNiKwzw99r5KgxJjTYszJ3Zd4B",
  "key2": "5zG9DKt9AHEtDJLMAUu9D3CfbuepkBcu51SRzTD6neSZJQ6NzFT2GauMcRzztz8Svjw9EAhnWhU2yvANJw4SofFm",
  "key3": "7FhDJYDryTJPNHzFz4YdizDW8dZ3TrdBcH52X4XPWMiP4PxygioSmUEs7MqijkMEXvseXK23CnikHL3D8doxWid",
  "key4": "7tBbuV2EFnp5oTZC7B6U9pTXYU8i45nWtbtk4kMs9eg3qdA4xEBRSitTrDpwCa3BnErhyqusA21Bbs7kvsJ7rUz",
  "key5": "4Ws85K5mY7LEeaACCGaFJovRR6K8tYoZYw5ZoxXuoPU554DLLVCtDkPWdbTpMHrFgsXfLzwvzKda4xQJERkwk485",
  "key6": "3imc2jGuJFweB2uDpAt2E9u5Qa3AcBWveS2HAfC33gJbShAt4k517QpEVmdcNrhi8S6x6nMJMFo5dLCuJhQLewcC",
  "key7": "2EaCopcvDVhV2F3oz5ocbMtqTWPbDnhxiwjtDANBKgvBaTo5rgtZfpxbbbovnHe7GxR8d83PNJgVqvzurbVKuqdD",
  "key8": "2Y4EqtRdB19vaeExr7ZCyTqUy3Gu8UfSyyv5jkcbc1x5c8a3E4ZRPtq3TyHdoiBxr1erC37ATXqf8v8BTwkxhTX6",
  "key9": "3J3C1JZZcKzKvJ1Ucds8fmr94uaCQ6zXaeXcTwmNSvgUG5Lc8BkHMR9ySDk4y6erNezCEmZW9UZh18CL7r3vE6Qp",
  "key10": "4zfariYNvCVgY9j7deGX23J9qYquCABzpx7mqrRLN3VEzaavqVgQGZWUa4H7PRwaQvvmJVpqLnvrB42ZNQRQsXPn",
  "key11": "2xkBNaACWbsBVu8kABuXHDiNW7E2AgcG3DVsxwLzBsAXru61yrDUpD7KoYZBAeNYMqxT6xQWeWvuCgWuNxPUkLv9",
  "key12": "4hVUjnnx4LFbJqcin4UPdkVDCPy3EPSxVZGEpSzpyeCHcXdfKt5r5muf8mxuFySvrXMSgWrhAYMEoZQ1uNbhnC3U",
  "key13": "5kMv8XmYECcCRNp5ZjCHFME2Cw64FETNZf2N4ZeuVEdazcfNTipdZ7wCUdu4mmst8F9aCoapV5d1GRJgbX8WuoHx",
  "key14": "2gPwchXw5uPmiXNJMxfCTm2C6dgCTxS5Q6k7PaGJ2cDEcmRc6kb6r4k8XgNvvdyWHT4njGQkD4AooX6yBGLPbvDH",
  "key15": "4ztt8xJYqbL2JmET2bHAhFhgypjbVXpwQDnvxTwYZpRYHe7qeyuT2HVsQJJVGNDqVtt2HJT3ZdQgNJKp9yeCiMAS",
  "key16": "5hAYC9KwfEaDpRdAgbzoKCHdqhzUeEmNRXQCcQoWDfnhwNSa7xxUMt8ji7FfoeGA44Lvxii137DEcQfoe5et5nEc",
  "key17": "iAJRTmcihLA4JUJvq9Yd4EWrdbQ3BzykeZuxPPwB9RQBzC1seji2WCWJ2CDCoRfPmqNY38pZvTgLS8de7ou86dT",
  "key18": "3s1AvQbHiA4mbsZy55esKEEMNGWHNbbikYTjeCHAcrEJPD68TgPKkmZUW1cVyL4wjKrfzYpapSoxvsKKq98ExvCr",
  "key19": "25d4BowqpLDmZFaf3CnDRA5K3HQsddhsUJXYAi4oDWVYG4MMUSPXZekfLeEs8QYLhRsEsSaRA1BEA5DwPT9mVCZu",
  "key20": "2cotCK6535ZAWmbPWUVqrB5dEk2BYsDup3yPkPFUykGoiqBri1eMJgdUPRveuP4opeCLQkNeXkQNznLZiqhBWqaq",
  "key21": "2FYid7vMccpCYMU6BP8vkXPkTmhZfTAiEbjm2LpVJoHJZyV5bnU95oemm68rNBg79aYU29296hB6fGEoNtZkk26T",
  "key22": "voxQLcC2ndsNZ9UGxsgEYafwky2sSwTp2giUKSzNcTBsrWYPv12gFK1bE88cbBWCNUJTMkQ6xk7D5hufJGABCFk",
  "key23": "5HaB4dj5BEvJJQZSs8uhM31rA1XJuj9rGfKHKABAprof1wG1AYmJAAtW8CBf4jtuhJQ6j8hfAZf4ZY1C6X69nPTQ",
  "key24": "3rLEE69BNUsHpnVPiPV2kAtgjPQRNMRJ5adA529d52o98unQ33WVzPKzyBKcbybFdJKvvZ1bXtTLiH4AS8aGNt46",
  "key25": "3WEa6t3VsuEK4jL6Bm3HnVbQ9Ct1QyEXzjoy4oDrqJRsi483QaJeeHC4dxeZ42iFE6JpSaugxvbsx68N3LBtrh8T",
  "key26": "2Fhu3jCFbGGjgcYXBCpZy4CqAf3km1XC2tEsKQPwF72PravoPxqciunSk3DFJYrqhMoP5JfQCmdNpXu28xpjuhLk",
  "key27": "5nnheFZM85A5Zg6SxvTtmmMpxJdsEFTHJhy1SY567j3TmmJHiqr3BudVXPbvjqz7NUAaVHUpQV99Ca4npoaNYboz",
  "key28": "5WaycsvoT637FQJ1C5oVjA75Trs3R5Pzr2pWtvXHBxN6GniPRFkJSUQaJcMXUEwcK9YZ9VeJBAnwNeaCUySwEA4T",
  "key29": "3RDgsK2Q2B1oHF978TQkjVrBzjiwLP2qQtjBKricVstPATEdE3LWVk2n8DSFTJwTSJ5sVHmyDMYigVn4RJQXHTqm",
  "key30": "2bQBGDQDtEUDeLDNh1vwXAzmKiMyZsVR7ekQRxGMx9vDJ5TDynbY3UFzoVeKZvxzGmiMQ1Y7r79oo9YSKp7VmUi",
  "key31": "62Qbwyy1ChTZKfqB3Yi6BuTgD7hgBMC1DJWR3GhDqj5Ey8o4FEbCspWf8pFuL1RhQohg8GiuQwu9rz4vSBHAv5HX",
  "key32": "2iHTQpxxXmJchyP67DPxubGHWb61P3ETvui7L1tf1qwQYmhy7sLXHqY4U9feDP148er4jKt8uzmtK7TjeWgoieX3",
  "key33": "Js57GaNLxTfuNyWWuU75Q8bqVWTreUhGZzrusBhmPebyzqB3a33EXFYgwqPAT2TQrwWt1qg6aVhDTHN84FnwnNW"
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
