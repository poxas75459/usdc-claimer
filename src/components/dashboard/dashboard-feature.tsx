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
    "4HCRm1JEqt5N19LcTJeeGB3p58mv4g1pn2pzdrvtBtTenHJQhGsmuaCKX3CBsZYe54nfsvPQshwd7CDxBzFKhn8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dB7Jd6zvqemA44f3raFshazvFbxGgLzF6b6kRhADrVTCpbjVPbLqgQ9DL6nofVjS87k8DkDqzxbV7LRWhVkLA4H",
  "key1": "2CThVErXH7nx2yWGm5Wjr2HHbUdtQVWrfbQMYmKPz883jVSLid7wEHCxDV4YRmtXRC3HimGqjSeG3YHyQQAJi5SQ",
  "key2": "jcnuDXRowdkPpYxBeaSpmia4ftffAxoCfPT5TGwGP3p3tpB2kv7GrHAj7G4FXh6DYP6w1ppZj5fAtnNovYKNQw6",
  "key3": "4TBdcf3hCECNTB2P5q4dCX8DRgky33ysVxd4LucQAPFaYzFSv9MPK1H4icfzQ99ziyCLT8vcWzMf8jde8PmCfQ2B",
  "key4": "4qXSifwffFS8LXwY6J6qwvx1HqCPDuf5RtcR9oDHB8uL8eGRquXGeixkDJaemNkqmNokuoUgbS8sf61d9BC7eWar",
  "key5": "39oc6EiUNQzm3wWpj2EpyZ1HqopL9GnCvPBogeLM5vP7phtu5xX8xr5Ksaqxg2kGedXGtj2Usc2a3QMcfXqqUV9X",
  "key6": "4sTLfJj6cErkDBmE66WzGCVy3F1M8hAciw1SVfhvDaZLr78mYoCAN3d79RotoxLrC9gj85c6h85SnwtwvZfuD6gQ",
  "key7": "5EuvURkJZ9kegN8caqX91NunK5W4FKoBP4wu2P3SV9jGQmRWZrwosnCjM9gSusxGmhc2Y2fv3QYdQqMLVrvKDtmK",
  "key8": "4pBa6n3yDPAZNJMgBWWzdrjwUpoNWwFpu7ea3RJVhcwdKqYxgYRSSVF3nhpcHGsTuRKcZRdmaPMWhnXwbXr3vkj1",
  "key9": "puMC8L12We96cEiMZ9gDgGH8T565hqgFBsuqhkpetADqAfovdd1BHdo2R6q4Y6G7NctyLJQWYVtrw2T6j9xcQt6",
  "key10": "hewv4Bi9V78BREHsiqqhxjDXpFX1zQ4M7Sn6QNLw6Mk8M1KnJN9LZJ1Jg6pV2dfjw5oui5ygLmTjvQGvvPpGjZY",
  "key11": "5ekzKwd55fswo19LYEdsxk1XprmhMiHMAq2t7JJsar7Q6uoPgAtzJANKjj384XxQNHjmReGaDhtWR7SEKD8zPrdo",
  "key12": "2kzA6pci3zR21H7gL8GXNJUBWxj2Bty3EUoX9LYgv4PJCYJmQxVN452rWVrpaoeJFXxFTH1x4b7r4Zx8V4pzJxQu",
  "key13": "2DiY2tdUjdn9USkcHWM2F7mcffdoSDJV97Hqp7JTBZsKFGwyq53bypgEdsxtuFm31AWfcAQzn4u78aJhXVNRB8io",
  "key14": "2jHJD6LtbwTFq2De4AGfdBo6jQN8nxGBtvdTcvqQLjvoedyyVGbmWiiSL53zm8vAqQ9djxRrandWADpGP7PDsNE2",
  "key15": "2Z4fvjYKDxzEPyR6tfRBMpXNeXR5Aj2YG5jwdArBdKaLPDC8QseGvF1X39SFuxYPVoYKRemYCi9ney1fcCzZ6CCx",
  "key16": "2mX6r67aD6RXrds9zRAjC15RfsYaEsDpxjxzP4CHwJthMeYALtDh1p5KRj7XDeG1SbS883JifKVmby4CcXQoZu5g",
  "key17": "2sLqy7QWBS3CfthD1SVLjVKDP6WrEBnjNz6gBZtuujThobG7Q4aPJxKVrv3eWC5N2PhGMbjH3Es9HkANnG6bxM7G",
  "key18": "FCaHWUw5H8YdSyCM3QyPM1r7F5sErLHwPsSmubZqagXEZyswVborG5ZFAkH6uv2BkVmggv7gvVkKXtuDJ6ydon9",
  "key19": "5TRnDENyCsXvi9bPvezKCUQfbJ2MaddoYC5csdCkG1Bnb88y5RJWk2QQpQJN1JkPdTGpUBURanxRjBMgHKfNo3c7",
  "key20": "5ZSQZDyY5j1gDhJKT8gJLeVGcPHDZMwtxW42RZTLbMMyC2Uidi3WpjFhpnvm1hP42JQV4m5b5dxZ2gosFP6yxM96",
  "key21": "4U1AnKpDkxPz9cce4akEAhqt2zCyTMbPWCLbFQ1dGthbjJuMgJnu3qxy4SfX869NWoRDqEZC2xn3i9fMrDKmBKs2",
  "key22": "5iC54RiuEtxdYhDsVxAHHq4cp5hW8JgjXq39yBmhdZHkpkBncoDHLEuV8pA3EnSQvCUr1XkLczTjHjyfgQhsoeAk",
  "key23": "4PpsFK6rXngUhcSkmQASWyXXDqA4d7J4Y9kWwauQZyZozNBJtpJ6RxxaZp5LdSLF571aBBEQbfVRQ6jJDBreTQFz",
  "key24": "4mQnpsYbBjEqWKQR25TbGesYGt3DSFiz63FeHVKbE5xHN6odyDpvqJX4iy79so1zhSJgTnJGMfu7FaUYjPE7xjwn",
  "key25": "2NPashfUS4s4PSbQ1SftDm2X8rTHT9DpaDEhzPfuBQ5mHe3JqdfrMFqXsqGHpFmp4xYsr4ZVrkvPsxaEbduN47rF",
  "key26": "4kyY57RguNfMP5EVE4QLJgFRCt9yaaK8Fo8W494cdBdRcb4s2tL4B2qAT22MABEN4G5qQHtanX2M93HcUqzHhsJu",
  "key27": "4gQoKjBJpLUyZZkfZuPdrmKyYvt2z1FVaGYDo78hsz6y4VVj8HiDbXfjXfvdVHNQGPZ4khXnHKt1fbYczNxqi68V",
  "key28": "56g7B8DwbH6XHg3TASJ8iNRdoXmGcB2kQDt7hS9rhBemsnyoCNKBH1uvsva2FsKY68LziDCkngDjp5Q2nWerv8jf",
  "key29": "2BSQpj1cckefScjAvNmNmbfGuEiuTV2TvCVkX1DoLgPyNPfLfrXYfG7FXLsGwCzWvFjpL3fcA19oMfDZKrsHuR68",
  "key30": "FU5GYZzsjsDudgVhKFyuvL7RuFcvpaAZLhfcssPA5gZBRCoYwST2fEGuwyDJmkLUkgKv3Rxfa4JjKRxigkGUHXd",
  "key31": "2NzcL5khXjS4HhieS2hLgHqWGmtyQG6xhrWshUtrTNvSi4jGdwkjrTRnDJSPQpeF878Fjicr2Tadgtcdy3qW5Uw7",
  "key32": "iJL3jyi4vYeNPkek2PQ1XYGmpZDAC9q8Z12AGXsEKfbzwccmdTqvehfTb4cUE89itSaYcrbWJLPnckThPTL517u",
  "key33": "4tFavpnWYriZ8vfUE4zSaSN98iFMf8A1znp1CaDc2ZJFvn3joFU3Nu235NVzCMzdKFn71wM4EYpN8cTq6KMTWap5",
  "key34": "4w7njf8UJ6f41evTQ9jC22tticqTTesHuV6hpKi2BFWBaq2kpYeTuWcdAbbV3hTg1xY7DE3TxWNB8sqz6mdxbVmc",
  "key35": "RojTtiMR6qrtvfU4f1vbCMBFCPipdvRsQQbsJjUqJc3KWEKZJV3bpaPpmF1QNd6Q8QwR5cmN3mta8AwaEoTaf3V",
  "key36": "5zKfDsCkE8cC6vLX2mEhjJKsXkiwc41eRCuU8eUxkAbySA3nDMncrJn9DBiid59cMt69ncUJ9Pu9i6oh8cxUm1vf",
  "key37": "5R7HjhEg5knvk1epzxTCB6tjGboDAXfaReAgDpfXUajcg4y3eLvJV6xmqqHaLG6oK5hTwesbaFTcd35tL5t6ykLc",
  "key38": "3JxAVKoobJDarFjncv4sVfs319Wr5bhobwuRSLCfqYxdESfjfW4XZDcaAUL4fd4n8jMYGNmSMqEdE5ZdTcQGCmXg",
  "key39": "vtAWQnjvwkq93KG4AgPcz2UJxTjzfV9uwaajUe3xhbaEdU9rfk6baEgpJEJLLRDNnVfapGgfMBWtujpJpH5ZWXc"
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
