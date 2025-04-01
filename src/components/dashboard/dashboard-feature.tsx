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
    "3jgbKX9xSrHA78XDTLgTt2wN59oe3yu9SffCHwdPcmtoGRdvD9gW9RzQA5dkLsrMf7W12M2vswcPs4vztBmBsxL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LppvZJ4JX5Cqr75rJwmodUFLNitHui3jqQ1YFwWrvPxLWFjajKpAgUGWLCLmGQxPS5TyJVqpikSfyRzgSEM2nGw",
  "key1": "4dkSLq4He7M55g3ooJXV1myUZdDtb7dwHcaNQHSEuuhw2RbFgJZKdPYWtsrbRqLLDABM7QFtFxb6qwL9Hg5Uquhf",
  "key2": "51oTSF5ADTu9qh8TxyGkMBTH3rxJCFa5ybNxEegkcyoPSuEfZSqd2eE81cbPj7daCh35jNDvhAax4HfomQv8XPCE",
  "key3": "53sv28sk69ZKgQ1ceng965JoP3PyWbJJxT7uzm2DazUUApy9mk8piuoABvKPjJ7GHkpqtB8afvmHPPnVkVaXy1Tc",
  "key4": "5LcGQdssSjdqkmav5ctJMXfep2AsMsV8Qt1BaQv9QP1zyGYXq8d9zMZWUoP3icXEpvRxskdaq4mjPLM5dQZ17z1E",
  "key5": "3FMnusiDwsX16PiQ4xqBywrzuZvc6F3Ru2uFLhAq4fRhr1Bx5E5mZKpBqeuo37mev85Y1Gi5YdHyfyCJo6HdyWjg",
  "key6": "3XikrGnifthog2q6QF7tnQWXHLn2iC24JSBArihYnbyjg2ywMyt3PXv6KpL2EjZKzmXnvcAojxj9gTYNtTeaNabU",
  "key7": "vx81KqjtQa9ksgXiZcW1X3tzegyMzMHRDr7UTgKc445fPLa5oMD3AaXfsXBCDdSmkaRZanFiQsgST3oWnP8LGPR",
  "key8": "2TTzjV7VCb2oFC1ayoD1xCwctdkrPSMkRW2Mf2ixA5619f1u6SRGJNLj1JPxDYX1ax98VcP9UaR7T7TurkTxAD4p",
  "key9": "4S5jRaC6QKzVP77fuKiNGYHagn8mi51nJTjWstq1BnaemFYYG2x4BWoyunZ2Go7CXcYQ8ZV6u4VF6qwaikaZpUJa",
  "key10": "4PjenrgnFvnV3HzwVeBWnFEo2QRKzrwiVwKfo4d8pzTDJbLvBRE4GMnyBqgZWpLbZcQhPWv8KKVwd8CAyUsbMDo",
  "key11": "ZddavpPxGT9jWdZvFJmynjpnMqgUskhNcz2wcTjWcDAxyxEdmc6MAkj9VKsADLVVBR71gijH1JWAxYzY5hwsZ93",
  "key12": "5tK29WYEVbvTPvqxzjcKh1wP4gUJWrCaeDcsnnpoy6gCXbEhnC6KsMZ7frEA2S52EUfxmFrnXox1ZNnDjbuWQ7K4",
  "key13": "F8x2Ze5tMCiobhLUzckQEQ1hkkAAxH6Nmksc3Et7A3B2QN6xkzHAiboE57XdSqSc4ciuWXNrd6eZZWW7vTjNmaY",
  "key14": "dTqxDvjN2PE2hxgH9nfwhxRDrzESTx8PWHXAxEkPmttBzsCBD6LBqF2gY1EzYGAfXvo6DY5Poix2YpwYbmPJCE5",
  "key15": "2aZPVg7t1Cpv2x2Me4yVgquCBq5PhdsQKp5MxhK1XqN9jrgPwedtjXBBmwFAnsWrGR9JG51fdQgryeuG6mj99tD9",
  "key16": "5bpCYWRgeNx9XvKRFZ53RwZrhiot6nEruGfxQPrxep7E3tBLGGoyPBFVB8zpp25gGGfDMQTDHmmAJefY3hhj2m1U",
  "key17": "4V2voXLEacjDMjWPJvixboVSc3Smjo9yiti3ve8c2VtheENJxjtGx96u3PckwzZMfT2RgeWdfyMSwBfPsZb3nnvi",
  "key18": "46QY8NTL3LnrGSTXwsCwHdSwHNmt2HpSCZi8eMyn9rdkSNg2rwiAfWKutLJB7PyWZH6YEQXti27FHntX3JRh6ASd",
  "key19": "2zwjYK5jgUdW79m66652TZwzWjb2RbGwHGvMtWyyDre7rrqYju4ueWE3JutySGL3EXed3cPUvSiAyLdcGC7cA9jC",
  "key20": "4A7uiYBY6MeHzLkWTzpE1oVEdW9HHD4eF63jvwt9YAHxkR1MxQ22LEUJKnEZgwoYBSEUvev4qDmG5rh3k4M8Agyj",
  "key21": "5XGaCjmAjhRgWrRNS4uSTXcMvrXNqzGcK4DGBQCM8XHXDb4kJHt6SqZjpvaU1PAMFubuANUYJ4SXTMpEPRj6XAP3",
  "key22": "45KudQiWXkX3zoC9EwvtFnsaC71o6sevzPu2hVgGNFNXz7xdoWEToVrV72vUFso6CPH34PD1DVEG1V6Fz1ubYitA",
  "key23": "3vGpkMd5gR5hF6xBCsSotdYESm7pCc38aPvm4mURRckDesffN44HzfCVrSwZJpUiNK774pW3vE5QAMSscpK2pSoH",
  "key24": "2ZaT5rHjC8pubdWyYbvxwbQ8fe7g2s4iXssp6vb2hufYuJXYQXgLbqcg6hMZE1bfuscwRs7FX7MuJ7epheMxho2S",
  "key25": "4UNPCdcBDgagtDPhAMiV64DjCj8HjK1S44MYAcvdrdr4B4iw4mnj7rwXUyrfVL81YrBGBkHzKXnoQe1mvEHPMQSr",
  "key26": "5q53zK9ASehqe8fbTj8uSKWgGvS1JPkycQJ9VeEKMhS4u8piZTV4ahnW1ghaE9xPMRVb94E6dkET2s3aBGDrkJqf",
  "key27": "3kVjqkbmQySDk94PiYfCj6aWzFuvQmthUYTEig5YczRhGSb6jj6mcxa8v8taSsNaNiWxKs56v5M5sLbK5DFjfgQe",
  "key28": "4qCMRq4uSWW8GAjbh3nL5tZxnZReGMggsFJfVE4nN3AxxewgdQsteXvmA53HoZfyNVctW7r5uwrmEmSUjfkSCtLQ",
  "key29": "2W8SgtrostjsW3JVuMSbbnpJeyhP1EfD2KZDaCmabFG6W8ATgUn8PidMSiE8dUAg3E2qx5RN6eBomEeade1KQprP",
  "key30": "4K3rmSGGTTJ8WqtkBAaL4YQsJNPELNbYeSpTPb4pSggc7m9pz4MELAkg4VCAzXhjg1N4cnEJ56iQx9MA5KwdLUPP",
  "key31": "6RkWH9BBtJkSrZC7srKt2Qj9SgfAF2361kUSwDvsehqN46XUWk6jpj9JTg1B1kXtrdBYT1Z2G42kSaGgPt5oVpr",
  "key32": "2nTand2eY2mrad7C8PrRadYoiWaGVRfE6iynFd6ynJZcH3h3xcsyLFznTVXPR51aadm36YaiqrqyRfaKQJyhHfoe",
  "key33": "28rD4Jv4nLbLCxbdmPuFwERq2rFMwQXYgmyny9oBbFBdwuq3oT29hpxbC8cSfbtgMSrT9DJ9asYcUBe6ZEtuJ8ta",
  "key34": "4idFMxGNS6f1hfJL8QuTAZ3RsxCLrt5mMXDcMudpTg7Ev5rDE5LqwvLxdtdCAK95zRpNz1Rq3JEBHBpHeYcZKcEx",
  "key35": "3k3Ax1JLvmzn19Xdq3Gi7dSZa6bnfuEoiC2AB6USuqHV8rwrdNWnxBWgWWKUxNpbzNb8jp6bzVrpopWP6f9Xr6Je",
  "key36": "2dVZuXWFiATV5yWy9sPHEE8PnyrSkH4QUJQ9XFuC61FXE2EHF6RuFvgXREuS3B8EuD9uwbdH4Cjv8yzTbvwzkTme",
  "key37": "31FocNfPp8V5eg6uwiMNs42Pmg4QAYPFykP8dBSwmmKxFcV6PnfFDpBb7XSkK1V8CKxxHqiL7a4bK2b3vpN5MWYk",
  "key38": "4aejBck7Wnmaggjh6cCoNiEpkZbqgQQ9yBPKKBaa7ku1r2fxnEzufNntZuntNAukVPvVKnHBHPdDdUfgg9HY2VVv",
  "key39": "5BwgtJ6HcxrPmRzvwBe1DGkdTLdCuCmga2LECcS5cKyZJ5uuEg3YPo4aydH7FkRAsCDYTwKrZ6qDTQx1Qkh59zDk",
  "key40": "21KpBKA75w2vQCLQfcUR9D2uDHxJMTz5ALv5DXke2A5ry2m7dwBg9MzAHCQfidqH4Kfqg7fU7WMHgFY7fP3DCNcg",
  "key41": "3eBsgXJwEcqFt6ZGLHrFgiF1AMTdvDwCpMoR4HVrLmGyWnWR4ibuA4H6jTotUyjEzetXX7T2EvgjqXjj8HTYo63x",
  "key42": "3G876muiiciVYm28qv9suatzRcC8b1NiEVBFxgvGfjxdD2AUsw9GjLcE63bhWbychuaHJQ3q83bPZEz8pTUdbFsp",
  "key43": "2wpsHA31y113WnuyuFfGTg9Amcttc7DuBfQ1NYLJcdy3fp7UdzwehiNs1sbhqUFRbRZ9QurhJJvXg5y994nHZfxy",
  "key44": "2wf8p5BE6XyCdFeyXTJYye7jxAZvSQ7gohpUc1vu4wiC2m3eikqVT8hL2BLTEkEqPec6DwRodT3urGomrCCaogoR",
  "key45": "4cwtjDCMD15HjtGZTUHNhMKkpxw38tJDbQGZLywbQqjTPQVaWpGWDq6x7UoyKoJ7uDAPwtr3uJw65yF3LAUYaXhs",
  "key46": "5qELLJvKeekdadTuyqR3sVu2DnwXRCQuCQswLaW2i1KR7U2QL77dm69yowc1ps4d6sZS6icxa318gnMjrUGEea5k",
  "key47": "4igRRnXAsuiEoSCk1MCJuhCU7cN6aFpGKz4VF7L1iV68nfRbwookqpauECDNbf679CPHFujdWpnTNQzEMYTqVCDM",
  "key48": "3Y9EYbqdM6RRW8Naz48oaKU8tXZoL9mx3oz5uSnennvcY9F2iPAGZMZ6D6osGPPAujKzAWmtquZLZ7sZ6zDU9U2t",
  "key49": "4fNWD77itDjJyyLrhrTtfKWeja4U2UkGtLGo4p9tinYNnvG8bbssb3frgkzGLvKwj9wWvtpWsLbbpRnic5s9Ki7g"
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
