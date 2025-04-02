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
    "2xekNFg1JueyfxQhXP3xBquvxL7qEoxoK1PBbsFfnkhow7ZgeFy3DRuuF12fuYC8Fvr8RdPiSQtkU1jULk9LzPg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ant9JJwdx3hxsaSzsxKW9Yj5UZRP4jk8GsdVDUR1eNzkVNHEBBVwZN737tTyF5Swb4AJMuAN425UmyBdJBAezsZ",
  "key1": "4tq2kzoX61wc42iBQc4QsWhHvk4iXbhcGsSKRyVDSSfvQuoNWWzDbE4SZRFjASx6Vwi7Bx1zA3AhGspXXwRV9DNN",
  "key2": "5xi3LQKrJJCE4ev7G2gdjMZUsuD7pcAUzD9KKQ1icDvtmKDGQ9yNjqfc8prYcwfUTLx4gDzzLimtyj3jnAReRA42",
  "key3": "4ESQJsF5faGsrzniz6DMswrPJPhEh5s5M2UPzm6Nzctd8GpMB19yXcXNXHbheRAmdDhgaKeVMA4zsgYGotfAMH6g",
  "key4": "3GKDLd6ZAA4Jdmfr8SKhHqj6ZYdfH3b8EthWjgYA2w3ATxcFg8j8U2sMfCxDDmHWWmUJj34SK2E7UhNaeshtpGYi",
  "key5": "5vXQFMZBwNHUiKuPEnDXTYx8GBCkNgdrkVz83aA9CSBT2zunRMrT7gUGkwBBLy9SUA4LFm5s32YkNe8Vi5WgrPYn",
  "key6": "5PHLLDWbXGfiHgxCg85f7VFQu2u8rWrNgXFeYwXoAw1D4BVLoVxQxPTRDaRVz34ZCUDG5Qu2sVAhnQeovDC6NMBS",
  "key7": "2hRc9eiBQNXWVMWPHt6YmbvNixqwqPN3ydUmnpTsdeGrMJRC4pva1yiZ6UB2pn4uXZbJ93qvhMNy8QV9xGXaymej",
  "key8": "3gHFqaky6Mk3Yu76qVKsqdBsHyzzpVtDVq4TExckgQ36M8DqaDayAh87VoPK9PgMxjWfRkbXkUTZywY7cHEyFASh",
  "key9": "4DZAPs153Vq8ux4LktNdBbmG6ovBUsKn1tKJRiMCPo2yq43QXkqg6z7SUZvCt28mLUL9UBRdjN8TWxNaJneR5zhb",
  "key10": "3rc3WbQExWTPRxagVrS52WV2hR8wm8TYmbJnZtXJiKyfRG9s4zcB1oShBQCEBZTCqLb4KNhQqmeK4CdayR8bC8JT",
  "key11": "4NPBfr94C3tJT9NDBgD4ZximJjreovAzpFE77L7dagpfoSHqGJDPXQMLq78f4z9TXPBY34UgH1TM2mpNr1WGwW1o",
  "key12": "5b7quLcMrXzKGTuwi7zzaSbsZttyvMQqWJdv4gu7XCbV9nbmD84ufAHhkm2sxFhCZt1avhsGVziMmRkNGP5XVE2J",
  "key13": "29eGnkLm8DeNu7YhDWXbqw9a84cJ7di5o9dZSuAhATAA6dKgnC65gfR43zW4M6t5i31j2RmZPTSznS8XXhh5HUb1",
  "key14": "4Z12wGhsTepCZUFyd6RKm32vUzy3t2LsKTnhvRnXyoERDNEQAwDM9XH44T5ftHpdpDcVLigdtKcgCJJcCHSdm2rt",
  "key15": "62EKwacDEPh8vmEUmTFJWsT8viRsVtzXXKc3bR5WUqZ4Grae1HqRk4Zug3JPSdhp4MGDYKkk6qdfr5QqB4Dfg33g",
  "key16": "2jQZPBMh7hzseEsDMT4VZ3xmRqygeHfpZ2UTi9vEAc7YJ7gaVY9Gx6pLVtbzJnUYYjTStTMvrdunCgwxpG7hsojv",
  "key17": "5mR1wi638bwmafhjA4udmuo14dL3kQWjmx2B6Z7PhNfKAF91A6H292trJx3XYTXK5yvo1zvsn86q4UwFnbPzCfLv",
  "key18": "1CE63F7JvUWAHVJFhVbzVtprMPEN9KvN1XSxHvkR8zZvE9wFZgsMjxSYqPzMWHQb7e2GMqwh2oAFMS7A1CkCwZp",
  "key19": "5NHbDvBycMCYptvMAwoD4WNY1ofJDj29MQkNM1zZCb51bS6b58mLwHZSZNeTuBQfwE1hYSbPVriVtbGH84V9rKLS",
  "key20": "42H4hqKvw6FYgSGWaQrPxZYiBP74wzb4ZW1E4cvsV2Au6D68RNukgtZrd5xh8eqkcuMmyVJ6XGGLtymPhPcdwq2Y",
  "key21": "4Dzrp58GuNjtPNPRM8ifn3VUceSaJi9UfmP3Sf1WDtRTv9dpjufrvNt6MA5h4s4Jo3iDtnDmL6ybUdcr39tevUx",
  "key22": "92LTJ273JHPS3z3staYnB6yWBwo8cap4wRFpQNgbMwsVfHZtQg9MjetqsdugAMx4LQ5fbAdxDwcVff16eW1hYjg",
  "key23": "DkUDFMHRappbbwT7SNDdJSqEXkQMTBioGkrmCTgbBbGcPzu1WkJsqgTst5R3159R2PNtzRAhGWBydUYjFsBj7aM",
  "key24": "qbmQWv425JKxqQGZ7guUtvt1ndEp2PAWvuMovhtRFeMgwPpgRgSWKQfKa61TuPEJHV6d5kwmzF5RbAoiwdBW7qp",
  "key25": "5wNEEMqNCyvaD6yVccMscyGpduFxPpvWB23AEEcACGNYvxkXg22o6C5YempqRUACL2MZAvw9hQKAWH52srNMGtyt",
  "key26": "4HoK5wJyqzrUWHFYavEPoKQvAsVwfDns6hgmncV7AKR2pSA1cf7CJNGKREnj3yKuVseZYQkardh8P67EDFcyrKGF",
  "key27": "kxtdayhrHi95DyaYuFReekCzjGX7DXuubA5qSkyJVgFyKx8X85QXPd6x4gBPTtmcDQRXxUkFKbvpRgPGYtwGWnk",
  "key28": "3iK5spWZ4BgJYXGhPzngqthgFdW35mNRr7mPtby99jxiwT73jN96gxTyn7gVZ6VTEfi1CnDkPFtmyw2oQuRSuEzd",
  "key29": "2LBnKvBy3fZcQqFsY7SDH5m3CRJv9jtfZy2pfSafhf9G631KWbY2byTHLDjrMVzJQJVQDGoEhE5dPmv7fGT2D7Pu",
  "key30": "3ecP4g6dad4XCLQSLZhZVfa1dwjtVKiGoWYQamgK2fQhFNnjJRUgiJgqiv85kFAVQpHH8ZsgwenQM3JHgx1DVRyj",
  "key31": "3MCpdbNSXCiyV6CswwupJYPv3kqfrkehvqG9yR8ZY9jmk6kXov5UGFBBfLddy3WJxsHnufGiSGFDLMmAd31FnQq1",
  "key32": "2aarEsNEVCvmZ9puXMiBneTPuTLntD7Cuj5ffRtMFufcvyxaLQ4e1jdm72aY3SuPnMPTigSSfQPDUA9aWDeTi9qM",
  "key33": "2nRNaRYrBn1NYKFjZJbm4H3VsKqAn3QTMM6zs3445EE5qKkjCSyWr5tf2Dwte2MZb6AaH43TZervy7tg3AcdUaVa",
  "key34": "iVHHDW8zt2JcfTBe3uKrwAweseEcM4ixVJJjAseeQ6Y1BhSrMb1HTeCqYc6SrBkJP6Y6o8R9T5BkvvtkKgrvfSP",
  "key35": "2eC4ZDc9DBjp9A43V8RWaqTXn24xhkDruZxGkJQYozCEvGHKW5XP1FGNmWUy7Kw2CKgDeQqbHS8jtadtBixV8ejK",
  "key36": "5SsixRpThx28FRRqMHx4KvgW5po5qirsRf6tRoFt6BbrLsUn1kccTX8ro5fV6oSf35cJDjNQTUCqccwjP15iSykj",
  "key37": "4pSLJvy9wK8494QcLKMgPcjPYtURhUBV2HjGi5zR3X93bRMsfHHQXbfupYj5ESk4oyMkA5B96H7xYdrha5BHg5Ku",
  "key38": "5qnY9NXUSDzxE7tgnofThoJPr4PrrzR2ho4F2p65caF4s1Q77nSjUn5akDwwjkgvAdV5kvhqFzUjkzhivEUSj2eQ",
  "key39": "4mSG1PEao5yk2irRwzB6x7EF3sGHtVtZaRuyvvkuK7PXsMjtqRcXM1BAit2csaF8ABq5B1nLB4RRZu8JEPqky9D3",
  "key40": "4SutYZiP67fwUMPvoSbkgwm9zmUWGT1DyvS7LcKvg98Es2kwo6oNaFtSePDCiVaLdPkyZYi26oWP9h9qY2drBK3k",
  "key41": "2JjfBGmaqwAwXv3sBKnjwvqg9LRdoDFP5WLpxnPMyBA3nQjjQK1Y67Bh5aAT8qcgvGMwJTFeJckJMN79qnzjFnHC",
  "key42": "3djcT2NsBW8LHMh8uTMzLB8Q4BvoTTbME6Kh3aVTtDzmmGDpZHY6ieAUTE1Kue8cVZXqS8PcWDBPn6A8dbjN21p9",
  "key43": "5hb7EhgbS54uc6HcGB1hSqXi9H7pwG5v716nVUAoD3ofC5LPyB4rL56qnWQM2cXAMZ2vVaYgBTf2ZYBKofpV6HoL",
  "key44": "DCcXYgnxpti2D162qY2MCjPjDF71VCSPRimcFUz2g18cewjRAnmfxNQLtEhpyMMj3TdG8NZcvJSmexi6smiFt4J",
  "key45": "5Y8ZqWauSAZRRUAcHdJt7bocoG6XveeuGhKFTksX2U3xzK1jqFr4ws7GCTM1XNYjtBuNr7aLjkeAJoWpwHP3ToDq",
  "key46": "FFo9tiN8Nsoi8ScguZbKtMaYo4srGtwdpJ5b5gvFU9Sr4X7dVUJAHEX5D4BPyYjFfPZdnJQu3WXDkCMgT71GCGn",
  "key47": "5Pqdu3EJ6cecmS4Lc7y7FYmMmi2E2VeFUDYTyk6nkDzbAdgTRdFCwDYPwfXM8ru9FHYeADrLtjbv9uMmxTv13ebD",
  "key48": "5TU3fsENhdRS5w5UVH1NTYFzoDBpvhVbn2cHvsXqUTirfTbKZETzsuSVBDtqWMrgLUH8xkotVbnLNTf7onfU49at",
  "key49": "2FqZZSMt7G8cTHDraQbKJi1TpnHvVFJJeucN6MCP2MkrF6az6NBqCW3G49gD3nb1Cv6G372j2kka8iewdzYJBSUV"
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
