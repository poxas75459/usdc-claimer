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
    "5p7AzreTq2Qq2M4kcVqMTB3k8RdYL9JAbeihjCrCCD6PLNtkLHkdUvMwy9Ync6KQGNEwNiKQsWJJpt1fzYcJpKMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48BW1YUp8z6ysV94o1Vvnrzdrofb6jLZXuKx5LhG1Phtm739mEJm3rXyVk4rARhTQfdmrGvXvQz5XhFJit1neMEL",
  "key1": "4yvDiWLGjqaWAtD3ZHK63vZxhuQvSmfEgQoqpKM1xCysgbRnw96zmmHvPJZNZPmV2fr8NzDxicRZEGWq8ibwoiX7",
  "key2": "3v2UDzwqRLq7cQGsaPf5RJyXkyjLjiYNbyypT9s8ADsbPanCzEvNsC532LHD4cCFYgc54esb3bdffxJA2yVtFbui",
  "key3": "3JQQ44whvR3Y4BpXkecjUPGEHWTHvK8h9BpsQbWhqYLBXunSRR5q71EJqyEd9HNdwy4T6GhCMkD6JHePotyZM7no",
  "key4": "3941FaoHe54sE7zYr58B4CitsXNZEWqGvqy2ciAhcLiUwzZ83CLmyPPdQ2DAuKsgakRPjphmfHVhdMQM7LL4pADb",
  "key5": "5nfr5rTVVSt66Ak1TuxnbqVGei9mLpe7Jon9Sb7E4XteUwAetK1VtsJUd5ASobEtPY6NoxxRy1qEVGEi1rnR3EGJ",
  "key6": "36iRC8iNcEQUzb45Z5hXRFB145XrwaQEQCknux8EQJik5szxd3BbNjq2q2oFw58EQydzMQeNh4Kn8YhPGJLXR6Hb",
  "key7": "V5zSW6xkNeNqjD331RRrF9GSNBWuR5b6J6CXgASQWwiPLVoFFQkg1yaWwEXh7SEfuoxuY1hABGrU2p6GSB5cxHu",
  "key8": "5yNXWs5UPveFcSYnr6YhToTspWCz1uqbbfuY1DGVqrmGPxvLvros6vXbdX4hWB4NQpgsBfJTqDM9KDby6TvSVE6L",
  "key9": "4314VUUJGyuhq3zLyRN3wFwRCKhDRecmtADGEBtroPj3wMqCftfMduVHVNuyxqZh6DUqcnUw4v4dGqDAjuwHLp4f",
  "key10": "3ZE68xh1dJA1rjYgnXL5iPy1j8QK9DuFgGFVXzbLxkcATBsHuxtFdtLczVUKjxtEUgbFMTJbTw815QS8SejVdUxK",
  "key11": "3bQLGpppdH8o1BThdZFbyYCuM665UpPgMRJkLp7536yqGP5D2rnk9b5RZWWZZENW1LgqJ2N7TvxsPBascRUDddLB",
  "key12": "5M6jofZ5D6oTJMqrYF7FNJNT1ns2rAkghz2bZneUzzeYxBuWHxTuTAqVXRpu15XoUCuhQuSvZhkQhYSZGjqQ9deK",
  "key13": "RxVtNqai2D1YRGBohVJD8NcXWdQWXtS81KmbjG6LEpWxD2Kx9xtVL8qbr5nynxUVmsRh8BB7mXq3m4HuQrr5qhy",
  "key14": "2baqegSmh74Q3zes64MWVRke13MgKLBUeJ4hwncr52FVeZmmTVMfqdCxcF3ySKRq2Re15fgUof4f3eg5EAsLynoH",
  "key15": "3awZQxPa1zYtpZa6LvBruFpSJHbBvnp4wjQK5kubJ5P1bfj4Ptjt5iBM3xyVxHpdZroYrdFbsB5u1qFRQHcJkGQr",
  "key16": "2hEdNuTNYagbaAgYuW3E4AfvUWUv6SzP5o3htZnM4mTfeZTPaWRjpUGc5fwewSMVd8gMEvBRA9wmzR2GHrGnq15v",
  "key17": "3fNdpRVRRfqAf1DyLJeGkkun1syBjyswTAr85fQT57DUZDMCseGQQxnG9kPZVUrG9rM5fKMfD2WNXV66KHMebapy",
  "key18": "5rGwDkLADaJ8qk6cWFCfPvXTypC9MY1MqEjshJ3XQWP6dqATU2aRUjW318F6fUCTDS2N2s9HiHiqTnYF4MDB1voW",
  "key19": "5a2AP1F3Nqg74khrcsRrsKoSPH7zqFh5ytRvhzPZc5mo7bRjMnw2MspwR4LErabTFAyX8qwTLnT36u5kDrvZTFZE",
  "key20": "3Q7HN6bqYJL8NhZX2YmRg1agZQ6UyboE5nmrCCd9N3HNhco4MjGB6yomY2QhLWHc83dn1RG4QcpLAoogMpRuXFho",
  "key21": "445zhazqzTJtmMpYC6PjHvnQhTuaTN1XaPdszT14i4wLcTDCPG8kwhi11ev7jXFBXghubPhYrHpbcPj8QEJSskCq",
  "key22": "5HG68w6zwVypMYvK6FNEY52fzWjXMn2oARJkGzMv5J3JurE2AuTRmzgVj6EB1zqJaVVMMPNb6x5rkWEe5M1CUw3Y",
  "key23": "2ekjQxxwRRneXPqeuX5Ph1RB2t2qPqNXAsxVXKEWfmmtgH9f8g3uijCswiyVzhhm796woRTw7UwMFSFFZkfvS5CM",
  "key24": "5YSkABrHcuHve8inxHh6fSC8wxfM3UhjBeTFPcisbMj9rS9GqcukK55XJMFSSjWStBcDb992VbQWjj9drhNHigzp",
  "key25": "23JNi2C4KmtjBozj9ed71PuSYeCqtBJPdzjYJmwZir1PNhkV5HDYgZ5UQx4gfVZsiVRzugBGzDRh4z7ybxyYKWH8",
  "key26": "4Eh5Co1T7nr11pHbGhatPksSBaYzvaFRjUdLEsyPdRs37MvYjhfWQR5VyRkir5cdMR2SPjCRJTnas2QDfsnciN8F",
  "key27": "3DbkpyYjS1CVvGUUYVz5GegGKmPqDW6Fn7oS8hibgiVN45UYotCtbdbjxkupCiVQk5m3oLbtfxe5EtxYa6fCnbWC",
  "key28": "5o511j4wpdsC31MvZvaKJmxFHDb3xpTCsCWmgJdEabFVW4ghq8PvGkvKJyPCkv5hQ6yaZTkSZn61vkhHnZXFVFD",
  "key29": "27Yb3hbvAd2ngQNeAASXjRTyNv2tmUYDX4WBaeA2BB8mnbb1to3GsbBKUL6BmBAoYMre4Wdc5E9MQ6W8BxbHshph",
  "key30": "4J3o3xX781U8T85JCyZHcRVqrWEDCdRWfbkFdRBpU4fm1RYTVMJC6W4C4zfSGP4mneogDnaTtL4NG7LYviQmtfVt",
  "key31": "9T5rQzKzJDYkExNkzudqK58MGykvuCY8k7d89AvGwjZRgJN4AqFvpe4VRKfzoa1Mp2icWuiC3keLRX5pofyr7os",
  "key32": "rWVEu88jkGaXcWtRBBiRT4NC38UC2WnAoHJzbjDRB1WCs8KkFbXF4NDpUDAe7CjaRVWiENSxup1qXM4HjL94tC1",
  "key33": "5CvF3b9Y21ucn9jGNn1RWdVLb8ABtSVpQncTWU15hndsqZwYhMN4R9ZgLd1s2RF6BWzRcewr29RkZb993VugBid1",
  "key34": "Wdna5XxHwfzWefKyLJ14ypLFDVjcMUW49wcYjyjWbav8bEwEWgzk4jmcwb11hmxwNqVosXnMNzjCbwN3MmAFvQp",
  "key35": "5J8dyULiJeSXprDRn7t779dtk91HNkWP25PV3p9mPC91hNHEE6cCthXiNhLX6phXjcMCafFZrSMq2ncobJzBVwaS",
  "key36": "LcwJfQAbchwYT8VPsiGu2QEuCYmAMT9CYV2g1izA5Uve3F6XN4nF9RKXjWXiszXFgspENM2Kb8YS2i62dMhDZkM",
  "key37": "6qw2vbWKGC1m1PfbnaZie8PbLNGer3AuPm4ZLbXDhcH5VKYtcQLXZpBHCKFLUHabkvJA5jctj1qUYW1JietDAAd",
  "key38": "2Ng7DPsirEzhyAEebGfC8TU45d8k4ZfkhT6GTN2QKMfpLk5ivsWFS25xzj9earF5GBEaos3qju79c2ZcPq7L4a2L",
  "key39": "uSzZJy6VMmcD3Q3hDhEvx8AhBVRBfLsqZrq7PBSJVCkkqjZXo3ysWAKpfUySMkG9d6WxzpXcyQnDub7ToF8KrbT",
  "key40": "4P6tyQQtfbwXpBSLbFakaGUxUTVVaJDfwUPo7L1DjThvpnRGnpr1vHPD9BwugpC7uNpCmEm6qQBcQPzf7w4jKFdP",
  "key41": "4hv3cFRabib9xaip3WJ7QHHkGz5nNFXMXwZdamJhiAUS6CBpgoL3PfwafY58CDLD1FgMqHk34Y3h95J48NREKWXv",
  "key42": "2TsD3v83N35PBJAQ7J8jcjULGLSkhv9SkhdosX1rSYa4A5XKTwU8jN54TbX6SwHQBnFCbpDgWgi5hZcaJscfesdP",
  "key43": "583vc7cSXvkyUefK8fztTcABCXgJfiY8hicaHZX2xcyZ76zHvQRF6hTg7dC5cZWEDcHMvWGRDmDqycfnbsWWs9eE",
  "key44": "2Dcidot9Ds9ptVYfLvnVPQs3S7anVXysu7KQGsfdKxnmjLvNsYEbkvXn79Uu6akGDEyPCUDExjiTcfLtoNwzpaRN"
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
