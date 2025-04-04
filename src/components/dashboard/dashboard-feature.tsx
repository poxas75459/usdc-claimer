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
    "DeB8D8DQe5y39HeN5MWCiJhGcSRqcwntLisUBkdrgwus6CwqYR6MMW46VvCYvFbuConyCYBWs9rC67Nu8UjSP3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dQCWt2dyGtL5qXriL1WUbPMxxiasm479iSKiFSwd3eRmDuH8Jm6irWCLioCRFVLZs5RaJztVzU4a4zxnXQJwXSW",
  "key1": "2GmBKNYWpvUMn2fpTkZiJbat8oTmXX3coGF63wCvcVFxDfQZ5bqXEd5grwNFaY1AhhZAjWiiqhbFSsH1ZC7HQtJp",
  "key2": "bMC7X1p3g3X81Hp2KETq4rcQtyVVQmpbYHwgxpQSohtzAFhnDmE7DmKMtXjvJsN8PZRoxgcE7B5i2hzveRXUvLk",
  "key3": "5kWjyDGGdUEp4aPZFn5PxRCiQGhgtKa5QhR2xg2Z5odhDnXGkfhkjMPSABFHTDBZquBVzFYdWiD5z5xsw7xcyd2A",
  "key4": "2456F7dmMLwBPWzjuw5G8SxRxPFk43QpWKuXviyiiv1jD1LSGLGBF7UyceYGLrrEACsDcRjE2oYjh1y65MWHgJhw",
  "key5": "35KuHeKmrzViBvBwDg9jiiVFhfYAc3wbGVm8egU3tVPffUWDEatESbLds81twk9P2qmrFLM4utZ6tDT2e3ox6JhY",
  "key6": "4nBsHYwumWhKgC6keFAEuvdgdEi5pgoVxCGF2e1BbCFsDrwdcagpyQXz2RyWTSJAYhSmNTatq6sKH9WevC4DqGgh",
  "key7": "4SqdAssvRDBTobJYYCAeZN81ZKZKGFf1ePHWy1iqkg7BmkbHgDoVoteB1eaW7V1M9v6tB4ZnFeH9ueWeiP4Xmwdu",
  "key8": "3CHSs58ka5MNFH47RYPuHAfMNAHEU6CToBQSpAcC9yfV2LAnVzwqb4N6Ptj4RB3RmVLVS8BmWNwSjrupSHFdGtf5",
  "key9": "3G3M4WLU1bDypNx6DDgRSKpzZNThTqyeLBSdvrezkquM1Nd6vrAdiFLYRiK5471rsofNZyuiZBdjgJ44rEW2BCzp",
  "key10": "2BhjVFDcH7C1KgP3PCrFVXQEJCf5M3KWonBbi4H7p4w52ugmzTvJhUjHbeXprqPJkYcDR1Vho8W7VutHk9khc7Mv",
  "key11": "VMyFhJyKC61WCG74sEwr3vaMK9FYU1w1zhSjsuxBvXEJjtALjZNQV1cVRnyu1yBUrYCvntvsM983VrQDe41goCa",
  "key12": "46XQ73sG6v1YhigiHVCT1bSitedvfi8TkwXrBYiND1EKFqhcA1y9ACmgwr3HQHk2WWmMxRAzDUe29YuS3hEq6btf",
  "key13": "4AZQ2PPdM3s2vwC4isKaLnZN3XdQ9TeEp1CERDcncbw1gtR3bNFsXva3EjyVpHWYrabbqYAayxmtvD16u8GdDVJf",
  "key14": "431GLZjPKCqzEfPi3Xa68Ew4z8M6426vdCcUsc54oaFhKdT4aCP71q4aWAqNqj58nzXLwfuXyd9DGovJccBJ4sUW",
  "key15": "4KVohxT9fKu7kYaEjUHhFYXZHXVFfJjSBacVZ7sU5g1brybh2RoUuYuE3V7jUw5bYhmxs4EAGe5sGKNGbsNHHd6Y",
  "key16": "41E9iescuoJDKLJNXdSyAWbubN3imTPoapk1KghFra5Vw9cjPsvDY8txUtsuGqSa67b9HdawaRb7Q4Xr9CH5QgHv",
  "key17": "5kxk8SyGHHZWdVFgCor5vXxgyGpmfdbU5EUgg5cGv2texMWsVhKB7id3LRX3erQE1fhte2BMy9QRemxTt4PbG4FJ",
  "key18": "65XoLDrHcqAqhEShKhLwgJgkaDR19GrT1hxqoXCnsZCwm3h8f4ZNhvSC7U8zX8u2dqAeRyGPAFTs8au6q4WAaFZc",
  "key19": "3ZUgRWiAjUdbywB156F2CqsD7f91WzmUjBHaA1qKVoQp1p2o8XNGxNRf9qHwf5H5rrmc1xXLVkFU17QPYWRWFFzD",
  "key20": "61tF7oKdKSxu9ydZNMmqefMRjc6LUY8aNSQcqTSKv9ZRqNwpxzwBStE95NJpgNeFgXZfoUdMykE2WpR36Aaa1Xm8",
  "key21": "4wLuGFGyttNr7AE5dpA4bReyVEzdVALXqqPR2J5tXMiwSoBeDDNdriqFYUMZrN1cW6UMnKtSw1NCyHG6317cMHQW",
  "key22": "5qazLxnfggHLMh6MihC81qxP2TkYA8H5zw2eVAUG96kN34jCEm9zZaHs7R8LmpxBTfteUPgh9ivnKV3pK1iRNdLv",
  "key23": "2vtPDokNVp4k6kzej6NFTmU8976XXwDk1iwyGb57WTirh5Fjs8xcZeTJ7C2321whJhMGDnvDT4q2HU9nVTD2HQcV",
  "key24": "k4pUpxqHQ18i9ouogREJV21rxBBayuu6SoaAZU87QGAx8VosdLCMj9EEFTGQr5Hyu1VCLuiq9jHCmNwr8H4CkzR",
  "key25": "2VSRLCvRZHjTy9dNGa2dJZmbfDWKKJh7nXgCAUs5WP7byyQ5xzTJCoqzkW38pGvyDzNiVYz1t11TbD7tMSsLMrko",
  "key26": "2P4dw3uuFW2h5GiHrwHLacFzqbeAc8kYt58WARrymiAoC6eVXvY9v9sUWB5FhrUEWNFa8iSZxYhX5AeShvft2Bnx",
  "key27": "2e2gGrEkKWiDjNFWsX5Y73hMq2fHwZMab6dUyGm2DRPUwoobWswQvwLJYvKbQHqNunHGP1F6hrK9gm6taCEhrr7b",
  "key28": "3RJF1t2uVL5FVWyv8BA4VxKykDTuHNS1Nrk1ihsoNaDAm7vHvvEsdVMmQdrF4jcoMaxK8ojz68kjNBzTYb9ehao7",
  "key29": "3JamvqHRJX28nAsiC1nTRx2sYa26DWx2gZAsuwoKA17TBTYpoLcL3q95tt5C91UJoh2mfWGgT7dw7Q47d3Gw1XvU",
  "key30": "fU8YnapNuxYypkbLo2TcHusDxPQ9NEzcdfQAHupPxgTyFWttacuT1cM52n74jFsuhz5WNsgNBy1CC8ZFUH6GojB",
  "key31": "2srzsg2NVQZwMDEDcgPMiupVnE9N9HwQzQWCHZb5vwrurAotNrN7pQqygZJzT2tCwxo3LcCKkYgRjEuNcrcTri4J"
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
