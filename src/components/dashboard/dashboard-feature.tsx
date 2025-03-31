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
    "5U5v6AnzxV9qCPeRvXrfCoPApswbLue7iEUs2HXzPVubk2tUxcfMJqPfTPDqKPdi9e4BbzTsx4jU9PCSNgayVJfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FqLAXCoBQTggpKmzgmjjCbnnKdWJG3XeP72Lu3ctAcroXfNqZsagDpDWRJBtLon5r4LBNfkpznRDWkEukxsiYs8",
  "key1": "58CqtjQq1j3a9MQh3qmM6orbKK6Dk89ZF4ojEajYr1iPt5gtBg3DbeLEikivVCXkSHbsh5ahxjDBqjBBY7wMkpp8",
  "key2": "3sVvwKjNczF2bk1en2DXufPrsqkTvJifJg3YNqfHaU3vwaJ1ew4io1ndqtCgG9g8Q82VqzM92N6TprV9ZKxJGkFd",
  "key3": "2PhkTfVWkRm8HMKmPVjAe8wNtxHQjYncy7hpYj3nihM7wPGS6WbB9pomJuxRZnS6pKQtXTe55x5WxAnVW1EDnbLW",
  "key4": "46CSLPg1wapUBsSCf7tcm7kWhiNiiHnvNRZrqLWTLXPcwhVzhSzgMxRU23gB8C4ArNqoqyWQ8JKEHuSQwoks7iex",
  "key5": "3TjUy8VLRWfPErbH2DtXh3GUgzhexZYpdo2pUkn7oXJYDaxrmwGNvZ5HWHZCRgMm41sSjWtKKMTZXHneX28csPeN",
  "key6": "3vusEfuy9dbbvbsrfKwquJD6djhzTrXQE2VTPBjPqqwJtQzxkeWuHqh7SrTtUFmGf6v5jA3BmpMb4oQJmPk69gFJ",
  "key7": "3yUK8Btp3428a8NWjZMVt4UFmXHQhMVSn3AXRNvi1JLRPXVmfni3awQRT32fs6kHDU7xcHuz987bK2f97w9aRYAz",
  "key8": "5PZ3tShC6H5C5kfTPBt9maQAFxaH5x3GzDLWN2ArRjvDxRi7ukATMfHUrjf9Q4nYhW9Y8c9BGoMWXGfEFHeRVPRh",
  "key9": "2wawCYeBMvtC7DjBRkERw86RTK4pYhWfqst8jzUH75P9PiWs4qtNre8rG7kKxk5kH9TskjsA66UGyTAGhtsApif5",
  "key10": "5wuJs7QmdMQuAQBAfs5EeZjxfECX7YmC8aj79FjDMZFLfsJHu4UZZi8nx5YDvZHfropn8XTGiMUivS7xcYDpbfHL",
  "key11": "5CYPJqrJgDMoj8TxEue5im6JxnvPHZSS9WrwV5A45NXSAgZdMmpXwyM8StA3Eb9e2W9m3imQSHMLTUNdJtX8aHey",
  "key12": "oQPZ2enXUPsuR4pA6epajJqSmV9wjVEA7bkScNbdeDumU58gjBSiduz19GAtF9ZiFZodHVKDd9H4Rcz34ApeaxS",
  "key13": "3ixn2gLiKB77zrgre9iUHCj3EGSTDqZ7LWXRA6VVGQ7bVF8P7mpp5aN1kghKtQTzfXzCKcTpBLDFtLVzUYXzYTNz",
  "key14": "4DHdgYgrYB5RMyfshn2aPHfzFzFRLuEKJk9TA11E8okctLiDx9zKFiNDgwHK8FAju2TiBd5uVeGLKj7NRtZkX31m",
  "key15": "5yK9Ryf5CsCHFXP6ZMoHaaGQwAtDqjLpwGfwuMTiSHKjdbV9WMTyszcUvKVmHBzFWBhZWjBAcgrfb4Rs8d9Z25ki",
  "key16": "rFJtZaTDZuVa9kG2oETZ5TpQfthGuFcCKn1i7EzAsUuFP6kAhuYj7bMM7HeNTuZcZS3JQ1dxBZr5StTV6eZVj5Q",
  "key17": "5KUV6SuKbr4AmuMZZeh7jdaqjm6QdhUbb49VmZ3vnja6xj47kUtfBGV8DUmwtrDThsL43MLQFK4S8WCEo79FENu8",
  "key18": "2ykY49fvYq9werK8FMDuhJCnPuicwhsCR3KWkeSuSu1tQ9t4LfGSKVFfRjoA97gNiXhNVJhR6zWbsMYPQFh4JCEi",
  "key19": "3pGPRaHHoLDt3kGJSirskNeeJNfjy3wKiUU8Empbv5gHEpe33E7Wg2DDmFxXFDheF5GVPWTMeWmMqbmb49oxNP8H",
  "key20": "5cGGtLv1Y1Fjo6X83vUue8LrQw91bNuwTENZ4izW9ug4s6DqfmWxmj2BacYWsRB89p3kW18BRLnfaSRftxSTktK4",
  "key21": "2xMLqTshVi8K6XGBr1T9n6RyMi7qk455Jd7YkUmo8aaJYTZNFLZNdcBzcEdAU7uc6Ma6ST8aDJ4uqDBPHyLPXifR",
  "key22": "64vbote6JDGU2o38uGkfF41VGDPFQvGRoh2xhAJc1isyxxF29ahA4nvAChYqNq89e9aXqLvCoYEQnYQijGTWUAjG",
  "key23": "3eaJmK7844CHvg1zYJ2qH5AgmUfpHFwzRXGUrRSFDAtDiM8ejLyq6ntRhC9r6jJEiU4bbwhNeHXBQHKbugjhuJnD",
  "key24": "5pnB3TRvARdymN7YgcKkWEDYvE5QWpNtQxifDooVpBoCLyuAc2fq7PCKiVT9uidvsrgX5623oSigPq6Mbr64PcsV",
  "key25": "5MA5o7QBgQEivrdcsr3Me2Wv6ZJTTeUmcTK5XmjN81dBFW8Mwrvj89iTPwwdHp8sYkyw5AR8htUzP4qRjm3D65Kv",
  "key26": "5LNPCABQmEXng3ufcD8kGbijq6H3k4pATdRFCgETYkM7pZ5qThEzEmDfMajef9CgTTMhK5gihG1GGKRyAwyviRRi",
  "key27": "4pSjwmArjk7SNDPeQnSp66dQq2noSmQHmizeRxsRLtR4Cs2V7K2JRNFnZYrgCJGzQ2prFEyAYEMwmNBesvZZ1LQT",
  "key28": "QMyknpAW2jPEWEKQgLbqRiBVDMzphfgR4WQhEBJeUxnsYoBdM9AJZ51MU6whm5hDPaWPs6jU6nuzNwzykfRg71t",
  "key29": "6771pf5FMWrCzJZh8reqMYVVf4xqJWHBrMqjTmNcP6G9jgBu7MystGoqUMfh8Uaa5jAC73HUMf6VktkPQF8WdP8d",
  "key30": "RqBjZm7WLJG9FZE3TyHQutxNS6MQqJD8s5ievK2SfX5JNRda5pXvkAzMKvPfL9WAcC9WGQwJhpidMefpHi1kkw4",
  "key31": "3zPsgdNXD1CY2S9GpZtyEwZSCAgsbNCzv2dufZsvAVBRVeXAZZxYLjYfa9sSGCXETDFEjHwsAqtiVHxrnPaA514M",
  "key32": "NVNLeDuV7zhUhoFF3uebJf4tKEPeSc57uhgowpGE1ApkcM7LL3iw8PpSWgwCCNUMAabNgJ1oVvbDM1HS15iZVxu",
  "key33": "GdnrCFs1oZeM5FPBGZqBQBSxHfSwB3DnC2VtDUWzNWv5iuDgQTEQmAsYxXZuv6U9aSRbqAvUBS4JXsH1V72CAQd",
  "key34": "k6FLnF6SCLKQxWqP4r2rV4PZfuLm6g1YoadxhtbBeDHMm4Ab4ChZB7Wu2F6rztDhwtjxgnpmXXdBNPWdjyu6n5t",
  "key35": "3KQ4FsYV93k1eJQtmWiCADZiyEq9n1akwvz1vuz1TMPn1Xg7pdLQVFKKUShzneyRxATcPgztufqoNmyT1cFbe9dp",
  "key36": "5gi89kiazy3smHqF9TznzgWq2AzQNa6XF71VSFER1GJPrUzkx8ZzUsncQHuAMKjGtLBxoNzQBSCQ9xr5A3KgTpnK",
  "key37": "4oyULnxZCDUM7qE1dU6Vg9D3M1NL3SPMcMecQRk3iqdmre4SUVaWsiTKKWokSTAp64XGe41GpjZgZ7cTLCHTen7Q",
  "key38": "4XRZcFBoFHLGzbALcNxkmH5wbs1yU3L7kStgj3kjxzyvswN2C2QnQ6xpYHfZKNQNe7BfV7cgyNMYNubdXq9iccZJ",
  "key39": "2yp8gfzr13PFfT2zoAEb2QuHtp6MkUhhPcyaDMR5AUbqgxJ4KmJRR1YAdGRvorDNQYrQzCjuL1zEgmyxvQqYhUai",
  "key40": "2QzQsTXxvjpBmyTUuRfqfn29qWKDeNV5bE5eK5RFFU3rbHShD32jRPNYhDLVXQfynD5o7a97PNRqqXvX5XPKkqhn",
  "key41": "3XZZTtsdx32W2rF7KoMEuny5wiXoJ3Y9rMyB1SToZrHoFMLASv9okgprYP6iJ21X7PxtYna8vNoD7cWjYLv3vaPe",
  "key42": "53KYwRsgYyfX71oSPasSvvsZNWCWUFiTek2myPus7Ui3AHGo8yShUzfXbcqpCx11cmrntzgsHhTLCrugo9E91XmV",
  "key43": "5ScQ1PGmSyDkYFZkQHebBMfHaN4HvzLiTFJcni3t8jzLNkGC9eFerJmyd7GPuKfMhRmzHcphnz4UT81zwwfh2Rd5"
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
