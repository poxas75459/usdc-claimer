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
    "2LGuHRVoVztNkg8qJrFvnQktxSqKLsgjhSXMHDAG8UPT6ZzQpL4hNX7Bdu3TFJ8rmUbyeonR6TU7UDFNS89jyK22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SfpZLJ9vjVr5pPekkRDfTh2xgsacFhR7Pi94xmvkcFqD293KUZSHsb9AAc5Nj6G4Xe4mikcxy55E7wSn3zRML1X",
  "key1": "33FpLqbqk1NKuTbN9itLZTPWBMzGbyLrg4au98itMxnoFazW4mVPSeKpf9aHE6SDSDen2vtvWFDEZmvD8QJrcjDV",
  "key2": "4SWbJ2cZUmxWHuGdwmZihqxqwoQvD135s6CL2iof123RiKKPLK7S1zhwDaPk41ADiwZDsropbGPCGkP1eZnu8PpW",
  "key3": "2yM5vUnamqG2cJWzzd3qyd7pcXFy9zmSneMatSkkPYrQ7neMERFXPAXA1UxKiRPwnvxyLXEHworgK3ijUd4mVAaj",
  "key4": "m4Bs23PvT9BXChLjDvRtcPyMyqdpNjRnurt75RYQ8da5jKAv4339DwsixB7iJq5QTXPJWJaJpsqv9yYAX6ZNrw4",
  "key5": "2u2GB7xuwBk7VkVESDXyN7VjgnPCxorx7yDc98UuNKncfkk41QZA1eho5zaV8e7yVwJ7Kxea1MfTUT8atRcBG1ku",
  "key6": "2nw42cqbWGotx21syWzVLBkMmTTPp2LMbmcT5EwLqDBvZNZ3Xid2S4ENJR7nsdXPeX3ozMYnvmnTFxdrhMtbYFgq",
  "key7": "XXQTwgsfJpEF7XRSexSViANzkaf2zDFiwQipJWHGHvXHbACCD8pRsTp6Rg2mMacYWFkUrBYRwdNaQ17d1kdV5qf",
  "key8": "2QtUm3TWpXrnQUew26Ha4eVZATuasdmPjMDwy6VESowpk7xHBLx1kHRcpARQxJTqquDwE3zdvmjdVoCqdhiYaS13",
  "key9": "5WdRmYo2TgxHnyVHkQKeKR2AXAJHjhRz922qXhQe6DF2ogZPTeRejj2kSpkx61qxXtgwqx6wt1VeRFsZ2YjzMvkE",
  "key10": "KRvXbAegbZPWv1gb1nFsJ9Qb6iWKwqQHtNv8tHzvVexArXjx873V7HPvKNG67Z8Y1PsPU4tZWKivZuuELexmuAT",
  "key11": "3PiUiBJiS1AqwvGLjup3wLyeQS3DH8WnfbSVp5fsZyZTLGpKfLBWgWpegh9cirQEUjwRvuwsUseAuf1YFPZYJyUQ",
  "key12": "t3bScSP9io3b4QLFFvemXKyQDjB1EWVS1UjpvyMRyT1s1gRWzJbrqqfq6JYFsBy6SyNbZYvwroYtyN93LHX4ZHN",
  "key13": "3vc1gA1F5t68ZbdjBq9jC6aZxocyXxhsDHD3eBVeJfc6XEPZmUgrfHJoXEYF85U9gBfkJKgh1ceJYUUYXv98JGsa",
  "key14": "3m5dVruykiF7Zv7aArXZu4wHPinQwKgpdmguzE2xXb3ZharwKQ745Pw3PbuWXqr4wdkpqMi5eF11QehnWHuF7KR6",
  "key15": "DRJoHdgEzNXYbaSkUeBPuzGfYzM6zkQcdn2jqpDfvcz7PiVHn3MTRf2ajh2C1Ut8knm1j6RJ1uw7541cdVcprib",
  "key16": "3Vo1cVrCAob4bKvZ6es1JgAgAtvZdh197B5K9FFHv8KRcGTfTr886TeVBnJNA7qMsnrzToCjdCVC8UHWUNuQawen",
  "key17": "9bpwnKo3JgoP52NjM82A2KDtrLBYukdhriLwDB3hvHL5NpzNoeoATuGL69oh281kFUu3cWEDGNnQ5R9ndNZr34f",
  "key18": "5YXTLfpx5jaEsGvyRR7vozDawtJ4Byy5wckGsRTDpKdkwn4ZT5vun54tZFw2Vvre4LadP3ooqKzGfar1sj9ppw48",
  "key19": "4sZUhqC5k6FLwB5yY4KosyhSDswJGN4DvJiq8jtgBNNUjwkjhMUKUNV4HLkgLYVeeUUsf9B8YCoAwSuAZhNtdLC",
  "key20": "48mihMDWFscRD2L9bX8JZAUoS1pPnr8YahSEygLQCEn9NbcWfUfnqk1wemrKED1ANXTjo7PkxuesEAWoBLALYRAN",
  "key21": "61PM7FE6XNBmiRh7SR5CoKLe24mrbpoSEXWyiZmErb57LJFfzofcqH8KwWFUw3v3F5MKkZx5bQRpSJn1MD4cm4JF",
  "key22": "2PG4BX8puhei8r4hUWF4sEwQuGok15Zsraa3ZLDsjHWedG5dCLMrWmVfFzGqQfXwUcxnQvjBYYq8dA92kYgDTvoN",
  "key23": "3XPD2i56GagmsPkYM54FhNfbm1x3wqwpdho2hccft2Zf12Xnx4XtYUJa4ApXh3U9cysmd8RTfhpPUdDNbS6fmmiC",
  "key24": "5htApZczkmYee6KtM11PpHw57UAEmWu23QqNV4YMkmpM72doSvSevGGkJNPiiSF9CdgoRtDiTvtxXiDoKTnvysKz",
  "key25": "4yKKU8VrVZU71uk1sXN5KCg9uAtE9EdQCt6SG5My3bVZ9hvxKwqGzQ4eJeK3d4Ph7jBkXBE33XMWGqynQ4ufxKnL",
  "key26": "3KBk955HeNrFWPviKnSB9MLUXCqiLRjkwUGcSJaYdBqqz3rcjtW17SbNipjGBJVvsHhQSCEPgHCZGxGep8mjEV9J",
  "key27": "ydhLy8JtNfED6SSnymEnWKWFC2Ub7AxGrNHTuqhV9AkWvcmpNmw7GKdc8V7EKnRbcBZvcwiPGmWCixcg3fXsPa2",
  "key28": "rbMcjkgtrN9wi2cvqTQKzXB28f4YUwDdAK3bhVy9c5NDH5ppEiu2tYhYVgze73oW555591d6URwNp3hJjUonwtS",
  "key29": "4L6MnAFH7BMhwETXN4Tg2mB7Pu7kDQsT4b7YSp3DzdWHSYKLz8QvT1yiSZNDf5vvV4M9gLWbUiUNgqJvKHHUk59a",
  "key30": "2idZpMB19zjamcPWWsRieFuNiBMAtEtTQWXjaENZnDPptrFWKun8neQSDkjdAgNEEQACh3kXQjHm4ABJPv4gUJxa",
  "key31": "eCA7BcH7ymg1PzMLnEpJ2ekM5N5MjKDTUyG3GwmPGMAsK7hejATNB77aj7T1ozMZnuAaQKUyw73W4Tssn18gXUb",
  "key32": "36mynWsYc9wymdkjh9dzqRuYXRMPvZ8xBa5oBfEJJyTNL6PfSwvyb3SpVYJs1BbFFehLRuomw6ahkYquLtP1aTTQ",
  "key33": "QN5qazCXixKpCjJ2yBKSRdV8c7dmyJZCbEFUmQ3Ee2tKkQnsfwSCSgyPMpqNXJwuoBZqBH2EtVwhrqWZ3ei7R8a",
  "key34": "2EgYTPNBW7X1RfcmRw3PALSGc69nYNQaGacnqDHFmDsCk9EGto1vff4EByi9muSwngGENgBwnmzUnMUy7r3j114N",
  "key35": "37BbgsUNsRVTb8k4sNX8Kr2pUKnQP1RnYzKdh5ya934LHAM71V1iXDRMceFJNBoSad4KsPPkUq7C8wxLDK5bBBV4",
  "key36": "2yn7qpsBmgTA9aARYiLcKQfS7xW3UqGsDeVCh2WCY8bPNGovYDF3tc1UuJiLSLxgkkwwKC6BX8xFq7WsBTmXPsjJ",
  "key37": "5hveZz1fdXTbPnMD4L3bHecxc58UoQMKuYeFbQxnjfP8bdxEixJXTnC2jVkMDt7jc7Tfqs9ZDkdeSSW4PBS9REDW"
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
