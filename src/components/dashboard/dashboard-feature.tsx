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
    "4MRcxseBSG1UQJ67BkNhXb41fnqcTJnMJTm65isNbfkpFvLhaPDF25FAkBeKmjmAtyeNypsDFASpxNXmaHRxZinn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lq65P5tneGGvjQxc1vkGe5d6DrYxnvNyuS8VkNZBAFszmUfWsyGYV4wg2oHEiAk5Eg5YziGp8eo2Wpccv2c2rF",
  "key1": "56kukr5KKEczVnUqaKc4sa6NBxu3VaCX9bNwWw7F8HjjoKej3BeCKC4NW1L6277KtNKVC2BUjvHYros43BE5FVdu",
  "key2": "5A3sqrnz8Zf1Ysm72fT6uUK4fV2zx1k7nSHxNKYN2RE5BUB2SVarnDkYnKkLUwP1ZyxH5SbAWEwPnYCwo4bj4yic",
  "key3": "3NPYxnsMMURus476XoTPQ3ptqx9P4CSwTDnc8QrcLCWdtk9HVzkkrEbV8BbVUvRKuGt2Fa4qadkoEac7hiwcQL5a",
  "key4": "25ZJdsScTrqn3RBgDFxD2r3XXjvhGEz3rPjjZHK6v1F5XoDstmgXrUWHDsv3vGVzrFBjLgzcfjmiMFsASip9pNwr",
  "key5": "tWnTYYWL6y93Yx9YPV8Qr7VzYWm1gFogyREKaTbpNHXSKA1nuVeX2PvzJyw5GHfh5ab1UDBz5wTETTbKHYQ4WBh",
  "key6": "5hdHG6bwHKAksMbXwvUTTKLcGLWyRbqKo6WjnBKBfZoYGaMbYArMAkGXMHetXxZD1VTJaoc2iXojYB4NUAscNJAX",
  "key7": "4P3ydcbd1QocWK4rEqMDiutKZrJ6ykYbVUdKYAdF1jy3ake1zbdRGUEK3EQqzpUdPPqgTqLZ5h4wjtxu5dE29BnZ",
  "key8": "3GKJNfpSGcFNMCaND8kSQNzFVNWpHXKfqCBYSubeDGXktcppVGc61jew6kDttScCyLQdkcSwfPaf5djQFh1aGjX6",
  "key9": "2CMPaaTxubPLrBQFuiuLxVYNJrdCxac8VgywFBrVqRAHbTvAF7x5GC82QCyQUQv7AmggavA26vhzaB2uwvXNz1FA",
  "key10": "aRmaHSoJrPizie5h3cmkuWmgjUXcKmSUgvgZPqcazfzQ5RkdKiRxVtep61F4SoHo9DBsrsHmedyQe4pSQmsWjbS",
  "key11": "5JL4c7yzPQMGsXkyeAxDtJ3VtPw4BoY2rCLcxNkU76HG5aJtKNwD4sSWC7zFjGQFZSHjP3Pig9jhZ9Qw5URgip2K",
  "key12": "4hsA51pciaV5Nx4TNKnptdaW3Z4DKPc8ue2spoSrHwa6eNkw5o3TyVrpzju5uoV9XCTg5JzS1Gwi7nKp75MzbPXD",
  "key13": "5KXuqSeh9NBJYdQ7jF5eHpHkhfgMGCoaCVFHpofKFPT4ENL53ntSC9EvYsH6ogyPhJVcQYttY2KVdwRcS9q9KqLq",
  "key14": "2tCvCdLaj1R382V7hXRwADmYR4nXGYVysMpUe5a1QFsBm5bZx48DCdCATTzFfbCZopKdGaJN3jCeVLgGu9yVfvHf",
  "key15": "p5ith26GcFbMuAdG3Sd8QcwmuWVi9GVcpDDRgxaquvUuHsrmxYPk5eeZ1erHLuaA2aa2Q6TYCTcVKXdeRe1izW1",
  "key16": "4hxmiSNuPHZ7kH5qAyp6Rcy5YAuoCBABDSheZaXGGUVGS8pTv48DLATCC78Lo8HA3zsbAQmetyAFMxjELemxQdxq",
  "key17": "3VcJ9581oorH3Zr7zkr19qgfR9Xdme8E2RxnaxiwZmNRFGQZAf2dk7i2S6u9Ro7eqP4UTCWpw3c7E1gUmYmxfQZ2",
  "key18": "66ebB61S8hDwkEbLF8zAz6AzVL7WkqKPxDiu4jNxxyaggQzXeHG3AJMFpCAPpABmRTGmPpjEfSn3zyPvEip1Szua",
  "key19": "hqE3A1wgcE7v2vD9LYQcuPH62trZJgiTQUfKR6jpYnmcsmcYWjH2fsVeT33V2tCXsevEREhhJ284kXAXUgmc2c9",
  "key20": "2NrBmY5KzDGusNJVpTEgz9HvuBiXwG2EDw4aKJLfBEiitphqZBoftvZVdCmGJoLhi7NuMPU2LLmiiWo8fdzE7Gkw",
  "key21": "5yZhr3HGEN5FvnLUgaTAfnmbL5B36kgfWoudDWhms6cJaHX4XM4pELDyuyY3R6quxHUpBxTEz2YFbRGjvipTex2V",
  "key22": "55yKcayWNZ7Mz2eYcvg7N1E7Vo2sTPCTUstVpaDZ7dZu3ccXxHr4dkD2DcbjyGctiU2Q4QCEydgPkBBkwtBFAZCs",
  "key23": "5zawrbmssQL21aAerMTLkayckq54ZkzVjLwS7jmoguZGEUKcN7qYUJnLkuUni8W8Ln25krq1pnWA2VDGjmU7C6b",
  "key24": "612KwfLC3pTvGNpQGGMc8mfQvSgDytt5RC9BP5Uh9T4u4CydqyScad4DnHpp1ZCwzrEdRk3jRU5AxhUEetxjC5RU",
  "key25": "Hubc4X3rRTRr2s2PL7wVA6UoUkFmQmfT8LUrD2rtqPS6gFyUcaaD11Juc6snMKDVXVfpJmHCCFCmPWf1d9eqRQz",
  "key26": "4Nkn857yGw74Cv4bYutMUVHX4STtS4yqicDDJLuHfrhR6vsnrRJqCP2tCqRSc8Ybyf3sg2sCDiPkfazZ641vZzDg",
  "key27": "2heaacEKDAB2QYkNEnh4XDDzD3mDv1BWdfbaDqzzt4ouJA3werLUc3JA6pWeh4yjVnx69zxKxDQKD6zQerMo28dz",
  "key28": "2yaxUQoFgAc7V1UfneNDCXFCN12JcP46TK89CP2oB2rZHqU3q23Co7G4VuFaaGe3uaFXoBXopQA9XWkm9j448XW",
  "key29": "5FkhNWtjmNPyFKc9XQ7iwRsvkYP6ADW9Sc8wQpkqm8EKryTTTU7D1NwF9eAfoUX5rUeS2z1JMjPHrgDGJKPXY3Bs"
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
