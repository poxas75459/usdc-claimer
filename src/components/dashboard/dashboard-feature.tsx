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
    "4E6ABXaZk951XuLrLg53r6FG6K7xKrRZ4UHHtU1MYaA5QQMm9nfLjR579Q5RJpa2fs5HrT2msRjbzY1Fx9tbjsdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4omGNUNukaDPSthGBZEsVhaWRvdUdmDzH7Z8XRz82C4ixMwvKEkQmUSSxDC3qbYBtjqxLhFj66N5Q5Rbc1fEPAL",
  "key1": "5dotgqte8MB5AmRvtKhnVi4aRTxyB5bjc8vy12e5pZLE5UvC8ZGsLEjGh6yufmhcdMgwwbF4fiB2bRp3SxnuG2zq",
  "key2": "5anHy5Q3S9gVm6XDxaQMpM1gPgSqWuWEWw1wX9Sh7uiZbd9o1T4aBxNvx1GF3nfuxGDZZitnJsn4Xd1zkCH951Py",
  "key3": "5TzFguXxnAkAXHCXM5pZ7YZg4XGHz34vYUDVDmRdvZq71hXqSFa99oSVj8SAgVpbGVwgKp2PdrqmCyjPSALa1QMY",
  "key4": "4xC1yQhDWttziAvNcqdbvziomBTJc7wFy6fjErGY6LayvD9TR6YXnmposoXYA99AJ7yWP8rESMvehHNipDiXWhZY",
  "key5": "57EqtzriaZGdZXKhPDu6ykhqGziy6N3aa8Nwtjj8TZcqtGGY5wg4jDdJWfCp28DLGv8U8ab5fAKHEJwunC62GQHU",
  "key6": "ZTY6kDWXNjr8MrDPLL1Yh8wZX7vvJc61Eq8n5QXPAfHLH6oNRj592yH1BrpvRqYe4PvqpJnm51Cq5Wrr1j197BL",
  "key7": "HbfnBhpbzBy7DoEYANrmC569KzhxAhNtmw6rjgGUYh6DkW8yRNMBE8gZR2KPYKkEiUv7rJNwrua3i7PChNPR1hF",
  "key8": "48pUfptVEKeh7aQDqT6sgJqzLXfstWRFo3A26LGSGidpmvCBtG1MQQeaD6ZjniEAqX1SGEUgasH6CQoatuJGgz3p",
  "key9": "2c7ZHcENcEFLQfRc3P5TGj9eXhb44Ky3G8GSgCqxExP9s5boYaJHQXB9fPAD4z9dco27NMQWBkQZNSVvmsaWcXa5",
  "key10": "4AC3DZun6R4FheqVvp6V2H2TyvCuo5kXwMBnMAUJPvSqyseuD8kMesbxSzcCd5QBozwrwpYHka88saGDMXvYFvqq",
  "key11": "5c1ero5Emq8QNmYJfM7MrjViRqY5ak776mxgyqeVKXzZfLG26xxyXdoUB4SXvh2e2FCDnSbitDYqJTsDDFu1P7iE",
  "key12": "2Uqc9uAsuDzM3s1kNsFXyVMaZKhCccjfjs6Zoty1WMGueTcYwLJeNNZYQvDkxA4vpXidZa1ugbUPwLPzMw2nhAWs",
  "key13": "3S2S2e3yVSqQWkmvvFUjsMaU78smqynra6tX4bbutbm8nXpCesP1kHM4wGL8ifQ8E6GDeQPXErJkESQ8Y7UUFgUV",
  "key14": "3DTWJAv1w9ijjPSku7nRA7CfnET6tUYSy9dvcLzvbfUiBQ9pyCZczoj1VmzoAg3ZJUWuY7fz4qT1RfjZ4tCZzwwN",
  "key15": "26f1pX1rFXUZmBr1PDvSMYcRUPBSCCQtQnvBtYkjxvsgM9cmFWA3w3ZEsfKzwqKwPW7DB7dmTCgs41GhHG18Ut6a",
  "key16": "2o9x97SEPw6iyvP4HSqw1ree9SbZgRdgLrbaiQ8gYhxkPvZvHLxQUMixHPJ1dfeKKrfVtP2sE4HoL7FdMThMWshw",
  "key17": "3sJogvkPvmMyF1qFXkYmCxCsqxWEhCdP5qaaaf8GbM7894RSVfXfaRzJ6G5xqv8c8o7tWg8wLRVW3M51XuTsUd2M",
  "key18": "3EymKxqchjYreuQQL6yUXrw94AJLDRfhRdHqJb478JhpJcL24drQXnRupyAx8SrPGWe9C9z25NM1zwdASJ7HMmfx",
  "key19": "4s5n3uMBzfSVXbuZUhVjfqKJT6EVuE7WDTQdxc7HuGzX89HDqcDHxiMz9Qxp17Cd1m9Ho9sJi5LQ4BW9uxnPKMx1",
  "key20": "3vneGfzdnCwTbF3tvP4R4yuSUD4vjQG1h7AZDgmDqa9Bj2v4d6YkPNKENWASuuyX6Kg289f3beFi2SowZp1tL8eT",
  "key21": "3QT9wPKU9ozmXfghwrUCYS83V5FuWCDEoZnJaSvWSHoYZfqxvyex2LqkRbN8q29SAGLJgEei2cKsRLJUjsxd8WuC",
  "key22": "5hJPJQ2q8DA4ftQ8A4giPcPRzDVBcGwqrrmGa838Hwa1spDx9kSEhkXsEVnb51UFy39xdriuNSVdnqJMD7drqgxo",
  "key23": "qzQgMmzS4rbRUGb7zRAvNqAqRiYwyyWQjHnmTfktTGLUaWXyMnDGS6dXbTAa4fBEP2PGN2eHLZw27ryEo25RSga",
  "key24": "5BBbgAW3XwXwhfkfsY8naPSRzDhb4ZFgz9zT5djWH9rgBgmYirSbzekxRKfsehe8VaMDCckpvzCARHjeTZdSy8x9",
  "key25": "2Xe3W4T9QSYe4K15HUhKSkt3Qy57E31ctpa3yYgdYyTeiQmH2zL5hK9FJGo5KrZjf85pPHuWWNN33fwy6Mo8J2Vy",
  "key26": "3ofiGHgvpZaWF4BYRziXby7jYYqvZX9gi17mbG4k4LLTbTgaEUKbyWP9CSEqtn1ABXrSFFWR2ETxa6SLMtTXPNLG",
  "key27": "3LKaDmqofRyLetUUB52pJBRymtNThVsciPNWRwqMW3DjWozxx7JK1oZuFsFAjdr3tJyPcPyQSyGJHQ9N9wPCxAqo",
  "key28": "3PtVE1jRUV4hPTK4EbEN3vfha9D7nP9XcSXJ2d2SuYabfTVsKzAfVac3JR4n4cSt9Vpd7YgYRo2o8M3aUJvLdYf6",
  "key29": "emJ1wLfQsenq5cd4cXPHGgmRNzCEYRRtdSeEB6dUVFNwUnWC9k1MsK4GFHg2Vid8UdA4CqRwxCB7VGojkEqWaaJ",
  "key30": "jKiHn7y5XS1zmTycNfZrRU4gyhBnVHHoeGcAc85qHY4VNHGFmkWBvBMTbJnApmSdWfHvdXVDbjryefm9xABRbiR",
  "key31": "3tXcFPRxAq1ojJ3wwcK3MH3UscRKh7NjYrxPfhtmuU2gg5ztdYLPpCdSVsr2E2gGtgHYzf6wHhXZ9UE3tWZdPNrd",
  "key32": "2Q6UJcQqUvNZpHd6ds9g9XJf9fuCyiDBBfH1yXEn4A2y9HUQAumtXoe2mtuC8RsaLBvNH5SFvBngzQ7XP5CCYPdS",
  "key33": "4sFyJ7c3Po8rGhSFGX14DznwoKKWnXLkA7kvjeyQ2gdRTfaA87iVBxZHirMWJn2PqXApuehCxmk93FiPdUypXDtq",
  "key34": "4g7uAc2y2yH6mtfULSUqVpuQcCyCuYQiMwvuDFckAMPWE9axHSi3CUCqsV6xS7gzwpVfo4EdczDXuzD6NRYfZELq",
  "key35": "5FB32JZYmEFtpPSWBNSjhtWsYiD6m18PvtzvkohuKWjf5Be5CyWeX6ACLmRSKQjgEfy6nnuNigNEYvQBK1reTiUC",
  "key36": "4F7aek72pUgCbFXYrvLfH59k585t9wCFLFc83bXen1DTiVE98mffm8hyiMBkteoez9b7pQWWiN7ujXhtt25WiSGo",
  "key37": "5bR128qbEfHx6Nwz5a1ZhiKXghR7mHUyB16vTYZW4PVhQ3MaopsfC6n67v322f7ihyD5tZYwi77ePYsfPMXQ1Uyw",
  "key38": "LsSFU4kxBiDoCA9bev8yiFbHjP79s7WYzMW1pWTY6Fneop3Ss31HvL6TPSzfKksewNUAyYjMvmeeacxLvpoN7pQ",
  "key39": "4ChUTLBde59vkL7z46yX2MKkPyBJZ9re8pUBqggw2KtQgEQUQagLqtweSMgEfgaHT4pu4aF64rTFstPbGfqQHmqC",
  "key40": "5aqGHAAEmgAxaDwdrT3BR2yZB738L3Ur5z9eXhzxPsYgBa1LP34h3sRiMbGed3LUbkEL9DWW8eYCAkDGUguxwpAZ",
  "key41": "8TYQdEjqsHm6HaZcDuV8tCsXdRjZTJn16GbUqs8ufe6zS1mG6CGUYcDeqiXfLgwHgojaaYyeBXT4qLDFCnQNTBz",
  "key42": "34eTTFqmeTWWtcsmWG2r6LrNkdUi6JVBgjCiaut2xgNus97hJPiU7ShnXsJYjXLTHuNuCuTQ3z1EkNGFBM2JBQ9g"
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
