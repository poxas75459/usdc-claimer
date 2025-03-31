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
    "5DZSMdxLwcUbgroVEoqFojE7MMLY2c7ZYfTHP1PsCCmU7DjkUPD73DSKuQsrD2e7KVMmAw6AervuGjAouKmkKoTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5junVv4Nzbubczsip5YKPqvAoaa2M1eHLQN1YcANWpHwrdonEUoVWodK52gsABNeTmzuZpsG5Vb3S9KhuDuuHvgX",
  "key1": "4EGcKvisKQ6cpiyGxScYnLuAERkkv8aQXYTh2YqXSyGwoTVAxhD7z6VmWUmCw8sRfKNhDCrXxZwfrGPq98aAJ2Pb",
  "key2": "31R1jvyEhCZqseMGVRB4pEiRC9HRfLw8DwMC8eJ2EhiELFXujH6XafsTvyh4nJKiHDEyMthJMeJkgRD9sedapCgw",
  "key3": "2spNaTTraoRyAxBokp8CXEcZVzzJEi4VhaALdxj4EBtqfYXhJtLouSEw51WVqrGHPCmwu5S19ASpMeDswvaqP75M",
  "key4": "2yRCvuRj4G8PYzd7ghzbJDVmoLgxudL7FXE816zY5fcicCc2UKgtQoL7A2G5UwCbUm99VSnCwjTgrUoy6ViAnViX",
  "key5": "5i4evdftPH8vWURvTyu6jJMUzieuACYy5riKW4vTvAxxauwFokz3muonNDDq35EXo3WfLSaFBsM7nAHwhNUvBHnv",
  "key6": "62bCAR9Cxu8JVJL5bgrVtvabMgDX3DhZ5oWi63Fu5vg1DEHE5wQfUx8nMHRce695y68LauGXaSuQTDubDZTADETA",
  "key7": "5kseMpiXmNrHwjxjCQcznYYQ6EEmU2MENiuztED6UeSorZS22D3MxUuhPgNeMwf6H2gmLMo5d9CKFwJa1574QZ3G",
  "key8": "3tpLReqRAM4fc5gj5QKRTxhiPWAEt8FBDUAbm3BeAhrGDrZfvhyydUh4wqnUFNKeKBVpPKwY8i2vrxKpJZRvRN4z",
  "key9": "2CTjh537gEKENtCxtxop88S1FGYK63Hd1VVvt2pPoo5K4ZwUFDaWgEeVh7vCwVtRoada8cGewYef1Cau8Yqezcm9",
  "key10": "3Keen2CRF9aruBeaGubjtpFQZf6xpD782jQu2Wb9KbhHpLhj6TPaVbdqWkEAUBBgwEDJDta2cDNwwfHiAKAJCqAS",
  "key11": "5MGUXzY9Q5dLNp5M25WZKNmGj8sLeo82AySdW7LAe6X1FKzN67zuAGTGTFqR4QP2BUxtTJiUNSyKZyzoLrJj4AA1",
  "key12": "49gtYetHjmWwWHzUg1LzTx99eMU6FGveHuccqtcsjeQoxVebAAuMx9G4Un6Z7pCowcmrLbZwM52HZF7Nndmwvk6j",
  "key13": "2YYct4kh4Yo5CBeT2kVCwykyF5RKyoZ8YS4q2wzvsxJadzaLtP6vd6yfQSYhbZ2t2B3qckMBhRx5cTbdnugG4RHb",
  "key14": "2GNoDx8fJ5zd1E6yp7YpoRCqsYjs9DMXhGyhHrMfeQuS4VnZoXmMCJk1uYJ79RwkEqFA97KJ4rsp7c1mTJwApLCP",
  "key15": "3iBzX24SPaYa1C5dMfKq1V9C8ujSdWTJmganxsS8HjPnK5MomKyJosXGKBhJuaMDL5TKPny9fi3LX2GVbmDYymuy",
  "key16": "2HTePtFuoMnzdpRuCPmuwQSMyAuWDm8SWmzUf1mZnTE3i5tBoTLGTNLrW2jmGpFLZUMhKVUsAW1bDLmuX5PYS2mG",
  "key17": "8LeedvXDjPngKpdoBSwnrffLQpGEk4nBc1RVBq7ooXdc1Tw8qQxWxYdH8FMfY1MYttPRpq1jPCR1DJED9xJsqxk",
  "key18": "4vjEbemFwdw5h3bh2XPUp9GA5MJnMzLYbLuibiMbxhBh24MQx6E1eCUbJaR1sM1JcoC2vqz6H6iGAJBQ3wC8zpw3",
  "key19": "yWFPr4maur3AopBAvoxeQ73GQtH6n89WAvYBLk7Amv2bjQF5dbinoxhCCfwfUchueXvxYnrj3g69CbxB3EYMYnh",
  "key20": "4T6tRTX9ejcdpJB4vQhN64qBLXyUW1NDTmjBd88XHgy9dnDJriixfpTuHUffzh5ei85t51WSczApLcgynt1yhxyD",
  "key21": "f5FVS5nbfqj9TePexsmvndeysRRUTPAExxnq55i5aEGExzDNXfNuXkJ1w9dHjzY4nyXkQByc2BV8G9HLDQZ71pv",
  "key22": "3Brp5686sBnowEWP1tmQp82Gon5GBbTBTXHeKe2geaNEsuwVKGjfMoUwSCGSL7grkZsVKqkRMPQdrkh7oH6XDQUj",
  "key23": "RUkHx22CeHKJZ5PGsb97uVQVEmka4gyUQNDoocRp2etqmTydsx145CA3ummAE2gHdBC7yF3AbPTNjBeWAazTbNx",
  "key24": "VS8XCYKCB8JUmxwSkSRvzJp4o5yJ4R4HKPeZsyMnW6oH5XYMQQCfsA7rvcCsHAJybaPnMtpgfsmvZU67PxWVgf9",
  "key25": "2GYRusuvwSPTFRvzS2DRrLM5zyKu67TnQ7g4qGZDw2UR1d8WKxvnabHzYRMMNh4TgSXv3fbZQ5DkEnaW5ncNLrpU",
  "key26": "2BNSDJjqS2Tz2taKhJUwJoCdJJw4Pwhn3gSKeTcnAnXURoL55hGsu3mN7Gwnmh3yqoychLEVGNQVGybQzrkFoask",
  "key27": "pubTp1rD7XwKMcQzaScjy5o6h6PKaG9YqpjJVraJKJjyY6dtT1yG4rpg83Wbnnk9VXZWCRZ8ijtwapcSKip3nkL",
  "key28": "3C4SXNjByf2RUxjY78zRRQsxh2muotJ79cpkdMa8qkJzZn22Ctd1unhdeZdj36pAnn1ixRXFNwH69ApxBNev3gRS",
  "key29": "TNHQVCguCTbWNNGZHSf1gep2uXUojsW5hgGxj2b7MMmKndzm1HDJW5w42vyXft7KRwTJMRx4eESQfcEmaTypicV",
  "key30": "MJfrUPMAkWNQ1vyv4UVpKSHb2mnrfWvZnUHEWHGsxzpPjZiJuUHd9v4yt3rkr3S1QcQuwjdrTkVgYD4H1cBrz6P",
  "key31": "42YLg29giDxbPCSC2CDMnNYLjkUFEpi5PabUaDRENCR6ZwkWtVxmuwotzbXToEhhea5MKFFHtPtoeDRDNpx9Ycd2",
  "key32": "4ZVnU4QJ8cACK14r9DSqoSrAXNzoM334w71V1FaeUN33PDLnbvrRiJN67DSQxK92scqo14ViuKqH2pwHfnSPBnBH",
  "key33": "3RGAuYPFUk1D4bexDnT5bhAGcmRQYZrSQHKE5LjAZSnNY5QCZuSkJQN4bJZfNsHUTtM3KBKHKDTXDUipFQk83R2a",
  "key34": "2YP5Xsfmvgf6yXyRcJM8XfBDz5Q8JwRh6o4r1PLSM7A2dmjAWG9jqkLC9BvR1tghvmrmCvmTCo4x9LbBLZ7S1Qab",
  "key35": "5LVZ9Jf7s8bXUTydRYAm3BRNfLNeydDGkKVLQJF5qAt3Nc9YGKmDDyQih3bkxFk4KnHZXqBPBnokftA7HMi5iA7A",
  "key36": "51XedUvgGZcLFXJaxokMjy9sRGWAVMNEgnzfNsFKEvgkTGyg7MVJaMGu7wYtiohJwvi5zuBa9JseGmGCAm3XdrTk",
  "key37": "b9ydYtm3Rywe812tVwb8BHBo1WiaS3j5HYdSxWYYHiybHVueHuxpDoTDAg3rSGzK4HB2qhHTTiqh3YmuBJcMTnQ",
  "key38": "ZxiWXwAZC6NKVFPjiSNmCRTZwzsSofsWej1dFGykrEJs1SfCe9SodvszJppNYWMVA9nTwCA5TpCc6ppferJDuSv",
  "key39": "5Jg4dZYJa5VyiecW1sHAf2HsLeHEfHpiEt7MwnAuZ1HDVeSfHtwfgsgzRYYNDXgvUEAviz8CdXoeSdSrZZUcXozx",
  "key40": "3jtStSeQAKTxgJnLF32rYUJfUiDy5eYEqjZvZBFXxxCeoA3VHx6xHK99Bxihs8GEuczM7uxT1zAkQw4fPRFfySyU"
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
