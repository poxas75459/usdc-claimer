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
    "3Gv3nrxhVvniBQWN3yjkyFysny1MiUPjvwvvvWFVHtKq6rCcQrmy1dxExC1CtaJpPPDdZPgtS67eKiVwxJe6Hc1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rp1NVU8jeFRjeZMbQmoVvzptGih3vGcqcYcQUqjbVKfcztxEQbRBPoXGK7k32QEUik5rDiYE256o6Gmk7DGDLHB",
  "key1": "4fmzaSPmgt6kEjb9i6iTLi4pBBpuQ4KLMePRQHV2XpFjZ9soWYtn3WXE2ePQbVVViBZRHTJWE1ryhtR9EivixLHi",
  "key2": "4vw8t6yP1i5RKBuoX4qiEuLkDQjeLVYxW15wUCvN37Kz9iXN1ChXJ3zKCPWcdufXS9A5H4JyodPjn5fMsHUu6nxz",
  "key3": "66vZR4LhWbrb994t2HUjJrsug7Q3s6zwVMysaDNFT98QnWekQa49WPFDaVUseZdENdYJui8GkJ4a9FkBf1GEBvp8",
  "key4": "4CMUaTwVmBw4k6VEkX35tUgdUqgBVWKXtypnGx5TLHgEPugcxrQt6iQmcAb7ozRSG9MMiRrL5t82BKZRVfuKK3Vj",
  "key5": "2V5dGYBKZf5FkiesLSfnsUhzZnWXcPYfzJBe9yreuFxszyxUjkMpriiNSktnMH7s4SBt3jQPQJn3apQr4cfxWv3H",
  "key6": "3QGGuiRYuKVjS2YkASNLzNZPdrQ8qGSonNRLuuCajznaXxMFnkmAF7Bjj8rR91bfZ3y4qmuBs8z9b41WrYovWeQP",
  "key7": "Jr8d56mijiZeQBbzDxCiCaKwPmaLsx2AXtptBi3wBJB2CQqpp9Bm6CmnhUMuUez2G3a7MmACA1cfUFmTeMkqeMn",
  "key8": "VwTidfJFj8wS3M2YVwPkf3oFBnfu7KzNL11JPu7Snnm9UHXQtabQ6M4A8Pf9RHmzCJQ3KhFxSHEPLZwvTzpw7a7",
  "key9": "5KoRYjxXCt3ie1YNnLxdomFvc92u9mNtaTeC69881LVioriLo84YwJ6e9oLpQxmuAuhyb8SqzjtFmB26b93xLcr6",
  "key10": "5vDP8v3t529LM9JL7pAyMpMJ8NUXPKjJDEa4kxEBxSpreE9Qqa5ALcghGy2tMLwvW2Jf2N3S1c5uAVBJpsbFsxbt",
  "key11": "5UGgcW1UebL67kCeE2sVxj697DiHWGtyNkGJDYi9ivybH27sho4QjC6JcHeM7SmKNgHyfqKvgaMhcQ3FcCvTWMUS",
  "key12": "3C5kWWmcyVFLKQQMiRVXRLX6GnDMHCcdCXLfRwaUM3vySTZL5TTc7nwHKoBR6rxxjkdA3aHpkUgK7bniCrc1tW1i",
  "key13": "3uFHmrgiDtTWYsfL9nqeVQ1aWbSNgED1SE272wm3vy1E3SwKjinJhyB7crjvkA1jG8zHMDZDGw2D2jr35XdSiXtw",
  "key14": "xjXijk7b5fZjdFNoHuSb23jisH8F6qSHb1R8D4Hkxr556qhgUW6buoUWCAfqYBKJHwU9QCLw31RFv9niiUtxxzo",
  "key15": "5kGc4dF2kbgf9bpezVdp1xPNN6B9NJNAnPwmAC4Z9y5pwyvbtWAMWzz92kJ8rkg3D9xefyCmWUqNFfYd7M6aTdDy",
  "key16": "3y6SMuvRkG46VqogRKUNy5P7bbw7LGc4N3z8XXNMsYYJe2AnEgpE9QFVXyRE6YmieA5GJ6ncxfSJVuFgVVbHgnzs",
  "key17": "4YJAEfKc8Z6XHAvzKP5ZCEgPRLUvwEj3Ncva7xNFcU2Phs83py1UoRtaB3KSCdJfMakkN6mDmzs35vsTU8QyDpwe",
  "key18": "2ji6shLEQUfQfr82XXt762Fns2DZSQpXy1TWHBBhLBvyozAyLHPMeXPB6kZq7xLvMfGyBrBRru7faPXgzveSbkn5",
  "key19": "3VHaBFNZaHSTa79Xp7rQV67mbgJBd3us46pYtNVepfwNf8TheCxXc5evmgWqetkkornq4LFwgPEDVf8o6acjfVTc",
  "key20": "5GAPFwMgLiLTUz6DQwADgVk2sZ319rRNZEoRD9JNxdGosQBJy2WKHtjvbSkiWGSAb4gynqL6sbiWj9yJ7xAXzCnZ",
  "key21": "5A7QPqCPB6RZLdLyqaYSUSViUaJtF1aF5gE5v4Hik2zDWu1Bj262KqZVev3PL8RvdPLHzWJVh7KBKoFnvRkbqwu7",
  "key22": "5u7Pjkjm3TnMM9w3MoMHGQC8oUMpFGiv1E9a9pgKAA2BG3QLjNGnLtQURbV2d4YwLcpuLXez9BMqioRD3LVuGPdn",
  "key23": "uRPycgDBo33Y1bMNDoiqg8WXc43oKqyetW2h9gneLj6WQfKvHTCHJF5nBi5rAawFun38EzBrxXcKwAxoD63rj5r",
  "key24": "468AY3VKcLkK3qeBXt7zkmkvbFBBa7DQJdzC6gktp4h7t5wuxZwMHMkHUWFSTS7YbGQtdN8QPn1W5spf34CBBAUk",
  "key25": "668LWEqqPXqbZZuuseseezN92TRkEUyvKbh63NTXDBkrWTLR8anHfywFz2mnpgwNQQxcRNsAFDp4LTWZrKp9dxLB",
  "key26": "3hnNjuso9K9Fi6NkQJpWqZfafscjz57va2yTJR6zRAYNeaXBUdoWbTv56fT5pJJ3MyYCqBPEAsVHgiCaDFHRdQP5",
  "key27": "bFKXpSUFHiH1aUAJni1z7e82byopV7Qw2uRdMV3i3W6BmQep4aT7g9BX9r18TFcyRCNQV1ZLUpFmzigctWmJjsf",
  "key28": "4xiSvjiV2gt1UMLNSr16FAyhFCspZG3SSViwxBPzMSG5Av3uzQBv2CusLAXqouqiDRYsS5Z98RkwoBZeBg9JcrgZ",
  "key29": "5Hr1pGm5McneUGF6jn6747gvpTbrsgtaLMUrD6kdf2KjWN8pppGuZkYCUfjvic7eaJteQ4dYhffPVYsEF3kBhMyP",
  "key30": "2LfQC4VQxXkYT7JoKYn1ZZZZKzYJNJmskVchCVErtwR74BZY1RaWJoPezUycpNWavU5PjbSrt3Ze2b2wyTmras2u",
  "key31": "4hCRb2TEsCcSVTYKeQ7PzowYiHbt5NqFUaq24zX6WZPXBnTRSbiqTQP2Wpj3tiS6VpkEGv6qycB7DiDisMQ4yPsQ",
  "key32": "3iqvebzVFyLQb1oQkaP41syzvJTfWqEPbN92VkpeakF8JXPE9nZgwNwXsJR33dbuZ5PUiRo7iXdMZj1Q9BBjit7w",
  "key33": "jxdzAVijpXoZcW8ZppbbeRN7e2RzhMNUhRvi9x2UZEhymeVhEGCcqcdbmD9d4FgXpkheUezLK4LbYc5nN4czgRB"
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
