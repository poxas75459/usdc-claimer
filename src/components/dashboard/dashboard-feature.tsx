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
    "znmNN3Hhu2QvajXsh7WPYPxqwVVLEer58mLMgRig5ka9G1GW5xpPnMCATBGgWiaB9w5rUuXg5veRoY22C35rVs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cSCLEPg1Xzdk6fxUkrZS4U6bX3VSL15tT1wXqKufcSjDDeak5SmaDkuh5h1kHymrarbpQpU42Vw1gAcxU2HnM8n",
  "key1": "3ms4m94Nmigze5i8tye2QZBHYHM72i6n59UA4j7uFyNTrAxPqSaK6wTJPuczKCRZBHBYjWqJBxFiQzMaF1w71zMM",
  "key2": "4enW9rEVgeg2fSk8Y3GLasYuZPA48mkMz4m3BqdHkDhCGUkdK4CvcmQ5TMSs2pcA74y8rNwQPErKD791dxQZ98Ax",
  "key3": "5doyLBBNdbsecscUvt7Yq5idC2cQr4Vz8g7jJPWH2EFPWJ28qPvtWWjfxB46wyM4XTAjbHvABnAufM2JCTan6NeQ",
  "key4": "5wco1FZwnuf9EnYy2SpGn4eCzPd2112EWoWcUgE2qMyPGeVE6CZK2eVRWWCfNEQXGfBbWYhcStHbpM5ou3nxMLif",
  "key5": "2kHrXT3CLNRMJTLRMeyDSXLVvzHKVTmyRaRkDVT1ft7RvVCFxNbRyLMCoJdVj9A2KjWttyCGuzF1LSD4CZvWzxca",
  "key6": "QShZobTm46frszdz17ihMGA6j2QxWaAXpKHXWtryLnBJu7QsF6LoL4Bnv5yazV741jCe5giv7tLoeCd3yEVCuvL",
  "key7": "4WJANpR8DD6qyCMZEwu9KXAQ2qddwgtyymBR5raZrb3khcYcMcvGnEhZhUExLLCdzpSsKEinDSHRv4i8jEvPrfuU",
  "key8": "3MEJDSaGbzhwmnqAhHT7c7VKqvPtbj7YjWLV7oyLWRbSR2ks44TDYfNARVHJ88XfiwAR7fzSScuAc7Ugvtb6af6Y",
  "key9": "34925xrQYkbaHkbZ111Mhuo3vunBM4KB9cNhbhkLwZHsJ4Y83QRvcbd2MA788iKnpRtEtiGUEhsoZ1ngpGBYZxvp",
  "key10": "4X82y3JCrnwNsvc6dAtcfL7M162gUWGBifnYLjFDbyDWBxmujpye8u7uF5nSbj9LBBxX6pNXRwJwuLGBJAvAJcF5",
  "key11": "65uLNEPRyXC3u5jzmz8d38RYAohJwgwttspmqnpiVSn53iYrRLQLynv57AGSkqMCiYeiJR25tuKNfoKm9ZQV42Hd",
  "key12": "rTHy1kWvPLy9yqepqJG99yYEGhUBkh7ph9mkbgMEdyfgYf8BCBao7CWg3tGZsmnYFrXnANvKCKcNgU9x4QSU6c5",
  "key13": "31QVpgTrdi7SyuVyfbG8vRVEYt1sbHuPR6ogoe653sqVLBxNhvqysHLncERtJ86o7CQXssLoKmmnpW7FfuhtuA5M",
  "key14": "3ioriMFJwGKXKDM92AFRx7YiZC3wiVBfn4ezznz1zfXosmUBCuZG7vDiNbMrkivmJbhimMF8WiYzrG2oHEztBjnx",
  "key15": "24CaM97hHc6Bq7chJq3Q5RuQAyLGLdrBnRBe6kFCn8AWXUrN4W7Yotbe57YpT4UKsFtRev8u5bse5CBRWvDBvsop",
  "key16": "5S3REd1kSBj56dgGeCPgVS4C2xqhUrhP8ArCZsHQf6siyFH2Hn56GJnyA7n3YYq5GEeNYq1ESYZAeM37qbjRSXyg",
  "key17": "2Fbje71Hdi6qVMTu2zJepkx7KDNNB7VFvB9zK75rRjV1mhkZtf9ceUxhbumzUYBw2ciaSrroyg1AUHewXAAN2hCJ",
  "key18": "2D2E7YuerAs93MMeTnJTKZTWesyosUfGoc67GE434yKymTW4WYQYqvrfzCUvpJNqfRtT14SZ41B2TrnhFfHc1GDr",
  "key19": "3TshpHoB1hMYS44EDWukyS6Efk85WGnYPS3BnJ3iapgymxZqv1oCqejScLYMAJipo2pFSsJLdwriym6HDZUqr5UJ",
  "key20": "xpXGu52m96Sk5Rirfq5iyYZAmy1ZcLXV5iwqjQtZNDpJVV4ETcNhGVdMgPoGrjDzwB7Gyn5FAYZTAzYM7t7WvgD",
  "key21": "2NUStPpSofzbJkVuDoj7YWAXp1KkZN7nvwT3a19VTv7qqC9orDcbWazDJCcthy2Rd3GxTd4X5nuSWiCmpcYb8ciw",
  "key22": "2Y1NNQARv6iMaz3oN64sgMV9VEQHbw8o6vH7FCZkUN9W6e56toBY3sMD4o5znZreJiLMj5CKeto3dUsWTwyF9LbL",
  "key23": "4nU685i1RKBdYPfH8Tm6GrTuxeLE9QEMGeiXoLopcqZQBUDfqz7hFkgSDm4WVLodUTtswcPbHSiaEcY7fnszNASw",
  "key24": "4i4cjkT48qYJiQGf5XRWhUfcLj3JQ6B5HtWemxgYRiCwS2hNSRL8mNB8wNN8XA7ay6r5cETnoCvpevvCKWcVbzvF",
  "key25": "2SaxVn3TzdrTHTFb1ovYkjqU8D8xkK5ZKCxxJhPJzZ1ZzcrqAC23qLWaU98XTGc3bpsmajsYNwK1U4Qn8LCnh7M9",
  "key26": "QSo5jPfeBGhpLMnwTb2Ndpv17DH93GnJGr7kgqu4eMxTMyjTZwozMV2tjQi6UQNAdSJiBFSb4W5AAAE8Zv76JQe",
  "key27": "34QvizWpg1VADrZFcLhZ1QLpBDcPwKSFieSWWrviAvuYrDEhfwqnTmman4HyRaXvDB4dD7JxEYYRSFTvagjB9z9",
  "key28": "2BFunLYc9NRdPYWpP7Rc5L6iaVQM61HJt6eBTY4apbChnijPp91j1V7pAjxuqvmvxEeRebmR7PgmheybXascakwo",
  "key29": "4ZwnUif6ApWP8LxiT5JaC1XcQHLY3p4pGCgnfUE5VH2ZRY5wJsrprdPDxWYMHcATomfgrfyRHrsZw9pszEUEeaf1",
  "key30": "4jvy85WjhtpFTUsRZANqhtczSvBtbLUwG5G9cXx79w5zCU4eRajPi94yS2Nxa1989qH1QaEMud6h73wU5w1UFeH6",
  "key31": "Tg8kDMGgyx2PGpNeikZt2evDWKPMswnX8jdbQkAKh1G22QMgX6d4CEVn8EdX4ZMxJdnAmB25Z8kHdjDFGH8EyUM",
  "key32": "23ot2BnmeMCtAMxpcHqkyTaumf3UYG8CobEigf81o79nRcx2QL4dfjxjj7NDdh21SQaUwDrpc2KovW5ydnYB28Bk",
  "key33": "65VnJ2PXTtDe2ddD9r1u1hMBCfaGyPSmpdy8DVd2UztaXQrtNZcEpzs6ScP6LLaEC6SNJHjCMLrbHEvsGs9aFqKa",
  "key34": "4HwFen6HPDGVVvZLTk3P8DFeNKGn2R2vz2eFuMma13AK7SQG1Cmz9iqbX2uTN92NK9NZhSNsPHevgSNGME6qVP2T",
  "key35": "HnvWT5n45Tc1RipfFWr1vVT9rkmVbUaiaZSYjw6DksZj3Egk1Ps4LAcKw7Mx59dyUMCJmdDcydUYyx8pZZpQv5P",
  "key36": "EMimYGEcrUwr3xv1tgBRYbfLaWUcg4bqS543r7pmKKqPUzr6uruDLpk9v3NWAuKzn8Hyq4e6NFrvkg9zCig5cA1",
  "key37": "3t7T1tGKuZCAXV6UDD1t6DXYhctZ6BZhszSmMi5cRn5eGZCYrv7EBBhjbENfFgGvJrEpz195ZsUogA1epTbaGFz4",
  "key38": "4hs8WfWP4E3FNCPDGqW58u7eKecVnpSruR8dvQgwb6jFmULnRHfuPzfkM5AMaZF19GSY58ZheB26A3psuVGTp3dk",
  "key39": "5RHQepmQmXVNSdKQXiAyxxEuziG8FArH99qWj5ej9o9vikhHa4Fe9XU9ePdCbx5DPHLEyuN6AnMrEix3gEgWyXpt",
  "key40": "34Ffpex9ySQgiRKcGFQn9hBzFvdhxGhynzRH24Bart9g5o4Dvc7aeZrv4KdM8kcZYK3L5X7dFs9Ez5PcSd8Amzex"
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
