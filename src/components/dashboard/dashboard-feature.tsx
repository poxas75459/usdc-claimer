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
    "3bumt5mqGzzbexEHVG27uoVNS9sQcedkQxVBWRyV7vYBV3fEPLjqiKAvVhXpdxSYjb5vMCx8fgLa5h9Mn2N5gPdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NCmV6QSMJuAejugF4pcP2gcSWe4Mx8s3rhAaCUUNav1UbmVpezZREiDC77herX1LDW54DNBCs75s5S4XJcNiwtQ",
  "key1": "4NxxM3qWBojupMeq55w2vxAPXo3kb5v8TExzZ7yUnGiN2DQbZWXhJGHG48FfE8WJEqvu8b3iCcQhM93Lgcu7avgd",
  "key2": "3xAfr5UVMWZZckqU98HQySqiUxwTcnNofAfmJDW7fSdXRvcUaNyHNKEsAoZaWjuTRTmG5DZ3H6FTWuNbE2156yG9",
  "key3": "2rdZPAJxjGwY3xiTNKERVDxRKEYhq62FWyiY5yXaPYzPAEm53mop9Tj18wPGKuJ5bmrhsgNGyxfpyrEirNH5hq9R",
  "key4": "36L3zVEEicfw4BtpAw56s633n6niaJRGG4wRLfpbNb8DXH5jxph8jt5sGcAKa3nMyyAJnbCXTtqDv4WwJKjigmmf",
  "key5": "447xdPNVNrM2GKedWxad7gkUnnjtkG7F54nZmGVC4eXmT6MPLfuA57x3cfKbhJ3bhrDASYcKuQ8RzTQVqZx76x9r",
  "key6": "5QezkHdga3CarTbDGrXdJgdh2NKeFg9nH8ZndPo19q88mPhiv5N6m7GVptg2aoWKCUNDAQZtJrQpJoVAdLWUw1vk",
  "key7": "Fgjgss8vkz45eegjTWZZ84Ygsqf5Ty1jX1eNA7XRVnomTV4kx72bnhU4d9wjtZkUkdRkxySEumVcpsDDxpwU318",
  "key8": "5tZZYMRhpfSvgLfA8NUy4e2jThs7TQfY1NCKm51gsrkwTy5nKRUgH61vze6QNgo1KLLcTRxu1tbNfL5x7cQqvgu8",
  "key9": "2SHDN5uwkWSp4ymLo16XJFJmUHnXaSt2szkyZL3LEAZxhT82mumdwbmCLFPprQEsUqrWvEHeyGm2y7KyHGjHm9BG",
  "key10": "4NFXe1ZyyJJj4QjccfbdYM9uQ5x1SiyTR6eP9dS1MZHyY2df7Lk27WBD8UFjT6uBs8BFZtMPoQZrT2bfrHruYrTQ",
  "key11": "GUWTRm8PndB5QxiUDoJDZKPfcsun1FCXXK64otB1xBE9L7CqKkVWos1Ww9cbXwzjAc1rgtMSbLFo51NZw5hwCXb",
  "key12": "2czxUmh6bucn9tTFeCvc7Pj3mAs2xqhCEzLRvgpoW6ZepPsxM7mqcF2u5GRAAyAoFwTnsRFNxSrXDCF7EdW1FrD9",
  "key13": "3MTBhdmYKUf8kiPDPiuae6LQDX1j3nxYePDoDdziUeNJY6YDxh8r3PxpvjDqZ1GASTsPjT4ykT2MiWyPNDPkcaXm",
  "key14": "3pvAEy68f1UniHvx38X8tPqdyuF1qDnN9EkxpRdSeJ3tpCFrnKdVH8XcvrJ3wcnRzMriAC5X2Jxw1V7rc36oxuCd",
  "key15": "5CSymmDJB5txsZsRajUKTcR3jZQKq1m8V79rFfPa8jJWFFWCs9CNVzsQFr9MpS48LzenQRXEoBcH4RKe7KsWsRjG",
  "key16": "2uK4N512ztmEqSUQVLvjPNE2nuH2h4zmPUvocRPSBsrcMiUgi8eZJwijV63BMs3goXL2r7LW5jNBJ998mVhWCeoB",
  "key17": "Yx9V23o4N8mp5necZet7WXJu8tcJ33FzV7xKR4ZDithXPpXLYLJJi9ZJFR1EzR5hFZpBqyaG5CXgtG4DMYWm43s",
  "key18": "61WWxK8eYz9pceqa6TpSUa7v4zu78Rw6Uh73S8gJW4VUBq7Ha7TRZdvGg1KE3Y1DCydUAw75sbdFty3ytc1FB63X",
  "key19": "4KnTJkHHRNrkqBfoftjS5ihKJ4K1JwMeu3Yfo1y29ki5KyHYufiJNDZfVHVfFiRg42abYQDsxviiEC2yqgo618K4",
  "key20": "4VRpfbVtQKf1rPYAg92GWVubYD88uFPK1eKiGzNyFQhUqdqRaBKSAG2mwu692Hndsmdtaw1afPY6KG3ioMaDjebZ",
  "key21": "5pBJaRFu958x2mp5EKEWtCenAPjjQRUMaVYKCgRutTYGNNTbvAAdTQqt4emhAtgTw9V8yx61rzAYFCabP67Z96Wu",
  "key22": "3ytbVpiaWXpdHP52z2o1eCGvAbx9yk48eLjUQFXvBdNRpBiR6ZMvEt6cGBTYXcsbTaurAGZr9WzyHa78Prc1nnkC",
  "key23": "4MtRCFv3PagBcfjx1fbC3eLThPWAcMgJ7CDzSaJtHCqpJeeVhVjKrpbinUGWP44pnQmNqnv7fkCeABSHQWthPqis",
  "key24": "5AwfUk1wkgTZwt148XPgUzsum5imWXLYmRicATZmLffNGCNGANwuqvafWkLWm6RTc53ysvWe7Npyjs4fvRGD5hS5",
  "key25": "c7Lxtx4Ak3kN6qajj2EjDvD13wCgrztbQUWbzAcZk6JcPvzSj1hKQZ58FuFPuGMr6CqavCLa3vqTnMHbeJv6BBF",
  "key26": "5ptSZytQEP1xXLK1Qz96TKtM3S1STKkXHSN3cgGcxryNY4TMPsM2wBPcKTu8r9QX71uMxqGxNCPfNoYhdmiQifpD",
  "key27": "4awn7hJJV6NC5FMQ12d4QdFAmubaAQmcEQLURyK9pmTmBUAkRy6hFkyHEhNX6Tg9hWwpd1k9wHhrcxc8igvYQAd3",
  "key28": "2a9Rt2jgpQsndpYKcycNfEtp58emagCK4As4pEKvdx9hKa13kWtsvQy2T1kgrNVZNmx4RKTpBpCbhSoietdby4ui",
  "key29": "3zh5PTxfJseC3tsBqjVxN2dqG6b9GLh4GwFfuej6dKSJYJbQPYbyEaaxMzNd8k7H8CEeWRRyvMo1VHQEyXis5R3e",
  "key30": "2Jjbnc8KUgY9dK6rRmk5DZxVKhmBbJGu4dk3SF4BeD5H28qnFxR5teqPw4CrschhRdJhygML5AiPz5KFJ8YYa79H",
  "key31": "32wZJHHFEwFdCaBA8tGJAwKM23s3LhWQPR4UoH1nWTGJXeavVRU2rRsbo6CE19HySYZTg9YvybCL36rT66FZGCp7",
  "key32": "2MZNRcW99XbmzpaYYrq3TNHevpoYXJLLEmCNoSDz2gECCvbeDtTqCstfomCLyvdvRoyRko1HrHFCLvd7nGBWgEjP",
  "key33": "4PDs3XDo7P3j4huYR8wbmrUM3RkoLMo7QzCxSAzotfXAvs3ozLA9MX3P9dYvDpG9yL74WCftUNyNTNHvpPY9BBj9",
  "key34": "5uhWPBqMZfG1f2w2YgRvhSzTLFh91Wwzr4k9eA7A2dbYDHGh5y3MgWPQEacURbMsYn88UYDaEZ3EaW1dJacXyPQD",
  "key35": "58E4s7Fnox4keLtSRkYUMcYaPDpUXHZBmXpj8vjmTu53s6THtgzggUkjSPes8Esg44aHNdnqqMK82cUrh6yeq1oX",
  "key36": "5cKgiKfR86NbLHVsQaqvhJCUoWExZb99gMC4XwCf2bQos9L4WWmeSXf4uSQ66L8fTn79Coia7kb3s6G6ZHX2WXwv",
  "key37": "3oxJwMEc3sCUTHmpGzD8422j4SdaHug1nAMZqQeC45kreGFJStNSLgqCrvtDo76Nqvht6uDWCswGEkgEXTzG4SXi",
  "key38": "4uEbeeFhByVLETiheRF5nkxuxTDPYHiLZWDaVtMpBQzQTHsPVAj3CRmpfDR8kmW5Ey6izBsXR7toid6ZzQgi1wo8",
  "key39": "3wSNJGMWGaKRTxu4pjtrgMABTF1bHTjoAu32a1P7rBGjuf4i8bpwct2RxnSi6EpAZWdKeqmUjPec7d5Ti99xCfNe",
  "key40": "5f37HHroJ8oq5YQmJ3FqtztcsAs8gBeCVYB1FzWhoZpX82asRfX9DkWY4XSv2W2y7bdg13SwfyaVcoMHpWos9rSY",
  "key41": "5nCiD18UnB7g8XnQgTQNc5W2ZVaEBjhYoapqns2A5xt9ZSgzRskjLmjXLGNwWScJB2U18nzpcGJTG1bvKLDfhLQ7",
  "key42": "24JF5pCWTqZXNRDKHERsevVJ3fC5YY8v63m7TRmhoQbTUnALZYEvtQmtFuNbqPpao5c5dTXn81RLZmuVrZng71pw",
  "key43": "5jtQsYKEjFCCTro2qfJcx1ATC1bFnKfPUNVgwmJCsKZrgPnXn898ysjKpi4642PdSu1f69vgpqXaiYaGE9zAuge7",
  "key44": "4JRQ227dxpZ3iBxBy9yRc89YZ4j9gVYAvr4ppHUPEGVsqqB2JAbi44vTn9PkCC6aK7PQzbSJfPytg7B169Cj91bf",
  "key45": "4CnvJWEmTn3ZTeFBfejDpGvtjtua41eLAev8Aijooy9QV7Y7LciUGjvbQckAWHvL9f9zr4wXhGP8dLYtXTqfQXbu"
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
