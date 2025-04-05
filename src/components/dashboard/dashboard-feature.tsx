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
    "2v8FuuW2eaibX4oqhe4mFkEsGtBa9FK6SDiJaoaDtrC6uBYYs5Wo4drzwCnTbhbQ4TRPdgUmMUT1uBiCynSuABKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uJJaW9maNyQkK5sN5ynpzMhMTJCuqf6QbAR271PfjxV45Aj4onFRwg5ZABRwvzMzGjFiT5dktZ7QwiJ3ggC8zVF",
  "key1": "5Z5oReSHs8cR2zRX4MHST5hLaAzn3Z7UZszRqvy9NkbLzwfjBrJwLs2qCv4uAFDJaqpcEPqM4DbwBS5xEuMMKHUB",
  "key2": "4uUwmhLxLgiscnprJ9Z9bPZFP94ruk9AnCck2DAty3oVCnzj5PWC4DjRZefF2vJSbEV2UeQ2WU2K84V3epzD48yQ",
  "key3": "3PUm5zMJDaMFdiZ55Cym6HpB95x1QGmA5oVUv7RYAr5wtPTMZzhC3p7EPaSYHpwaBf4XoyyU3WYGULNwTSrcbW8e",
  "key4": "58vLVD85D8rsQpF6bV372YkBVD3hkTgK3h5WpRaJ65Z3qYcVaE3s75vnsxt4WBc2qiuQ8KqPCWz6X6PQijVDrvrg",
  "key5": "2XRujPQTw8RdyUVvNiKTRDyzrRYHFzAphwEjmiaycbjZtNfxd8zad1PS7niNbpYYxj1WsFrC2wEXb43FLVSfCsHu",
  "key6": "3VPnzCPBpvRix1LXDS6PFDPWZaQJLSEXxxcaLcsanAwPNbB6TEr8fvsymRvhGtfHMaSFiqU5aBaauvJZJi17Z8AN",
  "key7": "fMDpG5G31V5BCJsYznwoH5YYXcHX7Jxy8XxUyDRaS6AiRkEAjP1Ey4ewX6zWApubqUWTKRNkr98U3jaybKcy4iN",
  "key8": "5qFKFc1mfPZAEfu3WZf3mpPh9pXHAC937ovLUNWr5FM2fUUXw6AJ6bjtPWkb1MK7vo5DAQYdqhGqhnsfVRkFHzzT",
  "key9": "5xUaC3K3GDSyNK7xcT2NACEj9pDgTxLE4WNfi4hVitLECDfDDjzPQ8bmEAvMPSJrvimeQZid4yAyn3SAabzfoJzi",
  "key10": "3sTrNBVjRNAFW6EGw1QvE8s3VDdXST3z4k5tZ24zw2BbUG2n866AxihTR1e3JidvfadNqtct2VgSw87ay2DiBonZ",
  "key11": "2dihEQPxUUUWekoxRPUGKxVGRRWQMSkdeUmAH1p81yvfix3RFYEdUm88rWceWvG6meFh1b23AYzBMN5NUqAthLT8",
  "key12": "3VBHypXHZSNaVFzUG5MeUR8tw21Nmz21iSt4npyAXSCLiXNkkbZDh91xeV5c3tkagEiMXzgUVkfWUiz5F3F8qH6F",
  "key13": "2CMVWMBoRs6N1cu4BUbWnT9TDMmYUoH1AGzUo5Kt61wpmzUPw2t6jHPwKMiG7Vgihk6KLCpXVobHrRJ3M2qkGzF9",
  "key14": "5xdfXtRGM9b1ZtzMHyGrufSK1Zh5GXrBJsam7VdeoXUBzQeDGF5eHL6PKZpuX8wPJSMH65agks8psHPzH2EoSgee",
  "key15": "4Fv7XfuTWPt2tvo3Min3oaW5XKUzzQrFbjcpbHRmHBpYGebBF5pxv17xDHvwMfPmURwaXhrypdf5DQf7bSmxZmN9",
  "key16": "mtxertkHDRX2PCXN1zjLp5HEPiAViLzVMmoaSEaEmbvp9Hxgfm8Z1HcpAR5X17BxYU2bo48c6Ctv5S8QfJWbEjp",
  "key17": "2cEbSuCvZWMGokPigFRyHzEbFpRagApmUmAN23YYL3z2fqRRv9xist1je1VmzQjxo2DVGtJyATs3vmys99renBZF",
  "key18": "2sqbkFGekm7fKHPY5uL2LeBEsD2rUZaZDgHNiU8ubJhmg5R9QJp4p1v2K8V4BJJTnEHAULvmHgwpPXxvDpaBUvWF",
  "key19": "4aqwVnXym9QdDUx7BeKAFPFz95fvggRj4RkqoC2L25bEHuD9ohdoR7tj8cjQHMnY7HAfG6mTZF81cFRCiFsG5EP1",
  "key20": "5ydQ2MpXY3WyUWdY5agM9avLHgBn3zGUfiQu1bLFQTrS67nyxWdWG1cLcwogbK5jfZMSzHYKwjH5zNTh47zn3tUM",
  "key21": "BEbFwu6qiYCqmtfgFGxMn856Nh59g1U9wsnwsMX2iC1rCwAGhwfq1QDPiwCBm7riMmEB5uRP4HWRmF32ZuZrkLs",
  "key22": "2g13Uws1tctFLurbFYRYuRhMKmqKraAm9Vr4GqE8LHpEC1bxYaqPyLyGE6BhnangpGEWovfkhkALrmGZDaF9trnH",
  "key23": "396xuK95kxE9BJLCPq6Gsux1AeVB7CzA2kXzdeQdnUMc1TwwukYiLa3S7da4pZ319sYLQyj6nJ1kmH7or4EhGQyE",
  "key24": "55mBqJySNQAbwa3S5PtcUFSqtTemDNnMW1WZ3r2wcWEh7Vdg4YRLLXSmSq9JHgygHdh4KWeoNQQi3ReCepfSptrt",
  "key25": "nBL9GZEnZQTtGWAUg5UfiKGkQzXEqbEB7tVRpsgs3pyn8FMYe8Ay75BxZDGj1nZ7P4GA2bX8BYdUnMVEioNSj6V",
  "key26": "3kWTW745b5zHRetZVUwTjCkjJy5ekxaQLvHrmUmJwVDZowAhiTJFtZCPBuBmY8WzbHudkVbBqeXyw6M8z6n6e6Vk",
  "key27": "5V7dm6TUHmYoqxJ8E3mh8odg67zmj2ET5Mxq5zQgLKFF5rVJT3My6adpapB2r4GWmAGBhPDdzu4oTC7wXGC6yuH2",
  "key28": "4jZrzPSBJuJFoVEzitRtR6pUTUUezwWCmE3qwd4B1No8QKdD1HYJKLWUVEQZF35jWYaxzCACZ56Yj61dHPJUk34z",
  "key29": "2iieHiWh9aWZyxUDXNaK3ck7PgRCVhr9ewfRnZXUswNyxn6dahAfL3sGu7DuVdEb55aoJuDa6Y6tEjXBaLw4DxrV",
  "key30": "2X8qr1io8WVAEq8NP72FZoanyrTPKcJEqKkuXXBPCgMLtC9No9VYrLAfPWezrC6VeHJm92NhC8w9YgzygkyUvBo5"
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
