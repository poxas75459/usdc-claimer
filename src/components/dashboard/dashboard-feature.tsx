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
    "4hPDdrb91kk2m4scQyxeotYh3Zywp4dkzjTacvpLZqyf2ipmyHFaiHWaPeVp1QreZsEXx2u2ReH1ywMPQtbpMEGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dk7ZmCFDSNiYWuC7k2emr1fcAdBMN5mptP9ToTJWZz9Ba2995fRqeiYg4KhjV3XyzgfBK4qbeMnho5wkkP1zPZu",
  "key1": "3LfDFowqHc294awJemKiqSQnLJ2Umqdah5p73VUJi88SB3kERhkafbknfqFaWxg41YbsmR5QM2MrkZjsCbVxKae1",
  "key2": "3jdeGAW7PniAxpBgb6AUFHStfpefRrzrDcZNdwGPh336Wx533P3S3TkTPsgnQbzEVRRyqQF2KYJwoWcNi6WTFQBp",
  "key3": "hHjrKyJCFQmy51j47XaKwhU3eNV63hFqwTepFcSUyRJgGJy8bXVhmcMM5iN7CM67aUjm3LSukRxd4CmMaEWbTJk",
  "key4": "dx8x8rSZrjnUDbhPpkwSrsYcFV7UeeU8AZRBJfeqpm4umvujCAaA1oeaLDpvJ13ps56hRQFgJnC8FFDpmJbgjLY",
  "key5": "fQnycwKhbxc5UV8hvzEGZZhRPFWUrD3ren2nhBHTiU7iZG1urWCmM6hX68fh5dtKsmj9BRhurnu6M9Lc6EeFmc7",
  "key6": "5EjrnyoSCK5uWYYAnWFpMbYyPh4ZKYVHVDtjMMUjsTjrKJwanJ4rugLRst7JUfRpJjTTfCLrp8PkJ4t17cNjUZKY",
  "key7": "2rBLKqdE8JHzSJw3Wnpr67kUM4fVgLsrsoQib6hhBncCqmnTUurqdNPNWi2vh3JMDkYgvsNYhpizqPe1guT4YmmY",
  "key8": "3CWpTQLvYFgusMfwTgBgvWytrxywjiVSRiXcQ1bAr8QSJc1w6stdJV4nkCFK1mHB4aAH2BLwc6eBVXZSQw8jmwwz",
  "key9": "2oShwXn1qTAGNVceKXociqb9smKVuGCJFyWqu7M3HHV7yrgqJQKP3Ptn5sXAbaPuQGbmXp59wsC7p6AisFD835rQ",
  "key10": "5DVLS5ceTfTsiCMXYjFxhAGiXynC7q6yDDcKYqyeaPm2aBR1A23sv2oRfYiNGHPNyeXdNge6f95KG4WH8DqpYqk9",
  "key11": "4PYgNEjTgoUpqPabubJZaqjU5oJrxi4jv8m9wrSoZmktJLUKYexdsseoG5CjBi6TiLzD4CFqWjHDQLGhAcaHq4RX",
  "key12": "w4EGtCPjpEjrbyYTDVHT3VdxzZdLZDw12kgZWN8E4psvDxMpGaAj2CiyFuBZXirK2LZmfRssGZDiQuMwuVRF8s1",
  "key13": "23PbZSpbnH5A21em9dFefUTnhjN4o1sit3koQMjQ5TwAANZGKe9WuAdW4g5yb6YwDGLNKVR6e47nTR55BpxUUgbN",
  "key14": "62atmC5MWqHCx8rbTwTT5RwPD2g9jv2XcDDE6pfrtPB5KsD7uxe8EDSWb4m7vrwbmYTeSXhGSPqfrWKERhmtTNxc",
  "key15": "5zpTsktb39itGLaraBdH6E1jHxe3KEAvafXpoYyuJAc9BX14n77AWaa13ZijuMv9p9PBztfLqWHQDQwz3EjHE4Un",
  "key16": "2LM7aR1D2jTw7nnY3YL4cc8GQMvQeJQMeQ7pQeRun4Ms75ZKvkSRkFrHUM2n8dXGbZ31jV4d8aKb6RwECGqdBT32",
  "key17": "2zMZWC3GCaHmHbxZiQEZN5ce2nvLN34xPheCDKGFoLwrgxGkPBotnj2ueW3U3o2WbTJCX9VcDiH3hyU12F8b3h8z",
  "key18": "39vzhXj1s2KW9mZvcMsULhZ2XenwYvWHHh85vvXckrNnZu1Fhr3SFnikJhatSbM2c3T9z9Z3kMjSBkg3bCmpF3gw",
  "key19": "57iqNkDKjrFCVCJEBAFrcnSjvcFEd7WsdMMjWf7TR7sP44FYeYkpLd3Bi7UVYHcWcgEeA1HkBvszcZeRysdqgdhW",
  "key20": "51Hk7n5LeksnBe8SqDpH2ngYnGsXJL6JZCctDB5qq7WxwFHawoiH9y4m6Mj7HN8cAMiLbKYLeZcwdTivQaxDL979",
  "key21": "3SxmE9ERpwAREd4gmysH3zwu5AJbaFb7a4Yo2BsbxkVmGKB18SPLCkBrjg9cyZPKJpj6QQWHLduhpYzxQt9j9Pyc",
  "key22": "2572CBTExjHQvUQsbuT7fiSPeqFdE9PaHzJMJeZCFdj4ALWB4g2c3KJeqJ7bDNNXCSRFfHxJUmDRicGQUyP2mWdg",
  "key23": "41n2rvYzsJe6Q46YTRNxGEsYtZMiUFAH6fvqhbPTyM8zXY1MLY9GSi5Te8ZRhvFFAHWQfi3VyYPoAfqipDNrmKPf",
  "key24": "5pPHqNC5zpXZF2yWjS2h7FztyiLZ8apRhFthNKdoWqLbmv3gnVNEPbrm4dkZurWNfZ1GQN55go3NkcXctRE6ZJKj",
  "key25": "39LMKEZkpEYZAVPV4i9RLrK4EUTyKciWVmuSjpfkHudffWSRVp7S8dxq8J9Wk5bkB6knpbTxYDiANS9GWXjD5qxN",
  "key26": "33q1TstweD4mfQVxKuR6KtrpE3xhpF2q2RQq35NwUddYFRVm4kbFGUMh2fVEp8KCyiMiBq2Qt2F3TvquoH5Cv2i1",
  "key27": "3VaTbx61zG2S1imr2JrjoPc3XPg8XrbSSBvAqHVor5BZTEkENyaEhRWpJ1hwqJns4F1hAVkYXxgGjuHbYfETsN85",
  "key28": "VfS65h8AaHmrhpCMLv6PY8zsZhZDFamvMXcoK2yXttzhHtw5QDf3pXzw8bTHxVJtxpt5Z3UQv6vGUaokCLqibvy",
  "key29": "3Fjnw26kkyXTsnrdn9oWjFkUwyZTwuTeZtGmitkmz81DEa3WvE4cvvxyb7zDyAihiNMJe5JvVhPpKs2kyn4VghFD",
  "key30": "5vxBR9YM14eMMMz5aDw3yv87YcL4BV9BQvaqWQZDCfzDcFkR7gJTELBVAGGVjiHfBgUkwzEecLiaeKx42SJQsdWY",
  "key31": "2HV85R15YTkYY223bCgcZ26T2Ly1raAgDqjrYNjsYkwRYrhW8UAKVJ9PgD91UxDmgVvjP4JvwReCDHCQQRjdq9WF",
  "key32": "qjzJU29c9SDgvzK53ua9bF3msibXKwSadBK5YHAN2846ffidFtJJRycgWC2EBijnaq5LRUsjYw8JzLM1PAotfhH",
  "key33": "2ZiAWM9JnANtc6V543bgQ1hwTquFrJZuTUmYCQrijB2nxRThuF8bSKYHxVTMge96h3K34nMCBMgkHDfXypnGaCRT",
  "key34": "27s98FEZhYA3un4vtusJgzjQsHWSTsDD3D4Mei73MUZ6qLPxyEyEg4sXizXhUnUdASuMo41Pc6tmm5bYmxqZ3T1c",
  "key35": "4187XzmRAKkTmJqyTUADATAcJBRVCG76HmPqWbDWZ1NDGHnSujXj8ecPH9x3pYh4q1NaUAJ1Ata3SWerwtJJCdZy",
  "key36": "3k9iPGiiGLXYhLxnhGjq486xKcNBLLxYYxofbMP5KH2qPst9QjCHfKC8HoAd3TCtnhxHe7F8iSYbskgQstZpyfc7",
  "key37": "xnRgqgz5F4s4YEgvjMwHnGpmZVoQCDUg4Wqpknt4tDxDWHN4GZtFkmJJq1Py6Yfn77jxixPp2kKkXe8xLrbMtC3",
  "key38": "5faxgaV4xcBSXB39nf5Xt2tPmfLj2zZzQm575sBRNbvM7DyvbkV9Mkqnn4zx3NgNUQxLiosVW9c2BJSiFJvhk1uG",
  "key39": "39WRi11vLBuBfuf3HXZPsao4hgA6imkKqfpZ1wUC9sAXYphFHQF2KVApitcdko5RLf8QfiUomXPxp9EZHm1bz6t2",
  "key40": "4cfr5Xw22w2AeyYGsgCGeRBUQn41KPXCwuWyLegAT9QWRriub8MdPVsC1W2hf3sbypd1wwrEm8zbaXGupsbg6VrZ",
  "key41": "325H7ZKs8krKnU3r5YnDu8bdrtjy68HngRYTSHyL6pubkr4JMMpFRjSi29ovncXqbVqZqLhwYYu3Sqgfq1cJZsu6"
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
