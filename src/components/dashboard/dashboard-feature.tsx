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
    "xV9788Vjb1Se6VAs4aWP12g6p2Rb2p9FJqFvj28hfoe9y4UkjV2D4ag9MF3XAnaeAPdcN4nY9tFq4qiRLEViJt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NQEjwmT5c8TXMsVwaqTN63Rs84wGLzb9SzuVj41UzEmv6SyrCzsbym4umitVmEU4caNCN3EtbvSf1Yx7xogBU66",
  "key1": "4zGFQKG2XD7YyGJRUT6b2J5DKgQiy1cjBvyriUgMTAt7ExVouwshM3wEPuP9iWVajki8ii2kqRgSYahgjUHSewnj",
  "key2": "2RgH6mSStDmeGoBN4Z6MNJ3QGcMZ7wn1k81jDUAcGBgZhorH2Zs552AFC7XZ4PEiXJTFdZchFb3KCntxvM5DM1bH",
  "key3": "2P93ugnmcKTPRV9pSVH9RD7bBXFwGAxkRvm7DoFVdgw7fYG5Uvq3p51vM3Puh4EdFL5eqZ85qkAPvVvUKPSGviYq",
  "key4": "yStcr6BX85KeTVLmQaeQxFDUWdHdUcoutFJDQVNuh76UaGeN2MWqF4WBKLrFQ1XRdwdxHvHvQz7VRW9WDY95Ur7",
  "key5": "4ZBc2TFnwmvw1mrqanq7MKFF16LQFw97QD1vvGuP8qKtBGTn7A9S68VkPbdMmnPb13eaKZx7ZRatmCocJRaZMz4x",
  "key6": "GiQ93W6kaW5yCFujoZeFqMdhnHKqa3KcEGqGJn1aidWkMutNoHdRxz4CT99XQgRwSAomYna3FewqnStPEWtwhCG",
  "key7": "5f4AgNsnrzMy26xw4yDCnEzMMp1eohYTa614kVrj4ioWvXJtyNhP3Efwpb8oinvB8RgXj1t1vYQu53DhEC9fsGz6",
  "key8": "37FJT2zayLRDae7kHXptKtEJcdToWESBqBLNyQDnsHqxbspe5krEhgLd5Ac6eWQTTG2CAyeYq1fRsbPBcte9bpJC",
  "key9": "2513D2mEXzWUcrzLYXaTcpCCHTeFwQrduswkusNcB4suHP3nSmng4h7H8CroQmXZHKbZwRT9s7Wt9wcxhaHDvi1L",
  "key10": "4VxL6JEnKJve5BiZxrMvwk2gVnrp16jnDF3CRRUxuKxP4akLKF9h85CWTuLYRTojMvNLsKU9jnhS5gJu7hv16Wio",
  "key11": "3m3HRRuWTuz3UxDXt2gJQJDGJAqTwwNSc45HT4RRjqaEr33SUZ39Xx9x5wfpEbQqkmT9XoUV9dB66S5AYfZ7F7q6",
  "key12": "8zP5PefAApMUtci8LyfWtxEu3FxCTke2rMryCkXKR2dhV1yqX7VGvHEdtyc7CH1HaJCTgx4uTYJPPk3J853Z3CM",
  "key13": "tgrG73owo6xSR6y8F7Rn31BPGPYWYCw4CQVdYADizPFDAHcAobBmtHb9mB4oKnxjav55N7sProDN6fFUkjBSqq2",
  "key14": "4ccMP2brHTZLbmfJ4AFh7jhrXut8dfCRfy13zK9rLt1txHNM48jPUFc4faftubiDJEzQhvjTFTRPXTECy8WBjPhV",
  "key15": "4YffaMRA2PwDH7JsoFkqizhr66XFpunVyS57xF57s3VJNrLyLXQBbrYSYzkFihnBjc4ZagwtiGRYJwqSmm3znZsd",
  "key16": "5RHTBEyUDfuhip5Nef4rE1aAEbpwpuqn1YsQte1vfKVUGML7h89fZAAQcN1i2VG5jwamSWM9hrgKaLEmjoVrxmf2",
  "key17": "2XFjWgDiYcn13EQaKh8nJm9KdVv1V7u4fJwjxiKCnKo9zworbphDAftMyrccheh2eAvM9jEwHsL2DM8bUKCFxNqY",
  "key18": "47ih4dZ4sTrkeuxPdkYh9KxRtYZs4TQQiWVwrEAeQJ7PvSEiZSJ9c1noK3fYM94tPLEWFWmhJU8QsxDtcSLRLU12",
  "key19": "4ykxgmimdnhcCkzgxVJogSEMTU9pNpFUVFyATNeFBL5nPhojASLk7yWEu7Ur2oUhoFdYjhrYiGCHN5vCqEURoUds",
  "key20": "62pbnoU3Co2Z95AjQdnLQqa6gD5w1n91cpCYbgCUmX94ykLkyEKBhzVjU9cDZfcSW8VPsjUgCteqKMGwRsGPqKsz",
  "key21": "3t1qr8Rh8bH2Pf6wT5GB1kpSgTUovLK3NHywE2BM4png8mpsMiepkaJeGr8p6g1ApcVhhqUxNDjzLmbZ6aEoXmEL",
  "key22": "498P9ngPrHdnVuymyYywxBuZZEdoCTq5ECMo8T15N4YKXjPpxYiFnkhmzfq1gnUgMMzVW7BovmXwgd4JjzRCyEmY",
  "key23": "2TPnCXvb9cPQDq61LW9VhyqnYeL6tkRZx2QM5BcamUxsHehXYRwsfajAQAoT8VYEMEMaxK1vYaTMcHbWeAbjHYkw",
  "key24": "2pF1rszdwwSDGmSuM7WKbEqLBCvzhxiV8539m3TMF9UAhnrYtrAde4VKVpBDcBtY4uE5wpFTKd4ZUA3YQBbGbF5i",
  "key25": "3hSkoFYGG59QhX759uoz25LCwCs5bbJ6YcLXogyGqrFxFsYxxY9fjCinmxSV1eN3DfCYwBCfzAQDyzdWtGgGUEV1",
  "key26": "2iJdntJn8VGkv2hZUHpHLsVVv58LWMfrsGF1miZX6gRZDdXujr2pkVfVwZQ5AgLnZZPqo3T4HNjsvm3RU4b8bPFk",
  "key27": "3ZxM8YJ5zmmpfTMKDBgYvABntmxNrzRR7HUGZ6x1j5LLq9yZbEAhEkBKGYDfyFGMh6HP4S4bHG5SRnunxQThBC8M",
  "key28": "LnPgkd2NKmk6V92JjmWu71VqKCsaEKBkrBzrgXkceCgumXJGnvyD7qAqKWxwACfVeUGtKMkncV2HAUtbeHZ4K5X",
  "key29": "41BAqz3vBX8kJ5PmyfnJCLtqhNCXUBmUsQNUK4USMzeevhQqj9rkEU8vdQ13oWKGJynY2XFAjfqo4XAH8KU3wDcu",
  "key30": "3hC9eA9PbAnZCGJ64ALRpqjQojRZE2tHeq77As5sabECh9QTwhHMaRhx9PUyfT51NZf2Uv8ZoUwd1nCdtva5SdMT",
  "key31": "TahZxtuD9eHEAoedW5HVoBD6XkceYxXQyLezt49gKUktzzVNnysGuPq8jV8qXsasodm27QiJbSbVGiVc1airtmn",
  "key32": "5FX3D77hYDLPk2UyQZmqjPNfum4V1tXP5C32y3fGPnrbT2MNKPYLZVWckmcjZpNZcuR2vmZ1Jvd1VFgHB12jHe6p",
  "key33": "55tMpKGawX99EyjuuA8woX2dtcvZguSzF4xSr16q8YpwQGFpjjpFRTMLxvRzJR2xDhBQUzT1kLSyUisggbpk62R6",
  "key34": "qBf85h4ZJHpbq6ZqYJXE9HBevF7uqGCN7B2y5zYU2vLGwcFRDBttnqsCnaztLLk3Yik5cg5tU3XdbpUcGgY1R1w",
  "key35": "2GVQtbtme5DCZQ8Gt9xD6v8738yVtUztLVTPp7bcevt9TFU8ih2of74ur55bU7KkG3auDD5ivEzC7Jbj3qqVcmkt",
  "key36": "5U9fZ1bKJcF2eLHFtk7ZgTtJVtoDStacPSNaLyM9MGSzRe341peia4qtvQw5qxwa1Nai97pindvaRPDuxrpEPGAQ",
  "key37": "2UCAYgWJoB2oZpwDvYL7MHbfeSYGUVePFL1qTxL4Sj7SmsruCiRtL2m5Xhhh5zSBUfnsvdjNae2wMVHMHNUaTJMK",
  "key38": "5Ubbz4F1esngZU6acLdELFXXECtvtHa67Et8H6nfEeWHtjDTnpV38Csu16GG9GGdkbvvZRBbHMC5qmuhPSPU9eLL",
  "key39": "5NwyF8YqBdcK9CtL7GeZZY8Gh6krjobgkoqNAQkv9foGEQ7zPvUFq7otfqgUgyreEpws1A6TxWtGPw9w1CDBzg9q",
  "key40": "437v5P3LqakuUgrSXebBRFPjvLVN4U48t6G6ov9JCCsGYWVRGMA7VvcbMJ82SzcXGjLqXgWVz1UfHRHCTw189ZPv"
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
