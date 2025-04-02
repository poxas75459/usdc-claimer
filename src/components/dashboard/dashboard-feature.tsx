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
    "6ZGD5RBhsp2FJuJUusdtyDpTWQT2Vom3Q1A6PUXTJSTtk6x4UHE9gJ3FLAnm2WDf9h4nNktsvrFSfAXzFNHXMHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MAA7zi6JZkjbwwABw5pf1xCT1AsNMaVWi33hkLf2eHaEBmrzZ1AnRMVUeky2hCxetjaRUSieJtvBZYWKGQ1ZFZU",
  "key1": "ehvi1oa6HSV8evqmjGBmjEsE5LpfHAv7TPmKEadggRpLj5YGj1e8rX1Vie6R3SJaWaEmHbjNcTQbe2FqdNHhFuu",
  "key2": "6155c8zwn5ujWinGV3BgyQjQjQYhRCyUQwhxeb25EMn8HJKSYaic8M9skgL7CtuHmJydncXcmmiXxd6ktvMtoexj",
  "key3": "5ERttygMCgLrcB6uPMDDd9dyqPYSnmm4iavCq8Um6qTcDMjSpKLW84BEJmJWrHcMKpAv46tSjonFejm6X8mEP249",
  "key4": "2MEEyokWfvUGY6J4eB9aR7Zk1JNd4RkHpaapc7EDBwVV39i6phZBLf4Fj7sRvu3iRuGnNtHayX4qLGme1cB6Wmrh",
  "key5": "3Xi7P8TbDcteALFisyLy8zgZ9PCyPeHmgE4bhjAoYXCMHqi9qr9YEe4C47vw3RzrGRr9XbuE1FYQ3hCRQkWhGAdV",
  "key6": "3JoVKYhjfvcVNYzNy2qsZjNqpvHLCzr6GNLeYjF9Pb8b9DY9pTsdaTqqCrLCiXMx7MadrEcgXQqD9B2JozM7NMpW",
  "key7": "5i3eNw5Lyxs9NEw6e6A7WUq3MUFW3jcqSiU1H8Smryujo1ECet3fdZkxBt16srmqQ7BMr6L9HHQuF8kuUW3KjH83",
  "key8": "5hzR1qtSGgbXRfLReeAEpT8MDs1MvzZ8JVgdmhXmHSgsgL94FNLFVJgiBCRFYc2vXM3dsXZdz7eNtmCyPugVGFS",
  "key9": "34tEgU5LmLxR6kJ3LGqU3tR9seezC4rwsLtixduAU3br8k4PjnxhgwPs6NY3fgFUEV3gfobJT7XtTLWmfTuNfV8W",
  "key10": "5XPTai9vVDpQCW7QJhe2bo8JAjk59WtX51CyiAEyuzqomErRyXmDADuizcdNesn4StrbEFVBx6D3C1YMQCP4YPKv",
  "key11": "3ZAHV95Bo6mEd2DiUC6LviJTJQK5HQYeyxWaga7mEB5sAjCQkBgaMie1w5uGP2ZfzRmGmwhgKamADxzwMkbAdKEd",
  "key12": "Dbds9mnutox1NvsrTJ79DsaiMJpWSezyT6BCnD67sKBKW7vBdar9FeJrg1RFsYz91E9W2wifTBGd44cU7gJ8WpS",
  "key13": "3X2un81EmTRfHZNwhjYcgxiD5zoNQfjHtdTruvXW11VRZ9B65iLV59w22MPnrrxD6Fk9MBLkZfBnEBqFuLKdzA9v",
  "key14": "3FbADiNDYmLwnQdamRzLAf9j9Z5vzUReYZiApc2snUo7J2SkfoN3ubhGTVCDuiajnYvqEkJ7kC6Cb4AbTH7ZKmmG",
  "key15": "4o2J4MNmR2wdzXnFLEmF6VFCe83RFQH9Nj3rka9UcsQcYB6jfDM2PYE5cFXJu6Z3piGTdQBzPZ4ZsHhS4L7xnToi",
  "key16": "5ebvCwk7FuJNPBaR4S5LXSMZNeUUGcRADkDv2u9wesm2oa64r9S5sNwUo9jBzcD4gjiP1rBpf4TfanhAc8bEkbEc",
  "key17": "2ekrxdxgKaUHhGjFMgu3xDkJqSAZ5TSa3DXpPdngGCEtrL2xMtZTfn4vrwUfFWmyVtPQppLAkwBMpSXGEhJjDzyC",
  "key18": "2Ub8WtAkPBjpvvtSCouwTGDUqp8JWQSi6Pe9yufe1wg4rXyWpdMH3Y3ZLz8V5Gp2Vp8TywufcotW8SA7vzGJ5Qc2",
  "key19": "5isQ9pBETUXzYuPk5prvjTxMwEr8XB5MwRPz81UnRJN7yqyVDwkPJRCBaUAU9dgUKBeN1vHM2zuesp1vfcu1FqyK",
  "key20": "5Xi1EXZShVR6YuuRt2Q9nsnaKwN7RNUz6MwhYXWGEJHBc3GTvKByzumiGo9SFFXpmXo9CB599Ft5kktj1BnzWwrW",
  "key21": "2tq1EhM3QvfSQrXYbLnFAcooRt8GQn2z7mrx8omfeJ5XzvByp33jUxBp7AMsmMjNYT9cCe9LfgM239BgVrYziMHP",
  "key22": "2L46GjjJqT5N9HVkH7Y8kSAABE7UwTA9qsCzM5mmd7kvGwLHVoygEs83PDjzU4HrVF3Xd4L876Z7JtLVpXHSJbmY",
  "key23": "9a5mB1qmxPkrRXfQ4iK6M5aqHCi8mEAUV1TueuojLxaH2FtDiLPcJMfszbXnUi2PTzXFcNk3ztHf7JKq6Zezgvi",
  "key24": "5qcZ4Hwmyu4j6ziuLWhby93vzfaZartEN3YFCAEyncd388unsVyDNzrdfqLjoqZbNFyUajxaAwYPDAKC9ue3JSKb",
  "key25": "3yLe2NF3wjA3NJquun5CCvBfr544iyZdvDXUDwgyhTnka6N76q54D91JGCyytcx2ZzKXYgGVb9Abr2sgL8Zkcf77",
  "key26": "5VebwqsMQ9bP1TFwJzLS8mthpMP1DfiTBiCZPvg8Keob74KCKKxZrKHURVqJfKtRoRXo2Yw2YwSdEuXqDMdhSNoz",
  "key27": "2DHieK4h4hQGfhHSvTh3ScHY8oTiqBZgPQmQPMwTbAbHXaM32u6tLRMuAg5L8A2f5GLz3CK83hc22XNmdfGMrnf5",
  "key28": "CjhDpwEh9FVKL9hguF2gbFMND4JBPsJmMKGguKFiFndJyuEVDW5UiKeyHry3SoQqYTVH1h8rYmko2A6GEoAJDfp",
  "key29": "3JWGFyHTtC2vVYTbujaxL2GkWgTCfZ445THdR1yEMr25ZNHHWJnSLCoPxkCNjberydMwruP1PEPmQE86wbXiN2LZ",
  "key30": "5EmWyzLa93ArMgLYbCkfaYKqbSt6xDdBkNXTs9hwUVSb5ikVfw4KDvx8dD7zQLDji1wNhqMwtQjuSGxYsTzxs86s",
  "key31": "3voyzz5HxNg3yHPy5TrR38zgvaVGfn6o1sH3dHo38Qry2US1qccqy54vqsLF1mwMGL2VJhLYu2k1Zrb451KVfs2m",
  "key32": "4hHAwNyU5wSBVyEXBZEJtnw1XvJo88ggLpETPKuXGqWigU8Y4yKWVE6GmX7xfviJgNd7jS7qBxLMXir89r8KJcYz",
  "key33": "3Z2k2Y55ZGCFvsUWv2CRXpxVdA3jootyBqUNUBwXsKWR5eJzUxCmdJvKTHYW2hu4TGtqrobgVHiYSPUVkHtBsX2P",
  "key34": "5633WrRJR35KwTiv4LPVtZtotuh8mZxHmXgVMRZS3xPaBu1QCsdMRNWtDPDmpc8JMtTafcPDEk63B5UfKwCcApvm",
  "key35": "5Qqie7pNUnik4GfiejeptMQMSamAUZdKvY3CMeViaQefRrj2T5Ng1SR42oj8Zke4JxgDwUYN7PUuHD7NbEVi2rfP",
  "key36": "2xzWH3TzHfURVuB9SgMja2H5MyonEcb22sfpUrf8gK8ugCMCSwge4N3JqAugqsDzkzYSaBdjng4fCjGeorSeyfhN",
  "key37": "2HFBkEoJzFHSGpzVpyrygp3cmroxTQnz86reDpBXiRKQbZvVzsxs1kNyTKvV9jB6XNtuxcV9EHY6CjGXgvMj4Zgo",
  "key38": "4DXEJdFWNjEhPznHHujgPMeeuHW3RSgnLwrgkoraCcU4dTPWwvj4RfG9cCycx37Xyv5UoVC1qjpDoxgREkqGf7u6",
  "key39": "2kVspjfygzCq4VmkzvqucHY5EEVLMaENtQxjr7Gt9Tv3yj4rsW7QRLWASJToZMjSvjMgmiuBS1X3WepXyzP9Vk3v",
  "key40": "2NVgSM7iHaoYPJ3ugcvnKUKod6Z3W6LvunoGGBBcejgQbUneVp5wfVNoH6nW3rZ13Dno4c6oQusPWZ9tj1HsS9CN",
  "key41": "5KXdahbVUEWBAiDqj6PjvBhLPrwWLimpSYXFmqFbiYA4d8yhyoPBuW6LY5AjQsvpNaz9M3oQ4zir3wF2oi5RgctT",
  "key42": "59MYfxhhPmKxDwfN6he86731im5UkHc2XF9CbxxXDo8EmCid2LthC66ri2zSzrQHx2aHNQQHBxRw16UKkprGLysg",
  "key43": "vqxDGx7eEVji756zpWuBUzBf9KW2x5NkpwPQmsUjBbexkf1NzudtJ17HnMJ364xwypmzQVtcJZ4Sxa2eDfmfdYD",
  "key44": "2inqzrFgFYJqJv3DbWkCdg3HHmhNvUiTZvF8oAwsLTcxFzPPJaSPbjYY2Ctw15hrgBLugLncorG1aFeMRY6R5asd",
  "key45": "38NPNXFimwd18CyPcwXB1etdXoSrAdggpjdwCZstwfVk2xdRt3xg3A7hGLUCUfrcTgmKQeWzbqmL8ocMGC6c8peW",
  "key46": "29M23YqMr4EJgzVU7T5NKzFgbdZGdkPEANwQcFDWQKSiSLefuu1sJ44eGXgCNcjCmYJ3LVov9FUiFmK73ryiVF4C",
  "key47": "3MNvi9ZX9CBra4BKMXtrso6vYTywKp9h1B5ZuBj6JKuHWnztaXAgqUtRj3SvzGDyq7z8Psv84riThRWWVRqwMUJP",
  "key48": "5mUtKFjJPfTsU1X2KG29bzYtV3xzf5jHJyXCwErgT3DxdNumBimtkeZDrj1efV1EAtmHRE91FNBFMdh6B5ZXXXeV"
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
