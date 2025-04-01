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
    "T9ePb3dBfhZGMnxdC9BYyCAajkUQqFFvRjHC1h36yWmCUF2bzxjvKUMPxgKD2t9NpPjEnTD3MVTCbr35izqzm7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GWxu2yNg5LMcSM68Cc2AmebkwuWR6fZeCBhrqQQhgdFqjZ8aYc1rkYUxFydpPrG4eArvbyQwFUQBahNAEfKW58a",
  "key1": "5Kg9DvQkqoRCKa8NkH1aESdifyAenDMzMvB1Uin6u2KTQbeXoTVi7ohtNreWCRfzarY6z7XGk7uPob1JiuJ6aaRa",
  "key2": "orSPTy3j3i6SDCsor7uPVqHzHPUSxC4pNRAxocB1nxKW7SCNZ9r8dntN422bxw3vtpTcfS5oE3vjorWFcEmn2AJ",
  "key3": "3GmJNgzksmat7zBDdeGREgZbKGtNbT7oM2DPuQy8WXhfyZztMudsquX5c91e4iWTMA6NzHxckPz69DFPvNPrqoY1",
  "key4": "ckNh2K7NP5vvi6XZWHr2MSXcWxtNxMHfRpf64gwLNaG9mwZQTfvMJbS3JqZNGWN6waYfx68DP7TrG2ptwTGJ8Hd",
  "key5": "gHbySDHxJ2xC9Pkg6qRdSvQBRsu1a4vijP3GAFW5y8Bimca7G62TYthWxqbF9ANgCg8tnza4Kp1g8KkLetMNXSR",
  "key6": "4ACGDFFoaoo2WLeJbWvQSmpzjkLSR8GmKQ8zGjTd6x6qmck3iWisYn6h2D9iivmJQ1j6NHnvrPEhKWzYVbxu17qq",
  "key7": "34CTwgUx1GgtwD5JA9RrzuYHyxyaFyehauWRoZtiLCiR6aJdU5XRvi2FY7b9GeJx7ycrwJBTewBG9mB5rcHMWE5e",
  "key8": "3d7TugsraE5tKczdhxfRS3dRcFV4Gk3bQEgJ6YYxQ6s9HZuRmGWqekE2A8W3SzqyWwuK2Z8oViu4pdDkCbf4G3Hb",
  "key9": "4Nit8mX8CUQ2Z2CGrn2rjeMt65YCBdNrJt2VytgXKXXyRbnv7Y57a7aY1zFnqFCjeU91Tnvtgzae87r4uQL2sgWy",
  "key10": "yQ2w8hTmqSEFWebSr3mzVvMGRtEkZWFMdFoXnv5JfgjaDNedh6dbLSQ1CCJRy4arMHExSca8sur3iyiro7c4egK",
  "key11": "3WkCe2R4rSLPc5sWZdHScQpx2WE1gg9fAunvA3cQgEdpocSjBfaxsmkvepTSQsCa4aNfNu5DgeP5q9WS7xXNFLWC",
  "key12": "2o1j6A3dNgU4NL8guRfBpwQ5XQK2NVHLxhxBS91nijb6Fbfwpydiv2RMW6iobMvBYsoJt1bvrtq5ZyLDHMi8t9mY",
  "key13": "3XcGZRKpHGuY1jiFL4nnSFbGobK2cqTpMasaxqUXEW1eNzNsJxfsztqa44vyz3hTo5NwE2D1AVuQj4itGSJeEa1f",
  "key14": "4ENf9Te2S4ZZYDvYenQJtEt2mYvnYzsH2ZLaP8B1pjyx1znscKSzUTAJbigusQ9rb21Lzzujd7yT21Lhd2P9WsoV",
  "key15": "2s5qunjvbAf5QRkDKyTzhux8rTB9UpJkXgpbdBQeaKMgCT3nto45FFXNtCYro4YDKRQTV91tt9HE1T4UqsJMBW6",
  "key16": "3KgMGnd5kJ3ghG53BLdVNcjVvoLCe67Yi875KjF5MssT28ZJhXA6WGR3edA21jqhPMCEQExUPobbHH2Me5Yqsuh7",
  "key17": "5xYJfJShqZv6EgECfSiAwxx6geCM1X7rVAZ86hxaZzEeYv8GKvK1NSMgmVrPQQ2bPauMmUCdG7Z1A1TrUvZArphs",
  "key18": "45LrKEEYp7pXQm9VQ4GjbVH7MgVieqXHNCknoqTSL1KgedxXynvKBZXBYPygRaE2qJBCj35g4h6EEeSbLwneHcBn",
  "key19": "5x3v5owvGh6BvZupB8uQacXHGrzHMXQ5Bhj6kzfxc5i2yd2YXEbgQoCa69sTaUZPMi5FUk4hJ1U5KXQ75H9UA3x",
  "key20": "7QCCVVy7XyyYVAK7aEUuUbknEVFWP8kYfuLyxEhKSS83rYpoTsVyRDCyyRYenx15vNEr6GiYvsqxnXCvEHbtFQe",
  "key21": "452ia2gQwGs39X2njzv3PCj5Y1oN6kzpugYhPdhzb5ZpbLM84yEjN7hpriRRNk2yzaQmNmSvrHwcTpUxTTg6k7Bu",
  "key22": "5fmGximVzvA3P9nkJnUx2SGPXbFgs6y9L7vNd5FtJztDjh9uECuJgD77Xta9im2bWE5UDn2AGVNLhUh3bhS3L7fz",
  "key23": "2TnhEX31KYW3fKph8gr7wa9oKkfyJYB4bPCBe664LhArWS52Sr8fREUmiF4dMSoNgWwfUr1a1HSwZQstt7Tevm2j",
  "key24": "wpywoz5WKAKY2TMDy8tczFVuqah2DE5gxmQemKhdRgFhb4JA89KkKZD2whZeqth45fsBc2YBzwRyRpHdnL26Nr9",
  "key25": "3DFeupXg2Mfiz88eewJ4KwGt5dszpNauZQXXiXEARREVw25iXRK5EG6CbHEgKNyfXkPEJftEF84uWZjBZrxWJLcb",
  "key26": "btcbS1fnbwVFbJKKzYS7zdcnFkeoUPEY8oenckQt88EcnyxWE1rNf22eY8Mjd9SrbnKET1wSXAZRgrLPsLCkdQ8",
  "key27": "5p5Su2oSRQf7mdX6CkhafjdPqpcKxhKNBKdpXmvJpzCFGyccmoz9ywe1pgVuphVVZvmmzyBkRsUhyLNeZAb44vHn",
  "key28": "3sv9AE8JN81TLJWP7bC5XK7W1qcuUVyw4XC2rBZeVcFcrPy1a8foKiNpijhP1YmHHpRv4H1dkqRC5xNpftEEMVDc",
  "key29": "2GjGp6vvEDW76ECZADCtZA8N2jS5rqd1QjHQmgNeQC6PhkViCdqz2YSoUfawARwaA9DFsbDtNxAGUVaKNGthU5kg",
  "key30": "2NkFi8UJYvtkRGLo8m4cj4bN79wZcjdmBpVaM5nu1Tia4q3aYiDxw2JDPNAZhnWTGWXJiU4v4C9VW8k2Gd4wgEj9",
  "key31": "4qksrR8G7wBw7SmKX919nUbamhdd8m1FqUxREaKJf3AXCsMSyT4XwBdtgKLxPidoU65VG3eff7nXYP7gHEGuiKXC",
  "key32": "2b8D2xhKA37Mc1ENE1ACFzJn3iZWXfQNFK989eWahmfxmn33BWHTsDxHYRRc9K47hnCgWnkhmbCcEFJYKEPsfxiN",
  "key33": "5e3aGtJUEnWisiNWPnFjhLeo8swAU76yg7ty5xnYFUFvsLdLp6bzdf4hi7bzvXHqKD8b1nv8FDtf3kmfGxQBawYf",
  "key34": "2UWgq3wyp2KEX6qgvNxSfHabMLZJuaUvMYvpATZ34VKwfj1jQMhfokq3EdUcRBEXcM1ogcKj9UU5jK9s3QUSqWm",
  "key35": "2fEdk7X3NvsWk5ApEMcCeyAYGb4EhWzKGjqWWNV66PmhKeYic3uCisJ3J8aw8toinS92YuwhQLWJ96X33SQUDEhs",
  "key36": "3SzSHSYix4RUCY1N5BaFcJgs1RgR4TSaNGMzz8jyGVU69pELKzeKfa6o1MUWAqJGr1ttNq8PqssH3Qjver2oyqbG",
  "key37": "2A1payTpYBKTZwUCG9seHpPEjQnZPW8x7uwL7UMMA26oC6M2GECNTatc5uVkw5nexQbeDkcFWcEyUhncW82T8T4s",
  "key38": "X3ZzeQHtozNDt11cW1QVz5xxp7f9vcEPzwdkbJQr9c8fPmNVZVz3yjSA5SZDk23L5wXYUhXjSF5mk84VexPDi7M",
  "key39": "sL7ADiJnLfEQYMbiJvsWCWazEYg7bd1U9q9rmjk1tqmGhmGRUND4iiiqSBncyNGdsmFNRmCtfmsoZ7vbq3zHcUT",
  "key40": "5ASHsSjpryR7RR7xV7Juy6YDx6fJHEYPYMYcD8o8G8wFutzTzvAE3FZ5mKXNuG1tkcP7QoYHVCCXXv9R1FFGWEac",
  "key41": "4UQuWyRhzgWv3gxiF2fXNbKCssiCaibqJC9EpyAnSrYXoKfsJ8hqh3eFFvVuvoTJi9W4ToVCsL1AtMvFBNnDkLj8",
  "key42": "2XBKmnGDWJbKq2MQVHCT4BorztkUqhZ5rU2zRVLuu2bXSoANpUS8f8ybbwcd3LZHaX8oPDcmBAtMMBPWw2UVaztG",
  "key43": "GyB9VPrEMMqyKBjFEc2txgAZCRNdmFqkBnMUR6t8Aj5evpJzBNW56qvHZnmNqSPx9aBMTkBftLJ6FUSC2Fp7CJQ",
  "key44": "29KX1YRbow5TsE5hX59N2sh7UmPhiDr2h6ZW1Ap4MN56MTDGFYg2iUX6XyMRSpkrd5caS9br9RR5ojAX6wWWRbyY",
  "key45": "4AtpNjkR16GgRJKDRPWj21rRCJB2rs12vUTZJ9etmca3JW6foevMKvANMaf2GEV35BpEwa6CaWPNW7cyDAzdCr2b",
  "key46": "g2AAywoLWWsu6bQVEFzqqthrrWNE38VDcTNWmzeUNvFWz7VzvoWA4hGWL78WDKegod7uw72AC4KhwWhvGUWi4u9",
  "key47": "47tRTvbbE2fasENfbH5uJtCjm8K6zuyD8Z6jSCVmhbjp5VwDM15zGxxVruPiDskMcGssbJd17dRHQkyDdnWLsVww",
  "key48": "5YyJ3VLFSuQifF6T4xHMhfRQyvoL6EziLmijEbY6PoGh9WUjoj774A9XroNYjycE6LJ1a8UPCbXHvVbSZnr87mNG",
  "key49": "2NcoJZj4cmGqim5SbmpPMqHHN4WBjn8ok7SMjxHeAVTumgYBiFzUjDxYybhTgGKDUqBPkzL7MWcCH3R8aDjPKcVk"
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
