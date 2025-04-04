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
    "5XCN37oY4keg1dEnb6E2Y5Trfwpa9DQU3zQuUabyoSbuqkfk4TMZ4TpKcjk8Jf7Ye34b246JUVHpDbdDR2WBJCHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NBtHfsPNWdU7Pr3GUNmJhwGT6AbagTYDQJgBBC8Q2KEKQ7nuaWgVXzwKoJipv4Xr7A1XQmKARhczaSNmBwjZzi4",
  "key1": "Sq9GLxePt3nJMRdMuCXf6pMhtR2EhPsj9mSgma4qrkWbVgYCNcUoZqctp6bHzVtREn3nsj4cTcvjhnCwPLPYfuu",
  "key2": "ArXyAXnaZEAUdvbSK4PhnYA2Nr2VNDSC9mGMHXGjtPEHj32TcrcDiaEVoUUBRoDFdzGMzgdWXJ5wwQfT7jdZ8Xj",
  "key3": "5RAZJzHxJKF66yah99YSnG2iZ8uYqk1zZ8rvwVmQtGZMWfGNgQ1KmtbpiTMCNzLqYMTYRoE1wTSCEHVgD9BJ3L2H",
  "key4": "2C2zi8f85TDqUoASdCn5KyeVLBMKDKDcfoxFVgAGJTw4uyxRiwxnWAzKvCYh9sDSbYwu6FATuLbV9TiDi85E6Kje",
  "key5": "2ZYQDz2SmxwqUctdc1iqrcpZcXNKkYGW2oyQsJoM34rpLiQCxsyG1KVj5YxPfziZ6PfdybJnBEh5o97fXcdZdzYp",
  "key6": "idLc2fpGb6LwyC4s624sJNDXGmaMKrwGtwuZVzfXbZjXi8dV87g8KkAX1vrHoeg3ghSssRt6XHdeFirAkJskVCk",
  "key7": "4hneJoTrcb1hJVQiBiShbjCSq1JktbDy5jafazU21SuAT5SYJg3m8oQtFHyytJspEGALc8QE8MWLvXkhhfv4ooMw",
  "key8": "5DLzXYrJgXakyLH5QJAq42usfzk6ixw92SRCjYRknpWnh6E5jdSAff38QTPyGfMLahV6uCbk9mVThMWkUZZMN6xe",
  "key9": "3nCWTbF5T8s94jv573tRMyb4tNBry7hf1fu7S2Ap3Xb3T96heG65AjffwqxqGGCZw7QjNzjRLDQK1C9QidPUwo2A",
  "key10": "3eG1N9EHACMjjvcmtQ58nPHvXEdca2NswyHPBh77jR6JWVkVTBReMhhx5sMtXRusXkYdjQwe3GiCCc87C9Ptu9fb",
  "key11": "4C78hDsRbi7F3oAiHGTQ1YVBkei7uUb7X4Mr45YCnPhS8ziumdY1sPMqRhxiif8ZeZapWe8mU5Z1HZLZoNoXNahq",
  "key12": "csLbAKe4K7a8d9h8sxWzn7sX9hL1bEdkWhdTjRdhMNh6UhmsyzV1ZopHKwLDSUGjE6VRURnQoNGzggB6GAxMerM",
  "key13": "iT4rEVnskPa4okTGnQyBNBA1fmjHc9eJ5F8KB5DBXjA2xrvEMscXNmqtEhNNmcRqAd7cCYHUio7vK3XmHFeX5iz",
  "key14": "5PTbWS9iV6y2C1eTw5VZ1f1bd1P35iNTAtVXDZEkC6RAutkwMsa14tUgmc7q96WCJue5LHbz8pbRDMarCU3RTt39",
  "key15": "4tw62KixL9XiKp61y3XFfcNVrDJmuDw97VAuFBqq2DVwLuqRZiXmmPxnXN6PuRZmFFyCwY8Lfao3SNZYtZQa2SB1",
  "key16": "3vyuZWmzmueVdBWEcnU2y5BgmyoWtDWCgik9mrZ4dLbGxCNLhdH6sGzfwtpgpS6DZyb535v2omfmcheWV3ddc42Z",
  "key17": "3MPJamuiJe1kG2ET6PDeAJEP77oHF3LP2wbF5r1t4gi3Eez4xEKUdLMF1834gT3Qrv4RvadK46DzuAizLXNEYC2c",
  "key18": "2A5jdkKd51oNiDLQN1WpaD9GD2ERT4MEQehPLLfgSmMsv7QWGr3xjmHAQnXpN3X626bNjzoTLtssQj3GdMYMDbNw",
  "key19": "4A8HLkwCLt9kegsZhLt7qd9KMeEKxR33TS15CyEC97WkzNnkvErVH4MNdk2Y2eXpXcic7b2cVkDyrR9KNSvf6rod",
  "key20": "66BaAuDFcA8z21mFhaSs1KxQgxBd3BYBsruuhNraQeVh6KUcULEFoCBLi5JiZp8ytcf5bC4XBXJv3Md28SQpXHc2",
  "key21": "2wKj6G7sAV3cX7ZJmV2zUJsMHXPX5Kn9JZxLZ21srDinJJ3hbR8A8iHzXaapePUohCqHy8PkJjckf6VJbRjPGouj",
  "key22": "3UbDupiP1kBHLy1yTXNMGbJF8BmAciPPk5KuCair1pstUMD13JtJ3JHa6YHwk7gQqxDGgmYwP2f9wdwLMVpkR5Di",
  "key23": "3i14KAPLTL8KuhjUCFwyxrwysarGc85Yj5uhDJQ1HmFbRoX8LFcgivQvGRomefZCZG2MH1JdkVUieXNiMaQ6cjBi",
  "key24": "bFB6QYgS5ZsRgFJZCR1bzAPUddS4hTmnqZCGpJMARrXXyQvRzaV31K78TeDnb1ZXGswFczAU3Xasj4sxeg2n1kh",
  "key25": "4N4DqYhnDMBBhMPo1dv866YS7KVu3rpaA3bq14VgMEpRicoz3PqxRaZD5juYRBA5sz8fcjVCcgqug3dxHV6JZkrY",
  "key26": "288q3qZ7o22sE7HsyYsEZbuQXinRy1G1zBK8HNfhmBpV6BwjfoR9wWyWoowWENVA6zC4fudtuhdNvAwcGueSASkx",
  "key27": "4orUXxp38jfWJMNvDpxxXYtCphNEVqSa1EFagM1AER8cd8XC9dr7na1TEmJaSk3345wuHNHK5BtW526SrcY2znQv",
  "key28": "3HsyWduRCSENj7nJa4UsfNbyfyR9tnT8iw6RTahwAXyisSBiBeA3nANMFoHayfc6STZx2WNusGuaibpoUJFWi1X7",
  "key29": "4WRK9scxaGdwL7dbuGenPLauparWHEFGvLd8ikRYY3GuuNuMFNijkVY8HaMKU2cdqbSBwoWLtifhgTWvtMX6Xh5T",
  "key30": "4XPJWonK8YxZpZcWhz7392mRNCExuERkBdK1Jyr8mTobtdg1vxtCigViv8dmwMGt3yu6fLvvQDqJeSPDSFzitJmv",
  "key31": "5JvYzw4HyiXKNQVTFwLeAmsNon7Tn6cpFxRTCA6SKhbptwFBoCN5XfC5LJXiq1VSRTEdXcJcCC6jqcUZTrahSDns",
  "key32": "5P9beyAcWxitqzbSPfQvsFYm8yT8y8Qaw2Eno8x1qrXXqg3LW3QQ3WXp8VS1ZD4znCBpAskiCkf8RKwnDFTrTCWu",
  "key33": "5PpuMwsvcwSdgMpgX2xuda4bjsqtyju21M3ECfTJtpk8D81EU4aKbU7RrdUUWR7q4rXX5GZGoVWJipVy1xzmEtTF",
  "key34": "2szsvZ5fJhzVeJYd7wTLJLSWA69ofsW6u562tDX3B7VvSNt4zmREc7Cu16eontFx2MBdwWGuLkhLguaT8jyXFFsC",
  "key35": "62i4ZoQKthjubAxKx4fe5B7E4zSASuXvPnifJ5ELWqPw9hxkckRztceNkAeXYrYKvLDDhrvSP4iaaTXcw76RSisT",
  "key36": "2TDjKtVq2oftDex3t5jXncQpukaHpUsEtp51bZj1puhdcxrWVw4AGTc7BuKaqojzxfLCcCFEcysZQ9E6C6e4qNLF",
  "key37": "sCNLUsuV2PaKvZS7CKwLzsgP3NjyN2QjYLPQoc7TkCwcuAF2ViedaP4hBMgH17D8NJwLtLMq2jGyxDxi1adpgd2",
  "key38": "4UzpottFrFfddbsRNpwW2wF63BbfAfaca7xAuiaZfiSryGYawKh2SYCpB2Pw7FpMW2Rb2an1QaLrzr2ckixQFt4k",
  "key39": "2F9rKt4DbC5VWNatTP8CoBXDtA5PWsAVPsySaJBdBJRK2tyrHH9eTACwgM6QbuGFaSMgf6FNRGzSponAbdcsvjyf",
  "key40": "59Jk4qyA6xwYZ6pLXNN4TE79kb5RYAooq1YmsX1rgTjruCpehRC2NgnGqk8whXTpcFqY2RncT3KfM6cryPeGct1U",
  "key41": "4nV3pY3J9qzzJ3o7fCnasVkocdebrJ7HVPNQwpviaKvLPdjy3uuN7ukiRsG6WqGUuTe2rRcguobkAkUVB32MBh8B",
  "key42": "5PfnXpF8AJNFgwTQKQodQj5D4oanJGtqkzXZkdSyM7LEi5TH5LE3wDmt452fKakGhRWkA7WSQ72q8MrHsrLzSspR",
  "key43": "5rZ7LJYsn2U66XsLuZepHbaMdwC7nrzdqgEz8UrHM5v3MmNfDnwSEbeN1YWLMF2XD85QS9Hpc6TwDoRRNFgSR2q4"
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
