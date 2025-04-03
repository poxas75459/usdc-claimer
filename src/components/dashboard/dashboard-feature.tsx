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
    "7e4W2symsYDHbF6XMFvDEM4aP4YBfk7AtGkNepvwZ6WEJhrWQ6HEhF6769oPYdU9xX5JadUEqX9wb8zwKX47KMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "512v7FMNF9FJhJA5yFfWcgDuEvHuPUgy58Bb5cMNpkYnj8cCBwQiJzkzCcXgiJuLneYqC9wt9SfPQGcFMvQZcMZq",
  "key1": "53tXpYDBKJ5aTD78Jqnp913yBWSjCJiPbxu2WCCYR7euDhYBT3GwJn8nHgsqH25gZ3c16t5xgDggDNHSQtFZ984e",
  "key2": "3RL69zUj4fdmAQWCUsAGXiwfoYjMmZhLsBGrbswL9JKM7ZrkRtxkU82at2LzjgYBiAczQYW7RZCnKi7MRK7zqSUJ",
  "key3": "5stwdxsm8QtvhneaPuDfPgeXuSpDYxKSZeqvRU8CiWRP9jXaTDSeppyDXKpPyfRJYSp5a7aZ4r5mmpGjFuMCyXAz",
  "key4": "3GscLDaPFPDtxP17aq9mxBu37AXwFbCJNBFMzJ7qeJpun8qgxJqhTMabA6H9p5uNzbvFayLicLoL2C7vLZLMHsmx",
  "key5": "4qGCxKkoHM1JLfQEDHQbzJVQquf5FZDJarzY83GNYbFMgpXV3VigpPiyAJRiYkzALPu1Gzm7tPZJcWBrkonpnDY7",
  "key6": "3cqr5vyKXiRtXvGWzTZcNdiQ5osfFqobFYh2jmuZ52nU58hWoLhm2Esfqj4yKcHidKa8vVcZjdHRyxoDJ9j9uHBM",
  "key7": "3rqrFin46MqDdkQeHP8WEvKzREYPWmuPn65hhpENX6WE5wPhiDjstgyvmfP9w7iUJD34tixj1KpB9YE3NtfHpEJc",
  "key8": "3ra5yPrTAufmVgWxaa6dCUwwWpHpbCAML3myJoyY1ZAjLxdGWGovvJHdF7a122ByULborxYGbQjzQgnvThUUTk3D",
  "key9": "2ZzJimXurPKjwY72n4Qz8i2fTYja1fWmsvSeUeQ5Kx1MREGFUBJGSW4zEnQvjaNWEHi6sm3jZ2ApqPBSxHzShpf7",
  "key10": "39KRPBQV1zpU2cbnzXYKw1iDbjXoTx8CzTpipAXoJrXpTLev2JvCaKqjRm9wzJA8px79WDH7qRHhrK3Vg5xfuk8g",
  "key11": "2wywGdbgioj2B5HEBS3ibNosWGvipw2mxF76byKARXm1Bm8ZmVTsELzPEYTwBaSGgm1SSKXQi5kn7aVkiYzQ7FhV",
  "key12": "5ZfX9wvqVb6Py6C1kyC234KejDJcZWfhZ2LLvVVeowVXwRBjvP4wEsdb2Pys4ALQm8Z6X8TR7H1j2wgHprTB2X2n",
  "key13": "yPGfUNG1fXNrHVVHdckP3oaFonUEdLWBeL1QqtbCJHyCaHwBZEsCNvNswDmi3dGHvayQ39AHBfDqkwgF5Kw6icE",
  "key14": "azYNzSiw5hzQDPUUNNzNinFHHteL3QfNCto28FAuXk3DY6cafNhrcR8YJyggJPLfUnP15ZmMzxpD5P5W4KZ3p1g",
  "key15": "3kSeoPqf1r3fhQhsfDwRSoWr3Sq4n7dKuUgA8YJZaqxxgRXACEHKo3iGuU4VFeb9hWshTuBdbYtdi5e3A7yK4qvQ",
  "key16": "5sPSU7awCDhHPvHaU7HpvP6v563x4VphvaHNMTwcqEJENFib97xxgLouBaVghFqyomLXM5WHNKPPtfPRJWGyiVtQ",
  "key17": "2tFNo95vv2ggEwbEvMJ6ts61jS5146j5CUZ4rQbiUTx2nULeWG8L5MkL149uoqBnXFcmx6wrMhHx2crFCvsDDo4Q",
  "key18": "ER42QVagMQtYiJMs6ixXYtJWeNgNdcF59hEtDk8ukMySqDq6qcBcJyrad9JuTu7QNaCdT47pnpSx4K1ASrWTERT",
  "key19": "2aMNiHXTeLC9vYfAM9FzekqhWcnVLbhgxDvLP2p6V4BLRUnHhLEyweG17sDFdRGJDUKswmyMncKQXuv2TeQMnKA1",
  "key20": "3d2d3nPQHYntDYRkGuZRQmXPH5ASaAGK93K52zowxcbPTgZtUoa1uFhQPEmhNcuXLMK9mUfraVCbhCP7qNmMVSe7",
  "key21": "2JbSFwiSUdwk3ggBJ28cdaEYXUK5KKShzjBKBZ4DHTjEg76gpmzS6P2rvtiH6L1ZhqnTzJNngX6GpJxVc7vGJbhm",
  "key22": "2GQa2xSCyYXJDuNqy9nSLhm9aBenVFerTECChAtRJXcMq7cGXKkKPBARbQ8D4p9NXqgzH3CnMQQxRfPxrDay722g",
  "key23": "61ZcGfsJADZSGetpQWg9nci94YzAZg91JbZWzjhX6P5SJwAA9yh8VHNhJtYqEJsgJMuXYe3XCUePNf343JQdP9K4",
  "key24": "5reprKThAtwErAubWMGYWNrSe9hXoA5eCNAm3VV8yPwihN2E9HkmB82WQJmCDLHmnaTmnTEu7MnwobtqGQFbng1B",
  "key25": "yWBfJ2BQhSqBxy5kje3VZaA9BRLMn2GRFA7aMqoxFb7Q7qD6nQpNmYA6AbgY9p69oVS7YRu2G2puyxFGmKCWqwf",
  "key26": "75XRdQyGdsZdMz7CpThKRgSiQ8r7tkdQpsuYdZ2tQrzCD138gBnDM7tZs7Kj7FBLEFscR565ozLBnEynnVMrv27",
  "key27": "3S3ZSkyMK8zweXonMxWdWrtFhG3xjiKJSt5ewvWypJKEJuNxs1J6hAZcuKeWt6BSATnjcWkCZLXxqym2TB7rxWGF",
  "key28": "126Uum3MWBWqiiQrUgU4MadAQ41NPwgEyd5i4S2ZTCsumAuUbqXseZuK8mWChSUz6ARBqsuRRBdnKuJwLuTktNPt",
  "key29": "5qQoQiNYFyXC3C4hCdKrmddQxV1KPGKUaamU1XXMDPM9L51D3GotaM32sK5BZhj93FT8gkjCB3RyUpLBVHZVmN8z",
  "key30": "2tgLhVFRF2ZGcJnr6AmCYZ1Z3A4xjYmU7hYwd2A2fQPXCQg7kp2tEP5PDigCPCGRHAbYbzbrBELiPG9hKQQMAJAu",
  "key31": "5oKwpLjR165SAgqNBzLPA6tcmRj6xp3CccieRw2EN4LcbZBLRvmhaFQU7QR5hvPPDH2DeXyLY2qBkEti5KkzMc3J",
  "key32": "4UrFVJHEccGSZZB4qHDsknmQhhvGaepZ8c1qfRXhseFapmdHbdNYmx7cPSdGWKdNSSnSHUpgAXinaAZKRrdCq6Nj",
  "key33": "48J3FZW716dmA9tkiQL2PPGkqnTA46jVZQTLnLJDyPPoVjX3EimyWY4TMqroiNBpr7azeGgsfNENAxEMFCctFTZu",
  "key34": "5EzBDEY3UwsdfAzzLiJZZupjjxSL37mzfRqDmD8fQU9TAsiUxNyaV6G4qr3dD5wtLf91rX94NraV5gufVUMQd9d7",
  "key35": "4CzP84qprbhpgE5iqD84msNQYdYxmTLpbg7hHuEK4vr75yqk7MFgj7rd6wjsD8TtfUPU4sfv1qThog9NZWYUzAsn"
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
