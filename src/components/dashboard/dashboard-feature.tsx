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
    "3cRYfEqPAHj5Wc4nfPzjQyzfv5x6zTcN9igDNMyrvW3tRx3Ph14fLZqk5LaqDadP3a4zKskscqf8jLiz4mUK3bni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53CT64ND5jfbsiheiCWSvWSbNxNZkz7XZ3tFPnm2PL4vB3tUKY4A4QWGaPjJxiCQhDzMKV4bCBD5wZUD2WEnHfGk",
  "key1": "KJaVSgp5dD2fB1RaH3ZNdYocQPRtGciQF61X3YQTYBCGFiiHbqotGbY98QREexAzBGrekhbm4FMegHSYJ9c7BYB",
  "key2": "fZcKM36LgNxPuz2ekC9fopgbpXvPXg6Rfkjr5rMB4fcuqduJLhyePtCcrpAokaXkW4Fhi5jfKSNjtuSUTt7RBHP",
  "key3": "66TYo5mazcRbqbCwrGxKk5MykK5eb36yAnMKhJ9SmCwHjvLjkMiwXDdWVECTNeKoa2NYd7xBSPWh3dVHgjJGLUAC",
  "key4": "4wkUdpYZWrH68SpvnuhMNxAdKFfKoZUE9GYYeK1SGCEVpBs7WBCDAxWY7EwohuYEp1N3bHci1wqkkqL23sqpADtw",
  "key5": "R34vufKJTuaHwYqexzTQYDCZ3176ym7P1seWgS41ujXEUXLprmAbnpi7Fw1kwWTrZJ5qHRCcJ5wmTaYhqwDdoxd",
  "key6": "4vQQHXnB8q8716BJiVxMahHqUJrpLjRNYKjsFFrVCx7thChV7usRhJy4qCcuPKz1yPTb3yYJoJC9FB8dh7BBn8Yg",
  "key7": "5MVo3DdvNhaaaJM4QAdk9uy959qcAZbETTykw7nbhs539RhU3PsUHJaJwkoKRMS2a8EjtP33JxRkKGd7SWJAy41a",
  "key8": "3BjepNwGDMcF7PPp7Cuybo9Vk59a38jE72v89ZGgkruhK51aCkmBoWGihwQnDVsehQBFsAUniaTbMkpdy59GK4PN",
  "key9": "3L3mUdbYcUWb8MiCLuYkKFMW1XM7GHM7ZUuMofhMrFBffZT3TL5LCWrsPR6GgZjUmV8bfHSsHAFoVRGYAKXwCk2K",
  "key10": "2q8PNkGdDUfcY3JUsRWM8QwWUnRknkzggRNepAgdDfzZpKe9M1dtdvWv1ZWV3Pi7DLVTm6mSupADn8UgZdTbzy7X",
  "key11": "4eJQ3KF52Sbkj26zqNheG1BBnbDVKQ9srpGxb7kveGdxTnne2BQKXafPwc6ZVjBcxHNbAgzZDZbey5nAfEguUM7G",
  "key12": "SP4nZr1uiTnBeWt8K9mf1EH5hqFKQLqdJ2Mw7RDditCitJ68a5WYaGb7PMZHjBmMokPWENkjJnLTdxTcNSmFsbt",
  "key13": "25718883srjcLwiVtnZcojVVBrpvJ5Wj4E4EkHNdG78JtXa1nxUN5L58fshGUH6rrgtirU8ZqWBSSQ59nPPRtgD8",
  "key14": "pKWMtiRvW9QS8Lok3k6DAwLxXgc77b8oxuyharuTuVcSSGu8HVqYVRh3xfLTPk68iLPH2D9oSzcbgHaaU3SLdpj",
  "key15": "5zeJ8WWCj6j4jbV88JxuemH9zP2gENMPhrdXBV6WZBihyngJnKbYAYTYRihM7PfxfF7U6kbQTJVWdNVHA2KHmS6g",
  "key16": "J8U5jeNwWqmfDziSM9ui2RqFYZafpim5ccUiTaQstnvHGVja9dubRmXMc8nZdJvkGZTxYNQ5qieaZauWoTKa6Pn",
  "key17": "4hX1ufRfZnGcKAsrCj36bmMH6yjAxuQ3o8editVsxMnCCExR5yAKPRwhnJKfES5NzSSC8xbskwvWShxqWWhEg7D9",
  "key18": "AKGkRuS9XRzXHgQ82FQea9cNz7jEa7yYhmXXQKGX3LSpcjN8a2mBzsadP5Wx51tgz41DbHnr8SQrn49z5ew93v1",
  "key19": "5RiATbUPcyLsGUm6vnmL3kpMtqRVpy8cudPjen2A4hqc2ibcxng8Rw7UuChmsc2uLq5EXmuD1Z8t7cTrDFTUpsit",
  "key20": "5mH1buxPS998FjhEAdy1kFFckR7GeHXfpEgjmrJpXNVXTcMQg4Sv9u7JfV2DG9GvFuoXNGu3pDzEeSDUvBjmASDx",
  "key21": "3fSaUjEuA3vKjom7kgxvGhne1p9XTqQwMGNTiKeZXivviGCXxbh79HXwc2jCZhk8ny4TgzQf1X5wY8AWpQxbzBV9",
  "key22": "4A2b3mtzSfXCSSJKoi5usawpkwwNZ4Feh4gws2rnFpvAjPWJaxbZMH6DmdToH2Fh4d1TiUc5bhSk21jpuqz8HXKs",
  "key23": "2cBK8cNjz8M6yWJeQPm9oY5pA25EDwMeMxdZcDQ4eZi9tvMGS4NDuyyfRQxTRWpLLWh8HEa9KBEwd1UhGW7qLUHY",
  "key24": "5M29EjtCXLNuFnQiy52Ty9WDj7JZo3htfRzXUh5jucohiRkxHeHgyDiv7TKifQmyeHcamzFpAQM7yYoSCbCPyKyN",
  "key25": "3GDGRLDhjiQ6uvpbvmK9NBWTjGB7hvkHefm7yyPsoVzs7L8z3wEMU4KYNLBGszTxXi3mdHymQK7qxmvoJVWRMW14",
  "key26": "38ApUP4vP8xaHDig52gmRaXBSUnSFDXaNvQVrPQHq14YYN4dga5tHDqazGFCGzYYDG8y1sj3z7LVpsyU9qNPqLkt",
  "key27": "5unKnvCVb19gFurDmrZogR1hx51tYZV6ewEFhoJnBWVQJNPypdHvsNhG5he4zxNdRip6f16PpWW4eqSomxLmRAJj",
  "key28": "YzEZr7e3TyquZsizgYn1uJ2PLk1LnMzNmMsYCJR1GvhgYo81nYcGjxAWq8M4sZncmziMZDWvfGq4ebLmhC1VpRF",
  "key29": "5kuXxAfLHwiy74trKsDxD6opccnx2QC8F5SjydScNZKj6eg1ugC3PCd1GTGcUZHtH9jqrs6JZUsYc4FpAXCrFhHa",
  "key30": "2JYkPyH8xgG6yKqnCswtWtacJ87QPZKPfnAjJg1CX7j1qA7ojAgsYXiHNeQUbnLLWaKUC5767ac5b9kECRx2KJrD",
  "key31": "NoGuaTjVktep1EzK8NnZhZJsVf4AwreFeDmSeoPDgtoNo3X1QUjzmq99eeMTABEvzf8LZecSTYSZdMZ3rJEaCj6",
  "key32": "2upS7TkPYa57FF5LXRrCUAwNfUUzyyekheJP1DoFyAsT5QQ9uKgRtHhVahxt7EaCRCoLb5jvzhkPWc1LXLBpsAMK",
  "key33": "jGv8Z5NHmHeM5FjiBg22JbDpCntLyvbsK6ZjF2nUwZG9TUS4exVBV1kc8N44etZ1W5JJLme4TEHWR8NBGujCaNa",
  "key34": "kcbzTSrARdLLfDpjEBjcc3V9e5duieFWZDt8t1nK673tR6fKm9WfecULunEtzvjgu4zcVRuLHaWwnJf2UoZ5mgn",
  "key35": "65VfC9x47yXk1CpztTTcThfEy542c4GQmCQeDXM1tbAptfAvPKYnCtyrrLAWmmQjWCaub8jRi1xktq4axVW5dX41",
  "key36": "4UbTSTToFWZ1qpf5C9b8uYsjCwtSoK43WTkffeDujtxubRq4QX64f6c5GspuC6HaVWLqxAWdmpxMnAZe7cUQPZLM",
  "key37": "58jjSvVpiPsgEiEDBAVCP1RwyGuHkLBXxCL8VDU38grLEFF5Rh5TapLuZP9uADPjFPMvZpSaEW4gAgGcX1Hy69ik",
  "key38": "ZzFRstYFYwiwhkCBGrW4oMWTjENmde9Shkk7KviU6b4uaFha8pVmSWitdFS9uQCHYwMWXu9jWeqUx91tk2nkP4Z",
  "key39": "33eYB3JjE17bM4h62dD5TvTondFSEzTCHEFHSVQGuS7zGrxhbK4hqscjC6Pvve79FsCDJv9RtQeJU6wNCyFvXCfa",
  "key40": "3MPevhiGAH2KZxiPmwWoSa2EvLDyWABwgZdMwfxWSxHU7LFyfSUBgb3uGjdwSTS1cLH6TzMwyzGf11uzwBJNT4de"
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
