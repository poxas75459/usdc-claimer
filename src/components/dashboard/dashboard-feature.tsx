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
    "2hqnru4V3H3QPvfTkPcdCF5U9w7GA7tJPzEkGCqzzVdPQynVaBSDFp2giZcnx8FewzF5t7Ej1mxGfGsV13kr5p3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KyhJi1jmcX1nERptnoJuar4B8hrxdAV85mhyedCxLeBx8MaAA5PSHRC78jRroRgZKg2F2dyYBv2BZYhhDnpSig",
  "key1": "3G1PXhCAtExKu4g8KnW4htryzuoUjKMpKKtUPrPVvJom8tzJ2MQkqKejyMg39ZXywK8gVjcCRRddpPiFhF73sHj2",
  "key2": "2qRtkpiXgoz1q42yJDW2wXa8YEo6Ztt43w8XECypUVZ9HzW3U2sE6c8eNXPmjBQdLqNWP7rHy4GuLfVzGGSvaBSZ",
  "key3": "4tH9CBNHE5UyuDcS5TwtzWQnbVX3vNUKpAShBDucaBPYMrAhPVvDJ1dg4C7U6Ngo1TYxPSFXTbjA6maCtZbrrAYt",
  "key4": "2VdiJ4Pzt8LSY1CB21hzqUrKw68Hv9mGpLW5efbwxPYxzijkQ97J8tjCiFuxRtuSKYsuxyJVNUhNiH2ABMsJKK11",
  "key5": "5XRFrTiUr8WCqmRYrGvboKHgNeELMmeZYJBqzX97rh96B6sK5Udo3FU6Q1KajDnqTed2iWRMdzrMZHfcoRzGBjFm",
  "key6": "2dqxVm4iVSktNwuwo6dmFXNc1Ag9JERxJFP2S1fqKA6c1pX5D6eLWwZ96iUwBWgmG8jPjF6RvK1sRBqdZnhqSarb",
  "key7": "4RSyou53gME37XLucbT9CEH536GMGnfW99LHvwfZe2aKtgR9Xi8p5iVPYxhCouJoCwxkDfcHTj8GtXfJCKLqYR2w",
  "key8": "evLVF7SnQb4HZ6n6U6rYsuNLyAWPgYczsWjMH4VeQ2HhLdNfEBRMw2Jxv7Rw8Drva78ThzoPHbwePWpA8fbx54x",
  "key9": "mfqAhaT49dAtzeJKCyohbXYZFhq6DGraYW1jyXvUdN1TR8FaHRa4GMaVULfAriJt8ufnjXDtM29XEufkVnkaic9",
  "key10": "2Hh9pNWoFbPhoCsim8eq8VbWtqB7VevKXXLSU6CvxS3uKhGTWcVhVeQr8Es9KD7za2azUyUcQNDG4MoC9UDnPK3t",
  "key11": "5tiLt4UWrh3b1MSukWitStLa2ozX2kCa1XeW5dt5GAsBPZzxqbc23o343ydRLneinAUEKaynAFQugUsTnnWnKYdh",
  "key12": "2M4o373xZWNg79yJPe71p8GcMeRFYWgQ9EqdzPTTNud5g3RR53nvRqqasC1bqVgVHQSBsWt1v74USr52Y2DuHeBC",
  "key13": "42mgvnVo1Yuy3EvDd4y26MJcotGriuwPmdptb1Bry8GoThwVGYJv59rTYnCB2HLLFgobHfC7qn9GJ9BCjV92HPox",
  "key14": "apvMX62dTpRudbE3qr8nKqDyZ2MWzqqSG7CpDXSSasa2LvGBGxs55CeLcDGivtaDyCiwd2yeh1LsCHrKBrsSHY3",
  "key15": "2Ta5K9m52KV7vGLXd5F4fQeKeuUYb1K9XUtJA2HqACVwYT4XFBouV3YSBEDACfJMGqkWFQmBxBbLyxnAm9iavbBr",
  "key16": "XSdocgTtoKq9k1b8RqDJhRsbWT9tP2X4sXDRGEjSLvo4Mb9s1pa51N4HxC4bH3KHSdSLFt74LUBtpzRuTNS8SNM",
  "key17": "3PaozhwtNUnpAPJk3v3Ci4ZU9mHMP6CeaM1q1M68hvLoPo8AyQLrdQ1qAr5CUmXjxgp8HUxSbfuKQvXBoWCuNZeR",
  "key18": "Ly4KXmMgdW32vVFymEW8fPv8389KJSG1AtMTV42etXwnvF6BZxZRyrAqepcGHHDCyydmwxYtCNQmmKcpnj5Levp",
  "key19": "2vzDHVpe17yV9Dm1wWTqxpoij8Bgd1ooTMhcMap1z2c7kNrtaDJJioHCzRFJ5JT8Qko1iTrZ3wT9UKomSqYZmtao",
  "key20": "32ysuwkCmqradZQYVtSqYUU4PoyJckP8bAdeqeZMjBmbsr9JAdPjYBx1M4UXyL6iaQ5D3dXtaR1cCWJjevJJMqZU",
  "key21": "dXUT7b514M5UQ58hsQiQFBRBMLMWxzFbXmxsqPn9Gy5fYaiC7vxzbqY85QtS1zBJaZ7WvGyaY8vq6nHcDoPf6tk",
  "key22": "iP6jdy7gB7CfSapBEeS54sPHfzKpgLgEbJc2rSFM7jR8p1REAdZLrtKpKmuQx1KdHbjyqxLrURyWsknoqoVb5Dg",
  "key23": "5C4qPC9YW32ss6bzsk7seCnLwkEQ6FxMPviode9ZWcdufCZPm43NQi7NCrNNxdKxn72NWrRJwa5CgLqs9y45jzM2",
  "key24": "4A5XGjRfE4Kdrge2Ud1jnKzfr2MmR9nC9JYWtJRyshMxVnsJ1FHRqaf1J9dmQ2ZSVoC1hkhNAvyrtcJH4GNcsrL8",
  "key25": "XKUFei1X3jX31KBH15vKf4CZqRDZSXHHHFeWf9vN62t2Efi6VXtq9N9MgqwJec4mDxGjKZn745nWGZjNSrTVkYR",
  "key26": "jo7Wc8d5HEEuM7JbcG9eiRYasvEh7QnS4JW3S2vhAdqQHzhxmwyYUvCcHPBWbAXQL2JRYHkNhBy6oQUetCPyrhc",
  "key27": "48zXpc6zxYhXQpbCS6xwpLNQ6yzf75GQRbkqtZfYSkGBtf7TkAmFafeHZSrSH1urVmZvzN64vZ6H3zX4YpTTDrPx",
  "key28": "34mHuwDuNK81p6jGRWmbWn9wJufLpYNRiuTESZ69FmgD3m5MDC6phiRfuFnGMQvyqg7NhitFsaTNULAEaVLGL3af",
  "key29": "2E3bhXNGVgRxXWnE8sD95xhWQ75gDdjsoyyR7pybPfZovdqruRdR3oZMfE4kzr78VwpN5ANysXVpamAUkXNTaFnk",
  "key30": "5o2Cd4gjgHAXv6uRPUDPJu5SjDYU3AYz9rUp7NuobcvkZ3LkfQD7ojHHyR2qTm9b7192gG2Un6yjbe5FzYJf3Bf1",
  "key31": "H3GSP7JL7DGDzszQusa9TtTu85HsyyRT6c9iRnaVgZbnjaFtJForD85MjvgqaYwRVT7N9cKzTVN7prytfaWU3Ur",
  "key32": "5Nwr9j4TTSKC5HhbYHPjBPknLMzMSqAUk3Giw5AQ66LT6PhNod5WziZDEiCSKXM3gNaFM4zp2x2NzQhkRNAEm2ZA",
  "key33": "3LGmP5R8jEm5TVL5KGwW5efUWvQ6hjpnrdsNYxQhbCMPDjS1X3GsgCYFpTGw1ucbDekCrPzHztb6mSvxoUBtQwf3",
  "key34": "2PmZogV4Ng97h1ENdNB2e6tE8oFUJm6A2uyNHY9TTSqyra8hQ2dUYuM8nXL23mM5Ej2M9GKtipXVTurH2VF7kDMr",
  "key35": "36jHcULirNrJAwiif9mzqV9tZRVKBGKgfD9SHwXEoqnBJ7bhK9im4TnUgsw9i2NV54YLCtv3UTgHQYBpzMyuvEcH",
  "key36": "4SAhw7dgnymU27vAb5mJ9AciHGVREWzDvJ4tiK8TXcvG39M8AA2A9eC5jeBvoLWdg3YV2QiLcS14LmweGFnf2LYF",
  "key37": "29fuSnpEcoN2QNHZUJgWEvMq4F66raV1HDhQ8DmkhUCspLERgY38iwwdTxeFtoAhbe6Uoxud4K5BB5Wn2SRYawoB",
  "key38": "A21fP7nTNc1h4qPkourWUF3Vt4NC6eQPY6KG5eXnFfwDcoVVBVuzSrEHqpg1THaTW2p4ofRjuigbJBqry6VxDwX"
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
