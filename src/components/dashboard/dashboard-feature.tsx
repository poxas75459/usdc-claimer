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
    "CgXL2tHB36ak7V5S8Ju3Xb6vfLx41YMRAuUF4uNQzKDSWpKMQTtBK1eeWkKvH52oYrSGcEzjtH5SuE6kxRB2mPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZNYZDqJWLNcwSrB6vc7ioYhg9KRDeeyguCFPuVopKeXzCAzgTVi2wq6RAozVRU7mgbwt1HhRJvAhXjsLKpRi5yk",
  "key1": "3wiXWyeDzBxVvpkQWB6xrcCyNGb2TDsfatsmiXbig96i9KynBYBRR76EvJLmGWiA9XYwGRX4hqxPLU7sZyrXfS4J",
  "key2": "4PmYv85QHXoEen7z7Sre6tF9Ds1gUQCCYsb7X48gHF1wnDUeJrwhw68M72CHkzAoDYTvFQjqfZWj9SSCFceykMUU",
  "key3": "3ckZmWpriEZxvRdgyGHg5yAPmpGqa8b4yuEmceuyxi5mmbDF89GjiJyK25oiSeezGTL5H1GW44sHVcaRZHAQHSpT",
  "key4": "4X7JNectBV7GxiBqgxuz1ixrvJhWz2gqMsnJ6n7q5o5sTJRWiap9RBpWJ79E3SqtCYv8Rec7Atazxbzx15F1oAFe",
  "key5": "4vZfqZbqs841ASQW4VYLgS4ZchcMHyJCtC6rCpxdfxLE5MizeDrbkJbmaeqsNAYbSCeuTy6XM2SBRQMDyJjpkwkj",
  "key6": "LmDddNUXUdKveNyeihknqRMuNnbS8Yufg8rgLopkgTGNCiPhTgJsRDmHT32kNkDTub7a5vZb7Saz7bgCVZtwbZW",
  "key7": "2RqzQr4J5ZAudB2xTm7XvmRXWdYCjbXKNrKnWxWf1nooYehCqknjsvkEj7UKT3o9nXP7zjAmrufs1BQqC65mzgyC",
  "key8": "5QYETkFpnzfxPzMuWGNxwDEfeP3iGuRm9E5JGd9e61kcLCykh2woEuE8s8N7CQkNmp23bFtdmTgUCnRzzYi3A1C1",
  "key9": "41GEe4ECTmtWfAWAJ9DNZzwxbVfD2m5vzq9Vi4CVLd6hSdt9j82xBDStvXBdebkzvDKmyT3vbihWhm2DqxbrqR8J",
  "key10": "mMe5ED3191XNwPqfeZdgfYFyzmKGoFWLpUUnikQWJdHcoqTRWfX3faa5Q5xEVFhrrztBSCiJKhLVe2pT6JtoSFu",
  "key11": "CS625mDD3sQRffjmVTSv6DkE4vqhZSGye37CtaaSfGU3Wtt5Q8nyDtxZVASriGqGEcQHYzUBAY3etbYAjLfXdE4",
  "key12": "4ufAevLnj3CWLTb9mZNP7hrh2GRdcnurorY2UAoGBaD976ZpFvEnc44mv86aK8mD3so2BfvMbU3VncjPAbnJuR4a",
  "key13": "4ptXBsfieYS7dMsqc2Qrtxu7pJftD7QiPCpPxoax3sjojzSdkf4fFT6LRnKyRDZ1MJnCmnnkNuZfea3UjCq3GqjJ",
  "key14": "h31BnUtAt28iEnS9QaZVCutmFmcFQzN6myG4XPK86MueVQLUG486EqhZapVYLY9EE5PpCLEWnsP8JKuiyLm6ULB",
  "key15": "4sZ6jp8U3b6TnZsKi84x6Ms2vuktza8MadBPqBtTNwdNGobMG8zETKTktamZuxuQCEeTwVex8zmaHzKbKbAcZY55",
  "key16": "3X82yLjjGbo6uvBhTrn7wq5TJP4rftEWaEyA6R1pUdFMDZPe7tQmeMAEzp66eT1JTRuejTEc22eGkJMEhXPjKQs7",
  "key17": "Ewzf6KVqvoR7Dc8svU6MxXizqYCMf4LVZ4MuELjGQhyXBrr7kEtewk7zgQ6kVdN4kQV8UoPgA7F58Gean3Vh1Tz",
  "key18": "28iJP3cRQ9dx8YJmn9kj6Wh3g7WsRJ4ornuRUXKxzPur9GVjhmzBmm3t5bXhwZpZZJJzuugxRVKuXSJ43KGzdK3Q",
  "key19": "5a93rgZ1g9wtDuey9pSWWWWLJMRhr4vE5j2WEfAoahzQB99JGbDkWBVB7EdwLt9Td22Zz7yzdHYghHrSFzDbQqzw",
  "key20": "5bfwiGeN5qGmAGCsT8fwiHhfXRUgXqTiKiBwZYmDWxxc8igKYeKHAcsS8Bruh2P7j7N7rEDVCDiGkkwdzHxXAeED",
  "key21": "67RACGdC4LapnduYtNhZyf6EtX1LHmkUcb4oL1RJU5dN1PeuFVt6Nu2eHVURJDY94Yf7KrVjEKrJ68M3AzHM5Prf",
  "key22": "3nb7DKmZtPKGxJE1aRUJzwHPYiYsvGTdw1mUN7LRUEZtnPE5kvBhF6wvoq5eyA3VhLnWscCXwG6ZMeTmD9WZq94N",
  "key23": "hBcKmAszMoacg4LTzxfWivoJwu2symSbLV6vX7YcffjUKZheqXMaAx3YQCwsKe7fVHUmp6mwhR28BNZcPhsqRG2",
  "key24": "2RW3ToheacXU7pjp3QBRRreLNUGrdawa6xcBADWHrNdYKzwR92KHSvEhwBi6XZH39BqdYKVboqZowp6AdAfF2wYg",
  "key25": "2daTEmk8cP5xPwATunc7HSXyDzaz7V6wjkYM9rNtQ89v4n2bPhC6C3miNFnkSKuwvMA49zGwEnHNmGEz3nnWZE5r",
  "key26": "5XQy2jX1ny3qbCDi7gCg6uJTHF4sMEfev5EdgKLtdpnSNVwBsVABeRGwAs9M7mZCaAmhxTyRzf2xuYVCNLmRc4GX",
  "key27": "nPBHkLmYKuHvduCCFUhDEsTDB9ucYZpgJzysjMSp6yhX86LvoUYmaTzQfvwDpK2BHrDto6xt1ZZax3troHwFzhe",
  "key28": "4LLYmwWrRoYv3wE4KoAG24jkVXzBPFfxzXUHb4AbJnMuLUitvSzmALZSSq8JeQUysgVY24magQTnkDcxC4ebjV63",
  "key29": "4wWCWdq5Tyh57i16oskZs1PgF3cwwuVxzPx112y3oS3qmuyG9evg8fNguNLYg25G9cBiJrZ4U3xBZ1AzzoCA7cEF",
  "key30": "5tik37ZcvQFnhtjbC7fvogFP3cjxcFWuGXWwbHRagfsrxRKcB84k42aZypAZthQzy4gAxBoyphTq2nHAR1SYrKaA",
  "key31": "amiTEffRrJGjq843SETTyYKZfD9pvQrf2GTjq2GTgozAv9CsMeQ9JDViTXWikGBMMq5364YEsc6xGmwDoGtRaiy",
  "key32": "23x4NfYqg1afoC6sYKmgsYCxF6k34XS1fto7RCDoLK9TNntLudTgmnoBxWczapGTMr8TfZPPrFNP66cP6dsmWqAJ",
  "key33": "2tHjSGxps9HuAiZWkiebJEbzJ11cPoBwCXCrqTrper4w5CrDFb63ZuBQjZUDnWEj85u2DtfsESAB8GJ58xDkMbQx",
  "key34": "3ZtYuUxydkHVBuQ6iiKVn5nSb6Kr8WBpJseto9GgGxpQWeJefHKreErtUuwMXFykoH5mVYmdJ2moqnTEha3UanNF",
  "key35": "Zx7KGonU1koHvFpnE4CH1rRVZLn9hHrNnQndPFjDVos5WQAMkbPnPYkDwqGgfNJvLBfSvstGV411vEu2DzJ9MKG",
  "key36": "4CpQDRfLM3VVJVuEzfaoNahDrWPDvCoZ32B5TCrGVz2FpxyxaRkv5Rq5gBJ7S6i3EFiHrjCUZs4EcEGYq3h4hyV3",
  "key37": "22SDVH9fxyD23i9EygzN3WcGeahecLXFtBQwEo3kF9B2Dutpa2BN25kF5S3ncUSMAVuugmPbBdcX4FzygHhpAxS8",
  "key38": "3FkmJq2z7myMGB79vdZ2MmgKUXn8CkSwKEqyKtuyPf2NrnPpN2YWGyfxyZucJ96FdNBoEWpdYRjwbtBo5WkhEtq8",
  "key39": "2JY4eLKWqef8ZcmDGziLdnR2HEbx7FAHJ6XvQPT1cVp1eWxQj7uMe72mTKKLiVi2Gos83KXzy8WReX5Lx9jxVFdy",
  "key40": "4kD6VQbpDDFmaWpzuGwbVDEFvexfLyv5TbYJwmjEmryzysvog1WPxcqZgFEruioEDzh1CXrNsEBDiWYpYXhYLDne",
  "key41": "4MSue4fvx1a2JUzZXNjy4eDfKcYWYTPzoKups1SEeRX6jNCP67v2KtWYbAwGuwYFXEC4paDs7f64Kxq9dGNJcjA5",
  "key42": "5rQr8c4773Yyvs1CZPmK6GVmTMULaGugzJa5ZKVDNz1xNe8xocKXypGiyLK4D5r7XdXNN8jKyW53m7gRE5sbHKQR",
  "key43": "xoV244WQ96w8EkvmLqh8W7ssn6HAFKjBbz4YDYK8AvcmWeH6fdcRzqgC5N2uDcYUsQnYzKcSajt2iob9hoMAnHm",
  "key44": "3ZeUkwikVNsv1te7hiG2PSsPsE5cj6n28QfGqrPm4wW4VDSwK9537rEtxhcH9B5n7tTauoYVQ6UtJ2PMj6MaTeAs"
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
