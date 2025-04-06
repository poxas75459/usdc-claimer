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
    "5Cn4fHjTnryCC9nhBduPH6Fhjbi1hmgrcDMjSS75amB9z2q2mLhL61ReuKgLauAdG2F5KHgaEBuBZFUF5F2mZ9f2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wgsnnMvjUPq1N9TVCJsRC8YGdudwUMmV1rMW1gxphdJ2HW8JepzpaDCGhqHUJay1o38hNwEzy5zfLb5RdcVk5DQ",
  "key1": "4p4onkBcRpeXNdYNEBDCeUyfTerGSgR5fcDDY5jeMEcvDdWgJzPF8E5bMPJyJCMu5G6gYFTDSeYWG7kKQGTQ44hf",
  "key2": "64EqNcUPvzesZyB135xkdoPXRXUqABkhp9696oJcqZ21jdHcjTGv4JKZEyh8UMXX93R1jHn55ce63gmZMvari7R8",
  "key3": "3MYEMj3vqUUeknWPKxpqoqhs8cyD17CXW7FAgRWNyq1xHSZxtXCshWiZoScgabSAH96GRGarCrkMeNsXL3iYVHbH",
  "key4": "3u8Pq3mbDLMYYCT7hqCyyoUDw7XNnQLhMbcPNWc9gqEtzf4LVALq6wotkCYaDi6vDGEWDXSounFsMKdujJZCYMrk",
  "key5": "3XqkV5pxBnP8GSKEB9LvFk6rfB5XXAGM1pir4Fg5wzi59ZCmx4FAXxBA4szMKH3tighDxJ2xYTqK8n84YPiNqqtw",
  "key6": "Mx4XCreqFvcr3PVP5RyWdh7X5XqiwSYHPT35J1jWbjcNekWG8767ZwXrRXc9nJ4C3SY6f1Yx5XsJuHVE1ZKHxYs",
  "key7": "5PLfDYV9sYZRhHht6HuC6vfPRqbNRC22E28VCSYHRFGdGCq1mHqiK5AnYGdjun2LpEH3xg2wfJdt7gcc2XnfuHa8",
  "key8": "3VjdsvK859V3VpHvaPinGJr5HUveh3zTrxmgoVwEq2vPZTiJpAFotz9ssL2YKGFoqyWra6BsJ3LK1cuAVrVJGr76",
  "key9": "WNoEcCdfXNZjouHtYGx3WyQ48ArNWurg1yY7t6EbxQqsFnsxQZ8hHRvVbxLohUZ8QHyQaWsxTmpceBTs9shQZ4m",
  "key10": "4sSPe2G1rf1jGHH5xgkTyZco3jzruoFEGZ2U1EyNcK4ASXCKtdLCBpAzuh2woGb9r1hgGeZ5XMM4N8gJ4eLtfYQ2",
  "key11": "2Kpfi3M8PSvRHZi7ojYugjQ7EhSLApCkzEKBfaeFDta8KeFsvXKBWdhz9runho36AKvrRPS4N6HxMpaxWErhW3f4",
  "key12": "3MqKihttyTa9FGJCuZVEjTQSpup1cbFsv1dfX5BHRgDthwyHSUMrX5iMjh7pgZmoN89yPwSJDkU6g59woKNvP3JH",
  "key13": "uVU93VevSTU7GwRGKmn8TBRV99wSZwKJPjyxmWMTN6LoYkaLk7Af4AHDydNN6PnruQWAHcNHVcGhHMAvJEviNUk",
  "key14": "2UbUNdWe9JjGsk8WmZdg461PVnKENsRZZq4z7dWwUYUMiFyb9eGemYpqFCGefABXq76snMJgXNS94rdaqE9Jh1fs",
  "key15": "3XrEtCytdLc3269wVnLiVSx6YBhpbikttwbFwBemKQkA31WYCFGQdH7A8BXEhnRLpudpPf6ysuphQRtvzWCSrva2",
  "key16": "2x1EtXWhbpnv1qBRimfcad87t5MR19LXrvMjmWkZngjvRDNDkyX4ZjHENrAbTMngHUo6rk6qsNbu3BVVEfxcDpPR",
  "key17": "4Z287hnKq6NJxnNY3QREymxDwcSYPwLTKUcf1Qv2keYbeyQ9uLNnuYDVLc43EkRR5KRrYxpCm4ZtPmSZni3nYhTz",
  "key18": "3NmZ6zkVkGQsZJocWL2dAJ1WL94QfxtVEP3S9kJuzbratNDCvVRkmdaDQAkYtyG1saHxM4ynFMG5eSzrTTNNYryX",
  "key19": "2gkeXKRMjCfdWFYinyQ3615ow2mpa2qvUNHaq5Cj6kqZszKu3qSEcRtthvBDKKws7dnLr95cpZWpJccEfks7sXFf",
  "key20": "2CzhRQcZ8VtQ6Kdf9vpq8zKWKHPP49wEvwaraMkcfPuNiydBsFrBeJRZcbm95bME4BsV5QwzfgHHbL47pQgMivAC",
  "key21": "5aNRyAuwn4m3oG8hxasZcpk6JKLs84zBvjz21dEAB5NB568NXbRnsNG9etf2gTMbEwRDLRpuCaMjpBhGhFjd9YDR",
  "key22": "j3r1z8YuujSPvs6zcqPQoWfymN6hT2RxZbUydFmQgxz8ybEkYe3qdtB2s1wiAPfA4PujrFuhJxiWtqxJ9DCRM5P",
  "key23": "L2wzdjbdNEarTnBm96sQKsXZCCC6xe65FQzbbxYk1vcdfZ49GjU55tc6HzXX56uw3dMEZaugis7fhtfueS41qKa",
  "key24": "65pDyri97nWQG4ZWFmYj11dXFUKvHxvvbndH1M4bLe4jjDgnGNo97nJpsRjJCqfb7iJCd5i2znDqwSnd87GxY35B",
  "key25": "2j8wyfGVG1knju3MzWzKa8eQULUJTd2pyc9bnnBciP7DVAuGaonEoXJ9F6mdkJtMXBSp77G3CUxbLUAa3iq4HwFp",
  "key26": "2cb2DAHcbgzGeRvZx39gadtSqtL5okrejnkpuFayEyhrDhLbYQi81DAcc32vCRkbDECxyMhQZGHMPpyb2H9jEQnD",
  "key27": "2h9Mra5mmfAGG4Sj673ESLubDwDkjGhKq1LXA3t95bpNQiDQy1mymdjke3Q8m25LgHC2qJ1XhZjsZ1MsaRATX2xH",
  "key28": "HeU4w4xyunPMzadK5SKmzy6XJ3aCPDMfTKN3gnLJHY5KLhhKHywARzprNsL9W9Tkb9qj7qWG1Qhuk3e3CfjuJx3",
  "key29": "3idtqgh7nw7kA8Tqsq6e12a2aUgk6uxEAPWBzfFCFWyN19stZAuGgQSaAFv212oBp4afE9qsRMan4j7uMSRrUJnn",
  "key30": "3eW9cAcSrZhr2dd64Xfw3hAm3Mgt8iogEyAqEf3encSyrNBVytu3m34iEj1BpWtCPy5EVjuDyspp6A8Xr8X3GwJ3",
  "key31": "2KV1impcsSmEfZjAAtC2iHPZepQgf68C2iPt96PgVpEYdGr4sS7hPFZ97nKEyoDygw4XEMNGgZEBsnp6PeMheKVb",
  "key32": "5nDWetzXMkVoF5bYWZqJvtqHRjdZftbHyVEp6ac1TDFGWdZ3xKEpfyFBq4ZcHsfqs7ncjTkykSt4ErRQHSQPzJqN"
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
