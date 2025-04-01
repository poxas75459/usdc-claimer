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
    "3ELKLcVfJ5dFDYx6Z6CGRtFGuKdjD76ExqgQDginJehSce5NivsnQ2rTgp8uRaEq7z3G9Nw2ktNr17cb8fD8Tt8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i76Mfno2569R5utBqzhH5GqwAPhWiS1W9rM6TeKH7wNHqo9baW1sMKVRcVc83enyXpKT6e8cmtU653jbqibcDK8",
  "key1": "4ge7iqso8JbExHr75PJaRXFj6seQGJjPGDBRFL2VVHwZwXKmDTqW84dZn4KZExChGBpJKTFoV43bamdXRWwsppao",
  "key2": "2ebcBkPGN47FfRH82DfqAcRSKgb9mRDo25fwMXWobujt1QaK5ToCSvJeeQjJLFRy9PFWQ1JWcYAjoTTdFB98AGo7",
  "key3": "52MFRUKtYAxMWaWVGz9Kg3NeCsqQ1d1GXs6LkiWcC4MJAy1czvqhZ8pAKxbma12ZE3cncN41r4nF7FFB5wCfMbRg",
  "key4": "4viMfoR8z4vhsqp5hM5dxdFMw9JYkj6RaDmWFjC1g5GUwFUXFxZwx4xXW8YMfjSxkVxwV4pqHJ7YhNWhTMJkjxfS",
  "key5": "3aLF7vJqLhhNo93uaHg5K6M4NfGTSZEsuQr1RAznXgaa8gKmBc8VsFKbiVrH4SxP3thhzL3N9djRzHhukyib8z3t",
  "key6": "uM56XvBr7pRd2zbJ8nGmfm6ZS62xHjNvQbu6wnMnPEeyMjpHCbDjDugiF2dv7YFXfjKGw1LtsUjrbBabM39pY2W",
  "key7": "4a1Q4oc6oLizsXpFLSSpDh3XZSLkxXJHXYnfBLzQZM6nQri5miUJ6iVP2Yi8AUrSnSg8FS7BnTBnQQTv8XWzKxgC",
  "key8": "3452zoCpUsBByTCgXaxbugXghPRqCPJjFYEQyvAyfeWzx6xCUyzATKhcWNQ9o6SH7GwcuP7xRst49UWZKosb2mpp",
  "key9": "62GeWUfatprqbd6rqEGaNRov6gXPZoijmh8cpYpguWD9CfnbxxX1jBTvCK1X4LbjQwNLrnBYYNj3dcc3gZ4sD8pv",
  "key10": "5krJerDbpk9chnSXZamxvpKQCmd8YVBeFpVgwWk6fndaFRKVN1HZmddy5uh89gG8hhd7T5rWffkpRi4SKWC3hMKG",
  "key11": "5u4v6gYt9Kxp2ntuqTsuQML5ebo8KZhZ6z4KQyLP35VRSVyLxLD41BXQjPnsxaBCrnyJkQdJiawELVHgQ2cJz5cd",
  "key12": "25KNAcfmmv7yP7mvteTAXDgTYdMB3aK8BF8ctRGQs1keoUq8NpQtTJ64NZgVXQ9jqJ6cWWjZnVeG2JEDZ8UJwif4",
  "key13": "4CqExcjZ8KP2s9pgNuTLUARQ6uaEePxn6PAqWX3nM7VxtkeHs4npbrR17SuyJ2ME1d2ZubA9A3KKi3YXiaVVaorD",
  "key14": "5ENYvuPio7S1WpSGew8u5fb4ECzZWXgAjGNPKBjLFUgeSbPqMMPZMBhrQqEPHYUPdktjxbVmEwXquRLP3NNQ6vCP",
  "key15": "qPU6C6zMk3rQc1Gzc4xQawaphQzV3KYv1u9XBQXy9Qdn1o2KgMxoXdfCTZtYGsrgynQWBL2xUUpKqsywpZp9jK5",
  "key16": "QJFDQURbFRQ7RXHyWr9dJUUkHiefaMisGggLaxf91zCMADq3xebeSyEk16YM9GVpRo4nTAisA38WQwt42gNeYnx",
  "key17": "5ZW6nkjbsUdNqMcw5AAo55ekt3AexWNWXMLFt7h2DtW8DFciwb7QzjTzQqxMPZFTfMbLoVj7p22imffu9HWvCQDs",
  "key18": "3G3KWMA3Wm4G4idPz6sJhRkSmVPHiadrUxwWEtMFYHPPn7QMj7x6w52fBNCeAKb1TCKght9wWvFwiQQ4ekGNgYMt",
  "key19": "4bZ7HMNWhSf1Q6tDjAusH6bFfkwUVqJtC2VdUos6JmimavVVSgwSN5T8eDyPKjsm4wAq25FBV5oMokwUXfoEdR9d",
  "key20": "3T31B6H17SVFGShyU11TF2zA2pe7rjf5HqL1TKcBGTGvZRtZmsJiVMqRPcceGpmvz7wMFenZ4QRXeyoczgA61oTW",
  "key21": "5g2sNPocPefrXLVtYLHWga8qDDmWXn2J5iZTqgzHjewPQU3hWyFWG2qi7wcWaKuDdoUEJA9bxLyeRr1PEotgq3k6",
  "key22": "5c7tSeooQjmBqrqTpQErqMZqtynR3RbqHyuGGefkvtVRL5CYeBpYBLpidRGzx7dtgM4bVTJUBihSq3WjmBs6USQj",
  "key23": "4fGPu8zk6uaVDGgPtBWNzGwVkQDsqdT3Cmp8UghFM4iD5whWUwzsN2kTY5S3nWixidWyMyUT2Mpoi3wi5o8JzDfH",
  "key24": "grEy2pwcVMpFFhYyxGW8VuZ91PFU5QM1RKpEkJc8hG1kUNN2Pk6SHg8UcSkyk4pdirnXwXhe5dazjLtXGRr9JEM",
  "key25": "5yshqYj4tby5KLQJJDgUXS2fUfmZb53drWbEDGNrjRd7NdYMncbhCXhdjnBNWD5LGjLZNRQPgBj8f5bhZus3iNDW",
  "key26": "T4EzRG8hfwEjs35eMEpFP3fbx8FsxMpp4GzxbnfPKXzJHaz6Fjz2onrb4R3gzr97Y3kXsMZDKdgVAHK4aD7FvrM",
  "key27": "SKiGRLZb3oKtakrpMr4hb65rBN3kfLphzhRvsaKbtdr8X1k1oudEGCt8FZyK4jqsVD7mkkGSu3SXywg4voUQyYZ",
  "key28": "sgtn7EPFuLv7mj42ii8FYxFNSaUBCF55r2JhAk8aY3W3TATtnnGX5kjfveEA3y3MaYWB1TuSMhgE1p89WZUVSQ1",
  "key29": "5tkAmpaw4PjHYaUrSTqSrH4DvhraWrkgZ1db52yYkR2Y5GEFZPz6SDa2PYpLzJVLtLriSH8R1YkgxqZq4WNukY44",
  "key30": "51d6FjkAccvubuqRhQrWazouZpK4eHxuTe1pgViTPC96SqqW4jsd8HjLXDDBHjCXqdqYmsEWVNUetNrqSgWkpRU9",
  "key31": "2odhz9BAqX58XMRh2pMdUWWoLP5N7GdBHFbeN5xHJYFpeDckNeRWGSDYSGs4G9mH9tnviYMRSzPCU1pMG1CXC2mT",
  "key32": "2KzaCxAyJNMQ7VBMsCzZkXvzUCdHK84QXa1jiEZ9veArQR4RCdmWfHq1vJr6WTP2zkarZhgP9XZpQT6QQZenjcKV",
  "key33": "5ZtNVPKGkfyHUUaxsmhZDXhk8AJ8V37J6pU4YPJqvuMtj1cR5WTj27nPp3rWXNpy6cMUjP9CWkvonmAY3DwPpK7B",
  "key34": "3wJZH1dz26sLH11VaPQiwjyCyzcqUF5Xyxi7YqesJ1t1arNVazD1SfJZeTdXnoprUeWEEpLvN5m72DJdr39R5pBf",
  "key35": "8cEfcTL9193uLhEYu5Uu3612iRNKT6vBSLvx6cHWhx8WbukutpJH2tNG64qmHACyANqRP2k4R4NWWieirvJmF9F",
  "key36": "3bgvsTr2JwThGAepwJaFosJyc2Bh98LJpm44zzsNjtsvnBLLAXczEQktdE9zo5CsQhDzNhjMEjk6fcdFHt5Lii3f",
  "key37": "S95Ls8quVkRKee2FbpGSZK5vergQSfXkDnBw1UsTktSpaChrfvcZRMaQ6efJ33WyvHQMd4GRFJVydYNrKbKSuNj"
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
