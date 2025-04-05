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
    "39nhXummgrejaWfFBtod58Z3ymSmjBGEJRZdp5mC6onzyhWJjgjQ8CdpeLkmQjcf5YsygC4Bi23uKQe1HGzj9GbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZLwdixTQ92RGo1NU2NhkkeCcB2No1GiDaFzwzfbaDMiNziYGTTqXZMr7e7maAQNX3ZDCAXELeyhuX6B1Lx8s8Ls",
  "key1": "3TeWTdgUEJQSoM41UoxuqgqvgmcUQ6KkVxwnqxXDv5JHcUatXAdcuhhonHkR7yhtcyjAQ7ergSawsH94LJXzEpwj",
  "key2": "3fx3VJ8sGtmVQi2MxWB64AQhtHWvsgZTGhnVtuexufwN5W5ANQpfBFQdkGMZBVDm34WQ8d1GyUaHLAMYFhksxRJW",
  "key3": "5W7msAEYVPHTg3XtNqhF7UZ53KjevF71in1iWtbb5w4Va3DttFv3Sz18DtGv2p6ajBz1VrQMbx4fTgGXLaabcvZh",
  "key4": "49eUKYMqbPiRnW1JGH2DWMhEmwUj4Ntbc5uBpAjRhQxLk32oLCgDY2KTUJJ43r7C9jt5YSr67YZvhgKiXtxiuswc",
  "key5": "5c8AExkmK5xrfjZHCC5y3DyJXJuKhtVeGTfepAioW9TWG5C7TwtZdt1psTzt5Bq9fS4BQR42djmVanV19HMxDJYL",
  "key6": "4RiWHb3s3MkmySxaUfsnoYo7jzuNovVGVCDk1KnKWREZwYE2683SanvH5dinKtL4vMKdVt2e6zUCEBjxiSixzzzf",
  "key7": "2aU7QJ1wufzKDYMR8pAHb6wkXorNe8BhJqSK8mTcCzyqtATLrLaMgogfa7kPZ7rr3dWHB1kHoxgStVZ8PmXsvEsi",
  "key8": "2FEf6ubKXkJSHTsCCqeUQFUTZxBqvn9YiqR2WnprcBE5YJDg4XzYEEWpWq1iLL8c9erGLpuitjwKg16i94DcC6Co",
  "key9": "uA9J8fgqwxsrTtKX7YEGkyMpYbZiYK5BfYX32BaVfyn3E9netAVn91Bki2RJ5bsP6tcZoJpQLkA4U12MzDq6jwk",
  "key10": "27GiuMN7U9FTdxDfomo14bZybeHdcEtJtW799xtnstLs61m6bgmsyrFpFWv96zNLWp17Rq1hij8HMggk76mjUMqq",
  "key11": "4J3f7zmK72RaTnjD78zDXZXtpJLzXUNo6rZL9vzqoA1g3jB4yYk1A2Gcn2LTJv7TcKgAJEAZSgRMipBDdDDM282a",
  "key12": "65crk7AmP2vaw8J2qimmUg9PEbHGPJRXEMK9KyoRaiSgPSUaVhTGViZEmkYnyspBT278cvio2E18Hin8KqaYrC1w",
  "key13": "3k14J9xhHpAuRJW2PXpJoninzz3Gdszdfsd5cxQmEpgnhqvAQVUUvQNBFNc9v2t9b3MDor2xWoJa7ZK7HZLJ59ud",
  "key14": "3roUQpMaPhXGRwWG31UsBcNo8NQZbu2GJXVLTB2faMzdq1dBgcNSZdf7itL6mUsAqRohezuru8pvQvY6FMJ8huyD",
  "key15": "23tFBxMkmvUSoSFojd8TEw1ukSdvA6vBjcsWXCCXWZVixjAQHqDiJeMMEB1m4LSufpzZbVa4QGYhKK8fS2YzycRE",
  "key16": "3Krw8NGuo88VxTeVrgbTpGMcPYVLAgobvSfmjMxKz2ndFxtKVCTgoFXXgDmVVvvd5fwAkTuXKBD2bXMWjELcqaR",
  "key17": "4At1KSnkTVUzZdn3oSk5Q9d2DLYHaBfG3UoCGoqvgEBCh5vDH8YTgUnBCZP2FrmPT7kJ79NUs9mPnwsVXPg3mN3c",
  "key18": "5x9To5TVPEPJea7ybm76x9yxn9bJ2qh3vyS6YZrwRdamvHNkK11xz6BqX62HJaabu4ucdrQeNkryoZMzuDNTHr1H",
  "key19": "4HgxViqztGpgqVGsu3GBhX3EPfDYkLEJGWXVGRUaTxDAdXhgKEqD2fMzKrEE5rQiJuNeQqiGuDFU3ByJyyWNP4Ep",
  "key20": "F5onhYgN1qYTeYTQvYxtc7qEujHPzSeseoX1jh9zPR9ChKqwbmzNcBxBnAPotvJsfMei12aq5GtjsTSHN4n2weH",
  "key21": "43qGKtBzK3xNkUexuohX6dKqMupEXePoTHBdzBiAiqUwWvZBK4WCpX2foe1PxenBsqqhFoTrd1Xsf189xqcjnKYH",
  "key22": "5DVJZWLpi39AGETpozKUE4kEdJJCLvbKdffR9m6JY6aiMpGTZjRQekDTMnrKBqavpHhYLvHjUp9wzAAV6o6MEkpH",
  "key23": "2TcsMR4Z7ddi2X4CFxfcsShrDRbMASgGkNaq8A6wDa1JCLeKKF6vNnBAEwMcPd8Rbm67FwTnbuYSWRkZJccy143Q",
  "key24": "59Jyxna6mTKgaD3494CZVoyaYD4jn5bNikh11sP71uPXkCwzJd1nrDovW6VTNDpZxVvh9o1ces8DjC9co3B3gPSK",
  "key25": "2WEyRP3CKehzGaezibYBjCktxfz4FvDYYAZSEvFsRnnXsAjc9ur1EAp9obsvJzmEA12jHBpVrPnswJo7rZGD4YpM",
  "key26": "5jkLB4sJCnAziXvEpYx14Y8hZA1898nJQCDrGY9q2e8Avdhe9vY17Ni5Fh4LHN1RWerLRapr4KdsPU1JZivcAuK3",
  "key27": "47Qj3bdsymw8N6vhwtaxKmPzdLrMhia45aRm7qeekcyZvm8Jn8WSND4wWW3M6F3NSy51jfYtsMkEmeQmoJv38bNy",
  "key28": "31t9bixa4fwchUi8UyHFvW6JKwffLFdyALWqMZWJiMJK6UgzwTEg3yYAuUiPDEGJJSbj7UENWLHWQdHjbsKUXVPH",
  "key29": "NGdWgtw2xosR3oVsbPrHeqWGGeeCMtiTKaV4ymSjSjEcukHNy5uFGc9qSsAydxBc5rMgVgc417smwxDLE1DcDAm",
  "key30": "WQ7e1sCiBMLxU9xd2DDmiN8yTvjDWN7zohxBggKW9mpLzRGAcskgd4nexxoyqx81AyTUKY6VTKMAMpLG2Hucfjt",
  "key31": "3N9h6B8qsNR4iyPiUqAWPe5hHtuB5DdumRtNitX88SEgKyKF6ywiAhMH8RdQrq6UsX3eMQer5gqDvpa9SrHmwakJ",
  "key32": "2bBi1p5r3N9gvBKMYM8FCswUvrx91taR6H1NcJZ1FxiBF3GG3k8S3sokKk2KRzWuHND49kDcx3vaQdpM39NziJr7",
  "key33": "THQMgRjRH9EEuPXpWSbPY2SF3KxrbLKSDJP63vpbRuJYuTe74doQ1t7qkBEUWc8AVteEMeJq9C38htViCTtwNq8",
  "key34": "xJj6U4pFC1BGCsRG6MvmnKtfuA9DVvatygod5zDeeGgNz4mmBF11cU4JnHWzURxhvTeEtvCfd1jnmaNjnpU9Grp",
  "key35": "2kip821oUkJu12pqTTybjR45MBRgQk3xwAXEcEXGU4HH8FdHvhSP4agXgcnf12serkvv1KfXxYk65ai885wYPapQ",
  "key36": "3ExxNRnWP9qqpxCDJSBrzT2mCq7xszNWnk6JUqQhc2355uXqKEumXAS4GbnzfRGRTk7W8xHizjoFwxNvNHwUEjMQ",
  "key37": "2SJ2E7LN37XddVxMMKcPDKPYQw6jicEEXsfBYeFNoM5SfFHhdd7QiRCL2WvmXT8m72duyq288oM4adFikPwZytoL"
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
