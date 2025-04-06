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
    "Yh9PQJmskvmHGH7WQi1qomxKQTYnJedmpVsAKR7bu4WCSyWY1Koqxt1u9D3quHkWtjiTULLtKyH59c6o92RW7up"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pwLX2drkcRdkHZy2DziPKS5DGvAj7PkuNJcmRhsQhGixehZKAyJhAddR9buWAZDZd5u6pxi3ikobo5ewCf8a2oj",
  "key1": "5LMg7KgaJgNRP6eXGFrko6913HqtkaxzNHjFADYGKTqgf7Rv97z8h4tiwM1xgtdq3Ha4xSrzMDkKxYu6bdpW2ER1",
  "key2": "4SugZJi5qEo7mEBBtf9PJqWs3WfxRRT1QofmWxtpLxr56aYyWzQWzJXmzGcWrYnGXsz5V6gjsD5W9rmLofrgr942",
  "key3": "4BiXgDmibNhGAvHFiRubXCMJv1vR1BVQxGXQ8htFw98V6vXNa6hARmrGTKUWoh8M2wyKLaGT46v7tZbiksyb4aXT",
  "key4": "4zdHvqvntE45kRZKUWF41vVyLyE3D9ift7pxid8xdaxmcTZSCHTvu4f44Jy6mevYzu1gw9uTJw8NvFKnZnA29XVT",
  "key5": "4L2Vg4zzygWK87XYQbX98Th6ff4QpEPM5riGaGc9C3qNHe9o84mj8JBNwoaxC8jiQRSUAdxo7cQHUZNENeQmNxTt",
  "key6": "3U6HA2ormRu3SxPovfbHVTAHfBLMWVCobUTbacexWJXfoMz8R7KxUdrwjcAYBDJ4Jpix4YzHmErQPKFW3sbCsh2R",
  "key7": "zuFAYgA9LqkFWrwrBc935ByK5SmK6uAU1Qs2zv9mmEKooDevVFaKAd3VXm2RRaWf4xmbGBLiSqFepVDEBRaVHge",
  "key8": "5BLJrkK9eH5ftdXBSuyhGfy438LQTxurGNJq4HTUw995BHckTTbQH97DcNgXwhNuK41R23j56mdFFdUCU4hdPD2H",
  "key9": "53ne59PJ9hPFLooGqPejZFya2Lb9PSCFKxXkPbFyHV5Ajus384BkbMwpbdnrXXwrmhDEf2vWvkiu8etv5jbBZXBF",
  "key10": "4vPssJ5dXnuZQA2B9aFkd6WvvUo5W4iPKLC3ikummkBabA2v7qBJBVn8YeL6PQoQ1XhPnVF4yc8bjAorRhKe2T3",
  "key11": "3oMqjwPU8ckjDuuppxh9Vm88g8LeRKnFsTyaCndFLxeKvcXBog8xNq9LYAgm37SnMRjWVis6kRmnTfKqt1Jtk2zz",
  "key12": "2Nm8G28cpUP4GDivD9LoKShnj87jhR9vUSKr71gNYjPEofFZLWCaPD2Do7bjWSkxBvBFK1RVUUDUiLYRvtzPfwT4",
  "key13": "gxmejrkRk2YhbLHMkcEqq34rjpq52CznKzAfsrzPisqRAo8W977pJWRM5kxkfpnS9aT6UTakuczvdU1xdZaMnos",
  "key14": "5bYzgjtgPzpDerdij9yKT1aDiiXdwsssdDFRYqG9PcYqJ93HFex5gN1Tn9UMUEHbAo8DgLCYseSNYwDhNQHZMt12",
  "key15": "3rW37hjJmiFWaVHjeb7YYcDRVv4BUu1ePSjRYdxSqLPe86enQk8j6Z8t2F7sQoanYY2ERFTxmxFUk3hyEDexqK2r",
  "key16": "2b8s6WoKe7Kt9kg35MvdHb9ut9vFgsEt2GnJK2riF8NBARGuMBidXMZKWp5FpJXxgcMuAwXQpf13JJXL7tafLfMV",
  "key17": "3SYHR7MpWqVRTrxruM64XhYECgkm32yhcPTUf8VToKk6YQP9zxgz3kZJJHGFTdrJzYCJP6XPn1DaasaptDkNELTs",
  "key18": "4u82HZiNqs8DWo1EzFxAwg8F1NprRrxtXnjPfguJLGyQwpmfkVNo99DYPMrUzkXdAikTadmnSEs9yMqBeMwuqso1",
  "key19": "2BYvo7oz3e8fJkSBRg5taCfe3WQvJiiuSNkJcNkVrwZ4fPtEYTEEAS9z4WEU4Enxm3gqaKP7E3mjJqRxpo8ot49W",
  "key20": "34FXawLUGgkCAXb8nGn5eacpjvF3UwVqUbfCVZMtFMUrk73jEFdWGeXMgypi4vTiSgS1enBEbApKsre5Tk6N2nhP",
  "key21": "2Dnawoi2rytM6eYE1k5T4DriTn8fPYGPnRi4E2sP9GS9usKdkeMT4rik53B4hxRTyaE9cE6cf9zvGQWaa6PCHRXu",
  "key22": "3eBvq8ByWGT3P5zH3FSK3u4aJ3Dhsz3fmagsBP8E3Jx94UpRFqYELVSjLxusaXHtfEGzWiowzZFogJhrJ15MY6u3",
  "key23": "64Z4ttFExWdRPepw7wT9GGETxAFRUXSSAdpsCBB1EfJfKUcZ8VKaq81XUjrK3LVGrw5EhNZ5gaGwSQVR9PJQJfUm",
  "key24": "4hAm8jVrzTbfkurSuGMWNzXaUKiKqPBxp527Bn6kbrqK1cL7BwzYBE2zQ9XPT3e3LEUbBBHDwfPN8dMz1GMJHYG2",
  "key25": "4QdzVQSpFTBCbTSsRgR9zshjythLqq589xk78hQ8MUBKLRRY6NmGZkPrMQiQoKbFfN5LYEzjxU6N311u9ngyXShC",
  "key26": "4pguon1eGuDjpMVnaQX7EkqoSoUX6PyzRAqRQD28fPgm5S1PC1baDw2Wj3pc7FSLn3crgLLNgs1e8suwNgH7tdNZ",
  "key27": "2cv2dL8e1Kwqk4gsqRBB36MiRx9o2B49gd8XmcohFytwU5m725gNDMKTw4xj4WaUm17R6h2rMfACvgziC9jY83xg",
  "key28": "3TwcNiPrZboH2VoqQz9MpJmVsGoHnNLsFdtidydzawnwne9jo2CmhFAm1M7HxZLF4tXz17pzCpLCiDZTD6uoZ4ds",
  "key29": "3X94aLo6pgFNEoM4jaDcqVLnvnw9BuGeBTkHNEkbxZJ7r4dNfUUcQXHeLzGbbyCnF2BEKU9LEKgxBqrbxR3Aa2gs",
  "key30": "58FAqehbzrqt6CGUQe1UgzY27oewkwxe3W9J1rfb8qeM34PXwffA8VDfZeDCo82AjufZMTawmvA6KaTfLajnDDXD",
  "key31": "5JToXJmNqrTXwzbUB48VeXE7PRgUwCbzFWNtPhYcFASAjjt31PoAx2DN6WpPMb1gEzimD94ivABjgTB74S7BtmBg",
  "key32": "awCVEwv1bxYkWgKfy3RWsJUnpnhWkdMyCFYtveUqv8dzkNa3qpq1fMpGsCYnaLYqHKKjUNYBUJMnKpwqZwkpH1F"
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
