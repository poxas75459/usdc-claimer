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
    "4Q8URTA2nN3FsCD56vv8e7vwN15RFJ1zLz9dbbxokwyLcDwHEeLw2bhgpai6dnrnhVEFbExL4QrLTbkjrQ4KeotX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uKLuMpAFPzgYUWLuRHxeVnoeMDsCbzB9zH2MRzQ3Hfk8i8g2dAUwv8qwP4oD7SQCWChg6mjwak3mjX6Uxyn3GTm",
  "key1": "4VbTug93EyYYJTqiYZsVqxBhnLf2BHKGSYphBfQez9PcoS18KdyR73s32S6anZU9xidrzfKQXHVqwjtv494GDdRh",
  "key2": "2etFouyVdGqPPQqtsXK5kvc3qHzFuqKbK2GuNGhhaSbcWmQDz6LHDH7ANEb2sL6kmF3bbYhCCUjxEQbYQio8RgrH",
  "key3": "32T5iBuvB9Nr4gFX6JDps45ZNqA3jXHsYp8aLwWot91eHHWqGQ6nXKSPTXzVdpA3gWY46rBKjdyuMHXNjkWdkPdV",
  "key4": "3nGRBq55GCNfyyLsexsuZVEnJ9cw542ndUHVvXwFtcA65f4aSRkL6HUaoHe65DhNkvoWV7krQ8nMMgXwNxmw1eP3",
  "key5": "5ofh22d1XpyVPmxvQ7yHV2YpffL7s12dAnejCAyHD4kaxCGpHhGbnucxsd7KEmrUnSVh3zFSvD74FifYQSQ2ZRjH",
  "key6": "3eBSRzaNWtQkT7uK2osXrNeDZFpH2KrLW9swVdk9iPMffJ3zBBq6GmrKsMpXYDhU65B8XsApgP9NxvKWrV8sVsLe",
  "key7": "5wWC3xWF2bKS8JLZvvTJAsedivGnMXbtuwL2iBnB1f4pc4ETa3uLV7udKXwMytT8ejhWKT6s8aje1hnKQSgegTnc",
  "key8": "2ULTD64aQoQvZR6T8uir3C7DoeJs987wAc3ERD4RgW8DAr4LaBmwWPLhchpbPcPftQLJe51VECAjsDaPK6ZGRd6H",
  "key9": "4qLzThkdwrxGdRRBB5MX9vFcXLhfFmbubhPE7ZaT3WNLM1QASWefkXzcb6RmNvym779WMZirhVJQjWuWLj2ibRNh",
  "key10": "2JCCDfEcjXNcukiuPX5c7Lh23PCtZ1mEooN3a6D8sS9cVWPYy5MwzqY4w4jJURFxrsY92YZayJ3zMA1P1Uhwk1vE",
  "key11": "X4KkuYTRzqZwTzjEzLE8DUQkZY41X49uHFEWQrpmRKZjzHMFhzJ4LdzZLWeosZcMswQxboi7y66Q7s4Nxx6h1tX",
  "key12": "4htm9KhHLhrMKSeeTdrXCvwrAQ4n4Ty1doybpuqSi3vkCXjjKqZCysdGjKVYvzFUuU2fKsTEj1jEgV1PLECj9RvK",
  "key13": "3AqwFm2g4DTb3HMoGexDKi4JJc5oGiVnruZagsJ57uHAjxsxL4Fe5NGiPHZNoY66hWwg5SZWXbrwy5qxEVPsBKib",
  "key14": "4iu2fBVBhKMCjZEdApMRFvfjFXRksUJ69aLEW4SiMVhG8LcZzG8Y743UdQsmLvHBczRECA4ZGQxc6hTxx6GZXkz",
  "key15": "4usvVKDg6V9AHHvw6EyFPrsjvZnZZ3199GBfSuc652t3QMvYfmuCLzdexsn8shbTxw1rQr9gYMvdyfeh77HUAwPp",
  "key16": "nbDp3Leo7cMtAXRRv8EbY9j9S4F8ch3E9gQQVUvzqMhZ46B4UWX4ReYY5r1ySt8dEgUPu3DHYETDYD2Xwi2D3ap",
  "key17": "akWFVeUUpw1AUxprYqomLm74awi6eXZDmNohxm9Y6ZZJM1gT8ToMa3U4Ri1XGXTTCW3ozZXpYGzHkmCkgqihEJu",
  "key18": "349EEPePTaFYcLQTD9QFM17CzCp5s9GhovWjeNN9MCheMcETb9eKjqy9EhjvG4EmQP5Dv8ETGBQzjAWVJwnjaCQd",
  "key19": "DUeHoQCk5x12nGXyXR7LMbkhL3i6BGdZWFgvR6u9nweWZ37qD5MjV15keDP48hqSErWNUceCpSAhtH53CQ2ovka",
  "key20": "5i7ASZYxFDaqJdtkL319pwZ16k9gTsy5ctf5Df8jSbmdxDeRiNMNc74jJCKcsw48v78mgC7LDSyJwjJYZZXEetdp",
  "key21": "4MvU1op98zNbZngzsr8kMsB3eUtmJ9vp9NsGbLxbySFVviLFumibPpeqDGczq1bP8s6ncWrmfmawqFSo1LbNohyd",
  "key22": "5Z561uh2QDwvi2sRr5GFnq31MDK3jTiHMYb8ZAaxQ1yVVUbLACL4mwnZiT3JTS7JfJWbrJNtFE6DT4N9NsmzBYpk",
  "key23": "hcU4KXsdyPVGytEMQvXb8CAvnV3KWDXbySEww1kSnNm6uwZAiZywV8ScgYuzaLN1iLpqtXgLjvve2empPLvJevv",
  "key24": "2vtSKPdaSzRRBuX1mH2gfGzJzgFrCm72nTEEmvzG5MHxtAm6oWpDvYmfFiXa2GjqbjP3ZH6Jhz9Fv9PFSkqn2HVC",
  "key25": "4z2GUmCvHoX4kG6gMS9yYzT264yE9EJN4rkjhPB5HWm2t1KsyVp4ooXRGYowyGpLWSgGuY1BsS4XMsRaG8jzWdGZ",
  "key26": "3TNzQ7HTkopgfKKp6pcux1v2U9MchABW7XMhT6Sj6CBf9Xv12xRtyZeBHoxaniEMnh3RuyrLcqVKRJGH8BkdDk6U",
  "key27": "5NURCvWMddKz8A4jqkqswNVfijqVrx26fvjbWyWUJgtWZgDSJSJWzRKgjbZax4myfQm1jXMUCtSrNBWqepDLQGsZ",
  "key28": "5uEC8tpmbc5kbaWmcnrzPUE62teAtVRFRVC2pLdsRgdKL8Ux6M2XRPieJs6xMvoLQLwffxThec4CVNvwgK2PWrCZ",
  "key29": "4AAZbrnYQ55MKuewBF5rFWLZrqFTjC7nz2pZgsr47sMMqfKbMYEgsTbpZ3AugusrtvbM4JmpwdwvV7dUJ5RGY7VD",
  "key30": "2N1LrLEmW3Dq8Cse91qXPWy7VbnpvAftVy61EHXVFZGgBeVZhGwFWhbe9tFQHSgZnsg47GUvBb5VV64XZif4DTEq",
  "key31": "2pBEjwW38tqwAFPwC3LepeucxjndabsxHg4NoxW2VKjqr3pTAAPgMXZ3BzcFVXnbKtTdNVyu8CkpaM6yrvfa5yvM",
  "key32": "4reKDFwQS5eqmSXGbQ8X35VnAXwwuAgpWpv9rqgyv4RTMXHx5zxYVWEfzmFk7ccQ1cEbZVowvpSZ5UxzgRPwFjT9",
  "key33": "5Gmw6z6cvS2gxjAM9Ynpi6PcT884g2uUfMNQqYkeBx9LMAcL7MPFHBi4A6MnCL2mp4FYVNaNpMKRDa4gm1DGyPDh",
  "key34": "272b82ivNx4wjb3FSn9ePYPZDwZusZAaZwqam4snbF5WJef5rNHj51GBX8adAvQV9gsubZ8BHvpHJiom8qWa1Hqj",
  "key35": "vmcBm74udm5tbv4St8mmv4N9vzVHqzb3BbYUa9PAcb7wpsYdRcL9bd1FQsne4aeJFC1cT8t7fUqb6iEUsNiQrJz",
  "key36": "4TBozH98H3XNGLJgK9GJpppZv2sM2Pxbw5JFyHchQq2khzhsSXQtBRmwfkxcqqYRYddrFBxTK646iSPQq4a7aVpB",
  "key37": "3DkqJrazbhDjnxgCHnyYUEYrhMsLzErG9K9iSLLjoERv7Rdd8kWnLjfHPkABdrTd7uBTWZfuPrRpaZDX6HFHx4rB",
  "key38": "3EnnC4b569TSpMV8FsJ7Ct62jnKoY4S5gxj4imR4pzJh76xaFLrrmUKaD3vCPKqweNEfxfwAxfsxLtNvvHQriWkB",
  "key39": "2FKDXQwuc2A2n3VDCmHMFSgMcqwu2oSue21UXHHDhxXYnjfnZYnuh16LNdSNgaLiFKdaqm2wcY2wEwKpnGBDN9eC",
  "key40": "2qGy62BqdXmGeMZDDHMJ2dR8eYPok7iRykMkHkHAS51HYbdMyn1J1Ywk3dy8CTyWqkhj9zc7QVG3ZGw9KM7Lyezt",
  "key41": "r73Qs63wEocSPMytZCtgpeDa2MrypygoUXGSxDEritdwV19Zcp4QGzR6WyBPDcJBwqk3U1ctc3yjKWVHps9JmT3",
  "key42": "5CSRF9BfjDEf4XJKM1vNDExUQp81dfEAmgTojwNcwYCNixLvAXnbto14uGxN7U66BL84BtDhR7ZtacxEKdqXYCkR",
  "key43": "32chyGHR7TVEkzMUE3xWXVJ2TPtqWePuQcrPCHce98aSX8WP3CJhi3UyFTrWFKiZhTwcTKwrBF41pCnJH2bukg5b",
  "key44": "HEH5h2rBkv5eoxB6F7hBaRE3C5dPWz9VsJo5ueBduyhZXMc5GUtmboPdNmVnCwyTGmBSxuEaeN1ZGEMxstfU3gF",
  "key45": "5VARbiontx3vF6jyx5kep2WReWFmKMzm8JpCEFsu43YpUfeWtejHgDioggqp1E9on39m7zGFMuMbW2ohMR7d5y2K",
  "key46": "3mhmSJHvjrx6Aodj2UgTDTMDRJMSgMZfjq7XNEaM1wm5kKn1kLhxpgMezb9GPSrJ3c6K3y74ZiCgKUPXXCXF3CaP",
  "key47": "5ETYAFkThCk7zzBUmUBGuksWL6PJ1rvBx2EBqqCafek3eu8k8Art8E5K6CuCkYZnYgsWutB12WqihenKPqTARyRH"
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
