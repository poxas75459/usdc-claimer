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
    "5V7fTACUEtVbc1cBdzYcrhuXHXVsRNXbpVzyNDyZdR9TTgRt1U1GmFYCpYAeVSHHjWtXUeBoCq9moxxs3R7F4T7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CdAfXMotvardUc2NZ3dV6hiRjG5bhKaeLZe89fZtrfo5yETMsb4gZaPcsoWnAC8tgaHcyWKQnhuSmpm5gEGEgjt",
  "key1": "553Gr5KuN5dTMXzC3YGk8wzhcHUsCpQZjGnwN3Zqdxnz7efZ8geUHVHUSNgaLNMQgJVS2icgXxQapKptCG2LP9ai",
  "key2": "48UHQjpoZVucKFMWQLcTWjm89eNM26Nfr8dpRRAVEj4wfUWX98MBX9vNokjGWkKsrkymVf5LKWt2nyk9gHci6qXn",
  "key3": "2L3jKE44bfjihGbU8q2jLt7vWYWtkMcmx7M2YSgq9Dsa3Eurut21u94vtbwtMPsk1k5kAn4MLsLyN5kVschj843H",
  "key4": "4UsoxDtxxHXBsN56mJTVeawwM4F1PfowkwBsHz8wkDEaE1xRmAEfTSWZhDLGWJoSMi9qBeaqZJDJkfdJj4pyiNAb",
  "key5": "55cKJ5MRpVqGTxVfz7dZV8pGhssQVwt4Bp7nxNnbiuSi6d4iWa77iaRY74o2W2moB2SMKc3n9PUqpp9iphM8L6g3",
  "key6": "2HAQXprN7z6PQ2mStu2vGbT2difartqvdqNoXoFVGy6W3oHSWAEwDTwnb1KSy6T1kB6zwodhZ3VfnBc4dyxy1aUd",
  "key7": "3XF29XPF1XVRKARmULFmq5Hx3WhKA1mNuGxNSxhQDe3oPdLfFUPiWuZLSKsff7KE5nkBMxyFmwLKoaYqJgv4zAvp",
  "key8": "3RgnXoL5YDjPAgxMHM91dDQHH2gtSSzgQSXRpZWZohNEMmZ8JcnUadMSSwK6S3eLWBctnk9KN4mfjhmxRcWzMuhQ",
  "key9": "3BUie1tYAQrnc2ZheQjTMs5ua2nMZxQCK5eBgKa1rEm8vCoidupAH91pdm6DpQcB7gm7BSNt3dma93weTDDiSMmx",
  "key10": "ZNNGqjFXaee2CqYik7EJVLdhxUJ1cgAEiTPDH2dKcB2CkdQ59gCUjencmM611NBappKBrrkeVNnVEhzX8FyDNwn",
  "key11": "3RFWvVJuzxwkuaU3JcWQmTNTpk6RTQZBaN1mV2WYyHiyxM7BMftvhV9q6jbxKeUzpDzehJT2ekfzCesy79DR9Ctf",
  "key12": "2CXUHmjs5rka5UhAQxDQWdVVtnFocZjPsgieSsFviMsePpebXGwathDucSQdQ8cX8BUR8oXiJrUH2dJHJtxEagtt",
  "key13": "3wyMFe6hCc8LceAVCFC8ZqijuoC2tmNjLEftooUqFhsv1vgpZEbAxuLu1zPYhEfETqTauNJgkB7BPjzjkhZWWDtd",
  "key14": "4Rs9ubs84Y2Q8Fc8JMADSeEqrfo8ZpB8marUsQAzESTiN8mTgLHetoMJfUVks7ASAXLYpFvjKLwjg5dbmLKNi2su",
  "key15": "3fvXY9rdUzoA4zBpZJC9Rb1D5LeBqaiWLzwTA6JXzUxB8hYi9zjRG76oFafk83qU7hH7RXnvggXqJVqgC9ZLXKXe",
  "key16": "3HgNxNaj1zSrBWskDrjkhh288kkJwHsc7T268sqyMUUWiDuMUWwVUtJjKUdmEUJZ1KwJPzX3w5bRiY8oeTL2Kj1i",
  "key17": "4wGKXytsmBUHzYx2VNhJtADdmx3oMXbqfpVdxnxSApCbe8bvb45bBhndMsDaXUfbW2nj6juRMLLDeTXCrLs8Vwk6",
  "key18": "5CmZHLfaYJDkJ9nPmMujsoxY3d9Lc4bGuCwLWJit4V5jzYLQsHFxwebcbAAzm2TXUVP8GwNDKnsEEAB1iLZZGyoC",
  "key19": "zspU4C6iWc4SqSZQLuTMjfjyyjy59jranQJPSFAN734HvcDxGQorvSxC6t6xvcCeWVjS3dtqAUyLyjSJMYcsW7J",
  "key20": "57j6MxN9yussoYC782nembGeJRT7Qh1kWoowfPWNWkAqvY3TArasgWBP4h1S6XNqEFv5LrKEyMTiY4ztKXSiC7yA",
  "key21": "4oNoYYLu2BZzyCPP8C5hhHK8cW3o55u6nyW4uzt7BayHDUC5sVLYhk8kGLNGwYvH9kYadWuu3a47uHjU3a9NHrqa",
  "key22": "4Xs9u4Yc3x2abSkrgQrVTXBY1ZtEDqLKyZ1CcctU62wKontNdZ6wJeSsV649WyBeUUSKuMh33mcXCRRuXMMW4o2p",
  "key23": "4tVWmuUkcXySdnLHWj9yHkrjZ6DvMT1NrfMDHbcQbydey5kFu1pcfiys1wVSKB5BgsNT8GCZtQk7hVWenKU5CZ45",
  "key24": "4MebeLpCN2Ckhi1r2UeseGBKDkEFmAhMDi1jtnvr6Tj5EuA3zSUfWogUB1NAZs2gf8ZSZKdH1RZv9wgaN8Dek28",
  "key25": "5D2LG3Rh9fHLi1k6UEmZEDZF7twFWLRMeufjQuKpuDRmD95uf2JBgoTL5KfcJs7VZkeCncBRktWdiu2HXTq8obVR",
  "key26": "5fvwCCdWWtxzD2G8PYTrGY1bAxDo1gw6B2CbMzkqZLUD55bxngwtBCpr3x8xtqx7QbiWV14x6W8Y8GJ8XNMeE11K",
  "key27": "5DfbuPaB4Di4sLWvfkyZ2YvBoHCKutVGrex9mMvfC3MoCZ3jFyEfF34B1FypdPGwKhxqJKqKgmUSENPMm5aBSGQD",
  "key28": "2h8DmxGbVB8D98V2ACq1XmoQZR3FLhbjPax6SXJgwNjqyBcqwg2t5iNJyjGu1iA2p2QubSJZXCWymdbnYTaDJXhG",
  "key29": "33eKbPMxpG7HpPe6i62w57rC7HGi6C7qV7PWBNRPBGzAtMc5gCpYkQ1w5GhQDM61b9BT2ixnXMWWtUc6FVyGzFZ5",
  "key30": "3ib3jJ86HwMxkWdrwKheEm2c4K4BV5Dx61ctSnnvqs1U4Be3tdiSm81u1jw5TP6c13S4LmDoLTdw3pstnS2rLvtk",
  "key31": "23zsdEYZ7X7F1aaLmyhNxQY8F5ydVb1C3MYhCYqaf2uVgxbk3X3rsbBEQs991q6EUGbkhuTy2oxuKSCabuVtVq9m",
  "key32": "58VT3aqYnpFReosVXbQaV2Wy8LhdeyF9RcJZZFdHZrhtvJC4R2Ks5bqcViRLaE8AkS6jY852doYfuAmFmLicrCUN",
  "key33": "DJxjTFEm1r1NigrY2UsNoCSgQsrqnKpR3jy2FTMX8MD3WgCTmon1sv5q5CzwZb3QXqXtpMRsooaa2XF96ojLmsg",
  "key34": "2rgs4epqv6rbix8PRdD8okYuXt8F2QyehVSgyRT63wWNsmub1aqnvv6qZtHGWi7oBD9otn4iDKJmFNnnzm3csT3",
  "key35": "42aNaUfo9eWdtZszw43Wk1SyJfFLFo3e24miwWxRTBHu8F8ceLoP3KbhR2sQzYXjNSaVX1qvRjzzUWRSSeLQi9pp",
  "key36": "2uyfE3Tccbq9gJ617GdTiNWQxh1Gwm24Dj9zNa6sjadvWfkjKHYp6gb5QogdaoQVNqZD9vjkyV1XL5UVZphJ5rPT",
  "key37": "36EWehHaR2kNtLRuBR7fjL4MJj7icxxWKZDu5yK3x316uGciE5ZPgamBQWXmBKFopjDciw2YrtVQpnJR91iF33Ww",
  "key38": "35xSTEn87JpWdmCc1XnNV2YVaNVgxZXasN3mbAgJ9mwL2R8wET773ewdDxGC9ZV8wP5dh22ep5RCg3e1KkteETqo",
  "key39": "5AsASehcmn1XGApAQhn8oS1k96vuVev1PKBEhEQgfgjsafwtFkcwBg6U3HouRNt1jm6j7LA1kuN68obMxfFUDkU6",
  "key40": "3hXmKCnVWjJkXDTfeWxZ6PpD2H5SckfhDS8oCjV4g1X1ArqwQws1ikanifLEZEvNw51AsCnLTGv9K6jqq11zgBbZ",
  "key41": "39UcH1izCqr6DTn1Ub177j82Hdngv3E6wytkshqNFvwhbPwXj4Zzb5NiCZsjyna1GtjKzaew3snxAPvJeXovq8ee",
  "key42": "2j5thWvSrX8iK5iQ8SoeKxEjK4r4x7nPW2C4CjQyecXxLb55ojtmXedc3FygcaAyVzzTYDDqnXERdJF6UzH4ts1k",
  "key43": "3Yc3nF2kBya5iToJo7CrKVfLtsaFmZ9KDKqRrdfuVc7csDYTtuKeKDWEpujLSM9koBDJG8NdbSz2GwvdF4XxQu6r",
  "key44": "3CQ8KaU3xE481X1L21ULZKUpfExZEA4tJJ3zqgT9vCh3pWpEhh1c3bFaWahBKWAxBZh1QZaFHtvmHWcP6J58XRj8",
  "key45": "3YECLgiqhGB22opmYCtfo4FFZB1hpAnK6A5ogJsAbdvbFbSx1f5YRVfZCZfbz1tqQa5itd5H1hUemGYXTn4WrRTz",
  "key46": "5teFAWqX15GjGdiSrCfqkbPsX84rBKXTU2Y7zddh4UmrDYRRdwX1NuX3EvrPJGwVr8Up7H6aNfovCKG2YbrUyqqw",
  "key47": "4d2Xoyqj6bYfk1XQqaxeShAqNJxEZwgLmKh6dWtmR7tykMFueu8fC4htapJUfQotWzrMK9p8FcsKUZJPTet5mUcC",
  "key48": "21akMSESBUYusfD3QEAYZEjR7W3hWgaoxEGogFeUBFp6E8YcPV2g2Et6hv29Bf7sGkqpuXK2W2Az8FHuGn1iVXrr",
  "key49": "KDR2WHgGPUABiJmRknFM3EFjRMvtW5CoHEcBs533TBkSCC4DjbdcvmZvX737v93k8gDGHZgqDVQ5ZDVn5dmNsYW"
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
