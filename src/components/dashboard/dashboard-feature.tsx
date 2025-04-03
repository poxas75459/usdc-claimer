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
    "528BfCq6UTKuVki3DCcAHwnxho1Tzxfp6ZcikoSa5CK9RAnKMJu9UwPQtVyuXkm7qfqNozTwfXTXQBVXEvi5fPqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fWEZQY8Gzu3vxPtqwKwatBEhScHKx4W2X1BUamowDhhzSa8XMX5Rn7cihBjTcvshXvQQehdXFTuvyFjq3UgwFYu",
  "key1": "4G8ubhvtwioDhqHs5eLoddRvY5eZB3p3ExQ2rVHLoATpgXNYgZ4tGPbcT7GDbhvKujo9M1HetpgDXCnLSeZ2K7xU",
  "key2": "29iizxgeJP1HoJjrRjtgcqSXdMewYSaZQYmM6jm46mHr7xM46ejrddwSBh16FZY9W71Uy7j9YUWz1Y3Vqr9YWcsV",
  "key3": "5C7annhrL9mSdFyrr3eEZTz7Uaq1kUBXrmeNHRRgWdxa957QXuvtyz1Kwx8Mt2zw83A1Fi5qxU28MeHf6dCt19a2",
  "key4": "2DKRXzB6mCCAgMSxwBf1kUr1M8VXam3eJaHC1WWyR5yo5wKSto69CENsiaR5fHk8eptABja3WWK49BKwfSFQysh3",
  "key5": "5yFHoMQa2XYm7Z7fQ3GWu3tUkPWT2abezXALKVoxHBnpfJLuASNcCF58V7nrgytStzTcXotVaNq8qYQksyJLBBBs",
  "key6": "3VWcsVY6fWYjkoZJyhptULCRLtppF7vGRxSWk3RXLa3UTynjcTNUJ2uFeG5RZUjwJDKfHXrmhuy12492RWqTF1C3",
  "key7": "5YMw3eN3cGNsoa8pXofcy6MrvRWwUSF6fLKtXZv4y29X3n1XuNtD736YLQnQSCvRr3VNGUd7unGEjw326cNNub8t",
  "key8": "41acDdGWiuTKcypPKV9hvMYuBS2Yb5Warj1XPsyADvHRTbCKGJvgfYnnEdcXwrPSVs3QRHqVri35yK34XtNH7UTv",
  "key9": "3eHvePpZMd1ecdGrECR1ihLQNXtpiZrv89nPtZuCJ2uz7PCLpittMiRWWb5rrbPCkddLc855ahg1prq5Gw6jzyPr",
  "key10": "28Gw87yP2zbieN82Vu2eG7kyZeFzsLTKthqYVeF3s26yT3SymNfSee7Uro8CigwhscypQ4DxaVCcKcww8Qd46yuN",
  "key11": "46t4VNSFuiWrRXsgPh5DhforaVh9fxeZbVvhDabh9YtYhWbxdrLCc3mEQFfn1Tzv1MYSZ1PS7fkS1mZK6VhpBs1U",
  "key12": "4yHaHyMRMrqkfiiC12s31DFfVhne6aN7VgCALCWUn6UiGeNPpdL5rzoqCbGNM6VopiRQL5otxXC1H5eV4cnm7y8u",
  "key13": "5Hi2As1C2joGRhWdAnuMj49SCqPbxNTEAS6oqVdPA3mAyqY42BUiDvq3cwoXGTDFzEome2x9jt14CUrdLWgUv6kd",
  "key14": "3hUUQwXgJcaqiTQEeiXr6GuusMTz2CB7xE8NbZiZt3PcsBtEtNFAsiwBmhK1sJm85CohMNqNug9fRpawhhMP45hW",
  "key15": "4dMCys2AEMSjJ59DwemJuaXfhh9tXZ6rDLc9zBoyu31SW7gTktThy74TZDqUPa3daSjrtzfTcx1iX25Awryqxaqe",
  "key16": "5jbWarBcrhFrMdZTtWwwoSuHfMgkPFu6pYPJwnkBTjjpPXXTnAGmbLsZEqRgJdsxpJVnZzyiAzt2pEbRyTJRCSeE",
  "key17": "4danVmPEhrks8uK1dnJYgBoccoJipveuGjobtXs79HnYHCuTHNXPJ5rfwwp1HkerBobAa399KjPJUeNhYLqr3s4Y",
  "key18": "3ypuEY8JqyjV4sKi3oPFjAQaxUdb11GZ76g6KPMSUVoCo2ymjVCtpLEk3UmwqtsNkRT2H1jPNK6tRuMdsXFhgL4g",
  "key19": "5Dx3NqE9PJRwtNq8FMuGtrBYz4DVpK94qcCf3tGMKGScp2gE3zAm2wg6YxeXjX1tJvwbb23vwnXRnEWAX5dKZxhS",
  "key20": "5YYgj14ECjADtGNwJBLYxEbzRk6VeAbkufso6KXk7bFkb9pcajwYgWVaaCtS3qtcxN9j9RXEjjABaqnQrQqwcSHS",
  "key21": "ED5a7o8aa71sD8LFA6nWCHTzhrtUQGecrs56Reh46PKNMKGxKCvokc4m6XX2G9YRTNE1BMYmVgW1YiY3cTdvaF4",
  "key22": "34dqZWLsHJ9UzAwvc1UGBY72GKvJqDvpWCgmVUozPuzMVzQNK7gHTArxFkrn8AMdwH75qjdCHbuHvAMWdCgGdDLA",
  "key23": "2juFUuNa1hrADG9T8267SoptpwX7neK44VDNcDLM2g7C6FBAiDarSz6bvwNjg6ZcyHbfgJYRRHsqxgwo9MFhX1Zf",
  "key24": "4qJqHPaCAfWzZjeLMtP1PqkckB891YLKeauwwquiiJYcZCwrVEu5mufcEnpgP28M9WKCztuuqCCetLXCzgvPtjQi",
  "key25": "JJ3DA19wBtrvz5A8sAMJ13FTdLheemycu9ro89iucfUrXLAFbEUKjZpXnW3RzgZsUPLuaTs5oANU1tXepNuMvSw",
  "key26": "5v9NSgbKZUP62dPXKhyTq59HYGZtfMsZaz4KNJsLnYauMJKzefx9GYAdN1pyJjyJDiJkFWZRgZJU4FT1cgvapNV6",
  "key27": "3Qmoqx21bGAqc8QEKU56UABdds2iXJ8hRGDVoRPdSwPVtE1u2BZH4fnYv1ncuGjfkmg3hVomXFnEuaamwRoqCMBA",
  "key28": "5c6vrcb2jBbX2yT34sEEonU86xRbimaL57ej1Q1xwk34KWHk3eYbSK845BU6AncQCZr9iXa5bd9jQ7iy9UW3xkyW",
  "key29": "3KhhJ2fRrFN7T3SnruwXRG6aS2JT6KZaNg8Rp1or7WieP4wkrf4HWTFKyjHTQ6jxX1Y4atYebL2EF9AU8m4E1RHw"
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
