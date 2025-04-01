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
    "4DaaJUW9MzuKp3cNPNv36pEjwwxC3xibMDoekZY6E1kYX5hro2qFcJucu6GDnHhRT9dQdmRDh6DfvmMKsLThZX6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zd3gt7noMGd1ewmGChMqRvteFSFEZsgBK5Mm7XhxuwtNstbhydM292XxMmSx1BLuv9cNi6YQY1Hp5EdNpJArPeC",
  "key1": "5ruPhCUgq2ZU8a8tyQXJyjd1BjPbsXt9VXpSVxqGy9DcJ23ZovSQQ4mg8SBrydfPfutJG4AWZA1DibFYkvtUaQ95",
  "key2": "3UUTXCnXUyYibeyUurUrz4N5UMbXHZHjf54UGqUKdRiXv8UgTqwJBNdp8d9d9pvDNtryEWw7KeCduuQ7q7ovPg1m",
  "key3": "2zGcL5TZz1UgnibTeq3XpRqrHyBg7Tmue2C71W3manwaUHoYBoNYX62RUb5oW77HCLtrbQ2M4Z84Zcevz45jQvQm",
  "key4": "7iC8qcPqzhf2Py4cLfvTMoTEQaZLFUD5MPk9sf1zuGTUm2t7iEUQurouULU2tdwUUJprqczviQpK8YsNwGTLgei",
  "key5": "4KwKP2zzKYYorDKPrv25wNL7yGSgkJoxPq6wVPz4jpc6YhuwMC1mucugj87zoRBmeScaA7LFQLG9xM7hdKPbvKy2",
  "key6": "Ex5vQNKN4YoKKJSdLZjpvrFHPNDqY1Pa7eyU5cuYm2w2sGZQmPo2fxqL111wChbxMpzT3FVKGfmmhNq2guWwCVa",
  "key7": "3gBZGNNr11L72JrjrhdZgbQF9s6PmpL2s2tvqWiyn5NkkbAG7QgY3u9jk5q5mNyV7utSkTjBDX7kuk2CDQfAhv67",
  "key8": "2x9FoWe29e2PznAXyQAS8KJGVx4rh8JUiP6PusXbqpsijk8DHgoZi5YSythxAqcUaWsNrpDHHvC9V7dxx6hrCbEw",
  "key9": "21FnmeGkmvQCzS1hjAY67VaLqoPLvAs5S3uzRH6HQ31XYGdnmYhMPLHepiamD8gX6bg2hTr4xv8LK6yVyMG9pfLL",
  "key10": "24qAAJEDxePLGoXH7ahgawTao9m8FY1eXiHZwVVCByN6jHUCNu1ZettuqkpyN6dG9zyeeTTWGStia8oPHjZx68xW",
  "key11": "2gXBNLy2Ga6XNWNYHurLE6G4S1rRr81XBvDsNBAq334CJLEZWzskGbxBJsXP3FgLperShHQz2g4wNVWEkCAbKSeo",
  "key12": "ZNcw9QD1NjpCYA2CCvxFsknoWa4JiG4r9xw9tsu6zojvSAM5sKQPeSs5qp1gwJSHiiXT5MzdnBpe6sPefCshpyC",
  "key13": "usjEGkZ5go9aVnEwjs2t9aiWPUDpGdPPBh6MNwzoyDrH1pCSJseYN89ANJLq4JTCXbvueBembCRoX7HGj48m7b1",
  "key14": "285zn7kbvRra1TzfUYPJY7g5KMr5mBpG5qGERmJ749csE1i1pXuUwyguLR6scyLMABxLXjTNLFeC1kvxsqxw3821",
  "key15": "nQ1ttWv2XbWSs422wP1MRuJ7jFekkHFC9C582JAjHTjVVjubXBv5zqAYYrBmKmFnvpYkq4q3w1kkzuRtWgvGT6K",
  "key16": "3CRxEU1pHVjEx9usacNvQsjAGocCsz3nnzZ6gUCDKbQ6Mi8MWbmT9qbvyFJevpDN5BtXdh14Z4x3mBaazYLCAn5E",
  "key17": "3pxJBTUytmRc95y3JL9phcWcxYBfbKvjAC7fkWNU621RmfdinBB5Y3kEeGrCyFasutpnEUnw1BzSbqAMb53uxczG",
  "key18": "q8AikbCMx65HsgqntpxPEfW3K6TboQYkk8oCz6ghkVsURBQ7FwFRstpEicuoyW2iUZCoAm371ZCzZeHWjisWgcX",
  "key19": "25Z14ZA4gBKhz3tf3pwe7mGfSA9itUsdwf1tbMwEekEUiQX5VJ5SFakMRgZEAoXHCjqUZSnbZptHnQrSqmzceMEu",
  "key20": "5DtcthagZYsL8MshfSqZqmywmu2WP6KkuuRkAUYkLG9MS9SCgXd1WPzf8ymk2WEmzEHEK6gC6h9QqmkYyMfrbGix",
  "key21": "64AHADCFURMBhGkAmqSZPWE83WW1mTW49X4hTAKExGqKAR6aLe4Sx5VJEFhz5eDxJVtjJQs2s9ALKrsHZUH2R3Kr",
  "key22": "41aQV5DSJbL6C5CmFFZX99GDKuBw2DTmKCNvEfHhX13tQiTk2Y7bZnf12esJX2hoeiDUPdjD2sbqPknBrBmK7ZY8",
  "key23": "353g3MgWrPfsEhwxw7Wg1K29xHL3sjptzexHJtvvyF9wx4ABh6GyQurcJ9yvn8ndfLRMEznxXe3iEnzDfrVuxDrv",
  "key24": "31HdjtPU4hjo1nudFLg23sFhYkeesV5xnEqWG4xeX9hnm23TsYb1AhDCZNQApM7UBbxidnBGrUFTps6s3uH7vgjn",
  "key25": "tcn6DWkLDLEE7PRdMmNBxzCSAgQiWLZXS9fKNy2YRciWnKE2eYDwhCUjs3JPGUW2Ki6iUh1jujGF9SDvMNzGmrK",
  "key26": "4hi4FQ92Z2TbxV3GxZtzaWtSjJfTnLMu7g4FQqcJMUv4h8bFDnYERHSajBQkuUH73NKRFoTanj1LU4gYHU8MgWuW",
  "key27": "3M4mJtNPjqUYbN49pMEVKN1TiDQjBVL92M6uq87A1kpWVEoUjXkaBYsEd1s795RchR2AXm8JrhDwuW3MZee1ccUN",
  "key28": "4s7dYycYe6tZ9gvVwhHtJg9JBrX2uGJrkXZK5KfnF4Bjdfk6ezViQapq8Do6eGk4sA5ydfMHZ28gA1moBiPtrvKn",
  "key29": "5x8Zya5UDsKd1WMLc2ijCV8Pvwy7RQQH79ATWQRPRqX5iWCP1UwVoY6dytNCwTb8nu2c9y9b7tVai3Pp7DZfMKqY",
  "key30": "4ePfKNJ2aGurzmzsgWUBwPAKJC1MrHugmjRBQZhBLnZ2SDbvJKp6TtdgdW1GsbnmWqmcgdhQ9K3F8xcrXeEYAHHd",
  "key31": "5bcx1Kc7QtLYTqmDYCC1PKhrZUPxuRR5JJkNfhbPq9ZnJ5ahwZS4ocZEXX3KJKmgABvgdZA3iCa2LxA3bY4a1gCZ",
  "key32": "35ZESCf8yK5F1Ab7U8nk8yqqJUFPk9zGFXyyLSw7ZhhFQpPypuL5JqGKuJsyYfzNwUe9EGRKMj3tFLiVP8HvDMGM",
  "key33": "64NhuYSpnw6QyJANnPYU8KUQLgPozfD9vLP3AUCZS6A5LuCjQTV9iJxHSWj9EgDvEeN9iVo81NNu1q91rtsXUT7B",
  "key34": "5zgguoHNcZ5ZkEXq9HHf238KG4NswpsWnHUHwUf4GBSgBrsyDfZH1yNgkoeDG8YWETkq49Kc2SUrhcGQqQHPcyW2",
  "key35": "3bcfo7dFyVBV6Z4f7vA4yGKb1R9seJg2KPNtAKdafn7M1QJbJbM1YdZ56iCgPTQQyf4LCdV4PoVXMr7k96vB9rEm",
  "key36": "7dXhXJyyCoUwhQ2YwTT79sJVSYNbHzfnWaP3fJav75tBvwxhmkFPmWEK7YQ7LGCJFdot1MJJqh6eAq6puMvyeK7",
  "key37": "2KqHzxpeD9N4W7gAv2JCzi8D54fz1FVVj1aPfp2zDxXGNqdhdYAvoVFxW6jZB73KtYxud2JvKEZHYdzRHZDvENNM",
  "key38": "47yycdUeYTfgXECWVoVRwVVmBqADBbqMFwSc5PcjP4Ke66tRKDzg1o2fbVpwWqsMZcqRodL31ro3Hv8ETMMT1RpC",
  "key39": "2LDb7GwqqWmtAXUChGr1DqkAPSUiFVy8KptwUjzfePRgdt3zN89g6pLRm9ZDZGWSfWTU7qMGS4wt2Ly9CHpmyjhF",
  "key40": "5wHBzMsZ2aLaXaseSxWD2hxyRGGnz7gmmEEeoeJx1hMQp12r3R5YEGaWKQrb1sd92qz9gKE8eUzn8KN5qWp9NKB2",
  "key41": "2F9AheaDC7FcdLqkBcD6tPAeiYRqPyRT2X7hvBguLTGbvbWXxujL7dursagufu8QoUCZTqMf4zCKEwx25qNCMavs",
  "key42": "2HxWgX55LGZLy8gwfFBGrqJk5GEfLtqEp9oKer8eQnqnZ1TG4QGeh64DA88oTnAjS3qCgDW7s7F333Zt6pW1uQY4",
  "key43": "2nJkedqYxfv915QprJFRbnw3TEqVsKwMmjZZ592FcqNBFZY19NQFEbZeJnRbZN45RDgoHVJ1fRix9qttuioNKWfE",
  "key44": "2MsjtoBkeSw9mJnS3FheDfS4DG9biSDAt136b5sh1Sn5YR4jFkZbhZ3j7mBmYocapkeJTBrSHei2PKRqvkEeixKX",
  "key45": "t8uigX8gbVua62WPqMKSHr2nygEWqc6cqjhBkAbbF6ZoFBSbJQAntLBCjwazghcKeFtzmCoAKFRMx7ciG7c8upu",
  "key46": "2gNVhb6nMmWXsnyUp45rSmv3XnKTofq1TWp6fDcvNxUEMm7Pnq2Ty8SWrpkLhDCd96dcvUU8WX3Q2LZC3n13UFCs",
  "key47": "5wcLwu5REPkxcPWekQypYgBaB9g4gdXr7ThNMgPNyQgFBhkNQQMkQMygK4dMHUDTy8V9tUCHMZALeNDyPDw7eJko",
  "key48": "4Gv7z9G1YUvkWjuBZsibx3GNbSBTav1GSjvMwgh3E9TqodVBdg6NRfmaT4ojAHEk2LTJyDnNa3A32Bt54DPn3Gpm",
  "key49": "27xDUwFH7mWTi6thGw9SgmNMTSZZPwW2PqDHTAydApsTy1h9giEMVMpnVyzd1sS7N7HZEZ9ehH98wvd3ffu5ZX1J"
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
