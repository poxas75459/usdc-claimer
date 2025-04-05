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
    "RgeaaCqNkFRPJiNUHvVZfHMksp4Jhp5oGMqtZgKqbwueyEpy7syF8LCLJwXmN9niSBMtuFjxB9ZuK2nydM4KVhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jr6nGsDkunezpPL7XErz2GE5Gbji13Au3epwiY9mRYbc2tBHQZnWWrFsK8CHZpEBcN3mMMUaTCkuaULFfPJk17S",
  "key1": "jDbg8ZVM2kv6Xdc6ZT4RdLjp2f1Afz7kq3639CWSwPnrYYQ5vFaSVkewqEu2176o6UEHE78zpnVJTraKhLk3vhy",
  "key2": "5DDMLwVegF6RTAwexEpoN6DicPPxnhKHwVuJ33GHaFymPB9WkmVvbhKHpAn3qZtJbg1KVnmXaPQyRw4Dvbi9aZaz",
  "key3": "3NV8upjaNRFDz7RLsVYkwHSczL24WB57MZMLNCzwBYRvT37uYJc1mEqaFRheF8bPuPz8v4LdoqMjwYS1CWWFdFEk",
  "key4": "2ZbMrFxgio7L5sEdviF87NFxosutNgD8SHuD4roeEQ3kXHU8dBhvNjypc6e1jcWEw6VFVcWmp9LTn7uuW4bPQEbb",
  "key5": "hRvKVpodu2eQLH1Hyv5eHMi5arzx2PK9CuTKWfAy5Mtj9atWw1EqdwE4zXwJppTX2nDG29bq8reuGkjAD9HDz1a",
  "key6": "2fmDy9h9sYidtKZYwvrRCtABdxmGb3nfp6x5dQnHTTN7BjtM5Scekh3cYAnDrBnrAXsNi45ZbbcawHLDHKK9dmCZ",
  "key7": "PcyE49ikw7BgVEhEVPGahLc7EYtTos4zu2eWEhEYdak9JXvGHK2DADJgH2aeiVJRYkqHrWuWZXHVhL6q6H3Sbsf",
  "key8": "gihdsxYyKdhZBFtSqk1GRkuS9kLubR2vEssYPfoVRmEttvBEyTPwPM5HvbXaDsT6ZMaJsWKACXYuffnNW2XDgAr",
  "key9": "3sdJ4n29MFoivDArT5GLxSyTj8w5q8iEcKsq1QwjaMgLaDmkDAtEFpcyH6B1UsqZaZBmbEYLfgkhZcH6xzg2WP5S",
  "key10": "4yUuGbsMVqoxsDTRUjmqV75vGi4kwA2MueuegU2GRtSGhAZgHz1mNoiHYhUe2VsocWUoTFCQvWiqZdaHXuJNbWD",
  "key11": "uTxarE4aMTMkDoijYtkpPw1C5PXZrxQU2wn6AZSGuFRewFmxSMyReuKpraBppwWnfvkYEEZ6UAFs759msttwSpJ",
  "key12": "5ynEjbtJwV145eoynUVMH3DdfxNAB6TtqHArtWJQc4FwYw1nZtPDwd921E7DgiYxLRZRJ7XMbVV2eLqA866xxnzY",
  "key13": "5SKVeKWNAr9n5nnycjy1vqgcdMPJmJsuKbGYVSBa4DGzzypQ7ap5rJ9gcoM57vrwRcyPr52RvWFnCfkaacBLmvsn",
  "key14": "3BDRY5T3nWDhxayZcDqmZc9GmbLxsZM3fKM7JJDQvHnm2Vpusv2pMUTiDtB715h14RnqU8tUnVLYK7CPKmCUU5bC",
  "key15": "2gtv5o8CGwHFTJ3REBRdstJCUYbkxFf31iM5Lqnsbh5rknrVEYLbc2e1DnQvuvzMXi81W6eMq1BZFQKo5XRS4FUG",
  "key16": "313xGLwqR7ynivGPhXWoAFmhvghKwrQpt4LE9bopXT3cp6LM27hK128CcF2WTdMJe7XsyX23T5eq2fLneGKma3F7",
  "key17": "5M5439nB9LNnAsNVK3houSxmYQh2Py2puw15ug7b6mP4n7gW2HW2GJVTZG55sWF5WVC5MMEKwKQWFX56LVwnLTvW",
  "key18": "4aiGFgMkbhceZEaDfFXrmFyuTCaErwcZLi3aPaZUbnnKmQYvwWRxgUDrKPFuVyqfsYHzTtWcm16tqbPtLpx9fbgB",
  "key19": "56aYe7aosgkSc4qu9SiZCzCWZ4fSU3mpoJmnD1SJBa1a5Ln5S6BrUHiKgVskwi3JiroY9agKhkp8TPVsieW1Tk31",
  "key20": "L7edNJUjsXekJkdppZMiXidvWetA1pRyHFJExH73oxvyRLaPKYdQh9fg4SaEYrsetq6evWpa53npyrcLuzVdMpB",
  "key21": "77g2URZuxmBXepiDPLMxCGAP2fLcNvytxHoyhmzU41w7zdF7JE1RSuP1AKTXToe8gnwfQMYK5uLUx16jFD4QShA",
  "key22": "3ai3CuSvvGMzih4YjEYftkmScVnrDnBXrPtxnAXb5AeaBrdHaMytXUhJw261PRBr2K25hWi5XZqMozYzy6gG73VG",
  "key23": "2pfkzraBWUba4kRFQy5BEGhtGrDP9CCUwLQuwimhFfTkrrjuHotbLQ4fiNpwfZRW9HTbTYtcSo7WHZN4EiepxQdd",
  "key24": "33bvNr83wDzJUenP3visd3rWMFD59stmyyPKxEJpfdoABXhmmwPmjhewMtJvAbRUjf4CDmQiq9LuQpGjVPmrgkVt",
  "key25": "2ckmrpwf3zrSwwxATMjYqHrqrYVuTTS4Jes88A3HiadVFTQRPMX6TDZWM1JSQK7hX66ut3iZPEbREDcn56EEiwPT",
  "key26": "2ccN5XZ9MyLME9yNtbxWBkttN9AMo5CDUccvVVtz2HvsxjfcQDg7RKtEvE6sbmVsX5vR6xR1Mfg9CEo4CLJGDHSc",
  "key27": "5FUnboufbaU1TFGdnKXMZjvEQL1LPSXuqTUNZkHb5Pwi5jZzHLi8FeR2edQXeB4A1yHKyXr82JUej4RFALN7CaNk",
  "key28": "4XpnA5ucZarsbC4kdg4x7bxmUt9aFDE5EF1E9p3jjuzDqi8aBJd9FDU7Rm1D8Eh19f15Zm6B8JJr9w5orUg2wTBt"
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
