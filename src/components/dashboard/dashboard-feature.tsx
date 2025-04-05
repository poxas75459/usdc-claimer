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
    "2kiMqkB1i8tfYAvG8eopy9Yjo2PupLvKaBhPXwQxmAJ8Vfivr4YnZ6PbJpQziX269ouSu3DjbRG3rpPkoJQyAoHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vsaPqF4Nto4paBZiyUKuQ8cmr6reYzDM52tQXZVorXmqADbLbpcbChHGPo2eyNYbobjGPUYAWUXLiQm3148X5P5",
  "key1": "3oWBnEbiAgHjgxq4jYXsWMpPXwJSr1z6iHLFPySdcsywobT44tyNesQfenpYNqpRDYHXJqub2YjJsav696jvvmvj",
  "key2": "5aii5xe1vfTR6THRXmEUyPktar8NF4WgS5MfW5CzSD6rsYEwrSfuPy6NuYhL1DUUw3mwsiNd1M1EpY8ZEcdNx3rk",
  "key3": "xdtiNUcZijiigPFFh4h6vJbPXxTKZfR1uBXQcEHn81LDS49wA7P1iiYqjgQwFSM22wWhYGZF7UxyESkj1Hw2rex",
  "key4": "34QCmB7G8iNngpUqGAeT9JWgnpUHvxceywrcuEbto6rmJ7TXwfFqGcWbAXCH31MjKLpfEUDZqpG6f8usGqhyPeWp",
  "key5": "3UUtoCuFT6YGwgpdTUSbay4SE3NABPdXSf5RFZC1tQziYGcKALPFdt857d97yDR24xGnKh9GwPmKQNCQiBbPCaWp",
  "key6": "Ur5vksZ7ZPK5Uc6MP5MaPHYDH6NuCfCzuQ8vCv1at4c78kvQh8D1oVX4KESwHJMhwZ5F58Y56ThuydqEtu5iW1A",
  "key7": "5pcvwiiX9mfcr6x7PhNcQQXvzEdErXJ7WBDHPYkTcy4aoMaeMoQtd9ba4tUrcagZHML7NCf61fy68H8QsKTTSSfE",
  "key8": "2nS6rppjbq9ZUyfVxy97VUs743AEE9vsDVg9GRJ1TVsuCV64g8VRw9A1JkJQgi6kYNVj1YRxYE97xreDcpsPv8Ps",
  "key9": "2CJbJffN1E9FYuuAQBC2TVjRkFdrtVTXct1x32NjSGwKJL5FEmZVvGk2sd6LyggXXn3XmpeEvR44j7Yh2Lhc4fni",
  "key10": "5VBFdHKH24XgLtBB237p9LfXt6wYcfeVJiSpABjRVFDyPiMsVqtLmyGRVbBt98anw51X9AQBJFhRawtAwQDtmR9Z",
  "key11": "3iXHt99BSk8CnemWjy1wJh571XpMoxnCSRaQFGhgWZqrqRooiTCxNxSpvH3TJJRDkHvXTaNa2im4cTuV1v4tMvaH",
  "key12": "3Wt8NjeJKizPWHPY5GxqBRL494etvZUbCe4cB4i4ZW9oCzx8WdD2mkfaFpPNM1gLbyhFY1a8o7zntf6R1txg1p43",
  "key13": "S34qa1QEBcmbdgm6DX8aHnVSvnEE2jrj3fNiLEyj8qiX9MNRaHqAW5goRmE9Bk7xnWAqxygi5MT28wjUTK7xeZt",
  "key14": "4yMbYF783KrDtgg2ed1wcRy8zr1euwkNvSivv48HQ83tNqVNJE83gPBQhiDFgiKotFFBcPGcAFw1h35JhngXXPXR",
  "key15": "46RNApR8xheoLAumcKi7JFqx1dD8sKzEWXRThaCGuuUD2JeEvh62TwV7eUxvKi66Y5rWdsypR6kWeuv7Rv4igsak",
  "key16": "4PvVdh5iZa5VAGihKLgRREHyaQXkFaC5AtFu7B6FifnZ5C7AXsizN2TUpBgn4gqR63u6Yfx447jgfmbbwD5BTibX",
  "key17": "3CHanPeRrx7W6pvMTHqdQdera3gdHiqAwzCpq9N4eWjfpDh11PLX27zhdGTeY1EFfbsyi6fX2edcdY1ecgdDtQHQ",
  "key18": "52zmGqdVveHS1jVhTzkk8Ys9E3KUnsMVzdHyfKPBmPic7zQ6fybo2NT7HW2JzEcKPv5JEhHueDLhzGAiDsodBKcw",
  "key19": "3SzhTUF9TUYCkKYime7x14S5XVAF9abVmmqC4XtpGYJqWSKGeM7kSbK1LXP51J5UeonT5fh8RmBpbYa7iesvYLEe",
  "key20": "wemgMaAH9m8fPnpDh2JKQpYaTdbTUQJY6R73U1Rfi1KXJ4HAvV8WHENikYpyEXSnnCTXaTAxjD9WhRn3BTG4EH9",
  "key21": "SPCrKkipusPwatc7tJUUnRe2Mp1WTGoCfcxgncbmxRw9fvtbWV7aKvGbhB587xvXPE65KXS9yZZs6BQQ2hJVwzj",
  "key22": "2eKmsZZefFjvDs9YmMGVfFNPvmSjd2YTQo13gbovnkDHxaNbMJ6KDGfJMxhZsNTCAPbCKJ27YBQaqBUHCpDezjGS",
  "key23": "41KTxCbZbd48J5s3SJHvT86E15AcMKsqr7cpqEFfhXBXWkNo41qyKoAhJyk21MKoDR2SmMHVKaPJri8WUq9SUgJU",
  "key24": "2UtuQAvLfqmPmtxdy7XvUzKkoCKpo6SE8S5uzCNx51AmzrqBqC5nqJ2CBRQ2hBs1MmHQKeFDMcWDSXjVuLikxeXr",
  "key25": "3Y33xbKQ9iuxC31MUR6DtGYRsBgUrJfEnk5oXqi9f3Nq5mP6wvbjN5536qKhhB92p9VJ44NUjL6qUvxbfSYyr6Yz",
  "key26": "3e3Vx8Jarg9XeqbtWmWscMXASNmauSVT7rQijxCw16PWoN92mvprDdcvxF3L9haXuskmA2NMTBo1tPHCrVKW9HML",
  "key27": "5zeD2DPAuDeNh53z2e37QTG3ynBpcQa36TuYUFP99g5rAvpNA7A1A2VvqqsPXNmM1pT2zmbRUv2n5gqLESwt4Cyk",
  "key28": "3t1jGaLFxHv9bP7A2ngZrKrCpY84qdS6t5YLG7FaMbeCbNLrsrCiXFEMCA6A37HxDhXX5Z3i78g7TGF3dFEuvEiH",
  "key29": "4Wi1j1pGHs3W9jgpShAdXo8g7cC874cBUzXV93MjVEcodoLmG2zS1AHsrB9ozXv2DCT7KxBk8JjSXvo2rEmC5gr1",
  "key30": "4HF7wLYFjKrFcP8TwinVTHgoHi3BVm2Jba4GZbLcqriw6s9ptXRWijGeWqUMQzxNAAFsyT9aHgSzHmnD7xXQADVR",
  "key31": "2fa1QMUoSiNN1oW7TjHE4ZYMk8NekCKizJ7UxW6JfnjLfF9yddayJ9MjZZn8vzNdWavUeQ3japQ15tNisDjxFS3c"
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
