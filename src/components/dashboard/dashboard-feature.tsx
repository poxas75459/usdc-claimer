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
    "4vPHRpXRB6a9FrC37D5mgEDrQiCHDSk6z3PNaCCp78TNyH3uoGvScaCFKiY74kkvc5EVn1VqwubXBG5fF3pRUsmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ESAKNq4jGBvEg8zQoZ7Gbp7HbCy4F5udzzadQXfUyLZ6WognEcQCUoQC8zhAf81KPZjekaLqMCVAK4HYJfXqmai",
  "key1": "29kGcrJECzGmAH2CVrLDM1EZUiKHHe1bThYAVixKygmZNsrJo7Y1zQWao5r3n1UvevUaEN8Z5Mjr2Bzq8XwYAXqV",
  "key2": "DCtBkFzNg6PmRSRd8uBYeoU2dm4ZGpkBray7tvzDdU1ZRy8k1F94Cs3HV6rU9A4yWzXqrFVU4V3iAooc2es9RiV",
  "key3": "2FmPBmV6cj2ZyqRbotD57j1hiWYCUvQLgXMYtQVWE84pLDeLAXdPTcdGJSnsZ9JaoxXqJuyPJXmazN6bsEGC1SSB",
  "key4": "35cWDhiQMxRXr8fo1YdaxjoDzdZwo7S2CsGSMvr5KcxCcygdtLDqT4xKuYEKc25TJoHL9TBuVL5ZmSdA6iuo63dB",
  "key5": "2bjzrvfpHy9U61vFCHEYz1UYkkRmebEjpjQ9N4wYu7o28Xjy4nsKwn2mjnzf6LSLeFQooQkA4xNpMXTLbMcDBP4z",
  "key6": "5Mh99UXT8e5SqvHLgqcB9dyiorhHyGgZQvuJiMDSFC8pNiZbz6eSz25bhjcqmHJmfrjMxwDxzxaSV9LEUwqThSn3",
  "key7": "27hMDyzmFs3UCirD3bxAZaUhhui8Xmk7YLNv3V2eV9JbwPR267WdhVrYW7b5MYVnV28BJCrTSDMvLU9mpSQ6x2nZ",
  "key8": "3SUkPUoecrLGe92FDTDr8TxHMEFAeuNsudmxX5qoY452P5oWk9tY9uMM5NZCrFkHzszeFnCkQ52YxrsnaCB88uhy",
  "key9": "Q91rW67kmgmT8AytQ5RgYdD4kDfvS9BQF71MQQXE6dYT3EpWzEv585Sj3tVvgzEf82BVrwgjy58g83ELhwdAiUS",
  "key10": "3ozPPzSSR9RHkTFQDhFBKMszxYyc2xfVJR7nPJy9v584QQhESXvan4QtKgdxs1rZWTw6A9mXy3jX5mcWLcpXnGvs",
  "key11": "3U2dxTLi4Ukfa3XJ6sFGu4PdcY6Co8X8Egk84Fg57U5euBD4rNUUCaSWS3HzxDTuMowtZ6VkHYiu7xw7SBVex5Qf",
  "key12": "P5tcXg4fkRzsoS6zM6mG4gbvvrzgVVY1xNr8Ya95ybVMVEq4sKhVtVmwtGUdio7JVKcYvZm26B92az7zoGyRZpZ",
  "key13": "5ngd1X3GVNdGYdHsoRuaWqUXdtT6uLSbniLoXcR8dfjDoP7JxnuboUiuBrvyQg1fA47uKuvCZXXV3tzp6CatrjcC",
  "key14": "3qyq6U7uqhJ3kVTAtqFmVqhMRgstf49SMwvwm2pm1vHqDayaoyQRmDih13soK9GfR7AgBFz6m8N3qn7fbmnK3tW7",
  "key15": "LmcYbfp8FZsq2uHBzQ4oJ4NNuH2zcRAtqWu3eqjH8BgQrVTDroJYfLtjjBqbWne3W8yWfkpYkzGQ8RdD7gyd1FV",
  "key16": "23q3qVZ26jZ1A4c7oeCSFpktEVsCpJdnA1BjDCpec5JoDqrtkH64HQSuga8RexoCXRThXGTqBc4cJ5DoqPKPrRm2",
  "key17": "2TpTWt3fSFECHZWhVWYF54CaevYY4UN4TzeEmVLAgummHVDNSsCPSQTWuusyeSL1mgr4U6bpDQo5qkCv7rXCgCGh",
  "key18": "4Mv34C4e1VATUzaZ8u45s6gGrgYvJqxFsKxAKTsCNEn3y81aqHRqJspLqUN619V1xWDdwsesZH4MsUww8udVd5Ty",
  "key19": "5QZBFRgw89Pgm3ZduApeWZ9tqqHHs4bmG6ef9W9zWteKziuZFZHEsLdQrXrgmkkHhUUELsUbBcCkuBC9AC6TfqH4",
  "key20": "6oxjhupADELCU6nrUDK9ouL9E16QMrCYc1GZQiXfg4NrZmAS3Q3YGNLkLtNjJYRggy1qmA33xBH5rD7cxkpGRJT",
  "key21": "2KpTfiwsUtFkzJYenvs5bgcjFQn9dA9bohicgGN89W5g7N71fYF2CejyyHb5KRWGzZnbuQRvB5o9Mg8tyvjYLqm3",
  "key22": "2JCGg4Rn4gxQKi3iJSTJCZiGSqzT8m6rkoLopBf4ZfUGxuWjm2wysXCMPNbnEzpuo6B39xC58gbxCZbUH3QT7HJi",
  "key23": "5VCsGSG71G9g2WEV1LdcVwtBNH9UAh5RrP2HkaKyo6wG54mmDdZMSrKWuMpr88nXcGrU35EGP5W7KTympmCAbxoJ",
  "key24": "3G2Etz4b8qFcVfxvfM6iDD2cPjUDQi51fiCT8TjWo9QyqnCWq5tQ3G4ErXo4Ztnyw2tEfWR2kuj8mWYYWpc3RzNt",
  "key25": "2s28YfFhgBQT4vhfXnawLgZSCDmbb77EXA4AU8CHTBhuGZ2JVtcJuunGThGGveoghvirpG4TwFdiXRrC9QGRopUr",
  "key26": "35ZUi3d73mPZs8G1vaRZHBCH7JbLg5sq2FTiGQ4YmqrjLLqXZZRG2dn2j8yHtpZgNxeiEt4wxyrvFYerCJxru4T",
  "key27": "3QtZMU7VcdVVVGXRWeBBTe58mN7TGB2gHe788mnLP6vQJ9Dft4ZNphjmxmeaTrbDYCmbJsMVPC1njzDdHQRr2DsM",
  "key28": "3WZBdStZiHWR4xHwWKpn1WbuQa9qGNv9LsN8a6kVHSKoq2K7bhr72tai5knmfFki1PpjSo6E7Gin8SkaCGXb829P",
  "key29": "2A53xgJSWPUjku7tDG6QdMv7yTdCcCfPYoLr6e21ShT57ttoDvSHk7ZFxF3PjbccTWi6nekFXUmoGYdUGggn3Ens",
  "key30": "2N32PaezetkjDtJmbKRzHqUQJnfpEYsmTudUrq6Lpi3mBACdK3vbCQrAr2DLinwxsYr6koSrD2ekfN5JZ61GatP7",
  "key31": "2KP8GHrjpzUtJvTYjVCguJt1e3kmRrWRJtwtM8VzqfBNjKypBNqfeUrE3vBtcQDcrwVP15HGr1vwFZrF3CDcRWwU",
  "key32": "5krAPqpeA2nD3P5rf137Pa4fchNYQNa1BTH13B6B1ynrC5B57kkM1mLgtYkLtgYwdM9tKPvEGTWeE1JpD79bDNP9",
  "key33": "4x1MaLwTMCa5zC5acTXANNfUh9aVKebHRZhiAcUr3sUcuLYv4GfsQU7U4Mzan6EWCn8sQN4iprVs7Pj4JTzbfhKY",
  "key34": "2nPPKUvQp66h56jNYgR95J7VwDKDrnBFrAPFzjLRQyuJEikgyM5BgzZKWiu91asVxx7fc4KZGXmfq9jGWGkPJbi1",
  "key35": "u1p1jaLUd3rpEHH6LKSVbMiRUWRvjbfhG46V3bdwui2noqXNZ9J4aMnavQzwPLxGMnL6DbdUN9jZWMJRd4T9yhH",
  "key36": "4eoSmUKQHSHKD8rbqYVCqfU6WLuDPcd3TS97fq48QXSjayp97ite2T3S3jCgm4Zf8jpRyYJ51XbR6qGQaosKiX8R",
  "key37": "ubwk7tH86so9DyQgEWBF9cDrmeEcPgpPc7rEFdrUpEYDjNbaJK1xihn9djz9n6C1ZNb3EoDiyPWeHTbAFuwH6ay",
  "key38": "2n747Wf431nzwEWhx6CxLddw7CXV3KPvUGTTWHPfkYveKBTkm5F9nLei62rZxKVwoLKDqNeyEWTWhJ6zHD7kuUp4",
  "key39": "2BBxEMvRhhJNM5H3WUEY4ZMmHvW96K5GgxDLvcJ9XJShBewGPXdEerB9zryWJccdTFJsdLg7UGuv62jYupC3rnHc",
  "key40": "2w4fXrTTQYF4CRmsWCm4hz6Uy7JxmAHimpQSnghTLr3GZiQdWjDxbukBLBKEqjhKm77Ve7T83GLSRgDS5PKMvqd5",
  "key41": "37AZxkZeqxjYvicHa4iwiYnnhjVKFm5PegFum8VPtRDh3mj1wSkxjT6zwLQdypRZNY5p6a9ncNi38KLcH4fiW4vH",
  "key42": "DVUYKjAf8XwGeKZt4Lm89n8RxY5i6DVAE42ZVMvxixDuEBZtV7fz8nCASZQdUSSfpczweSdeQUnssjjtSwEXcaH",
  "key43": "gndwXbJ8d4ZNvCwxX89tnYEEhi8HixF3tbS3o4vcNeqvKJsXzsLMgkxrWvViLtJTcxN9k29n5xSpH2h8Zehqhp2",
  "key44": "65UQvRHksMVJZD3UaTcfNZwDFTJTSrSa7ZY16Vrfu7gRhM4pFJaoL22wSfAxVXjHUCWVHsvJeyXQ4tUQzr6Mk3s8",
  "key45": "4stiAnrinVtiWqMhai4dnebm5LnUfXG58SPVfXPJo8fY7k1qNXCi8ramm6nuAvTJwFXzu2vtfqoksii7pBGULrUF",
  "key46": "5nkfGBvRg3eTTmLfkMfbtYLcv3BKSYZr6YHTgakjhSUajM3YSnnmHCjcs5ZpsHobjNtScyWckVUehEpJY6RRGunk",
  "key47": "yZiSFa8HrhK1r5tHw7dE5Cnjr1s8V2uYomNyZ2tjcmxLGVHgz6MaTzeY6upW6rFnCXuerLvDwCy1dcdyt27Kz53"
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
