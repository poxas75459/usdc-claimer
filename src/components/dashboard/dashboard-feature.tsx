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
    "2EL7jGpmroeF4io8Ljv7R1dJmb1nNX8sKDJfZcu63a4z26vNhcQ2BeT5z36nXcyRiGhFCNxrgcekNcbxJ7qzprpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i5EMWY1zgxWrxmrKz6qx2XDL9qP365EankvvwM8M42frfHNFVzDwTsHMH46hp9F5ZssPkMGcy3P3yiVNdvXZ3fm",
  "key1": "HqVtXZBYjpob6CVySEsJ3DXXJMd6cLPvMPucjN2gYXL3cvNUfFJwofTzYHzyLFAQfexBTNAWp2Fptx71SVUt3oL",
  "key2": "4xAZZLpwyetEiHBNZerSLizJ1eAr7RrZgEMaAwuAAiD7rXMUyCX6SNTPKHU9ViGi4cb2UCsE51ABh6pLTL95EDaZ",
  "key3": "45Q6gn4JpvH1mythiXFENVwHZPoXPxwjGLARrnvwtAHFPLYzPhBsExrb2G6YkNZCyceXomxzdhEabQhxkWtEJJwK",
  "key4": "4km2wakGv6ssjY3oMAAnV5TKKdjX6B3RQyC9RmvqBzA3zBArCDb8Z1iHSirhg4UnbNXTFGebgyWkcsRH7XmxL6jN",
  "key5": "2QH7x3HETsHthkuWfii21CVdTeA1viFv65NiPe14qzpt5czcCsyX2zd7uAQAsDi61xWKZuTkfv4MeLV6UgUWGZ5D",
  "key6": "3RYQidaVrho9qzxV5WwhxmNmhEkUPh6WZoWmVBcSznskmMjSnDDnqpejYw73iSgrmJ3NQ9YSWRcCeJwQASVcPRcG",
  "key7": "3uxmyK5AL9UoUifWHDstJVR3MsyPEDnwkwYKyi9P3CEYBdQjyPuvxQDeZhw2KecqmmCsXiVNRfkh96BKQ17HBM7w",
  "key8": "31jGKAP4VjJBUMzpUgRz1GRJUnsHyNviM6zoR1xoxAq2JKUpPypY5i616xDVrekRtvWEPgMM3QEbsCbHZ5FDB9Q3",
  "key9": "3cW6q3LgXomuQzLrTiVAPP9YHvsvQYsXtEthU3pnKpMSrxAAFjZxSfkFjis9D4b6w49i5TwPzEAakkLFfvgd98Uh",
  "key10": "25xxSfuar1vTg6HYReSYJqoVR3xuLvEiXM5WendtqcdMo2RnhZHaqUwSfCP1nopVNTtGYG9BEYFD3tg3Utm33bbV",
  "key11": "4SYj4YiBuq8W3JyS6vgLXhFbkeJLqb3YBvEE2NzJLsHcZehhHjTA8dqcPXKpZLGNQXKt3BXGqW46Jp7h88xZz3Xf",
  "key12": "3S9JoVxang1ixnSYgUeynCV1RvB7EYcnYCLEKrxcr1EPbpr5gFhyUm3bm1YypfjU9rMNjVkSKry3wWh4dtNNKsRx",
  "key13": "4CLiMAj64EBA7ffSho8FDqyMGbnZ6TyfFadzvMdaVbnbEtyxHcckn7gTNaMceCCuBDb9Edq95socPsmNdPSNKe7o",
  "key14": "bY44y9g4vaHNbPSQ7uPferE5rzuDj7RSGbR5KWeySamKBZ1Buns67M6eSA3FxRhsK3G3d1G7xTuxQQKBNzziSfy",
  "key15": "393yQWm4JedRxyWqsk5dXy7FPyKt9jUvkLuwJKuVTPY6qkTJ7dpbBzzVqw9xgYxQsr1Wctmz19VvdLsShFXdUbSh",
  "key16": "2XnwdYjVuzA6nsNrs3qYfdB24n7qD2ygeFEsZbCBsHoXELmASvCBWwEDXcziSqx24iWWJHRsQtSgnxLfnaMdZbn",
  "key17": "7fsd2CXE3P3Tgj8dUBdDD6P4GZSknt8aXSE5GSnzzgMXTa84PXoFj5yvdZypAV6juqG122YVKN6APWChgRmq1gn",
  "key18": "3yceBmKiQ2UCXxHBpqiwbmnmmgDxn2eETYwKSozpXBvHrUTMsa4rGcLywhU1qxXjhcGNo77TGG6774RPVZquvv8Y",
  "key19": "24cqQjRnaEhcEnwNNXP7VrEG7hdBVGQyq3HKP4yoAifdRSSbyQ3QSuz8vfHyi77qA1JzbGnhFPfnU9Xxkzd4EXSK",
  "key20": "46vtMezZpCqaFbhLpHvsZtgXv3D6LmbWVkUJ5yzP8MqEUKK4WjpwnWTkrKddYjRLRjZjhZdwx4onCFjWSDEJgE6V",
  "key21": "4D8g3jQ1kjXykyt6GWwgNq4XypQxvrv8vB6TE1PJxQ2LjGmkpxJn5Kc8uANLVMNPdsR26YrEZZfsFPq1faNzEPQ3",
  "key22": "tweBCHxWDwRid8AafAbrgqnmmowmXZ3c6pf58SiazNyDLC2KHNi3dC96T8GhpTGVj5oBygYsZqVYGD7k9emUSJ4",
  "key23": "2TmRfhFcnVPMHeMDaGGdmZeqWMWEGkJTTM2LBz59Xq7UeNRNnjAwby8zExB814HEFi8szQNjKPxNh3gXChykE7Zv",
  "key24": "2fztyh28ShdUn7D4GCXxG9jbjWmsXY3aubbxfmXezaHAht2CNtS5f7oa7VjTv59dHBtXhzPvtsyikb1X5UkiZJx4",
  "key25": "63FQ4KJJgrKawdA6FHGQqDau4BmtFd88j22A1dLs6nFn3qUDTtKeRbDESXvmcZVZX1kAanLfNuajPSYbBLncYfuN",
  "key26": "2NYYitQaJoyoEQv1L2ws4CvkrmweAfqrZi31APoNKuwBwqAwphn5PWVxMdMKkDfEnygaoeD3xTTu1xhtfasLttvH",
  "key27": "5at1tDECTvGfJtwivwY5TXPvEmsnFdFFuMTpARtT9PAZ5A15H2cbQqHq69dM7FdkZ2rQg6ZrvGojEakD2UpaeSBT",
  "key28": "3hEcxAgFDA3oyUe1D9igwVQKNyyvAdBw1FxfosudeesriaVToPuLWywD68NF91decL2NjnyvQajYgyGnep424Qui",
  "key29": "57uUqiVdostc6VyGUes1VUi7UD4SpUNX9aAjM69Gfwd3VwZdSEdigaHWu5ioeEdxFsEBPiNtVCeL5r8R9EEmsWPv",
  "key30": "5atwkwjBLkyUfzyKv8zYHvLHoFaioNsc8aucG4UQrX1Hyh9qtyMgwiDx2qbKmzATB4GmX9xywxBCDy2JURisXUyK",
  "key31": "41N9xv8CTUczt7YnNjpQpbeHpLgZFAu2ek9TEuefNNos8erHTu8HBigcXRQfBotFMar4KLHSL1nUBZFBDZDNChcZ",
  "key32": "2A8TjaBFFGQ88vuYyEWf5BDQUndbh8egcrWydmCf1gK4mCV7AcM9VGfeHMVP5C9bSYXpFyTp3chNgpfsj6fzNkjZ",
  "key33": "3vM5Zvf44evsYjPkCShgYQ3BzozmE22Fqzb9zRGLwkk6Up7WoWanVadPPP1TXXwnQvnXLPCaxpqDh98S867QXZwk",
  "key34": "3ZoXeMgrEb3Zy2A7jHYtSde5vgBrzs1NHiRRbCxqkkbATMCFqysFTCA44revxzDtg6BHLtVGcn5sjESg6xmT7mQ",
  "key35": "3q1PbaYVvApausD6MYbpFxh5r2fhLzzUrxdua3pYUKE47FsLoiUPT3aDCMqasaaEgZtyPotgUkA5T9wKjoDGJcxi",
  "key36": "39r8VH44Dckst8G5juC9umzGmdx4bEk9VrrftANxd4fVu97ZQWVYyxkb8mnMKgFT7ZVFKJrvSuxK4T2379xRQg1X",
  "key37": "4dz93mS7DtuxQ45sruFZxvUWePpXX8epdFp648EpSmdtDJX4DnKQsjrcToyJ2D4hw9yuvhEa3GsU8njRVuS8J13f",
  "key38": "WyfYzw4MbxMx7jhZ7n1LrNgyLpQWt76n2Q9gYn6QVrhczE3pHHAEZbnhjSDvgtgbzzZRCFwpZNz7Q9dxqVcK9jL",
  "key39": "rJZfxoetqsdquVfiwXznnginj3tVudVEnNAT28YgTdvgXphT9DnPoTS4qeEVi1PX78o7sJtpv5quwb9RqvKhirM",
  "key40": "56sZWfoEwjeR2hM9LusK8GMZsg4ZeDDmXB7cfU1fL8jxvmMb7YssvLsP8feavEcAfppnCtwLKfTvEMDjcu1oQFq1",
  "key41": "3xFukkQtkrpGV9BKii7h9VpF6JsHGLuJ28oNy9TvTLoo9wNSQCbd776riVqDMeYQbymBjFbcCsa3USiWw25Nt6er",
  "key42": "kSd99vzAG7idFdvKYVtkd3WUTi56jnnJGyGfG96SRa57jsiz7ehNfut9VCC8Ln8U8hJuEwgUtV28L9VCoNBiMJf",
  "key43": "3MiMfDnfVaxCoeSWhUcoiThGPL2R9oFyhVrJWx5zjLZMVta59mAEKyhCjNLzZCqEkM4MvNGJUmZB9uG5ijHjrhr8"
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
