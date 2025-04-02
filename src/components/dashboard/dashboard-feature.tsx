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
    "2LZGtiSUQhGZdoaNkEvLZ1XaA4sAGzFj5hXmgG1b2xsnVXMd2LHyZ4McDJfx5TWVu7TZWCmdPjRTHapeFZ2CjPXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KyixC1oHMNTYojtVoLfpoytSoSsW9JSUH75J8VvfsZiLcrxZwDXVm9d5C4RWrXjk47mZUNbsDwffjMYxMbNg9mT",
  "key1": "5WMwt8kRaDgRS4wwxoAZLrxU5JjNUkRSFYr1bFsLxxBmkXPGrBc6x3pGjSjYv3eB4sHKWFwg11ru6wrosYmDCQo",
  "key2": "37grS1AHzAVVqtvZSha55oTYiT3tVfa8wryRGWNUko6irMEq4dzFMfNWMMdfvxVrj3myB1BSzUTNzQB5LXfCc2yF",
  "key3": "4T1SBJzvejbd3L96tHd8eXSmTfwnbcSjKdRfdbwmkMm5MnXK8TQrthT5XdoFTifqw5zZDG24WpHJ8msywkprEqp5",
  "key4": "5YgQe6Bhdr4WisBjwqtEQG4o6G82AvuDwztAAHwp4fdmfk3SX4pxHnBaCk58X4BUPg9xAEX4h4m4566Fvep7VCxH",
  "key5": "5AGQJ51K3VEycCRT9BknegT512DqmgauU5zqouzdUpdEF8U49Fmtdoax1v6uH66aSZ1FZoHBR6hGR8xVvBmJ1b4f",
  "key6": "2mpyN3KBa5KqJkNpfRfUjYMZok2WFXHYwsD6NPPUu5osQcBUNDELPEbuMJ2wYTKauL72A9ZHNeb6RzSXdv6LsLPH",
  "key7": "48fkgsh3RctBkozxvRoL4QKHCnoxk4ZUm3HmmfvvWsXVL6dVGHTfJz7FvSUXPdEPGnyf6jzhpSqsskgZb69wxT7A",
  "key8": "37v7rMxrdZq1HBqzQwLHvsCDuWfNPNzchZSjQniHBt42ViaeFYbokidFXt1yZ53GZTo5ZHkp69FnUMJbERJhE9Wy",
  "key9": "37oXHAciHbnCZmysiEpah3oLHmJRwAzybHuvJb9ZQcKJbPywc8TvpQt79Wqep8ahvAKs1NnrZEJafCT7rtMe4XYY",
  "key10": "4v7jjyyoLFfyMX1tMnQdMKPdcK9xfgzFdMkS5P1mPiS1W1vELLGdzje6hcRArEQMLv3xCof9f6uC3dnzrQqERJt4",
  "key11": "4H7otfHzPzdiGF9cfmrvFjd9FcEb2N2GkXdagVTe5UKTcT1ZLrvgY6Kvwwqrr9s5KGod4nvMxi9E3i3tarvd93SL",
  "key12": "31vvintE5H6qi7oyfGLxxXZQyVRagZvy6vGJqJdzN1BPYZsfYMFzLVv8jAK82oZg6KSy8sp8RzESVVA9McJNCL7o",
  "key13": "3SWgWAdjRxAVHERFKPESY9kq8NoEHT5Q1di9ADLVSDHWzRkgb3ar81gw9GDgz2ephc6VeTcKgULejs49e7cEgbrb",
  "key14": "43uUpkFERNoDovpFpvL818ULchWffdUfvtoYdyCVZ2aoraiPKCSAzMeWtoYCtjAPGHuisPKjnqqTaeF4DZoqKz4R",
  "key15": "5QpyqTaGNu6qGZkjemEgWrYCCXEuHuonvw5atntepSD69zdowVwFpcnzLCvemsi1R1o2eMzQcGZ6byqiohLWnwrR",
  "key16": "gnkZvpcFjACTVxJnBx4vkYZXMBAT6ig8ZLxpV1hf2BoB8WapHwFtrpqdmYn7e4AP3ffYDPWABLCbFTobJcREV1H",
  "key17": "3vzdqC19UdaPgr3FpMwygAqjUYdsM62iTZV2Jnr1JNx91rfVxpCodjg8essnJeAoBZdu6ddy6eiN7y8QQFxtvRGc",
  "key18": "3KjRMff7YBpTBF9g2Rexcbg8Ma4EpS8Uahze7wL3CHXntxjToECRE2wE4djSee8oTP5tdh7bBRzQraYe7vtp4jPk",
  "key19": "4M7yU4suuwdK7oGWQ8wGbZfkZVvBsiAS739tL9kP8uLe613F4xscQKWQF6v5j76dXuF5o286cY9PAm68v8sVRxce",
  "key20": "4PVnGcHD1zRbphsTRpnKTP4LebWoWjT9D52wfgv4aLzWKZ8mHr5NTagJKajHt8yRrzBPJfFijWiwvG1THThWHXme",
  "key21": "5fjs6yUmL4BCnArgZS8RMFxyRpifBYXhRttJn6ub1gThEhpefxZLfSmVruoNUVr8N9i4xTxsiXMSs5nqvQ8uTWXL",
  "key22": "2eLYchmUwugdLi99ozvNVfKLG87jYRVKnAvjHNrMQi9HddenrPzetk1Yj5DWF46bDBy77Y2a1i24kmUEs6Vz6qTB",
  "key23": "46M5NQsBXdHD5Uiqx3YisX5K8k1LqvE5JfVDdyjwaK4REQD2B11fw3MmTKsH8sMGPYFiyRde5Dbk2KkwRRQYaE8k",
  "key24": "2r2jniy92eUi3c3yNCNzjjpr7vFK2fPHJwSfT7HX3wKwrrDpFLvRUf2twtyRjd7DyH2Vz4TNrho4EcCitJXjsoE6",
  "key25": "3ANLTc493VmzFRgabzthb5HkM85nzjhuMumg2Qrh3aNEaLTbbfmSG8Lmxyyic5MzATQs2DBydEMcbSwthixJS3Bu",
  "key26": "2dUgbDV319RiYpppSVXmXGTR8Cfor4CXkCUyWmMKDCNxtQmM49mfpBVbCaQR2N4KWFi5XUtzifoXQqnefBnj4dm7",
  "key27": "5f5Zvanq5sArEdt2JbHeUb2VkgtsZEM1w3V4Pn7Usz2FEwHax9912hzskJVJEbDjCjXJ5w7ZbjcFkehdXtikv2mL",
  "key28": "3Ejyh593twK9FTA1PhvDYgt9jGLeNGRuU6cKQAGDf6h69viYbatoipeKJqsw2hJKZn6mZydSZMdiGfKXVYzAzrpM",
  "key29": "irgmwS99KDe8kVoohfigQTrVwZquF1XtDF2NiHqKa15FCDRoSkxLQ28RbB4nc9JvBrscUXZN4nk1bnm7daob4y8",
  "key30": "29wVEeR3UhEWa6TjaWBzCMZtiTAV5xu3FUkNC2NAnhZQtbjAQYi5VJH4tGrz8hSouXfViNV97MNvtiFeqiR9tnx9",
  "key31": "5KYq8mTDC9Kppr6d66s18rJfHxxjubHWqdD9ZZc7eaaDpyoq1n7iBDKYErSU8zEhVDXbSiABkR6cUB7RuP5JJU6w",
  "key32": "5zbDN5cs8staWryv1srxcU8fdE86gwoEA2dBamSexgiMzYhoJTWKpV9ruRonWWWEFFwR7nNia5NWGgsviuanzEar",
  "key33": "1Bt8rBCdqox5HHyKJRrKmHBsbV6VFcdZwuzQnzzR5ZKMsB5PLhV9SSmwHNynmJorx3hL63HkK8rbMvGBjcFSq8c",
  "key34": "43wHh7u5QLoQE9oerKpMGAKZEod9Ah1xAY1ZoBaiv7vK2bXtS3so5Doa1YnFtDgJLv28jbD3yvV6XPy5YfiDvZo2",
  "key35": "4vqQ64sozjLCgrkNwDW6daiLHeEY7BVGfTHapYf4VURkJvFXrKNNPRMr3J57TxkVQsEzmjf7wWfuK3x5Cx7p54z2",
  "key36": "4Krpqq7SEyhLVNTLDb1dhcZJ7bUhNk9C1AEqTCX92pbsmvedZaY3pm6iTYQXVNishKXcPf7gf1t37co2edPkUfKf",
  "key37": "5fD8WsXdpxEuXXn9cyf89XB1u6A2RikyZvc92yr1GNT3LyojkU6MTRZpbmZVqWZjScknVxipGtpJbErEZfiqrjhQ",
  "key38": "45nBqJQtimw93JghLyhLQkTsL2fvGmU6RNJb9aDJqRiLQ41JvxREJJvdWVwRY6UYyeoeAXpqw4VFEjFzUhdWcRVW",
  "key39": "5yi9XobC3ku2vcQcT1jb2aNKZoy8nmsfh2m2h6XY6myZcoPBHDnEdyzTCc36uctqKTn6HNy6HaNCc4WqMtuErmeg",
  "key40": "34hN6JTxRDHGwjRFfT5VqadTEBuNgb7mtEDKfdSRk4CGGHrj9BnMpLUBvZjZAaPaGRSf17hL53URdRxXPx7bhFUf"
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
