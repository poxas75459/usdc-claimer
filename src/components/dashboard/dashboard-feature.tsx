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
    "5RTpSVp4SPHek6j11nZHQyHL8yQdCm6Dz6hnNztqTDeHHvhFVGLfYoSmDvg2vmLTUFAsBY4zthrjEeTjDwX1JGZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qonmdb8wK1RXWKcoMZbzSLqvhs9ewbzLi2jViZiQntMBzYrtvvpfKnpSq5M4gdNfUcj8GdwJz91VRuYV4euTsE8",
  "key1": "63VTRLfTPWuUzVGN2kn7Dnop6157QSDYwBNjzKDuvNug2FXphL9RSsMogWhjMZhjxeQowmBXWzfh12QWXAB1A97a",
  "key2": "ejaqs6jJX31JcAcx1MPH6MXFv4AmAu6mZbnB9AzXc5oJF8djzso1i7uFPHa5Px9ynnpcgJ3SEukHRoMgVX8oC7S",
  "key3": "2TZsgHYkP62ZJYhpV5hgD1RMhsahhcknmGe1vorEhuH5uH3ktRVP5DqhDWzceGQLEHzb9CDy92YTxBAMkzT82W7r",
  "key4": "5veiKGwfFzzKBBdFTu1e4uyqrfg8EaCbGbyfg5ZqYBB4AywdNYPooR2m8PAAkDqfs2yT5KZPu8Xygox1QMD1A1KE",
  "key5": "4U1gYxHYF6XcXNYSrJAx1PxGF4t3SjECTkZ13maoNxNn8Vvsj3M9NnuXhJhXTH3oVDqURYdcgyH2sm26qwmE2piU",
  "key6": "2unDtTHV1C6tJRF4tukgyTWUsoq479foQSQ427CCUUYpqk19BbUJ3PkASFn2gRHX9rHgxawBF1NYTVVpqwg1YBaS",
  "key7": "4T2ex36KAdGrTjrwx8uv3cLRAapTZAPLYYhWB3PeuNUxxUTLyBehPiqg1iACXRJoPJ8mNZrswdMtuCVuw7nKSL72",
  "key8": "KN4xEdZrVAn5RWdto3Qg8pGXVjjhY91wZ5Ae1gguQBzCn6LMiNfnird3YSHSJ56jP3fqv2CVrHxucmu89gQwFn5",
  "key9": "2Px29vvmK22NN78Cpb9WqN3SCuUQCbZH9iEXBpwWEG5XYHzEaQErxTKwUYDuoABcW7pQ6UUjheJhiNhuMEuu6e8M",
  "key10": "2RT7yq33bhWyeNhn9vfXNMefHbRZCozToBZYbe2NwYLVXjyYd6FeG3dMKk8TU1AtebjhA42ttQK5Mx1uFswhBBYR",
  "key11": "2RB13jPfW51yefmM56TH6sYuoTQG1oqdwNWrdJkHyxtoVFq2fE8R7maPYGVE54rvfTvvzJpvUNx9BNk1kYCrKctM",
  "key12": "3XPY4GB3QjsYCFJ3GwKgUnqw54NwcFqEdaUSq7VsjdwBUoXp8YJWyD3LVAB1z5Zdbux5reuEKenzAd3G8cfe3Bwo",
  "key13": "2HGiSKPdD9AjtaTZzWYn95ju3wVezL2xwZEGHPhGzDqzjMmjizLkHLeV4z37n1pQRHFRRau8VGFVCW4BNjVVFJLk",
  "key14": "5ZbHzdz1SsWn5k3pxQ6AN59PKHAvbuETVSfKPMP1nqWbdXM7pe1hWZLLbTbCSBi4dJmcKA1GakNH7zSHUGcyjq39",
  "key15": "4UBhpRQwcAStLo8p4EJYfwDnopMjc8u2A441GEa7pV2iaaknKo9JrKFqP1Mr3y5xL42Q7mN6BMPUV2oPvFJvdw3Q",
  "key16": "78PWjiF9Eu4jgeBygE8tHmJZphY4g8SQFtm76Yd4izi1jsDboug2YmTDhTpPv9rYqXwCEx6fDkEk5C4XZKD6AHq",
  "key17": "4WSRG5X7EqbtFKPFxgBdFZX8X34K4GxmeW7siLVSmDzi78JzTTa3V3hWqRvGvhhsDeJusTguRZvBwZ8g6g3XgvVj",
  "key18": "3rtRhvwaFmrXdeGiyVj1oPT49ZnZURKQkkRgSZWsHt9rCgHPJY1ezw5JG6FdueB1SCdzUncv75XzQFekwgjVEjDj",
  "key19": "3X649Dy8U1HdwwaNw24NCjjR8no5NKzBVFfZqMcexK8W87G3fx4bfJFbictfnyoXEin7qvpGhG7reS4Dx7W8xQcC",
  "key20": "VrQkVDpNSMNQXMNdvVKNZt9ZFttNjkLQnL7YYxNSyzdMabzLwUA6KJ85gVRxfDuL1CxRutUvBqkWuT1m79zLoME",
  "key21": "3BFCgd5sKvh8SRLtwtx7CzD5rU8NwgvX4SJmLDEa1MJesTcMYhAX5bZhPw7ZRUNMWpk1ESZy9iBUE55AXBoxAwqF",
  "key22": "Cgk9t7mezPCYt8mbbajj2QBToUGRnEMYYNTzPVSJTamyG8mVA8fMLng9JuM6DusiWu979gCXsJgeA5ps39tZxJr",
  "key23": "2YgovZjZGYARDBBtnChBn34mrG4fcTzW3Hcr6z1sxzTxdeRBcDkxiuscMHYKjG6SAT8KWGr9KDdu9SnQ8pKctLoF",
  "key24": "2XyeXTkvgrQUqfnZMeq6oZQkm9GZ5e2umqbDqvAPSHha8S28HakH9WUZ6PkT2sogVaUc6b7thY49UyrPEFtDsE9N",
  "key25": "2whABq3U8xREu73x5N8h8hJ6RjpdP2i4gCBr1HgLYeZTdJX8G4gsqSEFk1vmDSN2DkWp6R5hj9jfW9SbRaMo8Dva",
  "key26": "2PAgNKaRE3P1pCeSYSB3WcUzBvt8Sc5u7ByS32ThQXx7eSDS15uGKA4kNtc31zJhbm3NJMgXCSfdRADWimeuiUGd",
  "key27": "3mvwTGYQNCd2yQLkTtbvU6a8A9SF5NdrGEq9VbTk4eEeYs8TpVjAQL9jTpNpxFmz9aDcYHJHqhVE4KNxSzJ2p8GK"
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
