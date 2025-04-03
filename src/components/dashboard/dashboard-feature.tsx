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
    "3z5vmpVcCCVL9NJEns2fL6AdMu32zrNQP7FxB2mG8KDNEFyMKkZ4RjmsoppS6NpuR1oxEk25gVP9ii6TbTU1JamR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aEQWyQTMnE1LGeqJoWC1jQHtEdhEfGJAH74spFMQqYpJ13xNt4ZfrpQLofakyaW7Q77D7kQUqHWeU7Cvo3tFAT6",
  "key1": "34iKHFbcCsktNUVdRPG8gfvSEiHLi7zH4yr1yVfnVBsWPq4G4zW7ZrzGSufFM37VVFg4H9aKsodW3dveBR41d3iT",
  "key2": "4zaTSvpfPTW6CYfyfLwRjSxwvojC8s2HJcuD2WhuBrh4ucrFp8yS6YNFhmwMDGpCXxbVLgdj65AYBtow9vZhh5a3",
  "key3": "3M12XN8FYj6v7ngD3uW6pT9FpcMK2ewJJ6THBX4TNY7WDUUdNnPVC3nkuLNynAi7XLFAxLoQHQyATWEcnDyTcZAx",
  "key4": "4Xhr4EcNSqsnx7a4UA6bPCj4DvnvtPzzqvM5XLyjgwNM5ebJRpmnUBgkD4thZARbJxMx9k6Gc3CgghV2ijLjGdAs",
  "key5": "2PZdReuzT8V4mYP1PNeNiJJivanUuMbskCC4z71b1J3Zgda7fQUMveCxnCAFkrZwhoBswGvA1jGD5AAN33aseMa",
  "key6": "4dufLNp9iowQCF9DTpYYrAzCXJW21sqKSMLs9ywoy5Z3b4gcizAcyiD9dNKkc8EwaM79G75ZKFMKjDVgFQEAXi8n",
  "key7": "2x2Geps3NLTxxeuHP2ynTPMGXMWfNAfLKbwFmMrjTmsrMsyvtZyhgzeGqRh1gppXaNrvFAmGDkrWbFebzD7kwkys",
  "key8": "Y8PQxbyo3W3uQpjGdCmVys1vLtQUYwEVDYeq1qULoCsP3Xs2oz18THAeZZak2bnSf4qmNjztASScXfu44F8m8wy",
  "key9": "3rJT15irEHcHhq6KjRFgQuNPYhNXLWrdfdL1zh6R1isCjR3MXjwqL4y7PxATD3kNr7MJShHiqV4AgVY4hxffa2gQ",
  "key10": "5xYMofo75Nuatq5Fv8yErxDKsTfVRQdyhSqRbfYR1Mstm8LA6wrARp1MfKAEC6uwDxyv4xH1ws6P4pn3bD1xDFZt",
  "key11": "DZhssYAaz2hcxZUrwnWQE6pctLVz5ZCgFiaCZ646m2bi4eAPLQ4tDKNjYyjYAKEpAQFpnQHC1NnrpFjmnY5eUW3",
  "key12": "3G91RpSvdqQ7UVUemXG8iTud9PSQE7nr8fBLWFDRD7ZyookzepqaxytvJTFtWwczHsfQT4PEeJHCFfGnawRMUX18",
  "key13": "3Sm9VVgi2dCszaysbG3W1KH139Xi1MCHFh2o7WpiZVq8vSo3uLMKfsE6YWdXBqTHNkMrRkxQw25SEhY8bL4Z87ps",
  "key14": "3aCuuDcHeota4pEc3XhBGKMwnKfASZfvuAEtoS7WSBoz5u8faExKUJkUCkce8Gb6fKcSpvry6nuXTKf8ANdmgKwg",
  "key15": "vX59ugD1kdLhXxezzoAiBGvmTppssnCXM7TBdZArmdTF9SUxbAaCw9JTL1EGfTDZNNJCFV2dBNKkS2zG3v9ukve",
  "key16": "4jdPKGuKjxDhLpcUubTHwGxbsDmo3p8jBm4yU72fY7qYxRrBB7j9kV5wVwahekbxEQ81FvybvMZfrLdMcEHM4EzH",
  "key17": "41jnsMMxMrumAnUphQ94E3gg6L3SgeJLZ8qPXcKMuggyPer95zLijQr1pcucgE6eCPYPPBVMncLCdDZ1xB2xRHwc",
  "key18": "2itxnDPTNDKbW1v3T3VzW7LfZwezmwb4nkC3AkYDzasvyw3AoanYaxUqHyHeFYBDwbQEzuCcwzc9babC6x1ewDx8",
  "key19": "4DwR4sp9pEr8H6nX9U2NjNTE2aJQTnymumSyjJLsoCZG4uHhtmpYoJVUmFhSEknsJseL7PC3nz85G54uYMd3f2iD",
  "key20": "3xb19fSK2kkCKfnm2zVD3ESPFNpfphUafhzxadTNo9iAzPVUQ4vhutTk5pgkFyD7Ubt4SXJ78c6VPt7zbzgbSHuQ",
  "key21": "5RCeokNkRU5NqYZMcHgqV9D2V3WqmRF1YToTh4ERqfmqnrrJVzXEjxtTRrS8npTGbwZGgwFU8EkHTYMTzjjBVuxa",
  "key22": "vLXqKiNZkUWPBt7zXbHUKtYju2K3weLZfFD6dq8tAXdUiUArRSY6wh3BhD4iWiTjb417CnHuABVzkKHwAQpK7s9",
  "key23": "UeDZHpe6yM81C51FP7SuVyJ9Y89XWCMDpJXo9nS2ASLg3GjdG4Wp5Bjs6CFmkfpNKkWU6zkQVgwFSAE8HZeuvQ4",
  "key24": "sA3ZR42doSwboTWH4BRb53uSKaLYXLYNXuTaGWo8w6Rb3jqxdjr7Uh9ynZhCRweNRCWWGE5ES34RT3MJ6SAqrLB",
  "key25": "NEWb96uZWYAgf3J8ezsofdXJbz9g6ocH8t9DwTHDqHBAVWBc4FTAb4Q2HmwH3repn9kAkWtEG7GqLzsjPYkU4nW"
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
