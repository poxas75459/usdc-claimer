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
    "8iVZ2BJtF6WRsqnEAbRQThuUCNCJm8FgW5QWdgBgAMqC4jZjgoVR4PZ7c475H5v7jHpZ8hghdzzFnyx6PLT2Zh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48MfR3fwTkxGwzRAAfJNq2gYsEHLcLWoHwMkEoemwMJTjK1BPap3cwQNvN9Y48K7M4JdkRFBHK2J9XysHxTnecsL",
  "key1": "G8ahizDdHBUecEAPhcnThzPHTCxaagAVce9GHKKbHTF7r8PManFJ2XH14VZXctnhYS72Xq7iP9SsFvC5tYDPM83",
  "key2": "49MTDY7fKNpDFLvmpeBfSZMGeGsFhFuCSCWGEhRBpqYLFRFccgCtqsbFH3a7JNHt4ZJCkSsftfcGfAtq48nHKXwD",
  "key3": "3fC2UWKmXPgw8VCgtvpUx6c56zSb4ULEv3iWGbdZCbogxF6wSyAx6esiVm6oRHzaxjteYbS3Rs2ShNnyqSKpWzG3",
  "key4": "4t16z3U29tCbmNaHHJm3Ry3N7972qPbeTZxTpWBknAzVffQ31KVe7BFZ3uRqEJ4H1dTmXr2HGkiVfBvpDc73EnYD",
  "key5": "3JhquMzE5onBs5Kj8X1ETE4uhUJWPeGTJRJettnB1UXodeLT6nNtvWHfLTWcsRyx6FjmnVmtRQaWyrBo3gz3zLQR",
  "key6": "27KSeQtnnjbtH6Hkz4F7uetNvYrXGot5Gh4cb461xKAkz4KTsppvzovGDMC5d5Zqk1dtPyTeUV2VbD997AuQkxmz",
  "key7": "4wGiaYyAU5fyTkus3MKfDEB7w5xARpstNpaMTg92VWYpqKDTM2TjammAbtW6voLgsbvMW4zF4rrEy8LzQFENxXEr",
  "key8": "37bLVgSXFwjhoKLJmK9umkoUBSPYLMmDgXqF2M3s6d1WjyCNiRZLa2A7K7sVUD7QBEoqfCJKcE9XqA876jBk5tgE",
  "key9": "4cokq836uSXpZ2T5NRhV6yYNETSiFCpMgWYGHUt5Gi1T3PdLRJHyfm7hRARKhPa7oekMz2U3K6XuPz9YfTsDjk1M",
  "key10": "2UAJBYcajUnRXwg15wAWVWBQYBWMsRMnVTnYRcSNzLPbVkhi16Zx2pECS9QWjiSrJ6d7TBvzpw1CqQtw2vH9KHoB",
  "key11": "4WpMvJyo9UKF4MEwGbTW9ZXCcW41JkdntDEtdR7kHrXdPMKMNunT2qMCLy3aan7MsPjMuh1KSbHLMcXbaRZ3Hj9R",
  "key12": "fDWa5CcNYZrGNRbaY9TcXqAGRrQjx9k4rMUjTE6nnTFN3eJ4p2o2Cqv2tidarN1Gh8Ex3gnCN8nQPhrzovwFGD7",
  "key13": "27AUE8Y3daz1YcQf8cnhrVf6FWfhRy3scMhhCz2VHzFB3WFq6mkBUZHrA2F213XM9QJEhBgTjZp59p5THkgatrWW",
  "key14": "5687HawUPeGQZ82eU28pmoYTtT77VyX8N2ZmPqf3DiwvvBSxfVcFGTA94zwj24kW4pCqb7NPjrHfXMMtA8pdneXK",
  "key15": "26Kydfuebq4Crqm2N6eCd2NYUNayq3m67FEGUnVBwRhKqYiskpVwCivHuT19N3mBYt5n1SFoWBx4W8j8V2BLbRqT",
  "key16": "5viNEeev8d4cevZEdDAZTFM9N6VM1NFxdtqsQScJHFdbpYf2CMmZtebG1hhhHQq7Fdz1xtKAHqDRmphCGevrZTMk",
  "key17": "2nuh7YUocGRfTQmTHERMdPRdVZ7uZTJvbpT76q9dvkTPKL7k3Wrmf9LdFcQwmn7nzZpEG8pL7VdtBbuDPfhJp7jy",
  "key18": "4v9Fa3vBU5oJWHrPvPyr6vwuTDePioLTUvZ8sb3r4P31QsGLhLT8b22kK3XxHKg8U2foDC6eosWSwKjVEWJkeJS7",
  "key19": "2ahR2nztsHJHeeo28aSadjSmRPGreFj4PMhvuMHTKqxpfHJY4XKgh6yWQv7dwh5DBKrbt11f3oXrWKrYbRjEzvKw",
  "key20": "3mr9LkwGZd3nWgqPV8qGieUVPhyKpJAMoz9nRa5jQQmCFZnEjcRBsp3dwjCVZWtfCSv5zbTFLNo8byuFkk3AZ4aR",
  "key21": "4vmHNJxDmpmqcxvj59qZKqk2Ug1HDY2qZwpEdD8iDBAdY5oWnZxNeXHX8F2B2BU7csYrLwfZWsyToX8itfMLdYsq",
  "key22": "39v1wFXyqsFK7HgpKRGTU2czVX47DVLDMbXACF1yLHFmYndnjDFsf9JDYX7F41bEUUw32G4NStYhWsvDotsvhARc",
  "key23": "2oNtSUrrGkzueELHgVqu8tNBctX6wNwQFxMUtrFCNyHQaGrDp8tYZKEDvmzP8RMWgVtsfupdui67yg7yvCgxQyf1",
  "key24": "56kVNZpL2c5DNaCm7cwnoNt78VV9uCm1GMZgQDSuxTRGCALXBrGqdNoJz2iJmQFV3HPJQrP1odKhtHcLDKYiUFNY",
  "key25": "1gxYRcFcz43B7Kyuqgt2E6RLzB7MMTDy8ybhJAJ87MyWAEYv8ySjH6ibd7SHKaNbHomkFYRzYXXhxHyy9tYgwJg",
  "key26": "5htTAhmKW84wE74vZWzDLMHhRXXNvz8JJwV6FqGyZKPYQAhn272GBeXA6PFoXEoxYpGVpTWYiirQf5SGJ6gZXLsN",
  "key27": "2RTjQBBcHYuQdSDj9stTuoRWJPd8icxYEHbP4RX3npPzkMuuGtG6XdTSMQs7SAsrx6ecWF2KygaYWeAxKxWusm8u",
  "key28": "2JovVcdgJwfhCqArRUDhMVH4NpQr5jD3TD5YuoBJTo3rptj4MoQZDFMR9hsDyYTAyCxurAYdqohbAMfmHd5u516C",
  "key29": "5r5tsZPLrFg41dy5dnrv1qNgxNcx64Z2MGEPeVbLnXXoHr5qookWPbdCd13gYC2Khc3J3mCLL7DasxmBbSVAtmc4",
  "key30": "mbCvXYkbgcBgQtNWyvm4RkpbTLMUcEyq19DtfHSJS4BahdRyStdPhcFCNFP2mzqXDPriGyEpXBYz9jbBHmTo1pq",
  "key31": "qWDSCTne4sctJDKzC88vwUkWJHexMSbSLXNFt9Xd7Ti6mY2wgexkL5fuiemE6SLcjSnbG4WjnHVn1MgGauSbhpe",
  "key32": "51YKsZLTdeEiY1FDNSNUjXBc2U7H22sUTu37uHDunsmRXum3xAuzGJC7XBihGSeJY7dmPS62VCL5saJ31ryUrXXo",
  "key33": "2VXeJoT5TCQKys6XAdmy6gGuZ9mjcMk89XzL3t38EuEvioMSAus6PSXcRVEA5FFaT1NuoCmaWQWWxz7GoobPS3qS"
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
