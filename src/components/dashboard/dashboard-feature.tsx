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
    "9dugi7mQarybwEi5Pse9M5kvaBJKTrRFDsoPxNG4e77ewhNTFgk49tmVnky8UKV9hfbtRM4c3qtNAdmknxgaXzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ewnczuNxCYUZg5hM4jnWGnY3n17xkaPCpVs88zW2op51xSSNiHVeEJqdp3tpzWA1RnHq6Mo22UxyQRsjwA1HdX4",
  "key1": "4dHMG1gNryx3RaNWKFGWAL3XDnBjYc1r3wcaaYnpNC4Ta1G1jhZUcx9BgNBZmvjxG4xiF2oFHx3tuGmFEwW44F5x",
  "key2": "51XZArbknPWUa13Shyka8R9ibGGf4pbH4b4vXFVGT7DQ2iAtCRL9T4Hs9e3N5216Gqkm5p2fTiN9M7iRQymduUCJ",
  "key3": "3eMrmLexY1TNLseSswDtfnKyBHjeMUJUh2i1UkYzZX5DoVHgdnpY6R7wnDY9qPCRwLZ7iAodVFBUBjTdwdQ3zNMK",
  "key4": "4v2EtAFQ5udoVJ4hvXt92o2bkqQsBu8NKNecwjBrrxTLSfzvnxSqzGZxkXt1YkrmgS41DCvS6ujHCRPUybwe1Bia",
  "key5": "gKMDKCwnr7jix4HDCLAkBY5LTsEcKJEeoESw6Ja1aCEoHkpVP9kT85AvUhfte7Eqs51ygqrFZ1QNXhRe6hf7k5v",
  "key6": "2vDYvL6khBFcodeCjphpuw3ksTiTzHwa2KdmFiQVYKKQaZ4RAnjQjWsygs46VW47GXxGUKRqNmcmxaNy96MiHDh4",
  "key7": "4krjya96xqTvaZrAi3M94fCRPZzeo487qhZuZFyKJjRMCthZcJTBvg1WLPibV2zsjBfQMCJ28H8RRqBEV6KxDdnA",
  "key8": "3PMPfgSt6ZRbi4dNhYgV9YcMxcJZnnE7SSiJhdpWXR2cYVbmGdYeS3hji7XXk2f7Uvy1emdftDHRtdhJNktiurit",
  "key9": "b13z7UMuijfFq6nn5gRzkLBesaoRfe4vhoNfbijXrg2CvKK4ak9MPF8dVxV9oJV7qjgJppiMR7ywtbUc88HRYFj",
  "key10": "4swkEs5mybwDbJNZdLjNY4MXmM7RRYtnmiaEuYKBiVh7BHB2XeUNU5AbsdohvC9SfGkfyNerrDEugBw49GXYosQM",
  "key11": "3m1hSqLpDiKberbfgzWvu3b6vbkoK6aGDhafEKRR86DVkg18gBTEvnjqYGStUKpWyw9pdBRtRw1jGoaxdW6eMbiX",
  "key12": "659xnVpWM7vhYyTGcFjLTXo3SHBMWbvyLc3voFknaUHsSDsqSHtoet1sHXNiNP8AjJDU4tqaW9BQUjtHJ47Db8LM",
  "key13": "5CJNCXoKTXQrSSqBtFwAvQzUqKQnzBUAXDZ7bNzXLFi3hjdwq8mpDgQv278PDEPNqgnKbW1AVht17wNVp7yx2Vz2",
  "key14": "4yD725mZvaZH1Fj2p3X5gCt3raX9vuVNHEUeZg2aBompaZD2BbKXzkwPNiTbLbNJuDNRK8de3AYFYrCoby2zSpNy",
  "key15": "24cLu2ta3qcYtj6vTY1NLMAZPaKQhSEfcxKW126AZXqNyN7diCykPEfR8V7ziHtpodJ3SeBrduz55PWYNLKTRH7U",
  "key16": "2JKMKLFj3E2kuy5tbahqSikej9PD2d6GozZabVzETyjKgqpzwgMaZo9CPh67axNdtr22uoNq7G3GhprAqsXeb7FN",
  "key17": "2WbsXkipRuUy6qLM8b8QbnZSMfWfNA4ZRoZB8nG6iqcPpjW7gFD7fJq57tJb1r2qNhpEEjh7osTGAgh4NERh7vdM",
  "key18": "5D9Emscsk4PD4kM9KaAkPXhoZomHQGTbdrFk1GsackwAaMPAy8miMSdQq2h3Y11kxwmGKggSz2ijTLGhQYLcPL5U",
  "key19": "2UBt6KPz4KhhK7dJPthxjZbU6ZKnQkAPpJTEeqH39SodoHdxpo98y8o5P4mN4TuytatUeqtXpTeiqxErChodxbSB",
  "key20": "aHcshWqP3Xfr3cUmsx3e2PTcKEKNmmVAENmnw2TYkpnCfuK8QGkwDTarQG9acPeYTbDMjWYp9AUF2pGwmQpdy9M",
  "key21": "4mfWAKPtKVQUnghZ8u1FGA2oMfqZrdE7SLYYvDhLN2nv9aR4vNjAEvY6wvwxuNw7L52EUEPoKMX3vviFsp2VTJHf",
  "key22": "22epgAWMU93EEqXiZzizEyKwrAtvs3vZaGU3kNGjkCFfYwkNfq64nNEvecLyNJbdzhjYkgXYX6GLdrsdqaTvsdip",
  "key23": "3ZEN3ouuZJB96iEKbBvmBgga7BZvrgTdsfev6qyJb84vstYeRV1uktH9KLQHJ7a6hKNrTdpdoueCEdMPrFSJnKcv",
  "key24": "31ZhQaA5KYrBiJKKuQ79zBLRQPWFczFkRMJa8fox6Z13k4sgadnwChSAjMu5bbsGLP8ctNs9vhNNV6XGD333womC",
  "key25": "4bzmag929ZA9geq8c7cCdFLZXFgpq3HvjB5WxfybEdxuUBJTcDxtY12EygWdCtuFuczH5vurV9vtTkrdFLkEhUCj",
  "key26": "3DgPEtARRrKKFYZboD3CVrpXPNbcRN3AKtzygjuYvAgYqdNUB5MuRq7wzM5GAuR5og7ngNAgaQ6NGAAZ7KBZE4r8",
  "key27": "z47KeCqVqErPLddfey8HDXa9dPjTWbqGR2fngQ3AAsQiWjUC8s4GMpbuQbEGYntQfvp6BnqNs1LDpP7xK59PjDg",
  "key28": "5RsLV3N6sv7PDvHn1Yu7QXimNDyGRNWuvEqzK5DteotRGdwv9aga9v5SZF2RRkX3gMZXGaFDAukgqc85H4VwArqb",
  "key29": "2TyPZRJXi8K5bV4ECgLMSX3vpmmc18jYx7GP674JwGkmz6ShHLXGkUUWvbrNF5hRyWPWZWx4eu5opNoEK59wP8vH",
  "key30": "5FVWAUU7DWpMGNB2nc5kFZ8r4A6LUsUtB5k11Kxmf1zJy9JBMV9ovxSpmXEsBUWza9HKX5ga78eDUu6Boot89S9a",
  "key31": "eRE6ayY4RE8Ffe5YFTGoaMPch4mFCYnjvGKpnWQqmV1tkC4tkXvSDkZaaioNLLgeefVTBTc6C3HEmhJi3z7JhPr",
  "key32": "tZ7ZnamUFTJfmNgrAFSu5Q4MRE4LyLb2EzS7Ji5nogwxzUfuB2BHRJALchyKS4fVaNWjEeUM7B7sU5Lisb9iXFz",
  "key33": "3YZc9PjgB4aj59Rqj7uYAEK1NfMmRGQAuH9kbrcSYA5iWZ8KKEHJJtY7EPahVUZnhfhsoKimJfK1ozfYxmb7rKcZ",
  "key34": "4sC8Zdu2iX3X2dNEQoncoW5f715QURYGBJDrH4BYZZefyQtreAWZAeoJhWUazAPQorxxHH6zfNXR1TYkahHZg9cZ",
  "key35": "5C7WMKtXsZ8np4MYseXBMcjKqeAtmPshwegChfUeBgEhNKVCiYyQP3D1nz6jwdNv3y6sNxVWXAUgt5WhQsJawPGG",
  "key36": "5tDdZvmGzJYupBtYDR3YEceAsBGmK9CZ6CUAa5bfiZqvH14JPWx2oUdSLeVhR4yCsQjM2RCdgGFgdCew3LKL3rxG",
  "key37": "4UES6aGTRR3hqqXatZ9TwvZBa6gGRmyKr8CzEorsJXiJvFQKp1ZkPBdGbTS5pFrpvf8Sy8BVEsuS5arMgMqKFhN2",
  "key38": "3hzFBebVezYCZdp5ybJrbghKPGu9V871mRMcaXKFhC8dxJQatENGQzaygDPiHsydrXC9wFenP3nobxk2KB71ZKB2"
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
