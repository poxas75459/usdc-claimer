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
    "5y2QDEoKjAmsqrWXZNeV9oBaDF8tGVUWZsya9Q5UH7aDzayPBK3F9NK89LHNgAqLBb3LA8EWBc2VzeDn8ZYFciVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hqiejS2ubTyzkMzjSzN83w3JR3cXWaUPzYZXUXRjkYY4RKUg6tHkpTsEytEKf36pLTbd8t8zt92HFPqR1gZ1iG7",
  "key1": "2cyRiTzcFNs3EM4E6pNYQ73zQCeN24pM1HYbyyZWqRtSjhSwrMb2QmCCxUsarzYj6D6WBXYVrmr9c7SRHbmEXjYa",
  "key2": "5p4m2C3dNfqhYCqhe5s532fdgEeoVAgRaRQA6LPuYhM1PhKqwSoPA2X5ihNoMpGw2SvFuoCpfUkr3WEH9USVBCeG",
  "key3": "2JSjXL1GmLc8KV8L9dBZ22ZN8pXQK5vBNxKjK2QjjDSsdmS1BzHgXN7MYsQ34bjTiPg9FBXTjG8rTNa8jcRpuw9t",
  "key4": "zx8ugk4ANbUFeZryiJSDXXbacCs6mChQLCb8L2RapNzj5vvWW7QAEGadL7rnDu6HCvECS2BaZeQBUTQYFzTdjQM",
  "key5": "2fEbjYbAUpHKRqeyMLD1wCiGWBe71qXEp6yvvNrM1bdQBg1ajFLMA8ztRQBqQLwLf22Uc5AYXB26aY94XNsiaj9h",
  "key6": "4jTUatG4RwKHQji4DXrSLV5BZqHfru93DcuDEFVE6G8MnqtTdAYT87F4uDXoiJvZtsR3XcpTgcwXN1G4BqQpVTm",
  "key7": "5U7GnsBi4whTrgAxLQ5PJbjhWZt2RErg5yFtk93EUas2ih2iKPHao84HXAW53EKBd91kUxUvwgS6vmtmuXPzV1ES",
  "key8": "24D5MRbRjNa9ENNmNHttZaS7y8bH2j5QpQtxFcijRvjTHwg3YCZn1rnmFgDAAbKAHauNxGe7oLZyEXbw3vWHcUQX",
  "key9": "QT9gHsighFG8M7hHvCpVd8WQpoDBvbgPn7WqndoyKLbs2BMGAYMDU646GCnMPBA82i9oGXGj73pqbNUCscsGeLw",
  "key10": "5aQ52ucHBF5a2Aw4snBnKwmjHbgsXuhRUsnbzhkXqPSD2b8X8i2Hc53cVxFqKCfrtg2WsUVkWJhPLFtvkcSGKpwd",
  "key11": "3Aa4iK7AESVq61h5g18vi5CQ3Xv1kF5RurotYC56oScswCRPsVD1kZqvKbuuTS9537pB8gijtFrXk9MfRRTKu93",
  "key12": "3v3D4PV5PhqtLynfi9fnBTtwKc7PJQAneBuDfQh8bgTqeS57jWyrHxL44viSSkLJteoohjc2GLXBSHSqotpkD93P",
  "key13": "2cz7TTBdkGPtxMrJ1S3gM4AugvKuLGstBoboBCYVFQ2d9VW5J7DwMPMfdNxEHvEdsgkxSHm9qsK7ENJZ2xV8Adxn",
  "key14": "3N3G1Qb6QezwfQ1wKJLXCNNXq8mJ8kV67rTaqTwg2xVUc9XXzmQiqgYh4MTdrZMSMqZA1WvnR28ePxu8FCdPTfdP",
  "key15": "5kQVr1iNF38mxkwtnFGwXYVk3PvvyApwRVN9RyQ56M1NWYFJRix32BSv2JBbrU1VgMGUkWkpLvjJStW5ATHdRBvF",
  "key16": "4T6NugNEFEh96ykCnuqHEZUV7bWLcv6QHgrA3bghWjLvzsgyoaWeZ3yc21ye46j9oe81ayGaq5pjJFzHon2pkexv",
  "key17": "bAT8nY9YTeeQm2LgEquohE5RfozQdjNtsKYg8ZEiMPKuTPL7SWS7CSY7vmmnsyJaQQCNasyGGJFp1Z1qJLHNCoW",
  "key18": "3YbB42FFVkhQDs2wrmJcRFomhhfHonLtzG9abBGbZkaZUpnvbB9PnRe7y7CG3mnSM3MGg6gzGm7EgKtyK9VtbksT",
  "key19": "2XzF3GYp4cfFKRVVHbKB7cNz7a6kLSHQvJaiUDRciD4pdTTNFVyWuw7AXMrT8j5WV1isdoxz7XJhGJHRh3p7TxT4",
  "key20": "To5dY8FT1B38gju4nBYaDmnLTrdmbXALc7MYMz9zumMiKaMXHWAaYJY137PSMZh5eF3dcVBm5oLC3CXuZ8km4MN",
  "key21": "44vsuFYP5MXSUFMjFb2xbrzdS17heJMDhQoxCfE4vbSQAFjjr7hzidd6hwGiTmhG2CLYQPKPM4azZnuFp5qZ4pTk",
  "key22": "2CSXEjjAfGne8rwJuvxwmmTqtVYJC1N9RmPLhLGurXaTpiwLBgcf7dexMVoY481q9TU8fTciz6FduM5aSLRazBZQ",
  "key23": "5aURa5Y4ywZwWQkdsHcYqTjES43DQWMt2zucG9ekfaQU8oxXUz5xBRwuJ3UtDjcbQoK523Qh6TnJhiPWvW5tof4n",
  "key24": "5U52vwdrdcKe87MD9JBai7LoUv7Wda7auzcGYQ9TawgLF6bPipx2dDm2FTTbZau6tSZkKtinabyYQh2G9sNaYZ1q",
  "key25": "5niAy8TpMnYg5JJigwh1fh8Gqeoxjx3nFTTfpDJpoCDAgsh7X62YdcVioSkwMepWw5PjEcbzMLbbK3ec3cUNGgpf",
  "key26": "5t38ZNexmC6CbUXQ7QBBCAH5b7SNPKgmYMgEu6owvTBE23pnutiKv9koT3QDgTULFgbLd47cLtyhmxm2ramf1HkQ",
  "key27": "3W3Rn76BFbLzergc6jZ7n3qQ9zcDgNXXJiUwowVMRpzatz4MmuddirozX2ZVEu6rCW5KAkMXzwB4E2RTcqTv9Ngc",
  "key28": "4Qo3eD7q7Sbkgi7boPoUKmjrMBayk5tUQRwx4QdVPZ7sikNEJTQinu9qyF4RCobfpXQ7LMhG7UDafUUCAHjbCa57",
  "key29": "3V6758Ub5wF13CtH1TmuCzuGK8e2tpFYUPfWVHU1vYebJeESqBsJBaWYJJ57BzsGMMEVAcAUuXLoGuiZ3smc6bfv",
  "key30": "zTJNae1QK9TGppSpHESU74FL1F2hrSnasuzi2FNmJgKzqJ6KGGqdhYAXULCUV5ALr9YM8bNqHuX5RNFCXEaHxrN",
  "key31": "3oDvHAy7pdb812TZ71WrdCp3Z1FFehEh5z2ex8nMUNXNYzVaGTzVd3opJUYk8Hm4rjgzcuAJjusNyVm6yLyZXa4D",
  "key32": "3SWwMppdRbHBeGL47C1cUi8g3LjDwQMELHTb282WgMt9Wqagqpvw7CrJcNHGyvyj8GwDZE275vVKRCCMEtrjPehV",
  "key33": "3r3sVDDfemzoqVA4aa55LQSmYovjwb9z1zNtyxKj9JVmMNCrvyuVbHnEHptkjNwedWckZFTyH1GxNDQc2JF7Bq4w",
  "key34": "5e4cqNMu2ugW8Ba71z16Ln49C43kCNDbW7DM8ZDKsnZcuN4MsstoPLr4s86V2xyoQYPXbweFxvshbTq7VirwSbAp",
  "key35": "TybsrTYUtLxuUwa3fWsj9S64mEQQ4syqrNVudm4GdtePe9LuVx4cywmDt8ZicyuiLuwjkHVraFrMcuKLjmSiLDp",
  "key36": "25db6brHK9nXGQNkK1wMeui9snQEszSFJkSG2dG8fSriuqCh5tDgYAoEa4WLwd2KJoPeKeS9TdKNYaLRGWTHNsLa",
  "key37": "21VziVoiXuGVr7qjfhvrmEQ6zdxM7HjoRwXheM3tkpgdoZFkR7PtUQXMX49MXRSq8aan1KDYe1QU2yLmxBFfvQNQ",
  "key38": "21wZio7BPMHmDug2ZFRunx1NT3YowX7SXb3brRJZa8rbNxXZypCgXK7Ma9de8PwYnMiguKtH6DxxD3MNu3Zq7pTf",
  "key39": "339YYNDjZiFMP9ufnfPMBWyxYJWh2eLng7V4xamTszif3JNQNcargbGJzCmNybc48Eqgt13r4Pb4fzyxzXASXBbQ",
  "key40": "4BsSDkXiT1kk3Y2HyimZRagBMqngFNycsKyM6QJijeDYBm2f62SKc4aiLZQ2Ji4DYkKoeXRYEG5pmehZD2mjKw4d",
  "key41": "4mURnqzvGQU3LB42rTc6PNLA3rcQcuNuMTnZZW4Swwj4JHY9iyWktDxUqFdEjJZKRfRickMWYMdYAixpvpa9qx8c",
  "key42": "2MuHFbUkiXzJiiov4jQuc9SgcftCvh4txqq7e3dWapZkdHsbL3MfNmKJmcesAjH4BH9QSfkAdmYVo4V7TZN98oC",
  "key43": "3e69We7ggD3ZZ3xWMhaWFS3JMH2EcfaZH4yEDTx2ohsbCFWtPJnK9zPWLFHqTd2ShzoyFjHCLZSbmb4j21ZznB3A",
  "key44": "58HMbPnKhZS8TQ7axUJWqaghV1nfS792dqJ3A2JJ4itoXRAmiW8poTsebsUgNHkH5fbdryXbvygt8zeerhSuyXEo"
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
