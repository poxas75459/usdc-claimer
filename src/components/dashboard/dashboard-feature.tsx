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
    "5xZ3WLPqXq5zMSnAYHuaJBrZkV9a3QkmHtyUWC3VXAiRj3CsGk61Ta8gKv9i5MJSPoVfq4kNNvodDETY1Bexqn68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gTLsLxvRQ3BaoxAdZSfbu9aXcksDy5FcuQBH5Gv3gju6zzGYuvws95cCTsTJ4baahYvUpmb3Xx9cgWSp9ua37LM",
  "key1": "dUg8RLCsWaX8Q9zhrXgJ9TRdhy4mjZ45aPvogETicfF6XVRLdeoMt9CGhbNK9SWDrEjGfEmtth45KADx1xLkSR2",
  "key2": "4qSJSpKw2SsKYcBnHS3rcqAbsVrGKiPdFM3DSPUSjQu4wNEUJxZ3vnxc2ZiD8iGfApSecAjj4DM8ao258fR9HVix",
  "key3": "3w2UCZ2kGgBvE6uoetSuoUETWR1Mzg1QHGZiEb67s8GcZCQpPunXa3Cs81UmeNrGkdw6CgsMRkBaVrkxcps8B6JK",
  "key4": "5NQMSXLcGvAyFbJG4ZiJs7gerpmeNQosP5UbdWYHuUrwv1UY1CZSUcJKPtxFF6N18ejfMEjmn5oYZwq5YytQCXqx",
  "key5": "4RfEDitBUekMBoGDZmwHvLUsTasKXEKMNYia57j8ivn78x8pFJpoPa9eB4FXtvR2VzSj2koJiPZoPVzcuDbuwTvV",
  "key6": "2zph12KuHFWgkqU6jjVfRkhV3TMt9QEXgCPC1HP9bXwQ3wpA12u66tyKqTeWiYRAkVPikZyW5rRh5rfTWw5dbV7p",
  "key7": "3DmKnCPrN9zf14xoWdobWjYE6MxJdWuxnTL6XYgQ4s3w8XBcPoHWBQcMfmHZn2qRsQK5huzFLdS7pgSezB86xSeJ",
  "key8": "4LwJBQgSoH3k8UFBqfvVUbBZQtpo7HhCzFsb4KQZeczyzRzST6nm1LFa8mzZmYMx1JXE3ZqSZ24iZYiYkbWea69t",
  "key9": "4n5NXiugJp14GXNuwkBZu4rb27RqEH3ikhsi2V1D2Pt4714BebzqNZvgscTCu1EqJ1P5PZkyAqTRmtx8hmFnG13q",
  "key10": "31UVdKoES5ZuVopSpMmuDByzh5Q1ENXPxcfh2vwSRB1nPJPVnL4ZuwUoWTJqJdSD74fi17J5ZaDSw2T1vDF5Y6sq",
  "key11": "4GiY15t5zEE13EJoHstossmRkuDePGLtb3wN1ByhNPntQtVgt376Q4PSNErjSVgwsqQUTnCyf2vQBepjZx7AxmjG",
  "key12": "H7EHfaGRrMoEisUa2jWWYA2hyqTop8cYt5ymuiqs59LRfLGxNJ3Jqcv2doy2cScDRBiNG7Dda6SHkD2unBaLBuK",
  "key13": "Djwz3CfsbnaG3BMU3g3oco4evuyEXVhunEWRt586VyxkDUbiqUtPSrueZsPhPXRCZvr26iSdZihen6vvKVknrHc",
  "key14": "3cK2oWD9YefM3e29AZqovrGtQCL83RrEXs6zCSH4FcaTkBGj3hNEZq5iUBbHZCE9BQ5Uy42BzYX91ghjYRR8VSCv",
  "key15": "5zx6QofA1ie5nn8jFzwrmZv94SJKJW6W7KiPbff2Wa1s6jLbUhfAGRtACahXTYyz4Uo9mtBdm3uAsWCArZ4qQjYW",
  "key16": "3YYjfuSK7ZEnjtdvtabiwfWSpDsUcgXK5aziPPMPhF4MH2jm9e8k6YzS4HL1kVZrd8tQFF71LvQPtb9hMjzWq3FB",
  "key17": "5xjANAso2bwE5aGmj6yUYq5uMQyBWXRywPvy5eW2yZjRKyZDZmaKbY7jEFu1qv2MVTgiHpEnBt14dqhCJ9PUXw52",
  "key18": "3x8U8wWMa9Jf7ogWBhTR1eCUMmD78EyKHRfa3aEMJHQcceQAHm5oo4abHm9NTo5xGsKuAnohqkUbYDhG1RRRaUmu",
  "key19": "4oouaHc3MkAs81zkj4w6d3P4KSULQSAu6HeSmPx45sUZGDyfSeHxSieP7KQyWLFgasyx5TnZ7sFhJyqve7SiagpF",
  "key20": "4cc7XPWAsB6baTtiZvNQJfmBfh1vjDPyiMrgKR4LzUqoDa74KkxYTp3rReS284AT6KxNMVNKjKfSHXB4QJsvEwy1",
  "key21": "3gmnxsPtQnSJXcA9ztVyV1ddAy1Rmcp4kRdYQ4N4UZ888c2oUKo4Lc8pCQvWHUTynogf3YYHToLDsX9Nzk7r7tR3",
  "key22": "57nBA2Bit4syxUivFFq4oyLHJBCqUYbHbu1bWRrhLpPnhutEiAt1yFy3mgthggAJJ8s8fJCGxWEgTodZCFAst95V",
  "key23": "9AASTFqyVDF2D5Ab32vVnExDHdy3qpommt6CwBof7A1JURRNiBNcbV47vnVdJjUAG1Xd4M5D4pDYfniJjpNEacy",
  "key24": "57KP2mpUsnm12ydTWVy9m7mnumXXfWN3PjRN1afHgREyRTEqr9VeCWZuC3iojBq2EwB2U63C99mgzSPmJX5MzWKD",
  "key25": "3vSxMBEiysfHzZFVuRXmet6zyyXcwbUNXoyxwmWQLrHkM5iF7uKxKbmbENKaKrVP98mc83e7qtzzho5MeuAJ2a4v",
  "key26": "4KwHny4h94sYRyThnfDTEZnMh7gscfZwi1vWPgWWXmtjnnrVbRQXNbFCNzQqv5iuhansdCL38QXNuCWkN6sQmKpJ",
  "key27": "5CS6G3jq4JJvTwHCDxnYfHi2RzXCMiHkptJakY27tpFFfKFox4P5bnfY4uXqvW2bUMmf7kH3yaKdVZSkJLEgfdrK",
  "key28": "5DYfGWg9CpkqgyN6Lf5EhJEQAvn2RSDVqbtxhKpNj7FM4S6aL3RBi6XmzigJPKfHPQ2ThEacLJUxZzjU5Wz3o3Rs",
  "key29": "3ViE5vQv4gNfYLBixugkSpMza4DC1bR8FWnmN3jHejCDu2BHP18UhbvnBUgmLdj7KGUeKCSYmc5PBmrGpC2DcRyE"
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
