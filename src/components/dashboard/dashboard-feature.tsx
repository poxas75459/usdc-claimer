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
    "22PQ4MATyZNWWmNmjo6wZF2gGskMULpTGJpNp7audjgfmz7XKefW3zCXbh4ReKtgPB31dh8yYTeC7BbTNSniFJRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hZBZSrrsg3pMdeEJqRmozuiwZDZK3zbRJE1kn4vYtSiRNYLTFjA6M8iTVzhLcXHgg55vkZgAZuLhz7NCemrQEZp",
  "key1": "2Wg6BTzVNSM3iaE8R3zzECMu9F628kT7aNbSfY7ghgfaTEZhGxguNDWJE693C6Pm9pzcsSqNL1gjMDfLvzofhHkj",
  "key2": "4DfWNPFzXFeYDwX6XfVcwmAAYx7EeNcT2EzWuCaQBUrXmiAr9CAyVeeYtg3fiktrxPAspkiiWnUVX5A23TdgrhGA",
  "key3": "36xWoYgUNWGHpKuU4uuQoNsmMg85GRyPUjMs715QX2uNp39Jro8xKh8Y5BUM7Sy2CDPHgiEuSyWj9PCdC2wGZ4MW",
  "key4": "5WkKuQntkKeGZU9p552ftWzYtS6sCitVkRbcDTZetdiqrkSFMnhcUv9kuyZ3KCGNMBpepSVBtFSGZ1bfW8oL73uq",
  "key5": "JQzrzesPbmixh16p72vPTr25AyyP2pn63fuh1Dp16pVevMPtXiR9tpr2tKQAzuJUbUo8mAgCXVS5HEoPCZc5L1h",
  "key6": "4crqrY19LUTSZvGEqwxEEvXv9BmWppLRVsp4qnA46YuSFazQeqoDQJnU5DzEqQVFHZBNShxNjWQJmG1yR1vWhoh9",
  "key7": "43kRDEaBcdukaUjmbk8LLzGSALNw63Wg2z6S3T8rZVpkHfB2dQWtvAWgKyV3oUJoaMu9svtTHSSiydtZkxkkiVU2",
  "key8": "5fRcfx3aCVtiVHFmQ66WVmnR9bPbqgQy9EhmQ7vZsRv2mShnGw4Ei6cAEGYjqKDoSrSA6MuBem6ou3CrBeLZiWTC",
  "key9": "hVgX657827KLRtWzKKSU7YJa1NLfofp9kPEWBowakJ74LaemReRV9QsMep2SF7diZfFXCZHN6wQauHwhUEb74EE",
  "key10": "ddTnk22gD2VtcACJ7ercXp6wBo8vkkDJFe6NWiuo8eUifBBG1fJfpHunLPLQ5NiJ5tThy8x2CMtU73aJwiJPbhD",
  "key11": "5ivbwryQq3PjGXzcdzcC2qBnnBDGRVnS39G5cMAmAPVRVYsBHtKcDc8uvu8pg6NZi64rZFRtZDj2MGbZGq5n5bgP",
  "key12": "2SnkGjjwDkeqTC51q4PtfwJp4dmLuyesHfomPLJEgx8MDXSoUosx8iexMYcqoSvidtS9f2kiAJiusm6ZjgC9WwbF",
  "key13": "3SK25qKyjEZz9XSyvXFvsyLNX9urZRMWcFc8G1KVghvApMwDsGeYb3myHYbETVUfzjhJgUBvEEz41t2EVFtzw4MH",
  "key14": "54R1ZBZvpSf4jc32vPxzqnw38uscCcHMtVnV7bWZvH7VRvDrzjey7pL88b8m77Vo1w7fYfSHyPgGST5UfPhjinJC",
  "key15": "2BfCYZph8VHvrGJ8JDZ4TDjwjiPR2GZcCbZq4bKuqx4EVEZ4vzYD5Nfynycy394QyY6RnPmebL6v946Nq3vdwbwF",
  "key16": "3EDUbw7tnmkgmE2xjunBM72qhVrPFSNfUQetdmXE8wpQFeJFSzvm9542i56wyFMvypUkw7X755xAKN3ZTXWvz7ex",
  "key17": "2DxarrgjmFYGikyURR1sXcfLE4WPRAAHYsmDH87nC9WbM1Me9oFadgRhwm2fU5Kpd2e4Saemjov65GZRETFEbw5o",
  "key18": "2HXFqfH4YUfstxyqNAVyfzF2VYMGwT5Sri8AUavaB7UqzXVXkKTfpPbfCfbTBgD1w26y1UDoHYLGq45sbwUQFnhg",
  "key19": "3g4DDGyA3hwSBJckkb9VPaQGYAzm52wGUYbq947w51AewyMfYmhsh1SJYS8ZTAYwzAiWr6upEPhfjFhgB3D3UwCL",
  "key20": "61rjrekur8mstxKSrzNkaoKhdGvZECg6PVmzUmK2qtDuwU7c8Zr1wUgXZvEYnX2KVyc7YjaheuHFc9TBjdryAzSA",
  "key21": "418Fv947NDbLso7fjE4vp5KNYmdJY6vK7Ac822VSyURbKwvVLEDhn1zoYhwLMg2b44HVKjiNK2fEDMN5Ho4aeB9n",
  "key22": "24XHYqcaEGdXiYerdg6fGVnFaEiDNToG63ZDfvnTyD2mKNMkR8ysXkXjouXi8hcfSeXHeqqpDYdP4rE9NuUYTPZ3",
  "key23": "2wvTchP3cvphBdNBZka9supf3htAVUxxz5Z88SBQ2651EkHMPYzqaP7kUdEEm8JAjxAcvCasDxho7KynVbTEbpSc",
  "key24": "3fbExLpKuPEFaSZHsSATofffMiCYzsBZ5SfVvETXiyxc8Tvg6auWgZ6V9HgykTfddhV9YfRdfs5qnt5MBpPKPiFn",
  "key25": "2VGaCea1wp3eJrzrRLzdHPGdUA2dYmPhsRGnddbawB6xdqn4AmcaQA52nDjRfjUYMetahrq9RtPr26m5zpuyouiQ",
  "key26": "2ZQWppFaLnTCddoKCfBFEK9BYWjVTsxZ5VyJLW9JJ25spKDncinxf5CkutmsSu6kKpLr1y8epzM1Eet36uv8TEww",
  "key27": "5sgYNiJ8kNVsuxLX5jfFhu3yPHvqehLbWvrFdJKqeN8RwnCpVqg3uu2k2GdfYhCyANAkZHtMbZLA1eZHrmh65yCx",
  "key28": "4agzj4CWq17Rg7E7RfU85kzAuT6RLgGyyfRB2udQKTLBLiP6VWkoniuh8KqS7VN1fMBpJQVhZM25FaraRmUv83i",
  "key29": "5g4dst3GdPgCpfpqYM6iwYKSbchpayJnCFXAsBFgJcDBmxLzy7FtLCSEyRhWFgPN4eu6d3itcLormfA1ANvjihPZ",
  "key30": "fUYnzktXno983WRuE1xge8ExXqkojhMA8aGpmo5ygXLn21ucGkFhuM7RDXnywa364GmDuzrpNVapB6itogix3Cq",
  "key31": "9XqQVCqSm9cvqFbfaunh8jr5hVi1KRSXjhG4qmgtcYfeSSn1qDW5viJLuMSSr9QEZ2z9neQbuDXc3hTRmrknafn",
  "key32": "3mEae4pVPA5gSvzfgv6s1zeSfrpxCARGupV7saZY4iYawLzAyWHzudEhUU6DXJ9Yh3ACubFVwJ7aLy8wnvyspWpJ",
  "key33": "XMGGxMabzzSNQzNkWWWsaSiyGfw2a9ap7cJ1yG9qDt7panxnNSCuAeE4uvdStrZQJoRepqu4bBRCptsG5oBbYjj",
  "key34": "k8SVDwziDGTUx4SC74hRK1ZqmHSu3Za4dJ2f1fUYvo2RCfU3WATUJVbgVUWTgzKZcQimXnnKAw1FGqLaU1SGZ58",
  "key35": "65WBr85XvPBRFB4ojw7dSKYQRFRkuJuMBLwSLV7UkFa3jcRtPJmYhqBM66zeAHPAC5jzv78W9ARwsAdvVpdRdRrm",
  "key36": "wPGbhNF3HPBtmre4MEuiRntVRykYFcJP4nvPpZ3Yev6XFpjaR24QyY4Pwmv5k3n5vwrybJQUuHphJuN1meUL71G",
  "key37": "3Qcr3pkt1vqMkmas5yoKNJPyVTYqWcLdYob7AdVoTmXdJftPt29nPvMaRvenadVA6PThjawk24Cb7fRmH9wBCME",
  "key38": "4hbZJ9KkE2op9YAFEtxLMKghAQSFXkYzFpnhy5YQyrFiwhc1Rws7GNekUDmrJFReb4FcM7dH8mouKRezLem6gXwV",
  "key39": "3FZVVy6EVzhPady8iScHjeq3ide5QunQQZ4iFjiqDgZ8QdGJZvaR3dgRaTRVkoamrdfhMHQm3TCJs7yHvLR91aap",
  "key40": "2aWBDZL6GSww5cr7d2jRZyizXYJKaQRsDUmgXgn6kKkHi2oZHRdovJd1qj35izUKk51KEnrLJ2cR7jgjE6R2xJ7d",
  "key41": "48ZzZAFJhc73sjkAsFDdVpd3TBxq54iwDv26kDTjauTkiAVeTffV3pNy6SyFkoHD1zB6b6yB1BouBW4UPSSJxhMk",
  "key42": "5GpqqbkEPR95ah7CGY1TQxoD5gnQTiFa9V1m6sXmbHLRDhNXunpcmVjF6P1SmxEzJboqmaE2e8csSXJYu5GqmKvT",
  "key43": "35H9EFyWVN2zKvbNH16MpyoxDQt76TasuZKkRjJ4p8PmJK5paufEArWJwuVb8KRA4LiRsY2YkJf35CNbwjzV8P6s",
  "key44": "4UssVcVKST8dGc9ThK2RXc8zzh6AwnEAnm7K9pL6BFr3f1ua5VJaD4uyGaaXivCfTe1DVZtUxoobLvfWmDxketTt"
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
