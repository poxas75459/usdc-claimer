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
    "9DPF5AX6NgKF2psQ4dUSfP3pNopjcJakTNjtgbgsTMFS8R4ooSY8Vw6XKXKYAwkNFigKZTnRR1CG3JSCGmjx66J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a566Q3To1uPfR4BGY4ybKxuyW2gNqoQeWF8cXGEUC2BkYp8bq5AqMhpr2opTVJ8h6wdmYRK5Ra53qAyJ4YC7jbu",
  "key1": "287PcjwdxEvthwVRJEhtdWvpHsDhQcuTJGJ4YTGDkXznuS48RAH8UKSc8NznNm1bPYVCq4ZcgNC4L159uQEa6V5r",
  "key2": "58vxsCq9zWfSYTkPthDBAhtVjQ6LT8Puq5weymhA8CdSY6Xb69LYxaKRSHBvjoUyVVjgCAz6LrUBZN5qfmvTKnLZ",
  "key3": "3iHEoWvZYugvTMf2rgG7F4ZV4xGB72QGXnZWxJ8e61hQ9uNUs4BJ7vCZdHkDAhEWP2ttsUcPpheuL3EU7nwEWNFW",
  "key4": "5YNTKhKQwtcdGnZYSapumMAXiPsbMGTsKz55VpvuNxhUptSFY95LYE7jhsyEtQm3MgLKVeKLj5E9mR1aZgv5GQeG",
  "key5": "5sJY4JkRrotJttTFEVKP54XXfxhneUpyQTib41GS8VmQH8BCaKwrssoGCC7BNTEzK5N6NhZ2jEJBNcFkmWtLSSCn",
  "key6": "5g72jgHGMqX7fi8NqZb13sQR3cdNmytLQj4gyye6Woj5XwSfevrzsMMYMM7zMjzEqSibAryansD9Chth2D12DSg7",
  "key7": "51ziEWSJB6tVL3kH6xCzBsFvWzf7ERgoKndj3MdJYBAPJM59VzFRJ4d3iSUkxLWzwvua1DoRatTLZioW447stgrh",
  "key8": "EftsyGptNKigiJ95uvgDsETKVVVSNmMSjW8QJuNNeYqy8oEfe37ohSkf8DmxL9S3twWM5KFDhL8Fm9sWbLjKBbh",
  "key9": "5k1mge5Tq1n3CgoJj3wuWkANJSwWpKVwcajLW1bv9TPum4uqAR6SRRbUJ6jgfrRqMLmE3gLUjUX4oSkDtnwZhwyw",
  "key10": "pw7MiSCz9LzDLV4ZriQJRSxJMz6qGULfJG6LkPq5xdHqLg5LSWN1CJNMeRuJ4D9u7AwmJrFA2iCmHwU7YWMgGU9",
  "key11": "2QVRAtrhqH5EwXpkPkVd2PK4oNxUAABdaQzgetKTJwW1oMHzYF7jiZRJ8nG5ceZQHgBWt482cgVW8C89Md4LySn1",
  "key12": "4pdvjkVtWKw1irUtKBBJyUvQGdGANBrMeRsnZMZv6zPZgABAoQd66tCbJf25GRtHppXUHHxpa7qyzD2s2ArNZodT",
  "key13": "4FvXxLgZmhP5D3bvcFwJytDVKoUqk6hgSiBaknuWyJyBuJ9YqRghP5oeAskRJfhvc7Aik4FQ3HW8ZJMnkTvd6uZF",
  "key14": "4dVEfZfQaqQKtGMi1wq9687NRo2grsqLE3jkrjDHyM8KSPFtVHs6LYio11agsqN9vAuB6MPu6EBGqnbHZH2opcmV",
  "key15": "s4NAj2hfi5pXt1Vu4K2Fi1GwsJ6NhngSxKbuyyrxGTzAbN5SuNuyaRiLtbcNqyqjt5DwYmsg4Wftvr6G57aSyig",
  "key16": "2dwk5nTFZ32zXyVrBerFLUoyp1tkUpqA8Y2kqbVPP1WdynbcTGxxSPET9omWC7SpnvDhM5WjYBK9G9q8TSb3GDAh",
  "key17": "4SwAD1KR62ctZhTfHDU1WNANQrg6q1YP6LJevrUd63KDvut7UFBmPJreFt47LNgyziwnABt281REfUceUTiN3kCe",
  "key18": "5HCBFdNBqu9fxF9JzeGsmorS4bcDAPyhCudyH1DLvXF55xyzfV9Rs9Ec6FmvffzMHAZgPJiJwj2iJCuw3jhCKCaP",
  "key19": "5u7KT4UMRT6hyWv35e6ydJKnKJTWSV5TnZMNXd5oLebcTD9w7ned6z1SKgM9HoQsewrCpyo3pA5Fn5SUHyg6UWcB",
  "key20": "5WHJj9ccuggZwztuLBTSrvxSxCfWNgUCj3DvHScRskbG3jKypihydPdUtC8VB4fkuLXdL5exejCr7PDRDxfg22Cd",
  "key21": "2ksJqjNgBfmgPXCZUPJJs8XZtRsjCuFKeAppKKxD2WiEiMU6rY8C4DmUQc76PsBtEWPPAnTKauV2mYGdiumQ5Pt3",
  "key22": "4UHuaANsahxm4RfiYvMLWmFzQd2Tfd7GNQZFgz9dwMnfixaYMNdny4XV9KqpSMyZiH33UPjg5ofGbXWvssFoJEaL",
  "key23": "2EMgBPG9B9ppykWzjBoBXFV6YhR4v8UAaMrhbVB6FKAbRnD1NqwYji9X4ZSv1DguodaubCUeiYahevXRzpWS2S8",
  "key24": "9zyn5xucBTX6wCLj8M5Z6tUQB66Y55zfxwUzf6v9YRjB7FcZaCgEifkLtqiau4NhuzusiqHEjQXLnmpVbaZdevj",
  "key25": "4AScX7Huy8AFw1eGnqNXvT3g6ZnpYTmCjt6NJdL9FxP5u9tGPLA9MPD1QYWXQtapynw6KkhAHcxF5KjWTtV2325C",
  "key26": "57ourPxZNhX9sLoRqa2MN12oDpEStRTDs2dbEc29o8nAGhFvXUjEjKEM2G2FgjcYwntuS71bmWwVeGsH8h8xNAUB",
  "key27": "3gf9Ue6yzdRXzb4QoYEfsVoDpa1WB4QYMzwjdnv5GFJzPHSZeV3ZxFX4azyGNEkAGzxBLsE8VWbnyCpy5wNUha4T",
  "key28": "DiXV35JXDjBEHCWPrTmYxM9TxyjJrZkazEkviEX2X8qzsgr9S7rct3UH5FWSxhbB9eFJXBZc7LjvZwANytZg5Lx",
  "key29": "5nxWekrZGHXPrJUBBoUXUGXtpxDxv44xggYcqALeinVMWiNkKUBgorC3Hwo236FfCiDfSyx9TAoiHpERk19hqMHo",
  "key30": "5vvPJwTq8Ti1N39feVYGAKZLihs4WwmtUW4x5SuJoYiwFM7fYASAPiYCMgwLRNtHiRKqnXB8bTVzXF2ZeSgXHUtL",
  "key31": "2FRf3o5XjUkcJcTcE4b2EX3MSiyzsYa6e6i4bgjq3t4FqdoXQhzPdfmFDaUW2y6sNQ2W9owJ4FfnZqQC9DPK2Wpi",
  "key32": "22RwBmv83yuN1Mwoo3vBji4FquVdQ7dkMKGCrntn31JiiDJMfuRFcE1Lw6PGcXFHXSYvtT9M1Bbib9RszfntxGQk",
  "key33": "SDZRFuoa4dLxQDX3EmNxFtCrFcTmBeRgRR5VQ4qHXcYXM38hkZ82CJJvyvX2LsvmhcotnJGw6LahTpdvqMLfZ5Y",
  "key34": "2qEbzF4W6BXvEmYKkgyjLKeSh1fzgP6YdtDzJ3y91wpwn6LDoXEQmUxFSqJJBWXw4A9u6SNiwGv57hHhrD7MwrRx",
  "key35": "u3FxReEDHKFWy3BvaAqiJYLdmnDDHHAgvCr22avVeALaXM9PHGDkhY7oqs1pc1iKUa7soentRWpMQx4akbSzeqq"
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
