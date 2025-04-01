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
    "4LJaZmMEBttWnvLHuxDGvyc4pUj5mGs5pFGt5j9hVVtZN3be6yhYK2V19vNsjee6HuLZuyJaSGz1BoxwtFhybABT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wQmNsBPzxNeSWBTfiMGVRSFCuxsAsfL4qSFn2DtU9dJPkg4u3tbULPjA3LzeaihLMprwVdzXzdZCsydUoQZqwcG",
  "key1": "2H57B1E6Ujq6ywVx5YLmz2Rjc6bWczwnY2FrDhgefWckCEVGuc4hoFT17ddrgbr91W9ZZATqQ2rKr7jZkQii74JQ",
  "key2": "KLDsfYnu85E9qLL5FFzvSZPkDpzZ8o1PhBMNLzCL4ji8ZikCnFUKthiDzWHV2DzJzqdth9mENd8VY4eyoQn7gdP",
  "key3": "4h2eUk2AabtDgHVRfn5P4aHHi7WmbHGHCBiM2AehvmzT3AsXdj7vumZYjgiNDiUFueai8sgFqKhjd4wiWZ6knF32",
  "key4": "5Aa2kQggNp8Nxp4jN7ixzaj2rKqdnA6fDvW2ZqixDWNBQpQ74dJUsET47ahuVPCyvjCnsjYugyz299YVJWfD3MSo",
  "key5": "5yLG9nedWvv2V8UCWgthdwv5eDAoJT6GnNSGQRhmYmRynj739xXozFYVVYU8bTT3Zjq2QNQU7YpUzDNKKSe6MbBm",
  "key6": "cMLu27WjZQo6MBeBfhpc8Y4yR8D8fZhF9HXExnu5hsimPVrCuUYHXHMAUuQrPRgVhWd6eeFbABCR3g2qfKPPoAD",
  "key7": "Mxpc1v3UN2p4Y2PoS6JVK9AQC36ZZBwitagmccqw7ZCQs814gcsMJDvSKGCBTSWDMVoAiyG4kRLFj58ZgVfV1PM",
  "key8": "85JZaYsB7hHTpvxtmucGP4JrUxQuk33X9SZvjC4xVAxQT6JcydyUj4xf4w3aTwEC1qxrtRiRtnSYsEjSjMVHtjj",
  "key9": "eL5FcA3BJsquj7S5ChPdMWWDcZaoMTka1Sub9HTeodDsJ6ftLoJ4pSpVvqeDTqzptk58VzSQaMfstAkPWhVer27",
  "key10": "5HDzTCWxeNj89QC392vxxpbdDhvBXAH3BbgBbsi3Fhj2ZtwMr9cnVMu4a7LTxN36JNxJRkgQfAW8GjPb6bcKjxKv",
  "key11": "2chcY5PNSvro49Qup9dZSJtpPf1puaEbnst8yJf1xwWaR3s5uhbD81x5GWXuxhRBZW99seyn8ZVJiQSPbNUb9x36",
  "key12": "2Kk71D48NPf8KoRrYvHef3wDA81eMhP6ppFFEF8cNqQAFi78n4n2ZKeLwhS3VwoKgaVha3os6LM4gGgsaJ5CGotm",
  "key13": "GYwBrPijd4HRYbKRV49oXYqr3vs1BqHE95pBB8uq8a4osourEmubHAb8uoMSXs2X7k4UMGxivrjB9wFwADG3wUp",
  "key14": "28H52TTNoEHzFPPwADc9ThndKH9tEuwmQcuAdkdkao7g65V363yaucxC4BKSpBccjk1LFkqDVB3JQ4AD2ZnnfX2B",
  "key15": "TpL9AwBg7tMsdgEqUaTVM3WTimFmVRhaTfFe6BdQkW7HGJtrbQ68qkx1L4x5zUgJHZc8UvHoKRWMvESVBTfN649",
  "key16": "2Byohf6Z27k5gULayA8C7X4983mZNcwUDjun8NkGFegahv7NpqEShS88B2b7oVkeoHUirA17YHPfX9cdALCrCULi",
  "key17": "5qjsCSjZZe4WCx9A4oycoYahmXYdzBVKnNchx8KCKSb8D1SukbX5Z3HiRNikxrGje3QwxCmw99S5MNVB9pygV3Bs",
  "key18": "S66i7GU4nvhQjD6JzjWLpZsja1GjsXd6inMUJZqyzSNRnZ3TQbXbsSiFKhLCfP3LRTx6BmU4hKpdjo7QtvaxG4G",
  "key19": "BUrSZWYrUccLLvZHaYtfN2ymfrgMgHa6mgiY36AVwnqespoELXiHNNxTuijNMGMQ1eUteCatGJnpMoroH87inXm",
  "key20": "4u4yzD8DvCouAxLbG7T9dfYbYkcsa1wPKMLfRJZZMe7fAcckmhdQgwQWnCec54zH5fsvKrLEXGVKdqesa4e8CTEi",
  "key21": "2VucuiHYNZ7wXh19WWdDuCiYnBWn2ZduFjCmgxt55KExmpNYQNr1HwaBdKWPBst4m7Nf6c42978dMD8Au9nex9F8",
  "key22": "66yFMPkuZfcjznXe93Wo3d9cc51GSrAffgperTF82UKxex8xcc11ai1wkUa4KcVRTUGT4pGC8ePb8pt1TKbaiHzZ",
  "key23": "qeabwaoaiFHmNi67bNUq5vnK85CrB5HcZJRuiox8L7uAwwAsvcJde9PQh6eWGSHeHJRifxCuhgUami1reEAYkSX",
  "key24": "WhSsrWaak25o6K3noSzo3npL38JGKHFLv7L8n1ShJmpECiPmBYyJrm8usM9DMEvHpAgttbQVUWeRiwfHQXzD4nC",
  "key25": "q3kYGGeeEL2eVmShVFnmXgdwAsn9XNuDQ3VYw22tuxR7AwPRPiZV36GjaWw7aCgwQW2YwXjVdnK8UnscjcCUiVm",
  "key26": "36qWySf9WdGLmmq8i8WQEZqF32pGhTvVgTv5gVeLAwPTc9VbhqsT41m6s2btS5HedwFCGibp2Uc2r1gUTydbmpth",
  "key27": "3yvsJLt7y8AAJgBbmUu3WvCiFy5hZ4VsPd5L8XrZDMyV6kw5wskV9MTn51CRGgZxNAgdaVpkmqfeJ1REtMeG98tC",
  "key28": "4G7oBSmMgk3rd7a8Yqcgq2PyFMPKssWqe6xE16r1P6S4r6hNfyBQ1z67adorggKxUSsdJH2oSdSdiaZh1HHPDW9o",
  "key29": "48AmpKDcVTSoYQyr8KyttRM1hMwMv3aHbt9qgmVEhu7dxivYeD51MkZ4QULwK7wRenWasZUAZ8D9WJsahswmziy1",
  "key30": "3A2jQY32do1HkkTXLYzzTsF1BzLDbCGhAZHATj7FWDHZ2vUsDYZHDS8xjrUZLQaXSqcbGYvDZGVirW5UUYnzko8K",
  "key31": "5VJjPimHhhtjQHQdiYr4M8mR1LndLDVzp2VmanRU4yZsMfckeF17moB7T4wQbsC3NsspxR1zJyE5b3s7JhDswLYz",
  "key32": "2zh3xGh8JQC2XpceW8BSVhoj36PpDnc8U9RMQTaVQAbuueZQei9Dne6RgGFs53hgvWuPMdMeworZJCqHvttvmPFG"
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
