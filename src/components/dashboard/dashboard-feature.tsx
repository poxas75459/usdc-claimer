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
    "59GbmyaioWCrBb3LQ4vmpiPo8J1tZFC1BMjub93pvNWPoXjexMbt6hWRWFQKBdAzCvtwds9APocrm7qozyuy9MZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jzkApvvEWKcrfMf8wYtLfqN5SPHSoyLingVqHQtrPTH2g4nEN7yKJ3F3SJHp4kRtDAy4qFCEB7Vm5N2f7xK6J7v",
  "key1": "5sTVCHz3proSBaNJWXYTLXZPEZYMdNPT6GhYBLtPUE54QieCgSEmikVdKDZ1qjE3XXeyypaZGFByRHSAGjcPhpP",
  "key2": "3HR2wNFDQKBYaaqP6JBkKu4AiM7BUxnxQJdUpMTNGFm5f1mFjYWZL69urS4u4dr1Q3C9s1rr8h3by6uxykgVPsCv",
  "key3": "2stJLH1hsTaUfGxZrRknEtNkxNDWXUH2A9cLiBpAyFioz9JYfhAC79zbLb5uLJpwP3uafupNEjTJdgq8X9tvYuVX",
  "key4": "ujQhMpvENyp9BrhCnuKcU83puTwfVJbkrZGS5FaiD8NwwRmTWRfReAmx71Sku6CnNuR6xXWsghDNf7vrWSCznZu",
  "key5": "31i4Kunq72bCTSKrNoE1StEpGRBez2DHp3krkK6D6aqGbxJokkL6k9nt9Kfg2tFR6y6hbo83ceQwsCQmVqDpLf3a",
  "key6": "5mTh39n7zAmHxmSM1cZDxe4HkNVv1goExzLxxP1fF3Uv3eszww3qTm4ZuBRgpy5XNFsJEZJB3Y1ffEpPXGBxckiZ",
  "key7": "4LbAv5vi2h8QrrRFSPRGvKAC46qzmiwvhv5T78SwD8REw4Liec3pQ3eJFFHfV146b4fJstaPCtVyDbgctVXcvsUz",
  "key8": "3pRoR7LTtWhYT7SLnNCYi6QEeZX2nJWPWpUV7cGAb7BWo76GGmgLmqbfR6LYe13mEufDpnVQPTWPCSBzEZ1qAVKV",
  "key9": "2onFN9Qj6i7qer7rTU3UcdGftVREzWtkZTvrVCXciMTPap3oVeKyH9diXcovpZ9jH8sUD9eaLHxRMb25eSnuaKCg",
  "key10": "24PLLBCpBW1PdVYwRfPKsAWifmB1PzgxLNnkVjQwe8vjnFRuy64g9fM79PguNnxkDAtUn31XzAUiKhBa64ZSWi7n",
  "key11": "5pJvfpCvfFcV583SoTCeGJY2gTyQSxaLEWFucYg2f11vdwXvvEEkgNy1eWBnaXT7jAXxtKwaE2YtV2x83FdM8Nj4",
  "key12": "2XfzzeXze3jiA5CXPi68XZahBiUmk2N9emWCvsK2ayuaMDFJw4rWBDoqQhmCWUUzjRRds8SU8X3yLpBEYRrVefZ6",
  "key13": "4J9FyeUS49titN1bahQVdJnifvpKY2M1p3CjJjoH2N51je1oetr6JrW7JKASNUWk94etfirwmzvLBw4788p9ntWu",
  "key14": "3oc2VFEyDJwRxB35UQJAyWcdaNRkevn31XB8wewTZNjKQZEjvTxswiTMNbE7XbnWUYGMcLtoPWASsGDmnVQdWEZD",
  "key15": "4dFt2rJv8J2Qtiyi6Uhti39EFWzdvexruM3PSJnxJjw3kZVpj3cL8xJqbgZPsZWzQnMZQJNVz77uWCTqtqidD9ye",
  "key16": "5xUDkeuDqvoASzu7Nmemw8sLGZaRgy4GYe5op6RW6CsTG4ZZw8doJ4kQmWDzFTRSp3bxrKbSsJUu3NKucEqArPym",
  "key17": "2hUjb3j2fH1TtVeZWWgrYoSuCnCWdxKzHscyMH3pHzWfAMLvS8C7EY93L3EPqzwbVDZU2jnVxHZNVW3oTMpTxjjy",
  "key18": "4g45KhJTnTampC8RvEoroXdq158vcUU3ZiyVmZhnGCwn34QBKHLHoLrL8UoX3qxn7p44nzZosYKfgQeCFetjwTjX",
  "key19": "5VENTsxN7y2tPFP8jQ5AVaFQ13L2rsY8CyX6Lai3ow1aEDRrwVKG2jFt4Gm9gajzd6rVaGSeV2HKUghWU4cKp2Le",
  "key20": "59Be4isK6zoHeh58e1PkemqgeoXpSfF1XkmBCHVCEDaNXWo9oAnBJLePJZehHxJ6o1AYSMWsqzmZSft8btfzAPVU",
  "key21": "4SaTPpb8XXLcbYufrBR7n3orEGjBUucQmGbzs3WkkHmaEBdcnc8ArPy2uMHzsJKeriCLLkKCC3FwaYijTUm158PL",
  "key22": "4Dgzstghs4DTvhDbAjgJ7bSmtws6EzjN3iMpzohNijuXwHBhy1LgKTwzDYRu7fHnTKuvpehaeDPHQdYe2csW3LVW",
  "key23": "7DeyKQ6rvrWfP3V9gveYLJps379TRLjodYy9sjt1LXvppAw29kNjVJtTPZKWUo3MUcAo51HiR1mygb5qeZsPKg1",
  "key24": "xFko3Mq69k43uDKtbGDRucAa7rRYJ7FmNpYvMj74o2VU2WYtecNBMFHRcdzz8bsMraLhyuvFmW33VBeunP5VFup"
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
