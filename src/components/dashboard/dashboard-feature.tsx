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
    "VrduiP8oax3C8yuB6fzytYgBW74LLukXpb8zgAjZfyQCtapFgWubE4y53fhbJbgaanH8mYbHyoSJxKUXV4e5GVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hQSvKhXzZZg2CgLhS4pEbmub9ri7uS91XDR2jYPxV8YK8kavX1nuDFMX5YWLmB3iQ4BBNhc8a4Pykr343gbjbUJ",
  "key1": "4NPRcgbSPRpAtQAi4793QZVWTEuRNw5mXhW1qMNHMvzkgzi7pUWywsXcnuNmPyThp8PLBtd6qXFujtJ9sGm2ipHh",
  "key2": "5qFTd9GPUTSTSmfk3z8PE5FG7nzipzE1pm4PNhoZrYsmUeY6ZZC2XnPPEpZEyZebmVY6gLo2zBiwxi9hcDpBesom",
  "key3": "2SaszrUknffVDJ8vdH6heZ7fHAV7kxCQLNLdRwAgufJBGAb4iUGY57yLpm1SEXqt5qHpQwuTtCQCRdsXDiqoswwv",
  "key4": "3Tud7gYqukFCGmvFsyC7AMjSzmzeLXW5ho1z6BHrmE22sYh952gCg4EUPcwsWY54RF4fWgBwmPZKLeM9LFi1dzjA",
  "key5": "a7bnSigo7PPeTY5scTkYYTvQGz6u4UdR6454dL2UpoUsFpLH3u73fqLNRYrZuBRaSEP2NmZAcbhJkrkicAYatjL",
  "key6": "2hnPSQMkwYYzSRao9R3TgeUFDoAQ4sUrYJi6vihZJmUPK4hF1pKfCenHct272Ffgo4GaHZKDw91rjYz5JAhVM28X",
  "key7": "5ULzpeWiYLwVpbLTZCm7YF69izRLjVC8GXMcwW9u83fL786bVqdYHxCbmjxGJG3K7a2rtzpH9S76U47yPjTSMcof",
  "key8": "3dF4ELp26SDH8FuUd59ivZw93wF3gPQ6ZoXqfPijbEDmwyu28CrSz54Z48XQXBaiMZANvHn8XS9QjgZaZdAkC1aZ",
  "key9": "4QHynMJQQ2aULbKuRarvRgb9E5LxP4rGfUG4uePtgi6JeXoA6dv2vCPzZsFCSMELTp1nsPW3iqJkr8BcGJbbqNgY",
  "key10": "3uwTeaLUBp9gb9c4Uy3Z4dLG4o34zamZx9BDMRE3tK4gpPp6uoqWyRZTXSjqR58z7ZVyJQj3jYLs4REYtGgJyCFz",
  "key11": "3AgJGeCY8P3Lzs6wwkYKTrxztPazqPpd9VRTqB6TrLn1KFTxcQJ2i7XwyAH3mupdCpT8cvRFrGUnEEuL5PFwZm7M",
  "key12": "2Sq5V2D4hvVtmq8jcd2dmR9N3EmLmG2ERju59HLtE1ZQco5b7UZ5Z45WTjmAShDPon9558CxnpdQyEYPVhSQ4pf9",
  "key13": "5ETfpa8v9dC8FARYnGe6sioegrfDup2hz8TqYKEB72S3G1GgvyPuq8egWMbiyPMgQ28BxKDsWhwGDP9xtsq4tQKX",
  "key14": "JemPwPCk2r8k9VC8DNCw24sZd1HNMoGVfiEBJMK4bxvYqg4eVfvjmxcRryyPGJLaTJbMdnSxTKiD2KZavRXfPmk",
  "key15": "1EptFarqpnuQiFF28AuMTFou1X2cPbkaUvPK4dP77avSVG4ZeGKpWGo41qw2KWkdqrvPRm6j5e4Xm9YutxCDYpE",
  "key16": "3NPjTvCLnkGxvUtYNnRj5WNtJ2aYARuQrwdPDoCdHqW1u3QJx34WBnByTWgx45h9dfX1gRtRFhmYdTUJbNtBmFsZ",
  "key17": "66oMF6UBHyDzVUpD5DhFT5hyVAYiWhAkXb6o4vrirESKJ7Mi2hkiSgaD4e2D7z7ZnVdECTYxDdxo6cf1RKfvwJqc",
  "key18": "3hPvicJLaxXYUiWKUAVFkxg6SCyEfAvoUnVmiBKuBHnHiko7KC8tG3DevRcxGLurfGfJHBNZWkwH9ibbnEgCZHD5",
  "key19": "oScxHsKkzoQmYvZGcWZv7NsBWGseJ2ojDWwadmrgvrGVanF43QsG7ZPGgMuitKc4BPVPjViBRAMjCL8Xtt8RG2q",
  "key20": "xmC4v9dh3zN9CCVuomnyfyNDRgo8kJhdugjBYrLcGA5PpTYnrUcc4ehuppfgS3wHjVj4ZxFeZxuMFMAuq4t4Wpe",
  "key21": "5ZwBhd2vZRzauS3UDRg8rkfpbSf386dx67ADMUUSd5NvSATe83AyyffqGUGY8w9mobKWqECtj4UdmLpxw2KBHFgK",
  "key22": "jPdze3veq4NTNwHSoUzTd8uJV1Vhso2oTf6enPssgLDztAo6RPxTScVZWgisbXVAJEMTE4GatebGyrPu1tGEbbf",
  "key23": "cZxvfjmnQPK4uVNPcwpB2pL1sG4KhuF8768kZJys7EmGkvYtcpDoXuauWX12xDHTveeUGGBrDQRBTQvKmjGVkqk",
  "key24": "2nnfJLCNehx3sAFRV4u1FH8PFtUdrGq21FpFDLzZeDjGT9oe4Sscqyi3Hs16afXgT8kDkiMLgCeDbK1tXkbDHpSV",
  "key25": "gFjQ1Tft7dQ1NcZsEPAJQwUKqoVrm7RkodA3mf41sr7DVzvSkKUYWW8g8BumarcjbRDKcfZYHsCvu6hAGh17i5Q",
  "key26": "5k7U4amnYwM2Vf2s4qBP9u4bxWn4iioTGbrX9fFWfrdFAzwRDFpQ8y4REog1K3bH7mjpsBeMnJUgudjfnXLgUZCm",
  "key27": "3CcLC7BmsrkcsCM9pSMWG9AUfMq48cobh2YsYdxRReBLQ2iqXodLcgeQAN4RogJXaBeunJyF3xP4bF7ijZAYD9bU",
  "key28": "NKqqSkpcGwyoJmA1ZWBJ5H8CzrEKbniLNdukr8tuFFAQUwhP7BHuL8JiwvMzM8bnHVSQhTkY7K2L3awxbMKy8ZU",
  "key29": "4zcBp6fxJVeYUgcC8VYzFiqYkXnJrKJUSzAj1LjeLAFtY6ckq7afkFws8eP1iKxrQyseq2PgYoJx7FNtizFsjqKv",
  "key30": "4gpe6Qi4iGgWJM16wrLtESj9rHBtPdpWM7xE6EQ8zJk3zU3nLiqefsXy6S5EQRfCxzMyWoyezGL6uQYDuGA4LzjZ",
  "key31": "3dgKpwDhjYMAxPkDK5pVRbBAnDtiPiGeY5jjyyKZdY71uz8KpUymgsnjqPDREWphEQWopM39frzufPJ3GK5hwCk4",
  "key32": "3ZaaAMWhM3VtVQ3xLGabmrrn8Sga8eziqemNF4EaQDCDHn3reSqHFbn9kvJviRVg95tkxFN9k4JCr5c1npijKDdF",
  "key33": "2yntFykUDhh3AgfP6uFFAMp4bMpid8GVVzFj1TAVfLo4n3x1vTfrDL1wgSgCUiCCzpfc8dfWTaemtrSiFynEKVze",
  "key34": "4k1jGpJPTHhSwufdUtHaWLvsqXRwSUhcevohdJCkHbzUK29SQvTbWifnJb9UEFz3FG8BLaBEB4KAu8Nd9oHbG3bd",
  "key35": "2CYuuam5hih1TRTbb3c5maWk4Cq3aWPwcYuUxhTi8RbQkGfiwksb1qNYz139FTVwRzkZGHMkCaPpnBtzifBcUZ2b",
  "key36": "4ga6aWAEhUcm459NzdP2NqAoR8HeSLjnoEsfgLykxiUGcVxTXsqxtRj5kBwyKn46KrfePcRa1pB2i3zzqGdepoEc"
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
