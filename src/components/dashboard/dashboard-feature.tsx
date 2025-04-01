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
    "4a1nt57rQfVnQMBa7U866VHp15PSYHD6Bzaw4VftuzRBw5ShrnoUSqyu32R8axfmkHnsTAbbBfrH8t2MFJT9QE3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nss4xNHkMFE61AD7ptZ1YoMKi5gD6iJTZst3VjbnNFKGx5BhR2EDrZwXgCCkz7xCk4jRd1scHZLVtrjqDD3DMAP",
  "key1": "5EGckmdYEJ7ugGuRjjyNTKdPCuDrCMQY7mjZnpEcs6k999NTuhLf8cLHvQUWfWdsgRqwmDywZZTmvCDC7AonWVRF",
  "key2": "2EQRTnmbK8DvGrPNzmKhbXh4B8BhLh7tFzc8Mb6Mssqd12scW12wjeaQpn9QauXojyZ2FpE1wh8Kj5R3Hg15GrJ7",
  "key3": "5zYhk2YnrYVUGUydvPxnDF3ZQmfwM3WWCB8GnkFWvKyztnuSmSWzqxxRe8zUAuk4T48Fb16KYV7nmGPWGhS2uhHM",
  "key4": "4BPWEz7NBk9hKtF4DTwv8LrgUd7ccVcoghaMxed3Bh88e8GuN7GZtwYmqNsRai1DKBpu7RykxsSjpeXyGkvHbMpg",
  "key5": "4L4MktqZrnJ4BEPeLSqzpuCVhDRNWQmes3p7vYFeMg6mMLQW9YtU3ahQuEoJ99svsCqoE9RfQ9HncgwynfXPATZ9",
  "key6": "58HmWxFa3yGVozYoWJr6GCndtJQfH9YJa7k2D5HGRQ4x1fGxsGZtqXCE2cKsW3Qhhfe7QmhD3juaan1KrAR8fva",
  "key7": "3zxrZfVtbG3aFBtw3aH9gKgtAmGQFc7N3WgoVJDLFHFXdDRHQtEZymXKPicbYiWPVT7WScHdpoisY3terNp4G7C9",
  "key8": "64iLKJgNg4JKwq8fxam5np5iZkS7cKY6FxGn2AJCqeR45ShPSMYXntDR5bb4FHn5XyVWDfPjpqrJqs5yiTJzfB2",
  "key9": "2C2TkLdTeC98hT9uQNsE9c1anE3wPwSyLQjLAA4UhiHtKnvo1jMZ6zbwEABPiHFWmLMoTbFUqSHCyXN9dZVNVF6H",
  "key10": "33MgeyQbUSgCX5pNZYhehYkhmdwcQActQHdfkV35jeUkzGC759rzyPea6eTHNf8WNpmBxfM71MXHBeKggtSrdF1D",
  "key11": "3P8ssCAgvGPhQWKA6KhNwjpGw62sBd9Uxsx7cbYQvLiwXcsk5kiykzvBrrGKnGLN7dA6o4yQ1aPXy7ZXejFAfpoL",
  "key12": "m4jiPUWDBDY2JkoUkfZYo8QyTf9sNHpStVQ96kZCLLyFaXcBmtJD2HC5HYNK23ULYrsutz79aJHGuqHPzYUnF3h",
  "key13": "59k6UCFUTFmar6Sefku5WLZRYwaAarpQ6mmLM6XcQwguUNhfykQ8RHfaDTGRPzyMZdrw8fM8hT34yWLGy1yZzkP7",
  "key14": "BHDBXNYU9z6M1hp3h9gpdaBM2vBvbExhrrkyptWrGVstJVqAPtDodHUi8edGT2i4fQ1Yfh8pqZer28ysMk76tZX",
  "key15": "3bC8UTZL9PYpBNi33uKXrY5SGgMcboTndBHd1G3vgws4z89BPToVgvuebUTX5vkxMS4cUmZbvcxVzraEvYtHfxyT",
  "key16": "3WrWCcrYrR74kCM3P3sejv2TWcY753stfLHqeRRaAPBL2cqD4vZEdJHiJhpCSLNuo777qnrvaiSNjXirjcsmWohq",
  "key17": "5p32nRNct7Wb21hJoeT9KqsEgZtYhkbgVDhAg1HVhPEcdFdzot3Gmyp8K8wd4VRNQ2wYaSSuc2GqJVQwc8raMwqi",
  "key18": "4Yn6wThbFsAYQMpFVQT6owX6sHYhFBKssrGdCZFtpKMGAPjj5nTFdDXA2iZEwMgymEGxAjEuvdxsM3H95bYT36YE",
  "key19": "5nDB2kYowW46vqtY9hfgbMZy6GSFvT2h6Lcd3cr3mb1C64MyASQbKJHsyUszVqEu3cS9rWzoAPDHkADySPfE8suM",
  "key20": "S2R1GF44bmyZRKpUtHbQ1RVVXjymQrXSWaz8h85gepCW3Yw32sMZsj5bEgYDRZ5N3MoRUhfdSAe2uoQhRFrTuyT",
  "key21": "4QFdG2jNR7XCydMuusKYEFJLvproBx8f1ZLF36mK5bGJaqzzHVS7pPY2nsgwziQdnyo38GXDRFbnk7yaZAkM28vJ",
  "key22": "ow1N1aPWHWZjbSjtYjW2AVg5KBdrTHZ4aX7eo46hRGBw7FtgpHMdhmgqPmJEaSGNgaWfK7Rc3JEq39KyDmWHKRi",
  "key23": "rV6kYvb1NrM6j2dtsXWDA2CKefC4qr4Z51f4mRi3g1Dwc3Xt6PCF7iBzRyM4vBQp4AFdKSAuPA3vCdP9RVwRXC2",
  "key24": "3v4HGrwEAzk9QtXUYVq1DSBzakciV8jF8JEbjaiya6vTdwkP9Leh3vfwYeZLe8TnF4H3YuYYKVYQfLGarnrkpuaN",
  "key25": "5omr2B3Jos7MKUYQv75iUqd5sAscxUsW4AHWGzoEvXS91Ttnu8gJFcbDM9Rs2KN7ABpv5DnPgtQp3YYXrvaGUbxJ",
  "key26": "2B9knvCLzgvQPw58xjaZhxLwLEGvWZ1R6m4zhXJJNh8pRzaVMvaxQUd4bMnfmqgWzFqT5hQY8o2hzbdMFv67Ye4J",
  "key27": "58u2Z1Yp7fadei8k7Hx3DSoD4LiH6HLVQtRkHqQwczL9H8tcgrhVKgH8Zzr6Wkzv8Z9AxtkmP87spqEkdiZ4YxfB",
  "key28": "3XMzX8osTKkfWesKmKN7sZprBqDLZbF8X2PBw6dSKJvVEatGmFG8Bv8deVcvbvSVTaC1KkstzS7g8pNLFaxp183R",
  "key29": "4NEbPr94DsNULKsfuvQMvzoyWZfx32ak1NijaHSxXjYrSwSojgoM6vAHpktFBqvZgcixRUACoqxpb69MwiWAKzkC",
  "key30": "5ehCzx7xLRNBD6QQTxFDrAo9dQcXPrfbzsKFdGQxGENkNLKzaGKJJ4eiw1ETXTJGmVzkJr1brdbZxADufxMe23nW",
  "key31": "2GAm4RsFmh632GLoiFdHZbUb56AaPDBqxyPQjoaUa8kDwZxCSzVX3jiWJFVQysQMyfkzEs6KxC87gtSBQdTGHcGY",
  "key32": "q3W8p8525XcFScXFxh39Am4LVe5bFBkVbaX1X7TQQGfjQmYQjQT14vEmErtLgvgyDW3cYot8mvZYhXBa19R2BVh",
  "key33": "vHiJ8H6iuLfyAQ68iX7DFfatDJRi9tbMnZZvpMMidMy3yE1KV4Juh9NXzbAjP4NFQ9t2RVqEFnMYvLyP4sofHaS",
  "key34": "3db5A4XmrZQ3HRZXDQodtMNkGFZ8bYkTifQC8H96TE3hmbaPcDQ7m7mbGkxFDS4V4ZEQsKLMky6W1zqwiXUyZC9s",
  "key35": "53hsEySyBUkvkxtks4B8aJZf4jimdnU8GXDyNaNDb1mNwJxZF8f7juyG9rtdFmey7v52dgD7pqUxf42wgzjubfKK",
  "key36": "2x5RVsaUZJiG8HMvUciM8q9YyUHXfvsbcj4wva8jhuPrxTXGjrhrCESBPYkraFBy9E5uUbrCGkToTLufRshuCS3b",
  "key37": "Pn245QBEYbWg6UnMVP3kLHk6qcPpVSwuEFdxEWzdCA2CyXKbGDnDw4HeVPTE9eGybdXhTT4ZEgRbkMmVeqrbXb8",
  "key38": "2fcyqZEgcd8BBAutYnNxFuWqRTqfu5HLBcztuJ9zFoVaZAoVYRXngVZuyXZP9Y5yi5Ac5Dgw8ra5UBVwn4M6zZ6x",
  "key39": "5ogZWeB4vt1Tz9HCJ2p3NrougzPGh8yBJHMJFTA7JZriinuuKpPFvepyk5f5gPfe2e491LN2haGzed5CbtrYsQdR",
  "key40": "2j8abbqQTm1zG47Ub8Tpyc6H5gBVfwSnbY21aHDafvaTR9LsA1NkKKDpv7M2be3dpQ9q15jiyVQyC1DgSa4Ra5m2",
  "key41": "5rny7zNbKFYQyYYSQPcyGLkaM787sxEAGgiYMc1ukRbiSAPaz3YGqe3AJaJBFfvFtrbBnSipM9MwjMdEvQwgteBA",
  "key42": "3rCsooQ2DfTRw3rjkSG9gc5CnNxXBPotSdoqHsjqFywDZKP1HWSmQaJ3MYbjEgbk4iV4x8KT7hwjXaB4KqFDM2NM",
  "key43": "4QmEPaxMHhwQuaDgjYUBQy1aiiekR617nmVAzojYTH7c5sfNmghNiqzXCvbFYe5BqzeFjwK8cVrNGQ6Vy1pacsYZ",
  "key44": "3mkNdQBVWkacR5JdwDcFWmBdHsgBmmJFCxv4YcfB7KgDpvf9i8QYgE3rWeg5ZTooqVRuNdAx59JxcQTDmU1thuh2"
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
