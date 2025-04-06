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
    "xRV7Ah3ogaeEbF7LJWeLwtgfT1agpFkiJ9jYs9v431381t7ivrkhaC2xRsmUAxPXU2Li9khrPtKGXQzELmtbFX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nonrwBehvVrkxLGoPJV7drzLqrvwMuMjeEcPCXDBt6EqHbxCqZwGzSLQqS62eu8LAqyoHXhDa1EbTXA7ci2JMPE",
  "key1": "3U8bvYBL5fJvoeVcPDWeH7wvAa1MPmT4Nxd44Jpa7eyWXrios8BMyw3zwgHACfFV485vLRyxcu6Zji87eqdVPXf3",
  "key2": "3x3hZ1mNp9QaUuZ5MaU7FHCYDbkCpBtZ7YgZYUU9bKxuMPWJHqd1W8BjdzFK7UvsUPJCdC8mCE4sX5LfbcbenVWm",
  "key3": "51meJkEuHo2c5NpTZcQ1CcBpHDGSVMTGZZjiy4j6hJQcdwYz4eaP1P1s7PsZh7RsB1oWjSUrM6nAnjgAEZpqwWyK",
  "key4": "4T5rdPKZNRo8dMnWaueYiHQgynyAgxH42z1WrPEZAqHAd4MgS3f8MLvJgdBYYqwQtERyWJueTexkwAG7Eszf7prg",
  "key5": "5sSaekrw6KN3eQEC1wje1ibvnfwNYMEAqGcQAx37Aec72Enmzt4CPSAjWmSJbaRKkxnnkRwoNm3eRQ98vY4cumKk",
  "key6": "2QoNUwxnVPdS6c2UhpVJ9Cnp3yGRCeQjKBT2EZkqEvyqw5Gn2MuL2xyuSMUBD3YhounKVKg7i4H4mbTcYArqBo7Y",
  "key7": "5smQpJ922B7FjUc3RyjmqBEp2GodXLLY2AQQYHJajB1Hskq5brqxhDQaPTVJD3mnfKDcCT3LNHZ5Kp1XMRWmnfVz",
  "key8": "4XmUiPernxQBXHAvSnKq6uDpMK7wwTLE8DVRqhxMRJ6toQGH4YwaDY8eXQeq9qWBuKtFMdSY63Us2yDC4qNRBjQk",
  "key9": "2PBc9ADjUyk6DJxUJCTnJkewkMzUQASQPxwga1zL8xLeAtfbsbT1MW2SarMNp58SyNHFA8jzPoJ5CCUSM6goUkQ5",
  "key10": "3HDqvyVyow8AzNUnUBLGwq82XZdTxJXjZRNZTqaCTec141fLtjUkCBiedWu9rqsSGBibH5hH6n2F5nxBHQFvGjxR",
  "key11": "218i1GCX8YPFYhSpr2rkjxWwRbV5JDSeEdXzfv2M8JxBmmnfrASrxop4wVwKm63sNRAd15yQDord3WQPpK3SZTMi",
  "key12": "2BBAhkKdjVv8qJkLVt9pR4bQJAYDA7eo3SzhVJqtQ25Pp8iWRgcSD2wWM35RGXd3TZcSMzFExw8zN8aZJVVFmHjv",
  "key13": "559f7zpQz7gsoHug6ZiJ1cTfQt8Aw4L9eFW4xVzCk6rv3Xy67neaAhTJ3apdp8K2oXmwFgE2AEVFRcrbxBpyacLi",
  "key14": "sZ22YZjwtWUin9ipoQb3uCSYWkoaZEper6nyeqTPED13CzbZxUFoCovSiHAGcbpdMkfzrzNvGRztP8e5xVMTVVd",
  "key15": "5tLYZyE3qtP971LkDoJGowdWaeogR8cAT3cFaJDXgMgDbYNaNjmc3aN5NuoBDQSTvrGGKwgcyw6R4ngxBb6AdLoH",
  "key16": "27hCcnZtx2uYQp9c9Hm9suMxNwCdKQVh12a53Dh1koLZg4njgdNDbM3oKX9VLxxweWqQhWAtCooNjkP6WHBiLAaK",
  "key17": "3zUX86Quy5RdWjTEghasbEaKMUpHtZnUGXrVigqPiFSXNT4SX8oDygvn1nMkMNp82BpBgMhVijibUQD3B7pr5ejs",
  "key18": "4PeNt31b8EepCDVjTVv2TN5uotWr3D3gzdh9rRtyR1QDQoiwEznHnEcVDc1TskH4jXVynuUDjSp6eVLBMJdbqzK2",
  "key19": "4Ttxqm6dYygWswtyB5NKNEbSvhDUTmHX3ZYbKujCBZFpM6HPFPbudAdPUEVvzbDhro95bjSDYognBCBfHqUXnNyi",
  "key20": "2Tf385qXz3bm57PkNqtpsN8DocFEPFdVcZJLudd9jGeoWUKp1EPxD5mbKv41k2o6YYvDYx2q78wVhQHbJ3iqqw8H",
  "key21": "2ctsjadykhibUe6PSCZCakbvPSB1FoVnHN5hkk7rJsDNnTd82U8PAzybKypbDBPn1VYC1uQQeHdnp8PmThfwZiKq",
  "key22": "3ZCTLmcJbsK9oCCEnAHm4mvqGojjUN2MxF9jWCpcHBuw5AWDBg7u28JmsnA2z8M3nsxGnRpw7sctKkrgYEMiBwvP",
  "key23": "yD9tyQ4o6LtCArBAf3EMyVMmeXNTKpjEsNeSaugsHLpRzL8GMSohNZAJm86cnbx2hWtUwutoohS22iZW942rmQK",
  "key24": "3YHKwxKbJNjHNZamjFNqiDg8dc4zNQaLxDk4LhhK7qmdJaS94p7XGKnNqXCKDDmX1o9xWExuk1zknRB5KPHm84iz",
  "key25": "264sk77NS1CLheQ8Mth4UdKc2wNErdJ5355JD45NAGaMq2Kpo3ZZL8UvozRrUr5x1XkzFn1uCYrMofNT8NA3hMCN",
  "key26": "3xsmPfTLJ6nK3QVpYuwtegGrzhmjbwV5sXDsncCiAVR4JdKVonWas4J5pBshe3S9wVuGQo4qFnoTAvoVqAYGz5fz",
  "key27": "2QFveoamkBuzSfHxRPFhBEoTFbHbvy92aMS8cvtRnq1eAz2qYW9Z4HkZgANryX9s186fqVAJ1ifi49Ax7S7skU9M",
  "key28": "3qRNzvGq8YvUbesW3a4siSdRr32Qbf9tf2mbgpsecvnbqv21u2Qc8Tk9HdWm3dJT5waBgWmZSpPkpb65QYdkghsa",
  "key29": "3Y3BjxxSd9YKaevasWkaqPo5x1DYX8wEHwcPTydvAoqcm3ygDQn2g1R2HsT78rbLNqrALuKSEa5D8pf2QUEwyHi7",
  "key30": "5vojeFoBXBFNziGufSeUMHtU2mRxm1Yh7R6hmG2ok698UxXPgiHLWdyEu1oYNNkLz5VD5EdGP6tfzAHtsqZn2Jz8"
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
