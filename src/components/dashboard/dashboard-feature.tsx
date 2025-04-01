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
    "AKUvVbt12Knshi5G46UxaYQEejFx2wtDsPeGuL1gGgFxgDtBW37QdCcektuJ3uaFoVinTA7wCs7AJ9w9Tb76oRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iWGboHcAHqgsHRvSMk3w3DoUFW2dNMLfTxWV1mTRPNuhSswNQm4NdbPGqnrb4h3Se5anhD2aY8G1rTqyWsLDGmi",
  "key1": "2oTseiTgYuJrFRPqk5Te1R8VuXak6X5PmBSHVfRGfXwM3YBstXKxtgrSyKGXj5BeaU83oopyuSHpCfFKEoMoTzoh",
  "key2": "T6zcQDs9ZCU7oegAcETeDn19m3SkSnf2DnRdz3gBFMFK7SC5YkBb2snwfQ2BCVqU1BEjKwm6y9qWQTtfYxMhxWa",
  "key3": "46adpKD1Th1umwyHvRWn1ZUprG98TACizrAkaviyGd5cA9E2JAuFsa2sNYKutprZPnKDFN1VGyV8vGh4VwZNYmin",
  "key4": "4sKFAA4eKe8bucoEm954zG7HmdWeujawh1Sh9yKvDSSdu6oYiACXyzooL1LssqjNnSRqB98AV5ugYf7onKS2ite3",
  "key5": "FVuLk86WqqGnVc5gYij6azBVuyq5nmh6sg7A5h2F1appDaTxsHCWvPXjeBP5Vm9zqkmU1bZSek9SJyGwsizkZH1",
  "key6": "2XRzGZ8CKaLTxmLApRSsYUEw6EZ2QF96b5jCibRvrRop7dcc4L5gs4b3L66R3sN32xrTjZDvmgoSieua7mXUZsf7",
  "key7": "4KL8Xjj78b8tPkW3DzhbHfD8XCtuYMwdPC3ePTe54dNmfsjDdUjLbK9QKdfWie32Hbo9jUjcf1TijVwYErJ49f4C",
  "key8": "3t5xHevSXNVNbeuG4Md5MWEGYFr41XSod6kfnDmYhK3JhWaqDpVXtrJDtWrHmGSrChxzse4z1K8nF1xh6XeyhXhd",
  "key9": "4neZRVNjuzK3K1JZufHxE53dxFjUZ1w7PbRciBTFYxEr95VpF1Xwo82T46LC1L79KwSTEX7mPpHSJWukndwztzmA",
  "key10": "26BwQFZpasxYiRZqZbeo2JMQB2hTUmE2yzLcSbimcgN662dsMErnH3ytfRidZAhyCsYzQHQ3zv86vUUMzP37S5UV",
  "key11": "2cBUQYzsZsK4dXK8iiVN2iTH9HQDkjmBmuGfshf5UFZgbUsjCReFxmomhUEQAer7fgqXbqsPetr3nNBTZPT3guuV",
  "key12": "4jV1E7trYUfw1p6ArABzDfQzqBqVkY7q2cj16NAq13Q7xQUq6JRttppmU38yFERVxsGNurrzJUYkUwzTpG4s8PCr",
  "key13": "4HZhyWq4Kg7FCVfVqTFoj3bQLZnq55CD9j5f9G1Pt5JssQkZFvSGDmApAytoemYCBxBgVkXk9fn3HRYBDt6kdSBJ",
  "key14": "3VUWfgGwu9QUcL4CAW2PkPafPn1kYkaZhQ8EGZjnjuaiuHXayZhR8TrM4QjmuGat92Fx33D9YgPYdShfpz8Sfu4R",
  "key15": "668RuQuiQLpqQZ7tJoHFk8jGTi3SsCpjKEubbhW9K9pb9MddhRNyNKyCSHYvmgHacd5jJ28afTB9Naz6RUcdjJxv",
  "key16": "2qEZNhHgBuc1L47St4NUjeSaDiAtaMmtLa7vVk5nnFsFWHLwmwBGtHRR6y91qkJmBzqL8sa853hfsiioz493iDok",
  "key17": "rAnFGvMZsvZayyrpKcQG4iCFAxj8J7dWdQqTWaffkzBtxDtkhEqgp4u1TdMTtcYSNeqyLvWWEW5p7GR2by1dD3H",
  "key18": "5cAf5Pz3UvK6qKDZCBEiKFTNc63FzoxewpUUJK2huj6QABM5LZ2TTGVruV9EavdiyBCWxWRjtm4tQTmHJZXF18TG",
  "key19": "57TmtB5drE5SybWNpchkR8G3Yq1H8MUvbqCWPKU5ogL7r21rjs4gmcLtgSj3A1NdCjpmv24LLjNdjqn77vjAGaS4",
  "key20": "4efWTAPUMHhGUzbrp3H2HnLUAyJqjYEaiKZzWKnqjWfQn9zaHESPzrq9wg5kvKf2KbWjaNW4dSZmLsER1xvwGftt",
  "key21": "3yKovxthYmDDh1gC3oudsQ9uJ4xihWLyAQu5xdwYtpvRqM72k77ixpA8Sj5WKoYcoQbbUUX18ckFUGavELH2zNkN",
  "key22": "oNH2LMKckPSwU726TJN6eLge2PnpdVkTKhJz974Eaw87xwkrcYncArMD5XJTNccjoPq1VhkPsuyVCeohGtBjUaQ",
  "key23": "b28jCsoQckqFVV6uRAMLQBh8TBeMWdDyZikvfyNRFT9spZfssFFyTxQRBC2cFCwaWALbV9CwjcahS7ZHrhD91sX",
  "key24": "4GijEEmLvJrJstrpjoPop2y1DxoGmB1Wswd97NSzyfY7Zz2BbCom4vFMVKuWGcSyfed2A1K1YU5A11QuZgAFjPwd",
  "key25": "49bDkNWKjbc2ZKQLYb7XtYEGCfsWZYd6EMP9c7QxvvXJBM4t1NpKWSFN2W3B8bmjWe3SKYjjhSZrWPq7xHqANhzv",
  "key26": "4SsPVp4Mb1YWZoWZZhKmqX6kBMqqj56PPbyKy5q7qb9TFtUnwm7k6pKhDXHqqaFLu7fSJrEMrTjN4rhZCCytjgd7",
  "key27": "4YqtC6agjEqJXZrw9DLnpW8sHErEj1nExtw5GhCqQpdEHvUMPkT9CH3tanTBKNDGQmRyopQzuvYG3MruAySSVyb9",
  "key28": "3ipjaU8QRsrfCsjUuN7w6mfV3yDUtE527Cdq3p8PVg4webvRR2T2FNVHLq1bGFwiGd6WLs6iswZKcrdvbXScY9BZ",
  "key29": "2uoxGHdgSLUChpzo97nUdFs186qpuXUVVuJRcre3RN5H9isW8ZujBKwoXMpq15qUYRRmKZQqFpdn5AxJKyzCeR9B"
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
