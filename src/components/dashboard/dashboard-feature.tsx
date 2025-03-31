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
    "iirv12WJZ9mnA8fGVo47XexrmnkESpy1Qx1FWPM8NKXUTtd1mwvSDHzdvE5aU5kPBTfRqjV4cqNV5WP4SX6Z16Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VFy2gcAT4khC4bPGoxxA8o3oN4fz2vRkrvQYs16LC15H79BnWhjiu1bJ6reE9QTVAgREexu2Yekq5gPKHSB6iQM",
  "key1": "vkkKe9f99JVN6PkiZoFkoihAmbCGTcZrv4LeiKAAu6Xc42hJMQRMgDQBrDaLbSs5AymPovou1QMQ1TUpM251HWa",
  "key2": "3NkGGREgM4FnQoUWmUPFURaXvJXuCJYxikzQRcEouCi8ZShWVcauDgDGpu8vSr65vQ4ZJdatSTJyE3ir4b7ASZy4",
  "key3": "4LqGK92PtEXDJAdzAGPYrQA5WhWQoXwXoxLMeWaW6MMGLrQjKL54kkE1dxvFB1Xb4JsYmg4WQ6BZ8TwHCbEQkDvZ",
  "key4": "4NS4yY6NYkuuEQHaVD6wZUrc57Sze3eSrmaEpadkbSYdx1utEGcGgjMMfT17bHnG61REb3rkX9Lo99kfhgaRikBF",
  "key5": "G43g8pGc5zNf97s9brUHgZQBW9L2hnR5vfJHZG13iCGerE743r5i1JTVwRkEEDdbUJMcWueojGHKELNzZoUKW5w",
  "key6": "511wngQthUMZkA3e63jt3Ep8Ef1QeTQk48RZ2S9zAFNVu1FUEC3nxuvbjmXRpNyv2NiQ6ASHAvwTWPtnN7ubhV9F",
  "key7": "3N7wYypeYsuHmkDiz6PrRTjnKXtvwmY4UwAoPu8zkPorrSgwFSUj2GnrL7weR4Du9CYmWqmPs5QbuJ8LTpnmrRTF",
  "key8": "fW2nAYXN3Bq2A8vfS7a4hKDaV7sBKCU7YUqx7P7GoK6Krd4aGf5CqHTv5bmYiiTFBnD79ce16tY1TTFSZahJSs5",
  "key9": "KKy6B87Z93mMFyYojb2iRQRgtwMrQmfNUytmEyG59cxm4G48KNiVXzY9eTD9akRF2fp7ABqRn3TcSRJcSigVoao",
  "key10": "5uuFTdGfo5taUdm3zGXeNWpERotQLwgeuEz76S5yvTD3eoa7aMXWEKWAysmG61gfCMBtfnJxeG5YQm8LBjDRfhSr",
  "key11": "4chJG5qMkxgT7CNDCuE13yNsqmDhB66QZGqjv4NT2QfJLBYNQ8aW9JqxFZZKwZjMST18LpirS49JfJCFgJFdGDc7",
  "key12": "YgcwX1nxSroGyRT7NTwHeuTSenmftPc57dGM8vikhjUctSwH8xPy9Jd8tnmQSiGQvAi8pYCNsqEtDfjQwMyvkug",
  "key13": "2K6NinJE3GhuzBPoFKX16ySTXez4m6RYDiy2mEpyXd7BP8Z44DtNrKsbW2WtggpPbrGjYYjoCt8VxFgeYosb8LdB",
  "key14": "3KTCvj17ZNdezJvoSRTSJDu1zU7umGRD94BxpVr8MN3YV79m5YP9Ufy8SG2rNBk3EfuS3HF1bCGSSm18uKx3z83e",
  "key15": "677BkkDehMX5PLCu3zHC7pquumkWHpgiiYRBJCYopVadLcyNm6x41KqsLwZBPwNqLFLATsTyENkkK3NfehFVUB91",
  "key16": "4Ur7ftCx7RDgGEZFXFT7yyAMVoFeoG5xWVB4sQzZrDuxYisaGfXscWLBi9SCrXDJFkPcRZS9hU3KSmhTGxFtMPQG",
  "key17": "4EtWNbHSoVJBYvjqYcGhaMfGXKvkkicxxbKPr5tX1BUct9x3YjavKRXFhEQN8yEYFPwETqeq2zHAF8CnJ8ZLp7nw",
  "key18": "2nQG1v6TwLtuZh6s3wK6BmW1nYZPDBmdAoUg8AUJ3XKQsscqpQXeDcD4V3Nepjw9F4b5LRDVa4Rgs8ktSo9hRrNn",
  "key19": "4FwRpXFWhq7kH1ac5SYvT1GDcqrx8MrbqUWPmKHQxuqPHRqKGUUBJK4kgzoXqWtTUwfkyxMP5utoyNESqy4xGon9",
  "key20": "5PKkBoDhfo3ELrQsCpze3c3WWsc5jfXqETbdueKcTKCbFuHH2EWZdQYQHDpXdYUg14eNXJmzu9tQtxXEqxS4BayR",
  "key21": "4W9uRdPz4Sjiei6971erysZqi47ZDepuuVz8ibW7zuPSp1G3uPSTtABpWArXzmy6BUqVVii18hX4FsxAUsdob1A1",
  "key22": "4wRE8osL5qwtjwpeXmYu54LxBSeUnPSAPskFjBG3nBM4kqCsDaZUUhu75AbkcCJwHehxxttNMymoucCnczxSRg2z",
  "key23": "4ufKqRoL46Y73jrejBaNxhejTm5SY5pbHArZHvogArUPbp4DE76c4fr6vckxHd46Xhye7Frbx6mvjmGwwrAfyHZk",
  "key24": "4zcPtsJMPFG7VtKmcQJGEpBMH9BcU6aVfwxaTGcCzkzJJM8T8wmiLhCfYk4Bt4znxrVTTy4SMwxdkdcXr4tkDZAY",
  "key25": "5DqZpefvGM6ukaX7A58pHHJXVNkRH3psr2RZNn8BQgiUWte5vsLgJTbnHovSaDsEGoU2Y5Pi9bUX9EMvWwLuv5Bh",
  "key26": "2aPZsqFHBezfT5QTLifuf6ggPKBrgU1rT7hkiRR2WnPnw1LhefW2Bacut8nTczzM7ELESxyTqoj4mKy6rc9mRJB",
  "key27": "528qaVb63KchjbfMhbqskpRocpF46hdwuaGy3pDEpCYH4YVdj2b14WP7v9zcjuJHknzZcZcSsV358hydPsgjP6NY",
  "key28": "4ghCkZNPoSKyek7L9RY88eJ9HHM9ubVCFpahap26RaNpUnMzMgxxYr5xNBb8VRfq8rqtrWp5sttQcRNUsEBqo75W",
  "key29": "gQQUjAGLMAx6t27wrfYZkLVj3AA4xeYzLDM537ZjgQ55CRxr3pqzjrnACxwho9dNevsmp7nVhYDtzhkZMcbLUTp",
  "key30": "PvdKbSd3AHBJnBn7UJfhktsuNBfgLaksxdnLmPF8J9e6RhsNXNxPPfge8oswmCVTEHMAot3ZxEA3GZoK6WRbbPU",
  "key31": "2BKXSi4bGprbyGDTZ4p1Wb5KCQkMCgJLEqe22RrhVAjPgy3u3oGEtpZPzPwYwzfDNjTWWW96jjFfhKNtBnJ6jc9i",
  "key32": "u6C16P1euRGwxkALxMoJPpbT9yVLTz2pXVDV9ndYxbfoFRENsv3rB637LpnTiv5YWfpkjMvfo8r1gqkJGwJqBgv",
  "key33": "29FyogtBazz1zCkhoECfxmFtLkvPjbajMWnXAfmnBf7BbJb3MzJoVoiFsYAfVQEX4baZZqSEBygYEXV3t7ppigXs",
  "key34": "5yENCaqioNkK4t9k3UEkYDrTcrWoTjDBBG4rcx3izyQCpeDtfTvHNEPi2euLtrFHvLE7prpFfuCLqwEHSKbawZaD",
  "key35": "BcscTJx2L26KQQCua1c661q8CmUN1HVhzWVywF7P8jhBq5ssJbhkCfNFy7cTm5v9MW1X8nbd55cqJV5brmiL3Gu",
  "key36": "2fjXRmAtgyBdgP5jEKwTCRxyAA1Z45LemEW7HAGEVP5g4z34N6iUtPrw9cNfi8TxrCNf1Lm6Y5gVEyC2twvEUYiz",
  "key37": "hjTS7uLGUEjNFu7sW2pCURP6Hyr7TfDcAi3KUrd1gq3gJPVEC8XGkYPf5w1MNNWJfH8cPXw3w45cvU7aDqq2baR",
  "key38": "5c6e66JJ483USgRYTpeDKw2BPsgA5takLQPRruAvszZpnGH3aShXqzFeorne5cEdxMFFiKuVSsXxSdF5rik3jfSU",
  "key39": "4kyfdKruEdQiRPv3g94MdBvgPk6iSHqYFEDzZRgnwqGeZT6XJd4e9j1fW1Rah4JD5CkvtSKpW4uCmLBUosGzWmia",
  "key40": "2XgyBXRXQCeKWFp47jL5WYMGKVPw6qNGHkvvncqLeCjFNdzQTndPf931MrH3NEcBVy9gnQo5DVwfk32mCMQN612D",
  "key41": "668rksm6ZiE1AgZvhntKZBmSSLiNHU5VU2us6A7x5KHoriUNUuVqc7jRiNY1Ct3FhZb3zgJ4xD6KNJir5YzyX8cY",
  "key42": "2RUhCHoHketrpuCvGRC1A3bnxw6BPxbz9q81ZdPy8CoLdrjifxxRLpwLL6PLjyUhYpxJuFE7oMH9QEod4VGmV8ER"
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
