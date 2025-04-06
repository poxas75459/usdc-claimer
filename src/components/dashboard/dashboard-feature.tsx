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
    "3Rqf8jnXhP9vzJBVsgdPUxLm6KUX7ivX8EVp7e6KUYUnW24UQoGeEVSTNzeUush4wriGjZvgt9CgwpBCEL2sC8Zn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46AnfnQS2fAfzbwiNs7pUjFw3Nc4n7jSyadcKA5Zt3xCqEcLfVoccMM3QDb5RHtP3oD3fvpF9EpG2YTFSWDjp3Yg",
  "key1": "4vxMichWyX9Cum84biSRT376Fmu259CykVV3Vcmx7zNQfK7Xn7ZBMS3GnvhTuMtUkGMY9Gr2dkxbcBvRJpwymFQc",
  "key2": "36uzvACuhN1YgNYLe1546N69EKiqjZow2Qexfpve7VyrRZF6Ei1vK8b6eY7gCSDBFgMqZrBejNAjb2iE87oNPK87",
  "key3": "43bU69XugPN1icvr7aoHVzDsT5HvP58TeLh9arRTekidM71vhypLrHkpTFvaqfFoRSdimLEP1YRYGgqqkdsS3FHL",
  "key4": "rrydZfAZysesxrMGcfKVhKd4BuXJpoRqZuUTYyt3ApL68ZN4mtbM1tfCU7qgKpQt8TnzboUHETFTSGGRHB6fABN",
  "key5": "4b1gTW1LzByU1XsHWD3US8b3puP67S36w7o2MZWxiGd9urYNcwBjPJ6fcioUGDzBZ8NQFyFT7PGcqCN4iu8k74Y7",
  "key6": "4Xm29L9TLC8bqpPHFw4W2zGZTtrT5yKSULTrLjo3rbBvo3VoW1srv7TbsDHf2ummmiowGNFHXN1hq4zDtbwMs4r4",
  "key7": "ksgD5wTAVMBVxYuq5QuNLouVL8WxaxBZCSePVJokaMZuCMUp9yZXvEZFWQuTMXHQatzporvNvmTh6yXwnKUDVJr",
  "key8": "5sHNwrLh9ajrWvTtLPTCDHGesRsCMMK4NeEmZXBgofELHPCzUk2nCGz1V3sBFCTDJQcfKkibdLETLqX3xWZ3igdg",
  "key9": "3HHyQi7i3NDbVxSzPaZcvdcNoU8iQFQnevBrh6565cENsq9SDx3cmfGQRTmADuSNyfsimSfQyNYbzLbknHD72Ydh",
  "key10": "5sA7bMocpsv3yFUqx9iQvat16sdk1csjgWduS4Mr5d8gfQVtBvFoknCSGgtr5QvWDCBSJsHSdXRDDJhoBvMCTP9u",
  "key11": "4HBFPnHuqbC4DTf9FDULxQDE4djpmGWbBx5Hm2oBmVYJA48wzWmhyf1YiA3Z1zKd5QubapS23izq1rrB11ZTRgVf",
  "key12": "2EQTKqzjzdzLjKVFsGzPtVCDr24d4Vdjfjj2ygGF7GJhNSXfxFgFFSfsxWyxWt2uNYnHsvShqJXskibCa9GN3eJx",
  "key13": "2nfh7QSHXuGi5kSvNE1X6kiC4m9JsFNxMXGtKMe1aYYbvjESZ1R2Egs7hrwSW94C5jQoCaiz354sn9FHb4puCdvQ",
  "key14": "3WKNGDjidbkqiPFRWbBfQvGuWnkktdXwyJ1NJEz8RTpXK79jbCGShAwge9nHvVp42mB7MPCbCeCZDqHafStgiiMA",
  "key15": "4SLZTcaB146Dr4e7aBSawwshjCG1CumyYcR1LHSQo2NewDYTbK9ZeQHNp38VTSybVsCEceXHGsC1CxNXma82sok8",
  "key16": "5WwjoKzBWp5VLV5TJomrZwhX4toYQ9bTHZQLRwpDTC4qqUTVNAQUHw85y8n1WMbJN49nWaWXNZwYGgo9oeyPWvzq",
  "key17": "5zVCzMFWoSpc3VwzB231BVnNipmGpuTZpV6FqB73m6rW3EwnzWd7MHQFf41WB8BaainZMJpFwaihzLJhUPArYdgE",
  "key18": "5rE6XZ2fJrv3PViknvHyj9rUgyfM1V7hZt8xusPdCN2XE7sx1W66aaStcxrJ99ZJuSmw67NUFp6iu5xGebDx4drN",
  "key19": "TiUUG2fPiBLF7MUKp7ps63iTSmQegNX249Lyu2FYCcSUNfciiamoWgeVCd96cnrJvw3NRPQSRCnAsff7U1AUafc",
  "key20": "z1bccXT4wH5o5RWMrNAfUunQ44LB6Qaz8Bfu1TnsX4QddUhQxkNqn9E7LYUAgD42b1Cgpr2ZFbeRL8VoP7Zfh5B",
  "key21": "JNkLH4yxn8c7zg8nG9D8VL1BpywKbXPq88irCWTsJU2AonzH8y8HEagjqgUqQ35Cwe8NYPmfmy9MFHJm5qjobU4",
  "key22": "49X6S7rU42bR51f1Yr3SmkequVUPnjSxiT5egerxu2r9TXzeKEQmj7ARHtNevD2uAG7oHCP6M7Eqi8tp18XtD6mD",
  "key23": "26FkXSHyWgHqFHv6cJn7VPHGimQ4A35A2BQxKX4NpE9KiSngVkKP9DKRLKSim6vzMRnVbTcsNzJ5fSTZoVCGAKfg",
  "key24": "5LJhkv8TT5NQ4USRv5AqJjW46M4NqXWNnT8XjTiZbuBBzGVbPAFvU2uK1E1mtUQz3jTVGpReTp6gqG6x1d8nipsb",
  "key25": "3GHC2wkezVRJ4q4WBMseQummvWY5vEMS53vp7LjaS1hxnHATQ5cdZQzmb6hYDqWiwh4MweY1Bj5J1M6josSzdM4t",
  "key26": "3aLGxvXht9rw3apC8ZhHRf996zJvH3j5RgwjNCBRYqxB6WaxriAwBLGHmnbwWShHM3oQ5WeJN9vVN6SNwuJ2s4kV",
  "key27": "5FDWEDdhDnrfaKAvBxmchLdFrjRpHFtwxnoCgC44YQxviGhES2CmHLSY1jbiQGGJm4NmDXZbPwYjBV6afwNo7V1D",
  "key28": "5bBhDL48g56VsM1QMSXNt5KJRXQjdjA6EyTUwYwowbF21EQpNvtuTzeJtJzQcVFDAPs9X93aZer5R2exwKSawwPa"
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
