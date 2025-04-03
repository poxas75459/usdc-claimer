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
    "49nkkCuqZAUNSYtEjiBdV2vc9M6efVnzU9pdD2o4iEsAWBTxTaoGSNXTTVK88p3ED8BdnT6rYH4Q93L3ER1goJxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U4mLAt7K9C2z9uEmL6QDRDmTnJdbVeKoyUhc35hMA5RR1JYBmJifzHiCvrK4cUHx3ckue3d6V5Wr9WG8oYv5phN",
  "key1": "2w3NFhUHep7kcveEjgFQd439HKZECfp3ZqerropfLeC7TP3MjYNRCj3ffHQ6L17xvzpFTo8d7txRbgh9Kzc7dxew",
  "key2": "3CkRjnKjHPomaqQ8thXaWHsti8KHehNUCdn7CPq5ovxkWBhBJidx8dxoQsyEzPD7w1WEXtPTkZAWAhk9PAiXsiwq",
  "key3": "5h9GJUtD44f6oJqwH6HoJARL91cNPsUDxNX2dZjpUJ985WpXsjXBYi6UNxs7DDLVHoNgdyfVtJcA29NGNEj9EqAM",
  "key4": "3dUQWxMroN2igbTVTBUNULiymrLcDHdn6vfdcv2xVc33yNwENJmdN8JHHYrQLQHHzhfuk8uwWaG9x9arMBrJeazn",
  "key5": "52JUey5jxSWRKyhAEe95aFJRXW4jDFrqadF4jgDBLi8CNUY36iGBQTfcUZJ7ecKBV2p1G4ET8M1cyUcE73fhyb3P",
  "key6": "2MEDkcDfp8Lto2BjcnUv4aLQcHZ83Tv6BJjqMmX39DScPBMb3hwhEBEM8F3tg6ajYf9gfThWEiPBA2DVSUSyk83Z",
  "key7": "5DVSPQ69k6x6Mj1EEM3WPcwgmgtJRUdrZrHGLDERQPpnaMkJijfo7kgENknTPYi5h6XXmEJc5FQSsu48Y7CUDp3i",
  "key8": "3pmLR1hJUAqiqBW84rQ7LzfwpdbrXw9wwfuTxDtpkvJLyGAEQ7cvUY1YoK7Ly5NzvNZp82AZpK28kiBbXXNL3xes",
  "key9": "4MPKeJ4PxPvQrapHWTZoCAJQ5jPLHmgz3zc695fhEFPQCNUCUvoY57v6SRTVm524J3vaijATktoKeLSacU9MksjA",
  "key10": "5Ly2bh3xkF9TRvcGDNHjqL9ECUUQb7RNVPhijYPouQzHKtZp3QC91r7aBKopcp2PJehj1PACTPkZKn6HgchCRxCi",
  "key11": "34i8J4JnSWdqcW8eyYCGQAXUEM9gvyZ7a3Dr3hxpK41hoNaiAQLaFZvGeegbJKjpS2FgHgGAkKQ6fz1wRvGVZACh",
  "key12": "5rf8cUQSchKyVw4p1jvmQGUDEMmSjsBeKCouRL8wckU39P7jN7pThKs2Vu6tk7SpbEpWF29rxd4amwGxka4KKMVw",
  "key13": "7MbAqvAowJZ4pJpTDd7GKHV4ZWnoHpTHsNr55fyqeWrEGBmbhTadGeYy8EAeW6GRxzzLhv3roh3xibjibNst7Pa",
  "key14": "5Cu8qWjJ5CLsA1ZifCDdde291KEv9v4g9ZgZvqWKvFSFu2TehLQdda9wXFw5gqZJRBjUkwSfFPdLTSYLXf3EP7mq",
  "key15": "31rbgEu32Joeisv8bZ2xtoucvn9XTYH9kuSBLZ1Zef12WdvjjaKyuwhWWv5PBzozJDtKj6FXcmVTmJt1ARYkqxeZ",
  "key16": "2SzqFbKWTDeFmmUgX8m8n9CbVF6Rv8u5uXWizcWCCzpa9tLsHjEQnkYxnP5JUELGEJXwVMEXKK78ztzARgoQNgbV",
  "key17": "4JRHxQLsHTFFntwzVgMFYg16qxJXcsriCnFx9VXUjy8md5u9ssYkxkm6WHRxSXkJj3nszfFCDgcLhjioGTSJHco6",
  "key18": "2VPymtzsyTM7cUi34W9Uuh9Lg4myGJrtYeGYgcf9mTsi3mMMiNrcPrtPaAGNM5PFmDKkEvWQitNfeWyVvChYcQg2",
  "key19": "67EeG2mnVQSgbzYCzPvwZVqRsyr6hmdUqRcfv9XXosainjb4ZCCWakMzXydDkxRAssyvw6zvMzcSUoZDcxUzPpKQ",
  "key20": "25Vkxxjju3KP91Ge4scU8BfPhkgKV5xocrU2opLkK7ddpLNfuQABnGU4yyo9D3ZhtLY7VYshrKmtxfQ1rnNNp9Gw",
  "key21": "bGgk9UmADmAUN6NEfzL2fW7sm1XVGvac4GaaYc9J59ArME6BgUQ3RRv7ashwSD92hPNniG2uswYQ6R5avKk5Zii",
  "key22": "2kgfJHx5PH1uTxjr4Kaojb48Zc93FHFhMfNRrTvY48eXUXSkGa39i2j13X2jQrsa6mfjot3ptpM2EkUfbHzdijVF",
  "key23": "jWgCH9hkur31Gx5qHufVXsGGXnwyV6kVpSBpinsVSioSh1EJvDVfmaTP1QfYqaUEkPtEtmmy2kChKfGugKn6kC2",
  "key24": "4MByJxaW8dw4Q7AUGiSuoBwfqPWvyw8kz8aGpwPG6ySis38SZrybTJa6TVrLYu28aDM6Ya9KPt5qKbqu2pdG8Vz8",
  "key25": "LKehqtKu5iuQhyGCCFdwzkz7L3HAektKwt1JHzVZWswSUZkfwUfES8XWs9JfPFWfT7snyWdCsKEmgN2Tf4KF5Q2",
  "key26": "3DFsbntCaS6QTo3oVv5NHbnFFCfWGYcnejT4YavWBupU5WtUnPND9j8EoACq2LozmPLhxe9miutrvaaFzeH6gZWt",
  "key27": "dWtTHTyue6FwhY2F4tViKE5YR2MKr4AtzkwhigooKFuxfVeZCfFtftWfu5nkYp2nQwj44eFcqp6aVaoBjSqPjty",
  "key28": "5azEhz4veRZT9MdsvHhykuZHPYe1nsGVDD4EWn4F6ju619a9vaxBtpzkwdniVdqWxZ8MMsP7WYkuLTHCuwyiafaF",
  "key29": "4UGpu6wb3GwgMLp4ZRJKLdaVGYkX9C1KEy4A2pD16NW7QFkEUQfbmV2xkNTpe6XqorKodUfx2AHp6vt9mHic7tDF",
  "key30": "5h3WDDCBQWuHespZHp8mrpo1PNpwtMLkFNzHsWGzxg1fhYQNdPPqgrcs8JdvejvWND2BgdFBPVkZkgspxwcpXUbk",
  "key31": "2Dwq3udFY7wNNug4Ao8h1c5dYQPFpvN1YNYTJhpRNj1nc5ftSHPbpu55fVPt5ApXtnNutcZY4SheN5Fmt5s3Gh29",
  "key32": "qLFobqseyQyXaBtPMkLWbwWf3SUVx2XSnpxJSLMW4MWpj9VFZC57UhJfQpB2t92QwvZNny9PZ6xXSv7w8GxfEeX",
  "key33": "4EMdjrTfsL7qpNGu8iRAPTpYmQ8DWYMzvPjws5hYVVtCv7fCWpfAwNxSpQge2pzHefTr4wxwReHiYU7sXd7RftvN",
  "key34": "DN3acJ9F89Z54ZgCgr4FHnhQ2FcUB1S7BHpup4hqtuG28wQABPpzNY7VWSfAff97aXimfXbcbTueduDQnLanqac",
  "key35": "4d7Mgg1G7rHa18a6ZPB3UAXdeX7NEWjw9X6ef7k2wVk6htsEwscavzSj5LfQBBJ4GrQUKPWdoKrBzSAsE7aSieLi",
  "key36": "4ppUGjCh4hiGZLFXHJVghQwiS67FXXmpGiMMo6sCuyduDwGjTQVDMd3mt2vNjVs8sTF8acNDky75peFTc4nGphYg",
  "key37": "5UywggMs6ufZfrTw8cj245Pij1aJRHuwKMEwQv7M9xPz4fErePN3GdpQKUtiwKph8B7hqqGafdp9PMZM3gtsvyDd",
  "key38": "5LrcRrjrMCN4H32Gwaz4xRYsW9YN3NNQRM2fkTheMkNcNGmGojMDPUdynjkyuSDzdY76jzggkziApESJYyR2aaja",
  "key39": "2cEcabYjRMbmvzU8tARxCjcNjBxZ928s76umHCYLTHvjFoeXbDAySpAWfp2vEGwykaJpKDfuZL63uWoB9fQpBBmL",
  "key40": "5W2Lxaewq48La6opbvBKQgzJX52WNpiuFZwVu9QjmTxuQvntWRsUWL48Jma6perG6ixUVJxRGuMpQZY7DVEcPRXx",
  "key41": "3EFoyRRgSfEuraZKTmVj2bW8v8TYRpuBFpbCnSiuediZ3kWkBQxVaS2J37dU7UTEDVancKmUnoLBZNKqbbxjAZcW",
  "key42": "3E6YJhT9J2h1vQ4Te3iwMfB1yFafTJV8hrKWQrcNALbbN4CBdUP2Bg4fRxr3ZmE7raS3bdm2sDkgoEepmsVe8Nng",
  "key43": "Jy4mmGD7bMRCVTpFoK2jXEPiuPfHbFmhSeM75gAe9uKYNwuPnVmhftuXouPdxNiCA8DNMHYaWwUuteifkptwdcM",
  "key44": "dkSzdS4QGkGcHs1wLYE2S95nqnT5p6ptxaGWjwbi1CjiuRfVmx53zWvfUuXgpxyCiW7G9jxtWMjXPtnF2xx8Fkv",
  "key45": "4pdsTT7QixrL4txBsppGksLjmf1LYh84y32uyFk2tB14xUS6rCRY8RD8AR3XhFzJ8pZH7TACg9MG6dJwRV1owVrk",
  "key46": "hqa2pS7uVtKGMMgerGyjz3MNAcePEm1br4WDxyeoBiXK6cG4tDtjUnJ4veWBinjsFPGTkXeRxNnbKNhbBSgiebU",
  "key47": "2Ltjkta1MT4EkbaBw4sSLES6vHJvqiZ84UxZfnwv8rTqNGqpFGvZmEXTM1TfetRbSqthXggkLKmKgaKZny1F1XkM",
  "key48": "5znVqGbQXhLUbaJjGd1rWYKF1TFXM8n5iE1zQ2t5URtUZz2Sp16W6tNAZeGe4PfwAHM2cURYGAGA2Nx5Thk1qsLF",
  "key49": "bHeV8jJFaW1LgUhAKUqrrECmvfXJ3PwL83yF4hqtugf17GcypAF8u8V6q46peAJEk3BFjZiwZxDwJjRUoBnybj6"
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
