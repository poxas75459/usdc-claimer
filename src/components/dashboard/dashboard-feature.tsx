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
    "4K3hpKHsJfUrrqBjLuY2N98MVwVyEoG8i59H6eLdFiHhH13y48t1z1TUynkrNhjPUjzWsw9JSPWSqJi8tiF4bVSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KYvt94otpCvAx3eYwq69AhLdXLGt8ZpbUJG3z76pxkRPEVPynF2fFiCnVDTBZuEwGUqeZXbPNte9ci3PMYpeqNB",
  "key1": "4SYd8hoQY1R9iSuo8TkGFSBEbRo66sPqGRqXpXVgSU97FF23SWHJyyF4KTpXMf9jW9CdXqLZDXpDzMGKy8JBvNec",
  "key2": "3h2aRndD5AQWTYBy7cF3oH5oBx38L4juLHv8gv6NaZ1ijiZSzngDFFgtsAA23uNFV1MwYP8p1ETiiLMK6uLvehdR",
  "key3": "3Z9s4BNFHabGB8TdK5XKez2StyxLd1XST6uXpkfhvSd2JHwU4a9hZEdMtYyDz8T1CVoyWgfG7vVDdgdDj4rG6fKo",
  "key4": "4Ua7PsfTo5rBegpxDXAT5KTKrgADo1zKTF8wnzudtJocsc1XL7JTp1DzhTR4kQG7WEzk7umZJFYCHzhrAjmMSMfb",
  "key5": "2EwN7kcrpv16ij8vxtxKcHV6ThRBaWWSpzC9Eoi3zVPKJZ3uLEmtnMqYU1e2fzdbvYiTWd3PJqkM4saYj9imKeaG",
  "key6": "35ijFYB5zzK5adtKgRnCCr4qYoqKQS3ajeiuBVgjdHsera5wLz8BgLZQ5j5vVhSwT7sG1Esg1XPwhbDRCuby3kCS",
  "key7": "3RBv8y7dkNHfUb2wXC8Te2HYq21Ur4gKuNubmk731W8MtP4xchUYGQunzA8PQh1d9nvW6tFHPRZp8JxxhwzMuSJY",
  "key8": "53KoYo2ushEe4fQPCh5ToPrrgZzmC9HADmtqcCqBdGZSCWpKZuRAhL6wnAGD696AahFmL9r1QW8Vy26frdCu57ut",
  "key9": "2mLRUHftLr2FXarKnQVLF1pgQ4VxieMJeVEipT5afE1yMmdHQdehpGoPPLgqFCdZULrqMcEdU45wUUDA5tNoMUs8",
  "key10": "2veoV8mKJ52MYe5H8kMfXKgbrPkLUky5nkpDHQUMXLk9Q9Rys82pbKzmEiGeBAZRKCzTQFacxmrVNjamgAsZENgJ",
  "key11": "5vhCNPoSoszN6FASvfnrkEfBEN8nX8ec9L5cP4hKLzE1jHN8idCsGJ9BCJ2APrrkoygsWxoqHTq2anEDgvkZJeaE",
  "key12": "65zaTzGQf1EMyajRoGuoCSUhKpqVHtee9yNeodqhw6XeztP85nkbnEhNQcfFev8DcemxzefZ1ANUGVHTw835G9Gu",
  "key13": "43BdeYGEMVyj2awmy6ruuvqa2sd6vyk2V4GUN5oiHU2U7U1mGY5YC78yXNCcWBSqt9f5FLzXnUt9Uqegfuv2MVs4",
  "key14": "2dp2c3BxVQP4HWbAyTC6dPXYKBi266cGJTgZKzc7Bvr3Q3a6pRWtKQhfT7dWDhSDbxYgQstDPBJzaUfEp7ZrqyYb",
  "key15": "5maWFeds9iYYqzg872Yz33KJ7RPgQ71nTuoYeiLubjGzCPRNTokSWDvmB1n5hSoGNikY3aQnTWareFMck5WZqHA3",
  "key16": "2Gs3G34ACpbvW5q7ft3KupQhJE1ykMPyJJLTxz2JEoY1XR69mKTohst62qeosbMzBpDLgrT81WCbtWmCuhrg3onP",
  "key17": "M89jej9tNMuGaqrsnJHj9gJupNhiVC9Vessnv6dYv38TctfCuraKZ6YA7mTjr8MuZJq947f8NvX6TgK2ncfFHX6",
  "key18": "571R5EZMSYxdjERcH4YkDyXWcCZKdWoaipR3rFSoGUmrkrAR7QTcjcokCJQg9nRuLCTLNDrhyZnHN29APf6aMxtz",
  "key19": "57M93vopWjckxnYxYDUMJCfLdSowwAsr8co7mJSvMkKv3r4cchMkRuhhognfWfmaPtH9dvGAijpDhYxqkE4ux1Ej",
  "key20": "4LURmZP5SGuLcTFq9FnVqgpSHZ7Zb1FkvAWd9CXb179RQFzVgybHqfZfQu1W9joMegiiGfDuNLYXD2i2KhBoHqGW",
  "key21": "2GLxCGWRB2B4YwTfQNstFXxiGf7JcK525GdHf1WGkGAkJ1oVVJVbtPtLaWqyR51kCj4KqyK3yZCBwdb4bdYRgMTb",
  "key22": "5XVfrNsz14pAH83JL9okTRgp2R5Xs7DStkt98zGVYtzE6u4KJ7tSTuFkG8sovpUAuwtWmqk1sKcLf7eoE7ga2cUy",
  "key23": "3Y5qLeDZvtAcGAZs1C5rHejJ3cN5pYm7ttbzTDPAY6CyxsU3UnTXwMDGwbpzeahrWcJy3v3xFGhE92AvGYB44Lku",
  "key24": "5ovzePuvFJ4T5NsKuB6Zfr4ZSJhSfmq9YVx1qQUSYJWvF4EGeiCkqkSSWbLZh5f2KAAdYqkgWhZpwGyvnhCWHDvW",
  "key25": "4WF7nLyFGBpnJQ9Tw6ZCR2SmJGdtSiuwwjPNYcTJ5RARwgyNfFa3CFLS5zupsRjUKRSn8yS3GRjsMJmPBCiYJMM1",
  "key26": "5ACXjSp3NtC4Bqx96zmwDngijiHNL2x1jBHkGTWUK5aSbEZ9ZhGsKGPAkxdGWzA86itKHz1ruRGCsKaQm8ZDy4Zq",
  "key27": "46AcM9q6U9uyNmKWzYrmX262DFKJevdx4vYPEeF5TwH1J9Jy5DqzvnoHEcQ3BqMaKwbK4L5ZrTT8ARQhPpSw3itw",
  "key28": "2GwuskKpV3JmQWbBdb8CrSgVW91uXdGdB5dQBBTXMZK2TDidJuDZUVuYNChW2rgeykJcmMc5ppKvFLvxqLDeb7ax",
  "key29": "5sJfY9Zh5A7SS19AKRyz7yEAK9RbGCbQZoucH7mdqpYsv8GMoA3z5d9CobrS5LCZqR499PWtr35nRgucyDJmfEZ6",
  "key30": "58Bwae6NzGWAnYxjsDCWDziRKi5zTE94xvumniEcXA19mEM57xzruApV7q3et4xCWu6BBBdSwN27VMRWSbstDPvi",
  "key31": "5uJrh1S9nybvgCunhRUJeSUijxVvksscsFQbcb1LUaGCuihrTNSPcQcuVTgWJLM91Gc3uug1WnJNMYi4fbAa9fcA",
  "key32": "2G8YJGMwy8mGYFAxbNh8Z67E8hNnDSpDb7EUbCZck1zDeDthte7TK4iM3Q8FeJf154DjencQ9tuHwo1CT4qvNQEi"
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
