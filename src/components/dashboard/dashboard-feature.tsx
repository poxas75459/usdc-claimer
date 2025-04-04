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
    "59fhoxjwkhiBv6Yy3d9HQ5wrghsk1DTWvPYkgjGN8LGKPxGgbFKU4syDqazvsidjuQWgq1xDW3NLFyAx8mYi5WQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o5urkSA5gL7j7juAQBFkdta3CQKcszWv7sZVeLVv9u7pwHCHSmMoAHHWmAtEUN4FnyHtoCAWbBWy8J52xnQxSem",
  "key1": "U6FVRd34g9pfaK5VTTJCruZHqRqfBJaxyDrCenT84mG1Y5WVpD2PsXXvHoeWMavZSM61aTEpqzeKG4jb9hciXZA",
  "key2": "oXR9Ucxo2LBkpehtpTk1WVCLrQvdUEZwTUBSRGqEvWuv2Z1ERPvMZKQ3EyNDZXaKaKj9tie3ZPSXt8N3yTu6BTR",
  "key3": "5ZE4YKis9BGUGDbW2JLocL75ihcePExqHew7xjfWRx5BFr8YNhM3sFJVMQskWmswAprKjUGPnydXeZmzmbFdBs2g",
  "key4": "5Z8RBWLfvpBNmo2qwpoznZCn6zfcrvTzh77cEhLMGNFe5aNMDYARJcokE4zFFtzMpbjb2iErMikMYGuZFV9inuCE",
  "key5": "2hKuseV2XoScXyKjqAs7kbWk9gd2ABY8WNDSzenN3HcbzQvPWKDDwrL2VQavTvZqjM9KfU9QMuT4AWswqj3uhAGZ",
  "key6": "5zPwtFt56nKNfe6Kn3ZeZwjDi8ZMVfS9afFHPyqhKpmJ6EjRhPykEJcAPkHcqy2bS8nyEuGW9Gekqdz7AXRcZ5w7",
  "key7": "erRm7h9pVzzC1Bv3FFkxzJEpWdUffCcDoWN2fDGhi8coFRfoThj5SiTg8hf2bf8h56cum9SPiwfYezw7FFQXPUc",
  "key8": "3sFYQ8wRzzZSHsYF1hexCYYLwqg93QUKoiL198EwtVPQtKaVuXiW2suLzL2fjqbZ1P3u5grYihkx5s7vSiPnEp28",
  "key9": "2wxJmwyFLPLWYkdkwv747B1LyazzekGReT1G5Vjg25xovPD2Gev7LuxukxQrMG2g7naisivczZvJe2c8Kpc9oHjY",
  "key10": "3cAXuKnwsFw49aeqo1MA5P7xaoiLKDtQdPGE67nLxAzL7C4f2QMw23MbZADZZ8QBnceSED7TLirYKCGsqRpSeRpL",
  "key11": "5q9GK4JFccrbz1EpgUFXkpeNHUrNh4b8Sbv8qB15HkyXwFnwAJcrfXTJroJepMmpm76BTvnbCvqbGAQi8ABuoB5P",
  "key12": "3gFqPwaCHE2ukCbuXUPGf15sUEDjNGwZvoSirR7SH7z6dS3aoT8Xr3cp2mw2AUJYVjqBc9oZryAbzkCS3hoL8nfA",
  "key13": "zhaZzSbv6zakugERYVR7Vckf8xKrEtj3fm2KsfvNej2RM4yiKiJUqfdHXKxyRDxz5LZGMPT55ukDih63uaxfCBj",
  "key14": "22vZkAYiBwEqXyfUkfyCHyt1Xs614XURz5c79ptLs71Lpapro2a5hGuTbEkd9wg73SKpmtCbp2UzsTvtpxhNnzdL",
  "key15": "2futiwCo4Vkpd9HZsp4UuUHnQLMB2NY5KKJnWn9fstU8XRHanjUEQen5yeNjw7Fae94h8dZ6HnkMaMcnfVXugX1P",
  "key16": "5J2NBdk9Q8dNRse2vy7kzNNJykH3d7K1LYCcbucpaFmiamcTkLerFTuJ3FXx3YQADC1Yotihj2WHGkLFVtkuY2GZ",
  "key17": "sd6rZJz4hLKrBggHerMmevXc9nG2RDH337H9Drjqg1yUCXTwBXHArzaMLSpSwv3Hyp9bEaqFbhk1xQbxBGqc1kf",
  "key18": "64oz4xcGE5thCzzuVa1BenxuNPx449TFYUZjf39Btc8dQ79BEkVihgB1Tj7fMDSNqRFggAdNEhgaNuSe2HZgXHad",
  "key19": "4uoFCbRceUcdmyrW9TQRgn8CxM11u7rDBHm4Em2Bf13xqWZHZ78CdUDU2Cs6PJtDnMv47i7JsJsLwdAseGqbFiwV",
  "key20": "5wyth7Au48gbojHj4PmCBMx7QbenVqPejQRjxrUFihJfqAM45eBEXwNp7pNruivKGVwzUN1Yub7kWfJSBfezauNP",
  "key21": "3RyMKemgAz2tkaWwJLC6AkgzSJdiRT3wWcR853mHpJSAjmc6Qnf7i2XiSAHZMPcRNX6pBtfZJKHZK2obVDYZYXdj",
  "key22": "4HRBVZcjFeQgW3qppqQYJPVpMa2Nk22xuA6v4MFzeWkyq8Ejc4HGfsmq4LY1k1q2afwmJVDAxkKNt9Nrcv6PEVJg",
  "key23": "4EnwyZX7Dci7siYLptkwLuR82fxv44rZ3XHHgPfPxDXj8cT69FPntSaqwBMR1iAzy7tZt8aZXeGWWapiusKYUxux",
  "key24": "4EQ3KZvDkDwZDRGiQTVQHwCfPyeHDPmr1dbzJuLp3err2pXzX7NFh3VaZ4QRZcE5XwYBruL3XvAFF6E2btwusM8H",
  "key25": "4SYZ9gi17SX7tuBFGpTCFFGoCvMjA8XYahuhYB6xqvSuM2FCZ22nWqAAJtmrQs4DVFF3nK9FDjuT9uLYaUfjpHd1",
  "key26": "5QeJEDQGAS38GdpCM7b8yt2f5HSakUNpHLtFhUpsuUwk6NJy3x9HPewgqSNiUTDjProGf5JLb7toBTEA5XxdeqH3",
  "key27": "4Mu7UTtyeYZ5QMZssqXxbdthFSSfqzmDf5kt22pqddjckiqDM7Afn1fxAxErVW8oaA72Jg9d4Y2NT7d8zy7TZTx2",
  "key28": "3dwknkhC4aDL5tgj3vzbR84HfqaXS2BqqmWYoXkpL8UkzB6so4XqvL4ztCdNkzLYtSaWE9j97wdSGdGgCxSnXR3b",
  "key29": "5HjGKyzguz2mFyEkoEtjMDiejYDvmWAgnvTzpDR3M7JCAtkXAsiDbMem1KHrzzqJxnuf3aCMiv5ff8moCzy74Pey",
  "key30": "4kZZRbGH3NrWcsG3fCUVP2mnzZYg3Wd5TJERiBhnyjQano6FsL9svRE9tYjEQmgkshcicshucHgfDV2RJrQhbqzL",
  "key31": "4ViPh75vuXsiKxneH1QfpXXUxFVGc6qgg2kk22mnRe4GvP3K8c3U7meNfpjGtLDY9r6961Fq2RBSpBkTgpAfB6rK",
  "key32": "H4Es3cFmhdwq9PTSrtwMofA1NVoELrqozonAMPy5Sqr1aD7WuEiUAo4Bbv2cPijCcZg1QVy3VDkhRmVetV56UgM",
  "key33": "2ihn1ajWXMtVjfqugHD4kHexT5EdvsWBiwg85LcwFMHMLRqrbgK7ZeeUsQfWnrjfC24ddM1mjsMW8g3QrdHbd6QS",
  "key34": "2y2KAnGuvsyfwhfBCjGTPbLRMS6Gmi8DBBtaH4HJvfKAx5ZxGT6PykdWUxUGUhRLWCogFa9UhcdsQQKMsZ3qsfCA"
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
