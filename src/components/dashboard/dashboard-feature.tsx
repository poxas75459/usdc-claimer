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
    "2romC7XoRUuwKtDDA9pEoC2zBJPkM2yTw61t1eRCsL7FzicELnKGVKP5o1vk2GJGev6xSDjuD8eceT39g5ySCnRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XQKcDWzNVMSawZhJtYsQ77vmKCP9Qy5g8ygQpG3wyTRkpHtEh9yLbU7u9We7qwemkDEarbswrEPWQu9wZVJY6Vo",
  "key1": "3sCzQYWYzvGXPDFRUm8NwDFeZWEKX337MLM2fi755vC68kF8GXbFxCjCYfgnVCJEdefFAxMSmvccTmYorgcWWwFj",
  "key2": "tLk34yr3HCrwRpyvsw1Zr8f3yqzRLL5c2hfKoXFP3qfgxULcsAAY17UewG5nBWduQu1BuQ3NpHs8Erw4DXkqeYv",
  "key3": "5mcDxRD4MyXSFhBE6rQ9xJDX4hXffWsQusk4bi37dBecALk1hYfkPY3tKNX3nGxCMMvfC1vd1qqB7xXDYd7yzqsC",
  "key4": "2rvqDcBNqBe9UMUCEUGeNLUoikNDQEcondKGJuWgzsNuVaA7nU61ibsN7JBr7FDSVt7tYGaEDv9agE9hQ2ykZeR5",
  "key5": "4o3JQoqj6JNg8B3UgZQLn8ZbqBtG2baPfN3UZWVDCu6U4tEvebZgkUmukDPm8QidfSX86qoHNN8AZrmt3KHGpENJ",
  "key6": "4stnnLtzgKpT3hkiLNkxVEK9M4GgSZW49K4jw4YF6jEybCtbT1aeS93EzAG2J5cmFpA98TpUUqbBnRLu7Ng5vJak",
  "key7": "4vBZDPZEZQNfNerCYY9hfE2EYBpjZt2vZKtqDKWWSUP2vU95AvUMBP4LdZr3LJeJowfPiAF6JMuNS6AA61CiUTww",
  "key8": "273ZyMTurAXfG5CQxhczWHGa6XixuDBovnbmekbsMkK8LfzmxKn4Fgo38o8wLVD1cyozbBRaLUTMskZrs8qvcUyg",
  "key9": "2PazYm7Xp5L31e8y4o5o7khMhXnoA8mri3EnLoid6wjRKdJmuRgHQWWwdEVs2r2YhwwBG6xBGxWqymBL7DEDxZT9",
  "key10": "4FbzjA21gZX9Vrib3HyuWYHef4BddiVGD5PBnPHHYPopxC7vtZfgZb7Lq3vysHQwBoGckLNAEzPRScjfFwKjzBTn",
  "key11": "65dPS1J2S2D94mREUsiRhGXDoSWVXw5VRDL7E7wtdtpLPRTmqpeC1oezbrmKRYFJbfm6s9WkgyMggLtXfQTFy3Wo",
  "key12": "moarNo1r7hbDVHB4aRu1sApzeEcCNR7axogwLVbSAKdskHmmpUbQRPPfodLUEt3iqi9u4QLHmFUsyD1bFDVEeGH",
  "key13": "4NzF8pWCNACAcmW5aBBBTvUc7wkb7Ls8WBkZvrVTKkz1zRCFCX1k2YMEwyubbj6AxbX6oX9BKGYzxYwJjL71cU9Y",
  "key14": "2gHXgpaWJ1ke1rfaKTK1oeP7wGbJYyPGM4QFaVUTaKhJ7ZxcpeU5RCGBn4cPfLyH9XALwQbBgFfL91CAbo1beGYN",
  "key15": "2kBdEue4c1gJTZNv7MeBwTvEJVLmFeMxJtmJPGc1LEct6aXhaGmNLhsiptvbcUHdZmN7wNMN3UZrzqBtAdGedF8R",
  "key16": "4K19zYnHZuyfpZucAEun2RaHuVqZvdKf3hEyLnpHiXxzXQE6ga8DKWwasaABCPnwQMGABKSULKkp57x1bN37mxuH",
  "key17": "5zjQLBh6SuteLgAfCTJ8t6aZcjrgmVpvyUsso6ff6xKWwLLuXahtRybeA7wxWGFmdNQuQjo2ucng7a4fS9QCt3vr",
  "key18": "2dUnZrrFMLSvq4JZ5CKXRUQVf7vckkAcZizT39978HCXzbyY66EYZCkFiNXgvEJk2njQ9fwS1L3SR4c61NPKeDj4",
  "key19": "nvprJrSFUUdam427Qrv7nrnwWRkUwMB4qrcieH2PBgiqewcK6TVeEgJZbmZ9j7Z7Ra2s3HaqbYFvvXkF4vW5kSV",
  "key20": "22ndBfXs4mC6t9oeXkdHvtJuaj2X8UvrVVFRqbUKWiRE3HMNXN4tuPL8dLtetB6whTq4gn4oyrnQ3UkTE4PiyxCr",
  "key21": "4ednjVrrmQBQTxqxWZwMghruGQ9awKGMpsqo5B45fGu2aZMjZRFttuySo2YDopFGUXexBsSv3aEQ5MaxKg5AqtLt",
  "key22": "2A8k3HdvRrGXnHHVceDfzWS2k3o66PecV2jD6jihywdaHMhpFZ5Uyj8253oKJViN5nyEZd9bFfmyCiSrG9vigQbK",
  "key23": "3BV4ytN33cw62Qn82b9rNQjb5yjW4p1VLJvTZeknepEYXGsJd3twqTkgiFCowPn4Hy7nXjzuhXBVuBsvxpbsMYZW",
  "key24": "5FqQGcZDatU334HcvhRyHFzA42WQS29N7JLbdHW1MkzfjhMPfCDEFuw2C34EtjEWJ3zhATRnMwpPL2vuEEoBbiGR",
  "key25": "3gGcMKAw1CV9YMTheqvAcZaVbP4hjcr9Z24YJn69Qz89k2JhaK15YUUoMgZojK6nXH1kto9oSxDYxsuV9BPEKK6N",
  "key26": "4E4xEgg5Cf3CkNtmsyzHcF4ZbaL6hBX5hXt9vfgAsZLRaePjE5zJ7XRNGDiHCz3mFLbCPot98mmmzY53uEY1JfyV",
  "key27": "5AmefSTvUEhfJH7g1YWiTEWftoMTPTmW3Y3LxQnhFtauMyiiYRa2WW4C3gKDHCowtTXw2W3ALUd5KkiMNKHpvLrM",
  "key28": "cPbpcYJjYq9XLBRf2pTMu158wBivgFb7yGty46DJcKu7whZXZ8mEAnGat5RQY2zCSYhSYtTWQ23DFjwig9euuFQ"
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
