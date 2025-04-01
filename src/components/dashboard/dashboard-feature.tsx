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
    "4BTnvvrqnaVA9KtJ83J7RX2dpajqosMwASyyyykiZdqQ4BtnWokGMvZDwDAWfAM4cTQgGHdgwYqe9nXdez2ryjsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CoWUCHXQRwCNtv8dcTodN6HS2rganQ87LfgFk56jswnYbeniC3oaaMbbMLjQusLP6Lh3Ws2SKwNfFE7MuQKSBij",
  "key1": "4KaEkNhX31kifdkzV55o6mKfFEbXEZHgn2w8bUHQXubvWQRSJ7EkpxykwJmtFbE17tS892KjEpky99JwrKG1Q6eJ",
  "key2": "2BoVYV5dMSbdbwjWDGLUTb9pryDUBpTgP873Mu4ENG7NC399ZHum1QebXaKWVmvkjuitvrvxAkX2Do4cre1c8i4i",
  "key3": "3dS1GP5DJkZXTSYrkEWPk7B7KwLSpMBHM4KK4CH9Z3Kkk1Mzd45X3mPVAbHs5RHqhAAgyzBE3e5KVXQ3uEiC8fZZ",
  "key4": "51BpXe5hmGY5ijjTqzTu4BPwdYkroC4w5NQRJBcasj2C7P4RCmsfJaCYNJMADtnw3kAv7QUUGRLrywDqc8ZLoFhJ",
  "key5": "4YbPNRii1jBmFE5EmEMMbnGVfN3xNtnPPRV9UkSC5PgTWYoHdvTNzrMPMhVaAvQ5Gajk7CJ2ry123G4gSvzSQq5E",
  "key6": "vuKkmz8u9z9nRiZqksieJHGNEV9K3YWt8LQenvsUUNu9rcK6HJXoATrfckYTPW3WNcKjE9Wf4dbE25PgxWa1PSG",
  "key7": "5VcEYtTb7P2vWdg5dNPYYr1BtKBTvmm8KBYzchaf4EjeL4LbRFTGvmYZvySSUVwLrGbvCKYF5ZMnvaFBJVczqnYK",
  "key8": "3qVLyaZYi9pCKJVkyv11SqR9HTdxJ5AaSk5wvhaUmhAGi3RVAWAm1qRGzh68nRhjWfwgfdwc4dLVsnQJvF7Uf4nh",
  "key9": "4T4UuCpVsk5kAZezWrDGqxMNG1fEYuTAmbPbaTBWAjXdDQ8LzLVhVwn624nZmhEbsi95PPyKzBqCuErMc1xAd9EY",
  "key10": "2FJrdLWELXWSuvvy6rStSYLCN7RgHBbjKN8qmQWaMmAE1tpjZBq9QTD1jfNbQkZRrLP45MZG39MFru3sfZVJx8xp",
  "key11": "4RnALH64a7hHzJfyt1ATDfMgiD24WpVjcwEtpkCLrkJbLJvG1pf81BCb7diQbmojSd5sc5xcMkuxruYpka5ywMz5",
  "key12": "3TB5uQPxuWVJ8DoyMg36CQ32brCBtrTYqzvun7pcwqPzdxBftkfuszhTRmMQ7kdD8CGMbsgiNWyg8ArFL585CYXU",
  "key13": "FLGJsKPD4WDiN2hmgD8K8bNsMFd2tgcPDYPvBTKXG48ART2T4kxWf4h7jXMr6SA5smbTN41K3YMDakLsrUzT2KW",
  "key14": "2fGQRTn9Dfm1KMJPNEEtc6pd5JREHCQjfaZPwjHoYP4K5YMjDvNmbWx1A5jNLbeBuRwVA3ULRSJdUGbbCaEHgTCt",
  "key15": "vvMRWEBWuYNrXv8wVSNS7iv6d4uSwdvAs8u9CMViNwunRZDot4FMfcn4uL86wUPYzxDZUVstfufzohoiHJos9uy",
  "key16": "26uZvFTzdAyovEyvcWwxy9zxxbnqJYb52DaiC9ZwRQY2R5q4r1xtRZAiTpzQ5iq41ttSFs7uExGbvB78SkqNK4H7",
  "key17": "4GqYtjigfZZTQxy3wL4HfepStsikdP2XueQNcR7rPRLAgC4gnWeBRAM284rPzfR6Mf1sHpFFzsSmw4eiCj7FEdqW",
  "key18": "5mPej1goPHD8XZgyX2X2RFFKXxfA6i8GnQoXF5UDGNGD26H5GYZ8BBjusCVUpGHP5zhVTbZMCauVdfs9bc56MrSn",
  "key19": "61p987mXFN96jpjKP812zrn7rsyNixeVVNgnLb2wTrFkF7Mk1FpS4WFi9CUyAwagxEc6Rximd8moQpZrYZwS82zV",
  "key20": "3DYkzqCeyMQJZaUhaQWHH8LwbRyzaQKsFEr2pmn9joB4Hh9prku7nuvhqktR1yQX6fWyhtCmFFXuep7ErzN1BoZ8",
  "key21": "64Mm6kFQxdqdizR3MkF8FVyXDZhaRrji8cT1Mx54guBBDxfLbzk9QT1c9LbnxVuiki747p3YVBpfaq5EwvByx6wg",
  "key22": "rFeiGNU5Cc6DTmVPmLUTiPELJkTNgxKGecy6rrc6MSMrfTyBYDrucXALvrjTW7S4kaucE6W3txGpDm41rZpMmWw",
  "key23": "3L5NEW13RnXTPKVPkmy7o3nVvnsyf3MTgVf3H5PAhww7zzbRZjEvHzJYwpXioYr1ZUwkfgyKJDyQNVXjipJ6Keyg",
  "key24": "4QPSYWdytJKKKGvDyr6zWtRP6gdce2XdWWAyM6eXvG73SjeKcnKrmGSaWH1DKpi3UmABM2Eb7FPQtR5ej7M6iZbC",
  "key25": "57HLyDBfDy3bXNmnfuJD7MZk6eN4Wbj7PAe8r5UshUW9A6nyuTyvJ3Qi4UgqcCfBVXkwSL1NdkNTY7ikRDWEUQSV",
  "key26": "5dTeBK7QWcHbiBnaduqSY9vEY3PybnXRGFNzy2nE2oi8NY9gaBLeKTfr3f8Rkix2GNS64HXM1WSYWT2Aoaz98tS3",
  "key27": "5nGNJAqfbp5DVKYsrWRaGbPeR6WUsbLeHTYvRwDM1bPphqBxrM2pC8CZsp4VzzYWM9XmYrcgHzJx2RZi8iwzWNBm",
  "key28": "5xvQVxfF42wBjFyTVxhthzH6f5owFa56MGFcBNv98654eysLeVEiQog9tzpbRAiKNzHMmMKHWLVsyryDZ9qYXwmx",
  "key29": "shBq7mgwuAMQCv16nnrEDuCUe3J8SQKGKMCG82pV7GCCHwAUzbR4RCUxmvs46QESQdcgj1yKAqYf2VGnDQ3RboD",
  "key30": "3uLQLWRMz8rFJYhQbHPYEj9zbPYsdigsL2rAY7dFMuJm8wvcdEJE1giia8WGBaY5sYh3wyVZVHw2eoWW7cKwrFnh",
  "key31": "4HpofePFgY4U5BBnLWX3Ss99cspGGB87AZL32x1SdCxibptN94YLNttyVv8q2JrXekGF6sJQiWXVX7XunypUVcxZ",
  "key32": "55b28DNmQAMvfCzQLsrRNgrqoLfFKVrT8sydq3UKELrGvjyDCV1JzwzN2XHdt63H4FRUVTPRNnRGP3eftYABVWmd",
  "key33": "3HkfJ2iKohTjo9C3oUaZamhJm25d8QEM3EZLV8pnGyLQ81zgX2BWaCCMBdhPfwcYvYFn7mE8VhvQZm3W6PrnvgGh",
  "key34": "3BRnuD8vsuM8y9K9fMjeyiN2UJwJSKC12iSc3YNozqrNF7bFoKfnyaJg1zMJei2yXLMD1ZwaHKWnvz8EBd6B1FBC",
  "key35": "TUQNmMUCdu7uyfQAPLtFARFkt81gdjYVkn7uPyHq2q2dJ3hsYNz8Ch3CxuB3bnxNrGgGmv2VzGg6Po93ChwVS8S",
  "key36": "3KttavcKH7URBGwTojjD12psY4AsaUsCEtqYzp5CY9Cc7HPGy2CdutXZDDu23RDQr82oq5X4JwiDHwyVc8WMCZex"
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
