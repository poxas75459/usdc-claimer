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
    "52V1i6qmJnZD5ZYn1PFdJUMzvyQPhuwhXWQHAVB6uswgntdbFEA1bN8Wdg7WwvUYxMUnYMrHUJngDYcPLe8xox7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nQMeBhVSDF5fEhaxYV5ZDYskXs9PCkJMafhzdCFPDuEqUXu3ykVRQbNwnUAWP8iSNbcUZAJRfYocLYcs8Vyw3yF",
  "key1": "55TmLmDEgEmaoZY9c2ckSHwy3GKzL8Pp2pqXwFwYGmrjrcKKWTHTXvw2ThS4T8ztFJtgz2exYV3nXSC63K543CFv",
  "key2": "2ek3ESdQ7AUGqY6XVp8RygcxwroEFAvzeTaFseyi4vkkDuDxXogj1Zs1R71ozRK8NycQgTzuX89ZVbJwAVDixByr",
  "key3": "2BbP1nBqoEZSgz6uAkn6RUHbJQcHtTkVUw38xJkMTe9iTiNqKvs1GffRuCpxqsmdRroN1Rcx84EbNMmEor26WDff",
  "key4": "3pmYfy4p17p8SafAtFDRsDuJoCVaKPHVAt7dWpfcHHLtndjvbLSM6hMhnBhtXBVfc1CK9EiwVLi7mi29G9pp5TkF",
  "key5": "4EoEUwonBZHFmvCbMQxqx233DpLTZXkkKFtL4QLwV1nJyVwJ7YgSjLgZXjEEwY1o2wzf1DRJD5MNYfY3j24sG9gZ",
  "key6": "1B6pvcCwYy9ufp4wzHz3WXUgwfGM6xrMYpDGxjZFUoZCG2usQTruQcunuNy91Zx1PPyKoy1ctWuhDSthGVLppqE",
  "key7": "5c7Gm3QMDnYVJQEWpW6wmzAjjGQr5wTfNQFEvAN9djQ18LqpPVrdKRbYADUHMM15ZdW4NeVDWEkzdpou3PxhGigP",
  "key8": "3s9isoiZJ8DRq5AFJdXD1KiDtNUzWeXkGgF8ywMNpyn7uCyM1JWbvFkb9XSu6QxxfoksDyxgSUMJCN9cW6umNucg",
  "key9": "4EZob8z7UP6v9DVLCaiSeo5uidNJGWFHmQNoxkurU5T2EdygJxajPktKkWF8ErXaMqsRutrUJEX189SoUCcPPtkd",
  "key10": "3oGqfcCnzWdGVg7xxkC3wmd7r7p3USqqQgDR49JdB5QtXE3ujKyGHPNDB5cnv9y5SvZewhN63kARZxspGRHoaoQa",
  "key11": "5r9MHugkzPGweeJLfMhWp5HVA29r6NuARQvTRdKhSM8neeSXqJaLmKpJrPRrYEFKR4E9rdYdh55w2juDMrszrg4",
  "key12": "ACcAVC9p6xhZHA8VmrAW8QGDHFx47d8rgsfQLApXGFsmp3FQfYM7WQECbsiA6HScQESP5GQCXfCiKtF3qpWGWWy",
  "key13": "RPd472RWMtMMx9Y8KLsr7j9qLQHo7XtL5pvTpFHiWNUfDCMkMHhA5fMrULuqnzhCVU7qLyCHPgdF3p7tJqHejB9",
  "key14": "2vLwAhEkfoQ8Ab5LWd5NduyHsaZkq6zjqWfWShnYKwptMDZr4eLjh6ZTz5FGtSfH47xARFik5MLRKaawRXesqmV5",
  "key15": "5i1gPNB95iZTf7XmrZF88xDnawTGmjQQBiWdnBE9EMtVL9EVcZbyGyfQjJtTvkL3yCnVzCi9iPmCBVCWYVHT1DaB",
  "key16": "61vDLMe2skv88QHRHaJ1bfcokPUZG24MAfe5Vw3aVXfuZwZ9dT9yRDHaJyLHUt9YrPcM4AAowPxKLYAYxnjnsJzj",
  "key17": "5vr6fBCWaEjbhT8kiWkNT2nVmjiUPEDVawtKTuzFycn5wZFJQhNyxsx6oQ85rdMpKo7G8rQpzurGQEoR3DEip7v8",
  "key18": "546NYUnZdETGkUzjA9iXfGst8xxErybUzALffo3syiTkbpWds1HPizyWZymVjiAksF4cXCJKfVtD3FLCK2qJcLVC",
  "key19": "2Gy6aZZvHRwHqq9fZSCYGMyN3oDYHz2PWZ1QPD98grAZhQeCXU5MfBbKQVqiWDX5UbGQ1WF6Dj3frFPDkkMDexG9",
  "key20": "RJ5SVptyDiEPTBjToFYUWvb8JjRHw4YAJmdrTAo4Sv1sW4eMLUjjBKKvzBe4bXeQYUGxYF7dc6ddrss9GmVuoKy",
  "key21": "5qNvukK6iZQTwKNHf12LcfbiVByyAmBpdWuxYZctVJb7KH2BP1jANChm51iaYJtCwAumDHqJiaPxkbvw1sHszFQy",
  "key22": "3qYdsox91Mkm1iHXE8Qi5Fijm7Y2tLnP94RkW84wqtTE6xrSJXBJGxVT9Yfbnfkco5XqAU7oHAVNgvTh3p3jHja1",
  "key23": "7xjTYjaVDh82V432wfRHbc2qoas8ePsDxk4tgXKVLdFb7kiZLMtwfV2ce9yZ17SVpNeE6DDoAatwTfv8SBnnk8j",
  "key24": "3pXcec5CsWU2T9rmPyp9z9ZcDs5bN3VrzePzfxNzQ2ttiGF4PtryWM6ZGDHHnNbxTfNgMxx4F1Zrbq2kSpJXTjDZ",
  "key25": "cMcVe9CZLBHT93JuWQb7cejsWoJahpgL7HnF4DXtDxJExxZyuYBip4n6Zud6gZhdTNNRmYLJNJ5T9KRPWPaGmsz"
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
