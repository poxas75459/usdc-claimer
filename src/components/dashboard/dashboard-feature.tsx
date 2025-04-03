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
    "39VGa9hpeFTwRy7aAzckZAKpsUdShVrnCY42HGRVcGC8J8tCDS53kdv1ypHo91Naz4MrggyBQiFbZ3WCTktwMohy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o6YapL5cxWQhs6NJ4Ys3Muv4eM5dDSjD7AnFshQq2Lv33m1LHKUWRJ4fL3vLwzy7gZg8HVRPt8ssZ9pa1tsUkSG",
  "key1": "2nunqLUrRnrac6oBzkpiuLku7xA4EX9KxcSs3LjtZFiRdoZwx9ypmh9GJBms4SLdo4VDeR9Svb5phJEiT3ZocKv3",
  "key2": "5DjYGP23mPgEmbWuAeMvvT2ZkKVpx8ukPW6U87rhSpNsLeLAJbJBV43zmi74qURDk9P9A3tR9kcNn88Gr312rCNr",
  "key3": "2YDfrTSsG2quwf6M4FnRcdNsd7QZxjUx6mBmQAkXirBh2McJwG31jbpc6doXL8LZzECRydzexK7Pm97kXXucLnG9",
  "key4": "3gEwg2YM9eCCEYT5pAoCefdMd6PcsFv2rQrVAome9Sn4ema7s5Z8S39vnEoNE37uJpRioBMs6h2cWgKjdRvKqVi6",
  "key5": "4HqDGMdcKXr25tWRFnzMKh21pAXQyPc4bGAU7AzsshNxKJAqnRSgLR7rWdnXkWgiSouqJcWfYRTtv937iDzDt5b3",
  "key6": "4Q1fe9MRpk2bSosmmVs8jr4q4YzfgKjoeyoPe5KBD89Zzg2DVfB6xfeBaBarfV2xZHFt97nDPGR7a8UZzdnzaRXp",
  "key7": "2dDXynRt49HCxYYD8MVrnzK8hqDmnFfaXg8RJ8xff7ukzHG2XNmpeAT4WuanqFynzSY6iggUPtXhtumrhBe9wBNX",
  "key8": "5NKbmE3k6CPdgSgCbKPgEXFzsqf8n2NZkaCUkz6i36Fui2xm78CpYV3Zup2NDQj3NXij3WRtrRiqGnQMxxYQuq7N",
  "key9": "4Ce3uYJnBQLWRDDuUHEhjA8Hqn7w2xxnWbzMPzsoGzPvf9mJ44TprZYRtAUkeKuydJd8j5Q6aUUqhpVYSNwQKk2",
  "key10": "aZvPmSdYEHjwR6ayzesPqC7jTZvKUCvmmxAyQHPjUBHRFy2qib9aQg9cwAGRoJMSwsTuVjfquGND7UuivFBT5ZZ",
  "key11": "3WfyyjvzfTumvKYBAeZNoc9Br9ouFw3kXUCnsnLCLb4MzzvXfXnYUoKjZcjETYfBcFvPr8QCsc5FehQo1SsioNSG",
  "key12": "4weJWHtgEkBbPYfKxt3Nb114wJREKyJANE434xj1czBTEYMHP833Bb2oqittYQVExU6GPzaNUXCAYrpsHpJ96G7A",
  "key13": "j7sk6DBat7Wf92QXbPkG1faZaGKJmKAxB6bzULjxM1AyQoK1UV2xL3bm82ZVc1DBx7Gm3dpbEHps7kAhbAu3W2r",
  "key14": "3hiPnBjKsBZiUa1Uzgpv3enSkegvb9w6cyJXrvPCrsHihbmDyRCR9hvaemEEKMQvcVkHjuxYse1vxDb7UKms8r9q",
  "key15": "5ENHgJdU2E7uSn978NB86XE3swzsMjNsus11kgEbh9syNhLtjmZFDbc1VsbMtHsPY32NT5LqCY4NDGVqkcTayDnx",
  "key16": "2MwV8eZaTsNX1j4kaPyzzP2DuEU3QPnLnN1TbxyXcEZEkvMreJHeygvRZdwajN81J6CsayiCG79TRiB1VVgYUUGK",
  "key17": "UxPCfG6pWqjPvtYFVyvkTkezmpqiN9ZUyS7FDk7jVCfgyiCqwB3QWe2PG8tdSL1TYsteS8uFaQuC8UFFgv7awix",
  "key18": "2SC57eXC5CvP6huU8LvjTzLhhEwwoDyhTuXvpFphrbBjLEAUfX3p5en8bHrSad3otNrqD8M7GcxpnP9jyHVU7kVP",
  "key19": "B7ZEeRPbhae8DFwwHSkAKGqNsAUZbDLPCznsFdo62wb6qjWw6MjnyBfdjSRTsVyqqvyJPqMXfsXpHu5CYAaRc1X",
  "key20": "2cTkLFpF8D5nkfNbtNXg9Ww9KZmHTT8Dv9MHbpysqAAnPzqt8eA2tYyknZyNQSVvrCvozAvomyzDVbBd9nDbi55g",
  "key21": "3gARxsTu2XfGotyLmXVoV63Jq5G8rzQBgsAb2gkxcYgNh5dFMAt3GCC1ozsXPKRNJsRc7fN54xHHNLbw1KtDm6Sb",
  "key22": "2yUit4e9TbcV6qe9drV3Wq3BsstV32f6gY3pbPjVXKbHfUp5nfP8MGa2sD9nydBT1kHanCFrHFjEA1wTVZv3RiZ7",
  "key23": "5euuboxqzxXRY4dPcCz5eaLRYQVa5R44M9SY1VfKgXB3g2DaJyVVaRzPYwQqvcKtgzPFKHndARpX6FDem85STQss",
  "key24": "3uyYGz1CfvkaTwULMJ1zAFHPLEzrCBQK2oBhVmbusypcYMid3Gv4Vv7atMTur2STwWWrBJZBWBEcrrASp2GSNiX2"
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
