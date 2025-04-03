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
    "4cy3HQo5XbPC37mdHy6qRE5Z1EBwLYPzCFRWcwZf7u56Y9td6ps1pYkrRQF9Q11Yje3UYotmUtvAKmnGwdHCmeRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J4z8BbZsiuJ1LE8gsu9Y4FXAscN7msDijxiW6BPFLwebZFq1XC7vqivXnvnHxR5GuGtX7P4yC3yaiKnRYdoZ6W",
  "key1": "2vzdkPP8BuPKByzK7q9bNQdehsovN2de4DicuFYPGRCpZmWhXcWdCGcxhQkLB3jAFYZajw8CoxQb1yP1Nx9KaB3N",
  "key2": "5i63c5dJ7qas6xnqVF2vqw5arS5zkYP6SN1wfPiNdHKRNLzuMXM9fvStL1EuYzxYDhiXCnWK37jjAf8dGJFTxPb5",
  "key3": "2asbuQD34pkcpp1j2628Xyn5j4RAn5hbUYJUbdnKXg6QbPLvp5hanBprtFhJTjc6QUnrtHTqkc6SmFT6cDcy9cpT",
  "key4": "2nHv1mKMnumJHMUWDGo3Ln82k8ArnucPBF8C9tfUdnm95WDyxwQ8UY8LkuBKhqJ1UziDVYEN9Fbs3f7aSP8WcDwF",
  "key5": "4nDnYVavJjyRp6ExhK693uyuprFy4uaLFhJCYrCG14z8tVCrD9EfgLCDzjKDtC37uDY3JEgZLNqo8qxgZXTYb2Rf",
  "key6": "qSHHtYwqSdWSf47zBbgsDo5RpbPNzNU3XiTk4qd4JATadfHaz6Ptou2JUrtscqWQoCT7mMtoZ46GnzHZeJ1iMUF",
  "key7": "52zSUuRBuqeNw4GTrMNm7z2CittLDHcNXZUpinCVJnFNf51nVqcz3eCz22XvZ47koKJp1jc3kgGwnqvvANaUkrk5",
  "key8": "f4t1ZpRVbiHGMSftwSfcfuhDzKuhRPxSRzawNcfnmaXUcxKnw666UMLw5wpnJavjBBxcZucGCYFbz9YreEs2bxz",
  "key9": "qF1jfEv4UCyppSzLbkJWPPQwSsPo9tpzWibYthpzBbZWYZrX3cYfdGjwrFmEZM7e6MPLrcc9FpTGr6cWRUefbzZ",
  "key10": "5Rx7KfF14zWSgo6FL6QC1CqpqaLSQD6LSfU5RYWP5xtTYW4oKaBKLuk94KoKJ6KMJkZxkqKUrsCBakw3KXCoCdQy",
  "key11": "31QZEezuYsdMjpaUvbFd85oa65kJtmb9CKR4s2hUNPJwz7NMPKBa5XUwGuvuGi7JPjAux4ub6TLoUiCqieMsjeSR",
  "key12": "2i5u24VXZGSTM5t4mjv8zqAT8mQm98XUr64ANumWEGRx9WH6sPhVaVp7xmrjJPbsT913BAnLPx48BUE8YfkoH7Fv",
  "key13": "3QUKGFSr4DijrM9bEE35mvr3TkYXJ7VVD6fBR98xZ7nV9UYCDAFhNMx2vXu36wx2DHksgN2o1dPtZ3e5uhfg5XnN",
  "key14": "2ZSeHVRyRTdYMpiFJ6fejVta9cp1PA2y8S2QsQPWboVxXDwPYdTdJbsfJ68MtYYS1Eu4LckSaCdoHHNgA7cftncZ",
  "key15": "5rSBENdpnMshHrVqHgsCApuNS9qgFAPVJ9y8SXhsFL11pwB15ctFy3bUHHJH5oj9cQWJy1Htxr2e7s5JpnGxX9Tp",
  "key16": "3npsTRdEZVSWcMWHGSeTmpCUtzsAT3q1NGVGaLrkWGDJRnftByBrFkAiK9qcpeCauZ6dcZ6BBmtSpKxX62b6PznR",
  "key17": "jJoD1KBj7eX5sdJFpXrCFLRsb8e6MPkPbgoWBqfdhRLE7My6qRYy94UjYGD5kj3saJGqHLXaB6BchtoMPxL9uZo",
  "key18": "2aCCRgfavGbGqGq4WxK3FW1W4qA6nkvoontq69WGBJETPdm6LQsK3YwyJwsknEaCsy2uDYw3d2hA4gwiSRTvrgrd",
  "key19": "4h1rv9VpwveSriYVsETirUyWXWyds24cscDL6bR72fCqrzMDfMgcnLynzwCbAReXifwCssNXcLJiYcNYDmkD32N3",
  "key20": "3vJjGKYmJcQbcF26tMMHEqsVGPMWaDPgF1movwSRquYUqw2tJeLcGkSNijjAju8gkyNQUt59GAmK4LfQWqngTnK8",
  "key21": "5fnW4rCkPt5iMRLXhY3FfYuyURKwrcCzF7P7N2XKqE4WKqAeip8jTGmhXQfLu9ioCXoc9zEqifNNDrkDpSVsyDZn",
  "key22": "Xx2Pbqmrz7ingW3Hq9Gw44h9hmBE1vJtwVvh8YDtwVwhfDyxSvtYEyPndt2PoQdUXfpHYtEJfD2RxqLZNkeyBon",
  "key23": "5EE2dAFyBiSzKzJRNjCCdWr25MzYRkybsJT5WfRk947DFwn1RjkCSQxhjgtiCNgE2ozFug5aJ6FgLNuCxGzV8P8x",
  "key24": "5JarqF5rSXGpch1N3oAhyjapZ3aaeBWC8YZpuvktmcCm6DJZzm9yRbuimSn8HPb1J4n8UfohTYFLtoKazQYFifi5",
  "key25": "4Gm6dFC5wixVn9Kb1y1Gx15XbN92Ctvh86rgMcFFzeVafGfiQBf25GZDx5FgpDWtXP3wqzCP2xNPCRrtedr6eJ89",
  "key26": "4a5YGhEhWtrwbUGgyGH1fvRqiBFpBEKGZD6kPiqvb7gMhTCbFLFovjdR9TNh2wd4HV3dSpKpX3ogRoEfxL9VUuTb",
  "key27": "4xfzYJdekX2ycicqu3Nd1FsXAQtFXQHj5B94RkRM2SMtbBEWEJzvcDCvSHtKbV9NsvM3GP7t9y4esxktjxBCvXim",
  "key28": "3sWvZKy2kch9xCmXi6fEqmyMAWLG6Bo5GViwqToPTNf4YUA3y4JAEWCyf3kpnUnQanWaCH61fptHV9vxguN5CTxd",
  "key29": "2vx4gdbNdRVKTLMCyf9gkHwkZS9i3HqmgXe29Zzfv6HyiRmpwAbukmGLNK5YYytAmmZVxfartn5P96FyL7B6ypC2",
  "key30": "2y5NjpSTmGBYAeasN1C9n3emRUUKLhmKKy5qcsdhT3NVHqFPDg84Qb9c97JhhTwswsQZ8vCqWGc799UozQdkfjd9",
  "key31": "3eqmSYakrEfr9iR3B46GDn4XZgCyjZ1BpRndCC1Bg2tE1mzZzzAvAdxwhj9MstqfV16UyXvSVMBK9uMPPjvfsmHA",
  "key32": "x3QM6hdFr8pPUDTxz4RZkRN7tZ49DpR3M1UNkwJAsKwWB2JFuUx3JZAicTS7iNXYK1S2h9ScPACgGaNtH4cs9YX",
  "key33": "HkHaoHe8f85K48VW5yiRCzAB4dsichWLZk2Gcqd99YK51NAzEuGcTWBH2J9SwGVh1tMA1yBMWVjVYFtWQDXVRxm",
  "key34": "3hBu56yTxBdHYZTNbFs1AFPPZY69ecGHC1kGRzK3tsaFv6HgEg37tpVXiwfQwo2p3CNnaSHzciPraWbd44vsNwkR",
  "key35": "2ZtwhwMF7GLCfdPk6cQbCTjkocaeVeN4NEcsMM9rxXzH2SGQb2AKXhohv1iiZGmqBNvag5hSA6yPiGpYJrWJgkuD",
  "key36": "2Q5USCrufv76mL8qFbCCzprXApgSVi7XQ5UKFcBErzZutmh1ShJeppocJnfBJnvBPErtwXbZLd7r81KWry8Agx1B",
  "key37": "667g6e9VGxLwm4Q8cAz9kBK3xu1o7aEtWXCX7TTeuAiBDTB6KPTEZBB7Hd8aMRbD98sAnUvb5kUhuNXWFpk94Ttt",
  "key38": "58xjtWduFeXXuaZewC6ZQTSbMeG6q9jcaTM74zTekY6bw4K1vrWGh3BWhbwpTfDdyHVN5v4TP3dAxqRrznCB978T",
  "key39": "455xeFSVbtupo1bePuzZvhTUqAJgA6zY5d7nvt9n5EdNA7eMRTW8UuA59DRb4g9BuzSKJgakwNWhJYQop1T9SVyc"
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
