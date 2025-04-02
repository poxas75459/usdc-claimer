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
    "GqoeZfYUzU4Z9kJAyFMC5uaBu8dJmLzF9cdNscccBfxS1gGqrrmBYNxKTDMYwaqCrzujy6RuEZ7FtxDEJpbgwS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yvNtSfxT5jt5kie5LhqGxNb2vHBR8Ajzk42jjpaUVgeFEAtT1kGA4Fm7BtGV1CX4iP9fix5M4osQnqyyVtCXX9a",
  "key1": "5EgEDVXvyE2cJVKGZgSig5XznkDA8DwyxNiV3ffNyDf3omKXji7z5LXBAhEZ2SXF78rLJHBXx78fkUNe2mtmunSw",
  "key2": "BdNfAJaArhZaUFagVX65rryrDs1N1Uip4o6keCY8EEmGiFGLjex1GwQ8rtmA8Ab8RM7gXHzATfKUcyu1SGPXTa2",
  "key3": "2vWZahCKZdWmpy5PKuNA4A8NBHJUF1wGkdug75arRZDWhETw5qXwa4VSgyVzc5tqhHBTHfDo3AiTigojkj5agQ6R",
  "key4": "2om65gqz7bzLt2ERkHFnCULpvVYTysfzdxQgBxBVJ6hTRYZcquwYr8RVLZRcQD6siUvrfDVr7iRqYLQMMN9q2RsQ",
  "key5": "UtCerWqzJQdyo3SRTRkQmGVihKQNW3Ptch92NfoT6AYicUXCmYyrNpQK28W3huSpu76LRMkaiXBnA6v38u6n77G",
  "key6": "4SkdNejrauH29PwBNipDjquMuYMX3TEoP9CZu6hy6iLEitZDdANhec9Lad9J9j7U9e4Z144LmU225JZtT2C67P33",
  "key7": "23f49X4Kn3fNupFXPF5WKpV8YBZHpsAVd2a1XXYt61EyPSBsJnzjep3BBjNnxxP5JuGMzASUN8Gnq6Lq3HnEuHMc",
  "key8": "9qtzisPbHrc2Ssf4mytiKm1kV7hJFqtGPb3f9oMMn9KBs7G7dVq1xz4f2pAeHGJ3cXJuKkSkRMh6VAwpMiJMh9u",
  "key9": "5GTYRtQUUBuAfVpS6syXGozv6wZ8PSZdUhMXrNUHAV58x39PUbPejCJs2enK7XeJ56JPVfD6e3xdGmff328ws7eT",
  "key10": "5eC8qpi1LRvaJfronX59E12mouUPGDRvwXNFF8mDA8Hz6jwQcQuybdVNgeZ92sJUM8P5f9MC2JP5JxtHXd5J4tYP",
  "key11": "4pKt14W8AtnJeSa2WKtEj2Rx6YxKjJgY41C3DFAGexh18wpubN1fjZzsrDm1vEVhwrvEvzGHaNNdZjXBqF1jSbJ3",
  "key12": "2YHBns3j9QgsgfALADxR9UtjtwTYEGA1z5wmkQaJnhmxv1jGASauaDRjPUsTxsSwHVrVGKquqgyit2xu1BD6Y7Kd",
  "key13": "Uvj2buZKzjSVxXA1QBv6b194txc2AMBuWacrw65htrUuMMpGbYpGPVg1P5zPiH7SP4b9wU1sucabftk5BNjH78d",
  "key14": "3VYU4MgP3PXTCQTxv3ooST2N8Ldr4UuBW7ZoHMyZCgisVMKuJZYgCjSStUEUvGTCyJGyKYFQmDZ6CN7pQmuK8DvW",
  "key15": "DwnC5io3zD1xucqhceQtx4VRmYpcvypkwz9YA9iwM7GEroKzBr1H3TADAFd35ScbArQcKnk4Auof1WcQtZtE2Aa",
  "key16": "5Qnof6D3N9nKLRzJtyxaDZrybwicWk8pT5xLxF8LqdN16a3msZqgZqmHwet5mfuQ74pZk3Cp95X7h5Vm3tbn53xT",
  "key17": "5DWFxWUwpBeuqp5mweTb7KuvA43hgur9PiKCquWfHfxZFNQ7jfmWYx939txNHpXMaW9dQHVoL72U1wbHc11r3XUG",
  "key18": "39bcV6TQ3AHZUbKDrMTrZaqaqgRCdmv33KpPWHTfkttrTdqMotmcRJChWiK6nV3bTm7hJz8tdKYyujNfSSi2bRHV",
  "key19": "5ia2mQerc85egD2ThUpJFFuwe1AELVtgQVKadKth5edF2ep7BQzbg32S5TX2ji7aHj7QYRhnj2ndyjrwYq8MAgHc",
  "key20": "3MtEDGZJ8cK9GvTTZ9ZR7py95Cfu1tH5aZQCXt8aebMDGAdnTPBe4DrJfTFExb8K9V2Zp3Zf7D5bCqzCSAqbzeVp",
  "key21": "535NEPQwmNpvwQw37aLSdqGMPzZfZh3ars8eDuvxAcSttt9Z82XM9dXe3PE9y3yun5aybgPBerLNcsbqT3d3bPAj",
  "key22": "2Jnqd94jbLBuUQfsVZH4bPWAoWgkeob5Y8bUyPdVM46M4os2PEoeZEFPTir4SB5KpKuoKfQpQck16TrvhuaQiLvo",
  "key23": "2tSKsSqkfTorMAfbBf1G9HPMp3YzC4KCzNhyfLCfmfoSdaDy2HWCqks41bpt5sGYV6BjHq6twYQBDYFpmxfbB7xc",
  "key24": "v237UFLN8gxsmC6LBwsiKXnNWAL82c9UrXquXU4ZCMg8uKpmvNuZfpJ8YaVws4BG66CekaYvJ7bdVtiPWAAdJJ4",
  "key25": "3etinwTHPp8vBoZxMZt9p9e7Hv91vrA679s4PuDjy8mc2Mkr271xSJEERSZ1VGWHvYzM3JFcFQH1fXt4TbcokaqJ",
  "key26": "4KfRihk8i9Qe1kByne9SoXvcqsv84vMiyYNgLFNRWvLqo4yuecFgNEV9tJbFhM1ZRzTmr6caLqJXQzbf6966zbgv",
  "key27": "5TeXEm9Ttoa159grSMYMz98hgZq67biL1j7cFK3jnEujN5jVK3t69X2XYe4g6VoYu7fuQKDUv2GBkdLzzMmzhGM4",
  "key28": "2VAr3VDcF3hF6riKuDeT9mdF51XwzcFBmUrtAYosPbikeC76SaMH11uUgztfaanCSCX7FsnpaLCmtmAy2cLrLch6",
  "key29": "3BdATFRWR9fdgUfrmnJc6JGg73tdPfBemXQPR4Bq97ibftYm2DG7UwLy8SUqY2Ly2SC3mPqDNEKKa58GdBV9EBA2",
  "key30": "4ByxDYvuFT4BnzB6h15BKrvfS12uDEFYYEAj4qzUjiFbiT9PHfh3Hocdg48ZVPF9D98zDNzhnLHoBXqpWR7umiBc",
  "key31": "61JXBQujgKbLFGtenGc2Ay7j89YCdnErcK2pd7Z9VzpUeBqaPvPwvp9Dy7RRF3F1RgjbYFTz1qTm83w7vREnMExn",
  "key32": "44QDVyeBX88DaRnJk6dVjSER6MP6yLEW5ePexbS76HhbkhnjMnH7gCUU9LDgLWia2oAAZ7ikYZByQGbnMFUdAjhX",
  "key33": "Ar6LTfGfLD9sXb85W7sEzYitfVuo1XiiFFkRrNDVY9JE4w5sgkqiZcYznQZF13ZEocg4u8XpRtid4NB4kqLm2s1",
  "key34": "3GDQ3TAGBPEU9Hf5T51mVUq5roXPCQJg3UG4SQLeiheJqAkFp1iRsuxv5Sdj4WHdqxdjkPx7p8b7SF4e7bDTeB2M",
  "key35": "1AsQBbWerczY9415hzwiXaeZqdp1s8qRhm9nb1YwU8MdK5T9T91YEFZ4ZFM6ArefbDQPJFSbqQr3zBLfsXb5DYA",
  "key36": "5PWfrZgqGTKPz6mZgubXPvExvj5a9bQYyF3pp5PuBVrgFQXQ788boy71MXgSjD68caSoMuVw7DBYSqEiW6wcZjio",
  "key37": "6szwy2XarWu9JxGpZzSSkStjTYct3Vx57VDbzwTvSCULwuPVEWHBhYk2UtA95PiSMtZ2zBSw8CMxvv3ARwM9bSE",
  "key38": "ooc6aALEhXd5Pjtw2yEfddqc9dUoK33jF95kcxaUyb7QxvvzRHqFmCS4nSL4GDKkKYxNabPZBr7yuHWXvexVPid",
  "key39": "3AiWeQW33rZ9766say5thKDBU9HcjejCBhX6PEoBv8axb4wHVQvGum7tRMXsRkZQA58smraZXNPvQMXYGmKe3p3E",
  "key40": "2yUPkVBvduqX3HyM4cSrq3MpACnW1Vas2Mf82rrtsPJQpvtYxebdcC6vxYxoAFz8q2J5G5m13LPAKSckreZcASka",
  "key41": "4jAPzzYGnhCzA74wq5uUxPeEKrmQbaviShP5qTZaxbjAE2hB4oSy5Wuo1SAUacdJGtbKXwEey7g2gYeKQqHfPP7X",
  "key42": "4xN2Nx3F4Kjf3urJRz3fFFMMWAaHNADSgoUPtejgT6EVvA2c65ir2oVRfomBbEvAEC8ai3RSK7bHpjSrxTAhB9Ki",
  "key43": "42vp9xXF3ztHmmQPzme3i82j33PWmhW2MM2y3gLnfrA5S4rEByBQZZkTcjZY5t5XzohpD8C8EdPXH6KATfTd8sX9",
  "key44": "2m686MKB8aDZpkjJr9uC41Ju3i1fAc5bJGaPqWsS4KqLfEYZHDahEwAyueyq1qBbap8tpgMYGn1ySzgS6CGEYLQn",
  "key45": "yXbA1oNq3xJMQipXTesa2KQkVsm5ixBmKSQKxNpRKrjGwidFyjZSjmL3vFiKWZDBv9Ew5Hoen3js8Ms3KmCyUwu",
  "key46": "37zbLGGA5Douvr6qRPZPQL2yB9EQXnc8oMXuLzWbcPXyi6Fb8DnsWvkidfcACBdS7s5ypAkLGVpy5Pjti5NFPihM"
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
