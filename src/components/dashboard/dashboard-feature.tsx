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
    "4x2Y2W77MC3yfJ7Xv2VEXrkANbUN5hRkQfEdA7CxWHw17FTXr6JAx7Gt87E1G5DZ1ayjSYTktr4TgxKPcZBuy92T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SJRcp3ScA4jmeUmbTAFcV7dZGYHzMrbmCsVhL52oU45irbqNbwuuoNXh4p5HJSkxMw7T6y5QnERq5p8TpaZyCLk",
  "key1": "5MyFodbxoRFauijHreALt7R226kNasX29ucJxXL6vwMNuXPFUHcH55HVhEzGeqmpQatjJsirZgkre4sGGdwW6ijB",
  "key2": "2PSj77iZpXEtHo8REHUsv1VyH9BxNm7x15Dc8hSxYn5yPm7PrfWYtRV7TVjtr4uKLv48mhZZXYDbbGcMar6SAD6H",
  "key3": "2WTmLAPCK2mjLV8tAmqE4goNMhBo2yzVWp7U54vreKAwYXgLx9NEWEjNzfhCk8zSqotq5pLaWKg31CRvDoLb42BU",
  "key4": "Wabu7V5LL6CE2B8aHYRss3QGNzLmk7SvqiuRGDE9j5ifZZDhWJsJM5KqcGQyV36S65pnHV73VtXjFWoyfE4KPN7",
  "key5": "2TCFWms95vU9rxSPJwFN7TyT6FLFkSgg8ZjfbmCh26zFtDP5k8FJFx84S8qFDFHNF4GBcEaf7tNRbrwCMd1jY7wv",
  "key6": "5pGbfbwXb4afw18szU1cqMqXBmpHakYqcUnPsuMh6QK7H4p1Fad1s2RyywDNTfR1Nyzpajw4BpKGbxxMaMVf4uTU",
  "key7": "3TPDYkgpnWc2LE2GnjCBUwrQmo7RshABw5ECthBPwJpbLWN7ecP7JvHNXBAY35RrdBiQWsooBFbvJb2VHzWCxsaA",
  "key8": "2esAvqup2dRK8qCw9U7dRcNAkVoRpvvwZHaxAzvD2TgsMLgMKbbNfNMkWaLDSdGA4UEz7iptKRRKzyARYn4agJvU",
  "key9": "4JEpjCsLwAyFxGoi8N2qcpLvUDahKVikUHY3H12djr5mVRux2QoedgQ4tqWkJfreK9AqJU1YWgm4PeMfqH94Q4e2",
  "key10": "2WHwXXpRpRB4i7aynQ5U9zkK7LmGWouQFvjfnAW65xVuCyuJRiPNFkgDgijiCkP6ebZrFBqMx23YuvnKbNPxp7QY",
  "key11": "s4jN9Nth2kMQTA2hHceMX95agrxAJzukTuQNuwxXmkbNRXSy2yWeBpE8VfkaSNvGaLp4kRVGew3zdd2ejFNs3LS",
  "key12": "5dy9EGRqZxdAxgwW1ma3fvtyyfjPJA8qMccSDrz5XUDHpU7UiTnqDbC17D7ia6SU6bfbYEJpMgZmJWZL4iLMuRkX",
  "key13": "3N82g2pxt2MA154uwbPgts1iSv3P3rL5sLeLLW1QHCwAppjQPjGnudfNBENSHsyoDzFcvV6pZTKFFoEfEYLbcnzp",
  "key14": "seA6zhwdYBGtNsNYHopc2f93a31e5rPACwz7fkwFqeQHFJTECPSchJAbw8uFRTeuCLBvyJB8YkZwnU5WjMMX6Fi",
  "key15": "2SdAgtr1Ru5jHPtprAYmuRip3ZXupS5XEKEABDDJ7nHEav9rgn5Q4f6Yq7Yu1LpskXvR3kQ5zmnnGU5nECKQ7Ms2",
  "key16": "57zpCSmj2AXEAEEdpqxAvPujfWkc1ciWymvAtvPTFgVCUF4G8ywVrePCbyXnTdNvWzpzG656hucpGiQS1F8GbAcH",
  "key17": "5s4FEEke8EhmH1BtGWqJNQuPMzv2y2xJnRZxkz1YsNFC5zNKNsn9rzJZFgzREafmFm8pMtHHvCF2Q6QkGhkoXpAv",
  "key18": "5j2kaWdEZw3bDxaBJDrvKRGBYdWj56r4GkdCSmDivTbA3UC6nRBVua45sxGYEKjKkBsqJeKvbK4keogfLMSB3FMu",
  "key19": "57WwqWRqiXGGNRYXZYvTukUSpiXLPTwgrooMDxbZuqUkc7Turq9xLgkWFeoxRJGSqPvY2cDbHETtzWTqSntKjj94",
  "key20": "2cXq8Y4dZ6gBJB8ZpiJNy8yVDi5ucxBeNcJMsqvtvm4Kv5as8b5ih97UdZb7XNhXKHJaUUUrCa4GogbLiN6MdXGd",
  "key21": "3bB25JC2XBwV971WfWiUmjW2EN9rvWUsgpTt5ZbmRuV34ep32pnKRxJx7pyDUNdpP9iCgeAzZhDv5v8oqzpLWdbA",
  "key22": "4EboATQkQQMsq661C8SwvdBcDHf5QarQ2M7qAQQnTtHbc3ivcU9kC21v2TaHDKPEfXpDjkdAn8Ym2UzbMGfsKpBg",
  "key23": "4kbNs8bVSdaqifFb48Q5obFYJBbyPUXC9x7annNZDWwsGzbZBKzutCNRZcV5VpiZj5WsGfXF89kDTwhqdqdRcxVJ",
  "key24": "4kVt97S1n4cFphpmCwsytz51A2HjjDtF6smMjvR3VC1By1xWHUFuRkyXSpqNQJdqbgBBAPxspq2wUtL6TW2DRsUG",
  "key25": "efusPFm39xU6dKXou6uAaKNcSh6SmJdVZmhgkR5cCMiW5gcw1S2QS6xCHWwtAmvaRGMAmJX4dQFhMPRKciRKocE",
  "key26": "2X1AKvxw6YbxdFy9YE3xb2vVD9F41GQSjuQYSyR6EHbLAKqVjxFrSTV89FeExVeAPUQBagCSosuRuKyrb6f9yKea",
  "key27": "36f1SkqJF8qLqicKGi3C3WEyjHtNTgokC1KfB6j7DwQ3qY3QfeJN8ojvmtKJ4GPEP2QDuQn8s173ninX1wqR5rpp",
  "key28": "225sEYQXKvcYWu62K7GVZVgevb63z8M9w2AXWfqUnVS7DRUdD8WFAVEnY6YUz4pqMePpo2k37bgC37Sc4qhu57ak",
  "key29": "5HgjjPpT7agGxYfGosKmXAxWMqwLfMXsdoPrCMwzNS1vBNPUw1dizq1va3AfmD3GktMAymdAkwT8fGtJeWaMB2gW",
  "key30": "42WhXTPessqToSkUy7kxYxb5MQLoUNz5wjd6noyLzMf8CtTnMqUAon7MVUQqLU5pKmDqiSThzow6Z81JSQKaDH3F",
  "key31": "2oDTkw8Drb11YkCcYj731dbYHoknNTZLNmYfzZrrEtW6z7vbV4S4awqtjwpjgsocdY53yqKets6NdTjxmYLJys4c"
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
