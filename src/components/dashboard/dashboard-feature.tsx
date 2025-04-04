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
    "3UtraPQKPW7qikV1TnHWqxpqp7BAbmFekPUKrNVgfMMFHASsPYqH5DAZ8V8B6BJsSrbcE6eZgsLQWTNjuyDTqtu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z3CGNSudXH7uikWtK7YKVPXULVHYSKfuw6hh7FWV7c84KbcJW149CY3seYUn7cokweGJi7LsZizBin6UWcn7sPy",
  "key1": "4HZ8hjEoxnr11h85zpC8jQqBw8YPuKV6JNS5nZH5jHzHiXTvhmNToAULmE8WBxyFmnD5ZeHr5BFCR6qr1Ze4vEVC",
  "key2": "4mFg251C3f2qshJ6KvGZnQFQm4CRDSPc89XNzusWG3YWQPfd9cjJS5an6YsatHmipNfbFzYSBAKFar9GG1WX5mv6",
  "key3": "3YRpS4T7LDNS9o614KHvYuxE2VtQteL4ka3YTHQXSTk23wdQTHPXnKzUgvbwD9VdRyBCXnewsPH8CX1LbfAhboo1",
  "key4": "2vpJgq1GXKhcSYZjdSZgTseEBRQGkd3VWqqe649kPKKJDKqaVhPs9pVSky1818HoTPxgXJKEVnRej4rbW23Afnq3",
  "key5": "3TCUUmCFxSS75bCrMDNJuPfgUtVgenc2sZbTx8emSBaxfoDMhgGVQNspwbXCstazTo1MZvxttKFT2vDA743GiX26",
  "key6": "2hDUNKPJm2F62tk3piGgfMCMeWqEJNpWCwVxcu122sc2BdrJ38rvVQds4nhP3x7mjHQjtHPy11N2UbGNxDMCidbg",
  "key7": "BTTuZS4mp3cz6Hfg76tFoxnKMPwDddG7Aud8h67epH2yZXhKjXdwnxmejwYy68gXFi4BxRskr4VeiWEvuyEYMXN",
  "key8": "5PbPMZg2KonGB8F8pvFvH1CTKiRMjtUaYSvJGHyHGCHofwVaoAZtsYWCqGdZAidwyigHznCozVAJNErL4QuM6gAS",
  "key9": "4boZ45FrED9jbNcTsgdAFdpy51kZ8DmzP6FgjXHmzB7yJShyTcGBszPiz4Ce6y6dAESzZf1Simyea7zbSLxTWg6w",
  "key10": "2uXBQumGZsND976AnpDz1aeABdQypYT87mHLp8KimDSLJKYYyVjZooCNQgTmvxCCC7HudciFcL2BMeFGb5gDaK8F",
  "key11": "2j6EWphbG7y3etacho4HzpPgSYHy2t1guwkNHsEemLZV9XSgweqWiyJseRrxicVVJzitKr7kyakAQNtTbimxax1Y",
  "key12": "244Xwvyv5y9mgPSGtCwzVLR8MGwT1Q1VcvXYfHE5no5gNF29au4Yo25hrra9niaT2Fe5zkvzMTk3PH43VT9toeKr",
  "key13": "3oto1hxBiE1tBsReaJNXUEGJxNQgSYCECTqcQ5Zn91hCRVSMmX6Jv87BJRfUtq1AU5tnXrfzwZ3QgsMvRT3mu422",
  "key14": "571cNV1jEyhV8XS4os85zWpj743J8xpAeHDJbnicW584gxqQJ2m28FtRCEgSGvc1buAtCT44SX4Q9eErqfhQHD7Q",
  "key15": "1eXiHpc3zT1rb1w13ZHYHQzkWy7QHSiioMGww2AdF1GA5HoUgJrYC1D4CrWwgGtqHYq9xzwj5D99oUbSGZLdkDE",
  "key16": "65URm4Az5CRLGg24bE4ZDFSQQsCeEER55orfpv4AvCjXH4nEuwSUPMVTCAG5GLDeEjycTdqdZV8Dc6h2hctrkBAo",
  "key17": "5ukZiEXTo9FfGw52rQoMZz6VqGBPo7n184ZH27h5ntJeibViXJaGoZ92Vnk1LW5iyvvg8swDVDp3NxbWd5fCRFj",
  "key18": "4w3accH5KbirLyb6wCHSsSHXbA8tbmdPwPtCDhQtobLvTk4T7nfy1RTZHVvjFv214JJ2GHA3AYH2UJEnvpJALgUh",
  "key19": "5x6gNnvdyTpujXoFrdqKcyHuYxLNGvA8Z4Heuo1vS6hwjcig79AXvjbqgNawSaXBqVFTWoWWJ6gdo4R2QtEp75rb",
  "key20": "3Y7M219zFdmr8aFvBWzoEaPDZ7cFmxMCPipqqZH25EaU2Xg78Ws7gJBLCmr3T8kwPCFGw6SWGnugFk43ECiaDcD1",
  "key21": "3AmsN75nDPh1EgaW6Mohge4LLTe9iUKvYG8pFmmpDdh2S15VTrhMajZPcFcgN88NjfNaLYVVBVziPyJG9g3ATWvp",
  "key22": "3cDePmGkqo6ubNebNAd3Dve8RfSqVcuF6r8VKAcQ5GoKug9ZSi6Qgv4LVYY3kmdooTkX2N2gpPhcg7mejjpxhPBp",
  "key23": "487iF2gv7wetLzeGtFf3tmAz8yGianc9w8y9mQB5hW1SghJHqitJGQPdRR4HFWSe3MUWZXRCo8WVSjXjESgtzhhS",
  "key24": "2rV1cB865qiq2PPrqZroCSyfRqrL7g6mM35rH9JsrEYue1BzVqX31bw3Ck9LmxMSL7SRZatDyNffYtW5gemz1a3K",
  "key25": "2iaYUqiWU5m9h964HeP65riWr1tyfBVHxsqQohiZWDZhyU7phdrDAxmrD56fxDtshvxNgPdhpP8ZFQHAzpui72u7",
  "key26": "5t8BBP8w482W9LtusTyz8F6n8aaKoUcqXQrSuEEt7XaH4z5Rm84yYQvTMZyY8a1Ayubgupnm2g2UAfVeSYufo1Z8",
  "key27": "2n3mn95KQ1rna3ZdHfkDKEy1GSCcmfeZD1BocB7JRKwjSQKM22gXToVqG9wMAgRiJDCenUY3xN8cYfVaUDwkSXwP",
  "key28": "4WBz2wfVtym4tEELPkf8nPgTE2fsK16cBS91LMRbNnQsf14BExzQb3cVWUsi7z5UQ7vU2UejVhEY8RvoPytaqb6o",
  "key29": "BYsb22s6y4ExXnFzvssDcC4ZLMJFtCD1zihkqS9LuqEq7ZSjHpEzEHLU7P2VxK5KfEDWWVnsettwKgcVyk1BLwq",
  "key30": "4jsyw5pZ6FUjeC6iG8N22swWs9bsYT5zw3stpdvfshUenPTce9ggqP5Q6r2yBKthBhPqNhGQ5ZXQrn3joNEMiYxf",
  "key31": "55WwiWn6EbQT6AyMtpVdNQ5Fw59zXFosRAsH5dyUokkcGEcbSZ2qM26w8Ek6cxZ4PmyCAfpU288cD96cQqPjahNu",
  "key32": "3twUXkHSntTiBKHSxud5ZULkohK3AK5Zy2cYZCnmzEZphQiYS6GQwPey4SV1pq4gUFLLLaYUYfrzhGVehDjYAnfc",
  "key33": "37jeift2MfwCiJo5iWd3vkN5f2cC5vRPEBEsx555rexzUfTrLTcWmF25ftM242Cm4DFGPkBSKbvZeD5mBZK7GuZL",
  "key34": "CZRbYGKwJzPoCsUS2UDmMMcoEujed2xDB3vYwQ1LxbGXN5K84DvFiSVrrwWAU6qqMCej5MdBW6WfytVNtkXLfes",
  "key35": "3uYQ12yXzaraJncJdVFHtUbzipjsx8RzkYKwiL7QwjHdLNjKYYV7pVGJewMUWMCjrXLL6cKFB7xY6ivhSrhathKs",
  "key36": "JuVZYhH1XMcqN19sdfsLpL1WhtY9BkYck35P7RzSQwB4vMKrVZvhvYqrirXkPp2KNXsTgQ259h5m4RBVKhx7zmp",
  "key37": "45gGtAGU1K9B2XndYdkKGzqKrbPZFQCeDxDbeVMJ9fpRv9coG9rWLfp73RDVa7X6agNK5kxarYURKsrzX1rVZcpV"
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
