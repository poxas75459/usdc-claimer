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
    "3vuGyTg7C6rzc2SNuC9a7HywEm2gBrQRhf8AJxrP7i2NQc1qpX92DdwRW4ZpsPR1cYHQthAqbuPnduhChPJNm7Sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HSAG8UdDHUzVWYszUsR4zgXoFADzDDiqFJGoDSN2kaT29t62KKypKuZVfwT9MVBihxxMfBQVECPNYGhc1kpsKmQ",
  "key1": "3uq9rALJJ7gm7BXFxqU6vhvZVj8iWARF58RjYCFNsiCsUW8t7csJjCf3VdF5CxKsqmePVf3enpPPG8Yd2AobzqK2",
  "key2": "4uk775a3jUC38q5WF8R3Ld6eCoYZ8WncDuSrY7VHUsgL33RJ98AhRqVkHvv7oRhFj8xPdWEHnz24cxbJmr8erHo",
  "key3": "GXvRJj5P5J9joHehmMzE8Jbng1mhQeCiLrVHSShM9B7AF3fouWm8nGyge6owWSb5niZUDSAa55Bz5HSGJgFaPYj",
  "key4": "27eyge228BkNLiaAxhxWpAZK88mGGnMqkWBWou343hiDLmY35aMp6SCQpFkRFBXmGQrF6YWjFJzUWSZSWn1g1oxt",
  "key5": "5hSANkRztimG5xpPfTkH8drs31qh8ieW3Z9atXSTWfZmncowgkthCprQXQx42d3vY3JqGdauUsfQMY8WnewsLRed",
  "key6": "2Vhw2mDLk5fVyMTCKWHCp6ZEeHMNtsK9T4XUk8diwkKERLSmbMp3r1ww6dwpdvh3tUDNNEr9PwCc7SUSiEpNh8i3",
  "key7": "2GgxJmH6AS1ebXW8mvYAFnzoEPmtGL39U5zsdzaqjyxNioFY8xzSGDuuai7Tu9hbk57vJ4qKenyp9Ejjp38RoR6i",
  "key8": "3gzK5Jme1JmujB18ijVoabVCXVgzfTiLxvVDhPZybDy31pLkiPZdfN9gexCsDZnLbwgy1rZx7pFQSokUoKbemwWP",
  "key9": "3ZkRqcHofrtq6akvWGs4edUdhd34fSU9JehiBqExsT2LVykQAhqejv1CLGzApGj3e6NA3t2CeXbubA5m94JzrUC7",
  "key10": "ujp7byR9ZNzXfmHQm8Ay8FgjTf2ZALxQ3F7YHDcp3QWvxoSiwaoM1Za9Jr3iQkMJvZdU4wCB9YVTwMTAX29e1cN",
  "key11": "5jeGmWNT6uqxDRDBSauVbKzxuKuDsFzsykFWFdqyXnBMXTb25jFoVEk5kdzGUsR1EuEjart5sAohyk3eyNEZzkYh",
  "key12": "4E1Su69isV7k8CXrtgt3AR8b5Qsbt1Eov5vjoBBRBgUVp3e7SG1xBtLXgYN3xNSLyHLeMuYqm53iKLJVCcoxDgs6",
  "key13": "b95CunLNe3BeammxfnkMV6i36GJ5Fpi7hskGBSXiG6q6yYrda9GiKzrC5uATkYe1Mfx6xF5JCksV5AsaNhjrtSk",
  "key14": "2Dr9Kv6kyKrY416z7KZXTDcoTHCwCoPQgMKa9RDH9VtBPd11BXnMSNup3fmLYBj3c2gAsTn3Mp9bfoFLzDwjCPc1",
  "key15": "2cLT5KcQkXm43TEkQJnCtokgFk5a6nBCtvsAyMwTJMhTn4ECJ5NduVN3N1HFcyH8vmU8wHZKt3KzpissLL3a2pLh",
  "key16": "5wuUSbFisX44Gqecy4weHAevy9j4D8D9GViahRatppVNTohPifpAoxKCMtqYUCPR1iWkA2PVw74K44kXPmA9Gcxx",
  "key17": "BsHtFy97KCN7dFwqD1b83anJJheAjg5N483jLobVQ6nJ4krTeGoLgoBVBFG4MGgoc5f6zaLFn2fiBSSKD8ztggQ",
  "key18": "VrvPHfQ75wwTpa3xpEyHRAqneJQ9aB3uUiA7UArMuvJESSTN8ExFUB3hBQ5Xt7zSxce1AnL4Z2poVeickDpP5Qd",
  "key19": "3tBAueHVbLRW2wBszK7Xr9GCEN3d9wQPWr48ny148HKeTvbLJaDFEgiUm9Mftf8ae6qsZbovUhnWgoqfxiBo7jhK",
  "key20": "395Ku26GLZNBrwZr4PtrwjdqyEE9JiHLouiSP2v8CKfh89puKTRFDVa5ofWStD9WSWfaMWVTkC4vaKSmC99PnzoC",
  "key21": "3aUAGkoJjFoTVb3p5HCvQJQLjYQwitHwNKniS1Fk7BFJQaeT3Kq1fSughPj18r3joHSdkX4v9PF8e6GohTFHzfid",
  "key22": "2LxkJEya5YpX4WvaVvJEG3vxXNrzaZc6z3v9w3NnnEVtKuTmhdchNt6H9AUGQJjN2PHEVQG8LXvcZLrMNPrLPagD",
  "key23": "312q6mc7DehFDHad6YRHskPW4GzWcyx2HmZkfmeaCjUSaiJM2RVTtCRmagNwDEDj1n5ohXSqa8FJ4PxiAh2fBn14",
  "key24": "2N1nLfMdpdEDAcU4EnmjXSvDiHQhCxWJYVQnXopKjZHCgkeDbZFyoWi9azi4S3G2j7ihJUzQE2gToUrYyjieg1ub",
  "key25": "4V6kCtsNDYJWYMXjwPGtUWxB3SBDXJyjTqN6gjH3hTv1aYXPbdjHDvWubr4HUf6KiojTHuMuY6VVrp7MzariaHUK",
  "key26": "5KEqz1wmAR6ykvqtLXxjQAHQE28pvzgWD3hd8pKqViDexpGNRp97Y8rTA4xKqbuy8a77o2jhNKJYGhpVcpAtRhDV",
  "key27": "ThXRkJH3wpRop1XpX8r6yPbrRx94PQn4afirnqC1o7Kak6RfVJFGdbsR6FRrFAzTQPyx9jSWonXET7zhXNsQRg2",
  "key28": "3GzzkdGmEjaPC26UrY8Dd2GQxoNPX2zhPdwvsc2dWEFCbTcBanv8EvSu33EZgmS7i5M5NuRCrkaa94ATYqTd4bNj",
  "key29": "3ms54osJRT55iQ9ywBM6m1t8PrdhQh7RQovnNMgyv7HYRrVi5apDZba38EYneFwgESCS1Vh48Fb2v8YxDnXgJpvA",
  "key30": "4Jn8naunrzHAYrwFaDXBdRq7e4saW8G95WRhdnN8m1KDtwY8wHTsmVaVEYwGphN4ULEtcpy9kv2mn3oF4jh5id2v",
  "key31": "4N2SVWviAg2y1BDtVoQUSGVfGbTigKn1y6DNizUefsJVafbyZ7Acd9yFkzgVgH2Z1ENekKkViC5C8LiAgoaJAGfM",
  "key32": "Afud6p8VaQf5grPMWd3ATWWttEKD65aeerKLxT5fiwwXkx9CH4P1MVkuc3Q7EAP13hwnHnoEL2xa36Qt6dESDWQ"
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
