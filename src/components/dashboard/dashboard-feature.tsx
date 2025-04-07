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
    "3NyXgEzJwgXuDeDTbUocL33HkSZwdX94x7JKQYcNkWYPizG26S2nuQWZf3nxUrgBxJoE27VkUv571d4g8s9MhjAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RN4kVHHFqUJ8UDshRX7QZ1vP9comEDnP8ibq3vom2YE5GX5jkVENrNwzLt3s2Te4ptEKpGbZc8cnGvSt5WkiLic",
  "key1": "42NbSEhAaVDRejPmNopdpMQf6DrYt8soU7omBPPagNfLGdXfYvs992uzAtsG1Q29M4aaTeArF7bduyjT9Cxq2Eq7",
  "key2": "3oe8AzpRi3nESE6xiEiYsPkLWxQxiwyUyHqmqqqzMtjAQyBiWpQTufYR1BPaUbcKrLnPYGTXPRU6C9Ka6AzvssjE",
  "key3": "5AapU5Zjf7H6ZaqyU8A9by3Y7nufE5QYTuVHcsqeEiyYApXfcRgwfqZhXtVmJj2mTChCRgfRbMr6kRrEz75MeNkx",
  "key4": "2tcDg8BwjHfUJ2i6vWi3Q26RFtNJVoCUDXUGNRUXwLxvvr5X829cFmLtZoqqJcQo3eGUQNYffQVzZVPrx1DdMVvX",
  "key5": "4HV4BDDE8PhkaAdJKW8645hqqagvZydkeVYUitAtCxrNtEFAx4ofZ5ZSF4fsWUo7P2mRLX8obzgwosd9QAaQWe77",
  "key6": "2dLzG3KESbs8U2Xcwxr2rzXG8AwpuyLHkeNvjFsUbraDUc9yf17uK169fLd9MTtvz67eVQcmnUksjYoBZPvxBm5B",
  "key7": "5gvWSQ17qyKEzhZZ2rmuLUw5SNbAovkfhRCHHRLTemvKFmwa55otMvUzbC19UNf7QThEVJAVwwMBuPuhRYzHDvWN",
  "key8": "21ZCXDV9RAEa7LDxYydavMN2HjZzHA7SUDXmSNjYMK4UhbvVApEEjvLxnXWhEu9DaGDreH6j1ug13NpGTDWosKiq",
  "key9": "jwzYtk1RxTWc1m1PViFNdVmJDeMwKQMTtrKsR2AhysxiUr4uf44N3uPK3AhRwYUZB3tyQnvhb6yVxcsFDK7gefG",
  "key10": "3KUwYRibku4dpQU6UVrBpdbdgRtGDNdC78pHVY6fQnFC6qgejjsrknqyRziVALWhGt9ECvB78KF6YguvdZbks6gN",
  "key11": "5fXLEd2Pr3r1NKrmLJ3JaMai956xLRhp76rakQHW7Ad5SstU8rHnmaGZpM1YnCySbyy8ddQ6HW9urPv89cPyQkdY",
  "key12": "4cX21ek62G5EGxpMmNdgHBUxdxxxJxa7dRYZu2nZdPkW2pTni7bMHwmWjnBTvadzfNnnN1fKhggDSSgqmxETJqRB",
  "key13": "j1uu1VF7oLCsh9ByaPLH9qU9MitoXFGPid8DX4KeWLX1LtCyFazb5H5bud89wfC9hc6ZGahDV6QFf4TeVhZeYex",
  "key14": "3AhTm9twjVEZJQCMchB8VCjN4eGaGQUoLDbbk3UCrsNgHRWw55F8SwyFojbsRvAMd5MVLWh74yUXg3UQLQ9Xi4S3",
  "key15": "39Wn7d2mYuveiCGUtbf8TmtSjDNazYbzSm47GsXu8ZbUtTDkSp83RjH5S87YkvsZgyMsca1XQkPjDGh9G1Y84gpK",
  "key16": "4XjxVG7KD4B9zDrYPBN8S8UYzmyJXhTbWp1RmTQAHQwuhN7E92qTkzF9qSWQp4HLXiR6hpbnMXrAdKn5TmqAAmNN",
  "key17": "2Cp6NBvxoBTqz7GrKznzToUD12jwgGPKdrUTLYp3U5NYjPGMFTEUM7zTLtRdSP1V5vbP6QeqfdHjSD8i8i1mGoTK",
  "key18": "5rwiyUZQzdaQTNxcyyx3BtpiAhVzy62kFHLbEj7dj9kFBFKwrnK3EDVPjZptsBswr8K762GXPgEg5Nh39VpD792a",
  "key19": "2cPjeaeJTQjwur1r2HWSSd6Z3QJeE2tL35qRTpHmYWPRgwHX2929uqCmgbfwRtNZnus21R5HDQsRL3zQQoYymJTE",
  "key20": "3Ds2FtPwp23jZQC131kE1qzL3ARTQF65M36uKXkjwz5Qm2m4EpwPqg3X5JgJmkwmK8ueydNBxX5nYpnGyeTXxSnM",
  "key21": "4w5UkoTsn73HSP1GUCszfFeRiubjnQ1k5rKXCh39HiM8DVjTvxuRoGrrLfa8AwoJojDexMm5biaaMNoj3QRdgLE5",
  "key22": "2re1kX39AG6jVRnakxHkVRSkhjon65d7A24nfkjcS3yz4W8c8oCuPQjPeu38oRJjYbXzdrvgW4MB7iVSYjARCzbe",
  "key23": "22ctXu5apwrtT2AfZFZL3odQTCmy4QoRcGudaEaa2iHRqjQEBAnxwfKbiQE9GkVdAecoXBr2wgFK4kDigoQCMrei",
  "key24": "4PpRmvwJeC9koXRmA27jn4krMmeezR62UkGj84Ft5uDe3WkjCHymqkKEXrRqJSym5j3dEsLuwwMUNFfWR6PKRMrW",
  "key25": "6541KTutRWegSBeUH5faykLaH5GVWebfetNv2CNDCJXVpQGJj3qXunfoLRsPLEbbfmdPQfuY5QErFYs9UaHWsb6o",
  "key26": "5nGsv1ErGLGFeS48K1exEjoMyn6T5xLYbek1YCqb646ku5XvsKGQKqxQo58Zz51H8dvCRYs2smBa1K19MwVPUvyj",
  "key27": "368AzUkWLN1UsjAZSYkH4Y81x99Fx85M4ZtmTXUZJu66bN2haRJD6Apf8ZEvJMA3CoEPLBu9aVAPRwirFW3qbcnb",
  "key28": "3NYRKbXoJigj72ULBgcfnGyAMnAmKTcRSYtoXXzcQCTp6VTP7GyyHEk5M83Dw37g2e11RwDP2sydnLUNGm452J36",
  "key29": "4cwDPyc2gAtmyvJf8Hth5m7XTg2kkw1UmnhnftsCyWyVR9doxwr5MEaRmGhQrnDbKZYSiwd7XYSWsgQ5L417LWj6",
  "key30": "4x5jSvGEvhXAW2Zkb6DEVaYRA46yuJKxxrpL4z3CDjD7NSG6wdAstJrid5gnUnCNQGSNou6js4BxUdBYhrF2gCFx",
  "key31": "pbMmNq7nUBsebHUg8jU5v5eMkpBLSRJZ9kfkfLuDU8PcTakvSGefbQUptoQ3o9TQEgZWEUDtj8xkjYWx2oSxxcy",
  "key32": "5VfUi5rmFrgCrhufRvDY7aALa9VdHNWYNUsW7QdVA3UBbKLqYDqKw4t1543gry8gtUqKTrgjUzhANtEEAkc7rDej",
  "key33": "65nNowiHRQiZvaJENW7HWHgpzxFnwMhGDdXtP7tQkmL3ChA8XbdY5Dn5CvvVvf1FsGkeLvgtqVHV2ZVVLLoGg9CR",
  "key34": "4KGFpue61WzY9wSTLyDJHcq4okRrxMwvnSg57e4pvWitvG6DiVRJ9CZifXWq35hNdXWVEC1LKPKjUaKYF4WegKPj",
  "key35": "5xuSsAgYHHSg6VdnPMPDF8d7K8rok4wEk9zmy8gscWvxFmGK6CzPPvExQHnAyaeNPGc9DoovsVPukXaWkXQYc8bJ"
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
