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
    "SRndo2Mie7tcTd1Ev9a5HTMKFFK8ngTiKVb1W6aJ2rKxu5YDZc2DzFLKC8UPLDoCeA4xqzLgMtFg1K59aRsqzJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v656jPyKdDrnK4aCzQRoGgRWWBST3F7HrAjXgafXTLybWJou5VRTLQatacB81pPoCqhj3ex7JLMeYbFcRAXreST",
  "key1": "2Lm5aVqiMVdJqrRbUWRgRGv9fi52ptfj4bECZqu4qjZyzTjWyzjBvu2DHNZUoJaF131PMu2gRuresyqcYkeSJBEu",
  "key2": "smwBjo4FmMS2xVkj96P4EftP41Lc9gSQscimjNHHotYvuD7cyPmvBWv3MFHrz6raFgmTCohvAbY1fsJtEK5oCs4",
  "key3": "4jWymiNhtNTR9AmQrRkGxfrfr7YiUxPCU7xNGr8qYVQhVKcr6LHx9RRV19b8V66RVczQ92G2XiwAYAiC6qdCLuu6",
  "key4": "5tri2KVHAgZUMejKSXfWvUpZzLKYLeqobF1bieqwcjWveVJWtwCSZGH44gZYvAALdzGPSCVndxs7YHU1pf9ccU8T",
  "key5": "tPrTHACz7gvqq1XXsrvtPv64jNsTueNTbpTyqJSSgQSvDV19xBEgNNbWUKTaqaidYLFbbEb7sWeULV8mKToQyMU",
  "key6": "32ouMDCNhqFcHhfKTETtASQSTMG657ECf5bjHfsnNcT1WuKg2sNxLAe2EEsfKQ8RpQehF3KdHwnWFuzyYQToguaW",
  "key7": "71sioEimonWsUehaBrS5BAkPLa4UA5vKrBsCEZVtMnnLbL9pUxSBS9gnHDgD2nzD3mVW7EVXQSXfvdJML4V6zF4",
  "key8": "3feMDhq8hkPftg5JdaWtMiBQhTnjj51rzbrEATA9kFuZugmvL37N38U2WwUkuk5ttRPYqP2WJtCPcLMPY2DSqAJ4",
  "key9": "2Jy4RYuwKCNazPMK7JkoZDLiC4gxLKgNcUzyZhQEAb3bEdkcq1rTsPjGqXYg2LqrEXY6h6WtgkYhWcDHiwLtTDCZ",
  "key10": "46PeSYxfPzPofW3B8z7UikGYDtTFr4zpNcmUTRBoeQu156AEpqojGn1rpRxfy982Q7qvRTKtZ1rzxtgUSnAneMki",
  "key11": "3DARxmnvZUhGSjtdpPhwVdt6LoceBKfNw7Y19tBVSu3pr4HVBNUSy81ePhVeHo2TULz4m3as3pL8DJLB5nKErnxr",
  "key12": "3FZP3ARtVEfhQWP1UAATNVqdjPqPyk67djQTrnkRKsgqgUkeyKmqSDGMWtai73dPtC7P9gZcyjfpNzVWo2HDJ29z",
  "key13": "27Zyf99DeaSt3giUof4N9GF2HwCD9rph1UVp147USmpJhbvbMxa5corjmEtPep4R154QtXTp26gHGWPXoCdVBDVG",
  "key14": "5Ak6YrsYteLbopKbFx14XuZsvxb168TCU8cy3c2Z15SpiiUi8rtmvt1i1jdr8LwHpm1UiAqXVDCV2RbD6wL57A35",
  "key15": "2ATY7QnBVCTTr16WMWPDn1iyEjyZyNfWNJ9ao9jKv6GBFiN8zrkn1Wrphd8ZMidRkTwvdgLhnFXUWdLirXAeC8Nz",
  "key16": "2mCpemNicyRnrQ6EtZPcG8M9V2fhzndSmo7Frdh2PUUhDwHw5uuxSomaU1VZH3JK9tQr5bDiySptoqECX5LzgZVg",
  "key17": "5ddeN4epik2JxrCjwWwBTQkVjgTVFk7ChwVACjpv7VPHU5YxJ86hFW2SyAy4cT2V9uZh7VkEtoRpCWqethReR5Pn",
  "key18": "na6L5ULe4FJ8hoxERnibBx1CQj1MmZHYbVPpdHAv8daBgg3sTTwD4U5n8fZZfosNftH5mmYBGcF2Cvm5SPpJVKN",
  "key19": "3wJYfgpxDMfW3qctNQC13pe42e6gs137vCseBkQ5vJZguHib9Kh1hgY2V1GD3VEXKc7Y8tqstfYHhRp8SXxX7D7F",
  "key20": "3zP17AjWazATdZsYfRmC9U247d5vqmBoSHZfGbCWSxjmwJTtUwNCHs9KyR21yaGFReriSjpHn58YvSHmdPQMKZdP",
  "key21": "26fQtsvB6GE9ySfDaGtyFd1oC8wJfiFfkF7mSsuY95jYLxgyhNLdfjkNMcv6Abgrm3LpD2DsmaYAzx9cShgHiWPu",
  "key22": "3LBn4FUsP77VfQwwdNtB5Xj1Cb2fs7nNkV7ieAVh7uVin3boEetH2kVvQ75H6CsGdEyjKCq4YEYPnLqh7WtXuTMY",
  "key23": "3hcZuHNdNG56xLvZ8uupoTfTu5NKXFnBiKQxWcujAxLvesXtMD88ZbamNefda8MzbiLJ8ixjqydsZ1ABfRj8LM25",
  "key24": "4ugMA9gqter8PmVGdtzS6pTfMwuYSPj6kh5grhtt8vES3m54hUteQHF12CsEoT11UW2vSuc3SMevLMFVeNaaPrjj",
  "key25": "5zM6hj6tyh5UKj3wYbRt3hfrKuzysQorDjSJ4d4xCsQWHyem6ZJAZ4DehzgDMyi63vQGxAGjdQJEUjUwUuP4SpND",
  "key26": "nE4eZAusmQfR3Ut8DunBeqoUCJvxDfxv5JES6ZdLskMmDFC7Hgk7haN9ic3iBekpRmdhCjhJGqEBcPktzjPVG8R",
  "key27": "4BHmXeUpiEqhZrNE1rLcmaFTrVRNiNDYNSrYeAoqU4LeEi5QkJXWJVK2TxmoQMDKx58gGsoAyK7BfXnPzc3unXaq",
  "key28": "bg47VgSurxpXSHRkQSYezWADJAsSWwtbUuQQNGzfpTUoeJVhBjmVbLNXkcTXvGSQbnNqYWGRq6oQhDrBN4JN8u2",
  "key29": "5u4nAgQJiE3R3cd24htLWgUQxDK3yg5KE6jxZv4MjtdjBx1haL3a7wjz1jxV9rjLXjM2kQEM3PtN5wNnfCy6c2nQ",
  "key30": "CXLctXhjVmbKnWS4ji9pMTvPdNJDghZVTX6cL3ugrud9GifXwhS1sxYJonSwLD9UKLfw6AAzhh6gWdxKjhUdwLF",
  "key31": "1zpRv9zqpzhRkPz5afrFjUJQy9RZFThKLBKCHmv2rZ93XQZ7og2wn4dxFRRnft3ArMLq8iPymJK1oaVQsbcTsnr",
  "key32": "2P5P3XLQNecXkCEdNFnphHZqgLEYbtmPAUvY38omrbWepChv6AvR4P1v4oThUCc55uYTMTYX8UcXNfKbFTRouoLx",
  "key33": "3QhxWPyWEjNbohJwhG2CwXk5aZJNePqwFQJMo7XzHfKT6aD6A8jPybb2W3T7Kv3HAW8v2xoNmaekDQAKzNjSP6FP",
  "key34": "3nBanE1yvBfmi6pw8mZkUXYibVWj4LHbxkaxnJ5b8xKk7xb7xvAsrUB4EVdWAfaeGWx9uxvecsuYHQNVdLxxhcDH",
  "key35": "2bwHz8SZA6tApuoEWJWtZ8eUnMM3LCdrwZfzuJ56wwH8KEAZcEgFCk9VDLPSRmPNzVGiSuSHbGycLTPNRzjCjd8T",
  "key36": "32NXpa162F38P9GwxsFoCPs1dvnLPksnrWzNbg1KQKyXsArveauB5Cit7saeWPpv7WuNmFWa8J9QktRfjdkJvEs",
  "key37": "21cNM694CU6P6RX8HYojM6VjdjF3hLszjQ4zi2xs9VssZRT2sHedQx7DZhqTzuEXgkX22zzDP8Ar61oKkRVFiVmz"
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
