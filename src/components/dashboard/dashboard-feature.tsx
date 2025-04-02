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
    "f4GXn3sqCGNcT56qs3ktAewveUUjcitPAoaaB5KdXpa8nuRTumWkd9bRrEHrpwbSVpFDsupkmvyxRLV5iBkchSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "548TPRPyN1bBRj239j7hymULjvY3AjHSx9Seepc4iAs68E4QQDS5v6TeekkPRHEAJ6kLyxMKxy8EkpQSmNTw1wUE",
  "key1": "3CiJnHjLj9iRHLf7RbeTycsEMy4MD6aUocJ7jq6z2DS4JUm3vzQ7dyn3yX4CR4dLM3NNPtp9kKXp4siySWJczwKY",
  "key2": "5BBtRUkmrKwmREJbeuxfpZoqkoMuFb2jbKC3dAiHEwiy4y9fNxM34bV8homd9LaTUiaMFDyby69oYPpegKuASW3q",
  "key3": "5pEkKsf9tWVo1TE2WKG5UfoVmJu7rzx17fiPsmZq3PWq6myMBjspNPL1Yojd8e1m9KLzj7ssxPp1NtmdzhT9cvti",
  "key4": "xfXbXaSP9xmchYNHqAAsEhVUXFFkUGo4LvrmQhf2GXF8cSooBiUatx2ihyfSYuwqxCeuFSXAr5kKsy9D1obsqEt",
  "key5": "4TtvqSu9Kur7UMqf7bb8N6sQnJjZKZN8gdgoLRtkRZ8fmydd4aEMNZXdfgoQ8xGTDjDKTfuenpfCg853abMHJgCT",
  "key6": "4DLNcqAgZALsSNzpeNXxTwTCFmnBjQT6DWEKeHdgP2hEps8Yiyrzc9KgAFLBymH8Dmamywbc7kpi8M3YHNugML8Y",
  "key7": "3fivCAdENd7g9bNJnGy8B5Akp4cbNMKq8HjQheRgPxhKSKmbrwbjM2oqHi2RN8LHzp6uJPwV2wRDjtxwv5Cefaiw",
  "key8": "2NeDLq8ARhGaSEnd4tFqHWECrZn2cUp8nKvnH5H6tRutPcYBMny5cgjuz1ErnrKpyuLHSKrVPkzTF5PJ9fiKeABK",
  "key9": "2ZyAboDVDpW4VWLEceCnxkr1k17c7bTkTUSp7rXxb7BXPCgvWSe9EXZMKnUywQS6peag7wcCWhhXtkUXjfaEmkQq",
  "key10": "YMXq7nj5MMDEau12qKibi6sJxYzbWBeM6wikWKqn8ZnemprcLPhYZ2bRMmSvne6XBFYjtnPYMTPQqHxQL9kaZig",
  "key11": "24RDuD4Bowu61kdVLcA5dSG4j6wjXivSxXuvUkPRoBVmTfGGqFs2jmsEFXLKAzvM5TH89KmZ1AxokZZHKtotvn3D",
  "key12": "23vQDmsBzka3EsGVQWcpN94q1wgw7mJ5KXieFQjQWnpVqiPKyrWs61mk8iuh27fgqHv4ZpC6kBYwYs1Y7W5fpqBC",
  "key13": "3aFiiisXXvBz4aFXZ6rVDqND9A1SrkHvPF2wkqjuMuJz8pQU5zx3cjgKdWfJduY4yzY2VXnsyg983rzT6wb7GHev",
  "key14": "5VhaRatS6vNXyt8sx5KaT8rKJEPZ3tLSjDFiY8Jadegb8zqZPn6UrpVAHQqegJbixK6TgDHUQ6JkNp1YWxmzEZAA",
  "key15": "3hzQp9PQwdMDsnvZ3wMd38pmNn19CtTdb6KPv7jjPkXr1cbLHDBxYjfWWSRMikGNdQCQpt8gKWYMMMq2ddzHDfoj",
  "key16": "5s99bHeS8jgTkLyt1pX7LLgmwHuxZeu2HF1esUDgH5MhL2ktP2AxnJx74prGQM9RzvrKf3tuZJsPDfes1oSpqhHP",
  "key17": "3MCKER1iD6VYZ5ZdyKF8NhjyS2LVWrLKrzJ1qrR6TPoQKgGAKTZJjNkJmmMnyqVjc97zZrMUF2qDRuKf3VUCFNSg",
  "key18": "4PCZNRtawSZBqVTG4Q8criHhscbfFbKthH35Svy5JMA2CmqrWBwrKdBmPaYiR851RgVvawzNSCSzfK68qgCyyWjX",
  "key19": "NgEnHJhmyJc3h1PFDHhYT7znKvnbMPcZsLu6VjvVpsJZJ1m6tuLrFUPqKDJAEHJzwaMNdb41ALz9tN6ShVBVYf3",
  "key20": "ukYtSNZcwhNRMSqoN57Ga9etZUCdfHrZfXNLYGYmbS3KZ8XMSePPeRbKvgEyV8YtYsDq5Rz4Le5D7g1zPQWud3a",
  "key21": "2xCz44bH7uDGbU82vvDwsohvuqjJpHaYcCDfse8w8EfNmzBGKgMCy9UB9DcF2CueiwhGiuM7sLye8AoczJkfZNLa",
  "key22": "7LTj65DcMJwL2hbVGExkMocAujBLLatp9Ay9K89uCJbFfrkS8VZijjFaZScYC1qgfbSfPBcg4VDEZrWHoNizCZD",
  "key23": "5VkXNE4GC9ufmivo5YPLMf2m8xFcC3bPzMeFGHYU1BYcHdk2Rnm29HqbG1qF4k7FkpMfheyaFL3Rbp91VXSoW71d",
  "key24": "4uTLs9x98kFsaCQV2PGtLZM4sB8ifNnSvoGMhJWP2YGKKshV3vyPLvokrpSrFiRG73bSi6AVyYyLpoDPNN6QKF2P",
  "key25": "5SPyzsrRQfMMJ7iYRxr7LWxhrmsGh7gpatA5kmD2MVukiScCAg8Fb1fgJoTGPX967GUL6iZn5QBJsYz1fAXpvu51",
  "key26": "2tmXVC4N5CpoEPAKmjdgffEPRoPCdHTjRKbQC1G3BNLyaofn47LoEtC5EXvKBgNJye92heDgDN2PgvLwbUAXcSkc",
  "key27": "3EZsX8QBKFQ2SBqveMr54fFPkp9Aw2NfCzE3fVUsEAuftELbfbemqUoA4roFvBW8VdsS3wNNzLBymT4wjG7e3ezp",
  "key28": "4A2bKGQvxVJa4s5paGzkrK2NwHmNVC8q3WhWz7P5eqjmvsitBpT7913nQDC5LN3kZRfcDUeosBrK234dzZRYrFgZ",
  "key29": "2PswT2DmQqiAgHfnyo1dpPiomwgxbk1cTU4PyUZZagLpHEVDcxogMVvdcQzyYEh95azDTeW8bxt7QeMkJEVZrSMh"
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
