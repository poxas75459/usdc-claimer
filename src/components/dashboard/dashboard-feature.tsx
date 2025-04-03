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
    "2YPXvscCM1yQw2i5v1seQShp4TgWk2EJThsV5e2ko1amXZMz6d8HWtBy2poXVaQr43uMsuHRpPHW3k6uGw7bNpbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CQN4wKWDBmt5UrKdgo7EE4wkjBEBqbGRtHtn33ZKzqiqaYAGBE6UjnnrDqyMquXcbAcna8ziNvgFotC57nkc7gA",
  "key1": "3zhqgwKv8KcMhNmc1KUocBBSy45XWY5GhRNhAokXVbYth9Mo77N5myJdchownbHgTc281vggWFaYjaTbt4EYUV8F",
  "key2": "58GmrJNN9VihxyFSafPwVBvTEDZiRiDwhzm3qxgugPMsPkAhFE36WtGiLkyhn1dKid3pHGgNzyPKy3Fph7yZgXJR",
  "key3": "9aABPheoS2sT8ZxrY251DFJf1r4xVQouXRN9j7qn2FNtfs5s3i186N1TY9WLRCDrD73qoRKJTr8ay6eFTKeT5E5",
  "key4": "23BATgBFyuzYN3fPfyNKNgtHZEa4Sk1oL3z8bUqe7xCVDVMRB8z3Ba4YPWJ9UMGvxzyobFHLLYHAbMgTkYSZGqQH",
  "key5": "5YpknotrDwC7tpxB7zpLgxbNACo3SuUjFsYv1YQQS96MWuMensRP1ZHzLfNxKtDkU11yYvLZCbiPmvL1ez78oCEH",
  "key6": "5a5mapacdEwBPq2CxaKj6hVBC8N4v3HWk7xWZA2E3o1vWwhncAqNLdxeTGtD6uDQgvH3ZrGSdHdWqh6AsF8n7m77",
  "key7": "2uzLVf7zSAXJwDcbFhMULvuxCZQzURfwKUeRt1VcYQcaQ3mzZTUr5MG9FBvgGrQGjkkiMSVKS8BaFM5yKAnJAn7q",
  "key8": "2AdHqmud9mp4dVYwHAjhEdem7cdgwmZ1Vp7g4K463oorgsPMxguFAE2XHkfA1NoJoqHi6WZ6rj2PpPxJtxk1rqvV",
  "key9": "SoNUieWs6hxapqrU1ZtLyvexwJA5qCynFSuythuURKJBpx8d4YmqAU4xdqMNtpyHfP4Gm5WSaWZ2xMV6M21FqZU",
  "key10": "2cYjHaZCy6NrdAGXYaYd8RsFhAA7QAKFLkc9wZy8xyaN3xfyMA4YXG64HfxobHJhPcjxxfS4fDXdrdBnf3D5y9XN",
  "key11": "2c54Xx8JSr2HC6pJqPaSnYumR5jqt8H52vqEUTfKq4Y16LCgVmf5TAVh2LzUSxMuSizCD2jAB6zW8d5kSkQUfayg",
  "key12": "zeuS43n31shQr6NMuAvoRTpDLfQsouWHB7gYDNcdxskWZiZnS7Gk6remfsfV9N6CrXaF9erY7NbiNZRMCgFiD8W",
  "key13": "xZab4JEf55nPVzf7mw76U8LhHyyco1FvDVH57fJF4eynvf4VdVnxmPLxUpK7WPDvQVNBiPRYVV2KpkKWjtsd8pn",
  "key14": "4eJREE966dfMKAadFunGStcPZfVxCxnQg1Ar5J4jVBaUt8DSiLoCaeHtSTXcdfJYKdaKW7ERi99nm9Uk6mGyRn5V",
  "key15": "4PskpCpjdiiU9a2o6JGcQiUAVHsvtDki3BFEcVVjcQY2rkgcQaxPFDCnpuqrYL9gT4PaQptCoHcb7f759DsRWt6P",
  "key16": "3bWUyggDyBuwbysBAk3wxEt3sLAE9msB6UKVip6GJF7DT8H14Sq97Ybp1Hpg4utNghPzLVtNzpziQcNpCepFnXrf",
  "key17": "3TmeL8YG3t1mJn6p5B2Whvkojc8FKDzwt4pUwXQFR8FWxHH3MxnPcP5ss9F9yjB3m166ytcVUXXCadaJooU7koTq",
  "key18": "2xmueg8ezR2s7GBqeMtDri2Fxytuh46uYd9sQe2KZ14g6xTwrSJX5JvLKBVh5Sj5v5VkTUARMcBbyXYe8KcXnye2",
  "key19": "3QEFfj1ijbrUVWddTdit5sJED4NEmKjttssC3nBKz2htWG4WZg3qSN8T5xcF1pf73JdMSvRnzse2tJHRCciT6MqB",
  "key20": "4RuZVuCXZ8gjwZBVYFZBp4PsKiCsR8WAfjfTvotZZsUru49fqAPmY44N3fWzCY7Y1BB2Ewmp7VzNoRLhkZKSq2uo",
  "key21": "38KDUVPD4KD74qerWpiVD2v1Ep7SWaXB7ZByrbRMi6uH95f5sHGTz5qRJSahTrcb3qqnur9mMkebyzck49wz9Rf8",
  "key22": "42BXmBfMELKDAE3oVjzArgvr8NFw9SKm7kjQ272FfBVwrKLDEPaSKxhzyQRc32LazTAcf5GRDUnZCdLYMX2hMox3",
  "key23": "58u6twVtsHxMsEYQ6eXg4u2wNsR9HKpkqdgi6fppFRJCtbT1mW9GbMqSJX8XmosjZvHfd6dpp9xRMgk7AQU7oSda",
  "key24": "4WaPKEDms8LCbiLkFdi1nU8dBCKGx2vkDHJnf5nGE4Y7UEtYsGdZMtUxPoBZV4UwdnP5UBS2g5Bvfc2PmVUPv6Jo",
  "key25": "5ZCs395nYxuhdn1BTeyzkhJ54kqgMGMgDJRdJ1Kv2pNFmDRuAtigeZS8pUYpEhiw97mnaUdU5sLfcqjwJVp1ANcH",
  "key26": "4eQbCiUvCvnCku59mv56xZc65xKH4HNm21wuh1Zz81iJqN11jqVBvoKLhpwSFy1kvc8GJhBXoMVNwUrc7jDL5jMJ",
  "key27": "qDYdTdGuyzysjKyutHRUn6chcN7ED9HEiALWhnvgGukYZe2GfLwjxjK4Ydmc1B6EatWqWkqc2doGtYKtjwEbTV1",
  "key28": "5VHYtYqUmzsXjSwS4NH1F7wFsYzrnyYo8krVosixuGFPbobLSvn7tqSBaAuk8XMUBTSEpWeW79yffNuYoBmVV367",
  "key29": "5hWPtHSiN63v2Hg3zCURjfGeR8h4A7NKu74PXqYBDvDT2Shzofe7s31cKa7BM2ytrVhvanwfVrEwvyzUo66MZgpB",
  "key30": "64nYzbndxcuDTeaK7D44xKRCTAtWLiQ5rMeLBwHFYobYie5LjZY3QGDLLkCNGV6Uz8DD4CPSkPFvpbF2nAV5M9kZ",
  "key31": "63aRaVarsMHX2nuyV43SDTzRKR3vGK6W4Z7nuUaErmW1zRFXo1BTAv7Lf2sv5YiCP9Vsa4aAhwQSNrCb8idsUxSt",
  "key32": "4QmVKBNymnekc1BS8iKGP2r1hiwB8xoeYSvRKwUGmA5LvWKCHCFD8zvEvogeQSSfT9BaExjxfJcm3C3PWAwzEdHA",
  "key33": "3cwWhbeACA6WzNXnwTvuxfTFN2iT4nE8cNKSUkqR2tNap7CD3KRo3BPiMe2cCLsZpFgedAsiDfPvG7tLLUUPi4x3",
  "key34": "4T7JEbxThusLhdmmFtEspTJ4VCGTjv5SQqY6EK2ptNeKwe4NCkK7oDpFhdcSJodWGyuLgFLqQDR54eTbVKSd84XT",
  "key35": "3fPeAV68R237KFU8HmGwEbZR8FJYmQUF7Ufwa6xZd3riYUEykGjcF9JLXQCWEGTasYzvoFaBFmDyC9Lvrhcus6x4",
  "key36": "5oYzrPLLyJ4fuy55o22qR6KTtYSGoT4yZKeD33B5YyyK27TKdi44UJHo6KaXUnRBfmbFxgj9Z94vXK6FLTJapo43",
  "key37": "5YrNmsLaqkhbkAAMetAnjJwHuHTzHM3WyBpuGufAD5MZGJARsstaGXxmzEMo43UGFEC9bb72fPT3Sumbj5PswCKc"
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
