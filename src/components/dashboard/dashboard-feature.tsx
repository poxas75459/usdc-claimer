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
    "28VKaZ1RckqqC6VkyDM8Rj2nsgfXjybZEyXK21vf56GCjorhBj89Ne1itHTZV8CD63JTNzRBg3jzNwZXNtYCeWuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42g8HLXyUYPRbf2iMxj3qLDiHc7Gr8N9TiujDidmt8cxmZzeLeF57fsaLFSawboxanFP8djXrs2Z3hWufRD41w78",
  "key1": "4KU6UifM9AcWtqZhCUPgdU7qG2p7PB1WFUn4KjRondEqU5Tc21Tnwjkb91EC3uNVrEcCQzDtS3PboXKbW1moqZVF",
  "key2": "3tEt9YBnnaG7WiGgtBNyj6GrHuQEKmhXe6uFfDMCYQXjxzmQgTZzsDqcrk6orV5pgH8Q3Rn72Qydp8wTmNmezmGb",
  "key3": "9dtQDgiyQHZ354V4oSP9kB8phtadiYbtkUCeCFpY7srtQe1EQJ8c1AdTCokERqHeYhvTWdmUj8JEwAphN4Xetx8",
  "key4": "2yAJYM4h3ZQkng1xbWPqP3H9bo5g9ZHrKDvzhJxjr5Y5bkPgfBkTzZpg41xAAg3oXsYJAtyqRiFCh9A7ZELziRT",
  "key5": "4ozL2Bag1AETskmb5FE6UDUfMuqN8TL5A9ewgGaJVcFXAPNsh2bgn7z9iEPzUGADXXe5KYQYTRkJikt3YQ5XgacT",
  "key6": "5Z7CTjVJYzE8b7EAtFfocnrt2LAEdUwioNb6uX4a7ibKfuEp5UaRRLEXNcYYRBVyhtgN3eQyjoLQgGGeaU1ukYYn",
  "key7": "2sS4p6ZxxTPJXU2uSJBRFHgYT6r7b6iNQmQa8BDPNuGyujNmMDoMRT55TwL2DvkDfhdV4j6HJ4dPuCFfydKxn4v7",
  "key8": "6342Bi4VtKumvQrTC9ULmMM6CD3Ey1F5ixxzN5ta4HxRAVCkQLRn7SqKQT9SFX5kKcYCZH554auMytdwbGCnpi5R",
  "key9": "2bFtR5uyyhVj2YejDnBrmbyF7qTq8uTG7eE87yEeBzWUHJFygsATtf93Me1NRzFseymKoTM59YgKMHqQrQyrX25z",
  "key10": "2d6pjkauuCMabkihSL3c23aZrrhEi2w1noFjsEYFQHt7dZTtvGHMZzq2WFhmKx1h8aEESZCvHs3G4BURoB7WryA",
  "key11": "4hE9dBivS7c8gotLoqH5CTdhEt3SiVUWGDpsZ3TJ1uTJRRzXyyPbC3ijjTA8HoNDab26cgbbd2hj6CRPZWauuZSY",
  "key12": "5Yot9BgBVpM4mwttjho1puG9nCPyG3vJUgmNJx2nnH1ZKeQ1gkoo8u53BbTwhJMXr7tqd53GfR5rLjgK3dEiB8kY",
  "key13": "5aHSRdh8QqFvBQgNKhurP4dhX5MSivNhAqffeFHtokn6xepjjBs9dM5MZ9hrFAHifJ4W7RT5s2RWiuWcodfjsGUP",
  "key14": "5uwsyeEUydLNgb54vgohqRhy2mMasozo6sKJBB8kyxD5oim5xTeL8Fij4dhg9muuNBbu9e6zCEjKtmJ6Xsxhdsfp",
  "key15": "2jUNnFTwGWCfMxzZBsvLeuvf8BwB9Soik4SwgGwpisxv3wcLmXkt3TriL5zak7vkDoyDgeS2NdAWcY8eB1AZ54Jm",
  "key16": "3Tw2fUkbnqNgKJ8bh3Js9v4MeA3YHxVFHn4FRhsCpRW4JHL1eNuAGKtFUvctqwoKvF2W6oM5tUkoJ2xXeEPhMAms",
  "key17": "51NnoegEns1Q7Hwe5S5Xyfx6TXV2p2NkCaqPY4AvKHDQk3dtWvfdFp6ZWokLR7xSeifvPUX7qXuRfAyVDQusy3ss",
  "key18": "311bEzJVfJ6i95ffoGDCh7hcpwGaYDihyc6qCqbdzFHiw7HR2fU6mB38gZQGBmGzon2rGTTZ3CkoKpArcHo8PUmp",
  "key19": "2VTKcxjGWDHVKpzqn7xJkBnUiwG6VAsJvRKVhVZs6ZNrBTgia8D21UNQ8Df26a4NmBWibWAQYDqHPXx5TbgSRS9Q",
  "key20": "Cw9CwAVvhcSTieEhxqULwXapsfx1t9QwgzJeixtWvb6mECQgm2TTgsNKn3DyNPX47ozqANPTUfb3kwf2kSATuz7",
  "key21": "2afpehpZffvw3NPSofPY8zmd4hbMKzU5j8NoApWFWxL1RPnoEAbuzbnTasRrTdxwJE7BABz5Kdf1LLYi3zKs6Zon",
  "key22": "2gjVEzL1QwFCUkLPY3CHj7YFE6ogswqctDQ5ta5CarNFpR6FZVpjkSb5onteDKkC7ErnAAm7sUTZUhpTsQ8zT2fZ",
  "key23": "5wqNGbi16Y8exQHf8aV1xgSVsQ2wcnLkYKGvfcGBZ84twQJy1P2APPqXM5NLyV1F19voux2GBDyZ6E7d9JN5BCBL",
  "key24": "33nfQEos7knx7edE4HR11kLEKFGcNemTouwDJVwwMqdaSTeS3o4Ydtd5C6rGpzrLKj89qETLCrfGvD6qqepeS7Sd",
  "key25": "4XTxfQmg8GnBbygqQcs8S63x8PZ1UdMA6TybDoaL11oY6varuKbz6p9baeEDXSYjJXXkVCYKA8GiJXgdaxTGZMXx",
  "key26": "5Sh9eGerXBG2RNjcGkqHf86sUDPaAyepD7NuZydpRDqpHetg5UPyf9PLM7eM42fRGTePt73uCNReqeugZZrtTm7D",
  "key27": "iBbxDYp7VEMJeCaCaCb7LTGKh1vjW7qUqUWwGxXVDHP6y8DFAGKMem2bNGXbAmeGSEdSX83SHjC3pBFUPQv35mP",
  "key28": "57LzvcxmdsihikRebZPw3ero67j5Ggtcxf5aDLQDzTX7P4Xmw628s3b7mhHPYQ9D8zYcLpYCPyZ9FwucgMNXm5fT",
  "key29": "4yRqNbPHhVRRuzHUuKBAr2MwhGLzXPHKvgHmUnHYZcnfWyhmV2KgpYMWh66SgE6hCUEsYd3gGvGDapj9Ts2QEPNZ",
  "key30": "4yUU9ucYkY8n95aPmBJU9t7pd38VqX31JTEQpG6Fb7WQCt3tFSiJBroawVxqqcLx7aAKTpv2CMeKnHSRZ6bTaaFK",
  "key31": "3iGz7QLneo6inTocC5qZMSws8CBeNqy3mVqXiG43xMHEKcQKqJDKwbMpJ5vyH4c3KKNWEY7NSewz9nrQaDJr1rfZ"
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
