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
    "5TP27DwR2fZgj5CFBDegoMJmaMnYMF8RuvNigPWfR7JxN92gshgdMjhVnKkMaPKVe3X6uJehpfJLXfxd3pAkruZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E4RuGQsC9B8wNn9UeQeHow7kDqdu8Kq5UyqHh5bRmE3Hh23e3PFegKSDMJ2Nfk5UbbmwGGgexqKE8QTsf6Fufre",
  "key1": "uTBXXiBYS1LRpA1mnwhHZwHyCj8MYnMaB1t3Ph3xGcBP6Pkrf4p2NQM6psFKvmckwUtyABGBiUkR1eG77UmznxK",
  "key2": "3yot83WWaTBYd2sf1ehjcGE6DcFyFy8kGbjdfo7rGDKJ1xUqw4bN9656QUn1SNTsqnYQ3S7qGhd7tXb19Txovks7",
  "key3": "9WrH66s7MY5EMBTK6xSsdFUeTTZY4FBUyMLM2iYdx6aBhUm19KHQrPR5qbJKooLCDAa2j9umoZngSuy5wtrYYMz",
  "key4": "ESF3tngxArSohHSQnsRiCytfDWnA6jQ9BMYnpZQFTXsq6fuEWgTNaJ2AErYpLZPKiafM6cMcATGTMDUeGQN8d9J",
  "key5": "2Qrb5BeXr3Rs5zih578jPSrUfM2gMDUFcLde3zATWvhn2rA6a3Yzec4YPWJRoPtDQCXxNMWGjKUL3JXWsiZeAss2",
  "key6": "2BKR253h4P6kMnmRszqDAwDrxW5WCP8CN5Yo2VRSyXXpb9sErz6Ks7BJgXQYqxbiMR18iN4wbojZU4EwMhSjRQz3",
  "key7": "HsFrGREDkBUcgQZYk758FdPJdj8PDTYTngatb5J97wcdU1PFK7ixJR9oEa634r1wRi2Egq1hQTidgqwvz2uaB3J",
  "key8": "4HSHt1vpJGAFhW4NZNvQqmaJCPwiah82nWVcXkuFSzftvpRx1Z5M4VH4xU9vvBi7ggMhuenoSAEa9JUVw9q9V1gt",
  "key9": "3n5dwjaAMa9JyhNKWeeFLh3m5fYygGimeMjqqwGpeB19BrBuFVPJGU4MfagE1Kivnx6qtdi1PuivxSm8o8rKCCaz",
  "key10": "JXGJTYBZuWrZEY6oLXkDvaSsCrJVu1WPAYk9HcJjzfeqNzBvSiSDutvimAAC5fLEif339Yxjqt22tBk6GjxVhfw",
  "key11": "1W8fAN734hKcBownxkZ5msmttPF9cAkehuXqBqD1uizLn8Pci1bEtHy8xMZAFtNdf9HVav2EqiXxpzYr2MQvcPS",
  "key12": "VV3boQJATzuZdptava4LJMKGKwwobA6ggZ3UadXhypPfkiKXvM2EmrRaweuXPviFCeFVrSi2FB4piFMrxWnUakW",
  "key13": "3TLsgUDjoXC5FLpC14zYzKLdpJYMWoRfFBMCzhK4fJat2iyb69VcoG2kvoACivErSyro2Bnt4srzgX19ov1AUkQC",
  "key14": "2y37cDjbg8AukQG2yXVggpxyFMvUY9oF8sD83iRVurgYSFc7MMgs6ZkMV4iNksbQgSXP2ZjuwE64Nzm2xyDS3NFJ",
  "key15": "yhbZDTqAyzXZUYTkB8E8BRAwRC995BuMffEHKELyXD2Uyn8AD7r7NceqSCQwVkoVF56SrpCvZAm9T3KiVo9CebZ",
  "key16": "4YBX5o2K5LdXvoT4DpjGCn1T9SDbQWkLyv3B4N5LFSeAqbRzo9s5dWxNGaXnga1f67dtafDvPYfUjBj53kgALxnv",
  "key17": "48DM13XcXggoHw8sHhcpR3SxzHQiQ8uKBUskxXFEoDd7pWRaEN6mTenCb4NZqqF23yGZTxSnFstQpAvdSHAxvs1H",
  "key18": "3yrL8d1vQKSxq1Zw4rU846BpDktkxLk22qUWfEdRiCuKSM5RZMkmCeb4gtoYyMWhvzuzdkm64fc71DX5GQmtrV7Z",
  "key19": "2wYsn1v7tBzbdL2QEwgzVV485fDZvWcJiStf5LJJidrwfWGW6SyMzcMNyPZ1LJeU4TAxuHgRPsFT1Gdoh8sPgoyL",
  "key20": "3S3Y7cMGA51VmxEeiGVgGXCHMF63QhSHUQua3U3rGG1qQkH54rKAfKJRB4DnHx6s1MCMc7oUja2Vr8mxgzLiSrN1",
  "key21": "48UAbnG8z3jd4RyzQHhyTky5sC1pqyKJLcCiGdwNs7NLBRqVXK7jeuNPRof8KZTpNaMhvuTsB3MCp1qcrrHLzS1P",
  "key22": "3BZ1GudfhaucBen178nxKhA4o2D7MmgazBpvkRqfLicpe86nXfzTFuch7t9e6BG6o5ZDZX9EbtV6iAPaQ3ktKe1H",
  "key23": "5svZs5EU6YVZtk2R5Uvx6ffacWxymuCmvXU4pgsBSMrTtxjrCG467CMbsvT3CzxGEVd48haBbbHDxE8h5kzuGJo4",
  "key24": "4KRmeUWJx8HVZdg6uinP4Nx16Ku1mZt5uXZezxdQJZz2s1VN8btMwPHYfKo67EuKN2MBAwasASNFyx7PxtWxgU2o",
  "key25": "2Uqe5dukLzgStjJVofVfe6baCdphPeiEqN8nqm3Nu49YJKBtTXbiLKLvbt41riy5zuy7N7nFs7XvgL4LJ6G4GakE",
  "key26": "kQmgNgZvsESayFNncTikqmtzcGmgVUvC3WQY9UZAJyHbvWncoxqJ3JNMb1RnS43ZXYt1Myyxa1qqsufvAg17RuA",
  "key27": "5BihLCsps1DopXhjSVwToLtsxsNGnKESNZWK6UxQ2FWZNbwnL6dGWufJX2o6sFTAsMc19ps2uvUr1LwQvcZsXWX3",
  "key28": "4hYM4kVKmuDNPAfqDkqtfpVSKk1wP9wvkMoZqrNkqCWTwtNcyN2G6SuPJL1yuNynhQ7hiNefjBPgx4BBNDuvpxtb",
  "key29": "5xFsjXXzEoMavsTNNu7JgeVMeexrxmAoNPPve45txQr1VtSDPFCsTh6oiTTesXxUTM7tk6962PPXJbNA6jZwmjFT",
  "key30": "2PRYtRQhv2FFjeMeKgMYnPprqLiQzpu6UX6GGFNM6Be7Mo2EtsPqzQPtHeAMcxx7Nrbnq595VPZfsDSTvZjrrKjM",
  "key31": "3kEBhtSqB76N7doUStp4ZEAvVJSMx2UwhvT8U1un8JzTXQ8cHeRqeNGqckoU9cUTAzDYHHwbjsHfqULs8uh4BZTc",
  "key32": "3gGjwVix6o9mzG2oV1eP6chScu4z3XJkQt1odowfSQxN9sjx4tqG9x3ZeaY62CbwN3Hz9ZjrLdjH9ZM1oetWu1cR",
  "key33": "xJxp6sgRcZndeiGJ4t1UucMnSMMpzhwcctwDT9DtQvGWb39ic2RnCK5S2JcWgkLwhBjmYTdTnKiwBWiRZshxvTK"
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
