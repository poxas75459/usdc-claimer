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
    "2XmPpvMyXsKiDjYi8GMjBeLgaYvDFEhQ5VVQ69MAF6WGHFKiJ3aL6VTDrJCu8WBGJypVLZajXNrcQmvkNEz5tVTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hmn4RSt1tUhguRVAQ7JfYBAXHpG5Zbdn4QUm2T7Boj7h7m8uophzLmUsNS19hAtoNHsSzw3wqw5pa4bbDSGNtvg",
  "key1": "vwAVmwBgLJggWesYLxeDEX4nhcw3tK2HBNoddEtxJoif8f72sXpQEyDYhBiwA5qrb9djazy3E6kXQjWyvJRvKZ3",
  "key2": "xT1wKQQ1ty6UKBnERCfZPLQDChLAy3yxu2wa6mge98k9btMjkyRXTdZvvG9xxHph6WPtSdMA2qN6KWokCy2c95N",
  "key3": "2MyTdtQgfqrBLKRWQximBeHNUgDN9tRqQJdWWPzjMwvdVTzn9Ssx2rEmVgN59jofebQet4NSSzZLM5JHacVzd7Pf",
  "key4": "2oRSAaUcDXQ74Q26xkdm7R3cskxXk4EY3GUEgyBrDtbm9jmEcULxPWF8oNzV1iFnjSWGgam8ogjqL7r4tUb3wwH",
  "key5": "3Z9qYMJ4MGmw8cKJd7cqZojm5W16E7Eii4mEz7ipgaCHUqyGVvDmLU1zneA8V8oMEWK4uaAZd2zPaQrR4jTwZEd9",
  "key6": "5Yh5DwtxJKaJvrUi4dpejdjsXnGsKMbku8ob16toMUQ2KFCH9GVjFa9q9SEQGat6y2UarPtgx8Gnf8TYaC7KdVEC",
  "key7": "gGZ8wP9JeDp3eCFGNQDzw2AQYwPoRFShkqQ9V2kgWbRwEs1NNHxNHL8vweMmoaMJeiQXbeqtuqsRw5zj3sXvjK5",
  "key8": "4q3kyEvY94ndzm4tW6W5edpDZej8rhYZQsiDTQCD29aB3oBZVRRNuihHxmUbPfv1SQrW3igodriHxARMFQHPGPmp",
  "key9": "PixDujAAAm3ARDVyr2rXq8mVtyHcNVdSg295krjn7QweCVLfYqFjUtqjmRT2ZHLyrAiGmtSLgGtdpJPybbCwy2U",
  "key10": "2De4c2HenDX3XppFyZkwgWec678PuY7bnCFgen32CdErtuUVeZUVbDFwDcvBhstr119hpKCBu3RZbBt1YuN5WrJY",
  "key11": "3E1V8outXrdr4dNeudzdJDUTFiQyvko2To9vbyZh2xYv5bwCkeWj7VrwtYkZJkRsr2NBzFUe6jzQ9L3MdyacSM3F",
  "key12": "3EznaCaWDZUXpFPE4XViSjrKRJFBQ12woVVayL91bi1Gz5btHxiQ2WsxiUvDZaTfhQYd3B8d9fwJBWgsYmgJtWs3",
  "key13": "3FkKtoARcbmCP8g2fS29TcbY4AbRM2KewWgW3EfaEXU9q4eb2W42AqPEv54bNMT3ApSQMGfjuuyEkChVjPyKAHJ7",
  "key14": "zAUz54neHGYWn35GxdRhzSaHtC1esB4Q4rs8mBzJHNKkmBDD6SKLXcPTn45xay67UPizkJf39ma8weQ4ZebjtHZ",
  "key15": "3AL7e1cDZTnPoHEUuNJT5UWecXrZryWLebK9cRAQbpfFv6LaTgDfBrtjM655GuQCpf1tdkK8Wa97wZkYEDeRnTSL",
  "key16": "62tE8HrRCviQyVAdx5byejWY3BBEwGtRm1TnBz3pCZvL71vgron2dSGNvZmKw87FXxrPNE8qtXNvsZaVVuShmRmA",
  "key17": "3gPeZop4JDMJzSsfi6yMjN1A78ciCJJBsEGrpXALhUimL8RaWwq4gBBXVSd5FcJXEkCfrgWHTiDzNkserzawENwD",
  "key18": "25bQW1GsRHDcDLcjGGAaM6TFfozWYKP1vqKZcgEuYunEkzGXbYaULfekvUkdYpQFGEhCRzroZcteDcjdf9PFkBS7",
  "key19": "4buEWq5g1aH2H8Nao1SEcGiDnvLhm8bddbnE1Fxot19VkmzZbEfqK6s9dLk6Ka1qAkXac5Dz7w4SAk8p6jVouin7",
  "key20": "2t4kNUHCF58ns3DnnRkxqeaZckX7a4YosTZH92Y2mXbBjmWhRWL9U99MNUVqPgZ7DYQpnsXTjNWM39yvAibms2Fw",
  "key21": "2StfqaD4M93ck2FQHtH2RY7YKfmAtYzssibxMVLr4Srtu4acGmxdSrYSvMSffQf3dUPijFv2okkD6RiM91BnvRDL",
  "key22": "5caEBf8w9sASzazYFeUTS4VorkxmVum6AueKzS5xqzn4RzUySUQxDF9XxWomKnMet8U67QQgAqPwfJporSU3Y2U6",
  "key23": "62isjtEHx15JwDyqZwnmo8bvS5wtyfdeZz1ZDoiTK5KnUsvFYwWQtutrxkVYW8CSE45khKWKvzAKPqnHoA9WanAk",
  "key24": "65S5d5BRtDvEAnm6wNdB1qLgtPQ8JR12truzniGp3rqmcnLhD3sLUgReZ1KUAFYZDPpRudBmEdfPaq2sjw1JVGaN",
  "key25": "4znNJHWSmv4oEpoKV5f1pDj2YEoVqKtKHYy5JxSz3qmUKbXEQaVzwi3sZtitCsSp8F2g2azVaoLbadxC7Ms44v6w",
  "key26": "4zonvic9Zff9QrCEhngZr4tLyAdyAbrKkvdBfyG3KgjJDVJTJFoeRQmfBCVVYGaTMCKVkH5L4A34yfeUTZRUpnKY",
  "key27": "PPMjry3jPziULbFodh34F1PQyRbjdnQbUTTmvTSnEyvskECSfe6tYAyCZNn1GKGEvt2SFPjv3Ae3YRvDwCBkLXD",
  "key28": "225ev1cNSi6osjaLoKzfA6y7GGEHBYmASpTXSiHNcJ75HdosaP67b58F3QsPjK7KrxP3J8WSMV7wiJWSXKDnR4bG",
  "key29": "2gJnsfJcnYSvUXz4iH5hYyKgjKe3qCNyTQ63gmPCFkU5v3bJshXuu4x9cyt7VKtGvYg6MXm7RAYyPNUmZr7W5Pvj",
  "key30": "5LYkknY69wA3v4wx6TWHKwEroktcT495VWeNGam8w4VNFx7HsbDmGc6A8CK711w5KSPLvA5TWkhLsTp14CJAd8Ac",
  "key31": "2FzfhyoXru8XcDwPCGkneKdChqPtZFnCAvTB4WxN13u8SwCS4xK5S5nqCfEPvDAZGgBiE2Jq9RdwZajETJZbfgS1",
  "key32": "5bYyiU3dujWgwamtEPm1pjH9kYeymsHVXF33gFN1WRoMpWjsZRHmMQhJw2RaAiL72mAZm1qFHfjBUkVxaEEXixWn",
  "key33": "4P2YnR8SHqyvqWV5hjysL4aMqvGgkyG3wRTwBxtPDPZJF8KV6ZzsgTFNEcFZEEshHzWfHJBmq8sYjCDVrkpnudYf",
  "key34": "2z5EWi3RLGC2tNiniuBCE59c7c4HguaBt4nQS2wWkirSYjgWRYprvgSkJDrjdLg5i56qxus2n1DFRa4P83dag1kH",
  "key35": "EEhdrMNQraRNKCqBA7aZ3A9iaJ1usBxdGuMBwtLSuCHb8dfqCdRMBoa4hRMezaTBbsaGvQ8VLv8sCmETqcPmCm5",
  "key36": "2ed6PgWaSWhvVQL1bo64VwYact3Trvu7umfZQRq18wTsQBpWKC7A5tq1MTsv97TrPWXowjVanyHjpG3m22AeoXVs",
  "key37": "U93TNM1L3dmvNotSCXGAukkRXDDdSWE1bLRdrSE9HBFNg3AtFZrUntJYgJbSDjT8DFnuTALeFyCHfHvrderPjF1",
  "key38": "5wfzwNNWYuE6nJfcWyQbuxzz4A5VCFsH4XywRRupdVSxezvfLYbMmpmZpZsHZG5cMJJJbj737Spv2YhouT5Hr7rj",
  "key39": "5EZw3RuiEXuuwNEUt3SFHBgiuSms6t7sS9vgLCNdxEnJwv77Vx7dXEV2Ub6FPnDuYCEn1voePVgSaNmDp949dbHo",
  "key40": "46YzNVEmMchbkALw5aQbmwg8pgGPJ9iuqwsygWKtbto1kvBZDJEnb45E45J7MVE3kURgo4NvPDqZ8YmuhGCxap1t",
  "key41": "6nY3o9DXaP1wFcQV5jcrG43USM15MkkMHQ2YUDyZEvkNEJ186YJ4Z9QtVyVSBftJ7knD6VmDstxQqcP62FoMbkJ",
  "key42": "3CmpU2Mnmjz2EewfGoBqqs2C4bEzcUzKJhsu2FZjvMBBn46po3mYqbnbcjAfjAdFnHhtTy1UXzZPaBAb8pk7fTXD",
  "key43": "3TbQe57rfaCRDQr23eGWLDnznwaYMdr72quBcZxEbPDWMYsyMicSueGgEKF5SwL5fdcRC2dx2inanmj9UfAQmEBo",
  "key44": "4oeRgfZzf7ATSPj5bVeEKSnBG4Ccpirv5Agq82rpdjdaGqW5RKVzQvzrfBSnHmXQBPJgaK7ffeagAUQzBPB6cxG3"
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
