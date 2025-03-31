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
    "5jHQXe54jR7UfCiE4ZARxEnHQ5MCPAT3j3zWxJ3ht9bGtMc9YBLycPyKXV2tquRL56bQyBFnhqy3nZZHveCg7G4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24dfkk27fzTBZHdTENduwBkqfjY7PBw9g4k1czTTuw8DCGDUQ2a3kJgYueLq4KGJy7Xk5NKyWszM8hv2tq9aibix",
  "key1": "5kLd6LiWVJqEp4EKqUz1RC72dSb9gj81TonuAY54DSgcvkCq2FZAPSowjibgX15kG1YVPmjvM4srwaxRjkUcmDAz",
  "key2": "3v7FHemwXE2Y8CrCgzfSWtbMFQMiBGRKdnDN8CsJyEtr8ENFKZiQtoqQcbPEDX19uSUMBZZhYmkzq4aJm3vmu3TT",
  "key3": "5zaMhTrcfJtzdzm1DeK767UVsL5G4hQcKA6Jeo4ih8TCrMNmGn78CiVFqhFmrEArbRCmJDB3b34CUaTgjC9bb63M",
  "key4": "4oMndEfQqjzHQMk7epNkqz5LTKofZz7N9oVG3kDD7shi2PLikWWCyzuTLQnDdpi9vobnt9y8h9quhheYqepQHWtU",
  "key5": "5bvUXJtaQzLTiS3taJJW9YJAEWTNkAjjKeTSMgQYDR6SNG3bJHZjbvPskjqWb2J8e44UpiWBhCbxkte6LV8SMPRZ",
  "key6": "4LijsAKweCYXX9Gc5WfUGKmQFUXUBXPaFcJw2SqKXzsjgVes3jxoY8VsJ8hq9sSo4Tdu4vYCTUd8A1LUKTFo1AJ7",
  "key7": "2UKPJN8kkR89Sz1krXqMgbHPGkiFFmYACUdbbkE9d7cPNnEBDNeAHED86Lg7CBnkvSQQ1VmvbdGigNYcsmKDAU2o",
  "key8": "4wN3NrhE5Jqx3kwZrdPqrsGCYKjGxf2EYj4Vj46p3qCwNnPQJK7nrL3i6s5FNTRCwoLby7FmW9AbdSfWprHgHpXJ",
  "key9": "5z1UAKcgPZEqb4G97havvPebqaBtq5JHz3FDgvS4D2kYXVwnSsH2o64vyA6kmGpPkptmwFv47dacqj3Pb1KeLZnW",
  "key10": "45dMUW5Wz1TX5sNdMKdAd9WezAgZ59oK4JZ5x4S8ZUQCYR4QGJnP9f5g2ZdtRqAdjLW1DEEbr185HFNvMVWEBsZa",
  "key11": "2eH2jbFGTL1Gbkw4eiXbVUAZJ7BvRZL8qV81HzojzVEFoAcTWTerjQ3EYYMwhu6jTjMDEaDsxEgmoxzC5JPgXYXu",
  "key12": "4zft3CDNhihMj1krfUZk8H6cZ8fNYnZX7ij5bCtgBKdbnxG7Di31zT55DwaFqgTRUttuA9mCFZjmCpjCKYNZM1sm",
  "key13": "4Sc8naomgCbDhBG8mZM75usn8osZA7ormjvMz68TfX3MjFmuW1JYn4qkbe2AHKBijCVkuoKhjjJTYFwE8zF1xvEx",
  "key14": "2cSXEiKLBeaJ3k6VTAA6BTehRksbp3vTqH9FAhkbi9xqZxri19PrWhYN878dtbe3UFS3tm4fWSk92CjvMjw2LFLN",
  "key15": "4JhUwceb7ccL9rHbXoDxDJeyGiucv4ZnUUtj53cxHcoCg7xMq5uct3GFSPbVoqDf6Mb722RTQByY2D6KNwsHa6Qw",
  "key16": "deJkfbNdLNyr8PXzTb74H8jkPAoqYcNV51QRHG99QKbDHA2NueQmY69WjY3r5QJwc1FJHECM9LDAotS7X2eGtaD",
  "key17": "6GXNQEGLvcgTm1FQVBZ8j4uhZZQjjm3U8PuTNZ9GKtkWrqYYWNWKadyppoLccT7qPLNzhW1ezpxs22cog7hcx8o",
  "key18": "LUxkTpfhJRAHfRyTNoKLjxVtiR4bi9mkX5nphJw7qCnW7NBU6NUukfoBe5qEQspzeWBLUfAtgqDriwAV6CNxE2a",
  "key19": "5mcxahRk8vaUMRr3qGfWcAoqnKvCQynMAkNmZwoaEYW6Yp9hN1rQKk4XyVjhcmg5PnjbGWSVSdN3djmn5DpMwB2G",
  "key20": "5G3e1bGnM3N1H3xajztRmnD4w2FCSr7cyo9NTJhKueJhaCyZLqSCswFZt58ZtpheHTi1GprFiNwGbGVDAutndZQ",
  "key21": "3u5keXGRP9ihY9LEKJY1zDQXZGXqwceZnpRTw4pTGdkVZJiGM1vxVd58et6AJCcYE8nz1e38wKr1u9Dd3EStHa8t",
  "key22": "3UJ1vJ9KeG1tPUaPsiA54AvuwrJuBpur1Kg1tmEV78BUcSkdCVGhLsWYCAHVdMTJfYcqd6u9vHavK6vGVvZMN54n",
  "key23": "5GLcyFRD9ixuehVjouB4J4zWHfySV515EqRKLCz88PBD32U2D9uWZ9PiBHjvUStmNqNDvSLfB75gPn2AVo261Y4D",
  "key24": "oQtjKEL4KJj6QHnBjaM3ezEcTsCmWcgdgUz4h8faBZvUMxMrdw1GJeVr2p4Q5SGpiamQtgPS4wwXMEE8echTphv",
  "key25": "54gx7Aw7Qzw1pwiStYLiAQgmPr1skw7hvte94xnyZ1iPmmeNWwzA8omVLrZnM68bywnWW4SBdUNoBEBRrwr1FvAg",
  "key26": "YvSGjZnApCvfrHELKoRMn5jzuNAdfVKovDnNTr46jcYCX99vMaJ2gA3xHCFs5EAoG2ApUTBnRbTEwJcCMamZQeH",
  "key27": "2etsp73QjcsyzfwnU6eEoiq1f2FJiv48rBMRNFqCSRMtdEe9jAEnvGxJinQTLBtLx8XF5RBBmEavqzV9Bpyz5625",
  "key28": "USSJNbpTc3Vzy6NRzQAahhrPpBZDis51Dxv7EH7HGAAmTKwZsmC9GnfWBTjMVcTZFWAPqqYFTouMyZ7X8Txn7rc",
  "key29": "4np4sGzbNKdy4MzXPbh54F6FvWQ5MVK7GdNtf5m6afEtrVFwNtfu7mCNxfgJJjNrYRwMtgrJb16hVvWcH6CWib3m",
  "key30": "2JypGJEYtPVi7sfgQwRRhtXKYizNQ34SAc3ss6zBNLnE5MPdaFJeBAZQnfWhLvjnbhiy88osxJCXD7LJrUX4FCo8"
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
