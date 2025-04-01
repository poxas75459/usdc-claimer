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
    "HGua7MMoLgWGfA3ETLHbQqV14XrEKCV7dkuw25hA8777Yy4CH3KLUMPTBZGYFHg4jDy1UTiLchKPSKSQzJNV7HL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i4YmtWbXWcGy6t1MUDUbiZxgZM9SrGL5pJ4qVfhEsnzBEx169EHQtGcr68357gqkCAeTHnzjV6LEAApYtCYR6xQ",
  "key1": "3tfD9Gptz6z7Q1HqUFDxy2btNoKjByzHRwaR9hKBXNcei3xidHPpJrUmZKBg8Rbc2uHmoTofHX6Yca2yTahLAvAL",
  "key2": "29skRcAUnNRZDfxki2d6sXmxEALV66kxdJ5VdmP4MM6j7tqVgpAA9Q9qrM9RNTsqxDZ7JZguU3iA3iCtSLfbt13S",
  "key3": "1Jj6gcsQ34n2VSgNvbQenJy4imeSdHgiiyrrNtSVY9ZgnMyN4K7Lo8u393Z6WGtnNUKTcCwdaD67R5B3PomVzz2",
  "key4": "3vVDFpGRy5dhHfQmBs8qJ73nRnXs3FNxCFhwQfKX5i8PATo6nRJjxMsfhajUmUVrzNtUhSo53dNRmMFZxUHbikvH",
  "key5": "4eebQ2GF3TLDRdzsSoLoaD3fAqwmsw6w7ZgZqPBjE5MtPqe65UzVz4Ku28RGJ6cp9jWVyy7ptXqwjrSy4VtEdnKV",
  "key6": "4UjEuM263rTyCuvPT28U3w3vWED5tV2CNfL58VYRHcE5YoBd6ksbLWVKipHRXKZHLeNLEWLrviPYos8Z1K6EXGuL",
  "key7": "3q5Uy4dh7XXWwxENwykSWdEcPWVQTTASgY7opgMV4Jh8MCqkDwTnpGqbXW9Ps4p7VGqmGfyfDj27RfEthBjjiJKN",
  "key8": "5p1m2TL3NfZxxKB6EsC2gyDzsVc2fNTsB7PBYpbJg5uj83sfTdB5ErfnEaVNdPWRvWeJpZJsJddPakrS77X7x9Mp",
  "key9": "5K9o6sdcBeezZrLZmgFF5V5Md72JkVGHkrkGSJNBzipChnN19wd7H39pdedZpqFyTT62VkBqQZrb7mfGTG6Zo1Lf",
  "key10": "2DVD5HHjWYHqEqKwkJgZRNDVijHMirMMWv81efMPhh4dAMdTMGE7pDvnoKLyye4btiyf4iciYfnd1NQq9FDqavPt",
  "key11": "5RYMb3GHRG9BxvNbk3H5P31handae2VC2gAKr73W3FUfRwuSJHSxwi62hXc92pzWFAi9ESr7aEzr1qgGSYTvfuhz",
  "key12": "p4xp73d9PCJBctcqJpqi6rELeEZkKxLdpWFXGNX9TCPKBF2pRZkgismuGvQ5Rgzew8SeGEXPMdH6S47Q3GNgByg",
  "key13": "3myvzHvMJNjw4mmpLkbxYWYif77HVUcAmeNgMwet42dMcCrQMSqFVYEreTCafJjJ6SYtYwroUbDgwNaCba3gHHpr",
  "key14": "2jLr6cGU36Nf9shS5y7Ecxrj7hqBK8kp8vCbCkBeDbe5BC4yztGyyguPY8TuLahZ6r6inJYg9HnxM5H1Rxdf6Vj3",
  "key15": "3fkAxj6Hi9Lzo9uVTom5eb7SG3YJYuUcrhkXfQew7ryXy8HYQmmXVYQqvS1FMKUd1LmSjz8JUtni6twLSSuvpw2E",
  "key16": "4jkL9xmTfsPnxQ9rdncqGRzJqiZP5kjRJ3ZBgAPxLg1XaLr8XN3HRVKi2LFATdhj7oiTDTbGkQMfaik5rRbXzXp4",
  "key17": "2przAyn55jPuWrkikT8RP9p4SeaBaURBm2N4Sr9h5FSUUPL53VpWtqeVoPb8uhDDSkPMwSSAQseYfwraR12HfJpL",
  "key18": "2ARAckEwAHXTY6wQERHsSJzJ1jqNnGCfd2k6sxLLgu6ztHVhSXzEcGRJehXDjq4LwyyLAfqQm9vYDa12eJhQtvQg",
  "key19": "3pEQgp4Aq2VTL4Yxyfz2YAxQmqNstWPtoFzrhy84xfuXHo7kDNMwkqi3vFtBA2Jr89eNSkR2X5UsdifQBdfAfUS5",
  "key20": "5rDxMBoE464NU4D2XEny5ebsUP4nTbdE4R1HfZpNHFU4SPwZ4Psk5shcK9feRDs5ToF6M9sCKaMLo1LoJjViSBKB",
  "key21": "3SP4cotaDrvZVqAdniEAUMgaJix1mttp8SjeL1FhLw1yU7tpBeYx5zNbcTDtrfPmbGb7sACL78aqptoCdgTzbrf7",
  "key22": "znmihVWbD45YFSMHNq5RzhvMnepZKc7hXcR4ebTrvvhrB6WgYu2D4nSNCBTL3rxAw6a65qPoTLXXgBJSQ3k98fx",
  "key23": "5Mcy9NKw9mJWCLRZdE7MzAH6y6BFec7z5xhMnNsKNhfuJq2dePqgVtX3NF4KKHkX4pz2F4BMSsGMRqqP31EytUrx",
  "key24": "5yz4goGUjNLsaN3oSX8SsBfgm6NzgZixQiPMcGfdGfHJeyYxy5uH5dogJ5PU1FM8GrEJS5HwwW9NEZ8EvgNEPZDm",
  "key25": "3AhRM5gxehMkNr3KPpq4muFuutxz7Fb9MM24S9i6yooHccwDYJJ4ChHExGtNyTD11mBx3u4jKNHZrRjqczN725Lp",
  "key26": "4c2GhBArFz8ekWokew7UMgjudXBmW6RExNL5LzK3WmbgCCQoGZxEkaTpjX754gLr5umwTVmgpdAGHbW57yC3KFLK",
  "key27": "4ZqE713HNGTc1i331nwWiTi565DYnWQ6hp9QPoFDFYHmPrMeECZ8nkSrT2uyfHXgy7LhWeEwcALVydMqaSNPbM1e",
  "key28": "4vgzEwsfxdX2KhMG3GRErGaYJtgj36FCgCj5o1tW4jazx5Hekx521CVby2qJnfXMJRBnaMmX11LT9YhKjVu8puXX",
  "key29": "3icRtnodcg1MyvUXAxHq3ibURj6LHy92bcYT3tqKdDEAgsu1JupXFuCfxXCzZ25WfhwhV5tWAjVkG1SXY86thgTo"
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
