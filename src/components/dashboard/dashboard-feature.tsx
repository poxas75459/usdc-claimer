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
    "2ctEdsVsHPgcsYmYQKNNSJJqDZHgvK6a4JYS7gdjXVXZen9iXosf8aZYaFGGTSSkpsi52TtXEU9b9w5VaaacRLMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KsLJDaVSNnZywimD8o8FEnBrtr1D839JzXUeUyphkRLz3L7cicDYnzoTB4eCtGDyJfr91n4Ef9sTcX8ckuNCZdp",
  "key1": "5vSJ8hsUKpgYk2JQW8MhJNjKb9WTHamySw8zk1JPppDk5SK1QxnfPEb5yFjPqmv8HXRuDRc5cWKubXp6859FNNzg",
  "key2": "3hbFnCfMXs3U7Z3La2sWqJ9Wc1S5V3S28bTV5TzZj63eTcDcJPfrWWnAmbxkkxLqKBAdFcLKnQRzjKDapBqRsdeu",
  "key3": "3X7fHghGwYjZrwLtuXgaETYZFTPrJBBUM3oTQvEMKz9CSyZMmqx6NwFPqHVeLCFehhBGY38osf5csVgJuBXZRVot",
  "key4": "3Xn4gArQSobxQE1yvkSQqhbrWtzf9Jdc4WPc3KC8i2EvDUdBN18E1azwJmhUCxRfRATE5vsotrvuyz1s9syhZ9qb",
  "key5": "4KEZiuSrAbTjtbPvHBu2pRFQUyjnqj5HFmdTKbURBBv49TPWD5Vfd9AkccRsadZtdhhjfmRC4JgDtxvpKAvhbu3P",
  "key6": "35yekJf1gBaSJGFCEHG7VvpzPS1NZ5WR7UFnzVc3twCjYYZQtCwjZCszizNJ4AQk2PK2yEx48dX2LCELqbvkw9Dy",
  "key7": "65dC6Mk27P9JQ5CFdYCbStiokU3NWGvQL5fssrPRpTrjsWnfPupA9i2aiawrDQQyp9uswKSrjDHHxv5AGvtLgWMr",
  "key8": "4tLDGv1obqjumEVnW5PXyEN4qrHCfKSfS4rTWumybPsKpcSuTiVFG5kj7uoHGMEHnoKPP5hWzMAZEimB6cXcmoTt",
  "key9": "379qzEQTeiFmUsQSBFB3GjPScZfjSxLRftjnyPJVXDMT9nyqwuGE2u1e9TxuRLzjZErTz6S4zyYmeLinbbC8zhtc",
  "key10": "rZXzReeDqTQtEG6DYRhRvJskrdHzh7ioqjbDw4uKpi51fC8ehhshW9i2AFNpSQsp7JQqvUDmrGYzpBiRA83zB7x",
  "key11": "4VdQmnVNp41MNchxy1reHLxHdfDLyMJuk1EdbTPmoe4VSKUzQLBRpRf1MvkK7zE876vNxpQ51r6JWe2B4WZtezfJ",
  "key12": "3X2V8YniPbYr6LaChBiaQQbPhiTa6QeoogJ3gFfY1Ns758293HKTfejfr6JDBiyubrPpuhBktxc9a5K4EFKYrYrY",
  "key13": "3niPHWPN2UKT5qcg8WJTKZATWHaYqSkqWoqkkzKfkTtx9YYAxJKS67yPEYxcWaXtBZztbhFWjwQHnRhteTfx7BNH",
  "key14": "5J4GZEgvQkfGxoHeFqW7twYsEVu5bTQg923MRxEswYMQEef12yBbPDCe8yBYe6M5fTquTJmkeGGsFa6EU6S6BFs9",
  "key15": "2PkVLDcpvWkXVpAGu6uHbYbXpTic2UDKJvHuNfCmx6pQVYAAUompjhvgP6ZkrTLit8BfTGUQPDGk6tz82jmjwrGe",
  "key16": "3x82VjPWHmZiaJDQcJhMfu8vNxDqXGyjRvTvH8QZs3P2CKWdoBqej62Z2Tgn4Lj7bKBCuaCAHsYLCQ5dibij8fNZ",
  "key17": "tVZ7E9vD1HkbQU6fufS9XQJHijkenjy36HR8678eaDH3f2oZdr4AW3S4PzLk3mLgRSjHYCY4pfTZFZvisRgfKwB",
  "key18": "4zJNA6FJ2rwpVqwcdDfSzvKyXMw7dHWnnedTnxavJkUWL9Hgd4sM18b18TJkxd3ktU65ono4k4GoV22v8PqD5K3P",
  "key19": "3aSxY55R859pN1gCHL6zAL8tjqeVwgFSnyxrQZSTUNs4iTsGHAc1ovEbdXNLGsw2rU8sEazVB2PgBGZSpdhyDozh",
  "key20": "WcmTtsp1iLHG8GnmjjQcdX6cZPGeZhqg9WZk1LTovR2Kj9htpABLA8ZFwzPGK7Ci7QL36ttZDDAHsLCJg2NXEAT",
  "key21": "4Bp6Cvf58EMrQRhm5WHVmY7UKKJdj2LDG3fdUeEfdEFd3ErTRuqkzf8a13Ujy7ckJRT9rbmeXNkdsxBYtM9KpECa",
  "key22": "4Q8nZjJPkc3S6uYK4LPbrYEsqqoyKJmkbp7baReY35Bdwv4g9Tp9XsV1iXKBr87JzPWfyGVDjEfmNyXPQ5hZGHqH",
  "key23": "FphccjuxM6FBKWCwpmGb2dWrbfsC7QcvFmnPKZR5zxVA8kaiq8rrHoqcUt4FniscdPmb6UEAXNZG1617TbFvCpz",
  "key24": "2MgB3dXs1tZ8v1hg9ipcq7j276zB9LPqf2a87jyqZGkgKpJiye52jpt6MTLnCRQWSTaW8j5gAp3LDPn5DZD5RENw"
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
