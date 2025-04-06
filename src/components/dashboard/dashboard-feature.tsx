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
    "266nVhRaUgcnkL5MUNM6WDb7EG49Ny7HrdSQFLKkKwcmHtnVm9pdJykafJPfsMVvKJMyP75HruEXZ8Efxmbnj6xu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SdeedV6wfyHGfuNCFfumt1eGSxygHj9n2M6MQTp5YxpyFpLjDa9648SBeXHjcvmF9mLW1ohf21Upb4mRSw3VU8t",
  "key1": "s76rQoHZbcAcyVd56S9vqVL8v8kNHhfRqZ5c1jq3xpC1RoMHjNHjiTRjyDw7wcKUpBUpC3jhL9QaAtx4nVjThyH",
  "key2": "2GaiRBCvqtAw4hStXqoLHGtbo8ukWTnM2UeLYbMThNbQrhEFPfaMCHjTSw3VBQsch2FubfuVhzRyHUCUyWaYnX3F",
  "key3": "2VAtDBxiTmUKprhtCJk6PuvFcsUCqXJDs1eKEb5vtkgRGimZLUJWGHqX6B2CPFYDL98LvWY9qwSFXru9rursgqxL",
  "key4": "49PJqYv969V1RUYm8pcAafZEa9j6rAtP6T8JG9kPrWbqgrg1uGsRBncrUJRfvZnzS4TmX7C1RcaWhMLgSLa7c5uk",
  "key5": "5KbzQk68vNFWwkynqae5iHst8Kus2k7Szp4EkfbTGDRop9PixeuFSS7FYV1v87obtJ5xmiUHgu4A2KGjMWSeYcmw",
  "key6": "4dHhc4C4y51vd3VVTR2w3okNvzDWT1LRZzPaFvvGjLm6hb2gk3YJs5psQfVci3ceycjZyWbBseyqAgKkYCAESCSH",
  "key7": "3DEQ6ifmNx52D4wioaviG572GiaJrPuxM6jfzVPPWS4cfLPohivULA3sP7HPiWW3vacJDZKjuRXFs7Kyv2Sckas4",
  "key8": "YAPTwyZ5BsVT7kbPqnznWeucgBK7u2zeKZiCuqtn5Zh3earanc59P5e21bvWynv9KfA4rcisLcsG9jNGdrFPKvX",
  "key9": "4nGdj5GrN6ncrTqeZo72RbfZjAmKtx7evUuXEcapjJBu5ysVG75SYbMa5ez2V6u9LvCNa2b54DabiCXj4LELLo5a",
  "key10": "2oNnVT2tnTCHDmi7guMPAUNzbnUjRtyiQ1iK5F7JkEMBfeJS4BqhQt6knk8Rouye2RSP8ZG8cno1LTxzNDgq2Kjz",
  "key11": "3KJXuxH5qYtAdN7SFLkefXjfeC33Hz9NnjiC9Ju71RJw54G7KAnfWiDu5sRhTmUKWGrzaJ1GcRnZsBZBBir2cw99",
  "key12": "5j5oA81SBiBJ7JinBNXcCG6XNAZf1C9aHfckXYPSv3FKVafPYX3wVzozEvu1stG4p853G5GrYzAmTP37Sg87uS8U",
  "key13": "58U6z17irhHnMrrbbstCRY2hvBfma8F2HnrK3ET6CGbHxViJP5x9UiLKFeGVJNjZaWQ5Lfph7KqhFBzKSnqDWgQR",
  "key14": "ug9YQeQDm9vBTDqCc9NUqtTYikNhNtzvVTr4cf9zwDyje9bRifPwHt8vHwqV2jMtbTH9NRi67dr42NzyCq47H9h",
  "key15": "5MaUtNEanabEFvnudacQk6vd8W68X25Bh8TB2U1TCGcMqnvGVP6yw4h5B4cEbZPVDYP78aUxpAChf5W8h1R4MmF1",
  "key16": "4E6yF2nxnkZ2RY7QHWwiTZeZoqjZPmtwJh4TqBJTGSSsD6eKmRXtGt9hCHbxRGaSp7wywsfMT7U3Hgysc5ZcmFFz",
  "key17": "9F2sHKwYNW5nnPUxUngQVeCSmCjwQTXyp5Md1rP6Yuany5f7c1n5P1P67oDEAhazoLRttwCw6mUW3zJ72m1WU3B",
  "key18": "26Vm7Af8mgxMgaZshygFtMTFu2Hw6taxnfbkYrhHCn93oaPFkRTAiiUjHZWpDUwhR79YX2dPrs5ymgBPpktvAGy6",
  "key19": "2i2Qf7jdfUXrYnqCFAHncNdXkNJ2wEgBc937WeFpoMV97V2WCYz4LWFk69TCq9zwynrngJ4cEG8kHfSc9G2QGtNz",
  "key20": "3Wqf1An9MKeKYWrDE1xcDDeQ61UXiJat6MYgALkhH2M2YvFbR9fAP1UBnGdwvoAGcUUPfbQRKxH897GLQsBebxBr",
  "key21": "2nULmmS5THAvcsLncJxR1ZmrD3mLHQgYBwVnoPdJbNBfthPNyDgaCCZch7j6dPFKgzrNrV5PXtWvhFDFXw9zRuGC",
  "key22": "5mcjqbtVzhxSwb4xg7KQwrK9e8XGmvZyxfipzvSFFSN2dh8DsHVPAkevu5HUQrMH7Rpb2Hs828qvCKh6sQZAxSyU",
  "key23": "3aZR9ZvcTGPACFRnM2Jfyw4VaTeJ3j8XAa3opUTuKVsNspcfvghLqJ6s6ComheLxVmPpt3Behaps3Sj9FxKDU24n",
  "key24": "2TN4FHxAXA7BGevQLGZ87HZgKP8WMskM1GV94f5CXS8FXiGFLe5QrcBPXSwiVjBC3Gr8c7Dqz3XveFpNutnxncWx",
  "key25": "4kHxwDWYhvwLTj3pzvVHm5H8uvTv87vH72VwpXY7zMjtxVeKvtCNHh6jZeRE2MfgmaWuYJ1WFqyeBDRm5KesAPNT",
  "key26": "2akhpXYUSVboWsdjnwk2YsmzdL45YrPpJgqmy1inoQqBQFuwSUp34BDdZEvWtec2JYJfkkoFbsnxJGWGY7oETkGE",
  "key27": "5kyHmC9F5QX6DUGHcdDd2JbJ2LVEkwRoSL2dk5fQ4LhkqLCiHv2ihZV93N8avw8Dceo6bake7UBVaXWh8ffUbFcB",
  "key28": "Qz1SyioymeyXNc7Xikrrde8NWDG3rSe3q8KUGYbqGEea8M5ddCy5bMhysvA7ZpMSLSj74uz2oP2nHrLpuqYjftr",
  "key29": "3zXxrR3gWMFzGAMmpJLCiQcjyjAL1ZpHcnHfKkomxAL5sXNKYrR6VtSdJJB5X7JCJMqttGJeC6khuM3HpVSsUpEK",
  "key30": "5yKuCCC32ggL3taMrULJGcAvocJcyU58ZeMLST4bcUH6MTDdPzLdmRqEw3k45rBcfLtZuwS6yjMWWBrD1nNYmPqZ",
  "key31": "2EtCMKtcvFWKf499d9qsjstf6q31Xvm35nDV34kfa9YXvQdHowQ4zdu3fvq1t18uenNp32eYMbdbvTN8Si1PocN2"
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
