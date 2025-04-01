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
    "azjzuDo3A8RqfHjaxj3PjCLXgMEDDQHRaeBdxKBcU6eoRXCwWmaWcouFwTRtNsQNmdXak23njrX3onYz1BRvZsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KY4bbXuDLHirv17mwBpBhENKc4oT793dPqBmmzo8TBeUBczXdwuVQiYvgByiAj212kEZ5DDNVUdZvEDUrQJQrh4",
  "key1": "XdiPQK44cTiNCmiCPJha9fgWpnq8AgMBSVHVzQC6NY7drS2W7CRdhpwb9g7ctYBcMBLKV9VLkQKoQdugJH31QuA",
  "key2": "2BrJgxwoT8AMNSkz8R4icKBUmgwWMehSDQfkG3ZyxMXhLzLXgAcKhAzXPu3v6cCYLEEbwFWsQR4JxTji7h7LG3DM",
  "key3": "4mUD6KVkaYJBkyuuRX6cMCnCJzCPttWf8UjDByBBAXLT9g2vLoFz2W4y8A2Afsw4YEkrqjkVsvFuFouhwPPENbws",
  "key4": "23TKkQZNxhhBc4gRo4gHbhh5qasjgDUXwCGdeXTk5XpD2GL6UP9y6ER4VXtctqdttennwzYV3pBQtHPXKbVPQC3f",
  "key5": "edZVDCEaRtfufhPMgxeympdZ4RrMFXFsditS64knDQSfKDG4mh8sWZ6fKu5YaCoagdUQyrnERFjhDzxFAWK1GBh",
  "key6": "25t97ZyhV9FDaSmbvoowvPA7CGLu2htThmCjzwHgAJc7J7Zbnw3uyx5z2G3P83QiFbwvnusRoTqCAt8P2L9SuDAT",
  "key7": "3h1dJXWfhLXfjivwQUqTpESzsh6rVjK59HUoeBQB6NzydjPXzMRZgKuNK4roP8FbaQP3xsHBug44rzcE97C3DEH6",
  "key8": "2DzR7kQYCA3xgFXwT527U8kNee49uC3D9LhKDN8mbafMPuxBooUshKYvynpnFkuEDahgJmjK7ZAQipRC2mQ2HZ5i",
  "key9": "2r6YRgrUwyFsApAxVnWQ7sEDENW7kAaEXSDU2sk2EncyubBHA8GdWjGyfqJ12zY6EbJkdL7HgYMKMYXsZWNMrDLG",
  "key10": "y358TGCzGYPivHdwp7vjLka79vfUhwoRCX4QRXbaMhzZSAhFzehbFqiTcUPsh6SriEeABZrFMSjwBG2yP8AtEkC",
  "key11": "556LWFvpxLA4ckULeUZEcArrgWpqSki5K7LnA5AQL1i5WzSHwbqMff2M5W8WbSqAXnXmn271e6UpCC8ncyNZpHQr",
  "key12": "2189BHTrKnRSMacRFZyjeRSKgM8UsAdKc9AMSXaHyxWE6N6WnfKN7PL8qgf7CmoMfshn24pYQ1M1gimHqd797nbs",
  "key13": "5uzwcrtBuHoMD3FX98d1aVfJjFj4jnwYfG87pvtDXaa71wHsncZVMkPzfVZafjYPQb5yCpNFtaysCMvVug49Ua5U",
  "key14": "3Nvb4jgKpxbS5UwCDtfjptNdSLT78N4MwA3toCKieawfUKTRBzhAE8GaVfhHjk6XYSq5kAPBL9PQHL28cKYudngV",
  "key15": "5U6ZgY1awCqkmgp9aZPY5aokcvyw4nMdMRxFoz7aqPKzGyJpmCaH4wFwF6tdpB1UMJMeu5mmkFwv9jxMW4ts6dUA",
  "key16": "3N34PjynkSXGqFQTsoKmARBDjHcBZbGqfyVH7CNZ3zZ8vGMwU949ieWkyJsJtZ7ohNTS4D5pw5emMKpUjy7ryaPE",
  "key17": "5YPVNfd5ncR5RRyAAoFrCP1yxuKchfGwBiGNWLdaV7vgz72nwJna9o3yuoCyicfgx77y6HZoWFtreJ1HbeKwvogk",
  "key18": "2UUKzxoYrdqXhLiLcz9qNKAqN1kxaD8QKyCNXsgL4Xj5pUCqezdMFMQ2vZaTWt1UDsxhnaxPb1WjPXsA2u4rvxHw",
  "key19": "5qdySAek9fv4vx1hqrnp4cDJBt7CwJnFXEiZfQSYrgUMrLeFHmtDSJgfYkERPpjm94BVXzbH4oS3YqxfYNqn8baN",
  "key20": "r9sXtqogubw5WreqdHADP4ikwPRKvLZD97zESZH5tq2zTEXmn9tggdcMVcvymCUJ2TpVX27DvEgPBG1LieXMVsz",
  "key21": "45HN2JjxTj3GGZEe1AgmJeNCgiaYb9HWfZM5KBVHrLLjk2JnDBRc715cdRhSMqFvqfJHPuKZus5BYcEwqVzWGzL3",
  "key22": "42FYiaiZfePkdVBQACK5FBSwfwKwFdWZ4Uk5fdAdRo5M54qmEZjK6tSGHPd9y5TbRpqDTwdTZ4tgDQwBc3c5VaPT",
  "key23": "ZEdzuP7zS58pKnP5P8DcGA6oHxygPr6uPVq47xTCWrPqeGCrJC13YMjf6LTf2eUMP91KDhFbmSFztwNFUn2G8t8",
  "key24": "2ohzU6gKtvq5Un1KPv3Di1sigW5f7MjyHoSCBCGZ37rnhvLVq6ed4hWf16UyeeHadrpve5vMDLfPPXEGX5QWjxx6",
  "key25": "3mXvqrJezDTBF1hKEN4v3PfjHWEaCgP6qUP8CtV15djDDc51Vj1u8KPZ87WPTFHLRVkysWsNJUBQmBGiJt9viBx8",
  "key26": "3f4eZM6jDpz6XLjgnhACMUVCEcb2w99pS3kAY3xC2rHkDmwPHrd4hBEv8V8D3nKR9MBHUb4Vo33LUUSPTUJyTkAP",
  "key27": "2piWJmXqjtF3PAWiTP3dHzEJtGdrQATZcevT6VTLy4KrrQMfgnAR7aNAq8mTdgna93PabcvBFsviacnVZM6aSxff",
  "key28": "4BMcUf5UD5p5a6kTqbKRprLfoX7pBubX7oJkDzHb799MYhZQL5s1sGixPU5NnHMtUurNaxfm1uDFdHixt1Yq22bB",
  "key29": "d61T8znqNDKtmmQtQPfx5ZdmxCDU4dDDhL6gnjeANb89sqPvrtWEkvJdWjkxddrPHc4EJisXHixrB4i6tiDXHRx",
  "key30": "2rS5jMTLkxD36mS5dyc3z8CJRjfAKi4XV3gJadYH9heeJQu57cFqGpwGPhP7P2zQxt2y7aawCd5RWZo3zE2z6VdR"
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
