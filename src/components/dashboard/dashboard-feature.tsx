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
    "5esKK2t2cKdLkypopWPe6vMMReHz2Qw3w2X1RNVrFPVnrKChuBgifCDHi3ySmkS7yu1JCw4FLM4nq1pfx5PmGhQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LDGnk46by2H62rRaNpsxb71Hj2XWxW2oFaBMtCCFeaoLYtAzuWJ7c7vjiacEGzLRQQiDJLcqKqmoT2qr74Md63c",
  "key1": "2vZ5Utv9K5h9JhX789zCMrrBWuz47WyZZMXmjPcTKxBNLjuJm1hu6SLaTQ7rMTkUY8QiQVpxkawQyJWjsMtbETqY",
  "key2": "5jda4Gx7xXxfyjJUKW18Rs9qyP6h8KNwqjpmPHtYmBSXApcheU83GVwTrXrtBeh6BNAMcWhukpQ18D46QkiGQ5cG",
  "key3": "5bd2sxs8ojr2n1ypwyMyhG3xaZxqTwmc2ci2BWuGRLT3i1Qs6utwCFmKevfy9XJ4JLbeuQsai8Mx8wohk76Ybj9Z",
  "key4": "58Ph4Mgnj3iGRRQEusE1HQN8YMrSzxGmse3aB3UeqPkFJQVQyT47daEXMzf7Fyynn83Vw47PwkkKQfpsASNLDPZJ",
  "key5": "241HDfuvYDBUwxq3JBivRbj2WbGiya1nWgweSdGqyXPhNb9eEgdLYVTjhLqVYFevX4PiuwnFNx2UscrKmkBhxYhS",
  "key6": "Geru8mHHK7DSSN3Aci7LmQUgB7EBvQpP5gvrwvjPmHVNrPcZtc8KzxXiGYdKeu6x9eLuTLnST9zE4SKLKtPeoAZ",
  "key7": "2tfWXCMkFeASxgodqB4Q5XFjHSZWhQwJzxRNAAkDf7cyCwCo5UJ4Cz8gkoLTjvgjwzRFqq8zLWoR8SRjxu88QXHF",
  "key8": "4hZAfF9yJyzFyFNdGzzFCxyURULCs8ZhfcCcZsLEU4VwEYAEVjsRNiNPuPyR2uFCdMxKrMdZCtAzUg5suPCbRWiU",
  "key9": "6PguDmNt9C17bjc4uPGjDwekBve3RFCNxSQw6X8S8Sfz8se59LxyQ8NzTbHBfnARRX6wdQi5e5rFFRJ2DXsMstS",
  "key10": "5VayYNwnqM4hfUgn6qTXYxGFtcQtkiGfsS1aFB1CWeBRr36KohMakz66diPXpNxuVwwex1eoCxHrLnN1McSP9mQ4",
  "key11": "TMHyz55eSYhJUECjUqpBWYtd7naSfAN8WK42E5xsHKWndBWHPudvYFRQ6juz1Kt7N8Hnskiidu3FV6vqa924Roz",
  "key12": "2MikMWhBLMAs81a74dsdEryEA2E3DqBVwk87o41Qe1rQYrQi9zAfaL9BBxsWuUQF4V4DrscV5PpfGCA3v8JrxjZd",
  "key13": "4VRra7x1SkXP4pg9gh3krBNx4Zi892VBvUuChXtP2X6RToEYbHVEJYPhdQZnqYbjRvqzsBbha9beFWTjj4aCSR8S",
  "key14": "kL65yJHWTS4GLgud1XBM4wYqmk7d2zJGqRv9Z2DjoHUnfTJ6pZ7wvSvkivj7TLFuRiY7vj2k2X6HgvsBEm5pNkj",
  "key15": "3Us935nyXkBULbCkWMjVRhjccja4FvXq8rXhGyFny6HbeBEoFvGYJBYW5J6Mm8xJa89XrFJ8je1rgNPBT6f6r3fG",
  "key16": "2MCx8U7aviM7EW8vGgVopAoC5uXad5Vgxh36HvGQcNbegFvCuuZt6QW6TDhjYrvgV5uPX8obxpwRBSH6CnUd1bSC",
  "key17": "4rUwWoAPh5yHp2E16qErWhyJfSbfxwwvSJr5xYEULN56imZDty3eW8m1wMDMkpNwyh8A5PemgzZdyyJu7p2rkCYh",
  "key18": "3ZKKsWrD5G9B3hT1cKU3uGh8zKj24LzjJ4nKkctGpd53CRAutgznV3NZNEY1oHHt4RLbPTA41PR3ggXV87M3mhEZ",
  "key19": "3wK9DB9WpeMmw8kMWLBRdgpiWjDhQ3SwMbhbDzTQGBMWqVxtcALeU9cTadD5naBi7VPwzBxoPs9r5ECd3r2vrNNE",
  "key20": "ki6vr3sZB7Qfh6KtAg3pu8nssCjghznbB3dm7dV27XVWXFXhhovKMrJ6jYNk9XBCdWLVYorbQ9MKsKH863693Ko",
  "key21": "4YkexUCrj7MJskprS8iq51AKhAzMqkVovP83gXE4N4WktkudQLQsNf5hNh7gzQjmnQVGC6HDByb7Ud2zV4PycGTt",
  "key22": "wexFyWU1hr8DKkVTsWXqujZx4Gux7kJSWdkB7jQdSGX1EuBLPtXoZaA3kHJ5hPrZbzM8b3GX3o2BJMkngjWk7sZ",
  "key23": "cRouaS63sTF6M5iZUABaF2SHNtJX5wtwXwpy9KCQVcBFHbFVYxkUtm4TFfSQqwJkCwDupQ9QFZPTbxXc9xxQHng",
  "key24": "3J89d6yRnB24Xb15mg4xk1ZR8WsRMU3Nj1Gq1YVPj3L53M6xv7x4zPNurgy2KpNaR7WxmqcoDMhwdpCp9kxc9UdA",
  "key25": "3UiLJLANZGbEfgRNH7pnhAYNmn3Hko6PXrpR3BgCPdpcyS7nvBs4GC18JgfEsJikKdkzta6bhtRb8JjqYfXUp1u9",
  "key26": "5nz9Y2LZrx7zuxRhYf8hJZazXddn2cs9eSLHUgcziSJ7fUpHk1euoEneNVgL6vtFfrKQLBM2nwUZ5JjzVm3tf5BN",
  "key27": "dGQEVJUUtFmQD335z5rayt86DNAPhMYnwfMWnDKKgGnNaz5h7UBwm8mz6Y2NfxMssYeMTtDNcwxmvQEgLXYUa2Z"
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
