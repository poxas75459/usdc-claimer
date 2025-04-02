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
    "4dHfVkv1M744pMt1qQbmLm1WCcLqYryraQNo4XyzkEiorDAdPPcvpnn4jvAxdUQgPAJzDe16PZcmsL3wAqY1rjLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ub8W18sbjTSMbVg7BN59mho2yBZw1M9q5WT3TxG4qc1qYM9ugGYUXJRr3GUG91nTVPe9pkZsKYXYxCqhdZkKzbn",
  "key1": "4KfffZYg1CHZTb8cvNGYf7PJeDHi4izATyPKzajpxcmyhryjVoCgzN29hjjD8K88Umib2e2PFC35j1frkQcTcFvD",
  "key2": "5LVXU2YTq6ayqwNQgouEJQT4fcMtd5RtnbGxPYNU27LBAoZ4yjG31i7KEBfU2nVLFmHEZEgX1vuiunE9a6LJbYam",
  "key3": "4g2Sc3oX2yAD4wuuXQyKtScXuxwruGK2yeh1T31PfLnGCpFiucrbbcHDj3rndBqLd1ZXQyWbN955MQmGmqRpBnfy",
  "key4": "2F3hX45HvsDixZf3ZS4ftGpYUeo2Qy9NkXKDbFhAdt92H4osPriyGBKq3NADDzWSQPn8rftaENQwZFueSnZxZwR9",
  "key5": "3Buv1FHE1Y8whiERdMU8X7TM5C7DrKjeNnpPmDvQvLdNUhhrGKq1QgeCG6LGzfj6MdZ5GVrYxZZjVcPcx339DXQZ",
  "key6": "533KE6CcpJuRsbttJLiJwuEmbdJPcutPHT1ExYqiDaXCncb1LCSBR7c2ZL5ciAAMaphFDgbiCB4yVCyVHqbe9B2F",
  "key7": "4koMXJKb5MqDYeYAhb6E9Zhs6L6zZYRJutRCwp9AU4iSywPqDn2RGBAe9165Uy1Do8R7tUhe5Ujm6bU3tiwUR9tP",
  "key8": "3Q1Pd879fM4WV3VW1TiAhxUc1DR1ckn2fWATP9vJNRspBhMx1TYQDd5HS7SxnCo1fYVhWAepjKSuop3ZVaJUADyJ",
  "key9": "47gnfnQv3nE6wXYo7h9mnndYAGjEuma3vt26vALM1m9TTyKNxpGCR8jCtrvW2Q7Cvqcj8YG4BCXu6cckMxLWxL6K",
  "key10": "5sHpfEF3bT5eHtvL6ZsxyH9FptCgJi5RqvgfoaRfuiCiWqZmQ4f2HUXuw1P6AQC44tVXhCvDDCdFyqmvB2FbSfU1",
  "key11": "5SqvXX1TxcbdU5AWXjhWZKtYpFSdjFDL8xzeYdNmDvYj6wfcRBfpZxPNFK5Yp375p7qxSuABPZJcrLRp85KyDHoM",
  "key12": "57Bjwmu5AcokALWzhY8JVCn3fyi2QyDUTKtkaUWH2sES8PES9Luc5i7jEVNbC4WmwchBWAKyWYKqyEZuJgvoG2WZ",
  "key13": "4yP3cHF57TcBTiWTa68ERLzpuapgGerJG6anaEeHMbh8XfXt6prxFWYx15ZeAdxaf4vqtUHAXry5VxnEBuJwn6hG",
  "key14": "4arx2jwyWnSdcXGL58Njy4pmdauQWa2DtQD3vxHYhMeAaUMU7RUFgY3b5gy5HvXoGBGWBKBsi1rPWnsbbwAYk538",
  "key15": "FH2qm9M9HwLwMdEeGYhY2rb6ikirX6vxZKMXDH6epigpBudebCXzyXmL5tH59nFTWjroPifvHbjVmoa5PPt3weF",
  "key16": "2ptbvsa1RqLyK3hcrB3aG61qehGVPs5n2LidvEyLcombDeWW87HxGsmZsnpJzjwrBGvFuVD1FYU7GKo6KP5e6Avx",
  "key17": "4NUGD3mRxm2X4WyvaaAXCB3eGE1RKBrqD8jYSRStjuPj9QWounr69R89rEJguwGH6hw5j3fokVC12bWhjZg8NHsB",
  "key18": "rqA8VB6kd8FtUWhim7Y3xZmoD2FasogYVfgzPepEPbDQp1Qyk2Wp5sty3tSsNEwGXAdvvA7TAV5nVYbz29RJk7b",
  "key19": "3eSaWmmvT8QB8zGY2t7iufYewRG6LXyWbmnyjk4rBGfjKsQcUs2DY7rwrGurmjAYW3GdyiZAsCPsXQqLB4u2SWfJ",
  "key20": "3a7QrHa9PB7vxgAbkAAgZEGhkKhM6oeNHcQM3Ek5aQoA35g1GFoYTDhXMAjWFxpicWHAM3U8F9tvwV1gQZZmiJdf",
  "key21": "aLMWKTvnFS3Tr8orjo9rSiRRF9DNAMCBqw6Gcom8APxoisUCac9UQwWCKHnFGG58eocGURpPQkiyZB4EV5Q2ucV",
  "key22": "2BJ58Q5Fzu6bKi4VPoZLZYrno8KpLSrKZKx15uRT9KFD53bKi8E1Srp49T1sj6ScqAwGjdijoi2dmARv6HVViCQm",
  "key23": "3trJd5jHgMvD7XFfbqog65jLc9hYi4rgaxw3mnRN4P3FsxcibTt6FjnAbBj3mbV4gQRxrvzgU6THvMWZS1deLoi5",
  "key24": "4ncb6aWH8iH1jLAjGe15eCC8QMBYDbRS2J3GE6Q4SiNfw77w9dB6DmTFitf7q8tEeYNhdjAkFGUou515qPKGGU1j",
  "key25": "8Y26b7poXibF2Y9CiWxZhoGg3DFjD6qB85VyGcdtLuLsznC583m8KXkTDHtXPVZ8JxCEuVbdfWPwZur4MEARSPQ",
  "key26": "4CHN9xNo7fYGLrnVFJQuWoDDPHemMxotT3ScZ4sBRkB7BUXW6vmsbvMZWKmf7tX3aui5T5ahU6ztKLfE8j8k44sX",
  "key27": "4ERvyWC4McJWdMQSkXL2B5F8rXjirVXMtMteAtmEULYarXN37zMSgTbBjocCGeVS8Rs6SiXSZ5dPCNBy2a5W7JTY",
  "key28": "2rKjtYJCp81PneJkkpdpLjqSJ4Mk9rnha1xEbBnbNDbsFWzGjTx9FnbsnoABdJywr1mMW7snVpLFpqoj91nuM4MW",
  "key29": "5ZN51BE8tbqnNe6MYtaHKDstBGEYYJA7c3QdkF2PHNZzM1cyNZauudXnLKqxTKrEd7Np18fxpwbmdw94XaUZK1Wa",
  "key30": "5NWh7iwd4iX5qy2672sL9XjytNTuW1kYJ3KatmAQ7ep2HHnTS4sNKY3KWDRfhLzwC8oSv6Um3aqpe6Syrn4GRjC9",
  "key31": "SgUg1vcFocoC9ccmpZYEW8458SwqRNJsrq9EF1Qy7AgRtrXjQU1ZLHoCN7oHuy6AvmSihFQB4u7NUnJdywU5Frw",
  "key32": "2is5vWJRVQWXs4K85qtEkm96sP5LETmdP6soJeRWue76ct6pEtzAanyJoeTwCwZi9F8GHiAjhcBUceyT6wrmzubn",
  "key33": "c7M5QJDWCi49zYKHKP31LRBAzbPM6pmY4LBPLua68hkboq56wvHBEtvWDCnUqNH1tBPrWVUn8L437rdDMAbafyp",
  "key34": "25NoeNmz6J3hJGn36dCtbK8x4RRF3UenKRuHrx2149vkMciDi6XPg8JDc5dqW35ewNE1fcbdsLLx7cVPm943MLdk",
  "key35": "5X247nmY67UsAA14wf59e2VCFgG6R1j1Z1kSktrnE48aFYjSPdo2HEuEjgcYKya5a7NgeDs1ae2mMkefCXD7peER",
  "key36": "2WRfcrTRE2CYMoBB9jsvPV8pZTwozUZLRdp2k9ZY8vAvg3tsjVMDcsCggKSKWVjdoHLiABJaGGRWr9z3MjXePLtu",
  "key37": "5njJoaj5g3RhT5y1ut66SCsdLJkAYtyHKDZDzcHDTbZ2NRYMGL5DF1dqdx6yvuQ2u4NckNfd3oTS9Eba8SPjuLgv",
  "key38": "FacdxgSjqe3bT4vRxDXLaeoh8Znv8Xqk6vAjiT6ZzCiHJadw3r741i5yf2GjxxfJLWK463drN6yS4LmZDVjzKSA",
  "key39": "2RsfQZB9LpVhf8Hhsh9RKLmBNk1GoDzhbzDYxzvEQG5HVyUkT6uwSU6sFQvLtctnDfYAK2YSR95djFTRTaxtZiJA",
  "key40": "48XqG5tCn67bUQhz1dFybkPY1WwrCus3oahjBjVYMCzg2hiCHstiukXmfP7Msp9w8Fe8DhXmFXu5hdShH45phGJA",
  "key41": "2Dx2R4cuwUMe6yL1GTLyYGk9uPydV7RtQ4DGu9YEip6scnx2zERyTeWTwrV4bccYMBPjryp1Td6jEcGm15Zmpdcm"
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
