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
    "5Kd6jrNwciJRZGU1KuVqzboT3yiStVeHzS81mVEi4aPLSCZ45W75RaMYZtfsziKeFDq3MpgFPNhqtN2Bbi8ojZkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bBk2rJp4osMDSonWQwyskQxZj8HhuC6A6TYXakKF9EpVT8gGhhYMSoTm4BiSLgQCEGUHiMyEQaiWqKioeq7vBUn",
  "key1": "3s9ryfnFBuQH5mFJpCqTbSZrx5J4X5z1VhmQKajWeFT64w1zb5KWUhtXmz9UkNh5GvMrVnxRKemS5QNfYdi68gKU",
  "key2": "5VRXyZ1Rmsr7NNthyPxarQEVR7sRWncDzK8oo9ovTjmzkKMCgL8TgdCwqhqx7at5hS7PHW5CKpToDvZje3rZbuzY",
  "key3": "2CMJHqfNzgFNfWKRj6uj83paDi9HVYXCx56cmc9V4USPiRvVtL1KfrBzxJBhXADiUVPsmUrnyK9LP9RyaF5NYxcL",
  "key4": "5NeXrk9wdy5Qvvjc8o54Bnm2FqFm3zS1rMknfGXc4gxnhMqDUHSnfXFyKrGpCSECChDNgAvDQwtP1WLP8PADRuGT",
  "key5": "2mPeSWj94ugpRzxJMT6ZSUU7DK7adWp4syHNYoG1GLiZ6u1hbAwFSaFw42AZZJo5YV7EURHobu6cGS5jLEGcduvi",
  "key6": "w36eQaXNuPgSg7gkbrNwqRB6bku8g7fCdeCqrAo1hBvyXJMMfNd2chby7soRuNcxkTy9gYS67mKU655LfPET6aJ",
  "key7": "N1HgKvP6V6fsFSq75gT5xM6LjniqksGjSh6D9JpZhdhFJ9hPGR7J6YvFoZ6xg3kr6FLqdGjj7F3ZkprGhXY3EYi",
  "key8": "6mvEQ3Kd8mPPrzZBUxnpjRvXbmYeunEgGFArS3yZNezx94bhvQqiXrFXtxdFQCTGwgfhHWVrA6DopWRd4epKTdh",
  "key9": "4DebM5oFwa54jBap47HPggQ21RWMSZkLVo2Wh54YVJz7wUYrdBd6cqVxQxHcoiRoHSaBEB4Pg6QNvsqEkcdPd3UT",
  "key10": "2HMekJWRYZ64CGLHRWnoCsdB7fbCBdwp68CjaUxki4RmTtpiksDdTUqRFsa9Pn5VkS2aYG1vkG28n1rXSnfivyhj",
  "key11": "2AbdxgF29xSNNMn8ejTx3ZicP5zEc9wsHmrRrEM5jogUWRSDSf6ndiaNJsk6F6PPbhmU9B55trYQkoVhccbPPC6g",
  "key12": "3LE81KtNNejGekFe1SHZopck659Ba77sTTmvZqZ2nwt7TBAfq6kjmcWXjHx7VpCgTPYwmRjGRQBKqt7RsNkBWyFM",
  "key13": "3bGBa7dVnvr5kapb835YRfZ273jqBbjUFVUwy6aQqbaKurZgBTykP5j51gMpYnAMLpKXUa94gqXtkoefmXSjc81L",
  "key14": "5GafUEV4rtzHB7Qn3phP4zHTZMZce7EuZJrqMtCc3KEh7HLKchQZP8pVACHcxwEm4AhTXUX1gZXFQLFHJJzVr1gi",
  "key15": "587eqjHEu5SoFUpTD2FFM6ZisYNiQKgRt3Skp7mqytXAS3X5feQhVaLNrqHS6jf7Lxoq5ZDru5H66nVdZ3rtdQU7",
  "key16": "4v4EQqvzZrGanXsw7Q98mKaiSiRJ5XBw9P8meqovYXGzMvhpXryVnmbSctuUv1VGuYpyihi2rpGAkc7mhyjKbEvN",
  "key17": "5PK3BZnSTeAmLZ6GT9Wn3RwYMoXBt9PdHmG4MEyTb7seYMCKzYrkk94uyi5Q5KYhYmRNNkLc5RbM2pFnuSDfzuLZ",
  "key18": "3B4qZy1j4nt2syW4khHjR5MZwup5iQUEg1ecphpTNvBpFVf6w8JuhE58BFabHUSFqnTmYGdiAQH2V3idDQwEx5LQ",
  "key19": "oiBvRJFdUr6bYp6dj2tR7VoWRZX9UpNnG8XiTxNyhDithiCGp4LU4uYZCRnWQqCb4JcAFTVzTeKs6G21L2GkYp9",
  "key20": "2PrLP9yCXyY91BaMVard1QLP6H6MYGycXbVUGRJuq2iedYBtBB8KeneYzfXWgyJRcFdGtDD8Qczz2FmCR9fFiXTt",
  "key21": "k5JYMSo7zrjVA1kMd3fEWRDubBDoZA4zQBhPddCbrBfL7Dizcem8VZ5LCUKp1xned9E1BAzNDPgJeTV3gQUgFig",
  "key22": "47BTpjKA4mqN9Uzg6Ru86BGnJpGK5NjUk9JFys9mMQrHVReVKLoCA3FaMnd3PZMfELtLX5G1iU4ueTPkkM61jzR8",
  "key23": "3LmXxbn4cWtHsJiHq84YbpdoT1WLKDG1vi6eMbuUEYVkVa2hoQduD9CPQiMuAJknX8LFoKLTNHtSZQqaAymKZ5qi",
  "key24": "4MN7fxDviF1Uc4DTyEQLERgd2h9dbVfoATVuoBFwxs73MX7jfhBJaBc3UpcrBELfr6d9ypEjN4FhpmbjBE2qg2WC",
  "key25": "2dza6DVgz7dyacMxdR5bUsAUyEWA8mY7nUuo7Li6d6n5nz7rGnCxvuqyLKm7fc37x8nu3cyTEZoVfSrtMFGxfoin",
  "key26": "3KaZ3YHc2URmPHDPBtb2paGW8TBvrJpUHP2TEGdxymhdAGMHqRYnV5KtuXsU1JmkVrXVjkkktPe1sLL3NeD5hNz3",
  "key27": "3cAefCLjKNqMKxsVbicXiX4HcQXsjXj92D1vkxuadpkfX1pBsfxLSJsai3VKjwcaxsyhcm3dKZWhB9CyZbRqDhih",
  "key28": "5cNwBr36BPNBPr7MY8QDj2q5kJ5gqb9N6Bs3xJjRhhpMnQT6WdwPvBuoAE6db4CNbC7zJPoNWSptFNSUH5Y1w6F8",
  "key29": "DfNUK2GHXrn4iEqHMQa11zLDeCMf3AcJ3ApC3MW5Gtx4L32J7pywdboepxLRpPuJ2MEjnww53VThaE2CeesURPG",
  "key30": "5zEmGhWcpesAQoDc219tuNAxjRAE4neG3e9dZf3raFnY5dLEysLtFiW43nnqcb8yUo7CBfSDSnk4beC7ggor3Sfe",
  "key31": "3GXX5bam6JdMhPkTBiYcSJTs46UpZkK3gUVJdJZq4r97LZE5JofT4dUHQfo5bFgE64R8ojeA8b2VkC8tgTB77SPz",
  "key32": "2Jrmnx8LS9rgYmwCi8GTrjaK5FQ1BVrfRX6HT45XG76GFpR7F38rj7us4Sn9rWg4NLrL4DE4gBBDVvJCLXegtwZX",
  "key33": "5ZrjbE3V6mJFiRqsb6ohv1onJJjz66vEpp3p5CRFR2GXfjZN5Z6hoLyZ2F6zs6BFWJ7efhSqRosehkbC8EwQ2iPh",
  "key34": "49H4Ru7y8jmFA9gWKPrS2FZXa4FJhGEhEK4iGhNBYNyZ971cNE71Jbz7U78A8zHxNfEShfei7ycwAzv3wZycR7zo",
  "key35": "4bmtsVZPmS3GawiewaEV4MyWRXkd3oATS6vUqfkpp3Ugwiw2JouRxCdLmekpmsAETrK3cKhQ69UmRQTpU1WFJZbF",
  "key36": "2DXiuPUzwgCJ8VuFdiHjwYP1XRNhvu5CQnCK76SN7zZbTGGEzPneqr2iPYW9Sp2JaAAmRRjLDzJftHKw2HTiDkWc",
  "key37": "5anK4upeJbrVw14nWwSME2RSz2Gfcdd8UESAg6LPCUcxndZX5GrKhrWaNb53T3jhjEUqFVcoKEvC8uAUcowoBrMf",
  "key38": "5ywcaRMQS5zaA7nQEL7KsWAhdHGqXRMuC5iFJ75NvCMhpo79pamAcm136NeBdJeXZ58HBuJ8XCZvoRLbyv218tJX",
  "key39": "5gB7ZhJVvFXbEM8gLMbWJzdwhM93RcWq5bcSjUYXy6MYM6mVSCgQA7BoS3Pm1ieHoCbbgpsNoqPBVmL8keAQQJFg",
  "key40": "4kKourEgemzFcfFAvuzYrCvsDpfDLjaXW9qi7uiYCQrrMZuyaKFSm9jZJ6TSzoNz4yVpPGc9maxfLBKjeHRSurUE",
  "key41": "4La68tpaTaSVh6awrwWhk4dXn6KX9HhMe3s3LexPrg5YDYWhRbQ7Zab6g2kECr3neXdvc1LRTKS7DUsucbNG49DH",
  "key42": "5Xks9yQUBeBghaGir8yU47kZwqnpMdozPdeoJPRwwiH94ZvnPFtrnc4waDNAtNdUeHwFhLjkGgf36gq91GNv3Pzu"
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
