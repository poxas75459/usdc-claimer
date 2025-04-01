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
    "71pk2i99XRVauda7XrXSmQuMHgqXXoxZep8FN5K6nddoiehUA6mFZqja1MibTSoMbcy9NHBPCRdBpaix4iVcaNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TaAyRqNKqPzwgwYepbuMVTqMRi3q4ZKhwkzTkubW4R4fYaxkbT7SyyVrGXkzf84Yau63gmWbXRW1BciqD12s7iM",
  "key1": "34XwML6K4mfVL6ZKEDptBq2Mi3zNASYASk7RR5tGiUyPBr3SHsDuDbfWGo19dfJyLBmfG1NCcBr6k8eDFpfzHG8Q",
  "key2": "43JvepQJRJum3dR6kFbQM8NaJxQEjzJJkS9LS64wRXaEDfZ1dSDmom9EVsGL4fxefvHEXeUzzoxFaAntbr3Sbbw8",
  "key3": "59rRYoviLCkUHKYE5cTQQBphCL4qSmfgbEWbHDeqpH7W5xWFodw3FrHGUwK81hjt47C9MzGKAnKrTAsGvHDcfeq3",
  "key4": "RqszVG1FstpzsP1mqxpMXC68dFvFdgptcx1Ke4JUXx3ob6zhybwFRBXuDqtjYhat6rr9Lov97NckZZtAhcD6hPc",
  "key5": "smfewuQbDdEJcLkvtwGgidoMHysYFNabHA29E5uJa3uNryLtafQtrZPScMcuDk46Go7xhyVLqJ34saNaMkdpf1w",
  "key6": "5jovJ8dquiGgqADp9W4ctguMq1pAa4zusbpAqJ5f9eUUTTfufbngmhWCSKnxsDJLNsEHcZQF9KwVdH91SUp1trLv",
  "key7": "3HbARcDqebRBvkGQiAYoMaxtHidsnBMHrZM94mTccRS3RSzEjxWUckHAr2emi5GQWzDmaWyg1dVaeaA6h16E9c4s",
  "key8": "2fmzNySx5uqH8cqFcrrKPm1DiLYrvvhPMF85ux9Kob8eDXZU4YgoSRyYJko8N28nF3vfAzunFpeSxtpt9SRnYwsv",
  "key9": "4Z6XfaSKu7pML7NMXCTjKSDHnztdEepGEHiWxoC6U5ibRLxpdSf4mRhYrg9j5CuqyntFnHLNbyRjNwSNzpcasRaP",
  "key10": "3NAnM1sq9JYuAuiWDrNhoJtUN4kLAq6V2c7TKGdjz349Cay1htrqf2yT3JXXpqkRL57qJz5CxR4cga7cB2WZUJFX",
  "key11": "5kL3CnAM8zwDK5UrZy6jhvz8sQtYuxdZngcUxqhoFBbHf3UF8QBiQbMbqhueSNjFnSW6C4cPPjgmtZDKjevNCvYC",
  "key12": "PJZtfsW1CaBtNKmiDkCxk1DcpdQtwqLLACwWWuamHw32SzXwCFeW1JtG8LkH4uHqDCiZKUF735iAktr8Qn2Wgkr",
  "key13": "2JooHFA4VrBsuyYFZFitU4YYTN99LWTwxmowi5k4Lecv6EFKaSKuDCRPcDdJG5MMRvWKMt4FZVjYmAMihAX9x3yD",
  "key14": "GSYzKprKWbSp1m2yNdHTNGeKXjLzK5LKDAyF7ZZC18bh6DYTRJhm9yQ1TZTmJ33mgdEdUUCDF6NeMAokzVtCQoV",
  "key15": "2EB6Wkz68nbQBMNm5wfbKaZqY49FtdX1gt8x4LwxChw8uMRNYmT2XE4FxnKupHyCbi66wPmJGoZDKuwHt2Q6rRzn",
  "key16": "5zNM7eY3arxVLPsck5jiSp5anujhiMwiTTZiGcNxdCQnLb2QqZKNj2eZaAwuSat984KRPx12bCvEoUPgGcSmMBFm",
  "key17": "4ectoiGHqQaauKhtC8dgpb1MZxg6WLgJiYw2CyHuAkogi2arRNBzTPVXSUyeXXd4hFQo87bp3S16nBShavK6eur2",
  "key18": "4jnVTUb6stuhfsGJSLcfu4v9cardDveTEmmGJnVm6eyoSpSu3x92RFd2MXuLPwZbkEDD6e7TFCGBXqk3ABzpVtgW",
  "key19": "gc58HcbLdGN1qaegE9S48tehJwNujmhsBggmrRN4yx1oAUMsF1uekBAsZJ4GB6DwiuBP3r1TTpR8w3qpeh3KWu7",
  "key20": "5gT6msRYP2DtgavHAqPjRUME6rB4GoYMDsCeDBTi6jBJUNHUmTZBqkPadychZpMf7Gs3tfTRYXv4PsicUA3ScCu6",
  "key21": "5Ng9iS99p76fvjGrhy89c7VkBYUunZ5XrmLTvqYbPnSNMBA3MS61yYh3NVdN3qCcw1qUuRfNWr8TKXVXvvP7UEv7",
  "key22": "gfDYgtD8vhkgfF162GB6NahYhch5whqy8BmqHbThbU9eL56tn8Dc1SWbhXZpn7mKHSbL7U8vXBTSxGuB1xVTCBF",
  "key23": "3J9NowjgcNGeGhvgZyE1jLFjKKWo8jcX3WcAsy59mzuqN5v9qsu16V81YFZ1g9FuXvxrbgtbwCLiJy4PQzPTXUhL",
  "key24": "2nYoHB5K9PRhhz7crserSAuNQWVNHUNVu5xdbBhdwCTeGzmgsunVzSEMVQk3mwvZQXFNN2ETrfCdVJL75V2hcmKF",
  "key25": "2Mnq4Kkx2sNaUyNgrLzQ8n11VC5DavMMJsE1nBCvUwprhWMfJdRmiX8x2BiY68BaCiyn6U2LNgGF7NMH7wF7rtM6",
  "key26": "4SMKXjw6DceQQq74Tn43vhNGi14VEDg3QmowAARr37n8iu8eo2tqfSF7sYTbxk9qhKdQtgKos5wziKY7z7xYsF8q",
  "key27": "yVL7yi279QgnEzBwUGZSp5qh1B4orRv3cn3QAriYCVCFDn6BNwyawZnXbeGTztL27bZjRFfnFh5aAvcrmZ8Kcto",
  "key28": "2VF6wq8vMiFcfQG7AE4GmDUgvttArYa9rCShLtFXf3nu2FLjoWSaBWk1JbH9A1ehM4LafVqDz9BiyT6gJQqUTCWy",
  "key29": "56dyRjiMwSK1JcyEuT2W4y5EYU7acUsJ9QZEC4zrAciBUNUcXaxpjeT3HedigSdCNwoKvpaAvTEnefLDXk2ViAqF",
  "key30": "4HDfRem5xHSHsXaNmFNYBRLdvHwMMEjYcUFuy1irdRR142Pe5pv6AAT8k216FEEC3uFqnsVWZM4KPU8ptXPH6b6N",
  "key31": "51iwqwGDtfSF62zSdnDUAEWY3q3Erdmt7g77o8C527VBFe5Lk5r2fDvp4MMhKtZrLEYAf16Q9YDrAkQ1tDoBfDgY",
  "key32": "4t16q6cHQSomuEoibkronfWyTuafvpqhgoEdjk6Ana1aVFUpv1hBvAvxwmqeXFRFns3DJJT9CNH1bhLTMXjqG7hZ",
  "key33": "4it4T66d3C5f2R5Tn96fFBg4U5EWqdPfeWaA27uDsYDRw4D6GZZWKZh8aioVXd5SK6Kkf2WcbvkuFHEkRQMY6xDH",
  "key34": "rPbkKWdZWRJANPNHwieEcaSkKoLZv2g86vh4aPtBs88HUENYx16EXwByeRUjo88oA4RJrSrnvPwiGerwKZ8d3Vs"
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
