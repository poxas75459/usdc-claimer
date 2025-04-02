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
    "4iJxi6ihDySu8Nqm76FVTMRg9XqTDPUW4LQQkc6cCUJ5xJzHnqEmXSn6NoVFghxsMZS78htioZfdwK7raHoQ7u5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NNVjus7WgV8kabMrgaX93MfdAibkn7mbbkHshifNxwTaTeCDw8Pb9CNZmVGDqsy45uZdKsvQp9NmBc1kcVErdK8",
  "key1": "59HxdpxTHhsi97w2DWWZ92nR3Zg6WSKKtDxh4GcPc87eQAEC9Wbo3EHXs8KjSyEHfr1ZDnTgcMyUdABcQPjE5qHC",
  "key2": "od1ajsUcfgwXLoLRLnE4CrstVZMwM8Ra938WkVhjXD1P4Lqcz8GJrjxdFRLgQk3Ua6VhsMSvepBMiGCrDNzSPPy",
  "key3": "5B4u7ZPvTAEL9zzBkMgyq9MPaZKgWMQrT3a5cdMXTTha3dePabno8Ji16fJEmR3VpTA1vQbTpNnhhWZaGid785Yg",
  "key4": "5Ao5NwQpxKTpvitS4S4Wow9kUBP1gMeJVfdgAgkKe8J42kfr7NfXPJ3iRNqgPsFpthf13NCKgXVdPNShrMABquYf",
  "key5": "2SEc2Zju1yYaJYxTA5p42NfVvGgx3j8LyemdDawfR89LvCozuzysxW7MefMnxVvYsQnQvzjqeuW4DBucyuATzTQm",
  "key6": "3Dgb1AdSp6puUHynMsRudmnUhNBA1n8ETT2sH2FsZy53BHJ2B9n9xfX7FpAMX1zVAyLMh8GKeM3xKhEdq5ttfEKa",
  "key7": "4LLGhXNSmzXofLfgy7ZL9LXB62PvJZD7tpNpoeCqj8chsW34wEH1ipmqGwM78pVM6HHwPJRfzuPrtjrrfC4LxFwg",
  "key8": "3qyiCv18Zzez9H4wktMSN3igr4TwsnDQUvtCDJRtNVAAsnofD7LYVtMyoQURvfy3gnwR7ZNBTwYsVpAA4fpTkhvd",
  "key9": "4kq54SSfK7tdNe3keqxM1mE98NzyiEAxJZRZiHU5EMC3KshuApGMFtCUgkKqJRq9qevbL6Y5rY9XHk3KFcsSpdPy",
  "key10": "6cixku1GHrvetVn9LhTAh2XjhuMD9AJeqSK3hWLVWtaFu94XWMoZjjM1ZNhm9LuP7rmDtXuP5vapd4CB8x3FyXS",
  "key11": "5kPJeTqJvev2ZKVXbDv5XmZGMwZvXWBGBG6JCqawmusEdUrCkbegQv1wV1HkyMz8xdQZFb8hktmAXYKE6CdUZPYT",
  "key12": "2GgmpoXKs4wVkX5WSLWYScVc5haTtwpQdUTmnP3qveqduTncBgxaWrhpEzBbPSCofutg9kkVeqnkU5fnj9CBmvUg",
  "key13": "5eBWk3JWtpqKo4PDwrhxCUTkPuJi1SCsybFVLuSonsCDvCB9aXJPi5SXHBmCR18eXmoxV654GGwNGaU7B5p2vmuB",
  "key14": "235yqvdEyfmjdHuGr4yoRvojmmpqn7LnhtU7dgEH7TyfYeTdwKFMc71QPj5uXxWheWz3ytxnjCprsGewNEKjFeZB",
  "key15": "5bRBPJbc549rVnJRWaDkEnqstEitpESTz8QN9jzM7JprrV7tvoSacDScL5fcHoH7bMWtKtx5Ecvs1aCcx2NWHjyP",
  "key16": "81yyvMbqn14H7n6yfEXds8T5XAhdeBrrfCeSEmESbee42oTwQ4gJPnw3oKUXNDmSSqBJQWKpXNdz7dNkjiBX7Ps",
  "key17": "3jk7b8Qw9gsfUxr3FGk93jkBF5HyBLbTPhTmZv9JkoLZY1cv1zGGzu6T7Bg8ECJXMN2HNoDM6A4ETsDjhGesDC8u",
  "key18": "2X7o8KZ5TCK6G2tFJrw16siABc7A1LsfsiftFhfn3C5LKEzgay55VQg9hh1j6UEwfyrpQxAag9D5xkro5mt1gP7V",
  "key19": "25X42exGmbHCfAwMFwm9UdthfYP3aopwN7aSdr2bSDa86z38LcLBVLw1Y236qyGZ9tCURxnh6W5dNV849oPFPNtW",
  "key20": "2hc5kaJJxSS1SGrv9Q9WCv4pPWbuvwZg8Q6E5vNa9NzcvoURWzWn7NmT47aqnFik9j8z3vXP6TNmnppjWaPfvfyN",
  "key21": "5PpHfnh8vFd4DcByTxq7rATuEirAdpjBVJCCuHJBrKLo7GFR9CdWo27HjFSYoUnLaXoRByiDLpGdJtwU2c3EL7k1",
  "key22": "Vn5zRLmYdMmpnc2exteUtKSUHCvnm2S8De8ZeVxZu2KPEbJ1t9oXKJZYrAb6zNcD18CfYiNK7b5kUktdYapU6cH",
  "key23": "eTYX6WgDDEJDMH31b4GS1byDDN9fbr29skFP41a8DgdG4GAhUGB6z7sRfbq6nDjkQYCUmCJJbp2nSK9e7wdCoFv",
  "key24": "2At6vEdn4vzMb6mnpAANfrxiQy7joLruYiEWoysUXVoc46HBpYEarqR8mj1j97A6FgAqLQ21GHtEjs1zTNj5YJbS",
  "key25": "3731abssLQPuDQSs48MLpcNTTB6kjJfDya8aqmLyeWD7bU2doRLS4aeQVRTptwxbrsmisM83kV6gWSJTxVH3QdPX",
  "key26": "43kwjWFwTSryHj2K3QWmQkT7pEpNaYrG1qppTME7zu6b6f88dwrX2oSL7UtF3cMSKw5rYPPKiMNzkZfup9sScGvJ",
  "key27": "1Vm24CsN7wWrehiHhrczfMQrENYjsdtRRC53xF1fbY6WwSG5PvAfcVBzu9T37VBuXLb9gR3sS7jGCHe25zQb4Nw",
  "key28": "51C7mWxtnveRxacNDuVCGzqrWCCs4FcPCrwrvRTd2UfMMHPsZiFXbNhBWjb4CzYfcAhTK8XDnCj7iMMnJJS9b8ZG",
  "key29": "pcoBSdiFgoNe9Pj2a3poL78HhMZzoB1r5smfnm3cic2M5xvcuQ2dKpvuZ1AgA25b52wPBkkEpuTWskUg9BQGt8g",
  "key30": "6kt7PZTvYWsmcd4wYTTvyiVomGouFNxZ8Hjy7vGMGPiA2gNGRjrBZNVAZ2cmRgH3W25dBzxkcAYf4C2cjmoHihK",
  "key31": "2hcgm7ZzDYosLTNP3LJ7ovixbkp94PpxLD6DPzaLpCv9HLgCCqwZTsscuoe1kDt4bjoQ4PWpnstJmj2G9Ai6Ds9S",
  "key32": "2xfZ3uM2uXQXxYHGed6FftVc4B9Yj8FiNWHeJkDtXWpD7qVozLr1spZeXQSonjGCR34HQ48oaHMMCsxEgmuaLka3",
  "key33": "zRZxK2yb4auSx8e4vfZS2bQLvsH7jxcVNDsdM8TYgA9FEsATHbL4oocUmQiJ4o5fd6pA4qVVEuPYCo9DX5xUmeQ",
  "key34": "46bNi8p65qQ64WShDBif8cGXXBiBEBhDMyeyYU8sQyC5nR3W16LLayHJBnePqbS7dhiiEDjRqrnRJhJAENmDKAv5",
  "key35": "3NxMHi179WqLac8zX7Ha8qb34svYb4iPLiuRx3unyr4atBM6gnMmhS3DGt7yE2FxRUe32cpdd7ZXo6h3Cr5wd9Yk",
  "key36": "3rSw3wRyg3DuTSq7tcvaVrAaYTshrv66h7WfFF6kReZMjfXhE1VjG2NUn9QSYuYZUUAjFF5uRdsjrsyUwXt22qT6",
  "key37": "5DgDWrWLK7SV1ntDRj3sR7c9BNRgds6ih4qNjSg4SUtx9fpSR9NuP3cXPeiAWzia9qV1c4VrrgH6FcPwPru6Vm1f",
  "key38": "3mGhDEHCRb2DhrpCQdGqxwrP7xW1MfryZBmPn8RYecDQPraPjJ5rig73zqUqzW6q1R4bFj2HTEzsYrEEVLg9AWEL",
  "key39": "76adkA1L5dMzP5qD4MajUryPGFJZajaYukK767uQUcMDXoDvL5CG6dzzZNMndZmBUodGcnMA1irakafteNYLNvj",
  "key40": "3T6G63GbXBkYAxSRpfcAtk75coWLzUxBtxM3Pv4w4JJuqpt3FVDPUUNP58qCaqiJgUBDyU85GwmXA6cQ7djkZN4G",
  "key41": "XTNLXb9T6TxwJXrfKzYiEZd2xhsX66KWvJHHnqg5jFf5bmGQRktwpggdvb9yBsTNPFfme2PaM8fT5bKSxGK7xxZ",
  "key42": "5r5h4mU8WnFk4szCeH7aADJpUZvo356Pu3VQBuXmJcpdBHZByqUGWqddtyboEDvqb1ymxQpYSoq9zwDKnCFzdf67",
  "key43": "5vzuz1AniwmKN6HjM41wBiZ2g8DXYJKFoAomNFZwBmui8XQnwcZXFjPNSJip4QN4ZewBbk64QrftPzLM4tPKkzsR",
  "key44": "5XG27Z3zFd6wE5Xub7XYWYi16whRKZBiQRdCXgpKYcvtyMDUYjGmF9aJv4UNp1CdVc87kog2KZiiztd77czeyCFM",
  "key45": "2tn6i4Ku45Bhk9pjhGeJW6hxjDuTcrnFnZd4Qree3UsnfhBmqGZVEV8jbFLNz7KieeeRdpKmipLRWBe3Rqd9DPUC",
  "key46": "3Hig16KKMkRiqCbjH7FDBHoTqVtc3b9WACiKAPE4QJdDhKKttWTsHz6X2ZkDbYvVSoqkR9vCDHMA3Wzsf8sxb5Er"
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
