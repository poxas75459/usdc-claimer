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
    "2NSHfvcnZgmp9WFYad4rx4miydE27YGVC6i3ZYHzuGCr2pZfB2BvyuiG9rfqpT81iyHPhSXssUYfSmkoj77cAxRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hDPKq518o9tGgxp43v9mB3fruvwMA1aJaATraNpF6mkXBkf8vAnsKiEvLb52YZ58JcsccveTK6CG7D9sFz9Zqhs",
  "key1": "3z2DfsXx51CiJh2eEzjqGQ4KgHsXMQ16PadMkaYuphdt9PukRpXy6KBroCKLuC68ZQR9jwzYBM6WGq3pSt4okcev",
  "key2": "546oENyf7Q7FqxVTo3h9xv216JKDsxBhAsQUpUCNCu1SngMMrVBcW4VZFystvzqvPo1Hrv7kGxGrzsBY5Hu3djoq",
  "key3": "LWigedf6cswgYX4tPaA9ZsKZ3LqWR5m8GVJt3Rm58tHBYFgEdhFwqn41FpJPB1Hz5wwT8Dqti4cWVDAhh5imfvi",
  "key4": "4xY2dJMZ5NVGNkBJnbXhxr6Cnd1tkBeXspBmKY6FNqd8F9GL3kxZ85xnJWF6w5A8sep9y5mQq8XzvDegBrKjtbuy",
  "key5": "3AdkKKzBmX6Se2uNFG1TbwfRT7fJZ8BmWse2YG65N8jyCHo5B1eZLDHm4BMPXS2vvLUAGk6atbAZVa9yistJuUQG",
  "key6": "3wjuiXqzcJFqeESdLz4PXRLAoYkJnWWr5vaMeJwHABghGqDEAk2FhfchFxm7pRBswa6eqUe1TYM5bFKKqA6BEc9h",
  "key7": "auzemurMnhPxLweKCQuEWX3sgXtQbUoghwKpRCmqXJ4XY74MyJ9UVcybt8ig5mCi53zozRzPTmFEdvYeEeCCES5",
  "key8": "9ELsAbE2iY4scfLZcvbMAxaXNgBZ2cH366gtQPpVrunpCUVUWStZYnA7ytXuHp7WzVLfTpLYRMeYt4Loovbc1mW",
  "key9": "BqtqfKfVz5stkSFBY53HqYihfK2uZPJJP39iNUbspF77HTwaHhWio8AztzWUJ8QBne1ywWSb1zoKVtocD2ZZa8S",
  "key10": "4mRj9PCbBvGB4pTTXskkUaNVS5kZfnanZW1MKkJwkufgrQcenjzQDaCcLHgnkEwFjqVUBQd44bpSBVFKpoEPmMup",
  "key11": "aJVLrd72tGACbfn1MayRVto2aof8fKKKPu597CyWmSDvvqPepnhoWuuF2ePBJzcHzty9SdisbYkARMAsi1Hn9bo",
  "key12": "4LFkvrStSeR4APMA4dxiEs3PcE5zVba6LMC4RzBxcTKaBUWQKfeciK6rT6M6aVYfXDm1kqad13oqG58wZYmmU1qB",
  "key13": "4Bhz5RvUZzxtBXEa6QXfvFFKyZdmHoBpyBo8REbqcT83ezkMkmcUwmuUUKCVkSbrpGE1rTuq2hftzJrayVeDPD7K",
  "key14": "4TFZUHWee68y7pC5cNqMh8UHu5dKobPwrM8ev2jxWYoS6gpvCt8FGxCijKBRY1qDDAgNQWACrPCpNViQGDNHCW9L",
  "key15": "2AUUNshejQaEVnnsCpif1r1qmYKdZ9V3zzzPsa12wFLVpmD9WdygshvKkRdzbuuopxsFd2yS65RjpgNg3GhgNhFE",
  "key16": "2zqmMi1raDyeHr7cDnNhnV2CQtfSGYusHc2iPjFNBR2Qfgg1wxHG9pM5Aqz1B5vUAKMHadZZtskVdwh7cB6Nv84t",
  "key17": "2THG1m5yWi3UAPtt3eyt8ynGWSUpYuMvS6bTWcLzeDvFnR26HhSLbsuASfhb6oBifqEZ8Bf2QF5PSFJCRxLT8tLF",
  "key18": "4Kzc7hro4YNqmDmaCPbE5W1zqHJnEvScDtSdGig4NfjgPfQU1X38VW7yQvhXdwzCPP1fBzE1gte7CSapv5wpdbmE",
  "key19": "2UjQH2zKByMx39WWBccEqmJW91mjHqKy3FFXbLYgRM8bxRpBtsPMtcVbsDRmmUwPYc6CxGQVNwS6uAxG2E63zBTf",
  "key20": "5R45jMuFedR4sYt9RkGaSXvY7LcRV8X1MjY16NUSXS5meMu6XiiV7QtDrg9YPahCLQK1NRFWj3fxS3qxiKPwHsHc",
  "key21": "5shAFLB2vihVrit2q8puVNgSxHZXeBUoCyJArMvoVx9kkNr2pDDhj9ScqyAyCJUcf3jxq1C4yEEb9pZ6ZYa8gkeo",
  "key22": "YXQiQtEXB2x32JdHnurqYKc9TUjE8vZcgQuuqrLYWMtPvoL4eU4ivRe8kMoFs8CNY9zwDfZNvQ3UNCEVWsJ86LY",
  "key23": "5T7QzBiVBqjg6C9g9SoAdf6RBrF1AuUwNrLdgt55DdhiH9gcgGEPQBjncUTtZWQ43wsoigA1jS2Eq2RWZTZG54ko",
  "key24": "2s2xWxVNjfkb72zD1VAySALYnhE9WDUufQxevrT6SH9Dvnv73VjkUhDKTntXN6d8stvcBPWUL1aoDrZzyzyzRrdD",
  "key25": "2M658wwe7KfkgvVB5mTz2GkiaWTVui6sCioHFqbzYLMRHbNUpSgQL1q5kmiZRAkyGgryrPFjGL6xoyq9moLP1yVp",
  "key26": "2KJvnudg8f1tJRNqBWAqd7xWkPxAaCJ2UBpm1tGut2a1m1kf95yxPbmmEKqeFxgmkMPrRYWtCVeUDgsoVogoDtkp",
  "key27": "MXN5xghPKjpwouo5EhM7P7NpQXrszHjLgaqbdm2tqt8GBbYMESH6Y13f4H7xGWemXGnWnx5BdLvubG6tw1exAUx",
  "key28": "27AoMb7K5Aja77K7rhnqikrhRX5dd3Ygtpukin6tZTtMbKcFbMdhyf2esMqrhguEX4bgK2z77R33no9XsKCaRp3P",
  "key29": "3rATCKbUyJ9GrY5fn5dtpW5iHNEzgSXrft8Sycypa39gWZr6ie4xxawDdS3wNMydWkn8LKnuFvr5pjMNGmAPu3ac",
  "key30": "QVUUwGGmWcahNEJnYeYL3NcL157J25CNExriYuM43dC6ip7XdXAkasw3xeeCXqd2xA12TpcdE64ggx459jWMjU6",
  "key31": "22mK2WLpCeJyPKf5KH1gVoEkD8iQgQurjUtAT3EcLMzWEwMtmfwHaJu23PGnBSwsJs9F17VzfpGKQU5GEbYhmk9f",
  "key32": "5Z8uQxYomsbivtYV4epRGAAyAKSTYzw2LCvpC9GsgedtH4xBn8BZTJTzT87nMRgC6KR8Dkdxqdib6pZvZ1hJD5sd",
  "key33": "3u6xg3pf2ZPw36h88uQiXoQJmjuhfFVnxVuv18sX6bBVpH9GjPbq6CZ9VZNP8kFuzmSiUqH6c1sqN5nbQP5Tbxng",
  "key34": "59i2qu4euyDCv1DvDiuyDxcR8q2Jcy3t5EKYRCuGGPvwWDVbAQmm9wFD9BgcDjpfHkYtNiUZ7RfKzL7Y6yjDRKKK",
  "key35": "4QrADjt97it8gUfm8xbVWSP1bpRybtvxeKNjfjdQ4uJwDBk64Yfs1bEGcEWiyXPS7yEgMWH9swLzHVtM5T2eBWoY"
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
