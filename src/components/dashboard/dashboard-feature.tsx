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
    "3GC22UxyrMi7NRFMegC26wrzVa1bHxSh9Lhwf2rPRnom6wTEtJXPKz1jKnA2VeqT4u9U27fUNdjD31vvTVKnjRkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "331RisRwXUKFvwe7SDg7LvKwz1oQugVXWE3WkG2RXiVNmoGAkqphC2jE6fsGeNstcUPjnsdeUp47ojNemR44HUJ2",
  "key1": "2oonV2Zo7cMveQnKEjkWoTtPTqVhSCW4sSLWETn4CDNdJ1n3YQnM6NcycKY1BxM4MRciUJ5LBks6LJ8qX1zJefrC",
  "key2": "4PKTLNtCh1Yk2cKcGjxYkSjKewqKPWCQkF19JSHjqD9qM4gmCLa4MarA1mfWWR42KrFNHqpqmVHiFqNbWcohZCAW",
  "key3": "58FHFfSWcgD8Y6pNj8VZASK9TjahbiYG7Xus69997r95aZFQTcSvRGrQq9qzNxS9iTQCr7NWToLVTtA6oRHoAhTX",
  "key4": "Dvb5FziYRPDX8ETvW9gfJXeSu6xKE7SNsQWwMFf8j7Q9aBdAUXkM42CB1omhwkzDiM14vh7ad6xj9vXSZnpnoLM",
  "key5": "zhgR2iASXbiPaTcAZyaHe8wt26WdjtmvmygCPSqLUuDCkCKBQvKPoeonbN8FUoLh7C85Rvs2p73bTC65kxfJKMa",
  "key6": "365SC66HGGYp8QvvZDcPpgsHMw6Pz4ACBZcoLrzqSR6FTU8UN84DgPLVDQXSzEiz2TrVpRYUi3vL3uNcxGne8kbJ",
  "key7": "23o777EQzKBvE4znbH4kfZdGCSTxVsSFobhE912wTXHpReHhKqQv316ABg2gEkncrfWvUK8HadBB7YitFJQbL6p6",
  "key8": "5tDjaEhQp9LXsHkYLzV537eGgRx6S1LEWW29654FCUsY2wDLnqF1ffqsvk9dbCkmXF7rLZnP2V4n2s7VkXCRgXUp",
  "key9": "3gzCHFqyncPzQdJ8uaz9uktsW9mFf2pCBQtzUUTRqrL3dQZL456MwQs1FhcbgnBaLjXz8mS2eudZh4SP2QKfr6Dg",
  "key10": "2vUYNNhJSciQ9vyYCB8mTF6SWU6s1piMQuLfcypcgqhGALdAgPGi2T7ybYzhbmpKChC4yJjyUCR1Bz5GDdUSj9tj",
  "key11": "56UWeRPZ1YWFE3MYGsohRCqUoAjUdxtWeSA79uiXRpdG1RHv8Wb636TUM8D1ehYvktEfNNkeMRdNuPJhxxBHHoEj",
  "key12": "NGwYCyGtgBzPQuez4vzwHDYAMEp8twuRSqnyEWBNYWSEhBNYup8khC36V1BfYQpzvuJpa88wu8RAarEkTwF141E",
  "key13": "3Ab7b6i8gzhwN24dkLCTY6ahrfE19Bcd2b1TLypWfts27Poki9dreL7UWFoyaGScWo5eDoy8qDsEzY51nuM8D9jj",
  "key14": "2CTyfFSpkRdx9NF1GBsLnf6duW2m8sBdk4hfTDDoErxSjGvUm3BxDHENboCerTFwuXe7jmBFsPH5aTppdAmhnnHq",
  "key15": "65QdWE69mPnYSzhU497puLSQfdzMuZmxrb76kzyaqXanrrWPdCGsNtA7D4HXDBBGWQNSHzyR72d2EqVKdWiTA8SQ",
  "key16": "2me2VXqWuDLW3A3pmK1PBLUK3HJBmbF3eBe7uTtsgcEx8gYoQSNWQnouJs8L8w4BT9uBv7uKzYuBdFQiJKjPMm2N",
  "key17": "3fdyGdpQzQQxJ4oQ3CbWtHrBQCTemdgXmrSYm74Jofu8hQivn3jHKV54ksBdAuvKPxfzxmBHQjJCiFJ9JnhQPieJ",
  "key18": "2kCvSNVDuRABUxcGF6XpJFaszpcJVZ6z4bthmcxP1MRuAsgrC1aPjNKBxyrp2tniMbThChUR2Ze13oodTrTNdMRd",
  "key19": "5pLhLsbz6hZD7cyX8x3R2C7oMmmUyvMQqrUoH19irYaqrcb7jdn1hjCcUuinpGb7j9CVEBsWYVSbAEkWm63TjQMw",
  "key20": "kHPPWCy96GjsosrHA98Fvfj6TjBeWANhMPAoCkVFZZ3CtehuLmuzsKUjpqKSVdMpgnrkdtMw3YApPrwgLEhTN8Z",
  "key21": "63WssL1KFHE8kG1N22oKUhsMrLGYAXNP4EaVs8xCPZMDrRWL32V34gJa8WWgGWuMD68K1DfrwPaDzz26yitFABhW",
  "key22": "4DfguEkNhYDJqqSiLVdyJFCJ1iJh6fGMGHXSVKtas7uVKdcCxU9QVtXB9f5iQ12L7LUpbfPzsfj92aAff6bMQg7A",
  "key23": "3HpkDEdjKyvUXGHviHWyCte8uC63TKoYRCyrc41EpU2F6KV86YW5V6SxBBMokufvUyKPpKxjiEDGr8Vt2tCr1rcG",
  "key24": "32gzCWzq6oFoUXKWcyQYHJ143yqeraHa6qk1c8wDBrD3ygdnooQCFibJUoL1wXi1hnTSszKUGRfVp89C1UrWe2H",
  "key25": "294fdmNDwxNygWqQBmFqT2494v2qpHaZM6sSAckFPYFw8nMgbyerdrCTbbsT2VyxS5dZQ28zvr5NZztgHBjQiMGR",
  "key26": "43JhcjkJjke2D1D5dw2nu4ULY2t8LsFp8rP5HMWh9aQFXquCWWncruq23mDQYUgw9RnYvnim1LbV2EPuYhQznUi6",
  "key27": "5GXBgbaGzBtzZeRdhbMjgSm7MTAobNfbXkDmQZjMbnZ7r8ybRd35JMnxDi7jGMcn7CP4UpJ9imtDmiMtoDqYJwAv",
  "key28": "4uVS2obe3MX3nwwzafXPRZrYrbZpiAejnjAYgzrDM4UtdYNzwJfbRVyTM47seNZ2X5TTAfbNkcwEoJC6CZV1EyqK",
  "key29": "2PbWVxXEuhejS3QUsV94YSN7mJKUGvKyUVP2VvnkECG6cHBhnsA8Mbrh5u4wBfVJMosv3oaxcsLtFRc9b3Yq95kT",
  "key30": "27X4MPGoHjbiZssxagb8n5srM8zPKHwifjjVxAGc1szcJ8D954EzAKVs6QP7CjEzpMDt9oYCM4H5x9iVFpTwGxK3",
  "key31": "5GWdxBcqBftPaLDxZeSZqevCiXUBaV6Au5Up29Q27iX937cXm3Zvee3mWrD9Mdu2ZHFunM8hP6apW3WX1NvxUX4o"
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
