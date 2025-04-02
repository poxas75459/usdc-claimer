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
    "3mVY5H39u4fV9rStgz1PwtNxkvuhaZvUr27WkCxLcYEfU2P9qfZGyunvxvSbishgV87rhVEwjWw4B141UhEmsgeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BoMRU2scozd78crZC4iJXDRUiFhKSkjwXZhyyVT8V4ptz8BLzhkUS5LsBhpULHLjJV5VLqRwuTo92XjaJ3g1n9X",
  "key1": "58aXkEWh3USBW8C8oZwQjsPikJzFXN1VRVXb1MFxDpLxb3WGNvLod5ivjag9itH3QhoNXwzheTiBQsVWytqoDQAG",
  "key2": "xkBdSoNujJ4BcS3KG8oJnz9owugJujNxxhedV8gzP7mnLDxq79PsggoDpFHQofexJfC7UwTkgZY8XAFCpbUA5nE",
  "key3": "64so4NdPWW9q79iFUnk7GYyaGELL2KuuhdpnZrqvisrxwgUwPV942czVgPoBVwZjnkizMKbMt8iJ8x6Q2zspseAK",
  "key4": "5ZZkNBy8oiVp3mRZRavaHAFUECxgbE8QENBbcFVD3XZdhsQhojgyyDp9wa8EuSEX51XfMyXKA8km2cEc4e2rcKwt",
  "key5": "2HCiaazur87xm2r9W46ceh1HkHEjBpqQyCKjQSqHy6fUTViMznmygxR3VheDZALrjCzsE8YFpDt4ozcmkRSnQ8CS",
  "key6": "5bqnv6BbJJKYiZJs91pxPWVp78kzo8bAyawnp6c5L2rsTTVkTkWwGwyrCq7Akd39NHZrbRkRNYVMDpe3vPpk7bxm",
  "key7": "3TF9mkAFDK2JaRZ93voqJ2RF9JapzgULKmFaGvAEW8mnfsj2sje9VJy1x8L37jrR6TUxkFvVX6iWwddYAcr1UPE3",
  "key8": "4se1gjVv89WJsHD2S586KeuQ1zQfAgyRZ6N3xPS4HU3N5A9RCuhWh1ACkqdW4EQ7qPkU9FMHBQQgSRZspTUCZD6P",
  "key9": "4ouUNJudgoH4uEqxcAst7VwsiAp7asqmyQ8kvpQgNh3ij2zfxnv6Lim43sFrNSvV9MECe2j6T7dBBewhSw3nVj56",
  "key10": "4C5CvKiWDURrMVP4WQsqAAz9jNnHecBx6PDPp4vqLWcKr87pf2asiP3UJ4coeRZvFoiK9nXDtpaztjGBKJa8iJY5",
  "key11": "jKnPJu9YknF9RjrCHPoEKqVEVCtbMu3NMxpkRMmF1VNtF5gv7Dg4HAgRf1DiY2WGaCUVD9rki477cSGwS5FXNsr",
  "key12": "3yMxqjoc4P3aeybofAxHWcQbBJ5skuZaLKuyy9Q3EvGdoXWDonXPneVT1MqcbTNfHEZdE9PNPnqcD6GotG4uagrW",
  "key13": "5G2hubz79KsDuLhm4RtY9yDdKtSXKeBVRTubsCEpBzaeeTW8D7qdL9R1invg2cUHbNoEg9kW5hQrSuSvUpvVKnBQ",
  "key14": "Sx8pVQAFzT1XBwz8s56kcajPJKioRcf7qXFQqgAYZuocJY3WeJvHA3pN5k2Swd5o1k5ufHzfFyH2zJM633RDhp9",
  "key15": "sveNjk2zdBiwaYXRP4GwZyyNJj4uKhp9MCuKzVPziJjeYZeGNSRXBiuh5reoetazLfb96ST6tErFkti4xkE8Nb5",
  "key16": "5ar9hZUkpawRCgoE6epJowRtbzcdrJ4sBKAXbCxqGJVC3pGSCMjGHPkZXh4khHoYfiXD7KeQf67vnNK4e7ERHtxx",
  "key17": "3ENavzhyi8t3vrMTSbehozSesxzkXtvycBabfZZiQisRwtcCj9taHoNrPjYUEAQ4A29dRpAGp6QViY1KeeapWhkm",
  "key18": "43JtUdYAUvGt2JCNy3HeXkmYRoFXLaNey9m2QnRTkZaji8BM8WwGECaKX1jAmmXKTeMh66BP7nNASoXX3vdrUgK4",
  "key19": "4mo9q9JRk4C6Qc9n79fXvAyJjhxNXekAXaCSjA87EijZF3R8dTtDUSnuyQGLyU8UyxA1HXZMQbRpHzvXvtsYjQDy",
  "key20": "5kzC6joenDx9tkHz8nQYkQqshLPzsxiAtkV2Qcx5tsqZpU9GwB63ehNafZ39tFx6KP4TRmhuVr1xhZR3szExkpxN",
  "key21": "4UXNkfVw1R9uApbYW6JxG8ACft1ZbAP3gxcYRAK7QKivGTdxWvn6HzyKH5svwjKXoe3jD2gdUVdXrWRUSXoUnABo",
  "key22": "5FQcz9PWWquET3nL5p1ddbKL61Xm8uRxkKnn6W2VhYJ6dRK1UarRwMfzQECE7SStgYPV5tDVPbLAMpcEQBba6JzT",
  "key23": "2hHJxHnSnH5SKL9jcn3HCaZj4VCsGA9vvjJWj6v3uxJhv5hZHYg7W6XvpUd24xVsWdTw3i5JiZYNALaXF9wBWaQy",
  "key24": "ARa1W3Jw8kufQDoarUExfdJEoMSABH27v1Mm5RPfxqCvTNuNBiUXR7hm16hGzYrBDiwaRRcQ4Rg2xy1sWpnB5u8",
  "key25": "2KRZNPDDQxAFHQPC8voKVYhVsSwQbmnKccovArvFbGph3psYpsn2oWGwrLb6dekFn6WKtyymi2WerYkJnDFuFBsL",
  "key26": "5utpo31ohXAQaBgqwvF1eDAAQzSUanR8NxMp6jb4wy9LBXV2BXGvSzjU9dH96RvRm5RVXcQFXTKYJY3ZZXfA9nrq",
  "key27": "3du2pBLbZe8DkGN6bAxsUXZTpNL9rk3emhyH2Kue7VbWx9GPu9DnG8w5fPqTMAvsum9HN6sdJ19gMP3aCWk1Npcm",
  "key28": "4vShNp4zeCpmzWoirqDqfxjjaahW5baVi4rNk3Fj7AkYdn52wCDic2bsjQsGYWi4yqvvbEptGGCCLeZbwq4PB3y1",
  "key29": "27TdrrjiLLFR7y2hkWdVpcSZWKmszQC68kem1fPjptthzRo2DBFYYZCH8eacSwFrKDEDb9QDJJCwXAoch7z337bK",
  "key30": "5ZB9sAfSqDQr1BvumbMYkoUVo3wsRTU9ANzc3UuxKgF7ty73hffWx2DYDzEFRwM8rtbcEhi68jZCzLUaFEJPM1Fy"
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
