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
    "4uX6CmKAQhTXCpCXaqtU7s89LDLuyV61o8TihZ6cFC8km8y3oz3j9RurW8a7LwngwHfP2gYrr5Jc3ACEK7Uczwh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HaXv8hAKd3e2H1kTWybQKc1RLy6KqE9cXmgkxMTUL9wktkRWJ6BNkXWoJQAmbYdD5ntb89oLCqGJszjm7Nnhp2Y",
  "key1": "4RszMRxiT34MmwokchvCZDTfdKW8fYG4MPg6syUgR1eMzH4VjER5dBehNtvF8C1AgBUJkX8B1U9wd47XFYyHT1CD",
  "key2": "2ZGrsxNHdJ8h6gJv87LTieBsfTRykXuiJgWQ5fPXttPkeLA2PEehEuoUYaFRCW9CzhysXMdL3i1D7zwoq9za7EEx",
  "key3": "KQ2w9Eh8pMDVvocEpWh9NtVXF2jqgnvXD6Uh75pmwh8FCxmRc6MV8MzcKamtrL5Q8wTD2s3ZTTokK5ZoBfd9o7f",
  "key4": "4q2mPguQjbMZTCQoraP1CQwj2i2hx9wkbyNtTPxximdUcSaxAd75GgqXsNCfCnstHDmL4XPDqCSXKXv3XvEe6ZMj",
  "key5": "1GA8TnGSTSjdopyznK4xaY36uRPjbHFurC9sYU41DysXuuVrmtzxqGF2KpN1HFiNnpQrzXxbLnVbhcMFPXWKkir",
  "key6": "5tAhW4FeKQekpG5ovTzC1twEZr1o9SzteN67DKZ2qxD8P3aYufgHZ7fXfdgVqgHkWpyG6YfpW15ev2LdNh877JA5",
  "key7": "2R79o5EWMSBy4H7AXZHpsXZRuRYcGfTjodnpr1XPGcQDAGAPaKfz4S7jgxrFUh3udJjfwnPU3Tk4KzMhfod8qNh3",
  "key8": "4WRMsT2Q3FLSxNQnaAzMyBy8GwjTqv9A6E8ANL8voU7AaX1jbqPtFcRwNv2dCoVQZ9RZ79wR3fKw667SxEiz7Bm1",
  "key9": "3Foj82Ys92zvL7FSp82ujJLdAthaEe34YKEGtjz9Msd89Uxj5c8j17MaHdYmy2h4Jvc3Axz8eKtBcqSD3p1xvkj4",
  "key10": "2gmXMTZb7nNVrthqfWQCJ3pELESHESjy3M2wSjiEQ5nErwk8owbvMocLDMptwKd5S2RTTggjyHZUyVBqkYPHkyb5",
  "key11": "2tGusUyAwcPFekBsUuhSwtWS2hwRsC8Rfb821KauBhvXisNK19smKcSBXCvw138rTQSKzv9ENx2rUxqHV58XV17A",
  "key12": "3uPvKBMxzVpfbKgj6FgF8xKKo1e1fBy8XpnhwJse2bE1Wurb9qSVbnxYRyDxqPiovHnGQFetBdVY5RPXPEsG3N9k",
  "key13": "4S6n7Er6ZdJjeGKMmngPZroUYqv88tUn9fU62MVMiqSgW7wT6BNwRrXmJLqdCS4bgLyv5poufumgKHCPDsqbCEpQ",
  "key14": "sakPKTA6HFQevJUHjmohGnAmeRWrC9afFeYsJpufAhHXfP6RqYWLiaaLsU8NXojbLf8TGkzjf68kk2Z6m7XpYt8",
  "key15": "67S48eyKryRennffMVQ3XKFuFTVNkhGWHVb1pF4p2oA9FJS7PTNFkZ97DF1oL5HwYRUPrdi6Ne3EZfi32X9GUqMy",
  "key16": "35AgBs9ZSXSq5PgYeigB6c77JAAYv1RC846rx49RH5G3sViNZAyucqS6gyPFVEegjmrnAq4cScEsbBN14F6Bnkup",
  "key17": "5HATY5DUiPfLG4QwMSnVba2UQ12XtEwKemg5Zt66KwUpVmnTX4oZZ3uFA1w9e153W4kR22TVHkSUhnEe9HR1w2cf",
  "key18": "5HzJCG27gpmBkS4keBweGdgKVFicUeGWBBQK6mQM5r3UXfcWmfzHnUjfGewT6hAjDYyjYFDnm3zTWFDk1UABHm98",
  "key19": "2bhK4j6YgMcJmPzJrAADyGCkkJToKgnQQcz7jmyS2hXz18RKj7xrnueoZmcdjjEhhUMV5VbABUszr54FdTAuBK3M",
  "key20": "283cTPDT3r8if7wia6E5imo578NMP7Vp2KniMddj4Vr1N15VXur2XhAjEYBkA8qCS5u4NDqhadKMcMZGnuzbpopk",
  "key21": "72ZdH4g8p7dYmTch4Sb8VYqF59dCM3sK4sa2GS3rQrkMkUqj8rt4caxstwXQAMN8gHTu4Qf8aVXLAkD1S5PQ4Hf",
  "key22": "3kE7ziTfxF8kbXZbx4RQgURM3Qi6Pa9tercknqGU3qQWGPJbCP317u5fDKA8KfxrWTqnTTAVw1zC4bcGrAkpUeGy",
  "key23": "2syUfoS3ny7g7ubaEih2LdYkmAKA6RT8hHihXtQiT6xHuP3wE7LArZ1BbtQ2g4hX7ZXZAAaMQLRv4BVVcwgPCLFg",
  "key24": "5noVMqC4CnrmZxVdSM6mJKDc62qPEkKmxJ4SXMPwY1eUq8av4BShkVEJ8kCzaUertWYaBfW8ynYXKVxNkUUVHNwD",
  "key25": "4UDVVZPLcZPxFgkxZKW3EG8QDbyqdsL83eZsovaPeTb3UF69voG3XejsRAJD8vUCr5Xg21kunMw9xohF8jA6RpoT",
  "key26": "5ea9pRYD7snAR22oMJxWGfBMNQgeAXAM2p6fBy3ZA6WE8njfoBVCwGdtUk3FY3KjeWMqn6mHep5PLBfzzM6b1Hep",
  "key27": "5Xd7QMDCnz748YL8rab3GixHmmdD4FynUYJBivN3qd4aBVbuFEfnssYYmDuWjdT1BiqwrnjRwZagh9fMEP71qgto",
  "key28": "5VBzzfCmdN73C5oG6JRVXigdaD4vzJfnKzP3aRUTTGx3yN5RuGzML2Uxk58x1rbKVPHiXpv219mc3nWNDNYnndVV",
  "key29": "5oRyLUaTGAWDwU4NYrreUVY5g5fzKmZt4faoDgysN6Su124F3imkwdkxkgj9WGXwmumovjh8uz6JsCYpasT1Zeyz",
  "key30": "9GSNCBC2t5A9PzQHxrq7wdxRgYGMsJhMcC5UiK2YdPuwjtitN6cgmyHNp1x5CTAzbQvzpY7CH4KxKzp7bL4VcX8",
  "key31": "4Ruf7ysb15Y4fBBacNFRWUcE3BdBsDKxWSCtVYgLijYgKHnobhxaTvcrNQPTLdMtMffCvcRWsah1qe6WpCzP7nzK",
  "key32": "2heBMyGk2PYTevTJeVh7s1JzEs8qYAQKWT9zaRqpWY1VKGaYDzFe6ixDK4dGa6eDKaKE47aUNF96xZjtQyuYG3pz",
  "key33": "2Zb9uZUnmbbypSRQHkbpwCMuchetW84wdngy8DZPnTLigH63sP7qXumkN9nZEbN18bL1jnxGH7UiWSijqjx3itBL",
  "key34": "2w3FLmNvA2A5aqbaKMk2TU7eC1kRgvWANbK9ysc97JrN37mAirH98HXs2dN6vMcCrVa5TgMbJdMgQb7B35oK2jPL"
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
