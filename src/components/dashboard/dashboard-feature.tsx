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
    "8hEi8seFoMpbF8HUa1dfCZEAZEpGYekC3cAEgFs3iNr45KLzH5qzjzKCAyiPxQAMgcce2uBaRDafNTtNnG7U91q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63MoBJDGRNEqZvTvsPbpoT9pmZTYn1SnhDcLCr8AaSvJmhezSK3y1xRtnfhNjiteqhGCLphxDKbT8n7mwCWkwTRe",
  "key1": "5AdrfVDezP4542LYzzLGrUm9xmp372fgiFbnVEhhx1H1C6Ng29ES9M8mp9GcbmDwR86L7mMZYxGwjTzrYNtmZtPn",
  "key2": "5e4jyhrvTF6WvW6e8vswNW22NwxB2PWomywMURm4LnZCZ38AZB57osdccfQn18jtszadyLwYUSvCXeHQb8HQBfvv",
  "key3": "4KjGi8RWyVDzT1CQnFcWVcBU2fUdAn4NJ4qYXKJgUjoQkiP6LtnjJbzygQhyMFisBPNh7MwMEXnibFEA3TYhWjpo",
  "key4": "4owrGTThtwcEwSF4Qu5knUiUZdf8pn2hLMZ9bg5ygR848MBGmV5912uTF88E2n3U9CgneKmstvZbhoj22sDLTWL4",
  "key5": "4ghBuErhafSeFFDRZdmfLEf3G1EW1MH7EmqD76nfn4hvf6tpA3YP3CsggZyKa3ptpcvwd3Pc3jri2cYL5oLCDFwX",
  "key6": "3ZcXn7cYtMqMSfV9PZRbRWrrHktZVwmaeHtK8pqtSsqzMY2Vdq1FZVJdeizi8Ns1eqydnN5J7qfwp22FW89VhXgf",
  "key7": "2uTh3voxsRinjoZhqsDBQqXuMqsy4WE78PRLK89pnFVhrpC2BfbpKT7ZR6M7MDU4uAsfKtKN7CSuw2gDSuZifwaN",
  "key8": "4ptYDeobJjN12phGZ4qpG35UKgTzzrVpwEus8zcjmYaWhmGrWycpZoFd1PfsPRAht4pUBWCWPFmqSENGhxgmYpBp",
  "key9": "3U7MXLL5jfxXwUFvnq2KXBCvzo4bAEWMy8RbU6AsQ3UaEZWLwYZ3oatjXxXAnoagxFQKxmy2aY1Hnd2u2dgRckAs",
  "key10": "4k6T4H3SPeRoB8yMVLNPWDpF9fTGoBYWxGfrEnj4QFHSQPy8CHxWe7KBZYQJudTyUrK5mSS1fWLBSQ62dm1Uk3to",
  "key11": "44EY761vodGgZoxQjSDc9azSecz8eUg4wR9euvP5MTBr6qjved32Stonf8yNJ5AMVk5be9FSPodfJMzC3XDfz15M",
  "key12": "4BQhP9GCj3LXkUBZFeyZsimcQt5gipqPMAXAVFZiR5DTZy4Fdb2yLk2zRRV6HDoru94aeTkhY5FoFp8aZ9zdQ8vk",
  "key13": "5vgSmKjm8Gvzfgev8KP4aJTDW7nCTuBBfNQnGSHTADFBekTPvenNsg3qPPX9upPA27PDNCHJYQJTSYVVRTPPrTQQ",
  "key14": "4kQ3qykQCojc4fkKMGvQ6GdDZEuF1dhRMg9w9DxhBJFCnU3JnQM6mFjC2yfSNviwT4XhFjwP6boVXDuPYzaGSC9D",
  "key15": "2oB3KfHSmkZQVXcbA8nssf6y8SVKd3cu7ibiQndNnMTZaCZ4oowapYDG4iZAF2t92FL518ZAKJNNBJrHXE7GtodF",
  "key16": "3SbQFrx8bS5aAgJgug6CkWHHjFcaWtJKF2NWK6ktSMSuy1GSWT4FAap2ZCwPaSmcniNAkUkwEew95u4fCwEaGY9P",
  "key17": "2u589KGs2Zb6ECnqdBmfgqkUTfyUhDU5f47haVtrBHvZXZ1CRdwZpDWH9yUL5PNuN7WR8ro6VHKR2pmMWiVBA5Vn",
  "key18": "62Wy1FkgYULtqtcnq7ErqoiFiDUTB98W61xZ8VWTJmofH1CDbL9ohyKs5hajsQP33oyFgLEjyw8DUJ4HqaBeUXFB",
  "key19": "3nDEktU7tsFRKvYHNR5oPhBkMVgqq9sVJfq4ctCUQVwU6N6iVBwfuzhmhePkT8T3HYfRsdKXjqSktsi5LdfbDZu",
  "key20": "129Ku4GkfjrXfTQToERu1UMuufPJq7p1rXBoND2Bf7AopiBwu7zZu4Q1U796zrCLcWKZkg2Y1LSnZ3g7d8YvjXwr",
  "key21": "4NKo1HqUyMRGstdfKkgW3JXvwuyNLhb5J7gcCimFnA7Au7ZNBu5CeAbrPuaYw38sfogEk7jT4DpuGkUqc4i2NYts",
  "key22": "29QfWM9tPpNo3AEgUjM1Rxb6oNS1BMPHsNxbjfEmorBCQT1cMD2MbikXqNhNCgM285zmZZv85sYV5y5g4XfQscvj",
  "key23": "31jKtz2sA7RUuurrugYZYEKxd2EptcjDvguxZ3vAmc5fb3mZemaAu2GSu1Se2TLANnnTwXwpkN2HxoWW1S9eqQnE",
  "key24": "5qtFGNL3VC2t6Crz6k3EBsy77fR8zAyLiNFRaNMPcn7xevxewf2nCZiurzFm2xTG5tiHyNAnj1hUYVciACpQY6LA",
  "key25": "3VoQTH5MqcZR982TyBNffwaMz5TTKnYS2Py8pCoRNyYv9FGzqAuChwMGvARCutxpEY2G4BGkivxLXAfSLwg2ArCK",
  "key26": "29Db38699vxMhwCVbCrYbiPF4N9iXoXzQynMCNMBkG37U5RGCx7e121HM8C7vPq4QtMKd9cpRFfgPXFiniuHxTPg",
  "key27": "4cKzvGtDJduwixQQsKNmBvmmehHASe9NC8gwTn6rxmHoGRAgrQbF27tmRiGrzDMbANitvvzbcpT3Xmx4JY7JLjhD",
  "key28": "3jNa64HfB5Aw6ayA74va9wm3rX7YPybUa11SgkwQ6MnqqyP1VTNF58qJiAy4X4dFBcczoRG96dwTtCfULE1HteNz",
  "key29": "5SYAGnheNNAFNZ5DLGH85LdBJKdKiKhLUG1nwwK32DWCDLNWugmUP4NpnXsgdsu2NypvxgXYT6C8obqRimDEHvN2",
  "key30": "5LTty35pEyWFFrsCo1nZxyrey2geNckd1s8AJLXUCYt7igX5aAvN7g5xT9iAaYTaYHjaX71PawoZij2mVsi7dbYd",
  "key31": "5BFVkH3LuEYt1fhQ9cgRopnhG6Axm8ZuxkphrdGSQwU42W54akzVdXi5zGywRwsCLwGYKJavS9Ct7iouSQqeBZsg",
  "key32": "4SUb7xzFCCKJG3pKtPA1CmNQMQeuJvdnoqiNAPTSTWEddEgEfBt1j17uA72Bj28FXNN1dCakNNE2wdGsKjeqxhhM",
  "key33": "2Y3yu2t1V8Ydncz3hesG8hpqYtoFT9rMiE5rftFC4HAGXb5s5gNfjbGhUyW4XUfxo63MjbfujJ9KReiN3mjP1GDc",
  "key34": "4189XCvfUSkYKgJazKYVPAZ8kNghNPHj55rj1PzZ9UxqBFzsjdxRBXdx525f4MLVnVvzbwarKYreNuJvuhzNW3KX",
  "key35": "2X2ffy6DXw64c62o2xF2sDgT8E9aUyLKmQshdB4XiqpRV4gS7RohFaDjtbFbBbcBPxdGrJWoarfGG5Zt8EruG4zD",
  "key36": "TiZgVfbc8VQS6PjQbQanoh5m8g2U65w8vWHUdBozR74v1h915FfHE6dzuYXJWGNjiN781djG9UX9aa9kC8WHFay",
  "key37": "2be4RvJNmTfV2sMaLJWYew9iNGYpq3vrrLijXANi2mCYyVYVh2jm7wWW7BcsgFCFXaXvZJ62BMdvdpayi77yPkKD",
  "key38": "3irP3QXPxZY2gpG633WD5XSQax69avt2FEmLP2ffLettvx2sqktisggZFnE77CezhLFrJ3zunLUTZ8dWL7ThtwkZ",
  "key39": "hdytMRcaJfNTv2LRfmEr3yphcZs7CoJZD5rXJy9DniMWJGcdjM47KBr1CJ1e7cqBSzQh2zRct1n1mJT41cX38FK",
  "key40": "49XqZ8Rv9wVWdj5kc6KBwn4WruwSRL6yTGcmEkXbDPqpDcSdiUMwgiYYXyijAZtdTmS9zhr79QvHvxL5vieba7eG",
  "key41": "3yQEiiJh82qzSFidspX8jqHEDQbgmMXYTP9CWKeMvXveZ6fa9iA7ogXGfnkiopZaqyhpvFiEjfy5fnPdq6MfDwgQ",
  "key42": "2cUJNZLftaMY3GWfL7FBozBhMMCKqx8M3WM7ZCCtdQYurwKShAh8uJXNgnMESTdENVLP8S264EtJDyoQC9Bc8TXJ",
  "key43": "5G3SYw5x2CaFeYdAthgSeKSwis7pB5GC2zU4mpEJM9znigQ7jfZMDFUTFWbV4o5YeqferKp3A4RmwZpNgTGPwbdh",
  "key44": "38CmXNUS4QU5tJLkyEvLkVyBAa4rvvi8wYaoauLQop7XCqr2i2RsCLNSYLwVCKPzB54yjriXJzbkpM1W4V7SwMqR",
  "key45": "uvmVjmukZtXN4HmGBhT8mKT7JqLBTQKuXZfCez2rh72X6nTxHRRFtncFG46UFPyaJGE2Y1XLNfrBjEoxQtZqfDf",
  "key46": "2jqWNXZJrcy9qU9xTQu3dRP1SGBQz3fmmuXxgDMrkvGzSe1m2Kpf7KH6yfeiizE517Ve9rNrCpQ6UuVjJ654TWUs"
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
