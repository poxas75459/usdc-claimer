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
    "kLvwRePQ7HMjMAty4Tq5jJar6P9XNHfo4sCj3yojpKKW1VzCtePuKrZCuWHzV1haf3CNY5JrfLtuFTpBtUNHHr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ydPxoUo2eXeNgUiHdXGp2pjhpUcDSdhV5b3WspoRPsTDPkU7opAuCCEqcpx5uzX6u7Pb17hZm4DpEzfcdYHbGGv",
  "key1": "29RKTJpDUEagFXnGMEzwrMDuHH59fSoyW5nDAjdSeXvBrYWpKArZ7pMPgmZ6jfZiLpcX1DtAUp8ubzy5qV1CYp17",
  "key2": "2sooQucXcASsmvw3V6tWC4JBMHpeoM8jb9Vf3xxqjSEPnqj7xnhZEhS1CGXwgHdEAsvuKdyJUauRYeLGLGyAWyEv",
  "key3": "3W1xwKLHNFQ6rw5vty2s3xjNKYZrDyMSJeJ6A2S6RXSnm1T3Z64SeHiURqZKXnSxhZFfBX9xkkr6xKswd3RFahfQ",
  "key4": "4VQpyuJb4SJSzrxi3Cc7AQFbfXZ1TM3JoGcDd5ckHFiHNjpsABK8Ah7hEP83JWtDcFzgGfuSdHP1cag8pnFN1cn3",
  "key5": "3E1WpqXrvectwknVwgEQTyhDwGgm4m6timRKM9uuU8SXvrgEEEYfbKtcPyiiPSTwoW3D6Zgv1wpC5ema9W6nJaCo",
  "key6": "vWS2d4L9aaJyyumQyrzhD7b3zRAsw71uEPrHX8SC7TWhDJo8Q7zBrcKrLftzeqkVWx3mSLTciXKdJMRiG6iAbgh",
  "key7": "3AXx4296WMaiAAQuBLgen9GoV2KE1jetyaqUXjetoN4XDAGL78GpDqZabNg3xE4PUeDgwpYW3Ba2LR8hrEFqGKvZ",
  "key8": "3CEWKNm2g9v22xDMaZ4yAKdyKW2VenHwyEyvw7GUmTHKVQz8jkxaRBv3uNLbXDjhPhRUYTYuvD2oexuSDxHDJLL8",
  "key9": "5ibb9NC6C4DmPJr2ttREXEL2AH8M9L1kTScYxaT21kYYvr5ULNWXjjXqoAs3u8UfWvZ9rXVen2YLoxA9TYm9ciW5",
  "key10": "fvWtWbqgjAuBZB5acrN7gkn2by8vyX5xFtaB5c6oVbmEEazp21d4HPdmZ4zrFzsyXbHkkgk51eh9pT9yJnCvXAz",
  "key11": "3ssa7Hr16jjk9E6gS9CkcrjGkCSghaedJPBicgqrNfcGCrXycC71ViqyyjtnpLSJvMj63fw7gVcGR2KP5UG3XL7t",
  "key12": "5gXRwcTZS2De2M6AX5fQGv2TDfaSFqhwpPhz6XzfuzwxGqNmmhH2v4b7nxmep5GKQftcAycJzmPM854yEFqh5s71",
  "key13": "4NdEQV8GtCERjou7GSUit2bZAAqRSLQCtC4xFU1UaJ13HkYWMyAKeEXmK7yKCKuPwZDde6mvvpDv4RpWLXeJcVhe",
  "key14": "3J7VQerqmKkXoxQ9eH8o5QnFMiiVNpDnaMSLeZoTZDaLfViZfD5AP214DCF3rAavHKL7WKpYSGyJDRyxFiJLUshT",
  "key15": "33x7WGmTxibsvkuz5M6tyD7mGmRbrgawdQxBXgLzN9ybVucgcCYB7VdzW1tBAThtK9BAhN5JoTtaE8iotb24LKKf",
  "key16": "5qCiJLF3dgMeacDhE4vGrfSYsHudXGd8VrM9zr35nZmds8aVYcxvRN61jgQ5QifVMouCG1J3AVL6rQ8B2keBCXNt",
  "key17": "5sBaSDyZ9v3CNENGPbpN9URBTeMe3LL4YbsTPpUyuJpUiiUGH29XcoaYi6wU8Q5tasER4YR2893FyDqoKRAVHTsp",
  "key18": "42XvdJmSdPpUzRtKXej5PZFYwqL9Lv8PnGUQdwHqs1gvxEKGU6s36PM2hSQj2rXFFT39QhKwqJRHi41T8t2p8oFb",
  "key19": "3J9X4kfFAeUNqvG3UdFeHunqYZokvDbiXwARpJRn67rwhfqfvZHhGeQ4BNJoUuVTRo1GWeLf5ezsnjKChuFmJjcj",
  "key20": "3MJmJgymKD8SDZf7X9S1w4D4ncufgH4XNbWrVqHRkL7v1K8KSNEKbc3qnu3FwCkvnzR7WC883ZFVN5S4f91UtTT6",
  "key21": "49p4PvZJydxwoSsWDX9dgutDbbSjt2vDG54rWDszGL7kJqNEq7LF7qLWzRPHuAdFK25ZbbFfTjbaVUToYJKZTgbt",
  "key22": "3vx93ziNSCaref9EyxszoEUJr4uD41k7kUxRzTuHVZSqrxTnYNUSuv9tTkERE16dduVSEKrzFHsBxVAqtyNKtghF",
  "key23": "3tuXaK5uFaCh5TUBtphsj75Ai5ynSM46SU9FBgUUQCJik76vwEzrCozMNHt2QEc8SMPW36p7NZJ67TfsbF9JHfro",
  "key24": "LLrPfk8526bHEcvNv3piprRh3wtpGXpQCX754qMXFtuxCHdkNFHXm64dYfxgk5yURiRHkzpmSku3EuRxMYeeVtt",
  "key25": "ckphPQwTN8CopSMFFushC1cY5w6qLDpXfimHdadMJHc79sqEKf6NnsraKfvLDEbkxMgTfSzBd6TVTVag6CGj5Ha",
  "key26": "5cgibsg7L78FXoiPDRH7iMHH66rvTztkAHPfhuaCc3onoH8Ury4iobCBqJJ3bGDe4WNnkSBgdrrXsJwZC2vxopDq",
  "key27": "LysYyxAefFjGiYDHCK2WAeJPz7WDthT5b8SC5hnQzYvqoD5uzybnA45HRhYmwUL7yf9pjSXXFFAmosah9Ku2dZt",
  "key28": "38WoyfEq7p14GqNGDgZ7zgDeCVS2aTPbqmg1J7eZmggg8WVXe2gR9qCUJFEZUYD8h8p8cZndN8f5ioHmdRUKAHsr",
  "key29": "4TEmnRKPh84yEkkt2i4r6tYZZnxbSbibexjAbom3ZFn6i4v7VSsftSAukXnLPQ8rX4EWM5T2Unmvo1nmpmoQjyYu",
  "key30": "5JcAFAqc78rKNF3pAYbNfEz1yNH5bWTgCZt4YCoi5KbPE1zt3ZNzCVzT4JZ1zEgqzyssXLFKqdXnLNXYYSGdg35a",
  "key31": "EtMUmykoP8VdJx2kVipR2hT3cZENVyGMWMhZ1khHUoot2ZKj8A8QbeniF3WXC4s55xwwRcvXcfGUGtVnE19DGHf",
  "key32": "2pcXWyviQwf2SWpostuPQMqLwYvFQQBWRXtDMxvQMbzNuqSUs8X4z3cU9Z1yhU1QVRcYzgsryoGiLwJLDRBvhtbd",
  "key33": "5e8LKRG4ChJPR8fNEstZ2NeZpJQezFCdMGFvzMkp9rGewhBxidpULPopzds4uKnhq6qxBymrtSuVYBcjkL62ror7",
  "key34": "65WhZ2qm7GPeXcAKmADBv5YVYm2wMyAN8SCT9Ykh3zW1aNNQpS8ChSdJkM81nyoRCY3qcHUJo4TWwWKBWmCeiCF1",
  "key35": "2qVCzqgY2goJF3SyMYqwqUcdCLTbYsn4fCYbKPfs7hvh58kjEFhEumALN6WfvjfpgCdDniNNphKvCUATVbZNVfBN",
  "key36": "2CyKsTzbaDnZo5QvPLiYSWwCCW1jwJ71gdmwXPoHMoB2AKAZqRqfy9Bfgbt9t6D7vFWnFX7BxKdgMi8udj1xWVKr",
  "key37": "3TP7tAM5EU4JxjYefHHDoAfRp7L5VzMwjQYZFraUuePowAfNT2qiTR1ek8u7GAL91SYFdK5pwmut8xjHrAzaoCGU",
  "key38": "55rMw9wDCE6zsBgN37qfjCA6pTTw3Zy4JxFgVZFZbvceayUwoJLqd6pbFG5KH6mGoCK8GeFoCLjAytBJhdGKZUBz",
  "key39": "ioGr82aDTRKFJ74CPY8w2vagUZb1Qf6DTDVMyfPaL3xZyimE4DxnXQti66euZtGP8JAMYUAMhxPZrGVGnkTLVg7",
  "key40": "5SUpuif77iJvykU6ZsEPDWHXTxv4eZQ31bFvB3mvWPP1FVmcJs8977DXjHgN1RXB5nQxuqN5maVgVXXmxBG769qn",
  "key41": "3oFBx8mQHXTruGc1JcksqFYd8JEdP1tmibPDTNusL3gTMoHLZDZnh4Vfw9oEfuvHsEVak1bx6Q3muuK5bZfHcbg6",
  "key42": "YbiD8J9zzA35bmUDGFfyizGyR67DJvvGA7c6qUioReaR5DsLabhhtP3ktuvkZ2UCbRdPnfjK99LKo3xNmsTT7SG",
  "key43": "2n37uRX9eKix6noLri4waSkHdyATA2bnQS8QHED9SXatbf2hMvKiqZjigveXKgGXPBEovaKxTBZeVEwHUL5KVKoY",
  "key44": "36YmQ7S8ZrZ2ar7Qf3PevmKiEWRo31a1EYvEdVQPwfmZ6tHvqockmVQx3ueZB7iBHK7TtcdkPhzJYA6w6UHYNayq",
  "key45": "4m4b5Dnhgunb178EZyWE8dXawLUwSrWEzYc9kmiD4FZQnATL2ZpjnBp9LnCUkkhCuETgF7kSJygYkqCAfgczQWJG"
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
