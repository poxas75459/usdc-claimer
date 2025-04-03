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
    "3uzKzfKNUxvNvCP7PQSk4wJ8nnzMo3izFiYtpgLvZTCXh1yd6s1L1QGQKWKjLEhkpedSzfnJiHcgGm256WRfo8jR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KKZxWVsqHNNfDFnVtLdhpvhLzTjY2e3xNB8QMGqxjgkGDoY6JuAPUzk3o7kgNmHJ2nBUpWtAsDZyTCQ2JVRktB2",
  "key1": "2fLRdYCxZs1i7d5NgnrcRxowDCQikvkZQ6vd1MauNkKH14ibZb6Hr6HQAwuCj8UpvgZrRXDsRke4Y6EktuLVRWgk",
  "key2": "3jgri7qXNs3qPRnEYyTdC3dGhzQ2qQMajLQcQeWPQ3MCRvvebCtJwHUWPSqZHQEeCTy9Dx1vRWCu99eqzW74t9JN",
  "key3": "4xeVJ2AV2uhFme1zjw5P7fMLRBSdevMYNjn1jVeUpXzEmgyztuH8CMiP7Nyhkf7c4QS8omW4XWJU75NPyBe67NeW",
  "key4": "61yVLufALZGo8PfNhs3uYb1ExN9fHcWLmCTAokdNCkF5t4AFefdeFgSgXZpSBf8jhbMm3vrUGy3FkhqreyCMfe2u",
  "key5": "3kyG4iZ1ep3UJTjesHXMvkNiyficiUeVzi3xvXCKxGgQKUnMjGjP7zvmVYHmVbHRyzQynzsYgjpBhhLjsb3NT6Hh",
  "key6": "LKz4nNNfdYXLKcoGdwWSaXKkWZ1QqF7Zr2Zyzq534muSgbtJ7N9gfJtoXTFfRXQBpCP8YhFmPxSFBRx3ef5an6f",
  "key7": "2sLSdxdjTB2KwY3Y42ppywrxuTcGdszq8dCyRmmU4btWR5F7VobkMVkjmXAodHvxXvqYLGkmBmWTwUDqm9SfgS4k",
  "key8": "2VRV6Y7XoBAPSBVxKv1hCM2VtZYJz9mbCNVLnYLbHBX2XBG3V2ywFqcB2TNVt5C8tWLMh1LsuaTQYiruPdehR16W",
  "key9": "4HbvsdmDJtUvPMoPu7fKZ53Cnx7wRmZnoZHjDYaSVGfsb34Hr9p2KcrtmUZaAufET3krCiaE5bWk8NaiC7ycbHoy",
  "key10": "5fxJHA42xxxiNZkYEF6D4MUxArb9PrymNFbonkJNQfaF72TztRcfkL2oedpwuQjSNi47HK8uK9QV3azQQ2Pe3R9G",
  "key11": "3En3UuYgFKwXdqucrPvgnjpMMNAxsA2HXuhbib61egaUvEesksjfi7WLAtgVFVSwzknrcGm2HgGUaeBmCdHrCAQ6",
  "key12": "5fFcWcyCpxdMbUzA2REQHAyjXjwuqgw7Nan2NSm5Yvgij3DEAZU8X5JvqorFapatwE2kLAYAfBdWzpPCHgdQtMGP",
  "key13": "QNLXXhKUkKEPsSRQo1Ecu4QDJoc8fV2YXGbEDedR1rPkJB2rRBg1yXmLpZShnYkc4P784T9AoJ5y9t4NZQ5g43f",
  "key14": "22GHursWevn8w3HgVNrAZdn5Dq3p8HD9zWh9YR9sAC4SwA1nYryixyj7HaLs18suvgLTvfGCkQL67xj6DG8wGebJ",
  "key15": "3UwfBsQhkCpLECEsLRfGTh8FPovDoGV4yFZvdLwBTasR6KJyh4SpFufE6uUV1HAcj3uL63Ht7ApvDrCTintNotij",
  "key16": "4gp1xwnrxSuu66MbBAwB4MpaRhcHP2By5uLkV3qmwvXUX1AqtViiW4hXRa2ABUYUkfPW2SqQCtACYXNWeC4n5zDe",
  "key17": "4a4moCHk9BPhNU1kdV8yhen925xrwq4pKgbA8Ph544z1gWgxnA5RKeQcQnZPZaH4bGUfeayMRsu2ATbtegf21WPn",
  "key18": "5hg6Q2gYxtHfz4AW5aS8BdA1H71gvgGeNaxs657syuoie2ttn9QWHf5WHYasojZ7yiaqCdmaa9uzU7KNyjB1Efxf",
  "key19": "2DeWVG5cXYkaKa2MsdskQpRgRzwm5ex4aomSGMKggytkShPVEiD9fz86eB9KF59xm454cuEKGrudE4QDorAodiHR",
  "key20": "2qSBT4tdnrnigA7X8cjrmFDi4i5GE4BDC8NpM728Zpx9E2gRg6T3DraTuYpsNfYwP98vVyNwTEognAYR9nVVe2vv",
  "key21": "4A8X6LwJhNnB1mzcR75SujPFhYUZYe7MXvSkRFsBGX82FA7HY3aGqF9dXGm1LqKraVm8zxGAMG1PtkXGv2uHJ8Y4",
  "key22": "whu9XPqhMudJGpa43TMSNNVskM5BBwYdMgRXc2aKpaFHCWaB3djXGs6mXYwqu5Wfc7aS5iTpj5UqUgpGSKKYMtY",
  "key23": "5qDYbPtaLjTpqkv8Leq9Sh2zzhTZEYL5gWxJ9jt2n6hGDChdwiPpMwk6YjSkMuZBP1vkwZ4NbefY8N2dawqNzU8k",
  "key24": "dzEN87Ek9Ju99G5XtSbupkvyYzMWo1P7AhQDiTSXMGmPN5g4iCkMwh8vvqRaqxjT5WRSWmtLJspi5VJndmwmD1p"
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
