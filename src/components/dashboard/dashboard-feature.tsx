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
    "2Tx9V1y5Rz6M19Ssy45PLxSVvV7uWv1mhBWsAwWhvvEAq2sTSjdjprMMfDaLYnALPD52enELgHDw6n2wG2ozimko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yKmHCiEYpBQE1393fExqaaVeFktTDjk8jJ6dPpYQum8B9p3JTjTCzmtMi2o8x4xh9xpvnZsfnPbb8fxvaYwxoJe",
  "key1": "5FPQkvcTH965PRipdD2J1fsMtSx3ymonKau8841f3UTpuNZWz3Hf82HErKdZv1Ci9JUkvVNfJqirG18hb8UewFm6",
  "key2": "J5y7v9EPW24gfNnCMUjGwqaofJwuWpAhGXeB4PS5gmd2AuP7jcEnqGMXZpekLM9MP4ua7Zxbin9bPTdqgGB3Qfh",
  "key3": "56edEZBMZP6QJH1pqyDf32xuzTc9bhKc6rZYf9HHNDXT7bbDFNzzYbbie7wYqc4KFnKj4KpqWu5ReohnJfjyCodh",
  "key4": "4VzK5RYFkuBnrrpVT7tRDPDuiaVnnPwirRtPCyn5HZYHaxsfEAnSGKKiffJvBg24uDvYqobbaB89PBCvkREaj4ub",
  "key5": "FT15eDyNojZ8s6cUsmieJL2wGufXTF2isdUzzeuZkrNfksPXH5t4jMVCZfGBhYZPuH888mY7FBxxraMjJP5JEex",
  "key6": "48aQMuJ8SisThF9Uj8g4FwdzMByA26S5sktb8cRCRGGCzuZu1Ki9Tqv8W965gnyuCMpZkHMWPA4Gkd6e1zWDWYun",
  "key7": "buufkVWVfmJ91D2piDPYN1EF7a5H3eWXKdSqbFozkoJUo4SnD35g7m8ooEpFXmX7BoNqyUY19VYkCNFW6BHtQxF",
  "key8": "3UmvMLhxxeDzLeVZWxd8bo5FG13FN3ucm5jhaUSVotvBqPGzeLcdPc1ibvdqkTby7v4HxtEtWpa694gsmqunptiN",
  "key9": "2fKbKx3XTiTYYmUoxHuDoV6oUnSm4icxHDPMaSdLEXg9sjczUKbpcQ7zdCZuHCvjSrYCStbc6ZonBaCnSVyZMuyZ",
  "key10": "5KCzZSZS6SeLmW5gTWX9xKkyiWJcdYEbkHr9Ncyo4rPab9CJfw1ea4A3qcmLUXe29Z6xZmmjJGg3bkZXJJpGsoZC",
  "key11": "2W64LN2hCgPgUrbjzDuncMQDxxM1oNPtCJwAL6EZBzkiG1mLLJN3BWcLyt3YvLePkyMRW4DecP2efyfarTZFdHhU",
  "key12": "3kubhsNHuNG4gp8HFBRNAM1hXEZMAFKDX4GjGipigkNoccmYiWNaHLVSEdTooyKQt1kU6yFJtBPvVRaBuDDEgrJP",
  "key13": "2T6iLZNiRoRjfhWhnnsrLGAAw2VRTNZFqZdeS2i6L5n5sfTUqPfFMcFLwFTkbY2kp3RESWg2KRhLBHHmg1sHpZUK",
  "key14": "4THFyMJk39YDouTwBG3cs7vbZSg1j6eDfffoZNCrfGXTvXXicRvUWFnNSvHDtZcZqB4GwTs4rGYww3vyt6Fr4hPa",
  "key15": "5dyKd4BMxmrz4Hz3U2XrAuVCt9uZAtiomobnim3Dqe2mSXgAowbVY3mdszXih8DGyY3eBhRq5GbJEqVbrzQHrLuc",
  "key16": "36kek5aSTerULX1UchVYiaGDU5Aga86Fbdwgp6KvKSpND1uQfnZwBf1c1LsBtpjTZvGYXrQ8yUgsHzn8zR267tLE",
  "key17": "36WRwxMc85kQtuQe6m6JaSjn7LC8WCvs6w3ZsSpLfKH2tSP3NvrFPtvF4zYMacqq3KqJWpPm5gFz2aHMdg47HaAz",
  "key18": "ijDtydDRtiyFKzUduf7q4sCQszyJga1WhRHXSANi2AbdNE8gsgVPwMZTVzC775xh8MTXLANnGgWpUiyrjgWGKGc",
  "key19": "6y1syMoprK7TDiZe5tWMCaeBgJqLyLtNKVE5fd2eHyYdP19hgVPTbKJbQ9gaRMxo19Z4BzBs6uisKv82fhkSosZ",
  "key20": "3kshB3VkHpsYAaw4q4a944MY8a7hdRLXfibRsZbLHY5stfaTaMo3fuUcY1fvcZC4MXeE4ZT4zmfK5LdTf8ers1Xy",
  "key21": "5Zx3uje4EN1vuWpXZtWr2Y8eVzAHmdEUHuS6VNXWq2vyX2Nz7zJAP5dQTBLj12NafffS75QTMYUbHJmHLFau8Q1T",
  "key22": "BSUGcte3GUXdrPk6WmpBULgXuUA42Qq5sUSNhJsJ8gY4TbBiCXwwYwFHdcpKdTdU1P3XCtk6gnwkWGYqTdKbvX7",
  "key23": "29v6hSZeBUAhFrrgwtwkarDTL4gbkkWqN1483tmKkEuTXF5fJ3AqJsn4Vgkt3ehvMbdFoUubM8Ri7CxsooDaTqDM",
  "key24": "2Qc1p3y42jzzPJq6ZCdmwi2f5UQsU7gPck8eoYN37GAddVsYFABiQckbe2Q5GHovnkWfUdBcexX2E6fGPeLKazgT",
  "key25": "2j4R4ccGU5AcURHdHLdR2o8BDQR2s2RsBHWa8Ryxh7HThokTJU7ZSsy8vgiNjmPyr4LJmVm9QVjNS7J9XesRP5m1",
  "key26": "42KdjLf3qs5mAHw1Tjv2Ussjiye3BgNE1UoafRUF8fdnKydv8995uxkvCPRCwwSSvr5YnSoSocvurYFRJ5oggd7R"
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
