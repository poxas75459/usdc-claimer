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
    "5RqWu8dXY7p7c1eFGeiiJeuVX8baMnhxe8vwS9VKGCcMh7tEWDvRLewFeqQhvoTsvxUxNYGMCPJrSxszwranzc3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HVefmEsnYEEaqaVM3knP4EXiSfyU9ndZdfUm4A29ggjdXQqQgbA2jNz2X9w7AsELR9RpB4NetYJ8fGSGjRxLuXt",
  "key1": "3ofPhbecuTPZrsaVcQCPFc1dvPufFXqHeKSDcyFPCJ82am3XV2QHBxAs8PyTG4JMNLXYGTKcDQuqPpzH4hgsopeF",
  "key2": "wxj9tbqF7WuZvp1ZxvwXGX8JbU3VK5xpbAFFhuuLjLX2X5G8jSnWbLUoW44iRMKAEiXQmQSgc6kbuGhmv9p2KSN",
  "key3": "37nB2UFZUVnYNkNfUhyBUCgfa6q5oFJkgED5efdkjRwqPTHYJLxfk2ADtAYYMrnmHmpkFmTcnmBDoHPAXQhG11g3",
  "key4": "5A5Kbx78aBp2j29YPbTEWCFRqKLFYyYKFCXBRtx17wb1dZB747GSBeFyVPmcFH5vTt9RPpMDuyPfWwgsRrNs6oT1",
  "key5": "3KBuXr4quJA1QwjsPdM3jtdazeH5GFDRk5LVn9fuATM3gnY26v1VHunxoigEy2L9gfyNShc4s34zoDo4uFJDi8jx",
  "key6": "W5H75QLpCZ4BUHFgPqh8VNgqaBzUiHoiPKZdG4V3e3stywYk4sNVyQYQL4yvvjLTvx1MY3hqEXLfXugnkMD8m2o",
  "key7": "5Vo8v6vwSp1ggA6KRwtQyV26M1ZkJ6nv21tZMnWrqVBovY8FTTfg9TEJCy5LMqUebAywz9bXpYcoxgjdNffuPqJC",
  "key8": "5kzj5Jm2aetkTs5te7VhngnLSdRUBa1RocGShTD5tVfq6Kcfg1HEpnGxmhj7Bf1HM9sdRSUiFp17csrYhEmjYrC2",
  "key9": "4p5EwnirEPz38PWAj1jj8EVuhMfQJFdpkv5VkvJSxg5WYkuehDoAbwiwp6fzNyEDwHthLqKkzvMdREYn25cvBsA1",
  "key10": "4cNPHWz79X48vccp5VHjPv1sXYQ1yAAMHuMGxtWGqKR6crepsPSVEBWn8DDhPW4fskkZNo6S4Fuvss5miJsjkw8r",
  "key11": "4EJ1FDdwXg8xbHJ2CqjScp1APDUGDb2KhX3wUsk6oUR5mUcDtXfaGcHKDZqsecqqWTuVHgQSQU5EyE5eH8t8XAkZ",
  "key12": "3JWnf8FSzaFDD4R2NUqMUwxgzaABiGiykprTgaadRxArq8uGZFz7ewqdafrdNJtXzJBM8kP8V4fkqWxp9ZWtaXfs",
  "key13": "M8gtaTxPG4fyQErpTkK4EZhsVAY2hqA1qNhbtYwHJEtbwcZo1WeW9gDAgiA4R9sNVUFRvhFwgabgbnbWVeqm69X",
  "key14": "5fCjg12Z6Qx5QNpjsniPyZhCVb8qumjbCVEubTjZE7rL7wdGgzBwAmH3A1LR9CsK8Htuq3Xv8VzYfzU3aVijVBkU",
  "key15": "2omZ3fvSVZYL3LrZSJwPErctvZXPzYtKPfHCAVAQfu67R4s25s4VMRzPDBrz6Z29sjGseckxoJHEaKM7V6BhC8vV",
  "key16": "2M2rxcNf73oC3SMzkddPN4oUcqUQXBEUP8S9UBJtHsyCuiAZsPKxvic9MamoESR51syB1pV9QvPC49KLZwkw9DkH",
  "key17": "3rJcQUgQrQEL4McSgY4VkW64AFsuCM2FTk9pk6ByQF7A7cG1aPoEqz5CLLXkyv6bxKhPyS2UKMhiCaHJGCSBQiPm",
  "key18": "4dNTUUGPDSSvwX8ieaPtQ1p3EVMddR1xQ3BtdyQqBGtvhRX2DoN1p3SJvn9yTNBSDrUfHXKNSkfuL8jFEfH4uUR6",
  "key19": "2W6438B2TqW1ANeUa45XYvuUWs8CpiSPUBg8k22zPDpykuof7ku2uYADewJ89HLWjz5mNJ5Q58J2o6RFkzXXFyDM",
  "key20": "3NTX6166P7FWUnFbdaBYTNxukEbaSyogKaZMDiHatY2YDaKrYuW281QCKiyK9TcWdyQB34h9rPrEjUDZREc1susn",
  "key21": "2nC8zQV2qGd3SENrErLstb72LUe4k2HaRZTo36QMsVFTCnEL8NepE4UMcFH6nhCtkGgosBrrQJ7kT4y4bLYkRZMJ",
  "key22": "sb4g2EYWzkQBKrWpimuGBQ5hjkPrst6YZWcYezxJrKEYNj1j6B1rQP5SB9aB7V6XDtAbfgnV4hp4gxzQqsoA2BA",
  "key23": "5v9Vy97eX5DAjMgHLBcSTfNcm4jGR6MooqCA3PR8YcXjVQNKK8ywURrVbqZ2Pc7F1akgGVPMAjhkjFgjGrRNjFTN",
  "key24": "Z1U3g2Cd9Ldbtv7GZmcMrQQXSLZM7t4KCGbB6cF4aBkQNciTb27kmVkZD6MVE1FBTW9D5n3trKbPV3t8Y84EaXo",
  "key25": "5nMJVwZCab3wDpWSQcXnpSktq6TbBbpRj9PrvN9uh4ngTKY66Kjw7CLM9p3HSX49EBbLVDyfWJPKvUApw3ntvRpk",
  "key26": "4ZzU7nzMy9ih8vHUmnKYezC1wgBgm8N3SLM47gCGKAjuZkqnJY9XZXDjoJm6bSBzuqbScUkSG9VH1xve9uqWxMQk",
  "key27": "3spqmmPcQ2Ekh2kJkFdxFu8sG5A5H6iCzJSTyHx69HwZHedcsfDEapqRkjNaVaMHKoprqU3HpWroQBjQJyXkfW7W",
  "key28": "4trNP51MMq4snerHSkanyJZmvpLK7RjZ8KR9DmACz5hD1vequ58J96DQhNNXn9b9Yn6TJa6i9CSPh9EohnP6DVKE",
  "key29": "4S9N4EyhYVJbnf2qDo4fbhzVZ2h19R4EULiJe9cMC88Py9M4E1uzHZ4kgwG3pabqWL4xaqdtPdPiRkLzbWXHG3RH",
  "key30": "5cqLuXsCxbXULjTtWdPGj434er3SQ1LtQjWHTvgyBnuVDwVmzKXR3prXXCLixBskS7cZjxfuaqEHyHruqRibzzT5",
  "key31": "2TM1m1K9a9bes59SgSqEfFowdFLHuy7PwswnP6sEt5YCxC5RHvbjjqtMqNMB7zd8hC2VG5zzimUMaCXTn9s3iqpX",
  "key32": "2N8Gp2cVRWf9nLuyKRpsENztvm99toQwfUvfGQpg5mwvo8gkwx9TW3ch5nSoEbpAMyXehggYbgwyJjVg8mrk4MwN",
  "key33": "5FjxJtHVkviBm7Kjb52Sr6qdgbr4vuXLPBZbugp6vkZ8pWZP9cJyXxMdMqQfj7a9ndCXfpa2i8PQFJWY3ChDeRfA",
  "key34": "2J6EJtcC6zhTWdFXDyLoCcGVsPCfupC3sX69yPonvnBMuhDxtgUgD6RPDP4PBE999LaMDLmoE4tT6Dyh51x7WvZ3",
  "key35": "4tQaTaSQJvf7LaqNHHra93FBkEnPrfVdU9g47xDY3CXWpVzcprXP2Pmq1kCKB7ApC6pafkgAy5KFwQVbqSU96cmw",
  "key36": "41MKEwQF6gxX18nDciP2DiisdswE492qzUkVnCP2ZTAtvWyykUsL5ZVuuZABtEZyx3XvuQPygPfjL66G8HGMzHpi"
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
