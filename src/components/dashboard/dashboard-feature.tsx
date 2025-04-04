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
    "48fzkPhVVgb42gwXnzmvL22SnEC36GVP2gE87yanEYpWj3BUz6HBr7WxjwvuAuihZpaAWfKYCQJjm54HTma2gcqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WpFZbFfywAFQXy7fsRYJPZuJQBZU5xCgGJPcPCqVSjcWcokEs3DH6HJ2DsTvUHHz3Evj9zAguCm2AuxSyoxcFYi",
  "key1": "2rBMjpFUPQaSfhKWUn8u7TutWNh8xRBGe9HxeyGofEcucMtGyy8Y3RNhcRGhfXzbpqrrhhMpSQ4qAJ8zZfqCJKoG",
  "key2": "4nkoj56ggKetcf1QPvsYWDNYQHbzndZBixMAqnRqXnP5wBfhJYCxw2wKW3XNpdKBmb5d4WW4NG3dSyVh6Gj6ECTX",
  "key3": "3FTGr5xbZeJ8EhpoPvYYQk6hP5Jz25TrUhHSHb33LVfHR7x4cx72V8mfgtSSjNVhKCKo9W2HcL6Cr9oSQP1smRCy",
  "key4": "5fsTYYLn179oE9u3n3YUpjY9QEXCDcYbXNSqX5BiHYKCbrFv7zxgSbjAr7iKM2Wr9A2wB2hn5tGwxDx5osfYTQgU",
  "key5": "5d3oj2MoL4FSh1S7GLnGTGjmicksbg8mM3aifa8n3PNvxtWS7P7FZoPgXW3x4A6h9gYrcVZec9ms1DDEov2Q3fUA",
  "key6": "5dmhghaq5fpbyeRAsBFTkFAs5McAfMQgFoB7gw62HtUC4SRGZZDKvNURn7kQzvoixy1BhDXSeUYuuu3cfxjHLvjy",
  "key7": "rBzNeLuZkV1wo73HzHNZzB4MQnqVuLcpWbWG7vePaHUNw4ZfeSBPkiM9XFsyLFMTzRX8trf52XHT6eycBB6PGaU",
  "key8": "3jFZKGAU1DycSWVHAz2ZEFZ6eE9fUsgWvMWDmBUFo3FYQefZt2mFwhXA9DxgXDH6hiz4tS2CJRG5sAcsMKPgoVop",
  "key9": "43AqpP5x9BNKYJ7nCSe8nKCgzaCQ6jM7exnX2AjUiGZZb4vTxCXWkxfaTZWYCriDkejKcuNQMNDTtwXrWuenCcn2",
  "key10": "JaokMco2T9MiJrjUwrzdgymxmV1HC4KrwtqYULvLFgjSZ2waDgnLJ2HaEU5pWACro6zaGJHD8rAGwwbXpxBdc5x",
  "key11": "2niafaregJA4mACMfYmbQ698guTVF8oxastf7JyiXyYpyeZLiiAWXifbBtyUw1iC6fAZDCbtLMfyVR772hf1YGxr",
  "key12": "5hg23hkBC7Mj9Qi25UkKVJV6rfKz4HXPW1iUKYzLAWJ5rc3ePFgz7vuMaJzAwfyJYs1UVAP7AfKZ5miGF2P9Uzk1",
  "key13": "GetXwSKPNsUqKBmUBvxnCigKiYEXc7EL1wkvwQoycPt2uWo4pBRhcKbgqaTG6o8Y9cGodYsNryQHN5t3AfDq3cr",
  "key14": "44hN3AvUha8vPuqKrkqMSpR9DZ1tFqD8a3J4wWTKYcNjf5eju1yKcsQrLe4zw3ycRwBBnzGsSb6Q1ZqTdoRUSnRK",
  "key15": "2cePLRLfRbo6AeT9LeCrZ25RcbUkcB8NK5wujP2dkThFtnyLmtkmQ59xLcXpkcbzkbZj4mBkWuoSyjCdFBMgiuYz",
  "key16": "2Tbjwz4185dDu8H5EDSszbZANY9gB6LigR66WoiR8MxKCCEsS5vjmVHAXHUf5xQsYjrJM26kj6tjncsEjNZk5U3j",
  "key17": "FE4qKizrbcD9jz8jkf32DHe7dkf5YJdJZuKmEeVugwSRjQkw4gToRXDMdLCB5B4NRFgSRhfeYtt5mwRWtFvjMLZ",
  "key18": "4Wgd1VVVQHUYei2Bs81vQckmwTcFwnU6mBojqfbMDhkA6JM5qdvwq7Zzfp1731mA6w3HbYh5fXjt5dfCG6iAjZAm",
  "key19": "peYKbVuoMw2EoeRYy2TJn2y1RPTBWkUmMKio5Nfe5pn91jv751Toed8QNXBagDAkJBF8wYsNwtBHbCrumE4JBa2",
  "key20": "3f84KMtYLEkpTVLykGZexGNRjgEfSc5V4hX3YXD8T2kn7bdaPhDHNMuhCAgC6HqZmAsPKecdBFXosowXYsnRovy",
  "key21": "4vX8PoAAptG28HiyCpWBfD5RNRQSbtvjuAQieXmKkMZeci3pfhCHGktu1DpXzkzcuYg1idxCSBwGKyVAPk2NWzmT",
  "key22": "5PwjcNVQAwkS4Umvu3d4debP8artc8bxPTk9g8UPRpSYNjr4cwFMhtdr2bsYhfnWnfaah2oXR16AXiq48H5MKoTw",
  "key23": "2GFxstfBnygJPwQb4PkmSY7uq1YhrbGTay32oJxq8Mjz4XGJbm75qgcnd4E1qoQWx7Lk7nyS4GciBFxnk49NvRqg",
  "key24": "5cugZnqxU26xMHzgmMqREv5mrWUPnCLqTExbrGkg1SmVpvt6uYbNXbGcYRD4sSQVtcbjpLz6WE3njg7epJQg6Cun",
  "key25": "5KHevvgXJy7h5HSTRn2qS91nWbqsrhxihQL9p8xah6pnZfFYkAMxFZ7127TkzCEi5u7bhLuUBm96imnumouj4VWX",
  "key26": "2eTA4JsBQkz7wADoD3TqxCQ7ePuxsx36RdY46JHcMEUqGAuMHfvcRgPA4MAJ6DDxi2BDm6BeGLyFo4UeLbYsSTBu",
  "key27": "3eUzvpX3RWeWncfd8ZLKLvYktU5vts3DaeDtjvMW4DgiZqyynqyPgmzzhMyWHrrEy5GzoGp1CQg6Xo1n59DqRhdn",
  "key28": "2hTrYkGUfBvGQqjSt1xRRwx79Dq99nJq8a9sDchvt2WxNi3Fakde94eXgaqzhVndhs5uVKkTUBvwD22d9qqNZrNp",
  "key29": "26XMC6NqaHwihBJxXxeEJLz7GYGhe9S5yzvakzAC1njYU2cY8XNsCrT5t7dRMs55JvEPu5ezopn1NkmfBQtEzpKD",
  "key30": "4z2aTWTDcQndfAnMetsATB7bMLFK3tgTkH8efZbshF22dj2uhN8ra95xNwVuV8peAw34ygNkBveYg3qphY5MVQur",
  "key31": "278ZwKp9GSMyiPFnKaZFRpGYv6eTd1y3894oebRktU1rJtmoGB6NW2xKb5kjCsDS27SbQ2qjTTfjNkpq5pox6VPZ",
  "key32": "3Dh7BL6aE4nVUzqUJw2RZSSpw8zY6D42XdZeQyjTctPG9XaDuMjXV15Z1hzyh9bxmRkoZUDdapXWTEddzex1D18L",
  "key33": "26GWD6omHMMS4MUrPtWvB4wAtnRrbref7F3tmcrqB2ZjkcWPqP6bq2PdWjKDGPWqiCviMuyv5cRQuBHHcSxEyCRa",
  "key34": "5BiW7G4LDspvxVTAvQXAaeLNy4SofYtoHLmRJGknG1HFHn677NK8qsXSGPN9jTudyv7F4n73snBpSNCqjZmTMKhb",
  "key35": "VqPcp3prtRvBL2TeFSczdrAyY3GoUZyUq8EX2oTmzpv6sx4KJnYRFtA9NrQXBc9MGPH3bBLTLDHxHUG7qW9avS8",
  "key36": "4xDEtac8QgPoHdtjgn9LcUGwUGaDX3dHb9ayWSaEtjEf4r19TAYCaej6C7pH9sguzLLkJaMoRtRZitYKei4kuwdR",
  "key37": "MS4DSUFw4EbWqHwAWwJ2QDCohTs5PZWNgNe9zzzaHU3imBMEfNYt7cc1vzjyLacfXfZUAUTyeLYSs765x69Rg1U",
  "key38": "5zYxzRnX218zuWVuH7pSiTJSaxB1UXKCFQwhRfLPpS2C6vLjtJo5aafXdVjsb521WUw94jPWY9fZwKSFjFqCwEHs",
  "key39": "39ff8oX8kCRY1513HyTtBiVXHiLYyHSAinffZHg3GqbQtmawaAErXdr4LmTPFGr9pE5Vzx7DFs3AzaUJXXAWtzNr",
  "key40": "5oeb5a76oG2yzqfn9tq47DmwRvkvLfwnQ1eg683cKziiHUVqDMNxv1Niv8g7zRWQVg7nx2pzQj6BLt8m55A8MLg3",
  "key41": "51FqSaZh6mvQPrD9CE9uiTaWDuhCYou8VKBopy7FDPEYxHUySaok2qGxM6vP8x9PwJuBBEEjey6eUyjyB2YCEdFW",
  "key42": "37ho7fULYwqvuczyvgHdFu9bEw2i8BsHRZW4gqsFKLjofXmkgv4LT7JXFeFHp5H2mTutXNs7CHtgxb6pENMH3niq"
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
