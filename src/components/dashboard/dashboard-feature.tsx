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
    "24LURUbhSDYkdktg21dpXFVpiivJPkiHgbkrchuLiGsoZTWziEPyfmcVvA5Cw5i4qDVFwhC1SF6U6ELLQZHJdE6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "552snWbJthyJGYsCTYEm3oueHkzrarvogtgsUnuDytZgbANmPhjYWWsWsKKTrMMPJ8WkXzmHvaVaFftFqkKkjXWa",
  "key1": "34An461xkeCHVHErN679dnNJXpcjyXnCk2KtfFF2zQwthCDgF6pybstrQZJBVRwZ4YCTf6upazpejXkFHHh5idgN",
  "key2": "3JFfqNHPbQyguMcHNEZY1nwt9SNFMiGJHkMktzM5YLWGDATEX832qD2Hy7vVysZgFP5sq8cK6zQ1Rr4fngMjybvC",
  "key3": "M5sRDjoybJQzcYjS9kRtnPiJ6pfZaqt8bbNDbLckv42hKr78MKCfzkpLKykjR4oaEEkpZHmpsCuUNiqEKXzAKzL",
  "key4": "hQC6uuCqmfb6YtM74EMsc1yPuooMB4WTZ9AQg1zNSh8FN24FrLBAko74MbV5VrfjY36ZaxxZ5DWQ3Y39Rhhc8Qq",
  "key5": "5UEnsLPDRTZE9kmVj21DM7iYfKR7cv6JXDPwPaxBJi1hsLdMkGaSC2YiceHKWyaDFasAPzUXBCFpYguSVzuR1hFG",
  "key6": "3saYUuCiDtx9RVoEEBeo8jbmaqbZFBv4JGRF1C2n1S5BCqEs6UDu395Nsgn2D47Jvgb2hTZB4DfBjKKSGGiXmgoN",
  "key7": "3rAJ5P5JCvwtvXGFi7jY6EgNQr9hDHRS7BGdP9yMjsVyfJfVvkPCBi8c7eeGzVFiuPsjayj9rxfbaLS7koGFML4P",
  "key8": "2HQezbdCJ4HzZTGSWMYbckswqhRfHH1fWsxXdLLGcnCFkNoT2n6rV5DRz3mn8VS9gTGLzsBWpjNNWY4E5xSa4phr",
  "key9": "5fvgvvkKhxhuJxTJUrcBx6qALMgevowAQYfQEcGtaySbL8VcWCTwpxKYmtPBx8rE4TKsapeUNT1dEvWfsNzuyegJ",
  "key10": "5CK6YrA7ivPNdF7oJjf2v4F3R3Qt5nfRa4j2pQVMccQMTPU89V2ZUzdRquYDY7USwWbcnV2kXAiyMFJ9SVGxzN23",
  "key11": "2kcnUzJ2PcvUTK86vEggC3unYHjpzp11LgBYVJHPAUFzfgoEu7kvjjNFNEUNqBdvcg2vkHuvhm6xgVUKu5D4Gfxe",
  "key12": "eSmW4cUDpsgCQVSYdBMAFckC65gN3RVcuEAtQcCZ11Y8NuPUKWhjdrRMj22uWvrgbmk41bdFJta8yW1mFBhjViY",
  "key13": "4eqwhQ11iJAFKaNchgQpSPhvCGJ4cUrBvM7UVv7iQrNTQ4vV7ZwLpjNptNFrxSHRTQ4WLzNwMcFgXdcbmrZ8MUg3",
  "key14": "4tZaNmqaS9Z8YD9Br8a9h7PeUEBf49WFnFkqxc6q9Z6foygY5NBrCJD6UfiHp7txEgyR6PhZYqrqVo8LV9kwzxKU",
  "key15": "2akKLT7HJ5S3CPwhqD6Cusx3PBKHfmpXazmyxtpog8hoz82eCUN4XPwZUsMLWUFv21AM9gm146XhnTReSZT95hXM",
  "key16": "62ofxmsf5CfuDTg9bKjQL7Di7zcKGfF9yJAKAeRih6ffeoyTKSRjb1QaFTv6Gb7gd2M7v8X9AgNUq4wSXLEKqy5K",
  "key17": "43xEBquF2PkEMkYqTydv8S5c9jm1i4JPiNzj11VBtyaDoV4p4K2YrrhFKCMxAQ1RbGCxrpN5g7WxbSUqin64xX49",
  "key18": "5wfegPbQhQyenCKi17SpySHz8aMs3rNosWSMZ9hePdRsevN2vpgJgJDtf3dAA5QkAdooVBmzK72ZruFSCAz8rGw9",
  "key19": "2yRtBp2r8odpmYPhCLcoCGcdfGKT2NmL7qh6VPzAykPhTybb6Uk6UbSd2Tah1LmzB4WmbAj6Cr6mnmmF7YTSG3jP",
  "key20": "2ttWqPEFBfsNbVrQyLygJE5du6JkGHmNbmXisgnay25YpfVtaUS7ByDgr2Bg7mhB7EGZ4ynzyVHomhgaPFrnnSiE",
  "key21": "64gzNuFXEJx2RU9xf1G8jbZS6xQXkAdSG1YPiCj79n3bPyKH6kiH3gaqKkekwnPKY76cEcyMtGBJ8XrsoZWHGTLa",
  "key22": "3Anp9sLoSWCiTcNM7MStgo2Dq69ZUbgb5tLBFkHHxDoxbcUeqn6RYTcjFR8xLLhgjKxRAoPVS9yLvLDUcYUyef1s",
  "key23": "2igaMYXqST2kcxZRnvZgTNYmo4Mr6fpgYMayGg54aeraX2dceDoiA257HL6F3jT1HFxqXRfrN2oToExVY5zJQRJi",
  "key24": "3FesaPvCrjQy627W4b4wY139C6kJ7vojXozkiMCB49enjXyxfyJrCZ71nqGVdsCB8h2SiYNeVZvGZ6o2zTcPebSH",
  "key25": "4ZJEVjZg1gfdSugH1RWtEbf3qfhX52rSwN6ZdA1Vf9B9gLQxQcVpRn3AjPEDgNzCfEu1M632NU6FcdbiLeTr6ptm",
  "key26": "5c1JTczo8XXQvs5opTzDiR7ee6tbBFYhLg6ABQdEgN55uGjTHJnNZ5wNyA4Dkiay5XR52GFHRSpDADciqzANoruC",
  "key27": "DsCscJzPpHKAR8Kebj59vTHCsqLePcUL2wZBSMnFK6R6uWCdhcY41Y8yenVDiiJWSyGvrpBnYaBp8T3K9MASc1V",
  "key28": "4r6FN5F3J3rFPFM4TH7UuCoaP1RVYp9BZZ688VVpuk5xb1KGtrJWTH8PZosycAwK3T4hybFufRRtGjsZhxHZ4yBv",
  "key29": "4FcDbr9RP8LheieDWVTWtg1AYGXLfTXVBD4MUsqGa7SKTSR1oFPdJ6L5vay4hAzeG6rVozo8xdR71LLLytyyCgio",
  "key30": "4oRUVyohMWNvFEALKCFgJrMn7UcyvABBgXdiNYLmmnJ6RMKtbimzkd4Rw1qk5KPnmfmP9EQdVTEdB3aKYLQL2rR9",
  "key31": "2j9KyjFDarVqzzdbhaT1emUqQjqGFJw1ZWD8j585vVVXWPPSSrMPktuu2ATaAfY7REnzMgXZ7nfRKrhP28Pjmuuy",
  "key32": "2w9j6bqbgG8xBLqr3VcfZezcgvBz2SX4nTfC4GUAjpQAEECDFNfsVsAcsY6mLJ4uLg8AraSVwurP4P2bYWrwczk6",
  "key33": "5H5t1i8tGKNNUBxWpwKSmY7BKWazts5QP3vYf6y75fQNnZNGttt9iW8hJjtH3nKbzV8QM6HcdhQiDGT1vQhmpHb3",
  "key34": "5YymATTRU7tGcavgpk2B7rtXSJVwn7zHELhfyrP8EYZLZ6o9XUjVkL8k55XNKHYZ6QSdTDiAet9RPteKEmbjLkYJ",
  "key35": "3eKQH3nwMR6DxPznbjFmqRDFHaVgpunpEzSFNEEWTfjwVyafaudxnYU9V3JdLS3kZLRxwtR44PuBhPSRwKP3GmRn",
  "key36": "4TYzmhvAP9gfXJqgycETCwaams5J6VxLMTSewf3MSK138gjZonfSSGYNdMPghNHnmp4Rer1Kzibot49FUmm4mqLE",
  "key37": "5V49p19cd5v8ZR3DuiMJRUaZuYEnJrHeDVJdziMHheWpXsp5eZksGHj8pkMnZfngpB2VoZjRU5zAtqYfKGRSeeXr",
  "key38": "2ZM7YZxirTnraRqQ8sdVgTfv6NToHBqxcpYE3oc3HafVTdGjFGo2e2zx4TcBgFPio61tox5VknKDBmabTWGwzDm"
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
