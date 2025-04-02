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
    "2BEmqJB926NeWBbEMKrj8K5TjuBA2azoEU3qbk5bVL8tiHmUMp4gqHaKW87A4f6J3AXFP7AxVfYmverNCrSNbdsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bP35tYAM3Moc1K4zK8vgQYLBY4vVLVMBebVMcDTuAT66ATTJdXL2Z33AS7T2eR58gHN5pscyP7FhTb7ucW9oewj",
  "key1": "4ApsoeFcHRgg4bPwyjuwAPdse71RcUTHK9UWXcWRKH7gECAA24p4Eniyb3bNUCSGVGyV2oaYeRYmrTkD8SSqh9RJ",
  "key2": "4GnKzL9kKqQkBvZ5LixgVzRUjWUpBkUQuS9M9TESjDYsPYvX3ppLSzZhXmXtSDwAbQJB6mf7L5sagTzFm34nKPL6",
  "key3": "4FHXq7z3HZQF8SaXU4w95DAWSo1SR5JKhDxPM9GwZn47nPyV84KsCk3v2DiyT6WkgHtkaYyLQLw8CcqSW9fpJz1a",
  "key4": "5WBPrc13qiXHV9cgKnjsAUhWcfP15t1v96UZxmnuUkRQyszLQMFQZzUP6vsqbRXF29Y9SwvCTq5Yx8G9S5Z87oJr",
  "key5": "2P9TUUFq9NhvcJUDKxhDAG1fewDoXa8ipx8iZetz86UyhPTXqTG5T3ZPrDSDF24m8zh6noeFnT6cZ2xNgv26oa4W",
  "key6": "nmDaiqWk3iWuAJk39NCZi9nDUA12N5Wma1BfehH3pK5LjrCiRNK5vhEht5sYg7FwwcyxLEDPeh3Cy9DvsGiyJGy",
  "key7": "3swpKmEj6PfoTg2Sqyax67JyjGKeTN9DwjWzrS77zPazxJnSArsjKxgAZxGiZXKTr5fYpt8YwMRUATbdMDxnWovv",
  "key8": "5e6VCiB1v5R9ENZtsNCTTdxGGzmGyEfpFi5kojSq3kYk6QWXKiBFKCAHdeM4u7NnsWZiU9XW6wXavRz6rd4NBhjZ",
  "key9": "3s5UTEHwwzSxLKJ28t53ehmMrUjmrGjCACsV8G38tjmawdrbJ496EEbx3eXtZotchwSy1jCTNznfgYX3MMcM31SJ",
  "key10": "4c9MxnjXHC1pw8Khqi2JEWA1Yc2HsjXsByCDrtQi6z29MSqFXJnKFmnUVpxAdxTEsS59KERzbc7j2YpQasX1gsJw",
  "key11": "3joege3geW9BcJHr4Wqigyc3dTpyZDx4KqjeBZrEAGHtuUH2n9Gcw3HnErxTji1mtPET8wDmFcvREca2dK5kYV9a",
  "key12": "5G4ovFYdnrwhiyfQUgFRmo7bpFeyDdTZCw4VxHTdVLLLoRemiYCHkK7RzvHJjU7QKLLSVKq18b99gNcHxAAVEgMT",
  "key13": "3dCUmNp5xo7gAJMZ3qcJRmznqDagwtZvQwuM56QJzeXujarKC8F9F3w1wevD2Asj5Tw988H4kcxFb2cFJMQukMTp",
  "key14": "Si1z5mycdWESd9DHUFmw3Xq4zocDqceFKpYGAvBMyNoA3914KGwFaMcduuR3ijbcz3tk9uExkfFvRZh1u8dod5q",
  "key15": "4iL5bUdBRY2UJs4eSyRVJUJQUmgkTN1eRjLAYSzEJLSbycKemXGK9RwZP81ASv6KfNn77EewAbamVuupXHJsEYPU",
  "key16": "YHZzbn7TRJWZTfSNTNw7XGtvoP7TFpHpA7EmvUCwkZevkma4JqRSsjfrDK3PYwwJULCGcwL4VHXTXiJxtfMRgVa",
  "key17": "Tk16ehN7ttJrMbFipLPiyvJy3tLVzZv6WBLwWG3Hgxs2fepTUevPNeja1iLgM1R67zcAKv7PJGG3ds9Y5Hayd9s",
  "key18": "3N7dp4TNnU5nXKuxE4VJQB4nDvATNxbrJrx3YuNouibX8CZd4w1fHZ9chVWVmJShGGV76FTVfx9FoHPR9i3rcjde",
  "key19": "4ez9bgCiYj2abGyX9LXDVg2LhWjYxh6QW6ALpH25URRyHba3vGwvbsH4n4KFy7NPV5cw56R8RjquKA5q7Mmwa4yW",
  "key20": "63r9LZgftn3t7ubNygyyBFxPRF3YDpANCPHWBiXKmJ3wB78eqVNT5HgaNJF6M1dE92HXuCdraoJQEZ81fJjqmhnJ",
  "key21": "5oo2VLuHwi2rCxrVrE8AvvYTtxs2bZynB7BccS9uu6kSHyWnjBPrwqtbuEmWuehEJ5CbxEBjAAsLrqEodvzNPPb8",
  "key22": "cCp7Lucr82kcVRtmKdbbDYa2UEChoMMymwA8dmw6pkdcg6KCuFxGUHEnVyfXokMqBUBZkw2nfiR28peJPYW86gt",
  "key23": "ureReFut2UPzuBriPh5v1RbJNhEf6uKLTeSbu7KkM1ByD7WcQp9bd49G18dbvc1H6y8zzmWj4ctwsKtv47MaNd4",
  "key24": "62Xkf3TqHCiy1rcH7c2zG9qSeLV4ojXSbASuA1q2CnnvFX4Q8B6EDgQGsozsa2UjxPLsJguSf63KrcauUEf3Ykgf",
  "key25": "E6VwdctjYZhSZBNFYpHJz3CQEwhKTyhqRVFrH2RKB8YwHEbWjCLLk619nkwitkchxvuPMhv3V6fDYQKJQ5q7Gky",
  "key26": "4WmhWLNjTG7YqtMwYWorTn1sVzVBPcyqDPw4wK2g4chNVPv53gT5NyieVizWj8Yp89aojQGkvqFJb3LLUQzWcgAn"
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
