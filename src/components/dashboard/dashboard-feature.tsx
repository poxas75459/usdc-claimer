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
    "4sqcKNwC7MeSFSTLF9dt3vmR94RnGzWBh1XNWHLfepYPDbBBR3RVbkBPb6ue5HoJLkjYv7qRUnHpm6i2qGYFTiWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RQaD26YQXAzS9jZBoj8cpzgBovPH3jRqsuhtE1rfKW1XGhJqNe3u5ftZGZHoR7R4JFSjb7oWNUQsTfEG5H7Rmgx",
  "key1": "2ExjncbM5GUKDwV5W5TTCQ35xkzXTADyzMowWYnwMXoGhHxahS1jtiJ3XiFGEm6mDVTvK8htH7ByqfWKy2mXry2j",
  "key2": "646AU663YWYRZD6upsCmUSiGRRLkLmkKoLLrjaNtgP4dbBkhRqgQtzDopwcet3W1jnGdx8AZrqDreGrPS8x2k6cQ",
  "key3": "48fDCKG6HhPx3PzPFVNaJPRpgFHU8r6A8aEmrAm6ahvihF5nyHXjQbFMDrkSe7E89anCQq2VFqaCEPJpsAVPXY4Q",
  "key4": "4hcHrUK9Q4EwwXHzeubEgLBnHb1d1jzXCFpq5m6pPEQh17oZRgqRqAF2CpALRwMBBVa4gSaKmLHkE7XUTCsjCfjn",
  "key5": "Ba3W7DgAUGzAYBKKzceFkwNttxaY2PZe88jPyBZKge1MCwS8xvX2wFTnX9WfLANyRXDh49E2WkzGYLdWgNRSwbN",
  "key6": "2UtpbUCCA6vQQq59e9xR4c4Tp7BJheNxqs6mVLPtPZB4ZN5JEufGEZFHCrC9EqtVTfRj4SkT35kkwR1uQdAnVC3c",
  "key7": "2fczYcHSAU8PnQPfVWhTBxRESzkgEAueym3WH5ayX1myui3gBnp3LopQqQ72ySx95W4QeEtWd87ai1mjgG26zTTq",
  "key8": "47DmLHsHSTBSmsupG5ugNCgAydWhVbNLnE6hev7WsEVAjf8WQDo82f9yGdesLjgnPK13piB5nGAGRKEgJKgynXyA",
  "key9": "4E5yiYyX7TzGXjVqJHeFoF4y7YTF26utiLVvm7e2mwsxAybh7nuqsAEwPqo3PvixB41FJ2yovahZftv2u2wuTSAq",
  "key10": "4SyncAoDh915XpoT6qZPJhPkbmxhe4uZLusSZxVYLK91kS9vCaXXo6cSMagrLaHVduBLe2WsMCXB7EQTjMhqQ1Th",
  "key11": "5hECvRsJmoHcXVYj4v2hHPCD8Xqp2uWHpcmG26R5aCMz3tJ4hFsKgHFAjsree7kg7HhUMX4QemYbofZvsu7LDLUQ",
  "key12": "41Q1gRyS4rBx85E9ALmuMGjVGFuyfHAeBdrKW8K5pnmiJfbKDg6zHirjM9w3onvKbivpytdRW4fPrGUgvHARgmoE",
  "key13": "5vxbxtQ4A8WCchfAcrTX8F7kxJ3fkxnAbSQqGqpnXLk4De4zvahVQEozGiw8YHCRckWQhjLMbZ2BNL3dvR1VPUox",
  "key14": "5cR1CA5g4HUpgPZ6XYfHfNF2CMk4Sk2JccKTuzDZcNukGjG7eRED9W1cMXJqQPqKzCb6dAYuiSf9rRZdT8ByTjXB",
  "key15": "3YyMzgCyMsRPiBtGJMEN8xRYnzuGQRLZk5zaRpQx7dBBqoewgjcyfs6t7q9wztJQygUUGddreYg6qGVHfq2se28P",
  "key16": "5886gT3ZkaY6QnK9cBcX33ojAmG8fKe9ps3sf7q7WvbMLfLWZjbzc2s1i3xaEif6Jc4JYjDELNrnWgwwdbNtfiTq",
  "key17": "5jM3hgv3bioyMHBxbLTDFdKtkhRd2bcJXMji7swXRRHb2gH2WxUU51ysiKtBUKomdnUYESshcnrkoogHt543Hvhi",
  "key18": "hbFkmry69vcwGNkcQB1vQB5ou8tLTs9FirJZhr6EUxLS8TrhrcXhRvX8viMhghRSsCafKkTW5YoLb4qH9c3YTs8",
  "key19": "2hCf4HeqJuPpMGp4pfseGKYndSEMhCY2TKGoMagHc5z9kiVQTpQeJQr82qYvz8kRqzM5rqHdnkHiLqrdiPGoAxge",
  "key20": "Ssf3Xntf6BTKHvhefjoc13SzV1D1JFWKz6ZaURRgxNEKGpWdkTrTxh8U7N2a6AAMTcQx85AEXz76NLkCNxRChTs",
  "key21": "3g9ZnogbVnteTodDQ6fZNG5ikciWqhH3CsDkchsWc96pYUht1D6r3Skho1LRTu1pn1RKdmQeeFkeYkZJRQYt6yHP",
  "key22": "3i7g776DdKPVYbfLLGQF6cFajY7X6Cbgp8x4xzzQdBUN2XgThBn3NKedRc79rxRUGGcCvA9wGyCTTuzEUiTeW7JG",
  "key23": "3iZJqxFzas3QwGQwisTRYTVTVqR5ajNBRaypRztzeuRxyPQjgN8euAoJD3PhXatZGdFvi3Ti6nrXdCUD4xAnFGCB",
  "key24": "xUc7aWBSHEJdmpB8XyrsW56j26D8Y9atdKtb2nVLXEWobT42vHCzuGHWHyS6ciz1wVkjyRCmHHLNwpLGzgYaNQ3",
  "key25": "48rkHxxAsvy8LUG7tNBhgxMkiudAbw8GMxav3LzLAiRgzwbAWie9Q9hcxLUCAGHp6FzYdMp3NoWTmnxC1vwDQvDK",
  "key26": "5ozTWKDBu9j2PkZqKkDhia3jgZ84GLfi7W6Z6FTmojgGqniZUitykSBmoJMn5G3C1zWBqSr3W7FiuQkSP7khKsBU",
  "key27": "5WuiL5oyWoZLM56hV6rRrBrPA2gDMBPt6wycdQp2Ap9biU34eCKdH7Ags7PW49Ny5nLLtiYYnXv6kk5h671hZrQT",
  "key28": "2BSRvgM886THX2THsSrFByDdWXeUrHNB8v2xcF1bWYEc7RsgVxETd6rihL7mCgHsS7gtc9JuRzgFgMesXCSHRuKY",
  "key29": "Bmfx1tqxfvn4YTNjGfz67ATAKqbENBnqZsBhvRaBmKH9tkoEMMT1etAzTw93SBVCWEKoWCPqBASiKCWJAJSgjhJ",
  "key30": "5FXU9emTrQo2pY182G7sebzS5kK3L6d5SDkRgGUnVFzQkmEyAzhGMssuf9h4hrzvhNXDVEFburi9R2h193MTuJsS",
  "key31": "4wQLotsuvQD75YaE2rGjTHpZSbevXYnD8GRczxK8LF6Ex8qN5GB58HyMujeWxDxgJgQBAkomc98Zv8KYef92PoMt",
  "key32": "2s5EhtCghfKsgM6DoWQUp6xuRBoCqvBS46yGaEiqWDyjWEEXrGZHXCtzZtftstUb1FYBP9qZR1UD4Az2Jc7GSA2y",
  "key33": "6GeVrozUtXbHcyy2tPjDvE9VhwwNADYuHuztXBWgiihTWSo4ysjdk8DNq3jpDXNiMDqYXLp15Xw3DVAhrLg7NA9",
  "key34": "4TpA7s95RTZCEwcrdP1XrLLsgWzx4UPppTaft7yGxpGhTvE1RzkpdEpE29Bsw8CSXWXsJfKTDEehMYNoEsS83zo",
  "key35": "2pL5tzdzcqh4RF5i4WJbaGr9vacAqWFS13QuMUXbnqqf5rgvArJV4Y6jJrVWjeyb9i21afxygb3fvavJ5dUe7muB"
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
