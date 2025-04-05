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
    "67Q7vRhm8yZNLtb8ULYKE7GsViNpCYVDG27qSUt3maamS9cwshAM8niWKM7zSduRS77Mn6KzkaxGLHhnvsfsnxJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a3JNYSVYrZytCSKN6qwPDXkqxhv42xUh8Tx2wYgaKhNDGZxDT76GQHjPsCMw4yYxyF9rjQULvpGNsQtuBj7eooT",
  "key1": "4FfWuWtYcQN8YCrBfLHJDkdNvr7mGF4R3RmpNHxPC9YGd95AqGuhaL64XYu7cy7T4MpL18Lhejz8LRKKCPVcvUQK",
  "key2": "2cUi22Ek2QAGNbS4kkz2vmZcu3iDxRRTAX2U4NU6Uz8fLDCps2ZY8ZX4u7Jv4eLu6daDpCFy1jvyQddCFCgYKise",
  "key3": "3GXyom4rQNw7PGUicLc8dpD843Exc7hHAFTCghbimyLfToZJmEX4hhQzYfVJDGFkHMDYUWpmVaVVT74Wom8Np3sy",
  "key4": "2MwyiFVEUQAzjZcsVksncLQwMoqric9xgPHvwMxycJx1T6oPaMPgNUYP75D63fr5R4GrZpMoPbU7FiBDT6eqehXi",
  "key5": "3FTuQuHJaXPCKLorLbkpeS4qQEHgA5mKzUSdMBN8yHukVnQSgouSMM4hNWwJJ4d63maACfBDq22tmpPEgj1R8haa",
  "key6": "2BgexdvCQzFrYwcYebYXwoKCN2G7hSzLCj1q6yB4CimoLMr1XaFgDUX3A9AzieRswsu9pZD456gX1XX9mwP9i2w7",
  "key7": "NpyHPwhDe6JVe9mQaJgsAvXBk4D1KUzufD6bLKaost4trZB99RyeW8nA66oeRPFidkc9Dz3BRkHj3Sh6g1sFbUH",
  "key8": "3D6iX8dHFdUqTQUzhyk5EDt7EqPAet7M2zBH7TLRTyZznV4LGekBcAqD8xwiaNCFWKJdzi3uRtEJSQqJqryb515r",
  "key9": "652uxk1qVMjzeLJWmkDdLMXy5HYQG7WVmZTbY8uQoQabwubf7sLGpGWhkGpceugRJ1dAMdKF2J2JLT2QUaPUW9xD",
  "key10": "4pyQMuuVE2ao4vMunsFe6Uo8CZPxJ1QCdkyeqDgE9SpdLciJjNnEZbFgcozvuF2afiHzCe9MyKXWnPsPzG7ro482",
  "key11": "5G7hwHJwPAKSAHhmWgS7DBm4aEC2akTTULjfaRJhysLSQgDsLAbBEmxzNzqu2PAPfjSrTajnNuoR8DyWZ9YTQTxR",
  "key12": "4RWdNgnnesBq7bE8NsUf9MYY3jip4Np2Jv4aEHh8uPC6ZeFpybThdRG5EZvnG9Gpc86BZQMGFwJiKVHEhbZ91ifM",
  "key13": "5cAC9WY7KWhxA3bZwipaxVdVJfcpTRxjNYkS73DQQivDo4hocreQvpNW6cdCF5r9vk2eTRk5q9Z1eLezxEJ5KfhB",
  "key14": "66FH8ZQs9Ebzq6EtaHS79qzYw7jqZxZMYPReVEE98pmTH3McTUnXqTLus4xzKhpssMCbfQ32bSp9FzS3MHz1nCFZ",
  "key15": "3p5NzKmE3vfcMJd17XmSWAL2XVxeTdqyDR4cvRD6k7VeWL1zshucbYDAdTCvDZDAZeW6gKCMbmiNPoaTqiLGfR3P",
  "key16": "3Hz1RiWeUizbMGMc73tV7QEFGUjE4k9iqs8PTBPKZso2Jb4priTgXT8X6Bj55QQmrUKu3EUb996g4NGqJ9XVaaaS",
  "key17": "5jCWHQjq6GBHhUR9MW8NtAqJhmTEf6vQR2L64P9jLwcPPJBcxni5p1TBFMe1sS3yaRdkHjtnoTe9KaYAm9SKZdd5",
  "key18": "36my4oHPHpu9UP4b47GoWxyuPSYH9uFNYixMAGEptHpb45nMh4wtLH1VbbKaKmnw1gSn8k6UDZERAFGjWkemGgRU",
  "key19": "yupmBeuUD4vnVb3CBKLqGcHwkKaiCGZdbtAFBt8FEDJ4m2kCxfVgRB11eXvxmmstD1tjVHZS2XrhFLeZ64ztbxd",
  "key20": "255m1xPxR9QLkjo8oJKBcgg5E7oSkb4CqtxCDgY8NpSAtuzh7zjytgqMwfDiov6wJ29UALn7uXpfQLQs2yLa1RUN",
  "key21": "45MrjNaSyMUcjQpKcg9sQXNtLRbuLixiSLu4tQnGXaVqkwFuAP5bwTz2Xwx5Q6kfaQEYNgUnFb2jHovhKeVoGSdD",
  "key22": "64hBuejCDK1buDNYRPQaZ87GRLoABJE74ty6Kw6KgasXrZr1ijN1dZhR5dLfSh5j1gec4h89SrWVqbfihoaAB8gz",
  "key23": "Visqy2F3H6jawCNQjApGvJqyuXAWH9xaM7fbMtJofUuKPNjWHHkQRwKnD1dTFgNu5uBZ9q21WVYnVuq4gcmQQ56",
  "key24": "5ckzYfgVbzc4vwyR9ZYwMGLY8DBxQeaa73niCYZvYbrRMbYkTswCUDmfmNWkmtPACnxDfzPKiUvsdUGhn6v8MbyM",
  "key25": "gNYEEFvpE5oPRDbF32o3FGqXkALTn3UZaw8y8ruTGkJxBuNTPbkJBBvmowURGkZBHnbMatiU14fStwDfegUh5D8",
  "key26": "2YH5B5b5dehuBKtj5TniSDduaoFfGegewrJmxNAFAYNSUNXUMQ7ey7F39By9n75x7ZChwpZGggjupPNd9xjqpGJL",
  "key27": "2zDSW7EPP9qzHSh5nkBhMyoL8zmUbqEta5zP1mj4tyHpKMyZvKArWRgiAVudmACZ62tbpXhbggjf7NLUUBfQ3uj2",
  "key28": "2TvEi6FhDn1VnQ3uoHzbAjHeY6nqreURUXH5kxwUjYkC48LkujRVt6W2ARmgGzpbAxV2QnkwxWa3v1Ms86ZaFQxq",
  "key29": "SNL3v9SdHV3cB9sEC5ytJ9uteQgJXSF3RMyWUBoJVK7ehjvUYbiXCsNoDwCdC24Vgqa1vH3ekh2rJ3cTHtgTqeb",
  "key30": "dFXRf2TXTPRtwC2dGBChgyvJ536D69roU2bmYRoEGDGSLbfi3TzYvrZ78giuSZ4Ld89npZwPpHYgWu1ShSivWW3",
  "key31": "2REoYhcEnxt6h11mKYbriFuFWu4bKXXqqow5U8VKLfhPsM5KGCE9wbozqkajSGWKqMYXGhxYfgeW4exBjdvaVHUQ",
  "key32": "5P8vcBwQSYoeb31StP6Fw1RqgGMVr4wuiJ3vxJ62AKN5uGt3J522o6QEx68vLs1ZvHsxXaXUJTqzwSySTnCQrDAk",
  "key33": "26XEYFizNejh8XMbVUZZgtY6RPA1y8qHDupnVwLEfb7aThFBHBEJRCGimxDnoZG62AAaKCDA7oWsS3YpQCyCByVa",
  "key34": "4kJ4GD9p8RA6VvyfbZwQMM9pJ7p7cymf9cWTw9PFh4ZYwJmvWeAGMihF4PKJFiwY7Wa79zoiSoHa2DW8MUgg7itd",
  "key35": "2ymWEiKKQcfVSiXJsmaEduMYHMj2BZ3pKSgmFc21rp31EDifThXbzVRdu2ywXqoewFifDGDAEkySd32WHbPiV89m",
  "key36": "qZK9pPXKM56CfSMr3H9gEDy7jJNuMKg8xLSr74QCV6sgjGckcAz4zDg4KsLdytq699CPFDVgLU5G1h1vVCtPr7j"
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
