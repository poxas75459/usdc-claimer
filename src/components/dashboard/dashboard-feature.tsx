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
    "b276aYvy3ii8MsK4fZcoBhtbGbVxUF1xxCKxZTMfri5eust9a9taEEzGqMDa6jK6YqfRuBp7mXBHxirSHVnc8MY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C2kdBRzi592166UfbUjBW46LXafA6BVSWUomWB8gnKQj89NScUoQSctfvMDNaauw3LCikWNv16Kn1KkPjty2ooK",
  "key1": "5aQx6boFu7DkTxPbvHZiZVB6D3rysWtgF3v8opBK2y2ubXYAxk8e7DbxJ56AQdn6Yt1G7uQqoztUhygdsu92AzS8",
  "key2": "4XikL1T3ZzF2TB3sks7EJKKaBLvqfFZWrkgod1u8KGzgYoG4W3oiRZZx7V1qaxYshV2MMCS5gJQT9BtheV1HKrtH",
  "key3": "2FU16fL6eNFuaGFv6DyT1Vzkv8P7KybiKLamdjBfNvYQAddKAmogppiEFUEvhiStqDrp1evbqsEhQdHFmxKsCiqJ",
  "key4": "3AAPvH3qrh7N8ZKL96TDDHwrPcMq2BJqjxaTyBKZudgmfj2s8aDBhFqBf2T6Yw1DdYruvYTLCLRBXHHeGjsUpaQc",
  "key5": "5SxiaQgV5HZvtYuTY6Bot5xn4rAdoTpCc8AV6nvK8VKmE5uvuT1uthzjC2dLt1jqTntxYtYzN4d2TzuBD8NsZTzR",
  "key6": "4MNdamq8qE2qq9znNjBaEaXYSrFR2GKmFuEoq8VUdKa8HEHZa9kC8MXWPfXwjv5ZRRjvewS2TEKT5huywRyKKSyi",
  "key7": "5WbSxT17t5B3bqfR9Ug2umAAeMRsTpQjKDDuQ6i7MwLayLHbNtkfqzWUrrwCCMDRJtBggbzdSqsxft9QT1GffHDY",
  "key8": "4fNoH4cL2h7Vm1SEgPfFdeZwgUPNQ862w5X9nkefUpLDzuNDUTeq5Xkh5rXUh4RhQqmZBjtK8zX5a8b2Wb5jrTfX",
  "key9": "5t8tmEax2d3o6xHdmbjA7PmYwQ3vk3wocLWX1WygAR5nL1tEcshFNbn82kJZucfGSko92euso9G8Mbnf1AnwjkFN",
  "key10": "3R2bKAhhfoD7n67TCnAzqrG8DiCGRhQRDyY6oUrJHb2YARggSBGy4Rmgd4khexoSEqLTi6PMrgC8YDWtFkMZNU5z",
  "key11": "5zjx5yMkfumsJTUd5Vugg6GznZwzofP76HL8kYPbXZhGxyPQjytSZXfmwoATQTC99tkJrKKCWygE3jxJV2dDHpmA",
  "key12": "64oUH5KCzU3YY4b4bCdSmZyJNA3HKn52Ky5oXfPXrMyUXA53PTxQb7J69c7FL13BpMF2oAfHcwApS9i8PFqq2iKZ",
  "key13": "yv9iCtc1uiZWtghwHuck235T4LT5PkoTJRshq5NhtiSCX8Zuud73vzZHafxo4yk8Ki62AsUJZLk7p3u8dPY4Res",
  "key14": "4iRLg2YLssQBbTbAofbZxAktBcfV3gvrdex8hAQHq1SkxBEGPHPrhtfA4cUiNtXEVVPzAZbMQx6F5dvfrXHtqSTF",
  "key15": "4bfS8JKUQiidQoTDPQpmbKNUEyCJjbo1gtaKUjpgmb6bfSjNfKMGeMPXAu4NSJ6JkETytXnP46dtu5kVjS5D9VJ7",
  "key16": "4fFGgb4DiwjtMDiQNWeA9ZgKnCZAvfp2dHB4qBFj3jBiM2LEnubqPqk7bESs4Zoi589KdbPCmNEHrNwnXWfh2mRJ",
  "key17": "2D73NEUUyvyfHLmF5FkZtrUodsBcUsb3ZS8BBVJmb3yWuoAZ9dFmGjnVkaWd3YjoXKJkZtYfRNynxcE7fGpviRPi",
  "key18": "3RQ7kAneJUScMVAEpHT4SWAav9NE7qKAGNfyCVvbvP5VwsEgAukMKzAgVLRT38bZKZhJwq3u1PtxkFso6Dp4Hg4f",
  "key19": "qkoMz5WGLsueADry4QfKMXVZGuCjH4UCXZZyKDjzhfZXn35Khp134FKbcDHRhTU8FUhuWduCzuZ9uBrYtb3Qtf7",
  "key20": "2Ako9mnymHDQ7HKSeWkwd21QCHqdS2QRPStL111b3x2ui8fpztmHFLwYNQ7N8EfgAHM22bUgWCVpSoSB2mWn3YS8",
  "key21": "37y9J5eQxJhMDfbUK1GL6wVMmpeXdQ5jaDVv6Ksj27NMvZxVqFSKYbroKz9bUX63RnQaVJbb86ZkDcvpB65vBDud",
  "key22": "528xSGooHJpsYXxs3pTeJqHUuShXQqSWCUWXMRW7Uf7MfwxvgkXbZeo5ceofmRPAPrWk9ij6C3di65oprHjXtn5x",
  "key23": "5f4CyffzEFv9qjabRk2a2Uwrm7GSQVREcw8ap8H4XjGa3p33Jj4WqspAaakYJjr4CoTzj4F5Cx7oDuq453ntKasS",
  "key24": "2RHhGPkvjNsbrmp75YTXy3XzHTASyyNqa6a48ivASSPhSjKagFDBW8jZ876T6cas2fzMXgSQmtc6tNTxyRgEBQ1N",
  "key25": "2rGPyXu8SXGTqRi161zmSRkrWBdSr6bHX7pGH64GKvBsNV9dy2kfg4LgUZnNFD5GxxE2JnaDhNB9AD6Qv2Htp4f1",
  "key26": "4nbtf9cotYtJaFHypZBHietrqU8M7JuweBqs8xo6xgph8EufWzDLVDab7iRVYF3uVwJRZ96h8ffcdbJ9k6iS3frz",
  "key27": "3kguVYgEL13h3qfcoX9aSVeCH2h6PUdSn9KBWY1oWndnfQu6abZSuFRgmCMFjLpHAmtPVWq64fGNiaRGepMXtG18",
  "key28": "2nUuw4MfFRHwnAPVvBtuCQKdFLNHnuv85qGZQWa6sNNHG3dJfgJbkUWUmeoQyQtjEwSXNfWHVRhESkEzgdZe6Jfx",
  "key29": "5Kq6cmiQotAx2AsmYcTWiGubepYvUc4nWGb5MyLURwnbm8t9fYC2nTnXwJjFKwJaWG7GXKeHdWXCASCQ59TuYkXJ"
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
