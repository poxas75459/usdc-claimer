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
    "4XRXteZdtLJr7HkKM8mhn7PhJqwmoa41NQHxBidBhwrggyy4YM26FWLLRsWxmJuzuTN2QwfPbb6RnVoZdZi7vE22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xaYDu83Uagb9qvt96PaH9v6YaT9dPaRpN59Hozdi4erPrLG5Sm5izUZFUgVCrqP2sLyrEMJPb78Nt4Lb9hSCaQZ",
  "key1": "NGP7gD2bCDMEntr1JKMtDsVWUW4KorDzT5CH8pKfWbQeMQUxFN17p6UCZBUGqLspt6EsH6de8tnTAMqoREoFL1r",
  "key2": "5z8pHc2auu7FXA2qEFubTcibg6snEo8c5QnRWFJB1VRTX4PtsePzJzmxJN5vW75PH3g15cKDmJQaFyVLoj8fwtVW",
  "key3": "3sKMZCQJxYG7A4548wFEkZnftsmC3pS7TpwBEChgm9iHKde48sKrvJZGDZFaisSctxTbbE3KnLbHvAnfbvgzFUnL",
  "key4": "5VxJkyGLY3a4NLoxRxkRaPC7rBXRNzA4WoNLiXGxRnGR6BSWcbCi9G7ZadgMz1ciptdRs8s3yiEvy9BFnMouiBU7",
  "key5": "539wKvpFWwrDFrTmkX24xfAcnsyZS4vgB1ZuMrbGZuMJmoQCNpKHcd2yP9u2VD4Hu2xN6vPbx5pDqXSCFwbf2FHw",
  "key6": "3Bnj5fTCj3TEwgVjpNH35fjXApBCNcoWdyw3HB86hEdrKHY7uprFAgfevShzVMb5DSFKRZZ2Uje9HZJKpzSmiEFz",
  "key7": "GavztK4ATtxtDZJExwJm5CdwFwxUD8nLeVhg2mayHqNWZr2fhcFdP9wyehRiGWGG3Mow4gjE2KGN8UnynQpAG84",
  "key8": "3d9QoGEs5vTMC8eGAR5eGFw4zgABZEHkf2CufxajcJrQtb3kE6ETqEBHUB6ib32W5KepKKrTSpWZaEZ2RSKRssw7",
  "key9": "5gU1SLta9VDiMp5diN7m3w3aA5B1LTdpL4cRpQ1JDKXJFqR1QCJydy57Pq6WySSq9SZmFbSqk9ewoWD7Ni8JjkNo",
  "key10": "4RCe8yNqUL73A49z2G6uf4P3aQ2NQUKuBR77m7JqyjBvBLSpUnMevmaLfqc1Z1PxYQ4U4Bp4HEXonyGaDaEFPfjw",
  "key11": "3R9W7z9sKSC2rNurbaXCPhQJFjzb7N1SUWcFVmTdQwvR4TgPchMrXmiMCkCMFcVaZnwq87e6BtGQ9NMobigPnDQ2",
  "key12": "4YThmQmkAVjMDmUjo9YYh8j25XT4d2cNP456v6NYDNHwRXersAepwNUtHEtpKHk5ZtNbxiajZb59QwDDSp2CzacG",
  "key13": "4pDemMaur6GtBJBJCTgp8M9R2Hp4HUyL25iy1478thE3ZUf8d8mTJP2TArEpuckXHL5L3xeFQd2X9hfWpkuddnni",
  "key14": "56EecSdPC4gcxeqciFjwfkZYnMvjPDnoJ6LqCT5AKQHzitZhkf78yotkFghRoRbX2nyus4dd9bYHqoFF88jYhRxG",
  "key15": "2Cjp55CaYcRaBuHTejxjDeFDCUD9vNxD7EVwwNXYa4CkeLfR1vZiqrXQN2EJmwYHiHMPP6bh8XeSWqgxpsZAQf8A",
  "key16": "Ztv9zmREYYj3Kv5j7n5eiW3b4sN7XKyvxSDy5vkytEeA18zuqbpALyP6D4cjnSGhxz9A14QN8oW7YfNULwiDRh9",
  "key17": "sXT4FtvDeoP5K6F3ufYHLdyC7zxDMibGpU2nDYEyoVqykzB3XFBHxmw31HZfxmvNf4fCHk8Y25Xtfmr72EckJVA",
  "key18": "3DfRXhkAAqSGcVk2xvEW9B69jpBi7gDzsHWD53t8uRKWJay4TtoNhq7j6veywC2xWgCPbjxtVaPdzFy6ZEFYTNmB",
  "key19": "5VMGUWkwsAf8REzx5j8JFKD9dMacpSiB7QZNZ7AZGAssXgv1xTQM9X2frBNYaiqcwm7zXJuY7mMcNu9N8avhPCee",
  "key20": "iNjb8VG6FbU7LYzYyPfUY8Dv5jmXqFksxTPafD36XcMWxh6f9zDNvGqkrAiGkMD8dh4udHgvvL9q7pQX8NpAN6B",
  "key21": "4HUk4x5pJTSPCaVaTTUyZfJznM2JxYGBoaf3JAQ3sh9sYp7u4wZTpPSwVyCQLoNCTrWNA9XM5ucrtEdH7T7taHGf",
  "key22": "34kg48tnvLMajKUVjeb2Jnve4qF6sSAL1FgFpAqbY3GQJ6u6CChvPVqPURmEmJ9jLg2bVCCDu9EQD93oxdQ1Zd21",
  "key23": "3tEGABBTobt7zYWgX8cr1Z6nVSxwtiwjVNNoHU5uxy9H5okNVy8iWpNv58Rw1sZWh458z3mtA8um5dafd7s8p8BS",
  "key24": "5o1yfuACqLbtNXzsT1Gcka78dGVQJ3CHs7Csxq58ExodYUNLCunraiMKRwy6aYZMNTQswzGVwB2mQ1Cm8V4tHDaL",
  "key25": "5WurF37nuFRS3FZg9FtSdUoHF1sqBtK5KQSm6FMtPPfDFvgUAHWJqmHvJMfZR7qAPUpBfPKXq99nkr9RFSrqfs6F",
  "key26": "3cog8YsM9iCrEq5YX4SBKwM68afGi1bX5wC224r3rqp2NpKJD79hhpMhXdSxkoP3P4vfMK6nC9GZJgRiix9NwKPA",
  "key27": "3txcQUpp13KpKNr2UjsthiJD7T2a57QFXBcbZwTxg4jahSWAJyrHHpfC72kCZGGaZweCBd5X2ViQcveYRG89sKpf",
  "key28": "3LocAzJard4tnWasLrUyUwbnt1yMwyqrYwzBLFbE7MSXyxwy4g6BNXVwou7iXkV2gGDaXi16MmiNqKPSqRpxseoC",
  "key29": "3MzBL2jXAqBPHSRvESLed64NanVrQ576rHFV8UywenGwsdP9pXpDDsy2DzMNZtM1Ynuom6qc9UUreA9UkJuSrLQ8",
  "key30": "3DHHN8ZKDy5Dc47BEVkDJTSZ6xzsoSSqr4VZSSjnioj9QyW1ZKe2kcKL266ZHJWagZDTqkuMtX5t3Av673MaB8Fn",
  "key31": "4NzEKCxtUHTW3toXDqMiR1KoDkSL3hTXkyjb7yfG5usT1E2AbHEgp8ZQ1fwPNtNqQiQC9a1r5N6QjPKyJeEkRpqn",
  "key32": "5rDkNMcdUdNKZfEhhB7AtTkdEmpwK9epqG2araWxtib3qmEGM6u68zZ9B3TFmMwB14FLd6SwicFY6bVZiH6Pka2K",
  "key33": "QJ42ho3xu3y3SMfssfxDwqEAaLpo1Czmkf9rHvApK7JN3crJ8iRqAFrGc5oBAPbzQuJQBDU6AbNhZ4UrmcjD7hE",
  "key34": "5h1Cr1xvEhPUtt8xaNSwS7rYECu5cTUuobPoPP8xkmZcnTTroaqK71zS717Zhdrw7bu3Uq75TpVcttbgr4H2xZDu",
  "key35": "66CaJ752GTAzE1UATGgevWULwYcJFeKfbDSqHsqbgbw31gBtF1muyaGRk1kt6fnnwteRaTBcHnLaXPFKR4AFsmrd",
  "key36": "65q5VYPxicb9G54ews1jwCvLDnb1ZiqzcfHvGdxQ3bu5R4D3sWoe8iT5Dd3a9JDzWGKrLj4BzmeqgL8gKoNmj5Eb",
  "key37": "57pgEkdkmVGvQ4FY5M8wi6bZmB4H72C3Y2ixqcVaE3Xc24cUzJgtb7J9vhSxQjg9imkF6sfzzfWPTqAJ22kKabLf",
  "key38": "65dUB5x1T1DuPLwmsoDhr5hdM7JNxy22MxQU6U5Hwf7gd62ywXZuzJbuXxZToKJ3T4kYjkutEx9Pp6fdhJLyFAVH",
  "key39": "62viN4WghLWnVbGpyyq1nrkRRuRrwCMEEtnh4qFe6oqv9tfqWhg46a8d3bSQcKNsLEPhXZNqJN8dpJpM94oRJscg",
  "key40": "hq1fdtW5bLhRDEZv17ppQC5iGmH9eoaFtrqCbKRXJo7v8VLbLikqPVbY5kyGWBeuxi75b6utdKjxY2hAkFrHszR",
  "key41": "2jx6HJtojcTf4BYvstYV8rhrgeUVjBMBxRZhQAvNsbuvtPw3j5ruz72L1MBWx4iXx4MTtvAaXgSbhTAziCNcDUm3",
  "key42": "558mCu3N5gNU7GNi2oGskfr9fRgA1hEA6ddrMTSocN3bJG6jN6VaJX9iodquaVHQeZJhR4i3uYEm3rvpjKn2BW4a"
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
