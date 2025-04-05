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
    "2XoQN4Z3rtAMGd6Y6Qjww9cGb2sHSdACreMAumyjdMsuYwnz2TGtJ48pCZSfhhPkT89fY9DzF7sFTgrkCnGuoMuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ZFqyA23tMsa3JqGGxp3bgRL33taDqmNwkxvVKZ2HgyMuLDo2y2S5wG9uDFhAGto8jBpbJbkD5a5L4mNNBZT3zJ",
  "key1": "3ZQGipaVnQ2LSbNgiU8kydKi1EieWwYUezUpt9dyNiu7B9pYRbUgKEjdG9iL5ue3juzRkAuxngJnYMtwqddctV2w",
  "key2": "3ad2kcVpQW6MifN9NFiU31y7CqViWkgkAYvBXrMGzK2LDww5awy5eA6HHFEkMo9og1XEtjujoCeCU5Z3E4QatUiJ",
  "key3": "5jDo2y2RJwtQbSWwuvhL7hcRtU8UJyRiL1nz54DAURGVEjEhmctY5tVpxJiVXWNWtvGdy4Yt51GdiTTKGRJuSmoC",
  "key4": "Yu344VojPqbywptyDRAvAce3NNscaGykLQQWyX9pzqehmkpCvpSN4mXPoADVkRtF16Wodg8uk3xeSJqYKPkfkLA",
  "key5": "3DKePwtTq5pUcaYuD8Djgtvsze4fKD6EwfBVkUe4mi3ZP2Qy6RjoimJCCz91A3FkW9ecnpitGErMSvoY8gP67vqh",
  "key6": "SeEEL4BfpZVmUBZ6eo53kBzSYXo7Sg5LbMxiCSpPZeUG8irXkw47H8mC4omtDrZ8ULeUNxZb3aBjNwFoeQCCSyF",
  "key7": "Er3ybCjvGxv6HgQgvc7U7XeXbuNnHH5yCbdLgKJnDTh8WDpRtALsZRjuaQH7ZnLKKefBj3xJck9H2u4SdXJQDVE",
  "key8": "4Q38WCCtECGP5jaZbVND2xt4STGbBHTcwcJqJsuhqeRoj31pWR8JUTAkqdSEJRZTrBkWiUwKGwPoQnw8PhuUhqD2",
  "key9": "5b2uRztFPzS874mM5yS8ZH5JvQSHWgHLvcAutp1bjUkasQ7z85W77xX96eJ9D3Hv9fEUftvcsL1M2PoJ1cbny1ru",
  "key10": "3BKEe9WRdGyCvNnF2LAtohmerNuMZUJ2ipNhwCNXNdL5tLBBKxtqQnLnGT21Vw2hitrx7wMNQnuU6bvnWKN4Fmq8",
  "key11": "pST1PL9kHqyCoYjMcMopqiugjWAjzPeYLqFmPjajZiJk38tey62ME5jtrz64961t38aWEvVRv8Ya4gyNCKQvHmW",
  "key12": "4ePTHhAbiBiF5PASFrtaWLhRF68DBmoexGoHLMKqpkAPnr7vjfccBnYYpcwKcWDxWLjRHED4XErzmimhiSjAUDPA",
  "key13": "32Qowr1EkGagtFvwXKq3CNw9peno86U5BDtggne7etbK2fAiDtuGigeUp47o6RLCksasV3ytQTpjnbqn2SS6gfPL",
  "key14": "5rZB5BRW6rwRxFWJa4vM8DMk1RrMxUKqeuGgC23eQYQ2H8ppWy8pbfhCpjs3DWd2Lb6no1csZPcVbAYZo469Xxu2",
  "key15": "47aHxKeWjwR9Zvp5XHbFoNx5G61XzdTEtGsE3MEQUrA5RRqkGsD8tSpLuoTxt8e3G2NEF8RmWygY8SzW66jrWSK4",
  "key16": "5zmjLTgKS28bQ76PLdyNgiaV38rK4Umt9BR85fMjpp5troC71eUHrHtoxXYJJjD3VFsyWHWeh9CyJEVB4UEjSDTY",
  "key17": "2kC4ZXYDGEudCYe9o4PW7jmw3T2C9wmnZm73cVyWjiW8xMaRS2t8zuMRYsovhW96Fen8VJeaJFJqzXGW67gZBWNk",
  "key18": "4tMVxCGMWULMH5Qn68smTHXWfJHhU3dsiGK5qyArKkfnKowJk9xNddDjks1LXxAbTcd1xUE3BTdzUS63ocyZjS79",
  "key19": "4v4TKhYyWq6mtWbp7m8tF2SM5YR4c5QM1frzBtedA2Q8AcWczu7Ko1zkwgodSFBpHn93jTTXhQSMExn4vyRgicsK",
  "key20": "SLSxi2XUYQr2y85TxHbiDpK8Dzi1HPnNror1n9o4AF1iPZ3K7oyxpEgfUhPHqKt7aS8FKQtCy8mrEAxEhEmK4Ze",
  "key21": "3xkKfQndsyfRi7LGLppvXBPdcEWdg4iAAx9fC4Zda9uqroxNgMbKcZfdr2Mof7HPjEuQeZYt8bJJ9MssaBu5BEKv",
  "key22": "yYZxCDBUA7Rop2ZTBT7Vc9Y5SyenHfgAAcLZvXiedtSr27f6LTNzJmrJmzgFWQk4UMFKA97MwUK1DVhFM7PvUjd",
  "key23": "24xdPJ9H12giByStKjqdWz3yRV1PVe2LoySmJGYSxt124ZcBSjZRTzxNz9h8xq4UiRpfL8qBtHP1pXPnxMEFLsEn",
  "key24": "2kigzZvU63yxfRu9xgE3HDqiH9FsmG4Ny9eyQENZNWuCDY4cj4jxYceLassQ2eGAFzcwN7vUqKgHGtKKtXy9iqq1",
  "key25": "3WGq1KYUYN8iPJjNtP54nW84UsPE39py7WvjL73BSFSaoMikWRWRz9QHW8QAG2uUNcQqwfgrEzcSPpt6ym9u66Et",
  "key26": "3ZSjzxogd24qccWV41CcDWDoGU9dBLyzC7MVuuLkniHcaPJsegtHmRsR3jkjVyW73aDDNGUQNkN5sSh76gsS8XF1",
  "key27": "2GFmr55uBaidnH5vkydBMVm9mwUe1sv2tyA8ocu1VE5cMd9k1LwAqsUDGepFrFnE419ijTFx3jqXxNA1RMnfkbC7",
  "key28": "4c2Yp6dZW5poFtM2VV9L27NFJYYjj9x822cPac5QGRrxAC7mhoeHhxbTscyySvvvsrnXwR8423nUXAnxDuHbh9Ui",
  "key29": "F2PyvYAYrh2bXAhNku8bMTLUGwBimJufs6tP2rKqv8JTX779r11Xsf13LmWpSaDvhYeFWEKgKumJpfiP5haMViJ",
  "key30": "hVWkCcposZ35MKn68LVMYgUbLa6mwvTW9W58BUL78U4CcnRmGm7zsHtb8BUHRDjtiUCJh2cvpihrh5gGSPRr3ib",
  "key31": "YxmZXDrSzTcAn7TW95rVSAbaxdK8oqnhbWXHzLve8Zfx9ZLcXfT4f3iZMtkVzc9nMtnsm521qmhe6vd5UkrGiLg",
  "key32": "5UTqSJkxjxZ2BxfMMKPtBizXS9yc9keuvrttdWbwcXEd2XCxTecCnV6RSUMxH58nK8CmdWjwiuWmCjDGUaeWgCfP",
  "key33": "232csrAkSdNyL6krBrRnrJt3fpagdmDEzzh5CCk5ohFxEEzQKKUKMbMPDg1qvLYgsKvFgXduCa5jfEvZnpC4yiV5",
  "key34": "567D7WDxp2CAfr7meaV9DTCLzuoCWCHxY55PtUL35Q7cKMzX6EuR6gzYpCfecTK1QAAPeRW7np7Cd7j1Kbj2Ur8q",
  "key35": "27si9yUVoHaKWf2XfjJVU4kjPyfenG7abi3XrUhbrEiM27dwpdbu5md7i6BBazgD8Ppi9pM5GRnErXcGH5vPWEqP",
  "key36": "32JNALhGRshgSvzxGFx6QBnkdtekdxD9UkFXgzn2AEKyEmBhztvFrkCHSxMiDzFnWr6kU1BYSMRePAbLmbEoPjD3",
  "key37": "4QrLNyYXEJiJBgatqM6EmbAjqR387t8q4TCYWP41PRxfGLSvDEFfTWipJrHkSxfxoD9n57GFKUWGW1FmLW2yp6yh"
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
