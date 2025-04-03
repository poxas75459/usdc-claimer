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
    "JfK7s1fqVCfk2HtWhUhc5b4TLzuZf3npDDFuHXvr2ULQMtsdmKvyAjXEaTut3B93yV2GAGGxXbAUmKn1MGQWWnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vJ4LFPVsGYKX4CYdiRxi9bBA2Y9amZjkY7x2L6Gi81qCGS6G1hbJxLqtuX1zQVWATeoy7514UQxrCZNgkorPUKy",
  "key1": "5oH1QnoBbG3J13JQpsYrNpgA5VJARG5oWHiXkH7s3SN6UrNSRBknUeRG1u2RqkbYURbqyLnVfSyYAs5M9QtTvGCr",
  "key2": "5cddSfCxWJsQqF21nPk6iSYPPbKn3evrzkLGbLeu8PbHmSvyxmkUyfYojqi9rixtmxUPQNg4uAPUSKgXyzzLeUQM",
  "key3": "5kawuM8J9L79Xx19SDAvd6gmZJryj5TaLqCDqy9Tsa3CUWuv9oo9UyPEcQpRM2WzjmpoPwuX8DJAUjhUtphtjygN",
  "key4": "5Dgqqj317LfUJmEjD3ZN1f64QkLGox9zwuSux5QwnT5B9GyVfp1Xyn3k4KWRDFHCBrPbwDLpB7wxBAwFxkWiZpi4",
  "key5": "5jbuuT79jZ5rxzkAw1J8UH9UpNzx363zaNuLuqRgTVUqKEwMZjzNFrZG4BbrPshjUeT5nyhRotYtmGtMF3rkX8n2",
  "key6": "2rPetZMaQBjEu2iB1w99qjVX77nBVu41PfkeSqKNnpwtd6jhW31RXbnwmfCzr8pSBxJzJVfr5dzeDwf8auRW95iw",
  "key7": "5wyftA9eRgwW9BuEudJ8NHt99eYu4jcuTdTxuzJFiEFNU4EoCgUg6ZWeLJMkSsGWNfnKx1F1uRF9Kps5ZkZ1HLnu",
  "key8": "4w7TEVBWSxZNgf9zm7bTXidGVZ6YkZU4Cx5YyNXm1f4Vq2HxRF9ZkDbP8pJoEr3is1T86Y2rbBkEQczFsoa1SxqZ",
  "key9": "3qy7KPimtLuYzo41uWvjNxWc3JhZiVmmG7e5VtaGLepTHFqLpNPgtotTDomRbkUa7r3FMDVkniSPzmZ4qqt5qQN3",
  "key10": "4xmWFF9GoPN8hpfzrvGzFZ4WbBkME3opRYt8fzHA7uaac1XbkXc4bX2Gqf5ZmpwbwGFwLoG2JofWPj5EsSXBxcaH",
  "key11": "ttKqdCZd2LxMWeQUdXyMg13pPQ9VeKTZmBH52vVwxhtbGkJRz6vxvVmzqqGFJR27twBoLFzzHtcsSg3R7bdvgu5",
  "key12": "54qoE1hhshYtdbXZxVdbQEFZnJxTWfngFNJiHeZpFX734xRm6c1Mpw7rg3YSYixs6QgnXaZwGNeKfZAUsEuxQwv2",
  "key13": "5yNvCCtJ3nt5yr1Spny8N6mpGzow2QZYKnbEae8HuhqwLGdf9pfc7RFiMKm6QvmT7iKA5eQ7CuwcQG3wMNQK64bv",
  "key14": "5qqTsCXzotHXJ6pdFUQh8ZfUkZzKqRjSxeZHgKxhgYf9nYRNx3BZKy6MCCYuV35WGRsV9Yv17EseTvMY5eXPHyzu",
  "key15": "36RTdk7FiBgXPCs5bTy4mjQ42sz4yRp9sRHfYnTpbcEjYbqNe23W2DeD4GWL8tDqLSWVCycKvHGBA6ag8vNzx6CH",
  "key16": "4CfCAyci1wNBDdKkoVAtPTydCPoDU46B52zhMLvM7r1aKwcKaHZoJVtTPcVhSXxAo4gccr88JJhbVa76xEGXTLYF",
  "key17": "3w97M7jHsryCXUygXokgzAXKmAugzqDQSiNTu7MGbVG8KALp3pVVPwVMRbi87Dp2gTUupk9BF4BZyzqpP2N4aZyp",
  "key18": "34XbjmdLM6ordJLFwKipiGx35NGRyngz2cEJJv7DBUjWAjVphyZMdFHBhTSpSUxa8Rr35JMtsyYFcWS1P3JaFjZP",
  "key19": "5XYHb1nwUxytmCBx7iBS11Cn7kEZBbwGUtANmx8qXp4rLxjhuNv8UZHR82yfzUCRSwgy58wZj9DCAwwxc1828RPF",
  "key20": "4dRNrbFawo3TeB4Qma81FNJz7MbAUDGpGrSQGrBN8qfrPFNdPkxdV1REuAjgvbdRhjoCYKvaVSk5HaiCxf44wZCF",
  "key21": "3WjYvWExrHRPoDXhcGvZMUS2hrNFPjgWbzAFm17fyHL6UFw83TUQ5Fd8FubxtH989dZZkRjpR8zNdQFTunJWDf89",
  "key22": "pLpexNPLzFFyZsBEThh9qXy9K4PXeozWQ87zb9JDWLfvEYY3v44uGb7Rhy4uWCskmuVMEgiXd3hWVtEdxx57B6V",
  "key23": "3a6Ex49gAF2VBoCif5akBajN1VSFHEiECTWRXRswZD1nb4Y3Ld8eWyk6Q1wQ7FdHZ553JMkGUjZ3hCNNZxX4gNSp",
  "key24": "NchP9NXX6uLXNkQNqpDwVp9GMFc7zSaAihTzAVbrab78tgcwPbTLTaf86qmFgBBkiyiV8oRzFVE5sqvMm86Xynq",
  "key25": "5PwZ3heCDck78p1ME2zaSPXieK89u16Txe4Ze6gcBJa486Fgp4ySGoAT3Fcp8Y3T45mxbqjEuHQoqVkHyKQRZ5yo",
  "key26": "366BQ57yqWCEUzYo3yfdDjL43QV7jqNg8cHvSVnuYyVBJAMrHufEicNcFGbQaksrHAxq6By7zQ56CAnATUqVAzQj",
  "key27": "5zuQR6uouX1tcHctFAssLN2AD8pmmAuG8eRrNcxHy8HdirhHoSgqvsYGz5Tbq7f6fdwkHqTe6x6AJ56oyqscCK8U",
  "key28": "DAR4VXocarfZBnQW7iKyJVvNRMKvw37xeD3pmH6Qw8cc2aC6NeLiuKnyTMUHRpa1BfJuw1jwWAgBnbS7jNdFenS",
  "key29": "2cfD1X2vyCNmbLzfsm3dGgqSqWXCio6qd65nT4LNS6uAi7gVBD5DHhnWY5WKRG2bfTjPuLF828LJJMxG6kVzGmDW",
  "key30": "s8bucz6Wg86oseFLZcGXb7umt29zizDiikLA1mcsQZsheuXm3pZWQKp1xXbCCwVu9dxtJrWRzxLnP4zdPYNKJGh",
  "key31": "5mQeWveBrfd71UKTvUNYB3myy36fgvVq1Kcqz4cTvU4YsaiKRgS2c4ajTswwwzsoLotQb2iJZLA3Eut21imGpLvn",
  "key32": "4BFXVEw8f1wwVDP3ST4wWBxsH1qWj2LBMFgYNga3tZCZUrmmXTf1psoNiAQyaJjiBxBhspfAz8zpm51zJp8eEk6U",
  "key33": "29AzcU2SCwRts5JxdGfofou4ezGLEap78WQThk1iePvk7RDA1BV1JT3DA6eTswu9yDVcktoctVAMsFT2e7Fp73qA"
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
