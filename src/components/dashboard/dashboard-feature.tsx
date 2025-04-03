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
    "55Hd1iYByEsvvM1YF7CRp3PByer9LwEfpqvHFSD7Yz4ZZEgR9T9QjikXutVw5BAdFh1PCyje3J1yLMy299cGtCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PxnmYvvRZbdn7YhDTM4YP38Z9yjKHkxsfGaait3reNB4QmPThAd2AGXYPmp1zV8U5UMzhUiBvSqpSafsWF6epFL",
  "key1": "2NvuxzKhhvrevCm7Q1TeJvQPsoJ6w6CtFhJ7QiKBNpzTSYYcXvpqsXBfazkj93wWtTYvjMBjLLrA4AfvR6Cffgic",
  "key2": "62Kd2HyLPBPSpBV9eFmCvCrYNmR38ifJP3Sq2YKRGrJg92Wvp1VqJaAbtehvKd3xW9Y4n1hYx5D2NS4fEj61KqC9",
  "key3": "2rga71Rs9358f3toEQVandTkSPSN72vDFrRNCsKDMPvDNGz2xudJnyGS96bctccDMGfPMwuwWWjgkM8W9rT589ms",
  "key4": "32cKM6q9pHak7xhbvNVuzV5KzfcE46ms7Zr5fgssMSST4paMXiuF8BgurijnQCSH8ef4AyHnbcixYVgVqQFkBCk6",
  "key5": "3u6tSNQiZ1J4xXpWdTqdH9MSFRTiur4PWsYP3obQCLoArmDkru921UUuXUUyG3UKqbqVBWt2BH3WmajksvGLs5KZ",
  "key6": "2H2uZdX9NPhtEU8V8W8sFTuYgh3pxoqRJhpxcPci4jAQFMf2Yd2J9GGkTQZTigymZthVSVEEpY98NqZdXiFmNZ7B",
  "key7": "8NxYVnoMSYFJtWwTrSSaC6KqJ6HdPxHxE2PYRmZVaW6eSTPd6nLrYtrrTGcALEsRPKKEEhR3hWMSUT5B6du4x7J",
  "key8": "2BksxuLfZTUEHn6PzUbEdvY5u8REzX9Z7DjKgjC22FSjfgeRYbMbgzHPmuV2cXLwKawTfqrtnjgHFabKGbgPZD7Z",
  "key9": "NvBsyEaDspoV61rtPDWUL6PVaJ5ta1zxGqdLEXfSSMn6DKs7G9Ew8Mrwr2tSAxMRMcyvfem6XayFbca758wwZyp",
  "key10": "4iigGcrCrw8SsSADwQDHy25hXogBCKFHDBwMkuMs3dRTxjwCxiLdGLugPAdefXCsW8qWuf2xJ2LYTLTfjPRksPKn",
  "key11": "ayWSWsWEC9dzuUxWyfuo3yjCDqEp4Wy9mtQpVaNZWmJ51tMkGRsh28zbFxEJPXTQyWPkv8m2yCuFDuQKMnPyrbL",
  "key12": "5PkNLMpAzWZYgUqjjU33tWrcCtSuvZDQEqiXsyQJrYpUj8pocCDqh377c9uFSz2FbAaRUSmrrdVStx8ECdqpefyf",
  "key13": "52Rk1oSN3FTEVCGBo57X1DGdtM4SBK7XBfbQtXSkkpdR7ZYK5V6Q7be7UknNkJysTg4ZxKm4cqvDcjwiSc9zrxR6",
  "key14": "5rX2LVAXVi9yhnQyPfdUBETtxqyaaksUen816qbPzAe7XWWutAt5E3oe4MYxkrxFVWrjFS3YZGzQUkM35BHkCdQL",
  "key15": "4PgLYfAnGdomZ72Wdet1j6Z8nX9gsRrZU2Zi5oxaQsnL8y8rSheKxo23WNWEmfYXnfybSpPkizSXmRKQRbx9bdcr",
  "key16": "VEH2bz3NnDo1TYTBtVM6ijh6Wv3r6kaVxyHS1qJyigxLxLiNrmp9qPHyfycLVx3JuuRKJ6d2MwhZfTqTrMt2JDV",
  "key17": "5iPpqRcAukpU1Giub8TEpMJMsDW4biP8LhjLPKFJM9wemfLdj6Bhn8FwRpbR2EQypsEyJkh7baSRK62L43KuKZW4",
  "key18": "2GvW63H698poR7rQbThCbRtX2buuFvpfCKmzoW2TM6R2cK4MWbWn3gz6W3zkKmdFMrLGpdpNE2sV8LjWgbxfGb8i",
  "key19": "bh65mz8ZJ77zFe7Hx6884dK5Pv2WsJsQpDvAcAuRcgsEaeKXmLznUWNQApSA8oHigVGpTRdZA9R5ZCamV6Py3rr",
  "key20": "4y2ft4nztpXChrZP9zoYVvN1gH6g4idZscLFaWnVgUfZmdtTKe7hodDUamgjWv8cnT9ebVxbTbW94UHBgz9c41Cw",
  "key21": "3G6pPXjbUUFia5rr5Wpw3ip464yqYAAvnUEZP6tp18uT3K1JEWvScL4k14kdTHHLD4TgwJFhpb2XDmxsGy9WhcsU",
  "key22": "K3iJo2ZWq4nd8qeNWueezBXendjKr2VZszwUYCCBRKHfhMHFdkTzdwJkY6Zp8qXfJv2sokVBZPiS2NceWvdHHYR",
  "key23": "5SdCfGqdjm5Y1F4X8fNrQ3uiNbeUsACPak6XYUTX6ra37jdua3n8rv6Hbnmz97DJqfBpq8c3N4nDZwQ28QjbtRZy",
  "key24": "rG18HvmVwWXPzbmq2asswvJqz3jzp2cqoRmWmDA3MrC6hjyUSTyYHndPe2stA2AHSLen2jYQtwtufXvmcXV1GjM",
  "key25": "2Jk2H1yRBA51oxGDnRmCNBE1AMwkJKo9R3gnX9dovvccoyHbxN3UEJZWwQV7Zt5UFpkhWBpBTGuW6zNc1sCVfXpc",
  "key26": "3bK7JyCS48sbdRfsdHAcxgKRctHiAMUy2ubMaDXUqLmQKnTa5BRHxYAzy6f3zsuqb5Axgi7wkoQNqwQG91KqJDJ1",
  "key27": "4AfhSYGtNHZoefAc6y5pNN3k86BdeU6LCB4G28Bfpa6yp215UiKzjuhqVF8sHQSD4XimWibt9U7nmqh129iZH6Pa",
  "key28": "2BVwuo1kDDHMgVTB3QLDFUVq9F9Wcb5c85dy9acMf63qcDyjFKowKRUfP5KBWkLngznziXSqipAgd2641WQFvxJu",
  "key29": "YaTMQTHu4XB1WvW8TZpHSRmDC2e8YnBNbVoLJFGaVGhepzKxfWSz3AdiBcB8bTmpjxeBpafa2YyPaqBQdJCfF79",
  "key30": "31rR94oQ3jJNTdtmTtS3P3yzMn9RgGvieDQVuWVLkcvHMhwygLLN2zyHB2A39p4mJm6HtFPe61uBJXg7QgL6GLRL",
  "key31": "WaUmUvQD6juBiwdxiVNuXKG1y4nzfnCbNXGGL1Gnh5kYcJ18ysMQA4gqMk7LyQyYLKr59JxiRbfEGVsCM6Nm94r",
  "key32": "2RyfgeTDyCLrUus5BPWR8gWdUFWwXtvUGGyotwy3eWPVaUbLraZjhVbkMQ9mwNLeyQFAKKoLtqgmjXYBFft6W8uo",
  "key33": "eq4UYZB8rqDPiMXRHsg3YDYYVow3ozC5M8shE99Nc7x3adpQxbZo9r4W7fCzFdmdcJ56y6CZodKZqkHvhsDFyyx",
  "key34": "4PwchsipiH9fMjEYxBETdkRLg9pjXKZJwKGhYVf6UQiMpE8gVe33BQfDAwsDnmqxaajQ8UU5audv6cf2osS1aRqV",
  "key35": "4nTdYYaKTaytitooYNtRJtXT1ny3AVKqJ6UH3jh2Lbok2tQi5itFaf3K4F3n7MKR4mLq1H1xojdxQh6eD3bXD8W3",
  "key36": "4jCK2smkuK8po1KiYuwhuV4EzZ7hJA76eHGviVZYCAHVHRbiBms3DeXfHc58PRbo232AV1bKrxX3bgEGfjXECNpi",
  "key37": "Eofidw5DZ7oRuautP7CkCkL88vJasPUefAZfw6D1cLxbaG7WbbJ73iPCiX3YAGF81KHRcAo5Ck4Dxu5o2jq66zz"
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
