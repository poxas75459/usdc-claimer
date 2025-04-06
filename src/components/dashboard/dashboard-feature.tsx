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
    "5gVpNNZuiCFHz86LMwLv7QbyHG5f7WHM8PYzGU32bSWi8gxCtHSrcJcvCLHdZUn3Uaw8kETAayWjTqegPwbpBqwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J22QHtxz1kAaRgJ6pEwsiQWgqqybe8c4NxJ5PigymYRGrGLJ4pWf2bdPcsK9BUBSLR2X8poo5F6xCbqo4Lywwne",
  "key1": "qGrbT9BQXddrKDLbseGGWewQP8GFezPFPRfqjgLkpu4f7CSBQG6QTSRkkpeTuvYFj4uqmT7wpJb8haipTWLqdpv",
  "key2": "LT2eAUNaM4BRbB88v7cgxBCZAY9yxhP2LyZxyWqu3Aio6JyUgjRcdcrGL5BabhxFQ1R2FFysP1Mj4DLGRWbqtEK",
  "key3": "YshLpq14AcAKGPKdU2A3QHQ4rD6GMGhbTB4qHWksU9pBpfsRUZNCyvhYDuwT8sb3Aj27Qc8JZ3Wwa4ZS2SpGbkZ",
  "key4": "652WUAf1cbxt3RwgmgZUyt7cXp1QrCHrzgQm7h5LD2UetjjiW9pER7aP2JsuDpZdNjDjSRuQqAKTYmtiXwYERe2G",
  "key5": "67X7jzseEaDwCkgZWHYxiHZbhHUpKpe5ziSwPQwAG1XWj3gdjQFfCchdtAkE2pf6iXd4HL6ix86JU4nPHjbrNVHz",
  "key6": "5nZEuT32t1avm2wg62fvrM5FDp1pQQLX6MF28wuRy3nmMiMbftLgkt3H3DwMJZZFqt12nLu3ZA26TH9BBfVaDwmV",
  "key7": "2mrmcAWzfUVh6ogtYQB4RdfuFNXYTpZ7hiwyBgpivUa9UXNRdaNT2iRXXKEXz2yvzFkaodFdpPBrTy3njkCHLraG",
  "key8": "3RACkPCbzehtETvsPqgYQt2Re5fVipYU16jH65Kc9X4zooGzeihE4p8Grzcs6YqDfroY6orAXNTFETPPaMHrXFVG",
  "key9": "2V4aFp6YvEJ4yLXckhiG5sxmhKHgw1YAMdXQfkDdu56J3aGkSeFdxsNxvR52eTcFigqhp3TURawzukbfxFZoJgPd",
  "key10": "4p7mXjr6UshFF24CYEwiNUrwWz7v22QtimwCc4BjCKLR2XBLHSmPwk6iBASJoC6EfJFFdWYCmTX1CZvvU6WSpuvc",
  "key11": "2UkaJNmfWuzzxYFoDC6QPdCHi2erAgXYs3zE82TNEKxmArACty4qzK15VETP8RmSDupq82Uok9BpaP5x95hT8SyT",
  "key12": "Q4oFaru55b58NyN6ukzsgmE9G4kHTusYDrwZd2M451Qp89WnsfuauSrggXgw3fY9p15BB5bUeyQuGZTkJ872pP8",
  "key13": "2BHPN6grVqnifWfD1Yp9sLit3umzunuLdBqXNJ8c3LYwhF7NjZC8AQph2tc8DAmtFuxtMfQpBDVBiChfi8JLBcin",
  "key14": "3fZ4VsEJG53tigQ9x5dMBnKCfrKPwAytdAFu4yKAJQHWzjwtSKaMcnhFXCu5HmDmoYj92cxR9qkqBoZsXtz9by9c",
  "key15": "58Sj4WeLQb93HTDEdeKkNXhvrAsYNHE8Shzt1YLpTCVE6Htah4yDLiGenTeviBbQFbGgTxRvtMiu5fzKPCaS9fv4",
  "key16": "58CDdRkyyNn3WmZQEpwkwd44M4xdKLGQf9skZHhzyZ99hXLawweR5know89rZziefHBLFSvFoj33XhLL8uTuRL9w",
  "key17": "XitXjWuXE6X4sZmvwmYvGqffMTr5iRKNQSvz5MGMyd3n3CfyeKgVQyHZ8fdZRARj6vLL1CMVp39cf9BreTupCSh",
  "key18": "5yi57TWype9gZNZ5Zhhj9fRSaQTcLcgKFNSFd3t9xtpSNVme6i5ZjsnpWj9VLLE6ufLJde5EUnJaHWCphoKVNEk9",
  "key19": "4JQHSBFisaLk3Yyogy5uihqNKEfraEEWMKhEuRccHD1wxFbxJVWSNhsb4v4WKME32Gn2PMBCnHFX7jNHAP8nZPnR",
  "key20": "3X1Jx2vVFsD3EhpWkQYmgBraNeihjr28ks2EtBBUyNydmxDMmu3KNvc65tYpZojSZG6wJCv9CaWmFBZJCYhMZEWs",
  "key21": "28EqWrKE4G3pmiPmGDGbdF26iEhKscKoWP95Z6tgnQN63oDZ7byPTwUS7Kb1bVZqWE5PvSYuCW6FhxGo98qvT6Ub",
  "key22": "5rtRiswENcbpnidxWGHz5ABFtuUVqsz979iR41cBDy5Ve7UEsdqdNipdtZmLqscychiZs98yGeLn2s9MMrEedkzs",
  "key23": "4dULMNmYBK5GuLx7BLspxanyAdiDBN1GrHU4fXFjrWE4JG14KXtwcEPaYt8qdwS8ccBBRsAGXFTxXvhpbPNrhzVm",
  "key24": "4rEopSdUz1vAHLhUhimAjnrSB1dP7pvW5AXcuQNKWKtPbZdKrdULjay2eBBxXJSrYJxyZrxHtTPDmLkNb7LztbA4",
  "key25": "5Y5biViMTBYawq7pwN4zos4Gft3PKC94R4w8SwHB9UTpigMphCy7xxN9iEeVQyAJL69464tQUYv1D1q1QVhwf13d",
  "key26": "4zmZdSugpeeFSNYdqvRh7rzDGMJZ7c7RhGQPD2TBeJ8TSbVr1X5tgpmDXb8d9ELqpdUz55R3Qx2i29Q7z8f3s7G6",
  "key27": "5QvYRAwXFm3YPX6YT2Husk4sAfgnfpLprxFssBouqmZspZk5bMRBGHtegXvaGds3jxSHDRo6WuPxf8KJ2JCmhu4b",
  "key28": "5pSwAPeJVcaPSr6U1vMVCCbTY3uR9xJa2bhCTCTzN662VQoks6KqYji1KvrjVEM1N59T8xw1f99kAvQyFG8CKrp5",
  "key29": "55rdRELX2Umiv7pZBsTQjB8qZEyEffotRnfUuMYrVYxhbQuSJYKYNFmG1ToznLrygTb1WyBfJcdMdUhwrcZ6UFkE",
  "key30": "P7jzD8VHWB24P1YeudiJhq2rH4PKGeTZ6WH1sGMDidCmURPPknidNf9tW5jb72fFRot4iT95G9bL8W4vhMTihQn",
  "key31": "LzMDhukjtM51hDeXd8MuBFysAATiGAVZQHFybFkpvQJBGzpioUrTYf4upPrBYi3Fs9TP4yBq6JgyFk6nfPcfPdA",
  "key32": "5x7Yrw21XCqSbiDkocn11V4Sz5bKyH3MNwuTU1XU7PFmL9WN7HDbbPRfVFashaBu2UyUPXG2vN7xDu9KntySrUua",
  "key33": "365ahhqMJ7dkHzkKmRFw9mfyz5kTcoLkdK4mR1yKXNBZ45TKHFiYhJJCcajSh2YXm7FrpjfbNWfj8PK9mUM1xuPc",
  "key34": "4qEaRZRUdGKw8pef1o8qsHUBYrgBcBY7AToaNBwhuUSa173F5yxBRJTJcNqaNsBPtNkFwCyssxpKhooE7LM17KbX",
  "key35": "5s5GcjfRhmc2z5U7KFNj7brKrsX1zeWD9yoXk3E5881CgNZFbudV7gUUBTv8UxTwRESSqsuLzUVvuu6z6nbSiQYh",
  "key36": "3zyWuxQzTJALrvdu4v7JbRCdY1YPoLWpJM9yBy9ddnzpJWybSF9xUfdFGkQVLvkECcTnQLBw36QXtk8Ge59R7kSr",
  "key37": "5gUVtq7C6zjDoyKJjb9c5jwoPTH1aTixmugcFPYL4hTY694cJteUKNeRw4ftdPrQMa7HnJzwP6tfjajjrgu28bMm",
  "key38": "5oHLqd6ks9mQBr4tR55E68XiGrF8vbrmPt9D6wjBUXxFMoauRivjRjypJBudJcRfdakhyTTCywB5wGcUd2L5Dy6D",
  "key39": "2Qh6pR97n5VB6RR8L3ZNkVsoavHncyF5q9dDr3WGfqWTAbETRowg1sSL8SSz4fwNh95yvs1pycRXqsrEL7vRtkcJ",
  "key40": "4jYFGuf9HEJ7paC4XuGMLwMX9xS2LxHJ1iTLgA8kFcbMHfW82gAAcxQdgERi5HWfzU2EcqW4mvhKFFgGDQeqXWYj",
  "key41": "3M7nryiMowzDUupg3AD8wmYUfzDXzd6DfraSPK7k2Jhncc9NwMqKfEDwmTNDvATBKVW1MBFWEn9iBYJv4C6qxyYQ",
  "key42": "ScDS9ojQDAixVvugFPYkjGHCdENeLxsf14Ch1n7Va25EAdxaWCw9AAH4f7mowPqNo59TzwEAhRjhNEP7i21i71H",
  "key43": "3RTCuFMDA3UAfoWaBuMcasLeqfoa4LonkWYixTSCX1awAHWBfG9R9aR7CLvjbdWLN74xGvqfBrQY91wVffHUVnUS",
  "key44": "2BhCiy6DfiKYWiwu8FzA7RTfr1Np4QrBnZ24PXFJswNqXJAxh9MgBcUtgnsv7ApvrtL38eywPKUBkoVz29W7Jsbz",
  "key45": "4Gsp7JsW9TwTnRG5iyefDiqdev6sm2tV8bFTH4q4WmfyFV3UP18C6ZPGxtz2JoQn9hsUYEahagRjdpTU4LuSnvaH",
  "key46": "Uj633EWBdKLRnFkLMJYrvbCyMzNcfBwNPMTYedt8pkLorZ2R7DiBEEWc4Y7K9qGQQHafQCPYuqScA1xkvuoyB45",
  "key47": "dvUkbkZQoSzSVNtetmEKPiZPUFZm2gKJrVY8ovdyYYbMXZkdkaYopkRtgean9R7Fm499mi8LPEjfeNPtvtk3dk7",
  "key48": "i6SgTvcamfPBvtvvdS2S2dYBtxCcnBz1zXfFwQRWqe4Aude9euP7pagrvHbFSrzDtLCZMVsj52spJsKkKrmQXm3",
  "key49": "5XnZ2yh6DEYSQefD9uaq6nTRJ15Y4ngDi3GNKpECWJ8NPqDaLWGDX2MyKEbAAAU1fYEat9X9nqYxyhFeUhrMzA46"
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
