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
    "4LA3dVJVukEr3dDYRDj8c4DaYGBABjXg5eHCEQ2q1jiaS4ocg6zSJaCLVH8DviUji9DieLjCEp2XTMJMgo6Nkhhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UjjX8gdA3V2YgKkvJcAEjWMYMo2erkkEGmjBqo5dtbSH95Cn11wa9HndbS73RJ1YdRJZeAoeyM7bAanUifhpeK3",
  "key1": "4Z3NkVhSe1wZsU9eEUPRRZJutqm4RjUhbjRnqL6AQkkH3uZXRW36rvbZmfvAXZLRFTGGvcdKLzpUoChZREc7PXTg",
  "key2": "FmGR3YDTCpovZ6DuJukhRj69tJZjf1oPwNkbokoJ3bhxkVE5by1do5DsJyMxkFVVmH7YWNVqjeWgCKNrkFmUY9R",
  "key3": "3cz7GRohgWjMbxBqaHqPQa9ydPSfhwUKyqCx1s8Bhc8UFvSEmbzjBdjrY7umKmawndRmFgfK8HVit6CStkxVvj9e",
  "key4": "464qVEeMTTCtMt2ud8dmruQer7pdMXQcLzJftr8jqWUeaCz4FoYPwWrqaR3Q4iKJsUu8TaTW9qDepDqHngjYgR7",
  "key5": "4bx7uRmHiaDRYizC33822XiU5rZ73GNG6WpMA1MfYzChudq3yaJMnCN6Rbw5aMoYfjv5gFMUNMpe1gCSWzRqKyZf",
  "key6": "294q4D2gbWJgzzfX8RU8tgdCavdEDoo9ge9xp9agsbxDYPGWK5UfKsrcfcQrX16xXuUpCdUEBCJTwvxLjryLbW3J",
  "key7": "3RTsnY9Hy2aTh2RhNecmLqtM1AjPWc9chaKtTaXssaLT5b4pUVKPT6WbcEDQzoFaCNZDez2rhiCXzpfRenPz6CLw",
  "key8": "2dSBS35jPwbXmjUzZCPym2iteqJDy8zyeXFX6FiiNGryaLdUG8LdUs1qiPy5WQChKCY8KAypeN37ijCBChm1PTJc",
  "key9": "5vdpLwXxAH5c9NPMvNAs5NzYoC37LY2DzYQM99UdZ5TKKGcvHr4gPa4rqbM779zCDJemk5x3vR1umjaNoKw4gAfp",
  "key10": "3rqSzfpm7S2qXAEVJpLjnmuXYTJeJBuifPKbsGBzCW7bTw5QE3TkfVCjXgtjj8HYKnzq4p9Ms5XBtgcrtyKcoKfU",
  "key11": "2qu9zS9kVJCKtYfytzeymHswbKPpqWQHo23Eee3YfS2PJz97pP9ZS6ahY3CTgbU4R5q5yZDvH5cevugAhBUr9MZq",
  "key12": "5UFJV1vRqJZHjeQxKBshdL1YH7Gg9GakuUF4R5PWCnqEXcatVQny5zBqH8GyHWvbumgAxJjQQhieoJazg5um9QVv",
  "key13": "5KNM9GJcQrW7SewkGWQNQZNJJZ2Mh3hTwU2UVJtXird3Nu7Vkx4g6E5itX8hjo1WVSFFigJn978qVeybdbMzoTw3",
  "key14": "2SJbG4FCMVCB1vwqYe11AJzg7TsdLJjLZL6fNCidMFNkdca4SwmwaEPWzikBS7d14wHwsidJWVZZcuTiZqbxjnZv",
  "key15": "2Hg8ickZYjgDZEC9fmhXWjYMSXs817qTuGSZqvB6a4aumDU5TMeWAySNcWDzMLf6M8H6aH9Qg1fXFQQS9LizefEx",
  "key16": "kdstdJCPLmiCAcVgnmbWmfdoRS5N7BB9XXoZMRYzdrFktRcuHSc2vmegA5xBXHrzsX4ig7fqRdR5Nrbz7qkrfig",
  "key17": "4Kcjk4NnMLUm5zPKMktHDanpTmPVRu2h2kZpCKGVEP8YyxbmDoWNuE3LyViwXkHvbvxMTUAbzPnFKxXBQxvFyMFH",
  "key18": "2dkUccvT127WbUct2hjyBvv7HTSm9Nfvzbtc6eZVHzGthNpAtUVbHP1MCBJk2ziHEPRo7s9ZosKQiuAg4dKQyiZL",
  "key19": "29JLN2fXHA7pyqSFBg4kBy3mCY1Pb6mYVzQAevwdtQpb1VXQw5eKxeeC6EiVeMaMDhStZeWDc6RfrvaFYTy4ndak",
  "key20": "3BqMJgEL4NjYXxSRGSARNx4281CfSaEZiodGwYHgzAgnPPxVEAqhhBzmx7U67yGAWq8F3wqjuwfniL9Y5E4q4Nfs",
  "key21": "259PJgq6hvdqiCCCa1PXf3mkd9UuittbbRDLPnH6MtxotDXRFDYYsHdP5NDcccjTj97Lg5cgMVtjyW6rJQZQ72Eo",
  "key22": "4PDNFJs7aE698xqUq4y2bkGAtSQxVrkFWZ7tG8GabNYLh5gFtDN2WcxpY8j3obdxr8vNLmDRpafj1EVXHifBuD6D",
  "key23": "4M1i9x6drs5kd3nakdWHaXhYe3Tn81WTdQ3WVrJ5BTj41M7NgFfAMejtJW2QxvzGF5tF6P56Cxhis8egQiScYZGg",
  "key24": "5ocZn4GpEAuXE4Zv3U3wy7Aekx78gnfLg5FtMwdXnpaGGueGVjBcAyAzkjpSawCFsBUQCAvXec1mg3KAtAeMA2Gd"
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
