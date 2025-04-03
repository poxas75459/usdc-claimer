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
    "4MTEWEH5jNnFtXMrtyLZvzbdbwHEj8QHiXgVZXLHsnVdRK7gRK7yfr4NLgS3wwY3XZA7yqaUFyyiKis3ifZii4Qn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rxNwwDUpoPPAXUBYqKDTgC9zKtNJpzvk9QeCMAV1YQn1XdMaGW1BFbc75t1t1pgAfmDoqJ5B2jmUt7QAv2851Rz",
  "key1": "EED9ZwRJmRRgYfGtfNuL4orHnYKtqj38wk8nqfL3xiwoucduTLsY3St1ojgHJKXvmXR4kQbxxgjj7R5Fh7Ujuyy",
  "key2": "5Qvucmieppgqi7F7JrvQdTqrQYbG4HLLuXVNK2cMAK5DruL7YTvi885AnP61hJXJCE26uia1sPpcXaa3LAWQyhbP",
  "key3": "3H649L6VkXnf2iS4FCt58Zxb6JpYsf9W1rAYjSBUdK1BmZvxQcJMR1ayEwKW7fhdRmRmKLKgdWWXBmzci84tivJ",
  "key4": "8DsUGkhr5nLNWWcyyvgiAoMdZKwtEAVySaJUDpCfAbNuJJDDS3nSHBatm1cWLUKVqSjRSXT52AjJhvXjYvFgctt",
  "key5": "31Xt3fWBRjeHtXvSyxiLCYPskhNh1Sihnx26b4E8R5EKgKBtDEs2W44QP7ZhUMXy7uxhMviaN6u8fh1cnj5R5YtA",
  "key6": "p2AAMZCepEiSyfS18H3USmLcVLCa4jHGsaE1LhPCAXC8aW7UxV7hvEdszAneKE9i4gTU4PXGbryWq4wi9CLLvq9",
  "key7": "5MP2nXVWRBcqhsha1nH8J6T9cZxq82exNjQkTCTHAqjojgomQFoxRsgK6EMCRu85Xq1M6C4pew8iCSR3EjvcA5Qi",
  "key8": "28kdCXQ7XL4SWDa2uPFUt9L2VDHxZeVdqqoFKLB6jF5Jicnh74E7vttDLVMFUJyr5wbVYnuuPq3pTk9u3oYYE4t3",
  "key9": "ay5U64YqywQ4Zvm7qiesibN5Lhh6oKEpfpEUinB3PL9oqUDLjpqALa3mUejHsawwBXDgoapPNw7xKykyHYGTKkh",
  "key10": "5pGPPUELiixB8QxAGVXACgnTKbnw7uXbnmpVdcuUJQTNqQ99eX6VuYbRf4knxmYtGHH1rDDgRHpRRPHAnhNfxcek",
  "key11": "46Fu7qmh1h2iqFzE5PLqK1mQeTgiBYqxasUwei5PnhGG7ULKTSYCZW2QNaxtfxM4R7RTqyyzSfTBzDCfpwZfcB7K",
  "key12": "679rGeCXFEGsao76DSP5Z9VpetzZYwn7xLfq1wx9sL15Lqh5J8TGfDoCsPa6hiofaScceo4CKxnQpjMPK97RRwia",
  "key13": "3CqhekNvTCn22kwEL8V6z56XWEiat9jbZ2cvH5CNuZ7PtKKnmKcuAV6sfiZGaTZFkTo1k11nRnju4oRmKbbVxiT9",
  "key14": "2aoUK9MFytTzUe7B5zqzFHUkN4dnxKgDRNR3YBwXSTk3PEWffdc1te2WdfiRuAyS8gtnZLxcNkkPkLiSRiG7oWo9",
  "key15": "syjdMBv8vByjqEEMarZk6DwSj1654hpuqksYYT4SWh12HJNEbZLZEhhd5cKFdwZAniEYW7PmCyA6LS45NjJyV73",
  "key16": "ZP4NseK836kBnQ5eHSWM8Gwb8QxyJpWWTnUr5VH5Fd3iaTWpC4uzJ7k2yViqmEZCMREG9GNgxr3oLKfUmXcQEDV",
  "key17": "Vi64UicN9FT6iRCajx7FyisuY4WdH7toxumLZkHTffCL56Uf7V75od36M6ekREkjGr5APY6EsqzMVGNBKmBdYxs",
  "key18": "4Ngj26EHmh7Ss3anajtr3bpHRGeBKThs8Abyt5J3QBsr27Qx39Eiagig81nRFiYHVdPs5eCkyErKiTwQGdAyuFMp",
  "key19": "4ss4METUMBfuLMgVEe8u7zTwy4uedu8W2VrksSAbsc13KM98ZxHvtwwMTPPZDW6tuUoCkn2a38EBMMhsrvyp8zsB",
  "key20": "e9P9Qk69pTujnRMVMvzT6YuCGA3huQwgSHMZBZaVmwvZcyAdA2hjbK4nNzCsQtcBKBqFwDqMjwPXFcv8KvQtoZ6",
  "key21": "65RuUrohTXzU9ZhMMZf1LB8rdrB8JSvvmWyrfWNWwHcdoGLbKQD5Qmu9b3E6Jxn4sGyJHCyrxnBBhtHB57gZBC4N",
  "key22": "5HPWNTTL51RMdwhLU8wckbDk5zt5oGJZehjKbzpf6yRrq29JhZB2UMyQz9e6Mmrarn6JfgNuF4eUch3T99CYXJ3z",
  "key23": "2TCRerCXChwqX1oLKGrHQVtmbpgMg4Lgjny7T49yiw7dPQjqfqJgUzBAHM814V7tcw5LkqUU6oHfZY8Uc4X4HLeB",
  "key24": "v7UVA6aFsCN545aydSv7bEZuir9MoZpVrtRwLDJs8A5Dd3jj4NgG6s3F4z9YB5stg3iJTifFP3eCk6QwtxA6tH2",
  "key25": "2Hg9jG2j43Ec1nkkyoNp66xWG4tgTGxcBD4ag1GFc9HyH6FX2YBDD8LbmksPDsXF76ZXjkLqAUko3ham8UTkWpHR",
  "key26": "3A2yyC8HRBj8VnXo5NBWgorE87NTq9U2MMmcbvNdRbwxx6P5yAWmEtabhsSDHFAQoGXthAvijCdBxeMu6nBqp2An",
  "key27": "2D2W94orC51qPb7jD8MSpXvTbjDX6szdWyymB94wwBT4XhCSQTZDnwyGpNGpXFYLKsfTxPZme6a1w7PS8LWvG7Qo",
  "key28": "58s8p8cGGvVwXNKCJBz6Gs8Sv25svbwkFyyb5piaFNzZaE7V8EVKAkV2bg45GQh2rn98HicGmUFyZRys3wtbAtWM",
  "key29": "FvSe9ETsy8r8ZSCCedMauvM1APYn1omi3bh4cahMSekQa7UjSN1tFtT3BByZUi1VCZbqGGmcRpyb4cY4tHFWFzU",
  "key30": "4RQfL556eUsytbqSZCT4dsWuUHcBdbhLYqr4AE2MGQXmVX9xBCHexSEQrfxv6Fc5R3EPZX4GdSeZnzmXXCyot28Q",
  "key31": "2Rt8q7zuWuGeE6ZckZHuBTqJdmuNHCjDyQMxdX2tkAVPNaY3T98qjsp3GCWWCdGC86Cim9Jn1RhH8ZvDmBGyE5hG",
  "key32": "5pNXa6Wnx2frc1hk5TaSmWaTX5uLuhmWHgq5DheLJjbe9R8BF9toPv2tz45896cWEkhXPvfyUpvPRPaBaU6hhQPC",
  "key33": "5VTUUAxnU9Dai2vHfsANQiDBf9ScAVkqnKVfwhTrRA6jbycsTM3FjVtuYuti3ki44KzLC3Ma1RXSQToi3Fqx4vcE",
  "key34": "2jkHcvQ9qHhgEQf2x1n2dN88fAUQCgec9gxtKUwmfEm7ecWkqNWGgfPvr3sEsHziSon5hAEAnwp4dKJ7Uno82r2X",
  "key35": "5FETFPT2ea8CBo2WzLjrA2EamSDH6DvrMFEi4i9AU7fEuqz6zGmE8B1sgi76pWZmXzhz6WSbQMyXFiU1NwgFAGhT",
  "key36": "3qDEjprKSEbhBgr9BD41csgDmB1rjqph5H65DazpTCH1o3CtKm9RddAd91W9LLDfrb1tvJydwGfLSNHXpSBdtxzm",
  "key37": "3VSREaLmbqL9VBQM5K9eg99iyMYjN64XEi6VReHi5xNQajoZUGzMsfdgFoZjfySG2WBxSF4reYj5vhzd2Hpb2SXL"
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
