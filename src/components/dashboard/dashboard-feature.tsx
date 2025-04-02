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
    "4UgNDj7ce8HgJeSUnQLysUm2bH7tkJt2TKLzf1xiPhg7RRaXLYKM3b4KZ4yMGRVub68udqNGNhEdskqG4LKmzWQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5noF4FDYQdRy5Au1E45ZdeA548pgTMt8mzwzs61d8UqYL4PeBEj6DitYXd77mq8Bqid4pRCRKsNnow973TMLVuKV",
  "key1": "53pE1PTe1rRzL3p835oXp5XscFoJfHKTNYBJpLV25wUWE871PuSHkxpNLisqTivk5bQXYyUzgYuwoieh3vr8wVxc",
  "key2": "3859pKuo73HutuBhHPNLHr1nBjyYBeTsRh591u88DP8AknrQtGsBKPdCvbhDWH74kYWmTdDfFfCSVcBNT8imUqBa",
  "key3": "5wNjwsQ8UHgCC6FVvEjxnJDJuUW31cjKLjCXq4Q5vKPdBPjSjqqChmhppuQQxYz3UAZqASkBjyi4HF6mBSYTTqCV",
  "key4": "2CJ1Bn1PX3HjwfSu6K7RuGUxH3ttveyRDKSwXViGVyDPzeqm9UjUVrEAfuVuBkDfT86RDcUSmKNo44JCAb1KyYKD",
  "key5": "3adbLGsdviiYAahQcERXTPP5wMsgxirKVNywJGsX2WH5Yjovwiwqg5HTaVD9rM6QX8FPi4dMerNXAZC1bkmryNMP",
  "key6": "5pKhPUvNJmh7Y2DYFZHFDcQ2yeUX5axHqQEjCFVUnSWunGeQr6QSK6669d1DURy63iGRqgS4GWHMgVme3A4nG326",
  "key7": "2qFoQVdLcetyvRU7R4DbA9TkMJciMRSHvu2Cib56pzt2TpP57bRbmsUAtpngLQGEgHL1w4p6GdcGAkqqhKzEoPS8",
  "key8": "2YiVqescqbffQ4AXbx6Qgm8jX4fNhdTTd5U2JsnMeoBWEJ6LbByogCqCd2sDsYxMx1HSbC4YbBmGofhwhaSrUvZE",
  "key9": "4UrydPue5P6mxX3uXsK1FUT74KuTfmrWnZe4QfZwf4UbzeXQVPWVmBheMhPHqnziaGZo16QZdmkPtrLicxfn5hb4",
  "key10": "3pcHvA8Sby7f3NmhZFmRRUCExF4wvp3ScEwKCaMLMXvQ2RjTPPUqMoS31CXPBdiHBUuVrEy6iu6FrQcDiKch1p7x",
  "key11": "zBmC1H3GMHivxuf98ygpggB8DRRjWJNf3Xm9BWWn5isVK1qMcv2MQLyKp4sF37Cku18RVKdn1ShLsBDFCT8ixs7",
  "key12": "39EcxvLTKpGNKTsLEhH8SnQSkTJp1i69amdgZ9iRCFRxsqJuw4sGKK3ErNcgRT3X7U3Yi3EmAiXzVHKPxJ48wr52",
  "key13": "5Lu2JNdZakauCSzkkbvqp6k6yNAVwAhrczdt5VrxXYjDkzmwL3wZz5bb6sxhWdnxNzFWYBguGdLAywX6uib6mp3i",
  "key14": "4hG11e9jFnaZG9VHszr3WwPp74GQ2J9tjQgqYJA3D54MMsnpeat5sF2RZAzMJbrcbNGCcbkSvu7Kkar1Wwfhfjba",
  "key15": "3hA4KijG4syqfhF7JKV22UKyHDShdVMoxnHWrXBYmiiTU3UoExEpzcFkfM2LFyB9piNzJPMTnYtgDhEP3gq52GAR",
  "key16": "3H5u28XggKwzQgigq24P5Ub3By2BrhbmzgZNMcwq2njSeY7zwjp6sXnDDtmGwFnF2fhgXQkUF3zCmRyXaEGF1h1x",
  "key17": "4t2G5Lpi1WbzqZHE16YyNfikqc7HxBccVFJUupHruMREoTacv9ub4wVZbJXF9vxCXPzV63tUJ9pUQzNw8zz8SFjh",
  "key18": "4oT7bcoq5LkQEWzXWnSHDoEkjaSZmMdF6W8TczSQ2oXGTbPQBgkrsy9x2tNVCPpdg8idkVtY6F3n7SkrKEGNeb3s",
  "key19": "PqTPAovHG6fw3S5CPYXQJQyKxKHLCgEAELZhQE1KmRQ8LTSwoia98eBfczmiuKH9qF9tbc2jxgBnrEYatwFzDmz",
  "key20": "3Utttop5Usgc74cv8AMeLcrsNMNtQ3eWYaxjzTPhh9JGaNMHidY42vw2nTLagxHbgTDG8J2KyWyGff2wnB1r8KaC",
  "key21": "2bVMrSvrPytZAW1P96CgtD6fxq1Lvobobb2QjLErsHiDoBFmELtrck7nK64FYBvuT6sG6XZryJFccx8bQEWzkbJQ",
  "key22": "2o56SB6eahgV6s5a8mDk2imwNwnWD5P8SvKctLPkf8Eoatbq16tias3RgvBx9Y5rUeeiWPL4SwVHdQFmtfCoXbv8",
  "key23": "YDruWkjLLVceah5Au6dn5VXhQT7dKmKTwiUomSWsJYKgmGDTY2C9aAWgNQb7xWY6EGeeuuH3YA1WyCN9aGj1P6Z",
  "key24": "2FiGGc6R6h5oxCZGewA3wFSJq7Fsw7fJ2Wz1HssXuJBSeFsLVh4WPFDUAMA2jmuimm8TzfQoqkVLh99gUDJQNxNq",
  "key25": "2qdUbV5Hj4BQKutoVLkHRhcBa1p6MLFWAUyKvwWMN98UGXrtfZdcMJ7PACcJHu6UTFVUBi1XKV6FkqqEYhmzgsLo",
  "key26": "2CHnkkHowrg8oG2dAdN7gdyLfVufqhkxK5M5TZxe8bZy9ZvnKtZCrigoZvtfntJNP1NFvfgbQtdJByFhabw4LtZD"
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
