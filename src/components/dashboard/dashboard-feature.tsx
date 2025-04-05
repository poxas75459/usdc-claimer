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
    "2zRq1ezMk65MbTr3aAY8UGQPLw2w3HxezMeoivPaSkWAajwJqruEMgEJhj2UJwuNRpoAkwQD9QVYho1VouYcSTh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mzk7gV2eYbVc8rECxqNyCSPxWLPJ4UWMm6buQxJzkbjiY3DRG5JRW6Pr8hgU9ZNm976ZfnRxYC4rSYZznxbdytw",
  "key1": "5ZboLcC8WShFzLEFtzEoe8vRxzqhEnhsnmjjmcLyUQ974BkmtxX1LUdAwzSMpubhR3Thi8nctRw7KCwueyQzU5ap",
  "key2": "4Ma8ka5gmubDPyJM88RBPFiBraPkpjmn7ueebk9eC8UwVVXiWsL9yXaMNunssmhsy5agQGFW7kSDLZSFo4y6uiyF",
  "key3": "2p6yV6wsYtyTKduT1d8LCfgzVCaiCiwoyDTg5s3FnFrf5hh3S1e8tqZK46fzgK2VBh2x5ifEKfpTRtsQCv3eWqWr",
  "key4": "2DjUVUF9ZSGWBK3EWAGhwdjpky4SgHc92eKELCF1d8Zp8448675TbCqHd57ookoRcC5TxBBsReUJMKyAnvR6omk9",
  "key5": "s3NzdTDV4qVAnnrkk7kVPPjLCrzaGDMQ5iokw1r9PJLtqkGKz5svSZ8vyxqDVYuhf7GD1GrzwgmL4KB4zBhWank",
  "key6": "5NsJ4SPb7qQMKXasKbk6fQBre1MuChMTYzM1mNoaGowT4mCBEQ1zZmiVAvz3xs9cvuuEuP3HMpZtf5fi8fWcxi9g",
  "key7": "qpwzaDs1CnE87ySy97igPgieJBBsY8tVFJ7LQLAreWWcePRLrYpgxVhXZYEU7r6SrR4T9QSNvqi5xyptCb1pyiK",
  "key8": "uAQ9ZuY37fjKkVynZfaPw7nmGafySfX7eX1fck2UwBVMN5DLMvAsA5agPxiRuzzB3ameQxbnmhkVmNFKPLx6xmT",
  "key9": "85E1ZGsuhoryHcpt7WYZVDtrGvBdRXjixQwFXULHgSqMKZ7wZezVAirhLdSg936QwVSrcXZsAPvGGYfdNRgM1ZF",
  "key10": "wStT75jRSgcWxxUNBSENvxCrBQfReER394nqupJzSRrnXmftVJUF68k3EuSgQbtYi4dmFjyWFSUsgjLiGkqsSEp",
  "key11": "46A5x3AvCReEeX7NVM4nmJBh9XReNLHfiZg5BzEjU2Enh8dKgsmYTcrmgJzMJv21JfdgGUdUuLoz2jrLqtQpDdT5",
  "key12": "3ELg2VZyp39jfmCApQgHCjmYy8HUapCQFh7W1bdKUqmdtamzDT9mJZTGchQhYAKKewYysDi16VEgHNe42igNbigB",
  "key13": "2MySPCM2aC6pBzmAMZxY8gaTx2NWu8smZwDZc54xz6CdKotgv3pxsWVmGAqPGBXMWQ4CLcMj7i25VxXGHmdWMSrA",
  "key14": "2z5Ps5XDsEYqVD6fPUXs9B1KXGYHktbRYt2hbZTf4dp2k47TmwvmkqYTzg9DW6fY8VShGngjXh4S2jMFXwzjjArB",
  "key15": "3seF5zAaXVvdW5GigRX7Hw1FsbuRjQfy24vdsmM8k8qHZG3eXwB5hrNUBF2ESopXMGAC9y2U7s4qGRHjjg5w3gX3",
  "key16": "4PpBdCup12idAg8TNj8nZabMozoxk9G4gWXyXBvzMkEmcCxp6EQaKbQPRVM3bXoNbWZS7UDjHc3BesHfAqpsM1Zc",
  "key17": "3Sx9uU3y3x4MkASWPtxi4tQD4pvyWZkZARSDSUFrT9NSLyZzJuAJKf69tt6PMZswsRZ96tJE5RAAFGW93iEDCwZD",
  "key18": "3GzGJLL2S28TpG57X6xjtBS9WdiMEkhoZc4Yi7UZumj5FqLbkk66iHWSBbXLsgnZZSDSEzf7YgD3cZXD7jwEfbgp",
  "key19": "4D64XbAsYKCfAay7mzm3rhudzqd3q9szbP42AidwFmyXxbWJA8ME9Yo4FDg7UauDMK1cDGWsi8jkZpVx77NkWivR",
  "key20": "3xR9mcK2WudeSidVVM8tB48ttgX3pMkQiDwZP4HvFT4AWq1dHEJnnMou7teUe4yRRoKT2CmRoZBcKQYYoQbXYJ9S",
  "key21": "Gc1gh7HpSrgikKGU4HrN5uwQsxrworfqAxPZb473QN8TDN5jtbqNz6kfxGzwnZPXXqwXrUNcK9g9UZWpZEtSyzC",
  "key22": "44UbmZKj3sQPwr4DDPQCrnUVwXmQnL8Z4u5TAHygXbK1HPFp3Rw3XwhXRYfy8J3FwJj4QCyGmLPpEpcrWwMhacDQ",
  "key23": "5E5JC8nqrbx1NeW2gQtVzRR2FJp9MinRwqCR9BcRsDyhVohgxDBtvrx3mSXSFf8Jp9XxEkEcsRe5WVjXwpdFyUFH",
  "key24": "4mdGrnpVqpDd95XtUPvsE2mx9jAbv3DDazCLuoaG66BVGR2YyqGbMUXFtiVs9TEAwigKfWBQGiqGmhck8HhEiR9X",
  "key25": "5jbYJqrC68sVac9iA2zbJQu7x7pSeDjk1awE7G8x2CZC8ScoSJGVGEeTUwVzunyWxNx5E3k6ur1S5hfJ3MAfqbp",
  "key26": "5Z8EahQpyPuAjS5i94CtxiVbnRnqnK33ArbEZsHjWhT4GSYrLVG1bA1ZejNrWnojdScijBUZQLSYdCfFFkt18yX3",
  "key27": "4gJ8hqzEkNzEXiyVcbRBAAjUikXmmnp91nUuB6prrWfjQcuhhVNprARnqNAv83avhMFipiNJPWK9ZUqhkAxU9Nv1",
  "key28": "4ohLHGL5442a7yNjMmd2eGJtYgkxBpBzohgFLrUxh5GVe87F3qBd2YvAMfnGvNfM1B8kegT8KV6TMdRs9ea7qRs5",
  "key29": "5uLMNiTqdf5AR3k4ZgrMvjxfJDz6Giv7Nt6Lzxrs5H45HueaJ1KZdNVEAoDzUHVmCzF7Q7MJzFk3FrDacWxAARP7",
  "key30": "3A1r6DMAMnkEmirxcNGWedAic97AW9hc5f23rvGAwrvb4BzcJwW9q1jVZ4CAL88vfhRCCnA1gCcJQ9FmQwmypQka",
  "key31": "2bGWZrmgkh1RMYDjsp2L4ybRYVhaECb2iB49fKS7uN7uVMD9wd1ZzRRYbaaC9RnqAZfPxpnkPHoCR5HhPpmMKbPg",
  "key32": "41ghpSGiohuK6fNhyqQ6fE7aLCjMiqbkp2jKx73GtqUYrtKA7rcFYhnDp7SYd334iMku1HxLSeT5HcwMNXkuiRiD",
  "key33": "c9ohukSgxkc7eFEmf4iZBo39dM9tuBgqucTWZ5pD6FGuDg8vt2zMMr71YPbJdWnYDFdhb95Kdvz9SVbeH5VFhNM",
  "key34": "AJRjrzdAz2GKNS1jciexRvJZyga9S2ACWLEL2GWDXm7mHPy2m91sXw5p4yy9uMci6ijesoTJz3V3xkGdWWFD8Hs",
  "key35": "35MTjaFmPJeFA7A2M7ant9z2CXc9nw2WGzD99isRBQ6sKsmryF9ap9AZpWKykpQeu6nMzgDDi15W4EeN3nRngqAK",
  "key36": "L9K32cwLSLX6SC5k4LrPpQtzVmsBUZqp3LF1aatYGweoQ7uuezs6vtw2yC2yEMG52ybqxYrFgkbskSLBfBar2pJ",
  "key37": "3QLu1Gxab19R7LojdwysyufpTES8SfAd3mKQ3mRkfSakyS5DT6wicw95UFBKirfR7i3Cj66VLFB9WEMQ5fxuaQKM",
  "key38": "45HW2u6UbQbaZWwP3Poab2nRcx2CbdPTDqxAK78a9KKjjzMBYLxSVgQ78A7m1mNyBPwhmbft36N6saugWuApwdyM",
  "key39": "62BF1mHgKci5EfjWwtraYidvTsgzxVAs15yKHkpwm5qEcTVMV254RJHdrYYGHQuqj11nCXbUHnukePgUhBpNBVox",
  "key40": "5xRg7FwpnbZMaVc8Jkak1FYcrCUUuPUdFAy1WMe7SYtxSPMM1kvCtfh2dRDhqumVEKE9ZhaHVbGcVmifRspN2TLd",
  "key41": "2QALniDgN9uZdEXBxYRmNkJLmvjqwUmtRtg46vN8wZRQD9bfbb3R7qwLLZdYkr8YUJwAajNtsKJgT58S9p3ySjy8",
  "key42": "4oBsjh4CrbZj5mLzhumVJbHhRQiEYoQofa1qxYEFP5wgyYx6KNaauB2SEQmLgT4FZRRGFV71J4LmiGCSJk8Nvui9",
  "key43": "2MLmDUp77ABfgsfyNxXbXRjUQKjbAwBqK63vxCEcRwhDEd9iEpozZUWpKJ8VBmmbNGJ5nXtP1e9ziddp5Me1vgZZ",
  "key44": "4nPHNCxaREPxmzzXA7Cbd2nufss56PqGoU6zveS8UwaCJE8XLMme6CFfH9Pkw4kjZ6kUaD1kunS22mQRHYUgFTda"
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
