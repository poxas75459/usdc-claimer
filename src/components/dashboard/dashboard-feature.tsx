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
    "4qzN1Ac5eX9oL2y4N1k6yraghZxvTdmuBeu23axyYRsaaQcg5mD8NKzctL2HDxwgga2sPmkRJ2jS5UBSKvssN9sJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cfJuFEKWbAvhqwzQHHUvncK5QoYTwFx5sxSNKm421BcvXW11nmAYGccXSfBRqYxc6Zf6XbtvFqtsKyuJRs4UjnY",
  "key1": "3qKzAqwFD8n8K1nMkzVgQx3bHq3p8ZzAM4xhVrqtEDqvx8AUngMjUi3tYK1qRHonF9RFckHhEGsp4RXe49Phrwqb",
  "key2": "5bByeHaqZcoFyQnpMgyhFzBLUqQgvAQM82AztoGv5pPc2MwXosWDQhKacJy6UaKGn8LpFf424up8vESq9DERir25",
  "key3": "4NcCwFzRAqGayGkgZ6JTXoa7fRXDXJ54yosJ4zoVCUQr6fKs6MhPX4hzABFVifkFDXRVpQdo74TCqYe1BZ7Gvxu9",
  "key4": "QhrjHThHC2ERu8P6pBTW6Ye1uf7th3MLnW69czSiDyAe9LCJAeZr9bPBDNrPGWouBE8ur8NXmTqZzwaCiFxF5qQ",
  "key5": "61EfXrAiVUBgJ4TCXmc7wQ3xSgfzHzfFzZA2CyvdQDzXoUWsy5o6BoZ9JyxJ7UWbxS4YzN2gu57J7DzSv2Mx1zTX",
  "key6": "5zZSs7mqajCoGHcnMGQCv1ZSBtULiMkWVyM2euMcVWNzghqnZvKJQdn4EyUMxygcHGW6mhF516q8qSD2kurp5AMc",
  "key7": "5LjZytWrTFfrcrX9vNUyS1hSkdKooo6fpoNutn5HokgB4tc223mBXW6eMpbeV4tAa2HBamWU6zd5amSnuuLxYBeE",
  "key8": "54W23WC5Rox7vCseLig4dFsQhdqNDGDuqmu3H9zs7nvdEFeXUiJpx1QsVWArYaMvMhwUUUemxSPbfdbLwzJ8BLRz",
  "key9": "4UmfcoNuPR2wNHjY2g4RmqGvLgKPARGijZ68TESWz4e2wnBwzgfhSJinJedBEWg7fgWc9XuutLjiLhPgeGqbkADV",
  "key10": "3rwgVUobZH3MXQ5dZdPLK7KHrMGkSRq9HpUy2YRMRiK1pg1189B2kAnSJqNmJXmaZmHUDRavEZvima8ginFkDLeg",
  "key11": "5owKyvDZwwA7ed2WoGopz9jbm2HF71EtMS6SiPcjzsZnThk7yXignzed16BvKt3QFm2GVHXygZS6NHG3EUW8AiL9",
  "key12": "2Q9HT6dYGPbnqRZeJg3x3JB7EJEYvi3pLAQEuDfuLYTGDgwyhaPV839KokomztSS8QdU8SaBNMiajj4qijeBTfmt",
  "key13": "3SXcKYenfh53YxP5i5zmNx4CQc4cAQvhGfUaqLroSnHpSrUhMjGT3YCrCvxXUdykBSmAY6i8KHKeESgc8A7od6Fw",
  "key14": "zjaA2c4xLUJXkqVHjo6SE4NdQ2ezDtdj3MBbC6HZmLUq3SZXrbL5PH1UywPi5KPbWBLZZp5Ex9mUMyt7fpyMiLE",
  "key15": "3XycFwtCE7eUyyCipnwxS1xtGzbzghL11Ywi2cWxMPQsqJeqTmFqd2ACfpriJtue5aHcRuE6w8uNtAWTqxXu2Nex",
  "key16": "4o8bxWappqNJnA8E1DppdzuBy65rNAavHUyo8w5ZaZpuAj74U3Vgen9nBz7pNdVRo8oB6jpkcgzE2CQfNhYdHGnZ",
  "key17": "9tNF9qpDk38cp6q9thcYjgv8vvFF83oMBxqARf86dsjX59aNXC3gugqoiNiYSWthD91iEXwmrLzYS7CeoymhkQY",
  "key18": "3yb4SiDstNv6Z2sAzk67CxQEfnTcrKbBs7LmJniLtUxRF2Wh5CyUWk6xDyKomXW2x4fTKro6vZWgLDbFpimySCap",
  "key19": "3CAQnWTDRryDeGAcESecAPXxFNUL6KLevUoGTscH7U6bzgmcmoXZrWXn1zgjXaRFjoc34vKiSijx9RCSYoANnqnw",
  "key20": "66JBBH1YMrQhgmxp2r5AZmThPoCviaixe85JWcmiFRVV4yt3hWEg9sgPKXsQmPbMPAb6UhpZo9mLhEnkJSszkX5z",
  "key21": "674uj7VTshrGMvQTaW3wiNPeAazBjv9nWCjz46c21ZaTt1D3fRkvcezvvrwKzZHCHWeBHnXxapxneRLcAJ2eLMeb",
  "key22": "424Ei4rxLMz6eyXnNwRefBYHfozpG2ZoJSzEUKUahFgdroZznGVT9rVr3zVA2FXcFp1FKWqjkRH4MpetTg3VAc2g",
  "key23": "3cZ6QQzWF26ahhu8waPYQLGmfKq7ybQ1t5eKuAx5AtuVoFZN8XiKBJa6VuSwLKbAJUAeP1brpfoWxH7deMYRE8Jy",
  "key24": "RKSUgUPtoKsR76cnBWqZ9dUj7UYrz8Ci5L6Dpa6X79TgTRKmw4LWvqLXRYyqLFZprDpNjE8wkStM3F92bMMjzYw",
  "key25": "3hF7JX3WpuA3Uzon4s4EJZNUg7KYG3qEQBajUFrytcR2YsLUaYg3CpA2qoZNgs97iLRLjCGunPV8TuCyeafo6Jyj",
  "key26": "2vspk2jj55qz5Bhxbu5ijQMbY84hughkHTKNBuGufoxdBcZiKbxmT62Tweud4jMSVBNtLqb7MEEzFfRs97W9W7se",
  "key27": "5xHtbjKwg6Y98MTM2rKrkGe5JS4oesiBNn7cWcEugGwNJcvTTZU5LaEiT5ajF7VEFEKysJZ26sznNLd1EgZMWpw2",
  "key28": "3hWVpofGcnTDK6bMvi7iRSjFdowz7tTYE9vZLXbouNPCamCqas2ufrd6CL63i9NtKsRgcv7Vd3dCUjNcLn8z3G7L",
  "key29": "27NWgKdPfK88FHAnAW3vJckcTznkLHmfeTVGPDqy4tHYEv6rzpPCZyW2on8w13ezpiuEXHsc8PDjQeQ6KHeUQqzb",
  "key30": "3p7GzQczB4oQoHeAcwSnYyfvs58FF8L1HLWiSvfC8V2Pg8QVk539zp2Pm1cKqJJT46RCYJszq98brm4soMyztSB9",
  "key31": "3Zus8yqw7uqsTuEatiuytP4XmASyRv5RW8G5HdRgRSduECFctT4pVW7xkf5i1D8qBp5msLaZbsi3R3hXnm36PZUD",
  "key32": "5shNvcXFsDnYfeyKdmPWH9BK2E98WZfkyqo9nUVWEtU1iVuuC5dWom65N3pBbnew4iXL8iHhzPPEhNrGoY1dYuHf",
  "key33": "4KUjsMQSKQ4aRUVc4deivTvVFkpghFhSUBBfLp1hsE11uongVeooq95zRhT5i6FkbbFHWRWs6M4BuqDi1aL7xHCj",
  "key34": "57C6uibxzKMpgXp6heTjYjYc3DQhz9h754YHdrzhZh96Ug3knhKjBmAyB8B7MdXYRyjqMT9wh8bdDppn1G7mTbHv"
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
