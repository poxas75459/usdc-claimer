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
    "4hHLyzDgao3UHbco2KeMSorfPSXXezofoqzQ2YgxMMTCqtWNu7p8UL4YQ1uPwRMjtuNekCBTwQg9HpfBHtqMka5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RmuHRdpsT8RPh5JAbgYx6C9FHpHx3nNkdYAct1DA9ibQ7biiaq3EwNB4hYpjQfNX9kzuj4xHgZe4cqMrVNUcNZz",
  "key1": "KAhgdi2AC1eyoL5gRRdVKCd7XawYB82iHCyrXeocBgjJ5efgG4ZifAVXBruanszsZW9v5KmM2D2NZ6aM28cF8jw",
  "key2": "5daGfJGaPZXSrAQqArWXYb2qDYfdXRmBAKHVFdXEFpc7zWQmbtx1vbXoJ18ZWYYWLFnf4i79bGs2pgxe9s5Fwzca",
  "key3": "Vk4wp33FKboXpHtxKECi1gFRaNP77xJKrPcccfnHcx55b7RiHD32rFFsFiE1htEq42v1XBHJn3b5UuSKFRDzuPa",
  "key4": "63FWevkpuac6vne1bh1c7JzcNZSeR8YkSEEmDMfLRbTofeYSeqfgsKcvoH8dUTpuWyZCqTwuPuaUphGbLGW4wXFV",
  "key5": "NM9dcc7uGoWxH32tX17zwPWuLZnR9TE4KPwx6bAZXk6ryQQoRhWt1g8s9rhziCqYQsy2yRtQnaZaqyPfXmkqody",
  "key6": "LHvHNHNYR2wibAULYmSJHp1Hm5rxJz8Q4QyKy6Xjt9zRXiCTLwGHXzQXSDbWdPkWdsDCBy2h87jwVvrKdFgUsBR",
  "key7": "4nRusbPz3vmdaK7We5u5xEvyZDY9mJh6q3wJsVkEE8siMT9JkJ2c5KuSBfHAs83qNKyFoFGF4rjk3GCMjrWzmRaJ",
  "key8": "5GcJhB2V2xxcks5VQFYWdTjB6MiRzokrMKGLrhBdLnw8owhoBVJat8NE6aN4dDtVnnS3hhn8MmVgoN6SA93T5wZc",
  "key9": "3Ns4fPo7WnkztWR6LF4gFHtj1rFYxjQBK4uyqfx2TC7ND8c5t8DhNVW4XC3Zmo1JQyJ3EcQMGNp8oYyTL9JkhPGj",
  "key10": "5fPWdn7HJjWwPXoiPrrMxzrVTuAawZGzB2FubeWsJihmVUYdSKGXEVA1cLY8Vu5UZzH95Deo1DUcCNBzCML3FZfi",
  "key11": "3xWo6goiV9mA9KdCbvmatURMU2EgbpqZSd8jUvzMuchwvG7UxVFaqpV6ZjQcvYYrqjUsniygkNBaGP2fwBquegKb",
  "key12": "4nGAW6qjJxmTBxGdRkQTkwbG7MDbNG8Y7wac8GoJ2yv773x69uDfQBuPXhRh5Rk3s9gwCbH2xCYfvgSJF6c6wmG2",
  "key13": "5qrdFQAHXjc5Kng4gnYWfd2QgtzTBuaaVWf2SDP9XD3LtXttEiCvHc4utgwDt1pFWHnVgYJqMVih81AoC6SPNwRA",
  "key14": "4EBCsBXNRpzv7ByRasCPDVxL4mTcCZp3dv6YBFcCoMmgv62g7oeggR2uSCShJLDgYE3UmgQEmNpSPp1Hz1iH9Aoh",
  "key15": "4xCNC7W64CHVzf1APuTkjp7mJEk1Q7unZmJVdACCPSts49QP7nUtuKXawDRnBGtERDLCRt6xMEFZ3CScCB5mNxXo",
  "key16": "5HS9VfP6rQSSWhNpgCEm7KUfNV7Kr44RtEuFVcEXMTajoxJvt6fqM95zzDQPhY9JPS9cbNkxXXxYFzsayDvLTESD",
  "key17": "aSECCx3F2AfeBL2nJanH7kCj7jDVVpiGmBhgT3bauLCTCkSiyDrfPB1JzehCnY1Q8EnVrnsJhcjYUCNEbf69juB",
  "key18": "ReMCmjSe6HipZShZNudAtWxAfQZtYB27VSoQcaPfz8rjPoHeiB2jFnKHtkT2veZ4nBZpjvV7ztw7mETKomQpW2t",
  "key19": "4emmTnqE8DA8ffyvezQ1HtHU18B88mqG3ty8BnmxRZGydKJs8vmbExyeDhQyDmMD3P1M3KMuuNsHHup1L8Dp9yYp",
  "key20": "r7HmoJVskVW1dDdPEwYhJH3z8YeqLcWhAcCC3vpP6VhHQcW1DgfKdg7S5k6AGaGLGt3ERCMHjAvLJ3gHfRGhEPj",
  "key21": "64rPBomA4K42yN4GKj8x5rPnqiUpqWCeEU6jisHJwWgeqynvAD17v1dwrR1k4GLDYFqP9sw573vtw2TtnJWuyUKt",
  "key22": "4aZUhn5B119Q9LgiSzg7Sx6GdRmJbYidB5EfKf7D6NNso5wedfC2kNHsWPc1HNixDorSA54N2cYjmhmbYP4BW7Dg",
  "key23": "eRZZSpmFh17N4SY5ytsWz5eMiSEFdbB1KoL2MeDmxS9pHojYJHmPiLfBQiRsRWy9V64icvX5WFuKQCyJX69zEA2",
  "key24": "WP5LiDLvTxwy4Szm8t2yo9V89NAe7b4BpL1tC3rF1FPZekek6Emut5zgrR18rWC9hAKQB5kG27ip1se8RYoYEEc",
  "key25": "4XusfMkQRDxFUk6cYspuMSDYhZwznmBsxvJgS79de53zvoCJiSj5iVQYbeDLD7b6CQ5GygNne5yEYcG72fLPvDqn",
  "key26": "41e16TyczZjDvqkawfwVAZtkaUcoiPY8nYRX8madsgRioEa56SkFyoaKrLuNwsrMBYtoGRcRvRHCqKPCfq5iVUtm",
  "key27": "5p4wEbB3sai3QHgG55MRvvDD9MoX26GQNJTuzF6APjFgqcjCnWVFnxts6XdARYhdykuWftmQ6Xgx5Do1JowswNiZ",
  "key28": "5YgDGyitBfKkdCNSQsdU8tsAifD98oFQtyYcSV5QNX6AUiyUCqzNMWdwf7P6nMp35rSocQZ6EJFctSwvP84pWhgB",
  "key29": "4yyFdGyU4Mk9i6paZvwCWHjTMzZQCj9Au8wZxXxnye1YpTaeEKPKmWfzwURFGU9v7iUCGQapEsgGJfQ6jUzaxhjJ",
  "key30": "3c9mZEoGekKEfDVa6LdtSzXFXaKarcwCxh9paLbtvhbSWpNeWEYQoGBwaPyt6PRJR1AnvqYCfNU3SiNP6dhdoGtp",
  "key31": "3ez1tvdAyHTdAicNMRmxLrED7anbD4r1c6JeVodkpiZyg596v7S7WzYkDgVZB7t5H1s5cnh72R8PUNWYJx4kScwm",
  "key32": "58ZvN1tXcBWTnpDdtsFVHp7LsAzrvqhKVhZJeXt75Hmo1dN81GNMs3XCKZNgpANT5cFCrB2BbxQ1bSTPSFirpo2g",
  "key33": "4DDBHHmmYNoMg7HiU5MYa19gAmMtZ8DwoSYK6j7LtpL1MjYtbZATQvjkXgHBsvwgt5dHbLiNf79gRB87BhdtVcJW",
  "key34": "2eEBbGy6WVD4NR6vMh4XSpbJKjTLoupzjPn4xneB1FLaAmEwqp9HyPeAgm73PmTDtP8oZ9r61DyJ7aCDWwYq16jr",
  "key35": "Y1sLRD778Hr8BQnXF9EaNCzEMd2wyj8EAcs1hUyhHoSxD52MiwdGLecLTAExXRHx2492CVQc2Y3ejkv9CuU38t3",
  "key36": "5NF3NsJomy2iGFCvMAhmMsFV2Tme1Wy9bKtCBLb64RAVN3HeWBoAFW8y6yhki6QjR4tPW2mKkyPET968SfaeSNun",
  "key37": "4iUUbghi7WY9hNj4ZJumFN3XKkTsgjGDLGvQ4oS6yPD6dMnFouxZm8k5JmnZ6ocUyQHDVdc1DMv8z4697td6tLYi",
  "key38": "3FTJfzyCc14fXt8UzCYVd6AQU1cucVPmr3hFz6H9qKFDGA6BjCE4kXwheboYD5dDkVdeX5fZ2WsSnFTbzzCc6wbK",
  "key39": "2XbNFJW2U4t19kr7fsVRhbSrjbKhFazLEBPGgmoNbyRnZULUhsrv3zVnp9dtA9JiPMtAxNJb8DmtzsYd7euH7Mm1",
  "key40": "49d54oun6CXcwrqmrgcwK3g18yoKoEGPcx3gNP2Y4toEFUHkfPTBjJMTtL6GzvSigsZmfiTYg4pD5vW4vM96ysAs",
  "key41": "4geUsrw1TNTAdSVE9Y7fPXGuBuFGNbcoaztpBpQ3Ag7oDs79zyTbg3s7ijsZVDEBvZu3r69vphoRyPj1ShcJXcUP",
  "key42": "3cjcBVkVbtkMhmm7nh8PfWzpH57VXLxdmy5S1SjcgUHB5UwQa1oujvFzxjAZPz7xUEUTyWzY38vLabW7dpu1qqed",
  "key43": "3ZXzTYYFTUoDVMmuKsw6zso8rJTHNBfQrZav9NhCzdeW8kSgVHyvzMnCnG3xEZMn9Q1mkHNr9QdYg6ihKwjEVh7B",
  "key44": "3Q57g26o596F13QaFdRT92TX2tGdLPma23AcdozTJP1ALCRmg1KJHHLy2TKB6JC325sXux4dzU3Rt9y736q7C1Fc",
  "key45": "3y9t1sqxuGoAPqp7UJEY2fMMj366SyjFEdV1FkcukwKHcFvj9apCn3btuaL4kiPX7r9cy6oKfAnhrPWcBSn1Zfi3",
  "key46": "5mB8xN8TRddvS26JmjtfqDiJeEzJeC81LhKwuxwvmBASxvpZitbdvBEXe2X8aYpSNJMo77kBpngELZafUaJwf9aZ",
  "key47": "3CwBcfcukSqoLonAzpBhwLm57vVa7mbqv9ckdBe3B4FbzsrxHK4GN6NKjaww1JFYao39bb6QWyCRsMJNHNuXCdLo"
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
