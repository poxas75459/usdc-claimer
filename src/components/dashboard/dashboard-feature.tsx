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
    "q31ur2w4z1wdry8SJpdb2EiBVKYsycc75GdMX9jh4SEbPnfRnuR553R1Pq4NeJXFzUXUXdoXtdmuoPNTikC15kX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "571v6gjafXmex5nNLQfzmrFmtFWMWf1XVxoMVnWkWpHGnRGjn3cDYD1qZBpFtW8NBq7EBTarBLMa1Fc1RpJKpSLd",
  "key1": "62G9CLymHCxydvjFkLbAa8xXYzrCBoY3AkFq9iytNhyuBDUg7C1Ki1PzgeQGR1dJZAtw2wr83pcSgoSgXudfSPmB",
  "key2": "65HM8eVUD1SgeTM9pjEGR8hK875ZMmDaLBFirfTxWmaNmTqRLeHtcYEQSvY2unyg6mw6tLqMd6gxSxE9VyBwyX7q",
  "key3": "4YoN8kcW7oSLcTP4rhoSuLWeG6WzA2L39irmX1Bdyhp9zgg2VCTwhnuhJqPJtjBcD9y9GKEGPVm3jVxHHmoYqY7H",
  "key4": "5T43mtrZoKUZunWtw5AAoB1MTi9EWWVwsXWkixKEtnPztXjufz7Gni2iSF76ut6QWk4iRtDhPY3daUWnTYaTk4Ys",
  "key5": "5a7cxbA4MgX2LFKahkRmoSNg4V9bDdnsQfx59cSVdGhCnssnEbwGmxjbLF1WDuMGF3mAKPCvWMFM2AicMetepCTt",
  "key6": "3GaN1Ug7CTpJz9VccAAgq26A2r1iTvuaMbVNTGajq9L7bJZ5PDp3sRjJ8d7AVuByG1Kw5a5Gw5vchsmLB6H3LsAi",
  "key7": "4z8XZQotXWdiBQLRGcPL8KjmeSVBwnG6vSc7h5YqmgvHMm12j5ACXySXSKijqaUbgCLScBhKPXDaogeXV83tLFMX",
  "key8": "4YU8nf9ZKKYrySqgEmBLhtMPS77fuFAJDHe8RfvSVhHnTYV2rENJgMQYxYAHzbUSgPw9PWyMHamJQN4VvBJFrzhT",
  "key9": "RcAJ6D6AigXP4kRjrdsHLNvya1FZ5D6p6eSrK3ReZxJmDR3i2S8gZBqUP3XA82PEHp72U3ZzGnC1ujYs1p7XyyB",
  "key10": "31DxLRYvjDDKgbEKsE7SiSeHCQrqgq3LtQMTxahwAoQ31KdyVSFPwnvjWkV3me6LMnmF59BTBtLbzGfibncip6PQ",
  "key11": "4mTgMXeTaLqb2KoMsMWQHKwF353wt59EoMFqY9CUXnBFjUyXrL4d9GwyLDpEso3Ur5fDbRyorMJYyJxfXibWb4Gt",
  "key12": "XmiPW4JJKyEvduS5BFoSXAdeSqzqFfWZWKNmHZJdDWUfiGNLisvw1ZZG9NDSpzgHdT6iyf8Bxh71nkNHGsThq1V",
  "key13": "4kJDxn1vXccL9JMMtoMYpHN7vn2zNX8x2WUPJwyuWuTkjsiBNUyuajKYNCBfHSbkABMDvYRZkVHRdJo7V2g5qMof",
  "key14": "FV1BTc335BmJ5J6KeaZeGkPMUgzTod124NLvAVJB7NQZBYZ6qqiMbfK37vTNTRxuvpHgnNPZhwVbJsWK35gPLrL",
  "key15": "mM1FdadwCJ19mz5AjHPxKSnYR5GZTtuZuhkcRQPDMrkVT2kobkn4fEqgUgLuY1hugdJELEyK91V152hXSBrhxHK",
  "key16": "5VUTsecdmnsgyZTtdgHfdE4kp89UCmvnbCZZ3nc8Hw6a6gtByhZgWmHKKPVvqXJ9bMiUSdbphALNcaLWkDcbF39r",
  "key17": "4kGcfp7rBqXu5VwN3vnte9sx5VZmQ4ZmmGjvBq9TYyQpo7NYFdyTTuenPMzWkEZFE8fL6K8bNr3N4NTXhMwtcEsy",
  "key18": "oi9qQR6KMWrUehYiiczg8t1MUpCAiNwyAtK8adyiqk5eGVrvi9EGqU9MQdWpH2SHyz7WjDRrsf1bdU77QitBACX",
  "key19": "4mbJunkWd5v7edHUjZk4sZe2F3ASUUWtBqdGE7m3W5q6khYJ5rsRv5s4BkjhHmmPa2muTviFvYDKakF9UevDA4BV",
  "key20": "2eXM68rGkmYXA1JjdCf7CbRiCT6ZzYpXaoYeCnDYBdDjDmu1HAUecP62C39RVLAZVFsa5aYQed7E1466pyGmRn22",
  "key21": "5QrpoxCCYf2AgyNp4YTSMS31gQ3CPzSYBhgdkSnUAx6FM8BomWDeWDdQHPFwmvB2mSdUZhP23AxzUKhrjBCMiNFG",
  "key22": "3S2oBjSC8SHBVhftSVu2wfhkFiNYDEUPfdXV5kRRSLUzW27NkWAfvaBQEHuhRhy9CzX2AhWyqK1YQ7ZxdMAzpR6U",
  "key23": "4ySiBEXSq5bAMNbFEtMsRS2DJNKkgKPJzuhZfzKDBTjvnnpkXNq1PPwzrPfTwEji5HrqSkZyQmKS9E9YTNZJLndS",
  "key24": "4bMyWmFT2neH7KSvgwDYj5np5HmBRkGvh3vDQUDhZxQLoeywP6Jpuv24Kr7nkDHUsoWPKwLD3THKcfnjZ3WUKnzK",
  "key25": "5kiimvsMB6zNhfYFYRo5PBSSscpUaskQHgXnhapuKYWGw8KnRsWoEKYLwHwurRLZzwgr5JzDtUGauyZRhWCghY76",
  "key26": "Pefte8J86LmekjcwehegmqrFELnwzK1gcA3keTrSKwVkdgd8k9MvbTtF8sfy1ZGT2dtDDSA2Xs5hv1nNuTKncSv",
  "key27": "5cw8cXdCsQKtsRDrxbuj36GH1caRdyQPfh5NazRWh4oXQoYKXRtis47mPrcEj9cTq9Sjd2ZQQzrzhnqXp5trdyWp",
  "key28": "2bboR2Fv2cND7pLdjYWxPGKxD9FUNmv6t76o1rdfnKtYvRQKEVkS7qv32bCvpSZQKVS8RCfuqL4rWw17Kyejgt9B",
  "key29": "5bgruCaGE1HRc4hRpy1fzMVyo2919xBi9M5xTsM7qHxdKZaDHAAvLr1WRkgmhaZ8pbK5tCCzabqwaRhzzPPSL1sY",
  "key30": "636quNW6EMh9mPH3BswnL8DYmFvuRDkmBUbgXBLDcX1KbuUMkRQhsKiJe8H1ZC8XqQ62AMrsc3BqysePE5BWA7Rm",
  "key31": "5Fd2fKrrBnkLYvz3rnm2DdyCik7azeTS3irkYKjd1kL1koS2PZgD3ChKg7rj5db5fXC9Fk7K6JMJYqk5Z3TkAvJZ",
  "key32": "2cVS2uPAARC8aLkZywwNxNhHp1safEreD4dNJiLEYHppXqcjmbShUnSExbCRvx2K5YTuEgzg2fjQhmR8JN6zHsbn",
  "key33": "FASKP4CpqyK7neti8gVh8zWxMX1vFfTkumL3FrkibyKGqTySspi6cUV9yxN37NJdM8QxaXKJGuePaa5RF9Sgopm"
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
