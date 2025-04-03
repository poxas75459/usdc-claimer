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
    "2ZDfWSQjvDdEpxVBiKR2Aw2pKpe8B2WYCxzKMk5oXFdX44qZKmv7ZAHkxCEeqiXawDnMEubDqo7WUU4aBCng6sWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lao3LgZQZ7EriqereDvsCpRZjDZz5GN9bE6N7etttXgRvBBxdmTJwmxeVjgeNtMyxk4fswJxJBSRE3KA5UAhQ5y",
  "key1": "e6uh9Z9v8g7AwRujqKjB1BUskpPzHpfSbd96z3zSxxkYd2Jtjn1DcHgjkgquEzaXk7ChHPZ65DXZWYBCL5vPaBH",
  "key2": "5TKU3qKLJhs4HKGTy2qst8SxY3brjH6MbdJeA7S6gaFEQ2YfjhHwFdpMrSTCSrCH8RfPxAiR2Lq2vt6au5RsNBfM",
  "key3": "6143GeYMRfUMeacpYJFVAba4g3zC8cVnLi9Wm5QLZwpFPmyBQGdndYf37dDti2bYQxF81Wji4cLKzaYq3jBHz6g9",
  "key4": "2AHLqiNmJ1ixm3jfg6s9pPpWEkr1HwsQpVDbawpntNH8vZqNJvEZYo1C4XRXdi2LzBXBsyacvTwSiRxYJhSc9uJ7",
  "key5": "4cTBmdDvhCSMRoPwPbRxHKNr6uDpzeFeQWMHAY8m8wRoQGpaVQJtPDHHbqDcPoesoNWNWAxq6GneY9mkAMdVy313",
  "key6": "gv9r6LXnSWFxKCVzUpmgDyiZkL5ZHKL1ASUMYoiWdGQS4LJGKGEfa7K71yP99F2byde9bhHayBRpZfDbpb2jqUD",
  "key7": "5rJ1G9Uno7Lmdcy12rcSevSHKQSkP6X9fqvPnWUWekqaNT2mfuShuaCUsrMSA4BxAxibNJigrXRhAkViDvbZV9mo",
  "key8": "5FZQHGRhYyJ8SJXKBGvFh818cuxenvgPCebWGdEkNGPGFKVcbnnCBKp99DpanD6BzcQU8BSsUMSjBQSoimdDEUD5",
  "key9": "4eCvfUMEy3bWxZjJL5r8ykZbQrhJdcwM2egycBn6pKbU9HrVYqn5Hzb5QYqHn1wZYFGUtpis9V8PbGastGXaR7P4",
  "key10": "2vRZT6cX8tLy9RyeZhJ1uNwkjeCdSusyVHnLkYYJFk2QxuRZ1uXxLzUEPZ5ax1ohjupamJ2ddnrQXqGjkZRxfaR8",
  "key11": "3pv1K1Uh9u5dZN9Xmos8Du3JYk4fguoZciGKmwJjqb1uRZiswKiYxJ3ZmLm8i4YyW1daz7jS1JMoEnkkqK2u39VL",
  "key12": "2GLR4BPS9iCoSTQ7ivHo5ECcwHCZLDTpVRiK6kEaYyywtvPyMiEUrSbJ3VPHMMoNHNCJvf8sPBRcECCR3pQjyUNz",
  "key13": "2FVKBdTtg2hDimqescau5QL1xSBZdDad7AzBaRFuzw12FvsFswDAwuNDckSXjBpyoBDC1SiYjRRusJAU9Ygb5Xu2",
  "key14": "WQ3d69hiAXV1VusXjsrcZuxqXFeTdLBGkAGHhD8CZPYsnDQu9FZwHwUvZpjHiHAwd4GQ2Bz8miyVkhY5YorZJyj",
  "key15": "4vARiNKE7QMwi2bZ3tnYSRjpRz4ntWQ8cyjKT3PcPgf9of36EUc5P6xQi15KX7NumgTs33fFeSrDmqrsJCQu9Zpm",
  "key16": "5nVCzbZURgdPWKMPobdnAu4KRpEYs13sdR6wc4DcFdgUwgXgXphS6UcktE3zZwnvbXgtsZvEx5ovvmB172M17GXJ",
  "key17": "eWopvgxwouZwm9wnKhc8DwPChMwVLvGz7gZsm94nk5jasBfNWW7apQi5F3mNpVEKrJnmgGYx1ekMaDmGKH1Zyzo",
  "key18": "3ztYMbtcujXEu8x8JNBSJiYJ9munG5B2JYrdp9YomrrbUbWd4D2Qnr2nQkETLxxH1ZGZUXa5eJFBcs5WKPKN1N91",
  "key19": "vs47n7eaYj3v7RkLJMD5CEdMWPTNoBJpA3PFSjWW8zXiTPBbxxTMd7y1X6PVWxpbjcNHsW4T23NBrWhUHgw5yqc",
  "key20": "3sFcwdfUXm2NXRepAeXbc1n6CEuNHyavFtkVtpmmdMk75VeNg3au6FK1Uu12wRqbEW3ibgeUg5HR9EqAr52wwBCX",
  "key21": "2GCTVw3YgDZnN6dgjw7fPvSTgoXeei4s9Jbrd9Y5csac6S1JhstEUVDD8kuVxr7Z78cojKBrVimVQrZfFsXiMHiU",
  "key22": "5CJEPyR1wvHLVUdydGa3PvZXAGHcAZeCjgTLpNMLziT6p4DSQmiisad37bPXFhWvjRRFhMXETp3n4P7nyBAesRw9",
  "key23": "2JCZuYZM5hFzyE6rksUg8Me1gv7FGPg8Qw8vexaGPdCBG2C2d1B2ogobTMsctV7N6QGpCDKeCWbL1wpbBBzqVgEo",
  "key24": "5rEshts4R1AgHwTkzqYpyDQuxCiG5tobuBQR69zL7gHMkQ6gCDspURNuGe8HLBmwTc9Sq9HLrMzy2kPNvBBumP79",
  "key25": "4yueDeGvxLqRKr3ZU6sQ4m1H5iWkZMV2BZnMhnJ6jgP7LHMoDgTCZvbcZsKeBuRUeYe6BYTdyECDwXTJpXCBeb3R",
  "key26": "36L27ou9CvkYv7JHMucbRVkoM9uqmwoUt94vebLdiu6JjdbhJckTHiYtNVkFbAGYHMXujZCvPC4H1q2qsFGnJV3s",
  "key27": "m5qqDAGu5LfhbrXdcTM5pNHjTJudpRZoTnJsn1MAo8hNRF2pGKou6N266pZT8BMdiFUd7AtiHVM3Q16i9vTdvCr",
  "key28": "4A8f2LZW4ELYrKdkfvMDZBfr312PmKjPbHx4jbd2WgEMfzaogHMbAJxJvRmA9GrcFMoxvbtqBABN45SJ4BJYbV5x",
  "key29": "4T5fnWWsHRWDbHHTGRvPRRuvRTJrp4e7a49dgFKTjkBQBpuEyXRt7WTyo5gBvxXnWAzS4DG7uNGFwSFQVmYenVX4",
  "key30": "2TKpFHJvBjACXzTP6B8h9sk2iybcKQ4Xf9hcZ6sMjSuDnTWfHBNM1UMkS47sihHg9RDZ1BpPpdPGqmxsVNX7GEKf",
  "key31": "3BBi3g3WjUE5pLJAKQAmtdxg7iLwbM9J6sJ9vEBn5nNfKDtNMNCHXXzEWEXL6gekGNJrj2PFbyh41fD7QZ5G8hHz",
  "key32": "4hYs9vrbC6iU7uCZautrShj5pH7mfZXin5xkF3uuTdtL83VtVurqLkv7XrdBeby8J8TXxWKUt6vvVZ5cNakvhWBx",
  "key33": "2LXkxrfFVwpoBYt5iUrrr8yXeCpxxZir5GUspYFqjTrUDEFzjy6eSxGxfxPaay4tnytRvCo2UHXEmUWzMGUWAqCe",
  "key34": "348hfxTdtNqTNPeF3iPgtRsmoFqNGjfpYYrjcjMgQpRCDfzErCRZKkiRh7KtZM7RZ923BvBjqeHg2i9PhjcMTk8u",
  "key35": "2Bt6zJrWzcSHXnG5nqcgiZAu8QextsTHrnpTmznej4PbYi5gt5yq4q15BNy1Q8KMdCU89Nerggqom7FeYwjUoCWN",
  "key36": "3wVS58RtRPSKJzbHxXm5U6k2CZxENPkzHFRaqk11TRvfsei1EVhxQYEuSZ1GDwWyN1uRScHGHRhWcfyXxPCBa4Rb",
  "key37": "2o2pZj5KoBFSAbi8b3pDYUqekb3dBC8nCDW5MRp1FuF8viXxeQxzukK7gA5ZtcFnEuXV8hB2vEoFZj9sBj61VjyM",
  "key38": "3Qmm41AcR57sKKjZZ4cBE5XNDUU3kw45AweEDaeKcEFCpBHuzUzcF8mMtvuYwxMrqkmNkBivnKRbow1qFY1vuga5",
  "key39": "5GtdVYABYxaMFTW9dHKnN9kCCwiUejJ7LtMU7SDjo44hnif89S42nyDpu3fkYvZpgESrazmv1W6tGMdUaEqqdkdh",
  "key40": "5e4QyckEer8Kr2NJWyAiFL9mUnXkyFVzK1NAXeE5L6kGizJ73nLwJPWCvjMBJKJdhfRkQ5ywPNMvzyCP3CLjkCxa",
  "key41": "3u6GeNCCouxAKUQ16ffNH35q9B5M8vN8TqdoquYATS6yCqcpWjkUJhAAcidsjk1qFTyTofZxdaMcBuMWe3VdbFsq"
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
