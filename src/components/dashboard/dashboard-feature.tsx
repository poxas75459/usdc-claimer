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
    "4kq2b2ZFZJseujtwQoidJ2m7aEn4TcjE4ozhmq9TQtQJYvCYhNo51nhBci3hN1GHBnc7YT2zcwi8LHqJZXWkBv3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rz2ojxZjDJ7bRhoE5em3MLVbNRmKKYtNNRGxZ1mU3UdPWGmiBnF4WbKN133kF84Vzv7QGVUgNqdP72LxBjtDEfy",
  "key1": "jgiv4wV5TEy1dFaaHdED9VdWAUeY9xTNyV9Gbbbp5wy8gYt9SiHqKFtUQiVh4qWNmeEgMr1BCGUHCuqmUHwPUh2",
  "key2": "4nJUH8j1v3FF68EuyHrxHMVsG4UT5XDrWpXGy17ZPfhcHBtXPcTDrZCKHwhnLSxoRPX5ZRdpE9GbBh1d8996bTeK",
  "key3": "1aiajFrZhF7eAz2fen5swsSa3RE6q3MNmoH6U26y8FbuzqCat6JpQgYuUFVbhbRPGqjjHNH1Fo6WgTnKa217Nc2",
  "key4": "4g4q8Gc5Pc7N5Xo1zne9jbmhj6SPsypkLtJna1BUnEWv5nFwLrci2Ef8ceov49hJBfnoK8hs9wbUko5rJy4kbdUH",
  "key5": "gCefQjHPdFCK8kL296U3bqTHLAJjovppzMQUdTggWBzQHSPkrkv2CQ1fyP4uNSAiXozo9YeusxL2j5pVxKZH1wL",
  "key6": "2oh8Cy7AMGAQjTgUqW2kNCs5SoWFPN7HESgowBbjDkYyv4crCsYuczmTgriKEa468JJLpiSVrR83n7uXRCYo7LCy",
  "key7": "2M1n154GkfDATWEzkKAUouPqPnzKMVszn9evADWuxmegVwyS8D8tnB8y7EDskerVrHBtj8Wv93cgdXuLqzMxSzUW",
  "key8": "5VeVjgaTb9KwM4dsKQEJf1ie3WTH5BucWhpUKCUe9k9zHZ9YcFWjRdNZPKczXzTekYBiUnoVzJ8X36fm5mk9NGmR",
  "key9": "4sGz8TqYG3axgque9WFb74N4J9YT1TRs5diZzBGDKxjjiRKU1qjjwXHNQ55wd9gCSDaL5btyHkQ5RPWqFAEdFTjM",
  "key10": "4x51jrNifg9e6JebYSLNQ9Ff9i4mciK2sxaa8p2FLw2PGCXcz5A4k3DQQcbBFbNT7jszWk7hgriM5qLUbh5vx2jd",
  "key11": "2akeiSEwZze4DqKwxvQBhRAkHYfQrRZSxde8g92294nueB4gwoA4q5tbmp6kD4p5JGdpmomrVJwPwxS1dv91e4Pf",
  "key12": "5eoZJytjPF9dcCno8BXaLCGPDJPtWH6PK6uY3NsAsaStyoHV59JuSyHVkjEKwVCeDR687iG9Kc3G5Quxu2zmXdgn",
  "key13": "5ECkfXxyyVwfjicssqyeK95UUpGostBSEFV2PzDyrh6daTMLpYoSU2wSKy4daNomCsyN4b1rjZDbFMWMXkEqcPSr",
  "key14": "623ipQz7H24w71nh8MuGZCpYC7kcvoMyK5NQerfuNqkrVrXqs62fondjXhL4AiTv3h9bPKvzcgu4JZjHvV1cXZbY",
  "key15": "2CHGNDsFoZ9PmUDU8n9N1Xt51ipdFnc4cZ5JXMQPbpG1uFLVR94ckS4sagoQ4ZtfJya5pxeAugGhDXRG72PTgk6R",
  "key16": "5vxPVY3RL3zYe4uhREFLykfDpMzQm7cBZTGkRPrfkz9SFfVmJ4gLDzivHAGd72nV94BLoU9R4tYrW6ku7agq663N",
  "key17": "5XwP7SyxPFrSkVoetSfc4aZcef4vcCaYA39aPs7WMrf71A1hGhHcd5DhTLarrEhG3oCeMkDioX78WE1ZC4onZcMi",
  "key18": "nhenCEkcUyYJkuLo8sdwdiD5sfaS2DwjP1V3eqbUUfwP28SZcZd1iyXa7BpxCit19qNmMyp4QpbFFv75dty6hk8",
  "key19": "3JGmerG9JcyLWs34xAxP73d6Kwu2JVNvWQD36C574deKbuob1hHmHZPcusmXproCjUhpqfvTGiPjkiiu6mq8HgQg",
  "key20": "4odsNdpiydKrpCPgpfaKFwGqLoMgoo6hWKqk8rpKTci6qtaABwuoMVwvP95Xp7rM6iqFupgFTjodEoWrkwyy7pYP",
  "key21": "4oVvFSuq7sq8eZ8vdbbj5Yy6AgRFxTVvdVgURAYuKMMTCafdtofScLGhWwAtR62LVof43ES1BN7NLn1ZeZr9FDmX",
  "key22": "4av64ZkMmjsL5jdT8E9eSTsskFAoWz8gJTELGCwtM1ok7uUGdFdxXqhL9jJRn5RrXZBGLskEB2RyLJrgN5beW9By",
  "key23": "5P3FAQW1Kt8KhG95TCUD6NvEKFKSJKaT8tmvjJ8b1A1Y6EzAHLUYvgTWeP4DVquMkJA4woqqnvwZhHoxDkpSStjH",
  "key24": "3fq63B5FLpW8hAyVXmHGJuho4jkTTCZasLBqf197yb2KtRd4DGZpULdU1iHbPDZaJCgydZ2hD57BFdY6w5ZRt9y1"
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
