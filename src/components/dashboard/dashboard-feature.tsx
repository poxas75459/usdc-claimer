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
    "26aSP6APhgMtnL6LNkRjiQwcR54YPiAMkxQ57VS6BviaLcuU8KaDAP8csrYeS7UkkrVk56EJLMkjTsbpK7sHWhE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VkEMCP6PGQ13eAUfJ3EEjBan7kNwHQ1atpfYMpH4LBCA8bkBFuKV14aUYxZekda22JpPSjxSmqXe8vsCafe1rSd",
  "key1": "5s4bjfG4J2XJET7Pmk5LeYu5ttttvECaVKnTZhQbKp6YVffhybu2iYkJ3F9S4nMgkVgWuUd1E6kHipi52WBdCGdt",
  "key2": "3VH3SYJUwpKnWVCWFiVogxdAZbu3g6JXCPzkHDp8zuAFLvJZmJ6gnvQW6juT7271ZppEkDPmWLJgQkvFFtZfCVwp",
  "key3": "4zYYgsj63WZ6NPEaVQpvgGNX83q3YkdJViB9LuUh4AcgBq5p87EuP9xBEogxSG5HXQAFztUrkuBQA8MfXQ6z6hh9",
  "key4": "3WFCNoZ4usdLRwTSVQyAdGxNisyBCVRy8jUFHutgSKnPwC5RZd5vq9dMbUyyMJSCNhbq9xNr1LQWhjnWfewTNf2i",
  "key5": "5zvNPH8R9QDpG9HWQsm4xXMgJKJs5U99GfctDAFPdwsHFdQWr5rZ8Un8vWbEhgo58suGv5aiQ4BPpoerDTW8QhHw",
  "key6": "3g13z2qzj932jsxNmJdGbiddiPzUS2srPAV2MFdpyGH2aA7ywadxvK7YHECfB4LMeR93tXfzrpptDF2ohHDxX7ZS",
  "key7": "2yF8ba1L1y177b9sCzCe916ffjFXSbZoy7goMWwUJ6HcjfsHDP3k1CJb3XP1zehrjCaLyGyFUkveciRnTVzKpiqo",
  "key8": "3S8T9XZzRLUmGQYBzRfzrmcLSrwnWyhe7aSkZxeJ1EPcTW1J965bvhKhip4SQmjV9wQDKScz8VMTxX72cgawACTL",
  "key9": "5CGHQBVqWn8mXopkbZbx1RB2gLAR3UtmA43Efo9dXqY73oLfY7jKRv2krtGjgeHL7sjoYaUmnVPVZf8MM3J5hecB",
  "key10": "4m7y3DKVt91neFsMgkm3EMNdy72FNfED2dNGQjRrDMGx7c6pyQhMvTGFBkAwgSNQcDLzxE3vwVYwH2yWKtyUY29T",
  "key11": "5EaozBDdJ9JU1Ek4hmSw7TBhb9z96LTSBH28xcNoKLiHGDKjA5kjwyKXBccYmuaumFkqNdDmc1XeHvGjHNdBL6Fv",
  "key12": "5mtt4im5k7ekMdiB95oBwNRoAESaRhB6vQDSXF2trenw9tRZEvQFEER331aZw44qfuwBTzYHrMN3CDKmmGLGSxMK",
  "key13": "2tYN5mAqkW6VdyMrQWU2GT2i1PyM4V2RCkGYsQB8so8kK8crFJMKnzffwxRkQLsyPNLJvLsaYRCxchmCG7JzeKcJ",
  "key14": "2tUVgsEgQdagz57HEhJm72euVMGmEk2RZSP6DDjFPgFwd78C9bvyX1ts6pC8WiNCdgUpCqYDwF9nBQEaCvL24TQm",
  "key15": "2jQqBsr6tWNNEYsxBQiew2Q8j46pkMVjDCvWasPiD4rNYXfxFfeMnjjfCQQiwXUZZdrb1rhPEq7qWZY1t3B3XpHD",
  "key16": "3n53sDjhz4PCDYwAoirE6JoLZgmTxU6i2w55rAE9X6KATuur7U4veqfPTSFKdyCpKVJGeR7qXc9ro3ceG4NBEPsU",
  "key17": "5443W2d6HeNStAQT6n2XcyKnjgCQffZ6YwBFKuLjuDoHaEz9u8VYeXfiJXhCHWpXkirdHq5NbTfLdcZPFTwZ1g1B",
  "key18": "55JQwFnuPi9XNVcjbdCAUQE4UpZJNmSYd8gw3nnQPCCiMyf3U4Wbt3tgqy7kR4mx9xkKyViQ4Wn7EK3DwDPNVgTR",
  "key19": "4hmz7AHnTn9zwZpbXPWqZdCbZm5BWQAakB8s6rRknY2s8nAKypQWP62gtPrJYDVtM3QjPyCffMNND48ScgTaSUpD",
  "key20": "3P2GhjgRxwbQQbvS6mMrAoDajj2wYHdaAn2hnen5du4brPeHN6og8uQesfxABd1AcTVef7Tw8ZDf8TXbtEr9VFUd",
  "key21": "4nJfKCU9X6zCQ24D8VnoWf3EpsNjx9b9JXNeiUPR2g1ghRow9xkVgXWN85v9eqEt6rwiZWpxy56Mz4cDwHMyELH3",
  "key22": "5JJXpZKjiAWbBdESJf4SFVrDRuWrtrTzwdsyVLAX6TqsR8wXMimEF1dPZwRMw7TpshSLBG2JLLXGwstEtkt8yYeG",
  "key23": "3UXWv9exYH5qm27ASPjC8cWCMWspZsP8wLByBCzBZJxnyCzuSgFp2vU4PpPCQkRHaMaLAuMvyzxyccEYeYNDA67s",
  "key24": "ZBfHkvqru2NSXr1r1PMQefekVVFD98jAtPiqiUZMBRaKmYUKv2DBvcHG9Cj32z5JugUhhQybDxdprwKYEM2r2z2",
  "key25": "3XhJnvUvkhSe71cG9WiYbDYYQcRohWXBSLETihoL6GpT5xZmJoDZxdAf9ZDrXp2vnJEvx6uGVcDYcKyVqtyc6oWJ",
  "key26": "5FvX4jMZnZDTPTRimND7xV3q6TcYPDo5fyvfeDP6MfnRkkB4hjZrzXdL17CwNHEHjgwhd7Mj2ZMA2uFM5SjBFZaR"
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
