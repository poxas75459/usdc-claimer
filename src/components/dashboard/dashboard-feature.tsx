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
    "2EV8AeRdTQhA7zfa7Gjfg7TDEv53NgZirXBmnM28s1E7c5UzVbhmPaWYxp21G24YTc7Vv66zBHNWTutxbNCoXbRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X3pF2kozZkg3TnTmUKbTb7eAsbWFU596aMZTVV559Pg6yW2DmSWwiJ7kDozNZDVZ359wj28cHdX8khTdF3v18PZ",
  "key1": "5DFib4j5pV3Br6DpzqgVFFEzHiN62MLYE9c86JqXirVQPvYncmkiXHuRJMDi9TCyc3pDfUynCTviLzDwhHQuAmhf",
  "key2": "54FYsSL6eBVkvrKxV2ta5fJBdi3nxfSbakpYpyZitYcuUNdNCQRkDEpwcavo5Vzy35YpyWf7zmGL9KRa4YkwNQc8",
  "key3": "5VPWd89E6UPfM265PxTaZ4PULf2QH5zQZUECkrbn1pq1BbraZF8YY7XmUxZW7Q1G3Qi4j1a5v1u1EsEH5J2bv7rz",
  "key4": "F4HptmJn99EbHtAebxS4LMebdTDB2XBFSQo2UqB5oPMqmBdUhhZTNdnPYmQpFTnpJX15tvmruhWLyqfaRXnApUy",
  "key5": "3vzMERvUJj3ptj5LDqWjwPHEuHbUcnSdquWLrYYvHDtNekJLBvtZ61T87bSm63gBSB4E5mKHcVK9w9seVRLicypk",
  "key6": "5Ab4NscC4J5xvY9KCf1ex7LjQyJ5BDgh2Myr4uqyCnpxV4pb4oy6NUWwLS7rrR6V6mHitkaznCaAEfdkwEUVUjPH",
  "key7": "3gXg8h5nfkyvBvdSS5t12jX7QBYjaH6x5kX91ge7yDTSNbCwQwD3iibmjdd1vNfr1dXw5weFGypgr6whUTcbfJFG",
  "key8": "3LTWsH28AszaRCZWdeeicxuyMELUHgCnDiDhkA1A4yMN9HqkZpjsBrNfo1Sox9JxtVg5pjZNQosmXPdtHAnTagL1",
  "key9": "4YyiLofnbQievtn4H9szVGmSPmUm41qhDabZkswq4UePBMXLmgG8jwNNzJqa5GDdnBKQavxJpmv9JKUNyKW6NPQ",
  "key10": "49XqmNpMP19eT85x8SuiowBC3VBywhjw9Fd4Po57yHKdeZSW1BJg6iTGRGRndCFTiLbEW8vSEGrxyJWVX8XbfgWq",
  "key11": "4ENb4Xbtit7MxNKxPcBNXSppCkdRu1Y1rMRkcRUdLsfPg96xtQriUqJV5PhTKpCNqQEy8Y9u8jV9qLjadCjyogBp",
  "key12": "4uETzaHv14XmZk156y9XqZSmLLci7arY7xXwL9Mbh3Gp8eV5eNyxMFRDeQaxdXKaMSmWcxqjHohZZV3DKPdcH82H",
  "key13": "4aDdU4UDzBhn5KmMpKBKGvHrSYuaxAKm8R3wkxL7fGxm6ACtMQe6uaAX68uksMUAZK13MYLb8xs1KT1Sxk3iq8xF",
  "key14": "hDe7EGcNZDNNgrwMsvS2aipdZrvEFUVsdoqibcpPpzpWmu1dBSLwfmCcJ9iGFuXMeWPGF6Tu8T1QVh722BjWbJ8",
  "key15": "mpC9GqZzviAtnMnyMPHQLHrdrp23M9jBkSGJRzJtMxaMmNTAxarwffZoCq9bu7gVbj9CB85D38dU4Gy1z8Yd5sG",
  "key16": "ndc9Nu2phBTDKF8QCjaXhuD3AaR7F6igq4beKfFv7HYBuFgJh1CebFDYPx9dzBk8Pc7nBF48wmby4tX1xKAAuYP",
  "key17": "ejVmzTV6iHfG4MGfiVBzeVRt5QoAGYrdNS4LTgkS59PwQMnGfZ9VTgWhUykgLW7cCw8ci8cihT6G9ge9N8hKGg5",
  "key18": "2sDnz61BdQbdx7WntKR1L6RVVEK67pGT71TpM3akFYswnt1vMhByBad6ERG6wKHWFFfKbmTTBkKqQW8Z3eyMSass",
  "key19": "2XjscLzcc9yWN5gwEd6wZG6Pyp7cPibXXuqH52GoXytQQVuzZYeFUUxydDw92uTa2u1cTD7UNxQLy82TLMTRyLzv",
  "key20": "318kBSBa87UAQZMnVX8n1WbghfzKoX5mUuFGKuFYiCrasCb3YhpAGasdBSdtU2Xw2LLiDVpece2a9KkQr5PN5RBa",
  "key21": "2uCtUTSJNEygPjqDPbxCAkn7HwW2dvqS3bmU76PwxoyXMp4xoxjcnC4RuGvzxbWKrenDVLLVWeovNC5F9zZ5Yo3m",
  "key22": "4ZeS8qH9rNtNvLoQYyKVtF9wW8LZe7NnmSQmyUa7qJpfskCmZ2ATQvrFgWwSqoVkG7zFzvd8uLzwrbwZ6fr9fZaP",
  "key23": "2ZyPuEuKLzC5Jm8yB6GJBLyAWx8tqw7Xx7FP2WY8hYtD33rcd1PjUdS56Wuc3MF7LAHLSFaYYzkJUQ9kZmcjuhxX",
  "key24": "36qjXSkEwUbhDuqE9UcdBJnBza9tMLU2tKjcyNWkBhc429qyJT1CRiwVdpUktvUznbCdiMKGSznXj9LYzDRRm3d5",
  "key25": "5ihvTatB2p11Yy1nvTCVKroV92oukj61cofCUv9FMc9wbLVcGjS9j2bscRZTnQx2TFVcQjdtnYVsaLU3HrXqHpk9",
  "key26": "4ZtpJgFWDoaL4MQhY4DR6EwGE6MunqGWSXsTnAoP22UfFe6HeV3G8kYydofesg3sXzj9ctwF5181xBpsocoUQHgr",
  "key27": "3WS3sjfWoeD3QzVBNyjWq4U4G1pgnWtHUFvyv4yokNnbm8LfnrDi2aavawhQ6dx8aaRVanV9UgKT8MpoMvsPfVBi",
  "key28": "zy57xzzZ1e6KUfr91piu3446twn4w4Qk4qdrYbnbTyfRCxE5uw7ovknFnsa7ArieUbk2cH9GjzC7utXUDAVaJMy",
  "key29": "5zdzGjXTLbHGUNRsJtCEZ571uFT5CRCvKZppCivSXuuLzK9FSBvGAPyWcfeBh3veepDM783efvzcdXenFJguHYd9",
  "key30": "8Lxe8ywu1DncXwmSjLXSMyosw1KLL1E8FEhDzgZNw769ytx92oR76euXpzQfZkPZMZ7cAY19ycu7ViUHFtC6UDj",
  "key31": "2RU4QHKqSJyR4CGD18TKkzzUTxo7QCkMhvtMVvCpytPXus2GUDRJgWUog9d4fHmbx1D8eyRvuUgQ9i9V8Edd5eJM",
  "key32": "57HtNSbuJL4NtNoo5bsqDs6zu1Y93osxNNyiBwuFWTtBBdi69WdPjMVk2LD7tAPLAnB1J55X1sP9kuqjuaZySNto",
  "key33": "DASZ7Zn1otvQsignzGyd18ksxMTzNLTYds2qK3vXFMBfeipKhYK6xJzmByMeMjhyaQ2qDPuGWrheiXKRiU3xTv8",
  "key34": "2fqm46za18SDe19YfCW5DUwP5e1fB6t1qQcdbUYn28tUXrVREdzRK94ur6YvbpNwNRugf6u7fwvmd56jY3nc7jPk",
  "key35": "3UuQuV9oysv8VWfG23vebhr1JWVAGwc86zWR5dBcgYgeVDa6uKg7qFUvQiVrULBBCxrU65VeXQgVXG5JEEvi6ae9",
  "key36": "4K3APK1v2ZZdth16jVNsrSXscQV9c3FfHqpW42DR7qxzQKfc1Nu5a8MXj5f8ii6oKUxHfPtcRieG3abUZ6Ya6fjX",
  "key37": "44558MhFxWLugtC2S2kmCmy14qsFaRKWG7pZTqdgswpwF4fDVVciVnHF5U7uiwn3L3wZHukhL3QVJ5gYodpZmZer",
  "key38": "33RwfFWgWT2uysa3iaVJb3ZSAbhPrvEKrxDN1WaqpeHAgT3z48XYt4d8yHAEAxx5KzXxK6hBaq2bJcVeMisquwg",
  "key39": "2zD9LA3F7JERtokSAiB4qq57nNoDBZuoHJRevXLYg4q4LRj4PSY7Af1E76npW86d5iq85NnJqsUicdXHJh75LHQW"
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
