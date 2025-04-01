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
    "5UM9SQ8qCG5vorHRScvC8v3MCThJyQQSnxXQMGgfXmMXaaL5HsEfhuhoD1CmkQWfCoPi6niKNYN5Y8RbPJL2CDu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fZD1neEJZ9wU7P72FJDBR28M3tAv5mU5nzGARfDLXw6FxYYyL35u9BKxcL3Jtm4a9DTNZt92PE1fTqwzUPwvi4q",
  "key1": "4tcCJF7qnEbCm3Sze74eubrTVTLdt8ocmtLi5P416aKunQLgw4KAyBJoeMxo6KTYJybA9gXf6zp36AsE1sTQdrr8",
  "key2": "2RZbTJhCfAV6nmHqgFswGZnqD7Q7JmzoZRqGGagaAtuJPZDeoq6kPdBkcfbx7RdehdbxfyZFSJwioB1BbUBzvedq",
  "key3": "4341kke9zVisPfbwBxpuLGDTKde6gvihVHP95wcAZsPf157jeZcEi26j3UCrLS7mGwKJ1YWPJgghoTyJxvXJBrXa",
  "key4": "5aSQvoNgQZoNGa29QpeE383tsdkKbFDMCxueSM15sw3qUNLu9TxeGzg7vg3ZePcBzdqh35AckWNyP836x8jVcuPB",
  "key5": "59jU7UYDHBWHMUnpfxqMrBm2rWsM7DxXwvN9J2u2BZzq1MXs2NRnSaGLSt76Q9ixvAdXCT58yw947bwtiPVZakrb",
  "key6": "3Shc3D3wegqc5AEyApX9r7tYWgpBwREFxBQUNNJzrS9CrmPATSgNgZfhgF4k55oC3hkw9eDQWwBfn1cm7qCgsBdx",
  "key7": "fuuLUwdGqWjTbT3MDrvzn2FMPt7F6mpZoTKAEAyyt1tPDrkUExv3EHFKgAtkA3C5Vfix8f2NZC8xVAnX5cxJ9e7",
  "key8": "2HeVoAqwpV4vmLsUuLW3X96u4ePzC5M83nECekzBgznY7WW2TNkk2KrgWusLUXaNR84a23xtkx3ZcWvJk4MuDYkh",
  "key9": "56JC4MEAgvY8ee3QcV1oXvZcVVsgwtfBZoL5ooJ48LgAiFCc5tn9VaAGXpeoLkLnGwwqUxuz8h4toKiPm5pf1o1h",
  "key10": "3wrr4a8bJNYsP7mggKjZhVnNbnbTKLPyDQMFfkrvzf4yCEy2QQobDFfYZqQWFT2S8HBiwsLQCBwszpg5kfLnRQGb",
  "key11": "4sq6Q6UK7vhSBobipBxPPP1xu29y5jM8ni5tmcScyzPJPDzPh71ntHhGtm8ESyrFJyEKtGwBEDAXegxZSa4STqnb",
  "key12": "6k4nKDouAkYVSNsE6CZ2PGDfxkxKG8JhWBv3N2pRwzoBS4TNZ17yhYEkK9UErkUTtLmihCzc5F4rYfyuPPuBsq1",
  "key13": "1ch4B2shbGV8fS7qcSsJrJW8cYvRpx6bK3BsidHRbiDCUfsPSomFGUEhdKn4JAo9HyBpaiYd6LGehBHf1ftyjcw",
  "key14": "2TSZ9tXHJPaSQDXJVFVUeMWH1WwebGiqTjpKCrxKTTGf9ezzKpfQDm4orEX6sa9HfP2FJScMxsctJdrarqaia68x",
  "key15": "5YFUsfuYFH7dBBhxL7Uh9bHdD7zRw1UzFXxDaNLhycUJbkDSUijEbPRBCXySo6GX85ao11YMDj5kn7XpCsQhRUdK",
  "key16": "5ejWA7HNLDPpy52LpERGLfxECGEijRjeKXviFjCW8jHk733j2FUmjHYtRtB6ehBk1GjgpT2y1RiNkFUYkdutWK7W",
  "key17": "vTm9UW6RWajY4FBkFfe5u3MnTcyhXkJbjSB9cfjycmmwvZAL9r7eDYdb3P3zmFpgLTP7NfnajtGZgQqM8xypmZU",
  "key18": "hbLLhEUrYzPUga5MgxibCdhURxmpUkc98DJ72LnZAbDqFkSGRpUFYLu2w14pk9EE5jUjmxSVCyvh6FQkBLxBiyU",
  "key19": "5muaEMLE46AbdGcQvmu4WPgR6NXdPjYYVJe6DKVRg8kwTNXjy1sJGNnzaL2eKRD1Nvy8JeKqGutJEKRGcsQaXxP7",
  "key20": "5mvaSDHPh5nAfrRvnGFMdBS6NQhPgc6t4wEkANFxDRJ9ZKCGuFPqTBvpfHmbAPCJG4AaQqXUBp7P6mF3vf3J5ADE",
  "key21": "4XXWZPLya24DLCELzfzqB2ESVmUeUEn7AcvNRDD1CcRdjj8ccnvak1KT2PRnueYrkWHqjNzq3kmZbfZWTaEgr5Pe",
  "key22": "2ToHoEgdeWZ3RACBL1JNXKy4Ukc8Z54uozeLgANCuspPWHzx3xo5BKEfdVFhu786CHZ37XDKoaZhtnBUyHe3P7T7",
  "key23": "5Ms8Fpy2wKPcT8u6MxCRK4A8i2c247XdwZKpBjetA6mJNWnPAwFJGN1QZ8gRJjjCCHqfsMLiwmArmcsvCik7uvdC",
  "key24": "5D3C7JE8k39nu53p6dqvi6oHnk2BFZz4nJUksfaUCztvCM7tWVkYtuGoWr7piFRQRnXa85FRwGh5g5kJwhA7gK5f",
  "key25": "2nXuuyn7bGUn4e7CgSarGqZYLqbhbinhDGJ2SpWEUTCf1ehwMitGYm1XQuajsC6rsXzmAG1vADJU6RtGQR1hL6LL",
  "key26": "57WMstSWv8YrFx8cjAH6wQT4w5P8wDkxerCoB4S1VNRJES5xXW9ohBnsKvE1hjmhC2L4SF3LL4QcybSwdDMcuj4F",
  "key27": "4NCYi4WAaYDiFnqsXiS7pSdRWXVqMho9LthMSgScn4AkZ7Tczm673XtK22Cp4rEGaQZBs8dhj8JNU8hNM5Ur481B",
  "key28": "3c3EKjzUyJx4Y9WisxCUhhesPAAmqSeWhxcL8gLTfWDpPd74VoGX2esDrXUkb1Kzou4GsjZnVMATsbUkTWb7dis8",
  "key29": "3HqKCR94jAuDJxPHgR171UCXW7LxKrC8xMjePdXBggLsZuGUeFWk49PtnxzryBiGrTmvsmB6tf1pt5QgKjQPfZq2",
  "key30": "2C4qY5Fm8XuAahQHdYaWc8vi2fSDQPg62JgX17MacaJgAuXVYYGv6Y4Tk83hL4Qc3SpLTGToqT8xL5bt1yR92fqm",
  "key31": "zqnGrwL9kqjmxC4SCwdYS6JdNc33kigHSik4mT77NGTQ4vHbN6XWoKHNQ7J6NK361XtYWoQU4FbmLfWML8rUE3n",
  "key32": "46e7DvJYC3BZTPrfRNBdv5jQnfJpV19N4NiVaCXrLx9zXewC3Q3ozrGEUG7Nkhvv8s6NDyxocGafioMhy2QYM65b",
  "key33": "CbXoG6Kc4bxPG2s3PNKH4k8vkjSC1XyWbTegM5gGHuoXRUWqbnS7DrmTCQJAdceW4UiJH2XJ1a8jqmZVwPSYXCg",
  "key34": "4BAgGF89o3HTGH98WWSfvd5roM5LDVQWDptqRYYtqHZZyHYwdCEmNosGVUXmtosMcTYWzrGk8XghLxHAAGQZhJQu",
  "key35": "4PsrecgMcEHmXbABNraHc1khF8QdiZKG9Vn6XRGYxzDtABpbyjM8ZF6A4XLmz6eVF6bsAQZuBX2GLQwt4h9QtEhu",
  "key36": "4wYza3t7Xf8MCHjmpegVRcrdvGjbfRicAbmkRUYzYu1zEuZJseuBrci3r6amGZ5c2SR3RG2NnSDaDWGkrhCVAh3x",
  "key37": "5nAqhThe6LQP6zdm8g6rqdYLLribZYcbxQ58uo6ZRUZVEy4ApuTuDvtGvnqWi3P4odMirsX1MyAQo8rhN35iAjWV",
  "key38": "2LwR4x2hjJ9cq93W5PSKtT3vCQRcpFBFpk3c6qvoAMcYdHwX5BYtGZLVgd37ViG3Y7utafPpxdJzJznZzYNkYaoE"
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
