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
    "518tQ7jtDNmBEx1MbNdde1MTZW5LoSzAQ3mCUUTwSWSsZiYHi55Do5AxstGzqLuduLrnK3Wt3sYRUpXCVcR6LXgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tSEfFb87B24HtCSAVNph6cGofgKxrEzxWzRrEvZ7CMssWuivKYi2Q1sz9WvWJoB2GoBNP89f9nnUhq4GLdbeaz7",
  "key1": "4FNZ8nWEB1arFHRYL5KDLagmBMFQvH1S1fF5bhhBLnE8AHUcHWMRh6Bos3i2d4m7W7ekyHekNYFtXyj4BHJiEnQ4",
  "key2": "5MaYDruQGR1fnJQmYXijVEw4J7V9WZjLMaVuib9iqz2zNassjuWBJ89C3nawDfvVzEYnmdp2JDLirLarAPWMoto2",
  "key3": "5zMaFYt4f5FT6PNpZLwmPWRcmMpFFt5QW8JM6tDzyBGxJFs4mzyuWb1E9SfNwWEFXqzshF8fL5SomMJvBREjf5ZE",
  "key4": "1bRm4mKmXbBeXckrtEgAsvCnjeYStjXXpi4rJwCAhZwxmZCvWi4RfuJXB7xdEfVHo7kVx3RMjRBPfZFVr1T3Cpk",
  "key5": "3bG143wvD5rbuKLMNXGrJtARh5q9F6CG9LdEW2WGuguVTYF4d2sKHf66W3bDV4egVwbKzQrsjbjrWgkTTQ798iJa",
  "key6": "4r6frhqemUM8u7jU5YQ6HmjxAJTPztKbRRBqqhTUXxfU6bEnBiVsgySpTsNAKJvhVbovt6Sd6BcCajnHvxyfZDW7",
  "key7": "99ZgubWgiNPkbcZ2XnKENBMcCeMGeagHgg2rRWUN4JpHAsQT8mt6mYmMd7sgdU7rMxyce3sLh47G9KPwozZVx1W",
  "key8": "5KExohxUxEXKYHDvdW9ao9BibKXuAwgtYbCppJuKG9Usvr8v6Yet7XY2x2bfdZJ1EkUgiKLrPqX8riho5UF438Gv",
  "key9": "245NKHVviBkURCGedmdeeDukRNRzYPomz47NdkfGHMqKVBSD46smgBEZ5Dg8ynvgEXdBwqokr3pcffq84Q1VEQQf",
  "key10": "5oxc4UbSpq2youTcPUJFuEWezHjVMLmZjCGsp4wyNydpk5xmQzRNkPvuWX2D7maHLRuXebbhJoC1L7LLu9Fk7Y9q",
  "key11": "3pVNtW9czVPW3stEC1CCqw9ebYDkXwDK9dNsiaZh3MgkqV4WRHrMoEsD97nrDMhZgqXaeAKe11LnRTd5ZHYfk6dm",
  "key12": "2fXxaSp79mSYx5fwV3Hq71icQYo2YFSZB9oViGLW1fT8zU9iZ2EfJLPfGDKbK4yeDsy4brkCC5svbFQ4iaPvbRwm",
  "key13": "64aKdNsrpfKUmg8ugV7hRcKhqArWZidHRiVxFEuBe8gBNYbioNAjnYAZDH3u3RsmuRKHbgHjNmdhi8Q8a3QXQMwv",
  "key14": "5JKjDzP4nHzXyMPC6eiAn51HiYwEBZHBWGZM2z3nQoSw9dKVPY4NLrtry9DZDEHXmViW6ca8C2cP3XRE9zdFcnNb",
  "key15": "63svbGmpuFNzNFmY3pN8wL1zaZ6xwcJHwJL3KxytTNs2unKpW7PMhTZEjk7QP3ucumfV49oZhA3aLG19XtAMUP2N",
  "key16": "5AFCmCzUeajXzfsPPDyoZyvwcCom84paPnN8fggU9vnyLzY2Uo5ZMZiqPFFnb2bTY9Df2qBr2zQjUeU3zMUGkmwp",
  "key17": "5Vc2gQSCU3a7dNAvrrUJ6gds1jkHypamKb37EJaoqLWquzdFmiLrju2HzTJj2oLpBc2teG3fBk9UTd1F8eyaqh13",
  "key18": "9BUYY6YZkgqZ2XmMbXVZoVVExHhS3thPFqD6oXrrQqed3HbBGyZrheTSgEufuKmTahb1jv34gQBJXq77pRJYBwX",
  "key19": "4cHFA7Sx5isA3AudHTnWHybL9gjHkDoxkeCsj3BPGUDjsSo6Fp9qwKykFqF43D5RwVGWErz7h341dAFseYdReD6E",
  "key20": "3vvrZsAB9PqomCVTV9nYNqYzF2zBJ1h26kRvZdXrcpzv65zeJUno51HRWWKoNFG3Sj4mc8HJnAxWy7vqcEJ86uM8",
  "key21": "5ZZxhoYq35FrYSA96ihmhsB8rtDCcn7ZeryQ4SJabHCTbCeCGSESCecjvqmGiFEUjf7SDcRmHQ4z5whaeBowbAAG",
  "key22": "FkN9pcVJN4BfTMsPXzLahuEACMbYG8xLj8HJruSdCY8obPWUCCStnyzJYzuT8kDQbFS5fz1f4jzmUVP1bNkMCfp",
  "key23": "4gxNk3cDBzGzWUa3YmMvDf6L1HBSRj3tChcXS2eeDzEC97NPPiQRNcJAeJHwuvzMUJPRUkYfEUpssM3bGdqpuPtf",
  "key24": "5vGKcLSEx7kMkPByLp2UA7VfWobRV3EsexvAv4sHfRLkKbsHS2TucLVbFoZKbjqN2oy7aeuUiqEGbN1ncJC3oTAq",
  "key25": "W8W91aeYhkAKeQ3jZ8zUfeJWsdGP3jgXYcgEKQaPJuZLGLibCFw5ixB9QCmoSg2Q1qMASZd415TAzUS7wY5zjdy",
  "key26": "4MkTmU7DmfKj81inNaefZ5Zeqw6HucEP3kkoNdHUucGVThvhgxdZwKjrCmDW8ZfHfZbaTQzfXVfHt8vvd6Grvs8k",
  "key27": "2R8YLJ9rpmFZ7UBo7J9b6PHrHes2e6Wbn8Yqg199XZizBk4JLHYM1XSuErP9bEyTKTVNitmXedvgRDwaCa8rF2Y9",
  "key28": "4t42AViYzkxPTiJJuqfbegPGzLwJKv7u5jNZhAGG56T2KYJyxZCRiYZaFEEX9PfCE8BV2KbkkMM23JWCcLCNhppN",
  "key29": "2UKc4513QkXga9yBpmRisUiqFuhNcxnKScFrBJPGAdedfpyZbkFQ7xTFJRLLgiiJyvpKxxnzaSPjYVPD6rTixpmn",
  "key30": "3yA38BhDx9cuqaHgof68FcaMbhdgQWhAVDvZPymNTojp1XK82mPKYk61iQZcD4YkU23wABQZdBLQ7mQXvhSmwNrZ",
  "key31": "3EfAoPn9JxXvyCm4VrY8mzseiRcPMLnobRqhyAJ5ApsbFF2wYLX6EF6s7W9KaZo7U91YqPS1WE5feQTZZbE9WxFs",
  "key32": "3NjnSyVfxUz47QiVo9k3wxvRkJVs6uTjTuAogbkc8mfnj59tJPGoxj4Cu8Z6WcPRJVifEesyxw2fv52fRnDsjNDE",
  "key33": "4ruMwLTms6eWjVqNekVCV9HuqRX2WYo1xSTGh8Hz523CarRp2ffocSWZ38dcAyNpzu8JzTro1YMoVDXb5sr8fVJe",
  "key34": "mKsyHuVNyBPTADAQWuoQLBuYKmXGs8bUE689qB7us1reVHwoDwsNpU6ogv4cmapTxm1saDzLi6btvAeousTpgnQ",
  "key35": "3uAV1KWu3RWHo2pMDSz5q3bganaX9KJe6tRiNzsja4rLcCck1uUmGysr2qbfUqDMJHwHZ9yTCkyQBsYGW3KsaPMH",
  "key36": "46VJYPqC4i6VQxAkUFgfsqNXL7FAX6485Lsu2v5gMCC3ViP1tEodMs5iG4rKmc6AyAUmpdC162ADc6sLMzP5WYDj",
  "key37": "demzw1yYqetXGWYi9GU4enuLwYQuCmweown6YThNSjNFXoiKYXxapLu6TLWGaLqKSt9Pbicc64ZNdhbYFaZEJJb",
  "key38": "49JhQdjLXvhGDuMTe7w2isa9rrNC9PVCywfaFzQ2nUQenmnm38BgMfeUvQ8XLJWBFz9wiLfrdmCPu3pQn9PVNcDy"
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
