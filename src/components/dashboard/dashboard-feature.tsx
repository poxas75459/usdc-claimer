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
    "3C7oed9FX7vGkBjmsUGwcDTFeHZcGcemXz3d84MiHwj8AmMbX25DqUxkFDNZUwz3kLZHB13Jvhatybp6SeMiWQvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8kbp7CAJDMUKv8ikVQAEzFR6anEUxvWmy4knEAm8nUih9dMX1omSXiWopv81figYouCQYt7RPZWnN4JHHwdmBjW",
  "key1": "4UPt3G4R1CWpszFj5GQPCHyFLTW1V5kCi6ecoB6DFACRqcneSeGW2Yv7bsNHBCpQHYqF2v9rMqVHZRgMH8NW5sJy",
  "key2": "5TssoUHcSRFg6pf8s533gkuGPq8doKwK4jWUYtx2jYHPiJTf5aQ8N76iokbVETsyzD25VRobT2qHqrc1JpTxJXPy",
  "key3": "3aMzjVmT8xfXUNcuk4NF3qHUp8pU7Rf4tWCQqBB4h2UrsHjnLvaobpRpmCPZ5BqTUVEjQpF1aayMQKpKsM4Hc9DU",
  "key4": "vjm9R97RevSyhzVbNzUzk9AAiRqqyg6sMEzv71SRFf49rd8RyLAoTqoR5odjLCbwAaocZar7muBs8Uh9JTVCAny",
  "key5": "43wAY12U2RMoPmMfvCWSQ1MCgPR1Wp7GxBHDDzE5PCeoLYV7h1irJscPr2FVp66iduuxgYJyTQKQzMEHSqs7YFeC",
  "key6": "5hVVcfsAJRNezrDvCycjSpqaYATNRaK3QjwfsJ5PPT1VPRCUEmFLDTwELLaUwNhH2VHjyVGrQnqBsotzLP5rZAAP",
  "key7": "5GQ7d7dBG3yrympn6Kc8Q7BbRvZLx86APS7fCybsKgfGwTRTnPyNgTgxc7AsArB6aeJjz7HysM52veELHFd5nmqZ",
  "key8": "4szgLYEvCr4M4URpnfcVCHzQrYnAv5eo4yFbZMy6ZT1Y1cyDLrT8gkomTZDeMwzo7ZPrVSXjrpZ2EcUBYJAFNtT6",
  "key9": "4DDAk9haJtXq31XNQETC8BLZAbBGW6tUUhUyjMZcEioS271R7gJKQk57wbKiiUhGQT8K4fRfyAqJVXPfK3ePLzQG",
  "key10": "uEbt93BTJYDCqhvxhM595q7q6goECzdAyfFL4BX9FbL4fRDLc2cNGLCcF9c459HAeUiKEurSnLYWrvMLwF3kFZL",
  "key11": "2ZVdpBudAVD5MKKEna6PpHvobWGgTrHBxHNGThzLZsrW4BExZw5KihPY9LwdDYuixVNhAqi8JEq6F4osXC4yu42F",
  "key12": "52wKTZkMinukEcZMrSHC2kAz7qj1TcGE4LbSMEgYqYVyuRVnJGwoD5sZxNXDG44AS35cmGHsHZMuAsNPtjQkiLPv",
  "key13": "5aV6FEhac2niSULYHRuTvLkyfVrgqcpf5yi7kVD3Ueaq8Uvh5QoYBL9mVjX1WLZ6u7N2JBmCPqDUjCL7GHFnRbpP",
  "key14": "67qPaKqh1RzgMewrQixb2TXncbY7823998zm5KRYR9LazUadtyEpPer46MuxuZVmuqhWUhAWvuhxcAo5ZcFrMhzh",
  "key15": "4Wit9ZFegvYtZbmdXE73mxc3VczNwz6Njs7m2qaVn6UQ1iVCRhRSP5HgvqV2hYCEU5kp4ZzAg7TzWVH8Uphkj2UV",
  "key16": "332zYjVoW9sArkWEgzYE8uUoYVHYiHAfYS7bnsDWtejfPAuJx8QU1WxjS6YLCaNX6rKWZPSt9CPPoBsYAr52Q9Fb",
  "key17": "2FaaXDK1ee8YxkasWYp5AuV6PYXq7MudSiSUFXFWPJUmfFVMKCsaH9Nq7bK4fGUxHeWcqVJCg9F9rx1usAwhvup1",
  "key18": "44316EpsnRJ79ydxrfzRv1AUv9BsNNwHQ461amaftQbjSnP7dJQWPefp4Y6MekQBsuC62E5ipDVy3GPXt2b5oD3M",
  "key19": "2N2cRng26QBbJBUWht4sAi3WFETsWs1BT83xFveVwdJpfAJGSM59YmPHkaco8aWa7ZkMrtLD61H4n4pZRmwbNqfE",
  "key20": "4jgLmsBCEDf3WYYXJmwMbBznDrcVeSAeCWp6MmzS94cKtzsiSrvcSCMgMy8g4z4i7dRafC4mnjq7VLeVSGZqY2Br",
  "key21": "5YuBrtq6GXbNdCWQr782r5FT1uFay9BJbgQC7FFre7te45ew4v8uS2HV7uRqEQ6heEQVnHCsfgwHMLkLrYbcjHsQ",
  "key22": "3G2UBYZVXHoZ3h4UGFE3G8qqze4VwQtZq4XzrQ9ihLGQGPgyCL8AE9y2SkWAGzceA7TkzBKuAyw5xaqgf27otq8E",
  "key23": "AqoiY7dToNdMGEtonwHgTCKtVvptxrHUpMzmZVtn1L5DQJSdpYe7cajqw7NvrkAp8Fgfv5vxh1zjS4KKpjpdFiA",
  "key24": "5vhjydFftuqjKK1kzgEiUhyeNfRfYB2QmemW16p9krMuaXZRkti3H3xn154q675z4yHHZjpgVrLJhxrJJF2367Vb"
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
