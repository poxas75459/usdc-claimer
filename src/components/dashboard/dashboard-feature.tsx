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
    "5XKrvr3jx9TCpNafF5v7SKvv8WEef3Xzyq4XZR7rLcjFeBivNfNB5oMbjQxArtq1yvitKiNGW5kwpTLKAofe8LNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uzLpbJxXXGfCte1euMpvJagnFAG7mTC1DfNjtkp6xYGAjpkB5pBDtPzeVhX1dXyrJYUZG9tE2ebziUmSxfQZ9ke",
  "key1": "3g3drUNLVyTdvrXrvVqnDUxPnsR8TmPpE8ypWo6yVwSUCPZXUwXwXNiCPRM1APLTwuX3kCWcJofQY2WaE3s6eCsU",
  "key2": "4bgL5TsxKLvwmEdKnuhqaALqPtqFk8fYAkQ9aU9Qg8HDy79NC7hiYzypSe5u8FJysM4nAUhUj51jXVAJ41t8v9yU",
  "key3": "4BVswAwPHLb1CusSAZaMq1Gy7f1zgAEoaGdd3gDKDaKh53rQAVY3zzSkMGj5yGuoFkXeb1pUVJzdmFZFtuCvW9j2",
  "key4": "4dXxB6f9ogvqgHNwC7oDkb3kcr6QH39jfvCyDT5aMg7RVWQ1Jsj5wq797Frcdr9QSqLi4NRaHLcb792QUMkZBeC3",
  "key5": "VhurSs4SYzTgNteuby7Lgw2vYSGX6du4tTQb4QDaUY3XnSnZ6pPjx8FLZQAGF4cLtgycmNSQ9NpyqN1oGyUWESb",
  "key6": "5mmHqz6rQVb53bP6uFESAHnXpefRrM3vSUVvi3gbvARKw8ZpnSd5PviK8Agh2u9GPoF2NpKsjb5xc9fB5GLKNw9i",
  "key7": "592nHcwTvm887356NbLart6YN96Nk1S2gbSVgg9UjqX9QrbzTc2a8NAmQwoSjLdP1vrEUQ6o9UBWymVSoc1pKHJ3",
  "key8": "49dVNbAVZcD7KMeS3kXUZZchhAFnEtW1mqZMqm5ubzaUhLeEU5gRcGezqmggmV2uFBYCZvZZBfSvX4MYfJ37dHiM",
  "key9": "wkPyVd4vECWcT2fGLxxmJNmcnQ274UwMPzBVL3ejRaYE89stUTmHPi3b277PCah4LHLBwPfNpFRoLAhABXycZHs",
  "key10": "4hztAxZJicWFMd34sPLK7ndkKxwpHwCgjpa41yXaeChf6iJEewMjbb9jbwkLEU9LZSjyGmA8zvtifku8gaiSqvxy",
  "key11": "39BE66kYnoCUhrj1fxNFiyXWSst33zTbxvPUf17MjvFDS5fozPDDymWxa788ZMb1aKjMU3CA3STtQuaUBrxHpnKD",
  "key12": "3F7gQoqBpyCUJS83xfM6NvKBnyNc45nYE7UULySpSVazfwPFPBHQUEiiafQRDwcMnGCWtd4grAkgzonbCeEGhQeK",
  "key13": "4xfzkR69qcamzWMpkcwTZjiamxBCvMthuWoyXcpqCNWqkH1SovQDEZtmczJDykBECMEgHtnWfjQnGnFwpF3Z6NoJ",
  "key14": "XufXt16AEkuZKarUE14TvzqJ4BExBB9gW1E7zExXvtyMx6RZmJsiY1boViqtiso12RcicVn6j1Fm9TW2Zpr5iyG",
  "key15": "5N8A8gdVpoaMy2oGE31VHhcwJ2wLoPcUjbJWUmAeqZvQDHQFRQQR9bT5x7CDHwk8LNGgk9b81WnzfhQQmBgyBRWp",
  "key16": "4odMxy7ufWu4pobwEz4w8CZGob8ueHTJtWr6cHTxnTEcG4DVTctoaf9cwDUbGyhsEeeaRdmV3MXNcgZzgLq9yYhJ",
  "key17": "52sj5uqAoQs5hHayWjwRpGVrx6jNNJUFcbAz2pCW993F1HMxpmWpnz1G9jpHmxXXyCXh1H4A8Bug47CVBjZPk1rU",
  "key18": "5LpnW46BksBbEkAq8kSn6hBZXAHvQUJi3njXiymRNBMTDN9VoaSytvwrbA6FKLTJ4uiPp3H3touqaZPpzmAoBKg",
  "key19": "5F7JN18pg6D6um2nQVw42N4LJj9KQpaZw1rkdoXpxSpqxP9xU2AV8yYE7uKAazowFFvyJAfSSNiWjybmiPkh21Ct",
  "key20": "3b55w1mAFgPqGM5urgEaijU97kmBg2Ezj9vH1DaxzYSCrTZCiZPMSTKXjnHBc3yiMii895FfrGw7UyJo7pen4G6A",
  "key21": "63VSL4gx6UrCcnEfatb9Kqk9USjFW1ruCcwfxQtBgntL7vcnVhy7g1fM6GGSQtkdbK3wP8SsKxRhApbyfwhgLM5w",
  "key22": "2kHSLrcSVr482Dq3YBotms7WLqY3WqW6fqjvYd4kVPJVpp6uvjgnq4FVwwVq5qX9QM9D9UctPGt7T4n7GfwGii8P",
  "key23": "5U3PMhq3rgJ9mR2HPhaVbbA5tx6XG38Uc6B3Cj2D5w38qjsTrN9ERmKN5LbT7YTYR9vXVErfqHTc7aKtjDJUt2M6",
  "key24": "3qnw51RvaVZ6DrzcaomT9r2LyEHDk3tNc5fsdFNdY762LG8nc9t2N1GphfbdK5mU1jG2Vfyyax1WTpi7XjymLJjT",
  "key25": "22ZYBJQFEoiZHF21CBbaeUsWoTYGEAwg2XATKfX8h9Cv3r6KwNsReUZnrzHBryZCpqnGd1rp8Qt3C5tT7wyJdNya",
  "key26": "fySyAi3hYXAZX65H6tz2SWbmZnmKgRC2YWUteHuC4S9zW9Ai34EB7G8dXq4wAhBSibdq6nXxJ7z4bcL9LfVX3xa",
  "key27": "4w7yP1bMHsqVtc9Si3mhqm5f6kzYKW6Ps2U8raM6GZvnDYSeZ2fvierSj51Z9V3Ncu2kU2Fq6iPMPCcsR4BRd1Wc",
  "key28": "5mBvJpaqt3LLvokSXP3a6Zmh5AJBAQNgRnpERr6NSHqj9NTzFm5J9jvZ1fhUeJavemR11izv3REA6id1uP4HT6aJ",
  "key29": "5fVy5whtUpjnEedWxt1N6kiJYjvkfjvNr92CGY1vBZMezdjhbj4HcpDvLrD9Q1hzJzSHWEcRJ1Gq1PYD18Mrk6wF",
  "key30": "JYiRuVCnKcjmsCCkbYgRsVGkstWrDwgjq29r4Th8NxpyWHwa8qXfUoAzYCJ6RkeUs7xVrEVHxD7nhY3o9WXHxXx",
  "key31": "3f8sgkSfUwrZvc4S1BbwuVs81wFxkyX6mnhAyeXnTDiZ65ktrALR4eE4eJwJ2da119qRK3RuNascYtMopUh1TGMf",
  "key32": "sSNKwmEjm84TUfNYjbMqNLX7ErAKNfnyiPqWcpJbEkiLxm1RHbejQVySwCCaYVB7jqiArYcpvhLdPpFz28shabi"
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
