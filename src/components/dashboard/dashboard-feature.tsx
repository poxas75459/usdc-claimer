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
    "5E6cSDyD441kCrB3MM5aMwfwcs8Edkyjn46s8qZvrugA4emaSpDkNM2BeW31zLytaxq82Dz6PU72MQLLsTnhdbA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rxR5n1Zm3QdgFSeoZ9yW4CdJi4eNkhVSbJMKRQHUbfZYDxU2fBNxxbTJTtPuXDPR1572bgrhqdSCLpyhCbMSFUq",
  "key1": "4H3cnp9ozWuKVEm77ksVA2gkHsCMnKSY4CLL1tVmYpTocXk9goynrc1zwgQVv1PLH6SHVeWY4eAg67uqfSwP78jy",
  "key2": "q83HUgjimbuiSLrxkUpjMYYvSRLxUekojCQrsUFxN93Kbvuzx9KFBSBVMUFaRbNQr49rVqrRzVs7aDu1VNssWoz",
  "key3": "jxKdysYssX2d3EswpCftoEFuGfxpnJQjB6fyNCR59RsnL8cgZ9t45dQUGW1tMvbSJGFsoeTjctx3jsBAgkKgib3",
  "key4": "2pthExWCmtK2WGrE3Bxf4qt1cLrenEKX4SATsE54L7apG9eqdm8HP2NjKbX2uM5UqkX8G2MZSzXFf4GYGStz9obR",
  "key5": "64TWpaCH1eXfK4DwrRGcBJXExRobZRnw3FtRLdioEaGEckvJatos5xb1AY8K3F7EET4QgXVrYfSQocb478z1uDgU",
  "key6": "4WJFJaoUAwa35u5zy2q9ra1XRLAVpLzEfsLqEw8CQLmweYmSxHaC4wTb7sSJoAy4uAe8qvZbT5UoLXJkFu3azLpE",
  "key7": "3PJN47vLTRqFkH6sejkUWVEjMuwCWH9Bq5CfggGbmNnftebrgXJNsYUGXXAnuwNSx3Rn5qAuCBo7E4Vg8MXCQSVQ",
  "key8": "3YtqRXTdC71ApLFLiU9Mdn1bnnuzUsYp7KUqQj1Lz34Us98MKThSssayVU2Mz2qJFWqvyaE2BnPDcgWCiZAvNZ7B",
  "key9": "5rbagmR9eijXppXj7fbPtby94DmCQcah3kanx4jNjh6pQzNM9SJJiwMa5y6SpxkrErzwJh6LVpMNCWu4yPrTeXcb",
  "key10": "5UdWoLWcNDnqmJNSHA8XpFiWYPZtAninRpAm1LJhdoBPVN9t32MCVPWveNiaw2waJ9G5W96xYFYazkse1YSwq7pQ",
  "key11": "66owNoef791VMbzxw6dwSpv5jYL4bY8sycJ3aMXYcW8cAvbWawL5BY5V7oUfG1rviK4YRNo3YciGEdtXpB1YxgrB",
  "key12": "2xM4ZkFFtJhZmFFT6kKsKkgPshPYZ683BV513DmdrPDbDSkRkdxQgYJiDHPMZA6ES9tEddAkDgPd85GpKmHYL6hd",
  "key13": "5SL2GFHwbP6gU7nDGLuKAJDW2fXF3Gs8xir5EcBX7CTMCg2YqzevoPzS6z9XbNNo3DmrjfEWR55r5MMZejT5dXqD",
  "key14": "51fiiXGyWUUXRTwiVqCPCKVe1LCZggWsNLr3vhfWA31ExhZ9mV4SBcQxNe4Ats27FJzCdMz2A79UN4nAuYmE8kFr",
  "key15": "4wU7RqDem8fnNPo7STYt3icBwbgNiiFbAovbJNo6TvHHEhVMifSKLTTzaKme9JR6Q5ApVJR7QDVzBgQ1a8ecP3jD",
  "key16": "wAQdYn8Vwv1HE1mJtA8Amk5hY51pRtWeGBV5GEE3SDKz2PXAwWHmjstSkbpRicb5Jt116zX9wGfaePT7FB4DegX",
  "key17": "5f95p7PZNRTT72o5YUh7vaH2tnVaEiD77W36UncNDxUQYzCPvgsSpZxiktw7GpuN1jruwdCoPE4rj42KCowNuyGJ",
  "key18": "5L4p3HhWANmcaVZfGjoi79WP9to1U3sBZo7S9iNus952FdoATsV9N7VDR3wMDb6iTTV1jGs5vPue9akrj3TYadAH",
  "key19": "38gjx85w3xcFeAJsEyPEjqJcoDD69BZvfwJSK2pmC96Y2L7UPFKhpdngSuqQUdbYdWzTzRvHJZdDnFS4J4dH2WT5",
  "key20": "4aYjpU8XDJopqHJ4NpAWbtM2tTwguJKm4qxQp9CEiDGHs8MhaZv31CjREiSgdbAtvCb1AkbUkH6Xf2LbjeBpTiqU",
  "key21": "3rfuKPZrZFvsJRQPk3ZXWW9nCceBxnU2v2VX1L3npnmCiYZoDfrKLv2VtHj5ZprzkejjpsExdFQNGT5bTAgPFE9p",
  "key22": "5wVv1Ujx2f3k6GvXx4rH4ojRBUX8FknP56F1P8EhsW91c6rtGFDC31v2aWYzdvLwypJVMBVXvVZh4kzPh3yFUGJ5",
  "key23": "42D1kbutEvoxZDZu4gPRJGXgAN97JkgqWFESdZpp5ZPheKJEUhYezw385TUMtMgiKUimW8XtiyfYKEFHZ6TZvg8R",
  "key24": "5nQWjLtqQx2FT7EPyBVvGotTtU37jUHLyMHSkDnFZyHTDyRELDdSCTwndcvArdLKNXZZVF9B9vJNw15cZiCg7pju",
  "key25": "2reEc3ipH8UM3EgWXuFJuatH1r18gkASf2LnJ8FrWVpyDuVd5BZDomaCCCqqrqVrWGTf6AXaDUdpAJf53vN9ekTH"
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
