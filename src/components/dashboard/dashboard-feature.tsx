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
    "5ugmP5nhJvPwxvHYW6xqNzvd2V68mdL5UvL5LjkZDnAvETrwGaqeXmCknkdpvhDyB2NRmqUWKw7FNhTrZEFGwVij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vxVeFgJLL1ZjtxdJREvSo6KnpLp8K3qGr3n4wAr5weNpXhsZMGnkVJA8wJKxyAVPcGughnh4cyCzBTQVa3z1oFK",
  "key1": "5xBUfXDmtnqXoffZb9kcQzjDPktT2T5SEwQaXTne7GigKPvEybFDXuhTuxL33H32kxPV4jFgSCkqUjKudDSZv6MZ",
  "key2": "3nnRe8xM9H6JUDHxYoPK1WzokVhcoT2HQJovsXQuS7DUCMfQp7TYJ7447qqaEURzqEoeUx7aZtKTemceVyGEpGsf",
  "key3": "59D5FNyZaRqRhFNi1eEyyVJsQ2iXTgyxhBYxTzw6NN5LKSLrBRkBstJUQvWGLBBTRgJZT5p9x9gpQdy8c7Nx2bGo",
  "key4": "36x4uCtStQB8sGxkwNhVeat8jXtF5fCGTuHXpeyC76G5TWuazpE2g8jrc7JtpC9a73J7C2CPH6qyjz8khBRnoJee",
  "key5": "2bFgathHGd8rmH4HzSWtDxaJohNnWsWisEcBNN86r9qZwNk3ss2kSx1FN7UjspCQV6BfUVeGWRYiY8gdkkxZxvaX",
  "key6": "3FWg7hjh7xq6mupkB9qLQkA1jJbQUKVDQXRyPXmtKhtHgFDS5cxMae4kTH6Ws55yt33z2sFYD8VnfW45YBJZrv5f",
  "key7": "66otL76HZd8cHcoVwhxvBNcxvNv834CULNFoq8ywXyUW4ocyWotDfQMqQbiAo319RVpSHvY1b9roAHz9zMsd4ySK",
  "key8": "2Ry7pCQw6aYDBy8GnE6EnJUopSfNWRe4YzV1xLjANkHSnnpg7WuiUvPhJG7Q8bHJhe7Ea2axDooWzsjLzzmgwikG",
  "key9": "65pjPkzvBTqFveE6nD4pQXVB4q5Uop5pGLybgrECXG8PbD1wuwP5uN8wSbkWMSYH814fNwCXjr6DXWF1qwwdq8zQ",
  "key10": "5mV6mQsMf9HWGoXMnkEuovRPkPqoyMgMXHc4YeetjNNSfYEEvszsA3sndkmJgHN1SPVj9HiTZxgS6SzyQUonidet",
  "key11": "33nPN4JDmNEQZ33wkAJ3jyxr1wncjyuoL2vMn7jSP5XU6UrwvrnZwtK3tz4E3HA64hSvzVZ1oEK9svq9oanSQKEx",
  "key12": "5tkURdr85vSjM5wF2B7UqqaYLghD8fHpVmTvF995oBnxVhzNHq2Pv5r2tkYDsWnujvthebywL2QLMM9gUYwS6PhN",
  "key13": "4KHpAxTTtDT5hojfjDJtbyTzVDxo3awHQdsjvfJ92RwfzLLway9FLJt4ovVqfUhAw7g4uHfCwuauoZjUxtWYEy7R",
  "key14": "N5jvBwrpUMjCGzm1UxoZCH5quZCG1pkfSQnfzd8iSRDrZ78z4y5GXkbHPC3cWG86UJ2YA1eG5Jn5W62v1iDsX6r",
  "key15": "3Y7s1gkazwUCi3zEFwjyzTRy4eivQKuUFZ5odKzUyncwar4b1hAyvito7wrkMdEvMrpskpQTd4KNNUyx4nmQmiM3",
  "key16": "a6F8onsW3GFJyQJ1syB5Bx3Vq6nTu31WojPZ38pqkoBKNK5dyexwxa4HFMVzR7bPo7wdb7wQ5BUBAGFibBkXgDH",
  "key17": "4XSVgBAhD7b1Y6UQN4tMkaR8ys676npTnXyyevT15h6D3crBKHUYV6Q6WTGLhdAr4bhB5cL71xdH2BEdUf2HiEqm",
  "key18": "exMpCGDDxJKSdyyMeRMWoZKUfEg2c1wgYbmjK2xrs9kbhdu85s3L9Bsjv5VTU4Rfiyr3pVYQRgtQsaVZDe395RQ",
  "key19": "2oqqwH9a5TjgtFDDHoLQUjQCXR6KXdbB5LDTJJenVh8vX1ed6JDPET9eScuoUQUi5m4524U126UXp99LfSrsXA59",
  "key20": "2A6JjuQPREAV3e4Gp11sbeSv9jCVMcZevqifGuQPdGEB7rjgbisoPPz5Qu2PArsfUT5mir9x4XMhzgjmGqthXeUR",
  "key21": "58qJUU1152GyTHrPY8scTrSo2it3dc7dnvkJjYoQdAzXJJwJCQZbogxobp5obu8Rs6RRPp4j78gsViW6YePeZEt6",
  "key22": "2KKgzvG4UzYJRALkaQYNMJDTqQe4kT4vmDHavKS8JxuJehEqJCBbsf99U9WPJymEp8gUyHkxTyav4oybYpgVf9bY",
  "key23": "3xgMPSVZCmV1mp8ccjwBRLsY3ij944xtEaMqAuig4fqKriiu6fj56pKdNVygbFGchb45PwRbZqh36F89HVvPpwEj",
  "key24": "4dKuCQk5gdhn3nf3Lx7pLnz8gabkKU9gqAwXaQtKunyEEuBY2H35DLD2QrdK3RRNr8PK1kCjyQUbWiQk3tbHYsr4",
  "key25": "3ac5G5hpqqkvNwKAoVcPdM7aJuQjMUEMMiNNZ3ToA2MtXWWv69UHE9kEEVbjQahi3i3iKd5Bmhg8boy5qzUWmrey",
  "key26": "28BvEwCT47WssKt5rJVuVitJf3h5sSaWch4BZ3JqXSf1qyMNrbW9NjF35NKhfnohKtxqe6wvPvBBPFXa8LD7scvk"
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
