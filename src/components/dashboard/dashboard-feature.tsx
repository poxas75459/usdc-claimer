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
    "62LWbx2ANu5gj6tauTznZ3NZ6djQFbdX75uwi8H5dh4gzgjtsacMz4zfjNb2wgiNynG7Nkr9K1zRGLyBjz719Esh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tdwHsvT4eHyWdUh2githa7oGMjDXY3A9H8ToC4r7SNNsBZy2kG9WRjPcsWm1excv9PhVHxvX61qDo9FRU3AqwDo",
  "key1": "3UfsTfFR8AcHLQemyx7NBewsyxCq82V9jH5N1wFGoF49238qTLab697rQctGWo5BnErGz2YffTJ68QXZA7dsYgoD",
  "key2": "4nsrjSZJrpbjV2W6iPGJNEMxWGo79SSGeEFHsfWt45YraocNbQVzhx2xt22Wb2XAk6Gh9x8MhWeBYkKqKi1YpSPK",
  "key3": "5ZVRhLhw6wvXk5jj5YGf4wDjdCyCx25vvNDN2FoU8zDzwPDn8QAjEUhU8Lz146FNKG4Wpx1Y37xBFC2U4Aun4Sre",
  "key4": "34EQg46UNsoSvhsJ6WBsWv8a5EdkuEjzY7aNZfPv5qV9F8F7f1MLmaUpETUhC6PtX3LMztHfBHH8bQvmbuEZqddq",
  "key5": "5hWYCMWtMrx1nLBsrdRWYqjgnKAc6eoBn9K9hFAiaYWvrGtgjNy9GqifdrykYq2u1un6apBjYVEbmAjTYFYKDF1M",
  "key6": "4mazR8bkkLkvWW7w6uhnxsfLHPYh8yK8684J6Z5ZX1ouSRLhHyZsC4eHfcxLRQRaTBGuCuniSGrF9tdsqunLbddz",
  "key7": "4MWQwRBf8LUtHihtvYUbMc7jvXRSeZABHg5oFJrJbCdZPx8Y5deWgLLDHhVF5GkTAjKkcVUBdrNzP8wHqKeV88KT",
  "key8": "5EUPcjkNJVnreio4QPLTao6Xe8mmDVLk6iD4fZV2c7XDE8JoU2X48XZhRNxuE86q9NvoS9HBWvYHbUMxKLQfdVC3",
  "key9": "3TJPBiEcgDWPE38uD8kQkmmR6FySL5kXNb23E7Kj1D7ikd9RanPvTcfEDJBrG88YSgMhUeDBMScsDUymB98ADLXB",
  "key10": "2o5xQyq1nmTK5KCyVv1bFUwvi76TgLFZ5LMfMrkUzyff6MLdo4pe2sq5s8LX1rKYbjwcHRvkk6soxu5FcJFB4v4K",
  "key11": "57Wn33AKNVgsiX4HLkquByrH6pBCBrFtm7czvw7PYCbC6tmsCC9R5SaosVCuJ3qnQJ1no7zS2SasE6XvHrPxmkui",
  "key12": "2nhRc9VBE3ZkG5NcSZrunwSBPyKMKTDYrRQKDfzadbJaeUS5zr6YaoqexgqgyK67oMsLftTLC3bYGuxNjpmEiFDf",
  "key13": "4d2vZ7yz4m27nMeh3B9qfDEFge2MDVp5QYrVWRYvaUrwTuKcT5aJgLtH5u5jqJGij3A8Wj6fZ4Zdk1TnK6LEdTur",
  "key14": "3EAg4gFV98DSEKynVMs6KkJUnZiRWSgTaZ6VLdqCh4RkfiFCoXv1nvpGg8RejZB5tswZnr17qravfUJCkRVVFpbC",
  "key15": "5DLjGTAwRpCVaPyniTh2upa8NhjFnHfDmjfeqbrdfN6aNLDvuyC61biQsi3sZ87CQ5C97qve4Aoz1HryPnGHWu8m",
  "key16": "4JziQCQVsbv1fsbXGXLxjtu46LWi85Ytc5qM7DNv8epVFpxxv6WsM23Crob8KUBKfpBK3R5SaWDpuAADG8JxZzTf",
  "key17": "4arYVL7UqaBTjmjBzEW8rV7gcrgQSHL2SD1uRmocQ2NAZVd4LPiJuRJj7kGDwStPr3BR5dLeLAZjAajkXuLrBXHx",
  "key18": "35e6cpum1VjbfVMB7VFKapZyJd3j171ZbsWvakvQCsjHzY6aZcKXN4v9CYb5PPkFRgQkcqHjqJcM3eJmSxXPMMD",
  "key19": "3aP3VEv7nadmnAwCbtEGJ2J3Qwd2sHCnPURNGGTYXnVhgLkJue84gV1BDc1sXnnWbB8uKZ1NCYijpBgEyZwAYx1r",
  "key20": "5RhTLYTgL65V1sFFvHdrXyj8FmLvn4Ut8ARZUzayXkcSoCtsJ6hhuQKMqJE5XnwCPnvyf9eaUw19XVmheAfrMRtL",
  "key21": "3o3deWSijX2Qaz9tf9XpBaBaEDTWY4LYFQ6ezBnwNhyK72mo3QYCJGJYG34Uz48ReFzu9FQUKt6N7X1EVcHcJ7eq",
  "key22": "3mfhaJcd7afUqxBgXaZ8z5qtVtPA6CYKkMWyAj2fT5EtAzJ9mzneZX2dADHEhpoWEmEhL3eaqToCsfzaTiKdJvqq",
  "key23": "4A57dyE5bP7b389A6c3uG5JRmXGzJZaUcUtSPAiBuFdpqP1ZGZj1A2CB4xk4iown9NGuGsTyVyHgffnRet3cdn46",
  "key24": "4PxWkuFRTK1vStvNnHdKW5S6JBebrCzxLBkUNxGrk2evXsFwRBcJc9XgesVemmsEFnLfy8yEW2t7JGVgS5dmpHfH",
  "key25": "3AiN6TxtKn4QsV9hxuia9jdd1WWL6Ha86piKhS2NH9JmsTpPpYY5EBt5n5eHgyU7BPgU7NKTD78E8jrFgZP9LWZU",
  "key26": "2pbHjDYmEk5jh5BzZ9ohgaHX2fFB914uKkCerc6giPspd18Mv7iEBPXNp7E9frvhPL1ShCJ3ZnYXh1uXs7a8FJf",
  "key27": "29fade1BEvLbhpGq47acdqaMSmwHXm1jbT5rZH678UTF2wXQLfnTTd7CF1TE8mRBxxXxYxuKXvfqpZZvq1vYfa84"
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
