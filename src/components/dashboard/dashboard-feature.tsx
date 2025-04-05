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
    "4dPA9UngnRjqGVxNL9pTCnLoiLUmuucXJPW9LkjacXG1wu5wn5nR14R2wNKGjfPcG2iKcVDDsAP1BioyMro1Dt9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Ze4apmPtH9dBaG2jt4SuLu7iAwzDYVgS6pA1cmvqSvoS5jEsT2ajRgZtx7KX3HH14RkDY5FcrugoQ4s1uszgPc",
  "key1": "2eSF3vdyeo9xvWdVNPyiug8HEHALRbDcUeNkVR3Yeceb3FQ3TrNa56Kx5mhkHuxfX78ifejoq52qsLDRSFctomUC",
  "key2": "3dwhTXXLbTNzpFztJbceoSCMqfLWCNaXtt1PRWdTLvMtFcUjswQGZVGJL5HAkTBJ4uAKxBzSbhHkADZJ9QM7wwaH",
  "key3": "2gFXMa7D41eD9vCopc3SoQfsdNZvpMom6eYctwusnyge6qmKArT1ycdjWRuk3u35zArs5pPXfDkJnFaY7uGeq2gz",
  "key4": "nZVLyxrxmAEFTo7pv17pnFKpEWx7XpdMuTZLQ9RdJxgu8Wi6NuPb8nS799TeVZMBL21kKLSqRZC1CouexfJdrjr",
  "key5": "5E6LWWp519YtPkPpJjx6uhcSjemsZ2kXdKqGcyef8uaQMRSgpamsxMTEeQ3RS1YzbRRq6dP2KALpKyCrhG5Yd6mE",
  "key6": "4HJNq31qgn3DuPBQ7E7EGTbh2m1XrX1kEzSzJyDbCoRgTyR3pD6XP65XyoL41YazUs6cabGtFWxLg84FEm2QGxS",
  "key7": "2KTzhKXoH5zFH6u4WimSQkC3PovsPrayAuLq3yvGucCAtZRbgQjuWMkYeYUdNwFKssd9RATJvyyAVYmfA1zDwM5J",
  "key8": "5W3Nfn4P6NU2WoLfLj2MzemySq7W8YP15jW1wVChTeWEkd1Dn8cnYCjdi4RX3DdDgAikDUhAQEGQGYj8Ankq9DmA",
  "key9": "YTtCzwqvxrbLFAmvk6y9rXaT8vFhmYMjUc6Cjhr4Y5RQvYXXbq7rJk474USGNnwRo7jBG3pxjgU18RbzcijwGed",
  "key10": "37twNk3JKZp4YoV3iVxdTrGv9QKCu88xmrxoFgJeJyuJogVAQwpGQUZ1tscWRdEbCxPVKRYmug1HK9jLP8K6SoNH",
  "key11": "2EoUNeHR86GJT5DP2z7tGG16qeaYaTeVekg6zL3yv8UJcu1j7yrN85omHax8J4rmKYJwwoxFBDj6z1K4XPjY3C5j",
  "key12": "8B9ah3Pw1PKthHAtEztRpng9HkWWecy7yneYn1rWycLyVJeMSFGdnrSrd6WaPzr2HqA7qZZrFUQ9v5Y69P8Qydf",
  "key13": "5vS3uE9bW2jDQKQ1UNuhjJdVgq7tgVgfCNqhHFe5B4CW3A1dkCCCYe57EvKgpUQgkt2oowwDAPrmegsoQdyVskZ6",
  "key14": "3Ue1CJoQoGyBLY2qMr2fSW2igVvRQCb2EkqjRfGFWGiK67Aby2xWFGzNZwyZMtEFQmqX7npeiNr49KkniZgoxN5D",
  "key15": "52ucExUtczpTQAfSzyzbybvqgCzdzKdKHrfSU3uFBeW2Pddh4dq6jKweJ9A6dWqBXQoYTZuGBuLmC8EPR3459QeV",
  "key16": "4qHfqLYyw4yjUyNj469ghT914mbEfswofUyUpMUQJV4L5K2KSGL5TaBbwLddPBxD4akGtKxQPnufQHtFRp3vSZmo",
  "key17": "66nX2cFZmKsSCDMPgPCC2FBt9JVA3ypLdahAbNiyeTAKyZraUjoTW5mzfkzXxebXsyBFkaAfe5r4Q1PEM4CNUxji",
  "key18": "66nNtgjkyNa72JFU5NrSEcu3pR7aGQf5rWf3dy1ibnwhGbh3E7Fy838zfjSi9rCgaVmHsV2hx5boL1MhW8WYjVqq",
  "key19": "58RgEb8KTa9REpptTGC3qQeQwp5SfVCaAK7o5EDfNk7aee25rDj8tz48s6qtvTyzmf6VNr1ymeZQYy51nDLuoAbB",
  "key20": "3WjUfc2KGZ6aoHe5mHvrWKimYtay9J3yLkHDrTsmSdvqEXdMYvGqwBoV7K8rE3ZKNwsHFGoS5TG6QAXX3FjxikMj",
  "key21": "3DxmY71mazPcbhQsZ63hAFZGm4RTA5VQ5z2UgJiQkSm5hEHZtosgwAewNxt1QWhPwA1SnrKwgqKo4BfPyc72cFQd",
  "key22": "421GpKUmCN5muM8sn5F6f8zjjVZhs3t9p9TSCJTiYn6Yd4StBGyAfX88fQtsKBvpC3c4EJg122txCzWhEyCGyxdR",
  "key23": "3tdrtLmpR6wmzAb7Q8ftMtpkDnrhxmLQsHo3zg7A6WkCQBfumim4rddRhMWUZWbtDNtdZbe6uuEr9qAS1gVZXHL4",
  "key24": "ABVrfXWhJrn4CzU8JodDw4Gg2KQtXQYCpQ1yrZNKd22bwQjtDvucG8dzYrZGqkez22Rn5q5ryrsaFy4Zv36ZTgs",
  "key25": "5Pqdac2FZK25jy85e4hvwR3KHz2QZyNaHvhsDeADDou3XFN7sJXmnqxoQbTTqku6FWX9k6xki23xucSi8bWoqGvi",
  "key26": "37GF5g2PbjCcEoAPv9kURgj9gtuk99gfh2DmcCkgw7oL9Tkg7oQBcnndG997zcRKbzS5ctnzVwSdBhhZPT4Vi3c",
  "key27": "5xD5vPHgjdYSoegxP2VStx37QXcJrtFY9BLfv1PBPBMUK9m4D5ZfkiP1LTaN3sJFCE9rkJwDee5vdBHFMCpzSEtH",
  "key28": "3dnsReaXBNLNH78f7gzUgs3xwvqBKoxgbgwLG6vdsNWCayfM3mUSpHM2tUEd16bFQuSLyqh2TF9QDsdm8HHHTbGn",
  "key29": "5o1wja5D7LWWVxgU6bR9NGpXs2fRmrYyJ7ePC95zxVifYarAuRKjxP237bPindHx4BrVPbsdUekCcnFoErvp1yZc",
  "key30": "4jH7PzL74HUht7YseUTF4kLWuFCvpsBGh5fuJhtP7m1xZz7gXdJPjX7K7kKjDkQg9GrHuZ1Af3UhRiBe49GgPAWa",
  "key31": "3C9fkDysMPyr1hYbvtoj6HYyST52nFtsyFpuvKzjfLbkpWDQdQ2qyrRQ1MUAWetEzDXi8sHeGd17pmMdTLSNch7J",
  "key32": "579XNg2yeMCwETg3jxGyu1aBDpSsjdJr6TnFjTXXCMnUmNN7zJCGffcpG6PGX2asDAs8h2puwxK7Bq7ZRAzGt1ps",
  "key33": "oiGobmWwDkyixHzyBB3WUnr4Tsgpyxi5tPFQhAtvugP5fSsBEdSJDjYe9CJj2jv9AyKQYAdEFNzJj38YdSerjnN",
  "key34": "4JaCw99EHMVuHQth7rfzLwkX6dPLc9bBbZDVnG1TWs7CZgx343WcYSwVj7jWp4aMPwuHtUk8db1voe6fBKHdNLHY",
  "key35": "4wdUFSpg2GNQmJNiXGvNDF4QjKZnSH6BDv2SnbByp2mxiLPWBASdMvXJXyFZEhfUCTBMcnRB5gZY2CWyR7RuSBrN",
  "key36": "V7iNHDWsuBr6g79VxsWMc9NHCsVXsZNBkHhX1UeHU1xFpm5KZG1tXSRMr2GfaxMmZf3D19AzRHbJrbYtMRKztGe",
  "key37": "3CcobuBpHTarKkao7kKaNgfEtuVBnJsHgqGY4p1rQWGx1UKrUkMyGV4x2PVPkTueEMD9JiiZPrCkfrDLj9X1umq1",
  "key38": "eN6SaTqUa92kX4MTkUjd1i8Z76AyWYWq2eUBuZiY329gQSQr1n8sR4XBxyWU2u127DYHBr5R8WreyG3nsnJKVC3",
  "key39": "HtDcjyid9V5abXRf4aXhRN8RakapLzR4cQzGPHu8L9PjVN75zQAf3tNK3xXg1cgN641s2mE5edLnocbg22L4mUz",
  "key40": "36uyyXokLHSysvGqBgx39zzWe4Ti324V82SMN1AjPpeEbtWRN5H2E84hoSNm4XsNRR6dg7CRrdZTEU9UizzMRSye",
  "key41": "3GUhweWAi6vULvHFGo3J62dxHVdv9VjWTdAJDoiLRUEVz6A6QwaE4UJmSmE7n552CTSLzPSA68vfEGdQ5ADxKQzk",
  "key42": "3DWWafiarpDZGBmV53tp78f7Hq8fxRiZrPC9DP17NMdSEicF3PkxwC43L4dkRp1fp2T7XMj91US4y4vgP5bNm7ok",
  "key43": "2gXTmsWshTnJV9LGwDKVeWvyaovdo9S8Dqs35cjdKjUQKjPVdEVv1rAHBh8ZCJcXRazSgXVbF5PAM7sM2HHPzyHK",
  "key44": "GwDxhW8dSRjbqzrdWt4udBE2qqghuo1Anwjy1SBfBTmPGUhsXrHRvSzDP4LFeLBJC61N6i1rwgCTpMHQii4w6DZ",
  "key45": "PJWkCY36smJSZBMynTj9mAxXkaQra9jdATBKVvpc7ruM8EnGyWa5HmEgEnkV97xJMnHEnhz1YzwrsTFMsQGNanC",
  "key46": "4atkuexQyJS11eia5qMyrDVVryYtJfazoiUhCJUfFfjQg2T1PQjhBS8WKHybfAcNohDBW7pfovPf9MWyZ5pRWiy8"
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
