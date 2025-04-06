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
    "5w3bU9zxzEPVJwsiWfv1cgYr3hHuv5yhjePserf7JSWa6VPY4Y9JpG3J4BL5ZS7YWkhyegELXzKF5UW9CHVXXQZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6gZwcNGs8Wt3oSBWUZjorCA5dZmQmpJRJTuAVefStJV73K4A1ojhEGZ1w36Vyogrv5JVCHr2nvMeaAideaGGNjX",
  "key1": "2FH4nrfBKKAKzB1R9RGV1JUYYKnRqzoPemVNXHMzUcf6tsqEBU7mC9oehJtP9aXcsXVanCBQ1x63VicjpybvWVyn",
  "key2": "KPjoxHxTy7WoozabnhXATfKrHn3Dk7yXKGnHiuphxaQPXyVAc4ZWXWfZKSb87SPjvnjGqRoqCbxFpqkMiG2nTnR",
  "key3": "4iGiQT3u5DkXj52gGPEoRMKghTNfM52TGLmGWmMAJgzyzZM1tJXxdF9ua65XAMu3e2KEkcug8a4ybXdmuCCparmX",
  "key4": "5oh9SEamfttY816hRdMbEFvJNVXKN6baViNjghy2YJ8d84b6wkR18gJxbXm3Ku2zcPKbeyM5DZMmnFLTA5LsBy1G",
  "key5": "5gQmNzhpsXUCDjqTYLx9bPQz1ERYb7APBFsEBGFGKssgrn1zZ7Bn7VV7R8CNvCHBdozDM24FRM26ZNNycXRaeQQ2",
  "key6": "udEmGRSwfPZc5osQNc4wZVJMpXGvwsqidmpyiBR28GcJDUHdhShYt5k6KDAZAefWzSB5J1LRVsCGR5WagbxXhS3",
  "key7": "4Jj6Hn2zHNpQksJKjPcMbqQuavibkissfqEbDQ3HKR3bkdwjuYoe4N91c9tkeu8LRZDKRN2o82ZM6bdqvDYNBNHB",
  "key8": "25pyjXecCVc5FkNhygpiwsUx15YMS4RnfYfsjzSJgcYxERaLbW52XrvQNKcjLX8Q5N1Agh3ZvkNHwXGvD8rrdxFe",
  "key9": "3FekjLZXxKqTYyPBr1ZytB2cCbv6x7zW49jedZwe8R2XwcgYL8rZJWbpVgNqFdJBhZX9KNq1boBA3EiMgDxzrASk",
  "key10": "5gMighjBU2Az1Xo6uHYQzgcnJFzr1W3dZpbMUbWYQA7CMHZkVYmFUFb9b1NiSLmCzPXJUa87JyZ2BphYkKDoojqJ",
  "key11": "2YXAYu9YkLNXo86CAB47gjAreji3AgFBHrboGwPa3z5tb6eLzrBr1mEjbwqUq9HPKH6HfoTH5rfbwmYSEQEqNLSP",
  "key12": "D8JxNj47dS2xJgdAnMGmuYwV5tjLpcrf9e2yM12fZgrxKaKQr9iK1wTWwk5riPUbe6unyvXiHDzsythYLjMvzxr",
  "key13": "2LTJKTRHbHWcRFe7N4kD5BmyETi1QNLjPsuHJEAABjMsm57rL72xc94oonEnfypdcwjFox9JzvuYYt6hD5bZfCtF",
  "key14": "4PoKiArQeY2DdMoGeok24o18NryUxepB5LFqfQYWSREXzFF29U6P2tVczVuV7n1TjJrkJJJazR1ekbbK5hQWzEmn",
  "key15": "2p1tBWutgiLQRpvXfnwJwdVPzP9h77qVp6jaRSJ9SB1T69waCg3RsA45e88UGV3pUzcCuVPKwF4RPLJsgGotYSmB",
  "key16": "UY1iAtVb7SFFo1cRSN7Jho37Y7PjVBercd7haURfvXER7AKyv1KqPavb6YdxhaweinsPEQjgUcekQU5nmbK1Xna",
  "key17": "37HpG6jUm87bwQ1mNDHgRvpkLV2TJ2NsBFT1Z1nn2TJ39cWUss1ipjwer2yeGLUVUVtxZDZj7aoWmwa1E2gNwZeT",
  "key18": "58u5HPD9HfxepksdthPxdZgiPjy1DuDmBZvU7rt41Pevau7MttX3gH4ujZdHucK5xfJ427aGR4erGwL3xXh7Qudb",
  "key19": "4WJ7kM8M7p1exfLWn3whLMZy9WFc5tBsrysmAooEtXSRmrxcSABGsqkQbLuEeU3HQiSqdLeJMh5iMUk6UNy1o4P",
  "key20": "2UsDCqpP8224kCW261WeW2MkPMp22nfmahFvMwe8oq8TMiVp3P2qBsFvgEt6g3zBA8WDTBZigBMgveBvvf5zy5tg",
  "key21": "4vcJJD75m6gXRUypwtAtwQc255kD8FYN52mQTmRmyjTBwyGUS6Xhcp3inBwWpS9wtwdXos2mPxnWS5LoqX9cS64o",
  "key22": "3oJg9QPG9v2mKjFhdnyR7DwVW9cU2tJXQQCeRWFaUjWzDox3rBFmfNQ6AR7S98JPXMPr156SpNF7jK9uvUGtTFxk",
  "key23": "5Bc8qHqL4qtHvJexqNxSpAraeB45q4th1j1F14p1qwhgr7QQJ5ihnHm5YcfqpVdWwrZ8kjydhwGFS7LprniEEtEe",
  "key24": "5WvAEHNmAJL6XSi4bNWgfy6hzBBeheMdmy9C5Xv1t6JK1rUJqEkuWXi7eBfVoFyZf8ARdXHYcGX7DNoSF8WNuqb6",
  "key25": "2HvvVJezHcMcJwiwejy45jYniTNhM9B1Mh9iEtMzDVibDiztRaEKPHNysqfAgDrrvVWr5ZtWUHn7A5yvXia7mSRs",
  "key26": "2WGRTtcCwADdGSLTaUfTJUwsEWfDBMiuAcgWPBx4aWsuqcKvbKqVz2pQGTNnorV3xnvtqB4bAJ5Mzr4cQZxbhpMi",
  "key27": "3YajpiUcMwvuQcdKyLYgWaitfP5T7SjcmaBvsrEeLA35zibDwQXenZpv5Fa5hgskY9PjCNy7PbciqCNoTn2FepFP",
  "key28": "4zFHMjGRD1bpMgkzU3x6saPPzqidDnBqwDXdjbWEweH7UFJRCYaHzGk42qsu93MPfLKQT5grLrhjh5fABQdduCRw",
  "key29": "prMTNGag9N41h6NyddYSjjbvMpxn6nksBkuryyKzQSunkRuaFJf5QazuRQovdGRnwWymA6d3jkgJAAYFKTUCptq",
  "key30": "7BoR3vxeBp7vgAyVHoJCyTs36qWnd9PPgSkdFDQ795vuCNPRxih68ojBx4a945CLcQqB8zVbvFqocJwEbnfw5Gd",
  "key31": "3XiTr5dCcnzeZZASGRCjUHwBhuM9P16ZeSY8EfitvjVhwvk2D4sXdqkZWwQKoU3bF3tMGfjEPHvnFPugndsFhdnB",
  "key32": "3k4cSrQrANiiyMrYLcmVpZHhCTLPygKsAinHDLaM4HzQ1QA6KPeoQZPMZ4r8jNGVKqQK17VLYWLJ5hf7m3LJx9Pq",
  "key33": "4CC5xdjc3wP9vGNwEB8aLbswM1TsJV72jTWVSSPUNwPXbnXwRmLHhYca1EmwumK4Fq8KsHF9wH5puWbdtS8zRz28"
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
