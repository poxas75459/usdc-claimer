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
    "5C2DgX1V2RmRbhkm4xNTmwmbBa9utWSDQobwzqTU8xmCdWJtGpcDTJFaJA6C6WB6gvhHx6TCbBUkv4eZDYmEHWBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GMecjKEoENJ32hVSCPiTh7AqhmjzbgBjTSBsYmyihXbPnYdMfsNCPWwTGMZkNaB42XDpqnmgysqzodQBuKEFBc9",
  "key1": "4KV4vnWTxcbpjA8UwzyrW4mTLeX6HFxssF6rn1951FFvS4WU6AtDRXx4d7CTyhkeFouBDXq76DTPaJmhTY8mt31Z",
  "key2": "B6DwSKvfwc56MqpEx9BjRTv2MVwhgzzDpnJUTdTr6s79xbeSX4MYkFPRgZSx44WSPreMbNmkmGUiUJGV1gUzNDV",
  "key3": "5bdwCBLHrLo4smoY81yspxCt1eqd8yTw7mKhZQbzJEUu5UaXobvpfm7SSUopciVDAbwq9ya21KuccBYHqkXV8hfq",
  "key4": "48KkXjUdPFmkKU4jbdf4jRrWLdoHR3ny7xqtBfVNdMmRZAf5FmD4wxcJ1HdG4EaL4LiSuxXcta2ixqv8owqaPFcd",
  "key5": "2maQGGeSNTdVnWhMxUDMuC9AGA7qNaEfBTb3DxAtvvm8nX3zQ24M1Wk6TGpNmK7K7sCq2SLdqsDg8NEZfbzHZoz6",
  "key6": "5XyXLbomBvS2gu3XxeWEtaW5X2yRB4kT3xASPYx7HgNNMdfg9v34aBwzzrh69ZFDacxXUcrDWXKFVsNa4z7LhYf6",
  "key7": "3HAk8N26nJzwWhHqJdH1VpkEYJwtEJKjM1xzAfZXmiANTUCzsPRoDkGLEcKLQR1wSPUGL9cxm8FUDKJg1qTngXLg",
  "key8": "53ZiWN6m3J8UJsctJ1B57Xj6TWEkEgCuZEhmPfjkHLFNMyEkrSxU6qtsNnKL8drBvz9M3832UwKuknVmMC1pDwci",
  "key9": "bk9jTgP4WuWrv6m4phxKGCoobJD6Ptk4rHCgJaJHBP3du2CzqCQvDjZmfNSRWb2kZuLcaVuL9MZTnNVLzRyQBXx",
  "key10": "GnCmZbUK8roerBtDGYQMyeAVrrAPo7puSk9sjdY5U9YUoBSeVT339ZXENAupc9zyH1mvJxFFzbtUxvXXuMMEqXb",
  "key11": "4NHyfgF92KxaUL9zYxj9xppLAC7TrMrQFaF6okTmegJeBpivBSa4maCFAHb9BYc2Xauj1ABfnz62HHSzf3KuW4cg",
  "key12": "5wsTzzWpxy38t4P5oKeQSKFSF2qwXTULgi9aNs4eaeGrsbsG9NmguLEV3vothZm4KbaZMUGVUj2HEg9ydjSTnbje",
  "key13": "5Nt5JAYsUuvMireKdbBfB7bRhQfJbXB8ys5bH6P1P2ExPhHqnWKXPqteUSAgY3oQaZwsgVMHK8r1CBzS4PHXB9zy",
  "key14": "5urQzc5coCe52ksP89ZdnVaRdkzHFTGbp1A2N9i5zRtehe3SNwXA46XqJF8ZbNCm23zVs9BdNZy3vsZ6P4zVMkAY",
  "key15": "4FgX3L5v74Ht4nQ1X2mECb7turYPiNCfdmjpnXm9NvjJSH9zknQJEyNgGPUGivxysRFEZnrKjjcdXGPvvHyeBTXv",
  "key16": "4tgEcvRojuS1Dsye4oPdCvJ4sxFAk6Cqy2j5YB9jeo4HCZRv8E27uFqsT7TTUF19puwPf8znW8DvFmR9DG9MmzQb",
  "key17": "52C5ZcVoV1Ej56fDT9bDzFNt3rCA8p914tWae3DuqeuBBu5D8vQj4jADR8AjDWwproAnVzSE5zTUw5StRppoVpEw",
  "key18": "2wEFuLK7zw8QmQfoPYeVzZYMi296q2MP5YZit4VZe3UYYdm7VggZHFTtWeb6ofmWxpC5uVZdWJ6XsoQUc5FPSsFX",
  "key19": "5siQFwe9BSszRJdkgBKQjsL7iaJec3kZWsLjcyNoKPTv7qV7YxQSrAvbc382JUThUycC7T9PHc1sYALRYPbPDLDm",
  "key20": "2qrkoVcqvPsecTXvL6MGBY97cq2kRGzcjUfSG2vkdgksuMNHdAcN7AdKKku527uzT2Wn6Pdg7J5QFbR6e5Gp7ytw",
  "key21": "5iDRKWQvsa4823jTQgaeYL89nLNLew9GE1ojUgW8iHbHQnZXgjjCShTCCvYfFYyS5w9syVcwQUyLz7jbzuNTVXou",
  "key22": "5mXazZuyeXpkzXYDPWbe7Zn5vzdGpcQu8Q6bYuXSS218hKeXyoWG96zmqPraQQsLcBBk8pYE7Ceiv2ZFfaZUzUAQ",
  "key23": "3drsNEP8vCJRhVAyREgfQTFLYQ1XjAVqwgt4HFi1Hi3kRTyUb7eebqSVMyJFne2wFRjbQKXaLuWjNMJhyRCF4JU3",
  "key24": "246F8dpiBke75QxFkX5YFHQ3FWp4tHxX8z9B7WrgvZugSw99TPcWU3J4gM95NZVfhS4WYa4PGA9JhBTc9ZYgGDmD",
  "key25": "fJteb4ExB86sptxExqTPnHMku1AGiDQm4Z3epdUrJwpyUUGCrvPHuq8gyzZQam47c5fdzrx3oPZP8auFAn3qk19",
  "key26": "k5zdqRURJpmAMXScxDXXPMqXXiD68HW1UX3zJWLiXn4EA6Hmt7mba6nwCtgDqG9qpzzwbrvr7M4zYajomb8QWy7"
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
