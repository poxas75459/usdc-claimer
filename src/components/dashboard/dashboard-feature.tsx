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
    "49CwVnBG4ufeZtCkDBzHwndg1ciGJYrZ1UYXdieymbXScsztGN1Gh4EujvjJ6McqZtLGGdXAczQnfdw2keApsMZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dpMfy4iarvneBQ13FTmBSDbhmmYReuAJCcuDQYpSx2SPDUSvYMX48UijXcE3i6wBbuZXcwUB8JCtfwpE7Xjbwmd",
  "key1": "2X37JSn8wfvQWA5BpiiPntG1jKewU32U1nM5h3Sp451XkkFELFY2x8KYjktE3eDsks5ajtqUYWPyWfpecm7c4Th",
  "key2": "21uJSSLs2gXYtfUPY9FxcNF6b8j719FjR51ieJxnwHpXPsGuxemeGZa3dNb717b1b4CgYu3iSJuYXzDSVkLYidKM",
  "key3": "5J1FwVKqXWYEfoQmUZyWbDHvWme2jXKkTEUXiBM7tF3Ty8vQwPJbVtSR1WoqZSeMRNx4uQfkGZeCnQenQpSL2MdD",
  "key4": "4RzrVjLy1BNkQeYfFQEi8gAfwETNEFDnP1e5tz2ShCWSjiZJ9KfDSpFEtiDjkgRhBfuvhKzj33rfryzuZoKpWRDM",
  "key5": "RqGHxfZKTaEjTpSknri3toSXCPM21oAnsLWPzVb9rZakGynVKzmpe6TXMfhyj8p8x7bfREwQkXHgDQE1yZF1G4n",
  "key6": "3sDHR2W8FtB1A9viFZ9aQ8zJ4eh8HgUrQFhzghvXRDfoZYEBVqyjqREgEFy55f5qZ3tpbW1i5NDYfrLYXd4zYmLS",
  "key7": "4DA6n2YaDs3BfuzgDAgAubfsTdGLzQwqHvbbHgw9V3fSf4bFQEY2rrKXeDN1npqGuwDmeH3EXatRuRTPs8pR1GP2",
  "key8": "3FyTb7P4DvzTf4Wk1zTqaKiQicWJJCnL6dMbBrDk1it32yRiShZyxetUyoJdkhBgREGTd5Ha8mcfxrrZZvB9VwgK",
  "key9": "zDgNnfyMFPj7gijVCLQ318BxWU68HwUjPYMafPTTpFKw1gr3w3MjBmKJcHsUBTFAFMKGioAAFq2vEHeBnRiudC3",
  "key10": "3empZGBo3jo22JD5vX2L8zkY6Ki8YHcW43M3fPWFv2bjNPyfs9ey27ftmt7wmoZPn8ASpcVJx4A97vKXYhzo4i4f",
  "key11": "2XbSDsgqrFPZDmqjAtdi1WJSKC3xy6gmTWwq2voqHp7qLFkNTcHrRmubx6ApoLAj2TLmNWeudskUpk71Z8atSvmB",
  "key12": "Ys7iRydkK8TrboVJJe7tP7msa3NzzowLbZQvRpAGtrg6doaVXktQhFcu9nvzoZckdeMJqjnhgktdrTMxftYabMv",
  "key13": "4SfrZjgjb9T2pLadbWnezRFpifRnD6NmXgQrBJCizskxoXinUzL9mxg8NBkgifTcu9V6QCdYLkkEz6yXT4Nu2t9k",
  "key14": "pZTFzwhnFc3ZCBHB8Ge8P1WantKwkYUuSp9Auj7dPFAYdvDe39M5W4rTQEayWDeA2C6YM5si3GoxxCV8GwP6wPE",
  "key15": "2E4geNyRAuqyXDPk8Nc1C87Hh1WUiqhaFtkzGh6P91Fzj5Jtn1PbCmz2GnT7AyJFgv4svnLkrSk9a1Wv3XyJiWYH",
  "key16": "3ywBx6gs9LAP3behidPkZZVJCNKJVW8cAEZCN3K4EeicDmj7t3vRHr6f9e9VfyCySw4xrccLcFGiXb3FdpuApiQ6",
  "key17": "49ioPUPHF7z2BjA782HyGB5DzqTJDYwHcU6jsfmH4WXzeEkCsyMzVMSYtSxXkmovnRPjega8M1SyQrN9a2osUVSQ",
  "key18": "66yk4FXxoc5YrDr2twp4Pa8p9DQXWdGJL573ouSjaUmTQuQ8XizYm1bULndZWcQX4bJUREhkiMTtqvTAAWZRwUEr",
  "key19": "THrKdcYB4CwjnNke9RyNxN2ZjrL8fmioTHhhY6NMjsrDzUoWsp3tb56Jm69xEVnoBR7JBoGVvzuJsHXfg14sL1w",
  "key20": "3BwNEZRaHuZiTZW9x4MTkdbneFyQpjzTJFGCJbvDMi4Rg4K1S6Q6sATXy9Zvn2WXJRJqstWRmZwqrMkmTNSPaPAC",
  "key21": "3uPDHs8LAoV3HnsXSaBEdEe44DUJZP6Vk7uM4hv7dkpN11NEvVCmQoBCeQWrcSHe8bry8iH9iNmsqTRavF8gbh5o",
  "key22": "4YUEoYPCLQ1174CwngCA7f3i5qpwgVc7muiVH2KkYnjXJU1aX8cN36Wg7L6GJGYetAFmtHGedhRHibCwakEeKWQw",
  "key23": "3QyTjRFu14zz5sGf1g4ZTnspRQTEpjZskwa8EPvcXtvqZYpko9WVgvhn6h1ZessW1zP49gtBdMQuaqzGjqM56mxj",
  "key24": "2L1miLDH3wxaf8EXHeRNe4B6x8Qu8k3xL4d8VELphzMPWtWpJjrWiPRcGMDxDrYETtSkJ9VgLBWtaJhez56jYg2M",
  "key25": "3v5AYMcvxxEW56iXFnuRAZhnErRzAw3d5tmgTq6woSXen3RENuwTUwXVnnfQswvgbZkDMSiKh5SKAh3fbSoUETQo",
  "key26": "2juCraiwbP4aWKKxm9WiBCP4FKNi518dNmnD6AKfJshrif5meYrNpjAW64ESZvyraZz1AwR5RecSvavfgbwZdZeK",
  "key27": "5hngLAt15i64NTGyNeG1guqcxTKCyNUg58Qv6mPfXf5QDaTn9sKZn8nyzk3KwNCzYM5MbxzvYFmkfyHfR2SveFeG",
  "key28": "2F1P7drQteLn9vUxWfpot1f1jvUpKVcQwCUhgKF7CPMc8Sd93STShNcoXfKt6ynxK1fmWBGAEKBs1V32VoKQopoC",
  "key29": "2sFfsPEpJBHWvyMhsPuMY3PF5a56UUUyjaN2ZqqCnoao7vNGsdQ1rBFX2wMninGsMC8UZevyBwpL3tNtoJZBJc1S",
  "key30": "5TrjL6HDaKoEffpS2zFdJTRMTzEvygZWEkPV9SBdpRXvqaRqvZ1r6WqacuPMe9pjYew2j3L9rfXpNYUZSiwxRMJR",
  "key31": "2wWByRFtGpESou4GsX2Jnb77WEr79XSNbndSyoyxDb54PgsQHavNZjUktKhA1qqcTczwgBdQTZgvHQBoz8ee6Gpc",
  "key32": "3UdfFcQA88JQQwThuiAVSPznThdL3ukt49Xtue5QmW1fgr5rT3uXfB2QrHS3rVhmmj3ydApBuD4jRHpjpSx8m8BW",
  "key33": "3sdtzZ3zrK6kqY5nRF1bx7hr2znLn8XSq5n3KxDzZSVsMRxHoyorP48s6qd1eenMFetNdfEbznVaY2rWSgNJQa3A",
  "key34": "5cWtKAvJYhfsq8AuxQrSVYWUZZtQqbTKPEkcDPbWnQTkHDW4YxtFaZuu1z4ZD2y4YHmJcVw8f2eSC2N1xjAjbMx",
  "key35": "65vE5YpTp3XDsvM18z8m4P4haGcXgJ7B9VHCSmGE3znRqkbftedSfjZ8U7upECKqiJzCofHu6Vw9FvvdTXhwMEa5",
  "key36": "3oMBadZ5TeTZbvQRzmm7YGdi34m7cQUNFnPfuKfQ9eAoxJmEWjgaGV3p2YtCu8fiLqFXBrq86X3eZqY2T3DyYsq9",
  "key37": "5jWx3K6UCKErAm6EsykDGaBhHGo2jz9Choarsh75G9b5YDiKnV55AJkrUddqUeKfhWY1248FTr9dVvzCW7N35D56",
  "key38": "61bS3cDcQ9k38gA7MztDvXCmD3i5w49EnC3vTUYgSGDdjvr97yRti6Shv9i6SZo2JmnZV1dWVLy8aVMHTAi7gszm",
  "key39": "4z1Q97QwVCtLoR47Yk44E9opRxhhbdqeRPb6QCoabFCBvAebGermBZ3j12uHYAfgJSbVHbBqNaMJLfqjqF9Nmh1U",
  "key40": "5gFY6x4jTUViWehBnF2eNvpZ1xQ39pmsWcessKR9AbvSS9uDTj6q1AaviUwSeUZgy7GntuyD4qvEURFD8pZqM5ua",
  "key41": "2ZEF7xB2JpjM7ePRoeMCLYsV8ZPnb1ea1YbsXjkUHyti9QbhQ5qUKVMhAdfoMWFYXdvYMnT6UTSjztkh4jky4eJK",
  "key42": "8FXG4Mc3DhwjPE2kAw888QogmJGVpXC1RUTPEADooY3rf1dAkwJoD6kJT7acXADpXWwpnPGW8iVxc2MGVJN8Hr9"
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
