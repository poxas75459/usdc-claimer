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
    "1rXGUvDjdofuAvyby1EVTXmC9YRUCezCHUME2qMvDc7fdjrdKRDyrBgfVFYQnTsH61zq59dUpwQyx8aSoQoJBNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f2tCQjwma2hvM1k8PKSiGExWATdLhL9nQyW8h3aSVxEkHb8LZbN5RbXXtv7BTzakf272vzmm2Jt9EXnbhc8wWZ8",
  "key1": "fxkzcr1FxFYvs41KnZPA4dhPEy8bwnsF54HRMJcGWoUqoNNMkaFfWiLDbCkqCUmrYEjAgfLaMYkF3LzUsHPWmmB",
  "key2": "3nuMjviKzkE3LvwNi9GBvtWvEzAANZr77pcn54LnmSkzwQH5Lhvd69yeMrt6HnN1Vk7NzEvG1Zy5AqvvDisUu4Zd",
  "key3": "5CdyL2Nsp9p2BiAoEacWZKWUbhAXrMZyrCRrExjvULzWeahUjkanWqQFsF6StKL7gLmMhfhTN1j2NTo1spfbEJCC",
  "key4": "2JZu5XTkX67pEE5pvHcGLMygnrdd37geNB55NPS9uF3fvgqRaaf6WP16P9xHjU8wRNfqxqWVwGmetzPhjnCZnVRS",
  "key5": "2sanV6x8M7oWiahdtH8tRqAiRGjbCPDPQ7QEmnmQG9YDVgogMW8b4Z1Xqn2pMpyr1cVMXkHuhCn7sHLhYEfekEYV",
  "key6": "2XTpqW2SpeU2NRKKjHt2ULDT99pPGfTcAN7dVjj4ZaeSCpVrHEpkuXtUH7muXYe1iJ5a28coUJDsq1N8LnJdCrDh",
  "key7": "2oZ682X3ZZ62tGhGuPw4Pqw3xVMDTqqQsYoa4AvMYBUdrKwZHQ4CccGmDDSui6wNzFMLBv5a7kacSwSRkMuKjCwQ",
  "key8": "58zaeR6jfp9CMCjCsspG9itAGYYf4oxKT6X89MdqdbBrFwKhzDBz9fb1cnaTzggmks3gdexqMrd5HGZTCXrmmUh7",
  "key9": "3NTwEqrEcU6frW3sn6DG9KrP3nnK8U1x4SUwLFwG71QYwikc4izgxPsdK4u3SjDzqzAZnmUfWf2eG1QBNgoaJhW5",
  "key10": "4K2EDWX4PzQMy1nhNavzW9rARfB7seCV3XcmGVR1FzYoHSHJafY5ynR7d9gZ4i4DYpEn1fdmzpCHZ4UTREb3oHHs",
  "key11": "DhJS8zxr9qPYvDhjwKHsL1ir8NvwA8FNg1uUbsjYJoyrX9ohnpkMRCiXbAEP9GqFHumNzYn3PChztiUtre2ErFW",
  "key12": "42RoPj9KYoxL8YzkMDbyqjbGQqGL8eq9Pvq2dDK8UcTYbCs8eDbq1p8RWgGEErJUS9XRBMh7wLmUcC8cSBNr1wMr",
  "key13": "4h3R1Ga5uVLYh6VwpHPySnCriUYQcXME7ZtGYjyTYXkdQMdvxNCsACYDnydfphAG9P3ZJC8mApPwqJn1hW4KeRej",
  "key14": "56KhHimgBxCEE4tEQzxycKTh6XN5YduVn5zn4z1oYz3B6DAnVoq66QiHSNGGSRdnYeKtmmX2PNWc1mm39yhrFYiw",
  "key15": "CWGiqZiy5RQFAx9dPBjrXyYzwDRBoqnbLnTYxvchejbcVRESQazjdA1iLxfok6fugAnExibZeVgjxbXu9T7fxaX",
  "key16": "3S98tbARxN35nfuin79smpaqzDd3XQYWRy8rwkAcbjbbkqkuLJp6u3xs2npwY6DwP5agu9NKvFDsGULE5ephpRjE",
  "key17": "8Q3U7gfVgBnqp2FR2gJrvutWUxGLxpRMwrVpmLe8d9ampUWgVMJD3bnp2yjba31PsEA9QChiL1nm7vqXTQkkcbf",
  "key18": "38m8Ut5hrAhbZanQVGjn4G1v1wjzEv7Vt5NFZZhGP5tM8ZUNAF66r9vPPs3QdbMeyzH4gkiCKG1ydrp8s81bgGiQ",
  "key19": "4gjToNbkAJCVYTgajrafuR2zGCzFFjJp4CxqK8NdFPjF367NNNsmN71ZBRX6A6E5ztY8euRgtDFejz4BgtfMMuQU",
  "key20": "3n72ZCiQKtPWoFxtaKDmmSzRB5G7oCngwxRLHMB1fQ5gWFmkuff9Kge5KzXVfmDx7AXkaopB6uTQXYx16apbK1td",
  "key21": "CB8iPX7arnedy87cyhjcJ6qaEE4DiFqP5w9FU4Mv25FhX1t6yWHZZFtqD2rXBSj6wfgsVbKFKMX1Gde6jYMaKYC",
  "key22": "41X2QybQBzPHGZsT77DZSa392D2Tw6Jb4yLGTBWQJYSJUCi28dQerNV9fTFNQDsi84xJjwkrGRtctvSRGTHtM6mC",
  "key23": "59XN33KNs9vngh1eTZ6XJjjg8xTGNqR2nBDKr725YLHgh9udC99NCob7ooUMyaZjSHjB5JWLXMRDQ2oJSKa9TWsQ",
  "key24": "42hgREcuosKtyDB4xSvexxD81w9TgdFopkuf8MF1pBsoUXioTk2mAzGTDGtxNagBQYHTVHnU5AAksJqgR1Wvcwos",
  "key25": "3VADWHdej1VBYYJhG5bAbjeKcpUtqBsJ8eQ27z7ayGPg7tFAVmxjmU7yGPdy7ne4zivMB5DJVhpfGbDiQfxsAvpr",
  "key26": "3nFFYaw8oK9H54PXmEreapHeqB1N1PKnUdHevf1SLPduukKSaayZQHie9E8e4GKwymJL3Cruf17RwjPViyy8dqzG",
  "key27": "54B122wCsp2u8n1wbgzfExjnukDAqUWaesH4oe8oWectuecAa7HfzwxMhhMjxtCAj7SyrAq1APuPth6Qy4rMcdwJ",
  "key28": "3GCZ9YCnttggRTsNhcjf8xk9q7nWu5WCBciFtLz2D42HjNekoJeVbcPBpyYkWAZwkwUuqwaw7S47v7ZdHroU5E97",
  "key29": "3YyTPz74uRM5GcrwR7onkLPDradqNLNa1UNmGtLKdANszHWjd4qhXeZcxhj2oUVxqfS8qbiSqaUmvx9Soaz8zNsv"
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
