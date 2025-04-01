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
    "5jA6Kk3R3fYGtoqkYtbGGMzD6Qz8r7GDUq683scBnbCDUFfAGhx4VGRW4bZk2PQfZ6mJ5WXPov5qa1yk7qZHkD88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54SfCgev3K62BpdNjhu2NdjYkytvHGUn4R9L76yvjdiHpsYwYtkA1BqBsBQ2xF1e7D627rkf4SX1zKL9kyXk3STJ",
  "key1": "5kxVYSFwKCKkdkz8kKB4K1wALc7mUbyHxTVEP6xgj5cnns6x2Py4KQRwkQ3NnUdk7BRpUm9cnfawdXZHs1tGm96s",
  "key2": "JHMVvU46bHN7NGKqPSNm7xeL9ZM6Ropo5EUfs37LQRV5tfQZHL4qv2agKcSSiMM9e3KXkvcQXCKyE67gUk93XRs",
  "key3": "2t4dJY8hG8N1tu9G2C2ZW6S2CLWqMM5qVK8cx2Q5FyCVKZn8HmSzcrEP5hrhCBchZiwnFsBsPEonCRwabiFCJso3",
  "key4": "3cum7nQd3BysZgkdPsRNQGQWZiGvF76EmcdQM29WARHnZc65WSkpFHJFwU4tVWyqADZgDMW96VMnP2L2w81RdVvW",
  "key5": "2Akkis2k2uknYUsqpN9DVEiuX1NZvLq5jLfeESrf6pGuMj5tDZjDPqHDocxXPjJVv5PrR6eJr9ojMQ956gawSZkh",
  "key6": "4VSGtPTycjimkNaNtQ1whYeX3V5kQvgpzEu4BKFTgRaggoTD9m6PTBiQGU64fEhUJNjwWWHya39PsKi1sfCPrjkq",
  "key7": "4yunQaGquDz19Gxg6qFgoepTFAtQuinDpSBaaMFnoqRBBUjNkKKiQVbBSNArDWMfewuWWHet4GHQfTgYaW1qhvrx",
  "key8": "5nLUgK59qctyWkkjs9VeZgeKznKcKKi6kZgsnZQCdEnAk8GqvkvuxPuMmT7er5ueo9CBEsFM7fPTRHqWKY4DKWg8",
  "key9": "kH4SZ4N1eyErWdDDGZSTcLXDpq3wHWnPsBodzhxJ1WS7Vuhu6f4tbqDBv9MJPrZrnPSxQrA3ueJ9Zn2wACN6ewX",
  "key10": "4DvvVBknMt76ELruGEVuYMDJLb9sxocVoQPyTGaAXwVocG1VX1WxXgYQ6BJTDJMRZYgYGfkLqKg1xeNYzTesUhAE",
  "key11": "5bMQeQ1B6vdjNyhq8Zg5eFzy9hCnUsAkj7yStFCY8JvTNFQvHD22hrNhRL8XUWUSgAZ4nMzfGgtoVb5cG4HJBq52",
  "key12": "5UV9fQAdZqvYmSPdwVhuRbxZoSs5tTWT6JYgpQ9gzMJLSDMQy66DXZSyP8xeycgHKjUzPr6RZwqFHHYfomiMrkrZ",
  "key13": "2eXUJ9746jPLeqmF8MyrTuNAU7MeWtwHCEfCw3xECWLtNFXTd1rPC9mDqdLSW7LHWuu5UnopzuSTyYyipAcS7nSN",
  "key14": "3XnsniAjtBti58qf2y3WrGK8pyFV6RKQ2aC27nkj2dz5Upei8j74d3GZbT8Pm41vV93CDXmh1Mo3V7gz5cXJxtSS",
  "key15": "65caLFP2bk9RnPkPhPPZ1McAqoptvhQgzNNioW4XKCs5NtV2XRr15S7BKPRQgtn2t2sx5KY6frgALBYakfE4BTBd",
  "key16": "43uqdC3hMSdMZ9jSnQxtVB4VqBaY3YpCzJrxETGSZ7wBFmYAzrQ1wbsFadKSjKPHyGeXMtjhPpR5yomtDzv16CFc",
  "key17": "4157NNXaji2ecgCy5dc5v6vam9huqiSx5zTeYP3Zd81ypVbsqDnB48DdTPL1f423dH4gmwg5HCMd2uzAtQoxKUXX",
  "key18": "5diy1Lkwq4v7xdq7JcuiqV3ncmSNScW22jVV3DopzWzxDTSTRnk95r4KDzfVdRDqbrzLCHqhY72xtJcKPnMwFemg",
  "key19": "Zfrsuu3Ah5PLp85c8zZ5Kmrq5863dXwVxdPqRkAwemDnjVR4ePR55zKGrErcuaPQtJVjcSinhJZoWpCwGonDSz7",
  "key20": "Gamdn299jjLrQXji7T8XZf8YqtmwsVZrx7HxjCzTNCmQhDmcHttdKEHiPti9pcLy2Vg451Rqyj15fDmuMygkNFn",
  "key21": "5ZxWXPuEcNLexSSWHz16a7msdYB5WHGmzeQmmdaF9dSBYCaAND1ifFybkK9aXFZUDZUA1jtWK8krLZ8JHcHaERDi",
  "key22": "tjqSSNdsFyzR8DkCor64vsTYxexqcMHKXYowi9RVufawE5GJH6NhNqRCSqAynjc3oDmkvfCyU4kbSjhJcvQciyM",
  "key23": "4nSvuuXxEvXoAg776AcMjdkLaAkGf5rX4vBze4cjmqUTs9xN2GDRjB6njw4YNRNYnmbVcErcgDdyfGQYtzz6VPfg",
  "key24": "4yMsJYNvsFgNvDLaif1JnEyojxaaSNkmUVQCG49ibCyHBYbNFdW4Kf6tmZVJRH24Sv47VsAk4TC7PSh3EBp7z82j",
  "key25": "2PN8hhU9oS7HZRLwa9zff1Czmcwx2jBf5kDcXF1kmRZWDqyGZbEmkq6c8C6aj94jXBCy7pt2MBemnWpEyghKKmqJ",
  "key26": "Diw7EdQkvWSUcov27ayBPvTZYasnkm7RDZmKzQ9QVJ58sNvgDh8JDn9pDySDdyUoSTd9VT4q3NcvPpCLHcsX6sJ",
  "key27": "2eaQHMc1B4Dtya8MsSnChRwzCyaZTY2cMSCxvSeZF2m1FLEARuyxbHSPm3AqVTh5W3Jo3QzgQ4qHX4DKmQeZeNGD",
  "key28": "4F4jV1i6M6dxg8YH4PcNQPUQEcgf6MAHGSQD9AARQ3KQaajKWzGX9zMfhoPdviigXgcDrHyZEte9Ra2qRU4ynKvy",
  "key29": "2b6Ls9k695LfGQeqhMkL6azs8H3N9nMqKnMoVvDUbyTx1ewBCE4gFdhZFFgx2JMTso7Dmw6yJC33mLiHd7yhdosp",
  "key30": "qCff9gjEouNWxQnQktv4LBYYp8QVXHcR63k4rRqXVRLhy41EQMdUnbVSL1yfisY82FnV51yCYGhQA9JcyyDcLji"
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
