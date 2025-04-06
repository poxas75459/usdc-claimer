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
    "26vbZ4K2FcU6UdB32hQJ3hyeT28NQgGc2aydYq9W2muU4Rfns9tSE8EfXkZ6EfMh5LkNNBfPftfgQR9LQ49EjbLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iYABAp7vv1fvkRf8XraPRcqqFtaUsWrM3qePdrhaNg1oQrwKJG96UwTPDJfa4NmNGNeERw3PzSSZeio5pykwiQQ",
  "key1": "2reRKhHkJxAvt82gwcNth88DhDdty8tdpFjrYkCH17HKuh991CXiMaEUgruJY7iZ1y1StSppryoKL7WC9vBm5NZP",
  "key2": "emGovWA7eqhj9o3yGcqnqJxY4jjD7oVvwNqXHkKQHCmcQdgBufMa7h8332Eqad1DRKDYzDccW6i6ettvbeA4fsZ",
  "key3": "3TvMkkfHsPFFhNkRoC4VhoXumvJo7f7vWs2W4heoFn3FHAo2nxwkBvUxRK3cpbbc2N11FSvqPVvPJma4uGk4z7wh",
  "key4": "652uEpyNZxJTeFNDbjMbBiGXHMJG8SZAmotbAE5vRfA48Q1ywSSXUF7DGepE63VwF3Up92ib9EdG22qHHwBpAnFa",
  "key5": "56CD61BBdAyDVSwoLsJqEhD6QnLCZWcNTRXo1caygu84pWbd8t4B4aDZ8oRyUZqmPs3N2rb3vRoAJGQBTXiMeSq9",
  "key6": "3REkkceY1T6fyR4hCBDwsSHPcACyQ1LoxRjDrd3BKZi9rc5qVnRxoTFNbiCpVuG17yasNyhCqysd2HH5AzDjExLx",
  "key7": "5bqe4b19bvVQ1Ane5KjG4YsbPuDJdEdD2on7FVEZQa1dioCfbRBKegaXzH2pZS6mVG8Q5bEuEYj8GvfYX79ytLAE",
  "key8": "4DVHQsmguoVMfPr5htpofrcEDcWKQbvQYZbj8Y5cE8iJZFG96NENu6sEyyN8EM9Pouz7SmcBmG8dgD4BpyuVTt4B",
  "key9": "4AiEkZoeCmqTDv9GhTVhvFtkYNQ8ftaDmDpogY1SMuhUGeQWNy5KyfJg9S2mKvtMH7dfB8jyCiG19FoSYJFxSDGK",
  "key10": "Ge3z6vjSeT8XdvmERCdjD5U6R81h3mAd2z9UZPcskeRBg8zYRdgs96emXcgX1RaogroEdyXHKL5qDBGotaFBswS",
  "key11": "3vyhXps6K5jDLkoEi2hGGPS72sNLLbXXMqCm6fRCBA5F4xohDx2hYxanm7Kt2eR1i5LjeBEsCgwgVancJyKSjLgw",
  "key12": "592ouQE7SarMcYx8d9EncD6AwEiePTNCrkg9UY7F6BREtmUXq6UEaxRKrJENZ5bVcYBeeCidrwjVX5qrZb61n4FH",
  "key13": "2zQBATfnkCWnVVQuG1SPe5diAfC9pRCV9hDKQHaj4JALBX398BwLABB9rGKWJimct6YgAR9j4GgxGRs97xD83aWV",
  "key14": "gJefjW4Ys9QNnfV7eV84CJPmSFRjTj9LcnqiNRbSVyPdsBo96M2R6uUTr8FkspRpia3keQrtNAHf5K32q618sR3",
  "key15": "2H8nSHHbNsR5kez2zV3BkfScLv4hEt1BJAyrpdUBeU3ecTSNGhF1kP6CgmSJU4WjMBVaEaw8RgvpuwRcZhnw1fVS",
  "key16": "4Ns2issWftitU5WzBRd3W5UPngWbqryeCd5mnd3rjgeYFCxop2ahZxPHBoXT2Vgb13b8CtZbJYVbLcea4ZeLAfsj",
  "key17": "bU4gaC1VU4V356Djav1Gy2TryK8H8D9D58XWLPkxwnscpyGmE1FEpS8kBTLeAYy5WAbsu3HnJdH6zfJRfGy9zJ6",
  "key18": "297NdnN2sFmtRNDZtUErqxNtgTfh8iaHFuDPR2h8ya9kJFYxh2msegd7sxMKszrqcUf8U9s2wPYncCTxdirkwiUx",
  "key19": "2mmCNvXVesKovkB1yYo5uH3KdgvtU88sCtuP3xsmQ85ptqfVEotnXMnnfbSSAWPYHW9ZHqoP9ud44StPbk8hYryQ",
  "key20": "gHEdsqFNfniQd29VjCZZARg3UhnHSUnKZD1hVRxKFAxrgM5b7qxgiEJ7SEwEpRtyqdDnGyc662ZmYAGyi1P5a3H",
  "key21": "3itnqaLYU7TtYY4cocsuAHgdNYjufbbUeU884zNyvJSJ4FQCvprA54MovvgwCksJT7qVxjCWd5aHWw8ovEjx3tMo",
  "key22": "tiy4ndTYRTejMGs98E6KezTexAHCGno6G3URLYhqawZ1k56157eFHt56c4525ctc6XzdxdAfBn1sb9i1gv9nQBx",
  "key23": "4SeU2UN4Q454bXy9BEYs3kqyGg5NYbqgCZobZtAuZdoLQVW4mLh39F2KzWydis13MCKe7MEC7hmu4UmYLHvemGJf",
  "key24": "pboA8YXdny6uuqtRSmRczPbcjFyT4VxYeNPTLE8yCMSYQDYQwccWqSmixY9wW9ZowPEZgNEJkJiENY3Tn7JCVZw"
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
