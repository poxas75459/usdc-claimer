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
    "kQnGD8d7mCJgEjYXQKPdk72EbazQMfaaWiaMZZqrgq5VEb79B8WLMmAjktPWtSwJEXPcTDEZqdUoydH9GaowUSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fD5LeJihzbQBvwRsoasbWyHnyNFpTfgm8E5HcwVYXU4H5vxo5EgeXHggTFUU6bsLn71xCDA3F73VoG8A22pd5up",
  "key1": "37edoi8fd9sjPJYCE9Uwk8k6ZKFQN8sm5FHQSBDoJa4N4b5BCKwFX36iyCxbG9HSBUJKLXrMCBJB9P5wDqTMDGDj",
  "key2": "4dQ2NMSQmnmp5FPwDGWiYwgJNbk8GWujjFDbTpzfkHjfpBaudzfRqktaPcomuzqQQSWVMf9kskWw5VZeWa2RTn5s",
  "key3": "4NyaKo5916qPAGUAvmXkwucpQA7NbrtTZmhaMqSBCVgCwrJfSYkuhecPzcXj2n1qXxJCt2LQTp1hBmRimz6UTBgm",
  "key4": "4D7WmJ6pYt4gfxF9JTCr7aogqVMpjcKowGAnih3KGHXAYje8QtAv3vMzmUdVRjNKELbSHcvxVWSdVkUjYYqZCpAU",
  "key5": "4eiBhYktxz6QV7UqeNosPzLviBAySCFeuSAhfYd8B88UVWjgdyp85N2mTfHeqvpNig77hJqgAe5QWbMPgHLkXf2x",
  "key6": "3oNG92mq4mz2dmEmcPvBpohLitse9in9bny9tFg4QSQpANtdexjKbGrLnz8oFyDFK2X6XvdywRGXRdxwsBsY7Z5X",
  "key7": "45mHGhmPoyzfag6U7b4hDwkA2FburvZBE5p727WDkp9Ximj1WkkSYKTqmSjehKkCM5QV41abdcPcB93emt5jyu6",
  "key8": "24Bw1Wv3bdiXhSC4Uz5LkaQ5AZ6k6GGEfF7CUEfgS2ZuW97G1qUkAyNbYuugvdoUFxs4u46eiWLKHxn8R4GXqG3H",
  "key9": "2RRvrzHLLtdEDsSi5ukuqdWg3GDYNhLMgBuiHZjWRZEpbTAFLwwmtuyP6LfKVPhQcMDvoHLqNjA4yGyS7UcVugRs",
  "key10": "58Vv73ZzsZWuhzMpCVscX4CiZELa2rjat6SJDx1ooc4CJA1gi2m8ByrT6N1fFhFf2sTrKKo3YGTczJ9pwcNiBRqe",
  "key11": "3VA1293FvfamqCjmFTbt3pW223VtToH91jKbUmcEba8zXbPxhPwwSAxVZA4c6hCuGsBsPp2ib5EJAdn5agpiiJiU",
  "key12": "3aeaZtcbUzC6gpEBkSHcpgLdpyS9waAQ59qEmQyotDUoGZTszvQRypiySomxdER6xYEHU7vQRZ1V6DeaM4BsUZqE",
  "key13": "2WfZfC6cTu3g17nRUYKSaS8GjQS5Un493kUFy4mMHwoVXnVeYBQBBRC2YQtNiCZGtkGYYnMQyTHyesSFV55YUVS1",
  "key14": "2ncy73FTnzCePv4LxZ2k5F3gsY9nXBpiP4co98oZVj9TuJHNrJNDa9u9im536QXDrTfxGzFiMh2d8YfPs1T9ocaS",
  "key15": "5ThCZH241NnskAP3DnchQa21wJDvjN8UB9uYHzQSCLb42gZm3uTeHfTRzir6MxvXfU6dYwjDkKbwNdiCoWeS3o55",
  "key16": "5a2vRZ4XyY5eJWQadMw4b5Z6RiXKfCfjHTQPeH82GeihaKoWyRMSmzSoyX31bGPRReNbx7EboHDyRSu1ag2YwTnL",
  "key17": "4g4vtuogmffkbyabxULWNU5SWBukvnTXLtumCdjZwo8sME38n6obUzn83qdJpV8w4Wy48trzLkvyg959aTUWPv56",
  "key18": "4PHCffe8UwZc7d9sQYxv3VYusTru3Yd9ho6MmkHrWX14kj1cWESJgecsuG8kpHGtUG4fhm1DkfoFjVxR1641Uswz",
  "key19": "4rmPaU5UpNYQQgwQDTF8AwczLaewtbaWB1NRf9Ce8wfqJgHSmHcr9mwfWn1m6qrGFGWdapmSDLqgLUmterZtqbLB",
  "key20": "4MX1FwAbULMU4ZgQhX2Y9GbdD98UyC1AMQsVEAoAnb7p5Dd6tqQtpP7TAy9oHiaKf214zZA2btRiJX32a1F8ZZ2r",
  "key21": "2wiQw9Wdx2s3ZP5XuzBw1vHhwp43Vrrwmv22ZUnta54HuxqYhvXniBdspbcoHdACAbZirHZbpAecdrYuTKZ4BjZp",
  "key22": "3MRCXE5Y8P5y9gMzgNjxBrCzoHFxWkNPpgpC44REjLJv91i9gKjnCcYLLcfSwBv2tzT8YcXZfHgSbbybAm1WCD87",
  "key23": "5kbU5eTdMmFbckDTcPn5HYPgRyG7vnYDgT74pqJE3v2B6eKxMPGK7AocQJtgbhX6hSPe56Wzae76Wa443S24yy2E",
  "key24": "2gCewhY9coKTVR9hBZ3z3gqLtGxue2ddRo8gqJ4dvfjstCpbCU9rVU1ZiQMF652W5w6ESSqNNJVrMZfbA4tRQ62g",
  "key25": "517HX5g8wqpGhTwZCk4a5AphbSD4XmYeaKaqGycT8ztbK52LHfwQP14eS9dVVyMMVLjfwrAfwXDAKBKrtUVeyRm3",
  "key26": "43dyWtLqkju5NjrEuZpZgkAwYywqViby5gEtZUkBCgACS5LcQXxWWEQ1Z6THnYhhPPEaFofB3vF2vKEAuR5nCXRG",
  "key27": "48k7W9tdrAbbgp9W8DHn61aKJAs5xBTR9d8SZ3hZwr3s564r5171XxvLqyjsC1hzviDsfbePgEhPvmgzK7cnKFDq",
  "key28": "5LMYLSbFgmNpBbgXQjK1A5AUjjCbKqxj4Sbk5SG41EJTrTcbbkSapbvAawFkK6jzLuQ7g2dwHyY6aqLoXoTyyEBE",
  "key29": "5jF2VGjKDUo9LqiQHiPd7JNdJojjBjqQdfFxfcUzRN2LiS8DcQiFQWZGNyvuDPq3rCABMGrkfDQMp7udBcPdUbYV",
  "key30": "4btdMVEKhSkCMTG4z4hcQhXtv7Ar6vuFTubMd7nwsVPmyGMfnDspLqCFp3Qv9VxgPcCE6dgdPoPXabuPVYZzWFvT",
  "key31": "4UsHNBdLMkarQ7eQtzF7eYoBTH7DxKD6LujzeRdvQL8KiAZTVmS7jY2g8ieYE86M7cP8QXwYdRb9xugvkMaafJ1D",
  "key32": "5rMTiuRNRGY5F9CNXir7Yfwe2QSfYgHcu5JtczkaTNL6FGvF1xUbBndWrs7yTyiwJKt6wet77BYrFzk23q4CuYSZ",
  "key33": "4xUgx4B7NuRQXWBJ56z22eKbwop4jqUtUf4eBwWBbaxGEsCBXYzJNm33jfHuJtb77T72RKkVQEDPaJXAM7F53R6f",
  "key34": "2NQDchRMcamsbUGze7a5p67mKpppG3Xj6iYVwztmZkRzyNpt1wjgqmehnxPVRFPn7yiTJXLnyRBhdTgs8ApemrrJ",
  "key35": "1i56w1z5NYb65FAVnJYUcqtFx92qqbLRAq7iF6JR9ySyjzA56PDuQzdmZmqrjdPodi37TMdjYPxppz8aYxK5fAU",
  "key36": "5RqKrLJx8wg6KXmAnjXZt8whiQofCkkuAUY8rR823VAMs646adaV8DsgUm6Bhdxerp2kmwtTxkXm6A1QZekZr6Af",
  "key37": "36uJsBNevPKEkioACjaXYHcVHCUF56LPvsurqnby2QAvWbUC3RjpVreET1eZZYYVbDNsCBczJuGwzjsZCPbu1mN7",
  "key38": "2FMrEeyyDgtbZpdZHw32xEtfEro5t55wSyTFy34cs2B7AhSa4RJg9yH8a67XhSFuns6b33ExGFwfZzmmyqHFYAwb"
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
