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
    "5ekt6HcCp3rgKTMwB48Z8V4poFthPZjK2yyysfAe22e81Zhq2FNXYb27HJnGiGuF3vnB2RcoM9sVW7rUxJd5fCUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LG5aeG7yc7LJJkr8Q2DWPtiCWnMrkegqs2wvEMmBpro1cP9TdfqrwcjhJqcwWg6DVRiHmvk7xHLSNLHAE18MnPQ",
  "key1": "63wfZkGFDKZCv4ZpfA4gVAtcrkVejBiRgyUaYuSpXaMZ19JdAMqPTg8oEuwvbh4MByyXB5GitgfxBC4pLa7r6uw1",
  "key2": "3DwBrskhdzhDRMosctXqEdSTaRgMR7rDAeckFSmHnu15aLwJC3bita3BajyR3pv642VKXQCRLZzuKuthdBBx6ASk",
  "key3": "bhnAyoBT7xsgAy1SkMkgyVcuXHgUk6R2wAw1jNMs1k3jEiaaxwNg7EJLzLw9MtufzsCVZuZDEL1xDnDbu7xfNpj",
  "key4": "5okruAYBgbkBZBD8mWFrpfD61jZYKu6EpisCWSLwP2TpFDyk8Jz8VrX21eQN8nQJucovQ8KNYwt5ge88vgniru8c",
  "key5": "2ZAXSMUTydEqE7RPAGyyy8T3T7vTCeSKswbtyfnW4ZpLUDZWqaZCrRno9uvjHNVzES3uBpmTR6GXsqgXeheNsKxD",
  "key6": "Xe9u9BdSwHghLZpSHNMN8ex1fxKcZxQtRzS76z1p8kQbVEzsTFUtf31CTKuWxndvZkVoMru1wKe8xT6X1M4NuTY",
  "key7": "66eMYAFW9NtqnJbrLHZdPkkEbTpGxsQQU5pf763peXmKitsVisSkBwBp8D9Ewtsz5wx2ogdxkwS6bcbf9K8DSALX",
  "key8": "3aE8sGeQemLAUGDTbUHNx2HpqaoZ2cNpgS3VjRXLQXHNk1PrXxqe5JMX1gvUsTryGg9vBXYBgH6mA5PnxgTLuUbe",
  "key9": "ejrzuyKAcA61AzwprEaDmveBzQv9sHsvDKS2p7YtxJjDfTS7SwTyG8GKN6KhotXQs1mcQsho7gEEuYTHjke4cwr",
  "key10": "4BrAoCijLFhz9uMo9KeZw3qb19LwdMUr5D6kYDrgm1672oTV71gUnZnL5qE34rkXAw7BeuuFJqwimM96wv6SLTPn",
  "key11": "3QUd5uS3saPr1vUSJePzvhv7XD2bmbuuiFJnBnMDGd31STNMFyDVWPLHtguDktHNWwBZBCQVU7PgBGtM9n5sv4QL",
  "key12": "5PYEf7cnDJtyMLobRa4ti9sJVu8aDBJHqtSkHMS32pLfkjvma1CVfJP8PJcVFit4drqiWvF2W6J4aCfGZ3wwuQmw",
  "key13": "21ig4DyWCKuiLn8ErYFbdSKBGkmPbQh9XuCRGJgyzFeazasoJBkC2e8DpTQbkvykSZujGKyAi4Lc5C4mQfyjyEKt",
  "key14": "4RdpvPpqLDWY1jgQjg5G8BKtC1PY1huczFcaudTqjusy4p4MzsSjLem2JRJ1T8s2oQpJoM5Kux7TET55SFC5ieZ8",
  "key15": "5xFYwo1QUmAXot7L2aFnD8mSk8cmaUrtoRdygxfr7F2siTm8vXjgcETb2KZPMEn8PrUsvcuNadbe4erWuFge9kmB",
  "key16": "3zqCfmmzg1gUcsABk6jn14ioopRdSXZ5RTBwAxvMLREybXfp55qsVBGvYFK2eFbU9crRsMJNxSK4ZJZNpe1aQaJd",
  "key17": "N1vfvPzVKRrSiq6aNRjCVuPvzuMRLUaGmRWj153Yoe4jeXeqAwyeSMF383iNpCQNcc6tmXJqUaTcgHWx1Vq2JEo",
  "key18": "4FGzN5mjyp1uzmXoSym1kGMHgkHfh1KGf3zMuyPkaPYjw7EXQax9SzRb7euxezGr3owpF3by5hugLgDzav5pzCkV",
  "key19": "3yUV99LzwKqKoqGvvDLArJLftdesWfFhEvYvfhc8q2F2WhzTi2FHMtQvvc6dqQBjBWojZeMkcks4ysrFWxayNRcv",
  "key20": "4BFsEphdkgx1LysyWcNSDnLT9BvCuCvgmUBP7n7r5d3gsAMrTC2oCUgf39L28P79c4b9kVjVwc4GyW9Dx8gvebbW",
  "key21": "2Ts24QAkw2ux6uVPrRKZKVoqF8YpkyM5nJTQZYwEvwg92SGApvEc5VYaVAsTfJgkhE1f4cMHrzdQLy3bzdL6ApMK",
  "key22": "mhhpFCpLHtQRstGtj5zcJiKcF1oF5QGqU2SCuerLSYMvraJqMeyVAzW823Lp9xj5ixwn8V2JARRGzvqqWu1sKXC",
  "key23": "5cdU1USxckTSdibwgbnTWqco1p56BJS542C9o1QHZVsdW9Wf79zTCMPC7YH1rPB64rftWYVSUP5473AWD1Uf9jMz",
  "key24": "4NGQ9WFLhkr2BHjRCZcZfeCgsTsVAr1PHFHFFBQkjnmWcTB4kVuuzPScM5VL161PAcfJiV6Fn31hK2oHZQrfMHJa",
  "key25": "3CbTgLwVXvMbheg8aZ5pUUxXs2dnEFHwtbRqHTvxneYyJiqKCanmegebcpPsQkNvaPJ5f8rNzHcipBtoEN6F2Boa",
  "key26": "668JsnSZx1HXEMbPkF3iurHVAt5xvTVYQRPdQ4ZPVfg1pxzzmQso25WX3LWwTxSQkELNK8wDF7FZP7FsBYBBt3Jd",
  "key27": "4DEgxvEzmPVhDY63wV4bkQteAp8A3iC5qHTnvxpYBbVXR5DkDsox75wuMpMfuiZKvmjZDSzXgskFkjmz8mQMmwX3",
  "key28": "5ERLjrFr9VY1sr74Ynu9CdnbEnQ9AaHVfnGpAbLQb5TsjAW9JFWhDQFHhZyd2roqtSibwnoH5wpb53qhZrrwdEqk"
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
