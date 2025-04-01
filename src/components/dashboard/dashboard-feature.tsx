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
    "56BMr3C9WuM8oEwWukb1utphFHH7KzLZ9C5gzoqkkhbfaU4aNhzhNVr4DuNy1Mb4PWy2ot1RBLHSKoCVtwagbHte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zZeNbfUgf66ien16pGzPe1Q1Aj6JTvHCEoHCZzMMQdtgMRHKqTaMr3QUKn18hQztMKS8jMEkTSj4VnS2535rWgE",
  "key1": "5Uimcdo7B7A1zktE2PcHooo2WeTv8ZyfxdKNUAaJ4EXDiK6BjPD5kvVqtZ7xtVmHgr1eSVnHcw4MqMKBtP9vKjEf",
  "key2": "4vzjtkKmPVyDf9waAtx7JnH4E8cs15fVysdv4sXW97VdoX2fTrF2NgqhG4vn8asFMwLLaCLYcptfyAki5u2teEiB",
  "key3": "4ry6sQFJV7Gw4QwM1BCrp51ScTx3qEwF1e8SLBZUr7uSTXLb6NzFceycj2LYbjLSbNTMDW2iEzB5MwWqhGCnSfjw",
  "key4": "3pJrD1dJuJ5bQP7a83zdyEXCCCEfsXHhSjWtNNq24gcHKy8r8vSNVKvsUaEeud6ko18DKV4XSpP6PN3srHr9j78T",
  "key5": "5JyKpcS58vd7vY5uK3AMEWVYwnKNYmaWy3vidwH53zH7j8PUUuwEqPCCFJRRu9i7J4TED6tCx9JscKPt55H2AaLV",
  "key6": "narzaK55dyY1fgEvp9qQbRwXJe9iD815oBvoN4CrJu2giEvapuFcabQZtwMMJHQ4gsx7UwpWCru48T2xQBxbdsj",
  "key7": "4sxyX4jyJju3dNN1gZCJWbsdybKqAy6G47LmMejG8yN3Bng3fVT3pBJdmum7bM7AU9CzW6b8Ww91CTgztQU4UkUE",
  "key8": "5RbQnvqHJyXXRDkhzJZQsMtekRhVEbSSZxbCkM1pfJVLAzcsCnVz9uvwDCQAE7WrGqzdomt6ppVHhhXp4Za8kJqc",
  "key9": "JqbWrRqhkA8aEPW89n9b5AViEJ4CKwiuQsyKgpBahMxLcMZZBxPr9mkEdZkxiC42xSDGor4DxbLudaLmFo8AWbk",
  "key10": "5igRpC4ULHmGmTJBFodHwmW9B4SdahYQm8fw96NX33Za2UgLyc2fosMtSJEecs3MpegcMNeobHg3RwyV2KCKfxH7",
  "key11": "D79iCNaj6ok8Awr8exYZUrfuhKDvHCZdUv52aLCa7UmX3jpKNkjKYXL1aFF4jcL54EdaNLeGxdPYBFyxdgyPwmY",
  "key12": "41CkveHdj2dETQZDGBHpFbcmTmjniwX72iWW5WWp4Vn5oizztzdg6vaF6WHPteGDBojkiiRcvkqu5VmiH9jibmJs",
  "key13": "4hLxuyD2s9XRMNjhSs35bv52bNr3wApbTQ7dE1vYzMXSQy38cV3eJwPub7Dny7GReXN2Vt87J3fYco6EtY8QaCuQ",
  "key14": "5oYzA59ScGVBUse2uxS1EcE8T8cDmKUtc6aqwi3zg168BisDoZ63dJFpQryh6XrtAZXR8ft2cYKDQqvtQHJ473Am",
  "key15": "5uU7pgBb2CV5M4JcnyZsTPKVvNfN7MWShhLQFsBqxaEGPh5dDZqCew87Y1Rn1dHRJCPptw5LVFZ1J8bhWvY4ayAX",
  "key16": "4X4R1zPryR72J6uXNrFW8JJBpdGMCE6PiSzeu1WazH9UcrZkad6vD18PKPj3SVLvp3oR4BamSwonurEe9bKd7YHS",
  "key17": "38XgoWn3pnMupLL2yoUyebJ1mKh1F7wtKvxq4AhaT7Cx6X9vyhdjmzGKJr4inkdGcth2ZRD4aF7VQQbvrG7dU9Mq",
  "key18": "2VNXc1pMXW79j4YEyy3nXneCA6fhUYRKV8bnAwF389MzKmggxyQskyPC9yrdwDRi4yebdYvKpgH9BDEVLF93nnH",
  "key19": "4ZoCYxZkA8LCTRhBwfPn3PFzL5fxVAGxAwRWs84DpTLgAsja9xvycv5uz1cCadonTSoTqe1ijL6xKZZeLMteXrNQ",
  "key20": "Bg8saiebqByRF5ocVyK5t1SR35e4Z2ixhEZAu7rtep4vwmDqxuKTZUYEcG2EjxSFmtdvPoHjRUuUUX9M1G59u32",
  "key21": "53oLZ8hjDYFGENZqxd4uuvqYHckkFkiBTZTm5pJDqNd7Zc3aBTP3MHUm9WYYjBxqM4wtuJXPvARHTotvzfjqi5cD",
  "key22": "4tuYkrkhd5Hak2xQpGTRA4EZUQT2dNipmRrrM2XPx2fvck2zLU75Vx7LiDE1fQdpdPzz3P4iYaSmUaS5N7WVy8kk",
  "key23": "3sc1FzeqKNNSTVvFatiQoWtr3rgeQhcvzNNKon856zn6uFpfyA34Lb33FLs23GnWPxx8KpASpbdRCGJgTku4w3eB",
  "key24": "3WXyj67FVaPR2qB2TgS6BNvS1LiTf2QhaYT8MMxWEX995wp5UufYSs8pvQ6Nme3g58AoyCkwieK8H3eSaWc5n3SE",
  "key25": "5cHrmRpbL7EDMteF956sc5gyBDKce5cfDPjqzMybT7zwWAvDm8bnukiDx9r6QcsQRbJ1WhyUWY3pmkkeTDguYjpj",
  "key26": "559sWxqro8KWDkC8FRBNR9mMmEqadARSzUmygQES5j7JL8yD8vHsLNZQG4vY8NJsBBWZQDGDHA4UY74yYdGoygXY",
  "key27": "5qu2NqEGhDr4HdgrV2xZhM7rjePm34Fuior7SF6NQtW72cPr2iU2cexDnsu2czn42aTz6QbHQs3BN7cAWnRrfVkV",
  "key28": "2XkubpkA4g4Pxn74r4C9MUGKWxmsf7sEXin1pALR4g4P4enUDPBHR3LQCPSNZEcVfquvkf8SaQdXhmTkVErLrT8U",
  "key29": "5f9ETnyGr72KJnaa6PTYZciZiGSXHfE4Vime5BmL63cJtCqz4cRLU2j8oYvESYK7dmfZtthkj8xLYP5nndgPs8PB",
  "key30": "JwoLPWc665GfTmDmNfmWxGf8EiWgHUbUoq4MY4AMDbZXsy4TMpXirwCkDfbpWKabz8j2VsDkTMrti49rxEnYQG3",
  "key31": "5rWUitvjzWg9J9NziKBeRXGvj3D64JU7z9GLXkQTjQ4iJgLDLiNAwCKbrwwgEUhRxqD4CocQxmrGLnPQFJVV5HDv",
  "key32": "5NcN28C6ow2PvzAGWoqJVMyiT4JGMikys2v3uL91Qb2UUsLC1XpqYHJGA7P68Z2ybndGoke7o1PamUZxLGhdh1jx",
  "key33": "2oHtUNQXYHu6uGswgnENfwaBF6xaPXCpk6uzFupP1DwiVFFu98BirsSkaBAkmTHedWoA4sZtsiX4otetSciATpFg",
  "key34": "2yEATRMtEVirs8SKczUAfdmjqYyCRH1J9KhJ7VH1zqVKmFsHiqfVDRoaYzNQwxzVotBmd64qU4Sq4sZdve3KxtMW",
  "key35": "32nm9Eoj6KphFuCojq77fNTJTq8Xbf9GRBUFbp1Ue2imyrKWcyfyXubd5pgByXsDVku842Djy9xRPMrK4wqpNogU",
  "key36": "5vuVZ5A6KJyzi6tGuxFyxjZThopqc6raoCdFpLtygsrGDpcq2nfQ2K9SbKAAjsfCGKNzGsCJjnivJ6b9rxtmSYTi"
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
