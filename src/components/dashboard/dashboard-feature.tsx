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
    "2ZB2bCHV8Kwj9rZukZ95kKg3PZGsDqjLwaybfMqLBExEZuhWFaKiukFDFzE67NU8FTqd55ihxteatBx2df5GQHtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZqHuHMoReS2yeJDBac7KSAyBg91f62UzZGqhfuAtgPYYKmDxFRFfnbtvxXQNCoAZk2Ed4mWpYKK5jZuVdpnyMR",
  "key1": "5vrWXDM3KaG9vPFUAjAoy7RvYPQD6KaEM9T4SdAK5DtuN9cnZQbbEis3F9bD73RrT5KTCa8uJCpcP8CpqwYS6i3Y",
  "key2": "4ogkHKye4Fn2MMDTFJiv2hqgHDUrHMRNP2enL6ZACZCo16qpBiHtU2QZGGgW7xRGVbmkNXsdft3PCJPoc4Egq6Yq",
  "key3": "5pJWB73EHJ5aau6Ct6zvudW6vZxY2GNyP3ESEfwA9ikWV3Y34UpGFJLUTDHcgxmQSZhAGFf6ZHommqwpYjdhfDWE",
  "key4": "5CJyyiPfE294SVPrDjH6MjUiFpx8tKWPZkRDQH4h3HPk1916LX7i1riLGAB2CmbTBDVAfAeg8FJvKgu9q2Ci3tmV",
  "key5": "3tmrCjWNQ1CpCxupuuqmawt6KcoCTNZ3ZYnG6HYCWV8AQjGE5SGUQHgG4JVeytxYN1Mv9oTyH9wDDSoryvPpGPo5",
  "key6": "4LEfJHEJSgmsiXhza1wCno2ECY1c7ZzvuNdg7eaxyi1VEHUffunj9aMfsJmzqLSpqbMKcKyGX4vR9LLavHEjMKGV",
  "key7": "5LJoS54qtaRfTtMqc9NxTEwqNA29VT44ogG6fJ8kng8Db23VwzP7QSQRTTLUPjRCWwcYTYszHsRQqWPyx2CC4QN1",
  "key8": "4trm6QpYZegSJBkvYBKvCyfXibuvSM637SCJPnnr4fx4baM2YwarqYN32Hu7HHKefH24ByFtudy3odYVn9T28crj",
  "key9": "2a4vduXwqQqcnfN53PC6WgqEx1NtqQMcxsKDbGRWcafBzMBA7jvH9etACcv8EH4MAwMnRv3zWLGQG3PKduooHCRh",
  "key10": "3EYxkebj9eSXVD8VWNovLF7BanwKZKxLspK9xgNMnJ3RhtMD6xafDRnPq9zfmYgEuyhPQuLqzXfrbpgpcrphzet5",
  "key11": "4NyG5Mr8saWYuS4bQ1pQWqNctgbaoY4WetHCptVfrg9n7FmEETQnivg624UvSnHseG1VSxMJYQZvKUnXzmJwmYot",
  "key12": "2yBiKUGxYzZ7ebdcb4xV1jnZ7yrqiXsSvonesRLoMnnqHC7zKHmX3CvUnnceEpJfPBqNya1aSbsRLBtvUcSTGyMw",
  "key13": "imt3upwABU8ktRoDeUPNDGJ4u6yxLvHXxindVRN8D79oHh3hTyZRhQgX6xFg7UKVEdi7WufPwJWhJLhcG6DgPj3",
  "key14": "2RXgeBryhXadsK9mKucn1SHZk36RA6vZkeXxYUz51vi6kXfy4qjhHRhLtZzgwZHu97g1BuK5Fr5492CcQUgbHzRY",
  "key15": "2hNxDXXbHoo6gEnEQg31pkKkTjYy22euq149rV2bPDaXXi2JFPdfJH8m15CRvtjExkQxiMB2c8jyxbLMtQgd8aYh",
  "key16": "yhCJemjhZz9cZTwsA3KQ8NPEg3ZVymxijki8LNr1G2WLmWL6pQFPWsH8xdEKogTDtERRuDpz586hndDyNMPKXei",
  "key17": "4SsBQZne8nTsaavYVyxPZrTTXkxAtntENScjMmUUKyYGjPL4ALgHWgdwcph23vLiNxb5Qku2hMddQMgqnwNy6jiW",
  "key18": "5XpdMWYYNuco4AVTUkg7oDnc6gTpfvi1aeNtVHXTcpTgVMGJsoz2oiD7yZDjQTAR883HyPWirQ2iLeBfCsxAM4wf",
  "key19": "36pxEMR7pCXr6iKK4Sx9GZMMJkPW5RfVKVhF3jzhdskobeuD8KirjHuCBRWkswYqZVxLm2HQSdtF6Hv86srG1qJe",
  "key20": "5BMNqLrWSffAR9HX4jsqykiYDK6rqtDkMF4qJCqQiSVCsCsSLeZL2ocPpWAsh3P5TW4TfwpLkE4Ak5Qttp6N2aHp",
  "key21": "3c9iexMersovBYXCzmBftw3x2oAVECWvzz3Hz9jcwhHugzqmXkWLDXTa8sccmyCrNL2sY5cQyk16ihATu3R11QCq",
  "key22": "4wiRSkjHGW8DFgR2UC1LFSG9WVB9KaUQVirr5kXk2TrBJ6CQzPPixvRLezJKT4TW7J3Ag4k5DEVfg5jLyUVt8ssQ",
  "key23": "idhnDUuT1HTgARaCU41mHVvDRLUaBkTMySgzWWfkt6aZZVwA9TxrqtbXm9Kgn3L8uAXz3xM35yuAbpHyvVzgerY",
  "key24": "3peBPCM3dF65oXSwvqs4gcpXUAgefYnxVZs25JmkYn9Lj3Z3jLyKSVx3Mma5Qcc1gVELkPug1tVmJoUsdqMU7up8",
  "key25": "56U2Zf6xFfCe56TNZpsNLFNN97xApUEK4wgzdRGercXsUfzP9aTmapzEJqthhujxATcV2xzqCrTBDU7Q57qmqZup",
  "key26": "4u4ec9j2KE5w3Z65dzaHzQgdqnekFXhHzNoBCCRXdyAwamMUw8LXVyerHJCGxXJ5UAeqNbh4F7fWP7GuLJswpCas",
  "key27": "ue38Zwy6bh8yc9HwCmLoVQRWMzJ4wwjQCvEkEq2oJEM2Vf7DsHpJVA8kFaY61qQqmuYcTay855EY9cV53i6xPzB",
  "key28": "5fumMg3kyS8BUkQEJa8fpvAuNj5X2sSeNwjAVh6itSXpvvWcevBRZGMK9smRfC6AjdvkxWUkcoJvwYQTrq2guSUo",
  "key29": "KiDJb5VumfqJUYHvo8ykshWXpxz8rfA4wp6kn48eDmzS1UFqbtnUteUcTZ4NqBekYPECCntQjL7C4axMCckiUKc",
  "key30": "66H6MJC2GE2tCVU6hA9e2sUqdu3Y2p4LULYFWAT7x75iHMpjCe4XAXpKtreDAEKgLfYzEgPejMMSh8W17Cr2oVU",
  "key31": "2VCvWvHPqTKS8eg57VxBHKsT4q4houkLfFhiCG3fUNcGyNuGfbnnJu1JWpmsnTwdFbMjyBJBinSLfRJKAfXhf899",
  "key32": "3YuGHtKDTmge32uTbc33MVJRNXeCYP9oUnv8HAZizkqjUbBYQQSnqMjhz79F9xMQLR2HHxM1yNa4jRYU9TbUp8KF",
  "key33": "3Zb81bZmH1D5e3EWX51LvkEFXypdxtDshLp3vBd68FuTJ3iacMi2y6LjhQaXw5LTneHqu3K7RdESq7cuKwrQLgSv",
  "key34": "3p4J8oxJXCmQajMDX7D9qz3Wc8NrjjZiab3R7tUS5p4MAUtqoRJ48RCPXfNjFMZFgtucivehrxmNJTkumQ3n6zqq",
  "key35": "2FYZvhtwhYK7oBAGr46EefvCKZ31q4W3RoYf4SJKjJWxJvnK5JNobz65NPszZief4fXSsVJAmAYdjFTeQwrj69EL",
  "key36": "4BKtSXJEifT6jWyUFcYpesPzDbTsRMDR2LjjQYimjqBt9EL6trCwQDuLzRdQ9vY3SGvUgBC7RhBwtszQHMtnxyyi",
  "key37": "3JYny6tcWpmtvPQxiUEGzd3MHPHd8aar32SMxsvuHeYyJFgT1pSRs3CbvA4XUHvj8zspH66khqEaPfsq57Artqiv",
  "key38": "2nuPyAgjMaRmVeZfBHNbQ83B8Mq42xv2qKhx82HqVCe8y8bCkrSyfeqTnzzNjUMmP7jh13na6PScNghzgsD6TBYT",
  "key39": "2irNLPKafKAXwK4vjsuNzVvWobyogWTtEaHyMTLWhwx5APxwtv2Hr6EXuEAPL84eMwkvADT7rNRgs8crvBMBTjKx",
  "key40": "4iFYZ6xG2vLdFQCEcUwFFWHkciNjqaTHXSUNERsCQYpY5vhaUA2FsMzPWT3Vhf4a7sh8oKuNNczANa75xjoU1gRF",
  "key41": "3WMsLexDa7zf5SWcjWXqMBgPVUBHK8Mi9uRxn2UCCwD7p4ekKkggvEmfadm44gdiYK6HkLJk7Vza4SqChb1PHMTt",
  "key42": "E5eoN8KKcnW61eRQxLCZj3rv8XvLpjGx2epNHPzXn8Zv7VGK85WNB3sXKHBNKmqBUSQV6Q3YYidPMb5y88VxXRY"
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
