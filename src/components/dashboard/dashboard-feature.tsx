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
    "4iU8s6tebGBL5R9yagUKhnjoMhxSK8kkbTjP92GTmBRwyVHfRVB8ijCewVYKcM8NUzxJN7k5CD1x2qDnnHjGBxGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D6eZmgWMBWx1t1n11wQ656mLcM78bq9LqVVKokTNpAjxDYKWKYfX4tkgfaoS1cg9fh3cvYy2vEKYeS3dPGy9pnf",
  "key1": "62gwbVL2UB7WsV8mqrvmUikkQLpMjdQQQFBZB2Qs9fb5hARZg2yF8fGMGXPeVW5nzQ6sS5bcAeVYgJ4W8S6QSNxW",
  "key2": "hxkuCrdQwLFXs7L6NeJTneoQzRbckqN67NPSMPJvUGMyDX3PhgxcHLTNbcRY2r6jPA3cGXMPkvmNvdMTZyLHYkt",
  "key3": "44XjuAh23tTi3TLTQjMaa4S1fe41Mr7DvxcrkbnSB7Eo7mn2ZV2LKKFGY4SUBS55gfHYaJ5Ztns9bpPqfvtXfx63",
  "key4": "jFvzfC8TW8x9UuMnqnyXE6WQ6vFAryDRmyGN3T6Sq2EyATE24Xiye8NkmCahdWHYkQVdvGtxdRdUcL8HgdrWs3k",
  "key5": "5X3VvxB2URVucePVBrdzBA7kgkUoqrZ8EZAT7uV8JQNy68hZvjNStbf1Z4V3bGHh49TTKdbe9BERpyge3H6iC5vX",
  "key6": "2zyenyzCT1tdSrD4vMRrQHaqa2m4LNTWRqVGCy5UREJU2xvcATehpGkXtHd9T5LQXhHzj9GHd7GS3fXVrjKJbhvB",
  "key7": "5gLdhaMao9VCxx1UjkFtV4byuPaTJzTZJDmPBerZ7ohVS8AeXYS2Ui8X8WdR2y2BdGXHXgpxFR9iQ2Ff6Djx3x9m",
  "key8": "5dxBrRPntTLZeyBwweVdXae4waa56DFn3jkEaSGkgdYfxyqKpJzChJwL3Y6P7KRmqVEHkwcsaj5BVcVgaWCqHbuB",
  "key9": "eecT63su33rUZNZFmWjSw6JsqQCCf24gdonYu9qxrBsdKVQoHRqpKA16qDU6sQSUQm4QfozNciewMJ8qvY3X4Sh",
  "key10": "3FcUDdsshoUCcJC3zuJuUd6SgRYb8BgPeMCtEhsbH78knan1keJgzwH7jMxyS9YewutY4vvaaumN57hK1XVxB6CH",
  "key11": "46ZG9dr6MeAWakVduJCfPEEmxAB2hKpQf6hFaZjWZnJ81cCDpepWs3DBhWkLP32GR2VvbcPsVfSfcQxRv4zGL9S6",
  "key12": "4zkAkKfNd5L98YuBmSid7MPdi1Eb52MT6mFbjiaNC444EkihNemho3wdPxnL15opbeLCkiaQ5NrBJctQSCj56uy4",
  "key13": "5MY6XNSu4RHMiESqNpqdHdYzq4VBHRbGevCjRewji5mgdcJGLfCF4sgAhLEVDf4kNNThgLwpsbkqT6VYfeXWpyYo",
  "key14": "38Xwa6QpM567kMgQ2aDD7Uckv3HGFVCkBmoJHU5FEX6NmVkHy7fydbRYDEFoMQgnmDS26fRraHFtTp7ZPGZM1b6W",
  "key15": "4hM5Uqtmv55rwaGEECzwrGJkXeFYozMdUVEBWGTiTCCjj887d443HQCY97Z6hU4hfb6RE7w5jHUWK5KT7LubGE3f",
  "key16": "nTavGj4csK83Hqqj1MPrST51p6uzuFCxwSULLm3Eq2g9rErJEDoD9CgzBc3P2tg1Lb256GFE8qKxTFK2D8DHjfo",
  "key17": "2H3NPChcRNGBkVtfkXLWCoHazebQyPewBJHvNvjz4YeWBW3qivYpPcQfKy84A7Da6WapQDA3hAHVMnyd1YX79qz5",
  "key18": "2sX8yVfh6HZiK4YwPLrDuMHzhxJFWvxBXrySFYntkkRwnG97H42Mo4diQaUWwPzSScb84FemAJcfeUpLVsuQcjBy",
  "key19": "5SBvVcS2ZqgwLpqK6rCRgtD5QTRR6JTcCa2WKKCvZE1c5ii2LFvghmyEphf1dbqktVjuRkfvdiVCnVTPnfFsDcv6",
  "key20": "2cRJDKWevA67h66kGDRw5vG9g9kXq7w3BQvTK3wfVQwRTnqLRWHNa6QrQuXy9YigsgCiHpe27DSUUXryZBBAnC6J",
  "key21": "3Th9mXx4U3vEH1ttPaPLMS6Y9Uejy6tHzUFmwBvmka2ZDt9b3SRPBxueF6Z1RWntLaDicRcnjipRse5MLh4RqD1M",
  "key22": "5vwGfLrotoDZA4bv5c37rV3dVvs3Kpd2basU1fRZabPxjD29TUKiJzqRS4KvpsTVeqYRhq1ed6vrbc9iCa8JXamv",
  "key23": "AEW3g68bzu2dTTkkduHtDH2y9TdvK2L9cPZdHUEUGeKkWJkwwYTRzuYzoXBU8nbw8wGzPa64Pu5nCKTc3Aj5Rd5",
  "key24": "3H1VjnD2EnHPu4g8wbK5cHHN2RGBx3izd68bxfNg59dqcZbjNUPmDEr3BWAuLw6MUnQhFX9Qu6kCoH3jWUD9yNo9",
  "key25": "2fpSNoFrJXQ9be6NLeygU3R3pxK4ktis18DA2wp3UhZQv67cqCQBhdaGqbWD4gmhkJJaA2kx9M9CXbJUURNdHV44",
  "key26": "2eHKwd4CyDDFCfPAAsbXGXDzCsjGb5y7qnsrNrEtPSQKRF4GxaEYbznuBKeTgunn7yoK7cwhiqkEWBYEqKKCJKfQ",
  "key27": "2QYpHMoFK8DzbPo3ZEsS88MJdzMJkRT7SSqQTNJEaMkRxbJGDsg2NVyZRkY24mWjA5z14KXS1B7HywN6ukjVSzKn",
  "key28": "3nYKVWTTX7sXHPeAfrNTfHCcyvetkVtsbox27GaK2TztGmdtFPT7RqaDmTze35kqU5AcdUsPSVdbhrY9DjopRvSJ",
  "key29": "35cL9BinYcncx5xrKePcC4xz2CEDdwb6PGT32LTYhCgAHVhxJLBbkkZqyiEmPNLaAjwpeeHXyaW7JT7JgDdaEuJ5",
  "key30": "56TH3nxBeB468is93UfX7iLdYCtQhBzUfwuzFMzXd2Nr7ZPNpggRSno7xgtzXe6ty5HGnRYRrEptAjoPVfE1Y5mK",
  "key31": "62WUFjadL54TcCbbLwSWYeW4uZBK5hX52ELoapejcYbuyRvgYKNNmoSiQeafyKKyRCNaedsLuMgRXK9KPUf3eR2L",
  "key32": "2DcpWrZ4B3kXoiDFPgrT1bnV9VZxUP5ocqFMqnDYZow1qVEVyu6cEiEgNgSTu49QDVa5uzK2JPZKwiC2gsXnDzbF",
  "key33": "3AiyJ8ir6qLJfF13nqMpk9ruGmpDGSeHxSKy4wMNpSiQneKZiszdUiUnEHgqCuQ4MH6LW9tKGNdqudF1YijTDXpW"
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
