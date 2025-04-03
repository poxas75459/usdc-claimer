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
    "4hUgbnMKEgf6pLzqnttZbChVr3Gb95UrrtgMYfCFd2j4m4pdWMWfeW4p8rkGKRc3MfbVeYCkMGFth2UhUZXJDwSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E5hcRUqqCvJUGePRJj1H5AA1EEp6Vawbf4axD61tSoUyMSbsFGYvE8uVBzRrxrJNS3i6uZVqkcjSGE3TKW4zrPT",
  "key1": "5CtwfCinFQJdKAWufQb8aGqd5VRL9taEhF7SFShuB39FxVmvEvASnRpkf3sB5Zj1rg89TDAf6i3w3GFde1TJukU4",
  "key2": "596ju61NYtfF1sVdFzAnFTHTiMiqyvkvy4tW7RgPgdYCsr3G6nAMYFXcbWBnK32jcKwcDWH4tCH7hdXfNWvUoyws",
  "key3": "2Qm66mdVE3hcjjdfWj53qBUFZxb8VTdybSs5ct5FbJpFxEqENWM1LzE8bp8S1WJemqEFXQTDjhGdrTjgTjULbR6n",
  "key4": "G9Z85oqcZhmSdMex2xN6WVvNKztA7xvyrRvgejQHmUeaVfdJiXXJNojrERrGuUJgrj7qph58qeEPRDtaDQYrfpf",
  "key5": "27rvCP6T6iiNUDZgvhdzdmu351XMMXGF9UYrm6FENumnjR3Lz3ASaALQ5jANVusgUYifWjRiZoCTq546b5D8xcoJ",
  "key6": "GgaYyC6kQWrN4vcpGSwtAxbLzBCb5RNQci8WBsxqpXuU8emCxSNYqoey4yxobwt1rwJzGFQ6V8o6Y4vjU4GRDEf",
  "key7": "ysg1v6uMAkRVhthSTs4ef2evgaSExVXnMdjxqM7oBPBxvEH993UVoFbvM5aWwiHaJj1VWXNpoA9ijgwxp7FdAom",
  "key8": "3QBWn1181m72gMXWe6LLe5565RDajEi1gM4BaApQE7xy2eUKb5CBEUoGHpnebNaPHyTEMLhEC4kJQYyeenLRJtve",
  "key9": "5n15eyY21FEV1vAiyaQK7nkrAvz2fXLXHT6bk1zSqwxNGDLUZnHskz7sV4AhsPhee3rz7CRNoMByCeVDgxJ8mxdV",
  "key10": "4d8UgSSLNBhMDNgvBsrD3FaLcWdeghwKhrtBDKzmmLpnCiGXBoYxn1gEiy7952hELcBaTb5fqzPJYA5cgCCfzsnd",
  "key11": "61qk9dyuVeJXbXWgM2qzDHH6meJVPJhwXANVXNXPfcmpU58Gerj62WAzmR2YpvD1JSXAg2dmpXHZRmTbWNXehuwM",
  "key12": "4y8faQ358GuxYARGMEJNqueWyVrXBmg87gWDM1Cm8Zv5n1CYh8M5tTUSvGcqBtXbt8y1QnYL1ozxwdb3GWbDZqEb",
  "key13": "5yXZgrg95WKtq6kEFtj1CYhweC9mFpjgSxELUytLRkdJUunauvbVnNP4RJvqQ5RntbnPDGvN3FGbiBjMFAanFPuP",
  "key14": "39UdhhN9RaNThcMn5FeEEbjq6rcmfn9E66sFsebUwjf8u9QTFZJSsbRUUibCwjk1Y3CqnsmPZVkMiLWr2bBfrYAX",
  "key15": "Cvc4b89P4bWbrjji92bpFvrSwG8XrPjUVV3bTgzh3YiqHsDb8j91SY3KCeJmqp3iRSGzQfcN5eLWfcZbRzq8kar",
  "key16": "3hpJ1aqqSRmpd7kat9wJgCfpokUgbEo8VmzDSGpmHmgqyi9Csupr2URHc172kfPUFNam1zcfQgeXbR5yNz7gHARx",
  "key17": "E6hpAGNF1bTDbDHjHRVNYK3oSA1eWAqABztSPnQ3z228Bau6Yjg3rgpo2aMLNCXcJo6TEYz4482j3TS3gtVDaQ4",
  "key18": "1F5TVpVKApNT8ba8WVFgnBcb6PVCcDxhtjYki3LPWp4mPusmEmoaxeVL1NRrif8b1TKMZBAKB6aZwWAp2iYa6mD",
  "key19": "5cYZAW1jWZzbxaGHr58EmCgMXfufLeRfVkzYpH1LHRimSwD6zaEzNp6tppmjLuHrnNU8wVjs36h8YZgUCCvrGK2E",
  "key20": "64n9j28iKzTZXqkjSRFbk2PXcfqmjdAKnLgtfgL9hAArxzoVy3oEXRLQin7HVbxJQfSy4jBg5PWKL86wKqzpKtW3",
  "key21": "48gWFRLWaxuZ7CTamimozJgfbTdH2rdD8U3Sc1HV4zCNEm8kK5j6zZM49agxLxtBGjN2scbRZTHSK4okdFHAyPs",
  "key22": "2cTbxs9F1ie2bMfDHekjdxHSynKzQCePFB7ZtocCCcMp6SpKoGj4xVi48NQZ1o3tW5m6JoHN9ydbrv4SLCgaQAbq",
  "key23": "LUnvqvd2WmrmnzQxnw3kCdQ1imE9uMUj9UbXWim9FMxBGdV5FQgq3E4CsuqTGvWsveaaccfmpJXaiAYzrL7CPWY",
  "key24": "5M1o99K4ireT4T2BVtyK3BY7Ei5SgXt2HWJzDkGV1Kfp2kkmXLvxACcdQCWZcnF52MVCPGNnHK8B7eFc4Ym3bW61",
  "key25": "24551fcRv8Pwba84tbTZVktmK1d1vKGBCjAuUy67MBjYcPL3jqpSTspvWCffEF6rM95Y3PUF5micKXXioj6Msgn1",
  "key26": "oCx117yUCBEoD1xd88kLXoxXR6yV71J7Jf8PjYgUrqgz8ZmtQw9z8gi24T8ineRyos2FFeTsrN8ifrpXTVawCcN",
  "key27": "4jfkCJRQ6YwHEiyr9kRZ7D77wHPRn1jziGLgYHhMnEPhs3s9QNMFPQi7Y33k3VD5AtoJPxXHDgczC1QbNZEbz7YV",
  "key28": "D9UjCzrTcRijm8xQTndoYL5qrBD7xwCXiVYKFgL6SHPimKu5PYiz1C2V1eXuXa3auU3kQMMLNSF3bVvi92tESs7",
  "key29": "5j99YaNXesjgErtM67Rcainr1MJWnee6gDfnJcfmXP3pQoL4FCd113YhS4gq4ceRPcUT2FtLn7ZHpMC77ezPERqc",
  "key30": "5A1t1BrMoDCrXfTAUHttWJsRfA7WPyBC1E5s8Ev2FcBmXEnbs6YtFh1ieNJGF7vwDwZjUydJhbCqmUVz7FWbsNNd",
  "key31": "sEMrHqT6e9JFt9NCBYYiRWJZLmCZvmWgt7gk9pGQddn4JZGgJB5MqN4najP2pTzWbF2G5Cpgr2hRwaMqANyWAz7",
  "key32": "4vXAtYRpkFt1xDjkTN16PPh7AqduBkMYpYomY3kqtpcqeMwtFt5draGZQV3envetUvQnm6PU4KsFu86YNLWU44Vq",
  "key33": "2eumK56c5kgYn3qsLUgULejPt8jUeSNfMFrruT6zMRbteR4SXxMrxGX1JHxCxVDfPQoyjCbUiwfBfjNyH8FLdAmq",
  "key34": "3FH1Jrq5JhSiTzq9s9s8quzLxatXqGKtjhAAj8Ty1VtKVzrD5LBjX8znqXdV7mx9c16pXRqRboHoJrcjhAmUFMy9",
  "key35": "5jwaoknKe5RvpokGRYrUprtX7CPsfcpHs1gnnnPXhZgDXJoCKLedBw5hc6fKqeHPQEmRuy5LbF62vYju8A7W8cVC",
  "key36": "47QV7DfKGqnudjxg4vYvMXd3WrGCTAtToZaQgdyWoqnxZmiBnZQ3foWcfH8Z9xgUeffdsLNfdGg5PqPCpTqYYUfP",
  "key37": "5yAZRhyoqwe83xVVgt7Eny1hd5YUZPj8a3VvjjtwG5ZAcyei3XbZ29M3hxWsFQj5fPmu6jguVVbBGPsYKnexwTT9",
  "key38": "35ZnfCi4HzYzwic9AgxHmijDtmnLSwcgaswkwALEJzZQcVofptR9WhxmZMw5xaYhP7aXMwPRWVb7ByPVfo4ao47v",
  "key39": "3Qff9LLQgHuWPF2iLJXqXmT6U6JXeMFfBJevPwLWK6upR2zkgCYM3Vp7Da41wLpfnK1vPDxWqknGbWLB7aPPiDM3",
  "key40": "3WPAKGu9tsnLm8xaqyrem848iARVSwAhK3NmDgQwT5GvnM3hvr9FXCF8X1gJTkvnb5yjLYhaqjFBocLTk3NQ8GP1"
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
