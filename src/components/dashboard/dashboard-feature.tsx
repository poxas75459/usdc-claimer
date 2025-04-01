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
    "5zcfskYS3pXeHSeZRYYuJYU6CsRDMta47dvWycXRktmXcpq6UG8yexpSVz9ez4zt62ahkCTj1V9c8giu1fWPEubG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TUDqqhpV1PARoCDvEEjNbc9uWEYEnVPYEeZM68fve6HFv5kw8NwX9TGTZG6WtJwvT7zcJmP2mJTYscZYnxD4gqh",
  "key1": "5sy4DRnsUQy6YDtsBFJYtXek1Ut5hqkpzhYDHDhoz9jpwAn5WEY3nWTqJ2WbGxWmkiyKSp16Tur2kGMgVGsUVRJw",
  "key2": "2YrCB4MH3W7GnAj9BshTHqjDKguUtPdTTBUeLj1jNnZBUbccNyh1MiTBzKiuWTgQhcRziUmLVsd6TvJWR2rCE1VY",
  "key3": "4t2zLrDDNQvpxTKpsMuUB3iDPLRYeR8yQ2nxKZ3kUvw6ELCcuuVLatbXaJh2W6nq1PPz98mT2GUpQrrm691Btvh2",
  "key4": "3u6dMMCdP53aXm6HZB9zamzEV4erABWk33VBSCRATLJCJ8GdgA1taU3c8TynZhVrLzdMDM7a23P9TNfVhi7xpyz6",
  "key5": "581DYjjFdf1iazWPmNHsjh54ykK3rEcBJLSZSz1aZZQSp3kc3Q9w27jriW6nXqwDzusT37DqrdgcBPEpFiPpyqnb",
  "key6": "3RvHJ2b7yQVkW54F19uHw7PAp5ymw4RmG96LCs3czL3ZNop1G4Yz97mXxf59JQjn2p6c5Yn7ubEpA3ai3YqXvc4E",
  "key7": "4WRKumSEdAU2uv43LfACHMmeRghP2KRVEjmFJRnCibU2sN3dL1jmecP2Nfp8SgUnjCBQ3EMi2xFQbwMvbqWHojY9",
  "key8": "3wETPhVkqUnWW3jd6HudicWVKKkFR5gR5WMq8qDpneoC5Zrj2jyaWTgUgPPRmdPwqBUcdJQKeduP3tt3zFUrK5Xw",
  "key9": "3Lzch9mHWhNrB4xhW8b3oE3NgbBdrb8rnhdgwE3Gxt4xurvscvSiGcWaNDCHUHzRytjARnisr5mNBNibqwCGNPpf",
  "key10": "28fAM8NTk6M4tNWLgqFE9SVjwBMeaM4Co5H3zMfmEpHXp9Ybz2t3zAU7ANUVPnMTm7LtoftSuZBMmmpKgLNo5rr7",
  "key11": "5csGMB6RysMKUfEKtEbqUUuEFJNRp6mwSq7puohuibhcPqdNoP1CBSi75gcoyccifA2UxxVxRBAtcEmu79zryV2d",
  "key12": "eXMJ4caQMp4fah5epBffJWuamoiXpvTeyWnfgZWdYFvZS31DCK2Czy8MsKNTMnaTUxNbsRgcijWFVTH4uD93Q7p",
  "key13": "5Z4tUKypcW4vVBhCYWrmmusE8WtKD8e6FnXxGdTahxwUAdPKXQYKowT94SxsR1cUqbj2PQUDt2iGg1vKtiPzprzL",
  "key14": "5KqaF2Wfx43ymHXJw3csMfAP1NEXRzkYuLcq4FFZbs833xAEFKPQV1E5vhkvLeKzLkzoJRirhxCQMvTFtvwMbqt4",
  "key15": "H2wNzjN8DwWVTuuQeFWC4RfdnpC1Mfy5KXwru2WdEpkURp1v2MHSLyfC2By13mpJt3YJ6YwGZoxVp3xP3DLDioo",
  "key16": "5ZYavfTMecsiKEJY2xp4tfbWduzBLHEC8mzPVYniH6BK64vNyMifhCtMQJenJYyqfpiJ7HiMeJaH9qHTcXys5DJo",
  "key17": "5CfVvMkGge37vmxXzRTecJuYM4eGpemqM7P2Cbu5hEjtjpc33X6tWxw9TSgREhDjusgLzj7KybggA7KKitcC6oo2",
  "key18": "YAGpQuqsnvBBDQeveU1EfT1tiCMopmVu2WMFzddC2HDyd8VM9mM6FCMqeBV6213EXar8xbjRtYBjSgmrWfKPREf",
  "key19": "2jD7DGzFfzmnAdD8raNQDnpkV2Yyzh8YnFx96W6wLxVrrfPwcUR99SNNGqjGLnb22igZ5m9pfMeoz7pJSyY6Zzzx",
  "key20": "3hA1GtSkjQ6cEJCLLNosrBkq3W5QFaMpKCKXF5gUKcSP5jye2hPVweYhCXXxBak6wuB1LuPprxE7Gje9KULvXEcq",
  "key21": "4VffiooMTvUTsZ6U9ajx9CkUXwFU6DZcoQekZDoCL722Xr4gjMFxrMrBQHUb4LLXLttqniKH7uZBYuNuNao33WZM",
  "key22": "5gB2oDWC1xGS5KABKVeDJn7mSSjXjVspfbSvwH4xrQ98n6r8y5ZzG6vRWPCHR1fyL6MQAjvW5u86jhp8CMzVVqsf",
  "key23": "GasDMnCA9GjBMSFb5DzR8iNr8MDdgjrNpkbe7XkxRPev6DQM4rqaMHrEtUsgXfpoCHTJi211WDpJmb84GixJ54e",
  "key24": "ekfp5FLcAC5B6YXEuxa9s9jnMxBscteZxzHWEkt1Y5VnhjLZpKh9GkmAFtBYKiaNgkTzAMLkBLBaL23XHcPjipH",
  "key25": "2bMgc27Q75YfmDVYsYCioRpVgjx5uNkLNKFhqRbJMPFxr6vwWXezSfrro9prDWtd1wYcUjWNzbbdpPqvZ3Dra6cj",
  "key26": "2sAnUrfyqgrv3kbLJoAgSAQfBHmmc8WjTSuyKsvysVS1HN5AkHPZLMeKQQitUR7oC363ENh6jYSh5zPMUs1gUMEc",
  "key27": "2xWiiPxFLsd91eQYB7zdSU4WLqrKn6DZ68vN73hVVohPExHX6MM9eYKAG1ZjFjo1MLixexnz3JQ262X6ALYLUkr3",
  "key28": "2ELnxUx84myt7G3cvDDwYdPTuUfzmMERTZTHcM9uEdwaoG6t3zVjCuCdyPYBt7JQXqpvM7RrfXBrArhrDXLgpbGa",
  "key29": "5LniLW5uHQXJJD8a4zYiyQMQ2dGd5h9QBrXF7PeNCGw4xJS2jR22LFwj1SyqV7Qb7re23oQxE8qACRM8t5rqo1S2",
  "key30": "QnAu1jSERu6eEbdPqPYaPaCtk8g7YXHo8Cnsvw7PFNbgdijsyGAiZE9FNYsBMNo9mDeirYzetEY8ofFVrDV77Ty",
  "key31": "388V3QstQjF7ezxZiAKPQ86bdStZjzMnqYogscuMZRSWBqoV2uSBEkmceaino6eLc8PgVPbTLZdD5u13bSu373v1",
  "key32": "54iXyLPMCPu3efSxgxjYbFPXovjQhrvU5cEQaZNob8ymobnxPTcWR35MMdaHs4ZtTRQVoVpdi5Qu3dQeFpFp5xb5",
  "key33": "59SqM3r5mk8JTrgRDrnpDf644oFYGd9UpCBTB5UZ4FPnDq2z3sh18qA9cwYDnb2cUx7M3uWrTubUFnkGZV1V9Kd",
  "key34": "5qYB74ggzto389vtTzTFbvSEQyChZ3HUqbZeLhbJptGzktuKgFvJraJnTfqWWHhHL1uKAngqBpJr1pg8vdenftDB",
  "key35": "3p1sSXQ2H621mWrEZcAo4cv1Ux9T167exVWu1R1ZS44RyZoBHf1rdMRtT1rNi4FdHkQYQbMW7PDE57oVbW78kxyg",
  "key36": "4WFgeKxuqUCPAwfiMLFR8T2M9SDLfMvTgFeiYSELm8QyNBrrhaYh3Jb5zmALLTKR81vTWNM7Hm3i974jRFxT8Erb",
  "key37": "67cq7ke3ZSuPpZKA2Tt8J9aRnjQ8YjQacQsmiXG8h1Ur8cHc4SKLgcJcQiayH14trrB6u25u9whobE29GFchemxd",
  "key38": "5y9draYqZNUwbDD6it9zvdSdeWQmqMZxWVk9M6ETGNZWrmMg8mhfgu6vRNT16oSaS4kcRJmG5s4kLCg7F6LsNZ1g",
  "key39": "4vBwisMMQpbSw6WTD1r3JLJ4gbBcQgy3mGnst5zvmwcoMVe6mQrpTUKjzQ3JasTZj1M8VdPA82ke6bBcz616WFtD",
  "key40": "UmsdYxn2nQdmF36cTexSVNynXs8rMnLNCzg7Nn7zPDeByK6WTLF8HjcvX5A1AETnj2qg6QEHQf39qR7XDBNg4yk",
  "key41": "RRpaeX2WzYPcjwdpAyq63SfnvjboeWsejUYah5YLRabM8282zuFePunUWDh3QMvzpy2AVmw3Hq27M1HMaVNyNGi",
  "key42": "3fT567V4XZy9XSS7BavHh7TJmkiQekoiubxaNEARdKYuNYeLK4seHdkmXydwdxk2d5xbiE7JqSFYhmfsvJkPjBRr"
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
