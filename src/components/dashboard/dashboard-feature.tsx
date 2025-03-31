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
    "5zb6JNHehQapEWj5rvAfQ8c24RxYZ9iyCCZH9kHfbdaPbqRFhXM62Wkvk92gZAhm2uV7hBLUhP8XxuzpL7XKdJgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DPZEh2nxWRrYjNTgY5KNyp9AqBCjo8i1pnonX4xmu7kQXu6wdLQPdrt1xi87vj6HcNAEB8wdRFpx8HCYpAJrbRN",
  "key1": "46AZ7y4BKJwTAQDr3e2cmGomV5ZP8F3a4rDyGbXjNCHecKAgqVrVxhBE5cJ7NnVwG6fKntimZaa4m7G34NnPffVt",
  "key2": "N3SMbhh5Hm5cLR6rxa3NmMbQtLk2x23FuxAdRAheeh5H5SvpuFf2Lg3GjyVRKorEKnw8AcuqJEv4X2GFP6tVxr1",
  "key3": "4uyyjuhH4SquRMmsCBwRe86RFVjR1efGwS8eUzdMkRjMAGssk5FyAPFarA1U8eLqkqfvhZPDb6XEirWkno67EABU",
  "key4": "4tPNR249661iiwoAdptThX5UqE3HJBezgywAq4ScXxqHb2qkzUNSWNeu7eeyhBvVmyjqENAkw7ymhnQGEXi5X2TS",
  "key5": "3hR6KjXpxLk9z9Q95Q9hT2VeYQDqgAaBJ514Bfe1pgcVpfp1otZzNtWt3bsUqkbkmnvuhCUQWrjMAYDWm8haYWje",
  "key6": "42k8jGubpCDR4Nf6n7GfntE6mLKiA2aifCxiBVaj9XaKQ4BteAnRiiUqFK1gdSLVeS5hrwd5PpYhGVXHWGUkcBUj",
  "key7": "5dxBSM5ZDv6dSbk9CrvmCjiminzhEX7UF5xJiyFugxxxSxNfXHTjg6ieCYmyzmiGMruTYDTu4XLDCTUBJLfdXYbv",
  "key8": "3zvVME8gDE3iWscw5Hw4QRyFvC8Lp7aaD321dWMzDC557vYNktz286tHrZaXYKNhFthAbPFCoCN7Wsy6xvqh1rMP",
  "key9": "3wFtMmT6gbDDcQMFzM5Z3vSuFd85LC4gDmLQD1ntYEcQHwx1nVTw6mdTnzWHixhSubhZ4Fg1EfiaNLD6mfh97jPb",
  "key10": "SZJyosPETxpy5SgLb3XJr8uSdmyKExg5grLCVmX5ioC2fC1vWvimHd5JPrw6htzZwMhf3p4xDubciPUGPfQVH53",
  "key11": "5hjM1MHHXeqstSiMUwmg2wQMKVr6FHAWNBboVr6AjqhUhcxxWfuCEdEsKbTbCVoAsvRwyUgkvtuGSDoMaL1auF18",
  "key12": "3Hcj9EFnPb9QLuYireUXtn4zQDEwKXMct7QoyoJEZMDjMiMaRmYtYgU1TG4YuV4ThSX8o3i64Hq6pNsLgcCK9srz",
  "key13": "4twBHsxDfBXLR1GphGECACqjosiAGszU75MPDqxdk7zDkHvQA4Jg6ZpSpAp51p5DFATK9RgWtFsgD7YSdemPmicv",
  "key14": "5mE7cUR2vHxxkZyikefJqLGs8sQgNbABr5WnYDpMt1RKRSjFPXWb8h1JhVDGgF78dq3cbxMC8H1EVYKDphtrGTEz",
  "key15": "2dg3oA9ZrVxReEtKFgb55AULaFAtAEBCaEpaPHfSgPCFBuX4SX1UyPYd6hGCtLL9UcMSNnPJsY78usT7aqPZJFcG",
  "key16": "6DZE6RUZWnBuqx6dRWqcrod8rr23bozMTHJntDZHtE5ukpEoqp7qveaAioVehNhL176gSGSo1HH5TNfjAJ95gZy",
  "key17": "371FCW6jCRzN8KREDMazNkTw5ndbADXBpHgHts3aRXZn7a3eNijCczEXYGe9Y23R5GSmDE3m4BP2S5Wfihp6iPX9",
  "key18": "4G9XwvhoH3Nnti6yYJG4bTUG9kQL1TNgyfr4vCELz7ASjHJxVALCckpekChBRH1SS2kmoRBJREGTYa6NJrhdJjwc",
  "key19": "5Bu9Ngn3YG9et5aRGcozZKiByvMn53vFR1by4GjLnGjh2eT19xkJna4ZUEBaKAhE8CP4zBg1oMWLCQYgEMLdpWxn",
  "key20": "67esTZQHgVGRqpTq4AZjZ1JbiptcPezjmFgGePv7K9xm9iw89xtW3Lq9Tvo8jdJdtSPPHumPCLbq6rKVDr76JBaJ",
  "key21": "2DPUmDxMKC9BH9QSzCMxcq6pMKZS6QARojR5mNj9J4NXpGRCojKgTgg7Qio4agBaKqxWHAQiNm2PYFbKh7pt81WR",
  "key22": "4g3AMqpyxEG6jCw2QoYWKFWAKwKhtwdPWMyHgLPcWrVfHqQFN49qsbTPXYcyFKm1updYMw6NhfRAfREc8LeaYbtL",
  "key23": "2wgzHozJvEzS8ETfPpLkmgGBFoAerGgFJG6etmhwFj7fEjiWHDkbyLtvpPu2QvW3qh9Zv5pzhknWqM2uokKk4URh",
  "key24": "3fTPa9MmdEWuWR1E4YzFhe8MWa4SVUkrWSPasu5NSM5zE5QBj5kbd3MeHtWM7e7zMQG6ZQhUVpUGzjvrNDur52Z4",
  "key25": "3pk1RM9SBnseE5gd7aTJeiPcAhUewxkTRcnzUYbVB6JKtVgrf1ihibbpS686zzAVmwJ2ZyLbuohmvSVWyvqQVr8i",
  "key26": "2ypDeXGzRFZPHMDkPFvtPQktJZCvzZLWF78uJa5pJjrrAag5mB4xAz9csjoBuc38zqdwv9UDb3ZXDiDH1TS6A2MT",
  "key27": "2RGDRm5dSoG5XUTWxvD3Yn9oiqGaxtLiXaK5s3scQcLh94egFeDjP22bEdum2pNcbNic5jadmZ8JdAK91bMCrDMh",
  "key28": "4kPiMAog2Rxnd74a5sQFPGQ6FPenMyM3YtmuTYELw13bQTNoSNqqMbKrkmTs8TnkzvkWNkvj7Pize5T3xpgC3nRf",
  "key29": "4RaTW2qeBUZwvBMGArWDPtPHkFa8hUSaMCec7J7TJzc79kbpGmCmtobrKWhXZKmFQMXEKfoSNpVCP1oxzePhAR4M",
  "key30": "3HBPi9ecpPqV52BtXAEcyBGjptawdCn6qMMdHTsjJFZpo6gGusgZweYxczCSP72oi2Pza9VVAkM6JqZkdAfPcKV",
  "key31": "4fwGqab1oGbsjRtkLEg9udsrzFZzPNL9v6oveDyPhjhz8gby4MdUg9cgbCDCa3ubVYEiwP2VpoUNEACAqmJWdm7d",
  "key32": "3aZ6tKjGQiioGkY3GsCEgodKF7MwXgkkpvKJMTezzQytnJycj7q1x7p3yryr5BXW9TvTSxF2k3Qq1fPWrpAECXpq",
  "key33": "g2ddWKA3FuQw5NuCCwpFRonT1kfaeksBL9jUwgWngouCjupXp6yoHjPXcHZKmr1jyQqmdeBhiGgdmx7QEYaMgKS",
  "key34": "2WFYPd7BS4JgrQcTmC3fPAxRSoMsdKjzLs6J1QqsVkjVy8Ppdqh6K3Jj7yXHw9s9tPgKRks5YQhVhJb6s96M3Gqq",
  "key35": "25QvkbBUe3gt2nKbb8qhdwwNc45zVS6BrgDKY9NPPmWbE4ChFDGtrvz6bsENrfWb6zPW46hkva4LNxkPZAKgfSAw",
  "key36": "56WUBVFXN5xmrsMwxs6nQ142FBQk2HEDjQfruzSVyep1gR7riKLxB5o47GxGNzDmjamZQyx1RxayNbhnLjYBpLUK",
  "key37": "2x1zcCSGbnCtVWuHRLezQJwXHRKFJHp3f5Ud32FmQ9vzLY49u9hmqJUtUPMRYWLcnxxXNQSmyELYbejEBhHTfHYN",
  "key38": "3sR5c7yvhDhsLNEnsJuoBpL35NDXP1dJh7bY3JFuqi3qsDEwY9MafBaZgskTFKPf9tgiEwhQoXet55F633HBdFQc",
  "key39": "52QYsWRwXgrxPeTS5gkaLNUmLWjodGJwp8zka8vnhwAiEqbQt4HmpcweEDBp3SFyrjNLtRYTHeUbeU7vNQAWtmkZ",
  "key40": "3EXVzjy4Xtsxo5o4sMzPYLu7NwzT2Dc3wuS9UscXAQYFJa5V4EpXCSVpbWV4jE3F91MYabor4QcbMiv33Wp9G7i4",
  "key41": "3cbpePevJyuTSrYv9KHtL8KrT3PBKzmH7RgRPEhMvSSV6zmXYDXMkcx15tCGjwwfWknna22xVExj8uV5jjiBkBjv",
  "key42": "3zjMyWZ1HyfKrPRgvJJ5Wwq1nx4mu43nnyncPxakXBGptAKD8QtbSYRnpd1S9yQ5MEYmGR2w2bBAtQYp2cU1smXP",
  "key43": "337i4CubCr8JK7C1tPojFd2VoAAfZfD3xcrFEks747TfHVkQtmEDcTgo8gd7DcpWumJw8jVZyAikxCp9aMobWMyc",
  "key44": "61sv4D2T2ZveHrShzFLjkAzPbKL8Qwf3AxeteqdtsozqKBSdrYMkK8bxDiuhV7aogTmbpr5gmBB5EdMEtPMoSgRc",
  "key45": "3DLYfCpiQhBKxTvnwpd4FUpMTHFLJfExcphzSsAHANRxHVuPCB8rga457gwUCJUeYDvMrFVRjszT5aUHAwDC16NT",
  "key46": "2sQXCJbsqNRFwihi6ZJgLB7suKKixVafEDpF2XyCHZc3HWredAFYgFsWVNPnEXaVhkAWM3qxyshUzXf9gC9oaAFC",
  "key47": "3aLjmWEwB4t1FRBtEowHa3EFLvRLPkdnns6ghehAe6VRuzg6BBChTg18LrzpN38VWEHn2bYM2C6XdzSXC68xRbMJ",
  "key48": "4Q94cFezPZGyX3AVA6BLCGiDsMok9aT8HuRx35SmzZhS36qwh4NYyzpcDASj47D8tU8gSspcFuQNzanyXt9s1rY3"
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
