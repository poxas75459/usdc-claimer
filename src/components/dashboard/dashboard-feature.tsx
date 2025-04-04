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
    "5j2Xksv319AYiVfGVt9GmA2dSQ8LhndiioFX6Lr5Z3rgsh1ezoV1xWZ1Cyn4gWu3yEkV4xZ5Rd6Lanv3uRkFWrnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y9GJLKx5mqDSSUnMZHcWRJUjXkNBqsuthxZvmuJ4Vx5YN18GMixV7Ux9x3aodK354y9jsD3o7iksbngim86eWFK",
  "key1": "3nLUdkoyTc7mSBtqpS7nFcDDY7x19bGnthrs6DHJi59pk4NepWGToKsrdRV8DWWxJFEDkGPxjnAHmY15YPxN1YEp",
  "key2": "HSuiXDMwLXEZCLJAHwn6TaurXzxFEijac9qbKNUyPZCJNpsCfx2YrkWPKqWiYZAbpw8wD8FG7KJBUNJcEhvxsoL",
  "key3": "4Du71G5Tg8t93mSot5qzQdCC4bzy7YRmFCLb1UBqqHuV7gNWHaG1hdYPCZDrSKyjbWy8pbGBvcACTa1rEm1uCgK3",
  "key4": "2AK2znU8v6uniPkfDbiKLCBGJp93gSmbscoAS1ndD93oyrqQsexCCk7tyLakpC45KK8sThXC64oiqJS6JYGXidtg",
  "key5": "4vFnjZyfzMTx1sQ7wHQqi7mBk1ufBgNgqbQfXyWp4ZNq9zr97xemqzoLKgyCxy9Jk45kf6o6Fnm6YGDp7vMokWm",
  "key6": "4bniDnQGt1kVZq9pkJ8zx9AkJggMDfntbCGfe5CPRRhjhqrtGxfckP1CgzvBY8TD9TaayvvBbViaEeyvJb6Hon7z",
  "key7": "4PZVqwj31bqKDMzJA5DPD6VoWUnXYfeRxHstjJja8U2gfoA1UkEePzgWuR5Ss4z38NU6mHi2bJTsyJwGcU9V1mLV",
  "key8": "5b9B3SGE5tT17uNGDwaPKTC5wkgVc7kwMnVCT2pMSLVamLXrKGBHqKo1NiYpbQJPkRVvQiTbyMDGi3DdwHpDCR68",
  "key9": "5DC6oPkgCzSqVHSjA8Cdw7bSVrsAWT1QGrbJcfVF8bZw4TDFAExiCNtdavoVj2Y4jWKkjfQPgPLf5ZPXKkubE4Vn",
  "key10": "5N97E7ApG1edWr6hyiLN5C7c8tBxFvBL84UN9jwe1zN6HNVdWA4KacWHbgUQujuene7fDpJtt95HdMAwUsG1DCwM",
  "key11": "2uacRDWo9azAQGZ4YMeaEHzS4bh8mmme9zniMbdagYAv24eRQ7xy5ECohFUbJykfVNYuW2TZcMGu6SSr1vg4YUa2",
  "key12": "4fPCm91avFAR4v8rRpQcTVj9836YzVhyLHJfRaqSZfFqXL9Y6jfdV4Q8wn2CQtVbW7r7RUrQfDAUpkdkpFB4Rswm",
  "key13": "2YCX1tWv15VShvELSJg4DQ5v5D53GWjrHWsAxsJkA7H8yEaSWWz3mehtnJrowtuPQwprpKUinMTJLQqX53MnYEp3",
  "key14": "4foAdjTfaTr9GfnC6Caq5tiSLJEFKJjJNjqq16Wj5tyms6iRXHvnHFcupNLcEL1ZKoHmcztdF9Yz7bZULSfaLzYX",
  "key15": "3gms48r5Fd9GgqDqpJY248CLQSg8vQ1vYi7kDouGFjKM7BK3cCRJiYMzYVKhjkJty2AMEH1cBL1uiwaqt7bQu7Tn",
  "key16": "3Lpf557a9wZYx9MeHEfCoCxhiZ85mAVxJFb5iwtvtCy8Bp1dc9UMePiFvif4oJhPECu2fKC95DUWQkjamfE9fkg",
  "key17": "E1judam6gxjETNFza6Ax2cgkojphKiRghTwUkwFVk5aRwqDarWRC1QZb3dGjjAX8YWEikPGN9youcT4oFwiZda8",
  "key18": "3yEspWr9qypW7KD4smR61dqjyRCcFvEmFLeyFUh7kTeU4jprcrArwa6FcNXoLLBxxESBZPAXRbMmw3MB3LWUeEgs",
  "key19": "4ZcanPZiLysgF5t6rQqkwMztiS2HgKg7ntJ9RzxFdgPcZwqD6NK3ipxVVpXjb5o7c3p1wP8NSYxTupSLQUY9hxYc",
  "key20": "3GLZ9d4yz9Xizcjeejqqb5bFX5yKV3ZELBS4crhEZhf1CFwgmZt9KuiX223i97UoNWtd9xmit6nqAtfd2Y5zMFsu",
  "key21": "3fupz6G3H2PTLu5mrfxb41D32hvYhtxBHReW7QKTKGbwWS7XeTDJ5Wntkmos9soc3ewm6L6TzvCynA5YPLzAp4f5",
  "key22": "59u2cbVeVuiXLnoD54BA4HaJvoYLWVePMjLJzzBUomPtV3hDSyh2dkJAGszRDMP2Twf1Tqas65VE3KSvEKexVfGX",
  "key23": "4qbmMoowVmQjzkkVhmCpiCSMiu6x42tVUwpqSpxDf64Maxu2QEo3beBr5YyysBhaDLzEqwMM5f8HsZsACMsfAn5o",
  "key24": "4oxtonpeD9MMGEqXZ4jPEx3KEg9bKEjq9ge4z4w8j5kSpeoWX9NtcR2NthTnGhczJB5yXFUzyWWbGrMU8LqdXQCm",
  "key25": "4MTYohFB8w31fra19gXKrcCZfoWgoiScbwgNhEpzE6R1Cu4MS8z6n8zpdQYVGDJ8BvQbTTvEBAfAmmp39VtNzJnH",
  "key26": "2LKnLnvFFWqzgtcZvPBC4jhVcS71LyYoH9mKzeoBfaXTgQevNhJ9kGSYSpQZ16xj9pqopGNf44udqZHBw4t5dYeq",
  "key27": "tnQ5Cu8K75nv8X753zxjqaFWrq5bcRoR1zVSxVPnpbNuYgDJqhV4WV7P9EAJkGBCpockSd7soXH1WhyNQYmsjXG",
  "key28": "3v2PiDgBiotX3pghUnXqrZE2ym5HWhXtwqhtMMHgR4qmVVj6ge1rnUGmrnYbdg5nHYbs5dWYQa5iYJxVuh5wRW6T"
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
