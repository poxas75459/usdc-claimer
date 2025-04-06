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
    "dA5WQF6s2DV3mpUWmMTsfeq224Ho95D97VvEWLNdDAEhXDRRqvMW8RTyTo6W2kPvVWWmR7Vdr7gRJREdVZiVPSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KnDQd5jgyVhpyXHGCn7Ssx7Tqfr4GowQBdJWeu2zfgm3Mv7Adrh2pkjaSK6nJ8U9mXLmyopQEPzk5weRSy4j84G",
  "key1": "3aJRAeWA1F2Ye8CKmjmMgMJYqDvUj8XcorH8CXiat2P4ViNp3ZWv8cK78i79MQV4SSjfeH4jGz9FX2xPtbDaTsoE",
  "key2": "3HZVsXxbEbksHnmFgkBPMrsBrBLDDUsXapFAcpmfkGXaRKBzKS8nL3f92XiTCBDmjS71foi2zNVh2VMQdHN8Ef35",
  "key3": "4kZdPdD9J4KKD3iChRkGahqBLpc3VgTo26rGdUpyEtS9Jja5yB2pEcATrpkw7cpK2EdbkDFjGQtNzrEAVQq2kdex",
  "key4": "631WD7bgmnFPQmFhiqQgxdiMU9yLcWn3iV68w3wCRFy9RdLWccTY3YGjy4Z1tBPkYc2SML3W4KZo9ZFq3MqWV7WY",
  "key5": "38UMhwP76RoWuw9jbX9FHAt9crYefKR6DX3e8STNm8aeHxgrwAmsifh1YkXE3bf7qTqhupzQbvhSSBQrkmrd9Mok",
  "key6": "4Vr7LmYKm753qinrJwb9Gncp94ArmEcx3pvuq6WqWUUhn3pXRwYnM3apMQFEiRXyERyWRzmdSWobxAp1WrbyH8Er",
  "key7": "NV5TM59rR8q2rBa8G9qgUHqq3ftyGq83WXHaFXZfEu3T7teKDCC3dmU72F8EjuqJ1hMrTahwvcfyfumziLYxkW9",
  "key8": "okQLE1cscRz6DoJhZJJa2rTV8SQRZ5HcTRxe8CRQsoUfHZv3rj8D57PqFwm2B5T2DbEAtSaBxRJzBUeNmsEoWYD",
  "key9": "46xVpA7rLR4Uhjn4cXrs6ptHEAG1UjBmRuPxcXubsFGy4BripigLvfkKY6VfXwVztriKxDvwmGBMmH6GNXRF6vtK",
  "key10": "4bfZMyGZURxCSys5K9d1TAABCeSt2ASZxQbpujS9gny25FHt4DRPfSN72MLQRZKsLabsYMRvJT6vMet7vakSpnoy",
  "key11": "2ErPRaJ19F6kgwcGjtFXjVKnRes4zgDLFF3tNTQXftkzcQPvwpXvnFWtZ6ohEX5X9zB1qNQGfAwRT5afBAgjUCpB",
  "key12": "23dWEfbPaSU3F67S95KRaLjMYZu4T77XRHgj2295ugJikhocL5HttLtEKF3YyuxXNJ9jbaz6Hj9CDpgDd6KvDGFt",
  "key13": "5JFdNAKvubS4MTx7Dnk1Ryvmd5vastxYCBNdeQnf9RRfnmdrrD3nHaWDjX2vf2AFYkTMMM9xfAyWsLqR8YDC9KJx",
  "key14": "5LSn29xSEV2zR6KKeGcp4NAaCSfqjDQT4wxwfyJHtBHiHGNcPSMVxvs4rptSoWuNK3sDHAgQWYHFYMdZB4BpDAzR",
  "key15": "2ve29PEAmyPmsbPHk8eyHe6EN3Q51My9BfQxaZpsmiQeqRTrPZd47z66x5J3sKvJuZSR2oV8V3Z8wCQnV6cpZLn6",
  "key16": "2ni5k8rAXAimHLtnNWxZSf6z2wBQHtiufXk4A8rbtgtZFVVv9mHPWQM1XwF7RixUk8KNdN6JmKfow4g1KCZ8VFWa",
  "key17": "3ZaGiX8id5VhUPaMwQexkjFg4FMvDuZyyPVAN5JkQkUdFLkFRswmEtMS358ijg7uBA5EDf9ckgP99NM5VSPnxis1",
  "key18": "3TXYmWynp8tNUh8VPmLd9HYpywWiNDYk15hpc2pbc2QttvsgirsbehjpSPsLiiZGAQgRqsVvorBZ3LUGxXPCt7J",
  "key19": "3wArWLC2bJBFzHn4Yw8UCjkPwwKWU3edadoECmroVa6h1qp59YyH7bK7heeWE3oYHhDVRcYRr4cy8qqTVfahDzKv",
  "key20": "hpFAc3QncetL7bLF48LLykhojsCdmMT7VZgcXfu77zkUH1FPWd83oxbPKKfMs9agPZ7kwqYpMAYD5BMPE6MvifC",
  "key21": "2bdJLQCXDQ1U6Tf8zf6LFxJuJL9S7KFBbGfNz5m7Pf11WEy3XnpuZtzay2dbejvFb5ekb7YS6QSmZGYfpjmSLdHk",
  "key22": "5rvWqPDvMtxaCpF4b8CgkpTSwt7dad81F3UP6k7zQNAeFGyEcJvjPwbZUsq9h2TNKcVP7qa3rbYksL2ugKF3ojKM",
  "key23": "44PvP9VEZA4PG1Y1sirxm6XTE2uAwYwk9CjLUbAgmERDLwH4yr6SZDpVqUMNK45TDNCK9QLTaxYn3GVV839BuiD7",
  "key24": "4NdB2A4sv14bUsVFbhycBpvbpEftU5zzvGFZ3uPCfy2Vtw8yyH6gbTnmsh5Qk2zGSVYiAsbGRJUGuK5WgLYwdsUA",
  "key25": "5qrHkD8KSRnRm8FiMBPwDxiBVDLEztMLdm9BNH8NGVCtu2kNoh5xEm4mVYJsy6YHexwGdCzQJ7ryS6FG7XY3gv9v",
  "key26": "5aWMRKmdEJ3mFgbZx7EvMQtsWhbPHdSUL6vmpGanTwVT7F2uENJTdVwxivGDCxV7LtN7VQxPbTEnfUkYgQgEMPwd",
  "key27": "4xVm8tToHKpacwUwNm6B5DToPAFsFJAJ1UYGuw8TWLyFDWxTqzxbuzN8fihe45QfLjpRyavD1GYrEWhddSPwA53B",
  "key28": "21J4F6FiK6WVt9rL8AzBiyTGfkknJVt6JPrPvcQmaj4UmgRAunk3JfFteD2KEgBPweku1HcinyunQZh8jTFQ3fcL",
  "key29": "2gpB1KyS5wkWGA1D1PFoWvWAKWX9Qrz1Yyc6B7omZj17YZN4gTfXUmaiMSmgbosTBzcRqFmtwCsU2zBnYiPUUry6",
  "key30": "2T32HQuFPK7s4sBFBDfLG3ZaZ969XwYJKeTmYmt4jZBD2n6vTQ1jpEnVGiSPEjxrpnLy3rHiqKR5TD8zUwMeD3id",
  "key31": "4xjxxfsenFeGU1ynJjDjinND4Y4j6u4t6jtLb4gQ8E5HJK2gnpHML9iWNZ7QMDFQnn42oozBpxhZYg6unY2SRzuN",
  "key32": "xVNBsa5mT3oYA6tJvt2RJqNBsFxMvtuCdBh6T5T8Ghbtjc54Rh84akf3gdw9HQzFMDsvvWHhecKiC7LJkrw7zuz",
  "key33": "4239zKDfZKrcEsGGwr8qUhLM5pDvCmf19E4oyXqv8BBZmtdo3mFDBixgtUc99MzNpAZAHjod6DNpnmkakcdt8edX",
  "key34": "2YiLCHzTrSacp1dEZrpNh5hP3uGFrtVngH6e3cA9tDBQtxr3eSvrGJJ4YH4okLbZ6WGo8cehovHUNqreXGKdw3tC",
  "key35": "5sshCnTSt8ouCrzX8CiSxUQn4mtJeFRpzDTCqfwTa4vtgrGwiwvsJpN81sGz1YBK1VnZLGWWaeHHRF2aqZgrFLfJ",
  "key36": "5XKMToPhRmhVk2MERQQ8TcrY9pvAFWB6s9xiNw6Fj3uxa4xGfNzh4xwHUT5smmF2XR6FyYkSmXWJQRMxouSXnoeH",
  "key37": "4Mbc7eNDNUiQG7TA7M8fA1RHFHMUmpebvpJX9Gojqibb4fe1Xb34KSuwPMeb7kBQwnKoqpFe1m8a6CQUUKkt36GA",
  "key38": "4PzvHofGrESbTWzaW9YUXkgeH2izy37uizFkEAsfLey3GSNmntHLUteMuqiFhhw9TxEJdRs8B2Kyv6aJnnnV3nMW",
  "key39": "4KBye5CCRWgriVtzwRjvFusiXdYkCkECusJP8Nh5bYFh71fuXSnXS5GysYWzyWFVDQpGGmaAoRWQ9Q9dYf5LTpGR",
  "key40": "2kG5qR87ddFzafhXyeHANag47kr9xUnbmwBquFjfqeTT4Gfer4R3TNPfdnbs8pDaZgQBeWYthAgwCLCXMsNXHguv",
  "key41": "CuokTvnpcbHJhRqDAWT8KnzP4sv2XPHdefjAqFMP6PjQHXvoQthkaxe8PWG8HMeky7RvsRuAEE5AM8WYegh3GkA",
  "key42": "4Y2uG6YXvGukKfVDu5rBSdnmPYAnABNWZkefJ58FGL5mSJZ6rwnwLHjWTb41NKV5dizxpGiNx2FHWtrLw5APVWc2"
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
