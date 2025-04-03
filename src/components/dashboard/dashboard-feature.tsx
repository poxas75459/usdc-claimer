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
    "QTyb7xLjUGeFc6RXFpxmriuFLpkKGMipFCdDYGRruPMuuJRm99hZLoyTaQvx3BFDc1AFCMKpnFEzSvjjvztj5yz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "egEfV5fwkuXFb6htVCG9HD6rU5A7aJNysS2HqxpYtjuHj8pruuJQfkfoEnfSvsVxEpEgvN3XkArdxF4YY58evpf",
  "key1": "3DJWvUGKoTzThttKhQdC5eXoUyykJverkcYHhYWckD7jAgfGSf22pEPJ1wirHRwYyKvsXJF1CAKtcFTNhFR3WNXt",
  "key2": "53vZHAvW8sAGfkrg2yeswdHRNynruoqoTHkz7W3NrKHmwuowVF9vCTRj8fPDXshPzZQAWijLVsXriyBPzM6Uw8uY",
  "key3": "qmZ61mifrfnBmnUT6pBEVTWrG2uaexk9GhVACgKu9rVNQGXGTDYaPREJ6hHSdWRhUisFsqYmr3BFBPvz9CzrV9J",
  "key4": "a8nRewog35FdqedGK4HVKnZ5a4CgMvpK5556Kw3v5vfkc13r3iub9GsJP3P1gWctHjmZJwUm9mFn6Tw97fmp184",
  "key5": "2HqNnYsbVBpGapaahd2LG5cpEEtBdW2DviigFTpXa1LBsNXUW81vnJhGJ1A4Lr17SFbf4i4kViwkCCcSkGBPiG94",
  "key6": "2oWJVZ3hR5LNwYttGEDmhVhW7iEppC6wrPzRq9qwU1jDHMQjHBUGfkaaCTiozoZj1kNXbQpnHkyhsHWBQEo5LwrX",
  "key7": "3gyEbMS492NcGMKPrRcLUcPsip8xDD4VZ4M9pGrGMBLxSjmcfCyTDXd4DQVmEZQbS1jMF16EFDDqr5hVoouwaLAF",
  "key8": "dRfJPajHJa6XpT9eJ7biJbMk1qTqWh4u1AFNhSHp6XBxsD8EEh7wX6B7HxrLVKSMizgtSdjpoAnpWj87S6rJv2S",
  "key9": "5SKky7qreqFozWann2cYW6Yj9aEKFTQH8PwNFoJoeR3NyxPywaNLdE8GQstpDG4Vop5G3yDiUMKmAGX8yEmnFKxH",
  "key10": "4jiosiJ6ajizMe727k6sLyZTeuFHmgdQdZiRBZ9wcXS3fr1jD8v1szWWHQiKMTrZWKxZQ6xYhhUJZa17xyazhJww",
  "key11": "3LjD4xffEvUvvF35isEJx8qpXdj7R2Y6oif4pHL5yeAFdMBnF1xSZS2Nnqd4nXEsuopd3VTawpCT8Hb4ECsNNUBN",
  "key12": "2QmW7JxRNDEq7C1AsdvcoSuVjF7q6XFyXH1V8iJdkLYhzMJiZynKQ6g9khxQLMzExGVHtbeSnLbmh4SbZBhSHLWG",
  "key13": "63CN9225s2v9W4YP9DFWj1xuFjbf3Lb9g3Rrsb26sSwWSFTTHycBMen4psj547bL9ttEJzovo5K5U7tBk8qjTid8",
  "key14": "3e89EdJwAkLY67byDKuv8ugXGUP4yW9YxNznr4YSSGswKVjVA2CGrdU8pAmPtWDgNzGzduwT8hHaLGr4CJ3P6AR5",
  "key15": "2LUTk1YrFtT2npkDbu9U5ANTE6QWxuo13mH7aEmbsHhHEZdNBLPPhwMYPW3Zr9gYJHhpmEoBkvb3mjKF7WerG4Y9",
  "key16": "1Eoencb9sr1nBwXxXeNwpbyjmTvV2wLU6xe1uxHCRp1r3p3yJ1t59mBtZnFvQAKfSizfi6jTNPqisTVQSvdBeUm",
  "key17": "4nrUZbuQ9ryWVJ675eNwhehYeTzeNBja92QrpDvNGzJ3xtDKfnsA5ay5QHx9GT218xXbrBXt2XxjpRj8ZmCekpPK",
  "key18": "2htui34Ms2LUWdqYTQsGzNxKaQULdTSS9M14qH7qy8phQnHLh3drrb5RahFqq1cEUU2chukjYVuUxppA33YWURi3",
  "key19": "2yZYLtGrYEv34z3haapx6GQxQtpnCWECEo4EXfYQoc39mbPJpR5eze5RAWmm3z43MRaEcTU4W36ZXkYQc63NkEuH",
  "key20": "4rTNakWPnna8CACDuMtESiz5q5k4f9eFqhaXCf4SSEGpNMooYaFcCqutdFWWiw2DSyKq8yJEnfCaE6gtWFq94UNu",
  "key21": "3q626ndbbefSBE45xRNWCWvrfFEWKiwsJbJVaKTnHwxubvPkhiXdpaH2Z3htjgW2xjkVxiGbhTaWjQgDKe4ncwTE",
  "key22": "4W4k2tzQrnePMCj1P7HuhDyTkvYMoiB5Ns2RTuCwr5SQsb527iifUGpm62zrjhmUN1oa2kYsMhSbTBanBvoHUYxw",
  "key23": "3sCUNRCXVQraB8CQJBPYcZ3bLaC7MUt9yXB9K9ZAAwJMQ57APpMxGm6J65PwvsN2GDZ6kpWyQ1M8uqB12eDevqgE",
  "key24": "5nhKsVyYJmwDJmDsguDtYqKLdP2aGRhf51oMcZBYtS52NFjQmScG2FC1W3JEyYbwDpqDfgnKdkb7bb4pqP6gR8mf",
  "key25": "5n2VH7BHfd2LZ4MCs8wkTXnGwb7qMAeqPKPQgk4cjXRtTmwqSw6DpewhBt9CtGsbcNVQHPBUz8uajc5NWUaPjYqJ",
  "key26": "5o7beMcwCSi7XL3ie7h5s5BCEGLfjsnsXjz3dMx2mHqb1W5rBLZ1bSEJnbmMX5e5sG3YtiZmAFVuecC4kkgmkeCB",
  "key27": "mwACMFeetXRjBi3RmiWFJaWUisUtdJRRAd4eQhZpMt641qmuPwx5wis48cE7JcKZGKfJNRpCQbafNoLd5JiDVw5",
  "key28": "39xgz4rVkvpNCBG5FmnS8AkKHS5zoyfnMuvASj9edRFwzDRiAFxxePE4ozBvMzUmXhjZ9ikmSgWqTypMKJstEum8",
  "key29": "3ccPkJiuHQaZuFy4Rk8KdLkTkTeSVqNFzYySrwUfVpWFCRSLftfVGwXv6S42jKpXQPfFxhvoqwvsogNURjVUUakv",
  "key30": "4FEfpYs3XuxsRBhuUGkpYTPakFALUTY4K3uCwLVFDYwtsUqkiDs5CQTTfbYwW7GHLAM7kP8aLjvPQY4azh3shGg7",
  "key31": "5uWSJEdgKx2ken13TKELfwWYP4JSKCDirZj9LGDubbmQrx173i8nHhWDGQp7ZykfwNEKggevS7AZVJsaiHikLuvH",
  "key32": "4t3x6sigMQqWJk2wVjWSa7LX7znEHZDWNnzakgk3RN7wXj3wHZrSr8pNR2ihAPbLKcypdv4tEurUs6dEUhEfNKRN",
  "key33": "3JrQNSArPMCHc75TwzpgCfsw6Jmvr8JrtxZvcFe5FqDLyram5kG2eHix8NDbSErXZoxgn4yEUUxWhZLcsPRvZhkK",
  "key34": "5PPq27j9i1AqVVGw2xXMLH4cWPiBNjRk4Q5sajq9qGReknQpCzdvAcgcSGwsCBcgnd6v6V51UmoEyLKYv1EKWUig",
  "key35": "4EisaQ96rHodwe2JZTsTBckjHs2UJKncNcEMFZNgGPmM4Y98oPXgrPpP2a3uDGnhqWsGF88qwd2gRAqzKwwhCDy2"
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
