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
    "3Vaofu2YK4F13MpD62YetAAkbNDmH3RzRHy3dXktG4btZotrF8PnJJkNZZ165NCLXR8WaT9QE8wCv48uXo8y3Hwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M7RXsmzmoDP6L4zDdPkN2q1kwXuLY6BjVdGjSGmxH5Eq1DaMGBQffMVQyuR18NCFuJAAtGd9xw2JA7hKaazuX15",
  "key1": "5eXibDgygSuiyM4zSWdsUr8QKoqKXCBZVkVVRY8bZ1czTXhY5HjaLYMuMGtdZttaPA94phJ3TGLSGb6BNo2JJPRG",
  "key2": "5ucBbFVmrSVBNGVXfNsF9CDyd75Kkr11PeMAmjCbbAEiU29GqfJKDQFBcC22qLJ9ejgkguo3XPGnNk3dik896Ky8",
  "key3": "5LbPzQhxo66kN3HTDzzU3EPssPKYyRiCXgWjF2ed9D81xGodYHNvCPEcKctqZ8uCFzPX7cKo7BWEZZVR8F9MKV26",
  "key4": "5jx2AUktrtUPtoyEzo5viem9ptvdqjvXBjVHdxsNQgLG7mqyyFxEHXhJYwLNfLY1BqzsuySNuZ5c2qGTRX8mFZi5",
  "key5": "zgqeeZuHw3ZsYGZoXGoNB7nttHbWLQEJbYG1KvZBvgg4AL6FPx2t88si8j1HcfymHZy3KXzJVhafNTZum9dNbvT",
  "key6": "2K5UJxWqXdZaQ8RufcwtxsM69kZcp28gnzTLrK5RFEfK7ZgPw78NrwWkdxRqhNZJHMh1nLGLkm3KAvtTCz1a8pUm",
  "key7": "2XPMiuSJDypKZYrGsi8nrthpM7bTcUTo2Pobaf9VXduWAd5NnqfzAuKqojYpt1Gft8eEhMhLPonYjH5BQd2SS1t5",
  "key8": "oJQyP7b5sJGLrsAsy3AdWdkvLYrtc3W9HHgJQ9g2G6jwdxNPAstiUGrRvfWSVze4ct2rN8up2m2HyQvYMvMDbFp",
  "key9": "4zihoEPiZbbP7DLXKKXSo1J6dHZjX91PhLAtEMB5EVp1tbgYSYiWc2BLpPSUknBe9zVV5PUZYJq1UQNCS6PN5Ert",
  "key10": "hTsd6gJPVUqUamrNJctX6TwkAPvJegTFe73bHGGZ75mSaaUuFxwVNwzG48XdLyGQHoHpdL3PZqAxA58JKQtz7gg",
  "key11": "4zoto88H352REQ7fmiDFXojqzqafyMyZ1vfTDbtMPxPYLXbraiE1YBcZBrACrcUjYRSpr8UbryiVhQ9maMjj2Wfu",
  "key12": "3LAAJdFB4hoH5CkBJcc9q6W9A2pbk4FJbN9CGnjtNCqitr4WeNjGk4XvSQyTee3eBR6PkjGEpZG9M2mJam8HkJoi",
  "key13": "2vBWaDrTdQaFMPeNLxBaEMTkk9iLLbNti56nmWorcRLuaA2ueVMs28zvp9rBS7udATW1GkAiWUdRVP8VvEWgyFe4",
  "key14": "Fo4Y7eTHF5CxnZyvs9e4YcNBPPcBUcezVDNaz1BYrqzbQgpeSiXUB4baH5rmhMTPU1CauDKtnHvVe1bRHH8hkRw",
  "key15": "2tUSJQZ7vsmZn8ggjjHRohdMzvRHC2i2HAuFU41LTAAYvZLHHTEr2tLDuT85DGshyZkBa1hbHERnv9JhfpULK8BT",
  "key16": "2YyDCMbbsU1f4KaaFphwUYzmvrRS9qAj3iacMzeJywTb17gN27jLjUVmwQuTVNxkUWsEWiDF8R3SLwHHvt68BYJn",
  "key17": "2wDm1T7TtDverhZqoefa1zPoWoaUqXU8NzPD1YrzYbunp9ENQmWbCSYt2ME53VpmvX8JRFKQpMSvM1L83YZGiwKV",
  "key18": "rpft9vEvEUkkxN4PAm1hJMxkpxcjbaHrcnm86skfisQjdkSjn1CVXkxGkuZYQraecfRuHgU7UhnYSG1iy35gxkw",
  "key19": "4L79QrJMznGE6XtuGQiHU6g7mHmwjmPo8V3e8pyo9jjzLpgX1kdPeoCk9xYKbUw5tSRxwkVvE9TwBJm6stwes17N",
  "key20": "3bNn2y4ibYjdRBtEb5gPmYxPhFWWd1pqBMZQYeUAGL2sgjNjUNvjCxd3Jz4diXKY2gY3RZeNBLR6gu8hQRuvhQkv",
  "key21": "eT9E1AsYzxc8Gwayy2WJeaRFLEAKukZAUjMoBfP3CcEWCGUHYXC7LYKRNcZCE4mjpyYtK6mH8YQ4rcjtSX9BtcS",
  "key22": "2PuXrHnYNgNQ26b4M1DHA3tCaciy4YF6ZGw6Et4ZZ3ktex5qj4rrCDp9AuLNV2yLGazmJrGou461G8Z9gSSEFYja",
  "key23": "5rNspb1NHJGkZrdyRJukZioKX7kQuDdRoiztBU91pipx2ZHrNFe9gQcUtTdCP4GG24wq6396fo5aJPNQwtMJcfE7",
  "key24": "AD2Z5Qntat5tRgTS1cTXf1bhyiPcDLwCpSS1caVovxuoxBt7rSnoqQ4LntAqCmKW386w6svfkTwi111UoSJwDxh",
  "key25": "2858UHR2hMr7fcNSVagAkFAV8mT1kTNZDdcz8Fe9pV4RqpXqY4xwZLZxZPdDQn4jhVGqovjWdbD9axkAD5iTf7Va",
  "key26": "2JhQFnszUqiTFYbNPqBnq4Qk2LYSgRm5BufgaULKnxQ2GqkcpwGDQLoXYaZnACeKiczqxm7LFJmX6TswZczAMXpm",
  "key27": "233FGr849bZLyQYWAbmt3A27B2sKgwpWkisXeBQgZWMXxWw6bfg3GHdW6VPqJuKvJ5o3MeEYaTByQAvthWtfBHCu",
  "key28": "4R3fxq7f2hDLJeys3f9ZfDUiRJGF5RDLbtHN99q2rwGPqs9KvQXVKkMNsZMNakhUBQmJF8UhQ8WLbangavSsMxSD",
  "key29": "4neJtSkykUAmPxAzFDwBAdRhGKT8A2ZjYebBaRPpLQwMDJqzADm9j15iskrfMSX78arGQjBxaxD8RtjxUgLq7kvp",
  "key30": "3xHgvCbUoGra5EyzpDWaUqhRPKoPNfFMsgLkiVAttysiJDbnHeGxuiubokSkhLCdQYq5f2NwUuKoAqfktDuRK62c",
  "key31": "5fxBVNijKd8ai2MNH8MkSdu5ow7G1TfKXTmFqD1oo15YXSD6kdU2KLFBwAoN7SetHvwWFquxzX1aL8LnQuXjJUYV"
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
