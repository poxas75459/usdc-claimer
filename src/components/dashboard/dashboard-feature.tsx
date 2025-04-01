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
    "2s2oCJbp1GS7rPCNc2oofrY8mbBTbdgLhofuUjcsTLv3SnSgHgdPdmVw8Q6NkeTQsSK8UNbgFUhvBDQ6mFv93oqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YvWAxtpSZyzGgUusP846rJ6veM12cT4e9eKA3XNhLDP9QL7wJuZppJX8gh5Y5pabd5XcadwbRwU66MxvwSHu5mX",
  "key1": "Gf42AkHczgLczdBwS5vj2ZUukhrtashCMTv1BEgqAoovKS66vbsF56tSg29GwUbZLFUwRD3VUidzo6ZMqQwVw5V",
  "key2": "KUANjCETCoZCk6YFnrPkQu9hkXJcpV1gLacZwBUTXqHPSstra7dkuZsCnEk31s6uCNuXSNd6sGb8BcVyr4c6LVr",
  "key3": "5PgETQuj1nxUSStiakGYnLpAQH5pMrWH1w4KktK2HTHGo4WXutcWHWv3QroHTm4xCLhgsYf9xWA9VogdcsaQP446",
  "key4": "24N967N9cs8yPMssdmUYGQj2Cv2nF4PSC8WMbS7L2GjJwDsyMFi23iruEwSxTCtM4Fjo5ETqXRqdM7RgfLBzseqn",
  "key5": "4js3ZaKXWSd1VXqknQcZJqBtjVL7JtEAuPmjnTyHnFnCJuPJyWpMYcP75P9SYC4tDRz6rMbzFwWoDCKrBn9jWD3n",
  "key6": "5GzYDcXcx89E9s75mq4JxiAu8wWNue8TAcvx5Da4CfSmnphya4tBe5G91XWRJcjUVaH8htNKqF6J5w8PC4r9ZEsm",
  "key7": "2twg8s4ywoVSnWdhqUEEDbt5fgaDsad9GQ5iVzHv7C2mykvGpgY4e3ssxgBQZZckgS3HcUgD4omuzJqdPK5EFXCx",
  "key8": "2HZbXWgoYc8Hfntop9iodzeg4W4qPz7acNsyvxvK1vDo7vWsfXNwsEgrRuKPszt7NYzqxZer64nNJTpnRg2jirTz",
  "key9": "4MTptPyE4pDBQfCUv4T4msyfrntvTLBQxG4YgCjtTSUmkq1dE9T7z1D521qphLqgYUKXc6bmgoQwtaqMx1rwE4pv",
  "key10": "4zTTuePr9FMSWhm6QDm9UypEAt4QLK9zrDNhy1MgF5r2Cxv3CBziqrrzowWcWzHH7CmMFNKZkDrzuvTwD377RsNR",
  "key11": "5UcvM3F48myqQz8ErisrZHrXE66ZY9zVuybjc3Gao9H9BkRGizGDDqXs9DY1FvJDBo2wJkHgyRNuyEXDQkABpZm4",
  "key12": "5LcnveVxZJUpuHLrZ1rumZTktoHAaqPdxeCgcCcFfzrUztLSYQMMCJc6xz1gJtEDTDmEB1JxXfy8HGWTp2sRfueP",
  "key13": "64jgRcXcfqKjG6fta9jFPq5MqEt7fzZKJow573EEqSxi8tihcaxryXX3XRJ55n3oVK2GLRyMekTQfgaX2pQ4jJUE",
  "key14": "4F6KAwYCFukYRSBZ2K7durJDNB5E12CRiCVqUCBvrqrq7KtTtcJHvDtkE7ju81YrFkYQSDgQbAVkXhZLB4EUJAyk",
  "key15": "59P1hPFxdaphyMBBCxcEzxcroxEznNvPoCMJq3rogz68tjpmcPpToWfx25VLeVmfoMD646bC62JUuk5AUbCLsUv",
  "key16": "2wyiGkB3JXzsP8yY6HUYS1xM29wc7ZZcK7iKrXi3u2CGxtExsSLJGszBaK1jQZvQAknDP9eks9oxP7oQaNRCarsQ",
  "key17": "3eDt6CwpAVyeKr53NHVnXr5aAPMJSHoSiLcL4WYjgvZQWR4KPDYZ75Lp9gCpwKgsDmenUXTrLq5g6oe4QRKFmuh",
  "key18": "2U857qRCeSF8EVxiLdLEU6QVTcdAnSxuhPA4mpWhHHDAcj1WBWZEhhxbbSAMPifqukCD7aMR9UXUiMwnNqVBFB4v",
  "key19": "4Y9idpR4rA6tCiGjni1Cwj1yxozgcfGAiPpN2NMzSAyUC4aKX4N54VrY9joaSLemGREse8MTh7WpPZ17fU3kHUpE",
  "key20": "4Zzz6fgA3gYx7j3UQwmpHQ2Qai4BzMmt911hMkowJUoUJKNomjT6d7MqXAcjgM4TJbWG3Tnw5YWpGBQxw33yS7FA",
  "key21": "24PRewfqjoWMygkMyun6L8zT9cGkYSpq3vaj3HDXoeVGhDdhTv923mR7wov5fhobFNbGDguddkHn6WdFUyK8A2KX",
  "key22": "4tBkaUtEjxWCN9qEJWZ1sj74GkgyrmRGNUYmXpBYxNQ7dhaDZf7w9m379xhFnMZKf43a3fUVFzSGe996KcdDqYPh",
  "key23": "UEwRJywcDzE3CQ7o7kqLScmBDGURFvH1cT8Paa6mPtvL9ds4XwST76qBgEU7rjukKh5QepRFq12RRiFxLd4hEit",
  "key24": "22x3qW4eNMh55Zs4KKdAGLejv8Vu9psUnw7642sSeY5AMqe8h95MqCgceomxGstMBDhjoNhd9Z9eVX7Tw6zr1xv8",
  "key25": "2ax2K16A1rgKHmePuWY24bBfuSQY6VfHowbQm8QwUU2LTEMHp4BsvsjbAxhVS7X5yBCnfzCmMyi9JfTnuPVrRysX",
  "key26": "jHH1uCyhtndaXHiq99S4xEBxqoFAAmgf2Wn2FWTDUmJQdw5nksTHhKsUvMBAVBSAtmtJBdtEtpqKrcm4Be5GKba",
  "key27": "4qCwuoKVq5K2wtue7HYPcNisVUtCKWhQLRYnhCmA67H39jkzw9t9Td2NRiytxrbhu6Yb36LmqqBULAmPh3wRFypx",
  "key28": "yYwgv8m3UUscfvrYzqE9Fr6LVQ8f1pJfzSMrADhDMNABdHTaKEX93UWN3YVJdXiHTkRf2frqSHCL2ZiTp6L5Db9",
  "key29": "4dMv7x7yHUebUbyrvrKwUGyyrua3z9wxmU6Em8a2q6ZQnHLTAQQkBtbwN5bCwJqaaMpXTby4PYw5bBmNErsm3Ers",
  "key30": "2QPzySxwcC2M7d8NinyrrpAa2UFrnRcvrrXo5DvoZWswY5VEAVaQrqLv5cHv385BSbcxV3zk4XAsAVYX46gojTJd",
  "key31": "2nk4m1J35pxSC1Z1nrJSVRfWems5ajFmaR3RbiuAR55k9Cqikep4KaZ65TzofZNCzeyHF1tQ2A7nnnZUrEeQCeKJ",
  "key32": "mG9a47pzeZStYtpp51sgX4omFu31nQSeCFbRL7u5aGVNJJokQAFo2QWtupBFY5qiWic7v46p8V9kgv39SSGRnqN",
  "key33": "hyKf3GN1YfTgC8wfUEBTSZV3PFTCiKAj9uK8UmZENJyRssE7msmtEP9sGw84Z3GuoawQxp1rshKST3yc5ZaNALz",
  "key34": "3E66kHLD5tTuVb4kzZLwuMDYkqcvQtidxAZyFwfNwkoPo19Y1AG2q9EAevcxTShyF34VD1mnPrqJ1b8KdMKMGGar",
  "key35": "2RxpJBSRhSQk8UFPBbc7FVhqV84gvkvSpdBucGHmUwDur7JtUP3NiWHeX3mrpW5zhzG1cZtQ6n2UpwKUf9ByPshs",
  "key36": "3q85TxyPvmcSuKpM2TDu1NpFtmRhdhpPd47bmv2nCYFpJSjDimpH8mBHuynrm5dGzt5SXGf2ShuN5LEBeMfpync7"
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
