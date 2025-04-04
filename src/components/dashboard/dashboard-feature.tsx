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
    "aSZy6emnHE4yY38SSYWvMconBPiVuxv6bGwmgkUDQS3HN1UdxbuoYXmzZVBHd6oE4o3qbmQGoWisUjqhrmdp1Vj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qcCfBFPNEin9oRQhGKTLEtZrEA5RddKFxai8q67qALNKLLuYaCzqXMALCJjqCiv3m13tNQTXv7F1SFsVrrtTwBx",
  "key1": "5tR6uR7NmXN7qQzRB1kfe1xmCKjXUPribTcdCFAABfSyD4Q3iN6qZnv64A522qdM8exYSieVrbhYjuxgT19VMVFa",
  "key2": "4QqxXbBiuyBZfFfw9hXVQGpjdqWnyw5PUncTD4gxEwkV15TrLs8AbDKZJc41AE5FcUCTHyNmnt8tz6XVDAvbFWen",
  "key3": "3DJjTydQVk5BxUtooVrZVeKmXTdNeQEnMYUd9aiMaJEPMfbGpppsKKMJWhqUK6UhTfUjxh1tWwVPNXzs1Ry4RGzx",
  "key4": "3W2a2do8DDeRsvPs2GMfiSbH5KxfeDBck7rM1i6wKtm3xv9sD27snkBUdE8sS9Vw4yt9K7fi5VwFXK9e9SMxtacg",
  "key5": "5AZ7wn8XNuTVPJYxog75V1Hctovpn24nojUc1g3n8NFSxVHSKZQigrUan9UkRqmRw4iLhE4mYeUiQeVQAGnT1cWM",
  "key6": "3RT9Ferp8iZhWMgpwj72Kexsr813kDSRXM15WDHjZ2r6CdFs9AMBNPkgyxCg8TKVLjYqJePZ5RBZ1KzhGC5JvN5h",
  "key7": "3mgCMk5pB98hXYM5my6E3j1EBRknfwQZGKVmy3gBaamLf95vsfHCu3aEeMW6sDzei51oEXNgiSnZQixB5wKRt5pY",
  "key8": "Ddjpjqgy3yAFk3myc5eaPP8DANAhErxFQSzpkPp7iy7dFmw2VtjzAgWZqQAsujGLvmhRPN5Xt8xqgCM7k9bfGkK",
  "key9": "cemu9wSnZ3EmMkpgYYN8fPjTXLjxo7YZ7sbA2HXLWmazxJc5RWyVAgZtJjt3YY2pt4bGeUu31MBCgsxG2xBUriP",
  "key10": "2t7FeHE9anJJzpYEvmVg2R5tuBngAdmNJcKCeY5xdivpEVQ419C27KKFxfSfx6V9RtaTD6eSrQ7CgSBa6n455P9g",
  "key11": "658iKsuNv3XBzWXvni6TGpQM3kUtH2FtM9HEEpb7iiRVSqYtzZQwxo7MqVyXUDxhF1b279W4Q8Z1r9KgCuNkLCqD",
  "key12": "J1Rmb2MTmnwyf8hiSDgaBB55xBxNto3LczwexJfhMAeamn7X3RiUCzRRM8ZWEr877RX4MRXVxcc6cydkT5Usij2",
  "key13": "4Z4sY9wKt17ysaPDqmk2nsNXKBcWsoor91Tdi2jk6M6MMh8uxeWUYvCfiVFAy4uXHJKhVoUsFczasBrg4ANhkM8C",
  "key14": "2WXLCvKV4FBsb62bmxHs1XP4HoavJAjF2ydrAAikcVfg1E6d1dNUSk3N1cw6bAq1mpAaWfsV6oKugJ7tqXyLHwp7",
  "key15": "4bSt8e5y2nZS2vSz7tGrzB4NEkMtJZ1VqZQ7qg1PJuuYJCZqL7gNquyzRb9u7tk8rvLZqQiomMKd3UHH87PX7efo",
  "key16": "4P3m2ySvpNDKXsN98a58DordDroqp47wVsvEzy5py9xhVDs9yNirCe3mrYbnrir5wKkZgB9XPwzvdhk1sA8usjih",
  "key17": "2XcyGLBib3aC7CxRzYGUPpXizcAfrBo1nDjydToaMwv7VJdy3K1ypoePkx7DB4HWkE4S6iKrmG277w7Um2RcypH",
  "key18": "53ggbJhXeZQsxmiQTQ1AGARvYdhM1LLBXK83ZmSkqDmuBX3CvUkrhUk6N8SBHBir7CsZdk2VFML8w7XNw6aJYDdq",
  "key19": "Md2pTfvUVkAehXy7ZoRoV1iNf3uvgxwit4tq4D6FD4dyPumRsKxPc5BqitWPtt34769nJ6g5dktfX2ErLBCzw3p",
  "key20": "5eUjuExn15f1r9EQvYBwYDQ9BWVj2FqH9XSHhbP6T8HrWytNRhE4cXud1zmu3sjfUSbJHr2bFsQGy5fEfrfGWTSh",
  "key21": "5Q5Eaj3Y6JUDyKvKiNTfUpKWJ4GNPiRBEegsiLy8hzEgufyLCSiz8qGNeXtFEQUenBrYuAaYDvVG7BZfhZocaijS",
  "key22": "2iQKmivQfLeSJR61MkBnVZzqa1stCe9X4y8do6SWAG3QpMk9NmnHH52gHjnDvTYj2ggEPjfYQ2ay7wygwDcZw2tB",
  "key23": "rXMVdGHCFs7CxE3d9Q89828MoHoxbCmjJwW2y3C55a5n9NoWBzS9GEwQyyZP8qXcZFsMaSEmf6Rd4EJZuAgh9ik",
  "key24": "3UmZhVDLdX3xTygYxc8NjLZ9o35FkCqDysyFFR12fDKcviYCQcCvgXNZdcnrnW9w4TwA7CsKqXBADuFQEFCdQjGe",
  "key25": "5pRn8HV8cfp8CbCfwiwgB7zB4cPJCuVYrdKX4RfrFeG1uMpgDDSFyQGNRtLrqMgSnxYEMpLmc2TGwSiERoyjsKrH",
  "key26": "ow5t8vHAKCmkayDrNi3KLicRawbgpJwbNBwxqU8ACMM6yYHuhBPvpZ94RF7oYjH1Sae7y58e3qoenPfG5DQG3ib",
  "key27": "2GM93QQRKSAPjA87Bz1V82AGrcdNxb5sfbF9XnRk6fEV2riWXDi5LGinMvp546MySQmBpm4FBWyT9Q1BNEhQYCGL",
  "key28": "QMKquy8M5EWtJYus9XuRMtMAi7QGNygRbrS2vETcfqfaSNezYYHMwewKSxwF11j3KpvF1knSrAnzt3BEZZEmcWM"
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
