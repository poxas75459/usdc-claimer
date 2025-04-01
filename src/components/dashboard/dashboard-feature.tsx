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
    "2ec2qekFcGhEnk8vxjfjhy3MDDKUEr8abrD6scuqZ31rgwAAcb8orV3wrXPJ1GS5kyagpQGRDyeCYUaSGjpviPeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HkqG43qYFtaVNS1Tmy2AW4KBZfNdNikQHQkp21GFvYZvhRYZT5EgTwqAgEy1jdRAFgWjosvTuczhc7AjUZsbL49",
  "key1": "5dsPq73m9VW5imvDYQnkTrqDwVCTHjA9kPB7uLR89XFWKkucNHj5Lfh37SzDkG2or5PtDW8LSVNcEmfuZ7sutKWd",
  "key2": "49rQqCzbJWAVZ6K2oYJDiykW9f9MCBW4E17ycZY2kgquMepAmFWGnzR98mrij1hDPDr516KnFRCHprU38WEAaX5R",
  "key3": "2Fh2xZVF3ji2jWQLCwdNx4ETwaBwwabT3LQBry68tY2xLZEzGoPPCMHnQ2dxaBEqGhotmQKTbzQTN3K8kyQeC15r",
  "key4": "3MNR1GDzpsZeduwRkAwuq6KkLGWnTXTRYQCAeS2FjqEFYhnVTJhotXMrekqA1uTEvV2t3r5KFFHLANiVCbTEXfqV",
  "key5": "4idAbWjs2mgCEfmJnjWf9pCTWj7wFu9RaFEpW84qzoHuy4zS2eqjfK1MwtFFD2BuWfd3W37cSF3LY2iyxXqxTDjt",
  "key6": "5iKzZUX5XYep1r7UJfMF6qm3DTWPsPzp2iPt1AxvqDus2Gf5hbuLkrHfgiLgaQRUUNickD7fVoU7MM8vavQFN3aT",
  "key7": "4wEnXnq4C3AvpV6ewntJFbyxBBtXEUd7rXZZXRyaibCB5p2PqPBPNSmp94KpJHSDgrbS8V7Y6pXRwRpoEE6UD19L",
  "key8": "E2rEtMjGcrEGzyjzwyq9PZpZig2vSfhjdpA7Fc7gmpYWiiJ6EZPV6EqM1Z2ueeGMrts2vcWRyxvme9V5ptcwm6P",
  "key9": "4KQqXidYbb3Zi9mGUxFL9DcJP8rcyWQw7L2AwYvz3uqg6xLKotLk6uVf6vyCPJcRihG8WyhFoD511SUZ1kj8Dr6A",
  "key10": "5kZ6bGPUmytwxnCsPrhGNu834Th4wNq9F3UbbD38yHqCYtPc4ZGCqDd9deLg6GCbDd2ZzGqV3sWC4Qjx9yWmaen5",
  "key11": "4qQ42WxzEU6saQPhXJMLLEbXHNQBhBtVpqDcY46DaiXsXjj8FQwkauZQBEHop4xXAxq6ERr44HUDt7zJhAZYC2W",
  "key12": "x8pKC6VmGgVkWvBZmzNmgU9tbNu585k1Sxs2zVcRMpTdahc61Ps1CZHRkDJZEVSGcKE6fNU4vqZNUsAG4Hz541N",
  "key13": "4JkLHmeyWy2obcRtBdHQDCQ64fJF1h2wM3MKMHXuQZY8FaMR1XnYJBE2gzmQbPe66a7G2ka4PHQZMb3rKEKoVMC7",
  "key14": "4L37n4DRwc8P4WuiEm31fHokSSQBo1WcxnFEUv2J5du4mtRmykUtet2UnY2tyZMn4RW4FB6Wid1q7TB6nLKqL2HG",
  "key15": "5JDdb91hdrUVjvkhncPy6VGdPr6QGhMetRENhaLewrRdDBF6kCuurq5UfeUo4we77TnXzQssbAUEiT6HKUzcCd42",
  "key16": "UdAZrnL71gMCaaST4JrBH11mC9MUC1bc2bTaMJPefGZ1hwR2JEDzu9sVwbVoZKkyBDq6CVHKdYRNQuJmgAWYcM1",
  "key17": "4Yat9Zuv3EuhHJN38od7j2Eof2hHbuSq3JASza678CKWsSWDQsYrGuKwnyyyoVDzvgH7RwgRL6Np2tveUFztQM9u",
  "key18": "33gw3G2EAJqUfTm9EJyPvJ32otYi1P1xKKpfjMyDm4Xey2CjQSW79F11dQsTxN7XAfDdkzcCoaA4U1X3XZkPPcQv",
  "key19": "63qccAKSjeo6XpyJDBECcBjYqZdMWavhTnqtgYuokzpA1wyaWfR4hQdwoqNr8FxFuE33GEhG5XBDn8tExsFLufqK",
  "key20": "62k6LbMKxSTFCqZ7V3bUtyZXjBWnJEyS9an7tDLoNRrrFbPBPLpYPsXeypRHfLrMh33xw4nzh4JXCAbyJQkNbJzM",
  "key21": "2CgMq7ZwE7uyGA3sKM7nQVeuYjxKesdeXGwZ4o7L7f1YawYyPwMqjRAfsw1rdXGJ9sWGXsiHzHbdefNhqMLyozKC",
  "key22": "57TMhkEQz7TbQF7EgEeudea8gexwyCyDG87EMpLRvaNi5LP67uvTgKMSrZ42yCBjzKvVz46YZvvsPUznqJ5YD7xt",
  "key23": "3AaLT1VAyDUCUMdPkd2q5HNkAJZsVdj5QC5TnGcpTqBxjktsek9Cu7dYxqQw7L4o3sWDE87rtEc3CDJszNzwoL37",
  "key24": "2GpsR7F9dzNr3VYy56cStgoy2yMq7XbGGbLaiysQ6oVyLF48HD1gsvGC77VjN8uELYKoaZZtyJLqqhq89cNGMZWj",
  "key25": "2xeePfEvjjXbzuajDK47TF3CZcpjKa48D61g39fsNMq5eoRvpM9FJYqRzJkRBBzzZQFfkVmnn7xuN18RuL7UY9LS",
  "key26": "2sxwm7sP1qkGHpiiZQGVVnEEKSREAzYpuNVBbemDwFDCiUJgWsW4DxuahDfnJG9f5ndUTKqNydkSuG8XbW8Jzj5D",
  "key27": "4Nn4L4Ca43D8ovDq61YwxV3TXh6UhuzHLfHLruGmWXJHQgRGnBxkTYF8YwUa5StLgQhY9mVN8c8qHLi8uhJ5uL9s",
  "key28": "q4qcMbdYNSkrix2YUUCVyj1zN8zuWfhjYNYK1B98nExrxYqobcS5KEsUxzoNm6329o82JM7HY89Rvh7gd5mEpfa",
  "key29": "2S15PH8aXuPCaPhN7k2em3ezEcowoSzUMz5FYpJvaczmnVuoCPY8idKAqcYSeC19NsstAySF3wNSsQJEctnxKV4T",
  "key30": "4GBMJnaS1Y2q3h6he2TAidCe1zd6KWqoTFYZQz7WEQK3uqQZ7CrgZup1hVqEFNLCWBEo6YVbU2tnh3iXbRAGxbqk",
  "key31": "NZVRuxvZr39Lu9L3Vc7wxujkNSGjTmgLhS6H2UxC8hdiyntTWnkqdhE8PTGsUh1AWnFAAbPQgYbopxzkhjf3d1L",
  "key32": "5pMRWa5HNV34c6Uz2uqsbk3nL8NfU6DYZry7QkeSWrSEtYjTkFBgmaGGD3RT6MjrgcWUszBGjjh5Lz1A26AMiB2o",
  "key33": "5Ga75KifLQEPsG9EsTi9GVXT5gtwALTguytmauFWX89SQfh6F8XLXWcNxA1QvPzgrSMXiUVJdf4pjGcFnmiXdP4C",
  "key34": "rXAeMoqpp2YeXgxJkyhwHChe7Xx1Qfuw8zPrewvoydNuiXVewXD9FCQs2TXKXHvLRVfod8Pz8JBZ1i5Krrfcgms",
  "key35": "3Sdd1SJD9Mfb45oNZ2qZdPnZkbNhPTgUvyKBazoLXjKfhk1vkGg9MZrz8BEQMma4RxvSShAjpkzr1sjovo55UEVW",
  "key36": "3n95Zcy2gLm2eYpcBK7JQvM1Ap8rFNCsibPcNSCP4dVyWXXip6vxLKi4KUh5R1x5zQYshcWy81grpzPXJRfgRG9Z",
  "key37": "3Ra5e55NkhtqPszKkpPsh2g6XmY5FVJvNPbFCngG7CLv2w4ANMvwNvop8u7nrcDvk8moiQbcTez4vkDvUaYNzFVH",
  "key38": "4CrmmbMszWJaEnzG5hxiWac9tMv2o2cNY3oUijaboyMKHcJMD4Yfh2qH4L4EAAdkJM1oYo4zjZW3V5dPDA1d3nwQ",
  "key39": "3NzUXzd7zBskr9WEX7WTagDRnz8xfRHiPGZEY92SSXW7we7bFbpR2bR99JeMu149JdLE3ayPWUoKpZjWuEMec3Ea",
  "key40": "4oo9JXWstzRQcHKEMuvfkm55FctPPgX7K1cNuCvLwEfejNFYgRW3MGAaWfrcrapiMyrxVDS26r6s96ScEaWKTzAx",
  "key41": "ndeh5TiJsFoknfdnR84ceGzmw32SuGT7m2AnKshSD1Qa4iu7FCcb4kB7sVfuG3dzvNJqo4SrHhyvA6Uq4Jpq9SR",
  "key42": "3SnLTy5ayNsae3cUy4DDA7CWfZSSP5CQZxRMucC66DgAJu7dzugt5PVmaMLiRxk3xTUzf1UUsGwMo9XT68GvDNmb",
  "key43": "4dGvwBWueC5GPTUTFqZDEua6z7SQfdi6VinpT4Ppzm2Z53yVBPgoTu8g6U1hJTiRWqTkaBSqxxJqd1HTFf3hosgd"
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
