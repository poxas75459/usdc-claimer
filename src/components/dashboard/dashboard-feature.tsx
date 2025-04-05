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
    "2FpTrXWphrV8LEx9axxhf475s7kKyoc6mVg889QYPLsNboKZVe4mp3QTgBGDh3N9Qtw8Q5pYbSZ6bedEH8v27w4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aPqmqRyJC9iFd2sVKxk8MXxpwjPgqJ1EBBXZMB3cATj2BReSVgRbjBMGcH6tNsFQTWkuT9fF636qFKoZdYt4z3H",
  "key1": "36wvh48vuWW7A3BotKR2eTAqF4vAie3E3S9NtXPBwULJWaEmt6voKXck4A5cr9MzxjRZ7cEFS4rnFREUfxqtHPXv",
  "key2": "4o5u5hoTHfRWcBcrcThZYRS74EWaVyqdEhkpQfuyjher1RR3yFMKn4QytbDBonGCanwyGz1XuDfWRTuS2JGUd3Fk",
  "key3": "3dJB6eyFMVqNrtqXGY27mEUPGoXFh5GqKXCdQeLkFYBmEXezHeaoALpmgAESw983dZBerpKiagTvuMtr5iELvQ7c",
  "key4": "4sCZk1BPDtU9ghnNxMBPZQ9yHFAYDEVGSfDHv5w6uQ68AqBFYW85SbYvA2gGY7nJhPDFcCrzK74jjRgCHY3LaaU8",
  "key5": "3Ju9mMWMsWbaRczySBEK7Cviw1k5451XMZVwMh96h4g4rsEh7bbHcwBBt9dVQbY53YdCaGk159qTiPZteHXDJLaP",
  "key6": "3t1koSwr6hi5NcpJezB4RSsN7Frmk1J6H1beEJKxYsqdoEAznSirXquYJUT18cjYPEEZTJJivq8nRddT6oYNSn9n",
  "key7": "3Pz8yE2P6xFzB9PnpY4BRnEj4LJCvnkgWakKPzZye45vgGNk3Gy4m2SL85RsQusNRykkynA8MwwPE1xAd7tBd7z6",
  "key8": "4uqtfCVvstCiwk6pjkhh7Qo7GBvx9JcTpPJdJApr3ttrP5d1VZ4hTygg2ancUUqZga3NbyHnYqhEq9cRsE2Ju26M",
  "key9": "32spaN22fny2UZaD44Hj8SeUHFdc3vyZrtNB8MjnU5qcrs8JUyjKasEVkni4CehoPDx86tEFw7x19gyrWmim9VtR",
  "key10": "3ibvvKNcGzLxXu9nGcPxEmmndM74E8N2DrthvU1xTQGUAgGBkd4E8K1tVwUi2BeZkYGg1Ns9xjjcWaujW8YnTnfR",
  "key11": "4sNFX3SYDZjeTdCRL5xD6z5mpTAmJSeJGj5VbXHjT2PscaSJeQgLG3WdCvUgFiDgrYEQJjvP57fcf5YSsfHyY6m7",
  "key12": "5VHRBuc2oiGyBb6F19UnfqruorRXdSFLiUED7nRxFtBjESGLttToeS7EL2VsDebS4x24q5SY6eT9ydA7t38bpHTv",
  "key13": "5bVWMLpTikfYefJG5w3HLCRvrpPiqdQ12tbLVoVmgK2wWrG7z7nc7GStZSSytbF7u7TvQgmB3e3ru1P8NXenPr6V",
  "key14": "nDpoLLpZkwryL6sWqoYPrkvZkVkrJZdmjB9xLkq1y3McYK8jFNgrQy2buDY2B6QTzSsBjxShR7G98JSQp344Q88",
  "key15": "3y7Qd7CPZmPa1s74HYDAAPpcJzUqj57a9S2HqgJeMVBbNTaAaifXS9FqzzoKi6HK5m556gAu1TiVdVNU6Up14UdT",
  "key16": "LYo9ReF4SBnwSpFXrtzmwunWvbMc53PeLV2LYcPBL15i1Ksszz7HTD76iQuGb3TSi1VC99D2oUwfofThgFNx3Zt",
  "key17": "23s8RtzbMD92SYkKtSU4NpQTRS7uFKphmaotGTzhCwXti1iWyFbjkX9ovivH58Qi8Q3c2oikUSHbgJhik7E7gD8P",
  "key18": "36vS2A83LNu3rKnvKTumLwkAkFQ2VAb7ogM46Aft4t36We1yASAE2APgzdxoyfGxSqB1tQHvh15LWU7wBdXU6fVj",
  "key19": "4TFDzoPYgaVquLBp97BY5aBZhKry7jdk3yZU72Q1G2CCD1NUA9BXYqTdJXYyEJu5Dfu2DwBWjMXaoX7ST6XcZvRp",
  "key20": "4T6m3P9PymcapRrfrfPmmPb3RaSKMn85Y1eyF6jaYFTWBoYhJL3zChJKWAPN7iFQ4apVKgqgiTGhsKnbgWpioq4i",
  "key21": "2PBQiT3RTMNmTv8Trre4ZbPyvmXmZB8tK6muPyX7NHrK4mKc1ZuK2fLx6PsfzsSjfYiSHjysguYN1gKA1PKZfLE8",
  "key22": "oJDf3qxawCXH4C1QH1dWNW1DsAx92da72Lfp64BL2FqLg6wchajUmXC1neJ6L9ZTfYuTRqnC5HmtMkVb5qqPKn6",
  "key23": "5hEDQTy3v3K1FhWQFLC6irmyngNqX4Xqxrp9VbQ6nccn5jFewiXTeNywm2cLsRkSfQwRL75j6uzUpM9zffPP9UxJ",
  "key24": "3oVCQXzVHzhuyJRmY8r5xdZrbJJS3EJuGR7tfE3rpGRSDttwMCFQrFa6D7YUK9pQ6ZBA8eE5RJNUmqGa4MbVtETD",
  "key25": "3XbTGkBxhqkHa2PHBSgr9aPkNf6DrCrNLGTckibqAoZM4VsWt2iRcuZ3uGCkkBTX1F9qJnSMvHjjwDCkyxGrx9KA",
  "key26": "27G8hr9rRWrCmLmG1DXx5Sv5SaX1yZrpEX7mZ13QckPhooshtEBZSq8sywXaBJ4Xvphq81LiNaFmNZb9kvFyxEH9"
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
