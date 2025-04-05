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
    "NtD3bBDQcBtNxUz5QMiBpPGZdFM8nLAnUVRDWDLP1cviuvXzQTSjWkVK3WFAg4RpkPgMdnWWAiGWnxTi4ChcHNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XxpJCMzRBQWyrfpjJbHi9AVypPfy8Nunpz8FYqyi5tdwckpq3dU2aUcArtcPfSzxC4G5k5XKbvnnqFnebe74eix",
  "key1": "4LTmGA25z7ZHo7iNzBKDwQMSARWgHiizTJ64frQRvavMgJ3JaknJtFPZAPpiMSaRXqEt1Pm3s3rZSeeJRyvf1wjf",
  "key2": "4kVw2NZdmampN7cQjnTX5QQhBNXdw4p7irdNzxR2FTxvCQe4eGq5RJrqPM9cdJDcsn8Q45tLTRvsMSazxWuMDKKq",
  "key3": "4kyE5XPt9BbXSzqB3DSJw3jbB2jrAojGzvUpTp5C3fRw1RRstTwRqwNsoRvgQvavMbnDVNUnXYe994hYiwf46Xkj",
  "key4": "NCejypW3XHmVjQx49jQkh2zQacrRiyUigxYFVeVS22GPf8BSn3g1DdAAP9pqxA4DBoZbSQszcZqpPtEZZLoDKo4",
  "key5": "3xetKfkqcg7pL6L4gTL753b16fAW3Nmc4AM4fG2csAz5Xb9WQBcXZ8wVQV88V2NxbK5yqjxMRGis9ckd47VGSrjH",
  "key6": "2cThWMvKo4acXsnvWEidynC6ACecCxGDo6X4WJdytKbh57xWbNenmQFifqaLcZHs8NHhTizaVnQuoGqiQ35ugCyJ",
  "key7": "5Fm1xpQEYuATRoxdAFkMh9wpcTxW4mTYVcx8HQeSbm5NkxubCS7693fuc524gThyd8ushy4Cz3zLKavppGWU4y2G",
  "key8": "YqJYPUAkHov8Eb3j4TojeDDoiTH3KxYwbX7QvWm52tadt9AjdCrtPdQXq4ZvyriHX9v3pMWRjXedGcQwmT6icFD",
  "key9": "4jdjjQXr7AGcFe2awC57GA3QDMmjhNVYLVoUXeCcR8vgrV6Un33FpGZHB8tTNZ9ugH2a5jippNy8LtxVh2E3Pdur",
  "key10": "3ESMyBCfgZqeVb8ByMBHnwjshMTui79meAhkA7vfXnVJMGMA2U83ATSVfDFtpdi7g6ingiwAa5TLThNwBvW85JiP",
  "key11": "3MZaZvN2TGj32x6LCtgEkQsC7FPhuR1ss1jkNpwr8VR8J8cGeNKgFiM95YcxkkXEm2vxCgAj6z51tiTyqviRMk36",
  "key12": "5ci5VSyxDLrHMKCMu9vRkz86dREikPCnzwCZwYrA1pAXeihpDRHra4BMMrDind9DRr5oVd7RP5Ag5a4dUny6Jj9m",
  "key13": "3RZ8LFQ4voKpezvw1Feyuh2oaTvd3ohzFc1uW7Kz4emExB5C7zCzkAaxjkZ2AV6YujWVgyB9ktAEEmQd96Cspcf",
  "key14": "32hV6ie7vA3KMX6Whqq8jdRtkXdV3y9FWYo7fBNH2nYeyHv7U1e7Rbcwe3ooG4Ns7fhco6tF5zh3Um7xKwBamtaK",
  "key15": "2Gv7SuTzHCx4tyouBZdYq3mB2Jq5h2LLRiYfcHKGGKXcVNXqF3mWeTFFGMbHsYdq4ajgpo7HDHcEDR7WYXcHM2BW",
  "key16": "56EKCUfzfNpSRT5ZRp8s2HrU1ALYnxtHV8UqViRzS3b9CicZhdVCnb4yzd6M1WtCjTQ3R6o96niHJ77rBuFuhyNh",
  "key17": "VUf6DSemSEtNWHpNvZpiBAg5gycb3XccVKvjwfhUL4vKjNrGYjB5iShUYcvQq6GqoD8ksxMekmPrXBpgdWBj9ke",
  "key18": "5gXYkH9AFG16VKK6mY2DrCChmJh3w1wxKayxVCGqz8wcS1d9oYJXy6syfPxP7NdY4dAGpC2LBj8sUHgBQohFjojb",
  "key19": "4C4FqXavZ3665fRuVn9Ke3TFjqKXkhL5sWZr7qPYhasQQ6K9h37CREeX4vKR9z3A8GRtfDYoEDQjAipHiuEgctqV",
  "key20": "61XNNTLMb6Kujf36F1wb4WMjEMeAfKr748HVV8Ztkd62eP44e147FZFLvH87i6S6yk5sqcSCmFkKrfcPKyGHTQL6",
  "key21": "225TGahurqPH3wjFjwCspo13UfjfshF7FkWHdHWzpLkv4ejGkAqpHBBdX4P2FSPba8iRcU6DQ2Si7SkxALvof6yC",
  "key22": "2EJR22sriYt6mtYnWRzJrJ4UCRNWULNDbaxG8chYJ3YQZYnz4Me6Nc4hoi1Mag3u2brmpmJ4UAS2fEZjrxK3hpNU",
  "key23": "4wLNoqTnw4Ed14CsVvnEZ11fLS7eNaiDEHaXRyCAqjoAX1SE3dthhkxSGY82VpX7AXdTuiDUc419dtWB8y6R3GUa",
  "key24": "epGkdWHcc9uVtWF4SYLMZMiB29nSHJoqJ4T5UygHhQrnVXSSGZcccG1a4RCwBRoGrPoNEhsSTSQi1ZsttrXLvKc",
  "key25": "4JtVUESC3i1sLEUhHtYUDuoSkP6FSCRq4hXCHym6HuNqjuywsfL1vrCWCJqvJqUrYa7XxH2L1C3yaDZoeycmuBmC",
  "key26": "2KrVSJBVdz46CsZXSiN9sYrWVZqAVRpUnme8Wyt8mas9weGcM5RBvnk15hNMhA8igoccB8yJB1xyx7yi7WXyzXbK",
  "key27": "3N7coysgruqDv8EgtpCQ56oM7jSavXBP4cNkmfuFeFM2UfxpRQDFdwMk2ieB3jTxqQREdkpWBcCmZNjyVe6JLW3m",
  "key28": "PHj3AChpep9G8j8EPf6Tr5iHwgUEBKhtaaeaNf4GWr2X6rQaikZJn7cUmeWpEeDsagb3u556mJ676V8qsygqdSs",
  "key29": "BMusVRJ4SS6dviwnGe4XNX1231FK6mecqT9x5u6uzDv6peko172htSxk8cqcq2VVKkS1B2KdybhQujiUtdxUe6u",
  "key30": "uNDBgsxJNV4ZFyviSdDiCQrV7jV2ofx9pTQQnJesjwQ9XjGBY4ToRQUHNUCEDhP23y475W9XU8nxhzTiqH5CcSn",
  "key31": "7jVqCN75wKnxiLc9PXen2p67WdGzUHUrb9Y65FwGPxdZbCGnK89spNN2YJzwLYE47c8rbbQ5rnwP5a8sF1n1G6X",
  "key32": "5JW9XnwCHAi8vWodR97fgXez4iFaWptS5Z4ku6Zj5YBGYHQm4zSecL9Rior9HTSVfC4sMuEPFjV1FccfsWC77cXG",
  "key33": "2nfyuR3pM3xmFxTPkK4dGgSNbgFxz7AGQU6Xjn5kApLwJxszvQkpDcPSjjFZR8TE2yaYN1dnCX9Csft3v3DnuNfb",
  "key34": "3jpxaeW5jXDWZqTUoTuSfRhZ7P6XBZgjTwYVKB14KuVWx4wDZg5EGnZJrR2tVTygnmE7suHhwxpaYEA6tmugVTLL",
  "key35": "5A5WC19hR8GDU511P6mnLB1cRpzQhzHoQWyvfGkUSSxtUq9WXktQhGJAwh2RcWUhRVtuDBMo13UsveLcCuvL9hrY",
  "key36": "52Z8zr5bZgW4vZvpp5z6fZordeEdsNQryNUR37Kj3hxJmFP6yx55dwYYEkL9cufMrAMSvFUfK4bLWgoMQFnxBbSe",
  "key37": "3cwYCh1oyPPfvXzwLdtG7ZRisona4zq9UwRaYm5xbGuPmZrBzAjEzFjX7NGMmmrECdUnPBYuh1AqD1qioJo7kX4N",
  "key38": "2DwMuZWaeYTrU78m3GSX7FGrvcLciJ2LAaPm3w2jh66ZuMUvx5QVBDGYT3atBTu2Dngmh623BLCr3mwnPGHxcErg"
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
