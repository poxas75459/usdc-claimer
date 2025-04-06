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
    "3njHzeenumPhjZgRBG6sCtq1TNAWdHHDzqLxYUrrGFuU6zneA4epTG4YPNx8gSJ29C23LovaE189raw4ierBKRNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jm7C5E7fjTP2wP9Eq6Xp6efCoUUPg8XfsERwSFeKfX6X3eL3jGjRTHy3NAscf3QEXckxJjmv9jUL14FFxSYcRK6",
  "key1": "2UKeiBfjU5syhykrnhnKuiZfr7uu1tGkiJtpfz5FUyMFHEiFtMi7rcW1pG1rJv1h399HHA8vX5cifjLDf5dnuYCP",
  "key2": "EmZSmHwGXzu9zkcK453ypX9SntatRchjqCtfFCUFAatTCZ67qFiqYx5LEqZR4AxjHsgH7ykCiCbTKr6gTQvV1Xe",
  "key3": "5AC5WFJYQZ1wKmR11FS8GgMfaa6WpC3PrFgxkAiqyphmHdVu4ENbwrBCuySXKySFNEqGkNxcaCx4iQ49WEAe5et4",
  "key4": "Y3L4SowQf1PXvDPyqkahukZvNiZWPeLtUDtTH6f85ZEZERZK3KbeNu6hcayd81Zfkb3oxVvarX5LgL5gJpvpBgh",
  "key5": "5fwQVcuLaEj64Vkzfkh3WfSaGtuUQpyd6wkCmCGejBVYoWhSft3K37eGtzVMY28uKVhBoD3XdjLEknALEQaJnRK6",
  "key6": "484oeAEr5b4SVHgvBX5y3TJVSbmua7EUbpWW2qqLrcMDzSjeHkataHFnQgCcCVb9TvL8H6BSAJJTGfRLzYm2P9EB",
  "key7": "21SRyPVCcQM7Wv9TDoGokrpJ2fUe8uFv2AZbabnCBAYjaznye3h13nWVYHBiBWsTnQe46bDK8LryKrZJHKppq29o",
  "key8": "4n4tDERCtSYBV7VePh3BDQw3SNcon4A9LH5kqktEJnVxzD4pcehSn2PVms5DMmVWoJj2uV1VAQP4fN7WVHuXxeBH",
  "key9": "2JHQMY6RDTBk6q5MSWh5UrGMvGNQ1SYyqToJubCJEZAwrh3uBYHnVnsYaD9EyFCgFSRHA9icZsCQYtWZ6T99PAir",
  "key10": "ErnvxbhnqxXmv5yZk82FAEBsxDHhgZDYrGXNjDxtUrhWhag32k19xdoroNao3CJShiE6xs833nTasdxupfTwK6h",
  "key11": "37dMQ1uztYDSLQoj97mXrSCaoXFKzFrXHhp3u8JhvjH4QicLJhckPFcpr2gNf4hFa4n6JgkoqCMFK2xip18MNG88",
  "key12": "z4jdP2bP2g8bxtu8XcaHTUXPqCMThGK1pHjKN64JiydSv9fTU3Vpr37797hgaG9n2Bj4e77RXhGXfRHoqLRQ2DT",
  "key13": "4aKePcYG7vJbDy2uGLde2hePTzJYZuvVPsVQEyAiNZqGhX8oTJRRndDm2Y2YgwCq5zWGmxF25GhhXUB5N6gsw3G1",
  "key14": "5qA7f2eCEnvVexJ4emVR6wWaCujSijx86JVWVYGZ51Mq75p8ontQQANe4mqR9MnUBpcDLg8CB4DYStsfxv4uHR1v",
  "key15": "5uisoA9Vmey4wQmjkJBgtzckVz9NnHH1JcB7QKv9xZcbzsyQjzUB1xoQutNyFKtArRkSevmY2USBhBjNfGA8ito",
  "key16": "4uB5sbxenMvL358bPuPgxsMaf1qg46GQNuDUigLnjiVCpEMyBMqjhGgQTwfmbsFpwNC2rZ4ZQKBzyF8GJisBTwRY",
  "key17": "4u3tD6h8LBHeMtjCGqpDTrLsDm1v2f92X9ARyyWd7iMTVo17MmCwpRg7CadXfVbAT4t9smrPZWrgXEmALzLD4c8k",
  "key18": "3R4anLTWasJ37RpM9c6bu2SmxCBVrGzv9Kp9UgLsCg8nrCu7Lp6pD9fEfsFdZAGpQbhVkYmtLsVrd8fwmQWtS1sb",
  "key19": "4oWVnoXyNKL1sMVm5SRh8BZeCgvpXxxw85dDFXAmeHJnwMqLi8YRgztuXDjSF7DVD5QsJC5DAqxRutWRPh3A9dWD",
  "key20": "228JECJWevxa1b7X2bHaEaKr1DemuxTb5X7mkDwQLiJ8WiubTGeVrYtLj9t99xho5Ba431gGgNEUVKFsU9Cr5mjj",
  "key21": "4WqjbprayVH4N1X5iA4Lpg1EDnC5woTeecJFBXtdif31pxQLT8JymQ6qo6x2mALXLbzscKogCeySjgW88eofqXDF",
  "key22": "48pGXDgJ1GRne6iyQUtYFbtagzhZhXVoWNGt8j2fXRNjCgVWo2sFYueLJ2g4m1Lhvy2L3W547TvJnGn9YcimJ8wj",
  "key23": "4Enh9mQfAX2NHhmc7o3urF9AAYJ1ML5GV2FSxGTmbjVd1Gc9MbgXqhmmGULEqFexA2fJ3xi4wWJw9Faovt8uMdn6",
  "key24": "45gCRZ75fAGGHsEDZ15XoJxU17uY6frqoQYtkNUS65baFYTfBNyRQrKNRCPNyWqCruyCSs1rdWnYr9b8Tv571yuB",
  "key25": "5f6jJS5zdjJocT2moPeX1VoE3Dk5fZPmm8oEBKRsVpVcMXgn1qCNreSqYBnt3rcacMWp4AknmCojmNVaGxtm69Ha",
  "key26": "3V4cEzWqgG324JXW1oGxu3yZwcLM3S3TgxWZvUHEtcuNSbP95dV1bBboto8f8XTQu2HDMUpQ4iKknRk7PboL3RUy",
  "key27": "3Ru9aysSjV5Cd3qdmenHk85gHt1sGRpt9qTFmPsaZuBiMDheAszLXfiALpiet5f5yc1Uk15WHH1hWGHUsRLRoR85",
  "key28": "4r1pwCeFQ3HM7BVqWT14m7zn7W1uLmuPP2zfR5jAh9r7vzYTqVpNc5SX44uSCKUayR6RorFSjGw2oCvgF9w4wgn2",
  "key29": "mLTpZSy1YnGBfs5EmuxJcyN12opMSpu3sAzk9xh1QqjYronEZBwM32jFDwvEsnFcv6Ys1WdSxi9JqR1mPcsFJUB",
  "key30": "3eDG3bGfN5x9Sao5Y5LLASu7aRWWcwmjL4CCmyFLt2XcHZSw7bKGmHiRh4bytiAPjkBQBVDyXyEvWFqomrgRf38m",
  "key31": "64cqMmdg8hjw6oNoYKGvWm4BUEFySJNEQk9e966a7PmiDdynPaCArQKVocAtEknNJgzuw6cUxWqDaWuKTPWov57z",
  "key32": "4eo8kaY1cUkZmh6CJyQkry2YjWagdJqaxycqSysZBQ3CsoEK8oMs1oPSRtr4J2x5c96F7N1eaQKicjkEz1gdX8Ro",
  "key33": "2bqUScsRqYoGKXfX6TKCJciCZEf76oJ5v86pLwYgPSR43C5dXtwGaHQAmZGvj2D4kN2h1T2hysbnpkFrCr9gJQpv",
  "key34": "5BdTUdUB5JE5XvyxvMR67HZRch8tu4mvkwAr6u5YXsiMhVAXdoYhyvS61hLk9yMS7t6J8CgQPXeUqx94kNWNhRa9",
  "key35": "29aX9r67LjCRstv9mKBqW9QdpXKiaNcZC1XAhUTsfB1QcFUEi3fLXSdauaTuwtc9SoFvCxebNuqFCXiK3YMAJMzg",
  "key36": "3CXi9RUg5mutmVv61GCfy1RoNSgqAg4xoGmFX1c4yrimwaay1TfAX7Bw7SEXSVGktQYUaHxVWmw9UJ2hnP7A3Vds",
  "key37": "3LBML1WdRRNFu2TR3zuhoZ9cxCr8XaRVPVmyaXHKzxwrmTLHkPcewZoi3VmMvRuuxhANdw1woisUKyt1nUvM14qX",
  "key38": "2EMiwKgVFU8H7AvB9AweYqJo5b5c4x4V9gExezZQjraC4FUqitshyfEnXqGvxErUEVSgAHjLUnCFWekHCQNDGFQM"
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
