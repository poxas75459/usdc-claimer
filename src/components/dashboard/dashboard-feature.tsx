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
    "2enz9NSpmCmCxq8TEHvXGCzbESHc23usC1CVf1FV2iXwH5gLAAeL4rXoHq5RJ8DQttSESKvjhsASTQYveC5S9984"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GVJnBxLoegD1eU4kSATeM5bpUwnPPXUBMnTXAPUdek79PqEDGoeBzgPS47y4zWnqAu2P2oEBMAwpedLzKLp6Az7",
  "key1": "2r1LSTxn8yn6Jd8bLgvw2SKDT1En5idY8VC9gRBmn9QryuBkKGZa2icowZycgzno3qzCtgYYJZsVDa5QbuScmCrE",
  "key2": "49UWN8JpV3YD2WA7nwBXdjdkV9p4Zpu7B9eAkXRgtErvTnZgq8hUob5LbynJgBUEGukc1yhgLEQ8aZCnbDNhqdJ7",
  "key3": "557csWi96PTEbeqQQ114U2AhBmv8Ys3PKpHeJD4Dz3aZcNbvrwTRnx36YweM32V217PR2Nx4wMrY4nEJW3uNDBiX",
  "key4": "SXmFSXjC2NmxDvAfucdMPTVdUZRs9aUre1TftgdcXvkLp9KRYmWvpZwu92uC819JnhWSk9LpTb8o3R5eBUvuVPM",
  "key5": "3x4uhA2FQP9w9hcrESg9NEy8fHStZ1WQghbHes53u9b9fLPNwruVW4wrgU8tCgDyAJUp7DeK5AM4HQXbQU9pEEFa",
  "key6": "3Zpfdy5aDukCnkEUN3gEe6FRGiShJhjHXvPYGauZqxCPYNpYuNjXNceVLn5RX38fSc32oRANkW2B5rcSioTwbu1a",
  "key7": "2tnDuPrinka6yxTPKX9xFLzWnYcdzvar3sCH8VP2tdsN9KcceGDa8uPhWNA8UePR3cmnaqCoGT6m487jUGVmXYas",
  "key8": "3JDAP7miEsDAqSRJ8zB3aFZ7Av4uwKhoMksHEB1jZj6LUMMLrdSgNftw7txR2Fj8Dd5fxS5hTzBe59BHnhK2xErr",
  "key9": "4HGLR1DEAE43DtJSQ4fRhZ3Gazje9QD1DQTJ32CeTjETJSLZbEumoP48jVbGU9bPBX7axcYucNk73YVziBpKzZtL",
  "key10": "3rAcvfjCMZdCg94F6yfHwAAUrPwR7oGe3DBCuxw2kQWgYSjqgKrceecttJt6KiAWr7ZnRX9TDLBZNCZWr4yLgRFQ",
  "key11": "nMGC3HTHswRyoTrXfRUAyjRD4ohFrnAbZxEEVGghY6x7TxxwuSoqt711Gi3GJN1uxg9odwbhU9P1kVLxWndyKtz",
  "key12": "6fFNFGBfHwSBRqit7N8QJL71bJYKF3VvTJKqzFyy7eGQzqNE4ZXCKfShhEabawp3qRhWrGH5rraBZZLxXREyMSM",
  "key13": "4Rvfek4PbaiWA28hG63gYPPPypdzZqWq7A57gmo6xr4iBjSWZCQgHeCBjc6cTZsxqbzfQYNBxnWjXnq6usaN8kau",
  "key14": "bYB6Hn5TX1r5afSom9pjpUG5dp3yhyzspQHc5wqCpM4gu1pF1n1NS7GJb6UPUR982BGhDrYnmSYQow3P8ChyAEd",
  "key15": "CWcJcfHnvzfnYevQLaYkseAkuF2RHpCSrKMNPRjX4f5yK4QGfbgERDoYDVF3DhjR9M6mHt52MhahPzwoZjLgJBD",
  "key16": "4VxrXbYWLkJzNoLggfryBDKuJS22Mw2vdeAYc59GsSiA4NkY1hJ3PqL3eNV24RTZzQ8zrVtqxdt98iXAS2PTnfE7",
  "key17": "4y5rnuiSChqYfsYJ754kAtWJs6xMJQZPssFQoLa6riLHd46Xh7UwxxoBFDaH5rYSJxcNVwc4rbYV5TF8HEbsWDvm",
  "key18": "fS94RVybUWHRmhx3dTjynbz5B2nLQHksMKpiPEzmHL2zL2BEgzp98FKKCJ1YHDujiRMkzgGh6W1fFLPndzobX4r",
  "key19": "592uCuHGVWvEVHocqBdSLJK3aygC7APr3yQACWPyJnobSxNTQLybKN4vF5Wr79F7aSLnwsFRAciWRBtddGVzkiyx",
  "key20": "36JrMWmC3UjD84XdF1oRNNXp8YBWMrYEBaq9LiQgAtLbSJFGuDJoGWGWfhvvVe1S5dx8nn4UTiAMm2ypaeoXE3mk",
  "key21": "3jnwj66sCMz42nWAsCSZ3bKkFdQznWNUTs34RaKb1eFcdWPDZ1sQdb7jurTZvML2BFFf3CL7FYjPJqEFiat8duu4",
  "key22": "4D265a5thowEXtxu8eFhErDiPhJp1ayANtiAsLetNNw97MgtRr5aWji7Wy26E1Mcnv6zR6XVcNDkZW7ogivukQqo",
  "key23": "JxV83fpizkd2npp6yp6z3ugEggam3W2rSZ1Ssn8SW4GDCKFcJVsbMi4bXMepuME2kB527thZUXMVVZDYHCXufaR",
  "key24": "2QxzhAx17rFoFkvLRerfeWb3doGjVixeZ1pKKP6vcxkaJJgKnuVF99P2YfGMKXq46MTy65U11dLCw9keRZWGdMG6",
  "key25": "3FShUFCPTSxnuQ8JEfGcWMTyveoKVUoywoQzDcEWhohpyBSU3F36dwQWkeP8x8wAk28QnZxStunogSKYb8EaxRkf",
  "key26": "SaCaZ7H3mnV2EM6b8irb3nXP1qxy8R4hQ6esD8859p83Em1kHZQjA414mobjNfvasa8zMtBmDJeUvcPcMmmPrCs",
  "key27": "5w1fz4q3o9AweXi2rkmEqTXmTxH8USEjnz3CokKiksqZCTSSZ29oNcJHfM8rbSTjhMh9kdAzvk6oVL53b3wpW4vM",
  "key28": "ubtAVLYtap2Y9Wz1wDfcAegYuUN9ZPJUCfxiwMLRnsLUTicpmdHqEKQBfD7EvsYuxwxZ8ZaZ6L78PTqK1X7qKox",
  "key29": "5JvVELAa6JsqupVXHAn3pUrhRwQAurzMWM9JtjYiAz6wf21jnJiptUA5SbxjmcNLMgujcw6PRMrH4FUYbQGkVGzP",
  "key30": "3DNLfUyKXBk3oN3CqagYQ8KGFALF37UpCYYxHF6VegJ6xABmVRW9opMLLG5tiE4PiPuaLw4Vr5sM1dS76dgU6UVz",
  "key31": "3s17QSdqq3RKWeCVGKQ4kMD2B7qZuXhc2JtmwfvmXkFi5TTSo4mM782Q4Biv6nzdDr7BCx4oQQzw6NB5DtPh97Gw",
  "key32": "27pdjr6Y6gFoPVTT1M2khY2NMCbCQAieq1zrNFBiDTi65imX6sKArjsRk5kfVf7iegbS2T5p7TfJrxa7qrdVvjJQ",
  "key33": "5qB7me5454SE8KG1f1mLmDTbt27Tuo49dB2dzuu6xZqJu2NwGPgFyTLcLsnuVj5f71naDLeCG6qqnKwinu6wT3XU",
  "key34": "2DbadwWiKxsEYZPrmiUUyDpBc5vKEuNspRLaSYF2qj4SpLnR7XkDz37VCQr1Ym7CXGwemRvLTqBb4nnoFea2MjWE",
  "key35": "4nM72AU5qbFJvsMs8TUcedqCHMrAhkLr8XtwRqMFexUk1woBV4dZncFBEjAV2UBvpRDaVyURHkVgRPsfwNfdD3aM",
  "key36": "63kgo4WV86XkWVZuriLKVbB6CpPbmQPgJAC2ACgxhFNL3T3hNR6nrLeyNrCM9VAb7aXc9wGgXzkqH1xKTTjcoB1P",
  "key37": "5Lewzw8KpN81sGhuH4jTbmRyshRxFGFfiky8ALeXseJWzaj1ApT3fRqBqR2SrcveLgLyrz8v94Gsp2xmGSKETRqG",
  "key38": "2U8yMMFsStJdgzQmeXtufQhARDocTUW3uVesK7zVT1NPSTnRyBLyJEbwVc27FdWwkBFfKJm5MxutR2fxdnZT7PST",
  "key39": "5642LofQnuAFBjPUBRHnkVNm72KNkZ88n9H9sULNmXtdSTbBaLBFmdLYyZtns7nejLLNzFBjVWijDyD2awfh7KH2",
  "key40": "4PAAsJULcmFPop1x2tzUcFztK3TarTq84HjFV6FgwYGJ4pgmWrXDqaU5ytLETENhmuphKbejZmhbPDRh5LqkNKiv",
  "key41": "KUGXqVQH6DdVD6ucNvc17AeovtzpHtCR4uGBP7PR8fKWFEfzHY4ruizgeRrJHYB4rZCk1QSfJvfmDF8D8Ja12uZ",
  "key42": "5Av1AbYZisfGvuxJ2zSti2XVo2eXqKKdV2BXYkkqcuiejT6TtWfHRoX2CT9rGZEcYqpiHU5cSrUL5Bf7wYvGTx69"
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
