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
    "5qnQ7WVufEW2U3LcPiyBiFoGjntstR6haBzrSQkpvFpFvh1xEsmx4zegXWnuU2Yf3o4mSCz6QuvYWbowMo4ytLRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qB6ARqWReTg65dNy9iaGMMAzEKLHHeccAq3cJUzeaUBMoDe7gxtWhLVGu8GYKFLw4vuf38jfYuxJr6kMqYzueM7",
  "key1": "5QVbqUnVzkET4yuQKy3VpLQTrMVDGEWnSVDKuap9eBqu5ucuUuUhEtiPWzV6am6o8jBE97YWDXevmwYchpA11Xta",
  "key2": "54XtHteXdQdtgB5BXfT6yuVZjwev7NKJr1kkk3desxm8M3qBNWApEy7jZHkwuqisxAQhBUEBZ9hNgzzQLywHLgLq",
  "key3": "h98Q8E1s5eiibvjT64eBVFvkMNvdj7ccCzFw1PgDKF1CKCdc13yr2CdQh8ZAeHZNqrmKdiLQYZnMfENTAqHHxvz",
  "key4": "net9DAySBgD3A9mHZJyqp2FAjgJzMWk6jLJeiXTU4vkWrnmZg7DVEEb7ExjuAVAceWsZdNw5TQcB39QNnYyjsi8",
  "key5": "i1UGvBh4mVsNtDqjUX1yCJ58YrbAnxm13eAiQ3a3C1r6HNBe7NNjvsYGfyyPMht6wwMncECE7uADrYsifp7WKQz",
  "key6": "NvkPeEsiwEC3jietByHobkqi4FT23dwy3p7dHVj2GjDHE8c4tQam2Vp8VpfGh8gSGmNR5FJVY3uVmxG78YFCmpL",
  "key7": "AsHwArxVuPEiFPoUK27PAW6Ft3zgMxkwnnRQ7HddtXjTNE8DbTXnhjJUgZzqT67WbsBFocnEo7StfNG43sd7Z2H",
  "key8": "3mmdXZhMRnmjKpG2TR5K5sKXG16acQx56E3KBXdXVVmy6qqQKt8GeCzNBkGYMPC5YDy7yQuHMZPdMoAGQ4MMP7L8",
  "key9": "36bmxGdZaBkHh9fBJSnbiJRFjXErAXzAqYUQS6Rkak854bHQYsgrLTiy8xjskM3ieTMerqW2mg6dKS2y24grThr3",
  "key10": "2uY98uuzv3Gc2kBWZhGMxieKnjS4NGui5oErZX7JViwKoiyLmDRcf1hamiSVxGxBtuq3eLsTrFdsqJatMQKo4XJ3",
  "key11": "fgP7SCfaghU2eoMt4b1Xwi6YtzLbJmpkAgJZNAtR1EH5E6iSKdqb5TfaNajf5bwS2WzkVYPPdDqRUokYDd3UmpG",
  "key12": "5ENoXxaUbH38wRFTjPqiGwChp7iWGzJG1VsbVQ3iaMga3y4JjFRJrjWYtGsW2LNXKWxXJjSSSTiHwPQgoDMeR2qg",
  "key13": "5bYfnd3iYBVdXoP98xyNqifAFPy28w2ghBJJ5JNDxAZe7D6c9yEC4aav57pwNyGR5BrNP8X3qjn7zDRsFZGhmQoJ",
  "key14": "9ojLbcowGoqsFjqZFmDFM6x54tRpfPGnf96hJ2qRCY7janqfdJusEU1hgNTw59k9WPdLnsw3ufsNhKTUC6xA8hg",
  "key15": "ZTbspWMTZeCxc5w9b2ycxkJKfnXDiBnMYKBJ9bFnusZcpPEhd7AMDPpiyQXRvwtKoHzAMbn8YhdBgg139KHmJGL",
  "key16": "43Mrg8uwDetW7EYt2cjgqReWPpYa7xbTezzbo7fYyZok4XQbopTi9aDMDhtrAYkogstv8hajNXPPR8LqsqUcUVCq",
  "key17": "3iYVy6VPgDtAQAwUDQWpbkywMoD34HZkBj1csq6pe97zdfxTtoVXzTY8Xt66tazj9TNVfr4wZyqYPE5KX6sNBzQw",
  "key18": "4GF6FQ244FM3ei4UrmLDVdMQrcmB3fa2D7dbQ7M3VryxZo7379UJrB66ZFrvRF4cDgfwrTVdZoucrXbptx6tM45s",
  "key19": "5WT6vpy2qaqe4SGXuR1YcjJ71BjP64KSefYv7i2GYRac8WFeAxoJRcAmSuxeaZ36zHms5htzMpAPP6MxwvG8QTXF",
  "key20": "25BtVpH3rDM91GjmWjTG9Ygd81GAesDmf2tmH3wDfcRY3LW8GbcjH1DdjpTsQpdpSJyy94AfWMiSAPV3tnxrvrUu",
  "key21": "2wDB5D372o32P76ZyzVixGeZo5XLVtH1rdiowkCFDzR1xYcDYCNsAaNRNvxnBWyY27Vp39je2znjia6d6NGUTmSp",
  "key22": "47etUjNi7vtw5LBVhsHsr7Bq9uBaRbsTAxK9HmQBQwacu6sXEmv3k6BWzgp698epr9E7qPTS4st2vaBf3NoFZF4d",
  "key23": "1gGa53AnUVfPq1imKqS9XKw69SNgUePYhPNSUMEFVNdHbjve4K7Exps4hj1jr1wBL8hFAkghfY3ncoxyxnwQrLV",
  "key24": "37ohBm8Pn1XaJ1wCZYQWRex1cgR4TdQd2fuwEcJoXPasX2tj1wQvXcjqSpMmp4SYv98oK3Zs9eQkyEFt6bFCStdF",
  "key25": "YtK4hRTRWtWkYt7QyeeqoF38JomX1orKtAvrgcj6ssYJHH512sWqwKoKayjtLFADdxaS57ZTu2XaZxn62gFhQFH",
  "key26": "58wKL3mTt6tfXmKWmamKV4aj6i2WSNWGWCfsZdGpTkmHGGVtvwwHkNEUPhKmZ3DKBd9ebGi6PziWdWbQhJJxCQic",
  "key27": "4jSSAKT47mdfrP7yiju6Hxrp9P77bpEjdjfY7MdF9goETQjT9NYn2bTjTfjN5S4UTSUXbjTcikT59XR2irKMFPfk",
  "key28": "3YPUeWo9bc972jTXAp64p43UD4bAcgr7TiHrpMj6BWyKMy2ET8KqPpzEuh7MaPcGqJvgQfdxzynt34aj7jNM4nmH",
  "key29": "4B6A5Nj5p9sx37Uchrwfz4Cn1iF7Ti6yYShKtRFgqzB761iX15bQkzqAtwF1dms6bdY9t8k8T9j1oAZ5Lg5KD9gJ",
  "key30": "viiMri4A6uMfwLnkY8RhqfWm793SLtcAvj5s12JGEW3mHHiSDcnWNQuoaok9yZDNf49sygymxEV6Awsz2S72pXp",
  "key31": "dUkjzEjxvGNF2pXCFRWWV6RjMKLbA9zXv9M8t2xZ7BHTwCiUwaEkSevrNM395StjdrWRm47KNcKXa4NpBJwQEdC",
  "key32": "48wYxt4QT31da9God5LtN96upQZMgh9Vdro6GoWoW1A8QAJLD7bTBryYWG5wxU7psqWWKZjdxzz49Vb945jYAUD4",
  "key33": "4deLXaM7WHy7qJn3J1VSE7efUd7F91YGpyENomDYETNAuH1uqJRD3WcUd5ZUZtZZQgwSzE6Ly5WnbxtNCGqXe5sK",
  "key34": "48wW1Y7JXVNFtqo3X3m4YmgzvNCK59UaBEQXMnYCD3cYzBsgufPipJLh9raJpfezwYZ6FtCxYXBMrMjAb6CiSrEH",
  "key35": "62usFgAdSAcRGxDY9BgL2zSadEg7n2acuL2FSjzngdRA5KSgQQp3fZTUf2mVCK3vcvjo72D3PeEDQtoikmCRLbMT",
  "key36": "5qnZHHA3GbBQCD4einqm8ZYj7oDYrvd1hzVD28faSPMeXrgPS86hUTMMqA7K6tJvRjGHYHG7BcxSdCUgy5RXLhz7",
  "key37": "4XcAuyHYoUnE4RKo7FPuFpXS1WPDEHERqVkUN85gqG8fBhUDWSF3WaBme6pZY6UYbpg7bnwyp5xCA4cApCFXWmUc",
  "key38": "62WtH3KFp76FDgqjywPVQqWbLPziDA5DhqhsKrQHhyq8fB3dHw6zWgfw5CymKJbaoZHf4fr6vW9WpPBZec7cN2Pt",
  "key39": "5d31rYa88c8u1pm1uD4ToY79Zyu5WpDgSkMAgy4T1GYBNaV66MuBiwG4faL3iwHubX2eJxAmso6bWDyTd28dYKxd",
  "key40": "5yPZhYavpQJb2cgGhJK2NYQVqc8b1tqZeMsQy4m4GtRrcu8yTj7dgvTFD9CpmFqC4A58iNourZKKB1sspYMHiNoZ",
  "key41": "5zZJKbgD3zqrRMmktWtfS4784KY515fgQPHh2YGQVRe13BVvztz9TuN89Kv1LquLQj7oU77oqnH99RrJADEP5Mjg",
  "key42": "3eic8pv8WM3NmL9NS3ay2aJaUoFM9s5zDQMpdCT4m1rTZVggpUHzkoRzSMCntpL1RjAUNK1Avdx9ypTJXxeUmZbL",
  "key43": "2MEwLU57EHZDYhaTKJ1c6eoZmcjudpCNm7GvY3UYYR2nqEsFvKtpjSqwTnCdBpyj1XGbWjrnEj9vgudHeLpRxS2Q",
  "key44": "3SxGZS4xgroQaRumGPSTa7UkrwPkpn8E2m3pQKq3EL9HGniyrypRgJUjfLAQw5rivD7ecEGDFXUjQFWYkBRNx2cV",
  "key45": "4y44JHkAWYWLdaLAMNy2Quj7nk8vK2aqJeB72hFYbx7iwQHzxj2zVARzXpwWMcpFdRer39eFaK7sPuEB4Ho1NTJy",
  "key46": "5mL4cAnd85NwVU2eJHPXbPCQ3ZFZbdQLnJ4rDo9Ax3cCmqt2oiX4yE1XRApMt7BKtCfpaKsEDMJzNK7JekXdXpDJ",
  "key47": "386wi4qakeMsJbusstLgG5xuURrgLzYKAvcV3phFYkstDCnJmGUTGXBbFcz9X9ZFW5PtZquTj4QVBpf5v1HUgbuu"
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
