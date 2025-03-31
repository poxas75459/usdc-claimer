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
    "3NSXjV7GUnJfUC8dKe3LuDNEiMD4684VXsAowNNRa2A76moxhn6Lzb9ECKH69Vgm9dy4czobAHpb5avnGd6ZwzZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NJF5qpiZWpUnz2VGZ7GjG3MrvQSAsU8NQEpZ7oQHe7scC6wyRKYg3hph53mAfdq7BigDtJtEwd56HvFJziGcoBE",
  "key1": "57dpx5qcufsur4BqBxFDzRSG7iN7wJBCG1XQ8vsH4rBF1ePiH9WoYyYrKB1fX6wjvNxTSDqqLGKAmfeGQ1hoFRhS",
  "key2": "62E47csdxaRyVzh1QKqzWWRXhwyzfVHxV4z9eGqTJMDZw2rMpssZtdTcyTzs35qTmCT6Qefwz1g8FcMNoj56mw5w",
  "key3": "5A8rbmgc4FY5aUqP3N2K9VKQbPQMdyWaVG7eg2gyKyLp96znW9aJdWLvLJZdNEQf1jMRhNfzT8npkkXM17MVLqz9",
  "key4": "2WhNa2DCgHn7NCEvshGzZucjBBJKAvmpULJsEVREnug1xCopkgmph4PYNxDu2ZKfKazLMCao7c1EZc7fFDHcM5RK",
  "key5": "GQsCHmGCE8AXuwvAj2Xi68YTm5JcaG5gUBUo3GGcdBoGVCd6fVhwcTzzhyyKe25NpjGkR6zR8FABhXbq4NG4dc6",
  "key6": "56wfUuwnBf4qxcWxCoeDVLuQFGNzEbqXiu4wTWhk6q4TvmVQCw8qW4gLNB31UAmCkwwCgbRA7PaEqM8WjJPGAyq3",
  "key7": "oycSorzwDKzoNbXdCAFPtuakHFzqupdyXLjz4rNU5xQvYAwdbugv3Kx6hsNpsgug6wKmb7UFrdGwRuziXZSBvg8",
  "key8": "4qpQEeEH6Su6rzQxoqPfaJnqhmDbtssvhsAsVPtoMwwvF6bew7QVFpjwwo3b9aScazo8cvNt9QoZdrJ9aDJBHML7",
  "key9": "JPDJJdpmzcXvmPGr6fLGGWHzhwbs4FwzhfQeh3j7GJfpKkZJ34msi3XSzrNBftGRYprML3CzXMz1Y2Jh8jxW9Fa",
  "key10": "4aFc4qCwxM5ZnGZekNvi82gyFpuCJJAFXQc4aR6JftKz7na6afKFkX1YSvq7jzNwRqBS9bhtGGuQhL55P8uGM2iK",
  "key11": "5BoNgnZd2DtFGej8k1mcoPy1L2DqA79HU9sAzqmNyyaNMvXRXLVtZeJKXYEbGJ1Up9uP1wLQWA86TrM7zZXecEbw",
  "key12": "4nZ8knJvVoz8ZYhZaPx64iQ5ED1sEsqN3iQj4C4V7zMz8aVH8uhAojmtdH3pgQkt7sH2WMcLg6N782SPM8RNXYkX",
  "key13": "4oYaVApKS32Fe8cxu2DhSxE1e4gSBV7bngYomCGT5Z4D5vf3Lnm9U53wXSooK5eg7wHLN2ecoK43EC8BmegPeU4S",
  "key14": "4kWHQPirh6Fr2LGKxr91Maj9KfpNXXC5EQvaQbFD8U71yfxWX4m3AE9Nh3HfUHfnXxXXRiTECT8AihQpvQRNYDjC",
  "key15": "39JTFWEN69aeDMioDFNjd8eotndxAhNVVFL4FtM1upHyLbSnL3uARWH8HMAk991X2mJc7mMDBtwB8JJMkwuGVm8r",
  "key16": "5XvDKyneazQ7dgi52nLaktigD6wmRi2isViZGcSjQAtjbwBxprN4WrZi5Thust6zUSUJY5itb9BLmM5srHNJ6BYW",
  "key17": "3XkUvf1z3gem8wy2F3JPxQ98WmGuHPsoibvnduPrMJRQe5gpWNUDjoo6F6TxaR9SX5dHFdtGPKi6QF3YhipKJPCB",
  "key18": "498doWTK3akuXR3Gkwi5vpqZ8cHENs8YNYvndUmKEsGBh9F4MmyuVvWvJaKbu3RSafSnXggXzP9nP8YS15jXBs8g",
  "key19": "3EwFDxoFGtB5bW13Pbm7fWeQer4dNqM1oujDggZ9fiy7RHPouu3T1HP8y118pU78Bw2QUUaDukRe2yiyWdofrH6u",
  "key20": "2ZoMDkTP9aET4G3kah5XCcC4q6RQ2wiWpekmY8gNWUUxpVdhx1s1NjxotR2xWQwQPJ7cPaYtmoMfdvaLLZ4wgfri",
  "key21": "diovxsFAMgjuK6vdnZi4Xqj5aS1B2BFzeVEjFhDYhPSwAMDWfWmMkdGj5qXbC15GHyXDpdCgTAhrHrv61Gp3J3Y",
  "key22": "4BqS3eCqYtCAokVxKVj1Pg4HkWB2agoA9e3FfgtGqvpzeuuYG6VYKdSgGxKNj68GYfvPJjtzVZyDqnCiyZ6fGL3F",
  "key23": "5rCJ4Nk1mDJYpmqhQwL2mEFiBf5XbmFaW1DqV5jDwkYfkVnfRGg391BULevDJQbAELa1W4gL33wiwZb9JuH9qiE5",
  "key24": "5wQ2vNNLHo2ddHRTJWWe3kjsTA8KUCQ99RH4RPk6hc51RrJTyDa7h7xRppiJLtX59WHLUoAmd3wUVsaUQkog4fe9",
  "key25": "543RrcmoDdU4iomJkc9NhsD2RjFXnjjc19orPJwf3ZLdYf2YFtnyjf4RhAuxzn6LdhnWrWbxULMyCd55NohcXQnj",
  "key26": "5fN85KZahsGfhouoUQmjeCBi61ECA6PCqvBzy4TahhY6zt4wfKqoH3N12UUpxWEgD1U1HhBhjzekNtXFTKmSVzDE",
  "key27": "4ddQzLkJicgLj8xAhcKSR9QSE4JHbjzNkD5ueH669GKum5rt69vDvWJkBMsYy9xsStEAcufYo9W6SduxSqksSLnJ",
  "key28": "3UJrWbFEsM1yvY5mMyxVW1Mn1J7jKk4BpA1BRzcYD3YyMVQTj2Dj6XoYUNWcLUJ8Dpg3XDHJ4PmC83joasJt6Mfs",
  "key29": "UZ8SEB5JUiLwKm8pEMcqpwVWmL5tdqJaGUV6uq8tvuQ9Ec1DrXjN6AtfwxQ3Am8NbdWgX3w9emuPVNoM5i4i2up",
  "key30": "3Laxs9ayzuNw7bmg4bM8YceUL9UskvXgF2NzHk6Mz7cYBR2XrXKQbLx87PmFBbM4Cka6LGDeLgjT93JRVoNBEpQ6",
  "key31": "4u8x62Vbeb3vupgimnSyqJzjUwLQeqvDAfPELgNkNrx49bCqjLRTiHSPYcRVHGzyWny5CVKLF23KoMCxNLyGHRgN",
  "key32": "qBP5ekcrnvDwK1JjMAh9wDNMsfK66mmm5zFVS16dPvFP1yTPo4n7XA5TE6Rvzna4Dszj6LTwJiQCCEQRyV5G5dh",
  "key33": "2MBUgR69iQ77xBWsg3etaw2r4XGsAetXWKfB9DWzjDrCfYuAXxpBQrkV7BP6xmFPXbXSxAsx1zcEJd6oQ9PhKL7e",
  "key34": "5dkoP3vbEmPsisSkWLJW4EMnRWTTjy76rdFxGZeabSz6DUENBfdF8seLU4AN2HRwJT54kYzN1451Fzg7UhT2BFcE",
  "key35": "4wG3QeNzAELe5BEhnjqPijViuDemsTeV1LGzm2VNvaJnpcxH1nebuiLcbzbGEWqiXrEGtDaCaL5fyxyRFp7XJiJj",
  "key36": "5dbwFtDYkbTdncLN5LrRyXdfwvX6UjAzPPyzyAsu8fKASHE7DHAVjQgKonDLpncC5xh1R7szjKFvrmdTTBdAvbi6",
  "key37": "5hzybpbHF3JwF9bh4RVmhNf1cmrpyK1gcH1Q7QhUorKhvYSfj5FWhi5VCQAdHteJdoB7RBKCKYRiG6cwRQX8hy7Y",
  "key38": "4TjFVaiEXXaLLCv4rv6hqjS7NxTJKm5gw8gAL4EUhyZW4EjKaDm3nkagakgUVBQ3D59EbFQB72YnpH5MogE7Zu6z",
  "key39": "54sNLgsPm3SfUYZAUvpn61CuKVAzk93YVjLXVz7B6E4EXM1ZvnALrFUBGEWtc7naf9gQrxeXHvxmxJVCtJ9118LC",
  "key40": "41wEi4gk8381RSG9P6K9vVBUoQeAY5LJNHXJdkyxY2d2FzZc3Kf1v3gfUwuNHiygTst9xbXZapnNpJ7kkrxrSDra",
  "key41": "2WyosTyeUWqZ1kM2xKmUS1d9y9xE5Yju3NrM5vKvdjdgwToHPpHcq64fjdaV98fhhyhHdLddVTTP6gnty26PVwpR",
  "key42": "54ZECsHAQdpQbPnS7QvSSgKUfarpGRkkrSmoNKRM12jT6TriFqnGQZfcsavwhDs26NMABpvYwhJjRSnGVaq8pF9Y",
  "key43": "2u5XettMLaaAWBVymq95TGDCqxnebP2bQPZ4Y43f6MvULrCWnyLqh6wu4JKsUT6GMz99UCrE1abL9MT9rLPtnnJ5",
  "key44": "4YKaFFdHq23sDUYpR1pHzwggyFLgV1xoagJpLBsioNzkJFz2ciRTRyGca7pieXN4senSYZVzVE82LxyrjbvFjiR4",
  "key45": "4LeRf3pTEUnTXhngrW8gix9WgXnUbbzn8S4xJr6pDBr5xhynVuYPYz9hW4wYU5wJqx84yqpz27a4ghx4nX7Au1fx",
  "key46": "45CJbDbSHbzyYNDfvavG8MmaVi4qVNJv8nDf3FpkbUWHVLz7zCLj6D1SdwiPZcTv6Kb7u5YyDepA3pNTGq6SwNVN",
  "key47": "2XhwXLRCxTkrCsibzMJV67adcht5B4f7qfEZYB15iMQDwj7mu3y1CQ8z3mUF6oJ5KRHFZodE81QeFyktbFMex7pe",
  "key48": "5GQYmDxHcsGWAF3p7kp5CaxZUoHbCNoYyVS9svg1B7ZwtupXUGp96xotsvmNJLrXHfceQibxMyUoCWMrg2L8Javy",
  "key49": "2zdUaS3ftihAPmWC72SLxTUrr49NewFMwnbbaGT2DWCu7n6g9scgsidkH1WVsqwzPCGVYRXnWBwQ1bwb3icQCKKA"
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
