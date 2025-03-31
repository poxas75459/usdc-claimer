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
    "5MHhw2YT7WojCiq3vFUN9vSNWv7yG6dZXVp22xtiJBR2jA8ToPLyjEFK2QLxFFbetJXzFEEHJBjM4Wqdf3tUWMRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HNTHt8gJRjrt5wsyvLaJ44NzWcyvXFoc7ZmY4JSSaukBo51vVhqpPcpyKJTz2mGoegAXuTQJdHC2BytCobWKwpQ",
  "key1": "i9T2nBnjoghyHCa3gLWL8qi3LirnFYrSDLcB9yWQUTvDCBCNrU5AmyA1zMgee3CrUmncFTjR7T8F8ddAgSKxPyC",
  "key2": "4E9mYJtGi8bkvvMj6tmoHjnHYNQcuhA6bnN8nyjuh8uVwc3mhQ3EQQ3jB3LXzSaJAC5CL2rSL7nauQL6XfFjKy8",
  "key3": "2Yv1xX4g7Kug3wEyi1ePZ8xM7WJRkBYEPTeVcr7V9mTsNuMPRgXvWd3pz1rPwbpCCEmZZDmb5CnDR8htZD3C4vg2",
  "key4": "5ZQQNmbmh9owssU7qwz4ZutPbC36538AUWWr2bc7sL2fVcX5ibsm6ETtmgTfxb3WbsTAP5TR53RwMoSH2sg4bbSm",
  "key5": "3VjTaDre6BXp91p3pdSdm8kRkHc5ZXKgQAh4E7FgkUyNZojdak9ZBDKHe13cU6nHeZx2Xk8Srkq1g2UPqAUzE3qn",
  "key6": "2L34FTHCvGtmwsWHAzRuvKfmDY78oFcfNr9ipowUieDDSeuQajcb6NS2Zc7rgkNvtQDJKNUgDFSYktKBmChs2Tdt",
  "key7": "RNcny5hgnwPNpNsz7v9tbbxZz71Ehe2pdk5qBo3VmSr3EPf8XPVLDn158Ui5tcvRAWpVsozDZjBATHJKFJhkeWx",
  "key8": "31mdVarVm8Y6b3ZLja67EEPUmxRZSyPuqVtaiFQTsUETmhecVKEBvxvb2Mgv4Be8GtaE5JMXxUYXWWekp2Qs32zd",
  "key9": "5Bv7zumSgTvezNkMZrwz1yTgLsm6FCCFi2qeCVdzy3BGty7WjFXH5Hz2AWy35jfHJv4qmY8f8Bps278AD3LQYa5w",
  "key10": "4Cma6WhtxKtxKcp3yCv92af54KRqGtNYvaP87FML9DuaVKVMuBT97czeU7kAfnVLYhjuJdHbwgEzcpP18sjN1GbS",
  "key11": "2neN1kcQeEC4iycvs7nqLkMKux52mz9RUwcf3ydQANTQNhF5R4tB7v7ZjFYGnwB3ABFco4Khew9EAv3y4xaq532V",
  "key12": "nPwgZMCYUw8hNhrNgXAUFJWu2rccsZv1goTCfkQrEw9JGgHDhWdFz2edUDkC8sAvs7pLSSFCSvGCBW7tbuciDKM",
  "key13": "2bosXigP7mkSRDHSqDzsUwwepcU5CkbK1mxV3Q2zk43znahEZRDENs4s2NEYtdXVtgDG649YL8UMxSxCuouff6kT",
  "key14": "3obhAunwY94jsnWHaVUhQFbdsPqsebBB8iyp1rmBfS4GA2MfG6vRim1TNqrxhLRev3dJ1UmB1oMu1ifC9Vz84cvW",
  "key15": "5ZhXM1hW3QocHjk4evngi4HQMtuiHCkGaVayZU8t5Gki4mSoKztLhLhas51LWPvPYKeVRTtxzmmrCwbWWjT4bQus",
  "key16": "2AZUTsUriCSL2HtipBbRiHAdTQDHkJhcdTQYDBR3Qd4CpSf64jLQoyoXxbhyTneWSwRYVgjppXEphKc3d2RKFbdj",
  "key17": "2ZY5m1LMero7GLUq9eQJk9D4qR7d2336qFZeD23oxt66P4cBDzT2GSWmFJ9aiKATf34EWdG5fEYw1Jqimu1uMZAK",
  "key18": "3iVkPVXGqD4h2a6prLDNu3mDiH9ReDYjbbVvywoJqPSf6AFhi1sx2JsBkq9FR3qFjFF2kN6BjNtUhN4J6ax9GrTH",
  "key19": "4fTaZGarRMo9p4uWNBLsAfeT79Zx3B56AKDzuDTjKE43iAYWUv3vXMfxhGLq4ZbBypfpc1BR9N4qNoV1jTJhNZms",
  "key20": "4cKomPsFsppps685gUiZfGy7MSFtUxPQ4vDeL7CZN1hV7s1XbkPS7bFQhXCTY6QEcR3SU8T8EnDp2jehcpYAudrd",
  "key21": "45ikEtXfegT26GhdK6ybVAJc1kCbhPCKmdfKxQDucAekwy4mAkLqoHSruQwEpYi1L6QyBUkd78hwXSuJ3DninNJ4",
  "key22": "4MVCyo4jABctDmoFisQFr7hogAai189LWfkvhfXfG6NqWeNwfx3AsJv1jAGknLDJRcaEArrY8dsJrATuXVunvMBG",
  "key23": "379sFoym2FVYebkZaSuT3SMoTZ8dtoNy6F7LQ15dQ3bBU6JD7UXyhxCCJaokiZXg8VRwhUiU382WzJp1pRFdu5B4",
  "key24": "2UrD7T2zRrBSLXuCThW59WCRVyi8KWmvwLg3tsnksxig4QdCa1zTG5gQnuCDwcfb7a1gmnBUGqCiHJNhdBGmnYGc",
  "key25": "31kETZ9J76Xey7rVbsMLRVfGKDmro3o2xLzTH5f7spNroVno4CLaMiVammxE8NDwv3MmzMRNaHeULPVLsWYnLeEu",
  "key26": "4NTiANTkJ7g99Jg1t4V6z6yg9MW43MxDX5txX1UcqBoECDznR5y5TP4kEF3e2AKMkQkZ6rKw7P1VDkBHnLtFhWo7",
  "key27": "3m9fJ3frxZS68z3oY1ggf9NoyHLw3kgFZzKD3xks2t2fuxuhnPcPZVJPpBg892Tov54Kt5uULXns6nYmqXntcLqu",
  "key28": "4RA1Xm3zTQpxFvDbZ5JW137YdvxvwMKh7VamWbpzDV1hdD4AdvPL2EKQ2xoeW9ieeD6cYGXV9we8hJpasogkHSVS",
  "key29": "66YhQNpfR44gS7DD3i3zP15CrRbAS9uiqvd9XTVvMgLK6jyMG3fNsizStv5FVKz1nmE25vTKpFhPQeuthwXUnsMo",
  "key30": "gusGHfkQn7Fy21MivCxd81LZ5TiGzSstLVKvEpSvkPudFGtAE5PJqJDJcoBt6nDbTweJJdv3HZWKmAU83yotH7Q",
  "key31": "5yYTST2NJ3Fk2R2maTYpoWJ89Nzt2ijpbf7jGou1nbem2LVoGn15yETBEXdxvYKH4Rvs3wseA3dsjPmXb5uFLz1A",
  "key32": "3aiUupBSwAowbXmjykeK7AgQ3ge78HbWTJJf3jGvyau7hWdgdqUAeUC5BYJHB5VSk3WVCXXcpvFmyaTpFptGwY6Q",
  "key33": "4FLNGZbdT9puX7egPpWmb8vkDXrUGJir5rraU8ZY8ntrVjzM5xQboxKuiZVfoTYSbUxCxA8rCZKrAKhP7YswTEwu",
  "key34": "2FKf2F8eTo2FU6kEoR9hQAf4iQUYUQfrU4LDcezNUnhD3GR2tKuRcForu24CUqpRQL6STVJdadbNTHDKsF5oaSee",
  "key35": "3Tq7NXZmNrphGajT75AhWxayeCbrD6qx3exVgrwfjbH7UYuwuTR5HG2q6GyMMKfaW537kfidbKDsWmzFsz3BNk7U",
  "key36": "3A5EJfRVL3SmzCaHqdx14g6sQgJHX3SdMa6JVv1UaDr6gofJmDm5LGqy46GUYB2itv3KtukD8CcGfN6g9HEdBx2A",
  "key37": "2GkoktsykMjXXHMwgq8uPcE1eqMWspD7XCgV6L14zhPi9RfXbnNuW92441a5KDrKu32dTHxtm53dMVYpsYwBa5sm",
  "key38": "4frsafDd3wPee5whtBZvyjFMFZY4nnZLdjXtjDaLharW2eEhhEusAsKznYBnsM79nHjdaHzj9oqA55hAenFCkefd",
  "key39": "4uN2TXRXBPNmD5ERrTwipAqJzzQrhHxo8Gr1GvhfFXfErzvKjt1vQV3sivnipnU8aMURdRkNzmpq1sML7q2dH84s"
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
