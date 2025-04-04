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
    "21z1NTsthnLdxHo8qXg7V2BcehL9maiqtWntQbQwJrpQ5i394Jm8kVNNX3kbTdXfsDJ91jC1B95qc7XXam6sEwX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uS7z57EdE7VuQBBTF3NsVLGFhLGBPZWrduWdsndUD2rCpN7ZaTPLo3uGYWksdWxFfs7CtV4EEjbCdtFaBCdXQUr",
  "key1": "3boeFWHkGbG65ZyV7WBXpb2Ly4D1NTUmi7jZtAGyBjKwDrUB3tPrmUd2fkWEqETo6seAmj1qUjcmFfFspHpUP9Cp",
  "key2": "37EodBDyacgWm4hgpga8GZ5BEMxNrLzuYaUoeJ1fm9YUgpxFz3iMtWD6sR4Ppr621bgtUmyAVjAtLgXyXLdtuZZa",
  "key3": "5G12zh5yxTRvV7NPJnEBEjwY5zTbbTteo5hPZ66vPsBZADGo7AN5rA2pHXbCXSpLAD7Z7q8BQ8f28JQGTN6Cr33D",
  "key4": "5qvvXAQ6qP1pNDkwF5apsoaqL7BWsMEVJS9LHWxtd71LbniRMsP7UpX7SmymXiPsktFEFdchJAcwXyyTH5rFebL1",
  "key5": "5yCjQR3L2W11FBKHXAUiGhqruXdSVTMn5xkbYPrBPH12mDPkaxfZoX9n8WvjKpZgTf1DHYGHMETebrTTi4aXU4ps",
  "key6": "DjTZHiZ38WLmrzpHPFhey1igAkXbwzCi3TEjoeH4REM7QXz2Sv61DUKPuwd9NdqnaV3o2BfSp1f5iZLTQ2iR9hP",
  "key7": "2jfghwErRiJXrzbXTwpG8WDEmRmZUTzXXSKRAX9mKzFBUh1hDbbG7GFiJEzqtTtetb8Cqp3yFAQVfiBrRUDrZrZD",
  "key8": "2K6QpY3kuv9ChM3taXaR8dguZ24MwiGKbAQUCx46e1PzYorJXDtSSiKpT7NZvrZR8yiWDUNpXwfrPqvMDZGSe7yf",
  "key9": "61pgpUwjQd9KUvMhf67oJMfF8jPXxSp2Hya3sTx42fcy12mSTGm9gQsaNojEGUQM42T7o38xy5EgjDmLFjXr2PP1",
  "key10": "56a6exKGWmz8MR9U4VUhsiKmTBQxbr7Ltfc6q6EZvLeQrzLsP8bH7CtnhfqSu36zpGiPxNUinL6E6YmNhRF3Szuq",
  "key11": "5wHAHpnQ63faoibPFRro7eKDBJEMW3aH6erkqVWKLBRXU2qC5KvnFVkSRyNMi6UAjHzgMyj6sEsBGKLBsgQ4SnjR",
  "key12": "5ieqyMTi2yhYHDJmpLeVzUUrh2WEHyT7aohDNpCjUSGoEJLidXHJydscpxyzrG2zWvtTjWZtDSNY36UCom95Ngv7",
  "key13": "4GzWrjSuspKCcuoahSzKG9KpKkRpt2gYchDZGbzqR1PcFbvrSq3iWJXpKDQ7myyomPz62tHcGWxKwzuQoVcuUATf",
  "key14": "4BZ9xJh9F1oEFGriYRoDVqFJQPgyumuNQTxMyDxamaX8j5WjcdiQwnjKtkqP4jk3MhnJAcpgqDucEYqCjnGJ4T7X",
  "key15": "TJA6Z2hAoF5YuxicULni4XQvFUFm3FzzquR34MSQzMCSyn3TknSwmdb6rovMdrBGHF8xZ6wD4Y47iT9inzZn7kY",
  "key16": "51qhtwkCvCnWajVucEa4LszKAguuMt8HVi37uvbqWztUVbBE9GjBY4ifK5WTQpA7fQqWAceuxCPcr7yJRtQTkVFc",
  "key17": "2iWzzFJf27dmd4ShQBymqeDrHpDiWShJsyhT3DU6dqDaJanp28LeJqJp7N395EqMfQW714MEnCxRPt7Ben7m6sWt",
  "key18": "2wMGo8y8TZTZ3USvSmygCGhPxzgnJAs8y6KeR5PYjrQ3jVdZ5PCXZc1rHvoVQTHmPPJFUV2gh4KPVk489HnxawDZ",
  "key19": "3AuA2yCRpRJcgQWKpwjYQ85YCMf3FPvV2CVUVVLryzhYse1nD4sAXZa8qM47QSzRFgSumqPtgnbCjF1pb7tDr6Sg",
  "key20": "khR11zA6bKiGC3PyteM8b5tfeZexhLyuttFtxsrscmHwXj291s4ttL3d35zTkhTJH3nVk8nALFjvrZo7ZJK4QnV",
  "key21": "2FCFpUynjhXkhEuUZFEuBzLeChfN9PdAzho98EDo46prpTPTi6KT2XY4PCP4CWPUgBmqRH1xq3z29kB6DodbPukL",
  "key22": "5tyWcgAspNvopd8YXyD7WUFWmgfMuLibJw5zmfZGRpQsrXfCHVMuiqARDDkkT7g5YeuBPj2fVAMJFceWyPu4E3nv",
  "key23": "4KRJNiSZoy9artzDwpghuBNPk5HP8JkcFaa7MU29U4h9ip18eo9JUjYpfU426Aae866ZDs7s7EuBpxBqv8dmsHR4",
  "key24": "3BJ3aTS8vwpEEqA5beTnbwPHm6q7CnhAg3hnnYSoNfM9a2K4ajNNf9671wrLXZR4Cpv4bErQTQNxUzmkN6AR6nud",
  "key25": "2w54bqLjBXQUxm5MNt6vPtcNQdMBUrbBPcKU3nwEhPsi87uFTnEPde8XBKTt8m4f8DZXyaBmtF1fM9smtnNpQD4S",
  "key26": "4aKberypbUB2UbEdbDegEiCDhkwzUmPBHqoaZ7755MMN6timqLEVQQs6KPE2yLGzgvsdQB3Vfv9zS7NDpCMoD6zM",
  "key27": "2r2NW5k6xo2rMRkPiHjxpPfprqAPuwhJYT8n4KH3r8aMeFyUvvmws8j4XszsvYtdoaAMfxdu78xW1H59CEPtn1AG",
  "key28": "WcRkVP6yw5iRBGLQBfsU5cLjk6kxxXGEXWvGJZ9AfYZNPPRYJmvqm945ZbgQ6XqSsyonFGZfB5xsM46E3BHKrYb",
  "key29": "61P7qedZmsnbPN5eTurXXKv5Ff9c9fv1n23Yg8jezBb8LJC5ev7jvbhaK9WofUSgKE1LcN2iHeorCJjUafGuQrj2",
  "key30": "3z8wC9TocqD2vdP6m82PptZFfCxPyPHYyGye6bALZ8mGiCe3NFTkeHqxgDG4cBqFZNkiV1SXedD358KLmFe7XrJC",
  "key31": "47hpFHFmTUeeroLNBYstWdiqurFJ4BxBfkpHDNgCbis8DZJQhJFJRKaRvgzBHqygnmj1sELanSQWKiXbQsCVfmtX",
  "key32": "5f3nUAsnm9ff4FUahcXQC7NZptbfkno4KAXkVPwUhsZLx7UAvLzGVK46iMJgTKoasXQGkJnsL2xXh8HNS3ua1tYb",
  "key33": "3G2gZf5Bxdoph4mRydGVuSgZuqydJAwC5R2w9W7eBbN6XUqU31RHkjAd2goJg4wTCDXa6e3WKS87agGFb52vvmnp",
  "key34": "4JRt9MGrKkXmUtfsYekQkr39rUddXbJk77QR2Epkd1WMDu8VkSqkSipa6e5YvAXNardijpie5MAqnD894APU2c8w",
  "key35": "3Zb4EP1FHmmEbrXUd79XDcTbQB3QskBKsFCPZAtsUWPrxkcfHZiAaSUkMeAqTKB3Yg1um4Fi6hPetLnhugNF9kWU",
  "key36": "2Q67XteCswXgLx26kYyBh85gi1Kda7uWYd5yk2qJdy5iJWXz53iUGz9EnMJhdYtz6jjbUmPoPEEi1j6qV8xbowH7",
  "key37": "2h6PeavFAtLpMGx1dkBpmzBjs7t4HpwGm6bjDd9vqZuLHnm8EyhyC6o2an4J7wRekgvH2YMub3yvamnsMbeJAqhj",
  "key38": "5MYBoDLPPN8beaM4KELwbB8vVGHP9cLCY522wdigJdPzDp9wRWqPPJva1K3TkybeNXgvgEqX3qkB4H2p5n6tFgzq",
  "key39": "4msx9aa3bRoE2Yr1e7RkNhaSWtCGpTtjJvrzg1g2mEG2yVQCt2RfBcLRJTrDUXpJyT3JCjbYK3X2mgNTnekVTLnX",
  "key40": "qjgTj6fXE7bhJCP39UMVUe9K8ebGMiuaEg2BMzn6QemPPpZbhKwBfpmAMPQjkkP64o6EiNMc3DUCJdw2uWMAP8S",
  "key41": "cKR2j98CyRTWfW4DUus8EMsvGQXJa5taJBtv7vvDpnB7vZ26zhoeVEdAxRmrmhjsmNChYcouZuXQRVu1CyAjxwJ"
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
