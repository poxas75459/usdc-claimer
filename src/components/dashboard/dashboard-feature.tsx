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
    "4HUVuRGkdWYBdHAy9fH86GD5igybwt6Mt1QsFc4wA8wU2LorGZvmbu4PT83iALoyrZD4QR3DtQBGMT7HnPZgnJLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YptvyqZAXAsNJAwrnSNTvfmd19G1Wjq9xur29rMna3Sf2GXdW2pgMoGkKfRxkHtgGkTGXYqAFkVCRz6zCbwcFdC",
  "key1": "3ituVJisGVCEx8JNQ4CKu6aFMVoVD1hfG44G24bEdQwEeTCCH5QAubDuE9YXQ1ztooia7ijwqX8qCtYnhc1tv2Qu",
  "key2": "yzriKL4PvbijEouiBQWJ1KjkLgd7TDxkCeNYCZCpbSBSazXxokygUpCbUoe32UxWcN6fVntrXiuegwDSTWaVv4U",
  "key3": "29L4AmfgSaZM5rrgefSWxFg4AkwiNXoaDEAuz5H9VkPLWbhekzGoKoGCfzgfosi4fr5y5LTSVzKgpbWLtiNPaMvQ",
  "key4": "3K9MayfkJjg5WVL83yzLkbsDuupQCGsS4pZRsDKPj7cYvS9ZwoND4Yc8fDijDzwnKquqNgBJw12Sm88fEsCzYJHM",
  "key5": "451meYepgCEV1UVPGCHgB2YEgtJVPRahZasNsUwFi3uAJcA9mX3qrYWL26y6DS78gpDSD4N5myTPzFPJXGRaAz6L",
  "key6": "3veMoHuW12qE3ZtANRJA55MZ6jvfFD13Xq6LUUuxznJtsWZ9bigjE7dNUr9eKMRVv2zS4FxooPpL4wKK5pFMdVeF",
  "key7": "5z5bbaE8EqdkbTzYd4Zq4f6QHhF1JKUeEK2ToFGYNwoD5JzuN4hZeUWuxmcDAPU6ZvsX8buskxfiZ7yS7zQU4RiA",
  "key8": "3W77VcpuEAvyapkpwCShqw5y1N8jYLdh7R2dp8RZbkCN6ptUmYBMp7nH14XsrAkHbAkyw243RnWGQTvKm3jF8VFJ",
  "key9": "5VtQM7Nnz9SZq23cnhJkVAPn8LAeRnVSSebKVu1GDKCeStYs5iov6QCuEN8mcfhAGf1855NBV9YDsy9s4F6v5wec",
  "key10": "4Hfz9PQcNcEY7hB6QSJEN5aDKtKmxaKHrEThCHN37KzQ1M1b8VkwHnR9gPBm7wER36FK1nsHiufx7bLJhEmDgQAZ",
  "key11": "2mrarDUzrz346gcDcqARKh5X2W8xdkzqKpuk8h56kyoAcFVJuH5BbYpNWSJbAcQE1cScdTuK93jQKvxFZgCNY6Ea",
  "key12": "22W2JdXLkEbXY31WBLCm9KvwsZRqcsQbRXLUV5zGGGqjFX3jTtjqnCGYqXLZ76dLxnEyiYduWxhrQKxSwHDsQqe1",
  "key13": "5AxQCrg8pVL2pTpkxwQitL1yi4ZEzh3tDAE5hLpAiLoDgyojSQ3Bu2Yr6mgeebyvptqUbi8jKu5QtYDcyqMk1A5K",
  "key14": "48ak4SuYHxFjTeTLi8mGvy5ZYiw2SKP8Hw8R2PvBoJLYMurzck1UHDUKMCVMT5t4LDPyk4rTJUTNAW4cQ6Q2yi6D",
  "key15": "LyAL4CTAVzx2NgMntnPxeCdwADTJFeT7JR7cismBjFbD6dW8QCoej5DmKyoYaaUxQz7e2Vyfkuomsqo21tWRiTJ",
  "key16": "2cUz8s8bAGrUR9CtZjthXqMndYBVYS7ckLdY8rMjmcfpRiFRFGUWaNWj413faKNnUmWZKaUUMwLvmRrkfWot7Afz",
  "key17": "5xs1kNUtH5aaJ2umuDM317Y6QZqCRepPuTLag89JFCeUXygJgZ1qyyYjHYFcJLZ1PawKX7G7wSQjmwTFuVbbQ6id",
  "key18": "29scpTrq48JrtjaKMnTBZYKpTQms7LMCQcDsrThL5JFfxWLWughP7iBKUrNrXAVxZqiDo97BE6HphajDyWu2tbCZ",
  "key19": "4shWoHMXJPLBU3rRSAcfDZFDGQY2pR27UBHTBSFNQ3GbNcScNytsHizH74aQr5KiXj6KZ558r3qq7L8PJWZcMuRs",
  "key20": "2ms2WejTbirDEvJqLbFcLiecpKhzLPjampFhiHDnFo8ZGxrfVDByAythaTu72aiB6QbRs93w9VEw7McJQVpM4bzn",
  "key21": "wRbiE1VVUkqvTmREehUmFWKrzQBfod91Rptyc8EzbSZXmxakzREp76YRXgTPgE8W31f2Mjdzd7BnuuFGFhMdXLm",
  "key22": "3s5NQJ74PxF1RW6WBmMfhpNjBMwzpRqvCnU1iwEbTvFYprgdPWsDiwdSS2yizaduvCWYNPF78Rdby2gVJqK8Mepa",
  "key23": "3D6RKPxMZCJ96wnmuMfuHkNdEaT7wyjQ3b5XWaYRtX9aMtBTy3He7PgCcNmgYo1FHfKZ4csSEmEQcCfQeqjggTyB",
  "key24": "eYgLD2t2rYpxZ4RHkFraKsqPmdf7zAWLudj9FsSz7JNJEa3zt2aQrNtP13zL7F8PJTqA6EkuBdMSAgjHJsQNxjJ",
  "key25": "KQiCyfwCqbUkfYUokdGqfWSkX3BrGJ49P8xXzjNtyJa6sxHB9835viBWJ8qKSEuMoh8bxynU8ewVLwjCEHHuont",
  "key26": "dtnsTEbZcFzUtBqwy38HTWZuBzsBWwwd7v6Zc2i4AtY6aBsMYeJeUM6bv4vDdxAhAvnocXXJccDUGhQYsFvWyKW",
  "key27": "DMJUiMZKSUhw99DTN6K4KZ7iUPxqQ5xfCVQtBMNf8iQ48fnGafe8DmPKaAtMGidzdsGKBSt6wm3qSuvpA1xXRP1",
  "key28": "31GdSqwwihTnjenwTV5uuGGbKp6MPYy4rTH6YeYn7iwQfjJED1pXaytZ8ndFgYfCemv4KitW72see6fym4tshRQa",
  "key29": "xGiw4doqUA3qSvMikwHebeRQuDDYDe8c4LooHL6qsr2wXFdpQDbvpoPNZTbzx7Tn4BirBDawHGzUbBTaoSWhTTh",
  "key30": "8vNLj7gJrJtR2v5XJgDnVGSRcXKEGGPAGM1GXoB1FeKgsDCzEWP21eDk5Y34YGQucKdzbcFyNA4iCwV3hmYoa3H"
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
