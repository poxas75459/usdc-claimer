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
    "5fSEJsXqLsEPyYtgUJzQ67vdfLUyZcnSfagMu7WctQTQ3KeLvmrRYmRNowZb7zXL7ps4ttPcktB4p5MKuFaWAiaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xzqhWoruJBaug9XuqHocMgAqs1xq98ciAUi9ACCGh7RAkWgKSVqcvRG2Ld4sji8Ru5C6PzLL4dQcjGdVmnJA85T",
  "key1": "52xJsiXzvxeGrFDzXWwHVJ924kJgPajsapVVxEmLLuZf6FFGWijezdciwTuMYGhxKTmLYdWVejkLFFmVDNqUs6Sj",
  "key2": "4xaYbtGYNSZVy55uVYcms8FE4edMEnT46e2zAvRK2mTpwP8S7Xq8fDvs2ZHrMAuUbDEhU565EPw1FRNE4AZ5jssY",
  "key3": "4qEnq3pDX6bmFnrYRaXHD5zFiTunPpCGkKt9bZfJTZiWU6rXJC2ecZhJrKduNSq6oH5HSCk9QShygAihvLDqQVqP",
  "key4": "2ZkMzGpKeHngRNadQJCZpnK7V6LwGkjRQdvw1e3GNUkLoivmudxkXYdtaDTxWyUTRBWkrdMSzSmUoHdLVY6ikqWw",
  "key5": "2PGVAkgyfDF8wQBtmf8xcoRXRsqWoQozJmEumq7Dxp7TyDXs7a3cez3e93oT1copib34izzifeqrg9ryifpGpggU",
  "key6": "4WxiaBxvM2Jo2m7q9ogc76RGyyzT8RzcNJxob8vSdB6oXDGXhSupBAVoTj1sSWGBYcBCEkGqr2BgNJvd7Dm5PDiJ",
  "key7": "4tSqg4hAPRXxhaQ2fFyzcD8L4hhKbazWfnhZZ1Zkv34qxx9i187wBbFZsJ29Eqe1SdvYpPJW1fJSzkqxpYuQULnh",
  "key8": "pDYv6yVrEyEYqgqFqQgmRV3ndpwkYp9HBr6bdhRfg8BKVx9fnVXz6Bx22xWAWjD5NgWXyonbteJttcxm9krqToG",
  "key9": "R8ig5u9xfrHobcYBa2Cov3nuiNJaz3hygTC8DNajdCpdEPPe8atKi9mepUnkzBJU9bWqPwTxnV1qYFZ4drxJiCo",
  "key10": "2jkr9rADTGfybjBfbhdY7btQEgPkUdoKrwDciXXzLWoYDKPwFUQmwGAnEkFz33qih1L7JMqr6DcYvqutxTaMAamM",
  "key11": "3frAQJThGCbRCNcAhtPYdGETUZPGPXLk5aDeenYbHgktDsYLYnu6A5moxQViDVQk2gnCK3Ya6zBHsvncjkQpBU4y",
  "key12": "4m9XXEWnA3rmmnhrEF6nTiS6jyUYfudRy8hxJn4knjGb7kWvdK9TNAPpL6uDkn9Crf5Z64DsFt8EPjqxU3VPUdwu",
  "key13": "4HqoyXoC1uGh1854FdnK2nzPiKF6eHMPQb466qE4prxzc1RMfDZTfrxndUTg9G2WWEBP3sUmJY6BTbi8qPy8CsBK",
  "key14": "2MrTkeiVbLfiB1NTyUaXgEcooKenAdkKXNqNrxNfS8pXmqzFmfEUmgZzaThAFaeVVvXPvwMVVhXsS55CWQorPSHa",
  "key15": "t6kWCjRboeya54sorjD9cSBQgoU59FBsukQxk3JMB685PMrVDrLZX6JVYbKzwEHohhZvABSMEirrUvbQyuotG8K",
  "key16": "3FiXUYMZ247TCmHKyAaKpJ35c3GT1barCYjmRwjzABVBuFcxNHKiyPCSzcHXhLjEAgFkG5xvU71dH4dVgn91k5iD",
  "key17": "TU2jKQuGZqqdogzQLhP9fetLsZyGPPzNc88rEpMuyhGNzj7155Pk4XBvxUEaQs1qVdDqteKtcZ13GTVV2EK9fDF",
  "key18": "8Bi1WtWMaE5idGWCyrx2tguereZNaJW15RdZS1XtaEqB8tzGr77v9bhC7Q2YtBGhTxXDEyCSdCDdAZcwBNztZKh",
  "key19": "2RkPrc5BcBanzHqPm274xBQGU433KzU9Ze9pGYx2JT4M1X1wmkT27UwRXFGcN3tFBY6iAsy4GBNxunP8wvxu8Ydi",
  "key20": "2Q9Cq5hcpo9rxHmVAkbmo26ADEL974wSYX1mHk6GK8r3rdRZ7zgX77ZaURdefYNdzqyH9nfgb2ADZtvEaz1mWxNG",
  "key21": "3k69tnmGH374bFiNjeHVTM2vMv277SGm8sRTMPdSGKwmNcHc7ypaJVcKVWr9JhQQ4Ut52NwgCVVH686CYGZL5w5u",
  "key22": "XJ6edchZmHM78JHsyprXLTekNBuBDY3LnXkPfMnZHtbrz6pEy31Z7HJg35SD1zm7vzDmX7igC4xWbmDzwxVqJbq",
  "key23": "5j3WiQWHS89krV3b4tKFF41W37hLHBTUn9YDDToGt65mTz751C4vWLVrt4n95hAB63sSiZjxS7vEDaF9n8wE8uzg",
  "key24": "5SitdHgjcHJ5zdJazRQbpxTn7EEE8D2S5XxgjXfhkNzPqqYsBacNab8ZqavR2KatHKdZ5r6WugLRYve7Fr4qZwqZ",
  "key25": "5RCn5MNxF8YQfVtDDonb23VL8X1FceNAuo7nJJ1mENzcJTug4cKoW6PqY4RYF2hKQd3x1SSNTFNwHm3GcA8PrVLj",
  "key26": "5vasAG9QVUi6cmmAwtm6e2oTWYp9ZWY3UsjQh9e7uwsA2skxasK7PJZ2Kvuu2zNAmvMT6Yh3oB2wbMKNShtJD8cd",
  "key27": "267PWSGwSQpmuVrQ2rWUj8iquWEX8MkWgf9nTFoYbxEYzBt4Z8MJcopqmfsVPKag9igAbQhWLpLTGV6XRD6vR4VD",
  "key28": "3xhTc5MNg8kVGHwtE6oMBiS4jrPFQAWxhwoDCUu6CP3npwT8q9VKweSNUD9N592Qemv4bPDNbWQfiQurenAfyjJD",
  "key29": "5xvrJNNZvpgWFLQqCvR5r6wjo9ztWJmkP4mEa44MUR9sHDPK9ja8wZ9iW8rUoAfZrwQux8ADobjMPztuom5cjbbu",
  "key30": "3hcJmz2oM2zP3tEfoSbh31iSNMSGPytpA4MH4JvmTo15BwB9mSTmfntZCsJwDZHTBMbKoMCT1NKjwP8xhPG1geHp",
  "key31": "3ytXdoTdBktm4hhWtVkJpcxW7GPTwYA4gznjMBkahKCLJeZFeMgJ5L4J3cLz9iRdFCnUi2aZ28smphxWB833G8iX",
  "key32": "5KrywZfVdX3uBjqQKzGbUdiTwx3tnk2o4Q1Ds7PWQPWCikSyoDWrMvDjbSBHSVJscYnps7xfRDa3jETSBNGyru2Y",
  "key33": "37uXU8ApHax8DrjnHPfZNcs43B7vZMSzZDrSYsgLkUkFYPu3RSQBNjA7UHYe1C4MTN6AtAQuaUZfCFHbnN2QRAf4"
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
