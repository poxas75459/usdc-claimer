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
    "54jCP69Jq3z1uCVrDoP6yzDN8Fxto3epfwXqGbHzWFZ4Bg6VoCpTrWBEXbbGT6BdvaaCCqarWhg8XyggFNDbTZ4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58jErqQ1XEHRAuEWT4rQu82LS1uCUeBFpuZej1pQKSmdTsqWf6oTiVT7cxc8LYCfs3J67D7BHc35vrdkW8jt6P2A",
  "key1": "2cHGwggBcsRCt7VTZEwNMdPYfwPRqLuNBvW3RLtyGPBC5Rtvx5Dz6fKSJyaZ9GegzTp2eJiD61KRuNVnJpTysREi",
  "key2": "3kTv8PW2fvqa9tbhkhF4Fb5wXDNr4NqgvEHKUHS7bkogRSippCxeCSLTHotTq2FvRDYqzERzf9mZxGUmpPCHVuLz",
  "key3": "22QZK5E8NjGQvrLXD3QRcZj2h6BYgCpjyT5kag8ozeTfZHDzz5bZwTmQcMtiXsKxSm7nEFKdgckWqsF64dkaPvHv",
  "key4": "2aRfU86xp2aNPYkEpy24EC3ducfqtJbCCxQwXNU1tBTjE89WBwN5XRqHxuw1QoMLWY3yUxZk3MAVLw3pFjinpNWo",
  "key5": "2ifJv6F2xKv1QFVNFcuj2GMwvrid27YPcVCkywmb6AsMGXyFbpzLxqaq2kPoKUZdUokxbtR5V5wRoa2bZmwjTANp",
  "key6": "FfSbRdGqRKZ6wVHESKiFkNBjqxHgkDqcj75qS5rMAgB4FAVSC9gqXYBov762QRbQHgvW1kdYpu9NmqPHoUQMcaV",
  "key7": "2whYM2cFunpfu1Hf56mzNiVu5tpGadtm5hyHZhW1MBPz8fws6UD3hB4LyTGuZTigG3JEDMMK8NxpcBEseDCGLrgE",
  "key8": "4bc6hSGqaUsEBYA4SR9gh3ECoBZvGyC3iWxGf38ETodU4Kh35bpActXHZFwDF9kfSMYCfqGHjm5T33LPng3SM9aQ",
  "key9": "4LxpHJadotxWm9tujpdbEfYzkcaLCnpM6R7tG23yY1jPbgkRXc4BMriLy8mRZomxPDJSadLhsdapN19F6ziPA5V6",
  "key10": "2LkD92iuBSi6xXiWTjfabQdMDcMEJjosaiDvfaefazCU4NJRvjvExszUwzFcnFE1qQ59n3uareARKWRtxDRmYMby",
  "key11": "5QhxRc5d2iuuRKM9WCo23n46iHXu6n5HLsrS7AxD4dhwdkxc2inz8aqTEKDqWFcDdFDKuyvJqV3G72guU3U7BR2K",
  "key12": "2mC3Xf3mtdFvvafszvRvCDF3A6S8joXuJrdKWGk8LZAoDNiBHqQ3MJnNAQ8xw8GeSjkSL9i8kZK3T2mUyBCsoqmW",
  "key13": "25dUQcwQ7uBoqv1h1nWHcQjVsrmfTZsaip6TeXspVbdtuVxwyDkUqknn7tjkr7WFquAu98N1YQZyQ46fPFXeV2SK",
  "key14": "2uzzpuK6EsvqommrhN1HKXxS44Jt69aqbEVR2CGxuxw7XzzRbnr88KMHg8yEq29Cwp51iwP5R7S2Fe9pUoCfmRnJ",
  "key15": "eLHUkExcENkGgD5EEzBcQNiMVFnH5GasPYftUpmhp8k5TdLFNDfnJ17USWy6pyH24Xr1a9aYBSWDjNaZBTW8GP7",
  "key16": "5QJNrYK2qeWmvkopsEViMQs3Bs2cFze2Ys6Y8r9RNFhBdNMgZqNVgYNjjQw8yyq3wcNEbPYAsEs1g4MtwrFy8jw8",
  "key17": "3u2HW5pUEXuMogG2RNAafoA2wdxZPCVPh7odbZmtTwYK5VTaACLHRaN9rZjxo8HsLwU3zRNrRS4eCx737az4waEn",
  "key18": "4LZrzwTSzpiooNja2PbnxgGFShMPmfUQWrosutiZRgff63tQW6MgA8Ewrg78hMed1hmhxGpQFbFGg4sesxHtzmev",
  "key19": "5AgaynPoy4BXT7idA1d26FLB1RH8G23s6Y3ArK5AvmzyS8C8b2HZargcEZWfUwygWpB5ZDqWZcutLL5j5aRUEmeV",
  "key20": "xUFnbeiE2ex9ukmyptXhoM2vZFf2tc3jfQiKLEYgYsHdDUMVHLGMRunmzHGg1cy3BjVU2jvefFuQUYtTufZasCa",
  "key21": "2CSE4V5DL7g53VC1VA1qKRZnL9z78ZdcJ9aidykj1iRLA1Gm5d9cpATF78kYgwH3KmTYod1KphwvDrFocUgMPRg9",
  "key22": "5946VoKsLET8LzUF4Twhm3KDtcwXYcUUJEfCCKTPmT8cPR6qA64qNHGCxKAXNEdT2yNQzyfabVpAZ3QGbVCB6vVe",
  "key23": "56Ktd5HetafjYRsrkUUzrcErggYz3BRwF7Zyp8F42Zn6iRQYGxMzGEJ57dqGVeavNwCZtNCG5ViPwqHu5bJndsBk",
  "key24": "wGjHbZmn9hq81hg9P5mBqne2d5LmRLyGjsDbq7VfLksMPNeiQwvJrxuFyZVHMEWcCBc7rqTRBepexNEAgd2s3AS",
  "key25": "4TweoL4HygdFg9ANjQ98oLSyhKZiEZhTJG6XdSv1MJtLtsLW6sRnFXp8KKo1X5Snu8mmcavqVFoYNAgwgYdcbEkm",
  "key26": "59Kh9EN4qoCVAc33A2MRkcUM336NFKYzJzR4chuYaBgeQD3JJR1sfsznjHV7fRZdy3nup7Ty7SXLyuVhVZATx8c5",
  "key27": "617PXeSnufTRiziSrb8dc2vnYBhbREr2syEWkCcE523S1Pz63HPJk3z1s6kdhUexggmLQ4Vr1PPagsxVmTsNeQAq",
  "key28": "4Xc4QqkaNeJjScMfPvTjwBNXaCqwykHmE7XeBQ3Bdf3Xo9WN89yNhfhgQNfZycv5Fe3WpB9HNtS7pvJ4Vy7bUHFZ",
  "key29": "FLRSsrhd6NphTR2qZ441igBF5SPWxARHaZLdUxPznzyp5RWTLy2WsqUJGQZjzx5VSddg84UWTWrDw4k3WB8XWGK",
  "key30": "5MBsEbzLFZya3BFUpaDgbTas4KwNLgw7SNUnTdBCnZ7oyycZGEvpvBHnntX3ThnxLFz6non4o2BPNcASDt9KQSbw",
  "key31": "5XVwr9T453XEQL4Bz4Hm9jMowkxbWbR1vz9BEc6Kwe3mtkQZtqds4f1YM2FybfSwJDsgZGnK89cVHSFxke4N1i5Q",
  "key32": "2b4jssAem3rRASFA295MaPeCsqEjwyFyGVRWbArGSAPYaQS61MeBGn1sfHR7VhFSBjtohPhqQP8WsUnR8Yd25Zr8",
  "key33": "5fWxArdAWN97ixBjn6M4yHYSMUR6DL6GS6TrZpeXAigPpoDg1tiHqo5EsNWcC1qAidkeePzaQe9B8tadv3vuL8kf",
  "key34": "3NtDr6BfbMjJdNoRQD9D58tbZJs8ejTW7PcuEH6d6PWdwLLprz62U4GuaiV4Sfmj3HD49ahejbiwEqtFFi4c76aT",
  "key35": "2ufwe1CCfLqyeeE9NCSh2wzfabB2qiQ8oHHJnLfyteB1Cxuj1xG3UeRHPMTV4B8F6wnBgsnDhYdeX5LRAUnhvSB9",
  "key36": "Gid2Tw57K3eyyYoy7nMSB7TLGJEWLVHiLV7XfU6Hya62JKKipCin65f64kKF2dKFx4w7XPKUgFQwi7R9tFPUmuE",
  "key37": "67VeC8ow7PR5U8DpBtpKWyHGLCwU2fuMGGy7CbaMoztREcZyjJDsLPxZ4CEkFoiw1949YFUDx6zi1aeXh8BGJ1SQ",
  "key38": "4U5RQaGqv1sAxg5fbUE3Bc7cRopJRdnFjD5Tc6RWowY2oQcLaQnRHKfvHq366C7gjvsG7DoDKmjyjfna7q183FC8"
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
