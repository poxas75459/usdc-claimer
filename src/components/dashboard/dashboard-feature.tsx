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
    "5LsaVTKKnXsstqfpr6GrPWeaPBirs5ow4zGdzvf4ZWYx1LxTVRHUFWqM7iuavB57mDaJnRoDna2czcnd71ne3WGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zQZeBPoosfEYaiJcmeSues7pJR1GZsmCFBZ7GvydkrbaKb9gR9txbG1Va9jyphWwsWevE29AWopTw8YjVkL9yaQ",
  "key1": "faa1eu2QXfvmTjdvM8mLDQ1fs4ovW69KYQPBtVYLHomg5Mwff8XCASTYTG4FdPdQv1KUWTc9L9bLdoBiKAsTGF7",
  "key2": "YANQDnQH1RsD514y5x2UTjMwssiZcmXGaCPivAEA9YciPNpqi4RKGWmR8ufuxd29jkMRpW6Qw2CyqUcS5f3aNHe",
  "key3": "46R4CTTf3JNdGokguA2UH7qm9nwxMV1YAdUxUM1rVh7hrGu6EfeywGwnbcPGEEHeDS3brHPVVuKzNHWMNgYogaEu",
  "key4": "4Gt6SbN4RvnH12sVgAbe6xXriWCHgwtuN8g6TkcqYeP7cQWnsLN8u3w8ZPqNz6Fn7uoe99kgMty4RnQTAJV7GGrv",
  "key5": "3HmeSrHgTAJqLn2jxDniMq8R71Kjz8mfvQCTz6sSCoxmZ6spbkCqbP2xg6pt5nCoeZXBYCJuhTU3k7iPzqC6ZHS4",
  "key6": "3nWxktrQr1N72awr5ZuK5ZYgtLPAFbWLSaxvgzZLFhiHfQhjp5pSSTbsWc2VypaYyfYFYDw5WN42BqQDnNRhHMZX",
  "key7": "5hUTvpF9JB86vWZmgHHM6ziwSbwrDPQFGrs9KjSJJRpTBytY6bmfctQcKEkNNDHnARAvJTvKfQJ9Vkas3htgpdLC",
  "key8": "4xpU4mLTPHS5WyW1zYbXBMptbP8JJSfd3YyYe2Y5Na3yZoA8Bs7MvfPqmB32j4y1ZrgcpHwAY5gv3ofXUJiLfoLA",
  "key9": "5x2UXuv3xsKqhEUcmKNZbzK9nh6TYPRnxJCuzGdYTvQeGPEdcqdpr9yaqCmLS1Myw3Wq1MWnGaDb3t82ac8LJZBN",
  "key10": "RFzPo6BeHH1RtYj2LgYepqRiAzXwHvkZUZ7GQAyLDPwkFYU7GARWzsQYjyknrkL9M5MHdqXnBERk22ZSJxuLVhN",
  "key11": "5d6NRQ38rWXPEisQ3C1wWNjjrdbPuSnv6VWazkEatsJ7PsiEvBm3cgarjd6FMCUmSrpzqHhg8sFryGtDV2NCNDrY",
  "key12": "bcmLDd4JqerBGXXXHJozsGDZexAyqHRCC6gg7C2ekNRfSNA9jmC9pJTUwbQEmrwxPZDUndigPECWnXdJAHdMDzh",
  "key13": "vgqFzPdsk6TZ3EL9gbmvSnU7cjZdWeH4rpJn3N31Abw4VF37F2Wsn8qLDbsgj1bE2NCGYvw8qjXPMAmUZ4PbMU1",
  "key14": "WrpER3eAcp3X7pHzKAtRskhxDBowQR2cLcgMD658SS33PDGviCJyshVnuW6Sbcj87vJtLBufmVQaEqcnn8TmGLG",
  "key15": "PEuUusgtNp7EtWVZd69oyaDP4WjNbndbJLvgH4Nrz6e95ZG7g4Hmgij3LNbbmKQdCu92xvYSkLjDVmRnP1CmBRw",
  "key16": "2E33SShZqvkdx4BarSEPG5gbVAxykekEaU5FmKhSK8wadRyKtgMEmj5ff6dKrxQ8TeKxTPSWNpdQLCSymbZiW6Jc",
  "key17": "4p4Jsb6EhMpWKMtUnd7TQgujUir6Me37cKm7R14aVM1CF12ciGfQAJ8rBDNiPrxwqo8RPFqzreYoPRt68JxDHTRs",
  "key18": "4S3pN3RWeuo1Ufy2Vp1QSw2w6M8wGsyLapiRwzkcyS6ESuePHu91kPM92eeBukfaYt9ksjZirPVRpdhofYbQQdXx",
  "key19": "44MhkpztsAwzkip48W96xu1EU1aj2opLftMy7MWTQcPnrfgH3fKEbZF4BteLKKSU7biLGcMdQSYGZrjepnjZN7m8",
  "key20": "d7r2V2xQBRSxW596f4x1bBzwdyaR4MexdSyRaM2YuU9vUSHsdP7riEGzzcFerkEFWA9jf4gVVy5PRGwK9vvKSgZ",
  "key21": "5v2sWRQCj3tGsxrzWDhvF964eiWR47ysTRc97zgng5RamvqGjJjr4e1ausNPVfFdNEvobSdNfaXE8QahKRhkLrzN",
  "key22": "3FNPGx6u72DjED1ACJQmB3nKxthbx4AbTT1PG992EXT2XknD3ndLvBJqEA4gRLARSius57An6vk673cVuHfwyT4N",
  "key23": "62fJPqnd2Ff3D1cG4zCyieGfRrGM3o5Qxp1J1zukX26NgvqDAtdeP99cwnP1H2ndJ9nuTcMYyPY99uXP45XjXiuE",
  "key24": "MUpveiHZucmgLGdvoCoREPxiHuXSc7mfe72WEQa982f6KioNFMhz6zz5nXoYEZXZ93qPA9gz4bfC9f93HQ5VZdX",
  "key25": "5fwDbokhEiLoDVpPfq8emvBBGXUwUmT48obfmHL1hj2sAa3hS8viAyRRgDE9gLamoN1D4wpcfFF3T39SSGVeNFcY",
  "key26": "3qf73ZdJYnpJb9b1RyAHtRnPshGjqZCTca1MtaC4HxoZsYQapSH9r2n3aok4aVGiUrSEmPPuXUtzFw9bjQMvX4LH",
  "key27": "3MrogR76rVkV8zKbQQJTiXeTqu2ULK3FcCJZYjstuwiziS1P5UoJWdXdkWNgubEwtnYEx1LJr77D3FGDeG2Xp954",
  "key28": "3DEoRn5TA9aiTnmBJrXfqKycGiMYirfCAY5AB9Vdk1XEjW95YPQz5VrqQwJ8U4NLG2LMr6v1cKjjEcjfW9JiyKu",
  "key29": "GkqiNKGHFCrnod6AsBTsjAEWrDVp3TGVMgkK77DHVbe7Sh5zYhngKdNWAgGSV5y4YkdmKg67tEvXNBKx1QxaeJF",
  "key30": "3r4UJGpXSLahiCTs3Yvqr7ufVPeYAHyTFnZXGSyRnZtbS1Nvu6BWumzLexFvH8o3jKbLtuFNEUtMMKGmX3ojH7Zz"
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
