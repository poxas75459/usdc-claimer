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
    "tzNqGSBtWxezHwVvv8iN9Wwo65ggpjw64frtGeQghoY6buNzExVfaLpYCMqVbSu7Uopd7bDFpLkqqU8JGkS2erv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jn9Pany77CWp7WPYWpbSnRrQcCbjWNm3HM5nX1JG7tjjCJD1kkjHNUreLRKCq8Muudu5ppV7GgGimVZzTwQiiEm",
  "key1": "3tX35kLKXcMbzVSeuNLh3KzxAetoavBeFrGzGN2Pe5xRPHZtiUAXqHBs98L5W4CG5qoyvwmFB3iGc1AM1fxhyRv8",
  "key2": "4PcH5gyUVGjUiUvGCuV4hGsmd7LCpAXDWdZhMjFuiNbKBnTyaTtrVN6DmPsd9kchQqtisFPq4Fd5zmqB1TPTqo7e",
  "key3": "3sf4V67s4N9a2VoE8UZ4YUPL4Ar8QGMPmxDhKmL5iLgHUir63wVBvzfp4DWwxAXmG8mdXV2TyVgJuU1B1dQonaLW",
  "key4": "5XbxtyGYEKZpqfFrDL1tX3KdhUuhwRnhw8sCcxr8opotqkc1chFHfEqz2fiYFYDw1qQ4NK9cLzP3tLWto5BY2v96",
  "key5": "4RrPtuvbsKCQLRkPcVUBkyWTCR9QUWY5nFvdVyF13ofQUwVW3grxf5QugWyojBtZzUvDGVKE1WfyEbxGEMhb4g4k",
  "key6": "4L9xbbwztUFwKwsboUWECcLnBFJ9mCFDxuNZhnmUm3bz8N4WmYS6xm1wxNKXisdfsFiyE3CreSRaEzLkio6Fye6w",
  "key7": "2yUjGPHM8jAEdbgVWf5e8kVd3aErAhEivPVqR9Pt2815xCrDKrUs6R4oSu4oMasUB7o6Z3cbeUZaUURTr8bxq6R3",
  "key8": "2Yj7NQW5LnZdg1Ut4NA48rDyBwKVJ1c2TbHGyBJJ4QbtXNRd3qdWf9KPuEMuQTbwE54tLuee3M1LXMorfXq9LqRN",
  "key9": "51e3o7xSHH1UNKuWwmRjgwEnqx6dXBnLAFCur5Ui7eCUVR2yTFhiNz9NKomPBezJHyojtuFLfgFcL9iR36dx9AvL",
  "key10": "3ic9scV93wzerL66dcggiXGA6sMBh7xBVNA7MC6SCP9fod2PoDW7MqwsFM4fYr9ZjdjhdeQgP6uFYQ5b4tz9i5aN",
  "key11": "gXfy7YCVq6vmmkp7sNG4oFnDVbCbpZk1rFnSVFauhCtRcy6omqmXiGtXv8CHMc7d6LQzMCJTzepCbpFtTPdvxYE",
  "key12": "3ek26LQ5trzpBamBAo6tWbWBkgQncMVZpLNCYgBKvNmZEUaL6vn4BoYSvVaofZSzh7KaKERAxCvz4L9eY3ySS7XX",
  "key13": "4Sg4pNvshuC2JrRPMG1cWd7B5RNWAQc518tGfg7sCYFc2oGWZ4JTAqS8QfMYJg2RAYF3hELSg9tsN23CeXtj31h1",
  "key14": "4mefbcJqB5VbUmzpEbqQZNSiogGBbL78vTjNWLtWRjLARcEt99ViprVSCkGTFHPVq5gfoEGybrUishP8676uHiY6",
  "key15": "3sdJxfoRA3zwR6vGLx7ynBEjhqZ3JqtU6Dhqy2i59H27rQDs1u3teAkEiSeYvjMd3fmAWyECGiNR46mfvLh3fKDK",
  "key16": "3fSt7Ks1QzA4j9MjQFLnEmCy5YxWxCBey2ssdo8dGFPAE53CtQjrp7SvebRBQk643YJj9AFkjsVkKJGL2grk8RW7",
  "key17": "4FAK2Q71Quq3uXPQeK12p3RQZwMNnoE8RRDsV9M3kitPYBrFzkRRhJ9YJ2KEmGoTpmkQPb9YY9rhXJHbkqL6YJwd",
  "key18": "5QRhcAP56m68pS3uGzDqB7CTzuCMr8crqdbbjsnDuc5BMkYXdM8NFehHiY6zN9c2NXpWHuDkV86jqr47GQyNk9JZ",
  "key19": "4VmKJpnWCHcxeMCcRmnWLbWz12xogCJKpPhNmEKg624eTSiktN5fsRtEoAjacffUM6xbwEYGDYabDU9gyzrWGfrn",
  "key20": "3TEqcd6q9AEFPcAvRSaYN69yBbycuzNtirqASep7NYQ9MtQT5GYaXJYsXZvXKR1BPPAynQPrP8JwhXKCcW6ZGK3J",
  "key21": "3FGD4p33QfnCbnFJWKuQReNFVhcLV3FzK4aXjkjotiffzE3bY6dnfpMrZJ8zsVaBF5bC1L8qUDCKHx3U1UMmBhcP",
  "key22": "3PgSPBjgU2wbazDsfPJTrfApjYq7zeP9vzAhHen8h9fqzPP14HGFqADVAfEy4fxC6Pc92A7pnXU9hk8LNP12v6A4",
  "key23": "3GxQXNymrTAc8AprzwnHtRhM837ky9YrN5rRZGKcbs737EVRbYo6bmEB73yqLKYCVYsK3ZDRQFNFGPMUTnPjYGis",
  "key24": "5BNG2YUysrC9zEkQRUXFFdjTKHpqoCmxWCS7bWVMJLvbJ43s4w9h3ygWgJZUxF47wvbAKnyDmRfhicj81va2QLmA",
  "key25": "LEmawQFS6VGd78SZpczTLQsvfyoojLYAvTULh7yhz818rRVv4YADt8dghLJ97oEXuFaC9rudjMZmgsMFLxbQ5CQ",
  "key26": "qppKQbZZYBm2xcWT3TKcYTXp9k8j8SqMuzuU5xQcCCUs8EeWWkCFMy1yQ6h4WmhC1WFtbaHrgLWYXCsNC7iaV9Q"
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
