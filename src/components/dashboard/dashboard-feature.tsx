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
    "4knXaD5x2qupVYhigzMwBJUNAraobAjZKaVHr5CktL12cGZjmNocxeFduLzsZ2xUaaTEezACxj2cHXXaJ7SEe6FR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HyeXYtVDy8g19vyiaiQhsdXA4EZG8e7mYBDG9yBd423DiTNtCvBcaVDXTFho4Ffs3gjjm7Y7os24oViyhwzgWRK",
  "key1": "3rZxHPxz5D7ZKeKCL9BWmk4nckyZCdvuc7EkCuhwLwvoWH7fqgE3EhbLLjfQnW8gB5sSanZ7av3bajsRxUEQc4Eo",
  "key2": "iBj2aAVcJAqVirkbtpvC2MztR3WeJc5Fz4cq7jHPjYL21HKmbtB2cBqfhB3F2VCBqu9aVouuojHJQ4wckjnypR6",
  "key3": "2nfY6f2SB4TvtwBTf1NjpzFe572GYvvMse9CuPXvXUMFqGATxjnD5fRZ6u9txNjYwYnmmTSY3a1K9tb6KcnFqkR6",
  "key4": "3z7U6e7FHEiy65e9ViHsCogCn4qn67xMgNZkHn29Vfg2Z84hbd5HUnPGtRrK9dnfe3Tc5o2oNP2bp2PqjujHQsaM",
  "key5": "4UQokGp36SNpea2kvQzKAYmkTGWCC9Lqcc6dx5U7imfGBf2PAg6zTuiSRmunNwCzDtADe6uLx1r6xUruJKkn8Qdj",
  "key6": "4nxecyuorS2jvcA1Fsn982pnnwTZxN6Xo51Ciyaje9V95rEP13R5fjGb9N6Gv5BSGf27GyFYe71tPymasqn7wu87",
  "key7": "TBpQsMXVQaXSLkYKZUZkSrKbpKVm72gFu6wMGRTAP8JStRruK4S7J8NRj5dmhf8aarBtoxjPh37HVFmdQEAfD7x",
  "key8": "2jNfzkFBmcyVzZJc5W9Z9kBtbGBJzuPFgPGrZcgaaWMy46kpCa9DRC9FFtjaoTPNrWFsT64pTXeu7KoiAXLXxrPL",
  "key9": "2onUWKvA3tfCL67TUfXH5F9Gs7NUVcw4CeCyxUjwoBgc8xuK24xhYzkoDhx1P984MMwH46EDQKTcNUQ9x4px57Kz",
  "key10": "3mgRVZEngaTFBmqSmHaqfssJ8vU3c4hYWogpt7dc6JcnaB31ENWh2gmdyk72dMYGCU8EKeg7byw5qj2QeBvJpvz7",
  "key11": "4YQnFWZc2gQrcGQpG3APQZBSQvKqzD5i9QYhXm8gjLYbs9t5S7trPCV1g768VHvWmB7ipGXo6K6ANjwq5V8XJmWG",
  "key12": "4CnocmiUzMPLGCmnyYtss77qxVZgsFDdeg9yEBB8zzUEPwPp5AxfqvQfaiSDNKGohd8LHenGhYAXnm38PvtdPkbi",
  "key13": "3RTHfTy6UtiYJWktaNe64Az499VY8zyaXGBrgXc2Dyk9N8sK6WLdScfyH3uAbBHbVZUFdeoUSemsnLvUUpDTY7gf",
  "key14": "4UnXsEUAPrjKeKA4W5c5f4QGq5LGPbPWtcWY8rBDV8pz8zaT84FPpdSpw88LmoxQQw9FMV1CMJvEVtmMvEVHTAo2",
  "key15": "2kXXbHocZJgVXMsKfEYCJLu8DzNgKbyKown5ieHHD8Rt5ujzP2sU4BmukRg3Udv4PdSQPoP4NNKVJ3ywhTMxpmdY",
  "key16": "43EiQ7K5uL1u3SAwQHZYsemnfC8K8nALpaoRmBt2FcYFoUg3M3PHyp1aBFoj7k9UpQA1xmK935wM1w2zsJ3JYeF2",
  "key17": "2T3C6yr3dQikiWectdwzDMm9uCPNfB5zAHwWPkNUhED93ZxPqtBrHdnLjJab6dw5YcRKAR6Uc4ZhUgAewkJHjbYT",
  "key18": "4Rk3bgGuhHAANDPneHivVpR64wpfeaYs3YkcdNW6aeJuKDv452g3X46Drt9rfDPJ57gQJ1Kq2KCpBciNBy1V7nwL",
  "key19": "4vPW3EiUVGN1gENCcysco7DkHXj4BT1BEV5KERreZJscDXKmWBqtSaAjVU1Bm69G7a1GQP2dzyGUUVfXngxEbsEH",
  "key20": "4XpXimeXyEuEbzu8E5b5oM6BJQ1PPHFcDufPNFXz3rCMg8vqm3HtqTGbYV9ArZ8x5hvFywkAe5BRU8qnjwKNsPXU",
  "key21": "54ms87oTcmFqnrBnyiBjPNcJkJHwJXfwY4nsNqmdAaWvbcm5u8tzQuuqWvGc5Q4heUhh6JmgMVYBRpBeaPdeyVNZ",
  "key22": "3pDp4bt6N3Gjc5pTUc15Jyf4gVz3VSuJAUGCy2Md7AkxQDsBST6VuQaU28wJZ3UH33XrRcLAjkDFZxFo4YfLtQby",
  "key23": "67jQV26xbs4dvKwDfroGRATdmfMiTvRVCieWV1L6ykmWxgnT3fxpcNK6Ne8ixHoBrKMYMiS7A3UsaY1yMgHZGcPn",
  "key24": "Qn2At2K7hxBJSnyQRmNJT38hbLu4gsnjaQ8X8kAEumuSXkuZfihKZLYRmTmfXV8mWfpFR3hwN3adt1uvsLuRQc5",
  "key25": "5WKzPESoDpEN4FtPuv6iH89gKZapEwyv1yyX6dQLfKYGpETboEYSVDfpBoqczCPs9eacc6v1oX6Ucuu6Pj3KhrHE",
  "key26": "SrVfLTGeYhTCAnJrxsGMaUimz7gyNJF5SmPYcrGwXqwVZKqEdumrzXrqFjZpoPdT4oPEsXp2uAyYjsis7PFQ2Kv",
  "key27": "iY8ZaEMgbWBPHotjrd9zYnbVeZcSukpmcGf8XEkw5GvpqL4w2uBZbFvfufeiP4Vypkbic5xp7ytanoc7rxUhxSc",
  "key28": "3j2d3cyYxVJPEoQYHQ4yFKUb6LhVsDjxoqTDxiBRvWjbagXCEtzcANCDV27S1zbkotjHdqGLyePQbi1CrBLMxfv"
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
