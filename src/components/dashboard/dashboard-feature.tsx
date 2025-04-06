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
    "23x58VuzSkzpT6VE8Li8o3B9xpZQGp6yz7n7qTnRgvecfDAVLaiZ3YxMuiCChHaVzPLeB4wuiSZCDUYiK8pfNAcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3je1qkJKaC6wv9XpTKxg3FNomD2dGFAVQzBH5MyERhFRAKZDH2YyN8wXB44rxZUoZawc2iWXCYCTwsk8ANnBkSRm",
  "key1": "4EnX6DTPp9mvhszZqAZGvQteXckFYFH77pMCRwB2Q5C5agw8yMpsD2MDzqG9qFPabdyay79sf75GRkadquXq7X4J",
  "key2": "5i6Y8rPuJiekNxakmNmuppE7tD7ZP8u6twGQ9i9uNck4xDN2aZUP9MGwztd7CswcLBh5QJhGUX3MxujxYs7ULsj7",
  "key3": "4ZTHVBXTseEahmx4GuiSEy5GcgMGvL73YCJYf8xb7bFQzEJJyubb5cRxJTKB87rgx7y2P428fJPzCK5NpQVXjQf",
  "key4": "4EyiwF6kgFnSJVTP9K3ufPGbSLuuJyDriWFnxMhkQA7qDGacJTnQQoHaUeFhENooGVfw9sEs1BJb9ZzSk6cxfF1t",
  "key5": "pWSPMQAy5HrwHWYuZxUC58FBeZ1ZU4nnxtWzRRhK5YK6AWWCT6tFfp9Qejoqp1ueGER1gBGiF9gYNXLGbUu3r72",
  "key6": "4pXMDGRfXHR3bsGGgYcm7JY74YTskZyN5PbxrBTyWet5Sv6G5pryQ8Fd6fx1PADDjLx66WniMd3egV7hQyurw2st",
  "key7": "5d5VdaUYarwrLnN6WjthSwSJQzexpyd9y5Wg8wo1jLqBsgvH4mfhav75kGLEMTRcWQzE5TuAceyjS6tybzUkPd47",
  "key8": "5jGgc3bUugCPKNRkjzZNpW3QRB4mv2mJmsPVFo3pfH68tsT4yAcCBuEK8s81RHC2UH1XYgkQMn4UQqf821YjM9rS",
  "key9": "37dr4sQjH4KcvDFTQiViwMpXTmtjPBq8cGvRQp77tj3TZG88bXH2q6mqakey8etV4V3d8fxkCNSbDL12h6pN3mSq",
  "key10": "2ns6PwQ1gbVq23ppFhYcXRA7JwdkKXXaZYj4LKUmyg2LbkD8gGqhhBM3Za9AFFG1s8NAjGbUPRpQRnFaA4YuFdyh",
  "key11": "3NuzQeRG7Ah7kho9RAHxy9EBgzrMyKuEpmtGhSAwCKFdJkuyX42h8Mkg53j6eKFoP7Z92brjMcdinwQEBw6wMw3g",
  "key12": "5F1LSTuTpjtWjWEEhNrAx3hn6pngzBnwJzf6ZDkjff6gzgVkYYJ9QTBwKjA1Z8dJQamZXeNXkcypqzWimzohpYBL",
  "key13": "RZhkyvTrQ7uY6yUCJttFrGNLbegVPWjppq7P3siqeTmcSR5mMXt8WxoNAaK5VFDfnG1jHcGFZZcM6Dwd4ubGqwJ",
  "key14": "9KepXWFcgQyPqcoBQFWag8h5QL7ApdvcdSrb94XYteSBqeX4CvNKvbRU39tTtk2bDWDjwu8FgtacMCS5kyh3zEa",
  "key15": "2hnJjKSr3E6kkmACvZgV4tKm4qsNsY7482GcjTmGzmHM9PjxdyddWVXV8g6izQgtFK3W5p3MGT7gWkhHuYZPSy4t",
  "key16": "xTRcLx77fv3uBMPMyjUhP46czMknjBcoZHdJV6qBC3hhAbkS1cRsecut3TiTPsoT97ssQaG88ztfoqvYaNxiZT2",
  "key17": "2Lmhqz7vEGUrQvS6SP816yEtqjnLcJgp7xFAakt8BnbDqNywUpVSpa7AfiAXD4z1zYKrwy8CfgaLx3nCAyiryJfZ",
  "key18": "2wGK8sZ7eam1iU5S9F4JfcR9RtAdENMAG9C89zb65ARWzZxA2yWRu6KKKZW1KQL5CvUzVkGBkfrQUDuG4Q43tFtZ",
  "key19": "4gRki2VwEcENpC5PN6XHLtSSRnsrPgUdKuu3SyDv6qfBT2kJwRGTMHuq9YugyH1PRMMguMmocqGC7SNExhFbB72k",
  "key20": "GBkew5dqkmY7YDGB32LFGa5EK1UoJ7bgVtNcp6AcnoQprnBy2KsDddzbkA7483vScKZcPxg9PnxF6ShkEYt3FcM",
  "key21": "273GCr9DhhKQLVNHnWgpcproyPc4rC3ButVTfPozhbxU5b7oJhDhGDqthC4GjiAeEmNf6FJiZ9ZwZ1uUBwcH1B44",
  "key22": "5PJ8Gyi7mJeiZJbdDEi6Rp4Ntcq46tj152CBdszfwCagEw6Uhy5qmE9QtRYYkiDpwBnVzScF2AMZ6a66qJDJm7T1",
  "key23": "4N42bgujHYLa1cX5uqAxG19LSRtEmrmYXxX9HRGitkXJDcyxBczY9A1wvbTUaPuGhjFRHXZvJZ1dFt51cqDUaoRq",
  "key24": "F4eiuECVqAYFM9YuHYtcPxpGaQV7bjSTw7ebd9jF5PpbhnCehwi1zuwpfb5wnrgcyrEJs3WBF2XC9mf6P8rbxoi",
  "key25": "2LL85d3JN3tHcMrw2TkLfV5cWYeALveQExU4xwPVcvHmdswySBugPCtV4G53kA16PSyJHACCE6iMqdTASeZFupDD",
  "key26": "5xMDHi41VBZ9sUZUEZbipnAJiGYmTTXeWX4oJBUhxkfZXehy2JCK35y4aWmFgfGQZ5TVkfThGUZBQGJZUdnqo3k9",
  "key27": "2pkm7VeTzA1P5LxCMbQdahgfPhvUnHrejArS5qVm6wJYQ4G1USGvM5JjcH1uSnfiTaKHXW2LQWohaMZ8rLPTFd9n",
  "key28": "yk6XrD7xiLf1pyPF1xyNGYhSsmhFyaLJypbumGrFXUwRLt3r9837zumVJtAXGqnv7Um8TjVXd6M1fR1cCnG4EBq",
  "key29": "cV9enXsVZTD357Qaj7ZP9bB9PDaxMdNzJszx22ywmkpa9JoC1eaU1f7u4LchdDpQSqysNsdjBPED7ruf3BVdZa8",
  "key30": "42XftNXXKTSfaajUbp8nsEizMv26vA1K1ngKVDSSegYEF8GDV4AFVQJeqqNxVXsU4gzWUU3gQ26Gnu7YP2dUGbQF",
  "key31": "5GxEQqxtZxe2ykmHBubUMydB2u992kisSLEgz5ygWkH7HgtXcHhRwGbbauHxcTiXsEuqaybp3YstKzjRbsqVapKJ",
  "key32": "3jVymHzLgUyMP6XYXeBucxtHvAaDwaJUGmhSzZGtFoEeydDe8sCc1jJBbLC3ApbuqK1Uc7yRcrwcarYVSNj497ss",
  "key33": "3dDoc5C5ekeH71Bo8q6GEV7igvC3NRj4G1naeSrnmXsK4jGoBpf2dvGACvMuWXDDaPHHXrn74mABPwuEywgiZa9c",
  "key34": "3UoKqpo2YwD8jTuxE5ao9sVRY1ZHn4EdUA3xGVM1KmCQHUwL3G66bRZU2pkZ8gTnokt773JnAJeBXfC8ZSi9o1KZ",
  "key35": "21zLnWhFcCZuCth4jWiop7AH28d6LowGwwMAAVjATAXeftUFgg5V2Grv4P5oa5dZYgCb8pDMZRu239NtqAnsZha3",
  "key36": "3r9UA53ztdYRQSdLr5H43stWnUHiQworYm6iSxanouVqPVaV2kBdL2eZqWZUmR8V5xR7U1AyWoNWzoKaVCPqYagJ",
  "key37": "CheXJdWrhXAdyHhhCQwi5kcAnvbUB2tgC2Bn1GYLGJ4sTomEWGNeSrRuFx6ebauJUDLQYKMzjEYs3UYuyGfi9mz",
  "key38": "5HwmRK991YzbZgue2xgQ2qiZZzNXki7hKz18F6BfCyckPfmnYh2tVLbxrGdUVrJp9CZFUUfhMa1wk2vciLTigPZW",
  "key39": "5i8EQ6VT4kEo3Wcp92qM2FjDjCPXjuVSLtEibUs2rwBjfKHbeUfTqLHmLbv5g5GmiijemP1enmhWs36tLssWBr8V",
  "key40": "4yxJWm4Tz9ZTBRd1AGoWUWRVnaV6B379ix4rwELsVXqNyucnHobzVgan4g6hQJjpXW7P6npcDyEpz9XHx94GgWpn",
  "key41": "4WY5ZzjLWQyf5FpELVRjX6aNrDqfJgNumJUuMTUjr49KQUwMcWVpfZ2ZMkH2Pw7msXcAu6M3sqQrTwBBVRUBbRDv",
  "key42": "5GkaaGmdH3xsqiQ1DF2ZzathGfj9oKtAmpSoGqLbe1AuNufzHdFDvfTYoipXw4QJ5HtR2vapXUD5h8pSMdC6uvzi"
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
