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
    "5Ej1s5g9FXr3Pf54gm9ygAJJmCWPrrHhqyYEh4BbZjATwsRjoyZXMpjGr4Mx6UMX4cX8yQji8xhRge1UidQnNr7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z9nVPwEpc9qqoKzz7acBeFE5yNGQ1HGWVMaLGmKW9zdjfHqE5fi8GPZX9cnoibmrQ3s77DLomREe3rJw19DWYyB",
  "key1": "LTnJ2VHAftwn3gxtiqMYVxGtbiTg9VfrkEsitbhf4rH4XtB4mfn6peD2nxLjgvqz2FA9ydrQ3Umk7VYaSVSxwYZ",
  "key2": "2Rr7ALaVk7NwXBUmc6fcRYKQeeHzavex1wvDQ25dgALvVWMDzqTNQvQCZ1rirpB2gZ2YHAtsUsZHuApYvNXHDA4V",
  "key3": "3Jn2MQkEFRyBYjQSTxGDiDkhQoMQFE9b3k3BRUsVxY2ejLicpdPho8RUSyxge1HPLS7KYQ4NXAbD6uiq1FZUysAL",
  "key4": "5KegJ7Z5G8Uzp5xCDfUpETY6Wj7gjDvu5z4Gdj9hDVfEdtSv22ZQbhEBw8UDxhxUdob5XRQvZRK2noTKNCZAvHMv",
  "key5": "613EeL2v3TTwqVaiXUJ7Kq31wU9GjcgEVSZMTrpNS7u1gCVqxqzKj59gHdHYNgeSs8MMB9PYAuMyWocrhQGtcp4R",
  "key6": "3mp9EsUn57JkeP33m9kBSA2FXssicRvQhvgVUuwg37au1sesVkfVXRXhPmephFoT9bADTUzyf3BNjPgZ67C1SotM",
  "key7": "3V1KhwXFX7KqpaSXD7v9ydpjxcbGGH3QCNBLkGDW9CbSovZ85YUzHf2nvpGs8peLeN3RGdRrDQXGuvWXTQxhQzhH",
  "key8": "4WityMfoaRHWJk2FXhsSPRnaGEmCd4kA6za4vVZz5MBYAnaFAHQxXdWN3RV55AGjTw4o9d63enzANsJeJ9eCPMU2",
  "key9": "3Ben5B6pSdEcapmK428KVgjKdAD8RAERVLZ1b6gTM64ap8VcMWknKGKdG75nmbbrYQFBMQFomfkvvtfbMkqgQRL8",
  "key10": "36o3NfhpeYpathWZMwW9gize8eCTbRzTSDa1Z2zQBkdRz3DkNnAPcrKb9s6RZ5VxNhTz3aGsQ8H5joeDKcAB9sXX",
  "key11": "25PhRwGJhb9hCh2ANiMG88uhj3oufNg37cVvHCyxhRUA18Jw1y6fE6LaadrDNbwWyc5Xgkrb3xVzcQrdG9k7iU94",
  "key12": "4sharfEr3isKxtDhAdU3vPUDJSh9uNgVN4pZkzfiyXUzWq9LvvviiH7F9gLHNzfyfyERvdL7neYnRcQ6xd52HZMW",
  "key13": "4k3WbdpoKrmeQg3rBcURGPjYTi7zGMgQKVmafR6sKAf63nGfSDnvhx3T73MXmVSyZZCDo73XmyG2ciorNbvE1DXY",
  "key14": "5Y9AKg9QFxAPx6GNq1ZuMP2G9jAUUF6czpfyio2ieJpfWoC68RNw34B2QTKAheiWDwo7sp7CapTLVdR9wSifieeK",
  "key15": "4HA1CmxyQ7HuTviDX4zsBSH5CxfHKDsqMEAchiUqpqf2AKM9dU6P4CBgVVet8LpUJ4YsC66kVxh8ZjFRHsD62thM",
  "key16": "UJe7RNh5MwUT1vQ3oSfUioMLcXjwBBXfSMXThFCx1PAHYNU5znxLHZoCQTgGrxnJipcHEtGSodeNFizuApLxr55",
  "key17": "eyhD5SGKajvnD9fgUzSTHX7aYSgvTrSC8tENUcRr18mSkPmheGVWkAiSoSAZS4f6PJ9MgA7RDiXDSyKu4rQt4kj",
  "key18": "21bcj1JJRsQKzK8bc9RRWUvKYtykMQhvQquP8qThjUNJoJVs36duYFY5S6bX3ruJXGcJuVBgKUJ3yFZ8yBibzmiA",
  "key19": "216AGharR2JZvWAt4ciGn7at85azuiZ5JXABZDzxZP5DUjvUbRmxLaG3kC1ChMihmG9mSVdC3YPFq7TnPw11bJuP",
  "key20": "5oa3BuLijyFYAK7hy3QaYHPJDLk3Wnvthzprs4PNupdXA8wGtWCKaW14APqcYLoEVcPAsUT7UNdh6kAfUk6GTxPt",
  "key21": "5vWersJ5fCwUtJwY58XVvMrBwUVjK9h4FNibzEbuUCMbpFTABPqikke4UhJBG32jkK5yGnCYvYpC2icyxwgCPk2V",
  "key22": "59T5pcwtRUyuPboxE9wuvPt8TK2NBSoBs3fc4VsUcX3qvQbQV3FsTFSY6zHyBpsuNki8Cf684Drj7bd5apndfbaH",
  "key23": "29FYo5RysSvofqXuUMtGChwVnpGpWnUDQn35HQQJqQmJfxrupzHC3vvGFoKRmiTwu3SJ33GcMrCsXgYTd6oWaoZb",
  "key24": "23C3rNaQ5Wc5my4iod23MycbJfPFnx9Uzu4RCPaHzswR7BMSfoqVmAsPYAo8918shcJTDCjdCXLerGaUrB5bU8Vh",
  "key25": "23MUYYtU3nMGJRcuzBDkAAnQr6Tu2Akxx14j1TA9UTnrduUedfT79QLDTVGj5SnL6UuQ1fdL7TL1auzjcKBa5JKM",
  "key26": "3Zu5ppEoNRYYiWsAfd5MGQYmKw1oiDCgWtKToo9PJGnwtCqHpAox38dEHvpjebcHE2ZppgP5uKPrnumpmdkHCEb6",
  "key27": "3kc5SsfXaG84d8vygrsnnn3GU51w3RWbFzQAGcykbpKf5QwuUeBBbt6QAqKnfSyi9FsZrBU9AHp4bjmJ1nwDa4EE",
  "key28": "4WNcMUt2qDAoaBD4yoEqGnuHsJQf8wJywxuXTviN1drcciX9v2n6vnS3G2aY15xpJSCPBVFWARhHnFfSomDehXHo",
  "key29": "nhYiBs8j6hkYw23wjU5jjc2BFj3YSjesvq5apBbEVvZCz4oi3Qy1jLmTPvcKqi7Jf58VNkJqfH56DHruJKxDmc1"
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
