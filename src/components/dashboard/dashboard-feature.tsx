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
    "65HxD5iCY128PGKa52L41ccZ3rgdACTUTbhvd3naDPy5bxJ8w5RNWJQ64abeUqnuSodEvRamfmyfGfSExdui7xxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sJrXzpBMmp2Nr6f1t9XFtW63cZiQKvvtcnRZAfTnHUnVtkWHtCcFEpyAQFCoNLBv7eKxJoEegjR2GKPB5CqPTeS",
  "key1": "3gndU5MTt1yyQTb6fVVGvkN91gegjxaK2gHK4SGH7okp6s1Jim9a2KJVCsTFUBjvMurXXwZpNw5WEcZ9PyeYCW9R",
  "key2": "4m7PkiwXP8A4hgxpY2xw7iiQQz96iedPvBucwzaNXAi5PZmCC59z42zcJy5ukDfUvU4ZLsNTgNwBe1EBfiqtzA1p",
  "key3": "4K38yDqpm18SuGvVooHPvZx6tr15TcRc4AjYaCjeY3ZWL82wPyZvLrAN5TVAf4BWHnWufwf6hhezAo2cxC2FwxhR",
  "key4": "4pet8CxTDctEHpY7RchvUVLSHmbdVazzfNp9HzBEFWhUc5SDUEJ24mwKAsbzb1NDgmBMfpTTD4iHE11QKQNfwHqz",
  "key5": "51ga2aBj3HXeEwWcuQyfDRRLRUWmxXqKnj2arrYT5EsmVEMuimo9aoYoDpeJaLUFtFRW93wvsGLxTyDkDfrkHkMC",
  "key6": "63V3Yj393ztk69dfeStYidYGzX3697vEEGuK3mmLextwsSRSVE5tqnpSKYcCGD3ZFk6auWeyoeEgpjTteabNre1x",
  "key7": "4fG5nBHLH7tRL3qvyoZuskv8i2QPWiv44cYjcL7tTcYGQgQ83bQ4YEiZXCyGj2kpyLi1KYY8YTKSXzeBKouyVCL5",
  "key8": "52YCU8QwAyWtRV7XH5Hi81Uo9L1iwCov2ZLLXuZSKpJ31oeHv6SwtUcisDakwzpuxPXCbXEp2WJytbg4nkwDCobM",
  "key9": "44XtsWCgW46yynEhXbq23zv6W3xiD4mXzNqvQD1e2Tfex7NvHBfibip1J3gaDwDYrrMtfEG3yQcDCusK8cTvBhE6",
  "key10": "Sd4mTj4FvdPkZRB7DRDoezDKtozXMnGUiPkoKXaxzeY5uqVEoSmnDD6EyZrjGy5Vdx43X2koUTpknvMvwJUToX7",
  "key11": "3AJ2cfCpAp1dt19ic58ZJTRaFkbNwUQSGYYK3JUBqDao4ryeMXAGxt1T91vqZRzUmrsEUdck9weLnaV59mdCKfB9",
  "key12": "5V38eSVFmqcATcrz8T3mNVn5UhEGbuXPsDKAagkzrMHoNwzihRj7DgUrMpBuTcq6YmmWKYMfAEVGHniUGaBUrncP",
  "key13": "4onSvWZJ7iwN9A1Mi2TsSkX6ZqAQeoa64D9KhoTrizM8BvVAVGnwEMviiLnEJuFKdESCN6S6J3pVXaMxugdLayuc",
  "key14": "2m3kReiTz25hM3uyCDVrswZQwEzpXyUhuUjHYZhSLhBdgxTXDjJp3QKz7qEMmnSutwLbLjhSucUQnYAPbfpixVhT",
  "key15": "4xPmqEXqosHY4eAsFygmLJLuEcJBDzUcuMTPdQrsYe8CnMmGK1TobfHR9FmhYKGep88koQjoHd2pCKeN4D3NugWs",
  "key16": "3ozXAfX4zzmukf3TwH3d3KupP7eACRU5Npj5bUXrWZ4n1s4jqc42N21a4LVGCiKrx4oFFAkrTaVhvEDiCmpNSh3N",
  "key17": "3Do6GzLpyQQGRYKXkC3JPTTbVvfM7aFLsFC9Tgp3fJUx8gN2TFKkr3mobZJ3MoA7uhacc1qyt7S2JUVncyCg35FN",
  "key18": "4JHGcM6hf8Sksvjj66GNaGY7kv32hMbtVK9Mn64r2dHPYgu5pyk17noUkZifBYiPNatYL1pynhnHivxcWPUkCGby",
  "key19": "1UxNhHQ5Jn5xJ15mEDWPBFHB5aaarxTBoFA7AzRiQMhmP4qjsft2SipHUkfYowquXtNBv1GCVcNLsQRTwKJbSuF",
  "key20": "3NUeniqt5nR5A5tA5BbGrL6fokateYmFpr8HiAuzeGskxgKj2qqpj5ckA5bJ4aUZTP68iMWcMCfLxXEDHqAGjTse",
  "key21": "3hW5vuoqNGxbSmnAE717GgKFK5zbsirNWuKfbeY6dXD9vCkWmTJfmXKdaAEgvxFQgCNhntv1mteTGXDSchHAPxES",
  "key22": "5PCB6moKi9mL5gB1hJroAPqosd3j258rdq7ENz6QKcnoAM8gjSaMuFNDKAb4Rox71MVG1gB2enWcQWfxJQBaAiMQ",
  "key23": "2bvgJTJJor4PTqojB4gDu8msNU85in2DB4376ERTKdBJE6Y7LkCneu34HtgTPQ7cL8VBVaTAEbe3dcYDzmVvj3r5",
  "key24": "32zH3BvNgabRBfFpMvSywmK4zqnrmsos5gE8hNhW8xw6ncrKT9Gy78KGp5wdhtVrtf6aXLra1DB2PvyVyu3R1mod",
  "key25": "iRsnPUi9cUt2YbTY9aDC2Sj1oAvJgjx1ue11zy7i2p1WCHNw4GNaR6dwtUWQzsYaYC7bT7bESimwv7HTrwGtikv",
  "key26": "2kPaGCj6UznPHH8CPzQ1BXXy9NVsSaqbRuhavUxC2ctMTMYQ6pBUs9QHxHgNJ16oinHygk419rKAJoe2s4dHbc46",
  "key27": "GaEotHEBFeeWU1BqVpYmjR5Kh9xF4WMk3D2AJziuoZj5FHd1bTDWKAk73wJR7HX9Et2hC8REuyrqUyzMsQkSoQs",
  "key28": "2eT4dJS5LXErPc7KzSa5VascKGtBwU2i1oyArC7A6UQ5YsMQQSHbQtEQCocEyGckBeGxLKGEfkMbmfZtoq3fMLud",
  "key29": "5VVdyNkA3Ga9r943dDnagdCzuPLxfhNn9L4ckj79afWKqv29nCXT8RVqJ6eLqv9CGMkZMWesaoJKQaffpxCsyghn",
  "key30": "c5EvmWjCUYiLcJjBFMiBaRiJmbppHuuSXudBBzixfwxyCoT4zJN6ANAvQaN5eGY5vBLcGAg18MxParEniieUCKS",
  "key31": "64M5nrpn9SeTMnJEomjmDyj2833MHBkXemEWX33EAhipUTarWrC8aPdCP4rQ2kLMVkewFJNmgL568X7SBnh2wuxF",
  "key32": "4e5TXpcQDBQmYWeMvSJE1JupstxsVWqJUCB6P8ULxLzAC4MdmQJLv7Ftr321qFNXd5C64jfPnJDZXnSLrsUjLxMU",
  "key33": "kzHawmv5xGM4qkMYf6caiFTZsmyxT3wjSV8BgtSXFC3VEUTpkv7PtDBMhL6gjD7ftNSi9hyLiKw9eTx3uRqdPVY",
  "key34": "5kxLDJ4PVG8EKyYCcAYobW8fZhoXNj2C194uSxR6fmz4926kAr82fp9eLRUzNh4qsyNjrcJEsZ6WFCmAoGaZ1vce",
  "key35": "4qge8ZZMdH7EngxvZkt1aKtQafAHSEjeW9XDsRUwSRte5U298M5SPHjAPGF1nrzPSqYv3cFnJw9XC4cz1TcUDkn8",
  "key36": "mxxyLqWRJvCDXh3K71CrvwGUAU9q4ei4vMuaeMJ5LJGRgnpNRyWX8EFzJ7XhTgtjbKWUjch1EnhNBmCATBtYKeK",
  "key37": "385s6MgSpiF8i4ME11Tu5E2vRqMiCUcsA9UciZMpjUDs7y5iM2hQ8arpfca3eFxes68WdssiCFcXL6V2L5Dho4be",
  "key38": "5fi8wwJE4P2VLJ4y97PYUyQYWkWodAxKevn17yqzRgEay89xJjRJh7tf5RGkX6Wvc97k3zsVRduYFs2DuUxxZQwH",
  "key39": "4xTu5dTLw6zGRjMoFWZxaEiQ2GdgWVvqLKH9VHerpd8i5Q6TAAY7tkZLzE75xNzKuZ1KGFSDFMuKevBEgPkfdUns",
  "key40": "2ggjqcTZv6nC3vtMNAHMQyGyhZHke1iXMGvkd2xyaEYRHLvWQ8u8YLG9E9YEynPCNppB2hHcEG1JiytRVB2UcHov",
  "key41": "25oivuN7jn2dfWqu28YfHbzUHukngadp13XWqKEPdesq9utD6MBFfRWfS72Qnr5zTmLZU7gowj1vwskEi4JcqUWj",
  "key42": "45vbncvS8mxXkV9ncsAEZRWDLGhJPBJgwxyi8ZG51uiPVaxexfUDoWHyUhc637qHaXobQXVD6AfVv6xQXM2Dbfjw",
  "key43": "55zH9GxTh4qTJkkQThtXgWKNB8daaVDF9LJwKvzzR9zV6JBDYXxMUpD98fRTTj7hsHvNoYaRZCmyLFkRgAH5Wa5Q",
  "key44": "5y6CrxAcJtRXB8HZHM5XNVqpUrjDnMorLSc2HRXEj6CAfKtaBsmfdbVZbALaLv1sU6QBcpN33uXf9fw7x4JFaNtK"
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
