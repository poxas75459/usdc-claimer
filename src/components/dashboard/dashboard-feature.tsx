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
    "4Y2GpfUWbPZBsPoEca2c8fgnX6qiydNdiMJ8Nsz9r6gahWzzAj4HEKVJDxABZocJnoNdJ3sEohgReDzRjjngua3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HXhgsDcaQ4xHiHGTH2poUfYmf8GmnqunuvzkzC6LtrRG6RhWCwk8bHDyjYPSRmGm3BX3K6wEBC9c8bAqwwND3VE",
  "key1": "2Jxh8ZkKJ4eh86S5Ybg1yRKKZwcxXLM2PSKBJAknKRHPvRbhWr4KCggKRyKVrmrtrRw2CKcou4yryDANeHKSvodH",
  "key2": "3n2eggAsQFkRtAQpZGW7TUX1Ei4Fe7ML3VK5AqdEgWhRxUoFQ4Zrg9EjtCcAgoJtDesenBAhCLq8Dq1A5FvrdjtW",
  "key3": "4eiadCRvBhb8WYyyf2PW59PvVHmh8e1tTe8HHHTsuZQH1kRxe2DjcV6QpFa3yGDppHrpX6zdpSzUf7UTJrGfeePf",
  "key4": "28C6d8wirag2eMKJZQceRUUn2ca8iNkTTMV7ws3DzTcKpPwAyUyx36i3K7DjTN4qV21rRMr8tNTSvKavVNqGUSZq",
  "key5": "5YggdkF8LbwR9c1yMTctt5Gc8cTsUaPAQivvoGPUuxY4iFJ1nVi2uXj6GmotJ2XreCFJE5gitvfAe3FjTw7qhc7P",
  "key6": "5nWm7JPo18F2ELnfYUe7ihuxHfBiULxgq9inCy1ppgr7UKHGNxk3yPRtgZTp3XDxNtS5Wrdf1wzCWScptvXcNGGb",
  "key7": "24Aafb2j2fthtJQtu4M6U3kXwxGSjWi9No34aAxdXpt69z9yidvTqQuBh4VReMxaSLBFw16c1r2zM1mBXkxBeVkK",
  "key8": "3UYFpn4EdfRb325Hi4WNvwWurGmxzgTVorH2kM9HYbMt8JTqvczy874WB74CGn6J5tgHaNdbt42Hh4HxnHfnnbb4",
  "key9": "3EnhxyhwNRKL1JStx6em4CtPcuxGiXVHVvZLKbuQGGDpBmynLoWkcVccNGRwMCuSq4huUJ4kGejftWhkBTg5qRUa",
  "key10": "5qNpJAascj3nSUiep3kCRG8BoHwGJixLetsbRQNTwLKrwM3tJa7cuzwWPCcK6GjsbFCNjdjJnA2dkDKN4RbART6U",
  "key11": "64nYoSVAgL1hdo5yWmLKuPWvbucRD1g7c8cjipM6akkoPj31xFmctHJDyys5mx3hrYeLtUKGcV91kMrzjmoXrcvY",
  "key12": "5WBEBpCr3vvxKS6KfKSNJjbgqPNTUCHgscKeXiJ4ZxMsN3U7iuX7B6fvavMAWxDjBTjD9fmQnUoLE8qSCGGfwdam",
  "key13": "5LAkp28pkJWrcVX2jmocJhbaXTAZoZ8NGuGQMFRhmMwke4nMRyqWhe9mDgpKYaGwK5GwrdxUyBB2XuZRtxZjtGn",
  "key14": "4baqDJAE25JTCK8kn9ZjXMpmcKmq3Q7BaGme1p3CZ2S5HBBCoSijTo6e36RpWU14sxmzDXXMXbx5txtBXMsG1eS",
  "key15": "2jkmagSud6r9PEKSbbAiQ3AFdUikf53XTCbwo3j93rXvuD2UJmWxAFLTPV413mPo385RUjxa322rTAGikKrErNFY",
  "key16": "i9fuf9Pd476eK8BTRijXD5FYVqPScmf3Z49eBftZXg5a9tiLqgua2TC6QxKDqTwrSeB2HkzavtWjRLj7pWZCBv9",
  "key17": "5sJ7RcNRAu6MpBTausokqXbeNEnRoyYmCcrdXBWBav8VtCg6s8ruuzPkmi7va8WuaPW14EjS9CBzEydzvmK4Fv8D",
  "key18": "FSR6M8pD5uneT1BMK7kJAf6dQhMVsKiNq3ka456bL8H3mGA7iQFZjVbWSVzc5Cd3GRAyqy11e5N8XQETmqd5gTD",
  "key19": "jTKLEfC8ju2xc9h4iNa1SoT4Kvdbr5DnioX7f1jc39x9b2JYKoBSusEgeS5csiQYpuaCZerb5dT1K6AXoWqkfWQ",
  "key20": "5gQp5mPejH18dkxsjcC5FKNnV6LKupkHZZcFooiACf9rpi4swJ18WoH6KmbSBdGEC1LqVhRaL92cgzmC5Zq4TzUr",
  "key21": "4R6g2oeFLxBd1Cz8qhnKJD3pZy4w7xE58F4atgYnBjXEZnBK9Fy8Cn9io4QGw9zutM7vKecnrArjHR7U97SNntX8",
  "key22": "2D9uDMMAuocrKnWhGrJCkQiSKaKJ1uvm1bvy7phQUbYZrju65hStRxiGLUEUNu8Q8A6AgESjkL9A31EECnFh5kCz",
  "key23": "3y9c6wJ6DsJ4nW4RtXK9hP1KbSRMRaTB3mEBBtZoev4RcvcgDFYWYQxuzWPHscufNJTj9yp5hJ46Re7Rj9BEov3n",
  "key24": "4gsmoBqNwKn85VUh86c5bXk1XTp8Gadb4E2jyHrpCgtH4nXCDJceqaPcqqJH6zVTwhBkHyrcpTZWwWtnp9xb8SCH"
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
