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
    "3yveUaET5LifXbfNcnAogBjbwub1usGF8QRinaA6RBVuvwFKRBNvEZRHeNDH73n1wSxBoqUQ5bFrB2bCxKZpcbVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ggmdyp3cqHo1rPBa1MNWJLdw2NSCiCkEKp5Jm6FkWZ66VaNK4phMrPK8i67Vz534PzHaQxjK2wE4wUXb7YeBP8r",
  "key1": "2XPSddnBLozh8zqMihdsrB2xZ7j3Q9TanzDky1SVHKm6UtMRqAkriSJmqCLsQF9rV7VTmtJvyyARo3tfD78NVwyq",
  "key2": "4jDJV2dru6sXpywLeMVhPYaM3bfqvgYGQMN1JKE3vVKhYUhdHQt4unu33Ksf3xgowW4QPzYmFsQ9JQr5JhpumdH1",
  "key3": "2HyxBRwVdZjZm1TRq1VCaJFaDYSDzVuZ3WzjnnUVq5ubzi1aLpKe5Hdb9JMp76g8B7rYjEwD6GJ8qvFcyXMYUjms",
  "key4": "4ucBjgpN2VJyDWLDJG8Gifdttg8HgpLNvqLHxgs9FzDfBEFS8oKXqDdGmU9eKn1ozsMGqqB2Bribnt99PcbWLXEu",
  "key5": "2qhDSPrk7UFAXZsYRuX9JBCsSoQEPAgpfHEBWFX6KntcFQhseHQj5roUyJrjGfQq5GCMuistqyWVq9ojTJZmYRKp",
  "key6": "2ooEih1W8hWF1GYqA3FCcHrS816wmb1wfSz8ZaeX4svLvkpkw1X93YNegBLe8E17ypWNvVANsGwNqTRgWRuugd2R",
  "key7": "akDTaD1hjiuWeUQqbWHurXw2mZqmBDZiZ8rYGDQHDorY23MHSopgnPwrobrzB6YVWgrErwDxHnb2CeNGYtGcxXR",
  "key8": "59u4NWFGYbHrDZm7G2JZAMQXzFthYnrkhjuC6bMPQePdKtJfy1fNnWP3x2e8UYTDSK21H2esdouYSFZXr9xoiPRm",
  "key9": "4vWoA7EuPcHFXeCsKpmnXrPE1BYqUVR3mbY8CnjAdPhEp9dDGFeBdV4t8M2chjDqFgmvyyoqb6HH7ar2JZbLzuHV",
  "key10": "2tFgGxBDBjGpHYmYJnKBvHNBgAks2VMmFQERQoGGApyxxzyyFyirjPQ9LAfKaen1ZdwVWFrfHKGkUWuc8iH4bGbb",
  "key11": "3QixLENCT7wnsbcbBuKCgRf6bm9JzJsJVTuVVAqyAtrbgDvyEkJRJqf5ewNxmxtd5eDcb6kMHpKbc7qRVNzHi8Sk",
  "key12": "3oHuhfcCmubkQ3kmEBpo28Jxm7wXHtFNJfkGKSb3PBkiRCXQTthbcrwEa7z9L3xmj4FnNGAZkWQZXnoJDukH54PF",
  "key13": "5MmeCYBmgPjiKR5GA2zcFNrWN5TTkio1tTrYLCjGuawJn49p4K2U37kjkgrAAYWFXk2mQzUvX2KZw8KccXA8geyG",
  "key14": "5G2npKj6gVWEQb3TUL3L783L1bzBZebgeAxeDWDxnmHP9popjrhQMNe6zspB82GEUrBCTCgDtRtHY4M9rAhRFqwd",
  "key15": "BjZUNauwP4SSwJjZgQ5vJcx9Srn2BrjYA6FNtWJpZrdzdByUNZiv8RovcUKhiuSHJGAJQZ3Ung4XmXUERH28LSs",
  "key16": "BNNiwXkuog2NTsHqFUizT1jgRneid8nrNtqqLYpjKLUD9wrVmbWPQkSGiJBkEzpcjU6Ew64cGtVF368KhYvZLv8",
  "key17": "4AoQaFz4Xsyv653aBDJJr4aUV2sb7JvyqehMhA49zjY4nKzv6LaFp1ajsyZ88RmBvEp29zcmRp6ufkUbLBjx2dpw",
  "key18": "brKfv2qAEuiHBG2ENhiL8GycaxyRSPqrcPcHrtZtrERRupvwFE7jc8MjhUh6qjtZaLpxpS6CeqPzpC7V6CUvyEw",
  "key19": "3C9f7S3EE7LdzMzPNNSxuM5V5Z6knjQuDhR2Mp7N912rKcwKidLteqqRyhgrFTLAcSbbFduhEk214PCiamL3bBkP",
  "key20": "2TdVBa931WsSRwZDqPmjTkLvke91Hmoy1muXeYy3YSh4PSCEmF9vTrTkCsTCtesv3TaTiCjoGkvNySXMLhMUriFs",
  "key21": "5UVU48VrFLsogd1FDjGqP1XQ9iCW5RggdEZXoYYGcFqgda35RznHwnZjh2CfidMqKQAZD2WgQfYodKmzvEi9Z92A",
  "key22": "5pkVD8KxunSvCojHA129X6MhUsrNEgM3AddfgHhD8JYMqLQspYX7138iAq7EWaEdigXvjTJ8UdSbEsx9vLFNW9HB",
  "key23": "2xxwi8AYFWvjCKr2SdyfC18LhvTgLc8mwN2NF4ELqzbMKtcSp7uPr4hSrXxRtZi7pcfZDwt4GY1CMRihLYB4hbr3",
  "key24": "59FWUU3hg9XXuJkvfeD2iDPjKUZToTmjzeXhVRxM6vkZ63LxbfdCeAzyJVYvXZxb1qTdwd1mFjrN6ZkB8oG74kDV",
  "key25": "4Jwsqu3ieZKjdaJetg61Ywx8qR4satyrmtyqmZbDP9jWVXaXevmxywuGL6kvB5pMtTnhWSV2yibDzeUwrxfaryQK",
  "key26": "5pXuCuPDRU3GniKDFs84Po4mpwsATsFsugfo3LJ49KxWzdUrzz7v7EZtaxrNYGh3vGLUEh7R1CSqmaqnDpzG2Zjw",
  "key27": "4km3McMT7qBN9ecc5jhxeowKDLAWkvDjN76GYrk5EVS9PEKWpQPLvQNudBEGB4xFcXXpfSMVPJqALV1PYpdbHqMQ",
  "key28": "36mFrKSJTHKHscLzhb7JN9Utn6aotQgwD54ih6hBU9B6by1XgCdJ79xtVyrxJyfDbcJkW1o4Un9zrWj5krX1UDNe",
  "key29": "2XYwzLetVL4bZVT8nBEiRTiZDBRjA8rgE3KUQ46xx6xMBFtS2uthQAEi2WV22NthQq7AJJMCKxiAbgTxsRxcjLwT",
  "key30": "TVrQa9Cv4C6x8H2xtN8mHpR2i6tcvSUTiuRb5kzqRdUw5v3oJyxy9SXkyKuCuUjRS6mmTgmAqPWrXCftES48Kmj",
  "key31": "ZtUx2BR6246rdnVoiz7nMvkArZiakrBXPCrAxUJFD93zS5dU5p4xs73BPAYagHVpQ7KTvPr3hXQrFU16ozybAJH",
  "key32": "3rKrZjBKsbKqKVfr28tzVowR9TPzfjojHnaxCk1xJnJRGV7AbdosH6knBDr7i5EjFMX4xMCxyH5FJwYpgUSgEr1v",
  "key33": "MBQ1SzfGhSDksyH3EzbUQ59kkKAGp7HhbuTDQt3sSEdZ5gXBAtybKXaWa43b3n47zfAggZFe462gkgtoYmenZvU"
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
