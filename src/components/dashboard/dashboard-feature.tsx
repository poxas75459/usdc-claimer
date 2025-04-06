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
    "wq6v5UTPL2bFUdCMkyU1bmZH4fXTtPAER5L12QioHcE6z6gY7U1g8uHjZzRHUwZ9wUhDw8JS4c3rcHqNgZbusJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZRCGzgC9Rn4iy7kzWbwAFEwkNU1i9v8C1qxTLTRLyPsMJuwzGRnCEm23LxxZ2inD8t3CXFFerZhPoVHGZMZzpQ8",
  "key1": "3azPDcrmJBHgSwcQ3fJZDe3isUqwKXDuNgNwDtW2dzYHQVJZ9MFXppHpum1BMvofQRFMxiMq2AUmszceRA88jvd5",
  "key2": "4KKmpapUaunXaZuvc86cxukKuVNQ4BzakE7YN3HK5yiJrT7gM1U6gfhQung7QL3bzyKiGXBGjFWGxoR6cT9q9ut9",
  "key3": "4EHM4y71579aQsnmc4A15uBz6JK96WYHuXtc8LbmFdwTDw1ndwZQp1jAydzJgwJt2p1bgvEGqiyCqk3nfprPnxBV",
  "key4": "581enjdQLsPmQnqXXqLxbytVo6yzdiPY5LX2R8HFYTB3ENFkVEr6fJPPA7SN4NeuBeg7C5UzHUrpYkoPT7mSjLsZ",
  "key5": "3Gy3idtNujEu6BygxBsb5HrREVTCqWf4RY5QaHZTFTgf7zaKCoC9CbKNHifw7izHYURUU73S3mLx2yL4CuPS91hZ",
  "key6": "5oYt3EHsccsQ9c7VkJHZqaspZAib3CBiJoXD6SfyE23MhnMCimtFDNhqqN5ATVvBWKMq9nwHKm9Kynf1PX417DJv",
  "key7": "4tdULjhijH3mBEBEig12F6Y5cPV4TbyhJyup8QBv8c7q8qGKn6Pm8wHfVXDaykYNwEWsQaEzKgn1GifyrGqwJYcG",
  "key8": "3KgiuauuB5xS17v2rXGfP7s9iDAa3M8iPwvu9shU6KVdC4mYJeAwv2eouWyXX8YTtKavWkzxawDm9aG1F2n9AbfX",
  "key9": "4hUetMMdB84RCSDw2GSpPK4e1jbZpjNR8fbHo5qcFWL6Mwc6DT5N48ZBoUZUp2mMW5h2d2YhifQyNqGjM2ErB1YC",
  "key10": "4sHr9Nff7YJAUcbr2oPLLEGWfK2837b72ZersvKH3hmeuQyo8k4Lx1RnYU5yfzWUuBZKw74cQrXgBMcJqdCtystm",
  "key11": "66fAip8PbZPwTVt1h6nZhpzN6N1xTDtf8ZUTegvqMaHK83Xz5DYR8bANUrGoKvAjaBezD5KJFwiAW899zUQ2KyUp",
  "key12": "vcUZrCY6q2fJ7UwW5MWZdr99zqURSopihiokfBt2wodHamQ9EEdk1r8ncuFgNYiwxv5ESqsf5px5x2X4ndz7o8m",
  "key13": "5uJy54w3wJMSigK3WhhdpZF5Q3bK6eCrn5gF87bz4sQUsAeSHgethRDuSvTqRJegkLr6zxQ8tWQ8VydzWc8Y23Yd",
  "key14": "3obDjF16a3bW1Et7pTnZobY3GhHHRY4TB17NwT9mDrmdSiSqX7WVAMppRsjdmmktKyzFnn1HYVAusvgswJtUHdpo",
  "key15": "3tS364Tkfmrcqx5ZfgAtSPT7RWXeb2RTkKCrnyCGZpmbFG2PnP4a3qgc8XDHqhjGLmhkUHKjKbfWnJjJQsgqf8xM",
  "key16": "3LfdmchGn6wu15dEom5G19umP7ggg1jVM3TduatG8tbFq79JkUWDADG7SccAXhaMytj5wjeNkat52Lb7pxTq4tQP",
  "key17": "2MMAgGzRQ2ghpyTaHRzKdbsNF3Azx3Z8Esj7M8j68wfLvZdpZwykN87HziNLwbGmhQxadrDQq1eXv2fxbPRNCx9d",
  "key18": "4rd9Gzhgxpk1gPssf9HtQ6Ut5mZM3JepkUuEXsPPsmtDEPXM9DGQhbBdsGmYhfLUgowoRjJBqxmfUfxfo1rRKgCd",
  "key19": "3ihGpS1FvHoyMZMMXTGAxqNc8mkcXnvSkYe2mykNL6nSRcpLSkaRRHGfiX6hUyonoA8Q4m3FXbcw4733fBFq4BvS",
  "key20": "326ECJd4dXfwdCRSjShFpuWh4X275f6KBPZKbT9aB5TdNjsGxN4S6YqRRHEkBvpp5LgGPGdoCtCQAJjVJsVUUccc",
  "key21": "5xfeyyUSWHpeKVc9FDK5gchXeqn5N2DtvsiMGFuYsE4f1C4Fvc2aonPAJzS45GNnoSkfS4X7Lb5s7BKRXfg7fauk",
  "key22": "LAADUgeBgbdaZrrV4y1pfoH1qNryB9MPsTNq3cPGmLDMebWncgLzNXuJeWCwzfoi5UngoAtcA34XVFHgFhYRucx",
  "key23": "McDwwBbozfXWABRAjdnPptbN9B9rwkemTyqWzEpsicyUFhUNuTGHF7LVbcQAGJCvhwg1qMk66qWTCkP4WXmNZB4",
  "key24": "2CAs2igL8xpdDE4PTw8CX1RmzUeRKo1TimHfRpvc53uDz2mtPWj7GkvivRzkv53jCP1hDJgeF3WyJ7kGaGGPKvyx",
  "key25": "5HmGm3gGrCgr3rnaNMPoruyrgQmnEgfowo3i9u5Qfw23Kf7M9WD3zPabuCPQWba2gaNzCEGdEM9z23YZsHh8qsEw",
  "key26": "RyWHeNb19dE6cKmrLcnHu4zWxqW46NdC9y7kuyK3o2tpVxukEFt9tUsAoohTQ3aSk2NLxHN4tvcWXoyL5wdLEVU",
  "key27": "4jBgfyCgaw4BC3fiqgFzt4cztPWRiRgfTW5cb4K8yjwf2zhUWxsiQSVXHrer4feDq7iha5u52xo17dXeiJMdxoWs",
  "key28": "5ZV6WtNSFqi4jZ9sayXbZVsPRVo2uAuFRtgPKrRJaxWuK1dMbZogrEqChsfGQgCKjvDqJqb1CPpKSfDdJxCbJSJQ",
  "key29": "2oMoH6ZLJtVUWeRHuJuzqBqHg3LVDCHYC64R14WamNF3vAPfePuhttp3ADnNuAnh7DPWsAiaAWzSUr2peqy1udhZ"
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
