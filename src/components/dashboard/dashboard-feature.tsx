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
    "4m3KhcpaHkB6y8kniFiCSyr7XCzBq1B4uMBtEqcVdSEvHDqXGY1Pc8UVsukpuAWkkN5RBao4c9dLCM8Lv5DSPCEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kwtJnGhoVcRKRnwNA6MhBajFHJpphrPaMLNTAnfGawev9E6A8A4e82RaoJznFyGhCVY5j4Sb1BZoDbhgD5QM3Mw",
  "key1": "S77epP4MqJN4chXH49TQqTd8nvrpaKrR8sVXSC1mb3AsEtorCmHFgpAX7sgj5hkSvneU5AgEG1dPReBBayL4QXg",
  "key2": "5Xng1X6RZ2MyErTbNz2wEJAqW7aBdtqu8WKLbjiXf9QsZVcGkx4a5xCka7Xw14f8G5mfJ4ZJrq3dSDQYBox6ppdH",
  "key3": "3V1aFPJRb5P1qni3QFJSSSmNRSYQnSRZKMcW1rjYuCqMkrYtTtqdrSRDNijSvSNjyvBzXpkmU1AqgLR85YPo3Vae",
  "key4": "P3sDUsksxL24v4UeWVzJM3Phi8TujAGUkgWAR2ajQjDkaPSaxrZxa1Z7FnXQF7ruAJAQdSsr8NytWwJq96wErsB",
  "key5": "4KZZn7nfHXh4Fwkuy7dKPoBwndsVmk7TGWXuj8rk6vNH8pFtDt3t6M9N38XEhPUnCRSykZvmF1b2FuhZgKygUoM",
  "key6": "3qEaCyYeM59DnTgXDx8zqgihnJaT4CWpUuUqQWMgZZdwFvPVZW9x6qoMK6GtjPJgPJrC5b4AWmVcztcdh27kH6Yo",
  "key7": "4Adr7aD5sMnHef1u3eL5JqgCC6PecfSmmYrezGyxS4AzCMcsErwzCEXsxf44W9UyzUDF1SqFGb3TcPbpo8THAd2A",
  "key8": "3nSdYcodGsR6qBJjWXHNRdavD98ba6Qa9YLH2cK5eFkPCT1WVLsiLCD1xgNi2xkn9tKxJJywVuz8vWY4zPRSU1gy",
  "key9": "g6cVapERYBkjYkKG5L1mAVFSegu3MEj3ZnaAG56fJpMNMfnsMXVVQFTMi9SZeup17gUVpwjyTxaYShCEYSyAiN7",
  "key10": "3Rp9zHpy5teBvqXBMJX1PB88vgWqTpeb8XNvuEd6Sd2tSeKvXU1GYYKMbXUqR7jugwPzwYe58qMyXwznoqsw2YCA",
  "key11": "3FsFSTULMahXqAFsijkdt9VvtxsFj3pu3CR8ENvtbNcm7MKMAjSrtsYxwbbQUFfYJYSWr5UVfadDuRJD32Wqd6h9",
  "key12": "bnvBdFbMD6vNiEce9No6Qio6pHHvBEv8KToTvQJ2HdqQKS7ULvPuJr8vrHJqqRkHTmwtyQVCYCtKz8zqCm2dhsc",
  "key13": "5aiy2ntPM78JifSC42NaYwGYzBKquH7VW6VKA1W7Kcgf4auACX5JQMJvALzicqKMJqo7SQkFo1fwtF7bnkWUxQyR",
  "key14": "4mQXfMnGA7FeTcENyFC9eNBc5dZNmB93uWdvJRbM4xcx4QSCaoQJZaaLZgMbN5N6rC3XAmrfvXUWCnguELhLKnVS",
  "key15": "3jgBGKTyZj3E8QMM1GwjVKyoB5DykKZ4H3wTfjchpb8Qpv9S8bEaGkiDjy3fr2YFnhZSgCssZXHubAK9NHMfTLto",
  "key16": "mTcct1vhTY3YGf5ia3feGg3QZY768zfTvi7N2Xoo6rbSWCwwdyjFkUnt1mqwULJY463pJ5d6VpJ7H5r1aLhUyAr",
  "key17": "3LcEWfAdQtwbUr4MCQrhm7ajTCCnN9XCPaH61HUJENjgT55gozKjkxs2yMF7AbjfqGV7fo6tphZFMjaP3NP81ddc",
  "key18": "GN36VRdvrs9wurDnbYbhsbuG2d7zbGPuSWuZBUeeqBbiBF3uiy6nCvkwvKrKmitqbLzfCrpdd5X27LjvvU1kW2H",
  "key19": "5Z8yMguYrxYH1dwjw65Gzv92FcbsMxAmfz7ne3q6T11MXuQmdLvu3pDQxgVZRsmFwEmWYfKrZmQQToHXQLctWaA8",
  "key20": "2zQCkom32mrHKeMC7hnN1iBwNu9iTb9pyrDC896wP5mNH4HmvRUbvUDnN1bZkwZNVShhUHufJiEJWHFu7r1vE7H3",
  "key21": "45EgJBdXanHD22t4VoQjnv5wGosPXy9NMGvr7MPptxzYhuD8c2t2etzDVT5Yv4gnqqoUtYLe3pFXywREPDBQHmYa",
  "key22": "4YvNjMrBfTugdxYrEqEx127aZnSV6JkBmqUi6fdHVfyHWji97T9912NKPxsj7vhsVD1a58bgqouygULBNbZCiV56",
  "key23": "6F6nTevjCbT5QCJdquDogevkVCGR7WvnNeMSmJeRCNXWf6HDycvQHLNhsPbP6BFCPioH72FtUVNaNBhgH4Ta3EP",
  "key24": "3YsRZeByaZqenohmKLbrXkjxb7cDv3VSHjpHPPHxVAYu5WLLTpsWvt3M2cvnFsjvo9QRFtazkS3MxUe1pWX5ZAt8",
  "key25": "23A1jHp53GqAVM8h81WKbJCiSLJJXgXFrDUJiTviYAhqG7eNStJx953TFXJ6CELLu9PzneF1AkcGtRY2KWM19jCn",
  "key26": "3FhNcyNpuwNxp2vRSnyRw2dGBSrAYHTw8EpHy7ovdYPfg3zHPv3JR69uFiobRcppLQ9z57kEd8STp5tgcdF2SvK5",
  "key27": "4vFw6MX7MDkPmZGhGi98w2H7bmuGUeafVosCDgjp7UjVV698ZgDeHcQRaGWGestAkGt1PZYW5mU95kYpExZNUvA5",
  "key28": "pXgcLu3Z6upNWpbLdpCJLfDqLGXNafTFakB9NqwmEEAa2vDe3z1ENVBacRbPsWKpuK9MXHLVQDhVkKUVm7YEhEA",
  "key29": "rLxStoecMVPYvcedqtLx7yEEWxhQmccMKBNgj9QuVAfuLvcUcGCFos7JbzARa8oZJE4kobRTBpLdBaLqUfCrjN8",
  "key30": "2RCfvs2foMP3NiNB4QhsZwLcm6zftW9besn2P8qVPgyjGDb5AAMAV2HWxTovqNfuVNxtoEPNaJs5sqBicf2MeQUG",
  "key31": "2UsBnARYPHjNPcBVzgAqhjC9K4CJeCXm4W1CF5wAyZeZnmsw1yMFVxzGGfMwB9GqdjEAZELdxfW8dRfTHVwNG8TK",
  "key32": "42CQHG8ZS2Pia3H8WbkFrW4r4ZkPsj8CkuKCc1NEWeCj21mJbejzfHYAS5U96C3RkYwBMN4n95N61xqnHwZzcj2j",
  "key33": "4j9h2G1tE5xN7YBp97BBJU7Sxm5SWAdwXMKwENMEx7VomnGdP4jLTCNm2hc4qVnvTAiSMrPxoeodm1KqeaYLKMiW",
  "key34": "3Vv43hdxeBQN5ycb5GVa4qg1cYL6rCN8M8BNxJDrswMJXSuy9KLRMENwwrQEbEX6kFn4SeZMPs8Ywn5yATcAcn64",
  "key35": "5gCBfsu3ofEEmzsNqr1jRxYKvuAk5ke9T1bzufKWhLGGQQSVhSK5tV3NueKB2XCwevJCR3UrRWxTnXv9vg63spzG",
  "key36": "3gDCPRcdRmEb6sE5WGgeFrPY4mUzqcN3e57oT3JpBGCqz2fGfLLQhhWoVLWXDd4ji21hJYKeA988vBpiSSqcCmN5",
  "key37": "4d9QdHKMwtk9vRKYNyFx9tZYA9Ew9dJVYUa6mybQfVXoPKtdSDP2C2euGpTgMiwnAvrTAJEiEZs5Qr1FUhpkAZiA",
  "key38": "dPwFYe7kxUweznz66gBu3stoTggRt9rsqVj1pr3RrSRKMWkEWvk8PySZnG3opsuUPWjTJxozfWstyyrwEb4GmYT",
  "key39": "5NdqCR1qVAg28mT5659Kp7QNe27Ei3eqhaQU4PUhK2P6sBMw5A4jmH4WzJFLsLcGpMoYtNPEjRbEG7FfGHLmVVuN",
  "key40": "2C8bWzmCpXg8yCqtdX1exmx4xtV1egUf45xXGL6nAHevWgnxjJLph6u79t16y1DREmMnFNZnVVNXhPChsYAtob4T",
  "key41": "5M9N53mnDCwLVhFBujqnZo865J8Z1wwGskF7UEb7dmerJDh7tTpqobyF4FbjWiMmRGyEd52FLxyxfwi6RL3yHP9V"
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
