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
    "31Z1993wiik2hdPSg6tAwprbcSzdHHCbohzcA65js3BjKZEFMBMHzjJw77fCTza3ap9ETi9zL1DoeiMu8LbndjNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ktbqfpuLW5UFVcR51ou754k6wYC7MMK3Ye5GsMJEPwNRUhsx7WJaPST1CRb5koYFWDzRhxrchhBWAmyk35ARWQP",
  "key1": "5mfYTspxLMZLVWuyESc35subfpHYf16EAKpUi2MW9qmpWrm9cgVtqZDQxSm2jqr6qseeeq2HDRsiDngXmRp2CkAb",
  "key2": "4joEaSpXXah1wzDBuvwpx2MCKYwkcWD4P8hM7rLcKn353nJdT4TKFi9MWqC8uiiGjfEHHKT2ggLLbi3c4VCMHoma",
  "key3": "362jB5TrRQBP6M6Vu9tUwVPzt37LzqPhRUiBnTMJJs6fkkaNgVWwxwKoFe62RDDqKm6DkieGG5uwrp9g1sxnCpjU",
  "key4": "2Qi4kfEWdCkKh4BPazdDgvxkhgazH6KLEjN9Uno6xujKGPr8m5g1ATRg7TrFmUVXMiNi1dQ1pw2JZ3exfGuD3gTt",
  "key5": "34ebK9HrFgy9HrvEukBJS2Mvn3MwLETqCxGH8BQXX9yXmEuxvBaR49PoKo529xY2dPtybENMXRxuYKLeqSg7HYwf",
  "key6": "5x2cb5ZsxsEmSNjnwPLK5SAGugcwmLmkE2Vf3mLfBn9qDtSZrXfa4gTKqncnkQhNnM98gGTrVeGwWVdtnM7sgZm1",
  "key7": "guJchasDqyeCMmHx98GeVXPV6XtVT26f3pAzFWMAtf3MwoMB8Um69wSZGEaU91y9ruyEE57Dy19wobx1M4mVoWR",
  "key8": "2kc6gDRpzwem5bvQTBcBoa94ELDvpL41cjJtckjYLHHwdybD4cvLRy8GPpNt3MKCxhVRFi31gGx2ccfZ1A1cSsFY",
  "key9": "3HCSEF9xuBY5kSwBLh7aqArDa4yZodM4KUdyQbcnUhKCGx4Dax4AvEWGSpPuUgXhZWWH2hRE69TuMGMkGP4qvDbe",
  "key10": "22HnJZnsruJ1avuTajYztc4Ko4BYsXeDo7RHSWWBoXBAHaYELzhuzFh9BdVXD2B7K1JopPhHh1uZmVxy8DBAgnUH",
  "key11": "vESnTWZ4aYgSfZFGXdNYycxHuXVMTe6LUoJQ93R59rmVk36wTYZ88K42cHoeAB73gsgiQYPmdYHN27NsYVoX2ss",
  "key12": "2TUHnXvkYPQBnavPqQeX18pDqxm1gNqaFrwoYGYLkf5nku53CHYPPpQ3CczXCf8Kfgp7jBczhYvWRfqsEvxh7T3T",
  "key13": "2ZvuNniSoV4TFfYYUxq4YLhS4n3hPWumfvQFzxLVbmoz7tCZw6tZmjC4PmiD6KV8FADfSratnc2AuupEb7xYSKiH",
  "key14": "3rw5Fvvua6XxmCx5sxfxAw4Jimu8YbKQTLu7Gs2GC1aszhGHuJJFXaEaaDeRjC912zUHUnZX8F3XcXDu4menNHbZ",
  "key15": "2CQJeaBWE7HANrgAUs1XhVbqKnsUs4J4jbDm5wphVJXAQHz9grEAqn3cRQiFtxejhoCXvUs36vdbv3dFGFHE5Ah4",
  "key16": "4w8kPDGxLGyLTTKKNvYD4ZZEpnU7VcAqypkAbLxN7v4HsJDTwfk5oJvbLEXUckeLuGPQ8uzyoHUN2Qm7AJbYQipC",
  "key17": "2nrhynpyMFvSQJ3heTXee47uWUTCUinmBDH4iNQVnmN8qM8Y2CMKenhAdkcED1AkTihkQbY1HzSav8tHbrzSD4VH",
  "key18": "GJe8AerQzQdZHsPqhFcx88JnUd8JRrDHwAJNEepKtNFffnoSgyYKaKMfoxsxvBZGChb6ew8STDho543VJ7ZFhAp",
  "key19": "5JEfy2qThNJPrZxnbM4fr3KbwgUmfeeJCPH4JCZFTmoqGMgbiJ1mPy7tZ3UStHEYRRzSAyiezRM2iasAuv1eVXcr",
  "key20": "56utvsPSf6P3tfLTExf96AFJscxjbBTEoKiXq1K289pkKEUx2jYXBeWSzjLCh7NWWJvoB5o6ayMPKg7o1gV5Wfoq",
  "key21": "5g6YVNibCj3Wnuem4Y4YcZ1dSyeZEXcXWTtoff7jbLcVGprjKRanGtcZ4vrUmCABvTERMjB3qZRSKo7GfvyzjtZ8",
  "key22": "4jtcviH2ixXvG9iBuBaMSuViSWjoH3s6ydJAuWY6saRkGkMQVPGwA1kkDRWH5Xp3yceirfZWLepsR4jfd997rAJ7",
  "key23": "4rjwn3uF5XvnswSiQSK11E7nxY3v3cWhVfVo7r7xJ3w8crTmTib2n6DpZVgjzdhjfAML8DdBC6syNFhRKjVgMsiX",
  "key24": "7nVELvTdn4sYJGTTmecar7YrhRcY7KE49dVKHxjEokoUWwgQBv2ZCogZULmbX8sJDUTvYji5JC6wqszHxei9e9Y",
  "key25": "4XfNp2x3i6j3fF82UQeePGK464tHHarRdJWJ4h8nM7HmMdPChtm4BKPUCvwD1ySoJMBDL49KZQiS8A74F5WuGPGy",
  "key26": "4HsZJGEjRXo3c1pRWMr2sais9SHy8E644LpKrwESgWnsoZ7GwrnPh2H2A15NYEVf4kEbdhQkyxthd1HaWBg6j2KR",
  "key27": "4GAPB3gTq8KtkU72u8mx984vruPy8iSGxbGQpCrtcJucK7sSy9Ag6A6QA2xWbq3gCzhSKAuVht8GGqudWb55bMbs",
  "key28": "HE3pcBxMKS8XPUPnxp4QJYB9hMzrb99RhXRSgLyBkACDtFCqoWe5vnv8YXa25eqwumJhBL1w1iD7pjp5rDgHwZE",
  "key29": "XWNbRtocMdYqnbnSbXZrKNL29r8kbYknwStBeKHAXyGSpym2ffsBCAu7Qnv28Hkdf7SnE6KLTk8r8WZ4iKaGQUk"
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
