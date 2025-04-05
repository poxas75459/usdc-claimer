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
    "eWiZd61NfP9Ku5ZMuFUHEj35VncQQkuVPrY3iAEeFfLjYQZYe6cDgau9F21M1KbPxPwU7pfX4ehTEYs8ncFxBsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SBMqJ9Qom1u8qhioVmiwRb5ZebScHrzwpMP3TiTzqcTuQtzHuqJF5nPoF8ZAdwTtVxCkMMGNSd79s8j5NL4esvQ",
  "key1": "3s6aCT82HyAr1NK1bVZNR5jxMfVv7Vb3dqqjRQwfHJ2JWygsukD5qmtyBE3kEvpEpdJ9hPdmfgEBQEhcevL7n24f",
  "key2": "4nQShmHx2TzxH4oeDz46AufnuTyX9hYgA7iKcsx361ZLH2EYPR8Cvpu5uUssGm9i4H6TyLiqYYDSDdTkbQBbC4ac",
  "key3": "457BjCUTpSc3SMCeKUjaHbCRhasfm2WgHXsyh5p5VocnaL6oKnLS3gooAWcNxZL9AiURQmfgS3t5RcHCz6sDgZnm",
  "key4": "5iaw4VTtCnXPYukPGnRHgyg3z3xhc3m6MTJpU4Qo2dBzQmULKZJSFijTdXgqHAn4RKpGkKGj99SjnqhrDvj2pFbD",
  "key5": "5u3g35uVHjGuBDC6E5Qu5V2Td7xYXQvQ2LWDiRg2M5sR5uPi6AcdHHvqrg9NWZAjHfB6kJAW7VjTuSuqYHDDkicu",
  "key6": "5EaqthvpwtX2rcSm3naYY9ebnmTzuNa2E5NTVKQSmG91E7fKtCdB6z29dDCgQCRLDduZTyF3V79M6aN7Cs4Loaa2",
  "key7": "5dKyV6ENnX4WM7boAEg3XDtTFb7c6jFAK77nCStvhiKW244BxBmj6BCmsNhBg1kx5XXaoKGRdm1McmPoVWKark8L",
  "key8": "3y4HWkh4jNJ6eqXrUPeadzc1toffqcRJ6qP1YWBK255RJnTGh9ysyEMbUB5DwNjzVnS3vhQpWwauoimYCmsgE1Db",
  "key9": "5eTXqiBYCQhyyLYxRc58vjrT2jyUoD2vPH1ufTqCHV5po2y65Anke8NRAuyo2MLhSeWdYfNYFZwKa4W9MH4r1r5j",
  "key10": "3JZYkQ6YN4esjPvfDz7YutnRSbWCMLHi5qqcF5mNdS7vuJhUBoewuAn4ryMLvKAdKSieBw2eS6iee836cJJPkniA",
  "key11": "q7kuh37KYz6YeLYtX7WDNCxNQcgUtStqrRXbnrzSGWjfST8R3SLif7zd7CfXFsi17c6XUv3p8xaKWoms5ZQX7ZV",
  "key12": "3i3eCBv3hG2xzZtd2iDZn7RsDi6rJHuqKQdfeCnfcZvuztL6RiGshgkyDZGcddoCjy9qjJMWkWLs6Bd72Edj2nsb",
  "key13": "5Ri5v1GdDJVbELQnnZ7oF3SBudvwjLCYWKyxoXpgkPFWcyx3gVQfKHZbiRwW27PTd2H9fP3ZxKpv2zdvG2qoPPHL",
  "key14": "4aq1e7KUsgpEbGNBxWLV1w8gSv8W3owGD95NgZnAVZVrktyKd61s8yGyt4ePUMbauey6BAHqFvuQg9Hj489oysFF",
  "key15": "5JCaujZzzmfZQxNAjMnrHSNbXKJtSrwGjfsQikxrNtSr47yfdTvnu4iNsPokzYxBQDQe4E7MoRxaHzhJvJgDJLGr",
  "key16": "3HKmRSebgL15BZogSAfzucmqosyPpPHKBWXncs3dRM4eQgbtcHKNSwuzdxxUFaXpPqrggCfQHaXeNfCxVTq5MUJL",
  "key17": "54b8K1h9edTWuTHmmAt9GZu2YrNcM2cuGyu6zxE9vtECbV4F3hccrq4oX3ECujgvPKBxReoEEMd9RTmm11Wy2rz6",
  "key18": "3Pq9YnmKwRedexx2JtbtgNDH8csUVhEriYeNvWQycL6m2Gme2zZQrx2yCNrp2VurHhqFrxKdhkUpnX4EuykaDMMz",
  "key19": "2xK84ajwNhpGgzS4dd6GDmK6wRTwNovsD9AqxrhjyHPo3cj68uzLvHWzjL1AH8a9b5puYxBg9QV6ckGMEjjhiBRg",
  "key20": "2E14EGJB63ijpd1xpMGo88Sy7MrudiGnF9uXUDwLSzMmnfK5yb753aqVrn8EiFyjHJJ5ePhVXYLqjvGuCRn4yCG8",
  "key21": "3xHQ754s8HGeppLChQX4Va7nSQ4n52tMqvGx97LP8Sm5sfnrcs5wqVY9ySbWGk9fYoJ2R1wrCUVbDsX52zWbNgu5",
  "key22": "2jPi5EEgBrQaUwdpYdCoxCagjXBd8ej28UsdYaacUxKZy1nwYkAGfNYfQWthdNDj7q6A1ScCGBNN2DnhCrjBZM8f",
  "key23": "59rCjYzjwxhGn72G9yS7CYcxm9V57rkaGf9n5ExE59ye6196UXxrVacirSsDLsuk7LS6j3mi1iwcf2HHNNhKUvsF",
  "key24": "2h2JdHqc8WmGiypAcDR1QETBnv8zeLU5dVNrEHuXNzytKUb7Zbbb63pKSomHbkwDcbwgiT3FHwtzVnLfgw6BumQ9",
  "key25": "3rHrrFvtzrN5qB394m6B5HRb7Jbf5qz5KMgkBNzRxPLzASF9RmfRiYVYaw9kjsV5Wg1w48wXR1VgPNJAshXWsV6z",
  "key26": "nhFcQeKwP68xtm62M28YshWHB6Ea5PKFEKLWN9i9EM5qWh3czNKKrG8JaLUDUNEKLtaf5c6HzBDvKR6XJbMzfpj",
  "key27": "5Xdp3hy1SieFz8oE5CMcTm1JHqQVnbKRvddKqY1uHfW8bHkXetxGPdSM78v6Fca1UNMwoKgnqpoYuymhnrqEmWmn",
  "key28": "278gHQiLpLKtCtefhkhJkXj6DbvR8bPbSg4mNrrQYiVpcxKWFVQj6xesKAv2rje6nxD2YV3Zh3YX5AtfjMJxMSTE",
  "key29": "4CFarj6nuX7TSKxcVnHtjx3ckQd2a89vyU86Jaqtf95swnyLBfB19wWs5jREqSZaxJfaP8ZZyHhKc2cdNHsAFguZ",
  "key30": "Nss9mew6SfLpXc4GTuJjLJGBBj8Wub7gCstKwe27dPS6gJmnHAin6a7PH6G3ERJ1egCLac5A4uSAc44wPDsom5L",
  "key31": "5Bm28MVkqS4oo8AMnrX7d347KW7h5BMfuSkEtBtHAFMNAUu8KsLUJvmj8ZbmPsp5WfDzwWfSSp8ZQZ8r9C7omt1z",
  "key32": "5HRLfS2sohesr1Q6ouv1tNLk2a7nHoQiSfUwWZkvHy5fXJwyxFYpizVLJRXMuAxQR3H1Z83m33y3NpHAE9RLt5TQ"
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
