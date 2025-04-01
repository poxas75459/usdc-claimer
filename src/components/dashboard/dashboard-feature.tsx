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
    "56WFEpG7WJda8PW7Fdsb7A2dPtY7j6nEFLdnfh3Joxdt77ydxLfdRy6ML5gE9hfSakstiWerjd2ojFpszEW2Ms6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uPNgHKD2mQtLpR84LiLYmyeXrfnCHYphFMjEtF1X2g9CzjebCyHmwCYX3sbotyD7nSHeD2PTaoZ5ZQjC6rW78pc",
  "key1": "4FzMXxUwqsUWikPHie8pkwPazf1ysxdpi7p5nJm7frbQwWGx2H3RyZgzYtpaua8hfYmxBnPoVYrDREoowuQNrAMY",
  "key2": "x8ZSbgYkU1UqSKtGbwjpk4ZAoUzJ3ufkk1z6Ast78uK35udigpSzNd6ipPxmbsW6KSEc6AsYkzuv3qmxnWqBCpE",
  "key3": "2JhDWTBerCyqR8LEjZC4hrX6x4w5WDs1gjTQRm5YtLh2FHNGP6doD8qbgPeuYVM5XyALkML15uRFz1ufNYX5a3Ac",
  "key4": "5Xw1SHYdotaWHgBhmi6ZDw8ZyxYtxRxmW6ALofpaLbL8puz62Mc6qv1sRSNZAMJQVhzEK3sBRHvkBX5s6Jk5VLhg",
  "key5": "cV32CofHzRBX3XxFtLkj1HwPEfLhnDS1HDcLZ5DpZTCn7iq5sS5ZgJ9iZCbVNNFBhioVTCzKDvv9kfTXzk4tdd2",
  "key6": "5a7ceFvyvhiachVLX6rvEyf8yFkMDqq7DkQaKvcyjPV4WhJpqWDW63WviCCAptvghnnu9SLkcDzJfPNuKsbo7pEq",
  "key7": "zCmN2JquNnN9jcJLDcqJ2FrMEamaqDsQEjC9qXbu4ZQSdchYRywqdfnvRatWu9i57CEb6va7HFq38Fa4VZfmAQc",
  "key8": "i8uGHKYxzHnA5KGfjLcXrFbuCKJxDCiromQ1h3XaaYr1Umn8zE8PMWsa9LwUV2H8ws6eNzUAEVCDXFrijvAdvny",
  "key9": "4UfyCQ4E9Spfmf1Dm6CGariCqVTFmrZCT8kRFcmnxoAYqGvt2XBZyUkBSQgmZ82kdDLqpFij7ZHooQ6ZBf9C8WWa",
  "key10": "HJPTaRBmDMZTA2qgC1xFq5Hoy5iZVo2WSqDyoq4CekU81NZ5LnWtsVAxz3s9DQWcTQgfYFagQ6MqxrF1PGLyRgp",
  "key11": "RYN8aBZMHK8r4YAK28nbpP5x66TqqdPn9EU6BhukC71PaZKfDpDfSPKPFFLvamCBHXgpP2wHp1ay24hxfaAnKaN",
  "key12": "2kvcgJuUTSUiQjnnmVizrt21kc8gf3AUrKwxrSGBgHywehBPzFS4S5Pn75cxnXYCtg2BCgXrM7g9PrxckjGG3Jz",
  "key13": "5gegD9SwVfE9vpg66RH5k4iLhvTRMfbM6WpPK4275q59MR9hvYrgkkeFkSaauDPzNrzpiugJZw8wuaoP5HQinvxB",
  "key14": "2wEvM3zp26N2YWYDB8ogdpQU2H27m9MZ6aWjupTR9t648R55kLMtVSvf5ijNXGRLY9n4h22N4XDeW1kcSUieTDue",
  "key15": "48SX5URxJagfqfx8KCS6B5QrfEeKSXX1PaWnPJ7N3rdu2csc2bH3FQ2XNcgrgx6LfBmqt8XpBp7i51xDeyqGxPV7",
  "key16": "3TiBKXQjdYpfvzaWuRwipHthkWV7b92NDodjfjZEqzCMEopcgTtppSUxdfUNaLP2JYStkGVj8Sc8sFXdyuseuzUY",
  "key17": "3gT1PGox4j2hjARX4fFPLJSEbj1MhWCqJeRyPXTCyva9eHHGWJ5AhyE3gDB9PA635m762rq8wtcE2uSTUHwZkhr3",
  "key18": "4bdiTkbG5Ut3EQmmqGo53zsK2MpNDxgY3tLRbz6bmtMqHc8g27MBSkHw3Kgh3yNzYgbKtvMbNjCMf35vrjKpPaRf",
  "key19": "5x2cyFNurtf5hAcf86xDypKiMVyqY4JzpHoGZujpfYRgRF3qTXnN3pFTbYHLSpTUkM5qEoAisqKtMkhtAA2h8xQq",
  "key20": "23EwDcyuyYXkQfuvqcxHLVSdwpNP4QS9AyNwHy3hoC14Sdwj8eTsBr11Dj9LagYZ4b67X1Fz8YEZAe1cy5zPKFY6",
  "key21": "5RR6bVHFzwc5S3KJV6M6d2eobydfdjWsTJZRcw7Hk5kB7Fg7Ra9YfA6ZGSPfb7eGZQ5taTHQqCadc3N2k48Mgr2d",
  "key22": "o8FVi54gQ3pNhyTjMpQYchJGRwqskscgXCX56YFXCbAm6kK1qEN5RtZrMEpJWiE54cLHVWtyqNqtFMFz8TKnWVL",
  "key23": "4xgSQe8cAvhcxtQ76jki7c9EjZamGqMrrCJUMpujC6YDsD4jncjLSccuC76Zdv8cRWWHn2gyA4dJfirPcTxHF5iT",
  "key24": "3k6Rxn48gBJ1UkSgkiVLPWiLFkAvsTTEEQ72ytXvXQpmX1AJUHr7ht51BzJEB5fhjZ2HdSHmcgJjN9ZRZ8ppM6rg",
  "key25": "6pj1woFQDctLz7ss5j6vb9hjPgT5zbF65CvonveskGADe2ydmMWhbuhnemuiMBcpRWaW5FhTV4R3G1exGW9nj73",
  "key26": "4whrfz18Kee6rdKvdKawdk72ZMbWj8DmQLemidUVW3zw1QWpHXXiiL9XhwAeDfDk31zZC1Jn6gDAtsosa9wYLrv5",
  "key27": "nhCWoveMk9UJDYiC5x2bzQh8pUHgXQ9ZkRJjw7jW93dMcQuupbGqNKxHmGbZ5DYPxdz7vtXNWijG5Yw5Jy1ULLU",
  "key28": "66Sbb72G2nJnuX6Z4Xhrez7599fvhHNPkJnHGHzST3hJo6u9W8GLsCL6iDVW5NbU77AaKvnvyDecZ2C62x4X8XiA",
  "key29": "3g9vn7QP69qBREAvjS6TnqXxFNZLgFBUqnTRetXSzn6jszHd6pTiWN8W6ZQbzwk2JtMRDp9oxs66GFGd5Uvx7mgr",
  "key30": "5pBqT5S4tAWvfUe4SUoiDnnfE3cvMrk1ZgjRRxAc9vv3D7bKShtkesQfZDTo69ZtFYjZupS4cWnX28FXZEwLeV9Q"
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
