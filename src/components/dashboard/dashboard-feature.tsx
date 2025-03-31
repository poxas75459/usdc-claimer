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
    "DoTctpbXpZQFZ8s1gjfKMDi8bjTr7vT1Vp2w8py4ySNJscappCaPbpHu1C7aYDHSFYSP7MLNtYGuGddKouxHVv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kd1n1jTnRsnD4QbL5AsRagW4cjr5X3kDgHj8i8TbFmUJRSeGcPdetEfJFaVaXJ6vPZrrvUMQgNFwHzB96NRhr6V",
  "key1": "2TsrQ3Cbs51fiD8t1pxKbG3KRkJu68832ZDpjtBmurg8eSa92CSBg92e8XyXePXbHEA9x6oDptEovyp1TNTUperJ",
  "key2": "56DzxHAWCazkwb6bPhCM6wueFUjpB4Be8oyZ55tpWBx2tQKRi6y3G4hjohoXSmZD6xdmjLxAHQwFFRt8ydzD9nBE",
  "key3": "4yQx6CBcXx7qrzshCEV6KqWhYRa5CxEVvk2hGMfMqrK1iAWqXssq4LAm11LMjRJHdLnVEjCmjX163puUv6R37m94",
  "key4": "ga39uRGkN9dXJSpr1VSjc2thki3PYh2Y1GEofPXDjo4fsTSgBrmKrafYc2V2EVB8MiycrCTsmdNQ9Rc9wHVUzp2",
  "key5": "aQ5PufsT6wPGkAVqfw8xSo6bT5w6ZeoTpXKiuCxLMf29UMbLMW7uVEVEadr1DfJBvTTPbfyYqsKfbhMH7YcDTN1",
  "key6": "5N5R6jZE5BrP7oLBMDVVDU3FEmP3qcSxESVhobEt5eoraEd63FBYmXYWhR4ZPjZv98smKhzuGjPCGTprgh37a6fS",
  "key7": "42MqnFj9scBTXNsinwaPzAzMjvnhhMJgj3PrrqCjzDZ4E4dDgFqUc6qWBW4coXL9e3XzsZVbMGs4hbiVuUWMPCV9",
  "key8": "3C9YqbRFQipyFkqYdmoq5KoMRKA4hmSJ1dZVTdApUR4xkVBZteW94KvxZmcZshnQvE8UEFxNNLyKiDhywWv44vRD",
  "key9": "PekEmbQsGHmwXAXJJh9aTwHDkfuvHQKdA4PXvVjqa38JDK2JQBYfZkDQx7qauYctJ6HBttvp98DYLbDMzvkPSAo",
  "key10": "3mpZzdQUgoSuZk19q7Pr177YnQk1bkHwD3KyxUnAGukcRATh3R64qSh4XWXgdd93MJZNPNDzjWC8U1pobfig4u46",
  "key11": "4SHRfUuygVVakXVJXbeSMUppT1KrxCeDF8x9BJ1M8KUudxMedRoxTsaHsW6E1tGqGTrLPGpxNkSez48DwCZvnZuz",
  "key12": "5MC2X8MSVHW73iU23EQcvAHTj9wxB5wL6Sd3SicySgwJ5E9x7aYuujKUJnwyPiFe8nYYhzbUx6qG7i5eEgBmXMUy",
  "key13": "2Zq3Zd66VMp7N22JvCQEZP1pxbzWSDdM42AgYvo5kDFdMyESKa7XiJGWNGjcbKgBD9qEXf8qmXbN8VDVAC25jvHp",
  "key14": "2cjLVSsN1H2e5goQXUXBkakSVEM1BQrb4dXAMN7zaPjjNKxLCFmwTtL9NipMDLFb9c3oSEhXL65UM6ZiGvnrHkc",
  "key15": "7Wt3GfuewUawtyp6MGXEne79P8hr6h563T2JDuZo3vCVhUan3B6xhSPsR816fLCWHtCcEz4pkQnQiVYWHAR3cSS",
  "key16": "25QHrSX1ToKffg7W5jDspXZoMtGEzd9Bysuy5yUaSPgWQJ5dCdwRPhAV5xyBuTQXPnxki9srPEb5cA26BLgTmXxV",
  "key17": "5gPzSRQshW9RrAd6YPTtM7mJJNaS5QUZ3arXCqT21fUqfbPFt2fpBhuALo2a7TqxYvNS4FvpmyidwjAKkQ8ywpBV",
  "key18": "5teZUn87GGXEepsEkAvychDoFvU4hQN3x9TGLHewaGhyZAtia4Zh6G9Q2erQwSMSwh2wK7WeYSc1Mb4DNkcAYqdV",
  "key19": "3R7drXwXNSjbKr9bejGL2YzxWqyhmhxEfncSanpS5UL8ZW74U9hrjDFAAk5LZWw7kKD6LjGq1vzByg8wBQEjEn95",
  "key20": "GfhEBzrzK2um3K7euuvMymYSmw37ZTCLtsUvsaRCkupzKfc1AKEGSypBNcr3mDkTB6TiZbiDH814h8ikEQ7TnF2",
  "key21": "5UNoamopb3mtchrb2Rw1qgFTJNGxRjdy5Cr245cy7zbSxXk5gBz2rcFVhWZ7oULNnovwgJHR2KYRsgcicMNEpDaM",
  "key22": "2n5KCCu6PjcJMazDCrKLoxBeczsqU5WhMmf7mKgVT2VyAfgVbuSNDgxsyGBQR3f46rpsimkzVxzFKe8ZzUDEpB2C",
  "key23": "61Gx5RYzUR64KisRthK9Qohh7gjezkrMb6t9oHerw1L5zhvu3NfGQ4Mv7NBpa3koCMqhAuGhLoExzKNYAGLFW5eG",
  "key24": "NZ9cYQRL1BkppEkNhCceu7oLo3CjiQCNdDVnRjuRrCL3Hkurt7uLA9L2VutYGaSRED42Rdtu2p1ZWaEmPUvLD1x"
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
