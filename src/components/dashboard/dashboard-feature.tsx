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
    "1tje3UVeVp8rXkiiXTkdfPyzLMxBGsWZe1FxcFBBgs8HL8f2ZXAFrGnCAejZM3Yw8UJg7NPXEUTFr8Sin9kmwgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hvK6j7bsV3xkh3v5cvpi9f7kkwVhevgSXCceM7iRBMSde6pcCMwcwcJX5oWk7UpdKYYvyFZPJFpbsqg6K9x3M33",
  "key1": "5giHWjhHK7hUgSmG2DXFpTc3NyuFKyjdWB3TVvJmuoB3BVNYNWvV8US9Mned26VwwWj4XDv7MDvMUMhj6Kg7hEaf",
  "key2": "5wooEnpn9uiTzQubk4RerZJcvXLdpJRGnSZawCabjNZxutrCeLmj5ZBNatY6UrSTKo6C477Mv9FPtRUBsygndTV9",
  "key3": "5i3gJkYKoeRPLCK74RoFtVqt4vEg4orqXApe46AjJCjHTFtSKNpkxLxmo7Q18hcDQLN5DjSeJZb5MLfeeBgWYJfU",
  "key4": "EGPwDu1beUhX8SCLA18oKgrVqQLvLLAXBrpWGN6whxEt5Uzxkbngep2L5nwNQH2T2ekUZWx7hS26i5AQ4Ayi4Gu",
  "key5": "3V8DFabV8jD1Zp9AnCxES99QitAoAKKDgqgL6Pq7GZH4eSG86PVnSazaV4Ewzbwsr1CNNh4t922wewBVTwU9VKMP",
  "key6": "3ZjcEMod74BLfBFZcyYChdY9ida4fPzmEs993TC8FbMBZmYceLFPREaje8vPExog6Dzrt91cgLXHPm4SfhCrm8mL",
  "key7": "5aEnQ1xd32h5UsrsNAZAWqRhxsq6ARyAnjMLfAVJd3DW566KYbwwd8o2wsaVUNK3PFwA3P24bEq47dUrywuj84TK",
  "key8": "Wpp14qCrKruukPke2k37yT4GTw9mjeTMhFYDeKhC2QQEbB3w9gWf4vVLg5nqip4XUfJRDakbb78deh9EXL9oiDW",
  "key9": "5fxAiXuiENkHnaxaLVPwQkcmCFEwznZFmRgjU1m8LMpgPx5vKeQKMMaNADrGt99Jix92ZpNWvpPrS7fsXQEqW8yu",
  "key10": "5ywBEL9tPNfAsHouFwbgk3UtzRnJxLMGn7KccKcqLkB6dJhLEboFTt6s5b7DVWExTdNpEAcbhh4iYxZBDXNc12Wa",
  "key11": "5Gx67G7PS8uLTxYxeTic3Qc1iGrnfCBrJKVzumVw183g3ELZGLh8EX7sZyVs4dGsCRDvHuk8yx3xavwTLqv2kssk",
  "key12": "2fKKB7ghz6zPwCejC8sqgGw8yc95CRXPoDjHNJiah4d84FpPR2JiPab7RAuLf8bULy6LzwEqhuV1nVM9km1uWXTY",
  "key13": "2ghvveFCjxefi4dsSp6aN6QmNFCB7yfxAQrASJP3hMcQHXjCWBKDi58yKk83NrKFA4RAdvQGriJ5BausGw4gMPmF",
  "key14": "ihffm6qCyW3j6AGCfdfCSY2VGvsVnkCPFJJB6x18mTKhGXLXNYG8UveZCEdJ8QYyKrEWPnxAJXTRGo8ceiRw9Ji",
  "key15": "3kZXqE9Pt4vdPUj5iiD452yMA4Ln9UNqSPFYj2uNTDKG3jfG4fds2M1tGawjgM4B8uMD5VejsdHBj5fjcdtZfZBo",
  "key16": "4fAEYaNpFNPcsCp3oGQAwuM3oXstgaavsz5uVSK5RsNLJTgn5o9S9t3sSTwPRYeS9rxUyJDMLh6iEE7CgodByQpE",
  "key17": "3nKPhscjMFiLqLtotZegnrTTJPFVgx9h5qwQwpgmcogRKnyScWnbgH1Zq2AzDWYyPQujt1H7huWiFZ1ymLXssEhy",
  "key18": "3cE6JyC8yXDUbE5Hmc1mFixJozFXs6PNPyWzrEq3Hw5HWGuRgaVmkvXsPHndPVwAVuSypkSRFgFQzxzCaZVc9AJw",
  "key19": "4idycdngDakaE67TDNcu2WWKmokHRxu7MnXJdULokVWamyTK5WSh2Q9sndrsbxc8wrirMyZNWZntdS6svaae8z4r",
  "key20": "2r5oiHDXi9pxHMaPzfBvSRhgbQQWeardJZEPDRi43ELBbc3pUu68eodLsmFvVZevo9L5cbmfjdgqFjXMHWsYt2VF",
  "key21": "59spMHm5Hd51hqCMBszcT2AALCc4PBEyYHdCn1ywzosE9dq5vZSk2CR2D3CmJ5rS3DgQdmMWdqfcSDDg1Km83kGC",
  "key22": "2MV3CqrgPEJ213xPrsJrjojSFbnPsJgALj1XSYVbgS5FJAMmCcwb88m3ZNKv9whoC43yFMxcXjta4t7QHa3u8CNm",
  "key23": "zWYnApa8jRimfqFqaVsbdN2yZ72Z8yaXEuRuA5qNqjZ8Y7cWsxJxsYzbrG8zS3RjbnWnL8uhW28AZpf12qtHBrL",
  "key24": "34AQZDc5BZXxJaadDSPKme261KSK2PCxRZcTV1FexqjVApS6jGXidsihh1aQh9jHDjZMwBbHmSqw8Hv594BHevVh",
  "key25": "2WH4L7cNz8acodHXKJ3y5ycYarGN3dAinuBtKiyaG3S7vV7yne5U2N1tT6w2sgWis6BatMEWzvV7QNLiuvNUdeKv",
  "key26": "4pk1QjwnBz7yMBBWBuXJvX4EptxjEcV6WkbWa6rCGbCLSUjQNA1E99Z6pVzczmaqWSmNNXthFx6xXpds9Yuxsody",
  "key27": "pV9VSoEg9dG4dB1H5SeSP4anSyVM6TKz9GbuDQnoDCvxwFrtBVcoHUQEC6P2nAUS8jCEtRGEaAUehS2ZrZrmiit",
  "key28": "63BKo7SVrgPRXKeWEinx6FAcEyQivFX3vYsW3mxoFGHm5sc7WtgwjiMu8K1WwNwgnbcthV8oS8Unk8xWzPNxQKbG",
  "key29": "5XMT1joD5VcsXkCGtJHCE78aMPidWU7nNyYQYNJehvJuJuZonuXpjaU7ucWVo9CgzkfYmgnyG82dNTMp4oybBiQr",
  "key30": "65yVpC2qa2BBYkKoprFAbEgzfZn8WV8ZkFyhdXB88G54cpye2wisToMyqhtpq6VE4x1ZVnBL7oPb8MqVD2LZCpKg",
  "key31": "3TPXQVg6vTD7KuAtA19eDWBJYdvK1qmzmcXTztAZ8W1wPt4PUUWPLc51wsHmUR3HAuijf2jDxXhDeLVxC4ej7AMT",
  "key32": "2uezZv6APYwwZKag5BRBdpPPFUxRSWfS8rYTWwR7UjsGNiUp79bsUd4qWXnMaAoZsJpcFzjxiBDcindTmwN2Lx4G",
  "key33": "3D9SgioV6dGHuzGrBzzhMrd1qjzJmVCGWobtoLNixT4gYsMCPSd7jtghsYbRau6oZGUaNzkZyuBVRczaGkffsySb",
  "key34": "3zNDAUdHTw8SJjJ7Z3kymPuL58v49Qi5if48XCHKMCEFUEgwHUubqpU8ragruPpjyuAbgUvRD521NFjVVfivfFfe",
  "key35": "QaZhJnfCHjZTRpNfwEHv2MQgCmdoGFc6JeQ1xZ1aBpPtt4VRZSqa3aWvQ9zyNc541z3xRkWfLhdSHA3vNKgbjof",
  "key36": "2QdAuLwnzD8VVGAH1XVUwzEoMuSFoYQmjcVZnsDuNgrn6tFmuDG2bnM3xiGhBq7MLYxbYpxYDpY6zJzv3tB9PxFv",
  "key37": "5ef4d3WRLs55YCyqZ11TTFi42EcXXaN5SAUjA2nP2XZSAbgA88YYU32SHFeSFfCJVyUP4NST4nRX9ba7Xb8MxEYX",
  "key38": "67PzEGkF4hWSKjsAL3DsxtQRX8q4XBV7X3kHwhxU7abNB3u2srRw3icHpAYLRxB7DgVYa6E5Cz5gJH9X7idkYoME",
  "key39": "JYnGf6gWsvCGBeo4phJDbp6SG2qzbKDfnWuRMYvGKoqkmDG9W7RJUPTNkTjye8BRFs2dnAm7rvaAm5fpopDSPUm",
  "key40": "5PMNfwNyphVwxwR5Rp3eCZUDb9B9tMcxtY3GDSj9Vm39dP6d42VaR7RCGgzAfeERJvqdFjEW9rS2wpuXLt7xc5aS",
  "key41": "p13RkmvJhVBweLjvyxG3yzHJpPaBwCwXXdikv2dyWyeQ4e48r1vccZgH6Cd97HLG14q3CDW3kWSyQsG7UTWjpDx",
  "key42": "5CAumLESJEXr8LwPDb1XRvauCTwRv4mwL1CXxCgogNfm481CZXJLbo2rTYQq2RZyHkdVCUGZwUajqE3hJL96UA6G",
  "key43": "4dbX2zA3RECiENz2t9tMESrmYvjLENKe3rc3BhjWw8cpkfCyBvp4i8fAvMiAk4t2esHEEAMEHsx3pUhUC3fNZFY3",
  "key44": "51RsxnW1Ueu3PpwQdomUFJC6fFirEAkCE3q6L4LHWwyENE3ebAtgvzQuTiQf4FM2Q8kzpnXh9PCwJY7TZsvbhbtr",
  "key45": "G2ocWm5SDYrTXrMYkoZjwQ4bUJstnHgzTBESvJP8uK5oYUQNwu6wCcgtdM536yUGhksyC6gdQRv5cWM95unbavp",
  "key46": "48vK5qDXgz2njC1rhKgQExkew25ch8fgxXQuxUmtTGhhr9RYhLWHngmJyJGEayF7NzKDzuiB5TantXkAsD11GMFC"
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
