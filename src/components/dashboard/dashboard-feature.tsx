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
    "UGjmX7ck4fb1eihRDimVVx1Wy9EH6ctJM9ZswjehQPFk9rR9FprQHC9kp9bSjF88Ao5F7RqaTjjVqSNs7tGycRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62XzZ57R1ndsgos41HrN8ut5uc6Y5bNM7TG37kyrRmwcc4hr18bcJc5Zng44eRsPzw74JbHKejne777uzgX9ngVW",
  "key1": "4P6zzfgP9XVy2JJnG9eCEzGmGwhGdCQCwcsMCQoPosz3BX3qSPcjNx1eSTVtnWDds1kru6n2mPmoZrRfxc3Fq7uf",
  "key2": "2EWhLrqj3LfuRxaFFuZaD8HTSe9xnshmPZB11cPzvyuXmFgD81drXuHQdcnZmnUiCLCoKTTk51rksT7vpMoK6Wyx",
  "key3": "46VicXDRgc1pjsBedHooGa6Sf3f6e9QoJtwzGzU92NBpALXbcB3fkM4F2TN8G8QMofVkzbsePMCLv12hyZ3a9jPJ",
  "key4": "3hSk1cawVwVXn6wnE2Kq5MwsBRsarM16YA8c49KgjVMiqiKs51pQzBUCNuSZYo8NB9RxDHjNiLDjkgNpdTKkmE61",
  "key5": "3odHoD6n7ZoKqAmJsmJzq7MzWvemrHV8CL3vazJdrNxPxLXgy7nLL2fgTaF3NBP2xFrjFP4daEwMSgquSVMWTBUx",
  "key6": "Y2GaP49wopp8KoisT9rQn4w8ssB4pRfRtcs3HPFRWtQgQAF7rRc42DHRnBjDT3YfrXmetDza1EmyU6bM3Q5w6ez",
  "key7": "5epGfouVt2RH3VKWHKszZ4KsYvwALLtHKJWmnXkroQb9ewAy6aaXxuqnHMYPRV7YFyjzwyHVg3LDrpQUmVvoWDiT",
  "key8": "3tPfkAeCrGHg8TXestqyti5nwsbJJUqbtc66jJcq5twz7dYC7qhSQxqn9BXrtSVeoypMzm8qKsxJhXmFnKbuJc94",
  "key9": "32pcuiaRAMkTiSoriWSDtXwPeaaDtj1nPWh7kUUS5PMonuJdmSB8CtSQ6mjCyhSZxqXJaLeJddutyWbhAaukRMwR",
  "key10": "BCeXvw6jkKd1jfWVVML6sR67LjKVhV2LQcRNcWaqHMxWH9HLFdUooNGxMBHCDrKzHyMvyD6Frw7aPcCGiPYrs1q",
  "key11": "4s61GJXeX1c3B3ctfkWdosDaYu1DhJX7eMQ53oom7bcoNuuvvzftwFE6ZfaFQV3s35EaWmbsVtRVgwKamP1XMLCu",
  "key12": "54STAubbM5iEfHaLGEDaB52JxnVYwe4wswY8Sci4QizUh9QBFYEXaHSqRt2GHgKWRbzijMVL5ZjVPmD3iDhXDnD8",
  "key13": "2gMYFHyceM44D85dQcQfQip4nEDMiHccLTFqrYquQPSurq8n7obibSH1DFiJM6HyyvNvmC4sRYRC7rkwX3hyAQQ9",
  "key14": "uyY5WUFYiCM9gxedEsgJJVco39cEyRVacKoahEs7svF8TAkXZ5MXaGqhPDZU28sJxihzVsUxXMyVMjXAyS5KHJU",
  "key15": "1FGXrJReeKemrH6hVQDAsgRq3N9c5Z1U7pbANzkH9z7rs5FxmBbRAFuxuoBSKu45NzYyJ6pHmk3JjiaGXL9arbv",
  "key16": "5kR8Xf4rgam7DsAGcxTYycCLEskDXyXv7rWTUMtGhJFg5owVmPxs7yJbFDeYBBHEvtqQyR1VR9n9g8y87UFWppjL",
  "key17": "3iKga8Mxr9KhBZw5mwnooLwKbV7Yv1e5ACWsVgpNTRqixaDqH5Wf4mPgfPXpqNCkMYvcQgw2E63DhiH2YoyCBg5r",
  "key18": "ByWTdSyABckSGZENw6YsThVJrCidM16HF9AwayfxgALta7KkrczgvWEWy323NFwvq3BJuMVShBqo59xwJgNAXxQ",
  "key19": "T57Btix2PpNymncyzkKQ8HkiG4WJq7u7C938eP6pnBwuuMXW9D1qrBKABYLkHPjHPesJCGUrpkqz8oTPNvxtvhk",
  "key20": "41u3bSMjCD7pEDvVm3L8ETGCmvkxDfdVoQXRpK25ybPcDnQLDMf5LMc3giRjsDSJem6aVL5EHzKDijzdE6r5WY7j",
  "key21": "3Wn3coSb7vjrwToWNEk3Vf8DqB2YhTU3xFsezPoQJZP1XQB4EGWrrA69zyrbBviXJa7TUMHp3VEMMyJi8KHMUs3A",
  "key22": "NW3hRicW7koV1gNGVeXk4Lm3fPXCaUTz9TVKAuqh4CjPsqbpEZyqT9mLuPJZcHCJgWozQ2vmFKbwdBdR6dMhWEA",
  "key23": "3wGmu8CtVZsSed3GoVmeqAQqD5oFtJ3t4ZLz6p4qbNxBcCmRbLEbPsN1Hxq2PJgwVAGoGoUiZM7GZSxwdXpDsUjG",
  "key24": "4wms2N4kGYx4tqVQMcA25wEU8hwniAwKTFfcEURk1VvEqWzYLymry3i1hxfhoZB1aP9ou8TPxDUArfrVLKXApV9s",
  "key25": "2TW8amSQ1JKKVM26xWMcJBg4FxBZDiw8rbuQXDDLKDmuqLkdfqauxsxNbHRuKH4AmYXjLhB9CX26332apF3U71Tg",
  "key26": "3gnS1UMAFcscQoaYaTFHVnQjZtC9ao1EGHPtmmajs1BAjnoASkmVi1LkeSzV15J3e6G9dhwpmWHvUdpj1kwRYzzx",
  "key27": "5Y3KWiocbtJpsxJMf9Rc1HohEEFnfyXsFuFFomqSjHDvjnoRNtgukrgksKjHKnQCYkBb1dWAgjv7emYRmKBK9TEr",
  "key28": "4yyHZHwyqzSM2GxVUMchyA3YaapsPdtrvpRuEFrwtNnTz3mpFRniRAWGcKFXjXSB59kbMkWifuTQXrMcY94PVGKz",
  "key29": "ZcrfH9uHn65a7QXPdFjNoKw7WgBMmDi1TZp8C64F9dgVeVuT86fm7JcP7QF5Jzj8HkjsEexgSnXbtC6JiLgW474",
  "key30": "4uSmNhrtCb8Qds7F3XAK4Phqxavc2HcSa87oNzdaoLu3YWxNW9pofX7ntjY49YhjmCYwqNx7NhjhupCPE8WU2QVk",
  "key31": "Dh72Pqa3ZGwUAG5PpD9YEpXeQqoJmBRD5ReVzc6dHZQLy2txk3MtjKWAk9Cyntgn2CBwu92FXCRPogjRWaWvVxY",
  "key32": "4C7JjPhKkSRL8GL7Uwy7u44o9fzYs4tAWp18FNoPfurQQ7bLot9xpyz1DSDtXVCaTQcoLgqb2WidwKBt5sbL4JqA",
  "key33": "3sLfiLJwJX4NFxr5TaScYSvbZkWc46CuuwX7WnXdfWK5rmg88MeRUxLobwnDZ1a7PGC4YaSEKbi9mtN8BgScZwja"
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
