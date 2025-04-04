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
    "3yU4FqWaRcjdkT9SEuvjEDmPFYVNwZ3w4m2YsCyPiTuu8fNDNNzQgzy2zJDPNaJFwb1LJ5JAHzckiWYQo7dyu17q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XnT86uW4iu4t75gSyZMxQn4GHD4vsohzDcWYTp8MixnGZA2gstPASx66mi6nxb18JiXC1j5qhJKFenSFWxPAspB",
  "key1": "4bfW35ZtEmYpQovx1rzGFJEbvh88QMfwB91xpemvRGXUUdvMRSfqMyJfdyXn97nLAZDnZZ7oz7v63njnyjNLJnoQ",
  "key2": "28gGeakZ3h45SYKwPgAmm579xVZCY8Ui9QRZZX1oKPmMGyPmTJ2atn9QSz8TQkdBE8VUt5pwRAN2yKmysRQeNpjF",
  "key3": "XNC5hRFtysBNNXybVSE45JDnPaxUjDgb9Z7H8MrTe2coQHQj4FRZK6kNeePqVuowLnFWzrjZ8SoGT9kBje3ACTQ",
  "key4": "2GHdFZX4Atx7eU749CB7A9qVnq285ANhsLKuZAPvheMFM66cUpKfSYmkKvw62pBjYvNYZUxpjwofamqePHK3Hm6s",
  "key5": "2iWfCQFZSvRvcdLRfcJigdG8UGQcA3AmU4i7JGjANwhJ4JQyksJWrsBa2tY7Q7fEDJGRisBaDVmA8b6JE8mbrZwq",
  "key6": "47VujPGfL3qxrkQ28hPokBQD1hmVvDUFUZxvCX797mckthf92WLBCLSYSsMp1seR273aVsxW33AwcaXxB9b9LHE6",
  "key7": "2Nt3FHfhtAP8s2N2EASbwgvbJW3XVrFfZoAxT6zcazT5HZ9r3KfvYVoGD8acw3bgmkRnkqc4s9W8esz9SfK3eeDX",
  "key8": "2WPzJDfxDN4urKsubr7ykJtT9WZMFhHvtTKptrpfd9x8FHgBLpV7wXBVFtkbgMeicQqiMLCSNjqgaisDpbqhtSyd",
  "key9": "5WcBMqysTpjbH4xSL32BGnhoXjXvabCxpyC93yE25Nwm3iqe1A9e1JNtuWqMbE1tVcbUBRhY4uSyMzwR1yENEMFS",
  "key10": "34roYpUUcfjPvkzv1DSoNiUEDBs2q6JKTx8dcFtdcAhUeFKYfL2nQ7e2GV6SeYx24nNzZhwRcTkNytPgd4PwQqEZ",
  "key11": "tN4SLYVKDgyndZp2E7tGHQDVan4eLmvcHmiQwLjLaR9gN99yFD288kaiosq9FKGDATRLtcYMQA1qMzV2zb3W6M8",
  "key12": "44oZTyVSzShc1PywMPxQLiB35sRuxB1DcvyVNAsF8ge5FYd25iGqnUje9XZ7Pbx2zn9gnCM24Jo7bXDN9yicPb1P",
  "key13": "3N2BoWjnbw9if23xuRVESW4mmde7uDdGKABLUnxy2rUG9eEDhL15AwVaaxDrSwDyV7umMhVR5nwYDoheNm5TBtZZ",
  "key14": "5sxoMLqU4e5PLufa7wcPn4DSx53wXPUL8txM79NB2vXwfSnFd3kY3uJQYGb6E5grfjfikxLS7UMTuAJTLUtE33fV",
  "key15": "2RmEtH7ShpeXFTmFtit28wFeMv22qH6cCcR9rNRbsRnQhsDPzMWi1nDNGqLa7R7atrFu6bYhHkic76H4uGE9BiiT",
  "key16": "5UU8NuP5q2e7CLcdsujYQUjmdS9LFEWDSvHw4mjbyDrVHHYZ2AUx5iEwMhebuWtPKgJaZb4QdsVA2pAR39HnavBB",
  "key17": "4eUMqxrmp99wp1pcCdGzwYwH8YSaDn52VQupJMdK2AA49hbYiEq9Hjz57NCrQyfioRbgDMdDzgLkvNu3yhtMCtGB",
  "key18": "41cTjt4yYKkEQ1GPX5Jx54px8TyTB48SZA5upvNunbK8kk3ym974CiZxisJKtAZyZkm6qWY4DmDXaUozQHRe67Ph",
  "key19": "QsnxLcd3DsUhDPneBHCHpbYPm2MWbUe7bpH6XS6EHmpEecdpDyYBMA5du6ddnnn1qiQxUFGtvJMJgRxswMR4TmC",
  "key20": "3sVitmh5UR1nZJ7z82amasdLoZAswJcQsmQdLJSkF5Po9jVdzAuUhUptsefX9VHdXHfvkWinzYXQzEA5UGNxhTHN",
  "key21": "53PXhSVCJhFQm25hRVfRQVJyvJjxrFt3DcPBBANw8qXqLGHbJW7d6kKhUgkYa7vkzaaHvwxSwtL6g7CP7ZYbEVCZ",
  "key22": "5pJss7tEG4E98t4mLLSxr5ATtxdj41W2ekiDqCLPSvnorXvvzqwFcpCw8T4tdPzexFmZEaFoGo7fAHCnvLWTeQk7",
  "key23": "14gDNtQDrz4sG7dfnVUyeQM4CXZiH2Ri7CMqzbkyi6WwikbykMxkR9ntTme54Hva3vbv2qfbFqjPSNgwXmtNrbi",
  "key24": "2zqzorMNSde6Pd9xDCratN2sA976PLRgXxUMT1TbNouucAsEuiSwADBDTngCYDMxjHMUkcwNKtzPpM8ufny8KB2s",
  "key25": "2buxx6ZHw9fHyPVkyfjumXeUXz4XpdaxQRan61ohuM9ZD62GHX1bsFuSf6ontBLVsUM91W8GNtuxRi7kSFPyvXBK",
  "key26": "4fmVtAhC2x6pufdTFmppM1g4ADeLeoAKmSSsWg35n3mkQMVUzKoUG2S5ZvuGMkf9DuE9x7P9bjZUjWC7tQoTXcoU",
  "key27": "61FZHD3iHxwrkviUHVXjckTAedupAw65yzpdJF3opG46xBF4uesmDukD7M3RxPpkgyNHaYef1XE7LcjMusj9dAmu",
  "key28": "3SpNkwNfovsBs4dUGxnJFb9Hd7TXQGaH6nB3n8XBbNkEjnu7DtxCwrKe5za6k1QThvmiheHPmHFmK4fwoG53p5bw"
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
