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
    "2iU7F3hrMCUVMhduNB8nLN9JFcAsVSjPUMCieiVcvgzcJQiMNCEWwy1UFuVVSYsjF8ZXs8TcLWMqaHToCb5fZkFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AEJB2XEevkNtyw8mnNP6fuiEfK3bmcY7ZLB1zHDVQGzEQNDCEiC8xwGyTqJJZAABaydkxmG34p3zxoFpK3Nxssb",
  "key1": "2LBusMLGTU9J4PGjXHsPnrqWjiPTmwZE72BVzrJK5j5oM137jwKGiAkEKkvBFaevfUKzkGiF6nyWuXTMVUMVW7Gp",
  "key2": "5spDRDcmA8jQd6LzG4FM54thpbs83n4RRVy1w6iWqT4jAeM4bHVpmKeyKtMZrT6ACmt3iTLGM6zPxruT7fpkndP1",
  "key3": "51Qfar9xPMkKYbEyLhEPKF2FA619BtG5ykUMUYbAMt5SQnr6eXWR78YkuFQ7Fbw4cPXVzj5Z495Wh5HLPv929vk5",
  "key4": "4FEpTXLC3xexG5Jsgf3hvcNqvHGnHUQjeaD3qSZYX6HqzuncQRp1ohcYPAP7tk8tzbFVEs1LYfDJQmXYZbs4kwoZ",
  "key5": "3dPpEEh7oZ8H9Vb7cfcihyfRmu6XrsPjdggGRqtdaKB4QkS5NrDQPDZCkPgtYj2tz1PSgtK7hQFqziaTBaGFySvy",
  "key6": "jj6Kjjwd9uvpgw7oxkBdzix6Cvgg7YJHVKMddm3G56QDXjcDro63aTYxfyzMueBR59WJUMPHnYKWwWm84tN6QDB",
  "key7": "3kxCoWCu8hdrZS47RpBoexKLxjggNgHw3necZ5gw1FCQpPPbSq5XDKG2DKynELNBHxNzeMwk6DMmgQ68i6xqeMXh",
  "key8": "4sefs5g4d5u4aYZPDkCBXRHeuR9u7vxkF1XcRRcpiAgDfkD6LSQ6CgBVF8FUrD4yQXYy4ASmNnGab4RtdE8YbuPR",
  "key9": "3wr5CckarFGBbuETJFK9b4BfU9vQiysbuFwLssUr7mcykdmjfdy7vTBfcXGP8VomTh5SSbekNN7ZGJq8Vut17zeG",
  "key10": "31yoSmihcmbQo9hvAXb76yF2eimnfk83p2UjdTuQ9ozqj1Uo3znZWpj1AmMXVKhvpBTPHgwnGyCwXvYhmK9CCS9w",
  "key11": "4VQwk6JwZzKLSU4uHnQbSzme63SkrUVmwdJoeuyHS5iTbH3YsCiEVecxWDixcxmaT8joNfw6QeMNmSBV3hzYwNdD",
  "key12": "3RvYKEhp91yHCH8PUjXmZHxVSdDReTuURL5nZubwvgHLcGEjz4EyL3rfboFJDQ9Rg3HD9ZxiQx2qJ856DWg7dnES",
  "key13": "3ygq4K3XANDmBTwirG3cT4CVSvjLqSujksaVP1JJWB6N3j4AUetvD7bAcqVv69x7HZiJxTZiDdoWQzV7JzdAkqaV",
  "key14": "36Wp4SPo5VD4AvBksdhi8tzf5D68EisZ8r2T3zy9Kw8kCBmvAzpxyupTHeetCd5gDMfiaoxf1hFQ6qadbzrjb6HC",
  "key15": "2e3U8aMTjzBstCpYb71cbooaAvCKn3RxNtMd33RsyUvtsUyXjbN7GHCwXWVd4x5GqKPZqdiSrUqVSk96RgJV9A3D",
  "key16": "21nCfA3EFSSqPdNUdAUbBGVJgLkgAGfBqRRyPWvukTTSid4p9eSdqtRwYWXB3hTLe4DEV8GLyusBc8yHNpUiQ9KK",
  "key17": "4qorLxEbMXVcoQQf7WQ41bsbfMxTDA4RSNzwiAYzhAZWRzBp5823nRgFtFpGdYEQC7Qyh8mgLdYsowRkJgfuL6Kc",
  "key18": "67GGDHJDrvVtrHet8DyiESUTZBYUXGUSdxgWzJonHJ57N4a1XL8CFyjQ1kg2wEhqjWnhJN9Fb1YA1trvUfXbo4iL",
  "key19": "44rwSDUv6zRwnv3GJttyRgKPcJYeh24YGfzF954SDAbUubX2FsCdHtLN1mfuBpGvWs4xQTadGBoSRvN4U4wTSA3U",
  "key20": "UW2yk9Ysb8UHDFMGgHa1MJkVUQkMn5ep3i2G3hFGSuVadvLhUBwjGxdfJEoGz3D9F5YkXmYkNBbasuEmzYXwg2U",
  "key21": "UhSzqp4HZff9jpG8zpHH9Pta3kZVHF5UTVbd49gC8dQmxzYHX71sVnXG76FfH8oRdrK6Ka9utQkt5G2H2mDonCZ",
  "key22": "3dE3yDRz7dfoiuwZE64CL9F3wTaZvZvmjpzfLYwjnJ46nTe6uRwin2P6hWN6cYmscBQrR8qnng4KYQUsVRitRHpc",
  "key23": "4Qv9JEusoeU93VRfJ96P1dzAzLWYrWHC22hEUQbtAxzzYGT52XGGM4qyseW2zFmANra8d4X7rDsQnp8FKtPANTGA",
  "key24": "3sjh7SKcefJ2ZVJkxkzviTnEC7i6KghJkBLUnLhoeLK7SgrJguwhSvXGmB4UUSh12dThpAtqrDSdS7umXkHFg8hW",
  "key25": "5YcSu4e1QeEDVMbaoQFY7g86qsoTVLfidoJtKESQ5sKjE3jwdouTD9oi4SYANxjXTzKaHn5ogUPYQPfcNaxjHnY4",
  "key26": "5YPpZyWYsArZQvUbysvQRULL8wicZ8q777Ejwpe6imiX9r5qoWLBHFWyAPfbEynwaorQshGNy9JcmPd3hffU4HXn",
  "key27": "4cd5ZErPNENm2npdpnpgkGg9cfKQkamH23nLsSE1aQP1gC6yMefoRTWWawZnnVSKZQGwbjc1nnm2AwU7hpMRAJeF",
  "key28": "5U1iB6v4usTou5g9T5295jkeWuAsCXhBwqQkd4GR2NmwY9GufDMafZUN3vnK9XoMboAM6138PSip7i3CimHc3sZi",
  "key29": "4cwhMk4zHgTcZmuNXS9pFWEHoBbKK3oJwZtdSZHvMYQeeDDmaoS8UxAMaPrxfPBWwgoUyHWBEBQ5dYG1fBeNj6dM",
  "key30": "4u5LNSghZ8VqrFoHX3TzwGjfFx8AoRyGCh1vvuNBTK2qaAyAMHKMGdugqfRtKU5JncGVe8iDrnZh8mHRbKbjViMB",
  "key31": "5YYLgdH4p9PtHkjXwPy9XknCD6jr1FxojM3F5QKLmtAdLm4CMHBrmeYtdGb5gYyME6Huk8ptwHTYEQRhVjDpEZBC",
  "key32": "qfwVb34uTkMG1c8rpcFJ2XAYQDoeELfkYhMJWvrdWHjyvfAhb98LvE25memTe9KMLYQEoM6AyceeXawHTZ3r6xz",
  "key33": "43VGJHUuqnvLvUZftmh4BvsvDax82gi1aXPWWbvV6WUY33nqz1qqGL5aoQUDnbzEuZwJ8Fg2AdJJQXxHtTsZf3Wn",
  "key34": "4d2cHgY9JuqC2gaLd6MBxw9CsJAd626SQ5p9nVWG4d9HRunHD26BKomf2oV5GNko8u6LBjuQdDAKUWF9i146R49g",
  "key35": "7swfQWwvoufziWfEr24oshd7Q6gjssL3hBQjobYA1CfcjHJd21DQXb4zxUQ29Hef73zPCZtjk6yJ9akq4BhFgq7"
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
