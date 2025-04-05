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
    "B27YDTP2oRMu8NhtvpFh2wuK4vJBZSWhXX8m6mm1QYJc2Dgr7tA2jvcU69KTXvwhF6w6Kot4QKGneWkwcpD2E5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HVn3PUQx1cKVKjedMdT7XvWYSKiRNJSxKX6ErcLRyZoFrDY5dDnZ8SHyENvyMSsTsvrjdrPfSF5WGBdvKUrvUEM",
  "key1": "Lq58RZmZ18362s54b7TV6MitQBmCurBk9WmxW2oyKP7WAWT1wNnxefs1MewGvHjjaD8tYjfgVqxHrGVZK96iz1N",
  "key2": "2h3ugVqj1s9hddbErER5as3JiaVheYhBVCkrxviPrfswtxena89NX7vJsr8HXDfE9VCz3hWYmKn2TmuUNvnNRmNn",
  "key3": "4VxRks5aAMs9J7BBg2DuLwpfNuSEJdCVNhj8DbmNsLkJkmvyDyVemvLPbYHiMthhQsNqKus3ruaSzaLhUD9jwfDN",
  "key4": "5CT5hR4pyRGWKoaHbPTdgNtqiqbLTiAT8ZiJcTVkmCpMALdEVdhVGBcbeKFeLJNQYHRHvAAi9wc9dxuLkYLHf4ue",
  "key5": "4htb5d2ab1QZpkddKhmD3sdLL2fW56DKgYMTXpQQbMEhV5f6Q6cE3GRwCtAhxigM34dk4nDMfS3Mk5UCWWp8kBmj",
  "key6": "5cduvrGWPmtrVkyb3eaKaGc2tLfqdpzfdS2i2c2ghAamvzAcwAkg8fL7U743DM3aZ8Gxnik8JSRKYQZZxr7r4GhU",
  "key7": "2fZiZ2FWxLvETaBaYNPgiCwqsGfLy2NZ42F9XvAJMSaNqtKJ9gYur9NRbx28sTEArvRQvaa1pSyW3suMyR7WyVy5",
  "key8": "3yjVWPexT3eAtARm3bXufBYVSWtkfAHCNaqRjou2jCDWEvMuUXdZbZMZZn6cyK9tWj19soV3tsZcioj6bmxCKnmv",
  "key9": "39VnEh5uaAXv26r7vM3SjgdwmuVVsqUn53oHSv47i7V7m9G9afRLFDZcF5kSKT18vbFzBt7LQjDpQ1piGgTQCvPy",
  "key10": "2vGKkctpDwjJfvC4bXhYWNx2YeRXsXaZynD8qvwMm2LWH2QyVneVckUH8b6ux3R7NMULBvES6HyhCEvcU89hjgUP",
  "key11": "46erKomHCARVigX4Q5vo2vJ9gJxPmRpv7FqCcybuLi96kGq6KFC4eUU9MndRnqusmkUW2a7u4A3E1V7ZDUbm8Gmc",
  "key12": "sxokwGpZHAwGxe4ptz3Pw9DTP4hcGJtunUxXicWjZE3JMW9DfNu4jRnryJYM2YpQjgF3JzLpD8DM4pKERAw4W8E",
  "key13": "3xANAhoeHLMBes1c1Wcq1HG7LZDwHybVUs5kUHTcTgYbRYHC9xp9XvhRVKFe9AejU2PyyDs2QXKtdnCXPe77Px2b",
  "key14": "23kwjsMWi1Bbhdc8cpz33VQfBRDtoANtq9fZpQ5qkm3NaoMSQHiHdHt3zDsTRkgRAeb1SnsGq6xSnakayS6bxdvk",
  "key15": "47TRQ81tPoU9aoMr3wZ1sfZeob3sZ78AEGAwiS4VGGBTnHNuMNfdZQxwY4xNopymz5Um7kFQHQkLAA9thKcEG9fY",
  "key16": "e3gFArSG6pjB4M3AJwEAgcc97nYRWqevn7QUe6H2h1ZkBQMcwXbTr8yatAoKcndjKmow4xcrUee8bmAJSHizi4s",
  "key17": "37A4TiaVfwS7MQi9zkJsFaMetMrY7HdTxj7gN5Hx6VXawfw8Kxty3BDB2zvdScHMUc5y51vRTLcQGrbs5oZw24u",
  "key18": "aVEusaBJmnz5TbyhnduG573E4FhQcDPSZnwd8thYhRX7dk4VUhRxfw8NhcXgtTjmpQVyqJRoPuniwSmNFkKcPP4",
  "key19": "Z33ZiU91LUUHpDFqu3kwGwm2apALtYeP2ZCL8wE4wi3yr7ypwYUkKkj5RVgVL9FxTT3aCLbmVa7esWP7jfXnMrR",
  "key20": "5pppEpNkPiuawsCiMK4zPuzBPm3YkE5Co57MFz8z3L4UeowXRwXfSwCsq7a4veefagvnFQP8zzzxcLerV5TkYFrD",
  "key21": "2wJhEneGk5X87zPbxc7Ri18o7z2DYqVoQNJMHR5U3LLfdU52Wxaiy8YWLK7QXXjWniCg4eQeZupdmMTqF693N7Bo",
  "key22": "2BVzcBWs9NmxFHBko5ZzCmdSNcwAtfXUZPBiyp3czGqoQKiktvPYB7jGMk4jHq8jZjJ4GezYus5ZuS3KfdczBLkU",
  "key23": "5t9HVcayS938HGsgjCQYtfCk5GfFFCHajrB2LZWmB6XNMpfihPFsXRFDgWVtZ4S7GPicxrgK9NeXw6LoHcx37ztb",
  "key24": "388q5xwX7KRBMHW5fqBK9V2zh2hsTgKgnqDz19Xc9JuZgbP5ho9BikgzJA6PUjoQgKZHjPv35r1XQxjWtfvpva7U",
  "key25": "2kXMt6BBHsxb6iJ5Ma9J7WoVeTuThDejQxszeoJcpBnJBy5H4gBMtvsRGSJCWb7xmqjgw8qeZNqFCLjW2dotDz1j",
  "key26": "3M1BFfrUpVmwhZgtVbTQV72Kj7qGj71DHrX8AiE62cYX5mhcb7fJvagZooQcLi7yNrNhYv9X73spRsicQAMPyKiQ",
  "key27": "NWpj5T8h6R68MEoFND5HR7GUHpWLkSQLy1zm22AVUBNmNiziVr12pUxkCYUZZoKhu1TZivvmy5q9zEskPAEUKB8",
  "key28": "5P4VcYM6zrTaFgSMZ1JK9G5kgDQnSniUEDn1nMCpUUwy8ftTyhRHLoGD1bqAR6yCPLpvhrzU9DF1C9AppSpcSzGB",
  "key29": "3H7TZdp9Bb2eSopEXTwj8RLwNW8xAWA5dMW3yVmAiwMaCMMkhVkcpj6qQJn87EqYvYzBkjPy2PoQdsdK9vfhZbFF",
  "key30": "6tWiJM1x5Avw2ARtRcXuin5zUifAkin8PA9hegocDVj3ELVH2f6CoGkK3hqGkRZXCAbn9AgPeeLFMCCmu4ss7bC",
  "key31": "PDc11ezbC6rcoK9knejGjBfFMoGEQMf8CHACWDXGLry2uJqjyw7Ej2jkHnP49LojweULgYj2HNiTTGYVNPouziz",
  "key32": "PMLjxogRZaoh2pcnD2s43Xn5L5eJYEGY7TssgpCiuqnReTmTMrMQp2oSfSQpL27XtNGwysqn2ZS75nQxP5JB4Zg",
  "key33": "4ATYSL2SP6sJgWNR253GnVWsuSMBHBLcaKNYezbXFB9aqkzgqP1fXcxDGNJt2Q6VbMjWjqdbyzFAZipHRNeFCHUk",
  "key34": "5nikGhD4uEhzyJ9VRNPyyo5ZFRx8pkT6AeL9EFpDgKQ5fT4HJLGqcGp9HhA844qdebVc9fNqstwnFJbpF5ATHaro",
  "key35": "66H6FSSmsFDVWk2ame2vRmt24NxqZiPvuNKQk7NNuUh95ZrSB9t12m1AZZHU3VgcZZric7cpjepJuJz52sa8jAby",
  "key36": "2QtvQTAWgwpZ8UU6TcexczFRRYqyZxumMCmtnXsm1FxT3byVeR1tXsPiF8RnB2qy2uY7y5VPUqyJJWwVbJTreYsm",
  "key37": "7xFnZUSestpAYhRm1HHvpCsD8dBMnBPEJqAu9ivLkd3sdk53EW2PjCNkcPsJB36QJccFTQYeCSbr2NxrxmtYKRw"
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
