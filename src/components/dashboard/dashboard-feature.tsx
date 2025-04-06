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
    "2Qc1LVHnrzKouxbn1pYufSBtzs45u4sNjY6GUrUFjhyeoHQLp6PEqyDZtWKC85hvNZTsPNpXhBbp7P3mk5XmP7Kb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BUvaxqoxxfkaww2f7UxF8yKLuK3WWwfPa2noMfXa8YWJvwnkvHyjbS3P8sR6kgGZYJruxAmYtZAwTxuDubPwh51",
  "key1": "3TwHPcgj5E6kxWoXLdD1u3t6Lm7MxpJkvc8Btm67tpoSwLGiTahaMrrdHz1z4emzoxy5ACrssETfTfmafU6WRj1a",
  "key2": "298m7VF8PLAVKe9eHpjf8pa2GPqCeFSKWmzt7VafqgaGPHGF9Je4nX9AyeKJdvdA55QERuDDGJcpByRi65t3tDh7",
  "key3": "2fCUMY8RYRYTYkgAGiBkJU4MTvWEw5qWGgRtKPEr6Rb29mvNDGSG6bZcpZjMCp1rXNFbpcMmmwaaLcMUwpc416mU",
  "key4": "5SKgMAGieBqm6FNUaXaLusL9dePEaaJpiLfJ8X1mYuFYiah88gXFdpXfzkvG5xgj51ugFtpZMju1dJT3WAW8pEwM",
  "key5": "32DSYidd8Q5Jv8JLF4BzD88VWafwDWA8M3imgTiEdRhe1EczZjLEqskNdVKij2oC2FSt9bMx7xiXqv2v2qzSBrDx",
  "key6": "2Ln5RjiGEhLWzod9KtbbMmVtnF8qQvif1gKBTGyiVwKgdSTRQQt2uUbnoYqAvduUP1Y1jP27Cvohpa5wsPiJr4J4",
  "key7": "3R661Jjf6c85qf1h63dmwMDgUpZxf5cQtayrNEpwhYY41oRqrvGVdHoQpQfZXtgx3GygU6LRhxAq9AwGWhYSfAiL",
  "key8": "wWyrvYa2CiWLojuU6ikbfXy87AgqVmGwcKXGW4JhAGR3Y7vGX7PePViwJK1PzqrxQVntvijK2PtmL2Xo6w1vMEE",
  "key9": "2KWqAmPRuzUtWus2BND1emVhG1w8vhbpM2JLMKKEXGnGqQYpff4gHWoF83mehfnUK97oK8pLQBz4d42xV9wr11cd",
  "key10": "2ckP5LTgSF8pP6YmragK5JQbaB5ncto3XVSThWdYsdw7k8ZTgrhgBZ73v47M5tbB5d2XQTKCPVrtitjwRBuaWRAk",
  "key11": "4EmNveWfqVSCdKZ6oMRNHNWRo9XQw3LsCKCWjqMVsr1RNiFA9wCqJbNDo4i8szQY6KkEeLMt9wgdmQnHs9hYg1ke",
  "key12": "QvLSbUREaB9HfUdhTfMmTMnEgNtZgDxrp974G6o69G51hJ7hH1AazyTbYuVgTUJyvA9Ydtt6okmj6okbkmjhoge",
  "key13": "4Nx8RgZt4Y6rhBLagZsnSpbowyB2PsJ1JoLuUkvYzFzMFw6KXozA34D4E34LyEjaYeVBqp3tmDmkfAKozZMAAMhx",
  "key14": "2tPppQwnQPMSHZHzLZvKSQcu14JnaauqTzWv9Xr5kSpJsQ6DtUCMnutbBwSFdniZHZpnmfLX6tjCJcF9Xyhs8v2x",
  "key15": "gaKn7oVQin2WpzDzSVw7LYLzffBSRpJLbzTGrAkCGukobRu1TXmSMjjVrRqtCBJF8VfCakNbAqrNKrgkczWmimz",
  "key16": "49pwUziuFka8vKWiQm4UuP2JQSshbY3pDAheLJHZc7bRA2j7BxqxHY3m6Mo8tQr7dsSvyVKT8B1G6YRGuNFchYKJ",
  "key17": "Jx9w357oMDbfDgqeGAKf3GLjrX3Byha26aiqgKzn8AQLrmnmzdgtzhkun3mbVwPXXsXk42yyUjiUSerfpM3bK2t",
  "key18": "2XG2LRa6QdN8NMsKZDqWTNN7GZQJavmmgXY2SJ1dWanBsCrrwG9N7ovUGsxzq4WhAQUU3knXxhcE2nHAWdUcYF6r",
  "key19": "umrXWSjkYNTaPSZM3VFDcFB7A7fsk6NX2b4L1fand3mSD3LDGYsA1vnnCwvjr2upwdQm11TfsJafwdNXtKVK1uM",
  "key20": "DJWZfJBaUxtD8KpoK2iis9rJtiupZFfLDoZPoqohhtZ6DrqX5iDb9kvZFqqvgw2anREsSMh78QB1ZWtUYQPmbiu",
  "key21": "5cqitVByoxoueufS4y4dL63cGB913BCc26kz126uoX18CsrPBbzQHdwnmWSkDBJBBELoW1z29bzntiKCfmXLeD8s",
  "key22": "31pBPVeFT8E5RAwi4C2ce7XrdhNMN3B3fDyfugwtwYAe7T5b7QcrfeF5EpDcaJLS2ucx3zkG1km3hPGiErZRDNvv",
  "key23": "5zp1wokW8SY6eTwrwFNtVxwF5W4Yg5eifpHksrqu76SdbojGZ6m76qD4ejoLTZEZmSp3RoBjQXHTYam6HXThZgm5",
  "key24": "2LsEreNuKFd2DvodDuG48N4fDJfpQVJgDpqpHUQVwL5S7xpHyP3mXrDgHq7ghipriRyJnMBtYKqD287zYdD5en5Q",
  "key25": "3QXYamhsVkDfX6aLWPvM6xDZb353SSdUVfFzoCZeS1oCvAU64pi2dQVjVongp54GP8tLkUFd1gcQMbCLP27jEuyZ",
  "key26": "CRJuN8RzHEVKEx7eRDdDWRNypvc9x6hdaeWLuhnBDVGzvc6nUvLQG3n1Xq8X872wqdhV2sgDvKKEpZXhMhA6cLN",
  "key27": "2kymarPNAJMowJHVFJiQf2PPsx2tLUke6ZVUKCFqhRttBvx17iJpWb2PdvbsH2xYUqWxeKyidEAiSJqUpNEckxbn",
  "key28": "2fKVXGb1x1SGahhcZy7y5UqQceqCJ6ep2io5KTKtrUJcyk6hC6PDK5DzBPRteyVcCmZm54Bt1XffLX1QUmtsH1y6",
  "key29": "446VYrH2GuTx6PP6jz8Py9CiPfd6dzgajsefCGCH8W4WksZgfZRiUUfAwcgZVz6AJkBqrC9CuGLyjRLUZc5t3AQY",
  "key30": "3X1QyRPtmJ4ysJGTbL6VyGs7zr1fmXcU1yxYRNJtwzSBquhVSr9UZf13rugtLeEbKUFRSfmr6xxoHyrbAa6F5dfu",
  "key31": "4GBbHJsvanYF1qCrC9JwyiiRrZpuCzrXUqhkZE8JwZUZ38JpRNiZW3HUbcVXYyAp319mC7FeTNYzqpQ5c5GxpHpu",
  "key32": "3VbAef1KayEKEq1vJtxvrCcR1RbEk7XZDxKxywDDPeJ8goBvrHb1bu8po3NF1KLGuP2v7ak89QmtYtNohZSp5TJu",
  "key33": "3aEpsXuaXTR7mvCMdwcWkU4q9HEjsKj4FQiDHWjEay3mW6rHEVLafxt5nmpE5Yy4eu6W5TZn9gBjfkpkgdVWkGnS"
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
