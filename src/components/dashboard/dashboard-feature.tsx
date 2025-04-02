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
    "5zy4rApQuTVmoQopLEjmxuoomnkmSDLNwATRXsbidxar7p2xio3y5u2KLvgLN7haWmAFviYmgJ9s1PE9mxwrQHeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49uW2tZDSQt6rMQohpgSCgwHFQcW9gs6Qw1NutZvuCQifPFsp2x7tniKtG5WkHDujy9VoJbRnE9FgNVjqJKAX924",
  "key1": "4dAwvNt8QdHPoKTqyDrbraDkm9VTyrVzpCf6yToJxWLaxnWAPWia9pVmUJcFMPM6hNQ64XKi2zunYtTPB4uBeZeX",
  "key2": "YR9KQoLQdF3qjbtm6GGeCc83VU1GnH2vEiyDC4xK2VU851YyzUXidHsjzEtHLM88i4eXU2SNEXnpcjSLEJ6CCSd",
  "key3": "4fpR2sEnKEfuC8iDPSv2nwN1UbRrTuKNQLBWofFsevsgA3UF8hLbxRbajS9MAgSkU4bgJ3sKtKHoscZ9JgAVRKV1",
  "key4": "3C1nYKYQ6WJnVGdxPjqzWrLBe7zPJPGjj3XNDBjJjuuByUJySKJic8NjsRkZVPPWCyjoxb7GqzJMnLc6B2Dwkq6i",
  "key5": "2VD1A3U5DKHFXFCC7gjUipBBPoch3FmzY5koEQpsKnz4KB52tpd2EEMeYSQKMhhjjRYyQSgtzvJUPaQs5kfmFvsq",
  "key6": "u1X4Mp7eKb6rDtZdXS6ChBvQMJKbR1f8xRodXpF1qK9DRgorNRxzgaTMdsXgS6gxS7ghXfdpR8HqLCo6LH82huG",
  "key7": "4D8Rr23BLBjZnn5YCQm6B7yDZp5YqqDRmxcGz7YeiKuEHqReaGtmgEGt8gx4nnMeijCfDHoYzNCXaitQGFAuKuaG",
  "key8": "3wrKakmxVfcC2MfYgdQKHDCf6We1TVCUHPY19EuALnJFyY4cKA1uDJLunqqkWZAkeHvJBWiDiDjmCXrngZJMLVi",
  "key9": "AW2Y4giLkcmKVzQcFBNnaxDrjc15fvbGvJdCebaUgEt1zewLXxymsURu1VR2cqAC1T2kNfKRansRF2zZ99YzG5Q",
  "key10": "2cCqUvnuFLG28sG87YpwVGcdS1PD8NvFShcavvd8tFSgw9zEtopBh1WtePoBcvMW3GBj5jZeJeUdMcbssxbhoWFt",
  "key11": "5eNGDSKnxyMujGNeL1NUjSwK86r7SvAGomX8qNkD14rwvzQmcVTtrVfk8MwWZxTc6xK779XByUGTW7w3shCpQN81",
  "key12": "5T1F1U6m3x8wLzGxCinughZY7dny9zjbnREL67E6a7UeUtzNFRFX6dfB1rVHMEKu25XKtTpRShapDHDfbgekxe9c",
  "key13": "2c72We33z9HPV6dbqCtdt4JxeMrsMqstwT8nJx17UXRnwKBBTm62u32kNvuRLegCpuc3CuyDzTTmoRpVv7Fkg9CH",
  "key14": "3ThUmTbb5nVKxpuEWiNn5GZydMVX5TKnxAQ634Ly8A5dEdzddX74LM6XYCQCsK6wAcJYrJK4W33HimeapGhommWj",
  "key15": "3gZ5bsJMHFUFeMXMqbvCkytsmHRHdBk6ZK65Uz1mhrfiCfqiyYkmCa4UxHrXqVy9WSz4wkKXPErp3Fsc9EeQG9GZ",
  "key16": "3QZBhruogkv9hQeX8h1GqaAFtciuWxePpFNXxmN6BHbpNtU6ir9VLyT3rDMcFyhaCnZvvP2RufQpipWFx4sTwH9w",
  "key17": "4HukSFsedsBms8b3YANnWnFM8QkCJgZUNFP8m8WkHeWCPoSzS55sDime21XsS3gTAeV9viVSJ94dsu9LPziDLSyH",
  "key18": "24bYsoJYKgvmdRneAM2Towik6VWWph9F67eKQxmwvVTvgkVra1mWv5syuV39LPf2YUQercju6nEndxJsS4FAiYHA",
  "key19": "3CYCYdrX57u4ZCfCQZMxMGA8aV2m96rhaFg1xMYgikhvRXLQ9yb3vPm5252UnegJwGKrqJAqw1fLsV9NLkSAZBdw",
  "key20": "4sg93BwZsXomvPqcppw8adABW71TjohywXiQMSwx6qwkjgJcXHbXBaZg1EbWf4pxHdU4nL6vd34VSjcvZdudit5c",
  "key21": "5HdrSWAQzjvxmpZWunehNGorP6i355WxUnFbYg2SV6e6uUdwSmCvw8mc8SMbHkJ9Goa3t1ZoPxUtDoMLroUgnP4M",
  "key22": "4k4awWtwBD4FbK5r5LqtCCa4trYtUEusfzVatkoXZoTRvZpVKG3w9bxV2SKAYsdFKmhFoECkmEE9A5yzz6YgWA15",
  "key23": "AJGgiFYtbiUPuWMzLtEdTySmauurGqT76hLy2EiNhU5mXMWMDNudVVVLecUbBxYfejehLLFPAYLaJWcvaSbn3eP",
  "key24": "CgnTEMYRjxZY36xAWPYhZ3q4Q1jiyiko1K5821qidgz9CVaKQ84wxsPMDLEjoNepRovHzxv7Zb6wZMrZwchqjA1",
  "key25": "2zET37qsCiYPSdgAZJdtc5AkKinJqXFkm48cfGKNjTGViYMfp6aWx7zVdTzppuXojB6RN9eCNjAiG4GaLVb3xcCt",
  "key26": "27Jbm7PAv9goJqz7Kfmw29TogGRitR6Y46BWG9QZa5Fu8bNG8tFB1phR1i7dDW5zp8ZcX61oFFAf2wjVaL8rhfMp",
  "key27": "2gyzDxRq6rZy1kkFVCsd4ZEDG7vmQpoVu1ZE7kKM3ZUv5mygPF5piT4pfdaafXTiwpu7ovySNggVSEWUttVnUCib",
  "key28": "2TVYbdwsW3SeHESk21wE4DrTCK1ZzYCWHDJex11d6VF7SucYZGqM1bzUU4ebqY5h59SQdHYm1wcaj6kSSFS5vzK",
  "key29": "5pWNdDyctRXFdfMDW3ayYDAa5HLheL8yKozQUTc944yjttjtNfBbcyHkkkJZdqL3TNX6nSDdj1M8GT5cGdmQMMCw",
  "key30": "5SWgcMpNg98W29daYqFgNi8nMvkmfAT2brJN7ybhuCRGUjnTs2AzUDPuKRXtTJq6c2dhY4gf9EfKHRtVBgeRDtvr",
  "key31": "4reiXzVo9Ef3ScQ2DbYxXTLr9PbiCPujaLbPBZFuxc5meW49ZDe1Toq666q3Nm22jLjydW5AV4zgZPidQPZdoovp",
  "key32": "2dcgZ2txYS5HSgNZQrHuCtEk6d9HFfLzphWVC2fMJdJpLS4FpM6Y5vAP966NxDJnGKPzJnUtJeocqos7snpqm5wm",
  "key33": "61QKgNxsfRdDdV9cUxLkcHGYbMApP22ggz7Vw1MftN1ko95L948nSkNpQfM9WChDoqeCguQvzqVoU1tqzGpke83y",
  "key34": "pJcpcMucBNYqoWnnovgSqqkZG9ufKfM91AefjK6MzexvuXBKdbADTFPXcGFjfgsSjd1HPt5pjfkQc88XF71mHEb",
  "key35": "V5njmT1W6LNsoZo3aDszcccZHjbv6iggFo1Hhs1hRKKfXaMDvZMo6SHfZiA86AZEHQ5zZQBuMn755KoCS6LmQQs",
  "key36": "3UTzccjVQ2FfiyZ9z6owN8bfHVC8rXcFMCsZrkU7FjD1mt94XPmf9HiagwvPzmpAMj9qpTCe6DYQ6ULLhAKxPrNS",
  "key37": "3EfuM2nBVFoiGWteRGo4f8AE3Tbg4hBe8rVBEBrGBwjezbs9JTNZGaNw5rMXkoQGyMiDaojd2vUzxwLiBum2Bgbn",
  "key38": "5fvXuWJGsTjk1hE7o7bC73bKYwsQzZx9d9X7nvsdT5v392aGMWMj8NZFBoRbmMKNVJ7FjWU9EwNDLoekV4NX496d",
  "key39": "3pVB3Kwt6e6V8TwUM53xmnd1SCwmnadvAKqnFqN5B57aejQCc3v9THw5nfYdY27GSnBtCB58TYgtDLGMvfMGWUmn",
  "key40": "TtEjisXLXg99femrTsvj9w66MArwr3ST9qVqkNTT2UBmtZxczA6PffLqiD7rhUvgUsPJ4LTZgeYk18vUcLn6qK5",
  "key41": "3kX7HD2ShuiFGVaDeCgVoqQTtwCzar9a9MYjVFuJmjdKvkB35QDAKr26JD1RnYBBmxpt7QwYKoBVKS6dhQPwmnfL",
  "key42": "3N7DRFNLpskeS6VTzPdprWT4bhhobHcwAmbWmFbhGFRcsFVLMvNvViwDMRTUj5amzK2k5JrPdHTkKkdzdA85Vbz6",
  "key43": "2dYbJiDX4WMW3EsdaKK9wxwsmDYcARdTqvPiUGnHuE1rFHtsXPcdqUyDxdD1iniXptD7EhFy8UwLYu1AvZQUy4SW",
  "key44": "r7KpR8bnybE38n1A6C9o3QcGLx2bjMyVMTyjRnaMHaa7yzKXv8dfEt9WVpBevFVPXXT8VcpaufqmC6xpuzuhSz1",
  "key45": "4QLxSMGtgi1GAipRcN23vgbhEPQDz5fibA554txmGjaPEq5p5AVsc3Qa6ga54JpXPf8K1bKPjTbptkwiGQfD51Za"
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
