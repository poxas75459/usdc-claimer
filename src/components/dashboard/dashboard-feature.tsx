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
    "3xSr9xdBe2Cf6tNyBKYRMxskBpD1HTD34LzBWFoSSSgkpPCxPxezSnRXXE2sjXjSN1HSMy9usYQaTc9SGxnwYfmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eCEmft6Xh3JpqLk8HiueDjMJeVkfsZcRJCWE3Fkvu9KctLaYsfrZmoPW1dQzZi4XkPESovQ8NJXGPWNVCEKevmG",
  "key1": "3HPox26tstBbT3ZZfUQkJvNdNK8hpGKZjPZwbavCKGnECyBgZ79aEbidKueswDdpLHLgNzeYDdnimwkcp7mNFSEB",
  "key2": "2ZyCtRQqwRGx6oBGGDPSbyb24DKiRJ6ZU7CCNuRLHgP3mb6qnC7QmYV9hNK8Zr29Mokn2LXUdxKSDcqhJx1vKeJ3",
  "key3": "DGpPmHfvNb3xiaAVBjtpkiomzkp28v4iDfkidzSzL7P9Fs66Us7tDuv3DPXBgqBTdegNwzaFNZSwKetaK74zGTC",
  "key4": "5R4r7gsYi6NFTXHR1D3XFAEfpsmzbHF2wQ15H9g4EfwfsZjVEvPk9AXaZKvKazivgMGahKp8DV6NHXsZjPJtaBxY",
  "key5": "5KHsWpbvcPRJw9JZkP18DvDomovLdtTmdYaeTxqvt2NFCi1iFguw3Em66YNDWWorZkMujqLwCy7yoef5McDP2YFi",
  "key6": "b64R2w5gQwbT9vC6ViA3G5FGkdko5GdvATFjUDofyN9gLgmHqe1ipXamWbCWBVqaskAF9E3NeC1EKAs43sF6QQr",
  "key7": "3FW9FvYEzBK3P2fVwBF1kPTGV9sx94AFrWAJ91R65xBNu7CTEEhaBm8aCHecynCFtUCbJgsq7oeqMyZYsBg8yiyQ",
  "key8": "3of2aP687Nkm8iPMWqzcFanXJgEk27KtSCDNdd1XLNKUuDRPHw71YpES3PdqKLoWmNV4LwekhwLr498WRuE1Jo3B",
  "key9": "2YXrvngVPh582qfGv2pZtTf7nFcyMJxfbiRr3hF9fHwgZw2t8KyQwCJbDRyVXyE827dL5DM22sf1tzXWD1BsNjHC",
  "key10": "3rVRPzK7jKRmhBPHzn9Y5PHGHV9BRhheVcuANJbaLYXXXBDqdZJCmu2m1nrSdCMYX4WrfhhPYPc8ukRJbPD17iAK",
  "key11": "2bxcu1Ymvvo8t9rPAirwpPFWApWj82BF2kGjjFLry8aSCaJWsXLuJV6WhoNymnE63b7JKagqHhQjfTMG9QtaUcM5",
  "key12": "5Goi83moRKtsXWGAxnEusn1WwgChuuGENa65sDzHFqae1BuyWaoTC4ovo4945micMGMheFL28gGXY3fiofSkDAzR",
  "key13": "2mesz6kLbCgPAudPAfR8dPLFRY7c9FxWVgYuirAoaR8hMQ1fcVHNKrBssoqbjBmrZ4MfeFntG96VaqxUDVJrD1rf",
  "key14": "4MS9g5jMSiQu3w2yFZPhyHdBLkNay45fwhTLK38abgMQUdZF51fb9jGw2rc1262hMnuR9kqdxNpqZHa6DL5BnSuf",
  "key15": "2KGGycSJm89PrvH2dDyx1xhY6QSMyiMmvUa8k3Pe3VFTrQwKvZfDe3CrHH95fVLvmBYqoAbyomx1BGT3nbbVKsfP",
  "key16": "4asEkkHkQsRMotp5ZpvJDswLzisSTWKfEobyUnjSmZCAcZSDiazNbnXhbuvpgxVEt2DPRDufiEdizXDq4CkTWGWH",
  "key17": "nmPof8BGCMc5Jf3CmTJwzmqBbCxWNynT632EY66uGxrBeB7W17WpHcJ2sPFPepdgL4L5pzxytFVEX4tkLtHqNf5",
  "key18": "3QE9t7fLB16ocj8C74oAX7u1mU4hWViLbcAkurJcPoS6LVsWYpP845fJhpQVmiNPyhiRPyPttFe6Mi2SEyd1eiYc",
  "key19": "5zsaUtLQ4xu6aY2js7Zc8tKincddUZbCZUNGTWzaYHqoS7ET488KPcYDoeTjuWGZwjbJxSmZKmo2r3yuF2EwdCai",
  "key20": "24eJFY1Df9HpuTU2fnggGNnUoqgBFoeCTzpZDJFQKMJD7XdtQoE8noFZCjYDwmX8wcjjbxU5uqKvU72HAfUEk1Nj",
  "key21": "4e7vTxS3EtpckTyYfZZ6Qnf8RhwLZy4Mec9dhNGuHbNMD33KXBiNf8mKPU8ZqsFtXsN7vncZVVLmJLddzHwXx26r",
  "key22": "2CRSzoAQvfiEcLccCMtLreHkJ6kRDAkohc1fhyoaB4Jv7TSZ7nRvT4PDoDivvJouyTmoMY3WiVxFbBRDGzCKDPi3",
  "key23": "NdTVzMjeZUuDKnrg6bGyCAuf79atV3gEHDaGsZ93exZUyZ47a2evaGBSSSW1UW688EMvkon6xTVSweEjv7216tT",
  "key24": "2WLnDsvCZfWbLi55NxaxrC1jA1fQBKgz8ZP2AxeyGyW8jjsnwQKpC2tj3pimGu2AUshZ2mJa94VKRjEMqnBDJ4qk",
  "key25": "2xyxHQtmKSLSgFrdRvjhq9fPYHarfXqtC87eFKgra7S8BgRRwzqLoX233zwU7Ptb82wSyCTtytdnxAKdb9MrLFMa",
  "key26": "4oJk1e9rUUQoYo6SDVXNiczkFFQe1Zt5CyvqT3Rq4hVfQBmfQeq7phypxJkDXou6oSBkUCVAqiEdZwQiDmJdCQCm",
  "key27": "5M1R2y4PCbtfib1J6oBZrDKEyY1V7REvogVgKTHkTfVgtYme3Pn53sRqKCdtYa6CsQtscQ3bEXjcKkPW8gVpQpzX",
  "key28": "5AeV1okQWkcT7q1c4wKxHQdLtEh2Mx4mjwaktUCR5WCwAsW7ta2aqVFoow63vVitkJ1T2XGMbh9A6KuX32czYpKE",
  "key29": "3fzoiVB6b79GqXyyr9hBvUgnuWZBcwegeJL7WewxqzhruAsDW48ExmKLGfkNKa32jXBwxnRtTirBakTDqbf9ZFsu",
  "key30": "33DYmMCws2xxMkctPMtSeZqxFxiJVEajPxZfPNCxMH5kkcPGAye9eyiBN12HdUsStLLDDhcP5dbfYwpdaD3ZAWGf",
  "key31": "NWrrDrTwbKDLD3JWahDwoygGfXDiogCAVLY81y56UVo6eKPXh2UXzChyXQzAEmG5mDAddrm5kwhFkuuy8eJuhyA",
  "key32": "4KP6VriuyuY2oAPHrZAhojot2xMFJvo4UqPU5u4mHpCXqrDwfBn8pPYjmvXHkZWYwrif5ppA4qzDpda4Cm3KSWmY",
  "key33": "4uEcrMhzA9dpAckWQpfWdvLgFD7qRTNRtbYd4sbSQ95Wsk7imTb18jTWtVEHo8PAs5GfAEeMW3RetcM9z9D2AWUG",
  "key34": "c42qY3PZK7ESe8CiH7vYqdUQA1DSr2zsDXQHTgkD7JzdDXfagVytTWm5uVdkphxwcfUiAR6WQZ7XMp8wgPKMdc2",
  "key35": "9LE6ZmtTXNpjJ5mWSVxkBbUpMdYURLjrQEPtW7N9QoYX7GdnkrA7SWDzS6j2kUqqgFBqbfDRedg5B1zqRPTacLV",
  "key36": "5sNiPQFquE8LmWq8z5YhLaTm827FEATeXVwQR2sNuuanJJwWzP4aXYQMRnny4TsJVfmBdVcDrfR43NTdPGyY7b2j",
  "key37": "5ZUPWoNReq3GgiWssmDkzd4YUQLNMXtLPGm6qmLkzcPTc6RFbjCbpgMvRM4xp2WVgW3bpCTLS6m2exz5mcBnCfpE",
  "key38": "2MzqXXpwrNi2wmfZ4uW28fWupiWFrnPH6bHNj9XTcpcHDRKBfNoCWYTCZ7Y22tUkb765qXmKEEVNBiMokeSJJJNE",
  "key39": "5iXfEBV2f9W6uRyJgUfS6N885YCEvdKEYY4rXUpEcR1x5pZuqBcCjxE4uWoy96YztcKRk8cF5nfuCCFiLZQCDH95",
  "key40": "54xPFK6eRk3FnjZBNADKdjjZmkpfpUaP2Dy2xcoK7r8bAtT1Kk49yJo3VAcWsNegPUN5QYfhHMtiLY9mQHNU2xwq",
  "key41": "3ssARwDifsaQfzaZvvZHb9EkTBJAe11XDnPNGzRi8BhUWAt2BP97EjpV9wHaf6H62KBRqz5HhsEKXE11UtnqUhft",
  "key42": "mGG3bydXWNRxJwxF1pJKiKUAT62vhU6rfcputezTDm777P9JoQ6ntmX5QUu1L2trzASZ43YV4PV5A4XXF93Hsve",
  "key43": "42xfwbwJnX4oXszb2Tyiqpf41zzJx2P7xShYD98GRyXrDQ7HmBZ3HA8ggLRH1dw3QeenzHuG9EgHBpxGKD1yd3CA"
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
