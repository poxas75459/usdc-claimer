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
    "5BpeHyfMXUDmMhkqgpt9KLj4ZYmBPwAVGEpdiKZ5hJcn73LGL9gDJa7FwgbsiFyVi2yCH1YdiDqMHoe6wKFNn28o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hpzcMBEdpQ8kcSeuUNFTNoRktLPx3yXYeYfd888EuSD5pYrEe4NAcrnoF6cYb4KWnbXQMReHaBEkLCfHkKVv91U",
  "key1": "5JpWgKWLBQ7fwGpaH3k2DCFZ4ZpLTwoBLGKEHngKzsPBCSEYTRpztaZs1Pa6eP61pDCfGMctzrey9LGgAT2dEa3i",
  "key2": "2kK27t6DhWkZymFYRFHtfAMEyv3nRLdB7s6GTJwtaXKE5bqw4izAJXT74nh43ob4V13E8Uq9Lr4igyB89e5jGvqe",
  "key3": "5BCHVaqBrmMzfqgofqSJGwLojYVwd799L6RhQfwVRDKWnZj4CdZGZmwRKpf5jT7mGWgcvQtXxXMptM423LW7BF6a",
  "key4": "2HQFgZs65H9J1r2A7dMYG3fBRek3gd6LQn57RRPHxBXV2TdGb21CnLkvDQGvCfJUUDpXiXHmtQsRrWuPmrLFucMB",
  "key5": "2X2vgpSp6LH332AQ2Ln6MvNxxK95JxH4NxSVyyVhns7BP8Fr84YWkK4DeBHcUyWi8Dx1FRRTyHoTAmdPY9bd2h8q",
  "key6": "5s1gCmvZEMPVA8qpVzdWJFuts3JTYgn8FXcxncVg5PU3itS4SXiueCZRmZyzaEBCPahoud4kvYUrLHhWmEkuhb5C",
  "key7": "3GPM9JMTRgkbYAYhq9T8b82n5MwyUQbASYzhCRJe9qzStdMLZ9iDp1Uz8wDBEdAQdwrWmUJALoxRgYL9TZM1a6wX",
  "key8": "2QeD6PTin4syyxj1ViqEfKrdHvKe2hN8jCLgMdobDrNhbStzm1QUBM2xqWMkrHqxrPngNxnEWrTotdGtbZoFoWnv",
  "key9": "4dSi6yJukdxEWgv69yYg74ZN39PGbDJgMCy2YaRwdpnYH8WnTu3QExc3VRSEtfwXRqQpHfgWD5R1ftWbTx8Rzvy8",
  "key10": "2u7mp84JMJgW6uCBHUWBtcbJhGvDiXS6Pu1dF76E7hasu4cEfRq8TdHjGjBE9SQbcY83PSuLByv45kjQfubGwD5C",
  "key11": "3BTzUtruR4o7v9BkgWBEHY3Vk5Aye2hWZKN12LpS8TVSvByBjT5EQU64BbRjiJ8Qgau9W3kmQagQMHf2JwkLibVx",
  "key12": "3kjdFcT266h7a56zchQ85GBQf8U18JfxPjmkzEHpZPVJAjFFAS5WVnbwH76ayxBdK99kPdmcWXbS3sSBAd4wV99R",
  "key13": "4wasa3vQPpt2QQ6XfAKuCu8Vkqi7vLMeokZ4JMmAqBVSkJfp3pmXzXna7xUxueKCzK8FESH89mAaGtTJV8R8FQur",
  "key14": "3NKQGvWeX7Gaq9Ju6uG4QarcXLwubjxXueb8hBSahSSQjFVuudUha3A69ecf3qyUgr64xB96rgNgisuU17EdfGYr",
  "key15": "Bz12vvKmw9fq9APbLQjphQkFVzwP8e1BKzALEESMXZaBQ99QDucEaM1KhDdnWWSmWsgHcKCboD5CRVuLbkuX3gE",
  "key16": "3xX7vDjobHDYhojrsQZDxQXC6U9BKw5m7tW6o6wNtiHwvxYFHwi27MvGsexnkBq12tVSFre8dtccy9X2kvuG1tHr",
  "key17": "4jyDjQUbBJtD8pBrAssBGDkuoMA2bqb7hWszh674Q1TjTNhps75TM2jkJrruxypZFokw2yGeC8pBBbykTiuv3ogs",
  "key18": "4Xvr5qp3aEYjT2aG3sTrbJ7aMvpbSzuCW3uzBh7NCgbhwT7KDjXEW9zD3b1nDUVhbdTLaSXFCQsvqW1ybNPCLMb1",
  "key19": "4gwZxYxduVPsCEsgrmp45yNB3PGc1aY5wtAdNZdbZyD1cKL7cRLeuJTXJqCfBKHgtM2E2pdhsJzs1G6HhzcTrD6s",
  "key20": "5v7wXXMFdLAFKF1JaW3wJsZWcjciTpXqSxP6L7oYYyrx9Q8xMHfSZXuNAhckvp1qyvd65QyW4p8R1JLsse9wfEuE",
  "key21": "5zDsvcJsnvBNxcHosnbPNf8ntZNKAzt64ZowMgxQqsiZG7TacVJLL53btcpQia6bGmfTZCpTExkjqUACXW2xoPM8",
  "key22": "2EjzpB8CxSgJPxUF7DnHeG9gCTfmdoaDm9AdCnLAFhjzyTk55ZwRzUjQoGXNYY61gQ42GnAKD3Mujg537AjTU8cu",
  "key23": "3qeM3YbuU2QVPMqzA8UmLXLeveaoZKS3Mfr4rrkLntbEXguQRSXvsA2qT6x1vRZhrpxq8DkQAj8xKB6SkpPxZ3Zb",
  "key24": "5SXghqR5AyVa9kNzbDgd1nrWqmqUn9twBKWGt2QBXvsfks5VVdKtKXNzj6pvPdF53kVhZmz89h4xErwHrK49TBtf",
  "key25": "5wJFxMVPwnMA8e2UYa83uGvYaBu14qtD1J7WTHFEpkjjnhMSpJUEo8pJHmjKS77M3KeWBSnnw826mVWTVhDRfAYC",
  "key26": "4VWahe5CoBTD812c36MkEmaMHvi1kiBMdeWTHYkvPXQBdvWuxyoQ9k5sEPx5XXv5Z2KXCUG5ysWcQZZCqQrRX9cb",
  "key27": "3fnpuE2SeMXvWsyQXqySn8HmErGrbrD4CsGapKr72LZEdByrgN8Qtf9BVbSP5w5LuaE7GNUqZwsaTfiXAfbQn2ab",
  "key28": "4q6BTx6FC86nGSYhivrCHjhotRYLbSSNXppNzVfCCADnTqBaGpTAWxTRBanzeaSNo8x28BeWrTLSDJYDEoHhboto",
  "key29": "2v4dYRqT9iid9Vf3osW9aykAs2zPbcjzb5oxGHCUdL1yvP5yrBQaJtAvdgx3The1on6toJmMah8RRGhLY2RcYMht",
  "key30": "3Axp2Z5foziKAmqrc32Vyhv2tYkRs86F8JEYP1AgwCoXK4Qia83y5BuFKAbi7yg5ggCwCotSqPPH8ybSq7mdz4kd",
  "key31": "5zZep9vkVoZnS64Jz9yF6UF5g6B3hiBGDGzU4MnoKDtNAaQcb1T87AVZ2RTGwqxyaNafDy2nqZyPGqDb9gpDd3Mr",
  "key32": "MfkUWTjguA15Bvm9mZvrQN4mBCb2n7MBWEDwuADVm2yN8iWKEXvTwnrhtt1uMB6FKU96HW8LGtrn9JLcXvTFNAE",
  "key33": "4V3hsapdZSKiXJsJCyhJ3oZaXmMvK2ptGvSSnaGnUF6sbpPkDBRgJUxBMktLXXkK9Rq2FeDPQPmsEjB3PZYh83Na",
  "key34": "JjbtWdNb4cuYGvh5da5n2WFRTQZSkMATJJsArV7sSm7LKuecJivY1k7Nhj34LdUcBzEsRtWcC6FvEQ1zBNCeqbo",
  "key35": "4GhYQX5yUyvgLs5YwTJwvv7uy3fTsWttLo1hVJSuhZ2TVaYtTNDZn2tqEZRYWPeCyictiJAw2RSgf24VownTDvQh",
  "key36": "eBuSJfhv6Dsq68f9GJY3hDuyHvP2uq69zmJTPjSuBPLP3gnxe6YY9JseHai6MgE8nFKd3bA7tMhcmMrUFwJFviM",
  "key37": "2rpnoCdivp44JUdD35ubSJ69C7S6oXJ5hNv9wLmkKFEe9LXqxJsDJb5tR5M5cKwSLyBzLC7CPJ5RYuoDTnuTGmWy",
  "key38": "5XosyjHntaLMZ35s16hwQnSG4REgAPsYix9wewZ4LTiRsprRGv5Pohu5JhwMwRoQqvPyEi7Hv9NgCCCwMXY6WLbo",
  "key39": "4Xe11xiz1PuYjSavnDW5jw4WoQSk3kCZVw9G94zX7TmPTq1KNzET2AGHNogAwjL9jJh2GsNice4LnZPHp3W7pfxy",
  "key40": "GjPThGby5SLZzT7Gziqfpdg88n5kLC5k4PARByDo9XJTLYVgMC3rXZavF5U7fqKYmsK5reDAq1CGPESko2qQV1w",
  "key41": "4ffZTDDwrtUCcBbJa7vzC7fScqXKjd9zEDjVSydPmEQaWQkd672jbtAuKUtKJeS4qkayXpWrYeHeTdjBedLFz9Hh",
  "key42": "3va3ecNGVdvo8nxywDC2i6PtzLHzDQpjLZffkPqABt8MMSRNu9xqrfzEscehuZKj9WXr24RHfoUErPqrwBuxMPrv",
  "key43": "2A1UpPrAxvTAhsGjHnQvmNQTD3mv1QpxwGgA2rjmvGrdUQsvJuMgbPeNsBgwRxENDABe87NNBn9ifQ8JW1uqXEkk",
  "key44": "4tXaVZeMdFD3CnvBzA3U43cNWBieyo9y4PShsDg95T9LrxuBt1piNkX6ftWY5hSJxZKaPV5KyhSYcvB4sg8TF39Y",
  "key45": "4Xe5xLLqCYvGHwH9iJbr7hZ7xct9w41Zh2pJQ6Ku4oJHmAsfkVUvqfXNN4ZBgvjVgedwoWbr8sqnyYJp3ewd4RBv",
  "key46": "3N6CQEcz3bzJsQ9cz4DauNZ4jG3YRETZWN4YHeE4jdBuCW1kL4hQfqdchaZRhWrNEVaCh3ucRCJVoYGeVuK3fV8V"
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
