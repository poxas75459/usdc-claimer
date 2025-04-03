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
    "4rQzpi34ZttrELjpfPMKJcLehSYf16UALivjw56HdnuEFhJbKe89F9D3MZvdCeRo49GzSCdnHdiwQwhMo8pMRxYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pnntr8x2pPX2R5nokc3CkoWByEd7KsxiVN3TDUF7nE9aqSSxoqM1aY2zKPpXvWzUepbiB9wgTfGBS4DoKkZag2Q",
  "key1": "2Mneu4tCuB3qFopTPbbHgG9iDqi7DTVPXsRooS3xbKUBy7nR4o2PZ5dt3M7JJJB8Rg5yr93SD7ABiRNfJr7kWVYM",
  "key2": "5ULJsKtyvYFjqT2bQSwvGmctRmwnzAetho3uXxxmpJL8V3zHE4UHSpJw72CiUAWhGL2qNtJrZYTAcCZBAsLeTaFy",
  "key3": "4gNk6GujSK7rZB9aR71bmtaTsLaJ7P7or7ZJhz6KsCHveqwxMugXnXhX8oGzPmZJpYhhgRhUihppqo8mhtf7s86b",
  "key4": "4h4YXE9FvaHXJuo1fc77kCFiv7Pu8tdVbkEzGKrmT92MumA8hi3nxKwhXJMB22CRnN1Py9D5eARgH57MLRV4RJNE",
  "key5": "aAp9XUZ1xD6Bf4HLUPzG9HhTrWh4Ga6J1RKVtgk7DVgC2TvoEk6QdjDWZ6vF96EWGz4LpTfBWZrCnn3yyybJVqK",
  "key6": "2Z5wZsTaeTG3sUFuHNNwVNAYYyu5UoWBgnhCvi7389QmbuDucRNtoVftdXn1B9kTxaGNdW8DgR6DAbsFKU12wde1",
  "key7": "5gTLhHbBKCdRrPvTQDWwovqkPKAUgcrnE8WUoH5baJav2MHyEVD8zhYdGJ3LVRe4yriNsrNhgBg2pY9eTpnpnTY6",
  "key8": "3WXAJs41tTFwfqhgwmLvp2Vy3UjqMw273nZntMDdRV5KyKUe3MehZVkbDKTN9aGHhysdavC5TjtryMzfjoBv8Bgp",
  "key9": "38jKLmgaTgbX6vRQpyzfjZGXSnAiVKUtpnN93pMjcSmo6bRDaQ2uJtorQJQbtWVRs7TjMhCpmNxTtnkenTJ2r7Xf",
  "key10": "4vT8ALjdinJE8WeTEy6o8FrG2tVLXHB6LXRhSz276tZnHSYsHuRdpyxJ7pYPiXuiHXgRN4z2QXXgK7N9FU4XRM9a",
  "key11": "2CyZkRWrq51w8At37kSbSZEkVQyGc2eQCmDxRhh9x2nLCaRUNED8ooxE8BawVaxH57Wy2LfY9Nr5QnbV59p2iS4K",
  "key12": "5KEqJBYgh1qZn567wzWMmGjzLnLXg4JEjmYgvwKmACuyafegCmtdg1kGjbpX3vnQnqh2Bf3jh9Qd8rG13Y7tNB8a",
  "key13": "333pVifNScXYRhG7rCAWxXQLcAwVUPCXoREt5SGYR24B1CjWmXhUSUSog9ZqLY4RQCNHaxGjvnR8kBeeJjKkbx68",
  "key14": "66kbXbGbBVYUErBNuDSekg2WNgg4Wu7LtSRuSXLUXST2rzG7uhh13w8kiZxZHyEp61atK4DhHpCjMjhRa98fKxpN",
  "key15": "3eztDS35FdFcWadwmrCtYtLBh82j2jKy4jARwBXbdvWvDARC357yyeWFXixHczh1qu1hY6Po1cR8rrLRJ4Uf3uMy",
  "key16": "5btd13K7FTggDVSw3HrgXviazYtYCvLm3JUhpc2RDzSqeLrwPV2JmgTsDAAtgNMrTtfEiMsm77z22VFADv5LrjzT",
  "key17": "WUcEBHhkv9DJLRDsvKrzjT3bkX745p8gMLjyebEW6owikFenQtwvcnWu8hJcR8ipU9RchLbUGvaooqYYGB6tZEb",
  "key18": "46ZqbLy8kj36GLaanpyeRQJ7aW3sxeNWxP59cGm3zTxN42AbPRdWmY2p1p3UkcCoGikNXnFnn2Z9Z2PE5QMs6JEF",
  "key19": "2WoKCicboTigqY4aMkvpSCxWQtySJPRvGdToycccKe1P988xrBoLE8QcmwYi9T1ETQu2EMcGX2KSJ9DFtKzYja9A",
  "key20": "5Yu9ZFhy2ouy9rU9oktb8CBAbPk7mG5Wgy2cK32oeuxvxB9nFXHEvGqJ3vnD8pP41h5rGNtT6TMSXv5yQ1mWPP3Z",
  "key21": "4PWBh8b17cC72GqBN86znVE1KhnQNZRFGgbFcNJuWqwqfWvNG7WxQBsdnkB2muuDUjrhxoMhcXDr86hTUeQnPY6P",
  "key22": "4QaTDJAHYG9pbjiVE1rJXxTFX6SvZzDRnq1rfqCAjkstAwZ7myrAj19KHuqSmeoW6aPYhSkGDkipP1wRaucSUXPS",
  "key23": "5rMipfP8UFEjP5wXsxVBZfrYVjFEnsTombZ1cjTgx5gY3Umn8rs1mqn9NyEfThhbFbn5FvjaFcEP7Af6RPtHL99M",
  "key24": "4EvEtsdzajk57bzyzzL4zLRPgF3raMixAsw7YDKZ9qNWf6BwwBQAFSBK9Xa71M5BVv1CPdzyzvMntSWWFbuCutrH",
  "key25": "XydvwD1EaXGMjVRyv97zsaeNnE29oooTvqL4MKUpBptB1YPVf8kSKsFyJAKBw2nh9wfvz2F6aaPQJWFSjDToorY",
  "key26": "4T8VvVKiSeqoTCtLmHVd3kvGRCJNaD58JPySVwG3t4K1UfUwbTkqYKtqU4r63Z9rwKpvM3YcTM56XerqQFJcecg6",
  "key27": "4G2Xwcunrt8enWYXQwrAKnR14ozDzgkMZ55mhDzRbNptK6HYQuYk59QceeKdJio9nko5UojFfkksTB5xiAHfxK21",
  "key28": "4QT12jW6dhnvXynL3FoWgvrPAmSwQMDeP6BAV79CG3fBPvT454biAGy7opChLTMJPDxsBT4mBVagDkYVUZiS9m9s"
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
