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
    "X74MDHUgJEBR1zoXUpNyBVmivGD8QjdV8VmEsXLqqhe3Z2Z4UmQD8aTLUwYnTuNqBXA34fWK9LQusZT13YBNSst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K4n3LJKdquDA95hqxF74qn4XgZCXAeGWoesf3RBRbV4ssttZmjDSD5iDsg4ooqrzC63JtMaDn6K415hakLGdHPP",
  "key1": "53Zz1oj6v3YdHujiPNEzyUuFLRgfxE7Pu6ZpRWnwnEtsoREKVwdkNM6e9YBVM4pVfcGC75XYwNjuR3cmPrYYNiNN",
  "key2": "3Gtpo8bxQ3ZNeQ2UKfWmXs9rFe2JomteVYZbRn39X1pGjGri7iVpYdG32SZYkhZUcnWwQDWsGboKNnzSHqQyHBR9",
  "key3": "4ggarjmhc4EZc738TJ4MPHzLQCcc2RDZLrCoHVU6A9aEHV2vJA4jPYFRXw53w75NfnqAebZikMPYfGe5i5uNj7PY",
  "key4": "4Aw3UvjsDaYsWKEv8t5mtKxJPGZvPSTtkB1T6CFr9MKJrwMyGdrxXwxMhYCu5ucoYpKvho7Szadv1dFRBWuoHpSy",
  "key5": "nVbgCpsPdEcN5hUaoFFxf5vqeQLBLCtNwsF56ctwhtYY39JLM5ExEEgbGmRRpXR7jBxDKPx67kpgAhz3N1QBiRo",
  "key6": "2bZftthGfQGEbUgYFoksa8xeSTKU3cEeX5PifRczmfrsyd3D3Zd1sfLwMbGK4pV6LqJNwGAypp18mpqiYMux5H1W",
  "key7": "4e5AJti8EhW1RTamkEQWn5r3tQhAh8AvksRUaDnPR4d8ZGttgSHgWzzr4azuovfaqEPhBRAYnMZcu6RX8R4itT37",
  "key8": "4c9RgsL1D3DrgUybQm24VJwKTi1RcAR6qk3iYqKgrxr1vdAU9cA4DRfg6R3WcgBukreUqtf5VPRJoTeUKw1VF98p",
  "key9": "3d32VWmd5f9MDZ1PthFnR4rcKLE99FGuWKB8t7JuSivTCQs1Mi3V3ZHCupnK1zkvZTeUZ5rbUHrYCXPzYx5nHhRr",
  "key10": "2qrRZHFfN29j9XK3E6iWxvQ6YCGJxUg18TDPf65Xe5fjriAETJi88dkdNEhRq58NequYfrdJaVBmBLyzJt6tmZDf",
  "key11": "4i5W7wCZvPZ5LDb3Mqqik5v5DXjvRiH5JCP3Jp4kWHf5TN2YDJhttFSd6S9w81nXm67mSaDLFdksw34SRbJSMMbV",
  "key12": "5US6g16eoaYtDRT4hvLbpywpKfcUV6wgSNEZyUGEjgXwP8eJffAGdr4Ac6iuMkHLvgTngPoqLxFnLWSoiGyEHvf5",
  "key13": "4Q2LKdmnKJXqQJD82v8iDC58fjLXWgaEqXGzgQw9Axa7DSvmVxAQcyvbkEd5ruNVkJ8C8bZMNoi24Z9NvamzxVen",
  "key14": "36iyxkFK67zYpdksCaoFy9Sb2LUQ7CaiZVRTXSLuzDYqMYQU2d7mCRzYSZRyQdYoaqBSYZwQX2svA4sxRt1DFo8H",
  "key15": "5BHpU8ELqknmrvLMxGShRMUVsmaC6dCHersKkRy7Mb3DHLhJnnh1t4vh29c7DAj2eb4P4mNsL7EdPP6HMMz26YxX",
  "key16": "4DVRhPR36JgWfjXgw28Ewqxe82Nk1d18dAEM13GdGL5PFhpn17uJbsesi1Lan39LXoTa6br2bMcnRqytEP7t2JzM",
  "key17": "53QHAgX2LBCtaga3S5aL2JnR1h2BjhZLnN1gNnSWJTzLHBvGUC7D33rgtsxeBFZrL64M4CmeF7WoigTdKQtxLsDy",
  "key18": "25pxA7pyTh68hGzCNNSvs5arArGiGhuAfYTSkyZZ2rJx8i5hpG44fWYgxHsshUsPs94WkmUs1Wu3CHjUW2dLYC2U",
  "key19": "5QMb4eUfF8JUTvNFnEbWTeXtZXdeC82hcTZNi7FTeQmZaZ3N45DM2SbEKnWvZExEsGd4T7FKttsyfmYSkVSFqv4y",
  "key20": "2fLwdM4ux8zABadHvReisKTDRToFdAuEquMiF2gMPEKVxGBhU7YMnhg3Xunn83j4KDuaxjuSnc6uaUR9JurS6kaG",
  "key21": "2W89EMnuBPhPPU2uivG92XX7MtmeMgS45sM5ez12y45sHn7MvV13dnVvbgppZ2n97oW7bn2eN342UbEacL6BLt3y",
  "key22": "3XCqiKZdnzUeFf7XTMRkQAaHRX2wEFaqYMkoCUPdDCDKNtoDsbAxXoRXyZ2cjFgthVHyJ91SGjTUQUp87PpgphfX",
  "key23": "5vz9HvS1E8Wn59yRpUihcxwYp4uanb6rBTBL7iZZYW1LM39aNW1FEVBariFwnfhQ7oR2mU4z8q9U8TPJJkanAc88",
  "key24": "66aEbdctkJF3rqf9g732UfneypzE3Z24inxcWu1xJWzrAvKRj3MD8hBi4SGrwJE3P54enbk8H8ZdLQZ83jT6fnhU",
  "key25": "2R68HrPMmvfs8hBFvxyCctvHeQ2ny4fLnpkYeC1GS5hbTT5FNg8fqUrZmb1BzF2QQsCtj9JmQFNeWeD7m9kh31PF",
  "key26": "41iqAbQisk25M7vMvHYNxnKyKUfAzhGGsKQvNo6N4qiF6wfiZjULL9TrDG8jqWtiFEqMtBtPfPQ8r4suoKt95pdg",
  "key27": "26WTLySjgybCTdDRVNPBSE9J8Tdrk3fpjM78ndK3kYwpEAQYsyBNMbW5HpLKtvu2eZmJJSZ4FmuDHvEq8jgXDq8D",
  "key28": "5TPpoFYbgnin2k3baiPum4ZZPKDYqX3DdCEsb8RFW8NhJFf4hXg7LZgfLRSgxYhA1KrnrBSoRNaGWWm5vN6BR6C3",
  "key29": "vsHALbwtZFm4qRzituhXKwfkVDiMNMAsguuzfA3poW7sjjj8yeghFwr83ZpWgQkdZq6eoZoAEh4ZEczS3uckaEK",
  "key30": "3vKSAfSLm9eJ7fJcmUpbiDgwwMGoUURkSGgKnzb9b9TgPnV5Nrtq4GfVBmf4ybn9q4zw6J7X2Yg5DhN1xvzvPNeD",
  "key31": "5wsnW4q8duPgox77wpACjXgynkB8Lc11JHEcd5q83yP8ku9JmL1k6jtBRmaNFmdXgjaDZNVoZp2ejqHtLBtXbbsk",
  "key32": "ByDBstZfnYnwTkh9n8ZSrAc6mnNtBP54Mv8cs6GV4UoWFQsvvRmTvEFM2QVH5EvitVJECahqfLQ3inExbYMrS1k",
  "key33": "Vvb1ABdFseoctggPtuyLmuECBww7oaFqHTqBcza5P3wTJrDpNtcZYvFWfNYxqFYKEmX9Gxjmw37PBJc1e1NXK6q",
  "key34": "sHQwZv53nUJ71fpSERkw9b1Pm5g5xL8QrmTe3xHrmR3LUnbxA5FJAevQNE7SzaXNM7ak9coFEZw197gjSKNSHbu",
  "key35": "iNgcFdrLXVigankX7Lh62iZMBABkzVQhHHnwnZspLgADvrHTSRAdUQCC7g29t7qczAD6sQXhSxaQGCWhSskbikB",
  "key36": "4F6MMFRov5zSKudug2xzhH7dsKYmUGW5xVy5L7DDgQhYvpZa7hwfQn75aNdmC9biPJNzX8Gtd5VgXZvzgyiGKbFX",
  "key37": "2W5JY5X7TZnieEbAVre9A44uzRRNEcpcSgFcxS9bGFLhHTyffvSQ3MaPKJcDyQQmh8QYTQRnC7yuME2osNdALEDd",
  "key38": "4g23DaUMgRWjKyczhM8ZRNc5uX1o838LfppX78Dt3WupWrCpxQbyKPyAzH1XNbPTfn2aFjjmJLwJsXau7NsTXGx3",
  "key39": "KvMHFUhfohxRwKDa7F7y2G2ngA2Wake8m8fKENDrWarm2WREBvqHiWYV5jXnvDCVtzKjsDQj38QXikNB8XLAhVX",
  "key40": "3eu5KsiwaaC16tEpPZq7YcuRMxG47z9JmuyLiGSnUenDhPr8mQkJdQCP3D3hywDzVy5rLkSiFcN6PBuRy81mB4NJ"
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
