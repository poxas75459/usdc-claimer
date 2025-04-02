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
    "5vouXdFNqjAxbqf9yBwHUtpExzqgngJKAqmm5Ffu8aYZmyKkVFp8pRnEBv8kWKy5UqydzniWeQBQYeGkpykswerr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UaMEBRvYeQzVmGqzd2CHbgXcif11EvZ5GaQ5WXpaV6CHdqP8GWW9WiT5gQBWq2HXSJEhEKcLW6g5jZmwwM7CAEd",
  "key1": "4wUXoDzyNyyDfgD81KT9ok39YrPrJtFfdTnuzHvDZQa3BvMGMPvxKgnA3nMGQTw1Afvkq9JFeuWgbJ6aQDJmgcnX",
  "key2": "2NZ4HbWMnRLDCnFbPMxtCnYqHXFT1Vwo29PeKaUPXufh3kNwLJUXo4itcybCHxAv7CXGs4ASigutTAdpoyZBaKPg",
  "key3": "5Gi3mEB1uzfbgCEPV6fHTUAbUDNLFWo4LrE7RgNm7djmu7Vqf5uCaacFzJgaRjcfggvscPZybU1FFVn56ha1P1iE",
  "key4": "3RqWAM2KLrXh6XypmASJXCih581eM66jXtKPE1AVMKtKDQLDSg69f9ULvPikE5fbLM2bv2ScCS6tA2VUTmHNiD9k",
  "key5": "2NLXeNM2NY47NxF74yxhhDgwm3z366PPk4kitUKGMgyys8yjL19hYGRRMZFzLgwnBQcrRYoHwkpPJE4E4H4bdE7G",
  "key6": "5F2ZhYTLRzEeajTsyVpMKiMJN7CCuAwVQydjdH9RvnFNn2b8AJ2L3Vo748JJj27VSXNv7mhcHh72opJB5wnvD4Lv",
  "key7": "5MqPHhS3zDdjfQevi3C1RxiYL4ADZRRzRqF8QLVBKEeVzMtbnuYfRoPRP2DJjUbfPmd6uwSN5SQcGCuEFd7quh9b",
  "key8": "3BgtL2ko6ZwUEq8F7jyC3dPGvEuw5hs3d4R2hiUabbfaCzSwoM1q8aykaepsaRDZtnCpANuoWTnu8SUTBw4SToFN",
  "key9": "3WGF4DdTXancausG5jGcHvtSiu2pUxCiqCEB4i14osod5n2GDSqsfVYX8MMVw7vRrDx6cJ8QdUzYDYeXYUYHKWQo",
  "key10": "5Di1CDQudCve7XGTVFSVHLscJAd5Q5fuPbTYZLBn97QZwMAYoDFSEXMy6WNwmcWc2vKULqtMy8oLZF57rMRdKK2j",
  "key11": "2P4HSNgYv9PdbTu2yncB4ELf7tefSSNLmpNaJcS3NJ1V5NDd8dQcZfbqXay27VAaafAnse2zZ2Hh4CG2b4d1zwhD",
  "key12": "HgAYgMmQRsem6kftA2trZuL6ML8AqF456dNewMMcM9mftp878i68T3MFcW3zsaGczT7bCwt5bnUfqgy6GNzjDQK",
  "key13": "3izfuXH3MAP2ixPo2LPpMhmNW7vejJZ2QzkEREGqtonioiyWznJKSoGp9peU34XasvNYaXATEtgRsGiAfd4QQYwg",
  "key14": "54GqSG5GtwbBS1aHvMkdQ8RG4Nnhm1sPxuBhfzKw3frGy8V1nsQhxhtCeBtbDcnLonk1jSM5hSDHg1NrHCLdqeDb",
  "key15": "2oZktQhcxGjiWMd6haRWTMxwtmjVNmZaxvtcGkqgyL1BLjsiVvHXTscjgCsBXiB5ejnAEeoqmRikwWfeg5KSsFFq",
  "key16": "4L1NtDfrzU6jWAN6rsQjzhrBnVJd3LopLdh1QiEXeQNhMgXGf4aVywHQEWP6jg9p3ciHqdfHT7B9WJvhSWx65j8",
  "key17": "3rF8fXdBi6xKqbKQ7RPA9Ksu6a95MhA3vAHXPpe6VoiCNUL4dRBPuAS81sNPwTVrLNwgRGoBKqL84TTgqbVBtbGS",
  "key18": "2FLdfbJrXLBg2h7Exkh7CQeq87PBHe8xCo8n2Lwb6Ynqx7rCmNuyAHxLLp8as7KkWdD9BnJXh9s5rDPtuxTfT93m",
  "key19": "31dRp9FYmtCpddx2aMauNC6JVWP5Kxmib5MRKsoZLZUT1vTcbzUtYk8bsnVDuouvL8AJddfQo32k76vRtEYbP8TY",
  "key20": "5LLrW7d7VQv5tnMVxtjGRgMTBsRbooLdr5TQE46euMyu7inquAUFTjLdYJjHqNeuw6bcEfRaEN2VDVFJaaA1vKFu",
  "key21": "3txiBtRfyQfVpQ3BNprdzvcMbVjM4XAs9YwgA8Qw1FXbepaiwbh6qmsSfQj1fV8QPEdQM9dx93VUzpRUTHPY8872",
  "key22": "4SCBo397hx8ndJpEuLfTec7w5F5UXY8y6sULdpunjnUAueZDrQdGnzM7b42mYocYKhQqpBqaJnaVHJUQrFAzob9j",
  "key23": "2ggFn63GcTWCoq3fm5rZ8sspb4nYDwbP8eu6iUn6xc6rZQY8GPnWVehYXv3RYHd678a9LbJ2VWvmVLEh3sBegNDM",
  "key24": "47gH7pTaKeca6oHpgVXjk25GBHvczpsFPpFKCv7vMAjJua1ASd1DxouDNqtb5rB99v6uTbEsaFzrP33nFof1Wp8J",
  "key25": "5fQ35DqdoKAM71xaP6Feg5X5ihUDENMaDFhCJykUYwsFXyKi3oM5ctaXhaLg6CR2f9Qxk4AK9QKz9Wak4PBvsppM",
  "key26": "3BCD9Uk6ecwpf26UiabS3PTh9cpa1SuNdy5LXCWrXL2yRFBiUT3FsmFqxQNK1qGQW63t6VKHLk6rmD8dXzt4T8KV",
  "key27": "5ZAbHvXS8TLKQQhqeVMY89txeWWo47oQGS5CpFgBj1DYAo5n8Ukkbv9eYj3yxxgCRrXh3FZ8kwwsxFe9dT87pKCt",
  "key28": "2qP9JXHg3arBvMt1xsx6BKwVb6oUekupsT47QJfRXdQaxPkUbGYavwyNS7sfbJLUadw5xihj9LXtkkbD9XG8Bq3N",
  "key29": "4W2LGnVxNUjBfVdvyQmYUvEtJuMsFtLawuFZwn5ZcDgC6ac1AeTPkVYJXnv2cpPJf6AiGWrqNh1hy5QeiRCPYYpp",
  "key30": "2T8EP7ZTMbeGZTetuxDnkVznJn41tefAuJudtkwVnFjXNFNwXpzbmBV69HoPkCF5mpv5wRe87aPcbWFUAGzKQ1Fq",
  "key31": "5yoFN3iGdWiWwoqp94oXMSZgjP9Y36zxqQTnzfhy9iaVm56d3fLxRG8HH6BeYTNaP4eMQZZkQyw8yuuK2GFa7HNz",
  "key32": "TwC8GLWUXbrsYfekkeaxDxZYgpjWz5odHY5kcCUNt6Kq7dQk3S7XmFNhGo18mQdUFv5bt1pSFxu5SHUCPf6SPfk",
  "key33": "43LDEvWCWJepapphA35MGYgLHFqFF8mEs3HhfFtBJhmdSJffBrdbromuDQZfQ4xGsEkb8uEAy4ZrDNDp4Va5wVMA",
  "key34": "5KvNZK29fXhccESReGRsjm8JMiGp6Pcbe5ed7ySHNntQfjMg6RFWS6RAAaosZVonAnuq4rdCHfRSmzTPwkTL6hsN",
  "key35": "zUMUz4ZL9L9p4jZvcXf6SnsSMHWGSvjgE6RbsbLcaQzabkpG2yueeAzUQJATsuZJf7c2p85aXENRngQKLeMXUjw",
  "key36": "2a4bhKTPLhtJgLsfzKx7gcEwZDxtm21yaV11k1DzckncAjqUWXFXWjniZReCzm4ZY9PyphQ5S4pngyvsU3GzBpuq",
  "key37": "2pRv4PjkNJaPhk26pxa58Z3s6bSngZtTFxTwX1FQHvkL8Py4dLUD86fhPUkn8nwYx5Xz92rwThotLcj85rTuwwF2",
  "key38": "34LE9uYCUBsmuPfqHCLQPhjipHLFvrKaZEPsFkNQww4mcjqzRgdyJvWNtn7PRyYjPf8r62g2H6osNx9Sz7o5hu5D",
  "key39": "67F5jPSLrpKYeanPR4qMqNNLVSz79cAcUssFhBGigsCRerMkYSYx3PxnZRaobr32DMhcZP28NSenKEAxNZje3Vrm",
  "key40": "29DVVEdM4W1zxGRBryp5PxjQZLogL7LiGjw6Kkc8wrAKo2enCMUCFdatvBHDbYoGnoEh6RmKN9xXQK8iTJpfTsnG"
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
