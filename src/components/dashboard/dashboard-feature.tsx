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
    "2NTY1SeP9NdYGqkRVnviShfMQT2hTfwCzCgFu9jCVSQ7rWeLYpzE249SnZLGLVPx7megthM58cp4jBZZYZXpGaH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66USDEPGy9ZwtUnbs11Gbh7j52ukodJQ6PzedEmXsAV1QK513hNz7hdhMrXFD54TZ893RXPXGPcoTzUr8vDQKptw",
  "key1": "49bYnix5Go2m5BxwiNFPEjt7jDazQ7MpF9HLJV9rg8TC21BHybxCeoQwrXNoE5KC8rHSjpFRno4y1SBjaHhDErff",
  "key2": "cR5k5ZcvDJuAQKRu7Jx3qgw2svTtx2u7GpUbY4vC4WwHvxcg5fdzwRL79w1jHxJkzRjsA2btB3D9qvmAmWXUbS1",
  "key3": "2qtpZK1k7WCZctUZtsxXJxqaN6pcFaUzG3tbowDjvssVJK2JgpSpMSEbvSs34i4yjeUWfaMa7NwaeEFQu3fyDK1Y",
  "key4": "24vovQLDV96pd2E1vJ1QSgqW8seuym4PekfoSmjcx2C5aE8Ytews1ptPmo33fvcAFrucYSgWQCnzEYNowu8Ki5kF",
  "key5": "5rBK8ZMKTNoy6Ay4Pra9PpAh4X5PZqmZJFh1RL2LZJXDuTcrzQ6nzrcijEdwBZFhx47U6Rxa8XHEFTU9cVq7x64K",
  "key6": "XXS3h1SK9qfyuprPp5mKvnbCWE998jRN2aKJ3rvPKMxHKbPg5aY5L9FGkqPRaaP5yx2M76GXWA6HoT9zWKYbzUG",
  "key7": "6PB9qac1jWFJTBRd8LNUEC3DSBHEiaaUw6C5ozeDnT8cdo8huYFLQc4crQ1LvvvQeWSKDvvsB1XHb7FVZcSwGEu",
  "key8": "3oAFrxHf8k1S2JMxA4w7GZ7Zw8zicsdtYiRqMJcvhTchDa1s1BhWKuDvCWc6dveQxuws3iyWsDLLhCn1fBt9bU6c",
  "key9": "3ixdQpjQ2tkpWBZQ8fCi8vL4hLpv3BrjkVrG4fLafuJUWNwr9DENKseRoDfyqZTD9Lei1BQyM28FJRoPdPMZQoXN",
  "key10": "4AAAKkZoDffN5qyUrWVm1xdTJo3YK7sFx63fkdqXsfLyjq9gGVvAZ1FLqn2QEqn4pmRShvVGyQaC1bXVQ1JKc82q",
  "key11": "5eyhAZinirv3e7u7WXHuPfDkiR3JQzmFAqXCadXnLMdT4ngQusfzxwiY3HRQQHU7k4p28YTTgonCwxgRtFf9YsiR",
  "key12": "mdkxTkJvwSuGshzvG5kMZjLT2DfzVo1QvyYnqcpvhQao5PmyS3Y46F1WpetusMzyUSWbLKZ2vAwhx2PwxLRerXs",
  "key13": "pp1XKDuUhqWHj311EmmZKHET13hza9GcPbXzoxPouWXQoJmyZNoKYjmsmEwQW44e8CGmJAFcsb11MQsyuHdMYis",
  "key14": "3BGj4Td1DmS6wiz3kTEZjudBosi3y1ZLFCoRAULTecwaF3VFTEk4WcRjNiTMew5YD1bts3nd3C4YgnxHvMPMNmjj",
  "key15": "3QHj8Q7XW7eq7SUEGrLnU4HnaL7NVoGXdXTC6qdWr8dpZKVFcezNvS7J5iBP3yq5vuRgPy2N8tTsEDHATVUZBtwN",
  "key16": "4HttJLwFBpHVmPVMifpJrnGzZNH548fN9Q9TCoxKPMyzy1nmTVVd9nHBsmBtE4PWhfmLDi1CqWsL758nsfVJkVEs",
  "key17": "2zVQ1CwAdJq6TT66gP7zzmwDVnKspE5d2pzjDkCYRqcvVVqtE8QrDHh7J68MbDQWMVuiofrda2prBXYN7S1CWoGo",
  "key18": "4p7TEtd5zjQjaBb93HhysdKYhdBZx8JZRtBjfabjSkeKYTKuCZ2mb6gs38LjcX1H3RtD73UJajRCTzaxH7mo3M63",
  "key19": "29iwgdKUYrAWdfATV6dauX1FHJ85hxxXctGvtRtNSvzbngzzvAV8FyqLsny2V5DUzbBQ2bQgrdSNZgmxBtcKbQwW",
  "key20": "JKcZZMKhY2hHeYtRtK7hrAi3PUbn8a2RhQv5ZFmUGabfSvh47uwzNqLinyx2gXAwWpUmfvZM3sq24rSBzXTVoRW",
  "key21": "SYhbTVZcqxCuQbL5kg1DGtE338N5uScFQ4M9hPQuTrpNf7upb3qi3DCi7eDUSVbPZBRBBtqLPRvPBzUQZQYsvAH",
  "key22": "5p1uUd22kFokiuRwXyEGj8Dsy95Bn5NrC5QyNq2u2MkMkvSP5WNmqXdM1DFCid3Ns2eEeHB4fBnxhQxmijUKGBij",
  "key23": "3KzRwMk2k36rC5Bgk7R5Tp27PdQWGN1d2i17KLQzau8TiNw4GoqCWL6FQu4y7r59dG4jXAAysgP8NLf3GuAbobLV",
  "key24": "3dk7naLnP5FLrqRiHq6xuB4yR9qXi2EpCbcNMmKPGeDeguWH5gB2vG2kysk1C6xovVhmgmK2skVYnP4oVbV9Ftr",
  "key25": "4Cpgr9uYqHiamX58iADPKWiJUt9RCg8MnJbrAs8fyFhnw3EgrH9DC1shosY3qbKQ8cdr6NNJ83y4QqEHQ8Ccqn34",
  "key26": "2mdkUp163bffS18bmFvEq2SxSPhEdu52CnGwUTFD9khtzvCCa5moSWFDkVLoGeNtkAk8qck74h22h4yz3qU923Cb",
  "key27": "2WC6tWAKBZHRKg2oQZt1koNDvCveNAt3KgVgQ92MNuyNjuWBSyNUGJZVgQNZsH8pVUJmC5n4i3xdjcTM78KpsTdN",
  "key28": "WSFfUfsGVjMHeRefMESmLJkDpyngxisXPtqEn55k33Gg3MbtxYrSuJKkBxrtcTGE28mYbjMqbf4jD57yikEqxh5",
  "key29": "2PdKqZkX2Stcv6kGF3c18t6pMMSEeU6oqyzj48TRKL8HBZkY8PXn2XrS1mRHCaPCYPHsArnzHyqazyF3Jtg5gAev",
  "key30": "5RDQkWWg6NnAkrEv8NDYKjSnxwRb25j7bWw77jj1Xj2duD5w948cSuPzK64L4pSYVzifkmrRFM6kWbp6JvYMrcbr",
  "key31": "5t5iRKPbbDQLMtxThvr39AN5aJL9cKyJz6LmCDnyCQGeqR6ReAwqwAJxHjxWYPkNSF5ym9GNq6PPkJR9xWv39o3T",
  "key32": "eVVajC2qhJmaoZ3pfy9sEUt49fXh939eHE7KCZBYdASyKpFAQaP3kH7bDDZPnatGr2AAfvwXuNp4kJhGCnCugUa",
  "key33": "5JAxNf6yykjxZwgA6wF1GHxqvUUu4wiYgpbSh42AJW2ZmqMDYizup9czZ6Bws2pabMRZRErHgpeWDTraSkRpL6CN",
  "key34": "59Y3u3YTX1Mf6Vr9ggN2BrdRGchwS4B5qvMowjkRbE69Ug8pdvCiH541tuMCg9JuiZQpNdVAHSXRHtLKCLtVQFoW",
  "key35": "HNSbF34Ggc11cyup5LPFPAa2GEsYHkFqEgPEj5bFxfF6eZK93zi8Q2X2SeGtENo2RRJKj1BUorb3jQjjU7CFSd8",
  "key36": "3ak1boucpEauRbq8er3LA8MtzVT6A6JMC7ueCJheti6ceVffSzjUHWQKTJCyTrhcsMMYWnBE9VxFpBCa92fwTFfB",
  "key37": "5VmFci9BWNHQesjvfMFzQwQ3yawWyuHc4qNtyTHJ9rHRGgDiSLdgj42k8ZzWJqfpoz6xcq5NqsEkSJdRagveENCD",
  "key38": "2jvpNsaKJyxCyehcybarVTisVhXLPU933fzmPSbBT46n8QeaUjE8mMR5tf9mqiYTpHmXwcXHRgcSZHyUsmhv5Nvy",
  "key39": "5SHf743tepjwVZ2w8vqdTFnRLiE7tEKKnxb8BW9maUo8giGni1FonDygoJn1yXGHm5NjZMbGZi28QHmJS9nZPt79"
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
