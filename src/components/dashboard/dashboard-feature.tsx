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
    "5v88Vs2u3riUuNq1hXYTpjddcv3DA97iFYbhQmVjuKnGhTxzMASA8eHvAE8HTNwLFccgJ82bMD29K3CFwpSrVnbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r2gjKB1qQaQdMpDFY4HZCGuVkjwwZW1moqpsqZo8ZqKSdPCeuk7XgV66A7V4HSruDBND48ePH3T8c983Nba3bkC",
  "key1": "sBiJ1RrunZzDFp16RRFQsM6TowJF37UVLWuhC7QcGBhjJjr6rgHDuKgNGmGL9hmG2Y1w4qUZfr6RWrNaUnAjecS",
  "key2": "4ocoxmNPXJwFcQWkNrjMhdxeRuPFQ2T2eMdo5nW5kTccG59yjmYHW9TmgyScxbdyvJC7NvfdXfwrMvGuYgxhvcPJ",
  "key3": "DtTxRuvvH2T47RpRcZd6XVaSUTSyVyhR7c9NdpiWsLexe2JD37RYcyZ4rh6LPWYCRavN98wsKq9sqmGJXerUAjN",
  "key4": "4cB8bBHTf2TWCuhay36MLv2Ny3HrDGh3pSjruLtVRa3F9Wh8kJmfF6E8ZL29rF5KzhPzJAQbMxBRPAPLNqyXk5cR",
  "key5": "5CkGsbr5D7eUwRErNEsjWXwhC8Z14U4txzNTBy1XpiNJ685D4Y6PkFiSCXdWGGw5UrZT1J8KyV54vjT9ftsQtsJn",
  "key6": "56Qnn5fFutr4W5Nu1qjC1JMapvwiMXREALw9yRggWhjVZiawEhmxmQ5x4VsLRV2VtnWipVKx5yNSZiH7J4QsCNHf",
  "key7": "HDHc5yLLJBPH1esFHngWQJtPBcdGPeEPbn6AkuKUKiumAn2aR9dz7MLzEq2j9UCrRYXMjwLtbUcL7pkcWPKAJRn",
  "key8": "2xfzNkDM4YzzxVzUs9AsAicHw5LLuSBgG5LqYeNqyNn7HGjMnoHdfnFoSSUCv28nbVQY6rfUyXELc5ms8tEkNU13",
  "key9": "4hvY14Rcr1ioWRgqSN5d8w5Qo8WaQZhFjcpUs96G7V9eum96oScPfuVSDGcRYYtDfadRU9EpL4t3PhVZiyLTWHD1",
  "key10": "4hTCHBaLohbVAKyG5WFuKXQwkBCXdxTPnQqKMBdqG2EVW8RTnkLTsSzrtVUJDzfAxXxymyyRqfkukoXQojfzrJMA",
  "key11": "5mEsvLmcuDfgBBC5VVUgo9cJC1dpyLd4yTzn5LmR2E4XqybCZ5sFocZYtqhbpTRW4LJ9wsVHjCoxA5xV19Uj5h4a",
  "key12": "5EmhyzwdsJxNShwQ3gwmvLLzm12VmgiiaX1FSAKjUzappzpAJ18nK5cP9vQMiZDPJKz1SxUv4ymzmXcoRvw69LHR",
  "key13": "2U25CPx2ZdrMURXYNHgZQ2dG5YPuKYJo3azz8QNAvwJ3fqiad6g6V3Ho6vNA5ZFBSLkKmDmjZNTYY8LkMt9RvK7m",
  "key14": "26RNytxHFDhAjDR4N7LtKVLJ9e4uNn6MmCXSSe3ZrApXBDBLhHaBxC7tgZ6w85SVUHxqVcnmeRXTsXjUuqW3S5LU",
  "key15": "34NaHAqsntvNqYyapZ3DpAKV8XaR8yQRpF7XA9AxY6ZXBFHt6h9xX5253qEPMHHZynnq2Um2DXi3yCBgs5XphpLt",
  "key16": "5T7EyquALcc57urMLTLQ898vm4J2T8RJk3T9Ju7oX2TacDaHCQv5KavssA8jkMhW7pWyFuZdHSHc1t141GqimQ1q",
  "key17": "2mkkGnMLDh6xEKvDwf44rRVtDJubZwEhQnRy6ztMWyqgsHhXmvpqR67htRgjbNsTjdsw9BU1qtT9pH9txd4YyRR",
  "key18": "2J2FVP5cC7S6ftHV5KdXL8rL8hrscsX7QLNBKvZ7MCyByKXejXVacmHxDzZkRVXPo6zm7fPNUfipZERzy7EA6TK3",
  "key19": "5J8WQMSRJHc33LMgdLQ9Q5Hem2SCn5NGG9XErkXCT285eZAPnYrP6de4EXpcsg9MjRak8z31buV1LdVjxi9BuE1X",
  "key20": "37LJ9K25ULUxUmcv5CDqbZq3bRwnSqn6eZT3GRNAA1fMvc48UTynSyuYDS6nGvq1YLNxSfG5eHNUhM1Kn7gXpzM9",
  "key21": "4d18REnnCE7tBvpbHw35kFpcA5hb2SdnAh9xdpnpUXZJHFLAsiLTnDuZXmtjeorTgY2ZFc2bYhPnHATbLA1Tbm4T",
  "key22": "4T1pKAUrHVihVo42bUkhMMLDJT35LnY91QDceAwk7YKCVW7heq1qzR1YNnRSoBfY5a8ZcAJuMAJMJ8kWU4kWPPh7",
  "key23": "ErTmVCuswfjfDg6r5VrZMx6SYihbGVJTUG91NJmLBxpW4VteUsntL3o5bbF4MQk1KnTbvQkQFaSSkT5VKKjko6E",
  "key24": "5gcVgaEZfsyRtNVbnaqJdq6Bk2mpoSQkz9nZj6JoktNns7oeHLeZmhADtQ1i9jvJWDMkzVDioZKPD7QNeay1173a",
  "key25": "5TDa73tWRkYtg3uzFKTcfzMFBmmY5w7AUgDQS2QKkYmAcsvrioJ3zrzJEFERcMr6YxBLrXUymXKpNyGUJTfmDva6",
  "key26": "23jVQJLaxtyGJNQD76FJLNyy3BnPuZa4QpqP7ofojGx5xCq9U9q9TcpRLJSeSquRo8xKjsCq4RP3GkxzrRWgyZw1",
  "key27": "4KRusykbapNh8oQpApaNDbDr6Kfbjki87MtWcAfckkppi1knVqvAN9KyVjick8Zq96rfSfUtCjQGvzUfDTkenDSL",
  "key28": "2GCtUiHP9HiQpr7dVXswQoKnWjrk34PdhWUwZEbXxrTJL2Yfqo3mSnpG1cWAwcpQNo1M7k63iPSSEQeBNAhSbbfg",
  "key29": "4vicbJ1TPyb4R9NY3WFXKdPXXZHhm4RGQLDX96Hkwyrm9tPx7ZdqonES45GihNPZSTYgbusQbwLxKncQ5qFkuTjC",
  "key30": "3oAvcCCwqxLk2jQ6hz9FAv1NWNYpD4nBF6oESCELaSvqhW9LgTbPVQW8o47xQXD2mpxoVCzAxDzFtG67ARPjRvjR",
  "key31": "3b1rv5tFHa8jtrdHq75CVzS1dswH5VYVWRiR62367deZSa6VcjAq8pak8j4HsBZZJPy1FEfJ4m5R6oommiumChvi",
  "key32": "4a8pKdqDp2r9PZ5R2KN2ciM678ufqmjeZaSzZaPKRmfc8L3v1xFqD6QjjY9YqzXRMyUZ9DayoC6fFjg9ShnZYTj2",
  "key33": "2RNL5E6FkHqdD8Jz3n8HBGYWHRZUyZG9njApRbDABmTsWM4NeeEfhMcZP979NReBL3seX3k1kdcA8CF3zkPD5uss",
  "key34": "5RVy8eLxmgNYWY9UWPEPvT8erC5xqF2d9hSTxydQTacNBSWePYH2Tc6hrpTkNhNi6uuVavtAQXKHfzK7pxGqbHW",
  "key35": "vC6ZBL7HEn8dqzzPn62swqyt5Nxve9UhQpHRkjNaW4WrnixCyrGcpwUvCFQGT4FvuNR9hvF5cavfm61Wusq8KsR",
  "key36": "5v9m9AmzEjfhTqtc6kXta2svPbq5GqbszLhaHyDzTp5xK7S47c2s3v44upKs8hpbq8BEERuC1PFhMGMsMv3MPrxv",
  "key37": "4h48A2p6Dmw4FurRDT52pzehCNCSL8aSxTsPvrNyQnzRfcN1h5PBfQ6a2ddBAVaoyq3HARpX852dUXG8qjZ4DbV1",
  "key38": "2j7rTmJQMuZLhwkfr7W5f62RB53n8fDok7fMuBFQFKixPBPLeweioy8iPtSXxvpPf3Vh19quA6BzS37V1b3WNi2G",
  "key39": "5fXeGUk7dmrsmBa4r23npmwx4nmvCKnDMqeqJfSK9rsW4N5Fmxkj6nNzk9sHBmKjjWjF98tCbZPR2eC5b9i5KEdW",
  "key40": "2967VktGW64fM3K9i3ixgZzA4HewfpXLM44haB8gNozB6BPT6MdwG3ZrkcE1BNE1nybj44pmicR5QdH5WZhNb9Ba",
  "key41": "3czC9St72mZWDtSD5MNmmtWbovVoXnjwKsoK7hPZ9egwMhzhmFLF8y6uPvSYo8QpWKrujhoKJ6RobXFj3SLwZHkK",
  "key42": "b5tb777LVb3QpPpksqmc5JiZptP6wtD6Sp4r8LZcSPmXuFiZUvayYSpoV4gbAzpmFVjUSn16gR1cmYADXaG8qhX",
  "key43": "5XkxmQnrPxWiKxARW9Lv4zoharowZ78Rc7HiFyYG5e7nfum1mZtRgH4J1QfGHo4FYytVc99v3REq67bQ11XbT2T",
  "key44": "2EGodigtZAudQtPa9mD5q1BFA99buUAyqqEzZWVa9hyHoZKQgmDoJrVNoHiWrmxu6Zn67z4JyAiNWweNwyeXPVN6",
  "key45": "ctPJCXM2wDTmzucQ8pEFAjktdhgMiq9nahWFRxT2oymgqykBHhHVMVjqbse9xnwkH76E9HVwShLZHCg7eitriBU",
  "key46": "4Di8MQRztqaognZc6Nim2T6Q4GoANFErEpQGiJjjpCV7ErD2GLRkE4jxikZ3QBtuYsQM22VHWU8himeb7XHdkGXV",
  "key47": "5Mc5F68f2aFcKLw5TDa8djFuMFdiKbc8NFLU3WaspTd2ftmiNY4AKi1M72RoGKvLMui4KhZ16yutUfRc3VsHoJor",
  "key48": "qT9hUNWTSksgYVJ684qAZNUmF3jggN2LPCU8zgyzkqV75wpnqwNsdtbNJrodUT9NErxDQNbVcTrBjKZ4FiUmdwu",
  "key49": "5RXSnLCNEb9VTzWLv4hVbtwoe4RQwHJCJku7UigFDLQSkWrharxwTAr2MbnHEL7CFX32P65ZcFVwMha5GMRhQL69"
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
