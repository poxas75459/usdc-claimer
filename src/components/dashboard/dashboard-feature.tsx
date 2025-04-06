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
    "tNTGKBSZhc5PNEUDMJKZMRsBWHXgUciqHY79BBaepPGoeU663LyoCukZfUcpt7kAmKRvkFn79RnojZQpKxXkQrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25YUs1CNqTk2kzsSyXX5KfqgoqQUTJ7UWDnFKeRtTNyfMYkwJgWTYaFPdzrrwFRDJRHQ51WGz3WY55Fx4exSoxqV",
  "key1": "49VNkwBo7Aphw5M2wS4SBRc8ztCbGmUrHo6GpP72PbKiDvxFXFHPKX1hYSsr5NVb2AbofWj4jdT4uGhgHM7rSutt",
  "key2": "4uifRrVW7P5W4DbRsAjV3DLtzVYmq4RU4EXNpfVbE235AcVGFpAnBfc8WoWEK8g4XtDazUssm2tCC2kLuwUdsw48",
  "key3": "2sy8G9TBMEgZskMvf9TjxgxkVLWNVqHoVRbjB4ScP8dmhK63tQw4TMZe7yHdMbqwfx9cd31QUD3XYnTnMiHg42PJ",
  "key4": "5jrr4vwhbshz6HxCPk3akcKSkmM7QBQupTg2sXkZKcyuaHoXGDuQPjwhobLCYxfjxyodXsauP9BL6dZ3KM9B4D8f",
  "key5": "3cLJPEcZUHkRVAnxzJZAvWN28TceBCe3Lt4G2g7Ehm6YJBgAJ64pCAE9MUwWFvctmWkuD9PJ3BvvqndbrvQGMiAM",
  "key6": "3SxqnoeJvssaET4gtki92XwkvAVTdABK4EdVYeU9mZXcjRM9hMbSysxEu1Yo3HAxvhfM99K7kTkoA1RMBDQzZtcR",
  "key7": "5qBJkZ3v7gKDYmN3kk8v2tzvMP9CYqBcQw2gJPEs84ijEPFRZ9b1TCrTXbAPqPTJYmrNCczpFqivoQQ93VcKCxjs",
  "key8": "RV1f7WqDSmaYdYki3LUxwYpSiTfqDxhaxnKF7VTpdKRA5uA4nYLWKTVv3myCZNTJVDoERpVfZfy1f87cxnpUGEa",
  "key9": "3bt6FErkAoefrBtMCMDJfEKmWN9jjHQjrKQjYvQJfBE2DbjxWBN1b7oSp3n8P6MutUmRbHqj3NLb1hJXe3cpgULm",
  "key10": "3wbqXnGi1ZEWFWvg3Xa8Jb2ZZLYcA3KMhaPT7CRuS6ueW2KP5qM6RMmXpYYwAYChbQq8H7JfQmQEApESJEQBmQWt",
  "key11": "5E3QPf8NjiqEymKZmv3TvCSw9DZscQv7cPWWeiKaVeETLcRj53yru58WCH4kiK1dqUXwZWU1iXFZEaTrbE7mC8XT",
  "key12": "2RkpT8U1aYHDRyD9Gf98SkabbgcwGSfpK9zQhQmD3WuSksK4titht3MFftpS1uvc2Cecdow9FR2oM5cy4MQbDLuc",
  "key13": "5w3zxkPZe4grrNmUwLed4MvdctZRMveeuk2zDRVvSAETWAv6cHdezxXHutyrcJxqqmCfKjnoReHuVaJ5cjb2sMT1",
  "key14": "3yVekWsb3UeiGv1fzuvcX2JxSzJc1epGXpH1RN5YFonNkxnMhga7qF1D3LV2AKJdvddW7nmeoyPDA8McLLG4b8ad",
  "key15": "4EvDFXy2hNF56V7ZdEnXxVDkvmk7HmygnUNJuzJzV5WD2B4Bg3RtY8JiesRzETJm85jNAETBx1od44DhAq5a1x2x",
  "key16": "3e4VQSnTGyaCLEiCB7HhiMKUJS44btxUJUvVJb3dZUtzuQK97ZaR9Vx87H8HxAKnLRMnkP6C1sghVzaDZ7RCSDyX",
  "key17": "61HXUQrGt9e1tsff9iKZSuDJMtBPGZkj7EqBC1weU1NQvnuvV9frXyuMy9dvqPVpDiiUK5mtvhw2g1zugGGGJAcf",
  "key18": "pLamoRNF2xjBQm6rdWxD1CQFdd3saadGjVYndXwSjLvgck2VVT5boVC12iizYZ2Ak7gMS3yDyLAyjkzTPfMGnXu",
  "key19": "kAPCEMjHVsx2YTY5LFxpEwUkrRmBiNsN6xz2e34jYfSxXrb4aKj44rcKXhVZ3eGMLjsg4rRNWgVd1wXQnCF2vnR",
  "key20": "pLk4Ed3aXzZCkHco7iPjiWUUAUmoj6xPqddjxVttnrHL6Rk3HqbQzioMhC2f3JFLKi29LgSfuEsxCZpXtTRQFFP",
  "key21": "5A4XBtLHhBubbtReoKkjPC8hC3EjvMYFaWi73vQh8C2GrUtNRiNHqQDTVxMNrVZJtVN3k8WLpD6mCAHDgs9cXpGC",
  "key22": "5CZtC3X67YMnoBeVAKLQQmEpT7HHgLVwVwRCgPugrDo6kKwMjAj9q3BkaC3mSFvS1S66YFF76yk8hEPf48SYSJHr",
  "key23": "qPfrZhxqku5Utc9vEgiZ1Y1bCKLdpSHF61aKSt3o6LVSRvCuUEoa17EW7RMEyBX4WmbeKBcJVpnBQvVox4M8Tg5",
  "key24": "bNUgzyoJEGzweUnp4jrXDd8TqRuh168JBTGZsEkHuNSox7XW23sxpM5VNitfyttZdnreLyPRygtHd8eAvj6TEu1",
  "key25": "9tcjrY3JqTLFCJhn4y2YDD4G87TjaVqhjkRxTmQk9BaeyDLAXEYHm2TBwFny1pTWq9K6H1w2CDnMSrJZAceNJWt",
  "key26": "5J3YjWBPE1UNdX1rAL7wqZ3mxp7a1VrxuJanPTfZg4Cxmp2gHx7Hu6xUJxiehyVVxtDTAyEYYk5GvDLVNZa1tQKE",
  "key27": "5S4K4JMQ2TYQzbpbeZWFgf5ZuSQHx4TDtBjb1Sw6P9KbuY7cUHpwY69xDANZZeMYQZTPYbFqfqQNRRD1JxAC5YWV",
  "key28": "5KaRgWVUd9ZMaiN3wYrXySHSdXTyhduyXXFWQWUMtsZ3ftqLJEJKrQ1wktkUJk1Vg1T2bmurAaA2S9c14Mu2AztF",
  "key29": "38dVLtJkteYcF2qATzMZDzRitcFjbnzJ4heyHjuJmQj6sfJzWNpxmqajpUDSTEZACB8NEur5kZh1cN4a6A3tUCNw",
  "key30": "33RjbCWigWfmpcPUqZmUKcvcWmd1sTU1QJAwbAJBhVF2XJoKYKrGmF5mhDpNc7GGgkX2U1XcaNng7MAsFspzEgnW",
  "key31": "2DJ3Ykd1fQeya29j72ce1gNR6SeepkGRqUzjC9839gGkKWViqQXjkkKGJ3v5cgPEQrLpjVQHT3Sy92oLLBJNi6dZ",
  "key32": "5yomJ5Wd1Tk9fr6TfG7zzNutoR6a2h3okHF4ALPy1SGBhxCU2hhrqogMTPQ4pFMo3CAZVSxzKaV1K5M8t3iAzwMS",
  "key33": "2FkrE7saHE8r4ysxkMVHVxCBSRyHW5uXjRHwff62hGhJTLWeTH1hAAhKr2WnxAGLM5mKyPU8BMPsPwrTrrMcKtGQ",
  "key34": "2xJmwH4cJ8Qof3FMJ7xHq3xTDDRc2THqsxmAoMUeF2mDz8ebdMBCwv7ou6DxskPFR127feRDGSVPYgJciH4MFgy9",
  "key35": "NcnRp17Q9k3jSSWLofYeo3Prdp87dpDFyVVDK7dWUDrnWojtuhQZiMJBDUCfLdEVuPJqSJgLiD8n5mJhqnr8FgM",
  "key36": "4vTm9thF6aL6ZdSTpVoek7h3Agxja2VBQ3c98Z6SuBSBeCebRkMLEdkTprDALm8MVBD2qAzdd3r6D2zeYpG6vnyy",
  "key37": "2gc1uAoGHJ8E99x4dWDLY3HYygURiUxmJAjFetTAcKrjy2yTJM8AqT6eriHRJbFqNnx7QqAS4oPSxfcL2Ghrv7br",
  "key38": "4tSfsVkB738NsnTrySJb1x3yDhdd4R61ZgM1mYUsfEYCd84MZgXnBexLvhfbT8jFGHRh8rqNb3k6nx7wqniAca2p",
  "key39": "4WA8bzad4sJb4nzN2ZyCDMFQy4LovPbbZLvViGyuABPoiJyEwJXX73ZRacRBYpsharCPUGF1rSL1u585fz62AL2A",
  "key40": "39tHPCHjTYbP8YUHhiggxKsgtsiRNb6xDegWRWQLiTjySSzwdNb6veBW3ed6nnCffvwUnzZwWqyW1wfkT8j8CRPW",
  "key41": "59ict36skiamWfLVH2pGKzBrn6BFp71zRM3obQ4LPoEgErxE3FQySnc3bWZvpU3MmKDPKookvhjX1wJK6ZjGKKmH",
  "key42": "CbrtnmbTwqVUtvhCiw72ctNkiLvC2hk62hJGR1H1D3VDxGP3bCEcfkBC9CdutaHBNtWF5BPEC5EWj7LXEpyMQMb",
  "key43": "3MfSJy93WaydMDY28AUPZniXtY5W15W5NAbfdVCUgpjxMCaRhK7R3g3VJSpTw9oPKgcr9qmJkckTUUPFmspjizSK",
  "key44": "XpkF3dGqaioLFM8xRFfcJfvQMhRAdR9hhVWqfwgsra2f4LKe7A9EJqjS6XqofjGUFMDKejHcuoFXGWd8atf1ZFJ",
  "key45": "2kDLnCJ6F3H7mh5JT1fNgrmJnFF3BH6sL12CUMZhUjam5UP4z6k4oPTzDZZ6opUGUhhaoe3Jqrz6cMkfjH2TEBEE",
  "key46": "4PZQoDiJTna3S2TmBbaW7VYxeryLjPdw8ihcPti8i2B3EHCR6QL5v9GvbhNDJMj6U4vVFdewyhvgKn7aoUWw4QEf"
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
