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
    "55gzzVXnKEzCuswa4zbLeFThZSwy9GnNxpu5jze3upVWwEpy6iwyj1Tdd3yHArLX21GByN1Wu5nWW2a7hMybpF1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58J2476EFhhaGjhmC4MqFTUmuq4BHgTLF4h6WrHPhRQhKMhvFDrvcPL3LPDFEpHquYvdUVWfCddY6ZF4mQq4Fjsx",
  "key1": "3iejxa71mFcd4T6BWPHaD4WLWoAPaFCzaArvN2e2QzuTGX8tULoWCbq49bNVqDy5ZjaLdzkqDpeqSP48qDrBBa8j",
  "key2": "3J7XkVS11ec6umkedrhYM6YHWBthFTZSrtYWYjhFUrUDS35FZan4sFtum5GYvd9cL87u3MWVR2rCMB39NaEPjhcd",
  "key3": "4tWGvVK16HSrtc9qkUFWj59sYpWpn1N4RzEFQZbRNaFydBoWEsyZGAUmCwFhY5gPHCTcYeL4jHTS44AwntLiQ352",
  "key4": "2UnaLyeVEzaKdUEXzm6wxfGmu6C7KzQkfr8fLbMs3DB8EBPbckHAsjg61kiD2yfgwC2z3FQW7S4jxrwkKAD9LP1S",
  "key5": "5Th3moGKAraTwU7TCG2ppH5VmZM2ssZgnG5QptC3FzSgR93tdFeeaQprBLtEB5pRQqU3eWjbJa4LBWeb9pYoVL1Q",
  "key6": "4zQqZyvuTtf5VSYj25xwnha3KDeZBQrEtjT2cKreKEg74ooj2azjZHK2a47x5vXVFY1a4vPji4yoUAgwcCLx1Rgd",
  "key7": "28Uc7zvcCeNs4i8eMhmQQ1UmWeezhJiF19idWgAWCPiJZyi4NCJMKA7p38zHkzWcQz3iXGkXZQVALwHyXGDWc2fC",
  "key8": "5Rvw28jxvE51P4eFkZCWCaLsaLe5yEwaufrdXrn5F3uuAudefkwbswChdSKYSmRWtMfMgukbDJpDTeNdEutQc5dj",
  "key9": "2ahjMQgAqKtTgZYHcqsA4x14UYdjitJebe6fujoH9E5GC5VY67ttWq4v3fxjnFdHEVz8oZxn8SFfmekKYixceh9E",
  "key10": "v98YNPy2BBZ7RoAGJdpWfkV7fckqHoUP5WjZNmmqy7iHg18opdTCW6iLy97JNarRt5w52qhi5shJeSF8aGkEvBt",
  "key11": "4t2gsj5DXcQLYBsj6Ck9Q45okh3DA9xbPvFyHQaiYHvVp8DfQ8JyfritKJcqmQq61MjiGgxNaXbhj3d25BBib1Ts",
  "key12": "4B2cMymp1oRbFxSjDixYUSBhX4oEW2z3Twm3ztpa4ovnuiU34YGnW2zTBvvbetnZQQDit8bXm4vACtsSDZ7yNFrv",
  "key13": "2EYaSX2N2zWGozyoZ4a6TYAUAmBxqvwBfPmthVWeHihxmJEVZKMcYnRGcvQWpZNyrE7gKLKMMAtqiMx4rfsw55fH",
  "key14": "5pRxCgqXkGjq7rxp3pwVVP18NocXu6ZoAA5rgkeFCUep3TaRkabTHr2kVNTyuwMpMtxWnAfiBmg6Wbe3bYG42V9s",
  "key15": "4DbLH3yyM3xmLNA1NiPsPs8kcUS6c9fAyE4QSWVScKdxe8nipAXGHEZPpzcUgPxMTm9NLJxdRJ91THRLjfNHnLsa",
  "key16": "5VePe7zkXxdZPabjvzZqNDfDqKJEREB5YZPWeaV2JKdZFw7xHxpkYjzohuaNvKFudGu1DaJmCHhP9DWqsSwiCit5",
  "key17": "5cAACZ2PYqmCdxMtxC4uSKZTvLYcH5Wy7x4zL4aAs8Z9sk6E64dii9xzgKUANUNnRntbosqxzgwcrsHhmLrkSxdV",
  "key18": "535tYrPY7SvxysbjYruNK8a18sPLzpvDTwYky7bX5r9pjqeVwCRE3e29Mvz8eZfUUHXRSi2cQ32nu1p1JSJdPLrE",
  "key19": "4XWLbiasEip39G9dR2mKzET4csxfxfyy6mRmjsSmm6P1Q3nvbKtoifHwsi7EdujvqQFLmeQrPmgw2HxTg27kQBWZ",
  "key20": "2x29YD59iRqGL26NRCuisPgtaV64ABhWRxeGekFfvEc25QwF5QCTWvHT7yvJrQt3LP51ZLtrtHUzh4XeJqrPbWM3",
  "key21": "4RoY4KMoey8GkjEXX7YexmygL3SGjsPEJQqBLQwZuByRSA34S817GjzrJBsz6Xqa6rQnZ36p5WNSKEBAjbeKuMQQ",
  "key22": "4yfexgvRGdYKN7XTYMcQ7P3jWAmswgegoxmqmSv9K6bdBniR5Msy4P36GTn6GzmhMuYBDd5Fk5f38AsAq7YEgAtb",
  "key23": "mVin7gvCZrkCafiqKyqnzMFMbpXHdVSM62ymyevk2kLXxaBVkr4TZigKoxbeQNbFGM8Nuo35r56spRjhq6uh3i2",
  "key24": "3PpSBcDsoNannRHXV2PVnGZ3r7yR9M818Sq5oXGHzH9WjvP1h3MWN1pge9JhojZBfvQoMrLk8vjDL4UbPuacAvTG",
  "key25": "2EujfjdNwC3wwMJ2tCp9FuuoQeFYtwK8kJ9gz7oDDhjG6eHezvrVgDYXA5gnhHzT5epzR1LBicsuCEhMgZeYBmxD"
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
