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
    "2QAQ4zE1b76jZSSB5UZcWVqkyJG9FvYDYeKo8atQU5GiWAXKjt51PqduqM9fAbrkqJiJ2MgsA4jUpDuKVtGkDx1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fvofmpu4LQbRosR6KSVTadV6CFd9ie9s45TPZi3GTn1aPPLx9TLNJowjC24w51vSZnNdQNRk2wmDw15N7ijr75v",
  "key1": "NQeyaNcV4CF5F9GgTdBzRZ1fuNmqg7ZHt1RkNUeVYZnr6ChbJpnhuAYBE6BqKohtSB6r4qyigh3Lp9TVE5V21gL",
  "key2": "2Ta3sbPNgJ8vK8LvMev6HsMW94ui9nBfXjzxhFHdQfddF2VXmpERW5c1f8t6BC7GpYrPiqeUX5rx4m5EaAduLGbF",
  "key3": "5XnA8k7TFnMnzCCYDYrgZeAYJq2kbiRoR5ymm1ni1KAmTbkxnq9qorFuWeWK1zK6Lo59PhpXqCyCTTEo4MqAzmpb",
  "key4": "4nWYRo8gn6hAbBxBP3ERYigK6JkcaHdk3tKDpBCFZfZm1SbvMNQqv7dtptbRs6LJQfHgHKwg7WpfmQKMH3g81qDS",
  "key5": "67LkvfctfxwDGu9MVjF22p3tprAxfLgAX4XMxSvu78CMHmZ6w2oHtord8YSvLGxBDQXwhQGAD2SVzHuPwFiXXSZ7",
  "key6": "3wQ6tWSj6m5h5rNFE71rFNpekR4SSPLa66G6hbuVL99fc6QVUEeXE4dC68cjbiQFeVsihFuGHE3KM7Bd5Je2BDxB",
  "key7": "5sdSW3VAFD2Tabjqe3Mk8MkSEj79LTjo1DtAc7NP9RX9i3ere1XEeJGjyy5v5jEDip5xecTFfFWKCgG8S7Reivwz",
  "key8": "5iQdctFZ6LMZRKjsv1U8YhaF3t7pEQt2CKcPFaGTMRUMLqeYBmnkRpUTca9g1zWqLekje2fJDGTw6dvEBfWxmpFP",
  "key9": "2FN2ryQdQsN4x8UVJBGfoA7Vrz9Kwfx1XT8nrAP4cThDJhMCaeJCSdp8M31qoZDtFtXrzxCDXZVAdrQUBK4Ek8o9",
  "key10": "2TQW8YpSCaaeqpCuP63J8i9AyfPnz26BqGK1DUM7ic1qbqbSs2i594jBdBn3Wa4gqp48Cex8NKCrEqh4aVn4spx",
  "key11": "5sPcqNUvufry7oCXVRH7j1W7PdicWUABMX8azBanXaNYANUtyCH9AGr5eDN4HAkc94qf2sPikcRzxBHCgSaS2Xqw",
  "key12": "3FVGmTpvp7up8FRzRDNNo2aEH3ibexbB4CeAHdWBy8kHPmBqYAtbr4KDJhGjjaAX5xzmXCiyW2vFKpeqK1LyTkYX",
  "key13": "bDMjMCsMSPh367R24qV9jurwwret6QHGMFphetgcosXAdeqKWcgnmNt2yvmMZ3Ko9NbzEg18XNnWoiks7C3jyy1",
  "key14": "5FzdioiaqDB14AVJGKcVo63UvrSLDCc5AKwJuKQQTeEmQU2EM2c4Zd6XguYB7egaurjeYYMnzV4EEZbNofQw2WR9",
  "key15": "5BngjhnM2aJonydDBrL7JkD8R4oKAuFDCRK91PE3dCyugoVfVxd8bf6rwVS7JGUKXJfK7QSm3cKVcd6CHHn9YuqW",
  "key16": "4qWBzqrMPZJvZdtS4HugomG5nRpEhqpGkTyP5hJhTRWXMFsKPJFrrawnadfCNua6QLFhWLBvH2qVKaFzh1qaUev4",
  "key17": "2AURvrZYHrLxFRkLdRoEFRsWx5TxMy69VADpcPZzxcodwskHeStrKQTWMac3nqqbUhvUMLrSMRxAHAgf66xArXtd",
  "key18": "5WY8vhpMw1Vyi7iVgHJss1gm5dmyFzWfKx4PixpLrpC1AG1EWivjZJ6SJ5NbDFgSgtgFZB2DAJP6KJ8swMoxyRHG",
  "key19": "3S8udtUP2CRWTFe2wL999L95y7kkhSpFkLx7dbPtX4nsvTWkABV4s93bfsvqjL5n4SHTtPynmhLVkBWGvz2ZcG62",
  "key20": "2pptXjmYKwcY7zqaZUfuwHqjKj6URPL9a8nZBzd8Dx793SWyqU5rJ31jpnvgbjUeAzpB26kaGHVBECyAzk9uxSDm",
  "key21": "HefmxNrrFQTNmPaNmsDUyUzqC1SGi3jCUDqp7AzXLtVGQvvcjy4JKnsNRojKgX4MNgtRzDQBh4QwkFakRR5dJ4q",
  "key22": "4UKjL4zM2jKQnQiF2vkCfHFEVMo35dS6FbqwdhPZkG1jbcafg9Wi25ZjRGdCPind6FywL4qJDup6sE5feTzp16bz",
  "key23": "5VQsTmUQs25877poUHpWuhrkiH2qH5B9m2CDrsy5tz45mG4p2gKzujZCEz74NmKG4rddoPjU2ZmhVDJH4VY9xW3K",
  "key24": "2KTPemdtd2gXQjVjC45PisqVwVXf5LFceSJivfChktSKAELvbxyDyRbZtTY3DyLguSBWsgVGaCHdF5xMm5yawFg2",
  "key25": "Lwuo2vfBHTvygEV8jX6jcfKu8pW12K85pvmeoKGqrXz89j3dkiKDommafsHQAJ3QbcF8DxexquQ5h2s4WieeZaN",
  "key26": "3t38BU4DyvqQFTjx3z1cKTq6h7QfCYzYzWmGvmBqdAQFyFaCTPL6mLdySxW35LCyL7upeF3qwytSsMi3yUNh9Qvs",
  "key27": "2rp5yK2w2ojdu9LFNTJHiZqKRWr8uSEbXyQtzGXkNaH6mVyXqfFMTN5Y9ZZFxH1PhBtEpp1UXSXLg6rbEUPnZTkf",
  "key28": "46vWzDKzYpVtazSKfZabZRrv6iZjrTfh386BAkNAfVRAHe2vfKdJai2Mz1t6T8udNGNQ32ofLwN1TZXgEuF3dnSZ",
  "key29": "32e92zWDh9QM6LZWdjtR5UxgF6kYCKcDnPXs9fgMvpvy1S2sbcfgLBvHDRRCKrh7qorxuher4P4k6TeDVXwvtZKC",
  "key30": "3492vihHZWeV9fYojVcAB4bDq6AGkWCTwjy96bf6BBg1eC2ZoDw8TAU5iVAisiEPKPCmnQgzU6gudgD8Y3pAR1nK",
  "key31": "62Q3uTkVyZ44DCL65uoHfML28AgcnRzNc2zPRXCsUMhiisc9FggDouitALJvrZsTeyqCStdzYyiys54MwBRvkAnS",
  "key32": "4tGj8ampFWyHTZyxqKMJ97boBjbSaGK9dX5ae5wvf8wc91kxwEtu8NnpQqPWuJsY4TbAzpZmjgmQX76tDcUxU5yJ",
  "key33": "59MsKG4R3LNmD12HVHGYuShz4awdKGG56fbs8uZQ83mP6UxGtxL2zRh9J5a37NUSBMpxfSghA7nT9gHjgFRisSdj",
  "key34": "3KFAU1gztyZLE7JUd8ggHT8G2eFfyaxMtZp2ySNBt3D6FJR189C8MukZHEdzQ62wvRLdxkMSkjdztBgfGRu1eePM",
  "key35": "2ZsefUAWsK3c6FUVYDWYu9vaaXLzpVFaENEigkmF8oPs6nvvN76FxKjJPwaf8T4oeETWvUxNYttT4yXCR69Amy3a",
  "key36": "4JiXrSE31V11n9U2mMj8NSBHi8AxUNYfB28AV6zTyieTVA3uXPVmp27XnupWQk8dkQQDabS6ydCtyuwHCaxAcoVf"
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
