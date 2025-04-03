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
    "3XGT5spAR6c5FEeG7EXCBL1zqQmF4vqoFLugjKvkU8rnj9i22nCc1PF89NnXx4mErUNdwgwdohsepZshUKwk8Xfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tXMvgJdUiovtvn4zuhpPJkXAjtPJR1o4AdsXBvuMNUG6fwEUFnccR9VtMuS9CMoZbBWUj8h6sHYNtTK27a8GxFS",
  "key1": "3KxeSeSSRn75Qm2jQEGAn5VcC1nuitQU42v91YnYi9poWcX8J3gCVPkmpyr1F6dPv5B3n6aREcgcv4TneqTpnvUx",
  "key2": "3cpsoYctkxYqR6ttPNyWTGa4doZMPYLFTvd5UKeeEDVhae2ajkRB6TgTQDkQc5ugMzHRNry3bbhweYeaH3ZSdx6o",
  "key3": "3bdrY8ZGgX6vwMEr9SARzMg35B8F6EmKG9Vdz9EGsrhpXtK7HMC8Nn4AHTxnn8DjxoaYxHnSBRwdygCvNVkZXrgG",
  "key4": "5P9EyYHsh1Ei1b2k5evnEe3QCs98q96ZEKRV4xdvjstqVWHKUTDwP57XtvKHfvv4p6BcbJ5serYd48TzDLtbYeGT",
  "key5": "2gZEWvRBq96ZRBrNiaVgikitxf5xr7Lk2yfjWZ8DZZHij7DRaGcQZVjM2BgpjPaDzzTZ44h65XWmesCmqXMXfrod",
  "key6": "24iojUm9Fw3TSzwpafcti5EeoxpKNYyexTP7Sg2Wa7gSXBmJu2wsK9zfeAXDzhjkhGsD8YqRjdkFz6JzmBG8HmAQ",
  "key7": "4jurPyH1JaLYB8WTdRnvbBFpoxP1xoEDrfqyMbMGjP6uTmmRoViNFVie87nDcfv37QfAfiwzfFxg8Mm9LZFzmo2F",
  "key8": "5174WTCyTmeoHhsXuqiTHg7QpybvNVYtKBDZbY6KwW4TbjBFoXoxSpAvu4caUwPFTHyaPaGrKgREAKMNwAWFpCyU",
  "key9": "5XMrdh8PrVQjBtHHFAGWRbuPw2SKp8TEaia9XSZQoo81Xw1HK8ZrAMaRNAKrCGxXbfnWVqLj2f87B4VmTzakksm8",
  "key10": "YjFwogpEdMMaT7BuDe83occ4Et3p9GCAmULbHod721TK2BV75TLNCfA8jCuDkiF95sCdt39zVG1YSQETkWQGStq",
  "key11": "tBBPh5h9dHxHhnfjtfXhYbnwdv6YXfNF3Y8D5mnRwWzSVznYCY4dFaFjKDgoaNBRHyHaNCMQ6A3WopnZgQWccxM",
  "key12": "2ZredZuohZ3DMJJn2A4eWFPKmxUdK3vkS4PwdBMfXd4mmzuqo6WecY7UP8ScTanAANWvqCFLfuHmuTnaCKheeY14",
  "key13": "2FyH16yWiZ7PCR9yQbe7Uox2zLd52bwZrUFA3hBPHFuhNp9MY1PEJxe5bEUdzS6S3XJWhKXcrmzPnTtuR63YTYSn",
  "key14": "61A5Zu43SdUdQGsDrWXX2iD475zAzqbtM8XbU1EVJmiPZudJ3X2vyNVztNHf8TRj3EoUXvXS74UuuN6EEnsa5F8b",
  "key15": "21emdjyypQu1A6ujJouiNme1EbLGDis54jHfvoQzkrQak8gQ1cYjU9iWPPPaFZmWX8PCbUZLhbCWQByPvTPRBj8p",
  "key16": "A959qfcuC3j9MxVY3ZTKyUJt4LiXn1gQHrtR7NqnRiroKTyQCyC1yojWGRp612GuMQntSJTtrrgVHm8FQWmkQig",
  "key17": "2f9oFMTEBrPRqy9yC2KEbFgqd3VesPHexmt2Rt9EKxE1j7jTvBKyyfod4FiY4YoLuJQK74SVrP1WkGB42TPRqdZ5",
  "key18": "3NX5QyBprTT5rUtri3ZGFFQwTF8Zts6JGXCn6xom1iReekyyCyTGhyhDVfzP79HwrxmBnbpbKziJuKqswYD76qsR",
  "key19": "624vCw1oWxengvpdERYZZ54LEpkt3bYGops3H9uD22mdLfXpQ2UdR3CQeZmLEDW35bEuxni1k4YZ9mWd1EXbu6pT",
  "key20": "2fTvJvAzQ1VhTMjEnT96jv3wFaM4P4ZGMfFuxSZBVozsuUHzK3WHGUxiVgHvHMC2Pbe21Jf4v1wWhoi3sm3Rk84u",
  "key21": "3t7kXKQu238cx9yRPrSNxaiACNPLJRTij6uuSKHdWzB3tVc6BLPKppzdWtxNgz9bJuogaKT7ncuMdVYYTV48W53s",
  "key22": "5kVNTzgRmwgz1Bift6hpmcsG2Bq5yY3ayi6tynEFpBqjVQgLyu4PH2zcYZ1mAazZmSNuLgu8ikvt1SPwxfMnNDEY",
  "key23": "4KXZhnCs5fno2E3tpHS2k3WJqsJ7S9j6vEt5kwEkdysetxEuXUyF2YTRrszbJQETMbnn6kgsAap343cu3CmDZDPi",
  "key24": "5vQzqjWydRjLfZQLYuBY7MJeFM8o4tAXfmUWeXrnyWB5zYrBqSUfXkVMaoyfLyVPkXyy2DbQLKFg8xiD2FWKBN1t",
  "key25": "3UtHa51RGNWD7b4pDjFUxSXevtxK5vF2DQg7ksPMvbUFKkpCZZTumRv5dwXDBsY2Tv3FiYDyJfiGcz8FbJnumC5L",
  "key26": "2qGSXuh2g4KKw87daq2NGwevRzA7PvF8XJkaQ6WAJe2SfsxqCjcFTmMn1mEs7dNBbSRb2R8fpgCvQoHBg3yTpm7B",
  "key27": "3jm6JnuRn4BzrgowHv2LUPLWxEqtrcz26UHB3uVgTd6RDyP4kbDH396t4Mu2NZKkGhn8UMeDUDtS66eNxxt8SoyW",
  "key28": "EFLYBNmko1KzwVTFmZANQZHNwYjwrkDDNcDt2o2zrehvVvmBbfJyangyH7HRf4znJXQTFRJAHiJWpp5JxANXSho",
  "key29": "5hjEpqVFGC78wwXY3J96bNR3e3SFDFbN5n7ap237AmBmsjTmj8BSve8keBJsAjsabtBED3bn93KqzwfXMqiTcCFj",
  "key30": "2j7V9sxibErHr1tWXB4NJLA3aRaPd4tADzH2EdmbYfnG4KEhrDgpqRD9DYcr3ooEZrJkZ9mrmqaxCGSLpFtY4eF3",
  "key31": "3vZCFzaRsN4taUpGXxB55tGPLgn3XWPELJLA8FsgygZFrzP6QhLnhz7yvCg4YbmU7oEkXZY5oAHmVoWjKxPBrkSR",
  "key32": "5Q6hMCEtkMdKZgwt92f8WWbtk6dGVPxfA2UzzyJAUwnEPMkEjG7cVSirPXJmewhPhGBtzZ7U5eG2EPpmFSKnvNgq",
  "key33": "GK6F8ytyg86WEWyUJ3KhpAszSQnSz6KWkb5SQifnkv31z2vNvb57855m1pMomoSN5mnBYRoNXrDMRrzFTWVXf5u",
  "key34": "4CjtBPLbYTENgcv9tgSRZVHhmeZPCbiGKeMjz3NgCZr1Y85qsasxTX2LAMqds3x3B3opaqyWGr6qKzMPgseiEVr1",
  "key35": "4uTQ1gAfXxhuAbGkCACi4j2KHewaZekEgUSLcGUuBbdcq7dtEoKHmkyYocWjoyhgmcvdPo1jCdZJjto7zvFPEuhV",
  "key36": "2MFHoGG7ur92g65GhRyMBaaM1KubQVaxGNS4tog1UeR7KdaEUfTJZwUpnHDZViwPj7aPA21HHxnyvXznWZS4SYcK",
  "key37": "63scLtoGkBFUyrmv5q8wUVwkVLQNHkVmtERLS99R64Zhf4DmYAQqnTMdh2azWB1ZwhPMsTKVVBPALVpqvbGQqEeo",
  "key38": "2MrsHUy4rujtu9WhoiWvnejM5TQztZGApwZaCBkCkn46FuD6uH8q3mpmKEMShGoQAMe1Rm2Ngdhex3dGFxPQifLM",
  "key39": "oDeNqTxGQnYiqZfmvtyRoxbYfkgwgbZUVPXo1HvK5CK2GUncxQVgFFbnCLSh6FA8qavqkNHXJYV1WKrgxTCBP61",
  "key40": "oYMdW3WnRa8qaLcgthTAjmoRXuF5szqU8ywDqXg8D2aaom8QXE1pUioodS4Nnsiajmb7LHdtGygU1AsjinfKLyL",
  "key41": "5zRsHYvbsUChEMJshPwTL9vxhRL5L2ofFQBz1ryCjGioD3epoWgd7PhpSjRe3QeLK6JK85zGcTjpZtm22Z1ddahp",
  "key42": "4pSRnJiL41hMkTpNqEuKrshYRvgcLL9T3PkRn9dkQvNgiKEhqez43xwqjAqyA8pNzKT3vEWn4Ax4S4fFXtwhKGyn",
  "key43": "5nAGHEQtDBLR83tTP6YDZ93Ghe8MXpGJedqctnmA1vFnj2WUkd9cDeWHy61djYKDgR1eQBrHJzmLA7qDGmfjEjkc",
  "key44": "5gPaDHfKKyKKRN9ByaPWJHYdvnkTgmrXWbq9cnEvFFw8yDuuSRhkHGHKUNqhyvsH6sjxCqPitVtEs2XjrBiqvZHV",
  "key45": "4vsQGMLG7JbTpFLZ9jEmJBjWh6uLBDB1H7pJpnQXtFeaNK7bddSu7yB5yaUvvKjESzNPYvau2ZsWYrUMJ8ZMMJ2S",
  "key46": "5KdyUxBqy4M35scU4nXgEZKGAJxRe38fQyLAPSxr8RrdiwcSkHNTb4Vj69SE8Ey6gamWcZwRZYbsp6QmPp1uWVGX",
  "key47": "2S16WUSK4eLap4ry8WPSUbvL5aGUA15p5qTBPoxD91QbgUR2nJAzhM3ZoXo1XV3p46RPyVfv77jVCfahBE8k69SA"
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
