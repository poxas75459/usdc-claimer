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
    "5Dncx7KkBEfbUdA6HMGirDeBhE3KTParv8Q7FZeKiUPCRXpTG2SkABrpMqFHaYwnVYiyf9RUniE95sxKXBS7FNJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zd2AHRGK6DWuuoNZWACqBz2zxdKXj5SjnKJ9oEKrdwvnnBTAoSVsMKbDT5XNKHXYaARJ6XKcus2cXjCV6oxCock",
  "key1": "2Tv6i1yD5y14P8Erkh7yKgo47zbvxafrRg8XLaa8964tNT1nPagkMcgpabJ21toFA7sGwzNHvJPWjRJg1GrUp22p",
  "key2": "63Hdb9KoVyf2nzXUJU3bP6kmKuRZdkYcrQF1AKFu6L9tKTx81jspa4p7G57JHTdcbavnL3U2qJX17f8maj2MEsau",
  "key3": "5LM4UNJcQ8SMGZSgt9EcdYbaadRe9pQT6YCiyBsZWXZNWfbWtFWczKijA92Sc58S8VWM4Lo3cptk1kRxM16TMkdr",
  "key4": "W7XLdEQZiMeFjrQiidEDHYSdk5WUgFDYdwohgwUbaSf55raRYSbzib5vWYPS4fgYx7GCnotDVyMxBY399xK8xX1",
  "key5": "5N5581ui7UTp2RxPyTRoeoJLjUj7tb5Uc8pddC6X47xNdeE4Fd5fgRqFT5dEw12r1JVtAt1h4CtoYfguZSvma1c5",
  "key6": "67eyXGHD8HQDm5yB1RixMo7ofTo9WQs4Vyg2CjNUsQkSzHDuLBEVQNSmCCKCpR4sUPRvoTBHJybAD54iQ6vpWYxE",
  "key7": "YkY5bRDsRwPeEAJbeuAmTNWsktnGHfti3JamotHvnjngyWLDkG7LLQ4ga4ifBtA1HjLukTAVSdYHPWWziKH71FJ",
  "key8": "3WDLVLNWibNPcTYBgYK5SToEMSnNyQJsgzTHKE8LLjUuShdUTrdHBRGPHF33jtt2yNc4SSJeWaXkuiYV4DKPLRGe",
  "key9": "677cQZKHh8piXVZ9hHWXe5EpD1Jn7PF5Yt68sYZTWLEeqX5eJdV7y7MdzN9pbXCFYJ3vucT9KSA8HTVbyRfeMe9c",
  "key10": "2fqFgvaZ7XoNsYNFdpM2rFB6K31n8K2jf1jL9hPyMMTUf4anEHJ69SB7y3zFVx57YxuzGjRgNZwSkRXxJiAFq98q",
  "key11": "56BGduwY8pAVqk8PWMZTfQyX25ynF17HC3SF3kuniFNxWnEiKb8toWJfaBUC3sjy3q25yiiQvUA5KJKjLiRWQUHC",
  "key12": "YfGtQhkge1ok4e7pbPug56kLAUCGFLmEG9ooMrzeVujJKWofqcw2ur1149VFgg1bpPXZd6pz8e4HkZpJD3yPLXx",
  "key13": "LzSwRs4RAmRin1iX1GF474EeP2BR26ay7QkrTCMqQPzkvYMQsM9wydBYX3wW5jvUzyKPWB7WRGZ21yVaHjKVnRB",
  "key14": "5nZqbeHKEeY2atjqYh7apCxyfEBuQv7ExaF29MHY26qd73258RrQGPKxjdHCzcCk1tF5keWFP8xhTQek58L2WYVG",
  "key15": "7FcTXdCfDGRrdevfVknuHPdYka48g7PtB26hFohHE4Pb1YpedhKzJ6Msc1Ysh89kAahFq7CqWiC8FNb3g5fcN92",
  "key16": "46dF7F3MeCmsTgCEU6rFNASfzSAHZ5J4PBRHowM4vGgWVZSMhFNWyQUuqHoJ9ko5fzWWN4V7YtFJv1i6b5X7V1nq",
  "key17": "5WXtezseixE4cFeY1JkmVG5sFf2LcNKCnVYwZaQaVRUKqYDZEC3YJwPCcKEjqS9PhGQbjJ57Uie9Wh3FRrQvS167",
  "key18": "3wtXKS5VAH6Kqi85EqX71EJBkE5SxiE77RNBLCEbmQZ6deMGGb7oTJ3TsAmgiwDTCkE6WzFh9Xy4bqAPecEuZsnc",
  "key19": "4PPFhVsUJbcgM2JwUuAvFdVxVzB9jzqqM45AwesL89CaRNWAwzLbTVzhHr49f3S7W9zrjeTcUB49QnoSoxw1eUdM",
  "key20": "fU2MsWAhJZFGhBGbkFDuZ8uu8VB6GwUmSTkcabjEi5CFG4xQFE4cH7bVtMpu4Kyk9URNEsJHmRmMJUzD8khjpQH",
  "key21": "4VmbRh8p3ZrjLPeSF5fNREdwiqQrxsroNJe2jrHEEi38aRqAjw3879ijGP6vb9o34vNr2D2YaM2eW1r9EYwznTH9",
  "key22": "4gV4Ucn3QYHJWnSMdE3M7jhKheCsE4BUDc28bqTn5AHde8rKQSdQGzrvpG7umTybcyjjjfmnRiUyZuwtsBYv5zaN",
  "key23": "MqGtE6dhxCX9gE77Nk4bBEw7vZaVvbsXw7jKzsAR2CZ5aHDxucX5yvJP6ACS3bg5iQsrL6NnetLsSPsJB26toVB",
  "key24": "3drLWoX2vZndzBPND4Xu73uY1QH3SPyxnEgSQTmtjVAUQhP8tm2YRBMSb6Yf7phRTjJfWESJwJYLv3jYAro2WBba",
  "key25": "ir86eMgYW8Sk8TDwZcksvA3hT2zcdAHbuym7V8r7wChbrY4pdrsv9c79HJ77kxbxW7AHmNFi7gL6fqCgVLWHPAD",
  "key26": "5UxyiJh6fCgqHLkzhMLnbXD3FLtop9i9LoH94TohJ5NhgVyWW3DeeqdPZfkG8fG5kbTARFtQGJDq52pjmxqRpNXi",
  "key27": "4HrqCt79BLUS6tXLKLxDs1eymmnXe54buXmi5LaD8XNEcqzGHETVHzJXZW6cRsbqZDtf2RBXzjRaJsaf96Ngbh4R",
  "key28": "CSGHg2s3Q6D1bzpoC3SAE4HdpxVAVHeCqoxRQwDKtapbEPR2igBtovhzS8Zp1jBLHxp2v6rXt4f5Ys53QTf93wB",
  "key29": "3hSmbkkCecFStNdodpJR52DAzKCmY5dPCm1CYuMHqzLkZKQEB2gx7Ltb4zabaH9HZVJy5cowzRHjWUbdbutbGnvd",
  "key30": "hNSGZcXyNxox4ftkYQHXVWu1zZzz3kZt3qFoouZmYCLQCsbu9wHeakAtQ3x5Z9f7iM4bSb9sVDncG8ekQ1Andhx",
  "key31": "2BdT7msXVZ7dY4JeRCbgtFxLxB38kMJYxoscyWJFQZGSTREDDz3LGaxXRQ5iym85fJTAsGYyQ2qDmAw1MPXENAuq",
  "key32": "9YKVrfk5G5B89X8tWCqSeVppn8nwFibecZN9a7XLCbGSxfLpD26YiPgFbPWsc2ZF4QAASPqHtWZetuJq2qYMkrt",
  "key33": "2oroiXHUPioD8QdpihzqMW1yTvNhvNQ5EKUu54qwpukomFyNgE6v1Kzh5u7Ee5DMJ3mDPQbxWNHVnHDFci1fVqPc",
  "key34": "vd4HsNLBQAtWJgGTWKjBz8JN8EYDHtAet8UQCw7qHoKq8xSQcjfkDbsQPHVb8DUZCKd1iJb5wiibU1BjvwRNC2u",
  "key35": "61fQcF6YztvV6x19uT5US4NmP9LoEhzYx8ufm2BocnBJdtSUnvLaDkaD1GGHH8eP1JHV5MfBxXuRULEs3Ynqfnxz",
  "key36": "3z5Sb469LokyxJoG6VUCsYSWKc6ZPhscziaETGDPU6RPkXFeGetDWRJ1QocwZ6M6HJkkAK1L1czRkdnrHLXTz5d9",
  "key37": "4N3orP377qidy23BQSYcMaweeeE8pg7FFwtMvTBzpgDpPGhApuHYMoQ86iysqzqDVERNTM2tWXTU17aCoJ36GRUr",
  "key38": "3dVPZCxekeeH92e49PXXknCciae9eNP6dg3TgTLXcEqA7TkJRbu3Vco9XDoEVjgtfjfD99mwoa4A6z5YhPsPo8Jp",
  "key39": "2joEUjYx9wVJ9WW6ZRPTekE5ufG7P1KT2u7C678AREoBtGirv1awpXGhuSdGQPdpwrtN4unresjNmo41zCK6Sm6G",
  "key40": "bHB6qhTQMXJsDEZdXiNZ2UtYXcaYMwidALjgdGJ9gPG5nzrUh2AdxWuWVQ4udbubQgwC4WpLbg1uJfFKkPafj4b",
  "key41": "4uWCNDPoGbdSjeMXbp5dSuvDRJCa9vxhNvcxGK5NDXjT7iCNJ9jGf9VbpHPhLpBy1rbV6inKbUjP2Ngyx4Sarq6X",
  "key42": "2edGyrEXDQpdjUtFJir5W4zgPWYP7Jdw7CCHCHj74FZdVn33iMkpLYfT22iuVdRQ2ms7kWoVjSt9zF7cAPpSA7sF",
  "key43": "314GNXo7QNV59Au8PjS46YRvorosBS1xTKJiRfQBmz6Bjj1n9p2FJyFsnNwj39Lq7cNuKrbESqCDyBcNaHV4nYVZ",
  "key44": "2qL4khMAdeeCa1hqqcPxKPGhjMHyS8t8R65zoz8QuXtBWF2HhkgEg3pAMm8TxYhMRfM29ienKvZ188RrBn94aHR7",
  "key45": "3o5bwMM71PVnUF78yY8fmJ6TgK1NGBx2W7RQV5J9fwkZrCnj214CJVQH2M36ZfNCSsYkysyTybo4U5uDTqeLqwhR",
  "key46": "2SSZcSR9PaoVgS3kDCmeYtQCuihTRwgSMwC4XYtcyFjdpsx6kppza5zo8wHo63QAGMoNaMDuS3hLfEFXofD5L24K",
  "key47": "4LMTwtWhJoWU8s4fvV6XSMQajM46VoiTuUkXBWGFZyKygqRGWMF4f5jCRZi7njRpMh3GVMYjJebJkHrmGE53qxXd",
  "key48": "3wsefkQK6gqe3kZNDKmLSjy5GVwXk9N7VdEnfuakTAicA4v21hSi23Yu84PQTESTe2iSdSci2PKjZC5i2oKfstZu"
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
