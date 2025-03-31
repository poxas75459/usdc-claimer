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
    "3NbLBgT1xdLMpGhKco7Jg9THUWANCK14E5zAiXoRPufLK4NYTpmoLS353C7vKvRQgoJoCDGndV7CdCBbrmEHaoKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wRVkFFNGxnMtT86ZQxTFCmskDbqSe1B7BYZotmDW5dsCWeSag9nZTSSKrgoxCLfTCTAbcEerEx7NMRKeKgd5NF2",
  "key1": "RvnkTvvik5WByNLasdgseAPHngu7TE1o81kbdQKABvKvYi3ZK8bgwWSn9kPRNhgPQUXCf3QN1Jqbm2h1oNZU867",
  "key2": "3nHPvLsdjFYe2dbJR7VtzjGRtZucjXPN56TgLNWKmYkwP7NW8hZTBL6YgBJ3TC1g7btbaytoXUq1yHF9KLZRnG1y",
  "key3": "2XaNsTHSeuuujRm4YctnW9zN4ztkjgppQdQ2CyLge2k6Xdmyh3M1DHcGrNnvRzxJFfzitpQJjf1gXE3RfHhDCcKD",
  "key4": "2tRPvRiPwG1xWFVtcrV1ZsT83hE4Br7VqRqnne25PdeB6Jo7wcwVLMhT8uYNNxgcfN9kKfcuDamMypTJ3q9JwNsC",
  "key5": "28fVvT5eybMGZUV6BKxYypcXNtqT4jpfgFPG5FXbpCawCxVN8MfFnhGbyWRxedPxQnETbrpVBFUV6g14bQjTAAKR",
  "key6": "3z7ogcy213C7cfc4jdA1KaUmPmygK7gDfYCLb5a48Gjz7URJhtmKpn7kPnaTHv3Vpa1vUULpAaowsiwyPojrbqtx",
  "key7": "4Tsjh5pzVmNYQGYSv7CwceDm7Yk2gwN54BYar1wfa22Q1SHKmKKH6PjEnCMdC6U28jdP52s9Bgdu9wsCS4jNdNUN",
  "key8": "3VZu3d2xmLFR5evvMhCKe2NsEEgJjUauXUHjJxkqmKaokAvxwye2wLCgrjMF9JUPiMcQ2yThjeUi6QBNQfDQ2HHU",
  "key9": "5LSWH58DaQS1YYfQLeRQSrdW7CkjXzC1uDn559Z5SQ1mzjzp7RSZpZZHpvxS85EZFBrY7dUoBQBfVWstCh7N85ve",
  "key10": "3ja75qwyY2o1DT2C5fPfdtLhdZuuvZ9dY2VQ4JxTfMLCTQPWToSzKgGNErUs6Yoetf4v3pJ122ahGypDpM7fW7NR",
  "key11": "4SzbmxMKDjRm2tdhT81N4eaBjnrg68TcbLmE54X4SJiqYMyne9mrtQSsunqAsYD7xX1viFdyjGhVt1DWW6seGqP9",
  "key12": "61KzDrGdB2XMxySNrd6rVFAZhvZqqRLWZgtkqFXA1z8r8Faaig6ZSLAXrj6QbTcsSwnoetVenZYh12BrrZxCjzhr",
  "key13": "3x4TUb5o3ABztgAXxzxxwkUwEJPbPsbuxSXJKxtmBos4pcPrGZeAH6Pr71uhnRu3sGCaNdwiph9Vpnj4jDuJ6aGa",
  "key14": "9USoQH6EDnYNdCQtYZYpxmYvje3J6SLjBNddJryLUke6RHhZQLg5UxT1VFQR1T4PXFRiksWZKGr62zNDX6Bh1L6",
  "key15": "3Sd6Kj13ju5XvG3fCeKaeDVyYsavviL4YXDRDsWwhMs6jAT3eRaMLzJNVFHBys3MPiXyinsCmVrts2D5P2zHokfY",
  "key16": "4eJHTrNS3sEgGUmNQnLJafENLChLiV2W2sWAynbgrpKZYiqj3yGVxG3N9tti8rZDbyw7XxmBiKRweEBwQwgTrc4Q",
  "key17": "sY1R566wtPY6DEoETty9KbzofXnrc8PSScJEApbawDX27Ut6H5sjr4axuuWL1opwvEXpyF1fmf4QXv6Yi1pbiA9",
  "key18": "3VtNRxBFiidSKGF1t53cPSHSCjhM9VjzxKFJU3uYX7LcYDA5G43vddr7oKXtVzYmGnA2Pbzj21XQWrNnp55V3iND",
  "key19": "3SETK3bV6R1TguRuYV5FpRCwwKwoCMWTNXN2cZKtgnbSDRy2CPbsXQYpfPNmGqgnQDjPrvicQ6ySi3nePzNRs2cA",
  "key20": "2fJN78BSNFJg1Zvj7tqvKsDksSeCGAHDL5mvv4q43TxKGFsMLNkbEQaExN6gBSYuRQyro7JTJsnhJoLPob7Yghjs",
  "key21": "4nB7kEXcaaiJx49iQYgr11CzcNgSwR1EMXSKtA7xdjzFQzTBzjSTZfLmNRrLdLo7i7JCEanvpJE2kFtrFYnQFs6G",
  "key22": "4EHogrmsDwVozXkUNkMJAhptGvVjaZFQT6NxFa2UjHyHa1wD2E4ycqaNcBssqe4ZohBhR9RGNCw854yHE8W8nTDS",
  "key23": "dduXqcshRtBMNQ17AhynW8Fs8wNSRJXXukVq1biNTEJVXydZsaZ5KjGYhY3M5f8kX6Acb3FewNZXMu2XKy9aF7o",
  "key24": "23FKy77Dnx31fNhXQsN79zLSDCtS1y7HKhb7TrqCgon9XnjexV7Y3BP7vXK1SX1cnQdouhZPfVDKPH2eEbWbGJe1",
  "key25": "2qEYwzQfaWwYxuo6ZhHPa6eZjWnP4J8W83BrbwPqpsPkudN76zcKj51LbVVQysY7yF3tiapQbFQ1cjgAFevAsF2s",
  "key26": "4NqLAi5q4FFH9YZmuLmf24FmtsaFoZFYTRHaRr4kBHeYzbvfCRWBmprJMCCnXQjuFCE8KWofdr97CkbyLEoBiSCW",
  "key27": "5QRBVHP53EBVfVEWQpGnyWKR8nFyVSek1D9cagzpKdDayXCfzsjZFa86SE9fcEgiLmcDRFi2HmpYUKG7SpVE2Ucz",
  "key28": "2YR7EW2m7WJYXNnwmbvJ5BTv2zJ9KSn3VSBQY2MA6VLN6ceNQgCrnRDhwM7Gk1RGnKvS4n23Kv8toHcTbqtHCMpe",
  "key29": "2ET47f5hqHbHpt8PPkMdRMw8vDphKmZWXBsBdntWp3xWZFDtFepJbCKbWisD2FMghFWXWca4WWpTvs3rPwY1N27H",
  "key30": "3mMs4mE8hLSQvpuUHQDsisCqvqsLUX2nX4VWQAhbjPak64xUkMUFJhP8yAYngRZg7qC47X6Xt3qtkynpoi3oYpkN",
  "key31": "2uRNiNfwZ4YHS2GoSugYPqv33qjTZgDJS1TTQ5pjaySQBz4jUxEqqTPaPniWA6EAXnJG9fyw5fyPm7iLk8AVEYwi",
  "key32": "5fJk3ANsYy4i2fkiMtcmbT9UvxEapordtirA8AFS3QDji1jZaqihPQev8MDKLnkrBji48piq342Jx9ZcxwERKB7d",
  "key33": "4uT8mgCw6YYGr4nuAsYBPVPxrTaYP9dkmFcEqrLEahmo4v9nY5msBkUZHBxFAQdwHJZzycsLv9fazYeATpHLZ58E",
  "key34": "4tk5rHm5QAUQ7J8KdNHtdWwuTnRcE41qt6zT5x4eu5zMCcZ7wSAAJPRLdxdbUjXEfnn1FwxNw5oJkLquGP4c5iar",
  "key35": "4mj3jaM3Yx6taWw71RaW1Sxj77CnVYC6eC9aiCTdHA76XpugQyy2xWvd3DXudqSqHXSGmGRsg9QVBffC9DsKV5q1",
  "key36": "5YkBDueWcCeqFCbbjeS3ZgAhGDrJrYbmCnhGui9wub1xJrfKSXjgLjJdiFN7BoNuK2vHnSrfXdfwMr7n4dpwRXrR",
  "key37": "351DeSBxRc2kNnHKTmGEEpNWDWStpACYaKbiXfteSJG2eYwg5tHw1tnHKQssiB37m14QmjckGTrzSt7GTNBsPwx8",
  "key38": "5JFBrMr7pM3T6mmKSVxKBZq9NyDHUjjoVqNozebvWxmdvKkS3Cw5znCwLyJiFxnGwP5VN9TWbAACQU6Zi1FX1Ynf",
  "key39": "4UpwQrLPLW57MXSzBaARTqWorAGByUVj9x1bEotzvBKeRAbwjm51xE3A2wy3bQG542Gkyg8hU6ukD6MqjNfrAffT",
  "key40": "3Zfn1YZjker3pV9wadDSMc94tpN2zKoFkLp4uk9ZRDwvtWUqVJoJL2S211Pi6TZrNsRde9dtQY8zjB6qXFaTpozG",
  "key41": "NssAuJfrN526EdxEVD1saBv9dpVrQoE4DNF4uQSSiHTd2irBfsYEmKsp5FAX251mxZaXrTgNF4MsVHPpZeEa7ok",
  "key42": "2WzXsYqDajoipzKJp8oSbNs8ZGvEd8S5EVRX8uqSXkZ1MqcWqnkq4LberkQfCn4d8qZ6DeE1Bzx9Be3gTxV7AVeV",
  "key43": "44rCSDZidEYFQU1cP1p3JE6UfrGLcjDyLo3KGXE4VS8enmH5UiqobJjK8nN4QgUg8NkoxgNVt6jcJ9XgrsjC62ag",
  "key44": "hCh5KBrqapLwXi1PURMpwRNVH9td8TNgSPzN5PhFxdYAF58yWAnthg81FXRbTCxTkzcDf5abKrJemUsYT7CGW9z",
  "key45": "2dJneqQwu3wifAspGDS1EoPd5wgr8nNKYigEeU57eZswJuMPiNviJ9tpMfGY9ys75e8tmoWANerA4yiWhAzDFKRs",
  "key46": "2n2RBcFiEut89QR5mvUrfUkt5zn1DXu89CQcQg3L17yvjuLwy4LsMiAD4s8KNzRZJeCUTRwo786n7G7JnaayGy65"
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
