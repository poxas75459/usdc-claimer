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
    "tE38aGML6N7rQCgVfV6HdJs7KzHEdccMbBKoshU6vLrK7v2i9AU5RXjQgzsyh2VMPT3G5kEQQaZWQbhQxRvzMgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YTxWEYxa4rUwK2jg9PXkLcyR8qasNRWMRwGA1Kin8TaR9Mz4S51kD87qLNJQK1uEwad5A7SwPbVgZq7738PJXv7",
  "key1": "4SgGjG2Z32bPceKzSkwQ464JXMTvdp2AU6kUetbVFqtbuTztVRJhMxtvU9EfyKnq3XAzHvxnUxVTBJQ5wYYd5V7p",
  "key2": "43QWZQNEGRGJCM4MdDp2C2nMvNQfJ6r5PnR1Fbwtj4TvYw6Q6pTWFYNZ4sQi6CWCoJq3dKeGiouwHBfeo5KfikTU",
  "key3": "59SLrZeTzuxiPXCbfrXfH6Sh2H7CwsVh5gHcFjnvPSHfou68YFVPprtUefQZP9XMQRyYGPmMSKYXMWQgzZwmyGoy",
  "key4": "4gFMpduXwvDZjwdhhMqoizsg4cuQ8Jqu2Zv9GkzRVvt4f741K9bHkFkeGDWfgzYsV2QRrJPrkii7kaCzCQowANW8",
  "key5": "4Avij9QsirqUFqMUJ9e54FtWpZtc1hk399wRyHTGuRhADcgKzrFtngEatBwkY5GGVPSDvMdV7irRgFoEeochSnn5",
  "key6": "3b5p2fEYJfwFFCdAxz3fUvywk88XwdhxpMzojvVFgrnF934Zi7J84Td1v4MwYoMCT2fUd6J3dkjRrUex2UEQDxrG",
  "key7": "5TzXDnKdHR41EWrdby2gdcnKyyGh7v5BTBUJynGxWEtr3noGR4A6EhURdKuWSQkeqXRdibWDi8ubWNhx2U3npp1r",
  "key8": "5CGRxKKQquPP1k6MM3hp9J9ML3F94WrboJgTDQzXqNSgapi17kttyognNzyLqPo6MJrkBdRt9V2fBHDWhMXtV4Yi",
  "key9": "66AeSAankhUVwkYZmyj7wvjAE7h3o8YPcdmhiLSnvDpdABaxrQZ7DqsAUZNxNP9WATf6q194Hi14shhfGyeuEgc1",
  "key10": "5NqVtWyomQkA8bf5fLabLAWggzbvecVEtz6we3XzF8BJPrtJCoCSW4A7vHVVXWRkeKKW5QDqayMZwSqQybPHnpfE",
  "key11": "frxfmP1R1j2tdWEqogeKW7CYyzYXAQpUVToiF2u6iHMdeCro18UoPVd7Xfgo157zt3G6Rh4ykKp96iAWUzd5TME",
  "key12": "HoZGfznYt49EKV9duCAhWNo4jm2Gst6xWMHkotTpsnH5uY8STco8Ux1w6nmkij8sWpyHzCR4c9H6XSJwVYNDT1K",
  "key13": "2azsLXp8Mp8UBPnehYL649C4w5VEqjQcKMyaY3BkouBSv9GQkrk6GdckHtpQzEGDukvWRAFmgdyrk3qcUFFBvE1D",
  "key14": "2JiwPpwiswxR4gVKUGAaX5iLr1rqiahzAjxCXWyw5B2MZK5heyuFUDgF8TGrHfTuxULGS7C7hwr1b3g4rvJvsiEu",
  "key15": "2Rr8Luegav6eYg8Vs3a2mG8zM31PLk2qbJpjPcPMKZTNPqR5LzMasXELFHaqZFrAEGCoAges8SF6DnoXwj5Kq987",
  "key16": "K2ziFeS5SjcDi8bv3smA5HD2UeM4cyZrjNA6e5WuxVknuzDAa7J8q2GtxiXGWskJUYUfoHQ2xEuESgzs3orzUWv",
  "key17": "4j614qN5YzLBz6YvDr6cWvcyLDrwP1nNfFg6GggDKaAacMevTxpsTDscDFVPE1YqSCWpqHtEKsSVib4b2izrYT3Q",
  "key18": "2w2k11AQNBCjigogjqMYwRQbM8bJJ29piLVuJYwQ1Q56kGLdyRyCVsuh3hAtX4ASP87jHepqdeETDftXeRhosMfd",
  "key19": "5UtNSjtPvEUqCb9V9JoJtSbXim5mfbKsJZBVziYUQr8uGBgzZUZkrxKPqMcLnjqPy2J9fL1s61DSvVkr29Re3EPq",
  "key20": "2BfpomWTcECFc3usnXH5853Mzd998wFYkBNmbg1aFNDWPzLmsAtRtX8ZgpEgBrZh1y3nFMqFFTdNLDb2e4gLoR9T",
  "key21": "jEzRJhZQ9QY35hzZZmpQpUq21hEaqLcsuDaEdGYQQsATVNiyyqj63A95bdxGwy96wKCVgt82jB6U3p4sHzMiu1w",
  "key22": "GajyHzTkxqBCYyiNJxpc38EjpEAzkRNBVDhPBn3qNQsr9bw3E6WZPjBA1FcR5wSDpsbdWxSyJHYR2kfspJNH9qu",
  "key23": "2Gw1ScdV3GeECTac3oUsQSo8ty6AHKrbXDzdBgwfRtc9LqLLAgREjXav7tpzNDRsGrsBaroBWXhzBiCBLkL6ZbbF",
  "key24": "4sDmtwpen2FcsEbQUVg7u18rKdgFe7Sbi2DvQBFosQG1tvxiUKYbhxNR2S9E3Yg6Lz48LaSq6FNYyWRe497VYV8H",
  "key25": "2yP7vTPGcukNNDH9VkXd2W2ayUJ1W1en8LSdcejpxkhTCV3kWXUuiEAHPAHvdyTHuzyNYtme5dReu997HrFE32hP",
  "key26": "5sA7xnUVK4FXCJ9wagh73FuucwogWCafstRcx6uCTQXghtu25Td4F3DZGBh6QXFpUzJyV682mtBSjksyarnn95V9",
  "key27": "494EFzGo5foKYJxjyGPVTJ9BbknbhtEEKr5nUn88r4gTwubt62PBDvpk8ZnaqKTViqkvLRoNX2BKTAC2AU2XrJmy",
  "key28": "3yUXz6huE1xXnydW6bFVhZ9xpSBaiTsNTooyny1rLJuwk6Do3agehxbX4qp6VhY4kX9Xuinhtin9wHmcoxtKeG3y",
  "key29": "2dWHmNwuYgxJCcL6FFPB7opMatRNAuJqxfeshAXD3aMSe8aV94fH4G8DXCeKTTM8owZnd1KPNuMW9ruBRN6LRa8r",
  "key30": "5Y8hp91ZNTWhzdpLavkaWZuJpHKu1VgCGWHjYFHZoG4A5edYyBpHJsMuqN893gyW1fdvTeKf9hZL8cw3K4Ebp8xW",
  "key31": "2NpbYWzQBJkTVNjVvERLsCVFQ1RWUYU5nW6nxD4AzNYstfNG6jNHYSHfjScDotpzNneVY37i44QrtutVNUzWYRjh",
  "key32": "5FRv8pih6bvHuRfKZGTMJGX4jr6wkYgn9s2FUNne3LRMiCs9LHL2WsrDhFcWcyo7ypPirs5u8U3VzngvdsruWdXk",
  "key33": "2HkD2cr9qVssknaZFGLSk6UWeHg57fx6XsLbQjggCNRk1EVYFWHiXbThByMGwsccdxkKYY9fx1NYposik4yMdd8c",
  "key34": "3evfTC7yo81BiffTVmDxsBwPgfAbLVXAfdLB1QPXNb6viCbYxkqEiZaKXECf63uJTAYt7nSxbdMNb9Rt59cLSr1L",
  "key35": "4J6dUpfWoyr59Q9CHWUBenhQ9ysXxvovYkwexqD4F8XntdCeDM3bWFUH5de7x33qFcaPKPMW14E3HqTJg31afjTV",
  "key36": "5gsnjqju4YN8Mpe5GCrKc8s2XwsHnsGNzqR1EBFjG23ZFdVbf4nWHC5T384ZboYwrkJ8aHdKeUFpwvcj1aUrNQGE",
  "key37": "2KT5yQv4Ws8XgydzbZ5GcggNYx86K3cJqCPDyh8DfFSGwcpzqzyt7dH44YvMnPvMU1hETXws1UA1N9z8Qq8DgKp9",
  "key38": "4gVE7UymWgEBtEocirU7zRL51GBkPap2GWffUn7YJvCMpCTCw6gAHn6sgxgWeJbZH7YfMBRuPJ4tK3og2M8PV8QQ",
  "key39": "aqoG6T87XNgY3SsQkB4Ak72jz5MgQAYPNe6E4VpH5ZY6Boq45YkMU5dw5arh4GfhqVpMYTyZQT8DhKSb21j1ips",
  "key40": "63SHc2vMwDGQFHCP8BHnFNtxof2VsRRZgmEf8GzGEMwS7ZGmWmRu77WqoUW5VcNEjxqM2cVJoKJcYf18TkcCTQPj",
  "key41": "5bvDZ1GJgkbpGWNiUkox23yjsouUmQ8BD4fEXDL3EWJHsuRh73HAHH6VaCuHwbWK1AbqL911Gmvcz2dKqcfhHaDt",
  "key42": "2oqjkPbjAHBzBFGEXcBdB7fqa9CaukrgQQfwpXN9ck4HoC311XuESB5hUiHVTfAKopfyNtetx73Cmauzf8riWdW4",
  "key43": "E938nq8E5hfBpfGnkuNR3ZAMqoe4ieHuHrsqTi9Hww6yAHq8Fd82Dxx3EBJYSyaAgtaTS34C4nfz7RyVQg5PXUV",
  "key44": "2U5pBA5L3haEXaAKyBcgVDffBQ3gou6MRt8hSqnSTdcE5n8fGE9HG1ZWUeWBuzNksR95PrJwpnGP6nbT1dg1AqPL",
  "key45": "3SS1nx7btiJDvUCWopAhGxZi87FqaDwE6FhrtztdR7cAnDzsERifZ5QLt9gLVaT3zF421N1Hy1xCpxJFK9sBzjRj",
  "key46": "4RoiK7ww87N3Xj2s4NiEdQmxYWP81sgGBbjF6CrycTQqAhBBLyB2vgfbQqr9tqgonqyFHT3WAuzU3W13g4VCfBp4",
  "key47": "5BRGD2gAwDU7UytEgCaoA72CurkQ94LBQYeXoxy85vDh5nz2gaRVNg17h2K2zhAb821vHMwe8HH2QiLxKQJABHtW",
  "key48": "44QcC8BfUPvDe1nw7vDJGRv1uXM1wDu54he6xFfamhT3gcwKMTMrqZVLCHCSAV5tRYtckWxX1Ucc6zBUXexV66KF",
  "key49": "1Ffn6HTmGaWGSZMdm5nVANtCsWGNhKYiQzMwKR8GQZ4sdSYwvhSnEgrnVbVxJ1tkXHovvvkBysAXujwGxnmnjFW"
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
