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
    "5jgZmFx8x6Qrm2vTAz6pMirg3U3pxvtFXgQ8tnNMyNTnwScvUAqrGk8Ma47Ug45pSdgn8w4e6btJnvVxc3hPHDmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GWtFR6PV1JFPMk8eijYqQxVbjMJTbruNLAVE6h9QrGfjwssM6NosurWd1JZLvC7gKeiNx42TNizy9EtgAVFG7ug",
  "key1": "3X1dkKfsMEk1Y8YjeLABsyix8EkF8251hHVapx4LYGcDS6jKwaSmFBmjGZBPUiQpt4tERvsGMo8FpSpHx91v111D",
  "key2": "5x8KPgStXFHXtN5AiiSmaNM5wyZfRYPqtLc2h9cWqvTGdgwVUYyXhtwm4dvWVsX6gyjJpsMa8mRht8gku1Z6cPYu",
  "key3": "3NkExSR7NTtsMxYQT1No6xQWmcZGsgbyPtsXeRiiF7ZnSGyYQeSBJF84E9HAVLc2Uh8tEP7R92ev3QW3ZonJjWsN",
  "key4": "eUPipKa8RXcCdk4N8TBnSDQNN23fTB9DVsDW9gQtUqynSFef5TSetNLvW83zkPkCB6MXu4o7SRvChgXw66j4wfZ",
  "key5": "7pYtN3CqX8k2GBsMEUZ29ZJ2rnEpVX3dDMCV5uQ9MjdeuNVDE1eT4f8XoUawXsxHi8oBMJaW1wxKZxt1fWc7SZv",
  "key6": "2QfBVFAcLaXxd7B5oQY7f4R2YrhMFZrzWuxNkujKyros8VdUCQQXwgpBpCJa8KqZn5m5RHatDhJVubg7riprdrT4",
  "key7": "2WYJijcna82QRwLbzeYAeZrVbCX1eP3D5RLS3zfg88w8smvkMRkhHYXhyWhWqAgee3xroNFXv6JLSiwCsM3BtWtd",
  "key8": "5LKDdzfNJqUMDLdCfgMYZCCWhHeC5TDBZ9HmavFCVWWurgqyBWmnsYJxMK2kzEUkE3TZsRKY3mntkhXi2daqL6aA",
  "key9": "3WFkgzLCYumjeTHsCaTHrcHEE5E2ucECD68ea9E6nhfxLqUq8bcqMFFC8mxENxdudjeHu3f6BpwuonYtXDgWEb6J",
  "key10": "MeQjAtmNr3tiAvZwBa8nrvrJQEK6N28kyVMxY7kp4WKXQgAJvWNfx7R4yeZUS8w8REvRvRQ3r7BM6Ax2tkTeHB2",
  "key11": "46c2cnLMvDTVDz8VwWjkwHJk4qcMo9suXU8yqKAADxiqFC3D175X2TbTGzd73sXmSAnuJ6NnK8Wrk2vYLkruEPJ8",
  "key12": "2YQM5SkJN7ZvmZUB7ymbTDsfecLd8uU2BLZEyoEjBbvWQ1VsBYjpZc5PwBCHW1CtJkoJyLSnE8mTN7PNAdpCjgVK",
  "key13": "22m8wfHSA8A7Lnwq4mU4n4AY7yQsMzYmH84VBDV289cbu5EpYoLSYDHCJrGdNMbMvRhPpmV2kejj77VP3AZH2tfr",
  "key14": "4tjxx5FGQgoZLXYxMmyLWUcoTTx9FbxdUqRGKWhqJdYKof2mWrnn4m9tqPwPqfKNRWMD6KEvvZP3Bjugjnnh4rEq",
  "key15": "63oDav4GGctNeKBPeeTWiiWRh5eic6hVnCziHMY71eV5cDHwHmG1i7zirNzDGtR4hf1vo6ACGoiriqvxJShTgsfb",
  "key16": "42t393LUo2HssWfHw746cz495rrQEEbpeuxESLaSULNjcdfiRTtRsr5PcgEbRWKjPnihchgscpkjTqSvA6bAYZ3d",
  "key17": "5Jgy23tC7aiTMF9sBDBGYE33DxfFpsnL7Q3E4aSqK5iMgGwPwDCe6Ypt7KiHjYWH98d7yKZm2vaq39SbiQKfJDdA",
  "key18": "5pNzkxpfX4iKizkH5rJvaiKAc5QuUtEoUCB1pEHTMBTF3LbouJCums3kMkkxKgYJDqx99yNkR37cfD5pd49onvu6",
  "key19": "5VaV1j3KGq3hmQosPNnFdFN4sn9oKeX2psNnpzyjgUPXBowoFihAgBVsfxFCYkdpVaFtD8didWLnVnrp7atwodDi",
  "key20": "HuMk4Yp8YPcbyrskYp1txJvE1rrTzvsuyyp8JgSYjRe96pwQaqee8azWb9cG8JagAVcD96u4oibsnFRZPXQ9naB",
  "key21": "5Qb9VDQpqseEpLTzAfEjzkWFdWYC9HXDdggVX6Cfh1EmvranwDXwg8t9skZLjEtWQvRExazQcUS2W5pHSX3FGUUz",
  "key22": "37C7roPL6CxEEDqbU2ceTmvzULVmcvcfnnZdnn2LNssEdHVHuGcTMoQuPAZqAatF6Ec83r8F3CBKuyHhpokf9m6M",
  "key23": "5EgpVE1UfPaHH9qchQMqUyVT8bF5SFMUBZkD2Gw85q26MCaRaJhaE9d3uJoeW6cJmKnPyfnNBKPRqZ11hyx7Njwi",
  "key24": "3u2n1CWk4eQcC6pinY1LRwVCKbKKn8fs7WkXEnvKbqLK5uEyL8qiDWxFGjQNQzuk2xYvgh8mSGTchk2RJFMUyT7q",
  "key25": "4UiYGu46RTHsnmrPSkjndf4kLwiGhVXz1NhwErh96FD69fXd51ucaiFmAj2F3EPHrzJf9LDT7jzyHEY4Bccce73u",
  "key26": "2DYo996tyGPeeG5cVEyk9ebDLNk7YyTN6e7drJ7A1A29g3X6B69uYjzPqZpsiXLn7J8V4uggg9h347MdwH5rcaR5",
  "key27": "516AkaTbKEwHRRABvGyasYXAqLo6CaW5aQ9Bvy3CzmL65acjvAKJs3VXQ3Sz9oC93yoFiqbT9bWrUSAYj2SH3hJ3",
  "key28": "rf8S1e8N5k2aBs1f3LRxvpMwdxDLPaSNQh1V2kgs7Z8vPaLLy57NhBVMUgjE92m9edhXKwrYuVc4SjG5MDedpjK",
  "key29": "3AA8as92VJDtVeTx664cTgRaFzpJVyv9M3Y2PKpD7SAUAcVj5vvyhhGGS4JskQHQrTGtcJUiTw77e46VhkEMiWsy",
  "key30": "Sesbd1dkyhgahL46mqjkFjkN8ZLQ5NvjWP3tKpSKHLbX1TQHNe65xpWsoXfPbigNPkP6ZBC2jyAd6cfHNbuKW54",
  "key31": "FbnejfUreHMH8R536NYWWk1LpgwqGkoZkTBU6LZ95Dt77Lce8sph9Jkg6GpkRhPF39fbjQMe2S5zF71fxbnBPCz",
  "key32": "3cYqAPHwsidH7DhXEY5c5mE5RMkuJDMkGmB95uf4ZGsMS38t2V9EwrxyDR4EC5UVwUqeJMGZ4P69kEpq462QVZdY",
  "key33": "5QssyZX4p4vswMbZ5nF7BVKR1xUxDwvENhzfWUw9yxRC1SLxzc738mHKRN1MDpaQKnmnkddHggNqSR2W75PgrcwE",
  "key34": "26GKeaDfpdSMyAsTwCmPp4uDFmNSxeuzPXjzw7d1C5Us6ofrU8qoGfgmxXRFsMGfHQNZogWGjYyx4AapNNMxV6M6",
  "key35": "4BEhWr4nCyDFdx4L8s8ZM25HnwrcfoEncPgu5zq4R1AcRpyTLY5Qer3XWqM5VnLffmJs5TE8dNtmeawiYMuKviVy",
  "key36": "54StM78g8JiDwE9141hkuLPKyxM9Lk69yxQMQyvQEGyvCWTv5nnVXrXAJLgW2zPa7jZefTBKjzjxgdr838y6mDhH",
  "key37": "5cWGT81ziFuimLTcGU6XQm17A3GnoCKK2JM6htmAc5dkMDZwhq9jshG3WeR8NFCH5JmN4YE747NjjJWeZ5kqUfyW"
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
