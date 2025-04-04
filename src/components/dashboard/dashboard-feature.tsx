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
    "44VLdEfGTLum6LeBoKgq244AExte89AbfZYyWokavfYpPzrWk4a2qQrnQFMJ94L1btDs8Hei8ccbfBWCkHe6Zt89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CX6ybytgmGQbuzpJbC6uY6rU9BFL55pfdqvcHLuuSTMzLyHzKjmjtHyEder6m4gG6h5utzWDQxo7DrsDsdae1Bk",
  "key1": "4jG8JZ2D51jVSzJfstSPJzJv3S42YRccHkCLTmEYko3kAQsXb3P1L2M6u7stxFxg8u9FodxhcdEAfS3YJNCBPuMo",
  "key2": "2ndb395eoARFdkHnBJCrfr77mmR71XdNNeEJGtCGWDBJhXfdZ6jyMMBXtLHNTqnC3tjmrW8jXKkuEyWD8NqhdHc3",
  "key3": "2fZjBstWAppk6zkBubWDDT8fjHiRdie9drxiwLfhPDkch9uGjPKArFpP5YgSWiimBTey1VgbN8GgyWhem4DFhaed",
  "key4": "5YoGhN8gwHriWTKN1hui45XxQznYEve6ptAu2yydUnjCrcjUwKP5Rt4zCtFon5sigcR5fvKBaLyRrELyGkHSod9S",
  "key5": "WxCUMM8rdCCpWdk7yqUaPGX1nxC8XDs2YirwP5aENpUM7tSs1kiDfPDuQBUyVXQrW77GfhGHsyRA1zfCoA7LGGr",
  "key6": "24R6MQDUfvBUW5CHG1hwkjrNL7V92RogvhMMXoaWzDyHFkXLZcdQCCGtXyTHEqdbdCqQVFJqxYCuVVs5FDjj5pfR",
  "key7": "2mRq27FaDLnx64kthGGACiHUFtdATWcT7hQM5sBftMRgei3vhN5119zK4GerLNoyy8826oDULfPw9xtGBf37iQL9",
  "key8": "6677o1L6GHmCDtkMoSt2DEVxerKkZeCqqDNKxmJ5UvBLXkzdDmJvqNYun8RyXTzj4MY2gmh49FsxuvMMSjgMD8Yp",
  "key9": "3tmEYgEaSqoadcVdTDCRuWsus3Vo7DqQaFeRXjvyhMkhoBzC6zqr8zt6eh585etVsnD49pVnXqUiexNTBt2axwXg",
  "key10": "5pLdSCrgWH4vEWGDXYvNcNM1mhJ6Nh7678WTzdEnM942159ewCC4h3eHXJnuAVpaPpaAV3pqgNyjUtH88JMrH1i4",
  "key11": "5g61X1w6wFqtzx1MGuCDXroF1uCx5MUVsrZ24TWhBd6EnH4UjrSKyfnpGULRdGUQKX7Qqy3RJoKKJoGhhTsspK2N",
  "key12": "2oPMJFdVV9ciKxqGa62rWdKuNpoPuae8PtE5H3Rdgd23Gb5mKPeCeFr5R3qTezwfgCEQDLkviF5ZPwk8isgkazzR",
  "key13": "5w6hF8ERmJFcy3nuXqyRvHzEPYyErC9zQFWenDcU6BxxxacYBMCkcwpLDKB6YFFw8EZaf6w5UjtDp9qAZPzKTX6V",
  "key14": "5TYZXncmoAKnHYAgTiCjUEhd1hjaBpVe3zoyXWYwCE62HqitXK14RaR6yqZBUbKUpyvmgVABGKYQt6EC1yg92nZR",
  "key15": "4RTtVZeWtXre8YJgPnkN8PSfAHGVYbQPXiFvNsVgDHqmtaRiAvKbHmDTS6FuCWNDJH7PVDkMbAfACWrDFFfKXctA",
  "key16": "3s77di23BsLGBYNSzD3a4Gcjno8iafSrHPj6iJQZjkVwcSpHbVeVBQgYQZL5H7YSkoWMs3d3hgtPfqdydgpqSkEW",
  "key17": "3XfnDMPeMM8uvUfddERoZznZkDFccnqDjSXHFzVGfNAhmL2yT1YADsTNWQVm7MDRYsCkpuBPYVsHcRb2yBZFSh48",
  "key18": "5rDUTqDbKYsNwLhHGP7q7wbHzwgctPdKK96PugF2FP3P992FXyWbockXbxDpHYt6eHkvemyARDqCiRmVPJrA96Rn",
  "key19": "3Vp47QtNuvsY2m61UzhA1p3kr7ASqXV2gwT3dVAvV5NH6ihxZkenP8owSwK5P3PYW86D2Jpgybi1ThktBy995Mxv",
  "key20": "3csxLUZBR2PdsLSUSZhziHKcqDj3HhHeFHjvpyN57xvocaXM41RouV45z16bBxgHvT3kJknuxSMAcThKq3y3pmvx",
  "key21": "vQsXaqiKJ9Csodf88L9KVFzpMACy3tjPrVSyTBGXsKwhznByH7hS5jV5Radda5Vxfa9PYn1JhW7RgBSdUDK8tFx",
  "key22": "GmnuUHbAc8SzHuzC6tQCUVwzkhY4YFg39s8wJAv95zo5vF1BwTVVpEYFov193MHzzbTMAs1p59Chc3Gmr8g5VLs",
  "key23": "3H26KKqXjtnJTBiTK1SHicxWKvHwaAwzfJrYTTMZD47gwsMg3mYz5B2Xp5yY6WpwVAkpHMASkAXwnjb8FTakEPju",
  "key24": "XnkBZ47nqF1ojukK5iY3tqahko8717ipEcaQoDiqVXnQi3xsNQHRL6PedDW7LY4phir4BNBdhtjMXNE3VpsVHM5",
  "key25": "3aE9Fh2c4Z6rVgS6FjRGR7ZUaC4RJX4DSj7rog2D6pGoeiAArPCmdueyR7MExMAvAqSLn3WbuR4J88muFg5Z12y4",
  "key26": "4s7LuP8aJpju1eFKAqASwZProRaRMfxALpJWRjXkPFCBaJRotDMsZseuU6MPJ8ZJdoMTwiAX7Rw3UBuDcg6HcpwL",
  "key27": "2zDwXh5XMtELgsRF5J7zpDx9Vq7gea4VDUcSQHvMhQHMQh2aNnBvG6ohwgVZXSJDCBYCHe2VpSZHWpEVqUU4wNCz"
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
