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
    "4MZzYGgSmAfryqyhqw2xNqF4Pp8U1kwrrbuWTbk4rPeuLJRaMCvq3KFCYkGq6QVZe7wK2u3KJRpsZG1qDGhAFpSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EBar9tJu18f3g5LEm9dvqEDcb1gB3KmZLgVc1pe7BnfKhVpFxrn3V9dcjyWorBTWgw6nZRwYQ6smVEX1Qxr5MCY",
  "key1": "5GykdutPfcyTDwTiPsYZP6Ko5CsG2mwLsoeEmRUnTabJTRc5ZBddcEHvzB35hsJZGXJy9ZEg9ZKXYtRmaf5yD6x8",
  "key2": "3thygSjhnubWVcrxRJXHo3cwZyd9sC5T9Shyz7GeGszcdP2zBTADzKdMR7SVepTRUYtohUrQKnVPDVYGbM2yRbkr",
  "key3": "3Hkf8uMCdSHMpGDiS6BzcdY4PicG8yV9Qo4KQaRehA15rbNJMqStyPsQTDxCsfgLLTNNZkX26hFf51MPZS96M3vB",
  "key4": "5r8GGK2a9bDF6KxrbgsLzJn1opgcAyhkuMP11XE7FFwWmdVUQunSbALTmU46ncyFpgudWRjKKUaa71HzWE65GUHk",
  "key5": "wKKWRau6rYs5YYFhPWggJjQdbe3SVT6fDXrNq14vTTQSczABLbcmimFdGQZv84Qz3Piwx63Cfb913mdZ5k4A5Jc",
  "key6": "2tVkz28fDC7txozTh4sqH8dTq72pNMJpxjukqCy14itTK89fKRTneQ1qN7j8uivTLhmLmdxoLyBjv311QfZPuaYL",
  "key7": "up72EENHN2wKcTrrPFyas4FQyuo2d1ReTFubFy9HMGR5fRKcKZgNF1NfsKgn4hVWCNr7ViDCJSGLxrTebX7y6qV",
  "key8": "5bXdXYr8uZymLx4FXAR9UJ4z334JgL8LxoAYfi6NYF5QHjYPohet8Gpb3ic6a8Ec28rCxvxDiQR9cjEDe8WrcLpV",
  "key9": "3NbwsXEsx6ZkUQ5xCB9D3vadqQbdxqGeic6fTJmvjSKXaXy94bTBrBK4EqYo8AEZonoHxkdmfGKsZcYbg1yLdC9E",
  "key10": "37NyHXF5gaJyHorYvNz1UJqP6HZB9HhteuaWLkk2QeHACBGzr5rVpTL4B7mQR6VxfAo1HkM381LtBnBbEZ8DhDSL",
  "key11": "5d8KkCNVVxNAdcjXDD9erovKu5BjCTU9jXhu8YMTHU5kaqZrV3BpsKy9oUfYCUJfVn4PRJxYLNaAVHBK1at2BgD1",
  "key12": "5MdMDGC1uRprqzhdF5aqgHhwSbAcpmu23p3x8BGorXeECJZXfBM6gdL4yXEupWg3AgAoLp8jdmGDpyviWFxbAsVT",
  "key13": "4dSFxLKihdtYJwh7FrkWpWHsB8C2XvQ3pci6pVvksKjTR77sHr3zWBKGBSuWdKPH5gGKyhYKPUadTjwyaU5m5z6y",
  "key14": "4uUZ6hvsfhod4SK34FUjvuwYNSMpa9XnXA5sEVXeAE8tL8ffsfnEc8YaUu4gCaR5z4vrXLCGnE6oaxMz88qnwPGh",
  "key15": "UtfTF6Q4tUGX3xcWWwjRhzFX7wZuad3MAJvhCAxz9ifLEd3LfFxqVorfmsbXhLq5cD8Qj7SUdiwG431tfBhfYtJ",
  "key16": "2DpxxY4oiLYGWsSLx2NCJmSnpuJyTtK9Mrm85JUzUTx29dbg1Y325Z9mWoWtLw4qCZnUN3Vd6gZNmUHr5cCfaPMq",
  "key17": "3NDzFFbsuTR786nRqKwR4SHrqLZRgHWiGU5PQZJ2mi7jD2wFrxw5w9CP4Vm2LzN1cbrdNySD43Suk6noVNQXVzDs",
  "key18": "2HJnj1aHJgMvnAvibMWGYxBX5w41PNxKbsTnoJQKkZkRoVdgTo2mbhmjFTHv9XcZZ8EeCSd88EvRxN1bBnNz1wTC",
  "key19": "4BxZWMzXrpvkXXHjcYd6oQoiRApDnbE8W1WyUsKXbsE2dTdcpjb7vM8yaQBDdHGHmbHHniMmZ1b1inzHvB3QiYzX",
  "key20": "mjxzFqThjfivvw6gTHLBb3itfGVzbwbJd6caSFfwFnRkL3uGuZTzK68rKgwnR15MJq1E1yDbfBxApRW9MSJ2XdW",
  "key21": "5j9NRPWkGZJFZD2rNaWwLnATeACXSss9WpLBqBEybFafx4PtY2Dhm53aTb4WNdmP1AGEGQNf8SbJcjXKW6MahztX",
  "key22": "3DcwWvCV2ZxULRLVzbuGR746R1hhLw5MdmnwuCvt4twr1DmdRg3z5iWFJTsF1HoxcY1Z32od6uUxf3ZVPjgKLk46",
  "key23": "3hosJw1XYqUE72R6kX1VaUBAxQjycoLQdicyGxLy3M9s6np3GRLdvuPbJZoug8mcKJW3Cd5KRhLFYcdcNbq5bmtP",
  "key24": "jKyitpTswp3ampCkGR3M5vLN7PDVsNiqy3NqVrHnmRD6YQTq1xmPQ2GQvmsDWMLPk3ii76xu6oa2wEnanZWBo2e",
  "key25": "EAJiJG5J3Gocj4UtHf25AhGQvHzapUyPCKo78PibHhjD8CjUmJDi3idVdWzNkqkyZyNZ8oiRoFFjhkZ6Wjzzo6P",
  "key26": "54QQ8mJkBtFxdbJwuxTF8cogca7czRrmRXdRFwN3rJhQKgy7TB38P3rWmVes6oT7Qe3QCWCWoRvwBQLyRhqdQxpn",
  "key27": "5YpLMZuPVgmaykTyAkZP3PujNWtN4NfQwnhKRZKdhr75FFr5uSyVvwX3qVQwSrznrbsQJpk63kPWZvyP6LbLccpy",
  "key28": "34R5N7YXHsexMAAejK7d6s1Dmtn25j5HmUWHkEviiVQmhPNfNNXWvQjg4rdv86cbkPTJHbTHuhisimK3MNCteRQt",
  "key29": "2AHvNsunHfyFcJ4gjAUPojsfdrDD3QanUxKmz86gjUsxSJYmccusNz3ovswuaviozHzQXuiN9EGJDxKyXB1WE4oT",
  "key30": "5bASUTeAGCDcDo7ofBCaDDrK9mWPaK6ck4RvGb8fbAFenqbSzp35MGJ9hcPytFqeEdtote2hvvjuAxgbo9Pq6QcJ",
  "key31": "dJtUjpkFvo3Df2PHgTBM93BooC7YwZDDTLPxzZBNHmrQagj9Pop2vYVMPp566vxGdWCChRbqyr8qMDgM2n18eZw",
  "key32": "5pi5wJgRaufFuMg7MSCHaBTChmdQrVJoe2NXURP8yqnmtR7ZxF8aKB9tSCqCK98Vv3CscBQ3n95smihifiCbJZ2Y",
  "key33": "5ZYL3ogJ568RD2sPWr7CQJRPafepoELikA6AQWVuEJjfepwkvtLLZE9qqPYY3BuEkz5aSpLfbvRC8fbUrYBqB1s",
  "key34": "49ZH4sAxVp1jqdFWdymag9apHRrvCxuX3cwgDH7eybqi8XF9PHuJqucqPL7dUDAvu2dV2Utn5tkoZe5ETqsNdnk9",
  "key35": "5sC3ysKVLsC3W679hfUXLpCcbwhWwDxfAyKuu3UTDoyf4d5ZsUDEfi6bBVqs81YWTMRY5AfKuBHPYX9q44iPXc6S",
  "key36": "gCitrH1wMhB8yqiom7jyToYCUnkc9m7Fa8ai9bhuXJTRF9yXfdNUZm1iMcPBERtkr6WQRnC5ecEQ8ToqpwX3eE9",
  "key37": "52kg136t1S8oif4sbhx3MBX5MzK3M8X9HWuxBwZ8Re2s226HSnLRd4M8mjMN3D7hrHCnF1qH8i34cc3N8xTbRAco",
  "key38": "2QRRMwC85TvxuPRygj3DM3jPnLLju9sQVJ6Mpi9Cw9oM6kB93iurxq3uPuJY8x8Zp9ndDeEh7VCkvzdBfnSC33V1",
  "key39": "61zQP3WGHLiKktsjV52fUsGqWDo3yqbGtK3Gj6ukQJg2kmtbigbjf138fd4tzQB7UuAi7EsiEbkRUDBmgpt6P9rf",
  "key40": "39AsZbkeZow5YhDDDv8Kn94hEHxPmW8Fi9agJtpL3N1ikkWcna51TixopSpfAkcF6jeL1Q6RvPzxVuQjr6R2jtpv",
  "key41": "62NF2dqVasFrkaECzCfDrzZR83sMrrpzR9RJ3N2icBJQQQBp24kYyGJCkjPPsNXgDEXAjNwpm6Kyr6bHL1k9Cs1o",
  "key42": "27cDaCkRobnY2RVhSoTz6xATUzTWYuV2ARuTMxXkkSjcsgs3AHy9RroqbnJvGqszpodRENeLrsCEwsQkRDPAPDpB",
  "key43": "5opkMJiqGGT5p4ZyN54pammdEC9YUSyJjxBUrNLQEWVSM6hsnErhxbq7V7eTmQbjA8iTLcjZoPgtr6ZrCr2BjY3f",
  "key44": "5iY4uYZbxyKt1Grp5W2KhLBaXEyZFgbukYK1uR86GmgtWicBTUYJiuj69VUHmVkHTwbXAJQbCqy65VQwayoMvUGY",
  "key45": "G9xULFNnSTpXStBs2fTHdXdiq56KYK83D7TbPFDkFmQbYVieKgqRd4w2tUCWdjsixxEvtkLKEAR2S8T7PWUoQrx",
  "key46": "5DoEFCcozdN2K7ShFZmW9kuCedw6eB2KjZMDv3F3tQaUFqQQizzeSm44GwnxiUx2iwHfm4CoMDFYM3XM5Rnb38DX",
  "key47": "36Xpt7UKZW96ih4fVbCE9FHyTi1rXq9Rkn3isAjYLaS89DQiFTKZpcBFmNnWSzpLC6EpEsYd4SFt88aAoBUyXXNa"
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
