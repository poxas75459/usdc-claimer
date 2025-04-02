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
    "5SHLfoWzfxZ28Qtxp3UhRodDgmTYQxjAR7zcxLT1A8WKfipWnvZRAN6mkRLRhfdu3j47BW83r5wxUg5Noxyfp9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dH3f3QnCAuHfxZ5pWESGMXzn4oxHXhBcnLnyAxYr4RqLijg3R5ma4uA5vHEM7pes4bUiCcpPaLKGymccVn5Xs6s",
  "key1": "3aAvgtT6acEbbzVneCpsEAYdRBvJvhMyLXT2cZgngghJcPJYRGWgWieV6pZ3Wj74z1TaEK73YVDuQNNnLaBMFLFn",
  "key2": "26c6HQYauaU668zGqMkHFAXKr4HFDJ1mxNbNYoxUPhmaBngSQNsYY7iR1c2LzazoMGW6eGYXBiMuGuR8mUPWhfFP",
  "key3": "3FN2YD5x2Bn3CysYfyXAxzfLZLv4YknnqTRCzHjhdGTGo6jVahx59mpfHbeMF7Psm8FrvESfb7Fhjkd64XtU2Qcm",
  "key4": "66iLgSsX34Ka7pxNmbcTajfY7BDiRDM2hJNLhcSqFsh6kPjnJsmw4PfzqVFP6pTwKft3T8LzQB2HPRpBoXMB7ga",
  "key5": "5ku92HA3iAnhu6WmLhQzQMPuxHwDvg61pfEe5w8oPPQD6v6cQLGfRJyDSbJCEpCayP681ZM1Q1EjAZVBx7VC3LJi",
  "key6": "4MEiSNAgNav7jtK3CiU1GSLiAWa4ibrw33HNGW6t7kSCXHxMXAJ5XST2u23UiwWpkYYhYHcrAf2gHVngkTjXMMky",
  "key7": "wqsRvwRBRrnwDgwPtDvYqUTPwXTrvURufZ4KAC796rvVns4bQPio187kSimGe1CAhpkgroLt1rLyuYNVZLfvCRV",
  "key8": "4zhjLsL3RfmkQZH7g3ZymDhAbQS2YTst5dW181AoQUkhCEQLfbQSEpZXZ9hVrM8a75G3gshQzq9ZeG1yHy1Bmeg1",
  "key9": "3mB95D581ox4Jhe2t654uM2npg3XD41ALvbVkRViCfRFqFDvtrYLtKumf4MiPQtxTAx1AtxXSiJ8tmcefbvWcNxe",
  "key10": "jQDn9zF255jfqjb9NgytDuqqQUtedKqDvt8FPgmUbSbgntRmgx9mY2wR2J6YfGrixYXMNtmWbpXGwUcms3LY9pi",
  "key11": "t3768htjuy648mdPBdsPgLNF6CetvKKvbL9WnWjHfAFsYseF9BbWuPn7SrfJGDUHub8fE8diffRCRDJS5QnKwvs",
  "key12": "5UWNCEiYqoCzuMhJS52E1MUsG9RjgBtL1nBb6vynzwcHLKNE9XWMTZsvyA6P7SLHZniHucSxuyTxSPEi2faWU32J",
  "key13": "3xXAdCY9ZA21J7UMqp5tqdE8Fkmv29pL6LPGEmPYFb1cFDVzkfyDaq5JbcxHtC4uX1dK2NHh27gUhHC7nDnbFLss",
  "key14": "5okJ21v8ZSc3ssdTEBXSwbtH27bZ3agqPqczqouGyE3r9xLQH8mjPyqaTtjCwanqhe6mj6hRNELCkvkNJyXidGLh",
  "key15": "4wGXGRf5kr42JhtUuizxVqMwNdFQnbxBfJeRYv2DAZzg72TtFUhqnrJc3oeeZpKJqXqgjWdjd4kn1Zpy3AEnADcz",
  "key16": "3v79C65j4tn31C5WZcR6a7Yu38q66uQqLnPYvMbaT2YosUShwWmx7AgC3YDuuMF75xQF1a5v2Y6fgyGwU5Xxsjdk",
  "key17": "FmJQEzMTsx8qqM68wuBSrL1qmTYE6n1fGaRZSgoVLLvt7Mj4Xd6uU9tjJJL8aBdZwDb1M3EXVr56obfXvpnEXxt",
  "key18": "yxgTCJ5Z5hSVSD3e9S612tXbr2yfHtFMGoHs69QedgNvHXG5MwdbqJXWapSG1mV5T66pqQuP7d7PVZrDDhByvhR",
  "key19": "4pU1g7S2pLfKJ8kkT77mmWchAzJnRuuC6rydBTuBbdkxU6AYnAUSaHZLgkG16bQPo4WQYacnpMAHSBQpYaDXCwY5",
  "key20": "3uEiNRJhG5XnhnosCsJ6kinf2xkiEi6YCP5wi8jFi6HhnAoqoNPKQ9CVsTcSfrA5SkeGZvETNpe2WqG6ZszyRY56",
  "key21": "4LW7fHQRXjgVtBgeK1m4aEZmw7LtSuY4utKtTV8LGkYhiYN992vpzRQMVKWoZ5WxUjvYQhBoTkBd77QRe4mxo4qL",
  "key22": "36N2mcAxBdM43vrauMG5ruYXSwNUC24RzSNGmrpojGe65GH2TUX3LyFjuZ3PtURyzVg2fp8Q7my7s83N13MH2rRj",
  "key23": "x11h6Et5xdMyH5ifkTgUBVYNkfWUQ6ZaYvFBncwcm7kAofAx9axigBAM8FspnpAzLRzgn3yhZRLP6Q276jibiSd",
  "key24": "4pJ8XbRfSabcDfYAT1mihhQt777t5RuS5hbs3CdcNVLqRatFFjrEC63BynEdmZR3hiqzFLVUpHpyR1PqMz21o5Jr",
  "key25": "5NVH2kmJ1Bz1PBCCKV37H4GjPrmHWt4aLNevrmYYQQWyGFbPMS9RncU1LgFJmrNL85UcgX4q9rxe8JrfrBzCGiQC",
  "key26": "38q2krcJZhgBXHXHLQBwodTwz7TA7RjaxuZKZXVfbjr8bKDSPWBn7EbKWDjE6dtYsDQDBeJQAk8x6ZhQYBMjTBmX",
  "key27": "25LbR5PXR9EC9racY9WJxPwwaf38Ghsk8cvKznBjd6ZFpbAwu63EEf1EFyq1DGi2SPUrWqPSt9JzaJHFLpgJz3TX",
  "key28": "3tkTuwebCPzCmxbcKzd8XnmYgshvV7vrHhaj9QWPFY2cERFDMANCzqL2AaUzsbqrBHKjUFaRTz5hwvh9YnB75yc6",
  "key29": "4w7fDYyjKmTpk5gFUnLu2cgf7nwwkpd3my8B8Cxm4ogTr9ApW6B9eYAep4TKFsVShQxAAZGvcA9c8zk4g7ZVrCGX",
  "key30": "VwDFNvB9ahWbZyu2oaaASy8oxFPHVJq67k78xTswHZyVU9rJw2ADoAFKh6zmAumA4ZJvTmXZhpCakwi7UcA18YP",
  "key31": "3TpgXsdksVZfPWEKdHVU3kJcjpTXnYjhB9NSyuWNpKe8DC5rTC5EJgX7uoEz3b9cWUgeQokndXL1JdHmBorBX1ER",
  "key32": "661g9zEVKhtwNd8ykadp7kKeC1u7yrH9noYxNYigHUMXR5DgV4YvHT7gbN5rg5Ne2KDta9aVdeQWNRwoXwpf7HKj",
  "key33": "5AdGJwXXUQMtQvSqEn8HmHPWmGy25f3So2nkZBgXTKL83SrWStaF6hEWm1LvZamtwAh8WvjPpejv3xjihuzXXGbk",
  "key34": "37Lv7sPYK75rU9JohLHhkwHHHmKsd8F7v7W8toJjkVo78tSYrnwymp73bAam7Pji22Vp4gZKr4bdkqZmX2KxAvv2",
  "key35": "4F1sQCGBKEEhJ1pCi64PMo2mifUZcEDTEt4Y8nNGUXp69RcZkAntrVP1DFgkqhRCUo6LEM1A9h4fLTiY5y7gZHWb",
  "key36": "3XMw5nYJF3qkTU4fBFtAzwoFZ985XwSSYdoMW13DQa1KtKEgcp5xDTBokXYVGNMAfCb3zM7xYiyfqRhJ3G4aTVSP",
  "key37": "5REcyaEXVSHmpVChmu1BA14VMLsV1WzmSZXJVUQv5ibvtGNqoCmFLKZqVxVMBEQ9BoqnkQGethiJGrMb4PqeJPNu",
  "key38": "5b5s733Z9HVP8TPPmdm8XdhVaxT49PkERziTbh7xjec6iBpeszGfiDHv73MCK2yX1Gj6bDT5pnhhrDcyDDnJ1U2w",
  "key39": "3r9X2ojNiuYk31SZXcbQfUq8gHPzycFVrf63Xnh9Fz6xvLEQW48QUujmCWKyv1x1ytgKty7KhPzbXYj5oWLMwuSX",
  "key40": "C2ba9qLqSsqyoAr3qze2iQfr5m72oESHnka4SSki3WxQFfE56AWKWtYf8yWbhrAeCxpBLGRWSLZZZDpGoLKHPt8",
  "key41": "ySUYfVWVMwFVRpTeYHkus7y5B1qvC4d7piMZRDyYu4gRBJtj96Ny4LF7K1CUemjYmGp8ETKBSXRY9eEctkYk9Ec",
  "key42": "4sm5RiUfw5GQb1qjxcKLn8p7dukixn9iZWzNKnfqGZaSC4DUuwLChymL1ePevKH5MZY24kgN63WNEuto9FUBnvKk",
  "key43": "2bU4eoc8eQP1D1UskG4drwhDmUnT7yD71UQE62CTaU5Vs5tcv95AY4jKbpSj4RZwnSNphZd95vgpNCQgtkLnLUC3",
  "key44": "JYdzmxQr9MrnNYdHfPR4srURzRMaJtoZgHoMD3b3UrVBnQAC7d5CVcau9dtt7zGRcvm6TD6BWH1YNU7gFB8L7FU",
  "key45": "4GNiJCeJbP186VoCvgcC6zamfkGMpMcK13CTNbwsaNJgexdVXT1dPekTwMb3bNdn5dE1QYprPJzS4xbnjsbk8ygh",
  "key46": "WnAQuLgf22gnqsvWaTgH1LMT7gaTGgmSa5p1RYpkFp9rdLy15XtzvKLVTksiqyZNDYL6YfLuSa8UHFoZWhDLuom"
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
