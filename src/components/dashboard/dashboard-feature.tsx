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
    "3y3JdmXhMNWwgu9noCZ9vxxPJEf5kN5pMN9DkytY15C95Fysj5De29e2EgjDM8SyB6GF44jzFJonoLPGqJTnQDuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UM2XFKBvo5L99vCHF2Xj2Pboxyp68pRUS7TpSUd79e19AamNquc7kBPkwfvgH7eAr8N9YoK7bDH8GgEKCAuygyq",
  "key1": "2JNRBE7vfXaNbsa3A9cBpvDnkT1JsrY94aMwPPbKzgm1mWGCfLtNpE5YbAJvkAnX3tFs7VztGYttQemMJgEnS2NX",
  "key2": "3c6bfbygXqrYUMf55NzUj9vZEWcqDGjqnbVfRdVXcV6kvfTYiCQPjGb2vpFEhP2EgPNdN1Nbe3h81SepDKgqYj7D",
  "key3": "3vnJnanwpoQSnXoe1dHEPR9NZocRXtcVApD3fa3shpiiXebyyt6Wy2Z6dfEUeKtyTebTKSjHpqMQgr4qY4p9PSzv",
  "key4": "5dgVwg1dgeMDi3FTzbpWm7oLPNiQK1atL4zCA8yrcFugi7Zj2F7Ep3xDvyM75fyQZeWcHJ3MPzku82ay4qBL7mxP",
  "key5": "5jbUGK9VuPNcKhfFQ8RENHnDxyaoj93epzMxbiqfNutM4f3ZA3wjEtMEt27wg61VC4rbXHGWwHoV3MmHu9cuqJt9",
  "key6": "45Wy7yF2SAdua5VTnvWAobQB33QNq1brTFyurjujZwRYKEVVJ1758nzACH5UQmUEG2xyxgMTNyVnkdmWF2ZtFNSy",
  "key7": "2vnegRmTMTbTQRkZJXsoU1o21nhsrqF89ezv4WLEJxS1h7g7tPGWrqqfsb3dqJFWpjc4f9MaYJgTcQcSuXjsPXWQ",
  "key8": "4H8ymJEeKLnxdFpLewJi8BdLffrypNb3YLwBpzciaxZ7iNdV47K2f4PCcxEyZcS5egd689TZgaJsWR6tvJM8xS8Z",
  "key9": "2VyrN1hB9XV4z7cNR2BydqTPotePmyXQtmx4yRsQYeuTex8iu5EwWzDnXRmeYGoeTrQXH4bmhharijGyoKT1rYZs",
  "key10": "3BrTFQ6YbqFNDRW36BX1QTCNRuKidpcLEgyFQDNabRiyDTTHL5gjsVVuN9oz41s2yHEo3e6oRiLJju5iejLr5af1",
  "key11": "3Tbx3WjohBeW9m77hcVZTST7Doy9ckfR1HVwx8NCGeWe5AbdkA4LfnHFZe2Y9P4qvQUJkBSWfMREZ7VT2VGtUJAo",
  "key12": "56sRLYFfk6r63g9Rn8Q7oFC4kYWprcym46VX3aoqE5vn8qp4MciFisSareNuwKiYt9vKg3V2yLjGGQKUXewtxxte",
  "key13": "JM7CzSPeNJNGgcFaRCkKhPXpTq8CjtW9rV953m1vze9km8s5sZKU3JEfZXJ33kASCrUXvfgvMh98DHEmsLFiPKU",
  "key14": "2yHtZA2JYTCxj5qTH772M3bGdcC8J1TH6Ke5xfxQNmpTb9bCwwyTjxePVXK654JDKegS49YhufX1a67uLv2M6WUk",
  "key15": "3g1nCLKF9WeqwQuJ2mHLNZQMmryjPj5UFv54hhM72HsBBZSCxnZc3bNvN1qBPUpXk7oNz788EMmk6e1848R6PE9z",
  "key16": "5Db2gochYDFeSHNW8nsx5AxC86BFgR8MTkiWQZ3Rg689fVZUHxYed1MLxy4WVsQDd2Er1Pm1uxEN3Y4M2XncJV2",
  "key17": "3cnM3oEtjvgmiGiMVD41DEfbdP6uL8nmDXT4oce8FxF5mU8LpuwhVdWM11pqYrwfSpEdb3ENfGtqS5ktBdiQHTSh",
  "key18": "4fPisxjHMrGXVgYyHoCVjNSyqrKrJWQiFo4fihFbQXBW3Gz26SwdyStTxeYoAEFY2gq7ZTc2grG6E7nnkwMpA9kZ",
  "key19": "41gEvUxRSF3ArcSF2cyn2jFiJqqmHWL2UFbdxzigZGs4TE6RQhaKCcrv8AHDFdyAgTsfn9GAtQ2tUtnrvZ7U976z",
  "key20": "49J1nP53z8gujytzHkyTUN7KnmdY5xpQ5DK13X3hEwsV2nCk6bNdQSu8qWCh6zXh75o68HLTmrrXJn4Li9Wn8biJ",
  "key21": "4kRDUDZq1zFBQF1w8umCtDaJt2NT9BrGxXMQy5HGEjfr4WDbduQqA1MxkNxgrUHHoBpKfF9CMtmnNwpPz4rbRcMN",
  "key22": "4pY1xA3g3aYGhm2tL1Sh5PGpq6GuTs2kaspgCQrVgFVDUtoBtqKkFkXwevuAZMpWmNseCwip5Rz3ZbLTPgiNQ2at",
  "key23": "4EjuMrFvdTqUqzouuuJF4CMCT2R3Jch5T8ysqZPB1mmyZTbEXSgsKEL4WsdNKuYft6QUYTrca4Dqqs1Mp9rVyfHg",
  "key24": "2g2du2gtg9XACEudeGHhWKNy99bipf1VY5zQDA85cMqicTWmdXUFE85otYssiVwGih7wUgQNcmrtTAdGnwS1oi7b",
  "key25": "28kZYQqBe6NmBfnggDsKRVGUXgDFStMXLHnvm9MKsp8nxbRrYzwFZmwCwwWhgfhrg9xfMGLUXjYTMyVzrwiBnhmN",
  "key26": "282Nu9sacLpj5pV7dFvVUjrq4bAD55Vu8RCdmP1xiXHu3HqqCFF4cB2YZyQpFpD1xNy6dvGLKB2CRCkSfEy6X6wQ",
  "key27": "2EKquJqk2M9vHAqe3ZR9Sbp1AFRsnNcBvDesD4iufKDyLh3BJCPHpzDjKqjwr6rcvyrnHYqRRRopkeEbCPqTjLGg",
  "key28": "4avVJ7mV7kZPgrh8fy9Ms4Jn8MGPtSRE4TUfD5tug4JkcUbQsGbbS7PRCDibco954gz564hW3NcVFL2y4TwFNEY1",
  "key29": "5vL6B4hSMCayfFu5Dv5Aosp4R9oo4xC9soSR8CNqbKEYDuMhTgkdTFTmbrTMDfTibK1KAzR7XEBZvvaLe7wonoWT",
  "key30": "KsS3bDEfheUoURhKu3JuREAzrqc9fQBjvuzivq6TE8TErLQZH1S85EZYAkna3jAz3zaTvRVM5NApYRhRV264j9g",
  "key31": "CdDNPTaadaTRUwai3XwR6CLvp3umv3BibffzSLMk3dMKZ8Y8BQDPvVNs8fzLYZ7FUiEKvfZNtwjVmQcntmvYRQF",
  "key32": "bkruoJ1d4fuwu5PP7JHknqpjM7fqX6YZ1tE7mDfSbcqFJezhkMCu5SSikLr9sTMn4wgHKjrEu5A1oqpGxqFZVQh",
  "key33": "5huSkG4EnDnStMnSUeV9cNGLE949vwoz9mrAjhf4AFkDg9ZQBy9xYFCU9x3YbEzCVmvLu3Tscw2wnxefMNZpU2jG",
  "key34": "23x4muKfWBDg1QGE6yTWXJbuxCPqGyuYP2bHF3VceKBgKQENEKrG1U2et5NJvDaSTShijGmtTt3vHfDZArVt8bsA",
  "key35": "2NDC5EmVowEXDHQBk9XGWAXdrh8CgxWXQUZv6DboBxiPaP1Qz9T6NdZt4Mn9Uon3Su759X6idFwakMwZQsF83h6C",
  "key36": "4b2mqDTrx3g9vfABEi3yVQ6nL3REFy56GMHb2GwugyHvzYzpHPpbiMUMts6dLfBSCFv8RRP2TCxXFNMScvj9LiwM",
  "key37": "4Tdy1bBttUhD3iwBKVfA858g2jcpip5gdeoWvV5xod1sNfRqif4xE9UAmye4C5shUoVJVRwz4NCdNH2C73JT1DPb",
  "key38": "3v3nYXSZnvtoodrg5qAhEhjKK5d2yfAht3z7LR4REaJBzYhzxEV2TaHRXG9P1hLDmEEsHiwwaCcFA5d7orBsQD2Y",
  "key39": "32Znnnd49eSwqAmsdNA9g3UK1RazRmSbcSg8SYzGa7WTZ3D3jdxhfrQDHktkwA179nDaT4EGJFVv2K3G28t9v7ek",
  "key40": "2swax91gJAzMJKiBDEVKYV7tJVoAbo2r16trp2g6tHMuTWML3VeELCAzqthS5zQbw3kkhHzT2ZR4QNv6VPUPCyh2",
  "key41": "2KB7WSfmkD6Q58eK9qBJzBxVDR381cWHyAzTpjcexPVPptv4tSBY78AYiQ9k8HogbNtRTPuK8kx8gqi3moV7rxq3",
  "key42": "3HewQgjk7o2VAfsXFdgcLcHyFMKhadmL2SJ5L3uhnrfUUc5DvRVRwH2RPLLRtEMt7gmrGcLUVprdCpKkE2fbyttf"
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
