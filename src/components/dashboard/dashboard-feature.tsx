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
    "2Vc8SmH5Tva8PxGfzxzd4k8mSQVNR21LczAUbcDeMzru26k2jjZnEnwH7DuGoUHEcowFwhUBtpL94gvHXhnx3N93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yZSeL1hhhYCzP7uNd1mEj4f7rFnHmnqMTqrxVD5Rteo793BWZNFb8jomePhPHQfTJdoY2nPzd2xAV9pF5phANHf",
  "key1": "5QffqJpxd7yR7R1865KmVATrmMreMYD8vwCM8mKAaxuzLeTh5AjJGsdcYM9mEZ6fmwmH6FsWSzEubasXGuvpcc7R",
  "key2": "58kgWCGPkd5qYTFT2smampspYLL9DZjajhEvm1piqqvMHtyoZoWGFd3PuBL4HmDcXFoctibHGrh9CE7xDMZn6cPS",
  "key3": "28jwGcQhEARJp9EU7LdaP4M2dEDG8xDWZD7RYQhkdtb2DiNDPSPBgiowvdMupTLMEz9h2PMzS37hHUs3hjgaRrpJ",
  "key4": "4cyoABQuc4H8cL6f4FKouPwsD5sfix2JrG3xyft24YV7scquNccrNqeSaTj9XGz3oyYnSpjarMRaosPqT6AHdN9N",
  "key5": "2BNRBhFFygk5gWm61tmuyf4ZdwmU5BAfyRptbGTfTdBHnJQs2EMQg4ykgXHgFsw5vpWXGHb632KzugU2nSGUBqzy",
  "key6": "21jNS6AViVpMX8Rq78vwSg38FCtjWvvngpnvTvgLNf6iYRob98w4rtBAGGEyTK4YjqRT9GJbhYMCMGfUFmwJKCrh",
  "key7": "2ccy2mzUXpXEq4CGTbHwJJxosSxdL6nwqsewsS7jayEGooCZcnE8rjEwf5dsYjNZ8UuwDmPCumsdTYteX32Lsxn3",
  "key8": "612BLiChRgbYWdCWyeUUS3zPs8EcVZJD9inD7QPhvkMXa5L9PZwSKaacdAvf2815sFhBEfhnTTTjJCo3JWEDM58y",
  "key9": "4kuFG638Ehr4ZB5zVZdbpgMtiuxLCpfArWF2NnMDQRbkL2hkQ8W69kSmMq8T3uaaYVbfzBrMwme3amAXDLZn9WF1",
  "key10": "5G73ovWJPyb6QCUSP5rMs1pfQGPNutoHctxw8zddYYeg9kcbjQNcrouR9r96aXazx7KFx1vod4g2kb327KcX6SWi",
  "key11": "2sADhheW7hEWbNi7tXhtBZku5McLa7YL9bj96tmQfTKqZWSRTfoJzh5HvdieHxGA9MdhLhjZHUZFhkYqveqA1a3f",
  "key12": "2H4XBBVs7yHjRJrDZWGcYH3Dguja617cQrRrgVz2TSudNWAc1UakX5MgJxNjcUW8rAzb8Ad8aDXZ69dt1KvyJpif",
  "key13": "2QWdMUNqtzQoqFK194nm9SQSZFUGHqxWJccjPdxi55WXSw6H4t552MhXwx4vUBS6DfF7PHSHb46WSr61n4hiGbJP",
  "key14": "2Sf7DNT8NKZ2e5EhM9LWUzhusSbaeVZzGu7YBqDhxReDtiHec5RbM7g31m17HDAx5XCNaTEpUFSe5VhZNvNDRJsC",
  "key15": "42YQ1QmHDHAyuVwpnDNr4yMffRgoKbBfsAQh4DfUpzZUN38AwEKgBiyRtvExjv3zsYARXZ4dyrBEEoeMGguysrCe",
  "key16": "5B3xSzyihR6Un2Tc3aEm6weSvqNp2crgRza4n8ZLspCbYUxPBT1BqdomKo2AK8XEcf9MVKBu2XUpnuNmzmNnjs5w",
  "key17": "31uwRVs9zx8ZLfyWKCMHxsNPBb7CvKvgV138qSoM8iRvwwAQVGZ1TBWM8TKogbdLWY5xxQ8JhBi58pjzDak6ok6C",
  "key18": "2U7qaR27NXGvG6aJCX61K8QcUcuK5jGxGdxcWg1b7AktkAvGbcG8WJCmbGUnoyiF7QCMSCD6FpjJuKaYjivjXgPb",
  "key19": "5UvsBzQPzNdbYdPychGSATNRT4HhQZVJZ2t6o1S8hTf8Vfs3vA3y21qdEKTXoGLhdBMVdws6D72kwTnUDgcrm6HY",
  "key20": "62pvpzZYG8XoDFBWjokHLEK9WJbSR6XUMtvzSVjb8dWHmo6mtBPM8SGPjQTyUHVTEYJNQjiTJzgAmhUajtizNk7m",
  "key21": "2x96F69dFFJYcZR8PGoJ3VzJYQECXVLUJ4bBAjMtxfmWYLaVRtfjMKt4oewKXXRSeQ15HBZbXhHyxerWEuHeQEcF",
  "key22": "5e4dzpTuXZzqwkBBjwHQrkQ8QHgXqa8qr6xjhCbsLDb6FBBi51aqenTzeF1y8Q1pkhCwz4U8PbYZnF6W8fTGcvDb",
  "key23": "8V5hMYt6VQHHUjVzR7jHY54XsAN9wj3xfp92AtXnFnixAc63HDago9gfPKTmnWxTwdigBrSut7quwDSNWzsXRbB",
  "key24": "geUuwQczhigJE5hSw7uwaJ8zSBftmQ4Esb1rZj4XUK4NTDTxDxruqh3pJpwfPUTQ2pyBtTFoZK4Vvh9aLT2LEt7",
  "key25": "22v81BkmQy6JjYBPn8rsmo57hxphfruuxFSKfYBsQFaBeqghN6uar5HMksvVZGJgFsG8TRuwKRu6t397bsVFu8qW",
  "key26": "23SzF1WJ96Co8Ywc6EvV5SgeJ7woT72AyFe7Hhy7HgVifS2hLy4yfTVr6ky1SYyRSyGnu3MnMZdrQk7qBdpZNYHm",
  "key27": "58jU6TCDPeLNjWLVt8zcJHt1rpG3pnrbgHGSaGm4RmnJj2aRznnnrCyyAJcfhogEomJaPqAyc7DqEdGwHsMqF3Fy",
  "key28": "4CRyTo8Bb7iCoMH6zdKDyTAFmgdu3RUPZn8UGVA7a6L3NrNjWZGgLmE3NrVaHzaLyWVqyLepUPWJhPLPc6PQZQmd",
  "key29": "g8ycc4MXuCPDQmQ44Wy5tNXF8BChXEjgEbKi1NEwCmCmGZ4nnGCxWPqTfaDVYJEHgi17Jxwozx6bZKdGuXart9i",
  "key30": "4Mb65Xk7wxbXfd7KQqr7Uu6EsL5JsMqGoPHsn5Wz3DRVg5YHQYQWeKKpMvpQQaJH72ShdEh2PYLtAu4jQNEmJajb",
  "key31": "3tGYAWdSChYU2JuEVJYLmR2ckBSHUYoXLMNcFSKedNpopFPUBVRH1GMBndnq2Ls3RuYT1R1q6kALSX7hFgmh7utu",
  "key32": "3FUzyRwPeoNETCWpirSkNadCbk3ZYa2t7LjTJ8XodZ5uvQkzrvv4Mctq6PYGX6ywrz2Ey2M9CXU2pTFLK6dSC53E",
  "key33": "G3qSVC4AMeeGQQQSEmXK4RDk2H8y7phbVVPkftqHVeBprQqMXif1bdy5k86j5Ud9v1Vhe4E3J6HdhHKtyarRKAx",
  "key34": "5RTeCq4Qe5T4u5CZiK2oDT4rgykQhgSyHEnTDVfspktzH5LBxMkwGBFt9sBscoXuXRW7NZHDf63xzwDjWgPkpq6M",
  "key35": "5BropseGMtPfx1DFkteGfuhSByFJfFPfygDJHLxXLP3FwyGZWava87CG84Tkja1ExDmhyoG9gdgV2hAu57RPe8cg",
  "key36": "5CLEpiffZDBWxb2jLPVNYc4nwV8Dc3pX4ajoyfP2cTBqPniB259ZN26aFBshEjrEhaq97vozE6LVVfBuSuri5N96",
  "key37": "56gjtdWZzJnTGvDzbSEFffXuY3VJweHYXhCXijPyUGW5SKCk52EVFUSbrUXcHvWEGQP9GEsQFDZyti57EXmMGc5L",
  "key38": "4J5WsLwsGFxCRjhLyoxTTCFA7zaheGXKXboVB67UHTGVP7emzxJ6fRAosC4dzCyahWwxVanh6peXjSL2ziKWFGno",
  "key39": "5GujuN6mGkwVcsq2iQYfsaEQGpP3kpVBdTSdvkj59qnefJf7BQd46SKnWipqcbyb6gAaR3qKMCzNn84YR7FEHmCA",
  "key40": "2UcXH8dyueiY7GjgXiQVcVpF8RvoXUszn7Fiixq3ZqSukJJDDgHuMvhbgsdFurgwZh95Z6ndGEvCq98hNgUk8t6J",
  "key41": "kGDXCmGrDjF1gM6Cf6SdVh7Lv61nW7BM8obBA3LeofsFBbjizugCBcmo2cAKFBUqUNDbH2d8QF9MhimMgufeDzi",
  "key42": "3WwKX16i5PSfGJdspCMNuPFbmQ1ui573tthZLqFNxKwvGU5e6ZinSfoG21oN8oTYhmVPRiAq174w3w1xFUCs5hHQ",
  "key43": "MfB5ZY2cUwhnqzXAAyNFgmVCEuASdjKN7xXPfY3taEDxQDMT7PR6u3AwhJJsuLsF58viag194SJasutYe5weph4",
  "key44": "2F3FAcoZkvhTKBpnPDMeWdruBv1gq7K6TdVrJ6aQQquavsMfxUFWT2JgPyJBXLv1VZbpZMJmXer9NzJySKWh5B9L",
  "key45": "3Yf4aX3zJ7bvCjZEUrpdYKz48Tgxt6uTXY8MFJ7t5BaKA7wFme2WbuQ7hkEafX8Lff7ZETZxKHPfiHNixgDZbXm4",
  "key46": "41GmVvJTnY8oUPkh1JhKbESWB4QFims4p5sPGPSCGkipGz1kzERoXavb6r21XMPYFLn45NL9BS6irhH2bMKpCH9K"
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
