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
    "SwVUA8hqGKnYffSA51YUWkNY3wCWB8FmnRMHzqRYsxYxfruZp9yi6yNrg2rqdVgdzELPYuHZDFp5E5zV5Y71Cpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wu35QZRGNcSBX962ebANK6vx444XXnuyz4G6FFtaVnwUxVUtpPdXqwhoCbWn2bpniHSNrJ8q9VbFbv5xVQi81h6",
  "key1": "5n7VRpNCLizBPZmLZPtpDLSEHynWsrHx7AdqoGVr1jxYPck45bDfpvSHAp6KgNnH3AC5b7JrjMEDv1kYTsnhhGii",
  "key2": "24JRJV8cKUJWEHv9jXa1JFi8ZwLiAC8L3JQ1q2J3EnDjrU3QVbsUzTYD9n8acqFKeQw8hgx2bbwsiMFHSwhg4coP",
  "key3": "57XSHeaeTsfj3S4vSg7UHhUjHtc2chmXiCQDVaB3Eh5WSiL7fB4CwJQdZVvxjZugjaqiYotvCVCQm5PGfjCZ8vsc",
  "key4": "64Vn6PcMvWbLB761BS323o8uGFvU8pUo4Tg4hGVuu6PLfZfZ3AAY7ikKDLn3Haybcvo4QSAaSMYYvktqCfagnHFS",
  "key5": "SoFGqXhcAq6DujUkfX8p6tR73AvDC9FbWVyJKzVBsNx9rdBiZfnZRZkLmAo6wqRe8UDcXYQa9CHAB2sHq3sDWNr",
  "key6": "To1E3ccYw3wtf8Bxnf9R1VrjZPsVde5SqoB3hzZVArDgNi9Hm32GG9WnQi6jfVS25x3CSEn6MZ4bJ7eTFZ1hv9v",
  "key7": "3npLbXpPegxPFp4oe5knxCxyi7imA5W3qwWr5Fb2gfDvoiPfmCJ4pjqNjsDPbqVxxygdQAZyu5dPquWwbo2Wn51Y",
  "key8": "5jaapxN9UemjZ6V2kEBuEh4Wgmushjmus5SYk3NGYzLJtfjzVaBWZjRmnxcfEFQsnHxyXu6xv6m8jgVNSJ618zFa",
  "key9": "jEz6jDQ7ZoGVTS7o7XnVNJighQWY6y2BVf7DQyT5w7hvp6z1Q214fHEaUewc3p52pYb7Xpxjejskx5vxECtywEo",
  "key10": "3x2vtG5D6Tdu29XszvhfXKT9sLodsXivuUKxPCsqhiNURQb39nb4W5ygvAVhyBzYuG6eve1ocad3dDe9WpXQ1GuD",
  "key11": "3z37xA7Qb7EV1o1s7qLxHt8CXiUyd4VusLEjgaFpXzN7MamAtExfeyVbHC3uYarQvhAcyS4VFBCVYgg6tHmHU1Kt",
  "key12": "4hJZr7zShXAa6cYuedfmg9ZM7rTz3bSoAVvMCDZCQFXHtrCCqrQtUFLzSNTc2DiBnDYMAug9eaEjAeoTA9PrgMyK",
  "key13": "5Si9Ay4EVhkLoZ7EYEvBZFLtFj3izL5hivGkHrpwc4gJQ85YFmGddSvqmVJum1tG4rg7v6a8ZbNFGsLgNsTiHNH6",
  "key14": "KtTsF6XK5TeLfM7oRFnqpSMrZP15soRed6tB6BbmtPDoRwdAjtUEm6DYuuADXVAmr5jc8Sp37CYUhtjnmbkyfAM",
  "key15": "5XwLQusVfKSegr8c1jTGFZvGVmyhWPCNV4ERQh27su6gT8mSVXexF9MVyhjDjQyDNirUCVRmoUcUadJ8PsN1Jsnx",
  "key16": "4CSALJXL26kssXGuKY2KEcsWyggE9BGxFKqDGt54LAgWLBsBVUAR9F8q8C2AjWUo6MbYcEmmgfMXUSbpmQxXDmDV",
  "key17": "2i7jvDfw6z1fsge9rGcMJ6LsQHyML595CEdJoY4obDvBn5FT1Tu81TdEnEuqLRe6G46mTcpnboFxTwWGLBeChYRA",
  "key18": "MfKUgqAHjM1fH7j8YQjcx6GtqmP3YCqtmuuErYE7cyzJpeMZM3ssrg2gpdgETgANCL3MPbHrvNq6DMeWG97n5Xc",
  "key19": "44ZuVYuEaPgZt3j9mQjxwzDRxeUt19Qdgitx6AmRJgmbs2RWCc28DhSAseGK8EDgkZVdP1gkdCj6dFWkFG3eTy9N",
  "key20": "3FWNFZuukLR3uhxw8jH7ufpp94JLPwRCN8tFbNYGLHccZkM1MHcbChK6VABxmnsWDU4ApNrvTmJewrU8nQYYfQDu",
  "key21": "HRoXjKcvd5vJT6B2ovKKPhdCDajBujb9cUgjVhirkHqyqXsyvkxxfj8cExikYr8rBiWjrhkjR7C7eHdx5yfg8UU",
  "key22": "5wPVBVaLt7WA2n7Wm4Npts5ohGuxkMFUjoVaxJXeJbMuEhQdQ8L8iHccN6i8D62nG1R2S44Uj4KkG8n7ho7GqWjp",
  "key23": "4dPMp3YQ3y6MAsC7w3CtzPYFUuEyw4oeEMMBkEHfhwQzMYLzVLXUTuoeK9US6LRnxzsiWmMDZKkpnEtPNNyQeoJk",
  "key24": "5UpE8wYBXBk5RwHBwr6VmUsipKLdEMMvBvo4qK8xFcknig6i6aJkZ9zHCm2jdhGXVUpnvTuoP4w1ZjXsDvjrwNju",
  "key25": "2jgkxj4tzav6uMZ594haLvHQfEYLR5iaMhBNwwFQVqW27nyotJ1oCY7wfyKi5Xz1NDbssh5bXsovrawtTvt94Fdc",
  "key26": "5i7sNhAED4H6wjJSYQVPS74NfveyUSTRtHtHNmXN3dUUCsHpAutCuHCr6szDxXhBevBYpc3Eoj7qjyDxN4UBYQXN",
  "key27": "4XF5UEp8yXn34bLkFuFHPyxZFAD5bMSjX7JgBPkWChiMNpZFX1AoPDWr8tJbJLYsE3DiFyqEiub4hx5EKfoh6RXx",
  "key28": "4WkLHAcNaopmXpBqTSiMDUSr2WDASs7KbzFEba7GszL4mb5koVZU1J3teCCLdNdxNijjG2PpnrtEMoPsJsH2XmH9"
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
