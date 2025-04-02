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
    "ky24dw7BnJzv5YAfeLPogfcUf72tsSFXRXQWYueJyJQ9CZraKMhkqzX5x2pzmPucgd6u4AjfTNEMqxZWH3LTJum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tBg9QtbfcbXfsALd5s78PbWGxt4mUyGxbRgYuSnZGvieNBgtK4ymsLJ8uvrsk8JuwMyUezyda1kG1Zk7amLvpHj",
  "key1": "56PqywD2ipiMe7hUpbuuoa8tKpuyB2BDPYnKyMrfLkHsTURjVpje2GjRYvpW7uQyJ8zVyj62eutquySN3d8JXVCD",
  "key2": "2Yt21gHrwdkGY6t5ELpV257cvPkuETwTHfPfQ4YfcRkxevMJBNuCrPQu2MzQan8WFCPFPGLCbkoAfCjDi5a37WcX",
  "key3": "2s9wz3rxBhY9sC6zNPA7W2TLS6gxhq8r6jPJDNJytpkXUpmYuMEHQnGfmUmh4CaDAX7XpmRjqG2Z6TqZZxtwHWPV",
  "key4": "5eAADC9iSZbQnA6uCGGFymEmUk3No3TPRp1hrh3aGLv6W7qhcs77dPyuR4QJHUDKUkNU9aa76z8ty4iB9agcsoUE",
  "key5": "3ZbXGLLv5pX8UbrLEs5Rgaf5aNQSmK7GS1nFMco9umEDVmFxkZSPBZAho67tDo2fG9koQqhwVnDKcJritEjgYD8o",
  "key6": "2NSf24K6RMvCdyDmGeutzaJu8ZYM1vvzfxeVGWNy9gachkj9GkPBH11768KpRMNqiBYQKfxoy4kGpajhmgdMGraQ",
  "key7": "2zJUh7k9E5M3wLBuFBFq8E25SbRTRzP9GNSdJWDuQqvoJ1rR1gdMiEnCFpMNoNvisTspN4P2cyUEpPA8rFeoPbJz",
  "key8": "2gmQJCJdDvWDzKJyFk8XGUmKfCoq1Eea99CvmY6bhWfatvURi5kfmhHmDm51Y6tNY8VBAwvoQG8Yuy3bDUsKFC3",
  "key9": "38wKr4QTsMAjRDnvQovurx4Zoh14BWPcn54jDvxpiJa73P5nj1CVDggjnCC5gCPf86eSr4Xs8BpG9fCuWmGrdKxR",
  "key10": "44DYcgXoKFuQFUEoLCBgMuqTWKSJ4NAwKFkaHTnSwebrgbcjZ1guqy3RMkAXCf7BtGdqmf1xYHP4PFGhutC174ib",
  "key11": "dyhVfT8o1bo5xCxcx2DrQFWjZ3VNdnCiJwYaEeubmYUJApfM4gHzBBNApyyUuMgkqpjq5eA5CPGbBs8jurdbbG8",
  "key12": "39GMQiQBt5TVigiSnPxTdkpqTDaT6hWBA7SV3e3P5iQQc7APeVn2NV8BSy5eVasUiWhaweDvobLrTFDWuANVzjoD",
  "key13": "121UNg8KFnJpHyZ1au3be95AEMXwP9HeUv8uGDS2BmnuzBxLd2C2djdco3RUGqbdicJtaBYCm123pbv9gqQdZrdC",
  "key14": "3958AgnHBdkde7sTu4sHFhB7V7GcRtZUVJQgZmx7bfp8YU8GfV6dCsJzNnyGBuKppr2R3zqAsymoSoFbFAXsx3Qn",
  "key15": "5JXrp2SikHDhS9B6N7ay6ZKCxa296s2UPHhzMBp1eHwPPZyxQg7K8hC23etvAdz64XdrhcFZNe3iB5ZTh1LcNwSN",
  "key16": "3eQhYR72nkqxi3YLVDkJ4RMDVbGB55cJvRWNo3enJcXqdX8kN6x723TcELdwNr3KaW8SSCozuwZRn6tSBvrNa1M1",
  "key17": "5e5Gii9AcWK5uc6LbdbNw5fsuFFDvSfUFwwG8RZzfDGNobnEgTvqsUwZwCvG7BLga8oQhxqucmFMet743jgyL9wV",
  "key18": "39V364N5MfB9vxp4YJU4dAegvGs4AoEhpukqqMtrPirFxhJKq9PGb3f66keiRMhZxoQQyCVkVrw8S7BUYNbFioAJ",
  "key19": "4xHxSHYt24q2akW7Pd6W8xfnpSkt3S6ThAzGTCkYi2F8qVFiabQcDG8L5qMEFkPTS6aq2CKToXFHMEQBMfZCk6w3",
  "key20": "5ymqgNgobuhbpCkWLnVCYNodoz6AkEkMTJuA4uafyTgrkb5KsF6WQMQrYmA9qMLAVCg7yHToYhA5dCRbQJgzamQE",
  "key21": "2E5BtYduFw9t26Fqk3QmZCnPNq72vyJTRcYP9i1eXVwymfLGe7uoUeDfDX5eBxwA2X5w9eJeqVd68gzPVyotwGSZ",
  "key22": "ETgNvUvNnw6TmgBAvzV5Kd6QZKzSwr6dvXpHfUqPKpFCWe8cdA298Z8qcaB2Krm4Mg5kn2NWqEmJDMQZB7bmGMv",
  "key23": "5SAi7MHtmFSVACMbKo1pmWSxZSsax25ygNm3fLMU34Z83HufVUmYmFzzDxq3TSnGcyjFAsLyzq2N8TUmdgQ2oDLX",
  "key24": "4uH6WzBHjwXXhGQzyqa4nhnPZkahzTSvN4ZiLMPvsYf3nzZEemhFBxdj6sENspA4z2z1pGJX62TC6ENLQix9ewVv",
  "key25": "ND2dvNtjZcor7oAFVHeuHh3SLfqugTjemWZWUAjG48VQLyvphgJeq8HhdFzaQseio2SVEmEwvnaDodHJFz8xjYP",
  "key26": "owwprvavH3XCWDLpR1oHcAaVcva4UL6m22gKKhh88Jqe6inoph89RieHMJ6HWiJcCXJ2kHVhVC414GwXLg3Rm7x",
  "key27": "3GEQYTvPTBCzaiUSr6ovWN6EF9UZN1MXx3PVgukC3LcBk64EvpbCba7h2bWqfEaNd5vZrXAtkV6D2zX2TrgmX86x",
  "key28": "Z7uM2Bbx6gfvgQ4ABLeGSxr8vozDCcQaHLzGmwnW7mgq9zPUqFxoprtwJc1yMuAuXrCrLDLAPTRt6tafhZRxjEK",
  "key29": "5Y6NbRic2KTogtybjwsDhma7B2Mb3xLiRY6TKyvv5NK6Mo2FtTVtoFgxdfS2V9Lp5A9xufjxnwDTFjCDECfjwAew",
  "key30": "5o9o1ztbBvTxB67qZ3ZESHwDJQx3VP9zzY6rjiA7DJhYNtsU3feW8eL9sUsa7uSPWvABpwcaqsWqB3jbrU5tSnXQ",
  "key31": "5EymW4mBimef5WKinNGWYoJrCQxu4WpWTn7qsCwosgt1veMGASByhapp36UHqwbjcmAC7pRCpwAAKHpkHbCBMc42",
  "key32": "3Ra2humNSKPCBoyTm8aYu7ZKhDSwbsQmbb88RowJXgJ3n8pCvyB56JEi1uBBp5o76rz6yjyoM36Fu3iwE25bNHYL",
  "key33": "6FE9LuQ8dceEBV9XN1ZCv8vfnB3JTeZbP6DZgVQ7SQJS5HHjhQDa23ENqKVPBRunavC8meSaPjgoy8Y1UdQBBrS",
  "key34": "FnGxfxTNX3TfkRoSz4VmVL4Dp81f2zfKiViYZRLaqi9vXWZpwkXjdkGesVkuQsvUxRUBW7GGZ21QKRY1YxYUFvj",
  "key35": "52emxm9bpegcqyAWrVtWETcyBdjtKGXjRLaz9GMRj7mojsvDveup9frNS7YWaZeoyppXhwSG5mW48fKjBc4BcxPs",
  "key36": "4adxziTS6yeVZJzab6p1JngyJtB7DGrmnqAqbRG1KFd7nZgD4Cbhr6kz1sBQW17AEzFKr94JiZwVULGneSEh6FRj",
  "key37": "46wqhL6MYNsJzUcwSY7nfPS4PFp1XBFEh3BqGYy6yVvRkVcqrpfL1gbST36r4FAqjHKwy1sLGXWnwRpMi7wgqTto",
  "key38": "4UbgnejPFnanfT8tui2eAv9x6LfQWiZXSf34m5rEceCBWswLokSudGZ91cZ8wLoAmUSfJR63amxSkZ5444X7yugV",
  "key39": "67oNhsL7B2YNQt3DR6PUt7Yg7DLuLLcsYn8wkzqy1j6r5hBqzHg5LxLmFKBNDSS1yR3xRGLYjGgaGh4fmqQ7QKbr",
  "key40": "3NJosyptREsz2hjzYyzzrh7MidNEDyY81MJPvxq3uByXswhEGWG6qKKxKcJCpgzAUjj5aWP29MdLZYDsJyWGi3gk",
  "key41": "5ygXLMYhFDko1P922itoEMCdihSqeaPjFWCZYUZq5XTD3rdCLA6RSPzeubABejrnd1i96LUWM7uw2QKYwtrmPLBZ",
  "key42": "7ejCwJR3B7NS7uX2Jq8tKyiXTQoRGkwvtimzGtUGe9ZDsDQpXaQHVtJPmwAH1apW7xtTckbWG7M9NPsPY4p6PSt"
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
