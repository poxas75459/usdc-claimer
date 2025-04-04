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
    "5ksTKKNuaeJteuQscrq5Rnne5eC8vWcGu3WihF8ANDtmm8xbHBg1tMPMJksdm22nGC3vkxKQ9w9MvjbhuDXT6qEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rwZNWRmVBDSmwBY9scpuzGVuYxMK2e5XCq5Vm2mwuvSpw3FMhUXsSLHGGPnZSpVwozbzfjPSFy9LfKV7QgAeVca",
  "key1": "2r6pr3V9Fnu5zZP2dWxHSHymFCiunEgZQ4Pvtfp1xtgMCmuM8tVWFbx8uYasKkrX1DPRvVpLfSvGfKpNrhMicDDR",
  "key2": "35QGsK5GwtfjooH5owksNwvkLWDraRWZZcJmGA8Snw4ujfWs77t7kw1VCDBDM33DEfS92R3P5T2mDTaC1nPi4WNZ",
  "key3": "2qBTCeaosqVLvciHf3wjfP64ehWVH12FpV27oLMKWMwGQorMXWjRw4SHqDL9c7GYxmnWUnvHycaPDPwwquZE355V",
  "key4": "Zn1fqiYjwmdWN1scau1Z4PhHS7sBvNCNksa9LrBcdUYjdz6f6zJjoPVfydNCtc7z5gzj42TazH4Cp7GbyhJnJ9N",
  "key5": "4WX8fASGtSZdJXfXYWZwqRDoNazkAaCUYtA647fYujFJcbQM9fXwymE4pLWkLz7BQiJw8MaZMK65dbhi5bN4N7GT",
  "key6": "5ND3XoChyY7E2PLXZBwMDujHwZE5snxEz9SR8WN182M7J7MDBkH5YkfUDe3YW6ScWraL2ECqH5z6xZhfWJq7B73R",
  "key7": "25jxY12yd1AnJ4ZvVX1nz695rhczqXBpiibt38tZMWficeapvYteXF4BdTVWqXo7ug6jnm7MypaB4Q8ebSNk2rcE",
  "key8": "5k2Fcn19bHt1p9foL13HKYKw4f9cRHuAWvefRjhhq7HkAu7UTxgwgW9LT5tHxjKaA2jzonFeJeMZdXDh2h9VGfwo",
  "key9": "4LYE97KQ5KG1BwXikt6FL6sUSPcaKumJRsiue6EFe2XhrPSSMWQFMHDGqHPGVe1xSWNDanC2R5vUw8Kz87PW94yw",
  "key10": "4Q9s293vqZxwESGt2THwNoBoEUHpwxHpQpCii927qKebVyynJywXhnqfiLLFppidCf8VujwARwoKT1iizCkA8mxm",
  "key11": "3u9iRRxheJ1CRQ3fDrfyy74BCgDZMVoWehTAkvopPxqnHmQFgdy5PDEf4MvXr8WvJCECKsnQb1z7FCLN9d3FhUSN",
  "key12": "59tHoDW1Y9g6P1V7EsFTM43NVgXo3LD3aKg3we8mEAJg6Nt6TMDYjocBXHjSkF7sCPm1fyWeJ1ib9mdqnyPt9aao",
  "key13": "5wF4L2oa1Rs4pmHPY7KCsYYXEvBeQoGdyXv8kKLfzyhDWCfK4xsVmWoGLXnxS42voFXD5NC5V9B363jzvkfn86WK",
  "key14": "PcEDBHoQNFLPju3z5HopA8gmi61DdYSdiAsx38nYLhRDtuzEg7ifyWF8s6p4kEjzDVEuW6JCVRZWxcWo589AoBv",
  "key15": "o9kNqndCD5eS7trgEBwDSHzfaxFa1erauKbjinM9MoU64JKwZAguStDbbvkNg3rUkefXYLi6y1WK56FT5e2PYUy",
  "key16": "5did8WAs4ySFyMj5fSYNf9pPqyZxmWEh5aYhBX5pQXaez7mfpqJmEmzpxgsGh4gsUoSCLKCf14n6avJ28PAT7hcH",
  "key17": "4GiZtpBSPwbgEmNXyu7Hd7NYz24Ub1pjnNWh79Y6bpeHHaSmqpJEEcNtJajrgvU67UBeiXPTCtyyQvZggBfaq99Y",
  "key18": "3hPxsXgVR3kPULDALvW6fm1XAdN9tATU2zENt8VNjRrTm2K3wpfiREb56XxCwidzSatxrwC4SXzN6NsRuLUDB3TH",
  "key19": "4pU8Q2VTumEKwFwNUz7rYd3TBBqcByV8pAaDQ32TbjUwDBRe8bCFY1Cqor3vTmHPfkLeXrtYXvEP4gb7unhpTKX2",
  "key20": "2XRQWLZ7duGjtmXjajABroSXWFi5UJ2Ro7JyNntpqHqkc2XE6zsroK9anj3fUx24nMaGwFFT4Ts9qkxXugTiGa3X",
  "key21": "4Fr2hGzcWEwLr1ghUN8L5urV8nyBjDvMgLFmMYSSbfnLP7ARADBTvyYxeiiT6CdjP2VUiZgrWepmKPnXjcyN8Jiz",
  "key22": "2K5UnVMgNVbpp8ms28XhfHC7oiqZpVpfj89vfAxrQcf23a6kEB1K1kmR93yQyFsjeEaeHaTexxgGje28pgqYQF5Z",
  "key23": "5un2PcUSEedTgB42hTHbpkv9VPa77fUCV5FW34rAWWdZ77jQAD9j9zwafMU3UDi5WL8MK4weCxanD9xuukezCPuG",
  "key24": "7q1M4izGS4oA4vR1EEtD3dufn2rCsCfLaDeQ5BN6nYDGE3MFmWJLBaXQH5VNvfSWLKbpGPxdJPyKumhDxTwgPxo",
  "key25": "FCWG7rbyeC9MRZYnWDPKX9BnLHe17ZswdjhJswMM94MvYv5wNzeTwWjgCQrm5fUKCxHU4KokJQdHtfHsJ7T5Fk7",
  "key26": "v4hhfhZRNEiPojsRq5Fqd8s5BnvXT8J8mCd7xsdQj1j9Hqtvh1HGMr6cLioE3nz4GMXxShRzzH6Q8mhBmNXEqHu",
  "key27": "56KpacPrthXeAVLY4548CVye9CYmiTqhYw8CCe2jfMyTMun3JuzogfJKrzonJ5qdfuvbp3RGWfnezZuiUE2o4kCT",
  "key28": "3nceEdBaK4kdTaUmo7LzhkVNAcVh8H4rKmAX3zhauQfUUm2mFv7Rz753C7d2gr2xPab751KsZ1FJYDGaz2hpoXWM",
  "key29": "2of67whMa6ZTF5nf8QwTFUyP1h3pPhMYSRDUxRBBeLZUBRtnew2pJYGt8aXCJhuM8rYU1ZbYjqBFW8Hzg37Vxk11",
  "key30": "3PRTj4LAAPYYoU6umvn3PP9yMkCAAbonT4tmQtSmpSfULXqDTRTKqNU6YM2eChH6RGjJXoQeRh41FZyVB874C8d1"
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
