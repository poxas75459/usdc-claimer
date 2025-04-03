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
    "4L5qVhhm4zAeVe45dWoDTZtKXPu41iLc1xaXL93ViETqXKdMuGhC5KY2q7B4CgnhCZoJM5eWmV38MzYAX2koEFNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g7MFkXmqjDA2QHpxVNWPTHB2v2SCkxezMrW86KnYCqQGL9pfiZiAspeXXzAmKL1xRn3PHr55EDMdFY5wMNa8kPP",
  "key1": "4iYLLwCQ4hLHLsYK5Z1AoZre5Xu8Bh6bXUmyqTpPnVTAvCgnQV793AhRhzXYNEK3sFLK91gH7KsYJAVazhiZyie1",
  "key2": "5vdfhGdnLiSULDzyBj77NEHPWJMfArTNeXiFZRxJkXPzomdP9aLjuLGumj8jTLZn485dv8oJVPTrUAnWuv1L2zjC",
  "key3": "5nfexVmhGy4xsWLwoPmW1VZE7oheGpaf62KCXn1VtSPMD5buQDcraPFEQydNg5jF2QzDUgtj4RZfU2kgHRYMkntt",
  "key4": "3bEMaYVwAHwKefT8r2fxXqVSTQvUcSvdjoDmwb34MxhziaDDnFGLC1ADqLJtrGhVer76GZRAGkSEQuJiks16K22E",
  "key5": "3te3bGVMxHiBcXs1rjTkRwg3tMi62xVFGpUnGxmgdcMBnXmwWzpHUFAE3T4XPjTR8i8DfagZrsyxsUTa1cFnxBZp",
  "key6": "2p5RagZz9VeaE5tZRP6eY2x2T7xLUjjSV9XdcVZ6nZihQj2dwzwdk5UBpnfUFzmXD9ebHdKRaXMeDVpFc7ksQDs3",
  "key7": "4vjHJ5vAXL6YPw31D4CzEQjZRa974eS1Qmgu23JC8pwoubKcKjKQaVXHSdDu8LPre4CjuHSb796TBX9wENck4Sm1",
  "key8": "RHe5QpPQf4P3M1kVtMGgjXJJpdtpdSnp6aCiz3bxp6X8YFiCFE7ctJddb7Z8Aj3FUW9ruWZBnR931aLC4DkCsGS",
  "key9": "58otq8qDgQpFKA1eSPz18JVVQYWfpx2r1JoAGwrPgJp6k8WSd6eF7PV1pYhntvnR1rPDgZEAzxKiFWhWLAZEjU9p",
  "key10": "4DfW2s46112VdqZg4jGjtwhXwkyahcMfL2ZqAM8iS2hjK6sUVqzeNvVKTU3qAr3upKRruqh6ZFBX5Ro3wGYdzkjY",
  "key11": "5QytpyZt7qxJN8DddhL3MMFDKfN2HnWVpy68n5cVnEzJanBKKYVXHi9NcLe6GzsTsbmEJpk3hCMqvkaJw4xfHagX",
  "key12": "3g9ySV9Yvugphh5qUHAZyVBHgPFSTzAjWp6qLXVPv7gLEc2CQbMUgpz1qC7KKT6Tah2e2ZJwdtSFBniZ8wWBoiZQ",
  "key13": "2sp7xzWnAdFbGQaY2XPDGjMSHPTHfN8JRViU3K1xb4KwDqkx4JC9q9VMmZRimNCi64JDiEnC73MKW79qjSFxHmVV",
  "key14": "3gH6YuR76rxgSREXnHS6tykoK6sHatVxNw56tNSn4piVvkV5ZWLDNKnSWLhdkTNNeBAPwnpCCxg44N5kUtqeGBN1",
  "key15": "5kBEwAp4CcaE6feKWJweKJG9TYo6whYtZtfFfMPQh34KAG9Qxc4aajdQVwB7wPCci8HR6jkt2R9R5FGKZMrzy7LP",
  "key16": "3nQHYE7mMEE9oB8xLcZmgDuX2e7BdXiY1eurmfYn7nHvUbQ6nnAg39FtPbwWEDFLJCPRWcxSXnQHX1xjUe4wpqNn",
  "key17": "4fsPTKEYc89S3SEGMyLZWg1W6V5oe6uspkys4i1M1wxppGCCiisVW4TVK3HfUQMn5LxGrXuWZV6cKXYZbzLqVmRC",
  "key18": "2TDf2QLkM9p5WXdWnhgCn6R19iujxShtugQYUWSpzLoiN93EhJy6AXr9Wsoxh12TgVcppmCPz8bTyoBGxuaDr2PC",
  "key19": "2MdBvfardXXgffpraNfCDVwWCyo81ymMJh3YGhtzVVYwLZfDHUy5mFc484qwWUq1HQq3jPw7fpRzyo8GDyY81iCD",
  "key20": "468DqCjASo8s3hzCYdiQgE8MPCRxfM8dXNfBzAt4AWjk9wmfpan346gx7DXNX8mMpc843aPH52bVLYTzh1mtQWmw",
  "key21": "52MmDJK156mkbgwGYtk91YUtQ7WuCyvWK8r7XqV4yusXNJUtCTwh2V8GfVT7obqT2uL38h5m6B5VfM5L8GUVpuz9",
  "key22": "5DrizpVZG7i3xKwTS2k5eKY79m23XiJrMWFFyMjXfoGbjZWUfJjVYh1fPCAeQq59vEeFjm5aB8ARvmdmkVPNgaFa",
  "key23": "42NmYHVfJt2d2v2yqhfuCuj1bD168X2e8BzDLmeuZCmqkhWLc16xVetXfSTD3a5DD5oMD5abCELDLscyMDTyLnwr",
  "key24": "2xmCghpeYiJRxdXDGnCLU4mtahAEESLDDsFzEgLMnqswGCicdqsLkuxoEygTReqUZ2HkbsMAs19AvJRnHZQ8jwnG",
  "key25": "45tiLE3Ni3PfU742kKwJ7ixjzpJB4HCHhoqWuAWysrxsuqjUXAUb1kPNuEWRybMSzaKcmYQgKNAdj5uYfdvD3cVd",
  "key26": "4f42WXSc9jGFVxJwZVeSXg799wfhM77sJ4YCknyV3QJ14GhiGfjxaXYKxYWjNxLPbAoytUN3YQjCEnuTgiQu9rRh",
  "key27": "di654iJ3GGqvUVmkjuYzP5eQMfLDrrVMYemVjpYm6MGubecT4JJ758Ly5j49MSA3dTe2B7y7gn2KKvy716dcSVx",
  "key28": "2yFiVM9cm1kG4E1fW1oF5bcrhjPKQJnQKf3h2htV2sh4duEXvwsRTRyKkaxYG1bfYbrwHgbQqmdVtAx79m4GjXm4",
  "key29": "5uDBDRtPfkoJgz6aLLDhQ8yJtkHJW3Jwpy7C193rw8hJBkXUe5JuE5iJdaJu8gHNSQ6neHFUcDuD5TzvDrpykJxm",
  "key30": "4hLgxRo18Ay51mAcd9P2AYimJkbFCuLd6gB2aED5L4j3iSYrwMrqnXH9kETGExqkCdNSF1YngiH4McqDufB1JQ2Z",
  "key31": "5g8mDsz6wa1y2zBePHKKTJASYfwFKPhDPPxrJLjuff5K96J4NdEZxLWqJNUWXS98yW73Dr1GL1oP8CL1xFKtCBWB",
  "key32": "271mQPTjU3dBNJXegGXRwLboKkWAtapFmWkUz6HhA3gPJ5xbRF1Q91cyYKMDGdR9QmvvxoSbNSXz3PVo9oCswLbp",
  "key33": "21RP2VVZkWv6w7X9tDDhzRvGiXy77CsTLu3LqKoSkMUAFKvtEE7zRM6oghCCM2rqT5G2csC3fKsNzqiJPdBrF3Qr",
  "key34": "3yrfxbhZf9cmcYWjA1qhKsNhAPS4x5frS1ZkAsrpgakjcCvoRbhjJRA83sEDC2fNqo2MkEHfgk2m9sHMJw7cEjEa",
  "key35": "45fwNEBxk8D6akhB1PBUSXUXDu7AfV1YpSrZJMdHZcea43136btiUqtHQWFZjyxguVtHHwDhaLLB7tQdiMq3yBYQ",
  "key36": "8s9ND2teFMJFsZnqmStrCTeJQenQqizkkgSM9kSYyFvZegY59s7CoPKYQ9CNc6YPDeKJTWXzfVp3NSu3jP34SRf",
  "key37": "3DkDYDb6mdoGDZFcZ3XPc4LgUE6VxSkXfBGoJz4QzULM4J9uT9JbeJ6YFL4ZVfABii7QVwQP1GnaHSmMAuEsR4mM",
  "key38": "5SomsyaCPk5YKNuc1KG497m4jUzX3s6oVgCnfniRGiouhtYi5NPdUmgAV53cYS5sZYWYPoqA6UpHEd2Uxb4k1eHp",
  "key39": "4kFX9jejvgARQZDhPzrLuufKTVPYW1YBgNVecS1mj5FTV1vGULL9SaCmW8Eo7hjUfZLyBk1rmd21bMc3qwwN4BaT",
  "key40": "sHkYJE9eCqi7wR1LfaDwj65NCpzgZiNR2V5b3VypY2Txsrb9EDp6gnxeZqx4pT8DBa1ahwTrWPMxbvtGUQHgG1p"
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
