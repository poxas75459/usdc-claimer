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
    "5x8U8xjxgC6ZQ3z66Q8EtmGPAYpRSVkbxPuP7inWd4LsqwUPjj3NiD3VWENk61ao45fxdxGZAiMfWojHjd2T2eSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cc11ByguVr745cv4RCZ9PsP9Za18nqReZft6NRxwrn3mXb52P7Q87VgmBbusYnMd2bc5hWdTH5w8FidqWTAnKiE",
  "key1": "3bnp3hePSAJeRXkA8UBtRmEJm2PFgMLXDLLUiJMNAKDF4Euz4SNqedAqqgoFkkLZGKF3B1xCL8tWGQRX7ZuWu1W6",
  "key2": "4i3podg3trXUCAJpWKM2fcKDfRjFQ4nkX9Er8FPQPCZwaY3F8WAxfKYEKUMctPoa3N1fXdSq7ZrFLjpTwxDNfBth",
  "key3": "yzDKVGcQmMmusF22FLwgNkppsvFSSvUCHdZyzj8WPoZ6b8FXq5RHraG9eoakQE4KAXosjc4qBdA4hojCxufjhGD",
  "key4": "5zL9mtXiL6G1u7kCtHrDeFbMnTRo62Rubsrajh4Zfpv7ptrmrRDndPH6fpuBFjHBNM2qQccnKKV1LsnVjRBBi27H",
  "key5": "2r6YzrttkUwghFXvoD4rgCGaHHqR1a7iXmdMgjzDBDhsSQqTNkuu9stpk2kbFt1BM3g8f4f4gnrrGeHZwr1c4hDZ",
  "key6": "5optrbVTbynhYGHeQ9D4VFdi45GzNFuZvyVByHeUYGTQJroptKY8v55WcoUKf9jWiSLdm1Eyc1Gy192EmbJUFm1k",
  "key7": "3ifoZuuZA6qxJS6hECfSgNzrfjWhQMJw1KwbeAqDca3htNQfVYZTtJLb3qGrzGcUPcG6DJe7S2drzRwGGddveD68",
  "key8": "5cHtdireXTfoeSAa9b1H57umAbhvq18vM22kCTHPW5wNXQq1r6tP5i2Ugw3twr3PL8UkxBsfKuxiuBjbyHVQjHZn",
  "key9": "3NvAFf6UssQbz85FtoN185YQ63yH9md6NgqHCysejERkwqGvU4PnfRrF3zUa7SF5A9eekhEHcTr2fzaqc5ek3sg9",
  "key10": "PgoeW7xgrNvCTWVpohdxnKy3EzfigEsMMWj6TGYxgib4ayD4utJHFihTDF3GAiymnSWtnvq3mnSysspfXrcBJRo",
  "key11": "2Qsyuq6R35vdNcM6mvY2qy5JdZNgkEQ2WGCWQd7NyNZvzSBNEzMAmVzA3eYHZXodzViDuwrYkqeNKCbJWdhsyyx2",
  "key12": "64d3ZRNjJiNimD6RpEFzmHeWMT7QmDmvRPTPkbX8zdsY9qsb2v4sDFnjoYSHbbPB93597ZfzwcLyZmVLWvtNdnQr",
  "key13": "4LQ4xby6e5e1Z96Y7Z3gAqbvhi6ZXwuJwYGBHwAmc97wABKkdrNnsrFLLnV7DojPGva9RDg1S1KD5BcFSokB1eTu",
  "key14": "4J3hLqmeE3iAnPiF3Aj8m7LfDqBMpjvSdeWcLeVbBXVk8U2hDVBVM8fXcP156m1Fwy6Ex2pFiyJ7bMbm6XpvT6dH",
  "key15": "37t6cZ126UXEoY1Qrw497awbxj4BozJUswJLc7Q65PzxSZViz9CgQeCvUKBBmRWHB8W8SdEDahmyWLEoKAMktps7",
  "key16": "tUzekJZGNYsrLjz9ajWT4Pr4gjiGdn4BZAruQrW85qfEWQCLqHWmFDAuGJX9Y8VLL5F9Zft6GcfxPtYQkcrZRNZ",
  "key17": "66Ahj1iwccPDMNym4RQdy4sK4AyX81rDSAsHrSfKFfaks5vStAVeLuLr52ZCKpaSZ6MTRuqueXvLVMQB3Dnz9ja6",
  "key18": "QmcHKV9XtVkYwxWvuHqPkHRFxCVTWVf3GemGVRDVzm5NhmHcXLEmaAFvw1ffLn3STTrjsB4ny2RLxJkDWb2WBfX",
  "key19": "5pWTXDsQvviwoQXoF3oTJ3KQifZbcPKYiVw8EeUw46thGtEYgcirr88yZaWvahSHxr3PcadrN7py853Q9jAVG25m",
  "key20": "4Qxc2YC6DBR6Zc32otSCc3pZ6DzDevfshY5Bc7Ri2YodoHWRuw3jC4PxB5tfrbH6kvp8ikuK4PVSvMS5QMSf7Fww",
  "key21": "5hmjkd5Mh8EkQ9epcqqyyFBFLh49KxPDBtfCz1feS1zdLr4Uuawc4zioXehQnVktT3jdQof3t27XVvTyNLFgxgnx",
  "key22": "3g1cBEkYFhPuMEJMoiQPENyUBK8HkLHYQMQMBZ1zj8uUYE2cMamfTbrsC67aeChde6taJwibxAfBafBkVuAS1eTv",
  "key23": "63iD9BoUPzZ8DSTFc67BEFpLYDneCpTDMT6g574W9Zevk4BMMp3S3aqhsEvKArH3eYQ1A6r3M8SVsdBuEbJoGZn5",
  "key24": "VqFqkJw1H3WkifJZa86kzsXkG9QimpgbFgYiUczp92dPgCmX2Z9s1xh6JFQ8fT89nn7nRu8gwdPqMHvw4VHeLRP",
  "key25": "YrKDikHpkbXPArHD8gRy8SJSSYMJjRhM7DX7oEUS1szuMkAsmVDZ282A3oFeiYrjPsKqAgESsnjov11yVaAZ2JF",
  "key26": "Mmih5GTpFg6PbgHFimoYPrX5karUB1tJsBFoGyKWKyS3f4oLWWrb1shYuG43Jk5mmRW5u2bL1MZn9yU1dQFsEbK",
  "key27": "t7qL5eFZp8zRAcXcpdQQg6pC5EiPQrgwooSGmhHhCHPFdbtcx8c39ttQzHwH9ZjjWZqQ9QSvNcGNeeqDex8qvMD",
  "key28": "vDctSLA74RQvvDBMaucevs3Di2jU4KMGsCbL7FcK2K3oTudYqdCo6FyzQvQ4KW37xFt6TGWXtTLQJQqRBhx4Lf1",
  "key29": "24taT3SerD5Nf83KkpsZBkXzoZDdh3TgnW3bazf8oEqWJCvWDsiZKi9zcxc8jb35X9rgWtnokXHxM9CFC8XEZPeR",
  "key30": "3HFKFdukvw9p4v7RQva5CdCWDm5Viz7ZSkEntXhuFZbBySmUt9T4hr783BS521wENJUxvDtW3jeWX5XSCxviN4DQ",
  "key31": "4DBAfbYMWPcVn84r63AnAY4AB3iPQPVbLa3kL5fzJS5LWnyNzNV4mosmR211twKC1tepzvm4RHMoiQsvuMbQxgZj",
  "key32": "32fFaf8DDUU4xxia2XR3ansstQR8aWkj4uByxs2Sxp4AB7aLiogHxYWvdwgieoSanKuQYSG7CdJHJDcRvRDyqX2e",
  "key33": "2iEMqVqNdywjmBVEiMBcZLWzvJ6KkX8fada9oprsqXLFSLcv1EnvPdSuDF99B3fb6MNmycttGGAvXpN342Px9hHk",
  "key34": "3GTysTDpHJA8QKydynqpifJXjb1ynkwAuZG61GRJ2SMD8SStvzVcHsXctTKmPaNBB53ZgQVqpBMeyNqAVNxa7BjH",
  "key35": "4AaUzSSMk7eDByG19JB1g8JYTSvGx1kAUjeDvPX1aXQtzb9cSTx5yct7cJSnKaTC4N3R2BrxgVrAGA2g5ybJzh9F",
  "key36": "3KciERX5ECZgdJAJe3XQTM64yefCRn8YbAVyPbzbyDmkdvM12nDwx2RQr3BcajoZsPvE4LWGP9nqgHE3ztZvLdrR",
  "key37": "5jMJi9c8abRj7CZfDBgUoDcLaapW14zNL3CG3i5wjwdRPh67Jo53MgBQP4kj5192pTtmwLEHMn48MRpnYFZFosWF",
  "key38": "5ho5bjaAjLGo242C7tAfmLwJ4SDLh5B1KginDHZ8tHwFFEvUwqZxn3TXFjCaeZwKPna5muphyZNky1RCFjxSTmwa",
  "key39": "2Ctw9eAPSsdQsX8VVSuzECR42qt9KZNf5MXhNunYMVFr853VG9HfqLXCHQu2gpFxSbj3wX4RrYneRpT4J4FAjfxG",
  "key40": "5wuXXGhmPZmK8vY5ui8bdbd1QcTBzPY11Hi9PQe1nZNhbZtEDLnTu9937YrtdxKQ1vwcXJKAADr5bdLVeRzK4LV",
  "key41": "2XuujtfHU8xNWdaiYxGDhu33cE6s3iawQh4Z24rYPckeYd2JbkSLSBCFHiYfAM2JWHiBsLmv5XZ2wzcBMzXpQ7qx",
  "key42": "PQsCmcULYthQ68kPBoneqNej29mMZxVNDWCPdSp5oM1szZwfwkPS99zY8fmnbxhpHqRXRLDJoiAJLsNnbKdtekK",
  "key43": "4B7DE5iadenvJ8tvT9Q47cNGao5vUAc1XirKeb799mteLneyw3T9cjCuBjYG5dw9j1WN3fZS1M1PxUHcXcorMuQQ"
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
