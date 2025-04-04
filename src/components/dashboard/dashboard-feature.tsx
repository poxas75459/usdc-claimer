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
    "2evdSATEXutsHafRBMxHNM2jxfNEEU5mxHuDwB4GZFTzy5e6MswgZkJVBFHb4ckDrXeCxtfbcbARtVKQ6jy9yNw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rD3SD1Ltk6TrPkBgLVnWfGbaDLrTLm18qYHxYYAZUSJz24UnMk9GnQZjcqKehboqNgY1vGv2cB4ufeu6Bn83Ybx",
  "key1": "2DidUkA5EbDuqWRKrNiagGgc2BfNagcBFYsjum4QNFF2xqi7WftBvQK3v2JnRF1Nr3z8kKAu3Lccg6PSaNixWn5m",
  "key2": "2TakgA6w5ErqfJZN9QCVZtFVbKJr9bj7ZXU7CiA1Zt8GmSS9Thfr6jHr3N6PwahRD4W1TgHraPCZhdYetmtpkk8R",
  "key3": "nnADV5Dw1Nopm6Z8HDJZ5MZwnBVwQxRJjgU6XyYiH742yyCon1S16diQcWkEXMK1sGWKyEWbzdy75gLttGiqT6x",
  "key4": "3YEXzNM9U8ire5uZ6XTPLvuBPc4bT4s371odYCNKZc226Xen2yxxMDpGV5Y3NqgDD1JVpgxjPegV7ojA63tqUHnw",
  "key5": "2UiWE9ijhpQwM3yNb9jgYiScT2c2HzePgkjSFCqsvu9bi3UyMN3w7rMmPeAtskyCXXaxDafyiEok9etD5RMttnQA",
  "key6": "2dxYKaKJqiD2oBVx3zTcyEMV9YfrbnvemUVMcTvPnCGzR2RMEMHjNA1vysyVmvCmwo3F8rrUQg1RWsTgZRehWHC",
  "key7": "5sYBwZGKBVNhE7WvbRJL9y1868PymTpNcdxESsmsibNexCZ5JX6SHHmZ8MRyQJBK6y9ABaUSpn7Ck2Q4r8SuhzJ",
  "key8": "VqAmMFExHfUrvLy8Ngr5hBwCEAKr6omoCtibBmu4k6vTPipE1cGyQhJxBSuYkfcdJakN43ZBRHQXZQNuWjAux4o",
  "key9": "4r42YVbAwU3FZNWknuX1sqLjLvmV7dZMiUu8Cv9NiVDDiPPZ7NXX4ToD5S5GVRQhFbgXTmrQy4f2HCrcCMKco1X4",
  "key10": "sZY8ddq8EfmMfy3VUeWt6QyS8n6xEu8R2joyoRNnxZNbLAXR1LJTqQtewMDkGDgRK2erDhhshDzVhnFGzdDMCjS",
  "key11": "661EARg2m7Xvr5bG69gLjsDAzC9v4qrE8Y3KrwcoWcqjbJW61HBX7XcjZd1KWVe8KkPXofGrb9ZSefWFoh93zoHv",
  "key12": "4uoxjcgRMpFkTQh1LcvPVkVvv7PfyPVkzrFqSobKDqMBAwuyxHZA9HrukebvEmAT3X4NNgWhHBJRYgzDwXbC8B7X",
  "key13": "5L3zdUinX12xD21QoZSZVNLNZToEvEMFdJxYJopqnNcaeQnvfBcqvCHzzCByVHmZfABWBB9ek3HieNauxBpa1jgX",
  "key14": "3xPgkMLARagVVYtey3PDuyKYVr6JCcHHaVSpEumpY4EMLsw885YjFtqWVfe2PV7tXRjEZfXFZZ25y4QhPjAuhPib",
  "key15": "4p6NJyWVZqkEeGs7MDtbN7jZW9cMPKreD8h4J2Uno4fVGkGLvhL5iaydkxTN5QXJq6AhmbCGTxVwaXBtDnuKtzXT",
  "key16": "3jZU1BUGoiFgNKwPMSxgFM7EvRMKiggjacAQdbcUyVPZbcQawcBhFdnGtgrud59rBatA6y21Dc9iHAwtdLGdC1yQ",
  "key17": "3EkRGuH3QS2wPbjvT1o8oiHiHg1VpPBXuRYz92CujtGnpgnCup8bbTGjqLCYVacZpvikFqGAwBMfBiaTR5BkTBAV",
  "key18": "N8KxZhuZiTamQGtVReYYv1iRAEMhEPsEo48Eo44uacF7T2nF2aUGNsNZ3r2m5aJfnq5cN6Vz9dm4ifqVb5MFWUu",
  "key19": "H1dHWA3ssHyE2Lykng1QUbbfAmzFb6mytvEik6Ehuz3oXNZJNZEkZeEEg8KyH2H4qKQ4TTGRzeW6PYYY6Fh3Uve",
  "key20": "2vbfphScUvuxwwmj9Aq7hvmxCJYgH6WK68WjzXhvfq9gvqeN4dDdion525fvPZ46kVei4qMgoKZkyPhptDNSCNQt",
  "key21": "fRR9i1ray42kw5YKKRjnxHxHrFtoRTcbUhZofGmFS5ASxo1cCzAmKZmrKXfSfPw7eUmMPvqGZtVScmk4mzB8sAw",
  "key22": "58V4CuMeTR31VQkKb9fySnh62sdRCnynaku3TfT1PKRi7HnfotSbYXuByKS2hoLWEqVZPGbyxpuJ5NCAPuCZ942g",
  "key23": "4rVfUTJ4zoy2AvvGAyBYwW6pEuWwYRewur1TtySk96MypWM1yGpGiznoP9J1oZD3thALzUtskvpcGgjBMVusR15A",
  "key24": "3kjprNSG1s3aREhKdMyEv1af8J2xfUjprAZKVEvHjvtitVWf769QcVh71xc5upxLKVHMMjLC5opEXGxQ4kYhHtFU",
  "key25": "4LXAo6F2W28vMHc2HZux3RrGYA1TRBoXFC9cdzCQLeACeUuBwj7DbtsoTwiL2gyx6VuGjgmyrx74qZxW9YDso8QV",
  "key26": "122kEjtxGb5237n2ikdTufhaqJzfC37T4A8RRSNHYd86FP2LQLf7qCQdqub1cQWfm6xndFyB4HVNWmgswnD3GsZE",
  "key27": "5gZQQE9CsCW3zdZC4qmt6nouvZ4SmRHLq1x8T4eSE4ELqzE53URRXqcxGfrvBm8G86yRV6zArn89gxUTG6HZpnEF",
  "key28": "2skDvziLtCqXgk2HRja8rKFCCPhfSvfu5cumHiJrj2Ygj36ge8Fa4jt5SwBskBGabPNEjqajYCUtE4Rdn9GKiz4p",
  "key29": "5jxMApoaJ29wMD1tfSrjdzvH5vEca6n2YFsZDKLVyp9bUFAn6gkLcdxriqZL3o3naoVkeqXVb3xnKgQDAjuWNDMH",
  "key30": "2ydYAVMEucjTTy1TX8DtNPvyv5e8ni8RWkWdanL6QFPrEsAiLXhTMj3RvXZTNutz9jZop51u4YFmVxL6CoEPoL96",
  "key31": "3aGrgnT4WFpmXJjunqUbzkhPhVbEhDVpFN89d7sXv6XzPKvygRfCY3KrQ2QzeAsZUhKcjLapVZDDW9jEmKrAsRn4",
  "key32": "23mT1pgVJdNBm5XdpWsDQBZfNhFBPqKpDFut6rLbRDdcn3e8X2WKCZaRrehbYEL9xKhTTeNq3fas7QYFac8fcqoQ",
  "key33": "5P6XDzrscq5eunbXsD93Z8DPwJZAF79wuyLPoc1RVcJD7ijLj7V1CkWNYc4ciPnPDNuXmrRZCFua1YD9Ac9BQdLh",
  "key34": "5sEGmr8iniQKrvxVk6wAANzSgVeo4RReqwgknAWSGCc6hcR5XnbRrKkDjeu2TjPsJHtSkpX39TSKrATZicRMoH6o",
  "key35": "3i141iveU6Jn6Px6BRPdvRPprjtN6bEP4XWrbeZeX6ydJSkxkdeVxURxNXHvNEvbLtryAsQoociJ1F7HhSuZwkiw",
  "key36": "4XZYnaov3VUWqsXq2bnHTpBaFzbSCyZNQPiZpuSD2WLaFSKiCzMNLf6mmTbEckSY12L2ubVz9Xz9agJ9NPVM4B6o",
  "key37": "5zMNd5wRVZrpiibkPSV3JvDYWZrAKQ8cM3MsswYShVQne1prDkVstsxN39pkj6jKcJrsLf6k2WERnjinELNcGidd",
  "key38": "mo8KYM9CGnCwhofFqBo4aUWMatPWecY7fBJQNe4uhzFNwWn2mBTg6iKAYUPqMmz2qWn4V9Mvc61db93j9yucpzt",
  "key39": "oYKUqooBTNdxksLhrw9XFuMCLBkzRM4KBUXsUYzKwN5RAUaiGPtrmsUvH3wEJ19r1Fmec5rihUqP98YeLEVZS2T",
  "key40": "4kz1eLLN3649z61jXeLnZyjFFf8RvyyCttM4sWjq6trstyr1onHQX7rAF1NrM2QAm6UhWMVUdRTX5ivMuUiz3s5q"
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
