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
    "2j8pHXvoDAZTtWTbP3LL7Bdmpvf47WpZz1bLyQq28UbXhdtNZnqfwGTrEZzaetNo1wX2Gm89SPJFwZduNEPouqoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x8HAfjKDRnPGweyLhLUeqKQZnS8pXsSxSW9GNoaJsUDT4gw4GjiQxAF9PBmHH41YSdCqC4JYPAiNKvUnyfL8EHU",
  "key1": "4Ar2KKfhiBpVYoZ6uj5JBUkGaEh8zr8pQ5eq8XVbpsqe5DQAFrR11Ysa54Be4V54o3aaKqtCbFeAEdEx1ovWqDsu",
  "key2": "4eHm6VHEUZQEyU1WDYj9F1HykhSabPyFbENkEN9nmAVLvZKgrwDcBKS6iHUxqz9cEPPBAuCWLkCq4v4KSVnYdnsj",
  "key3": "5RhRdTWwCmbcLYdV4hGPVVvxPkht5PM3oGvumEexsDoMn1MztREsKNNvAbP2GFN91YTzfQkxsw7oW6qyvdDmLQVM",
  "key4": "4stTPVH5QRux6YvUKCFyVkWzgp2rAJ2vrYXQUPbcLrkYAFr3joBQZPkjRF1YFDmdP9XyQbCu5TLey5oSoGKWBTyg",
  "key5": "2G81XXmpMMHELF4k1QiiPGJ7SR3qsWsPAUwXhBRQwUWU25a6rSuCfs5Nmkje1mK9aPDG4KFGyrgQkPoKEH5SLhzs",
  "key6": "5ytLanmTNQENP2VStZh7L6erWs3jF9NWgJNAt2Nc5CSur78idn5kabmbxZQg1vWUv6eCKHNPSk5CENRKTBF1H2J7",
  "key7": "3wcCTeeFTjYc1cLjmxzYdogQEXdwxLKM38Q26WEq4jcGCyx3nEYvcoUKr6S4gpN9g4JEdv7o8TgTHXe1h1kAjPKW",
  "key8": "5JzXnkugQBybS8aL5JJRyD9NJrass9SDzvjrGqtzSaJtY826M4Q9VKnebRyptVdgmnUpXypr1atnqmdYzT9vNnaA",
  "key9": "4ziGCmx4UE9eMQvPAjW53HFw41pt5wBRtEbVySuCdTUSqAbci2jFL2YF81FhRdLA7vCeZhsxRvpEzMC2xNLSz1XY",
  "key10": "4aa2BaX8NtMEoLjKCTw4BTA78qu88L7Y15XgxGhGXmTuRkc4ADNS3YBU9JauZTcdNqQ2vxmk38d5ZxBg5AAVZLmi",
  "key11": "4fF8f4H4pw3WACEtHZbfmuTKSyG8DBy3jkCrWaagiT1zgLXBUfHv1aTLHtic8opWioYHnY7kRi1r9B9qHTC69Dek",
  "key12": "2ybQEGAYMJS2fwCVzpwrwD9rr4P88BoPeR3UH94YvFHnV6gyj6gzUewxBnGozJ8xRQ13keAef4cKeHSUdPhiNtjV",
  "key13": "u2S4pEGntexHwNJKRHgPpP5TnUWepa2NCqHt6VJDmyHxdb6ApSLWwSAVdYAtwNE5ajAZF3hPDjsUcLZ34fP8awb",
  "key14": "3fovN2F9fFTcTJVDeddsCPgC1ZNCq9Q4bZ5VQQFo2Gfqy1nHb7rjVtxJjQm8BB2MAmmjEmXAmsKh2MbuBFLPtmVE",
  "key15": "3z2o9UF4QNq1BkTD9LAdvsuAUh9eWzrxHna5ex9xy5i9YWihp5sGS9onqKwxhf6pLexTRNiJGoNYad8UZWbykBzN",
  "key16": "4g7DQZJNjBpEccbZut9RqqD58PPBn2maGyuW8dW2JMKHamhHFbqSHq4jMaDwFHQtoyGm9vTauFZqZ5XL93jPGByB",
  "key17": "54Ehq7rKT4NeTDRuJi3R8QMT1SKH2wCEi1gb7AkF7KEF9kzuJcanphoXeYNVhHNzicBoWz7pptNb6ZWXoRrjpcuk",
  "key18": "dV1QuAqjVwMX7oVb6WcDTAYpCk4LTDxxmAw897S3PHxyDPYd3gmPr4adqzwVPyg6Mu4ftczjiqTo9KcWhARiZvV",
  "key19": "4gNBBP1moPE7JLWJNSLCN76txabePBGsj2WzqaMcaQ53Mgccq4MpwPbVRB3R85QCHWh3iawWpBjshp3x7NSNJ1yZ",
  "key20": "4ro3UQfUXDxPfL5NVfZM25uANBUV5e1764aMAP7xEEssxdcts1b6CoCYNuanYf3jzGCtMwx5xKWmPhRqKqKu7khk",
  "key21": "5edoTE3EDc6B6SN4Tupj9oCHRuGMjRQh7VSq62j3QWtKZqGnmiMQqraj186xgVWT5jvY6HnVRkHY568i32kwpWa9",
  "key22": "kmfhmQGaCXUMRbuLeSnK6nYGZKQnUPepuyyMazymtzL7TDNmJhxAXVyyJeyLRyf6Wc8UHCR5ZqNqySy15mwH1cv",
  "key23": "4Uz52i52cFbZPWEKKosZwNNmRhZPDYfjHmU1V5t4Mc7hBLoTqY3E3qaD4wQy1R45KLWX4y4sRp8rtfiVEegrnye6",
  "key24": "k5y3hLk3qSvbybeNKmZ7TT3fzVT3MKVJuYLsi4FpWxhn3uF8v8oEao1LpjVfby2odieJASpPUM8JQab3JRLBiVD",
  "key25": "4qCPSiVCTpQidiyQ7PEHS6FLmqr7dQokcz49qA8me2SERxXYpQ8N3TdPjWc7z4fAwwwieNxVVsKXYphh8Go36o44",
  "key26": "59mAYsr8jqUPPWRgjxUo3u9uE98pnbGuXmX2XqmbuuNL8Es1uDH6kn1g8NEgKpbXpGY1YccmD344zDJQtnGWLAwW",
  "key27": "2sa31gaVMNAkUFXUhifBTRzqm79dA87HGY8PYnrdRWx4eJabjsN3SgRj6pPpeMGWpRW3aLMpkyn7scweiWuUYXio"
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
