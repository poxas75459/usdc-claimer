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
    "3NNtabqNQE6XsmWAEUyZ2RziFfdcoCMrwgYw9cf58QyYq97cn58xAKAhRiGHA1h5tpqbBHGUTmj1yD4YwL1cKooR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DGt5mTXcfheDC1zSeH27fds5FcE5DwCaNZNY33eDUpg4dDUa64kiXJjabx6bL4MMWCnL3JaTvdbxpy5EPwWtYDq",
  "key1": "4TBrMMSqi73Cy11r6ECbfn19ZDUyTmh9eDZmieXWaAdRSYXnrpSbY7oPbYZzseeucqs7B6M1wV2xNmA3u1zZRqoR",
  "key2": "3AEyx8JxBB41MPEYFRTD37X154HegfYkMJdjNPdBoQZ4CuP6yLsBKMPcFBrmhBpDoAFTZoFe9YeTNnttDUmtAbKC",
  "key3": "4Wn6yafAwiqo8xKJMwBqJwzCSavw6rCY7XuSkARg7Fr9X3BKad8tRbGELVEjTHAPoP6LpDx5XXeH6PG3ghDwBAKB",
  "key4": "Wf1wm8D4HXinxUWnLdNgXLFaLNAVnivSFzyu7XXxDY1t6zVu543GNGwJyNXnQCHGwGpRS51EpnRuaBU5yJFCudt",
  "key5": "4akWMJ9RTRAaTSopkon9V5q22MdRL35z8LemPdL3gkj8k4dACW4U2vB2FiMLeMe2HhzchuUHKDy3ML4GQWcGZfP6",
  "key6": "5TaUZGMwTusnLpAX5ATN2N2LQYDVqUVAeSobJnaHF9pp9M2P3eTb68v4zuWyRRQwspthpXebM37iTQHUStg7w81S",
  "key7": "2U2f62ARax21A4hQRwFCoY1g6non8pDZxXMkqJpdUdCz9Si4kpip77r2AjbqkMuoRyoMSSoFqJy5yoXm1ZGmh8Wx",
  "key8": "NE2WMidpZ9o15or98dMrFZtwME17Qs5Wownhhva29DBbuWKA6FLtsxX2E4nENYK15Fyg5oKWELZZH8PCRambFyP",
  "key9": "tHopwogfmEyNHLWjWcFNZyy4PqGNMhCSfTtoqVDuUskQqjo5gjU9hasZBa46rnp21x9n1TsRGj6xJcqdHzvKuMb",
  "key10": "2nHaxKGLzLfVoEBh8yc562cjDfuVmUpBfbCQHNeLg83YYoMNybMwc2oifsTDSe6E6iwujbfAatMwoWKKAhnkpmev",
  "key11": "67atn7GrhTyoYjQZufbDqymQv7pBJoHwrNTj54j8wTrguovY9zF9Xp4adJ7Shdi6xnTUXwpmEUjovhfePZzxTJhv",
  "key12": "2QbmhHeYk5np7YfTHseNeQPLT2fbXfGFsYKbKTLp74bTkbmKMKym2MuJsUWaMbKAbhLuY7Vu97MyvLHBSBqpN4c6",
  "key13": "5LWJLWRZgb1V6PgnRe5JkhDPNMoSvoqkXmJg4AZLMGYh7FUseuHJk6bknDUewXj7Ecr4wAS9vVRYeRFi6D5gHUJd",
  "key14": "2uYktMNZZdDd1FQr1Vj7dTp7aryUVY3TDEnhitoX4MZQmF5xJ27jSDsUQeudVzA18r7sk4zFzyBEx79TPataybWA",
  "key15": "58nYeEUqKkkYPE13kShFa5ZjmnUrXhBP1uQhLCdNN3KqtMReXou5vuVF7uBT3LqJFMdY7DQDJqDTxSTfV3vzt4FF",
  "key16": "5Nd4zrDYcoD7yMizXRLAWcsqDrwgrrF3WaxhRvcAN1C18DGeHmM8zvZdQnH1n6bcLACSbiyUsu56NR6ZN14CuLCM",
  "key17": "5ysgujEK7FBfjdRfjzdrnE2sdSn5y5AZwppqHUDMHdydZ5HzgBvGjWmjErXPWtFid9jPyREobrGJuN9Kqv8WRHUE",
  "key18": "kedwHfFQYR3rdu7foXdcCyy9ZdptbyMrBhoe4sV7T8XBxGPGvtLzBWNxUiacsyrdBPtKUsWARtctp1pqhjKmsRV",
  "key19": "2L2WnzQex13xw1dkrL1ZpWPJGcVLkVdadjwPKxLvCbaB5QYXdKMwrfEZNzu8yGyH7A2m3MpSwb5Wp31KyYcCj5Kw",
  "key20": "1kib2vUcArQAGkP5ZDqWxdtC6tQQRoAWftXTfXCFeaPVULoQggzBY65e8C8EAFxD2NTRLodAvApZrTRmJ68ybiv",
  "key21": "3e2a3qLqTMQEYs2sfFZrk1y8cp4MwWQzMkLESdV5W69pr6tCrM6iToWXVK4muChRxXpCrYjVvceF6yk4yWqfppqE",
  "key22": "3SSWAm6VmqJL2rNNVae5VMbJG4KEJX4tahMjNcPkr3f1xJ5TipuLx5Vzd7pd8PdDkdusBpUd8aM9XffmT7oj2squ",
  "key23": "4wNq8ktkwQjBGnCsHULZjBkKJk7YuFDtw6UNJxZ2GQJLgvzuFGand5tyWzirUyZe6FxQWL1m2xKyqP5jVyW4VM6v",
  "key24": "3JqbYyez7Mp6X3BDHJTQmLt9iCHXRT2Zcpo91puCWWaBY6NwdKonTuwXMsFFAbeghRVE1cu34xjXKRmtktBrEK6H"
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
