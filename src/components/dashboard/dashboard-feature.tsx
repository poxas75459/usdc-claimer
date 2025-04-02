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
    "LC3peRxwSq6hJ5avMnxz7huyAACpS2KETjyV44vtJRNKS5GYqGoiYx2YR3E9xMrP33sVkaeokwuNtcoKuCcGA16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ci16iPeAY1wB2a1rv8LtbTVmtm4DQY7f6phmCYhUJQ8QRu31cp4y4p1n3dojknMyYmPLEgpJEWJMYEScg7g1Xtw",
  "key1": "28LhtN8B9sCoBwVCDuaziqpHFoaXRYQ8UHTULRwtEBRiyL7td7rpyAqihbbjd6FNzaBVKfzfs7ensR66mCUt3BDd",
  "key2": "4LcEuLbFHgZDnErmXSfpSBinCG3DCgYrEHi2JWitPRVwYfHSZ7Y1khG3DkVWUZZFKXNB9xMJsUVMz4yaz8WqJyTq",
  "key3": "55sS8T6GcHKxVPkxV2JyXSRUwuNQEWQKGSgcPeB8ZDNGfd87dZUPJPWPFSf5JZKdE9DpK1YuCgYt9vCtxU6rZDcW",
  "key4": "46FWMGPuvDZDsMQ5irTS9W2bSvMLjSCDK22fatTFFmq88qo2jCW5K6Xo7k5EWnwdY46td1nM1YxVxAWngaGYiD44",
  "key5": "ypmMyiRiqYVWjWZmJNzQZxQ1iBLGm2nvKHC46KCXrCksbqFkPpRpmajpcRHHdqyb4U5xSwBr5pqfMPr2pVuehbr",
  "key6": "2ZBxVN5y572da12AXupm8xw7WA6eDu9RQW5uofoBaBKhuCrEdgfb7vktPiQp6bfWxhHbExXBwN8WGoZiXhd56eQ1",
  "key7": "67iEeYPceSaMe1D1EHsTyjwJv7HB8HzRfnuxjPDNisY7eyNFvBcAk2n6TJat5i3hqrQuuSgehY6DXd2KeQGwypKv",
  "key8": "4S2qaiNpyaswjoCrfjZihHJAkJeCH1HE44CAHVEcD2oLMkGGvJJwxrZmzrED1ny8UpykEYsmNHeUjmqosRQnYeyj",
  "key9": "41PEYyv4PqXZ7FHXq6uo4sfdV8EY3mzw5anxpNky8UnCTUHnmDbupgougXsoWwFA9bgqDj7DcEJ8pshfQ4vwzSht",
  "key10": "gDxWg566qPUBDgtaod6aSHFYM7j18cj7VV71HKhHSibLVA2X25yXPNQvDW79ye5NGLQssLiMKZpK2tFrJyE5wHL",
  "key11": "3qSAQv1a2uzt3kUxW8vaViqQHJ8a3DZP5ZuJ1A6vKCHZUsmAoNXLzRjA57H4o5p3hzpgXkckuVhht6qRkFqG5stT",
  "key12": "3kNn3zUCxpFhYw9FNDEsQcScAa34AbGAP7ZShxeLKhDbfZLS8PCvDoXZcMmKHhT6WfdYq7xh1nho6HvotBS9X4n5",
  "key13": "246mKhtXGc3NTctrve6rJBd2s9a4dsNfwyStkkG5KTauMXLM9Mwr11dtgP8gGRt9HWaCMysAgdhSiUcx9Hw8z8rj",
  "key14": "2hrUmuDEe79uDbkrktaR1wJtZdejMdUboywuQ6pr2y9Ey4j57fdfngYPJ1iLqwmb9mSY5ZKaxiY1GKsY9FGSxz3s",
  "key15": "FdpDJSUNXEkqrXr6rQM8aY2skXEtBQxP4DzoZiNWw8X9dkH6HHAMH5WXWA48NnAo8xQdqrJd888xGRwiQYVMWFZ",
  "key16": "4UFNSEiCe2yHcorbiWdDeyrYzUeYUZFU1yA1Y9eDJcYvhrADHgvxcLG7qtUCZ7BeyoZDWsXQim9FVjwiGREwqguE",
  "key17": "4MkHCk6ZYkVHPAGmwpN9JTFGUhX8LfasztbB8aUuHSdhhHvNhMRYgnLRJNrahZFJwK8Z3VAzt7CZ48qGRTncMvtd",
  "key18": "4FP5wQHAH6xwGQmbahjvmdECfQJGrmafdBepX41wUk7y3CvjZE1DHUZ2y9KWHzxDoV1eizAU8fe7D6wCZ5irC6Q8",
  "key19": "2rUXrNzdoTQ65EmnnwwmGQFntQr8URAgVfARSh8725GrTSgu1SmYUwDsSs6bajmPDwm8BtrKHLYYqbteWXxbY67J",
  "key20": "3nkkkoqT9KQMrcymERBKgCj442Vm4kJse3pGYoeVD8r7fWjz13ZLTCgyvBm8MVhgr3suuyTUE171D4ArefUEQmSH",
  "key21": "AhhBU41ySa2bV7QnAuF4MjwCSgyr4yimuxM2ym7VjYwBeEkLrTi8BwGMu6MhZKD3YbvnEpakambXPjVHPFH2JDi",
  "key22": "v96LvJs2s3o8uRCVNoMLCUfKtCfBsUFNSU64fqpa7T3hALHL1fFdLVPjVVTC9VpC4GHHMykSLnNv5PRvetxyx14",
  "key23": "N1rYNQnqhkAg6eP3p6hQfKuGLvvcdpUENsHHezvEzASiLcgvrVmo5y2iLvZ5VRpF3GXHXwAscJf9YF2EWE9wMXx",
  "key24": "5CGiQ2zg5hNg6TRVrGkfiArkHJF7HqybBmoXqLRQhbgU2T47JGTq2arkz5z4SUwRbXw6M8sorKbhNEpW2Bn17NYE",
  "key25": "3S8tK4AWC6jPsdzogDbDWe165zVSBXBJwkrPMgDxv5TwqbqoUfvTEm324xYMiC1BmSsBenYjhdx1dEmtpx2nzXX1",
  "key26": "sw5WYKtEQs8kkNmsEDkKpyTyBiEsAK7DcC2YxAQCnUwejRTx9EC6p7LHR7iEVoMxr3gw53ZXPpc9V3eHsvxeQaX",
  "key27": "4TsgftUofTwRJT8HVz72Z9d54GHyLwnWQcTGTpQ4CDYGTeAAMXd6gnLFa9XJZZBJgmHbwCjQRRaoiLbU21wpBeQ",
  "key28": "3kGLA3qH5SwcqrnfEYPspATidMAvAzBJE9CmUdvpc5xtXdsx2VjkFm9HkSCuUVbHAh5N4brgeTDLamBGaCTpBadQ",
  "key29": "8ieQeaKTMQPjCDAHG7wH5r4nc53iUaDcgK71ihbFZEb8uSyVw7jAZ2JRkVPTpypKniPBFcuuJXUqPkdMcCd7ENo",
  "key30": "28wLuKjkK6WRMq1HyARG9hqWBgEstKhxRybwMzwK6N3qqCsMqpnyQam6BwLuXT54mqJXtQr2tzTJkkEAErNqvHTC",
  "key31": "5rx1WRm34PWBUwELqEn1oqKyihkzyEWgbipa9ByUb6BiDQG5Q1YeTUdjSyB12Ja348SBovgbB1K4mjpav2r5JZc3",
  "key32": "3SE1E62NK3x2VJUERN3ozmRr3aKoUTH7J7aP8gdQbryFTaVkusshVUa56HEanKniaD3bnXJjyrNsXo5S1LvugVsU",
  "key33": "27hTVzptU2Tt4hp2N4gYmHSRttVJU3xxdYWq5obYjHxnyBPbWZsrsJmNdhebpafhjBdNuP36mXVEn77myawaAnfu",
  "key34": "4RdFUM2DuoXDd8YJ22aCd8rU21SySFVtcipSMfDMZQETZbmBJqHGfYMGgYuhXPVWy5NXgADhJLLjYbNQGJZC3o37",
  "key35": "5gv7DAdWsZxjeVvpgUVTTNCye8y3NxniWCSzDAPZ2myUFNFEjpCqrAtAMv6CZ9Di3R6yfKLKDTsdzXwoT4ruKLJY",
  "key36": "5bdb8HNRJkPwTMqAZdtfdW35je5Dd6bxzxKcufDBU4XHeqM1wmr4UNwY7qeZJdMVs28f4VNgiAy99UwidYCWVEc2",
  "key37": "3YE2nFoJzYy7qCw4z3RoCHgiKe3VA2qK2RPh8ZAeXm3RcTgL6PT5HhC6ETn3E2FnNbssVDFEHnDPG4j31J5Q6vRP",
  "key38": "5zHbD9sP4Ws5kyBTSgxqbsuBLRUGjJt1E4YB1PXwD8ik5DiEPuDUNDxiPSWzz9ABUyJa3JTpwym29tg8tmQksCjB",
  "key39": "qAHHTBdJDTERyfNCgd4QNQnxdbiwv7f9cJQY3JRKZCepNq2hPELZqCGgy9cjKrzqSuGsjynNKEe8VU7zy5VaYZw",
  "key40": "3duheVkBiFEgafk8fjmPefnuayvDCHD3pqHBhqT7T9FHxc8GdxUZhsPzsRsmB2VPzvPXziNnP87ZBsuP6KHHA6KT",
  "key41": "3fQncX3xzo9nNApAijFa4JcnHoWNTkY7U4bV5BDYHTePhi5oTj6ymxJ6TNRP4NZucvxb4rc2PShqjnvKUNgJends",
  "key42": "2pP1eVfE2iTibPKQFSgtFmRw8utMpNifJVPHRRUPwEiMw1MaxWbrv6fv9mhyygygnA2zhcn5PLfCzYTAskRK3qx"
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
