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
    "5ZQfuqrzHRLNo7CtDuwtyUHyGQx4a5WBtLQjBW45r4FL26xJYvRhBi2S8ZDWoAPD8BpHiyryuiH9gLSWSi2A7C5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4go3tM7nMEuBCzPkvd6XBDy6MVoWZA8gxAfWAN4GegC75oXLCrFfmAhBWbz1ETbwet1aGF5umjhpcf26ptdKiKCQ",
  "key1": "2zR7MGNFkcKGt1ofwXz2Qbnik2QF2CFoaLbTYYpUu1i2JPJvs9ADYT8mQ5UKbBwW5KnbBRMxWa7x2U1r2RZ6F5Ao",
  "key2": "4R7DL5vtMzGY9qmbVMvz1VrARLJsTzNqy5bWBdAjuy4qAeyszmkJEqANXuJUk7UXh9uB4tfG3C8AK4N9QvR525ZQ",
  "key3": "3wkUABFEyqi8xXv6z1cmynaopSknnzm4W6DeFhsxeBS5dDoaGbohaGPmFz4bLiVDvzqfBSWQEGAucKeuPd7ABMt7",
  "key4": "3tmLymp55NCsASsiybdsZiABRvpePvsB248nKLLAWDisgAbWuRKr8Xx8hrfdGK4ajbcQVSmSJbhtvLch1bpgoDYn",
  "key5": "3wv7LLKiydyJABbSGnxjrT1PNwxJ1cjJb2tSqEZ4B5j2eCb172CHMsUWWgbcwTHRWj2sCDtnPw33v7LqgE5VmWtH",
  "key6": "UR1iT8tq7cpNM29F7NbRfZqfHP6sMJZnHjeGrjADcEMjGgeov2r6ppPurEaWzv8vsX5ktJWQm1iLtBeF8YmkQs7",
  "key7": "5guPtT3JvL6qf3BZdXs6htaUK3A1R8KEjLr5rxQpVYfgGrctYQgpdypGmrqCusAqXqK15rQF11t8CnGwE4WaJmJp",
  "key8": "3jx1xpHNQVxufEtJ4Luj6jxm4vzGKw5sNx4Lb6dHDJVWFFbA3H24bpbFDgbkLTRRyZguFoS6NJwMskDNojn6SyYE",
  "key9": "3zxhCMWLaPa8UvKxxbVaWzhM2HjtbuqyW7p8BfG4u9iH8ieLpJ2DzPiG8C2enHqGqmXomkABjWomy1f1pG6LZ7Nk",
  "key10": "4h3aBZB5gSYE7teeyHQK8M95QjXDwXt6wxebUEFnGhzbUcFAgspBiQRAHy4pJPBC3CVv7qSkL9cEy3wEtX7CBV1",
  "key11": "2LA3aFS4eBfgsHRYWTABzWUMAHCnbrSA7B6ckFvaMDzDCotVu3nDbADFBZujJRnWmBN8Wrf4jUm18ZRmc85Np4eT",
  "key12": "2Ho3caaCSk3rWMRF42xFVL8hyZGSQz3TVSGTjAZa7nVjeb6Bv46rtFAXTVH186Xn6ppN3cHYn3DDkt7i4KqjRAHy",
  "key13": "4ibHvmKHr1f2cArxH4bUNNRLWgFujFYPKCtbNGnWJ4TrSb8X9Q6wgHTzDLKmMuCeyvp1Eqs7fUnSoE2P2sZ49Juv",
  "key14": "ucv3D1itmMfNLWgm7hTEExXnuBUYcF7Mr6szcvmVh1ghsAbPKTcyrcuzE8KpoE8LPBKxiNdsMzJST2hxR45WvjG",
  "key15": "5RgUGLoH1nRFs2pWPafqxPALfnzZrqcXaAnGWjYZRsheUG3HnNPB93aVHJF3EheVpF77h6Fz29xazgmC5G6ycbSC",
  "key16": "4rEjjRDfghcaa7yxjq7CnDMjvQ7rYsrs1TZkc2MQ4abAXVYeTA6thyNfYQa7vw12hLtzyAbNsXU4MRkpdjSCWSZV",
  "key17": "2TysGGphcHjsbSMBokHKHNb6JzgMJqizQFrq4cxrHeAxfTBLZv4iymuanenyWqGENFWyZM3SPoA4rrnagkjvzfoQ",
  "key18": "tPdUyib9Kh7zG3VWoUAdGU79eTtWjUbHVi4f5yatU9BRGkQAMxUMvzQmYCgeCrmET2rTGYmbpZzXbSMPkMsFT7J",
  "key19": "2ubEDPNM2xKxYJwy6ihP6re9pr6nC1x6XvRpxoMT8q7wj3E7aTUPurZ4kh9SWEHuuqBzwCUjnWS5X26C6WUV9Nm3",
  "key20": "48axMLoFVnZFsFGZNNo7B3E2st3fTpnAHLfwZ2HksM2yVV9YuDaTirP1wgiZDrZQuk76kXNzzeZ7zZHBASudiKNy",
  "key21": "22ZhBWwiZ7stwvpcvK43txnUypZXHExkfxrLjSWRzYZdf675ALZmbLLCh1YUzkg1NDRXgajTWFLGWEYp7qDMDFtV",
  "key22": "kmrxLuYDUvkRAD4xT3kTaM2z7NJRqbUWQWH1enCk4Ay7ZRWRaz7kE2BVSM1pmcZ7UYhGtpGU6japoPdhSL2hPx6",
  "key23": "L3cSYKY1nrczVwZ9zkWDth2NvgD5LTQphcBNTktrfvKHP59qBBRipjQZ3boTucQFojXBaQdH164c5Ghj7eaFwYa",
  "key24": "cpifqJdLeHyUfxwxEQDBmTePxrZtctK9ZwMEDKxivpSNmMTcMxD1rawZ2Zc6ADZ8AVEGGptyY9LAN1WgxAB9p1v",
  "key25": "3HZHgNRBj7g1vGKgWmjW67oLovpk4tJwxUuJMiq4MuxENQAEt9EgvBcE7gcajLSYyTZr2HWJWnAS7AdbocYHNdjf",
  "key26": "5vFiEeY53Xv6SGFgtN3YJ8mNtH8GtJv7ajSiD1Bh2HRMo6UQ21HHweGueRHRuc72BWJjkUaUhDUXBNnweoXGGm2E",
  "key27": "4JaWWJPW5fnjKX1yBdf6zG7VK12qCWKFkLUdj3hNgyNrgaRKBw3zUu6s5KV68osNfiR3mHiSR3yFHcFtRvFZjQuD",
  "key28": "3ssCrHZHMw22L8TXHz6naLswVWadB25yxpQuxMV3DubhU8PffrztLJByHseii9qAA7Q8t74DDPAgp3NXRNTn9A6d",
  "key29": "2WtaSqU3QssBNqudRqbvrdJKbYCEuKhyRZaGUXjpFSbPx2z1Em3CiQA2JtbjRAyHKAM1mvyejf1B1GwESGFoD5Gf",
  "key30": "KAdvrDssnyGm8n3fwhWZBrtLHCNPNYLaHrYZreiR45aAVsksGrQNPkodT6GXJ8UoLL2pNsJdsWMEbVuFpoTa3MG",
  "key31": "56xMMLkMXHbF1ffkevnFd4eVe5hb1Hvzarn1ZxTfybBhvEyuYwcj7DWTMYuDk1wgiVCZdy4f4oXUs6fnegCs73z7",
  "key32": "XnoathGQe92Qz8mqQ7mEwzJW3EeaedMFUfSyLnbns3RbbaEgVm2TNACJqoouJRPMFf8Qahed8B3f83Gdyt5ER52",
  "key33": "5Z5dfUZUfGgAGJY4fV2GwewKZ1NSUtoPXsBsLyXEfGwKFy5DJCtWR63MQCfgpo1Lz6jcVZ8LzYXmo7WGbpmhwMYw",
  "key34": "4ujXLVUj22131qzaqsPdGe2GFV5nVnStMJhAmQeRmHGZWZNQLLsLMwhWswDQwGNj4Zns2e6NB4skX8hsixG91st2",
  "key35": "3Js2zhgXhHcDbYFZooYAWdPpzGCHWBnvUb4uZ7dE5LrGp9idnpjWWoikntW3zZ8rJUUAvMsY5NXSv4UWg8ZS2c4K",
  "key36": "4iRLdytNvisRAgsJKrbVoEiaLZZCLVseAWDEWYND5UCebmKy725JqrkZaLREkw39ZY4y9RPJuHjKm8NxjDjDavHd",
  "key37": "55FdCJCt8he3tbKgNqsc4itq4edwxZbJU1XweBg1SCPZseffpXoBJTfr5GU3UJCdNJxtumaVPwQhRhWhC9oyVFfA",
  "key38": "4RJzCeRF9Mkk56GEkpguKhFqSwCKBmZiRBEp3j4jSVDMMmusvrJ5RYSXkbovQvXqk9objp3MNEnfHxjfP3HYxLim",
  "key39": "PN366yyLRdH6thGsmWpX7eJTU7NGGWqhnbvGjeCxcaXVyLcYcgkAZmLBKViNmBSsQKcdH2oc9NexRitt4UgYLRP",
  "key40": "wRaGaoLkHaDHM2MnP2KbVop7N585JVSM6KX8nVyAezLMZ6mwdt3Ao7cR5F9DDSLEd6JLXY3wtxgJYhezfNSmaTt",
  "key41": "2TCBhBvoHHPCgLKSw8ppRLxa2oXQRn9uvKroSvXKviUbvxbPrTwusPrUKTrdtsh77eYNuY3hD3aoMjvJ8fkB7iZc",
  "key42": "5dikeoYLyP31rsiJsiYABuXqpmsVjGGV86LeRB6AmHUbXe2CjZ4rMBvg4m4G4nC1yxvbf9udEqEznisb9xPKLGyW",
  "key43": "5EKfXceMpc6v4gMtrePgUw7iCNkXciuVaTt27Y5XLf3FEYsQGXXZcifa6agxkvZwunoxfwZRou35dikwYsygkLpa",
  "key44": "67aTGz5i99UPvTZqt3Ak2qpYFP6giuzUxUkE9xwSEvPU7gcNeSyt42jL5PJMDpmfqk4RXYX837AoTbbFnZTrwKdy",
  "key45": "gWgyabKdvtJ52LaWy2a9tQYaVvm9FtLzXyPFVM2CcpeBZUFQXxhZeNvUBtniGUt4XEoC86ztSLFXXeqrFGuprXD"
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
