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
    "5YJivLYJYgndq9ov7WyzvyBY53yTomRyujbxsNKDsEAyQEeXPVZQXUzsmTts1jFdJ5D2sZzVgidVestbYojHje1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VPXMim5FRr6HLPPx9LWhdiGSvvvuyhevwKo2zRUb5e3ZYqUMppGXVoarMGaPi2FxFVTpGJ8qLH7UB5fKa5haJ6Q",
  "key1": "31racWupVnDURrJbicHdwvpprUMA3YDA5L7HnMgEBjfMginLbb4znoXtczVTgHFd3KMW4p2bQsYMzYW5BLptcRSX",
  "key2": "2ZdZGbDHnzjDXyxKCWLxkDEBs6d54gg9w232sEFLmf4ygKZK3sksNEwDXFSkjxCLNxJQ9BmeakKap8SNnqxLEmgJ",
  "key3": "5vKXDXqoWTWLhgsGc6jDYz5GLZXkhBTkaMVjrwTtscfNRPnNxSgcmHxs1oTqch7GbsPEQtN2zckV8AKFTeVJGy8w",
  "key4": "2runi8H8qwrFeyEz7VNTsSPBASWEhbGFU19VFFMqtsfqXz3TLtohTSe791yfN27bejd1zPGGr9z1kwikgdLuSvgi",
  "key5": "5Fvt75FxDYf6NZUHic5VjxxDReuG2EutKpS6hTod7oWf2ns8huppNMkvVUdmqifmGUNB4V3GViGar4Hbk64gng35",
  "key6": "2Kcz7riScwz3YC55UWZU2JvPxW58jH9rVHtBBq1BUXrQdPruyXkB2JUbwuHBB2kSWtXv9ifg2kmmKSRFrvnquqdA",
  "key7": "3ZAyqopqJQY5rVK9DoHiXrQ31XxrRi4sjSMU2JF4MzHoj1Khb5BBAA38wzeKLzySZfyaHYMvcSGx2BDtUWUQhAzb",
  "key8": "RcmYXSiUiUFiFMT1a4Vno6D3vDUVQX2JEk8wSifdbJYrBXr3ErTbtyuyDd2WLZo1KWvhCbK8yhPAhW4B2VEJMKR",
  "key9": "5NV2n9hipebWniFeMUBHUCm66FpjuCH8ncBc55RDPKEmNf2aKJfTEY5Z767osEbMsi8EgBKSPEp9MnMqZmUrsoiH",
  "key10": "5rE5ZSj4rGg3rrxwfo3UVGCxkQX3JDPegAhMcRfXJUsFXejSb9iy2zyGQYaFuDCGfDf87RWDmMzPuaV1JadDe2N",
  "key11": "3oUm7RVjBbHoSHffowQ79JjKB6GBWEZH2ChwyjyyerXaA1oxA8mzp7aJZr2fLDWchYhyPLbK7gHB8nbdy3VxoLhj",
  "key12": "5SRf4msv2VdWpg3S3k8JWzJ8EPMoaDQyRh14MKtxWCrMkPnC8kHdULNHr6PhZsombScjsM95q5KxRw7bfxuoH142",
  "key13": "c9hQ3bRNCsxDmjRLZ3N9888VA59ZZaVRCjTQBuy8kVaeNQkWCyBSN5Kxff9k9GPZcJTpcx5nudTqyF7usKrQUrM",
  "key14": "4Px9RKQLVVogbNuKELsvZuVNkzeQKt1MtYsXPrJnPC4GgguXYnrovanbXDPPLx2NDg34xTWDwSBZPoYgKTa4bo7m",
  "key15": "5sUP5iLa8spjy7Vmc2Zd45HYsZsX1XrzG1HRrwmy73tvWevQgZVqe8UW1H4BgS3VhRubcNtNxsPQty48tLm2hpZo",
  "key16": "4B3Xy4zgC2ZQky3FaDH1X7aYeoUBaoTJtSineEg2RoMrCkm1H9dDVwazL2wmNgJSZ1mCHkF11MpW4Cce2BBeMvrV",
  "key17": "4zp8Q7ivGEPt79Zq2xXqZQdZMfLuBN7ASsRdZfxPe5h42rbbGJdBueS5cX6WKj9nsbAx7cL8aJ4F88F1HuwWFHMr",
  "key18": "4oxAGdTD2ipiyQPART2XWoTCwmj9u99vQV7Msi5PFcWP9PwryPyJUR5a7tUuWsFwZX7pRNhEW9Fn3v2iG6mxpsi3",
  "key19": "tJY1fRVGtGkEJKTKa4BvvAjqPffmX7nGjKzijtCgX4tL3Wn5ngqkRhuvrKARgrdE22HV7QaxeGe6Sq38C7mHGbb",
  "key20": "3aUQrPAdkPkyZC2RK2dkr7NygaGzAhm7k4KStMBEsp8MZ64p4b2JTAjVQTMTT8VLFp2Hr7wDn8HNiYNijti5Vy5y",
  "key21": "4BiTmh9NZQmiohhXhoZuRtFV3xNVGYkTxZ5e1ZgM2aisXnUZKFTRNLn8dTxqk1Cm6bM5ssVkkjaZY7QKRPyx68a1",
  "key22": "34gQvFZpHnqX9fDRB4ARMr5PF3aHBst4es8rGBpKqvepQrkfn4UqWP9KvmsG9JiPE7QjchgtZgjuvU4Dbagx6S1c",
  "key23": "5eLG23u1gHgKMYDnF84upKP18YBvrJN37tyyovX7qZPJ15xLdeiavgLbupcue5UdjSSjq9NUnscrX4hPwafKos9S",
  "key24": "3qDcoytS7z1KWxHyzpKxz2RVo5tpQLmjVtfMXGaedT41ywxqL5DiquTiVU4iGYGBiMaDNdY6cwdVosbrHNZB5CHg",
  "key25": "YKk38wpXZfijMwy4Y5AWBPSs2bh2y6f1AvXCYjqTzDR5ydR7Qm4uJWdMkFCQi8JvbDNChmFScgGqkeW92c9x1xi",
  "key26": "22p92ZC1Q5Qu3iSiNAkutHTYbmN5v55nHVKKBozvgRfcJK8vXknxnjWkZmG6mpwwbXJHNNxikzJAb8pQ1EjZ5YgF",
  "key27": "dpje4fFyRfrRF62RS2CcbfrSRQiC7ATXn935ktnjpLair5DbqxFRKt4fNCMVcRDqyvK9yEdJeqsXbXit293gmN2",
  "key28": "oepLBqRAP3TQ4zsy8VhQsxKdjyYWAE5kmNWnGj41ZP3dYfxzKwqz43w3S9DVnGMa5DcVfcHK9W5PNAkPYKy13q1",
  "key29": "22sEzdDbwo6RrovB91ATv9sprGng6b1JgQJK467HHZpxQ6XtUhp6Nar3i9C4WUFFhtK3Zxz3ydDxHi9SFiatzBeu",
  "key30": "4hrV3ALfD8c2xfTyyDBkJVJPGwJ4JNHRWcBgdvEscyaeM3YQgmPB7mHA8XZgbcvoiQ2g81dXdAZSZN32ZnJQuLH7",
  "key31": "2HqHZh7YyGj8kJXMLMtx6HffB2cPi5Vd9ymwMLwTpwwDJnUAsfHPoCSezD2V3i5AwZ23Wh3D4AmHPFFrQQbJTLjW",
  "key32": "3gWdFBistQdCogzug61yN6F7WeQZCJT5myGdiFBjhfbumN5LnruMjgYa3EdC97nxDsc6ALh7pQqrV1jxfBJ2a54j",
  "key33": "2KNpH3NFt9wf7XZ2HeW2yUiwDTeBnkdZ6mkKjVQ9Ra3cQooqnTSQVfLa83Sbhhain6dhXPsMfSEP7hSACPHJGAPt",
  "key34": "2d1BAG2pf7K8aEpAst7j73ATqjMtnQmRhe4Vdi8eokQihCZQR4U95GSao5o9HiFJrDQsAEJGWgNVLtWLeuF2bqqC",
  "key35": "4rBgJufKGyiEU9ERx58FhnrF9HUcKi6x4veWoTS7yGEF1styAtSjZ4r1A47wKWX4PS3sHSWqmYr7NP5W6yJDM8Qh",
  "key36": "31DRamSDTAPEqGsNV9X9ECF9xon6WFPX6edzExVi9wqrwSAuaUwp77SSY3yaFChx2Ug75f4BG4Cifqgy897RZq4R",
  "key37": "R9oBrEzZSopGxxuJz25H2AcBACgW5CsQ3xURR2SVQtovQhjrkG88d5NbFSmfeRvAySJe5rkdoYqcgwcMSKJDJJF"
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
