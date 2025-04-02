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
    "22bBWvuMWtHXYh5fCBuJeaWCConudfXM9z9nqWESSgpi6dz6nmi9zkygbFoSmJy85erSTbjerrzJFpDqZki7PRba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MTdF8GobR8Z7a89UsV9pCE8ZGnseLjN3DzvNA8tnCwyBWHBKr3HFNyQNB96jyDe42LMX2WXY2pdj3nZ2iwnZ4wk",
  "key1": "4JYLy7DAwpuGG5XQzKEvVKECX3qjt8daYe2myMM7jSqLcAsWgt9u5jLDK3inVPSQMUffu5c22NoMWtG7vAowggCv",
  "key2": "6A5oMk7e2REFNNidrZZqtAU2UYW2nFFmSgM3z97gDMSjtqmgwtUQNHXSLd9GMPFKzTLyaGBZ68d7gFKUAihBG46",
  "key3": "2s1WRyjDUezpzSA5ogvXdGLV2pYaBdmF8CBEFqPa9vut8XrTbStzEDWDtCDv56TRDPfuxFeVz2tgb3fzu1HtoMHD",
  "key4": "2Bz61BXt71gC7mxp47c31REvGv96JqzjyiEj7kQ9TWxvKaTGsQgHJkEZ1EQEQjowKjVBbEGMKGqdPuG9DX816umh",
  "key5": "4pGsYnWVLKuWVuxrEkLrrQgUCvEcFTcJBzFS8oJxChLcWZ3mHB8F3M4VZ7JWnMUN4p7TsdWWv1f7HusxZoSyvpHs",
  "key6": "4J1f3Mi2KKUAaoHBaJSYo1SV3TmqaEktR6uuX8JdULQJxcNCi23rbcAcpMZtTd6bAsA5soXoUhMLM2eTSSUtaFsY",
  "key7": "4sQefk47d1caSCQrCvN4e1czT9uniuxq52qtrAz8ztwkmmzwuS8Hf4R6L9Y728ZJ128Ts8T5aEbzs3qxiYiqffNe",
  "key8": "41XRhc3tqbExNXiJRYeLdJQGEUGkwhugTW9p5wKCj27v6jDUCNG2qmGRfRG7U9Uarc1amWd7GHEZKZRw2KPD4EkW",
  "key9": "276nvYTVeFzzZhuG8ZBicps6hcNgRSXfNnSGJUa1vYyDtTrALW5Zn3DGyuNWWPtu9i2PMReRogcAL5mksS28Bzc1",
  "key10": "3jewpz9g8gp2LCuB5aeArE6eXq1iZvXmUZmGsen4ZVVq2rEUqCv8SnnK6YUvYL92dpPR56zD9sfnwJGSUwyzYcsH",
  "key11": "5itRUF3DBCrwWaKorGNEsHUfhWjxLNoGL3KwK6TDabV5fcCkMvakDkRBGAubHiMiiPf29QpcVAfwig7SsZ7VZ9x7",
  "key12": "2CPqXXAQWbWHWSePQPgBuyh6EeMVr3cmLaKifuuJ7jVyuAbgjv4i9UHCRwLXaKBLzNWMB4crT3mwbpgyQ8TRieRQ",
  "key13": "pfTYoNLnHuj5hociYBuLaCZg7GoBsWgcvL7ryio1sw1cggykz6d86qfUf1tNRFUVFjAhaS6Ht57CL57T3GTzx6k",
  "key14": "4Evv6YoQ51Eg8KhD8EzzevyhUhGdFfBR8PSNUted4eLkpKioU37VoGREUzSahfwvjaG3N7w6YUomXKvHfKiawuqe",
  "key15": "5a1HJophPhbG5tiXB6qC4P5zij2rpXmVbK3th4vT7Y67GdbxgHbtDiaGFmDb4rpXijrxCk3ZwnHatnMF6qs8UEhn",
  "key16": "41vZF15KNEMcbL93vb2i9DDoGqpFahqZrEqUDwfcaStyRXa4KFGeaw8MunizVrrTzPLL6dwQ9Jf2iaif21wWKMQS",
  "key17": "3X858gEJZ15XFcX2g9RRedhxfvpVPmkzEc3WcauXGqMVaeXR9Xma8hdaSP4DY3JziajAnnt2C2YvRWXXDeYvsRdq",
  "key18": "svuvo5zKfuc8i2JJuDVzq7D5itkDKDfzuWkfASdLyjmYpVX8FDASzq5RHVeAz3sQzAMNEk4mxf6mMvZa3xuNBwL",
  "key19": "364XwAwfExwXu21pDDMk728etVMRaJR5sgT2r9FT3a4jLM3giVqZsmXvLSdzjh4PBG6pvLpQk1CAHh6RN3CB1kCY",
  "key20": "5fVT57yHkH2TuEQv1uKZUXAtGXKqxHKSEvnnxQYjyLyYtHTbpbCqK1rdNbstjJrGWowpnQBX3WJD8xNKZBcTQ8zD",
  "key21": "3Si7Uj3Y4CykyWRnAyjhgCnt4SQxA3zDFLW56UWcqh5Khnw3q8WRqo5jrgqkCKhqj3qciUtLC7uMWX9NaNq4utpj",
  "key22": "27UXznkWTJRXaTQsSX85v6hjwtEPQrMAMjExkJjEuMzeDyzT1L9yETNCrL2zzT3NDK5yGSANuTQro6BuYazqNnxG",
  "key23": "3kgmquNz41LcwiYkvLhyCQZocnk4ZV2R46gjdXduKRgwMdwrQo66u75KAyCtfkys31R5LG2CSw5WdQmhm4SpTLAY",
  "key24": "3MxD7jh1tiDGN6CgdCWvbBcBSBqidfECE8eTJR2cKpTvyQ5AUJS3vLyPN58SHmqL2T4GichqwXewi8nDL8nrLCze",
  "key25": "eomQ7sSY218MyNxZF6r7t2YLdrd5U6yvhNHCeqvFgB6UiSKp5adRXWSVZnR6E2grHkKnLDvL3sfyyHLioRSQ3nD"
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
