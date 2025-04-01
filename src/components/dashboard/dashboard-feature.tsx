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
    "Sh1VYjwZUZPPvYy7RDjMSuBRRthrLTHqvF6ogU6ghNn1epngnVxAFhEntq132KRCcSbjCRkcRF3TFAHeKWuzi99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ce8QKfRkipPDsita6CtCjZUjCsFF9y6kVtPtSQ7s97XtFWqi9JKAHw1CBWJV5yRQYUX9Ntjx9eED2JVWYT8KeD5",
  "key1": "5qjb3dhwjBEFx4W6E1F4QiR83QgJWvQhhaEdERV5STQ49tyGG8yudnksLiJ6E3r4kKuip4zRwsLMb6gH15XhWzzv",
  "key2": "ndptyPwiFNNnGX5wtpAEWte5KvaQnapS9rz2oqA95MmM1Y3JPtC43NBBcty9Zuohr9hWacVQN2KyASrnnZiDmzW",
  "key3": "4zShp9R1P7sFLbYEBbRtJCUCUes5N3vMBUMg7guzRKwAb3MZH53B9FGVmd8uojrJWZxBtZosmgMqGYXCqxHozpr2",
  "key4": "2FV49KfpTLJPvG9RnABkqvn1bxgesx1jH3NLZJAobByXvvfpVRfZr77iwYSXDct1JwcQuA59SfY5AnQ4MBPx38fw",
  "key5": "4ADe5FALgc2PGG66vmCWDgNtm3VCg5SiaixyG7nYfHdNwcHCcGw28Cw75u9haLmUhd94voTM9E4buoayXWWtAdiC",
  "key6": "345Ni7yGKRKaKSZvDA8cxfgYWe58RNfevnKd7tYcZya4KTPt3XECS32KJMN7WEPZdaxbYU1ASqfrkcfwGu6gWXSN",
  "key7": "3iJMPc5MU6h27zRYfjL851KhhGYPwEXyQ5jfNgskjPGLhPRtS15gndNDujbLn59j7VJ4QM4tL5kvj8GLZXcPGJAc",
  "key8": "65jTZdFwy6TbzoEY5U7aAKvCngjCmyhL2k1uPqEJAFx7ZFFFUwkXXwsWmbRZgvrzkGxt6BzPcCyrV1f9dybkFPNZ",
  "key9": "4qhW98Ay3b1kgEWtzHaEo7zFurjTsLkNLUDpULqkUamYHpVCyihb7eNpuQLbBLkzeJs9g3th2ugDrdmQetioefDz",
  "key10": "2dnedacMASSMEZNTKbuTa5QmMUFHwgQPMnrjgykrSK7nTsirWKvjyuJPX8eucy94EsDDiGrqDh4s94z6yrxjw6rA",
  "key11": "5UHoA6SrDeQxUHLPN84PpWftwsEuBbWrazjqckj39PTg2og1PN99mUXuyRarqscEHFFUg5mU3u2eb9RfHFNQ71CT",
  "key12": "5RTLAhdizN9NUUJZzBTRX6ZJjL2x8j4VG98oCi295nALLmTFCssfP7EesbBAJ5pqVAYkdfcuH9CMc2itKZzFo8U6",
  "key13": "2HBkD9tdFBJJpn3KDhqw2Qck8U3yL5kRo3ip9UeBAs8tNisJ2CqsTUAhNFPDnoUgxmBkfAVHdopEQjLxQZuJRVuF",
  "key14": "Cg9qUsC6tREgj1PxmjaqdjBQ8hZYNzevD9GURaSuiG3niVjmMhTZZQgTweyydgmwj9wPaMz1XjArSqqeViY19bo",
  "key15": "22sJKYRigWUgKu7KwTrW8xaBqZhQyxX1AKaYa9u2c7D8wGu7nnJUWsxEU9ioaBrn85PxB1mRGqDnLa9f2iKhwxz2",
  "key16": "3QxXcDmYbFsHamZdYALZvocPoRf1jsWuDWoiGKPMPydJn5kQNbFBdjwDKxKWZFyQDUstcBaKYuQorUH8KjCGYmMD",
  "key17": "3sFarjeaGVBRmY9qpZyYdZL7MeDBrZX8qPo5btHmLasHu2Xt5hGXo9i1vDsHHU7wUANh2eRzstSmuw1yL18N1F2H",
  "key18": "76Ski7f5ZwdZbcmNMwpog5TcbZG2aTH6KcHyq3qtd8a9w5eW4w6JkKinj3fncJUBYEFiQpA3RpdEtvMb7RTKunF",
  "key19": "2rDKD8MokxR2TxuK3WH5kvjHanjTq6Ga8773PbEoiHwJxAzGQrKnun22f3ckYV83qqhxn5GySKgbHvcQNNGcJPBT",
  "key20": "4FhE1q59MZ1DQKtM7dYTsA9PwFegE7NAMQGa7FeW4HZV6UQ73THer8unF9uWbwwUfoenwwoXtZ77sPK5anUm3rdk",
  "key21": "41EZFbhxZfidFrZKBRU7mB7qKqo9bsWX8tcUCXVrHbUnkyppXDMwxP9Hk17LtxeL8ZbTU36kcK3V1odgLooJQXq",
  "key22": "5kA3BCYD9fHaTEas1LBzBtx5oMCGgfgC293RrDzsXaQoDztUabrGNGo7UmEVk4hKkcWtjH3QSzavoYMxbjrNPaGy",
  "key23": "3LHtEP3jhqhnWsjGJ8x4mBeW8R5j3NxG149EcxE2ogHXbeMyrfLbrhPfkHiyoDQuNFBFAyXk6qQ8gx5Ays8unGj2",
  "key24": "5RAgtzXsxZmyR2veWT6p2MGTkPeCGDGh3Js8wiMhQQ23nW8k5rosfbUBxA3ZVTc9k9xkqM6sCjvQ98ynH88XNyQq",
  "key25": "3oTkwnjJNAKJFCAdsBqq9UNX9g6sW2QUVZoTBSAxxhznSbra51idH5fPGLnrtUiudssyYaqYdr5YQLd34qVzXTkV",
  "key26": "3RcwHEyES7RG8nCjAXDPLGLdx3XC1pxcJiCd5VkM8rFUD169RepwxQL3SkUzVkMmzyBsB3PJkQbyBuDFYqvWbu8u",
  "key27": "bAi4sE4um389EKpSKiLfFXAY9BQ8HLeWniG6UN5BoE99mUKvcPLMTLy2kCN5gvcVDXrRcSfkybgKRzzEdt47Emp",
  "key28": "2DMqmU4Qh23wGnjANXeHZHJToT9xtuGXq7WSSAQnooGMtbun3EhyJxdDE1uGsbJzya9pCtCzwjG4ao3nLF1D17Pc",
  "key29": "4Pt4zbfZCh4mUjZ1uhvrFEwoYGqUM2KyzcphxZEgpMzc7Fnkkt9EhwV9zjQ1gsHmWr64Y7vVnJuRkwQaHGALUpRw",
  "key30": "aWL2jnrenCh98tp4iDws65VgNHmXrxK5Qj77yAcfwqDY3A3rnzUpj1THMz2ViFEReZsTpPbAukRZNXiEyGVr6D8",
  "key31": "3XPobfqibLLTghDV5Dk1xcjrGM82KNy2PnbBKbFdUXR7t96vAJ2z94UwDwFY1TShk7oxw8e57mRAxLZHDr8iF74L",
  "key32": "AChuhKn5ADc1fcXPcBJoEABCfzJLCAPJApnSndSujgxCaZiLtGiyAxZWV6LqoUEGW37ibfmepoYApHe1DxVhEhR",
  "key33": "5iZjuVeUGGfTz8o6Ah4QxYsvoEYjRCcXE9msxspgk7iY63hBeGbgvCAqbPjboBbtcfqXJtrCC1qbznNF49cvR7CU",
  "key34": "hqMvrcg2aaF1LpqPNtxJYxfrSxA3sw6y8zDccu6xcX1nsENjCWhsRSuCMfiTe6XdHjjTmqdqgXWmEBzbA9vCWiG",
  "key35": "UCoaViZLJV5Y568t7E2niEpARke8JKJBNy4HeUvt2httXrc4DfzRaqu2fc3MSJ2PGnvRHvhWMt23eBsJwNiTLsp",
  "key36": "3wq1nDJXacavApYkbkajgWtdspvTd3DQBWGMp4YHHrdq87zryyVVaHxyAxyZ7db8qLwZbXKhQy6iysSuDG7s4KfG",
  "key37": "5AiqZMu2BFdJ1iPYbfiefDeGEw7SyNUnH3667HzwHafg5Z7TzZLhBdBANFY1j9sFUUWRyK9M6KYC5faDFTBPsL6J",
  "key38": "59m1KRL8atPWBUqWJkQsS5inTRmGacoPSmM7N2kEFiDpo8zt2EqxKENQYcNnKQSwyzAbsZisZfvjihCp3EertFYD",
  "key39": "JQU69e7N2c7dmoS2H3x7RsQ4fyhU6QwSV88oVvehPQjFRAQfymvKgaeek5oQcPC5XsJm2uEbvWc44Ge4WU46yY1",
  "key40": "3xVUSSwxcgrJc9Gq5Dps1geVGFFFcFkpwAvQ9gRtJBpMQ8EPRo4LxHQrCGc3shpmi5RcHLheqZppBzL1CJ15EvZT",
  "key41": "3FXxK5gjYsgT1UUdmRQhG5DWUAmfSiCKZ562oxA1WoQcX8KiwAMBw8NrDLDFJFWJpHrLk5JHmipbtVdGhzh2QimW",
  "key42": "29HD1dsGihGczzKWajQZRSxv5Ao7dKm3daKEgZw5bg1KWGLvzaPa7bQ7ZZ9SnuRSmofTqLGYX6Y9U9aZGfD2mjJj",
  "key43": "4s23uXfrNzn1KPftXd1dpzc1tFwWpqasVPAofkgDG9Tg8BdvYoQzN33fyZT5LTkJByuyTQ8h3ytHMC8BnasBoDfj",
  "key44": "3rq2DqhTfocQeYTUeZ2g3PufoKS1Hvk8kDBeNRDooQGAm2yhsKUJnMouwwB41yfexaa7bW4M4AvZwE9PfVFCA1Ei",
  "key45": "J1rNTAnd3GfA3zCHL2ZJDpidbFugqQmsnYpvPtyQ5NUwmE7XDUGPLsVGCVvu1zNZVkK6EFcABopqpdB8u5NDzWg"
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
