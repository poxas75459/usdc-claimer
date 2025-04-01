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
    "4XDafhKNEES4YcqwGQx3gUdoDWLe4X52GiwU6sDatp5syxJJhUgWKbCmLTaajdBWdcWsT1KLwM1AwmUsCdAnLHjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28EigRM2dZEu2pHiuGZenxi9r8Z9xdknn8Ci6W92dZRXwfDFJVEY7bEomrPPJYdtGJ3Ha4ehizKo1H5jiUQqmuUz",
  "key1": "4nAhXkCXFodA1iv2UTYjUMToLBpQou8EFoJVkYWgRjX1ECGHtrnoUiKorEmeM7DpTcSMBazPj29bjQ2vUJU6RPqR",
  "key2": "5X5e4t1uRvSp4o27vhDZf8VfRTAaHMr43J7WXrpQZwoAM8pQcBxc3w3McCZprL1VQtpS1jkhsyQ7zh9F2tU1bk91",
  "key3": "3dDSHFTN5Jg2EmaRYWkL6RUeskSHCJXaiLrXUE77XLJ3brbr93NcsMv3jRx3i5EEZjZphp6TYEAC6x4s2zonJ8KJ",
  "key4": "2JrWc4gfRrJLVTmmitXfAR9QEjomTqo1vPeVMzvjC7PnVedY4YhkdHnQEQMFBLGM784KWesWaW1rjVtFMK9GWQUA",
  "key5": "5ay5ppfbgib1x3X9QSR8XrzyqzakaXohdpQtbxFx2g1shhwGNMK8auMhYZ4YWXKvFpgQbBi5aFsaje3KctXfaLzV",
  "key6": "3Tjp9gzQ4QM3VwYwqHPdiSUHGyKC7trC4QuDqyieC7n7VdEQssASwdg22M37iB8g2ttGPLdALeki9YspJ9Aybjcg",
  "key7": "qktmBooktWThLpAYX9zqCXtUnfD9UdCACdEv8BJGERDCBoDRv5GrV7JELYcRpFsq1nHEM7d8UQhVHg9KHd2fckC",
  "key8": "fpxf4wKWVTR4kKKgkcfgHPjw9phXpiMfnHt7bBEQwfuUGF6v2FRajYh3RmxxwqRS8Ch46pKWBgRmgzo7dMmok1o",
  "key9": "4mvTV6HPG6xhoZTvMQbDcsYix9sN57z52VVSdNTzPedXtUERnGgsVUCouGRYBZC9CetrGD9cgqPrQW6HoUZZafV8",
  "key10": "5nCMoSt6sVAb7psHRyH3qwX5Zu5MdSaJV92ex8HyLcWu1A1SQ5eVcNFgZAuidW3C4mKytD5i5RnLHfJuDNqC3fN5",
  "key11": "K3uZLFRWwTqauZErDKYzoxkxjAaqd1pxqAtZxgBMS6fe3cWrLkifkaDmGGjVAQpAmUL679uyb2vyCMvULm8DY4E",
  "key12": "65dKqNhLuqagNaiuuMNGBHhi7cRrhsFfUofJM8mAg3MxNkNq6GsfPvXo1nTuY8q7GpdD1dE8CWsBSWLQCR5Kn35s",
  "key13": "5zmG4212V4fLnEHTCHjQSwnXzwksaxa83hLamgCbXxuR8V5B44Lw1jCwb28va4Hypb9di335WepvN3G1SJq7he6R",
  "key14": "4jrGX6Yk8ViYCavTwzNh7GuWMTSWEb6tYuRTF4QihDnL3XzJVYXYzoPxbQqL1B2oF1J83taktdejiQyWwzkpF19J",
  "key15": "2nXi2EWbEZBPBBfJGt74EwHvHfEvHgtihDtiSymrSjrJSk5SEhu1fVcpZWq8rWTy7m3ytwLtPUd63yBudrNiMy5s",
  "key16": "5tB6aLQ3SxsGAxqjfWLs628RY4E2DkBk45yLCLya5yLYc5tnjVEddLbptFvUPYKHN67MyVhW3DoibgF7T8HD7q33",
  "key17": "3LRHvm8Z13m3eh59HZJMcfdxc5qp6aGtHgsyqiegVcDsbRuw6E2ZqkMb3uYhfpoG9b5MwM8wu2wvcPYrBYWSN4Wk",
  "key18": "5a4YRrsEDi23sg1BPPYPYVECHLAvcto5wTuVzGiMKf3Sv3FMBXrHKGg6f32Z9EDumNXdJkUohx5V5etT1tE9yhzR",
  "key19": "2djsTZnAXS2nN3UDC4rbmZ5L28ZAn1495nHmGD6hMXvMqWE9KFj1P7muHy7bAMGKsWWUMeTNtgTNn69LwnAYpC2h",
  "key20": "25rFhndwv3kbVgsQm3j1gPAoFAb4ZJxuAzJHwH26jWkhVJwwXfHc453EaFQp31xA5W98j9a3s2Gw8sVgz3pjL4rG",
  "key21": "PwnFdKYKGpVZhgyQn3ZWMLkyyhaVqtNW8TiJjmuZ5sYZQgF3pouMJm4fCoLHTkBC8MXRH4gHLLwqkH6sSELu9zq",
  "key22": "226W9hAw848FSUzMohBZT3vnboni9PBHNr5N2EmtSiw32GQ6JF3iy3UsaEfiZaoUHw2E86ovnaNaSmB6ohgZyqeL",
  "key23": "2K3jw3FYQi8NhF4oYuc9zWQXEDdKAaMqn2QLEe2R99j9YYVuibTz48wsM68rcCcwSpMpCD3nuFa4F3B5GS9dXjyL",
  "key24": "2MXcE12Wy1vjL9bT33T38oqJb3DX4fqSv9zdbuGFtbft1CvdTRjC1xf7DTmih4KW996q3v99X15Pn4acWk5EZ6tD",
  "key25": "62oauLt2Je4w6rroV9ejngAp2tHDmDuADgFN3dVqjgyubGoS8XB7gCVNvDJfLsdnbe9zZyxeNdo1qu2aDP36Qc5D"
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
