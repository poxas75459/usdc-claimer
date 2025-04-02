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
    "27R3doBVAGfQrPUDZLoqFiH3QCFgfh14wunbUx8TuzxV2Kg1Jj8PYb3oRcoo8msF2xpJt3qZH19bb2AtYgpAJsnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "626c9Fpxs2ueDJa6j3f2oGwmbdZK61W9AFHXxgrJLv1i8hFkGG9dUE9NEFtELUvk7cmXTMYfGrMQvA567KFGsVNK",
  "key1": "43xxdwsmArEcz1pveRwEmpjgYR9A85RwTAHhZWw6WCXpMxT46q1K6HMhxN2ao9FHLHeXzec2aheWbcupZkrLyK8b",
  "key2": "4EyRaXuGWd8RDiMDeRkwrcaKvoAiM9maw3siweMEphREUyzmnCu6G3gBkevkbbQ9irafXnL2P8XH9qH71cWNGu5R",
  "key3": "3GBHNHFs1kVvz2TvGigEVWKkn34S4X83PdSwYAKXRErT9M7PV5ENgn3EJyjZioB9GwdRUyHatuMmDtZQLFeX96MF",
  "key4": "3nsnBCCz2RdcyjRJZGhSTrwBGkd7GWzGhYwkHBK3UgWwPBzxDfMhM4WcMUyC4R4Nti73S8gmeQU1Wmzejx581tfb",
  "key5": "3BoU62LV6KnkyEES7TDMnJuuuF8AvzrCfJWgrLmxJqwscuhyHZjDxrucnet2Xt7UpyiNsvDKTvWz3jq2aTYbSeWv",
  "key6": "gvZFokbLtwKGAq1S5S6P7TJbK9kN6jYBBG8g7uCtesebdWauXVKA3wZ1kRpt6H6QCh2KEvRmBnb7fe4M3u3wvBZ",
  "key7": "3wFiXquhy7Yb2MEieZ8R1q2yu6NBCDN4KmNNV87gusa5j1kVcfvkT9qAKHPrhU53DerrrHtii3PziG4eMpoVsmbN",
  "key8": "5WHNAYc5NSJGcxw33yRXLLfMhin5Zxx9LdSr2xdCa68ztg8ivq5RsLXi5mG7EDTAVuwoXtseXZXENnKjGCbPqeYa",
  "key9": "1Yxh8dymgPWVKtxUysBtboJi948era2qrHpv8hLau8eg7dQEYFaErrnyjvfiG9Hip8msjjnwGz2jwXXpYzdVDEx",
  "key10": "wror3pzqEYYLC9xp33yeYjUqmBadsxwkAAgYyrMtdjX6PMhgb7VNKDzrSLVHB2MC63sETq7S2m8n8dfUt6LtZyy",
  "key11": "4J6PLnfaYsoBqDFb4FK8axtQV6WLQ1scAwUssqr1vAezw7GFfs32gyyixjfhRu7bSQxL28ogRhgSZ3gSLsTRDiw5",
  "key12": "4oW7sLtd2F645zm2JT8Hs6Lq1sBBCZSuoFckUUpDfqZSQxFa9DNDNn9SLPFTrdMcSiSWYDRRHwGkDgdvBDzLj1dc",
  "key13": "2fA1MSpnRCCfRJBUi1eJJXsiXmTQgnaomQamSnTDaHDUUhVqRPUPs73RmbNMpR1C7sYmRFHbyNH1o89bB3X3DEtL",
  "key14": "58hEWBtTeEFTBsNs268P9d5j74nbpv5NHQbPuZt2UKCDY3VAk7AnhbWV547nSAPzKuvC1ym76C6Q1AbVV521Howv",
  "key15": "2uNXMfTQ95cvTNGj1SPrTzUZ18YdbwMEVNq5i2vxiHyiEyeNiF1ZsNpQUxmAjNZ4PfESULeWmkBbKH8dVRoK7Nr4",
  "key16": "4HS7MJ5oJQDM5psisvAY9Bj5rdGQfQpja188mniGpCeJnDPYmq8LpewNMQ2RfUDjUocY3yXLwwFpWRoY7Fgxps6J",
  "key17": "2yzmrFfNu4XuxzfBnD3DVnh7uvJp5hkzuWeKC6yu1cABJrBJmcCMW9JJPSbzsrSf8jtudeU3u77CWoEp3CGk1oxA",
  "key18": "TejModJaP5kTf5r6RaKxAgbCPJK4Mz5sx1mRRKwM7sH3J3JAVWr4mEYKS3joQM1dZzqE1XusHDVGoK21wGbcjfq",
  "key19": "3expiP6J9aP5RovcAcZ9J4hJMz72pfa2wCWTxvyBarYggfytMYSRmkDjzgcWgG8Gwu7qX29VLSm4w9yBYhQfjnsJ",
  "key20": "3esJEh8hy17VeWMVcep8e3RRJ6dyj5LA53cUiTgp5ct8tPgPtFLkz1bBMa2H1AQcQnefuTBxDhLUUUccVq8cxDET",
  "key21": "2xZKAUkmFi4f1op5DbQcvZfMhy4DpZXQJYN3aCffJhfo95JGKCaixEJHDTu6QZNFVGpbGYwiWvzEDLBzqjaspLZz",
  "key22": "ygmqRMjr5PdzCEkUyC47834r8h5eRgG3oMYGpEawRZ6Ht4ec8x9Bq49t9bjdaaXfb9kxtrVaJPM2ZYaPZZUCTXn",
  "key23": "5ja2wx26JX6XcEYMZhHYjG7wyS3ebfkAHsyg2kKEMs1q41s7kXQKxU6HKKiYgHb81M74NQZztSy4E6QFWAcNWM2G",
  "key24": "53QvfEFGmcepWKmQNQdsvKSPDQux23aUkMw5738JAko47kK6X5ZddCLKooFra1gYeYxXLQxUnKCyvuifddfCZUeT",
  "key25": "4sW9Ln3TusHQ86FPvjVuEtySmDeTJNvxQzjfmyjR56Uat1J9uw9pXq4TCF7oAyvUe6SHiFWNop32GjHhb6KFT1SF",
  "key26": "kVnTv3tWsdX67CNLqfeEv4o5s9XV1LYWqRArJcH95urd5onkd7ZTP9tyvyi8M78nkn8eLpenGaHMhjcUTQiHWRG",
  "key27": "24SymiKuXR43sf15jEYCjc7SwVAh9p9Eg5RenySikhTDR6SzuSYPnfejvB8Ei4mUDSutf3EWHzoUAKwLgaYV9u9X",
  "key28": "xAuTxZwTEJdiuhw1bSZW5S6Q9e7mhtLkAxiNC8yJkyJvgAVLyRhoHK1R8Bu8uXdGWBMp3pjMRYAZcWxdVD8t4a1",
  "key29": "aU7gAnVDApZh4QDzuqkZ5uveY8LQfNqJacLqnwcEXrE3De5sVL6qDDqnYr4cmVnxjokSC5YcuWFvymBzmB1aq6J",
  "key30": "3FFfMYwNr3BxbjE39Q9hNvhe3PPgrF7AcqSFyeYtAVLhiAVrEFeZLnmh8HuwvHBsn7sG11qdUY3UpZWRei7uDDsZ",
  "key31": "498PTQJNxB8ki4R2FaeSXh3u8kyPrgFk2p7X1mYycnGv1z2YhYpWHZoE5uXrLAcZEttEUecceanUQd6LhHM87397",
  "key32": "42TgFa94dPQ1cmk3JmtUy9BD4cu79G4PWgb8MAEvTRPWfoU4u4SBae9e512fbSVtupzTu1o7BJWdLgBZsDTNpyGQ",
  "key33": "5GNqFzWVTMQ92wHFbdsLLjMhV37xPipfu5wxXSbYbTAzCAGRKEN7Lse83iykHaQoqzNhKRqDe7wZCipCELreFria",
  "key34": "MvNf94SpGDiB48fkNmmHpUHrBBmpnRXdvW5sfxEUVfHNNQxbtzVgzebVRq44d69i7c2f1GXzCPcQMPXdG5zrgBw",
  "key35": "3GVDrRDx5E6mwXNLBsbgM1a51vTNhEKa9PY3ktrYQTje1JhHjVAoaxgBf8tmKh2PScaAWZgoWPbtZwAfrAWKyQfd",
  "key36": "25kx9K1mBoKWEn9CskFEncbsrHF1WwGtGPF63Q4KNrz6dBG4VEhLo5D2wJWeWdTLMNwhh1UPrP4rUSd3q6dMrwgP",
  "key37": "5Tg6FVRSjY9a5Nt9zWYT7CmbyHKyhVPTJFU7KSAShLW4rUsegeLcKLXndLWtgz5GNnEQY3QFiJr9qw3Cv8Z1MqK3",
  "key38": "2bc5mdUFPPDWh4HNtgKMc1apUXJNVsoGSmNH5frVwoD8LBaS6PELHufgtjZmdaajoyw5ZYixQ3aSbx7SJ9n2iHDq",
  "key39": "4PWWXv67pAf4pkNgVHxu5aRMkLou4jgCur1fd6fAmDzEErhunGZPw9EqGbzonGpJp7zsY46z6HJxydw1WpSrsCYP",
  "key40": "Tox5VXoxTB8aYa6bAeU6qUMzya7pRTYJoxfwt39Dm5NFN15tNYdTCXhQAmLC96McqZ8D68oHpbtcYTPtSCD21mi"
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
