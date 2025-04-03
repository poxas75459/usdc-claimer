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
    "5iw59Cecef5D57LnTcsLgqXN6uwEe7C1i2LtTMfQNfD5sCa7wwWnT6c2S2XWhTtNkjB1XYqvR9ywg2194E1yPHaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n8jzowzRVB8Tv6BiaNaU78VSK4qUqoRHhuxXctJMG6WkDrgRVgc8d4FVFWcDvHEJoBFEhWprLs67ELRaGQDoDra",
  "key1": "4DQhhMkn4uRydQ5SYvUhjz9nhKwkYLdFsHwcmzcSuuF7UzXr5w3m7FtgCXyrrUDSkRnA7AD4E9dS2nYeyp2x2QuD",
  "key2": "3uqpPiWLRzLjoeJ9ZhveJ3MFYQ96o114Qp6QwxNoKp9HQm1NsbjqqnfqYXeivx12JRhupbrZQpPfJetg1Gbmpket",
  "key3": "U8rgihTdeQpHktibd5CmVMB9q6co2gE5b9NeHGgRot1enXPHN8hzzBsHpUrvo21dnnxew1DYnaxAozkK6cH5zq1",
  "key4": "3ovUvU2tKBByQ2cFd8uaxF4Xp3WAhEytZAyK2mRcDg8ZLadJ4jzanWop2xtEyyntSBUn7q9Gu1hGwPteFCVm8S6H",
  "key5": "NDZvbEjJsyeNs92DysmS2MZf4hgCHkznWp9BhruuqNi3mSXtQsaAfnL8WYMehK5cbNsKRU8f2T4hj7nnkvGoLqD",
  "key6": "2QTXAGz5AZD15PK6yH74MVKMpVJiJ4deyQJ5sAmcHpAKKE9mX5vf65dUFpSKSMGikRZ8emLsqrRGZiBAXst4Ms7d",
  "key7": "3H8Y7z19eeKkyFvDDc6Mi9CxAcD1oUjpumkNFFvrAJJnrzjnDRrz5iWhBrZXUQcKtHr1721m5hxAhKzdZ49uTuzk",
  "key8": "4giyVKJtRfgwqnuGgBcoDZgVYmSxcvEb4cbigU3vRV7zxu2wGc7YDGZYphDn1LnjcpAFyTnJFiEsiR75Xq148Jcj",
  "key9": "3iposuEzDgzuk1hzCd9Gz99FToPLd7GTeudCsZaKbL9jRfbxeg4rE8WsztNHvq6d2dRZ4z4MLHDMfmxVthfq81Nx",
  "key10": "2ktNRt79sxj7xC4i7SVoPaA6T6Gg57fY2Tzha8sub59XMyJ7PwEdYLyoB2aM3RjVUFr8bedTs7foEJAV3eXwagS5",
  "key11": "25mSQ9t1z4SNQ8cu5UdVzSqRLLvueabKRT9UQqsqRMxUJW4ZWVCTeLCpdRixYzPhpUyoKJNsMMj9oErGnnrbV6ZE",
  "key12": "sXDVpaws6G9Y7WLkG5ybrsZP2BfZgvfnBdkcrra74F9An1CQfz7Dcw8pTuivKwXXGwnJWQ9JEzfEJduRNMJ9VXk",
  "key13": "2A8i9sKv6H7bBHKJMW4rJrL7xxqAhm91BeAV5dfDjvrteWURnzeSkjP9FYfEvzxLHAh1TXcdRrFBZBXSHymPVEru",
  "key14": "cLp5dqz6ujNhKeJy64YJ48HnFh3oEP2UXYRkthzBj9k5g9Ye94ra8uARR5TEAxDovkTTqp4u7LF8ML21zS1PUCN",
  "key15": "5q6RWoXdH1LRAsovpnkjkVcHCSAs4RNkWdKzFV7C3XyVtDyqwL3CnsbGmwqaRErcs5cYMaqP8fny6BCN5qGkw2qx",
  "key16": "5LT4rhNimnaphSxHvbmYbTvhSjDVHQcSHfshrxSvbqsc9dikT93g3s3yehyXqNEz83k68uihDsgsQVPHDbgqqNd5",
  "key17": "4vf55ggWi9jMHhi7JmUfGE8SUUd3VqERFxKAQSK8wn4SgSZL4KkxXhHT8X51D7Nfnf9WipUVYmRUNAA3t7FbR2Zt",
  "key18": "45MVLWU7CtYtLHBMskkR6LZTyXK9ebtPMYHWgrngeWkS4wNN7DcLbD5XAjUNZMCN3D8S9aUaimBKnSinfFxz9s7w",
  "key19": "YX1yAUDCd3wao9j37Kqa4x12YC117Cu5uSiG2gJuzbRv4Pzqnysx16RLasVv7GDsgzTKgM33p3Vs2VMmnJKgaxT",
  "key20": "vm7A7pWetXVwdG2gcLAwjqyDm1sJx7BWaZdc5eEzK757fsEUcbw4ngLxo2wYzmyF81uE2WQeAqNXBdyGU1DcRvg",
  "key21": "2fcB7cdwLKuDgfT37uogiT8BJ9d9ejxHXgHg42M8qCoGDpiitZw81PHBFeWoaDz1ssHXJhzTXM32KF2KobwsdJ7N",
  "key22": "5dS2zpGVeQ9huC2vLDkL6gy8fYy8qSX5v7cDsuNQgsbu1c7LvscUXigxoz7s4wAQJdAKfY2zUmULknRxxS5cgGPV",
  "key23": "KBgAuADJD9dUitQZs9EK6XpkCB1bxteUykvD4KrxY6URRR5ek81yKnd5KFDWVo39EZaLDxadMseRBtjskpXnCdx",
  "key24": "46NWN6hVAD4w64kNCzDKvSg8bfjFssmKGAYvDYvrKaAUvWXW5WufxvdAb5wUmbn7wWehTVEgiiCGG5uwPDiyYfbA",
  "key25": "5BDq8rQZ1fxMkorTcNy8zpx5VXgyi95RfHANd4aWYEmcHBAUQFPmNHSqGz46AkjTdFE5PJo8ou5G1STmUEfQRE5u",
  "key26": "52FkFvNNmt7c313oFyCRdTvBRdk9Fk5YJZbWPXyh2WGkPCNeZQf7JmBXrx1eYiUKT4GSM4bmTjs32z3nuBgQV4Qh",
  "key27": "5c6cU7Q1PFaFPr3HxkfNgYKC8ajwCbg9AADXKo6L6o4fYmx4fCKQoAXupXcT6XW5J5JMPiSbJLM28oAhEBdf2DM9",
  "key28": "3jeK8vksoWn5UiQm8PjovsPqhR4LzUTNMKe1xhf7rtUzaoa51iz2jD494KfadutnpSZAv1L3bYSYENMphgEadW3a",
  "key29": "25EKmXCJ4tMBGkh8GnEZexF3bPiXLkUSKfTa6XMErvyUyi1FNAtYnzRQ6EDFfzKXe1184R2QQEGvigez9iyvhnEt",
  "key30": "57NkmWNzNGFvbAn8rQvEvEzAMn6CBCsnWWRHZx49XgEdZVY4t6HAV2RB81vEic4aduyohfJWsAg3Fd6MQRYdJ97a",
  "key31": "32VFfbTG25qyqYgUtmwU8R2t3Svh3we7kTg4mzNvJJsff62ggX3VhAp3hnup3Zqs8cm6b8GALzqQUJUrG1N9Ex5y",
  "key32": "5nrnG1NfwqJ54D2yuDaqgmz5FocHWAEK8xK1CRqxrd4F9vQAzFukp16U3e1NvxCc2K72GMYXvcnp3CatFKBAGQtE",
  "key33": "5osh2LtuafVmZFMmBfNCHG6H9WT1d1dZCsjtAXAvZBmenEHBaVxueonPtiqPX5M7QkzTPfQPNREtsJkdY6ricxvw",
  "key34": "3fT53Nx1KQb49Fk5cpfRYS6oMKukB6ccTqg1TAKkqrx7JFnsqGyEzWUNzgsPFqcrrpNAyAuwG7T1ZsNeE9wNPWAb",
  "key35": "49xuYSroVm3o1nDiChwthp4KJFA2FHsqbLqmaJecsfDAJJHspKKPVZRoUsgYhC2ZwTXFHjbmHeq6izLMTrUN6qQQ",
  "key36": "49nV4tebMZcL6AtuK3dux7PhBE3D3ruaC2xE9DopzcjDmWTRKv5kUADreuv2gRPAT7toxuyT2kwe3uCdEGEyJAXe",
  "key37": "5QZDGcLyKjXsp3ZC2HeYsFmyexkQdMBqdxo2q3ezBeZypV9kWfTBA3qB4R7ztwuhhSDeStcYeJmX1bQdWxMnQJkE",
  "key38": "4antGYfapP5p7L7TP7ccEyApiWCohRRv5sKWN1jJRw26agwk7Hytsi8PGtqpjRjkwbkvmrmtSZ86U2mcpftbwGbx",
  "key39": "2MUJk7hQLFNhJXC7DBZtPsE2jHXnmFEvcHEGvY79JqixCW694JT5tLwLDHKUukv8NZ1M2io5JjcV3Bjn9Mx5NkVE",
  "key40": "5Au9PAbhnWh7t1BE1c7ze9CaQpNxkFgLzQRJ6pwn4dqopH7mKYqUWXEokdGRmfRaiJPMNK23so9nEoyUB8L81Ryz",
  "key41": "2MNecrphJkZZNDZz6e7QVRXvt3VDYUBTmPYSYv94XQqXQMmVdMeyuFWLdMeXbJRxujbPgcMjm8vwQ5PfVCzX54t3",
  "key42": "4VwQKf6cr6xRM6LBw3kVr3u2vdBkC3rq8kyrQjfkvUUtJzyoACN8A55XAYQTZDMfKtsMNauYttggRQG8qMj6qghA",
  "key43": "4qeyMQWQYqPvfhmV6UqtMCWhibHTV3Lm9yhnUEhexxhiLCZeBFsyJpVTHyrom1UeFRSJHoYrsqJ7edJxn2Md7uf3",
  "key44": "dgN57SxNmYrT1htxXwHLQB8Q3WddBdN7GR22GigaoQFkd1s8qmugmfnhRjuqdpWbj3DC2DBTc6djC2MpvYhScgd",
  "key45": "49ergypzxigH3yPNRZzbacY58Pf9DabegUyuKiixaQfN4avtBAywh7ybCi9e3WHyA81V2ajBW47iPSmATxUGTUne",
  "key46": "2WHT71z1y36A8ubjrNEPAZNd9Tbu4uJ28pQSTuovdgPb7QD8tCuhkNeKSNT8fXecJe3W6nkHnhFQryarw8Ke5Xn1"
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
