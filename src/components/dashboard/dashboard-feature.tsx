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
    "5gki8DGvqwzhJuQH72gPTEH457Qunbso4AU2HvJRjmRVZD2RjKZxeLBhrTLCTJNMvXRwezJCS1LUaWpZyZxWeVgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XQUrSJsikhXUZVLqjyVq4Wmd3WgL2Dj3X2s6UtQz3NJuhaKWmQQxyCZAnvFMJ8FcR9BV7XrFou6idKwvpqpbRnZ",
  "key1": "2autpAFh8xR35P2dEDeEPGRGD9uyHTUU1RBh7P4ax5oWmqx1FKgRJP8uueDoo9SGJycUz65q27yetaEWdr8DqxUG",
  "key2": "219BAhi9yemsnSHyhy6wHzANigDenbKh3uAuTaPpCQzYau97x6T8BVzmEFLaR1H3kcS1MncNHaAVLsgywYdpUraV",
  "key3": "5uKLy4moqmYn1VYqNyJCRddq9vAUvXVpZym4TgiQXYepg6j5EU9KxHbuLcizqSQEKTNMGfYx6iZpf9fBDvqLEiHG",
  "key4": "28RpTzi9CwChMrZDb7TcRWTmBXDdJeartDsbWi9eNYaPCJm57dkCUhzgGZw6crC2qUfFSmyTyjY17hierfxakBt1",
  "key5": "5nSWcqRDEwSnfPvDMLN7GEjQoH6NHDUYQqHB9Np462ucXCXN2NcUwuVCwpnkHWxNSspHb21K8ijx5VdQKsE4KYdZ",
  "key6": "tJLyTUiQ2Sd4HzAhNbygYVJqRTUNiQ3ki64GskNhDd4NexnESyHsutKFgamytHvqbmZS2PrqPYW6mUwdGGXgfmw",
  "key7": "2xDDDbw7hxgfb5QsZzQcBNeGcyVZTJpFaaoqfhrgJfjb67EjxmNXC9T6SPazRJLKarmGEbgnr8akQ3ANynUZR6n2",
  "key8": "22XKtsqLRACdPCpWZWniVKgdWbMX2mF4rTqYz8Dp4W19gLFPgP1itKartG4hQ6C5XW24gAfAKHP6bH8JKjF7FNgL",
  "key9": "2RtVG4xb1behp3rJu9DrEyXmnSnUEbckG4prHAfPHhpdatTRPe5b9Tet9ppSFv5jw1zgzvw5yG2RRU2Q4Wv6CxHF",
  "key10": "3JTi2qez2to6YzfEzfV3zsXnYwn8gfWayD1EYkz5yimtjHwHafzATgkFFGpiTEPofLMVbqLLPv91YaE8X4yqKKJY",
  "key11": "4stjCY4Mvoor5hnbmqhg7iKPwJDoUYp7gPWZpcxNnecwJeRCrmC8MsKwDfUmo6e93swTPzKCvmc9i69pmxSTiU1d",
  "key12": "4arT2H7BpZ22EdkZ2XCNtvsVhnntYS17tR1N9p5vrwdJRb2rrG9MvRwAXAxEex1RY8WAr81b4ikvsP6ZnQfv5pJy",
  "key13": "2u8DCMsuSCMxNFWA7UB5Gk9FspVSKTajijQyf7w2xRVmnHKZLPUR6n2PcMskL1hgi8BntuJ6AJmxfQd1cLWaQmN4",
  "key14": "3vL3dc67pims7C2bm35nEysxmh87vm4NJhwjQZ2EQ3s5971A6NjCMmaCNyDQoTnWmBSZHSpZDSEhrYTKX6QLf7aw",
  "key15": "2VuXdAeqSCAqNzEgNF1npcjFVegX9D16Bh6Y6Zwe2hcwVTo49EtEKq3ZFmCGETawYknKDDsWNvdYXXDAjjnZAi6L",
  "key16": "4odbPRUo4eu8oYRe73eCa56FkAV6TgWPedLLdcHKcwo4FaqPnuxDcwSiT8TiAJf1Lh4M8oFQvSFN2CpNBoTkn6RE",
  "key17": "5NYS7p7DUHxD7c9M6nfYk947mu8tvn7i33zXNGkrCL9Wjz73VBQhyAGH9QxTu7axL6JWPsBWKk72kQTwfSXuHc48",
  "key18": "4aLZqV37btLcV8FqP1SMottgcyE7XRi6AreMFGxJmi8edDHAczBPnvpctgjw1Uza7PNVj3rv6DzGKqFtGB9TsbJV",
  "key19": "TAvanfQ9RjY9bWDfMFoSSYWPW5V8hnh95SfiCdpvvnXRiMA932u7fRiP3RUJHMgLR9wjKaSdocKskuge8H2dzpK",
  "key20": "62cMowZJs7Shsbbrr9Z1LC8Up4Wh1fzYMzSSqfKMcywgxuDEy9uMbVvVSRBufJ7K6ENEFNT4HbPjSfXoicRRANGg",
  "key21": "3PnXrBJvrgGcshLunNV49BaHkorfMbmpFAvSA1f1kaHuFpfqxHmKevczqPcRK2teMy1bbcGKBqUanRZXkw3B3jov",
  "key22": "2oAV29bMSEGtoZ9z9YXaR3qTsVzvC7yrQtBFtL6p4YsipvHDHzycWakYPhiT4DekAxxCEhPw6eBXbsvhCgzmc7F3",
  "key23": "4gtZEGcvwTsuLePirZb7xXAxUFmQgRDR18ebyh6p4whZhuNqjDv9GEUHojMfspA1k2sgs3zht7d7q3PPVBCRRwWE",
  "key24": "Fwsw5mVZg4y6sD5ujJTGN1TveTSHezX4wG2KsDu3dTKjPG7k4Y2qnQBkcuaFG8gwrqcnciFGFnH1HqudEe1A5kn",
  "key25": "2x5Mb55T2CULhxc1cWoVsgR41DSs3qKZxkwqgTYerhhCqWKH5jxGn5K2FUXQZSstHCmgVYeHsxaZxiDkca2y8k9a",
  "key26": "wZjC9yjEZcFsCN1rdMGKLdMpoQ25eR7BupyDsdbD6fj8FznhcyFTeigAAYuZJyq2Uh17VHH1BhPHEaCc1EPTaaq",
  "key27": "3j4Aah5XzkYjGT3L7UWGgP8cwaEHnwqnjueamAqAGZ7xkuAgRC5jpN6Ki2LsMthBZcUvZCgpudQMU8LFKxtTGETy",
  "key28": "43k4mBRPjyjnPk3RZW1HEJY5PP94i4NkTNnQMbXLnX9xYHyopp1SqHTQ9rCVpQMLi8XG68k4wgk8aJoLRmkNwMeW",
  "key29": "5UfD4EWrP8uSJh4XHRa25g4AVzB41mxuz95y2hEQpUvnZeDepHEYHAv1RWu7kuo9zBjeYFGP4xDJ1aXeq6zwxEJy",
  "key30": "4njUzf4Prhb2oyhUwQ8fVQyY2B6gGVYLoeDjWguPt4uZ8WiagiWiUNPJm9HH3qXdYdAmyXUpU3Rfbw4qrsodoMLR",
  "key31": "5Pvy69Ghf1NzKZNtEt4yyECR8n7y5Lx5WThx7MEGALhP8jwtFiBnfvYRq7kGqCiEV67upy8pj2ttnyDbY4kYuHNJ",
  "key32": "4b9ChfXd2w6fubrCiR5kLNAwFKp5j7un9YkYYJG2NH23pnCtrv4occaQ8vCHqKScqceGwqYjAa7jm9VWNnmpu78a",
  "key33": "34fSMp6w29SGFRx4jGMweStK8d7SyBhhHmV2avsHNq7mqP3fYWR91PkKiTbRNrcf4w8fbUY1M5e69EFUeTmjCDmg",
  "key34": "4x7tvZKeCki8S56RULiRnyfHDCKxKfVcvRUfh8fKDSTAHnwtbWw5sesU4P8CpxcBxiJHjvyE1kzKWaJiPhUwk6bA",
  "key35": "jXTfSDuZrQSB7havctwrerrDugEdvxK3oyK6Y3oijDHftxEoEv7UouaukfpqKgNzcRFVywHoajrZsrehztUFtH8",
  "key36": "4WfixBgEvZ552z1TYYfnHHRX9u4tcJJ8vxBrshKZju6R3m2kLFJ24BVAZEHpAsKGcrnJTrFvYjZ45QFpL4ngZEvC",
  "key37": "49dEoLCMWrmzjpA4kZ38oZXcFgD3kTP2LS55zM7eGRStSXYbg15CVyUCakz9AEKBGEwcASkbkVVU7JLrVkuVrgSQ",
  "key38": "4kyQs3YhPCjdq3gGuLt4iLCuaNtAxHdgom3iCZCcqT92FcByBK2sQQWHgw8kosKfnT9UEXCiFi7KMyEUfvJPYzea",
  "key39": "25uV8N5DgCryx9uffb2ToSzmQoAtSzY7Dm3QHp3Wx4brZyx2B2ufkCd2BZkWg3QuAYfSWyL5Q8LDXUMLdGhk95wm"
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
