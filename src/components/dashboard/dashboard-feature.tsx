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
    "31ZwtNQo1XjuoboGdAYtpe9QFHiy7Eu8j4GGbgFH2tmGzK3mE2LT6qZi8TrdUvDSL9CS7rAcP196NXvTZa5CKLfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PXam3CZ4JUXFCxyx59tobTNqwGrUi35Fb8FBhLstpuZtEKkX1M5HB7Y4Fn4ds7FdaM7rbC9RmgiNU9WyaF5Ykce",
  "key1": "VztmQdu63tScQzAwMm1ssqY7FEoj2k1RXE5wnWF33m1hZNHFCdeVZ1jfG15fcBTdnCEuXiU73jmf9p3qTWjefrM",
  "key2": "2Y7yicyzezxW3pBWnJuz4wq2tAL2ENmN2ssefnWpqQRwSkSdHse2mVk2U9kQ5rFHSYBrTUQpgmYGZZtUSuGSHth2",
  "key3": "3iykxv5hWvMR4KudC7BA1cJAirbRoVdUXsgx2mxFCoUzYe2M2T2yrVaEsSSk7f1yiKHhC4FN6RUcgWCuzGwkWGSJ",
  "key4": "gohM3DB2JMVWULJbnz5FkH9QLCSTzPL7aPNpWUS8q8i1NcLpkgYKX3CTCcJAfuJPcBg2gNjESLR4UBaDPg2Qcu4",
  "key5": "5PRK7CijuWghiPNQxxPZ9CGgwEhK19YrCPanaJX1ZrrCwQnHPtgXYpkwL1NKNGxQcgLPJyAeGqDqGonEmzp1guSZ",
  "key6": "cRCP6fHRPiq4ruQFW2xjRaW5zbSvxPjnhRoeTKADMePQ9uau12Qi6dxNiT6VdaARh8WBHZvTUhdSYqVT7MSxAss",
  "key7": "UBd5RSZThnDnxpx8GeDhfN26qWA1iomCEpRmV5JNRwy9Tc7k6eHojNho6DfeCzro2CV8rP6buJ7YUVwio9emZB7",
  "key8": "5iMAdZ5eDELJhWDEBCEqn6nr3y3vJVeoMYWDkWxJqfwtT5bjgJQNfWiL6jYVXLiwhrQxAhPiE8G7oEWY8S2fbqUs",
  "key9": "2rXEYmQUzYuHV8FgfSk3xxziVAY8NwF9m4GHqtQCh37zFsJVw6sAvS26ReWaLMUMykrKWcLwqvZKRRLcGwBNmw39",
  "key10": "4cvWrLmCrC7NRfVDH1ErFnkJHiNt7y5HdA4tU88BHwjY12mJ2DtV8s5Dx29obBMm1twv8bCowJEBk1SWZKQKRabc",
  "key11": "d3Rx3zWNqNeWmDvUGja3eDYt8cHvSF1eeA5bPJqLHYSgcxN6SKAyyRvJ26BUpX4yZdBjx1NRMy6LXHkDahwfjhn",
  "key12": "3Aa8wQq4hX4CKmNgeS1GoP8HawVZMpBnKX9dKwvvfarJn8YaGGNc44mW3TKJv5CfMFxxPaMis6wnde78yAfokJzD",
  "key13": "5uf9mWbUq6SA3TE7Me4cShjh5pnits2nQRLa2Q9fJsH3ywB5RerYpoNv6HkT1KSMofkbNyToVoQctw5TyptzSWPq",
  "key14": "4oYvULRwimg9kbycdS5DetywWVoQuVHHisXEj7bXecx27wfKhCL9AtZrNgFWaKoGXJxCkB2ainkByemrjW1gv9Ez",
  "key15": "4KisC2B86ST61sbDjpww7mpoVN8TnCuLjPUX68UWmq89xeiZcZNwqU12jfyBtHntDkorBa2mnrqs6LdxLuFreGZ2",
  "key16": "2vWYeKS8Vc3GrWgKZ6njarkYmCnJRqnxycnSs8iSPeC6z9MwE4orkcrtjbgg1b1bKKj75oHAL6EHCkS8juVgbChn",
  "key17": "3V8HJFCeJjTunvYGUjnh1LNUswaRvhEx4bomLxU1mDbsgYrrTzkV5ypdtQ8AMbyTiqMcMrkkgw7g4QSWrcFoeyhx",
  "key18": "5htvC5kTViLajf4G1B4EFyfMfsxx3XUWvrE21F6kD14aLZrDMioStskVphuAQGxY45fuSUBA9L4cFynXkg7LZgWT",
  "key19": "4VLzHpnaJfgF2xSXkzPNEEUtJ8LAzseJHdom6bnGtLxr4xi8FiR2giuLvf7jxxzQPz7BZuWqV3SwiwAfmrenCKRm",
  "key20": "2XjdQ2FktVdC7HnLTk641MinGT5mAE3UKUWtiTHKD9wTwz8Y2j9bVNqssm5ShqGUkWGtaEDubGx8XyZRncUks5bZ",
  "key21": "65NTxH81JytErFwT6wKJdxtvWfCHZHbWxZW9hHCD9Zw1CBWsdxvd25uBaMsce8fBPN8GddMGdsKkABLtAYVEcWas",
  "key22": "mdsffNoaVmJa15e1rCruNeCXk5NHpsdbbkTdrNERvodrSFFjUgcQauzBLzo5bSnDFJPb93jbtiiks35D9PwLqa6",
  "key23": "49ZeHkSsABtvmAyPsuz3fKXFfoT3AJFu8H9spH4Yg4numFsumFgYwUCBcjrnYsPRnY9FY6Xh6zoWqZ3QJzitRPX5",
  "key24": "bqSzPK3e8qYR6Zbfgap8f4kvzGu512w4GReiPFjCkUdwq6N1wcMgV1PnX3YmkDfu1GtpTsY4ZsxSkRdri2nLSaj",
  "key25": "33Ho37o6mJrVHynS26ZuW86WEQFmjnmDx8fXBc2qJKrf5p7LSyzoR1fS37KCWX29P1SoU8kBt6TaYpVWZpuxt5Zo",
  "key26": "2quaqmK66PjRgpeKcXYxNUXGmBuuDgZTCaJNUfVjx5N2Sv5oAtabb5rZ4HS69X4KLTirCTcC1ZA4E8Zwjqa3TSse",
  "key27": "362xebgyYDRNjTmikfnmWJaocHNurdtJGwFE9ktazRa3vLMWReCzDAUkZpMUznG6mvrq3eijSv3kTNgi1xqxkEGr",
  "key28": "4pVpyhAnk23atEZJPMa9oTim9qBkhzwFCgyUB3b6ZHzgU9vNNSKTmnQqzp4z6F83X7SF7KisyhfqPHHCeNRDtnUd",
  "key29": "3jWfDVRu1CkweYvyXRhUu4Sf3RqJMiPdY1k4GGFC87nwmy2pZxqLHoNg7vA8vokf41BPMq8SNqhbkzcagDuGJ8Kf",
  "key30": "2ErQuMjTBeGptgwQd2C11Y8FaYciXJB1ZtZDG6yKWbZ5pYzZbEzTcMiCr9j3FDo2woPhm7nLaf737ABJQzCShoeY",
  "key31": "4jLBmX7ZkYTBtJheSyByxgnuVyxnpGg85aDd9rg5GF8zHXr6eNYGCMd2cAxPdnq5DWN6uejp27y424Gfy4J21AK7",
  "key32": "54TzG8NeDEHWdbmLhPUtpgdiZEse9hpW3FdijpB4MZ4eToNTaYASQSWALqkWeBmDYab6rJDT9QQWGv9KNeh8MpVP",
  "key33": "zd6t2L1oWTdXQjnmL1PK8XpuoWrNHh6kJgsoY7MpzV4FexSRc8z6tc2LNHmR2U7Wc85kU2mHrcad9b9kqUMWJfZ",
  "key34": "21BWtYgowjHyqWB1W5xbn86oWVnRwF7rBxmgkBr1tpz3XgXnTS2RVqhtAvM8CGdEz4rBL5v9eNxaJk5XhP6Qkitx",
  "key35": "4LmDhyMBp1ynpfBgGZwV2k6hMC1bAYbGMtYWebn1L6pU9RY2VQk5Esr6hCwSgt5F6sd3J7yKGMFBzfEVAz6Nbxkf",
  "key36": "QQMgZGPc2TvCXrLZDFaWbpVFsmaX2oBDczURGya6241QYKLHwMJzzSrgUzfqez3bU1oWhHwXMpWicd8pKSMnPq9",
  "key37": "4rXGpLzfYCHertNo6xssR3ubWREPB35xD5vru2E85igeuiiQi6h1kHjnSmVfRcGCeDU6gvmM2S9MXeqtbjBxbWXJ",
  "key38": "2LocgQTnfEvbEPj6CZcuYk1n4x9RGjKmyRqpmPVbjXyCYw6ADNdzFTeU7pQritnjkwAHBN51PgPYULfftFW7KyP7",
  "key39": "3uDgk8ktEeztGani6FsXBaE8VrURLp5rDMHfEFHzYWBBWUYamiW88YUFMnz1t8m9Nbtt1RW3SWdKKxym1btwsdGa",
  "key40": "ohxp9XHvdkJbwu3b6M4k5WFYHDX9Ff79aZrkbd17DXnrCEjEVaxQFUM934virHHUfhrowwBkP2RBZNpe9EZwkeC",
  "key41": "3EWpJgQ4ZBfLgdSxZGZAGdC2L9Agh5uog32ZKDRQsYrSELEcCwHbzFqXHqnDMxfvcUsXEbyyh8d4ESLNRLUew8JR",
  "key42": "dNuBQcB5yRVzhxgDFNn7Qg3gy57uJTPy6uGEWWMPdkAm8NnnMvJBeXpPsok4dsWwsUZ6cE89ixdgKpKjcW5u3Di",
  "key43": "dMpzdg5rMgvC4bFGF2a4SoKhMvtL5JgLhcZKTVaLzJcFp9n9vTnojPQCS3zYfy9Y41uJYxCynKqF9d6p7iWMZ2K",
  "key44": "4qeJHjB1vastSsu4AzULfBbxTD4H7XPQe8WFFC3Z4vynTsarGkcKogwSTP9F5N5bRZ7V4eVEY1CLmLnX4r77LdPu",
  "key45": "5i3DGzbPnjd2Xs5Q7u3XUDDQXfetxQUZ5qn2Tgujt6NqFNPAMmWrhiXyvFCuNuzqM1TZhknBM66LhCVnzAe7aUu9",
  "key46": "89ChLCJdfwA9taeomWVcZcHKxsVJkaWr3bELs9B5YVQeYfwoMVjCjPQ8TCjEUNr3R8AkEbX3no6tu2XKEzD3StZ"
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
