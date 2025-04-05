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
    "cr9VZ21divkYbpExq9itzML5ErQDr9m29SpyRsBzXEcoZY2v6N71AF4Xh7kVT4dnrCDsZ2tDJL55FQJ1PKVj6MX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hYu6MFHVJadAV65kyAZC2DdZBYE4kBvQBuWEzDMy6kQHXbnDoccsSLYYKMEbBfbjvU7DbDipdK5GBhVfPE4yKca",
  "key1": "63ESzMvvqsQupinnGRFKBhgam5Q8Sm4F5kCAb4mnCn1pjWt8HhRbWEGYsrLvFWFEs61TZw1G8w5daHau9Y3iYtoH",
  "key2": "51fhCB3FNDnTcuHrxwZdcpNxEjLsMVLJy5tgpiFUod4yQnVVuXWzqPz657DEqLGy3GrGJwDpFkirTZE6pCDwKRfn",
  "key3": "5LYfzuYHT38jMkayiSZEXDdZJErSxdHSUMTUQ5VLa4xrbXY8k4sMcG4mTNzYmnLZgacrzuKqeWryHeVb8w2Kcc2W",
  "key4": "4KoLn5SaSjTjUgnVz98CT3VMXcgNXey4uKHPc2cmScXfDGCCJ9ybpd4e883nAFMm4BAjzc6MScg8KmffUgx7SBzf",
  "key5": "5WfKJYTF8cy2jk3gAG2eifYydxbr6paZ21gce5rKFkCG4emafSqKgQ5NnBgfeck7nUXc5CmRAZm3mEZ3A4cVfh7M",
  "key6": "5Dhvn1T1YtYDi7MeawLwb775mwyhfNC7bFGzYQeZaCmJBuYhp2JsNwLyVBzrA526C2zapovmFcsTRbGEkiLsoymy",
  "key7": "4Yb4TeRjJt6VTzmMXS9TUAvACJxiw9vU2QLj9WRCyozPiFDrUHoWDxVmFVNxztzk5NWkYQKqHeB86p8UUrg13Bea",
  "key8": "5yH2Drb11LHPo36RtPnWdMkuwviPu21eY75PffbSU7pcAoEnF88otHQAGt4FmbZoH2NoVyc7GjgcjnWw65SzenjH",
  "key9": "4g85yqksG3AwquVovQygch6BCAoPiASweHYUfKKQPDXdedgryyVqH6EuYqS3o7c2m549MtzmFZ3SBPWefQa7TgsY",
  "key10": "2ekGUFd4D2GQ61C3DoLZbJmiT9MkDHXBR6tsUc3ZK3uPqmnPWHkb28cqpb5gSsfC3wdBpDkWuZxb9t83E4UxBHzt",
  "key11": "2crx6u3QqXz7RcjewUtdegJu7oqrpWhBVfmoWDPL7McfkUUBJEzUPD8qUDensjRCRgvsjpcRzwwBDZo2m1Ljap77",
  "key12": "3JRi11xbjENGkV5xVpq74rFkffqQUkQN3e7zcnbKaVgu6ypWoP9uLjJ24CfD9dvRvTHTs48vDNoY7fgQazXGHRr5",
  "key13": "5d6YR1iNSJbMuK3KKDRpoocw8TWkWTDRarmv2XNxsziE7z81ite5spUeBQ2NVwyhtSsqdqBoQiFCzAezahdkZGgk",
  "key14": "2vJSqt6BCefNPRypSSCqMMCxnmtzLqwnbuR7QDkaqSxjxvY5bPiYUF79ke13uLV6KGnZFzobHWVfYpSLJFztgYpV",
  "key15": "Ct2rZyuh2imqE5kbUD5sBKLbCCVGVNWpZeXRnkJB1tjFErK7nyciNEu4uygcF6HFvzCLeKShi8S5hwyzu8vfhiS",
  "key16": "31uzJFZaWU4oxNByUaaDdpTA5EzejQupbCr9LkA9TiuvDwb7gH4FYQdSSvAq83LAGpzNgefpmVF3fZ2AMmNuCu56",
  "key17": "54gnxKna7TBzPzugHq1ogos147hysQ8H4YQbtywtHfKrabqX89UvCKF1NdRzHyjohDA5rWF3HrrdMcRsDzgrUXLb",
  "key18": "kVcHD8pp1J7w1UNg47C4UMZwmvorDPoKv5KVMK7PWAb2FhkCxuvxGmypoJzjcdnC5sVAc9coGCMrYEN9NnJyHcr",
  "key19": "3KjKJ62cFGtdwBeDoQNPW3mp6FxRQZS45R5dMdCuDVdSBACVeL94qZiXitMkibZT1YUFNpeKE4RLzHojinQmeFz5",
  "key20": "2RmK2wgDfJqke2JiTrCkDDHGPccukvUfydi59HD54EZBPiZA3m6QHDVTZMWpNndgEX5nHY4ZFHtaV6oShmtPqLBL",
  "key21": "3ZBxapTd2Jb1EJ5EJ4ULcG5FzzodoWXBvN3i2WnaX81HYUmYBerLwSJDx2S9UzGgEBGPmxBZxHhEWJjGSARTZ8qz",
  "key22": "5CqduEkk4H9VGv23rxRgnKnfAGrfdGfM66cRRbenqXTKR1uvhvF31CdigquKANutS1hemdTPCRkGBztwnpsREXbi",
  "key23": "5QFfYZDVWhij442fErqeGiscrs83jhVVMq96Tgpx95NXPz6fEgpj8Y3AtEQhD1FyVLipEbiMTv8hZ8c3zBZbrUr3",
  "key24": "56sFE5fG68as7Fh3YhVPbtsobDW75CKthhJeBLduDhdJLaaMSepw5zSvFeDTWV5dGBkeg5C8mNH8Tx5CAP9c2Exj",
  "key25": "JCu8vB6cZBfKh8Pndqyi86w9EmBTs1XdVmYpmHW4y7Hg2Z5uqBuozM8h76JEGicp47bcYdqfScGxAUo3EdH6Hsn",
  "key26": "2E3taxQVHMQa3bAWrcaKeudcQVhfbHHgjKmTcVxkywMDrtJSmbWwrUD9nFzwRGcqhonsB7ywqz2EhUDfafesLgXk",
  "key27": "4RXsoGTJTJfoRqrVjWf9WCjatVD64aPteaFfv3AeWjAasYN6o2iimwLXKRFPPsa9AyZiAL1Dt6Femwe6b9KF4Ptw",
  "key28": "4fZ7FqdxvJbEjrG7KiWWucBXmLHHks9wTXAPVbbRzQxBT8RcYcrNDgvVtQUZvt3FMoaAXDcJFsML57AxNYEA1KRh",
  "key29": "28mKtE6kjBUwVZR5274BBjR27HFBXwvHsdZSHmLDK6GVdEjkW3NcsynBu9NZGYd4huVmLdb93YSgKf2ah2Y3J9HZ",
  "key30": "3ewFNmfAm55j15PXTxNr6xTganwnf7SFv957RYWKTyehC3dJbyL8L74k8gDHNcTTXoPzSXJrQkV6jC1HJP6XV49r",
  "key31": "EX5qYwR5qeq8ihJXme8L2qscuxz7RLoMk4bwXJQpXdjpVHtpKeSJXGStv6qdKRaJzNdcExrefXNGYgrzMo7kLhx",
  "key32": "2tfMc7pEit67NDrhz1PJEqjdsuwxJ1bQp1iFWaYXDmnTHzB1Zfvt6LgJFjJp4Q5ARfwpz8dCCsxsjt2sas8XxBjE",
  "key33": "2vNRx4N6xnoxYLusyohoJRcMs97seZojcjCpR7ziyuWanXcc2mwqH4MeCdoSHC87zVLFgyq3G8UwHZLRQ71Hdz9T",
  "key34": "62xT9y8BE3sX1KVLj92podm8X113PRTtpQXk337CXACXb1GkzNvMhkgNwSfXhmXdstt5HYFLEhmXp5FsqBKg2uQa",
  "key35": "2JCZx98R6NQFTLLZqi7xhg2KYXqZktN4AJQVhocMQcDa4rXL3qKTeNnDZDHFx47Nf1rW4yvvRiv6YitN91fitFaw",
  "key36": "48gHmSHWRXxFUhgdwRApKoDZuyAuGHfsJubAmZnDEouphcwwwL8WvGUc9CdmUMeRaEnBeLWDCUHim6XfWonPc3Wi",
  "key37": "3DQGX2NCUSTfTAb52poWeEqg4zHtnictVe1JgNXfAGVjXvZSagvPB4XGXELXje7SNKF7vYiM3rtMoGyHQpopah9a",
  "key38": "3zQnkde6rGnqFDUcLwbQ9kCEDuwpGXrjx8W6UcRpGCkTy1LY2gQ4HhKbjruAcN4bC8J3mqBJQ2saitX3VcKEuo9P",
  "key39": "4yYMs4Lm5au4M4ZTa49AtmarBUFra8NEpGPDaK6wopiu82RGcnuawNM5Jp1okE97G6cMzpk18Hs9ABYWBBf5Luma",
  "key40": "36e3mxneyCkT4Vb5FD9sDSsPzJisVSExkaznmokWoigzvHLbhxdMVUegWTZDyhgYQVHsE2t1h6iQ4XuyZQeH78KP",
  "key41": "5RmW2pXF44t8jy2gERqA3fvARcwRJ2jJP5eGWdNeWYHwuzZ5bFmvUarE33WSa8gKLyZda9ihFqumocrthB9BqMtP",
  "key42": "QVjs8RHenxYyjUUeNkqKY3eHZKoexhfrUFjMXtpq6uYZb9ggEQMaFehzpPrgdvzqQDCMa6UEKMu32tuKrmVLMnM",
  "key43": "42BWg4sHLhsXRZpdsDBqbnjDTS5CgMeDCrBe7zHHHyQU88tYeefb2sehrnR8BePGX8EYUHYHfwt2zjwRbxmu3D9Q",
  "key44": "3RziiN9JkbVC2nfSu77BbBvuEuXYAXPZ3UVmTuoz7goS6eyRQ8xKaCPNFiVbC6BTm67zfQTW1WnVdnMkTpmkUdK",
  "key45": "JsBW7mVix84H2bZgdbAuqjSbQCFDL7KF9tErLo2Razo4g2jvqJ5f4N411BY85gafcarzS5zwxTzCCSQWmkfmr4w",
  "key46": "xggBJaYiraEsg9t539YJpRaK8bbfZrScAPLoUiV88goz1vetJNBoDA3ZtgjtYYtd5Lvb1YVCFJnbD6VFCkXLzHc"
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
