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
    "3NdqoRaTeAkg8FvN5JuiASQjM8LSnccdLo8eVukg18iajmZCcocVKF414eexcoCSJs6ockTAzen7ASMki6SNTmaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67dYWejGkFtpSUV4hP9AYbekb7GuyXsAuogtSEs45G94cpqBoxiQ276H3mjtHyGyQFNDRy8MDwy4ottzfwpy2bVE",
  "key1": "nB7wfXP8zhjhmCGm2hgy2vWxYjN25BRd2t1VKE2KCUeTRXyDs1zbZqXJVVuzF2RG2VVZswzKwZZhzpFejwwPTr6",
  "key2": "xYViWwiubg8wj7Ny6mvT5a2KX5AvfbiPqzfG68rdS5SKshecbSw2QThensshZ3u4EvSaorRQsfq6Ebxy3RLDYiR",
  "key3": "oDB8y29S1VB15wp6vTynpNLAbPduRJrVbSsetQ3C58vMk5xKhpkU5tBCTfQJB8TeRRdAj7gGMVitEbrHWajyTix",
  "key4": "3RY3j8sVv8FVnfVP2ekuSghA1pDk7aDy1EevSPtvZvUpirrrQaucrbby73mTAdtY3Pe1ahdjwTQ3278dyhXSbm3e",
  "key5": "4j5D3spxUmXGG67uCw3UC8bL8yg8nJB57DhM8KGXv3BkvmEHuYRXCJciAbpQ8srD7b1qrHn71HwNuBQGjepoxyDk",
  "key6": "3nE6Ru5WxtvecNR5XLe1ZRJn7mZ1J1Z7ArfqjkyURZkt9LgyoxbuLraaKanecWw64rKhKNx7W8e94g3Ue4akXxku",
  "key7": "jXWKMBKZGQe7wS946pDL3yZayqpoevuyW6ygSiL6kamvMqCnHqKCxvjEH7EZeB1voSmqkBRgfNi49SQgcqXaDco",
  "key8": "M32nyxuKfhE9YGLMyyoRdnDLYrjDePvagx25EJ7hDSrCCFKgUyEVRujR9E5QXUnQNtymkHVe2WXAWZYd3BGJpgY",
  "key9": "3x3d7aYPwhmF4waa9gP3iahj59Rxnm3aYqYmqDJSh93ybMp2U9ZL8EYUdE3y16pvHC8vufLMsAmHafGbLGxRBv5v",
  "key10": "4afiv4ENtd9ZN8dMcru7Jek5Qd5kz6SkbxYky314Rc1tNLGXtFtuDKNLDEqssyLQrioKL8WmPyiNDPyNrEyFAeYd",
  "key11": "2qi5Me5iBUHD5nCc4QrMB6cMAMFwsoa9bH7DXV3RwuCttoA277qXd94UU21g5AY8P5yBRp6ZfVE791MzGAMW4sQn",
  "key12": "5LpCpH3ueavxLhHctZ2tNUJoULtVD2mngU6EVmRWdMKtCQ58QdVVGpJfGfiMcjGQHgZX4VmWHUzX11M7f5rVrhH5",
  "key13": "5qKLEsMGZ9Ytu5cksgcezn7jBsdzPhEDpNtbg47z8t5abkeQ9TNiQkjRVkjj4oY8BhoRjErHo4bDHLWvKbUTc4E7",
  "key14": "5NePwvTc8fo3FFPpxL5cP7sJsuKbuQB8HxG1fuJ8fX8Sh9czZ44sqrsudeqwcfBYhvTPXsCCbcUdesfXZE2XSBRZ",
  "key15": "67SaAxQPNj6P7vyUdZY46WZs8rkjGmego7QkKHHRdd6sRp69nDdyP2XdE75GgELspwnJAFrgaLYU1TCQFh9DZ81G",
  "key16": "fq8Tg2n7SC44gJ3Ha4vcj4ugYq5ezt18w37JfMFN4mdmbzqut9C8xya6NadJvVJi47ecTe5BUhMTS3DSiLUhkha",
  "key17": "3gDABDtgTUVkwhg53XRekxWNnmeK7KsHandVyrNUXS6YWRu8qHUkDEYEdT9TWfBY5TXjVAffeSDnGCZjW6VYr33N",
  "key18": "5VKNEdXWqMzdha6T6NxVsBt4dN6ryZzfbnS7VveSyVVSTmwSRpbCtibpyu8i1Kfd1omDRqAh4PqJWSP8PWd82LNn",
  "key19": "m8Q14bsDgAb9df3oTKVyKLGLjzhDKkYCRAeJRxD281HbMBsJYG9trg5NunmVg1EsPtZdnn8SAvSUgDz5i3dLn4d",
  "key20": "3DZcmLcniQ4ZvQSD6BAHghbnhheqZ5KYpeTadsw6ukDMAC3p6i9QgsoxhZ6KPyJ51dsDQKh6fUuJyybwpeYoAtqS",
  "key21": "2FwEHqt5mFyXn75hozuYuUSkcc82DMVLrme8rh3uwQtyZgBQHxLpTwdHR5cqnKD44MFDSL5xuqef1vbAa6q5No2q",
  "key22": "rDZs7jF5nKM68PYvdiizLir4WBEs5cmVhWpxftGdT2Uw9EvhnkdDtxmoauzReKr3cuk5pmwvzkt8iRGQLGPoWDP",
  "key23": "45dbYMkSgztMqyRpF8t9DUTVVR93b7mVVBitKTajNQdxHay791QTBbt69iFu6FREvGNW1LJ7yFTjmFfh8ijJxSEF",
  "key24": "3oKWP6kJbg1c8k37NUyzLBFmuXJ1TZX5mUTmo6qPEv3SWTt2poHcXQ2cvTim6syJ2rjPzcwHhadBvSkzCS6bJGx1",
  "key25": "4ZLbpqQVfLPDJiMXbM9HdtPmyRDdBQuH7beV2Qrg1Aw9ZxmpJEHjwdZ9ZTg8NJrE79PEa7sa8swirUzakzdaLVmD",
  "key26": "454HSP24RoZhCwmodBgcwCkVJab5ucF7FNJyhKqK6LcHkLYSts2PcH4bzY6vuKpgy2MwS5Q44oVfoDKkt9h395LT",
  "key27": "3inA687aYbcbv3r1G1zxDR6338PNZtJdb9GUAN6MA1k49vxernGTJHC9grUfzFiPx7knYygxQmWMVZMEiHvaemUs",
  "key28": "3zSkmW9uiX6xiRDDgXSEUd3i8SCLj7jgj4AVYKmHAEWRDjmuaxS84E2Sd2bWQoteU4TrAmNfWxL3LDrjtpy1MLzD"
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
