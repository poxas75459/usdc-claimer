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
    "5t5egYY3Xpf1qwJZCTw8UaWtFBbJdjhvavEXNBbjMtSLDesEWZVRWesbKRxuK6jy3N2oJ2GzyamCjmJL7qDVpmnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ucRgZ2VKmUg5A7W3BkZQ4ZspjECfsMQuokPyeiUhWZCV22q5tLboBS1As94tiHWvemLAbXiagJJKrRsWoXGKhxb",
  "key1": "3uw7C4UzNHGW6hWqfnvH5NZGGknhx36kHo34w4EtzC3G6Kqh8MNrdU4NZa21cp9PasLZpVQU1ximmJAJYGBe2ZuJ",
  "key2": "4sAwzufmESXQFqJo8jHoJXLRRLzycDFndrHud6rT4qad2foaXdRXp11tBmbapN5DWeJ27CUsbZDhJQw1uZdjr1me",
  "key3": "4UFdHV9JNuwt1CxqHpH5LY5EQ8mYm8BUXMCXvQtDhhAVszCy2j7kaUsFRBJwsDx1c8ogPvKzHNoTZbgnZKZTycjo",
  "key4": "Xe1BsYutTbuVtGaGxT3QupmVWk8QrTDJeAMY6z415DktwXV48cAQxdQonL5orWhe4sCDUtau7y9m4u69BS5bJwG",
  "key5": "4Hc8ubnD8ZQc21vByXXevVv8EJaNnXQwxpxBKYse9WxWNfFCfLwDGX6roYFgT7XwBi56kjyTbDMKakTBs8ArBeUk",
  "key6": "PqUcwtUGoQdBgLgP2No1h8MTv3HaUA9rCQ2uaJHtst98BHo3WnWuz4djFL6YAoJ645KPYJLGy987haiM1MWGWXz",
  "key7": "t93hnGG5Jqog4H3yEHizRkonvF1DZQNNFYv57phRLQgjGc7er8uzWHzCNShYPS3Mb7g7gzXahyG7zEeGLXbYxDq",
  "key8": "mTeUGVnmrQnnzP8sWC7fYnJ74KcGEZqhQThKEBXoFw4nPQnRKKjkVMVFUK1XKLmMzXUPXX7bJbiHXxF4r7j5bc1",
  "key9": "4Q7XHgSm4ggo2at11Cd81RpuNdgu5UnfViJKVkdtP7i1SqFNeDqJYzkjCy8vEFC3eyKC6m5qeWHLe33H3YjQxQNd",
  "key10": "eCUzEnkvNz1bDzzXnPKAQ1KEV8QZ7GNwWkPXQZVBMEDyBrJvhFdy66kcpKej5sJmMY584LmySkWjbyFzouuumNu",
  "key11": "54fg5gMMAn63QytCiy71ATyxtvLJttd7PF59xmnindox8FAYWYyRjkzy8bLQ6sgcGSM5F1t96h1UaXwCwWut6JMM",
  "key12": "2PfcHsifoJzDvpjRfDNPGgjuni99BCbcYqdVheqFK2d67Df5F7BgjG6iZ4BCct91Bqq56Jsycfq4RAbyaRj6jRgE",
  "key13": "4M4RiqqPqPFk5ZoxjVDCPvKJ3ijK1XNu8HY9QrNA8avvEz87ojtkiwAJf6GWupF2Bm9th1Eohz2GNiKkSMWE5ox7",
  "key14": "AJjXWFTCf1XR9EyPk5FzrN8GcVCYNTuD8X68anoQ9raS63egykBQPpdkZ2zVqUDZRg2x3hJZja7cYhEuh1u298T",
  "key15": "5Tg743KDhEoHGQqffDmCdE2HhHtPFP4mwMpzpDpurbNUhDKW3oa341UzHnjoshdv3G83DK8fUB782RX4hzFvKHX7",
  "key16": "3aPJSWBHaLPb9ECqkgmvPVTN2xWDtUYWj2hN6zyNnRDk6aBWdfULEh1oXaMZRL9yPE7nRQEmWFfVZiTyF1NjMPih",
  "key17": "uxJsTL1CL6FcPr55iLSoH8fZuGCGpSov6WUowWoYrbtFeC7g1YHq5xM3qcVDsyzxy2o4krUzxinbCFcwr6DkwUR",
  "key18": "2o8V5gR4GPxoqNqUMGQLW6EihAUX3Qs7Rpky8y8UvduRCu7jAe7aUhcGR26TM3qxppnDst2DY7nBYMmjXaXGiVWq",
  "key19": "FoBqtR6FtaR7v2UtQxfUQmbEhxSZrcyoi1rLfbXeFHYF8FP9a17quzr7PnCU44rKTacopUpRbbStYkdcw31wDvj",
  "key20": "2nZAdCYpHYR4onvnPcCzkU5NQn29XKWhe7drHGjysQJcAdt7uC89zuiVkCGvRzRmDJJPkDeUWxnwFhX6sBJi7jgJ",
  "key21": "WJcTQ5rPLjBeEoMNjkKN6cU2a292eJRbzyCgGetS5YvQxt7w45oVvJdRQLkAGiRpi9PpVXuRdfdZwEByowABbDN",
  "key22": "4uewC8wha6bQMniguSAtJNZG4XsUxSM63jtw6NRqiKtjsq91CXj1LsU4hU2mz7XrrUMgtH1BFrBSMAiRLKuFGQvR",
  "key23": "47q1MjiF8FF6xkWfUZQVPFtEoxinHJQmKtUewECBDdRBAGihDBoE31x6Btev1qA8wPcj3YxL8tBBDAcvDe5Q7FjX",
  "key24": "4jfSoTm6ihoniMAA5MuvzoWFNkcVrTUJ92gvgZ4MfRyZ5QyeX4h7Vsyrpxne367kdokfFtKCZtZk9F65CMmwyMXi",
  "key25": "2vK4GKnmgWKWEUX2jXDVsiKWzTkwzK95cSuPjHe1BF8QWyWzVroHLMTJNa6KhVKGFGdoZ9nDRv5dmvnRBVKZP7j8",
  "key26": "3cDpCoMWruwguaQ8Qrka8wo3Hsm6KMofYw3wHp4jLUwdext3ieXyG4Q3W1FQVrzzavF7bQYByfuEYAXfR2z6uEXw",
  "key27": "2pgbyfhyxUfbP8WR8caGyMPbENWhcW2SEA4XmUZct7t7rR3n4FMT36qFF6GwY7U3sz87D5RVVfp43aFytkq5JD7B",
  "key28": "4rR4zMGrtcGxr7KSBhhmSZ9xfqMt87da2arpeKqowiejueTLAQtXoNHiRGZdu5Y6TRuRFAY19FXQ1FtwyzasVa9k",
  "key29": "3p3De6LhD4Ppc4GbPamaWCaFas8XxtJkGBceSD3rs3syYV1ZZsw4j2XTfU7onh4cNGT3MUw7t2dQ78jWbfBcJQ2k",
  "key30": "4WisNK1eJ4ezxb5mSY3FPhrMLpLzhBnNee2ZMHdED2dxmkMNNstHYGfmc3W4UtVENgMXDgeg3vtAZ7MVetvFMj5w",
  "key31": "2kkDRVNgBD66zanJHF9FVdBNonooJJ42ruoskgroVcp6dVQ6nEu96RVjAsZpmz6uyWNwyN17w1USwnXQg9Su6qmy",
  "key32": "KEKnTjAC4GvJcf2QJd2R487NrHJwVXfhs2fVAsoLthptceqP3ZjMHVK1SFauAvms9Q9NjhoayDnGtby6T6m4L1g",
  "key33": "2eJtk61UKhZYWPwpZNZcuEpBN9oiJfLrsAeUovxKCH6pZAQbCbCQdSMEzos4h9rtuLcy56MR4yVqqMMR6T6kG438",
  "key34": "46Vf21V4XNfLnsL1EBntsMUW66ujoh5TuK9Sg9gh8VMPS2tAohp7uZF2gRyS7sZdH75g9gp9MKGxvgd2w2TqMDGc",
  "key35": "3JReDNPauboZokamTKk4hCMhcRUY25R5UVdcfSYHVG13bk7uf43S4kTmQJ6nTyJyNWmA55sPB1sQErU8LbJmTQPh",
  "key36": "3voHGdhRpMqAaRRAYF8uvmocxCnnVPN4McgYDxKatLz1YtPAZLre345dLQKk5NDg8e22HDpDobXkJdbi3duhNrLB",
  "key37": "5H7gK3TiXcM7onmLzvW2dfSxJ98b3SGMnfaucUJzXvLJmU1H2mzXPzSmGaMttPQqgwd6mkUK2bdHyjPLkecmCp8p",
  "key38": "4UVjDUWER4GugRvxoca8uS36ixSumsnrCzSTFL4qcdgoPjuJgXfgEf9GGEihWXfcxAqJhfzGdmwAoeCRYAb55DuJ",
  "key39": "4deEo7zoftEwQoj8Wx24DB7TcuNuSVWnKJZku3iwo4E3RzmNLouGLKvAZLsHrXUCPeWvNV6jhcDWZzGEwr9q7MGZ",
  "key40": "4tzczaFmmMbGc3TBStmsQj6MdAsCZDwPJW16HpDjYsfZ2R6Tfdk6BF3pZoxXUt3GwT1fWBgRT8DdSeHdni5C4q3x",
  "key41": "2Apk3p9XZxG7NdQbRYS7jjxRsuc1TExPhTQSAXFs6Ek2RzpVgvkDqseMLoaS9CqD8RH38NLyLUQQ7ynNBtYAVY1Y",
  "key42": "v5xDNpAXWAq8ykmhC8ri5kLgK9aYGd4zCzDU4rBojwSP8FFz6Rv7W8LPacwVdNVWhbZobFWUJJ9SSxw9FzZdjno"
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
