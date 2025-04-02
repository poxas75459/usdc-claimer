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
    "47hZHQYgRhcjifpj6RaLA5MmiEefjaRCAUBu514aqVHUKe7bhYt4netiCCuxiy2UffApVrNR5kT5qEhJAmtrgtXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JhqVoujhHUQAyZxD9SwyGdXyfMuZMnS5e75m6DqbJVLFmYNzeYmDWmanvskN2pBnd6WuM3RorYhDFMidL7f3wzg",
  "key1": "5cvPr593DEtstzJR95nUh3f41kCFyUN9kgPD5aUbQHZoQauQXBM1DKLQY6LmAa4mepmbsieo3YjKz5xMsEQWMBWP",
  "key2": "3vKemt8NSMqSjvX6cZxZfXBkuWUmpTBHG6hEaZohtXYjayfk1VJmZqHo15grzsopbsahPthNkgsZMWbXkiLr5JvR",
  "key3": "4VhJ1hAZCQMgZC3Q6sqjM4bGYxyzQ7X6g689wtsjRD829zVHo2P9UG77x1nGubpofJRAEfnGUafHkk93JUjByBV6",
  "key4": "3Fx3jLrvau3yMjD8FGuBAgzEnPyuF3XDkByFovNQVzcwV386TC6TVKkzuYBQ386n9cXQJBXD5ChStu3m9sdMtYRj",
  "key5": "5UwTEtXqF8fHGeDJjQVfMEvQM1B395j3dSqTwkqyHjhpMj2JitLVgqdMCA2gtppWsYNuZGRNXodCtZRvfNpruHkp",
  "key6": "2RXDYJgtU7Hd8qghHFSxA9BsHYmUYnxpwXcrvvHKXwXMiB1Lfejp9f1Cax63ocim7oG2BSVeNwRvYZgq3GTXgyMA",
  "key7": "2W6qLoLgGCgt7eqkxbAi6p1MT6bde7KFrUocesg9qwAbxLuyymPHq5XxWPhmPKP5NHU6G8R8oDjjfg82Z9mgdBiC",
  "key8": "5xWLjRvJqsGz9gTCSzZGiNkZv2MmsERVD4GwX1Lwbp3dd2fk8PvkmAkPPY8GaHUjDQBLwAmAosoBNRaz9ws6zWwQ",
  "key9": "3f4weKc5rbPEqYPZy53V17zZxGJhAhAtaBHFm3E2CxYhQL2WT4oomP2iGGBSaC8qNFJREy9X4bDcDcnk8J87YYuQ",
  "key10": "4opAgU8EhjQBGJQrz7CXjK3Zmjn1n7PFJKzBkW7HjGrvVDn2KuSzodUT1JLtZwd5DUHDucVrdH8qAcLWi7byTKKg",
  "key11": "yQA4FkcHwMsSWcvQEXkaEN3wzb4hRCvDED43fX3yhvLEz46yko47Pnj9Fykd5mQLb4QpfoEFgbCeNETL4CmdoQW",
  "key12": "2FYty5ACt1fEzTcoskiftkAvmuTTLyV51nwXPYLYQLoZcAevP4fWR7EQdUt6MXfaHp23bDNFeyZVJ6xSSbawRSQ7",
  "key13": "ys4A4vNw55ZZnfBvZor7D7KWvLTTB157z4pcPKXuGDsXudSSY7cL4ZDAv1AuyTn7ciAUzc1A2Wbujk5F3vxybuv",
  "key14": "3LYJb69iy4cEdUemDv24Ae9bD9e4WgFztvGs7kTyCmnVCDVSVg6n8ALRYAqEdTkJ9b9FYEcqDY1ZZbq47oJ4oFtw",
  "key15": "5466oK7pjX2rymhzzbWSzVYFCvexq9GAX2L4P7o1EZnt6N2x5m55gc9K15Da9PC6LEF1GWKD8tANt3XXg2htXRL3",
  "key16": "2Zc2h4nEbysidxvHf5k7N1cS4zhye5CK8ACZHxvpP7Z2K9BRV8fJZdjvZGPC8FKRFmbBPS1sR6Y3xBEqmP2r5dvU",
  "key17": "gmLLGUPCycNDWbko4Gw1hmYMiBcSKMEe1E4C7iQkzsz2GQQA35FxQKKuVYWGZT2cFk3prLEy6TQq8cmQ5Ep26cz",
  "key18": "2v5EBJSi58ryayTmKb8D9z6E2dWaVn4mB3TEv9oWidem2ARo76PcCuQw3cZvD73BBh3dbKMEsjn7t8iY613WPjCb",
  "key19": "3taUuTSEMWLoVPpN3pHyqrycJkosvgQbr6F1ygfYeghH1kguCukNimN8SPmiaQFNyeNk6oBap1rQuhKr7CqQgSfP",
  "key20": "4d2KLLdCTndkU4Mtp8FP7S8WSfWs2v9RNCFKSQjzPmdXgfojthdqvRqNRCcDkS4Nj21ynkLohBpdQ2TLkyEQzcDL",
  "key21": "zeiZavRxtYZ9CSDZ6Nx7SgHFq5idHgAD4LtHRWgAvHqazDMpKx1Ti1cNaV1FZPodaYMmWvAAZHvc9PWHU2237YV",
  "key22": "4yRxQX8ADYQRxpedyzWfipd9gZrjbiERFU9gdCzfTvXj1Brss1CuWdRsRjwS3A1XEUU2VyUMNAZR7EXR6T7MA4ds",
  "key23": "2p7QwLXvwocPBbwZ8uAs4MnymQbTkiDxtNhpmayJGwo5mksURThvqko1AtadBZfXs9beZv2W2bCEDiUe9593U6K9",
  "key24": "ktu335LD5g1gFCuXrz9bBnYGHFvnn6qtqq6UbcGR5SH8GRJErvqPwAXQXQfxuBUryydj9HZsBJdXHBbgnQ4sJmd",
  "key25": "4h9pTNs6xt2tyqhMdTUMgJFUJTJke7DDRjaebzMzT61gYMYpdxVxReu4G6aw7pkjZgUNKRapxjC9cQBNkzjWeDyJ",
  "key26": "3b3XEahiaTMQzQHCptXYpBcNXJZqQJmFJJdtRNonBwTyEDQnbdXr1Esn9giNMUtwcZDqoFiH2k7m4AYcbKiAFywJ",
  "key27": "L2TqVmLMZ1FmWPyBxUGmn8wcn41XrUNuR8YrFMspActaemJRimNosD1oJgRZ5qcvw2H3VLjkiWgf32yxk5dXQYk",
  "key28": "4wWAPdW8g9RxaZAacwXMymm1GuTTo3VvTmKQLDC3aYDxxV9FxyTZiiyEjjBEZ7vnEwFKFvE7BUtkjDVgEtdcquNu",
  "key29": "3rwnEtPfYobXP4KMBua3V8aLU1GM7Aykw2AghVhsy1KpKPdWHvfrMV3VreZAMTrCzpq9kkccZKcRHFtkfsMafsM1"
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
