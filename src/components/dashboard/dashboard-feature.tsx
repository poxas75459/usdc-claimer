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
    "3JMsxVEbNwrEQG6VQ48NppCm8Uu4uahWRxBtwi7fReWLT7y6nHvusEDpGpCLkMVXZeRS6paRRJbE1WzJcuC8PCFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VoT6X2othQ4gWASJvHWDcXhDTguyfr7wZU78PgmheKYTMQA3mTywbCPjwHq4w91qg9hWjC2GwWYsANBhRzKgpHW",
  "key1": "3GPjHMK1UCpimiEwJgAH8LEpLfbt55Lawb33dxACxk5f6tqpVpPXQt4GQAH6bWNJhbddMaNFMZEFM89HW4KNGXE4",
  "key2": "5S3dotpZWowNX6jG2uuibYYWzcr6AJhSAmtsUXfSyzYxgDcKyov5E8e2BcNJQTkX4cdXsaFU8SqpXXRMDyVmRNGQ",
  "key3": "2kPg6JM625L5iNATWLe9efA2aMpVSnJHqzeLtLtMRMVKafDjGindxtUFjbepbGsAKtdGK96mLtqBWNry4Apnkeyh",
  "key4": "4zoDTzUs3oMK3m3SqB1bYxPQ6n5UBPRwmTVuuSCvY4jQP8YqwTbWfHi4iYANKFZajQBDfWhmFeEEcqfzPCmD34md",
  "key5": "tryMPLH5VEj1rnHQBu8JrFLppc8ur1sEPzeQTn1ZBgCWH6uDRfUyAkXQVv3GEFCWiB1EQN1ZB8YDNM5FLwouViQ",
  "key6": "3gxNeKSJEAyPr1e4CQ8rFXtm2XHWsNddFZjp9FB6J8MLR2JBcXXQ2ysdVZbaAqRvpNtSRhJp9boaAoVq7ugiSHER",
  "key7": "28MtFnXwxSjXqALrWgTc7YUEgCUHETpWcTbuDuo3jF9rb5ATABFiWGnzrtxwnxNQR5aDZFYaykdrWmZ3J4MBS4FU",
  "key8": "2MQQneGPpGJXwEr5mdqw6S9WojiiXsrdGH6BKJ7qWDb88KnZcCbfRhMbrvNAwdYuf7hBSJkKALYF1yjvKALefbJb",
  "key9": "xwznKKpZvVhWTY1TdUdPBtZiAtg3JTtDwHUr4HsEU4E6QtD2huCe6J9ffzAuM9ACk5wAnFyikP13QZGirBB84Rw",
  "key10": "5B4RaYmrEd8p4hkmaFfaU3xyjgLjY3z4V5UjehpqSKSYtsmZKcir8AA7Jv3ZWXBaVQAsqZKffX3hgWk3iZYkwgxR",
  "key11": "3Wm6gs5waKBzzjCrWShPVtwWZNYYdnTKJRbKpu8emNzvsyZos6yKWZtLwbujGVTUmXKtMFB9dhq6rZN8QMGbLXh9",
  "key12": "5gYAvhfys6zjscCcmcHDE74LKrkm84TutwHjB3ey8Ahcj3pRyYV9VGNZxb18AaeoQvSKRXXAhXoprxbrKgqcF5U7",
  "key13": "6tsLMjZSgj74UBmWBP4CLvA2RuZGgj91xB3G41PSgPokTN4QUxYCgF8Hz2SzJVaKqn18APerye2ptPATt5oLVTQ",
  "key14": "4omG7MFVsSm7ZquKLSLWUrLqHhTwxQKMyRranDMyq35wWZY2iDMJu81YUwu9apqcQ2cRp2AfVScE8LgdYEjhmSQ4",
  "key15": "53j1Vqn1dMgRb9Kwj1hAK29T1YDGk8twLvBaGpaBD1WybiHXxx6hMdTid1ogFr9k2qEHB7cpnh3AkGewPM8PP35E",
  "key16": "4fF6TkyBN7t6J6ZRULpfoBofps4G46T1XVtx9bUvp5xihSBnPQ5nB5g2RywPGxSY2XFHjFij1mYpj2n2V7VQ2yT8",
  "key17": "3Qoz1h4cq7SoN1NxADa8tRBvwumd57Q1gaV4SrvCWm4oK9LDrhDwSrXseV45zx6rnYarHzzYM4MA5nyw9g3TdRjX",
  "key18": "zF8ceZH2C6gDwhvVXCr7vLtYNN2kx3DcMHpvrJ6AT6owEnnrkXnyEmbffnnFqpbbbB2WTmJDSnYXc6nctgfoHSq",
  "key19": "44jq12amNVZGTFT19hTxtHvTLQ3vH48FtRrg6ZgKXciY2BcZEBq3uH8t2iDTGsiVQB9QP3SByMEfwBsoYMHe4MJy",
  "key20": "2zMqD8gBaEPGGnbC36QDDYUzR9tKNVff7t4g28aopVodgodCzogVHCv3umJ3V2V6EPPgUbqSYrhVma2JQPW2VHGJ",
  "key21": "3SqQwAHim2VSxJXmaEemdKyfDWRD6UA9Fe2Qfpr7qLNko98n9X4Q4KW8NRStfkh41kQFmLT15yZgHJYCZK3di5yZ",
  "key22": "cCMMc7g4dENC7gpr3Yfz6c5aFyv7kXQicUAZrx1nK7qDFB18WD23jukPug5hXc9g72uMxLpTAttTo72zjh7CwYp",
  "key23": "v5CA2N2UhLdGM5MmmSvRrk8Sn23FW8pc35jsS36LMpDv3g9B8VkuH2SaDw7jwbbGxftY62RFJXMeqZq8XTN4VKX",
  "key24": "4oGPEZ5EZGFg2rboYZMHpmdg38EKuL62AZ35UUnjtFTPaLyH47j1smjnoUFEbnZVabuMCtN8P6pNJ1tvnNs45Fw7",
  "key25": "2mTW8g7VkQDCe4bX4fnRPV8rAfnWJD6CQtFH5mV4t8cAcHPX7B6KoSx41St3rfaxAS5ohRZTKFckaGzeRkxSjDbD",
  "key26": "4C6KBFiaitVtE93HcLN9QJzbMAJyKtV7RbXRNJJSCL5SAg8unKGuqwmZp2JnU69bR7yYzSr8uURprV1Cf73BSuKR",
  "key27": "5eCmkcsxX4Tb7dSuXGkSTaVCDKwDP5xTMAecFNb1SjQVFSV3kfqAotFEyiumvCZxZVDwxM8H8NnpAZpt2uR7sqbh",
  "key28": "heXtUBHymSvoeiXiskkvfDH9UdvZ9TwjDcGvga1mUaseZanDX3GtL3hXkb8293MhmNTbQng6t78EaDNyrviMmdz",
  "key29": "3Ty1aYRjX8DMksgLK4yvMphxdhEhJBXgJEvzLdkxUfWBEhmVc8aSzR4yCQHk7wYNmFvocm5FP2WJnjSeM1UZXsjf",
  "key30": "37mp9higQztTrW4mpWpcRTUD2EJ2obq2d5TgzRfpTihMMDcP2eeVTMN5q2r12GQrYSbxSWBH54LzSjFHCt8UXU8w",
  "key31": "rLdDvkXCXUiA8bQrdcNX3eL6JZVrsFt3uuQGG11LyZnED54dgzXuMpRG9iqZwZwGaXUxPHAp95B751zxX5PNZDu",
  "key32": "3iLNMz6uDF4dmeZfDENMw5s6t2zz7cGSchPyUFHLRWhd7geuqZmBLoscLULMbQncb8FDHgjoVyjPFYMCZ4Xujfjk",
  "key33": "2fn65BXS92cBFyJvyvRpAEUezRemNWwaf669Hizvay3YmtwdoA2X9zXsDLh5cxMtf6m9rMydvGD29XKkeMpVtrCD",
  "key34": "2pJxecjrBvsWS2zJxqc9HWV43Tca1YedQFi4LQeMScePwsxQ3FW7F2zmpQU1HUzz3hf5Y9z1hkeDsVzp5UjSdaBS",
  "key35": "5VDneNQhw1UcSNpoPw7EyGE47RA7vfVNLTgzyDPpNob8KgQNJMT9UoSNsC9YXfm5ZUte2JAo2v9i3EReHBubC1oX",
  "key36": "5oCUJ9oegGMmVCTWPKLDKF6BUA6zjYEvyNYBw32BzchRbtLJLYZVbefQ6KpcrsR3VpNLrKdXccju8yk9bGFxVobq",
  "key37": "5hLwE7efjq1EfRw3zKy3tU1FM98NgPCGyJm7aDGUEwew2fBnVvTiALFf4XeqAiyMyKckQFtHp1ed4pvB6YpUxEcC",
  "key38": "2Y821N6SbMhgim78HWQMkcnkCZKxhyMDSq8AJLtnDUMeJbQZwq6N4QziMhrwL4NEFC7DSQXujquX1inExS9b9vwL",
  "key39": "5ELrVpBxs3ZgQ5UERrJSBc621oocsLJLoGMH9oGammMnWaZ3r5QVzYnWmDnuTfbvk3AoUovFXJk6cpgDTjBixotT",
  "key40": "3xVkGvNy6rCQBEJCVMZPYX6rE8RuqWrWBav99ardYMRoXFFdyRG6hGaWvzBN9FGsHkk2YbiBqQTCPafFB52nyLYM"
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
