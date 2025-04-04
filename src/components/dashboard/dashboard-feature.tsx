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
    "4qgDYePxf7pUrKR99p8JCaAeHjSnYzjQ5JEHottbX9xa1xZ9Qe1TiFEfY6xkP1QfgDuBT4A39AfrJtiFF6LpqtVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VTmj3NX7VQ9wqMSTaGTnKNKEh9syKmXGLJYJwVvudwrBsyiQFNrnvRMw4h45DBjtcEb34hTBXZRnwHMHErwBy9j",
  "key1": "3druCJxTUiGaPd6txpTwqee8MYaHQFWpiouH12Teci16kK3jsgbSZNkr94WTR52M7EJxSmGrzbvcxVADbcipzoyc",
  "key2": "3zkk5TRcHRKwGtuXnHV7iizesX3FZNvD8tYSmCmEiRCwSt8M6HN6xcverBsykvhxNWpJXxnbjyZJg2viwuLnbGcc",
  "key3": "5VGCoQUxBKPHMtiVjCUvUnGTwsr8nqS1H7MpBFx1s9ToWt4KuW1LramjZjtg4ohtfa3Lze5NJL8UE9Z7k7YZaEK4",
  "key4": "3EkofgGLGMTbon5pibhRYyHdVbdYyuU36F4DLUL6rRKzcySjmPXZ3XdfRRTaiKUC1a7tChuxXYWspfbhHdFLZPeN",
  "key5": "3e44LAUgyADsfh8gq4VWcLeU64BSEZT28kJaUTQJnNb7jJGWJutuqvXFu62uxhUQ3ewV8ivPaP1wDSGNTBzgzPx5",
  "key6": "123Y8tY4afW4QhX5LFX9vTSmceaqCQAmX5cAVgmxkpzkz5JyVJDDhRJDnCE3F7o77AwrGYmS4VwoGFVU96qPBtdx",
  "key7": "2PLkVuaRXws33P1BmfcAtb8D6A2banCaTJxwY5ay3M34FFTdnRb4CPq7SGPYtShwB8n5WxaTxX74qBysZhpB9CPn",
  "key8": "5AXqyPsXZEXUEpUDqVhfTYVG7pv8HCGCh4ZSYb8AXtNYZ9ysNefZBNRrFBNSgzh3FJJJsCrBZCLPj7j5r9dAVxir",
  "key9": "59PdBD3ajT4xnPpHGttNtEtjoGy6VyRdBiw7oYtSS7AxnmQcdFaBERRaAwGqQsrzLAyn5aoe4xfoiquqmKzszaQY",
  "key10": "45DDUD4MLFMW8qKpHxuNuCmFhYcAThZy48d8rytEohdCEwZm2Dat6JAGR6sroH7nC5xZUvWzR2imoKUySHQVpYLC",
  "key11": "4F263pNxLU92WpAeQTyry8QFETa771CBLX8DBzMZzBdoXofwrTD34THX8SsBZoA6oCjb8VvPe5MUk9SzyLvg3nht",
  "key12": "5eD7JoYCwLikoJZY2y1MjJJ5Ds7mBo9BMSgK3gwFVqwxZZMXL471E2KFtQ7nDk7Cfd6j89KfBA7FYqw1SSWyJQCC",
  "key13": "2KyDqdBTRCRUWM1kfwiwAEQNo77AbmZhPemrvN3N54EJ68di5KnZeqvZBPX8gTD8oD1ivGBcYTGhc3zZhBgpuJy4",
  "key14": "35uHQkXvKENF8bDYyGL3U1THczkmgj8zxAjZrBVBdBou9iCa5YjNpc2ctQaEETLTpT1vNt3EkzxUeyRWsyTN45K2",
  "key15": "5zNrmrYwx9Trrin5uf5mP1hpYjhGGiBKXBmwwCd7Y4RZrqxEVLf2Y69LdNjkmoNBBMNbwAHYHxLf2Dp1jJ14hKDR",
  "key16": "61xrBEDwg5d2ygvyFRsQ7LfqfYLGEDrRqoc2u7NmTgv1weDevSr7eFeCPk5FeM2XKGubVZj3t7b8zQGT4i4pwkZn",
  "key17": "3QH5ty7S4TwXhAnLJSvKP1nhzpcxV4vkFk6ufes96fituxW9rWoS6ZeDW8CSVLY4RA7y3aGdDZtfG8Dc4PDpAyLm",
  "key18": "554dKV91rWq7DErDmtUgQfpQUWoDXk6H1vWzLXFrVWgGpRV5Zhd9Qd3c8wAhKZSjRG4pv1P24pC5gtHC1e26y5v7",
  "key19": "5h51sZHfCXDDr3Bj34pVmt4Lttnw47H7hifptimDcSt2Ekj9BkWkmkTJeoniZSpMiDfXDJxdRth7xKEAqJNY6MLr",
  "key20": "2EMV3ewc1r4Px1F4eLxu6B72WqGnj9AoH94CwDpzaxbYFc4jCYPkVNnL8tsAE3Un7TWA45xaFXku5KxTUvp9BdUT",
  "key21": "3CTqwmtZRuKYxKBvP3onsGGEeu6BsSUt6RF6LYC27TvBoP3zGN5oMtD1dXJ6BNn5cyxiYV59376AYo17guZqrnGw",
  "key22": "3G5ZQqH9DhggJ3r7Hw7LfCiUDydqFQx7xJ4LaavXBcTdV3GyhUHzxrH9E53rMNmiPmQjjN2KGXqFihfcAYNuckeo",
  "key23": "2CYGBDf2UXSRa92dCcGRYqBKGyyT6AkP4pvCgJ14rzkqiaotoQyRf2cnafw9KktEQw9yr1a5fWW6zvDDC2EvsTui",
  "key24": "3oAk1JaViwoQ9K99VAMtVt9DE4AQCpFwCp11hHE5r8MdYptCG5Tts8Ziuqk3FZHdjqfwCAi8jCsqW8DkX9J31Deb",
  "key25": "5ut62J68PWmHzKDrsFiAZnKGREsGqaY12Bx98ANpbqGKDjiv5Gn7Fzmwv7NR6KQYDSakGiiSFsn3NpheJhmzSK3g",
  "key26": "DLscAxhco5YwJgsDBoZ2jYU33eXUPwNLabWrWhQrhjTd1Nf2uxVPtXY8JTWCbTDrBqF3r9GQFkpq4Vx9LMFHgjP",
  "key27": "gPWDPFPYQ2S3EhRk4tax3X2HwNLHustamxsrVXeZnXNvvPWPLxqL4zaMNNCTtxt1ur7M2ZDAeNmsHetgm5B5BZ3"
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
