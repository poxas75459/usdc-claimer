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
    "qpTFuiKjdggo9TdSggZ11kfSXvdV25ejeYXyhCBhMu7KEpTYLK4vn1ZhWPMP2YZKSvMkofmfXZYb2MWGnfkHynh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Du9nCUnRRuNh6RcTPxXPwMzM9fAnkFZTJY8iBtXEXtWB266NkAJ9R3R6Wos98suL6nvizs97cPdw8F9SsYPrJSt",
  "key1": "3gsaLqSPJqd1UF9YyTx6CyavD5itHRHgoLi2RbTmsouGG72ByGYmsbt7DTqpHEDxRHnsmJc6VoEQC67ku2n9kUL4",
  "key2": "56BWTV7nrjYk4A1hV97zhjLf7RnP2eNcn7YVkTzR1Vi2sxJttzD1KHQRxDRLU9kJFFuiSC8J2BePBacotEuT17kd",
  "key3": "4uBRAajBaHJiiv6axtbpSjFzpQxGRZL8wtx6Pnjm5RAtuBPsFtTnGtzGsXNreKVgMqNS9G4z7VGfLyxBhdWk7vvE",
  "key4": "3KnaHo6Dh5U13LXxgWqSmbFXCVk2LwkAdztfzELAwPzu4GR76ZtfEPcK4AXeKGgrB9PadnW8hKuGgYKjiFAtwrAD",
  "key5": "dE3ihTzxBj6xLbC4WdwBVEwTqLmHroUZUeZvHwBpBfQr4FQ5pWwMhsZGvzWycuKec9ZSZi9XBHHoqokpXBQhwbU",
  "key6": "2cgHNM8Rp64M52eYSFUD1XbXZmGrbdJD4YYEehxaEY5rX1DxToJ62RdhRuHXFnbddZJn5DzZKqB7JG2Xu9biDuXQ",
  "key7": "3rqqQhPu6gtD7PZoQEmxeNTYvpeDQVetjp93FhxvGf4mzz8YBkzmnsLqu21qS9ixWP496LcEqemswHBMD4PC8Pc3",
  "key8": "3xWeBxrucwwsx5gDE9P7HNrg9xHkZ3XBWZtz5xwb57sZwbBjcRcw6k2H3UX5KQZNAr2oFMb6cwda7gUL4F1wSMfF",
  "key9": "47cxXT6Jfp6QV5ojDqo2DV11UXX5UTKD4up2WxfPPdciaBVxc7hUFfBsHWiJD1zWsKG3qhSmba2w95DF3TbK4t2d",
  "key10": "2hzDmALynYw69eFRirNUjMpwQ1W74LEo2jGiq4i4sMoh3K7b2AcnwjQMnGkwvVbJ8FNeCGPmKdyhAyuknQLKK23a",
  "key11": "2doynPW9XpWfCDbSGtBJo49GHtveYUxMUT49G2PL3YCyr3vYpRcjE3dCU5tSkgJHg2Ypj58ujFYyNR5DFsj5M2Jm",
  "key12": "9fF4ENz4VqSJYfw7rLMDiQV9cg4M85kQRCuBAQ8qFomQ9RDzygbFfbY5Nk5jJQ2Ch55chmpQPZpxkiqRmP2MTd1",
  "key13": "4SPwa1zsG4rVY7acZZ5gVwm5NLtvo6AqVXsrqR3eFo3ow3Bp6SYsCeT4Tf8UujKWzYRqoVSCYSkpATYnQCwPQTnK",
  "key14": "3r2rGiaVSx9P8UPrAm27iQK718ngZbzA1rsNUPdvALcoWzyGf2CweVf4fo8SEcRbNw5WBG8sBsDkXDmuwSFkHGDJ",
  "key15": "2NwV2Q8oqP2f2EQkCZ1vA7wMMyaViEiMxqEtULRJH1nMTmd3rQrCHCJnFouHeiQRzycJrepsNQdB91EgEX7KgrTF",
  "key16": "5VGrAntLnvnFJq4sdTyPdDa3bnUA8rKadRqu4bwzyJEYHQxptiuQiLpJHXdHALizM6JckSqGK25DZxn7W3zvBbn",
  "key17": "23SYdYGjz4A4sGQxd2TMeBrdnrid74dNmW3TNKLYvJma3MzSpEAkMwhtPvWesaJeJ6uKLU44Cn2LMNz4HmpcAGx6",
  "key18": "4SHHRpAbjbvjaXwy5amLycW6KPbdgeeFrFouyyDXDySe4wv1Ph2gHaD2irTXp8VwQerP8qnAdzTRaCGLmoKJcT4w",
  "key19": "4vsUY5u7PJM42qboE5KzpRJ2pSMNy8rbpKcyS1YjHhRDPZEGPL9MvmozjgbpmUykGCspD2SxLaKQFzeEhqrg6efE",
  "key20": "4V8Mjoja2wTBQZsamY2nj522HizXcqQhPjygk8ukg7SgUQjKfDLzfjvWS9DfrpeN6fz5ccjJw4YL6zrTHzU5xsRJ",
  "key21": "2jASoaD92nsEwR4PMfUWbbgNoaWAYanQcppA8MzuJo1Fpp9Gs1QxeX329umqm4x6NBJKcMxmHKRAaLpYqTSQd3r5",
  "key22": "5wKtu9iUTNPZaLkyfhBMUgutexZnWNyWK8XBWQTWK9S3stEkuvkoWkpASptxCodKsjhURZ4VPkkS8nCatrDCfgve",
  "key23": "x2mWvtyWBfw4BRBcfcPEVXoHL8fSaDgkfmmxeYKkRBA2m4KQYnCUdPDMeYwEFKzqxePjVNKiVhHf6fE79gwu5o2",
  "key24": "4apmEJvJTmCzqmp2o3gtpbGbTajSq4eYU6icvtw9i74uVkgdC8ZKAQzXPviDq677KFPccAiprwBFKpWrENz6aRve",
  "key25": "4N89dZQfj4QcQmBeQ9G81azqNJkturJ6MMKQCoYcMj7GeZofeoLd2v7zGVfGDLgfEpt9oCV2zL9fYRhnKfzAyiqB",
  "key26": "RWaUPc3WWXFm9rQmrwjL1zq4tKYCNDTigCvpWtKGRN4HbHCqpm2wWa28wFLy66xH3JEG4DEonHn3KAkZwidG2r7",
  "key27": "eFTjTEaCafDEJz2Yp6DsJtALMrno1bfdjPWBaETTF9YoU9vw6JkD8FtgLgG1WSrdnV92AV6xX9AvT18VNfK2Ucu",
  "key28": "5a1A6EMno1fAzYCdp9bSoqVUhwpgvkxVPETKDZ8cDffdJXD5ymHsF2ZVbmrv7wADAXkNJFg76XFXBqJVsvFQQoHn",
  "key29": "3b2UrnbvYcC9vkwst9A8X1cLnxfK29mbZcwbR1vmamMYq8DvWZzqM9R9FdYpnQ7SsF26dgZoss68umzAaF8iWU2h",
  "key30": "5q4DEJqezVWKv8FdX9yh48ibEsuKJVvogMX9rGyTHa1siLhkPaPQTebvpX6EBBxeLFpKs7tj5s8pDNbkc6237oFz",
  "key31": "yGPKjDaT2Eqy5esfBxeecDa8o7JBu52SoAc7XEsrT4dCzjWk1pQxWnPATaNNBbo2zJEgHM5ohFnHqcYjjQVcN3q",
  "key32": "3DVVTwkgAcGbpjr3nZ48NMjYPsibXNhDojJuZJpDLu9WFphv4AL5VvgCDaAtTtuvnanFJjdVr4SgsJQJSi9zkTyH",
  "key33": "ScibgDM2ESQb5WVFcPtKfRSmqcqoiKzre5EXhosDtca3DTsvkYYsrhUfHSheTSVsrMEJDFDg4z4TfWdTcPcMXke",
  "key34": "2fafuRtqQ1PRRsQPKmDYEV2Ruy5TLpMtCiUnJz1eacjY41ThWssvvLEdi6hvYoGsak5xWoZhmVTupsC2asoKEWP3",
  "key35": "4d4qoCk5U9y7FeEpFvNhApjwtuSeFr3XtNZEKdZhqF13gZJ7r26L6VxdDWAt1VB79RHt3pXN9shU8qQDYVpzx4tu",
  "key36": "3zvcmYJagHRQpA55F7jE3DM9wd5WvpqhoMRcA98pW22LrNe9tQySB3fMLeLBMoRkvzzoRyoQ35zsZ7VWX6Cvbp4R",
  "key37": "3sN9WytKYNXUbK2hb48yF8jYku12KJoGFTMgcRjxJGotnFkQdfgCHSMp3WN1pNJuqrZajsu4L5kckNz4hhzqLEHd",
  "key38": "4dYNcFf7kmvyxpvBquH432eidGXWu4iPdDuAumxjfTUkga3dnFdjPK1o5uDzbyaD6jyiheY19cmdxtrTcezPHNi8",
  "key39": "5oAPDkfZJcELdp4GVNfnepJJd6CHyaBDm8nVxiNYnA2toG8h1YmKkp2oVGvfxD9nDsVdmG9JfVvjZ2eHnyNUsrsw",
  "key40": "4kWhvXWyqQnZzroti2zmwjVLwhnb9u7WcREe6V9AmMAtF4oZXU27JBXNX3XBeueuZbi8LF1fNDtpzFMLqmDn33VN",
  "key41": "yKmxpbyLTwgiJypCDw2baXZuJvyiZAGyAnPjswh3TY4Q9Z44NMY38xvovRVANiUhnJKo1fqY5EEW1duJHp6noRZ",
  "key42": "dthuMsAUHD5b2g1YT4nUSGpYUvtbZf8iNJNAZW9wn6dmVkXLJL6ZUJcRWWSedTMb2iSQgTqwFSfFUKVnSHCWeSv"
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
