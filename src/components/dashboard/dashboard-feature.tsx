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
    "yyqxfVDYLw4FYrAVMsabToWs2QoNxvdgZsYnP61o96vs6CQkQv5CbXfMPpizht6naeCyKajdvjZX1gy9GyDkoTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qgSeShPDoa5r91CeLtXDxe1X5sNZGZJWzuu8MuBu4yyiNWtYZuW4aGujkpUr5GdzvsEjLDD6m9DFYNxgAcJ5BLL",
  "key1": "5dgr9aSESapqb6mCWiF6bbB1n2UXLiKPh5Be1M4ZFVyi7xVQsU9JwdryrAwQq58AVqDfWetaLpTyChn95bswwj3F",
  "key2": "5Vx6d2tajyV5rvdoNA4bZyF9Y9rs7wRXGpdLn7rtYJTxNEn2rFi1YP6SSWcigCRu3Na75rYSH5Yc9eWyzeKnv4Jy",
  "key3": "58hqobhBEXutCtXiyunZjHY4CjawNXYrSypzzmZXLsA9vYRjP4XiCCJv7AmfGVfLjqZMwXeq6pF7ZPtPTXh7E3GJ",
  "key4": "5j5owSVUhDb6K2n2k5PtC7XHhA8LCSn4HgRXdz8TehtmHSKWn5cMEvFHxUSjuwXCRnqDXqbFP518huRN8qMyJZCs",
  "key5": "Wu5E31gRdDKVzAHCqhJ8qZPTaDauBYep4SNWQwXTi251UHAmpwfmM6nhuZJA2iPD58gZX32N4ZkcxhcNmyg1eQX",
  "key6": "4u261GUMmoQx5d3qgDf2vrqLDwa4Y2jf4B1gxERCpbkvb8V5rwnaPhee1zzyvbFgttLe7bs9qfYxVocLtBXjjCQt",
  "key7": "3TNpPhrcThSRFKViJHtbjfBpLBVVqub1LPvdxFss45fkDWe2VAPvdVcZi62vRUG2iEJJbZ8hotUVdcqeFxpeqEfH",
  "key8": "4xn7q8RcPw2eg2pz4FXgn8eekWz54yVPmUK9R6gfPK2p5CAh5autaoRWFNhnaBUwCnyRGDfWMTSuXriezqpZRuuv",
  "key9": "2KvgkmoGuno3YPus7ELhPPA7cbCXq9JHZtpeRTo1uXNkLWhrJ6memQeRC8mw9GTJBsnQD5ZYPgUMT42v8p1LEKcp",
  "key10": "2BLTVgNGjumosBUGXs6EoG3hebwA4LZbPRTF66LyzvWtCdJg9msWeuZQUpV6p5SW24mtdQxQsh2N5RDefXp8HhSQ",
  "key11": "5Ek4A7M1beh6RurQDBCwtVR69p8j7MhdLMSQb3UrHrP6Ea89MMG2bvKdHxwFmDRANAtaqogDZcb3tS5sHUGc6q1b",
  "key12": "3WQyQhKZF2QNXsKa5xyWNnzHHRc5sT2vhxm5nKU6EdnvaXzhjdYQc97ZytNEwwSS8V1FovWKdbKHHv9KDuZz4EW4",
  "key13": "2F2iGjDRh5GNgF9g4khhTn5K5A7R47o1sgF2LugGJuJP9n74gk1y3JkgX9mUmrxpa6THvP5NYGGFgc84YMqrz46G",
  "key14": "3i7bg7HjeyHupoqMzFviiL9Qiv6MEc9GwkXUMMnVNWfjLwN2j4c4waX2xJ8Uat9YVXmGnsLRvhbpbfdTGZBNMSyK",
  "key15": "2ZVwLXiYDFcf5hBaG9DMk2C7HpD9Hoc9Z1GicTAHw7Qo9XYBpBjTgSHPkeoGtF1UVsutQgHxM8szoTJdakwGgcLb",
  "key16": "5PwNVqY4Nhv2ipfida513ew2H1tTwFkfY3FGNAWLoLa9g5EsGyxyf71suPAEPu4k5BfR7rAYP9ALC1DhTJBgcNSq",
  "key17": "5HpMeKctFBG165QqzRWVQBCj97ngfYHkeRzH4uAa7mN5dptrmAsNYsavPB4KBH2XoWg61QqRzxfkMV7HtqVB7YEj",
  "key18": "2QgwMHAW92MhcBJdXj7xEoZnPsQajJuWiL9WQDvZTAgK1cTMndRPXwsFMkH5vatiqCgd2gxandJzoyjpizz44W83",
  "key19": "5A9cYg6ViSWAg97MKoYpfQMaRDQW743qJzjNcF9uDhciYnTX4twL9ZBNA37mXwqQSwQyQ53ZufVfzFXokjQB41aU",
  "key20": "56HGaqzK3ituWCSu3maD4udwePiEUGqGzsrUoBKUBNJnJ4YmYMYYLUVb7NJwKhrrCNr6CcaF7wxSr6wY8drdE1Dp",
  "key21": "2CghnDYxWpC5V7DvTYdBJdTuQ5byW4rXqxCqVG7cZQWW6CKNov9rAQ4N7YKm7LHWb82ZuZRUNo8rd2N4umTUFzPQ",
  "key22": "3bz6oTVtrxfZqJ3XWmkq49bdL1WjE7hw3wjzaCih2AKKxZi5G1HnW4UJTwTkGr1GDNbNhbBbiKLXCKRgg4k59UXw",
  "key23": "vnGULARAGEw85xGXwZdvVQNuiA6pSKHU2f9AB5Vvjmif7ZCp4wintUBRMY3mYeaiMxBqf4qnGTP4rVbr9ZDyaJf",
  "key24": "4QTtazmX9ndjQJQW29maFerHKQV2XtPEHMjTUSn29NGcitFsEfizLeJfKCjhrSmfE95cHCZaQS3JVVLRQPredbeb",
  "key25": "4YvaW2ymYXbTQjMrDrCMBZgwyLBqPaTXCjsnt3dN2zWnrvMGvAPtih9AZUrc7VFyCTgCSuvoUSyu5jinKeHtvVG8",
  "key26": "61icoJ2t8Tz9vaphyzSppLj1k9rW2mk2ibHSHW7S5TYuYPsPgh7zDDdbsFbgG7hNk4XYmjcvnkaVgypSbpQubYLZ",
  "key27": "NwRCpEPRK3XuvDNa5kNJJsfQGrPedo9PHSPW63siXQZjLh2eJYAPqUY4fT6FzJ7SEDUiKmuzd8bE6VfR5qPo466",
  "key28": "zG7E2U7zRdc54deA2KY8vC2h6BizV6jtG6uQQ8pH2Mih8ctvSXUR1N5y9d9RKNjBi469MPZmQkEHg5PP1VQWi1B",
  "key29": "2oeZk93Az47YSW2am6PxdvS6cWCcvfEKRPL3WFz4gptHKkMaW5qHL68kc6nE9pEsjEXNiCnYi22LkJRCNJrWrkbA",
  "key30": "3AYpRspjCxndGmKcEMa4gJcoWuywjW6bAxpoGB6g9L7chFv7hcaCuQVHFBXD9C9romwJeKmj47mRtzB3iMaD7hcK"
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
