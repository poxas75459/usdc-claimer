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
    "L3qXjVfvP8UK7kfmdV8Ghp8PfczBL1f3TBk2hC8jAa7Kt6ihmBmprNUcKQT1carBesCckwWQ47BXJbcYEFzs5gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nCMiXjad7mHRv1FqNB4Fy6zfiBJL8M1ESB1xCtxhNLFb9SXH7xbWoKhamYLcP9rTVRm8uuY4vmkiGgTcKjviybD",
  "key1": "5n3tJhQHejXjwiBPXatGFqpFurfoYVfjunaE2koK8bB3k4JrcKjyeoq9XmGCWQQW5kAau4ja1tRfWtmpnTptbf5j",
  "key2": "RzDwkCjuWtWusJxJXmbv3R2cHPRBN6Qe7m38AmwoCdnp7PwxZ193XVUkUuko4GLuTotwszf43FRxUiPhDSJkJVu",
  "key3": "5PierxyvPdhiUVLfSaHpoYh7nEVmnseokKU3MgpdWhuEnDKub6HDEt36vQJrjsmdUYqAzQSHB1sRZ98uhYUjUJto",
  "key4": "2JXSX9umQNzhmrczEdKYbZiC1huhTiR6L4xWy8awDhuC2bSNho1GtA2pa2Kdx7w7UgALNqoM7Ypw74dnwZZZ48Gj",
  "key5": "2ZCyHKtH9HhfPEYiwncQF25kCoCCMLTePgAHZctEY1khyiZLi9bZwqZbQ2RgYHTAw8jsZVxRn996Z7bjWoqi5kfC",
  "key6": "4b2x1Ydu3KwNVcQjazB66Bn3SV81xvUpzxpv2wduoE1BGPn4RzKsy27pVWs2KWDvLBp9t4SBcCpRzS3S3WaREwGk",
  "key7": "pZh7qB8wCqK4u9Wf4tuobkbtxjqaRZTawyYyQpasynsx5v3EDKvrSAAtnCc9ujN1NusX9V4KQng7U8wageMhtkD",
  "key8": "66E52UxEN3RatGXS9Uepff8mV2cWTqMJmXy3J2bqwSjFZ7VktEJBr5foVn3TKgUTpwSnNt8XghSDnYJwHvkkxue8",
  "key9": "4EfQ1f4ZQ8jDWom5TnH3DuWEoDCNakE1z8LcWBCHmsEiD6pEqiUdqdj8WREWweHcYqbaRge1FDcyMsyQcoVgG912",
  "key10": "2phGFyV54Mbr8LYtNLW3886ZwiY3GjfbpN9J8AZWi1rRCzzZULXrH1AuWnx3VL6jxyFHjGebUsoe9imSfvPtQk9J",
  "key11": "4JRPQP9jWBHSuHEDb9DVfbukLLqy9aVtTTUdngFK2YvH15THG81U6uvJqNxeW6XP56BEDhsE2q1gXJfVfdjUwbKj",
  "key12": "4RdEhaG8UaE1m9VEvywXwWBD37GoAjsNK7SBckL3J5gWu7TxRoNUsmpqihsaGGePFdAA7BwKRXRiA5ocN7WJ2bsU",
  "key13": "289sXrTb5JCV9v33jy7Dgce2xZ41He2sroXXbw4w4T7BKtpiDtp6uV6QuRJzY3hTcg9XwM4ov5NnkiBt3PvfwXv2",
  "key14": "54dytYGR7RjQqS24oLbhJ2yfBAjYZe4F3T6APQdEviGc5gPV81APaN8TrXeXyMMZfm6yc7XFx3EVFdbYK6VoHYGw",
  "key15": "4bEGmtCHjfiQQLp3ZJFikaHNkEmYbkkfm3mrgsfRYoquK4EE4yLugpf7UgrRXhShoBTEK8BKvgxK8gQwWAzMvBqx",
  "key16": "ncUu8UxaJTHuDcosR3kt5oYAHrNXFsHY5x6efxPmHmwBYeCzejUELvB3C6XQ3ryn2jYcu1gsXnDzTKKS28J7rho",
  "key17": "38CdzE8DLt8HjqPKMnQh9uRAbVcrSPJZynJ5UZuxXD16AjDRLZ6WwYgeY7u31oWSmTX1CacuyecpPRzjUq27VMxT",
  "key18": "5nLch3ZY2CCGyNFWfz3FchL6EBX32SgE9igQpGWsxFwwUq88XQrUzrn6hraaLyCU6kC3WX1goC89R5nZCHiZwU4r",
  "key19": "5WDi1HrdbWiwwEXeMs53Kf5U82LEpfiM938y86eCZ8obZiCojHAoPDVfEXBq9HQSvoMwJrE4QusSqEHiJhCF4WWP",
  "key20": "3ipBSA4QpqVz5S1MqUQFDkrBpGMzTHoZLifGeNWPZXDmdDfKqLT5T6J8aEZmFXuPnpcZmzhdAmjtoCvUDZ5sWjfK",
  "key21": "2QqafNbtWNpYt8VhDRhHScU9NrvA3s7VtXwJ6oXd9zt1Ao69iwqAyurGUQTqfYshZVadRkWKPBjszJ6Vhjh7bWhx",
  "key22": "4jqQEvVnqkUntWCnLgzFGLuNGcitmRtbgLdJA72uUMEDzAEar9y1nH2oupkvHtDHJ3p8WzvMcosg1L5SLmVMecRZ",
  "key23": "4qSnpKQjQwjsQdZbwAw2Z61N4LWv3dCSVo3MGCXWPmskcjVSyWWRVsJhcoRkKawmsQwVyWULEHN2cqBXGLAUJz64",
  "key24": "4LBpY9ZQt5Bnr5XwtQMfw1Wu8pUs5GTPFEeQEtZoxkD7ScFZDEeB7zUYFdBu8Lq6Y2WtpiF6BKGFZr2GG4ipWpRH",
  "key25": "1SUzkyNtPv6T4fSa1FXvUf23wxCtDRrWQsjnaEvnc3yuMCTskQdjuwpD6iYrEMb8HdJFd7esudJCz9va9Q5UZqk",
  "key26": "3onM4S2DrVRYT4h1kq7Hpsrs7poYqvCHTAJ8yUQghxyPxs5SsW9BKZvMWzTe2K8mFFY6bp7GvDzKjzVHBsaXxMec",
  "key27": "5mPJgMYQpZQCnSLDsGCKzUzJT4L2MuMvoRGkMpp6zru2sWVHwHZtug8FGozXp8HwAevGfBHxq5MwwqP5TLX82edH",
  "key28": "4nwBWesALatWnBB7uQ5oAejEhtvAPXri1dWm4rxGvuMBp1LuPhH9yk4GCGQkmfUCnESQriK9M9aY367tt2UuTiki",
  "key29": "vMz5HS3F5V8oG9szutHTJbkFCJqL7bUZHMao3nwwoGPWHjXxGqXP48Kwyw9oEqnY43P28Vjzd4txu6d5BcM7EgV",
  "key30": "2p9QUtSWgu3EojFkV3eZ8vhhcE673yZvzqbaYf4DCoHNX6K2dkEZaoVC31eqVBiQgfqr7DmQDdTyJjSGbwwKbt7",
  "key31": "4LzS1wvromUSatW18ENnq5oFHecUyBNnJagBQizBWUQaH5mzhx3b38Q8qf4ZgFECy7E3iQtNVgFLqZdWKPgzyMoA",
  "key32": "2ARo9otkDQcfTkvaTDzN9qoVMHcEg1G5bR61DtEvAFWsSjNY9NXMHhHDkSSvq8aWeN2fAjSMPJzuyvwpjtx2Phu",
  "key33": "2BFzUjSddPZkY9ikp3igFhPKEXM65UTqaU2br4uNzhcXBkW9PMDxKd88yjsBxc6sykFQuppV8xTHqDhmvGfxFTNq",
  "key34": "qy248rTDxDxPcgP761ym6rH5dTAiQjoQrjn5uh2SJoXt6WirQ4mi3QMQJQ2KaLtDYyKaCdU9YsHLutaxH6oBDbV",
  "key35": "67ASt1z1XKYuMec2eqywHViWMeLouJk7FTvDAx7R5QPisY8eUv9LguUdNZSEtQbzHBHGftE6mpAKBuBv1iLFo22e",
  "key36": "3CUXVSZQeKtWTQCKGpjJkmKosQihicSnM4AEqw4JVULFgRy9Xp1vLKft9eRWYzvW2oK89Ynzdz59od9BGTabEfh",
  "key37": "xK2gDTtgjdGU4yCF1wNugk75gsp1nL5EBh4QBUQcoSrFrmRMunTP1vtmhZdiDn3wvfoFMztYGA3FkoAfYnPy7b7",
  "key38": "R1QPCNqVdeuWaJ69hWB7NTy6SatjeuX7zAgr8fo4E1kRpJ42RZRZVVt1JZCxJzPGuVALJL2FbFcLcgqGoHFbGnt",
  "key39": "UhW5e5wzDfurfs1DXaGdrAptJLNoRbnJSBREa6x547aFFuPYt2aWrsMcSucBMJEdz9Zd2cM62akDkdjJ7NRJYL3",
  "key40": "48RwVSYb5kaJUQb8vtGzcM3QhvdByijh37H5S1vKHwhXkLCtEBhtUiK31v5gpZU2gNVS6RRaKHfxv6y6C63P6rW1",
  "key41": "5zag4F68tNRNhjLRVapSjLytiC2CgNKzXNYLXMU6KUsLAsFoRKhyarjmgUS7DbHtAkUPHnnUFkex6nWxAHCn17ek",
  "key42": "3s7xVVSkREaH21tXayEZt3FDpdGc49W37yCcwpiPZnnZH3xCRS7vKCeyU6u5Uuys4neu6L1R42B8mdQsZ7Lrb8Nh"
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
