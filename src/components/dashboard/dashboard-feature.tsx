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
    "4KKGUysQMkyRELgPHLv2psQdTjBBNppT6yBcHRdqujVjbaBWQUNafPLqEoguCoenWpdsz6o3CHbDf8bXibmkZo81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wp5pADxBfXRjezGd1QkDUXi9wdmdzbrSRizqABhqCtFpVfDMEyZ2YqepNEqpJNfmUJbGgy7QKkM9GmmRmMWRGS3",
  "key1": "4i5cBu3KuASfbsxQKpYsBWzW813AydKrMTAtnxZKefyGmBV5h8rJR425a5W9QhWY3Jfs97GTFMmpm91q3GR3GCXn",
  "key2": "ghaH7B4u8kFQQMF4HdDHXG6HMcLA7kkBn9w98UD3CrBLfUv78Jxs6vZKf3FC4S8raXp2pNekLQAu3BXZq3yWTmH",
  "key3": "2SaWZYx6CaYaWu9Qrg6VFwF6ktBi1NhLzjQrMbowZt1y2Mkd2JZjNYce52FZTRUn6uTXyHhnfWFpdmTTwWZNi6CU",
  "key4": "32HZW1UL7kxZcxKgbed98KWpqfSLnDqwJ73CRkftFqDjZqs3bXXox5ttPRgN9FmUZdMfK9vpJSj2gxeKnqGRgbDV",
  "key5": "ziDsrCPok5ZfKopvZAWvHHckAkBqjs99pUWtUcAiAzHsuqvWUQsAt8FHQwHVxbijEfBxCWM9Tb85Hv8emVxGDMy",
  "key6": "2KdvXZ2edaBynuPQ4EruSk1BkPC9h6q1CxYUg2dzp7kbgTMskN5Cqh85825UqLSJN1Ke9EsMD2R5QbqfYyiVR8AR",
  "key7": "3QJSgng61hGw5eWj9PkqwGR8PffChRK7ohN7fXYdDhCo9iURL9nuCPtLFRYGSZnfeqWX3pj42921RUXgq8Lr4rew",
  "key8": "jWh2BzWAXMLhAWYnCZWQJhXRVnejcQ26qvUdh4NfboDck3tnTp8CXqnFA4PiUtPNGZH39ft3gbsUrtDqPAiwWnN",
  "key9": "4BCaXi28e2WwbvrN7UMAfyefC5GNG4iNj6Dcjc69faiiFzD7CZJ89ZftwfoYMJUkh99LcZmtS7WDDw9tzCrUiYMJ",
  "key10": "vd6yvzr648xVZu87ZKJZUT9uQdEzy5RcL2tMP4A3MtyDA658UnHddXKwMv41stqS7nBSmtujjnJKtdC1s5sjxvg",
  "key11": "57U3H1Hmj6DBaRWhKrek8r5coSbX2qHjmVMonbE9PUBmeGdjJkhf17sgqqZZE8FJsjgn6cprNKTdL9hfc82MXMug",
  "key12": "2hYNfWWaJcCD5Be7Wo1nBqGH5qprq7PKkzBj7ayFcgPjrRK2XCThw3UyiwUuV7gZiMAzRjP2m5P2Jea39sDH18hT",
  "key13": "GJKoicE3sv3S9wX6zMRTLgg8Q3fEZHBMn5Mfcg1xm3rdQ2kWmJgSDXCoNjTN272xLk3YUxgzSvaDEuvmz13B1XT",
  "key14": "4TWzjLjk11GQB4pTZGaoxNSVspwGQXK3HFSHQvN1r1KCX8iVCRJnNjR7DBcUioqXtqxYQe9FJnN5cDgbm5J5WhCA",
  "key15": "5kZ1B9A6peAeyFKWTP8NfwyxW6J1Wa3PM88GxB47jCWXdozGkYeGeC3Kf8NAoUSnWh3W2MNYqALAgYtJPRGfd8fc",
  "key16": "5VBMSP2YoC6xT3Cty8KjzVTKNmj6zfXLdtNQEoxaXjMsmFB6TiR5w6PavWA4wwLShpVxKwa2AEzhZ27xWL9tv51a",
  "key17": "4yc2MZ8EtMGqF6PRXCPqQowCnrt5m24bwJpHSeGMnChWb1aF7EsMDgXmZ4fcpj7JkozdJeMR1jixXe8WjBo7Up4K",
  "key18": "2DfD1TCQNihZzi5xS7ccnXPMfEHJoUD2xXN7fhBzoJCPzHYR7G4HUM3svoiqqww29KT8wVnzih48fQULJs43P2RP",
  "key19": "21fxw8t9qmJuzRkR7ZyTPKRaBCvvwcEEe7uFk855ZJVUKxD5S97vttm7hSwB24vGQFJAKCfJWFxY4BLUtPnz1Awu",
  "key20": "3g1Rz47kD7kreZPiKze5iKxQVHFKhKxiNhe5fWVJaus5Ee6tSnkGdw233dhrz52xbZCp9CEWQKXazf9DN29bvQvk",
  "key21": "4tbiiTqGybrAXFNm6JkxTtYndGg9c1Egwwmbjod5mQmy2MmkQDtxg6kcmmQiBeeepBziL5BkSzoZvcWrVgZyDf75",
  "key22": "U6NuFxtHq6zdtTXgaUQP1gvQd2EPd7CbYxRUMySnMTEvjrKAHHGtxp4BUUr5vfZRLBf7D6D9raqgGmuXFehyPeF",
  "key23": "4vXjeuP2DDoz3KRYwvR9NY8hKhcQhGtJHikj59hLQ47ANpSkC8MfnwS7rzPoXo5MgAjpRcnkkYeMRFm92njbZM5N",
  "key24": "2HoPYXwgW2pdr3v2uGNbWk4LiEqWvgmvdeAXiFefS9hZTZfw5mK7DoWT4ifzN7a9vpGpJe2kkL96fu1VafLFUF8K",
  "key25": "NL4AMkRRBmbbKza71Bvk3i1nPsEwAUDx4YDiLuApi6qN9zWn7CNn18o4tftxfKSuauKRxpTv4A8UFdSTMuzfWpm",
  "key26": "317zbtBuEDLp5bjLwLUrosPyf3HeHCt3o6yFNaVLmrG8trjFjLhvZMXgCZa11YMj6NYnzP6usqvCUAvSH1Kwgi7A",
  "key27": "4syiaYG5RUAWc9ex3cWQ7Sr3kMEAxLzL33xSCisHKoTKtosvrSe5u3CW2kFgL6SBDc7h8cvfno9zcBaYft3f24QB",
  "key28": "38FgTscX1YSXeFoGtU73hPVDSqejC6PyQsd1vuNBvH3f89zqELxM7aCWSM3P1Csy8tVBt8brnt5ecLCnqLdvNBab",
  "key29": "2DeyAJWpRTVGzk6515Hn4xkk7Wv9HhNkSuD9uq2fE5ucWxAKtkcUKNMXxvv8HQZFKNz9EpqpVx1HT7q1ZM5gCVda"
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
