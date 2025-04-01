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
    "3Hhz4fxnrHvCpNUXLohvr2VK6fZHi8Hf9KnMXiB5Btpe8QXmfbunGV4TMmnwfNadrW5pQayQqa3SDhERRLeZFAnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x5D254Dep6j5VTtQqwMPEeQ2gtRVBouhcZDGFuw6QnRxLG9LBCb4QP1nWXE4tC6s6anHzwST6195nn6X34QnRDi",
  "key1": "CS7WcWHqkduYWY1NDWCpEWNmkc3dz6QqA2z2ZxkLbhGX8NV9xoJw2qDT9RWmiZgoTDfwWpSamuK3eJQ7CoHHLeK",
  "key2": "2SZMmgE1rRgaZ269iPVdhMJSV124WNdzQEZfNNqWqdH1HMm9EHMug2a4ztRvGpTrfNJNE7BNDcLdqEUAXghfEthC",
  "key3": "2yxdTZw91N37XZpxB8BUpXNJrTVbg9ENpuPycDvvgNBnqZyyiGrTRgnHWUAb17DTwvrwx2obcqJxwDMNEvnAq5Wc",
  "key4": "5NgCLbW9xQC9YJgXg994WyBWws8A5yppdtdTdEWLptsncxrsbKgam3HPsARdzxYRPYQrErT8awvAj5edoLXWNcqe",
  "key5": "2uCqQMbdzRh2wbQSFhCSSevuYvfdaS94ekQGUK19NGnfN7c3q2EJWMJckWjfhoYcTZDHer2UchdudSigj83nvGSp",
  "key6": "4k6u2JK92NbxvBTNbihc3UczVbGGWVxSvZb5Uj5DH4wnDKgwcqoxswKKoTwMzC5EkTNzq9ZJscYTPSuyzrf2Gohy",
  "key7": "5UEaRxk2hDz3Mqqwh38wNrY41ySq8rodbuatx4YSoD7KSZAhiHpWer1h7R8dqLkHQ8pkLVftYsJTBxbadfBamqKe",
  "key8": "66wyeVhMkUPFPkxyxjYmttU8Znw8U4C5HJTher3abLxrEshncyDsf2wgSQqPkksEyULMJddSHzpFjwvEaBFvaTGx",
  "key9": "2p5MrSAZTmUjpbM8QaNMoCymRE6bHREDJCyi62K7XX1PJKecKimKxho799jWhkQVDcWnL59UuRdWSyWZbiyinpHm",
  "key10": "2J5kNXvyGLUZbCdkU3hhMdcnaRxYHB8A9CsLLWURD4LZ1KxykZqSsmh7jKqWaJ48EycwCzuxrwD5TJQmnj6H5nwH",
  "key11": "3inBBZ79ZEj9seqPSeFZBoiBwajUVY9fWayrK6wFrepw8bDGd69adU5ML4Q4xqbQsPTSoxiV6CSnMHjLB775HAsa",
  "key12": "5s7ahEnnEL2f8aZE1ot7WxDKss15V7i2o7o4P3fqBD22kGn4afosgPAdNSASYkvJx2YiVppUAMQqmy8xDFgBczyB",
  "key13": "4BqCwQE2uyizzW39JSeSWMDPVT6fEnEwoX44n9vc2a6wZ6CAELzjvv5JWbKnceajeCfbZewXo8aX4tEe93tB2sDP",
  "key14": "3paCacgQsPHwtaENvPyhJdyr56RHik1f4DsJ6qPqLrJ5eQAktx16AkYqCbiibvQ29JcH5SQCC2sdCJ6xfxYpsXGV",
  "key15": "5VX7vtxFKDJ1JyqmvdHXWDSingamT7L3FJCCvhL55rSZ8Wvgk8F6ETHj38ftWRaLcFrJ4P7e48vm5LrEtAPWJBr1",
  "key16": "4AYDtRiCm8spQyUnGNXB8zq5E5PfhQ3VnMYPq6VhZUZpDfrRb5QSsapjdYFFo2dtfLMjUNmGF6njszipHQqkPPjS",
  "key17": "5skWuRB8GMNciYRGh6ytEN7Mib2UWrmL9Wy1A4SkdVMzrmaoiYWGkvGXS2ggBkenZp8yJTEgPYvYXjzZCGAR8noJ",
  "key18": "4kFS3j3H47t2C5siRnMpZ7MyyUnfkfMz43AjpiSx94uFsFUEFbYZfwTBVtmQSWT4vjcVGUQHNS5UbxtMc7SgR6k1",
  "key19": "5Zg6JHJGnwgrsYGqCYCYkeFNTFBzYrmTfQfa8CvrWCqv9sRm14frEzVggazgHv83JHyYNBwCcKLbcGeiosUTJP6g",
  "key20": "5EAuY9anZJe5z2Ezt7kZ3ekzYmJKwdqJBqvUmusC4i24vmVpsPetrYiiiZEyFVzyZJea4J9vV4Fvx1gpHwkQ8inq",
  "key21": "3cF81LGRYwN8HoxhV4GbFjS7BmFHhSPUrrgT2dMh9n8Zo6FxSPPaqXBPehoYghYh9gUpfHpUdX9YH3miKySzRPRL",
  "key22": "qiqFTnaYYFmv94573NF5Rx4wGiT3jp3enHYnUp1oh3E39CErG1QvJzPRfGXSM5ozZSNgXAWEAGhJeKHsjxHWBcF",
  "key23": "435i1TXYt7u2EgRAbJbeWm6bAWooGMzwQtYC4R8mChGwgFuqhKMAYMugbPc1eQsMAKXqCDfLFpnwUJbrxcvqqCHB",
  "key24": "4ZCLsXiRN49iuprzEkJRHi5YBq1KVajZA2t2gFbwTyRrULBzRXMA9EUHCSb4YGCdptMRXaiQkh4SF9oKxuzHo6Ui",
  "key25": "66GRU2qbSdW4VVkgv6BnzN7UFuc7rYN8cLV8QueHpCwn6nhc7WxeU7thw5oFkJq9f1n3AEBqXvBroNPSqbjtdFUa",
  "key26": "5bsYD5inyxKGc6bVLwxdCnfrtrnRcGyDoHqreaKKPtXJviKH6hY6Y6KYm2ohf5Nk3dZ1aQqdzq3GnAZKobXoyZUm",
  "key27": "619a8ScBPagy96cdeY4gEYaMTK4XX9Lu8SfAqN3ADtmFdatbWggWMgJZyz4LsponPS26d1arytpJspbnr4BecdMV",
  "key28": "4dNUjQepkwiQrwNqbNZ8D162BYryK7ZEDBrePj4biidkwPgcz6zhP2Hs3gwifRV8bPUGCGqVWN2Jy7WR7paWUkX7",
  "key29": "WwheEtDLHEpWUXVeoivJG5ppM7P8cBZHxDBESCMQByE31r91M12xdcsWfQpSv1pfi8cpwouLmPuomFwfgjUxMXD",
  "key30": "4oPtM4wxP1PokSENhKCHVgMPjW75Bfzu5fEf8GQ1CEkgjoRSkjpY4egvx4irFueuXTqj15Q3Dax5QZTru8Uighs3",
  "key31": "sdEjtJ7ekbBnCyCLJDTJynzB2zynTnSVFPAAXHGtkd7YSFkmtGVLZFFZqXimqTahQ5MCmQjTW8sKYGzywmF9yqH",
  "key32": "51grk994TQd9fNvuCwc3hSxg42bcTE3zNgtj6etHVFz1HLm18Lzo2pkdJyaiv2YW6cmYMUxXCsv7ck2iWjRTCeTA",
  "key33": "5GVvvpke9YDAHbm62XRHwgGus2budytrVQexRjFkNutTZmwKQTymT3Vi1j6Lf5Epv7BurHnGMCqqS9ZG4VMECbVF",
  "key34": "kTbSGWa4Yu4T4VcGrhDnVRsBuBEFgmsfr14f9kGPXD9p89JZbYaDM7pXdM48dDb1mW9R9SRPfCJhQTSbDRdb8hb",
  "key35": "5d3MiaT6dsiHBQJcsNBJsX5ZRYjmHmGBqJnegfmRjquwg8nvPWRUNDdadYikL571GVvmCivp8gjzDSZAdq7gjN8C",
  "key36": "5iV18XDWsBwRFkdxDRoR2G5ZzkT94Zu3NmHRtmTuVk27h7WcEkvE5vd7ZXtpVwViAopUr8cpCY2nSZbjVkSEob5d"
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
