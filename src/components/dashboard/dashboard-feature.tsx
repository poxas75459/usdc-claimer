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
    "pVJat5pQQ43EJ468ThNJjcjw89wPq7mvRcUc9vUskPmVBbK7zNVKCFS3DwbnVgtHMEbtRptJjEq6hW52FGBLcCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TTyv35fzTPk21h64We9fRk7695KR4FRxgEMKiZm6oWyJCq2YgHU4hViWqmUmY3RioxG4U7rjbTTetju9LYowmLh",
  "key1": "2qWzn4JfFRwHmzwsmG9RMb5uypCZ1NgFLYELTZaMkDY2PYFu5yiGcnxY6TtHVE4xjpn3ziFguPDtq5YGk6ofYoVG",
  "key2": "RHrcC3Esxv1WaBHu7qsES6VFydV61Sh3JqSbx67YL7eByrywLMZmmGpxgdtZgWaNboueqR9TUvQkQ8gDGmQbRNr",
  "key3": "qAA7c1qorSXtsNt8RMBc8s1qh9jRrH7zyVneBtv6Qax8RQ1TrJcCiTJj9hWuaKFyA4Mbi9MVk7udjAShyhcZ9Py",
  "key4": "4tSS5ifx4oPH7mTEXvLBmmqrzy7qYnH7SvzcQziQLaKYTeEVCJb1kh9kt5mENKK7r4uZzfV4dS42NC5kiNJbr1iU",
  "key5": "3G8uumDwGkW1MxmJ2HemqjsxwXo9fbaPU4FsHcYqmz223JnzXQnJAvgGUfFCcLkWyxRK462rFHqTeC3tQKZVCy6Q",
  "key6": "4nQzeQ7KGJBGxDdFSmwVirQrqwnDDK1bGBVhdmtX8ZyTnWkosKr9myFjqrGnxYrsSvNHp62GZ6kRkJDC6JZt9Ztq",
  "key7": "3kwgqLurXimqbg3SrVxe2dwrGRcDYFsEjdKU3Ae8wPHBBmkNrkuyQCc7SH6msfNnrkwxJyK8EvhxrWAJKY8XNwfg",
  "key8": "2ZvRESCuYdH9WrEMZiCkpxhtjvmmXj9vpn7RjyTm5ETCLNxVCdcaWYHSNYBa1HBnnU12AjwYUThPRuLSdqhx1wMQ",
  "key9": "2fcFYMJfURFRZi5LumtgMUDrZZiwyWN9EkFAiaNb9DbnTWSGXDBHeR5KwfofAsQ4VXBeAjyn2ujNBcSBB23xwv8J",
  "key10": "zMjFNKp8rEgHQ8kyMkTgYj8vLmGKogBG7XRgL5xQpLM32gRFEMJ6wir7iyM3kQLmt25z5TMAfLkTXDgFRG9s2xc",
  "key11": "5feofMaYntBJQ5FNC4tvxDUq115QxJL2Rm6TAAabdGtTsNeSRbBHHS27usmGDBMZAVMNk5jgM3mUJbKprBSVnsQ7",
  "key12": "3C7Tbxrj1B5jGSd6zay5isNqxcmY5DYZVSRjHK1nyoLErAbRNKrQGJ43SLyjDCMmP3n5nMYsf7VJwwWKuGpAtZPU",
  "key13": "qgNojFFA78SghsWMKVztSyV8C51VB62LqqVnAnFWHeuBbS17fYf5c7cHPFdVuTmodFhgAkvz4bayzEv1ZyD48dM",
  "key14": "RinmVVfMMwQWaTaUVxA6hgiVrmJWh62jbehzMgE1mNWwgV9VWaaEizADPNSVJL419WVGbv9kUXTVsYfDqtRVhP6",
  "key15": "2JQFMkp82ZnW8ZZCWc9usYtsd4k1mLTFgsGa58XpJ3CcGNfFMVSHpwLMmeG3i8jW78aZzxYrPhUxgUxwjHzmR9UC",
  "key16": "5USUThRUgeeaU6hPXaVrcQUzgbvghVqYiA9oQNXshpLu4KTFp18J2rjVWenXqkUNKeHN4YJxywsh9XaLis1yqhND",
  "key17": "H2qkJokTLJevbv3oJtU6XSYJ2AyXM1B5AykC1t7MPVxy3YKG88rvv3Q5BZYidMrZH2dptBXDW8rTygmY7ir8rNs",
  "key18": "3HGtLKx6A1ZHob7WxfmFX312sjLppvf8hmyLLXJoYrK3zwbx7fVTDHKkVpUWz4pi5tefbzJdvUbQE9CQxqee2eVG",
  "key19": "49Bk65PjpjTYfY3BMiM5G2YfRZx7KZnnZKG8nsWsQCREqj2bs1jpY1CoseW8UkzH8wuJcK5DVRQzqfXnvSYYD1XK",
  "key20": "4ma6Skz1qHLwB7gd9NHN1M8RzZptqWhhLFEWftneGAJv7iMNHw1mHPv3uEUxtxtJApgJycatz7f8UvJGrDLS16G5",
  "key21": "5EaFd5Kqiib2GQR65qg6uzBVZUnc6Y9ZvUcB9fZVPc6rcNAzdwnucftbNkqrRucriQrvroVCRWvU1cyBPdjdN8HU",
  "key22": "5WWmjJAmfDjsV5GtA2BtgYyLi7SrN1T3tsGDZwG639WPAwovbJi9rAeK3gHXREHE5eNA5LT2DbcZeV2PHNitAeU4",
  "key23": "2SKUBarNCrHUnD6S92Fyezq9SiaPXU2KygbWg3DVLGnbdVXGxXPfszZsJnksyYa1zz7N8EmxJ17MHLwP8FfFwRZA",
  "key24": "24NAWz87G2VDhs2GpEbqsddx8BJ3dm1uofnRDRr6ZqV9DV37YHffuQwrEqq5QBGpVTZxr7Vg1QjEzTvSiagW8vhQ",
  "key25": "ZWN8WKyB6h7gudMXMSu9nVsWCzyDYFUQDxnMP9tQxg9AKcbSiiLQ1mqRFDHLWddBs2TbuY52oh9BFZUmCbkPsXy",
  "key26": "WMvjwGnnKLCknCGkwGe6MTDtEd59zWfs7cXPgaE29dfRpxqLoJgKPc6xwXGcUXmSDwSPvXxp2rmZkEx8o4iCL72",
  "key27": "5qCB7S2UGZH6isd9crHdp9P9kWgjg9cwnGQbkfsvRiseGcWrkVc17YvHVG6UBfcxtiiQahXCfewUWgLxA5omHAar",
  "key28": "iQjD6TwfLvDjg51ZBtvoKBVwGyebkB7cVaaZveX42JFZetSsdZsJM9uuT8LL1imyNKMxwkfyytzga7xNrBooDie",
  "key29": "3t5ds9LQdJWdj72JZk44NX1cuUSny3xd3WAbDjtT5tP2vdDuN2JoCYmLx68DdASKM7uzHqWcQVAbiwwtooCpCaK8",
  "key30": "4RKGtNpDGo5WUjZ951m8vdN1AoG5fNYS4qXUbyT2W5b2i8omk7q1WFhZzefHNBNW5E1W8Rf9dmdBiFPcbh1F4kF8",
  "key31": "4tCKivgU7iJqLDec2hNeDZ7HFPxL8mri1F1H1ngrpcrKQFRP3r73DpUXLRnNJahhLYdS9iKta1KQdt2cAmyhsnFb",
  "key32": "3GMmeaNcZKWBU8wE2xjStq6H2WYJy566ZW1p9u8MLbYfG7fKwE8LQfRQxd4CcUbznxhjDdACfBHy2XZSrXwqvU5c"
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
