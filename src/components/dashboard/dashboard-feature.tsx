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
    "2CJMXtYVJQ9KMR3Z4N2ZGEKfwyhBk3tHyfPwPU3uks5JvGgsHMpCRfnJQpatUEp6YbbMdmJdm6F6jqviRyXHeNyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jn2wGekKpoT2ZD7WEnYgvfAmXxQQcXhtFN9rRpCAe9MS491Me2Y5Dc7VY4mzsaRH47ZugiLyjX1DRWTvHvMpt7b",
  "key1": "5WL4aBFn68u3S5PnuTvz3hnKPqfEaV22a2reoczoPvxC6iuUdc6ro4W4yrEFJhir4GTa7aKhXMBeos6Wr5gMenX9",
  "key2": "4NnQNY9GM88zaD3A9PuugAmUxFE7x11DwMDx3whyS3uMdRN5DyqwCw93sNBmLGgQRkm4mTwSx3bnLu6Tig2t1PJ9",
  "key3": "54EkuwJ53iQy6XcjqgJYbMnLAB7iKw9Q1hP9ZvA7fpz64WD6WgD589xvJAsp8y3pdB3fyo3Cm4Q3vuYxoRaqqs8S",
  "key4": "3tRM9EHadwHeK97zQqw65ywZpirnXF58UbsquSU4tXXynviemoU6LAK2pq5ceUfAM8MRRYGD4kFeRMEzFaoHn2Cd",
  "key5": "5BUAhceEbCw75Q41RBXXy1D28su6NgAZFUntcrVF81L69673Ak4keNMFaYzB9rc6wpHQEzhb8xVQtSxmMAni5U6o",
  "key6": "3eM5NYRh7FFKF3GcJHJeUsovxown9hbZqhnEh1naWa2xdYNq3oFfmmzXxbXbrfNqsUyHjuAVd7JSASJzGHJYzCiC",
  "key7": "5bLRpFXP4x4cVtZHFaHKbQiVKhBv1R5Jjb7fvSEVjK8f6yCLpaBRy25SJoRDDStGSb1m3eZGEtPMvswWM7Yib1RJ",
  "key8": "4pwZZTiH6J5iGY3f1sygkHJCYXBpJQ1sT2UT4n2MLJ2w7g5LRFrEm9SF2qRkmpcgKKePwx17H4v1Ur6GKVHHArP5",
  "key9": "4uaKgkEZR4gXm6e4y2nLMxTeaenyRXAatD4XCSas1tWnjf2NoBaZTDXt8ERMWzY9MPSFz43wk32nzDEKcyLuR35r",
  "key10": "3PhsQ9MMNNRkU3UfGwZUzHRVGqxxsekTLUuYZo2z7Eurc8aeJ38ZSZvbcj4ogBXpzohqwDBQvTPGjeddZ4VmFjfg",
  "key11": "2DL1CHFETnJygiXQVcgh4FmgRPX3Y57BnS1xyscief435CDFvo38h5tMkEj2p2V3FbBnRa9TwKye1kphXJWqUqy1",
  "key12": "5DXEkNC2FxnZNn1JLgPwcQCji4AnLPTuDc1onWNTNYGaaBqxEiuMP6DVBZew5SZTyLLD1K58ojP9QDmHWUN1zXAt",
  "key13": "3du52iNFsPkW91FGWa4U1kAQKtrLXv6EmZAKaMVLqy6sAxHDNXPahjdRs4SuhY6SBzcufbydf6V73ocVPPiF2vna",
  "key14": "56Sxbbuawbh6DMu87wxeNRH4koW7FNeZFGAPPTB6MHaaRPAynVLLxQzGCkURjL8btNWXZCLEbnxC54iZNyprXUU5",
  "key15": "39J61V33jJqFNc2h7s5TUMGhsv5yV6R82MTEj9xgbRTHdBqwEpPrxqL2G6LbtxCqZ4AWUncB7SvDy4cjkatc7bC7",
  "key16": "5Pp6ujNMgqETAVhgLU6PkSW9C8Byz3SL6zDoo5icHyYtW5sE195hvh9d53HM4Ut4hW7tY9dGFw9jp9qYXQRDpZye",
  "key17": "3FhGmjPaEbdzHnfJPFcEFdTHMy3678rEDuh4nGGiLcuifKJmSgzcg3Qr2R59XWWtWgiHrNG1GxWJBsbZTqHuWKbA",
  "key18": "2gPxHLKxNByX9AD5BZ1RvZC19oucmp7BirSJdVdVobu274XrGnVvCvadWgj81faTpEy6NYFhRuhbBaG6fgkdb3ZN",
  "key19": "3Xr75aGBweeDEu9hSVaMt7UsNkYvg3ASXS8SX4TPbWDG5b6uw123cVA9q2LbvoTCoA5UJ6Nxmqtd6zA3Ro3gwNeX",
  "key20": "5tgRexBoUn4DtiGmZet7fWnwcy1YM12SBKK4uFEeYPA1nhksAP6Lk4eBMn6wgDcvFZbnJKvEtLG2Fznp3qmSfi43",
  "key21": "4bAUWgVHE4MFfW2CeerRwTNXHGVUm9jnLdHqekBYAnwbtv2jiZ2aKrokaceyFct9MTtxpWDF6kMrN19Zp5uZiZPY",
  "key22": "yL8NzTcktgLzwuX3C1nvcxZQAMXEeT1fZiJXVRDauf1T8fY2sCSj67oH2fKSh759BuRkmNq5mrGsxHkbBUkvbPU",
  "key23": "4z7pXD2x79Cdbgb6d4yisoA3beKJWc13iNt8XzvGwxrq1C38x1x3i5B1vpowvkqKNa2jnhXYtxTgR7G8LmdY2opr",
  "key24": "2V6NukbjFofQJYB6EMUoVFd7xVLX9ketry4DK8X2GGjXxx1FZ12ivNLbSMBUV2b4zWa2QUn5v2uKVAcYmHLeHeA2",
  "key25": "35pAmPzs3AYpRp9fruditTLj97qr6YxxNzZDT5hPqfZ33HpqU4Vyqo8q7F7ybGtxvfi6NufAx2GoFp7zuobCTv49",
  "key26": "3cNXhXCmvBPsUxc3kKBLyRfXz77kcUQ7JAvUUThmvM6fXm7Y78nH7GiRpnwpegYcyjYLrQYD12PDx3VvDwY6yaU8",
  "key27": "38S71LCAnTHHpWjzskuSgZa4kGKJzfF7dYxyeZTvNsbo7yBnpu8BDCniabtL5a2CkX8Rcw83hmCHBNWeB1PxZsuW"
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
