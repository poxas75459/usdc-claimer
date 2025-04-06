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
    "ssUASoxbh5vdt6kmRhTZqLZdckBSPTMzv8XPRRBNha2n8HF7uSdmAfvbvU2i2Uqg7aVWYPDokemM9Jffvp1QW9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JCe1XCWvYN3JfGgYW6tZfc3B615u3CyJX57PND6GkfVzuvfFAqdVqPEKBEPb5JFBNHu3EwyuZUkS9isdoTbn9fq",
  "key1": "3jttnPUtvJmSNu8R9KQuGWxyc92HK3HFCCq6hQ2r9MSvHT5z8c8KCSJWmyWSSYrLskyD2ynPrHH8fZqKGSLTJgVr",
  "key2": "2r7FEdTsMN1Hx7J5CdUrWcaqo69M86BuSFMP9E9a6QVRnJ43E3vFVhmQUVbjfCfhwhtb6iiRPzs5a6NhB9mXKkEC",
  "key3": "3x8ZHqvZ8dRR14JvZwtoUbXoBBu3FQvTD81kXMfUU8wdAEBkvrrxeZ9LYRNjixMXYCkW6YwEfyddnH8A2U6B7gLp",
  "key4": "4h5VAALX6GGUevot2YbfPx2xqmuCfvx8XoDZ4Mpkz5NDwPpAFTXp48LQk1fd6Dvap3Gb8mapDX2kzdBQgZVZ17xi",
  "key5": "2FxP7143XWwYrxFCSfwqws9gV2brQ7itGLoBn5eXTLR1ofdKdiWHCL7hCmMYssX1w85dTVWTJKPtrzUr58rEaa7L",
  "key6": "dpEEvdENoVMBVAv4Jb2Pxv8yesYKsBCLzPgk9jqMVtVTQRAtHY891vyMAwmDHuvAAE1g3YS8jFG7cptudmX97c8",
  "key7": "5StkZUosMrW9tAGXawQydZgKNSB8xCCosu2i275UMHz4nDiZnb1CvkbyZ2itdwZHEMf4Qkqn9W2sQrzeh5oK77HK",
  "key8": "5spZeN1qDqnGueiLcrTBRp38kBz22BMNaWRnRyEvHFuhspjCFKX4PCbAZWQyhuvFbUH7A7uUbebjYns5HvmRZ6b6",
  "key9": "3RrnguxhKfpJ2GsiZNCwvSJ1PSmHcjLcewiF6HSoTyY1McayCT7btjXZg5xnFX1cq8j8hCPmBAaH9wa6Xoyuysan",
  "key10": "3pn7QN2yoN8yqwjeVqrVtzq371qy2aqXbQ7TLmFL9wSvjmNcJiC3Hwi9BDhvwksuQgDdEPfsyipkUR6zejr2gtkE",
  "key11": "4T7JH9Yn96sJduMjfXzdV9Cx4UvsFcFBj1QiYS8oC8zr2jWdNBAoEac78BWXXgpX4rQhZrMJpo26ty5Lm57EqtV7",
  "key12": "341TEHTVEBURdSJixB2GCQJ957zy3cqGvVGkr5drrngpTcGt9iReE9EQspTDvi3gwDj6PjVva69ffCQQWUhoBLwd",
  "key13": "55k1q8qKFvMK5rwXWvg5HSo7EV7Yga8PgSbbumhSEEFZs9UJuoK9JrjksEfFSvveRWGtnKWp8RsGebq7g1z3N9BP",
  "key14": "HCTr22micjHuJbeETfzvUtyDWtMXYuSqaSf35CYh7ZUjavskhjYDKSCX4rqrYFdRvVHFYBPiGR7T2nRo4dBNoVh",
  "key15": "XJ76sDRdgU7cquaMsxpmY6L7oPLQgtcgTWFaLBhBJ2joo6JYAcnc1qWAmA8Yqo4cXTUoATWMRBanML4JdGt79wy",
  "key16": "3ySVUms1XCfNUwGRfVthmjzmQNjTHQHhpZLCFd1YUd6Grb5dnx4Qc91PGk1WkAfYHKFnWpn5XNqCit1dtPhHjNY",
  "key17": "2ALM3X3a4QCWQZs7TE5weRidA6bLnfCzJDMjD7bxhVETVcWG3kp8o4wKJGuj9HHC3TCRziov32DNKGBzudsA73Bu",
  "key18": "3YZgRRqhDShTcuv2uLeVv2hSnZMAroFFGY9JqgMFqPkFXpuNZYuoagg1KAJfftJZ21Gh37Giipy568fvLKKCMxtX",
  "key19": "PC7hscumDz8jZ8WWSUc6L5vtANT2vGRn2a3GgUvReTKXRt682Tgnw3nHcGVzphH2LBCFDRZWmEiRwrqZvrjHQVj",
  "key20": "48Mk8QitmqRtSZWwAgvvHLzVWWANgxpQXiX9CeDowvHdDbv7aCVAnByaFEyGiLxEE1sWbaTb1i9Y9tS5FUsSS555",
  "key21": "3LRYgr8K1Re25nH6hE5jN1CwvJXsF6fWvZizVvyFgFbSJe2EZsEi27XarjEpptogJ6gjUw56PSG5zshbUxdqXfvG",
  "key22": "2siTbbSKQmsdubznmGUU8HfvxZzoCRisvbdREFPhkhfn93qJuWZYhZmQo1xMmeXgE1iwZbRov5X22DKuZdw6SxH2",
  "key23": "4B1cCDseUok4W4tpvaEb3RWfNST8QQLU9eKmRi9KBw57T7BJN1mCY7q18Tvo4S2zcHfWBsybcBh9g13mvVoXsbEo",
  "key24": "2idGFdMhCUscfE1Qt4MQ1iSCrhdW2Xz97KeqKYsrnvUeZnGRT4CHx37UvVouCFWXt9qWbw2pUyafueUcKXchKW4",
  "key25": "5bRhY3tfBG8pL2nBAAbsogmihoutFzj1MLM31UCWu8E7Y3NCZHfc3aeyWYDD6gzRsBJQg3inwNbZ8h9P5NkbMq5F",
  "key26": "TbhLdM3pyaqmmhSPn7TWYpZfSe6uxy8f8N4rxbFZHGGbZ7E3yNcbBDasA7hV8XU2nhuAdw7TZBzCbzD2hgnFfvm",
  "key27": "JN5J4xjBLDaXBH9BEfCz7UUZC1NGLP4hvWyUD6yZHA7jX9Q5q5uEm9vC6TDYyBZTc8eu61Xx1MnefNaBfreWrGn",
  "key28": "14vaWCriVXeY49P34zvqknD7UWgMuFnZc7zYqGpAJRnpUmvZCCaizjWipUhDewhpJRm1K8dQupSF1NpLEv36ERT",
  "key29": "QebFmXyFEdAGPMEHpfJYXZhE7qptxZspXWP7kcjerMnEQqfb3pKgAV7RzQ6Ht2LdQWpfiLpwcwY4sgcXUWG58uP"
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
