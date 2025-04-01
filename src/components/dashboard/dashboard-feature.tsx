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
    "5KNzX3RQ8KG8uAfEG3d6fAaihg9eGXcAaiotCm9XAsy6kPQCLMjqz9Qmqav2Nkq7XCWk6wQq5pbzDg5Fqy25s2bF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yo9moHYq7UTUcduCHjPpCJRW2FfPQKhce81c9nTbEyYBPv53BvSyF6CS3hCM6WW6UXHDSYEaWqW4Ft61UsrfAaG",
  "key1": "4dhBepuVC63mKhkcxsj2Q27aSv7paWGVa9EF3zhCNPSHKFvQGhgjN4VgnEJA847RbFkGtkqgSoGCpsn6khL24oFa",
  "key2": "2fmuCiwMgJwAYvtgntzdRcVj7kjAKotVPYja4LCuvcFQ2M5Ju5q2p5gCfYS2gm7cDTNtmT4q71VjSyqaLQTh2rWY",
  "key3": "3bbWc7gRcFaDetFMU6vMmF1E4Z9QNpXop99tVtBpHB5mzUWyNd9suktGW2JXckG3q5KGL7Eo46oeiPKfgFrwqwam",
  "key4": "5VMXfSo8xzgp9cJ3km7tEVHcEKLxQhakbUt1z28vtkb6NAKhpJ6R61u2qdHDztAQYYX52fzS78AYXfxkLJLPoM9y",
  "key5": "42DDVSdUhAZnuAtuPAQoJ7fGRC5T9n9YBAtdwLje5vcNH4y88TvQnF5VrLKZLyh8zRkWS3LkfcsLHhjiDBaVG9yG",
  "key6": "2TFsSnfwANfbYcykhmqbFxzNGgaz46Su7XdnS13jRJGXk8FtRKi8sLTGJ9NdkbkrWkpbkEVMbA35gqtF7mSgusb7",
  "key7": "65mKv2JE9zCM6At6S6DFmiVFag1cW2eEpofyJ3CeeVLBc4Nqdxw7pRNfySB3Co9SUnSMFcnityHNbSUvheaRmjpw",
  "key8": "34dLdMCKa9PATxgaWSVEoJjgbqxUehHac1JxzZUuUrSTT3GruYMT4nSWFLCuihGWQqWQSx49icJYbTXo5C1PUEJZ",
  "key9": "3HsUJ7fNtsdBucbZJ6GkpmUvU2ymw7Umx8dGGs1ruAxsm21tE7fCRLk1y8EvcPnh4SpjEQzsrwCgEQtLe4tsgYKq",
  "key10": "2LRzngkx6URbgSedvuYhr25cQokVF6M8PPPq5TWxtE2ThJ5kh8PdKRq7D3Z4V1yCa4Uc488ASjE5RFLvCtrqvdS8",
  "key11": "4KQk7kUeA7465pPyYZ4x8g7i9e4L6JcCrfzCGxEVEfRiPebyAnCfH6f4gK4uLrL4xkTGdTrUv24AhE9LBzwzNGKh",
  "key12": "YwxChuPdrB4AuDLaojUXNjzx6BBcfnRZt2Sq8e9LA3PGYKtWc1PV8iGiMc4kXRDU6QDR74HBvjjnaqr8hvYcD6q",
  "key13": "4xAxeVTD5YPB6KCxtJG88zbm8os6M1qSCNDYQnYahWgmrtm9ZkRwaBtFmzRqF3Q7b4epmCgUuXevVmiByesgGsuM",
  "key14": "2ZMuJCiUQj8qTNL1FGvpAim9hP5tBsTQCyKEbd47mSW2R34kmwjSrXLEGZFjsMs8K4X1Xg5ftbz8dmrVTBjmjeQg",
  "key15": "3fmu29tz2q29Qk6X79Y5ee156YcEdZgHWiYt9oDgSF3ZM2R6zUnuysv4TQxqH692E6iox7VraKVY5QXgaYYqs7eF",
  "key16": "2M7Vc2BRhdCiEidZFPN6tP1XDtvADPA8zJkvC2xfXAUcxBugNfXu7uACYN4eGaVHq7FPHb5ZKrKx7y7cGXX1iaK",
  "key17": "453dt31tii8c1kJz5N8432UobpA6SyXxUn83mKyw2a2aKXZkXQc8rWLMz3GSCBNjj1MyKNQmHhxossE4VNr2NCeH",
  "key18": "epUXCjattaKn2EQK8PCDS5TnvrJ23SXrA8KYUukdxDwCwWBoDR95aSEKbfU5gcodtHPg822p1LviaB5rQaVkRuC",
  "key19": "PRA4Vxpvzy4amEqeXmgochd6BkUQg5zhGBStEsU5MQLp2r1fKT1y9ot8Zmx3hMCEPmikCGgfFC9q7vsakvkGoXa",
  "key20": "FfHHazua4vqcXoUjotkXYqNuT5wHZzw8L6efvmhHZCQjU7ZhAK2n6Y95d5V431BzGzGyxHqLBRsuavetym4Vhqb",
  "key21": "ufsMg3K6ym7p71TQfSTDRZK9VireuhsccjZEXYdjVSdvdRM5cEkxU5trjqHrtQtbtwcar5fQmC26eK7rWydfyDr",
  "key22": "KrjaQgzigyBAwCzZkfk2u4D3PZh7HteNbnLERBtUCjaYTGB1EX5oJaWonLA5VB647mExcmcRuJucdHi2h8rKMjq",
  "key23": "TzessapA2fg6KXHPPW3nbC7zbBL77TjCkJaYRzNF7tnSRUZwGpvj4RyDncq76tWsDcJEMjD87gjCGcZ8E2PBXS1",
  "key24": "4TB2bnsTaFKjKxv8jjEb9mvcfB3SnbEj2PaM5WwydYGVi4qSWjZPyvFio1UimS66VwjramWFESPNjV3AyRb1UA4Q",
  "key25": "356fHWAMUD8z2NC1uJPPo5zJP6khaZ53Fa9v4h1Vukj97DmyBU1Lyr5gUuarXcev3wKYsctBtEzPMuT5U7x47mZY",
  "key26": "48JMJGTYm9DyQR41kyEagSCzRAyfMfD3xSKC7P1DtXrHdxRrNH6WUjrT6HH6Y19D3yaryMeTMq9Zk95Wa2wiixzb",
  "key27": "NmDP7q7saU1ceXGPDvFZqbpbm5oC1Ww33NLNfde8QfZVzJetXbiCSy2PXUd41zanFpxz1dZZig1p2296oxHC8kc",
  "key28": "3cV7k8JTkMSCSpgPz45cmLE6QG2kkAz6c8Gbb1RsST8HA8X7uqaMJhUXY71qiqyCBQZLsqUSgMUWFYSV5BD5aDXV",
  "key29": "4cT7DPSRzYf5senkFenrNrZTh7xbjqXxi8GSAnQnthcC5fBNerxHdjZNa5JLTukZGECXSRJ6DJYtpprCxSap9rSq"
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
