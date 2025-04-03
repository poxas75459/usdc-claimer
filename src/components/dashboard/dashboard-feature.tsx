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
    "bc3DX83ABb2EhPpJ4b5ct4uMBkimkkwzyfeUJ9Exr2tBeUm8Stcwcyrr1jmVfe4NGtyVwxgtgBfpGenMTE2bXxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rWbB8ktZSXF1vEwh2vNjGpRPPyxD37WtQYiCM1px2isK1xHjGK2KNQb5UZgrh5nzGPWFrAobmZ6nJC1S1DrADtg",
  "key1": "2yFYobRqzcPcdmZju9qQpDzYENp3EtEknFCchzyoyjjNBEjKvKi71CmbPSVVpx523EvM4gWQPwccV8866awhE9JC",
  "key2": "ssk7eodouX7SAyY2PcRz6WS4ZzC7qVZwqTfzH2DL7hYcYKrXpWmHNENxeZqDsdeCDqyu6soFZnp6ags9AF4j7Xj",
  "key3": "2X8JTAaUhFAkPunteoPNM4L1rMzmiZvT4ED1Svc5DiuPs4oBctf748q8iuuUXWm1FhRqYeswQ4nJupveU46ZTCHd",
  "key4": "3wTZtUWeUZGoNypssg3bhKEtzg8vqyL86Pn7eE5uwS4tEXGfKQGAiZuEoiSbCnznCnMKyirQjdv532JrPZ52R8gh",
  "key5": "5CnrjCBH41rbVkpSGn4CuZWtvfVqvVDEwmykviwQq5vYA16CMQ56fQbrm73EKtg6TXu2NwkArckuqYKkpbJ6jL6a",
  "key6": "2eZPs3xU2KpRgbm7FsyoCxx7eDxjtK5vs4Xwkxen4y8C6VazTLwTRH9dNULd83ZDLi9Mn9s2kJHezxwoidm62yqK",
  "key7": "2wCZd1k5L5qcGi5iX5xYe9KEyKPbNM9t6pioamM5FHecTqQtjA9aDuNM28dTYXLVMLreQGyzi832dDbLvfxiSfpU",
  "key8": "HpvMk6F5X19tXJjH2W3o3PsLgxQfcebG8f4G53A5iR4tamZNYQgWchGQWSYY4fTjrkAyphwdTuycnnun7P3aAFd",
  "key9": "2eiQiC3n3q2nPhZTciuQyRUDRnwEKpaW6Kc2MirFX62wFbxsfgkp4UENAb2AaUx1JpHYMSX7zb52hztcnQhAejE6",
  "key10": "4iUyrBNNL6GNissiKftB4nZZND53pp6VXPiNjZoVhyqbKkuuTeEpvAtJTjyi87hEyLRESXDNz2g3VrjopPXPZBkG",
  "key11": "292iiwcqExwiKwYubVETy8e7MPAHDaspt3d5A6oT4UrbqMNMtVBUYeD9SNfv3MDerZjrSPT4G95mxPkss2vhr1dj",
  "key12": "28rcoT6iPfzbSsuCYiPKofoxom3Xk6BeW8PvYcmddLMboR9KgYbYwPT1mXQ5xys92YgSA8zJiHgMfhVvNoUawYWk",
  "key13": "Gnnw15W6JcsBTQBSBFHKhpufRLv5gzPNFwGptTS2CVYPJLbFiDPKVdLAMvBisQCd6eSJUzBzCRouzW8ptbcrrea",
  "key14": "5gNpAvZeame9MXkBHAhMPsSqmWBTsCY9Hz2YyGnshtNC5u6cgoyHoTGjuGpD6UfCRVWhPJncVfvhTU2YGjyuSp2x",
  "key15": "4GezPc9w3j2vucAKc3D867Zs69hixmy9e6GECneEhdKZB3CjB3YjTkLQBe6x3FEJgfwoZsZX6e2PinoX9e44ANmJ",
  "key16": "iS5zL95CMWL2nbfGcRnvbafwRBEjHsbSyMjqmHqTjGZk5rvqSjyCgJwiaMdVh786BE1rQ59VwQGcpoMngyPTJKA",
  "key17": "56FAA2tqzQXxEYZSbCFqnQWqTJEzcH1rmKYXUqyXtb7T8YBnEErcQ77dJUDVTkmc9DbZL2DiRgFKg1LeftMDnsrT",
  "key18": "5NW1JoV1BHWpj2zcThjkhp2GFc6JcH82z5BrQkSmLLuJ93Wu543jX9b2AcX7RZ1tjTqEWicA1a1z4X6nF63YZVdL",
  "key19": "4ZSfXocDvCaAuFaMaDNjNnDSeLghEPVUzxadXkZmxYZ8yr733FhTTSYkMFwtdxGKqtGPB6q3Z3uhcuJptbnDzV8A",
  "key20": "5Jj5CB68FPCK1NkDforLxPe7fLfUiQabMWzNitibikZwj5tEPHJJNeaHYQy9hY5USdbgnajcaQaChndpXgyaEjDu",
  "key21": "4fL5y36oFfjEkxYLRosVsUogFdtKVW9Hftyx1fHXAps2D1g4PTLRzFTTcxWQzEjv8CwUP2pUo7wKSQLK9torEGrP",
  "key22": "3J9KSxPDHhz2hgTJHzqdNCNgZKwUnypGZEVU7kQ3wDjdRMLJq2yMp8u4YzBK8YPeGLDHviaRavQzQRqDpruxWqNg",
  "key23": "566Ui4F3sGdA9V8bFMRkeF7Kp9HNH4kjLCWQF6kgjuAKqZVVgeqcMtb2y4e3yVc9d8bkfNz9bJQTeNUgkBC4Dh7D",
  "key24": "4ZJsehrEMV4766wBpKM8cbDQDQxEbhKv2b5x6TLLV7ibjSoWpFEuuarHSticRT1ssxK79XAxN6HmudWyUKmx8EwN",
  "key25": "2t62zZFyFR51gkeRihesgjHXfN2Go2h91Ww68n1BZpykK5TB2nLmpXQwPKRHHZU6Fkky8Uw2Yb2NgxqACnMB1aVT",
  "key26": "immBBXi5M4dnKzqCgqZW1eNt4zWkAfkwnBgYwh7CmzkPMPx6L3jVc96aPtnDqGUNro4rqNuiykMHqLDgKY9EqcQ",
  "key27": "3Py4zkwHEgfYGCjgpMHBYr2tQduXdHZGvJ6cyj35x2B7GDpT3J6wjkYznjVBwBCpjqb86fXqZwdQLmaXUejQK7yU",
  "key28": "4nf63fzzEyhKzcPDkmZLZ6oBkesnqALmGPMvvakXHNq8SFstARCoP9X9Z3E9AuQ625Kpvd5KqSawLnMBNrvLEEQ9",
  "key29": "4XF3jxo8VmH2z5QXhzxYM2ey6N61vuEJWK9ebdRwF7xaBGnknLXGdQ1WByDreDSisG3UgWYEDkxV6ubF7MpbepBH",
  "key30": "2R2n4n2ogPnR2q7SCxMthqRT5K7LbZXYiyQF1vJRr6Fw9xK8vCtWxpAxz2GX9Gce1HKi1EZW6FNswphjEbMts2Ry",
  "key31": "3iPYQspwP6pQ9GwwkXPTvvDazytqUvX5ni5q9F6p9kBAXD3PTAbM4agDRMwFNRpgswumtGVb5rauozuLoQdK6oFJ",
  "key32": "pCiYssvgrkwDXGtwhcqDS2xuVc9TMtQLD5KhyaDkj7MN1yeSymT8ENF3Hr4Bsn6n66FMo3uvXxJeMcMZN8cbXUD",
  "key33": "Sh4fhAg7XxSpjpEPAi3Eq6NSnDNVhBM6jeXxNsxzcTJomYUFp8tJ5e85v6GN3sMCx3BfYNrrydSUUmbj6T8U9th",
  "key34": "5rSmLixnKvWPrUCvudUCuhCHqXKnxGeCv8Uec4A7LhHezTodn3nn6NJWwrtMFP86HCTjE18Nj4jXVtpn3k8oAYp2",
  "key35": "USo1udDB8r5KiGiYmbkZX4Nxr3UQ1KNr9MnEHpjBBU6AY3r3mrD5fvqjANiiSo25KxC6HSdZBCoxQ5bbsPJrh4t",
  "key36": "4YgnQggSPjPtKSBTCYnZvKe85ApNrgZDaGfF8c6LaFSWQAQgVkrARxBkC8iSGzX68yGvDU74HRwp9RP9sWmnsbLL",
  "key37": "4Np6KzhiEzf2KK4vS4A3kmXdry4xJokcFUdy3oBY3J5d1fEVGxCo7f75SyaX6JauAw8ZwRHDahrVaU14dbMWt6zm",
  "key38": "4WzBqH6hcWhx6vtnZsKYjj8bpvSbNDPhJNpArmuZqpyPkwgWpUgMhX6ybuXYCg9KxK3RMJhefffJBa5KF3KB9bFD",
  "key39": "PhTQf26yx8gDaf5nQHQYnEjpre5m1yRiPCM8PmtpR5GBEfuuLgb7wk2HofLGAfaM5hSrs9D7X4FKsB5hcc4bBrQ",
  "key40": "5oTndR948KJLdhsMps17NUpQXDtDpjTTfJy3J5ARUWvmyQ454xVAvhcb4yW8EepG9Bj1d4yFXdNba4GwTYjk7kEk",
  "key41": "2xZXtvU6ZQENPxdM9RfQ7KmSNgmsKtZpEMxzxYLWK1pSUzjkQSt3fX1EcadyJttLHgDnbMqQxDyvxjbuKhvr7zwE",
  "key42": "3QaQLtCZDLD5gCiX1LVUqP6SvCQ6sqpJx4WjaCL6xtpbTiegvMdkj7AgPwmiozLue6AeNTjXTbMQyfjn74AoiHqD",
  "key43": "2mh8UmDpBuTQx1ojYR63K3DCPR9TwERue9jPA3Wo99CsAEhFzqbe7rW3HBgbb76bPbxNzCxWiB8HUMbUQpGRUPqi",
  "key44": "2LLmawz6QLaoNXsSC3aQq9ZTrsvhUribvcfmth96CXPSTMAGAu37sjxHh939hrNKKKmyk6W2ApzTczWaifvicqty",
  "key45": "5Bw3jCn8GKi2dJ1UXAJQdmCztmnUJfMWxoxN622pHGBNLTcCDgjsFLZg2o8U8q2MWTpwkRGxBuACbyySZiYSgZ6j",
  "key46": "36BJReFq6171Q6vj4nYM5DLF1QF8FBjZtoz3M6Jiw91FWbKp1m3DHdTkPHdUXi3G5gNBfDhFPawuUQVyv8qEubqA",
  "key47": "4rZquMABHumFwfoBQBXEXP9VU5W7EUzjWgtYdQagMoR5BygjSrrPssWgQqjC5s6By7m44GWQR1s7rNwjsQsfT5GM"
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
