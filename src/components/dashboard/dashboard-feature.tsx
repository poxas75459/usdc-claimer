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
    "nCg4GGPv5LHvXvAkqfQMZxAyBDGauDPBvPP8fqxcoZMd7TwnaD7uUJN6Daa8ZhZCP9TAA4ujnrcmPq74njGpoBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yBXcvhKtPxTSaKViWrtT4Nyx61w89BbJgmgzmm5uww8KgK6C1Jqar6UbESPdcGV2HMo5r29KVzpGFmubdMxaRq9",
  "key1": "5tD7ro1RsHysZGaCuVm1kLMMW28Co7JUDjPJqxeV2KdPKGsSwcMXv9NwKSd7jBhKHd9JiFjeipPLcdTumefB5PyA",
  "key2": "51kEZ6EgFWddHF3vTe1BCKjnpxLPBbARfw114Rq4jsYaBZeko8fevZUaCHMrhESFQZJqYMax545ju1w4uG2JRGV4",
  "key3": "2jL99fUManvD5e3Uxjgs44FZpVtVm6sefgBMDCDM4FUGtN4pjxehw3ukRRxfpgbtwdmHidVzUN7vfyREtgCb84CK",
  "key4": "5BpUnK5F7y4jXHxW412jNLuRH8o6h8cekbNhPiBWuSQBuSxQUj6GYYF5aGxBGgqupsbw82mhkGP1Ws29GtFyoXpn",
  "key5": "3wpuSwTRNe182LTq22nfGYtxnvJUnmPqPjsM6PKC7n7EAWjJLKbLLzZ7bufRBZQRR7QyCwKiRRhwFTAUXXW1wQfT",
  "key6": "zCAUQdfbyLdgvcDDrkM1MT6Q81SHVFLZmJVjJswUxqXZnwzxYu6YVrNDis11TG2yfmMem4LPR7t2sELJnLAWMyj",
  "key7": "3NcTs9chz7dVYi2zFoKAcS9Wro5HNGeysmRJckA6n5SnCSCCZXj9NNWEu2ZL6L7EsGq7hWXHodbd2wtPPi3M42iH",
  "key8": "64gZp1xw7S15xDxUTxb7fENmjRN7dktKWqFg1UHJivcAAsQG925bXfnMZmHYfh5BEZTM72N3Ucb1YAeqdCqB29Wg",
  "key9": "2thZiWEDEh2cH7SF4fcKNUDmh7cszDjheVTh96xaXWJC2qtisMmGrrJX7XQMqpjcdMDEazP1FRXSRi1L29i4Xzt6",
  "key10": "2aWLf1jmqXt4KuNY53Mv48rZrsh8Yu9XJnXv6zBW5LL6x34d9k8HDpfVCDvZ1RpWgaXNkgNMTNQPYk5ujKoduNy7",
  "key11": "58taH2TZnC7shP6CaL89zxJArBXfdg89Su3CLBTVc2oy2dBedDu67hA9tKmSdfAbJHbTZrvTkpj9iChmd3sVABWh",
  "key12": "SCn1aEQsU3USaFvbkNNFMRCE38aQ7KiBS8FD9oaf118iaszgue32qfNHq1WTEBGcHYywpJHkRFqijwyZ8p1iXzp",
  "key13": "xV3oEjEcafjSALHorMytDisshDrqENNUKjZM9SqZwBvU4gAYfFfm5soQLjPWUSorPhnuA3asksxH7jjpELr2W3U",
  "key14": "2ZxRYb82XSr9j5h4NA6e6hLGfyzJaYLhmwj59XJL6b5oKodVmDTUndsiQBq8x2u1DyDxZiGcZZ849cohBrhDL7T7",
  "key15": "5NvF3A9Fx3nk4YkDEbc5BiXmHnjes9d3bucJqwGv8LsnUWER9tHwATB2EBFMuhGKEoB5QeupU4J2PQz1QEETxx5B",
  "key16": "2RV7DG8dXsCPaaTx24xovS4wmzHGBGtGYvZ91MNGgMW5zznzWPcRSQXXAqUf8DpefYDAm8UunGFv5RGzBSZ5LAt",
  "key17": "bmsDqsCpKFP9VcNK8ATyiHqpqY9GULn7LycbnqrpSREAhZFnwGE1Kz3wggxfpWChJnWP1fmuqQJskTozuC43ZGH",
  "key18": "2t7Ze7SWwM9t1coCTHikEe7QM73MZijj2PELwpXJ42hMXQgxTFHWxnKnXCMEjwBWEv7xAwKbMe1ikRvwc6k6V2uy",
  "key19": "8mQvdDY61o8SxdfPGZxzZ5D1LFtQvbz3TPfYdW3f93DB9dW6ErjHYQrYf4jxYWRf3MNvdX62M3zD2oP3GBDzJHL",
  "key20": "4TvhCu2fWkHyHbMPUKtfbroPmNkqHgYfEYj8QgiqziiSVJMwUfFg5PuahzQ8XTmYWEga5tjtsBggjzdDtjBUW1hp",
  "key21": "2r69tnDg8T9CXU47iqVyxaBZ17sdHdYrtszbPr65ZMVArJQmQTmobGB56gwbCpUagdKymqkjdruNdFQWuUcVmTTm",
  "key22": "21mqmFx4Fs3WRrodR3yTWEUHLJ8z1EEf3jqHR4YdUpwZWUH3HYC1S53PRUQwtLFqxmnV5nT42VJcVvZPhyq5egEk",
  "key23": "5cw3VfEgZ4ana8a9ofyV4WKH8338Swew5Aa7NbaCQcyP9X566XC99pC64pSdV4WpeiPaKAjw5kFzDx1TAmxSbtLd",
  "key24": "38a8FweNE2X25DisNRNexrQV1FQ9Rw459umxg7zFRtjPmg9f21aicZgP5epBJ3Wuq6D7t9zoxdCUsphEiSgv86Ua",
  "key25": "42BXUhjvxNRwF4JRFNTeCr52w1DzWVeK9yktBB37Ecezp73XtTV5HmUz1c38XMLGar7YgCtu9C6SiQDQasLSZ8ga",
  "key26": "3jAggZxqzurJmvmZnFUfcg1gb5NJPr3rUFzJ3x7rUHh9Z8msRYybjcTbQJeYqzEXJVgvzaD1ksByfZA3BHNiuE1p",
  "key27": "2mvN18DeGnWxg8bvn6Vmyk34q92LkFgZZufuRbEfJGn94ChjYScvrzSeGzZdN19DCZsxsntBe9b4vEMX4YtQU5Q9",
  "key28": "GPqrvAJ85dGCSbAy1Dyaq6trzbqFxBrNYsNkfx9q4CBC2pZcWcphbtmUsHDyY7854kpWPD2vVUmi7v7d8dwTwSg",
  "key29": "4CBb4dq9iF27kBCLDopNnLMPn9NoAPdjAHvbfCaEqybwAwXYdfDXSR5r9CRnATj1U1SBgAAGAbQKLzSYmMwvkoR4",
  "key30": "5K9jfpPfiKBWTCqhYD8uGxcrKtovdiGp3cMgvbSF7FgoJsPd3KGTiVeBs7UguzKYZKtJMzXhokEw5T2viUbiwVe3",
  "key31": "2Pi1tV1Ge1uQGoCiUGrZ7EYMM58WdvTd7T4zj5L3eCnkovjUgiJy39uUEs7wjXYTp6NiTQEPi833i8hRqARCu2Y2",
  "key32": "3CyZowEH9spv29JuQ1U8Fz9EyKi5G8wvhjRG7u3WYxyiL8ENSTBjQz9sacuuptdfJzp4KweQGNnuyTikE9Zsi9iB",
  "key33": "34yVjmxH7QSe69B83kX1zfQFdpLbwiN1YjehMmWk7aejjF1679j1mFqt7YrzPjP71KYhum7MGjgvSR6jFbrk8zpF",
  "key34": "5mc7jjtenTdos1WogsEkZne3s8pSSRT2F9ZtUnh77ohS7cwfGubUDnHTswfhKvh8dgu35Z72v6mhfNVMmuALmKkc",
  "key35": "Mn5Jztrb1chiKp1BLrFozyf75rwbW6XpxZLqXCtoURcyV9qiTWJQi5WZABJ1jsvei4BGeS1VbpGggyokDK98HJS",
  "key36": "4yej8f5j3fdvC7kHZWwQkYV5sBs6tvh8vAWJAVXfMCZhf54erx7QPAyjoAU8LUdeEgwc1NBHZdZb3wYodAxWopvz",
  "key37": "ALqZwD5uZ8QTsbBqQHGPPxdFe2BdNbgg9bJuVkQj6YUAdjj6xhf82iuTjmjGqnK9Rp3hqqEpiTmn9oFo6bLUTZS",
  "key38": "4i99ATneSs8Hy5nQYCujdMPxbkgCWBnBQPE9dxT6k6p7bstyWSKCzfv7ywr5UfHezFA2Ue4Cf7kfxdyDgNXagpye",
  "key39": "7zJmYAbueqAydXhMEsCtc6J8FsRipVTpVcxmzgvLyxMZC4HAq7BUXhVq3B5egkxwcK42j2oMzDJBGXQAJ4TfSfJ",
  "key40": "4gUHiyN2nfSBh7SfZscFhLM1Cip4Kn4p3SXqtESYP7GDST13VwbU31B87JDCsRErLhqtcU3KLJLkQKnu7UwDGrN2",
  "key41": "2mbYZ6JJWGmRg2ZepMA8xPbDzHEfhiN1YRaPghAdPvKWFwcaXL24Q8a271gbgb2wwvK6wXaUEfGri7XuK6WKkucg",
  "key42": "48WcHbKyHFdPe2QcD3dfRkvUK5NCfDBmm5nXVDV24Ze1ngejVvu13Rc5CE7qTi9Dhm9own1Dkmdx7ibERSxPGHjU",
  "key43": "2gxk4YSwpGXUEDo26vngo7joihk5ibm8nQjgYMNc2H9ENHV6Z5Giy1muH3V7FPTyPPmPQjfp96VwjRzo4JQofyYS"
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
