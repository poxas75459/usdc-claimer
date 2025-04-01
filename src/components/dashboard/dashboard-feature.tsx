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
    "3iejsLoa8iZj9FHkkVPsVqvtCxnuuZFHxayGq8C5fyW7oMmLSUMumVYZWEuhYKoBC4Bc4VTegzgYp45GVPNZZsJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xjJ5VGEznZZL6dXt9u6zVZqbkKSRNyqW1EEQYeUwEmUXfrBGhZSwutMyWWarcX5u3yAYXpo5tdcSCXskxeqoeuo",
  "key1": "4mhH5G3brCg4dHPw2s2fTyC3Ji5CFhczqtgq7mHGQk8W8h8FWiheMB9pjGQR1uc5ZwAQ7NEsZNPG7uzpi3iu1Eh8",
  "key2": "4YvQbsgrPumY2MRNAufsyQe4mNoW3dFYvPeedqntYGmf7XRkmAY1QnS6MMWdyt7NpSyzb1TXkievMPKWLScvD91Z",
  "key3": "2ChuBTZ75auz8xFkqqePoi6csZZnipKATCfEJD7vJ8rs13gsj1F35y7XzARBHKMo4UGG1U4MAsgmtLnUxtkD2gS",
  "key4": "5essLVRdNqVUebeTmGT5sqtru5S2nh4doa5Bu8g5aTCYGeWmTYfswTbFeEmc91eqHpBzVUUPEuczYT9cLZhV85Zz",
  "key5": "52FaWAkBp6qw5bsx6SVTxAgAYHw8SqFvpC8cUHLJV8aCBhinKo6Ep4KM4HCxBobhmZKDZZHsUKQLWU8iBJZo9pw1",
  "key6": "RCraouYYoZPGcnjwnYgzV1YJVuX2Fx2AnDJC8P1QxyLbo4ixnLkrQnuMNEwLHCGEbuSdYmVNVVMCXg3NGxosjv1",
  "key7": "JDUaYmKg1yAR2snJbkh2L4w3YbQHbMpZACehHojPBxozD6R8jEcFL4dXbkZkYkkxTPeXQTovZ7YNyTNSvepYFSX",
  "key8": "2sxnp2cq3fYiEEcLuRT9ab2eHTa5zD5nMupsgiEzM5rBUY5iPiPT5GKdXCDPV7LxuFz2p1doaVUHNrZvaAepc4oG",
  "key9": "2EQcLHs72Lp36RWS7oaH8KsQCyN6i2pKjf88QxKLfcnN5TWyoZozUyp2Yzr6jLozKPR6Ncntzy8N4bwG6GqmZsZy",
  "key10": "57ZDuVdYN9BAPu8nv4PEafSyp9bdxEurXyzc8dFHgRcXNDzRAygyKuRki783TW35YqetYUu2fDkLAtK7rfBB6Fxy",
  "key11": "5xK8dgXFSk3vBvHqGw3jpVJZUvkiYP32MhBDUdHW3C3iWVDNhqKs2WoaaxSat6c3eQrff7rkHiaKTGeviDPmHRgj",
  "key12": "3reNP9QuSSXCye2tGiFTkgRp388GUYQqnfX5Zxfuyfs8ARDXwywzDm3pJY3nvjEZMSfi5VAGnEUAxbho96xFWv1Y",
  "key13": "3AGUBnLXGRCqExH8wLQXsHWVqfwzDr25y5XLtPkXBRzBu8xaTmabaq1CAYnGbsjmgoTq7Zw5F7rFs1SRYzpFAhw6",
  "key14": "285AgXmy3HSnbnYPzTXobs8LiEYhnSpDb7AkbVB8yznHAPdZuXkF39AsXXqELjauTmApHNDySf9RyBKLFPV3uHw2",
  "key15": "mHLGu9eb1rFHnTqF44ncj5pAmJrdNAu6b7pEspi9GuZFPGRBmVrEMWYGW1chxpbBDNCY892TGfgyyM11G5p1tpx",
  "key16": "3sSZmB6Bdgjg4MRkTvktae4eaR9z3HB2ydxt4xiuzwbYweexXn4Xwi7CRvqA6kiYU4Jxb7cH8UZSwJ3SHUFt28VT",
  "key17": "2rQproioQNv7Eq7vDGEB4D2rFM3qsf2oASCJTb6bMBWMNuHE3TCjFWw3HEY7hXWFgLB6DdmdHeZAsoyN4f7bR1CA",
  "key18": "45ySMFduvvucncoAMk2SbiE6LYBQji7BkFb88vTarPPfVfJKvpKoCTviCBqzzwmLxV7jJGZYYtREN2Q3qMSaDQkX",
  "key19": "BoNyHF2YCTwMZN81f1XfgTXmGi3U8rZocCuUXNyRMR89wkozeo2xje3atjYwbh4G49LJbE3wGpXEAW86DBAfsyv",
  "key20": "665iYxKxGeBi5RVRUrW2UbRL6kPnvKEVnEHTQ7NUG7a6sUvrAAucFAkr16j8wckFDyS6gLxCC7U2LjC7rH1tub3w",
  "key21": "27KbztisQ4CyESKd6RKtwXHFqwGZ7QhBRHtCkVG6suCApV7aRXrjbpFceoLoyKNJfUaR1QBuALgn9rtiqPxkqx7p",
  "key22": "4NrT9vobpSw1UfKgqQqDTpxTbHxXTJkNPy8EJz6s1H7AD6ZNTmLhxqHuDtLm13Y2pJcjdEiAZb9yvGt5GNBdvtBC",
  "key23": "4gfuXLak51XrTyN6A7kwXSWjse2fpyEV2HHup24eEiATUcGHdkLzXnzpQFXRzJYu9PPfwY1nL2UY1SrW3hZgfG64",
  "key24": "4tPnsQCNCEfXYeJq5YmMYSZ7r736CqWvfV6jihrX7oaCUCPNjGAdikufPfEmaUrfaH46X1SNqsJEF1htwPG8Lx17",
  "key25": "4VMQ9vpBam1Wy8m5L5mzhNmbYSDrF7Rzqp4TTZkmwaCFhKaeB1jQ5gcK6ntw1d3SAx6iUwhC7eCatdGrruGvds9p",
  "key26": "NwKukAaFKQ74DrH6WdV9PhKf5Guz3i7sobEvRPqNXYWFxRhq34zoAMdqGZyrTokYi2vTddgzp1L25kXA6WMAhPX",
  "key27": "xvQq7z3xY5c7tuq2PJEPU3j8Wr1rFyBsyeEnrVKw7zyCoRRntQuhNjPnoQVHRa3MYbK6eVmrUjKpKZm2W4gkL3o",
  "key28": "5K8B18Cf2hNY1u2nFQvxi3T9CohoT8yXRccx6qDTTLqjky1ba545NDqQWcLh7Hg1LrG8RANgRWDiZo9SMb8pRdWA",
  "key29": "3s69Hz2TpAHcPQ1udLyqdC9WE5zR4iogSeNXQEoU5uC9LTTwEYhga773AzgUvHfjv1ZLbnmhNazX36USj59czgBx",
  "key30": "56sUaiYEf4LZtEG5DLB2u217ssMjeQmLZoZKRYFq2y6cx78isSVMfNkm58CDEjPTUB1WWZkyhvKM7c17m1vKy7N5",
  "key31": "FLW3RyTY2BVNVWLJ4HAv7zoP4FPzgsyEyMU51WfMALSXcvP7eXHefpWiZa37BCk7UZX9MHzBEgNBLnKho1aj2VC"
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
