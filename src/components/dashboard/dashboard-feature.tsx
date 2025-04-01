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
    "5cx5hc9br1ccRhoDJAcND8mhnkvNazmgqbMGbxEnLFjiY8tDMcn7nSAUmJwoft8gmj9hhU9SSXzosfCkVFBbw5y1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c7LDchFnUY9P8EKwRmUXktAA6kToJLz49iuLpLvMW7t1GxNagx4Cpb2DWFPG36HECTLxAuBypGGymj9KqYQCtxK",
  "key1": "3tCkRmmBz769QkgWZsneQBrUUEFxBun5EoSXbT3BEiC32tu5ETgKd5DYELz761sSZpJVNuDcdCkzP5nqx7VdNEip",
  "key2": "4JKWmHc6QzjMQ28Ai9WqUw8FqZw5P5zmdcy3XHb4jeKvvjuKY5iHaDqkKGfj9htPAXVD8YfiUaVsuq4fzjeEd9de",
  "key3": "iQ2cvEfuLRrpES2wzAEYWdfwNWXEgcRULWAiYw1mjvFngRXKxu65cn6kUWnzVPRNwknKRAQj9DPusXdWZSpwerY",
  "key4": "4joyghcBKKyDkuRRFALjant7rhhqwo2W7o3DZknhosxiKDKqW7x2notH9Xtqgzctgx98R2vVLhEox2ZgWrJBW4h2",
  "key5": "43vxoi5uewpm9vi2UfEyo9uhtUSpj1rAhZcKVhUofj7SUp7g4myJ9EooT6giHLH3Wz2Rs2wPcurwXLZMPEFxT7cz",
  "key6": "2cgv55ujeRAP1yTxvb2xAELxpVtsZLsicx6ZdbfcLhStsyLyUZnF6FMMGCg5zQrCC1EhSXKh5VPfnMW8WnXTZJL2",
  "key7": "5h6TCBxY9s3yFENKPDfe88Sdo2kpkaDRyQUKe71puXU5zC4Q9XqLuTqheDLxrVYmB6CdWEJ7dyMyKqPRECeEJEt3",
  "key8": "5YnZi3zrgXcYbnMavns6Mui6r12sMK8z5Z7BBgV55Z53WyVwQDHbknXahqYTx2yLQfznZNQ79PbXM2wUmWW3o3AV",
  "key9": "5yggprXCQWbu2GwyYwkuDctXXyKUJpVHpUmioApjmUyiTtcdVZ95g3EfXNYKekr7PqVwdUGs7PaYjWJu1XDhfCzQ",
  "key10": "3PzBYC5reW2HFeDuFbdbhjZrndoWaU28ffTikeEFJ4suryfoL2VJW7M52kVf78siEL3komfAJAhCNougfDAKSaSW",
  "key11": "2mxfVa9nxMVnYiTt56x47xprnxtwGarU92PqudiaP7j2u7uw8hBYbiHPVD44acB4qCe3REbvS4ac5FxMghmG8hJ1",
  "key12": "5qBCWnEk2asjbhPKnjMGDXrDsabbrtPSvdaAubxzkmtA8gqvC88XZNTyxzP1XBdjsqW4M19abMh8vK8uvRr56Ber",
  "key13": "5futCB2YeAjZdgq32B3Sf2pSQ2M3KZKWtJMAfL1UwtNcga2Kewa9yXGmv4seLLFp3WfZruyz1xwe8QK6GqiuuaAC",
  "key14": "3SNueHomxGf1vW1JS378XhNDQyi9hLRU7yuGYiKRRaNwGqTKM7TigozGuA51apmQ4pQv7sg3SsBEqKggYmcP9rNA",
  "key15": "3Z9rm3xLxmkERkAdhLygaswU2sovt2hbMsy3naZ7iZkV7Ce5A8cygh1EdMyXsRGMNuEjtjXFw5RYqhhdVcYxyDEH",
  "key16": "2fdxschfPLVvihrHWyaQCtpdHYFEiBvtW6FDZJ6Ze47wg7mTwbYFJynXENXGbRz7Z47CmLnibjphB67BsvZqLzFR",
  "key17": "6hc6TLJntLV5vBq8E1XG5HUKG8fy1EdeFWgAMhFK4cUMCjAa5bFr6QY1UBFaEkpzE1T1gWwqVmHkV4vs3xTtbzS",
  "key18": "2MSdXFLMP19CLptAogfHPEgTx4BvqoLMX4AqNkxPZVkoN2CTPiVHxpEvQo6SWMS7CaPYbqQFigqzHEnNPs51p7td",
  "key19": "26p1PKDJ2bfg6XBiy2XMqSDFZ8FuohBG6SGbk2vDipzsiLeb4PdbGUHW2H5myCVTRhFJDz8c29ubsH6NZXgUJSte",
  "key20": "GFyBba9EhC3gagTWa1G1M5pvcQAMWnTTb625vmV6FwNUnUECmCHaznhqrTqBjY6Gjj3UGa4bSeGhiyN3bYu6Cro",
  "key21": "22FbU9aQuMzTCJ7yMz1BmY8NitGQENVX2RaBvxBLSp7zmR6suyFYc2kaeWAdyfwjSCjj6NACiQ9vGNEEqZDpDdPQ",
  "key22": "SucP4fwKGfADBNuRJ6RhAg2X37yobbLPbxHfgq6JDvLVQRy6sB4DxN5UEtf7UDWowwgTB4EFcW8idaicGNy3GZX",
  "key23": "5t5DJJPktDPyCqJ8RdGpSffJBJif4XkzaY85Tvadji28ELoQHG69KYYR3XeKhJmhaH1prRYbTqFMdTMqE9VtsFTP",
  "key24": "58E3mnr7DdEfUuX4N6tEPanR2xMXagxcFhwCTU4ZSTPu1QMgFbp8KLjQhLaFdB2NYm4U5NgH6tb9up2BWoXNTuWv",
  "key25": "31FsHFJ8hvbMywCcCp5UW5be961MwrbjS7auoBjg1sTzQyTkHRb6u9EkUKp6mghwkuykJbqkwcVS5VinXuXLSoHx",
  "key26": "4y6zaVY8qWQLfEwT8N74mnmsrekvFRzqobE6oiWuWrxSNYbTZUdQMR9Rf3r49rTDiE7Hf6M8egKvxMuHQVdDZZh2",
  "key27": "2M29njfsjMLaFGPH2uibM4qZT4ebVCZTynYj52kSKQc4woSZSgkQKJPQcoxPntkswPL2QMLji9ZBF1KNB7RffEQS",
  "key28": "jFppF5tibNsv3ShxBKpZmzRY94tSc13yewWeXhCrYyeJmqTTDLwdZtH6ijMaMaSYHpJ3opxUS7p7eZttK34V7y3",
  "key29": "2SNzbuJupvetr9QQiUMU3d91xCg2DuvcjBLrMKvYUkgEFEk1JcZVnNvq6hW4y4RED4ujNmsJvudwRAmFqEm6WzYf",
  "key30": "47w7wwAmoe1NrHzk34ETxiwkNbgFvDo7xkVnmQ5eCRVNfHxkYCYaf7Ghv9Tj7QihNDzQB5qHG2vax31hnYFmXwYN",
  "key31": "4YiYmtLURSxDZBU1EA6bJxkei13vCvc9W7rTMBm3SZvWEdEXonpo8meqFFQRh1UAHLkc2zDyhTwQGXo6nHqyknV9",
  "key32": "3iqHX1rGqVhejssw8tYMtWY7bV7zXuvnUXjyzzYJZGcsn8GD4wcChDSq4ykKRa7Q3dqqaBBkzpEzYx6R1f31d2Br",
  "key33": "622EpYDW2sC9JQWD3d9bjh7CP1autb93dYPUKj7Pdr4N87UXjTec77i62XGquC9qNiCsjV5DJwNU95o9ygLkn4Sr",
  "key34": "5NUTpSyzMkWgtcpQrs3y5pbY6ty6D6bykswngivtAoByyyAk4Fhtutg3q3mbEJnC7Aq94wLAUFWg599tU7FsYhMp",
  "key35": "HUCBpRWrgrTaKTnLuC4JpZBpSKFKfJuVP5bE5mN8qsUGpjNTaUoCR7DBcKx9Gnt7GQe9aJRZedAT4Ga8xSgpA4v",
  "key36": "65S2b3eu7pQqKTsZZzxe8E4mx279wUABHBMASw7bC9eiA8PigXqdeMWrjMMiv9Ba6fQoG4pCfK1mnkNs3m5RirVL",
  "key37": "5UbNZHuWE93fKS353fSynYiiCRw3aexTgorjcixKX7Vht5tBVihFnRTTLUFVvgJDpLxVPUPcvnwdc5HMtJ3tUdLL",
  "key38": "54QSY6ed7ncqmg5sJ3ye9rhmhFgYWbSLDtJGgdt1fY8ss6uqHw6DvmpjAxmQ9kfjir3pKuyvrHmWJ1Tec1LHqVWt",
  "key39": "a3CodxwL69CPBPipTbaPkSWjkFPLePLmmgy31mrRfasUKaZDFo6w1BfHAWKXzi9pNgWSHdtAFWNxYqr83JDRh7q",
  "key40": "Za3koDTKEVHF9gxi5QYKgCLgSoZkvb6JuKkVtbWm5vj4Shzq6zDPhvXrhXuoN11vw3BeEYm45AGmadZu5VGH6hT",
  "key41": "o8uCk3HLfvNdUyQHdNtXUr5Ckxxq1tJSusgZJLFBXeCDsnQ9omty8bPDsfizvsDYjLJ4MWfH3sg2RzzEPmPqS65",
  "key42": "4136Re7nDzdHR6HCEfz4zXLzXySjetr2F7zAMy1cS8haCymGzHLCBC5QQhDmR4PtodmZQmvruKsRyb1Wouu4aKif",
  "key43": "3RExdmJPHHwEShSZrnBgkRRPwoq16czE71byX3dnNZyhr9iCeoffWGWd76XW53R14FTUeZfeVafsy6FPtRWgsbrt"
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
