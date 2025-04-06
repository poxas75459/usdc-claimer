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
    "5GuH8vee3Wjh24Cj8Mhc4M8NWQM4fRjo15vonPhtGHCKgon7Luv4P4aj3pXPvNu68Hg9qrfmULzz9eqFwrDT1FMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22SoAPeeSZWrYh8c77LpViZb6Uk7PsPHh6bYpj5QNeZa3Dn4eX6uN4ptjikxQtNAEU2RiLGdVkz1ZquLVC7ov7jy",
  "key1": "471VswkvfNeKaxR3iXmR4C2oEpwzD7Zgm8C4KzNz9zLFd3qFjkCSpsYGcwJXaxfhvPnviSEw8akLK8hPGTpQ3c39",
  "key2": "3Nj6Z8L2toLZZnN41zTpDjMtLPh1kaSww1oWd9TLzVSMhMnJUVyyC6wBaZX2Z83tXk8PKds3SavqJYaPyXweUtPP",
  "key3": "5p3PzWY3UUT7WJ1rLpua9CMigoeudvKcJRrmtp2HKoqxG6prwwFmRLGXCZsKZPJwxPPGKngesxQYamKBdSg1hnzJ",
  "key4": "3Lth1q8nVUybhERKGEmur3HQAGdCgZB5Xwdggny5eZVZ2J2uSG3LEDPqMcznUyJtADAzEag8sVYTmFnCFhzn99h2",
  "key5": "45cDQbBvKNFLRVKAM4sWznAJrk1XB1NRhMhpsJgte8YULdjFUicaydBXTSmmqDhcaJCPipkJGExLJ1Fy6AFHEuhP",
  "key6": "2xFBd4aJqtWPox2YLEk4uENFXxnLUFeDMeLKubY54sN7yd8qV333fC9iqt9L8faKB2v4MGpCtASNJPLuSetprSUP",
  "key7": "8UVLSVoHabSrCEqm3AjRgTjY4tTfATorqrpr2mDaHfQFpg6DWhmicWiiwVu9BaxXQw1ivTkNrwKtWd15Z1141zf",
  "key8": "8eshRC9XN1RDgCNGG4JDhqpmj4jpw2z6aouiGvDUnYaY9Jc98KURuG8YFnCkzw9FAtgPKtqQGAK6aQ7gFLio4eZ",
  "key9": "5owtHH4KLWLNoimszzX2kvfuJZ2K64xGQyKSH8ktxSxWgniibUYumoySydiW5fUxoRzGfyMkPsBTt8W3QuQdUiKR",
  "key10": "4Q7hhWzLT8C1Spyc7Vw5r9FuYJbHxXWsBEPp8TpJjnbfgUsshhunZqz6jNY7kja8Hfs7FtirY6qLsEP33VBrksTq",
  "key11": "5zzvKusUhGbQCqrHZEE9bVd25R6oCVkHwP7e53BthnxuChcHYeVRutYjcSqkWW4fmUPPxHJJibDh8XgoJ2MsWGvD",
  "key12": "44ZvX2uzsXE2PA6sEpmudzSdGgZWBvSwjo6a5bTZKCJS7yREGxkGNJgnRnmfH7AnfPgso9PNJELCpZsMuwn5j9d6",
  "key13": "51tiAA1rE9BFEXrmaqFhbPDqsXco1o7gfcjQ5jooATyuzmSB7NBAF6fAuXuKoAx7xva9LU34xwZ67DdujLnPAaZZ",
  "key14": "2WXzfFaVYrScF6kL28xUVJj2WKqogjkQN4dRDEAovucAVh26L2CVvUL7SqnATvSNkbPoo1Ko12TpbkHqzS3oxUbn",
  "key15": "3dpNQ7ZfCHMSdRaNzPsD1CqQaVz6XmBhYmuZYSSG3iKH46Dm76TS5LbMA8CiHJATgNxL5hMGLzSt2Fsj9t8e6gj3",
  "key16": "251Dqx7Ft5NCPARMJzGZZQBnTvaTShgdQVpYczSr58SZZwPhhVSyYvZaSmyaLrPbR2ruo8aXy2bGt7wwyRT3FfK5",
  "key17": "5xqQMaof2rX95477oB5JkMKZfwkhBQ8wt677EvM4E4zUWBQWnpY2SamBYYWupPfKj412qusyFJFLNvpPmtiyGNrU",
  "key18": "288Ni6J9NrxnRJ99Xketx61BY35N3mbeak7nh1MNMUAoANMkPpk4oj6gyLYxTA86gMpM5HczUzKgmHrqq38xSZ8m",
  "key19": "XBUcCkwbmxwHU4WFYba5yuCfyfpBH4Vp5hrx17cuqRp5MjBhNrZPVP8wPX5Sryn9F9z2FhvomCVnTz5ZVFHycFE",
  "key20": "3ESSJs4J5nYVsbMv9ws5pTKhT1kGzudSoBiYn3dujLXT8wB7E4ZZxR8zoWXQxqNMvwGqszrH54xiCom2PsspoHUT",
  "key21": "3b8qs1ccqrSLfFaF2r8DGpWVxqvjZTRNNFXg6uKvLXxRJ6Y29a2ZzdoFkpMJfTTyckMQAr6ub6VUhVAoLWKktY5F",
  "key22": "VULAXnvvUaX6Gk9P1jGDEWDjSnpPLXDJmKSUFXwnD6vCUCDnXjep764xVPcBBTpXyzNaoqxTtgTy3KX9RbEfMJV",
  "key23": "3tW91bAGk36i8xvEHmKQwavN8YKK7GqJyrLRzr2Bq6XeRriSpSzPGoBmmbGps4qsHb6KWS2BcHMgmjfjfNqRbVrg",
  "key24": "2Axp1cRBmpf16BWLdaKd39QcdMXkRZKzS1GgnkpvbDujZTfnYnuHvdHD3YSdh1NvHV9p5QvP2sph58xuEq241oUK"
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
