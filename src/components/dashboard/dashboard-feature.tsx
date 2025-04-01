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
    "539jSNmBthXGz6iib1mBsJfGs2MM3EWvTbWQ82GMP4VZDbbeKwQQfS5Lv4DGXi9wzJWBYynBaevEfLYcWSyFLxEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pcMtFDpYJsmnXj1KzzBoc1jN5CiVW6fCujcauRcpL9me2JRrCZffBedkfi9w16rbvX8ZkhWaPtmmzsX3a3DhBjo",
  "key1": "j25bQJjTn8WN3iadmeSrTXQkDK8HGPqhsxwrC3zQrsBkHWJt71mi9p2KisTUcidStwaVcMud3Nwu1LN3ZJJpaKT",
  "key2": "376kH9P8pCGfsdDuh4LPfDJs8oUtTf4LP1PxB8pw8eeLoqNeHmEHqd37Qy8Gv6dL4vukhwMp6x48U5KozQJUgeLm",
  "key3": "3JDwpYmC5bmGde9QdFbKcCYwZmXpoTN6fNaF3WaQqZt1aCKmsTSqjJDCY2H5BfBcdu7uUBv8ovdviTcpaauhACMU",
  "key4": "2TxvLG3BokhqRgKJVoQsZ6VXJxxiU17WsuammBJJ9mf6ef39TvbbzyfZSiQnsgo8HThhob6M3Cu2tzCfaEwvjSrU",
  "key5": "2YCeLTnH1onGm3ccgKbWRdfEpPQFwT9rA3dzwYWPnPtyUboFm1CUEKUPJFd8eopiQvXtuFVz8MiAQdbn1v9Nv1on",
  "key6": "XKnYMwYTQDVBSy2SLkCetYjCBnLiTGHhXrDdmvd38ydLu6tzdqcAAMmuXqkZrymB6gve8UEDDNmmCFULribo1rg",
  "key7": "4iStbPUthXLB5YLoD8k1MCmCPWGapcyyhyEAgo3PzXZQDSHvMkaQfnatyj25SgskgspdbgTKGCPq9WWMcoSYT3GL",
  "key8": "5k5pmCLWEkfqVz9YDSrwsVDEYpu9thxJKUDNRKdTwJpJNhvjFF7MXuQNmmagpZBi1ZTQxuw2xqBzXBC4q35uRjJy",
  "key9": "2FW8BfcCa8LnwRVgDZ8aQs9VamZcqadcSr3zRH21WtBHDNUqe4374N3Umb9GRqqQC7qgS86sRwrPAGj1htbChVHa",
  "key10": "32A9wDBCqyfLRZCEwrpG8F7CirFikTGyutKCd8znEv3cUfdJRs3XxmGygKCMrzr6knCCUrt87RfZcfsh19utB5Ja",
  "key11": "8BUuXdLp3zHzsKnRv9bt6q8UYXymtdhwjS6WzTG24Xs8kzJKmp9bxEbJaxxu6LLzCPyUfBQAhavuosBRyBiS2rs",
  "key12": "2nGwaRiofXcszPfRHwxxQoKUzK9Yj9YNRWNfMfRy5sCw73JxzhW2VTJcdgyRuz6JP3aiyeJCgmA9FdSRRKEThyFa",
  "key13": "5x7AecksXQRvmTqrM8ScwUahZjvQyEBworcBc2JyrFDnWhbTs18M6iSNF9GSAwYt89rEzeXzuf6VYWE8yhwKv5k5",
  "key14": "3hLE1iPYVkPzRdB5r3mUCLrNCrPgv6MtY51n21cpHVtbZpc7bmAQ3AWwNvaZ6yQh7s9KZpfqbiX7n5L1NLFcpcqn",
  "key15": "UqLLCFzmCA6bS2LnfFk1mTHg3wWQLk7dYkYBz7QKn8VotN7Q9Vixpxrm3aBgDZWyZQGhDGEWwUBct5RafDYFkHi",
  "key16": "5ZuquKQF7Vjok8La1xUeJaGSHGSEuPBHtuEwTHA6yvhFjXMqDXo19nGtMgRjBbUKN7zkKmSBKuZz2gd6tqbdvh78",
  "key17": "CkugRqe5vKqdEwmE7rRfLmfpUs6xud3BoubiFHTpf61bZBbgPBkrYRbw8ZHtCnYYkq3e3gbpjRJ7S5Qn6HViL2Y",
  "key18": "jBAr819rGy3pKsZpSSGdaFp4iFqxmAovEcmCqJ49EdT6HpbzGW8n75PbTwPcwPuK84AMhKjXHCuJ6cmUDqKdTE4",
  "key19": "5MVvsEkJ5SCkMmhCxa9XpdsWtTcWcXP1yRGAHQ3baSyu4m7vWQJJ1rB1HxFGn1kE9BJDTCKFE1e9nxycKuNsdrxz",
  "key20": "2HhrJk7Py8uM7XCWmmwJXuQxjbxFARYtodkYp56YVAt84pdAJKoJPRnf2d45DB44y8Tv1nSvwaBsa2qUmUPHxJGw",
  "key21": "5Hmrimu6w29rkhf4p8XzWB76D9LBXbPkRPJqiBfzSVGLZtjALMw6dFTkhxcaevu9mdzoKmxgvfnfgYcffziv8K84",
  "key22": "62xbvuisg3H6HPCTRr5ctQCRQJAuCHrr4TDZbR1ZNmCg4yr9GASRXVyJxcPfZC16vAWRycqAd1EYAQ1AvzYrFrKj",
  "key23": "xekkdzSxW6e5rMttgwTjErEw51ju1zhjkV5wGWs2duJL2g28x2J4FAN3ez7pAesX7LZhmhuQLptfvk3Eb61gsLZ",
  "key24": "3vARpk1kPAponzGgB8gNq1kwYhyK7CrSUVDgr6jMLteYqoZEYH1crfX7BAoqjqMXdxoLzkmNz5VHb4DZb5zwiKMR",
  "key25": "JL7dYshVRT94UExoqm9ZjXkoXa1AcVmXt9ELxyBSqQmK3Gn4CzdUuLwENvUFuuGdLdmdnfZDSTEgt6VKqHRtmbZ",
  "key26": "63aAuwXXDckztXh76kEprX4WbDY5mzMqSP917XUPKZVxa7HARLt4PQSPNwWPdSpgPdpnCo36J7GUFac3e4HZFgTD",
  "key27": "64KLvfZdD3XCnDf72YDSatAXpFUFms2CrkVcCYG9RtHRVZeaa7vNmcNPpLUBLNgv8TGZuZkhMQSNQJD5AUXQ5dTM",
  "key28": "2cGBrRTrVVwmR3ceDbN2SuXYaWnoviajtjtEpUwWLy9fbM6VezeKa5SAHsAiCYkfsn4WeHtSndmbXnr7qsoi2jrq",
  "key29": "ADPBRcoqFHTkiu93hXQnxyeytjgHPZt7j5SC6zi2SPeFUtqCkWQQTz3roq1gaqU3ToR6XcnMYJnj163ngmAJk1w",
  "key30": "EyQLJ6hifNLXgJ59xWBqiBGfisAeHoVefztSTWxUnN43u1t5FQAMQQg4JA6X99umN5cPfiDzet7mV5fHmHJjDW5",
  "key31": "4CvYzZA4CD42P2EHxPkRZS3rm7FLDAeK1ySMw9ptYwGy3mggvRkrfFkNQQW5FP9yWe41s1mdDEZXKzABtUYYdMVL",
  "key32": "58W9zHgzpyBHFfs2H5dABZgzHQ1NLtk8gt7fegXh2pk213qbJ751CwckRn95uJadsskXxDXV95XuuqKkrv6ZPL1r",
  "key33": "26cyYBjfCYEQRQQqnATzUKZ3p2NQHkUGw5Jm3PUgJin2tVCcktbyvdzergNrgX21nr7bqs9hHJNQTXvSyToxCUFF",
  "key34": "579bcqaX2EVxY8EaCemr1KH2GuhyA5QGSH1XZqSz9LZFp5jpHUsqp6zRQ8XD7768GU7ZsLKNxt5SVAFpkzTtPcqm",
  "key35": "BnF1cfuiwWoTzRcva51EsUanpkuCryFk2FjMKqDR9dUZFBGL7k6yoTpdaWT27DYv5eL2feFNLMNnMBSmTvav4Bj",
  "key36": "5bZCsfZYNKCBdsL2Lnxc4PF7Qu2rdSXbaZ2GnaLLvHXf712P2tWR2gGZzWY2zEg88LGnrxUPFZ7ZPJbVhR9ohSZz",
  "key37": "2pXcHiwC8JPqnjMif5jbbV5M66yWzNaTZWANmALjpf7M7TeCkxA2KLDSsp7cqvbeZs3kgVDojBc5drvr7j6c1pc4",
  "key38": "3BzNxWjDX5Kb1hBvwG2FUJtVWkWt3HC4ZjYXxa5ZLc9b8ANmgHUFLfyW5AjfaDThyDMatCQ5D45Lb1H2VHRz89cT",
  "key39": "L481WVbYgDddKh7WABkcScs2C5j7kuUVA1Um9gsC6fSNGysKV6AuMXSmHattRNCPvEbuFgsAtmxkoYrmZxWPeNA",
  "key40": "3t5mEg7xXG65VU9fEUk4rr2ptsV9ewXPvyjH8C3hBMDAbPd9iDqtAW7u2wL3yZ8FB77NLkZoMnPr9GbtRmHdFyzr",
  "key41": "3Fspc1aCehcX1xHuoobgtEhTNXbCxDDrSkCdk4zHS5TRycGcicdWE1mUuSvzwqHMvAim7Bf4iTxhufLXcn6WzedH",
  "key42": "271o6RgPjtwiJe4NSKtjsZKfLW38UrD32Rjm4JAPdWqwsh9cGZunTiib1HyNiL4XDQ6hvJ5W4wgBtzmSdJRHt7Hg",
  "key43": "pEn4FLe7PvnFNfu3G3YhamuhK2mAsgeEksXrBScLZ7UenL2JrRsJKwgupFWNohJfC1AsjBqCBwnZD8WK4XRaLh2",
  "key44": "2iqU8D1YM8fsN9gHdp76nWyxoSHpFsaFcDsS59HJEuY2dhxTRRMHGuNBhawGzEHhp6Cfq7hBrLv8Cpxvfre2tM3m",
  "key45": "4ZYvLHNr15J5u49njU9HrTGfJzCcgBykXkNzxSVsemqFMezSFAKyFfJPbzXV77npPiB9DVqhRkEe2NNUTfbuj8m1",
  "key46": "4SQXJbh79ewg1rgBygA5AiJkBqkBPmmrUeGkNimpo8EUsXpXsNmxBKhcEGUR7CLth9JXaPjMoFrT7cuveLreQCAA"
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
