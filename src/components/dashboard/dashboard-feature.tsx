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
    "5aTDjrntDc99VThe39ZsZH1Lkv59fzh5wWkCGePuJf35CS5JBQeje3NYjBhenZPJbjSar3vjoGBwKPTnGWjyzLfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5idSaTcGPetQSXXEhB5hkMDhxDquszbvrx1rHi8uxEnE98WHmQXJ2UyMYBXhwuBYeN5FT6h3TucFc9grrhkmFptT",
  "key1": "4mefuxMPT3Y62N8sjvUjNJQZGRwbwVJaaR5v18eqxo5e5cosFCVkMjUCN4WXmU2q7kKuoGzse5eFhatCq7PGHFp8",
  "key2": "DtZt9MP7dbuPzuHxDVJTzuh1K9BBUw9RHy45Bc8w9Mykcjtfci7S731xNQ8FqEvAL5uzmC1er4APVFbTYvu7jUB",
  "key3": "4GHxb6nX6yKoDPNGBy1KxvJfrnqp8C1GKmtvcBALJP1vLAXoJ6Q2BoUZZeTFhgo7cUxGYrvgwdzU57e82fn8fPYJ",
  "key4": "Xvt4iF2mDsWfJ3zEH3HfofwSSw5dpqjLTUwUrFyWgorrbz7FDWdKicvgJ88nXmqPisDqGmxff7XQ3ciKZ4LnJYM",
  "key5": "3xqFvrBPY7Nozz2dP6ip5gwCJYwzenDiQh9uZk2a47Jx75ug92ESHiszfVf1hMjZYFwe9bFHyR4MCJCHYz2o3qAJ",
  "key6": "3Sbv3Zrw4mCSvSthLfhHQ1RWnZhPZzxam6muhDVQkTRiAZsfeKmNVyau8bPdMfgLtFrSVCjQy7p2YfM4HhsFB7BB",
  "key7": "2jA3a9c47jLUC9kHyrjTybnCBUjyPFtDmXWWj6WazWz4pA3MMgct7gf4KpLjsxi3u1B4kHiu4cdgB9fwcRFA4oaY",
  "key8": "3qocGcdkoNiHbv1vRvhpdZpqnf4VoPNC4LVFhaW1qu5uNbMC8wedUkHTYbXjJSZMWM75Wo91FpBDPbTCtjYPYFht",
  "key9": "63tpviKgS6yiajaoBfPhrvFMG9zdpUEgRFfgj69B9vkyFY7pfWK621oBBw5Emg8NmAQiLjeasSnzxCY2FAuXJVp3",
  "key10": "3w6VicUom9cXnk94ddnhxUNhzpMG5afpwc2UM4QbYMXDMSxYdkXkrJjkwj51eEp3aTzSwxSogKceGSmKNbdq12x7",
  "key11": "27kXFQgJrm2pHyMYdcrA5KC54c4D3Hro7tyAt76ypPZoQzE3HygnD8wLpxXjmojnn3BGdB3fhk96TgMDUeFAHfcp",
  "key12": "4JraJMJudWpogQq3dk6Xh3th1rqNp5BsFRuKneUMBAFzzU2dWwjhAwPbYg8vwi54K68XxzveQNPCawDhCbu2zQ64",
  "key13": "KfeEhKDtfQs4WaVWBZy84nLN1phY64gdUepxeQaWQpbwSPiocb987DcJPq7qFttzD61yhiPKhRpnjSgvd1BpbwZ",
  "key14": "2YRo3aeF2t6uzQKigw2FypJV3kJx7FeMXUtL9RHMqPJJSw2tPoFjn1FsvG29WWwqVJX9HE19Piqz23atoA9WztSb",
  "key15": "3YEuixy5tGMHuEt9eFzXWbfC7uNwbcZA5Rzds8SuExcupZKss3YHRvHARYUAa79qRQ4ffdiCzVTaUP5fKNabBAj8",
  "key16": "uRAcC11L5w8yQyP5cRpfTvPc5LZH1LcaPDaMzPLE1QUV3S6K75qF6PT2Ff2GVhPuBo2Ym9bxp9UeSKNvPMZgvhM",
  "key17": "2MQxnL7eLHyje4gN54oDQGTxCBJDu2xwPWznCahpLwJC77QEKHuCRWKaCo1tp84YUbhthYbTz6gW8ShfbnWRJwm1",
  "key18": "5t3SGQ45Ky7JEPW9aPRSDYPD5qkfxAWmE3QT7mgeTCXo5UnYCBeX3HDQtVJtF3eiGamGfXRpzdwHV7TugZNNrjuL",
  "key19": "2QL6WRnX79BcBX8Bj6qtdXh7GFiQkfkr1re9tkhpgLabyi3ZXi8DAwMT6vuiBAVzHcEE3wCNV4xn9c8iqP5MwWx1",
  "key20": "e3CfMxCdSDriRWNXvzidw5AwnWYqFE9Lt3d6iB5UY3eLDAuWYPsPEJummmcyeN8r4YtEj6stE8waGezSFxqq7mD",
  "key21": "5grwBtHbmV28cjrcUdJdTvRoAMkVGa14hwvrn4mthjq7HssawMpm3aoMmm3ZcUbux4q9WgTT176baqBDtMGrCo1H",
  "key22": "4gQjUELuMUP98RaTqu1v6kAg29XJshR4sMt52Lv2bpMdgj4aGeS3HLTGAZ9bf8k5BMtiqYx5YVijX8PX9kWNhcYV",
  "key23": "2cBn9gsV54mQZBWvXGrXGLe5pFEEATYzZiRhRXF2sdcUDdYM9H6V5F55A5MdxikRn794Y5iaZMxwRFa2LdbaLTHs",
  "key24": "nxdddpwWQy8ukJBBBx7aYWN3w3aFLfoLs8ec7xVwCQ6L5Wm7ppydbn3jjjcAygScHxGp33TB2FdS9PLNZyU3fMY",
  "key25": "43Z787UAueSwPBbAboqSQKiHM3sd4K3YyrJZ7hWFT1ZUn4KiBuKBk9KNUowosfCDmG3GGdxykyaHVn93Ny8iiFU4",
  "key26": "3E8KvuQ6MmJd69xcqzYvq632Xig2JJxPwYKyqhbt3udzL3ZBJUXPNGGf3ARXymztBKccKhpTgPfiuD2QWsM4kgxX",
  "key27": "3Suz9xqcBSwbeK4WZZZQGT8eyrkYbia8JD1JZ2qrpUCVfAm31Uod9qNhp9rH5fQoEWnEECGZKM3seCodbQ57srAu",
  "key28": "3H7UVkY2Mbrp1whhc1aEnBe79zmgSPn3rga1faVRVL92AmvadLH4cG4vfD8zSxvM16eCR1TaCifHpcMyBo2eGdpM",
  "key29": "4yb15DvqqFAN3kVKp3pjxPod7XaMWbqiMekuu1uds3CKUEhwUbAGzovja5NB5zuX1MrijrY4rPZZLNvGnKe538jB",
  "key30": "65ZkyWL9Zvwvtojxap7GG9eNW2VLoUcTCekboabZAqGGkFuNkKg8gR5N9cgnt8uKyxhqzJQVmcJGohvvzuTyUnAn",
  "key31": "5qx1ZzNFTRRVjgStTa9V6syzn9cekabgHQPD14pVXDjuouvC4ycet1nWPCNP32kv2GgZy3hbqhiigm8fFu4yEBbQ",
  "key32": "4gm9z4gzU41fory6a2sxBzcTjXcWjRiBE5BsuWMv3snPnoDZbzvodY1xCKsXJe9x9WF9LGC5GdeFzhG1tCiTap3t",
  "key33": "w4oaLLLpvDkhhekR2iMAcMqGW5kcWrT9FCu6BqStCdiqXy3KgxTziYumbyKVd9Dm3HfuzS26qjeU7rPiG3MjJzk",
  "key34": "fUMaq3vr6VyxMaEC38VRQYLU2jE1L5Fj8L8NBT9YiKHtRa6JGqs4r7D3S5XTUxXXjqiyF6tpYRgfwXFTgyGycwL",
  "key35": "ztRc5t4B91uqvyt2c5d1SQH6EUn5DDn2gm6pRB54weKxvyfGTSykW6ix8bwmYgau6egKsUTZzhyhhpapn8bWg19",
  "key36": "3mKtWK7ExUSWWZkU6TFiLzaY8hKsp34C851tiG4e9vmHotPwZKFkDbjPb5d6zfWgChTpHnbsxA8hTj52XWvimEYS",
  "key37": "2h91JnqS7wQ3HAfi2VQzKYyrGqtRJNxDg3CPhrRAgU7Bev26doBqVcitGqCz2nDGY5qjKvhwZRJFR7TnY5EgEsxz"
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
