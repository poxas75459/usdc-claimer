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
    "3CAyN8uAtaPHyCoaupU9khU33vp2awusQ27r78bweiq2sGD9LHQLkBH1MuE2Gkv7uq2JfoaAEeEgyfNe5wGzeqbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p3g2j1WkbyYXQ8wSiikxG2oU2nSnysFEKsfX7SEDdyNANuQkVj2tHqLqtzZVpCmcEKWvGMsdV5SrXzWhz6sG7fd",
  "key1": "6onVYRHkHsiNMUSt2zVY4zZpwdtuyFErNsW8vFb6C2NciJMnDVi7PLus6bmZBVSsaN13KUiSF4fmTUBVBNkZdXL",
  "key2": "29F6xzNoc4q6ptsdMUsiGtC4BoGK5AWgSDpjeVyHKLrXYcr1Zg7Nfwc18yGpeovgDCfJGBrkiCT4eQ8wGHGdzFUJ",
  "key3": "3WUYrkFz4VhzQuWmbJRqQsSmjbA2P3mH8FbCumfyENJGATbDCp8JMTF55VRQ2GJMU1axqzEoSAJN12s4aqgLVCko",
  "key4": "YPFU3nhVXAHcPunkQe8Pz4JFYWrhDMZbYYU8sKdRc26CwVGLKCPsixFsm4ih195sWMdNFQSmrmS3a2e2XkSU9DP",
  "key5": "2dC96vPhUGzYpXwbaVM4V8C4XWem1DnUasKWLWPRbbq9h9rLSgoBDWXeBac96WpaapZxqtSLjN6BoD6YqZ7Xu53H",
  "key6": "5dF7DNPGLm7yehS9jZmpEULZWX9qEsW2jXsXbit78kJjeZmMdUNLqCXZudnzVUZHHUpbnJqqi2dqCukFMkRfS8fB",
  "key7": "5KuCNkAzxZCc97psVwf7JbevFoHEED6qykdW7FF5CBs8ABFGoRfMG26rTXWGYhPEqvn4afEwN37TszYRnijYWmn7",
  "key8": "33KYLRFBya9TwzWrVy5ofaavsYdEcFRHcZhC5VALesHeXtVXNNQ83d65sUimF3h1FRyWBxXbWwcnQrjmyv3UVnUL",
  "key9": "4w3JkbCEzSN3dZeCBB51AjjeKikJDCrhECqP1mpvzVMvuFVcnjuvvZdQsiT6DofEuozH9PAuQ8tYqbS533w8rsVB",
  "key10": "2pM45c4LJQiEoN38TH9QamUhRzZhAL91chX2z5fK6kmAY7fb3VU86SCjsZerXLJrnSenTNWg4umAfh5vTnh8QLZU",
  "key11": "2B1vLrMWagqLNn2jowF3oAizdrkXSZL7SUexGPiDmgTtTpD8Y4cuN2EpMLkfwk6MJDCnw5DTEgDZPhyWyp6yRZYy",
  "key12": "Jd8FX9FNEMe1CFyNe38BcgiunvZnHFdF2pamfsSZ4P2eK4fniJPQ4r4pNoMdqiLvuhqPMzWYAwQTxjFnPLW53Fy",
  "key13": "28rWhKwXTFbPkqQ4Aa6hFELsF4XY9xFiwQc6Wi5PKozQyVgh8EoR8x3gnuZAaBZo41hmo9bGFdTAAMa2zNUgzoUX",
  "key14": "2EpjEsTv862eW1NYaNGh3bu6qBURGLfzbXLJ9Hb3RxiwPWtfRSL9Cw8AvyA1G98sFRFv58HSjcGRZmfoqWizEeuL",
  "key15": "4x29VCBCZJrmGVBEBj7mMAptM9sLTiMBjhJbFQ8tLMXmAA7jbhVtDtEN2yikdKxozUsXE7FRtUuKJCXdHUJj87vu",
  "key16": "4acsbwwaMZTJ5hHHu9Ux7iUX5SJf8jGA7SWCyAK6AMx5W4yYkfyWg1yTLvHUYPeTYWJN3x3W3vGABdMwyY7vVbyb",
  "key17": "4FMf8vDGookPdBhchku32tNyZhWFCXp7zetDbFVxEX5YQxuhbzA6aLqMXqMpZUWbemhbKUzFfQq17EizpeQiMVNu",
  "key18": "457EdsDGYtfCMwsyxy9Q3LnawHBqXZFNjpHhykRXyfaULfQ6x5awoz1N5pmTko4hTfqMTTvKMEk1T5dSnccYuLpS",
  "key19": "GFLHKpCcmqiNHqnXHzH73FxbGnNeGMzAnXsL1V4WmJ7mqEsKBUd1Y3biX4EAQb13hs8F9GdLK7F8hFntAPiWGkW",
  "key20": "2weVnRAPiaB4tswdDa1iQJ8aWWbiiHYUBrBor1nd2KUzjb2ZdRHgcQ9TcQPVDc9vw6pTXWJAaeiqfra7D7x8tPj7",
  "key21": "AWKwrmrrfrEeSpvmFeV1KM6nb1RCWCENMz93AY94fDKHFfK8LpBmsYHEhbP63subp7tFnepmJf4rJD7dT5uFn36",
  "key22": "56HAcaYmbS21ESGrQLRywkxRRVZ3uVAS3VS7BEkQBN2Awtw8y17L5mrCZxbBkPVtSrGTXssurg4hxpmA9DcVJSPz",
  "key23": "37LsfkLGBNUpCNVVGRZ2wnNnRJsfeTh4yF1ewN5AekYcnxVoANo3eL6Ly4zz4dPc6SqNZyoJ23C1gkxRRqtpm9B2",
  "key24": "5cSP6MFired7kCuGwPpg5QWqfrGNT2rA4xLc61x3nPWJz1rGmNK7Gt3ZQNae1WmKSXzcKUt89RSbrukGFgN7Amxs",
  "key25": "4ZJoj5YVWwyg93tFFEVhaSvGMpMrThn5WXUKV83xqfvpKHbVq8zUSh9tF6M2gDQL3EWcbfvkDZggBvqxtwWeCcM4",
  "key26": "23ym8p2oBF6oFog6ThnPDNjfYUVFeEr3UXepLzs8w4kmbxsA4efwRPMWaMLsyf8Dw8VD7Bo47GX3ybjKb6mcRgBA",
  "key27": "tmVj7wyGtWRvB5SjEu24FEXzsTzauukiDVFFDQM5mUym3squPfj7H7QtxEmNRviQF43JMF9pfSe3RwxN8SVT3nR",
  "key28": "5HUZ4rPvAF7aiFns3YBYwFH4smJ9HvC64R9CLnA7jkTPuYE9h9awQUgNG6JEmNzSgP7YnTgT3tcHs16YPhTXr1qL",
  "key29": "56aBPRXc7UFmT9qGFAjMswf3GRtZdHB4HiEhH5yJ4NEtgHdU3sVaceuG7HKF128ZF6JhxTVU3YC8BrgrPigU2FiE",
  "key30": "4t5ChHAFzDmtbhwkGQQwuGxwiX4qnJZQn8vB5Qx1eCtV76U3qdWGqJSKUt2heufyCib3KRyDHC16LmJJ4C6iqbTd"
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
