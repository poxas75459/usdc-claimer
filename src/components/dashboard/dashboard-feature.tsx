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
    "4c86osM6YrPyQ1d2588edQju3KwV2o78yKJBJSr52jLXHzL7SHvAzhAz5RZAbRhsxGnqawdLCNScTFiSn341VZYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sXjzNGyxHQveoJkzDdYa5tVxhMG5gPc5ywGECTDoedNHhN2p7aiPK7P5Ub2dpcikGfN8FVVZ2NmVu1iAZULYjvk",
  "key1": "58Ys5LguwoaKiSqMTWuGFYQppoq71cMzsrHo2xd33hZH5rTL9nd29dAgfhetiTwdUrxznpzmkJniE12JfA4JbDJG",
  "key2": "2UtbaRJV1mne7PgTnUznQGn6TC8QVG79BEETRxjcgvGjMB9kxBamNjxx8pYzHUDq5GUYLGD2kvrtSMwf29CRdrew",
  "key3": "66Qn6tEU5YkyFQr335sJtGNMgHPrQbERJkFP7rotaDhTcqRXWNjBpdYRLgop6KUEMXfgsumyfBre2zoKYxMqn5Hc",
  "key4": "5V4RR5PxWMKuttrshRDS1zBAqXukJnSCkGYEnJcQYBuk9VEmTYaETAXpRqd1dpbzNgzm7ZVfNo4bZc1LqtR3NYu2",
  "key5": "2F5WqfVqoCbrHgHjHCnkzW4Qi4w3DMPHUCbHjcDG3uWbwUMfoVEGD1duR9bjVBtKXUk7CPKXF6KAMZgTYsKAUyjk",
  "key6": "5WxtQKA4T1kD4AA6KsiBdWQad6NNkV2UcfRbmzTipARjZv221Veaj6CeRHf11aV5XiWMJgifGjVqxkjmACeFxDV7",
  "key7": "3RFw9GXhFp4n7Ed3qGTyczfrKiRCpYxkBDk5uHQS8YPVmkkyjUmtX8vJv44dJWZ2sTWKPY6c6cEX6PThLFHnoCnA",
  "key8": "67NdCWUiEDkDgQreKAvGBH8PK3M5L1M1L5mSAnBgE3KxUkZJsgqtaGXqp7nHSZPj7PDYKVFWUTcUBFsuA2CWSGu7",
  "key9": "3wh61MRhXN9X4yjxrMcsk89vRHpU6nvTcfbC95iGdUeaFfC3jsavqFXQywA3D4aiqvKSp6vXP4rpdyeG1wrHjKDD",
  "key10": "bbxFA4FMKXHQKSK2ML835gnjjokgoSCBWMHALx83gJmMEWg3p9KdvRUPF88fF3iLzzeiYyDssK64Tx2FaRVyRww",
  "key11": "6Nw7T4M97Sssq1CXN4AB8QYdJSEuD2uDzZ6EzRrHuLTdrxmseV38KA55wq6agWAGdGFhcK9PC5b4gxqJsUK19jz",
  "key12": "5j2NDsUW2HGphMh4GqDZHfj9dJ7gGYxXBPVYuvohZwmokpXhef68x3RrgVpzm3K7qn6tdPyKqwM7EzVnRNR1ofAm",
  "key13": "2UTHCjiVnjHZnzdHfL4g7z8kt8JkScN1BFitKi11kS15vqtaa9kCBJAoET79uDV9RGKKkKGqDL5KJTRceSvvPzq6",
  "key14": "4sQNjPGiD2naVZoXNgZruWN76r4hHJHVdm2FmrBbhNnWb4BvUZYZCG4KZPDM8sJzu2tecBwLsi99FsTkD1C61w8w",
  "key15": "63fGws489eCSBoGidsuoERRWPksyV8cVmMjXtfpy2HditPrd8psHhLFwPeBRnuRrarZXiBXXYWEm8ZicuZsAiv3n",
  "key16": "35PUghT9okmiW4FujKptzD1925U5pi3WAQHpNb2SN4oJhP5FGjZjYV28cXkd66eGT9WpBaF29ywi4ceNHAGdqysC",
  "key17": "bPW2tTmMXZH5ZQWYEdb64MvECkiCrbWCiWyNLKYLWDT1dg8E7dGmPFXJhz4x6DQ3ooPmcUHxj5dVcTa3unErMiV",
  "key18": "3a3TihpgamoerXYE5M2K6kDAREBke4jWm5LMYeFt1Q2DEto6vPKasrHiMFsDdnPMt2cs7b9Gdp75Yec9BiBFFJyf",
  "key19": "5C1ZiGQ5Wsy3LvtaCxMbaco7BP23mDkfigh8QTrpmaFMcrasPXRfNfA9W3xYcjmJsixhoMz17qUncBkaz4jPgJyr",
  "key20": "5JLBAvFtWHeDF6kK7Tcgh75SLHtH89kK1u7fjPdxXTHw21kms26jVLSijcVtQwWb6HJsu6KjoxFP2aek1DQLT69E",
  "key21": "5dPSsSPfJZUDznUy1qjajoqiJ76R1n65x3ePeks5w2WargKdLpm3kVv8vxEsVXaGpWRVZVjSRzvVaA4HixX1uYDd",
  "key22": "ZQwz62X3bzJHQ8wNohMzao8t2MYbHwuyY2N9hTktq9mZC7X1vwLMjEkNNBYfbgYrZH2xKY6NyW2oGc9toab6KvZ",
  "key23": "391wNkoGBf1hCM41iy3cUVA5SSdrkzSpcN7UZPGB2esREogKi7mBjtaL2sG3AWxNeLpYzMwfG7t7kaSEHCsNBhM8",
  "key24": "49QspqBknRv5e5Yuq9wFSiPPi6L53xJH862qAwmX2EJFALcL8pqpnMSLKfTfXh3uf5Q6jrbTkEPFTF7hTNSnRoox",
  "key25": "2cJD5yALmkbnR1WtSJ7jStjwD96ivn2n6F99DMWMVJKGABboVicmkQkvbVsj8ai5om5faoEumHz9KZ21ogvnH7hA",
  "key26": "2ULTHSfRXDgjnw9kCGFSbhXYgBn4sFGxww2R4vfY5P1PTH4EKJytoCsQ5rKygMegPogDmWmKkYU9d5mmZBS8JLQM",
  "key27": "5BzZftHRqmiuJfLNuFHSpgMMo8EnQZX8icNRLqp1WgQ2NtYZar6bEJJpLGXx8haUUhDhJyg61FzjwyWAjqSWFmWH",
  "key28": "5paMyvJR3YdoBHzjLyXviY1XHscMWHtcyand51RUXer3C7SeWMbMWJgqQjAdUUE3ZvbMYCYbnBRRE8fdzxqUzdA2",
  "key29": "5rQVdZXxnXqELQuVz7yMKst3rcHo1dgsYftYvnhXd6KV7tZioXvvTbpttNybuyCqu57TKR5nRk1SpkdbJT4NoEFH",
  "key30": "2TTmJR16Lc6EgvG2RZ1UhQ8CwByhTqUkeX587NerAuNEXxzcb4G6Cr91Xyq81GdF2NQKKUPSkAdCXUoXVx89biVE",
  "key31": "4KYAXYKDeTaLc3nDAKDBvbAC8uPT3aPR2DxB82oPdSM8Lpv1DEPnKdWYULBY7vVFnyuABmeuuy4BN8TFBBYnFHrd",
  "key32": "2WgPBef6icgFAajB2NtQhuouVZaPntRouLvAhdUwGwHyuH9gvu44RJzCDZHXFC9ZcnmsLixXzby7ujrFspUwXUzC",
  "key33": "2mcSXrfAd952TVGDXWFzH95bXekdhxXY5y5nEtSjxqxD7B4ku89BiKdq7orFuDBv4QMdKwzMxXqYKJc6SrXtisoc",
  "key34": "2V8sh5SsD86qADViDZoGsn8pRCQ7Jo7bjL71StRDWnYjdxwmvx46qmi6KbBE4P1RYESCnt62qQyQSrwe5bdsP1uP",
  "key35": "WGh84auv2Va7SWiF8oKeeseYgz2mnjJtkjSrpuveVZSRCWPgRi4KCxQUw74yCDDRK2GvobLJzvmsnWMsEUHkZ8A",
  "key36": "3jePRUmaMCEDn8Kxf5GRnJSaeU9cTYtWauaQLxxGs2RTVHZkPgKbdc63o8NxnC4WUT2Tw7EAjoyzYVDbqwCavi9X",
  "key37": "wMUp12rAF9vsUnJMGHx4EtgMne2nYp28EjzJaLxC8zm5ScCq9EWUU2ioLdVLFqLn9TDqdy2CjQcyy4zirPjXiTi"
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
