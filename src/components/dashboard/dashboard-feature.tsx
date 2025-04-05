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
    "5DhxWDzCRasNL6iuwsiA7kRtBAD7iRB6WPe4Z34AZzRqH14mhfP5Z7VCyHHtLzB7rd8dmeh1ZkcBHjK1sbKwBsFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n1ZguSY1GWL71hqU7SGa6gkUP1y2b5CRMTY8Mvf68tgTucRwUKcvRE1dBxGyrgnVmUVvoULkY8NJF7BNFWMEyTM",
  "key1": "k49yu5AW3iLDgY36Ce3Z1t6e5Rj4rmDjX4unnVbw4kddXHuh5kpXw1vU5F7YsLbPiW8w5NCCWRzQs9Xsgw56Pvp",
  "key2": "43QMbcn7Ln8KDGB3ACQivtmGss2ewqU42gHg5ahV8w8jbsWsRm1Bqww2PyfBqHmjfB2PNfBKnRrTrpP1QnjK8x6K",
  "key3": "2NcpDuiXJL34GzomD5mmdFu5h98fNyt6Z8CxCurUs6tUGV5jpcAr5sANdgtdiXn55xeHfz1RVTKnpjAmUebM1JEr",
  "key4": "4pw7a7tA11e6nd4YJjXhZdc7KeSo3yfK2gjULpcsCZbZtiQyoYnz2H2FYKEPK5BWmpc3KTC2vFsjDA291r6mkQZR",
  "key5": "4D95kzDnZEZgwutP62ZqpWKdU5c8qeWwEMejXfaC6RhKyxwaP4YAX9634VGTSh9feCbJdQMG74mfEQhnuZU3T1zs",
  "key6": "2fspAiHTtwDh1gt4QebCfZgJMnkxkLikgv9hsqibUo9amQLZKPdX5KnxVcdtCe8zYiLSBzCbVJNvkUQCxwMgHfeN",
  "key7": "442R9bB5y1Sw65NovH5jT1dkZUqoRLWft4Ksuuoq5KoNMJujAdVBJT1zskFUDVKuGqUsassdo14b5uixdRebi89a",
  "key8": "SmBi7wD3qmHcGDijvpV5n3YWkMvj2DprtKZd7icak9kBcbkXG7YxYJ6LuL17H1QcWKuiBT4n1Co5fjeAmF1tutM",
  "key9": "XcBervQ9jLEo2HeqeNWM9n9KzBFrf7NvUZxcn7ueiCwGqL81Shb2apbvQ82x7Uqg4Bp5ChvcbK5oTZrW8Jqqij7",
  "key10": "2NktCi6MLksorgwtAuKGeJ1zEYjq3ZgqXpNo9RZWBFqP827ukMybsdu6fqVDnGJyt3AfnLR3c6KMKGzSpURj69yP",
  "key11": "3Cx5PzM7Lop4VHFnp7BGoxzT3BMGDXDgLkA68hCdAvs29YGCESXwU5ktFqw5WgmbN1ZUWpZtkYN9zE1NV5wsiZJq",
  "key12": "3HpNCXHTAJLBgrLfPNbWitQxRdD9dyvZ6jWJygYJ9mLeVvkXnqMeApNpwqfgAzgYTXM4EjPnHKZpVby452AKBj3y",
  "key13": "2rCDmiRC9XjSmLw9seqMmHCefijBpQHobKU4ksDeoCrP6sZhCbCaRgJCE2CD5zTzSWGy7NJx26c7jZB4P6misUfK",
  "key14": "346nxj4BkFDHSx7yWtLyMRUXdQWrZFcx3YanYTbBppgZy6raPYeRoVxBZPkaBpNkP1Be1iCWZ2Dwg7vMYownHLEJ",
  "key15": "2YNbeic8BNPzCb1ztQTsUHyWqLAKzwjGyzmcaaPyuGDRdD8CXYhufbTerRd2xVPcNHLaLTsyEecYxuevia8GZH8j",
  "key16": "5k9Vya2SS2Bm3zzp9QjARcEepwULgSn6g5y3ULhgdQHhCpcfAJbZkqoZSSPti7dp4qd8rLWF2wB5asVHrTJpCRuJ",
  "key17": "4RHjautaGLZK1RrN1Bj69XZXM6PGHRKGjz1PJL3ePyrFn8E9fXL2QKeCwUGMk6jxDeLjBazwjLRn3MyAmAjQNhpm",
  "key18": "3Gg8uFqdDnzNoRX8HpiebN6D3cFF8xePUmQN1YHKqr3yu326bepmFMbcgQzWAneFJKwa563kZe31omAR795oqedP",
  "key19": "3zTaHny9qHGWMATeAQ9AqWVQAXLF5fZmuwwVNkBi8p6uq2PHgQ1iwPDUqt1jhSsJTTcr8o1VHVNSco5okTqz6vLg",
  "key20": "2SgB6ckVaE1phya8bdAGpRNcoHPQisyg8GeXHRwShyfURfWnsTWn9WZ9NRSiAyLnPAwyEYjtTxB72KxgDEKQwuEM",
  "key21": "5YfKNQDPUL9sdmDhQTkqXNVPoBcmVhRwGqmYxny4JnjRgB8WQFANvCmwARKgUfNfXzag26bFAFgnL51Vy5EzWBGi",
  "key22": "TGCL7mij7dVSNDti23ZQfKBL7FWfW9ZRMn18e5BwRskisngiaGAjRWBWsZmHrgtu55rkqj5WMCrDYWNaFovsShT",
  "key23": "JgHdQv44whY585sJQ1NBcYKVKvTnpJ2GT1ALorYPYVVKaPPbHjBRNS4CCKjaWAC4EBz9jzNux22WSR5YFseTz7d",
  "key24": "4Xdcb7QFmrJq747fXHGwfV8s5FAyweirSm9s5ZZdxG21pSFFyXw64ct6LruypeRSJhCjJJh5KzPtYTZtrbn2tc6",
  "key25": "2s9G1Byt9Pi2h4wct7Eza7FJHhYcswESbf7SRTrVoFHysUS93kco5LeNakL1XLMBSvJRePBRdHRFMd7bfME68XVF",
  "key26": "5KPHRKedBgmRnzqxkZjxPrmfhrhMStE37xY3hUCD3biqNugrM7p9cX3YFhH11NnZSbo2zwBiTL3XskScnq93NTnw",
  "key27": "2wHeuRLmB7qpSJFWPV2dmsKifYX45mSeq9rZ2F73hZrUUvFEiJDxPvLvTmSyK4b1RkXrQ5PEYqrj6g5bNsPELKaR",
  "key28": "Qfcz3H4315m96iSFF5VsKAy7tZ7uiBknMboq8E4B4WV9u8gATJSmbWX6mWfsBjqrSyDdi2HTQLhKZfBoy4x1pUA",
  "key29": "57otQHDFWo6cTXHLzFibQLpw8z7GwH9bh7CewaKBHPDvDaEyx3LUrYcLHGdbzEToFNfBqj8XAWVsYcs1CNQcYCQC",
  "key30": "4hFq28anSH3s7AuJnixfBBYAYVe5u8rhgjQon4jQf3bdJvCW3X8KdmtTnCUXwcfq8EqKtEjFCW4djZzRqi72FjKo",
  "key31": "Xc7P17mM8qBkFpWzYPrn7T6HFbfeg7u5p3DY3MZVxNP6Dz7vnZX4DjQCtsSHSoVBwWaNd6JcoufqzeHsujQ8aDa",
  "key32": "CdypfHFLcWZmnJPC4m41VWomNpyiDiKduicvkmJN7gHZeHq4nuobV2djuusAQP3J6BRVPJjwR4SNXewSc3bKBnK",
  "key33": "D8YYjNHuzJgsdM2rKYBLk2PPWDJd4ocHWm6KoY9QBtyLX5LdMetwhT94xochP4B7ZKqen47PPY4MJbBKZPAtaGA"
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
