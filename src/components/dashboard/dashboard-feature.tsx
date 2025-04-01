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
    "N7s4ZLv98g1r6PYg3kGi7HR3U2yTqK6HUwbecr726Ubns8cKjfkWg7H76vQKHHWio6NvgdaRZVYX3PLTiA8QVQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aUk4GuXKahXsyjnF1NJmtRc1ZmbAeQXxUb1bgd9uj1vhEEL9tk3ZsWzmWpRyWVLbEsjfiGBe4toG4K3ETT5H5RY",
  "key1": "2iFQGMc2cGRnxvwNodzeNMWDyYCyGuwvAWHtvaVoKpfpUB1K1YwPvs8NoTiSTtujyb6V9U2gGygh8vGFJMBntNUh",
  "key2": "5nptQ71w2svw3GqsjQzYWambGWpGeWhF2tsPSpW9adoWpbXP9aXgGP633mqVWc1tjeTdgMG8ZBa2JrEM9TwRNYFz",
  "key3": "51r7guQfdSEUC5xP1yViuH5Bnu57xqtBcMNbWKzv61aKnMw4zYWPWHNdsGXSNV33HSfiVSUSadzEnVhtb7TG97UD",
  "key4": "4o1yvcrKYyL9D4rtTGWvj1Lft3YgkrmH72uKuAEZurSizJEBWwpLejKibDkGLee7F49q8gAxdEyyPwJXgeJuyiGA",
  "key5": "4x5eJ3wUYurW2rCgxkxy1ABCazTRxDbEhmkm5JTswAxpu9pgxG4YnVXzet2FvfaJ1jcMHRaY8wD8mdPDvsxZbWmi",
  "key6": "2sjb34JLXCki17uBc5QHGo1g9mUFpXYm2PAvLTaf4KRRQDqsAqb3awSYUP67Eb4GsiskRhRBtpkquUNvSkfvUtYd",
  "key7": "3rvYSZYHzoSrmdkNzXHyj9DiFwSicundX1h6DudY8uEC8djkAEjieDXgF1AjE6i5VNFD4u74sRWZBD6Phpuobocb",
  "key8": "52KVkYv6xCWd8F7UK6Rg4igHV77fD3DBNEA6RvVRozF61v1A8DYKV1VMLA9eRurBKQw9Q7oxD8kmrhX9Xn9mWdR1",
  "key9": "61xupLCFBN6huhJVyvQtqS71zU2tpue1C4QEpVSSLGVqo5veQzH5Cuu3pH21YprMqLRzeLWAnSkREAASpvAs42TG",
  "key10": "3nf6V2kLCm8PxhaCzckvrDXDngyNrnC6oriKrkvBjjN1dv4rkVJtHjhAJVYXWYYQjpqNFmTnBpxVYQ6ZZ6f6YHkY",
  "key11": "4kE7nFYEYCD6TZRd664Tck64mDWnD8AXfkcC1sjZpbzFbUzNtJfAxHt8AEWrn2Zpxp3g3bPb4fEnwkYJsz8LmBmZ",
  "key12": "5RzzFuvWiGXXoejmyR5Wq3VvnTJvAHSZkQaaBqKCEWeCuKqbtc6Numbke36FcmpPdDM2rp4NtqW8Edj49Ay3tVVy",
  "key13": "5r2G7feBeMyJEAzUR7hFnBkuKJjoDD3H2WreZPTBRPeDCfrYjEoBisNHSPq5wcDM2krJvdK1vkPAQiyhy6Xhgtuo",
  "key14": "2v8nRXL9ZgpiZB1x5EKffUJRFD5ufy59NYZaZtQskpWKRuCZ3ZTLbyzHvFCSi9eiZJ9hsSApD4PUKHB4tBwDDq29",
  "key15": "MvQAkBHFiiBx4NngaEXseaUkSq8huoLoptYwoA5WBagcGMmALT9W91SC4PjNZX9upCmD6FKoLaf9TXqmLg8yGem",
  "key16": "4s9scknQXSLBqTfvQCXHmSqUnTgh2522bssvfxYPCKbT8T2aFgKpY31RCgXWSZBRWDSitKwDdyyzt97Xp1iWWdgC",
  "key17": "5LC3JMb3JugQMsu7pzNusqrMVnyTWyVFtcLyx4SLy6EXKo6pzmZqHQE1kg6DaFuQ55DoGhNX1ZgPcawmM7EWkQYK",
  "key18": "4Mtr4JmPQMnzDpvWeRU8X45GZke9FxvM5Pz7kgxkyZ3V6ZctoDvpTgn1qsBhrwn6VFP3Ms4xwVdJ3HTpKb2T4pTc",
  "key19": "45XVsQtDH2LFJ3Lpqw2oe116bpDg5J9EQx5niDi4QFjVB1xmvYvq7UcfPABNUGcvY3RHLdBrrB39cDnu2cpH1zUg",
  "key20": "2nScg86QMdm9SYRRtC7Y3ZTRcuwRUJh7r2Hmu9VrLMroAfvomXSu4j6ULQ1j1kZbkvT5UMih2vvVyEZm7jAFVvW8",
  "key21": "9z4V8gXfi5XhanLB8Anrt3ets2qzDgW1nuAqBatmCXtoj6LyKNkFi5ydXxYjsqumPvPkDrCMtzYJWy1bDrcFjJa",
  "key22": "7Uc7zeZsPSocEzjfWKXTMbdXiUZLVPEMKYNqk9EzGCBCnTvA5dsDCx56ZEKzFcwCcntJmFtLNGwuzXhiVJa8Wun",
  "key23": "2hYq3VVYkZBckaQHk6r3tv8vyxdmagqZu1XBwq2upKhNSGCa6yJisuMoFg4USUPeWh3r3EjqU928VvkC3YSycvL2",
  "key24": "HQWeDxLtw5yKy9yrejgfUgnSYdsu7HQFpwcFXEj7uEY4oLvvswEK4EnY93C9PyxjGRPaFPRhriwdjkF2HzoFFYG",
  "key25": "2hKWKxmp377D74Lvgj1QCXvA68saZs7uguL6hb46e7zoKrBPXTSaJr1CD4bYPEdsCxqc5ZYmYAWwTKcQnqvpvNuZ"
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
