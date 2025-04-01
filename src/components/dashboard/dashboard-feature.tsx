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
    "3XKLneCExrYxn6Ee8fVUUGDn685JVCQRPHWCZwUXqMmZGZ1RmTUvR6VvgNMkPCPF4AwjbZMAPikgov1mJowA8onS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24KxqTuUEaM2yjMawrfna3mHWGJchUtpjRezcGHBDKpS7mrGwGFRb24qnpv5V8noPcNVU9eLTioJ53FbzMUuMxKm",
  "key1": "5D4XH56zNuSbuZeuXUaMBiceYc5XgFeNPTgYmyYDjtJVUEivPYuF2erH8BGKeaZQRryeHaMtVKXp7DZjcLC8UfHz",
  "key2": "qoGZSu8p3ZqgfPT8k5cSdfEyUNm5vLsZQE8HNbJFFVZN4zwdEnf3YWHxyA4rGggsS9TKw7hqhMNf2LRgHue15vU",
  "key3": "3AyQq5Pw1pGNhy216ykCinQG5Pxx6h4b5sASd8q7fA35QprcvSf4WeCGzR12dY1f5jYPd3GLr6xX3B7Wa8C2v54G",
  "key4": "qGPkxphcD3cuhmbjU2H5sdUGCbZ5XGv5msVroPVzBFXiNvbBWuzYqxpDNebmHkV837KKmjDDTPTAsrWKr1phru9",
  "key5": "4xxXT6u3kNqCqKPd4Vp9KduveH27KysJ8UVdujpM15qfD1zDNYGhwnrsLsDZaQQFbCSMLMDa3tgo7Fy1QhEurLje",
  "key6": "3Q5Av2xKkmhuF73T68wGVyvytwk5Ng3d5CG1Zy7sPbyYCphzkargrdBMaD27zBfJ6qjYBa9XguWmeaPoG1fbAWx5",
  "key7": "57GC5P1i3S5zCjyhbBbeiNeVRRbPyYZsmZRQYQiA9ayziuc7DvhJQ6fAutFTDSr2G61Wcn4nksbUei5BbchZFPRr",
  "key8": "4YBbgXVH3sT5GjrNUAKo6f2Gvpu4Dx264A6oDvTMvQuVzYs3pzy57Ka4PrDV9KaJdiwBsvvfEPy1eosZmBLSYzrW",
  "key9": "2Jz27g8eAVaha7R9EMdPqc6EhYeZie5CS9AkUaYHzkhpVxoCEa8yvaqKTfwrZXhC2BBVRxZYvJMT6BMSG4tzKEHT",
  "key10": "3VweE8TsAvt2VdnGVC4597mbP5hZ74VTDXSUdqkrub53X72NZsaKQfxruZu4r9VngSqn7ktAWuMVCVnGi3KPhUKL",
  "key11": "WXiqLFNBRnEFYpnY2WMSmrEXzzW7csXckGsADNFUmgvJjh7edGCKdov4HSFdBK3ZL1MWpTHrYnxSoQauCHyEwYk",
  "key12": "pVWYtsjg25bPbM8x5qsNPKM9ifPovBRQNtjtdKfaGRpUm2ZNATbtNsW5uHe8hWDPSjCufCXmYoasJmDR6vnoXtq",
  "key13": "3ALDk1GXgbPXLamgTc2HfZ1bTbyDMr3Ddnmf8mTgDXBx6Aaqsw3sorPKGUDnxG492DZKuRGHBZx57t1RdiM3HwdG",
  "key14": "5gFq5eopQNX2iJw1qmYYubEtv1FTqHbyNJoR2DDdHenH4iojCcRJb121ukCDMg8EvvxZKjv7N8RH8LB3w6Pq2J4M",
  "key15": "f8ioMQxY5YLCzhwx4ZfhYaLwu1Td4NBx7SLaeJLFvDt9jqw6A4HzYNUzGrxsprtPpGSdBZnJymkdcSGA7e983tF",
  "key16": "3nVpZV5sJCfCyJsAFLjveThxeACavJZbHCXpDT3hPa6BwrFkwqba617ULJXUmAf3dcVbpmjjhXbv7XRnLPgftSzx",
  "key17": "FrJ86oXqt6rjiXzgWzYBHLtzJxNUDWPyZzMT3PHpgBKm6aMnaXUV5GVshaBWaPAHSaCBS42gV3RGXzdKtRHSBoi",
  "key18": "4sgzT38QJtrom4KTUsW9CMJZAM5X5nC3iZLUDFRqJpHK4qXzKHQikqaJ7EYAoxvoEdh3mXvpdVJnpaYjkjT9JrSn",
  "key19": "2refbsuddf5yZagVUpCr2iYDwoQJrMHQU1uFPy6kKoztzrnt3C3Esbv2r2qeok5cffWDqgLxX1CRyRDFhH9TE2zR",
  "key20": "5sgTi5a6Fj1r8FaVcqBwJgerXut1w75txfHM1QnDyoT7FpUxVnNWDaj5qn1G4MaBS1uLA35LC1EA92oH4Enrfeq",
  "key21": "2TeVEWBYmukSnivokaSKg6P4siNi5mEjMasZoxW4skni9DeYQnnjzjFd5hpbraok94ivec5TEwW4gYWdbLApex3r",
  "key22": "3Hw8ph8T92rhq4vdJ4GFimbaVeH1o8pMSQt7sgRr6Ev4HozJnYi3QejLrW5eNdbFRtUSTHh4bNbggxbBFfJG2Tu1",
  "key23": "5tyEWNhLabKJEWhRyHwmnNjTXQ6agNDUSxY5KVES2eUpR6wrne4bAqTWTZNLW8w5BuVoSnEc5SeBnGP86hw2YHXG",
  "key24": "23Z9AKz2DRVWFchKKw9PBLfFF6omGRMpuEmR9DQXfHhcLQS6RFy42Mnc9yveHCcdEyNkh2z9FpXig4w76BDQTUtE",
  "key25": "33KcZ6uVe6ioZHWE1K6MEbDhXQGdffxgKafkhefVjHkv1PvkgewdxXfvSv2UyFwoE2Q1FHwio3rFNayYVTufc3Ua",
  "key26": "23cFUSuYJDjcoDrab2pTbjVufHsg3DHCo3MpF4K6PjqeFFRo2HBS5tTz21Nttg22jkmyKDQLZbu7BB8WJqvAzXgH",
  "key27": "532tGrpJZWdi7dNWKpaNAuJc2HqXGceesdEZcHCrkBDEEiCHiEuoS7iYqAbhLCNmCCCKb8AMHiJXyXtLpkn3nDYB",
  "key28": "3k6qPdXUU77ZnzXXeBgg1DBzLAkvQVmXgoJ3hkWGrBBSr4kmdetc52gSuhm31oxmmJ9k5aJSc55aknjWrwNQqb9W",
  "key29": "4M6Nnr8UtmcMrGupV8TQuK1deyQwZx8Y15DaPYEcRcqUFZDrcY8wRMJzUX2eA2FEjUGGsyKEdJTNHvFNUEHRFp4d",
  "key30": "fSbVUyFyr4U8KqFKDvBvG237iM3LmpQyrYeqjQwTsUTTevKNuKQfRQG5oCHiL6NXfLvurR6p8sXD2ksTRv4tyDF",
  "key31": "3k25e2CSWMW2cdVQ9PYgereDypy2RLK2LH74ZeSsq3L4kbzNHDKqArJKBipD1CbSEQAaq43Jynsf3JLMXqBpb5Eo",
  "key32": "3MHyV41g4AEz3zBsngP9oQ5ju1ZariqeTdxT8GAYAMRdEy6G2cpSTQxkCMuB6x5XnYwbaWhn1fvVJiZHav5oV2k3",
  "key33": "3bAZeHFt3sacxbrSWpvZXa2rK1uUHd4bn1xDw7841LAyqzerxTxXiNA5ZGu5mdpYzBBJ5ytAi23DT2p4Nt9g18Ru",
  "key34": "3GuJSV4yMQSezetff5aKVvWbfYreaQV6AQK8urXD8RHZ8JMFhN7XVmnZqFqFy1RtrxaBgtEzF7TBMsGjWjuWWMaV",
  "key35": "44EhHtQ7c11qxgct1LUsdmXWrsxJXfRmUj7YShPLPxUpyL6JLQ3ZdvbLg6U8AUrr15wTTt2chF2SJXUpuTXUPsWd",
  "key36": "wvUHKsJaxBfKsPkZZ6AZFvCHPXBgZRbBuUSebW9NM4DbC82tPgNaesak8xj9Qa7BZngfE5AhcQfE35AGEGm5QRH",
  "key37": "v59eC2rNTKfH9sacN7SUhjcw6NBGqPmHanPvPcF91HiH82dWwD35bGAfdx1wKA2FLc4Sa2oSAnK8MGYMzau2Q8k",
  "key38": "sKr2XydGbtGW5ADE22k88Ht64enD37xbuSrHMuz8Dhw7zrADbPM6sXtmnZ4XhPcJDZzQuQFMgzL6T3aXWdm942i",
  "key39": "3S7fMswTYsxgGbScu2ZKPqYiGmjhm8ZsAADKb8vvW8shnE18QPns3uUCNyW7Hb2a7XbXCe27xLxUBUQ8G1HNLo4E",
  "key40": "54YQPzcEJ4dHyWUT9LbgyJiYGsg3hLi14wi4dUBDdP4oDZsfNDGibQw6rwSzKqbkumuyu3cjsncxa9Qs58wW8j5K"
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
