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
    "3qEiW6inFvXHeEyLApKp2qjk776YSEvuHtJJjx92ddCBByWd3DVBwvnfa9Q1T5nGCxdkRqzB79fQjgWZ8nwHKsoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U6gQApc2eK2GNHzhLtjMnCN9K5QUSQ5ryDRKawU95Usx48NDXUxEyttYP3cTtYfT9nySiWvPQykmesHDkwy4mb9",
  "key1": "5fTuUg7WpXwabpq98Da4L7xa4WVChMPYuh8DPuEKfWS4miLriLZg6dAXcEM9Wd4gDbfLqYxmUMkMfGh4RNGQTHj8",
  "key2": "5BwMNMrb6sRXxk3bfnJfMF2qcZuN2wm9V2HWQBSRMQgh8MfCxPrSUP3wyoXfc2giLYKKMMxZJkydVwYreh4CYYMm",
  "key3": "3Z6zmGTChY8ejJSEPhNGbB5LZFxPPabMmwikCJWTxAYMi6huhfxQqmAoeVD7iDZtthqQKS9JHtxNcF8oTwivxxwV",
  "key4": "2eQMth1wM3EbiEn1QfV8KJqAcZhE3dND2oRyCN88wvpuGJPVjNaK2GPKRbcnPwj9cnLdKcD8gJaVrbZSYDpHZfAa",
  "key5": "259xvPAeLBTyGPTQZnproFmH3D2f2M26PkVGTUMtqkeoqBd8XuFjYp2T53BYxQN6PMSKnXgSYL1RQEL7zZkbEgmz",
  "key6": "zDk6YD6Y37fg6AP3RxN5tbU3d2XUVMXdbsKPCk5Hp1mhVwQUeV35o53wNRejaPGh1FouoX6UYUFmo2SQPUfDsyg",
  "key7": "5rMaxb4V42ndG5kQWFGQa7gFs3BnjwX7CDQM7cUYikFiRQ8okmb8CUiSr42qVSZzEPxsfPkUiWwdXYaXMTC5EW3n",
  "key8": "4JEaWftWfTUth1UfZyzqvhjGsod1NSn3rwvD3PSqk8K4Q5BRjMNDeFQRFR9U86jx7dqqHuceG2mJDJeXjPGfbLeS",
  "key9": "3peWDxyPvpu5v9exLG41WdemgVRDrbkVpUqveg6XCsPpf1RpdmaEaG6hfkjRD1XwaKtfS2NPZ96VmQZxeh8tq2ME",
  "key10": "2aNFWhtJJ5zBBA2j78bMBbPxDNVy9WkQvWy26RZeGXE3H9i6ZH3tiN5Z2ELMfBiokd7MAcHArHNZPhPMo2R8gCRk",
  "key11": "2tUC56nH8ahzuyz2Hc5UuoByEf8LvUx81D3mUBkvfSjZ9MXxTj2kSzNhc8WkW52YPwW56Locp1eiqnW4AAFq3gkz",
  "key12": "4qnBNaxWi1mvgnu5ThFTSXmfXnBsbWRs3Pi5UPZMMyBpzGJCwYwBnZb3TtajEp9TdVBcx7LB4WT2rKgQRgbTAhQg",
  "key13": "cakeBwgGM3D7o8BJf9m2FC6PN6gTQcghDDtwCppfFquXtB8ehjj8JpSQnVfEvGeh2gU2QKpgDigiEKbiptNviHN",
  "key14": "2Z8LZTubHAinDQwyrbmTFcWkuHzBNhzZxaMoWiL44qczVgeMaVb1AoAq21iV3g4Vfn6Q774iYner85ZXoyCWK4NF",
  "key15": "4fCE4F441oPoewPYeV4PwX6nMiD5BCc6FZDhg74GaEKhErTgZSUuMxfsY5roncTLgbTYeSejdj3JrLqtprGR86wK",
  "key16": "4B4nPKakKcBNJQKFNSmfRAozkaj95w8cXQr8KE8JakfHWWNFstbtvyqAC5cW5e83RFKoRA3vN2EKeorNGquHSMTP",
  "key17": "5sUCJu3NApS8KpzuktCnb7GxgXmGCZCGLAa5nvaCZAG6GruQrXveYDaPM8xmY97btsmH4ugZ2by4uQWqANKt8yvK",
  "key18": "ZUcWCX8FdRw9EVd4vWjgMWFmvPNSBbYJtKBeLUpaALjqdiGrBfSp53ea1JXdt2dEjx6iduAtS39V3q3hMah9JjG",
  "key19": "2Z28DCR4x57aCUgz27bxWNDWdDHL4asDXfLnsUtPqy5bVZ1qwGAPZuhGv1WrKiWLLZEsgvYUXABkUPPMmKAcZLp3",
  "key20": "3Ny4Fcd1bZnvL9t8SBM45BbGy4RQTQgQQwtJr4KMgSt5ARiu4Vd18brrwj6Pz4oAzRxcaRPKirquv47eupNtNVVo",
  "key21": "TknqANng7VBuYaPVEGbFop8mbDkt9mwhaQG9zrJqsnpojJvUgDYVhhLWuqi89P4f4zDPxjNNUT2LuYPsHQs12AY",
  "key22": "2AD33VTdfJVcXpa1uTcoEHcKppwSLYTrqUZvpQUrbwt5GHYHY95g576vaFBo3xJ1p8pRYUunTtqsZ8D131Cph5bm",
  "key23": "r9TBG2WM36Gf2HnEJKyhqzxfksDRtZq6TX3QpYDBUtkHzzymEqyVkfX1PoeVf9oQWLwqqcvQXsggo532zuy6pL8",
  "key24": "4JmMtzyxS33J6NYXK6dwrs91V9TXAZuR1CV8cuUo1XgeRDTjrMGsP6NG5xqZMsz8SokKjUfuGZS877wTvZbnuKrg",
  "key25": "4xLeMjqAR9Mjjgh6vTTgwXLfMUrVNEfKZsqtkRuEF9ZsH7foVmg6r8S1exeZpMbZFCZUY2RP7EP7kPEK8LtF3fBU",
  "key26": "WEFmaRTiVtCT5niJSQcvmdy81DY9fA5ZrP2sckhsiM4Y3FpFUboig6RUfE2AEop2DkaPyF4k1UuvsDJa6hMo9Jh",
  "key27": "3hXrvh81mAGskjjyjAJU4Y19DqMqvN2g1frbr5NpvTnaNEBrBnrHeeXLXHeDfUAJrDJbD4aUcydAqjXbxYidVWHC",
  "key28": "2FJNqSe8CizeHrKAtEkauDngfKbS8Wrjx1g2fr6fyjH5gLog5QpuubVsefqDsXyTY631wTFyi2H85UteaeeKUvDj",
  "key29": "4qRxPmLAJHjBykhuny5ecHgXS1Tbx3R7mxCX16t2xwsC5YergDNRHqhYjN6FD3EtjmNj43wziRFRKmykAsvuf7mo",
  "key30": "zJ35UtznSZ7cNFsrAnErV84Z1iTbwTD3jjdXpHvFFNsVdaxBuHy9WcHAZ118FVikYAASYn9tjAxUiw7aut8K6Ss",
  "key31": "232ShvjZQmdkouJfWUsSXWRyCRYRE2svUkHv4dK8rFSKJiRkuYEvifHvzrXET3H7mD8JKN74MJwqeFM2iMWT6fW5",
  "key32": "3GT82ZY341XBNbqLWvMHDyQCVkQjrLQFNFT78hJCDfaEEpvAiBgbh5SKEf6A1MJv1hsJy91TRKHYdRqZYHaEef2y",
  "key33": "CDKB4hLXjCdW3j3vYWLeRWuNjzZU2KKCYjBTZ6qAxhaMbD3bCgPab9g9KA1o6wHESeLVHkEUXLsb8du8eQv1J7F",
  "key34": "4ZQuriFAEWtWt2aooqJRb9SUd8LHaSnTgMYiRctdoXez3EbhR51NVhEusSWtAi4N1h7ERCQhcwHYy38TTd2k2n61",
  "key35": "2BThNvxzoWnStJWk9rgK51U8VXP3wujNrt4PM8cTSP3XnsgvtJTtWsUbuQC4U4UdUHtvjtZ3hAs3ZZsrfCQqqPob",
  "key36": "7VJ2iWnvTdgiZigsMKVwy9whACqnb2CJygpKdFbifJJumC8igrATXFuKvVnqarNcimjGmzjXaubyruVSUuu5iRE",
  "key37": "4t9EmRfc6JnuNxqtGALnwRqtJDoGPeq2DaMYyhnNXPtZ3FU2hg29oUEYcbX8F82WngS4Gh26omjXNgpyHryAcS3D",
  "key38": "2WGvRFEw5xbx92WDWQE5jMuBd4aV8k4AFxPcEdzDR9UPUre7MnsWw4YfArvDChFfu72G5ztcTUJgNoipdCQePdbz",
  "key39": "wAfXFGKYH4BvyoYyk4iFfrpaJNqLm2iAesLBs9boZnMFp8Mi4pF48UJUENUkMqmzhNeuuwashQ3BXrbACVpfQaa",
  "key40": "5C4tCy9XW5A6pWFZGV5TM6YX2ZKbUyoy57GfudJqTGU8Wy8ipGh76zGjVWUXLWbonYxNMKbV2h5CnDZaZD7zFi96",
  "key41": "5cNDcyP4sBwR8Yny3Gjfju4X9EztLB7ZXtrYawrnLaSDtm6b1NYmgwVYpZ9fB7jAn44zjzoQ2XByJ5fkD8LCZPKR",
  "key42": "55Aj5DJdmpBvqvAFmixfajy9uimqKuftRQmYwXmHYuUVxjdUNk4gUqJPd2XdEd1NfcNxegrnyTBaZow1RxxLTHTJ",
  "key43": "2HF42LvQPA6mZzeHZfUyyKavogGVaPUprMQ6Bc9cM81XxCvmhYQBpTf9aq54zov7oJ6U53nSNbjiDyUFcP19pSUf",
  "key44": "3qy9pTqtcmTtgczEoUALaF2smiqRa1RrJQAvQdWyLPRfDspp821eHLykoQSm8TuqSNB62FHkQjC6NHAXHjLmNytR",
  "key45": "4f8GrxSZxYYAFJ9XZhL7bMBRKfAW17M6xXFuDNNXxc53LbPXnCnP4dnSvJ2qtNeZogJhxhDBoeszgzDVp8LeCnYa",
  "key46": "3q66g14TmVPhGDP2nfSKUc2KKkpepN2j3ossqiKkuGQBFXZtQSAqFpioWRF88JLAWezcRGevhN4KfUSoddYyvAFe"
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
