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
    "4AcpKL2donSe4P3r1U1dVomGtCqrRPgzcMbM3ztmy7XamHAARYiQcdSeAsVvHCGja5DGjLCrHdXHu9whd9JdftD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lta8NSdkZQpYE7x4h8zYMGf2NY6iFvJEBgRs26N7c5zmkpQe6mSKX3wmviyDds2X2ktGPuAfikLCHhM95M5Bpr1",
  "key1": "4rTHLg27Vb21WdyFXxuqfm2UpWzh6LqiKC2rv6JRjMmW96a6BJMCy6zwiCyYshx7X91uVv27443V8S4RAf6L7QXe",
  "key2": "4ryYy5wvNvLtdN1ftZxZUZW5oSzdDGm5aBSXZeRCqvBDKzEyXncLpAz4KXQfkNoY3sFV5n4EPfff5Z2aqAaes9Yj",
  "key3": "2bEY38evuw21oyqPHVmKieiB2Rr9NA1MUk73U8vC3PxMSEbo38GKNKGiTXjKrATUKWjJhCbvxdcYMeGVjGwXTyGn",
  "key4": "XeD3dJ8AE32ERL8Qj372RojGQNe7jz8mZAyPneiCwjo5BRkk3VmbF83hyYjnLG9rwyFhqr5TBRgpQsop5D1xcSE",
  "key5": "5J1psidKywHyNgGZ7A34QX6WJ1xBiUGiRKpXqP8nBHEqWE6JRT91x8Wpbce2HKd1EZ2owyQ6cMvo4cr5rFZgvA9R",
  "key6": "3ShHHR4hah6abgTN9iqCrjSb9hoYsGtKCde2czo97dPMbQDFL5cN6HazSxa6F54cwpgMvywjbFM3wi3GMQmba5Pi",
  "key7": "5k5uiotw16gU98KYtevbjviFFdwTt3JTVd8bMfaunjMu8SNBUnK1pFfefA1QGdiK1PyuFTgZHewEQMxYZhpEtdJ4",
  "key8": "3AHtT1MGQ2jaK2dqzsz8jd4ro8e22nk8Dz9hEQnLXQ9vBHLsLuLFaKA9YdSbbXXZ9jSgi8ebLbC97Uiu1fyZnLo",
  "key9": "4pH5e6pUvDpayNX8zqgXmZXC9nd92wh1GZJynhxtqVGgdt4K9PsxX1rLfeJpMqBjpobVPSL4kzN5E9sBtWKKf9Cb",
  "key10": "4ntUXHjS4dxNMJo9NTG2xgmvTFLDKMQrZbQj9jM5F18fi7D1D1NTw2xTMZ54yw8YK4NRw4n6JKu3s881Ke6FDKJj",
  "key11": "34oNDzpmF2VtcPCwBbJMooB88hAFtwT5bc4XCHA7GegnfxMnuV6jaKwmFGMvAYRbGSYwcsbEg9dfaV4bnovaRhPC",
  "key12": "5hJSJ339pMZKzexViDJsPN6fRYFp4tpdzUFB7krjF2uy2qeRuEeRUYNkHbDN6hagsUD9VGXn9tZiJg3VaCzoXJrt",
  "key13": "2Gpa3gWD6GvHfYHgapiy8U5aVKEnjhrAYBxMDrZDpzwu584UELA8SAo3WQjgFv3yLnT4G9wU1UnsL7imzCgAj5SK",
  "key14": "54nDruu1uzRANuaDo18ELu9QNCuRJJw6PQ5Lh59b4wy5CzQ1MKR7kXjediS3L83Scs3AJTAsCYEaRgAYU3fjGuML",
  "key15": "66SUP9wrCfR8VDUy3gezBXKFfHp6eEFakzcJZcrea9anMmZjzEtx7TzF5EycyfhCkjpy4QpVX4V8if16FjXEWXeM",
  "key16": "4sKqxhvEW6qydj9a5VbCzX8Z5pS2rdVpentBCjT4oSGWEUTfYB9toFh9RBq9AwUfE5hYxfTZiv19Tqbr2MykCMp",
  "key17": "24PN4NxLRbhtycCwCTLuLbSp7AEgUnyTB5aJXAkqJxL6Z4voxZQCC655fo6mKMbqajSdMuijudWt8n1wFu5WnjyB",
  "key18": "5LDFtBvJEWopRN3XULH23jWTTtwA3mLbK3AihWbf1YaHWpRUbb6wTNR77BZjSnWbQWbv87RJocZaStqDXDzrmjm8",
  "key19": "3hLEABTfj21Ng6aNZVew3v6toFMBUN8Nj2FRaAmM5wrrUdDJ5fw1ivLmV7jVyGu8AAEDvXAAN5D6cmFFukWvSwJn",
  "key20": "3GQKo3Z659rQHwFAGuu47CsC2YriaQ5yN8UxWdZqefQ2rzXF3KoxAH6qD9BVXKn47ipfP2fYjhr9BM6evEr8emPM",
  "key21": "nD6S58hM91VrCL3N8FgPNSCSb3knTNgEjEpHJzx7djFcLRnP7FQ6fZHyfkmqjdC3QMLpo6KqGzbSfkC5kB34PLD",
  "key22": "34ZF1DofqhF3cp9GpXc7Q53Y4jiWVVxJkCpLtaszU5uWtnkhRzmyp1ZVRvbQf73EA9AmD7jjBXQQqavy5sdtDjpU",
  "key23": "2N86jhdjz3Ept2sQ4Xd8XJk2Qw5mdAAtZfmA1pqonghVWSEft3ea2G1cMs98U1xh5maNABmEtgQatCQ8M9pqsfJF",
  "key24": "2ck5iTtbL8WbB3ocqLp2kym847LAbyHzGLMZix93mVGyZCXnfhQog7ATuHJ5BFZ3ALb9Lpm9GSoMyFe7GHndCEzo",
  "key25": "2r4dNjXaeJW27Lt4oQ7Kwj95xGayyNFBfwbmdMmifnZ8PTR5LGHwZw7NjoaiWnP4kR6xCpsRC4wjwQ2gYBW3kbCB",
  "key26": "3JxiZd456UeMWMFoypLPEAAd8UF61cGH6t9AsmYStRABqAQ6D89t8nMdTQnAMVndUjZVCCQsngxPWZdZHCWWZXB",
  "key27": "4Z7X6AADHaB8KaUzU4NbwDsfGmdjJv2oNFMC1oEugqKpWQNvkCufFLm4Fqqy3ashoWfHVt4PJAEbrCSLLeffSw9Q",
  "key28": "3zGBWbS5HNGZ5W9UA5zkupPnWRc1JeGWzk3eMxhEL6vJja4C2RDSncsmtefou2Do2PpGPSwqzPZsLaEnJJwutD8X",
  "key29": "4ZZ8CNNPkpx86aVTaZFnx8LtMA2XmdW3BEQUJC2KGwevbEXrmXgoVx9FpwFMpmTzuLuPT9Kc2ZpZh97P4QwvDRMK",
  "key30": "5pRsV1dNZ9S9QAy8m7wZyC5NgpG4PGLVabLUfprEcM7Pz8SSX2KYVD9PyaeZTL9QoceKxscTKrmY4J2K8UWDyjWQ",
  "key31": "ymkqPqiqf2bJXKYAtKvrAakocDu4rXrEwyKnz5sdjrnjefMHryzXHnCcNhMdhZxMTmYKHacEDnvLRoTnQcacVL6",
  "key32": "SpVmaDNHSwrUXrCpF3xdfwQ9JzAtcMTvM7mZyvPfodudS9hxKzQA3UWG2T5YraZWcfgtLWMPSawUFRBK9WPLUUX",
  "key33": "35miimvWQqvT2umvHaz9XsUZBLFcdQMMnvG9eJWz83Zc5GsLwHpeMhonbURvFytZutjM8bFpUeGi8vqgztGtCB7w",
  "key34": "2sRJyU6QAQSjtsTHRiR4b8RXd41DqHYPpr1V1RQQgbtho2UjyK9Wf68RQJV7zFk6TVFkszzsUFzjCvQn1Znmf68Q",
  "key35": "EX3vNfT7MNc4DMUrfNWnBi8GQX2P34fE8uC8K4ZMsaxUq7HVQwJarjvi5qwZrQaVupQRXApb3GGEdh8Rti9Ky76",
  "key36": "3sokwbPr8NXRHGXxXbtLAc4c1FJ8KTqxLHiBFQfFUifiQNSKGWsUgCEA3siSTFgTF5C8je78gDCABLd6PDiC8okn",
  "key37": "vXA51tU1SEuwcoEurpEpepy5oUo9oqQw7XiFYFm5Pher94CZMfRLvbh2ZQx8ALoyVYgSmBTGkoGiTs7EgNrxcer",
  "key38": "L7JJmgGm2JwrVuFpEsKSqHEo1ChETm94PD9MiJNXzhY7efoP9s97cYjwr55uPJZuEKoADvMpwcPwMd8aVgrxicC",
  "key39": "5y32uTZh8dDBWgeDArMbMiycKyuh9qnog9uMRvosSh56UmtUngocBDM3t8mkoxbqYGMgHJeVTLPptEqiiQru99Wq",
  "key40": "5Tt5ZidYjUbwZ2fHzdQYeY4LBvuCPMLff42CjWd8FG6bbqG847qTu71RhkaX8n9Jhw51dPUXZC9nUMwsi1uRtcqS",
  "key41": "2Pa3BZSuopivh7DKDLRZdydXbPmcjAaU6Q5THBjDHVSinNeEJ9sR6XbLHCgAZ5U1tZHcyseNDZsbdqodamd5tcMv",
  "key42": "2UeDWc83ArcnTTR4M2En2biVUjrQ42MAfmz9rttq4UsCyg8dpQmMsjYDxjGtRea4H7mcYsxgsGhYtu2j6DMf99sB",
  "key43": "43WDNs5q5duYedVHaxk8uwVuno2nWPJADXnUqdVUn5yfrYCYaf9rRd7ZUE7LE7FxTv638n2MEdWqnRtK12XqPohJ",
  "key44": "5WWCSTCyXPbVPQY94YXs6EaDA67vVXyXfdoAUBu9NAZJoPHDiJFvzp9eS8W1nFiTwfm45S9PZNDkdLpcYXYmxFTZ",
  "key45": "2m61ipCRp8MZrCJ7h4sHYTRJXPeBynbngCCz4yCGEmfcfdhayfxbCBmvEn7tpjFJGqWQQLQBCZMNRffYvM39HPnb",
  "key46": "3ZLrSR2i1QSdtUD1g2YY2RSNoaL6bAZpnNEFWUAf3i6481tzHshWK4NPSgtLNNWcg1Y9UG7soRBQu8fv49RQ82Wa",
  "key47": "4S7Ueuztodfi3uPK66d6514p19RKxZPfuDtBNahhrmwFXzbSuaL5x5QmhEzpp6T9vSGt8QhefNS5jjvQktkAqhpt",
  "key48": "3EQvezdnDqJkioe7WGhfWrZdn6zqKU7DCgunEifX8qbewAm2BwcoG8RnrQzf8Rp45RjWdrSndwwdx3bFMGaZZLt3",
  "key49": "2gVFj4i81Fg94tGtyFJkLZgKNpmNKTymec2UHadrPhRPJHWaQ3iefxdZoufpp7dcxZL78udvupZvCfESXn3wmNip"
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
