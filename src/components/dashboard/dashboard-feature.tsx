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
    "29m3KVQLoBuJr464777xHGuxcsLUi7hiCYHBzQAknxzzg636QzUwrQJE1seV7ssDaY1bh9efMiT9oB1u1X3vR419"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YMV2r6uz789stVkwjfmgSoEf9G52L1DadWBqgTBr6T8ehLsRULE6ToJ3MSWA6VeCEQCZQKCyMqv68ocwD2hHZi9",
  "key1": "KbjH7ShRA2FKpDZRPD2aoQMxG2gzeLKFk9VAGNmrTaRHU7YPy71iTjMCBU7SnFWvXdm6fzypPchAB2ipaKhw3LX",
  "key2": "4xZvUEowwfitrSSjJdVrCKSxePxX9YCVUqc5Ddp9wAyQPtU2j8eV5XMDuYAeTAavrASKeePxrqGmMkCvikkokN3b",
  "key3": "5ZanTeaxB2ewp3AGsaCS8FCvsBXYNiFRgTfFfsdMcr2FgjFNXqT5u9eiFaNTS1Krvqw3DyUZkQDNUNPkGX9YWnhp",
  "key4": "39F5LBMYHUhciUpbPoKrDf5DVYpKPM1MsewwQkoai4qVx97fVaRBiXWApFCKRMX6HidgbiNHerR24Scs8f2dtbcw",
  "key5": "2pon6x2kmndJT7b7qkar9CFuyRNVEtExG6vseaQfUfYhr1JZCMXuK8onZAJkuKuGaUfidTWbz2UraiUtwrMabfE5",
  "key6": "3X4zPaBcDCxtREP3GdsioUp8xc2P3vqEJFeQJZbwc7gYcPx3zqAueQoDfcmpaovS2CuBxYhghV4B37YSRUJ9hgv1",
  "key7": "5m85o5Hejt27KDVvi4tK1WbHR86p9B1T29ArqkEYXGtcBCCAqJjJLtdGJ5T7UPMdZTD1LXyKJcpHn7R9JTaLrM1J",
  "key8": "54ucvU5JL3BrA2yrBVx52ThUe2YUaeYs6apWaGpxZFzW3cnxnhEx7Yiguof8VcSdk1WDnu4wTpQdrEAZjkinskVa",
  "key9": "jH1PNaFB5n757Pb6QBfpvenjEetHNyUwm896hdjqPwrAEeeReabWhyJkahQkv5WeGtd17tvJQj8orSLaUzWBc1X",
  "key10": "3LbjRhLSYkbXitJeK45d62VbMXpA6XAszzxzgg4thzNqwn8ykUND227dmWhVPJNHeugj2zqhLqG6QuFh8wbUZc1d",
  "key11": "494yGM5sT63YtKJ2xAFJoMUSwhE7fSo5MgBhK77wT3U5sqPhbNy2qU77X2JmVXSy372hbtLqByxQx6pGSqq3gGMp",
  "key12": "5Lru74bM3R9AhotiySwnQMm2n2xa19kb5TH7Y9k6Kgc7hPjzAbLuxbYfLE5fpVJjCnRuU22DKE5oMxY89Bv5vBGJ",
  "key13": "4GAbQ5MPWUVZXoXgwB3GTsLTCFUetLKgjXVUyRMjrpJyJJiHK92t3yn2w8tHQzy4ixKGjzqAzdgYMDXuPMzS5bj4",
  "key14": "3y7GwLZJXFYuu3ouehYbvgaaBymp1oErGN1CibTDpgPGZ2iZFVgVLQDUPDzcLQQTkTofvAJutaCzDdbAd3kuNQc7",
  "key15": "57peM6Mg9NCZMeYkkKKrqg1CLJ4qL8Fk7XX92dx1JQKAttNPaEYCxnvt9s53q2pa83oBzkDoQdkiNng8Jcxm1UtR",
  "key16": "3gg6FKWBkqgGtMRoRxcxvfdXHfCAATfoDnA2XppWbQiijpA4oyX9RGiqtzBcceuKR58gyyBNkRcXQtAJsLfK6dvr",
  "key17": "51ZhmdpjHxYY7CwcUfeZoyyRQiuhzFXxPwncKKXj9dTMmJ4oNfbF5pR156zGnaa2XY5HGM6t12fDkHbLMbsK2zbh",
  "key18": "454fiBsMKnLYXdqdxA4kZZv61ZoLJu6pNECMZH1tYsXPpkyvCz6X5NMHFvrYscnuBNrxvmxg38yYfU1DfBzD2ikw",
  "key19": "4VDfgs2BWGLhi1QpLUmLhYoReuSKFjrHuv9Ea7s7eJabVQJrS55fkfdQ7Hyg96CNpApAPwDoZ6fAqdCkJ1WJwZ9c",
  "key20": "uR9PUG7QgciEauD4DsYWCBYmftGaWZ6gyacBe2qLRuqD5zwmmcExeUun1jds3S7qhSYERi1CYVd4oTKvR1Zkvdu",
  "key21": "VN31ezQR6ZagtiSkr9DSRTg5UT1jWUsnNrg1khTFjgi8GUeXhJMRmLZgogiekjHU5mAsa6tgoS9YnstGLwSHRTz",
  "key22": "41QQskcvUMskywSVizStjrB4QBA446PtxGGiiGHkZ68B6WaQDJXPN7azTJwYFxcB4xEuxwSYey4nG2B7oe19KN5p",
  "key23": "5SM1ZpyHF5dowYG8jb3yNKd9aDRTbg9PcieiFkg2jkbtYqmcuADzYYCiZyiTHm96yP1RvzS1yx3HkTGvajxu9TE7",
  "key24": "3SvgN1k5pTfURrafZTWsgKp42QhSPqYbv78VKmRVaUJzszNPZbtBUZtsmag58wfPwoa6oTT4TzXFfjcXt1ueTDmH",
  "key25": "24HpwhPngk1gdXLw6kpBwwwvTnaSWQbt1dqgsu72SmvfzST8ybkZ74EgJrVAVLRHWC6UE8W46z7DDcSEDZ1FpWX3",
  "key26": "65WRKUW4siYvfBZpjEvdvNcRQhXRKovEnruGLACwL8Gsq1AiL5ECm4D1z1WwmVnqJKyDV9TPgV5EQTZhKVHcwRz5"
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
