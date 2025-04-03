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
    "4ueqgb4h2tyN2jncssdcRVL2QzZtfxiVPmZUs6zvWbUc5trUsRHyMWEe47UJSR8iBdzHhnAheHnthzXJ95s38WWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jzv3DH7zSJvunbBY4DorwCo7NeHSC6TcKEqBPV884TYmjgjauScA8bH4j1mwGzahmUauZDK8WchqbFnvf83tRjE",
  "key1": "46q4TPiGGTjm2Uaav2x6698XamBMCZi6NwjF9sRrJLs4HMuX75vuH1x7QYoMYra3VQ5RUz8zMfpxo8iq3KJMjEQg",
  "key2": "oWaCUrQYAEFpwcjtJSq3CDUf2ohyCPYmSjJg9RQ2LokvGMi25rV8XxcjcpZdy18ZwpoikApzGvzTmDuskg9GY8S",
  "key3": "2JBaHXVG6i44HijMFFRTjbF7SQxJj2Q8QzZCUHxUqzDo82K8CyoRMsE9u53KiBPkBxiQRj23esU7tE5L1RHfcRUD",
  "key4": "5Dg4DpLSmPwrw5ypQtQki6ptk7vQUa394PYENrj8beMzwWZk5tiKpKodBoND9YE4yUgnhCq2enchPTkUEJvdWJc6",
  "key5": "2fwJvEatn3AdjWnz8jbuGBEnTeNLQPhBW6scR6M4hjXPX3vJrpBQL8Hr7sEckS4qn9c5zjKAjGgmi6rDK6h6UbJ4",
  "key6": "3yXn3D6A5r6QtSoWGSPavWHRrXpuqBRM7QXDL7aw5LPY9GoVDibPesGyPkxwrzS1s8iCWbZf4eAjhm7gBjpMjiD2",
  "key7": "27YHT71GihgVHNzMqJrSt2oCtRC53v6w2RV1ae9fUrNVH77XYrcsrtkXGHq8Pznz9iACqUwhfiqgqjxFDch3T2fG",
  "key8": "zJ7C3eAiFGvFypxq3Ws22UVtXv9Bo4W8KtRW89izZ915kHdW1UYtLS1tVvpSnt6TcG1oWUu7iCZpCk6N1Ni8vEJ",
  "key9": "4zAhXYfyzh8Vnqb2Ck1oP68rcKM1V1LPgzPW9TdXoGFmv1w5w1fqeiguTGXSDgmXh69z4LaF4oiNczAJaq1rjQFS",
  "key10": "3A6AiQFV7gp9w1i3CbLu43xvHbVppEqca88347pnSnvowHaaFVgwMYtSznHjwP6g3U8KCdxrzayiihez28bXbNjw",
  "key11": "5bUJsE1fXpPo7bBySvXitx2ydnsRqjxeJ3WPiLc9qC5z3GanboJkGXeCwZ4Sdmz2UKqDWaWPDMFzo5Ft5AEpmrfc",
  "key12": "5hoAu97uPQkmx7MHG9EvCZxsMXPZuM2d5yF2tWPqzPF8GH6MoDdyNxc8SnCxdmFcTdUqtkz67rZ9hkrku1QySuQU",
  "key13": "3ux1zLk7NVvYCkQrb2rJFGvZvJKD9R4D2baXjA3Eu8Q5F7roSUxXSc7tHJa2KtC9U1oga4ygtRSLDUMbXmL5Wz8G",
  "key14": "4YQkPw7NGEscq6uTp92XcJVo39LmXsHoFtVd7s8y3oMux3uJ3LfaMydYnpk3zxmqVX4MWvQV47K1256MRHq9dmTH",
  "key15": "ECR9kHE2KGAbqSw92A7PNUZC1e3LYJKoEn14fQDkh6bg2Y14pyfadLG4dH1yBs32PxjSWrxJsW2T3F2R3GfXE3M",
  "key16": "5giMqEWR7jvYKWyUs6YaVHsLgEdaKeE7UgvsyvBUfmVH2TToUgNE9D2bSVkYHUEj7yJtx9gGruRhqZz3s6Qt5TJN",
  "key17": "3pxRNACTMKzTysassjmr2ZL84An6ab4uSx6tCs5rCP2FWG2vVafQX85AmCvKiWDTikfsBCfHyLS2J1DZRjztEJgq",
  "key18": "3VAjUMDSKbUTdtu9iLhKr2p3w3om2yXHkUNDa8wRLzNtjJWyVm1nfaG1FUqerGpMjPPowV2z8Gr7SHqrHL7RMAQv",
  "key19": "5329HPSfHPHPDwrC6EF8rgn8uha7w8AqcptVCYqsCoEg3BTNE29hFrZ4Eb1RsVb9RpMFwpaoNxci59dakiq4j98z",
  "key20": "3XK73GrbmJ6VXzB1bwcHAb41ZbSrpdZXRUTMhgWSjSt13ewrrxJWb8MzSLzMGYWitUjege5A32hppedotnEjsAt2",
  "key21": "4435wJB7677pnS9zKU4taUk55A9Ui7Y7pCFUqY6x5tPKeEBGmJZNB2T1TcPGu63gmrCHPjAunEeVph9nM32TM9Tf",
  "key22": "3wJu4m9S9JyvhydzKhbN7LMzgbamibyRtT7sotpSsopxxznmdCregPfHgNPMDn5eKSWwjBNLwhoNQkMNvmmZaPrD",
  "key23": "54zZZ6yj4QhYwWtMus78BvCeirCG4WL7Sv9dbaH7nAQ2VbT2uoioHWuw21eDuYA5idZtZ78ahpXpav2Wgr3nAkHf",
  "key24": "4bkN7cDrpGVq2h3c4Nnh3cJ1mKjhaxfAkUAnPC1rXmEYhMh5Tnd8hbkGZj1zjqG1nR8RNJR8HXLN2DS72Erjgx7o",
  "key25": "2wsG6yShS2SEibthQ3Pu7tDwxZCG531PooueH6idcSVdZWqQp8WnqUkAL1Jtpjhkprmy2GfQoWqZVPxpEm8xjL2i",
  "key26": "5RAyMS2Vk44ZHpWdUEZFdohnXRrwKA3g9SRtoLE8wxxyjLReBm7JmkXdoQAZQVrYK3xN9ANENC457zfoByHBSbZW",
  "key27": "2c4iCfqnGKGv7Uwv7ATvmRFmyXttZyG4osHtqt6W8PpYxMwwh9rquprUTYUUuJ5bmHNUZxajbMWg53q1hCgpDRQC",
  "key28": "2JSRzxXrQt4xRKtaVyS6iJ4uNwYHjoTP54mEHdXPaFYeDHn4ZfwbLc9G4bQjQSsB8t97wb12xjKYcKVehWzMTgMG",
  "key29": "4bcxtdQCVJ7JNQjAaZj4CKcWFMcrXmKCMnTV3AmZbLRw15m6pH7yK3Sk2cnPwqQC26UEJiB9cbG8WjvuCUkTjbWP",
  "key30": "3ojb5CNzGwUSd6iazzGipYKTMmGV32ASonCfipH5kvzTLWZxyQnWeGc2c1t5X48fCTmZ6iJg6yKMD7gg7Ujyecqb",
  "key31": "3RMSu2QDQFinq61duV3WyiGuaJkq53tLzvZzBG7Zs9YeQ85whj7cwoZQfaxtXbNo1eWcZdqz15yKythDqadxsM75",
  "key32": "8aLVYtjzHGkZHtNu7C9TNSKokoYsRiX8ZnbJNyfRFEZatiR8ZMEQw5EGGGJK61rGiPkunzH4YMyAZUyekbQniLZ",
  "key33": "3t2EJczcYhzffkH4NZuRcwMuzBeUAYuMB7iE9R8DSkdnBgHeYd6AZ8NCRULVspS51C5NhPdsKkokSC8zAZ1fENbr",
  "key34": "5fWepjqpzJm1rbxhaLCD4MmmGBXALA2mgTQmMkGQGp6JgtnNMbMvfbEBBEvvfjY3P6PdFpMGkLfaZn4mwa7eBp1w",
  "key35": "3LDYuTAoEwCnqiSuuNPsPJUAsJ4Xi7jWckXEReNhsCmeuMv4ZfMY9ikbqpoyWj9xgTNDQWW9EziY9XTW367rcdFo",
  "key36": "5BxwSuyoaxTHgXQbQo7hBrPKCQJgUULi1Pmc5N7YboDmUrQB3dj7F5JsrjgmD1rLq2vHLqcvd4k9mqYt2g5J6r8e",
  "key37": "2MEYkTmBfJqJHZ5nfx8dJPfpXZdqbrsCsdVmyQCAgqedL9vCZYixYgqs4GC7GmeRxwMU7y4kgAmHaEkc3GLXoTeh",
  "key38": "5VrCvFuAQ7G6TvXQT216bNNF5E6sNJsvBg6N7PrwAYA9rTP3ByiYJcBv8KPVr8HqnfyDoZCdUgFhu1qnUEg6iebc"
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
