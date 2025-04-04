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
    "XSducHS3bTrGmfpr9Boo3yH6Y4W2hGQwX1hqe9Zj1XFXWEQPhZ7v6ryYZDeFFiUKiuvLMnXBUNs2LBx1pkQb3M3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YPtXUHbTdBYtJcwTU1dnw1UafXFchaqHgzmwRrKr7LwrjiTdHuh8KSghhAf5gHRHYVLtpx5vyV5dWw1c2QKHxvF",
  "key1": "122QNHskL357gKywtfF7oVc3gtAQnq8EwtYJqDEGNVV42Sna93CoPD23BVSttFjLAzXK1oqq3Qgd6s1FQAfUiP26",
  "key2": "2XsSGtMB4G6xvjn7gHnnPebQQ5Ccm82WtGM6BkfZfTo3rzYAMgVPG3hEVCePTVwgTWsND5pSkbURmJNjtUEnPWSF",
  "key3": "4ukRMUQfQocC8s1u7hKyDRBGMSJDMLArUsKucwS9tAYcjknrqgwALN4hCA67dyTpo98Epo8TEJZwmKYFh4dD9R5a",
  "key4": "5mhAwxNVud5HxfuLT8BmsutJp3K4KUg3f1wKMHhjHvkVhpy13Jv14U3ypxRBbgaSr9oW8i3qPrKGGb1PVqYm4fZU",
  "key5": "3Q5Vh8ct67MCw869BB6MLwXa5VDH9Q6pq91q7Zq8uDPTeeQHevjARAgvp2MeX65VVAgAumUv5WiRh6KWPf7M9Cxm",
  "key6": "5YzhU8NwHXNzZ83rG2MBzDCpF8BKM8VwFrpNW4bSx6ZvYPyRQYHUZ64htCuU9pZiH7jjWGNivskas8jGAQKur5NQ",
  "key7": "3DKRzczGi4zwJ1s9iBJVzg6EL6DbjdQpGuvYcWQ6Ssa3PLzPz42QjDsQgXuuem9whjfBNpdaLdTLfzPPjieKKn5w",
  "key8": "5ECgmvdbAFttvxgrHx5pWus9Q6yjG7hzfXXwPrzBfA6fjgzdNt8w9KbFPNVviPh6EHRyWHoC5KG7d3ncdoBf2qT4",
  "key9": "3k6KmJfALq5ZR98awSuEg7ZT1HXyuaNwbRdQGGyexvXT89rVmSzEM9o1NiYZ4rCBWDTfw1j473wkbXCtF3eN87Yv",
  "key10": "ZKTUZqczX2B8S645KY9Q97U4MmL7AAC2tGimMgNKYGzqUBDPXxx7zXEpE2kaCnYnSJMvYu59A6KfXCUUWb9QAqR",
  "key11": "21tBjR4uKGNM7Kh5iZZDvFvemqPWrxnXbqhsYaiP7RryQ9sYN9F2pAJHoo3DJr5mzb7CJGDa8yN1RZBqvKNsqGPW",
  "key12": "3faQuf4RbVx9AjS1G5tVdMnAHoKLnmFsjfCZmHRsRghm5CA1qC9FPUR5v2gwW1Hg3X2FLoncSmsithbQQidKov2d",
  "key13": "grJquoaGbp1m4XMUX3ujCX3pQo72ErWTJjbbU4aGXzLHiJwHNT4Cee12DGFVMswGDyKp7TcGrwNgqx4YsRzyJ2Y",
  "key14": "4yre3QibpQBahTDeyFSbEzivENkERubCY5phGqvYVrh7tY6YguY1m8j7Ki9ZZbaCUv6EJwtnZ3aL17pxxovFtkvp",
  "key15": "5BPyxkZMq7mpLFv5vc2Cwdm2ywyGbe5UHj8ZZ9VE9Pe4sXsNHpCtyWZdEjVxo5BbCttpGwoaVihT2fXmN4bUjtTq",
  "key16": "3DT2vSdwdg6X6qbjPrBa6mASb1cLcU7mBRJdA9PEmwKwbeUAC4KX2ZXGH2H61kA6EuByKHX4q93FgbpF4do7Lhfj",
  "key17": "47oyqvbktTVAmmGzYsaa4dqCkZeWS6kHKJ1ZjWV2BycxqRFFiATPKtbN1cUMv5NaemR7wAJMjvAW2dGUAKbrQMyG",
  "key18": "26KAq31v3YVYgifMdeEkcmHd5UVHwqZdjTyFTVwsNe9kYngGnNnxVfW1PgY3MXqVAm9cQiSRteXFaLTUfqv9Ce7o",
  "key19": "38jdNuXE4MqZaAPvcdXT1YFQBJuYWDuXJ9Kxj92rsW7JYhkBz6zBtyutD6RH3LvjHaH4P78uxuX8476bwMVhwtye",
  "key20": "5d71bEZmzxUCDPCUr2nJ65mMG2s7xaKhmq3fK3RENEASoYkNUUfk712psqViFb3VAuPe7J4431LZrGD6TFFsEh5Z",
  "key21": "3L523Gcb6FcLaMC9MPiqonnwvQ1rnKq51QjqPTqdGCqt3zj2HsGFQNHf5woPRugEYvg2P5j2APcCJ5JGPx8M56oP",
  "key22": "RaU5iVud3VY6QgSgn5beJsgjyKKkkV9k2ySftMe3tGZ8ZohgT6m4P4RmnGUr9XNHAykM1d2rXoAYnyPwm3jqDMM",
  "key23": "3TwssNU2a6SQVjoTyB8MeTUQdrr1G1rQRUnFq3ZbuVQuwVarWeYzc6zYwZsFMTm77va32Y56g7yoh18xXiL6XskS",
  "key24": "27e1ak3t36NkAXNpkduzJNuHTGVA1NUDNTek3DYLRQ2KrJoXxFVTMFHkzF55rVJs2LgQEEwmqwGQsRDBq2NJkLRS",
  "key25": "5dNYVVKDSWG9cDqepfdy8pF7NnN86GfgBr8UTe7SAyJmzzgWwBCALMp46M3EPvbzKnhzTpRTmVkXV5CnNk5cLniY",
  "key26": "tc6fNqGuWTg1SnsuVpm7rZWWDQijYZSm12obcxtjG2KoYcgGaZf2uFSBwzBdi1fYSBBfa5r5F33Fy1wvVoSZo5J",
  "key27": "5PN34j2BHTP5e98ofT4JvZY1rinSyCoTzURdr6GBeJBLTimhcoyE2fkMDxi2LTdjyLdAmaYAhS7GtS6c6pJBJKz3",
  "key28": "3B7QeNwLLjHhckQXeHmiHr6DhxcoVjVGN5VPRbFUmqTq1qpVJsMExxThwokmr5uE6XXTEbJ8YHTVbS8rGJqqMbBo",
  "key29": "2sokBWcppuv1MbjG1yuK6iGG4qbnyhDdrnrins7HDtP1cadPMgj7JZFQziePyVx2fdwgsy4jR3eyR6wfsoAiJTVU",
  "key30": "2BFNadKeu6JU78hyMArgXDbbxu9K88nHVuBMnme6TbyiuWtsWHs4Maeiq14TFKnmAT3FKs5qj175xbHTytsRvKLz",
  "key31": "3tMChwbUKi5N9AZyAh5XSyY6NT6pBqGQmpZ78mzuvwqFpDk1Gzyj3DDpWxRg8bT2iBEeaQc89KUN2wb7i3mEyCFs",
  "key32": "3THDuiVH1WQB4N44M3BL1gryMJnJhCtKEoCvHQVzvhTE1q1LNT8UnfQ2L9Xout3cFxWdg11DqY7U8Fq3WTh7eXww",
  "key33": "5Yqkk1phfFyNQkad5kahFpje83JpaT1i96YzNpUCzoCVHPKX28gnDuCk7teSCma9L4XTE2nqoZtwEgb2EWJTyf9h",
  "key34": "5kZBUtJZnyezJhYiRfRcDDhyRvr6X4HiJ3xgpgdfQyfVETGHED5TEGRr8Hh8F7KXetfUWfHnDJSkdUwSwBgTQXMM",
  "key35": "45buG1Nr4nHebogj2DsxJUVPQzUVwA5kBViCCCTRj6z4kK3nfKoduhn7j35Tg8GzBpRxuYa2GbvYegHd2tMNq4Na",
  "key36": "3q8E6By5gQ4MmMvGWDuMcXSKeWNYMZSTCNUZKucMrCdsqcAcnckjiqwMEzjZD912Uqdy5hEBbpA9WrUuSis77fBv",
  "key37": "4AHgVPvMcaJDGkadMVWvBeKS1hZ2AXB4HziffH1werXNNNdKoPrdfYxPGgXs9ZVGNXq6x9zidpNYDqVyjZ8ZeTJ6"
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
