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
    "5Js4R7uyZF4u5G3ox6r1dnkwsRSZTzxj3QB7cVmGD5vuxsu7C38Um5aSE9PXomrcC3rgMC8UhY6JZZZYmsJj9YHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F4QRGFq3CvUyHTmrsYeb5daLLQ6U5cHavh1MLeJazS19aXYe3HwBWZvu9RkpPLXXM3gFvWA7zR9SRgH8dS4KT2X",
  "key1": "BSPtC7VHgvP7fhGuyucFximxamYx1qTtwFSKfN5NNTxtXhtCdkCtKditPtXZgqjLXGzk1XgUyidXQLA3uxifw3i",
  "key2": "467ai4oYK1EP9e3gFJkyEa1zYR43qHvKuFtLWme31Q9uUMC2qnvMFN4sCDgL6EtvAQqShmGLJxaCz6W8viqrmowg",
  "key3": "2Ru4ewRUeXn7wEbdSZuF1GUVzK16TMdiJL36JbAU5RquwU9fa58oZXmM4NNq4GVHaKaXTtmRXZurmnpcqgCk8ucb",
  "key4": "2ij4JVr9Dm4pk1K69PZ8LD6StsnHhxGY3LzL2Kuaj16ZXYbvkfNpFahish7X5QkajQVLtjWG2VAPh8GUPKSsk4vb",
  "key5": "hQeoLheR7H8ZoKsSLnNHsK8ASNAjR5BZpvt6kFQ3eqZBxjJnVYcSX4ABzbv1fVJ4LWMjd9kzfXDceueHVSbPbkJ",
  "key6": "4AbB9uGpdKbCLhyv5P4iFqNmyVXafBG6eKVSkf5GSGpJDnGoUSqHTy6rjGHdki744NCJW49jxnKWYiifwkFB8u5r",
  "key7": "2wch3sMB9Q5JVoaQQR5qjfUuociFBmusVcvXDuHggSoCdUY8ySZPpHbwqmGFLeb5aa8dMLJzLJ5qWGFcTmc21PU1",
  "key8": "2LSLhVmNXGoZt9GgGCB6pgonz92PZhH6JucwpiRYGuSbJGHmSYEUcp7KACQvsCKmPu2WiqaYYmKoVBqUUAkCmFTf",
  "key9": "5hkakCtWnHCRAAffiy1CUzPy7NpSccqCXhjjhY2DcdNJZd8V7Hx55CimTGmfvmRkYQdupfX7UGuJTCp6UN8ZNMie",
  "key10": "3kqQaAu1bkB8EiNZqVRq7xsvaUpexMsoqgA7a57ZvHSrMeffA73egLSvpisipmEsGovXW7Xu7PW5UeMx4p9ahoH1",
  "key11": "3vHTqGcNEnPdWGfPPCgsajZouQAYvHJrA4HQXpWn3nZf4wearggduJs6tDXstZKYjSzRUuHXU7sreihZNoWobeMc",
  "key12": "5ickXMFWcj4AaXKksRFxsJCTik9HFdzpVKRsGS9qV3PKZdie7cBNSaztXc25kNhuhdooDQb5UMGha26ZcNMxwdqR",
  "key13": "3FV6ndhw9Cm55WXS27j2zECVWSFg6BGjHjxdBnp29EvVpnkeFFj5XE61YPXiVRhYHkuenzXsKsw8eazjnAYrcVJQ",
  "key14": "4r1utiVqHGT1k8C8cPK3jXS7cUWpgMqxqbCFTen3tkccQyo6hYTdgyDGUhbaXsNv7ng96tW5EZzUbmn5VvmYzjth",
  "key15": "4SJJfNsQ6FmKjnAHxT9VSd1jaLATG829Ku9C6o4SRfDv6hX3NqDZVpG1rANEeiDyYT8UuSCSmv5YTKfHnC1BvbFo",
  "key16": "63Pj7fR7WMaf2wEMKGhmgzdEKSGdf2EEahUv9GpbEjB6RKxBjn93vezNYg41QmpPVcY9da4NtRZXh9wTBnbVqoHQ",
  "key17": "4qTCcjDYFeceyRL19L4fDfqzBTXaiKsiRvc4TtuJWKziQArWeCt5Vszs9xmkqaaMUvTAdQsCJiZs2tedR8hE9QBw",
  "key18": "3QnKrErVuYkksBD5BCuiaGLfY2JPR195nDaZf6oDugmWHcvyX88FeQGp9Nx8LXMu1SaUrqg6FDXAnRfkHQZAyErX",
  "key19": "3sJCWvJbXq1k52uAmDPwPmbNcNtPf2VAAe4ATfmwVswu18U8cvssu3g1TrvymGiDz3r6ncFGVu3R46viHy1rkxj4",
  "key20": "5hyEzkTDe8p9FP4gtdZMTX2uxFHLq1mCpwZg6HpkpSJThJLBQaDGXaNQmZaL6apL63cWNkJ3kY2mdRP6g79gEoA6",
  "key21": "2Km3GRnz9d11swxG4gt29BeZumA92oo6oteXuWaMaVaPcxHKfZzVbjhV9N8NqqEqzZr9BVYm3wcKEApsd5KH27wS",
  "key22": "2bfyXso4eecBvQaivegHrGAzRZWPQHAn4UYfkeangu7z5vKXTdUZmm2NhvRgdVj1QvSMQjon7txqAb7s3ZQiQBSx",
  "key23": "4Hd381deCNQ4H3yPA6iC9xPWesAFRU3n3dc2k57j2kviwX8dZSjmnrdDkzrjtBuPverKrFLkHH8ZcTNDbaeB7eM1",
  "key24": "5TzUdUHd3qvQ4RxUrTAFQpvWkLt87HcRgSoWXZPdpoKuDXiScRqMsRHASHoM3CaCuESNA1e1FuBMHuAawsrS81ye",
  "key25": "4vH38u9yWyurRDuEoSiaVyotGVc664t45sWjnEZa54zqpterd476yf5x4eCbhH6JGqDFjZp448RWx1oAzKUS7rPh",
  "key26": "2X3p34xrAdAxuHtamUMKnyr8wRhraUEwmPpFqvy9EEkjnSxykMswq6xruuS6tpHr8NhRM87o8jCFDdMTJWozeybP"
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
