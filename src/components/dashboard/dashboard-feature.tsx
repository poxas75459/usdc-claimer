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
    "34fX7CWgKx3gNxLi7dJXGvkS4dWKPgRPsVvCZBB482dda97rnrbsSNbWNQtcAUuBS9Nhhc9in4ZwJPvfEm47RnVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ax3jPBFEfmM7npu5B2dq4aNJ6c7ZcjxKkKGFzCsBBjVKzjudE7PC4Wr2DZ2UQy8pvhgb9kmWFEWbGR91waYK892",
  "key1": "sD8xc97oJYDFTMZN3CdKtQu5HhyhQckkGcptU1ZbYPgBfbgt6FLk2Vxjx2YstQaCuf3unRm2fZa34m4q8adGftp",
  "key2": "2B6HosgXGmB1YUkCS5ZkPz1DSZT23QQMWyrTFe7yAGdPBuyHBfbD4VC3xdS8CwXSUik4uipSzf25H9kfHzjEygBC",
  "key3": "3hUGiR4zAVWX8qUXmVFwoRxTMoMq9Cnoba8PiFfLJBPUA1UJ2aR9gAKgHLoTFGY8rtmDqD7b1uwRnfeaJKwJTNfF",
  "key4": "BBkkaA3mK53FP9fgxhH8sPFrr5Bezdv5gfmMpUnMYiMRzZWArdSTVweS19Zh8fivobtcD9Zc5J1gQNHt5LZUaH1",
  "key5": "3VGVdfQdkxwiyDismRVCaY3odcHSpx3UMECYuonndfnuMm8ansxhpBPEb8BWA9JKVWbw5uxbZYMc31oUhQQWiajt",
  "key6": "B7AzMoNCwmJCVmSE2q7Qe7R6F7RMfvLNJ6yXGbijL5bB7jb5ijpcxrgEEtxi1dXKR7zfCiGrUTSRt44gYAEeHSw",
  "key7": "4jTp5qwA5jzS295LFYP9UGtRP33NzM2Hkh488Aad8WKLdYSbWYDmQ4GtLWRgko3ZWxYuV2ihcpWtkcMjHM2kbugQ",
  "key8": "3eFXQJb2Gr1pCUHBaxS3gj5hhWtaBgHvjvChbjAPfgxB7dGke12rZM8iECfWrSRkDyuffUyYyVK8x61htDvnqgHv",
  "key9": "52WU2qb2NSPCsVuvbBetMKMQkyxkBZLfArCio8FqytqEHjvGkNyZLUAzN6pUtFn29FgXX1yonL19XU9dS9YDzLnv",
  "key10": "51XApuq9gRX3EqiVCWG6Hmd2JoVGSypg4PLVvBfWeLio7vmX5FrcYb6X6XxtgPDtGp6DGw4q7RbT16a6f9TR6fcQ",
  "key11": "2qpVdfZQduf3kwicqdaLGUwnx4b8q8u6ciVyzh5zxGj9K6kfkLF6VTVrMzURJzbeviV3Kb1LmHSft4bUqWdJUyus",
  "key12": "3pmSVMkLcknHRC9mnkNK5pQCTMtJ5Y9iAp7vr2xtHKCBaNEr7r8om3w3gPadq24zDMiRmgC7dcqW6Jg42CQVBpvz",
  "key13": "4VvUzNPBUmaaRVgGNKEdExMETZBWMKtNQtjxsDV3e2CSwNSNGzZU2AcF6TFq1Y2t1C4yKacXMx9UMn2MyN7JrAwm",
  "key14": "5fjhyTZoGtBwTp1F2ijHDDwx9C13z4ArP7iv7VrVj8J66u3LZUct5Zjfq8qT3qdm24UHaMfG2dGgcCEjeosQDTGP",
  "key15": "5zjgC3ozvwLDRns1QQANNXURNJNhgD7ZFfr81YajaFCTziLcJxbhE3VBx7EH4Sxzm8EohXfkrrfYpPheBJyN5Rca",
  "key16": "4fJp77otugxvpGWZPtJRvxSuDEqH6krAJom6L9Dh7s5KqcaqQsJXDRbKnKbKaojMjSbzKXnn4CGgiVoXWBPkB1G6",
  "key17": "3EZj7hSLJzW5tTNACHhYbbDD8f6Saz46UwRc1YC2sBhjG67YqHJJNJnypzTcL6fgqYuNzriW3sk2s83UNjUUirYY",
  "key18": "3fMCKCgWpqZZuhCHNkCD5aQi7JED8y3Ewffgig1GmpZWaNDicmVZMtpYsNa9AoEVc5ZGTsqeHtwEA8FrmNNSRDy3",
  "key19": "3Qp6NH5LNj5H5AwZkord9iatNuYhsE4rPkqgjG8EwFq5gvefaFiC1oZNgy5TY45Mf69WhCXofhimzqWRfXMV6s6e",
  "key20": "u2f7aSj9JvGhecSD64NjHfFyrpyb5PjDQ2Nme2FXXvy74PkWmuFJgvHHHmyqcizwz643ffP5L7meHiCynJMeQcz",
  "key21": "2skqKmc1YLawTmazdNGbpR21ox3YjCc9yefPpWaYRY8VqLmbVp9vpCViUsqxiYHJfFw67mnuX3bnEZocVgSeqFuD",
  "key22": "4SkZcdXbk8vEtLgDajfC3qkaqPwAHfLKaCMCC48keSaW3uQrVTyUgvapSdJQjFQNSZ5kMFyfuMUGEUZ5XE5Y5BSN",
  "key23": "2Rzgkuiyh2kA17z8WfHL3Ax66KYis5b2jcWtG33UYZ5BJdr8q5t8Djgc4rSdqLQM7gbNhkJGvUU2LwrsvE9VhMMT",
  "key24": "2aaTsp3Emmko3r1bA3NiqCSic9ZBitNN3hbfoXEbyJv8JBaC5kyRhiyf4q5ussHuVJMREwVhrLarcezwWcTBMKev",
  "key25": "q6J5UGMH9yjCRhNdbJDsf7RXjoWP6J1qgvyp3bEbwAqE3gzLtsuZj2ys8seDQ9SRRERHoxyANFuxyu2vLSTtTa3",
  "key26": "3BDY2YmLiDPRUmPJMmqP5LNNCCnEreSw7kNejs4wqtJgNRt77nEwJr8QPyNg6BC6SSHj6WFMeRtKTPd8QDB1cDCW",
  "key27": "2KgZrxcUogR98NGKe2paXLMLujvr8HkxyDDhnpUibq2mXv78ETqP63t5V82voNCJBhR8vtHUNZBMH8wNQo1rnGp5",
  "key28": "9zH5UbVhS2KgVzMNrTKnJ8nBYYtP9CLmUP324LCmCbgwo5ajQLETB6uiWxA4bKRFzKvrote6U4vhq61ih64Ldge",
  "key29": "3NyBvFvEbwejPN3i7K6Nh12rpvLzVD7YkBqQWkpFB2AWsThxL45kTtxApYmXG5fBpZ37jokH4kY7gXvewhwGTvZW",
  "key30": "3WnsA8t7dE3GGDgd9juZQmJGQv2bPAtsh7mkFZezcn7rUfz6oZgoavjmbDYp6eydCsyD9xcD5RoLkVtiWUYCAijH",
  "key31": "3dXNRppEn2Vn3Set5VJdWauiZ3Q8KbMieE3HZWhjDhhmZdro9pn1FQpGRaL5kougZXth6KczZyLFJrsQY1N3TZBk",
  "key32": "3K1BkEsojFutMtPpfFH5b68tNuoteb8c88DYkCr4mx1f6yXprog7tPZ88LwxQeeWvmpnrLFWCNwTGv9ENyktcd7H",
  "key33": "3AdE4yFUA71K3exL3aMvvvjEcJsYEnA9R8JPe7QzvN3VTAHxqDM5VtkMedtjHsj4NB8LVfuz1ueKf8qG7UF7atNf",
  "key34": "2YrY8CrtCyopcV77mt2GVaFj4xV1qpxHwZTRZwokU8SgWKXEn2aizDi1sWvfWQQoEkJkTc9iVfKtJiVzw4E3PDzn",
  "key35": "4rYRAq19SD4uzbvpJjTQqDLjJhuTFdeNQPGqFTzviRLmkn6wwF1PGKULaqkFUaMgPhPi2U8mEQgMF5wr2X2SKniU",
  "key36": "3eu8LcHhsdjcSdLSXs2P5pCSaX69C3E3jxAK1Mjgkk6PB1K3RUyS7wy8FTsgPwemGKytVQMoMohrVTrAA3sEwZSa",
  "key37": "5W3dm3vBL1WAECK3TWizhmYfWqoNgqrRnTYT1TzgvDmBG3xEsRDQj7VtXFBoJ1mZUWgbniwBsotxa4E7UWGrpBdV",
  "key38": "2tKwpv52VGNhR7cccwCyEEF9SDUE4cpSau9WJWVPwKqx3Xtzr2v5S7dHf7hSkt6ufiu1tGZotDWN66Fjfr9Dztdq"
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
