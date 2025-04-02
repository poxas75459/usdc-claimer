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
    "tdDUoEYcr7Ft9Jcg4Ud3AX14fFARnGsvKncsSSf7hS1e1CXZeu5Dtb4km2fs56MZp4MbxYi5FueY2aZ2GmTRNqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QQkJBS2Mpdfe5CXM34Q1A6Fj9D7pyj5mu9XRhbg4h13TTB8MzeXSRwbVJNdf2YGdzsJjgdp1DwctsoP46XSspR4",
  "key1": "EmkSUp8Vg3jHMXj9DfYpV9VK1oKxGAsXEWyW9Cha7JsrhemSKsL81BNz3nXcNUynn6q61f6sWcLi91qQGoNs4tg",
  "key2": "3Drtc2CN7hbNTre89TE5ARqbzwAFJ81NGfeGgm3eh8LUoQ3PFDJpE8vhCB9pc64wUzop1Gz63dMtiNpzCykEksGF",
  "key3": "EWKbd1WJ4up3Kdp9Wk6wLgmCR4ABFwkMzXKsBvyj4Bwr2FqhvMfktznWxDZGsYn9hpYBpPdcZdXiKyXFSvpSJ65",
  "key4": "4LKiJaX6KjGuWMWWWPmGT2rPoHqDMxBSWXv3TgTUYzsMmZWPQcJAqXinBePd6S7EeTFcaJXPbCeJEMhARgy2NQNK",
  "key5": "4QR9XZFaHmxxEi4zqahrgrHtQ3ivLrhmn4fQke7za1Ddj9d6Sg66UMqFjNTRVmS3dPLLTkHvGk9i6XGZWaHJC2MB",
  "key6": "3LWtU48QMZJ2Y6YWedp6yuKsvCHkJ9CmLB9NpX9TSd4KUvJyewGPk2jaX9kSwrsTC74Jj87X9LUFWYuULqfp1Sfj",
  "key7": "56rfYfiY9US8sDigbkVFE1i8cmk9L9jCo1rAKkbFhWJfZ7agV3TzXxyWLZpVREAjy3e4d4RUWB1PCDufTo7kjoha",
  "key8": "3C6LMkySm9JiQxbitqfsCSCXTM1TbeimYG5YUhqhaYSn1yC7MmAzLrjAjoxojhhvrPci5XJiej2x1zQCK6j18Ldp",
  "key9": "3ZAhTx2fwZnJh3Z1xnQg3DmESMC2uTJxH3AicJYbYUprYQuFRWkuLp9kBPw5sCDuNr2EJsv9eq8ZA6aC18H9FSLk",
  "key10": "FqX1Zrxxq2pU219epHsDDvUq7NBnFEfkHcgcsBeBS9n1yMoz78Qfak9Fkqpfs78LFVF8s14FDaun5Q6vqXQwCfK",
  "key11": "3oVgQQMg4NH8FbyNGCXD2bbWwxo8eVG3kSM1R7zTXhUbXQQ1kEWUCEk4Dmu6EhrrT6qcLfPsN3bfd3c1YNTmEywr",
  "key12": "2jT2rffaU6UkaiEEgsMVPdBooNfnXTqJ7VmQPX3UPKUavman63zacxrg67tUr1CM8BY6bMCwzNqDamGFQ22v5oHV",
  "key13": "3b8cDbJEvaQUmayApv3ZtBWBNAApqzYvAkk7ZYkBTuiM9g1YFf6eaD7jrKWwkFwGn6vgJLLUmNz96yUtJnKwZtiK",
  "key14": "2TMYwG3bqgD8vzeZYsugeWNaX25A4SaDo8dv3quH5ifpuU51CGnDw4FQkZnuNnNXiUpQoJwFAYCUmzYfqWXV27Y5",
  "key15": "5n5JwnENC1JddK3qYFWJ2dzSKFhhSHJWAc2u2fRNjnjq2JBjVKuMoAVXyp58ZpW1oFWy2bcKAyzHRNKNasihntcu",
  "key16": "4UVBMuMhE6Ps9VvBqbyqJooYyL7kKQ77MUPdmkoju214UpNza69xyqDNJsFHpFxzRdHZRomy5DDoC5bBJ6xtNavz",
  "key17": "eK7N2AkKi2Y7aPawUzDNxLZ19wYFeaWt3FNCFGmxLX3EsQsqQ4CfvVMXVwVhi1BxTtXp1wVpC9EnV7DoRxGkVfu",
  "key18": "3NQRixuiwNkMbcHJuTjMHiHZFdSLx4x1pjpm72cer8zeBj4ebPQ65SYzshDF6oDE5EC2nCTAh1pRXTrysjW8j2XQ",
  "key19": "4QF2bRqxU7pfDeaqJ56Yf2ybCR1vH3dmfv3ouQe5kyK6Lib2HfutJqN2rSe48ivMFNJ4GSQsdZEnXYWCGcRVBdSp",
  "key20": "4fkTcxNBKnagiKZSKs6SEvVKNBNHTh1YoLjuk5BZ3h9GqvWisjpL8wp8eCHh6xrX2C7uskM6dXiYS3DYb8mZXZMe",
  "key21": "28cpKTYUCvT8GGyXeVh92umeN6uZwbmKTWiH2cuso3RAySZn6BfrdB5GWPY1UfZKumMtUhPnWFjjydw9QAEKuWUm",
  "key22": "5YoVvDMqfUkCuj7MARZGY1udzXee4z2hnh5WuQtvHvFVULtE54HEunbai93EwDJvNN4a21WSwbt1f6bzjDZuRNL3",
  "key23": "4TqGbejHkLSeithsfWD5RnJcf4RjG56Qzstz7YFAE893CEBeLUEGfAf24dbRA7183mQAQ1zaVHcA1shf6V8LaG4t",
  "key24": "4Gkh939uNyHp7ZxJ8SEZfWvmJAHY9Qt5eSsr9XkMBUX9edDAuHfugYxhxd2kjwXpBwfrqERkfhcQeZMV6yR3wqMT",
  "key25": "vA8nZRJGre6MVY4dfJx4bfdxZRdeKJoSCzhmRHcKfKED3yUQLnDcFSDXMzybJ2gxpynvikCayzixCCRTsTWUbS2",
  "key26": "3R9L8Mnu4RNTJk7zbFxvKEK3Gbk3MMBH5amsUHyHE1BkbLTzq8hBpr7DihXqYgjwk5xDJSXZeuaLUhmkatnZv3XC",
  "key27": "4siUkZYFjz9TjJvuiqGH6PAJotaFE5uZsJcDBTJRWCSqHQRpxBAeGrr4QxxCUyZLWrL1mEnb4xq712ha8dWQrKBN",
  "key28": "4HGG3ypqqGK1NQx5aSBXGUESDhzVbCDSL4FmLKksTSAwXZKxu5x1vLUvTKZiyTWZGyGyWjS5SUjwqW8AmpB3gLAW",
  "key29": "2c5ayrJ51RmUoEFPxwPcFJK2qWRympnk7YDx72fTcB9oDdVnp2qmbrhknDrVWQuPSquVFM7ur2TmrDUo4VJJeSsE",
  "key30": "CBhCtj3CNKHuruBnaCHzyP2dxCSG2QRpbv6oMqKDuBUYL87pUKtiezBvPrrqqBdq2CQHbuA3sdPjM9gq8d9hFRe",
  "key31": "5cK3BLgsBLnaW11rHhA2ZHTYLU4DJyrq5GczjUNxm5YRoAeEh4sBpgtveYGmuSWqPib7z468vMztxxuLCDD4TKE4",
  "key32": "2QsawEHpU9ArRy1DMQQ4zyknpt8EtMxHcz6jhauotHUL3CsV6KbRFz6iw96krBQWs8vTNkq6y4vGeUFAQiFn7t6M",
  "key33": "4oJ3xFEFyCivEQpwvLWtkmYRygxhrG8vZA9rWx9U4ArvUjkicJQsRHEHXgYZjUZyj2Arw1jyQtE8PYx56Lks7nYW",
  "key34": "3NJKJrwoBtFkpMvw8NopFp5unsPcUcc7TW4ybRaVbKAfWyUvoCSayLeVWTU12J9T7qRWypnkPVWjkFcT9qo1KH3A",
  "key35": "4KQRxSsuvPhLQgVHEJn3Y3zPG57eHJTYSffUG9afQf7MxamzWt5PMfEgU8XicYihvSbcpDphCdJmvK56APcyCwHV",
  "key36": "2nwRGgGezKduQ7f8gepr3CQhRuZA7YFWEAM9G8MLrizESpEZmGPnKqaeRGQadQ9GbjMPXjJJm2qNwJ3dWin5zFUo"
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
