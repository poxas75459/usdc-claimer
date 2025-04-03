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
    "2RnmvWfVsjZZKEeRPRGdjhnmVGRTxB4DidD77Cdv4CGPfKdcvZgBp1F6trQSbw5YzP2WTSxVu2hEvoQVuzHTnrpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dScwPSuDpGBjuaJMt2FP34n2YbD9VKwMqhPA2u98xE41QGtH8MsmHy8LuV3FvKKRAPPTULFxKV8rNAuzLAqCJJj",
  "key1": "5hP2soGBDWsBnrvJqQaJvgku6P1rhd8qyB6hVS1nUtLs15uMKDUikPp431YHhNYnXwS1Yd7Nf7TCKVsfaYVMTA2c",
  "key2": "72qkWyUum4j4U5zDVBLn78ffawcTHRUNBwcKBAqdwL7s6qPnJ9sLt3DSz5Sw86MCGstUtkbZCiJnvkcrtR37yeR",
  "key3": "4KFAWqJrJq8NyArBL9hbgVwQVA2UdGvG1JHs6S2YZeoGwjqzjtwT49pNWL2TSTcVGQ5HpxaS3Br4vovurpYQWyjW",
  "key4": "285hQgcdFPZBhVdi9LXAD1dqCJTJDmHuq99hwHsi9RxRpm1A6ju6tmdxGi7RT3Dn73kJWehFBuJxNsfmFmy8cZ7z",
  "key5": "4PQnPvtVwrXgMKtqiecHa77QYdYevXKjqdecvd73yzf5g1ffKBZZGeoivu1PvZYWQSdK535kvgnFF1D93bR8tv2E",
  "key6": "5k7rKu6vYQPddBsrL1ftG8B9EikNn4yJEP1BztMXUem95Yfu6XFVVkf8sGgtEQ3aUFB5ZL2hEvQ2HKcPWVprkEk",
  "key7": "4RfhCCcL7sQYecrFJ2N4QT7t3syVBRJSiH2EM4HtufMZQ6EL9aut4JaDWMr8daFR5XLTsfZEQmqF49cPZtHwrjt",
  "key8": "5B3A6Pod48Pwuw697ZtRd23N58vrFwSw39McdR7vKBjoMRfy656WhUo1cEfR4C8z3ycm3fR15wNJ3vrhP7jLZcHe",
  "key9": "3o6m2fZ67wdWZsEFbF6vLBedHDmPSJqoHhQrdtYCZNaYuSYAzCwCvuzb3pGxwv4fHcyrVFcNrUPVz1YMhyWMsxgN",
  "key10": "3XJ3x2kLSjeryFPXqt9dQh31JFrvBhzbNbSTFS2N5XGYvuZMQTG8TV8s8DhaBXSA4FJ1DkW3cG4KcqQbcvBzNiPL",
  "key11": "21AuHvwovJ4eY7o48STzBNKCCDronBhEpSQdCHioNuMnZBShE6vPTJyQpeX9zQb8A8kdvriK3LEDnGdg7UmNusBK",
  "key12": "SUE8jZGAwoSoEz4h176FenCetgqwuM9K2ZbabYKpETXT7JvT3VgCGEdXoQmmmR18URw9zYnkra6V94TMxZTD6Nz",
  "key13": "371VWEexXpDbvRPTpbjQY3SdzUtDvDJujDuhnyc1MURXtFvrbpgYbtSfVhuF1LdRSPo9WWTDHpG1P9y5GsD9rMxw",
  "key14": "UrwHnJuMeN4zkETU3cvXAZYWqifsb5dZYA2fP1AZTcHir7C8k2BWqxowjDsbqAfSXcRhmRUKMYeePd8KPLWVLjd",
  "key15": "5jJGmyDWUZ9SDdBb5JfnsfGyqn9rXA4UgUA11PnjVHvssTLD3VooLq3ZJk6pzkqhxjP7YecSHs6A67NCcSLLxWWb",
  "key16": "2jULk8gC24sDdzMvPQK7PuoWptKswkXTVHpZ75L6omMYSZAWKiovCQs9jv1GHPqMLWsAP8CH2pKkez7zGQinkYZU",
  "key17": "8jPGhuiBa4VxtvU6o5Pn616iuBdBbsBmXm5GvNhom1uh3pTnyqCoJSHuScCivEWC526LsEXiAFAoYiZ8Ttzq4Lb",
  "key18": "tkjif2T24EqG7yKmomtiJzqKez5ifvaRxoHeuNBsh2T3cY1iCRcTNnKZTbj36caLrFEQnabXiKuL6GUmozoGczi",
  "key19": "4o9DtSUqvtw9dV5m38rTcxtPopgwtLVnjMvVvBT8VVJBk3taxLYcXi3TUQSLGeZXspRZzfxUgWF58iJdJE6qX9Vk",
  "key20": "2X5Va94XRzbekVXANevY3t8rugQGaqY6WZiSEcP98uyfJbzPzDnr7B177Xnzpd2pCu9bSfBBjDqDt4vU4Qhe5nHu",
  "key21": "55qNkckzKeexDhMvpyKxyqb4gtviMs9PAgASk3KRFPb7FEPUKdhdqFdX9PFLXjwtASN9ftKDHHULQxmSCouvCS5s",
  "key22": "3Rbm4G4jGfyXif1m2gHyjdEKu5eMjFGLKAc5ud9bvkaKZA2a1yDitQGMsQvrke88WYR2z72DQ3yadFHQYETsPsXw",
  "key23": "5TnbJxiJZFu1fFJ9NhjLytryodyXXjty21JRn7r7vZEwfc6ENHpwLYQ2MKym77dVtwwESfeJjcKFAkJZjSNyxR8P",
  "key24": "5R1M1ER9iZjFhFtGapktABzJDbRBDgQUX6Kyf33XM8auQ1jqeRcE1Y5UZcNWxfUHSyx9zv9uDsTz5kqWk1Pqc1jd",
  "key25": "3mGGQLeA2skzif6yUZgncjmFFsb4CoFhKsTqkvFQivLmtNS6mQQSmuA9erdUScMsfmfovLsk39C258TqDbM1awRo",
  "key26": "wwsPtEs1ATLkLhxewfqc2xqj9jMXm8m2CXnE3Mo72vfN1Lzb5wbWc9A7xmdJBxYUswEmx9xiC2BRF8y1nrbRQju",
  "key27": "3e7JjaGt8YTvU7SCU2SpZQVZ62chzWeo9wqZXWkrn3YBn9B86RfACKrFWzHYmYAXbD5gwcBT6ECQhauWBrdEJ7MH",
  "key28": "24nXSY76XzgKKbRfP23Ct6UqQatj3r1UnAEA2cmKamYnCcTaQXBJzFfYzEqwVRv2naCgUZeU4biPigDCsFFpTNSS",
  "key29": "23F745d9BxBSfEZV3MGzqL2SZBikHkQvKUm9sv558WgLrBVCGqtFnLsZmDLzH7FrSxR79Wza2UXGRprW6szb3F9k",
  "key30": "5crAu1gRRL5GxJGzCxAU7nW2oACkUoFYsBn1M6dVqkE7QaZZ9QAYkUDPj3Qij7pEKMq9LRiut9XhKfKWotjec2g6",
  "key31": "2BowamwX6pcVKTQ8h59j3DsB258iWYguJE3hhqF5YsMAfVdRq94HgnF19HdswFmXsMJUi6Akz6JwrhE7kiwECnbX",
  "key32": "51nYv4i1Q5VvBUiujoMdMbs2Ti8vcSWbH4gieHB8F3PUbuGtMKKq7pEyMsEv5v98PhQTvKU8BrwgjSf5FFw87NZA"
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
