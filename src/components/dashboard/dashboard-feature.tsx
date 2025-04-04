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
    "3ZNKZBkXxuktUF6yg7fHE5VEAGo4iRwHbuJVXF9kyAAYnSTD7qyzXEjG8btePYKCYMFGfTyVKHDJLFH4Kd66gsUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MQ9pkppQ1ayGQ88gLcvsgBpXAbU6DQ3YBD2cdaHJHb5pUtpWm5sixTxzfFy1o8L2wxabu5cfT85CHspXVRM1Pa7",
  "key1": "r6Uwx2CkhtKTNjfetFuorVKBaR796SxFvRVZCjC2Vy8QfoAL45SPwyqBDwSKyoG5J8hLrzmfMLJGFbpU15Trgwz",
  "key2": "45jT3YzNg7g61ZBjGfHfQ3CZMzhtrTpHuVM7GXTCBAX589Ps3JdLmsi1sGwr3hnJaWoqYeeY8UqRs9YdsSpqZocp",
  "key3": "4bV6duCAyqT2qsuRTmUHo5BuDkWiKJDdaW4mfLthy9gSDNZzsQjroWKfDC5vD1QBmARjoA7yNFvUCwHhT3w3wCxQ",
  "key4": "4ryG51bbp6KAc4DyFwNWxQD7s5VztvTqen391kRidzLFDHHVH94CAVyFMcz5LjFQfV2xFW52U8eFZ7JjsBPrC4eQ",
  "key5": "3g8CDjRsWLF8M376zqtysUnBLYm5cUyQEUj2LuEkJdaDJLNN5vYiYKXkdu71qQG9pHnAKZq9YctQoquJGGTSKZ7T",
  "key6": "4WdQAErK6MWun4Ph2etGCM3wFwDgM5S8LyRCR99byGWneA3GSF7DA1gJBLB6AgTsXiYzi2DhpKrjAJeVraoWqowA",
  "key7": "4bE67P61LR5WXwWZx1RADRrPRuhMMC15NYk1svADxgW4zzZTFwDrm5ZBenb3v5C69gHckKuQ619yitxwYETyRXCr",
  "key8": "4JpyKWG9zzSB2xigeEJQPhoZHcEaAFFfsWyGJ1dzfBXrFqGzUvatHu4ADubBrT47n2P3SEYsWAcCqzBMLbDPoRY9",
  "key9": "5tqAiHBoJ2m79tMgNgyyPd667ENo3yKjrgqURgpnzGs55KbL8ooR4D6TPfwFLUwz29TPW2zRLt4azouEzvf4gkP4",
  "key10": "2X8mFEQL3VnXeP3D3t2sSDuBZ4fwA461hZkX6x4CeM96GDo8F71k6CgQWEna57XyfPd1FiyhMF1aXB14PcFkrB4Y",
  "key11": "5oCvcgCxU7kqBWhawRdCmQoH4s1Dbtis4DV2z3KnpPCemH8yrQowPLxGwUxLFoBPqZKeyVX5NSApbnDd4UMQ2AUT",
  "key12": "5aXuVswigyJVaf1CFwGppdVwqGq1YF4fwJzhkJTNM3Hk1un6i9zphKu832pyeVesvyj68UumHavorX7bzkXCEisx",
  "key13": "4iHiLKfj6cFByXT4Ph6FbCLc37kKMEtSMTnG1sCNJcQezLiU1t1WJfDbhF9NcQFHzHu2s57QVdnuPwiu1agHNwqq",
  "key14": "5HmsbbH9CWfK2ByVhuLP8ajCashfcBiricaSonSfJVbHe4jyJNJQxEi69sGtDV75CqZXwnShMhZS3F9LURYvFAFF",
  "key15": "56kYKsmEJLdcxY1sdampfJ1R9xg9BFJWWrZc8Pkdq8iNUw33KWR37HaoGkeT8yG95hg9GQwmGPdqdiuZLmEfzpM2",
  "key16": "2znkfWSLS7Tb5rq6STSawDosLweixkKwpAD2yFGUWiZ43ETLLFu7Ky2hRDkBj8c3XTH8CrTcHLqU2WFWQtcJSTUW",
  "key17": "3vgtCYnWcdnppYw4QMdsEP371mSqyURxqPpYajGahDUR7MX9buxqVDFDSWmH619BobJeRyMModZ3wSNe2d7Vgi2k",
  "key18": "2insLeyNqrnG3TazyYbPX5MoQTu7iV7eJJHFWrrdusv4gY8B5Wrrg6Xr261seDvZLAmwhsLRtuWZQF1KSrcRPH1E",
  "key19": "4CtLiCmH15S9kCj22rTKnNbLAhiETEY4wLCDNK7wmZGcH818tLJnrwC3PqkAvt66CXgFe5xvCXpuZcwFNazSYhX",
  "key20": "3hfW1RZCzaXaurNpj57Q2HK3pfDsJs2RUM4fRmWsPAH4dwMDCYp7Cd4NSKCYC86sDRx9T1Zoxudk8p16rentynp6",
  "key21": "65FL1MuWqSHgmWQ8sQUvu3Yzpg1qP1V4DveKfCSZLuw59zhNjzwaaEgEApXuXHxPythNtgEkcVGgSDuEQpuepAMB",
  "key22": "5pFrAymrTtYYYSDTNLY6peNzEfpEqncULFJYAmYxRSpXNaaiYaqQkBqkUmbVjNYyVaGUwXvJSjdLHiR7odGBp18Q",
  "key23": "5aoXubc22SVhwU6KRR33xxKQdk8oArThBQwApTrjaQxzRQDjocYU7YEoeTiF3JPmpKQrsc3wkCHkJC38m1p8MktS",
  "key24": "zZw2JEA1Dzjm58HWRnj9NbhSaPSco13EAAfgd3zEd9X7vGYd8BPEan8pjmDZaZXjxipnPGr99xAs6KUBqsnBprF",
  "key25": "4AgRyBTAMQ8E5Su3F4sdhWEZMW4xLhNBjpjuodPFh9HAVph921rVHZoaUqVbVdsxAErv5gi4r6DcK8QP3XYGpgHt",
  "key26": "2dayczaa5LviWZYDdnqhSHpDgMYAYioTPTb5MkJKWKPNNeEy7iqHVXQWPbghutGMZRgYFcVTQdCqJxsLjqZKuyQL",
  "key27": "5jvnPLMRXrwnhzZeY2oevMpb9kqbURTZKkrfdmyu68GUwCK6P32C8F56mu2vYsRoZU5LDmrsR8dcK77L6aXusD9o",
  "key28": "4ThyvtqYphANU443gPXZfwF6PaNtpg34P6NXJMuaoDMdsjpG3meDBqungvNQwt1SkhfKe9AZsYR7Z23FaC1asvct",
  "key29": "5ZCX9zkeRev9gVyQ5PR6kZMMheW4UsjEei2LKHRLH7wwrsxF9GbezNfghpt7aHR7WGxcJ4NJjkQthX1Fzea1ewQa",
  "key30": "3f41C9U5jRutf8Ewpw1xP3KG48gSCWPH5z3DBrwT81zszJqmCrvsp1yZTKu2j5qUwiTMAFodo36JF1sxXVa2sTtd",
  "key31": "4bTopSQfkMQHgC2S6Nbr4ULDwWRHmDhn8VVZkhHSjCXZeuv6iMyFkdz1i2e8DPRZZW3GLRDgyig2uQjZeSJByyUg",
  "key32": "2pw2kCgDSGXhdS1W9UGZHR31VSpUfBo7MBpk3UrqroGZBitqPiGJDvH8iMtFV5yL4e5mgzRq88pkBUrGegxu3vze",
  "key33": "3eVQ3Fkcqf872E4hbuCytdtG7XW4kfSqijoas8azSBMMMGNBhiHtpWcySzMKB9E34hcxXX5X8bYkqfp1KoqHdKtj",
  "key34": "4xUt6KfbsiDVVnHsVa3QvxNGyGhRgE5D13YePCi22xXKPKnNGQLwEdKrD483WHp1didDcDgCN1ufvJoWJFFJsQ6J",
  "key35": "5niF5DwpT7cmZBztKMvNAMFG6LmcQWxwU1zRhNiJue99UpwHG3C6vmdWaFZzpcMKUfyKfVHLTzWbdtpf5snFUVLe",
  "key36": "2a2Rp3y7XPVu7MDmycU8G4U6gapAgLjoEaYqgrdmoLauFuLtHUNV1mVpWRw4WVYNLbY1RbnwH2zan845KByHM44k",
  "key37": "511rgCVPpUzX68jPo8wNXPn3wyGV5jjoTK5QUdayANi9wU2wPXBq9pe7HZnW2wsVxqMEa6SKqi9LzbReVR3ua2qU"
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
