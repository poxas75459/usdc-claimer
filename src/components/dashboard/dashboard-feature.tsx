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
    "3EhE3eze7KD1hgN3qDcJJcPf5TPDn8yHmXzGxsUN1x8LhLfdMDhUvSsQC7HTeNgK6QjrmGELP2Ys2BXLbWDgLqoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nnD9Bg1DndYwKrPquWmRKss5d7vktug7CM1RT8RVS3VucHQ7rbFVJ9CkU5suNnup43RDeGgHZNwAp1uDeHCxgAd",
  "key1": "3JSiVCs52XQizC2epg2X281W34M262KNoDW4YsVRiNDKitfvf5T37vxAAtbRAmgTv4njfTLutLkgsP5fumgLoBdJ",
  "key2": "5a4uXUHRMEbQTii4j5i7GAXcUKwBwvkgvqfmj9L1PEY3u9imrYRCKXMe3QBNJ2qRVZfuoj8JQqnXaW3odBUN9X1r",
  "key3": "2miaSL1FXpa9BhVqXzHMWksfAXE2XedWivriqffgSeYVdL8HJgvzBKbshjowkmiDPXnZ2N9PUfWWzBbCGh5Cmj6K",
  "key4": "Zriaz2x1ytWUpV7FTUadfmiERv2L5Ge5LeKRhDrE3wnNfwokCojr6GgHNgMXYsJC98G6EmSfztfHin1tbNTZkiz",
  "key5": "5U1K33kMnWsP2TXo2q6SXeKxcY4ExjAPZVFQT9hKteeMvRpQZFKHzaVBoBPFSf3LCuDcJcu1SPu1nSzDy2cCf5tJ",
  "key6": "4jbDQSzeKxvayvmLN8RXXH4wkPrnWnowv59JroxgP3aRn2fmjcRaeBfJf5bk7pas6Hn7ykB2AhJ6cfDDHfP4rNDX",
  "key7": "35kuF7jBcTGn9VhfPgSu93GxMp7N3n1KFgCzJXcbKfQh4txj6Tu7cV7Yj285BLQ3xpqPCYgbsXC5t7bDjx7oURST",
  "key8": "3HLLmg9TAVKZW5HRHt3xbTsQGQY1E8Euq6RoxY4uuNsbJ6i9oqmnD9DMpD3woWXr69PHDKiVwjoNY38cV3tmeyTj",
  "key9": "JgatLTdZgrDEaPomM7YWnWVGPY4QHzKrjMFiL51F4UB21gt7gRtDjPs74wrQ32fcd52vqkpWyVP1JnWceuasuie",
  "key10": "55SjiD1zUnweLnmKg8zUzt1v7CUNGfPWvSyMmZqxdaskn3B5M5BfqW6UMVJEEoJmfoV6JN4hr4PqDxMEdS4d8v9d",
  "key11": "2mnEeePCqvF3rNPKbirL4H4PRpGCZpPxuEBducs5bDYSSKQ5Cz58y96BcNjSqZ6944HxRz9d8drwaqZ5aitBo5yQ",
  "key12": "5urRqofDFV3ok3DQYzKcKLsrsy9fXshy4Y2h1vcpVAL6wVeo7iWLaRyhCbn7WpCThz5XiPdnuQHPN6fQVMfuuzgV",
  "key13": "59uxsEqRAVWJPi3M7LpJn8ibeFw1sDCTJYnz6SXoYNb3amh7wSHYxoggZr45RpAMAFN5Yv6g5LiMCATWrNQogtRm",
  "key14": "5P8VfSpvRLSXTyk82WXqPwVfQ6ybTi6K7JXVDgjSznC69SsacQrj83rNXrJBYDgeRJsdUPX1s5TdjZwbRamwB7oL",
  "key15": "2M7fHgmhmxKd1WwZzVuvwVjPtuBrazQyJKMEo8fgUXfaUDPZJWBgKfdD2KghEWqfECrDXMqE71pxbs7T496uFuds",
  "key16": "57nX7stpMJq26PDReDtJbnvukypa4awGQS1FdG6Kt2A7zZ5jRtQBzvnuA7AJeZghhgmpzBkd4jdwVN7jSYSUHnLA",
  "key17": "2ZAAjmkQzBvpdCW3mbhxN6MhcAVdXksCT3MpRtTow16wFZxx56ntkJB6qC2nRxgs8L4hRod8ryTysFt15SUNeRhx",
  "key18": "BdgzNG7qkNiT5fDdKeB7v47dyM4oPGQQy2mcsRz5iSJB8KS4mhHV8pEMUKMuLUBFQt9rjFFUpSHUKZufvsUYMpP",
  "key19": "5CHy6Y953JrzAN8FJ6w2VGeLZxw9HVWM51Rbw1Ux44VgB3Ky15psE4Jw9HHwQyXBX9JyA5kEQd3RBetS19pSmEZF",
  "key20": "3xZ3RFR3GETFARCDmjJMJNCXzASdh1eUNSo4pcEiRXz244Ym8AgaXfVkLjhM4jecBm9UBJpduiiTJhxhshjLEfMm",
  "key21": "3bt9N4YsWV7P83kHYgJKV225mUgw23dLZtycLECjvXN2judQBCwdUfQQzcRjMwnPu93BhvTm1BMTxhopjmzhis8S",
  "key22": "4jRE9nk9Bj95CzahYfLLGfdN56hr84v4KuQrrWMrBFM3pb43sqG36NsusVM3zHGDs2uMZWiZuuMVgc3zvpzJSaCk",
  "key23": "8mfiN82N12rhQDtkQTTecM7gqPUTJNRhoEtgMLbZ6thfTfJnJ2yRg7rYocL6xeZhwoxn8fkC1NRoPTiWUKaVgTs",
  "key24": "4TqGkMHfMityrJJ9sm6AsqckongaAsqeuELLFsPMun4W8PnvuDeMBxeCpz5pkRwmFCrRVHCghaSNmZC6fDvBAn9w",
  "key25": "4sntVPmZwUqHG72gstHfDniz5t3yYKxTo1EM8Cbb5238wirkESDqmRhreGoXpybG4KEtNd3we8W8ZZYdPRuSZmum",
  "key26": "4hrEZyn3kPg9zkxXDrhAnmxRadwrxvLVkDjJGUZxnAY3AeqdYNAtNTcVmhNYXBNFi7rquChUCGU5v7BsuoLGNogd",
  "key27": "4kBwNzeM7WVFBy2K7C6MT8jNYea5wiyCJKU7kNujwHs8NypaGwfoevZsHyQv3vowqswZpbWH2SyELUa4UcfLSfou",
  "key28": "2SBVCbWTyruEJDU1KzFDv34NApBGLkrTcFk6uiBjz2iL5THpzD8aFAuH6JEtUQPAkRx2aa3CsnhdmCXpKx1V98gN",
  "key29": "BQKDpsFmdRfDWCvqTk5YTitikAFQwZuYc2PgYiz2uWtDnDgUMn4U9Cpg359sMvYrhj4khV5sF7dYCEcxuuChp4V"
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
