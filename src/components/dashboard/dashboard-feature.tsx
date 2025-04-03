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
    "5rXRCxookhcvYz76Kz4MumQfgppfqgdSyQyu5Es4M4tNsnWLpB9Zv4v6Bd3zvZnVWT5vjHjGqBD18fDCDLjLUPgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E5NkFnDn3mbzekzDnHUtDQuUFFPZSFKkR4sHvs4DmU9KW5CABB4uBfseTF3yFQWcMjMzLz3Em3vh1Bcv8kBqSwr",
  "key1": "wimJaPiPrYa8CPKbhPP2f9MWZJNrEg6Ke12jwtFi75tTX36mUNKEqGvWWNgwuPVWLyYtoPhC56XthbTQgVNUkAa",
  "key2": "5dsnnZE5RaPWk4yq4iUyGSMqKHzTh2RGgBMwjm33qj3fGv4tsnF4otqc6oMnt5MVLoVZTQ9HiCdBVc9ZFAg6QDNe",
  "key3": "67FMRDtDnNXEHECoaVaMdeqZEvGMihsuQpuNM41fBvCbSe6Jw9epDR8oLXNdvnjJjsFvvkxqz15TKxE9NVZxEtCn",
  "key4": "4XACmppVJnEwa4v2hbDWQGWrJNVW2WFHdqvi3BzLukmtzmLYD7iHgjh2CZDqY55Dgb3pfEULCdT869e5J2vs8CgW",
  "key5": "4puz9FwpRmvHCztFihrSymgq22UfozDDcree4mx6Zzkutn129T5XgobF9SHfRLwTH1X6Cfh5PVmMGVcTg3rTytNR",
  "key6": "2jWYGuvSqMEUDwsxUtoewCzYF8i28XYFbV3inYZUmmKE8ZhYRqHgqE9U4STNpWDhCEWZYGsNoYsgJZW6dwV4X2b9",
  "key7": "4Q4WXtmUQ8rCH4CytL5AiutTYowwATuZ3vsMFBxoUyoQbiMEo8ZAHEEwEpt5Bqy1X17XQVNjCAxkKrcM4gsRnhFN",
  "key8": "g1ViDVKUzm4bVYDVt5ewCXxLJeaqYRdFRNQfi4ySA1evWvmifiLjmxNQh69VvZr8CXvyRtsUijAJNG8auzojBkv",
  "key9": "F9X3BvqJJe2HsNgaD4d34jiPnHzs7c2gGfbQMtyiRHgSEwGbXr69uqyDTFFQ2Tpn8iGrZFHiMXYN9baHPsAh9m7",
  "key10": "3yvbCZsJTiCFRCAotWtdo3AgyyFDPB1jbBeDZWLb147ZgaxtdHzm47n4nYz61sMxYrev9E1RQKDJ4euABMtpPJ8Q",
  "key11": "4ZDwzjGdVmDWPd4uuJkKPjL6tmcQrReqo9j1kEwmo8qZz1iiL2w4HNMPuWhjojTbygHVN7DjTHRsexHVV8vovp94",
  "key12": "5zAL1bqADa7UbTNp1pTycawMPkyW7qCjj1VTkxN7caMwoJ9VV6m7aMy5efEteWecziXHCWVhGmk34ZdamzB4cmVE",
  "key13": "3TmKB4frUxLLzamTQ9zbz483gPoifdoYkpG9Vc7SwC8jzJrjh1MaUtgC934MhUaZHYcUw1kLy69aN3YV7SaGyjQf",
  "key14": "592NmkVbDsii59c47D1uzBRSioqq5YTn7iekgL4BhXVKuR1iHe6gkcYFhtCmk5GnjPXxkAUsrrfotVYQ19LNuvMx",
  "key15": "284S2sDWrHF74D2s1PWiAmYvb9f6HboeRrP4mJtra7HrsDvw8NvfE4Fv1XxWQPFuiLq6BQmDyGAuJim3YjFXVgC4",
  "key16": "5hnZKQiz3fcsVqgy5SSJ8x1mDsz6oh7GedCwyWXJQCMYceL4kVzaBUAJRFE35Ae4Ej8efAzCGekQ2pw5DWTxc36U",
  "key17": "2Uc3UxkfZrzQGiQg7iW68u3tnQCxMrJsYe7UFBm76B442KbWbRMsZKaNdTpvhmmXyp9ihnAQWq41QGMD18aS2qFz",
  "key18": "iK9MvHdDWuvciePjczWSuZugKJzDeYonxBbJCVrAJ55RGEc7Wtasg61sQDt1mh4od2nw5C7YWo48urrwEgiEgcu",
  "key19": "2RtRfRNSYtAQQ7BAchPBGPkHUTYH649RJKzc8efE9XP2sCjg46KVr7WcNtbStzXmoQK1vK3KeUk4LxinkFYUqzr4",
  "key20": "5U29ZfHAYS9DgsSk8mNAa67BCGWWa3m36WGMoUpMSDVDyH9KhdwP5e1VAR7P6F93phvYupfHMwndmZDG5eFtQRzq",
  "key21": "86SPgCaHoyVAD3AfVrfMALMdG7DqHwDFCkGN3SMc1gCQ29C44UFuPa39rbPiMmLo8D19s7Xu6pCPuDYH6dTm4f8",
  "key22": "5eeMKCD14j7ZPc8wtvtCs9pBfddU62q6qd8ypgFdX8xD6cnJcLGtHbpCB5ntzGzTh6GdurLcW3cBjBxX5FRfzs75",
  "key23": "4NN65UA3bS98CMg1VzJDozrRRRuJTsz793to68nDSUdGTVhoDDngYrfTMDkyGFkH9pWZphzdHUZG8ss7gFZzVbDP",
  "key24": "5HTnttxHTBDM5pEcJieueeHnfrySBufaXzMF8jMrsQjR2C6uqan2mdJTGhGaaYL1W1tyevkt3R4kXdvXuWvDREFH",
  "key25": "27PTRtSZGH4au8aux1s2xyCHrBnk7uREdF22iHU27Ci1Zcd3gLa2XB5who4GQfQpPH6KNm4XvQpoVKVrHDAngVKv",
  "key26": "4ybxant3RDMcTcexNJ5Ap2Mcar9WkeGogvQVRoLqTDmSEbNnvtUkEg4UEFsp8dMnS5rKczs7jWKLWXmL6CL2iHuS",
  "key27": "23Rce11XQre9wDoDwz21D4oQysWAtrjECoxBARiJZCgPC3qXrX423znVUKYavj96KqGvtmnGfbvTMxs81DVpP6yQ"
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
