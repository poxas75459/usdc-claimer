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
    "5mpKcnxscoGK3j251vVTjsEHZcaLHx7unx4dccTsC973DhoabeDfrGHkXNDemTTCeAdTDWYg2k2UJs4HoxXd37tS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cKqM9ieXLQoASDtSWUHsyve5E4GjAuTHe49vebubJaKMbaZa7kqnHa7rdxdsXFMLbmsssirjbU66nekd4zb8wjt",
  "key1": "5sfnyyuKGmPgpAVWr2PET2FQdLqgH5MDHm2h2e42ar7MhUPDkLL8XqTCXVqNBhimokLp1ojv4wvM67piVAe3qtNL",
  "key2": "5cZBkaLRraw739d7hC4tKUDj5y5413FMRSPr4qAK6E7VtmzdToRx6k7qYxb15UXdqFbRt3gNUu4BVW5FDqej2KFN",
  "key3": "4HCdtX54CHqBcR829UdxQ1LDmo2nTF2auMCKm9eHFp8LNb4fFjEz3NWJDYzL72doUCzFVD2g3hgccG9aK7Ck1bfe",
  "key4": "u2DeP7om5in8tVocPm3gn2mCQvtg67fiBq455DTGfziVnuZikd5k7dwQUqBtNnqLVH37w3bvy5XJvPUwH33yd73",
  "key5": "5n7wfuBjbXmgojSwpVbehkHeH5CEP1MEGA9TFUmTgb6kdtwegxg9QLn6YvLMqJEXqpJy6dZKW2258tPZLxebyuV",
  "key6": "61zcw6cUSpk7My8npkfvcPWKaSBCk2AgevarfZMazPTBg2EaMxHqqmHYpG28bCbWfzNS7QXaBxv6SCt97MixYkPn",
  "key7": "3Ev3ZbyKrWpcHAy5JknfUeMMp7oTpydEZSUH994PXM1ziuJP82FaSKsgq36HsVV6Akz3XisAJTgp4GWnSWC98jhj",
  "key8": "4dvVB5mDozjDJkhzVb8ByLTN2owfHodcgpRgy39kMyUt5cNAQkqBdX7esT4DwfLDDoZm9A4SVbToQQBNvks6t529",
  "key9": "3V9TvSL9XjEw9EbcJQE6ny9ucsNLkNyW5hmo3CQuWXhAepABzDbsYw2fvkWGygK7B3j8rWtiXP4AvR7AFcNeBCPg",
  "key10": "46ot5SZcmuvzoSw8SMYw2jVrmH35ZpL7dgTtUSwsV3Fo68FK9rcmNhNXusrvuU63fkgfe8AF6D3db48Ej1W2vJuS",
  "key11": "iNotzJWcFMYtLk72t73DSzKmCZr55caBCtHajTY9nAERJsbercG5GQPPzDj2AH2xn9u85B1HCQLPocNiuhgxNjS",
  "key12": "QXxg5X6jn9ffPUK8CrpaYTjmKEA6TYd45s21Szzcsdvi2C3ZUMB8UPDF2b2vtKj7Jz3sbcRUVBv4vGSGoWisXs1",
  "key13": "5Ef3CHPKis6MeB269uTX226eCKyoEGHP4PiENPDN8hyMLbUUaNEGypr8xz1JWjCEsdxsFrt992todGDySxxFXGXT",
  "key14": "NV3SPYkGqpYEGTWPFuG165JkyU9Q9TKVhPREFApwhQnUMYYMtm1Zn1rTj3wdrKWC2Dh9QR32ptzWPa3F44nGwaf",
  "key15": "4eLCrdYMu9uRrKYQe8nXC1Me6RzCqxCDG8gFFQHhwbacoRtPWKFcsTpNzPwJWivmtawDf79oqfzbMfs2xkoNdPfy",
  "key16": "3GnrPtXsnrVM1zcsopff4LCUzJ3mXwD4mcEk7jENVtX8JFqsgR92akwXQdMLkcwpQWBFawKCGCUGxn28rFUkgbsY",
  "key17": "3ZBDdcihfsTb1LBEYvE4DsWV21Gt1yjVrkxb73LE6mrDs9UvidnYDjvkmo8SEbd8vPqHTQmVpcHRJDdHAAi5cpnD",
  "key18": "EJfPS13ariMYY1eNW1vu7zqKnAQ23MkF3Btapai1MHYnovqSEh4FAHFHCmGdUE5x4tGCa9hjZistGjTUZ68fWfQ",
  "key19": "49esfMY7JNLL8k6EqmDUv9LPDXSGBW6hx4xpjwduRdmg7qBJW4gn4AhzcV853CRYfBNUBNNpRPsZcU7zREvaU2mp",
  "key20": "hV3HUsARoPP48xPvPL9TRSqqLwUGJbUp18iLB242CaHazV8Vy2NUnEz8bBgcPPVGAxgzpG7piBQU8vqLZqt5tmz",
  "key21": "3YmQUZVsQJUoTuwDYvHW3dGkCCJHRqE8tYH3mhZasCMMByPbBJ3hLLmzb76XjUSYecT4oSR4dnnKxzQN2jwHsvg4",
  "key22": "29cYFqKAoU1jL2Vxpm53pwgYWgne386o4wYSxZb5NBYhiXJutvxB9rfgPvYYspfPeqkjzZ7jnWVEdWXXGNG4KWB3",
  "key23": "62r7kyU3gkB8JmDXest3cRh73Zo7QS88VKK2qbB3kJRPEXGdVtKe1189vV4nz8MKvcvEKC1xUeGUky27XLSg1G9s",
  "key24": "fwr2Avz7jX8vaMRMx6oU9o88gV7mi5CbKRjxcVtkF69n1UgQjnAgrqFBpsBAAFBU5emtCmCET9NocWXHvv53A8x",
  "key25": "27pi93U4xaJ3q54MNvRPxd1zhKMBwVoMpBP4A1PtTMosiUkLBmrBgmh4mdZDcd4TXSBuMqKtbxEJMcp3p9ymyv8w",
  "key26": "Er4xcJbWMczk4P6mx1k22EFubxCfj3aP1heUWPSoi537ijSXx5tdRPajUskXncknrwT1SjtvKDKLQ86jFLZ5unK",
  "key27": "4ukiCDYp6kZVPkPbEb4LkxffAKVC4wcSTPEWqohYT8LfpwHkMhfrzMPyFJ5AWfRDzjdybanmDBwaR7Q8SLvjfP3z",
  "key28": "5EVmfhteZztwB3uUjQ7swqk4bbqSC8cq4ZphMyF7mtDaSKDA66zG72pjEPTdjKuCpLNADbikiYzLSbkLeSSoM7Fn",
  "key29": "4fvyWdfWxxy4j5ugfPd4NZvQpPS1tzjBMZzx8yHFCeJUYMo7n2D1hT77AM8LEqyFagz1znhbH1FEMHBcU8Twtktr",
  "key30": "3KCTQxCQyXY2mRxtVbLgMh1zntrMLFEzrcPDPuUFob1we8AGN6pQsz3jLKjrBWfb8H4VAjebTH6i56sPxj6fhMRk",
  "key31": "39ynd7m33xNGWgVc3wAZvdJVEN36uJoKV43PyqYz1ASU9UzBexKr7EbZhnqpjsBa4zQn1J84qafGYxFR2bdAhCME",
  "key32": "4FW4bE3Qb6chidibjTWSHDy1NHCCVvcmSyCdxMPqdvLGuL8xXarD24g4CMnBC8VwNTepRFpAyWHqJMzGZ3YbsYUp",
  "key33": "2rYnbZt3nqTfAyt5EB72n5JFV8A78KiDhWQLVumfDd7ZAx5dXotxT7i1J9sJHiLwkrJCDk2YYxi7AngQ27L6GTix",
  "key34": "5Dn4VpSbcJJrNtxQCRAJKj7PpoySpuhWc4vj5Berym6jfRshYAbx9ULMcEL6iAJfRLJopszHy4RTnSaKQBCA9DDo",
  "key35": "52QePSgztgFmEAKiegarc6NVdQefpCDCGeLvdy6fqNdqLez43yomW9uTWxwr3K7Sgd7wzqXJrDG8nBftJkocR58i",
  "key36": "4jR5b3kh1kyX2WeMyv36nfuo3VcN37VBWVpFmQbVH1zq26bvChkWnb7hfc5fQEz4AnvKT227AmyyRGwtKNJD5Gif",
  "key37": "2Sj22u3RpswNqZb961FSME2qwu4CZLhNnzV7QJ7Emh1PPr6UbY1PJzoVcqAMXJjUq1CjuQD7tbPQY2aqTsENVYrT",
  "key38": "2w6hraDF2cHf6pP18114turd1TAQd3Hfm81jec86e1pEtacdMPJ6ijHmc2YgsAsZ6zDdowhN85wA8Cnm5RvHhVvA",
  "key39": "7Wm7BALTSPoVLBnBc84yfVBWWk56en9tsx4NCxoqVMHcJVsaD3FNXLQQ4MNVez64JwrNp5ZqBWsCZqKkugw7zso",
  "key40": "5NnJSAv7CtE4erst8h6VZ79Mo95gFkPNmmx5xDekHxV3FW3ZPvXWxLXXvN9uFMnDe7Q1f5YsRsFsr3m57e1SAG3K",
  "key41": "5gZnyyCYRmvBB2FK24RTayvKQktPf6j73ckhSgWH4n3FtYXJ2geGHBT27P4J2g7wDovvYffqFhQk4fQ1rigooWFw",
  "key42": "2NZTYtzpHiofog6WnCctra6qGMY7fbkXgaiKGqMcQ6pobnHChAMRRaqjuDYd2T19Yj8tGvRAz6ytMkFSih6otugi",
  "key43": "3MAzvEiLBXeqvnD86bMG9MMKJyV6qTK1kJLnQZQ5YJMWSwvQuyAxvhSg7zMa7d4ZN1kYrwxb1wBWNWjjiXyGWXvn",
  "key44": "2Fk3FVVCGRAQGvhJDRbdcBpq3CosFLw4YGYsvVy9SNZADPdRF5da7FXFhR6Tu5y6us68uvMaJwTLcdkBkdeKMRKK",
  "key45": "54ykR3JFRs1cNWTTN4CtqcChNvYDSrHKDvw2rSekLq8YREvXjNkVGnWaX9rRneYing6HTq3DhyEquNHJa2DX7M32",
  "key46": "5RP1CVijeB1Kc19WZgD1LsAq6SqwjcxCHXvzw7zsSvcAyvG52jc3D7iYWHWWBv8cF5uC52p6RYuH4XuzFu7nKvLx",
  "key47": "5MZnjEXvAnGPRFm2RmoDrCmWBq87oyQb7LfRec6PhoL3kgejuKoBcefsKJts7ArNz5mudEm2H4QktLGq3YYjWr8R",
  "key48": "4zqB1pXe6n3Kahpj5ZDcz1k969nAmN9u3sCTr1gNjzYTQUyQremJqTsPkF9xcR67Ps1myuvMtzAXsAsP9NpTXVeN"
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
