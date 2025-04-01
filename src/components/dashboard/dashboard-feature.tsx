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
    "2zJ8G55cn1Q6c72x6BrzcmYvTAy7yvYdcBLpfZsxGrRWgEdjkQuzGcPP6rixuFCRjjXzFT1yu81CsrSbJ1xDmPS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ethp52x78vPRByg4vjnsamW84RGQC7LQcvMt9fvcFy7oVymFwnwaDyxAqjU6n2C1fLqt64R5jxxMSk2aDFUyegE",
  "key1": "45WFwNgXHnArCXfGQBDAFpgRQj9LpTyszCY9fxQnh8i7eMXeNTH4rosbcmig4y3NSuRLj2cEWdTF1k7a6jE7c3pm",
  "key2": "2bq7vQvGNwNgasbqYY1YdtEjyturB5AuDjmhDNz4ZoPay9MVaMzQyZAHgmU3fdhaBoyfKo7y9AQTiL3N1TFyZQUw",
  "key3": "4UYdE7W1fZusUtWyT4KhsQDYLrLnaYNXpzYkQ18AahtFh1WenKRaFaJcuvjoihaFk16NSnruUy3jNSGnFX2UF7RZ",
  "key4": "HpJ1z5WXv3WZiSiNizZN6vP2fKFj99kfmcGW1DhkfPRwSS76dX61H7YZ8DG4eLVxQterUrJi5e2oQ4NcvaGCVWc",
  "key5": "2Eq6fVqefwTUfgHrCGkZTPs25uhm1muPjKbr1zwTkhBP2vtSHrTC3G6NeYirxh1GowPdRv7YG1Z776eUjZQe2fVK",
  "key6": "uBuJeToT2kNjpe5pZjnzEtJWs4QpwaXFPtUZyY3d3TrXW7EdVB6atpYRhGgYgV143xgLa5pgUBVRcVzDzMHW79L",
  "key7": "5KJjP7NoCFSwD9td4GKffKH1QRV2vXfqPZZZoVptnYH6Rs6pLpWm7SogNWNUiJtXJfE2gt4HmJeewzoLGo69RRFS",
  "key8": "3m2DKrhmesERSheas7hx3qhHfmqA7T4QW718uzFJiNmA3qdCTgaJnMLNMzPZfzxgguhiBurEBSYaF4JAXvFPZMLJ",
  "key9": "2s67FLUouMFvRHeLzx26gS425wCUunin5Cp8i8zARREh2PzCDS8jpn3CpKc6U7sXuBg3KvFJJKuBsgeW8uW8YBLr",
  "key10": "4A58cktT5Wq5ZhWTTjSQVQZcP2iSLDADXYjbkRCNhhV4kohTSVZcFqJq4G153iDyk91s9nHHin2H6JYMLvXHDANg",
  "key11": "27G3XSUzQqqxanxAscLbUkP1UPsW5b2adrd8Yt8ADm3V4mUQZDvgKhrFGAkabuswh7uVrxVQQeymJPU3eZ4rV2Ya",
  "key12": "4d22kdek5LtNVqEGEEui6Km3VQvqt4VDRPWJh615UYkMvyLres4xsX9x3SXPdFR71BNSH6nxm8LV1hv2RFYMbS7P",
  "key13": "gogQgzrqskJ9aqBkKxZSn9stRXzfKwU2oJTmS4d41KXqvbdtXLcxzQkPKeCrkA67yCCoiumz8mkGGzW7B6vcY3K",
  "key14": "3eWnbE1zaQ1o3bFbudSpv3LC6nBV7vk6qkmiD694mtCPQraWu5Xa64KTgE8Y33NCpRexCurm4PDYz7dDsz2ogNsP",
  "key15": "3jGea2Jet8cdtbmss61M3cr321s1UFWozNbzsrz1MdGmJFdGxAHNojuWzavddC9twqP263nXh7V7GsSpTpkyVKjq",
  "key16": "3Vb2rad2F6uuvGytQj8jq1TzweF4qUqUB61aMBLjRYMkfo6TE6kn22ktniVKnrrzxYdpMwXdWNArgBTX8PwcDgLi",
  "key17": "3qxT2PeooJuTbLJFnaXMKNPXe7WcMGmcfFYL75DZkGmGG3iMJacpWe5tvu82jD3m47AtGSLvYmyAFMjs71B6aCaH",
  "key18": "5T9qTTEvfFD3uudj6HuouYZGBKtZkkrGuSgmmqHgE2T1YzvV7j6R5DnCnHJttu9GB4jxhYPp45sYyQTktJzwVGcm",
  "key19": "2YPA945StfLdVeMMq9iyBXoztDCzgzUz9HVPkCADmjhDudBAW7V2g47eyBgQw6BhEhfbv6nnK3q5fHe3DmczpL3e",
  "key20": "4XWdAs1tcr9mCxQbeQ6qUni4piSb6Rouv9ww7X8YDF3mmpdE6dex6SCP1GFeWaA89hHAop5T69cA2ZMebp99DcPR",
  "key21": "5oyY1s2WCETLLUvWUj97wLeFZ2roRGaLENgfnt3jzGjCJd9TFme7dPFDmLZPDypsjCeZ22FNsPfJYNEAPmepgf2B",
  "key22": "Gfx7MozHuwBnQEpBynkjSFNYeyVJYWAhrUtfvjHSFYbBxnQCtb9PvSaLQ7jpXRUMpVgVqsFCuJzFD9u2nwVS6cd",
  "key23": "3PcXFw2EJfiTfG1E6mkbTNwJo9P1yPEv5sE76GA9wzQCtWs9LKwY1mqeVTZJ2C5WHoQhcEvtEgaUVMVNYuC6Q6dp",
  "key24": "4JMTHjLugP2oEUqHscHdhrwf5t68fyUMc7oFiXDzcQkqFq76JkhsHA94wctNWAKGYZg9nHmt3NJKaDK6xRE9xnYK",
  "key25": "3N7BGP8zTEgb8StSX1dhRWMJ9qcdnJVCpGyRWqWn3jmmSFc5cP4kh4SqU6qW41oTcph2R5G7uzLPKMXkR6CZcg3t"
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
