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
    "4rKvSAdv6zBPnsuuawA3xQBvBr52NmDFNwRiU2wfi7Eubf8iv8vRSmkP7QcmaUjLhNP8BDoeZsaGFgE9UyRH2kVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C7kqvqAE6dU2CaU1HWqo1D9bZ2sgVJfaNuW2tMFHH6MF4j5faVU3dZjRxnH4ZdwsVAdzD5KenRfH2Y3xaTgzvT6",
  "key1": "xDHJ3nQf29GKuM5wBfuDFkdtqv9UehMCHvayd7qQqhJXcyaRWxHevmJL9qWTMpeKZjXM8PjoLxG7gd3xrMNNvH5",
  "key2": "3pMLJCK1YfyRGr1Qw5QfVV7bF8R9U7FDfLUPZSydsU6XEFCBfv3wciQywxkTkaaJCtBSGCEw6D8he8GAhnSn9dbZ",
  "key3": "5opkSBiow16JDaaUGzrvy5MnnqGfDHbc1f58eVHSdYzTVy2dckzWknLNLLJPDSRzJbpKCPa4k579vWoHdcCPqV9p",
  "key4": "5LkxrQYomjGA9ZBsBM4hDh7VJhd1YwZ1GWX8q145YnDM1ZjwKuK9bvwPdYocDrpVtD6jnptnQ8vu4GpSDx6G6gXg",
  "key5": "43oMHTXPhqjB4htqyX9QUatoLWgCoJftaUUb26TD7hNVHAkAdjrrNWNEBk2yvkVPKYEWBv5h1WmYxrhnkLpbXMqd",
  "key6": "5dpKgnzvWwix4jrxe6Jc4hnuHDSQ9h9Tfoac81mZKrkRG6NzBaJwNqy7oWS4h42r1Za9da9oR9mbnFxfcPVQ2h9S",
  "key7": "24PGUcwYPHQLC3k5nrDpLTe6i9KnoeLcoBgg3whq1G7DdnBQR2qQXzsHM9Rmj6axGdLh5GgMw7vyVh3VzJgbLDhN",
  "key8": "2XUcPGn7jLSiJzJ1av3kcKJSfedaThYMBQ9ZENv4o9qSG6YtygEQm3WKvJPr2qjfyK7aWsrBNFotDgFGzzYgnw2x",
  "key9": "2bW2wkaQ9J57NTB7NJTnG1cT4FDUy1tSm8jePWdYnJaq7VJyYU9NZpaZnHx9hS3Kt7oqbH3sdgAh9XeYzRuhnitF",
  "key10": "5QRjgxbN7BZR2KbaY2D7g3An6TmezU7stCPPWLwvJsNgDy2N1gQ21Q7YP2LJvfWbwomNrQ9Qmea9F1iiHDXZ7NEy",
  "key11": "2U7YysMiLy77WjoTfSiQR4vx4Mi1YzTJooNFrSwaorGMuLYQXuQQ1nqJ4SbizHa8Buy1ytsv2HATdXoqvE8fLPgp",
  "key12": "3F9wXcjTcrRk4tUAVMX76brpXSpzDpoE5dibZBdcQZ2kerkwfty8MFNhrZFAAtFbuy2Z6ikcxBteFBRTJ6NjNtYu",
  "key13": "4sr2UjH3YokQzhHT4m5WXpASiwBvFVpL3tCA1DizXeH5fgQobA1adG4tCHSAXX3Wca9jFXrB72hriUFFVecw2DbY",
  "key14": "2PLUAXerEbQhsb638dmv3FqshssFGkQiSSnhVPezAHbrJhKE1CtCLfQkht8KiVnBjYYBpAy833FUVYbutYNP5xoY",
  "key15": "wG7aPAkJKRWjYAdDoDQ72fUEfeGEBQFEdtZSUxNrAMWD2obfgu71FdPU9JsGM7XVA2z5c3EmaNBffmj1Fxnz9QA",
  "key16": "j4b5LduFF96d3f3Eq7Axe8bAw2CALEcc7nhgjhmQC5DjjtXehp2U57wZhLTN4U8ozVEjK378bbdNvJ5jqsss6d5",
  "key17": "5vcV8XufCzKGe8KEgcPiYL5GvEow2oZhs3PWXcATeWxKUXwRB8q89PqkvB1nozdqqrAHk2ueurt32hv3u2viPhTk",
  "key18": "5gvX6R1LguAueGTjvYbZ7yW9NKwEeqt8Wvq9oeobEYtgWa1mNX1rtc44pY8k3ZBkjGGwJ9KZrLG3dNVTRH1o2XRg",
  "key19": "5sfqbpvCxpnhT1khS3tpKGEoRFy15dA985pFWs4Q6brSpPDk35cLKF2pmn2dRNHXt2DRmTW7d6kRjhCfWYoB6Ut9",
  "key20": "2JwjVsj2HYwRaUDfmrWituHS5yCLit9Auw1ziXPgyeFiCFoGd5CwZqTVQSeA9ht2aU9J655rbHGSkzGRs1yR4rtQ",
  "key21": "5MGWhZEhrnFJwLowLvTYA3RD7fmxMg7kwZV9nExQyoteEeiHP6JpCcKgNiXkHRt8XpdKUDTYbouAndxvKg5h2QMC",
  "key22": "287B2wxKMzTQ3qk6Zerj8QkTJXWYb4ff4mhryrZcawv2KkbvFXz5jsqUkrz1KQamnxmN86rcvVs28RVXVK3sjftD",
  "key23": "3JDm5ndPTjpRW4rNMvvhQ52ufP4WWbSMrPZffoDwJfvtzoFzyoyrb9S2Hy3fg8CgY5QVCwNx1t78qzbYr2ENzeEf",
  "key24": "4XJWcx8EeP2P94JiaqgLg9Eudv8xVVQMfwbamNE6chN74c9oWx5oWxP5DWg9jDKnpQw63kSEz1vmxV8rWMhiw9Yg",
  "key25": "LGHK1tfECrmHpLdiEACMdfSCPd4dP21bqnHpqSoFLUWheoKsaKVU8qPt3gmthjKtQbrSpyQsD9UXrC9kEDsUkpK",
  "key26": "217nhs98GFATByjYRufaT5FMCEbnku1xaEXSPyhDdu9zAPeCdPG51D2mR77zZPUoD3LXoyay9S4BkWYiQruuraEp",
  "key27": "szLZ6eHLiGpVx14ZBEnjaTbCVSgwzcJAaiAYUGCE1E127PzFL8sePmvzGPaduc7MdtDK4ZChmmbtN3njoXQDPGa",
  "key28": "2Fu2i3RnH3NoRkxwLHrD3DNN6HQ9QAs88MkrFtRAmupJqCdkxACuNwMVbU2MijqBjja862f2GFrNBne6p7VoADEj",
  "key29": "nXQCc9EVhueXfJ5rvcUojCZXyuvv1vk2T1NYQ4YoiqxA6nBaEExAvGTyqxW8FX17ZTsjxqvShx8qpcAXT2EozuX",
  "key30": "3abzxz4BjjGYbv7jW8rNGbVBjdU3LLPjMiGmnFGZRuEM3yW3QoAnshBB15QEuTkeg1QvQ7jzdsWaDUDDmExMgr1r",
  "key31": "3dV1NCpqj4RytpGBQXm1Ug9u2873CRdx6jGLJqwJWQmcWMNHQBptFTpBwgme4PXf8y5xyYBf4L4Z7Vdt4MN28bue",
  "key32": "4K9f3pNCdWzdCA8GcobBFWQZa3LCdbgjyjyPBh9qfhmMnwR3fUF9d4EtonaiLs6hgUjatbQoyqkGKFZxx4K1u2e9",
  "key33": "4YM2fnwXUr4hZhy5WZx9uRMhMbhy8TbY7k5RjzVs7knhcZaxEEozUQGwS69yPLY8cKAZnKq1Ga9Ujg91jrAFh5x9",
  "key34": "HK38sapHEDsQP7wvnqP9bNHfpaasuL1GhFZ9vFm1uAaz7fEDoVYTjEPz5cSpwTv95rnLjFcHSGxcMTGgWif8ELZ",
  "key35": "5JnrrBja61pPh8jxC1VDFfoamGR6hvgCKVXcCjwSygEPE1bzDD4iPDHtpERmsoE8xZYnNjttUymAH2BPuohLyPBs",
  "key36": "4pA7JybtFt8Zqy7tXgEhmVM1mDeGRTTjDquLeLvmnT92GovdM47YPuiXpQnZrM4CM7mFfQ2LCJh9d2fEs9u3fyay",
  "key37": "2WyHjPR5BFehC3rVEQXymdQkCVvjkBQePYvYAHDj2u5d66cM68qrz2FazNFjmD9MWceiLQfo1rv2L6GUb3YAsJV7"
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
