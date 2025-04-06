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
    "4UajhXiQfQEPPFasFt2nYHRQgtWn3cM6Smr7QRTUXiXo8e8Ke3mS93VqXPybnLRJtHu62gXbnvSaF1yxDfNV571v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8sMfAHFi9pgc47wYPhR57zKZhzeUjwL7Xf7sojc9VcyXtYrkGVV6GfES9vAaYMm9xvqYg8rJ3rRRP4SbGVcq3rb",
  "key1": "2XB4fzjNFNwAKXLxUjyBrCi76PbgwdZZG2E4XBaQDuhZgmjQYSBWL7mCkZMEFuf8XsV6JQeCeymm7DohL3efv4md",
  "key2": "4JQWyHH1z2TSCzKSgf2C3cvFuyYz9Mwmi79Qc2YGPcXZbQpzi99PBFhTV3qLVLXbjXxV5HqeqrskNVLpKC8Dy649",
  "key3": "25k9SyXfDUtKyBZqVc5k1D286RBp9SSNSPVsQ5DsWZqE9JXLPCCjeXdDWW9faDyezkYHdTJkL4Ec3GJy7etxgswZ",
  "key4": "3AFd62dmFYXSqXDH6BAws1bGWVQHa5dP1bJx3PZ4mLgNUhTnkSkJyRLmz66H6URQQiDruVgxNSVFkxcHN4cKof92",
  "key5": "2wx9dYq5Z9JNxVvJe8G2x629pxXqYYEJFjoMWm1hqvNVHnBP7oDmZVnq34mz1FF3Ze4miTsd4nxS7YLcSZjmssf7",
  "key6": "4NJPjCwGbBX4U3eai4quHrKjbQxRKGs6QvQ9DpS6J5YiJyUbmMBHYLvJJLoWi6sczubj6xSNdrH23NA5nWymM6FB",
  "key7": "39685E5c7P8Tvgm4S67eMc7whgBxGbg4mW5TEhyAaqocHYhKffAoP1aKBNvgUuLYYrMVNJKGiYufYmMZ34J4wYvE",
  "key8": "2qFRk3QxCmVDwXRLfz63e42VGS9L1XFxfzXVmFQMJdCWZBtdyP5NqNTWXUkXnKjxcqK6JsofcdkPQCGBi2mEYVtc",
  "key9": "2FzYcMTvNcne865uEXEJwQesQq22yhxwZMpgHk62UiWizJBfbD53RaCEgB9gsBTEZNFBvbzUtKHdgneAn97vbAwo",
  "key10": "5hnu1HeRLXfXfV236tfj32T5RBF1oBWNSidxovLezih9rcZQ5sB1xQJWRg4ctWeSUMg4iVfUAUtgfJrCbbgQnYUz",
  "key11": "35eVM5ry6DqHg56LaAKJGtkM6Sc1PbiqcyrGmfwj8hss45R11g53RVsy2z49VxrHybwhkfdfb46xb7JtWiN9Zc6s",
  "key12": "4ELbMB2Mf7B9MUJQCjMx5SPtku6x2ExTeBEsubePyQaYDZDfDKX2WqyrvEqEfse4WSy8gbdRPAmfugPNEAajCsxM",
  "key13": "5QdmjmhAKzqAMQLUGbHnPiYUDGiUHZypGLVbysk1zkph9XdUb6jibKrFG5zhhJqz33DPQnufYyu2QtWjNqanYVoZ",
  "key14": "4JDz8bvbihdXv4TUjatj1q8jmEB3N9DqFM9r6zuV17DgbsM2NJTjWo66ugLPfX6qfkJSCY3eQCfaKovn7o5bFmaM",
  "key15": "3Znv25fA6jqthz2UBpWs6soordKzWss3qaH1Qruy5pie8mfbB95Xdw78Mxrgk4M6PCMx3yCgtxPC2RCBa328qfwE",
  "key16": "22yYnskvqfvkTyFQ6Qm3YvFQcoWm47K28fC65cE4SwSPaHJfpmkyXurNkn6uDbh72r2mrnYHLjctjQrMYvVbdiBp",
  "key17": "aUnRa31CcFcud61kv6usDf4NbPYFdr8zUv4itWdunKiKiSMzJxQVMckYuERY46eBMgUFgvmbkg5XvZqHww4Lwe3",
  "key18": "5hLV2EPx75rP8ATngMQa4qT5TgqCXrJrVV5RcYw3rvwxLF4eLKLbZNv5btNicm36kfi1vZ5wsssd15zgVmYEcNK9",
  "key19": "3s7QC5r5xcGxpox1u2peUE2w7sLTDSQVtL6KeoLEoWhxx8ZNbNPZoZMbLH9mQkkpPjP2TmSR8C842G3XM5scrWTW",
  "key20": "5izEh5CXZ4qx7E8bChKaN3GwbmrcJDg3NGfjTiDMmCUhjHQbFS4TgzL3gMuXYTKYsxGBRXhM4qtbXZdoyLwXKfk9",
  "key21": "5jnC4Tga9NPktRTwa8SaJxHCNqryNvoJsiVQyVEUXScgAFhD6v7depBgy88K1Roe31oHSjiDVM97PkdrbP29Q8fe",
  "key22": "3KyLC72f6dq6tEGAPqrr8HibLh2VV6ejZZ4N7v5SiZgZdxCHwztQshpwZ3ZBKKLZKtZJRHwc1Qn9i8Ys3K5Skhib",
  "key23": "646mbRVDaDNSYTQ3NWcMvdtM1zkeDQqxRxjNGDJZmMtFHaayWofFxE9qbh5cMe36XE1LveSn47zytYbLUSkKTZcu",
  "key24": "rowawPzyAzKVXTyBMrW2BFDXNXRp1zwprCrK1fZLy8zKwgy5MKbofLn7XgbECChgU4MJ7TP9iSKPM49Kc1UbwqQ",
  "key25": "2maf98jkX2VPFf4FSPav4cunYeXGCpoYkwcqCjvFHmLofNLTKzxpCxT73GXvnbPjm2PajxLCobA5o3nBSH1QTGdJ",
  "key26": "46ZEMyUjMyGqZhVHyKmXgqyF4qxADeMUdCaYjP31mH5HiiMLQY86vAD54tng7c4T6Gy6SFfHE1htsneio9Bngnkm",
  "key27": "2VUd6MxwaEdbaE1NoEUbqU9pRA4nnzHnd8fkpEDZDibHA6T5Mb28LjmfFjMosarr8tbgQie9Vxhwa288L1kv45dG",
  "key28": "4NYDwhnQuS6YXXhRw3TnEVTwiM9yjZHLzn85JYEkTE9SYKTnJodD3o6wSdtaeQGjDngD7zQ9J5yqe29Xz2z63UNF",
  "key29": "4xvf5Bkp7bQP2LPRPfiGoyPsAemPBdxdndThaUSFHPqAsmBtyhDS4FjKMDvGzkQ4UAu6EAjZuQCrcnXeZ19bpqJX",
  "key30": "3WHNEMRDMqkjwsf36Djj8GbFWUwwFmm1zZBPHHtWkDCWKSMCrzrbstJv9yFDVrxpca9GHknA7aAN7x6xP1fcHUp7",
  "key31": "4UgyusEssnr7C94GPSeVyHoxksrVDAH9SnvqgEXf7d6jbJF53iCfsBSmNmHBo6DHR3iA9NAdmWvF6gnNKVBuXiUj",
  "key32": "332wRc2AH8NCLjHeXndbxpqd5p6cGtnHrnq5kPZMZsWB2MoAM7XghV5GEzvqxEKLFR1ZjJn7xozuepwT2Sro3PmE"
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
