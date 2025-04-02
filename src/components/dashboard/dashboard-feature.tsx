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
    "2fGnQSiAp8ih2Rzw1cygSfaMaftKd5Ph6NrXQK5ZtNELUxGRQKHMD1cLEYodxcK3k4Uk6MN1EnZwTZdZDhbM5Sbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Kib1Hj9f96gp5Fazed6vFmUNfhAbXHGChuEJV71XZ9B6HCRViwqYHur3yP3Tqt2GZ71thTrtZ8u1a1iqpkG44b",
  "key1": "tc97FYwT6WxDdZ8YrMRSzAdviWeZETV8Zwv9NGqXs3y8i7MXTAcRLDv9emK681ExnovcRpyfFPzvkcQtGaL9Nwx",
  "key2": "SoBZhCrQmNTJprW3ZAwDdcTtojHRQ8Kq7AbmfsvAmoZUGW43m2n4NXRdLP29W3mSxJi5FZg5spyqgbgCQDep8si",
  "key3": "44YF7u8aTRs8q1HBd4H4syyUuxz9qfyL2N8yVkiNpNfhxpWtiSPfjXWrPFEzk7N8ToaEUNaFHb3L2L8mvXHAQikc",
  "key4": "3RRZwWTsMdyAJCJTEdDd4qYDzg5wLKdy3vc6A3g8tCuTUZaUBSWi7jq9tuLY3jYviWWs7zxsGgXxoY6uewbL75eB",
  "key5": "3XzX74FBPJqG5tvBiQDRH7AARZmQaxnfY4e3d4iUGxEpuPUkc6Nvu4ah1i5kXyLXq3DSpzCw6qfzVzQFXq79chru",
  "key6": "3xi5KaM45qmeWpUWCbZLVcWM2HtwdfBr7eYwgVoHkBAkpYWQUT9wdvt1G3bbZ3u7rKeciUb6UTXPhkAKGF7Ps9qz",
  "key7": "2NrgGVAqmDh2nDCs2ystHjHk2RLvQwH5xL3ZRSp4CexwdfKB16zHHsR8uSYdeC79SfCWHwM4vDKAxBtpiUvkAPrx",
  "key8": "5KKYnYPjHipx2e2NCLRdoSaRsbrhwbEDXiPAFEjFABzfr47Dgvsk3Bb6zVV82vqwL2vHRNaRV7VpTJVKXtwyJpWo",
  "key9": "4DY2bxqvu8TFSFgeEaaypAcJFdKkexToj7BT4PeskUW2QfKqUfGdiy23HHtRyqqLtoiKNX85Rj9DnUCuN4A9cyLh",
  "key10": "4EjuPukX3uEjZEaAtc7R2pT8RKuV7NZ1NVbfxAZy13oCMWHytQpPuznYD5WHxYDjf2vM6qE73j3s9desnrka6HD2",
  "key11": "sgiWkxCTjmyhEzFRPDq3oU9YTmEGzsVtucmdiVZHqMpdgrTdHqaE8pmXiGYBMEkBMssLiHVw8aNwawVoVfavRZz",
  "key12": "S5YMNnmSGV4CemFeJid3jsdHSD46NScWZgQBXHKyPaX5XTgibBmgMySang6nYm93WJoEercNT3AgNXQchnszbcm",
  "key13": "5ErVDagNKS7ECgDJiQ26qnK7BfApnMd9F7iaGKuAJ6DPv2g2uTuNM8MuW1k1D6dLbVpwm2jm95CcHbsYfTQM9DJT",
  "key14": "2G7ebdzYQNR5Puj2QD92mXneyK24EnPf7LEY1cvodecQNtuoeW4LAmToW5CE2vabALKqUgiGiArf1JJ1WvZjwJLa",
  "key15": "5i4xkZw2sjvXRLGAdR7gcGmVFn9QKoYA1NhgyNTwxYWfMWjnPM2j92HXQspCqQtEU4oqf1phVHUEiG3C1HdYv2sZ",
  "key16": "2SwZBPro3F6WtXGLzgoAPoikrfbwh6o8fAappqc7moTpZ2aT36CWCkfeCjw4NvyZ1PKTuKt7jd8mYCgXqDmh1QHu",
  "key17": "2MJVrHwfsDLXSLyRFCvLdhtAPiRXmbfqXLETy6gW7YkqFaFetBKpjhfkKTB9ZygEDwwMvgWJqmxQ494moxXqKC1a",
  "key18": "3sFK13nvR9Sc4rVvyM5QUjJvsoSyjRNSyqkcGqbkkPUFUcRGXZvvWBW3xeXMVJbGSHVAW2Fx4X37fmSMEo2GakEo",
  "key19": "65sSxkTLNjgnoP2TWDeTEZ5ULfzdkduS5hYZ6eMGC4pmMAeG3PHCx6v7u6hfJMrNTFuG3CVVeAnkdFkxa6REbdDg",
  "key20": "5mGCeCFWcDa4ZgvNqTMfYUnta4S8RB3in4sZDBAozDy6MVwAZ262BLonjTDtkZZgfcUsg6qAokRsx4DVroZoZRsG",
  "key21": "5B7zifWgScCKRBoLk6bPHSYQZvhs2Rq5evJUTPJe6NZKK35gv64Dd49vV2y4gpixM2DX7Q1XUGs56o2RisB9M4h1",
  "key22": "2eUdLUXJE7jqHg8KK6mKmoL1GxMqxKhjaz3mQauPW7hEERdji69sArtSAoJQA7zZGxt9DLxvvSWfSTS2HWSwLZrU",
  "key23": "3p99QCp6YWZqPKH25hyAXaQ8DvZ2w2kxJyPi3mmwbU3dzXxjuaN3YaQGQUXvHernkhfsfyPrxABxgQWiTdb4B1cR",
  "key24": "56QV3y6yxBHbKTXVHY74bTP9HbAS6bFd6evVSyfKA3JSZFYtQM6R2HMp12wAK68ypwNeVyMWs3NdutwndSxaL3HG",
  "key25": "2HKZ9SfVcjxZ2eV8YymT4dsk9wHshT9LSf7HrfAb9jkfitdfmZvxC44MSTiT3d6n4L1d4sW6wCHCZa9ruQVzouet",
  "key26": "4mRWjg8QGcnDZyCiaBxYh2STpRjiVtTyFGqWnc9jFf4DcRpuXe15dJ8pWeUNBruPNeW1Xkx41WbegXHTgaBEyjqF",
  "key27": "4oiwAeDKDMXMY1csrzU4VzFSkwVV6wBdJeAXmXdwgEPCQ219SASH73wcviQj6cSUYWWp5Xxew1pH2xTnuFWzKyEt",
  "key28": "sH3uGTi2TybH1YhFopGBTXj983janm16sQ7sUyTBSNRJ5ojSephtXWsFZWukGBp5eyDDnSg19zMen15dJi4R5Cm",
  "key29": "4AhN2ZBBysGDrG7h4MWsA9hUQpvZ1XBGd2mmCUuurewTfkbYWHKBzo4YWHvY6QKGeubGNZKdtQ83BkvmQWNxF9oR",
  "key30": "57TJGfscQFBNN9XXXBekWBnLzPreurpeZaFRLo7HJDMPxWf3eRt6zWrLpPrC2FbE4ipevDW2o7fENtQ9Kuy9xdtg",
  "key31": "kiJXq3CMjBo9sVKb868mo5tjM6FMX7U2vLBWWSfPXw1VY8vbHUAYdBsDXmiRuhW19Y2nqNip2dHNw12n5Bwzg7k",
  "key32": "4VZDTjhHAb3dSVn4h15hBFT34RUyeiEjwFG7Q8NVCgFkdyFKbT5xLbrZETmREsNLWxuQvqvMYLbYkShVTuc5CNgA",
  "key33": "25DYrxdpJdtfLPc83FZdHrVZS2wcfbqg2zzgM4N99DhSaDAsfCbBspuANhgDTjPFXnsy5rB6mQyGffPwXyf5B1Lx",
  "key34": "2XeguEMZJXvLRgws7iU2WmnbVakdmkxQ9QFVWYQak627HXycE8CVLphXeqzTjuPXE5JuTHr7qZhaT5pQuBXSZSD1",
  "key35": "4tLmfy9L5QiaxqRMJvkNAnufNFoggvtftF7aFqLpuL56AcBxAMJ1R6n7sWQtSgpFvjQANxv4XCQXuxk6WV3E3h4",
  "key36": "4GGwxeEBbDEqXmqJYwMxkzG1ZiXWdPiXD1es4wSr2UcopBjPCTDvTvLiwirTov2J8AEUCWj1yaYTdMzDPdQ8RK7U",
  "key37": "3oQyvXu7D1Z8femZg5z9MMf3dUXAaW7PogCunvRwdtGD2pqVccW74yw3DZ6jPx9QeQx7xiurcQrCotx2Jywtxwaw",
  "key38": "23FHZs5ecAoW9Spk2pniMqn4Q1FKy3RVXP1PFKAvvzQgMhmZPAtJBQdbqCNwdiqb4vpzbKnwH5GFkXK8pVoDjQLK",
  "key39": "2WT1xkDwzJ4JwnMFpcU8Udck54JRB41JMyBGsd9E3KcDZRMCz3SS6DzHakHkvMCDkYCgsaMrHQrubzv4zBpLosxv",
  "key40": "fHdyUUeAdJ9R1wkch4NNZYVd9UoiFPM3diHQWUmYTmKfCKVc8ib26s1HM68f11Mdt6g2d5mnLx6mcCbgioaZryn",
  "key41": "5VD1Ft3G28RrhfMiZwpPPuJHy5kwTaCDMm1t1oH5k9DWQWjiJUcnGbf1h91MkgFVKGS7J3ZsKb2B2LS3yfsfPBg8",
  "key42": "4rq9v6jxTbCVRv64Q6SGUHKUpmR68g8eiJ4zwffDvuwVuynizBUg4ZT2AmLHKx5rDb44ANiAQ7APkkPtpa2pT52D",
  "key43": "5veEjBqG9X9PYZPCxj34Hv1wtVRCizeBHoHiv2EG139n6cwhLhL1QW1KZAtuR48Xd7CUrUasgNExB8pKW1gZ4ygi",
  "key44": "3hxMZUMRZmFnhFgdZPjwfPEhX1A8DTKhEiNKmsG3Wk4cB8STHHVQjVEohZFP3urpADyAt6rkVmH2ajZvQMSB8dus",
  "key45": "3XuuWtvYwCBtyZGWGZGDpT8eeGBvDWKhNzejCMSSgZBZPPx7NsBk9nXYkctxE5vNYKrboVL42RG5pwGSXddw6XHA",
  "key46": "2rM7Pjp15rSuJoqAnRUoRx3QZETJEfEBi5VuALmEUDvLMZinz83tjonzTtDkiJUq63ZbKAYSDJxbwP1ciYSCTCHV",
  "key47": "4pZSGLevMvTJpB6SZKgHzzKCBrJitJJVzJHMbNyiUNYJcwPjxqnQfDJaJmyoxPcbjqWx6BheiDoXVHqt1TgkpRZN",
  "key48": "64fENG3JtFS2QKGPxD1duVRCxhyPcRNe9xa7ayhaGUJWR5nJpUJZwC5rShLv4y4vVp6dNfdvbedokcz4rdkS8tRU",
  "key49": "3UGTJLikKYx3cecejHcxUvqw23r6X7uxbwj2p51QBtMKA4zj1Gs1N5P4Zga9gYoUMca3vPtbPMSppY4krhV65UB1"
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
