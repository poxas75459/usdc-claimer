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
    "5fcoX9F4N5W3V8xnnZy2mRSJZNw5aMRVY5QPAaWWfHPwBbAfGi7WrQ1fdQduPXWfDYZFwEkWnKSUABfnSs5pJLnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tBj1HbZWLvpBr32sw39anhYdBRcsmkqAn68PTVmh9bqdT5zfL1FEedBudHP9XpD7UJydPY2RS3HWghSXDAx4RNa",
  "key1": "22LdJe6WddQgiB7J9AiwuNRc9QJKhgVztvA1jtfgEBmrQcY9wuNgcFQxChqv3CBSVHERNCbdbpq7UqSi3VShh52j",
  "key2": "3Xp2x3AkJSCiQVxZgiJQiuLM6sPzxUQ9fdAmbd6NXRBpbGXZMEmrsCURKCS9iWjicFHmsMMYBNDCwkwwe6XRNTe",
  "key3": "6BSVeBnQgC3CN9NYxuodpYqGvPAsX3FMLzAqxxB5qj9ShpccUDwrPVdr7UTXDVmwSSdXwPV6EZRE8XtHuwYhnj6",
  "key4": "3cX471kcoUUdz3ydtQNtCN8F14rCfAFpepXHryu7xDikZ1MKm4B5ENd5kwtXAisSvNArnegV9Ej4QdnJyGNNUvca",
  "key5": "4bZdZRKt5wqUarPPFZPm7ovHAdum1p9uHn6vseUvkz2UoaWp4AqLCoHMse5aGR6Y5y7Dn39c5JGeK5ZXE4mBVnhZ",
  "key6": "3h67NUg6BwAQEmNKQdZSL1D9oBhLcgHxeEL8gfCzxKxCT7nAxEYgs8wmQaRiP3sZq2w8dUXEnw6qkGXLJCEpDnxw",
  "key7": "XoyuBkGSj4UpeFUkmayNkiqLuk9rn2osv1UWAJdmsqoA9qxuNvYLAahntbKrmuZYhMR1i8csHfMfbPPdyzjSxss",
  "key8": "26aDPa1AC1nXxAS1rtUurdbBtH4WKjkbY8kAC2YDjb3v6VNPJXGXXFFh4eRXjNL1sSDAGvYN1RsuFuRuwN5wwVT9",
  "key9": "46KcBRnzdpBLzJdTN7gng5eD9LnMZMAyoGYBf9jkq5c8voLxhHU8uMHqBw3MgTBLhC5HZGdD5oF4wBULU2PxfjX6",
  "key10": "3EJXUpHPp9PFggT8jhAB7sZwjrT81vbD9YFWSToTBxJFGwoDXNrV86583DGDiThFZ6U9CKyu2EceozGvYKsqSBdE",
  "key11": "vaZZf6CtDRNvZ1Jp15338BUZ3L7Mdp5RPxq8SunwZ4h4mA51rmjVZ4v76PzSEVuE7w9pZTwFfqGKzKET9T5fg31",
  "key12": "4jB88P7Y5steWjp7EeEpg31z4sASaWEf7cUxfxeqtMsSaNXjeCNxZooyfrR9XWrqRn8cn3YN3NQjpY2uL1rPdvGD",
  "key13": "5NvWQN2SBXi9sXXUGoimWEFGBik6y4QG71v7GQBav9HD1yPRZzw9sbRPGGu8jgTMdcF553fpFcugSVDwErq4b1qc",
  "key14": "3uocsMrDzGvyW5WTwCaMSNNSiTFd8u4Mr7NUVuskBJ1xT8JhFcNEDWcKauh3q84bLr1WjYRxMiy2aNAx9qZpWvyM",
  "key15": "5NnFpCfyrUtNYZcjHsvQNqFatKzAMSCiZK7dhmTBzUv2EUcT7zGfjcQ4KnSmvgJUWsaijNPh1CEtzdTDtKM6Snn2",
  "key16": "KNMyyiwSNMYBsmi8VixrqR8iabkVksPa3p9G9xsXsowYSeUeZgGR4qKhHyMSLuq8sMxbLPAbK339vZqs1bKzMZ4",
  "key17": "4ZpFtRZxhR5bfDe8wHxuErUBZyVsEEx44SBUac3cuqkEun3snHPyxtrkapDAQrKkeGdQffnk3pM14yxVpMtucXTe",
  "key18": "4RPSbtWM7PqQsNkgU7wx5GFJEKeJ5eBG5z4Ejg4jmE9MQstQboP2SvthLdmGo6Uz4hR17DrqqjyYDh9Eo3zk1nYy",
  "key19": "4wDAeN6t8pSyWd7nMriCSNedJjSoGkzpbPUBaL5uCTDZNM7WSG69AJcS9cMksrF4J1bYynTvSUUJ81U6D7EDRNjc",
  "key20": "3btrEYe5HJhiP4Ne8prkMXxh4Pj29oChmfGHY8D7dtDbB7W9agRHk1yuc6h8dUiQBLTX5G4qincCpuYnNcD89uwt",
  "key21": "5AqfqgjZPmtMN2vXoNeLUXDHtFruqJ66xVTYFkkVC748y3qt1MYnQYjdqBK6dghUhSo7MkJu2p77YnVeUksRXATT",
  "key22": "4p8Hubm1q2TEuE7T15xyBSxFV8yxLWD4jz7oC7ssRRjWHD88RcyyMmPJLGkM9ZUyMpEyRAYbzwaSGrCzA4brW62J",
  "key23": "2KvcCn811VUauQCLnX1X8bkwHLxVVwhSFupdvc8Xqy2ZesRtmKfYv7ebkDq8w4oZQ9LxbpVt8XymTPLVcxEnEs7J",
  "key24": "RHi3fY3vS5idgaRncECA6wFkZzsmEagWpp96J5mRpTyCJAVTrUFiRMS7MfR7dM8skqBBo5y6iGLzLDHJQxd6AZP",
  "key25": "5TeE59ZFGBWnvNU1AffLJGSJbWCTKJA2tG4YnsKfae446Q9JbfxcGkfsjGG9jBr88wTJ1VVgLPEQibNfzekhBxLY",
  "key26": "4biTX5tDxKjPDom3fN4CLPVDwE3SNwc9VdKJu4FbRk4DR9546vqTMoo5i45uFkQZ3tMs7cbE3Jwq2wAJzMKCfcE8",
  "key27": "VLbxT7y2Ze6TatBgx4i1YUmpjBLJWA8QQfhdxSEpEYsKNNrMydWZDH7Awoom7UqnasbD1gERma9QM2WLf1iPTkX",
  "key28": "ebfpvFvrzvmJ6TWfWCrqxzMrU8ZckEDHNVatDWrLim6D5P32mUfWrpAe5dGTmyPqD94zEF4Ek1aswryFLMyqt17",
  "key29": "fPRVdusauRwStSe8zftw9grLJTG4bSfkqqfEkbcZh4qwgL5n9hY7S8g65J6mpj9wUR3q9CvGS7KBRZnVc2RZm6L",
  "key30": "4WXAUrLbJUZUuZC7QugN4iZ1U76SWAZCkPWSrytZ3HrPeZU5JG8xj9LcZ7rvAH2GjcxAkSfo1XHurbnc4oWuUKFc",
  "key31": "57FrZDhHmHgqvDUqV9KaDWH3KW6GaQRLc18aYdKJL6wrwgXiEot931aU5Zjmcippcz43DBGYuTKEz1nseTZ7e9QE",
  "key32": "5cmaTyWNN1QQqiiZhEQJGdwMeaGQzxBZJxYzqquzFf9SdZ2Bv5ptqdu8ka73ntY6nspw6kMRJtG9e4myvEU7KTNz",
  "key33": "5vM63EHru7eZAADa7un6VJz5r4VfpU4i5zm6wbpaW3ZpQyGX9twXbCVMwr5q9B3rfoPHt3fTEJTbyuaSBjdz6gKp",
  "key34": "2Jfd7qJrhfaRZtyQ34se5Rroi7ToPTq9AAe4StTiJWUcBbzZTgsxs8UU5LubYy88vfC19ef21WFzsBwvrCiS3Ywi",
  "key35": "yKMdVnwChBdFA49faBpahSn2nqZUAqf1wgGHo9UEpvrjozLqdQ6A8kmKeUge8VheGKyazGVGfNvn8Jh5gp5ajPf",
  "key36": "3iPKBu14FfUJNVkcvXTVRx1MLtg9jPt7kapwXusqUrEqkaj2o2p1oxKbFKufBKvYFPp6Zw9h4iUFrRfBtdzHwrPe",
  "key37": "3RX74KwrXHJJVtLcMxoqoiwRCaBbMRnMotEqSXSVyPhYQ8VFRvyQQEQZqV19GsMs5VR1tSP22GsjTj5LjDc9af1k",
  "key38": "4qmuyyRdg56TMNwNnK8NFCpAe6JZrf7w3iPhpZNcLnXPHLT1ZHkWz9TF3yWh13theJjZAFBfxgrfAQwoDihbnqRW",
  "key39": "4CboAife7bB3KQmesAo92uiXed2VzntSjnyzbQQu8FNWBAGxjv3a9w3ZeSraeZxcyrsBrbKLga6VM3uG1gktTo66",
  "key40": "5BvMpUg3ea5qDfxnNb3XqDBCkUBA2AuSRmrDBL2cia7VVDLF1jX4F2Qn4rNNmwdw1cnbyWp4VZEznt6gx3h48PYt",
  "key41": "2UfeCaJr4sHYKxA4bqq3Wxa8zmRjfSKcGm8PzJBkNsfDBduJ9LRXj4pGi44yEuRGb5kEa6ZqNjYrUH7D8Uc7vZda",
  "key42": "3oNCigJmSF4wnrDqnZa19xPxXwbSte75Qb9nJFR8ZPnhDNddV3wbzMoVehtBR99dpatECShamdnyT6PMtzGeU99v",
  "key43": "2ZZgei9CvDXbWMPab5nrRwgxNA2T85xwGsQERJ2dH99yweFQSP4GBUH2aQwrZzgbRLxGhmnyEnJZV4Cjs8g9Et6",
  "key44": "46WaWx9aPLhUMdnSsKc2AxaBcpFPej6mNtbKVkWgYynYx15xCZCCCUnifRaVNnj26FXWgse9Q4PNc7QEbCAWy8wF",
  "key45": "Q3JSV8NBXQcvatZHSLFKG6RXh2KBpnNYkZQHKQV4hfkg4UQYM82Dv2qH7A2kUM1WmXJSHtQgcasf2dYTK7LtynJ",
  "key46": "DjKinm1QBhAiTrSGw76NoKDUi2bomL1bXZXx2JCrDbkNeyDH2nBk1NyUucXyR8YjzrxLAPmUNUEhqdZM3JsZ9fV",
  "key47": "3U91unpmatzgkWhxhJfCpNdd8p7QZ45nsdU2tcwTPdNiKBCEsezJXM2hNboWWXB3zSiEABkm8qr5sY7xJ9Csm91w"
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
