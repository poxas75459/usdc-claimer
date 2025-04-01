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
    "4vWLmiUSkHPY1Usu1aAaz5vqMSpUyMp1LbAjyMhxSMfN3cuLBH4mg79zNwNhLFSbnmUWUhhLXdnjCZ3SpvYnVvZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ESBYbAFvWbdoDFyq8YJhTwiqogcZ7rNNgL8yVZrFByeFmXCvZEc8qoWCqnY5DnrKmLgEQGNbqHPXQik6k7g2Kh1",
  "key1": "3RqHKNgKnVp3ReRSJi5DtZP4VtFxm7jdF6sXtMqeKD3YR2dazwZvE6CjGGr659uiRKXE17RRfyDvqheZuB1oL917",
  "key2": "2HZNYQtFi6SZcQSYpzqQFNciKpkbyA2NA68Mk9JSmgcVaQQeLVvBGjMwbAhvv8C48LVmWd3okc2qcdFRbA7btyX6",
  "key3": "52HCG5HpsyoG9eajWnT9MC1yG32f7xLMaQ7zVE8cNRwnP9kwbJ5Y9YPg7gnj5EZp2crG7d4i3s3jfHuksiS7inV2",
  "key4": "2k6YAhReSrvTDgmkuCCAFpFvG8q5Bgf3DRzb9aNBGDH1JZtCV2HGURCRDFqWgKC9Qq35rxjcbf2Z4LSAjJXxwSgX",
  "key5": "4kMb1Vrd5tgVm1kUS8quuCiNjHQ2Rz93pSHoE1euKSs6JYjnoRydhkvkEG8hatJKYnFca9HwvUoL4ZuMLkTdxeqL",
  "key6": "5FYCZ5674FiQYrGn6c86zeQ7ds772adV76i1y3GxLWdUWmNstak298sfrPx7TmtNSCgGwpviXAxKqjVteojppUUP",
  "key7": "5VB49YW36JQQtAjo4RvxZ7DCC6MBZxUA3UJPmc3VVsbteEdGtkmHkiJB9KssHYWN3cdqfyWJQ49miF5bzSkvSWtY",
  "key8": "22GdvT6tXoyMTKKXkup1zvChvmkLzwaZWKNBFH1M3NJLqxsKWdbAuiyLYCg8z6uVLbtX3xhEFxKGntFgHvhGyw9B",
  "key9": "TdD4b7vPUycdtBpDu8vYCrQMjdjH1gx8zeWrSh9o3oztaJki8NNwd4GU6y7yW4QPy3ocPBD46bgovTGWtUJrYrX",
  "key10": "5845cgCTnhtzrN3LTVYrJUujr4PfSLRgZJUgqqes4mozhFpqXRGoDj5GL7mnUWdpAUps7Nbhw8TLJtAP4P7wGNFd",
  "key11": "4DTR7PtyASd3s2kFs2Mmiix6ALrpp62N3MG5CYBg5krq2XmCLRPK8ZPYDdT9ZRXkZtQBVjU8tMVydwmdgp5Q2g94",
  "key12": "Yg79TYtN3rCbGdYBFC1yupGp3V32KvM6tWXL4LEHuME1tvRMqC9gNaQTzqJdbqNfVmDMzJEKwZqTL38KahPxbU2",
  "key13": "4vFBf6eKXwsK69Kk9ZixoiMH9M2ioinGTU8wjJBdCjmaeg9a2PRx6RFVnEUydT977HSGQK68frHRmt9v5VewZkox",
  "key14": "4uvbThXycVzdFbFDJpjLRJdFcLkcvGKHFqfeZUc6YN6sqReuzrv4kfyN6MeFZzJ8hw2ZiyiepvBBq52iZhJU35KP",
  "key15": "4Gwnogp2oYmDjUbc7fPwvNzfEAswaRUZDbEeajFDoAPis1BhtyVoudLL14S29x13tF1kPv7fyzM1wQQdUU7yiwj3",
  "key16": "3gTJfAjSjvfjkRWuKCgRsjURFywzeqnKhFcsiASmaMKSddRLtz67RPui4rP9SyaSWiJuZMmh4pmK5gTaJbCprgMB",
  "key17": "GAfxge8r3W1w7eAPKYHnaGfpzSFkuk533GWwUzKKBJfnMq7s7y6HLvUhaFzNR39GYHzQdodF5XSxMhMAWygjNXa",
  "key18": "2dw55BzpURQDthEdudXBHLyM3w1Ksr6hF5HU8pHb8RotoBGP3svtMu5YKjb1pjiVtvzpEbWydEojf6d2HXd9mtd7",
  "key19": "623b4RVPEkBoYvcdxGMUn2Q4BQuPhMCmLZFz7LpGVCc1Z3y3kb1TPvAfkk2LLMqn9sGUo2Ria8seLWL8YEuCanG3",
  "key20": "5pc1LdvpvAgMKgdCzeUVyqehstsBGbujZRVZjgBXewpPFTc3iFhVdpGX6iWX7E8Q6FfzyGyeS3QoMnT8zajnAcgL",
  "key21": "5tQEXPmuMcxZ6hwVsGVaMgYew2AncLqHzHNTYKXDwWLfL1hgmQneE9eD1tL3J6Ndp7rEXNRXEvTSyc5ZJv7HeAcD",
  "key22": "4SRTWhiTgJmTxNQTVuaxV9sqghtBdYbBLheuCQW7F4UqtoWDq7DfT86BS76x3TCdnLcsVnZXniezcKEFB1DGF23z",
  "key23": "sRMcYrf9MykMTV519kpQA538iwKWcLyNivcgm4iwoFScEFLC1tf8aqvBd9HVZ8awZvnG2qtcQU2F38aYesruQkZ",
  "key24": "kXuTWahzHtEZeEzwks4KFKhGwUyAARdbBnL5qzjXERZCiTbUihZG4Sop2FKRrZkmTnSSgtEbL45GbmS9d1ciYjC",
  "key25": "3xdxSyPPwNBZYT8JqvmZ1s5jL1BmfF7t8rjj7s3LjCQ3igAwLbiRkeM5bPsYonWyKUo4d8vugBa3gtE92JCPdEYz",
  "key26": "5PsRwskkkQRs932UQwepDssuu24SApJD3s793USf8j23Sot5q89HQtyCixhAXK4RSwaNktgKqnUY3GxDJfSJAN3N",
  "key27": "iShxkhzbETnRceNKFgmn3fta46pRp6rSvn4wM1KvFTpDeX3P6r659bfqgZVKSTUer9AwJWd7FwWWfVTvX5d4vxA",
  "key28": "5QhUv8xCnr8jdPee7JW1MHC4st6kygp4Ni8z2mHgd93bidYvoLsUixC72tjjN3nZPtXHUR4rKo3bwdaTtp7sHbBZ",
  "key29": "3LeRcDWgBNdrvtk9zwxHfy1izsS3QTj5jZey1811AEPVj6n2cEW5C6he5wkkBydRKFTcmGDcD3QLKMae5dAabHmE",
  "key30": "2yqtkzTwJv3KxaoBfc46N12fE8hjNFNSo1NF4GGTg9a3oCxvQeGQtrT5EX4hsrnpHrwsLZyai6qZBDtUQHGGv8YQ",
  "key31": "3GhPWxj45BiKX9ifayTRQjHXBuzUL3TfAkyiz3AbTG9n5zvMM7ppoTFpbDGM5LYwt8R52PJBtfzVosrPLbmYgePi",
  "key32": "4TFxBtLJeL8hJctdP4pEcNoN8cYuecBzUbNGqTDgVrpumH5ChaUvSGMCviHQ4ftpPpZZcQVbVyCaKMt85Gi4LE7x",
  "key33": "5AAXhTisGzC7uhXTVGtaQDkA4v63gdx3XrjS1ytCc7Zo1QzPEcG1FEz8zYjaDyf7U5Qyr4aC812TXc8fDK4Xn5Zr",
  "key34": "P4dg38cP9QjftLZL5kFPDiYdrmBaxPktCDpNLHa4kBAczcSZjpGrR2zCaPo6BziUZ7FEKcVoBJZKwR4WJeeueMm",
  "key35": "47cJvgVX8Kmk8iUsZb7R2bqCV6Dp6b5wsTHPAA1iWKf5asSYmuPNuvqQneFGc6aP3YvyhobLPiMLb7N36GcTjDmz",
  "key36": "5Jg23qQiqg5N3QYScifsA859ZXeJ7qACyhKfDfLjnAq4DGHVCkQDBUFD5gHmYfm2Z3Uzui7vbxSCrseJpzJbbFo4",
  "key37": "56XzMpmFLYqMQxbFT25fQLhU8Zy979924CYZgR8Ca1anv3HuPgcsVehfR9Epz88VBnAu2BTM9Uf4GDZURKxcH291"
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
