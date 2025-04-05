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
    "2o6xXGj8VUTdX3Q1CUY8F8qFZhVWNMy6GjJDYqrSrKp2agxc7YrGL1qE3bfT29yYp3eW2AWFUzFbkfPBp4W7YRQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YzPpBQ9V66egPRDKikMcX1jQPRUqKGhKygMmLPuEvyWe9QdkkdBRiU4smDpSCpXdUFSV9kRSbHNdMCawy5wmmWg",
  "key1": "2EKPNZvmcKqx6wukSWWCexEDJEshpw7382oHX1htzrwFm6vqdewyWDhMN1KMRkj6MeGujua1oH25X8w2F4gtRHS4",
  "key2": "3c42guWRHTYrVAMupiSbbvY9Q1vt9zP5LuBsBwPrDwJZ9KyABScFdQ4dFd61VU1pN4pgc7Cc3jdpnpHFereQndcy",
  "key3": "x8C7Xr7gwdsbiZps4rbAwV4HBuxED3rBuoYCW1RN6uC8o8R5eTUMM2YyPqTXaMqi87WMF7qjkzaWiQGkE86szdn",
  "key4": "3yz1EXqtcnxax9SJ9AeULAQR3ZTcsQN8CVAVFYhBEj2DijkEQ9oy9XQG3ywajgFvkUqHZoCyJ4gkd4DYREjEfGGR",
  "key5": "2KXuWQG63BYfPjQPa7sBMaiqpH7r3hhd6G8BAk2qP1HQqHQ7KwzDdtJUagAqmF7ANxSvo1f93KNhmUrLPEBooSzU",
  "key6": "2hWyh5Cfba5QoZzz68qBeZMLupH9747dx9eLCgfnKVnCFw9Gdk3JsGV4dykRbasQGtScoX4hfycUfNzK8ikoeB5b",
  "key7": "3rtRAbQ81pbert2ukb18gCxiqcgivDYhqf41Dn9bzwsJf4Q4HpqRto7DhcohRPup1xb6EazRzfyiS7LjC2p4LFk9",
  "key8": "3z2vVbiTWtUYuy4WdFfM33GqXXfQxqCtwnuRrW7PbSimFdSGT6eFriTxtgAQo2hDB19LB16Qt5TnySqFMuo9xZKJ",
  "key9": "RWEgbToMp7Ash78g87Gj7kinjVP1AFxFek1awf8dmwm1LAK11fdCNWTvMrVggpurj4o5P5QFcZN5diWdxgynAhw",
  "key10": "46Xru339Kn5xhszHGjrQgAca1wyYNvARRmYCt8KXz3aAeoS1r6NRC2XsFc3VUSSNxiXhUpZTJaYzbfPtSjEHfFo4",
  "key11": "WKPnzwKJ9AkDbN7cAMihNoPvw1q4MgGEJetJvEPa15g4UnDbWX72hhYhHeTus183QWjAmHBDSwRZWPvYWyhsWW7",
  "key12": "3vZmLqom36Dotx44ZrTbRyEPw3GvVFDtUWEnre5xoc3tUzVBTwyVCEKLpdCqNyRJPcXkrjD7dfxn5CGpLpS9u5xw",
  "key13": "64R2cgZYmrHymQ8PPcE63ZPwqkd4iGhG3vNPajDbpFJvYSCyE2ZNK78bWbQESg86hE1NDvyU6zx2Z1Ji2f3rkkPu",
  "key14": "2rCnbiTn6V8k3YTv2iirHQKdQ17r2BHu6fRAYUXXFcGt2LnGshDa3EahzamuoJ84TbyE69KpnxiwMYGAdF9JgPLM",
  "key15": "37xvbkoZU5YbGH9vLt1HDdMPpekkuSzy8RnXAvnb73sPbWxhiqeapSBgVNSSr7G71FBiTV8qgHiq6M2NMuhxff58",
  "key16": "66JTTt9dipChsWv4QiwGw8XamrWar2MNtaYeP46ZFzDpsYv7rmvCTJYRuGi5kHUCMmLdCJqrdhNjB8q4XZb3T8Pn",
  "key17": "3EwoRLd5g7AdsDw4CXEJuUnrXBfZUBN8kkH8b1F8nPsU6EfGy54XetMCmNEKo9U4Xro7YwcLg2m3y3eM4zvz6X6w",
  "key18": "2scJxycm89JyKkX1BmZcAf37pcyYsoSVVMPs5Y8HHHH85j6yi3TPYorUUoM1yFAm7KAmg2hJsZfitd5PaP8hQGGS",
  "key19": "2GoFWTMgxzvF3YVEhapSJRawAhC9hfKzphYiw61hM6e9HYiPH6wPBuaCWE5X59auTB9C13pS6wsHBNjyU2MMVKvH",
  "key20": "N33yriQ36HUt8djuUsvC38Ab4Zz8ubKLghuQv27GaRDiHLJsH4kLYySMTfkhAedcMoQxiVR8nqNVQLVFGj8ZhgQ",
  "key21": "3Ru2ndAyAZnGGwsUf29BksRT2VFXMuo2Fh6Cj9EFQ4ZPHpcYixhooZLiJpmfDpzbWLWpAumiFF4vTnt9MDZgp4mu",
  "key22": "2AvLvo3MXvep7HKZYhYDMRagtt7Qgxn1Lib3jkqh8UC7SgsaiGCZ9wgRCtG6EqcQQETc1adb6de7CgwaaVhBSJD3",
  "key23": "4djeg2FL1PPYZq3xVcqK5TEryEsNcL2LHHATZL7RVAbdxfFZpQenDnwGRksQdUsyMtJuPPQg9HUjUp4kHKaNWX8W",
  "key24": "61XuZJ6be8EaXo5xjbTnNrGFeruXckFmuRRFKVKTGuxGaLX6GnQKxjwRBSg6gEYz5SyUnE5sNVAD3xXFpqiU9DgV",
  "key25": "45wEyCSiDZnpTGAg3kr9JMuZScjGDdWxfGS9XbfagE4owq38fYnaDW7S9Pz1nAoK9xf1bPDbcYp36LcUYME83m7S",
  "key26": "2xkGoD3hbpuo9ufXm9SaduqyrgkFR4quecQ86thvtsMgu4jq6Ecr3VxZgqBngpbSwbPBBnmaF2initVCG3QbTiA2",
  "key27": "2nqDQ5F8EE1QNKdL24CxPDw1XGVH7XdmrVkJC75rGHk9qkkE1ruY3fBMRWwnsU2evQYAGsm3n7ANJcW7hxWf6sKX"
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
