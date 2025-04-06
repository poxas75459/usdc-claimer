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
    "2ovhvmfrQKLqtv48jP1jAwQTHvTstxRwrFr6hStHDH63iQ74A6NafhgKTNkykgiLtWyyaCyU6AoagMXm6K6DGrzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3no2379CjnL4Z1DM3CeCYiLw4y26qv7tEGkMzVS6W4TBGfSC8bvxB51npH2hktfLvdNYE53RsjiGVZwXGBcY9bR4",
  "key1": "21HdPaeC2BEk6qNgSZ2sHdWCQLPoNVKjm61WKEHYTCTivLgzdJRiCWvHBMk4RomGkVyL5eBQktPyGHga93jDisYc",
  "key2": "4GiEg84q588NCNUw7MkSKwF8L7RWiEm6YiFdR9WVqY6kwasPog5KA9N2SLVXVshkm7L18WW8S3yma74oV6ecniaZ",
  "key3": "56YytWbLZNnj2g2Nn3tTMAr7AwgAkPLkcXwbWo29XCrJRJkYN3rtCE1cNKaazVYDvbS82tSCRUW7EXFJd64k6b6R",
  "key4": "4RQ7mqkGbvzGHGC7exKTNL5FXdcAVvzEb7otcKT23TEr9ywJkzbuqwqaNwkU42TRsnYDiUEn9hTTXRDM2MrBqAGm",
  "key5": "3w6xsNA1WVQ6uqKUdNzK8iEmKh3MMdCYTTghHTHQr1hZFWK1tyuQVnW2rAqk4udzdxNdNjtD1SNuQjbv2gD82puh",
  "key6": "8iSG6dJdvn5pMRjbNF7zHs6BQ5SzBxnFM8dE1PZTaDCNUni53WtxXgdEg4hnZh6667TyjXXQiWmLcdkGHuRjgGf",
  "key7": "4YoVRzwtWDuL483CWaBFHw7KKaNAqMkvQU21HcqAuqgtMX7Tfoz2daJ1tAXxg4cFT9vsccMqNiCcN4E9aJPJPEpE",
  "key8": "5ZewaTEV3SS4bQEJb1t79aoP98gS3mM5p2ihKTtBnySoPfNahDhtdJfyH8iYpH6u7MMzJbxYi3VCdtr3Wwgt6GPj",
  "key9": "3gf6NXupSZpMZ6uyzA79C9syuZ8N6Q8pSuQdtxr2TyHPJTVnRfKVdFhrpiyDPGm8sLhj8PoYsbf5nqvnfrmpu3qg",
  "key10": "3qhUV7EwVDxZdFk1mf7u5tMTzK8NRZuwR1M7wfdE4SCcyxLVNCP3uQSqbyeJyNequkxtWKQvJuSFxHJowLcjGL11",
  "key11": "5kwmeZxrihH5SZkbVA29s4QnCq9W9fMFiUN2cnKmJkHYXZFpotbsiNHEFaBqfdQ8i8WubCbXivFDRGgMA3ARfYJ2",
  "key12": "KHEjFDEuBwFsfccC9io1cJHYe2xaeeGKxKyZeUxDKFWttfVtwBmg7meg2JnK3VVKUvrmv7eDfcSh51Ar2Pa27ur",
  "key13": "5GDUxDzUkx8cDHHrUUsXvN1a1s5sye1S3m41RJz8FuaCgfBymrbd6JMcenEBKRjsieQWQzEYV4gVVe4dwCaBKGe3",
  "key14": "3DmpmCtU3fiRwPv9wEry4bpJdJ3VAmxLpY3RcA6D3ki9gXTarnboNkhQXLhMbqTYjDZ7d6C2822wu6BsKFKH7LVd",
  "key15": "5sZa3YcD6TwSw5Vgo2r4nrzwHSUpFe7E4orRqASoDNfMDuntdxKuwowTUsenhKLHd7BHZpjK2vNuYbkRUjXYgL4v",
  "key16": "4TBjXMzATfgrHEGMuj8zSQFRjYo7LjXfhnqLAWPJjBeTV5K6dNm2vFkT1wKCpmMd1jG6Q3rtPGyL1AMwBcoKhkw5",
  "key17": "5UUDi47VSVU6wmn1TBPQ7vpTdurXeWbn9c3vRyrXT5NaiTQuwt7rYNLHXJgAqUoxg6yJ5EbHy15AQTcaWipwDK4m",
  "key18": "VwGUwu4KoJnaoS1gwcEcxg2dW5AS3Tv7GfZEd8je5r1HvVgHXoU3Y9pJDVYXRPutEFr9orYTtZTm1e7ZpztHQmw",
  "key19": "2AfdEFUqtT1GE26PPdrTLXpAVzcy8CKfq1if5C3AYPTbj2pvPdHiCNAFCCYJqo1nFwrTE58Mq5icEsQY7jd67dSn",
  "key20": "7d9QaTndaWF6x7dU5RqPbFPzkohsmtDNFtsA3Fp9LEW2UdjavpWXrnVgFAQ6RBVaTPmyUQdNHNMzW7CNjaZaT6w",
  "key21": "5n8yUoB2cUMfgDYBk6wmdN7rBX38Q2LYNW1YXnvp6EViFudNKdfnyV6Nh8o3cf2zBbc7oMEXr3hPzf2eiGgT1PWc",
  "key22": "8TsaoYy8G6XentNc6XZu1zk6kg3k8DhWyxwLWu8jzTg31vsmw9MZvtrvijg3bqCPUqqd27tenCfXPm9A3HC1ysC",
  "key23": "4sF6T6BDdLbcY495uFWnoruNvf1ewiUWC2qZY1dv8qFB1YQGp5MN8LQi7T4jhYtui29BRQQo7FQWJpsGVZodc6z8",
  "key24": "oXmwyUD2U2VAic9NbeG1uSRW6payDNaKtB8c9fm2BBNnEM63EtoDCvs2j8ALHyYu6hnbNDXJpCjHMQawSRkzVZ6",
  "key25": "Fex1C4J8wMiCDpj2UfjGDK3BjLT3yz7vMoUS8a1eVLV2r6igxvWdhQDFnTPeMUULGD4FBjho5UrksSbwG9pMFXq",
  "key26": "aLeKbyUFiiaYVvTBfo7RGKVHbJqjxus11eqhH3AVTnKvt4XZR8RV8HWNNWNb28d5kHFVMV5zgrA5w79aAr1ooaK",
  "key27": "2jTxSC3XAJcStxpKoWRR1dbufemFyDDaUYjSxMXvwNPZrLSZVJCaiGzL2sJzii9aAHrUNk3vkQUmTjV8aonCRM4J",
  "key28": "45D8v5XhnmYuqJYCr9rTbMXW6UhDatNoPjhY3TS8oZJDtjBhPjasjvQUPQ8hbJBHQ1mqjAA4Udz5EFpEnobGR4v3",
  "key29": "5WVoATDG2H9YUxf5wnFpQZ8ogS6TNUGL1ktb6uvA1PXsBHodPWEBv2uvqT8NxvXCEa4sveFrggz7j3qEhYoRQsAM",
  "key30": "5AnsPWT5XmpShUWuQqbKDgPmuBdWsGRA93mZbAGQm5rKmhxfgKqs4jQHTEwFR6GS33Ci33CrGjkmCe9gJC2bUh28",
  "key31": "469zdguvqSfnUJE5WfXT5sbwkohSH4nteX9k4UXVGB2xUBTzfbc5mhXmGgp1bhkPRWZDvBs6bDN3QJsFPu8bkxDt",
  "key32": "5DNEf6R5FTvnWASrw7Xyhn8jg8ii7UB89yBMMbfJuPZZBoSZAc8VftkvtPHyPVt1ffRdzuoaWcH5CRSA5akTTKyb",
  "key33": "jLWpNV6MtAoQ4qg4AVSbnan7dFrV29cPtZdhRgM5tcsQ5xckxs5mmWwkjMNroRd5HkZFD2Natz7GG43cFGXEqT3"
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
