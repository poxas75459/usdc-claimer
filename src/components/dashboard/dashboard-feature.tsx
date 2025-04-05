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
    "4k749qJZj8vhUYswaYeRLdNTNHPEAinFvviaGhcsCeRKvewdF327E9e8L9QCf66mAA9MMzMR5xPLH5zYhqSN44MZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "477d3NhoPNQiZ2ugBkauZt1x5uAitU8WNQERbzQqHD5ShJv1Nts4ZdvQSMbTHb5aqLKeTVzuJyKZTHHgZAiwBXy5",
  "key1": "kKPcD1CuTDVmafVjPvYqioChNgGX5tD5J86Z2ekUS3XN7Bo8xKngtDqS1oGboaBAKwRVurXb8HmkQvNJxpjPQhE",
  "key2": "2oCzZNBitrwyMHKGnFXMEGYHXX9CcqU3TgyTWnxCCSSZzMwx8BBajs9s4RdUoeritxtB8j8oqKQYEDMu2ZJqkqh5",
  "key3": "weZDak4iqWq1PaqENeBJSt6uzXz2XZ9QouyDNv8A5nmnR2YQ7EYpxR2nZxvHBDbEeNBJrbSZypJJ9AJL2thgzKp",
  "key4": "5w1fM2d8xBSBjZ7NUB6ZR9AZttw6dMm96ynTdP46QLZVdnPjw65K9KTntNe3TCCN7HMruVEzjgxsPVKssNcJrRcq",
  "key5": "5jLuAzteh2PNvojFUGkSXZmN1REhTFcqcQcWWsSaQkAcmU1dnZssVGUf7ZxWCdjUjuBbfVwVxYg9U4ASbK2Bm5Qm",
  "key6": "3181hSkFdzMTyAivsagJdrve5c6Gm58qbZSDTdHAjN7AkoFWM8vtokrmbTr6MKar4Gc8rif4V5yQFcM2m4CwyYKX",
  "key7": "3WApigLn4v1Jpjcazk3Z2XkdJw3rXbNNcKYm4uAcMtvTK11NydjAYRw7BE5gzy6VyfyobPNJreQPdxTzEyNdfTMb",
  "key8": "49D4HnemWFrCoPQ16jP3QUtCJNDGtTj6iXvUNyUjbrrci6wUTs75rvi1NVFbGRFC7zTpsLQzUEqgRVDYHpjS7Dqo",
  "key9": "37jCd7bjFVu2kLmZjaHWkuBaAeNiKrLzLwCUWgQisriPiEF3poE7TNtk8eDBtkNiZMYzjk1t34A8K9mqT46hexCZ",
  "key10": "gnEDrkUrS3KKsMhQBUhnmqg9vsDGuAEvLnbAR7JkFT3sG8dR2RLkTo8vjHiZGjXiFZdYgDDxtCejjhAfR6gV81p",
  "key11": "9ThRK9BvviRFJ7Vi3FMkgjWjFNGsn2f7uAkKHzEYE4iAZDToeCNeZUEyMHc4vzfb5GPqhkrqNwRj3S181HUqr2b",
  "key12": "248kUFt5GMiWUbJ2qpyr1ZPwkxTpqcBrJPKHYZBDzD4LJFYmqwzqTythcnhyBDgMbs8Pg6p2H362r2R1bCaxCTTK",
  "key13": "3FGz24uRKuMhFv5ywutTwjHiXEKnuBQPm9S1LLrP36Z7oBa2kAB7eEynKwjHKBkzZTezs5FgRd5EqhpiY2u5uZxJ",
  "key14": "jWnkfxp9ZtFWxmesVwFBpzpzKcoLbJkjCKivbU4mfbBRBrHDPv26fPbktzqWbaPyD7o83jRePGSbdGXESo1Gxuk",
  "key15": "4kbULKGo7ZZHEGJ1DacFpg7odi71inYTg6cZPq8YEam36XqmaPziGms6D4jpQU2Xhnuw95mcb7vTsDZsSj3Udsn2",
  "key16": "QbHk6nDzTWVGz8CkYakNs26AvRX2JXZQayKKinUuCvAe1RP3iFxrug2YRKPqeiwqxGvUfGjhZrGuxUpBjWZWAxL",
  "key17": "4NzRfSo1rdiMFfZ3bRNkddMgU6HdtfszpjeqXXCXPyhN6tS94mKpZinsJXwrBPbCoj4enpGmccKYAWdMno8mHeoP",
  "key18": "54BsiHYjp3NzwjYX6ELx2tMy76irCgvYHP5j7KhqtDwbQpr7A6h6grADD5CCYD9KeRzjtkMxNQfaqKwu58z1yknR",
  "key19": "aipVqqiU6goXGue3y54UPQkUhJxFQSYRFsvqNea9VdSWXLjSN9gT5XcCjTnNF94zJRh8HVmgmMh4VJpcT9WHnCp",
  "key20": "5CQjvnaCmSJ33PzVVTDcoWYB7MdYgLkKKi8rs1zfGTiixi6BvQJJnGkkwRcSX5D5TqxN2ceuL2Ut2F18qkpQQPXz",
  "key21": "gfGqrnbfhCk9tKAtpEPyxkvg3x1b6ayzLBA3ooHQyitRTtoehnHKTx3AAezPdTiu2fdJuQdcmi2VT9EYBEAJAXa",
  "key22": "4wWAYfft3W1Y1PECgedjUVVy9Z7ZN9uxtE9QFYjSrcfKCKkAFDArXDXyvgoHc6Ccvg1EkjfH8vQos4dXLFoSioE2",
  "key23": "46juSba4BcomUitt77tRcNQ7eZiSiUCxQjnixD1iGdc4Szm3icJ2DZDAbrfzvmiGQoRE2KyeB3cyY2PeW1wEKGPd",
  "key24": "5KtPD4xXHbbdN1gtT6o2WShFNQtKBG3hcH7dqmWh2L2NSFoj4yUBBqmLE2e8uPfZxtgWfdgH95J5aR2EN2cFVMtL",
  "key25": "2Mcb4jjWLR5SuAdT4zbxxx5evoKBUe1X3ZGhTyXVHYF3xtZiLitHQQQjDEGUBakJzoyptegVhFyCryLmUzDmZ7kP",
  "key26": "gQBxoh8KThMb4sdoV1YhpUvWFyuxX4FXTLJR8cJtz6winApwNpfov1UrGJhxAsH33xrt7wrcZeHRFFxSaWJRJxG",
  "key27": "47T96Fizy2H6c4meqtkU2odYDCnj1EGpjog9LJt97NzVw4wvE7obJGfU49BdzsT4ZXtXi6aM7XF8r1hdAuYipLun",
  "key28": "4B2WyjJCjZucNxEKXTTkeWAHU6uUYvtxdGbsP5Lk1TYxRQzmT5LXUnqa6omrQe29NjLgo5PsSgynv71J6qCec7uV",
  "key29": "5ztocMwJ2MgWfRzvFMb5qGvpJQyCbafWyL3g6adRbmhLFo41nzqhWRkiw8SDrisETdnUuCehCckXhrvHEsB8hmUd",
  "key30": "2KUDs9SA1zgJspDVJGFaQyw9Y5aewWEtSfN9iucseFxW7t5VDV86T9DD2wtA2ezxdhZb3nGf3zeVRbk3qndPRfzA",
  "key31": "B7YYoKFv1C7BaDL1sP7J3YZviUFdemv73TrLEjGGsAXgMD9Lbk2TR22VnxWbj1ghxqRWMVbNz8E47LSYzPNbU29",
  "key32": "3tFPzF43QJNKKMTwhvdsxbiTsj8csgDbSTD7Vfg81ojhkCs9irjkFbr8ZAU5A98XaooUZHuNqmBK6u8cGtNBUVuP",
  "key33": "jX8JD4SzvphwMtXBVD5VvpuZiTo9y9KwzhQJgny1Lo7PjmM5CQr5Wvi1rAhCsze4KZnq6dqjdtkcdBeCZLtKRE2",
  "key34": "33u5KN3inxuSKmdycLg24pK4ibEbL2VvPLk15FxmK3QrB676gdKZ9zQBuRyDnhuxsPRErwDeUikuRBtprXYkd13T",
  "key35": "3uxMPoFzsySb5ZWFkSby7VajwMV3rd57wrbxYyAi9Kok15e5sepb3Gpgo4Z4pBwX7u4GjFttsZJsLD7FKZ6tAjM2",
  "key36": "3F2E3hWXGJMm32Z1JAx9XnQ8egTX7zU2gzVks2LwFNTd5sJT5y4hk2usknBHFLdj5QNQZVc6y9GrEfMFbC6bTCCF",
  "key37": "2UPpf5tCk2hcVskFMzXvnwSoo1Peiav2JLkLDbbUgjZziqXxkBetTiwwy34eJSSq35XGm5DVQcwL5GdAZVJAYHu",
  "key38": "5snzRR9xsg9uYLDRrKYB62JmsKoXGDeDKa4Ngki7wFz7dKCG7ypMyqt7JTn1aTmRZAEqb3xUaUUK1sY2ugYee5dC",
  "key39": "n5cNDwYqQVa1zbQqnkVMicXg3JqX9STZpmjLBoHNuUiyXtmkQNEunyxwHtR9GDR33L83Gzeo8PDczwkn5HSjFXV",
  "key40": "5Kx7VTUo4NyRGXwygu5QPMp7oUParFYA59cYaPdGodsFyXE4uEaq1CWmyU45m8cAh6SwUoSz5TVschm3jhAZP6SC",
  "key41": "36NXhJBeZwi4tuF57DV32aDomxMm4r2hXthVmVy8igYLPdJEhh7DqrbiTdf9La2Xgqb71VH9nNHvJwqWHumtybRH",
  "key42": "4rhHv2pSbDr2vsHpvUy7KMPdJACsEWwuWDLyXNfLQcTtAGhTCqQ61DW5V7SmVjQPVYiPRKqL6WsW6HBJj6de242x",
  "key43": "3BwAiZQxViWf9JArAbdVAgtKsNPHJUi6FwLK3oHrmhXSED9h28HkWjN4CeGXMDE514QcjMB79pcMsyFdReD2NUQg",
  "key44": "5FaaNiKFBucCXCpUHsY95bz5DWy8JQqBFVHdpWWDYWfjij4XpRrSLgHqPvErRJfZDYvFoFrEPDtaa4i5kCVgieMS",
  "key45": "tnLcHSTzVFMXvaHinnpWdUfTT3sg3FqgRcCmaqua87aovC31Xu5u8qzCiCzrEUfTi3d6gcootuE24Gduurm6vgY",
  "key46": "5nM32q1txkT78t4jS2jmybzjMvzfX3Q7Pkmj8R5T5kPe1SbxrqnJMEiTSVFdLjB8uFKxjh8EFt8zv7CgXSToq8qN",
  "key47": "2UuLhBmScYutXTmLfNzQHkxQdqC7qANGQaxb4KWd8XJGAn7jKW25959x6wX95NmK5m39eRQzscyEJ76LbYYR5wdk",
  "key48": "4MZj9FSZXZoaf1V3jkrywYJqnU7w8yRzzgt8hGmqspvdaPDLDSgvpmoZD79Lg5JCyQTkykxMosFBoZqycpogFxx3",
  "key49": "4YnvpuvwDSzbZewtBfHCSTTm3ceFqE7sJjYfXUxKUryB3ZZikm6TNozGP2cUPHuUcH75Hi5adXKJsdtuEWTvjV5Z"
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
