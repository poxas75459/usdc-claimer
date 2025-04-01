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
    "2ZhqB5JQU26uRB4QKPUX6N1AT8T8UPWK6A79XZChSVmZPeThffuLha65cftoYW8NoRrqGWz8Gr9QNwCnFeAUiPNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53qa7xUzifr8Zp9HcWYWn5EsHW7EchYyjgZXuQ5zdaHsFjGoJ7jQpygr1SBCPyu8WevRJB8J5RXTX3P46YSrTuKy",
  "key1": "5DALc8vGQ6Hrc5mQyKnhJtwub5m3aivi243bJPYF16gpvAhPJPVWPrg15cNApKwQVa2BHy1FeLypzC2eBoRywwJQ",
  "key2": "38dvAYXyjPmUniJx6GqQTaWhtZhMcd7bv9g9Y3mKJEqSsGwfUqxSvCkAX38BttZs5dLBqbqJTkt4wMMaEh9VEVpZ",
  "key3": "638r9T2pSuym9tcCiFhpsssJp7CrwY2PKi5JrBBZDnCj1VJy7ridQvpFtiKJJGSzFCdJETVWLQMknKA2JJCe9dtW",
  "key4": "5eNCpmjfqsCYDdnzeAgLsk6beL472sMfREXcEh1mb81xvJe3zaWaj6phP48HNDkebPc3Go3kZGAzHF3BbTxp6SgX",
  "key5": "4iG1RW6jFdkuQ4h7Eq3azLYd8o6sKH8kSZoBgYnF7T5BBUc3zTfqoPd746ZEg94BF27Dvz4ABXowngQpBaEZa8ak",
  "key6": "5SaM8nmEiFRDop6QSVRRLEN3jM1qtDPVPMAC3E8BBPvhiCtnd41Vcn3GTqdnZib1yGmRmBgxNFTnmD6H1Qt4tfzn",
  "key7": "b45R8ZCSm43xit3zLLFhKComUwjT38wLCHpgQE8HZzhQDkckHXCtoftnDoCTCp9wdUSmLroBfqmK9MPccBwjazX",
  "key8": "56cURhSWULrnqR2HccSJEZzGzRDHXEzY2evR9wLPQjR4KaFo7drSP2r4thAjysbgvNM8ya9aycXVLzm3UFS3cMkC",
  "key9": "wWcEMFSQoceXFTXMAwJPRg9ykEspwuwRfj1ZSWwrLcuWEp3i7xXY5dYLoK4oGZKTgGPwHGypNu1zK78b2YQHjDb",
  "key10": "4GsBXHEZSAXrehz4FD4zyHed9SePt5SPyMwbvp5WaN5JMd96WekxvZt3t3EQqpeto1eUPmgCoCh988VhdSSANHTk",
  "key11": "AwL663WZEQTUTNMWFLUVZzaeKLgc6RgLCZ6XMcMmzBDpdeqMPLyx7ritNsGpx3cYYsgeqje2bEUVLacLme7XGkf",
  "key12": "6Q9DMw1yYB5ucZZJwWPQjXiWYVEx3KBeGC3r1FeZpSH1H43W4rCWzv4jYNGnfMSpjCSpTakkYcmJJyMN39KcCZG",
  "key13": "46jrU1vF3kwiYmXkqT3HzECFWJmgTNNL5cLotzxPERjRVsLkb4DRp67wBA4o2t6UDc3fL7hntwk2xguEm2vVSeZc",
  "key14": "4UAuLQ1uHWxaDAgMevH5y3V9KzSiqQZGB5eTGPyXGuxTFcWsqX6LAMtYkdnoNTW2oKFxsxxsp4BD7tcNR7mFVx5u",
  "key15": "2Zv9zLjqBzmnFmdbXShBCsMeWdTD8g3ycaG2dSqAcWmdFcQDJNb8AVkBMp6sJNtcfJ9ATqhdkf6QeM43FdpyJkYj",
  "key16": "hw8iDQTVMCdzKowRRfW5TWUdLwUyybaBW1qGwGU77nAgR7nLvUQSnvxomUCkhkBbCj8SDbQKyK5LbQCywC9wRQ2",
  "key17": "4MJr6zFZaQrDveXsvmjHzhteiafPiuRpYPY3TMJr91ZfJpH3EdpqCVgSbAuHQy5PnYJjT2NMyFJQcPyefyEeqtfu",
  "key18": "5u1ETSuPqj15FR3s3WEodogRYYhfGkdxPtC4sWK6jzLmYW3VGu9mvssf8A3Z24zQ8vyqFjfqewk36BZUzqQFGs9D",
  "key19": "55q4yHuxg36Tc7CwusKnUVKmrZzJwJpA1ic3SZwQQfUc69MGh84xD6EzFmApUAWQirQta46USA3k9Fm6P8ecwwPh",
  "key20": "3YKbZGrAMkrqMb7gHfmFveLr1nLV8ixKNgGv3s12x5wrfe148r5GDqa3X95UzM5rPYcvUYVjSoYqCd2WXE1whNYP",
  "key21": "4B1t1UYHLSyFL3venshchd6NZnrcTkS7FsyzfyxG6G5REyRMUeSLiBULuKDSjfBa3KGTu9cMLsT7CrHwzvSFQ33J",
  "key22": "ahKoJqrs8mtGZziccH8XbJaYgvCBMpQHruWtg5gDuGrzF6nLWKRm4c7r6iPX1Mc1Ss4P74BvEghKUmJKtonKCs5",
  "key23": "4uMivtxVrKqMWaLHCSdf4aaQwaTu5Mxqbun9YkCEThAAVCFfms8npATvE8ACdJYs3u8zC6g3rnQuMfttpcYNjoA5",
  "key24": "34Ej53r3ZFuDS83vL1nHtsWPerQ1Uv72dc3iCxBqPBh4ZzMAJsNQeZjjw9E529HtbuKX6nXNC8rw2EkX9HLfbzAg",
  "key25": "3CjCyHryenmTQL5Jmyhf2S5r2wpwAtugnR633MjpEE2k8kDnZFD2L2Hvbj2n9o3Dk1qNmNo2vmZ1yDA1aNtA7ETu",
  "key26": "XSgbNcEYSJHHnMRp5u33DBwt1L8FCm4k7cyRddF9qGB5QxBzq9t3dCi9sxNYS3ibQDqzgLvjzdsQXDhQTbeG6PX",
  "key27": "36c5CTkFKc8dYMMQXJ2ZKZrVyyjZwZBWbufRb3DyVq5wN3ABawyJwjhcmumcuGHhVj4LKgCse73BEBEStnurcxDJ",
  "key28": "4ApaubCWHmzHCupzoKSPi4ApBJqaRENphVnS98JuXwajLzcwr18VmLycnyAsb5coSSz1SE7Aprpf1HpZoiD1JgtL",
  "key29": "2Kk7VpMYaoAYx4g4x64NjQq9qD84cphj7VzSPZNE52zSZJfxK1omG9ccmC42V3KGURoYdBHvXGs85TbvbRxLGZof",
  "key30": "3AkkZqyHsUzAXmTtY7qKB2VQ42aMTvU9TNfQ2cEozkvQAxv1FLQ27BMgFRUPZ3DUPshrPvx23VY9nDmYdEAnNSoz",
  "key31": "1zTvqYpzZC5WYHBvTSa3CPREwKcLHGgHPCJjVjgBvLmystDVknfSD5o3LvB7MBSXBug8CN8j6Z812ZCkWB9QXPz",
  "key32": "281nCRRBJA31yJQ9hXmusYfEaWQTcXnieD3m8TGmi2Aaufy1DipuXheKxXJMWr4bLY9YdSr41NJVgRY4XCL75VKK",
  "key33": "2g3d6LnfXTXAWxT3t2d6xjSo1n1mnFuUUjoiHQRwJLztfCi2DgdHn9dNnra3DJYAYLSheHnZmfttqFY2JULuP9H5",
  "key34": "cFqQR42DRm3XdCEvWfrKNje2ea7TBXwbiJJVWS2zzAzvxYZvwzFsbzqDfzfYy45iPUR5yeu7byiUYheb745Psnr",
  "key35": "2NJxNBu3w6Fa9diXDzcpeQesLPMT8UdXrk8TAxsQZWKbmemRfV4NuLfEuCnjqTrbTgSYxwHTQS1Gg7uKJNUW2TAU",
  "key36": "5Q6SpsiaeB1aKD6sLQdVzCqyUYDpu2iAfUJBTGCaenF8gW7vaq5fXhABB1brSi7nF58jFLQdu22Z7xcAG6u8PGdc",
  "key37": "2imeA5UsM3JbTiyY3CJb8czd9XuDYLJTZaH746gSs8kYk4CShfBUJDBfyMemoavXELaVc36mbkRNUxvADn5THhRm",
  "key38": "4t3E7EqKJYhrpEJXSxqt9yQw6n68nFMnKmxFz9gdhPKegTHK23Ab65D8z4gorhf9V6MY1ubW8VfsZ3Y6QajCMejY",
  "key39": "5vuY4UHrbRi1dubEx2LDzwoGTBzuAs4xTu42cHUo2Nh5NEixyRzWLqaqYpXYsdWGkvyXcWVG9Ssu6RS9NAshT93j",
  "key40": "5PXMDNP9DLdT5t1uaFzWQtEB6TLQKaHhEiXJrbSZwBb3osgvXuEK26sHM7u9s7bPo5JhMRfJKWW2JteQ26XQKZXu",
  "key41": "61R1oQi31TyAyn3UEwDPba5k2ehLeQrDZn5pz4DuFY2KyJS2fzpLhv164eFea8WdXvjDEMhyFcDTxapV61D4ffN5",
  "key42": "4oFh5YLuL5HR5xgPpL5vd8cUzC7GroTFiAzBjpesXtABf1oqh1rCk34xaQTd2H513DrzZD4EkRtYW4ZpUd5aQ4Co",
  "key43": "WmcQXgkabTaPW6HJyDLR55TAVntMXcmYq98ETya6V2jUivoWrpqNfixPqV65J47sRajgf19LfJ8ayueeoPdzTMi"
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
