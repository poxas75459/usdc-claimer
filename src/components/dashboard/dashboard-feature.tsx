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
    "4jiN274VBQXxZrWsbKuu9ThHAPYLE1JwbKTSw7tEmMxm1BdSuWKkk9qs5sUbsKqLYVfC5jikVpJZYpyG3howVNcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E6EwQ1mLGKJBBjQb2AWSic5n1zeZvUPXvyBaNLJ32bJEZLbAYvNrM2h1XFqDZZ9PMhwUFUJGFa1jjukX4oBLiwe",
  "key1": "4cmCXkWMVpp8HXV64yn5j62LpiGkHceJhL5c3CThxrGUqfKu9xwwTy98ADui9BdxPA9k6MqGgtFhaN7AuUe7uMdj",
  "key2": "25wWJEpVLykHxSrngwmJ3vg3x1F29xQmRyifvmJHxdQHrUbSCxhbbqDtHsWyaoePzfhqzrxkrgqqJnjEwQkjz73h",
  "key3": "nQpMUAA4ncQhT469fAhM4aHLwbGTBbcbH5ACi6yKz7iLQUaNLPHf2knPv6TSBM2HPfTAXppPAQrTdzkYZZDhJ1y",
  "key4": "3rwyXfuYFPQAQCppMKbkuo96k68yhaEidwcNR7zxni8tyzTrhgzwt3CZot9Tge3tjG5AN6yzjGJrtMDff2QZUe2A",
  "key5": "2SaYN1Kqwdzr37Cz9UguBjwbvCFsWA6gPW3x4VhJqqeuYD4Yr78KPKd8kemTqPg8Fn5uuwgVtGtwRdntfujMdMhW",
  "key6": "49tkVwxiqiVx9EzTy8Brgzbo3AMEkPxNKEJ6Mz4x7eSWA4KoSMjtGfg6iLoF5mWDBQT4fV28y9ZGhg5RSip5U3kF",
  "key7": "37UAVZxU93FRZ16FdoLcsMDBenX52Pu1mGNSjQpwQba6TNd5LFopu1iuJVPA6oRtf7ZvJmS1zcyEYcRj5UqK1MT6",
  "key8": "4BFjghmfgKyEEMhm6vCmzN6KkbvnVWx9Kmd9b6PnMvd9gr7C2ECLbnLuCRccugmtwxzdrBJgWFCJ1FX5xuR2fFwU",
  "key9": "4r7y5tdUohjDAM2kaUGkkx6PokFuFzBv9Q31gyHdmN2VJLM99UUaK4x44CqNJY8Q8rxXFi36CDXt7qfA9j3fxWi3",
  "key10": "5XtpKLYLTWuXmngbVrk2ipdKKShvZzEHh6BA7NcMfDm6Mjnj6MZfJQSSWT39Ra9yXAW3S84Gh7kw6FuQzZd6bzjN",
  "key11": "4hPRZmHiso1oDx1ZUWKz99P2UK9XaYPzf2gFsmZxfdMcPjWZRrG65vNyT2YshhPDhbpTJoCZZGdBTRzrtzeLNJZZ",
  "key12": "3Po3xif95rgSCmaGbEnRFTgMQpA1ezTQmKtFC7DKLvpywzXMH4iCB2QpHq26uz1c8gGnHtA3bXecsorpFYhtXUdK",
  "key13": "3y541DGDLutMBZy9EqZdNcKnXf35psmW6kuocLf5tBJr2rTt8dSH77ttzaRPnCCY6mw4iwM4Z218J5LV7XDS4pQE",
  "key14": "G94io9d6VuE1mfUxdQfRTB5xkcMV1wuuFtFqmHB77HMxFnE2RsxDfHGftEsaBy7s76FRchU8fbjNFwHWJxuFMZk",
  "key15": "47Ajx8uEUXuPe2fvkJt5Zhr7Z2PQi7Qo9QSXMMmFsxDBHrVS6ksAWBHBWwRmbAwVDCPZ375tHtWu8QazMvf1iqj4",
  "key16": "21YKHLzRnGMEqvMoq2enqR1bkbAkoBGNQ3d552iLFKxYJHyRUEWZGLwE2FTYwCZzu1tNkSTFTuFTLWTMbkwWwCYJ",
  "key17": "2AyAEucbBmu6t4yXvahdXFBsdRpxZNa4mgXYxi3w1msfsWVQtkB73Ua51qgUjwjXkn5u7zMwMGRip4M5gZDYzAdB",
  "key18": "5fK2eyy3QRDout2WYVmQ2G5G8HZnqQdXWVMVqNBjiE73K8sEeSEDtZ1AoQRBf3qK9ED1GfH6NKyJTERJD1DRb4sF",
  "key19": "wuyyHCYz1gbcgzJXGsWLNEJUVJL2gBPVhE9wHjeX9bD5oFt4RntMmYwhBtwmgih4dVcTp6JTYAkpZSvwGoo1QK1",
  "key20": "4j1Hx6EkytQGEWuUyoqN2acW7hgzDDPpGjvNWbH8yKRFbxyXUAiR3K74unHLrTSsRqGhs8aPvgd3VriX2jvYUjmW",
  "key21": "5cV7Po4CXQzCBsuNQiZGHzH8oUbjZ6EoiP57UhFSpEm6THm1x82wNHafUP2yY6VS6rvkZ7HknidZVNaNBe3npYjz",
  "key22": "27XguWq5geAZ1YiGfbaJ1eRZiVjrBcmNcN8GbxpaRPZ7X7r5jqQ9PHMJFZNgwvKjhoHmvwP8qCfKKnApbEW9cZbd",
  "key23": "zKer2AJZkCdVdTAZ89okSqxqYZ4V1eD6hjf16be9AVVJz7ag5QWVauEE1aTUNAgPXsnncNSFwn4Gqjxc33m57Zf",
  "key24": "5ZHxHx8y9yfZ9sXYibzeWjXZYToct8UCTuu3BW9pdXPhQUygFPyv3NZjGMVQMmTTQ5CCUUhWFKa6hn7XmmYEfrMr",
  "key25": "2pQNKwpvrT1k33B6EaAQ6eejdmqxnwpyGFZKGWs2n4j4SDtAh4BBnv69pttuxiWpNH6Mk1exFoujYca3KYm7WW44",
  "key26": "48obouS4cFsopeUEYMGgUS6S1yvkbSdnQZJgjCPjJG6msts2fJ8pHj6PFLDE32wmPkAvqePwVYkQF47H8FmgwvTF",
  "key27": "2mFMGpRjBFp5r39zZAoEAUhxXTHgPLv3vkkKvHFjuwu5y1JJ1ThnuXnDfr7aYixwX7exs1umY9zEbGVHuBMksvN",
  "key28": "5bqn3ayQ5VA4zk29KQMLwe3suR4fEujF6qjD2Q7Y4XyNS3hRh7XPydXW3W5UWmnQn5UHyFzfbDNQSTY5A7VgLUn6",
  "key29": "2Uj6B36SjVhxAFuJDGUeeYmdWHwi1txyfbsfvxY1YYnoW1TzY8yYpfw35y9nj4Lwr67cBi3sMCt9pnFJ5BxBaDuh",
  "key30": "aL4hHsmNUVCc6dyXaC5ihzxkQDeA5gdU5FLjkgpNjW4byH9pbdkadR9yhfRbjxRcU5KR8sWtuAs99tNpsNG2Te4",
  "key31": "64tqdey6Lu37uWWzvjTN3313oD3rV6cacQ1fSqjfJgNMs2Dmkn74TjdVMEMiqE5FBMps34uP29BZ5y1QCYfVAffQ",
  "key32": "3XombizsDdJeoVobYWcXCDFCoJgCf2MeQ4kW6JQufwMTHNZwStz73o8grRR9MPyVengaVDR4TTPc6C7MQ1hLDfzP",
  "key33": "2nCTomJwBEBEvLWp94VML55QfxRfNbBTBbu7UZS6jFigS9gLv7qryB787fcFGf9axFeeXtPztRgVR9AVYVf6Dzn5",
  "key34": "5R5Fyu4BMHM6UoNX1AFXhU5RyG44hS8NatKickt9zkrnrg3YJcuPT88zCAUirz4VCjd1EVPHZu27RiJ5d5c19yUR",
  "key35": "2ACG4D7wvgX5SWDh2oCDZqcT8SMyHbrC6hVMFJBtyEiAZn2HDP4ioPJdpdjvUT535kwLmVEVy2qHc2FqB2cNsQec",
  "key36": "3U4FCsj6HPTLSmmkMdE5tyqheSJ25hKR9BdH2ZkNRWEawP5dDLwgj97gAPnfHS1zofQiX8MwsBip5PXiQco1JS9y",
  "key37": "2sTT2dwiHq2UdhryzGbQJBfMPGopGPTDMeY8bGaKhsbSbwDfdnpXvujFnnDFBBuBgsLwoNW8uEaUvGuT8a1aqxQN",
  "key38": "62uDb1q1EN1KMKH8quTmWVYBZ3VqtJRFZ19tDatPtSSmziQca6kmbpiKyzH29NmjdGm6qb6RWL3ZCTEgVtFmFk1u",
  "key39": "4a33TMBFZu51C9SqDBe58TLAJAGFqXiZwbhpwBNK1F6z8vMJBamPwtjsKNjzMteosZnVHghZowB2BagUqjaTsCkW",
  "key40": "65JWqtE62vioQn1fcGrMzVNaS7cTujo58EtknDGiR5Zp13zKhNFMhwZC1jsPJkFGsEw5pjRzdavv2vSeUMYYfoNr",
  "key41": "5F86fiPfHxyxPDvoEcy5HZP7qfZ3hZn6TRNjNQGXYLYxNm42CjXTw3uqXTxuvPZq7Zywu3CwoEXA6bNbWVymvudX",
  "key42": "1VRfeAntVzdyzZx3p2MKLhefnK82ENCby6XBD82dRwhgrgXAi1fZAcgqz39iMzpcGHfZrx5irZ3cFvahJmBSPVy",
  "key43": "32r6HzaNWqr1fyFxWFBE7PVbZkdk46apk8suowZXiTsZPsrNA5oDWNxAX4c3NRyzMNitijbfS7jmWtpdYyNgqMuM",
  "key44": "3XHeJf4Fkx1T2WdXzWFfPUF7qGm1XAxTTACYwZk6jcksPvqcCWB7Gnb5uXUBEjgaJ7YpiSpsJ8TzK4gdeVupN4hv",
  "key45": "2nR5aidzPWugPr2zVjStivd9unRnz3yxxwTokyVCPgniccedwF7KrYBMj4FjiCwD3f3ThTkhrZEN5PTsGAMFZLay"
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
