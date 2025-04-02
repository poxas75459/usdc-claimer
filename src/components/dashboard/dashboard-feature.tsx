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
    "2AVgwU5LZ6aMxb1P6V1g26bwYfaGgm21FvBzHKmTYAYWnsgYvJqaavNmAjWEMLHuau7vvavdR77EAjkgTDHFbff9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p8EY5MuonDFxYEpiMXhBsPRFaxbooHgEcZ2c2zNbxAmULRANFjdZisJg51vZbXE9jaf5KSZ8UBxJdjD7Ety5j2K",
  "key1": "637LycdH6YQRJsCtsRBfzBWEY1PayftEVuqbnPmc8ooMCHoRGHWrF6MXNoZM2zctmMMxEFE6FyT6EzEDzdh764fz",
  "key2": "5M7AzBos85apoQBM6tJ5BKMcrddN66RuUvXfqMvAEog3zPWhn1dxVudWAUc3ft1L3vGXDDuPmF3jcPYE1vv8aPmJ",
  "key3": "5vM6FfyGiJvxBPChyYqCXZbBs8Fb5YjHVQDrykRG2qxmLAk68MrpqDUuAiayLNigAAfKPJWKDZZMHrspgvEp5sbQ",
  "key4": "3hQwEgJqLW368XaNyTA6A2jiRPdcxuFh2ZZ7Npuhnae6fZqzMGnj8QHC1Ugp4zYiEJ1azZy6fbF5wm1jVjTx7TLn",
  "key5": "4QfumxKh9PnStdxUoS7QeFaqfWtiVpxksK7WDTDLUHg7RaZVVg32nWqYutdvq6GLESE3DvcXb3yxmuYpphC8mUZt",
  "key6": "3ANt37ci4qDEZirY3M6iz1e6jo337mdQMjg4dT59fijJ422S8t3GB7Pw988YMCAG8wp6fPXkJeoYy9LSs4Wa8mni",
  "key7": "2dVaCsDbdVp2xv2J4AtPg3cXdTPgxPDSMaKxX4j21YPsbaTed54UGWdJ8XqtssD9wyt2hSaQoP7ivfNBzC2TqJiu",
  "key8": "3cQmmdqLmGPjXdmW4XWYDKTadna3b9vZeVWJtYRZhtBVxhGUCfmdBDpwcjyYLYR3E2HYT3gbj48FUymBzHDrnuuE",
  "key9": "2dSSmg5DwV2qatufxQt7Hy614j5LwUK8LdaWuobz38jP7ucvTmtfSVcxsiFFeFVxBmyHjPD17hpjYQuGVyWwVty6",
  "key10": "53DqfsaBCHAGFZ4UA326FoyysCyg7Z4tPH2VYmpTSMZVCGxhYyqRro8PFN4WNBDrrphAy8xFMFp3BtbZo8aWw6HJ",
  "key11": "3iHvYpZe8AuDpGBrEywgnJ4vxaoHtNNtgsLFsHMhWZKqGvz3WL8bZcw474PAwfcbMLLpg1NyqKWRJrEZBivuBbUA",
  "key12": "3EG55EAeJo7icQQqv8b1srnbMRMoiWNQsi2cKEZtyjZd8DgvERckroHnDGX13Qqa8brFsSyUs4rVui63mFtqW8sq",
  "key13": "mEFXrjRmtcxwBCCRdbrNb1RHE7ZAh5YdW9iwQeNdggnPvj4haJgEWzuWZTDvB4w4qV9RLhcAEJ6wTfdBXW8t9Ei",
  "key14": "igK9YUTpp5oFJ1UTk4cqnJkDdc8UMXhaSJCv4kSkZbd3e8JTa6n9uesnFcK2YN6VPjXvax9JqkDtSNdR7QVNwxT",
  "key15": "7zF58utKXzK5ZG9CLwtnMugXgVeFwPXdBJu9xQDD6j9gKfiXWsRduWz9gEfeHDhiNeFjrTE9nBqVFFxPqJNBXBi",
  "key16": "5PbE3GDmUhVLgftc8yZFe2Wn5pjzRAYqYy5skofQgT1pQLhepR8oupnVrY2S7fxXkdiTHXFW1iDk15rvPoKnqTaN",
  "key17": "3rsi6PHYZqJ8QcaxV9uHWxFhMMNjTBdR7xpQAgsBpGa2t87ftzDgxCsbyuJEgYrK5w8MEb4JFcLRECWmt2ZdsW9x",
  "key18": "4GeqG7hysy59pEioU3uRYiT3R9iufJWZTevxi5rLmsTMmUPYbrcq5QPp5FbRan5X1SCQKjaqaqjmHKSjFhb4K81A",
  "key19": "4xuM71bDBPWiHR7vPL43QAtGXJ1uc5a4oBSnwVmYiQpQqVRnDczVyeFExxR1zu8ajbw2irtsywdCmV2SRwdPj3e6",
  "key20": "3YkcopzjVLcAefjBpczYU4U8vVKcAie77AU55fwm9K5D7JA9gzS5cbNXrdFac2LHKmME1gyW2eajeDzra9sghBpT",
  "key21": "2Z5Amyj4VwYL76ukevGyQtdrDYeqqHEH53eUpgBq7cNPHfz2xvFb87edFEavzDtaYyyBZeTxG4gtvXnKHL9uF2V2",
  "key22": "36dW7eUjX7zHacLwfyDbdddwR9n6vAkMge37A83WPsrPgC39gFpj9qBbNXP4VgEiTLXzmD8QA6YJVpm5NN7HwcZR",
  "key23": "5sp3MSCv8jaATGC5eQvDdAKB5UptvYMDDtMZV3g8wpyYwZPbixnmZXt7p7XPWXJgXbr8YQjz2FgG1NXupM33gTY",
  "key24": "yAB8BZ1fXNMJAHJWLHfUeVjTrZUaqhdn38HFTvEiZ8soogdBgJved5KGNNvwu8mX5cXJ9Pg413YYnPi8fmNUbfG",
  "key25": "285oEF52ZJ4eHkJieSgiuCe2DxpDG1UZVs4uMmL4CAdXQxLkwfB8nKABo9F4JkLkAASoXMfb1zzqDjdqfGAShWTF",
  "key26": "5WcPufTtZJb7BzwAv7ft3AkCdCEvVjQXvaBs23fwk89tVUetoFgBwvzTuq6H4hwyTXutz6Mm2Rg8ccYmyCwknh54",
  "key27": "2Bhy2pRtjnSYuENJ3G3xKDues3SK7MC7nHYSWdCWv2GHqrNzwe3GuLSXCNQzsQmQtomQZtyu1KxsY5F9Z8PWxTJ8",
  "key28": "62etgB9yiMK1KRAwaxWQE3Rk7G9fS6Udd22Nu7YnU1nD3DtUdDnr7SeD1p6NYX5xWsPqatTcDNkk1ksMnyufyLkk"
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
