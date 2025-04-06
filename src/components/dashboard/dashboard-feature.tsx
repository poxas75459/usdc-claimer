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
    "5ixakc7JQYSwRRpfiyPRsrNMNp9ZsUXZcRaDCkPbnkiW2L9oGUWVxcR1exgLJdk2751mAbNBJG8sKNqXryBnuyRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21MzByH3e1cyNbMUA7yJ5b7W1fM6EhJhW8boDav8r8cNWy91w9yxT82RmvrSeugfW3RUVCRda6Q8i2jKDJkDaAkv",
  "key1": "4yLgFNXgV8x5hpCaqWcKjqDGNPtfBYKDFqRg5sMuGRdugL98gnKxcSbvyqZZs1wUXjdoAxaej82GJ15YfvmpFCeV",
  "key2": "5uncggrQvakvKDDAjYSBwBwiRqXQy9CSaSxsm55iCEiEgP6XS61TvG9bnFGJteu2rzYhcsquWbkGwstxy4mehTnX",
  "key3": "57p5DdVhtzCGVSg93axj95YbSZEBytuQPAmgZsY4xEThyqzBE83uvKsSyuDwYg9bJCV83U2UDTVUwyB7kYbD8tSW",
  "key4": "4q8DYfN8rPiktcAThpz4ux28gqiwd6wiAVw3x1sTuzLrrrLxzSGQdY6AD5ZR7ZcXp4d8oxDdD7eohR5V1FL9Rqtr",
  "key5": "5G7cahNQX2F82YTCviUuN6WGp7Pgifkapi8hFEoYz5Bvuhq9NnRDCeCj4EnVkaRWLoe1vgUMire1CJKqm55539Vx",
  "key6": "5kBE23UxVBVCobX5P1XJHRHo69niT92KaV78jwyNp8hn9GjpMntHrYv5hRfnebfXHS6fpK89zT3SjmgzwKC6d6Sw",
  "key7": "72tyQ97agXf8BEgJ3LYRa7LC6vDrqzBF1b9EsGc5pBJNT3udkj7vwzGo1tTnxkbBJ1kHwEfnhmsABopQAKPUsVb",
  "key8": "3XhWh4y4hKBDrxTESWSqy6ZP4AJNDBLS89XYE7zcNAe1TqutFVysbUNKCvrJBvoxzLCDvVWhBhQCAyq3TpYesZxp",
  "key9": "dVA6sDs3QxnfqYvM9471QQQKCJZto9QaCH9JxcRbh4v4p9YXnaMvnDmoCjCJzdfePBYzjbGF2HRCgjsW8Px9Sei",
  "key10": "mDKTEZV7LZ7J4FmiVvsBufW5c6z1mRpQzkik63V2sjXw61uSjgMHq8AeMSJTSYmkTwzgQ7n3go4nMuT345CZfcM",
  "key11": "5LXtnFk2cb4Nz8cQ4Szx2YDEQMr9NB3xj1oEeAwixbKPVJKPZ3ozy2w4Ypzo1XNzdicZpAEAN88zhAhYsKcaW1LF",
  "key12": "5JJLwLsRoJJg8h7nUaFpwmpMmBJhtNumWBz4NLVnYpMB7WjsoeHUGCoys23gmu6j4bNa1XzJKfKs5k7RP55mF4hK",
  "key13": "44f5USwLECdeUuM39Kn4cA1jR2fC6PjzGmHqLeZh9Ccj42YtYMsS8Duz3ksUvDCFcBB2pkbdqFFG7mWb67QazPZt",
  "key14": "2oWWXxyQy7hwPMUmqFwisdXc3KzdtpbMapGHitXQSHeAeqw8BCG1WRoHZyW2zYUxQW6fagEg3Rf4yvMtgFhBFmHB",
  "key15": "2qAqmWCbdT8e35kxR5iqKJMRDbZRnjBeSRGohy84h3K6T8V36vBmU1YqXPBiMWs9B748andEscGAUpLyPtVsMVcX",
  "key16": "24xKJfiR1GzyB9BnhabRpEs2F6m7nW4SjM3KqKVQGBCqJAWrKKMXAzzf9vWTbqQz3DcW1tbSsVSBMteztNre25Jg",
  "key17": "s2nJC5R6yoaq3nhByZbYRA6nB4CJdHpFVNhqsiM9zpTJLEz4SPad26PbLDGFhBvawa4VCg77xgBgzpKQAnHjh6A",
  "key18": "wzPRqwR59wAz3daMbzzFMU6MM9gpBsdLPTTPWneZtk4YmCBAxrzv4qASqctu5PHb8xmNxBTqyAS64RprjkpHTJE",
  "key19": "4CzzA1yhCh3dJyjGvqvthvHziSmoXKa7fYxCn4EhHWkbjV9onJb2sZBTbPqu1Ebtf1Qk8hcHigXRCzN15Tk48iMR",
  "key20": "3LziNk6DKEBE7XWimtbCADZYhUCRYuvi3gpYNS6ntJmuXpaKrKbQa9s9wSx3vzbp32nLy94HkiMinFA9u4HHaQ5C",
  "key21": "2PecM1wqNTpHxGRnvs3gimCPxDnfTyPT51tjuUsynd9rEhhWLWdSbmqnn22f8dQm6pqms8A9frHxW352HYjuj3w9",
  "key22": "32fedFttGES6gPpcT5g2AXkUa629Hf5smyK13roTM4Mnh9PB7aQDn4w1s5shz2rJQtGkTcNU9LwGt8GShJvv3Xqg",
  "key23": "3bub551KkkveSgc7HaTwRpFv1jAabeJkaQBShkZwdddUXAacy7DgCoC6FPrG9SViYTVAjYvsR9JP84PJxbyfX169",
  "key24": "4uxizHgzEuarZ1fCRp86x7Dt7vQ4NAFnsN39smHYJJuvsfaPXXro1yBy4xifokkfEe6m1XnLqY1rtzKBKFfqojaP",
  "key25": "323AaiCmBM1DnuqCcw58kqtSNpy6NzSABZWauTociNoUDXDWBnzCs66Ded85VL19bVnA6VHzQRBPKDinA4B2hasw",
  "key26": "jyTazgMjMgVpwNQ9p4bvJfRmTtkCMpJjFnZd9mtvhCs1NRV3QCt32SHaiXdueQQUXwVgsZHjoiErK6M1WVwirhz"
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
