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
    "41A6HgvAsCkqdHj9wmoptReW2VcTza7SCyAEreo4daRjKHqqG9h9GtwZzt1DiMqNYCqvryapEep6VUCQDuvZCTJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sqoLUfuVyuTX1zgW1oEupNxWYhURNKjk72Yz1ngg4fHtY59uqFQuyrEsMLLC1mdSgV4HACGPAsCM2baNXteocmA",
  "key1": "4hcBQEophaT1RXpYv7yyRG1BYnRCRMBpMS2r3B1kVhUiCXEKexkwepbjSYANho5pj4fxk4471uS3x5NFmGM7aEcN",
  "key2": "5bD7mAoFFZB3gYb52uQbxkhddf19weboMhHJVQXUgSzAwDWY64vF6CUxYypGfUaibsxGPDbhMeFuDur2Ub3CfUpz",
  "key3": "4VEzfH4L4mzAEcxBDuyyZqUMjB474WC7ppP41RLba1E7RPKPYRS7RHjojgjp2PtkAPDZ9SzvWDHW47tShN5Wuy1W",
  "key4": "2JwW5MVFcUthmroAHG288PNJ9gxij4qvqwbbaHa1TQWc3gRqS1ZYibwkJXYNmC38CsJkSX6KqMUxPZuhK52KGWRj",
  "key5": "45cSCo1QhLmHpxFm3abe3iMhkpymHWcJGTpejAmi8zc7fQ2Ja6L2ZkRA37Gh9CEsFoSqt9bKkXMHGwqx1aMczWAJ",
  "key6": "4vXtG253TVo8EwCEwPZVb8EX8EvzKmvMgg8vQh6MHVwqUezLESL4Y4DeLVJDQDfEomThTtXJxuMQiAwHqq6m7q2e",
  "key7": "5ke8SDhRSHzcKmW2bSrewsGfQ6tHCLcdP2P5y7StVDWLMCpTgVezviH8xacPtHsvvkvCv4tnCDdeJK6tCpbx6NXs",
  "key8": "5yb3H85MgW7w1upRuozi1vaMhfMujSrghNa8Vw4Ao8Pr1g3fYed9ZrrRndwerbHVBN4vNoeJJmPRnaXWsc814S51",
  "key9": "4k5CPhfzX3N9pwaAmfrNJyHx6ycoBChxZrmEViKDpcvkMGnCaA5srgVPuRUFTKrnr9L5yhAuriP4uGDPBoU2iryR",
  "key10": "8a2BZupvgzmMpN7Gd95padskfFjcgaaNa4ip4yyJoeVvpANXGdrkanv5Nts9vtTq2rmfu6LWe1cw5h8HWfRab6h",
  "key11": "Wu9F7yG54Bf6u14RottS2sYuixsA9K5BECX9Ba1Uw6GavTdgwnzfnrQLxneHD11DXtVgEXDtb2oUzqjG8AarUHp",
  "key12": "3rs87kvqgDVzMvHdHTyUm5oPaZYaXUUDHKvzhJtLkm7VqZC7QZvgNKVbXcwdZNQoQZubV9JsiaqyP9XkC1pvBkhv",
  "key13": "FWn3B6vQTRifcsm41Lenp1vLCfYSsE38H6z49XcrMGG91fFyBmFRhFtybeY3wiMaXesmUc2NFotYrbUXqJ3ZeRK",
  "key14": "4m5mKHBiEDFuvZEivLFb3TwwLRsTQZbyA81tidkg2uN7tyN3oyXk1CSLvjzM2RLr7P2vS83D6nS9nneqDbJ2r1jk",
  "key15": "5p23HQh8ZwfCj7FFuXwqwtoApPDzV2xTiXLRe8oBejwtJZR2oCFDwTEVHgV9yszzmCSfuRWSAPH8qXgC8XWt7s3k",
  "key16": "4XjjSDe5yz6xPRMPc1h17damJWHbTPGrU6J5hWi3DCrUze2FEzxua6JBQMgTNp1Vdd996axFJq8THz5vQLDoCAAN",
  "key17": "2ksPJt7Xev62xoyA9KHvHifXuk4bjDZ8B3GVjWpvfCgzj8dPAtdat6pUgVBLS3vNUmAg5Dew6WLYEu6YCAJXhSat",
  "key18": "34hMM2ygnPnR5x311Qkmz9cc85uomTbPyfDp6jEDyNYXB1B3tvVsbYakcsaWsCTLUmdpQNBzP2CPxs8KcaeD7Mbr",
  "key19": "2e7JsbRQUptReBEmw8JFGDqibgh6HGpmQqhNQtu21pbp5mzw82e1sXhdcegnf52j9Puy8zExWEimKNd432XjYzuR",
  "key20": "HKuB2skyN6jRye942uJsTjiWH73Au2suMKcefsdhhfhfrDWpMukTTvArR1Af1fJWMJTJ6vR3afMCr7igPgwj34S",
  "key21": "2wHTx6jra6hyQyxGm4vrLjz5XmjxTNUWnUmNpcMA9KqB5cnwKcHq4nNEhahPs1BHUT7XyiUusfNxZdA8ENGbLMXZ",
  "key22": "2r2SbWRF9q155nTEn8nNdyyEvA6RbAFc88VpQx194ZrcgdbDGLUsEHHqmiknibrSv6cxYmYW3sVF9EgxkQ7XZzFG",
  "key23": "41jemzGwi2Cd8PnpPr975Y9CJ5KvQkKy8jbz6hynoEjrFZpnhf4Zqth2dorUH6NG15DtnnATdW64SRGpitWbDmpA",
  "key24": "56tqAWuwhAMPqhxPX2pNaBSQuqQ7HvwdoiWhxxAfwQp3128S1iptKbABCYnPtEBYKzjEHmD1Ddxu2FE8AWTwGNeA",
  "key25": "3hssvQSa6sBndmCyuNafJAFVbxrv42shJHBtNVxWxgT9emVHZBvjrUcA6qXqoonyqkVxJqFDQPMFmfKRhRt4LNAG",
  "key26": "3bHdfc6gPBUhPrLWUWfzJXPjM5uEzMR2D3SEQCUTc8u7ht7eKXUvg5NunfcUhrnUyJ2bsBFCxstLhNRaxKf5r4q7",
  "key27": "3DcFttg4gYFD9BzRnxMjX6UTMQaLq9jQe1mfxHsE6S1ncqtzTnBbBdMa6UKvKa4n96yfhKGsKqqu84rkm9FPtjtM",
  "key28": "4vuvh2DX31kHxmCuHY556L5igEMY4dUpwkBnk8gsLENfVPTsWyujvPMPWsbXEvmTEqfQxcMVttNgTQ2EzcKRfKWX",
  "key29": "3BQpHUzYxTKzfbwF6fDuaz5tZAyd67y6KSvxjFTgRn8hb7esq7Gj9XAt1ArEg4tFwbcea93b7Jv4TWsjDxgJQU2P",
  "key30": "4TFV7eRQFMaPust26Tf4BvuF9Ln9sLDbjYxo6oZS2jxAnE3XPnLGjJjpEu5GjChposAPGa8d8ovLd2HZRDoGvChv",
  "key31": "BDsXur5KqG42oqPf5ceLsGfZBqsnbkFi8cdW326zoZLPVVdxt8LoDhLmsJn7Mvn4gdvsT6YGtdQnL26PVe1FBpU",
  "key32": "4fRu9Ykb3ej3Z8xTA5gP3ygLjsJmBVJ2t8zGnUgsXiebf9E1pGRwHBWbBTsSKLQ71fSVBBpQwnaeGB7gRAfzMaVQ",
  "key33": "2dd2wSHGTkzvZihnAjr81kzJwae2e7JYzoxYnbyAGjoU7avnXaYS3aN5KqUaj4jhEcfx6Wv2gMoZ7J1k2Ud4rchL",
  "key34": "3SxfXrzobHtvntnLo1MsoL77zVaHxTrawjTHp7USxceb6MihUDRh8QPwHnXoaxzapSiHPeXiQN53pJp1yajWBwwj"
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
