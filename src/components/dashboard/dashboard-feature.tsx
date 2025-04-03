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
    "4KyrQ1aHWdGfi2VrG8zDDpM89SeZm7G4XCreoH8Z3TRVxbqZHG9oR2cuJbuU7hULP9ZFhKznmw1gGtLcTTsWX95z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y4mDsmzLGPV24ReAqSgtgEKujShtCwwCSdQnkQc6UMssrzPapSBKBNDs8LyPTw75Dv3wsjoXApjFGEjkYix2zYc",
  "key1": "5WZTJggbvCEb8T7ByHp6Xkqhaw8cqtsfCLtfTvEGyKizaKCr7cw91bwrvumszx813EATiAgrWvLdNCVxh2eZ34ik",
  "key2": "z71szXF4pcBy8hnUfUfnfyazP2VFD1zKVfzDkmrztKFSisdcm4M2WRevTUuP4mm3nPy62vTUCNcewjWF19sQnBX",
  "key3": "3eHSx7MS7M762TFFAGvQUi2155jedDHfQbzo1FGxV23nquMpFFANHSDy2wjk2543eJ1SuwDVsVa5gDJsbWDWpmSy",
  "key4": "5hXDSheTw5Qxaw8sob7S6h7ahwoqAv7qukE5wPTXmz1FBASiLBSi6R6RemKCTNCz1MLSV7Uu5kxz4D7SUFo4YVcg",
  "key5": "gMQy312tE6bmSEXQgfGvpcidekfVtX5xfKgY3chNmpT3iDkA8asfvhxU15XvdpuHn2qyHoan2P71TsYtrCnZ7JD",
  "key6": "619g2oPvjXcnq57AGwS774NZYh4oeZag7EJmvdgFowRW7WrJcUEiGqNkaWqDL5JovfkndYEcf3uKfRb1wy1UuLMb",
  "key7": "4VXVUTYK6gfMRoLxuiWRhPxn3tJkBzuq4QJURvEzPdDsdT8qaJwP5A7DKrDbyi4a81eRvKZ1cEvxs79Hvgibxzax",
  "key8": "NTu5EdFZ6xtj2KF7RnMBKeZyYNkpqfujkCb484Hr4yNRcDnp7fDesE8sntPEnNysAu1FsKmsa88jwTq4LBkHpuc",
  "key9": "5A5CqD8TCX2q72rqHgJAidqD3w2aSvwiP3WPTatfddBHwcJzBAHjL3GGmfh1qvikgXS98PTehGuDk62VeZuACkSN",
  "key10": "3eEukid2CSTPizQLN3HmxHncbnt6FGty4DR491kCncUziDPE27M3aHrBQY8RW4UmNWS2Qcai38Q77JZLc4ia51hh",
  "key11": "3KZJbq2XdH7t2N2Y2scCccXbcEspcVzypt4NqfeiCKTyq5bGhuWYhNSUFQhkiZUPhTm9NtoKjFqDUZ6HQvGmHsrX",
  "key12": "5y6suabKZSGdJjQkMM3RuMgSVtZfazwuCSKQeWxDFWhLmkNsRkjR1PW2ToZEu1zju1iprVo6b6TwEYmDznVuToPR",
  "key13": "4c9d7fiL1juPf7Mb116AjH1ijKR3cgF8TkkyctJwpD5pb7HTuBtFkokF5fD6srSk9FeiTHnLqNXD4cm8hY7fGv7n",
  "key14": "a13a6kK1RaZ8RGyYtTVeZZMhzUJhrpdRVLDmY2U1y3jLJciGMeUPgQhDLVazFHASH1F6QJfvTTjFxsVC3zmzB6M",
  "key15": "a4tEx43vJrZiy5BJ2gY4QJ6KyHouTzfAeBxLXZwbosoDRARwzdevLyduFFhzyXgJGr3YiWK73C69864jzCzvfjK",
  "key16": "5QRTopSKdTBsf79LtDZcnpjLPtnCGQrUGfhrfyac1DZfcnhgxQLt33hw2wQpBGVd1RhU53gXbRNH9jC8isLsHu9n",
  "key17": "3qUtMFoPPWvZu3dHoLwJZKMUzE3HXSiBaN47hsS4DisMBgjBZuVjLkcGQEy1tEx28fAi3DvfYKQofjomwGmDvnQQ",
  "key18": "FxgwaVe5WnRCRBCizJ7sYmBQDQvfHjXSffqMp2SYQAQMxmKvpxNneEqvza8vv2x34SEqQNaxJZmQ2SqQgSsEUWB",
  "key19": "2R2SXKvpXHHU54rw1h4TiLejdbBrVUnwLSUf5jGBS1czrLFLzHhTyL5ZWRYn4z4Jj6UqV37vzWk5751QCJskx9if",
  "key20": "3qaqE4VuqKFj1in8d8CNzvSwqwhuKvYC4LMrVFoLY67s9auS4ezxWLRnKqWEbYKuvhrXsTi7Nqez9Hp5LmzD1DBa",
  "key21": "2MJF8Ka2pJzx819j9ZGkTVRueyh2uZ7Ts9ZXF5JcvuYQQyvk6VSHwtP6YwxP2Z7mcAN6BJMta49kwKAuK9X2nDXG",
  "key22": "2rpBTJADqAamj12rdxAJEjHgT2ZUQcLHHaWSSjFZG52S5sJ6nMFSNyf2wtDvkzWQZMiNms7DtQ1MBFXb2v1eeyJb",
  "key23": "2QRFiVp7EaRtgg5QvHEu1AVTXj18FuZcah7ztswc3oBZvyqowYsapMC88X3sFfiuPA4R6aPyuKXGsJxkPEA7rheJ",
  "key24": "4e8MkJRBNPXDrm5DTVfvA5p71JTt5cv1WMbzoLfLAgj9im4Eqhv65Ccof6nURZonWiBMCGaowZLwEVBVmbuGc7nu",
  "key25": "4M8mtqtygqBVUhkFDdB2zK7Pghw4P55yE9L6ZoCX7aWhC41EHzU3E3ZEzkeCnpy3yqSQvpbbnqv2ZmbeVXPWLUio",
  "key26": "2bm4qpWk6iNpkzteyob2JvoiqcsbtMbpjFV5ANa67foa9aU2uj4acL5onjH9YSrkC7AkBvSB5guxsoXZmdnxeJpQ",
  "key27": "24wKGFg6C7tbC6BpHfx8yJBuhQqgeNxwDn25vBeixJPocrmZMWTsJ7GhnJbfSznPZuvAyYgYoKnqbestpF1ar1nu",
  "key28": "62igWer4zLDeNjmp2MY5Nc2SXQ22rCH8JRXchM2FcZsuhSWvHDV5PpPZdd7ePXd2CLKRNAjq7UjPWMGhREWHPaMX",
  "key29": "3juSSo2KQ3bLiXn8D5xiprXck9L7LoeFdUSeVRTkNn9tiCeXPaQCLWyoZNRDeHDodW5nmxyxmSgWgYSPmCRBAWxp",
  "key30": "d7uV6s5UdVTLSJrXDAtm1cuN1JDqzvk8MuFasY23X9SSvxZd5xpkcLk8Kpgadcr3DpqCrChJRuik7jfzdsmyFbN",
  "key31": "5HwihtKZrHW8xeCuZaf22X2fuXtPxZ9Y7A7gYsgDZLQeNnHJQuc41X2pdJ3716yEmYFdR57tD7Bntb7t3Bezvf1b",
  "key32": "5DjKUXN76sa4wVBea3hZxL19NaerzX16U6UZunYXMYNAvMYbD9me2gfB4DhKH5u3uE8fUdd9UsX2pRF8Mhao2q5a",
  "key33": "5Vc86GgAkqjqyMmoxDEcDgsKDyVHiwtSRVmnBHFfMFkf8tWECd739Ewp4pQQoEYjUsknmMJpB2AmsdxtCrE8wZpj",
  "key34": "3LsSVKaQZPy3D3EEk1Dvq6MRKEksMGEezcTLnX1PDr8J4LocgCzdTtM36CdRnqzkPCCqNA977z4VGqeTe4yV7kwe",
  "key35": "5AYQSfvAr7ga62R9PpThCGKdW1vr3QB8KC8nZjE4YzScGGDydBFgyz6c4yb3YmvQULabqazT9pTZRFmgHkv49o3b",
  "key36": "3rVBMZdmCeBawUZRJk8TswPsvjA6YX8Xx6WYEPN75zuyeT2pADQK4SFXMiWnFwZhA6ikNB2kxQP28ca6jjCbzmtf",
  "key37": "Rzkvps4D2ZypxQAEb4Tauf4uHwXF74KWJW4K2ACG2ocgcauGLwydGDNaNvwQHkVdasusz1znz2HdtKHwPd8rh5r",
  "key38": "3jqaSwmPxdB32SsMtTMT1EGsP1xKr2oGWMkmexxv19iviknM9aj2s6pi8zcbNxn8nfwU8TVqHwMSS6TD5yyAYMWx",
  "key39": "EejoY6CdvtKRwaCoHFEmc3pmEQvH6e9nLxAC4eFn9Pmr8KpEfpGESRcSsA4R42nbDcgdZoDZpRi2tDqCELEbTka",
  "key40": "2heZ4teqy2QjRugjtbAzkRCTJrLwQyaThbv5JR9a24rt1CtW3ha7DyLADXYBoRCXJdetPxLGKT1ToZBcSAUDjMUP",
  "key41": "2DELm89QskoTTcv58qeq3N22QGeEztNRe6Eqww353T65YPcGq8VjveKZDCnmrgzNs3fZYsjNGCsnD9RUEUaHSmZk",
  "key42": "5TetP9JSi4EGW6RU9RX5qHDxz38SBs3dsGqycN45xGBdwXiRRQatMVfuFoV4tKZu1fAb7aNQ2deJSxD6YLTRjwCY",
  "key43": "3hzevtyRGCtemrXK62UkMrEM44gTKf7dYRmeXJSj8nFehtEeGvq57NH7qh1mbHAzH1dX8WdmtkR97ZX21KfgPVyt",
  "key44": "3uGsdTWwZ4yR4WMHb4QkQe7PqG5h81M7PN7jerJx2PnqMv2c8J75jMUMFeMpyiBRF5vqdgzrsWBGa8M1TU1sUjad",
  "key45": "2tMA5pg6UqE9BWekS8a3Yuuo5XqXaEo96Xf9sN6LxjwYJiaf1APXYHV59ZjHdG18gM8712rwxRFHbPEJndWk7Agr",
  "key46": "48zYRykpnkwiAin5e5ePWcv5JVXDTffw6dwf7oLLtkWNuKoo3rjHtpiYykSpNu59aZkV2eYN4zFDXyXvZ5Je6dnK",
  "key47": "3JMG63Kr3PcenaLercg66ACMxZvy9V7NwX78rK6yohEA5P4FfxhTpP8MWLUDjRf5DF9aBpYwDWM7mZHeUr43wXzo",
  "key48": "3ZkKPSztCWV1s2fnbQowYshHcmeBNxjo1rzm4r3VPHfku8yfnjBpa7MzWfwttvdTBPPp8aCd4m1A4KDk19txokWx"
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
