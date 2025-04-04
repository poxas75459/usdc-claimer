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
    "223jUSKbsk1jQAYdgzQeA2smQd8B4GpkHjpABLvvxNB7vXtKJkYVTnmuQqUz6UWXoi5VNfXyaocAi2MNaiTKPxJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6mBLFgCqR8vVdKxAtC1QE4TMn5jz6UQy7ajo9SuV13Uuq5XP66241E1k5D9wqA2V7Mzg1Cm3y7Ptq3uxaBj5SEw",
  "key1": "5nySWyngGJU4jLNT5qQhJ4NfG67nnXaraCBcqJs7DiNmPrn1FcpTt17xungJ23fmzEnns2V6q4vYTeYrvYUZT4iC",
  "key2": "577hxBtNUWLCNhio3pRL64sqRGEaVzvQSafCawisoiMSngkFQ8yY4rcB9eYVhCupes2Van3vsXwAV4QTyNbzVUPG",
  "key3": "2UvAtmZeCJQH27N16ro7cEbb8SStA9MnA2zsFQWY6SYoEZ2aHextQRzV6ivVoRK7mAXhFEMsWvejjXepdYx9RXUG",
  "key4": "cJgASuhr3uZxEhweruwLmKmjSw6SaHqATLQR7pvkUEch3LqHL8JunCiqLgHwyMEfC8y6zQxQTzefRounqpFnwX5",
  "key5": "4z7dQzV33aHZupnqDM2GyhaZy4eTvGAfnTATxkfAQcbtHtK8FYfHa96zi3NUWpFBB23Z4SVxwwVEXdncxCXVzTam",
  "key6": "3cCG4PqR24FDHC9Cyzx9FWKS9XQiDEjnHeqUCT2cnLkZuzAaPiSj8oQh7dXXTACnGRXAidLVoQ3bAV5X19aSEK88",
  "key7": "3NG6SEPUP2jLm468zPDvRc313x1XJSz4TGC4TmAJSbLjXFzXZv4SL7SgFaiBQK2DGeG7PGCnze84xb2bzy4VL96d",
  "key8": "2dVx6ydt2RLEp4iCwi9VPe1B9jxau1X11fGPa6MZwRWB4QXVVUVTnMY4ognEKVm6v6cL5RPdBcgb73jesMDutXqR",
  "key9": "2L4yns8cW5uVQLjjLFnJqVb6SuYJdYR9AX1UTzMzMCdDm9eaHf3oQjmdoxd5TJhB42es27kZCBwuTPYccqC2GNe4",
  "key10": "3Z6XyVBcFsb4fqNA4dPgz72SuMWMsw91GA3zFrh9UXvcXFfDcCtspecnNvzmcugsQcf1wqyNMhmjvtA7HGpbDPRg",
  "key11": "3smgpqegYnLmmCwSkFcUJ4ESsgqkKk9mX48oSuvpr58LkaPg9Y8wSpujJYtm89kwptpCae6ZYbGW4mraVUZ3ivXg",
  "key12": "DcmzmvoKhP1kfCRi4YHZK9qZgmESL4ywDnL7HPwsxMbveFJxZMfeKULcumYmotXGDQQqme5qvE7CywxJtjQ6Har",
  "key13": "5PuDZPiko7HZ5SRftbVcTiTJMaApZtGdfNqssPEc62hoia1UaRLsKfwsWaz9zQB17r4fr5ouF4R7nkYq7hnpZmts",
  "key14": "2pnqV66Y7ewsn6TydnYpGdEsARpkkk6P3MxkPYyarjDrYP658CypxH937JfPaNxfaYvE3NNhWhTfUfgYcia2HZ8d",
  "key15": "3kycCCVnxrnNcUx1PHdYvkG46BZ6oZFrBUFyUzGqjmXPzC2FRarRyBu7ooy8iXgr6Cxpgc7VjkVpdPh4o4dWAZ5H",
  "key16": "3kQKMBtKKDCXVRi1wNNdP1NohaqHbjdRe8DZLX8yTRLf4PYMYxUV5foCfip3cPwTzfzSsqhYoH3j8Km6dJf3Wy6Y",
  "key17": "2umdZFgsv8HgUYKpp1R4dyAb2R69E6MXg2xHZCkH9ZbzgPLPhbyp7P5NCiaifLU6aNnz6WjFPZRekN8XKN1f9s28",
  "key18": "29R8os3FeqS7Nww9HZooCQsd28yynP4aYjrDJyPvRuGms5UbNxJHBJZSa64GW3hGNYci8WovCPMWvP7p82SCiooe",
  "key19": "btLU5ei4bkfNFTxhkR6vMNFoaCEtJLprw2Vm6GsV7iLWyBRybQ39mxpnHkdeegLY3mfpX7otaDL6TS7PqCzhdJ5",
  "key20": "3gjWYvQmy3QaHdNkgJjxiXDmditptby82EiT5YQ82E3DPBptUfdgnaxgSeSNi3WazUz6kQPSRDLZJ3398DF2vnW6",
  "key21": "4cA3M8SJdTeovSG6GnCv1mZ23nEGio2vE9b3CJzLffknahBPWQGktVTf3NipuFBZSYsEsQkfViVxsexkS9oqHVnW",
  "key22": "pYAP8p2VuXBQF2BbQTC1FdJ6YSmffK7jKntH23Q9gdCbbDNCS2kqoDCkrYha6RSV2HPzp98MHsvNrASUHeR1gVG",
  "key23": "3SDFnwBQeKsVod7NGKVRfBfvV7sDDCAViWvifMD3mVc44q4yJPtb1AzhBYd3PLb1ScQBKHjezsVyKDgcUY1NT1e8",
  "key24": "1ensPZBbk66QAC7gahR7XcJ6WvMLLnMrrYC91P7Yc8ZJG2JaKYcjzHh2ySz7aPUTWHpQ5k8i3jxtadZZK9LtUM5",
  "key25": "8WCMQUFE4JJNxx9hZvL7dBEWjZ7etnzRwWAS3TpUB9ANCKUyVPQvHvzCMSzUMN4Ac3xAxXBx3gT8DgN5PYbto8h",
  "key26": "5Pagbd9sWoX2uwUBFwzrhpfvf8dFXSvf7raWFxSf6mvVMVRTDgcf6PraebvRWBaLoma4bP4FLfDSHDwgQYBqmhNK",
  "key27": "4ActfyWbvF2E84YKcR3aDY4U8ShHqjURQor3tDdQTq3qTawt74BSnmHzFKgszH7RvJa1nW8o4aqw8kHZaqkQDcsH",
  "key28": "2ZysmrFUezLTG88pejmUJgB5ffswhzZMLBKDhBmRrhNxBV2Sa9mWyVpHTHM74QkSyEtCqy8QMQWyN8erwUZSnzLK",
  "key29": "RvziAYaDkjQXXaWDpgAdqCysRqEHszC5VsuuZ4rHS2qzx4t5qpESu6gddvx37LJtSYVvUyz7ubXDuwHN7RgBVJP"
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
