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
    "SYUCi4zB4otNSkCXXSD7vvGup8eoqc4P8JuhMfXWP9449tT63DZneT3MVYMXnHKqG9kJmocwMBRWtmJsiDmxhJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41gXZdw8WL4iLFyF5BxxNL7CmBtGYSVVkaeyKKbSVoYuTszU11E9CyxT5wJXCxyYtEozBcMTqBy7rzjqP66SLXp1",
  "key1": "5r4Bgh6XNTcMknfz6k5bG2fYYpCngQRKnYyrimz94axhkkwqyB52npoyeWsBD3mmdioavTi7gkBVoTgFtVfjSNfU",
  "key2": "5AD1Bbk1R5eYytYzYJGvsj7ffAxRRwLc8RqvnmynRAtYgy9dkPi2uvxTHcAJtDfmZ3XjeHd8xQKTCdgkG4RCiR1f",
  "key3": "3Cdj132bj3zggVZsnE7AQvLfqk6mvz7aNYvM6zAPTpw3j6ipc3YtkcABwXF3ir9g3JEKDV91RAnoQZ7QzMr7gZNK",
  "key4": "2vyCQFHunzTJgjmbUGHPdGGKjSwwjVyy7Q3Rs6R8kDLvba6AnmYFQFnvjhCmM8G5FZDnPH8M3seCsJf6KQZqrywY",
  "key5": "27tc6X6cs1SwGmkUg3WdR9ZT2M4rCZiCbeZZm4b8zZ69vYpfg9apL56izkdFzasseYC4h5Uhj3TzDDLV8e6PFzqp",
  "key6": "w45wQhMZomQZ9dvMEr1sTR5hYeWa8MLyYwywwzxMfPqLq4aYcFtmy92HPuMwtHWnMbzpVvDaTg8pFu1CvbvgdbC",
  "key7": "36hGVpbTgWhCsAs4rHsPFLVGKGV3Fu4UcRg14hU9xJfY9A5gjHu5WaWb143mAe72fvmDLTPbcHBoSLHWvNukz4UC",
  "key8": "367H3XFtWd3Ea3bjNTM9qHwvUuovGc3Jg39NfRqrcQ4dECAVCQXsHhCoynksJeu2cL2uwT1nx2QgHiJhQ63E9okB",
  "key9": "4GTwGyBDXRBrhgdizWynuaMUeeycPgZj36YQpHp7xbUEZRuDSgUWYEVNxYzPTVFasYJi9drgEn3GrHm7LMqodj99",
  "key10": "4sDZeAqiEDv6Nm9GuPwH9NZvSWTNXGd1aYvGYYb2dh5HtcxsKGFvDBAqUo7AfG8UQ9JbdQt8XEUKypNM3ogUZ1xg",
  "key11": "5GGbQcwUnsZ7SgrZTfZcyRNe9zLYqYUViysPK7Hkz7Py2joUwpkSrk1wes7Hdqhox5BJJeuHM1XKuHdLGzKrT1oR",
  "key12": "2MB6SYqVTCsVxA5ye4e7GK4bYf23isNHSGapQZefZGhqrihRRUqtssmCJZzryYgqAdiLBd7H7Gc2zzjho3PtPVuX",
  "key13": "3FWhEbLYitXejDPhM1KiR6KRAhWVGhyehGc38y8jruvGb3HHeoQzcytJKw8yFnxY9pmb1gyyMASTXd6HsnLTxrYY",
  "key14": "574Hu4RX2z9qD9rdD4sNWwi483vzQsjoZDGTTVj7CFkxR2pzrMqMcjKhovTZofYb9kJhmV6M4iGxzYzKP6dsfAxY",
  "key15": "3AJqMTRemfDRvEhFGFeh2yLEgxkf1Wpw8TETXubeJZLXvCSf7ZeHL9JLBgcFbJYwA4461VUV8Wk8GDcD6GEqkqrY",
  "key16": "2eR2PVcjukosFVqqih7TxUuHSwWLKMHyJaAF7eVK4xSLsqrLs1s6fMkm68KExYEerQ8xjwRkV7v86zgYkysULZvu",
  "key17": "NTwYC2oiXtqTt4tV1p2296KTY1AVBwUeHskMiMJ52DSzwggDodSb7LgxBxGSX5Wga5G8kLBH1gjtJY7r6bifFoK",
  "key18": "3MsywKyvRzKFXb9MM7qsJVbMVbTxejAFm7mswwcAs5efnbU7yPK6JpScbCd9cvfURH3NZuMVya5jv2gRWv65XyTg",
  "key19": "5smLK4VQBfwt556esad5qaJEERTRxv8hfydRsZhmVGN6rfs9BXDUvLTNtqcDuN49VaUpVLDDGzwQEsWRj8c7B9x",
  "key20": "4ZMWSKwxJr4waMoXawQacVRJ36hMevpZ4LJ1R2vmgVU2zg4owwbKoDw65cRfM5EAeoFLYjs3d67nZLG9qajD12am",
  "key21": "n3FWtvrtUNgtnFwpXkK8AphAaUAZB1sYZr4NvhCGMJZp37tVx7tzeVE3sCkRpfNmTxreDfoYEECqxLYc6poKQ2F",
  "key22": "5PPTS8aExi5VLm1SPZ5fYPcY8kmuji5oNWx4KHEMGX8u9m16HDCQ8Gi7RNVtMqQJe23ZX2btWqFtWzPLbgCnfzb3",
  "key23": "5T9mwMkkd5u1EmbJeGn1zbQABUC5QnvSrogLcEeTYrQCLAxqk1sNMuaj7Mo2ZA4QBSfB7WMuugRepXjkYLGLKnn3",
  "key24": "5Uj5b3qfojYy4tknYTUYbYBXLBAc7Cabbts3BT4Me9N2L3VpDVK2bWGF81L7fVkrph2x81G5nLY15E22BbdRd8v1",
  "key25": "59iTn42i9hRWX99HvkUVwyTgTcdJXxPDJpPg6fbwWensjtuhSVqMXs2GCf66vcSKqf3a6966jkAB8EfP1nFogLKg",
  "key26": "WW1e9uHLs8EEa44q6JDcuMP9fvEFXFYUFWYfqQLKhRubDjaPJz6HrGfmZga3F8WA33vRgG9GEJFtfRWe8sonCBm",
  "key27": "3hAYGDJGqYk5w87y9FNy66FSgqDZtJmvciHtUGJrv9Xu4PdpSJnkAgeXu86fvfuVY7gjgxeaEpkvAU6XwQXvn8XQ",
  "key28": "47o7FUzTULckPAaH6PUK9K49t4D9rubr34732ZbKUfbUkmAncRr9nLwJVDRSfqd78bJRCuVFJfgWBCfYKhjgJ9ux",
  "key29": "4x5z6nUQm8eUJK1jJL9mLnf1bhahYArWa1juBsCqaJxAgTDWzNJpMo9oHRGCG8ocouXGbJYDfbYU8gVqdAGnCGKZ",
  "key30": "2AznqZ4jz1KbfCfaAfLV97EtCAVHk4pnUGH7r3Ba4JT4mb7kQQFepfW2drbTzKdiDfRMgH89vEwtW52faHALmvWB",
  "key31": "5oBtE7U2NMnTekaoNLNR8aSd3mERqM1VEfEjdpbt6XjzWgh2SJSeNDyczXZbHwyazMZFEfPC6a98TSaQeGDV1Zbr",
  "key32": "3XBEtYhQafHteJ1ysgntEcxaY8xoCDQC7Z9QCo1dkX6Zybqj6Z43byCnEqN6bA7tFixjtBCQxuqu3KR76cTHRTa3",
  "key33": "4ZZv36EpZTHwrhcg9WxyFxsUPhvP8TMp7rqLZparbYxDXKgWDJcZuZX2EE7ZiSFKdR1uYSd7R8SGegL1kUVd5WWa",
  "key34": "4jBRJFZg9L7Jv5AFWqNPyybvvEvX9tmTKpiMZ2EaEK7mx2am1fUTg6EA8QSubjYvkETN9xTk7bBvTevdNh94UvtS",
  "key35": "4JtxX7TJfME7SNSfekaGGGPfnXzyLFNcWyvmFTy6tpiRHfYBM5zymT3H6KKV5Jqc3CiodBPL8BGmRLTVTEVFF7zx",
  "key36": "5TwSF2GqykFa9zDXhTPLaHYfUtxJ5429u3iAUjfSvno64cYLcm5sLYHK8LL3WiuZrYU9avY6zBrfdGyKqVKHg8N8",
  "key37": "4NU9GNdjPZbSZkeVVMnAdyT4YrTkvpbKCjDnUhYbiExWMgex4fp2aP8hGV1fp31Qa7posY5qiMGEKR3GUD8Bm2HM",
  "key38": "4iUmFdh695biUEqPm5vttrrAonADdDY2PuJK2JXM26H4wKkGnNMJjzZuX51MxrMToev9zAGQreeQkFMepS7ct6ue",
  "key39": "3FJkrzcWVv1xMGuPKdS3ZKr7kYmy9nRJN7RU5aEAyCikMkDaKeYFTCX6Zayxsp3G1Qn6nK3aJYhV3gdw7KGpvzWp",
  "key40": "auh4BkXAnQWP1BUSZHUFGfYN2x2qRdSqfBFD7nwLJnBHC3GLTdVchhzHMkoNYbygdbHJvoyeXchXg2zparEELoY"
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
