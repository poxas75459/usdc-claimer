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
    "4ainYX4pLe2zSs3n76Ri7A84cXw82m3hZe1CTKJk5tMbcDsNXG3VBxnEutMSYk3497AVh8MfyX7qKacMMLsi7r1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A9WP9HHMEeV2PwJvnp85KtQtXSah5rpVSqtHXyqaxZKAu4t8tK4iuJmUFA82XVm5zfvLKFCVutZRw9cusiGn7kc",
  "key1": "2BFBi3Ts15sj5gEXN7dpGbZJFMKp5F542BFnGo8F6TvXauLF6NB3tXkzuTMVUY73mNoQeGLcnMboCRpGp971Fgco",
  "key2": "5FqGyfe8AZTMPfcbZYNK91UkyVg5bBLcZweXqZXFgA9ZKkzYZefSKPLhLZ1ewm9eeC6zNh4Gc6A23rKUg993ZgNA",
  "key3": "rnQ7o3BsLqgv9cGdNvijUwbfyGe7EcXW4uPuv12pCs28YonkMCTDhDpHVZDdd4TGRx99A2KDXmgfYHA6hk5zzQU",
  "key4": "2QgvP1GcqTbuRDABsaAEJJWivY88QeRSfjGC9bwQePTSNdfd8dx3yeUJv1AdK1x3cF4YEGX4mXQRJiKLNVPsh5EM",
  "key5": "2EWfJFgdceyacStrgjW4JrkaW7Mp3Uh5G77YkYg81PxvVfYSheWrHgUGwukqUi7pbEAf7xF49JHygCK8mpLewY8L",
  "key6": "592GfoLKFP53Jhz9CPDdCUd8q8Abz2Lk4Q3qSAkhCSYNfaxRaEjNwbvEYzwpCnJgQe3me6LqjFyVYRgKezaUYP73",
  "key7": "4BZDd96h2crTwZfALppS1j21VNZH36cFW6LkZ3vgugwwxB3A75Aa1CAGw9ii7axyAZ6rUEc7BUCHbQtKfTm5KYbG",
  "key8": "4bShYNiQDMeuQuQW3KRux7dTDsQMoKHju6A6ouPBG5h1BymN6o55xGk3v5nFw2AaUu2gDQjkQL34ZJSPc6RX84GP",
  "key9": "4DpXBN7VFFqBpT2EMtPXeN1PvxpBEmpiishizPD7ZrGcrdFgwsvCeMmmwqLyvdPCa1heEVcLC8iwcio61aAz7bSm",
  "key10": "2MdGnD7VjsSYNTBuQavngLiULsQJhNUUpez2y6JbK2KH1fsimoeauccp2HYHp6RfRq5mN9jG2Q5t4XuAVRziGNDh",
  "key11": "4gXPAfkoRUjXbaNMFAX55F5daM5g2s9ePQAUSgc7Rs7rKNfKCyBKEDy7pLQKcvNsH9x4iJwSKK7QRsxfhve5pfMv",
  "key12": "3qtNfV6MemRma5nZfhJJoKzfcBf6GdfpLMqtf2qo28q7f7pQZCp7BEY3r6nh2H1avPYesuUsGJHGKRVxY9Cr3Psa",
  "key13": "3C3ByAuCx5ZcALNLqAd3xD118KdVx5deybusGeQULL4spjeC7BwG7rqEWKCFwMK2G2CnBX63yZ3X2SM7LY99HppK",
  "key14": "42o6U8YFHJTXspFZbjG3Hvzq1Dsxzcc8nHfVwnuhZ4y3d6hvyKTnTRbk9yXGuEgFatc3fiqwhraVzP95JKXMgszT",
  "key15": "4sGbjy3Q8HTRYVx9tdVgM1rMnRRQjxDvcB4xgRM4cFWH5a346hEbGyU8whQyxWxJfbncKUQumZ6vF9dsnC9hmZe6",
  "key16": "3xmzWvEHo87NXkdNjxwiBipM5yzy1ruLApxxPdakimDmgcEXrwJqGjVPgWdiaSMjSvozqsFepiR61LLi2Nx6x2yS",
  "key17": "bUGMFUbwbzFUxfLz5HUKZqCEdyD5TQNXiowd4aZMzmoUVrv38gQM68PyVkugnP7B2Rf1zgb2TDCi86vdDv1wrZi",
  "key18": "454hwVM9qVU78aGJR1JqeMfw79eeD4XxavyeSfdok6uy8HxhkcDQCqqaHwL7XDLnc4trnHhuNYrgTAxTYLYdAVdd",
  "key19": "GZkGwYLp5q8JzRMYTzZd1w8jEoPpdgSHaPqVyPSRqN61PKjgTXPmc3VdT6DSaKZTf71G1Q9HzkesmpveyH46X5a",
  "key20": "5BtaRihc11qgRQjR9iGESMstWpuj9hoqvJsNDC8PWPy3MDZLt1FXqJgPiAsmEyRkGEAHVoWXgPHdQtoaJYyftYuw",
  "key21": "3mhV23zZn49xyU9Zr4vZPTJHHtgQuZbAYqJ51Qwhh9L35YRHvLeD5v1PtYNM6gvzf9tHHewLC3RXpqXnpurby2Zx",
  "key22": "5WZC6t66PDnSYcJYkqbQe7rwiYFKCc2qbcYMssuBC7kCQGRB9GnVEr7SPnpn6jY9V5yCrEvxCMgLvUht5hcJ3pap",
  "key23": "3FbrTQE1jVvUPQXFwUgDUUJQyLGj7Wm9yHoYhb4hQH2b9dEsF57FY7tDZn9ttJMQie5BcB7zBND5xjyxxBMP8eAN",
  "key24": "5nJWPVBwqgwAczLGFFpaEKLzhvBnGyjEwU5VVDMQYZCQ4R9f8BzBKpP2KbuxEC7kzxpuZZZ4Z58Ugz5a2yfCJVow"
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
