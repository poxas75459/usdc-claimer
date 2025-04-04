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
    "5kTk97v5ykSzwgEfx7avMKyq6H2tjMuw59WQCobqnBTqyteCbq8X9e18YKKxN8r1LM1S2Lfc4znhfE3xwEbScSdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zuj1ZVpFiKA4az6B5ptBs2nJbtbVEaFPBKsj3LEG5P9u5YxnvKwW36yW5oSe1MEiXh4T1vxB5F1yS6PfYUyUcwp",
  "key1": "ZfqsgTdVmEVsaM1JMgrS1MBNzBzUC7vS28PTWAp6fm9u9WTa7axrKxA6hzr9UwfYuiQHKjpvTHhnUkqTPq2xn2U",
  "key2": "nZm4NeDvpyUHcmkSBwHP5UKEbQTNhtGpwbwQGEryvRcnYzZisdQ4xFLGmTSQfSuhRUWiSn8ftwXbqNyfBQdDeU9",
  "key3": "c4rbGwQ7UQx8wEkJcuCA4toW2x3QmoksCxs1wZmS46ZKcC7w7La9wsM1TokzuPM3FJnNNZ2E1dynZhHG23dP1Av",
  "key4": "SharT6Hqv7dgy7tBoHd2xszTnKWeUXtuRLzMWWpdc3g8rsBtyBKJKzDbydkAX981t4Wb5aTkKediTFofSpHPYXg",
  "key5": "3kJNerJioYfPGuNhajc81sy9xbGpy3U3GF5Y9fTrDSGNJ8SJu97tTrGQEkJCBNL1xyCdLnCBNMNas5aiEEFBSjE6",
  "key6": "3rGYQoEurFXn1DXrZpHsxcnJkqVx36CgzWk5guAja1j2XeyQWsgWWRWZURzJVJNxedWKHT1WbF2E1EdCKHx9qCqa",
  "key7": "3LfhELXE6VweRCeFDDXVo44Jh6YWNfpbsAFAzwAnxLSvxcSjiVd1gAYSCZHFotkgUxqfVoQLUXVWToAkj76kLYXT",
  "key8": "63NxZFLBC2eZ7EvtfiZBa1qfqsbNszaRh3b1rrsP1zEqydTiQARhd757fY5DdSQnini7X2sKTUjqZMo5L6szcx42",
  "key9": "2zdxVA9Jg3SBe1JwM2mZTxUBiCiNEHE1eUTgG3gVSrCKW435J87aoeFnhyAPW47zzxCwakZPyDwfvcxqH4KdWNLa",
  "key10": "3dFXskzTd1rV6joZ7LxLDABBGLm6Zk312H3kbbLP9sFgmUiAUU1x1nGNRGCqNMDZLD8ZGSvwP3yx59mtAsAJbxs2",
  "key11": "djbmd8dymatPmJfcU8N8X91RXCozADohJ4PP8xUNSWbPP2gmSJfYvzQk9h86L7JiARvewniMpBZDSE5KKUbxNzt",
  "key12": "chcueB5HPRBY2wvTDGjMnfFpaU9huNp1WHPb4JZhs47PgpeP55PLUZQ5hEJ3xn353Mdzxn6WEYjDZPUYzkgJA1L",
  "key13": "34wS6Wf3vRAdLj3SJyGR5XQuWBjQxMs8py4qrWZNSfUpLkoBGo5KBRohmQPdASQ8boKj6p1mLGUMHM9LtHpMHiGV",
  "key14": "5MMR7A9A1aZKpeUiSvy4Mqq2K1HcLjfWNYmE1cLB4V3G191Unm9GJ87w6F2sd7LSfQxe1zeKj1drrE4jwQ5jFwiA",
  "key15": "5wT1xkuYey8ct3pyTuqV6JdD7JcmiMGVoPXEcDGgnWKMoSMANM7PrYq5kjwY5RgzwAp7f4XnLyk3Z6gpx3YpNgZR",
  "key16": "SWMGQ92xKv1BRZ5NWyahaiihEcg4kMs3Yn6wUuC4UJk8ckxNg7d2B6gb6sL6eaUiKhY1TKnFywWk6DxdLNM4K5e",
  "key17": "2nkf12XXx5zAZeXKQ1niy5mdxxjw7dsgeBvCG4KDXLr2W7rt2HDUxLcSeZNA9pNf7d9Lsz3uY8ANmdk9tVVpeqn",
  "key18": "4XgJNQ45AZDs8cVcipPXtJj8FLT9g26SVNT6uTY5jLan3NErRC3jUAGv4kiw8e5dWJQb1VSv94rzK7n7LbSK7ZH2",
  "key19": "2RZG9QwpXPxMQZaVmeg15ypf4jt5DPerXCeGffMdMNPpqBpQP6D5oTE6oHMrrTnKFDdTyo4UEDXMmTaepLG5K2jj",
  "key20": "fJohRgKLbwkCL4zXouQXtgkcdpuAgJx2Kix2CgFyDNabg5M2U4bovwzkJA6ijDmbPNvuPjp6xB7TQLg1zsHgP6A",
  "key21": "57hUGC4Rb6JYuA1VoTFLNAmF8oyDAmg8LJQMGZ4js7Q7DvhegkesXgc3sAQXdW5M8SptyFbuNQuKVQ3sdSkXjJj4",
  "key22": "5SbFbpX6NMSd5VVY9s39FpKEbsrwNQoxojNe1qYpjQDoLHh9jvvqaRZ2aeHpDvicyxNdxUYkL27fgPeiH4hoG8DP",
  "key23": "4ZEvQ5REkZWaZ9Fug34EarRp4TpRdDpTiswr57pHpFZRovNczQ6K2UrPbR7u4kWGT7YSzUQ1drq8A3KJmd5YgZtR",
  "key24": "44xD7H48oHYrMWZhAFTPu9WkewrfWqb42CRKx68JroPcymqSNMEpK36iS9SUjMKkPUmafz1eQr8pBrdSXjYoeuHx",
  "key25": "27ALKgfiPbqSLdUK9nvx3eNFgPfKPBrMZqPcsP5tqF6E3QbkXhZtqGmCKCEewr7dyqSrK1YgutKHzkcSKuFBo6ti",
  "key26": "yfsJmkJxSV6meQHfFJYDvr41x6t5uZrzhTPSAE9d9hG57DKTw7B592gPuhER8Z6m91HgrqvrZ84cWsNchXccY8y",
  "key27": "4hcUgbttAMhLpWrRiHXSQ222omYHTj9hNn98rVKvN7PyQQjcV59bUcgcCmYJLeVqZS43cydPTUMHhdkmJVqkstxR",
  "key28": "57xU3HXnF6WEYbupwDyL5CQ2hMaCFyaZTzpH6GCaXTt62rfYichLamxBxUGMWjEjJEg2b5gy5a5w1E9MZBtwaZ2w",
  "key29": "2AWwXr4MSXUfmTLpp1Wpx7dQRseFtCorCoFz4rfV2t7Bhys9Ug7DMtcrBNS1Vbe1LbYT7aNUC13UgvBHCvjC6ZhY",
  "key30": "41xgcuA8UNpS5yyaNUP1LfViQXAV1eWe2fsVGCMKxnBdkUVj4VNK8UevXwqHEFhEjZVamLuxjjNhvKLx4dpeMziS",
  "key31": "3zGtfUbF1BNwfu3tkiLq2kPpLZwbQwRxGKtv8i6mFfyKRP2pKjJpNuQQrQ7v2ah73PG22scBKhZ45BuW8Whogtyi",
  "key32": "4gw2vqP4a1cC61uzEVdvDqJw7CMWX9B6ECDyjuLgZLGj7H45MdeHwtQxMdSC9PgnwRFMvRDwkJ2D9zX7PdrhkoY5",
  "key33": "ZZe468WwENA7Mb4w13aeFqsVdmJ68Jp9N6D5iNXNoyGh7G4FJuiHzM8RrMqEgckbPQsDtTcTVVA6BUdRhKQGuwu",
  "key34": "5ycb48tx6Bx12rYisoTNtb1N78GoE9VuFE6QmyE9N5BMtTE3dSU3aHSzY6VinwZVJHCfkuz1Hrb5aLq6nmAjJTBH",
  "key35": "4Gm5mK8rdSYrQZprBXvn25NZhnkejguUUZQMyRDzpfAEana6kEf8BwGv4b6Np2gGj5Ug7X1WAjsn6TMf45Njt7ih",
  "key36": "2aZvtUvndVTdQqnUtTjVpLuYqyZFAm5UMkaKVmqTQ11aDZScaMhaLcpkk9DArsDw18dhwJTQQc2mSUAMBQjwRBth",
  "key37": "61sWoCSC88bLBsTumFqw22f61hULvLRiaWpDsfezvdqWuSpTRaA5ey4XaNsNa36GGuGTvcvcib1zoyAMMza7PTwk",
  "key38": "Q2jA3fG5ZTZPLPn18gYvg7dth3CkJTNe1vEHEiobkcCeJGZvaWX1JsMyiDbUvGHKZPLWkGtA8wMSHp9hDyiXbDt",
  "key39": "5NLKRo8PTQEUeL4WKTm1FyzsEUCrfUZnmTdDrdncA2WkASKYiKHLsCuAW942sMVbgekTTRVgr1H3Qb3vfjR61XFt",
  "key40": "4yRc9Y6TYTC7y6LuifwJNjdKbdg9cpSFBL9DKZB3SSc3AJQqHG6ZJmGdABo16E9FdEaE7ABR4FNkYUUhkLqw5HFH",
  "key41": "22XG6iFcn81KovcRALzEn27nwwfqaPG84bsjRVvQToZmVkgzNfq3XMNGe4h4osm3RCwcwFxnqeeQCiPrY5gPSXTu",
  "key42": "4twXfM4yLTzWEbyDGLsd9rmKfjQbHSVDisbdVWBD7HVkdpsNxPLFkZsm3vsLsAGghbkK3NKUZrJiJzYhvcpaHWxv",
  "key43": "3L5p3NjgwPxFb7quXfeuZ5w8mZa3eB24nfYkvBYHjQNTZJBFHKUY3xb14rN31BSkMReRR7iRVSRR83r75kPYoBBU",
  "key44": "5LxrdPmbNKUh9B3cQcy1yYj86BWV8xrnHWrJYNyA9DRFAv73BydsDBNzAzTb84XxvkhyaaALbrhVzAL89YMQcAu4"
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
