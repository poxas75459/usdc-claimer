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
    "29NZjNtmwNNtSAgm6eGdT3iFtuv5NUtVM7MKYeA3mTAFC5TrJQzwYdPW6dSDHt78psA7FNQwQ52kVPA4Te2odGrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XkmaCcQEGxdJ2XZLiVdscJszEZA6JhLx4uajrRGTFk3VQW4aavsrk2V1aDfsp1xS7ERndUh2fndEAjn2zCLBVUn",
  "key1": "37hpcndNLBUUbHNdkEhjPMhfDC8bawpXxdu9QhvwxaFqAeEo9qgjqcd6inEZeTZTihVgQGuJR73YntkMdorMJdGP",
  "key2": "124XqXXBniRyV2QuxPYeFPGoJXQc1eNW1tudWeJ7KzLPH7KYHzDp4u4NE7TULySpcXXeRESkxuJvw51o77jC7dHN",
  "key3": "3bCHxbijT1Uo7ThGc8iZLAnN6UBZBcqML6LiihxDz58ZFsezJFcfynaobSnXC6j2Xcy7nMJZQYpc43GLy1shnGfD",
  "key4": "2ZrvDXky9NRVmDhK7WL96gFfp7LeJpsQLaZF4LGkFivjWva98DqXKRtv3GT93Re97Ko3tNy88fWqXdohTkeVjnT8",
  "key5": "7wG92C1carxbxgzX9NdxFUv4Eh1qqijwmCMmTU4sHMtuhS1BhFHNPnxqjfrcfVQTGjtBZxuHB4rigwtv9UpB9zu",
  "key6": "47xPYkCFaGLk69MrEnjLZotQMW4915oupFgah5578r9irm2Vfq7nE93CqDmJ6auf9tKByxc94ZeuHjtFn6tGqJCG",
  "key7": "5uykdA1ADgLD73kaVqzjys9LhgGHtvUcFSas8t5YL8uiAwBhf7njvdxnsBieRyFFd4kgJLPoXfSeQ8QhDnbFacp5",
  "key8": "5ouhrJua6PUSN5rwbkzkmYfVHtaAtK8Tr5qnUfhiyQh92Uai1akBgeyyqakN5Cx45EKe9KBe37w4qnLPV6jr7kzz",
  "key9": "rEdd9NwhL1X2C9UEmQ2TyEudrPoHpRiV14CL7QyxrDWmoCUvc2jtzpp4Ki8Xcpsz7G1AdSW4cVySTCNBsMVw25y",
  "key10": "4dm6Bn74mosJJFmQvsDYiAAoCJ783qKCEPoh5GtqXAsZkUikVWzzKjBiMNyW8VRafYDciZ4PQAC5aBbPBjAvNWvt",
  "key11": "64BtnRdFLRQm6Dwx6kVKikdtF9SvgEVAikpQASCpnkbtRNuqCi8jGEeRVnTrFksrz9ixrff35g1NYmJkDZ7TFF4B",
  "key12": "2jGg9YheGoZuRvBZ46wcSmZuyYXbnYRZRpURyY6d1x5owqTeh3tnRu3pwwEniaYmUfAAABkdkssFhW54nx7oMp9T",
  "key13": "2ZQLugQ9E2XMGgHg5wKoFUBrGueeurgN5bzeqeK37TMi2hSRNmfqgHBGBf87WBKTu2EFLHyZQpLLC8svpkBr8yZs",
  "key14": "2WYG4A3QhvYzxcN3es7fTrbEQAMEJxRC1UP3uXMDaVkwHZGEkQy41xo2M58MEPbs43FvAbLp3WX2KJyeFbB2PXua",
  "key15": "JrtcXijJwqNB8rMfYKyY5uQuNjQ2WJBgYnsC863AMa4k3SUtJ4s28czGEXatYMAw7Apo4ZfnCRYtdxtdL5iEdQM",
  "key16": "2szroyBgGrGo8P4z5QDm2f2ithudRXAJvVjXDZmhfUDmaD2NnY6siTxNvjpoQphFiY6dCmRu2NJUpranLuSmDbGL",
  "key17": "4GbEENTUsQUeRerVpQQ4coqk37MUBpxd6e9XGWpqDD2kTvPvwX7H72JKkURBX6jX2PrazDDet3cqTbkQdxDmPMhS",
  "key18": "4yF7aTNyavB38BmodMAVJLz5NE8FhF6VRchjf4LQYviQrZViMyD6oTmXJu5N8Bx5usUyn7smS6fxCya1bqNSKoF8",
  "key19": "5MjicSGsU9LZEi4WjK5NPF7jDsmEUhUCw8syQ29AszVC2wxK5f1hdYDHk19bgFbwuUhLAFAWET5CJRN8iQ8QrUP5",
  "key20": "4hnWtxRMSjn378TqVkY5kiP4VqV3CC359BRCpXCzhoM58Z1xBbBo3HTPJgk8nTESxC4FHCeG9mKLwBUdUExamob5",
  "key21": "2XqsA3iiUJdLUo16cv6ufu34hFK1XVh8YLcHrinDLSvNRwQR8w42pgqkWEAwZhm7wWW5XMUCyzwSAsjLVfnNcje8",
  "key22": "3jCGHKLYiymf6gWGz9DuAuzKhcfG5L5yNT2cc3VWBZ5Loh3mvyRFnG2Y4YiFijuzHQfAjaknHSNpj9jC9pnPs5DK",
  "key23": "67rSiumuZD2cio67FWqreJk5Zv79jFKPrrNW1DeNdhBuzVyAEaCgzj2SspU3su4zgXADCenD6egro6M7LRBB3oG7",
  "key24": "TuBQtgXNsQfHYRFjhMJUVpf47kAGEC2szBRjJhFvAaneCjyfMuLKDMMp4NY66hE21u2iQBc5Bona25eviR2kuXL",
  "key25": "35c8wCnyw8Gr7qzRfZWVCotSvs9ioXgJX9DAE164wig4eKV78Ai3NhjtEANPDUHsS7eW3svDTq5VE18WXKc1JeWZ",
  "key26": "2U2EXdoTNrXycXJtK5Ru5NB6X2YaXUpkFHvA5ad39JC3K4yxx3B98Fq8P4pgfM8w73NfnRfuJjgh14xQ8ZYiCrTP",
  "key27": "Ug6X2FCa4Z89L7FX6XjuX4g66iaFn5oeYm4GZhohc31d27rMR53AH8RDSLsi6kJN2Uxrqq898AtaM7vHysgz64f",
  "key28": "4d243ceW734XRcB8nRKFCrKXEA7bwujZSxN81DBjNtysKQwh8R6cghx2bANBaXWXtsKAiFwQPaeKrJoZsFV8F6zr",
  "key29": "2pfXVvcXcnqofAJUustYnPfCusUYw4rnw2c56qk4wyqREEQPKxkPt6yFqV6HTcwhduGAkNSQCozLZz5rQtNvGUQG",
  "key30": "2jAqsNwGv8XKF2zkNdNaAqarniiEFYmQc75g86QFcRxGhar1FcvZ2n9Crk4M8GrrmEeuvzj5NUdqFTAL3got4vzE",
  "key31": "3ynj6tNfZpGJvzFgXYMfBTDd9Lnco47wpzXM1KvNyBYEwYQbnufhpfgJBHQpURsYFD1kdEz9Kt5e5edGw7Kq8sAn",
  "key32": "5c8gCJXk8bnB2euzbvBRVKo5ifHGywuTc9Ckjv97m1tLm6mTpVLp4auAqtw32mWdt5UGjXUjQcGQAawQVJnBTrWj",
  "key33": "32dY7xggjXf8Gnjas1DMAymNCwWj12P1mwXx27LrFmEaK9bnx8My2zyEAgtjCQ7GqzAx5bJ13ckiK2Z3RJ6XgPHe",
  "key34": "66tkS6ZBjjyQtnm19FEubnHifvjnUdyyCzvhbvmk6xqtzAyWXdYBfNyJBSG6MRHSwXWvZELZETpZ98vMSbE3G38v",
  "key35": "5giQjG4JXBk2Y6DnnHN95Lxv5zGZVopHzMgJzTLKgVmNQs4Y5undtir6iLGtTzVgB8SQpGRoXTQv7EqRnT5XTugQ",
  "key36": "4vqJhR1cEpeHLt68U5Szhgtd3xcUN7iqGAqtkJ9DombCgzbtsKfcweaA5W8z7My23EEp7rRiehgVHD2QXLbnnfju",
  "key37": "fuMXo2zEqbS6J9fS53sEbRzR8oSDBd23VToXG8mAobABZ6o9C84cRHEf4uKpCP8YzUA2RWSDCLFf7kfrCV2tgPS",
  "key38": "YYGdo5HcPfkcxKjGf3pHFnyePT72jJCptSGpHM15X2J7SjoYFfzKLx7WTkRoCfSA5RtKieokBEnhmGbk919jgh8",
  "key39": "Z1BHeQ2ReZywE1hL7TDqUj8x7pCNQqKFfshA7VZ1fhmmVCFqQCYh5Vf99uXQnqWJvTUwN1PSBLAxLikLRF949SC",
  "key40": "2TuUWHQb5bz98ahnYxAULU4kg4jpSpRgX835VMCzyjqcjV1zz7eKc3bXE6LjSrq25gVJWD3D3bRVqoKtJWk9qgxZ",
  "key41": "hDXiyYcHWfzSadGKGKJHeGaFtGxSc8uRqF6hLeZaoqZYp5oDdPKBvakTNbTiM3tYz1gBWphSdQMhvMeVZcShqa1",
  "key42": "515GL8yNvYvBwnwgy4KRgqqpTReSTFkA99NXbAU75QykHaFby2iKHmKfxRxFsDhMBx8eCh9k4qSgHeXt4S869RDn",
  "key43": "2nPwksDf1dKMafupMdfh84JynF9rtLtaj637wj3J7z1nRjEtNHtWevLNbZamhPBEKowfv32q9iS7Qfd4dAUeSXun",
  "key44": "3cE7ECGsEB8q4ahry2ACEpuKHAB9QXCpdQoNeoG8kH28Tmk5ifrXhaPxMiBNzkm1SxDcWG5Gt34rzfFkbWcvXKQ"
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
