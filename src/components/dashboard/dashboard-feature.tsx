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
    "62CxeLiTK2REkaQSFqwZK1KELGbTWyyk5gFAWCgst3AKkeEvEG2xf6cm2mT23PNciZoRRro5iSJVq4e7FyEPegHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32anETmra1QHi1bwHUPvyBMVXHzxGe1SQXJqZrNA2k6n9ThAW2gQPVpAQ8yZ3DnjtWoyUqMGF7n4RaGwXQ2x14nb",
  "key1": "z4xUDb4n4dGB6dwrv5b4zubxWRqrkRpKr6cZb9n3YyVk4vsSFUsBMdfQsvZfuCoBF58Qu7nRuCqWKJFanTJeeDc",
  "key2": "3k4Uto7qcrUFVPj5VzmMVyF91qGjDzEg18JRY48CzBMxsPPAKpbvEVSjUBrbeCzGbPNYCLcg9Sq8HQzKDkFqBMLv",
  "key3": "4njyNpWyKMoH2iweW8xdYyo5jhzb3daRUwLg6jqiiDHGgVJrm2yk9X3xtax5Ay9PcE1Y9DS2GunsQQ2P2pZAW3M6",
  "key4": "2bTPvTisWtE3gU94okwyjoMh6iXKh62KHHFbqHeVxFjVuWzcopNLcTkU1C4drUNLhViFHrTyQwfvrPeA534kBxZF",
  "key5": "34wwAFMVEgmaEVcBYXqgfeBbVJ5o5dRh8Ng9pnutmq15nspWmFddt77PtdtCKSrWcY1nfjyY5GBF1NqvYJsVvGrA",
  "key6": "43Re4KmHp7N7E6mt7tfVroR2jV9yq1MfuKviNzrB1LTp1EWGEJdsoy1CJeuphbVEYH1htTGx3GS2vZbRcrTtqftE",
  "key7": "3tmQtBpjuL3H52zu1upa1aqaAPyk9xYRkgfvr5KtLyAUoUdPqQTKkbPGK1ydpxYjR8AmoouL2V19M4UGtvoZ3y8J",
  "key8": "2XFR7K5h1Hce1HfLoBHiSFik6ihfgRV5NAncSRU9KbyME1SptPeWrFZ5jPT3XKMTZHHGsKmuyrPQdxGeoLBqtPp8",
  "key9": "2ijaXeszgjUjb2TMe3gKpPmRL8wfARekf6mpDnTnvXivz86pnyMpbBLzNsbG3U4gkSk8xDUJRobGRj6FTdKa4sUu",
  "key10": "fFzNa8FFXi796CdwPLbZWhrFKpoeX2aexh2KXJhMDp1QVqS1keKm37JMT19f7281zg1pkigPzQAFVqer3pmNfEu",
  "key11": "JfjAzAKdTPcMdCJwEBY4KRQVRbJYsMkN9YfD1gnKyrysMsjLaRrpxHUs6Q3yWiE6NJrGDLpkiHMbVnLcT5TXh3D",
  "key12": "3Zq8AYHGHK14qLKJ5xXz8FQVZKZPgNtEkjK72Qtwxe3v3qLos49HhL32L3cVKsQgpiXGUEEkT7J5R66U2i69Vbna",
  "key13": "2XhcSN4Gu1e1vRuMTpBgAzxyr5GKbpS1zwzYaeRbznDfGQAj297Un3sXV3ZirJEoXPbkhWBvRF9X6zyShN25sVf",
  "key14": "g7cQV1wcMqmk11KAcDr9ukv8WyoozVcT61ZMjwWS4LQnqoHKR7rqrgzC3gjQfWYsWon4ipVXrqyRXGSpdWKnuVm",
  "key15": "5fXtx8pJb1sJkbdyGCMSSGa9SaJSP961cWBwsRMam7v964uWAa9PAfbAZ7pWq9y2dtbjrJnM7kioK5XnqzPaqAJS",
  "key16": "2WgdRvgV61jRTcusqrvHDzpzyB9T443m4qkJbS5B3nvF3rr5Nd5tXbVkevreWaZ31oaYo7uZHFCyAsyQivguv8ed",
  "key17": "4V9DCnWuw3jGmn13Ai1YrVwhy1AQo2ye3WjDcoyC42zTGt65JYF4HiyGuSGi1xVhNdj2QMx5LQKphwaBuhcXCc88",
  "key18": "2PZCwZFzrkBk4jFYYXp8AukcTfDMmEy7yK7XrFPv2e6y6W3n6NSTK1ZPm7mPpzwJVtGMwXft4fUHNVCcjB13hSVE",
  "key19": "5S7BpJekChi4PBvLk4nM73qAYg2YYYyZ6NanABowSSkTNEEVnQzwWynj51Hjg34Z4pqb2TiQxQX3ZUD71ZhFNcvZ",
  "key20": "bPbRALdxJ7xXMNwKE8rRPoJzzaz962fQ2RcgL1zxuwaujx4Uo4zNRLSfVbf44axdGNYKSEN2ZRxsjCCAfyAj1De",
  "key21": "2qustMrvoFad9UrdfTYipVoLBedeuBWZAXiiDd6mihYziqw99B6r5hkBv5TcWWCY9RSSrZjVhepkkzf2kzViEpsZ",
  "key22": "5UmnbKoiTytSggcu699GQvSMBSeANVzJ1eNHPeTi4pbMUNeUGDz3oH3WroWmwMJoif2dwzAo1XwZGV61GhM7WGYn",
  "key23": "2DXRqBwF4QD3re5Q8Fv81pSGcX8b5Rwwe2LcYEUnoR7kFvFL9tpwv4yzomtKpVrSkNzm3ECVKJa1Stsr6KFgLTA1",
  "key24": "4HtDJJfdDKdoUFMTW3zJYy5mvCkSN9YLVXe6nZfXEe8fcko7gFmxCA2gyiULVX57mhikTdVuBu48Ybgf7pTg3r4x",
  "key25": "5yndwjE32oCve3623d32dNiQW9RBixmyCZsDrZggvK54YDHV85odbfPwTSv2tLXZJ19Hvm7ow9xoCqrYqYYkD71",
  "key26": "5Rtrrp2FNejS8ZqEnq4yLkzE9y9WHxWZLpxK7PmqQemRx15agxcXuZo9BhKVjQ3tYM4eGnvkBrFznrLAwES6HEgG",
  "key27": "4WxmzhnrxrnpAVpqTg7wyxPWrUFTVT3v9tEds4bY8eq9poMLipWzC4PNWbe1T7CHNKfET8K7Z999tsQgNbrqqoS6",
  "key28": "W82voRtr3tHrEdscnvYB4mKkZkfmN38A8prVtsdDKjjE2eo5LYAKU2bK9AEu1XRL1FSzxhFQ68xzAKAAGE2WX2n",
  "key29": "3GDsVp1jTQKsUBRJu2Uv9B2M76S2q3cWZ5T5JnnoW5dQvBednDPzQXfJW4qPwrwFpjbcJKXDy2GJShGKssB7uZrx",
  "key30": "3xJzYEdKbPfWspgLM3KQoNDfnR4XtEqVvugqTt5vLkGXNVxsmcQampnFgUXoqFQV3HF7smUg8ZJadpeDTqTQPbP3",
  "key31": "29jfm48hWSDRBE4HUFJqvWtLLW7BG8PKe8TYanySFyAegtQZEtpeR6fbL2cTGX1E9XmGPXme9x1xfqNWo3BNpsjB",
  "key32": "57VPkubm7zQUrjr4pMYBfyS9vRWbtn7tKt2YRdNzoXbSSGAca5U3ayLfbrVTsSVki6YXUX4SL8WPirEmPkFpJgbf",
  "key33": "2W8aoq9Uwv5kQe287WvrqfwAvg3Fm3EbzqasKsBSPzkctCrjXc1ZSoD5SPS7dHSNAag35KrJqjKo1eykDenbqNhj",
  "key34": "3hV4i2FCvArtuQxxXREBuZFnLBrNFYZykDomELqQftrPV5GFY4fiK2MBLQLteZm18GUumcr5wN84oJGKf45PsZqX",
  "key35": "4TLn1B2JKLKT5ByArg97wNUSDVwCHtpvf71zjhyqQNjC2fq3sKCy3NC4ctixymCwz6k2TbZEiFJPjaxWL1Q3RvC3",
  "key36": "G8rPXrCT5yLDimdvktYmGoCmHk6ygmTqwzfqc7Dp1gwBZqikABNzwEkh6FTz3jc9wb3heZmupgy9urx3cYeXEtW",
  "key37": "qW8EmLq3LY77d6pjM5RsQ3vzvXd33aEBnkmWrFvU5hUfyGsh1UmkQapAU6cy2ojMxdAmuu7bPDeyrmjjre86XFm"
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
