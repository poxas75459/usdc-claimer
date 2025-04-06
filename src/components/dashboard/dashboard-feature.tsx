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
    "5HQUNEpTXWudZFtYpLD5ZDa1vpgcbf1BWTGuvKaU6cCwpm5cLXUFkumoPycWdjEFRbgkgQ2iUXvLYyAsMktJB5o3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZWSYNJ4d7p2FVoj93jqzVzUZdJqif4r9aTV2SSF7tdKwwCfrK7eiQMmjZSaJXHCqius7QZHb4tiDF3bPHJ4umjV",
  "key1": "4B953tVoGEEy3ouHgADav8d8rfnb1YctiEfJEQPp38U62hoQ1b9BKh9agxYFVnSLegRkcZSh4HjNp8b899rCWh8V",
  "key2": "MnwA4Ke4Xv1215Ka1vZ5fosfJp1zbmHw7oYHyF8jgP34dkaYtRcLLbQZnudzwcyCoqEhcQWnrHt7pyHYHPGMK4e",
  "key3": "5CWLD6ynkiQrNakDUQh4Shh3QKMnLdonbQHTw1f1uReoCGjhiAgKbVMHqA93bAVkBktsNrVCDAheLYJmsJrKrC68",
  "key4": "p1TywsC5hiYFnPQypYqUbTmPkQirogaH9V9jgvMYVmhb4crZ9pp3FRDaSWTfN6zLDGsagHik2eWGirxMpepbkBR",
  "key5": "51VdkV8CSUaeLHSdae3fpDDkbqvZjFd3zPtbXYcyiy6suZAFQDzY69pXvvysipBgK2T3iF5iyfw3D96s2g2kMjUv",
  "key6": "3KDvvbgyy9b571qFgetGbSXtXZTM1kE3yWSAhheeVfZiZtXgkWoEgAUzvTHc6d8Qj3QL1jvmUfCfYGjKivptMFHV",
  "key7": "VPG49r5rNp1tJSKRDXjVaPvTneiRGAFbKT9UGSanyDbrgUjACDoj6MikCb6cVzssPUv815vtDEbfjyf2GpMnwFE",
  "key8": "4QcfRKMdrWqStw85GResW6LKLa5GVR4PYYS9EDfpc7dkeNv3ruE5BmzAjsGsPmLxhKb74rhuvB9rmtJ48Ks6oVaJ",
  "key9": "4oQXAWv6g69TKSPeqXYeEABAtvbQyhaF9ppeMZei1eX8YZBBmWTLFW9WEpPMgh16wuSZ8ZNnht7Kqyq3kqrY3rv1",
  "key10": "2P7FJH7Y4iDrETiNgyQGSG87ujRpN535txpvc7DXcFcytjbSoE8TaaKnAsnGEMuN23A7bPB6kc7TbTwAdNeFG7zc",
  "key11": "4tYU66njge5v1QDVyqbSgRdLctAaiV2fBNr3ACcpaKTSBxpvwuyUvvsLKcg7m44KwJcAUU2yWx7aDT5AAFqk3KNR",
  "key12": "foGHdQ98vbeBZKdXJAoMw9aGdPy8uwCN4wYYMU9cXneAmpvrGhU7Ep7SitavbWmREqWznmGuddSdeg9ATrwJvQV",
  "key13": "67rUrm3PkWw24eeZmxbo3Xj1rYkf9SwA3reiDyr2cQB8BG7FrGaS1FzRNjNVKrG1zPBjCjWEcYv6Wsdcuvxnm8S6",
  "key14": "4tQFPtR1EkSoTiAirKeadFVDMwUdKJdxGSvrrcKUUrLMTC8Y8Yyo6syMbgnAz5E1XdyJfkwQ3iMpiFxWmRcRGQiV",
  "key15": "2a64T2cxyK8zDhTt5D7GpEc11SB7Q9F5PEen2pMEd7LqjyJoiNa3GKGAG4hXkWZJX64aTppcHxNg8touHXPdu3K5",
  "key16": "5Pffr4u3mVHFqJyDsMYpWuKGQVfEQfeQRrkLhGgs7eTQBbfWxH8LwKqnrPSYwGbZN5RRt5PZxdJvhuer57T47C2q",
  "key17": "64zg9ahvMaBonhJsLReNzRBxvLLukRSdbYFMBNE1KrbrcLw1aGiDfhpGs4CcM5V85dBCU9dpAea5MKUWubxnWecW",
  "key18": "4yhJP62pJnHycdGHsrfuNtZWpWyY4Qt5HWQRJR395fQSVHuUXgbXYTbvgxDXtRX6xZADkpPCi7rn16fRaqaagm6Q",
  "key19": "VtQpj4qHR55Jy3RQAVMJxRYxDPg8a2ModNu9BpurMwomVYornj6s7GeVycku53j58XddLzJaHrEzYU5x5g1ukcf",
  "key20": "5MZLkCiqF576Jfn8GBLYBfiXVRiRpxuvCq9AzsdVPAQHbvsX8LuLRnfTEVjyAhrMhTk3TKB7jeFhYUZW9fBR2jWh",
  "key21": "5Yh8muxE1vbrESLYQQ7CsJfr9z7yNMMyg18KrDHh7KF13drTFw1zxCULSpLbE9vN4JY8Wk2YUpKfixfZLAaTWZHR",
  "key22": "tNyaggaQfRP6Ds7r4AUZGMKWHzhistGGWzmNjLv4deS4467V8kJ66DSaPMb9A1e4SfWGL5cpcJ6yL83kmyR9ELo",
  "key23": "2DJBNzjz41YC4r5jQhu9cKzgdprUBqdzUTrHAdvXTNqg68ggtdywXceUDe5r5ApMLdyAwSmpxRiNxcAGuiKmaE3p",
  "key24": "3q4KntGgnc429jei5qmvxnis4HkMVt8xmDKUR9BvhaRB1GuYB49P47MwnHanKUfXttrpKY3USdWEtBNi4wEmuFiD",
  "key25": "pK3y1VT8EqsBLYiwJ3xpdgHC6dPEWDqFFqWq7c9SLnp1x5nfn3kGN2t4CrGyDbK8WSpBQKzcwih4idoRrCtUKft",
  "key26": "2MywFioJG3BFxYU1h7Ai8ZNQHgkZb465sBpkV9uEJmyxZk35rJeMWurb8QZ1wszBs8KRVKZt6eXs5TpS8AXaUSgp",
  "key27": "49pAr5X9Qf4rYGyH7T3EuGAjmvou6JB4Z1ghidk8XG4SQceNcGetjc3xAuvsP6YPPt3cxKJi4nuZrz1fnbt5mRnd",
  "key28": "zzX3qvJNC17b2Bm7nZBGrza3djtAK8b7UP2KAM98MhAmmzbg4YPQTeLcZ3bjEgfgmKJuSHhqwYQ7nSPzsncneQs",
  "key29": "kHpmBNwmviHtUtKaZsD5qAMmzip4JLqXBMXXJwh2w7sBAsYW4jkcAnCNbSHqSLUzMrZ8BAa6hdrAASFgesDVSp1",
  "key30": "pcRSTZBN6RqLv9tWf3tieGnb8SaE2ZKZwnd6pgDiM2A58D8uMLcx5YAueg4FWpxgkd12AXG2CqNwLHUkTMHywMH",
  "key31": "2AkRJhDBohUqJQhAmDQ2QGCc4iyDut68XzA5bjyauJ6L6PKAEfvUP36cuPuG2fQwBHPZpHGfTuaetnjpr2DqHJxR",
  "key32": "96DWXCBuTBvQQghyK9rW5JK6n56WEmUsE6cmiPMvXy4BZ4Bs3SVAxvPQZ8qFZPyx8vYVKXQ7qQd7xnqLz9binPN",
  "key33": "5oTjSGsaua8r8wYUftFKGuGxTt1WjFRXCFcYGPBewhSiNF1dbnCSRi93QGGeX8LgFXqAJSm8CocA1L6pTHSns9rK",
  "key34": "SGSZnYvtLXx1uWjzjNzLHPkT46VS1j7TvPjnS4hjnteKyHbscBnvU7nc6W5XEazKD3ZKd7UNjoJpU3wgicJ4ZUs",
  "key35": "5xUG85vJYXP5mQyLqQsMUd2onuWHiP47rCnJGSLHEHHNKuQqJ8EgdUML3ZKGBQmh8QRNkoiBmPcUdc38yPLSy9MU",
  "key36": "4bQcuJiWSpim7LpTPzeefBUgyyALFf3GcxAV4ZCpa4utQ4jWkFudTBnNWgtTvC11Ckq3HtYPs9GeSKa6QDY4sEWh"
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
