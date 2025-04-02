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
    "9NxxTR3VF3VMiCyBVE3sE39YNg3qrNYRuTiLroy3MRFL6AcTPRBG2QudgA8bGBRM7PEHV6wLBSfHAUTRiRDfuid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XaR7U9V997g9yhbe41MnLXU2H4BmTwjxsui48boZZw33c3CFgnStx6dNgnGerP1hGJuDsC9ZFmtGgcstRCw49Fh",
  "key1": "4zKKwy5b6EBEjwuPjBZRaMc1uYpEmfsVrShPkqbWiU7e8E45Vk6sJCtmX9LqVk7W6TRUFhSUKxRx1kStxra4WBFf",
  "key2": "4Dz3SD9sQ6hQ8oJnzyT73JbHCiYg7ZLv9H7sP9rrYPjyRvNEeiSjzSHTyniHLhdNWpadrd2RVxMdeousPiKDfH2f",
  "key3": "3aWQ4fX7whHpe5cETXoGFW5rdgFijb3PVmQ6pbMgXG4wvNvqEZALzjcwgGayN8a5HWZSUCJ3GpgsN2uujoVjE3tj",
  "key4": "3Zk3W7AtFfZNCS96mFAkedzs31F2XTH5qDLAGqFnEz9ZEkbzwuf61v4CYc5X7e37eSycsKr8yXbQWsSYrDEPrfus",
  "key5": "38cVBaEHXoB8S1QA9mmU293L8pDaKnJ56G7FH1SktZVWpZsd8PfTEFAu8j41sKXzuobmtaowNEBti1HDN8HEeYXa",
  "key6": "PoRnLT1r8C6ouUGX6eZkGiisKvozhpKUrkEG9ehuyvTDu2vVdc5bHx24v7AuEAssYuo5RhWv5Dxda8Y456DcJcc",
  "key7": "5CKrXGqdCReQQo9aVRsoL66htWFPMtsiqYC9hVJx5sRDardHGVQf43GtYWFUoUvdB658WZ3YJGcg246rLq5ZyVvz",
  "key8": "1bn1Dhu4ZeFGreJqdABix7KzgteFxEjMXFC69frcRtghWo7M98doN6M5FvPNkQcnBHKRwJyaKaSnHYPSTs47RZS",
  "key9": "nSN6NENiQCRmdpY7kMeLoc7gNCJPL3Efqn9YE7cVxVJhb81fS6wAHSwU2BTrn8ejJBdNm5ZLKqS6c62mP6egzHq",
  "key10": "5nBkiA2gGCmkWbqbkg7uk3pm1Rn8P3ANWb5xJLi9zrNChcney9rB9Tz3YJk6fzq8Ygf1RdtVsTj5wzP2hX6GryVn",
  "key11": "1z34C8vuzn3fgqkseHEVvndfK9UcqTMJ3XGgCBDi4Cdh9ZuWsDq5ekHtf5RoeqK84YTEV28dnJDQxyD7LtrysPV",
  "key12": "4rptwhD24rXZcSosDnRHN5CPZkXCHMdqN5DR2RcRQMx1HirPEJsxQeABJehdrQ27qKu9NSvjNLtbkLYAjdYZdvqr",
  "key13": "5W4nGxKRunQEvYj2swJXwQXhJJUW7V2FrCDNvtiUgWaph37LVE4z64vRs1rUvyF7fR5uWRSpRp72MtTSaB9amTP7",
  "key14": "5E4SkZtmiEcu5peSiJWG9LXP3jvw4qfJv8kaX5Ss6fjz36waPRNFgzED1seJNuSzHzzC8yxBPRycRsovZ6Ex73FS",
  "key15": "2TH6zMVeKLSuYWXw2VtLmpzMPgnEV8wFfurnM59rTssSpREfNJnCjKNzy7pRTzsCsEMXnYvGZk2b4tN1UHt9Jy8N",
  "key16": "4YGNPfedvgchwpMcgWHYDJfMzanBgEAjiZzZJw5BxdpTZhHrKHS9ko3xUaZW3BNFt4KrQFCBXPucAWhrGQwAvpDQ",
  "key17": "rDXpbwihn6ct9A4d5fbq3NtZ9yPvFkiLhXXBUrq5tc5YamZz5EnaL6oar2n8GQJnUztjrCEBtDPy4hbSPYUqYFQ",
  "key18": "dFkrQrXb3TsQnnvPWb6qgTk8yP9YR44mH82DJeE1hgGMVGLbSujQ2Cq9NC3GU53pcqFKR3kKzrzGntRjACYLiHs",
  "key19": "4UoLH43CCY47w8CY8kHcCwbDTvqZeEqSmSYgjEhosE83zi1VyhASTBnUc61o4CvhAQRKA6p8YT4m194zvpbrgaF1",
  "key20": "6xyP2NWaciGH3aVTvPeS8JFznAqTgjXVDyDBUkdq6ZDzg28p8K5fnF45B1dpoCNC5qysJPEB76KEo5J3qJyHRMG",
  "key21": "2hq9Fur9iENaYZqmcKvimYQ3bKM7AiAzzkKsTxyVoid9BdjVE8UxX2SLTptjsu42iB6oySeUw32dZGP9Tmp9XmXS",
  "key22": "3XSgVVfocwwTbmzCCuzyzPWz6NNkX1ekVse2KiWp4wKonhAtSNHexuDAhmUrMznmFHu9ieNyjs1MmWvCyigeQyh8",
  "key23": "5Yryyc8qAR8cAFe4NVGx97a21AcMWu9N8iPpaVErEZy81qnxtm7hBoSCsozTB5besQ1EJLNQHVndj6Rjfi3MLvGs",
  "key24": "nJnG3a6gwyC3WPTy2FuGPiWd54DKnFn1urRYRYSBN3vdb5FLPA17D72DSUBJ7FVwvWCYBZ9d5CrgoHqhWofn8ku",
  "key25": "3RTiuu3Jn6vaUr3LHdP2MncXBUyTEetCL32V4HdwBp7kpaYKNnKukTrMW4u64un2asTmL4sWV7CAzQRppPkW7xQJ",
  "key26": "4pv6YTFrcnrFMdsi9a1DJAx6gW8sLGyEkHDPHAUKueVWxnZd2gjJ2fvUdM6DubBbdNWtNQWPeRAckhGQ9Cumo77y",
  "key27": "29N2h864iBp4Vsw99hixPps5yTHA2ZhsdXcpC7CXmgTwxZmFzTWQ2QERpW619UE8DHHheGxy1vAuYLMXeKLBacQQ",
  "key28": "5QXDKo3fteysfq2kjHY7WAcPnotQ1ocWXkgGb5i7cT2DgTicPaq1iZwZCfmLwVJaLDZHbXrSdpHpVBe6FHWLafyy",
  "key29": "3rqoCWPoRYjGoXhoTUTyS9yRU8STqqupn7K5NkkDJ3PQ2RK8FFbh9m9qQqWjEPZAytL7Pc9vv3AeFHhC5rP6htan",
  "key30": "2EXCup8LN8PVw1G7KxXMFxc5z5wcY6tysbzhCzh7ZShwyZKW2y57dbtWXDYNynMb393gb7NvULML5X7qdRVMM7Wx",
  "key31": "4cKMYtwFVcCftLcpQGTr2psPqNjZErXMZ79X39qLTJXdZnY7q4iui5aC4d5eQs7LiAzbHt6LcQ5JLqcz5AMGK2hr",
  "key32": "4ykMqitEkzbnUTP7qghfXE9NPRbMnGVUfA9exgbGDrPuNonTsyKAvdhRyugCt2ivSFo2XVMv5CgRG4DqxP1ric4B",
  "key33": "5rU5uHXk4RoxFEosrmG7TnJQTSBeqykKnPK4mxh9bHJfxgds7L84cFqLQLPNUSZMsS4bzdkTBFa4yVMgCBWb8yJW",
  "key34": "3fBXVwxn6ZGuhaDPGXC6mtgZs8BV2BCVyoRmEbV6oSvdg1gLZ8aXhqoFauSkYF7iqU9Du15SUnHRCtnrta62Q9MF",
  "key35": "NCowJ8CngRurQmSA4ox2tkCgHYzi6HXT7sqMnjaqnJRzqTQTFyGEeYv7xc29KfcF42YK9KiDBaswZSKwc8N85re",
  "key36": "5AvPWue4X8QTFwSnXCZo6Wp7juc3jRTrQYNkGcvQcBRuxBiQKXt5vMB26NVjm1bsEMjtFSwotb72gsWdhYtqTXNx"
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
