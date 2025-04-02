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
    "2Qf9ZanwXsSAUUCdkubCygn7vEtWwK8w9SbctfKxBsNiLVAyhGh4tsFXzERcTEvt7Q61H1R3ZQqPvK9U58N1kQGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ar5kbcc6n6bJyRCcxT8vWXLqLPQKoLh15eucrZNHJ2xDZ77qhfCbkBvbedHM2SvYAm6i4dftzARrYjGwxxvh9s",
  "key1": "PfS7g3yuSJYHjvGqYz29N1QhyHeGMt1ChGCo9tu818CrMgE63zCHv7cMSdXj82JFtgZ1jBaTueR6BU9FyBP3bYB",
  "key2": "3a1AqqCMDfgXgB5neVCEjGWxGm5SCBy7HnUZR7RVqQ5q6r7FgYCU7CsBwpQQ3qk3jogEKZWNEFWWTuZM1yfVexRJ",
  "key3": "3hNzrviK1DmLrDF5LGdnhnKWfagfy54tQK1qsscPShawbJbhHfPtUu9ZmFnJtgCymCf1qRLKfPQJeFSDrFEGBU1Z",
  "key4": "2di32PZgxZX51JgBxZXsvYizdP9L6JTmNSuqKvKkwr1jXqtQMNHFqMY58UKDwXKXpDC1PZfHv3wUcLmnJ3ZKSWEA",
  "key5": "3Df1fSgvopD7Pioo9PtXJGS2GSgRybdPWSWRYQY1ABVx84UcE15ajzMNfFJGN5kbsHy6khR4njAy5ayWE5h2D1us",
  "key6": "3QhSU7sgxP8PPZ8yd1hxmwQgJUHrBgKGRki8A7Ni5TLGA1GinKQHweosYvGQTxsR6Ny3Zt2Q9vBmMDN4BtEWb6F9",
  "key7": "3J1imqiAGR8dtyW4g7fxqgyz3tJsiEhEnY1Lf2ss5UP9jrwucqStMKiT6iQeT5PabpvgVMn3Cf1ThPzCqt1Gcsh2",
  "key8": "FidqCsBwYWvzskpnja2FfbfZgANwuL1ZzSA4JNC4rCUZ1CSnRsaq56iEJUJDRgiY69qMAJ1nbhDSHAq82nxs3ZH",
  "key9": "2iq84jWDPFA8B5Y2jLKRafYo3ovkSzhdyEsVcGrk6Cn3AycwbkCiCUdB3ryZJMiPj8QVKD9qT3EsqA1o566TGXy3",
  "key10": "3vDZw73xEERPFtiX3hJYKPu39NSqo6kve8z5acNwxpY3ndQseN6xfEPSjnEJ3sMvVbSLQZ1bNtzVr9ajFC7wytKQ",
  "key11": "3m22Te9zJcKpRWaUHFQFyExQMZDFVbBktG3Z9QzZ8msKEBhKHjGJTprstDXRkYQ5n7VbPZUKZ17YJw28FvbvJMch",
  "key12": "66JmQoJpyp2E2vpKXmQK6B9BEEadTqRjqztBpzcucYFkPAHqUBvtYS4uSdj2ePZHGrQu8MLb9Dx5ZRwAHHXihWyd",
  "key13": "48XT87LRuv5xrpxmS843CHM4AJ2XPfP67JtK6vckkJs9dC78G6ckuVUgYWXkVftAzyczK8B2GkPEXeKJpLw49W4r",
  "key14": "4Z7gu8sN5FFvkfK9vRjjQjdKm9U8oV9U5dNDRSJ7LcpmZq6EHwmnmuHgDpgAXVCB2rvpsy4SfDHpU2b87VvRTJfV",
  "key15": "3ihkhAG7zQeNxaAfqNbt3SkRAachcEbnW4uPqZH47q6vtfnUERUnoLXJTEh9QJgTM2zWPJ8CpL6cWuzjsyBpRm1v",
  "key16": "3FCsWLukoZZ6zirJUsVTxSp499pWyu16XdbcqTBsz72opJ5nuRh2xqv8YHZ7aSozNMU7obspfXtNAExD5fDEfbW5",
  "key17": "2uH6aorWgMd6ejCZKnHHaWdomwfAbE9dtcPevsTnfyVVR5a5zk6J7qXVgQCA3ciChMUY5txnhbbgJN3dL8rdLpis",
  "key18": "Q8M8Hgm79WiXWdZosyC3aZVpRYrBxtocuk71G1h6rTNzFm3BrMj9VqwEgzWg1pDV3KhDSgmv31rT3MtCBQUpfXi",
  "key19": "35eqaUp9Y5JGoUdB5Y7zdHViHPnHCvRa7TbR4SNmHNB1KHkg92mHXEDUfAFNEiTGw3u2hAB6z2s1VnrcQ9rbgMzR",
  "key20": "MDcvFzM6qK453jB1YRmZRhNghgmc45y3KTpnTbCDr1ndgVsu7hBnS15dqMLXhfThifARgNM5m9qNW6MEcMqU81p",
  "key21": "b37jX3dY9xJCHMA41UrMmxDMsU91eJTgGVnwraNbtrMLnL63FkE9xmnAqdZmM9LX38LfaijfSGe1zacWXxqzdmA",
  "key22": "24Q4m48cXPHkpYzy91CLP2U9E7RxYHCu22SQYxWkS1wAfWKJG7ipEUsGhVkJWrogcaGphu1GFaDohRyx5eMR7ofz",
  "key23": "5PVwKHDLan7Q77hKKYHauh7wPc7qzmqGSRXddtYYz7nsJ2KR8pLCQ7DEarKmsQ2cE5X22MSWoHpJWZyBLygo4ddM",
  "key24": "4VpC2vpNiu74zbpKBgNTAnBVh7VD4bDchnCuCqhgvC6x2pZQ4RtKCy85hGLbDW8qVUxJFBu5cQKdvCbVdGPXUG2q",
  "key25": "3e79ZnQVQEVJniRzN23A5n978GyL4YZSZmfHeowUXxvspwgKV9xFpKG1yMA6MEWVNGC7aA68JHHAYG6iAqm2Syw8",
  "key26": "3Z2ircttbZtMdKjii2GEi2C62zZVnUQ5jUU6sG6AmhKPXJ4ZpsAdHFKYyJajZadY8bgFEW79hsNfzjMjUvMiGbut",
  "key27": "3JVwN6YPGiTxGxuXRiYLrULHrg4CqYmvivkjz8WeC6Ggr3LbwVeYChkuZ1HBpKSuHbxKUJVMKaE5VMsjS8TC9p92",
  "key28": "3z5a6RhcBMggBW8SyzMjG5sXWUjm4AxaVtNhCa6WLZog35Ke54DToCiboe2R39P4zRMZC6gvxhv6Jz3jyoovLHnC",
  "key29": "5fTdRfUdF4CsZJgLeDtq6UfAYyGtzj8JvVnJ2CAtkM67AbqpMYk39jy1Z7iZHAdC3MquBUiaHrWdY9sVKc3HsVdE"
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
