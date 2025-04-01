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
    "sSyWqRupTmvRKCmhE9hfHkT693oLN4yBoXwnmrCmxu5nkuJaPzqJLvUCZEN8A8DLdGEPWBD3XJW4DTi55XosgUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PxiLA72cmK7xwf1x5v1mRQAiMEEh6azUxaX6WBwvAe91tbUxHfsaR3zg1vPLURhfipXfrthohWwb1pejgnYNwwZ",
  "key1": "6Ec3PRpmYYwF332DY7TPg5rQgALVfrECVuifLRZwA92WcfyTnzcnMNivhEZtf4thU3F4Jbae1VPdcAmAGSxFjrE",
  "key2": "3s1GdP4pNPN5gir78LZjNQG4DqMDLjkj7vjE5sPca9NSvPJi9yAxPK2z79Yhx6MUdLhu3aR8EqoHqsxN6xwEHWYr",
  "key3": "3ejyJyPGjNcYSdwoitnDJangTF3miMKa4T8dC4kxqfYr3ib1h9sVnQhPUKEyKJJam29VWTDSXa11EiQzAvqd2UQ9",
  "key4": "4Zd357ZpbXUZw8dmSSq2Anbxys34AUNT9iXJduSQL4QvnpVpJVisWMq46s7D4uxe3AXeucaXGghPjsUQKavXsyyQ",
  "key5": "M6t9eARLsdGix9HG5maqUKmhZ86wbhzR2nKBFREuoba7qPdzLcf3hDmjguYWmR8BAdrBryYALoFdEZxM2JpptGT",
  "key6": "3uYEyxzBwqmgvjrCd2uwKxqQS1ftiheZZtsBdvuzfcMruyjF3DgSJzZktfdutEm8vZvcZLBDv8v6A9m3xqdyr3ej",
  "key7": "3Pfu4bgmz8jUHShN84A3nUtotYF7MMoYGTaTWoyfUZ6occn58BdpFTHzcR7CsGJnphRHDjPS6CzEbciz3GFNs7gz",
  "key8": "3b8Khr6CuJjyZAnw5KaKXq2RTWetKjUXrhWP3DUsZbnbZ1VXnBkTNsznFmMt4E7od1YfCt71iM9GkNA6Fa6nWbf3",
  "key9": "3gKyWYtxJR2zNbP2D8yVGQoqot1ZtjEMRcP7baei3DZ9o5bGiKiBv8sAbWFCuyF6ZBAn8rUgH7AYQNSC1cxPZABW",
  "key10": "5vzd7AwAA2r11Q7KHmEkNC3HnHpbNnLvTTbPiM37tGR5kHZxCyJq8dLFjoDBgcF4C2PyGMgaJjvUeoVaf4NEwxCp",
  "key11": "4tmPSAHo3vLkDjR1bGbxtbkvBGDUiW6Bz39Y6xtWoKeScnZj34wkWmrRke7Yx3DxJAn3TzYqsWEwgPGBgBt4Xw5w",
  "key12": "2VCSgvVuyHK9sMdV3uhGpr2bgTgq69sQ4o33NLWakYudNqjhaRe7M36hmtrt6FfRdGUbdMp6qHxDtrdjWKo6Wu9q",
  "key13": "5Z8TfV1UPsDZa2Mn7w3EvhvwkTVedyxfznERubCDDnEHkDndDJ4MSysLYu1iMkCq6Jk6Pi6J5dHLRynSRnj6Jrfn",
  "key14": "3mVYFXuGQfKj1pbi6pb7n9YPxQPFc5MdUkEK6ETVcBuGsPQzK3aFFny8XGPzzBwz7CAuGLowpPEP5z5DqVo3dDnx",
  "key15": "4532uGPkU9usUgEKwUdZm79J8UGvrGYfUfhA3nX52FGYFhtUhDgnE91tooxKbSs6ae8jUqAXUYPV6K6EdjA3HGUK",
  "key16": "3ja1WBPfmJxyMRzMrvRHKVyU6C44xqYkccjtTpnGqx5ujBt4wfmf7NTQyK7wvRwzW4J3LBXWXB3dtE7NzftEutE5",
  "key17": "W14yuoLTsNTaUnGapinjqZkePGBLoVWwEENcb2o6gXQgLFf3VS6FaSSfMJ67oLjK6VqtqjhgUMdjyB3oM2kyyZ1",
  "key18": "wCpZXxm5cHP7Tjxyfb9cMbqpoJx3NfdxmeHmnvNMHo4vBeB93NQfq7dFvGZcyjtoarD1jEZQsdZ1CyFcn9TouVJ",
  "key19": "4oYoxSkNGjp4KbsAfVHpzrmbRiCHyXRANsBDMwy4EquM9679aLXTgdB11KWCktMK3QpfjoXJp8F8kBW2Mh3WnVUH",
  "key20": "2LJEQwwGs4SxZJSA3qmRF9DGAwkK3rE4XhKADhjS23oChgUWxYviZdvxRXi7z3G29Ljfr8FxY73sfdhXkf38jMxT",
  "key21": "4ATDm85TW3xJQSJyPq8435ke9mEUPG18n4fTzx7f3ZgWbigoFg962gkh8T173S5eb1fNpiqT9dm3xyknPxsdEtSk",
  "key22": "5nMaqE82syH6mW7eV97PskuP3bbH3p23ypWLDBvRmt4hoxZy46pDkzwYtNAWh2SNJKJvf6H3pEexUmB4FdfYH4AV",
  "key23": "58K7n2uMDTq8WP36U9Np3jFQn2r4ce9YMQxbe24RQ7JycxEGN4mxFUGUcmPUQ77hXiTHpuhgLoSVX1n5KtA8NhoY",
  "key24": "2vbzwKioQom5UoCMSdEw7y3zZ3N6jYLZzsDF4WRB34ugYg7CKi7Y4niW3qGsdrnhrmKL6eEQgxLhSYNJxCyvWRPb",
  "key25": "4MrnFuGPSvTwAt7xUHjpn2DPbmninuywQscS3PfZjtKztH9mJmg9ZwwhjsbhooGy9GhC1H7Sk6fXti8K8N9kcBFe",
  "key26": "24kXkzfT4X1JNgJiC7rBb8GmjnvJCwSGdP6gSa6Q9XsMs4T4yWFtxmkuV4xYKjvWjNA9TkiAHeaDttPVfsoy2XFx",
  "key27": "3N5bVQVsrKMmndg3FAgMMfEAagqkW4noxJipmQtPTLnhxjsTnNkfYrGzLRbHmHeAgCPk9KSC2Ny6RXLvacvn5nW1",
  "key28": "5yVqXnQU6C8LqVs8955xDSwqtY6jJNFKxiLDpbNECEFCTrrhZ89WJMKd1diC9RHrm9JJvHDroEv1QvewqYifpt5y"
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
