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
    "5NR7t6fJmffkTF72LxSXwRbQuq3v3NNYdHNGL6WJ8sYSxd3ksv5Yifpm4QoxmGHbs4CZemCEprTzXx2zSK1ykat5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ffFRvPQghZMxVn61KEANRJYmdunMcPtSWt38vLNSbuxjm3VuxhpsgKSLTZ692rbqmTQv7GdvTBxRiPFiK1f37Mp",
  "key1": "74ctM87AphfyV2fczrBYtDfwxX1q8oHHvZGskFCnW7U4ADeEXsByojBdHmQWWq38K6TpqwCnGtouFMRrkP71L1u",
  "key2": "4xJPXTKQ4HddPW2Ayet8NiUxrXkp3kwaf7MzoyXiDa9VSVGqYzMK9vgdMhtRYe34zJskQfwSHMGPySuGoYdeuu7g",
  "key3": "DgQN877EJVsMm6qPRnekhS7U98GdWxF61hA1aje2yPq3GK4CsjgUrmZ7iQLEVx97FuvTQVWYtaXwAJimXBoXS9L",
  "key4": "BgsMXyjq63mMLa9SqULiEZQRHSFYa5aWzGH2FwucgKEtg1SX6jc2m1fmS1vZndfNxrEiJCtcx3YxL4T34djXMNk",
  "key5": "4yXQTc1fe6awVedSh8CbJCmSAnqTyJARgrNh1i4Qd95fAY15fg8xyaKQKhhNYzTHLFFucy3TAdEGx1me4uyMA7T3",
  "key6": "5xgPDqWAzSjMphXWgp8xEEFP6oEtVJnYe6er4hYD1MhRJcYtqwgDCevF9NXiyWrR1pxb5PSSwQqpbTfnGvy2a4TA",
  "key7": "4tFLMPQUR54QM3DUmuPXUC86KKdQhnq9Jarosp1DUDWbg8GfjCrpdBsUBazetURaT629rXUpdj7d8vSPagWoCCZT",
  "key8": "5Y4RwuCnZrPqCbCCJzteHZpJAhvahM3Aqsc7pjAymEoAFdywd6E6YU3Mn7bxsN8JZhW7bRonHHo3kKMjvfiETvFS",
  "key9": "86LiUjKDVgJujjK5mMQWs3NzaXkjZ2uwv5VKf3dP8cQCWA88ttoDQgKuQtRLkNSnEEfViaDYePaJzpfK9Ysvo92",
  "key10": "3FexvX9bsJmMh1Qyo4gfEeozKCFARwwjS4unQCbgQXg4nsPwkrAVPNAPrhEgSyK79nNCxYBTQAjAt5k3jTG9564q",
  "key11": "4P96smh4fpxghnEFRqNVKAtnCoKHp6XNGuE5Aq2B9UyNbJehUx9Rogio9xqMHVowMKKyRHyWCcfiPkyxiR94eooC",
  "key12": "i4izS1HJKWVGSRCNw9hXtD3QXLiUZVdyLVVELpbehb2TZ7xs5RXHs9hfLEqQFU7FrK74jGcfmxHDAejXUUuW1sn",
  "key13": "5MXnzKH2yJ83qGDUm8izHRMpKqGT5E7Pf8NiJvJEdiq1Xjbg9oznWubpBCoj9RXcgMCTpSPnApX2uSYsbPfvzQRr",
  "key14": "3mVFqy8R5urQN1X6yJFFbiPz7z8bjpvgaar5GMLR3Kxsh8AwYN74aj5bqPG9ye5RTxqT3GtYLMCPkrrHQ1CBQp4d",
  "key15": "44KNJS5FZzGa5GoRsed9ptDGmzhUvqWLYzAWWU3eetyZ1CVHrvXy8y6Z6MabhoZbQRh44d88gUu95x1LcSv5xQpa",
  "key16": "4MWwycLhWyKLxJHfiS1rNEHaoaJpoTLtQGxmvKJuT2r6V8x7NX9RmMRyp6g1zSbkbyJZpsLH3r9sG1JyrXBCNF6U",
  "key17": "4uaZeZCvTB2XvQLspSugCdQh5Phs54s19LDEV7HDAABLFRTAXcER7QCfGPaTq3YFK7vmC5APfa6vUXTVGGEUza4p",
  "key18": "2mWHnzUikcQmDS9GxA2MirqZiH2549b2Qr9g7u9L8tK79PjFCzemYEUSGd3oTGtKDSL2V9mKPPkxRcrrA4gKe4Aq",
  "key19": "nQmVuQAGXw2qjnykwkw9FbQhbsTSgFYLHyEbhuLfvoNmTBXSfrr6nse4Tfhuzjv5DJemLCoxBYGem3xWGffBeD1",
  "key20": "2ev9WSZVK7Pxavpw7cfjBTgrH1Yzq8UzvD3QjmEmC4XLLV8McYM1QA8jPJnomfLCwxeoH4gn8Lt4hhSVFwu5Pd7T",
  "key21": "3TvkUDamEdPMdqocCLYPY1haUDLnGGtCeZYK88MuokJoUxk4VkhX1Tv3Lw92K1ibmioun1dPEXuhSmzJCMSZ9bTP",
  "key22": "2Ljo3zHD2hp6oGQa7fAJGBPSTYimQtxEQq1Lpa5x6rX8vR3htgLW7tYq38z3tfe4WqFKYfpYD3bcb4QQ4rJFm1hG",
  "key23": "jAvKtwkgAVSScMUiX6hw3CS9VfREaEbpQ59T62NjG3L9qzgcRp9iiFzKGytT7uyjBf8TCNBdGNa11jzcwjbK1tj",
  "key24": "2Vk6GL2Y5NoEmZFL6wRGcv4m9tFfMM8jegJac3Loq4vgZ2A21G3AH1EALh5gZT9vvuRoL7RfmSDsbY7mqVzWkSV5",
  "key25": "5a23mUreAv9r1ZpnSzJk2dY3zNVfZ4P8GSawyckHo5Ze8r12FrHGs2Z48BN76YVaGzqemUc1xvnLSJXs13e7c8fQ",
  "key26": "ZmAPjvcHvB2eaDKj6R5VHTKeymhC8g4aoo2T7UGeEUryhkYfZvaaUapdH83wi1soXBzgqsGpjPf7fX6jcW3exB5",
  "key27": "5Ez6PBbgxwW2MV6xNvhfdxXpsh9C9anHK6FYcqSdiyzajSdzVC26mYAM5HtKjni9c5yDnm8hAjKzy5AjCmk1j53R",
  "key28": "2k4A9y7axPo4f6MiuhJHs6xC6EfAaow7uj6Ygzrc91peVLAAdunaDsGBz33oNw6s4Jn47QjG3SH8Rp9T7Yh4ctsZ",
  "key29": "2ScBPJfYTNGQFhbBAVvzdBdcKeqeEDWtQKgboDdH6b9GNAGVdXAp9E8YCXKK1KnbSczzcMJamwUzmfwzUXVVV6ju",
  "key30": "4oBpVVpwRmyzFYso3DAnyTmPRyt4f358XeVYs637FKcAZnUjgvn6XDXFm9HCDQrdSs6H1bK4gPd49L5nP6vrL2NY",
  "key31": "3mZKpkjJS9v9bpCnn3RpHd9ByjXqoNoEuBTgKVzmfadqe5GYcPtPdgLbC73vR66HxH6VCZxTTmHCqmFiyTDCAqbF",
  "key32": "4Wav3yCy1ULPbakno3Tsoe2M1D4qctrb7TryZ6cwnqPMpCNgRuGunUYBasT49fFD8Su5ekUPACszCUsraKq2jYvz",
  "key33": "3UvLR7JXmo5ogJbdFUoSjRr4PSUmJzBTU9fVyL3Uxfrvx2xQBdRAxZqnWAa12mfSCCDPy6vXqJUdz9zGgDxweUvB",
  "key34": "ZGVLy8UXTmkt7FGRNWnEz61u7jCWn33GMWyyz349DCBjEK53ZfzTv4TiESWk4kZJXN2pJbUZbCPjWMn8KgepGUW"
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
