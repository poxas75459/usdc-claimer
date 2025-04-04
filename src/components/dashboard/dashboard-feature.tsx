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
    "561aFwwcviYxnSSHevhWcx2NfZHQqmfCh1Vbz2eG7iKryWgaiqYSusDWwYrRSDaqUcai9MHUaMdqagbLd1zatPGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4quuYebRLPzvytFCaVrodJqZXmGPbpTcuUkvdCNr9xtnoaLrt7hmL8qZ4tvPzDUhacos3U3GkHWzTgk2Fk1VD5WE",
  "key1": "gyNKK1Hiq6KBJg1vTCsFTAznLLrhsxwjh8wVSvnr1ReaCpohxZD2pc6Awb2k1gojaTV7VjCDnQzuQmFsfoupXk2",
  "key2": "41AdR9jdnCqEeiRXLMf7HsKzHh6wo1K1yBcMCADEECZvDygGFkBfoQh5ZEsboqtcXNzUcTvjWQ73SFhnkFEPcZPB",
  "key3": "5opgXhcoxQxyTH5przoo7pPttMZe4DSAUKR61qD2gbbpC6QrURu8wbHaaY21MRVB31jKpyJ4UPnsPRqSMJz3mqoa",
  "key4": "37jbDUj6EoZz3URJMz6S7gAvf68Bzd5HETjkm9tM9xWcC3VdAMotzrSYSZZ41Y47VUoggmJDSrUueyYUsidysdrJ",
  "key5": "R6GUnN5Eab8wUBFZwhvmGHgDBRZunz3Rt1eMvLHBB9eeCEAFkP2rFZik5zjGvAuZjdDXfM27XzxaFfHG2aJ7etY",
  "key6": "vb4qn9TsuQWyH9FH5U8pZGrcKmsf1UNCLNLqjMSP6WQ4FuUhFW4233U1LnVBK149cJRdmXdRVfDVYhj5ys8Hd3h",
  "key7": "kXvWbRrwsRMYf9qkUiQqAhUe3KnHzC8V9aa11z61qqjTEnaM2aG5vQ9ov3S3mTDqyy3z5sWvcz1TRs16ucmqDbC",
  "key8": "BGE2mVwteR8cvyJdBMySv8rStpxddwpyTQaz9SFbuS2ycFRVjTtR83A36uRsMZ83XYK6ehL6nQqZNq6v8MmUcUV",
  "key9": "3XZeqyXMcp74NcuAb4UWWZ7TeFtvi7VrzpiwGNSkT36kxiFU4CvLtXXi3eUpTfuM8rUKHSRgYXvdNdN1z5ib5z7Z",
  "key10": "3SfnLUFUz869PLrR6569zNSSjhySG1JwzJNoeb5zzbt2YmjuBvkrg14x63hZCmnmR67FDE5er29noemUrD4ovYHi",
  "key11": "2Cjdg1fmrjhraqWGLAMuPycp397z2e8Rs9nhmATZWKHFSxMRnehpqB1Nuwn6ujot37jfbnNkDm4e1kAhMQKWwoCr",
  "key12": "5PeEc5PGwY6G8TzxjtXfSxL1ZJ13YQRyCKhRnHVhaTLArpJitXjxTSqAqhGKwkZToufAfLqzcZ9maEYABuPE78JH",
  "key13": "5bpWtzhZ8eh2GvmjEMMGEBaqKCgwbkKHe4wEifSAUJEmSCanaEu958L4N6hzs9iSXw6pLqJS2SgTdKNqJq7RMHrY",
  "key14": "264A2LQRxA2uUsZoxEFyfzmz3HyhzTxTRXAHCXaPiJnSMr5zm4yogq8vwnCPUNjVLuZFEZ9Mtq57JnMw97n7P3B7",
  "key15": "4kCszJdwKg9owjTLuW4iZsyhnnNpiVnivnWL1SDt9MYBeLEHsiuiGkLtk1fedhhwZFpffaPpuJjRhqaZsfuXYiP1",
  "key16": "7sixYja7NuWfdfqvJCsBxctAfrMj7fHuXHobapc7CE9ERvU3Tguw8Wmvuwr6QRYd2V1nmD4jr339mJ2PQbEUB9Y",
  "key17": "3zmB5sNsaB5SoL2ZvaJeTz9g18zgkhioH9W9mjui49i52yaWJ89yBXhtHrutZZp2vRDPFgMZ7JFn1ZNmffD5nC7N",
  "key18": "4MjFY34nw4UPFTwcrmdHDwtZtkSr12WdfbGqwBhNiFCn5618cfjBuRb8jWw6bi6A6hmMwnoss2284Uh9Zm7Tv9Qp",
  "key19": "3zDbCYE8a6JreXMuRv2dk7jE1MxmhEb7HrLR2AMeKqcqZn4oytcoAWmeqfJ4UayNNYUE8GuD4ZLTwDCqJkbqCYZx",
  "key20": "aUgRbbi3dn58VaELMrP6sfaraqyH5kQfMLvse7ef3LEJrzDMJKUqzSLMSyNPrESwjUzxvw424DgCShwVwULgjUc",
  "key21": "2t7m7mCLgpoa53dTDXCp8t64ifygSKdAYbzAb2qw15DSkGPhB9rkuRAbdc7mSNCZ3Y5kARdNUoijB6Dw6XhhpucH",
  "key22": "3P6yLV58uY6fCc6ESkagrTpYcfxdGvySo3PCd8xmLpFkuy41a5Fj5L2WBQ654ANagE8qK9QyuTErfJBEU9cWWSZp",
  "key23": "5o9KmTiMaAgQcLs4mrHRgVqgApMiMMArzQ9u4CV5NX64TLgGYvE6HgdtDQEnbnXjxZ6YrLDmixZ5KN9u8u2VgvB7",
  "key24": "2W7WKVLuF4RxoYtLGBbYpZqidjL6oK1EemGMAiqTrpVhRDnJQqhh1niU5Gj9QE39K8CafNLfJdmAYVmXLwBMLrvb",
  "key25": "2qRF9pHj3yatC1L65iq96DNUJPuyfCMsuFdSt9YwuAGJXbRBBGksPV6E2LBjdNdFKPemUcWwBWYWZQXMHs9KXnuY",
  "key26": "2YANzJCAoaU3BP69oxPDt3foXEDcYV4PuvqrMWvA77KHBegMjSNdoPypRk8nSAVWeRr3vgxosuWo1k4WZSRFd9bb",
  "key27": "31bFMYiK1XYTJkQ9pFBGouVrXphaKZkcUCnadhLtbfg227vtSQUG8cxD23uz7zPP1Pxp7hTo3HbtpfkRPDAfc8NR",
  "key28": "5pmEhsaodR4KGij4qjF2sC5iMKR89Uk9XCzzzA5RtYBWRc9U6acZ2X8T7bGJBjGErKMcQeV8wvv779nde8hx3ehx",
  "key29": "4a6jeHEdBJ4b3epCeoMnruvkGRuRJvQgZ9QQxPHRktAUkTB4nd754YkhKk6GZmTtUP3Vq8euwszwygj7rvDK7Cyw",
  "key30": "31FjXRe2RyHGLrb4VYYaTUFFmRPZvCzvFEDL74Qgi8o44phSGbPADwqqhEMbSaWRtEKuz3DWsv6Gs8jwvpURvB8f",
  "key31": "3KqD1gUYYsyUtv7KpFZeDCtJ5YcxwSqcE1WjvPViWUMzo2uASK1qmxKrvbsLvKidwos3tGGwnxqHLXxtu379pHtm",
  "key32": "4gVpRjYP8cQ6LrM4QvozGmSfJNE5FeNWgrbunfj8nrQfdpsTyyKPsUZWAmbZJSN3wK9SBXHRSfTJCFrZSFZxrbdc",
  "key33": "Kd74T3LY6rb4ykXNmv9ZaBH54BgttuWh6h2KHTcK6iDceA3cyH463xHWF1SHDknp4atdnJDQitFye97QFf5MMLn",
  "key34": "3z7Wc2RB44dyJraKNsxWpmm5xs8uegmEbfU1ij5vmuDJWh4mPkoaJwtzLqUGPvswQJHXrePCEjBJxEDYVK4oQ9XY",
  "key35": "5TdiY9etVtPWsr8W6BEmamhFi5F6FCJ5pZYediydD8hFwmwdTeTDh1bA6yECjvU1XMbYe6aze8gijxxo8Gfn4M4E",
  "key36": "vSFCg74bvLjehNLyqT9WfvhXfjhFFuDrwrWqAzNmgQtr8XyMr3pPrbf8o8ezgE8U1RZT2NBTkjEH86JTpZekHT1",
  "key37": "4q2bq7CtsoW3azvDzwR5aJ4JmPUe1EabMTWuG8kxXZ47cb1JRaVYDwiWJqq2vHFRQSKuqLjYiUxUUsiq2Q8jM4VF",
  "key38": "4iQGe9BL7EC9d4fF7p45f7hBfdtT53ysPSdmQY5G9Nbjvdxa1ggXSFAAryL1j79byeaZrDnep8kg5GSMgRXGmeNQ",
  "key39": "uWnbtHsduibESLuqhJKMwo6wRLHoFvFybHxAdwyngHcgxDvJA2DAYxaFUSBychCXVZM7ey3g1NzGDzhSEUAZLAN",
  "key40": "5UPsiYgLhy7PjpypLE7dncxP2eJzKgCJY23uRdBsezi3ZzwUvELtzQRXM5cxN6HaAdKNZfviCvZN5a2fnWNuUxjE",
  "key41": "2hcfGkhPHAWXxcLHdoJ8wSnQrL2WXGJhxaw6P2boTHLPK5aqq9ao8X3hJcRt9taeCB9oFhfAaRAa9phk3WEMUwC7",
  "key42": "4yXVwcWCK9ZhFzCPhzfYWg7nUmbitiWM5PRzbTsBTjdFxwt1p1iqGGZrTvegphWUsCVDxrW2No9XLkW8s4wRkWF2",
  "key43": "2n7ZH2Vn7Re6j1FJh1vn7QEonHnYYn77yLdPLidTZGMzuLtT2DKx2CMw135ddqYiXXSSetEK34MCzdxNHRouTwRs",
  "key44": "62V4Z9v91N6EiwY4JQdhH79fEFANXgLzdoLFWBVcjn4Bgvz3PB8FXR3cB1RipPUyrcUAqJPMG6jBAAWqxx3zgswN",
  "key45": "4Bdk89Q2pBT8V6BfJaVoe5P6eZKDgZX7DSnV52SnyX8kmFL3uA5vd4f1pMu4LPX5LruuoDc138m9SpLXAP2DaXq2",
  "key46": "2cGpWCjPccE9fisTazSFqJpHNNjziePLww29HvPMy6vMv31frAbMR8joykdzMDnr94ioK7qN66ofZGU7S6ZHjAUR",
  "key47": "ohRsCBBxErMw3e6pqGyC4eKggQE93tU85A7wpAmB54sWNgFNm71joQcPuseoxdLDY58w7NRUaQoFUC1YGKi1uZR",
  "key48": "281hXHmhGDTouxNHswfZfbHadoYTUDcd9LThFEfMTp9vvqpHSCQm8NEuuaFXXrDmgsDBtfGRmth6PuVvcu5amijS"
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
