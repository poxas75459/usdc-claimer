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
    "2corLsHvsspTidu5mP652hDTgeqkzMFHpAjQKfdyB85rWm8skaF3pv2HcD2iViuh7eHiU6jXgTXXiEE3w8BwfD4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JSfk42SxMVs5Emxiods6rUAMNg7VTq6hZnoFiBMTkx5iaJ742muF1Q5grcpjEhjAeCBUWjUMeV2sHsg3zFt5sKG",
  "key1": "4F8X9MjkMuH8LiejN4mkgqoNmmBMjnvNuPvW92CLmFHKQhHKoHANoC5e7M6Yxf8KYWCMBt1HaRpnePUsaspTf5rN",
  "key2": "5XM7Cv2SK8tihij7C1Afb7dtXbPS3cQDN4pfSW5vXKVCLRsjt1Ybg65Wnx2z2eHxx7b4VAhGh5r4a3VLyXKRVPCq",
  "key3": "2myucoo2JcDQbSdGAHvf8wLwk45twWh5Nag9kAN3R5ipfAHWXyx88rqjANvBnGDxsHue5d9cqxK7Y3thYr2NuQ3j",
  "key4": "5MZSrKLFWHLE4ohivQmVY2K5SweXKHSHCrLotDgmtMPai8pEYFDjHxanmKuvtiFNqdeVMXigZgXBx87g4SQUy9M6",
  "key5": "4BXcweiwKEueYh5ZDr8u3F8sx2wrCEgGjohPTnzg46f2JWuVLL9SaB9bm13TRk6maxvC29696bFg1G5DshuYn5eV",
  "key6": "57ZJvEoZ6FR2Ss9Fp7fQR4bYN1WgtJSqayRkgP7XDwwGPaWo9QkpbeCFQEk2sewPEkxf2M5fSFdc2UXLV1Djnq91",
  "key7": "o32v6Npxaw5trhxofBFn4RL7HBWHEuDZxz1Ud2HMubynhsKdkQVM7rCzvCFE97S6SrtXhXYqL5wNLSXJ26eT3ig",
  "key8": "4pBKenxzHnamBEai2SxtS3AZRnuTg4ajygHXhkiuFJemGyr6iGWag1qDAaEQyDjEx7m3X2GHyfaUEe8jjWnyGihL",
  "key9": "62VWaH3YE4P2QB8drrhpCjmrR3QtQZ7Uo9jAgrYpwTU2g9W6ERDi3H8JqHHUXf6h28cPcbE66vyb2PafEgWTiczq",
  "key10": "2ehsAaJAETm8yoXS1bRo3Rd4cmHnTGvaWK8JU9FqAzwwXtFdXEh8ewmeVV5WtxH1zWgGoWDGVFfzG4bCVywMYieX",
  "key11": "4eUkvLUuWYzbPftYE85DvPe5TGJFoAtKXyFT12VzvYKW51Wxcm1U36z15sfJ75vacBYji44hqvwYRXrxXjLzPRnW",
  "key12": "5CvSgh3eJPtuhZMemxEsrAoyC5YVy9cBFZ7SxahwHG8AMx13qxKBpTkgfFLjmz42bhVCQQjM5GEebXcym2k3evuo",
  "key13": "bHYZbWNi5heakMZXCmMPKX8vKTnZLbr5XBV1Y1Zn52xgppm9PVMSTRXYCRdFhkQR92LqExnZW4DPb5d1rPhpvqm",
  "key14": "4E1o1EvgrubWDZ8uBPCdoqJLYYx9iEaYPom4djWzhfxEiMJCi7Sx7QrWkRW7gnEEFAZYorAbhKFYSbhVuEyKNDBP",
  "key15": "3T7B6fcVoXeeMCrr1YdJbgR9DLWZHsTnEsd2j2cn4LGsi5khjLurGD2qmzZSJnmm3RXR1afJuTq1JUuDiwMirdku",
  "key16": "zwKyqJ9kVdZu4RwVSmppgMHxK9hAZWwZJcdqz1paCAFgiuMYzhf4aWTe6o4bdRwVSEpjXRR5MLSkstHyZKCDC35",
  "key17": "2J16ztL2f8bGpwfuuVcRaWxWzowrMqSfeTwp7GisBexujqDXZD38G2dYfPMKFNjPeyYaBiDsxTEcsZMD2erCq7tD",
  "key18": "5o979T3MsLyNq4sdEKCPu8R3gNnUaEHgLPU9i1dvazEW8PJou3AAcvvdqwG94KpNz4sgV3ymMZfN3rHjzbUc5Nx1",
  "key19": "3nNEcXPBbMWtjCdJSUV6mtAK7cXdGqoroQ6tZBMaZhRLnsJ23jBsFc9YXDvsGkJYRt1wyWnBq8q7CbcwexQ8ttDB",
  "key20": "5B3QAeqTdxLZAJHRyXWUtCbMeNL2qU8PSHzrVM7huAg9bzY2uuxfckbfWZinANWgzJDA48hEBEBnv3GTLW1Xesk9",
  "key21": "4TEw7vLmHQjwxhpdMECYi7YN5c4eJi8drRJ7Es8cNXtTpjpE7wbEerZXgqVMXzrSstFqd7DtMCSAmvLy14tQNZtM",
  "key22": "3p4A6pbo41PEXNWjpXudknrSc65zfsxRA2jntv9ic9fJrhTD5YTnzS1Z2ZCkuw3EWbsU5B2R6SPimDNoMYZLefwB",
  "key23": "58pQjdp3m1jbANuaF43smP1yerMmhTnYPuiHJ9UajxZwQDc55NxWYfto8ZF29S6Vaza7cAjpKWAXb5m8piknEySc",
  "key24": "4UnVFEQfvX1vzeLHgepnXZSSzeZKtTwyK1rtGDv5eAVQGNMSQonYm9QehujyvLw8CiCQUWLbQKKSfLoZrvu7Lp1U",
  "key25": "6gTTgFvzhCYP97JzXp2qHFwRitvJNUvds1PYELuGQzXaAMQA9m1EwsUFL7ZNZEi9zchhCJN8WXhAdyUwtcna2PN",
  "key26": "5dNv7HeAqqZuFa8njG1Ejgb9GMFoqh4ctZgoo5oDqzk69vAhyjXjhXKzJ1pWX9KkvfoXtnfVG3sm1TqfwcRASeJC",
  "key27": "3WGkU21jjmDwbaDc9M2ngYawvH4iuYam5x493cAWeBKsWHUkG4Zsqi2m2X6cAKQmUyKVCAvYfpGtUmYGRtkkkj4C",
  "key28": "2NyFFcgjoe2aZ7jMoZKhRp9qbBwcj8HAsq5JLnSE3NXJDYTPFLEhyAaNSsh7EDcN5rZFPSrigWbH1irQrreW4839",
  "key29": "2pKANw13SE1rNfaNshQvK5P36gtaCR8PiJZX3xhT7CfDrEJ1FX5gUaaLVM2Mch7nL7xAMtAqC5rndvuoyHbr6CyL",
  "key30": "cGbY3UsUVfjn3dYANr5rWHu7xxAvXpqnuG7iVpSCB6FkNMxHv9feajbT4j4ic5DphsBmUpyvrMTAWMUjukL99Dt",
  "key31": "3EX7sowFFBJh92ZUrLNGp7Wac5oeZR9ftyFRbQqbQ7CkcqGxshCdbDQ1Ng7Z3dkGNGEQHTW3QPYonMC51Sy1shV4",
  "key32": "4c8xPfnFGXFXLjy81f2mVJdZptE9ye8sa8Qt72oZJCWLejiaVjbnyAvGZCYsoW7L2iKvS2LsDFMYdhr72EzePXBh",
  "key33": "5Mm6hcYHuA3NWMHdXT8AKctdCGHEm1JtrzArz1RB7teQ5L3bWNrLD4j1mKBeb9eN3UnaX1F9xv9arNrbF6H1ecjn",
  "key34": "57wGho8ciCnmsMbAP84a4CdQ8KmZFBfUDBV97VMU3Xt49cxNaVS7RDRxsiAwTezcYeduC1Uk9boS5Y21LLd6yZSh",
  "key35": "2HXfyAcntPsmpLvkzCTXkNQBahCC6DDRGDeUodeYJYACPMbuVdmqfWFXPNj2UVaFCr3rkSPyzuG6zGGGVBiCYE12",
  "key36": "5VcPDJGkwSaTR1eiwjU7EtRVPSPomhXoJv5cji4hfsgS8qDFR23iYZNkXuxvkDS9yP9LQnFibGro1Syrieb8KHhe"
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
