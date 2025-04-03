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
    "UczbyP9CfxwB1p2Q686mKyg3jLcnktC2yGfsKw5rbvegGmz4tpnsVrZdpLNmgUSVFosi3vkTkRNv2kChttDcme3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41zumkibFobNFYgJ13gsQ31V7UXDhAbbgnY8jgwBLs2LnQtauyW341D5YYZHC75EMa1rXbrkrxFjBABc6uqevsQL",
  "key1": "32RxmxqR2aSTGpcYncmbVVbx5sjiZnxzysgCteVjCsAJfLC5DsxGWpeuxZ6Az3Mxe5mEgPMbKVk866wvrpvhZneS",
  "key2": "mzVrft918Cyeg6kgXVWAZQAu22tZ3oczhWkPLryvUkKid7pgZWjQLakC5sNFhiEFTnm6ycAZFreFwjwpvw1y2sr",
  "key3": "3n7pKPgaijf2AekeDSAz6PA9G1vMevKDD6aFiamsgdagXDeDeWgq94Fu4bBGpct4raCogN2Pjx77ARB3RkhDykmQ",
  "key4": "39ajdfxJHcS1TEpXSA9SGztp2DRqzj9zb6VhU76MJzHzR44RkmYAUeNEvvfdoteppzMp4pe92eNUrrPvjMwMqgLC",
  "key5": "kKfvbsmeREqwLhqRcbiJFz7v3fFeooL4ePeDtQxWgJYj6i3C9YhfaThrkNdiTnaesJQuZcP7o2Lu4AVSQJBSeq4",
  "key6": "392LWtu7yPT6jk1neKcu7M6RVZbszbRjd1wLCNW8z1E2wdAa7U68PAcZGkRLSpJfkU6PNyTwVMYzxLkSevDBzeAL",
  "key7": "3ho9xMHGzZKycZ1Yf1J5iUhKpSa4FS2ryud9wxJoy8L7ormF11RfF7QkoxD8JXsPaTcoHnbiYMB6Qd2QvDF4CZNf",
  "key8": "3VaXaLSkMtPxN25UqVFrGfz74CPUcfbGLw3Q6npybFjqr6mLNd3o9oJoU5Y2pXevEmoCNWW8FfhWg3sWJ4hsewjf",
  "key9": "2uL2q6cnn4YVyVxkbkcVfEp2aFQwKLwCa3AP6B1BqRruUXXYQtZF1XYK7xKEWU5qH1h3bFgB1VEnyv2VXdY9gNEY",
  "key10": "2u9nZ9wijyztHD3Xrc93rXumt1sFkpKLmMjmZX5Kj38e2qDhMRuxZSUC7qzhrLz2xwCzuYK3xftsPUYnRp1AMkTC",
  "key11": "4dZ8Xe7jfbFqK4akEpJdQSAahwAZrShX93Ywear4eXrojV7iSozEmyt1GYmoT7UqB4cXXqtTNJNV1sWsiS9XmWy5",
  "key12": "2AeTqTy7H4Jb3gfgtu2R36ykX3B9Y9XwN8CLJ1PJEZA16FRszFzTfBUt4CncrkVJXG64bZcFpNAU4wdoDix1WUky",
  "key13": "2T1rpeSiDTHJ5aALnW8hGFvY9biL7jBaUecydF8BcFB2YWd69mARsNNGRigHyWRa1A3GUMQseE7QDuci7FgQMCuD",
  "key14": "ZtMh4p96bZirrozggsPuWamkD4kT2KnprDhx73eZfZoL8ogABzHhzgnJWmBC4kUmGtE2MUXr12GiM8Kga5PcEU5",
  "key15": "DWVJzyozAmdpc9LtV9vysqSjJ6uJXZwSjQDkvLqkBuQbHPXWmDGZZA8guP3162WpHoHfBkGrEum9QTH8Jr8LUwE",
  "key16": "5kxCQTJsEtpqP9kMPgKHTv5KWryZHRBn1j54835WP4CkMGFMC6esV5vjQW8ZY1a6bAKQQhMqNJkKnqZMsiJdMrNf",
  "key17": "65DoA25s56iEL3x4WSVQ8kNENFLCAKHj1HFrqHVtanBXdWjZXJL8HHY1Jhy8zQF1poEEQvkVP1res6WEwvcR9M3T",
  "key18": "46uiYsoTq4wPQgk6ei42X3hwS9MuxD2xWkT1hAH8h4UZ4cSgAuniq4Pf7H4BXxCoNFXZBfAzZAFPKDYBZYBTxThM",
  "key19": "HUH4n1fFAV7C8PBkAcv3wMZTSVSMwyR38XrGbPHqf74GYWeERRAwEHJYPCH9SXBW3wB61axXuqFv8L4nAo3Yids",
  "key20": "498oba99Qhf2XXr3kqC3GurNP1uAyNo57YvXzhM8ayPjuo2o4bFVCrmLkR65mPpj1VjwmapovGZ12RyybHqiKXw2",
  "key21": "2cPcTCr1yU1aenB5QCfvRbAVYW2KZTdYcZRv8zxdZcbVeY2GkywDxoPe6xb7ukzq1MtRRjU7djSWrb6U3RBmWP6w",
  "key22": "5eGCLJjoARpkYKWFFTukg4CjBXjF4nZ8xWV87WFUPk4XF57ASaXV5DDTwkCwoEc88wiYsthMU8f8JjXAnKx2zsuy",
  "key23": "3m4HxR3zYkykyTy5hsaQzMkbH2pfJyeNpPRe8SRPqV1m5YVBuWNMWuqpEaSyrkiRZ35DYkPWcKaHv4eC3vfqWjSx",
  "key24": "2uzkp6PHQzYk4X2c9Bdi2Trwo7fuohGNDVw1gcpojK8kK29W87oiYThUd3y32u8eK8cEEk88BQD11ak8cPeXDRg4",
  "key25": "ZXtA5W7AjNKQKqWFQe52dhfqBGxiVCQ3p2jEkcajsFkHd3n5hcWHVGeCq7WMQfpR4rriyVKtVsmg7WLdp2WfxHx",
  "key26": "49hW8cPcjT8WjqTwgk1kztQBFQzeEeYaQKj8gYvW8oPv4eYTu5ShLQogWJrewogcZ6XuubuSoHNJyd45d5BgKjzk",
  "key27": "3kWsowb9TbFDkw3SiMhMQJZsEjUHzQumPg5sEZGHSpKA9rXGGYsickJaT3zYg6GkfTMyxJzJFfPh76oR6qWG73zG",
  "key28": "5f13ePPre3uryHSRgMaS59DrXa8bbhFssQGVm6qZ3WwBVWjheKnMRD6WDKuyeq13PQPonjuMMgwPyWHedpPoCdBR",
  "key29": "6hfVQufhJdDuWs4zdiWtGAvu39VSv1KnQ6EFCWDYrWfcTtjNqDf8BtQZJY1Wie6RRWRQdCgjNabQj8wgm5oS3fT",
  "key30": "3URKqTvh8yZ73iEfc9WH6GqtAypKb46hpka3Y9VdcmL4tM8yrZ4GAYVYLddEvc9izzzrdd8R3J9cdrPBK6vw11DB",
  "key31": "3RXuYPLVrw7Y6JezRyUgKJWUT7Z2KMb6VDCC6uBoqa5U4ZAcHHd2QnrLY4FxoLMyXSozfywmBKj7F57VoSJdQuid",
  "key32": "2Hp6meARuPkioMh7eLC6ygk9VWRV8edVEska2y3XZkUXGYL7xgDbfXKBm2SJtr4wM6ecKkNisbroJhvpWM1fHKwe",
  "key33": "2gBZb6NLj3sXxKmrdJd5MQz3hbMsKqdPauCTMHxD9e1DTQixXBqQdregQmuV9suXbQgh6KSzsdi66Zqjmjb9JXnA",
  "key34": "59TZNrTVHh61zwwJDVw6JALg3LuvSMyvPEj4URqv342uH9AGzx4kvbK8wYG8MVXJP8cBV4qubPxpwJKBYjvmAgEp",
  "key35": "p1yFmVLxnJE2s6u8zfsCBDNbG16AXZWsCSTBbv9PRMEHHTHMvPyGD6rCHsN4e1xwr4x4rjx7SL8pT83DxWMAtUL",
  "key36": "2aUnDx24ScNXT1yUk2qdWH4Mqyk3tzkbAwyxPZZXqZeWRphMRyrBLNiL6tUVygQMfHK8cgX7A8FRu2DWNzHvxmfz",
  "key37": "5zhfVz8k6SR9UWkxFLZjzjhYgiD1QyGPKF3LtLGxPYbnnSVTSR3GZVHDs3UrGxiiTupqtcpiKrmXCjNipRrZ4dyq",
  "key38": "N9xRzHq7Sm4KJ7KmBrHptNxvsvF3LdSAyihzhgGK1JEn58ruLEe1VMB6CCcrUa2DsmAibJqLdAaMoaS5JFJciJh",
  "key39": "25pHWgqUC7brcNEJKDTpWh7FNHD3PyQ4oyjEte3QiaGey85NXARLsLACnPBx8JEfdoNfTX61NGQu2a72C4Y6fXvD",
  "key40": "2mBkTkgrUzBE9A3dmrRnLyjxJZjUo1oPVdxWiTtqZRJzMixpwd2qCSTobMzN4eshHN7g8MuQnS59drLFBCy54a8V",
  "key41": "2QPcdaJr3X2cFpx7eqyeJvFFyw3uEphVdtpupQkqMr6Wni2PMzyveNrgSa3nkrdmpHSB6CfswBrVYi2fMFiPTeps",
  "key42": "teua5Tpv81YdwiZUMXWWqdFwHw3GzWJ7TWJjzibjfhmGg3qULBLxsSvGfXDa1VohyQ8cFiTCvZxhrzvWFGmqWMm",
  "key43": "4PYcvKSBaU92ePJA8RhK7SUSKKusrqSvaFr8Nrgofswt4Pqo6djJYqDKfGEM3BBF1jLJqwuEMobp6fJZQmGw2G3s",
  "key44": "5t1SG2iTiYMUd2faygCYGCPyhR7QK1YSWboo2uTzab3UwHc5yD9iUBv9GRvuDLF6X14AJHgBSTxvCoybziWcsxr",
  "key45": "2vCknmjuePq4nfPxe9Sg1fCAQLaEPLtXb4KLHgPdVpRPo4h4DyAHNTsL5pXHgJaX5H2QGXn9NVrSrELhvFTy6Z98",
  "key46": "2fzdQLHJPAicFZDPaT3J8L2Cc94x7VScunBGvdsn39wzxaBPkYb7rkPz1yyCchVz6MArgb2uKFATLjA29ey592nW",
  "key47": "2vQfAyzHkXDbBKQs3X7Xy8zBcJ1eAF8sBM6J6HYsRiLEehFJo1BeDo2PBW7n4BS8uLSPuvU7hyTA5yGkBucqBV43"
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
