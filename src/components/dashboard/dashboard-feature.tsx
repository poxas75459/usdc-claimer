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
    "48qdvxeGij6XuHopN3ohnFcSoJkyaNmFdnguMSBiTNA8BABvdoN7ESRFLf3XSrrdBhnWes3xnyvp3YyX2CoFPPDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y9rMcXvfJUFPCcX6A2rKFdqAtwAZAgoTCztBi8eEkFwamNSYNSLiuLgX38mGnsDX7QPy7FsK18tTasz4bZBmh4q",
  "key1": "4Xrqn1125Z3hLmzMXHpede7J8JUtGnmjzXheusGSyXRanEzFZFvvi2kM7HiEcNUsc7GiKvnCokVV2Pb6UuinemgQ",
  "key2": "4gy1UCX8ai3c7y2kz1oc3YB2G72yHWZ4ZkAr4xZQMdteVD7VMkueSn8ZHzK1srkKYJwPRgkWDdt35UoDVN8oxeDX",
  "key3": "3RuBCe3JRkhKAGbiSAQ3yiWyAwq8yFZzeXMct1iSh7EsD81xREbRr6TMcXemG2Ufh1MYnkLVRaYDJjS1Vrry3LkY",
  "key4": "57PQ3cJhP6GJA5zB8ZiicXBM6hPd8dRuThV1ywqA4Vyon4ZBZTLeK5UEEFFNreSqEJsxUwABA8BiFau9afSiSiw6",
  "key5": "fTngkVewCPG5DVXUP3GhWMHLJTP3nUmvUBSV6rd82KnMzVXeK1th4He4PofgxUs2ppWWNHTp25hETKg5KJEtK47",
  "key6": "63aNUstmHu6fV4Fd4cUKReRD1Do47TvXLJRkgpiN3qEqCwF12hnqdLuoyeuzYu4TfoAe14aw4NXxL5kwwPzeAmcc",
  "key7": "4Q8UrNTXHpFm3cq5he28ykHM5AMGjbdHCiQxKQoPfF4fNptLCTiie3SYfW4SDC2xHZVmNT8gFgaXvwWtarDSGb3B",
  "key8": "2vkYH2jX3FetFDgzakZYk4dVigYD298p5xpuMVtrQ1H4ePnwnRM1P8BnzqkNExSXNcYLpT8vAxvv9b2XVDiR1i8E",
  "key9": "AEUK7ZQ26uTQo24aBrrUZCAsDRa5sXpC24MKFUnNsMyFJMYgVScP5kyfBQXnpJreKrEMq8CazNoJYfdd1b9FR6y",
  "key10": "4gaXKNWYhGjb7KM66q4DbtDaYxwyg6C8sKNE1uzQ1zNy16eJzutZZbGuhVtPfvbkVCmmRKcG7q8TTciN5KxABLEN",
  "key11": "2VW9vDS1byLVuHMVVfRhHxSiGAJPxbZrqCpYKsuXHPqcCXKhgwCP26kNxxV5Kcg6ktEGgTDzmkkfsPc4SmqzifkJ",
  "key12": "2fMhAjkx455PbZngqTAmWM6siUjreVdf8yQEZ8MFWoic49GimU3TwT1P5qdCyj7fqgkdcykJs8pFdzkF3qonD8eM",
  "key13": "KjdBCNqefw13cNV1TtxZi7ULPQkZQAQnMHYkeZtCug5ruA3wyoAb93tb99VQBwxCv2sjtmh8DMziSyUgFzGCkdL",
  "key14": "4vTAPCQUJeK5w7c4ygCX1tmCmMpvyZZtgi7QUmL6HssN7ZRFtG7VLQsaJFY53h95JrDaSCJw7ejHNzKP4Mn6i8Xx",
  "key15": "27boX4qwdMx57c4PssdgHNr7VzK5k8BLL55mTz3GL5oMsM4ofRhrBV6s6v54s8GW3CemGH7xGxSp6sUAaVk6ZiVg",
  "key16": "5aFbTDzQdvJmEjdwmGGCF92oKdC2KdHmiHNEWAFvsVynoX4wvgCLjXtPTZfxn3Wf67F4yxC9xVj4QuZV3XpAsCL3",
  "key17": "yS2GeCSez76oZKTTkJK56GB4qo58Ju8mXwZMP68AaJcyWnUySgw6h3KYhHqSfqhsS5Z15Eprh9W6cbhkMKGjP34",
  "key18": "4BDYNjqKmNYdpyViRFXD4HKmrQ2MbH7VmnKuk4WACpFvmNsq6NssLtx9wxd9bdKtok6QfP18TSmebMBNJYLRsKYu",
  "key19": "63mkKgA9Xbmk3t89PusH98dMoBSuP3BVzQj7bKz9Kfc5tfVuAc1Yysg1srRoYB2cKMAD4dY1QMDXZNnu8fKNDp3L",
  "key20": "2R37stTrerrjRgNGQT8JpdM1VkN4oNqGaN5pWg3mjam3A3RFUk3REh4G137UWrciDotzuc9V6oiLXiuskZWYTC6U",
  "key21": "5TFvg5doseigiG4fqVTRT55KJsbai1V2cT8J4gqPHQT8tH3jcv7XEWrzeVuNEYvTCAp2GMqg7NW4xhVLoS3291da",
  "key22": "5YNK31mxgwdzuouQYB2sn39xc85YCPfjEGx7iYrhgyqaQPK1wQFmKXGzf3tfkYSjAqRQYP1MZkyP7TfiNHzU97w1",
  "key23": "3LUtaHuVUEVGfiqgi1jm9bjCAwmfEE2Uu9uvX79fxwCNg6QEQJYfjDJ1mAeMkGmiCNZZPYBEaW1snb8vxfC5dPdy",
  "key24": "3o7rmfiSJbnCwUKbaDVzQbVgzLFDcdvnfgHam6n7nmFTyJDjb7GEzBM3LzcJDbAQApmzHD8WtijuvUCdhtHPoiK8",
  "key25": "UpBs96qtPhLKatR4SCzh7DUwY86DYeX22aNiPLFcd5emwJz8AJCBrF7SX2WjBpRBXD6FwYzAf2ohfCJCKpGtLmg",
  "key26": "47KAh2Jeq3DWMeCBWuHBoCdnL5qab8ZiviE9nQzYRUseaGcsmMThmovZNk28rQa3FV7gCmXknWmNQAMUTi31ufK2",
  "key27": "4GN1xmeAmUoZTMhFXL7fcwACYx6NfLNQLSrTnsVJzjsUkXU6eVzFdRZkJyWgYFYr7qgGoNUdk5ruxu3sc6Js4ZuA"
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
