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
    "k3nnVTkc6TYP7dCXK1UTVBvbxuds8a7TSiReTwD4rxAK1v6PRg9jb38mwRexyxN9z81B2bkZhMSJRwxjAhUZTc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43A3eqt7txfGnCMSX2uRG7vfr864kBBL1zuVhc8Kqw2nYwY97uEykwAdTU73Bx3eVKYDMY8pmie58FjvmAHs492K",
  "key1": "4VUTtYUtYFGnXjRzzArRS75p61BEvANwsk9pEaYKfhyfjDdUnKyPhrP3KAeA9Aw6fgHbVotqNc4NHY66qeexeZ4",
  "key2": "2DbKZrfUgFzx2WqCgD2zrVEC5HkeSX9WfMFT5Tt1v25fmWpyw9YNckQDuYNv9szqzySDDWLop7m19Ussa93mA1Zp",
  "key3": "5hZoYGtUU4J2Zecc4wXJXELrmigZV9iYaDryzc4GiXSsWjFeq3RVHn3ccXwRmRRexpvRzPEWgtwZi784KTLLpKDE",
  "key4": "iauGntZvEvD43chuWx6DxLinvFmAFzXNiep4WS6MGZzUPuNqTpQ8PVuy3PCRSbK3U7rhLivbRes4P91fojwWFAN",
  "key5": "4W4SSRdPaJqXCSyie96tAe6n8CTQSdaXZkGJkGvCfXxCLQC1qRbpwdzTjNMberAEc9cSdHXTRhUNQoJUm2PufNm2",
  "key6": "4iQTEBTojViVwzzU2bBeXajDWK4kZmqs9TfnEDFHDShuPbrforCswXDdT1Ungfe9B89jmx12LqiqWyu7g9DiRuvy",
  "key7": "4CWPAw7oe94Mg4B3YaSMVCsWeSA5oZUyNW3ECZeA2SzyxE6dXeu2NbPzi2mDmEGWTYZ8PMvq9gVSSEySkpeVdiB3",
  "key8": "kuEi9rHCwEfQQXvXyE84trwiRB57qfo2FpRPELM5BhTDRavxY24oNeeiVfxmZecpu5hEwAyd78mYfWhQpwpRUJi",
  "key9": "5Q8k1badKoCGzWZM7Zh5pd36PSykgQM12mTgyXiM8YkhLVqokDjc71kCyWiqLBUkgw8nSQpXMP7bdkQUPoDKRRZ",
  "key10": "2ZqsPBBcA4YbqHwMqNtU6pr7EVWFJa2QEm6EhEhDKeyqyjsbD4WvqAszqeLWv9WTR7JKAMvmx2YKkbxNzeENuecE",
  "key11": "4e1QCoe3ZdKKERuQTnx3WBtSfxpNbo8PNd33vLEQfKhBNML5rLf5Zy4iveueCiAXmeAZinPjreUAkP2QqEwzVmP3",
  "key12": "4keRMD4tHzFXvcxAXx1bQAx9ZQH5GSfmcTtrk49t4GCwvovqNvu22BCzbpqPxTwM2kGCJi8BbEeMkD4PPBoRxhFJ",
  "key13": "2yt8gvkCXbFF94d7ofZW6gy6tHyZvFf2osTEjYfX74YCPyw2X9cmTkK8HeuaUHad36VtkniQjBUPYrhxBbpzDc5Q",
  "key14": "jpAQTaBrfraDgsmwYY4sr2vfhSF9fHKc1rbxsifS4PYg8Xq48DTsVvGoGbshP4hRSAhQ3NkbUWuuyJXVybayhpC",
  "key15": "5SwKt5rrvjt8M4DAHYH7MqczkUMxiPi5hP9sp4aXsH93qvQAGzi28SChN8TT99FHSrvGknqeVkvdVnjLFmH73Vpg",
  "key16": "4TCBoCp4bRUenVjDdzA9vXvUJC9uV1WLnfxyoK1tf4xuPsd3RoCer5xbnpCE9g3x3YuoXt3GJdkV9p6wViBGTuK7",
  "key17": "LPBMi6VxQ1pPrMBGuxuy2so62z8kWkojhNXHoDVWEMZ2xSUduDVmE5VjgxA4VD1CSQj3t29wrBxqFUJXcZmj9Hk",
  "key18": "2U4WYveESB81iZ6RV2iKmf4o8RszkXxyRWEoT5FMwWkE594kMtjz5dVeh6NswTmLdQkVzhaGjiVvytGRVJ3mHDNm",
  "key19": "3jadfu6ePNMt3i1SPCD7Rv2S8npX7xyg5LBC5zx7VKnKaWKyQydGur4aUUFir1osRMVATReMDgVeGXTaQNRPsgy6",
  "key20": "3HdT75yjXznvcJpBZKFgTK44qzK8wgGPXunwfNXZYM4Gm82moYKtVxhEsEt3ccxyEafDbuDrwRHWAePSSnaFpgt7",
  "key21": "61PYFN21xWUEbdj6jJgGJqPsyFCU6FaLTq56zEDRtviioq2G47LtmznWbWD1YJHegDqc6NosdPAVA5LuGCRudk6X",
  "key22": "2WsuQtyBGYJ9QkG1jJbHynSG38mtHNKMEQC7hmPaBccPQdHVzfYMi21UaJHiB1BiCpP1bXgFdTbJrMrUVoAnGaSK",
  "key23": "5tPMw4x9TeCcCRi8SbwSBxnak4GN6ZxEpdpigNtSRZ6LkQhqs78ic5S73jhgeoB6zZv2YgkkC8gst2q5yT3H3ys5",
  "key24": "CvvhXkGcEKeBdiBPv3HtSmRcMTguJxmjgpCGgBUP71xbCRRAU5jGJGjn9cdHmQKoM52yZnfuGLNWyxtpmKGvE4r",
  "key25": "dJ917aHY9mXqoUAeDeVoxj18nw42Z9CNJYVupc9o4siagBpWPoe4FPKRvzM1TYhvaoSBaY6pmneMQZuBsd4D3WF",
  "key26": "4pmy2XMiRcmMGWqsSULDXLStdmmpstG3fu75hBY47RqZxf8ukmPZnswGmeR3aWT7s7jwUh6cBQssU4Uf8BzSa1wR",
  "key27": "3FgRNUUi7WFq64iCESDPoqSKbR3eVcvJYLM9LK2QHzDTCuAvpvKMMFuqSe2wEgTniCkppnEfCN2Z6u9DBRxCPe2H",
  "key28": "4gb8eGhdaV7CEhHW7HXxBe3oTvmDA1easzD2EjAS6rKG6DM5xVrLqsgEPpfutrfCwz8KAnXfx2LnK2DWnnzh3Kg1",
  "key29": "Lrt93LY9rJJRZd11VMFhYv1ixKgDgBALZE6XnT5mynuS9JLPJVSXeKmZD4WQHFyKwsMjSEjxPzgTtkzdqwP51r9",
  "key30": "NNnYNRh32UHMP9yVGNUREnw5Zo9j6Mi4Y8yaSrMpMdAyLibnWMc6KvV3kyc1ahqbrP73p21j4EyPriamCHaoYzw",
  "key31": "59EBbVYAeUcU5VVPibiPyvu5GkPuvdRreA9HYoGngevUbDg3quxE1mkHQhpEng95kp2e6e4vx72KnBbmTjGCqjG2",
  "key32": "3iTHkQ1xaaSc3c4wNEg2CcUUmR3C838Bk6uFBawEARQUVM5SM4nNCmQfGPFFVVL51QKQ4Q7UttFdqVET5bHhjcy",
  "key33": "4nB7AqhbjJggzewRCHW84FnKcUz292tFDGCWbD3wuWardvJPnVjHZeqB1SnbskUE9ZcZwCbAVC3HrHWwf4cKnoy6",
  "key34": "3mDSGDaRhjF5UsYqsji6GkdUVUEcnynAcNW8h8wYNYhNcbBtXFhDN7j1Ar1PrPEL6Uw44TQpQz7uVTxiRACJ12hj",
  "key35": "4DP6ko1DZFoqTtG1V2dPsKAt6V3QrhEKEPyHX2PYMhY9vcw3RJ8wbf7ZVSk5iTorNYKiiL2bqxJB5nkKUq71QB4H",
  "key36": "2SMHDMdC5BHeQj2ZmWmUgqM8P999z8HG2C4FpYsnXdDP9EFysN5dGShtDmesKUxUaxE6aAM4RJuxHNgWjUDamL9h",
  "key37": "rHmHbBAtewtRgJ4RDmSrKrrueXwsSiWiWQFoj7AxHHJZ1Wf2m1VKCZMEaoykFuvEKP36YQfVtHgEa3qZxzaLQza",
  "key38": "4breT8GMNi1nkDPwo43XXMw4nDS2DAyevr98RYhzt7tFZeUfgJmQrHNdy1ttTT5ZpTEhkJRAT2g5Q1i4ZxhCxpY3",
  "key39": "3w9yvKNNC5nBXLqPeQ2RfsUWMY6pg3RuUpp6u1q9Gp1yqHxRHdUovVbYv8zSCsjdB5foJqbMvGZVbnGPoGG8B42r",
  "key40": "7vJKJ1zaVKdsBFLvZMxDwhV3L749zsd58w92jNuzF4PKmFEPGMfoyrMoga6UgTnj1jP7tLtinUWV4gj8WaDkWrR",
  "key41": "5Naiph3MkMBNPQUqBcBfhTjoovteY5XuWXSiFQV1B3dsX5F6mkq8KKt3ii8b8BNBUmBXBfek2vxYGRn8UL2Q9mqi",
  "key42": "2HAusZTasdmTM4W22VXT26mKrxjgtAa14QxHxyfANN6D33bSGEHFbyK885wU5tTkkmqvHVuVnT42r26iRPbzZYLu",
  "key43": "SdG1jygtpny8e1DBmUykXMbLCm7tYdNdEQT38PytB7DShVLtczk3ydZtstCdpxL9d67y3VA5khYkp5qf7aTTQR9"
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
