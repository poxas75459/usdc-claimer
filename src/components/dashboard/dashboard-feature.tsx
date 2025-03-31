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
    "4Mgeh9rxpFyd9fDXwRpw6DYRevux3J2XbQmzTyfan6Ft3mgyiLkFZmioZUFWTV9qUCv1fxoBs4bWbXW4s596nsTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uV5FfeeZJpr5wTjsFnfjwBmC4c2epvc3qNkToH2oq4bfjz2P5eYmJUCr8bX21tURAfAjyzc6aNjRofSEGrjTrzc",
  "key1": "inpdWbDj1An8JrEzDGfzxjXDiKnC4XgpoHRweFM3VW7rteXLfyWbjX9pjn82jhSQVyB4cykBDV19LwUfU7wkAov",
  "key2": "3sEJMRFtHsDqXja9vXaifazmz2oE8Kw13j7n8o7rHSbcxwZsq6MJqv6V4s6VGksjSSZ1pQzjyoWVzJ3z99PXfnUH",
  "key3": "2QbpiLG6L5fb6NRv6TVUPvGrrukJNuqu81KzbC83HNRzbTRFmB83mM7nPnfyVHKNnk2upVXY2BVECMN6S7B3xB4v",
  "key4": "63upEcSwJXY4XSi2sN2Vz7JtUs9ubFfrv9SWnqGuZhU5a7nAnfYkf7jtmmN2bVwYmjZ4AcAECF1NqEKN2m7Eh2Sy",
  "key5": "5BceGfh3tsvhUU8C6Qf5rC6hNghkucZEKhKawJAvixAb2CgZU4SNaCiJdZRK6Pj3dwmJFjGT7gyMt7YyHCNSVh5T",
  "key6": "4cVCCWE23kMMPhY3dR7NHzwcPRS6o7GXdK7UUpTsGR7ZKcafsXYpC7DLsJ9VapwZKgBmvVf2xQH7GteKstjxrbKT",
  "key7": "4ZNMJCutTCP3C1aKtvSB7khCmXheWSzsjnjV7DjtxuV4cVbRVa1RAcaWg765ZF88fGyLe8PiydAyAQN3DxCwkXPA",
  "key8": "2uWQvEMZjnUUCWUMupovEkx5u7aP2T6sHB9trL1Vt6RCM7jhWgJqLZgULCjXcvyfRhUMVBSQ3nera9RfuJwNoEg5",
  "key9": "3cyMMZjxmFoussLkk8CrRwn8uRZxE1y48XGaEpghSTifB7ganifHCzt3pDicNKXwszshyyonKUSHJUF26pT8u7GT",
  "key10": "57oo22hyLGtX1TJMJKnQdfvmY9hpqRPXEtakXNSSFN5PMB27LhHA262wZBwpADHxqtXJe1MAQVXRZriuK3HAywF7",
  "key11": "DxwJb4wbFUnuprZQGwtbdTq4UaEaKThJVb2VL8wCq8rVdCefFhnJoBQcjftsZheVE1X3DPbDbpQYyTZa3EpsSnc",
  "key12": "w3UsxzSDb9icoVsXpRBYK3BGX3wGhsanzcjDTwKiMUypfUtSwtVnUcL3Lz9gZSdZC1FgJW7Cu3Qa1bQxMwBss2t",
  "key13": "fvrTwKPRNgRDHppCpu1je1PebuD314zr6aHjx3KNUh73ATDrsfhzp2tmPu4CJ38iZgeRoNoD2WJoLQfBCnM3aNL",
  "key14": "59bNt4HSVfeSEGQwe4CBX3isktZDPCRa3D8yW6PvvPX58jFR23Bb4yJ5wQLunUFMK3LLfRV4urJJn3Z1n73VCUiu",
  "key15": "27v7FYPGt4f4q5NFBRCwFEiNvQy4iy1uBB4BopeQk3mj1X6JmqSgGdhBN7ugP2MBaDvFHqVh4rboDcyk2ERniCgM",
  "key16": "28iRrjicMbCfAFJ4c17oKJL18xBhBNn1RgZT54mgiJMvEsMAJ3AGYK3cdkUxEsBbEsvwPqRqySsnZHh8VJkpC1cY",
  "key17": "4r229EpjAvDPnYL153weZp2so1bthzuKgrGP79jUyBGKnMFMD5HsSRFzakmT6qvswzotoA9ii1q3SB7wqWxYJEcw",
  "key18": "2T2nKLLU9yFJinfpjhGwLqWiKt1hv3Jt64dSyDJtRe1iBfsp1nasr6wY6vd4K2wKkfo3rb8VwPyAj85r9qiW3R8D",
  "key19": "gSQsUcRCtMsQ9jXgKk4KFynJKgHHQo8WbN1fcQagSrVQcYsptVP9Ny24oVrQWJngCFRCdXfhP5KB6SgUrCPqQZq",
  "key20": "4kVWmXneNhefhFAzuWJf4e9wyYsxK1xRUri4dhXK6SaCodpND3y4M1fzKs9qXdKTrhwgemk3qNvxdofopSuFsBqi",
  "key21": "LMrwE8NDcNX8UnMUMd41NEFsTEVPxhTfoh6huA9itFcA3Lcjo9gjCS1PYqAUtj1DUAQaq1VPJkVxQ8rYu5P8Gnx",
  "key22": "4rHybM8cNJqfbjxe5dGiwT1FL1z7Mwc9tZq5De65AocuPzyqsp2nUW28u12DXSzfqoUXn4zWURCzqTYBsShiySah",
  "key23": "4vifLVLDrifSCHB4Ysq3PQGBicqG8wQnYZv5h2fsrhgoQrnD4hXAUMpFggsxP42DxyL8GcqfiUiNnoJXxhS7dJur",
  "key24": "jvAju9DGX8yvSG5Lgsvyy43MaS2bdDcQwtSdHj7maerCVnU1ti3RxD4M85RLzuae4BWf1niyZWbaC9X8tNFcwL4",
  "key25": "5pUXMKcd5jgyY6nJrFKQUNbsXV8ADPiWmBs2gGnYtLd9dpGAxpYygZV6V8Yfrg4ggkyXncqcMZCagZvXTNSDD88q",
  "key26": "3mpB32tba6ispNsyp1PH9W9jQqvqwdubkdNeRd3jrjkgUgV7LFSPuR74XYtmGv8WdjpLWeETXXB8xHSvnPCjCfVf",
  "key27": "4zWw4sq7Dc8hRwZWgcna6R3tnpn6sZdTUfffQeAXFdUrux2YsMLdkhdTakA6KVqHf4ShAbjBXSAFDCm2H7C1NUR6",
  "key28": "4Gj64NfAh5HE1yzXBi1t6UMW5gcgq178VvmfWKs8y7y1AhHqVueVcGNMb98nA3CNzjNpD7MBdXELGfNaSTDQG6Wh",
  "key29": "2TFhaFjoYjoamEUHDxM4xXvVdtFoChyN2DkiTVJUbqY6FsHaYYKBpKymBWnvc1ZLHqoAk7nsRVeAiHkNQKwtjxMV",
  "key30": "gMnae2XpAzMTicfHzWqLifWqjAYn8ztNC7jcKEpZxvhAnGwob8BqKTixgJU1UNXGA2YfFvMCatFWVroDqRg6w8T",
  "key31": "4PwPREeRFRGVcTqFYZGgRn5yq6TwyLPn6QE2Hd3FK8Zz3BeQmzf3t3MNtFfyCffD8tXtboHSYzRvQ9AXHSvgHFpB",
  "key32": "5WTta2Mp7s49A53wLN2ExN9Cicm658aLSnp7yRdLhFJRA5zjfcfHv88kaNB9LWP1k1ymcSiXZWzj58EhN6yyGYML",
  "key33": "3qAF44aS9DKMVWm87jv6RfUwgp7afSavkEMftNiNpmYGXBPDFYukWDECg87Lr2zTg2tACYBFRVYVCuNBpEyyYR6g",
  "key34": "53ZpxN62WzwAsjXxi48XhtjXeJL7BCsWLTqDkwqqSQenV3SiYgThjkTNY3XrFSaygK474CUE24x2QRpbqzVP1DGT",
  "key35": "5Ttk87Ynpc5NzmFQP6Yy26G25NYK8vbNwb7DoVWWASS6Lq3jCc1vaTnZz5V1yBe1bYFCP2TkM5qZvKLsVqq3mHhD",
  "key36": "DXb7NRgCb7b2656Cyo6ZuTFLxdJUmuS3avboDS5T7u4uLN4zttsgR45VZVojPcmEQ8yyY18qNso6ULUSTsVC23X",
  "key37": "2zVNgZYWSJkRuyWLEMGix2CrvgZJNWoa2mRTKB55oxEK9ZxVujyHmUU1QpK49Uk58emY6dhtnZW469KyQy8gzhQJ",
  "key38": "3SYPJ2uNthg16TS8Zn1u7AWh7izyzJGg4akdvUeR2qUiBrUSk8bGQ8Wo5bBSWgKKe8WYFR2mnJqcCed3PXd5aE4f",
  "key39": "7gSNECZy5vjB1zEm6K3mpEFYnyb1qTzXNpjS3VKSGBRQ1QZAmTSJYsC1cBy1LSKkf22CLom17U15NpMCoxChsXE",
  "key40": "uysWKfBb9gq55LE6YtdY7AubKuczKo1a4Umq6QKfKj9bZYiEajM8vMzyR7SBeNV8urLNjBQoUX6HJ3wGJ4ziDGH",
  "key41": "61UNRzJMD1G7zKHzRbiwy1yizozZVEwf9mgzxB3ehW9xqFcazX5qh9MYx1vY886mmFRtDqTzFGzujvp893JhpawM",
  "key42": "3KgaC48J4eVEx5o32GbcTYRrxZYdJXrtey9CA3daDTYjvMMiNcnVJW174PsSDKjLn81KKtSNGgYEBf1NhUbcT4hr",
  "key43": "3bQD67knMpuLLyDTg2xFBywFBjNMouprsJb7tqDZqBfTLu96Pe8gyMi1ZBebEebrttSSULuS3wbPE5PHp17dVGVf"
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
