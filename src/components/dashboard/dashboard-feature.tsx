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
    "568ZCYV1RUAwaw1yqCuSrMLLcNeZrbQ2pbs4K5YnS9LnobPddQgXHQ7KFne5kH5TJBprcfEep1rg7vfDfySTSyFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VXY6T6okrt7ECaq8pufrX3g7rsvRiXGnEHDDv1TJCDfFCGakEm8Kz3pK1VGfsQR9KKNmHyrUAGRsrxK8y4bxzMD",
  "key1": "BxGv9c3a3axHHViKkcyXGRX2TGNYTAfZec3KLGaZYf8MbcwCnZEdzwEiVpEceEro82QaiyicpgsZGUKkVEesPBt",
  "key2": "JyYbSaZzLeSDD4fSRyTsgDXwwyQMkpniYmx5BHVYEdqbQwiXjMNFpTdbJoCZTRKxTf6cduaeyMWuGoG8fnDAeoS",
  "key3": "4Lcgw1w6L9TkyS81SNNZwKMNTmotK3UBe39cpAs7Qadco42fN9DM2skphmtvFKynE5f2SEaMzu4RrTPZXoxQo6G9",
  "key4": "2avJjS1QZf9rYAswvdoZkLUKrbhnPr3cKZxgqH3cwzB5EDFZFKnW382pmagL6774sKsecZGDgjBDgCJe3ftS6CQh",
  "key5": "4ZgrsqnCLWftiKj8ZnfN9WpCsDbNmM3MUVpKGZu9FpKkHzv5aDb17sHqFuvjuB27SMTAMYWFxLaegGKDjqVW4fUF",
  "key6": "3ZCEPYkn2tahx2FWLaxiVr3XZBLXdj5m4B1pBNz2mdkib24f7knRANXWPCM4YPENKAeo89tLERiA6NofQXvonirD",
  "key7": "5u6z6SGxdQnR1DcoGq9gPJy9rRBrCxwBejk7m6QZciSv8hENsqN3Tb47oLtUtVyj9ncpQa2jztM1ipmftA7nUHAJ",
  "key8": "92WpfjUVpqRTu1SyToDFGHeH2ikiM4r7ZmVBquKhPCjEJqQgGPFrjHWanLqJ7nvkVUbpPvQKfbYoeC5oNT94KXv",
  "key9": "4m2K3nPnGXA5v6Qr8vXJT5rNEz3v7oxWCheHxFBDpbcAeNvyuThVeKbDp6z7FtGjzF5jE6vnBw6DzhexzoayviS1",
  "key10": "qH6vURXybzpodpE6fqgrhbRmfobig6C8rmFcjwGnTmhrfFMGBn6MckyUzK6yWEHKtovoK4caefmnVgoytwAXDjE",
  "key11": "5sBq4YZaLgnA5Axb1uTew9AVVraCrYv1M2PZVfKsBMnxjSSSDgYvWNq7MYLQ4KSWMqcgpXmF9iWxkGvuUSY3SGXg",
  "key12": "4jV5cGjRfNXJBRK1QYEmQnMtfpPHjHuB5SBaCFdTYdr8KxfMWcfLJqKur1EZDk33KyWfoU85j6CurhispyoyfoNs",
  "key13": "3y4XCDtjc55wviR54N32zsnafMcCqGtC6hkQNLeYbLMmH3Vw92DEXPTUWCyEvgoTviFUUr5emqmtWnPn1hLiH4bs",
  "key14": "584rwSTBQYNszcsrnuXWX4Ysnzptu6f6Ecyv2yTWaD32bf7ttQHCoWAZyEBFYcuRkykkSGmjpcnusY8rBaF7Xc6t",
  "key15": "5eYKhY4hQAd4MsjUUvPvGpJixWaY88e6tPzAjbQ2ET7kvfiAZyhJCv4VYqc9jojzbZmbELddYAwjcWAamh4ECwJE",
  "key16": "5umiDoPQxhpzLZ5XpjwHPxwMBF5URGvbQksFgsRh1DFQtwKmswf6VdY5jJuwCvbNoiBNYHooj33AbS8RzpNgn3b6",
  "key17": "58vdHhi5AFhyd7qFMacHipZ2xJBprXVaKXhFRNPiNGSd5zBsfN7pvbpmg6FN9Xxn3BQWVthoNpeMSdGqk88JoKfT",
  "key18": "41W1EfFQPYKKVBCQG7FL24ti4y4Eh1QPLib7N9Mozu91chDEwjMFLjmAskcyeZH4XUoFJfssb9ynGKTzantuipFa",
  "key19": "4Ybvv3zDNvR3VB7ufGNVfwFVoyPCBh18NXjsQzt1rDVMZNYRYpVpkBaun3cNaH16fB5B9gJK2DgN9gxJsdo8eNZo",
  "key20": "4rsij5AQ27bgZEDxsmVBF54CotFszHyXJrUH2eyVMctvipkMRfmY1TKBsuHxyf6QQnQ89L7PUWE7ve8vJp4dcavA",
  "key21": "3sSiDjmkLZAw1hhCWuV5vWVigDeJtw5d481mxDBwZBpajgYxnFsmDd4XBzFrmr8LQXwHvC68Ea3LKVjbHL4KiDui",
  "key22": "42rLYQrAGFjb1g2KnDQtyvyLNnPWddpC6i71xwGav33RjEJB3ZMUv9svRFeRQu8EP645D2haagWzR9BMMGLAhMog",
  "key23": "5TtZntMCvNED7NzPxBKQdgXD6nrX21SFfy6huVd3D1KMJtK4dfwhndVs5GZuQjJTw2h6uQz47Nipt4yvmHLmRTEY",
  "key24": "3Cur3pfc2C36mBNxMQLvoRRKitP3xcToctn3xAAV6w4QLkrzy4r42VhNVouAQNdQyZA5frtmTBVzxRHAy5Mba96k",
  "key25": "VU79xkRcer34hfYsz5EygVCyWj8oAmMFZKjhisBbUDNkSuqSP9Q4rnhiXBrGoWyGziRjGbjAVY5p3VcaarfB9v1",
  "key26": "5B7HxEKJ5sMT7B3ynZar3CkabTPXkcvYFBRzR8ZJvFC6XEzc79sJRUMpCYwb9kkAYwaYi62pJMvAB6ZhQ3VYbxdZ"
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
