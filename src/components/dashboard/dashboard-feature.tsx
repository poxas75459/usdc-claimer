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
    "28suUew665Y2zE2SMBGgcv2jjZCpH8E1bnkDKDLdwYTuJ2g6Mb7FPMR7Ada9y2wJJRpRBCfuczBWX2jcYyyRPdFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3shNcujdVj1HqzxxrkMkoyy4xmBCjFsrhkxVufkByaQT29vnMq6hDsPXcwdtp6fx6vCoD6JHZVhWmjN1ZBCFFCFW",
  "key1": "194Mn7WiL11JGZCUoNpVdqyDXvf6Ky9EQJxVK5eMxWEWS9J9W4YF76AwWsXapfoMaeD6RfGL6xaKueZcitqiaP8",
  "key2": "5LZVuBfu6qtVYsA5sdUJ6tnQHRf2ocFZKx78QpSvVFt1AaZ42bwmxoFcJvB4d1C4fvWYW8YhSGX8o5YZJWeEqFL2",
  "key3": "YKdfykj3tPE2d8QZVocYnunGty5L37z3Lsx649zTMEbFDwcetXhqXmZHVRSojGoSmXffuwtrSaVfnaikWDzEKV6",
  "key4": "ywVNtpn68oubwWQdzXAnAkapBiN279XdF8samT44RkjycqXYJZM6sQAfD8aAVqUG5L9XitjV81cRCNuHQGays2P",
  "key5": "5HabQUtePjB1xq3HpCo1BVwoa9MMmosNQru8fwmKDxnwJYuzxex1FoEZX8SFmXEH8ULntehx11wWsudwUF9Du7AD",
  "key6": "4h3u8zbVBzvEL2DXHYNHKmyDvjkQAHQgtMZZNAoyixcG1nFKerde2nG67BkoJdZLEEWfKgjJU8FtFvxDMXBw26iT",
  "key7": "s8irtPrRsWhCTqz3oJdtXFwwmXYmFq9X2TSFWAysgEGcMsJbEppzrNPaqWBYzNwQ9GiiC28VPJmHSTEFMnZpGSC",
  "key8": "KJSurDqyKtCRxYd4Lvu9Z2Hc2Tcgm5xNQGFGS15MZBYRyD4W2XoQr1VJZoLTWDkyzxZbcdTJtpDLYutx4V6PWUt",
  "key9": "4963nEjFCUuNH2ayKT4GZSuFWzAzG6fffsPAboTnAmtkquk3LMjqksDxxwEoxqHnWUjxyRMG7xsfZzwnGSnXa5n9",
  "key10": "5wWZCfL97ygMUaDS2kZ1CU3mpC9Rt61rioN4iuuBCooxNetp8LbxUfmib3XcbHbhg3Dox7cATN7uoNWiRrXdskYv",
  "key11": "WdEdX26pbV8cgm2oYCzQAxSifc1jJaQf4fxkj9txM75BJ9LA13khsL2fQCsh8RCDvzWFuNu9cPt7wAoMwvpiSi3",
  "key12": "5JGqVPHQn68ugcdJiLu32dAUgCVnZ5f1hNEuYkRrjAYZ8tzQwV87kRUpx6fY2zWKSR52RZBSF5nN7xMke2KtwFdQ",
  "key13": "2eLvnBnb5qTTr87p5V7Qb2TcAZgyDPWwSPntxt7vjJMfHUifLC8ez3YteE43SRfBv1amomgFPqJ4c7hbYyLBU3Ym",
  "key14": "2X3qpHcxKWv5L1kj1wLHrWVRfDEv8yr3wiCBvP9Jmbe1RECTyLR5qgod2mQrZS7qhACTnTKH2mYaKD9uvjt32Lny",
  "key15": "2SvooxvH9ZCi9EDm4z7BUM39fDbtzteG3ancZuknHEmDRbXsWtHRVF9e9iN35mtmXwr5g11mqui8ErvPxrimHvB4",
  "key16": "3DTVjxeMcfYQ23houcFrWNANUJ483b9NcsjAuwvhVxze4jrtH1kYodQf7ZPj1fJUM26FytgPc2gegcYmvanv8j7v",
  "key17": "3Zqf927LsnZDLzPCobDEmQdceKBpKFF7jidrxnTPREYgrvsJ4tqPqYwVcmZTHeTvBXN8yNhtLxinyjv6m2GURAQF",
  "key18": "4pyGvnBfGFcNYXVKgvkpVAmuKYKWNL7tQYZ9t1LFWArcZoD9FDQ5WKAW6uLQpW2CVpcq5qtqx7LEjqohsidkMKj6",
  "key19": "3aRpNr9W4ZZRpPa9CZPF4HbDxvZCU5xUZFMReRNUXJP9rHR7F7zFLA4UBnKv9JERftk17MGE9TxVH8FLAjdH5gVt",
  "key20": "3VwfGkN1EvcyMFSTmKbBg12PDHJGRPfbxxGoD7gTkig8HYxit4Fx2dpWMjqKPjGo3MAC5FvpmcRWWKpNh6FvwUam",
  "key21": "3TuASjLm95qCVLPcrC78tPihnAWhrSc9PUirTZwVppBvToWi3hT821KsAR6VdFybgHskmobEFakxgJJTCw3dsC9b",
  "key22": "43jVtxjJWCxQo9icbunv43LhxSL8hDHLTixa25u4dhtkSWzuzCMEviuSRmrU4He4njfMLzphuFetfas3vaXwjgsX",
  "key23": "3spmXjjSj86xmC2PkQf4J4ZW2nyMRWhAUifB4Lbq1txGH4ta5U1uF3DrzYAPrCdff4xBgQBwzoosciSzSMbf5gUY",
  "key24": "2cJuFvYdPiv94PcUEtCndxd9z4iPoYBWuDP3LWMjfBZSVMzCCvbKbHbKQM2yTC8btWzCL5CXAdbcqwQt5x2DAxsu",
  "key25": "3gG4Qz64PBBCYsTXVmc2CeJhLaP5juYn25K3fdcgeQf7o3qA8SmFkYr3kdXuYfFBwJ2pxcf3Yo4keMoDMSZ3M2K4",
  "key26": "4zqkkNkZcN8k5cJ9B9mBT8Ty5tZcmXLV9sk77XQUMRnxEbGmNf37wV8Z1PKJNQ1Y6MX5g9RhBbkQdVqZXevnawEG",
  "key27": "3Kf8fAC957ES1XaDn91kJ4yNcRgECaEGshtCtxBk6Va4GwGTZcVQHJxBn3U6rECeSuVtwMwy8qQZTif4amNibYhm",
  "key28": "5dVPnBc575F2k3ikHmiYUBjBqpF2TaZdCoS72WtZopFHxpN43xAzUEuLLzyCJC8x4NquPvFSR2JAZcN9Zny3VsCq",
  "key29": "3btTnk4SG32EQVJypF4k9sn9NRN5XCa3He3XYbZTHGgZj8MnqF6NQPrXAzq1UAchFjv7dqgWikcBNLNkyjeDZ4Fh",
  "key30": "3upPkwmYdksZFtFiWwvyX5Gm3hMfHxjrLAqTDnaYdEX9jWp2Nt1CTZK41N8PN22Agej8T5txjZpvSC36HRmkqWc",
  "key31": "3Ty2CrBxxe6tywMqNB8MgacJSdR3rDABEsD5xtXRw6p15pj46bbriihFd2Y9DDrAk6LSXVKoxR2gDKL4E87eG3J6"
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
