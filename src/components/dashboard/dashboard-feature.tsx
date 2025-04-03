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
    "NZL15FE586TwAp5JwWjWeSQD3b1kyHMD1Ap2a1UNmR64RoxnqsVEKybCxzUiXKnDGddWc1T87D9uhY5gKyLzjPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qeGba3vRtSS7j47VabSqyfSCS8PeapbTeykMzb7ehEHSUmW6YL75nNiT54scuaTu2NFf9BJUQdFpvkTueku4c2T",
  "key1": "3ciuc8uo24UGExtA4jeYz52pCRxrbCfeBsGx6GAGeDEhcmjTyhJ5aRto4pk1Wcr6AJ3qS3ZNVJLMccLZJe3tgziU",
  "key2": "4ucWPcbMNmJSGefPJYQWdPto8QLu9rhWi1LQLmgtpB15J4EnD9MTKhdWk5R4dfX4BLrcL3mmTQ4AvpQaaD1P4GD4",
  "key3": "4NJKKhMLt5hVxpMa79nUidP6wgqjfxycFQSUhZ9audnyVYuz7xetEBcqEDNikSuAhM1gwrmq4EVvyiiY579JELwe",
  "key4": "5w7EmjDXhFTE7m3urWhf9JkKqU18qbKcC7Ljvw7j11dgJYWBVeUsXMJkKoUFkXM1SCC9Lv1kjvzyb9dycbsKCzBa",
  "key5": "7ukBnbPN8DiCV5w4EP7zDhfp4EQmwooYnzXdBSaPRptV7Si8YB29R61k8UohMm45w1bzA3AiSnXjARTEzNKKaqj",
  "key6": "2zFk9PZstCjmNjy7SQ7FfUKSd3aUH7JwpNJCQCL8o5iU54WjS9y2fnmPP1Q9aCdgJveZFa4PDeuoTUdEuLDTK31T",
  "key7": "5PdWGnaDQLfNssL8g19VAYGJRzJ6CnJwN1bh7TWHgW8YTfhryVeFjb7enAcJWitA5c9J5GmckhmW4Pk2sFFRkUMC",
  "key8": "2eJHjTfwpUN4sZ7mppVMfdCES7pqXguhk9DNdPbWU7fJ1d7oFWKTHFBoADKxCuUMfkKD5qpkwkAEjKc4XqMXTySC",
  "key9": "4xFicSJ34Q7srCinEftArCnjnFdMgj3ddXXPf6ZDndMma2WMCaR7gmjdt9EXZKE7YRxDLCHQdRiPEzTAWAm56nMs",
  "key10": "apnmVSVnQqxRfhoBWEWWkB45ToXhPwEhiZHi9si7beHpNfbXTQPmNDnLTKc8eGfYUfpvpd2ESM7YhjGN5zJtmM1",
  "key11": "5RvmogdN6jn2uzj1hGgNNvUpUv2JZZnBT63HLixvLSPcMnbtrwgKqfkedVxV3ze7jDVDYhTW1UCDz5FX7F2a28A",
  "key12": "ypAko2R1Kh42xNRjq4ijnSW2yWVar6ArGXN221Xe3TR8jjFwcgYzQUCTrD1NFhKoEVDteGkkbAAafd4jjBic3u1",
  "key13": "52KJnScS6MLziuTnLSZ8N6tjTmzpKkbTXaGaHtoAowRwqRoDXwT1kXePTGGwa2rcSxAmQAq84QsrirAdzbYTNoah",
  "key14": "4KqcZYbeArZX8xnyQN6YmpmEU7Eo6dvRHqCz7Eq6nmYh947nRBbg1w3rK89C6sULnsbtQt9nGaNRwqeLYrCv6LPW",
  "key15": "X1GVzQn1m12EQ4ZiC7rdVvJCJGBPVqGFTLm4KLEigy4AuBMXZ4MvNvgzfkLng5cj1CdxN5mrBPvwhrcNGKFMDUR",
  "key16": "q4upy2e2fhVzt6jUMEYhwEUcDJ2XuBFVA4Se7zoNkikYJiw9Y5RsrKyJJmMugY1QShhLoptqYZsi4sfiNV26Xsf",
  "key17": "4HDx7ovjxxcu7qBkT1zoEeP4UXPVsAYHqxwXoiSckoyJgxuKmqMUGWr6NmwCD3SqxTkWoofTFN1c6RkuximZppWw",
  "key18": "4p7uyY6WajTeN9LHydPLC4X2U8YF8uWTCbvJkSiP6KuoeebcJppuFWfAsuWQn5K9JCPaaeRLFX3nAWt7YWPZpvtW",
  "key19": "45Y3SSfLnWuepDNYZUPUprFFyA5prfMjS4dZsWsToABLzgJ47ZrDBujdmHHBKjgJ49SvzLcEt2UTbZTkYE8dmmSz",
  "key20": "4VKFbFr215dN1aYZtnv1bgfHkQZsa3qPoopGPxtrECwTn4MoZTSgUi1DSd8u5RYYRCxsZHUoAFnQTyDR3W64No8V",
  "key21": "4N5CJr9bbzJZMgSWpwKarGGxdsTdPTWMooFieBV78Ggz1UDmCoh1ijBwVhKdKX9GmPF6pm91Hez1Yw9ZyvgVqj2F",
  "key22": "4piHqiLJmqT87x14PiLBJkkab8qn3AE9TYmZb5inY3fbHzYszxA5zwQfiwUSqLUjT5BuYCcCXJprjpgEDUfjXvfA",
  "key23": "3pPt13FMSinwzGL3CK4Z8HHaww12ym2WDbwRLWBWqc77XXXpuXN2c9CPDFYhEKcSnBsYTRsTAL6Y8VivehUrb3cf",
  "key24": "3NcEiB4AU47S5gFkE4caNtxCZ1YQg3dVyLKgt9pHMeFR7z82ESLRv2c1NZnzBJyUGTopkfJL9epQ5G5cwbR7BHxR",
  "key25": "3yrVM3XF2DUpxs384TbT7JQqmNmj7fqkjjHCbPsaiESfXEkE8qWjQDpvDN6y59dnsiniLnoDX4fCsBSEA8vKsdMC",
  "key26": "5gUPCL4dvqoMZs5z2uxap5kZYdzxayZi4VP6YD16Mr3MaHa4GtsutxoybY1kKbs4wqkSeDphs1VFpBBgp7vEvS4h",
  "key27": "JKwgmxE1NgasxZg18nB9tokHpjpwsTzw43pTF9RCWF7B56aMDsgFAqp1bBmbqXmTcQddtb762jNd6rV87UCSJws",
  "key28": "kBPPfEiAtrF7grFbJ5k4cWgUM74axJxiDwQnUQQSCaNpcCQiZyhdKuKp4voBpnAM6JuhYBAgvjkj2DsdiMCYWsR",
  "key29": "49BMoZjLK2AEhXHzKjmpSNzHgYbREfwwRobUFRYCwVcj75cGzeL2wcWTuJF8agcyRwzxrCEaV5jqS5GhJaETCnjC",
  "key30": "5G5Yg2YVPV3Y5Egq3fYNWkdx6JL7JBiyjGtmuRd9q1U3VbxVvnLHPMBUBqA3QcZxWhphUbnPJjPrTGCg7sLjT3WN",
  "key31": "2ax1Yr5bkffLYsmht921vvKBD2iFTJ6HQ4DXtjgC45av9jL4kGxbrKDWzQQhzJ82Q2awCms6nTRd4MMh5FR8v7fP",
  "key32": "4A4TpjMJbdF7rLifBTwG8MiHCmu4LWVVkcpQJGhd7t4U6rBuUaab9XHJATNgat6AWW8hTyTUxFz98HYSuUCCrTt2",
  "key33": "FRbFZbzfqqh1k4tx72pfo3RwvjtYixPKfoYAFw4RhgV9QcNQ3xhtPET7gnWTkoAMSS32y9JbiBdoWnsyC75AAxG",
  "key34": "2YzHWc7P49djCB9FthTErM5bNZpoFw1ZqkyVpoXcByKqQWRYwKf7bdfTuE2LRJ852M9czpzxSmUrX3u6VfTtTeD6",
  "key35": "ceNT8iuVB4kubSLrbBwkBUpnFyiGsv335za6EUsBdFcCGuG9T8Zzvs2pUSVaNvWmHu1kPmfsRTUdH78Y7y18zAu",
  "key36": "3hZhFvuDRMFLRFAxwKjtf3GKZHz28bQBZoFtgn4xbAUkZvpwJ3XcbC1EoWUeDQk7R9cKBVr1X6AGnjsMrR81cvku",
  "key37": "3B5y2avGavBVf9UwNdYCSmuAR78ALTCwF6axrdBg8wXH6C26FxS6JLsCAtsC2WMA8yMEwxMX6JFUMvj1Y3LVQ1tQ",
  "key38": "uaJDswFMM9DSv6LhLPMDU4w54YAQJDAvkbuRFUPeoN8tfoohaRMMRVETEP77ex1rNFDmBXj5MJtd8Re1ePdDixV",
  "key39": "5jMpJUJnLqrrT1hCJvrsMvRn8SDATSx3e55v8Q6HEmXuBJiq9Bum3Wg56X6YY8hLFfDn7egZSaXhnj4mm7ourGAf",
  "key40": "1riVYEdK9hnc4NWcR4bpuagDYtTwxVZtHAeVwU84PhLqJmZFP2gDKxHo4YNxU7G3ZjmiDzvJPQEujMQpiknBN3H",
  "key41": "4BR8XNQsZ93wJGCJbkDEWTaF1kx5u5LRNXry47jYf1FnfYf5gwUPxwRJ5uTjvap3WZNokrhVbJbsU6Tmm7x2zKqg",
  "key42": "2msBG9qc4VqpVQ3cbrC4Mp99xBT9HnzGeWmnzb8kVv2Ar7d3MGLg958TF2VfeBEobmiivbUdebMZq6YTF9wrU4bS",
  "key43": "4Er78YeJRAFTPKApn6Xm9naaDs7i3soP1asNPwCDnYS8onTPn8E7m4LR4ErbwmDo1EGZCy82F3ARGhn7je6eT7Mc",
  "key44": "4e5eeTqMwvB5137TN96cL5mLSiHtvQVSiLBem9CpWGehqq4VSBAYukJi69quSbzbUVvN5D642rVA2mtyy3CfxJDG",
  "key45": "4CNa3JoKyeKeFQyx5n1742KVWEE6D66XPQSgMGnhJbeLuDXdtbMmPmkVnbRvNpyMF4wgQtQETsAk8xGBxBrH1aj8",
  "key46": "5GUvW4DfB5y4DXJoPk2KVXRpaPLqFb1FhVJfmpACkYLwNw5WD8E9FLVd5VWnJvfirfbU2Bh4HgAC2CdhPVZWAPN5",
  "key47": "5WRpMteGVjssCGBXEkaDwFKUXDkYNKMM25RD5CTechdTQTqoiQFRRWESoqBruvk9A9cZdtn9fQmohtWXepCt9tq6",
  "key48": "GUJYtC7QheMerqmdX7kXiW8NbJ1Dn6bjU4TeaiFJZ1nqmCxP1ZKX8n6K1Sa5daHYQUq5cMkosSQvqtrNemEidYm",
  "key49": "39NGPoVdaU2qq39S8UrDn7FwchUr8u4fXGek1eSsTJ71zVuAr6Kbxz37pmByJ4Ls6XfNMvtNpVs1mUfuEdw8jzFD"
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
