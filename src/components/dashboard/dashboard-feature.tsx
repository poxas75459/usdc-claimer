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
    "63RcPeEJPv44QJie3yzc91SJHSuF9igcxyZWGmZTdYHBGmsizYyu1bBjAwuEJ1igP6DeR9fvUumLRmRGS2MNRt9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ngvHg2USQunzofvozrb593yv4xjbfsxkkVxuhkuWCABhTcJWm1aK87xTaQzFsnEuHJH98ngj9ExAiT25AD2oaDY",
  "key1": "5mbnpfqpVPgLfBDaSkYLo1godRPbVSeSFFdocmK38ABbSC5hPQ8Q7vSzP5cM6p3dbAzvAEjS3vDdMwtJj5Ks5F3D",
  "key2": "2R4e8NMCkqzeZqSvU6nHrtrNycvcwVgeqVrboi7SBWHaPkFKjgpyJyZfbpM12kWRy6P8ZkPqAfAHxyogT5mYPZH2",
  "key3": "2ix1EyFJQAcKEu53Hhb5A9WdPk7Nz9hmfypnFGiiGFSUDkrcBw1PNbznGohfwQf7CAikNGj4nuSWCELJZgt9naZ4",
  "key4": "SYmhFp3PmdhZvrQv9cCrpX1BFB8EiXnR6v1GLENzdDdFxwHFi86QRuyQjwWnMzbEqQyNMq3tnSUm3ANJCxdewA8",
  "key5": "DRa5ic98UKeG34gWNFxFu1cpXVeAGUdARrtTfBHRr1C2burh9PYGvvsdTfU5sP7K6hpnc44Fetj2pnU2hVcQRKd",
  "key6": "22gC3uqe3NuLewWf92cEKj4S3jN5hMFMgJ4QweYAadbRHuSQ2KBFNqZQwxkGro91hza4qKHEM6dHkWZgDhKWrpY5",
  "key7": "5G9zhCyXcSNpTW8o3CGcMkoyzDUXwmfTsgTrCjkpDadby2d5Q9jRYLCVSNq9BvVxfjYziMsmji8fpKsRErKnaJhs",
  "key8": "4afkMnjwQFB1Qyyyw2ejzx93d669YCdDTLGY4GLpwojJ2ynfFB96nDZPuiPSvUcuaQgpHdusf9dzbomnVnMKpJV8",
  "key9": "3168PB3156cofhrF53H2sWWZdDqv3r7eWaH8qrDr5HUjRV7ywnTHGpHQBDk29pEViCL7MdouuNMHfdikRAMyiUdd",
  "key10": "5dVoYPXLXoxXNz8AA1cUULVaQQmjFrKcSx84KXwXyZpNwi3Vrq6judpA2S9sPcqr4c6xBsT4KDeNCsmZJxfhfDQX",
  "key11": "5xwECK9NmmGRv5ogE6ArCD7XiMyNMHpv3Ws2zkcuRpH4xZjb6imkU1RKGiaKCPe3dzvD6jJYWAQqHs7GimvVhTXs",
  "key12": "2aRPkgneVhcY5dDyy2PWzXMBMbBe4MhJzAcT8rWeHWzfpffk7LUVAPZzeSaiX8wFwprQshUawXjpytKf2YUgehRn",
  "key13": "2kmDGaZG48XoMx7n949cGsm2phJubLRTGYbgiX5hakBDuYVoeXS915oapTEVvpXDg7M8coh2sec3Zbh2RyZDTk9T",
  "key14": "5uyoDhnMoUi4EExUALTnMyuVr1bkWg5tcDvZLkCgVS8xKRyL2WYNmpZXpz6evVdbmYaTZe69VcuCXwNWvZkGFdR1",
  "key15": "3omkyd3bHMW1b6yMMerZjxA91bNQRTQCeVVJzM4RXoNYz579obUHNtUzBRDknKRb1E6giAiyHkRSoyFNHXo6JnCm",
  "key16": "677dW2dfUgZic5Rpiaq18GnCG81B2QfNxXm1ZJcpgBzBywdqQEJjzTk2oUfwnkLpJRcZrqmo1BL8pNuoZ1kADSdw",
  "key17": "34VDyUjbh4ULftMjYoeLu28gNXogiYuGCSdTmCnnRS38z3i6WwDoJ1sBzU2ZajNhb9gdHdEHpib8jGGsdUYqHR7k",
  "key18": "37HWZjE7isTjLGgoAL6cXagouysUjnq9kyCbioJVrdWd69xetor4JrxewFjiKVLzqDXxMcfACFoRz5uyh5aGFNJS",
  "key19": "2e8p9YMyzpsJ9yyUh4zoAGznTAUPMftz8Sk6GNDEumRQJHZ4avtsQngeurEt2huUfiXjRjTheSx8MaiL8fKH9KM9",
  "key20": "vTZv6j7DvSLkxYt2P45WGWfhMn9tegyuNNyf9voNHaahHiVuXYPYKBLtCxnBZpaggFNDXC6qwJyYTezkVeh1Kp9",
  "key21": "QeW4h1z3ERhzKqN15iHs98vtNM1Qg7VSr81LbnKYAJxB8qnQnwFjCSWUN418wEubFf9JPLjofq2YCmXMqZwn84R",
  "key22": "5XizaH4htvhunKSKPY2XcBLihwDpSnSgkWksHtZ5SqeeJ5E9h1iPFZFCLW78fNqrL2JEeKLFZxrnMyWPj1ujbDxa",
  "key23": "34oxt2Lws35DVWR1wNo8m78QpxkiP1XJPfatq8kXDoWz2n4wzdfER9knRA2cpmyyHKpS5ZsgZnDACSzdYukKTZZ6",
  "key24": "38hrvEU3VAtdqpC5fhqeUEtPaVZ1FaSu1tR7c57uAx51jqBemy8vmoeRqtNqozykSyh3xVtXA4p2HTS4Ug6xDETF",
  "key25": "2QjVs4vr9qXFVoZzeHBNKcurGAH8YjLkS2bdvafEYzL9kFmwSMkrrHV7UEjQD8aDuTx5WDy86c7HZFzK6zJDJypk",
  "key26": "4U9NPkQ6t7tYTqgyejtoFX5v51FvgUsEkzszbk9eYz9v13YjvshPfwyFvAjEmT9f5PWgsVSxUa2ChA8eWmiGd7gp",
  "key27": "5SWS47fbmFYknBDg4HYALCPCNbSbq8rFre1JG4UR6g4GYJiudUBtH2KVgzVpcrVfFrWjkEHvgR4VjCL3BwyeRb7Z",
  "key28": "Pf4nbzPGPf5kiP3jcym1he1CcKweYw3WX39BNeYyyC6LMCPYZVM85uzEpepLtwLAQsbnHt3Dm41qQgkMadDEkVn",
  "key29": "2oW7tJ6FB14mY5uy6z8aciTy6Q7Ww1mquo1jWDp8FLE12Cq3rwPDvQzZCt2hiAZEiCAtYFrdAMRYeZMqa5dqUwvP",
  "key30": "3wWoRCqHygWsxCcYim9arzYx22tHVt46P8xHLRnLzLPkRgUHfiEf2c5HKqjFBpGzfJpdSMgiu8XzGZ6oKJeknHjj",
  "key31": "7Qpdnovimj1NgLQBQsVPrzkWKpVZYrH1Nvs8RYUfCp552jEepAG4ndCnpweWcte3bzs1JSFxbi8kpmEp77Je1Xi",
  "key32": "2KLx4AAvEpRVQX2HMjP8rZPqAC6eQNUe4rmSkrdaMs3nqH4j2KAcJJ9XYBzeULecV36cwfMNcsnf7YiZPH9mwxkA",
  "key33": "5i25CckHPriRmKFJizRy68LFCwQFN2wPM5VhmuhM1jCYmXTfGuekqiR98Ci8BWxfbSr5sYmMVr3nd7g8TBx7P1xZ"
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
