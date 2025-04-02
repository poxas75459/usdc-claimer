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
    "3mMsyR3pVv9SLsoQFwrGLYWjt1DqbjRVjirFpKiykNXuWTTmu3At19yice2aLJ1E8KwTamzyRKW5w9b8EtXPcEy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66RsD53915i2jYjrt9Xd6kLJNtGhJfYF9sWL5GiapnMVb2aKzPPEDYySF6yMZBgkvq4yMibfuxyopti3Db2Qc2Br",
  "key1": "2hSN54cNLMyWbqgWNCGpuW2FqHpwq7F6Jgu2yz7HkFtrekC6KZR9niVDksygN2EibNQeJnVBcQubBQ8sCehiyip9",
  "key2": "4cGNLkFLMnUkUDXjrctZt5SaHszzWZUpgWWn9L3RqErBRXoCkDfjW9gqrXQDV88EUpULVwzmrjhe4t7Y6CAGHaqd",
  "key3": "5EPga3GedArkEXQiJdSufAePdogiCr7eBJ7uroQG9coFLW3ENuRqE7pVDecW75fRiyLgGjEYN1ePuvQw8BH6riHA",
  "key4": "5n2uGsmV64UUuTPmXSDQCAuV6y7HJtLuiYbV295UhcDpNQfvNhrWgiQSa3Us6EM5FHKDTSEnwqFcjWwVaZFJY74A",
  "key5": "5H6T5ijsBU1bN3oYPgDWJmLaHvjKe2oooRvdLF1xv7HDwYkpkTeD5xPyinnNtBqpcLhCDzYkZxztQF53J3w4fZkz",
  "key6": "28JVEacsxpftie5WeTY8GLX2W8KuCzbMcKerNEoe7U1g5PB28nkyTTxqgiBpfaTn1euFRZdV4ep946V2DfVKck65",
  "key7": "5qtBgSN4bnCSwY15sXcU8eFzjHvg86bo6cNtUAYATCKgybaT2pfrwwwRwZNsrHYBkfCjcXRQYgTkzn2hyhcxPb5Y",
  "key8": "4YVvDLyFv8UMkbPBTm3ZbHFTomar2tG7y4aHRgNniP5EzofrfP6yK2HwVKufm7MaY51WjQpHuXNitzSaHv5enjPW",
  "key9": "39YHtFLYrAC58sZcw8ThQinbaQKKo4t42xvdoPLuXEieuRQToh2j9EvU8CjB5tQzhTXxnxg87gJWLmcNc1n8HFnN",
  "key10": "2Jb2fdsLBy7NhTYW5xm8Ki4JKsdqGJTXx7UizVAdJmwknSHkXktyoEPjKmEd71vccyDDPsnytnpHK22xYaAREh66",
  "key11": "F7TJQnHXvGAs2iUCVvxUkDBFgmAg4WWYkpee8h7DzsYNitkGAcyHMBzBMUvhD1ZL7Zu8xJzAt5WPGP5V1ugtisz",
  "key12": "3rL1PdXRhJAqE7T31bJB4MHgNC2Jiamjy23sMA9XQpY1fUZFbriHHivhRKTGsq7sQVMwExUWoJjz7bURw5TLthSc",
  "key13": "3iFVnJMjfBqAGUkWcq2TpmwA93KCtUtMEPV92ZCK8KqQypPfHDYDPyhXEk1N8coraVnEYXpsjfPBaocaNhZWERE7",
  "key14": "66H42wYkonKStppfoovfY8R812YR6A3gCMyR8HeCbt8RDzbDEod3vd9x8NXXoU3cTkUuvfQdSpDRaCRh7XWpArNS",
  "key15": "2SLAT3rhjMLPX83Dknb3FEcUiYGLZxx34FvjqTe8Uuaf1MUh3iafvkGbwSedcFNKPadUrJbuuCqF5m8gQ9qHFM2h",
  "key16": "2VJRoJzkkZHciHwpwrU9skgB6K2ba6hZ3ymzMZ31QiDTJaewdb5guD2qoX3L3jxu8RKaS5TdmDCTQC5ckMidaqoD",
  "key17": "kM63DS6H2hbzrey3vDppDH2tBJajaMTog2W5xoMmTepquRRNkWuwkZRKuvQGVz9RY5Hs39WdUwaMNidPoukYejM",
  "key18": "5HMvApXdBrNBa7gxhG6petZPUgrUFDk7QuC8y2YAoNXqrFhCExPiaBxufg9iGYph7UyYxNN3Gij3Ju3KBtYn2Dkr",
  "key19": "9keXfJwq9dgT4TdirpQeRrF3GSohgYYxdLRPwsX6PwP7VcA7ruStyqYAPdNhhvovCGRjQBUPBLfW83JS7Vp9kkn",
  "key20": "JzimaEKe3VkoKzScUxfsSnip74QtqfDcV9b7oBMCmAZd9qrABvxrEcYZViYMKWUma9WXegSJDzDk4ZjpaqoqAJC",
  "key21": "2cREkkUmfe4vNj9frqfxJApiCW9j1FtDHXnouHsKUeTbQzHucFZJvTTCmKuoRudYwNY8LTeUvvRwfXcACpeg7ws3",
  "key22": "4jD9c68KiamAq4grtRLV1hB6UuuZgmsPHgiKCLxYTJfTx7yYJMozFiABky6EQC3rUiNGsytjVXM1XAHNL6N9dmSN",
  "key23": "zjW818dKY5YXMrsWDmQwxqTni13EHFwh1HpYYUL4KMJRvCSheqFPVYv4qM9WYd6TEu2pyopM9VHJJd1skTQTrYW",
  "key24": "32tynC5Q5kczLxkLRUFfP2nikTiYQ2ca49JfxdyFeqXAEjjaLQ3yrAFUCt6tPZGKgemN2ycjFuWKNQR1NrgjfZK9",
  "key25": "2d1BRNUAcMvCD5FZLLvz9eHr3DCdHZxFp1P7wEiQmjbZPA57VmUNwjAxpFGnbFaVG4uGFvDDM9dDx96g1KJ931X7"
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
