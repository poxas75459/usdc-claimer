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
    "YVv6BkGoKUZXDrChpAusiFr1scX9LB35RhaJ3f1a9SqNh8EQgfTD7CuCo71BpBo9qd2Ac7o6vPpwkHUYKpxbASM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D34s7LfeBhKkCK8RxL6VrK63267NK1QsT1nR1Lopu2qTz11gbUuoxyASpM7F4qVgS1DZJcnvzFUVKiT23e2JBvS",
  "key1": "57f1w7oCwWmLXRhkRAx4oUFueonKbKLy4P7aACo1qGFjcePg5LSxtnbr8HyHtvDuU3jKFKR1tH2MK9kyVAZTaKqF",
  "key2": "3EHUwBpuz1fid7ZfDWc7QPgJU82gZGKCjAei8hN3LuYDEssSquwFkyGNGJTLrFD4DqRB8nsVHARnyfrDTMewA5ht",
  "key3": "5ax1dryeR11WbrivzsWox4dMVpYrrWQXjNaMbHvJSMDVBApmD16wAWwEjy1DyhT1xT2vTKtLbBSwXSzxGUVwQEvJ",
  "key4": "37k13RW3deFRnvjUZ6bfXcSFXcncAmFHzwg8eyGq3yrNtxZd9HZCTATfGmHtVd1oLKo7iojq4aZYnGqnJko2iSzo",
  "key5": "2wMSPHxSH4hJLguDReDmuGAfGQfbSftDj74KG3JSLZiQrrv9edvAygos6vjvJ9gUu6kzAkCfPi8uhtQ6CtaxoYkg",
  "key6": "2VDNXrxoXmuzhfivpu4rnCuWUVVRnAhwAPZ28BdLfwPg7FS3f3Gyx9iPDcMtAa2a3kAngmpQdexFpY9pFBRbzfQy",
  "key7": "4F1iubeKrTXc8Gu2QQzPoZVfr1Ria8mFkN8CW9KqpTKPYVY9FtYUxqm5QoF6Q5DNCcNRXyvJjPSuS8kPuTANfiMb",
  "key8": "2CfypnWww253ihYbdvz2JPGJ4V5fVijvPAxe3Gq5KyPhSYZBuXLigACb1najpr5zPkU2HQtEgcqcFUY34UfagGYL",
  "key9": "621USF1VFFfULzMnvgpkfs4LZzeBbLrhope2fhoQkB4kFJmu7WLHErGa5WgUYRcJyWWudL1NNmH92wWzyQ5cLxwS",
  "key10": "2sVb5Qgk3XDfgZhhuZR3Y54RDocddrnny8mNwojht2F84N59eXYfp81UHRmCgCCVU8ZvszShFwe51LCdXSMhNtqG",
  "key11": "f2NVtCYapbAi95hkkqCgY744qmEf98vuSUYLuyT79WRAxEpNEHYUtqJ3TAP1epqsYTWSQW7EPzJ9wuV9rX2GiFG",
  "key12": "5GaeFp5uVkKKyPBD62AHVoDyAHLobAAESKaxp1kfexjAkRq8Vgwufc7xcgDEYaA6ZATMCtLgXkjKa7jGYQwhgonT",
  "key13": "5XnPfoxToywv28ecgJ8XNABwH5PQThYxkNYHVRJ4JLZvjZoab4GZTLqKbqwqEZafVpKToqUPme8HZFBM3FkCGife",
  "key14": "RkL72MBbhoWLt7uxaHmfYVEizfJZHoeAXx3STKgCxbZRwYffnT4cqxteTw2N1QtqPH5d42FSW2c6G4pyyufATpS",
  "key15": "2pba2R8jwqRgW9JCunjjZivp4AKycmm96srJe8dL4bs43Pk8WYbHWGeom7ZdK2rzLZ844zEqoAeSJcbA2LScandf",
  "key16": "5maSpyH8SUxJ8mv5e7Jhq2fMTzehRG16qtkut6h7G1U7b37aYt812WCkCtvVAVsHrZ15vpWHbSRBZNwcnJLZAFAF",
  "key17": "66GijLWDGS7UfThVmCeUZYGcCpwkkFGN6qABAWgeyndpJsD48c54ziNVyoqWP2AoGd76BhyEfM1MSLGuSD912eTT",
  "key18": "FUvxB1S5YREKtQkgtm8AgPrsX5S2Qgh299d8EWhLoPDSWCUjvEVDCUub1essdUvtXqm7ibCfCs2BGJyMz5Ug72D",
  "key19": "5nvu4xoa5aa6cCYdVDkrwDbdyjhELLtrMCVq1a8Rmc96ukSiAUc3e86MHD1uDmbrpg6MNRi6rRKeEza4t5XiYqtL",
  "key20": "R1JaaNqiXjdbqK3vkSGPm3AFYXoiNsaZZ7Q8X6H3pkEUXe416CKDJMRsBSab8iUA8Kom1ymBiWfHYFhrtvet33N",
  "key21": "3BJa2riiDVQ3TEHAk5Lb39JvEs5Ti55Srim1RubokMkkiuXnBHKTWKJL6Na8EQonLLcoDtPfRu2UtyxTi6XYBcm4",
  "key22": "ZdSkTxVSSEvqBDGqeX1jVG57L7QTqU2srMgZDGHnAb2kt2NFfGpv3RUt48yZjm7uVTyr9gsrtbUhkgGGRBRy8db",
  "key23": "2pokLg1QbAduPWhTBwjkDDppHJL9i2sdcFXHURSsoMb58NYenUw9i35fGYo1UFXDa3ThC9cXMPbr1n9pFjbUXHam",
  "key24": "44FmVRzjNH3Guqf95bEUEKjK986ERYmdMn76SbbZdVFXe7QkEoygRv9XpjciRePMH4bsFdWq4nCQJGJD6JVWSCfZ",
  "key25": "3bZRfauL2jcJZi6stZ1ySbsVY7CxtwH1yk6ZmAzU2t6g9kBvmt5WVSCJpkJfNcskBQ2gYE6G98ppcKYktSw7qheF",
  "key26": "2nNyysbE63pexGTCHEAPp1mxgLEfi5v1muBmfwU7snvgGPChKj5UDCvfNwYE3ePRBHhPUWbTJSes3RvELg3H6Lkg",
  "key27": "464t8XVg1oJGNXCidVCni8QbWS4pjgfhX93zzAwrs8B5ypk7gKTX49i2B3AdCzrxskpVe4rAD6h8znsTA3CUpn6i",
  "key28": "5x3c2kGZovr655cmMCDzzQENS5FuDxLoedUwgEFdC92Lhi9o1zwKXJMQsSYNsufJu8tfEeyz5r1NS2EMQm11U7yF",
  "key29": "32ZFxT2eR8UuYSV21ukQwzeYr9uDmByovLGFNBbZyQySYhZJJnreSUR7VkprVo3XPe7aXmEmpuEkiu5STfHnFVCG",
  "key30": "gscJ6cA77WKXTxHhGorB47ckmkaE6DbadVVuFc1tBxiQ7qmNtwkdFkYcVBSRLYtVTFJZNC8DFJmTGzs6B8ajTJU",
  "key31": "FuzbNEYgS5Rexx6udckn1mLfsKo76QXA2mNyv5KUCWMU1fV8L6Uz5x5vLuMCetxwLCxwLa1zcCknGQBa4BVNMAD",
  "key32": "2HPPwVVUCcvS1XMRyDfSdHMKwqsA9FMgitpG7NqkCjyjeX2B9vkaMUMdusJgXmzYE25L615d3gj8L8NiKP1E2X3x",
  "key33": "4KzhAV5ZHSG4Es9g3YqA6JAE5FDsYvMdL9WLDFtrpZ8ivi88AgUcHD8hG8j8akSLaH9r1HiU4wFXcuXzcMmcKc9b",
  "key34": "3VUWUWmNu58Pq3cxKb5sMrft2UmukaVW4pVgReyt5vc1M6SNFs5cQyKF2aYzcdiLYdcoHJyaRBswGuAgDzqDh61m",
  "key35": "5x2WzJHRsqf2TunmHdgZ7kQ9WFLbSjwGzj3Xoo7DykbCGAQUT9Did4tvowVXggcQZ5sZK9Pex2axjDkERkqyrShr",
  "key36": "3zdHvewrMMNVbfSgEaheL3dyrLdmKA2kuHyb9XXL97fK3QdeLJ8nPAhCbvagz7CYHJRVwczbZPiNieRuhVMVAo3z",
  "key37": "3MSb1t13YGQ9bkCiKZXLhQ8NdSMz6PtmXrTYnMTv6SuhaGSynLNyFPEv4uPYHYxhGGAR9YvmQLsrz5We46xnyQRZ",
  "key38": "5123Bccu9267h4DszEYtrP4MYBsc2rFhViZ3BmzyqTejcg1EHSdpUb2uK4bYz9egjvGTMYQ7TWDEHASXpnZYdspx",
  "key39": "3p2u3bgwLZg3FiCrAkqHG9j8GtidkhRKvHE9yL5vJJ4QNRi1g6W6RLGQfEBe495Gi47tqov8n7J3Ttm3oJarPxiy",
  "key40": "5zUrewTQtH1mbQkaBgHuJ5a2KvuLLBp9JBng62KhQ1KZnkATgN5r3rsVoRFcXEHcVYLdvpuuUtXCPgQfshTsZjhF",
  "key41": "36o6sxBcXe46gpSXsiYw4AcZgMdKURjt2GXTTTDZDgyemQ5S94SYmbbWzQxfkqEm5Gta5sEMa2qLLGvFaG6cqYnc",
  "key42": "3K2PYcuo4hRB3nHayLrU4GdBJiz5BVtd4BTk8vd7VovPKjmwtuLi5nfuyQLxYXJKsMgtY3ej6nCMjs4TxZQDmTqx",
  "key43": "2Tqdd5H4PtpjgNW7QmUzbAKHTDnhxMjjYTRR99aq4McGJZr1eS8HK5pALQ7MKQYhknqVEzebuWmXZuCFc3SmSJ1q",
  "key44": "3nNjjmBHoznm5SjPi6ZW2tAVgtyRtBF9iue2Z5GAXtzAExofxYZfDsMfwyvXBzbL1ydUu3SxAegr3oPASk6xx5Ys",
  "key45": "5Fuv4UmUxgwZjji9zew9i1GeNzyy4ZHGXpZRbAmCyzaH9cWDpHG1NAFJ3RFNjxror3bEtW9kgexmWdVXf5NM66H9",
  "key46": "35cpjPNow41suBCqBd847fRMTQNGwy3DASqwPkJj6m9q89y6iF7KzvNEJ8rfKEgsZoSLm6ALamqyeGvzandzBJLB",
  "key47": "3yPLMer5FBLEbN2VHyRvTYTvtCbXtWnQAVpUVrZAq7MMaf2ak3e4BDEybFh96QjghTMK5q1J2n8Hn8M6xgEdVx5H",
  "key48": "GFP2eYx7SkPBaiaurcCfc3yjvMFeTDxoKV9yin7e9XYJf2UvC8J1YStbrzYqm1UXRFJ38FRCDsVRT1wqgesYqZg",
  "key49": "2v9EoNy9bMNH3epztd14FnZnLGGkHuxijq8ZAkteVvAgbPah51CuT6FF7eooGWAqji6MnRULqvv2jP1ghW7fSqfn"
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
