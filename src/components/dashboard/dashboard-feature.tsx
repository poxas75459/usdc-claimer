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
    "wn7TvqyYkHFnGZkme2D9AdKSeCbFVLaNNSg2SYWh8UKLuqnZDeeoPVLA9QTH5NQsHY9qLmhFn3Lawe27e3KdLzo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VMpRs1DdNMMi6RJggYAMo5cYziP22DKWVJPBfLxMQQhunnJW69fv5rgyc8F23uHWRm2KbTUiyZcSA9J7rjsEGGP",
  "key1": "245zuBTW1ACjD4aVNz7ZAKJt9dwd4uFFGKNqvD1mrnoqN21LcpG7yYwpdGXfzYUGCzpp2zuPqY6zkrWbCLWRLr9y",
  "key2": "65WFcGbgcG1YEi5qEAzMyhMAnfdrsH6WwP9V6bURv1xF8Ub5hvSgCe1dLrt2sfG4dpCdJ6w6kVXisLEJ5PvQwCao",
  "key3": "4EpsTo7nAbnESJpC6Us6xMLwiqAbAXuyGj5R4icBk3jHqfX5JqAUbC4LFhN1GvG8sVsuqX7Qi9Kyx8mKMwmE8jC1",
  "key4": "5qui8o17faNnQr2kb8LmHLf1nnTjkaCVYgPWi12iQZ5FsQgVwxZPGuzRUHY9kyAJrJ9tAe7SGnagQBkwSYDNdVNk",
  "key5": "5a35j3HN1omAm1Gv2P4JRiWX7DTQB1p3zkdt6VYN6a7noAxg33LRQgh3bLzdKyP5f8LgerXzcvudrY9XHpaeLDHu",
  "key6": "QWzvNhQjCw4gvZHkHSkwDo8SyR7fyH1Dt7Ti7z3RnRHM2WVEd95kA9YpTtN91bBPGTm4zh9uUw9BC3D9hPjYfqV",
  "key7": "5KpXa8LQex8QZGy8yKoFRv4YRFauKcNv4ishtyiotRBtbM1S2r49X8XwuHidHY1PkeB3TDzLU4HGaRuMzGcjMb91",
  "key8": "AWARzegxbnVUQGUAySevdaqA1TUsoATmG6UBMNWgmnRqXQpkZfxddHgQ9r7wEqLZeihWJTEY9UCNV8orUEW66KF",
  "key9": "4WfcBhp65wF19VcvBrFkH9eapM3KZpLZrHW6ZmHqJAxCGYiKTC29BxoQWjZvK69q5UoapMgmpUBY9XD5Gj5Zy2nJ",
  "key10": "3cZ2muS8Rn1GWPC3FjpFFZBfrundtjC7Bweswy87zdYuee6YHmNKRtvgZKbjpBbA9mMyMJomjtLrNV94keoZQxP5",
  "key11": "8jAYzKzXvrAmkr8s53THhj2d3N4LyAvhnrGu4mrsH8YpdMDb8JUCsPk8aGeyYQMpv6pvu7ip9gc6V6wDy4fbitn",
  "key12": "429FiToqASvnDPyXjZZgjsnPRFzBP9ExKpmBqNyhqDWoZGbhAKggft9Q2o4yibkVz1o9UvZKv893FrBKQKBcG5Wk",
  "key13": "2qNbH7bSuYdmtsPMsYVLnYD8h4a8tiaCTQFtoSeUSjRJUNhwEsgmRQXsWGARffa3Lar16P1Dbj43trYcyFnL3Ghk",
  "key14": "5h3NrxH3HYzi8meurhUnoRD6goP5YTKrJ27rhCxgUcQHpZxJTjJGuZjHWbwYLmRHMWQqNt3FW6tJnYrj4NPYYPvt",
  "key15": "3NBnLEQqieFQkR8xHtDfodHpU5CLUmZmpyuFB7Y69cX4P3AunyH2RAjoaaQyEGNRxRpRFPhCcmPmnZMvQEiKCqYK",
  "key16": "66pKybM9jJ55J4fqcMbam27UnwawTcgh7ZKNepvjoD7kDfHEJNFgrDHM9hkSPdt9E4Xdd26NpsG6ttazoWL16WZt",
  "key17": "5c4WtQo3gFGmu5nyHr4i6LMZBwNYzigq1YSSduhjWszhmQKASh6kYRjVeUzmbUUx89RPeed99n6vE89PLi3uzQMk",
  "key18": "WofZ8Nx7vt72tfw3KJuXPd5kWa2PmH2kcA77ZHaBS9fhrvDjkgf2jmdD5qYjnCmftnB74ixDU8NhVdfcyocghza",
  "key19": "4XefvcmkmSTZyuUZBGzuVvD7zmyoWTyW4aHrCsJczeXrsGJ3SGEfbqXonJzTTHHH6RzjRgLUNa2PSDk3MVBWU2JX",
  "key20": "3DkqzM9h8oPbLBKJisena1QYwSFsHw6rYZYadKMujQXKsdtFRbBjN1gzAXzt2NegcBnDm87SZvpzpaAmVRNDf9AJ",
  "key21": "48EtEqcQEMLaosYZXWZdF1QGYzjTSmDQvZiaBeDU7Sxp9Yu1Dnc6xMKvTGedaawpqht7F2ZNEs7eAbrQH2DKGLEh",
  "key22": "2rvfTBAiv7UZwuuJBamPN5AH4ph2XNjG16fUMubpGG6CDRh75rx9oAssyYEZQrQVmV8prYQYpGiBdxMztza9xJsA",
  "key23": "5DZ1QYmRr9sRKS8uo2Jj6JqRnzVRVP7TTTbVZz3xtJeZ3uUoyoTd8R8vtFZiWNF8Th1dLVBZH3Jh83W5Rb6A1tsN",
  "key24": "2Pq13VgH19qAgFLGbvjkt1PKSL7YAyQBg9EDJi6orcW4kfP7XFaDgSq4RcCcv1Bc71WQqadoLM9bGZuYPnYW24VN",
  "key25": "iuxsCX7YGzsHat938R2q66FFc5NFTePq83QfMeGSgGiFHRqoK5BkUc7QHTM3PWVzxteSJAFmW2D1ixURNVEXRdt",
  "key26": "M49kafx6mpfrsz39HsqjcR991qPp6DAJn89rESmM65zX7KTTZDXKAmyHwxPVEr3j1erLMTHG1qtCBnEKEsMjDmf",
  "key27": "7ymiqJd2rdLvB6RJVE7rj16P2Qcos8mRZHujobf2m7efUBhEZnWCoksikSDHYRjW8sQgProwsfZ3XVwi38nVPTG"
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
