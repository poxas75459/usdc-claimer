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
    "25dB6GBCXLnAzL4QoakA5XDfHFkF1o46icthcdAhaAYjKqULmmhKZSqjw15PZ9pPNXmii5L6SFzoF8LxLdJSafDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZJtfyQUTetb8D9FrApDNDXqdRTZiJL1TRbwTeA15MvaUDjzBE3mrvxDps69kZbKuR646Ydo1UwiKhtefAptEsjw",
  "key1": "49cKNBL3heogE6nFnqYX6Tx5jMaQGJ9pisSffZkZBveBLgZpARi2vBjcQW7gwfPYmGhRVLAdDGSXSRxLR9o3iZG",
  "key2": "5GMHZ8U3ob7xqTuZvUCCkvyWM2zYCAbpzVacb42WX4i5MxTMtPVhJSf3V6iRmxQTppx2ToWt6LW4AY6Jy5yEuhJk",
  "key3": "52e2Gb3eXgLfp7brSv4CXR2J3kfxoVDhVtc736yQLgNUhee4SwXYB5bwTjRbNyENMfMio9LbTs7fDpFdyEvEcqxe",
  "key4": "66mKvELA83NUsab9VzBhVT8BnmM5KuGZYw81XDqM73Rvd5hmUFHKqMVM73Yk8WWskXYHT2iy76fhq6FVB88AuW2Z",
  "key5": "3GcEPWRuwzL397PbW8zMM3dxNd7pSLXv8Hw1WUiy1gpUqVEu5inetXsBx8hfdUGj8p2wefNTpmmBN3P6FNx6PQXN",
  "key6": "LQ327MdfJobxnapqvbXqvTuqQUTRn4hZFXXbFtzyo928BNico186WDM1216aKnafTd8cgpwhPnbWZkTgbt5CwkQ",
  "key7": "2pqZCEj82T33ESHjaaYufhkBvvxKxvZETaYZTvqe67i5T2S4oavjDcBdVbaVu3TUxn5V3s241bKi8Wk3FRbTT2Zu",
  "key8": "LfUsbRPry8LNPdgkyfqidpsX6xoemm8U3TTES2T9uRkVRVxgtMcQfQyiXeUeMDsDzzwxV7WCY625sMsncYfpud6",
  "key9": "2WxvRzarigubc3NzuNokkZjsa8Z5ZNo1H9sdmo8VLvtJktvgDH6vLjRfnaCHCi7wxHHzKoYJYCG49gmXhRe4wehv",
  "key10": "4QU9htRV1t5Lin6sonDCAodRsLL1RsKmdYHPBHN7bvBfpSfMoxunmDSCwUxBHGnCe5bvsU7mMnLvixf2xXecwbVE",
  "key11": "5FqQV7Ph8Qi2V9hFiD6MeDLgv8YusnX4ShPvuzDPMqAAgvZQ9wSgLhskQB423G2Zixv27RSM69gghKbz43s4FX5W",
  "key12": "cvPWUYAE52mCvHJVwVxcaAUw8WVbpSjPt9x8SQ5Ltqr51r1izc5nW59qPfq4KJyH8TEtmCgm3npRtj63MWZ4gwd",
  "key13": "2XCbcaktpPcdjHBPL1DRuPg7zV72M6RtAKdanN1zcdvx9K2az4nhmXbBuw33m5uKRn1o2Z2DbePtEu7VQydYCojv",
  "key14": "5aLBPi2kHvdyPTboc5ymmF4FH59SMCdVPCHnMiFMiDfYQJ2yYmGCdC3eYkaRUxwzUozpBPikA4g5uZLiRD53yzdT",
  "key15": "5Y36A4cR7gpxWgMJkB6L77DmMpmAhEQvdU3NbBSs8fbUvaYQjySA3qgwG74JGecZPV2ErFGTwxHuB4V5FAfPmPRH",
  "key16": "frR9YYrTjnzCp1qkhs289AcmDwkKuwCnBDh7FQrLs7P6epAAY1JJgwiLKBjdqearzt5jS6FgB3jtdVcRe9U2P7B",
  "key17": "MjtDhf1jtYEet6zokDrjPrujpnEtPckccWm7TMDD3j2AjzaxtXpdduJsVbnEFbTLafxMAGbJiCznvABMbU7GwM2",
  "key18": "gBBtCNy3uR6r9cGGQs2crgA6TuXyHaXRG9ZRcZkSoaAx6yJpXFncrWHPJvpfcPjvrZpLUGtC2i9uPViPAPtq5DA",
  "key19": "94uBKtjvBVWzH1qzMfn2BjVEF5Rm8hTXPnsESmeke1p6x7G9FFALELuXawkNq4f6ppzZ9LRhNm3ar84Px5wbLZY",
  "key20": "1YEeEpmCA2PaZZ1jxZAkgQFDL1r7ZJ7zTCkerMosFh5jEbzDa36Urndo4iWEH79cSa5R8Ry2jmx1Nes8znYFycu",
  "key21": "5spYPeqLgWXNRWFv1XyNAnyY6q3zRYQGWhRB92uRH8KLgdUySPGqyXUz66hjJNfBzsHxdnbT7jmdLfgGsb8NTqx7",
  "key22": "3rRTopwXoZt2s18aaKK9dUYeNCC935A4KMwzGez9T4YNSEN8UdExdLafrTfo3mC9LsP4xNrdUH9FrGkY18sFUtKW",
  "key23": "hsTmYmYMn1atf2ucG8bdEJPNNKv1q6AAFNePaUGSoGconCScv5nhMZrNwRrEnw8to5HFjs2nh6gpXQNkvhoAMUH",
  "key24": "41Akr4bPsP4NHCgeFSK1E2qVZku21TqFLfEwYcGzvVAQpashVu59V2hKLPKwVeT64GkCuD4affp8TK2k9ZnfaJDs",
  "key25": "3QLZevzUm8C8pTSqvGJzdopEP9tiFxbDzDWyrQrfxX2gd3jiENafPcrDhJHMkv9u3Z96mK9YYdemTapvetLMhA37",
  "key26": "4xojLSHZkBbBAy3VoY53aSjH5ScrpLsPuRsbtKwP1xk6xcxTYHeY2nA7TybHkYnJwoUGpPWhrqwe7uYjxQni2eX1",
  "key27": "qJ9SKkcvZJBLG46jzFHYtgpCLfCSpYSonTeByXGPj9LpDWT8D1YNCxxB84bGYSZQThyu5Hdd1gYquzJhTt52jPf",
  "key28": "3pgGiQF3SvwShexyNwkHzm7CbadPXCjJToUgtPoV7SLXTJceMUFCVcmqtGLFZmyUnfFN9FMUjGAv2cWs9H7dTjBE",
  "key29": "2EVu8nhgFeBHZXRLZ587son7LYq1UKxSTQ7zSynniahLgtdjkTwwgXAzsqL1rRxsDRtoGwtSgBCNG4E4kef5UBPn",
  "key30": "4s8Yc1bQCtsR8yyFtgmpxhHW78eCPQjPAwC3N6LxS1e1HBb7gBkc43Dt8v2DXuJKfg7JbryghpaZbzwZKTrEaQa7",
  "key31": "2wiASkSLWMrXhHPsNZJ4Exj8mF7D2F2PLe8Gfg27FS2NDxPo5SYRKEC1qxuHt1ivPLiLjpTm9tETZjHaSZP6DTTA",
  "key32": "3oGiCAqJbvkq7DSRz14ymjCprGsd8idNTHiPbZZFsazMF4kinVv4iDuBYqZns7ftK5Y4yL65ffLAksMYuzZiPgb6",
  "key33": "4Z4NH9zGPzJ496Dk8dRH5r3EkUqhFw3iqjjPmNgSL8P9FDVPMdwp7VfUYYPB3y74HwJbG9yPX8SuJBtF331v6SKX",
  "key34": "2M5KPNqswitD4rkBmtzMx29k3EApFYjyXhFgwYHRdwEnzbvd87BrT4p7xfPi1eoyy5zFaKPzao5DkxZTgSpkLLT5",
  "key35": "q51WiPmWsxTszvb3q7sjAtfuN4EjaaJhnNTVhYfLvmyjGQHxmgjTef3tTCCuLh6bYyLAz7GVvrkuBCZPG7chzFb",
  "key36": "3WhVPZJuradTe7xDHkrWR8pdhpAFgiCJisy4CdSPf3rHeQ42MTA3Q7FwizWP66ybR15cVHpVEWiKUsgnXL4SJjG3",
  "key37": "5psaqi24SMEDtAeByEvSGWLMA8JYiK4joUyhhfvxFFYj7LMSbnwLTBVaXhzNRidjvfbVZDxHs4MxuhCqAYbcRZ4z",
  "key38": "4kU37fFHjMrbrJdMSmKFA5YYDeod133txLffMijCQEj2YS3FUPxTtypcQjCcWjoHAsPs1E4xPaESSEPZ4jCFmhMH"
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
