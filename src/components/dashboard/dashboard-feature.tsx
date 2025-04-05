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
    "SpBovLs7QoDwVZjSSgXuYmNSGDX7KnUYxNx5soKHVhZAgxKFnvbyrdxihQNhKaHU2QZqeaZCTr1cYwCYinPpDvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p8NDkWKBsebxmho6DW6yuX6YZ75eUVpTgcHxP38XESfJMRPpRCMnJyQe5DZ1mJt8xsSWMEZ2GCq14diPuw9TDSy",
  "key1": "4N491hhZVie7wY9GxZsWewXYgP1e1SATYvK4FoyU3rzWEryXAKBF4WFDABAiZbKuWf9rwKS7Cr63xgSedaDzSzzV",
  "key2": "33JoP3bEAzDK55MdbUm2Y5P65qQon6iZ4UheMFJHcqvpKkq957ZoiPm286j4u9n1WXm8hYwD8hdAEeWc7FdcECJ8",
  "key3": "2D8NeGmezcjRoNdxvdUiRhMd9Aac2UHRfAknaaa15oTcDJpXGYwBiFpwUkFoAhaGdffa6ukQAZHa3apZro21iS3b",
  "key4": "xtx9QagJcchXb11WaD5LXYZZz7m31VKgT8wjjR4afUB8GRCdGMJuAfQ58Xoywn5Z8Kbwwb2Fv1rM3pL3JNnF2TW",
  "key5": "5MHCaDtrz21MNK1mAZwikaMRTM7BXPXsiTSJoB8Czy94DADE1rTH17jxJvdjj3vafU8ekyXveTaWVPNagbZfKJmt",
  "key6": "3w86pw5bsQFT81xzKRP9k8o7JRQP895BpZqjABYmxnAFnJWjPY8Ywr2Zrh21UGgt9Rqj6VbKTAoDK9SyTYGG55zh",
  "key7": "4aFUYRd6nWVEaHuema8hQMcyZV82v8UuKkf4bNFun6L9CnCc8KiAuuVhB2TLw5tEChiZgcQtN84W4y4hMxqZAr9p",
  "key8": "4i4gDX5vyhNEsxdFoU7K2LnaRZ4FvCZKGrKUXSYdWinagx6sWPqHmPXJUU2TPoZ3tuZci9eTT1CZ5WbWYLrq6gdh",
  "key9": "4B1xdYcXxTEAGRZGfSPuoXDCH8nCn6RBNX2FjVsjjxKwgad5PhD1CchGmSD2gCd1RfebuPngR2fAXbSGtznAKk3o",
  "key10": "5DLFrZ9aup4MrPZCq6fEs54eLbd1BG7P5FGSLmFQ3dsfsMXeH2pyTxTjjVMaTiJRk5xfGy5aqrfLjmZ6F4ihrwyg",
  "key11": "5CFokwvLJ6rmf9T98BWURKUpZ2wGkB3RUtmWNUVmUb6X1gCJjPYm6Q66bMqxpHeVtBEx1iT5kZUdgiSPJb4Wt9wn",
  "key12": "3AsjFaUaHCFq7dLJ3PpfXtKBeKbAXymRCBhQFhQwuj1MV7rDwuMjeWaMt1heAunXVCKWhPyQ3cJqpMck9jd3Ya6d",
  "key13": "3B1K3ycLWSddZTbyi3M739QQUDncZNWZsd4AqBASnFD6cYPWW5DG13TrfxP4eWe8iWy7JLfhsxL6o1fNRCw4gEzW",
  "key14": "5bNkRESRBccaBiqmxAaa47iGx6MCusLM9LUxBLjNj2K6DAzGT963sv7w4ggfAYuWnrGp1FDibFB7gWiAjzLHny8t",
  "key15": "4aQUm7r8U21GX3fwJXJjdwRHcMgF8rsAYBuvVgHpMbTUHM2oyYUVdKqcdkEwvjrZvkStstMMWchn3KoYqKCa2t6w",
  "key16": "5wFPdGP55guswSn6D6eqhdSHnpWQBg4v4kPm9FerQitA85x7aRPw4oNT88wbu8XWxYsh3Z2szYSK47MYF5JVuCnq",
  "key17": "5NM6UqcoEvPkG1CY5jczpfF3kRPHFXRWwEGrDHQbEmACSWpDE3jRFybRTWHHNc761HnCqsj7T9msb9qe3uAGViwd",
  "key18": "5TtURJ9ZXUv4E9vCP8PGuPtEyH8XUiZgZzQWXSuCCtX1zFCta8MTy9iuG1P4AZQam7uyfpcFEoxDDf2K6ragrLoe",
  "key19": "3xTcfQwhx1tYiUD6XsAsPCvdPh7yhYrrYJyucVpHcCj35rVNgiTsRhnP23ChSUWpPkAavcUBsEx4GbXJTeNTvPH3",
  "key20": "3hHa4UBy6s5pHV6jUkrrWUo1vQ6djLdRYHgVTkvy1rxwJUXRXemt3MrqNTywyH93FRe5Y1D4V5YxeFmAEotFtpMY",
  "key21": "3pVxtVdr4PTJRW8UW5DJUEtWQAWjS25tLRTu13sawUYUQvKCojFc6axAMiC5JwZMmi9LnRpEEUxH2yyJX768mseM",
  "key22": "3cmi2RBdvMm9AvzBBAc6iejqBvz8jYqWY1MLZSAb1xnF7NwkyJYCbnDSEq54R6U8E3FEZNhYcEF28mi2jjcTyExh",
  "key23": "2V2dBfnvuNq45vcrQCRtRV7NKBVUqJcmNDVKjecFresP1cmQVFtntwoWXa92XTWvkS5539PJ5EDK72qkJmWJYVYy",
  "key24": "3P21T7ijPKmAKq1TNBj6AEZ3kxeHbcuu1ta9m4qmcGUjZxqBYi4PAVSLoxX1PKEk3W9TfZoyw3gwgPGg8182xnXg",
  "key25": "5rX4SPLkfQ64mumKkBMtVvb3ojJwZqi1VcGjYVEiSLme6kPkTPX5wc9t6KDqLgrK5y7MvFLFqghP4RiTytyDroin",
  "key26": "4mEnRw69StQppqLoMXKkL3WA3DFcVDugK5fSXoPVbkuw8GEo9A5iLHJGELiC1Z3mcoSt58f6nJiXpP9xQGv5kQn",
  "key27": "4D9udPdHUvSWGNdAirGWr78iL7bR3HHVtaKMHyM6e6z3NfGBQAgQFsxFipcyBUqwo3vPgVZTK1eJ7S9LxjV3MAUc",
  "key28": "32WzyFKoUrYNt4sUZS9LaLVbmmYn2xydmPuJu3dd6tAKMNJ1Y6FWJv78QpG27UHf239Q1LEDffQNPbx9HUPzwTQw",
  "key29": "4K9wkEMHJrTz8pJXordhGNEPvknhVU431ccpzdtqPCssHdpGgQK68fWqJFsvg7R5G6ipcAvjGHX1zW6HcYpXm94q",
  "key30": "EtPFPUddvVED6vGZZ8ttek9k3pxyLE4jfUsB3hMuHpm7iVaLvvr9fE24h2rPgFBXQnT2joPC8N1JRjp6HxxomFq",
  "key31": "392LeMxda7vJBDwpmgMqSh15XPSZSarMxRvhwYJ3omNxqpSS2ffD5hHXBLpvkchGB8TG5bFB9xVj6DDcdW2rFYxN",
  "key32": "3rdkrxcVGfFaKYnZdhs5P8puv7GHzr85BEYKzK5qMNPQrnWji4KgVjge7MZhVDS4gffVGDsYDCQS1LjgbuL66G3p",
  "key33": "94biTwcYsM5o7ENs49wte9iLmUWyw4RFui266vFthHN5w5CHmHc5W7NrHMWhPvuTGzcAsf3QiuAZRYQp7mxoGUR"
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
