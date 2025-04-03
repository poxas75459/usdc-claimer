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
    "4Uiz4xvpWgimnoX2yHdP99NnjQGqiTCUTA3DGk1UrXBm89Dao5BSt6rCXmZQ6tn4s2d3CBb6ruDqUJrVLkQH3Woo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ePBEboJE1WeuJrTVQuLcWNsiRQny7YCUYS9jBQ8ywJyHCd7SRn3hSbq2GssZbHgBnrcyg7TCiwXSuoU5KPYx1BJ",
  "key1": "bpn1s9D8USYoru8yxZJ48nEynaiohotqMKKH8KDiVgXKQu8fNiaYmXKTtbTKH4X9u2Rp3F6uq2vFbtmFDMHkJiH",
  "key2": "2f6dth9545JUDi4d8Q5wkkmvRayTrVKWnqu3PdoN5TUj8XjAay5sNeMvgNdiN2Q7D9hAwPBJXZbvpd8TGHhXuk56",
  "key3": "4U69vBSWhpKpA57qJ3Cg5R56i1iDGQvqsm3MMi9NTnGq5g9hQCft4SBUbyrp931iVhrGi5SC9j8KAF22EBcmiV2V",
  "key4": "3UfSDh43cq8PSK9QWYSXwVwEssUm7xe4sivX6B38X8fSTXUEUyZ8q1zqALMTHweZ71A5RVZhxK7BcFVgvZ1Peu2D",
  "key5": "32S48HigUdRuvrpAXR6RAxVEZCtFA8eoVPJcZjtyCaod9SPEsCxHbpTwUmiQFqR3dhzu8gF264v3pw7XsWT6fia9",
  "key6": "3zV9h2aheeFyWV4k6Rr2YsfuPAmQ77vNGxsnNVJuDtp7H9svC5rmH9xN9FD8UapBwsrEiTuC4DHeLYyouibxopQp",
  "key7": "eAjS65v2ez1SBiJSRvs8Hz7TW1m8wPLSaqR5dcwEpsFUud8eBugoetEXRnJoQhQ3XULvModmpWhgx87Vd4z5jpF",
  "key8": "5hxZefVDbBaCWAacQvYufv5aSf8AGxbiLKML4UqNHY9qh99XgqSVjb9tjSQZCv2F47hRCMC37YMh3GZd6fayrCCJ",
  "key9": "5qEYJDopNan5tLwvsW5twJ6JhPnNSiyzUH8pccHv8urypLXo6etDgYE5ym9GDkat1cfmg9QX5qVyCPx2XQUDKxbr",
  "key10": "2Kju4YRGNFr9Qpay7DQZZSoGbnJ9ubcGfBMUjUFyJrpuBez28Kj8edmm8kRZFqCifCg3JCXyMQcSQNHTNHbCqo5Z",
  "key11": "5jg6bYLn4gzBK89oZi8QAk1866KAmGR5nwHAnm3haQtsGN3kxsWyFakHwDAmEZh7otRmo25w72zwoX9xbnscwyUP",
  "key12": "5g2AwYcWYdmYBRib98QFofs6n6P9U5HJMnMNtf6qZHYekuL6YKAV9pKihjnP8M5JDyyjTEREarzLqBBALUm4gSbz",
  "key13": "5Gx6Uamj1K9dyA3GFv6LrGhMg1o9Bd5CjL4Xk1xGuALTvhGrfKMBXpJKkNyuosMhbUFWs7zVvxrnSt7CgNkkq25k",
  "key14": "yicRhnaJmWmMh6PepVxrg4BXCgdDdiBqA6cS1RL39EFpdJvautaJ4RpQ5rzQVRBYxGisuU31zeNwcb4XcBEYciU",
  "key15": "4h3hjiMSzD2cBQgYFFyyMMNVucm6fAK5QadCKCJuu5va5XE4NjcpAM84XKhM6Ge7skVkhohzNcy38jB4ov2Soch9",
  "key16": "2JMDX3cDXbiSb6tasMc2Ua4LDxPecfdT6jyaVJf7uxeZQ9Rq7XCVYuQ3MvZQsfCjNXNWqqn9DX9KHcytGiWUUSbP",
  "key17": "2Z63ErRyj7anmBoKNhWLbj17Eix2E3BC1eztzhXDWMhykqoqrQRfU9wEE9rnSytz7Fzc51BdWP8h4t6EFjL8GQyz",
  "key18": "2RgAxNjNwBi49g4HT78ybxsgKxCDSPC1PwqSc8WWDcYX9GBV3jxMhdPdC5cUBz9o6bKArbpm1XqKhQowakHhqkCx",
  "key19": "4NkXW4mZApFuN2qk83zmXo4tjYHYCsTw5N7JhWgYBbZCizX2WzegURJjVd569Cko3D1SPFr5agLY8imstyJQ7in2",
  "key20": "A233Syrai4JvqkzaTyN6nw1636KVay3SSWZFhKXHFgo8ZPF6qEudSPRPL7f2f9enyNwfsKcTQ6sCRCaCsmT2hDX",
  "key21": "2hvCZcNNB4D8bdUeQUmeJsnhLG91AsWkwR9n3uLB8r4Tq8QWvcPjSRK1tJprwy9VpKbVXYjAUnGsEQ52Lk6C13Ye",
  "key22": "mZm7wDdtmRMbNHHpcdu3PWWyLTef11mnNCvFgvyQxjNy2p5K7DUzZR57BbcmHnto5mCLRLvUDXtbd39qHigA9kJ",
  "key23": "53DwyqG56pXutaX9kocJRGyLttfbRxwLRSaz819xJ9MPadpRyFJD9S3ZNV6jiKC7Erj53qpqjyq44kBo2hPAJ1Mu",
  "key24": "ePMUiE9mRj39YFexXTjMae9g7ooghFUfWur8iPieHsjubUcbbJuuNNP9LB1LXDT9bAtGyMqExCqjp29TzP9zkBb",
  "key25": "3YpMpCEKjmSynFnVK923sRV73NryxRxJSYhhBqqK7gPqQocufEyZFNEnQYjXwzuCve5eZqnbGqAYppmXn395qpjH",
  "key26": "289vorvCiGn9RxtUXR1kSyGBHodbDfAEB16eQJfYJsv7qKThCHjPqt6uzLjDzGRXMXXnDPCTTmV4JnUeYZoSeumz",
  "key27": "YHCiTN3UpbQAdtuAHdA3FHS4H9BexgWGxhHQQrxhSgte6uRU1sVWSfDviaJ1bmvHu5bG87XB83vPcjWvV493idh",
  "key28": "5TFgdviXfK9WSwFQnDXPY8Qsz7TzP6JfzWwsB24kPAtpZTJnE2SEKv6gLdkKA8gAm82F2AQsBwGhZGKoMi3j88Tj",
  "key29": "2UU78hW3zsv2kUtCBHaKRC5gXMedgDhhDEFAcgTM6KXzvD7sh1tezTvuA8zGjLY3DsuHrycXNgM8MRFyo97jPPgk",
  "key30": "uZfyK2XrQXQTQ3ckicxzAzU5ZB86uo3cJwxFub6aPyButjAvXuBqqSp7a4f7CvFi9dNarrxEci4eoJtSXmkvtsQ"
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
