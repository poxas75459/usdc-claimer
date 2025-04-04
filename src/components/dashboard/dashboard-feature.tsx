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
    "3qepDw7ZKMuxaD8aoVXtvAD6gLfrXuR6g3zoXogBsyDL6nupCwCXNYyAr2UUTHLH71u5FzuMUBvPNnexKAxVtrYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DTtrR8LkJLchNDtYyoVof7nB9K4tY2nz2fz6EQ6a4zKnMB35U7AgVYoUDzsF2K8e6QHYWR7rQyW3wSdnwRhQSs1",
  "key1": "55xY8keNzxADzxLS9ae9rHHhZNcz51jLWkr1qHzJhSC9apYe3EC7928Fb6bEjbg7hNgGQdCKbFEDiTS1uvQDAxxd",
  "key2": "2y15mejzHqP7z63uk6Z6oJGFSfayCALctwKHdvUzgyiJKtsg1H8J3cCRbH3B69yBxdarynYbvKwgg5f7xXSg9m26",
  "key3": "4SjWZghDRYmA5k1dswdkTTKSd2z6nWmtUKotwr6XRDx4UuNA76ANzSEEGiCCPPH51JwpoSCRRKxZSXh4ZVzAwpr4",
  "key4": "3BxoMMqzeiuajQ5x9aYX4zSgdC6i6aZ8uqLk691TwiG8miboKBbn4axWn7346ZJRc2nhGQ2U9JKiiMvV8hiZzuP8",
  "key5": "52DDTkg1LCznB4nhXNL2THxyXjRTJFXxiAnz3MKAyZrbEJYB3aEU2cnL9kAnM8sYFcHBD1ikwgqUGuWt4bfgAqjQ",
  "key6": "jj4cfjizSduiQTrDfrDSgXK6177ibALUWNsatdnifA6YZEXSJuGSgpbXKH4XFZ5ft64BKpYrgkRkuPzPSA9AtwM",
  "key7": "LQzf8QeHMPEMRy454db4RDDvbCAxNCrEvFfdYJRfQ9q9eGezaL17xZJDr9yZ57oFUr1GRJ94sCJSK9WDmcRRFuC",
  "key8": "3t1AFiyTUdLUAiuqEML8SYN4FW1q45LzTNAH781aDp8qNGJzhnYDzAmsTuGeJQ7bYsNvstJ9DRevApUXcAKPH4jy",
  "key9": "4z5AxGcnPwE5qkwgaffw4pXNsUPDJZ6DLsyMCtU3nyCer8HK5QpeocQJ8UUdwFRxX2YejV1LZNY6MeomKHW4JaDz",
  "key10": "5LS7xE8mFKrxQuQaRvV919tbKrXbsThbVSSceQGm5Wrf6bKg2qzN7ZxSj4onQRAz4uT21dWsekdApNBYQX87swnL",
  "key11": "3UK3gUxbTKhq6cZygr8rboxPE2Ju2rLdBZfUXto1i4EXe6tnKXyo5b6tnYVbEPqVsBzJmJgxhS5MK815tDpDASts",
  "key12": "Weix9JLsZ5EFqahuR1EwvSuH2FJJdV3z6X4dZvdxb3dk4GGeFBYKgJ3qLzckNnm3GLew1JF9E8KRPcFGzPnQVS5",
  "key13": "3dH4NJ386nvJCNEuXGzDrGNUkCwWBvSZPbhpDVaihZ2UnoCyDcs3sTAXSPn2PTmJzBZ7p3UfqRxt56SQZ927QibK",
  "key14": "34EJGbE8GX7fRnRmC1tcDfRgZLjSRMCX7zGLasFLbpUP1HWhY2XDqxAnHeGgpHX4tbZERXkBf7EKADofvi9NZiGS",
  "key15": "4bhQamUTwjABsPeE2yBD33ySVcvfB4zqEZokEmfcFXrnLhq4hEDvLq5z9cbsp1vk1yavY2X9PSDKZfi17NMATfT2",
  "key16": "25cBBsCbcqFdP5RZnvW6AT1wP53LLrav4ZTRsB2pRK8KdZgTTkLS82L9LjDFs166qNm3jT3z2NRVVrzcKohwRay8",
  "key17": "YUE6w1ugB61MZWnZdSN7yFmLR3S2m8aek2YiXcmhYZ2XZC8HRKUMEEyB4hAw7WeLBNy8bmErExuaGqT6tumwVdX",
  "key18": "4prVPsEcQX3HZsc5ctkW29Gzr3QuPbTDimgDpF11JMKbmpdEGzp8jxKvBmoUpDTidA519Xqzw5t1pYKZV3YPe5eL",
  "key19": "yVDJqTQJwvbsYwkkphPjPbCWstvyG5P8obD6mPBXLUidgscSQP3qiRBNJR6xgPGsvNPExLHuF7RZ7mQyuDM6Nsp",
  "key20": "2F9D8q6RHEEGxx8DWCx5ULfzXcrW5VRHHstzpucQBBS11Jq9trEEmK5X6mtHUYnFaWf26EZRR37NrJpMj7qTgRsb",
  "key21": "2GigbtaCHxbefGkVknwu2DsNyGZrEu6pomLdEVoMKGw5x1yLw9LbHPyafBdFhkKw6rsCva8ArrHSqJ1BHphX7NGH",
  "key22": "3GS93GaSdFtDxac2nccXmFgRUX81Ck2EoMp7vPmkusct87Mt5qHvjvTEbFxVQ6hTLQiHYRai4uzfoPDtgHXgsRoF",
  "key23": "q1WXoB5EwCNasuS5QvTbjuqPtgtb7M9CLrBhYoGViA3iNCQSo7PtoqsR9YYA8S3E1MfbSUVW6PydEiBkSpzYLEJ",
  "key24": "4gKxbwyqgVUcfp4sJyE5Effqq6whwsenrTjbgKn7Y6Viw3hLAnmCDDZirv5YK8TjPdSLYpveRxShKDGscaMAwyQp",
  "key25": "2Hban4JGtmR1Q4XpcgnXC1zLakguPbUv48fbUJuGe6Yt6S4urHbyUzjA6egjDb1Pu5MoiShZMj5SrmEuMoW4QtEC",
  "key26": "2mWYoCBn9gx5ygxVdJmXBnG3FfRrmKzhMqexESfsy7rsGxm3bjJsMGiPnnVnVuFJwieD7NvLpdET4C6AFgqV1spr",
  "key27": "2wwrxmaJ5cgYkniv7hqDo5eSW5H6aNzy9HrmEcZnNxJ1FRsxP3UR6DiDMso3SVHZs6drge7GRp5nBRiVSSacHoxa",
  "key28": "4odaLp55T3SFDHDPJmCmeZXBgcdYBtzwNbcNR8QA1hm2TonJ8YRuQoYA6vqyvt6EKAuW1Qit5XUHovRFaPDgvzB",
  "key29": "PK6cno33w3x8v73RAjTAUwsjES1wuwKw1v5Dvdm5Pyocafpt4hsiuhCY6Lf4nTU77uyp2isCgHSjKY34kWx9AB9",
  "key30": "4Cfd3q9zSvfvpFP4uvxsdFDHVpUUxfNL8SZMcUW83ZxgmpjKw4i1am74wTjq1KLkffByCXXNyRNAXQL4Q3aVFD2N",
  "key31": "Uq6H3scmjM2CSx5wagoBM5kqVWKny1WZYDSB74StCcumaAiw6nvuc3FPUZ7L1FgLFdewET2ovDU4WZBd37cezii",
  "key32": "4NvMH7emr6dGvpEuN5t6AP64dH7pFGqczvP9Sn8H46CWV6JTCTkbhkat6YmuFzLbLQMWyLPTcUmfnTcEtLHswVfm",
  "key33": "2tCkiua8BL8baJjXZgdnBR4cjhAdi29QtjMEs1SQg7vJWf5TsHG2RnPXZjX2GVEYCu4jCNadjfLYFuGTVzLGxoU7",
  "key34": "2ouTowEwj9SrkmKteutVxTSCTf9M5Fv89PcHXUM5cSadNwpDJvnz9utfkAJvcXQt3GyHMhYmiF4xovLtdFs7fKEa",
  "key35": "4XT89Dcv3khw2sjWBwrPyPM1VWV5L9ymaAxVJbTGLfai9JwknDwhc3FKfsgPGXtUgQTwAs4VUos91Ncy1CgQvUnc",
  "key36": "2i9MtHV4smDKsU2zjxcvNn4VN1WtWsvN9raDGPdQVV9TwgpGvvyZEmhxVxJXyaAX8CYBLfirGmsc84jrMz6goaHk",
  "key37": "3LuqeUM8fvcQ2HmLsphXBKKFD85FM3URgDt3juHgw1jagjEkpYrxhLqnpQnnethBx1Za8GE99MBFjPvbw3hsArxm",
  "key38": "bj2PoL5eASz3TU8RjdBQ4a9sCjTeB9TE6H5Xmq2umyywREcFe1SvqD1ufVsGK5yKrgTJfAL3gWdXvDaqKPDN24G",
  "key39": "2cjeb375Cvs2dNBoRVx3YZCS4RkYMDNjauTpDKf9WMaFREfDb6DPzt2KyF75XdqxtYEtFc991davAAiRpNXrXJQF",
  "key40": "5mZ6tEzxtrPqgZD1ExCnPhBERrdYrv84qgs8P88x3ZjZ798TwV171G3u35EUiaBoK7teSFqPHhobDqF4UUMnx6tg",
  "key41": "3BvUjRi2veau1TjUPgm7EoW6Bs9BVyD2ojnHQBVMBR6LeUqE1UTZdvnqECe5946HtLLj5BetXewABsjKkK3pATdE",
  "key42": "2DDcKzK8SyUhNAYf8nyyPvpqjfTyhRFYYwnuAFC7bjzY7EWtmba6BH2hkdGDxCs9sFSSPraWHCKtX4SDPpR6vaWM",
  "key43": "3wfzR3oUfLJz89Cs9tVEzr7wRFQftRVskP5qH95pgAVULay6uM7H77JGBXTRwmvbcEHD7NeYXWc2PNJ92hrAnc3H",
  "key44": "tmPBvrVHFwqNKCkN4akhbMwjN5fRssLCMegbi8RE3dWKPNVNF2oEQFM2ovLuP4U4xVDgYgMJJpurNY5YtUbdDxX",
  "key45": "5xmo3z14ny9eoU7cebW8dpDRcg8fF1cU6UBurj3B3DmTphEywc2kAx6TD5UCZxUPoHRJH4EWFDGLQ27KZMfscsc",
  "key46": "RNZEZFnPGuvHEhm3EY5LZ1VHZAiNaVHdNrzjfKrwDAnUbAqgrkzaoPEfrnqjNQ5mhMDXAKF5oofa8FKzxVM3j2i",
  "key47": "a32ov8r5QgUXz4aAwna1q8LS3vpFzYVRii3qsNABr3nv8EKimwUZkfnFBazzfgE7h4C9LAqza5XnQ6TfjjF2HDu"
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
