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
    "2bHJVJDTdeRbuotbXs8YxeZxiuku6MRgF2MWyevMgVEm5nbRFba1DEG1PEU81F4CxMLDvqyfH8x6KuDbffhvwjTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MtkrUwgAQ989A9KvMcLMh9rTFSKUj6CFugANpGkH8vvAYFpdGpKMG3RTaks98zMxGx85fM2ZDfGasc75o8QBpHa",
  "key1": "4wjx45XESfErdS75tHmmno9YXhj57Wgwec5PYGUp3RG2KnzC1k26daZnuUAgYd8bUhfu34fRErSFDG7M8nZBsptp",
  "key2": "518tJuKABusMuaCJiJjCcpS3tD4gXLSK7zKCLRHCznPpipR685r6uDTVCcJ2N4TNjRhW9jqsUcfvE1tuVdw5adGE",
  "key3": "Ds4gpdGo7aSLnB3YvBYJmjWyGpqLwo2nuhpY8XrKy4HyKjFsxnsvxmAuXQcviTUkkWhc6rV8gFiLsp3NLkxKUBJ",
  "key4": "5FboU8RcGqA1hJHTHg1hHnF3UrzAg99zCuarNwiHJHmAUVwExQeRCfpbquMZWpkpCbGJG9vgFXAo2sTbRRgudCkf",
  "key5": "5YLfqRJR3vtXqt8XPzx2pRVKZoy79cxs3cvKdWzuxyvZfgKTyVA28snNmqEXGt5SFwcSFk4GEZQwckZodPuwJx4Y",
  "key6": "4npSfnYyCTzbm56givgysmreDZ1GeELYM64UED4V3ry4zp7qwzG1L423maDgoAxoHM271hX6urEiWAHSp7i9Xfsc",
  "key7": "tD2LGeCgBuR9q8MkpsQpjQgKLbRSB3ThPXLc9p34dUADGrfPfCWVK9bPRxnZG3TMmP5SQwweK3WiB4TYPfXNRR4",
  "key8": "2pAyxdpSeG5m3XXNjptHM8KE3xeQQDRhGfPLrQ2YTUknAsC7Ago5mEYCXiHKf2QeGvSw4UPfnxur6TqaWg2XdV32",
  "key9": "34VGbnHY84JUkU2omByUA6eCyXhWPaApocXdC4zuAvX54FsHEdGKK8hY8iSg5ZsMefbkjLgN7KvkwC3rmCGeTf67",
  "key10": "23r7BeMqKgskQqBS4tWofU7mr4YHGNyE9nYY3iBneM3udF6i2eqBTAnKM6ruwxfqdD4Jb845bWXhTDSoinm2EW6s",
  "key11": "2VYUbKqqFzS5RfYGaRCPXoFzG3XoCp7qmKed1jwChe1MT5yiAY17ShCDnYWbT9MkV3wwH4Ewy5LiEPyhxxAcoN3E",
  "key12": "2xbYePcZLP7gzLmj3EYURZoNMmM32brbSd59V9NGTjmdweByzPS67p1LsyRuKFeq9QGo5vcWaSGKuMCiDbUSBXi3",
  "key13": "54fLMkVpDt3JVCjfSR3uFvX7jNtBgWGprgfe3HV5PuZ36GSkr34wLc1vF4jcmt3t7KgxrAtu2HRkkkVpWMBXvM9H",
  "key14": "4DNDer3U6jcD9sD8RDZjLULtk1BM26jAuRkJixAN2vZH3WJmGXcHxfh17vULccFARSbWqg8TuZzS43dphFkfJZuG",
  "key15": "yAYbrtk6AxFNw8VMTkqwgPULyYs3GZcFThpmanCijHKgGGoiKhKWY8K4R99X5WMjirVxP7Xsd77xxpoMn6s3WgF",
  "key16": "2BZDqKkmN1tcoVCP5QG6oYrqWFiooFib9NSCmbAUteStmNqdEnhHzpyocwrbAtj8KkD8GUHvb8EeDmUZWCx5xLTo",
  "key17": "3Arouwwu8c7zNtyyvRiKiuazo3w2PTDwh17oiLjq9dJzz5QMRkYMePMk3nWDdoXg9GpBgTY2bXAaAdjmPS1BaLuN",
  "key18": "4aaZUve9erzJfZcTWcTLj9pY5sViJckGrAAHyQnT2oGXmhpWkA6Q2eagiFYnz7FsQLkd8QRVQUsbWqWxJGP6Bsdg",
  "key19": "4YyyJJ67mwpfgB1XT1U3Y5ry2TDJiT2ZFQHz6tDevr9FBh3Tz8jjGqo1BN7oyNJRduoTQeXukxoRzcdgwCnMhNis",
  "key20": "4XyHNxfM8h9yKTTahCuCY9zXiuuGKsXwoHKkW48E2WpEiFPaTyv1gF26SFWtb1CbRamCZSqdFJryncXVZcUGTLhs",
  "key21": "P6hsouBvP7esapV2VMrNTjXZgYUre3eBbbRTCFb8kEtGRrYySXTAXYbd6GqvfNpfgLP8M1WM9QE8fMb5oDrf9js",
  "key22": "2xB6TLjbyTJbxCQLCuDZz1rK51aR6ZEES21mQuwzRMMfUXwUqViCJkMuyUWtaCsQRnbnjnwAu4zYEG58JcVNgN5A",
  "key23": "2TiRLhVcvxD7HTgHidTzcPVyBHFjggZGJpESuZD9Dkg5DLKkjbqYJ1SpaNxh73HuM7pXSMwPdvnb89wKV9fUB22u",
  "key24": "2mkMvTmGNYnmrGEZG3rzFFWDLsxfYRdfxxqMNaZdPz82nJKUn8eGBKT5UhTEZkyiLLPpujK1V3QnjnM2xzfpxyGX",
  "key25": "41kb4kyvKyLRADnWFdpV3AaKTwHquvKiAkGorYjrooAEZXmBq28KMQQQ8AnwstcrXhKfsyveC2aGiqszvM583N2c"
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
