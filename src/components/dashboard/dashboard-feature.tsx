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
    "JMTccspghb3HLeohjor58ZGExsn2rDTMiw89PnYM8xGshdvHF9Wyyo8hagJ9Ne7NLHUBYN7SbzYekf9AMooWTZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s2NoXRCTtuvH7GNoX6F3GYiAiUz68TyrbWoBtmZuVSrbX8BGZoMzTG7pTMDgKxGRGsQzZiYTyJQBWGbCKAQGnac",
  "key1": "2GAzwPwXMMNEQxbc7u4xsFmACbwpejB6koHNESBn1ETdxh1MB4E2577KRYJ6MrmWf8YcoAhhAxrQTyAwRXbfv6dh",
  "key2": "3TE8Xg7xjpPRjduLUoQqBbCocrmodzm9fUSRyKGr9ajxJd3D1jpQ88sDV9aSjfc25V4pwABHxZfcStfvN9qsEoSz",
  "key3": "4i73cym9TmwUSwvocL1AE6tnHXLNb4z92xN2gpzeDnssFFoSbaCWxDGkSAk9N6ZeyUATRkcTa3vLbKTDx5zdb1Yo",
  "key4": "2UFySJNjcTCRrERsu8Zd3zk3YntVKTaxmTE344mXjakfbV8GNe9tD3XWRYAV3q5MTzFzMVEdGTxUYbRcr5726MxL",
  "key5": "3XsfKmUTLkogQvWy2F6EYtTREeano2ZooGKGsBzyvBKgU6wmuGWdaAGyAdHmgakCUhS44Y2XUXmLJ7t13mRhYLt8",
  "key6": "2wc9uuL36wxDKGwnskif42kHLrjVrPfRjrKUappKTv1U2E8NzPj4oWKCaLyZNypywsdceNkdP1tzntqP5hU1CkcW",
  "key7": "22LFdpn3nCYZXwxm7t3gy4b6JdZDxy16mkD2UQhzBWSacyeD9qJkWnUx2tzpxbw9wUZ86kdLkQPsi88bzZ7WbeuP",
  "key8": "25QH2GdMPVjdK85iubHQGAD6LURwYbT8pvVWRrwFXDWirqqbyABLKxsessFqbgJE9139y6aHieDmYFQuXLe4dt6C",
  "key9": "3b4XJxy2TYGpzXJLwu5mT26yhWCaiQgctYCmrz4qf1oT7LnqHw66wACa2dRYMTXbEEVsY2KiPosjFKpxnKd9xqDY",
  "key10": "TwkKfC43G745982m47EwVmQ8V6d6mhuZk7zTYDxc4YJzj3Bh2HbAq67KdkiBTq9v3Fp64VPk3PGwzijvNhsc9Ti",
  "key11": "2T8e3N2P1RsmPVYmUdtfy9WtLijnMP5c7X9BntFEiN2GjDRwQvwQqCwnt4rWLkaPLjMra2ktqpQ7yxdM9JKJrCrT",
  "key12": "3t6U233pp3cjwH49NdQXKYqeQGFKviKYRLcb5ukPCLTZRhAshumVNpSHRgEnPze4NXpuT21RXum9Y6T7GHbMMawt",
  "key13": "QRvjcZwp1NZEm2eQojdsJCtBjt3g8bg4Lnsb6B7VqrdnE1UfvBodmygrhy4ik3M9cnct4dQKL814rQkNGqQgRB6",
  "key14": "4JF9ntUCYRN9my3fw46ndNeYZt5sTNnKuCwSPkSupvNKBP3DRDq6g1iNoucDsEMFgfjAxSqEj4NyPwUiqzbh6vX8",
  "key15": "3qpumXYkXQ3CLTk59YgRNuZhhkc61P7gMETkPakaQS5FuazgWFQMNUUrwQWQVYLkve8dMgDSTG1TZxyPJ9ULFbTk",
  "key16": "5QeawKm8Bc2tx6EAx9wQAZ9DY58BmY5293E7N6fkdQKZsHWz4hU2iySjQdNTfbBCTCo94m6F7JyBAMBq99GLfbdJ",
  "key17": "4pCyGCBN9ZQnLFjMGY4KRuVkbEgiJWSJV1RfzBj5UxdJQ1GbquFsUp8Mg31kdNpfKVMh4iLXrXWtQuYCKQcaFBw8",
  "key18": "CDMXuUAMz45hDgaaVTSCjbfWwASTn7HYQkCtSNVM69wcs3CeRxR3Wb3YD4mQDLGSEkhT5Vip5ELVKHbcvzBGZDX",
  "key19": "ijxaQVtBfgWdPg2rWgUmL6sEJY8qK8BAqbxFFreqgVLmAxjAktzj4SmyunMCzsTHRCCDHTsemHMW2kSBMQnUP4c",
  "key20": "5uPU36HX9fyYDtjHQ1xcmU6NnXihGFEbzb2p6mbiLoXVemYRg9KY1AVSe9XznuzN7BwudpsCBb26E7BJTqz2paDy",
  "key21": "XkJsMr7Ba1WuFb6ucR3dwqwQN44dH9zxFAB5BJ2qm7ykfHfuckDU775ERvVA6vXEnoJ39MBof1jpB9TGLU67UaL",
  "key22": "58dkcijKPB3siew8VMcevfPWaFpX3EdRfyLbHxwW5nM1iRPMpnWtqvvuDiFCQ9czoq2NFWPSonsvu5mXGzVYdLUi",
  "key23": "5Rx3jBa95X6sbkKpabpbCgcXLPscB6GfSt7LEn5oVuLzC16aB1hpfQBgBZxXC63rM2ucDZZKRLQT4BAFoY5M8hsf",
  "key24": "2E4dVpsEEasFuHzstmHuxzqyoRVyHiMbymG1Yqde6u5ih93Mkhx1RQCYGPsa7T2FrWCp5GHjmSgwhauq4RpVBcrA"
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
