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
    "2LbYMp8MTvXXXFLt96RuqLp6NdhBCnNjqauCD6PQUrsginFUhQftDaujm69tJccKRGYKCkdYBHYteJqvRVJYmwzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "375ZWDXvmpfw75agtdJ3BWaWm5m7KjPZ1zR94opc9uFEFLrTSokPutKMGejMKb9Npr27AdvebVzsNcEfue6ZjJpB",
  "key1": "4cBc2ivSh6LhKdDeMmE1Li38hEqkqxTakFFJBorhFEqhFfZkZgMfj6gAXEZ9T7PctdoS5sHLBZEFkUJDW51PTQ3f",
  "key2": "3fS3WGKrWnc3v23EiGLGcKsUtyWph6zrb62zMqdfFqKbQuZ6F3nr6aupjR4HtGB5pEeGiA5jLkFMve4Bt6XUxnKM",
  "key3": "23sKfbchu6n1FpR1Kr7M5uWLW1S77VYkM9b2H1F6NqRmi8iPuxoyPp1UcrzTGKyV1Uuddgg4hBBBdaQJY2u1ch9m",
  "key4": "D6sKPouB7V4se4N27wLNFAKhBSNB4ugdvKGALHHaxxbLnizcijEM2Ei93fjQCyTYLBtEcaPVPcjhx2EcqZ6WHGc",
  "key5": "2gc4Rn99HGPhURVQSNE4XiNh9PFeguw9Eo21evYcwt53CjXX4utYrm3h1CwttRFWhnnnamepNUiVWgZWFbiSYD5w",
  "key6": "4LumsbrnNJD3HFgKwrZjcx1BVJ3ic3fpLGEGFmfnHQ86rcANNfauHCkwyWSoAbDVkE5HWBNYEkpmKCQ3yEtS6wGM",
  "key7": "5b5uSQbXjo1iwoj3b4hdqspjafppjXg9MBrN47bkXLskLvpFEziB7DM49Pdn6wUmSbh6rEZaYGB1PsdSiDRiwAbS",
  "key8": "43Bef5NaYaTdpjKKJVsHKKA6uGPDWv2sj3ktNaKpwbzLDV47XRXvonU8Q6r26aFsArs11FQZEfC8nD1mMUYyePZE",
  "key9": "4wpjac5GnQbav5xYDeU1N46f9WgzKKWH8Ntr8GVkqBd4ADeoVhAHmNyceTos7gK92tZM5syWyUZfjg9MVcPyEUXn",
  "key10": "3dWqfpZrBTzDqTQawLBujXiaEUFbbSfKmfdvx415SXMmg17rFaCYds2bpqgut6FMBUBCkzL1TAeEQMfPtEuFF8nL",
  "key11": "LUns3p1dmjFzfYjmMVqUNuht5opGcmezGNhSaBnUPCrj8tgpnR8a33XCUUdBrT6Hx5dUKLEiULQSF51jsVcPmr3",
  "key12": "2uZYax6WWHHJdCRBdbYGFqHaMHxNewwdnKBphFEaqbGpVi4ka6XHkpJJsWxQ7C7XSd6F5HdKxXQ48caKXNu437bc",
  "key13": "EzbRTKFspXLzUg8icPQap5kRiEKjktSG4JVMsEZeA86jo5aeD9WPpd6JyB1keYbqsuqvmaqjCgzN4Q9JJBNpZPJ",
  "key14": "25qUcWFEgNur6KzxMAPFApYauT8cRioYjzX6tAQ9SUB4PW5Puadc2c1XG6F52Ns9FPTcajhoez6fRtVKK7yipczJ",
  "key15": "ZLQShcXtobDvco5bEJcReKhkvqdrA78Mw8AWDSNJ8GqmKfjACuzGXgALKX5qA3nyEqAPqdL3mXzJnxZqr3a9Wtb",
  "key16": "2Y2kg3BcVXQZ8A3L8QsVbu511yVjFYBYWv4bMQ6YNpVxFYPxfYnStx8csVSNWEevt6ZeAdwqzpRk6Mr9zkh6bEK1",
  "key17": "4vhrmsLYx7xYYinaL9LjoAgmn1DKVsvgDzoRAPzRxXRfruJBDitfKoXXMdHc3122c4wwaJGW1iqRoMpSwFsRZ2J9",
  "key18": "61d1ASwbZ7xCwS92uN59iCMA4zmUMCMDLatqLnYsnkTdcrRoteD1r89XQZGPBEBwA9bmRCjTkSHokm7JT4qca4FJ",
  "key19": "3rzW4C13EpkP2PvFWFZXZvZBuyKRCo9j5D2gMFLA5oQuUFUJr8gAaG5EkL78DatoGBGXN1y3bzxUHAcr7tLwbxQ6",
  "key20": "4nJQQ9VxMH8vjMgYJZvL9qNmLZgX7v6gVRurofVq39NuV2ZEcQhGFb3h8pA9vzivHE5nESjqMKE2N9y3JzRrvvzE",
  "key21": "5sa5EjTwRF9Ze5w4SRYrHSySEUBFDCSMtm87rnMHiARRS5xbPyK1UeenmjEw2zWQyZo3ot43GeQs7exbzDicfqqH",
  "key22": "4isC4TFCPfHre8ZcRtQ17BAeyyJmc7bXLMjdztnjrHBGgNubw1dXbGCmcmtj8mWug6F3wZm5f1iyz3Ca2775Ciyr",
  "key23": "34PX3yrJExmoGK35o5j2AQ7ZumKvButVew1XjajDbJeePq1RjNKoo36wHoqhTKNhPZC8ysQpRfYDFVuGhKqqnrSH",
  "key24": "5E6CPx2cHofgc1aLdUCFRPKhTV9qrrgpuWhmG25SUY4Tm1fUGZnuVjypjsXvWQ4RGg7PXdNcmVnUBzFwiuqWfrAs",
  "key25": "4F7TRhLkbNRJ4BVkH3yYmpbkJe4BUdKiL4cH5wm9vNxjaiCDiP1P13HvzmgwFzqHS6hr2vXffyRktUGQBDqCWUuK"
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
