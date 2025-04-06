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
    "4twtjvRRK21PyvKxRKkgDFXbAXbnCsemU8e3oye7a3DioZhAkFAZMMJqf1YiCD2x1jEUMHRZoxLsHCQqAgCi7nee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LzpVsznaYG6ik7vH955Lr4LiWh1vqLVbMXwvBJ8iC8ZSR9QV2PUniStZVHJohnpVjHWYESQka1fb8JwQGfFeyZ8",
  "key1": "3av7ELtmQQM54hbSZruZBXaXRKuybHzEDb1KhoWSEW6h74CA8ih36Gj8qzg4uibtonUA3qANkFTqdQigQKEz2EAV",
  "key2": "423qR1rmWnx2zvpFCZW8DfutsqmVkfE6eZf6dHE8dJXRFeju6X6oQypcG3i34fHDnqmuntFovg3MFEiUmNdMTGQw",
  "key3": "T7PwcJt7q2uYwsuwpyyWckMWu6n77oqjAP35pkcbsLn6JcEJjL3nLuTxYpHf71wGYH2N2C4emL1Nz3Em4f4RcxE",
  "key4": "2hAh47V6tqDWkZcXt29CbmauDSuXRwQbgnyBoCzbZ9CUbJeLcPrxhRcvJffGHK8pdMk9w6LWmk63jPXajS6m7tk8",
  "key5": "nRFVZcrX8kiD8nAJ9wXWnF2DxuKMMjecZAPAmeC9b3dJpiNUnZqmggiaueFswtLNTiiP1PXpJw9AhUn4wHuRh7x",
  "key6": "3MJ5eSS6GmefpheY3mkNqACZJ8sNcVPty6vvEwyeSALdfAtRtkB4Q3MgR4n1TQehLU6NCjfWn67Hb7r5HY1jqSdy",
  "key7": "2a9dPFBf9Y75aD3hxPZvaEx6Q1FjBrZhnEjCjE8oNtY6riVv4C35gm8WS92NALNmFMS5g5DnBZURjRyLM2MznyME",
  "key8": "3xWcNZQ8Kqg9TqWUNRsMwYzeM8ciSmWBEfJxLSJibdw8Xn4TooMzN8pU496Qti8e3FncRVtRFHLm6Qb6QH3Wihin",
  "key9": "2eeDWhwA8cehhJwS64QSvHPuYczsu6qfHMAq2SoRmfCpRnp5BvU37LZrZy8KbHSt7JV1htgb9nNtDJYXEdDoire1",
  "key10": "sbjeWVV2XZDgZvXk7L3wkBRoLhbA1KLkDirXzPy7HP3JFxrJ8SwLzwV7txiaQT1NrVRj6ckmLAdHx4h9XFxWf1R",
  "key11": "udFi6ovwzTFhULtpq3K6jzDQziAnHtWM5zYCLwXVJz43Ya51bnYdFchuCmKkxWqcAGwGvZfk4UAEVFpftotYW7C",
  "key12": "5LTv3Q8qvaovnDF2xgk2crECgijoUr7XfDWSACNZhFCqtbDwGnXU1udB7mY2q5SchangQhQcMKjQgZQ4sGi42Geu",
  "key13": "27PjiaPRRabzky1gPrQwqWsjWqa7unMtHmAn2viKvoXJM9hjk6vNdjPB9JMyvMbhjTgn8z8ogVbestqhrBxXbPYp",
  "key14": "2Rc2aP4ZbAHGJDzAsVsV1dgJxWEv4od4HqmLsxLr765ghfoRKqiLk6AP6F7WUvG4reVS45EDg8hAKALda7i9JMwi",
  "key15": "9rifYpyBLU9cnwWNKvk8j3LcuNWXBWEJu4rjVAfDiwRa42v8x6WUtmEwrSM6C1Qik2tMTDnWupPM7Ns2nGpEHyE",
  "key16": "38LUgrQH69u74AXxp7zDtBLNbPkZEP62k8uZmzhr62LKmEG6hSzdMsoUgtaqHfCxNejtDdC1QiFpkTubenn42asT",
  "key17": "hHkHGqrXsiu8BeGjkVPScsnwVSkqztSE5SNRCrv9PMv4rUmF811DFkZMcLPHJyjCEaytDecwuH1HkXeA5TAwreT",
  "key18": "4wSuUuNvC1pJjPYP5oenz91MfKppiy5yMVLbho1EcwJCJLpP2BLhEXHzXxbW7mzRehYZe9KCxcGR66qKn4LwWuy4",
  "key19": "4oEgtQywLuqgbtULu7HauVbdTxfpo7i7hegrjHjx8Xn9cGBZC5LQTiKnavdGPW5CZYvYoTx3A5Jwceb6rTP7QUWv",
  "key20": "4UevbkmvyE5cnV8P6cGfjKivNscyPsHmuAzs1VDAmvT7PU6rGoHjemxce1CuuVrYQsNEtjuA5bmD6r7yFTUvUv32",
  "key21": "5V7nCkzYdNg4CCbhag2WS11XAWiuRTqjk8sgRVEJgqK9xzTTYnCh25ne25LgR7Qik6ozfwo9qgQ71uutSJPvxE6E",
  "key22": "2H9v58oQqZMUSHD3mydM4y7q1uaQbnL1QjnSQdzccSgmPNDKEPaCLwychjk6hY9zdZ64gtQ852Xu6831gnym6xuS",
  "key23": "35NUAzvGkp5LySZTSdMHJmn8QSVLfV4SRuXPUpumdbv5HHCtvufC51Gu33Xo4uT2uXDTfrK6MCHEvhoBLPsc9dyT",
  "key24": "3Wk9wE2hqTw2biWSQ9w1tBGMn8iENSbxJnFr8e4cLe5c3fpZkXsPEQUP2N7MeWvTXDnEa42SEZvZ6zDPmrtqH7CF",
  "key25": "m4dR7Qh4g94MAjMecEmSzpknAQCbxJMGdngxTsSTYR6wmGzotgsfsT5j6R8mWrVskyMG14obFJEgM9LPXUrraxd",
  "key26": "b6FbYjNFzAgPg747Xhme7KdvTcFp9cAC3khGhLexgKXXSe8tmxTcHEtKER3odZhRdt8641j3d4BxazBJrPCEnig",
  "key27": "5iU14HXjA49Ut7TQs8yX4L62Q7fbsCgYpBZ4BhRKzEwZHBVb9FypJcJfdzxQhbJAco2P4HPScxc32Sknojw7UUag",
  "key28": "tffWdSpa9s5vShqEE5o9D2BDEZmnEMbbvqbLgHMnhPcrCHFUmcBowwzMSnTUXXEiVGAV5r7qDQELAHJjxE6qYzx",
  "key29": "v6MVk9yLQzLWSqYdjaHxT9Dgd6RiKYiTmgtRbtynEre9mFXvcn2yx2QxFbw2DDNGq7au3D15i15F78KkSWCANy1",
  "key30": "5xf5aRCVbHDHwP9xQq1x7FDNwx4bCkqPDi6B8ojWZD1TAb3wQohHJyTWGFEMvZqZgT8mWXzTU8bRZ1KZNgTmnHfA",
  "key31": "GuuHM2ms9MH5BN5FLWSAUPkTYkwhQ2bvbw6pmz1WwYh4Hf7hcmHFz6hWf8bEcZ9dz8Vrh4iw4x8xgAv6D89SZyz",
  "key32": "2tNXbEwVkx15T38Vmj4QT1w95HAHAAFsPHccMZJXg2PxZi7h2MvJGFxp6ZHD5CffSgUnu9nMzWWXmm9pzjTDVF7F",
  "key33": "2uyEVLNu1cf5EcCW3RKoWTcirYpEQyW9usqPp84dWg5n6Gm7SPrXPe25wnVWqXznY7pPtXrMxmh7f9KjJg7jYXUy",
  "key34": "5JBjLMTWrPaXE8WdH5yEUwcdUKkxgbfVWRkCaUQbtGz4L9abhjKeXG8oy4Sw3xrz196wiYdi2mGRzU2bkUGnvzuB",
  "key35": "3xQfyaKF5uVZVSxshx1LPNs4FUF6p7AEbXJdYhUHsz9sFtUsQFPJVLFV4om2WBe8knRSj8gP26Ez1tbvyMYfUT7z",
  "key36": "4ztpFWKebs253KWQwYyxkTmNiSeq7F1JLhpe6gE3Esfo9933oqcATzYZ8vQFSea8TzsTtxVPzcuKXScZVDRZxdFU",
  "key37": "KEvWaicLKLzcvYq5ufwrFUPsnwjoKFLxAi91LetR9NhTTHqKtD2UCHGvvTZiVeBTT65PdsiocSKfpDn322bnWzu",
  "key38": "4wLZdcoXjUdfhaWGgeyvQNEdTQHHWnw28C9HDMiGTaps2Tbm6mo1NRx74Fqb5iRK4yHqKaoXFpJqSvdtPHe54Kzq",
  "key39": "46ZJLTNrMQJvEvB3qiuuMKBYnKkMAnReLUKauB8wpBKq8r4X4yKF358kA4NQjVcTzKvoZL38Mj4VBi6JEh6eRCMD",
  "key40": "5xc8QYLGPEo1Ni3pc4Ld469ibC1KBVNFyTA1q65tWs8PNV1e2cgUqt9byrJtpUGVACz22R8jA2Dz4cxYnq86xQ1n",
  "key41": "5aSamRcweY7CEGVZbGfsrwro68eFjDC38PQGDxQCfw98YYDwg7Z5AZYiepXks7uZZ2FYoDNX5UF7LHqsXRPFFyMZ",
  "key42": "3sdKNCirxTy4f6UeHFAedpuTeisN122G4kjshTYob1i1TDQHKXrKt4J6ttTrtB3sTZG1KknaBkQZ4xaSyUPVTFFk",
  "key43": "3nBvUSKw6TywBTwCzPFeXShh7ivHzrSHiLdfPvfPrasvf7zSh5xHbqg49ZJpm3Fqp21UMrcQMLjjQfKdvbtekx1Y",
  "key44": "5q3uAcBZB5Tt6bSbtLqLxGrHZPfuMuYKhGwCa7iUiJ8HWu9D5cMMRzMdau4ixAM6Hhw7iE33hnsfEY8bg3Rt462B"
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
