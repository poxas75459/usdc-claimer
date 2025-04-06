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
    "GUvBgHFtUPXLLQTU9k1JG3YCRs8d8TKkZYBEdJzxSr5YBNvXx3a78eXNt2bLs5X5aud6UkDju7PK72XeUFFYfiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58K2JwPGxyxYp3iMdLUDA7zVxYHBSTHFqeMyjN648AeN8C7UcnUoXn1Vjx6Pc2Ej5MpYgPispQwsixtyGrwrLuMX",
  "key1": "2kNuccaFnK9e1KMAhAq2SQQKdpj1Y15SeqQ21jYC43WKxwEQGjiZaAWY9JCRfRLNcEiBAvACHZuvtX29qbDyiMjg",
  "key2": "kK97937MWWd1uFHezjKJouWmEbKR86aeZhXMCyyiRbgi6HbDVw3mceP7yJTHrFiNBpRaYnduvQqBGA4GEYGYqfn",
  "key3": "5z1dZxFKFWmyWXHnBs5Zcs3wtf8ixDQcZSe7ZCyjLdTdEvgoRJMEKApcmgRisruiV4RhEjtsvcNzAWeS6ZFecE7A",
  "key4": "394nBch7GXE4TRd9euUXTYjxVSdLHp9evNuaCD1ohCVy2baqJnFFYJDt6hiYCByw3Nsx1DFQmsCxERzgXvtt2cZj",
  "key5": "4dfVeFLnBqJAmp4oEBAdzwzc3EYrbSCfFpUjuBQenYo1bJhL1MAFfT8APAHvgT3anRevDC4tnhhT8qJyMq2PoSYn",
  "key6": "5GCyz1iWmum7TVKg3kHUPqGbpzgPQR7Sav6ovneSvv9gJyys8GEKBeZpV7x7U8pgqJJCKNG76dpDxTJeqjL1x3ib",
  "key7": "ZjiN2vyp8RyUJfVPtqpR3CS5Cj1uaP2CZjEHM19otJBK12NWDq1ZCBMhcH2dp55Ti5aetGbQfJAUC81p4mT2Mpg",
  "key8": "2QUmTh17P2N2iDmhP2QHnx5DaAeJwdsRTa1jzR5ASKktmqwQ41Vhb8SPS7fZwxeHhBjkFQD7LbPHToYDrD5ucGrE",
  "key9": "GEsgeZy1ANvbf56zVfrySc47V5sYjVbwMmYdC3Fv5gQrJBkxDto4AkxiZFtfgbMhVZ5uYj3PhDfHKs9zGcvadtf",
  "key10": "4PTo5bPeHabnyD2tTbwHMAtpxG9JmS3Cv1tcHS2MKE7XGCHqwM3nJ2WFoto7GUz1FEiapvPMcwCaJyWvaX23nfDs",
  "key11": "56CRQVgo9oVkM7dYvw4RkJsoe129qh9BurcmTMBBixMYYZwKyU8iirtsSR6KNjoRzQoeEu8gRVdd9heQC19fNciS",
  "key12": "bC3fQxRASQLX9KGF7giqmDNXAcqk2Zdf1rKSd1aQUNaagjEXpT72us2uM7YP7jSaa5mtEqhBRJomWijgDqA7TsF",
  "key13": "66NAswxqT2URAUSyPRMEngDjF3eN9FDhKAkcy3YEnjdTjaiRUJBGYEvwMQyC7KGk9eFEhoERFJhXr9Vx9YXRmJFb",
  "key14": "2p9yMr6xXFr2bK7vGeHS7xpTPEW9Q4yMcSGKEzieMsydM3y61wWVCHXHQH9ZXLxo7ozkDVyAHrG2CfmzNr43dHMa",
  "key15": "2disXfd6VLoyK1QvNR7zgD5c4srfaBriAffHPJS2yMcBi17diSsaS6n9N8y8abfT1VLufkoZ5R98p2GqpwCZkdkd",
  "key16": "34an7mBXT32eshtd7pLsG2GdB4nbLbKZLs9Bgekms1dzFemqX9qaw3yv7X1JK7tHaSbjQWkVWqzW2kCzVZ2hQVN8",
  "key17": "55iU74nRPoTvq5keXeAmKBxVWFrZqDVg7bxaJJMHjNfF8wXxGcj2tTp49g8z4P8N2dSswpxqKDNnoJBF12z239ka",
  "key18": "4wrGJM66QVAX2mqyzQijoi2giEYJjJbWdo7ZPTwkcZvwa2817J1ZSmEK4wyh7aMVsdBJ4szs9scBAxxESavbT8FW",
  "key19": "4yMsx777BiH745JmpfcaL8X1wiZTNzsD3r8CVqHTDtAcotTW7aAWgVpVi6XJZ25nPfktDRLNbkVYbw4FEK7CGWBK",
  "key20": "5SebvHMayTU27ocmZArnnhc1XBD8JDYraSZPq8j7AtcQXvRXTrUQVNsBZwy2FGKju9JdKwiwaA9T5vKiUE5DLNiX",
  "key21": "TzTwNNoADrH6HjidzfRNhLLXb6KTUheCjEKj5DzfkZgbwwdupkCfBQ35Ti26aYsnV1thiM53aTi9rFpJEJSpvt3",
  "key22": "ecVreXnrBHMrJvMQGuhhmbA7Kaomrsw6ktsHm3F3Ecr6M9ij5egEnWSywqFqfSk5a6gHHVD3DkKeVMSvFyP67dD",
  "key23": "361LZw5dQoaz6tCzf83KsqiUKwv169pS8KurcT5xXYijuD1sRcUFFcVSesDjiC7QLtwB5bRUhzCgg6VkB3BJ5eth",
  "key24": "35saacznnnaSF3ioaSb9KYfJmqGHj3bNoA7f9CN6LzLXz5a2VCqd3zxPZNRm1SmrSvhFRpQBZbV4nqMQnwWpiVzJ",
  "key25": "5cgcPgvfcQZYBpPt9B33NzFv7Fd7vp31iA9J5HcW8Bs8aRhUdCUUEa45ravvdYMBSyZjvdc14Z4NaaaRkyJ6VKQ4",
  "key26": "4J2vf24A9rRjb8wKayYRvwzUvPij5bxAXZj893Avg25rnTmtMyKnL1deTLJXUtCYYiPFPQ8qbRQis4TRfayS4xo",
  "key27": "35zTnRAepsxrL9NGQirKyzjcD2MPMJhxz27pn8V41Z4ePQj3ZhtK9x3aiiJJvJss24s3qw7XUUr6cb64aQ9MXooU",
  "key28": "2121racp89z8ukaYy48vMrdfvfTiPninYUsUZTw8wwtzGrL5QBfyVM4bWrQWCWGY5obwSe4BqJcMVfaX9Ayd9Doq",
  "key29": "41NDGhZUfvMm8ZhhTZt7CcYznAjE2WTsYtgcVdWLtegMnoLye7vgiSoCtm22SR8b792YmZMBNuExhoLAzHuZDJs5",
  "key30": "59a6V8NB1SApcJyEKa95uqk3riGiindJUJgUSP1K2gSWwUxUiSWAobpBVEanqXsZVaJWHWWEpNfqwrMEDW26hArU",
  "key31": "3TyxzU13LhpGDotUEfNiJLZWS69GLZ8RVBszw1BNRgNcoVFDCLuzkUU1msh1dM1jyZ9mmjX2ERWjaQjVabimMEJq",
  "key32": "3v8EGrbRpAaNjZABmh4JR6GuX45YNpi6HEtJmyWqxBuj5PXt9PSxWkk3oYBpgZqPrnmsRxUhxhVq3Hi1bPnGKDZT",
  "key33": "4gGuay6R2qvUPjeP35VzsXeo15CzzWTo1xPaCeC5gT7VwkpPsszyxAeQRojCXamchYAuBDNKXQ4MgbhD1QcDqFKC",
  "key34": "uTJTWrEDtnX2Hqz4CkxSQmZiTJKL6BnR5KgugY2HWd5x1Niug97V7ZAcRyGy3e5o2TordhL4h7VCwV3Gip4tmFB",
  "key35": "hJMXtDDYAJRteXo4HVHidWbgpFRJRnjvkCcgkemc5VpBz6kgP52P7Lhf2hALxuDGXEPT6XXhXW8ncaNK9EyN4H4",
  "key36": "4FDYxWodYL62hPzGL17c2RxUe868TYPQoKayyFohRBxXKZVjgEjWnVVSaWP1kAr2fxEGcf9mpCFCcAPAeeywByar",
  "key37": "4yuit7KsyhPr3zGVTQ5GVG9SCyrVi636nwvCBRs8AyvvvDP6cY6vpjdLvfs4VNzwTnnsdHUGydodhrs7T77o4fjj",
  "key38": "3PEGB33bH4rEW86wBYCv8wxuF62osMHMtmUNpPpUZ73X9Ps756wShht55qfhLGY3Qr3ZfKVLtRDeGXvVyFsRFJ1A",
  "key39": "3C36cRLSLmpzkqn5Aqcx3g2TTKRp5PbLATtFj2EA1BA5c9yhRPBJPvUzEsST7brvGgqg78zWY47Ukh7vKmxPF77b",
  "key40": "C98CGZD2aVYz7gVUH2sa8eh6eU4GSa1H6CVwDwHoJoDwLYrZiF2PBarLPPBvNo7H2s2CkhQFSSL1G4YqvL3ekfA"
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
