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
    "3xs63VkCXDp8P75Xvx6ouEnUX1TQCShGQpXP9DiaH4L5tQy2vjUGKhkGty7RZj2RzVpomeDxeGxLnPBNrE6dNHDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTNnsgam1QsgLUAALA6TiUBZNrAhbMzJuPv9MmEnDAai3rg1BpsHfaeXxzTMpXRR9M9Ux81gXSDERLYwx9pETbF",
  "key1": "23HW9yX9pQN7q9X52tAW9JJVrCFWJzwavsaUHMTqNkuenPWhzyZhpQ1sHM9JHMmjfetUCZ2gfZNahVEnCGmFsiVP",
  "key2": "5gPSGtoSNUyR3BcbUqACsLYKk3RVesy6RR9rRrNVYUcpvCZZnNNReVV6c61dmA1FProK3UJTqnCJbhansxtuuDoh",
  "key3": "9N66ZanBKDtBsR1bPLSJCyr41JcQr6WGVaU1PaPzBAXxAGGonXAgrf2JwvquZYVfUpqexnMqtg6n6FsVbK7n9fe",
  "key4": "4P43WgA7NJPJaKMxUttr5sJ9Gm7cJKhEbMxQiKngF3dqT2ASFqnrAqLeam1BRnxpJDQSF2bLmK6WRetdhPze4QoE",
  "key5": "5srbmWt3FuE6XoDZMMYhgvi3pg2J5SesmK7Pk6oStAPvM7vFa8TVxx1KXANTRN3exKuzmhao4NvMcuKSSmwcD3Az",
  "key6": "3obAC3WMw7vyezafLTtgFUvXuqPoYGMdRo8TERtizVnF7nig9xdxh8y3rsR5PF2X37JQJEjdTnE3PuZs4njp5ozT",
  "key7": "WkNgk9wtaLV2QP19GYJEv5qF3hQ4c6VRUxWbC7kFAnMHVik5RaqqUSjRseMiMfs2QfZBjq3mQM6At46XFB5aD38",
  "key8": "2Ru4LTQb1M84aqcc7ot9QRLD7LAZPq3ADt2i9fECy8moj99agQQWMjD67EJbCoiDUUW3hPy45hk3VZ65Vrro1EjN",
  "key9": "3rZxtacQTMvTQtyp11hCg1spohUvycSa6CEPNXYewWTAEHe3vdmKp7SwNST59nXqvo1VKF32QNkCjjz7nPJk4Jt1",
  "key10": "4YNzWKicb6TwyatmhGGGjTdmah3yhKTPALNU4dF7uustCJBKdUPZVJr3rQecsqFVBHFK5pwCxwhRVrLooAzLd4tw",
  "key11": "47oN7TeChGPmzHFer6uw5d5L4gojCcmPWyZGap8m77iXBtgLKz9G3VaM81fSDb5x5XmbhWbykgE3acxQ2LFdtupZ",
  "key12": "mHXVSZq4VUTZHD6PGzNLWsp6LMTyELUGjgiXQTKBaG6VqdzK1m2vw4nMb8pDHgcg7SE6zdeRMjnkjghkdUR9PS3",
  "key13": "2wekFSVhmYskVWXeUddKt8taoTWX2Zh67519kfXakVxt7iPuqrWDFKZXDfofpE1TYrQxdfJ4av3cXQupTYJcvgsc",
  "key14": "bfGdUzUkFL3Q8V1CJqV1PhbVMuTgZq9XUCq6w4HWbvLYCsCLYqUKHdPphCLArM9HRvqfsAHTu2BjatZFiYhh2t1",
  "key15": "2bNY4A249VSBEcrBqNBLGSp4gqhyDDT3DgwSdYxwXffvHib8LW9tueezTRiRKjUSCPBgdQBEQMc9BSjttJTHGjDH",
  "key16": "4wcWV1LZZEV7srYkCUXTomBeHAod9ybSnF7ZcqcjcmDj23QCMSvy6HukGNMHxAJEmDBZWqQF7bvimfbAvEisbkVx",
  "key17": "3uTDy5iBwwrqbxw6FWAf4UQjpTJaEgFEyG2aRfEfh87CPoWAGR8YZZQdPXjmYKT8hP45QQJbPV5SnTS1yT8UsXtb",
  "key18": "5P77e85zYv7s2gk1CoePXHdrSKetzDg5nPgjpyhAv8h79JFt18bKFdHjx5CysnDiNdozFESoHTvYi3wJfwW7xDGH",
  "key19": "2dVbnZDRkcis5brYAKhUAe43pBwkmWvskAqnDRJm5p7cWfnbhVxsNf63YLvCZhJsy6U92Q3r2ZAkJZoSxq9za98i",
  "key20": "39hiwDYEzp4Zh5QGfAr9AKgaC167JEcBrp4rE7pbqkHY7T6rF8DHvftDFrfoU5vPaZYo5P4ycXzAbzny9hgvcbKX",
  "key21": "5N6Rcstwe3wxoUVVms8ghkbqFgE6Eipskgip721Le3x4Tbp9xRrWbfT7dpWkNXWid4Pq34dQLRNRHxJLZZ7BDD7X",
  "key22": "wPaQGT3DwYryUxRPpruFrifYp2hau96Ymd6j7scRnMTMx5obkFEcB6BttZebrBw74yHRbsWfUqT3bZwibaickjS",
  "key23": "XzRGptUqvMD3BVJEn2SaKG8Uoa2f6YiBv2FUms2eLKVSH1m5QZZqtZwz2zEE8PWRuZu7fKZJfyeVigDtdahsvmg",
  "key24": "UADPUqeB9tVGLPAKkNvoeh7JU4GHxkKZYFfRqBajmtR4pcLeLqc2wuCvWXqzJ4WvqS1DZ8oBhq61NUkwTaHwaQN",
  "key25": "4shUhGCVhwCdsuAYFR8Hgcqps5zg3GTM4tnhoaLSeWXZTGPAZhSrfVwPHwgGjVqSCdX5amp8Yh9ozJq3QufgSUGM",
  "key26": "5ALKbpZ77Aa3W8fDuaYC4Q4KZHCGvnf4KWi6WyZtehPhx3avNLRhe3zSNdLTVs6wBL9JeatofS2uxsgwaQDvs1Hj",
  "key27": "5ymHEeGns1EBH8a1EoAWxFeuEzeCbQUjPosxvnds6Pj9ut3rsq8cPfxTxJebN3AzfTq22uvH4gzYXpK96JaeKpnN",
  "key28": "5mERiYtarqUxbigDgLGZtGTso2izK6LSkZUYpHk46iSqCKv6gn2zpPnZqf4DXj7faaympR4vEZYbKf3xtrrvvz2v",
  "key29": "3PRWUGNeFdwgdYyGLwiB5M7p6ZpCDnbkUnUzo8JJw3knatFoqS4oMnKKninuEbHg7jyjvk8UbG4Dsqa9WmtYAiyT",
  "key30": "2VUffyqRmu2rLNYzVqqCpas5cF9HbW38H8Z1zLe85KpmethkqnJ87smDMGca76Urwq7EhvE2FVxJCmWESM4cVJPT",
  "key31": "wqWPzB3Pytf2QYZ7Dd31hPiGnvdUJuDPnoWmQgNw5XZc8WGHNEm8Y1cB6pbAxnakBHkBmZUDMt84JAMMUehpDaE"
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
