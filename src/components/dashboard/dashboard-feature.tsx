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
    "5L137zN5WnYdsCvNuHT88JDxPPL5nVDsbsqU5HAM2uYr5mzELffjgNcdN1P2KPK3DtdJsKjtgycxodZkWez8a8xN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n32c6fxG18LVvWnp5xFEyGqVcUJJZsLcnfCi35ZoedredR3T9iSoWNig1zCnmaPDYnMVz1YpjRkYAe66zPshE6C",
  "key1": "23NBCNoW9K6rpBrqgsbiNv78HpEhHz3cv2bk6tvyVfFFguUxPCY6vaikMRYWccwBRPFYdFK27FmUpcLDE4EB46CC",
  "key2": "2AWRfJYbdjTdqw8CEw23466gwQsxgfAjEm5UcyciHGBS8hRHbwF6JYw74tKFUoKCBxACeRKsDREDbcmdQaEz2tes",
  "key3": "icaBbUWYxkHcysZJ5y1LUZfPjoeeU1txSe2k4zEHTvRpa5Q8Wtrfx9YZL4XAhj8St5ihHvRwF6eBnmMquA3t3ge",
  "key4": "29RqUSTY8NU3BtFYGFFYfpJ7BWEKjDEUa2xnJXPpA3JCEKgHdXb2Kdp192dVXGvZnXpbm86TWQF27zbd2W1KD771",
  "key5": "2hTrn6e3DweaVsAxuHHXEH13tBuNZMj9z6JS8sCWJRdBSEMYwFXp1KTbzVeiS3RX28Vf5aa4XSXTkDW4Emk1h1Xb",
  "key6": "62j3C6Lh1xvEZmNV9HF3j6rpn9xD4yX2JGJq8M8CTn7d39B3Lo76X2mrYwTW5u5wDFV3vpt3MqVK9x5C3iGNohwV",
  "key7": "2pBkcZVesvpkK7hsCBFpeKmvEWtcxGxWTEdJXrrBNtnfwhBbFVBpM2p9FLDLwJwBrFMuMeJXPcWckmv9VPa5VL4y",
  "key8": "2FZBrXAYzPw6S94BvjPpsdugmEoE1aTLcnJfegYuRrqvZs8rxjxiDedLWRyohSc6XekfjgXiYuVXdHKGe42azjH",
  "key9": "5GSva3DoSk9gswKYmwso5SPZLKWuL9weFrhdstSNwb4LLA8U2J7ZLpaCPBe36awGnu2ei9CKzaAdeormgP49Gqbm",
  "key10": "63BKTxc7QQPpfBR1Jo6oK6zuigEFf5jsHdDxkLHXwHkxMdS5DnrVkH1sEFHVJEww3FsRaAc6tgFXAsNAuxpC391r",
  "key11": "128Rcwy3AojfQwLnRT5AdbfGfyJXFq63UpYaZjJDEuWUXEHTiz33Sx5ax1wNoq98hjBaqHGgEyMvy7fXGVF7kgQX",
  "key12": "62V7PB811WzLLRwC4ShGAhrFA3aXDAFbX1ghoDBLhGhyKket94kRvNhftK2BBuGzicR9wJTcvk9VprPbAmcaJP38",
  "key13": "5XaYn8Jj5XS9iQs1vyMDHCTUog3z22aJ4E4UafhpPd3G6zq5H6uKCv8UghTPwTByc9GtXGMtZLmdiAdtAT9YDYQ1",
  "key14": "4DmvWGnwwEMdXT1Z5Q19JxMttYut6LtJ9HuXAoSfrZZ38WAMRQgU9XswCna15wYmZchAmgXDyfWienmBSByHsW3A",
  "key15": "4f2KGWcAj37K2i551Nzd4bYbDKW3wDANJVXoVTr7m7qx1hvprzc6wiSaoPjnSfgfvGR3nQ33n4qbrQTaN2vNueS1",
  "key16": "5BTnWzDspQ8KtN4pTeNmEuQwce38jzyLsDpMGxZjjmdqrWvyJXA8kAoyJ8hZ1zNb4DZCdA2Hq5oDEuHKnhn8JrFt",
  "key17": "5v7QgSA8gqurHr5uSQa38TjteqtbCQubpBMhJkWvwB6SxiZTCeDPU1ZB2xvuwLoRUWNh3q84ZRFQ3NAY3FpMfY6f",
  "key18": "VkrxoMQkzuqvSKGgnm979BSwxpZUUQYYXZprHohKaUm9SuqRLUhTWksLkvtabcdJau8gbvxVMG5fgnvWFnpV13n",
  "key19": "2eiE1tpK7jqe4eWpwXoTDBrKWsMHbA9yFgUao6cDwPqPHVAxkjNRdzYsVZ3RpK1QEjwr964H15FJGZd6xr9bbX8H",
  "key20": "23GxgbVRCkhnMoPbnFgyjXck8z6REktDfeGEmombEnREeuK3RgnbPm3HGWaM4B64jEFDTd7Nd5Xf3SY3ZPWdeLPy",
  "key21": "Ae5MoK8uTNVCnxhu4HC6Tg2qiYzq63wkg4TrQNR8bvd7LqMuqM7CmvtMdrZhhGVfGsAndQmjKnVpSNsn14BHN7m",
  "key22": "4LXzEQAduRogBqM6nLCsCRS1xpXTr8nMZ3dUcecKN7ses8AF96WC8V2K4n9t3tUPoANy8wdAehMTM1xyj8uVnKX7",
  "key23": "RFT7VWTmzKA47RRXUe6vzme7n1UY3GwmMLLd9v2xQAx19PRLX7KUhVh6cVTxmvaZuDzudXdLav6n6BP8ukXNBDF",
  "key24": "41eU63YHMmgWQaHUmfTt1M54xmQWsfrEvWJABNYRyK8UVwfGkG5x1MHPQQwtdrVRjCq6ynkH2jswzAVRU8UGdHQ",
  "key25": "PytCYUf3seB2N34jh4dQP5UgowPMLGAYhKxUfU695TsCb8NtauGerJV5eoDqHRwvf4zn6PAyurVbugJ6P1Ja8qE",
  "key26": "51Dzkv3MBJZbHhoQQ6nBGwsP4hRB16S15Z1xiveXc2KzjHQnARajooapUrsz9xzFdYXwRjGhrVbeBnPpQrLtokSq",
  "key27": "26yURs5XfqikxHqXGzz8xLiY4iwnneeGzJCJEidrgWtSQRv4pwxnVokcanJVrcfw1yjgfsG6v4GmntosebfiyW3C",
  "key28": "2G9dLrkcP2soLX3GzpPg8BNbzn3ZoKA1zvbbyQTLg9GbTMtnXTnpAH6NJBDXuwBNNmpiDTtCTfyv6XUC7P8X4dCz",
  "key29": "3VqjsRq4nxKXeeqUjo4pLi1jfo5mUSeQzoVACiWw4BAHxCcdUqXFgoXymJdcfBth7WzYoqfMYTNBdNJi6mhxM577",
  "key30": "4WCq7quF9Nu6dELG18rYT9HyCKCZU8Gtvp5gsneTKVq8nFMMMi99nLZJJGj41aXrie4imp4RRc3H9Y66qvTyaELA",
  "key31": "4sQtkuojvBQZZkqhCT19zP4G5nu5JohartDQwigd5tnptMYMerKw6GsakEfqDa4zrpcViCKHvVhfQVyCeZBHn7YD",
  "key32": "5FWvJNxK8TUwRL7aEhpJFZy9yHKEYTVWK56ZBv7Y3k7FjWzndfn3rJRafArVbmTWN3jNypepEDVX4XUchNRs1Mj8",
  "key33": "5XpkMeaqusYsDPMeMqijoDPVHXt9WdsQxkYwzndfh8p24cdRY4Kjf8euNYv7tF9cWVWwQKR1St3BNfsXVbiyCsec",
  "key34": "5h6pJ2uyTqN37pTPang7eeKHHJxvt9coVwXWgjcQBWkMn5dCEzaLTdeiuPKSreEVqAFxngDvTVbycGN85FGGj7c2",
  "key35": "4mD9GpGT4RbVFbXQR2Cy58BJrNkL3npgPLWZUF991kpr9CSoB7TFqbW3dVpczcqQ6KkB7teryCLrhzEBoYG3zpiH",
  "key36": "61uduRLa7wjzVrbXf81JxZ48jrUh7gDXADnKXhFeGNNiM1Zj23bc1XTJQYDbVk14pX1hhyb9u5fiYugFMB4hiTE",
  "key37": "3iJpWigYZWvufFWBMUGKZvPrUtaxQE7vRkERyHcWuPYfR1vDZDyYEmk39UqCLFKB7RULrhFDizAnqTgFnG6BJYZv",
  "key38": "3rMXoj6q62m91xk3Vc4mWhoYQQ9avmy4cDu5J7t84D89gmtYSmqhP8v9vk9UYjVPZjrHAzENth8dh98WerxGpvDe",
  "key39": "3aZ6ERTfJQRGm3JhmdXXS9HpXqpgMfkynEF9nATKXtNFwiTG1ZmdGaP8XRFHqNYf9yvtMDAKgTebi825VUZnExas",
  "key40": "4Sqfwnhm2V27iTA5RBiaG7jjyBwwNXsigortB7NY6CPZx9jyG812eDhkziqY3Gkm3RdcjLPRnmYSeEn4fYikH34j",
  "key41": "4B5h1HZks3pAEoVRKASHFk7NQx1QPkZX5DMRKZDWLXHCwhbvFKCjcCDn5YpnyMMe2YXpJuBBZowkc4rqgGTSkaN9",
  "key42": "43cWkFGqA6vw4ER4b1eabhcAuGhmvVnXQ44h3XcappkSWLM9wj77PzQKobTMsH3ojTaqcczpv7Y6Qynt8rrRqh5U",
  "key43": "uQLfvvGVPQd2sABBJ5uK7jHpfjeRp8Ag8oWCxt3vNdYgRBNUpNaLDt1B8Uh1WU1JC1mGYY31P3SR7zAAJAhBauN",
  "key44": "5XQ18JBsa4GUy88QvAUBKZsdo6coAacxutnC9isVqkK1LmPbuxB2gyBJVfJtxgMchELPpPVeWYUdeBGp9DtfBXQd",
  "key45": "243Pu4hj653PrTsipeknyTruWQx4tWYM186b43hSfAejtSJyN45b8dsTBVthrb7Q8pANxpCfomah7FTzbu7i6KmX",
  "key46": "56pRS5NxUvdtctFbDuLbrWdfGwV47LvkHXZDJ62QyjyYhwqvXR1MMBx69dBPPhHfJvEgMQzDRgNtYwMHpNaDyeH1",
  "key47": "jppracASZ2acm31QTeMXNrqzSVcii27KJJPnxStKZDazcR22H1vY5CnG5s5zPeHsMZ2ugEeVjReNZ7Y1euDUGJe",
  "key48": "2ccGHS8kMZm2csodUkcYf3NJxZuCfPecWFM3fgvg3bNQHRhjd5prbQ1t3UbzWWtKoU8iZytGy8us3rwCPDh1zAK7",
  "key49": "46q39NQuXYYSMPRxQFEP5vnjHcyCfo8e12d3JQq1XPWico6UfWCjyrGqVzb4aXoLVCrTTaRBN8jZpoeRRgDH8bHc"
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
