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
    "msRwX2SYqX1zd3aQMt77J5ecW6TbJZ7nU7oYqtfCzFnhxoquNMhAixsmCrLo3npT7ryDwkpfKWYvZNi84xMcpqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33FGjHoesDkqNMd6USpL5HtM8d4TjvvTtCkUqLfz3cb3vFBHGyPfP2wisGcXyUi7iUrWh9JJhQFuTbC6p16YQVik",
  "key1": "4j9cyRKn8BvESPscJa8kB6obKQBDa7eK8apZhdKNsdVegSGJDVR69LcKt2Lx4FsrWuexp7sEkb5B8VBH5Zm8CTPx",
  "key2": "35HZUHU1vhj1NSudqvjfZ6uQhHfL6ZCuoEmB2CiodjqgbTAn8MofPQSKnCfPkySBzgcHtCKQsibPawXxkb63iunW",
  "key3": "2f4PuWmAWAXsNbgTpYS5nAJPutA7BHViU2UaosFPHqEZjtTJ9hS69koHMSMJBuPTjJnCMVPqriVX7D4BXcKVPPMe",
  "key4": "5ZpGxmZXFrpvbVS1tHYPu7RtSqvnWGSXWiPHo6Ty1LrkL7vDGNCVnju8ZYfKuJmxFwmMyCNNcbzY4kYTJMPMwVRA",
  "key5": "msFPUkBWk4NmDnCKGFru1VAEhpFERQsdbwVeSTMQCv8zoWWsAWaNsKGA72xXGPFsz4tdvmChDb3Xhysj6z3PYYa",
  "key6": "5njJgsCcAkQS39yJ29imqFTEraLGQoWmMoFHrGrNzTPaQzdFzjbBPsAWwyzTKwqyXrgjYa84mJg2jnbBTWa5yKsW",
  "key7": "61VeD1wHtRB2c12SvN3bDxLnSmZFZrxTas49iktAYRcgo9edu36XTUdANyFsr6vnKAoTmoFQSJg5KfgPDeM6BN7F",
  "key8": "4F362H2u2Vh3xxbLNQDguvRE2j442Q1sSdZMAAbaRb3qENyppqcX7sY8BeuSKZL48qB8SYvakySaEwNvvR7UiJew",
  "key9": "12956TzQW4T2Mo9Hgin9QSw4cHWiAoA35UwG723sfY6XsteexgrNkJkahb3FjvdLguKfdMbvuGAdvQ7HHCF2gogs",
  "key10": "3Vruhf9ir8NNm3Cgo971tEQunjy4RT8yAbpmV5Ynt2GBcVJguFo5eGyzaQU5rmxxmA9r6BWCzbNM4eXF2mR9Daku",
  "key11": "2yPbp41sjZ7pVMcbkxJ9Ces3ReyFUDmneKvU11TuixJDzTZE2oy5Bas5wD8CQiZYURNtCEAoJSFK5zQrwB3eEjGi",
  "key12": "3zmqSJdEbybKSk2tBtBZf63nFT1BL4QrFuafJefSheNFvDwnV5HYsjo5T8hQjXm4V9SKjv8o4oigNkaVTnkSkXR1",
  "key13": "5yAJ1dgwT17fgWSiPAECBiZYL1UEtjj99BJsp3EMfbhixKCYZVtDrokw9Eib7St7vpShfxpuKtPC1GbPVKQ3Vh1A",
  "key14": "hSc17iwBfYPMCVbBdTCXbonFtoyciS5AVLWe7Ee9yrxVM8D6xcoymzwa9wt368pfogs1PEyD6eDTukRGE8DQjp4",
  "key15": "4fFZtpzCP4DqhAP3zfP9EA2ftbmWGjJu94XPvPDpUB9Db6iC5j6g5m2VChqLLJ9pWM4wU3tpbN4WZsSmYBsZfF5N",
  "key16": "2fJ3MmL1EDeirXCj5PLwKFrfMn4WH95pA1sZtfwALmqSnaEEZ9jicjxNdWpmjSPpJPc5QmSfPaJuCJfKusjMuMEF",
  "key17": "3e9ML5Wm7k7qjtSrrmxuzsLkFkKXnNiQ3hCUYjqZiYKJUAwAKUJ9o7hCwHGtUXJ9TJnW6ubJvwJBaZHMsXqJr7RN",
  "key18": "2epX4iMkW9niSss3ePsQhCAiVcyZ6pTDPExbVszYgyDHGzbfR8BQLmdfhMftJrJQFJCmqwP9heY2DYRR1wKnCF8Z",
  "key19": "3pUqpht4tBzGnUDZnwLwDQvKQbKxtQxXSHJ72viEoby73jrY3BuHAMTBxoz4JZTiWFC77DtbSgcMh3SH9rhA12AF",
  "key20": "2LfWaDYeTYxurhxo34jj75Fg2b8davUBwR5qVSrGeNRZnD9CgMBvKn4nxnad6ctG41MskpMfuSaUiZ73MprPkaM5",
  "key21": "3SnNuvAiTZ9R4DQyesTArd9ohDBMQyjX8SemKMbTpF1HLCVc3TXkde4KP3yvWskwRQq9WdEfsA7CbAvtbadGV8js",
  "key22": "3mFcCfUpwqPVtx7rBZHHjo2WUsWjrDUEtPge1vWnJdL8KGN3KczVkogB6Jpq9CGpeZwc7kxEDBUVYYAJwMuVQrjk",
  "key23": "5W1dh1unK58xtDD9Giy4mu4mngPHXhDRisSnPKyNVJGV38xjjRYLp3mhVKMn5kVZ1s8kDqmZAENTvWJeaZku1gQS",
  "key24": "2mXcfPQTKq9GAgqf2n3DLuJkFmAGQhgbSBUNrQ5zUr2663ngHe445iXhcoqdAq9ckzp9ipy6CmE8dopTxpqYfzJi",
  "key25": "UoRTidApa2psUYMPCYcjYdRDeEtQfyVgxH821kg59CqPiPmdnzsKkoZP41ZXSGqAfzDYSVsctqoKpSBUL3AvwNy",
  "key26": "5HfPy3BsFxiH9TAzRc5KQLzoNEX5xp2uUNLg8R9h5ezAzKKPjFNmGfxJt2vSmPbb8AbMKPXgmUHRpkzc4pc2Kfpd",
  "key27": "4UHzXSvDTosLwBknhV8bgK7eajF5snuQYMSbFcdNJKLfp2aLsFM8W724abDim5oPuv4ajgb3Kry4U8Zpeqs4u3n1",
  "key28": "3uVPKGiGYCx2YnxPu6SDAZUGStEgaSfY8zXszkZVrw9wBjeLTLD17qHSM97nrCRfuYEiTJp6TwF8ertXnkiefsBg",
  "key29": "4EaY4a1qiuhxV7cSnxveVFoU7M5M8oDtmxS73hvRM1PpJSahhvZCcDTDKNTd7646EA7Vs9jtCJL9wrWYeLhTe8gb",
  "key30": "3EH6qbMLdZPAd7hTjk13S5qHBBuRLHi1GzSZeEfgXw1PVSS2VV4N8E166yz2URrNFHXJQZ2o3jnQ9JZ6qi6WzgqJ",
  "key31": "4HwgtJZkXEipHKtNEUzhsd9PXKNhxQrfTi77SgHD6aozsJ39foPfCuXezGsW2RPChfx3hLAu4oRmzRnuhW4NHJ7m",
  "key32": "o1rTu2cVUch9RUkxvaVBBnNG353coiVdC2KCNzkwZr63KowAQn6KzWQ33cdYeAYFBPQP14MaQitk8TKHu3yhMvA",
  "key33": "5QTBH7DtcTJTT8jpDAu5McjwMny3MMoqoZvjFUQqay4i3b9qEVgWWQKnCoBdpWrYPp7gPkuh6HpunfP366XMCUNk",
  "key34": "4dBNX122nM8WLhHWoiPWmLBnBYGdEfmSQp6eoUPaW32LuVHNmTAZW1KzZBLGJgnpDDoJ8rxrTkRcSw8aju2Evysh",
  "key35": "nNGw3PBV8YA2qmpVMhBSDdubpc7xk2XAHHP5K2ZsQCWffM6UaafxmZkG4x24jXbumZjgVYdug7FXC53AchfBAiz",
  "key36": "4WKcrDB81GdrCKoPeMzmx3GeYjNQHwe2SMXBsnQFRt462K7zV3QMuzHa9jZiothhJbzZ67cwgc2gcaXQEkofALed",
  "key37": "25oBuXZGoDYP6AHenQoF4nDGSuUVJSuDXV4AjAGdN8aHcHmqd8j1p7FAc7wiRjTu3h1KMqhUUEenLKSnySKLixuG",
  "key38": "5Q3z1WL4yWNY8Y1hD79dGit5th9QX68suSgacsAiuYDwi6vTbubA7oc9SmtkYJG6yuUzGqpZpgPv8TbMMRHKqMMa",
  "key39": "2kgNveF7ShunqkgP2xgsX82J4XhpygNeKtFttL7ja43jF2XiLP3XXJCXJKEQCyfc1LPgheVoGkxs4RyHFs75rFXe",
  "key40": "3h7ZmgJuinoaDhe5obr7sX51xR9UfK6Xb7aGa5NK6hUTTEG8qEDbLkphhVgBkn5zeFzBJsfRU3hSXe4QXXbgd5eu",
  "key41": "5JHQyXuA97CFGSQmzquz3kGrPMNAoSrRmdroBtWmTp2PHB9sHeXjAwsQRi1Lt3VGk3j5nx9MxdtWDroPrffDoPXd",
  "key42": "478QJzdpdrNvRQXSCPcrj9gAVGyNU97YGfkGAW9dtU1jbUiZ6YF5HuJuUHdenJ1aKXW9JMvd4WH4KfE6zW52a41h",
  "key43": "2p2zAjoWX9MAGwZZz9W5yUZn63Dr13QU77EWV4MCJiStFMKmaDWQPWr6kTK9vCr3eF4fSJM6AMhkuxkhPAheWk2D"
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
