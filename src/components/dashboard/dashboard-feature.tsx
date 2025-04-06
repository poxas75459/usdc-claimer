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
    "54A9YHAVnGaGHNx5nWHcXVgstswF8fEgnAsi2gbw2sEQf1w6eyHimzMBmGsYidYfHdbZMJZs8UZR1ynd6U5WbuAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JSNyX9CAzLi4JYQPpzMQg6gtoa3zM36VhcL1rvRHi5QpZWf42Ccy8fSyRzV9aako9n5pyh3cvxPwgBtyf5gBwHZ",
  "key1": "56MTx3U1MwXWUJmEpUSRemaEyXJjPZA4y46oQ5dJsbuZBSMy6185YWrXNCn1TH5nKfD15kVSLuqPQZQf1x3qytjZ",
  "key2": "2AHgoCgwYpSm6qUSc5ffooBmWRp5nXhmxr4DpkhbDzvw6nnL6LBmALqNnJR5aQdx1sGR3mP32v8WQpJHHFXJchda",
  "key3": "5DQTwZYHKSiyab4DcZtJnWjt1Lz2rmG2wX8fEKadowh2qzcx8JWd5hjktRsHK2TTkiKsGxQTvbKLfJc51m7TkW3W",
  "key4": "QSwyznkMCYfrKttrNwTSr4tw6FxTAJ3pAHtwm4x7tzQDUbLBoFsHihWqpKxmdWUG7aH63FLiPjuqFRiTYXaqqLz",
  "key5": "21CwFdCwd7swHzfzs6QR7qZ6tLUkKH56oAcZvuzMw24dqW1YNVneApZ9H3V4R2jjq7ywzHAt34GnuASa8HGqcQy8",
  "key6": "5RNCXqGmz2vAjhoJiJGmn5D58kXyirk9DiJqzRBDWAP7RYZYfxJmZsJUjkAyjvRrZ6CvVmmHsYCHBgszsaXoedi9",
  "key7": "5CnTiLktdqPss4gBV4i4REd2ajLsjCXU3C8dbQHvvr1BzMnw2ANuwXGdiRDNLYF73Zm8actMwTxqukz9BNoMi6ch",
  "key8": "5JuBBzZ7KPW9B8qDWZpMA3RVDffYV6pt5vjM5dPTUD5wZQbYeYjZU7oCvfrTBbRBDMgfhQzShfBLwSvqU7PVVhXS",
  "key9": "2tdjgSSjx3stbUMceD4T1XbLSGCCEMEUxn2bW6tSn9jaMLZF3ZgvpLjvNwGAsgTxju9fvL7qfhGyhgz6BrTydxkg",
  "key10": "2NCG7MRMnk6gDU6yi1xTPnhts9x9W76Q1rZ9hX6o4jj5jyGXAzAfh7ScqYDnwRJsKee7ZJd5RWpDpZ2Bdf8tWy3z",
  "key11": "sWqU7HvwyzJidYB9B4bsitUy1F27141DHswtKYqGxcuAXySBBiAouRojnoj9BCPGkgJGAa15mKAsrvihq93wwue",
  "key12": "2kcEsmzjUUPyEtad1n93AsqLxS4wC3pJ8YuTRWvgM9tQhatsQ3sXRFaccz6jafBxPzaFVVS3y1UkQ7cgX62pniF6",
  "key13": "2so4Em4Qd1gN3AX3tR8kdy8cxP9xWmZFyRRRVDw4LQwToxXT9MdXpFASKsg9WSbU2MTAiYBP5Q4ZrdWiSuCM5s9g",
  "key14": "3wGUKRzvPDc2wBbyw23oakHY7Sb1zidgNS1AAkEAQzb9MKSznZa9k2eeabCxi1DMNsSmzJUmYsszF3YvCuDhLAnA",
  "key15": "4gdTMGxfgZrTsfsKt8Gi4JXdiwLRGxC4EMfVWf4at2zF6UCSxn5R715XPVHXDpd596mPydBQgoTGsCUrgAUFDBMS",
  "key16": "wSjobq8Zoj2DcqFo3eJW9TwB4WX7tyfkvJoZZp2vnk7UK9XcmsJzYQiZWjSmsBbAXT9Ngxypjb9gupGpbzacGDU",
  "key17": "4pCnLh7DK5H6KuDZVTkEvKW4mecNS7fvEB38MVd8f7uCaiQyD577UjmGizg9k3RXXmDAqdiDUJP3CBpoVb9PzuWE",
  "key18": "5vhoGu1Hj4UDNzyykJt35JwueuGHjCHvMpKG4BwuCCcJ8Zp5xm6CGFRYRZQy1puQP1ezLm5rLnXwEpV2pJdKfG5M",
  "key19": "7189v5bDQLJjQrxmW3TDyVXCwWWdHJoBS7XeMdUP3M5ftXSkzkRYPYte9jpF32RwicocbsvEzo9fyyRX7VQZByP",
  "key20": "3t2iJ3LYj39LqorDad2DaEcvbspsdUXBFbeQMsapgtTTjENZgCbrEUsXCrH4BgPzcc37BkvBPgiHEnPMTecS2jLR",
  "key21": "ncyV8UVXqmtXiN14camk86a4YVgMuPhnuZFRgZAX7bss9gBQU7qF5reya5CKgme7BHC4Mek8t6q1wdm15mWcQHu",
  "key22": "2uM1u1SYbmFznhBXK9qWc5tswqwkfKURz85pktWiG8h9z2jxYHJYXYuSEPj9YWbaoGSo4wkR2wTynBpzGAc9uAJ6",
  "key23": "4hxv82JffPmFzafD7rDGy87S4o6toLYj341xkEUZMGozKW2VuczRP7rmNLjSDHPAhWnFbhgunuME6YKCfknyoUt7",
  "key24": "59kS9Rnzg4EHKaxoWs28B7nEnVJNfTPcgWE3dNj25S2mhwBjvqhDLEc2jhSnCsQBtam7bSskgcfL3v16FyG5VDQn",
  "key25": "62ATvEc44DWuLzXqMemGMMq5afm1TNVHgjNexRjPzNcttfPXUe9koY5nk8HJBY8hrSdZT3x8cG5JzBCteD5UugCC",
  "key26": "4ySAae1FXYcpaiEbJ1YPZ4hWAQrR3sTYVgJozjggJoVRFeNFsXTaVegftBBsUsibqoZdicYU2ePTxGXE2YvtsiHf",
  "key27": "h4LifAx6TF1j5VBUttwFX7Af6pvSJvB71yTejehiSk8RHzv2fGSdfWLAo3EcMsUjKbL9VfWTmMyzzWrgosZZ4bU",
  "key28": "35GG9FdLtbPGDCpHMkn2SbuHuxE5seywnvszaz7GUpiCUZgeGteZYo4HwQ82oAdekfTxFR4uMd8zHkwBsytw7UzG",
  "key29": "4eVRWTFcwSNCzsZCWYaZ5khuCAa1TZaNEkpnihqh5GTutgLG9mNgbhXRVSapqvQnr4tWcJy3zXBifsLvebMzHgEF",
  "key30": "s69NS6j5UpVTWnA4scr8aDYF6fFQocfkbGcyXeF3p8KnHRaNK5K4oDh9pAMeRsjALVeg7TtuzL2rJj2M5ps62hY",
  "key31": "hoUDEJApsWRwgmJudRD3nm6T9EfoPY6DXk2ZdbwUxftUPRhwkxDzJEygrTwFdZJGRLdh3aWp9uo97PCG7xn3msV",
  "key32": "2NhxkGMyNdh9rATyGCKs6TyC6SG69YsgwL8YRdczGZ6GfsdCCeQsLSQJuz2rQ1WRp4z8ptqFrzPjRYRKNexdsVkH"
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
