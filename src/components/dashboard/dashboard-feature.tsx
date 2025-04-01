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
    "4XJgbaxcKDtLgNK2jk23cszr6ViX3APF6uPa7Z25nxWnhM8Je48Q82P7kZ1WBPsz5Egt7LPUYLCWA6qdVvWDKkEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hvhmk8PPM6NLqBcsLA2urPiaoeUzqCcEmrqPpCaaF7a6JpzU7QJgjcnqPFCmFgNCq5UE7GKYFTrJktnahmczdMy",
  "key1": "3xF258Dq2JkBt2hWqz1cxJTLK3pGEwy1vfgwYBXBH5No4PLkqyLjWMeqieqrwTVa9E2zSsCZpgqgXK4C3h5vGHpx",
  "key2": "5QFG8pN2rwEgsgvTYqJHidVHCwzmvo8MGMz7PNGNz9EPhuDkxKHSYvTvLrkq5knuhY24ouhLhwjRUbQ2exNZAWGC",
  "key3": "4TF8uACYUj2WYUE6uTAE4UPBYVtMLEAf3Na5c9BhohuQGrBdPYAiFAnofRNrgaAvtiqQ6WgPii58zTnDzkcbYk2N",
  "key4": "2uUkvDy1DAxqSc1frfhGtewG8Zy48YC6orYTRKYyasYaPgeLyyRh93u9rVfy8kVSG4vRNn3rXaq7wwrx9WhwSNPP",
  "key5": "2S8ydyJKVFw1VmSZdN7YH9xAMLjiZCWaVHXbRGQGNuXEYhA1fxHCW2pmp3yRgfnrCTZev6KTX5EmudiN46sByduz",
  "key6": "WhvEohaSe9YJKptef69EfaJzx8ZahuXi53okgapq6htMhjgVCNcF6tVbEKPm2cfvJxiWfZcgwbAGXJqdS1UAZaj",
  "key7": "5HEtg2TNfxELgjMyw6unwsp8jepVEkcfbqBY9Pt65xckwb6t9Q2weNWVeqvyVF7Y4R5AL9yhYK7UpsG42mydFAhW",
  "key8": "dEYMBqVjRPHNTnsXZMr7Gf6bEhAnrRj3bhSBejy3F5c4vkyUQPdohktY4wbovGF8CE77qYHTCHXUTYXnwg9vWtz",
  "key9": "3nUfJavqDZsuQpC5Pw6aHvt7r8tWyKaDhSfjqcwhZ6AhpPL77KcXbEybhGCecbcBFtCauUo1zCSzZKaiT8ooDzQ",
  "key10": "3TK1pFa5VGaLjyQB6riMsyHCXei9mABE8rYH6MoTJsqsCBhSZeAtBzziaYaAKgRHu6o6zVxk81qGbPvTf3qfFiyV",
  "key11": "3UXt5EB2uuptBjd6dQdGRmVeM3u7yxPCGkNbDN5dLQN6GbByZrENnNK8iVhkveQjwEDVz9wiU7WSRffUSX134Ub9",
  "key12": "Y8KYuzJF4R2WTJs7poxaByEebzRBb1aGsCynfi8fvsENgNHZ8P8wSabB1gUatbQfWZmgdF8iVFEiUrjGPw2yjPF",
  "key13": "5aF9XamyRwa9u76r2PNK6ykccM8doAMHjcEtEn5bapewM2hq1Vm3JNVizDmb6zjtp8FqXoVXmSbk9RdKDtJZ1Bfj",
  "key14": "52Nj8fqmGHDvcdQqT5YbKvXR9GHb5HnUmGud2CDfvwT3APcCwjNmKgYuaRqQZMAjqUVNZBz89PRkXQcNTMAxTwEG",
  "key15": "6C7bxrjsQ5Uzf13cc6u8ez3FnQUEaVurYXzftQf4jpX3zkfYsTb3Ss3H7TNHVNYUFSRV7pzkmdRwwVXqShoHQ9P",
  "key16": "DrBSVkA15VgDGZGsg7pdgC73cTBeNPAaj9RQiXSNWRaebsWERwgxhwJGCiGBZqAcVAk2GqAtbQNsnqTJCCXH98W",
  "key17": "4Ew2otHa9G2Mg5EShthHBRMrU4QzWx4rSXgh1Jgwjwten5MZgBPZ3vBfDGAxr9JnZMptWzb4RMQh2faYw26rKrYF",
  "key18": "4M3hMSxVRtJvqYR5HcCgop1HmKF2AN2EUaSoYq6rTsVrXRfVVX1enCHfNp7XBiCiNMb9ehY4cSZ4J9fsJnnx2zt5",
  "key19": "2XMPFRtiGBmZJEmS1TyJArHHL9ue2sMiAFJkPscgdRNkr33EvJsgnf4WeR51oESeWHuUXuoc3nf7Q6aS8ED4zpxv",
  "key20": "P2FvbAdFHXbuL6KPE2PYA4tANEcKyHZK87w79tpzde2qreBxvmCpkK5ueM7VgT6f46pmCwHdqG2xJBLZs5jePW5",
  "key21": "5DMmVPxA2RVhWKCqYWywzSJhvd3TvL79T7kRhig7m5ogMt1XS4famLqSymF4dxpikB5W7Wa3aC59EXdjKPiDgU3R",
  "key22": "2mgoQcabbt88rSVpy3enXujrPuc8EkGhrziqxsbtZTqCaRa4UJE7ZUtuoSRsjxAXwCTVouFpgKLGFSZpr7CExDPp",
  "key23": "4bAj8nZz6ZYWPJ5rYyEGdixGieiPsD7hBVtqn22V2kaGVTLojgS8A2WaW1DbcE7NoryM5r3UPMAqAPtnD5KsUoVF",
  "key24": "gzje7iRaVXtAfQkX5STkFY1Db3deWghVJc5NG4ZRxCKrCKcKRQN4judobGNgLNkQqiYRTUeEcAGq3QBZg8bUYp5",
  "key25": "5gSjPtBedpNJN4zu7HUk6UojfpccS5hwu4uf7ZfyaaXcATZjG5DAWqMkFVZxJmFmC7iwEDPW2uzwJRKqrx3o8cQc",
  "key26": "4YDYo4TTzHM3NnUAMbcuKRwEGbSFTFMA2uTDkYE1HFH5CXc7rHmMJ3SnkwVSrYxah8VjPnqbHLgfbC1Ayd5bKb1N",
  "key27": "C5yWU3gcBwGq6Wntuy2yAM9U2ccNiJLStkw6FqFxpHWF7sDVyEAeY9Dkggccqb5Mcu9FyfaLAtK3mnzoknKccc4",
  "key28": "ZrWPCpUwktbRZdrDZDBaRsxCuYMgrPtYz8Qj87B881VatEfR6YBLwACJA3p66tqtfbffedE7iGypvi84WLGe3qq",
  "key29": "4mU7A8Vw4qrhaXigFontNWup2igUEmeFuc9ZCicpuFyhjH7mMHkXpfCwvEG12MigcmtFF6oEDAPBTvzdo2DVLNs3",
  "key30": "41Z9pQjV9mSD4J5tG4Rnyr9XZTUB3FQDoRc6aiUPezhxpdeUpj9zZRdKHBvB38WtRPPEb9kF5dapBsKvpRCNvqS4",
  "key31": "46coeUiAD5aw6Q4Krf2vVYUvEPZdQyjdTH42QvsmsH1TBHTGpBS5mwnZqEntXSjerWgfy9B1YF75U3Y8KZ9eZdvq",
  "key32": "5mAx9btChm2GbgvywGyFSVkf8LZy4Z21CoDSXXp1ZXLrfrD1Hwep4jrjpWxefKxtdQFezrVUtMT3ggyrTgMb8fp3",
  "key33": "2qt5WiJA81WrrevnB1qCckyChgnE8SfFteZoegL9CqK5D759XEzxvizEV2RZuSukoj6rxPiYaKVfXCrJsmuid9xU",
  "key34": "54Yu133GGFffh9785EvBxSjs2ZA4XrYojuyCTua1ihKiY3d6biDZ9BjwJzzQzJw49Wr4L7DCWfgEnhrXXj7ZbRiy",
  "key35": "21rmRCf9sU2z7cE9DbAXxx2SkV8NC73rVp2NrYHTEnxpUydWpjxLZCCwKtJ4D22b16kP14t18FQQWyCDkZ7QgqVR",
  "key36": "YrZyVPNY7AfQCkLnGWTvYz7A11U3DN4jQAd9CX2emWnCdQSxdN6kjCNfCwToTnNBGicmgEzohYB4VcGWW3KYp5a",
  "key37": "61yNAH8F1Wxciuoi6fLXFuYwoZuiKk1ccUhqcz8Qaq4vzasAn4xMgeUdUd5vM6pn9fV4uPWGxiL4MkeU2QL3wkHN",
  "key38": "3GYFQJ9JsA74TkUprnu4y3T5NpTPm4gAGtMJPNqRewqHKmHVV3hwmBzRJUnTZpkr54NadpAoLMqar86YTckAuHoH",
  "key39": "54o3hzymGjvfS2bHnTzefzxmsVCLV4E8S8VTaUS8wVS1Q7EARVbnTkaTGDQN55QZw82ZB6uRjSjGzHz6sYkkRbrY",
  "key40": "5PaKTUUx4Wsicrp7ztmEoTDrnvjnDcGxH85EwWrf4Sc97bABp6hiWvYxx3TzeZsQw4GoSpQKMw3wFWgcvwo99EFu",
  "key41": "25S4Xg6RXSFidTB7SJeRbh1AQmK9zj34zC2GmLKCJGegGEnbctoDVWjePgDsPWfkBpzhbQyxqsthSi8aRwf6oL2h",
  "key42": "3pRJG2LShSDb4G5wVFdvWkRnWPFy5vv7VuGx3brEFMq1Axd7mDjf4MwA3y4FQ2omE49ooKvevmhUUNTzr1cXz3Ns"
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
