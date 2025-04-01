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
    "41nHcEUGmTwKQdfTLqSg6Ut2VVuvZw9pcpNiVGpRiCUDuEjxL29ejWukwRT1fQGnEnDimMSKGDdgGHuoYsLBFjJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26pUYcLduHsLGYrVvLD8J5FFxm51LZ9h332D1ZhJce79D1w2ssK4zqDsh46UfG93jwSweVHvp4iWcAVqKLVKsR96",
  "key1": "4oNGLpWow6gp3Bjb75QBb4AJKstNYiGAxLgHa5owDeYZZppKj2P8guBGrH3q2aE7nxDwU8W4wM27W5E1PnahZDFd",
  "key2": "5tW6YfjKrmbvs7TuSJiLV3RNFdn4rGFt8J3ZfhY5viUQN682FfFTVZ4eJKUQq7YzAzc2XXzBn5SmpMGRPb4pmfyK",
  "key3": "558Uo2jzsV2J1tN8hEMCLVEgamY3RgCHXU4hvJh2M5HX1Ui8Z8BFHScQnpA2dvZvuMjVvXxQQKrn34L451dSStij",
  "key4": "8TcJjkVeqgMiLGQqC8GLxojjEfrD6t9kPeu8q8n6i1fCE4K2dJwGCZbuh37wqzYoZywAYrXvxJwGWu33a4WPa4x",
  "key5": "Wx6b3JWTKZvyjyaBeUBSggdkPELoYASoRG9tDBPd6JEKAxyaDDGLQGYtyRXVcTf3RtQTQAER2QVB26QcRiYdj2L",
  "key6": "5DsPX9CbeM61TYEa9PPKZted3LYDD3JLGxLNy9LRJ9F5L1dMM37BmdnbNaz9JaNw9xdC7VyTVa9pSP5a2Uq3bqSy",
  "key7": "2iNNXQs3LdfF6wjnVEmWbTSvM2MKNipYRih2HmSK7egVq3hh3fosD7GXnkjKtppdS7kemKMw2Cvsc8h4LEvjAPJU",
  "key8": "fgvPexqZmz6oW5g8EMX8U4y2k8D2dM3MWEndiqePLssX351c1s4fGQXG4kiwXFvtG2QGjZn2tNk8KmBYGuWQAyN",
  "key9": "3GuMDc4Vxtu7p2tkrHsq53vrGUjnVJ9FDTiZXid2TG93iJ3EjUKTqt9aVJDhPfLQ7NX9sS8Gm2Tjh99Nkkq92bkP",
  "key10": "5XcTKkgm7iNj14dxW4EZRbm6qmwcUweWkBaAqHBhjEChpy886nyzaFL3ZZ7SfPosgbH2HTouF9yLF962rmFcTEeH",
  "key11": "3i1c4ve847J8nJoBPi9JWiFvBpMFhmXWoNMyqZ9p9qJuqTMCiHBNw2awKm1QaAK8MKFnavJ74YkseGRJaQUT4YPv",
  "key12": "2y9yjVrTYAMKwVAgrCBM9zSoKHwRhgg3zJHFe9JZKx2UaHcXwD2tDMQpXUfKMqBkGu1XPXoFFXgSrLWWeehZFzyv",
  "key13": "2EAKkrHcub5wWnJVqjUYb7MoNq3T3Y1XCVFETtK17AjqH4S3NVFXYjmRCBh7NenJdFtJGX61yQmosDaFUVT53x7C",
  "key14": "uvS7WVXAMLUPM9sN2bgDafDT7pDytR2BkToTim2uQZxV6MG3UMZShyUkKDR8Fzbn4FsT5tL4mVU7gUJNCJtbNYr",
  "key15": "4YuBsvFYUHDx25pMQu4Rtb1UngnHPzB2RTFCSRn4Sf1hbzLPu7EoH41BJqEopKvWzsM1ogeVsdD9C7iZruzR3VUM",
  "key16": "5bU3qUU3XBV744cYVmsiZkiNFLoCWs6qfmmCLeAZXAvykxd7uAfbZXavWQpLEzDACKFmTECigxio5RB2yRaykN8X",
  "key17": "Tuwe6ZHUoLmh2kLmcyqXdvy17QDQMwTCFx9KthS3BwaHwK5wLP3LSqzoQ9Lhcx73JWsiAm3jahh9Vz1o1md6yoU",
  "key18": "5F1zBR8VKoSr7WHh27VXmSRRSn3iNnJ2z5YWG626hsNqmNrLUdV64ncLfSqhiWiQpTaAfkox92jSP5fZoQbdSRcg",
  "key19": "crxfruh3562j6MT6nj1HKAsuju6WDeztPA5apAZhDHD9zB92sxak7SjkzZvEiPX3x6JfcscHjaGTw446RovJamx",
  "key20": "zFtfKvGRg9L2xWB5LgxYWNqDLhYncQ57HNvermgcYBR3qjgyDs47xGeBdusJx7EwWfHoEzAPEibTF9pVG32tAHV",
  "key21": "25JWQogF7XCVQBiA8bRnS6PaVuAAAud5ukWEtHw8HFd1L9582j5pDRn94FKJcWfeEV1Bmqodjd7NYEQ437dWbpEh",
  "key22": "2Jz2xCYR9AHHFcKHC6WKqvSDgwrWnjqxeG9b5wyBZQusFnXzXLw1zKMcCUQUKwfYaumpJywibsXk9pZEtxWsqDzP",
  "key23": "5nxagp5X9oVNp76cS6jx4er6jqhkL1MDaWWepFXjBETAbqidhPhju97aJmJxE8oCarBuj4pdsYeAQSS3hJwD97FW",
  "key24": "enjXtt5kjoAoFMDjQX66o3MoovUEMDs9TKG7MHPaxyHBZTRuzxvDFQcDQp4YB9WMP5AunoAVWG8sWrVes2XcYrf",
  "key25": "66e3z9Qg2v4Q4NdtbdHFoHRrbvQjccHvaMKXR7pTw3sXNzZNdHozTZhRy8NvQobA5ZzX7r2EAT8DqVc87EkkHxz3",
  "key26": "2VoHZYJXWRPw3PQcfsHj6cvKQAuDoJvMz6DUexMvPQ22Nq3xJAWakuZLad8crH1so3ik5teDLWfzxszcxYC4n4Xf",
  "key27": "63BVEw2tpZsTCRkKHL7PeRDYEnScGsuRK1Vr5P77JrDDdqStZvACYJUv1Hwkr4YbkAAEBHehZbStrVVmdetw15bW",
  "key28": "34uViQKEUSmKUiYXW5P5D4GBBisoUpx1M1N3Lp8WYSp25H9iCPcoNBYuuC3aHyWKATLwx6VL9b7SLqW2zdXGrzeJ",
  "key29": "3VjzQk5At3uSw6VHoigpRTbqvwUoSGDhLAueCwx2PpCsaiHw5qHnhpFXiS9eh9EHLqjVarbnG3FhJD3wPZgbmCzU",
  "key30": "qMYpR6LWbYYdG9JLUPqK2cbodNFfULbKmwYY899f5tUev3sLBWdg8pbTKJaRRVAo6mh3v43woG2E27scCs8ygWG",
  "key31": "2XA5zX3mBHWKiFzCdBCThKFHfpsxBAASLvBTBHQtXZMAmZqt5gN8khT8f9GqD6Ws3ZkeExUq7DnfbDHvw1hqrXoN",
  "key32": "2RXJyNAoL4wX8EzUgFQepKgDEuDc2eg6paFqWTH3sJ4AqvKk78v9Db34SqzU6BGc7RNqaM35XypGq9qxCkXzL2xg",
  "key33": "5SHnUMUfpkVuKW24RuVMH7Z42uQw3G78uHrsba599XYUVfgdDQgrWFk99AveBUVu1sJ5C9qe61RK9aqwpnNDCq5u",
  "key34": "RCn6xwY89L2jXqyTVmR5BDRQXn5dTNkM3mJcAShgnZP3dQGfaLhnyTk7Gdoxpi46z14NGzzWeAfBGDBQ5YHJ8n6",
  "key35": "2jusPp6xDPM4XFjK5L7CNjkH8C7eJYEohtdzfoKYAzWyJXL6gRCyWKygkBV96aRzksrcDqHNbJPG2YB8DzCLwbnK",
  "key36": "3fao7wWLoQY1mejE9qR5LTV7aJUfATu9h5aNViMi9Kfx2rfCT3NHE9kuc49pPF2juE5Nxy3fo8Y1LC1gmmLeXzej",
  "key37": "2Nnn4xBL4mZi3xYyUBnASWpja8QAU3YsdPmQgDVRuWBJ942hCFtVCakPNe9rokZUPixXt9XekxapehZsMB9D3Rvu",
  "key38": "2KnFXe5bspNi4Qim8JosyYiFwLMfZRTu5FtvByqTU8AWp8tSwMa87wBYDL9XRfmXwH1ZpLcRy3SzoMapeVfvSwjj",
  "key39": "4PoVkDmqnpQc4DWxMTPhKBLZ5ZHUYtvMcPGyL4hAvUXx7hE1nkwefzk79CsyPfhCPH4vfFHhX5NDPECY3xBg8e5C"
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
