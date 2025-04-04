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
    "673qtFfQWs2YAtuBBkBPHXLNsVmx8dJJV63aWV2A6bbwYPwPfXKyAZWSWEd2K19ADogkhhnyxkDwqCzf6EAucNBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xvsFPnt6i5Tp5o43XMdX2bxK9njc7i9RhXQFLXjspkfLqWywEALd5NmUqixTbwSb6fM6KiBgzpfva8VoVTvRDdn",
  "key1": "ka5djzNXt24eyv6D7fH3BBuW8GqRerMJeYuGY4bWfVJmwBtKGujfTgjzgw6AMtyrjnH9wShKEvHsezVy1WP8Par",
  "key2": "2h3q2Vdpn54KaxAxr8AZccREv41dLqKvynmNCg3ZX9Gt13iEn557cKvwAn94Z4vgmJTLUFY6DdSJiQZSqVPaKf9G",
  "key3": "tnZv4p4mvyFp74ZjwQFH1s9q4cWGa4M64RsD8uAhJdKLNqrvWi5RLZKFAz9d2E42RU7xuJy4bX3ctQzmMYwmJcW",
  "key4": "3a5DjdUikf1T9v3mYio5SfzSeFayvzDAuiUGfdTo8xwz9HTCTcQ8zeUxLk6SS2JQfmBLMxW2mEqgqNN9ThZDpKws",
  "key5": "4gTbg3T3sfhLTYmqU2SNqzuoK2C8dVRwDb1SH8evhYxCFaxrtk6BpiXJUL8vVL6FRumTSpdx2jiyTGdmb1JkHHSS",
  "key6": "2M37yVfY9Rdsfn7PpFSV1Qr9rMxxVQCGjVNaMQD1ptjQC4M4D1rjttVvxHCrZujp14muT2XetoSPBh6EeUcbnJSu",
  "key7": "3wEDPYRqKUKwDqZaqwWS6E22yGxVQisHya9NpfLkccKbVJwGeReHpP2UEQ59zfa7sfRLxwsJNEc9s1LhwKdPf9Pm",
  "key8": "WzZJfKJ1DcnYn8XoRSCoqDTp2kZfnJBrF7CKe7mNYduqQvoWAvBH883n5B4ehYhwY6TdvrsmZzVyeJrpPTkQjLh",
  "key9": "3J9ururLtpQvjZh1GG2ar3zW9FHHjyUatMg2ip6QcybYJnwDasdxpAfbYqoTHCvHfmtwY4e1xskotduxsMgA2EC8",
  "key10": "4YZ29YhCZM8YQLzJNjMwkLPvQvxAMihnRYHGqswgQkpPCsRxrBvMWg8M54a2XQRRmb14Fmmp8psuFiGijekb9k3W",
  "key11": "2UyQF2BeJ3J86N5QGLUNjbWvx2xLvhiioT1SJo6L4Uty73cJLKDVxPKSsnvGVfMipYtPDUofz3usEZPB9sV427bQ",
  "key12": "64W3VwFWYHeReTDLftTa3f6qCRtjshiK7bkPA7scMLBedeRWdYPeTziggu7FxbsxrJtnqS82uuL3Y1PwtrqmXE2b",
  "key13": "2cHGURCbBqGek8PdYMZPScCT3qNTQEojJAgGsrt1yzsoPUuFiG1z3Tc9NtPYF4bwZxHHWHMrPb8M11y6sNRkCpsN",
  "key14": "417zSkMe81eNWtdnn5D3TyQ2h9PXUhzwCkwvXhQ6pASo7NAcuAh5fLnWEx1DQCP1JXQ9d5aYMB6R5fakMZny4EeP",
  "key15": "4q4aoZj29W94ji2U4UzpthHmAuDuXvXabdFm1vxzubaPFsMNyHvYMb37q2i8uVQckSwcYMdJPcbCkeufJh7LY6LZ",
  "key16": "bW1rT4knUQ1YNtyET1nDUMhkjsZmvHZRobKyoPyoRhCgaBYkdhK8YnnbsnTmkmZ7wL9nc6w8QCt7qZrZYQbKHr2",
  "key17": "2XVyo8xQKtJ4ePNU1LnSPDx12TYQnWfLCFiTWmXr9vPSPTS6FEU8JRjgGT4Rg6EwLQpmUuMgMnbLJctVSvtxtnC9",
  "key18": "2MJdq8pMU6pgPe9CViG95LdJr4ntLi8H9yfgVGMbrpE88WqkSKE4Yw1mVG38GYBJp7PJhQidTuhKEDAgqBVwXYVT",
  "key19": "33AnAJRTZRD2PgvuvZ2ajvRBHZx8z14iHCruBpoS3Vi4dyL2A3hoBwTQYSR63AyHgamcUPR29RQAat6LkRphoVsG",
  "key20": "4AUUFTNRqMFPqNGnXTr3JZf1rJR5z9wdbXiUmZMQ45k6XBzQyrCWTbfXsSUnFA3sojLxRZ62DSF9trFUeqQ7xf3s",
  "key21": "3UDQN4RpyqbDX8vJ7UrqGKdhbKJaTLDqeeLwss3nUeEvv6MNw5zKKSWfhmymUnZos874K372VVyj22B8oDLdeocW",
  "key22": "4DdMfWXMmMezR1AWF1g3khS3Xf3LSfKXdUqeiS9pXxHy9P1c52DEvCen6whPpg38nw86wnsx5X4a2mpeMBG8fdSB",
  "key23": "5zGkYPZCNKYwLBdqkspivVd6ay7dwZWL2jLu7a1kqWdC3jW4DfBpnDk1pWCUpgXpmByx7MhxgRUBNa2suSwMHNTD",
  "key24": "QGnmbzoHuuLdRx9oomc5xuSuNKG9e2v3So1E1h3qN4VZpqt1N2s2yWizkNGyJWuXV7FVYpKL5cRnVP9YUEqh8fk"
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
