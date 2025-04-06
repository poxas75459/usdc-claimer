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
    "4g3EqiozWVTmGAzQzXsS3N4LXhpEGMoKEZk1Xt5AtoMM898McL8ikKGLhuHfQd2gy5rEQqhWMx3yoGQ2j32xrmqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49BfafquTAN8CnU1x9FnxZiUfDD7gcK9h7LxvpM7ohDiNHVDZ5jXbigAb5b1s8G8gCqqPbgv2GmeSAH4mKzHbpNK",
  "key1": "4BXs6nzR26LT2SUpQYS8nUyGtmWuYufMbFvi3rNAXaLLWzowAQPg8mmGfYzksHxrAReDXF79ZTq4eswkbH7nCKTV",
  "key2": "3rFvh8LgGjMLTE75pL6aCsu8iYgibAkrVqhi45JmbxFwwpSTbFpNn4VboyMsPNbPPsgNFGtGmsofyLu9M7dnNDD2",
  "key3": "bU5Ev6PqhW83vde45FQ6cpkGDggbFsMCRqTPBGGGXKtoHPYqCHZ7sX9PJWrDuE7gUgDhWzooTs9JtmcJ86AqLhp",
  "key4": "419d3qJgQPDbBLQayrCmmkpcwuv6rSWZhvKcaW1GPzWyzjMBRd7DYFYnqzKCNwPXF8gWcnpwXHPb4RAhy1U8QjdE",
  "key5": "4wQZQ2cJG5B2dqnHRAyQ4srxeTbaCaVpfqrpDZKmS33khdcRADbWSmWGoA4hJG1DsTCETXnqufTzNmKgDbMNP581",
  "key6": "5UjYULj9UF53Cn8s6JsaHsqhG8pG8xBE7rhVjBYiUivLpJ1y5Hr8gppZWyRj6azN36k36Ki18Tu7kVZVgnwoog1Q",
  "key7": "35e5i8cJFr6SpreFbzwg52itncbNZdXqhHTHN8SoZDUrSemTqNxLUffCbdNRPuk9jEsC1M6Le12EpoaooqFV2qv2",
  "key8": "5CMnxTghBDzLZbuyASGGdcrTTg44psohmeMC6PRALtwi9RuaA9RN6MXKU7eXMXjn9yymgMc5PeakZ1K6VaZr1cAo",
  "key9": "4MoB937VZQi126dFAvTQeSKeQ7cwdsU1gbwbBmy7uDqpCCbCdpEZqbKrccHpX9yH5fazKF2trk9u4ayheeia3QW3",
  "key10": "5THyiHkKmF4A7Ey4QRm8bzdL5uLMc6FxmQbbDa2JMx57ohim1cExkbCsbXmaWwXVynsydv442uQtWvNWJiXHCYnu",
  "key11": "4ZwwQH6TyS12C5jLg9LF1C5BC5eZRdSwmf9DkBUinG6vFriWvmZfhtm97FygUuxtcchZpsyBiBy1Goe37s3PykVU",
  "key12": "5YMTgUqPiAQS1c5PoF3Vds3JhGSAWtuMpwfEHTj7KF7sobTUdvJeBUwF23aNcoZP1Ak8z66LM6aUyZ2G3Gg4BZ2g",
  "key13": "38TVwrkCxg995JXGEtu2P6JSoB3PVDkKpMC2g2PoRpYyN1U9rS5m5ePTeumGL9iPnwmJ1uJ2GLhL2aK1U8nkViiu",
  "key14": "2P8xLpVy54YtfBDRkedyFRTyg6K5dhTZUwirL5Yn6qCVrQ7Xp77n45R2fZhHJQ5ZctKHk6gCGJfd7UJdp7WmF45G",
  "key15": "4zHNzSBTgVVNoP9ToAC5Xbn51Ji3c1LB2WVGWH7nyDXvQ5JqHYE49AWxFeJHAbBHEVCapew34AF531PmPQ5ohWn4",
  "key16": "42iDhR1iS1YELwmumiMVA7gJqq3Se7u6DZMz4zjTAVPkwB8BKGS7kGsG5m1AjWzoPEiP7a4aN8kAMfoUxy6erHDe",
  "key17": "4X3U7LvPP4mo9vRQaWNYHsFQkY5bQbCHGqdoXdibJRgmjgMygr9hq71SrRusY6LFaaeY64VgjH11x3Yjt9UPZzCE",
  "key18": "4Cv7LfcGBQiSv8mu7DYJnwortMGYMkBqZyQewji3XjpfMF5DkTMjd5eLYVBYShG6AMF1icYfKUcjo1bR1cgQAFLR",
  "key19": "57JZfBLzUULi4bLFFLAcwt9kyxNfSojtZEX4NvehjgNaLfypZ6eYVLynxjAo6RxL94BYfwCJfjajn16mpatiws8U",
  "key20": "3B6Km4T5BDgvNMJuPcuVHSakJqFjfn6ccxsm4Jmc7BuV3SWBz2yAEAMkkzYbMbVCsz7b9nKHstma7EDo6hdDHskF",
  "key21": "3uBKjEMYyJHNzT54CEu7ogvG4JenPMYLJ2PQf4wJevThHAEqX7esCr4mNdbTx3npHUbwYiD7kTcfAood9jEWEJ69",
  "key22": "udnzVGVeUWMF2wo5qbA4FBi4ToR4pGEVHHtuUvoTYWMrGUyr7pUbVtSHbZLAvKeNTVXMwutAzreLM1bZtCPMbfz",
  "key23": "57oL92uZtvQfhQM2MKybiNyGu9vQLnqYXkH5dsuKp3Xv5GofKdHUQNx3zHYkPAsSMk61Cwqc8a9VxjyLKHsKuvri",
  "key24": "4szcSzKqgbWaNkVFNtp3zeBPoVuKy8y5ZWJVotnDi7oA5Yn9gF2yGQ4rbYVkcc5eSwx17MmnMur3H7xkMVtNQYCS",
  "key25": "3YqWahNzASgYXwPTs42pfpA5mUj3MWB4Rwv9qBuJbR21sM8VThSWjHrexedi9wzhJUf69N3JRvTXjtwwoiVn3d2W",
  "key26": "3rzAahCnc32nj3v4G1Xf9dsQUUmUgeFvbHpVVXssdcJQrRk5A97754GojkoVfRoiNQnK1fySnNQBX82kjxTYnZ9",
  "key27": "2W1ot96gUtBVTPRFcn18eJCiddS1NVajiYEBsgohsFnZtAbNjSE3UABTJCuAWRA7yrAQGCtgddHmbTfFotJcHozi",
  "key28": "5iCrWb9Zok1X3cE5Ww2Qntv7rGqjuvikrCuXjJvGK2ZJkjYg1b5GDYWHgqZVvEszZhPrpz4FDSRFpg8tCu3HYKbC",
  "key29": "4vPhzEgpe6DHnd4uqbhcG2tJsHmFaLhKrynhYQdJuun6NfMn6abtBcEydqAKbAMCPGvpLF32wWadjUDYS1VkevXH",
  "key30": "4E8Z2yiBiqd47XrKcg7nDVPA1KY5JWAJq2NCskZqMVvumwfzPQ3VC7gEQW4vTZ3S69qKxupiz6W8iPXBXM5Gnip8",
  "key31": "3tunNdifJYAYvuM8ngMgGMZWy7P5PAZuPfMjLk9ptY7aeKYiyfJ7czEGBsjrdPk3Ks4SD5ewuCpemjs9fFLtigL2",
  "key32": "2EnXjEMdRkt8cvwop4ECYTKoYfaFWWvfmiArXBPScyj3NYPQeV8Tmdej3ZtmWyftf2D9Kusw8HUSqfCkfd5YXG45",
  "key33": "3LfiiYLWPMEFJmxUKawBAEfnFByjwBHkffT3t3d81kpJvxjRbJNJSHSVRKtVcikYZYSp9WThjL5KmfxStxH4HGG1",
  "key34": "3n4ztCUFzGycxN5VvosCe7F4mP726JepS8P5HSQQUCK1fR4bsWDuG3EpnCmZoL93aLGAyDkBAngjQJGHpNCXaB3j",
  "key35": "5Peo9m4wcN3exiRBwZMdBNXMxAXBVFDxpgvWtbW63aKKxakTLwsDnMqi14wJnrmA5j6a5y7RB741DmZaUHYtm7sg",
  "key36": "282wdQrVzPf5fXtNfydexXsuXYp1BWk7SJBTFPFmdVSrFjFahxkbH8GauqcBJACBwBwLazaYLtr3xjzC5SY99Aod",
  "key37": "65nvZYzgT7JEYjLK5FScLhnp8LjzKuWrQM3XQ5tCMc7FmtQ8wpXEa3dPDo58LPjwQNMCKxnGfeqzqaL7JZ28yC8F",
  "key38": "41FNYwRuK99YatnfMA1NJtCCjHFAQqt3W3zw4te6tVSHeSVLf6ShDvt7zz4waWY5f74NA7kRPBn5bfYcWgzHfzxS",
  "key39": "32BBX9eAp8oaSs3FyJancfFELAJByiyieTnup2MsyXDjQEFBuucsNzoZUyibvjs2KUM18mE1PLdYN6Ukz9Fnc7NC",
  "key40": "4vjKWJQvRvXQWxkacBH2UjpSfEmw6PJ9mGATYw1WuEHAuwKzP7E6bLu8NvQHfLdhYjwTgZeGnHSxu1Za46Jpw9a"
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
