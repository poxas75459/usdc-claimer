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
    "34io7zC7WQP24DLkB786hedTwtPH8FHzmA98wxPHJ6eH6DSH7rcjvdA15Eud2qG8x9iw458E6A4m35S6BtA2reEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b14Wr3PdRn6ABGmGPDMW1BDQ5XQPpC8ts1wh2tNVdP8S7qQVHFv3yVRpfUro322qXyiXjj6MjBQcKueowfLj1FC",
  "key1": "HnZC4eTAKNUKfqe9NK7CWnkPSaZL4eja3gVkJLjqMCax8mZbZoeFvbLJASY3i1Uv7deaZEnywxLJPVJ1zuuEUxP",
  "key2": "3xS6ZNrFdL9Kku4GLGnh2h39TxoSbsERTnRk9ibpsHivj1U8Z5oR8unCUpSyEjzGvNRGJ2ehEmCcKd1rVaV4NwrV",
  "key3": "3xQqy4jpzkRemHuhThE18ZjgA1Je5g88qnTzJPs3rP3tD6nkTGTcbEyyyG7q4dQgUUUSKARDTp6v2GMHk86aCrug",
  "key4": "5PzpqeXoaYL2X411Xxp1R6nGca8v3muJBkcDgCCu5d9oBfAoVfGhakbSwYfR1CAMKNpV1jxyriFJEKji4owK943g",
  "key5": "4bjgEq6opyNm73i4PbeiQybHo3xuWpUsLq2FbveEu7ToM3STvpL5ahrMAdBxXEZYPxwFMpMKp7jYspgeh4fAPis7",
  "key6": "xPkgGtWzM2s6VFWqWsZdU3r9CCettWa2nUtq9BDQp2VK4wDby2tFZR7nrVywfXK2gREd5NrFPNqe4URo4jrtUSE",
  "key7": "aitTsdNnoiPyvKYN19AyxjtmsMg6wPVzpsqkhS3ymjZtSfR1y5RXX5RhfdhAqZZt6cjbpof3oT5NpWvHM8TzfNS",
  "key8": "5mfHVjNeFPGtZj71PcKSFHzesV4hfTVNUmnZx41rBSTiZuXvnbTmXRWZdmVkKbKDY9caoSVrjRu2S4LXMBbtxzER",
  "key9": "2TUjWM6vtEu53QVdnRWqsVshpRX5LYN2E53iC21BGbk1Rs7e1Qn58mBn3oZ6yb5oW7bCv3UNEkwGo4Sw2mio2NQs",
  "key10": "2FpomysYBpNoSKV8cnr3zdKT9ms2pu71dtS97NtyNqQmnLRfmUV7pvs9C5wCbPxCgmzykRCYKxaaCArq69TkCLon",
  "key11": "eTXetYCQUYyRJHUkA3fYHJStu2Gew5zAiU5WAPhssweqXawvzEb9UpZyWBdpCXdGgdHEsu71JjqxQKq1bNU4V9B",
  "key12": "4U3V5Nqase2QK2zPzxzJBrW1WQaZu4fx99i5KkjKTGomVz5xTqgkUBQGNz8iZqzwuR3i8h56ffZnkw7gAEoVgQF3",
  "key13": "3P196wvCby3SfJqZ7V7VgS8h4KHpQ1JFg3HpJbvtkYNxQ5gWiJ24fLdbDGrLtKRGe4H9ZuPG6MuiBbAhBAauop7p",
  "key14": "2MM253kuDLhQX5kixGWQRZp8NMkYTpP7dxhN6rDCgqU29NwNcqjKGLHNVb9tMYevf2JXzodWvByaDB1jpuJL9rqR",
  "key15": "3fhMBvX1TA9PNf1EC5gejTfRCV9PEyzk6WVrjpW4RscC1uF41YjVhpDDX6xuYGdAXx1EDvSeG7meBLXLGXmTqh3N",
  "key16": "3eGrQCThvkcKVmfUjs8PhmiKruiL2Yfi5ye8ba3oLt6gRqQF1mcwpwYf4i6WMa4yqogonQqvLJqKTPWkf9WgNEdj",
  "key17": "49krYF2LJX4AurfjQMsFsLrj4az1Em7xgkMCnhLCfXP1LZWp16VAxH2tMwCUmCUTb8yGEz8j1sNczAkHYTFJyFxT",
  "key18": "4d6wocwAn2Q78uwkvU4CB3Ta5pGgPA18o3ExsUjtJh31DpVhEkFNm1CHbFkmkrqTwJjEJkQVis2LQFmcZom4F6ho",
  "key19": "5oahnstbnAWAmEEBbxm7eE2ejNCiLkP7HcZbx9Wy2HE2Axgfopc5yfHD7jLtAa4LAXbQB6XkkxBAAypgZLuqVL1a",
  "key20": "29XrTVmpypemmBkLmpa1Cvy8K1sNEs2An6djG6RX8m56ssNHqbQkodpRUCTar2m9LmgA7AqkPPQxAfJuKEVa95dq",
  "key21": "4SHVmMQWKeW7qdGeAPNNvwuu6JYm85XmEWhXEbhZ5Z1VTHbstobesCwtPDacezWViTKv4bcc5WBQjJ6VvUrJciNn",
  "key22": "2kCnpNcnKbS5FAYrhPgiTRJbuRfYK16Ue8Z23WqYByy9Jcnj33K8Si32V8QKmgJMCZGRLKztoRamURGRqqtHhcEL",
  "key23": "3VDuZ6CYLbBfre9VPEJkprPq4Fa9ftbmcze14r39tss21znp1jLFSuuDdMeYeVTiSHAWhqUjbxqs5wkvQpAHVKDE",
  "key24": "HN4HHivpiNXqsGqiH9FQqaGtWuZa8YF1KEaKchcPJjQd3R9SqfDc3rtRCYzLZbgjxoiqKpjeNBMiLx8RjgJgozk",
  "key25": "3dC6uDE1FdYMbFo5YnoYEQx4tkJVPq3BxpBY4fHJ13XFESpr7Ntm8LLoCnwWjnRohMxtBy4Kief1tsoUPe5m27oC",
  "key26": "5ekRRoGmWu53Ky6yNHtJArYiV15fBnuk6QXLW6M5g6jfLnaPpeq4dug2vqLe2zSVXSeex58QheQ9YU7CTMdbNv5V",
  "key27": "nRaxiJLx7DU5GuDzu93CBvzUAX1LuRNkGZiXBUa4E1QBmpSpKwfLo8HxP7ZvsQwhUh5Di1rCBYu5yrURgN7SKe5"
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
