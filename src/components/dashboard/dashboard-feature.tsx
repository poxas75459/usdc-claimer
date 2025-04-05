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
    "4DcFeaiCRHKGNvUDbEeRpUvbKDPYJ5NVHh3kRW2m1p35JRr3bCZqPnNjj4AzQhbNYPkbxVHyDYJsqnf9cAoZQzjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FtrEYv5HtwzX76Wy7wjruMNY5aoPbGKHCkX2yjH6yp4qLsRLU2wZgydHh9mhX29jNpvN1qs1ZgMZ9oR9D3dxziA",
  "key1": "EsW344swxfZS2PuoPnTCGRE8GCXCLbqEx1vssvX4iMWqgFRhkg6zkoMf4Bm7hRctmvvt93MPn6sK4yGr5BwbvFe",
  "key2": "2FNpF1A1YRKwoeL6SPshC9gL1GsCGDsPwY5hhxzLWufwmEVtkoM17NayZEQgvtpxBNJLkRocPcKUMwfpZAj3WfYB",
  "key3": "hsq9qNhiZz6gKjRipGnarzaAmenAJmx4SMHB9TAP9PJSXQrFAZ7snPbv8AE1tBfzNvMsnVtZ2TVwJuSrmkScYRy",
  "key4": "iqSUpuCL7wxm5wXjYxXLnEARjiakaoXqWQxfWQR8JbUo8Z2Z7JLy1BkT53riy2cf3FXHfxidLHdSf1zeJJED9Hp",
  "key5": "4JNwkbMp2n2YcWW6o5ji9QZsDh4fJoWwHtf6Sb3cCkR4UDZvN5yZ9Gg7QW124V4j7ny1gRwDjX4dPEgBMg6Eyn1x",
  "key6": "2HsiovGfQoKy8t1NeY2PokeLKe7SoQKGvddG5szfatQEQk59k8VH59DwYC2KyLwW289bHZVoaUVm4oiqekQjPfBf",
  "key7": "Xhd6hW21nNqj1xw5MnxxAPhzXDcVSeVT4fYDVynpwPHGPGydN2N2Jgc4UcGd57mA8ksBMuo7viz6SS5u1R5YMio",
  "key8": "4pk7eJA8RB9f8fJ3WZEiwhyVUTyGbQPDvrEzT9uXEGQdn1XcXYnqGcyRzbGvEpq9pDqTvixeqmvSXKenq6AcSCy6",
  "key9": "Zj9A6BJ5d6rUFKyHAyQZ9dtKB3aNPVAYMEHziZ2zzWSXfZwRd9EW2F1n7XEbyrt5Ns6gLx1xdovBFHcRrdMEk5D",
  "key10": "5c5ZjZnmLHzhsjZVzXTrzZ67BPUy2Bm6NCYwHsnWy9nRkgWBUzbecmhFp7x8yNEbRvm2go6k6orzB17aMg7EJQDx",
  "key11": "2T5vpHGbAgvNJNAUHd47rfJkmuF7qExCnpEMXY4DhFhNXVQyn5twQsdnjJJgEkgvxG1pFVeJYEypFmm66TC666pm",
  "key12": "Es2LyNUbBVaenBPMdKdvKZUQR71oCds5Laqjsc2WgjwrQQfnNAf95sTQfY3e2inWPhquuGBn6XtdSE98oKFEEc3",
  "key13": "EmZT5yCTkRBiVQbPBLqSRKeTZ7bLgzpNF5qnUytRBeR4KVC45qrixQKdnEfXxJKTKW3BRRUYNpDjTUzBwGfkpeP",
  "key14": "3te1YQjqp4PP2An2GrKkV3AaDgkQSYmBFEcb2Z1yyk2CHq9eq8zJ4BTGZUp42JnDtsfUFMWU9Dw8qv3i7J9DceHM",
  "key15": "YttovW41HEzAgwjoKHCuUSQiSUNTCQY8pgT6TtG9LZyishg4GVwC6wYPFDomEBrcghgY9NCPtNmCTzDAYPa8pAp",
  "key16": "4KXBpPfbwJfmafpZRJpTBS7zwpgPnCkwsi5EXAH77xkCEJ7KVCLV2LvZY6T1Sfderm4wRCMyhypbnid4AFfkkJ2o",
  "key17": "384cj3nhk2wW2c2ZutDRCvwudBUQ9MdWb9CTaQgG98ZMsjyhSLQUYtrr6TzXdttaL7UvNZi1JABkx8s3gAzFwHau",
  "key18": "4WnKCwbyKJYYn22qwZeUnpSqvEBcFkCCoyaQV22iy32YFRfP7ioLEPt4CzrU1ULAR7SnovS7xKYdMwUnvmqfNPJL",
  "key19": "3498F3xDT4eBCCdpVATEnHsYXYZZb1apTCSMizQVV2CRG92rNZPPTvBeJuKNGGrA2MrWgLnKEVusCgwU2dNwk46c",
  "key20": "34QvQNu4xtcxP5exx6Y363VAVQrNeXzzU86yDFUkzYon9KwWFPMTYdyoW2RQzxrqEb4LhUdcPaUQL3v6VQCVqKtz",
  "key21": "4S1zjjYjoQ2jFECQpxtppBdWkKfTvbgJWJi26M3tTjcU1oESGZAvLBxeVjE7vqrotvEzNCoM7y94xMN6grxUGQk8",
  "key22": "3ajbBNk7evUXXqUK7HPHRvU8xdbByTH9GX2qAmiKjdBfoXLqSXUvnAxcsmNqiqE9cEks1o2nFmnQj1FrPkVmk6yx",
  "key23": "2R4UhbfdEYxPk1qPBwuqvNUbbKgf1DN3YJwy6sX1tTHJPjXgTCjQSgdmT6uLxy8cBK6HQsFqYTnP3xk8CJSuGKNN",
  "key24": "3beLrEz5QNZkJkQddcP9Yw3N4uPfWpT4L3GrteqAtnLZZLLyx6PpEUhsEBtERn1pteUZth5k18bTKxtFk36gw6Me",
  "key25": "2Yz8tstEw1gBWZdBeJoT3pMRcuAgf7xHUh5WRsiRiKgg98UgbEQbW5Bx5SusPTQqt9euvsqoXUjTfZDTpatvJwWb",
  "key26": "5Z1oYBEmd9pJcBAC7XZC2anGzndfwHPSuFXvh8q3i36rQh5Xcziwdzyq11tVAzbmLBeQGhr2zrepnjRPABUb2YEN",
  "key27": "5q6sisBLmLTeUkeJ71aRPvUpb7ZTJ7ubAAKp5n3wLz5PEuheqyk6Wbm73x3ccQV1a5sVPKip53KxWJ47SHBbkgDN",
  "key28": "2fwAidqHtcFfkVH16mdvFwzCtPwNhgHYCcesHEQjdVSKxUfKaYV33wmPaCcCihzCH85pmpcJuPVd7mGMScAmWBGr",
  "key29": "2twyq7nBQoTXzQwqgGHSxMebai4pHMDgqBJArc6bLHBp4YVaRfsEDPxWLRbLWH8uvPruguXw7EZvHJww5sDXxFkn",
  "key30": "62419w4eCdH3oNgDPMRCNZMTq8CksyPd5mJjfnVaA3XQfcxSVYfu18M1n3rtLMMbwvZNUfDKKcRVtmgj12YhxzgW",
  "key31": "5YuFkXDN55J9RSD6e2JMx882GuqdTBbroWpYLco8NnTr9WxPcwrcLxdGFPRbdJrpzXKisfGF2iqs9EvpLiw4J13a",
  "key32": "5PQLb2XzUM6ZAffKQdfXH1t9QX7vwqK6Nu4weMpLHgTzQUVSaryBYNivZZt5BQz1Z9Rti769xyVqcuPLx1p4xWFr",
  "key33": "7bePpYQ7n5qQimbtGLAdKNSB66AFeq1u8yBcsaZeot4zmGUoZS172mbYT5jymqSxz6aHQtvvGUA6YyoUSD6j2d1",
  "key34": "m36hyewpCESeHM7MBTgM6YvqUcxu3iy9EXrvim6NdEDev97Zoba2VnLz7pQoojZhzEjjEWR9wj4yS77zQwurwsC",
  "key35": "5nWfrdxVzmx2qJPNmRYLrKxmLzs9MUhr7n84Bwx21mtmANJceGA75v9y7dH3sUtRAtig62Woe2qiTcdN9hY3HZgM",
  "key36": "3pC5SyBqvqnYLkj2MTSvHkKVKKdAg7qR1qg18DhUZ4Ufyg4f6MgQeNkqKPfrJXY12ubhkfmQQSARCcfQF13Xk72B",
  "key37": "48dx4nhetkErK3yfoCEG9cCCb59hEfc8NiQPsL4rX6DoqsuJVDJAGNDK8pcWZDJzznnwwU7yE7GAa9Xb698jk4p5",
  "key38": "5cEA1ketccNDFxRLrJmG6GpjuJyYrg8fEQMFw282fBCxRyFvSk5B2Qr9weKxw47U97tum2aQhAeV7Yzbt4ieZHH",
  "key39": "4AoMbbQ6AwBDBXXQwFk5aPUdM5HwmV3ZzeLE3nuoynfS6mHEAuVkmu6gV5h7Nrzwnct9do5dwvT6DZCMzRCj54DU",
  "key40": "3ddtz7iPghSirbAFFXtK2hyTW2yTnQv12R3jfguBsCeJNhwJyvvN3ZPXonk7KLKqvUPSHJHHVzCGuuT6za4QQNKk",
  "key41": "2YVni2y2Jm26vxP1n61LbuEzXrM3sPofm8XywxweE3vCuVsvJZarRj2HJPg3d3A9LXHASabNGwJsby61TMQJj2Gp",
  "key42": "2Sf47arxLadCYutcnuVF1N8p8XK2Cw7SPnRQYGz19y5qXNaUMNdRT6aQvNAqnrFByKWV8NiSgVb47WjUooVkFaFL",
  "key43": "2jVSMXpYTuiELX2DjodC8m4dSf2HkMXHqdQNB1rL25d6BTAEoTCqv3ekUUeHMHrxN74t1EX4JMuWwKik4o3kuEYg",
  "key44": "W37kJ7ozuySX9KcjtkuXqeB5bJqyhcfXNSzwJDXmiVivvyX3vVxCNso1q7rv9pQJNP7xLxXMSL4qYqM76rZd8KZ",
  "key45": "4wH8FU4Ez4PDZ7iWU1UGr54d8kk6kQHZ2AwupBTb4Y4jkSazhvkxECX4S9LHpLsTwNioLh9KU2ivjydg8GocYFfh",
  "key46": "3P3oAHhf3UVi6Gk4vtGNTgkfRDPzbr2THWpBdUcku3n4GXRTb3puLY21tEirxmDbfzLV2XESzJMTYxGfYAtnQ3N6"
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
