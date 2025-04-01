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
    "4ZsdbTT8uuinDsfas96yVvBe8q7mMBDebkZB7Bn9S8WfpGfNWaLHqq2UUkAhdB7PQ7WrWdpxsDafSZ5mUVi63iKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sJdjnt5UcwMV5NeNY3Xusxw3TofAuqmEMZ7Qc2NLMXbszKCq6aT8mw9bN3Lm9LG44R21eiQ5tDy3KteKM447M1g",
  "key1": "4rV1z1cC24G3tKf7JD7nKJFbgv2x6Lz23uRkd7M92TAfHfGzeQaSsG4wUsdxgb95h4CgjEUKKDPvJmCNVzHUQCCY",
  "key2": "3HRjZTTLebciSrVwPfGbkQZMorVbmd3CokiQ7vmDdL8Zf1ssJ898hbcE3JFFdXZcfLPssJ63Ge2CY2ySpYZyirwV",
  "key3": "Zz1w9c2CpsFoanhhojtX1cBr3R7c8nRB5nQ5ddxq35mM1nHnHVrfC9C26g7Awix3tsk4QcM8AiTdNLpsimJtHyq",
  "key4": "5tWAWfVoa8UJiBxCrmgyPEm8aMMn9xg1qB3hxdnb3wLZupzcCuumFCJ3xAmu1mW9P2MFDRcuwUAz2JZRt7hMzPc8",
  "key5": "mWhX8M6mXgAsN28HtEDUqhCBYWA37qhgyKZUTtsV4FH6J1oHxeSHc3WpMc9SmTYPdZm1CSjsuVWKWHYDvBydeBW",
  "key6": "4cJTZ8SQT8zSr2YY1vLNLSRBX2NcbG4ykWaguxwquGUuE8JUGvjqLtVX7NdMgwsTwN9kyCqNkcQ58nDbuaY7QbCj",
  "key7": "3nRiXjbD3TA5tWWP8a3M7D9Muz3aoo4yNYiNGGrndRLqn94f5ej5seCFearXVzbWENEipjNVDVxVNceNCUcut58J",
  "key8": "2k1GQccTvMVGhteyjvxi3vfDm6qCveePxwF77gW8yVMiNhcP8yi3eKbbVfjJNSaQygAK2kJDWQz7WkQmGtrHrhxW",
  "key9": "3YTcpexYRBkCKZVqKFCe1bmH3G8vTR33kD1AiGoqC1mTWrZ4HAEPF89pSYnTBAMZmaQ7ZwwNcR8w37mJHjsoomL5",
  "key10": "2zPoN39Hk9GWzLgE3ejE42U3wfRqq9JBCCcUL7iv6eMwYRRFUyC3zxnnuvpQu5raXzNr7VZa5KHstsWYP6TnApEd",
  "key11": "2wfWjej5gyJ9xzqReTfbiuBW9JdVkPY9BmVMtvWnjQrnxUuCftzubcXosPNR6rPYefgNcsu9HXQWybhWDk8YTGg9",
  "key12": "4XL9PZt4mNbW9z3z5pwiNdhqC3SUdMUXKA514veSuC63v8v26PAv8NsB6H7oS4R8tphRBb5sDx3KWRsH3HYbC5Px",
  "key13": "5Z2dP91ebvCCc2yNfyofNi5JGHMvifN8CPbav6uunnSM5rCzmhK7YvUzS1b3wjXWPEDxFtd31BvBRGMpLZQbasR2",
  "key14": "3Lt8o9ecx6LPAoUoVBM1cw8FLoKbqsex6nxKZaZqrfy8RnKXcpXFZsAuodB4jEo4sQLoRfFWTQoXzeY1SJovga3B",
  "key15": "4Mp3DQf1ahNBa2sBJd32pJdXvHT6LnyktKSKJN7w79aijNAxMK6aimVXivr5KWNx9E875H9Ft1EhoBoTqTR7mn9A",
  "key16": "4i1KseFHWLFskof7VspYegcn3ggSnSx4hKLQQH2d4VzkXWssH1d2ZcwaQ2Q6L29beessnFnR8u8TkuKgrbmhqsPd",
  "key17": "3neETjdAMh9b5WAhpm9y3eLKjCkNb8ExY13AtXeCZyzy4QZio3imT6Xusx6QdCodx1G31VJGQ8Ed5Gopwfaqo8W4",
  "key18": "2dkwAnop7z4LDyz15WqsqvKce6MSpMqPU9c1xJyk4mBHZPXQNdzXZwgDRHmpfWkPUoAXA5PdxFMM4x2f2gXCc54B",
  "key19": "4GZzVkaUfgWkpvB7UhZgH5jJbwBoWeFh13CHt6knu46XUwvzkXCGosZVc5NQAnUyfcMZXomD65jcj9WeiP1n8GSA",
  "key20": "QB94zkuSCpvyXbmjs6ERuz7Tw3vHWJ34ZDFva1Y5LYcD9551Jp4MSbiVUarFrzceFPFy75SrKnpy7HVju2M7Tke",
  "key21": "2o56giWrveGu9VrWtA68wmesCN4DaLPibnCef9MYQ9fr8NiqpbYJWojrKbzwc7ciqsNsjK3Xhzv6vbhPozMVp5wT",
  "key22": "5pYicuGVBGUzAxSwze6ymvNNfrWC1Va9aMrKMU67gBjnqVCTWKyRvw2ovoe234fwuv2nqcNfW8Tp7TBhiE8okmfx",
  "key23": "2T6Q5z6nuHW9zyirZNPogwzMFeYKWt4wc2d78ncsuUPR3wUVfRcUHudD7ifXgC8ZKMgLuczVHNmZaAvTQcwqFRDQ",
  "key24": "2npa3xMSq2PSJTMw8f9QwEbnbUsFca7ukHPZYv9AWpV8qRL8yfPKzqmU2PSPuqP3e3aepfC3RG9fTS7bdUrkXj6N",
  "key25": "3WWf78kug2CHCikBqSPLLfkzRR59XrA2sJr9ZjcTmyw7JPUwAqhF3SEJEhBpdpFoWAvu3cZbgpj8nwwWiPSpozdj",
  "key26": "3qVVQU8XH2SrRm57Gbv27G92GdYapAzZ1AF7z8SovHkFJ2zDKVBXWVJkFEL8undQ8GzTa17BaAt8skbezyPH1N2w",
  "key27": "21vxb9XW1XC572BLAeBiJRHs9NJ12jnpvvn8gqQnUBbAw1aE9eemGhfEe6RcnPhGWkqnrzD29mmKqjM75Z6mKtMc",
  "key28": "rkszgX8fTxo8goQmW3g25QmEuSG6pQY3G9X5mcPPZtuLz9SKfVt2SAMe5wyfrXg7ZNVenrvRWr2pTP8Xo2D2NLJ",
  "key29": "4pZtQM7PZUsaBJSWZzEHj5Q1VXEH81MZVJzVmcaPDQqU3Riy4Lg5xairW7aaBodvCEmP7HRhMxdxYYp9skPzsctm",
  "key30": "2nvZjcTa5dE4m7k4gaabASY6xPmKL9G7yX4KCKft7vRTMMr6ZNHrtN1UQJ7otKaaTytChHspMuDC1wmvqV5PzZai",
  "key31": "5PJjymTanyJcjviwpEAY172FmT61zoytZ8kF5DVB42237eeTEBjVnE97GCcvtaKqyoohKkNs6x51D449WbyAVvgf",
  "key32": "2R285ZkZqAkoVjsGY46Niy691iWQi1PsKcP3ZSgbryH79dMMvFU7pWE7pt9cLy1DrEp9KmBEoTT3oU9LYQPoj7zB",
  "key33": "3PCMgSfuWQ12qqAwLzRW1VSHVjMzvLnkXdfgKeo7QmN1L74F7QyM9xKZCnUjvLBK1MGvKHBCmW2kBnBVGntQcoA3",
  "key34": "2p1Myx8rsuepMc29khqUwhq29SxC5UAsooEvty4NHGkysdPRQgKjihPAx9Ho9TvL3ifRyXcDWPyZAhk8x6AakZrU",
  "key35": "56bxjFnRWTu7cVGXvZM9EvyGLEj9HCg2cKuQYrBJiAGXhh2VfaVaBd7vH2S4J3w5b2CwWShLPndDsgpjQETnff5e",
  "key36": "5aBLh5foisUvUjNctTNef8WiFNt8xMNijSzaN5nq46npsuHECtrbm2TEL63srySMXusY5ABHmnR2q5QFR8Dsga8s",
  "key37": "3DGiuWPTXBERWCuMNg4dq2xRTzCpqb8MQSesatwyGMeMPasiPhSm8tMmQHpRvKgs9DtUXYEvC34JR12yPututbnq",
  "key38": "3xwozireoezLkGmSL6Liny8RzwGwTJJ7Gtc1WC7GqDHkijP2G1iu1vHzdEtcebv1XGwKqBQZutsxacUh9RPj5hXe",
  "key39": "3gbhFTzVdiGLgbX3uwC3LH88Duw5wX8eSmvzwW4csvGqPzqjhoft5ZY1Q99KNSaYxaYYBYQp2yRPoTaAf1UZgGz3",
  "key40": "5nMZU2SJvKiNBt1cd2LuWwxSWm4K7EhouSJQ9Laqz9NSrcegjTxhLWCuEyM5Q29UsZSeoMFzTQxJVhPe4UDfuMez",
  "key41": "38vkerXNpuc4QH148RTm3XFRKdVRs191PFUamfd2RCddjfpMpdqtuYsZAu1tg8rg3Gj3kGrmcsAMCpEAaptg9hXb",
  "key42": "fGkMxQHfTyD7XTjuCsXR8YD9e43ePLxQ5WMR1w1cEsNNxPkNaYKUVYL6EBhLZk6RcPFEi1hePCW9a9N8V7s7Luf",
  "key43": "34KGq6p1xCaBsbUvRuQh2B5QEXjPoLRg1h8Wypw8ZsTUSVAaQgcLFJBkb3n7moZK87vyqqfjuGRezj2V3p1UPt9n",
  "key44": "2A19wtkh2igccTSfhC6mfsme8ERbY4q56sG2viqKtSpY6opZHouPC6ztURAC2sXinZCuSef8xra5jek1EgyBN3rZ",
  "key45": "nf6ERhqt7v9k3kA4GoZLPG6xasQRKtTUYXewZPkN8qC8sAe9pk76i8EW5n2Qi4SPb26LotFJWUUmkkSdb9f3Dke",
  "key46": "4Xdbuew5Pc7rN2TqyNgeTtt3WdmofcjwkvcgwQZ5EYYrLVRiYLRKNbNSDzku1PCw9i3WnUS3T77CuW9dxmG3uScr",
  "key47": "3YRfn8TbMHVtBm11izD4DMcPJTk3iJamA32uEsQUjuscbQqFAzwY5m8wFZBubVKs5fFBLSBAbUjpbDTf38cWxRde",
  "key48": "63y4E3hN1dUxnYiFpiYq2JPJEzc6F7rRJqkiiy3R8DbRJLfFURS154GbUMXeK6gHo7WLqJcLG1icTfRkon8QUk9v",
  "key49": "29DdW73Dy6JGQCBXxtRoKZJEpwTDvpo2xrJ7iTHa92uGvK1gcKZbEczDxmyRZYwoxZPrmtF1yakaaw5rDm6sCrFf"
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
