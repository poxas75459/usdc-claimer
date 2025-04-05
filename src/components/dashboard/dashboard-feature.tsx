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
    "4Ms4UuWXxgmtGzsHyXsDSkf5t5FcH9icGP5Bxy2KajWBjcn7W3Bj8CJafWxBuiP2VCjxLr54iSfgJr653R6deXAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hBHaNy7CAPpXrFFjRroYvVr5H8J7n5S7M1NRXirKnT4aAz2E4AxHPCwRH7PY5kismVkV5Moixmzzv2sMbVwGA6F",
  "key1": "3atJWtFJX8ZJpZvqcDyB7wEkCtUaptTPLVfzKLbQd9Yq8HY42o5axJQhAR4cGLsySVD6TGGpx8r3o34W2Am8hfAg",
  "key2": "8BVC3UxBCKyNz9K5Ku1sGWekfL9gGbaodX9Bm4itaTYYvJ74JeDLtDGC3Z33578BmrqDaMhXM6DgQaGADpdBCbA",
  "key3": "5gay4DjLeJYBdBzhJbqGWmg11qmtpSTLeBq6t8gpMebzxXXzSBxpVk4yrojfHg8hH6CP8nPMZYsK4zfVafBcd1V1",
  "key4": "24jvyudKnSWde9eUis9SbUnFxXfEPjnFZFEdviyfzjnYx6FVou9wTp5wp8itcVVXRqN7B9zuDc9kHqcoster5GvP",
  "key5": "2YzzqwYpqXeM2MTpvhWntCkQFHEH5PGwebCpzG4Tg9wruZtk5ecEX9jfKoskZP1koHNmxyHuTLLzXw6Uy8nZLjGb",
  "key6": "53mDXUvQJGMaHp7CfvJLkv6bseAJbdZLqWvZCN19YNpsJKXnntPLegUNRxXZ8x9K1zpy5dB9GG3afJtKpkXLjajk",
  "key7": "2VMGsG4WVVtu2JPoWDrTKmuhbhPoJSZuiys2gvaYVvhwS1fVTzqceCNNc9BjqyPMg5GGHrF8LDEEhycAa1dmZbsb",
  "key8": "AWuVGHvqD4ZRc73yKk9a6uLtxHEXfixXoeDmBo2t4PickhKEsAg7Z9zNffDLmZLz5PLvfgRCUkoDhxE2uWb9vhf",
  "key9": "5wbeC6SeBQbB7PzXb59SHruJSYN4GiFwMku9yfYxMM1W5BH2BTUY3Qv3bJ8k4xPKLRJA8cJR1Yz5QKrcCvu5zfjQ",
  "key10": "2ptPRn2uHkj8Z3jAfU6vrmXxvnZq65zUoKJXLwAVuWN48PeDASuTzjBSWRTHoVaqZPf8UNFR2WXMj9ydMLJyFSyG",
  "key11": "63BGiiQKPxRCvRK672z41KC5pZGb5KxoM9yKnAGps4dxcQHBknp64k18NU9dgLNBBrUzg7ywv4vH4YuaXQS5481L",
  "key12": "33bAnJ8tzgzi42XsYHtr96cMYndRTsHhVo5MMTodBowcFatG3CwhfXEwZt2kmkVjQSV2DR5ZwzhPxmx85m6sn41p",
  "key13": "gycbJUpPYw7WCGm3cnDW4CTRVqn7RA3QinqLN9asLJtMQTnCTWu4eZY8j22u2eebgmP1qTyzmKjAiCeH4zjRxD3",
  "key14": "2vt1FJCwhQRTfTEXbMFE9CFRCczKb7g9Z46j4pJXu5CdXMAMxVR917s3bf8rUFcGw4AHbagFEjoFSFqnH8gRaJfx",
  "key15": "2aaPmfbTmF8z15rsatxsdoFFDwRyizqSuAxUAuCPnT7kJBB5kyhE7zuRJrEydCRqna5pkiJVeHTTAddd4PwnEUSC",
  "key16": "3iCEmuHoL21AR6ScdHFpybHReupRCnDbeFhrHKtFqz6GPht49Pr3WsrbBEqbxP9wrTCsNKY68QeeRorcYwvrAyEA",
  "key17": "tSZuCikhJA5Z5nGDEx7XDiomkBXzR98ny5ao6LxsLcYVin9WWZnFJqUMkkGQmiGRvE4qjbCY4CdEM1fforGYVky",
  "key18": "5cgcGrBfHVCdE8BWWywor7kg3YHkknr7FLH7rjHWjb9LURAHMMQuGWqetBH9mgRJaxdhbdCWU1JG4aMPEogfiTMT",
  "key19": "3DTEUTVQ2r42eU63yNGM6oZEusAidFiWtsgEtSAM45no98pwjRx6LYzM47z1t6VnbMWHGqHjMCMfPpLSdPjt1FvK",
  "key20": "33Sv4GJTpAagAQbVY3FjKF5bUCxe7P2KuW2QTtuLWrhmN1rtmBLkXLSFk8Xs9TwUxDAV21rJiTJogtqRDd4YR4zT",
  "key21": "5KD9HS4LGJKmeAnpnjh58UfGaj6M5ssRr3wKtFCbuKbggokegfDCNXfUAD6e9irbioPSK7ao2vwWGNHxqSQgXBaf",
  "key22": "jenB8htEqVDnr8DaSVDmH6PMqDxQtBRYsoSfEFn2gB5tvfPiuQR7jsb4TKcP6hwB4NBhuVNMFJ1ViEnNhbSw2vn",
  "key23": "2GN2y9kpvx83zMLhQywvqofvUBa7rAU5JxJL2ud1hcZXpDUERvASRoBKE2ErcCwBvwUacvzu1LVqSwUkCNFGKXVo",
  "key24": "4ontvRZyCoZJwvsZzv3G1CQKga9thFcvqsVd732zVXkessERhiGeNjJNS6kLgW66xGykcNrGtCunkFxQGzDXV87H",
  "key25": "4pq1cX7oSbRrcEnQb6817yA93EhUHGjXCribfJn1Ks9T3xhCwtt1AUFMbM5DkJzRhKbvPqhSAjuTZX9b6uRpPGcJ",
  "key26": "3Bja9h3wXLEWuQDvsyvwk1EzLRUkL4sK8MG1yiwoVYCFmdVjNdz1531FxpAjxTJqA3hmzcPujYG8tbwwuiDuf5uq",
  "key27": "5Mf5LeqqNtQfsBb8q8vcRVnjttp7VqcbfsgeDE4heWhWMWpWvb9zL5zUeCLD8i4kroNyM5x8SF2aCrWdshLiQUux",
  "key28": "Vi2X9RWUcATzRdArj7eWRztVuaSJgGAQDcnUXn6jyaVarntrcLo8iYpVPDiqRXcnawaTS6pA8TTo2nabHBJnrif",
  "key29": "4jW2eF4K5zMyjDKtZYdd7J7NYAYSynzeDLiuzwkYFkQU6HAtMrZ9H12arxBRTDPamZp6ohnKsAmNpXqhxwDo4CAA",
  "key30": "3RtKcg9Mix1DZe5Wq87uCcCNYrPnxcJWQ1qt5d6SBzibDQCkRG9dWgRkcFBLT3xXy6mesDrB2bS3cdqUjJY12Ene",
  "key31": "5fyBcoDK1BPmD6VFMzt5ksm6J4KExSeYKa5FBt2Rf4Tfzvqdu6MRA6iDH4HCJngSD5FD2eUbsnkwA3fcCmmunZzs",
  "key32": "xp8vS88DSaZ4RAdYGHtQxM7SGMiLtYghuNtEXXXgMHJuY3feQxf34ibdokuCUMVaEbrLqcGjH42e4eJYenyEHap",
  "key33": "225ZNXpdJW5jCgHDifrne26NCyiZYPz7DnQFE7ozyueLSBG5Xcc5D8fgYxNajSXxp3z1h7Ax9D25cjCLdg84uesn",
  "key34": "4EMsoWD2J1Jvo7nkKL9FDUyyfHeoxj3swm1FgBc5qwrKgruZXFtXPQkV4mTYXnR8GT5J9DbGyyJuTU6476esRyuP",
  "key35": "5asR3X8hjwiSoYEpLp6GA5KcsrQnkrG5UL1Gts8yTo8dCob8gQvyMzN9dDiNQNXnrQgyfrzVS9VV8ff1ajWvycgo",
  "key36": "cpq8JJjrRdbB7S1n1Pd4RmM3gHh4VMeQSnytHkweAuCUsf4m4jyRuSm7x1y9BQo9ip7qGhVztkM1F16QFN5xiEf",
  "key37": "P1ZhDQWERHDzPXtDytaHZkvZ41JTb8sHQRyf4ehUasypr1buWywMhHSLod8juGNaC2Lr7r82rRNCRgyrhXtZKhj",
  "key38": "5hbG7gPewmarCx95RTui5x5R3mGCifNVhe2JN5VKvCDbC4tP58cRi5zz4PNa6Weszd8nxfAUSJbS2LMVcF6gD9PC",
  "key39": "3ECXw2CbDJsGMYH56f7Qzsxx2BKT8mrGpPVoLqiH5nv2qFXyJgo4GwoAFDHcCstxb1KVqS6pmy9vvQwWKnS4w5sE",
  "key40": "4HM6j2xRLoBJ3a635yx4wTCh6856D9y5PsRRcMrKfztWkngBb3qwQLvP4votDCAndaHVwM5FWjBVpj9YYQ5nRgGK",
  "key41": "3g99jx2i7kqxm45T4XgD55a4SpYzaXX78Kw9HBeYLxLbMMJLGT4N2LPUSXzx1sanvHwWks5iTr2oVEvgafLQu9VA",
  "key42": "5NMsQ8GGbzvJfTZE8GUQdaRzgAhdjdht71AbxYgNPKkBgbRdk8j6aG2bWMBhpLuxFPBPjEvfmjhKm64Ha4Vw1EkB",
  "key43": "EwZ3mkJjwck4pXxdnSMmLCGTdcdWv1DZTA4Xbjc3umUozTec8zwRPc8DmsqRz7ytbui18e5jKvHK3K75kVp9hcs",
  "key44": "5CJdr2GXtovrrf43im9oA5pX5Rx9DfAZr7s9FAfuDRNqTeV3fRAi2EZJo8ZDb4KUDQnkofS4djKucYbGTfuiJQ2g",
  "key45": "4pDmoMyR1FCGRfNFFUFBXHbEj8YRzpcy4pjUP3QfydtC1bB9puNNrfaXS96MWoa2Nv7fiqL1VDjLmVgGofPZedUr",
  "key46": "2YidGX374HUrmnqB9C4EWyBsqF7xBMww2i54KfpSaX4MtuJhfqA2tq2urDvcbehAbEdZphjbWH4kbFXohzMdm2AL",
  "key47": "R88AjDJnu8bnDGAPqEzC9zDdGKXQFLca4uCVd1Ch4f66dUj4N5omJ6otVScXNmrHaZWJgGhvzC6hdLXa7Jy6i8m",
  "key48": "3SxNTsoKFDhPrM9CM8jkbbBsh1DbAFNfKQQvgJnu5vbVpJFCo4Nrf1iuTSxKmwLpzbKRwUqhfujC2XWEixYCU6r"
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
