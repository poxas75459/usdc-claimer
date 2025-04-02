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
    "BVc6xAes6n3K2WVswJqZ4RzbDA1j3D2hhffeheQNM4fpkvwY9gXLDGUjg6ae7YpUZZHRaKYKhkshEhjwmxnYH3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qeyUSptCwfbpaieqynmyBNjCV5LSPmAdFrcfVaN3ToJQPjgQryTfUqMY15cyPjga8bvWVFHw1JNvWQ6QfbmZZTz",
  "key1": "3uWW16G1k5aPygBLh4Dn4mM5Z7EA4paq4s1vRGXm7xqFECyK948r1EYUSqpUTuot57KG6wdQMBDGyyLZkrWx13nv",
  "key2": "2L7nw2LzDc6ft3f5akZHh8m6wqGRsmMA5Es8wkT81qdF6rJD1rS6AVKMTouHBLWvgFZdMWjvJC6migMhRGiVeHC8",
  "key3": "3cpNLYDHGyN1Tjt13kEgLRaXEHvNXgFBdhXosS447SoFxX7bpk9ibYPAUrxnsd2DRqowhdmpPgRT5ncFXK8eN6eH",
  "key4": "2zwhG1Arcj9QYfrHm5u9n2TacroThsKVMEmjVBLFpMZGSKo5a1hLEJPzxWHV1fLK9by1y7RGk89mNAevZckhECbC",
  "key5": "2DoXeRHLdviXPNDwNH8QQrKXmcvqchJDSMS1ghzAzRBvoW3MbiVWrSZy79yLwwLywMjN78ycsuNp2euNJUssbJu9",
  "key6": "2cBvPWewtQMzbnTFTe1dpKR2xmxksP2pRWBUJVfYbo5W3yt7NMZCnpQptCaBGJewwUverceKVooxyK2TJsNM4Ee1",
  "key7": "b9tSaaSabhoRBbFDuWQBL5BH4RJQfYnvfK9MvB6SwgJKSPYbJLUXgo3o6dcgth2pKH2r2wTX7xTTX3zXBzxzr33",
  "key8": "4ZiVqbciaWftqSWLmypoEnbXhuACXPrLUrqPj4UcDzJaKVeWYdtQzJog67uR3PrCny3kTYA1Fs3cfoXNq9wPfv3Z",
  "key9": "5Sa6JAP66WApsfy3obdd28et4xUSWRtvG2Zqo3atgCADZGeaoALtbsHW9ZYtxzFeerH48aTz2gkD2C62andc69st",
  "key10": "3jgjgs4rTakuVGuLKjbTttLuHQ2W4x5cHPGtji8QR1wAqqFx2LcXxqTg65vahVTStTs4mpNz9AnVhcDKcbQPiWPA",
  "key11": "RuGSN88TpWNrqXozqRG9ewUE8s3pN12o1oRy4GktkrNMamNJSL1XrZgpDFZyUjxTBeSgKhiuyx2t7VY2SY6yFkS",
  "key12": "5hgzRtQUKtj6AGsxXWART7e4CNcA1ZrkinKehiaXYmFbDgWvSfogyQTkuaeZG38UBtJnYsPjVUTTA3SoL2evCM5S",
  "key13": "4xvxThL3X8MhwSikQ2ZutGDY1aPLPzLEkCncyQoTsofk575qmPA4iMo1ZxngkPqzzsngBg5uA6YBuNG1dify1P4w",
  "key14": "hitJYmBU5RKJNXPPqz81mBd1kfMAxmrMX9XEK1atiNJMTu9Bj1BqoQpypKEehwAZNqa6iq1KXjpECmTc1hd6y7d",
  "key15": "3xmgtJX8qCLtXfMaG5B2hMWU1EgKmUsBVjsFLqRhddNmcvBJupo9BMXPnh6u5wP3GXhzg5LuhBbp1RffadPzEUJb",
  "key16": "4THcCVJMoLJ2ZS1u81BM9Ydm3BNsgWSQfwh4YYt737NLa6WFAt7yW58YZ8DfpnhvDAuhn2eXBxsMGBzksGEme2vi",
  "key17": "5HYTSa7aXi12a1Gpbebm9aLfuwGv7LPpm6BddKhpAescNdja6gUkpq4TLe81sQGnCK4sp8kWeKE8RCbE1vckacJJ",
  "key18": "4M2pjVLwddcv2guynK5ukjAeYzadrkVpb9ZvDbLE68Q6RQim8aGkCYjwBxJ5Dbank6PoVTS1xcYQppqdaf8eithF",
  "key19": "1euvpvegUXCm6aNPmDm4EPWkDa1bbi1fBq9xmw9MTb7VLfGEXxAsULJybYzvofdBsW1a6WQ3S7z5tRL2M7WzuzX",
  "key20": "42iYo6RJLUhYWDCENJHVXiJmkj3b7YRATFRU94EMTsCB2sekU3NQtCnVcpgSDP2taRagStvDdU7mfruHbw2GVQpw",
  "key21": "3fdPKCbS633sdjHHCFZTKpZ443BHGcspWWYhGZwnPQyfrSSi6SSksAiNjMf76gK4GjUGJfnhyWM52cH2nh8oKwyb",
  "key22": "2Hyy4Enm7U7RJ6hYBoF3jXg1nVfKKkt81aEfbqcVA242D79DwMLoz154g4QwRiTrn1Nc5t5fJQ469v2VqPiguoTc",
  "key23": "56PwT4x1y24UVmWghUiCsEHvhJVdrjgaBiorYY5Dc5sjxTKmXRf1UFREyTwjd98DRiXwL4DkfWcJmH1FKztaiwQZ",
  "key24": "5hMi6Hj9ANhuKB2SanMDxi6wFeLiY3Ywqj9wNYuc3b4aeBtjtGCh3nxecdS2MUfW7XexcWyC7eXpMHJqBnodbR68",
  "key25": "4ZeE4je4araNyDNdQJ8fpDFgsSfRtn9NMZ1vk7cWfvFaKVMNVLNvNhEsQBFigXJLZStM1Vuk1SHUMQRczmqjRwsk",
  "key26": "5BMYVaNkWMshaZt4nDHgtoLgSnCSWFYhAxWrb5GvwXP2MVGnoXqnpFNFxXTnQUWv3Micuqj1o2QXm4noRG473bnX",
  "key27": "5NvYho82BZNDLqEFBKX6jdu54RRnHEr9SwZFSiktpm9yF21eaeVLWqXa3KPwa4UDzwfFMgYye4TeFxPAsJk5MR7G",
  "key28": "58RknPrQ4StY7QXFvu8ZBEZ7Tt2r4mipCZ29YZ588kro2PniCYDybo8v9E86HQuREcNjmCzHUr2VGfg7NdG8Y2CR",
  "key29": "byGdLQLWtBaUiud1YkE35KoZhe7WWZSRASf7tk5vzXK7AcqTmNdfrCEQzbv3mK23aWYro1sujS4YWgMZbX7niRr",
  "key30": "5XyVu3VjM2vdKnGjp2ENhM7oWy35R54WJWZJ58NHxJLCWso6baCsdfHKwaGC5YxQRZxoWVs7yL3nGYVasEKoabe3",
  "key31": "56TUsSHewtpBbWhLAk9Mhu4LQQoU23F3tg5GuYbuCLaoY2Dhpo4pSPqQV2eWJg5orJjUYaYX6a5QaJmPoWiFZMsF",
  "key32": "4Es5Rt98YJkeKnUCxUN65wDiBdLBUGTwbQJCFZNLGYNfQcEqefSVdDhpKKySXeaY68oJQRHzDVtRqKm7xTM9ZS7L",
  "key33": "1d2Lk9m3qRESAYoWBHothsdFdBviZ2Tg296PqVbhtBWUxASF82DNdXn8aWHoRgv2NowEDQeJyjKZxvMs9PhkHHR",
  "key34": "38VVKYMckaBQiwGJ3HsQXMgPnD9NwYUArPRRXETzB3jrXSvtnPzVQQnCdpncr8UWi2wxfwLUQJvxmVnTExGSUiT3",
  "key35": "2jj6NdL5UNvGMAekfaQ4KEqrM6BS9x5hjMgkuk74uAky5TzjhipJEu7uNLQom1JGG6PmTDyeso2F9dAtfUvL8x1m",
  "key36": "2uzrPsETTkq6jE1ukpwMStD2Ectj8NTsWcVmbBsQDzDhK5b7dJf4h22tAr8NPAVRv1Kgf9YjLYhpLB52YqiZJCoY"
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
