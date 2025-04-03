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
    "Xtg8ezZtgKNQcs5Bmow6Bys2B29Be6R1gsqRQWnXvZJLgLkAHHdn9jz96N6sBnE8bcSPVdY5KcTbGYoYKi5i9Wg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HrGSUzJu71boENH9Xgt3VTB8fcsH4ut4FMCTD72R65obhsNfT5hJvR6vDbVwKvMg2NG44GZNu2iabZ8YgYqofpe",
  "key1": "32aAR19jZQE5SiNuZgwRMAq9D8cAW27krQY5aYEDByqALLN8AMHHb2JsKPQ3kuHQdboSoVkWALyxEZWJ2P4EXz5G",
  "key2": "5GrohK9hhFurRyURdVSiasbWfhDjQvs1dRwZBUHfcDiHtcCqP3hHi8xnncyou72iFcRea53jBaeDhpbV1XoxG1a1",
  "key3": "5aRh73stFcCzqkxBLRZb1VFQ6PQYwRmbHxcge9X92oxRCsKnBHMabr8qYEfCtaP79UrLg8Cw1spySygVQ56KfRAM",
  "key4": "5f62sesNR2HYN5moct7PQtEJZoDDeTJAtxQc8wvLVGfoSHLF3LMze7WTm14DRcA7ANPkdseenCciBb6L7dmEcBCd",
  "key5": "3MNx44bJcEzG86Ph4ui3qLpsYeCXPJHXrDMdh6RN7P6Ha841JVCLw4p5sGxpZV1kz2KTstFBZFe6VLiKpM4Afekw",
  "key6": "3juEenysYu6T6AYmzix8GBaX3ookCNY9wArJcDAuh9GSvHqZ2CHW6hufFn4F77EN1vr8opHsi6RBjXHtjhQmtZcM",
  "key7": "2y5bXFo6EKEXwuozD5hqr4r5Ax7wYLLyyxwDkFBiNwLaNs3SzJu78sokoUtGtYPv8SSXYaH34mJDX2YoLq3JJ8Qc",
  "key8": "2cdzJnf7UGMfUEHgEairCe5ig2JJfyUgoMWhu4Eguu3gEMDFaHp3EVJaUoK1ghtvrPYMpvq38Ln8XoJBG9ryYYyW",
  "key9": "2NYVQ94j7zhASA9SKacTLaDcZ8EHob7yd14RmctaEsXKr6KxCk8FTfJ4cTaHrn73eJoSQc4F8uDZUsfV3dV1bEPv",
  "key10": "59eT3UDSWByFEnWdzC9sTJJZKfqvuagtkV3LW7iLt1BSMK1rswuChdp4FsJR1zNcw9UV4qjMsR8fM33b3r2gHP8c",
  "key11": "38an6uJd48bqzn3nLCLdvEB35voDvjeecwCmZTCAfVGwjALckA4fTSsq7NDW59YozSRkMQttZ9kXhwMXgRr1FMCC",
  "key12": "2wwpQAHtPt3tLSLmaviNZyRosnudfC51WD5bmHch8byoq8GromN6VGMSSArW5KBDKfBuwrYoEZ7BNXhh4E9s1NeV",
  "key13": "5PBKy1uXoA78yKK6m6TuxozckvKor9WH6ANt2nv6fHhtsqYXCyLG3WqjMCTHyKjQjJkn4pu7J8Y1Y4LDvkzCAXVr",
  "key14": "2THh5qNnTNkQibbyEwByJS2fwqEpYvdaBr3HaKRSPGGnruQzJFs5s6Re9srfJMtd2sfThHYxp1QRLGe7mqiCFUiC",
  "key15": "3t6RF6esuNZyZ5XaohC6jyQt6SJmZoNRk7KCAsthhn4nGVnWDtSS68U3yXUboQvh7kYnRFiPBBgegNxiCeaB7TLR",
  "key16": "3rzh4iboekrUA9uz8BtMDm2ffWzvRJwBfWbYHoT5DCKarD1RjEmaFK89NZTwRSEfGnPK6AZxv1jQ4FQMkwA9to6A",
  "key17": "5CTSXzPPSK3iZbiHzp2bDSZSofmzwRBj22A9vaXHRLGVVX15W7NgJrgRocKf12MW23WQSBuDVNkWQAcmU4zY1jno",
  "key18": "Uj5MwmFvnExum1h6wHenDnUCK49abVDE1NMjBwi8wi1TTPw8Re9nrbUkAKKk7cxSLVWbMa3vnD6D3SCSUGY7vHe",
  "key19": "533fyhKxqfcbjLVDwFTGy3qbEZ1sr2XU5MLvn5hsse13AP9XkcJpfKxTTtNubDkbVgWitCUtSCKZYMiRbaApwHyr",
  "key20": "5TN9u8KJZyVbVbLE7oJrtFFx5Fog6ihmVSrSw5shhFtEcCUZormtPP962GnY8uCKsYta5sdrioA2r3jzU5Ne6LGJ",
  "key21": "CMQU6YDJAXdNqZqidy4Qr93fa2t85R74HtMyXhdMaisTNscfteVx8QtZuLs8UkjsQPtnRBZFDvrzyz6AmM1X5sD",
  "key22": "vQ3KQs3XivB8g1hm2sqe6ngC94XT86HPGBmFqw4M1mEnB71tqxy4u9ncKYBDEhgBZxtTYRcTmZnDwwzHRsKgrhi",
  "key23": "2dh8txDyXRz91mZtP9QSRzZMxGFQR9CukhQMxSKu4onHTrMV1nwPtcY65xTCWUYo4Ed3mYUqYPNohb8aTUQtY7wx",
  "key24": "634mkeRN1NQ8cCLBU6458aaeY4Yz6G1DDJpvJDN2wxXwAoaWsSSwkK4CmbmUduv1X2YnBSV8nhK9gZVH1Wkfcjq9",
  "key25": "4EhTqZQ5JzQJ52HcPodz2kGtHMH9ShUfvmxveUEi3z6WxgKETs95g3XoZH8aN2DdFrNEcq5E3SjPNidJHXEEJZU4",
  "key26": "47dw8AX7uBQVRRHRnvXMbd2ENS4cLNQbZEbQB7gMLesKS1LNoJmUzt4RvUFWSr8ZN6zGKvu7gnEf2jsjSGi2jJNg",
  "key27": "2m3EdQUrKtnXTXjp2egt6Azy35AT1qVvqiLxPMGgngor1h7W5mjdE7xvB2AVq4ByzMBWwEj7bVKNmqgkj4s5yvbC",
  "key28": "6X5sQfhejiNTUmcr7nfAkN6ByYA5Y4UhNiY6WKVc8bYPnxP4MERKt29g1a8JWTGLztK4qQAntoGazsrcBcB7tQF",
  "key29": "2bZj6jZTT28VqVSqyzaU4fK8iZo9yndskBmD6h9gxQuaUesRA2x2HPyZPmsBTDrRVv8B7WUeSW6k4uwJTAyj6rQR",
  "key30": "2e4QdjCBsbPqpbeqhFNSsEqBAqvjLG2nfTKzpkyHZHwMi8uYvXePSLekJQbs9nFEr2tRQicrUjvXymyRHkJ9cyK6",
  "key31": "4wnAGi752XqShhU76ZPzjcLHe8ck7hPQmynDqWWFwdwgHtaYsf2E6Gzn1HkzhmMdwSZXgszEiTteT7RbWcGeRJUV",
  "key32": "3ZHo7gsbVnkPC3dWjc1ujtU7SzaNwcR9HioDQ1YdKZeoEFgKDJrY3BAjXUDxHQ1GDCP1bPm4FtNQe5enNwxs2Udc",
  "key33": "2ueuRewx5h1khcz6t3FvzmtE3Tx2YhNwvpEBQ4hTah8HY7TxwFq4xBKtF3Nj5mRFCyaoekzQoqTKiqS1o2kyH68k"
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
