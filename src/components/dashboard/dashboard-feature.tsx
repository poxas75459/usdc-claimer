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
    "Jzu1mQFfLADGBRR8zoqnsVrvHVXSsSHrAnmXX2iU2ZPrAHfHGZXia4axzoQW3vbWEze3bL7ZPuR4SfbQQvT4Dyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XztPuoMjYiUuQoeXfDxAJUoLqP812FrCt83VHbuSaoNkizJJZBE7zsq2sTNmCqyeYNgT6P4HxzTD3sjn1SPtAvt",
  "key1": "FH2w2SUuD3MFHiCzyiYVobRdxvywHHuq9nidTLCG5YbDGTqDbz7URR3ncngruKXA3EJmaUvc41Si1HfLqsVjT2r",
  "key2": "2xSw7GygReCBw1xrybxatCSzaRzpw8HysWASaaHRvgEzZL7VzfMFTnqMXzWkeAKxpetpPBcVhFhNaPshyghy4tmh",
  "key3": "LPoBivrVDiDXKkQfh7ECcZCHdrT5GkU2Tc7Lc2xFH242qypNxdXBTuZaiJFABDpkPxwWmU1MdmzLGo4GrvuL89b",
  "key4": "5rXaXoFtbZuxMjLTuLNA5aeT6vXVT1DRPUP8nEpCTUrZUCPpt9ygwVesSHdGnqVsQehh2F7MjntbWHZMmaHNtBsU",
  "key5": "2HMEHQRvJz34sGMCYbomYR6SUBC4VQ5enVsDHnUXGgdCKVSimRwHMc3PzqRtqqeNfFjGprYauvSVWJU7FEXEzXrr",
  "key6": "sBBVUmUzd9gcGjL7uY8qS9GjTs3B89qME7WtbrUn7Z99uPzamdqguw9ByuWbWf9YQ9x4Pqh4dQsPw9MW6JNKWKR",
  "key7": "3aPj11CCpLx5Feg6unL8jKNTg8Q2BVCjT1PU5JRfL71HTbzVaqCqZxhhUUJhCXcAirheFZrERdTsvuUzBq1bWUbu",
  "key8": "3RmY8iUujmzJEMU4d8kjNHUS1Dt9JUUa633FWzeLaZ3k3XT321hrZ5Vwj9D6QMw9krqVZmcGwhRSucM4stcxzdLZ",
  "key9": "4ZMXpzpAJ3vpvqXGgs3Qyektx3aBau3NqugR1cUbFDYsHGzXyvhaQQVU4QsfQvsYRJRpphT1m6YQEx5EZ32gMYPa",
  "key10": "TKMq4zMiP66SW6E3nu4sFFCdR6FyRmasosKKM9F6j3A61kijgcWCZt73SQFKakHbgCxRBtERgWjHQtSiZxUkisW",
  "key11": "3HGLMiUBXiCXgZaUoKSji4NFbV1q3KWE5EpbZKrWwPcUy7yonLCroeL4vwFxMuzAindDUTo728ZuKVtTspsNf5aN",
  "key12": "9FgaiaJUdxgheiU3ttFc5aAj4t3BpyqPPFCDLJDyansARbDhT5vYPqitxtMKKfYh6rxcdzjaXeUbz8WtEoPKRKo",
  "key13": "3V8U95yXeZPmfq4KXnQmbqRb1YpWQsatnFSdDbcZv8L23Zy9jLF3mZLQL6xCsPiejr2VuvNRmetX7XwoWVAUdE7A",
  "key14": "5EWUGrz8Unktn7B5K58Yp2Zy3eiVQGdzXuA4QAiGRvSntXQS4Aer6sthwpp6Qjee4Zj1QSBuKnoMGGzpSUp1sMDp",
  "key15": "22gW17FdqhRnyykdGhMR7JymKGZpvrRPgocF78dumXauL4RGZdt9RLUiM2GBte1BJjtj6iC6FQwjBoDU7BmtxPf1",
  "key16": "2zJcZWz1UgDPTSqvKjByV8FHN7tT6Ao7n4NXaLE1AGzxT3MWhnvwauiA4L3dm5VarBjRmPvRUBgw6TkinF8MCUSQ",
  "key17": "3WQDQgzMw9AoiZYMHhez8sjK54qtX6EMuJrv47Acs9nY8XChzdaxtUC7BaTWXr42RAdoKm1imNYpSMbb4DehHLoc",
  "key18": "3qBsPCSWRGNRT2Xnz6v73Yu6RMcuX5Kf51iXLSG4goxbh5LxnNeXeCv1ozK3Pfn5PQgq5yJLoagv8kkdXD7PuxWt",
  "key19": "4YRXYwiUhff1tnkSRMEnWhqXtM283DoK9p5rUcH332ogzdkbt3sBRxqsaQQ4D8w31rSrkAeDQhwCXiWcopkXxjd2",
  "key20": "5tLp7GxVaL3yLeuFynMP3N2snZ28xAcuGP9TeQR7wPnsBSxpf6Wp4THUwwPFbcgyD5dH8GePzpyDDLoQEM1Jatt8",
  "key21": "24Xxk4hqs6hX8Juu9WEa1tzowU8775Mo2TpURGaNHoVHSBEntfMied4HmtpWQQwDLWRqJZm5S6SLkB1JQ7Cp5nTj",
  "key22": "4aHa631YQ2NfX7HqVCXTemz2iRkGRTb4DivauqvbQB4kVnxDF1RLQ95NNSKE7PKSz71eyLuwdMoVHBV3s1prm2mT",
  "key23": "2vQW7ZEk36Vpvf1H5TUg3HFSZ9BPcpG9bmyRQTxD2q56QNzDVJ8ouXR6PWPeDZ2v3XFAj6Wv4Yo5CohEdiKvdp43",
  "key24": "5o5qnwMDy4yqvuuqgv8MMeiAfKi5imfdxEsGgS4yHzSApUx9DH7p7tC7NGR3xJg5Qow7M18rAr1eDWfySvf3upmX",
  "key25": "2VYtJKe6QQJHWE6xSGxZBq72M5SA19byVuumC6WKR3yoEP7yHLpSqiB1nypbkhmFUkdBZyytvwELWWWccxx4PjgE",
  "key26": "4mKqaJ9zBQ4K6hCjBuTG38M26WzGhTWZWCGzQydZaST4356zYxhjJqAuM3khdzAACUWgWx71NDowNbgKXA4TeLUr",
  "key27": "gwmTxKxEk1J2zVP56wsY5nLQ1UyhcxXwAAAnx7p9SUJLw4mwYFw2LXArVjYVYNWxKReGUByN4wpcy4F6fbhs2GT",
  "key28": "1KGNBL7Nb6ychy6uXECHWumjnEDfuypTYjVYx6ghvCBWnKj4dLrxotNc3UEYHkARU1n3H2joi1zU9fKTjQPZ7Fw",
  "key29": "4s4JF5oNXUsYca5PqbXHWRAYbKf9bqQ7B9YwMe2JUrnUXVh6ML8KV5yzkk4BvfgPdwK6PsjY4aeBbLgceBerPVPY",
  "key30": "4t4at1hcWn7BRZ8Q6XgsMZYgZojXDkbGjDJteDT8ZNqHt5iaDZVuFqQZm6BmK1zPzxDcHogiRhxxSeJovHAYwaRo",
  "key31": "KtPyeNkeV68FPMBGhCmBbgy2HyjfNgw5tM1XnueUyvKcHx9f8VJsVMQPSrRUB8jpcHruVjNKn2jnjrdXGcruGMy",
  "key32": "2a75e2LbWckbNZ61gyuvQq4J2BCGW8xxovhVoFgmz9pcgmVcJWz3hpv9nojMMQ5idgjrBBE9hHsc9yXoWWXgMJmn",
  "key33": "4J5dPw3XVdtGkFm4xHFDrTnfxyJTDbxTnsDdh5z6dPSQr36pMGS7JBLo4htqUmPpwhDqw9eM4eazuSn8jMx5wHPZ",
  "key34": "3ApvvXJNZHa3HUAwK2mZGQahw9a81Rvw9TS5jr4ARx7ZcemcZZ5AztbJUjMtdZUsoMpRZtoBCdSWzn63fhos2hSn",
  "key35": "5RpKzjAaAPAdYmCpVf1pQH26RqKf9t9DhMfVHnhrfM2CsBx4g5L3zjZYXFhEez5roD6ghwbg3xHS2Xu4Kj3foxRb",
  "key36": "3ov98G5TEh2VKKt92Dr1iKUXuvLLaj4HKefiHCaGarb63VUX11BDrMvPAmbtAkadPS65CX9ccU9szZucYknYButi",
  "key37": "58MzmYFmk23oNvdLP81maX6iwNTsD4dPGe7US3USGusbCGVJfwtJ5Cz5MHh8VzBNuuctUFxpPC76Lych32wuQxSv",
  "key38": "5PcSdFKvchM6XRSmA3fMB5ZZwGDVS8N9zTUMigs9DHiL4mj8SdCwYDJsf1Zjnm2ucuarhKybHy4KAYaRivpnbKaV",
  "key39": "J4oeF9KD6FeFfXw3LvRNMcyHsapzQcjpKBvVJAWhrcKvWk1CxsofkYci6hrkiorZxZL8u2jgfm2eAoSE7qexdVa",
  "key40": "4CC7vP9xiPSQtWPvr82m7CRggTaLJuSzGqStmoNDd4vnrUZVtBW9S3wcUQgkZ22Cq8df3BVpCTN4xBjkiP6jEbLX",
  "key41": "49dEbMPzBK39z1MHGLkkR2Mp5DccCBfaftMs4aJ6Q6YwHBwxfsDrgjKExgZHfTFmKGZr81MY8Y5ZRQc9iC3QiV51",
  "key42": "FovRQEYzRwp1tF7D36mR8Ke7aiue64j77hcghLudQdE7UDMVC8UomDRsLp6nLbLAfb5qPpLxkk1UP1yjkEGDuyP",
  "key43": "n5MkBniqw6xU4wv4wWY7qMD4MXC9W5p9jnEUhoWDYPdeJU8VNUBYtHYUMZGhsxp5k6hBacAwqgjBnkqfpkpTr3x",
  "key44": "41taTXiTJrTSuU4mC6xNDBvV1VhgemP9jZSDQ192pa26eMLwP5QhD3mtLp5Vbi5kVdNGt98V9bhMqtcJguoUZzUU",
  "key45": "5KTL68TDdCYMRWt8gREhxnBNv49Vmygd2RuzeVULxDibuRwtGsMnehFzvSvBdJ3eLQKU3D469rdKZJoqKQ5ReK23",
  "key46": "2tAGJNH38BmHbRBXadrej5byCGRX2iUmyCGgdLSDDQy5kjZmFuMsLtXEdmqBvgFGSYkzrdQp21TG96QdcAuaXmkX"
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
