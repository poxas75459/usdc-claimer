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
    "5wZhaFEcvHMcvA98eU1FgdkHouhcq3Woy3G4EL9TpuZ6rYaDrRnZ2YePGcUUafpeoMnFteJveAh3gZDr5GRvuNnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "129PqQSMhWkuodCuoeT9mFaBsBUJLoSGDAxrUSZkCU4HVPrEHqysyewn4WPt64wKy5iH7PVWZDXrwq9cgBhyuA1S",
  "key1": "5YVz7FyisfgEqRzGPZvDj5YUg3StWgYdGQmFektacZjjy8WQZUC4Ct5bwTz2Andxkk9Fna3AX5n2msgs8wnpmbu4",
  "key2": "3xKVmo2hs4faAmdJkZXnJKm37hy276eot2dHHadp5e5YCPqjZ4z7xD9eWBuhHJwdDBoMHTsUXyLS8jw6Kcv7fhgN",
  "key3": "3eZtmxbFGufFmzwsWwhwK9wS4DC5X2iZSJmz2pPLkgU8wd1vBF94MZLgmmVsU37Y9qyW5Tyw4qyGtSDWhBudhDRX",
  "key4": "2nS6s5Sw6VYFffGdXVvgoD32yQe5cys1qvG7PTXvbKN5Wa6P4fXxZKEtWsQTZrsZhCWYDUVrWG4N3JNoeousnKNo",
  "key5": "2UqV9FHXGPgvUkvHiHtFXzFziRG9ZGgEHpsD7nFYpnZ6fzsv7u7YPWGJn4cp3XX8G8eEYjDwUXtpWgcm3aDudxwm",
  "key6": "4xkkDRsAxEVnwBwTFKL6Ws8Mfp3BdKGAVF4Do7UEFVWf9VCUrRBBN57eJN7z51PpEh3M9UFeWcP7xnPtm45htFn8",
  "key7": "22B8Af6P8CPv5eXwNk3xvEcWFwwExSJf3tTahus24ah9v6LRkBAX7fNFrxrWxgaBPnY9P6rhgtSra84Fye1ecQ3V",
  "key8": "4Vzdw4fTkiNrySjJEvWyGETgGATzbbAikXWEPTnygkcNxDuuVdNNERs8yvSUUXepQCoSsk7wCFXAsREY9rJ99j9u",
  "key9": "G6hh2Q4u8Rm5sxikrTzofF2hya6Zn1pEoDaCcyFcjsqSeH5LULyXzTVy3NQzGvhePoUuCDYF74ukSWrR4cdqZNW",
  "key10": "5KMdLSXJKpsqmCYC9fnRN3vqfMqffJDZmdkB2Lvwmz89XUXrBDi2eTjg7VpNjoGyA6Kgo3SB3dB2qdFdAUtHnvQy",
  "key11": "5n9NZa9Nh3VTRLxetfYUM2KBeuCuqGov5syCd2QFnV9usBAgEb1ZcNTpscDzQWHAGyMyvV3hLzJRxFu1SFERmm4v",
  "key12": "34KpPcmvpR7HUUaQAo8pegGmeHUgcHhECmW8jjzTQmRkQdtBuMU2Ae7FnxN7vWq1WqhrGtMffrvQQZUUaNdVHdkZ",
  "key13": "5MLt3sdi4k6ifxdPHQQ4etHCi2H2VixCdwQ79npycHJbeVDf1uoAjA4cUJhnty7vQgvWUeym7vQeNAxeNskJ8Fck",
  "key14": "z2i4SAdBHFiTxJd4seB7AGC9cg9TtBvbqSZcDUyrSfu5jYbLPTj3rwBfNwW7XwMjvpvhGCDwcB78j54Jj38vQL6",
  "key15": "2e2D6LFopbkYiDaG6PtSSg5NH4fkohH4M8vJJUCjMYdowUobz1U3dpUmcFXkRJgQ8pETtQgTT2Q8woWKcvj6fDso",
  "key16": "5tXPxKrbCSfxiuVLi9dwwgp6fVjGq7AUgQGi523xekPRcdoJ5M1cm3JCsGqPdHm96F2B3cPwbrxAFtcexiGubES5",
  "key17": "65qJGtowv7L5jSEHkAEMze2umx8oGrPV2biQSJLJZvXxYfjQCgXFujJWKe4n8dkV69BmgdW6CMc75PUnWvXi7wNf",
  "key18": "B34b44NGktomiCuTPuZmn1V52o3VRMVB7JrtRwNzFzP48eUaNL1waiZyjMbk2xuB2g5QLP6rnkzFUmnFzsfcZrG",
  "key19": "QqmzVKCfVvsELYKTitJWXSfi1JdGH4uEi83cvJH618gtNcT2ze8MxPUZDgcYWJr55r38sCQWAr6zuBdCEUHvx3M",
  "key20": "SREWD7utAwyq94tcngjajGAhVVhwcLYzuUCPhAJYKgH2pmrScru1k2PsNeoo3NudaVZYxitT5yJwir2MWZfFo9T",
  "key21": "5nrEHKugt1uv9X6hzDX3Ay7Ke6iXgCTgYUkSeTB22DwJYjSxBWYUmE6RCUSBGqiFPPrYZ9e421yUoixZxEHJycPP",
  "key22": "2AuVbpm24RsBpgB3hv7rFFyEsNVbewrgiN53zd58rPPUgJrooHGzAgqMq6RzXh29t1sEA27Tgrko9WrXkQURwuQg",
  "key23": "4PpGh7KEycMtVM5nv5fbCJ5xU5kXeCEJqh9saDtUpoW27yjh1XLkEbdNUXHpLsszcWmuontqfKvqaVuobeGXkUGn",
  "key24": "5BHBmAkZKQMkGPPsxpNiP3yPjzkPra1x23Sj1t335U5dPMtUY1tWPCAQ8hU2mvGPq9rHDbcx2JRGyNnHiEXTJ7iH",
  "key25": "55HescJhUMAtgqJ8fV3LuzjswnzW31GvVRxvhnECZGjZM79388RzdYxF3SFXF7CkwwUybBJCWHaCMkB7xWeAW6gL",
  "key26": "2vmP2LoAsxcaYDzZmWaU5fV2ypwwirCUyaTMPJQkF8rS3xEwvqmR24wzXV7BLjBym2t2bFR5pLeWwU3nF7qTWuR4",
  "key27": "5SS92NnboXDDhTL2EAmGmzFzCF8QApEAMykzjdvrjuF1FxvQyE1hBFSkcR2hmdymKmH9UTE8npDmiVPZeWDMq1pf",
  "key28": "3hshGjUcUPKvSRJ4hBz8gLMZYaTepsAUnbx8m7MiESjq3AsVcJL6uoDjdTMdfWMD71eY9vGrWZCrcVcDPWKSpyV1",
  "key29": "569MuZKQdAPvqpPQmAP4W4YbbnVy8ht9nWjPeuxyFrNb46reKuQaUicX8W5NQXdhhPTP5fF8p35djRpeB7ZPYgQA",
  "key30": "Fx3byWfSQm476fkmNazixc5DrV5KA7yptMaawK5LZmn8xZfTCzy8rUEKxu5SufqnMyoD5MVdyPNxMWiM4i4NQfF",
  "key31": "2iN8xj5peAwKNr9rC4v5ya1vNZmeRuSqXYsriAmrzUK6ibo1DVwfcoYoAxG5awu6A6mLMouV4v5THF5hRAbYHQPE",
  "key32": "4dA61ZgSVyPhYfkzcagAM7TpJDuD1SUAxWViMMnBrxA7EiTRocXf4w6HsGJJXoFoMeFFCPsPZdL7FVXrrF2PW4NB",
  "key33": "4tkfCx1dUbgVKa2ZUmJsxuVqcrc2zZmkqQnCj6uU3odhtCG3nvNeQxohh9J8EQAQtZZ2VRbk86zBBLiFfCTqp2fv",
  "key34": "4NTbEVavnvi2DnLZ7UHLqheQ3e92UMia5eiweTQmMN5dZb3X7crvob28z86C89phQdJuZ3wkyA8b4RYrGVjMmi3Y",
  "key35": "SdcHvyo2vJ5ibmbpM7EmmwQRRQKzszk3bL5KzqcFe9BBcEMwzqSYsPJhsPUGuLqfEPjLFovpaPv8iEvxVRfxDgT",
  "key36": "24MFjnYexkh2J77fgFPCdRuARowoRkimaQzTzPjA9kHz8YPpS4qHo1bjjgmbVN6GbrATg7aWQT7EY2M26zKd86nC",
  "key37": "249MjBXDNwd1ynnZNxtKLkhxbu6vdawBfioeHA56fr1sKZ9qbihPm3MzPF7oLXw3so1K7yzyLYTS5D512hqiTHro",
  "key38": "4xzEx1Y2oG38tvC4pTT4gQ8s3qg1FSAL8D3KQcdeGBSuJTHai8HtbzgnwxGqw1z69QCN9kMkurzsMCCFGdnfsEb6",
  "key39": "4aqHtgxefh2dou7xUAcRc81jWkwjNDEurU8eXrNPnjYNHDcuow78ULmbnLGZ72zZ8TZfcNuGsTsunkRVqKexa9h6",
  "key40": "3T5wpZxK2PfNPK2ryd41wV1q235Au6bREEYAMpDE7uWhoXnZY6s9FD4qajdGHeU1PEPdWL1j511c8S2AhGyL8WPT",
  "key41": "3rqrgeWZRWM8eZcrzMHmTSDLt6sPbJ2mD928r8P8Y92TvwiTCHcHQyZvZQLaE4CDaGXc7UrQpptJ83asKGszVNTS",
  "key42": "5GUg39ENe9FoRKpVncQyoovJia8WzRgQhubfwZfygArqdsCchC4p2KkiceaNAGF8B3w6YdwscosXp2qX9H6LWwn6",
  "key43": "4NiKsVX4roXfjp6eAbdniXzirGTit4oxatu8rZmeQ86JqnSbuZZ8eNtQyQvjph3J3KcEZE1XmMcvxP5HXh9PBbQy",
  "key44": "4KN7kfViogVs4r7Zo7wX566ywW9TscQBk9uY3FpmtQuaZ5cjGJmZA5aNsnLaCWbdUyNk1NtnTDDZ9ex7seM7voLL"
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
