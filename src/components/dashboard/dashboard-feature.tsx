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
    "Rq739oiicdbEpXd7X5TkpjZXHmDRzmULYG92DEytaLdam8qreyk1S1sXJSMhkLVTqkEQ9gFVNtwCjb923ArEpQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25sRkiPqB2iYbk95G28oBN4M25h5zuMgUbAvTswMqqxTVNLBTTAib2UGds24ewpfzsnRsLLVgBbXE2bN7yugKNiM",
  "key1": "55t3NPwrQ6iEqrb3DZfeWQwfEBo45mit396b7nLfdfL3FN5uYtNv8iifBarX4HPkTgsfsut9YRZjjF8K7b32VegF",
  "key2": "66Mpyo2iHW1EF2GH2YfEtgMhKAb4GkZx65nbzXqTnu7PHQ2uCutg6DhLrGsPtxY8iArizZ5rsK4Cy6iPKZkUJkuS",
  "key3": "2rLysxshndKznx4RwrviKrpUxCUxFMDTUtmwScxipw3fejk3k42WeCug6R1oTtKu9tzmP3A3Ry17VBrXtTiHf5VR",
  "key4": "2reMkWnNodp4etbuRteMa8RLoQ88XHNvrs5s4PjgYnDU9HqN2MQaAxM41RJdupjE7aAbZuWjvAJ8eo8pwRuqDR2R",
  "key5": "8NGcJQ6fcEhLZLD8t8yQUzzNgzcotQ2Ewbx2tuos8atiMDkoGjXqQAvJaqzj2DR4x3aXWm19Q6qhVS6z8X5UeHz",
  "key6": "43VxJPorrMfVTbg43tZKTnTcKBLrisc1KCQhhybtJCQovrQJVYW4G87uAjJPHH9BAWGpLhrAXhMZAKdHPKzHqkyn",
  "key7": "5Zak6KFbmRenHiG5sFjBpVi98Ugt89FUAa8MJ1MDTtbCBJLbvPRZjE1eE2xy95H79QaJd88Bpn8qibYCfoQjrerm",
  "key8": "3TdLEQLN3v5TaaHzpk5Zxjnz66AwSFARybwfbRQZ4WHt7RMgDzS6DKgG9ERTayFgHB3LkSWV2tqgjsfXQY6bjwLU",
  "key9": "6SLidUxVaCcAiakDDdsPPGEepiv1tkUVLenyui1q6o1gXB5TTtVLV1gjFPSEtgX53f2zgqhkJdA7NFgjEj83H3h",
  "key10": "5HrstGupCpZYRdhKrdf2AnCiM9eZffoyXTtykUFCmgcGdPQ9XWJ4qmLP9sM1zh2bqjZm2tqH9EXCvB2ZpQidFizv",
  "key11": "aAqp9jg7WGQbFtTY2W8thoRehHtWJjPfivLgRJr7TybnhgWhxaE2aeQESMdyPNzi4mn2HfzqXSqGkQjY285jFQ8",
  "key12": "9bCc8ys5krv7kn59JhRhBprTtQV7nSPdRZtBDCaAzM2Txb7qcEPWtmxk4PdRnRmo3vZRR3rtTmKNozSBrrNs5Q9",
  "key13": "4acLGmRwfJYrUwR6TkZR7pZVde3DFxAwanBBggt5rfy1hv6SLRNfE8kPmX9TfHkR2JGGVsQg18dtgDY1HhoWvpuU",
  "key14": "5qp8DLwpUnBU2Sm1yT2WVGb2zaxB21ajrPGawVCzRcM9tfoQoAaE3JGiu7d4jiAx6BmRJDLNyeeTL6JKLpnBSUeB",
  "key15": "3Jx4fbssUcXgoV13CZGySL68dYh4maWquZkbF8QuErmuJaWZnCLhM3cERK2emoBzQJsh9BaH9oKZj6NmQArV9F44",
  "key16": "5MFw1gvjmRUrru1eP65tqucpvpLFpmd8E4ziqnQjkvMUFs5gAxYuSvUsUfjSfbvdErcBi1dBxiqHKMgMu1kqfnSJ",
  "key17": "wdigMBxZP8QnRMbWed1MwF53AAFYuJKrteBdhywsp2AGXrdoenpKHFJCDzP1ZwomMiQgsBH6WMGuYHGv7JZUzom",
  "key18": "3fonhNAmsPdjMKJ9bEdYzNKVgTGuqdtwGs7mLRNdkj4kyshNGZTqiJ8vhKCX2BA8oqBwXB1cjcKouRKMERTQRHP7",
  "key19": "mmgay8ZKwVSytP6faZeLtJ15GWTT3Sr6tWCfGqFqEg6Sw1EgabiuWmTSaHJ3NvupPeWPmg9uURSS7nf3Hpb5DTF",
  "key20": "3TXxH6XbVSMuhv3Mg437VguoASFq3nmrWsKeDkUKQdcv1jCbsBAkvMf9XKRqovCsEAem1WkU3hdrrxe7WtFLyX2s",
  "key21": "28t5CWPLEWWhNAyFpFDfp2JyB39feVQEsaXoDwqkRKUtJEzhQgJe83QtD68bGag78JwvQGAh7p1dtN1szmoLzW8C",
  "key22": "5ZZHdjXW34qN1XsA13asHtHF19zqKKHVDRa1zr2oyWnkUcmq3KJr55tmZA7B8zeQC7AGeFoVidrF7CpoP55KZXtx",
  "key23": "3bTC1Qe3cyRfGRmwwwmUcbjDbJivmTFsszqU2HcGagc152NxVY5NVbDHgmA7mPPFD3mJ3ex9FKJGSLeV9oB2dcxZ",
  "key24": "5bXNQsDRMLa52KfJEuz7M6wQ1xHrR3NkBcNtk4kxfJxMfkBQjFVjS2jG2UYynGBPsfBbbWtqTvXYVA4Bz6nTaf92",
  "key25": "4pMKBqJzfjqb4DSgohUvmRLRpJX96R6XZSWaau9FTC4zKHL9CWHpLtArAkRbhKtYjgtyXUXm4iTbpoQuJorCxEFo",
  "key26": "4UJ1vW7TyeWZ7Ly1S6Sz9pyjK4CcZQb56iSS7cBpkwHzd9i4spZZoD69xGWpLi5DwTYQtbpmxte5m6SShPNhH7wZ",
  "key27": "57tTSsDmZogdh6Wss4ZuQGKckExktqMfETCFvyQeEB3WGUoVnXnRk1hwo7pZ2wmCZB5fhZkxe6S6X9vBQLMQqK4",
  "key28": "3rkQB6hgv5SCpwvuiNWCh7uXjtCXJAjETcCvpf84FdsKCvq81LJ59kZmgKSkA6bJr5QNnQMhJ9AaTBKwcE93dm7X",
  "key29": "4RyMXgTCWfquwR8MiK1yKErMqsd4u282nqkmRB8GBfrdnyPshTitZTgEttVQbPMDw5us64Z2PfqYT791dce6dxv7",
  "key30": "EPVtzJqbbBM46SuKcjrixaicYotJ8MRn8o1CFfCadkGt63w8dL33kk86ok3RRPqRUo8zDfW3ffJi7YRkfGJJZmT",
  "key31": "63qHBY6cutnNQ7j6heoXJar2LZgytsVyMZThLtGng8RQXxN5DoafYr6YDyUYgQoacRL2AzZkwyLa3iMcmH4rSWZR",
  "key32": "5utxxYxAJEh2HEV2crGSyqXmLDf4yH17u1nqoXZ8AfkxePuLQT5xknw6mtNiWHuWsNa75W2xsfJWCTtZuNmDsqSD",
  "key33": "2V78UTiD3rkrgUWKr8mnWTaGfQE2mtPkbNALca4q75t3X3kwrP7qAxpEbZDciJxrRgw13TMcPz8zDhzkxRQFcyUg",
  "key34": "4QZxwDVhq7LbT65e3L86rea6ozomrSiUF91Nu9MSDbQLMhnV9pfFzgRT2kdhJwkG7cxkmFXdhUvWbAGCTR1zEg6R"
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
