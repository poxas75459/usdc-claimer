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
    "5idNhtTqQVv2VeuT3juqtu9XhjnkkCPZzHhXXi6ffWeKRGoRHtXNemwE44Ain8bjbBURfs6uvSh1SYzRtsyaf4LM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42WnKcyQ4hAGdrEP4GgGh1uf8sghvJ49YGuDGqsffABiRcJcWerBF8w3PrGkEHFv9BRoFRB9ibeUVkyHZXvGpNRm",
  "key1": "5JSKNUY4fmLTDKacTdrA7ogBKMnxxUaC4oHAi8KVFMZft9FwgvnroaRV3XBnf8qDCDZH8vaX9kYAU8VSnLWTbPMM",
  "key2": "3ahG88ZL1KAhSVKnb1ZNQWrjoqNFejoiQvgcrX7q8WM7rfEDbbZyEszxpDCrskoKvkZnZrVJnv8DUSEsNEkLSCTe",
  "key3": "Wvoq3CVwnYdowbE599perv7MKcFw8Xy5fxPP5iUxX6g9JqXwGGNVRq3kDsnA6kDKMijwLR6JWSehhtFEzACFJKp",
  "key4": "5GVQyHm8e5rCXeJDpdpqkgTPMEvJAdxDoz8JB2pQR1gC26mMYhEdpv7d3PFZsCY9ZiUDpo2So8fqiPc4EkFa8pCv",
  "key5": "3eXTcAHpToqqCj19h5RJijGv6MPGeqdTDuhsxU4W1r2iCyHb2phbZF5rbT4VLc3WiAYSQ242a6N9j6yQL9vuptoY",
  "key6": "dUfj4KPofXTrjQk13jEqqV6P6ZCd3tYJJh7DzhubXVs3qTyMHVhAzwDhkdjiNJMdQLnYMcRsyy7WTzbvz1RNWtr",
  "key7": "4zyU2sT7VqTBPnoCsc9gBfRdWouKitiwXS5s3VNcNFMRrYzF71rotiYpG4MwVbdsZi5duoMfMc5BLTAW71hLE5xf",
  "key8": "4aGV8ahBe3hnYDbShUmDB7yMAxF7FBCKugwua1ySvWuttUpTBADGmwn3JijKxP5rQ6rLPMQQdoyo4vaAeP1NRSjb",
  "key9": "8Ano9foU1Uhy5uftQXqfYhn1c8YF9X4xWRQXEWRHxKCG2Q6nRb4HKBRo4EzrUB6wghosczN29hiyLdAhUBibGs4",
  "key10": "57PfvqeAtu6XYSHwMcqjkW7SmogpURTRdmU1ktKsubXKV6fVnNHMscnZKwpy7fhLiNcXK5kSGNiuT7JiqwfWNAT6",
  "key11": "23y7XoEa8p5MzRBsjcVSeemBA32U4febR2YNN2SNBiHCsqMXwrfQDggxYVzEq8yCEfFYXThEXvPdJcA2QQY4X943",
  "key12": "2MeVEBcJMbNJsPmn668kGiU7rvVCi3p1FWQBEH2YHpbGbKySsRm6HWLsfhiyktwnEqsWezjGBupVkMXUuvFEUaiC",
  "key13": "4cuCTkvsoAHM1Dq6GaXXyGyvWFjocPjdtPSGSLN9adfvEzQ9kDZevt9axwkmm1j17tNuS4jg51MBaZmqw5puSfFg",
  "key14": "5kFUmrjv65vF486dxNDuxVNUCuNcB3NDPaf3pvZW5Tng4HDfVn2ow4eNHJ3xZxG8CUzZDTuG47fn8ViP79HM184R",
  "key15": "C4zv9TXG8RtqQZLTUGVtFrBU4N98tyTJedZQKm4bDh11rsx5aPwtt4XtJH53GGASWq854VtdQXH9zaREgP6sHze",
  "key16": "5V18Sdc7MsrUzoQCsC6Mi3b42xR4fTPxGZZAhCvTEkCBAxARfYi1tKNjbrEDX72WMA4TLrrJNSTiCq5zFKVzhUnU",
  "key17": "2tztdpdBvQ3xgAGSfjS8WEzMxVE3XY2AKTDDntgzV1ov26S6uQntGWRXT1t7m9ZzDNZWB79yRfSit1fTcX5i8rvg",
  "key18": "3qRcwYfEQ2EDcwE9yWE6yAHkmodNzhQRffxDCnSz44ye2KZw4nK7cC6xJaJg1uZHFJ2xcHteC8NnWRG63rhzvTkE",
  "key19": "reY6yyCfAvJ6p72ymvgQf3onNrsiL4CA8bgEEcf59FLDCk6SKhquS5w9bcfCYjutLQMm7BhvXNdeeYMLghL7P85",
  "key20": "2VHqXxeyoTHBD9f2bB4AHGPm3Whc6nZVFo9854sJoSem5hLJ2yWqFfWjDyNBaSBrfKzh3s2N6egLVbQpcsg4CdWc",
  "key21": "5aLopmu3ysfMLojyCjtqdLXN7KiaNjA9fAvabHzm53SuW76onpdKAJmA5BcR8RjzsShuSXkqCRyZQSAYPq3pr3H3",
  "key22": "3hxXxxLXgnTgk2HVxJrX68wVGcrm8jo66xnANwJ7T91pZPCF8XbiHWAoDRkt3JyRNBaTzkQS9rai5wqzYVBZqFZe",
  "key23": "2QLye9CjB5wi5o1bs9xW8GpQ2S7yMj2SgrHz6QT4AyfD9NJt9Rr9R1yoSCdkMBfzr7ExoAvjHigQA9newvdnhj59",
  "key24": "5mXiQ39gUW8xacAxwCpkWTJ5P6hwFSbgdTe51UybPE1rzWwBkkhgS8NjCB7gT7v6Cup3E39P3WsLpgGJ5i4kaLf9",
  "key25": "2uBTDAK342WvMqzbA7xkkLME8nueiDpqsTdd5vkX9DPhLq26MmzXdRVEnDG9Cjawp5xz6ZrMc2iMMrCekVzLqCe3",
  "key26": "3TBqzVzdEJkCJntgN4frMKvcCVEhMwNibR4NGYSKBjMLRwYksAQ9pddoe3NbpE4KN7f2ipkVcjPyvMPF6TMySLwg",
  "key27": "5tgiFAvWhEwQUY1yYkGA8LtZa3bnCKAbVjRAKmxCYu7zse8BdeM2tpVzreJit2nhsEFVuh3muK5NNTY5Sayszio5",
  "key28": "389nZtnQ5VVKXqREJyybC4cDqxuYdi5rYuZCtJBfiUiQ6RE2ZNbPSkAHtxHJ8XsML3RUzYEYzLzirT7AS8YwoYqA",
  "key29": "4n56DJbJbvf9T5oaMMYZ6JgKE2zvJdwcfsjLK8Sj8QpvVx6qvnZc8exiLk17cY8gzLFhphPJVUUoBFsNLJgRUJK9"
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
