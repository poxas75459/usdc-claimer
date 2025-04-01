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
    "2HafQ5iiweSXXhoi4j5PS1q3hLGBxGbpfYzuP5Qfgkt5kaQLmdY57v7Fc6ARJhqLRwHDdWSDmFpgd7krwLid8AeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Spc9tXXUvozSpXQAwP8PzWP5RSznxFGgJTaTmoRPX9MzCjfPxtE5E2a85PAGYxm4Zr1id2LGaSaMWi7eehXxy5C",
  "key1": "34GeT7LEwgUrwPhqyd7GomVB9F1nKUT2dirAmaNLHikxFBzBA5qBoEXKsQuiFPi1M9BUP417UnEg5CRwEJs7G8iP",
  "key2": "2TYpbq5khWHgabhbgG6XWytjmCMpissY3K3yizEZx531vJ86KMuGnSaQiRaY1DVDxSJbyXFZJPzMuAu4NzTxJiHu",
  "key3": "39cvu13EHAio1mVVB4d8yjLFSt44yNRX1aBCtpoyYaKDdq6v98jZngFsKpjv551kNeb6VpNsTZDjD1PG5foGa5Sz",
  "key4": "4Zc5xWWZ5iqUNqmEc3pJYdKv2P623QBX3LyNkiVRs58p2QQLsuasyYa59SWhpjtwKdYFSz2ri6ptRuhZtwJ1s7ML",
  "key5": "Cr3YeyPWvjB3R5iGyXDT5Raw6q2V4B4bQU9G14kCYDUm9UingW5X3hwkmJFK1VPb9hArJgtBEAhjLMPcGR2Hfkb",
  "key6": "tyTCNYxma11x2B2nuiggaqBMzbvEAY8BnZuyvs1vGdT9w1sbToe4mgwxYMfCeKTYj5YqJ3spwejU9ST2pR1zcJw",
  "key7": "49whUnanKcQgWwADUpFKGrzVXmBpcDDjP4jS93pARPERVF9wVdJeQQNU2concD8GuZfVqzj1GKhE1WMfafpUU92u",
  "key8": "4eme8HQ4XH2EAHAo3zu9aHs3NRgN7Ywkdm439dyNvZ3jXPRc31L8WiaE2NJnmortCeTa3Ed3JP43eYZovRzb2Q24",
  "key9": "3dgFwDptBBzamfuZWwtSg5xop9dxEj5Nvd7LMQCeHbh56h3V1uLZ8m3prKWpPE3hrQdHr8CATJ9Qc4uLA1DjQ8u7",
  "key10": "5imSykWbQXNWsLVuhym8ke7djiiLvpY1Ub2vzYrKE6FM91EwVLbqMDtyom78oVNWCr5jsR9DPijSTKVZnTGD4Hi9",
  "key11": "4uWazTyWkwTi3mRCKFdqdGE8xzFUiDJ22kepRyEWKd2kg2zhZKqf7hhzKTkJCyGspWcxNrJywnV3RTUpYDRDnYnq",
  "key12": "3r1ijEcV2x32kNRUVGA8aaXeyvkg1hr5Wwztj6ds1p3wcLHDDTmrhuvd1gCfHw5vM68rJAu6WphoZYkzJbRKyb5v",
  "key13": "1246dBoG7N9zgChqPqBtWUacMsUbhjfSNBqELHXkAqVG4p1GsbRxYjzCAWtcQ1GzVK4e3iN18QLwqybWCsL7MZ4P",
  "key14": "59uhEVu3TQDzUbeyGmbEQchWtUYkpoK5QoUF977hJxDCD6zYKxMMbEt2xVD6jAG4P1T7vNQD3UNeJicHGzqoXegm",
  "key15": "1KewSJtwaGq4kbMi6ebYTKN8DYXPuzfzUDw9TQoekDMfqqy39GKpEygd223aXsiGwLwjXZquXVDWdHQiuRmf9jk",
  "key16": "4CFZsJWPXytiPhX15fZauQiGH8hJAGmnnLDnua4Uc9aa948EBPXtCViFY4xPhqx2itvDNHsyMdRE5kbn3rUgP26z",
  "key17": "57BxynZM55Qe1QwXGboRDB8xJa9kfZ6oNkjAPGDHtJdtTeMUPFHbe8QZqRzfCCxfETG2EVaYwmPbr4k4GeaGHX7",
  "key18": "5FsREPRW2NVw2nTTXiKwPqFeWXVCa7vhAjD1wzkdCPShnqYndQpwTAH98egMcAbHS5BxF725EaGJa592pyF1vgAr",
  "key19": "4tCc8ynNHwZAY9yXh7D2hFQAkpz49Pa1oTob6jAPCSpdP7eBqDxQrXDB7cmooMiLuewNfiMDht9VdYeJDUv1mmWH",
  "key20": "2BK4WQPghYmp3icj97xoQspfVPtmecnyBdf3fTJp1jPGwYsrkcux1FUFkHfjw3AMTN3GTNmQxbuBGwLuqLgbMdBa",
  "key21": "wtdzcyz2TgkDB9vRFhjrJsFu9AjayzJJXyqArsMKWNTwp39e18SSjci1cuNgwuhunPBTs8Znd21WquuDXcGY5xA",
  "key22": "pPNUkB8vVLRqqPwAA4rCLGsFcSc2rXzvbBnEU8X3UHCa8JR2y6DLaGC889MMX5rZQWMz2Q8QT4icfJfaU9Fk6Bo",
  "key23": "39FBEbiAAMjbm8K2sMR8hpQUzDfJKTRgLDduLbi3q9fEkyft8haG1RRLnaszN7CWTZk8tHyEXCeqq2w3oEYadj4p",
  "key24": "bx2HDrP7RzuhagqG9q2GYdrMnozh1h6mj7zphhpcwKfC77ssgKjp3TkFd89Z3beUxug6g6aybNUyNikfyGdsZM5",
  "key25": "4kwGY2ubii2G8Kka5f4DDh5yTEFo4yUJ4JyBUKHJPBgQKwsCcFAqMFoT6QgMY9Yru2neG5wqNFD65eigWNFg1WGH",
  "key26": "3D6hK5gsFDqLNxMKrAdR6z2CjN6uohJ1MwJXhqM4S7Fjnn8iWKXMwiooYJ8qTAqUzED2dRuWfctPpsYC5fJTNzdU",
  "key27": "Uo8ziE5HdhKxuKUZvP81a1wtYYFj6wJUwBBmAngH2TGCnhLJiZSgd5JX5ZTPxng2hCYRcCE5vgDYAURZXjanAqx",
  "key28": "3nJ5ckyeJ5UVoGrCniY8GPEsGS7TECfXLnSzHL2vCQHbhLNb1yrqjhChP3P157tetyQPcpmrRLpdZsBKw54MTACj",
  "key29": "E2JwpKEeu4sfWFHNBWdqG9wptj84ddVst8pKjyUKvyce332adMhhdfkkvWUv7X1wtth2qBZjJKE7w3L7kY4JyAm",
  "key30": "KAdyHKzAA4D9t2hyQGwcBSByXC2smv5p2BbBhZaCf7phEYcpYFsunKmAETpM4EamD3X2Zz1dMWKDYvZLTgM5yc1",
  "key31": "5LhRrh6Kvbsr2h8QTPv6RBYkuBMhh3jUUrWSNVjbvm4ZSzjdJR2W334MZrc7h9fz2xj7d1yNQsKm9aFYBye4uc2e",
  "key32": "32CKJrHTXeBFsVNsD7fXmR7cwQ9LpRwYqx5JZcwshJgDkH9susjcTVEgf3EUzfWfEVgAAqoTNoyS81tPkvvXZPGU",
  "key33": "eccMQjBQ3Ud5sxoqqhMFnrUVi31X9Ys74W15FFG4RMgvzFswwWtW2badVzrP1UBjpKL7mkDSuU6HreMCDFjrhVn",
  "key34": "5P1hzSY7dxMuGGGu65h3iTx6VwQQzbUMFi7QmPXtsH4eCpGHcSoYkofwjAV8GHZbXNjxsSpa88fsj7ewTwsuNAww",
  "key35": "4uZNGf8d6KfJWQDjNeFYZ9rKtWJyH5v598CL1s6AC9PWcFt8t7H3pKyKcCHwf8HfBwsknHvFapz24avfCciCXmCr"
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
