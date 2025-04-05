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
    "3hF6taJiPyu3qSVUz59invZXtFnvU12k3pPQN7zELX1h7wqtCmusVG3K3Gugy3DqEJG127zVtFNjiUgnjExGNF8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yFUECy9ctDa166baQbdxdxJ4BQjZ9mSx1CvX5R3cRt3Nqs53kqf16yQjYTykkW9N5opFbFTnpDRoyTBDbFPsDKh",
  "key1": "38m5A7ywGuWntJ2A9LWqY8EJHGfG4jfd4hnSruHu42oRmXXcSAVeevYtA9sdMstvJqveBkFQFevAfUeJ19DRbQUR",
  "key2": "5miEGGxiM4CoUq8rFFXkMRD9ihTfRBydzvrksjokEEuE1m8HWSnTBaZ4rfPUpueS3jMhtVRUsN8P8ryh4VoRDNN8",
  "key3": "44KZ1z4Fx1nUoPZ55sPN1LF4UepGeAmTe9GJCCFjbyzf4Y4YyhZ44Bmrk1YUdFXCFrnWnN99TwjFx38RQGJ6PyFX",
  "key4": "5CXaPeKbkE8gyHcLGGbrbGgy7YuPTXqNc9kbUVefRc69WoSUnRFxDUar1VsbuoG6BuXiXVmSVNDUEyGZJzprt5eK",
  "key5": "2hLY8UfaG9RHYseLDdszj56m97QE8HiQJJREo8rMUZ2NcbDG2nWomDVaxMkH5JRX5eThUchSoMtXmPFVcF8yEnf1",
  "key6": "2mAzBtf12a7RpVAdPYPbYL353w5HhiaNmMSAp169WGUpMr5gZ8JxyTLH51q15snn1dcPs9n2NRgKBDc7Q3MNWBN3",
  "key7": "5zirqBmMvMFU53eQdURmNDpcpttqhu8H575Yk7a84Y3CvAVbCxJLP4QVqvesMPDUad9ySTPVv8rFVJ9teCnE8usf",
  "key8": "4LV5VgE7TaatCzNqMqrZUEioPhZdttzSuGWPdhEJCAdKxvnTEuLvCaiL6Fc1ofCGWnpua93MpeGPGC9QyB1JLHDB",
  "key9": "5ChyguoSCFcgUr3pXuWdWGibjhqHqipZPSpJ32iGDi5v74kepJf2BpFvEWTKv3gYng3c5xQdrCsHuikjzSkLNRbQ",
  "key10": "3HtavPfBTKu46pVP4TTbJ1b172Ez852SKKMKh46Z8f1ugRY9QXiSioqSYn6Nhjhy5gqv2MnhzJjFJBFAkUVrhrGK",
  "key11": "2qgbtGoeXfdbMRTQxAgdRHnqQbLCzByfmV6LgphiGk1rNcGAZUdXgYWvguS7eKiBJxf3UbE4BMhzfAmxXUrfSLjg",
  "key12": "2JiFCeyxBNqq2KEdszFWGPC9MaWRHAHWnUUsNr6mqbWCtHi3PAgjCoUXSfgad8KAXQ4u3ziDcKA7B8cy9mtbMgfG",
  "key13": "3DLJnuic1AbFvshmDbxb6H7RSaetxQS6G7mGdF4CqLLTsSAUcjbvGiXp41Lhia1BUc39gAdNTBuPQ8wpBVbYYvTK",
  "key14": "JpQiiXyfwVBYmcYniLHGcXQJkbirRMzTP39pwCjWHodG1TCqG574muYRpaV2Ae5P41LvDqwe5tga1iQAZB9giQE",
  "key15": "3jbkgD91bUsZUfsRNJTey3xcSazhoHDhFtQCTgbgA2EW9REy6sMPKjAGuxd3t3LqVGGPxr6DChNSp8KUzd8B4z7Q",
  "key16": "NfHxvaR5sbGgNymU28NYxStrt5Z6nG7rsfERrCbRt77jRKvbRH5eKQLUrsv2xt7DwwzkiqUXx36jcDDuoynWswS",
  "key17": "38PzQ7JLQghtmjs7DQ57nUqEnuJPf9cA8KspwhEBdvbsxdU1n8bQH6BD2S9Te9DR36WNHbjwBZSWpkH19RYNZyWK",
  "key18": "67TbPxHGHmcHSUM9P8E8vz5e8VPa7PKwfn2st4g9s1qfbKRAL4kgny7raLaVY5gk7pgDMDyDX2Pfto8owLxPAVe8",
  "key19": "4kbRM8QZY6o36sX11vCMCuKM5rur93ECeMxM6ExMmViMrfyyjLainSCwPPQZgm73fMyQUhoXmXQu1bnyHohUZzhH",
  "key20": "2o2EVw5WX4ZiYJFJmSDGdQewGNkjnQ9vwfqC4iijt4Tb2RPhCkWscxJdGLRHVjZ1eYicJJMWpKe1zuXR8cCoHtJv",
  "key21": "2b4w1FLa5nnoj5X4MMqTLuRDPha98rbUcBdyJFwPnV6aA3VNRquhASq5EXvocPx1Hprpt4wRGv8qy7kRtyEgoLgq",
  "key22": "4Gu6WQuifRK1yiq5B65vTe67kmzGXpWzoxSkpWNpSS3bdNh9vy7ViHK3HwPUHSx4Bi7ashDYHKDGFpStkzuh6UpZ",
  "key23": "4vEfKKhCdDuK21kwjThvffSfohkb8HBCgXuCaNyfRmFDEBgt8HwjakrBRQt5HatnDVYhE49z3gUKb3XHBXAyym6",
  "key24": "3Vwha475Qb2UCkXm7sTBhoSYYr9oAUe8X1DCKSEQTEjnmxDz4m6vGxqKqNexNRE5GLYrT84Z1ZBchAMN2N9dKt5q",
  "key25": "5EsrXbbk2hkasifHB8zHhwLszQ6fuECfMCk4MyhHhVC4yN7Y6QZxUNVw8WjdsnvCYvtj5jrKCVda5t1AUQYVazCa",
  "key26": "3FmyD5S4utCxPhLANW5Mv1nJPcfmLnphTtu325D6pjmDim8qDvkpx1shp8mGMYdrPNhg48ebojRzhv8NfMAmEpne",
  "key27": "4Jqj6jC4QyZQHGumMV5FN75dcuikKKZcmrjKKvrZirHTQmNzSiG8Qzc1uytwSDe4H4kjntadYyC2fa5xBTLw3GKj",
  "key28": "JmwzbzvuPeGzxVrXsqGVNqNEinQh6eqAGwe35WBgRLaMqiSqK4Kk94BqyxLk261Nptk5rJQnV2gQBkMzmyD18eT",
  "key29": "bbbbbUt7x7kdWavLby6NuzLTgPX6XScrpU7n8tWxt55zNuCJGt2mY6BTZqXpLszeBJCdaQ1XyUdmqUNwgmzrdYb",
  "key30": "46AMHoA9XxwNygzCkb6Sbyc15fiLxc28pBPKnE2oubx1RajsfdjhB21ktWigVbRmru7D3vdRqGWHx1K5GFzu17AL",
  "key31": "BrwKNJvwrC6ssfvh5Zrbwc6H9R7cN3PLERyLUqTbkYT83CeZeoAwPv9kjKW2F5HMT8794dP6Yhd1prTmCfESujb",
  "key32": "2FNMrfGPLiMeUEL7MV6fhcJh2u7yfX9KfcMgH3RQ1EMtJdMoqYgkSKkk43g32EPHZCnFSLH9pu5PHkGYYdfQs1cX",
  "key33": "X6FhfSi92MewHxoiQiU7QKACDLdpRLQpXD2E8CNXdu3ZMV1WWeFgKXnGqGkMXJ35CmaPpNeuSQjUtGC8Tviro3Z",
  "key34": "5tiL5xMEhfTFbgX84GZEuseXt16GdzPFrZrM2myGHTqBbJ8pkV57xR7oEYHfwDwLEoHmqRuDsse6tdAuJM4LSdR4",
  "key35": "2MALKCQMnYKZACjQErsyUYc4by99P8UiteSwReiC7aNc1mvyDPW9RLgrEjgoQ1pXnFi5VeCCe6ANcPhTqkscZcQm",
  "key36": "57cbh7apdTTtdjCQydkdDv9R3bBbRrKKCrDmgzF4jzDve3teHmwavJMP4gdEz2dhb8M8pUND83PGhXttJ68ubnN4",
  "key37": "3h6zNUuz19B2rczJ3WsRbVZZ3i5XDDSrjpDhFgraLbiUCpfxt35mQYipGhvm618czBCVM1f7PtdhwiccGS6vvoJe",
  "key38": "fYiS9yaKySqxi11aYERJB8TsW1fBA5PKtFfPni8dLRFdWsWuiZdaUmco693XAa9VxsWLZ6DLkF2zSyhviPs3bt7",
  "key39": "43XRF2NNAf4gzZcyHKCEUFexVm5D8yPGs7x568mxuZrggP4HS6ni8CBMFQZmb9YxPutxz5bBwE2TWdkvnwANmXa3"
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
