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
    "2XzxdJX8ECFhsA5ncY1gWy4kvMgBVwxWNY4x4sPHbn9BcBmDy99hPBtxpPmViDXsEU2umJ9TCt3Lg8ZiJ1Gr7fGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DBKduGiSHjQ3LtjESLM4Xo9NTHgeVL2vQHXQTM3MLBqqhqta4LdtSRL5hptd2RqUe1fAx3DttCoQgx3bkspy7N9",
  "key1": "44hW7yLTVQVCH3fXoVC7q3vutRiHSAzyxYyvMCZWSddoKvucvR4fSPc66jLb9u5T93zJWTZ1GXApTNHu1n9hyJPN",
  "key2": "oZVY2i9jY62rLbDEc6VnsvP5vdZ9hSrAxAaDeEoVNqYUns19vrE1PueZMPNAyek53YeJhRGsxMo3hPhKWmZ5S1v",
  "key3": "3QzmqGpndmN5GxA5Rt3niAWJf1BLtT7AERp82JqHRWo5zJHABRtHw66wKz1YzGbehZjzr6y4xuigkVkAwdaRKTPs",
  "key4": "5gjdLjXWPFrJFDom573B7BChXpb4ajJrfwFm2rD7Mnwvu1UNu7Ln28cq89CeUgBu1BHRzU3ezdtrs5EGNFQFPgRE",
  "key5": "wQCF3C3Ca6yMkiNbdno1FZGWMrgmNrfas8hZkkkfAn16hsh81SmH5MvGy86xn4ZLbqMjEtfVSRm4TJ5LULNMZyA",
  "key6": "2D2Nx9VZWjMNWmTHdm6BAXokgXn9mb1G8ZwA5G3yXLKqQrLs1mrGGi7y5njf1Duz6RrdJv37gRSqDxAeqYuStYS3",
  "key7": "JNTPrLxod29EYTZBgVaPoWPVLxPKYtgH2SdDdvHLwed3TWw1e2vaEWpLmEHpBxYQq4c6DWmn59UisZySaVnZYJs",
  "key8": "u7qFpT5ineLnDXHKNSPNHx9yn58SheH1nPWorsXvhy6XoVBcgBPdu5Fy6CGiGXZxnBq923RdxKDmRr4Nz3bZiFE",
  "key9": "65TAspS2yj4NTr54gvbrS8zg2UfFoi7gS5Tg8Ecax3Kdf6TqzgqS2wABNuDw3FB3G7nzpbMTHVPuJqsNDxNDWyYQ",
  "key10": "47kwwm1riK2kKdFqzkUNsshXeaMLP73giotucSL6gPnnJyKQi1ubpFafrcCR4Nk5srPcx5AeaB2visAguMLseVKY",
  "key11": "MEmn2ZsF4XD3yfBVenddXJqjhJd6CoFFKxWmSix6qsKdzjNY1kMEVhJLuEA1pyChyQGcT2JqqsjJv8AE1BPBBJ9",
  "key12": "o9XyKJN21V7qtut9xKviYz1pDR1wRSETYiAFFgx7oFvSUQva69ZFnz5xjjMrF2u8QGK6ePEednRr5VupFLmpLZs",
  "key13": "eJLuJKYZkVRQHzmXWEojbBNpH4FyDS9mkDUXx4adssqPfqtSstA9mRY12BJawqUgJD1jdNsf86Cv6YCms1fDe4c",
  "key14": "57gkY2CJBgwB3CcbCzu22eTjq32kaLg9RBRXPVEPZ7bsE3qHaLRSAoXokXUBd9dTRsK6ZLB5EVyxsPqvyMuKVcGw",
  "key15": "UbJn5Wi3KHHcN45Gvkq8ZQjQTpxjrTdYshTFrirdVLLtxPgcuUJj34XaotxsEL6ADfrrPum7G51Qh8N1nrXRQA5",
  "key16": "dVLxYs2JiaSyqhVE79cadc7epGSDyGKsUGumQFDZjbFguJjCgtuhiVJQcxQbWgAia3bmKLHjo1yshVTEMQjJLr8",
  "key17": "43DgP4XTS2gfE45jw6uVsMem8D6st8Rqz4P2m7yKShsPopCVfsi9RMYRKeYzEuTWMdnc5kgNKSLAxrTNNTyDjSJ7",
  "key18": "47Wd2eDPoTWH8CyNvecxhiC3WQVMxh5iU1ZWefAsyT4wS2PruDKqgxoPq7BKd5sH5rYd1rSsaLKkzMnTMdbLZsJC",
  "key19": "4ToQqg78gVXCvNCk3zu1Xc5zsDrwPWUyefqBHjGqKd2ToBbfFWj7VPinHSW3e3852NB7LXpek3D8niemjAUB6jfT",
  "key20": "4SudGx9iLL2UrgoKSyideNJowbtyb1hJViYoerbT49N31CiHPkiwk9Bm8edFxXyKARm6pM9HgTxWsAvHnPKVEKeJ",
  "key21": "2j8ZaKYyuVoYr2y8xBn3KAUDTJKJVipQ5p1jFnirmMpUjnjK889t8qyMuu8mwXLxiwZwrbetUrLfpLkGybL37BiM",
  "key22": "3kUeqNvintmNhn8UpeyiwS6pNM1PmiX9mF3i9bobzFr2eVoRwdu8eqqnghGFMrck2Xp4GxSdoHZgwbztgRa6ARJ7",
  "key23": "5kreyew1a9HrYpx2bucZKjpyRdQgrFK4psowcLzWTbF799dd4r9y6DFSEPn5TRwawNqiBdmatRjfh25RSKGabySs",
  "key24": "52Z5qE3RU9B2eRnfMktx7NuL4FjXSy6mQWJPjzYzGiVcuTjJCcnvt7zx8FH2JGkc1tmb6GTaWASXbisyRx7dCoCm",
  "key25": "5k21sjZYrc2fD45Wm3mTetXzJ5h8Pg7YUzuSWciSWcjhzfiwXUbJAeaCXW5hANScxP63SodyHVx2VMdXNVepbrh3",
  "key26": "4GvNFsWiqLtCH5TSRo8seM2bKHWbkbzWAQzHEqcuFsE7do6X9z4NPyyg2tynbibNzQ76wtcgW9CNHwjDampsZVFe",
  "key27": "4xp6NWx1QxSE8ryM5rmbqP1pFPnhZLsVGRjqnSz4fi1EeBHNgPYvzZACuWC2Vge2ktn5vmgTkvNkPoh2NoxQVBVR",
  "key28": "3Um4GmkvbqfVNx9rsb5gr7UHidCx2GDBGeau61cn2g4e59G1FFMHr9E2H2FtZjg2Ghr1tdSzeSY1wgwgSAC4TFDr",
  "key29": "PeJYRpiZTubFbQU8haDm4K8c4mSqfCbudmVtqv2faissJDbxscJdkAJsWkbwTRQBYwd1fWGxsAc7xcgQmWiPY9v",
  "key30": "3HUTeDBA8NmNRFP6MbeHAGfdRWHtxDZPSPTqyCUEMAuTz1aSSWsvcqPeSrBH26iuCfLhjf9sDjYNTzsBDHMKMboY",
  "key31": "r3xTgPcJVG86eBBzt6kkAChDKuPW6ZvgQpW6z17zXQz2B94PsmntfzGDcpLdx3tdEQAPAnbKT7JuhZSLygLeNwE",
  "key32": "26uZXDmkMBM4UwtNQBQJDD5PqMomPzDfMqsXSVU5RrLvJWSBjJivr9dEo3TPTdLq36PGQfC43bgK6towS1x4ViZC",
  "key33": "42yXBAgyjTKDfAMEA4fH1SqPk1gE6FACoLu8zmPse2judoCyoc8NTHdLr9NuyHUUqcV3iYaUo2d3MYiR95Cv3Yba",
  "key34": "4waSSMkkVp8SHtZbRH3YkfzCaeTbXjQkJSi8TRPRuhDAtR9GACg8THSzSjzFXsXy4V8qoxtx41VPuRJmevYb4q1o",
  "key35": "5HnPTdUpbm75V4U5quef6p5hYs2DXx5aNKKcydQKyFU5cjVME2Y2zM2VKfnpR3EVjMECZp3Fb3Z7WHo6ZbJdkuht",
  "key36": "4a3EksKASgbDKi2eXaAchTjSusNdBiscmGEZvfvtWDhPDoGBecqdpktVDyinaLCi2v58VqmSs7hJxQP5Sw32EDR1",
  "key37": "pyqtSvXRLkhCSyNavYTY8cUcjSNbaJt86aPcxvUZVZ1ro95q8kvMWQoMAMKTC4RKNHXZiq3LfvLw3VvFDfrvwH5",
  "key38": "1exH2pPCqvnosXbpeV5GnVznsewVfJwUcvfvcRPBF5VHHKmsftvLDfyJepSAdKTm4wuCTT4gujG2M9PrvKtR9rt",
  "key39": "tJnZnupkNp7CnFJ13ZRX9mGnSDnuzMFmFDd9mCCQhZas3UtUSTTJogQRSFwvTzoGncsG1UFLU6vC2EvCw9ZSBNL",
  "key40": "4G92apQkcLddr5JmHSN4FEY9evShZTdon66LKm87BQsBSxs3TZHicd7Ehv4b81KXWH2v3NQY9K3yNAJEstHv3E2b",
  "key41": "2cuWBeSmS3ZsVMwe9vSFWHSqw95Lk59pvavrLbQXQEEhxRKMbZPj6v1zFzUBoGz7hmSbknKA5zQHZ7yP7ApbnyTZ"
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
