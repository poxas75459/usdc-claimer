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
    "3AtX2SUeZdTqHuq4aUK9zt6p6RVTLueK2cSzpcSyK3Mos98mDb4meBT4Qwf1jRGVDxGR5Ukq7ARBpWQ9Ap3i53Bq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VrnDRTt7M1VWwZMU1Woi9tKkGxc46jGzRsYUg3BUUFFDDt4ocPpTWwnga9PbFSQnWQMpajGPjRxG9t4xLfBPSsn",
  "key1": "5pstyvxHzDV2r3jbswpbZvk1zM6G3GNDUgdjs9hpsVaFGWQChcCUs2wm8FBYjsCFus92QHcRiJVqRXxTfy9EDiwq",
  "key2": "4iLhYTr25yc5p7y9KbXjs56ENSvCMMaDr3JvocAKbt7eRr2ZcEDjqFHaUWwJH89oEmvGEXabY7ungwiatsmNBtQr",
  "key3": "u3KsAg5ng5ACioUANkGU54DHJtFeHcigewZRTpocen8fkiBE6RT4kqLasGruAewWVRMUNZnhGN2bx9xuzWmDT5X",
  "key4": "YKneRPSJsf8FmLqQ1Njm6Zni78hSdg3qFM1zaNSv4gMQns8U34aoEo9RguwvTyHynGbcUgCmHRbtEQ1vXVkEKR1",
  "key5": "AYEFdjy61hTv6dqrQoyjji54kTYSUp34yhMkSW617gb7bCHXEkNYAg17nNMnsDXjEE3poaG4g37KUeywCUWGAcp",
  "key6": "2C9YDJzfmba55beF3uVtNFXVeDh7nUzjjbL28P2ieKPnZSXuaAhNEzac4qwdKXKoNChyjn1gtzJQCZhgpCnETSTE",
  "key7": "4peXTZodN1udW5rRSATWkvKknp7YcC2jzDkCcH2HAGswfKSJZxwcGV6osCgA1qLhegxrRFLigunKQAeNCrjwJ1Yi",
  "key8": "5BDkJoV29dwZaKCVaHK4TZXvsHgh2WY7LrKFiBSSQDwWBeR5pDoFs9TyCKqWC9uWGCGF4wKNmbW2UeWwrf9a96PY",
  "key9": "3ZGRiyRe1V8gLQNTkZdkUNpVahxQ7tSu3wbj681iESNndwFGPDubqeLFVBvCkWP8sBgknJp6E5c4TaDfAQHPygxr",
  "key10": "3yDLqLwm9VbcseGUXKAvinnba5V7AA1sGi36Tbui4FzCQ1GeidapbkVFousgSYSTWYS6dGsTE6G4E6rnGKX7DHVJ",
  "key11": "5eEpMEoyeFVKh3vd4DN5w6k2jfkULixNR3deosv1KSgWgqPmMfqZprTe8KX1Vv5F2rG2DYhPtDdAaHwfUC1wM4o6",
  "key12": "3LxkjNCchNqzhkcZjhbpCLfX5ypPTELYm98aEbchwBSgFGFm77i8yRHrLW8FFxik9q9MLaiAxHLrdgLytgGDvGBa",
  "key13": "5rQbUuUzpPJbt9BQXhs2zcDEeCn7AwnBFYQniMmv6wNYcGN7warMLSJp5LoxWSQoBswfMEoAjKE47wNaXqkZmhme",
  "key14": "4Cud4gShzM6zF4uTupXgzVMAfHoazeoFPEZ3fz71f3tagd4N2usr4obP6rtSRKB45TR5a1dhL7YaEwSEcZ9Z5xj3",
  "key15": "2JZvv3k5hcEbbs1EcwxvUPAMo71xnkLHtvcCwAoQxhoo6QY2ph1RzXajKfKd9HJqhzQCm7MJPFZXtKFSKoT9uQz",
  "key16": "5C4223hBVbqbsKHk7zs1cTPHgUWLszVc2nPpAM6zPTcibh3qjf6y2mVKq6Ap5GHCMbo3PZP75L4KeeaLRx7NkC6h",
  "key17": "Av3ZjzzZkayjL5vBd4CuzhhjLJ5znijbJY2Me5Ac179TwGmNcn3iVafT75jgNzv4FuM68Xho5NANdXe7zkMviQu",
  "key18": "29VtvUHQ7J5CmhGMsiJEYWDeSFjfY8WT6RDUfyfVidkcU5bQ5BpMwNwU4nmfpMLUJwaKkEiGvpYofr3ePq6xpebj",
  "key19": "3cre5kGEoRpY5Vr6aQtXi3ope2ZSbGnDeVHZwwbdE5x4neYwY4NfJNXxE2167nU5wM7ojSer3zun3dQ555ucQHRS",
  "key20": "5ibFzVWB8Uqzog4tH8zMQJ63cjQpeEwsQS27ND3HdRovPzP4q74hTsBpQSLs4deUN5DEEgWFjtSaamyqPUhZMCoP",
  "key21": "oYdCuhfENrZypmhWyHbGKQw3Y6LqLdXjekJhkhnxTByc69P9xKCs8NPDpcZSWJRZzUoX31p7bAi2qTp2sHdmNX6",
  "key22": "4cH7p9tLtpYAT9ETPGhjBenUzN4SdsTRiG7AUeRZfPof3pkT7jUECK8LrrX9oK8APypn8BsN4tx1BgTHTh73n4GE",
  "key23": "3oMEACpiddPRViA6hsiTVRiXQiGUiZKfgcTPoZKWC1ZRQGWa8jZBU7jQGCyqZqxqtjYhMDFdyY1UtHSG89EVEjTt",
  "key24": "3eGmDsKVHeh5dNrUWFL7HGMg2ZigTYMkwjAmPTLAE2BuFX9xeCU4yKSFBoAoggUgnAzKBrzhqvrD2Xw9y3oF3Cf2",
  "key25": "nSeiYxF4a7TmVKTdncqFVUVHXJGNpXZc7gXfe5Y5ESL48xCzN5b7WuBfFJCVvwe8y7WwD4F3w6Dak6BUpNi9pUm",
  "key26": "2UbfJmDL144drnyox1SZDx6Vk8QiKbysgiMV6tR6M4eKjUxvDpHtY5iSEnQdCcvqEz8yRoKnCi4J3xXYchp95jJq",
  "key27": "4ZPkCTP1gQupZK9sLYXWmgud7KMUVTcxeYBkrgP1x8twCKbjwdweqMcAtE5vfedhC8yoWTWX7rR94Tm71LpL8NJk",
  "key28": "5dpT3j8ZvZZ3BjRY2R6azVAUpXe7RoHhwpknp15HqhWUdLMKNeQTsx5cvgzTM1Rk9dRD1sryi5Q6q3V3g9Z5pHYM",
  "key29": "2QAfXS4mJna3hBjRDVxK8iSUMAFDuKfkdVpQXoURB7YD78Lbbzez74dRuiX84qMWfd1Gsy9Sd6JGCC6nfGzBDZ3p",
  "key30": "5bJRrJbETBychV9gmmtetMvagRXoJ5rkkXMjUTjsTszJSMDhegqMBoj3obZiRgQmnVZ96PHNmnV5MWhbrTafv9X3",
  "key31": "661bSEHYimLgx58MFMruUj68dN9h9ukEziQjefN8Gh5a1y5UgfrMcw3BEt98nwMhu64Qs9RUCJ8cJvvTnW7YzZAW",
  "key32": "35jqopXyhj2FJcHG2rPRx4gWmUiraNnbD8G9n9KW5zpcfcZD1QFvWhu8SUMoVjFgVntg3Af3wMW3GjKZph4r7YjL",
  "key33": "26rKWDRfuRx79CsCXfzHi2HYgunFDR5rUAupj3SWq2WduGYJX8RABsp9h4CD96Ev8kUWzH8d55v9dtSMJsBjgPPu",
  "key34": "3udDa9RPPnQeC6WFYM6rtwabENzeY3VXFwbrPLKABLHWXx973kK2y5Y8Pp1J9AJXr1kJpNKivQ8DT57TQM2473cy",
  "key35": "ugWrmtcaHY6fCFDVRU2CKx2TWW4utAu95HAvZ7cJHAUozYPMYbFhbqyMPtA6zqM8AXEo3Q9RmPP7eB5UH1SVSGp",
  "key36": "2HpsEx2CtCZDB8SeJYnn4Kb64pdq97EVKRK7MyAspXNyW3wzzkiMtT6Dt8RFo6CWSRWuuzGx9VvX22esgyhZcETj",
  "key37": "4v7y5AFdfSLDEsEgShqcmuKE9eSD1BSQ8dgcBcxbxf4PA9W5HaxPZYeJNBgU4AGyx1mo7JkKXK69QTWsPiistMPF"
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
