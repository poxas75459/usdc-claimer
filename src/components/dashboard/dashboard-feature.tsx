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
    "33nGfA9jKCdhp6AeNAcy4gDLvcFvTqQ3hUuMyUuLDDtfSBjRm2XgSwwMUkYsMs6JfwnsXVUCTuRhACa49kH7yqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5da6WgwnPHcyExVQVGTW7qBeFDfLNycBfpBGMD9nuJQ8fSbXvza9YTuYi5dceKWKGwqJdniJweyVuhWqrP94ScwC",
  "key1": "3yymSBAgT3mQYv4B9NUbD7f2cdBBmTyC5cRu3Vo5GEW75fM2FR6vryHZUCkXSG1LfSGJ2WnsyeFC75QnzYK83BLe",
  "key2": "2TUgU1jrbhYUnctBg3hSbpF3A6F8DCCnqFTopATyyfYgL9ZuMjbSLqMvr4JSPzpjhNNv5s9qP5UdRCZnrhL7Gqc7",
  "key3": "4vtcXVuN1TTddzD4v1sqNQEuqSisjvrbnte2wnAUyCKgTLep2u3RC3Rvcg7x1vVkdaaGuaGjAoG79HSMDkmXqnZV",
  "key4": "48gTU62sqNxLACURz7vkRJxHrPTQdVFAEVyietGEPmazEtNyNL3EtSEELAUEyoBEdwQ9V4YkVMg1N5sVxvd8tUyX",
  "key5": "5q9QRErUac8uAS1MtCu9kdNsGGB8AKQdFShRbv76vV4xpjrPHg2XmyT2yPPKsaZ3FUh9Bjj1gZB35sLBmmfL6yE8",
  "key6": "2Ca9CRRGGfayFYLMKMdkoAhYXYqaR3sEFLXZehr36T2ginrEXZrv843mXMnffisZHzPTwFqTgfECtKDXJAZwMq17",
  "key7": "yEcDLzHbTSTNucR9ALqaAM4NJZUTPVPGSntM64HS5a7tcdt1FB5YyDtRg1aZxj11qFA76uL2jDWLUuxCMqzjxN5",
  "key8": "5JCiRGzLW4BK177Dp9WADS4SmNAj648ZjWYCKP21A8hxBjyu2yRfKnUdQx6jpWJkHtvHDE376PozuYzRVxEXQZWm",
  "key9": "5gDSXcTn7VUGuaPayZpTDzVGNM8N1uGcwnK49XwdA4ht4wK5ETf1uQyhNQ62AYh41hEqAMDFnvjscz1GmMcPMGtW",
  "key10": "2QjUk8ER7nzygBhtbbPfEqfgZZMf1RWEpMrL6fTWkG2VzTe8kEAAipBCM45hdwu2xDX7XzSSKubYHX5zSLFx47D5",
  "key11": "3tMk6g6JMu31ruXokfwksoErdknsuP4Qy8XiV1eLGU7QmT7DWzAPtf193XqdiAiT5zJf4AUwziCzr26SEEaq3nNH",
  "key12": "bGUmAKDe5r5u8NLjZEedeTXAziCdEUAD88VT3EVMJ8EG3feXrUFBUK5vroeM6CUcSU1ZQM8Kp79zbhTWVDmVaxB",
  "key13": "61FPAgbMtqXZLZYhp3aTvww33A9zETdvbT9GqLDAuAaN4fB29bLePaKxyL4HQKaP4pHE3n4KhAAYb8WY5r5NRjtV",
  "key14": "3YHM988jo7Aitm6wNUvHcNYDk3KkLcfqGWHe1dDrRciLopXu1gdbyTPYRSLFVsYcj3JJigXZP7tPSGMFs2mt2WqG",
  "key15": "5hqN311AqSBEo5TXiDHzjXXkjnDEvPccRxryXYJ18ufLki1zL6nF9SgQ1UFDrqJeJLkG3LyFEAGV1YziizC2eQqp",
  "key16": "2EtHs5JPkqo6oCbSNkQaEWp9pbTV8gTsRi3xapQjuPHCVPC83NAz2b9mcXTsyBwU9nTrb6zmgxVXvreH5sxHkyYj",
  "key17": "4AsHA4qiPRGRJu9Ck9h2EPKHx1tKiG46FpwESJ2SPMyerABC18bPgFeDWNoPNRCNeJ43s2YSX6dgFPqGyBdVNrEj",
  "key18": "2bWwXEXLdkN3xXnQyuhaHzXZdToDtRnvqzZ73ey9E4DKA6nAcfuN7gYBQxKSwQHExCnSUgQfYbTrjKro7Gtmcwic",
  "key19": "3vdkrtSSLdHYvrLGVPR7DTisJnvFQ6R32sJbaFPooXkZN5mixuN4Dodc4gYggUgGs3b6vUwAa4PVV297zf3BdUar",
  "key20": "4dw1uY7wpCcbTGgsgRkrjc6EJfPAmZJivPeeZgSmcKrFvHVvNmm9pTUtH4Qc5zckervV3MDmeLBdwH67rtQ2ukhA",
  "key21": "H6n2SGWNnUUY4xGyxhzPvUX8SnZDehVPXuJBtZmUTR4wqFFgFZC2dACRW6rW2F52KF4r7mCq16K5GXjA7rgLtzT",
  "key22": "2AmwnUYxpfsjdiC1aSWg2wLaWSK833hXGjX8UsE1XCP8Hk3QzmFjwciMRBikrubJ8u3JogFPNDKiHQGzY86hzYgn",
  "key23": "3cDhVNUW3nTekWeKHrGBtyS9sNMNmuQ7Vi2aBDCUPxfvMsXnK8ga8XTVm6t6hQbBsJgdFk1fSAiZBJNxGo1UJxiS",
  "key24": "2uk24qVJjLkRv3U3jbQbq3tWh7uyvtfUMqCX7uq9uibCmQvjJqXuHZK3herdKxYmWedzbLY4yodewmxy92wZXNJ3",
  "key25": "2R2mZFyzENMcNcDQKnC2QDU8mVJr8As8bcAJjXw69RwuNALoaaFXmfW3Q5KhkA6Qedhg4fgBykprDUMK5XNnxak6",
  "key26": "2MhqREG3msayG332NWTxabkf5eFcWikyC3TtTJ7fUuzY1HycZu2ZoAhpruVgfx1j1EKnJhabogeJHgbGqNKaewWF",
  "key27": "4B8cWFbgibq9hF3KNhDJ9uKFLTPVYSkjGJFeFrZFnnm3mRx8EJVgW1QCDNyNB9GBBDrhBdvRLzBYYTGdfeEDKqfr",
  "key28": "3NdrzWof5F7hpVdKDbufoHDvbERq5p38zg9x7JuLoUzco8xjHMfrWFKj89t51gMBWQRojLsJRTYWbCzseGX3omhS",
  "key29": "98LXGtZRmxietdc88F7pgmUJTHQsbfwbivBvoFfXVbbcDAngPu7gK6tjaz8SNdqjH5PgNZDE1u6YHoFGTTNSn8B"
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
