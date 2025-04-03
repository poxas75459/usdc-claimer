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
    "2vqgkcYxMVux6JDWbFMs5UYKp6Uk3ARzTLkMyEsjikSinxdsp1SXfyEZvCwX5CbHWJSGG3uCVxmEayQymhqSgD77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5951jSM6F3bK4HbrXQV6oCRYywUhpp7vQpuF13LsM1fuUhxy7tJWnx4HQE16bwJnc5WTLDQVsbAJ6ESyMk6j2yj",
  "key1": "3wBAaNFiNTeVNtme1EdBkzXGc5acQAfkqyXEuGPw5a39afm47SsuKgN4WBSGZyW4GKP5rR9Wh8bvqw9yqejXd61m",
  "key2": "D8bS7QSVktoZFaBZHNjhXqS8kHAtNSte8jVdxJU5HoiBV26AvYVHW7GdWsAXEvCmJaV2HYHCxNAGsyRnrBYpajV",
  "key3": "5g3uipccGSdZqweBKPhG7LRjSmzzJ1QQrUMjA8SBePKpT6hFuoEzA6ixbDkTLk9sgiUH6ProUQcemoMkWuWKrGYE",
  "key4": "PZdjuhWVgLdirQfnEFQJ9V4E7fVoxYECg8PkUVTEpfGdjJCkiJGoEfmRdLac5BJ2VUsSGc2jqEvCQmFutpGUqrr",
  "key5": "4fJGkkvuKP1HNkihVdiFFEARCvKMGHeuykYQsy99fUnvYAQHjUvGXzz8a9oVGbBhLGE9d5MDFfbamj95WF5EbVGT",
  "key6": "2ETbKdAVC1NAv55CnRNF2V1jQqVeqELpCuX1CcmEHucwn1gpnopBostDhrbYnfMnrzuSk4gZoFNtYAQLXjmSJeFb",
  "key7": "FNfqfLK4UTkueei6eTQGhWhA2njDrH6DHEQkyUvuzfZ8CR8mjRuwPcJ4TT9UnmiUrGBgGwp1kQeCCHjg4oPr1s9",
  "key8": "4gJTnM72LJvvUpa6V4Pf2qXh6LPu8fzELzqPN9dbesspQBhG8MV6uoXcAYH2dhdksgVFxRFAaYGG5PgLqYCuswfF",
  "key9": "4Mns7vEzWGfAgUH22W5QW1sV3pQG3akFH5siXGJCEPdvmtmjNszYJ5DdzBhCWHj7w2uQjHktZGJiQjh6UQSnFjZi",
  "key10": "3oYqJNwa1iT51arTKfPgsXLrHPTdupRch2P8YKhC3HULnWFgNcSaBJjjNTBHjpXzyTCUKMo3eGH62BwH5i1GnmGV",
  "key11": "5vKJgL2CwTXCFix7w7swNc6DGGTnKv8dQbuibHnZ4VCwsNY7f261dPNdAxJQeZQrM8kwwzi6FmehHfvvEh3WpdgW",
  "key12": "3peHQ6uv78ePRwDu2pyJ6xoaXmJpqhZJ2coGZkdQJXHmJ1hpfyK55KKBen3uigvX6WZCyCZyz73rSWTom68zwsMW",
  "key13": "fuvL9EhD8i9rD1TtR4HFiyPFfz1ctgR15pAePLf2LCaYSKxFe7pVBztEhziryLVyQrfo5A4Rm6H1rSzs8fJ3VM3",
  "key14": "3GrjHHKDJuMSbxrHJkp1Frnq3idWQJxvD6K4s36WpdnjBdN9koEjr7r9VmbxopeWbcivjHtQpo3KZ1pYTdu7BGGe",
  "key15": "3is4sgLG5Yomb8U8ddWRNcrJLzrQCTgReHmzA2H9T7Ywc3aPDjgdhh4T5rZJY9fEnpKgxBNjpGX5ZnBcXtPYpdwi",
  "key16": "3tgERxKTF67Z75Dah1z1uwcBEYetkpupqzTngdAMZLRfxjm12AKP9QEgR1txZrv3UDm7B5aMMSn98D3kf2WDgBEK",
  "key17": "2ojDn81UMRXLHaDPx7FPKypiAtgMkMPXa6wgZAZER1jHi8yzvU2HmSLroZjUqgqYxwpnTqFuic16UyWdKB49DymN",
  "key18": "2PT6qXyrEjM3ecLhsurupD4Rgfwwyx8dVRykjJw79QzyrDwibDFqoS2i3GpCVe4LpXgtZuuQnhtu9BEEWDoaiBeD",
  "key19": "5UR9kr3o16C5twbSkRgKpBCh5iXwLwmM5FE9f4jMyZbSTbptTtT1sodwjVz9ZR4qkPcXnS2eUSqvpwEjX1ib6Mrj",
  "key20": "3A8KQUf95XhDGSRvhdcm4HEUCD3E92E8mtCveAYJYvuNYqMEtTqnzXVEs6yuZSR8F3nPp1bNZedLxw8HFuduHFJ8",
  "key21": "4qeUCM132GVCk9t3zBTatmgdqNFj6ZUhgQcFCRDp8qgFyyZk9DVmeVRpuUuaK7zE1NVJ8H7gTdGfsYj3gzw7jZLo",
  "key22": "2P4MH5wvPSvf94sWrn7y2x589wwpanK2dYnC26sTnS4bB7DbqpNgirf4bZUf54MjDkdjbMhEb27jrZEzGEGvfa5Z",
  "key23": "2vKdvGihe5J16qGPkcoXhdRXefUR2vTo7cWKyJXWDBaz2FVV3PWcLkb9fHhtK9gJ54dHszpnMPDHGg5dQzMmbtuP",
  "key24": "4YWEzgyAfzpFz2a4kFHVZiz4oTpPdGQA4Rk7B2GNdudZX94SuR5ivtvZASXaVobjpHpEecXvgncZNXNaosU16Pd6",
  "key25": "41uQ26ZcXpcS1aeW4QKtcpFqwueR8KrZVpi3stvo223S4c4Uq73FT1uu2rdphqqeyLmNf3wXWoKbGm7kzUJwgwv5",
  "key26": "3oUBYmkEn5ku6yQGCVA3A4VxmEZMDXDRnXiZV4sQ2Ce6Ga3qTeFcziSesuhZKpvBbo3DD2fdCokiwAwA1suvYWLy",
  "key27": "3dMn7gCoqL9em44cr43xw9oiBeTtEMvDpyGAnQ4Tw7BKjgrJ3ZcXnkJAhXqywth5WSR9gdgxYcnWhrPNhbZ6cWNJ"
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
