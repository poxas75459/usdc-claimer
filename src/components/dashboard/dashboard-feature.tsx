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
    "4u49VR4ps1tbRnbSFpCR38qJFzpszHd7tXmf14hcE2csKRtvUukREETaCZaMW3z3UQpQ794hLVKMb6yJt9dARqeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21NGkXSA1UpUNFmeQVVRqpCAPJSJaBWufCNboEMkPLkq75ctoKR96h7aFv5WPWzFiEYYq4F4yKQQCRB2HS3m9Gb4",
  "key1": "6ggGNVFYUsWJuPQzjJF1iWg4oA8zxVntafEquXvtxSdyPYADmeMAUU9Csjzto5Hf4H8dtbLFrbAfVSGefPFSspN",
  "key2": "65zHMb4MnJQQC7PW2AhffccAHvyJKEPyG8nK4L8eSaFvb32TkRX7EfwvR6iPgLZevtxdzRWJdjJWSXPES1uKftm3",
  "key3": "456JJQ42AW7Drgwtz1F2SFc76qnDTzZJGHVnMoPykY8iToL8pAXhqXQbpXUgb8hvBTrb3kZHRGRAkqdFB8mNPP78",
  "key4": "2z2pCyj5Hq7eHmsSCDgdyVYdMoBsgxzXaB3QRtiQahUtLUSdNXZiXzmgMnJK3e5wuwmtLiPYgaaHAWVBWsCuq3bd",
  "key5": "26TyXWaQBU2RWEmU7ZXVCuHyAwS2uanQPpMjNwMEScZ2a6QQKbHD4BtNCouB4eaFm6yZABPULVgtGwdL4mehRu76",
  "key6": "5yvktcmMbGWW1b5rT3nzhfKrHrVAh8YC9ZTBhYwGmxcSDRZ9KcQNRpmsFepSYPi5mzrnxnV4mDEjSxqXL1k3D6LR",
  "key7": "M1NUN7vxvwMsNrAwx3VRdrW2A9QbhbT31xKMB2khQVqdGxXeDxDPSuw3PfD68BqHreQVtx6Jd9jyiVP3paLYmnq",
  "key8": "2ZU9xsL5DQ6Xt7ZhZ36RXVA6w9dBh3m627WhcWATBKSFt72c3nHXqDr1n6DfgiWKfj6FMxgkgcBQsUhuFrNnRC3N",
  "key9": "31TcUqZVAfk2jSh5K4YFPMvBh25ZwoeBKqaHv9E8e8YkxpvLrgwa7hEoWkYhBsCdMJAaPn2vfZNQKeAqECipJu9f",
  "key10": "5K9iHD4hjD98mdhQSwQ3Mri98F3pgkgyRNZ2v3mgKN64kDL3GFW1gg46fv2SuXUaU9SwUw9aS6KekPnb82ZSFTWF",
  "key11": "5QyZdKUg3QBT5fusL9iYesRJf9LbxfHhB6DGPZEaxaU8zvouVgk9N6cdfaoE7H9J9XgpdtcCvqpabipY9MbToEk7",
  "key12": "AyR8qwFuAa439yaufkYyvj9CXzH59EWRfu6vXQsvttWnPh1BCTjxcHQD36Zwh9UiDiCLXtyYbqkymgJnt5ttoAn",
  "key13": "QcCVc6iUUKzbuBrCLVQAf2jun8UQF3mmdLsJWeAfUp3FjiFcyEpyxv7V1zuTyjHbwempGgoBBQznyTzbXcny3Fv",
  "key14": "35wUv6xMtRjh7zqtZ43Ew6T6FuVScBHXUTtJi5KrWq54rBuQdZ1RuKq7gPGXbyfTixmLfbB9VNSxjHtKkR3tWYPY",
  "key15": "5X1FdVFciY1BemKbHCNFNZwW63Qk5kC9r3VMYP6FDWtjZski8yHvjMcZ9m1Xck8ahdeMNJSFKULaFsfYtePkgDBe",
  "key16": "TEskHGBLM9qBKGYfAuoG2UhnrJfSpLt3wq5C9zFbQobEaT8gfBfG7Ai7h38gcyo7c8HoiDCL6U2L7iBwHqgoGdk",
  "key17": "4cPMYZuEW7LTDKS3n6JvzFR7LUusbyQKQkBzAs3kNFbDPkfaymZy25h3FUuY9xDu19Hgvx9Dtd99EHdWrXdikuRJ",
  "key18": "3U5CJeaz18RAbKdKPo4XZnMXMWk2f2m4UH2LJXSi1zPFaLSThAVwTCAfcUfzpukL49SB9SXYVyzbhE2E5qpNCBjj",
  "key19": "5sufbTF6CawNbK5useFBJugbW8ZsARj9hcg8TytJCeSZ8UfMBVDeU78Uj2XdZQEz9wHBGfi6inP7N5UdB4NMLzga",
  "key20": "2T2gwCPtTuxxw3DHaF82xXnihYm8iDccm7T69TY5ennPfGuvgisXbkDn8VNX74JbGF8jkf3ts3ikVxzo7VH6PoH7",
  "key21": "2gyrj25quEhwbQwyLucSpHPhh2cW39Q5o4C5cv8rRtPK2G9rvcytdqPqWyu7fJCapYvRVUD5KKAm6WUUQBaHDguW",
  "key22": "24VHvPPxFcPDaNNMzvY4KUdsRj31wk3TXtFBL43mx8NyFKGvmsvKGgpJ8gczt7WuAj2GJmzSjwfbRjwiS5HB8U3U",
  "key23": "4FC6aTQN2kNT6ken6qRrpLfxNRqwxktr91FZJ3v8jHknTXE9UCAbYAAyQZPtr9icay4V7p9WJesgmbkVjzVtMp2J",
  "key24": "4UD8RWtbLpjTguAEvwSZGGqf8WSSEi5Ru6dwxCadtkodfYej6zHhyBSsLLZz5gFmAAxaeeUw2KUttFbrM6x1cvnB",
  "key25": "28DzNBwBhDgD4zvzMkJfrfDqU8sRnDn1oBXDHjeZXbdSk9QRSaVQ4WiWVp181VAtPPFsvfvceCsAc2ZdMSUykyq6",
  "key26": "23EnoerP7MeLtfgskVEsbbFzcF2w7LpdYxV67qc6pyFotZkmY548QKmgY6SiHBEDpi19ZM4bff1gPGh6PT9bo9Fv",
  "key27": "4FjdJ5ogHJ7CUGkFsTQknms9NHxqXiteAwdSZ9BkraBp5gWH44Nrwx7Auwx1FeDEvhfz8WzUA8Vj85RRr8fR1ZVN",
  "key28": "249pxedrRKbwwWwxdpVf4frVEf6VAkm85zW62qA6Q6iBEpYCJbKjq7JwcAuiaax3uEB6p5PZ9Ymw5LbqwtnRhsPG",
  "key29": "34Kyr6cauZM9Qt3BDj2kWPxie5mZPbLFahZBgoVEShdFMADVGV7XNwh62DiaxZ6xGbWkph9rnjetFy5jEoC6PbrU",
  "key30": "4gweq4ZTNQd5Z8SD4syAye9BnAxrF1uQ48KixWFL2kGUsqs99GdQH3eR5EX8MSUi1wikwHFJAg7ZQrbZy8TyvTXi",
  "key31": "3oq7v8wKoFvb3jqwZyo5Bdgrw8TfjU6FP5mG2NSpawvmTZi6f1hhHAubU2zKrPWnkdsYnHtngVstuxByYemKiwX7",
  "key32": "FHtesnYZiCn5TVvRpFwkG64cEAdemwTFyM9Z234Nv7xBQBP6dsAXPuGweggcSHwne9jXAjE73B8q34yvXaAa7BA",
  "key33": "2GezwURjfrEzkDKs5pKNMv1qA1kWgRtRwnRPnsLND2DWFGUXYRfPhy5PFk2d9SgsUKBSB1vNWvLmJ7mpzbQGADqj",
  "key34": "3hXKh7CxLrx3vkNNxsU4ZXDcNhjP1JYRV186jFScMRMZ2tqvZmUiLbvL1dHgNvif4KR7yt5fhLf8F2xTrhJpUsp9",
  "key35": "586KiGHrFcha2zCWwfvFFuVVYGHnkP5rWAZAeHoEyRCxxrewLK5NWZfUBgv7Zr9A3Q2zufG5cjbJUGWapCPJPYWC",
  "key36": "j2ehByT5XyigQx5dgctVMm8tGZ91h8LoTjga61Dqihr85HD3saWgRX71hSogBBRNiRAE2i4TTkTgEXnuTjrX6jz"
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
