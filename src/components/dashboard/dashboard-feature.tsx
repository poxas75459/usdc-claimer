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
    "4FGsoN3Bqn3u7YRsRoU3hvYcbvLtRXmpNLL1YtngQ29Ap6u5BtZRzz5tWVE1gp8Cj9Chw5g3jVmV6JP8NcBLH75a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38xBs2TkT8pifMKy9TvazcKP6DZXLgAMcqH3GyUfKtN5Bu7bQqoDRPg9DVXLSqQUEutDNtNrYirn8Mz4T9YDnpPm",
  "key1": "2D9Jqz53JP5wqhV15KNfH8gnVEGGBhs4qtMc2tNgECwyX8dbqo47WQyExDMKveo6wPATCJkBwaqYSuHU55DrbRuH",
  "key2": "3K8T7xu9BH7D6o3FWFru8bHziDxAvRFGmct5dRSCen6cR2CyGqNRQFTNvAXYku9L9HDPHCQ6CCfUDBo4PbqUDSGP",
  "key3": "2EwMWxaDB45Hnm9v6NADjqo6dYeqjpCdJu38y6b6jVXFiRWNZJ2rPuPhDWGCjU4PdR8p9GLQWTzqVDdfC6aj4BVH",
  "key4": "5a9TwSPnbHVTuGFs9gjBPuBNCimPdxr25nLaPcbRBMPss4BkbpAvkdVRZeUs29C3qzaX2YJVdwmBnkiqDkscuTfL",
  "key5": "4QdPtakaE3gBrHfinGEtaAjibT8GPBASRvH6EuPhYAxqpZgw89NAPvA7AUsQmsHPom5uhmmsExpU5sqgcGhcBh5n",
  "key6": "32Dz7HnFNUmF7ArQM8E6pWexPaca1EjZHTCpcwUGZ5RggSvPKdJ5EZ4nzPuzmB9Mw3Yvx7kSHoxxR2A4EratDGcK",
  "key7": "5GpJXx66cv2SuH34kw1hZtmCu7N8rgQpM1H7UyNhgbMPcs4aebop4ok4paRFfFkno3A2cvcUbsTsF2CtrhwHf3rK",
  "key8": "42FpWhZYZmX4UWTUxYAPhGPMKD9zDz48dov4uzCo4NoXhWTX7wsGbLZZEuEd5KonWi3Rk11NKLYWrpNo1eNFjyLc",
  "key9": "5hkZqir1ohcTywUypdNsjq6iAjQ68kby3CDpt36cUjvvyesJrqvPqbd7yW3HhVMy6uQj2wbxtoxqCYscBFZUTYFF",
  "key10": "UP2UYVDmfwGbsQwKTM8unNceTDqzYFfoaSUcCasFeoz3KF621bixNqtjaheR1MM5yRBMF4pufZG5FHje22u38BP",
  "key11": "4tYztemHGTKjV89iuRGaBVFipzb9pmph2mXU9X86Ci9GAHE4vrrvhSQTSofePBGSFiwGqPkXo2qDw4k269ZXo22r",
  "key12": "5ZdYMyRcEUjSvWaZBuNhGvwHydBYptzCWBgBMjcLbxYUJfNSHXJn6dpaQz4aEkN8hr7oMh2HnCc48u6xboJVevB5",
  "key13": "57KzR1A2QWVK6FgkXNmWE6PC9ZxsDwcp5Vkq4KBRUUUnXZj7r6fa3XvjYqknC1aTbuaP2Dvnujq6YAA6n81hHxDu",
  "key14": "2KmKB1nFgDvnQ538BE6hbWuwR1ixoaaoiii8WrKZB2cvHXoWva25i8zQcgFCUgZ5UWt5MydkFEzVjhedC7sdGb4e",
  "key15": "5kSauKtBB6f9F5m6zVqgTEGctMF2b6z6s5Xr2WJxB6AMd74aosTmBTMu41B1XYgDJn2GKsjqQYzwxWRX8oXEHgg4",
  "key16": "5oVyrTcxWq6UXRBERXuwTMZHamX8qsBFvt2MhTkF4epkbJZP7vj8ptVg2J2RrZFyWtU1c37yHyh4FwfQFoyiDFXo",
  "key17": "3WRhXTysqGPuWCMFTaGnLnVJRo5i1rsrMZUrSxQoZhKEWp61JKFN7cikG5bwUvH8frvZ6NBo5RX2biP6JBxik6eY",
  "key18": "4EFYewTVTsSc2Ggc817rr2x4icZyQW6nEcTWsFgxXPyjLeP6SGDwB8vxJW9tjimBDNNobfLBqMFuedYcmCwBpgK7",
  "key19": "5V1GzYgMXsjaNsN2zbBhiNdMNe5MmjViM3ub1f7P1x3YjdDNRrwcxbRWsGVdozVzFjLZecCHfiSmsMj8mzBuG3Yd",
  "key20": "21RTUX8ia63VzGyRLzARYjMLBcxiKbZQoH1RaoUC4n4MNcEhHe5P8dCRfFdg4ujaeYuB7AFhM2AnN8Syb9895VSd",
  "key21": "3Xk3MaWF7CrSCPh2L1nYmEF88U7Bf95sSHRd683YD7EnHLqKZ1hR4jHucFGHBunPg5eau1mv2e3Acbg4JyysfBLR",
  "key22": "3Zei62D7GYGA2jByAsjebs8qYAkxb9uCPHS1KofGkpSfYaVHAr7wwSuJripyd3m8en1zT4YLRLQAww6b7oZJgC3",
  "key23": "4zj5mQw8QLPVnEiKub3XDt1TccoN5WLPBe1a4iprKqQgpmnyXYFUoxznvgTX9bEfpEWDu22P4veZohJPhzbVvHqq",
  "key24": "32kw9Zx8cgrJMk7WGszKGwmjwjrCHPzSEzAzfk9dtwdJS7QbRFTVPiar6LU2qsGYDjw1YXCjszGRkzpgNWoaGG7a",
  "key25": "44ue4Q2ahg2qBSjAVFacQBfNHy7W8VkvPpH1SuaThkv65VA4HQnNSFBdHKDpw6JeTLJDkjDWYz6EvUgssqn6Wp6c",
  "key26": "4qDAYfcTMfV2efsC8ME1dHy1gTvMWppYj8exwyahnv1nsPPbzsuWv8aUWPkaixLmE2C7EyXCxkyej7KsvAi4pV5j",
  "key27": "55DKte9gW4vepiqocDwfa6MAmHX3YqB2JXhaX8CCzKpnr3cUvLKhVN6G61X9XEnjQGRGZQyH8roLTPzASkXTb9AT",
  "key28": "58TUhhWKqeBHKn9ptoMuSF6vDKsTFmUnUjQXHRcmR3ZW4ztFmgLeJDX72kSqaw57XJ77fP556bmuejuBqPGrxZda",
  "key29": "2knNKJYsLm4aUXTqBiZxJQM6jQxBNLFLheS1uFSjong5tcGDmR7X4HmfQECVbRLUJLtDnX8HqTg2qJe9V4QFoUJo",
  "key30": "3D5hYmY41w9SM5AyFgEL9z3xB9EZ4zgEJhP8w4bPibkuGHyaLg37a9W2gjuqc56wcGL9jKMtre3ojSfStbesfG1Q",
  "key31": "iSND1kAep9gcTNgANR6RF1jhaGs4zzAJgkBhStt5WsFNnKNL2tMjqmZZwhRcPbRvcoChoU67P2sFSVXeTEWQBHG",
  "key32": "21bahafjHv7FLGpyS8GVgVkGxhw4gsMTiA1TXY1nsv8j1miso9JnKBnrJitSJ6Q8aDDF8yrWHU4zDYwetv7Upjg3",
  "key33": "5osSXnY6ny7ifuVa395TmMrBsEKXMXcKYQjbW6EkJME4JwwEEEFPCujnCkYC13CqJhgRrAW27fPoVn9zznMAiFSR",
  "key34": "3xwPXFQdjCQoSRyg7emC8ok9gDtijuAQVjvdPJVym2awpgLzZyd1gZCtcbujXHDVu8XkuZ9bxuwciBPFocMgHoWB",
  "key35": "3G5xUVqiT6C8eLAq7dywF6VQnCaUfAMtAs87dpBH8rN1vQtB64iz3aHJA84bJ3JkMcVsW6r1NR9yLnTYjYrgk4CT",
  "key36": "64f4tHwLCzmq34fkADatUKyFa6T9kpgN6pnNee1KkcTdfCz11UrMs835ecbxWQy52pMXhtfY4eGabk86bZJgQmKg",
  "key37": "21AVrtrpwe4JEXJKGP5H3LNCZyCPNf4E4kb6BoH9gy2EBWQKbDujQgP6pCLi5DHE4AksYkgMZWQKPQ7CCJnjnC5S",
  "key38": "44SLftVyfoVkjMvdrrrMyBT6f7aSHqCLyiyAard9gJqpqFbwsW7siWKbhaKgGu5RAkzRb4yLUgc2vNcjTnozyHuo",
  "key39": "5Fz3RtV7uz3vfiD4zccDbLMVF5u9nc81KiFEpYDd9vLdHmtm74MtatpEy4Bn4sxbT4eGu73KAHJ7Sf71JWzFNoMA",
  "key40": "5z5Lgn8q1SasWe7tH1hzf8GUmTqxgWhBE6A4DdMTg5ztUcgX7SD6RgqhH7EWbqTsQKfEhD2pMKzSdrryPakaKd3r",
  "key41": "63hA1vnsrd3BefYaGW75dy6kBgMquPrHpzoSn2PSNjw5PzJNpVLz7Qqkmz5NNFyVFUiMPaSgFVDbtaU1ELDFEDaz",
  "key42": "5ttYv5tB7PXzYYrQwQbDdJ39zp2mHd5q3xf7ik3xhKmKCQmPrsmHaAWsKqNG92hiU3dmsMSxvmS4sfPxeVoC22fM",
  "key43": "2bnmW4CVP9CfsToY5xqst4NxMc43oSPKVcZPD4pSZa9YRz6QKcCTq5rZHnEyWS3q3aMt1QSn53DCJ9aCQSAQwdWr",
  "key44": "2Amkj8qECKKz9TXrAvhnjA1zS4MK6N1qppdzUsbM4ZWgqpdgR3hNXBY3nMpAUoERzHKag5cvc4vpWBXEzwewGx3Q",
  "key45": "r5vcVug944BQawaNLEf87bFaUamVAFgVLYUB1kudqDB2uU3nC6nTwWsbcpZ3fXppf3nb2qvRartMuH5oK7EqsVp",
  "key46": "2NoZSk1qJzyo9fVVRKJm3i345rr4aWYtSGbCufk2ShbTK7KRbN13cBZLj5f2EFE12fnAQBbZsvsSBoY1kD4PDc1r",
  "key47": "2JeKfBpv4x78Gk2Z6aVAkXH7dTFeJUARw5vAFESP31r9wDYmdBPxVojCKSCmTwC6C3wtJcBSRjnCzts8nZHS9Jfu"
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
