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
    "BzJoUTt6gQvs8NhBo7NhgfUL19Uba7cg7PMV8zC3p5EcXRqTo6UisVJm4Ej9W99oDmpxHYPDFoGZ5djJoyQ6dr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fEDGdLDXC8N4LLEr485u1kMVEqPpRVq7GFvQpsZ99PHHX2i65ZNWanBxezPjFeroJhwy1eVYkNZS4EtkX5JnE4o",
  "key1": "48D6KNS1VoGFM5croF8JW9o3QdNqxKKHtuY8Ar1qapxScnJppZRzYwf5nSgybFpQHWS82iV9VvMJCmGK94wJddyw",
  "key2": "5QMd1t48ijExyTRNzxswpntDapWUMygJKsPjBB6ACSohoD4NaQmNpd2KxtiJAxDnhLKPRsyFi7A8QxQT1fS2gCx7",
  "key3": "2BHVv6L3a4KRvb9yg5PdkfwPzbmUUVKFS68bcyv2fcq4jvMXWLCgZpFC7bJoG9mqfYyTcEkg8xALeEbjx2pj9KCA",
  "key4": "24JzgjMiT1MuQuPiUcZsVSsQU82Ex6chnrUJUThniWoBtZMEoZSrx2FsVok5szHgqCMh3cxRXRdFdUn4SHMA6oMB",
  "key5": "5J9pzZQaYcTgFiSER98Pu56MWtfKjyxjWJFddzQ6CEWTy5gdXtHVfbEEhJLYU9NUQhrDBdM4TPwqmAmQ5RU94rwt",
  "key6": "3wsthUEq44Sp3BLjkfYyc9HV6heAZpduFKyGS9jn9cVr249fR9oRqoXbTQYs7USQguTxXaLpLhuHXfDxjNvBVWoE",
  "key7": "5PXvj7x2D5GgVoTKFpes9mAty9idRKaLJSNPXcAZnk5xG4MRbSPejM1bwYRW1M1ogzQqi5ZrUACLfD1rv16rb6gM",
  "key8": "5DFpXBfZ3v9BB9HcQEmk6WYYXWhgivK8XdnVknLc6M3dxFj17FfCXcjZQAQabHcJepkSRFXoPAngzVkhf9JtB8LN",
  "key9": "5UsqTJK7SnA2dyffjFixJP1Z3KghvVmyRZ1msWUy4pXUPiQK1NYuCECCmitXPKmzQZYi4GscgrqcygQryBzFtrN8",
  "key10": "5DijPU32PQjZx2BadtpNXW71kv52cTMvX47FnBVch4UsUNeRJ4UbwtX5SwdRb6Au6GeV8FgnR9t5FpqnRH8oZsNe",
  "key11": "4pmbWGDgVsEXmVYeKMjt4eGE3o9JzhhipSbSPcSaKPBGPEQiPkcxGGxNW5kPrsKTBrXMeggKm3Ci7G1f8B67Mh9D",
  "key12": "22SbyTBnyBJiMxZsoJHchSB1r7qDsa6E2V6gCgLNzqrL2TiRjQ1xJqy3qjZZHnDDgWavLyWSgucPMKoiVpG6vXHq",
  "key13": "63NRji5mjXZ7WNshRcmffCmtb1k4QkAMQgCTiV9CCNSGftryXoqdvsgiMgKmX7EF498ft1pRBd9mjKJYFKSeeJrQ",
  "key14": "3AFvqou8By6DLUeaYbM94x9afvmK3YHHH4ExLtDrWYyjHZSq9iiF11WeXXRbsSbEFeAsgoXGtokhQBjjL4VrFeAq",
  "key15": "5gTcTXVYdtRTxWUC5iFXWdvGnxxj9ft8Rx4bBwyxduzXVJULC9FDkUPwTTeDZD6cqqVbSBoYB59dEbeHSpL4mBmE",
  "key16": "4ervF3dJkjXu2inGqNtgbF2ztsNBvswBSXB32ifxfQKPb3WLFRP9wGrp3F5srRjhZpsqedLJFUMt5XpVL4KLsR6Y",
  "key17": "2YzmDEaKgeFUxwaJpJu2c2T2EwPQJen669Nv6KffY3EEwHAdhy8GJo8716SKYLPwg1gzZFGXszzJB6ng1iozvGuo",
  "key18": "2cRzykiQLMqCVxAQEpJS9c2QqABebZLMqJMM54mAgXiKA3cphiuVRATzqKqx3GS7DH3czCvXS9bSGnkRtbz3xTQL",
  "key19": "5oVCtEPo1S8CQKHt13TbJrcrD6aSJgERVZvguTDZ3TqfiUJHn2bUmZfQ1MD6xXRECXp6ZYj5NGSfxP4ngtDfFhLP",
  "key20": "tsVVhGAPtGC5eVn3P6yeuxvzZoP81TdBcF4VYXUHKnN2fekcrS8AmqKSdxrcwmawgUNFBUppLopPLjHyEqvfg1r",
  "key21": "23uoo7tNMjbasHhXSVaPe4bAWXZ21Q79nbKDw483jDGbmCtGsCx38HPocvQUpsk4EdbWs4q81BySaW82H9qry4Ao",
  "key22": "qVhMp1LZ7Tx4qhPTsXZUtePrS4jdcw3GH6LeFKQFNq5CBsqzDNXVNY2i5bDAMoz6Ame4yJBvP8RywqTisG2XbhC",
  "key23": "4kuqxXJNATBWDvPDs4Uh6v98469cTKZkCzmqxpGAmaW6aNiRnAURwaA8Uvf9Epsirz3vUBabgHosP7zK5E5FfjPv",
  "key24": "sfdicuPoRPSLBMrv4mok84W5u1cZD78P84p1gMUSJ6GJaK9BMVHHTkzZ4dMpUxzZeXDevZog9gqsH9vPdx5bxQ3",
  "key25": "3yRMngf3VZGzZ5TW7wparAFpPNiLd1Kk5vVsZvTEH85VGubNdXYCLoobXtwGrmi9v3WswqEVPNLddDY7Px2GsGwe",
  "key26": "35Fmzsiw4x6gniWMZBTc2HR2mF5pVxjgeqvMd12keyQUCnvVQvVns6DRGb5N6zFgvEtq6uPVsmbU9Q5KcAaFmSwa",
  "key27": "9anqrT6WKghqNGS2rNWtvws5ccpkuecR7UEF3bNwVDhtH26yaPwKzYE2HuPYwXFDegtPSniiCrjKjZahi5Knd4Z",
  "key28": "4LMMARzB5tauK9L9APigqBED1Stp54miBzqF9rhkPNj1pVSy8KYsYmcvnpr2TuRYF24qRjfPMrpeLJ41vuVMtkTT",
  "key29": "5vybDeThGjUkz23BtfZqjMeSRngosqcDDm8VHeZHLUiQL9z6Aghd39Z57YxE2DmJ6pyr7WKDBurR7TrE3YjaTXQD",
  "key30": "3nzkUhRtC7HY69HgygWAaegr1Mg1NgiHJkwbRbomW9UVmiqAwfTifvcCdaT31bt18D4YaZW6h3WNjq4QV5C8rb6V",
  "key31": "39V3rKTH2N8GogBqv8GWnHDM7cfUCStJg1f3S9T8ZQeB41vBy4BGhRpJjTPKNMy32JAuoZ4Z6MaoRJ16M5gKzPcG"
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
