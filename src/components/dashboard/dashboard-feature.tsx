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
    "j5MxxFvD4S2SsRjAZEzmqj9AYQVMzrs5AR6FgpgTTocS89DHtWjsEGujzrmkkHht9UDzJA3UAFkLwhKpoi54azu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fSfAPU6EFBPaYFK2nCo8ySfV3bRL7w5XaeNUHbVx6imC8Ct6fp3q6stVqNjfanUHDLmL1EczgX3jhqnDGREoRGf",
  "key1": "46ZpqjPdmoNSZRw6pgR3yoLjfQkZdq75nw6461Chrk424cEsgr2s4Gi1wv33aKgMms4ebBfsAj1aiuvJpKjs1ma4",
  "key2": "5TzXp6Nh6GSjbJdEXLchGcNxM38e3f5TQCBHFaBU7GBEHohmAq5cdZVCofCu9nAS2YDV4XqYXAfJVfp5ZEeypJ17",
  "key3": "2PR8gwy2DKFSWw8KZGY9P4LMtd43ZP9Xmej4NdEAnqo1nFX78Q2mKm7CMagDwb2y7ib3KLEGyfAcubpaTAtDjiYd",
  "key4": "XULRMQisWRGniWpxJ9ttcTdD59xCrvjm792edD1Yub4DxRfxCA9jLvFptRfW6Mcayh7SNTDgS1MkzkWFqSUpC92",
  "key5": "4BG9pXXvNTn8UL7SYCBWSTFuPDyhc2FptULr7dHQRb39dFHpFfry6rkg7kCRBtAnjuNGNuxyywcsHqTfuTprQ9J2",
  "key6": "2Nw3ZasWH7Pmz53YCa5nMYLUFyfZckzP5XTPJHGWC8mZrZM7XexZa3XSUcG9spoCw82y7hXg22fMmxFx3GTjYkxm",
  "key7": "3qe4wEpsjDEGYbtQAnYGJNKhmM28aUTfA8mtCEXpZdA4oRzuiisqZQi5aQwm3iqFUSrcBWYKMph6MKTG3phv9N8x",
  "key8": "63GjkmtQrvWgjQFKS7Ng5D3bK2jcqDJevUg154uihXpAce1mb6BY7AiGfVuzUaZMgCm5aShWcm9Fy6doL5RSVgyr",
  "key9": "PyDcWUpX6NajBXdCUZZDCRVthwxZ5XD4naoe8mbF8JV99vY5VNpG2Cd2t9Tesfvy2Da5LUEVJrWs5WY2MMBB55X",
  "key10": "5kJFScTijjPUy5UXG3RH6u8MivDn9pVeHrSBn27cSR7V8ERY1bnzmi7WuA5jHQP4D1sGtw7g6pArwnYytKaC5jLA",
  "key11": "3seUJWL3Krrz6zjA4SLr3fbm8Wxz9tKuq1gjCxwDvj9qzyRnLeCL1KzvW9jH56H6DjThhKoe7kQoBiyBFKWdSNvT",
  "key12": "3LHxuhdHK97Bi3ieEGKPUGjFaKguRWmwA1EXUqQoPLBKruHhA8r9w11rwUxmUtgCVZdBfWtHoBQSjv9k16eX1Nce",
  "key13": "5yBfFHbCE394JGNyi6eBtkDRVqaVifENA1Pn37RuerGJ2nCHmaZEY2GUXJWttL1Kc3P8VWHyxJyAFcapM8AyJGNi",
  "key14": "4U8oaoHd2rTvkHXdwZzwg3JcvaoBZu18c2FKHAEwaCa4BvcnNAP3mEwGn7k89mpijgrbiTAWxJsRVDAgpCf6kQfS",
  "key15": "2MmmCyFbxyASw2wi5ahGtWq79rXYe9gfxma4XfCrXPc4xEP6XNfyCti2VET5jqemmJp6H2rsUvBhdxeUQ3s8xGXc",
  "key16": "2fBGGVkk3BkahMwdeEyppzLxdB7zA5siEkb99Xi5nV19seLsH4VR9n22V4yD4LGciJxsN1PsXSGZsC4US5tDDRR",
  "key17": "4ivkcgqK6BCSHcTHzKNPbFaNafi2xZQRzVWm58ijAxC8yykr8fsh1kn1D5GVdXr7UdjU5JYPWJxuKPgEMDysG3NW",
  "key18": "XqwPBAvcg9SE3aNt6ah7v9zNg3jgFXadMdacwMuTpPtwAYhveSH78gaWTw23oaj8or7LWhakw1eunkaJ1tY2aKY",
  "key19": "3RiQ277k15ihrb7jWEkFwKTaQKgXGhYfinSFbk5Rg6MtAcWW9a5WdLRiQQ7L93LAh362F1XSqJAhpsDPKSJufZTg",
  "key20": "64VqcF2AnEXfPN6cYJB3wocrMo2ResCDGTGQCK3MFhoFV92xNnUeqPJ8nBw3Hre4LoBMqvp2vaTMwUCRGPSLX4tS",
  "key21": "5scb7YqSEEmFqV1bYdQiiQXWvCh6jBaoVTDRQhiDbKSgy6oyKBAFWVCMWBpKuznQmjmS4PvHWGxviYR3L7WKvbrQ",
  "key22": "5Awee3UXGKFZo9YZajxMQTJATzpBsPrHRTqpsukMpSw9isJ8xDQFBhVQJvEsFprJYcaLxrszGdSswxdTLXz8RGFt",
  "key23": "3CGJeUaoUsvQXMW5izXY5oYm5ynRBrrZ2RQNJZCihYmmW6z6g8BGdddSKJCXmxGTdWKKMHXYETj7S14sD6kWGwLm",
  "key24": "4SH4JpLAh2uWtoEqrRCepmSXPxphv6tPH5jdYknTYLqS2qV52326yxomNcAy2af8VAEESuNCDqXnC2Xrs7USRPLu",
  "key25": "gjbUPEReajbwqMAKEgdMbARRtns5s5ZhJATjvc5B3V3MnpWM5ZmE9hLLUAPtcP1igNz3HeV6yJMia4qGrXRgcz4",
  "key26": "3CW3hstchf8AumteZTnAEN67F9juBuboZzJWzercgiTaxswPxKLawAWxrn8EheyWbve43SUvqFrenU5dMVX4FjhC",
  "key27": "Fx7U7LoV3cvsAMJp4Fvv19KYfcS7hs3vf7YPJqFUSfSX1N6uX17RXJndx3sJM38fHWFYtMYuzb99VBM3urLVarR",
  "key28": "58zTxo2rDRezr6cjXM3AvNGvUEofq5YASZxKLevyAASjLhK2tkYUbNyETe4YbiPg6RHwJqEAUSx4ENBhozqfkkET",
  "key29": "2EoFr3GD8Q4m3YaDasTw5TmvBKm5M3WfXVQx6eXZiDKoT4dg7xNbRDFfTtGerSENzmdJ4ja7TQxZFLjWajxR36D3",
  "key30": "55aNfrkSkGhtAVPfoEx4qBdLFw42CFT3L9ieceKicpP8iCvJMDtZBzfv192AA9VmxWTCriiZjc7UAKzRHQqRi2JU",
  "key31": "akPkH5EXmUN4mxFCS8SLvmwM1NsFCSS3RM6eSQeE1o3pWPbP1P6GMs3Hr9MAgqQx9957phNu7Zm8p3RdrUfKFuF",
  "key32": "5YRnb2bEKZ8C1nBEn666aXi3zvELeEvfE93sGu3nK3VwLPcCae8XRQu2YuphXjSco8ssG9skJeS5bnQVok3EHfdm",
  "key33": "2bSH8cHCJ749LarHDVgNH8VPyXXYnCAD2zFAj4RHqY1Ec3f9g2L9DyXJDYjtgvqEuWLJ1NY7cM3RAh4vMfxa5xsu",
  "key34": "3Q12UopdqM2k48oaBVRoTcS4QzXpggYnA5yV3q5m2Yg8yCAcSyzood2BGTw2GDb1SaNAKpX4p7HSxJ65NLxfEkiC",
  "key35": "2VegvCK6yZFGgybR6EQE1BGd7NswPDsTcDrKrVYgH16bZNcx6KiSTwUXPboP8tmnGMjXEnEt1bKJVi3e9LsxJUGN",
  "key36": "43AR2ubF4pDaKx9eBfCQ7UqoiJsR4e65TgjwKceeMprF72GeFzv19oX3vdT76iUgHjGnmVWkox9HCttzmnodBX8E",
  "key37": "4EgtsbaPMXcvfuxvKsYNDFDYqowW8fi8fBaZUZekApuQbYKi4ZxDN8ExYjGJLfdRY1Th6gRhuhWe1AzbtGaHkt89",
  "key38": "2xJarDbigqya4HUBUV1mi3pucuJ2565biBrkLhVgqViidTi9vDaWKw7NeTQVpVy9KQUuZDymC5GorG4S77vcH94P",
  "key39": "5r1aP8RBKoovuzaHs26DsUBsxsUNHcExLL5PGDwC93eA55WPwN2HTKtTvqXZt3fmh3jWruEbivPsHn8yyEQDvhJj",
  "key40": "3sAzV7KKqEe6ddP1fzHx3TXZsa8iwmx3NfcWsYxUpg7e4XPMWfUmviMjdyguDnBJDS2Rgceivw5NgFerGFhhxNJg",
  "key41": "funExNRopB2eWgL7V9R233VXkQetMkQYfGKhaGi61y729gnw75y5BF1DPQzPtq3WY9eLzRNqAS2uy7aQ4iKACfU",
  "key42": "2FDnQs5KBPJVMy3H4mYEJHeEgrZFDmSgo3UPPRaXNP6oELezZJKhXxUW1iZFrzVExXyJYQEG4BzDu91dN23cRBdC",
  "key43": "2wAdrXdobeF4Ma2GLBFuLhcABG31ERmU55PHKWxu6QrAGQcRzFBjXHiUpasA84ijt7JNY8S73rt5vfcq5xcS8SxR",
  "key44": "4MSeujg4ksMVKJQSkEj1h7ZQbqGHxYEBP9rbMFAoVyUJRSezqf5LpCjhnzedHUn5AR64w5A3VhYL12M2Br7JbHEp",
  "key45": "54dNwuruMaJhnhyotgfeDza9pZ7wiUhmgTEVnLyKn4RDkc25zeu8WKeeqNBFh4fS1nQE6xKwJHrF6fnVWDpbRJnP",
  "key46": "64a96ENqjgTKZuuDa2dL1nvWxYzCEpMAmfAWNRqXpeAWgVSf3yvSxWBYsNyU67AejXxusq8xN1ocfcNo2TeHpbjD"
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
