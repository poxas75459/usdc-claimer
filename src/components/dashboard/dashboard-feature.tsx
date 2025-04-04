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
    "3t1RFLVuQL5zZori2VEnhBu4XUawAWWZsHzhJVoxWBCN8pCkBrvsXtrbT5wrm3PDGcagTHRgDK7XyRE8eFQJquKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45KwyfQ2g682Kg8tznpC6jwbDzNmmxVsGHYXN2S2UkmGnqzLcEeCARm6wH62GLYGLKMfBiFvkueWXZXeksnDuJ48",
  "key1": "4BKARaA6yZ1ySALBmxyWQ5xXZDB5grfasNAEnnxMx4Ajys29m6QL6w5hK6gctdjbuqXHKck2mmesNmnAL2KM6tR9",
  "key2": "5t3NSa6NJ6P3nrdSFMeHdKxdNqXtjkJdpDfL8Tb1WercKo3GvKASxrQaktivvk3AzXj9ydTy3k1LQwk2rS4i3X4X",
  "key3": "5ry1sAJ6tMSBMmXxp1M8m5iittuKSRo6DcrX3bPd7cKHoSUk8AyR7oHnJWSUeLiezbzjcCkp5dpyJcybYYXxtKmz",
  "key4": "V1q5PXY2juJDnbYpvNpsDg67T67VZRw2WnU5xP5Nedr7NdqTxXj3AnRT8TZhuzjkVWnnQ8twxY16FahBe2L9TSX",
  "key5": "3aoKDu9yL6bNSt1Sd1mvW5LwSjA3xtSh8JKGrZVKUkoKUv2KULGPn8ikYDt4R8Y5riswYid4AKww31HWdebpxX6g",
  "key6": "2hmwnk3NeNZi31EHGZYmNFwdTc4C8ELWoJ889PEDph9xVdUbCMBXVZcvgCmJoG8K3Z9eTyPbGNRbSTYa7tKxgSh6",
  "key7": "5AxHGMAivPi8XittgiSBpjS4SFiUP6mo5hSDGJnmfeBtyWg7fRF5rD7eigzy5szp5ZjA7BkduMNSYwMVhJMzxERm",
  "key8": "3g86p6fuqrLvvwgFQJ8qQzb1boMxAfUnzmG7Z7eB1RmhiC4KNMNWb8UgbmTxeZ3M9J16UfHTLebCWkM35PUEGFdP",
  "key9": "23QuLYKhXCsocniaN3Ae3YfUb7zdSPYuN5NPiToq8B7PEUQ6CNLq3gBB7F7AbtoRD2oBtPQ9kmTUjEdKevAbMxwH",
  "key10": "3qkynmzUVViDhvia9kvJS4LWBQgaDGxWjuTFWBXFhW1u8BKMXkZGGUzSe5wdxUyDFfMU8ZPFcpTreuFz9FDH3iSU",
  "key11": "5yzMjDWFiGr9Xq56XmLgt3RtE5dAMzC8DAoY9F37N8Db5umXu64MDfRFPAZ16xLRKfWWg7QQEoutB2q3jDGwhuY6",
  "key12": "5kfmEWyz4xbuCurXBPxmLUCHWiLqM7aXUdPAnXMQ6bvmNQdVaXPkjfc8UhYCxCPBWE1tTKC2gCV6y4quvxQ5WYdu",
  "key13": "mxYaCQB5C1KcWGQ7sRMfqTsrR1c9445CSgg7fzuUL8fryed9pmq1hto3kfHGX6mK4yXwtf9XnFDKvN7qbEAHDRU",
  "key14": "2J6kYNvCkgf237kmiLazPXqucYoePzftP8WfLz8MPS3QYU3UJg5d2wDMLSVwtXw7Bns1C666MgX12YVmBpXDC3DX",
  "key15": "37wbKY4RYdEJ6kNiZdBj3a9uRR5c95PbFQQnJo7EtvDwoZCwqUPJZdz5aAnptcPYAKfPBcQkUn9Xskpa2ifwZGrW",
  "key16": "4BU7KLrRjbNiw11akvGH5hyRs2a8XXXa5dFCDtSoJUKtiLwGQA7utcLRNr1SLDbX76zqxLFKk572MASpDYXzEggu",
  "key17": "2awp8FiSMdFwMMRiGBJCWLbRZpLG6Auizji5QGp6d46UMrpvjwR6P9UrV2cmgDHyasQMN8nJUwyX3cPYaECXTqXy",
  "key18": "tnS1wmAmL4JyWxhEVv4KDsVeP1nySyKrUp6UtmFCUr1KWSZAzvzxW1yHUXUbUpm7vKZaUMuP7pzriiiXQ3QJcwg",
  "key19": "3Ahk5f4BjqCM9troQhGLGeMdJeKjy1TLcHGAjHrs2wVMziArpMAYX6vHTtNmBmoVmNLsMn59btiQjkHEqMPhws9e",
  "key20": "3DZqdYwMpcsmjG834udeuVoVJXQGuaPjpmq9WcaojjcUnJYdgVPwdbsg2PCJcChuKCue8oxsx33fsp4YuECxRCN7",
  "key21": "5uBD6iPgpRaMC3HB6Yz55iukjR6D6xqFB2RrwevvPM9pTq8x4TfqdV1TkyDGsEWiM54xRNyCPhW5tBvGAXZvvf3T",
  "key22": "43PfR4WeKyz2gxUBxE8N1MmuUgvv3mLaJeVwN5xTSaAzR8g3pmSve19A48dPnJigz13MLN7ggkiiEwPeMgocVYv6",
  "key23": "4RQx8T58t21hpjWNQ8ddJByfyxziy8ZZfFm1V9yUQB4hYWqox5no1AqXJr3v7sGKJkouL8LBecmWe65XtpgdJJsz",
  "key24": "4Rh2DVrdBEZf2gnYdzwtcYHRWk91YrPMrE8B8CPLBPi4nAAx3ny3ks8uGK4R3MoXvDcN4PQ2Pk8AUjidHBbYcK23",
  "key25": "4AZ317AVMnZyzzUWZQsSPau84wvunVUt4jqrzU51kZThNx2km4X6GRBnxXvXBapC2EnqaAVWM7zhCBnEgVq9d8JX",
  "key26": "45Zw1iXPscFw4JYnyw4jpectLYKsMnp17x2MnAba1NMiiTFtCN94ge2zMPNYUKggot5PhLH398jSY93fdQk3ESpr",
  "key27": "4AhD4pXFBoSajBrkR4GmPiYTCek79yELCuZouVzQbvCRsAP3jsUxTLVtPB3yuKmHqhviSf59DVTsU2hwrcWYvxrd",
  "key28": "2GePuL1uewwC4QSTatp98FzVf2abYrDiCPVSs6qojpLz91fNHTGP8Q9p6eQGCtc16hGCDsHAYp5K27pbAeRx89vA",
  "key29": "5Vu2VUNAhvNb4pYwzR4sVKuCMKs2ukX34s9svBiVavxrt6PZtV3XaAJdCjR4EnB6ZkQWfxfq7PFVJWi7gTxjAzpx",
  "key30": "4FnJDryDhSRxL4EJ8NBntscHegGqrQPCM6ZHvZamTuvnRfLLYGShgKQr72rPPAGHVWynjhGphry2dBLnjMp2TGKE",
  "key31": "3NYymH3sR7XE2nD1dbAk4NX6Rx9SSFBDpogdKDV55QPdBsksRKZe6DaYw9oDadc81Pu1Nimr7uLKbhmitH7YnNWR",
  "key32": "4aGaoXDoh9trpcoPgPb2CaizSMWpqYURNXQxwUHpYpdzBt2CqvEKgPz1K89fVZ4ZeWA67NEQGUQCVQXu7PRRY87x",
  "key33": "5vyfhzmfU2rJSDueiDKyQGC2zaqFNemTkR6Grz4WTyBfNgGZjcKAm6VdWTb2BWhx8U32z5xSMDTUEjHM6kkfdcmh",
  "key34": "2Q5THN3YV8JZNMtnnvoxgYbFZeeMY4prbSr9XXCMiYGYSquH4pwdJ96DU6Joppjaf6ozirABQ2tVcRCUaBDcAw2D",
  "key35": "5Jzy2irCcMK2ZQ4CJkpdbjYJma2hKoNqyXENqBWZZUbLyVaHxMTaoVd2LeypewtVrMPUJucvRTiQuM6Ly4WfPEJb",
  "key36": "4Lw6rhSGmRV8mSWCdvWsaGtFKWfHaW31y3hScdL1YoFnhD3UyfBFHPYWDBAKS32iFGGDqPjhAEv5rDngYNAhd46b",
  "key37": "48Z8XhiCj4cPa43dAzLDLNMeF1WPwHgrzsZB123bxwoKqD5Yb81g5LyHmnCgMidHc5R6ovmcc7s6Ucp4AzqnZYi4",
  "key38": "3hP8VHoHxsUBif5ckWHvZax4wM7GhKMjddPuNXYNHKPGxpw4KnatjBD1Vdm1uEA3it12rea8s1yJyhm2WvzaCL2Z",
  "key39": "3ncNkCbNA3gUPMRdn7fXJ8Mqw96sy5AsRXFnZQsRhJ85MktXgv9JpNtMac77uqP3QikVHWTc6Kc7TrJbdj5Jgq6v",
  "key40": "5f8vCpPyd8ApCDNPjnBVogEwh3V7kmtsQdKARbAudq4TqCr453QMrPbuvNwfkMuEcifCiKD6hHXCcRSqvq9TH8AP",
  "key41": "4zvJNRf314Z911C9kYXDHcfdJBmNTFdGHzm1xkDU54iXSwG5VoJaFTDMnVrb6JpWrUJ7arHHFCfdKKgrbaWtE7UX",
  "key42": "5eVTKTyHVTJqhQn8UA1PDWp4dY6BE8EoAt6rZSQfNA1TH1S4J5nRvS31Sp2tC81nGVkwHi3xLUYU6PJKpsQSjdaH",
  "key43": "YtNMMiMrCRgqd3LGtnZCfyrR7URWHeWrBTZ4B8CXfw78sT3zzLrZ7d3AkX7GgXKBQrosTPiDrvGYJNsKSx2pSNp",
  "key44": "3bdbPvMgVNi2CvPXrGZMVH5c43FvFBJTYStXBHf29QC8VqJrArtGuyqnfXQAiEH3EEh1DB4n4ShK3wUaBAaWG2Ds"
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
