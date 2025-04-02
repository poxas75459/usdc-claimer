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
    "jBEUB2V3e2i3LiZyR1kxB8iHfUtHQXYYS9iy3duNHCUWXrzPZgws47iM6Bw8ncWpcDPVAbCtJsuANZnL4KmRfFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SG173vaawBS4eYUviQi6GPdauATzyZ1GQbcoK6dP9YA8VXUtHG7k41fCikvsLkF3WKKM1BfRri5Nh2Hc5UBnt1A",
  "key1": "3kUQ9pCkHQUq6Aeg6JBA3p2GtrSTm67Hq7zwc5thV3a2Bt43M4toLxWxQur1DKfaRKyaVzHfsogacf2wwyWWLy72",
  "key2": "2smxcJTK6YcYHkQ1Vdb9NrkTwKokEF2kz9gvBp7RNy6L5uqecrQ7XvT2o85tQ1WmF7ZXToyPiCWnhdy4Y2817zSL",
  "key3": "25YpEsiJPVrSKQiyrk1fPogaRtn5hYjZFrsfa44RVHp5s1bA5TkV8ze8KYmueZTYpCeuUau6x5HRuZbFCR12nAfV",
  "key4": "t1qgp6n5K634qnVE2tDWPt51pMY4HunFRa2CC2MwDJhAjzwJDUgYEMNqbuyuQ2LxVcx4auyF4Y7B4qYtcTpNvDX",
  "key5": "4UiEPNvnGb5vaT5c2E7VTELBcnUbbroafyy6WiSMkv6b8fKEhvY1eornQTnR7zBPjqGdUebA1PVLCWjDfMfofsbL",
  "key6": "3aBFoNFBb5wDxCXr9pdfD7ttnNhxz7NXq1Hn37Wmni4R6aVwmeLgNJWX6kGwq8LhSw2LV4UU11E8i27M5DAnd8Z3",
  "key7": "4GC6naRrnjcVc4HTWuwDzG8dmybvh6MGbs9Z7H1wp5X4xwka4ynb53yuftWuNR5Tj7EELSFiiAyNWDMubZBDW2Ex",
  "key8": "4sjLbGMiMUBWqajb5Z2AKhwz6CERrq5Y7KdrQPGtgwG2cFDMeFE1WVA3wwE5oXJUKkqWgMdZBuuU13cexa98uFqL",
  "key9": "4o3jviUZ4jrbbcqAtCiBSoHcLhKJGCW2SJLSEwyDhZU2UFrKBjTUJyinh3Kc8coFZjXD1jrRJy8ffeiXWjTSqExw",
  "key10": "2hXHbXoqUCCoLNKjbRom7Q3BM7YZH5uTBkjk4bzkxMo8TEaoFDEqWCWHC5f6dM8H65Ad8hUVatuSZFBRuSmDURyQ",
  "key11": "Wco3X1dN2Y2DeL5XDHgFd7BgKPT2edN8ZQVJwKkD7nrqFXEJN9nC2C9GMFJFw3Qui8sbGLx98TgYghpMcFu5BFn",
  "key12": "37UJGWY4gtf8vT3HSVqxu2Zfc1ASLnCuMrJCyvoebxuS1nPRMKbEFrVJHCYbbU1ASqoxnHJh8pSmhwkJBnEeLENC",
  "key13": "bAwvj4XmdxMAakScih7gHYLF9Yoq4TxqXCdw5eXxNhyu22nssJA2LbCj9YSQ8enNT5Ma8W372jihibPNY6kuufr",
  "key14": "3yyc5TJJtPjt949wbxFLbUcqq6vWnpxkS9V8dZpSWPboaNoiWbzFGGzxZwgamwk9dfcoRwysMyvZik2RoPdBGFHp",
  "key15": "5JksAsVkLv6YVMp3jshH5mSSEKsFhUqwWbtPaKHqd2uDBp1Wv22cPL1s6B5ZfCxtTun6sVbfpqsbxM6v3nnFFCNo",
  "key16": "5aT6iwR3CdDgQWUgj6GQSfhMRhf3wqKrGLETVg8ngGo1cq4UpLHqWCMeiM4CHu5piVMVopnGxDeCt1um1rR4tiQu",
  "key17": "2TwGvcVXSDC4PVZw2QFpfYQupDDvvUz6QNRteKxhtYshFZUVeedPRYvkmwVMoxXfScHvxgpDHtRtyb4BataZpGTC",
  "key18": "nCi6gpjmbrT5cgF224odoZCUdQYLRUEnPj4xH5njubtvW3EaLsCCrTLaUrS8iQ6eQBribBws2YYCMEXVFULetwL",
  "key19": "5qEgstHigkh7623ZzSLmCQ1Gf1GzayVupfSZmgVAjN7Qm5HLT3WBpMtvLvi2tazX3w7GtsdymReJ2Yuq3VcVKYsw",
  "key20": "48QSJhj7U171WV3YW3cBFTTwrGDkPzSyU7tgSBXUVNTJBZ7kQYAc95Anst9RQUbYza63Wx2wW3EGLeoWXPQuCvjR",
  "key21": "4VhDMLKduM6vPRUT2wUoBKqudoueFZ3B6ZuneoGKbELoMLDvxXCc4cMeiBcHXjJ8VDEvvbUU4cLUBQxC2bLpuFL2",
  "key22": "FCj9jFnLTcdpJRi6KtBhRo6UciQm7xJuibdZiYqkZ6F4WGg2qzZeWpyxkHnrtNxawasXQTQ9Jp9icMYp9fLBadx",
  "key23": "2RKaJ9BsP1qi8scSiZVMbu8ToKKwi2NNuBLbeZSiSnjUhy1zkK9AfMcDHuLYez5LJH11dYhQ683wXGaNVdpqKrQ",
  "key24": "5mfchWMsk7Su2ir2SsAehHcaYqgWRaAJp1wUomDSfREz4mZeYV39ganf3ZWSAiUVMCtPZ33gvuenfFexfujnHZM8",
  "key25": "5WEsA4S8tDBrGoxwdqD72Yb7S6JBebiCkJLwSq5qEG7nmhnBd9aWLCHvCa7yG29wGE2UvYZaoxY35Ci3HQMPXMtp",
  "key26": "4uYkb1gFGwd16ug16vQHKHnZVfkta5gADXU3hHtN75yBfVLphMVFfcsdB9NHMPXvkqbaHwYRdakTsXeq7LnP9Y8u",
  "key27": "KXBiwbATNyPjbPftCYmPcEjiMKmB4tnJCBa6S4MpiPMe3Xhs5BwRm9Na7X2Gx5FopXFwZPSRoYUVUWn2YctvNvf",
  "key28": "yR7NYjpfmH3zatbJW74nPT763J79tRVFA3dG4a3opcdjR4ziWb3EfcMod6EwGcdjgRHhu6FnSAFj1Ld3tfTPduf",
  "key29": "5CCr2k1fRinte2ojHE41SNtDAgcVWTCixXJ4K3PEXuNya7zTKHmKoWnNxbirjw85LdR9rsbJJpU1UQvMmEZEyuMd",
  "key30": "5DpLNNVR2ZA4EM389VU5oWcNodvxg3qEegD2cQx4zcnJVgX5HHqeKpxXXwj45CQmPQfULKiNxTeFHjvpho9VMJp6",
  "key31": "4ySPVe41MWGqXtBY8R3VK2CziyKGrjWs1Zry527AsUWZnQCJvR5chiVmK8c5ywqfSj1uMbH2WQcgPMwbZw7gaJGt",
  "key32": "3qfuZrc3qUvBq1xVXdNCigC8yhFxsSmswE4r5YTsnCtc8FPtw4FZEUufokVMYUvQg8D36dsu3YqP337iL5DxmJ8M",
  "key33": "5ag8rbyho1cHvj6B8gy5vfopK99GwQng2BhuAtz5L1Sg761acBPLWrnxr7peZR4tiiBs4GLu7TqYZD9ZU7hQNGZN",
  "key34": "4z6czzon19FeRZrdQd4NCg8HXFKVPGwUjwhXz7ZGXt7c8X963nWGbe5LM8csvHyvjsQsESps5UX2gafMMwM8ijMy",
  "key35": "2F4JKtEKoLsXaQpPFnU5ZHqwxhX9pxoebcjg5atbRFXXhTTBCa8NyUUWAZWGBfPC9duxw8H2CB1Ygj2ws6T2jRYp",
  "key36": "21TkKd47km7J9R3fmd8jwbFaSokTB4a8fSpGfn1rNzLD5byxKQv9G91wvA92zpPxfzEmqVDuHnZoXDjtyg2ReM6U",
  "key37": "yuyR7yp6SEsxQUxgm4VpAKmcmUijMhr14WRWHZvEvNEKVhEF9yJutikJeuZdNwQadRsTuZfXrxDUAd8wsYnb3z1",
  "key38": "Bg1QLZ6ftqvq56CVsF9oByeT8UbNmzPkmjoQ5QZbNeq7A4xWigWai61dkvHJXwyicfaopphBdqEU93pdXH8E5Zj",
  "key39": "5Qh2qxWtyecFpwWatKfHxaT9xTW5jGfo9LowdRRqxo6sLmLoNF1kA5tvSC9FXVJP97wxv5Rx8hb8oTLuB4t4idqL",
  "key40": "cidzr1goNpjLKx6RrezfTBWCVsjg67nYdBM9pRmfDM2MYjVujNtSesZurjdsCWSg67zoUhw3RbkgSZUGAVAyuip",
  "key41": "2J7xYxPxEa763gsHm6GYXnpFjLykY5Q7u2pL9TBQxLBraoeL3curQbCBmkSb6C1jZg3ycotxajYx5RWPU2igNCcV",
  "key42": "4HhCbuNSkDYJNFxKmrYC9hrwF17iqeVJV71c6Fovn9u8KGvqiU6MKmnEDgW2wpAmNfCbbgRaMHBhju6g8k8Pt9Ps",
  "key43": "iaMNED6TDy76bwMsVJRh3rgMaQr8vSc8TDEQ7fuqMjuJGiABipxJrkScd3pECosr5x7hiFYntxPaXnsRau8DGCN",
  "key44": "3PQGYR8fzLE9mZoBE8ymyzHthdE8oZCzdRjhsoprPS1MEECgsojRqFXDu1P4WCNZd5ApYpNxy67qkxhtjb4t5xpt",
  "key45": "5JC3Wka8M8W6d6Rhxm6NcXGJ8Kyb5ieMRbejtWypYcpeVr43GP6hV2CMN8FeKytyGriY3vdYangcKjDUne8kYwDM",
  "key46": "2HwNdQKbB4xL9kwYWqcY7yy6ReZpGaPwjz3mAbVLV7TBRWa17isw6o7Cbh2u7ki3fATSwjBqwmDYvrFC8XrXCaRJ",
  "key47": "4Ndr1fSSAQCAdUe2dnzjn61HoHEgbPdtyMujeeR1t5XgmKhtuXfCguuvBsaDsNWJ3ZFqC9SZBcAoL6TdtHiMFfSr"
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
