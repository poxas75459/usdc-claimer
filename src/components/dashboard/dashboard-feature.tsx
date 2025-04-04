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
    "3UBxWDDaMvGNqLY2qDJRNrc7h3BZ4o34g9z519YxMiFtA1v8XgvewxZ5tauAAKrAuNp3Baag3mNyhFR3dC6ooi9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8qXB4bVjbUM3tFJUuRGd4jgjSdR8NoEndpq7jg1bRnDCbYhEfof83PhAhLurNW5GGZfE2aMDPBwromCJmnVvAJn",
  "key1": "c9CzpJkxrJ9qyhfghgjgPHAvjxBinHAGSmVk8rWvcu6uFp4u95pGRT5bVvNyBY8etCdgqPxjRjCBaGaBXEv6Pne",
  "key2": "3G3Bj7miBuk2DzFEKzTAcjUWu6AjcXJG9eTBxphoxLtNBaGpDYkfetU2oFCZjyRSQCQL77RSdN7QB4s5qh1rufgU",
  "key3": "JuBcHCfeMa2LEPqCYzf2c1Hbb4spkgtTtbYh6NCVg8YbFLWZSzpTgosvx2Bo9H8nibKgo6aEXSDt53oAbcevjAv",
  "key4": "3ABE5Dm82ybwsQv4mzPTqyDhEbbeP1v91kiSNuBhAiXcH5BmWH28BNnPnJVfVCozPc5dBvYMNkuLiukdz6oLzUFe",
  "key5": "T18gHnpJ8kznawRZVEFt3WeawnkJitfUtcTjVXJQ8t98QaMBef2Ss2YprepE5yFe81iybDG1QWbvsTzYzviwTDW",
  "key6": "2r4vL5N6EVJn9MBTPFUasxxdz2wXFDEkhq3Dc3QGf7QKtcmtv1p9AiAzGVXMp8KyJH3RqVT4b8mf3WFBowy9VAXj",
  "key7": "2acxj3bBC8KYdNmnCoqqNRxYVZRBochQgGnTeF7DPeRPk5wrRKQiXnoDLUKRhRttyrRf1Na4dw1NQMGjjBpXi9cE",
  "key8": "4hYrd5BMFr55da5SvuXipajRy7JbpfEPQGm1pVHsTJKAc48LZcPYwAhDzE2q89DMrevfRMu6aKkjWGbzPhviU3e",
  "key9": "32NMXo9bDpX7M64yiJG48Q9cixPznGxC2jVgZGpZmpMyZm2gTRK67YQJHaefKyNXjQoLKMfYHq19smrYWaWRxYsV",
  "key10": "4cSvLUHmqQzwN8PWt9i6Wh3UfPP4YsNXGyzLTUdv45yYygCN7Lr4LAUeo3dNbbbmgxHL33GnSCXJjD4w98B1YLQX",
  "key11": "5prWssrvqudARuJDr1q1Wu1nHuunCoZptxJTbMocu3cDiG6NSqZNB78FpoV87v4636HZyTfvjHyvhLFxurG51s5",
  "key12": "5AZGGkjNZZxzGasxb3UwYLu1KVz6LadC7tUdw7oTvcARpb2yeuwCBdKhuM43S1FnthPFLqqKQnsadUZfLnc3oXtm",
  "key13": "hFxW3K5UqRNuyenrzFUtLSpfXzPSk4N9QSzT5Q8EDM73FtYa14bMaAQAJiTzVoDsiXz9Y7y3TDd146x8dNrz7Xd",
  "key14": "3sP1jtUd5fSQbUpBbnmbxxKKgj8FCAbprSVSiqcodMAkG7CWBwxY3Y2iNZT31baHeYNNfk8myvAjLn4HdCbdu7J6",
  "key15": "4epEdjXyAtK9RAtRoUzPZkm5RHKJD8YaW84z4kgX2SCdrcmGs4HA534SLdfVLfNT1DHHwetu2wBiDR8VK3U7dWAd",
  "key16": "43D4J7aoq1V7tQs1q9wpf2UQ25ZnjSVy43VJVgunXmvEqPq6i7YDQkoXnkxDaAbJ7MostQtBF9WNpjvu8u7WqYnT",
  "key17": "3khRh2kHm6NqdZZuWnLJwKxviWKNQX7apiX9joC193N64dDTfxMd3ozZqWgCxBaeiJg9tqXnyiRCcmoyw9pfZLic",
  "key18": "4eWKcrxu6vrSBbzhQbRMYqzXPQgBEghiiRyh6puFw4iCNqKZ7CL7XAC736giyJ8rawYPNzAmFBy5ACKCG6zLG8at",
  "key19": "2YwbK7caMRiDU26M127wK19iwB52moWX5gfQPHusZpJnvHEcFmXQxqXBp9aUhLLFK9vUUDgTkAZMyziQBGSC6a2W",
  "key20": "8bxn2MbawtLVz9yGH7HvDv9eK9LrqTmoHVty8ntpY9HM9yQ1gYJuiWjsvrYiToGk3ZhQU1wAZdySGGX8tPXyDaP",
  "key21": "3Q6JLNzF3A4iVAfyGMBM3MPyshaDSsAMjGa75nbSR8uHC7GLzNAG1wrnGnomrYPctXtS3AmDmXGzacM9nfoh9xUq",
  "key22": "4Q4uxQUwdX7XuBXzoEjNxA6BrzVqXcCQpCCVnBUpLCBnLnjqTFgaTEHn53eFDQ9bxvtsQES47fz4Js6jkiyrxt4L",
  "key23": "SLR17Kv13FZf3p62SqHyfQ39hc84SWUjAcf6kugmiYiZD8YW4L5oSAe3z18y3gd9aN6VVwZxArEhrjRZfBs2gAf",
  "key24": "5W9Ugo5ZvG8BpBCMbaE9dCftatF8i6AjiMs51KzKQR6CNWQq2cFkFJ5zKiqrLi17sPM22FcBju4bPCtgKbthkoFT",
  "key25": "LzHDKwiGxKYK9Etuvp9zPQsSFXFp9bQbo9NvCtfEjP8mT4GUCU9kyCG5Y5Bi8kp5LPQgtPQQZJ5KwzEmYPQKQ3B",
  "key26": "2dvNcZkSbptosSV2qQqBpv9oUCp2obCuBhnqKX5DNnZT5g6QMsrDjvAEe2cJB1eGbQpL8QjNiWTf9gxVjhePD3NE"
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
