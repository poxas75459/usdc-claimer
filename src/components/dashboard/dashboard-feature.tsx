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
    "C8jz6xeHceC5qbPkRsZY7Z33aMwMjRZdH4nesHJCTsJ8rTgQxYzm81e1AMXKBMn6mkhFxrHfiE3W8GZn5zeHsb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EabvST7ruCC3JoyoNNCXbFcszmT6qiCbPan2fmN7Fxodf87vuFUNZzfqziUJUSV6jZHKkUg5xYCXHAok5ZhEtVx",
  "key1": "5UrnVjCvYfXrWV4gysYH5CeJ6pzWVNm2wwREpqqpvjPdYiKqPhoV4JAsNNhMKedXBBbCD45DATUbqUrUPRtpj93s",
  "key2": "3k2Ln2VUnEGxURFYb4SZZnyKgBUW7NDTgcHBEiMnpG1vav8BPwxFB28Vye3iAgEud5EUKDYbfRvvVsxcjs8QXFMD",
  "key3": "qcn3Yg5vD1DJcinGB87QP7T9ErHZBwomN6uSjg9qbJb1SaumHMPXHghKYkGnw2FhU1WXvd24cqKFxrT6PWeJQCr",
  "key4": "3LqpcdEiXtQuP28ujtgwCeBLUtK4AzVcghQvNtz5XY5AMyNFcrswa7zyUn1phx8QmhBbTXLVowSS2GKWYJX4hqmV",
  "key5": "1SJ79S3oJ9jKeTCUdyKuKvoWSdevmDPEc1qZ5jx1MJaxvHFjUd9x4PMndyNtbKT1MJ7BY6DPUWjtxfCRbGtLtRY",
  "key6": "5ZKdWkuzEKDD6SY35GRVe34zHGWp4hv1iknvuDaCzbnZ6cQuQXZQr9ggMeS3c59CuXPAybx6ryJCkcdmi49VcMUD",
  "key7": "5GRdResqz5Qw26Di4oAWBqnwsYuWzNBgwqQ7VQYhZqJYjap5STiFqQhDmYMEALaBNeT1RBRG57GviJoi3q6DYQcG",
  "key8": "5HLTFNcGFcKna86aXzAkDVDU546H84KS6p3aLsEJqbrP2M1zvUkDXotRbZzZAgZ2qk5xSeX7yqckr3S6wQqMb43",
  "key9": "67HxibNSpEV7ram9qWUnsEJpZMbDUt6158UHLfhhoSVXQASpzNan3thwPj4GsyehJZzaLinewD4W3JFQ4vYfH77x",
  "key10": "maQnXQqJP4fRaAxGritaqS3aMn7EYQFL4zgEJDsocfKbMQP1oZwFpNyYsmB5GNnZkCUiCLmcK7jHvnUPzrcTdNL",
  "key11": "fPrQHZafqsgTrkZvAcQjy8DEpgYLxM2Pk9bprm58YNpZoE87BH9jconaRyACm2RERTGMFD4iXXrM1pctFqFfhK8",
  "key12": "qvWSgdZpRzfE13dCPrnriBWVN1TovppfXVguJWb3ok4ujZ17bMNs4TmpSEWFyF2xVg1awXFheufXiPMBKmixV6J",
  "key13": "2SJbhZhxSv9YdS5SKsQVxzjbkMzTCNFzjQSoTNEDjyGAk5H9pfo5UShaUcQScEq6xETK1ZevVDrKm2KbLKUxUpQz",
  "key14": "2DcXXHVCocc4LG8GrbRhxgy5d27SbceChPc8rNybDiZrzWbkGbu3oPqjB5r59XrPGENcUHZRviC6LG1V3mkXMCJu",
  "key15": "28uu2xAKpfSrQvh3LBT1SUvddLYC4PJtCMdCFMruGh7AVqBZYZhRRdSNv5GsdxbkZLkA4NLPd5aSBJ1pH9ZwkK2c",
  "key16": "5Da6iSznQBAp83QY5D1FWYvbsPsY2DYCxS9pyiqx1WJLpxmDDX2NPuQJuNdVmgF7UKZzYcs3Ecinzx5Nxandy3zK",
  "key17": "3427pxHYyat1YcUiCWAyYd6qm5HQyTCwZktiEvMQrF4Q4WFwSgdmrSHyeZQiGgWeXuRvC86Q64ncHDCcwL4kNcwM",
  "key18": "2bTvhrXy4sMRKNzAh2mBDDUAYq5j2EafKpMpN73XGKcSwx94kSRVZAn4KiRCoLkvtNkva7M3MCK1eTK6ugNh3m7f",
  "key19": "55suq2pr5pjBJ2AsehJRbeH5UGjR8ZJYSV6dRYnXug2Y3zZiSLJ54R27kE2hfWuXNxUTHRzJWyQ6ckjJ1Pgj5LLi",
  "key20": "5fYWBSw1Kv9eZZnadfT2pgrfzEqQB7bbw5jWLUVHSoD1URHH46hQQ42vpmN6dbfQjGGnUj9WbnfoYxvXLjJUPGqV",
  "key21": "2cJi1LytZEZgfmminUGKo2eEScG7m4PScDwjyptxdutadY48gtpFKgTGAQ8QbFPBz7FxxVL63gUowZuoNAYjeLHd",
  "key22": "3WANE2bqXG9KtJK6d3eSNk1SxNNWgbozy6EVb4QmDoXthPfSe3oAPV3EY7tCecyzRjxfGxcgC6Xd5Q6J9Ri6sSvu",
  "key23": "3aJ21p7PFnWMsZMXSq4iMhRKbi6DJDLxb6tHfEwW5rvDAUwvJyj1Qq4tqntyKWDu9SmQvtVVGnWKbLhLx9oJYH4S",
  "key24": "5jyg2ftDtfM1mNjV5jRkfkCBrRgvPYuHaddYkYweGVjFfYyKNNhyNUfB45dxvSzcd13YgaAmt8EKtpWBKMG6A5c8",
  "key25": "2bAZv4ZhFhKQthmLptEy5QfDeXGqoVHBa1BCBUPKg9a7kR8jyYj6rjYNstRshxNEfj9B4Qg1Puf2J3iB7Fkdvqto",
  "key26": "3gNpzebqTgu58KiWVRZy15uVqxUSVEFv9a6UYR5P81DYhBbMEHdQgLRMxLygnPuDfiDr7UKmKcSAPkxxNsKLRywS",
  "key27": "2uNLQMKfgNKAiHV2ueuFthsPXznYueE2uSJPajsHaisZBjGctjAf15tQfjwDp66ynRWKZuKhbBXSZ4yET5SUZxkM",
  "key28": "43yZY5x6GcL1uvjesn8gcLBey2GujMWVXfgdm8TPAuEaTDZqrcStmR8jSrC91wMwdZXkUfF9heYyipGH4v7w45SS",
  "key29": "22ea2cRmkq9uPpP8FUyzqRQtHYiwLQgsYhb61ybtRLJmiWqQHv6x2t9MfoBVDFRWaTgY4keARvWzmZmMP5DRWTkZ",
  "key30": "4T3MqEank2CYun6QS93CwDuzGhdnGJdA33TgXXKqp3WFsfgVRBMCv4kT4u8Ev5s4eTU7JC9HqJUVPNPdW2XCiPup",
  "key31": "4tsQeADZM1d2ngNERQiSAZQVoiM3q7AxMzfkZH868NzRRgZBT3PeJwdMc8MCo5C5y6ajTeEDKAG2EayhwwqKgQcY",
  "key32": "2T4NFscuKrFp5TsHruMtjm1ftRD2CB7BijDHCg4RzoaoyoG7yq2JEDXBvcaJJSioMnaS3Jmt5m2m7xyhCxc4CR8f",
  "key33": "3GXdQMZ7mh6igZR2cigpWQuP4Y7Sy8q7ftu56pyuJmTExrP4SxmujS8gZNjyHTy353FgkS9CCik3DPUMTftn3pcy",
  "key34": "NPjeySMpgJj7HZgs85c52GjevysbDqJYhMh8MiNfUaakR9VXwqQzNBPcCytEExUb1vPso3WKT8JEGj6QNnrPVSi"
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
