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
    "7d2fo7YMuFbkRD7HFfKvuDrr7xkvPXEPt2KWkGMfGeDEY35FBgYfFbLEL1rreiMLuzFCUuGXgFAWuv5hAGnGKDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a3JpJC5JHNsdAYueZhyTHJvo3hsxySCjemBWCCWMgG6cy7LzDNiAzKSAEJvvoM1NAKRXTxqP5GgU8tXminqRUpA",
  "key1": "36NRdgX4e9QxEGWAUraLfNNVaKvtyEjeqUR39Aqs4veusFStVfqejFiKVWyrRDC1dF7UGGDNzXkX9Vtt27vZbLrd",
  "key2": "37PxGJRnjxRUZMSsDunUGnWUxNN9c8VdpXpSyJAFcLpN8Rg76hTUk6UR21Ezb9MLfeM2Vsw7y4vPGp1iDhv4e2HE",
  "key3": "5GVCCvgmtvCUWtTcgorn6AFER5B7qrBSirJDXzvTABZRjycDy6sKevxjRzTduJdKNm9z62s2NLXQ2UWy8tdLPXU9",
  "key4": "2VEbHbandSrDJoSH5Q4AjP5RjUPWxw3o4NhmJFHCNoRbasDXCtDTxyTkAmEvFH1tA6SvLZwb1YtnBxYbZd5Ncfhg",
  "key5": "P6t8dTEA3gZUL5E7uD7uDPaesa3xgBvonkTD4VVM65oEt2KgZpTBX5Uz375MQ3Jxbash1YFPfbQQe3UNvfgpwQQ",
  "key6": "MPGayDjbuWYB4BayabWndK2wQ1ZJD22VpsHQkYtS7K1VsSDy9Li8Q3CcyxMs6UJwzFef3ehBeKrtpGPD1aZhLRT",
  "key7": "4B6MbitNQmpr7hZfFWLQ6HCznm9QJHR2T4aWztuipNfhPaEQ9e5nLaRKexESzmRrZW6BANhkFvsddtUY6JzD4GbN",
  "key8": "29KVjYs8QgPDSYyBHMq74sMzc4nudFn81VfEtqqU8jVi3uCc5AWZQSK5vn3jDZuQEJ4sFKdvfHbeYkZHuBPXa1Xa",
  "key9": "4ivu5mCbVHQcGTW7b5YXT3LMQng7Qt7YZJQQiH9EADvRXvyougP62xxxjooVZDrYkMWo8Yvb9WcEs31Peit2zmNX",
  "key10": "3moTHdbvJ6wJaJapgpSdoJHGYHA4gk1NgX2HpmmHDTM6zirzD7MbJnAcWj3hnMBEdJMJkCbL1LfraHwNkckdvYQ1",
  "key11": "35oV5U9nZW4nYPe9TXEQbbB8PzxGA5hJCo5mT4hUJQMgWEiqkUxVQeypMkfx9WnsGsMTtsRU4s4HAbQX6CdDBuJB",
  "key12": "667JvPoeXZYcXKiLueZnz7bBFgVGvFe8gBjcgRuN3FEuKVAuJ1pZcY3vLAW67vhM5XSH6hK4THJGH4RQrypPhckV",
  "key13": "4UoXWedksm2fdpDQDpg12gFUX4BRytQz4gmT1x85J5WHQKo9ttcCN7E7ZtiaJEMpAs362GmjtpCUp8Jrq2niGgDF",
  "key14": "qtzCcunkCjNA1pxcv8iVBChN6URxevkRvQuTH69buv7TomkoGiBMuwMXDqcEenZxu4tzqVFptdfkXj3M8uTKByj",
  "key15": "2rBFBMRqcZxA63ut6HkyJ1CStARm1ekuEkta3nwwUo6kVmAqamCX6g23iEKZ9PqukBetuReHAhNwDgrehj6jd41w",
  "key16": "2w7kLN1atMAgH9k7Tw3h5UBsqDRmBooK9Vnvvt26JL55u4T7nQCipeqLpssMRNj3r7zH2Vi6TNkSyZE6Y4uakfQt",
  "key17": "5fqKkNqfDhiPmzmcvvcssDBgtaZC9KPPHwFQG7uB1cioaLg4TBKYCrDrJmNLJ5TyMoWw9aTeow7ZLyv9ro2KBLUg",
  "key18": "y1kxAyHmSd3FhsmX3mvP3AGhSZ1hRRnSLwFr4uVpna4DnQqzmZA5hNDYs4GJ6wVjGCnqHimcQEk2PgXV6W1CL7Z",
  "key19": "3f1nP1cmCf41xUHsDDWd3QsCu7NxyihSnKw5A2sU7BpRCdSMS8Ve2ZTAvGYTSmemEN1Uko4PaKyPiaSzJQTh1GQM",
  "key20": "4dRKnJKnSd9VjsLemkW6yGU6v6ZsubuHtYff9i2FdhFj5BNV5fwuAhqkLneviWhyxuMVWv2B9qFKfaF7XdwyekKk",
  "key21": "2S13FzgXbedt2aZpdPE2W6Q8vs7NFxHYvGg5eagLLduodXszXQ6LKssEjvGkumEQD9dHqa6BovYX3LRxNy2WYY17",
  "key22": "3h2JX8Qerg6ey8op3CgFiqEPcboK7gurhafUViBKd6NHtV2hc62XZ8FiEgt8ZZRiiPkxDWSpvMJYDU7vh6qFKxbL",
  "key23": "28VvKSHqEeiGtBUMMzth2WXF5x2Dtub7GwVKY6vLwshWsfJfbwpPuLBsjc7KB5U6Sq5jT2JddtdsFgS4EbaoF3o2",
  "key24": "4Kh8iCWdnv3V35sppA7rz3spkoiae7Tdy5sgv2Hw64ZSdmx24xTAnKBYW5KWXQWQqbZBiMmY7iHz9Y3p79WNX2og",
  "key25": "aXgtQKf5pWkqVJiMPWUcudtVp1aF1St4MX6X1vzXyfrACt9DQz6bacrCAmcLs4HkoztF2XidcZKZZ6gbh2gHyEc",
  "key26": "4p8Qu9Z6EuSuHAhZtQwwKDLHLteA9sPsUF4FoXthnShEbQ7cSUSy31tovVB1REnXHEc3E1iTBTsH3YUJBiPb4V4k"
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
