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
    "3n24qJK14iZXKLZkt8Hfznq236zanCFufhnpKo56VrrR1wsxZNFSjzqRy1FcDSWeDvhEjowCfaLoz22KayDY7MGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Kh7ShJ7CnPE84J7eRVceEgqBMEgfnE5Z7NccejeB8QyHesERFxm5MCDbozwsiqPzXmaK8EtFk2Fo9aU8Xt3QBN",
  "key1": "3rWR7tzijmuvfGNHWRivfPsnnF7vM8LK2Ka6UfQPVQJzzA3yPjYA7sj5g6cz3tRyvn8iX9E7AKue2FZBn1q1k1Sf",
  "key2": "NybiYrCe6hZZUJyq8s3cjVSWThpdu4tbS3SomaWa2BRkDP8X4oZi6tu1kcBd1xYRRuB7aDKi1y7LnqSuJb4EmTy",
  "key3": "3UNkzhZc587ex38g1XoFga7j6ro7qTxV6zKSPZKnNng1iBCHd2eBp5X98J1u95WZykcYAEbbdafeZ9SWAjjxSdXi",
  "key4": "32vREb8RfdiqpMjM6UPvWtLeLt5bFjH35uFzGPYe3eGePGKMV7EpV3htiV9ghR42poZ7bAFDe2vWpqYe9p1FPPkK",
  "key5": "2B2ctrMFnmKnuu2HTrqTqFT3wcm2oXMPF2iXhhniLGRdSUZNpiSBfwY2Ba2EcnoZDR4naCiVduvSbsE32fJr4B9G",
  "key6": "uaS5bnMtPqFSjSUcGkWW2h7xRLAnKDdzY8yZnc1DfmTyMP2FXuQHA1cEicRC6ucp1t8qnP1GfEaZeJKgFDro8o1",
  "key7": "5tK1KdcTCrEmiT4sVfFv3QWK2xRbXAHdatvohmorKaHoLdUMS6WUM5pTnGpkfxuze5B9hyn6LgjCArX17MLLZr2e",
  "key8": "thaoH7FyvYuM3Pr83XjmCsLSK6HgGC5DFxT3v2N5sP8G14VQYVH9QcFx3Boo5ApNcRLzW6HLq6BcLpbLmkzmp5S",
  "key9": "kE3DkWQvZLcAVaaXUjEZYCTLLF2d5WiPPKWRexmW7UywvvoQ5QwyaMc2jSzXJdUrd5nMLcAoe9EcjDpx7hW3Wqz",
  "key10": "3HCJC6urCjaSvbqAb3QhUpSUGnm6VxPsVLgeEDYAVVphiAgWATrHCTcXUeTy4uW8hsgeFH9ujvT9QSYaUayj29Jz",
  "key11": "5pg8QZEcLuYPwCCvECBZNt4AqxYck8aMCtu5Sa8vRv3XNeQ7MbVoEoV3KEoYZvSzX59YwJTPnjfD7CREBXbiGy2E",
  "key12": "93EvwzHgYPh7eUsQ7JPsxE28zDzxrRKtPvEDtbmQmgxh7Erw9nkLobeC6zRGscpWAKAZ8K8HftkGUyh2epz6jFU",
  "key13": "2N84MJSEC7ooXKNt6GKJEKN5MT7rVrHzrP3gYnsTj4n2wrYDBtFyBucm7K26doi1jWNa98KJH79FR3FzFi3CCC7T",
  "key14": "xDTdSyQvAGGSVEWManhpehMFwwkaGzaxm3aoiWJFktSmSX8mCVnya9EUZKbgY18ggCDha15iZ3QfrRkQkEa7HRf",
  "key15": "bzHpNK6LSpFh9zXcGaPw9nKki7UU8VtoDc9yHMbF323AknZvv3s5Gs3hymtgBoRx1if3WF2aZLaheDPXq4TJmnE",
  "key16": "64Wq1sdHHcdURAFG4NNLazwsgCvY4zwsQXdDDH4gB6R42uRJcWYDY1xcFfU9pc9VFb3U2XLW8h85JYaUUThsRzCt",
  "key17": "3GVtgfDc8PXuuSE2xTnTpmFGzfCFMicxp3juUqhPFMr9s2LRuEyBdyP3WN4UiVmjJX3aQTdis6GZzEV5HTCaNDFE",
  "key18": "Z8Kv7sRrLkigsStucCGVSvmNPA9w2vnftuZGyoQtqjsT8Cv5RbLGKYDosFvap2PpUQGcyggKc4iQTBEJtwD1k6t",
  "key19": "2JLuimkm82psCny9UF2Zzx5ajvWbqEwQD1GwGPszQq2hUp94LtNroDQnC3Crbg75oN5btK6Roit9RuYCVZFAN1yd",
  "key20": "4aHCJ8PhrVWe2KvDPAbTHrxwnPP6yrhU853CDUCESzZAZAtNpsRnjDU11P4y2aWtp6oXepvgjcjZM29kbRDASbsr",
  "key21": "5WQmtPMcyR4VkFhBe98KPCpgiDcHC6Kyu9U96jaQhNbBXkfbpV5SZiynvfzkCzzvXYTgPQv6jje6zSVHeN4eGwXE",
  "key22": "4NFwt6wan5b8ng5ms51wyDoQDqA9J1btKNT2W7ESe6C9UM73cZnKqRHaJY9SAheHK1YFxtx8qDFfqh4u9awPweUk",
  "key23": "5dZgnQrBCGZ59nHdVcCRRwnbgvgVhdqADdMpbxFuBonrAan7uUcSmw8af85TSXUFXzCd9pUUxRiM8JRaDoUDirGb",
  "key24": "3k9xgar9ibnpWypYDdXA1v7FhceCh2a6XMVySDRBWUniHQjLQsc9srszTBELrL5iBU6PytBfCJ97zKCj6S2UkpiW",
  "key25": "571RRVaKapjEuuM3ki7ke1ZAcXhceRhozEnNJTLorASMWRSWnAZQX7vQKDjcy4u8C6R9wCuA7gQECycM487h9rks",
  "key26": "5jfyVhZJo3zmHafUf8YS1xqupwVKVJqJzN9VxfpDpnvrdtUmu4rhYt7Rkuni8PLGSuvChVkDAM96ey6KtWJUBGuW",
  "key27": "4F4VEAqLaCrX1cNmxiQMdmu2aUrAwsAfJu6V5ob9zcVDLTejWKuDmcg6hPRmWU6y4pYurAfivmbJ1nQBkewqpRe4",
  "key28": "4FLpbDztmauT7HVY3avmxXrdxAq5GUdvZrECHShAUpSMmtrGY1LLsNMsChEDcx6a91yNBjkzhYmveNX6YYCX1K2R",
  "key29": "UQ9XacEYJkTESrZVSecV13uk28WdGfQhmhHY3qDtpqTP2ps4cwNv3KgJhg2hqiNkncU8XscmbA9NtKstW8uSnbQ",
  "key30": "37jBfCLq3AZv9R1iguvoe52qBxQjTz93Gj4msB5RpbxCTyhVmzBnX6xxNNtnqtYbB4oobCBwNZuyUyD4XN6JDEYf",
  "key31": "E6aNBiNd2yRSd6R8juAGMhVD3gkqdCLPJVQAbZxBu21GmyF4Sys1kBWk9c1vjQPa4DBMMoQcy4fUaqaPDap8K2K",
  "key32": "3BvTUqV1N2cTYgi9tZjMqrVG9J4Xj4v8D82sFZwrvgDfYTPTGE9EXAeWB7ysr3ozLdqnmSum5BaBHsdsUSqLRJFm",
  "key33": "2SC6ij5zqWGDDUKp8UwvWa4SDoAmVTmbRu1QWY5dxj4eYeE2Sg2d7LJpmTRMrJwKzsmrncqVQ6xPJRsiCzjDojtq",
  "key34": "3JcALjvo33xCW7da9FnpyjxB3AdLfpNH1jasoLWKodLYJuXt9T5PdoKTXLesLXVFfzkLS8MRb8bhf2YnPemgEd8q",
  "key35": "5L296RQd66DpjY1Ji4sLhmPkcHERyTPaPdHLqitbPQcXzSbgQ1R9RLEsbiCzrwXgnaLDsiJZprTj3VESww18H5eg",
  "key36": "5mwdPA5zJ6gxuhfcuP61hKeL4qxmpmaGVLsT3pixrQSseu1pKdaWBJiXyEwHoBxFPohBvLwv6BPa2PJXfEco52tg",
  "key37": "2ikavatvqmjG5eSCLPPzrpBVcKNxmgQT8SksHAicPtLwz3oEDHQj4NeD6LHFhfEkguWhuU3ynPcd6wyDwBmzo7Db",
  "key38": "3zmp7jbJsAApVaxNj3rn7zyjEKhGHWxECYWBZi1b3dJWdz1pCzUehw9garkEe6v2pZeVjryt5B1UscWVos9i2vBj",
  "key39": "HtofaHKh15eHAqZ63NvPQRzZidTBEFaanFySnTHR3oFmd9rYktCh8tmSbkwvnjNvVV257vL3AX8GszgKhhVH57b",
  "key40": "238neHH9vUL6jMvdCGg6otSp2D3K9VnWBC48W2eL3wCcNFtCrSuSivikUx4uS6CcYV1qRzbyG6HhM5wiafYkAEwn",
  "key41": "fXLU6MsWTDCwweY1FG3wDeDGmspZGMjiMXb33R1siPcjWJtfL7RwL3RabXMbTkxmiEaHaDRjXTGfbWG9DdHcCrT",
  "key42": "53WbSUtGcwuUrNFZAfkdWorZdgNdGgWPT1GA6dpmW4GaieM6R1Y86EkXnkkBzBTcQMNVec3xAcJ2r4RRtKZDp3n9",
  "key43": "2rNmV9KWPLNjErxugofcJpkVYK7un3d5PJXmwrog8eVyLrqxXGatiyhZqXkkBpcubgiSx7M8uuCo4MZWexGMa9gp",
  "key44": "5c3zbdyrgsaaPs4zsw4A9pnA25foEv7zvGc2eHH55DvBMstYhemZ2ahHTRDnwdDWQzdF2m6Par7bqTATfe2TtJzr",
  "key45": "4eUbHtSnTuMzHGPYM2hNq1bq4s39ovJoY6uR5iJ12VPZgQrXPCy6R2sWT7H4cZx5LjaXXdwC93MBvsMG3XAwoxuo",
  "key46": "zm2Foi1yHZNfMpmzRLzj8tuUAuBw3om7SA8swtr2EMCg21HANpNXxEPkkHZP58cCGrJpp1xSzEgnMe8Ka2SNmHR"
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
