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
    "22FimD8gNNksDgPCvaaENge9CL2hGmpXUNoe9H3GPBoirG47PDdjoV5GeuBMxPZq22Shd5V2SdzzcLgHdQhTswTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aFjnVbAbfpQfnP8wV1A2i9xPA8XGTVPpn1DvDDvy88uicWjYjPBgD9iKKwSwjPGYTbQ7T9j8EyXkoi2uCr5cYxx",
  "key1": "2geD6zVs3x2uSwFatowx6EoS4FSZkv5jyTcd28DVq7o8eVMVTjikyPZsiUzhQ4APrw8uVpFB5Jy6PKS8kK2f7yC3",
  "key2": "CGhHsyjuo3TJ5ajWHqbXQwzsCZzBh5vYkjgibFHfSoVPbx5KhZ4PBjowAn6DbbR2YNTUvUMyBB13Himeraj2sER",
  "key3": "42VKxRRZTN2edbQBVBjDRfq714nx3Cr8byXt2VYoB54DU6VoMDRUxQFnz3XG9cCiUi4JYF7a9Eya6o2E31DTUWma",
  "key4": "5jGZuuWQWB6SZfxvQsBayvq3BAjpuenubcqHi5wQZ9mvPRAh4vVfX5bYm8KUjvz2ap9FjC1wyiutU6oPkgxVJWH5",
  "key5": "215sbMaia4gjpieT6m81npVh5XvriYRZa4cLmTGfJpZhXpwvBGmz38CvaNyTrASeghi93ivV3QA2ffCDqobGX5X9",
  "key6": "334dBdKE6nJbLwqJaKDe17u1e5Hgj58KLN1ZrFtFgc1knPdqADQWdaMRCUvY5ZUAXtGPUDfebRqmY2xR9ARAuwdB",
  "key7": "3WmJDsXKVwr5ioEUJ4jnkHdv8AhueCeM1PhHokVv9hePKmCeTRwdKDWYn7bQfzSQvgZFZdVUUgAnQMzcVV7Bgm5M",
  "key8": "j9tRpejTTLt48cEWX4DTGMCrDJWEHhAzgcEKSGXUFin2d6UnqmA5ar6wBiVXL4AN3DX2QQ418w5fvdkSQQ6hYdk",
  "key9": "5dpiyjTvN7eRTYB5Kr8rQhtr5WgueZHBG3HTSxnFsaeURZFJXxhpva3MG8Y96nV2W9KzqrtHCTAUUCGzd9TSi8Td",
  "key10": "4S1dDrsjdFKLBRGSkRR88zhPLcsGZC5huBHFLJR4HaYEsLJQeiFA6QLrRjG3AUtmwCFNnXQkxgRy86dJw8kYwb2",
  "key11": "wWDiGNzdPET96Ww8n5igH8JRKSiGoFtt8gpDYg9dTnXXNpRiTmLWGpuDd5GFajApw1WnR8DkCTcq6VRCZnyJ2ya",
  "key12": "pavUhSPZQAS6CY1anZh33oAXdcME7iXaQ2M4Qhiw35YYN9hDh54aRBietLPQMY1URZWqK978SouU9KyEt6iFgFB",
  "key13": "3hM3pMDWRCw9fSerpyWZBdE4XAKkpd3qBXwQoKUKDVcuDnLuCPN4Fhx6cCzWNyFSV4cq4o8z2GrWoVWFNtNKmViG",
  "key14": "kDE3DAcfnuVqRy9EjECpavDEY9tBTjCpQZDmU2xybkhH8YRe2CcEsRVfNrBLTmaqmVsuwkthYTTjUskbFbGWgd7",
  "key15": "3x4gLNgitaEkR6wkEqCr6qfiUjdhK7i8esSfRpuaiML4NUDTYZ8tFZCuuUhN5gKqRHnDwvsTPQEB9yUVP4wpRGoX",
  "key16": "22ZZVa6jqxsmkmxymFswUAvxGoodcT7CxQSEq65KCmoEWe64CcEpAKsPax6oCT51KZszeXpeCtFNJQQfqsUQcygx",
  "key17": "3LuduG12xD2E2ud9Bchq4UjM4Ngu4s5y9uMDCDWrBehnYgRkrHB4myNx3aLs2GGYp6VySHuRkQyBqShCjzASpma6",
  "key18": "e5HG4gYf1XxqoKcDFZSQePnVgffJGiADtmr9VobwFjhAmaTpgYGp16PiFvJaN539K15eSqKg3zfYZ7r4uw4ohhQ",
  "key19": "37vKs2cYjSP6GLMhvhu4KHRKoPTUyHYV6Vs4eN9b6X168o6xtAxQ1K2LdgaF3jTQ3ZRbWmKP8RuQDBoyGr92RVpG",
  "key20": "SFn4hCae57VwVEXDERah7PAs8RSSKh3ZgaC7oVgNJGSKQGvDRMMbGTTiatPNsMMVjnBgf19YxSCqJR1ygF5xg54",
  "key21": "2fVDjU3ATyaQD3oket2xv98qCxSsSXtmHA4oeGBL5hRaaDGAScRo5RHLS4xug55ywXYrxPCoGBskhaoRL3cmFvLW",
  "key22": "2DzomWRjaydYQyRAVmeqdHsuUUm2ctHmMNwGaW6epzBx45EQAr8UBoc3CtzRChDyuFbNYejasQVeu6tL3RL91qAQ",
  "key23": "2KD5eMXGqYGcoCD1cCVEw1k53FscXHrmJL7gHSaVNWP1ANeU1DrE3E8k4LEW4XBgzPth522fcwJr1ZLFNz85CxVo",
  "key24": "4hTK4Va4FBauawrneMiVhrr3nBkVB3LTFoDpXmKjiuhMj71oU7Fvqv2KBCGA6yvZYfwxnWJVvdhr31yP7oXMSofh",
  "key25": "gAAMvJ69M3tFyCGzjDwYD4gUDQFTocZokA1YdYiqZqfCxurpERsZHWJhs4AtyTUpe7fL7R6yNWxU2YPYZqbDyB3",
  "key26": "2aRcLJEwqkdUDfSmHsFtmzT2UgrRMKLN6kwhLgNLakztvLRgVnZNuQdgbedVjnoUhqHoPYYYvkqdhEGCxfRRvp1E"
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
