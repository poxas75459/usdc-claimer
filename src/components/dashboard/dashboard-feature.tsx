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
    "5GXkv3AXdTRYwYVpyd8SdkQYMk9ketokGHfz5QAVM56hKbyaRpaPLgTUkYsRoLKqovZFpAprecih2z8wqrbBmSib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KNxw4nxNa5dR7ha8jCQ4YB5Mc54jAeyUW2vqWnq7bg27Zr24KrWBc8CS6rschysRxni1UnxCB6k6HLhxNiwY4NR",
  "key1": "xc7i898FR2KwZqrDgepxnJxLQ9bdMawuvhRY1jYKFPqRgfWKLxVcaM5NgruCHuzZ6T6oDYMHMHUQ1xV1b3vqvdt",
  "key2": "2zKW62tbLZsY9iXMNzsDNYzB4u8YzTWFt81in6TMPikWRJwSapgLQqZJiaQzDKW7DqdjprVarnpNPnw2BAFzhNfq",
  "key3": "4NRkfJuRNYvTbQwv2HiC5uRfnX65sJ4vMrSHTrNRVAa9aafJ1Ua9AN1M7EayT8wd1vDhHGs9hKNfz3vMiZ8SBA3c",
  "key4": "4VXnSjZ5rsP2DQxqK9X4CrUUdZtvprYtM4s9ZLvxMRsG4L9Syh4DqxSWGzbLRSdw3v9ooPwf11GBGRpotwsEJ38M",
  "key5": "5Hv9ErikkN6FoJZdaBZAmxvEy9BzXpDA92shCFXrJrdfpjtUmGL4F1daZFG1nTPaAixvHpMTee1CckqReF32KXUr",
  "key6": "5CLWzxAkYScqyojFf4k7o7dK1iv3QHf75i1JsuaHDPqUxTbAKaksSoY4emsFEVrPb9mQtZHAjFUun4Z8bUM9RDV4",
  "key7": "67bf4bUDMThAYK6Znd6NmM9mtt5v3sHyKArm7KW2VHxHybxZQNgdkUXHXZBGULzDv6k6myLyTPxcgEaJyYawHufV",
  "key8": "4pxDeHU6qdQSzzXwbLByruWLTCAyxXnVD1MRkQMgyNkuDGTCxM7sKcUuq2QDdcF6DhLMQKRUcAxFu6VdCCNQfMCZ",
  "key9": "3ghvjWL1hBpZ7gbte2Nvt8LR9tLkUpr2swLpeWgtWXgHXs3Y9yEgesZmYpdXss6LcUamM9LAzf1BhHd4X5oUvJTA",
  "key10": "62J8h8NjKGrLYhnG5y3q2gspV6bnRET22QV3bC6YQrj6SXLdxRymJfhbJpLDpWZHfLMcBG2p9tAnvqJUxHSusiqe",
  "key11": "3P2GY5fEoepYzVsbPxzKGe86Mv9wpr4AyDb7kTqDxvW1tsZwhUDx9D1UdhvnA5xvjK7gBsxai3GVPeRT6LATq2H",
  "key12": "2CjkrcD8H1CYwinp8z4dDHfn5ZZNuuJngkQ7ePJM2N2D1ofvRLQ4hMJHQPsPKT6ZzEJdxAsKjWUJTGJfZKT34Smo",
  "key13": "4QLe7PPDKCoAu6HR98L9EM6ucTdNJM8b7TSiXPBE4xHXudsDjkLKCMpufptrmFnrKade1Hc3NjSj7TvVFrihJ9JG",
  "key14": "2KDtEf52mvpk9WCDWacmUsbYrDG1utamRbQcbgeHxCehjxvmhsosWFF5XAeTcAgHDcrZ9iRBsTLiRQtoH18twL35",
  "key15": "3aiQ8LY6eWsaGHZ49Cj8vynRYBGKWhY3VmbSyNLQv3V5PgAXT2ER7zKM4oFmWnWhSjnG6aqYWmh3pwTvShELMZQB",
  "key16": "3aPiuNaBDBwNiLaLoLMEqMg4VwkmRArCPFvFdgQLXPPZ5aXAD8WrV1He3Zsp3P93z5aunf2L52kzqK2thf5puXKg",
  "key17": "aXJjK87wjED5RqxssN9YosUbzuccuQtB8ALQoKFgRuMjbSDJxiNgZx17JfZhkQm3cRiVDhBy1dvPfuCDS1cCRtA",
  "key18": "UYXGuaqipCmHa1Yq4j2tgSY19btXCbtWnmMRj9AbNQWA7FVMo3WiRNaLNsdDj9T5y1de49hg9H4nNYEse6wT4mx",
  "key19": "55UvYAZf39EiDSUsLYY3jrqhCvUqp3BL1CTxgn3ZZJb25R5VcmzVkfSDjJvS3URLPZRGtqd8ubrJXR8g3VCBmiv4",
  "key20": "4aus6FMA8TK1mks1mB5ew2rQz1Lv46qWobCyKfUNXiRUcN7HKhKfLnzTcMcWHoDih6iAZnH78wN77HBDEuqgbph3",
  "key21": "4yTU8xfJbWUTLb4UQo8U5yRP1FZDY1GhUsWa3BqAFXvMShGVtYaC14avpG41dTU1CfdBDq2iJyHhSd3mWKY7XXUr",
  "key22": "3GiznZkSji1VjbghCWDmRUQj7FohBXTeFkEsUR8DeFivYzRj3mJJxX1GVPALfeqoXXKBxkLrLbRW2WcedzY5Y5sF",
  "key23": "5WJut9SCFXkJGZWUYE1oisWA621FT6uGz2b9E19ik9G1vnRXVWT2dY49gSEQKrZMWZirqKjWHWHNELJaFGo8zkpo",
  "key24": "5tu2A8ST1GKFvDTJVu2NBQ4ZFba1BJkz8xHxaYyTFxZGUeLfTJmxh6KJfg6xV7jteDtHyVj2gd3uuTg4M3GFxA6y",
  "key25": "3ajz1NxmHpop4pFfhz2MDUM5EbA5Nds2uEKDtgFmZjqozDdNxAxYJaPeBnARF1y8Hn9DyHUacH85QP6vRk8zK4CA",
  "key26": "53JDM4uCYyyhg6Gz6VcHNV1T6eMuM733JAtW44gZCtJQKtkhvtcexUe7DBy2AV1MC3VwJhDcuwi4G3zmiZF7e8uN",
  "key27": "2y2VPxHzLExZ2PP8mHPxz1U9ihSF8Var9iQYzWggGDN9AouAsQqiQcmMy4UJBVAZncj7dj6L65aJrJNk9nS1RAnN",
  "key28": "4S52cdi1CHrMfgGCTGwZJKHs7YEMWciYSUzdPE6BDjXFehfuhHRq2w524R1mJoGKZVvHGTK4agWXnFZJjhELP54i",
  "key29": "4DLtWCygzQsDiEMye1vBuxoifSyAiaGz9Q9ZJyweD5kjq57B66zTdgzB9UyMVKU8FG2SXBcSRv4B8ENSJEUPWpi9",
  "key30": "5giSSm9hHoA8ngAbXA6G4SNWQdTWvdU6JweD9wgwVde1rgi18EsNvFA4XTzn4Mn79i6Z8owxnz1ba9p5WZwqYZh",
  "key31": "2dbMmtLDzeWVBG5rdDk9YgipDxztm6WEiNaVqedgqUvdSo316XDBAimtDTu5NzLmBqjcsGGBu9A1TrL1zCtRbBAR",
  "key32": "2bqf91xarhf4oDoBTjGia1LTUpYXFbc5nJ6krYhH1qezoQHCR19BiaENjw5L6y6wXd5PU2PeRJEwNAuHJFhvjcLN",
  "key33": "MoC9G5PhNTi2rGB3TTU5TNQYNjiwQAxz47hne4mXNMz9aTqaqJMJyiVSrQgPbuj7LbyCvtmWkhC6rNAX8eyCdPe"
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
