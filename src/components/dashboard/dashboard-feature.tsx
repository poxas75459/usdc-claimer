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
    "5xFS8UjUdGzAWeFxPiZkFF29iR4t6Ry5KTAUDQbnxV1z7LgYHWBqAJxAXrhYpfBSpB3KavaX6sRy2itPb1yUbhyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wgfRbFPp7zerzZtDPoqfgyXPsN2bLtdukYbdHRxNwA39w4XMGXHN2wHXXeYBiszeg1QMmiEYx9dvhXJsXSDu8U7",
  "key1": "3usnxTDRi6M6Fg3gAV5baFGhd3HhTYXU4FnMkskAxnh1W48MxeHQdSykU8TzfeMkh7CSH5jbmFew2cQQFeHZT3C3",
  "key2": "4ep2AGHEqsWEe8M3o2o8D4y7KuJiQdSG1NUwyh3pzAkL7b1EDsJqjuDoQ1EQzcqCHKeFY4ratt6hRKAQoYK3LVja",
  "key3": "2hXm2nAkxjk1P2vuDtq7gyskWjPFfhjfWTiWY9bdivuk9PbWmgC6Xu3dNSTzxkeXHADeaKTCwDmwLjfvGTKJjNn9",
  "key4": "3hLvgPrf93HzdWCDbo3H7uDHwPX2Pyj8RRZ943gadeD4HKvdYZiGNaFsK4G6LuCe1chS1Y4sgjMmYuGEdoNzd3A5",
  "key5": "2pHfcJ6dcUS8JTj43zTn6uaaL2vM8HCyc5Cjzw4LXD4bfspybRyxqq5iQuCQNF17QW3nrAmrqApmLsffKFaK7gd6",
  "key6": "3v1nJXpJbvoNVv2A3M17UzMMPmVdQEsBBksTieE7ZDmwb9gPEcK7X1DXfK8M9YmqY8FpzQHbdR2JxEsGMu9eXdKa",
  "key7": "2kvAVriKkWCxVWhtpK1APexrEfkhuULjmpmahfEL6dZBd4hcdgBbktSj8M24UriaZagCWgsSZf6ykeBqBGfxbWjz",
  "key8": "4MJZH3PkvRFAcj1npCPUNg7fAQWXqknhbPeZN8ejzEHWmuxVaUPn6AH4GXMAJLR9oicKMBfCcU3KP4CEiRqfREbU",
  "key9": "3YixVMjUyPZabCn3eh972JUJp5upG4fn1TvsHbuGF3jC1j1B8o87dszYUmqyadkiWtJ2PmF1uL2xnkfunB5asaa2",
  "key10": "PP6g7uXzjwSoWfkhFiVttgNUam5syAN2bPqF92MNC3hrwvRSeNrvwSLeHCzTbhvXA2tS4qts2ZJosHZYpbNmcva",
  "key11": "oMRN4jeMZ2Y7RdwnzeJtKh7DowZwAyJ9ohKHZkNk5yDhMQHJPFuiKSYq2L4AXvNrsNNeGQnuQQeE1D8ULDTMHym",
  "key12": "sL4CCh23uehjm4D7QzXCjJb6d4gktX3p6KpLdvMXLifyrnTP9HYAvc4AdWgE1qr1w7znfJocQkBbHWswjHyygBB",
  "key13": "43aguHiGS99hLww9uy4RDK4fCMtXh4eEczvyuh56LCxKCCjStZ78BCKBaxs4Bz1vG2ECoNqpWzJX5KGaV7SnN9x1",
  "key14": "5MBJFoL1ag5p1qxosumntxDTa2VgPT3xQk8H2cPGiFMXCdqA5enH9amwuDM86TzCYJ1Auxd4gWLBCDWJyKstyatP",
  "key15": "3SvqevZALH84oEFxgSzt2aJ2CBGVp37BEKb41741fBWyC3te7YffdrBSpXNhbdtfXKRjxagwhH3opSALVtWgLSm3",
  "key16": "4ftPcHJcRm5HqPmxnwthiPy8yEwaC7AaSFg3tXTb16oi1vCm21gXB9GKx1mrkb4P189NVwszGD2QvfUGuBvEEZuw",
  "key17": "4MsgtHmpW9Z2CPJuk2gxP7ocbHLhqLi8j6LCwvbZWibwRj4cwe726rM3C5MprHwe9vhZqNqUAzPKfbvgoVPdY6ZU",
  "key18": "3asfPsqe2dvSs7uexejXfZWWgxoKNGWshAbK4juyNTEaAzQ19e4VqUjXAfxNxG6QkJ7D7HbskrovPYyzqLmgtVeR",
  "key19": "42kKGRg8atVqjyTnved39eGNBj2i9mugK15LVj34fb5EY3zfQT9V9kRWASgT7Y7FLjWGKjFYzwvLWuQaa52B1MVi",
  "key20": "4J3ioD43jix1CKwWMtM7q3zx9pdtzEQgzuDT6vqpBMxbt2u9Wz9cPygz9HNLKXiAZC7oDrnYAsBeT8Hio22G5GqC",
  "key21": "3itCVvDDXsMSevGUjvDopqyFYJrnhJbFDfSTWjvdmBSAXNH1rxDZnwo7gcw5S5fkjFRhoQxKP8UB42ojsbTLxtpe",
  "key22": "5fQpeDAZVVjcJua5iv4ibvjHEDGr8TJmaDbdyqHRA8P8h77wCYmkmAPQ7XCdHD3TWcXt365D42mXxN6Y8d5ydjts",
  "key23": "2NMMrHifsRKsiLVPKzNug7VRvUTtu9sopRUheEB6woPUEEbhV3y5cdiuFJ6PNUJKu282pc6JRjB3xbP1xFmYN75s",
  "key24": "5dwxXupYnFcmHsUQBA5eh4biebGNgAf5YJcFXgWV2KqqgmmzwWJGTUiz7VcM38WG2yjJg6pGYEYX6f9YoW2JXeA",
  "key25": "5kSrRDGnhHpgKfT35ADgyt7vgfSTwMKA8yRZccPcdRMKbVGrzABHtZhtMhj7M5EEBL7AjSLuyNwxwf8KXwpxFUsS",
  "key26": "5iPTWSDpidV6gDwb1CJQqStMdPd8TEXfdzbDZ2Tchb9S5Y6XD9npgxRvk6DCM6YYxk8AqUPi3cbSrybZ6qjq72KL",
  "key27": "4FQQ6MJ3FYcwHuQdXXdWzfuuaU2xH53WTKHDU7PRymf746FPLR8nAv4xTvWQQnajEF6grMpTrkbChmMMjNtsjW3m",
  "key28": "57qYYpMhUy9duKPQHnYJfQaBpTmskDuJF4SJgB6qaj17MaS5DdQWJK2R2NAYJNy4KjRZhXq9TLqJiuNmi1VazL1j",
  "key29": "2CuAGrFDKFBzt5PAkxJVEbFavvr3x7NSkET1MTx6JuJ3H9q5LyDKQQSezsyyrLCYxJxEbjqt2utER1euNMpUaEyT",
  "key30": "2YCTghLCJQwFnaEm9sRKZA6JYvZNQJK2F2FZtWxBdDNYZMHv3passz3y8gVjRC5eUSv7R3BsBj1cvCSv2XktjGKF"
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
