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
    "26hP5bDvf3HjvXxW9Q6SMJWFvspvDiE7XoAXZcLeeEP1GT6FH4NtVR1qHZa7zKvm3f1AYGvCcPDem8ctuZ8SGv9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Paqeu1aHjxqgftNg82KFAK7DntFHfRootVb1d3BYV72Mk6SRmNetzGZL5e5ZtXRgiU9SFPnaspojQw4MH4FG6zj",
  "key1": "2kckZNfwEKBwtrS4PByotb65W4qnhpPJ24QCNGr2Wi1LXXmcQg5BL6JUnpyTnXWd5LHzXFVfuJCC9ZVuhgYWg17f",
  "key2": "2HkNaRNMWLYjqqesPrFcTM5bHxL7eAgehB7jVgKudjjjb37dxfpmHt2gMhvH8Uqh2YrxaJF5FCpKRTimFa7crgy",
  "key3": "3HSDJjVpKsZkqsoy4ZmzDn4Kq96HkwMiyHJ9HgtK1AyNao9sM5bcSrMC9JqiqFQZj4HpJRW54WzquLCV9fwT1JNK",
  "key4": "452e7gnU1xefYL4TpBma4yWx8adNr41i8TGu5Tq8joqJ15t9ByHvnmkxeYVusg7LXEvoPbPoYkLsjiMmtwQzhzWx",
  "key5": "55fY8aqqGWfoNh1mL4wuviw53nmBhHh7JVfGGGjwvVBBC1hqadCEZNevHpyvMCtzKGCmaSRuAzR92Ctbg9L5ZnS7",
  "key6": "3pADz3ywxPAsrn77T9da1sXEoGkd6PWxU5xwxKUQCsrkaEm76qXVc6LQXLB5KUtbsMMzbedpTyVR9VP3CWcp9QcB",
  "key7": "5JiokGzEzPra9BGvnR8CJV8xuagcKdH1L5SzAkF1PqCRD9cbjy9e2pNMSkKA6gnafyjQKbtrfuqXZJ2TBoCMGy1f",
  "key8": "58DXUxfQ3VVQndMsKufGyo9fWbQPSsNmc32CHfYkaBijbstf7fKEdV1VzK5s2r6WQcw7c9zp4A7ZMuwNR1uezwAf",
  "key9": "4VfcSLvx25wQLJ7pwgppnX41pJs7pB48TXLoA5jLXyQWTHEoBWn4VGarjvFSQNAAVaeyjsww6zEzFFKLDEu6874R",
  "key10": "yK6cJXabEWytrZjAN4gqi98rTGk8kV6jNQtxH3rGxxVoY6UtHoyytK1QNTALQxDiEj5jC61YhbCpgvmHQQnHLFf",
  "key11": "5XCqduQPRkwYLZfyUUnkin1NTwi4B1PcggzpvK5EBYm4h3FJDVFgSw4dsxivvu6xR2ttJ51Tc5KvgMy5Gx51TcVk",
  "key12": "38aoyNaaXj1GT9ULxnqWGYbSxuAsV4pXagJ3FsWYwXqSV1bV4zDuLmXnARxWS38JbWXXZQFxHr9PiddpLvY9EJZV",
  "key13": "MDbhH67Rqbt7zqUcjoWi9K9Dzgc9i9VFQyg3D4f342Anf4YUhpfrJcP9NF4HScWtC2YjfrPHfd2RqAueRh61fCr",
  "key14": "3t6xQnAtg5ujaMUJj9UFcJMBWJkpbMf7prmfzNUSDsonV9qUzJ13f6WYXBivrigWw5CiBabfg2kGJdtzCovCfyxV",
  "key15": "2Sm1HbSaawiHw5aCqKzf7oDoaejHK7P4SqBut4ncwnPpVCpfArp8eFyBarGHpktMc4ND1Di1LDs3aZ3S8pCL4EGz",
  "key16": "3D1uPLkg8Dov5youHwHRg9UKcuoQFfB4JG53LV149jLcqmcyX36fy8of4Ni4V3nug7SB4szZLkAMF6SuHJvN7ubh",
  "key17": "3qeMTpPQE5ZuB4MPvdAy2X8haNcKnY87H6J7Pac8StvrxRpLjcgLQmMjxzeAUMWtj5hkon3EUp92DKkMRVfDnATz",
  "key18": "4Jb1DyL5i4Kb1SH1W58txhE7NeRFYgRe5uaZEgds1AbMPJWT8zD3sEA5SPnQK1944WBd18zBieDSZm7MCqYyEta1",
  "key19": "3xNvoLYfutu2rnzyJysJinoffxPtu2ZPN2mpwqVRkF6RXNzspn8h4Lu52Mr4KbnKggne3uzDveuDwUht7S9haeRG",
  "key20": "33kbDbCe79RAp2vWwP62KAuTF7Bhr1rmVLhHVmuxetUmG8ckDzzeNzb4zrAKkHzRoe1VCrmcxppc9BXijiHq367o",
  "key21": "4w2eV9AdMgPLenvpJGyz9HP1smmvCryojkqCvxq688ybJmE9DNLGPLaMU5U1XxazY99sJjQK3xDdHQtQ3jyNC8GU",
  "key22": "2z7Jmyiv2npKUA4XrsaWKgKGNWnLxpLY8sNtVsLjqK2eHtAWrAdUQNZZQcwMTM3eZpwKccQC8gvcCgB9CTKYfAjf",
  "key23": "2A2nervsjcnyyefPcDgjVBaepoPy3wpchfrHDaV5i8MYcEQB33WpVVnhfHcrGZP26EgpX12msPemRJx6NtxTrKHm",
  "key24": "5Fk43RA7xuVspsPUsKdQzJaPkYNuqQ3oKmNyDsPwhQwdFjwrkHRC7vJmCQndLjhfpQ3LRuYEPcntVnGjGkAqrC68",
  "key25": "4HUnmiZPqBtfnDhwucWXKRj4BKKuu2X8Uo7UmBXp2hjNLgBqXVVVG4bz65VLPP6F94Ju3tQ6p7UPfbsNoJTBq8yZ",
  "key26": "5C1XAdH6hFdByxLQWptZMNptQnzh8723Mvv3qLbUJujLBd78pYQZykGr4Un9FGQLzZQaFMXxJuG8yuFAjjMXTLWA",
  "key27": "58zkWMRLABRe9vap3axzt7g66GCSvXua1LXe5AzPNToghyx7srGrtXxHiaLGVqG8Tyotbb7W6ozYQ7Y9cJy2zFsw",
  "key28": "32FJUDkskpEDDUzXZki2YhpLrWyAbqrRQEewimra7oEZk4hc1XUDGTGsm3vYgtBYf21uE3gxALfwDoRjXM8HPcsx",
  "key29": "2pwJQbaNKMkgfMKHoFy4oBF6kPy2iDZztt2AXRGBKaQpkdEdtUx5b82j8F55sxGDLBihmF8M313kX3VY1JEnKRkW",
  "key30": "4SxwMSXfzFKyKrn3LSz9bbT7S3pPi2ur26heA8NaHEmbZHgt58rDy5U9zVe5jr4ersQuveMANE1ZjmxXkVA598rD",
  "key31": "BhXpfLUKsLfzSeaNPgkEQrWN7dvjmKmAhhyJxZDqWqNg5VWUXsRPPtAwrk5DXFvUq49Sh17qip6uSJEWqLbZb6o",
  "key32": "ATvAKNz9xLHBjDpGfkNABHDkLh2heRHxNZTQosW5Hq94GRuzhBj5nJ9PkytEqahns2jbgHome2zCWNq7JG3NZWB",
  "key33": "2eDRJwXJQ3bvsosPuTUcVhHFPACxrxBbWSYE3B3k15gnAGnnXoLpu4hNYRRJgVxH8q75jGuArqjQ2ZeKJenw94oJ",
  "key34": "4GLAoCgX5qPwQUjY8fNnfbfaq8MwYR7YT9LmoCt79GPN2x1XayNp9Zejn85EwZynZUuMiS1FS1AbnB55w8cfxXCQ",
  "key35": "58fUvEbAJgS5gKxrRoJNNjEs9qAmpmC7EXB6EDgHRUwRopgtLMt8GuPaKbVk22MTNtdb4nFPvAxd2VzaFjy1qD71",
  "key36": "iy8x3Dgr21WVRoaLQWYEzd4CQA2ELwLrBNo63JgLbyBo3FaDbLcvLoAqKFYAudyaTDjaucanmMETKna1yqhPLT3",
  "key37": "CKCaJgW5jgvaNr16s2d3MWR3rcGGQ7RY3XKNEzd812Wczb23sJBrxLCrRufZPvj8tzWCqZVg4P6xePanehDg9PC",
  "key38": "iVhTfxYYoyNjo33CZwX96hcmWq3g8J7dLpfGeFKm61QsbLwpC949h7ssxDzMa2Tsmy43bHJZ8VJxa519kMiFUcu",
  "key39": "2u8Q4Q5vnjgjvfxS2Y1hKY4o6vjV8iNwJL3ExJRkfost9CJbfzgbpvWTaLKJmgv3mzoZTyDwrjwUeNCoch1zuixK",
  "key40": "63DGoiLkLkV97TLVWax9UE8c7v6AjQ1sexAug8uR8jcz5TAiqB9XNFg9FJnktoChvSb1n5KmfTKwau4B7Hq3wJ7b",
  "key41": "2bA9fWWWmfxnremZRSoerrQm4FKx1Vewh3uendEqZ66s1SZEWbuTnRdardsgjm8cvTKR8yKtKcD7kajFwggxmsTU",
  "key42": "4Rt7yToaxUkVizGaho5tEsuZhAiVsG6uSZE86Ch7Xk2eHepfBSKJ1rNixCZm9dqyjPCGujrK5y4TYR6nCrKUHP7t"
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
