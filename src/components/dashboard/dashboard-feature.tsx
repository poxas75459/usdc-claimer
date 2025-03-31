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
    "5drHm4jUKgFvrcTqZqgDDUMtGAFYrKYbuKe95qLbMddMMSaAL4Xc8JEpT7TVgn7qNfsfDGRLPSJW9gBJ9QYR9YE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dK9qK4Libh6puyMg4jUbz8k16zMauL88koEJWSGxszG6kJnQpinRWaSjxs8WpVCi7pv95wDJnM7QjjRG5yeV6mJ",
  "key1": "45fu7b77mNnUy5UU9sDJqsAGrcWniTkG1cRNS5VmAKq2uKV5SEx3qDLnFNvpF8Gaq8p2HenPYVk8Z53Gkmg2pyuJ",
  "key2": "5ujzQqrjFBCm43HhwYduaA7RUVmt3U4i7ktTuEXkMPKdoTLEJZhyxhUSBcRtHxs2g51xexuMz1arntPnLtxocVtC",
  "key3": "4PGFf94vJrwPW7sf8BnPUXv5kWryhdsygVXL5sfiYBtTiD22avCTXaz34Lsc8Axfjm2fP1gt8itQHFwYNhUJvoRe",
  "key4": "65dk9WsXv4tqLNnfyNGA9fobBBpXUaWJMC8buGbmqJQdZcAY1gyfUPd7EYd5jj4sGKz46iYiSd7CP5QUmphjcMTY",
  "key5": "45pUjJDKCAaodxsR6EmhPQF3Hd8iBzNnTTkzVmMhjJNs3yzkdpGEHVio5x1LwBDi5jcYN9oVySLiasRaX67RAVTZ",
  "key6": "62s8ZdynmUwmUxnSBCSqzdsxBt5ZnL8ozxApiU7ZeVmnw1dAHZ5Kgvqh8mFoCLLQJ95LtBcrYC57MxT4FDn5yKzr",
  "key7": "2FcbvPgsmMtP9SuxSH2zbXmp8myRUAiM2vfxaxr5TG8TcNREdAvme776PGAV9hNLHBgZJ4PionMbkoNgAz4BuhQ3",
  "key8": "5VfDxk33kyhffYYSFTa7Kfeec4RrahcVQhJTWaR2PEQ5WBRnJ5sCqt88HzKwjvUCUVpTg2gLdGBNfvJj36W6eYs7",
  "key9": "5PepSXNUzqyyMNCq7uRgeTV6bidDRKX75d6AYsEBqxGG27Kz22uW874DvLyt52AwSAEStbQ64oRFQXvnuDfxZ4se",
  "key10": "5zutriCkJYp9hPUqEe3zXnGvZ1ocHDGrsNJLGcy15UwREM95wVzs9uV6JVzg7SQ2yvnbKaYjDBqjwohFzrnYexKA",
  "key11": "5ySo1szyNxqd4PS5DRX97EUWCjiRqnQ5b8ABQFekodDVQnGtTYdRFpHmK9BjHFJZ2agwfZkynCmMNYSRT2FZUcJ8",
  "key12": "3JYnEtVRHmBXKaghEw1sucws4PuSi9995ExfGahBTGgyUnoYN9CktdVfziykGRabnRm6NPwfEihCpjKNnw51Dtjn",
  "key13": "4PFkw2q62cYghswrP6e3QhyJBuzqCSzHSYLJW9ewgKSiE7Z49hxHfJdT2Qm2vVqXCCufXFsCqRYBMQCdQBbMLwpR",
  "key14": "2Bu9cscE3mMR51ktFRTii8PB5T9rQy2kByk31B5wz12WEvpNX5jRppps8urpgzinBpMM9mXDbdVvx6xHPcJtkbzN",
  "key15": "39bb9hqkaM4jyACs9gJNr5NY6kr92hwr3tYkdWzhoviJbjSPhZVFjdZyriknb9j8YySygN35nQYKh5sCX4fJtFCM",
  "key16": "3Gq2ZURguJiyFvCuFjdRYnYu3c6pSPoT8VNYY6Prk57XoPd5hiuZRNWxGwPZKXyparzE3rrQpJgirjvGsj8CfpgZ",
  "key17": "47K7bFhTpkdVPaWcNZdaiEt5JXzEEMzkJpZzqDjTCSM7ho2A56Rxa2zL5BYouTrcLYpTsCsUMFr84wBV3RSCS2BU",
  "key18": "nUc7StH49cQXBSiwLrBH9deFNsdcmEB5h6ucWUEMV6oHFbV4B7JTTi5MQWTYmEtKHxUJcrugSXM56vnR7qpz7d7",
  "key19": "29RUKaLEFAcqoF7zDmXt18q6ruLwfdSsEixAaXTzZLU5Rst5tTMUEFe1256tCV7qCNY3QyrN4VZV9kkLULnEFb9t",
  "key20": "2oTymRRiHbdtT8nwJw6EFAydTD4vDTzzmV52VTDTpJdpACpbursQTxEJohshwiX69VHh2iNG2Vt8rThT3Z2Cactc",
  "key21": "4PSdFbuy4syNW2y6bAuQ8hrVWe5rZM88icEnQLRfRNFkUMdeLRDBJGCPKLb6HvpfcwWcKndwcjBWWA52XJm8hi4C",
  "key22": "4zJkwVNMmFXFLX3WKBApCsh8AyWrSbsb3WHCjC5H5DhyCnGetVZEepN3bHhCX1FXo1u21SvQYfTWUKXJsSNDhaH",
  "key23": "4TBdVvA3q44pqFZw9jVcUsKT4UbXkp3KHfk6yQNdNGHPLsT4fBWuAyMb3xhcmy9Pz8FeZ5JgwwtKj8eMBLhzK1Nu",
  "key24": "5NsJbRWYEMSoDGwHgF2tPw56Jw8sSD1xVYoTzo7qVULKoefcSvQL4MNMPY45ZTgi3C6W4ySz45Chm9LSQYTjHuYa",
  "key25": "5jRK6bebgSNWhRy8vZQnQdw3osrEamiswkjcBPPfb7ri1kRJV3d6oKz3GU4x8uyoUTYJ4c8zMPAYKMfg5QpLiDYT",
  "key26": "39ZCFphNEDMDaKeAcDusEoQeik54LMHaUwUTVzSbB7nXsp5T3q2pzrvksDArJaLZtXZRNV6ab62x35CGmwSn8H5j",
  "key27": "2Sa9FnUqZKqWxG15cuwGXNMHVgvQutKpFcsmDkBsYq7AhR3MFbqsWxWyYSz2Cw9YRdBfdF52s84H86pSjSAZLozM",
  "key28": "4JjcBhZAk7e6i27mxRKESrAWXc5dTqmjLXVrfGd29mAoBYfqGBPwYycUxfNNW13j29mMMzxRjVkmi6vNrUQyXub8",
  "key29": "gDoDCmBB5Zs1rex57G5jbSbGt1x1b8pkyiqKpi9D3DwuZCdBB2cHevN5H9zrjZnptpwdmUmFWUhFKJYdQ3xdK7u",
  "key30": "2vebuaZDfyh1pPs8PJQfCwb4BYiunE6vGtsijqu5aZfDcUuQotYmvi5optMpyYmXBE7PH4B5XC8RFPnYcQp5Y4x7",
  "key31": "2ZiVeDXS4k3LcWAGkiVFawXNsMLhpZ39Qz4gMmSHjYNEVbZZmG37f6DFq6JNqFGEryNTAGDu8XpCBL71CCWU6F7M",
  "key32": "tqBxkahqHqx7omK5rHJcUmQKS6Z4HebyiL69s5bJATzBZL8Gs483yFeNB1eyJ9w66Zfm6zZ35RXN73v28SnWW3c",
  "key33": "2jkj3D8MGx8ocQJWRDWKhrfSz1pZx5xuRZp1AEZ8V1U1KSrf6MWQedsCZWAsBFPVGdwGtcx6ukzasdHpfADgeP54",
  "key34": "5nrkv6niahdrEHnAZe55YsedBH66Vqv3VE9rZqo2QnBf4AEtHrBQYtigDFKVQ1wXWt487XatyTsc6g7HzMtwyJzP",
  "key35": "4MnKqp9bThK1bjhshxhS1j65qRj9fuZoq7WJaaJ1DoW8HfgH2V1qSW4rtQek62T1NmjzC3ftYtgwgkzresAnXrv2",
  "key36": "fxm9f3QZoT9ibygS79T4vTHuf85b5xuP8a4Czas9k7ziTHfLPh2ipFRmaS8T8e9KazfXWowSUjX8kfNz9UrZvmw",
  "key37": "RAmBXdMqzRBe4hj8V9rKdQAvAGBcF4RBiquzAnV5BWhz7L2dYmH4xbJBYeLniVxWUKpYYTQqnpeWR1fLS5WTxyZ",
  "key38": "3V44UuYgdENzs7y53pDDE6y1vVEyUrjvzBxKEJ6pzXxYsp2F9qPCZoreoWXzA6j5coBYTpiyurdvaRvDzqb4s2Zk",
  "key39": "3BCKWjTo3bweqXnWejjd7Nt4oc8oyqXp3dxkuqsEAhVhntQMyoQvbWB2H5t1CJyCnT2CQ62UYSJEfcHd1qeweAkL",
  "key40": "2C9phR1QcJ9ueCgfoCSpqsTNcJWSnYmLH5X3prhGYqwJ2AAZhzKA8rCsgpn1Zo75JtLYPAhaWAUNtrvQ3ecDfSw4",
  "key41": "n662MqREQUy15Wd8xvTeydbBLeG2ipVM9LaUSh9gAYgmSJ1mVDwy7ewkBxvVHhsFkVS7ddTQakzsnDdXx3LyXwJ",
  "key42": "5K26fVqTcHsFMJfUKgRFMgos2dZ6zxSLkPLURodSUgYhdE25HAGYTsoNXLtNCxgCTcyp7k9PaaXAchevmPeb1VGU",
  "key43": "2k2KNzF6rP4kkWUY2JxTLeormiYhk6B72o8Jv2x2Mesm66gm3uq6WxcRrQ7jnoQS1utm6qdTgVCeN16gGpdFWXDJ",
  "key44": "47TMNdARHvdnqLC1BE7mLUP7eAXzaSkbptX3k7QoXwEQTG8DHb8xBKHSFduXyogiGJjLDkd5zpJWdUbySHSguwrS",
  "key45": "4BCT33KmjHHBY4CgHsD67zKPForLKundpxLacDqNipq7oGm6NrztgNuh7ypnBKsJFGuPNCYYLVHAHDwvScevtCmj",
  "key46": "3BN67odRCtK3W629YyUN7dVBHggPa5W8q6GAZ9NxuArju5hB4gJeDiyzFS7dXDUXTkD8x2p49BNkj8DtkfGRBqAU",
  "key47": "NWUu8jZBCwuJxduQNsmcMHEjEV7yAaL6cJEvdnKt7pshnrJYzsMazaqtnL1tWZG2YXWqY7gTEbmAfEhfSQ1dDK3",
  "key48": "62gxTMhMaTLt4cRxFyBJhPNM5WmwjxR3QTgnSBcLGXVRjhtqrmtsAG68vdjs5ieyerbHpkXTbFJKbdogc5vQbThN"
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
