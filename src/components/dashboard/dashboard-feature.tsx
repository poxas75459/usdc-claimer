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
    "DTmVRp4c3uc8LvmGARdmNgmeJvXrJzs2Cq9Vrvru9vkxoEvVSZNMm4cFP7Z1HUeHYT5XsTH9rokfpCtWMpvQieB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rn77522cVMp4NVsfBtCP3qcz6dPNKZPrgscEFkJrLYvhhsAppazFnKJTjJphmzjKbf2SCWMdjDV1zh4BudStJBa",
  "key1": "5Qex3PopjLjk3euVDQ3bN1vYrEZmYMh2uwir7B95WUBvP4pjwQSEdte2FEJAf2cSbetFQ8WYVhimkhUedGJCPrD7",
  "key2": "54SRN52T2b6FC9arSNFs57oA5GNXYRLjDixNgj3rkK3JfSovVxYVQnEK6L5cxyQBUrTqWekM8eMmdZk5BHWP4MS8",
  "key3": "4JL5jXDgvx1TTmkTk6ogdqM6iEaFwz77iDaqi3uFiXs355aPNeYu9jPpFBxMmGHFpJvXApHZBemEqTXiPCLH15mV",
  "key4": "47LWt3e7Ch5C9wXudJJ1ABUxRxJygFeNnQfZnvPe2Zc4iQvhsnaHfK9dCJNGqN7cbPS72izaK2YfEGw9YTCL7WV",
  "key5": "5qJzm5ChRa5K8dqJFi4BmwDTF8zUt8xh2PYED9sFCPd9wvdmYcNaKkacHhjDYte2vc5YuSpPvjgi9JM6accCz7Cu",
  "key6": "4NGvZbbDdSNN1yXFUUfGak6t4uo9pRCJyceReXs6GTqKUVB1CJkeB3bjKq7WEhmnw2DQeqijJGCm3eHXfp4QQQY5",
  "key7": "443CdAnVoTTLn5cjHNMrqcCW27EXyuRkaWkTAS5MmXkuXgkEL6BsAt1KEETA2c6a6sHcyDpVEjsdBU81sDw4Ht9",
  "key8": "odHsSHLmMJAb4nhE7Avrmy2oKzCPkCQCiPah8Gm1MWN88bAaKgKhyjBrzsg6wyRFdXJy42CJcNC34ku9fdnCgKY",
  "key9": "4hYkHck24zw5HpWYeJJUrtwZnn8eL9DE5TDDsyTuAB2W6GdcvgQxj5iEMoJWoYUH9urEFk9DkcBbuoVXDazjTpSf",
  "key10": "2FE8anR8Xm1t222XcKGz19w5GuWNoXTVjHXmCxxNejyHPMAXiLdT26peR3vm9KPKY5vD5D7xRgfBhm7avF8Y2SKm",
  "key11": "2wrVxxjkGMgD7AA1sx6JAc9HJZBmMJwVH6VAv2EQMSpM4YaoKxy1QoxebnAQkWdpteRWtNZU2HnL6LGwXpddUu3d",
  "key12": "ozkruHBZa8WXFmUcFENATsKMxQCLKQNPQQjsqB7G5PkRwacWE6DpqBr2D8dFh4izLVmzSDd3JdWkjfq1w2fD9hh",
  "key13": "SmhXP3WfMZ87x7GPQ9sC94UW3KokPQy1anZQfkyxgqWmLZx7yFNDQpbcf97csC18hmpsJxMY35fQ3mnfWczY3g3",
  "key14": "3H6LN1ofua2yn6BLyAr5rgD3dE5YtnuUzkt7Ckpnz21af2s5SDVsDdLHakd213fxTzWjUiGVW3ELWKpWHNL3tLKa",
  "key15": "2X2Cd5xyEWF7owfrdsCyeAy7DxncLVqWxsZSVE47yFHwEd2DpyrvgakFtm32JjcVnfFcnxDktRUBFqdzExxWkAC1",
  "key16": "cUJfvT7EkLbJFrghVr7gD2pdcUrWdNhDNn9g2XCUPXq8FvvKJTZ86Z7kzgn7A5BoMBESZPtSjKRRYmWeXvRac2X",
  "key17": "3TnLJmtSq1Wb7SzfmRiZQMhSdWoGZxQf5BWjrRRTKDZB9h4wpTrCu63ZnyF7PRsz8Eiw8yB41uWuvu7iZpo6b8jA",
  "key18": "5CmX3gf934Faf2mY1UmTFULNEcDPYRgxY9ZNwah6easyBc6GJJkcpDJchPDqfhHuwUAMy1wGTP3hPJQerNSXQZDJ",
  "key19": "3e6TY45j9on6AZcmVsah6zcn61M6wDV3fhXYcJRfa12rZ1h49Tkavq7w695pTFeT3nAc4BXb3ErBpnQK14maKybc",
  "key20": "4onqjtsHjyd869thFxJi92Qfu2KavwCo9xCRkkYWW6p6Svzjrrs3xe33NUHuDHev9ioeUcogHLE2CJW2JZT6wfXn",
  "key21": "23weoeq1oxteae9RxNNjJ8wybsS2aNoJJZzsFWJareQ6mjkzc8isnEYXecMibisTSAFtCPZFo1o63CJ3P21SG9T3",
  "key22": "HJ9TiSucXmWuHzAug884j9ReYJJ2KZuLTiFHJQFPhhQbyfnUaLTUTNUm2Qc4NHFABTdrSStDV4NTJ43kYsiGwJ7",
  "key23": "44BCBKmNfRNjcZPZ86uxnSr1vcioWvoBdKeeJG9kB9ZrxVyNLVAoBpLPLs8kRMfvTnqipGY18r2n1ZcHg7GSifxr",
  "key24": "3GRYD65q5may6kbzqZnPY6cwJNourHPKpfpf23ByjKDer4UNsnwCKY1HELULW6akxZqm6pxNjVuGLMtygoXGU8ZM",
  "key25": "DdrJQ7hLuhbSoKaaAMMumEfckM2GMdVgxPZmfj3Q953SAYneUiBJi9MpBQm9RNhg8cVj9kQrxfUpTU5EhWLytpe",
  "key26": "2RuqVkKdXUX2CFzKwqnZ3miXHu5EHXKfVfoi5PhjaheXtQPtFssat3yNpbDnt8argVKJANhhKintkmNJTsWwg4D2",
  "key27": "5QrcUh2MWMoeR2RcT41BTPnK9MBdEsuYwdL6qeVuwJuCm4PFFQRhJxDWQ94yVRMkJDcvwacGbMhQ7GQf1hVVYiBL",
  "key28": "MK8tTZedp1DNGcYoXH6XXz65WQZCKzQoqRdDoGkaq5ozdfFjKgdKuabfcd7esQYM2txi8uxUAuSjvTq85BwoJWd",
  "key29": "55n4uH11A1wAZp9hkracRohbYnQR1Up43Bs3AjkYjjz8ehFkSbUDHcaHjoa8GRhbehzmDB8uLEqKSAXxepH2bGTq",
  "key30": "Tn5eiHqy7KY2npLhPGG2oSkKa2tPRn9xkJbtGzEKDky8HvAmYuWvbop4EnkwLyxLx7QeXZstR8rfMYkewe1kxDX",
  "key31": "2K9qtwjw8dsRnGgGwtLAhWA4vjRvS8WxktRjXy9qPr8BPZtRumBcbcUmeBFRQKMpR456FQ8628FNLsiGZiFGewqB",
  "key32": "2wTpPSgY9ertpgq46uH419cWnoq3WN7twVx6jgu58n1fywCM7tntD3TByaBZopA2gMbna4GwmnF1NtWVNeyxSagq",
  "key33": "JydQykeAaW8YALspwL2HmSkomM2ujrSFzTsvQiWB92R3hB8NxrPbFHXEoJt7Wpi3MWux5YdiFDkFxQ7m7wKddF8",
  "key34": "2Xjr9eRbdZrNL76yhGzDyENMTvQ5c5sTvY7J6cknnpJw3cv4QcgVoY9My2GJvHpBhFX1xeTAEfdn7tjrpHHQrnti",
  "key35": "2dC2uik4iJFsL4Wf6Qc9RDsh2GecYqhkDMEUKJtno82oF6ZCH8yMTkzc2ipkyrQM34oGWaqs8nrU6PtChGPzG3ux",
  "key36": "4i4LnqrecQXBwbH321qEVEMdTPdhLgPomhaE27SEWXHZ9TCvHsoCUPuMJ4FiEJAa9PqTHQaoZriWwvQnyB5Zk4rE",
  "key37": "hye8g1KdXpWK2HRaSQGJeiTijPc5vpNY7UxEQi5Zo685HDQaJcvhyGTcfE54gxQas3AYJpUNDTzkvFV73erVx5t",
  "key38": "5Kznw7s4wkj2R4VbkaTsiN15ZFX3o3VdBTi1aGXk9LF92PpD4BcSuW7ATXw2d2qjQb7ZbYzQPEhcytTVCnm494R7",
  "key39": "5bbsGDW2sp9UJKnoDKhk3HYADSgmGG9aDGcG7AG3mRVy2Up9bPRqeALgnELNEAjgmXhsbHSLvik6qoCzqE99c3KN",
  "key40": "2Jctsp7TsMTHjSTemtyLfrqijHJ3foxkWp2WWo9T5tT4ud5hRLZdRZPF4uuD92h6tcPRLJY9aaQa2AfuMV1NUDqB",
  "key41": "JsE8EZkXDTpzR5qZz2WsSq1M8aSrSZTrTZvD3WDG5z3kiBdcuNcWT7L5m7k7DSv6Eqxva8ahc8diLVLmBTXb2sR"
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
