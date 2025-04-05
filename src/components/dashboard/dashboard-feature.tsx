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
    "347AzjkbeYScMLuRV2oHTyFSt7EdUksdsLVrCon9FPEALiPyCWuiZNxaxWyTae32Lgjdfx5KH8xJitx89xE71owL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ejRqMBFRzK7zk3ACkay7S7CQTSD31qYs5bVWZRRBjUzPoupQfkaotzsnENwVJvttnDyiemUW9ggxHWeRBjcPu9C",
  "key1": "5Y2nkcHN1YboW6PEZQmt4nknBsGK8kfPSuN3B2Fy8QWqQeTNSvDRRUFXtY2BsE5TwrhrY5VjgAskpHyKyu8MMJPE",
  "key2": "3t6jPiLghbENSkX5ENLVFaF5p3Nkux1faidLi5awGgSJ23xdupi2pc72icBfnLb8R8ynCA3ZLNjZuB81sCyzbYAk",
  "key3": "32VB5SKyR6LSkk3DA2NtonKj7HYAcSVWeQjrmwk1dCxtD9w5Bbg4Ywmo9uYigyQr9V2MwbsMzmAEEBeyY5EHFi1g",
  "key4": "4NgS7SGD28fRDynzo638F7jKgybDbWMnWVguc4yPpGjM9fjH2UNm54HwJXrUc5ESMww5s4QK9EKTZ4H1GKLrpnHP",
  "key5": "3meG2XH6wSPLveQCQNNCb1t7oCZM6u9bFxWz5cz8AYyde8Usqa9RvkMWpArvEVoYzUFVsnqNLFrLTUFgjBJVy9rY",
  "key6": "LpMPbBwDxSmXRaWFeemHMpHV87xhot8rvLpcMqbvEDHkszvtGX4iDmzeAesnYdYCzxPeirki6y4WboHrAsBcjYw",
  "key7": "GV9ibCqLjr7ZqGaRzsepVet1szLKH4h2q9ZiHYoo6dB18BytcKrUpzwiN3oVqD5eJMSuNKsBu8a5TEJFZeEc3YA",
  "key8": "2ibz8Dr6pCrmwWrT1dAPPyftF1fZmpPVWqr6NiJ6Cwd5oR2oHy2R7WEkC41KbDDuCBVdnazr6F8SiPEVGyWXQuZQ",
  "key9": "5hXXBqKUteVQjMVVRQxB7nudd5sD1ZzSaA61K43d9mn55NKhrqygDGPA7pADSrSCcX4HsMhzrBVFhXLDafqh8cAN",
  "key10": "4eaBKGpWByHLXe79YmKiCmx5g24WooWecbVAUxwRJqzDuLa5VPD63bzS7wNKCqpPvmBUSFh528tTBegEgZSfQieS",
  "key11": "2JCUXbtgSW18DrXo7LYngQQ7vNWf5iyzAWHz3QSHEzyLpAj6uoUXKYBhmUVFsrF93Qs9MQ65QiBM75GwSgqoMWHK",
  "key12": "4kHaJzetW5ua2gEbQGuAhKtv4255aC6E6eC54oVs2ZYNVeSvVRXN5RqXZwuKJQZo6Hs3VnNZLscDZbDmFusk27Gp",
  "key13": "2pfWKfKB1PVNSHRTQqXRu6EnVsh4jkEXdrU99bzA6P6HmJRrE7DdahKsbNTmjZtSzrNzHqKrRLTbLzGZeEYruxWM",
  "key14": "25uXLx6vq9N4XoNKXasMYJdd7j6zsuVRqKATfQerVjWJUuVx8UaP5iWQiZf1H6deMsK857j7uqKm5sA9D4zRWCnh",
  "key15": "4rHU7ht1eKQzkBKebL5mGQ8mH5JN56M7KcYo1J3JwMnLgpKJGksaYCHSdELhXwSi2pCeLZbCNat42MjJhZ9FeQ9M",
  "key16": "2qtzHWYUG9NVSAAurJJe5Ax5sjL2QfnszJ9Qns3aaW8bbFeV4oWSma3en3AxhyNFFBPMdvGKx7V2VzjVxipy4or9",
  "key17": "62a76TRSNUfUh5DzPgguBMJzKhcR79hQ6nwn7yDckvqRtyV3PapA6fa8waRDNkUDWuhcBxpUh1W7eZi9KeMJH8kw",
  "key18": "51LszFNXxyG2mG9tSH6NHiniGMnnZGpx8BnSQnPM9QmiQkB6S48JSryyYrFvZA25q2nYYvpaiQ3MCBRu8dMnZBPX",
  "key19": "s9rDGZVorMUNqSE6J9qrUUtkuuMjdd1p1fs1G6by6arh4uKs1xvgf4Z3BFdg8D1af66NuG6bvjgq2pPiEm4bX1s",
  "key20": "2FmwNBDWZSytmTYssXp51qSiwSVbt4DJXXBpMQDnzbbHHqRfvrtkBDP34csFdsMzktZ8WwhaQXaVndpQFbMQ4ezY",
  "key21": "3Xao2aBhrHVDqWYHeE8BrRHB51yg8vjKJsNhG7h4Y1NKfAiQYS2D5hjJVWU4bDhGw6Y7ve9iyFQgyDJbRiALHHVk",
  "key22": "34cTM12RnyRGrhM8z6rQUF3BCM7aRGrYrj5GyEw9n17AGazJsJUFUEYEovdXiaiwKh3C5zmuRXbkn7ZnT5iFsn7F",
  "key23": "4VTYQbiQTjT1sGTWYkv2ypyqxwRpRF46gmURuJEnQDW4jxAVvVAhj1FhoAb5vTuF3yJLwxHngr3RWg1kYwzqvohu",
  "key24": "UumpxZJTV3Kh12dgbjameQ8M3Coo8NbjmhpSPgTP2zRqbGpJi1DWDdxuHGmpthGY3r4UZVrU1unHPoBitZFKF7L",
  "key25": "4tuwAPW8M74XvgoXMV7ZDAMtMRqBWeHWJbmuj8JwvuEMJA3udNWDyDWPyphtHfVmsJx2nC4W7iBaDX75WvzwJSXM",
  "key26": "66Gh6xZoQyzfcWy5Jb1yxBoaLLzUTWTSGAQjqmkALL8x9gVhYGuuCS6nGL41fixR5FcPWvTePP44R6fxWW9TDyFE",
  "key27": "rfwcLmtnpWEQ9MHQ9CELwRD8xRcNHBDovyo3yiEtsuRPnuWxXSvet4L1P67cx75RHJ4msnUK5C8e1LKqS1VY5Bi",
  "key28": "3KXFw7gnNXeXpp62LpSvD6zS8xqwX2NyJyZchijNoHZGuK3vcTjyzMznFMVRNwp8zjsyWbjzgG2Po3Gh7G3QJMiq",
  "key29": "5PnzszgRGjH2pRnY74LdkaV75j1D4UvVEQDV6zXXWsANonWHrHetvDUG7EHbxFDwch9tmMTG1qDTKBYxoEvEdzti",
  "key30": "3F6GCshuQZbXT5xD9c5rFx7VrF53JZh3etHEpa5qAZMth9iwefWFZ1vRuB9CyaczvhWUUaKhECJBMXKFgUn5if4Q",
  "key31": "3fon7NNPjBQMXUQjgoUXBi5BtmRw42XPN8zAvNqLbfXPcznS4LpHnUzzs9YGCRDjjwM8C4kguAPrm284r8ZJMddj",
  "key32": "4WWAwFYoayjvzHqWTP51vAVg7M2XEpcrChDdQU7kdjKiJc3QuQFXEi66mzbsffUPchdk1UmsspoRLqyn27Lj8kmD",
  "key33": "2ZFqGvgr7dQAGGFNNqe2TvArKVkwZJ1PkGjf9iJ6Z37921VuUfKG44TR1D2fNjgi3s8HH2jyzVmiyPJjm2CgmCNP",
  "key34": "Gr4G21VGkB8prm9zj6ZMypCDnwZ4B2mLbeD5DfKdxZVNUZU9R9y2SvmPU5HgSFY6q417iK5jjWB8BMDAD2xSMg4",
  "key35": "5Hg6jHZ99KxFvuKiVpBrh36vF5W7eirBebnMAGASjc6mkG3CZhywpyoFT6QHhBKphvbTyUGpNvzfVoZrfKHd84Rg",
  "key36": "ea4uUPCU2CEB8KFRJx84kkGSVeQWsQLbbfPhGS5DGoEQ5HUr4km5B67H8YMxmcC3ZxyvCgX4Vu14nhZQr1c7YdT",
  "key37": "wAEUdEEimsPQY3B3EQJ7X3xgAJ6rbEoYeRJVXgq3Yy4RZVzXXZdQdZpatrmQEs2GFAE4Qo9nqjk5xbVk8RCf449",
  "key38": "2btA779HM9CvNf5mW5YqDJqh9iMm1VoohXXv1e9Spor2DoVfaQ9CHp6Tna9DSUFnXDGvjXyNNDCfEVsrv2JJYYL1",
  "key39": "2g8jtpc5dJxQU9mkBdHA3rQZ3ChTiNcYbrQcvXbvpNFMtznxJFxJ2L5qyrSbPQZfMMQszA6qgui71mH3KGcC7cfr",
  "key40": "3aD8u4YpEHACLuU4VUjq4jKnXHmzG16FdtzsmvEYCEA6e9tmEn9ezSicSTUwL2ZChVvAQRCDPenV3C1ak6o75CR6",
  "key41": "2rMoiLy5LcNmE5KwyMEGUW3h3zRjvSu5m7bnXCWL9X9v1cAka1RHVAcf4DGJUJVn5omYiBEZMbEedxZSzWzsncXA",
  "key42": "35VS4uQJpzvrX91EnFMr1gab8WLL8VKV9gbsntJB72ErgZwH2nCbKNpo6tJpZQ3CiY7enQna8mUNauExxPAvmRSL",
  "key43": "5qgv22Lu21F2xojbFR9WihT2P4w5LhTadXMw1bgXcRL2chAbGAQ3NRmteyUMchuqijEL1VB93444a2D2Bj6iesYp",
  "key44": "3shrjWSCADq9qTXR1E9PpbgHSc5NjtbZLYz9oXUpzwde884ndpAcJ9sjac9UvZCsi9cQgafoch9zMZaK7KQraoz8",
  "key45": "3UDGJZdvdVrax36LL2FTwFZjwu4aobqMrMZrMbsDydwrC1vFdW9Kg4XyWzVAk1yyUv6sVWeBfaJdCNGCwQDpnZtm"
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
