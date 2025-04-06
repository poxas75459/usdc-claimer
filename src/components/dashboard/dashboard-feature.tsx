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
    "5nXM6gD68m2ZrVZ57wvkAT2GvYRMdggGSPCHoyRw2nzMVEg38jzLR754EFgUWnE7HqsvqgHAmZ88s1fPkuSCYiix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CwekHHGVTAZsxPhKARY5bhGDpNT2eqYstyBFrT1EE1n6LNahu1834PwNkCji88kUdYYKKr1Y4BY2yjm5Rk1N5xq",
  "key1": "VBTAiYTDrJE5rhNEPLjEnnaHZm5tchpWAzMznUygXvYg7rLARZ14V1Jgc4RGHk3CJbMZeyNgjmrK1U5zngrKHF8",
  "key2": "53jSvcWRuEniJZZoRUCeaG8MCBAYu7Fzy7UrvnBXz6U7inEceJFaFT4jjqLgLNJmkQ6PN2eExDv9822orChcDkQg",
  "key3": "5vv3oz6cac8nPg5ze4NhWkiKq1BWapBUjdgTcyqDtTXrq3b8qX34uHW5fY6HiyCWHhBYbyWWj6aPdxScfSxSTxYT",
  "key4": "4Xx6jvA6TuQpBpbCXyEbxf58zURdDLchCCbKPLST7g4WANn3azk5Q9Fp2R19iyHfeSauNVEXaL7DZeBkhduRN7Ae",
  "key5": "2uQ6UUmwqZkxcVbUaTCxziYezkTzk3crFBkmr1fXR1Y4VPWY7aKcF9wYjRvYasZnCxy5Ysr3gv2p5v8VWX9WkTqv",
  "key6": "aqfBUhHwtzMAZ1fbs2yGXU6hHbuQ7TcUdJPg7tNfwsQXi3DtAhcwLV3e9YsjARTQwMmNYnipV5ipMxSJoB5fDbv",
  "key7": "kXaww46GrgBqA6siUsiAru2d55VJ8PjmbQRv7d2zZbDPhxeL2mB8bpbpDz1UnBzQJmCtxaK9ybS3rh5EatWLqVs",
  "key8": "P2WVwnng1fJMMc5Hm9KtWTDSVZzJ5E3J6cBjkZadQ2FtMch2q13deUVYryG7AXKx8yE9CzW1vKEtnSwSuNY4ETS",
  "key9": "5DxoY7sGzByS6anUKaZxWHybmYYy1gUwppX6iQRjvAkGnvftqRQM32NJr6ffCmQ2DyGJYR8thK1wjuXuu9iUMatr",
  "key10": "2WzfZRMtGsPiHmGzNjSHSkowushtP6Hp7tP81iV4xEBNo865PPCCwwLH1Dnj3URHbjD4WLPnFyvfNPAvxEtnNVjP",
  "key11": "VFZne8CDu2fB8YnoWKQKPks3rMyPpgh8kntGYn2wsr8y17ZdWZqF2JFTc3fV3WoLvo7CcSeUHRXCft9jhd5L31U",
  "key12": "H9MNyekHAE3ZxbwHtG3GXvBt92ZesHNPnZjBJJfAb1Cegr3pYbbqeY5gMznhLG6dpctDZEhGkNZBNvRSKtcRD3Q",
  "key13": "2MMoVD4aGM2GjjwHAx8upLpjtEMZCjQw9myzYoLA1ftNp7Zg1iT9VouDmjHD1cF8PVXMzwNVbtUUvgt9YCVCyGVx",
  "key14": "4kqAJxKnuSZQEdZN6A37fQJMBoLmGFvhqV8Esv7quVgB8nRZasjVd3hRGSqAXuSvgMCC1j6H3ewWkhRVntMTyhCj",
  "key15": "57LrJdR727yHkQhTen7DertWPR91a3LP7ZGwYk1GDpdnkMA9vcVcoDZ89CKKi4gCugHK6hfkXLqbQ7XdNzNG4Whm",
  "key16": "HJm8eqvKVAzSr9faakEEGn1nqoshHjg3D6D2Db9rUSTs9y3KZdfCyYfFThngTGSrEPq18BrswEvY83MFSrqr8ak",
  "key17": "JFS58h2wfA5nBSyea8NTYDot44BqBf7xUPaNRFDmBNVrQKLAGjKJnf5nCrgz7eNgsboT2TYFoHRNh21H1ZtGq83",
  "key18": "65aCNN3FtWxw1Ck2cGNQMH9EtdvTeMPWRTsrjkWbdFZe2dhwd134hLcCcYYxoS3Z2vLUboYRd1nueMA4vUyqJXdq",
  "key19": "2G8FQWe3fdtmD3TEidGy4mh4gYafzjf3JingUE2C979qX3MEad5SCRgLEsRBXfN9xCaaDvdqvgH9WoYPya9bWZk9",
  "key20": "3AqB2br5FiLbHeQN5tePLpqrebRMQ44AXrC8hsvXWSxAoLBVPmY5GuYJSa9cjbTy6fYGFzbjbaN35CTLvmf9eXeW",
  "key21": "5e2S5YULMZDNErKgpc7FLK6LcVuQESsNbzVXCyV2MziqR8bqmEzJaoMNJdzcej5wTV2eQzgDnCZP1pQmVYKKsztk",
  "key22": "3FWyqy3J2RLxgdZxZDmVgTjMjtti2Ju2jqCXDECBHBo1Kf3XbFes4vgq21fMgPJsTDmsBLqg2Bm9VZfSGrBSkmM4",
  "key23": "4hGK3dbor7UHqG2phRFvTyj3J3gwTeC2ZBv9uQiYuXz7gG8mqDvJAS94vuGW187e5LcZyDicYd8UYUNNsQMJsYHV",
  "key24": "22FgGEjgrFDS4v1jTjtLG7sndYj7YohsTydEFWHCmjdFnF7z2CTtuVwPRPN71chHQMJ9qsJzPKTRQxwvdgWTFxxq",
  "key25": "4sVvhjTtxCdzRigxFnJ9TNUWVpJcw2vpjNVMQEcUA31BnT8qSrrpCRWeF857TLtYX4SkVQbyhkcy1szqLDMucest",
  "key26": "26SCLxwYsYtUkFzQLBHpxW1HjEvxumqN8rFfheu2afLVwdaJa5PZG6mAPtDr4QNJfJrbNRxQC4Q2gnRq9PraKKXU"
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
