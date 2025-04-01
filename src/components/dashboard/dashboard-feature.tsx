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
    "3MSCyJ2z6Dd6wZ5e8NYH3ECBM849eZZLyJWMw2G4csjhTFzRmqEDJ3aaHoij5yE16bVfzbUtoXXFWQes9W6BMYKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w5QqN3Pc7TMbbim7wa1KqjcZh9LpWoDPBNU6F19wgW8QwdCo9MM7gYLPD32EyRe5DLkaHpX3fc5KQcrJSfrDvr",
  "key1": "zridQ7EQYj9LBFtrXbNXg7ksEm6oXMHzbe4HFtZ4GBaiT8GXHToAFVs6jxfsnETb4FoAfEcBNaBnkCc9gU5Zr8z",
  "key2": "52oYjSsXwWGgLyx4CRFif4eaQnPwoAKwbQyseuq6oafWu3bKvCKavVFgGA4FXoB9si9aS6xQLLPbk3bJ1Ewcr46Q",
  "key3": "2mQjRYzYgNeVKhQA3KuEufbximS4RTDvYRRCXKiV4Bggi42iVHLndGsNPjJzk5mNUGpDpz3hcBAu9TFM7fVYgUB8",
  "key4": "2uPF5qnRRK6pNr5FnWzPjXwXCzPJMfE1YUihsBGzhUWXModYSnMyDCKcLRerfx6CVmPijzSKEa7ZqVs5RWf9gHoF",
  "key5": "3BZ5ppHRrx1aTQHTqaAp72cpHtSwgDSmvVanVDhnpyxjRX3LkQcsAcL5rV52pqgh2SCkBhXKyDeHUtXEPFS96VNS",
  "key6": "3ewMdi5sK66iGsRvusht8afvRkzc8vJ4qhNmW49sdqojhT88BGgydytQYK1Ugei8eeP6fphGqxyoZJaxWCLu9Jpy",
  "key7": "621TcByqs8LTwbq5NPVcqjjdkNq7FVaAx31TR6cBTC6f3xbUcgePffr92qZtAwLcxn3owZtiLFPFgcY3jhLrv4rY",
  "key8": "2pd7Uvveum9J69iX26kSbHsmDiui5Gvu9r7ZtgMYGrR2vw2LwEpnB6Wa6Kx8DjgdsVaVrvm8odqLk6EtcoQXqfKV",
  "key9": "4KdKtS8hhppd5hKwUvb4YFRhpM6F28eWRdqkq6MuAs35dXzaTGtk8zJYhaC9vELEnyCU9JCt5zEQxe1kBNLw2r6k",
  "key10": "2KWkqKV8BeVSaNXmcZzqKcKbgKPEDXN3zrdXhU29dsTwip2vxYS9g9usnZ8mg38bcqULALJMt4hA5PoGBMT7SC2B",
  "key11": "74hTMLQLytoNL2RLLksYrqyrEWX3DbBSXKE8U9oqM4XKJvcgj26Y4XQtuMmz1d5zo7uoqKdhBsPhFPsmVatCQLK",
  "key12": "3yRb249BmC9Fa546ucLQEQRBHzhXqziAnTsSy3d6LZcZSQJTtHFYgFvxovy5FKUQLsbkK6PNQMTbTUSKKyaMywyw",
  "key13": "3RoNmpfA8WrVhpEPnDhAjb5UngsN3qfhDqYpPySfmJGtj8i8C5BUuZc97cC9f3mF9Jwirzhuxhdku6Jm8ryrCdAD",
  "key14": "2P9oGX67uyKbyBsVCWoSksgn4XC6nghef5auxNtD6PHxw48wrL4p5cY2ygMxUkWJ6e2nrqsQxXn7ayuDu23ht5QS",
  "key15": "2oy7ZkwEsSwLRTv49ZQ6ArhMXRPsPJHBwo6TJUKfqKDyNgRR4ooaPcrNTq7zi6p9oy7yENBkgBPFkKtaynJ2QiQ8",
  "key16": "K7Gyf3o14Cv4g5pyeJGJ7pjBAZ6DA9ruXxktxaghFHZhEvtYErt4bWhsNbEMCSunbeAEVuCvGRmt8mdUDtAowwQ",
  "key17": "5v2RhyKgavkiM18jiaavyEtXx2SVPqUdQuVLdxHAJTcT3iquoYkyYHbj5MZ6Dfi3eeN6zHkmQAoieu1aNhWTXA1d",
  "key18": "57s2AP6aSh1NLuA7RjUHx1cMe27fRGNzRBUc6MyJcSc72dLwzhxTx7AiXZWkqE4Xr5ruy7Yo7P88hioh1JUueo2M",
  "key19": "5VXsL4ThAxZAThEstTmDxfvPvMAdpzoWUpZsNtiE2j4PjyVCumb6M5hdpB9YsYhYVaxePpBrr9JYKCLA4ReAQToW",
  "key20": "pDuFpoWdkjRzh3CtqSGuuk7vKr9np1F6Yp5YDz745SHXHyUKM2msAtvjggKLJY8SwvQ6zhy4M1W5hE8zRH4bWvZ",
  "key21": "3tMtrp3h9LMhLGUrvvhih6VuEErcrBfBESdYWrf2jTFPsMwCa7WwTXUozWDkTdh5QQFcmtLGnfHam4Q1dMH7Xhr4",
  "key22": "MGan4bBBcP9YD7vwuEzbgHkCGztky9qGL7NXvXSPdtRaBfQ83hbct2WfE9aEN2AR2L7s7kx2SEmpsh9dvWiFo2G",
  "key23": "5UBWQGpm56H6tfLtCU9vAm5iaz2KPpnvrVgPPa2JVq9bcnzeMxvS4DheAVQVFoHtGkyudMMt3px42SDqdbxJ5qU1",
  "key24": "4zk43mVx8WBARNTqpn66DmtWhoZnfvq9Vw8KxrwGFSiPqY6gwi54KfNRJSJfbDMecApDkh2mF9xNY3yVQgFYPLzd",
  "key25": "4hpLuxGNgHNh1L6QfWXVAGgncBJFkHL2juufuPhnRPZpY2H3su8L9SA1hWSKFbgg9DUVMGKkt9MByaV9k9f1trSX",
  "key26": "2pvQ93hVKaeWw8QnAHT32fbcBmhyYTZjAMjhGrsrt7v8D3JDMVPpuTYdVAx3EvXh97f8gULbjFTvLWWcECcnnE5Z",
  "key27": "2LSS4RLQbo2ksJTKByUH6xBtemjbMmaLy7w3XvrUmbZY3Uwk14kazqZmooCFercagFZvXtgTiRCZij3q6V7n9hEy",
  "key28": "MxUmqTDukCvcbcFnAEvRATwntuBpE2ddg8u6edzcHYnM1igeBqS3e3DatjhNpagGfAf7R7kFioBFaFw5ukGB1Wt",
  "key29": "KB4WqcxzzaL1PYFLPoKqXLVSevZkfx7tsmaZqdnuw3korjJuXC6fxhYyvZvPzVXaBZqyWCiWASnk9pZNCneevLR",
  "key30": "3WByqobbEQ8MsPUQ7h3aCEGZGnTk1crSoHusmd6i58a5JWe6Jt8HdGSMMg3xn8BHpJmVsm61FySH8xRJW8TQKmEw",
  "key31": "5fG4ENqFs7iVXj3psZ3mkDMbHXVt5KHYKmrYm6jhPS9iqvEtkt91FqtmXJejeUnAtHWaBF1VBiB5KuXp3LFcF1mf",
  "key32": "yKnjkkFtoYwsefr5guL7WHJ6zoxrkXp2Ppkx9o6NsgLpYF3eVksUcPRb3TEUdNyZ1cLaXvG28vnpghfvGhv6xmt",
  "key33": "2q75sG1NffCakXCbeXLUAXQs4ARrEZqr1HLbfo12ywFLWAit3emBFyh8Hj2YrafcEZsbdWCBNV9kLyUVEn452wBC",
  "key34": "3pQ7UwPsV1ni1rDWAFBgaX9xbEAuq8LtXzkGvP3ikzHCMXJNoBtTton3DapeyDvHN9k2qTiTTR5PcjkhwRLFihtz",
  "key35": "5YkangtUPsQ9ACPNv96r1sd7G3WqULgogiiGb4bnjVLdBEjK9uwvfwtDDjErD2i7evMYN6w2h1vskUboP3gHH1D7",
  "key36": "MJxsSemg8PuMAGREW8BQEHMc5AB7Pf7BZ1XKmffSKVosuiTWYfCem5Wi12zoh9TSfL4YSN6s6EZuPeY9NAcLasa",
  "key37": "48hZq4RRcdJiz9Vf6GsLKSaseT7Ty3FuX7iDZ8Vjx5ZmUzsehqXofUVJELqLqfwxeCxvoEidpGLUjNSWVy7WN49v",
  "key38": "2xEfRoL7jMh9RGGgttMYkdBCgCrdJWoB4KcVpcVmtFYW7n4mFewDUsukccfT5tf3VM53nBfc3PPTzoFELLkDGQUC",
  "key39": "3PKZZ8H3pqd8cQSdcjjQ36AkVcTgbRK5iFepE27YRS3TVufi7eHkKfavq226LwgpKTKPL1L9jHbCkkbKYDK6cyE1"
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
