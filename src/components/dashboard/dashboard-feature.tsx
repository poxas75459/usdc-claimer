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
    "kWBoQTgCvGD7ZjQ7Xjs4hC6RThvQWrucKySXCxhXijAF6FEYpAzMEUSH8PChcYrGsuZs4eou2zrzLUNWZYBXWdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pdKas54M6PFSTM4se3eRE1q6Z6ThL8dLJsje1xwcrBpMuLKVu9bKzSGwqDFfPzN4h4ERo6HKRNCADwwqMFZFhGT",
  "key1": "21vitMjwxXvbZ3HK6cnhU5tzXKe35RvH2ukXVTSApSRWZJrrA6MzLXcxv2ge5NXKTxv1BrzJoGF2RcmAGEFebKKK",
  "key2": "5ZEqekqGP4NxbxAZJPqRRorGXKo5kjdTxFcDDUCVqsoTPPpcp64MSUoLrCxpMugkGeAF1yceWngoNwzFhJC7XhEk",
  "key3": "59RaeovbmHGCxeHxjjWMPun6tnppdfhE8RNj5UomvTxrJRGQPXWytrxs3C2KiT74iEubuZYKfSzBcjiQSDMeGUHT",
  "key4": "29HemzSf9u27JP7rHKSrmhhVo1UUHXnNK3XkYpphJM7tPe5Ya1BTKu1rhNcSiFTgR7XN7D3WPjEB1YWDjs81BxdE",
  "key5": "3NxFqyriYahWUP2ANnzDSSwnePMVhs3ZSoxJsfhXFcmnB2enpG6x7asBobyHn1zxvD3sMjHAjGQvz9X2ZDy4y23M",
  "key6": "zYFwmQhPWLUD1K4aASec5xSVpcEKvbVKvoV99CHbCe5MLHKLr2LTyqCGBxkZMfyXU35bhMVZqRPq6uFrmQYi7sW",
  "key7": "514qjEBmbuTBvv9t4NEHMZXNXU531Lmvwum4j9p7VQpcXuwUVzwCZphkQ2ubiL2tC9bGR9im8hvNYwuUrzxhAugx",
  "key8": "2WK1MF3MiVaSwXLnEAYtumXn9cz1U1rto94wDVLEU596C7DeSEJRkusAqntDMjbLGTHsfH8H89HGXwQMUXw6VFW8",
  "key9": "hA2P2VRLYH1JqeNxQu3mrJY2L79iGk7kFNCoKCKNCaH5KEQeJ9HRg4An2mXB2q99aHg63xFTtZ2jcFryWaro2iW",
  "key10": "4YVYMUCUhi3yAajdZHB55WP768c1WiJEwuFE5Ta4xpvun1yF5yXR6KJjntWaUdgLeJ215X6U5kMehUuGvPChQoTg",
  "key11": "4BLNiS9Qytxdg7ZvJM6ekeDRkKKTWL49x4DmpFyHSWrgg4Uc4bM1cHKHn9FSNUmXuGxwXfsSKhFt7A92koasCTy5",
  "key12": "3jcgn6Yux7GyNJJw4yXX73pr5mWybM8eWbxsGiAqYMFcsZU5q7TZNPzyZDECBeChVX6MLkeij5w1kurudYRYrYJF",
  "key13": "52CDsru6oxjmcPvWXCe768itJk7QzSp3VGr3MoR4mHw8m7TsC2nkZvzhdGSKv45xTS2nkxsNvPcDj33iCJCyQ1N9",
  "key14": "feZec2xCP1dwnzycnuMvATBQCREw9on8bGdK9zxp23ouiN7axD9badtGt8HnDXyxGprWENSA996aHhqsMkHRXBm",
  "key15": "33PBX3jTG226VrUkAbumS8g3cE8WY5GAWxmpnWFudCZK19AYDc5CrhNb9wzW3gz2jEGNdaAEbizAFbbM61xXENhp",
  "key16": "2iFFpvdEAtyxwiKvNuzRTQUHjv9P4P1tLQYVZGSQZEXf3yD98X4WujAAdwtKzz8TwYhrtKVJ9HMYAVUmhMUm7mYk",
  "key17": "26UrLAByU9pjvehLJHdPN6X1sdwBxz6D6WHFk6kDfoNGudymR623soGaVxyXkJhp7R82ZGwPBFfP18DGzVJymAue",
  "key18": "3NCxK12if1HJC23uMBnVdgXDJ1qzUiLytknc6f6VSbFzyQiqziZCeHZnrz7jVSuxZdEQ9VjrjV3ZWFK2nobQz2YK",
  "key19": "3UgMUgdDmUGTtMv5yR1WtTd67sJBABU62E9tJbdyfJDE8aXTuKGspXfatswgCKjTAsYFJaSxyT7iQCdZPod5b98u",
  "key20": "ejsSW6S1gjSdTC3p8pepGdJVLvrJVzzb5o6hxbQnfdDvcKgg6KGznfbkDLRWqzYrb2fRJxGGHBFUUBuT1BTWY6o",
  "key21": "3AZH5vSD6uVfHGMJ89VfixFN5ZnU565WtnsZkz8RtQMkxDMUfPN41PXbYAYyXtP1HCZfy7b52eWpa3ZeEiBk42Fx",
  "key22": "3WwLwTwuRjnpcF8PADkGKs3Qy3Hi2jtBs6WUsZcHyF9jnwTBF9NGtXK8QfjUFj4aq3k6WzBFEq7nuNQdUNukR842",
  "key23": "3iJQUn7b39tJt8hsFBAB8q6WAgcuiLM7QkX7rfukczvcRAVAQsxchFUHZEB4HGi4sSvTX4BHQrUzxSYyYGY47MoV",
  "key24": "29vCmYPLpy5N1qPKjbZWsJFrvuByDBz8PStnK6jQpuwW3WceyaYRJi1evub8aAsr7tbv6w1w4LjZxkFNhDGSVACU",
  "key25": "ASdrUACQQb2FHKhaRN9WW8qLtnqMFmkBNENYPra5uYwUXBBAryHCnSVpMSuSzQLFrXaHq4qZpD88p2pXx4nTnc2",
  "key26": "4DsUJm5JTVno1j67Udk7HnENgCpvig1EULrfjRLUf2gScFenQnzLpnVxRdLDiDfdt9yjMeAJCD42JjMnRuYGSdjL",
  "key27": "2jZVzPnVSBfK9YCtd9LUVWB7cXQ9X2UiHumZS1ywqfz4DiBwwtrebqanAis2EXgLAzV8HHWX8r5ypf4Vez3wTeEu",
  "key28": "2dvPaMuuiTQ1od1jedJrLJbnKosCv86cXBxhbqdxEk4jmTp9FeueTA6fyQxzNpQaYUVDagQhik16mTebB27Q1Qqt",
  "key29": "5nKQepBqVBNiaKdDhqzakHDu5bMjr5oegLSCdKNKdEhnFmDFWyni1oQuBxb6XnCNCoWXk5RnphyPyDy1no9zcqst",
  "key30": "5gRn7eVrZa2v7F4FcczaNXnKvFp6JcjzzjPGVSVcsRfZ9MymowdCEQ2rfYuageuAZhitf8CKoLwHTPpwM6irQHZK",
  "key31": "LExXECpaenyBBUfWijqkuyH3Lk8AvN69w92B15uCmxYkwhZqJwfgKZgepBWH9fJM1C7jXyqFGKUEBsKRA7eLM3R",
  "key32": "PLe5cLFMAJ7UpJDrWmzS4CF5tXUN8Sz7YygZ36ZGHtw4Yfkvzxpsu3RppfoGzmsZycu9trK4otn77zxyvJk9VN8",
  "key33": "3EYLTFixztmvWVsbxX7mnG2JUS9pEG61iAowA2hry7NRAdsqDKYSJhT8AydeSd8ztcCEvdNWAhWihPH5uvaGGzhM",
  "key34": "1r3cy4Q6KvkaWbhPEkqeHw9sZjJJh3BkqiuWv9gvxSmJ8L6qAxAEWgp6NDHJih9k8X8Lxjj5x8ZWroK357zN1UH",
  "key35": "51mdgAv74fkdGLSGgFZaWR2S7VDsto1QFFhsgHuz6uv9fNx7Z8X8GaEkKtmqvRXhGcjeskM1GcbTF9YuCL2XsnWz",
  "key36": "57kvhWrYiK3LEa28u43rLhJ3zszyq4Re2RQHwvJ7BeeBhwCXB5AFz5B5wGPrMvc7u6bEnrSyojmbUBuNyETaLrbt",
  "key37": "1iUWfmsEj6acARBxtdirQeTAugb3htJJ8ZDcyHSekD84PN6Hvd7PfWZt1cYxeYcRgacX9MZEJVYvaZxXLHrMENU",
  "key38": "58DaouxuR3y5tpTP9NRCBQnB61FywPRiRzTHLPV24MXifubvSFaKfy8fTddqCFVie2R9rKDcqiarGmk6nPJK2A1T",
  "key39": "5tU8ABFQHuMenYeXkomKaE5bjGajTGYST7rvAs3mZXUE96F2agxetVKWf1k3gfCbmz76m5PBFPPQisWbfjfdNzAh",
  "key40": "5SgwCZDZFb2qAApK8o9BMm7KVPQqD54QriNaByMaBJdKS9TBRh5t8yAsF3NZJTGBiKfVTQdRrGptZtfbcwYpDQuf",
  "key41": "61Zk93uB5qW5M6H37jRdR74WPjevo1nafWHMYodEfrKGxxYiGsLiv6nEKNmZVy6LGM1MQreo7sis9rp6zFFuSqQo",
  "key42": "2QcRQPXKVysbdvNhKFkcTJDTEbnFEcmAkh3MzYTzPQT2mNvV2HKs8AjHZFa9ewJtCRNFhGpr9U1x15sqTEH9V9d3",
  "key43": "5tZZWfiUc6w13hUHzuhqYu4VV5Un2yL8ZRa47L85m38HfTWWRdSGzGySQHPcVtV8BtHKfa73WvS2RADVsH6n7gXe"
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
