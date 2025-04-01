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
    "4q5PHLcwTwQh3kyJJrQU16K4SsJpezCdRnFDS3bruM21D99zNYsv2JXtkrRZTNKihmNdf11T9atQVKfmwqKuiqCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xjsCddVXqNt8MVNyrUkGwABh4gb4bdg1dLFyT3Pysyx5ZgMvoe2h7pZdN4mmUrLwCP6uipo8skpb9NbsAoVV4xp",
  "key1": "3fam63qfod47KunhjbdTTzGMUkdQe9ZSMEvfJUkJVHwtEAsVdX6bv7sTjfQPP1jUMoRb2JBLq85WLs76jvcPeGek",
  "key2": "3YbJi1M1E3GHfR2EGB86RJdELnhq59Phpw5kodCQMXouooov22K1CHned8HwCUV56cUP5mW4HuovdpEA5E72QcT",
  "key3": "47JaScig11yi5ZTsmpVzWoFSTbzR7UQZhaieab2NyHXsC1VxG8x4DH8eVrApKdsreVtrFWJKVdrLzQ2ipfyYZxan",
  "key4": "5P6AWsq8vxLtdZ2hBPhVbGcUbLH6kpAmxxYMXMFjYLnKr51UNXveKZnvAzqJAamkMMsxyEqsdg8XLpwzrvBokbFj",
  "key5": "5UjJu6mGW9CTNYu55FjU94QkpVEgwD2xhQNM7RZgqAti2W8MSSpvtHB115ziK1ECLh6Zht8unBvcf33tVSwoD3y9",
  "key6": "2sewX8A44BMBDX2fddKuuNjTFVdbcnva8C3yhEJJvrjF8z1jrHoMBTvX8Y5sUGYVChA36skxw6owoTz9a7UrohDZ",
  "key7": "4NqNcFmeFZ43qnMjz2KXDnjGyMyawZkA9KERoeChqY8aFbGq7wXoHDC5v4xeW3C3t21JkJFMaT1fmWvg264VujK8",
  "key8": "3TtBAo28xUGpiJaJk7XKjVFE6w2JgobpwTQRKfizpCXjtz5xScSQf8dNuHhXLEarGfvx3McUfyFYsPVmgpFkiued",
  "key9": "2YG9nkpQ34bDdDGcwSsv8DxtFsZmZtLmLUjpMp92ZsNZNZJxPNKG2nmZTMhpJqqF9vUWmQzHfcaFMZDgZfJwutEm",
  "key10": "2qqZ9u4zhC6QqUi8jJFYyXcNCGMmzb5SB1TGpbX2PdbwKrNYFrvq6626B1Q1FFgEAUsK9vmv8uucMAtMAc5SHJEB",
  "key11": "5D1hKQN76GuFVewxD1xSqyFhrcL7jiCKgntVdSXoDSNMyCr8h9tgJ5cVfnvbNADWvCpWvwVzN33HV84orUUocwRp",
  "key12": "4BPMEkngTBkyTpYWAFV3KeSgFuznauj4iidKSQ5nDwzF2nmVdBbePJuQyFyafWo4auPBawhX8obfmwki8JSiL6Qb",
  "key13": "2iafFGd9xXKDcry6afoDNvcyBhmUyxJpJB5AJMxPzx2gq9gZoMrpp31k6svkmuaWT7hRmP2Zs3w3fJuGXWURwspi",
  "key14": "KYm9KasP7XGYq1MZ9CUoYFTw7ByF3tDdWfJ5XsZAUmtgct9Ysp3tK5t1T1dKrEu9wNnR7gNCoJQmV1TcWwsjRG2",
  "key15": "4g2YpwQFbcnWYqtqxQnUhC9ogjJqPdrFas3VnWk7ByCGF1ZyEa1EtuzUFXzak3WwjLUyCoh9uL3UJVPonk2ehGFz",
  "key16": "3bnrXqnPLDgbb9qZ6voYKi2Bcu7toFW6H8bqQYaHUvQkPkkC7nzNvZJmKjm9R4F45huyGrTshY2Kh3RaNkV5v6tn",
  "key17": "28GeJ9X1NXLupPsd7v131ZFqMWB5uiUhuwesB1bj3Z9TydEteLfPeuT24Ma7jNrWXA7TzpNB5TRgRigEcNRFCccz",
  "key18": "2g6rjwtvkMumcScTUDEXNfEghKcqoYDUkTp5qdgVTWuzKfUMcq37ZeEAsYohu5VNePc9gofjysGX1vUzMT3YSoeP",
  "key19": "2co4FqysAk8RQGGW5UUryLAjiMoYkwfGuuscf6UYXTGL6fThMLU97XmbiZPz1FZHg8tNCmvyvBFcmTz2QuNP7QCr",
  "key20": "2CeTGe4PLL8N4gtXjySyTmvWjZSf9KhByRL9xLa2po3fM6VHxf9H5ykU1P7tjrJruQVEP5QhqfgVgLc5CDcUXSDg",
  "key21": "2nDRWftFRHGZBFNUd69kXDr14xEayn2KFuSfxg3SsrF3NDuYM5VdtsPYikKym8NsqoEE6cz3Nodih3AkXbpAEXWq",
  "key22": "2zBqVkYKsAg9Zj6YiYt8RJvjqWuZkY3uENmiWto9jJxzYv1VogzxHKwg5tQ2tXSe9RLbmKnmxyg6qZD8cDXSDo52",
  "key23": "2SwJyU3FUUfQHHNJBiPdBzj3M5gKvKow3sbdqyEHdLf75uaKwpsN6xcs2ik7CQx4kYssiJuMj3iye4A1ZbrCGvng",
  "key24": "b3YrgmiktU59mT5SZdSWsRnxTFpnjbUu5WNcEcxM2fDE7tSeSkcK5bPd4SWtpNy5Z5QCD8oRBgD7JUPaGWZEPYS"
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
