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
    "3d3Z4msw27AcSSu2iJzjTA48XnUwyAXDvEY3XuSuirWyPDSbnvURUANARqTa6S7dBbyXjXx67CoLh5Ufko9rMwMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ft8ryxETkzd2Pw2YrWFEP5kDRMLCosPjsNgBVMX3uNWj4bV1rj4mS5fkDX1geJHaJLAQQpMndFCpaJ8hABC2Vjr",
  "key1": "5S4LsBq6fbyCbPofS1zXg9YvsSKY5eSymSxviXL9e4BbdnRp4JPvuLeeczgMHSUXSznaUwFmk9tp7MNagPen1FD4",
  "key2": "3uk3rCp4moEo7vEzY3fxTez5q94TAst2f4WednHnAE8RDMsfeq6cF7dP2GWe3BfLEhCzqPSoXkHJU9UVPrEM1U8P",
  "key3": "611BcXgNVfV1Zgj18BW4RD7UYYU8S1s41ScJg2SNpQ7UJ6ZwXugx7HY3uENkqr6bcwfPt8TmjwoBGzfNwiW2WpAu",
  "key4": "5MquCK5aNR9An6ynBFDRNvpx18XNas3N8VNUJ8RXQ7PJJhyn6n9oQorLsH5EiZryPCCYum9ZWP8tBc3BTpEnZxpa",
  "key5": "4GpN7ZzDsdqMhFZ4na43zkekEQqSrQ9XDHH6aZ4o5escH41AW5MdAWeEqKAoXrgNukHme3MdQFe1ZtfJerz7pxp",
  "key6": "3yjzMbxPCmEg8HAvKkzDxMKoUw7RdRx9n3VDPJ5c293yeKpT4Cv2F7WzLh617B9Xf84khfX6xhikMwhFE52V4HoP",
  "key7": "WHfjjaP3s7aLt5wrqyyySxEN1AConmK5fZSMVy9H9JfHRsedBPdt9ftRTFCccMzGx7MGLgPiDUcrvGSnPG5FqJU",
  "key8": "4Qyhtu9RJ7U7d7MNUQUGnZSE7Z4y9Uf8TA5KkK2Za38qNg3CBaM4q3ovhdZprDFvFB3RtfnApeaupNeHqe9Ny1yr",
  "key9": "jVuDVYdMoYpigWp2KyJnSpJJU4DhM43EG1KmMZoimsnaJvGPwY4JfirMjrRbfaC9cohhnmh6YGvZANMcpYVGpgr",
  "key10": "4hF3bv1W1Yf6zAbCCHGqYc7kn5q3HGsrs4F2NfrC16PFQtkMNsSNgQmSThkKxCBEiwNdPpCo3bhKnfn9zL8oG3D",
  "key11": "ntnV3A49rfy7grfwzkDCKUSkUN6Vp3vEBDhdfMNJrdAqYxzBvxzGCii4w7QGDBVwvkwXyBcF2gJiMSGRtoVwEs1",
  "key12": "4UGLAytXQ5W3dSVoLiPeSry5umM3YNLSJG2qDDYKBHSXMqpFX6coc9j1ScargwukGUDbtfF7pCQTszG8tdTMR433",
  "key13": "3m9X8WPEJAfLwcEnMN12MeycowvaxqRcJuoBacoprioqzt5rrXTF5d7e9JLVwVboc5ZZh4aorGjdQuMZ5kvsNgJq",
  "key14": "3Yme81eCfxkgjGAFcp3Ly173BX6a9UJaouGuUAErw72VyPsSrLB8WnpPMDf18WDd441eEQ9HW66nTronc75p3giF",
  "key15": "hjnHAeZLuyMNyhzkHughL8WQB1k22t1Nt5XWwKrDYm5VPrRgG8XkMRXVonkmcxkPDn6uDkm1JVzbP4bbVkgmuv1",
  "key16": "2RzXWNEc2J3WxRuakLgF4jThhdGFptkg16eNaHksXP5kZsVfFikXbj7UEhWeubjZ36SKfjgiPWUBtxFXv64Enorr",
  "key17": "62yvKUb1c1hh4p52zYVuMVwqvvT2sGpEdoQvS7rp7EXF9dnvagrhpRsT8bW2JrGQcsANtHXwZAR8APSsd81E6Yt1",
  "key18": "5bcVj6fqq1deCXz3N9poHXbDYHQxS45eNTGW3pvZRiQbtxQgNvvxynzHJzP9vtJDJemaYWQuYJwDAMKLhSxtVFC",
  "key19": "64WprpdjYLPdBa1nYELvXRH9DFkYszqcXZSXx5agAHdTnziXGBDwfnWmeFy3ZCJ3uRNUKy6fHxUgqP1LwBg9zMBG",
  "key20": "52TJfxkzA4heGNAzaUbKyaDx4VDLzoH6D2bVzvbksBA4f2NYFYiPeLgymBMPZpxhSSwD5Bc6c3AEXUefBzB2wMZz",
  "key21": "Ff2tS9yDJoKtp5bUvaEX2uU3Lik8iF3TurrGn8vSTcKhNN8XuqXvSJzaxjPRVL6icuox7XQdq3HLD3HxCbXui4z",
  "key22": "56rFWYxLYLkFsWYkjv3f2xGZusmCHeveiJw2x7JsBeJY7gy95sR1QjMmLPzDwkDjc3RvTEqSxKqXJkhJnHSeFZcB",
  "key23": "a8AiTb7YcqsQ7Mqa4wRGDLtJuhZeDymj75N7NDgw9pibhZfycTFf3TeLhxpzuoSxpuZNijT1w9jC6XUQNHUuppq",
  "key24": "3LoCC2y8SEF2rpEYEZSKEdyFMuZ78VzUJXRsvQvFcKhHbEkLr4i79B8K3gRAoVb9X3EBJN8vxEWDCGPhiE6u98vq",
  "key25": "2fv69nna9p1KLNzhHTtv3p17MhBYE7jSWpJLnKhuE9iMNxFW4woQjvAtyV7gDkfooonGJQATyH9Dk7mcVYDZoqhN",
  "key26": "3o2zM6peY7cc8kbjVBpHmdMNpT6sYzGBAT5QNPrBnV9Ja5utBb3mhtYHjsKgrnauWSorCsWAeYTaJea9knQWiNrM",
  "key27": "PYvqW8Htai3EVnfvmNjBwVr2HQaPqsrHQaxWApVk4mnhxwm7sQkWrk48MBjS97pr8ti8VMLnrhL4jPwimnpEVL5",
  "key28": "5PsppzcjKPVyb3v7FuRpcAU32gYG8p6SxsoZMvNuJvQhprnZRpRtXgDMCKkAQdEHgS6svezV6rKLCcHKvKZ2uy5p",
  "key29": "r1K5ZjkqrTt5cQE8s1iebBPPnYbLELkqcAdFu4PZjnizHCbFiKawD1pV878mrzUaApUiUJ3FHA5nw6oTGKrT7Yi",
  "key30": "648jH1TNef3j9HmNhGyLzQuypFRykLpKkZuT8tXPhT6xMgknaCT2cR6c2QW7svz7z2xSabPWgqsfi5sLB6kqeHkm",
  "key31": "5kQkHCU5JNYhSa1Er45fLzBFZfG71nmFQvmYimkEVty9g29ws5fKLKfiqWtxjf1C5gCPwVDYViRrQmDU9TcPh4Dy",
  "key32": "iUwPZrPAcG8FNsFkd6zmwqZwgpqkUuwKb5Uhgw9FcKPc3vH6wnVtEDKDBTJep12KK9xDBQRDzrwfbqLcUuj9sz3",
  "key33": "J4nXFd3nM2M2P5vod2yaRudLZRb2KikT3NEkkeaUM8fh9DarqcViK4cBwXXmFc4hKtJNi3cogb455vM5V6em3av",
  "key34": "4doucGXiRRkWDLzXhVoK5TCrvgPdZBmyzFYKeuQa1Mqpm5pHLYjDq8RoRyeemMtthcjH43wytAfZxMPHQ46j9a9Z",
  "key35": "5KFRkZDXZreh7ZrqUggimCjQdCWxjui8KhSjLNLGK5MTkp99Qg8FFFdEPJ3bSw7WAUXA9bvBWgEoN7EBTv1TJYMF",
  "key36": "2xBUEuXpxNaRht8Nc2vQPUg4McM5UEdm8yw2X5YcKL2Zrov6dNJdw5v4jm8FMqV5n4hCXDeMQGVuPPvSDMH5jvMh",
  "key37": "5j64F5qMXXoXHerzU7hMydgQvtCVJ57tnyyh5Uk64Xg6vwvodqY5kZDF4dNgNu9vcCGVLweHWAc9mLX98P1tag81",
  "key38": "4mJHVDLQbeLeJQEH7JmworkKYH2Z5SPyd35q7GgR6HxapvmuAVfyFq7j4o8gzucm2vKtv5MK8P4d3e3ngrJU36KV"
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
