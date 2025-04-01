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
    "fnnjM6MfNDm7Pn1HuFNer4nVETBpXGjzQKTYEiv8mXU2wvn4BVQ6PqNxyUJCYbtJjMrXL3ueNAhJuhruWi9tTMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sx37joj7zUDLFRvcjAsX1sGHki98ZFjJQVLDYT2aHDnVTjE6ZbaEvEiWyshCa53TZi5np7H6EVG6kcDfmkYDSQm",
  "key1": "479LHU8Dg8WEcBZVbrjWzqCxNsp9M85jsn1vUPRQ99XBWFt3E97HHEu7euyNto4Lvk2u5ZwPsAhU1JautkEFGeaZ",
  "key2": "269AqU49kDenPiDyPg4A7jaaxFg5g8ecfNa2VYQfoM2d1ufyb2xmF3badmLcS9ggTKCkR5q6Cn9Mwtt888UEpgUG",
  "key3": "DKY8uvxVLMU2euLhTAeQaqk2broG9kxnTsFcoZveLWs9K6Ppj7yk2AaJUaXg7Y9rrYVNAMaxdA4XLJvdV59obdh",
  "key4": "2NkQa8XLYQKivttPuzaHs7sKuDAVvQk5iUxX511Fm1MhtbGWCLBbyq3nJCWRZvUqFyG8thpVNQEhYTEfAAemnPdY",
  "key5": "4jSWwR984xg834HqL8EU7sCuDumpWqjRHNDQKxWWqBPJ2HAwW8P8ZFy6hkDZTgvYaFaXp4SRaLsNJ7XG7BguR8pe",
  "key6": "5XHf6TsBiA1tiqPfPmv7vwJV8ZAgsWHZbmfvD6AKr84hKN5zC2391xirWgHW69VKCTUoEtDcvx6AbPpexWPjv3vD",
  "key7": "4Hcjk6DgoAZ7KJ3Pmb4s2vTobFk2AjnJsKwSMRidmTjUHErx7r1YbtM4mn2pNtyprt1FqAQQV74Bz7cvArhVT7pb",
  "key8": "4cq5U5ZW7VFXgzVpY6SFYxPomk4iNJsi7AKsf3DxBeLaeAaiToYEY2HDzu2JcvxgThrVDgnoPic8gYa3ADVFiRPR",
  "key9": "5mTFoTYq4zLEvptnoJPDcP14SHBQzAWrGZg1kHHTgSLyizwbSbzpoabKnXAEJems98L44K3MpZUAhAdfajQBokAo",
  "key10": "44FwcFDGTDTTiaPT7TbSZY7HLvGyeYbrPqG95vCZtvFMmPL2kDV1MRVPBt7GfsKy8oHTUwk7Y1ehQEJwm5xfDprM",
  "key11": "5LqYrPAKnzoxuJKaGMrDcS1MP4Na4Roq13jaPBsGyyg4jEZLkXac6JBboaJkW9N2ndbuzPLW68dXsRFBuz44dAVV",
  "key12": "3hX9ixifsifmEmEdrHwRoBBz85yAqxZPRL6KBQb1y1H5phDk24ecXUJvTq4TkR83BxEyNC6LJFooJgkinkZCYuez",
  "key13": "av71X6Kow4ywJrJrTaepMVknhQ3YiUUMhceH9wnuBgDUzu6run6zZgfHR2c6YLUwZmwf5HmKQp1oSZ4zT2mzRJU",
  "key14": "5pUseaPHngJ1u6Vew6URKQ5LFxibqt48ZfQqQRrD2j7wwDfUiPjh6feU6ecxxcrKhyMQPSzZCkwKDX3WhKDsEoHA",
  "key15": "4rp4NdeRtj5WfjjxZgWm1NKALQtaMEQ7dXPp3GQfVfmNoQmAuBNSLBzkpWm1EMqy6dHbDCSi77owGdM3kGjPjo5m",
  "key16": "2ZPsuG7zw76L7Cfp33rMnxfrFTMHDdqMnE25qPV7tpWEfJNTbBGjcpVrtQxbXPoUTcmVjMN5YpLptpuM18xSUkom",
  "key17": "NWjpGVjVWap48ckotz2iokX7vvLoDU58m58TN56MYeU63FgtL6QwsoioUKnj27UZy1RoS3SBEzVF92NTefrCw6k",
  "key18": "4bGQREVPuB9CuJHjQEfuDPMpKcjkSMsxD4sBR4FodiKDXFmfjmPQgCcdeSySGqUD1V1Y4fzPrPeJrQJaHVcL6MNK",
  "key19": "4HENs4dKXyag6J8bM4grkcEgHbc19EbNangFvWvwpA5ZNPo6teW8cSVKgKfgRmEQvwPkByBZNe17DDuwQGpc8vy1",
  "key20": "TT5u5PSoewJgPL3qrCdJkeKNXTGiBXUJxDkmB8vVcPR5zr8jSLKyZqTfmDUcmnZe5FsF2KVZUnUs22xzeedRKL8",
  "key21": "2AEuMBEM2NP6jRy6r5Eqs1mkvdyz1yi3vLQnN1u6eq6orCSxjdPZzP28nbk5Pvj9jcZC14yNFLk3qNNPa7L87WLQ",
  "key22": "5y2tk9b3EX2E6xh1MqHUMZ1TWcokcgYdzinbRxqiCQPdRLxsx6kVCbh3g7CCqRc5ZtEk9up8VjY68d9AYRX6otmR",
  "key23": "53cQLnFPY9N9P6FR9Pd8Rss6WWDJWh6EhMw4Xncx8KLLs1eD5JEe74A5ypBWeeoTTEHVbU5RpK6BtWBDs4Xk7rqD",
  "key24": "2m9cTNQogG79q4XZrLe49J5VqTBL4QtgxTF1PNxFEsf1V446jJ57oomoofBWeRXCt61mFZmDgwbvW4yuwP23iwgg",
  "key25": "hiEbuXDUSdwougoZnHsJVfy41rAYfqZvjGbfh6Uz6PbWou59JfJs4PuuFkKf1b5tTnR5acj6mDdrFFN2jP3fJ3z",
  "key26": "5LuiVxcuFx5nW2jxnNne6m9P4cTaeC5PNDjnujJPYeYWDDe5hnx8bG2E8vZQxwkaq8XRsBXPxRE562J1wSeokBnk",
  "key27": "3xN1rRRKGBCn76DgSmvyU4CFKP3uz95ijDghQyQbP7HsDQHP4tpbXm7n5T3rpe3BKxguAFepaf5NLVodPqNxDneK",
  "key28": "iobCCZmQUTWjyCXKPpaESFAsWeiD9BpPc9jftfkGi41Jvo3K9KjyY7tmw9wUHxPW6tGbrK5R1AVvKWb5hw3WuZm",
  "key29": "3EwqzpMQCG7BF1UwVEX5P4VYhW5tGkxofiK1519c1hYKRh7Yi5PcdZd7RVR4kc8BsK9qgCh5AufHDvtMqVSoaiUh",
  "key30": "3Z5QAmBFmx4eMSu6RLky65QP5jRu2YNh5kaqsJ3LTVm9r1LgGJLrR1316teJhDUnMJC6w8AHWCNzGMZHdMFweqYh",
  "key31": "kkaUEJPURRBZPfzZvwgrF7Tt7LB5gVUsXDuzbizETfQBzB97NmuEsQnfxRR2wht839UgFQUz2xBmf7H6Xs2eFGp",
  "key32": "5Qf4bbDcR4uNyewyzSYsrJ1YYbQngNdmGEa1BocTCNgNWKYJU3fcyRp8naucW2bzvJhJRozRXUybBGjRjjYeneq9",
  "key33": "4PSZaxWV6d2aurSiY99YLG7qSnY558WniZymC1Az2iEUm1XTHchjDXSE5qCiM3w2eWKtKSxQxUcinBZFdqtBdUeE",
  "key34": "qrAXeo1ZJt4R64q9sv8TdzLxtvgNYTqsCfcBaxdTN22dZnH9HEvVB8aRFZfSbsZpC9zeTHf3CxTQxRBt6jwfw1B",
  "key35": "4aLtp1Y87t8FLFBMug2tqZw8jc8x2ahwCXoZvd5eu5Bv5Rx98E9q5jRXHSTy78hPy9g7YWaYV2gR55MNys7di6pw",
  "key36": "hHbkS3JpMmC4kUaVDKnXjL4TC3oxYpngGgnMGeb4fqT3FQBEbEBRro61wfMEhuUDE6hJRmZcYykX2n6gnEvMVGB",
  "key37": "L6eX6Aap2r3rS1DGk73aLRF2SAHyGrSsw7bdvAVkdaMKBSUskZRKCdUGoDKTevmAYtpc2rEx6J3tSYw9chzdngn",
  "key38": "2yBwMiv2GYnGnqWJHQ86S16YvV3ty8viN8hqFhBBuaMCzKGxtXxufv84ujHZZ7UNzfpf3ty84seVrXFrziTzkJq3",
  "key39": "5tCTFqaHzv3HKmGBqwpkB6qWxz1E4FE9PtkA45kFhWEhqcdg2zZ8XB73cE7H4TWibsqNHtDFg3Wb1SBG9sedSpa9",
  "key40": "8rmskVw3j3cyz7fmNLTaigu8PhS33AoxYJtk7bTAmp7ADC6wegnsjUZWAykbF4HofYZAD6MrHY9mcmUS6tGmAJr",
  "key41": "57GkjxVmxWWGYA9ixQ2DiupskLaYLLQpW4Vj2wLH6B6MCtFo6KRfg9tWkefQce6c4R6k554FnUnthmuDpLiYSQKz",
  "key42": "8xcsCUh9yjAw3iLRnff5W45kBbTbF83BydLYQVaRJGoeifSk22MfRRUB81kLXGYzVZ3RbfSTFJpgWjbpuLoXW1T",
  "key43": "4ss6Hx8mmAhVLtcSG35yCUM13WLN7tTAB2bZKQ4r6R4vWekKcL436vEbZGCR5AAAChFsjHQ3PhqEdnioMMZ66miD",
  "key44": "i5ys7mBp81M91aYVnpEe7yWSqxZT44cYpe68W6WaTPsk4V8HC2wXiTdmWccGt2DMvVc3qU9E8Yeu3UvhECQ3f5o",
  "key45": "5G3VWmdgs7sdWugLTGhXfGhbxHxkzFaXmNSoAvPGS4vxoFEMNRgcTXXScpPiSFSpyGDEkGzWF7WAdwKuBSX4M7i8",
  "key46": "5oZD8Ew3wrXLrSVRRb7pdcVWbbSXKJj8qrMRCBfKfEDaLtmm61xA7hWhH1mz5SUeGt2jXrhPk6TBko2T5vC2favc"
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
