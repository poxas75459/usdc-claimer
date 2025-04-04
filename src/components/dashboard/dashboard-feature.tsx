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
    "2bja7146pq2C2B49hL56jDWHGZe35UmiHnCKmewJz5aC2MGkTdLxBJYxmhUSDLP7FkvA5RxTrHCBKURMejehAJux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NqezBW6LZb7w3gLgSEhTGtjiuYmFFMBQWnKrEasamEZagrLg9DH9TfbMuZ9dZMTuT2agwWV3DW6RRWuuiMZbCa1",
  "key1": "5kVjJkVR8qp2Uha3TSG9VC3NN5So3qXp1ntxDPkDWmUwA7o1gg2DUvBgcbcGXgbU4ojgpmeGv9JgzhYDQzqwkyLQ",
  "key2": "3RGUDofUkDuvG8joxy5jV9CaRoaTshQccWZGsntZDQ5rL6nwAYZq2Ewg6vt7TzujBzSeKpVwwuL8X6xcejdiv61A",
  "key3": "9RSxoahR4bQMqw6DFaarD41vDJDE2ZhsAyep8GfkYVFEwa49WYLHzj84jFpdK8arQZxNgFPiSDFHzTqdVZMxhVB",
  "key4": "3G1ud8bv7wxrwL8GUMan6sGmSH5z1WjUXwRLGNwsodnhxkaw4RRingaAAPSdJXRDZEXLn8QsPYiNYprmpNTgaEbr",
  "key5": "35yJZbrVDaYnBaVfW1kvHHXbMc1enSvgKHu7oBCEsBRFU4WmPA4B9xgTALtzKv3emrJWz5bzRWWKzsfKFrfraFAu",
  "key6": "4mCYHy5mEdyALz8TJ83x1K3h6anL6QagrFhFGP8Paq2Ej1r3qbiypHF3jDmLmAbA2T33hzRzGQba6xxfTkmSdJrt",
  "key7": "RKVbF9aVTvN6CYWtUNaXS3KH27ZjmMn6vah3bgbH1iKeiQtCQKK1rm931E2roscXsK513ZS8THG6Gpw9CHhmZcN",
  "key8": "41scE65J3o9PU7MvzuWxuXVgvVRKBZkGud2SUk4FraHU1qg5XYiex3FhEi7So87tKg26Crcg23FCG2wmTzRV5uwm",
  "key9": "3uCR513MPhT5rFZ74CWssYz2K4HcvRFjNeQyp6dk8c3Y5Tsbnth2v69SsEXfF411ABQUVLAw7NW9cPaNs4YEstKQ",
  "key10": "34Ue53rGzwYDDSCtvVPYPYiKFvAjjo9okVVvSMafNXXKeKgmf8SSKuxLXakzTWghjVtAPsGP4Sfs2iqMthi4re8",
  "key11": "5k5XeoXbtNeGjciqN316XbQdU88r9kbKd49ZWEqS9MsrSHWyqYotG51Zm5DNAfhgx9XRKhBeQMxuJXX5CbX1zG3n",
  "key12": "GzTLfqWqGaWfi3BovJVd6U83aMwhi2hFMT9RXuQ9sa4uzeYuFQrziaV7WYwtJwqGE9Vam7ZbFCbYt9nwoSXjv4X",
  "key13": "55zbtiKz6WvygPNNzzeEuisZJ7NFo7iTwDQ2W4tCKPfdw6gT6CXFYcJprLQLAepup2fhNw23XJdQKrbuBYR7GyBo",
  "key14": "4fMVE94q462Bw9MJBw1ciLB5u6RwrVrVrZ7xbTF6aYdK1xb9KCGBvU72g7wFc2SE2d39XrRCJzNotN9KT3872Uvn",
  "key15": "3yVpiSksFisRipFxumnmon7yo4f4GYuu62k1nWdpyFSZYFsh26fWyTZBWyobACmZXSCc4XWjTqHnh117ysEHuXjX",
  "key16": "2NH8ezbGFbfQeVDtoM7B2baksjjBMxd7SonFUhfYgrhZXipZFLZYkAuboy5jwGWLYeAvnvU2FFWXTF6Pyi42CEhc",
  "key17": "2PpCVJPiGfhjWZvvAiw6tdCE2TR7Xt5U526pFBdvDjoiaocxNVH9H1yoZmMiUpzirByHnPNcs5PjfeoUV3BbLizi",
  "key18": "33yx98sUaevHgi7MWNUUpJBfckNgzbvsLRywBScjYqFNAc1BpkFykoAVnw2K1xpYwfYURYi7zGJq6ajKbvCk96w3",
  "key19": "4iPKGBvip8T5hGaK79naGb6eojdAvhRVmz43J4x4p6GWJbdrHri3hPoRzzftxgNAkzdCvh1Tbsp7APnkN7xDKYjK",
  "key20": "5kNci3n9TL935iyce7y3NgiVkh5Li5msHpQHk3zCopgobpAWiZ4jJYfkzRLEr35hnizACYsmskULKzagBCqMkXav",
  "key21": "3xz6Y1rLNpdfMch2magn4gX5YmdnptT2sNJu1RWH6CHBaXmk6pVgKfYREyVp9MM56dsMSvg8o8M6nsQBd38EUPtS",
  "key22": "3HiBctw4zdZLUSxPXH1MZLYbDBqFt7ae5bebvD425K4t7KCRLDfqSEpzCvAZURqFskbJbTpHmZq5Rt9W5QE9TKS",
  "key23": "3itKJMiw6KrfeR9LdTjd5MRbiXYW6rFmcpqJao7YW7Ec1GFhviueGomJ3CRN9BgfAbQ8mPJzqY3o91xeNz31DTTo",
  "key24": "4dP1qct9deEicienRavaoh3qm89eNaMUp2SxqiHWWjaWcn4298bjJJJWePHwPWjhVeJxmz4wn43Xhk1fX3pwh2GQ",
  "key25": "2Sj5rqKnmLLo77ePhDG6QfSpVwgd5GDe4DHGfnDp5umeMhkUGfHEA8HhsxeFcVd6dVqe913HsBuVgpNZDmBozdh",
  "key26": "519oFM8X6AipqsMQVoiqiX1RbkkYUnFZwbc7w8MCXxKftvP6Gp76nzh7qptDHqZfGnc2m3TXHenjJY3LPpZ3oHbU",
  "key27": "2uFeqiqopPjPHcGxBJBXiRufzzejBSJvRPb1EUBfxTA5RqSr3JovLUMGzcfegpZcLBGUG2F5wy31Q5SA8n2U9dUD",
  "key28": "DLPwhrsHrUiNGZ6JZCNm8xN7Pj5tMrNxyCQDd3diBZZhJz3XAuLEsXGx54vEWZZmTopsHijEereUkBKbeq2Et4m",
  "key29": "3std94uWauhvSuCd6guEz3NcPYswrb9UQoXefSz8J6F2tBvw7qp4F6o8ykmJgYf43bnwJ2bLe6cPwvxsxapjeJLZ",
  "key30": "4x9seT62FQHjVr9Z5frB8sgERhd2F4KNkzPzB3Fxm15yzNXydmZe7DbfmgpZRDqrZdKTvQkXEBrarH1eSn8EZZUR",
  "key31": "5k1KBUAGRfmRWxS3nu5SFY1ucDsR126vhsozUtZWukszKUoGGrULBaVcZgvVbxttFtT2gwF5iHP7g2vM1D1yoEyV",
  "key32": "4Zab7SMwJUMzBUZYvbedSHb81iHxs3nzDtQHRR6A7jtQ1NBEq5qmacttTNkpzcfQTwzgQ79DpXq5XjkGGCxLwHkH",
  "key33": "3wEKRysq3ZZB5DnE5RD6FdUqbAhJSxT7Ke759g8twkmJEUSwp6vkBeHsUermozvU4JGVZTztG3pSKZBpeWoyy45N",
  "key34": "ps8XiyEaY8bzKKk2cC24RD2LdMe38c6icMnGYJP1naKXMJef7JnNGydTvMwspHdrXXaoKB6aw5eqdPHyMMphore",
  "key35": "2SYw74U7icRQqpqNegQYgTAZ5nfy62aaNXAEeFNPnkaubTQst81Fw4Be3vstbz68AJqUfjojjuaW1uSsCNzD6KAf",
  "key36": "5XKnaAjYnL5WGd16a7vb1BkxjSEj3FMCYQwRifnuakPpF45739AUB8dgzCtQxWozsQn156FjpQfH6MfWKR44y2tb",
  "key37": "VucNE5MKovMeyDoLBQcSfq3a2GpSPc1rYtA4bHrm7uyFa69tbzypwu2zjB4R6RnGbEQH9cse3KrR5mbFUGSMiie",
  "key38": "3UnWq1W9hz8H6VzJXBgs2KywMzYHWRYGtbWQm6oskNtLmzFJGw3pDmvyXNUNPDs5e5mzo7ho3yNmzaSDQFz81Vg1",
  "key39": "4xDzxvcktCekiRFA75aQVfAV74qYCsktupX6KauRWe481YCXqVqr68rh1Da9mhhtNGcvk6vgB3tZWFGo8YaTGXCZ",
  "key40": "43vGurQEsrxdbWw4KVeYWSHmxcuF1oUiNNXeczHYuwpaG8yMeAix1TMhNa7EtwPoHe48gfzQRWykXFSFogsJ2wXC",
  "key41": "5FtSN5xrGFisaDktGGNyTj2iyBk4YJtwxc8hddJ4Q5SwoUKWU7zwKCpwv5YwztBF4ArHFrjh9aqMmxe5b9iKiBML",
  "key42": "4kTNPqxSahakEkMRgSUYuLxfhZWhLEGKHzxrt3PVasvV2qPpChE3R9yXGfP9JH546nNQLo59uj77ZEnCwedkPhx2",
  "key43": "mhZuZnAJiftvGqdZ9Noew3ty9MetetKrDDSG5PUSrJhbdWoSew9ib6wHuqHgJkbF2eZPW39JdbPKdpQzCpyC7as",
  "key44": "3LCfszgtHBxUJAFeHo4d6r7Np99pnvbWrSEhs17nd2b3ptWjkaMzH2UKXsWZybFzTEfwDCfj1DRVemgpW5jQTmmh",
  "key45": "4hChtGy2nMwbskqfpZ5LcsBGSSPiDmktg5LQEh38pEajEDvoj6iJ7Gj5QUKT9PfZEVA31H4LeX4YfUkpwZDG2qaY",
  "key46": "2Dqqugj2NSFwkouoCfKeRyyjnNuVgAGEyuBknbTWRrVwr3hMyBg2ySoGh88JiHVXEJJnfqzpYr4HMs3U3cGxDs8j"
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
