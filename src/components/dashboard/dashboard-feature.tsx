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
    "4wKtpBtMX5mRFddryndWqAnF5KoAPviPxFby4LBj5c4zx7jn3NEvq1T5ztQ9utvJY9jJTgDi4qgomZtJiyx8kC53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "551fQuZqHRUQ9bkMdeZZz53kKwNtLyF5pq7ARDjmow8JC9vsJcG16TJXZWap7oFFKebPLfe8bnBeiVogj3uu3vpX",
  "key1": "2zZa3K1Jp41kvDHrkWdU4x5X6PwPsharc3z11b7eFJvnJz8NZhuBWhRGkUt8fjENtgFK4LM8WVA85pUCHLgSRXhb",
  "key2": "4cA1rxxToa3UNqwa7hM6HGEAUyF5GErZyGLL7goYq594C766PMLhHsuysj3E863U5cf5dRZF3HAZjyiaPQHycYMd",
  "key3": "pcxwAoShBCRwPzFNCymyqj2kk87fvsiJ7ci6cFq4V2dzz87eypWzUAM4ZyomyzFtWq47JUwVyL4J1rxa5CvdXNY",
  "key4": "2oKh92obgR4JUioKupjhK27gBwgJuUEV8tAnNVgZSdty6qT9jr9otwN4kbkXAEhnRGnXD7S5Sv6SrVyxLzx3SK1J",
  "key5": "3yoTzihhogTsUvkYP5Eu95K82orYsqBdyvr3JXFYhy45f2R8Jjy2Jhb87PbRisWcB9QNu5gwhPT5CCfqo6zxqNq4",
  "key6": "zCTstsR4Ks4BQZTsG94hyJ7RvxZBZiXAiNwY2U32TB4SAHyJ8RtbZ3yz6A2RXAMNewBN7Qng3bkWtatuzJeMct2",
  "key7": "5atGDMU933Lb3nGrFjJbQMRcciLqwHEv7e1pin5VPvFL7RWkwZtZVaFkr3Tkhfbyg6JZNXB62j3c72NnEP9tTKR6",
  "key8": "418jyTmh2HrWLHQxv55RUQUMnenCyghUVuykeRCgedvbikXTTFYd3v2ctXcr8Czj7d2pcWDiJ1YLMJX2xoH8mGU9",
  "key9": "3sXG5UzpfW8jR7Z9DsHoP5uPsa3jWpEd1MVVxkoKUG7Q8zEnL67uFdgF5Md75pN7MsQRMVkGa9RofxKbUztThb7N",
  "key10": "2Q4yEKzx3fuoBoAmnNzdZBLSYsdNGqpibQZJMaht72rPAdB5uqKbTpTwTE4rQdR16hgf2zNhw2v11cMbHdD3THHx",
  "key11": "yabi1sxhyquLme7f11nGxePsW66NQHDRh7awGJioejj1MJhCKpMd6CkxhFK7FfMz91VBHbm8HTvoc5C1drwTngN",
  "key12": "4vqaZJ5YaRw7wGfC2cht8DFiz164m7A7wC8MsdmBzHfLVhZNsn8zYfUaoXB2hizqH8ddXp3mK5FzkXyZji8iMS3q",
  "key13": "277c1iDxYbvJ2WjLovuLJrsJv98ZJGA4UjCqzE5JjZkaDirdMQZF9gndht2afmSfWdQrM6LjWfsw1YAo5EUgUbbQ",
  "key14": "59mKBPby6cwrTZpeXiyadfnYu6qNvzsoe8u1qKs9NtE2pgt6PFhWQzKBZoQJSfKAVDXHYXy55HGUSmjNLkaXuseg",
  "key15": "55hbupdi4qZ2eRUxM7CwArfQGkYHLo6ugqUwA3wZ67GZxaaoi6SWghP1FVHTfb8roTKNCUbUwCxhcqzcrqg49RHs",
  "key16": "5H6vbXMRit1u8nZKpEm3jb4R1SYaEg2MK38ZhgCFmwQgP8wWibYMfA6R4etEPyFnpPo6UUxasA9uAA37XDKwnGp5",
  "key17": "2ndmAexMUfDzhz2yCzfuj6mijeoQDeeSPDEggMCmkMFhxL7MAcTJhK1L8SqGfcmy3mreqmLrvoebeRwG6Jbpd2Hs",
  "key18": "2eoDoCf9gpWyTMZqcEYjSxog5dvrpyukyqeVUvGBx3oqzCZkBKEvL861mpVmVJX2twcHTiiJguB87czQJQBnRpre",
  "key19": "3rTc8fE3FS6nmXKe3yN7H1nvuGgJVJMj8MM5AZJeHATdRMpE6EZvZXXns8NPpBsCamoNAFmahUkRU2eEeYbkgbnN",
  "key20": "42AdwPBwGjDe6tr3kSwinidcErgQ842ko3AT3bDtPToFd421HWP3RsB16sdQSP4S3caFWqcWSiD4yFNo6bUchfFu",
  "key21": "4vmZfMX6EPhrHdHwk4rSNK9A2GDGf8aFFPeULj2EZHR5vZFp9gWXFW8QrJS662r4yzdW7zLL6X7EEV1y5dZ2J3by",
  "key22": "4kBrdzykwoFLy9fjxUxjZ6Z9E54dKAEJJhh5rSH9tVHcDeGKGKPmvbs6jKpdGrEyq7WSwhbaNzzSRzwxfN5dbgnV",
  "key23": "VPu7nMihQZ71JBiRRkNjQ3t5SQLx1Pd7abVTfL3DKbEeLKemGp2wuZdNnhD1Joe2DzUomjMiWQUhogK7Hjri9aS",
  "key24": "5veikbaPFqeq5n9BDyHMci55V1fMW3VJbdwTSjtC3VjzdcD8FT83P48nLYyMiJe4t4bKmUqViJoYNBoBJY7huFJp",
  "key25": "BAEErtZuiPGfQSuUX99cPpPjJsGNpprggDhdFaF9zLPHZRvyjneUyi8EoyQtqAfB58tJQtiyZjMT5ETNhKPzHB3",
  "key26": "NMxt6TRLncEcaoPQywQFWSf2NYxAgYyhqQqNLer7vLfhgCRNvmWvAK9cdLYFsEPDjo46jw2BuMFKXiscFL9yyAr",
  "key27": "2GsmHQV53hqADhN2LqDMrMjtTp21UwnKAAzV4zPKDSAb8zathxKBXwApWqztwyfw2hpFttC3Gba27UFKwNp32BKW",
  "key28": "ZhhEvu9QKizfBxSkB9wKwQMNpvEi4B8h8Y4YkX4rRFpuw7waMVx5G9eBK27EqnGULwdA4QfTwqcs6EW9aaKs3Eo",
  "key29": "5LeYorynNkRBLJaPmWxDs4wAbkawq4b7zBmRzR3eTLqhfpmSrFRZeYm9cJeVJdR7F6toywG656AESV95vejb77z1",
  "key30": "4DJbiCcaBLHMMSK9qCntnVevhvJwvBwdkjrzFTZY29BzuSuNhdsqBtysGZcvM9xGxyyAA5D9PqdMFQ9qyutVdyzP",
  "key31": "3bWu4XdJR4L8Mpvx8AgzMNRUfx3u4GqbpKm4kT6EZ9NnJesDBjfh48rjqSnzt639x3SoH3mp52WCeixTemcjRj8E",
  "key32": "2RW2vC651jHp7D2VMttPwuCqUMJ7i9QsvxbuCrrtLgr5qZmi8UcFoVTEi3YsF7q7gxGRtE4MmHGizkDSxLky4GfH",
  "key33": "561Vr9wkeioyeKpMz8UUh8fZtEZVZf3fXzY3TYNRfGUhLqeUKsMgqfTfVGTSLFQmEoYbheKqCpxHAJzZ4ecRhxTF",
  "key34": "2ee5ERZXCrbs6K1dZrWjGZNspSq6By48pfrMTTB89DoWVhqUw5CDFYwu7RUmfd2oYofoBST7VwXw23MK7vMaets6"
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
