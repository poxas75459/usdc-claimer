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
    "41vqGGUm8YB7GgZW5n53PPzWvBmX83MNAuC2onqHLCPq59GzLY9jaMwBRPsKcZQ3b2SdWXAXhNV3ndBFD1GH3hnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iUecQ9uSKcgDwrD8whUEF83RjGGnfyehq4tXDWSgJUugtMRS1UhaPnDEgonKhw5u6n2h4UpoRtQ7mvY5yYFy7nR",
  "key1": "5nhDAtdYeo9GDxH4hJVQ7EyNRfvjfkkaQWt4ucgdhpErcJk5MNwMEwKYtmqpBRBDrCh5M6Gtp8wdxDyUoY4uZ7NK",
  "key2": "27eRF2dciY4zmdVsSpZ7mcY4tkyvxE6vv8Xyouu9TWjn3tZ611R7HPdF8EmrhrSKp8bYp1CLUuWu6FnoUzrBszvY",
  "key3": "4ddaA2e8REeCkNtfcxeZLDdzx7J1JLk8xv5LjD7rKrwe8M2zZi8XdYw3F8ASPVrL1MiDjQdbiD3mLntepJeqsUYu",
  "key4": "2tULp5xRP22nGX8xLWomLVanLJ15mQyy8qxpE627PC7DLq6ChTiVpqcMQbt1dKuDnBeJH48Z6BC1WpiNBXkwiHNd",
  "key5": "541FtgUpExLvX5h1XpiDaE4SRs8S5BExVyDs8LzzwQv7yMNQgG7xVGFWgGSWwtvTkz2NHngkKzo1AGQxJfGmYGE4",
  "key6": "4gWHrdavYHxvSYs8ffRicGn5iJ53rZ8a2FDeBTN8uGpQ9SitfhQfbWWanxfL8pHVW87LqgetQvf2ZvpviQDsfvWz",
  "key7": "31muEPXkaJXwTKdzuDmD5wFcLQVmL2mSgDV7CrGzvZd5mk6RWBagQXwr8UDakDxkvbaAjhe2HYiFP3Zmd1oyvhVn",
  "key8": "5wdCVJd2WR795GfcMx9TDTn1NQdixDS1C5wr7F5f8eEjugiUUy3vTdmkUt8anJDqRVisJQbDdXXcSYqsnfymNFdU",
  "key9": "5ryG461JC7xzQ5X2o2FHraxXottjrbaTuS1ptRnmvZoLathATPijTFAR4AB5aeemjorJNBVrsoxUTaTQwZU1oxkx",
  "key10": "5zso9xUVHmVCobRPqRuocNjjikznKTnpEL3AvsmQQBpoLeKhWSVpjJKErZ8kimYkYZwQ73665Egp7e3TEjbqud7H",
  "key11": "q4C3FJGr4H1TtvX7to5xGzAuJXyghHYS1yh8paeANyANbN3es27vum8xqAjwd3geksnTqUqVJJLrKeWurFZCVVr",
  "key12": "64aSvHG1FuHF6hD1TEi2PjQGiPq1CJpjsB3Tqy5p6GFfoW8wzaSiP2cPmBvP5jDB6j626qomiabHfsVNUrJcEPQs",
  "key13": "2HNeiKNWPNM4k4w4sQhEKZHUxE23Ek6jAKbtJsUcd4VF418oeHXzyyAzWfwXDADDEP1hJk5j7z5xyDmMfWBox1dL",
  "key14": "4jftCyrJ3P3EEYbZwPrFamjomqxgKvNWdnf6S4yFe67oe15DdKrXbKNEvW7eSYzp8E94zuWLnAjFDT5VVEeY9Zz6",
  "key15": "3cWkxHYpQDVfpiKg8G3dPXvGpQ5HSxB5yaGEZ7ktiN6cHwBpaNBAdCSGKuJnYvfJCDuDvE6hD4VWhR5QfV4bDJsB",
  "key16": "owaXhETdBdt8BgEQMWxjF1jFuR9A3iKDonZR6EWCwutfZxWfTx2E3bDejuzewHofiXNrRhUGS4v2b42BxKKD4TJ",
  "key17": "ZWTYNCeG41S2aSUsv2cy5GyKvmpNn3eoVeSvRmaz4Fv446EL43rB5C3wnUXgkCiyay5iS9r7gfsozY3CicqfYbU",
  "key18": "4EhNbHz3GAzbnjxNMm1LVLnw8TNZmPuhEDjJRLg93sBJstqLnCiNWojZmARFyyv3sQd7wLP8gsjwHu6LADJ1DMCV",
  "key19": "2otzPaSc9qsBXXWPQEpL1UjyT7x9d5QKyVwhLmZp2ukABYZCjnH5vgk3ffUA83z3DDuHd5CvoFX8T5dJUcuWtfEY",
  "key20": "5SQc4oJYoFGaMhLZM9Z1Sn8SoeBL5uLYUGkVkR2n4hRKAo3eez6N1C2TrRfsicng4pX3qGPFemKAmnqpUEgZVtF",
  "key21": "2oo9v8VUqyPJXhLanu8GxBwuUfGJUhBmT42Ct4HUPFSbnuC11XptNzzSTuECQrZaYyA5s9hHa5HietjyKNUiYwHm",
  "key22": "4T2gGEtxn2N3Yvk9kURWJdzDAV8F7rwwjV69XgQLfa9wfmCwLUjMo1CpUTRbGNw3HCbHFne3wqPFLZukPXEZt3FT",
  "key23": "4bnt3Q3j85Rsm9tfsZiKewQn6fqdWLhcUzeqP6cKSHwQ7o8UuEUUxEtnuiySeCPNhoGNFvRK85NoGe45GJw4jcTS",
  "key24": "5imYAhXgU5rH4GcrdZSr36FRixu4hT9Rc4VM7nN2vEyrqLFaCz2tWCdYDdBCHKHwToJq6VbrX1TbHtP1a4sqHxqn",
  "key25": "ZBhgepFqzS2XmB2eFFiPmZkFAU7SKGWvubwEAL1ZAUZxwPwp4qxmsiCZeiWA9oVTNis2WWz4CuodgzqL4xGkMw6",
  "key26": "2Gw4CMAfLKhznLG1wzjczsrWBkRFWDoyMyHxUTy5KPXXNX5mBxYzcyU3zJjgHQ9NoekKfbhm4TzoyFcuXmyErMnb",
  "key27": "5RmNsvCoHwE1KDiCUeGYSRH6u7js4iV9Fv8SY2tJBms5eVR2n85DZyGHCDBsWS6qqYmjfkL65aUvH5UrBeL2DGTi",
  "key28": "2KbPFHrTMA5YwXSqw8jBQxCa25etdAfsLRB8NSMwVR6y2r7CMeAY1nzLZXdrNJBmgpjvpTybD6TzcePNoueynj5U",
  "key29": "2SUpdcj2AcWfVQRCoxiewytSKHf3iiYpuapZo2gVrw2p1ZhhyGfLpQBunLyzUAAEfRmUwwhxAMDmx2NsggLKZFit",
  "key30": "2KGz9jEq35q6Te2uUmmkF74VPym4n8HE65CSdZJ2yMBvKPuyJUTP95UnYMyA2Ns78CmRbqWxT8LD3Ng7da4QNHQp",
  "key31": "VAcKDMqgT6ZW2mYsurwvBDSKEnsgwyhZD6rit9Bt94Ucmd5TECCXR4xvcEq1oFoAX1h5HEmB6ndCxcboJZKGVP8",
  "key32": "pRrG3EjeADoQHUucDZNngE5yMpVmGK9Ho4ARjgENUr284gbaQffNiLh8PdTThF821n1NjtU7F4yv4eu5EB1z4Sq",
  "key33": "4E3h2qqfaKAkugGDAWu7FoaVeG4DFeAt7D5zu8zJhq9GMu4Pg8574nD7h4j6b2y3RT6notVW3Rw6RMDTPLdE7vDf",
  "key34": "2HWaHqgGJ4adxHYPeLNUUzemVNMZPvfcwCoMGjjYMKaaJj1sKenGqdAvtjiiw969mZvSWid2N9DNBXnz71fkWAGL",
  "key35": "t24ZyBAf6iV2Q8j2AajKMkypgk4wzKSsR33i61CmiRMLnnsY2peoKSAXj6c3L5fr3gyCyu4qKmWu5mRFqU5g7fU",
  "key36": "37C2Z8YpyHdg9LAMQ1H9imsKhkTbqNwY18v4fiFQBLYrbYHiC2cTDGGB2cFGtuni4UUCwvtxTD6ZY2TAyFQpkEAj",
  "key37": "DJUK6hx2hCpUkwQGv6XorD4GEtAU6wLaw6nbe97Xd3NLRufg1WH1QkrfC4dN2PTuUXSeENd2mwKW63ZLEVWM4Ce",
  "key38": "8Xj5NrsNnBDr1v7MVTCyQhhWo9psbgjyG9irEeFrXrpLHinZVf2iDHY3wmrmxwuWezYDhdfBVUcZUcRsCdwZmeb",
  "key39": "3QwG3gdmDm9YnE7PRfHBMYt6kmevBY8vjLKRj7qGS1WKnE6jbX84rFJMhSGB5w2hLgFGEoeV2TfgoCtJsCdMHwf1",
  "key40": "3eDeQwWWhWbT6WbuU7j3o9JR8utKMCJ1yj7UdtWFGvHhCPZiwgQWwEVqrKPMThCQXwhhb3sz2t1i3oUTU3JEWNTH",
  "key41": "4CWoUE7yyrDLD5Q7pw288aBAzD67wy8cNmmytyNjT2yC2fqo62TRi3a8B28DTRXhmRvEdiqUE6f2W3e9wAqMP44B",
  "key42": "45Zm6hKL2hMkHUZKyJipjWtPR5XnyyF7rXrRmpZeKNGK77cukRJZLimTpaeerg9oNJphm9HQDvx4L8NzMuVjWnTF",
  "key43": "5fyg854WpvJdpvDecSgsGGhTuoh7Wqo13sK3RX1QjMrrD7KaSnXoFKyGESg3917ovEX4eqADWevZceDzbQgXTJNL",
  "key44": "5nkWNWsXXspxcrwtitu9CJuYDKBvtaXQuFiTYMG1dCxMCPBhT7HP9dyx2UmKAuPggui7XwBpGKMNMsNg11gc2nwp",
  "key45": "5tQTrRWFYSPkXc7EoRsaRPBWR48Ps2uaHWtmfiTMdGYHyy62siFDbogWxgaKj2j3awa6bPu8xUMoRmTQHdnViFvo"
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
