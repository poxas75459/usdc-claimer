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
    "5CBmsqJnTk99HF4VCCdCyKvvyKAQNrmShKPMU3R4S8fmtZNF7tnf6kNHZXN7hBBgZP4Q2ZDc1416qcspGbMZPvwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ha2bgCr3yJqBszncRDU12g7gUErr5qSCXp7cNLoFLyZq2fHwFVvGndgxV2MrF1shmmndmt7rzzw7jXkXTwBMFQK",
  "key1": "4jWnSrSTvthSZ2Dm4mfG4gVdahjmiZBerffTCVxCGwrn2dH39Z1BynhUqKFrsXHspPj3u61ZfVFUjQ56Gk7TQzrB",
  "key2": "2aXfZyE1xKuWzVrEFFJpgvRSBsehL9FJaDu249dEs5iLtdpwfcEvFUTXSAWjFTSimtXL9P6QuY2W9iQpYW88Y9h3",
  "key3": "2kqt7Zh8xdKz1M7iD5iGsPUwkVNjS6xG34xS6Wr2tJ6z2mUNtBjHLXvc2BA995L4DsKhXd6rdDGvnL4jMuYtcq2Z",
  "key4": "4uNm2NXMyvoPUhC7QBLHSb4ZCXH397Sx2Gja9Sn5nJykKhPFFRH9PLVnSPxsbEV8EYY3wRwZWGunQgZoeZ7x8ZET",
  "key5": "TigLFqCqsQDYwtD4YvjrnWDco5Pn8V4pB2GAWthKNDAsWGDExXav5s1JQyuWumZwaAHKwDEDEhmUeZtKbu9rq5r",
  "key6": "2kKcBXHgH4vt8SBoujVKwJPLkwCbxqdyreYWzyTUvqZTeeac1sxR86XKkZKtdrch5hjWGugyGXE7V8fmPAe1CVNH",
  "key7": "2MtkX6HUjmfaHVajZHx1cSCjfagbi8bi5u1o8EeG3PjfjyZEedPqJBAkjRr4cPrsFtPDcuDUg9uMJFXvGnj4wzas",
  "key8": "q2CwfiFePBwLECfcQmG5rFndQgnBUkmvkjfkg6xprQa6CiWHGMVMkzQBHngppzV9A9WjCANEA8JQgCrnRN1mvab",
  "key9": "T53GAFGxmaYsqCQVtkKtRZrusptZJLBrkAV5zJs1y8zZUami4hFKD4F2epqpN2hw8RMnJQ36GtdWguKGchNLiSK",
  "key10": "4dCidnqnjQW9RYFDF6wHDmGi9t4CGZYMCKc53Eio4gimAjEbk3YUyUG1t2cT8hoGXjnBSGQwfiUvV4q9m22dRgWu",
  "key11": "56xaKYy9sE6Js5YcYmNmm85eL1drQrZfeFT77KMdXUohPQir4vYgRc3caBZAXBk5rBNTdn8rrcMmmmecGo2kNJwG",
  "key12": "2JZQCHZj1PMXhrYQoGk6NUqgwBoXao4hX59UujCUx64E4xYdpwixvHcsN1KQ3ReQHUyZNtDnV8bt9JgfAz1ccaT8",
  "key13": "21hpqgbDdvMdTUVtKsMQ25Qnkt8oBN4pZbAC3Xoha3mDDo6SaoxKr4fakP4SUQXTK2NzrU5a1eTzgPCUkTwDi2aU",
  "key14": "4DT8cGxxHJXT1mdsq1fiW5ZEqPJ77DFYey2TVy7XZ7ZqPvmikMYmQr6Msov5zTyKqjmKaYUPU45Pb2vTGPuFo1tf",
  "key15": "54RJP5Rg16q2WS78pabT2u7iMxszAMjU4upUjs8Hn7NTZHrbySW3bDPzDcvg5Lgv7wCc12msFqef6TbXLihvSaAz",
  "key16": "4pkmyCbuPTr1Q4Dcmozj8hW2Am5wzS5udrz7Vumcfsm23WeJeNmGPp4fP7z4nJDSoqG894K9QehamxGFa638iVma",
  "key17": "4LfRKBBjLeownyDTZWWeQhf9QtP4eJAdNhVLkHoNobdx3yHp9vGrHywDdzZr8g23kHzxTgYJvLE2HfocJCArQJvh",
  "key18": "dYHoQ7cu1VURSHWzPHuhm5dX7Kj3GK8hN8JbKh8RsVeJBhyQuKWqEN7quRspKetAQRpSuKVVMXNcCPLCgrqgjjm",
  "key19": "F2yQx2CQdiwYcLrTYz8Nb2NRVSADZpvpiRdBpHEvQGHJaMRqR5zbKTGy4C9Hnckb13r7Rt2TnqUURrAvkMzst87",
  "key20": "3eKYrMARar5xtr8XjnMxZWGDVUuBY6MuY4Ws6bK1gVDjKWoZAGhX9DGoK2n8xfVzvBJvyKXkHU7cEcReSGjAQDRN",
  "key21": "gyvM6FjVTkZAhauJBnqTjoeKmCkMkmVdP9Xe32Lb6ZF9yPMfYT8AtD2Ud8hs686gitvT99dTPeTofrstr8pJD7B",
  "key22": "2oq6zs4eVArUhiiewLdNtHbUWTZmizru7BA5qjU8HiEWPfWArYpXbFdtpyyrAKAaVLzPLQBv6DJT1bmbDbAnGsBS",
  "key23": "4Df5H8B5BSHqvVjaFrWNYzSepp1zg9ouWZsUDoACEEq98cTLbaYibYpjKTcktH9kxRSNq4C1xiCs7M4SVwZcbPKj",
  "key24": "4sZZf29D3diQr2hQVErc3gJL1X5JnrMSSpTSbL3Zpki6c72GXJb25JXYV2hkfnQpms1hWrFiHptCcmmfPZvvtyDA",
  "key25": "5G6UeoW8YLn1qstGKMX3W7kXX8o2Z8aA9SWDQ2UiVCmshRYmktnMzdAwG8dovFna4FfMfWSTH9fSGBU8qJ2vjX3W",
  "key26": "39TiL5Yq5pwny2RoBdi63GngNBrK2D2vbFranchEyWPR4QTGWupxHGT9qxjJPQHQC7t7z1hrmCcYPHLPB3r5PQQR",
  "key27": "549u4iUpkDVmGgVxEHG8V3Bp3K2QV7xk8QngzsHE91pqJQQrKSVNmsYfou9x9acRfonKFuvo2awHwpCvUqcyEw6N",
  "key28": "3XohSZjYAHmh7GRzXTnrmoVqY8BxRoFrvNzUtxEPjsJXiYd33YUaWXm4f2fD4ARMCxAPssXUGW7LfVD62FY5wjdR",
  "key29": "2sjanqrS1UP8xAAdPnrVkkyhPiJUJCGDtNsHUxVHaBsfsKixUp1EMBUoZv2nydy67WFDXvW1Pr7FjzNUQTNNWqAY",
  "key30": "3G4yjDzQ4vQxrcr2BUsLqk6TPVG3josbLH3rCiMTMKjRtTqmGLUm3tbk6bGnh6jDXTMHNk4iGYLfUaK8WFspwvUT",
  "key31": "3s25hYcjeSaLQYeC5k3j54HzcJEQQJuAgds5wrwonGF3mVujiHTznb28hesd92abBz45cvHSZqiSCjxT5YwmJLMq",
  "key32": "JN6cAjQgYK6LEF4zaDXQHJvoPENHKehnkYPNoe9ikmNALKzjwGW5Tf56LvwupQYCSm2ynmSQJ6JjqW1NGDNYvsQ",
  "key33": "ZiSCsBNLXLf4QDMyF2i5Xzk29qHibwz9DP56y1e4u63z6GugTqZ5iK75dwco8Foq5QBhPToUPTEVMtD2trb1kvP",
  "key34": "22WPbJhdXamCRjympL2J3LX5kpa5RmFVAxwgZhWNKEcKu8AsTTXiToxCw3BJaytKbxSzPkaQFSWuR8GCfrxzoZ8x",
  "key35": "3SE6PSv64h294vVQC1neY2rK5KdPoWyhMw9YbZ3zumNq6959DWjprrLX7gq5cuuxjhq1Tb1JtufC5SxfSk9SCdnT",
  "key36": "2MUQSUiyV5B2hmTNgJcdAzC2mTREyH5c3czHgoXgKPWBz8fiNg4xCXzXptXupwmE9qFGkxiZCvDGaLPytcdsbeP7",
  "key37": "4uCfdcYYjjELGeoJh4KnYK6PmKhVSfWqeW9sUYFoR9oYPhKC7koUeWUW4FGMxXQ1MicK3ySD1i5SYSe2nWjMUGw8",
  "key38": "henTuWmGXewAi6qCkrYVXkynXdp8rKChnTMGsK15Vs8pTdurmGZPHT7FEL5AtcwTAKn7mnjgEWJzPLGYFvB36Wx",
  "key39": "zCqvmxiaqkGKCUeXJ4zPaCGyKSgEZiCJPoP6mXjnyxsarMduceRvUAC6K8g7AyV3QNCtepDq3pE7UQye71pwQ7H",
  "key40": "5rixFJcFAt5kPgLP7Lq5X68JTV3zYsATCwGKZhxVW3dSbKyCNntKXbZC3CDUZ1yXEuD6x5kw7GjNBvcZzzQ1hWb7",
  "key41": "3J4iiSDbVttyHGhso5DS1oA7xPsrNT6UkQ7o9Rk8ooJ1Z5W5P2zngxpdUcZKw4PCPMMdDUTr6aZ2mYetuRTUTmhq",
  "key42": "4ySA5tAw8ExiQNfjBqKWEt7TKaNqbEjh6B4hc9NWzin6msDQyHxwFtVqBjMHWuGbXuVx3BjcEpeAVmupKE1m3aHp",
  "key43": "kceMofpGtGbyt7HbaiMRmb8ffj4HJ18j93hyHiQB6xDnUoarWQRbtXzfZ27naLDQqGKTk6a3KrFeR2mVkHi7Riv",
  "key44": "5ocJV2j2Coc4nNjpBiG75gyiTou8NH6AW38P3pJfyCbsqAFNdJqVDzbAqJ7PAa3itriYVR2yhKQBvE1DKqmanucA"
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
