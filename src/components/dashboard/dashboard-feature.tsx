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
    "2HBarK8HYxARmEHHFi4VbP2wtRWtsynBHU8CzxZgyDHMe1F7isME9muhX5oWtsmiABVAxXDABWxwbubfXFEhz7Jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2skWqcDYeVDK8rQons383urPXD1ZYvhQf5E3v13PzME4hbFK55x38CtubW6JMMUHBYviv5EwbnehwB4wNSGQwRkX",
  "key1": "4hBz5DoXzAzM78ZYLiFqNtnhaDZdGfdpYau42hNPVu8f1W3tDD1iKRZ9A9ZH7MXDg978yh5MhtCqk52u3rt5er6y",
  "key2": "2DaDaj7V79KXjBo3HyFyXoWoQrHP3GAQEDubELAxNq7Fa4V9Mz3m69AoJVkgXZWn66kQYJj6UgSE29BMjtA2FUMD",
  "key3": "jta9dCYumgteAA3f3bpe6DJ1tVFkS4pgKa6D46MXdbCReJP7R5C1bSxpAsa9SnATCfpFSi8aS4cX2tyMVANQJWH",
  "key4": "3PoaBPvEHe6xcffi7XcJ2tRXWaarvdjvTktRzyMGoZoUj1kdoAENX4ZuvPxjpjoNvzeSEFH3dNxnWbU6AXNXsxiU",
  "key5": "4CNy5UxdpDgZ8H8ebV6MWtAFNfxfEpGWA2dgLEjeEPSwisCLYNFvcu8ftCq9W7BC5ZWXYjMCahi571XQGWvLJYDh",
  "key6": "471J1PZk7xnme8mno72GXvhLCEytQEZrLsLU83maxucuD9U7ZqwsJFG3tD87G3hvVG73HGYbX4PRFkE8uz1tpLgw",
  "key7": "2BUrzZzyysJaeSYJYJaKMrfYuKFj1bujDFNXpjSTsBj9Q3kWu67sQAkutbdeY4FjPjA9xc6eo1jL2QgQ6JZURfpR",
  "key8": "2vnz7HbTuEV1Fg4darftSmNGkjHGMaAqp7CDQ3qBbnshVkNVSPNSvA3UAxNRries6sLcz5odLEHfHzMZJm156XDH",
  "key9": "dgKE373z6HwEC3h7qLNDmcsUDC3Ty4oyqDMgrZwQE7nEWC8Muuzv7uL1v2Hb7eKRsy9fDYxzLyZnSsPyWQGSwfW",
  "key10": "NQii9nunr2T9QCKt9ayJEtSSgbi8n8i3K8J9b4PkZHKWNsMZgu4i3BkWj5zQmvjxa25TDhUmyFpX34wJV1pWttr",
  "key11": "4ZaNeud4C2whpFri8RbN4WWravCvrbMv5iyndboXreXK5yfy5sBY8hsKp7iu3fxTFToSU6VYpqT15p3d82fzAAvY",
  "key12": "2Jqj4zpxGuRb2H8UL46LeE87yhmJ95Q36CpuLSPfheRC547aUmr9komzyRvpJS9UhVcTS6ks6TaYghhDxeA82H3a",
  "key13": "3WLuz3B3LFy44e8hvBopKsjevZUL2fr7PSE6qWVjNud4VvVemW4BJRT8SK7q95GcE3v8CZNSJf2Mqw1dQfeKkjoL",
  "key14": "4XxYq876SiWQwmm7mGmE83bkTF6e7iae5txdJvAc23o53rgBV7oYpzwLegN4PQBULANJrN2YEEA6oQgNodhiEWnL",
  "key15": "2PZJZzJsn4jLnJSmdHcDKiBXZmYhauWjQ85pEqMidq5TzUBr1HVxXDksRrvuuyFK1pLndbZ29SLksNxsCGhmhaJr",
  "key16": "2VKGEGMe6DY8y5djLJLdhkqcGtmVtqStaRJBvM273XB4ZE3p6p9r9jBqdnXTQ2xBr7irxQgMXA52QLrKBhXXvXoZ",
  "key17": "56NdWspXM3NqznspxMv8Vgg5AvsjWmDmg4TyW3dQcBZjBzznXsBaKEnXCoVNQMQpXCiLfFbrDbbecnJSjuAMTyeC",
  "key18": "ojtC9q8pLsV59ea747ZY49yjXdnq594z781CMuPmEDAmtKMAahefn5cWeo52Tyi3EuWPCfziDEEL9BxjWv6q2yf",
  "key19": "3qcx6VdEcz5ub4HXUUtXNQttxjew8cQLL64iL2rqq6sB5x2FHSux6sHGdYbTXb3vtgSdZvmEqRtNhEYvMhRTxBRq",
  "key20": "2s8WiWgov7V77JLDVmVoD42u6PphX5NWTDGM9tsvk6yjg7S9hydTtFDcXdkc1DarRLStkpt9V4XCbyDPtAJnBHZX",
  "key21": "3eU7mPjPj5AWint8fSM4arM3gVpQPVZQtetqhkDTLMpsfU7E6ufgYg5EUTrGXVGyQCm64pFShscnoiSwerVaNBK4",
  "key22": "2s72Ajhb9Vx2UfBwX7FcpNiDE7Et7P3JQdwCDAPyKkaUY7JKAc91dZDvBgDo8Le4AU6pxwX4M3nW2w696cHUavYQ",
  "key23": "2XpCSxHEF445bvuLNDUz5FMeFFjoA1CnwbVb5v3vZMG7VX6er3ezpmhCML5bVm3KFwYPbHQubqZp8EQKSHAR9kW1",
  "key24": "8KMqUwmXcyo16viYd4Y9jTjQsWhzuUGPg9TM6mVFeU5xf6YwLFKxaGSJ1oB1FayynXH3vkok92Ec4zWn7nBG54L",
  "key25": "4dySz5qzvxURHQKVn54P37c2QNSNnd1uPGbySLjZc1cxWUtEN4pD7uimayWLmhcQgZYoHKACK9yqEWjYdAo6mcni",
  "key26": "4PypKNcyh5mnhMNyTM9DPwMnwAu3Dp4o5aLfDuKGf43fteXmuJK9nbp4FSPPtgMwWGWJJmw9eYGH8CaRF6hVNLyR",
  "key27": "to7ikc1CFBDJfhQXq3ERiEvQYWzGSHuVQYNoJvVybNiFtRH1MwFBV3hefSVVHotcHUMkP8oiFKAP8ZASJafj9oX",
  "key28": "V5p2b7DUogviEcyyv3KbEhaz7LBwCeYGtWYkxKTLuK6MWuKjLRJt9A6kvt3JmkCKmcHJfbFWPm3BNpxcZ5p7qDX",
  "key29": "3BH3QCcxbwb26V1sgDoX1GZVwmit53PTo3F6pwGREZFJ3rrN9pKCnmAThnikec83BcE2aCTgJdU5eTNJWwEN43d5"
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
