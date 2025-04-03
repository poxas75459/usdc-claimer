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
    "J2efqgsNf32S5jX8v1mvTAtqpZhYWDXnkBHo9pdetRxWMTYh68YNYBwiAbyfLwP2if67tzpfZuup1HmcoRy86to"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gD1ebMHsAjA8g68jpzvt6XrDWTetkprBVLXNeiUXw51HGiKiAd9JJUt5f9E3qmbYRGiZCk4qFQpMRffpL2ZaymA",
  "key1": "54putwKpLnCFNgivCXxP2bBgNeJZ81ZgHBt6YSSUgUL13riL1e1neCeudgLib2RUxiwvDqdnDw95j9YVmKreWxJT",
  "key2": "usc8Xd5J8oqrjKrradGVi6MUadPJkiXccamsiEAHXK37ZEhmqY4tzgx8T4Rcd1CenoN6sUY6RYuRqK9Z4TdeN61",
  "key3": "61fA1xNVXxE4nQMgY8fW3HD3gYhadA7dS5d7yW8G4vrKvPJztMXEykWSD8hjot6fTxWvVms5XmaPrUPVEwjVgov9",
  "key4": "4gLvwgiYhUZsCjuAofDS4Hfa38tYY2B3Hix1gLSMfRZLQcuyty15atNFpgGzckEGm3TLhmmtYuyTMQ5PGPhmq4Yh",
  "key5": "4T9brQgbtshVc9ydMPT8u1u5beFVox4zjKHhyqcx4EiFjhtw3SwzM4RDZwkzNabvg1fpM6xYtFtgScmwSCJponBt",
  "key6": "m6osnTUFd4Mxk8Pu3saQQHKECuxdLWHK26sPduEqJ3sZaFwXkWNfcYQmNKxTKDpXpGaUumYzwiskkin57y4xTVj",
  "key7": "2HuRnqJ9rniYVi8BggWwDjLQfvjZzPRY1HjpbWLHfu4yECA5AHCEAJuDQZVnnsFVKAtvVUPri7GcftiGQW7h5Yhj",
  "key8": "3aQCZNoXDu3gHKgg6ebxGTACpKzaDEeY4jRJD2Vg4qMuXtF5wDV9qDD2YYbsG4vgxARWqEvLHzciwbeYvDmfbYrs",
  "key9": "2uSuvzdXCZodubAbrcRvPhHu1AHpqPXpYKe7Q58Eom8xgyTdHR4wekEKFUVfXEADtiEofz65DfHK1BYN57FZ1qLx",
  "key10": "3YiszfMzzj9ksgiq3HbFaHRH7Ez8SUsFCSAGChWmMassK2PMivJbC9URwdmSSf4D899wK9fRrVcnqwZA4gEdgq5S",
  "key11": "7CGKY83fXxJPA8QR8KdSdSdEWkFHfuNWBxqLpohgU1b9EHk5BCdpHBCn5siFKj76V3xshEpe3DoLmGFBnVWfKGi",
  "key12": "5SUQsTKmPaxYTeP1rFKt95ggAAfwRxY16rthg2Vq3Zi3JaMPxrUT8TmDumL15Fj1rGcKowaYUUTCmSS1YP39vyjX",
  "key13": "3ik7tujeWADB6qbCPRwL8GK1WQ97gZpCvhwmFrWmBraPphvyhXBCZq9Ta56iUreJK48gPYxaaFSnTiYqLDhfDhFK",
  "key14": "4oNH7GRHuR5jj6nN4q6fobokFaUK8mvaTFDZRmBJRXq7EvQSaJxgz4gKjSUQgHuY9f3rsJ69ar6QVF6ETtV7Gfeq",
  "key15": "4vejp1sUDX2vjE9TDpexPCnrchHuc9V5CfxRa36JsNyK1HDk7m57M9iDYsm5ahGcWpCFfrFAME1xUCfW7JUrRGBG",
  "key16": "BcdoiGmtMd57BXFk3A8qTtvASREQYuJbKSQDbcPfSNkwKaq2ky411WxePTTmwDX6PQH1nxaKGACV4A8YDgoUcp3",
  "key17": "66TKSJauEnLQGBbLS9mZMh8zme4vkEtJ1stndbDZhimEBLu8BBQTkiHCg7Sqnrf2osMRM4TPhEAnPfzG7DVE2ndh",
  "key18": "2P1KMPMSvpfiDhdGTRNYGob3pRqeS5KMXRGC7zxpaCK7QW2DDCCRo4a22jNmohrJcLn3gxPfu1ENhJZsdVokgjra",
  "key19": "4jvf3cgnQx8xJyU2wJ7JpjMUr5n5Du3CqCG8PCxm16sdACgmcQdsAJRc4UTJ8mYc8iHJ3emURaAcpZdNqTqp29cR",
  "key20": "2qCN88hpufY6NXjbNfPhHU7VMumQtz4FryeT5u2zwB8U9p2FZvEN4UcDiXFts6x71EAfAwW1wf4JepDzrHQV6uy3",
  "key21": "3tuDDRhAyRrmbfZ6mMQQbRMnQLA9ehyCbWh35htoHet6jVL896LwN6k9jTjbTiLJsnx5W76zkvYNfr8CCtSo6fNN",
  "key22": "as7PnoMks1MJxVte3tHHRv5y6oLjvMkRYVz6uoppb1Rro8fyku5pMDkMQdWVpvmB41jdBDy3KxLePW1CF6khTGD",
  "key23": "3BubsEpDNojjtPpDs17skchmzTJFi5FmHXr8g5t7ZRTApWizE2k4HxT3NA2b76gMYNs44zUkz7QgTRbPmZsDUWtS",
  "key24": "57DC7CmoHKXWVbcHkCH8P7grYwAq6ZNWYyxwXJg7xPrQznpAcDH7JHEcCggVoUcFMFUDC4otBtPswvBKyNWP7j6J",
  "key25": "46ojofp3NzXX1egdYje19pR4HkQsEy1yWkDcHjn5NH6f16z8dRjFbpNgG49DNuqgkkLMwV8tjQ89LQToZEVAy2jS",
  "key26": "4CZ4bX2z1tgepKqY7ynKKv8mCK1vBZZrS3sRUpWUxaPLMejGCb2Xn2bf7b4YMKVT2D4JnAGyCrNpkEenrHmaFHjQ",
  "key27": "Rr1WSqt8GVHfyKavuoG6s52eXpSmcHWbiP5oamEZhh5vx9M8tece727mn45GTrXAXyeSWvA86jtw1nvfQS15Uvn",
  "key28": "j3kHWoEizW99Nn68WjWLcZy79xQMa7BQXLLtUcXb5Jhmq2WJ7AibRvPgUqWwDE6DASQ9RLuVAgBE4tTQpbPZug7",
  "key29": "4wxQXCMV6wMC1yD4euvNuuDj8A77m5tQqwn6EcjPV5Bu5JAkrkVG2g7XmJ6YEWBRb1fbCYddVu7Bbz3pYrpJLTBK",
  "key30": "dHFUYGwvNVJwUWVyxka2GLKSkDL1XujuTWQE8inhjRpMF1wkPxweeRkMUCZ77XXCN5aY36tRKoYd4cSTjNRYAvx",
  "key31": "5TFBh8BjyNBs59L7FvTUcEQWmVVhEtc7CQDz5q6bUX7H3CrpeiyDaqxjAjGyWuYocGcL3rDtKKKuNC8aXBNV8SH5",
  "key32": "H3dVH4oVW71oQY1MNzefXTKypoEjTZPfpGFrWHSST5pYwG13nGhpjHyn7EKjnwQxgtnyzszJD3YV8mDdn8TuFQX",
  "key33": "4bRbMnQvMVkNAoidh6dmJodGoM4EKPmfvPRm1D1rqoNE16SaA4BjyudoDK8ercpcug5NaFfmGZ26mfZ5sE456owH"
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
