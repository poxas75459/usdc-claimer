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
    "5qkX3X51fjyZCwCJVcKUuPW87EQstM8CHyabrQhkFoyrxB8kX5j5acX45kLED3oK8rPbDK4Cy4iJPet784Uaf4Uz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jgkmYJwhrjw2WJYJdoJg6ShwGVwkivjLRw4GG8y3YrA6wAQ7BvbeNrc2c21irfydS9rNVzi7xgnKWRUR6YbqeQD",
  "key1": "3DvqPXF3e4yWuo1utRTshsBr8rsjjwLDujTfNE6WR4wuUU4ZTM5MY62KokFkBkvMig5mMAEhgCTutbGq3cviPT7F",
  "key2": "8fUGpFE2TpeJpcGSAkB2s27wtHb2uNYc3iKxK89BSTqqeSWjT89oThQCgrDSnu9tiNJX1rihSV65qGcFRyunrXJ",
  "key3": "2ZMdhxigStqfgyHkwLb55nnNfZbub97EhZubvTaQPEueQTFZNQak17y6d9DEzYUXjK3e6gaSDrS6Zdwuqk7GwCDb",
  "key4": "5rudKfTCuc6TVfo9NVE7197iL4keP9YYbhFULSmjdVqdZRRYyR2dxXnoVsDof17XWujaeWggHEFW5TP2r1S15Msi",
  "key5": "2oDm9qw5uB3StBt5Aqo6kAfTMYUThi4DzZUMUaBDfwnzWzoWGw3FpqVDqttcwrUEqq1W8yUvx6A2qfUwfefoZcF8",
  "key6": "PHZwYAmJkRkx4467PGhcL93SZwRT7n6y1eS5bMEkqLNZn4DTKZgukc7uYMn51UQ3khgLMBMohVHqQHEmoKBV7CY",
  "key7": "3XHjN3u6BL3K1Azcp7zMxCpDepaQdFHaaJrWuMH7osenwWCZcq45MGRGYbnD6EaErQvjNZwZaL8CzyoYdgz9bQdZ",
  "key8": "X63fdKeVWcwNf9MiCA5y1d728ZbsbEzohdX9DwbTQ6U8v7dAvETM4x4PCH6o5SGHxy1dWpSi7pzKynVBxDDK4LK",
  "key9": "5rNXAGG9Rn431PfuXfNpn5g2fgzaj8guv9RqWekDMSLPLaMyeMqCxWpzRPg16rXpgyqbj1GVdoGydH6FVXXxmFU5",
  "key10": "4iChdmS1eEMuePNZmo9RQWQTue2HWoV5Nd4NFsgVApybf6U9MsttBP7Hgebycb9QDmzh68P18C5xmNPdAcpEiEc6",
  "key11": "2Qx6PcknJ9cdFXXUbLmgx8naJvtewUg6ABLSbV8Tmsv7r1sKbhdZVyJ7JbhcmKGSz6yzjvycxSk3wbdGpQA4TYEj",
  "key12": "4tXf43dFhgtKmPgza6MgsTYwwhN8jExhSgaDK1aWXv815CezojdSncUpUfcxQjzjvFvTQbNAM2zwQFkstBxJQYmu",
  "key13": "LRVMgT6VgAoicvD4MZGEnYeiihX8Aof6568vUszU5jCS31VcCb7U8yfkVWBXEUynEvY3WZ4YLKu49DqN2tbCJse",
  "key14": "4jx6gd8w1Acb8KBGzeit7AwndPS2Wd7GebH7F95ZjSDRNUC8nQJN2VjmtASarcucTp1HzCMVaqgcbZPyamX51uYb",
  "key15": "GaRgwiEifm2TE6MKBsQt2xCgxJagrb17boRmf9DdpDMhSrw8194z55BQvVSvpGQVXBWuHRAFggPcB4tAZF2UhUe",
  "key16": "5Ath6E7fFzeLxiSqK9ihKsDr9ByU4HNC8B4iBLG2eaMYgoyVZgt7XoRA1nKpUroGhtWypSF8DVjijKZnYgpJ4PgF",
  "key17": "5sWkAFkbJvnHVWN8FiNC1XFnm55T9wsSe9VYabctMBiK2ZMFjvM56niSzD8gFmvJf8BcjMSc2iABBeo9zfA6f7hS",
  "key18": "51isSCeeW1uKeo4amUSjgJ9t8QcyCWSAkXBwBcdinZVnPJdPgiqatrXrJeUH6DqwcEo51ngmMqbNWjSpgMwwAzVY",
  "key19": "5AhbP5gxSLT53ZFhTFeZdjQBaYtaatDFN8JKbMwkDHtk1pBuL1jhnbkaX1A4XQsp3K2MWFCUaWoppiMWHkJwChPE",
  "key20": "4LF3CizUD5YzSV2UxvAFfuFYtj5Vy5obMJxJbKB9TUmVZmLwwt4VAn98Sv8AvRue8wkzMdLb3eaJkZxz8w5FDeJ3",
  "key21": "FDXmeYm8jUgR1CPRE2mUkVuz32TFEBgHv16bG9Xsz8VZLzprG8rLwtrdFxEXCgpTEi2vrJRDN9VmQ3zJftQajGN",
  "key22": "3pDKB6AbWjVKtHmyUvf5Da4qgBEUeGztb3EPBurXFL4mkyGSu7TG3HfmymWc9r4fmUc3m1S5Y3KZopDuYcSCvyqS",
  "key23": "5vhBFSUktvnbqZ3THgrDLrFq3depc1QjoNLhjQx1oxjTJY12k3oQsQ4LrtyYHSJBuHZxmYKnDGDSzYzK928EsfCE",
  "key24": "24vyEP1gNc3rx5ruDHCvffjqCVW4bDu4deUAdGypKDSStLGXoPknWxd2rUjULGCDMwSUV6seeKGiwN7C1ki5ogXg",
  "key25": "5wRBdZrEasfMW7kg9KptqDfN7EDyhfzgMnMiBwvJbKowE1VxzmHtsciCQCxZCCEq3h7aoBnZUNFXCneGTSE4SrdY",
  "key26": "52ZcgkDGN2HJqWTXtCrs1o1wDxC996ZNXT345TbQTumCtRFTnWTvsepFYeY7cmg2bmYAYxtX6yg6DAe93GhZiYzp",
  "key27": "4tPomGDL4tcWjTPRQuMD6envf2kEzG2p69uaFXk9faomN3MQ3hsAnrwhGhs8f1sL4Ltjo979b7FS3hZhzwHjw2Ye",
  "key28": "62C6aaHQqUUQpaFz24Gjc4zMVvRtgeMEZM6xcZTb46QQ9UvPzgQFzaFBLwiLd4BmNcVq19P1jrQXTd4jv7EzUAqe",
  "key29": "2MArD2mrtyvkSahZ7kwrbd9UjgXZB7NjJgRj4zgeRmH4xTUtCxz25NDrwYx4B7rJUDgHSdwNxvpoGqgVHhB1PmD2",
  "key30": "sBmvp88WwDjU65Hzro8CgMNhE6Lz3Td83iVLRw61ageQRoQT9N41XjTLXfG89rziSYMheLcC1CFjv2CcGbz9sNp",
  "key31": "5q4wkDq87fzR9LzSUf5QcpPMYBw9zKRavdsk9mkq1hS9U9J4Ab8aRFnkNS7d6B746vcBnVKuGrQSJrTzP2riTjtQ",
  "key32": "3PYHwYoWxGKR6LdBQppoL7LSBYiXHoR5pE2AkYDCCa3m5jagFxytVFjgpEEmCrrQn2wwADaaHQow8zo7qcwjt9j1",
  "key33": "3mCMX58XoTDVTNmXVDyzo9BECrT1NgHj3v6fa3Ae8PxCXaCFLpPdkh8n4Y6sFhvsnqpPrtRXjMCbAjLCedjqQFCY",
  "key34": "55cQx5U1KWPahyYnLUKNAxD3Bqe2uq1JvUVzinYPZr3qwQ1kXUAr64Tb1x99MCC1XB21frtt1nu9g1oB9xjKY2zn",
  "key35": "2ze9sk5YCQ8ncGgV29g2xXupjse9Q9jiJ4SwiqDWqwye5dpDWvayAUEdkyFJSnYvMMc7oJdwJ9m9M5Lz3B3enDKm",
  "key36": "7YjvSojThYcsK3w82zfWyY1CUDM8qR3PuC5tmH2bPKfv4MwWAhG5fUmDx6M4TVqPdtgJU5ffFdR4vH1fJbJcB4N",
  "key37": "5iLbFhsZeFLcUvXFnVz3YLcrVpZZQWr1g3MKr3EYgc6UULCWMRMFFLPTnP11gM6QBLAPFsmg8iyReNGFqe7RGbrS",
  "key38": "3UtKX2wpnyPdKpfHWXB69fpKXwbBk1rnvrQhUxgdbPcCK6X7hKLWXhifrL6eecTdiAoLe5wm5biN6Fv5EuQk3nNU",
  "key39": "4uhW3XHiXdTaz2UGF18fVYEtuS4MrFRyDsFhwTmeZeYugNixLfVpQgBxHiqbfPafMRN5qnvLwbjkNouwocLwtGRi",
  "key40": "3tRSTB4wzbUrhncvdr9rvoRBTgCNi9vD6cZF244p9iftSQocmR6Aowq7toMKatJ5rbztbbm8VDmjLUonDMrHSDXe",
  "key41": "3p9ZG8yZuzyUiYyqSyfeq2PNw79BRvDcQ1NeDHGwdkFoPTvStWHciCttmv5dN1XF9ghxxschPNhu7D9AFNnEiBWN"
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
