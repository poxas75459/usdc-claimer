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
    "CFDEYiNoXixir4UPxispAT8Af6LgxzvudhJzKyMpRdBFDUuWVveDkuqwjoumNuWQhvLh8EFCeieKoNjNUeXY2jz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y55mieEqTFFJzkuCuvHm1zHUyKfyuNvbvZuRkSggnfNpGKwesXiQejU4ihNXcVujs7tCyqiZHwDfqz75G37X1ez",
  "key1": "xjmraPwrx8zWSbA3dSpcnjm5BLXuzNYDkKHy5Mufs3Nk3nP1mwgHkQ6wo2CQ5Z1t8DLypBaiL5MHDzEpFw2YJf5",
  "key2": "2iSRhBrY9GVELtub7t43BNZ56sPDdr2gYKV5w53VbZXPby4xtEX1ye9yWtWXJY4r7XK8d8k2nhB2E15f1GtXBHqw",
  "key3": "sKLhPhbbafphpft7FsJiFZegFK2FDcKo5kuGxNq53phrYCsvMd21VmVGbLpBVt8FVELLtPhBCxrKBmf1mVwvZyT",
  "key4": "2xH3sqw3HfP8PcXsXpayphQBc8AzaEMDTrXPTggGPUzMBBJYaJGVGFgW9w4es1rZCiZbyw8hy9CuvpW5dLDcBhoZ",
  "key5": "3fkk9teCGTXp8LqowRhKfHsYbruRJ3fsUj5ufh5tzfvdgmjrEPNRYG4uKWbANe5bCxdevvJi3Q8LZTS6TunSySTB",
  "key6": "4uvGvPsxjHC8gtY8NRJkVuD8b5yXwhJDpELmWm2Vo3YhQzNuoS3EiLxAff4RzacFRykZBcfGzMq5oH4HC26MJHHR",
  "key7": "43px768sfcgxnzDM8EibFspXLhgdvEYTE2ennkohazpFytkXLoFaQS4GZ4JJpJKm2dxoXbscDf6PhsUyNJPWALw2",
  "key8": "287E8eUnHiF4VLEYmqrJotAjcu65SbWj2XTejqkoMvDThYEhcebXS4ftzryxfr8n1jqLedZUbW27VbxkQKtD8N5X",
  "key9": "6zpbv48RXUEDZkxaeNwTeSAECiQ8Yi6KAb9TyZzqCSf5ucT28XWCETw6D3CyJbYdCgt4wXRtkPY879fsRX7SpXU",
  "key10": "2YSFFcbt8nXokrhQDf6RatYYBrRttfSBuumFm6bmZ2ZkDKoBeKJHprF8UAJNbNjM6rvyZnC3otqn4Qk12SAVMq6m",
  "key11": "4zFeLDg2cMcXBydqrFoxhEVJSQbpGM3ndivLQdKZY9M4Pzi3ZX7u3mohTuNHiLd9thdeZh5v7znB61iqMQCNSJnC",
  "key12": "318TK29AJXqa1UaDsxqvrktPkBobVxmQTKLRR8Pp1AE2bhvD2hxExTqp2TxB7AvJbzvLMhFE4D89pbk3ciB58Znv",
  "key13": "4uSUCm9fywTQ1kr1xdFiuRvdtHmJnNXhS1teBrYSXVQpED6VotZn1kyqYGi9pcHB91NzCNUEYCvgxVPxXx18f54E",
  "key14": "p2qGpTRX1V5ZAENRkJn8cUiRo9bZ7v5Lp22i6Nht6H2RmSJBccuXQ1H364N8vWShbkJLTMq8GFBzQ3d6LM6vFfw",
  "key15": "3MRPa9C6j1NCxPUDDrAAumJVKSJu8XJx6BaCUBBxfNwsdv4GQyRJAnN7gMGAzT5g9G4gdNwgaJ52NHYH8juGq2Tk",
  "key16": "31UqKDB1hYpRL4CduiCpP8oLhrSBVFsh7sV2D7wD27do6FDGDqQc3YtPwmBvGMg1sEqMdU3M7muza9iL5yqQFv1p",
  "key17": "5FE9YYDrZeepXok4izmSqXjec2vGxiGQ77U7EhUR1xvsUA2YhtZTAzhcHpyQfgTkoX1kifAjz419fNuW55v8FpG3",
  "key18": "32bq8zy9p4iRNwfKb6LLSXNsZki4VMfCYsMjC8m7NrUeZKnBqZYmTfJvX3fta4EiDN8J3ZjfHjYmtxQKEsczY9xf",
  "key19": "5D56xk6iXTFBJ9hZVLZ7ZG1VEE41wW34YswyvQ7XmP55UVQn4vXm1LiAowqcNyMdpJ4H9EgqXgaQrm7CTvHhtqKR",
  "key20": "2v64wvsRSVR7BpbRKmntZWusoCxH3XB61Yx5jNgBwHxNSk7eJrhJqJWhaZwffF47YuyKpYc2hZkYuJmQ99Z43UoJ",
  "key21": "3GzDgqy7vPAL9Lj91BvPFNXa4YKHEnKbQ8YwTzwR2pmiX2WLx23dkvZoqoCMdEef3YfyzXx5SrfQhMxpa73mWFUL",
  "key22": "3JWHxReWC8YUSa2sgrts9VAP3AHT64DV3FYkNMQiaR1sned6XGoCFnH7FHGY6p9d68GgZXrW3Unv2zBGhf2gFQYg",
  "key23": "2VUFqgN4uLQkPX7of9t64nezJZfrNUHTtbSsei1M7eoJBd9k9cC48JZZANyUYLRtKjBJUJdKjNDKw3fWiDNHeTdb",
  "key24": "4d36R359gVFUJ45xhBVNsuXU4eELphmsYSzuwrRDRADrraRdwVS2TWjxdFq9N5Q369rRRxKmLch31SrWaBTsTx86",
  "key25": "5v14tnLCM6RaBKDqLGFcpgZamYvcmMiTmfwaPb45revVaN33iY58KgxAcG6rQnHEYreCvzRPXJGMYprbYP89iZE8",
  "key26": "NWhazhK6h29i8s7Een898DHa1XREsW2dmd4J717JoCEFQCRxsJTGfpYXvWEUnwqUNRcYMTPscbNqDj9FZ9kxFoL",
  "key27": "4dDNfZe5uW478tEjBiRSRX3WonJfivhESRpBS2VDvNDS9xe6VYWFK5Bea27EsKcJsHaDZ88B8DEq51vQXFBZ7Nmz",
  "key28": "5AtQZtmBtSFX8KM3D5wS8i46vqrsmC1UTdpM9fLyQEWwWJZiWxbyqbvnKHJqpZR1rMy3CaYiTqF5jwsBB578vrLd",
  "key29": "5m8j8RUFemK7S2Rwy33AYDySQLRYg5Ju695y2WfWr2rZzx8eVQm4VnMAk98d4xrns6hsQQ7LvXPez33xP8tpaDgX",
  "key30": "5t7ecPvDcFbejG8XC8y5Q4L8MtzaNSgnESByNYV27acrViuicQuA3gvkufTgcA8A5xNbWE256bZyiSRUgDWmvhhJ",
  "key31": "3jDPUcmhS61CF59TGWQXk5wVmqcj8D1QyXXCX9xGPBYpXXFSbEsueUVob5C47TxsTChYLNegtznB3uKN8hxgsBhM",
  "key32": "5Sbve7p7QHMRWcBCg4KbYauYJuZL6eg81xpdaLbTYKgwXixLTcG8GRGmBDWpRwzxBaU43FmucirBimG6ybKhe8Ww",
  "key33": "4rh8vRpoR4kTMEmwAgCRxEjr99KLWPSGXiQ37XgdREke9WRng84YMbkqsH8Js3xwgjQPRVBRk5W24nbo146wpWzx",
  "key34": "3GCWaTAbarp5fDXdTHCb1FhzrVRDeqg7hLMc2ZPZtEYdwFbavEqQSH33NEdUrNuJP35wQSSXSiFyb2QqiPdgS7w4",
  "key35": "2YgryX9eMA5GDreehDnXTdfXjDpZtDm5S4Emgn848JKSY7fuNbcXqL4aE6ebL9od1EaUvW5gsyEJUJFjmrwXgMWh",
  "key36": "2NSDSEvXgMQZDstMznEoyWp1FG4u9Smq3FntkTd7ztdVSQYPnEyYsdhnTAAQ64vBpq9uCPnxeLJNYtGqGjMWeMEa",
  "key37": "4oi4my94VwvnVvAESQk6B2vVECoZh2gmoqttUPwbc8vvTkVuQME2jQS3hLUWCKvLZRxXcrAodSEktNeGRJMMYZMc",
  "key38": "TmgHM3isPbzFU2CYq39RTzWaTY1ZoDc1zoWvD5haScxPxnxwk53uePoy3KZ8nfVTNUZM2o6ihiwEUAC6A33HcX6",
  "key39": "37vDCbJrLaNxAk7dmHSLnzXK8LX7ExDCpnHNXYvSnVgqvqTJxNVr8ygnFAyYnyTpX3i7kc8hDrdGDmmjBdwJqzFr",
  "key40": "21LvC5jNzRNt8N4GZTwwH7LBB8cQzzGzV4UUQaqhv35LFe192J9CiK52fca1ft2gxBMjvR1ipxZweSYwmkC2tdTF",
  "key41": "2pPGMBa5G8RVSbr8fg3Qg7NqdmtTiD5Q7c1cCASRm4cRijSZbjJhecHRWawcCqSzL2YxEWMQAfa14ccS8MTjQ33n",
  "key42": "5bKV49xQ9sJdERGUESmPWitDxxJQgFTcDD1MsuLPfmbtysHNtz2MfvPuJcKLwN8BbkRjPCETCy2PMUcCt3yaWkyz",
  "key43": "5Hg84JkiKBZYNyU7vhTBeNWioe1HfAE58cj7Yf89cGbiWmVe49Gua8JrWqYXmciV89pTgMMThgKWGx9YNhp3ceBu"
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
