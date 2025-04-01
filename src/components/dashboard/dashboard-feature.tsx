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
    "jzMAR3YDRzaWmmLTQCeZTSppw2yAeNfQdUmtn5yarqVTNPiGF1a67b2gj9ziBhXwcqb67AzY1yNncu1MUCx8Pup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BZAzoCgRsJ6CGLuTzufuCXrMrRsXhmEbF1aEAd1Aq8TxyJvAqXvRpQozYbjWquy4cd4nngSkApzw8qydq4ZMR5f",
  "key1": "wBAV5iy655tHxRXW758GXNGvMoMYfJQoZMsRpJCVyer6wEBrCfvBQfTWo9YAK9uTCFzohicx6AVUuH3a3eFdooz",
  "key2": "623r2wZyiAQYSRw5MJ7Z3PC6NkeVrknofseMH8VbKtrYJRYe6ux4iyDjDW3k8eXpfHrKgZ91jnBHevgeWrUiC2sY",
  "key3": "2iqeAMa8M7R8Cxek2m7KMBbKDDyghbG6Y5F3GQS4D3DXbB9YmQMW2YtGAKhBfL8VpjSyNB6P6ZNZ9tvSQF2eRawi",
  "key4": "2wW8sRftasoMHHa8VnwH6fqJmUu5zBdVpdXBFjmBcuLSukiPBxbH3HtVoZ2SQjvKMkZS49ZZp9Nr8jZtfis1gkzo",
  "key5": "54PdeMJ5QRa3jwHxGE41ArAM2D5VGgr7Q82Sb59RNYaMxa4iiu96Mso6TbkGHqfzscoW6CuMCQjSLK9GvzK3EDwQ",
  "key6": "3WAwn5JqJTFoFxWrVyEMS4Ks8mE4UDZ6vtpqAfPTgq3MB9icxrPEFJY1QWGSWULvarU8gm7DeLoHjnAaxN6aVBcQ",
  "key7": "6Lo7sFhbsReXpDeHYLK4muiQpS6TYCWk5viCBpVnZT9GHb6ibJ1X2dMYdm2ZiQAx2s6sirBQjsZztC8o5vmGcLf",
  "key8": "2ZYH9577bMgXgWJvZSVEmr2A8m2n72hp1a4EiGprSQtWfbfCRUFYz1p5Md4F4TsJoRzooN6YsHegmxvc4FYrtxTU",
  "key9": "58jRSXNvNKtL4iQFCMkoCefPhTfRmVyf18mzyzfAr4Lhdc5JKJPbjgP6NLTgVgKYJUmbf84cye1PAioeKGZCbi23",
  "key10": "34pwJqdUqwjkipzbWgUqv9x9cweUmDTd9JZwQk9JEco9M8tMt2ixCq7GiqomDUdZis92owYFahracPemKasvxcBD",
  "key11": "3Yu2rgAdqmroNogYTzdsVcVWBiNhUaX2pXp42JvNh77HQC9ddbY6Hr5XZdcnAATYgF6batyDpwMifjYQz13GVJog",
  "key12": "2x2jJKELyTGpbChJqi2Ewi8jgVjjJ1CaeiaABc4npwKvyo9Yo7PhTtfkkbTUNDP3QBBnsRVvtKuLPXewGZmaTW7L",
  "key13": "4HErbAXXBiDm7tvRp7rK71E7TapCMa1qZtnAWcRvx8CwZYa4VB7TG7bhXX7hrLsinWpubJNrj5U7SX8YkciyHgB6",
  "key14": "3ZoXp8yaxCsZkXwQnwLzmDXFrCuEbLa7BmiamwYBGRpzHDtYVN5zCGGNL91WUmBPZT4HUdt3tu3MV6qkZtEPCdNz",
  "key15": "65ispTXH8iRjZsxkMQa36K7WQEgNiB9ZvGgEryCUqsjCKFnmdaxFKW8TWFY4vaqhCp1Sm8CnhtheoEhrKtVeHGdg",
  "key16": "2SEU2VaCqaZWBgTBWDwZTYK6cBH4yJ6eK2tZVJF1Zw8LLpkutr4SVtPgsD1UqsFFgWQcgLcrs62sK4Rp2H6XEKpd",
  "key17": "4XP9HbDyE2pP8N2wKFDTnyZ5fisbB7VngqT7PxhJF5fiRsVGk42BYH3gTto6h4AEUQHk2yM9LTRXmnc9uVXPNjsi",
  "key18": "4jXDrWuSV4qsUohkGucQEL84xuV8iZSMqUQhnuEgDpVNy3QjxHE7yzBhEZTCPNcAUzg9ZipomCMTaEDnjjDrJDL5",
  "key19": "5tdr3zA8aUebJ4CnwqqQpR4Lc2ssWoiAxy7NqDyr7PvWBwvcjNTchMWhWrJa91sonWsSrkb9BZnMvyMdDiYx44ah",
  "key20": "3Jhum4Tmp3gSuAvywsQG3s2VbGDoVEkkVkCRHg3emKcPZREmb4PCR1rkK7AH3rP7obby1UNyuYyqksrpLD4xW7CR",
  "key21": "5qnkhoQjhu7skayRLv5ChxHqBr7CpgLTXQWQcVsQskv1vJ8RmeAknHDAEv44CR4VzNMCm3fjCN1r4nuYSLsoRRq",
  "key22": "Mu8PoBwY5ptcLVrkTcSwZ8p96oi7k4nUhrkW5WMwSPhVtVuu4GnQFeA1qm19FFhA6QgPtgqoBRbMok6GrZeokTp",
  "key23": "492eDUzU7kgNiczdUuvyw81Z5UAiiPgxrEYyQQgYsJ7KwkjbGbcq2xePUJ1B1fHCdaYZesqe3c1s6HdUsQ2AabtP",
  "key24": "36wQ1hNmTjwnVaJaakbckYJihQqMnu2ZJj4Vf8haiizHoEgjMphQmkNeWQne9pT8fWULLeh7t8yvSu3FVv4RvJD7",
  "key25": "3k7xMcdU9K4MfFWwM3m46KsAB1XpbJaSpX3McgFZYSKnnuRWG9kDRSWy1noAxQAmSauUimcGqmmQ62AjJz8t75nn",
  "key26": "2Q81oBRkViS8ePBjNryhDSdoGWdJ5WCKkXH3jMLq8MuNSaKzPasNJUaaAAXzcT9WynFUsXwV3529ShFfwgocGAUE",
  "key27": "3ZWsTsSrTuXW2uLdrwtdtsAtKbYbUcejBa2mQUMGsV2ee6joG2MxRziF2qcxSmeY9J9FAGqYtnz5B2X5epAuQcxC",
  "key28": "3UNsG167pWSFAoZqyC2aHgMLWykd3TTeKjqHF6RJJfMhn8yuetPLQXxoxkhEgC2H5XjJYCMgpjBPsKkwhn89w1PD",
  "key29": "Dh7h6EFXjfTdxc9QFZdoX9uwqfUV8yL8KssKsPdDUwMMeScCCre6bftKBXqEGZb5zcfZ6N9ZFRqsvK7sYC5Fb6Y",
  "key30": "4TEEGHDXRCxFFpUYbyHdH7HTGpLELbodhQ3FhkRgStwN1ZZw7srr2eVFyfkpxp3PgFDJ8EWNJ8VT69j98EL6kXp",
  "key31": "2i9C3e8LgvtvbbJEjEQnWn4aXou1NgMBSrb9TujyzXexstLADUYRUb1imEzk8Luu2yRwuVR1qPQyFC2SzvRbjDMU",
  "key32": "2CcKpP74zwQtHKdN4wxR96EJbSwEsbECUfCB6huRvEWJ919geSSANzmGA1vfC98gWEfuaQ8X64jPnkGd6mQ6U4mt",
  "key33": "3g9h9P57yWVpArgtgGgtHV2KSuyLs68ndvVLSbXkaKpwNFqRf4H6FVNdzTLHn3vAuQiZ7CABNFGDfsg6wgGKipCL",
  "key34": "5gGcW1dDDPovqNCXdsC2hj2SZaXpvq23U6UM52Vg373XpEwDW1fPiT5jWLzrqw61UNtja6oUEQwmK1tfTJFMNzTF",
  "key35": "2ydqSmzKXjvfPe4tZKHKrNtaP8pcAyRD5MY9V3gbjdtjuRRj46HUsjtFAkqpUjnqiavgjsC3xGeTU6XGJoZdgzri",
  "key36": "2H4Fq6FVR2V8H1Yt7Sy4Fyg8PdBg1dUbXncgBQYZdP2wjMo8aDFimuxpYqmPNza4D3WgbWjUMBiHh179ww7QduZ2"
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
