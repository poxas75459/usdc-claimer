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
    "54jifJGC7yiEFG1gNHDzG68NFnHojTXqGxNLsB7KqpaXrnVXj9M1d6tey1XZzrkuqwZaYQTKXWAZEH4x3Nu4Qjf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66LMh4nL2wsYbpKkxzRdLPtiw882ipSjNFVzuTGjdRSsSZoR59ZBpkm9CnFpUXXF4C5P7DdsTjyf5LAnmjv4Eywc",
  "key1": "2eaRgndWu6jxwtSrU3WNhPdvJu35s4cJtYdUWWdwuafiyZUU3AirYveagsK1g1vNLDd3gq89WGJzxVzRXLjgmxhP",
  "key2": "2cfToqREU1x9xhXhbMKdM7MbYRgsnwdD7DzoTuvvtswTHaUhdDmRxrFwVDC8ufeevRXKyLWvPTZ1xGSf1RLkNA4p",
  "key3": "46dEFWVNNCJgRbr85StQJrvDkWW6mX8d4aBXX6FR2u3RQ4FcvySXQcECHkoeY7tLsHqynouDKcAcpLH7Wi1xbwie",
  "key4": "4HLe8Mixop4W2g1PPASvDUtojhqgiE536vPbf836tDbWyERTQeBnrnjoFXGe3Jsk1KciiNKAmdu4h2xMGNU2fVkb",
  "key5": "2DtXHzShkMTcuqJmXzEKrmD4XYh1TnjTETjLmfx7oXWtVPbXKZzGCTpFsN3qRXhy8qrM1LhUVHv98B6GHq9NttAY",
  "key6": "4Y3NH7aXxS9cCTSUiJXVHjSrxFPqLH4HWiQmKFPRz1S9cipmU1q1J2miX1qafbR552wrMJgzgPAvSJvuC2fsZqhA",
  "key7": "2fU9CiRHY6pFGbVbSD8Y3g9Zocrj9MhjRyqZXV3vExDAPQLvaMemDUcVwykFZWSqAucL9TqSANpLZ7sG8hLQffHT",
  "key8": "22pD6M7w1s3YfiEPJdvboxH38Eq5fdbLBWUPytYN4Cj5BC13uyuJQsDPu7N2w3TME8MsjPNFUbMj4DU2hZqZRhHj",
  "key9": "5hy1hN54m9ypm5fcb7TQCoSTqEoA1uazEQPkKHSmhehJcpA4NFUJrTP7bT1Cdj7bpv7auXxPj1amjB2oArhRFwyb",
  "key10": "NJZBgPdAYkSfA8m6ssKKzYhsbkrc9QtrrTj2FFSw7u7ERHgjYD4s1guTwAnb8XHTAe3idMFBnVsQkZZm61nU1Yw",
  "key11": "4qgTEFtY3kN8wN7SV73RdxjJcrYRiSsBuUQf2ootcKSXT7V26hMmBCLrf8fzQ1g9CGKqn3SLZne5dAAxAUT4JfQ2",
  "key12": "2KUL4DSx78nz7J2PyAuQXuSNuWkSaNy6tm51MhLPXraho8t67j1Zjk1u9szwbbqsemBwZ2YxSfh1A6Et36yX6R2Y",
  "key13": "3tVk5V5nrhY49nzsLc1XwqRgjaqi1x5TKL1LU1H1scXUzN9iuSkm1yPrTGJauugf7Nf5b1JknUHQ85YPRHExqZUR",
  "key14": "66AR3xUwJWzLLTRGVCV8D5Xpg84kDhYzByHTEJwPeRhVm58Wm5YDTe3tFArxVaBfiBrxj8L74tRhzcQfXVP8FV5K",
  "key15": "3UhbifZ46hjzCCg3muSSWiFfgVWbWF1QVEsn8s5KoSb1KQpK2rrH55kye749Q4zm4vCjtTRZyazf8MCDWxDdtZKE",
  "key16": "3U8MZusLmy8ibZWqJ9j9YjxBsZjV15ocndoagtWJ2xQTXT8geLwTyajt5QPphtnG2RHnEokYDj8EgAt4mCNH8QCC",
  "key17": "Q4tQi8P5jpAKHZJxMQ6my3Y5TmsWPuyboVVY3RxwBm36eFiqdBDtWXwUknsFvojDzFrrgScbD2f7p9UmTxpvSR6",
  "key18": "5bmp4PmtCjfGcBEqHhkezfa3xPsu9fejxna12xbvo3DJHFSKJgEAgePsdW5aKyjaWNVJx11KK1R2sExb6rZoptaP",
  "key19": "2vMHU4Am5LRPb3GtZtPYGLzjgVaUZAzziuBazdd4BN5ThrveYkcq5jac3Vh17t4B4wou9D14N9YNCoGLLY9L5vig",
  "key20": "RXDRbvKgfN7yEHPU9WFupvPk3Ch8SBK5Yzu6mJpUjZKeP83edYkLNfSrjsFvvpRCDeLeYCFNiaeugBbpgT2XKrg",
  "key21": "5bqNtZuDikpcXdErhqvAQo2rV3zXvjsQ74YSMkAKXM8xVEasNm6tccgeDhaTLicmzC5DwicZ1Q8NBqwZZGkbASfC",
  "key22": "66ZuWvocyoYkrJ53hR3AC4njAsFj1rFhZR1DosCeN1p5ruSiYi8KeVMmzcz4QmGG4vkr178MthdwDJ9f4sswZP6A",
  "key23": "4t3J3UbuPgDrYDDCGobyA5JRYyzgUqc372dnkkRg33LsccMSmXhgWbDN7zXKYnbWidpZtkNWK8ajBtzUV4XTBohk",
  "key24": "4YQB97SK1xyj53bzXPR46t2VF4MqdEqe1hGcQoammKtU5X9jYEvRtsjpCbzjMTtnxw5NA5LZr7Mq4zUPjRTyzn8B",
  "key25": "3thTkejnxo6rWRmqTgaUaZ6iQKRDk5LwVZMBMWr7ZSsaexad1vFDk1NrHTQyCig9hi6VVvDp7jRVnpmSRFa7myXn",
  "key26": "3yDc3anssxSNgoLUgDPMTvm4Y7KUG45jnyQAJss4yA1UdsatJQ4dGS5Xn5U6K71aTKbDPvvPec5benD1cissrpkf",
  "key27": "4Zm7JWj3GiZhRhpWrB1xEvFUpVyEZvNeyA6cHQUMtaW9WGeLHnM1c4N7XjjwKEEnSRnW9wSjRqxuyQwfxPqp8Hrq",
  "key28": "289FwUDJSZALCU5WSdVSynksFBZo3Ng1Hcm35hDLYjiJd9sF2tJbCKKkycFFUjqrqLDGyoWK4R8ZhmMwYShk6xVZ",
  "key29": "5wz3Yxm5deZKjNrstEYiciW3VgBYWe158s79Z6nokvQQjmuDYy9AWMCy8AeFRqD6yTjNF22DkTD54XSvbMt4A5pE",
  "key30": "47Z3UnjEmLNuhdSzdKnuRCUKPG37w468jzKBRWgMkvEnrqxuhYTbmn7c3P1BeFbgFHC66y4qwvpgmvaUgjuda6VF",
  "key31": "5pSitvgct9fdarBr7pHCd9B3HMQj5Y55gTGN8oKwLoABjpXR613TjkTVhg4wNWmBpyasXeMmcfu8u8cB5zjAJDww",
  "key32": "Gy3q9Brf7N52YwTs9P5KZX2zweyyhpBtPc7fDfJCkuMK5ueWALTj1LKdw84VADCkEaXzrp7aiszjzE7dnZSmtbW",
  "key33": "5Pkxf9aUs6axRicn9kozmYFJ1DW7zQTq1NUWbNJtuWQ7D6hBFRxhPXdwLgVG3pKdjWDqhAZMpvEFnrKs6zCjsN2z",
  "key34": "J6HmFQc1tLdSD9yW2bjiVcpHFn2crzD4wojGPapgAa8B1NaQvaAxTT75TwvoPrbfsbUJo1se7touaa9AKTKCsKR",
  "key35": "3yr3zohoq8MfVpcYmahQpZrw52JSzMp9zrsK5NBGQG1mr4FNiNwfmQ6e96ZXmWSjLBjuP7Msc9svV3m7xY3AniLq",
  "key36": "4vnXmKd1w4Cfp45F8mabo3h8ag4Jx51vBAtXKezp6sfg1DTJVMfDyU8PufnSeLQmvVwbW4mzeGvM6RR4CWJJB155",
  "key37": "45jQbk1T35dMpNgZakCUAku8aZ4yLNycHmbVc4AvdgwRJwgoEVazay4kRxvTWSBvsyCz7Kw5c6ZVjqKX6MCmppky"
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
