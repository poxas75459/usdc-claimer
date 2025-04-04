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
    "2g5N9GF54f8MuSwjEUueQzsT4d49fgFVnUJNccjBvk16eZoTuYPJ86k5xHWiZrrYk2SFjub9GxmgWXrmZVj9T9Pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z2B24G4SKazaKSAnRWuoyEmhYDWs5ED13kHPieHawuReT3AeS5VoYgivhqTtj456GR6ymHZcFbwaH8AqGLKmLSF",
  "key1": "1sNHhRnUAjUTpSz1XbHVfzLkGcWg5NRo8YdALwdVu1x6sdMK718xmjn3HQuHiFoAuYF5mcGwKYKeFVURfeXoxkG",
  "key2": "3N1Azg4K8dzfdoEnowzo3dyxUZgrwwTo8YfanVQMNGqrmM32hbruhn1DYPwm16Ffwd1GLrS5xAs7tArc7sSKST6f",
  "key3": "4snbHZ9k4LGK5iexMCcsCAjD8QAtgtqLC3ANkWk68qkkJDD6Wufx4J4Cf6bMnGEX6Y8R5hdnWtJcw5aGSaaq6xCa",
  "key4": "4YsABj3mCJpFyvAWFngpvHpMmhiUhBAuwtEKkcSaQSTLvJGvqfL8iCeoKPt4aAREkrhrzP5FPis3DnAp8yGFSzSt",
  "key5": "5Ni3tFmypjCgFFNUP8rFFryTaLXvkanV66dXcRuFRCd8A3gKRGoAhQq17z8P7MEo8hwzHs8m9mCrCTr3KVqw8Lif",
  "key6": "3gczmty6CrwKu9jQRTdkqZWP6LMxYXdLXTzBdqnATnUFeni3v2DHMEFz3NEFwkNumfqwid1fTenCCALNwHnp5evF",
  "key7": "45dzNAFMxr8JEUjSGy7qz4NPPVrTTUBL9vbdbG8UjYQsMhYw2927SXJXvq174n1ozHMnPB7HxvcEEney8ABh9rzP",
  "key8": "41LWgDTwFzm2BtFgmyDHPjN5RopZTKUfMUty2oHBPUnNydqnDJx3T2qwynQgRHpGCSiUHSMJXZbyujstbDFvHqrB",
  "key9": "4iBx86Kcrxf2SZJNEMjD3jU1WMNYQF7drp9zm2MDxSkb1aw6why2wKtHpjdgC9A5ha4a6jLHNvPyApqj88DUayaD",
  "key10": "67fkdxvsJwaSogKXFYmjxSUBDQggNgR1NY6ixWsV53KEFrvXCqiXyFUnM5EAGmxqyZwcKMwfur5jC8UUvMSsBR6X",
  "key11": "4nNM6pXf4yFCyvK7pAuYDCjQQAaJ5BhHJ9uygqXFWYjtKV77nuMAW8ypvaiM9CackQKqfX7sS1KAjwe4kmkSG7Pa",
  "key12": "8iZYWMC3su1saeVDr2yqoyW6yJMsptvihCuzzAf42mVWGpTwZGEjzhAgwUeR4ZehFjqM2PzNg5NZFCstqvNhJjp",
  "key13": "65sfne2yfvvtN5QnYcvPexYwteoqt14BGR6qJG5FQRbZHdzQGF33HWkd8HdgbXnpEg1rSBfXP8PapkXXz2eQ2biA",
  "key14": "4CqQTqoRKDh6E1f6gwftCv4hAzdc1tA4b5UpU1oGdBB4pL4Xw8DuNz5KrioKkk9ZeZn945Z92kVoVSRzWDQnqwhE",
  "key15": "DPadzC8doPrG4C5trHh9KHYuvZi9Zw5jV7XPzPznSa5F7yUWwAs842d7aozBWt66Y5AW6jmzuDDx3bkVkSDzLvj",
  "key16": "2XJE4X1xWE7cRAWpe9pxaMxisdSqUZpXJq4YfUCQ5EA8N65giipbPxwWVgggxh3JWCUau4ooauAmyX2PAVUYpLKF",
  "key17": "5mfxDnuoBM7zWFbUtVXoDXiabo2qJE1GwNcK1nRDJMrdEAMuxM6ywUMXVzRoms9prezU8iZzQ8CkH7wgri4hdisF",
  "key18": "5Ra8BxNL8xsnej54iZ6crRgAqqHLCcAtrRb6pcV4N6eqwvJeRz7G4k1fg3T5SNtSZYT9KmnJuq2EFJ198Y2tYhMG",
  "key19": "NU1RVjnAs3xu9Z3tCKry182bsyKafS3w3o4FACiXEA9T7KmJbaDF2qFy8GGEmAVTirVPdTp3KVeJYxLfnPNKT8P",
  "key20": "2arH5RqFSdEenDNK8awGZ2d8Rxxh84R6qekbixQbSgS4UjP9u36FDWjF1doJGtNEGx4ChKhwE3Bh1zkaBYCNFY5G",
  "key21": "2hSWDpQXeNreXR4WZ7pbc2ZwNGK417939JaoawjMPcLQVmKHvYkBRkdQWJkByNhaH8hzbpXZcZ4JFFvxKaKEesXz",
  "key22": "3266TcC8h8HPtiVojXyYmuhCKgbZ9RERekNv77MRQU8JM1QYhLVTbJbunrsCPB15UWZp4DuGU2ALyVGPkCRyVizz",
  "key23": "kxSW5JF6LJ578q829jURwQVVPX5XuoQK47NSbviX8GBgknW6pfKGeDnTtUWxv2R3h6UdMiYp4JRjXgBRQACJfbR",
  "key24": "2kq9vDiQZx6FUxPNsSmqCnSD6NDmE7AKAXZP3zeiqf6zUqMyjqqiqYbsanigKy1ErdiNUMoAiqufVR5PdvXpcQcU",
  "key25": "2xdSgGMJEeCnU6948S6eqRGCNrLfza564JtRzniCUyL5fWCxDDtt5YEhE2kPBoXRCsBqw59NQNU2VQk6ioCs2Fuq",
  "key26": "4KcXCaNsiedTVE3bEx63CN8jGkShg9eNW2kGM21DoCCFthCYDWEf6VFNcVYXkJrbpHm72rAYE9SM96YfBsGV9sGQ"
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
