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
    "4fZRtHpQQEfB68WmrZY29PC1EwNy1Cft2soqERS3vUXLzDLe1iKyeCg8drFZPKoveVCZLVbSVv8KbKv7RmY2qhpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Zz74qXQrCjrBU7JiqXMmRHi62tSgzdJQbxxd6gc4gYKNaabmRooDoXEqyScCDTzgeHQitAcvVVxaJ6j8iEzA2s",
  "key1": "3NTwYmkrperZr6m7uWghQyyPd9z11318CwCw3neEVDCk5NfMitauvqpH6xHuiUNgTH2BGoNjZaKuz9Lr963eqkaY",
  "key2": "2svpHyfPLLRPnk58LH6aQrFmiXFXPve5ri4mFSLDJhZRbeUKdmLjccZy33mUN5NVLcDboQjMncVRmisEBvB2tT3a",
  "key3": "4STMStko3TbCK182wyxigk9mJF8GiU9VVntaUtEPaQSU413gxnExhJt5RcJvFw6XZ719qWetmnc5azHMQVmJo35N",
  "key4": "2TvzXF6Q2KYGBMg27z3o5ky8mboT2HPN38DSYpZy7bLPE94n3fKVs98qyd4bUFA6sY5wbpvwuyDgCgU3rNQYcPwa",
  "key5": "ZVoM654kQp5LYYPB2W1sgLyDpddUYZyefd13dzikukUrf8owJ6VDSQdmrcAhDoGS1LMaCE3hLeKim4jC7ExNPBb",
  "key6": "3Nicc4Ffc6xwzXauBisE9tU86Ye21WuWRDX9Zy31cX7emEZ5maUfQA6kxvcpP2HBMK46zRe3TPwGQmTAU1kgQi98",
  "key7": "5XKsSpQ7FMW8jnxmCnzguADg67j2s9MS7K1mx5g3PHxiHMfAVdj96eyHBaZmK2nQdCVS8SbJWFuGE8XXs9VfvWyX",
  "key8": "4qvMGg7DjuhQETwfkZrox3H4vmoBUqqGDPwsNXRfpnv4yP7nNwZhZxxWNQiUibV34ThbEMR5XBxKNVCUB9eoe3Px",
  "key9": "b58x65pPUXWDcDurQAyp4JLcfGXyWNJyeokkoNZ6xp3jVTC9YQWncgaV57EQ5q15VGkgEEHZ4tEyTiPBJBXNnAi",
  "key10": "3oC1xXtGc3EsP3PoQuuuNsDqJvASK2WX7jgDZMf5W71DABxAtbf8E5rTBP8aGbnzUr6dj81BzuuUc5LWM1cyXQ3v",
  "key11": "2SXFiGDmDX6K4VpJ8NQ2rqAAajGpkugpegM8E9nRbkfDcRXhwoyQuPy26UQfyZykMPjaN51grF6svMSiPDGKPv98",
  "key12": "4tYypnPndUwjhFnZ7tiEo2TUwCkCeoFkhoo38cQ7No2goeMtbw75TNu2A37cVhPsBHAsRDAgJEHNDAem2GoH47VW",
  "key13": "3v746FcMpcFkFTkhNiRkF6KzvtpUVZko15WKndjBpXZidED98g4pPQAq5JievYDu5wt4V4Xs8TqSJqcVDYW115W5",
  "key14": "3BDenAH5VAtCEaZnEhSPh6S9VQmnKQVdkxZgcSWJAbw5mrH6i1BtJtjgYv3MY8Y3MviYRupDm59XESopMVJWAgZt",
  "key15": "4YL4rq3iExeiXwB3e2mhabtpGdALrrGRopFWnbBhfqufSdeM4DXTboXWSPiYQRMB3wSaV7twpeBdd7Tnt6r8mCca",
  "key16": "4fCFZDV6rNy9BE4Mb5FU69oVtpA8MZwnCt1nMk8jFKbRietuUb8pwFujq7VnGcVFrsX7qwn9DkSXCKRkgX5rNby4",
  "key17": "59Nf1LAGDSCj4oNH1ewuFrhpZ52YSmbGVgufaGUegppSVhiwbUZDVyKEUGCb2BQk7JSX9V7kyJgBPBrhtxdPPBdU",
  "key18": "3mMQz5wH1xM5KEiqZ1q6DFQYSTf5576DsFHQE8yDZRDn9MZwpqGnbtu47M9LN5CoeyvoKtcWLLT1mH9z7SwPpJ5r",
  "key19": "2yEWoCChieUyetvRu8Z2nsRUB79yk6TmPKVrwNeZAnCZLDsJ5r3haBBXP8jUCoHxUV5jCrk1hgkfcDL3LLBP8Zye",
  "key20": "5aeuNWKBjVdvxnDXASAebrD4HDqVoaBJrQfk8kXBDtWKhx1k79pLc5oZmwor9WmmrVym5oHWDUdhq8c6Y2r3xrQs",
  "key21": "2GZpKmmUKcjZ8zRwzdadCDq94GLULSvYpvYg3haTvYaRGiugH8YYua9TPWVqi1ucQDy5uHjU4wux4jM8kopH25df",
  "key22": "Bp8Gcq1Gzsg7gqCvsu9gwCCq5ZdXDmWNXNfLY7xt5voazhGwKF2EzccGkBezeFUVGUeqNBCvnxEQK91p8HEcq43",
  "key23": "5LorLn2Jz2zJUBxjoVJLPrGACqxqn83iAkrD6PV26miBbjE3WTN9WebMH5qmghhvU1z3doTRgJGQ6Rk7xeSV3DrY",
  "key24": "2FuNvvMqUJVb1sNTpwRo2sbHMMmdvcZZgXoVgBguBqttM6EsuP7a79QwPqjaurzFXaKU83t9WBA99aAVtdHrL63w",
  "key25": "4poPErFiDVeH3CHZTGyZKVumzs6Fr9xr8vgq7mh9hV9uVgvNGA4aPCTDpWJ7hyswhXfst5eyaEQj4Bw5UjMRizkc",
  "key26": "4gacHMGuLSgsHXRVgabYQTTC4dXZmJLCgQXWx3xESxb9DcA2Bvo2uc5TWidQaRFcixmihD57Ueabiu1mrz2EWAai",
  "key27": "432i98CA67uBgZaXDTMTs3QEQ4NfsxuK8GLiAzvmEZPbokTh8vGYHiZBaV1ZWDCEPZ67bmmQpDNRKC6ctnPs7yAe",
  "key28": "YovZU4NRqRVo6oCkdbKbLVkdMa6KyjcfWjZHfMy8AzezPBMNYFzJrVGHLVu5gJ4KwsrbTnczDRFheXuTiwcz6tD",
  "key29": "2My9BPTZTDf3amnh6a7bz41RzYt6YNsAjmPbqPesR4BUfPMsK6ZP8ftafsLa9NZesfiC4x3FY7HSVW6xm1h148xV",
  "key30": "Ykk15hfo3byEb1UGvDxo8HF9hPmfFtk2NodsaNv9Ef8m7YLcNjPtC16oFHP8PQXQM3Gf9sV9c6TfgTj8iw8jEVM",
  "key31": "3TVcipQeZ3RGWN9XX8zZmDFRP31wGVQ5gxw2V3rR47dN6Bq1d3fK5SfnhXBbPp2g7EudveTGwHunvSyy2yDQNNAw",
  "key32": "5j4vg91H3SgEfe5F8kXSJEwbpEXoL5iKpZiXnssiz4LS4tkNXubcv2saBiQvFooDLp6r22aqzFW6xCqShXwoNc3J",
  "key33": "3LjJToXYcAfwtPQX27uveUT55NFEvrY2mdXZbro52wpM14RDoz8hV76SMf9VGjtdhMCWgXCCZjZQnTNy63ye4MVR",
  "key34": "5YwNeEM2ixGikAWRupGLetrQGmkNPu8xLaMQ26WK2UqAsd5A7xZtUVPdiwFravU89Z2rnZLNPsCDgtAQAQHSo6mV",
  "key35": "2m8Y57HPvun6mAPTzdE8U25YsvkqMt6aA8vU5TT4sXpJrhJ26YCsuE8ccefajNt4GdbX3jWSj2qYSibofzvPf5gP",
  "key36": "4rgBmbMAoGd4UFJUf2chpbAXPpjjngify1Qz4xUmfCHWihpDiVHZUyZA6Wv9mScDzj9KVfRVJ7dP5Z7sjRLnNLpD",
  "key37": "A2zG46biFkPnJQcnDrUyLoHpPK21w4YocTzmk1ciQaD8w7G7h68LPMBi2xdcrLsXMAF6L1JyNYX8T44HENpsqAA",
  "key38": "5ojbCLqwPC9G1QoJesCnUhwE6vbtkTmzKAiqTCbYwMaEAkP2nraK69dDQ3mVTAq9QUCgMdzzLAcxeAHVWkz9wEJ1",
  "key39": "NUrJN3r4G3j1Mvp9b7zBGmtM7sECZXgYQd1TnoRtgRdS1A1DyLVr9VPnwEQfLYmyX6VKMM9jMxWXFMENkjRyrbU",
  "key40": "4UoTg89YD8EHhVBBfWpZXuRDrAMkxoSK33kjdNy1EG5SE8YmUt6eXh3qCGyxFa1P4riqu2kGHEEWwb7NobWcnCR9",
  "key41": "4D5vGwNRmczgKx4suYbo9o1stKmhLpWkJSC8HoStkGE2HzSvcr9remJ6UZa5h2Wa5V7Srf2Aw6oH7AKyAWhKczik",
  "key42": "8kg5Mh2EzoA2jyaurLiMJuS9w41BNMbv9BU6xco7etps7xdyaLtESartQ1XMWeGT1VXa1j5nXdFfXi1jpFQDNpm",
  "key43": "3Zipc28aY8RKeL3PmEK8qAXnyZsUvRECJ4vm97hzL26iP9vcSazsYCwfbnFdecbdSo2J4gZdsMmZAnqSf3MSgeSG",
  "key44": "2WXZJpmx2ZnUryshperqZeRbj4pkzLv7Wq6Cuw678LxTPtUsX5KsmtDM2T1g6qj2iuhYrvKPzrpWAmKRwiWTCiKJ"
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
