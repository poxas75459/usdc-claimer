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
    "2ofJ8YqiDiHLcACdRj3kwqrHfVfUiU7jFCRpKP6kassA6aYyGrnZQ5ccbtEDSWpdyFpfnNT4Ea7yvAwnKLd6Q7jN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35CAhX6pmAvzHgFv16JfD7JMUxKtB5gKnhHUKWX3VQ9kWt3VyFL8YSvGYxrGpmQG8CzzLmSg3aWh2Ehn52y396u3",
  "key1": "4hLi5pJJhoGtDnEcYsy8ADhg6jHhVkLPUMLc38ZayG8eoghmxEnU2Whbsa5ViYEv8BJzyYF3842KipZvDC5xsKiY",
  "key2": "4sGeVq64TaJ7brAMjFeJnWtiAWfHdot2pR9xxMPjBP49Rzh8yJwFySWC9JQVwquDBW2SEYdEfrg9ihj3ohi2LQDL",
  "key3": "4jJzMvSM9zmBt4crTeXoQpXTYSjnKXeT7E3dbiEcpDgxqa2nDvf8kkwNy8r7EjmQiGxuPG98qfvCSRBw4Rp8SaDQ",
  "key4": "4hN4YC9jryVRwRt1yERbL7JGRsKTbgdntzTN7BqfqC4sMq7ztE8Fby3qzstYfB5biU4JS8RHeJJrsz9vTzLMweNy",
  "key5": "27ED3v6ej34tSrbQpBGnZBiyGUt3FViPKPvmnJAG4TuAoWYYM68pkBXiXM91mqxgwri3E3qkDDhgrDzc67gZmZV9",
  "key6": "3XLiYsuSpYtEGWRUVfXxVTFSi2aakS4kGrYANQNGnPZiLjLmb8VcqFUxqugJ2w2LGozKgtMSpRox2ZoE7mb2HJfk",
  "key7": "27kGYzyykATcEWW23C7W3Cap4AKTpM5jF79z1DCaK1wMvV58HurUHgXPwcqFuNfTFqLrJ2HsyftjkPLR57ycHceQ",
  "key8": "nugUxFcEwipaCDx4bktc6SYGT3YZx6osixrdHt4Spmum6Gemkq3RQHRjGg6B7F53fgsAZYotR6hSqnMy9GCQR4e",
  "key9": "3d1D7ieoSKkZg4r2SthxxBpXx18fY7dgTb1yudTf5G9j9WwA5SjezJ33FSyjMBom6NLDK67dQy2m2XDVW7CUawtg",
  "key10": "oVTrESb9UDJ6SoFedFqcnVZ3tiHe14ALiMCxKDHEibDqyEWEjJjExh93bP5zPPXNHpd5z6xP73sgPbirMe16Led",
  "key11": "6484Chwd5Keywe2g52shEpb5Zs2XcQkRQqt3sYKo6cxEr2rxZAVvbXWsDKbqbFJJVkyC2QqsPZteoLcS62CwX3vo",
  "key12": "27WwgFzbSs9Vbx4s2t3USypiXLmXEH1yUCQBCTcv2cJiuFcqS2Rt5CjWeiWs4KY9aY9CKFgRsfytpQkMAuPtdqES",
  "key13": "bcaSdBbEKiyKADo72Pfb9q8dkrVABeLkNJzDTgK3rX7CupPw9L1Fk6FgKxx24YjZgZ83ePjidpz24wefThH5BpW",
  "key14": "5ZyKZDY8yQNpyJiKmkYQQo8XfjYt2J3BUAZJK91cu964rBLCAtAimbWHBXjZy1Hj4C2j3LprF2E1uaCkGkRgB3Uz",
  "key15": "2yr5r9VZ3pF1WbuCHaT5wSL76nrBvhYqxnvGx56zfBBVZUWSgkTs5z3RpXSPFAcLnoua32dJ5D73w6xxaSxzpPhw",
  "key16": "659EDRej6mCkYjmSTHWG8JeocPjNg7wf2ukDJALGNZ4B9FjkqkaLoAYC5joWqXALuQEwWE64jvu8iyt1ctEQMxVK",
  "key17": "21eXiQvTsyq2SCL3UsPreZxKn9815vn2YzN1x9rH7zKiuhqH5t4rav896T3RCtQECrAW2AAyjhvK9JrmhAxoBRyK",
  "key18": "29bMVXTxDGbSizQJGZcDohHRfnk21XDnXYVc2HAdHy7KZLUyXCozRRFX5e6KxZd2heXG2VoTJ1fkWKPezJzjyskV",
  "key19": "39Z1jmAif3TBbbeXAAW3VUdWFVPbxeVBSRSSm3JaG5K4AvQd6GiVkqAh9dDPhzPRD5uT7fZSVETVCBSFNuGhoskF",
  "key20": "LsJWm96Tga8t2RavPFfdU2ui7XbMrjab5xjqWbuGBR58jZX2HcuSaLVLAs6vzeKRo1k1K1ecuZbRUeXUBPcms5w",
  "key21": "yaa1erRtyVtfRxaeDj8j8hKjcrPf4cMxc7bRpn1FuzKkCxbucazYdRALenDbDJBDEK6EWKRQxtMYaUDKZcCvthk",
  "key22": "2VuufdN98GdpTtbpwUWa7NLn4zgLwhDfMPNLuytkQjDuDBSC7T8cS8z6qk2j9kKW3ocE3Y9pwfbKSxtEe3VNq54U",
  "key23": "4VYLWj9GJYWE3EtepuEmGxm36LceNSj5VDdZm7hm8Ak42cZXFnhq3REGd18TAxRkFs6iWRDjNXHFxPicXVU4QvrJ",
  "key24": "52UMMZC7BmnfJE55KSUCzExc5VtyHHCbr2EtoCBPELjHMEbpQo3taJwA9ERRfnwHrHjyWmgBRLad5mT6E7V1QRQ",
  "key25": "HLCm6TxnjLicTxCqiJXwiz2Rwu83ArjjLRSp9MHuUk4QHCoshuw7HbFLFZJzs1CAiaznE9cwhj7pvEqEbzMjWnj",
  "key26": "2xBjM3yoX3uWbenixYU7rtZU24pDsn8n2ri7yqoKuPe8oio5PjqTuCSJVh5fzCS7Nnd2uvzmBWpAqNtBpZKHeCq4"
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
