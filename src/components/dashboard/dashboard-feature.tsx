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
    "45hZEKXDPBo74Eaht2BASCwjbGBy4bWdBpL5aur2MF76vLJswW7taJ917KQbxfMoTo7R6xzSMG6SGm7bm3jdEgFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WkyaJFieiUBwzFEu89qbuPFEUS7v17L1Sw8cH1Cr8YYyo8TP7WQSVzR9V2jd4yztBbmwZNxdwEFvL4YfoYxnmYP",
  "key1": "2Uiq2LHaatBs2yzdjQiT27Z9kxYc3QdK3aTLn2qPXp1KywqDXcyxkMCXzekGncVAS4oYgjR3LEXeFtUTdusv5Lg6",
  "key2": "2suYGEyfjWbx5MA3x2Uo9S2b6iMqirUoRH3ajHhkNqihbsFknSYuaMWJyPvjpvCuXJ1AutnTYBS45HFFSt9zHczt",
  "key3": "5cYCmrc6BmeDpfMXfWXHh4yitTzS89pZvXDrRB8J3SCrTsC7UgQJasbS1DtztJZ3B5h69dF9dMaq6dTTZkTvXQe1",
  "key4": "4u6MebfR26AgXrb6qY6Qs65htng1YwEToQjFY3VMHqoGrQcKwmCwqHEFZwLJSnEyZT15aCU1JkLMRi4mQwrAKeSh",
  "key5": "5cV7JAXXBh9h8a4Mgo2rzPmkhX8hmMxca9tq19HMCjBHszLVf2BzKD7f4wi7Mx8sqCpMWY6i7sA3ArvwmvXEmz1",
  "key6": "3zP7qSZWAactjoYqHjkDZfMLvesJh2aAwmCYXZYnvkBUZheioa43Vd7DqeQfvKKMLD7s45en6KHywyeqyEh3SmcJ",
  "key7": "wm4t688vxFzSSmU598MNippvpTPYCfXv3ccdDn1gy4xX6UETuSSHZ9mEp43Tiaquytjo4rrLJpwnFhB7uSmm9GF",
  "key8": "4gu18DsqBjAHQKHEqB6cGC9fNA7mRF2GTJpiiiYoS3KX8BFaV9R6dDRMGeW8yHmcGWA9zmwUPQnd87rrLVYM5hSi",
  "key9": "4QU9nkUQrj67WSpJqeG9ZbepB47Y8zNRNYWcJjmE7Y2T8Hw7wfe9cWmmMEvmfttkZHfd1EwDmSRfRqGfUSCGbbkk",
  "key10": "3VdHA6TwYRXo9Psv1Qvcf5aspEnA5aZWqeGFLFPnXFRc8udvWNWhftGNhxeimaKxzkt9ZBEydBdRQUH7YpzLLcN2",
  "key11": "yG5SKGM5NNCWKjSwePmJ6g3BaEmd9sMhde9NS2HkrKF9K4s6StEn62fJLSrFVdc5UoJ9MYrW5cTne2h6TR4oNnH",
  "key12": "4YXEZ52HCMspPd7y3MxmZ7FMqXFkgcGQUB2kiWVBSWVN3yBSs2drNpVMHKjHQEeN2XgUyMGzyQ8293xU2X8KjHCb",
  "key13": "5rC68TgXxjcyaiZFrzbtfWoxFDBEk9jXoKsdEU3k8HtXDhm5TPuNkvLtAzTjb97M6bogzxbxgFRGe3Zhrx9NSNz7",
  "key14": "4RBcCiMn5rqyfTqHWo4EYVnwbh3fzHeAizsbhDp8QKnSSx1TrPD8qiNs6Z8GcUqwrtn2j9NSXqfqoRTBLvWfLFUi",
  "key15": "4KPtZKnxVAKVKmWRT2PUBZEtuoTC6NEFzkiyR64SpPmhWWbKfeni2gwHeHDxDgDz78RrBsxNhSa9eFGiqKkQSmH6",
  "key16": "3ubqSmqN6d7MoCaR1Hp1EZKaVxVRpck4nYNb2QkwYzf6XgBWY6NTryQuEQyP2H2PYfqmHHfaqmVzjdJNcsYWHd5H",
  "key17": "4udK4Jrmo3p27SEHGKW65rwyJF2nxHwPyLYritEthVoasMYMJjHCnhwp15GNQ65u1T3zRPfcCccpg5tgfcHHdNjH",
  "key18": "WxMTYvDNC8wP5qKRsGaoVe7tgfqKraJotCd7Bw7r6cQAx6oz2Uvvc9dc8wZAhpDPAAV4ztvjw8CNMFWtiiKrfFx",
  "key19": "3JXwikyiqmNXYRaoiyjsekNXqua19ckcmC8MdeaNW7MJKvn8NhSuMF5dFGWfNdqmr4YYznxUuMyJRji5XJ8F9j8d",
  "key20": "48MFskTeSxq6QM7m51C2vbt3mhqK4gdonqkrRZfzEh5b2zEM2QsZLCFs9vPa9ueC397WQvtdQWNk69czRMANyYdi",
  "key21": "57j4WHawVXgmNoaSHwqoE9DyYvFKKSFDDk3yt28vN5eWf6e9RENuFR5tTymDXEMiZmutmfVWVJGRzTgAq6nvL6u5",
  "key22": "5ns5HTjYNXnue7yimiaoaiXrA4FMcBA7TiaiAGUEzV9Ht8is8kXCe2B6toSzV31b1mN3ngy4cbhMDNCnShT4SURP",
  "key23": "hmGJEQgihcTVgCSmZyNpuJwmJKPHe7wa7M7PY6ekwMfAPhTvr2XHeGy5KRpHkTT7Mu7cHTirPCGYFbTXqimXgnU",
  "key24": "2hBobJ5nU84cEwyji8eJ8AeUi6o5k1AEWUQQuuthK9FtMtKE6LXoXNZC6WVqEKvYrJz7LtsGea6e7iTU3VqXQxS6",
  "key25": "wTobGDdAGdg5AHEtThKERAthLWt4d9XXtx5ecfG7feb7f5n8o2TnVQsxvsD8h9WdAYN2SRUtMmppDCRdTkAw8tb",
  "key26": "5NoS9GJZJdYsKW2yg9aE8YxFtuaENPv3EvbAqYzx1bGuXsuErcbc5AYSiLhzhpCo66qowM9PQbVr8CA2tgDYtTrt",
  "key27": "3zQuPKhJr63kXVmGKG9vswSHNoyMuwn81isc4RjvboaymE47QCM8PF68WLpViEDkyejAGpwQjqY5QLnfKeRdnqGm",
  "key28": "91NoxqxobvgqSZ2UnwbsfcJjakKZL6NXjpBMb12ZQmSpZm9pgkoL3nptJU8t6yQ7SC4WUf7rBbGEomcwYaMGs5x",
  "key29": "ZzSwwZD64s79Wr8t7ZbfZ71b1nFBZ8u9xGqVPT8Sn8Wa5rQwFog4DedaCPGCx31FsEvGAvKwG3jJPwqUesbpM6H",
  "key30": "5iwkmw7VvDoq61acU24He7XNUWHb412wJ49XFkJ24Ew74WCSxSDhZkkE5GFNMSVNEk1rzD1uZwyZpsJqwRdoMXiC",
  "key31": "2Tvd8SM1QGPz5CZW8hgVmL5reLKHNeXtbHXTsWtGfhquhqv4hZj2Ciqdi7ry6uYtwdNa1w1uBwwk9PkuMMW3wykk",
  "key32": "3GgSwJSVgyNbYed6H618oDLAShHJZ38VtniqyeuK6VhYdwSk1RzfyqqxZYxdXvMcPpZAmr5iPYZzhrDAAVYjLJww",
  "key33": "2yTw1rUrTjSoPGcATfJRbMkYYapqYA5X7S1JgYXVENRxpkodtXyfYtsvFdYtVyVeesTV8QbSjunQ8aBBZESqLb5n",
  "key34": "2iBS4EWDKrVg7xEV1ng5CAhDfoeSHxvXACJe8HASqC661LE9Foe4TRTQmr3BBif8D7PReLFdL7GLm7DWVr634UdZ",
  "key35": "5V7fvWVc7KiM3iMskzWHmeLTVrs6KTyq6rVKpgY8vVt6rux8Vwb8TTun9veYoVeX6Rw6DY8pCabhnXAN2aqB7N5q",
  "key36": "2U2WDxtbMp4D9BmmtN6hCC28pAnANgvBRhD4PYZreewdfBqfNRzogUwBSvKMd9HCMYKRNPajM57Zefc1fRZcKSnF",
  "key37": "2q7QATyoERNqS65SV8icANEibsfaULDRKxWzH9HMQ7fsAgJktiFfQnvJaMSVuiRxcmanb5Hx1mqN5K6BjT2C1qoJ",
  "key38": "3HaZFS79xoqAir85oTELYzZLsJ9dQaWM6zSRRme96Z9be8uz3hmLJQkMfVM3ADYMKxfSZmpCb8cmXKpRSoPg21ij",
  "key39": "2ZEtFZjPsaHb8mLVoxvQMbNTZWnWq77n8Csx5QtQAS1KuPNCPhnvnRKEjkJpuJzeAw5ZAuNY6RUdr2QMhMNdLWmW",
  "key40": "5Lh7ZfhVpcnDMJk1kuc8kgpfjgTtGKMFpPCh5AQ7rUJyKutF7nLohpwjhJ1SGeSyv3PrEpXvbyjCF1EVuEU7bMsg",
  "key41": "CMUF8ias8WTVwPn1kxZCEvGnQyf7TTZwunyYSHocB6RaA2znP7T63Kr359wXWPXRN2HLMMeTWzyakvkfEiRQe2R",
  "key42": "3hyHbFm9DDqQ9PMsAmFmzieM5FhYGh7eakC8rAwjFAr3hDKjxuBWm9AtyqDGFo3SvVNMCRrb7HSnbfmLPM1orZxn",
  "key43": "2W1mF3KUSbrCgoQCp28P7vZLF73Wir6SkAUXFT8rBeBH5HZAes57qXKtZ3tURiFXKm8CpxZowXDtUvU899oGWs49",
  "key44": "3ZgoNDC46Qry8qdayESLDfwBvTXkDqfdQpUP43HsVmrTKSAXmT6chjGSeTtUPGHr3suHNgZox4wpoXReJATRhdGU",
  "key45": "48PFK1nBRQv6AckLRrjvNUf29cjB5DqZ8rXo2Z9uYaVNzhbEsRmiByBme2gqNgnyRMLHqMyeJ9rXvmRE88PUJoBE"
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
