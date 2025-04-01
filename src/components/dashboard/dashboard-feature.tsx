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
    "gRvsC6oKoo9Ggow6xBJXxjHFps2G4oujbC9WzLAxWZDAW6LS64jaZBSuheMmhyVt6titm1jSA77dKzCiPsro9Jo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67b4hpt25SEQEhrrtpfgnUB4CN2KUbqvzP6LGpx65r6UyXKuXcXWz6HAnERFTRp6rW1GiWoKXxNfKpCKhfaKZd72",
  "key1": "4p62Wi42YKu3ToibHHaiEJVu8i4Fdyn4JPEVJ1mTkADNQRrToRWffzikw37pVhfRNLPzP3hRJc4dm1qzTanZnpzp",
  "key2": "YquwmSVbrZhB31tz1KtRJBeZLY4Kh6CH54gk722LY9XaUXTyxZfSZ7GpWA5iGMXti4RAqnLSULjXZehF7KY7Jfq",
  "key3": "4eZFWVW7gkfJ7Eg8HM49WSazmfjt4vQKcH1V6GKqmZNiDQ2JqhZ1BdZyLcsNFowiUDnpsaTJcs31TEDK1dg7Ggf2",
  "key4": "3CvnYjBBhUXK4L1hQWVTWJ9dxWa3LvyG68PWp44oGVLqR1QJQqfGMwc3JFSL1huHvKg8PGUj4VQt4aZQT2cwxFKj",
  "key5": "3mjXQ1utPKirbQH2Wj9UVJNKQvmhmrUf6LkmDjq9sZJNfRjW3TUvi9gRtCeSzguq1g9DUguUuXrqEG8yfDcLRtoe",
  "key6": "3GdL4ixH7nKZdJzkYNQBfwmyeYbzrAwR4xVqpDQQFcHStKkbc8wKAGTCacjn1E5Nu2pNDtRHaUquZ8JyE2LFtTaB",
  "key7": "63LZRPjLM7b7yXr6npBQEDURhReGECaNZsuVeyL7ejsTMA54G27PzveZ9zHiyBz9DAaV8ajXZWUw2tPFPnPm2F5y",
  "key8": "24NVFZitAwspLy9SGytXWp3PfPK8i7YK7qPYpn648ADH8raHrrxhPDZfFPRbUVhQ4aATmW5s2GFFUyBAtYtCEzVj",
  "key9": "4QuyeyDoUfBVo85wCktGmtByu81TZjjgrRrbK3WxgyvJgugUsZhSoqTXyRadcBqXP8yMoxciQyWKuR16EazSgF2W",
  "key10": "GAVqKBtotx4JtWfifFVteq7eoVbX5haJMihBM98kiwmiU3H9UjFyUL98uveJJbfmMCggAYrJBCgwmEJ1R6t2mdG",
  "key11": "bnBYxrjsqYJnGivnDBJ5rXWdbrWvoKgPW6cVyTw5zohEqJemhkcbWU2Z29jRD4oQprgHZ3uwAckNa8zBgLxvFS4",
  "key12": "2P3LCTdE1ujGPQerC8kwxoAv3fyt3VdD5Qg6kxyMCEihQMXsKgNcgWyaKQZo5wxv8fE5ZApSFBEt5y1iBrDUZpL7",
  "key13": "3zgEL93GFXRhtVpwV5uSVqLfkcoNLpA6a51LEFRNJgskPKXxArdGqq4W8Aeb43CsRHGqppcocUCWUZKEcsVKq4DC",
  "key14": "2xjSBwun5iC9kvbBqPkfJyCtYrmJMUzoEiouxB4eDf3gz8QEkwvFUoULqY4pGGU9R7UER9SxEEMeHk7TqYzeWDWA",
  "key15": "5ynaJkiLEp3WaWqVtaq3HGir6yUVsQKZCtDDsmRB5NDcE6C7rToKAr3t8yx3cvfk1xV6AMb7pCqf5pExsPUv6CsU",
  "key16": "ukBnQ7VUteNQZWEnmWAwD1KtKHa8fQvFU79wTCE7AtpQGtTqJqqat8r9WNVYU9ft6xUDKCHCJutC8jGp3Bq5Lwd",
  "key17": "23zuD61FRR1TgeNqPWXAVphHjKjtMumqpzAuk98aYU8bo1dxrZSyYZs8ApFjGKi3Ei6nWcLpiPuY2s2gvvxpAtD2",
  "key18": "29Be2f9nNfW9dRtPLXQvTeiYuZM5QsbeKv8djWoxfXyr9wjCTyNg7WmTZ53fe96U3ciUAQVooj1xpyfUoWz6QKMs",
  "key19": "556q3i1gZ43H9o4cGdsRD6CNPG4DvgW3GQyHHc3KgwTFWwrG2quMtVMDERYgyFpyCjwJYRPku2nAByzi1q57BB9Q",
  "key20": "3g1AoW673S1h9sKJuhyVeQr47Juzr8T8TEwnvnmYAFEDqd7uGkYuDgJjvmTQfaCiSeuujuS1nkXnY2SEsJd7Uvfg",
  "key21": "63iNsQk5EvZsw6LVvh78PqjFrGrAuU4KdL4V8h7nTETHzLRKArm2DZvMxSr7z13ur9hj6CwjPWwr2KkiHgBLUL2P",
  "key22": "67HwjG3yeXXzVV1CRByjvbiCe39Qi1eREM7xLmnmQBazZqCWQ4dmUtJoN9VvUfjohPudv8D1GKa3DbkGFUS1TsFY",
  "key23": "2uLK1tMfE731XaQw8XjbUuPwAz2YLcDj4d5wnRXKLKUWpcsaVdoEnmCiSMeiwnK3MRw1dbKh6CBAUH6qyHLBacLc",
  "key24": "3qK3xLtXKKjUZWYuAaNGdHsM4T2uaiwAFJphLnoh7mPyLzapfDhXygSMPtkj1xtJsn7eduLD7RV2thws96dNgcw5",
  "key25": "2d6ptYQ8tdB2eocrBCBiXP1j3wG9r763FpBptmimk3bJfdJPorVHE43FTaGQU9cwQA4megSADtrFW2c6KEmFgM7u",
  "key26": "2EhPCE9tEPhgDi3jCeVSs49tgPYgjiT8pNcFqSUKMSxAWbB2Zohj5WUQBAne6DRENJh6aGa6LXGv4MeW72aTQzkC",
  "key27": "5qPaM2ViTYdqRLVtYmZg18sWGwNh6i1z6ZzzqPP5k6N9JXKojmqzSi77fjmRn38PsqHgTVgwuwUXxXFMcQs4cZTK",
  "key28": "5ANkn1r9vXmXHMQ4SPhcLr6LQ38e5n7jaf64WJxR92fgBfdcxtP3YAG3ucYukR9wXPVT7DqhdmjqJAc2hRzukURM",
  "key29": "HJTbq1AC68Sex6VtY68tDzYYnD3GyjoSMkcME7aK9tPD1FPFA3aktk5HaD1KttGK6PK9n5wbs2BeZnctJbgztbi",
  "key30": "59NoNV5SiVUr3u4eqt6mMYMP1Ymzd6Sc7vzqooH2E1enhPx4tpD3BMB3XKY1rB4swuyjx5fCpA84vVG3DBVxud6G",
  "key31": "3dgwXYbBN11tdb1uDu4gCG6mfGezFSw85czHAVZZEKUD5SzDKpV8gB66hcFqQB1r2p5VHJwT6zbznPhF4eowtjbZ",
  "key32": "8LozbKmKwhWDctfRk5fnyuSmKDfUZmCp4MKfduZrD3v7jMn1TCi6nGb5cNMUPEDaGY2WGkDzh2L7HkfbdhF5nK7",
  "key33": "3yGLyMZHfqek4BKxXdrvCPMkWELZHFvBDyoAT8CoWoHJ8bxxYPNP2kNUNnpwwCjtzAqbqSXW3G5DXHKgGSdQYhLJ",
  "key34": "2uNBp5zRuS53NHbDq5qKYNf4vBUXdhDXSkteoz3GZnJGBEBo7hZmAkxaEpsnEnEGQ1vimV4YuyaMWKKSX1ooXN2T",
  "key35": "21u2iFbHuhJPHku3AKCerVPSF2RTHimG7ZoPThh71vZhgv8UZAnMQapkjb7YdDW8afxLQ6t4ggqdZPV3LQFbqCeb",
  "key36": "2pcj7PejvMcZ1vGx352wpJv522wMRWf8Vb3A1qFPM9xKJbV2TbDS9QdLwsxyccjZPnPpeEmnEtNaRdpLen5J1iHi",
  "key37": "NWrksQhb1JMWMUi4eTwaiPtrgkV7zL1YtbJ94j3MnxEELPTVGv7mB1Cky7dRfobRDPY4im6PFYYYkbQ1Vy65H62"
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
